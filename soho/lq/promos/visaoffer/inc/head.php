<?php
include_once('../common/fn/start.php');
?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<?php
if ( isset($metaTitle) ):
	echo $metaTitle . "\n";
else :
?>
<title>CenturyLink | Small-Medium Business | Special Offers | CoreConnect</title>
<?php
endif;

if ( !!$metaDescription ) echo $metaDescription . "\n";
if ( !!$metaKeywords ) echo $metaKeywords . "\n";

if ( !isset($metaDescription) && !isset($metaKeywords) ) :
?>
<meta name="description" content="Get Internet, phone, television and cloud computing solutions from CenturyLink Small-Medium Business.  Reliable service and low pricing." />
<meta name="keywords" content="CenturyLink Small Business, CenturyLink SMB, Phone and Internet, Business Solutions, Business Internet & Data, Enhanced Business Services, Business Phone, Business Mobile,  Business TV, business communication services, telecommunication solutions, networking"/>
<?php endif; ?>

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
<?php if ( !$customStyleInclude ) : ?>

<link rel="stylesheet" type="text/css" href="/soho/assets/css/menu.css" />
<link rel="stylesheet" href="/soho/static/Styles/modals.css" type="text/css" media="screen,print">
<link href="/soho/assets/common/CLEC/main.css" rel="stylesheet" type="text/css" />
<link href="/soho/assets/common/CLEC/clec.css" rel="stylesheet" type="text/css" />
<link href="/soho/static/Styles/tabsGreen.css" rel="stylesheet" type="text/css">
<link href="/soho/lc/promos/common/cc.css" rel="stylesheet" type="text/css">

<link rel="stylesheet" href="/soho/assets/css/corners.css" type="text/css"/>
<link rel="stylesheet" href="/soho/assets/css/soho-promos-global.css" type="text/css"/>
<link rel="stylesheet" href="/soho/assets/css/cc-ts.css" type="text/css"/>
<?
else :
	include_once( $customStyleInclude );
endif;
?>
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
<link rel="shortcut icon" href="//www.centurylink.com/favicon.ico" type="image/vnd.microsoft.icon" />
<script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
<script type="text/javascript" src="/soho/assets/js/contactFormValidate.js"></script>

<?php
//addGlobalTNTLib();
?>

<script type="text/javascript">
function getURLParam (key) {
	var a = location.search.slice(1).split("&"), GET = [];
	for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
	return GET[key] || null;
}
</script>

<?php if ( isset($trackingBlock) ) echo $trackingBlock; ?>

</head>
<!--[if lte IE 8 ]> <body class="ie oldIE"> <![endif]-->
<!--[if IE 9 ]> <body class="ie ie9"> <![endif]-->
<!--[if gt IE 9]><!--><body class="notOldIE"><!--<![endif]-->

<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-HS85"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-HS85');</script>
<!-- End Google Tag Manager -->

<?php
//addGlobalTNTMbox();
?>

<style type="text/css">
	.noStyle{
		list-style-image:none;
		list-style-type:none;
	}
</style>

<div id="main">
	<div id="wrapper_top_sb">
		<div class="right_cat_blank">
			<div align="right"> <span class="info_panel">  <a id="smb_ctoc" href="https://shop.centurylink.com/common/popups/small-business/lq_c2call.html" class="modal-trigger" target="_blank" onclick="window.open( this.href, 'chatWindow', 'height=500,width=600,top=100,left=100'); return false;">Click here for Live Help</a> | <a href="http://www.centurylink.com/Pages/AboutUs/" id="nav_tab5" class="profileMenu" alt="My Profile" title="About Us" target="_blank">About Us</a> | <a href="http://www.centurylink.com/Pages/AboutUs/Careers/" id="nav_tab5" class="profileMenu" alt="My Profile" title="Careers" target="_blank">Careers</a> | <a href="https://www.centurylink.com/small-business/customer-support/" id="sb_global-nav-contact-us" class="profileMenu modal-trigger" alt="My Profile" title="Contact Us" target="_blank">Contact Us</a> | <span class="sb_number"><span class="tt_pagePhone"><?php echo $pagePhone; ?></span></span> </span> <br />
			</div>
			<a href="http://www.centurylink.com/small-business" title="CenturyLink" target="_blank"> <img src="/soho/assets/images/ctl_bus_logo/ctl_bus_logo.png" alt="CenturyLink" title="CenturyLink" tabindex=1/ >
			<!--<img src="#getCTLSkinImage('logo.png')" alt="Century Link" title="Century Link" tabindex=1/>-->
			</a>
		</div>
	</div>
	<div id="content" class="clec">
