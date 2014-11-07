<?php
$price = "100";
$disclaimer ="disclaimer.html";
// if(isset($_GET["value"])){
// 	if($_GET["value"]=="100"){
// 		$price = "100";
// 		$disclaimer ="disclaimer100.html";
// 	} 
// }
$fb_title = 'Bundle and get a $' . $price . ' Reward Card';
$fb_url = 'http://' . $_SERVER['SERVER_NAME'] . '/offers/threeyears/index.php';
$fb_image = 'http://' . $_SERVER['SERVER_NAME'] . "/offers/common/dtv-triple/img/fb.jpg";
$fb_description = 'Now from CenturyLink, bundle 3 services &ndash; DIRECTV&reg; service, High-Speed Internet and Home Phone &ndash; and lock in your price for 3 years! Plus, get a $100 Reward Card!';

$twt_url = 'http://' . $_SERVER['SERVER_NAME'] . '/offers/threeyears/';
$twt_text = 'Now from CenturyLink, bundle 3 services and get a price that won&rsquo;t change for 3 years and a $' . $price . ' Reward Card!';

$page_keywords = 'centurylink internet, internet service, internet service provider, High Speed Internet, fast internet, centurylink price lock offer, centurylink 3 year deal, triple play, internet phone tv bundle, directv, phone service provider, visa reward card';
$page_description = "Get the CenturyLink Price Lock Guarantee and receive a $' . $price . ' Visa Reward Card. Bundle Phone, Internet with speeds up to 12 Mbps and over 140 DIRECTV channels, locked into a low monthly rate for 3 years. No rising rates. Guaranteed.";
$page_title = 'CenturyLink Price Lock Guarantee. DIRECTV, Internet &amp; Phone, all in one bundle.';

$svar = array(
	'pageName' => "ctl|rsd|product|emktg|lq_3_year_pricelock_reg",
	'server' => "promotions.centurylink.com",
	'channel' => "rsd",
	'prop24evar53' => "rsd|product",
	'prop25evar54' => "rsd|product|emktg",
	'prop26evar55' => "rsd|product|emktg|lq_3_year_pricelock_reg",
	'prop38evar48' => "static_page",
	'prop39evar49' => "landing_page",
	'c2c_clickTrack' => 'ctl|rsd|product|emktg|lq_3_year_pricelock_reg|click_to_chat'
);

//$c2c_buttonname = 'chat-centurylink-residential-customer-support-triple'; //LCTL
$c2c_buttonname = 'chat-residential-english-triple'; //LQ
?>

<?php require_once("../common/dtv-triple/includes/head.php") ?>
	<div id="main" role="main" class="corners outsideW">
		<div class="page-content">
			<div class="pageHeader">
				<h1 class="ir">the power of 3 | DIRECTV service + Internet + Home Phone</h1>
				<div class="headCta" style="background: transparent url('images/ctl-prepaidvisa-v4.png') no-repeat 15px 25px;">
					<h2 class="abir">Bundle all 3 services and get a $100 CenturyLink&trade; Visa&reg; Prepaid Card*</h2>
					<div id="<?php echo $c2c_buttonname; ?>" class="chatBtn"> </div>
				</div>
				<h3 class="snipe ir">NEW!</h3>
				<h4 class="call">Or call <strong>1.855.234.5726</strong> now!</h4>
			</div>
			<div class="pageCta">
				<h3 class="abir">There are many ways to BUNDLE.</h3>
				<h3 class="createBundle">Create your own<br/>bundle and choose<br/>what's right for you.</h3>
				<a href="http://www.centurylink.com/home/bundles/"><img alt="Build Your Bundle" class="buildBundleImg" src="../common/dtv-triple/img/BuildYourBundleBtn.png" border="0"/></a>
				<h4 class="call">Or call <strong>1.855.234.5726</strong></h4>
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
							<p>Now you can bundle <strong>DIRECTV<sup>&reg;</sup></strong> service, <strong><br>High-Speed Internet</strong> and <strong>Home Phone</strong> from CenturyLink &ndash; all for a low price that you can lock in for 3 years! One low bundled monthly price, locked in for 3 years, with free standard professional installation of your<br>DIRECTV<sup>&reg;</sup> System.</p>
							<p class="floatingDisc discliamer">Excludes all additional monthly fees, surcharges and taxes.</p>
						</div>
					</div>
					<div id="directv" class="tab bgleft showtime">
						<div class="tabPad">
							<h3 class="uppercase">Don&rsquo;t just watch TV. DIRECTV<sup>&reg;</sup>.</h3>
							<ul>
								<li>NO extra charge for local channels, <br> they&rsquo;re included in over 99% of the U.S.</li>
								<li>4 FREE Upgrades: Genie<sup>&reg;</sup> &ndash; DIRECTV's best HD DVR ever! Connect up to 4 rooms. Record up to 5 shows at once. <br> <small>Additional equipment required. Additional &amp; Advanced receiver fees apply. </small></li>
								<li>FREE standard professional installation in up to four rooms</li>
								<li>3 FREE Months of HBO<sup>&reg;</sup>  + SHOWTIME<sup>&reg;</sup> + Cinemax<sup>&reg;</sup> with SELECT<sup>&trade;</sup> through ULTIMATE Packages</li>
							</ul>
							<p class="discliamer">Local channels eligibility based on service address. Not all networks available in all markets.</p>
						</div>
					</div>
					<div id="hsi" class="tab bgright">
						<img src="/offers/common/dtv-triple/img/speed-bug-12mbps.png" alt="Speeds up to 12 Mbps" class="speedbug">
						<div class="tabPad">
							<h3>Go consistently fast on a private, direct connection.</h3>
							<ul>
								<li>Watch movies and shows on Netflix<sup>&reg;</sup> and Hulu in HD</li>
								<li>Save on mobile data &ndash; connect with in-home Wi-Fi to download the latest apps</li>
								<li>Get answers when you need them with 24/7 tech support</li>
								<li>Includes award-winning Norton<sup>&trade;</sup> AntiVirus Online, at no additional cost</li>
								<li>Skype<sup>&reg;</sup> with friends and family around the world &ndash; up to 7 at once</li>
								<li>Stream music instantly with Pandora and Spotify</li>
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
			<strong>Other fees and conditions may apply. <a class="popupTrigger" target="_blank" href="<?php echo $disclaimer; ?>">Click here for details.</a></strong> <br>
			<br />
			<strong>Offer valid through 1/5/2015. New approved customers only. Conditions apply. 24-month DIRECTV agreement required.</strong>* Credit card required (except in PA). $19.95 Handling &amp; Delivery fee may apply. Applicable use tax adjustment may apply on the retail value of the installation. Programming, pricing and offers are subject to change and may vary in certain markets. Some offers may not be available through all channels and in select areas.
		</p>
<?php require_once("../common/dtv-triple/includes/sharing.php") ?>
	</div>
<?php require_once("../common/dtv-triple/includes/foot.php") ?>
