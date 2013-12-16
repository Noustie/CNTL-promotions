<?php
require_once("facebook/facebook.php");

$config = array();
$config['appId'] = '164994446975767';
$config['secret'] = 'e1985b585f1baa29dc88d2e485498290';

if ( strpos( $_SERVER['SERVER_NAME'], "staging" ) !== false ) {
	$config['appId'] = '122830844533996';
	$config['secret'] = 'a0e67af84183161632da27e2301e9e60';
}

//$config['cookie'] = true;

$facebook = new Facebook($config);

$signed_request = $facebook->getSignedRequest();
$app_data = $signed_request["app_data"];
$fb_page_id = $signed_request["page"]["id"];

$fb_page = "CenturyLinkPrismTV";
if ( strval($fb_page_id) == "290959947612732" ) {
	$fb_page = "PrismTV"; // FOR DEV TESTING
}


$shareURL = "http://www.facebook.com/" . $fb_page . "/app_" . $config['appId'] . "?app_data=";

$shareParam = "share_data";
$videoMatch = '%%VIDEOID%%';
$shareJSON = '?'.$shareParam.'={"videoid":"'.$videoMatch.'"}';

$shareData = urlencode( stripslashes( $_GET['share_data'] ) );
if ( !!$shareData && strpos( $shareData, "videoid" ) !== false ) {
	header( "Location: $shareURL$shareData" );
}

?>
<!DOCTYPE html>
<html lang="en-US"<?php if ( !$fb_page_id ) echo ' class="notFB"'; ?>>
<head>
	<meta charset="UTF-8">
    <title>What is Prism? &ndash; CenturyLink&reg; Prism<sup>&trade;</sup></title>

	<meta property="og:title" content="CenturyLink | Experience Prism TV Service. See the Prism TV Demo." />
	<meta property="og:type" content="product" />
	<meta property="og:url" content="http://www.facebook.com/CenturyLinkPrismTV" />
	<meta property="og:image" content="http://www.centurylink.com/prismtv/images/prismTV.jpg" />
	<meta property="og:site_name" content="CenturyLink | Prism" />
	<meta property="fb:app_id" content="<?php echo $config['appId']; ?>" />

    <link rel="stylesheet" type="text/css" href="css/reset.css" />
    <link rel="stylesheet" type="text/css" href="css/main.css" />
</head>
<body>
<div id="fb-root"></div>
<script type="text/javascript">
	var shareURL = "<?php echo $shareURL; ?>";
	var videoJSON = '<?php echo $shareJSON; ?>';
	var videoMatch = '<?php echo $videoMatch; ?>';

	var isready = { FB: false, YT: false, TWT: false };

	var deeplinkVideoID = "<?php
		$ad_arr = json_decode( $app_data, true );
		if ( !!$ad_arr["videoid"] ) {
			echo $ad_arr["videoid"];
		}
	?>";
	var videoPlayer = null;
	function onYouTubeIframeAPIReady(playerId) {
		var videoID = deeplinkVideoID;
		if ( !videoID ) {
			videoID = '4v_1TOE8KVY';
		}
		videoPlayer = new YT.Player('ytVideoPlayer', {
			width: '514',
			height: '292',
			videoId: videoID,
			rel: 0,
			origin: location.hostname,
			modestbranding: 1,
			controls: 2,
			playerVars: { 'wmode': 'opaque', rel: 0, origin: location.hostname,	modestbranding: 1, controls: 2 }
		});
		isready.YT = true;
	}

	var tag = document.createElement('script');
	tag.src = "//www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	window.twttr = (function (d,s,id) {
		var t, js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
		js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
		return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
	}(document, "script", "twitter-wjs"));

	window.twttr.ready(function (twttr) {
		isready.TWT = true;
    });

	window.fbAsyncInit = function() {
		FB.init({
			appId: <?php echo $config['appId']; ?>,
			status: true,
			cookie: true,
			logging: false,
			channelUrl: './fb-channel.php'
		});
		FB.Canvas.setAutoGrow();
		isready.FB = true;
	};
	(function(d){
		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement('script'); js.id = id; js.async = true;
		js.src = "//connect.facebook.net/en_US/all.js";
		ref.parentNode.insertBefore(js, ref);
	}(document));
</script>

<div id="main">
	<div class="masthead">
		<a href="http://seeprismtv.com" target="_blank"><img src="./images/prismLogo.png" alt="CenturyLink&reg; Prism&trade;" /></a>
		<?php /* <div class="loveBtnWrap"><a href="#love"><img src="./images/loveBtn.gif" alt="" /></a></div> */ ?>
	</div>
	<div class="page">
		<div class="intro padWrap">
			<h1 class="mainHeader ir">This isn&rsquo;t just TV. It&rsquo;s an interactive TV experience you&rsquo;ll LOVE.</h1>
			<p>CenturyLink<sup>&reg;</sup> Prism<sup>&trade;</sup> is a new level of TV &ndash; offering the programming you want in crystal-clear HD and innovative, interactive features that put you in complete control. In the videos below, you can hear what our customers think about Prism<sup>&trade;</sup> TV and experience it yourself via our product demos. If you&rsquo;re already a customer, we encourage you to share this page with your friends who don&rsquo;t have Prism<sup>&trade;</sup> TV. And take a moment to check out the demo videos yourself &ndash; you might find new ways to get the most out of Prism<sup>&trade;</sup> TV!</p>
		</div>
		<div class="padWrap">
			<div id="videoWrapper" class="videoWrapper">
				<h2 class="videoTitle">I Love Whole Home DVR</h2>
				<div class="videoPlayer">
						<!--<iframe id="ytVideoPlayer" width="514" height="292" src="http://www.youtube.com/embed/4v_1TOE8KVY?wmode=opaque&enablejsapi=1&origin=http%3A%2F%2Fstaging.promotions.centurylink.com&rel=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>-->
						<div id="ytVideoPlayer"></div>
				</div>
				<div class="videoSocial">
					<div class="socialBtn socialTWT">
						<a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a>
					</div>
					<div class="socialBtn socialFB">
						<a class="fbshare" target="_blank"><img src="./images/share-fb.gif" alt="Share" /></a>
					</div>
				</div>
			</div>
		</div>
		<div id="videoList" class="videoList padWrap">
			<div class="videoLinks">
				<h3>See Why Our Customers Love Prism<sup>&trade;</sup> TV</h3>
				<ul>
					<li class="video-thumb-love-whdvr">
						<a href="#4v_1TOE8KVY" class="selected" data-posterurl="http://<?php echo $_SERVER["SERVER_NAME"]; ?>/FacebookTabs/testimonials/images/video-poster-love-whdvr.jpg">
							<span class="vidThumb ir"> click to play </span>
							<span class="vidThumbTitle">Love Prism Whole Home DVR</span>
							<span class="vidThumbDesc">Hear from real customers about why they love Prism&trade; TV&rsquo;s Whole Home DVR, which lets you watch and record up to 4 shows at once &ndash; and even pause live TV.</span>
						</a>
					</li>
					<li class="video-thumb-love-features">
						<a href="#giURzzqxoO0" data-posterurl="http://<?php echo $_SERVER["SERVER_NAME"]; ?>/FacebookTabs/testimonials/images/video-poster-love-features.jpg">
							<span class="vidThumb ir"> click to play </span>
							<span class="vidThumbTitle">Love Prism Features</span>
							<span class="vidThumbDesc">Our innovative, interactive features really set Prism&trade; TV apart. Hear real customers talk about their favorite Prism features.</span>
						</a>
					</li>
					<li class="video-thumb-love-service">
						<a href="#OiFocf1Mpdc" data-posterurl="http://<?php echo $_SERVER["SERVER_NAME"]; ?>/FacebookTabs/testimonials/images/video-poster-love-service.jpg">
							<span class="vidThumb ir"> click to play </span>
							<span class="vidThumbTitle">Love Prism Service</span>
							<span class="vidThumbDesc">Who better to explain what&rsquo;s to love about Prism&trade; TV than our real customers? Hear why they&rsquo;re glad they made the switch.</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="videoLinks">
				<h3>Experience Prism<sup>&trade;</sup> TV Yourself</h3>
				<ul>
					<li class="video-thumb-overview">
						<a href="#vPefQ_EvTbo" data-posterurl="http://<?php echo $_SERVER["SERVER_NAME"]; ?>/FacebookTabs/testimonials/images/video-poster-overview.jpg">
							<span class="vidThumb ir"> click to play </span>
							<span class="vidThumbTitle">Prism<sup>&trade;</sup> TV Overview</span>
							<span class="vidThumbDesc">CenturyLink&reg; Prism&trade; is revolutionary TV that will change the way you watch TV forever. See why if you don&rsquo;t have Prism&trade; TV, you&rsquo;re missing out. </span>
						</a>
					</li>
					<li class="video-thumb-whdvr">
						<a href="#_Cj_o1H4TSs" data-posterurl="http://<?php echo $_SERVER["SERVER_NAME"]; ?>/FacebookTabs/testimonials/images/video-poster-whdvr.jpg">
							<span class="vidThumb ir"> click to play </span>
							<span class="vidThumbTitle"><span class="hidden">Prism<sup>&trade;</sup> TV &ndash;</span> Whole Home DVR</span>
							<span class="vidThumbDesc">Experience CenturyLink&reg; Prism&trade; Whole Home DVR, which lets you watch and record up to 4 shows at once &ndash; and even pause live TV.</span>
						</a>
					</li>
					<li class="video-thumb-fif">
						<a href="#9zhUDQa7bWo" data-posterurl="http://<?php echo $_SERVER["SERVER_NAME"]; ?>/FacebookTabs/testimonials/images/video-poster-fif.jpg">
							<span class="vidThumb ir"> click to play </span>
							<span class="vidThumbTitle"><span class="hidden">Prism<sup>&trade;</sup> TV &ndash;</span> Find-It-Fast Navigation<sup>&reg;</sup></span>
							<span class="vidThumbDesc">CenturyLink&reg; Prism&trade; Find-It-Fast Navigation&reg; lets you find your favorite program in a flash &ndash; search by actor, title, category, even director. See it in action.</span>
						</a>
					</li>
					<li class="video-thumb-wscc">
						<a href="#xAHVbSjuvEM" data-posterurl="http://<?php echo $_SERVER["SERVER_NAME"]; ?>/FacebookTabs/testimonials/images/video-poster-wscc.jpg">
							<span class="vidThumb ir"> click to play </span>
							<span class="vidThumbTitle"><span class="hidden">Prism<sup>&trade;</sup> TV &ndash;</span> Warp-Speed Channel Change</span>
							<span class="vidThumbDesc">With Warp-Speed Channel Change from CenturyLink&reg; Prism&trade;, you fly through channels one-by-one, with virtually no lag time. See why channel surfing is fun again.</span>
						</a>
					</li>
					<li class="video-thumb-mtvw">
						<a href="#WxDUN4hxH6o" data-posterurl="http://<?php echo $_SERVER["SERVER_NAME"]; ?>/FacebookTabs/testimonials/images/video-poster-mtvw.jpg">
							<span class="vidThumb ir"> click to play </span>
							<span class="vidThumbTitle"><span class="hidden">Prism<sup>&trade;</sup> TV &ndash;</span> Multi-view</span>
							<span class="vidThumbDesc">Experience Multi-view, the newest CenturyLink&reg; Prism feature, which lets you keep an eye on four different shows in a specific genre &ndash; all on one scree, at one time.</span>
						</a>
					</li>
					<li class="video-thumb-appc">
						<a href="#a2OBd5iv11M" data-posterurl="http://<?php echo $_SERVER["SERVER_NAME"]; ?>/FacebookTabs/testimonials/images/video-poster-appc.jpg">
							<span class="vidThumb ir"> click to play </span>
							<span class="vidThumbTitle"><span class="hidden">Prism<sup>&trade;</sup> TV &ndash;</span> App Center</span>
							<span class="vidThumbDesc">Check out Prism App Center, providing instant access to your favorite apps &ndash; like Facebook, Picasa and Yahoo! Sports &ndash; right on your TV, not to mention local news, weather, gas prices and more.</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="footCta">
			<p>Ready to experience a new level of TV? &nbsp; <a href="http://seeprismtv.com" target="_blank" class="ctaBtn"><img alt="Learn More &raquo;" src="./images/btn-LearnMore.gif"/></a></p>
		</div>
	</div>
</div>

<!-- DEFERRED JAVASCRIPT -->
<script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/s_code.js"></script>
</body>
</html>
