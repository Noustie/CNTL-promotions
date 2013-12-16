<?php
	$isConversionPage = false;
	require_once("../../inc/secure.php");
	include_once('../../inc/tracking.php');
?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>CenturyLink | Small-Medium Business | Special Offers | CoreConnect</title>
<meta name="description" content="Get Internet, phone, television and cloud computing solutions from CenturyLink Small-Medium Business.  Reliable service and low pricing." />
<meta name="keywords" content="CenturyLink Small Business, CenturyLink SMB, Phone and Internet, Business Solutions, Business Internet & Data, Enhanced Business Services, Business Phone, Business Mobile,  Business TV, business communication services, telecommunication solutions, networking"/>
<script type="text/javascript">
	var pageType = "",
		errorType = "",
		accountEvents = "",
		serviceEvents = "",
		pCategory = "",
		unisysEvent = "",
		orderType = "",
		zipAvail = "",
		phoneAvail = "",
		addressAvail = "",
		respMsg = "",
		availType = "",
		sEvents = "",
		sProducts = "",
		orderNum = "";
		/*
		eBiz_pageName = "smb|products|special_offers|complete_solutions|core_connect_B",
		eBiz_server = "promotions.centurylink.com"; // s.server
		eBiz_channel = "Small Business";
		eBiz_prop24 = "smb|products";
		eBiz_prop25 = "smb|products|special_offers";
		eBiz_prop26 = "smb|products|special_offers|complete_solutions";
		eBiz_prop38 = "static_page";
		eBiz_prop39 = "landing_page";
		eBiz_evar27 = "smb|products|special_offers|complete_solutions|core_connect_B";

		eBiz_evar48 = eBiz_prop38;
		eBiz_evar49 = eBiz_prop39;
		eBiz_evar35 = eBiz_prop24;
		eBiz_evar37 = eBiz_prop25;
		eBiz_evar55 = eBiz_prop26;
		*/
</script>
<link rel="shortcut icon" href="//www.centurylink.com/favicon.ico" type="image/vnd.microsoft.icon"/>
<link rel="stylesheet" type="text/css" href="/soho/assets/css/ctl_style.css" media="screen"/>
<link rel="stylesheet" type="text/css" href="/soho/assets/common/CLEC/main.css" />
<link rel="stylesheet" type="text/css" href="/soho/static/Styles/newcorners.css" media="screen"/>

<link rel="stylesheet" href="/soho/assets/css/getstarted.css" type="text/css"/>

<script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
</head>
<body>
<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-HS85"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-HS85');</script>
<!-- End Google Tag Manager -->
<div id="main">
	<div id="masthead"><a href="http://www.centurylink.com/small-business/" target="_blank"><img id="logo" src="../images/ctl_bus_logo/ctl_bus_logo.png" alt="CenturyLink"></a>
		<ul id="sectionNav">
			<li class="first"><a href="http://www.centurylink.com/wholesale" target="_blank">Wholesale</a></li>
			<li><a href="http://www.centurylink.com/Pages/Support/" target="_blank">Customer Support</a></li>
			<li><a href="http://www.centurylink.com/Pages/AboutUs/" target="_blank">About Us</a></li>
			<li><a href="https://eam.centurylink.com/eam/entryPoint.do" target="_blank">My Account</a></li>
		</ul>
		<h2 class="callToday">Call today! 866.408.4363</h2>
	</div>
	<div class="page_wrapper corners outsideW">
		<span class="corner cTopLeft"> &nbsp; </span><span class="corner cTopRight"> &nbsp; </span>
		<div class="cta">
			<div class="ctaHdr">
				<h2>Get Started!</h2>
			</div>
			<div class="ctaMid">
				<div class="ctaBody">
					<form id="kanaemail" name="kanaemail" action="/soho/util/getstarted-process.php" method="post" onsubmit="return chkData(this)">
						<input type="hidden" id="successView" name="successView" value="/soho/lc/getstarted/thankyou.php">
						<input type="hidden" id="legacyMarket" name="legacyMarket" value="LC">
						<input type="hidden" id="productOffer" name="productOffer" value="Generic Promo">
						<p class="rep">A representative will contact you using the information you provide below.</p>
						<p><strong>All fields required.</strong></p>
						<p>Which product are you interested in?<br/>
						<select name="productInterest">
							<option value="Bundles">Bundles</option>
							<option value="Internet">Internet</option>
							<option value="Phone">Phone</option>
						</select></p>
						<p>Name<br/>
						<input type="Text" class="longBox vldt" maxlength="150" size="25" value="" name="name"></p>
						<p>Business Name<br/>
						<input type="Text" class="longBox vldt" maxlength="150" size="25" value="" name="business_name"></p>
						<p>Phone<br>
							<input type="Text" class="vldt" maxlength="3" size="3" value="" name="phone1" onkeyup="tabnext(this, document.kanaemail.phone2)">
							<input type="Text" class="vldt" maxlength="3" size="3" value="" name="phone2" onkeyup="tabnext(this, document.kanaemail.phone3)">
							<input type="Text" class="vldt" maxlength="4" size="4" value="" name="phone3"></p>

						<p>Best time to reach you<br>
						<select name="time">
							<option value="Morning">Morning</option>
							<option value="Afternoon">Afternoon</option>
							<option value="Evening">Evening</option>
						</select></p>
						<p><input type="image" class="subBtn" value="SUBMIT" src="/soho/assets/images/getstarted/btn-requestInfo.png"></p>
					</form>
				</div>
			</div>
			<div class="ctaFoot">
				<p>Or give us a call:</p>
				<h3>866.408.4363</h3>
			</div>
		</div>
		<div class="mainHeader">
			<div class="headerCont">
				<h1>Flexible. Reliable. Sensible.</h1>
				<p>With CenturyLink<sup>&trade;</sup> Small Business Solutions, you get services you can count on, and only the services you need, at a fair price. </p>
			</div>
		</div>
		<div class="pageMain">
			<div id="prod_CC" class="prodMod">
				<div class="product">
					<div class="prodDetails">
						<h3 class="ir">CORECONNECT&reg;</h3>
						<p>Get all the services you need, so you can focus on what you do best.</p>
						<ul>
							<li>Business-Class Internet</li>
							<li>Business Phone Service</li>
							<li>Website Design &amp; Hosting</li>
							<li>Business Email &amp; Calendar</li>
						</ul>
						<strong><a href="http://www.centurylink.com/small-business/products/bundles/" target="_blank">Learn More &raquo;</a></strong>
					</div>
					<div class="prodOffer">
						<div class="pricePoint">
							<small class="">Prices from</small>
							<h4 class="pricePointText"><span class="sup">$</span><span class="bigPrice">85</span><span class="dash"> &ndash; </span><span class="sup">$</span><span class="bigPrice">105</span><span class="sup">*</span></h4>
						</div>
						<small>per month for 12 months with 36-month term. <br />
							Up to 10 Mbps.</small>
						<img src="/soho/assets/images/getstarted/free-activation-support.png" alt="FREE Activation Support" /><br />
					</div>
				</div>
			</div>
			<div id="prod_HSI" class="prodMod">
				<div class="product">
					<div class="prodDetails">
						<h3>Business-Class High-Speed Internet</h3>
						<p>Don&rsquo;t miss a beat. Or a sale. Give your business the advantage of fast, reliable High-Speed Internet.</p>
						<strong><a href="http://www.centurylink.com/small-business/products/business-internet-data/" target="_blank">Learn More &raquo;</a></strong>
					</div>
					<div class="prodOffer">
						<div class="pricePoint">
							<small class="">Prices from</small>
							<h4 class="pricePointText"><span class="sup">$</span><span class="bigPrice">29</span><span class="sup">.99*</span></h4>
						</div>
						<small>per month for 12 months with 36-month term and qualifying voice plan. <br />
							Up to 10 Mbps.</small>
					</div>
				</div>
			</div>
			<div id="prod_Phone" class="prodMod">
				<div class="product">
					<div class="prodDetails">
						<h3>Business-Class <nobr>Phone Service</nobr></h3>
						<p>Get the perfect plan for your business, including Unlimited Local and Long Distance and a robust variety of Business Calling Features.</p>
						<strong><a href="http://www.centurylink.com/small-business/products/business-phone/" target="_blank">Learn More &raquo;</a></strong>
					</div>
				</div>
			</div>
			<p class="disclaimer"><small>*Other fees and conditions may apply. <a href="http://www.centurylink.com/smallbusiness/Disclaimers/businessDisclaimer.jsp" onclick="window.open(this.href,'disclaimer','height=600,width=800,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;">View details.</a></small></p>
		</div>
		<span class="corner cBtmLeft"> &nbsp; </span><span class="corner cBtmRight"> &nbsp; </span>
	</div>
	<div class="main_footer">
		<div class="secdProdMods">
			<div class="secProd">
				<div class="secProdPad">
					<h3><img src="/soho/assets/images/getstarted/icon-mobile.png" alt="" />Business Mobile</h3>
					<p>Always connected. Wireless and mobile broadband solutions.</p>
					<p><a href="https://shop.centurylink.com/small-business/products/verizon-business-mobile/" target="_blank">Learn More &raquo;</a></p>
				</div>
			</div>
			<div class="secProd">
				<div class="secProdPad">
					<h3><img src="/soho/assets/images/getstarted/icon-dish.png" alt="" />Business TV</h3>
					<p>DIRECTV<sup>&reg;</sup> helps your business keep employees informed and customers entertained.</p>
					<p><a href="https://shop.centurylink.com/small-business/products/business-tv/" target="_blank">Learn More &raquo;</a></p>
				</div>
			</div>
			<div class="secProd">
				<div class="secProdPad">
					<h3><img src="/soho/assets/images/getstarted/icon-cog.png" alt="" />Telephones &amp; Equipment</h3>
					<p>Get the advanced equipment you need to build a robust phone system or get online quickly.</p>
					<p><a href="http://www.centurylink.com/small-business/products/business-phone/" target="_blank">Learn More &raquo;</a></p>
				</div>
			</div>
		</div>
	</div>
	<div class="footer" >
		<p align="center"> <a href="http://storelocator.centurylinkapps.com/" target="_blank" class="modal-trigger" id="tpl_footer-store-locator">Store Locator</a> | <a href="http://www.centurylink.com/sitemap.html" target="_blank">Site Map</a> | <a href="https://www.centurylink.com/Pages/AboutUs/CompanyInformation/Careers/" target="_blank">Careers</a> | <a href="http://www.centurylink.com/Pages/AboutUs/Legal/CopyrightNotices/" target="_blank" class="modal-trigger" id="tpl_footer-legal-notices">Legal Notices</a> | <a href="http://www.centurylink.com/Pages/AboutUs/Legal/privacyPolicy.jsp" target="_blank">Privacy Policy</a> | <a href="http://www.centurylink.com/Pages/AboutUs/Community/Disabled" target="_blank">Customers with Disabilities</a> | <a href="http://www.centurylinkyellowpages.com/" target="_blank" class="modal-trigger" id="tpl_footer-yellow-pages">Yellow Pages</a> | <a href="https://www.centurylink.com/Pages/AboutUs/CompanyInformation/Regulatory/tariffLibrary.jsp" target="_blank">Tariffs</a> | <a href="http://www.centurylink.com/shop/SpecialOffers/connect5.jsp" target="_blank" class="modal-trigger" id="tpl_footer-email-offers">Email Offers</a> <br />
			<a href="http://www.centurylink.com/business/federal-gov/" target="_blank">Federal Government</a> | <a href="http://www.centurylink.com/business/state-and-local-gov/" target="_blank">State &amp; Local Government</a> | <a href="http://www.centurylink.com/business/education/" target="_blank">Education</a> | <a href="http://www.centurylink.com/business/partners/" target="_blank">Partners</a> | <a href="http://www.centurylink.com/shop/rewardsLanding.html" target="_blank" class="modal-trigger" id="tpl_footer-referral-program">Referral Program</a> <br />
			<span class="price_other_cat"><br />
			Copyright &copy;
			<script type="text/javascript">var dater=new Date(); var theyear=dater.getFullYear(); document.write(theyear);</script>
			CenturyLink, Inc. All Rights Reserved.</span></p>
	</div>
<!--end container div-->
</div>


<script type="text/javascript">
function chkData () {
	var isValid = true;
	$('#kanaemail .vldt').each(function (index, ele) {
		if ( !!!ele.value ) {
			ele.style.backgroundColor="yellow";
			if ( isValid ) {
				ele.focus();
			}
			isValid = false;
		}
	});
	return isValid;
}
function tabnext(curr,next){
	if (curr.getAttribute && curr.value.length==curr.getAttribute("maxlength")) {
		next.focus();
	}
}
function getURLParam (key) {
	var a = location.search.slice(1).split("&"), GET = [];
	for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
	return GET[key] || null;
}
</script>

<script type="text/javascript" src="/soho/assets/js/third-party/metrics/s_h_code_sb_omni_feb2011.js"></script>

<!--i2a, Interest2Action, iCrossing-->
<script type="text/javascript" src="/soho/assets/js/third-party/metrics/metrixConfig.js"></script>
<!--i2a, Interest2Action, iCrossing-->

<script language="JavaScript" type="text/javascript"><!--
if(navigator.appVersion.indexOf('MSIE')>=0)document.write(unescape('%3C')+'\!-'+'-')
//--></script>
<noscript>
<a href="http://www.omniture.com" title="Web Analytics"><img src="/assets/images/spacer.gif" height="1" width="1" border="0" alt="" /></a>
</noscript>
<!--/DO NOT REMOVE/-->

<?php
if ( $isConversionPage ) { addConversionTNTMbox(); }
if ( !!$io ) {
	addIgnOne_conversion( $io['conversion_type'], $io['sku'], $io['order_code'], $io['onetimecharge'], $io['monthlycharge'] );
} else {
	addIgnOne_behavioral();
}

?>
<!-- Begin Mongoose Metrics Tracking Code -->
<script type="text/javascript">
var mm_c = '50d3ea85f492c7cbc35c27ebd7b46a81';
var mm_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");
document.write(unescape("%3Cscript src='" + mm_protocol + "www.mongoosemetrics.com/jsfiles/js-correlation/mm-getvar.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
/* Custom Parameters */
/* MANDATORY default_number Setup Parameter DO NOT REMOVE */
var default_number='8664084363'; /* 10 Digits Only i.e. 8881234567 */
if (getURLVar('userguid')){
                var custom1=getURLVar('userguid');
}
/* Custom Parameters */

</script>
<script type="text/javascript">
document.write(unescape("%3Cscript src='" + mm_protocol + "www.mongoosemetrics.com/jsfiles/js-correlation/mm-control.php%3F" + mm_variables + "' type='text/javascript'%3E%3C/script%3E"));
</script>
<!-- End Mongoose Metrics Tracking Code -->

</body>
</html>
