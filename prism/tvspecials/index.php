<?php 
	$phone = "1.866.960.7089";
	$price = "$150";
	$bgimg = "images/ens-header.jpg";
	if(isset($_GET["m"])){
		if($_GET["m"]=="e"){
			$phone="866-960-7089";
			$price="$150";
			$bgimg = "images/ens-header.jpg";
			$bankdisclaimer = "Card issued by MetaBank™, Member FDIC, pursuant to a license from Visa U.S.A., Inc.";
			$bundle = "Bundle with Prism<sup>&trade;</sup> TV and receive a";
		} 
		if($_GET["m"]=="c"){
			$phone="800-960-2531";
			$price="$150";
			$bgimg = "images/cris-header.jpg";
			$bankdisclaimer = "Card issued by J.P. Morgan Chase Bank, N.A. pursuant to a license from Visa U.S.A. Inc.";
			$bundle = "Bundle with Prism<sup>&trade;</sup> TV and receive a";
		}
	}
 ?>
<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="description" content="Switch your TV service to CenturyLink Prism TV today and get a <?php echo $price; ?> prepaid card when you bundle. See offer!">
	<meta name="keywords" content="CenturyLink Prism TV, CenturyLink, Prism TV service, TV service, Prism TV, IPTV, digital TV, advanced TV, television, Prism TV service, Prism TV bundles, Prism TV packages, Prism Features, HD TV, Prism, Internet Protocol TV, TV, whole home DVR, dvr">
	<link rel="stylesheet" type="text/css" href="css/reset.css" />
	<link rel="stylesheet" type="text/css" href="css/fonts-min.css" />
	<link rel="stylesheet" type="text/css" href="css/colorbox.css" />
	<link rel="stylesheet" type="text/css" href="css/main.css" />
	
	<style type="text/css">
		#header {
			background: url(<?php echo $bgimg; ?>) center top no-repeat;
		}
	</style>
	
	<!-- SiteCatalyst code version: H.14.
	Copyright 1997-2009 Omniture, Inc. More info available at
	http://www.omniture.com -->
	<script type="text/javascript">
		var sAddress = ""; //s.address
		var pageName = "ctl|rsd|promos|special_offers|iptv|150card"; //s.pageName
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
		var eBiz_channel = "Shop"; // s.channel, s.eVar41
		var eBiz_prop20 = "promos";
		var eBiz_prop24 = "ctl|rsd|promos";
		var eBiz_prop25 = "ctl|rsd|promos|special_offers";
		var eBiz_prop26 = "ctl|rsd|promos|special_offers|iptv";
		var eBiz_prop27 = "ctl|rsd|promos|special_offers|iptv|150card";		
		var eBiz_prop38 = "static_page";
		var eBiz_prop39 = "static_page";
		var eBiz_prop52 = "ctl";
		var eBiz_evar41 = "Shop";
		var eBiz_evar35 = eBiz_prop24;
		var eBiz_evar48 = eBiz_prop38;
		var eBiz_evar49 = eBiz_prop39;
		var eBiz_evar53 = eBiz_prop25;
		var eBiz_evar54 = eBiz_prop26;
		var eBiz_evar55 = eBiz_prop27;
		var eBiz_evar56 = eBiz_prop52;

	</script>
	<!--/DO NOT REMOVE/-->
	<!-- End SiteCatalyst code version: H.14. -->
	
	<script language="JavaScript" type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
	<script language="JavaScript" type="text/javascript" src="js/jquery.colorbox-min.js"></script>
	<script type="text/javascript" src="//qwest.centurylink.com/global/includes/c2c/residential/mtagconfig.js"></script>
	<script type="text/javascript" src="//www.centurylink.com/assets/js/plugins/jquery.qwest-core.js"></script>
	<script type="text/javascript" src="//www.centurylink.com/assets/js/plugins/centurycore.shortcuts.js"></script>	
	<title>CenturyLink Prism TV | Switch Today | <?php echo $price; ?> Prepaid Card</title>
	
	<script>
		var createBundlesCTCButton = function(name, pid, targetContainer){
			$(targetContainer).each( function (index) {
				// Associate button name and skill
				if(typeof(lpMTagConfig.dynButton)!="undefined") {
					lpMTagConfig.dynButton[lpMTagConfig.dynButton.length] = {"name":name,"pid":pid};
				}
			});
		}
						
		$(document).ready(function(){
			createBundlesCTCButton("chat-centurylink-residential-customer-support-prism-existing", "chat-centurylink-residential-customer-support-prism-existing","#chatBtn");
			$("#chatBtn a").live("mouseup", function () {
				//qa.trackAction("ctl|rsd|shop|iptv_retention|pre_id_learn|top|link|position3|chat");
			});

			$('.fiberOptics').click(function(e){
				$.colorbox({
					iframe: true,
					fastIframe: false,
					href: this.href,
					innerWidth: 720,
					innerHeight: 920,
					opacity: 0.7,
					scrolling: false,
					close: "Close"
				});
				e.preventDefault();
			});
						
		});	
	</script>

</head>

<body>
	<!-- Google Tag Manager -->
	<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-HS85"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-HS85');</script>
	<!-- End Google Tag Manager -->
	<div id="wrapper">
		<div id="masthead" class="clearfix">
			<div class="logo"><a href="http://seeprismtv.com" target="_blank" clicktrack="ctl|rsd|shop|iptv_retention|pre_id_learn|top|image|position1|visit"><img src="images/logoCenturylinkPrism.gif" alt="CenturyLink<sup>&reg;</sup> | Prism&trade;" /></a></div>
			<div class="mastNav">
				<p class="links">
				<div class="chatBtn" id="chatBtn">
					<div id="chat-centurylink-residential-customer-support-prism-existing"></div>
				</div>
				<a href="http://www.seeprismtv.com" target="_blank" clicktrack="ctl|rsd|shop|iptv_retention|pre_id_learn|top|image|position1|visit">SeePrismTV.com</a> &nbsp; | &nbsp;
				<a href="http://www.centurylink.com" target="_blank" clicktrack="ctl|rsd|shop|iptv_retention|pre_id_learn|top|link|position1|visit">Visit CenturyLink.com</a> &nbsp; | &nbsp; <a href="https://eam.centurylink.com/eam/login.do" target="_blank" clicktrack="ctl|rsd|shop|iptv_retention|pre_id_learn|top|link|position2|my_account">Manage My Account</a></p>
				<p class="topPhone">Call <?php echo $phone; ?></p><!-- <p class="chatOnline contact"><a href="https://sncare.centurylink.com/netagent/cimlogin.aspx?questid=03E78ACF-231C-4588-B076-CA693E399261&portid=53BB7F04-97AF-4B41-A9C7-C4BF7A5AC5DB" onclick="javascript:window.open(this.href,'Chat','height=550,width=650,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" clicktrack="ctl|rsd|shop|iptv_retention|pre_id_learn|top|link|position3|chat">Chat Online Now</a></p> -->
			</div>
		</div>
		
		<div id="header">
			<h1>Connect Your Favorite Gadgets With This Great Bundle</h1>
			<p class="subhead">Internet + TV + Phone</p>
			<h3 class="priceBlock">
				<span class="priceSup">$</span>
				<span class="priceMain">89</span>
				<span class="priceSup">95</span>
				<small class="priceTerms">a month <br>
					for 6 months*</small>
			</h3>
			<p class="priceTermsExtra">Additional monthly equipment fees will apply</p>
			<h5>Call <span><?php echo $phone; ?></span> today.</h5>
		</div> <!-- end header -->
		<div id="content" class="clearfix">
			<div id="benefits">
				<div class="header">
					<h2>Have lots of Internet-connected gadgets? <br>
						This is the perfect bundle for your family. </h2>
					<p>When you bundle with the Prism<sup>&trade;</sup> Complete Lite package, you not only get cool features like Prism on the Go and Find-It-Fast Navigation<sup>&reg;</sup>, but also super-fast Internet with speeds up to 20 Mbps and Home Phone service. This way, your family can stay entertained and connected. </p>
				</div>
				<div class="tv-img shadowDivider">
					<div class="twoCol">
						<img src="images/devices.jpg" alt="Video On Demand with CenturyLink Prism TV">
					</div>
					<div class="twoCol">
						<h3>There&rsquo;s a lot to love about this bundle:</h3>
						<ul>
							<li><span>Enjoy over 190 channels with Prism<sup>&trade;</sup> Complete Lite.</span></li>
							<li><span>Super-fast Internet so you can watch Netflix<sup>&reg;</sup> and stream music on Spotify at the same time.</span></li>
							<li><span>Get answers when you need them with 24/7  tech support.</span></li>
							<li><span>Stay in touch with reliable Home Phone service.</span></li>
						</ul>
						<p><strong>Sign up for this amazing bundle today and get brilliant features at a price that fits your budget.</strong></p>
					</div>
				</div>
			</div> <!-- end benefits -->
			
			<div id="switch">
				<h2>Switch today.</h2>
				<p>Switching to Prism<sup>&trade;</sup> TV is easy and hassle-free!</p>	
			</div> <!-- end switch -->
			
			<div id="bottomCTA">
				<p>Cut the cable cord for good.</p>
				<p class="large">Call <span><?php echo $phone; ?></span> now to make the switch!</p>
			</div> <!-- end bottomCTA -->
		
		</div> <!-- end content -->	
		<p class="disclaimer"><?php echo $bankdisclaimer; ?> Service and offer may not be available everywhere. Residential customers only. 
One offer per customer. New subscriber to Prism<sup>&trade;</sup> Premium required. Card terms and conditions will apply. Additional restrictions may apply. <a href="http://www.centurylink.com/Pages/Disclaimers/dtvDisclaimer.jsp" onclick="javascript:window.open(this.href,'Disclaimer','height=600,width=780,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;">Click here for details</a>.<br /> 
<sup>&dagger;</sup><a href="fiberOverlay.html" class="colorbox fiberOptics">Fiber-optics</a> may apply to all or a significant amount of the network, depending on your location.</p>
		<div id="footer">
			<div class="about">
				<ul class="nav">
					<li class="first"><a href="http://www.centurylink.com/" target="_blank" clicktrack="ctl|rsd|shop|iptv_retention|pre_id_learn|footer|link|position1|home">Home</a></li>
					<li><a href="http://www.centurylink.com/Pages/AboutUs/" target="_blank" clicktrack="ctl|rsd|shop|iptv_retention|pre_id_learn|footer|link|position2|about">About Us</a></li>
					<li><a href="http://www.centurylink.com/Pages/AboutUs/Careers/" target="_blank" clicktrack="ctl|rsd|shop|iptv_retention|pre_id_learn|footer|link|position3|careers">Careers</a></li>
					<li><a href="http://www.centurylink.com/Pages/AboutUs/InvestorRelations/" target="_blank" clicktrack="ctl|rsd|shop|iptv_retention|pre_id_learn|footer|link|position4|investor">Investor Relations</a></li>
					<li><a href="http://www.centurylink.com/Pages/AboutUs/PressRoom/" target="_blank" clicktrack="ctl|rsd|shop|iptv_retention|pre_id_learn|footer|link|position5|media">Media</a></li>
					<li><a href="http://www.centurylink.com/Pages/AboutUs/Legal/" target="_blank" clicktrack="ctl|rsd|shop|iptv_retention|pre_id_learn|footer|link|position6|legal">Legal</a></li>
					<li><a href="http://www.centurylink.com/static/Pages/PrivacyPolicy/privacyPolicy.html" target="_blank" clicktrack="ctl|rsd|shop|iptv_retention|pre_id_learn|footer|link|position7|privacy">Privacy</a></li>
					<li><a href="http://www.centurylink.com/sitemap.html" target="_blank" clicktrack="ctl|rsd|shop|iptv_retention|pre_id_learn|footer|link|position8|site_map">Site Map</a></li>
				</ul>
				<p class="copyright">&copy;2013 CenturyLink, Inc. All Rights Reserved. The name CenturyLink and the pathways logo are trademarks of CenturyLink, Inc.</p>
			</div>
			<div class="support">
				<p style="color:#999999;">Call us at: <?php echo $phone; ?></p>
				<ul class="nav">
					<li class="first"><a href="http://storelocator.centurylinkapps.com" target="_blank" clicktrack="ctl|rsd|shop|iptv_retention|pre_id_learn|footer|link|position10|store">Find a Store</a></li>
					<li class="last"><a href="http://www.centurylink.com/Pages/Support/ContactUs/" target="_blank" clicktrack="ctl|rsd|shop|iptv_retention|pre_id_learn|footer|link|position11|contact_us">Contact Us</a></li>
				</ul>
			</div>
		</div>
	</div> <!-- end wrapper -->

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

	<!-- ***************  METRIX RESOURCE SCRIPT CODE BEGIN  ******************** -->
	<div id="GlobalMetrixRouter" class="mboxDefault"><!--DefaultContent--></div>
	<script type="text/javascript">
		var GMXR=GMXR;if(GMXR=="activate")mboxCreate("GlobalMetrixRouter","URL="+document.location);
	</script>
	<script type="text/javascript" src="/static/Common/Includes/Lib/Metrix/CTL/metrixConfig.js"></script>
	
	<noscript>
	<img src="http://centelcom.112.2O7.net/b/ss/centelcom/1/H.14--NS/0" height="1" width="1" border="0"/>
	</noscript>
	<!-- ***************  METRIX RESOURCE SCRIPT CODE END  ******************** -->


</body>

</html>