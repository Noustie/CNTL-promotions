<?php
include_once('../common/fn/start.php');
?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

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

<link rel="P3Pv1" href="//www.centurylink.com/smallbusiness/w3c/p3p.xml" />
<link rel="shortcut icon" href="//www.centurylink.com/favicon.ico" type="image/vnd.microsoft.icon" />

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

<?php
//addGlobalTNTLib();
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

<div id="main">
	<div id="wrapper_top_sb">
		<div class="right_cat_blank">
			<div align="right"> <span class="info_panel">  <a id="smb_ctoc" href="https://www.centurylink.com/common/popups/small-business/lctl_c2call.html" class="modal-trigger" target="_blank" onclick="window.open( this.href, 'chatWindow', 'height=500,width=600,top=100,left=100'); return false;">Click here for Live Help</a> | <a href="http://www.centurylink.com/Pages/AboutUs/" id="nav_tab5" class="profileMenu" alt="My Profile" title="About Us" target="_blank">About Us</a> | <a href="http://www.centurylink.com/Pages/AboutUs/Careers/" id="nav_tab5" class="profileMenu" alt="My Profile" title="Careers" target="_blank">Careers</a> | <a href="https://www.centurylink.com/small-business/support/" id="sb_global-nav-contact-us" class="profileMenu modal-trigger" alt="My Profile" title="Contact Us" target="_blank">Contact Us</a> | <span class="sb_number"><span class="tt_pagePhone"><?php echo $pagePhone; ?></span></span> </span> <br />
			</div>
			<a href="http://www.centurylink.com/small-business" title="CenturyLink" target="_blank"> <img src="/soho/assets/images/ctl_bus_logo/ctl_bus_logo.png" alt="CenturyLink" title="CenturyLink" tabindex=1/ >
			<!--<img src="#getCTLSkinImage('logo.png')" alt="Century Link" title="Century Link" tabindex=1/>-->
			</a>
		</div>
	</div>
	<div id="content" class="clec">
