<?php
include_once('../../../inc/tracking.php');
include_once('../../../inc/mbox.php');

if ( !$phoneNumber ) {
	$phoneNumber = "877.744.4416";
}
function addTracking ( $sVars ) {
echo $sVars;
}
?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>CenturyLink | Small-Medium Business | Special Offers | CoreConnect</title>
<meta name="description" content="Get Internet, phone, television and cloud computing solutions from CenturyLink Small-Medium Business.  Reliable service and low pricing." />
<meta name="keywords" content="CenturyLink Small Business, CenturyLink SMB, Phone and Internet, Business Solutions, Business Internet Data, Enhanced Business Services, Business Phone, Business Mobile,  Business TV, business communication services, telecommunication solutions, networking" />
<meta name="robots" content="all" />
<meta name="Security" content="Public" />
<meta name="Publisher" content="Centurylink Communications, Inc." />
<meta name="language" content="en" />

<link rel="shortcut icon" href="//www.centurylink.com/favicon.ico" type="image/vnd.microsoft.icon" />
<link rel="stylesheet" href="//www.centurylink.com/qcms/qCmsRepository/FreeRange/SmallBusiness/css/thickbox.css" type="text/css" media="screen" />
<link rel="stylesheet" href="//www.centurylink.com/qcms/qCmsRepository/FreeRange/SmallBusiness/css/print.css" type="text/css" media="print" />
<link rel="stylesheet" type="text/css" href="//www.centurylink.com/qcms/qCmsRepository/Global/centurylink/css/smallbusiness/ctl_menu.css" />
<link rel="stylesheet" type="text/css" href="//www.centurylink.com/qcms/qCmsRepository/Global/centurylink/smallbusiness/css/smb_style.css" />

<script type="text/javascript" src="/soho/assets/js/generic/mtagconfig.js"></script>

<script src="/assets/js/common/jquery.min.js"></script>

<?php addGlobalTNTLib(); ?>

<script type="text/javascript">
if (top != self) top.location.replace(location);
</script>
<script type="text/javascript">
	var SERVER_TYPE = 'PROD';
	var ctl_url = "http://www.centurylink.com";
	var ctlsecure_url = "https://www.centurylink.com";
	var ctlmyacct_url = "https://embarq.centurylink.com";
	var q_url = "https://qwest.centurylink.com";
	var qcookie_url = "https://q.myaccount.centurylink.com";
	var qshop_url = "https://shop.centurylink.com";
	var qmobile_url = "https://m.centurylink.com";
	var search = "http://c.search.centurylink.com";
	var eq_url = "https://embarq.centurylink.com";
	var eqsecure_url = "https://embarq.centurylink.com";
	var ctleam_url = "https://embarq.centurylink.com";
	var qwest_url = "https://qwest.centurylink.com";
	var ctl_selfservice_url = "https://selfservice.centurylink.com";
	var qportal_url = "https://sbcontrolcenter.centurylink.com";
	var faq_url='http://www3.qwest.com';
	var qPortalUserPostFix = "@control.centurylink.com";

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

<?php
	addTracking ( $sVars );
?>

	var marketRedirect = null;
</script>

<link rel="stylesheet" type="text/css" href="//www.centurylink.com/small-business/assets/css/reset.css" media="screen" />
<link rel="stylesheet" type="text/css" href="//www.centurylink.com/assets/css/plugins/smoothness/jquery-ui-1.8.11.custom.css" />
<link rel="stylesheet" type="text/css" href="//www.centurylink.com/assets/css/plugins/qwest.jquery-ui-0.0.1.css" />
<link rel="stylesheet" type="text/css" href="//www.centurylink.com/qcms/qCmsRepository/Global/centurylink/smallbusiness/css/smb-modal.css" media="screen" />
<link rel="stylesheet" type="text/css" href="//www.centurylink.com/assets/css/global-nav.css" media="screen" />
<link rel="stylesheet" type="text/css" href="//www.centurylink.com/small-business/css/sb_homepage.css" />
<link rel="stylesheet" type="text/css" href="//www.centurylink.com/small-business/css/ctl_style.css" />
<link rel="stylesheet" type="text/css" href="//www.centurylink.com/small-business/css/menu.css" />
<link rel="stylesheet" type="text/css" href="//www.centurylink.com/small-business/assets/css/reset.css" />
<link rel="stylesheet" type="text/css" href="//www.centurylink.com/small-business/assets/css/menu.css" />
<link rel="stylesheet" type="text/css" href="//www.centurylink.com/small-business/assets/css/menu_s.css" />
<link rel="stylesheet" type="text/css" href="//www.centurylink.com/small-business/assets/css/smb-global.css" />

<link rel="stylesheet" href="/soho/assets/css/genSpecialOffer.css" />

<script type="text/javascript" src="/soho/assets/js/genSpecialOffer.js"></script>
<script type="text/javascript">
window.formValidatorConfig = {
	sel_mainForm: '#smallBusiness_promos',
	sel_toValidate: '#smallBusiness_promos .validate',
	sel_submitButton: '.submitBtn'
};
</script>
<script type="text/javascript" src="/soho/assets/js/contactFormValidate.js"></script>

</head>
<body>
<?php addGlobalTNTMbox(); ?>

<script type="text/javascript">
function checkMarket (evt) {
	if ( !!marketRedirect && !!!location.href.match(marketRedirect) && !!!location.href.match("thankyou.php") ) {
		location.replace( marketRedirect + location.search );
	} else if ( !!!marketRedirect && !!!location.href.match("/soho/all/promos/") && !!!location.href.match("thankyou.php") ) {
		location.replace("/soho/all/promos/special-offer/" + location.search);
	}
}
checkMarket();
$(checkMarket);
</script>

<div class="startPage">
	<div id="headerText">
		<div id="wrapper_top_sb">
			<!-- site Detail header -->
			<div class="right_cat_blank">
				<div class="bizHeaderMenu"> <span class="info_panel"><a target="_blank" href="https://www.centurylink.com/Pages/AboutUs/" class="profileMenu" alt="My Profile" title="About Us">About Us</a> | <a target="_blank" href="https://www.centurylink.com/Pages/AboutUs/Careers/" class="profileMenu" alt="My Profile" title="Careers">Careers</a> | <a target="_blank" href="http://storelocator.centurylinkapps.com/index.cfm">Store Locator</a> | <a target="_blank" href="#ZAM" id="sb_global-nav-contact-us" class="profileMenu modal-trigger" alt="My Profile" title="Contact Us">Contact Us</a> | <span class="sb_number ttSMB_mboxTN"><?php echo $phoneNumber; ?></span> </span> <br/>
				</div>
				<a target="_blank" href="http://www.centurylink.com/small-business" title="Century Link"><img src="/soho/assets/images/ctl_bus_logo/ctl_bus_logo.png" alt="CenturyLink" title="CenturyLink" tabindex="1" /></a> </div>
			<h1 id="CTA_phone_number">Call today! <span class="ttSMB_mboxTN"><?php echo $phoneNumber; ?></span></h1>
		</div>
	</div>
</div>
