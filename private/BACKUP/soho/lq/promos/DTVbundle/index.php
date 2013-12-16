<?php
$pagePhone = "855.345.6980";
$metaTitle = '<title>CenturyLink | Small-Medium Business | Special Offers | CoreConnect + DIRECTV</title>';
$metaDescription = '<meta name="description" content="Bundle Internet, phone, web hosting, email and DIRECTV service through CenturyLink Small-Medium Business. Reliable service and low pricing." />';
$metaKeywords = '<meta name="keywords" content="CenturyLink Small Business, CenturyLink SMB, Phone and Internet, Business Solutions, Business Internet & Data, Enhanced Business Services, Business Phone, Business Mobile,  Business TV, business communication services, telecommunication solutions, networking, Business Bundles, business phone services, small business it, office services, DIRECTV for business, DIRECTV business, satellite TV for bars, satellite TV for restaurants, satellite TV for private offices" />';
$customStyleInclude = './headerstyles.php';

$trackingBlock = <<<OMNIVARS
<script type="text/javascript">
eBiz_server="promotions.centurylink.com";
eBiz_pageName="ctl|smb|promos|special_offers|ctl_triple_business_bundle";
eBiz_channel=eBiz_evar41="Small Business";
eBiz_prop20="promos";
eBiz_evar35=eBiz_prop24="ctl|smb|promos";
eBiz_evar53=eBiz_prop25="ctl|smb|promos|special_offers";
eBiz_evar54=eBiz_prop26="ctl|smb|promos|special_offers";
eBiz_evar55=eBiz_prop27="ctl|smb|promos|special_offers|q_triple_business_bundle";
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
	<div id="pageWrapper" class="ccSave ccTrustSave page_wrapper page_wrapper_top widepage">
		<div>
			<div class="headerBlock">
				<h6>I have the tools to entertain and thrive.</h6>
				<h1>Today, I kept customers cheering for more.</h1>
				<h6>Core Connect&reg; + DIRECTV&reg;</h6>
				<h3>$99.99 PER MONTH* <small>for 12 months with new service of 36-month Core Connect and 24-month DIRECTV term.</small></h3>
			</div>
		</div>
		<div class="special-offers-form roundcorners roundbtmcorners rcHasBdr">
			<div class="cta">
				<div class="ctaTop">
					<div class="ctaMid">
						<div class="ctaBody">
							<h2 class="accentForm">Talk to a Rep Today</h2>
							<p class="formCopy">Fill out the form below and a Business Expert will contact you to discuss how we can best meet your needs. </p>
							<p class="smaller">(All fields required.)</p>
<?php
renderForm( "thankyou.php", "LQ", "Core Connect + DIRECTV", '$99.99/MO. for 12 Months', "/soho/assets/images/cc-dtv-bundle/btn_talkToExpert.jpg", "Core Connect + DIRECTV - LQ" );

?>
							<p>Or speak with us at<br /></p>
							<h4 class="formPhone"><?php echo $pagePhone; ?></h4>
						</div>
					</div>
				</div>
				<!--<div class="ctaFoot">
					<div class="ctaBgWrap">
						<p>Or give us a call:</p>
						<h3><span class="tt_pagePhone"><?php echo $pagePhone; ?></span></h3>
					</div>
				</div>-->
			</div>
			<span class="roundcorner rcLeft rcBottom outsideW">&nbsp;</span><span class="roundcorner rcLeft rcBottom outsideW">&nbsp;</span>
		</div>
		<div id="underForm" class="roundcorners rcHasBdr">
			<span class="roundcorner rcLeft rcTop outsideW">&nbsp;</span><span class="roundcorner rcLeft rcTop outsideW">&nbsp;</span>
			<h4>Switch with peace of mind</h4>
			<ul class="greenDot">
				<li><strong>FREE activation</strong> of online services from our professional support team</li>
				<li>24/7 tech support</li>
				<li>Security tools and backup</li>
			</ul>
			<span class="roundcorner rcLeft rcBottom outsideW">&nbsp;</span><span class="roundcorner rcLeft rcBottom outsideW">&nbsp;</span>
		</div>
		<div id="pageContent">
			<h3 class="cc-dtv-subhead">Give your business everything it needs with a money-saving bundle. <br />
				5 business tools. 1 price.</h3>
			<div class="coreConnectInfo">
				<h2 class="cc-dtv-header">Core Connect&reg; + DirecTV&reg;</h2>
				<div class="col leftCol ccInfo">
					<ul class="ccInfoList">
						<li> <strong>High-Speed INTERNET</strong> <span>Do more faster with speeds up to 12 Mbps and upgrades up to 40 Mbps.</span> <img src="/soho/assets/common/images/promos/icon-mouse.png" alt="High-Speed Internet" class="ccIcon" /></li>
						<li> <strong>Web PRESENCE</strong> <span>Customize your own website and easily promote your business online. Create your own vanity URL too.</span> <img src="/soho/assets/common/images/promos/icon-www.png" alt=">Website Design &amp; Hosting" class="ccIcon" /> </li>
						<li> <strong>Business-Class EMAIL</strong> <span>Microsoft<sup>&reg;</sup>-hosted Exchange email keeps you connected from anywhere.</span> <img src="/soho/assets/common/images/promos/icon-email.png" alt="Business Email &amp; Calendar" class="ccIcon" /> </li>
						<li> <strong>Business VOICE</strong> <span>Stay in touch locally and nationwide with up to 15 popular calling features.</span> <img src="/soho/assets/common/images/promos/icon-phone.png" alt="Business Phone Service" class="ccIcon" /> </li>
					</ul>
				</div>
				<div class="col rightCol dtvInfo">
					<img src="/soho/assets/images/cc-dtv-bundle/cc-dtv-TV.jpg" alt="DIRECTV&reg; for Business" />
					<h3>DIRECTV for Business</h3>
					<p>Turn on the star treatment for your customers with America&rsquo;s #1 satellite TV.</p>
					<ul>
						<li>Over 45 channels, including CNN, FOX News and the Weather Channel</li>
						<li>Enhance your customers&rsquo; experience and reduce perceived wait times</li>
						<li>Stay informed on the news and events that could impact your business</li>
					</ul>
				</div>
				<hr class="ccInfoBtmBdr" />
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
