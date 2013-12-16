(function PtvpVideoOverlay (window, $) {

	var mainClickTrackingHandle = "flashTrack",
		videoPlayerID = 'videoPlayer',
		activeVideoNav = 'activeSlide',
		isPlayerSetup = false,
		currentVideoHash = null;


	// VIDEO TESTIMONIALS LOGIC
	function initTestimonials () {
		$('.nojs').removeClass('nojs');
		$('body').addClass('showVideoPlayer');

		$("#tmlVideoNav").clinkSlide({
			speed: 250,
			hideSpeed: 100,
			numVisible: 4,
			prevBtn: '<a href="#prev" class="btn prevBtn">&laquo;</a>',
			nextBtn: '<a href="#next" class="btn nextBtn">&raquo;</a>'
		});

		$('.launchVid a').live('click', function (e) {
			$('body').addClass('showVideoPlayer');
			var hash = this.hash;
			initVideoPlayer(hash);
		});

		var startVid = location.hash;
		if ( !!!startVid ) {
			startVid = $('#tmlVideoNav .launchVid a')[0].hash;
		}
		initVideoPlayer(startVid);
	};

	// VIDEO PLAYER METHODS
	function showVideoEndCard () {
		if ( !!jwplayer( videoPlayerID ) ) {
			jwplayer( videoPlayerID ).stop();
		}

		$('#playerBoxWrap').hide();

		if (!!currentVideoHash) {
			var vidNav = $('#tmlVideoNav .launchVid a');
			var currVidNav =  vidNav.filter('a[href$="'+currentVideoHash+'"]');

			var vidNavLen = vidNav.length;

			var currVidNum = vidNav.parents('li').filter('.'+activeVideoNav).index();
			var nextVidNum = (currVidNum + vidNavLen + 1) % vidNavLen;
			var prevVidNum = (currVidNum + vidNavLen - 1) % vidNavLen;

			var nextVidNav = vidNav.get(nextVidNum);
			var prevVidNav = vidNav.get(prevVidNum);

			$('.replayVidBtn').attr('href',currVidNav[0].hash);
			$('.nextVidBtn').attr('href',nextVidNav.hash);
			$('.prevVidBtn').attr('href',prevVidNav.hash);
		}
	}


	function initVideoPlayer (hash) {

		$('#playerBoxWrap').show();

		var vidLinkObj = $('#tmlVideoNav li a[href$="'+hash+'"]');
		if ( !!!vidLinkObj.length ) return;

		vidLinkObj.parent().siblings().removeClass(activeVideoNav);
		vidLinkObj.parent().addClass(activeVideoNav);

		jwplayer( videoPlayerID ).setup({
			width: vidLinkObj.attr('data-width'),
			height: vidLinkObj.attr('data-height'),
			skin: "/prismtv/jwplayer-darkgray/centurylink.zip",
			backcolor: 'ffffff',
			stretching: 'fill',
			modes: [
				{
					type: 'flash',
					src: '/prismtv/jwplayer/player.swf'
				},
				{
					type: "html5"
				},
				{
					type: "download"
				}
			],
			events: {
				onReady: function () {
					jwplayer( videoPlayerID ).load( getVideoName ( vidLinkObj, videoPlayerID ) );
					jwplayer( videoPlayerID ).play();
					$('body').addClass('hasVideoPlayer');
					$('body').addClass('showVideoPlayer');
				},
				onPlay: function () {
					$('.noVideoPlayer').removeClass('noVideoPlayer');
					if (qa) qa.trackAction( vidLinkObj.attr("data-video-clicktrack") );
				},
				onComplete: function () {
					showVideoEndCard();
					$('.showVideoPlayer').removeClass('showVideoPlayer');
				},
				onError: function (e) {
					if ( jwplayer( videoPlayerID ).renderingMode == 'html5' ) {
						showVideoEndCard();
					}
				}
			}
		});

		currentVideoHash = hash;
	}

	function getVideoName ( vidLinkObj, videoPlayerID ) {
		var videosettings = {
			title: vidLinkObj.text(),
			image: vidLinkObj.attr('data-poster')
		}

		if ( jwplayer( videoPlayerID ).renderingMode == 'flash' ) {
			videosettings.file = vidLinkObj.attr('data-flv');
			videosettings.provider = "rtmp";
			videosettings.streamer = vidLinkObj.attr('data-rtmp');
		} else {
			videosettings.levels = [
				{ file: ( vidLinkObj.attr('data-html5') ) },
				{ file: ( vidLinkObj.attr('data-html5').replace(/mp4/gi, 'webm') ) }
			]
		}

		return videosettings;
	}

	// Utilities
	function getQueryParam (key) {
		var a = location.search.slice(1).split("&"), GET = [];
		for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
		return GET[key] || null;
	}

	// Flash Tracking Handle
	this.flashTrackingHandler = function (args) {
		// handle tracking behavior here...
		var track = window[mainClickTrackingHandle];
		if ( !!track ) track(args[0],args[1],args[2],args[3]);
	}

	$(window).load( initTestimonials );

	window.PtvpVideoOverlay = this;
	return this;
})(window, $);
