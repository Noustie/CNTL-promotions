<?php
// start a new session

require_once 'Zend/Loader.php';

Zend_Loader::loadClass('Zend_Gdata_YouTube');
Zend_Loader::loadClass('Zend_Gdata_AuthSub');

//CENTURYLINK YOUTUBE GADGET CLASS
class CenturyLinkGadget {
	//YouTube API Key -- Registered under centurylink.brandchannel@gmail.com
	private $userName = "CenturyLink";
	private $apiKey = 'AI39si4cNb_BGTtuap6au1oOMAuDIreLf_RyJ4gTEEROigjmuiT-BaEuN4kLESIEsHcdc-2ahFp53fhqgdu68LB8hjSApZ5PZA';
	private $yt;
	private $auth;
	private $ToHTML;

	private $cacheName = './CenturyLink.json';

	private $loadedSource;

	private $content = false;

	private $playlistNav = array(
	    'home' => 'Home',
	    'commercials' => 'Commercials',
	    'prism_tv' => 'Prism<sup>&trade;</sup> TV',
	    'how_to' => 'How To',
	    'business' => 'Business',
		'careers' => 'Careers',
		'large_business' => 'Large Business',	    
		'small_medium_business' => 'Small-Medium Business',
	    'government' => 'Government'
	);

	private $playlistMap = array(
	    'commercials' => array(
	        'title' => 'Commercials',
	        'playlists' => array( "PL5B7EC90613B1A443", "PLEYIeiCR-pz6Gd7wT0t_bi_ut_SzG6V0y" )
	    ),
		'prism_tv' => array(
	        'title' => 'Prism<sup>&trade;</sup> TV',
	        'playlists' => array( "PL57BF5F6CFA060258", "PLEYIeiCR-pz6x8T0QX9_soQKLh5mT5N4J", 
	                             "PLEYIeiCR-pz6gUhBJCG0hJSCUyv8g7Aqf", "PLEYIeiCR-pz6iOCWByRtEEdOEo7uQYFkT" )
	    ),
		'how_to' => array(
	        'title' => 'How To',
	        'playlists' => array( "PLBE333BEFF2E609CE", "PLBD4B7FF23A51D15F", 
	                             "PL0B73664C372EAD66", "PL226CB63478957C45", "PL270439202EE02B81" )
	    ),
		'careers' => array(
	        'title' => 'Careers',
	        'playlists' => array( "PLEYIeiCR-pz7u0NPj7izlhiYtch__K-nX" )
	    ),
		'large_business' => array(
	        'title' => 'Large Business',
	        'playlists' => array( "PLEYIeiCR-pz6ol-KS3mP92oJ1PbfHeyuk", "PLEYIeiCR-pz6bdg6XBcK_uHKSSGcBcXi5", 
	                             "PLEYIeiCR-pz7IUia-O3OanZlCrsZotXfH" )
	    ),		
		'small_medium_business' => array(
	        'title' => 'Small-Medium Business',
	        'playlists' => array( "PLEYIeiCR-pz6JxctpF-QomFMEycyz4q-0", "PLEYIeiCR-pz6BGasgc8VgYDdocGMpJAFj", "PLEYIeiCR-pz70zSzc-xff5WAGta9_x02Q",
	                             "PL454B8399B874015D", "PL60E1892FAC289D78", "PL270439202EE02B81" )
	    ),
		'government' => array(
	        'title' => 'Government',
	        'playlists' => array( "PLEYIeiCR-pz64Y4HZmFhxO27ir9wjXxAc" )
	    )    
	);

	public function __construct( $forceNoRefresh = false ) {
		$this->yt = new Zend_Gdata_YouTube(null, "Corporate YouTube Brand Channel", null, $apiKey );
		$this->yt->setMajorProtocolVersion(2);

		//$this->auth = $this->getAuthSubRequestUrl();

		if ( !$forceNoRefresh ) {
			$forceRefresh = !!$_GET['forceRefresh'];
			if ( file_exists($this->cacheName) ) {
				try {
					$cacheTime = filemtime($this->cacheName);
				} catch ( Warning $error ) {
					$cacheTime = false;
				}
			} else {
				$cacheTime = false;
			}

			$now = time();
			$refreshTime = (60*15);
			$this->content = false;

			if ( $cacheTime && !$forceRefresh ) {
				$diff = $now - $cacheTime;
				if ( $diff < $refreshTime ) {
					$this->content = file_get_contents( $this->cacheName );
				} else {
					if ( !$this->isCacheOld() ) {
						touch( $this->cacheName );
						$this->content = file_get_contents( $this->cacheName );
					}					
				}
			}
			
			$this->playlistObj = $this->getPlaylistListFeed( $this->userName, true );
		}
   	}

   	private function isCacheOld () {
   		$doClearCache = false;
		$cacheTime = 0;
		if ( file_exists($this->cacheName) ) {
			try {
				$cacheTime = filemtime($this->cacheName);
			} catch ( Warning $error ) {
				$cacheTime = 0;
			}
		}
		if ( $cacheTime > 0 ) {
			$checkFeed = null;
			try {
				$checkFeed = $this->yt->getPlaylistListFeed($this->userName);
			} catch ( Warning $error ) {
				$doClearCache = true;
			}
			if ( !!$checkFeed ) {
				$doClearCache = $this->isCacheOldLoopFeed( $checkFeed, $cacheTime );
			}
		} else {
			$doClearCache = true;
		}
		return $doClearCache;
   	}
   	private function isCacheOldLoopFeed ( $checkFeed, $cacheTime ) {
   		$arePlaylistsNewer = false;
   		foreach ($checkFeed as $checkFeedEntry) {
			$listModTime = strtotime( $checkFeedEntry->updated->text );
			$isCacheNewer = ( $listModTime > $cacheTime ) ? false : true;

			//echo $listModTime . " > " . $cacheTime . " : " . ( ( $listModTime > $cacheTime ) ? "false" : "true" ) . " <br/>";

			if ( !$isCacheNewer ) {
				$arePlaylistsNewer = true;
				break;
			}
		}
		if ( !$arePlaylistsNewer ) {
	   		try {
				$nextFeed = $checkFeed->getNextFeed();
				if ( !!$nextFeed ) {
					$this->isCacheOldLoopFeed( $nextFeed, $cacheTime );
				}
			} catch ( Exception $e ) { /* nothing */ }
		}
		return $arePlaylistsNewer;
	}

	private function getAuthSubRequestUrl()
	{
	    $next = 'http://promotions.centurylink.com/welcome.php';
	    $scope = 'http://gdata.youtube.com';
	    $secure = false;
	    $session = true;
	    return Zend_Gdata_AuthSub::getAuthSubTokenUri($next, $scope, $secure, $session);
	}

	private function getPlaylistListFeed($userName, $showPlaylistContents)
	{
		if ( !!$this->content ) {
			$this->loadedSource = "<!-- Data Loaded from Cache. -->";
			$playlistObj = json_decode( $this->content );
		} else {
			$this->loadedSource = "<!-- Data Pulled from YouTube.  -->";
			try {
				$playlistListFeed = $this->yt->getPlaylistListFeed($userName);
			} catch ( Exception $e ) {
				//echo $e;
			}
			$feed = $this->processPlaylistFeeds($playlistListFeed);

			$this->content = json_encode( $feed );
			file_put_contents( $this->cacheName, $this->content );

			$playlistObj = json_decode( $this->content );
		}
		return $playlistObj;
	}
	

	public function buildSegmentNav() {
		$nav_array = array_unique( $this->playlistNav );
		echo "\t\t" . ' <div id="topNav" class="for-ie"> ' . "\n";
		echo "\t\t\t" . ' <ul id="mainNav"> ' . "\n";
		foreach ($nav_array as $index => $value) {
			echo "\t\t\t\t" . ' <li class="nav_'.$index.'"><a href="?x=' . $index . '" target="_top">' . $value . '</a></li>' . "\n";
		}
		echo "\t\t\t" . " </ul> " . "\n";
		echo "\t\t" . " </div> " . "\n";
	}

	public function getStartingSlide () {
		$xparam = $_GET["x"];
		$plSlugArr = array_keys( $this->playlistNav );
		$keyInd = array_search( $xparam, $plSlugArr );
		if ( $keyInd !== false ) {
			echo 'data-cycle-starting-slide="'.$keyInd.'"';
		}
	}

	
	private function processPlaylistFeeds($playlistListFeed) {
		$playListArray =  $this->processFeedLoop($playlistListFeed);
		
		return $playListArray;
	}

	private function processFeedLoop ($playlistListFeed, $playListArray = array() ) {
		foreach ($playlistListFeed as $playlistListEntry) {
			$plid = $playlistListEntry->playlistId->text;
			$playListArray[$plid] = array();

			$playListArray[$plid]['title'] = htmlspecialchars( $playlistListEntry->title->text, ENT_NOQUOTES );
			$playListArray[$plid]['id'] = $playlistListEntry->playlistId->text;
			$playListArray[$plid]['description'] = htmlspecialchars( $playlistListEntry->getDescription(), ENT_NOQUOTES );
			$playListArray[$plid]['url'] = $playlistListEntry->getPlaylistVideoFeedUrl();
			$playListArray[$plid]['videos'] = array();

			$playlistVideoFeed = $this->yt->getPlaylistVideoFeed( $playlistListEntry->getPlaylistVideoFeedUrl() );
			foreach ($playlistVideoFeed as $playlistVideoEntry) {
				$pv_vid = $playlistVideoEntry->isVideoPrivate();
				$v_dur = $playlistVideoEntry->getVideoDuration();
				if ( !$pv_vid && !!$v_dur ) {
					$id = $playlistVideoEntry->getVideoId();

					$playListArray[$plid]['videos'][$id] = array();
					$playListArray[$plid]['videos'][$id]['id'] = $id;
					$playListArray[$plid]['videos'][$id]['dur'] = $playlistVideoEntry->getVideoDuration();
					$playListArray[$plid]['videos'][$id]['title'] = htmlspecialchars( $playlistVideoEntry->getVideoTitle(), ENT_NOQUOTES );
					$playListArray[$plid]['videos'][$id]['desc'] =  htmlspecialchars( $playlistVideoEntry->getVideoDescription(), ENT_NOQUOTES );
				}
			}
		}
		try {
			$nextPlaylistListFeed = $playlistListFeed->getNextFeed();
			if ( !!$nextPlaylistListFeed ) {
				$playListArray = $this->processFeedLoop($nextPlaylistListFeed, $playListArray);
			}
		} catch ( Exception $e ) {
			//No more pages. Do nothing.
		}
		return $playListArray;
	}

	public function printSegmentPlaylistFeed ( $segmentID, $echoAfterStart = "", $echoBeforeEnd = "", $extraSectionClass = "" )
	{
		$thisSegment = $this->playlistMap[$segmentID];
		$thisSegmentPlaylists = $thisSegment["playlists"];

		$segmentPlayListArray = array();
		foreach ($thisSegmentPlaylists as $playlistID) {
			if ( isset( $this->playlistObj->{$playlistID} ) ) {
				array_push( $segmentPlayListArray, $this->playlistObj->{$playlistID} );
			}
		}
		
		$this->printSectionTop( $thisSegment["title"], $segmentID, $segmentPlayListArray, $extraSectionClass );
		echo $echoAfterStart;
		$this->printStartSection( $thisSegment["title"], $segmentID, $segmentPlayListArray );
		$this->printPlaylistItems( $thisSegment["title"], $segmentID, $segmentPlayListArray );
		$this->printEndSection( $thisSegment["title"], $segmentID, $segmentPlayListArray );
		echo $echoBeforeEnd;
		$this->printSectionBtm( $thisSegment["title"], $segmentID, $segmentPlayListArray );
	}

	public function printSectionTop ( $readableTitle, $slugTitle, $sectionPlaylistArray, $extraSectionClass )
	{
		echo <<<SECTIONT

		<div class="section $extraSectionClass">

SECTIONT;
	}
	public function printSectionBtm ( $readableTitle, $slugTitle, $sectionPlaylistArray )
	{
		echo <<<SECTIONB

		</div> <!-- end $slugTitle section -->

SECTIONB;
	}
	public function printStartSection ( $readableTitle, $slugTitle, $sectionPlaylistArray )
	{
		$playlistsNav = $this->getSectionPlaylistsNav( $slugTitle, $sectionPlaylistArray );
		$isMultiPlaylist = !!$playlistsNav;
		
		$singlePLClass = "";
		if ( !$isMultiPlaylist ) {
			$singlePLClass = " singlePlaylist ";
		}
		$sectionTop =  <<<SECTIONTOP

			<h2 class="sectionTitle clearfix">$readableTitle</h2>
			<div class="content">
				<div class="carouselWrap $singlePLClass clearfix">
					$playlistsNav

SECTIONTOP;
		echo $sectionTop;
	}
	public function printEndSection ( $readableTitle, $slugTitle, $sectionPlaylistArray )
	{
		$sectionBtm = <<<SECTIONBTM

				</div> <!-- end carouselWrap -->
			</div> <!-- end content -->
			<div class="videoOuter">
				<div class="socialShare">
					<p class="sharecopy">Share This Video</p>
					<a href="#" class="twShare" target="_blank">Share This Video On Twitter</a>
					<a href="#" class="fbShare">Share This Video On Facebook</a>
				</div>			
				<div class="videoPlayerHolder"></div>
			</div> <!-- end videoOuter -->


SECTIONBTM;

		echo $sectionBtm;
	}
	private function getSectionPlaylistsNav ( $slugTitle, $sectionPlaylistArray )
	{
		$out = "";
		if ( count($sectionPlaylistArray) > 1 ) {
			$out .= "\n";
			$out .= "\t\t\t\t" . '<div class="scroller">';
			$out .= "\t\t\t\t\t" . '<ul id="' . $slugTitle . '" class="cycle-pager external videoNav">';
			$out .= "\n";
			foreach ( $sectionPlaylistArray as $singlePlaylistObj ) {
				$out .= "\t\t\t\t\t\t" . '<li><a href="#' . $slugTitle . $singlePlaylistObj->id . '">' . $singlePlaylistObj->title . '</a></li>' . "\n";
			}
			$out .= "\t\t\t\t\t" . '</ul> <!-- end videoNav -->' . "\n";
			$out .= "\t\t\t\t" . '</div> <!-- end scroller -->' . "\n";		
			$out .= "\n";
		}
		return $out;			 
	}
	public function printPlaylistItems ( $readableTitle, $slugTitle, $sectionPlaylistArray )
	{
		echo <<<PLSECTIONTOP

				<div class="cycle-slideshow inner-slideshow carouselOuter playlist" data-cycle-fx="scrollVert" data-cycle-slides="> div" data-cycle-timeout="0" data-cycle-speed="250" data-cycle-pager="#$slugTitle" data-cycle-auto-height="calc" data-cycle-pager-template="">

PLSECTIONTOP;
			
		foreach ( $sectionPlaylistArray as $singlePlaylistObj ) {

			$singlePlaylistID = $singlePlaylistObj->id . "_" . $slugTitle;
			echo <<<PLAYLISTTOP
					
					<div class="video_$singlePlaylistID videoContainer">
						<div class="carouselLeft"></div>
						<div class="carouselRight"></div>
						<a href="#" id="$singlePlaylistID-prev" class="prevVid disabled">&laquo; prev</a>
						<a href="#" id="$singlePlaylistID-next" class="nextVid disabled">next &raquo;</a>
						<div class="cycle-slideshow carouselContainer inner-slideshow entries" data-cycle-slides="> div" data-cycle-timeout="0" data-cycle-prev="#$singlePlaylistID-prev" data-cycle-next="#$singlePlaylistID-next" data-cycle-auto-height="calc" data-cycle-fx="carousel" data-cycle-carousel-fluid=true data-allow-wrap="false" data-cycle-carousel-offset="50">

PLAYLISTTOP;

			$playlistVideos = $singlePlaylistObj->videos;

			foreach ( $playlistVideos as $key => $videoEntry ) {
				$this->printVideoEntry( $videoEntry );
			}

			echo <<<PLAYLISTBTM

						</div>
					</div> <!-- end videoContainer -->

PLAYLISTBTM;
			echo "\n";
		}

		echo <<<PLSECTIONBTM

				</div> <!-- end carouselOuter -->

PLSECTIONBTM;

	}
	private function printVideoEntry ( $videoEntry ) {
		$vidLink = '';

		$baseIndent = "\t\t\t\t\t\t";

		$vidLink .= $baseIndent . "\t" . '<div class="vidEntryItem">' . "\n";
		$vidLink .= $baseIndent . "\t\t" . '<a href="//www.youtube.com/watch?v=' . $videoEntry->id . '" target="_blank">' . "\n";
		$vidLink .= $baseIndent . "\t\t\t" . '<span class="vidThumb"><img src="//img.youtube.com/vi/' . $videoEntry->id . '/mqdefault.jpg" /></span>' . "\n";
		$vidLink .= $baseIndent . "\t\t\t" . '<span class="vidDur">' . gmdate('i:s',$videoEntry->dur)  . '</span>' . "\n";
		$vidLink .= $baseIndent . "\t\t\t" . '<span class="vidTitle">' .  htmlspecialchars( $videoEntry->title, ENT_NOQUOTES ) . '</span>' . "\n";
		$vidLink .= $baseIndent . "\t\t\t" . '<span class="vidShadow"> </span>' . "\n";
		$vidLink .= $baseIndent . "\t\t" .  "</a> \n";
		$vidLink .= $baseIndent . "\t\t" . '<span class="vidDesc">' . $this->processDescriptionText( $videoEntry->desc ) . '</span>' . "\n";
		$vidLink .= $baseIndent . "\t" .  "</div> \n";
		
		echo $vidLink;
	}
	private function processDescriptionText ( $desc ) {
		$out = htmlspecialchars( $desc, ENT_NOQUOTES );
		$out = preg_replace('/[[:alpha:]]+:\/\/[^<>[:space:]]+[[:alnum:]\/]/i',"<a href=\"\\0\" target=\"_blank\">\\0</a>", $out);
		return nl2br( $out );
	}


	//DEBUG ONLY
	public function dumpPlaylists () {
		echo "Is cache still good? ";
		echo ( !$this->isCacheOld() ) ? " YES " : " NO ";
	}
	public function dumpYTPlaylists () {
		try {
			$dumpFeed = $this->yt->getPlaylistListFeed($this->userName);
		} catch ( Exception $e ) {
			echo $e;
		}
		$this->loopAndDump( $dumpFeed );
	}
	private function loopAndDump ($dumpFeed) {
		echo "\n";
		$eol = "<br>" . " \n";

		$cacheTime = 0;
		if ( file_exists($this->cacheName) ) {
			try {
				$cacheTime = filemtime($this->cacheName);
			} catch ( Warning $error ) {
				$cacheTime = 0;
			}
		}
		foreach ($dumpFeed as $dumplistEntry) {
			//$dumpVideoFeed = $this->yt->getPlaylistVideoFeed( $dumplistEntry->getPlaylistVideoFeedUrl() );
			//$dumplistEntry->getPlaylistVideoFeedUrl()
			//var_dump( $dumplistEntry->updated );
			$listModTime = strtotime( $dumplistEntry->updated->text );
			$isCacheNewer = ( $listModTime > $cacheTime ) ? "no" : "yes";
			echo $listModTime . " > " . $cacheTime . " : " . $isCacheNewer;
			//foreach ($dumpVideoFeed as $dumpVideoEntry) {
				//$vid = $dumpVideoEntry->id;
				//$vtt = $dumpVideoEntry->getVideoTitle();
				//echo $vid;
				//echo "\n";
				//echo $vtt;
				//echo "\n";
				//$eol = $dumpVideoEntry;
				//break;
				//echo "\n";
			//}
			print( "<br>" . " \n" );
			//break;
		}
		//print_r( $eol );
		try {
			$nextFeed = $dumpFeed->getNextFeed();
			if ( !!$nextFeed ) {
				//echo "\n\n <br/><br/>##END OF PAGE##<br/><br/>";
				$this->loopAndDump( $nextFeed );
			}
		} catch ( Exception $e ) {
			echo "\n\n <br/><br/>##END OF FEEDS##<br/><br/>";
		}
	}

}

//