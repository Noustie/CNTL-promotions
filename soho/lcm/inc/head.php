<?php
	/*
	  variables to be declared in page:
	  $pageID == ID att on body;
	  $pageTitle == Part of title appended to common title;
	  $classExts == Extra classes to add to the body;
	*/

include_once('../../../inc/mobileswitch.php');
?>
<!DOCTYPE HTML>
<html lang="en-US" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
	<meta charset="utf-8">
	<title>CenturyLink<sup>&reg;</sup> Business - <?php echo $pageTitle; ?></title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">

	<link rel="shortcut icon" href="/favicon.ico">
	<link rel="stylesheet" type="text/css" href="../../../m-assets/css/reset-min.css">
	<link rel="stylesheet" type="text/css" href="../../../m-assets/css/site.css">

	<script type="text/javascript">
		var ua = navigator.userAgent;
		if ( !ua.match(/blackberry/gi) && !ua.match(/opera\smini/gi) ) {
			var path = window.location.href;
			if ( path.lastIndexOf("/")+1 !== path.length && !path.match("/index.php") ) {
				window.location = "./index.php#" + path.substring(path.lastIndexOf("/")+1, path.length);
			}
		} else {
			document.getElementsByTagName('html')[0].id = 'notSupported';
		}
		if ( ua.match(/android/gi) ) {
			document.getElementsByTagName('html')[0].id = 'isAndroid';
		}
	</script>
	<script type="text/javascript">
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-11360203-1']);
	  _gaq.push(['_setDomainName', 'centurylink.com']);
	  _gaq.push(['_setAllowLinker', true]);
	  _gaq.push(['_trackPageview']);
	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
	</script>
	<?php if ( !!$headIncludeBlock ) echo $headIncludeBlock; ?>
</head>

<body <?php if ( !!$pageID ) echo('id="' . $pageID . '"');?> class="portrait nojs<?php if ( !!$classExts ) echo(' ' . $classExts); ?>">
<div id="logo"> <a href="http://www.centurylink.com/smallbusiness" class="ir">CenturyLink<sup>&reg;</sup></a> </div>
