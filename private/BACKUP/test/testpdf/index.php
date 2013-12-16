<?php
require('./fpdf/fpdf.php');

class ChannelLineupPDF extends FPDF {

	//Page Setup
	var $l_margin = 10;
	var $t_margin = 10;
	var $p_size = array(217,280);

	//Rows and Columns Setup
	var $col = 2;
	var $rows = 0;
	var $max_cols = 4;
	var $w_col_num = 10;
	var $w_col_name = 38;
	var $rowheight = 2.5;
	var $rowgap = 0.5;

	var $last_x = 0;
	var $last_y = 0;

	function ChannelLineupPDF( $orientation='L', $unit='mm' )
	{
		// Call parent constructor
		$this->FPDF($orientation, $unit, $this->p_size);
		$this->initChannelLineupPDF();
	}

	function initChannelLineupPDF () {
		// First page
		$this->AddPage();
		$this->Image('channelLineup-template.png',0,0, 280);
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

		$header = array('#', 'Name');

		$this->ImprovedTable($header, $data);
	}

	function ImprovedTable($header, $data)
	{
		//First Page Settings
	    $this->Ln();
	    $this->last_x = 140; //$this->GetX();
	    $this->last_y = 85; //$this->GetY();
	    $this->l_margin = 40; //$this->GetX();
	    $this->t_margin = 85; //$this->GetY();

	    foreach($data as $row)
	    {
	        $this->last_x = $this->l_margin + $this->col*($this->w_col_num+$this->w_col_name);

	        //Write Channel Number Column
			$this->SetFont('Arial','B',7);
	        $this->SetXY( $this->last_x, $this->last_y );
	        $this->MultiCell( $this->w_col_num, $this->rowheight, $row["channelNo"], 0, "R");

	        //Write Channel Name Column
			$this->SetFont('Arial','',7);
	        $this->SetXY( $this->last_x + $this->w_col_num, $this->last_y );
	        $this->MultiCell( $this->w_col_name, $this->rowheight, $row["channelName"], 0, "L");

	        $this->last_x = $this->l_margin + $this->col*($this->w_col_num+$this->w_col_name);
	        $this->last_y = $this->last_y + ($this->GetY()-$this->last_y) + $this->rowgap;

	    }
	}
	function AcceptPageBreak() {
	    if($this->col < $this->max_cols) {
	    	$this->col++;
	    	$this->last_x = $this->l_margin+$this->col*($this->w_col_num+$this->w_col_name);
	    	$this->last_y = $this->t_margin;
	        $this->SetXY( $this->last_x, $this->last_y );
	        return false;
	    } else {
	    	$this->col = 0;
	    	$this->l_margin = 10;
	    	$this->t_margin = 10;
	    	$this->last_x = $this->l_margin;
	    	$this->last_y = $this->t_margin;
	        $this->SetXY( $this->last_x, $this->last_y );
	        return true;
	    }
	}	
}
$pdf = new ChannelLineupPDF();
$pdf->Output();
