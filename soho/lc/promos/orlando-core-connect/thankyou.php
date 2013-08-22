<?php
$io = array(
	"conversion_type" => "SOHO-LC",
	"sku" => "CoreConnect",
	"order_code" => "",
	"onetimecharge" => "",
	"monthlycharge" => ""
);

$pagePhone = "1.866.255.0286";
if( $_GET['source']=="email" ) {
	$pagePhone = "1.866.602.8435";
} else if ( $_GET['source']=="25" ) {
	$pagePhone = "1.866.471.9174";
} else if ( $_GET['source']=="200K" ){
	$pagePhone = "1.866.824.8105";
}

$omnitureVars = <<<OMNIVARS
eBiz_server="promotions.centurylink.com";
eBiz_pageName="ctl|smb|promos|special_offers|ctl_orlando_core_connect|thank_you";
eBiz_channel=eBiz_evar41="Small Business";
eBiz_prop3=eBiz_evar24="unknown Legacy[company] New Customer Legacy[company] Existing Customer";
eBiz_prop20="promos";
eBiz_evar35=eBiz_prop24="ctl|smb|promos";
eBiz_evar53=eBiz_prop25="ctl|smb|promos|special_offers";
eBiz_evar54=eBiz_prop26="ctl|smb|promos|special_offers|thank_you";
eBiz_evar55=eBiz_prop27="ctl|smb|promos|special_offers|ctl_orlando_core_connect|thank_you";
eBiz_evar48=eBiz_prop38="static_page";
eBiz_evar49=eBiz_prop39="static_page";
eBiz_evar56=eBiz_prop52="ctl";
OMNIVARS;

include_once('../../../util/soho-mailform-inc.php');
include_once('../common/inc_pricelock/head.php');
?>
<link type="text/css" href="styles.css" rel="stylesheet">
<!--
Start of DoubleClick Floodlight Tag: Please do not remove
Activity name of this tag: CTLSB-Orlando Landing Page-LCTL
URL of the webpage where the tag is expected to be placed: https://tbd
This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
Creation Date: 03/05/2013
-->
<script type="text/javascript">
var axel = Math.random() + "";
var a = axel * 10000000000000;
document.write('<iframe src="https://3490900.fls.doubleclick.net/activityi;src=3490900;type=landi831;cat=ctlsb226;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
</script>
<noscript>
<iframe src="https://3490900.fls.doubleclick.net/activityi;src=3490900;type=landi831;cat=ctlsb226;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>
</noscript>

<!-- End of DoubleClick Floodlight Tag: Please do not remove -->
<!-- Ignition Tracking Code -->
<script type="text/javascript">
(function() {
  var h = 'com-centurylink.netmng.com';
  var a = '1279';
  var t = document.createElement('script');
  t.type = 'text/javascript'; t.async = true;
  var p = 'https:'==document.location.protocol?'https://':'http://';
  var m = document.referrer.match(/https?:\/\/([a-z]+\.[a-z\.]+)/i);
  var r = (m && m[1] != document.location.hostname) ? ('&ref=' + escape(document.referrer)) : '';
  t.src = p + h + '/?async=1&aid=' + a + r;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(t, s);
})();
</script>
<!-- End Ignition Tracking Code -->
<!-- Google Code for Business CoreConnect Visitors Remarketing List -->
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


<div class="page_wrapper_top widepage">
	<div id="wrapper_top_sb">
		<div class="right_cat_blank">
			<div align="right"> <span class="info_panel"> <a id="smb_ctoc" href="https://www.centurylink.com/common/popups/small-business/lctl_c2call.html" class="modal-trigger" target="_blank" onclick="window.open( this.href, 'chatWindow', 'height=500,width=600,top=100,left=100'); return false;">Click here for Live Help</a> | <a href="http://www.centurylink.com/Pages/AboutUs/" id="nav_tab5" class="profileMenu" alt="My Profile" title="About Us" target="_blank">About Us</a> | <a href="http://www.centurylink.com/Pages/AboutUs/Careers/" id="nav_tab5" class="profileMenu" alt="My Profile" title="Careers" target="_blank">Careers</a> | <a href="https://www.centurylink.com/small-business/customer-support/" id="sb_global-nav-contact-us" class="profileMenu modal-trigger" alt="My Profile" title="Contact Us" target="_blank">Contact Us</a> | <span class="sb_number"><span class="tt_pagePhone"><?php echo $pagePhone; ?></span></span> </span> <br />
				<div class="callCta">
					<h1 >Call today! <span class="tt_pagePhone"><?php echo $pagePhone; ?></span></h1>
				</div>
			</div>
			<a href="http://www.centurylink.com/small-business" title="Century Link"> <img src="/soho/assets/images/ctl_bus_logo/ctl_bus_logo.png" alt="CenturyLink" title="CenturyLink" tabindex=1/ >
			<!--<img src="#getCTLSkinImage('logo.png')" alt="Century Link" title="Century Link" tabindex=1/>-->
			</a>
		</div>
	</div>
	<div class="page_wrapper" >
		<div class="special-offers-left no-green-bg">
			<div class="headerBlock">
				<h1>THINK YOU'RE STUCK WITH CABLE? THINK AGAIN.</h1>
				<h6>GET SPEEDS UP TO 25MBPS!</h6>
				<h2>CORE CONNECT&reg;</h2>
				<p>internet | voice | web hosting | email</p>
				<h6>4 Business Tools. 1 Price.</h6>
				<h3>As low as $85 per month for 12 months with 36-month agreement*</h3>
			</div>
		</div>
		<div class="special-offers-form">
			<div class="cta">
				<div class="ctaTop">
					<div class="ctaMid">
						<div class="ctaBody">
							<h2 class="accentForm">Thank You</h2>
							<p>A customer service representative will contact you within 24 hours using the information you provided. If request submitted after hours, we will contact you on the next business day.</p>

						</div>
					</div>
				</div>
				<div class="ctaFoot">
					<div class="ctaBgWrap">
						<p>Or give us a call:</p>
						<h3><span class="tt_pagePhone"><?php echo $pagePhone; ?></span></h3>
					</div>
				</div>
			</div>
			<div class="corners outsideW cBottom">
				<span class="corner cLeft">   </span>
				<span class="corner cRight">   </span>
			</div>
		</div>

		<div id="underForm">
			<div class="corners outsideW cTop noLayoutTop">
				<span class="corner cLeft">   </span>
				<span class="corner cRight">   </span>
			</div>
			<h4>Switch with peace of mind</h4>
			<ul class="greenDot">
				<li><strong>FREE activation</strong> of online services from our professional support team</li>
				<li>24/7 live tech support</li>
				<li>Security tools and backup</li>
			</ul>
			<div class="corners outsideW cBottom">
				<span class="corner cLeft">   </span>
				<span class="corner cRight">   </span>
			</div>
		</div>
		<div id="main">
			<h2>Core Connect gives your business the edge.</h2>
			<p>Using our products and services, you can run your business at peak performance. In addition, you have 24/7 access to our live tech support to answer any questions about your high-speed Internet, website and email. Core Connect gives your company a real competitive advantage with these powerful tools:</p>
			<div id="coreConnectBundle">
				<ul>
					<li><span class="listSubHead">High-Speed Internet</span><br/>Consistently fast with packages<br/>starting at 10 Mbps.</li>
					<li><span class="listSubHead">Web Presence</span><br/>Create or migrate your business website.</li>
					<li><span class="listSubHead">Business-Class Email</span><br/>Unleash the power of Microsoft<sup>&reg;</sup> Exchange email boxes.</li>
					<li><span class="listSubHead">Business Voice</span><br/>Benefit from local and nationwide calling.</li>

				</ul>
			</div>
			<div id="coreConnectList">
				<h2>Core Connect also offers you these valuable benefits:</h2>
				<ul>
					<li>11 calling features including voicemail</li>
					<li>Free Web hosting transfer</li>
					<li>10 pages of Web hosting with easy-to-use templates</li>
					<li>Free online profiles with top search engines</li>
					<li>Fax over email</li>
					<li>8 Anti-Virus/Anti-Spam licenses</li>
					<li>2GB online backup</li>
				</ul>
				<h4>That's more than $400 worth of value-added services!</h4>
			</div>
			<div id="smilingBox">
				<h3>We help businesses like yours succeed. </h3>
				<p>"CenturyLink small business service has evolved with our company to offer new services to keep us and companies like us content and competitive in today's market."<br/><br/>
	&ndash; Wasatch Transfer<br/>
	   Park City, UT
	</p>
			</div>
		</div>
		<div class="special-offers-asterisk">*Other fees and conditions may apply. <a href="http://www.centurylink.com/small-business/disclaimers/" onclick="window.open(this.href,'disclaimer','height=650,width=970,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank">View details.</a></div>
	</div>

<!--end container div-->
</div>

<?php include_once('../common/inc_cc/footer.php'); ?>
