<?php
// start a new session
error_reporting(E_ALL ^ E_NOTICE);
session_start();

require_once 'Zend/Loader.php';

Zend_Loader::loadClass('Zend_Gdata_YouTube');
Zend_Loader::loadClass('Zend_Gdata_AuthSub');

//CENTURYLINK YOUTUBE GADGET CLASS
class CenturyLinkGadget {
	private $userName = "keegbrown";
	private $apiKey = 'AI39si4MFb6syPCROZ_VVsk7JsnE3xs_amXEiuxKhTpaFAPxwC__WlIsnNjw5aHQQgV5fBWKmZwu5VfLpDBGx4ZAAHAmQT5-5A';

	public $YT = new Zend_Gdata_YouTube(null, "Testing the YouTube API", null, $apiKey );

	private $playlistListFeed;

	public function __construct() {
    	$this->YT->setMajorProtocolVersion(2);
   	}

   	public getPlayListFeed ( $playListID ) {
   		$playlistListFeed = $this->YT->getPlaylistListFeed("centurylink");
   		foreach ($playlistListFeed as $playlistEntry) {
   			$playlistEntry->getPlaylistVideoFeedUrl();
   		}
   	}

}