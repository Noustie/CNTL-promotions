<?php
$fb_title = 'fast internet. low price. 9 months.';
$fb_url = 'http://' . $_SERVER['SERVER_NAME'] . '/offers/purecollege/index.php';
$fb_image = 'http://' . $_SERVER['SERVER_NAME'] . "/offers/purecollege/images/fb.jpg";
$fb_description = 'get consistently fast CenturyLink High-Speed Internet for just $29.95 a month for 9 months, no phone line required. it&rsquo;s internet that gives you what you need when you need it.';

$twt_url = 'http://' . $_SERVER['SERVER_NAME'] . '/offers/purecollege/';
$twt_text = rawurlencode('get consistently fast CenturyLink High-Speed Internet for just $29.95 a month for 9 months, no phone line required!');

$page_keywords = 'centurylink internet, internet service, internet service provider, High Speed Internet, fast internet, Pure broadband, naked DSL, no phone required, phone service provider, college internet, college offer, nine month term, nine month internet, student';
$page_description = "Get CenturyLink High-Speed Internet with no phone line for only $29.95/mo. Lock in your price for 9 months, perfect for students for watching YouTube&trade;, Hulu&trade; and Facebook. ";
$page_title = 'High-Speed Internet from CenturyLink for all of your college needs.';

$svar = array(
	'pageName' => "ctl|rsd|product|emktg|t2_2012|college_pure|lqwest9months",
	'server' => "promotions.centurylink.com",
	'channel' => "rsd",
	'prop24evar53' => "rsd|product",
	'prop25evar54' => "rsd|product|emktg|t2_2012",
	'prop26evar55' => "rsd|product|emktg|t2_2012|college_pure",
	'prop38evar48' => "static_page",
	'prop39evar49' => "landing_page",
	'c2c_clickTrack' => 'ctl|rsd|product|emktg|t2_2012|college_pure_l_qwest_9mo|button|clicktochat',
	'fbTrack' => 'ctl|rsd|product|emktg|t2_2012|college_pure_l_qwest_9mo|button|facebook',
	'twtTrack' => 'ctl|rsd|product|emktg|t2_2012|college_pure_l_qwest_9mo|button|tweet'
);
$headInsert = <<<HDINS
	<script type="text/javascript">
		var lpUnit="chat-centurylink-residential-customer-support";
		var lpLanguage="college-pure-campaign";
	</script>
HDINS;
$c2c_buttonname = 'chat-centurylink-residential-customer-support-college-pure-campaign'; //LQ
?>

<?php require_once("../common/dtv-triple/includes/head.php") ?>
	<div id="main" role="main" class="corners outsideW">
		<div class="page-content">
			<div class="guy"></div>
			<div class="college-header-12">
				<h1>Pure broadband from Centurylink | internet that gives you what
				you need when you need it.</h1>
				<div class="txtAndButton">
					<h2>sign up for 9 months. no phone line required.</h2>
					<h3>speeds up to 10 mbps $39.95 <small>a month for 9 months.</small></h3>
					<div id="<?php echo $c2c_buttonname; ?>" class="college-chatBtn"> </div>
				</div>
			</div>
			<div class="middle">
				<h3>finally, an internet offer that just makes sense.</h3>
				<h2>pure speed. pure simplicity.</h2>
				<p>get high-speed internet with a price that's locked in for 9 months &ndash; perfect for students &ndash; so you get internet when you need it, and you're not tied to some contract that lasts too long. plus, this isn't any old internet you're getting. Pure Broadband&trade; from CenturyLink, designed to give you consistent speed everytime you log on. no phone line required and speeds up to 12 Mbps, where available, so you can:</p>
				<div class="grey-grad">
					<ul>
						<li>complete research and homework in record time</li>
						<li>watch the latest YouTube&trade; videos fast</li>
						<li>download a concert in seconds</li>
					</ul>
					<ul class="right">
						<li>keep up with your friends on Facebook and Twitter</li>
						<li>play games online without slowing down</li>
					</ul>
				</div>
			</div>
			<div class="green-grad">
				<p><strong>pass it on. earn some green.</strong> refer a friend and get $50.
</p>
			</div>
		</div>
		<span class="corner cTopLeft"> &nbsp; </span><span class="corner cTopRight"> &nbsp; </span>
		<span class="corner cBottomLeft"> &nbsp; </span><span class="corner cBottomRight"> &nbsp; </span>
	</div>
	<div class="pageSubFoot">
		<p class="disclaimer col black">Other fees and conditions may apply. <a class="popupTrigger" target="_blank" href="disclaimer.html">Click here for details.</a></p>
<?php require_once("../common/dtv-triple/includes/sharing.php") ?>
	</div>
<?php require_once("../common/dtv-triple/includes/foot.php") ?>
