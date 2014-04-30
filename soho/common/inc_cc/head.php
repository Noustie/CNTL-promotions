<?php
include_once('../common/fn/start.php');
?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
<title>CenturyLink Business - CoreConnect</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- ***************  METRIX CONFIGURATION CODE BEGIN  ******************** -->
<script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
<script type="text/javascript" src="/soho/assets/js/contactFormValidate.js"></script>
<?php
addGlobalTNTLib();
?>
<script type="text/javascript">
	var sAddress = ""; //s.address
    var pageType = ""; //s.pageType
    var errorType = ""; //s.prop2
    var accountEvents = ""; //eVar1
    var serviceEvents = ""; //eVar2
    var pCategory = ""; //eVar3
    var unisysEvent = ""; //eVar4
    var orderType = ""; //eVar7
    var zipAvail = ""; //eVar8
    var phoneAvail = ""; //eVar9
    var addressAvail = ""; //eVar10
    var respMsg = ""; //eVar11
    var availType = ""; //eVar12
    var sEvents = ""; //s.events
    var sProducts = ""; //s.products
    var orderNum = ""; //s.purchaseID
    var totalOrderPrice = ""; //Doubleclick
</script>
<?php /*
<script type="text/javascript">
    var getTnTCookie=function(c){
        var dc=document.cookie; return (dc.indexOf(c)!=-1)?(dc.split(c)[1].split(';')[0].charAt(0)=="=")?dc.split(c+'=')[1].split(';')[0]:dc.split(c)[1].split(';')[0]:"";
    },TsTrCookie=getTnTCookie("TsTr");xTnTCookie=getTnTCookie("xTnT")
    mboxCreate('GlobalProvisioner','URL='+document.location,'TsTr='+TsTrCookie,'xTnT='+xTnTCookie);
</script>
*/ ?>
<!-- ***************  METRIX CONFIGURATION CODE END  ******************** -->

<link rel="stylesheet" href="/soho/static/Styles/modals.css" type="text/css" media="screen,print">
<link href="../../CLEC/main.css" rel="stylesheet" type="text/css" />
<link href="../../CLEC/clec.css" rel="stylesheet" type="text/css" />
<link href="/soho/static/Styles/tabsGreen.css" rel="stylesheet" type="text/css">
<link href="/soho/static/Styles/corners.css" rel="stylesheet" type="text/css">
<link href="../common/cc.css" rel="stylesheet" type="text/css">
<meta name="keywords" content="CenturyLink" />
<meta name="description" content="CenturyLink" />
<link rel="P3Pv1" href="//www.centurylink.com/smallbusiness/w3c/p3p.xml" />
<link rel="shortcut icon" href="//www.centurylink.com/favicon.ico" type="image/vnd.microsoft.icon" />

<link rel="stylesheet" href="/soho/assets/css/corners.css" type="text/css"/>
<link rel="stylesheet" href="/soho/assets/css/soho-promos-global.css" type="text/css"/>
</head>
<body>
<?php
addGlobalTNTMbox();
?>
<script type="text/JavaScript">
   		$(document).ready(function(){ initializeLocator("COM", "");});
</script>
<div id="main">
	<div id="masthead"> <a href="http://www.centurylink.com/small-business/" target="_blank"><img id="logo" src="/soho/assets/images/ctl_bus_logo/ctl_bus_logo.png" alt="CenturyLink"  style="padding-top:20px;"></a>
		<ul id="sectionNav">
			<li class="first"><a href="http://www.centurylink.com/wholesale" target="_blank">Wholesale</a></li>
			<li><a href="http://www.centurylink.com/Pages/Support/" target="_blank">Customer Support</a></li>
			<li><a href="http://www.centurylink.com/Pages/AboutUs/" target="_blank">About Us</a></li>
			<li><a href="https://eam.centurylink.com/eam/entryPoint.do" target="_blank">My Account</a></li>
		</ul>
	</div>
	<div id="content" class="clec">
