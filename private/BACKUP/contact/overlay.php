<!DOCTYPE HTML>
<html lang="en-US" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
	<meta charset="UTF-8">
	<title>Meet The Team Videos</title>

	<script type="text/javascript" src="js/overlaypop.js"></script>

	<link rel="stylesheet" type="text/css" href="css/reset.css" />
	<link rel="stylesheet" type="text/css" href="css/master.css" />
	<style type="text/css">
		html { overflow: hidden; background-color: #000; }
		html, body { padding: 0; margin: 0; background-color: #000; }
		.flashWrap { padding: 10px 0; width: 734px; margin: 0 auto; }
		h1 { font-size: 21px; font-weight: normal; color: #333; padding: 0 10px; }
		.sharing { padding: 0 10px; }
		.alt { visibility: visible; }
		.testFlash .alt { visibility: hidden; }
		.wideWrap .launchVidEndCard {
			display: none;
		}
		#team .pageTitle {
			text-align: center;
			padding: 20px 0 15px 0;
			position: relative;
			width: 100%;
		}
		#teamPlayer {
			height: 414px;
			overflow: hidden;
		}
		#team .vidLike {
			position: absolute;
			left: 0;
			top: 25px;
		}
		#team {
			border: 1px solid #00853F;
			float: left;
			clear: both;
		}
		.videoWrap {
			height: 412px;
			width: 730px;
			overflow: hidden;
		}
		.videoNav {
			padding: 20px 54px 50px 54px;
			margin: 0 auto;
			clear: both;
			position: relative;
		}
		.videoNav .launchVid {
			float: left;
			display: block;
			background-position: left top;
			background-repeat: no-repeat;
		}
		#tmlVideoNav {
			position: relative;
		}
		#tmlVideoNav li {
			width: 160px;
			height: 200px;
			display: block;
		}
		.videoNav .next, .videoNav .prev {
			display: block;
			height: 106px;
			width: 20px;
			position: absolute;
			text-indent: -9999px;
			top: 55px;
		}
		
		.videoNav .next {
			background: url(images/nextBtn.png) right top no-repeat;
			right: 15px;
		}
		.videoNav .prev {
			background: url(images/prevBtn.png) right top no-repeat;
			left: 15px;
		}
		
		.videoNav .test3 {
			margin-right: 0 !important;
		}
		.videoNav .brian { background-image: url('images/brian_vidThumb.jpg'); }
		.videoNav .patti { background-image: url('images/patti_vidThumb.jpg'); }
		.videoNav .doug { background-image: url('images/doug_vidThumb.jpg'); }
		.videoNav .joey { background-image: url('images/joey_vidThumb.jpg'); }
		.videoNav .rich { background-image: url('images/rich_vidThumb.jpg'); }
		.videoNav .corey { background-image: url('images/corey_vidThumb.jpg'); }
		.videoNav .steve { background-image: url('images/steve_vidThumb.jpg'); }

		.videoNav li a {
			background-position: left top;
			background-repeat: no-repeat;
			background-image: url('images/vidThumbBtn.png');
			display:block;
			height: 106px;
			width: 145px;
			overflow: visible;
		}
		.videoNav li a:hover {
			background-position: center top;
			text-decoration: none;
		}
		.videoNav .activeSlide a {
			background-position: right top;
		}
		.noVideoPlayer .videoNav .activeSlide a  {
			background-position: left top;
		}
		.videoNav a .lnktxt {
			display:block;
			color: #FFF;
			font-weight: normal;
			background: transparent url('./images/prismtvproject/arrow-small-rt.png') left 140px no-repeat;
			padding: 114px 0 0 3px;
			font-size: 20px;
		}
		#team #teamVidEndCard {
			margin: 0;
		}
		#teamVidEndCard .endCardWrap {
			height: 412px;
			width: 100%;
			background: #000000 url("./images/prismtvproject/test-endcard-bg.jpg") no-repeat scroll left top;
			position: relative;
		}
		#testVidEndCard .replayVidBtn {
			position: absolute;
			top: 5px;
			left: 5px;
			background: #000 url('./images/prismtvproject/test-endcard-replay.gif') left top no-repeat;
			display: block;
			font-weight: bold;
			height: 25px;
			padding: 0 0 0 30px;
			color: #8CC63F;
		}
		#teamVidEndCard .endCardWrap .cardContent {
			padding: 150px 40px 0 380px;
		}
		#teamVidEndCard .endCardWrap .cardContent h4 {
			font-size: 24px;
			font-weight: bold;
			color: #8CC63F;
		}
		#teamVidEndCard .endCardWrap .cardContent h5 {
			font-size: 17px;
			font-weight: normal;
			color: #FFF;
		}
		#teamVidEndCard .endCardWrap .endCardCta {
			margin: 20px 0 0 0;
			padding: 20px 0 0 0;
			border-top: 1px solid #333;
		}
		#teamVidEndCard .endCardWrap .endNav {
			margin: 20px 40px 0 380px;
			border-top: 1px solid #333;
			padding: 20px 0 0 0;
			text-align: left;
		}
		#teamVidEndCard .noFlashAlt, .nojs #team #teamVidEndCard .endCardWrap {
			display: none;
		}
		#videoPlayer {
			width:100%;
			height:412px;
			display:none;
		}
		.showVideoPlayer #videoPlayer {
			display:block;
		}
		#videoPlayer a img {
			width:100%;
			height:100%;
			display:block;
		}
		.fb_edge_comment_widget { display: none !important; }
	</style>
	<script type="text/javascript" src="jwplayer/jwplayer.js"></script>
</head>
<body class="testFlash nojs">
	<noscript>
		<style type="text/css">
			.nojs #teamVidEndCard .noFlashAlt {
				display: block;
			}
		</style>
	</noscript>
	<!--<h1>Explore Prism. Discover interactive TV that&rsquo;s truly brilliant.</h1>-->
	<div class="flashWrap">
		<div class="wideWrap clearfix vidPlayerWrap">
			<div id="team" class="multiVideoPlayer">
				<div class="videoWrap">
					<div class="videoPlayer">
						<video id="videoPlayer" poster="/contact/images/posters/brian.jpg"><a class="noFlashAlt" href="http://get.adobe.com/flashplayer/" target="_blank"><img src="/contact/images/alt.jpg" alt="Click here to download flash player" /></a></video>
					</div>
				</div>
			</div>
			<div class="videoNav clearfix">
				<ul id="tmlVideoNav" class="clearfix">
					<li class="launchVid brian"><a href="#brian" data-id="brian" data-height="412" data-width="730" data-poster="images/posters/brian.jpg" data-rtmp="rtmp://cp108058.edgefcs.net/ondemand/flash/contact/" data-flv="brian" data-html5="http://video.prismtvproject.com/flash/contact/brian.mp4" data-endcard="testVidEndCard" data-autoplay="true"><span class="lnktxt">Brian</span></a></li>
					<li class="launchVid patti"><a href="#patti" data-id="patti" data-height="412" data-width="730" data-poster="images/posters/patti.jpg" data-rtmp="rtmp://cp108058.edgefcs.net/ondemand/flash/contact/" data-flv="patti" data-html5="http://video.prismtvproject.com/flash/contact/patti.mp4" data-endcard="testVidEndCard" data-autoplay="true"><span class="lnktxt">Patti</span></a></li>
					 <li class="launchVid doug"><a href="#doug" data-id="doug" data-height="412" data-width="730" data-poster="images/posters/doug.jpg" data-rtmp="rtmp://cp108058.edgefcs.net/ondemand/flash/contact/" data-flv="doug" data-html5="http://video.prismtvproject.com/flash/contact/doug.mp4" data-endcard="testVidEndCard" data-autoplay="true"><span class="lnktxt">Doug</span></a></li>
					 <li class="launchVid joey"><a href="#joey" data-id="joey" data-height="412" data-width="730" data-poster="images/posters/joey.jpg" data-rtmp="rtmp://cp108058.edgefcs.net/ondemand/flash/contact/" data-flv="joey" data-html5="http://video.prismtvproject.com/flash/contact/joey.mp4" data-endcard="testVidEndCard" data-autoplay="true"><span class="lnktxt">Joey</span></a></li>
					 <li class="launchVid rich"><a href="#rich" data-id="rich" data-height="412" data-width="730" data-poster="images/posters/rich.jpg" data-rtmp="rtmp://cp108058.edgefcs.net/ondemand/flash/contact/" data-flv="rich" data-html5="http://video.prismtvproject.com/flash/contact/rich.mp4" data-endcard="testVidEndCard" data-autoplay="true"><span class="lnktxt">Rich</span></a></li>
					 <li class="launchVid corey"><a href="#corey" data-id="corey" data-height="412" data-width="730" data-poster="images/posters/corey.jpg" data-rtmp="rtmp://cp108058.edgefcs.net/ondemand/flash/contact/" data-flv="corey" data-html5="http://video.prismtvproject.com/flash/contact/corey.mp4" data-endcard="testVidEndCard" data-autoplay="true"><span class="lnktxt">Corey</span></a></li>
					 <li class="launchVid steve"><a href="#steve" data-id="steve" data-height="412" data-width="730" data-poster="images/posters/steve.jpg" data-rtmp="rtmp://cp108058.edgefcs.net/ondemand/flash/contact/" data-flv="steve" data-html5="http://video.prismtvproject.com/flash/contact/steve.mp4" data-endcard="testVidEndCard" data-autoplay="true"><span class="lnktxt">Steve</span></a></li>

				</ul>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="/assets/js/jquery.latest.min.js"></script>
	<script type="text/javascript" src="js/ptvpVideoOverlay.js"></script>
	<script type="text/javascript" src="js/jquery.clinkSlide.js"></script>
		<script type="text/javascript">
		$('#tmlVideoNav').clinkSlide({
			speed: 250,
			hideSpeed: 100,
			numVisible: 4
		});
	</script>
</body>
</html>
