<?php

class ChannelLineupXML {

	var $headerMap = array(
	    array( 'key' => 'HD',
	     		'keyval' => 'true',
				'headingText' => "HD Channels*",
				'keylocation'=> "isHD" ),
	    array( 'key' => 'MUS',
	     		'keyval' => '/^MC /',
				'headingText' => "Digital Music",
				'keylocation'=> "channelName" ),
	    array( 'key' => 'Int',
	     		'keyval' => 'International-Al-Carte',
	     		'headingText' => "International Programming",
	     		'keylocation'=> "boltOns" ),
	    array( 'key' => 'Lat',
	     		'keyval' => 'Latino',
				'headingText' => "Prism&#8482; Paquete Latino",
	     		'keylocation'=> "boltOns" ),
	    array( 'key' => 'TV1',
	     		'keyval' => 'PrismTV',
				'headingText' => "Prism&#8482; Essential",
     			'keylocation'=> "packages" ),
	    array( 'key' => 'TV2',
	     		'keyval' => 'PrismComplete',
     			'headingText' => "Prism&#8482; Complete",
     			'keylocation'=> "packages" ),
	    array( 'key' => 'TV3',
     			'keyval' => 'PrismPreferred',
     			'headingText' => "Prism&#8482; Preferred",
     			'keylocation'=> "packages" ),
	    array( 'key' => 'TV4',
	     		'keyval' => 'PrismPremium',
     			'headingText' => "Prism&#8482; Premium",
     			'keylocation'=> "packages" )
	);

	var $headerDisplayKeyMap = array('TV1','MUS','TV2','TV3','TV4','HD','Lat','Int');

	function ChannelLineupXML()
	{
		// Call parent constructor
		$this->initChannelLineupPDF();
	}

	function initChannelLineupPDF () {
		$configfeed = file_get_contents("http://prisminfo.centurylink.net/getCofigInfo.php");
		$configdata = json_decode($configfeed, true);



		$city = $_GET["city"];
		if ( !$configdata["FriendlyName"][$city] ) {
			$this->addFeedSelectionDropdown($configdata);
			return;
		}

		$feed = file_get_contents("http://prisminfo.centurylink.net/getChannelInfo.php?city=$city");
		//$feed = htmlentities($feed, ENT_XML1|ENT_COMPAT);
		$data = json_decode($feed, true );

		$this->GetChannelFeed($data, $configdata, $city);
	}

	function addFeedSelectionDropdown ($configdata) {
		$out = array();
		$out[] = '	<!doctype html>';
		$out[] = '	<html lang="en">';
		$out[] = '	<head>';
		$out[] = '		<meta charset="UTF-8">';
		$out[] = '		<title>Get Channel Lineup XML Feed</title>';
		$out[] = '		<style> html, body { margin: 0; padding: 0; width: 100%; height: 100%; } form { position: relative; text-align:center; display: block; top: 40%; left: 0; } form * { font-size: 18px; line-height: 1.5; padding: 5px; }</style>';
		$out[] = '	</head>';
		$out[] = '	<body>';
		$out[] = '		<form action="./" method="GET" target="_blank">';
		$out[] = '			<select name="city" id="city">';
		$out[] = '				<option value="">Please select a market From this dropdown</option>';
		foreach ($configdata["FriendlyName"] as $citykey => $cityname) {
			$out[] = '				<option value="'.$citykey.'">'.$cityname.'</option>';
		}
		$out[] = '			</select>';
		$out[] = '			<button type="submit">Get XML</button>';
		$out[] = '		</form>';
		$out[] = '	</body>';
		$out[] = '	</html>';

		echo implode($out, " \n ");
	}

	function GetChannelFeed ($data, $configdata, $city) {

		$tableBlockData = $this->processChannelData( $data );

		$domtree = $this->GenerateCLXML($tableBlockData, $configdata, $city);

		$domtree->encoding = 'utf-8';

		Header('Content-type: text/xml');
	    echo $domtree->saveXML();
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
			if ( !!$channelInfo["channelName"] && $headerMapObj["keylocation"] == "channelName" 
			    && preg_match( $headerMapObj["keyval"], $channelInfo["channelName"] ) === 1 ) {
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

	function GenerateCLXML( $tableBlockData, $configdata, $city ) {


	    $domtree = new DOMDocument('1.0', 'UTF-8');
	    $domtree->substituteEntities = true;

	    $xmlRoot = $domtree->createElement("data");
	    $xmlRoot = $domtree->appendChild($xmlRoot);

	    $citylineup = $domtree->createElement("citylineup");
	    $citylineuptitle = $domtree->createElement("title", $configdata["FriendlyName"][ $city ] );
	    $channelblocklist = $domtree->createElement("list");

	    $citylineup =  $xmlRoot->appendChild( $citylineup );
	    $citylineuptitle = $citylineup->appendChild( $citylineuptitle );

	    $channelblocklist =  $xmlRoot->appendChild( $channelblocklist );

	    foreach( $this->headerDisplayKeyMap as $i => $displaykey)
	    {
	    	$data = $tableBlockData[$displaykey];

		    $channelblock = $domtree->createElement("channelblock");
		    $channelblock = $channelblocklist->appendChild( $channelblock );

			$this->addNewHeading( $channelblock, $domtree, $displaykey );

		    $channels = $channelblock->appendChild( $domtree->createElement("channellist") );
		    foreach($data as $row)
		    {
				$channel = $channels->appendChild( $domtree->createElement("channel") );
			    $channel->appendChild($domtree->createElement( 'number', htmlentities( $row["channelNo"], ENT_XML1 | ENT_COMPAT  ) ) );
			    $channel->appendChild($domtree->createElement( 'name', htmlentities( $row["channelName"], ENT_XML1 | ENT_COMPAT ) ) );
		    }
		}

		return $domtree;
	}
	function addNewHeading ( $channelblock, $domtree, $displaykey ) {
		$headerMap = $this->findHeaderMapByKey($displaykey);
	    
	    $channelblock->appendChild( $domtree->createElement( 'heading', $headerMap['headingText'] ) );
	    //$channelblock->appendChild( 'subhead', $headerMap['headingText'] );
	}
	
}
$CLXML = new ChannelLineupXML();
