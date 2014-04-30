<?php
$pagePhone = "855.842.5345";
/*
if( $_GET['source']=="email" ) {
	$pagePhone = "866.794.8979";
} else if ( $_GET['source']=="display" ) {
	$pagePhone = "866.794.8979";
} else if ( $_GET['source']=="search" ){
	$pagePhone = "866.794.8979";
}
*/
$metaTitle = '<title>CenturyLink | High-Speed Internet | Special Offer For Small Business</title>';
$metaDescription = '<meta name="description" content="Make the switch to CenturyLink High-Speed Business Internet and get a $100 Visa® Gift Card." />';
$metaKeywords = '<meta name="keywords" content="CenturyLink Small Business, CenturyLink SMB, Phone and Internet, Business Solutions, Business Internet & Data, Enhanced Business Services, Business Phone, Business Mobile,  Business TV, business communication services, telecommunication solutions, networking, Business Bundles, business phone services, small business it, office services" />';
$customStyleInclude = './headerstyles.php';

$trackingBlock = <<<OMNIVARS
<script type="text/javascript">
eBiz_server="centurylink.com";
eBiz_pageName="smb|promos|hsi|lq|visa_card";
eBiz_channel=eBiz_evar41="Small Business";
eBiz_prop3=eBiz_evar24="";
eBiz_prop20="Small Business";
eBiz_evar35=eBiz_prop24="smb|promos";
eBiz_evar53=eBiz_prop25="smb|promos|hsi";
eBiz_evar54=eBiz_prop26="smb|promos|hsi|lq";
eBiz_evar55=eBiz_prop27="Null";
eBiz_evar48=eBiz_prop38="static_page";
eBiz_evar49=eBiz_prop39="static_page";
eBiz_evar56=eBiz_prop52="ctl";
</script>
OMNIVARS;

include_once('inc/head.php');
?>

<div id="callToSave">
  <h1 class="orange">Call Today! <span class="tt_pagePhone"><?php echo $pagePhone; ?></span></h1>
</div>
<div id="pageWrapper" class="ccSave ccTrustSave page_wrapper page_wrapper_top widepage internetLC">
  <div class="disclaimer">
    <div class="headerBlock make-the-switch">
      <h1>Make the switch to High Speed Internet and get a $100 Visa&reg; Gift Card!</h1>
      <h6>Order today to start saving!</h6>
      <h3>Call <?php echo $pagePhone; ?></h3>
      <h6>Mention Promo Code: GIFTCARD</h6>
    </div>
    <a href="https://promotions.centurylink.com/soho/lc/promos/visaoffer/disclaimer.html" class="header-disclaimer-link" onclick="window.open(this.href,'disclaimer','height=650,width=600,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank"> See Important Details </a> </div>
  <div class="grey-block">
    <h2 class="bold-grey" id="easy-to-switch">We make it easy to switch.</h2>
    <img class="iconImage" id="icon_tech_support" src="images/icon_tech_support.jpg" /> <img class="iconImage" id="icon_security_tools" src="images/icon_security_tools.jpg" /> <img class="iconImage" id="icon_satis_guarantee" src="images/icon_satis_guarantee.jpg" /><div style="clear:both;"></div></div>
  <div class="white-block">
    <h2 class="bold-grey-small">With premium business value-adds...</h2>
    <ul class="value-adds">
      <li>Blazing-fast upgrades up to 40 Mbps</li>
      <li>Private, direct connection to CenturyLink's consistently fast national network</li>
      <li>Dedicated tech support 24/7/365</li>
      <li>Hassle-free switching with easy setup and installation</li>
      <li>Online security tools, anti-virus, anti-spyware, pop-up blocker and more</li>
      <li>Free email accounts</li>
      <li class="last-child">30-Day Satisfaction Guarantee</li>
    </ul><div style="clear:both;"></div>
  </div>
  <div class="grey-block align-center">
    <h1 class="orange">Call <span class="tt_pagePhone"><?php echo $pagePhone; ?></span></h1>
    <p>Mention Promo Code: GIFTCARD</p>
  </div>
  <div class="special-offers-asterisk">*Other fees and conditions may apply. <a href="http://www.centurylink.com/small-business/disclaimers/" onclick="window.open(this.href,'disclaimer','height=650,width=970,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank">View details.</a></div>
  <div class="pathway"></div>
</div>

<!--end container div-->

<?php include_once('inc/footer.php'); ?>
