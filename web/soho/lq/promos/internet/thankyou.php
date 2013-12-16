<?php
$io = array(
	"conversion_type" => "SOHO-LQ",
	"sku" => "HSI",
	"order_code" => "",
	"onetimecharge" => "",
	"monthlycharge" => ""
);
$pagePhone = "855.891.4080";
if( $_GET['source']=="email" ) {
	$pagePhone = "EEE.EEE.EEEE";
} else if ( $_GET['source']=="display" ) {
	$pagePhone = "855.345.6981";
} else if ( $_GET['source']=="search" ){
	$pagePhone = "855.693.4168";
}
$metaTitle = '<title>CenturyLink High-Speed Internet | Small-Medium Business | Special Offers</title>';
$metaDescription = '<meta name="description" content="Get Internet, phone, television and cloud computing solutions from CenturyLink Small-Medium Business.  Reliable service and low pricing." />';
$metaKeywords = '<meta name="keywords" content="CenturyLink Small Business, CenturyLink SMB, Phone and Internet, Business Solutions, Business Internet & Data, Enhanced Business Services, Business Phone, Business Mobile,  Business TV, business communication services, telecommunication solutions, networking, Business Bundles, business phone services, small business it, office services" />';
$customStyleInclude = './headerstyles.php';

$trackingBlock = <<<OMNIVARS
<script>
eBiz_server="promotions.centurylink.com";
eBiz_pageName="ctl|smb|promos|special_offers|q_29.99_HSI|thank_you";
eBiz_channel=eBiz_evar41="Small Business";
eBiz_prop3=eBiz_evar24="unknown Legacy[company] New Customer Legacy[company] Existing Customer";
eBiz_prop20="promos";
eBiz_evar35=eBiz_prop24="ctl|smb|promos";
eBiz_evar53=eBiz_prop25="ctl|smb|promos|special_offers";
eBiz_evar54=eBiz_prop26="ctl|smb|promos|special_offers|thank_you";
eBiz_evar55=eBiz_prop27="ctl|smb|promos|special_offers|q_29.99_HSI|thank_you";
eBiz_evar48=eBiz_prop38="static_page";
eBiz_evar49=eBiz_prop39="static_page";
eBiz_evar56=eBiz_prop52="ctl";
</script>
OMNIVARS;

include_once('../../../util/soho-mailform-inc.php');
include_once('../common/inc_cc/cc-ts-head-gtm.php');
?>
<div class="trackWrap">

	<!--
	Start of DoubleClick Floodlight Tag: Please do not remove
	Activity name of this tag: CTLSB - Generic HSI Conversion Page - LQ
	URL of the webpage where the tag is expected to be placed: https://promotions.centurylink.com/soho/lq/promos/internet/thankyou.php?success=true&r=1352151779
	This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
	Creation Date: 11/05/2012
	-->
	<!--
	<iframe src="https://3490900.fls.doubleclick.net/activityi;src=3490900;type=confi440;cat=ctlsb836;qty=1;cost=[Revenue];ord=[OrderID]?" width="1" height="1" frameborder="0" style="display:none"></iframe>

	<!-- End of DoubleClick Floodlight Tag: Please do not remove -->

	<!-- Google Code for Business CoreConnect Visitors Remarketing List -->
	<!--
	<script type="text/javascript">
	/* <![CDATA[ */
	var google_conversion_id = 1038946398;
	var google_conversion_language = "en";
	var google_conversion_format = "3";
	var google_conversion_color = "ffffff";
	var google_conversion_label = "0JdtCKywggMQ3qC07wM";
	var google_conversion_value = 0;
	/* ]]> */
	</script>
	<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
	</script>
	<noscript>
	<div style="display:inline;">
	<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/1038946398/?label=0JdtCKywggMQ3qC07wM&amp;guid=ON&amp;script=0"/>
	</div>
	</noscript>
	-->
</div>
	<div id="callToSave">
		<h1>Call Today! <span class="tt_pagePhone"><?php echo $pagePhone; ?></span></h1>
	</div>
	<div id="pageWrapper" class="ccSave ccTrustSave page_wrapper page_wrapper_top widepage internetLQ">

		<div>
			<div class="headerBlock">
			<h6>Today, I have the speed to work faster and smarter.</h6>
			<h1>GO CONSISTENTLY FAST WITH HIGH-SPEED INTERNET</h1>
			<h6>High-Speed INTERNET</h6>
			<h3>$29.99 PER MONTH* | UP TO 12 MBPS</h3>
			<h6>New Internet customers for 12 months with a 36-month term.</h6>
			</div>
		</div>
		<div class="special-offers-form roundcorners roundbtmcorners rcHasBdr">
			<div class="cta">
				<div class="ctaTop">
					<div class="ctaMid">
						<div class="ctaBody">
							<h2 class="accentForm">Thank You</h2>
							<p>A customer service representative will contact you within 24 hours using the information you provided. If request submitted after hours, we will contact you on the next business day.</p>						</div>
					</div>
				</div>
				<div class="ctaFoot">
					<div class="ctaBgWrap">
						<p>Or give us a call:</p>
						<h3><span class="tt_pagePhone"><?php echo $pagePhone; ?></span></h3>
					</div>
				</div>
			</div>
			<span class="roundcorner rcLeft rcBottom outsideW">&nbsp;</span>
			<span class="roundcorner rcRight rcBottom outsideW">&nbsp;</span>
		</div>
		<div id="underForm" class="roundcorners rcHasBdr">
			<span class="roundcorner rcLeft rcTop outsideW">&nbsp;</span>
			<span class="roundcorner rcRight rcTop outsideW">&nbsp;</span>
			<h4>Switch with peace of mind</h4>
			<ul class="greenDot">
				<li>24/7 tech support</li>
				<li>Security tools and backup</li>
				<li>30-day Risk Free Trial</li>
			</ul>
			<span class="roundcorner rcLeft rcBottom outsideW">&nbsp;</span>
			<span class="roundcorner rcRight rcBottom outsideW">&nbsp;</span>
		</div>
		<div id="pageContent">
			<img class="mouseIcon" src="/soho/assets/images/cc-dtv-bundle/mouseIcon.gif" alt="mouseIcon" width="56" height="56" />
			<h2 class="firstHeading">Switch To A New Business Plan. Reliability.</h2>
			<p class="firstParagraph">In business, there's no time for downtime. At CenturyLink, we get that. So whether your business operates locally or across the nation, CenturyLink gives you a consistently fast connection you can count on, all day, every day.</p>
			<div id="coreConnectBundle">
				<h2>CenturyLink<sup>&reg;</sup> High-Speed Internet gives you an edge:</h2>
				<ul class="internetAdvantage">
					<li>Do more faster with speeds up to 12 Mbps</li>
					<li>Blazing-fast upgrades up to 40 Mbps</li>
					<li>Private, direct connection to CenturyLink's consistently fast national network</li>
					<li>Dedicated tech support 24/7/365</li>
					<li>Hassle-free switching with easy setup and installation</li>
					<li>Online security tools, anti-virus, anti-spyware, pop-up blocker and more</li>
					<li>Free email accounts</li>
					<li>30-day Risk Free Trial</li>
				</ul>
			</div>
			<div id="smilingBox">
				<div class="smilingBoxWrap">
					<h3>We help businesses like yours succeed. </h3>
					<p>"CenturyLink small business service has evolved with our company to offer new services to keep us and companies like us content and competitive in today's market."</p>
					<p>&ndash; Wasatch Transfer<br/>
						<span style="padding-left: 11px;">Park City, UT</span>
					 </p>
				</div>
			</div>
		</div>
		<div class="special-offers-asterisk">*Other fees and conditions may apply. <a href="http://www.centurylink.com/smallbusiness/Disclaimers/businessDisclaimer.jsp" onclick="window.open(this.href,'disclaimer','height=650,width=970,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank">View details.</a></div>
	</div>

<!--end container div-->

<!--i2a qwest smb sales tracking code-->
<script type="text/javascript">
var price = "*"; //enter price in 0.00 format
var currency_id = "*"; //840 = US Dollar, 124 = Canada Dollar
var order_code = "*"; //unique identifier for the specific order or purchase
var sku = "*"; //Offer ID for each item selected or in shopping cart, comma separated
var pageAction = "2102";
</script>

<?php include_once('../common/inc_cc/cc-ts-foot-mng.php'); ?>
