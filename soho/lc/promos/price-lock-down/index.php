<?php 
$pagePhone = "866.366.2585";
if( $_GET['source']=="display" && $_GET['zone']=="hc" ) {
	$pagePhone = "866.659.0350";
} else if ( $_GET['source']=="display" && $_GET['zone']=="mc" ){
	$pagePhone = "866.659.0350";
} else if ( $_GET['source']=="display" && $_GET['zone']=="lc" ){
	$pagePhone = "866.659.0350";
} else if ( $_GET['source']=="email" ) {
	$pagePhone = "866.400.9204";
} else if ( $_GET['source']=="search" ){
	$pagePhone = "866.212.8404";
} else if ( $_GET['source']=="display" ){
	$pagePhone = "866.659.0350";
}

$metaTitle = '<title>20Mbps for $20 Special Offer | Small-Medium Business | CenturyLink</title>';
$metaDescription = '<meta name="description" content="Lock down fast High-Speed Internet for $20 a month for 3 years from CenturyLink Small-Medium Business. Reliable service and low pricing." />';
$metaKeywords = '<meta name="keywords" content="CenturyLink Small Business, CenturyLink SMB, Phone and Internet, Business Solutions, Business Internet & Data, Enhanced Business Services, Business Phone, Business Mobile, business communication services, telecommunication solutions, networking, Business Bundles, business phone services, small business it, office services, price-lock, guarantee" />';
include_once('inc/head.php'); 
?>
<link type="text/css" href="styles.css" rel="stylesheet">
<?php

$omnitureVars = <<<OMNIVARS
eBiz_server="promotions.centurylink.com";
eBiz_pageName="ctl|smb|promos|special_offers|ctl_20_price_lock_lock_it_down";
eBiz_channel=eBiz_evar41="Small Business";
eBiz_prop3=eBiz_evar24="unknown Legacy[company] New Customer Legacy[company] Existing Customer";
eBiz_prop20="promos";
eBiz_evar35=eBiz_prop24="ctl|smb|promos";
eBiz_evar53=eBiz_prop25="ctl|smb|promos|special_offers";
eBiz_evar54=eBiz_prop26="ctl|smb|promos|special_offers";
eBiz_evar55=eBiz_prop27="ctl|smb|promos|special_offers|ctl_20_price_lock_lock_it_down";
eBiz_evar48=eBiz_prop38="static_page";
eBiz_evar49=eBiz_prop39="static_page";
eBiz_evar56=eBiz_prop52="ctl"
OMNIVARS;
?>

<div class="page_wrapper_top widepage">
	<div id="wrapper_top_sb">
		<div class="right_cat_blank">
			<div align="right"> 
				<span class="info_panel"> 
					 <span class="pagePhone">Call <?php echo $pagePhone; ?></span>
				</span> 
				<br />
			</div>
			<a href="http://www.centurylink.com/small-business" title="Century Link"> <img src="/soho/assets/images/ctl_bus_logo/ctl_bus_logo.png" alt="CenturyLink" title="CenturyLink" tabindex=1/ >
			</a>
		</div>
	</div>
	<div class="page_wrapper">
		<div class="special-offers-left no-green-bg">
			<p class="hover-tfn">Call <span class="phone"><?php echo $pagePhone; ?></span></p>
			<div class="headerBlock">
				<h1>High Speed Business Internet</h1>
				<h6>Supercharge your business</h6>
				<h2>up to 20mbs for $20 a month</h2>
				<p>when you bundle with Core Connect&reg;</p>
				<h3>Business experts are standing by, Call <span class="tt_pagePhone"><?php echo $pagePhone; ?></span></h3>
			</div>
			<div style="clear:both;"></div>
		</div>
	<div style="clear:both;"></div>
	
	<div class="wrapmain">
		<div id="main">
			<div id="lockInYourPrice">
				<h2>The speed you need at a price you can count on.</h2>
				<p>It’s inevitable, as your business grows, so do your data needs. The Core Connect bundle from CenturyLink delivers business-class High-Speed Internet at a price you can lock in for 3 years!</p>
				<img src="images/speed-chart.png" alt="CenturyLink speed chart" />
				<p>Act now to lock in up to 20 Mbps downloads and up to 5 Mbps uploads for just $20 a month for next three years. That’s High-Speed Internet with the power to run cloud apps, participate in Web conferences, and stream audio and video, all with virtually no lag or buffering. It’s one less thing to worry about.</p>
				<div style="clear:both;"></div>
			</div>
	
			<div class="lockItDownBox">
				<p class="green-big">Call <span class="phone"><?php echo $pagePhone; ?></span></p>
			</div>
			
			<div style="clear:both;"></div>
		</div><!--end main div-->
		
		
		<div id="mainR">
			<div class="padlockit">
				<img src="images/padlock2.png" alt="CenturyLink 3 years 1 price guaranteed" />
			</div>
		</div><!--end mainR div-->
		<div style="clear:both;"></div>
	</div>
	
	<div style="clear:both;"></div>
	<div class="modules">
		<div id="smilingBox">
				<h3>We help businesses like yours succeed. </h3>
				<p>"CenturyLink small business service has evolved with our company to offer new services to keep us and companies like us content and competitive in today's market."<br><br>
				– Wasatch Transfer<br>
				   Park City, UT
				</p>
			</div>
	
		<div id="underForm">
			<div class="corners outsideW cTop noLayoutTop">
				<span class="corner cLeft">   </span>
				<span class="corner cRight">   </span>
			</div>
			<h4>Switch with peace of mind</h4>
			<ul class="greenDot">
				<li><strong>FREE activation</strong> of online services from our professional support team</li>
				<li>24/7 tech support</li>
				<li>Security tools and backup</li>
			</ul>
			<div class="corners outsideW cBottom">
				<span class="corner cLeft">   </span>
				<span class="corner cRight">   </span>
			</div>
		</div>
	</div>
	
	
	<div style="clear:both;"></div>
	<div class="special-offers-asterisk">*Other fees and conditions may apply. <a href="https://www.centurylink.com/smallbusiness/disclaimers/index.html" onclick="window.open(this.href,'disclaimer','height=650,width=970,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank">View details.</a></div>

	<div id="pathways"></div>
	</div>

<!--end container div-->
</div>
<?php include_once('inc/footer.php'); ?>
