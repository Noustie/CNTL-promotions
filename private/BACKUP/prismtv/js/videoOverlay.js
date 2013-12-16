(function PrismOverlay (window, $) {

	//IN-PAGE VIDEO PLAYER MODULE
	var path_rmtp = "rtmp://cp108058.edgefcs.net/ondemand/flash/sptv-demos-2013/";
	var path_mp4 = "http://video.prismtvproject.com/flash/sptv-demos-2013/";
	var path_webm = "http://video.prismtvproject.com/flash/sptv-demos-2013/";

	window.multiVideoPlayer = null;
	window.playerChromeReady = false;
	var videoInfoCycle, selectedVideo, videoPlayerID, videoPreselect, videoPreselectLink, vWidth, vHeight,
		usingParentPubsub = false, rndID = ~~( Math.random() * 99999999 ), docReady = false,
		playerReady = false, firstVideoPlay = 1, initialized = false;

	//PUBSUB TOPICS
	var topics = {
		INIT: "INIT_MAIN",
		TRACKPAGE: "TRACKPAGE",
		TRACKACTION: "TRACKACTION",
		CLEAR_TO_TRACK: "CLEAR_TO_TRACK",
		ALL_TABS_LOADED: "ALL_TABS_LOADED",
		SHOWTAB: "UI_SHOWTAB",
		INIT_VIDEOPLAYER: "INIT_VIDEOPLAYER",
		CHANGE_VIDEO: "UI_CHANGE_VIDEO",
		STOP_VIDEO: "STOP_VIDEO",
		LAUNCH_OVERLAY: "LAUNCH_OVERLAY",
		PAUSE_HEADER_CYCLE: "PAUSE_HEADER_CYCLE",
		RESUME_HEADER_CYCLE: "RESUME_HEADER_CYCLE"
	}
	var pubSubHandles = {}

	var jumpToVideoMap = {
		prismIntroVideo: "sptv-demo-overview",
		entertainmentVideo: "sptv-demo-overview",
		overviewVideo: "sptv-demo-overview",
		findItFastVideo: "sptv-demo-fif",
		wholeHomeVideo: "sptv-demo-whdvr"
	}

	function handleResize () {
		if ( $(window).width() > 0 && $(window).width() < 760 ) {
			$("html").addClass("smallWindow");
			setVideoPlayerSize();
		} else {
			$("html").removeClass("smallWindow");
			setVideoPlayerSize();
		}
	}

	function setVideoPlayerSize () {
		if ( !!videoPlayerID && !!playerReady ) {
			var videoPlayerBox = $('#homeVideoPlayer');
			vWidth = videoPlayerBox.attr('data-width')-0;
			vHeight = videoPlayerBox.attr('data-height')-0;
			if ( $("html").hasClass("smallWindow") ) {
				vWidth = 732;
				vHeight = 412;
			}
			jwplayer( videoPlayerID ).resize(vWidth, vHeight);
		}
	}


	function init() {
		if ( self.location.hash !== "#"+rndID ) { self.location.hash = rndID; }
		if ( !initialized ) {
			try {
				if ( self !== top && typeof top.prismMainSite === "undefined" ) {
					initialized = true;
				} else if ( self !== top && !!top.prismMainSite && !!top.$pubsubready ) {
					initialized = true;
					usingParentPubsub = true;
				} else {
					setTimeout( init, 1000 );
					return;
				}
			} catch (e) {
				initialized = true;
				setTimeout( init, 1000 );
				return;
			}
		}

		initPubSub();

		$(window).resize(handleResize);
		handleResize();

		$.subscribe( topics.INIT_VIDEOPLAYER, initVideoPlayer );
		$.subscribe( topics.CHANGE_VIDEO, changeVideo );
		$.subscribe( topics.STOP_VIDEO, stopVideo );

		var wrapper = document.getElementById("videoPlayerElement");
		if ( !!wrapper ) {
			wrapper.id = ("vidPlayer"+rndID);
		}

		if ( !usingParentPubsub || !multiVideoPlayer ) {
			$.publish( topics.INIT_VIDEOPLAYER, [ true ] );
		}

		window.init = false;

		return;
	}

	function initVideoPlayer ( ready ) {
		if ( !multiVideoPlayer ) {

			videoPreselect = null;
			var videoPlayerBox = $('#homeVideoPlayer');
			if ( !!getQueryParam("isHomePlayer", self) ) {
				try {
					videoPreselect = getQueryParam("homeVideoPlayer", top);
				} catch (e) { videoPreselect = null; }
			}
			if ( !!getQueryParam('jumpToVideo') && !!jumpToVideoMap[getQueryParam('jumpToVideo')] ) {
				videoPreselect = jumpToVideoMap[getQueryParam('jumpToVideo')];
			}

			initVideoPlayerChrome( videoPreselect );

			videoPlayerID = "vidPlayer"+rndID;

			selectedVideo = $('#mainMultiVideoPlayer .videosList li.selected a');

			vWidth = videoPlayerBox.attr('data-width');
			vHeight = videoPlayerBox.attr('data-height');
			if ( $("html").hasClass("smallWindow") ) {
				vWidth = "100%";
				vHeight = "100%";
			}

			multiVideoPlayer = jwplayer( videoPlayerID ).setup({
				width: vWidth,
				height: vHeight,
				skin: "/prismtv/jwplayer-darkgray/centurylink.zip",
				image: "/prismtv/images/videoPreview/video-poster-overview.jpg",
				backcolor: '000000',
				stretching: 'bestfit',
				debug: false,
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
						playerReady = true;
						selectedVideo = $('#mainMultiVideoPlayer .videosList li.selected a');
						$.publish( topics.CHANGE_VIDEO, [ selectedVideo, rndID ] );
					},
					onPlay: function () {
						var _trackvar = selectedVideo.attr("data-video-clicktrack");
						var _tr_tmp = getQueryParam("altTrack");
						if ( !!_tr_tmp ) {
							_trackvar = _trackvar.replace("what_is_tab", _tr_tmp);
						}
						$.publish( topics.PAUSE_HEADER_CYCLE, ["video"] );
						$.publish( topics.TRACKACTION, [ _trackvar ] );
					},
					onIdle: function () {
						$.publish( topics.RESUME_HEADER_CYCLE, ["video"] );
					},
					onPause: function () {
						$.publish( topics.RESUME_HEADER_CYCLE, ["video"] );
					},
					onComplete: function () {
						$.publish( topics.RESUME_HEADER_CYCLE, ["video"] );
					},
					onError: function (e) {
						if ( jwplayer( videoPlayerID ).renderingMode == 'html5' ) {
							firstVideoPlay = 1;
							selectedVideo = $('#mainMultiVideoPlayer .videosList li.selected a');
							$.publish( topics.CHANGE_VIDEO, [ selectedVideo, rndID ] );
						} else if ( jwplayer( videoPlayerID ).renderingMode == 'download' ) {
							jwplayer( videoPlayerID ).remove();
							$("html").addClass("no-js noVideo");
						}
					}
				}
			});
			if ( !jwplayer( videoPlayerID ).renderingMode ) {
				$.publish( topics.CHANGE_VIDEO, [ selectedVideo, rndID ] );
			}
		}
	}
	function initVideoPlayerChrome ( videoPreselect ) {
		if ( !playerChromeReady ) {

			/*
			var videoScroller = $("#mainMultiVideoPlayer .videosList").nanoScroller({
				contentClass: 'nanoContent',
				sliderClass: 'nanoSlider',
				paneClass: 'nanoPane',
				sliderMinHeight: 41,
				sliderMaxHeight: 41,
				alwaysVisible: true,
				preventPageScrolling: true,
				iOSNativeScrolling: true
			});
			*/

			videoInfoCycle = $('#mainMultiVideoPlayer .videoInfoList ul');
			videoInfoCycle.cycle({
				fx: "fade",
				speed: 200,
				timeout: 0,
				height: 60
			}).addClass('headCycleActive');

			$("#mainMultiVideoPlayer .videosList a").live('click', function (e) {
				e.preventDefault();
				firstVideoPlay = rndID;
				if ( !!playerReady ) $.publish( topics.CHANGE_VIDEO, [ $(this), rndID ] );
			});
			$("#mainMultiVideoPlayer .videoInfoList a.multiVideoLink").live('click', function (e) {
				e.preventDefault();
				firstVideoPlay = rndID;
				var videoLink = $("#mainMultiVideoPlayer .videosList a").filter('a[rel*="'+this.rel+'"]');
				if ( !!playerReady ) $.publish( topics.CHANGE_VIDEO, [ videoLink, rndID ] );
			});

			playerChromeReady = true;

			if ( !!videoPreselect ) {
				videoPreselectLink = $('#mainMultiVideoPlayer .videosList li a[rel="'+videoPreselect+'"]');
				if ( videoPreselectLink.length > 0 ) {
					$('#mainMultiVideoPlayer .videosList li.selected').removeClass("selected");
					videoPreselectLink.parents('#mainMultiVideoPlayer .videosList li').addClass("selected");

					try {
						if ( !!top && !!top.scrollToID ) {
							top.scrollToID("homeVideoAnchor", -30);
						}
					} catch (e) {}
					firstVideoPlay = rndID;
					$.publish( topics.CHANGE_VIDEO, [ videoPreselectLink, rndID ] );
				}
			}

			$('#mainMultiVideoPlayer .videosList').addClass('has-scrollbar');
			$('#mainMultiVideoPlayer').addClass('videoPlayerInitialized');
		}
	}
	function changeVideo ( newSelectedVideo, vpID ) {
		if ( ( !!jwplayer( videoPlayerID ) && !!jwplayer( videoPlayerID ).renderingMode && !playerReady ) || rndID !== vpID ) { return; }
		selectedVideo = newSelectedVideo;
		if ( !!multiVideoPlayer && !!selectedVideo ) {
			$('#mainMultiVideoPlayer .videosList li.selected').removeClass('selected');
			selectedVideo.parents('li').addClass('selected');

			var videoInfo = $( selectedVideo[0].hash.replace("video-",'video-info-') );

			$('#mainMultiVideoPlayer .videoInfoList li.selected').removeClass('selected');
			$(videoInfo).addClass('selected');

			var newSlideIndex = $('#mainMultiVideoPlayer .videoInfoList li').index(videoInfo);
			videoInfoCycle.cycle( newSlideIndex );

			multiVideoPlayer.stop();
			var videoConfig = getVideoName( selectedVideo );

			if ( !!videoConfig ) {
				multiVideoPlayer.stop();
				multiVideoPlayer.load( videoConfig );

				/*
				var buttonScroll = $('#mainMultiVideoPlayer .videosList li').index( $('#mainMultiVideoPlayer .videosList li.selected') );
				if ( buttonScroll <= 3 ) {
					buttonScroll = 1;
				} else {
					buttonScroll = 60;
				}
				$(".nano").nanoScroller({ scrollTop: buttonScroll });
				*/

				if ( firstVideoPlay === rndID ) {
					jwplayer( videoPlayerID ).play();
				}
			}
		}
	}
	function getVideoName ( selectedVideo ) {
		if ( !multiVideoPlayer ) {
			return null;
		}
		var video_filename = selectedVideo[0].rel;

		var videosettings = {
			title: ( selectedVideo.text() ),
			image: selectedVideo.attr("data-poster")
		}

		if ( jwplayer( videoPlayerID ).renderingMode == 'flash' ) {
			videosettings.file = video_filename;
			videosettings.provider = "rtmp";
			videosettings.streamer = path_rmtp;
		} else if ( jwplayer( videoPlayerID ).renderingMode == 'html5' ) {
			videosettings.levels = [
				{ file: (path_mp4 + video_filename + ".mp4"), image: selectedVideo.attr("data-poster") },
				{ file: (path_webm + video_filename + ".webm"), image: selectedVideo.attr("data-poster") }
			]
		} else {
			//VIDEO IS NOT SUPPORTED. REMOVE VIDEO PLAYER AND ALLOW CONTENT TO BE VISIBLE.
			videosettings = killVideoPlayer();
		}
		return videosettings;
	}
	function stopVideo ( selectedVideo ) {
		if ( !!multiVideoPlayer ) {
			multiVideoPlayer.pause(true);
		}
	}
	function killVideoPlayer () {
		playerReady = false;
		//multiVideoPlayer = null;
		$('html').addClass('noVideo');
		if ( !!usingParentPubsub ) {
			top.$('html').addClass('noVideo');
		}
		videoInfoCycle.cycle("destroy");
		$('#mainMultiVideoPlayer .videoInfoList ul').attr("style",null);
		$('#mainMultiVideoPlayer .videoInfoList ul li').attr("style",null);

		return null;
	}

	//SIMPLE PUB/SUB PATTERN IMPLEMENTATION PLUGGED IN TO JQUERY
	function initPubSub () {
		try {
			if (self !== top && !!top.$ && !!top.$.publish && !!top.$.subscribe && !!top.$.unsubscribe ) {
				$.publish = top.$.publish;
				$.subscribe = top.$.subscribe;
				$.unsubscribe = top.$.unsubscribe;
			} else {
				usingParentPubsub = false;
				throw new Error("Parent frame access failed.");
			}
		} catch (e) {
			var cache = {};
			$.publish = function(topic, args){
				if ( !args ) args = [];
				cache[topic] && $.each(cache[topic], function(){
					this.apply($, args);
				});
			};
			$.subscribe = function(topic, callback){
				if(!cache[topic]){
					cache[topic] = [];
				}
				cache[topic].push(callback);
				return [topic, callback]; // Array
			};
			$.unsubscribe = function(handle){
				var t = handle[0];
				cache[t] && $.each(cache[t], function(idx){
					if(this == handle[1]){
						cache[t].splice(idx, 1);
					}
				});
			};
		}
	}

	if ( self === top ) { initialized = true; }
	window.init = init;

	$(init);
})(window, $);

function getQueryParam (key, targframe) {
	if ( !targframe ) targframe = self;
	try {
		var a = targframe.location.search.slice(1).split("&"), GET = [];
		for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
		return GET[key] || null;
	} catch (e) {
		return null;
	}
}
