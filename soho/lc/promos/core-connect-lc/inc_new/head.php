<?php

$metaTitle = '<title>Internet, Email, Phone, Web Hosting | Core Connect | CenturyLink Small Business</title>';
$metaDescription = '<meta name="description" content="Core Connect delivers essential business tools to help you thrive: High-Speed Internet, Business-Class Phone, Email, Web Hosting and 24/7 Tech Support" />';
$metaKeywords = '<meta name="keywords" content="CenturyLink Small - Medium Business, CenturyLink SMB, Business-Class Phone, Internet, Email, 24/7 Tech Support Team, Business Solutions, Web & Data, Enhanced Business Services, Mobile, communication services, telecommunication solutions, networking, Business Bundles, small business IT, office services, unlimited calling, website building, Microsoft Exchange email and accounts, fax over email, fast speed, free activation, security tools & backup" />';

$omnitureVars = <<<OMNIVARS
eBiz_server="promotions.centurylink.com";
eBiz_pageName="ctl|smb|special_offers|lctl|core_connect|$105";
eBiz_channel=eBiz_evar41="Small Business";
eBiz_prop3=eBiz_evar24="unknown Legacy[company] New Customer Legacy[company] Existing Customer";
eBiz_prop20="promos";
eBiz_evar35=eBiz_prop24="ctl|smb|special_offers";
eBiz_evar53=eBiz_prop25="ctl|smb|special_offers|core_connect";
eBiz_evar54=eBiz_prop26="ctl|smb|special_offers|lctl|core_connect|$105";
eBiz_evar55=eBiz_prop27="ctl|smb|special_offers|lctl|core_connect|$105";
eBiz_evar48=eBiz_prop38="static_page";
eBiz_evar49=eBiz_prop39="static_page";
eBiz_evar56=eBiz_prop52="ctl";
OMNIVARS;



include_once('../common/fn/start.php');
?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<?php if(!isset($metaTitle)){ $metaTitle = '<title>CenturyLink | Small-Medium Business | Special Offers | CoreConnect</title>';} echo $metaTitle;?>

<?php if(!isset($metaDescription)){ $metaDescription = '<meta name="description" content="Get Internet, phone, television and cloud computing solutions from CenturyLink Small-Medium Business.  Reliable service and low pricing." />';} echo $metaDescription;?>

<?php if(!isset($metaKeywords)){ $metaKeywords = '<meta name="keywords" content="CenturyLink Small Business, CenturyLink SMB, Phone and Internet, Business Solutions, Business Internet & Data, Enhanced Business Services, Business Phone, Business Mobile,  Business TV, business communication services, telecommunication solutions, networking"/>';} echo $metaKeywords;?>

<meta content="Corporate" name="qSalesChannel"/>
<meta content="Corporate" name="Q.SEARCH.OCE.SALES_CHANNEL"/>
<meta name="robots" content="all"/>
<meta name="cuid" content="wwwteam"/>
<meta name="Expires" content="never"/>
<meta name="Security" content="Public"/>
<meta name="Publisher" content="Centurylink Communications, Inc."/>
<meta name="language" content="en"/>

<!--spirit of search meta tags-->
<meta name="state" content="AZ|CO|ID|IA|MN|MT|NE|NM|ND|OR|SD|UT|WA|WY" />
<meta name="searchTarget" content="Small Business" />
<meta name="productCategory" content="" />
<meta name="contenttype" content="" />
<meta name="product-image" content="" />
<!--end spirit of search meta tags-->

<link rel="stylesheet" href="../../css/thickbox.css" type="text/css"/>
<script type="text/javascript">
	//getting url in js instead of ssi. ssi isn't currently changing based on server_type
	var smburl = window.location.pathname.split( '/' );
	var	host = smburl[2];
</script>
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
	var SERVER_TYPE='PROD';
	var ctl_url='http://www.centurylink.com';
	var ctlsecure_url='https://www.centurylink.com';
	var ctlmyacct_url='https://eam.centurylink.com';
	var q_url='http://qwest.centurylink.com';
	var qshop_url='https://shop.centurylink.com';
	var qmobile_url='http://m.centurylink.com';
	var eq_url='http://embarq.centurylink.com';
	var eqsecure_url='https://embarq.centurylink.com';
	var ctleam_url='https://embarq.centurylink.com';
	var qwest_url='http://qwest.centurylink.com';
	var ctl_selfservice_url='http://selfservice.centurylink.com';
	var search='http://c.search.centurylink.com';
	var qcookie_url='https://q.myaccount.centurylink.com';
	var qportal_url='https://sbcontrolcenter.centurylink.com';
</script>
<link rel="stylesheet" type="text/css" href="/soho/assets/css/reset.css" media="screen"/>
<link rel="shortcut icon" href="//www.centurylink.com/favicon.ico" type="image/vnd.microsoft.icon" />
<script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
<script type="text/javascript" src="/soho/assets/js/contactFormValidate.js"></script>
<?php
addGlobalTNTLib();
?>
<?php if ( !$customStyleInclude ) : ?>
<link rel="stylesheet" type="text/css" href="/soho/assets/css/menu.css" />
<link rel="stylesheet" type="text/css" href="/soho/assets/css/global.css" media="screen"/>
<link rel="stylesheet" type="text/css" media="screen" href="/soho/assets/css/global-nav.css"/>
<link rel="stylesheet" type="text/css" href="/soho/assets/css/sb_homepage.css" />
<link rel="stylesheet" type="text/css" href="/soho/assets/css/ctl_style.css" media="screen"/>
<link rel="stylesheet" href="/soho/assets/css/special_offers.css" type="text/css"/>
<link rel="stylesheet" href="/soho/assets/css/corners.css" type="text/css"/>
<link rel="stylesheet" href="/soho/assets/css/soho-promos-global.css" type="text/css"/>
<?
else :
	include_once( $customStyleInclude );
endif;
?>
</head>
<body>
<?php
addGlobalTNTMbox();
?>

<style type="text/css">
	.noStyle{
		list-style-image:none;
		list-style-type:none;
	}
	div, a{overflow:visible;}
</style>
