<?php
$canonicalURL = "https://www.youtube.com/user/centurylink";
$xParam = $_GET["x"];

if ( isset( $_GET["sharelink"] ) && !!$_GET["sharelink"] ) {
	 header( "Location: $canonicalURL/?x=$xParam#gh-overviewtab" );
}

// start a new session
session_start();
error_reporting(E_ALL ^ E_NOTICE);
ini_set('display_errors', '1');


?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>YouTube</title>
	<link rel="stylesheet" type="text/css" href="css/style.css?r=1234" />
	<link rel="canonical" href="<?php echo $canonicalURL; ?>/">
	
	<script src="/assets/js/common/jquery.min.js" type="text/javascript"></script>
	<script src="js/jquery.cookie.js"></script>
	<script src="js/video.js"></script>
	<script src="js/site.js"></script>
	<script src="js/jquery.cycle2.min.js" type="text/javascript"></script>
	<script src="js/jquery.cycle2.carousel.min.js" type="text/javascript"></script>
	<script src="js/jquery.cycle2.scrollVert.min.js" type="text/javascript"></script>
	<script>
		if ( self !== top ) {
			document.getElementsByTagName("html")[0].style.overflow = "hidden";
		}
	</script>
<?php
	require_once 'CenturyLinkGadget.php';
	$CLFeed = new CenturyLinkGadget();
?>
</head>
<!--[if lte IE 8 ]>
<body class="ie oldIE">
<![endif]-->
<!--[if IE 9 ]>
<body class="ie ie9">
<![endif]-->
<!--[if gt IE 9]><!--><body><!--<![endif]-->


<div id="fb-root"></div>
<script>
  window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      appId      : '292800484138814',                        // App ID from the app dashboard
      channelUrl : '//promotions.centurylink.com/youtube/channel.html', // Channel file for x-domain comms
      status     : true,                                 // Check Facebook Login status
      xfbml      : true                                  // Look for social plugins on the page
    });

    // Additional initialization code such as adding Event Listeners goes here
  };

  // Load the SDK asynchronously
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>


	<div id="container">
<?php
		$CLFeed->buildSegmentNav();

?>
		<div id="pageCycle" class="cycle-slideshow mainCycle" data-cycle-fx="scrollHorz" data-cycle-slides="> div" data-cycle-timeout=0 data-cycle-speed=250  data-cycle-pager="#mainNav" data-cycle-pager-template="">
			<div class="section homeSection">
				<div class="content">
					<h1>Your Link to What's Next<sup>&trade;</sup></h1>
					<p>A trusted provider of reliable phone, broadband High-Speed Internet, digital TV and networking services to homes and businesses.</p>
					<div class="header">
						<h2>Time to make your <br />business shine</h2>
						<div id="landingVid" data-videoid="7sxwi2Owec8"></div>
					</div> <!-- header -->
					<div id="tabs" class="homeTabsWrap">
						<ul id="bizNav">
							<li><a class="lrgBizTab selectedTab" href="#lrgBizTab">Large Business</a></li>
							<li><a class="smBizTab" href="#smBizTab">Small-Medium Business</a></li>
							<li><a class="govTab" href="#govTab">Government</a></li>
						</ul>
						<div id="lrgBizTab" class="tab">
							<p>A trusted technology partner to dynamic corporations in every industry, CenturyLink is a visionary cloud provider and leader in hosted IT solutions with data centers around the world. <a class="lrgBizBtn tabbtn" href="?x=large_business#">Watch Large Business</a> </p>
						</div>
						<div id="smBizTab" class="tab">
							<p>CenturyLink gives small business advanced tools that power growth. Our customers also have access to local experts providing support every step of the way. Learn even more at the <a href="http://sbrc.centurylink.com" target="_blank" style="white-space: nowrap">Small Business Resource Center &raquo;</a> <a class="smBizBtn tabbtn" href="?x=small_medium_business#">Watch Small Business</a> </p>
						</div>
						<div id="govTab" class="tab">
							<p>As your agency's trusted technology partner, CenturyLink provides access to a visionary cloud infrastructure and custom communications solutions backed by dedicated, responsive support. <a class="govBizBtn tabbtn" href="?x=government#">Watch Government</a></p>
						</div>
					</div> <!-- end tabs -->
					
					<div class="col50">
						<h3>Prism<sup>&trade;</sup> TV</h3>
						<p>Next generation TV you can watch wherever, however - on any device.</p>
						<a href="?x=prism_tv#Tb2T59AB7gw" class="prismBtn"><img src="images/prismGraphic.png" alt="CenturyLink Prism TV" width="278" height="164"></a>
						<p class="caption">Prism<sup>&trade;</sup> TV Overview</p>
					</div>
					<div class="col50">
						<h3>Commercials</h3>
						<p>Check out the latest TV commercials from CenturyLink.</p>
						<a href="?x=commercials#D-0fJdlcQos" class="comBtn"><img src="images/brandGraphic.png" alt="See Our Commercials" width="278" height="164"></a>
						<p class="caption">Time to Make Your Business Shine</p>
					</div>
					
					<div class="shadow"></div>
					
				</div> <!-- end content -->
			</div> <!-- end landing page section -->		
		
<?php	

		$CLFeed->printSegmentPlaylistFeed('commercials');
		$CLFeed->printSegmentPlaylistFeed('prism_tv');
		$CLFeed->printSegmentPlaylistFeed('how_to');
?>
			<div class="section businessSection highlight_nav_business">
				<div class="content bizSection">
					<div class="col lrgBusiness">
						<img src="images/largeBizImg.jpg" alt="CenturyLink Large Business Solutuions" width="353" height="112">
						<a href="?x=large_business" class="lrgBizBtn lrgBtn btn">Large Business<span></span></a>
						<p>A trusted technology partner to dynamic corporations in every industry, CenturyLink is a visionary cloud provider and leader in hosted IT solutions, with data centers around the world. Our global broadband network and dedicated, responsive support are designed to free you to focus on innovation and growth. <a class="lrgBizBtn" href="?x=large_business">Watch Large Business</a></p>
					</div> <!-- end col -->
					<div class="col smBusiness col34">
						<img src="images/smallBizImg.jpg" alt="CenturyLink Small Business Solutions" width="354" height="112">
						<a href="?x=small_medium_business" class="smBizBtn smBtn btn">Small-Medium<br>Business<span></span></a>
						<p>CenturyLink provides small business the advanced tools necessary to power business growth. More than that, our business customers have access to local experts providing assistance and support every step of the way. <a class="smBizBtn" href="?x=small_medium_business">Watch Small-Medium Business</a></p>
					</div> <!-- end col -->
					<div class="col gov">
						<img src="images/govImg.jpg" alt="CenturyLink Government Solutions" width="353" height="112">
						<a href="?x=government" class="govBtn govBizBtn btn">Government<span></span></a>
						<p>Your agency's mission doesn't have a pause button, and with CenturyLink as your trusted technology partner, you don't have to slow down. Partner with CenturyLink for visionary cloud infrastructure and custom communications solutions backed by dedicated, responsive support. Pause button not included. <a class="govBizBtn" href="?x=government">Watch Government</a></p>
					</div> <!-- end col -->				
				</div>
			</div>
<?php

		$bizSubNav = <<<BIZSUBNAV

				<div class="content bizSection">
					<div class="col lrgBusiness">
						<!-- img src="images/largeBizImg.jpg" alt="CenturyLink Large Business Solutuions" width="353" height="112" -->
						<a href="?x=large_business" class="lrgBizBtn lrgBtn btn">Large Business<span></span></a>
					</div> <!-- end col -->
					<div class="col smBusiness col34">
						<!-- img src="images/smallBizImg.jpg" alt="CenturyLink Small Business Solutions" width="354" height="112" -->
						<a href="?x=small_medium_business" class="smBizBtn smBtn btn">Small-Medium<br>Business<span></span></a>
					</div> <!-- end col -->
					<div class="col gov">
						<!-- img src="images/govImg.jpg" alt="CenturyLink Government Solutions" width="353" height="112" -->
						<a href="?x=government" class="govBtn govBizBtn btn">Government<span></span></a>
					</div> <!-- end col -->				
				</div>

BIZSUBNAV;


		$CLFeed->printSegmentPlaylistFeed('careers');
		$CLFeed->printSegmentPlaylistFeed('large_business', "\n", $bizSubNav, "highlight_nav_business");
		$CLFeed->printSegmentPlaylistFeed('small_medium_business', "\n", $bizSubNav, "highlight_nav_business");
		$CLFeed->printSegmentPlaylistFeed('government', "\n", $bizSubNav, "highlight_nav_business");
?>
	</div>
</div>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-38677794-3', 'youtube.com');
  ga('send', 'pageview');
</script>

</body>
</html>