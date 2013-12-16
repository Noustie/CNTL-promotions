<?php
require('./fpdf/fpdf.php');

class ChannelLineupPDF extends FPDF {

	//Page Setup
	var $dl_margin = 5;
	var $dt_margin = 5;
	var $l_margin = 5;
	var $t_margin = 5;
	var $p_size = array(217,280);

	//Rows and Columns Setup
	var $col = 2;
	var $rows = 0;
	var $max_cols = 4;
	var $d_max_cols = 5;
	var $w_col_num = 9;
	var $w_col_name = 36;

	var $rowheight = 2.5;
	var $rowgap = 0.5;

	var $colgap = 3;

	//HEADINGS
	var $h_top_pad = 4;
	var $h_btm_pad = 2;

	var $last_x = 0;
	var $last_y = 0;

	var $headerMap = array(
	    array( 'key' => 'HD', 	'keyval' => 'true', 					'headingText' => "HD Channels*", 				'keylocation'=> "isHD" ),
	    array( 'key' => 'Int', 	'keyval' => 'International-Al-Carte', 	'headingText' => "International Programming", 	'keylocation'=> "boltOns" ),
	    array( 'key' => 'Lat', 	'keyval' => 'Latino', 					'headingText' => "Prism\x99 Paquete Latino", 	'keylocation'=> "boltOns" ),
	    array( 'key' => 'TV1', 	'keyval' => 'PrismTV', 					'headingText' => "Prism\x99 Essential", 		'keylocation'=> "packages" ),
	    array( 'key' => 'TV2', 	'keyval' => 'PrismComplete', 			'headingText' => "Prism\x99 Complete", 		'keylocation'=> "packages" ),
	    array( 'key' => 'TV3', 	'keyval' => 'PrismPreferred', 			'headingText' => "Prism\x99 Preferred", 		'keylocation'=> "packages" ),
	    array( 'key' => 'TV4', 	'keyval' => 'PrismPremium', 			'headingText' => "Prism\x99 Premium", 		'keylocation'=> "packages" )
	);

	var $headerDisplayKeyMap = array('TV1','TV2','TV3','TV4','HD','Lat','Int');

	function ChannelLineupPDF( $orientation='L', $unit='mm' )
	{
		// Call parent constructor
		$this->FPDF($orientation, $unit, $this->p_size);
		$this->initChannelLineupPDF();
	}

	function initChannelLineupPDF () {
		// First page
		$this->AddPage();
		$this->Image('channelLineup-template.png',0,0,280);
		$this->SetMargins($this->l_margin, $this->t_margin);
		$this->SetFont('Arial','',7);
		$this->GetChannelFeed();
	}

	function GetChannelFeed () {
		//"Orlando","Raleigh","ColoradoSprings","Columbia","FtMyers","LaCrosse","LasVegas","Omaha","Phoenix","Tallahassee"
		//$feed = file_get_contents("./local.json");
		$city = $_GET["city"];
		if ( !$city ) {
			$city = "ColoradoSprings";
		}
		//try {
			$feed = file_get_contents("http://prisminfo.centurylink.net/getChannelInfo.php?city=$city");
			$data = json_decode($feed, true);
		//} catch ( Exception $e ) {
			//echo $feed;
		//}

		$tableBlockData = $this->processChannelData( $data );

		$header = array('#', 'Name');

		$this->ImprovedTable($header, $tableBlockData);
	}

	function processChannelData( $data ) {
		$blockData = array();

		foreach ($data as $rowkey => $channelInfo ) {
			if ( !isset( $blockData[ ( $this->getDataHeader($channelInfo) ) ] ) ) {
				$blockData[ ( $this->getDataHeader($channelInfo) ) ] = array();
			}
			$len = count( $blockData[ ( $this->getDataHeader($channelInfo) ) ] );
			$blockData[ ( $this->getDataHeader($channelInfo) ) ][ $len ] = $channelInfo;
		}

		return $blockData;
	}

	function getDataHeader ( $channelInfo ) {
		$out = "";
		foreach ($this->headerMap as $i => $headerMapObj) {
			if ( !!$channelInfo["packages"] && $headerMapObj["keylocation"] == "packages" && in_array( $headerMapObj["keyval"], $channelInfo["packages"] ) ) {
				$out = $headerMapObj["key"];
				break;
			}
			if ( !!$channelInfo["boltOns"] && $headerMapObj["keylocation"] == "boltOns" && in_array( $headerMapObj["keyval"], $channelInfo["boltOns"] ) ) {
				$out = $headerMapObj["key"];
				break;
			}
			if ( $headerMapObj["keylocation"] == "isHD" && $channelInfo["isHD"] == "true" ) {
				$out = $headerMapObj["key"];
				break;
			}
		}
		if ( $out == "" ) {
			$out = "MISC";
		}
		return $out;
	}

	function findHeaderMapByKey ( $headerkey ) {
		foreach ($this->headerMap as $key => $headerMapObj) {
			if ( $headerMapObj["key"] == $headerkey ) {
				return $headerMapObj;
				break;
			}
		}
	}

	function ImprovedTable($header, $tableBlockData) {
		//First Page Settings
	    $this->Ln();
	    $this->last_x = 100; //$this->GetX();
	    $this->last_y = 85; //$this->GetY();
	    $this->l_margin = 56; //$this->GetX();
	    $this->t_margin = 85; //$this->GetY();

	    foreach( $this->headerDisplayKeyMap as $i => $displaykey)
	    {
	    	$data = $tableBlockData[$displaykey];
	    	if ( !$i ) {
	    		$isFirst = true;
	    	} else {
	    		$isFirst = false;
	    	}

			$this->addNewHeading( $displaykey, $isFirst );

		    foreach($data as $row)
		    {
		        $this->last_x = $this->l_margin + $this->col*($this->w_col_num+$this->w_col_name);

		        //Write Channel Number Column
				$this->SetFont('Arial','B',8);
		        $this->SetXY( $this->last_x, $this->last_y );
		        $this->MultiCell( $this->w_col_num, $this->rowheight, $row["channelNo"], 0, "L");

		        //Write Channel Name Column
				$this->SetFont('Arial','',8);
		        $this->SetXY( $this->last_x + $this->w_col_num, $this->last_y );
		        $this->MultiCell( $this->w_col_name, $this->rowheight, $row["channelName"], 0, "L");

		        $this->SetXY( $this->last_x + $this->w_col_num + $this->w_col_name, $this->GetY()-$this->rowheight );
		        $this->MultiCell( $this->colgap, $this->rowheight, "", 0, "L");

		        $this->last_x = $this->l_margin + $this->col*($this->w_col_num+$this->w_col_name);
		        $this->last_y = $this->last_y + ($this->GetY()-$this->last_y) + $this->rowgap;

		    }
		}
	}
	function addNewHeading ( $displaykey, $isFirst ) {
	    $this->last_x = $this->l_margin + $this->col*($this->w_col_num+$this->w_col_name);
	    if ( !$isFirst ) {
	   		$this->last_y += $this->h_top_pad;
		}

		$this->SetFont('Arial','B',10);
        $this->SetXY( $this->last_x, $this->last_y );
	    $this->SetFillColor( 0,0,0 );
	    $this->SetTextColor( 255,255,255 );
	    
	    $headerMap = $this->findHeaderMapByKey($displaykey);
	    $this->MultiCell( $this->w_col_num + $this->w_col_name - $this->colgap + 1, $this->rowheight+3, $headerMap['headingText'], 0, "L", true);

	    $this->SetTextColor( 0,0,0 );
	    $this->SetFillColor( 255,255,255 );

	    $this->last_x = $this->l_margin + $this->col*($this->w_col_num+$this->w_col_name);
	    $this->last_y = $this->last_y + ($this->GetY()-$this->last_y) + $this->rowgap + $this->h_btm_pad;
	}
	function AcceptPageBreak() {
	    if( $this->col < $this->max_cols ) {
	    	
	    	$this->col++;
	    	$this->last_x = $this->l_margin+$this->col*($this->w_col_num+$this->w_col_name);
	    	$this->last_y = $this->t_margin;
	        $this->SetXY( $this->last_x, $this->last_y );
	        return false;

	    } else {

	    	$this->max_cols = $this->d_max_cols;
	    	$this->col = 0;
	    	$this->l_margin = $this->dl_margin;
	    	$this->t_margin = $this->dt_margin;
	    	$this->last_x = $this->l_margin;
	    	$this->last_y = $this->t_margin;
	        $this->SetXY( $this->last_x, $this->last_y );
	        return true;

	    }
	}	
}
$pdf = new ChannelLineupPDF();
$pdf->Output();
