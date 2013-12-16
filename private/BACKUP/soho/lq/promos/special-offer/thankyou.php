<?php
$io = array(
	"conversion_type" => "SOHO-LQ",
	"sku" => "Generic",
	"order_code" => "",
	"onetimecharge" => "",
	"monthlycharge" => ""
);
require_once('../../../util/soho-mailform-inc.php');

$page_url = "http://" . $_SERVER["SERVER_NAME"] . dirname($_SERVER["REQUEST_URI"]) . "/";

$sVars = <<<SVAR
	var eBiz_pageName = "ctl|smb|soho|promos|special_offers|ctl|confirmation_page";
	var eBiz_server = "centurylink.com";
	var eBiz_channel = "Small Business";

	var eBiz_prop20 = "promos";
	var eBiz_prop24 = "ctl|smb|promos";
	var eBiz_prop25 = "ctl|smb|soho|promos|special_offers";
	var eBiz_prop26 = "ctl|smb|soho|promos|special_offers|qwest";
	var eBiz_prop27 = "ctl|smb|soho|promos|special_offers|qwest|confirmation_page";
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

require_once('../../../inc/gen-head.php');

addConversionTNTMbox();
?>
<div id="main_page_content" class="main">
	<div class="pageContent pageTwoCol">
		<div class="contWrap">
			<h1>Try a bundle with a kick.</h2>
			<h2 class="pricePoint"><img src="/soho/assets/images/genSpecialOffer/message-pricePoint.gif" alt="CenturyLink&reg; Double Bundle High-Speed Internet + Phone &ndash; $53.95 a month with
3-year agreement." /></h2>
			<h3>You don&rsquo;t need more caffeine &ndash; you need High-Speed Internet.</h3>
			<p>With CenturyLink<sup>&reg;</sup> High-Speed Internet, websites load in an instant. E-mails come and go in a flash. Photos, spreadsheets and other big files download in seconds.</p>
			<h3>Combine with Unlimited Local Calling.</h3>
			<p>Stay connected to customers and get the advantage of calling features like Call Waiting, Caller ID and Business Voice Mail.</p>
			<h3>We&rsquo;ll sweeten the deal &ndash; get it all for the great low price of just $53.95 a month.</h3>
			<p>That&rsquo;s about $1.80 a day &ndash; the price of a cup of coffee &ndash; for consistently fast High-Speed Internet and an Unlimited Local Calling line. What&rsquo;s more, you&rsquo;ll enjoy this deal for an entire year*!</p>
			<h2>Don&rsquo;t wait! Enter your information on the right to get started.</h2>
			<p class="disclaimer">*Offer is for up to 1.5 Mbps with a 3-year term. Other fees and conditions may apply. <a onclick="window.open(this.href,'disclaimer','height=600,width=980,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank" href="http://www.centurylink.com/small-business/disclaimers/">View details.</a></p>
		</div>
	</div>
	<div id="pageCta" class="pageTwoCol">
		<div class="contWrap">
			<div id="contactForm" class="timedCta activeTimedCta">
				<div class="thankYouMessage">
					<h1>Thank You.</h1>
					<p>A customer service representative will contact you shortly using the information you provided. If request submitted after hours, we will contact you on the next business day.</p>
				</div>
			</div>
		</div>
	</div>
</div>
<?php require_once('../../../inc/gen-foot.php'); ?>
