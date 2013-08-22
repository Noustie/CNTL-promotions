<?php
$page_url = "http://" . $_SERVER["SERVER_NAME"] . "/offers/5years/";

$fb_title = "CenturyLink High-Speed Internet. $19.95/mo. for five years.";
$fb_url = $page_url . "index.php";
$fb_image = $page_url . "alt.jpg";
$fb_description = "Get consistently fast High-Speed Internet for a consistently low price. $19.95/mo. for five years.";
$fb_appid = "292800484138814";

$twt_url = $page_url;
$twt_text = 'Get consistently fast CenturyLink High-Speed Internet for a consistently low price. $19.95/mo. for five years.';

$page_keywords = 'CenturyLink DSL, centurylink internet, internet service, internet service provider, High Speed Internet, fast internet, internet provider, DSL provider';
$page_description = "Get consistently fast High-Speed Internet for a consistently low price. $19.95/mo. for five years.";
$page_title = 'CenturyLink High-Speed Internet. $19.95/mo. for five years.';

$svar = array(
	'pageName' => "ctl|rsd|product|emktg|t1_2012|pricelock_1995_lqwest",
	'server' => "promotions.centurylink.com",
	'channel' => "rsd",
	'prop24evar53' => "rsd|product",
	'prop25evar54' => "rsd|product|emktg|t1_2012",
	'prop26evar55' => "rsd|product|emktg|t1_2012|pricelock_1995_lqwest",
	'prop52evar56' => "",
	'prop38evar48' => "static_page",
	'prop39evar49' => "landing_page"
);
?>
<!DOCTYPE HTML>
<html lang="en-US" xmlns:fb="http://www.facebook.com/2008/fbml" itemscope itemtype="http://schema.org/Product">
<head>
	<!-- METADATA FOR GOOGLE+ -->
	<meta itemprop="name" content="<?php echo $fb_title; ?>" />
	<meta itemprop="description" content="<?php echo $fb_description; ?>" />
	<meta itemprop="image" content="<?php echo $fb_image; ?>" />

	<!-- METADATA FOR FACEBOOK -->
	<meta property="og:title" content="<?php echo $fb_title; ?>" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="<?php echo $fb_url; ?>" />
	<meta property="og:image" content="<?php echo $fb_image; ?>" />
	<meta property="og:site_name" content="<?php echo $fb_title; ?>" />
	<meta property="og:description" content="<?php echo $fb_description; ?>" />
	<meta property="fb:app_id" content="<?php echo $fb_appid; ?>" />

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title><?php echo $page_title; ?></title>
	<meta name="description" content="<?php echo $page_description; ?>" />
	<meta name="keywords" content="<?php echo $page_keywords; ?>" />
	<link rel="shortcut icon" href="http://www.centurylink.com/favicon.ico" type="image/vnd.microsoft.icon" />

	<link rel="stylesheet" href="css/style.css">
	<script src="/assets/js/common/jquery.min.js"></script>

	<script type="text/javascript">
		// var custClass = "business"; //uncomment to use biz suite
		var pageName = "<?php echo $svar['pageName']; ?>"; //s.pageName
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
		var eBiz_server = "<?php echo $svar['server']; ?>"; // s.server
		var eBiz_channel = "<?php echo $svar['channel']; ?>"; // s.channel, s.eVar41
		var eBiz_prop20 = "";
		var eBiz_prop24 = "<?php echo $svar['prop24evar53']; ?>";
		var eBiz_prop25 = "<?php echo $svar['prop25evar54']; ?>";
		var eBiz_prop26 = "<?php echo $svar['prop26evar55']; ?>";
		var eBiz_prop38 = "<?php echo $svar['prop38evar48']; ?>";
		var eBiz_prop39 = "<?php echo $svar['prop39evar49']; ?>";
		var eBiz_prop52 = "<?php echo $svar['prop52evar56']; ?>";
		var eBiz_evar27 = "";
		var eBiz_evar48 = eBiz_prop38;
		var eBiz_evar49 = eBiz_prop39;
		var eBiz_evar53 = eBiz_prop24;
		var eBiz_evar54 = eBiz_prop25;
		var eBiz_evar55 = eBiz_prop26;
		var eBiz_evar56 = eBiz_prop52;
		var sAddress = "";

		//var c2c_clickTrack = "<?php echo $svar['c2c_clickTrack']; ?>";
		//var c2c_buttonname = "<?php echo $c2c_buttonname; ?>";
	</script>
	<script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
	<script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4f5a3e1e265f4081"></script>
    <script type="text/javascript">
		function trackClick(LinkName,obj) {
			if(!(typeof s_account === "undefined"))
			{
				var s=s_gi(s_account);
				s.templtv=s.linkTrackVars;
				s.templte=s.linkTrackEvents;
				s.manageVars("clearVars");
				s.linkTrackVars="eVar30";
				s.eVar30=LinkName;
				s.tl(obj,'o',LinkName);
				if(s.templtv) s.linkTrackVars=s.templtv;
				if(s.templte)s.linkTrackEvents=s.templte;
			}
		}
        $(function () {
            $("#headerLinks a, #footerContainer p a").click(function () {
                trackClick("ctl|rsd|product|q3|shell|" + $(this).attr("name"), this);
            });
            $(".headCta .ctaBtn").click(function () {
                trackClick("ctl|rsd|product|emktg|t1_2012|pricelock_1995_lqwest|button|check_availability", this);
            });
        });
    </script>
	
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

</head>
<body class="nojs">
<!--START ALL PAGE CONTENT-->
<div id="container">
	<header class="header">
		<div class="headWrap">
			<ul class="nav topNav clearfix">
				<li><a target="_blank" href="http://www.centurylink.com">Home</a></li>
				<li><a target="_blank" href="http://www.centurylink.com/Pages/AboutUs/">About Us</a></li>
				<li><a target="_blank" href="http://espanol.centurylink.com/">Espa&ntilde;ol</a></li>
				<li class="last"><a target="_blank" href="http://m.centurylink.com">Mobile Site</a></li>
			</ul>
			<h1 class="cntlLogo"><a class="ir" href="http://www.centurylink.com" target="_blank">CenturyLink&trade;</a></h1>
		</div>
	</header>
	<div class="page-content">
		<div class="pageHeader">
			<!--<a href="disclaimer.html" id="snipe" target="_blank" onclick="window.open(this.href,'disclaimer','height=700,width=800,left=100,  top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;"><img src="images/GiftTagSnipe.png" alt="ONLINE ONLY OFFER: Order online and receive a $50 prepaid card | See Important Details &gt;"/></a>-->
			<h1 class="abir">5 Years. 1 Price. The CenturyLink Price-Lock Guarantee</h1>
			<h2 class="abir">CenturyLink&reg; High-Speed Internet $19.95 per month for 5 years when bundled with Home Phone Unlimited Plan* Consistently fast speeds. Price guaranteed for 5 years.</h2>
			<h3 class="abir">Order Online &amp; Receive $50 PrePaid Card</h3>
			<div class="headCta">
				<a class="ctaBtn" target="_blank" href="https://shop.centurylink.com/MasterWebPortal/residential/broadbandlanding?Internet=true&Phone=true">CHECK AVAILABILITY &raquo;</a>
			</div>
			<span class="corner cTopLeft"> &nbsp; </span><span class="corner cTopRight"> &nbsp; </span> <span class="corner cBottomLeft"> &nbsp; </span><span class="corner cBottomRight"> &nbsp; </span>
		</div>
		<div class="pageMessage">
			<div class="pageBody">
				<h2>The price is locked in. But you&rsquo;re not. </h2>
				<h3>Price-Lock Guarantee</h3>
				<p class="subline">Lock in to speeds up to 12 Mbps for just $19.95 a month when you bundle with the <nobr>Home Phone Unlimited Plan*.</nobr></p>
				<div class="twoCol">
					<div class="col">
						<div class="colWrap">
							<h3>
								<img src="images/body-col-hsi.gif" alt="" /><br />
								High-Speed Internet
							</h3>
							<h4>Get consistent speed &ndash; <strong>up to 12 Mbps</strong> <br />for just $19.95 a month. </h4>
							<ul>
								<li>No rising monthly rate for 5 years</li>
								<li>Consistently fast connection with download speeds of up to 12 Mbps so you can stream, game, and video conference</li>
								<li>A private, direct connection to our national network</li>
								<li>A network designed for consistent speed all day, every day</li>
							</ul>
						</div>
					</div>
					<div class="col">
						<div class="colWrap">
							<h3>
								<img src="images/body-col-phone.gif" alt="" /><br />
								Home Phone Unlimited
							</h3>
							<h4>Talk all day, every day, anywhere in America.</h4>
							<ul>
								<li>Unlimited Local Calling &amp; Unlimited Nationwide Calling</li>
								<li>Unlimited Calling Features &mdash; like Voicemail and Caller ID</li>
								<li>Reliable 911 emergency service and works with most home security systems</li>
								<li>Clear connections, no dropped calls</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="pageCta corners outsideWBdr666">
				<ul>
					<li class="icon-guar">
						<h4>Price-Lock Guarantee</h4>
						<p>No rising monthly rate for 5 years, no contract. Guaranteed.</p>
					</li>
					<li class="icon-speed">
						<h4>All the speed you need.</h4>
						<p>Great for video chatting online without slowdowns, downloading large files and even gaming online.</p>
					</li>
					<li class="icon-time">
						<h4>There when you need it.</h4>
						<p>99.9% data network reliability.**</p>
						<p class="disclaimer">**99.9% High-Speed Internet network reliability based on current network availability statistics. Individual experiences will vary.</p>
					</li>
					<li class="icon-consis">
						<h4>Consistently fast.</h4>
						<p>Consistently fast speeds for all your surfing needs.</p>
					</li>
				</ul>
				<span class="corner cTopLeft"> &nbsp; </span><span class="corner cTopRight"> &nbsp; </span> <span class="corner cBottomLeft"> &nbsp; </span><span class="corner cBottomRight"> &nbsp; </span>
			</div>
		</div>
		<div class="pageSubFoot">
			<div class="subFootCont">
				<p class="disclaimer col">*Other fees and conditions may apply. <a onclick="window.open(this.href,'prepaidCardDetails','height=700,width=800,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" class="popupTrigger" target="_blank" href="prepaidCardDetails.html">Click here for details.</a></p>
				<div class="share col colRight">
					<div class="shareBox">
						<div class="fb-like" data-href="<?php echo $fb_url; ?>" data-send="false" data-layout="button_count" data-width="50" data-show-faces="false" data-font="arial"></div>
					</div>
					<div class="shareBox">
						<a href="https://twitter.com/share" class="twitter-share-button" data-url="<?php echo $twt_url; ?>" data-text="<?php echo $twt_text; ?>" data-count="horizontal">Tweet</a>
					</div>
					<div class="shareBox addthis_toolbox addthis_default_style ">
						<a class="addthis_counter addthis_pill_style"></a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<footer class="footer"><div class="footWrap">
		<ul class="nav footNav clearfix">
			<li><a target="_blank" href="http://www.centurylink.com/home">Residential</a></li>
			<li><a target="_blank" href="http://www.centurylink.com/Pages/AboutUs/Legal/privacyPolicy.jsp">Privacy Policy</a></li>
			<li><a target="_blank" href="http://www.centurylink.com/Pages/AboutUs/Community/Disabled">Customers with Disabilities</a></li>
			<li class="last"><a target="_blank" href="http://www.centurylink.com/Pages/AboutUs/CompanyInformation/Regulatory/tariffLibrary.jsp">Tariffs</a></li>
		</ul>
		<p class="disclaimer">&copy;2013. CenturyLink, Inc. All Rights Reserved.</p>
	</div></footer>
</div>
<!-- end of #container -->
<!--END ALL PAGE CONTENT-->


<!--PAGE TRACKING-->

<!-- Do not touch! -->
<!-- SiteCatalyst code version: H.20.3.
Copyright 1997-2009 Omniture, Inc. More info available at http://www.omniture.com -->
<script type="text/javascript" src="/assets/js/third-party/metrics/metrixConfig.js"></script>
<noscript>
	<a href="http://www.omniture.com" title="Web Analytics"><img src="http://qwest.com/images/spacer.gif" height="1" width="1" border="0" title="" /></a>
</noscript>
<!-- DO NOT REMOVE -->
<!-- SiteCatalyst code version: H.20.3. -->

<div id="fb-root"></div>
<script type="text/javascript">
//SOCIAL -- FACEBOOK
window.fbAsyncInit = function() {
	/*
	FB.init({
		appId      : '<?php echo $fb_appid; ?>', // App ID
		channelUrl : '<?php echo('http://' . $_SERVER['SERVER_NAME'] . '/offers/5year/'); ?>channel.html', // Channel File
		status     : true, // check login status
		cookie     : true, // enable cookies to allow the server to access the session
		xfbml      : true  // parse XFBML
	});
	*/

	FB.Event.subscribe('edge.create', function(response) {
		var qLinkName = 'ctl|rsd|product|emktg|t1_2012|pricelock_1995_lqwest|button|facebook';
		trackClick(qLinkName, {});
	});
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=<?php echo $fb_appid; ?>";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


//SOCIAL -- TWITTER
window.twttr = (function (d,s,id) {
    var t, js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
    js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
    return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
}(document, "script", "twitter-wjs"));

twttr.ready(function (twttr) {
	twttr.events.bind('click', function (intent_event) {
		if (intent_event && !!intent_event.target && !!intent_event.target.src ) {
			var response = intent_event.target.src;
			var qLinkName = 'ctl|rsd|product|emktg|t1_2012|pricelock_1995_lqwest|button|twitter';
			trackClick(qLinkName, {});
		};
	});
});

</script>

<!--Google Analytics
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-24819517-1']);
  _gaq.push(['_trackPageview']);

  (function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>-->

<!--
Start of DoubleClick Floodlight Tag: Please do not remove
Activity name of this tag: 2011_Q3_$19.95_Landing Page
URL of the webpage where the tag is expected to be placed: http://http://promotions.centurylink.com/5years
This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
Creation Date: 08/02/2011
-->
<script type="text/javascript">
var axel = Math.random() + "";
var a = axel * 10000000000000;
document.write('<iframe src="http://fls.doubleclick.net/activityi;src=2660564;type=landi947;cat=2011_591;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
</script>
<noscript>
<iframe src="http://fls.doubleclick.net/activityi;src=2660564;type=landi947;cat=2011_591;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>
</noscript>
<!-- End of DoubleClick Floodlight Tag: Please do not remove -->

</body>
</html>
