<?php
// start a new session
error_reporting(E_ALL ^ E_NOTICE);
session_start();

require_once 'Zend/Loader.php';

Zend_Loader::loadClass('Zend_Gdata_YouTube');
Zend_Loader::loadClass('Zend_Gdata_AuthSub');


//Keegan's Personal YouTube API Key
$userName = "keegbrown";
$apiKey = 'AI39si4fOP1PrlUEqlPbax7MYk9LFvzCfH3ocsw0QebTMyBrPcksGMV03BfUJvRlf0fxmhWRe2-A-KOZKZiai6wWYTCJqEeMWQ';
$yt = new Zend_Gdata_YouTube(null, "Testing the YouTube API", null, $apiKey );
$yt->setMajorProtocolVersion(2);


$cacheName = '/mnt/stor2-wc1-dfw1/391839/'.$_SERVER['SERVER_NAME']."/web/content/test/youtube/$userName.json";
$forceRefresh = !!$_GET['forceRefresh'];
if ( file_exists($cacheName) ) {
	try {
		$cacheTime = filemtime($cacheName);
	} catch ( Warning $error ) {
		$cacheTime = false;
	}
} else {
	$cacheTime = false;
}
$now = time();
$aWeek = (60 * 24 * 7);

$content = false;

if ( $cacheTime && !$forceRefresh ) {
	$diff = $now - $cacheTime;
	if ( $diff < $aWeek ) {
		$content = file_get_contents( $cacheName );
	}
}

function getAuthSubRequestUrl()
{
	global $yt;
    $next = 'http://staging.promotions.centurylink.com/welcome.php';
    $scope = 'http://gdata.youtube.com';
    $secure = false;
    $session = true;
    return Zend_Gdata_AuthSub::getAuthSubTokenUri($next, $scope, $secure, $session);
}

function getAndPrintPlaylistListFeed($userName, $showPlaylistContents)
{
	global $yt;
	try {
		$playlistListFeed = $yt->getPlaylistListFeed($userName);
	} catch ( Exception $e ) {
		echo $e;
	}
	printPlaylistListFeed($playlistListFeed, $showPlaylistContents);
}

function printPlaylistListFeed($playlistListFeed, $showPlaylistContents)
{
	global $yt, $cacheName, $content;
	$feed = processPlaylistFeeds($playlistListFeed);

	$content = json_encode( $feed );
	file_put_contents( $cacheName, $content );
	echo $content;
	//var_dump( $playlistListFeed );
	/*
	$count = 1;
	foreach ($playlistListFeed as $playlistListEntry) {
		echo 'Entry # ' . $count . "\n";

		// This function is defined in the next section
		printPlaylistListEntry($playlistListEntry, $showPlaylistContents);

		echo "\n";
		$count++;
	}
	*/
}

function processPlaylistFeeds ($playlistListFeed) {
	global $yt;
	$playListArray = array();
	$count = 0;
	foreach ($playlistListFeed as $playlistListEntry) {
		$playListArray[$count] = array();

		$playListArray[$count]['title'] = $playlistListEntry->title->text;
		$playListArray[$count]['description'] = $playlistListEntry->description->text;
		$playListArray[$count]['url'] = $playlistListEntry->getPlaylistVideoFeedUrl();
		$playListArray[$count]['video'] = array();

		$playlistVideoFeed = $yt->getPlaylistVideoFeed( $playlistListEntry->getPlaylistVideoFeedUrl() );
		foreach ($playlistVideoFeed as $playlistVideoEntry) {
			$id = $playlistVideoEntry->getVideoId();
			$playListArray[$count]['video'][$id] = array();
			$playListArray[$count]['video'][$id]['id'] = $id;
			$playListArray[$count]['video'][$id]['watch'] = $playlistVideoEntry->getVideoWatchPageUrl();
			$playListArray[$count]['video'][$id]['description'] = $playlistVideoEntry->getVideoDescription();
		}
		$count++;
	}

	return $playListArray;
}

function printPlaylistListEntry($playlistListEntry, $showPlaylistContents = false)
{
	global $yt;
	echo 'Title: ' . $playlistListEntry->title->text . "\n";
	echo 'Description: ' . $playlistListEntry->description->text . "\n";

	// assuming $yt is a fully authenticated service object, set the version to 2
	// to retrieve additional metadata such as yt:uploaded and media:credit
	$yt->setMajorProtocolVersion(2);

	if ($showPlaylistContents === true) {
		// Get the feed of videos in the playlist
		$playlistVideoFeed =
		  $yt->getPlaylistVideoFeed($playlistListEntry->getPlaylistVideoFeedUrl());

		// Print out metadata for each video in the playlist
		foreach ($playlistVideoFeed as $playlistVideoEntry) {
			// Reuse the printVideoEntry function defined earlier to show video metadata
			printVideoEntry($playlistVideoEntry);

			// The following details are also available for playlist entries
			echo 'Video originally uploaded on: ' .
			  $playlistVideoEntry->getMediaGroup->getUploaded()->text . "\n";

			// Also check the <media:credit> element to see whether the video
			// was uploaded by a partner.
			$mediaCredit = $playlistVideoEntry->getMediaGroup()->getMediaCredit();
			if ($mediaCredit) {

				echo 'Video originally uploaded by ' . $mediaCredit->text . "\n";
				echo 'Media credit role: ' . $mediaCredit->getRole() . "\n";

				// if the yt:type attribute is present, then the video was uploaded
				// by a YouTube partner
				echo 'Media credit type: ' . $mediaCredit->getYTtype() . "\n";
			}
		}
	}
}

$auth = getAuthSubRequestUrl();
?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>YouTube</title>
</head>
<body>
<?php
	getAndPrintPlaylistListFeed($userName, true);
?>
</body>
</html>
