<?php
$pagePhone = "800.469.0882";
if( $_GET['source']=="email" ) {
	$pagePhone = "866.872.0225";
} else if ( $_GET['source']=="display" ) {
	$pagePhone = "855.842.5326";
} else if ( $_GET['source']=="search" ){
	$pagePhone = "888.997.9378";
}

include_once('inc_new/head.php');
$addEmailField = true;
$footerLinks = array(
	"Home" => "http://www.centurylink.com/small-business/", 
	"AboutUs" => "http://www.centurylink.com/Pages/AboutUs/",
	"Careers" => "http://www.centurylink.com/Pages/AboutUs/CompanyInformation/Careers/index.jsp",
	"InvestorRelations" => "http://ir.centurylink.com/CorporateProfile.aspx?iid=4057179",
	"Media" => "http://news.centurylink.com/",
	"Legal" => "http://www.centurylink.com/Pages/AboutUs/Legal/",
	"Privacy" => "http://www.centurylink.com/Pages/AboutUs/Legal/PrivacyPolicy/",
	"SiteMap" => "http://www.centurylink.com/sitemap.html",
	"FindaStore" => "http://storelocator.centurylinkapps.com/",
	"ContactUs" => "https://www.centurylink.com/small-business/customer-support/"
	);
	
$omnitureVars = <<<OMNIVARS
eBiz_server="centurylink.com";
eBiz_pageName="smb|products|coreconnect|qwest|landing";
eBiz_channel=eBiz_evar41="Small Business";
eBiz_prop3=eBiz_evar24="unknown Legacy[company] New Customer Legacy[company] Existing Customer";
eBiz_prop20="Small Business";
eBiz_evar35=eBiz_prop24="smb|promos";
eBiz_evar53=eBiz_prop25="ctl|smb|special_offers|core_connect";
eBiz_evar54=eBiz_prop26="smb|promos|coreconnect";
eBiz_evar55=eBiz_prop27="smb|promos|coreconnect|qwest";
eBiz_evar48=eBiz_prop38="static_page";
eBiz_evar49=eBiz_prop39="static_page";
eBiz_evar56=eBiz_prop52="ctl";
OMNIVARS;

?>

<div class="page_wrapper_top widepage">
	<div id="wrapper_top_sb">
		<div class="right_cat_blank">
			<div align="right"> 
				<div class="topPhone">Call <?php echo $pagePhone; ?>				
				</div>
			</div>
			<a href="http://www.centurylink.com/small-business" title="Century Link" target="_blank"> <img src="/soho/assets/images/ctl_bus_logo/ctl_bus_logo.png" alt="CenturyLink" title="CenturyLink" tabindex=1/ >
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
		<div class="special-offers-form tfn-cta">
			<div class="cta">
				<div class="ctaTop">
					<div class="ctaMid">
						<div class="ctaBody">
							<h2 class="accent-cta">Bundle and Save.</h2>
							<h3 class="accent-phone"><span>Call</span> <?php echo $pagePhone; ?></h3> 
							<h4>Switch with peace of mind</h4>
							<ul class="orange-check">
								<li><strong>FREE activation</strong> of online services from our professional support team</li>
								<li>24/7 live tech support</li>
								<li>Security tools and backup</li>
							</ul>	


<!-- 							<h2 class="accentForm" style="font-size:14px;">Speak with a Business Expert.</h2>
							<p>Fill out the form below and a Business Expert will call you to discuss how 
we can help.</p>
							<p class="smaller">(All fields required unless otherwise stated.)</p>
<?php
//renderForm( "thankyou.php", "LQ", "Core Connect", "85", "images/btn_talkToExpert.jpg", "", $addEmailField );
?>
							<p>Prefer to call us? <br><strong><?php //echo $pagePhone; ?></strong></p> -->
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
<!-- 			<div class="corners outsideW cBottom">
				<span class="corner cLeft">   </span>
				<span class="corner cRight">   </span>
			</div> -->
		</div>
<!-- 		<div id="underForm">
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
		</div> -->
		<div id="main">
			<h2>A CenturyLink Small Business Bundle gives your business the edge.</h2>
			<p>Save up to 30% when you bundle your essential business services:</p>
			<div id="coreConnectBundle">
				<div class="coreConnectList">
					<h2>High-Speed Business Internet</h2>
					<ul>
						<li>Includes consistently fast speeds up to 20 Mbps</li>
						<li>Speed upgrades available as high as 100 Mbps</li>
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
						<li>15 calling features including voicemail</li>
					</ul>
				</div>
			</div>
			<h2>Use our tech support professionals as your IT department.</h2>
			<p>Whether it's setting up your email or working on your website, our Tech Support Team is ready to assist you with your digital challenges. Best of all, we're available anytime, 24/7.</p>
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
