<?php

$price = "150";
$disclaimer ="disclaimer.html";
if(isset($_GET["value"])){
	if($_GET["value"]=="100"){
		$price = "100";
		$disclaimer ="disclaimer100.html";
	} 
}

$fb_title = 'Bundle and get a CenturyLink Visa Prepaid Card';
$fb_url = 'http://' . $_SERVER['SERVER_NAME'] . '/offers/tripleplay/index.php';
$fb_image = 'http://' . $_SERVER['SERVER_NAME'] . "/offers/common/dtv-triple/img/fb.jpg";
$fb_description = 'Now from CenturyLink, bundle 3 services &ndash; DIRECTV&reg; service, High-Speed Internet and Home Phone &ndash; and lock in your price for 3 years! Plus, get a CenturyLink Visa Prepaid Card!';


$twt_url = 'http://' . $_SERVER['SERVER_NAME'] . '/offers/tripleplay/';
$twt_text = 'Now from CenturyLink, bundle 3 services and get a price that won&rsquo;t change for 3 years and a Visa Prepaid Card!';

$page_keywords = 'centurylink internet, internet service, internet service provider, High Speed Internet, fast internet, centurylink price lock offer, centurylink 3 year deal, triple play, internet phone tv bundle, directv, phone service provider, american express reward card';
$page_description = 'Get the CenturyLink Price Lock Guarantee and receive a CenturyLink Visa Prepaid Card. Includes Home Phone, up to 10 Mbps High-Speed Internet and over 140 DIRECTV channels, locked into a low monthly rate for 3 years. No rising rates. Guaranteed. ';
$page_title = 'CenturyLink Triple Play Price Lock. High-Speed Internet, DIRECTV through CenturyLink &amp; Phone.';

$svar = array(
	'pageName' => "ctl|rsd|product|emktg|lctl_3_year_pricelock_reg",
	'server' => "promotions.centurylink.com",
	'channel' => "rsd",
	'prop24evar53' => "rsd|product",
	'prop25evar54' => "rsd|product|emktg",
	'prop26evar55' => "rsd|product|emktg|lctl_3_year_pricelock_reg",
	'prop38evar48' => "static_page",
	'prop39evar49' => "landing_page",
	'c2c_clickTrack' => 'ctl|rsd|product|emktg|lctl_3_year_pricelock_reg|click_to_chat'
);

$c2c_buttonname = 'chat-centurylink-residential-customer-support-triple'; //LCTL
//$c2c_buttonname = 'chat-residential-english-triple'; //LQ
?>

<?php require_once("../common/dtv-triple/includes/head.php") ?>
	<div id="main" role="main" class="corners outsideW">
		<div class="page-content">
			<div class="pageHeader">
				<h1 class="ir">the power of 3 | DIRECTV service + Internet + Home Phone</h1>
				<div class="headCta non150pp">
					<h2 class="abir">Bundle all 3 services and get a Centurylink&reg; Visa&reg; Prepaid Card*</h2>
					<div id="<?php echo $c2c_buttonname; ?>" class="chatBtn"> </div>
				</div>
				<h3 class="snipe ir">NEW!</h3>
				<h4 class="call">Or call <strong>1.855.838.7001</strong> now!</h4>
			</div>
			<div class="pageCta">
				<h3 class="abir">There are many ways to BUNDLE.</h3>
				<h3 class="createBundle">Create your own<br/>bundle and choose<br/>what's right for you.</h3>
				<a href="http://www.centurylink.com/home/bundles/"><img alt="Build Your Bundle" class="buildBundleImg" src="../common/dtv-triple/img/BuildYourBundleBtn.png" border="0"/></a>
				<h4 class="call">Or call <strong>1.855.838.7001</strong></h4>
			</div>
			<div class="tabs">
				<ul class="tabsNav">
					<li><a href="#pricelock">Price-Lock Guarantee</a></li>
					<li><a href="#directv">DIRECTV</a></li>
					<li><a href="#hsi">High-Speed Internet</a></li>
					<li><a href="#calling">Unlimited Calling</a></li>
				</ul>
				<div class="tabsCont">
					<span class="corner cTopLeft jsHide"> &nbsp; </span><span class="corner cTopRight"> &nbsp; </span>
					<div id="pricelock" class="tab bgright">
						<div class="tabPad">
							<h3>The CenturyLink 3-Year Triple Play Price Guarantee</h3>
							<p>Now you can bundle <strong>DIRECTV<sup>&reg;</sup></strong> service, <strong>High-Speed Internet</strong> and <strong>Home Phone</strong> from CenturyLink &ndash; all for a low price that you can lock in for 3 years! One low bundled monthly price, locked in for 3 years, with free standard professional installation of your DIRECTV<sup>&reg;</sup> System.</p>
							<p class="floatingDisc discliamer">Excludes all additional monthly fees, surcharges and taxes.</p>
						</div>
					</div>
					<div id="directv" class="tab bgleft showtime">
						<div class="tabPad">
							<h3 class="abir">Includes 12 FREE months of SHOWTIME<sub>&reg;</sub> </h3>
							<h3>Don&rsquo;t just watch TV. DIRECTV&trade;. </h3>
							<ul>
								<!--<li>140+ channels, including music channels and local channels.<sup>&dagger;</sup></li>-->
								<li>NO extra charge for local channels</li>
								<li>4 FREE Upgrades : Genie&trade; &ndash; DIRECTV's best HD DVR ever! Connect up to 4 rooms. Record up to 5 shows at once.<br>
								<span style="font-size:10px;line-height:12px;">Additional equipment required. Additional &amp; Advanced receiver fees apply. Minimum 2-room set-up required for free Genie upgrade offer.</span></li>
								<li>FREE standard professional installation</li>
								<li>3 FREE months of HBO<sup>&reg;</sup> + STARZ<sup>&reg;</sup> + SHOWTIME<sup>&reg;</sup> + Cinemax<sup>&reg;</sup></li>
							</ul>
							<p class="discliamer">Local channels eligibility based on service address. Not all networks available in all markets.</p>
						</div>
					</div>
					<div id="hsi" class="tab bgright">
						<div class="tabPad">
							<h3>Go consistently fast on a private, direct connection.</h3>
							<ul>
								<li>Connection speeds at 10 Mbps to download, upload, surf, watch and chat</li>
								<li>Watch movies on Netflix<sup>&reg;</sup>, Skype<sup>&reg;</sup> with friends and family, or connect on Facebook and Twitter with the reliability and speed you need</li>
								<li>Play online games or stream HD Hollywood movies without slowing down</li>
							</ul>
						</div>
					</div>
					<div id="calling" class="tab bgleft unlimited">
						<div class="tabPad">
							<br />
							<br />
							<br />
							<h3>Clear connection. No dropped calls.</h3>
							<ul>
								<li>Unlimited Local Calling</li>
								<li>Unlimited Nationwide Calling</li>
								<li>10 of our most popular calling features</li>
							</ul>
						</div>
					</div>
					<span class="corner cBottomLeft"> &nbsp; </span><span class="corner cBottomRight"> &nbsp; </span>
				</div>
			</div>
		</div>
		<span class="corner cTopLeft"> &nbsp; </span><span class="corner cTopRight"> &nbsp; </span>
		<span class="corner cBottomLeft"> &nbsp; </span><span class="corner cBottomRight"> &nbsp; </span>
	</div>
	<div class="pageSubFoot">
		<p class="discliamer col">
			Other fees and conditions may apply. <a class="popupTrigger" target="_blank" href="<?php echo $disclaimer; ?>">Click here for details.</a> <br>
			<br />
			Limited Time Offer. New approved customers only. Conditions apply. 24-month DIRECTV agreement required.**  <br />
			Credit card required (except in PA). Hardware and programming available separately. Additional fees required.  <br />
			Applicable use tax adjustment may apply on the retail value of the installation.<br />
			Reward cards are issued in connection with a loyalty, award or promotion program. <br />
			Card terms and conditions apply.
		</p>
<?php require_once("../common/dtv-triple/includes/sharing.php") ?>
	</div>
<?php require_once("../common/dtv-triple/includes/foot.php") ?>
