<?php
$page_url = "http://" . $_SERVER["SERVER_NAME"] . dirname($_SERVER["REQUEST_URI"]) . "/";

$sVars = <<<SVAR
	var eBiz_pageName = "ctl|smb|soho|promos|special_offers";
	var eBiz_server = "centurylink.com";
	var eBiz_channel = "Small Business";

	var eBiz_prop20 = "promos";
	var eBiz_prop24 = "ctl|smb|promos";
	var eBiz_prop25 = "ctl|smb|soho";
	var eBiz_prop26 = "ctl|smb|soho|promos";
	var eBiz_prop27 = "ctl|smb|soho|promos|special_offers";
	var eBiz_prop38 = "static_page";
	var eBiz_prop39 = "static_page";
	var eBiz_prop52 = "ctl";

	var eBiz_eVar35 = eBiz_prop24;
	var eBiz_eVar53 = eBiz_prop25;
	var eBiz_eVar54 = eBiz_prop26;
	var eBiz_eVar55 = eBiz_prop27;
	var eBiz_eVar48 = eBiz_prop38;
	var eBiz_eVar49 = eBiz_prop39;
	var eBiz_eVar56 = eBiz_prop52;
SVAR;

require_once('../../../inc/gen-head.php'); ?>
<div id="main_page_content" class="main generic">
	<div class="pageContent pageTwoCol">
		<div class="contWrap">
			<h1>Don&rsquo;t miss a beat. Or a sale. <span class="subHeading">Give your business the advantage of fast, reliable High&ndash;Speed Internet.</span></h1>

			<h3>Whatever your need, we&rsquo;ve got something to meet it.</h3>
			<p>Whether your business operates locally or across the nation, you rely on the ability to stay connected with your vendors, partners and customers. CenturyLink offers a variety of services &ndash; from simple, off-the-shelf solutions to customized network architecture, configuration and management.</p>
			<h3>Get the bandwidth that&rsquo;s right for you.</h3>
			<p>Different businesses use their Internet connection in different ways. With CenturyLink<sup>&reg;</sup> High-Speed Internet, you get the speed you need &ndash; so websites load in an instant, emails come and go in a flash, and photos, spreadsheets and other big files download in seconds.</p>
			<h3>Your CenturyLink<sup>&reg;</sup> High-Speed Internet service will include:</h3>
			<ul class="serviceDetails">
				<li>A private, direct connection to our national network.</li>
				<li>A network designed to give you consistent speed all day, every day.</li>
				<li>8 FREE email accounts with a robust webmail platform and massive email storage capacity.</li>
				<li>Unsurpassed reliability backed by a dedicated technical support team that's available 24/7/365.</li>
				<li>McAfee<sup>&reg;</sup> Total Protection which safeguards computers automatically and lets you customize your security strategy.</li>
			</ul>
			<p class="disclaimer">*Other fees and conditions may apply. <a onclick="window.open(this.href,'disclaimer','height=600,width=980,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank" href="https://shop.centurylink.com/small-business/disclaimers/">View details.</a></p>
		</div>
	</div>
	<div id="pageCta" class="pageTwoCol">
		<div class="contWrap">
			<div id="contactForm" class="timedCta activeTimedCta">
				<div class="ctaHeader">
					<p><img src="/soho/assets/images/genSpecialOffer/dont_miss_beat_CTA.jpg" alt="" /></p>
					<h1>Don&rsquo;t wait! Call <?php echo $phoneNumber; ?> <span class="subHead2">to learn more about CenturyLink<sup>&reg;</sup> Business-Class <nobr>High-Speed Internet.</nobr></h1>
				</div>
			</div>
		</div>
	</div>
</div>
<?php require_once('../../../inc/gen-foot.php'); ?>
