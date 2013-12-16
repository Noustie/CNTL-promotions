<?php
error_reporting(E_ALL ^ E_NOTICE);
ini_set( 'display_errors','1');

require_once('facebook/facebook.php');


$config = array();
$config['appId'] = '344105319015268';
$config['secret'] = '75c1fc666150474dc2f14154d225b3e1';
$config['fileUpload'] = false; // optional

$facebook = new Facebook($config);


$facebookPageID = 178834412548;

//$feedURL = "http://www.facebook.com/feeds/page.php?id=$facebookPageID&format=json";
$feedURL = "/$facebookPageID?fields=feed.limit(20)";
$cacheURL = "facebookWallCache.json";
$serverTime = time();
$recacheLength = (60*60*0.5); //seconds*minutes*hours

function checkRefresh () {
	global $cacheURL, $feedURL, $serverTime, $recacheLength;

	$fetchedJSON;

	$doRecache = false;

	if ( !file_exists($cacheURL) ) {
		//If Get Param "forceFetch" is found, then force cache to be cleared.
		$doRecache = true;
	} else if ( file_exists($cacheURL) && $serverTime - filemtime($cacheURL) >= $recacheLength ) {
		//If cache has not been cleared longer than $serverTime then force cache to be cleared.
		$doRecache = true;
	} else if ( !!$_GET['forceFetch'] ) {
		//If Get Param "forceFetch" is found, then force cache to be cleared.
		$doRecache = true;
	}

	if ( $doRecache ) {
		$fetchedJSON = refreshCache($feedURL, $cacheURL);
	} else {
		$fetchedJSON = getCache($cacheURL);
	}
	return $fetchedJSON;
}

function refreshCache ($feedURL, $cacheURL) {
	global $facebook;
	$freshFeed = $facebook->api($feedURL,'GET');

	file_put_contents($cacheURL, json_encode($freshFeed) );
	return $freshFeed;
}
function getCache ($cacheURL) {
	$freshFeed = file_get_contents($cacheURL, true);
	return json_decode($freshFeed, true);
}

$fbdata = checkRefresh();
$wallPosts = $fbdata['feed']['data'];

function addFBFeed () {
	$search = array(chr(145), chr(146), chr(147), chr(148), chr(151));
	$replace = array('&lsquo;', '&rsquo;', '&ldquo;', '&rdquo;', '&mdash;');

	global $wallPosts, $facebookPageID;
	$len = count($wallPosts);
	for ( $i = 0; $i < $len; $i++ ) {
		$post = $wallPosts[$i];
		if ( !!$post['from'] && $post['from']['id'] == $facebookPageID ) {
			echo("\t\t" . '<div class="post">' . "\r");
			if ( !!$post['message'] ) { echo("\t\t\t" . '<p class="message">' . htmlentities( $post['message'], ENT_COMPAT, "UTF-8" ) . '</p>' . "\r"); }
			if ( !!$post['link'] ) { echo("\t\t\t" . '<p class="like">'.'<div class="fb-like" data-href="' . htmlentities($post['link']) .'" data-send="false" data-layout="button_count" data-width="100" data-show-faces="false"></div>'.'</p>' . "\r"); }
			if ( !!$post['link'] ) { echo("\t\t\t" . '<p class="comment"><a href="' . htmlentities($post['link']) . '" target="_blank">Comment</a></p>' . "\r"); }
			echo("\t\t" . '</div>' . "\r");
		}
	}
}

?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	<div id="fbFeed">
		<?php
			addFBFeed();
		?>
	</div>

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=344105319015268";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
</body>
</html>
