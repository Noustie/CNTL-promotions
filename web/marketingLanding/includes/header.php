<?php
$phoneNumber = "1.800.366.8201";
$genericHeaderInfo = <<<HEADERBLOCK
<title>CenturyLink | Local Provider of High Speed Internet, Phone, Mobile & TV Services</title>
<meta name="Description" content="At CenturyLink's official site, find a reliable local provider of high speed internet, phone and TV services to homes as well as large and small businesses. See services available and the latest offers. Qwest is now CenturyLink.">
<meta name="Keywords" content="CenturyLink, Qwest, official site, local provider, high speed internet, phone, mobile, tv services">
HEADERBLOCK;
?><!DOCTYPE HTML>
<html lang="en-US">
<head>
<link rel="stylesheet" href="../common/css/common.css" type="text/css" media="screen,print" />
<link href="../common/css/corners.css" rel="stylesheet" type="text/css" />
<style type="text/css">
#headerCont {
	height: auto;
}
#headerCont img {
	display: block;
}
</style>
<meta http-equiv="Content-language" content="en-US">
<meta http-equiv="Content-type" content="text/html; charset=UTF-8">
<link rel="P3Pv1" href="http://www.centurylink.com/w3c/p3p.xml" />
<link rel="shortcut icon" href="http://www.centurylink.com/static/Images/favicon.ico" type="image/vnd.microsoft.icon" />
<link rel="stylesheet" href="../common/css/main.css" type="text/css" media="screen,print">
<link rel="stylesheet" href="../common/css/common.css" type="text/css" media="screen,print">
<link rel="stylesheet" href="../common/css/modals.css" type="text/css" media="screen,print">

<!--<script src="../common/js/mbox.js" type="text/javascript"></script>
<script src="../common/js/global.js" type="text/javascript"></script>
<script src="../common/js/locator.js" type="text/javascript"></script>
<script src="../common/js/modal.js" type="text/javascript"></script>
<script src="../common/js/cookies.js" type="text/javascript"></script>
<script src="../common/js/jquery.simplemodal-1.4.1.js" type="text/javascript"></script>-->
<script src="/assets/js/common/jquery.min.js" type="text/javascript"></script>
	<script type="text/javascript" src="//www.centurylink.com/assets/js/plugins/jquery.qwest-core.js"></script>
	<script type="text/javascript" src="//www.centurylink.com/assets/js/plugins/centurycore.shortcuts.js"></script>	
<script type="text/javascript">
	var sAddress = '';
</script>
<?php
	// $headerInfo is defined within the landing page php core file
	// if one is not definied, then genericHeaderInfo is used.
	if ($headerInfo) {
		echo $headerInfo;
	} else {
		echo $genericHeaderInfo;
	}
?>

<!-- Ignition Tracking code -->
<script type="text/javascript">
(function() {
 var h = 'com-centurylink.netmng.com';
 var a = '1279';
 var t = document.createElement('script');
 t.type = 'text/javascript'; t.async = true;
 var p = 'https:'==document.location.protocol?'https://':'http://';
 var m = document.referrer.match(/https?:\/\/([a-z]+\.[a-z\.]+)/i);
 var r = (m && m[1] != document.location.hostname) ? ('&ref=' + escape(document.referrer)) : '';
 t.src = p + h + '/?async=1&aid=' + a + r;
 var s = document.getElementsByTagName('script')[0];
 s.parentNode.insertBefore(t, s);
})();
</script>

</head>

<body>

<?php /*?><!-- ***************  METRIX CONFIGURATION CODE BEGIN  ******************** -->
<div id="GlobalProvisioner" class="mboxDefault"><!--DefaultContent--></div>
<script type="text/javascript">
    var getTnTCookie=function(c){
        var dc=document.cookie; return (dc.indexOf(c)!=-1)?(dc.split(c)[1].split(';')[0].charAt(0)=="=")?dc.split(c+'=')[1].split(';')[0]:dc.split(c)[1].split(';')[0]:"";
    },TsTrCookie=getTnTCookie("TsTr");xTnTCookie=getTnTCookie("xTnT")
    mboxCreate('GlobalProvisioner','URL='+document.location,'TsTr='+TsTrCookie,'xTnT='+xTnTCookie);
</script>
<!-- ***************  METRIX CONFIGURATION CODE END  ******************** --><?php */?>
<div id="main">
<!--
	<script type="text/JavaScript">
   		$(document).ready(function(){
			//initializeLocator("COM", "");
			qa.initialize();
			});
	</script>
-->
	<div id="masthead"> <a href="http://www.centurylink.com/" target="_blank"><img class="logo" src="/assets/images/logoCenturyLink.gif" alt="CenturyLink" width="223" height="43"></a>
		<ul id="sectionNav">
			<li class="personalSectn"><a href="http://www.centurylink.com/wholesale" target="_blank">Wholesale</a></li>

			<li class="personalSectn"><a href="http://www.centurylink.com/Pages/Support/" target="_blank">Customer Support</a></li>
			<li class="personalSectn"><a href="http://www.centurylink.com/Pages/AboutUs/" target="_blank">About Us</a></li>
			<li class="personalSectn"><a href="https://eam.centurylink.com/eam/entryPoint.do" target="_blank">My Account</a></li>
		</ul>
	</div>
	<div id="content">
