<?php

require './facebook/facebook.php';

$myAppID = '355335711145939';
$myAppSecret = '0cfa7d7293ffb1cf3b8b495bd49c7f5f';

$facebook = new Facebook(array(
  'appId'  => $myAppID,
  'secret' => $myAppSecret
));

$feedAccessURL = 'https://graph.facebook.com/CenturyLinkPrismTV/feed';
$token = $facebook->getAccessToken();


$prismTVDataRaw = file_get_contents($feedAccessURL . '?access_token=' . $token . '&limit=150');

$prismTVData = json_decode( $prismTVDataRaw );
$prismTVFeed = $prismTVData->data;

?><!DOCTYPE HTML>
<html lang="en-US" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>

	<meta property="og:title" content="(DEV) Positive Prism Comments" />
	<meta property="og:type" content="product" />
	<meta property="og:url" content="http://promotions.centurylink.com/tests/faceplug" />
	<meta property="og:image" content="http://promotions.centurylink.com/tests/faceplug/fbimg.jpg" />
	<meta property="og:site_name" content="(DEV) Positive Prism Comments" />
	<meta property="fb:app_id" content="355335711145939" />

	<meta charset="UTF-8">
	<title>Facebook testing</title>
</head>
<body>
	<h1>Facebook Opengraph</h1>
	<div>
		<h2><?php echo $feedAccessURL; ?></h2>
<?php
	for ($i = 0; $i < count($prismTVFeed); $i++ ) {
		$value = $prismTVFeed[$i];
		if ( $value->from->id == 306502609381651 && !!$value->message ) {
			echo '<div class="message">';
			echo '<h3>' . $value->from->name . ' Says: </h3>';
			echo '<p>' . $value->message . '</p>';
			echo '<img src="'.$value->picture.'"/>';
			echo '</div>';
		}
	}
?>
	</div>

	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=<?php echo $myAppID; ?>";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
</body>
</html>
