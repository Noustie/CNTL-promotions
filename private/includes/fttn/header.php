<?php
$shareURL = urlencode("http://www.centurylink.com");

if ( !!!$appendTitle ) $appendTitle = "CenturyLink&trade; High-Speed Internet | Compare Internet Speeds up to 40 Mbps";
if ( !!!$pageNavClass ) $pageNavClass = '';

$trackSuite = 'qwestmobile';
if ( strpos( $_SERVER['SERVER_NAME'], 'staging' ) !== false ) {
	$trackSuite = 'qwestmobiledev';
}
?>
<!DOCTYPE HTML>
<html lang="en-US" xmlns:fb="http://www.facebook.com/2008/fbml" class="<?php echo $pageNavClass; ?>">
<head>
	<meta charset="utf-8">
	<title>CenturyLink&trade; High-Speed Internet | Compare Internet Speeds up to 40 Mbps</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">

	<link rel="shortcut icon" href="http://www.centurylink.com/favicon.ico">
	<link rel="stylesheet" type="text/css" href="css/reset-min.css">
	<link rel="stylesheet" type="text/css" href="css/site.css">

	<script type="text/javascript">
		var ua = navigator.userAgent;
		if ( ua.match(/webkit/gi) || (!ua.match(/blackberry/gi) && !ua.match(/opera\smini/gi)) ) {
			var path = window.location.pathname;
			if ( path.lastIndexOf("/")+1 !== path.length && path.substring(path.lastIndexOf("/")+1, path.length) !== "index.php" ) {
				window.location = "./#" + path.substring(path.lastIndexOf("/")+1, path.length);
			}
		} else {
			document.getElementsByTagName('html')[0].id = 'notSupported';
		}
	</script>
</head>

<body class="portrait nojs">
<style type="text/css">
	.nojs .cycwrap { visibility: visible; }
</style>
<div id="logo"> <a href="./" class="ir">CenturyLink&trade;</a> </div>
<div class="cta">
	<h1 class="message ir">CenturyLink&trade; High-Speed Internet. Fast just got faster.</h1>
	<h2 class="snipe ir">up to 40 Mbps in select areas</h2>
	<h3 class="title ir">Compare Internet Speeds:</h3>
</div>
<ul id="nav" class="infoPagesNav">
	<li><a href="index.php" id="index" class="index" data-pageset="infoPages" clicktrack="ctl|rsd|mobile|product|emktg|t1_2012|qrcode_speedoverview|button|nav_tab1_photos"><span class="btnBg">Photos</span></a></li>
	<li><a href="music.php" id="music" class="music" data-pageset="infoPages" clicktrack="ctl|rsd|mobile|product|emktg|t1_2012|qrcode_speedoverview|button|nav_tab2_music"><span class="btnBg">Music</span></a></li>
	<li><a href="tv-shows.php" id="tv-shows" class="tvshows" data-pageset="infoPages" clicktrack="ctl|rsd|mobile|product|emktg|t1_2012|qrcode_speedoverview|button|nav_tab3_tvshows"><span class="btnBg">TV Shows</span></a></li>
	<li><a href="movies.php" id="movies" class="movies" data-pageset="infoPages" clicktrack="ctl|rsd|mobile|product|emktg|t1_2012|qrcode_speedoverview|button|nav_tab4_movies"><span class="btnBg">Movies</span></a></li>
</ul>
<div id="container" class="hwacel">
	<div id="scroller">
		<div id="content">
