<?php
$page_url = "http://" . $_SERVER["SERVER_NAME"] . dirname($_SERVER["REQUEST_URI"]) . "/";
$pageError = ( !!$_GET['error'] ) ? "We&rsquo;re sorry, but there was a problem processing your request. Please fill out the form again." : "";

$sVars = <<<SVAR
	var eBiz_pageName = "ctl|smb|soho|promos|special_offers|ctl|landing";
	var eBiz_server = "centurylink.com";
	var eBiz_channel = "Small Business";

	var eBiz_prop20 = "promos";
	var eBiz_prop24 = "ctl|smb|promos";
	var eBiz_prop25 = "ctl|smb|soho|promos";
	var eBiz_prop26 = "ctl|smb|soho|promos|special_offers";
	var eBiz_prop27 = "ctl|smb|soho|promos|special_offers|ctl";
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

$phoneNumber = "866.660.1579";
require_once('../../../inc/gen-head.php');
?>
<div id="main_page_content" class="main">
	<div class="pageContent pageTwoCol">
		<div class="contWrap">
			<h1>Try a bundle with a kick.</h1>
			<h2 class="pricePoint"><img src="/soho/assets/images/genSpecialOffer/message-pricePoint.gif" alt="CenturyLink&reg; Double Bundle High-Speed Internet + Phone &ndash; $53.95 a month with
3-year agreement." /></h2>
			<h3>You don&rsquo;t need more caffeine &ndash; you need High-Speed Internet.</h3>
			<p>With CenturyLink<sup>&reg;</sup> High-Speed Internet, websites load in an instant. E-mails come and go in a flash. Photos, spreadsheets and other big files download in seconds.</p>
			<h3>Combine with Unlimited Local Calling.</h3>
			<p>Stay connected to customers and get the advantage of calling features like Call Waiting, Caller ID and Business Voice Mail.</p>
			<h3>We&rsquo;ll sweeten the deal &ndash; get it all for the great low price of just $53.95 a month.</h3>
			<p>That&rsquo;s about $1.80 a day &ndash; the price of a cup of coffee &ndash; for consistently fast High-Speed Internet and an Unlimited Local Calling line. What&rsquo;s more, you&rsquo;ll enjoy this deal for an entire year*!</p>
			<h2>Don&rsquo;t wait! Enter your information on the right to get started.</h2>
			<p class="disclaimer">*Offer is for up to 1.5 Mbps with a 3-year term. Other fees and conditions may apply. <a onclick="window.open(this.href,'disclaimer','height=600,width=980,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank" href="https://shop.centurylink.com/small-business/disclaimers/">View details.</a></p>
		</div>
	</div>
	<div id="pageCta" class="pageTwoCol">
		<div class="contWrap">
			<div id="clickToCallMe" class="timedCta activeTimedCta">
				<div class="ctaHeader">
					<p> <img src="/soho/assets/images/genSpecialOffer/ctaHeaderC2C.jpg" alt="Order today. Enter your phone number and we&rsquo;ll call you." /></p>
				</div>
				<div class="callMeBox" id="lpVoiceButtonDivSmallBizCLPromo1"></div>
				<p class="callmeTag">An open phone line is required to recieve a callback.</p>
			</div>
			<div id="contactForm" class="timedCta">
				<div class="ctaHeader">
					<p> <img src="/soho/assets/images/genSpecialOffer/ctaHeaderForm.jpg" alt="Get Started! A representative will contact you using the information you provide below." /></p>
					<p class="disclaimer">All fields and a valid phone number are required.</p>
				</div>
				<form method="post" action="thankyou.php" class="contact" id="smallBusiness_promos" name="smallBusiness_promos">
					<input type="hidden" value="CenturyLink Double Bundle High-Speed Internet + Phone -- $53.95 a month with 3-year agreement." name="productOffer" id="productOffer" />
					<input type="hidden" value="<?php echo( $page_url . "?error=true"); ?>" name="onMailErrorURL" id="onMailErrorURL" />
					<input type="hidden" value="LC" name="legacyMarket" id="legacyMarket" />
					<div class="fieldBlock">
						<label for="contact_name">Name</label>
						<input type="text" value="" class="validate" name="contact_name" id="contact_name" />
					</div>
					<div class="fieldBlock">
						<label for="contact_business_name">Business Name</label>
						<input type="text" value="" class="validate" name="contact_business_name" id="contact_business_name" />
					</div>
					<div class="fieldBlock">
						<label for="contact_phoneNumber">Phone</label>
						<input type="text" maxlength="14" value="" class="validate" name="contact_phoneNumber" id="contact_phoneNumber" />
					</div>
					<div class="fieldBlock">
						<label for="contact_time">Best time to reach you</label>
						<select id="contact_time" name="contact_time">
							<option value="Morning">Morning</option>
							<option value="Afternoon">Afternoon</option>
							<option value="Evening">Evening</option>
						</select>
					</div>
					<div class="fieldBlock">
						<input type="image" class="submitBtn" value="submit" src="/soho/assets/images/genSpecialOffer/contact-submitBtn.gif" />
					</div>
					<div class="fieldBlock">
						<p id="errorHolder"><?php echo $pageError; ?></p>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<?php require_once('../../../inc/gen-foot.php'); ?>
