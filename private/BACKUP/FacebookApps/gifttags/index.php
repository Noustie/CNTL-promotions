<?php
/* (LIVE) APP ID AND SECRET 
$app_id = "281088448602597";
$app_secret = "7453f037b26530e5617f667c451ae521";*/

/* (DEV) APP ID AND SECRET */
$app_id = "309427629089861";
$app_secret = "6cb589b4757f7a8ee9db9f25246e83b9"; 

/*
if ( isset($_GET["fb_comment_id"]) ) {
	header("Location: http://www.facebook.com/FrenchMarketCoffee?sk=app_" . $app_id );
	exit;
}
*/

require_once 'facebook-sdk/facebook.php';

$facebook = new Facebook(array(
	'appId' => $app_id,
	'secret' => $app_secret,
	'cookie' => true
));

$signed_request = $facebook->getSignedRequest();
$like_status =  $signed_request["page"]["liked"];
?><!DOCTYPE HTML>
<html lang="en-US" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
<title>CenturyLink | Price-Lock Guarantee for 10 Mbps Internet &amp; Phone Service in FL  </title>

<meta name="Description" content="Now Florida residents can bundle High-Speed Internet with Unlimited Calling for just $69.95/mo. Get this 10Mbps high-speed internet phone bundle with no contract and a price guarantee for 5 years. See offer ">
<meta name="Keywords" content="centurylink, Florida, internet phone service, internet phone bundle, price guarantee, no contract, 10Mbps high speed internet, $69.95/mo">
<meta http-equiv="Content-language" content="en-US">
<meta http-equiv="Content-type" content="text/html; charset=UTF-8">
<link rel="P3Pv1" href="http://www.centurylink.com/w3c/p3p.xml" />

<link rel="shortcut icon" href="http://www.centurylink.com/static/Images/favicon.ico" type="image/vnd.microsoft.icon" />
<link rel="stylesheet" href="css/main.css" type="text/css" media="screen,print">
<link rel="stylesheet" href="css/common.css" type="text/css" media="screen,print" />
<link rel="stylesheet" href="css/corners.css" type="text/css" />
<link rel="stylesheet" href="css/gifttag.css" type="text/css" />

<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="swfobject/swfobject.js"></script>
<style type="text/css">
	html {
		overflow: hidden;
	}
</style>
<script type="text/javascript">
	if ( window.self === window.top ) {
		$(document).ready(function () {
			$('html').css( { overflow: 'visible' } );
		});
	}
	var pageTracker = {};
	pageTracker._trackPageview = function () {};
</script>
</head>
<body>
<div id="fb-root">
	<div id="main">
		<div id="masthead">
			<a href="http://www.centurylink.com/" class="logoLink" target="_blank"><img class="logo" src="images/logoCenturyLink.gif" alt="CenturyLink"></a>
			<div id="top_nav">
				<ul>
					<li><a target="_blank" href="http://www.centurylink.com">Home</a></li>
					<li><a target="_blank" href="http://www.centurylink.com/Pages/AboutUs/">About Us</a></li>
					<li><a target="_blank" href="http://espanol.centurylink.com/">Espa&ntilde;ol</a></li>
					<li class="topnav_last"><a target="_blank" href="http://m.centurylink.com">Mobile Site</a></li>
				</ul>
			</div>
		</div>
		<div id="content">
			<div class="bea-portal-layout-grid">
				<div id="dtvMainContentContainer">
					<div id="flash_container">
						<a href="http://get.adobe.com/flashplayer/" target="_blank"><img src="./images/gifttag-noflash.jpg" alt="Flash Player Upgrade Required. To view this content, please download and install the latest version of the Adobe Flash Player. Click here to download  Adobe Flash Player." /></a>
					</div>
				</div>
			</div>
			<script type="text/javascript">
				var vars = { wmode: "transparent", appPath: "../" };
				var params = { wmode: "transparent" };
				swfobject.embedSWF("flash/HolidayGiftTagApp_PMA.swf", "flash_container", "715", "520", "9.0.0.0", null, vars, params, null);
			</script>
		</div>
		<div id="appFooter">
			<ul>
				<li><a target="_blank" href="http://www.centurylink.com/home">Residential</a></li>
				<li><a target="_blank" href="http://www.centurylink.com/Pages/AboutUs/Legal/privacyPolicy.jsp">Privacy Policy</a></li>
				<li><a target="_blank" href="http://www.centurylink.com/Pages/AboutUs/Community/Disabled">Customers with Disabilities</a></li>
				<li class="footernav_last"><a target="_blank" href="http://www.centurylink.com/Pages/AboutUs/CompanyInformation/Regulatory/tariffLibrary.jsp">Tariffs</a></li>
			</ul>
            <p style="font-size:80%;margin-top:3em;">CenturyLink is not liable for any participants' computer software/hardware
issues during/after usage of application.</p>
			<p style="font-size:80%;margin-top:1em;">&copy;2011, CenturyLink, Inc. All Rights Reserved.</p>
		</div>
	</div>
</div>
<script>
var publish = {
	method: 'feed',
	message: 'I just created my own gift tags!',
	name: 'CenturyLink | Custom Gift Tag Generator',
	caption: 'I just created my own gift tags!',
	description: (
		'Here&rsquo;s a great App to share. Create your own custom Gift Tags with your own pictures! Make your gifts this holiday a little more personable by adding photos of you and your family. Create as many as you like&mdash;Fun, easy, and FREE!'
	),
	link: 'http://apps.facebook.com/centurylink-gifttags/',
	picture: 'http://promotions.centurylink.com/FacebookApps/gifttags/images/CNTLsmallLogo.jpg',
	actions: [
	  { name: 'Gift Tag App.', link: 'http://apps.facebook.com/309427629089861' }
	],
	user_message_prompt: 'Say something about this...'
};

function shareToFacebook(){
	FB.ui(publish, function(){})
};
</script>
<script type="text/javascript">
window.fbAsyncInit = function() {
	FB.init( {
		appId: '<?php echo $app_id ?>',
		status: true,
		cookie: true,
		xfbml: true
	} );
	FB.Canvas.setAutoResize(100);
};
(function() {
	var e = document.createElement('script');
	e.async = true;
	e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
	document.getElementById('fb-root').appendChild(e);
})();
</script>
<!-- Do not touch! -->
<!-- SiteCatalyst code version: H.14.
Copyright 1997-2009 Omniture, Inc. More info available at
http://www.omniture.com -->
<script type="text/javascript">
var pageType = "", //s.pageType
	errorType = "", //s.prop2
	accountEvents = "", //eVar1
	serviceEvents = "", //eVar2
	pCategory = "", //eVar3
	unisysEvent = "", //eVar4
	orderType = "", //eVar7
	zipAvail = "", //eVar8
	phoneAvail = "", //eVar9
	addressAvail = "", //eVar10
	respMsg = "", //eVar11
	availType = "", //eVar12
	sEvents = "", //s.events
	sProducts = "", //s.products
	orderNum = "", //s.purchaseID
	totalOrderPrice = ""; //Doubleclick
</script>
<script type="text/javascript" src="http://www.centurylink.com/assets/js/third-party/metrics/metrixConfig.js"></script>
<script language="JavaScript" type="text/javascript">
<!--
if ( !!!s ) var s = {}
//s.linkInternalFilters="javascript:,centurylink.,centurytel.,embarqmail.,synacor.,embarq.,speedpay.,mspcare.bcgi.,embarqnow.,centurylink-business,prismtvproject.";
s.pageName = "ctl|rsd|product|eMktg_q4|gift_tag_application";
s.server = "promotions.centurylink.com";
s.channel = s.evar41 = "rsd";
s.prop3 = s.eVar24 = "";
s.prop6 = "";
s.prop24 = s.eVar53 = "rsd|product";
s.prop25 = s.eVar54 = "rsd|product|emktg_q4";
s.prop26 = s.eVar55 = "";
s.prop38 = s.eVar48 = "static_page";
s.prop39 = s.evar49 = "landing_page";
s.prop52 = s.eVar56 = "ctl";
/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code=s.t(); if(s_code)document.write(s_code)//-->
</script>
<script language="JavaScript" type="text/javascript"><!--
if(navigator.appVersion.indexOf('MSIE')>=0)document.write(unescape('%3C')+'\!-'+'-')
//-->
</script>
<noscript>
<a href="http://www.omniture.com" title="Web Analytics" target="_blank"><img src="http://qwest.com/images/spacer.gif" height="1" width="1" border="0" title="" /></a>
</noscript>
<!--/DO NOT REMOVE/-->
<!-- End SiteCatalyst code version: H.14. -->
</body>
</html>
