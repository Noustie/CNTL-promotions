<?php
// Include anything in Headerblock that you would like to be included in the header of the landing page.
// Meta tags, css files, js files, etc...
// This information is included right before the closing 'head' tag.
$headerInfo = <<<HEADERBLOCK
<title>CenturyLink | Offer-$14.95/mo High-Speed Internet Bundle. 1 Price. 1 Year.</title>
<META NAME ="DESCRIPTION" id="metaDescription" CONTENT="Now just $14.95/mo for 12 months gives you consistently fast Internet when bundling with qualifying home phone service. Check availability of CenturyLink service and Internet offer. Keep the same price for one year! Jump-start your Internet and save.">
<meta name="keywords" content="high speed internet bundle, internet offer, $14.95/mo high speed internet, CenturyLink Internet offer" />

<!-- SiteCatalyst code version: H.14.
Copyright 1997-2009 Omniture, Inc. More info available at
http://www.omniture.com -->
<script type="text/javascript">
	// COPY THIS SCRIPT TAG AND PASTE IT INTO YOUR <HEAD> TAG TO INCORPORATE THIS TRACKING.
	// ONCE THIS SCRIPT TAG IS IN THE <HEAD>, REPLACE THE APPROPRIATE VALUES.
	// var sAccount; // SET THE VALUE OF THIS VAR IF THE ACCOUNT IS NOT THE STANDARD ACCOUNT, EG FOR MOBILE PAGES.
	var sAddress = "";
	var pageName = "lq|rsd|product|emktg|1495_jumpstart|lq"; //s.pageName
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
	var eBiz_prop26 = "rsd|product|emktg|1495_jumpstart_lq";
	var eBiz_prop38 = "static_page";
	var eBiz_prop39 = "landing_page";
	var eBiz_prop52 = "";
	var eBiz_evar27 = "";
	var eBiz_evar48 = eBiz_prop38;
	var eBiz_evar49 = eBiz_prop39;
	var eBiz_evar53 = eBiz_prop24;
	var eBiz_evar54 = eBiz_prop25;
	var eBiz_evar55 = eBiz_prop26;
	var eBiz_evar56 = eBiz_prop52;
</script>
<!--/DO NOT REMOVE/-->
<!-- End SiteCatalyst code version: H.14. -->
HEADERBLOCK;

include('../includes/header.php');

$phoneNumber = "1.877.417.3974";
?>

<!-- Ignition Tracking code -->
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

<!-- Scripts for Click to Chat Functionality -->

		<script src="//shop.centurylink.com/global/includes/c2c/residential/mtagconfig.js"></script>
		<script type="text/javascript">
			var createBundlesCTCButton = function(name){
				if( typeof(lpMTagConfig.dynButton)!="undefined") {
					lpMTagConfig.dynButton[lpMTagConfig.dynButton.length] = {'name':name,'pid':name};
				}
			}
			$(document).ready(function () {
				createBundlesCTCButton( "chat-residential-english-triple" );
			});
		</script>

		<link href="/static/Styles/tabsGreen.css" rel="stylesheet" type="text/css" />
		<style type="text/css">
			a, a:focus, a img { outline: none; border: 0 none; }
			.tabin { display:none; }
			#pureWrapper { width:922px; height:auto; margin: 0 auto; position:relative; text-align: left; font-size: 12px; background-color: #FFF; clear: both; overflow: hidden; }
			#offerWrap { border-left: 1px solid #CCC; border-right: 1px solid #CCC; margin-bottom: 0px; padding: 10px 0 0 0; }
			#headerCont { width: 100%; margin: 0; padding: 0; }
			#tabNavCont { width: 100%; height: 33px; margin: 0; position:relative; top:0px; z-index: 1000; background-color: transparent; }
			#tabnav { width: auto; padding: 0px; margin: 0px; }
			#tabnav li { float: left; list-style:none; }
			#tabnav li a { display: block; text-align: center; font-weight:bold; }
			#tabCont {
				display:block;
				background-color: #FFF;
				margin: 0;
				padding: 1px 0 0 0;
				clear: both;
				position: relative;
				z-index: 10;
				border-right: 1px solid #CCC;
				border-top: 0 none;
				border-bottom: 1px solid #CCC;
				border-left: 1px solid #CCC;
				background-image: url("../common/images/pixelLine.gif");
				background-repeat: repeat-x;
				background-position: left top;
				width: auto;
				top: -1px;
			}
			#tabCont .tabin { padding: 0 20px 0 40px; clear:none; }
			.tabContent { padding: 40px 0 0 0; }
			#tabCont .tabcorner { position: relative; right: -1px; float: right; z-index: 1000; top: -1px; background-color:#E4E4E4; height:10px; width:10px; font-size: 1px; line-height: 1px; }
			#tabCont .tabcorner.leftcorner { display: none; }
			#tabCont .active { background-color: #FFF; margin: 0; display: block; clear:both; }
			#tabCont .tabContent .tabcopy { height: 320px; width: 100%; }
			#offerdetails { position:relative; top:0px; margin: 0; padding: 0; width: 635px; float: right; right: 15px;}
			.tabcopy h2 { font-size: 20px; color:#FF6319; margin-bottom: 15px; }
			.tabcopy h3 { font-size: 20px; color:#00853F; padding:50px 0 0 220px; margin-bottom: 0; }
			ul { margin:0; padding: 0 0 0 15px; }
			.tabbottom { clear: both; height: 10px; position: relative; top: -2px; z-index: 1000; width: 100%; background-image: url("../common/images/pixelLine.gif"); background-repeat: repeat-x; background-position: left bottom; background-color: #FFF; }
			.contbottom { clear: both; z-index: 1000; position:relative; height: 10px; display: block; border: 0 none; width: 100%; right:0 !important; right: -1px; }
			.cornerBtmRight { display: block; width: 10px; height:10px; float:right; text-align:right; margin:0; padding:0; background-color: #FFF; }
			.cornerBtmLeft { display: block; width: 10px; height:10px; float:left; text-align:left; margin:0; padding:0; background-color: #FFF; }
			.tabbottom .cornerBtmRight, .tabbottom .cornerBtmLeft { background-color: #EFEFEF; }

			/* Tab CSS -- Modified from greenTabs.css*/
			#content .greenTabs .tabs li { background-image: url("../common/images/tabRightGreenTrans.gif"); background-repeat: no-repeat; background-position: right 2px; padding: 0 5px 0 0; margin: 0 2px 0 0; display: block; }
			#content .greenTabs .tabs a { background-image: url("../common/images/tabLeftGreenTrans.gif"); background-position: left 2px; color: #FFFFFF; background-repeat: no-repeat; padding: 10px 20px 8px 27px; background-color: transparent; }
			#content .greenTabs ul.tabs li.active { margin: 1px 2px 0 0; background-image: url("../common/images/bodyTabActiveRight.gif"); background-repeat: no-repeat; background-position: right top; background-color: transparent; }
			#content .greenTabs ul.tabs li.active a { color: #000; background-image: url("../common/images/bodyTabActiveLeft.gif"); background-repeat: no-repeat; background-position: left top; background-color: transparent; }

			/****  BOTTOM  ****/
			#bottomInfo { overflow: hidden; clear: both; width: 100%; padding: 0; margin: 0; }
			#bottomInfo #location { float: left; width: 65%; font-weight: bold; }
			#bottomInfo #location h2 { font-size: 20px; }
			#logos { float: right; width: 30%; }
			.disclaimer { display:block; clear: both; }
			#footcontent h2 { padding: 20px 30px 0px; color: #000; font-size: 19px; }
			#footcontent .storeList { text-align: left; float: left; list-style: none; margin: 0px; padding: 10px 50px 0px 30px; line-height: 1.8em; }
			#footcontent .rightfootCol.withOrderBtn h2 { padding: 20px 0 0 0;  }
			#pureWrapper #offerWrap { margin: 0 0 0 0; }
			#pureWrapper .contbottom { background-color: #EBEBEB; background-image: url("../common/images/offerBG.gif"); background-repeat: repeat-x; background-position: left bottom; }
			#pureWrapper .messageBG { background-color: #FFF; background-repeat: repeat-x; background-position: left bottom; border-bottom: 0 none; position:relative; overflow: hidden; }
			#offerdetails .imgBlock { margin-top:0 !important; }
			#footcontent { position:relative; top: 10px; }
			#footcontent .storeList { float:left; left:30px; line-height:1.8em; list-style:none outside none; margin:0; padding:0; position:relative; text-align:left; width:38%; }
			#footerBlock { height: 9em; }

			/* general classes */
			.rightfootCol { position: absolute; top: 0px; right: 0px; }
			.rightfootCol.withOrderBtn { padding: 0 140px 0 40px; border-left: 1px solid #999 }
			.tabcopy p { line-height:1.4em !important; margin-bottom: 0; }
			.imgCopyBlock p { line-height: 1.2em !important; }
			.bulletList li { list-style-type: disc; margin: 0; padding: 15px 0 0 0; }
			.checkList li { background-image: url("../common/images/checkbox.gif"); background-repeat: no-repeat; background-position: left top; list-style-type: none; display: block; margin: 0px; padding: 0 0 10px 20px; }
			.checkList { margin: 0px; padding: 0px; }
			.checkList strong { font-size: 14px; }
			.imgFloat { display:block; clear:both; }
			.imgFloat img { display: block; float:left; padding:20px 30px; }
			.imgFloat .copyTop { padding: 30px 0 0 0; }
			.hideTxt { clear: both; z-index: 1; float: left; position: absolute; top: 0px; text-indent:-9999px }
			.clearing { clear: both; line-height:0; font-size:0; }
			.disclaimer { clear: both; padding: 20px 0 30px 0; }

			/* rail styles */
			#leftRail { float: left; position: relative; }
			.railAdjust { position:absolute; top:25px; }
			.cropHeader { overflow:hidden; height:313px; border-bottom:1px solid #CCC; display:block; }

			/****  CSS FOR USERS W/O JAVASCRIPT ****/
			#flashheader { line-height:0; }
			.nojs .jsmsg { display:block; padding: 10px; color:#FFF; font-weight: normal; font-size: 12px; }
			.nojs #tabCont .tabcorner.leftcorner { display: block; left: -1px; float:left; }
			.nojs #tabCont .tabContent .tabcopy { height: auto; }
			.nojs #tabNavCont { display: none; }
			.nojs #tabCont .tabin { display: block; }
			#callToSave { color: #333; text-align: right; clear: both; position: relative; top: -20px; }
			#callToSave h1 { font-size: 22px; color: #333; }
			.contbottom .cornerBtmRight { text-align: left; width: 10px; }

			/* TAB Modifications */
			.tabin { background-attachment:scroll; background-position: left top; background-repeat: no-repeat; background-color: transparent; }
			.tabBtn a { text-transform: uppercase; }
			.speed {background-image: url('images/tabimg_speed.jpg');}
			.perform {background-image: url('images/tabimg_perform.jpg');}
			.save  {background-image: url('images/tabimg_save.jpg');}
			.tabin .checkList { padding: 20px 0 70px 220px; }

			.flashheader { position: relative; display: block; }
			.headerBanner { position: relative; display: block; }
			.headCta { position: absolute; display: block; font-size: 16px; color: #FFF; top: 135px; left: 620px; }
			.headCta h3 { display: block; font-size: 18px; color: #FFF; font-weight: normal; line-height: 1.4; margin: 0; }
			.headCta h2 { display: block; font-size: 26px; color: #FFF; font-weight: normal; line-height: 1.4; margin: 0; }
			.headCta strong {font-weight: bold; }
			.headCta .chatBtn { border-radius: 6px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5); clear: both; float: left; overflow: hidden; position: relative; }
			.railCta { width: 100%; display: block; margin: 0; padding: 0; font-size: 26px; font-weight: normal; line-height: 1.4; text-align: center;}
			.pathways { }
			.pathways img { display: block; margin: 0; padding: 0; }
		</style>

		<div class="nojs">
			<div id="pureWrapper">
				<div id="headerCont">
					<div id="flashheader">
						<img class="headerBanner" src="images/headerImg.jpg" alt="Jump start your Internet and save. | CenturyLink&trade; High-Speed Internet is $14.95 a month when you bundle.* 1 Year. 1 Price." />
						<div class="headCta">
							<h3>To get this offer</h3>
							<h2>Call <strong><?php echo $phoneNumber; ?></strong> or</h2>
							<div id="chat-residential-english-triple" class="chatBtn"></div>
						</div>
					</div>
				</div>
				<div id="offerWrap" class="message messageBG">
					<div id="leftRail">
						<div class="railAdjust">
							<img src="images/cta.gif" alt="Unstoppable | Internet that&rsquo;s consistently fast all day, every day. | CenturyLink&trade; High-Speed Internet is $14.95 a month when you bundle.* 1 Year. 1 Price." />
							<h2 class="railCta">Call <strong><?php echo $phoneNumber; ?></strong></h2>
						</div>
					</div>
					<div id="offerdetails">
						<div id="tabNavCont" class="details greenTabs">
							<ul id="tabnav" class="tabs">
								<li id="offerTabOne" class="offerTabOneTab tabBtn active"><a href="#offerTabOne">Speed</a></li>
								<li id="offerTabTwo" class="offerTabTwoTab tabBtn"><a href="#offerTabTwo">Performance</a></li>
								<li id="offerTabThree" class="offerTabThreeTab tabBtn"><a href="#offerTabThree">Savings</a></li>
							</ul>
						</div>
						<div id="tabCont">
							<div class="corners insideW fillBgW cTop"> <span class="corner cLeft jsHide"> <img src="../common/images/blank1.gif" alt="" align="top" height="10" width="10" /> </span> <span class="corner cRight"> <img src="../common/images/blank1.gif" alt="" align="top" height="10" width="10" /> </span> </div>
							<div id="offerTabOneTab" class="offerTabOneTab speed tabin active">
								<div class="tabContent">
									<div class="tabcopy">
										<h3>Break the Internet speed limit.</h3>
										<ul class="checkList">
											<li>Connection speeds up to 7 Mbps</li>
											<li>Consistently fast all day, every day</li>
											<li>Private, direct connection to our national network</li>
											<li>A network designed to give you consistent speed</li>
										</ul>
										<p>Yep, it&rsquo;s that fast. With speeds up to 7 Mbps available, you can download that game everyone&rsquo;s playing in no time. CenturyLink<sup>&reg;</sup> High-Speed Internet has the supersonic speed you need to surf, stream, chat and download without slowing down.</p>
									</div>
								</div>
							</div>
							<div id="offerTabTwoTab" class="offerTabTwoTab perform tabin">
								<div class="tabContent">
									<div class="tabcopy">
										<h3>Accelerate your Internet experience.</h3>
										<ul class="checkList">
											<li>Backed by our 30-day Satisfaction Guarantee</li>
											<li>Relax, you get 24x7 technical customer support</li>
											<li>And feel safe with a suite of online backup and Anti-virus protection with internet security services options</li>
										</ul>
										<br />
										<p>With CenturyLink, you get a private, direct connection between your computer and our network. So you get consistent speeds every time you log on, whether you&rsquo;re streaming a video or playing online games.</p>
									</div>
								</div>
							</div>
							<div id="offerTabThreeTab" class="offerTabThreeTab save tabin">
								<div class="tabContent">
									<div class="tabcopy">
										<h3>Gear up for some big-time savings.</h3>
										<ul class="checkList">
											<li>1 Year. 1 Price.</li>
											<li>The price you sign up for is the price you pay</li>
											<li>No surprises, no sticker shock</li>
											<li>Consistent speed at a consistent price</li>
										</ul>
										<p>With CenturyLink<sup>&reg;</sup> High-Speed Internet, the price you sign up for is the price you pay &ndash; just $14.95 a month for 1 year. No surprises. No gimmicks. So what are you waiting for? Get High-Speed Internet today and keep your money where it belongs &ndash; in your wallet.</p>
									</div>
								</div>
							</div>
							<div class="corners insideW fillBgW cBottom"> <span class="corner cLeft"> <img src="../common/images/blank1.gif" alt="" align="top" height="10" width="10" /> </span> <span class="corner cRight"> <img src="../common/images/blank1.gif" alt="" align="top" height="10" width="10" /> </span> </div>
						</div>
					</div>
				</div>
				<div class="pathways"><img src="images/pathways.gif" alt="" /></div>
				<div class="disclaimer">*Other fees and conditions may apply. <a onclick="window.open(this.href,'disclaimer','height=500,width=800,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank" href="./disclaimer.php">View Details.</a></div>
			</div>
		</div>
		<script type="text/javascript">
			// Functions are located in ../common/js/marketingLanding.js
			$(document).ready( function () {
				pageInit();
			});
        	$('.chatBtn a').live('click',  function (event) {
				var _this = this;
				if( !!s_account ) {
				   var s=s_gi(s_account);
				   s.templtv=s.linkTrackVars;
				   s.templte=s.linkTrackEvents;
				   s.manageVars('clearVars');
				   s.linkTrackVars='eVar30';
				   s.eVar30='ctl|rsd|product|emktg|1495_jumpstart|c2c';
				   s.tl(_this,'o','ctl|rsd|product|emktg|1495_jumpstart|c2c');
				   if(s.templtv) s.linkTrackVars=s.templtv;
				   if(s.templte) s.linkTrackEvents=s.templte;
				}
			});
		</script>
		<script type="text/javascript" src="../common/js/marketingLanding.js"></script>
<?php include('../includes/footer.php'); ?>
