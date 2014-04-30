<?php
$pagePhone = "877.868.6683";
if( $_GET['source']=="email" ) {
	$pagePhone = "866.872.0225";
} else if ( $_GET['source']=="display" ) {
	$pagePhone = "855.842.5326";
} else if ( $_GET['source']=="search" ){
	$pagePhone = "888.997.9378";
}

$io = array(
		'conversion_type'=>'SOHO-LQ',
		'sku'=>'CoreConnect',
		'order_code'=>'',
		'onetimecharge'=>'',
		'monthlycharge'=>''
		);
include_once('../../../util/soho-mailform-inc.php');
include_once('inc_new/head.php');

$footerLinks = array(
	"Home" => "http://www.centurylink.com/small-business/", 
	"About Us" => "http://www.centurylink.com/Pages/AboutUs/",
	"Careers" => "http://www.centurylink.com/Pages/AboutUs/CompanyInformation/Careers/index.jsp",
	"InvestorRelations" => "http://ir.centurylink.com/phoenix.zhtml?c=112635&p=irol-IRHome",
	"Media" => "http://news.centurylink.com/",
	"Legal" => "http://www.centurylink.com/Pages/AboutUs/Legal/",
	"Privacy" => "http://www.centurylink.com/Pages/AboutUs/Legal/PrivacyPolicy/",
	"SiteMap" => "http://www.centurylink.com/sitemap.html",
	"FindaStore" => "http://storelocator.centurylinkapps.com/",
	"ContactUs" => "https://www.centurylink.com/small-business/customer-support/"
	);
	
	
$omnitureVars = <<<OMNIVARS
eBiz_server="promotions.centurylink.com";
eBiz_pageName="ctl|smb|special_offers|lq|core_connect|$85_thankyou";
eBiz_channel=eBiz_evar41="Small Business";
eBiz_prop3=eBiz_evar24="unknown Legacy[company] New Customer Legacy[company] Existing Customer";
eBiz_prop20="promos";
eBiz_evar35=eBiz_prop24="ctl|smb|special_offers";
eBiz_evar53=eBiz_prop25="ctl|smb|special_offers|core_connect";
eBiz_evar54=eBiz_prop26="ctl|smb|special_offers|lq|core_connect|$85_thankyou";
eBiz_evar55=eBiz_prop27="ctl|smb|special_offers|lq|core_connect|$85_thankyou";
eBiz_evar48=eBiz_prop38="static_page";
eBiz_evar49=eBiz_prop39="static_page";
eBiz_evar56=eBiz_prop52="ctl";
OMNIVARS;

?>
<link type="text/css" href="styles.css" rel="stylesheet">
<!--
Start of DoubleClick Floodlight Tag: Please do not remove
Activity name of this tag: CTLSB - LQ $85 CoreConnect Confirmation Page
URL of the webpage where the tag is expected to be placed: https://promotions.centurylink.com/soho/lq/promos/core-connect-mc/thankyou.php?/
This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
Creation Date: 02/15/2013
-->
<iframe src="https://3490900.fls.doubleclick.net/activityi;src=3490900;type=confi440;cat=ctlsb271;qty=1;cost=[Revenue];ord=[OrderID]?" width="1" height="1" frameborder="0" style="display:none"></iframe>

<!-- End of DoubleClick Floodlight Tag: Please do not remove -->


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
			<div align="right"> 
				<div class="callCta">
					<span class="info_panel"><span class="sb_number"><span class="tt_pagePhone">Call <?php echo $pagePhone; ?></span></span></span>					
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
				<h1>SAVE ON THE MOST COMPLETE BUSINESS BUNDLE.</h1>
				<h2>CORE CONNECT&reg;</h2>
				<p>internet | voice | web hosting | email</p>
				<h6>4 Business Tools. 1 Price.</h6>
				<h3>CENTURYLINK CORE CONNECT - As low as $85 per month for 12 months with 36-month agreement*</h3>
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
			<h2>Core Connect gives your small business the edge.</h2>
			<p>Run your business at peak productivity with these powerful business tools:</p>
			<div id="coreConnectBundle">
				<div class="coreConnectList">
					<h2>High-Speed Business Internet</h2>
					<ul>
						<li>Consistently fast speeds starting at 10 Mbps</li>
						<li>Safe and secure data network</li>
						<li>Reliable Internet connections</li>
					</ul>
				</div>
				<div class="coreConnectList">
					<h2>Business Email</h2>
					<ul>
						<li>Microsoft<sup>&reg;</sup> Exchange email software</li>
						<li>5 Anti-Virus/Anti-Spam licenses</li>
						<li>Send &amp; receive faxes over email</li>
					</ul>
				</div>
				<div class="coreConnectList">
					<h2>Web Hosting and Design</h2>
					<ul>
						<li>Create or transfer your business website instantly</li>
						<li>10 pages of Web hosting with easy-to-use templates</li>
						<li>Free online profiles with top search engines</li>
						<li>10 GB online backup</li>
					</ul>
				</div>
				<div class="coreConnectList">
					<h2>Business Phone</h2>
					<ul>
						<li>Unlimited local and nationwide long distance calling</li>
						<li>11 calling features including voicemail</li>
					</ul>
				</div>
			</div>
			<h2>Use our tech support professionals as your IT department.</h2>
			<p>Whether it's setting up your email or working on your website, our Tech Support Team is ready to assist you with your digital challenges. Best of all, we're available anytime 24/7.</p>
			<div id="smilingBox">
				<h3>We help businesses like yours succeed. </h3>
				<p>"CenturyLink small business service has evolved with our company to offer new services to keep us, and companies like us, content and competitive in today's market."<br/><br/>
	&ndash; Wasatch Transfer<br/>
	   Park City, UT
	</p>
			</div>
		</div>
		<div class="special-offers-asterisk">*Other fees and conditions may apply. <a href="http://www.centurylink.com/small-business/disclaimers/" onclick="window.open(this.href,'disclaimer','height=650,width=970,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank">View details.</a></div>
	</div>

<div class="pathways">&nbsp;</div>
<!--end container div-->
</div>
<?php include_once('inc_new/foot.php'); ?>

</body>
</html>
