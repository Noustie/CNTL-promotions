<?php
$domain = $_SERVER['SERVER_NAME'];
// Include anything in Headerblock that you would like to be included in the header of the landing page.
// Meta tags, css files, js files, etc...
// This information is included right before the closing 'head' tag.
$headerInfo = <<<HEADERBLOCK
<title>CenturyLink | Bundle Pure Internet with DIRECTV or Verizon &ndash; with no phone line</title>
<meta name="description" id="metaDescription" content="Get pure Internet service for only 29.95/mo when you bundle with DIRECTV service or Verizon Wireless. No phone line needed to get speeds up to 10 Mbps with CenturyLink's bundle offer. Bundle TV and mobile service for best deal. See latest offer. ">
<meta name="keywords" id="metaKeywords" content="centurylink, bundle pure internet, pure internet bundle, bundle DirecTV service, bundle Verizon Wireless service, 29.95/mo, no phone">

<!--Meta specifically for facebook sharing-->
<meta property="og:title" content="Pure Broadband &ndash; no phone line required." />
<meta property="og:description" content="Save on Pure Broadband when you bundle with DIRECTV service or Verizon Wireless through CenturyLink." />
<meta property="og:type" content="website" />
<meta property="og:url" content="http://$domain/marketingLanding/puredeal/index.php" />
<meta property="og:image" content="http://$domain/marketingLanding/common/images/logoCenturyLink.gif" />
<meta property="og:site_name" content="" />
<!--end Facebook share meta-->
<style type="text/css">
.ir {
	display: block;
	text-indent: -9999px;
}
.headerImg {
	width: 925px;
	height: 332px;
	background: #FFF url("images/headerImg.jpg") no-repeat left top;
	position: relative;
}
.message {
	clear: both;
	padding: 0 10px;
}
.message h2 {
	font-size: 22px;
	margin: 0;
}
.message h3 {
	font-size: 16px;
	color: #000;
	font-weight: normal;
}
.message hr {
	height: 0;
	border-top: 1px solid #D7D7D7;
	border-right: 0 none;
	border-bottom: 0 none;
	border-left: 0 none;
	margin: 15px 0;
	display: block;
}
.message sup, .message sub {
	line-height: 0;
	font-size: 70%;
	vertical-align: baseline;
	position: relative;
	top: -0.5em;
}
.message sub {
	top: 0.1em;
}
.message .msgHeadline {
	padding: 20px 0;
	text-align: center;
}
.offerSelectWrap {
	margin: 0 290px 0 0;
}
.offerSelectWrap .bundleDivider {
	background-color: #D0D0D0;
	border-top: 1px solid #777;
	padding: 10px;
	color: #666;
	margin: 20px 0;
	font-size: 14px;
}
.productOffer {
	margin: 0 0 0 30px;
}
.productOffer .description {
	margin: 10px 0 0 0;
}
.productOffer ul, .productOffer p, .productOffer small {
	color: #666;
}
.productOffer ul {
	margin: 10px 0 0 0;
}
.productOffer li {
	margin: 0 0 10px 0;
}
.productOffer .detailsLink {
	margin: 10px 0 0 0;
}
.productOffer small {
	display: block;
}
.nojs .details {
	display: block;
}
.rightRail {
	float: right;
	width: 255px;
	background: transparent url("images/greenBar-rpt.gif") repeat left top;
	height: 550px;
}
.nojs .rightRail {
	height: auto;
}
.rightRail .railWrap {
	background: transparent url("images/greenBar-top.gif") no-repeat left top;
	color: #FFF;
	position:relative;
	overflow: hidden;
	height: 100%;
}
.rightRail .packageCTA {
	position:absolute;
	top: 25px;
	left: 15px;
	width: 185px;
}
.rightRail .packageCTA li {
	margin: 0 0 7px 0;
}
.rightRail .packageCTA .highlight {
	color: 	#FDC82F;
}
.nojs .rightRail .packageCTA {
	position: relative;
}
.rightRail .addMoreCta {
	padding: 0 0 10px 0;
	margin: 0 0 10px 0;
	border-bottom: 1px solid #FFF;
	font-size: 16px;
}
#pure_rail .addMoreCta {
	border-bottom: 0 none;
}
.rightRail .railWrap h3, .rightRail .railWrap h4 {
	font-size: 16px;
	color: #FFF;
	font-weight: bold;
}
.rightRail .railWrap h4 {
	padding: 15px 0 0 0;
}
.rightRail .railWrap h4 em {
	font-size: 20px;
	color: #FDC82F;
	font-style: normal;
}
.rightRail .railWrap .selected {
	font-size: 16px;
	color: #FFF;
}
.rightRail .railPad {
	overflow: hidden;
	margin-left: 25px;
	position: relative;
	height: 100%;
}
.bundles_check {
	float: left;
	margin: 5px 0 0 0;
}
#footerBlock #footcontent #shareBtm {
	font-size: 14px;
}
#footcontent h2 strong {
	color: #00853F;
}
#footcontent h2 {
	line-height: 26px;
}
#footcontent h2 img {
	vertical-align: top;
}
#shareBtm img {
	vertical-align: middle;
}
.headerImg .cta {
	position: absolute;
	top: 208px;
	left: 285px;
}
.verizonCTA {
	font-size: 20px;
	color: #FFF;
	font-weight: bold;
}
.verizonCTA strong {
	font-size: 25px;
	color: #ffcc33;
	font-weight: 700;
}
.packageCTA .verizonCTA strong {
	font-size: 20px
}
#footcontent .verizonCTA {
	font-size: 22px;
	color: #000;
	font-weight: normal;
}
#footcontent .verizonCTA strong {
	font-size: 25px;
	color: #00853F;
	font-weight: 700;
}
.verizonCTA { display: none; }
.verizonSelected .verizonCTA { display: block; }
.nonVerizonCTA { display: block; }
.verizonSelected .nonVerizonCTA { display: none; }
.dtvPromoLine { color: #00853F; }
</style>
<!-- SiteCatalyst code version: H.14.
Copyright 1997-2009 Omniture, Inc. More info available at
http://www.omniture.com -->
<script type="text/javascript">
	// COPY THIS SCRIPT TAG AND PASTE IT INTO YOUR <HEAD> TAG TO INCORPORATE THIS TRACKING.
	// ONCE THIS SCRIPT TAG IS IN THE <HEAD>, REPLACE THE APPROPRIATE VALUES.
	// var sAccount; // SET THE VALUE OF THIS VAR IF THE ACCOUNT IS NOT THE STANDARD ACCOUNT, EG FOR MOBILE PAGES.
	var pageName = "ctl|rsd|product|emktg|2995_byw|lctl"; //s.pageName
	var pageType = ""; //s.pageType
	var errorType = ""; //s.prop2
	var accountEvents = ""; //eVar1
	var serviceEvents = ""; //eVar2
	var pCategory = ""; //eVar3
	var unisysEvent = ""; //eVar4
	var orderType = ""; //eVar7
	var zipAvail = ""; //eVar8
	var phoneAvail = ""; //eVar9
	var addressAvail = ""; //eVar10
	var respMsg = ""; //eVar11
	var availType = ""; //eVar12
	var sEvents = ""; //s.events
	var sProducts = ""; //s.products
	var orderNum = ""; //s.purchaseID
	var totalOrderPrice = ""; //Doubleclick
	var eBiz_server = "promotions.centurylink.com"; // s.server
	var eBiz_channel = "rsd"; // s.channel, s.eVar41
	var eBiz_prop20 = "";
	var eBiz_prop24 = "rsd|product";
	var eBiz_prop25 = "rsd|product|emktg";
	var eBiz_prop26 = "rsd|product|emktg|2995_byw_lctl";
	var eBiz_prop38 = "static_page";
	var eBiz_prop39 = "landing_page";
	var eBiz_prop52 = "";
	var eBiz_evar27 = "";
	var eBiz_evar48 = "static_page";
	var eBiz_evar49 = "landing_page";
	var eBiz_evar53 = "rsd|product";
	var eBiz_evar54 = "rsd|product|emktg";
	var eBiz_evar55 = "rsd|product|emktg|2995_byw_lctl";
	var eBiz_evar56 = "";
</script>
<!--/DO NOT REMOVE/-->
<!-- End SiteCatalyst code version: H.14. -->
HEADERBLOCK;

include('../includes/header.php');
?>
		<div class="nojs">
			<div id="pureWrapper">
				<div id="headerCont">
					<div class="headerImg">
						<h1 class="ir">9x faster. our lowest price yet. Pure Broadband<sup>&trade;</sup> from CenturyLink. save on Pure Broadband when you bundle with DIRECTV&reg; service or Verizon Wireless through CenturyLink. | Pure Broadband, up to 10 Mbps for $29.95 a month for 12 months*</h1>
						<a class="nonVerizonCTA cta order" href="https://www.centurylink.com/shop/pureBroadbandInquiryInput.html" target="_blank"><img src="images/btn-headerCta.gif" alt="Click here to order now." /></a>
						<h3 class="verizonCTA cta">Call <br /><strong>1.866.781.0853</strong></h3>
					</div>
				</div>
				<div class="message">
					<h2 class="msgHeadline">Get a great price on Pure Broadband when you build a CenturyLink savings bundle.</h2>
					<hr />
					<div class="rightRail">
						<div class="railWrap">
							<div class="railPad">
								<div id="pure_rail" class="packageCTA">
									<p class="addMoreCta">Select additional services to build a bundle and get Pure Broadband for just $29.95 a month for 12 months.</p>
								</div>
								<div id="dtv_bundle_rail" class="packageCTA">
									<p class="selected">You&rsquo;ve Selected:</p>
									<h3>Double Savings Bundle</h3>
									<br />
									<ul>
										<li>Pure Broadband Internet for $29.95/month</li>
										<li>DIRECTV<sup>&reg;</sup> ENTERTAINMENT Package</li>
									</ul>
									<h4>Order your bundle now! <br />
										<br />
										<a href="https://www.centurylink.com/shop/pureBroadbandInquiryInput.html" target="_blank"><img src="images/rightrail-orderNowBtn.gif" alt="Order Now" /></a> </h4>
								</div>
								<div id="verizon_bundle_rail" class="packageCTA">
									<p class="selected">You&rsquo;ve Selected:</p>
									<h3>Double Savings Bundle</h3>
									<br />
									<ul>
										<li>Pure Broadband Internet for $29.95/month</li>
										<li>Verizon Wireless</li>
									</ul>
									<h4 class="verizonCTA cta">Call <strong>1.866.781.0853</strong></h4>
								</div>
								<div id="triple_bundle_rail" class="packageCTA">
									<p class="selected">You&rsquo;ve Selected:</p>
									<h3>Triple Savings Bundle</h3>
									<br />
									<ul>
										<li>Pure Broadband Internet for $29.95/month</li>
										<li>DIRECTV<sup>&reg;</sup> ENTERTAINMENT Package</li>
										<li>Verizon Wireless</li>
										<li>$150 Reward Card</li>
									</ul>
									<h4 class="verizonCTA cta">Call <strong>1.866.781.0853</strong></h4>
								</div>
							</div>
						</div>
					</div>
					<div class="offerSelectWrap"> <img src="images/mainCheck.gif" class="bundles_check" />
						<div class="productOffer">
							<h2>Pure Broadband</h2>
							<h3>All High-Speed Internet. No phone line required.</h3>
							<p class="description">Pure Broadband is everything you want from an internet connection &ndash; with no phone line required. It&rsquo;s up to <nobr>10 Mbps</NOBR> of the speed you need to download, upload, video chat and game online without slowing down.</p>
							<div id="pureDetails" class="details">
								<ul>
									<li>9x faster than before at our lowest price yet</li>
									<li>Private, direct connection to our national network</li>
									<li>A network designed to give you consistent speed every time you log on</li>
									<li>Play online games or watch the latest HD movies in a flash</li>
								</ul>
							</div>
							<p class="detailsLink"><a href="#pureDetails">+ Details</a></p>
						</div>
						<div class="bundleDivider">Choose up to two additional services.</div>
						<input type="checkbox" id="dtv" value="dtv" class="bundles_check" />
						<div class="productOffer">
							<h2>DIRECTV<sup>&reg;</sup> service</h2>
							<h3>Add the DIRECTV<sup>&reg;</sup> ENTERTAINMENT package through CenturyLink to your Pure bundle for an additional $29.99/mo. a month for 12 months* after instant savings with 24-month DIRECTV agreement**.</h3>
						<p class="description">More movies. More music. More shows. When you bundle DIRECTV<sup>&reg;</sup> service with Pure Broadband, you get big-time savings – and big-time entertainment. Plus, every channel offers 100% digital picture and sound.</p>
							<div id="directvDetails" class="details">
								<ul>
									<li>Get 140+ digital channels</li>
									<li>3 FREE months of HBO<sup>&reg;</sup>, STARZ<sup>&reg;</sup>, SHOWTIME<sup>&reg;</sup> &amp; Cinemax<sup>&reg;</sup></li>
									<li>4 FREE Upgrades : Genie<sup>&trade;</sup> - DIRECTV's best HD DVR ever!<br/>
<span style="font-size:10px;line-height:12px;">Additional equipment required. Additional &amp; Advanced receiver fees apply. Minimum 2-room set-up required for free Genie upgrade offer.</span></li>
								</ul>
								<small>Offers end 7/31/13. Credit card required (except in PA). New approved customers only (lease required). $19.95 Handling &amp; Delivery fee may apply. Applicable use tax adjustment may apply on the retail value of the installation. Programming/pricing may vary in certain markets.</small>
							</div>
							<p class="detailsLink"><a href="#directvDetails">+ Details</a></p>
						</div>
						<hr />
						<input type="checkbox" id="verizon" value="verizon" class="bundles_check" />
						<div class="productOffer">
							<h2>Verizon Wireless</h2>
							<h3>Add Verizon Wireless service through CenturyLink to your bundle and save $360 in 1 year on Pure Broadband.</h3>
							<p class="description">More people trust Verizon Wireless service. Now, CenturyLink is an authorized Verizon Wireless service agent, so you can join the fastest 4G network in America with a new 2-year activation and data pak when you bundle with Pure.</p>
							<ul id="verizonDetails" class="details">
								<li class="dtvPromoLine">Add DIRECTV<sup>&reg;</sup> service through CenturyLink and Verizon Wireless service to your bundle and get a $150 Reward Card!</li>
								<li>Unlimited mobile to mobile calling to other Verizon customers</li>
								<li>Unlimited calling to the numbers you call most. anywhere in the U.S., anytime. choose any number on any network. even landlines.</li>
								<li>Download 20 photos in a minute and a song in less than 4 seconds!</li>
								<li>Get the Revolution&trade; by LG pre-loaded with Netflix and powered by Verizon 4G LTE for an unparalleled streaming experience. <small>With new 2-yr activation &amp; data pak. LTE is a trademark of ETSI.</small></li>
							</ul>
							<p class="detailsLink"><a href="#verizonDetails">+ Details</a></p>
						</div>
					</div>
				</div>
				<div id="footerBlock">
					<div id="footcontent">
						<h2 class="nonVerizonCTA">Start your bundle now! &nbsp; <a href="https://www.centurylink.com/shop/pureBroadbandInquiryInput.html" target="_blank" class="order"><img src="images/footer-orderNowBtn.gif" alt="Order Now" /></a></h2>
						<h2 class="verizonCTA">Call <strong>1.866.781.0853</strong></h2>
						<div class="rightfootCol">
							<h2 id="shareBtm"> Share CenturyLink:&nbsp;&nbsp; <a rel="ctl|rsd|emktg_micro|catalog|Bundles|Facebook" onclick="javascript:window.open(this.href,'Facebook','height=700,width=980,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank" href="http://www.facebook.com/sharer.php?u=http%3A%2F%2F<?php echo $domain; ?>%2FmarketingLanding%2Fpuredeal%2F"><img alt="Facebook" src="images/fbBtn.gif"></a> <a rel="ctl|rsd|emktg_micro|catalog|Bundles|Twitter" onclick="javascript:window.open(this.href,'Twitter','height=400,width=500,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank" href="http://twitter.com/share?url=http%3A%2F%2Fcenturylink.com%2Fpuredeal&amp;text=Save%20on%20Pure%20broadband%20when%20you%20bundle%20with%20DIRECTV%20service%20or%20Verizon%20Wireless."><img alt="Twitter" src="images/twitterBtn.gif"></a> </h2>
						</div>
					</div>
				</div>
				<div class="disclaimer" style="clear: both;">*Other fees and conditions may apply. <a href="./disclaimer.html" target="_blank" onclick="javascript:window.open(this.href,'disclaimer','height=600,width=800,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;">Click here for details.</a></div>
			</div>
		</div>
		<script type="text/javascript">
			var sAddress = '';
			$(document).ready( function () {
				$('.nojs').removeClass('nojs');

				$('.details').stop(true, true).hide();

				$('.detailsLink a').click( function (e) {
					$(this.hash).stop(true, true).slideToggle(200);
					if ( $(this).text() === '+ Details'  ) {
						$(this).text('- Details');
					} else {
						$(this).text('+ Details');
					}
					e.preventDefault();
				});

				// functionality for right rail
				// hide all but pure on load
				$(':checkbox:checked').attr('checked', false);
				var railActiveLeftPos = $('#pure_rail').position().left;
				$('#dtv_bundle_rail, #verizon_bundle_rail, #triple_bundle_rail').css( { left: -300 } );
				$('input.bundles_check').change(function(){
					var selected_box = [];
					$(':checkbox:checked').each(function(i){
						selected_box[i] = $(this).val();
					});
					$('.packageCTA').stop(true,true).animate( { left: 300 }, 100 );
					if (selected_box) {
						if (selected_box.length == 1 && selected_box[0] == 'dtv') {
							$('#pureWrapper').removeClass('verizonSelected');
							$('#dtv_bundle_rail').stop(true,true).css( { left: -300 } ).animate( { left: railActiveLeftPos }, 250 );
						} else if (selected_box.length == 1 && selected_box[0] == 'verizon') {
							$('#pureWrapper').addClass('verizonSelected');
							$('#verizon_bundle_rail').stop(true,true).css( { left: -300 } ).animate( { left: railActiveLeftPos }, 250 );
						} else if (selected_box.length == 2) {
							$('#pureWrapper').addClass('verizonSelected');
							$('#triple_bundle_rail').stop(true,true).css( { left: -300 } ).animate( { left: railActiveLeftPos }, 250 );
						} else {
							$('#pureWrapper').removeClass('verizonSelected');
							$('#pure_rail').stop(true,true).css( { left: -300 } ).animate( { left: railActiveLeftPos }, 250 );
						}
					}
				});
				$('a.order').live('click',  function (event) {
				var _this = this;
				if( !!s_account ) {
				   var s=s_gi(s_account);
				   s.templtv=s.linkTrackVars;
				   s.templte=s.linkTrackEvents;
				   s.manageVars('clearVars');
				   s.linkTrackVars='eVar30';
				   s.eVar30='ctl|rsd|product|emktg|2995_byw|order_button';
				   s.tl(_this,'o','ctl|rsd|product|emktg|2995_byw|order_button');
				   if(s.templtv) s.linkTrackVars=s.templtv;
				   if(s.templte) s.linkTrackEvents=s.templte;
				}
			});
			});
		</script>
<?php include('../includes/footer.php'); ?>
