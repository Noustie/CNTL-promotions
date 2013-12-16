<?php
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
eBiz_pageName="ctl|smb|promos|special_offers|q_29.99_HSI";
eBiz_channel=eBiz_evar41="Small Business";
eBiz_prop3=eBiz_evar24="unknown Legacy[company] New Customer Legacy[company] Existing Customer";
eBiz_prop20="promos";
eBiz_evar35=eBiz_prop24="ctl|smb|promos";
eBiz_evar53=eBiz_prop25="ctl|smb|promos|special_offers";
eBiz_evar54=eBiz_prop26="ctl|smb|promos|special_offers";
eBiz_evar55=eBiz_prop27="ctl|smb|promos|special_offers|q_29.99_HSI";
eBiz_evar48=eBiz_prop38="static_page";
eBiz_evar49=eBiz_prop39="static_page";
eBiz_evar56=eBiz_prop52="ctl";
</script>
OMNIVARS;

include_once('inc/head.php');
?>

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
							<h2 class="accentForm">Talk to a Rep Today</h2>
							<p class="formCopy">Fill out the form below and a Business Expert will contact you to discuss how we can best meet your needs.</p>
							<p class="smaller">(All fields required.)</p>
<?php
	renderForm( "thankyou.php", "LQ", "High-speed Internet", '$29.99/ mo. up to 12 Mbps', "/soho/assets/images/cc-dtv-bundle/btn_talkToExpert.jpg", "High-speed Internet - LQ" );
?>
							<p>Or speak with us at<br />
							<h4 class="formPhone"><?php echo $pagePhone; ?></h4>
						</div>
					</div>
				</div>
				<!--<div class="ctaFoot">
					<div class="ctaBgWrap">
						<p>Or give us a call:</p>
						<h3><span class="tt_pagePhone"><?php //echo $pagePhone; ?></span></h3>
					</div>
				</div>-->
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
		<div class="special-offers-asterisk">*Other fees and conditions may apply. <a href="http://www.centurylink.com/small-business/disclaimers/" onclick="window.open(this.href,'disclaimer','height=650,width=970,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank">View details.</a></div>
	</div>

<!--end container div-->

<?php include_once('inc/footer.php'); ?>
