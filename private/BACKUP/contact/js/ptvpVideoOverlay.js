(function PtvpVideoOverlay (window, $) {

	var mainClickTrackingHandle = "flashTrack",
		videoPlayerID = 'videoPlayer',
		activeVideoNav = 'activeSlide',
		currentVideoHash = null;


	// VIDEO TEAM LOGIC
	var initTeam = function () {
		$('.nojs').removeClass('nojs');
		$('body').addClass('showVideoPlayer');

		$('.launchVid a').live('click', function (e) {
			$('body').addClass('showVideoPlayer');
			//$('#'+videoPlayerID).show();
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
	var showVideoEndCard = function () {
		jwplayer( videoPlayerID ).stop();
		jwplayer( videoPlayerID ).remove();

		$('#'+videoPlayerID).hide();

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
	};


	var initVideoPlayer = function (hash) {

		var vidLinkObj = $('#tmlVideoNav li a[href$="'+hash+'"]');
		if ( !!!vidLinkObj.length ) return;

		vidLinkObj.parent().siblings().removeClass(activeVideoNav);

		jwplayer( videoPlayerID ).setup({
			title: ("Video: "+vidLinkObj.text()),
			width: vidLinkObj.attr('data-width'),
			height: vidLinkObj.attr('data-height'),
			skin: "./jwplayer/centurylink.zip",
			image: vidLinkObj.attr('data-poster'),
			backcolor: 'ffffff',
			stretching: 'fill',
			modes: [
				{
					type: 'flash',
					src: './jwplayer/player.swf',
					config: {
						autostart: eval( escape( vidLinkObj.attr('data-autoplay') ) ),
						file: vidLinkObj.attr('data-flv'),
						provider: "rtmp",
						streamer: vidLinkObj.attr('data-rtmp')
					}
				},
				{
					type: "html5",
					config: {
						levels: [
							{ file: vidLinkObj.attr('data-html5') },
							{ file: vidLinkObj.attr('data-html5').replace(/mp4/gi, 'webm') }
						]
					}
				}
			],
			events: {
				onReady: function () {
					$('body').addClass('hasVideoPlayer');
					$('body').addClass('showVideoPlayer');
				},
				onPlay: function () {
					$('.noVideoPlayer').removeClass('noVideoPlayer');
				}
			}
		});

		vidLinkObj.parent().addClass(activeVideoNav);
		currentVideoHash = hash;
	};

	// Utilities
	this.getQueryParam = function (key) {
		var a = location.search.slice(1).split("&"), GET = [];
		for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
		return GET[key] || null;
	};

	// Flash Tracking Handle
	this.flashTrackingHandler = function (arguments) {
		// handle tracking behavior here...
		var track = window[mainClickTrackingHandle];
		if ( !!track ) track(arguments[0],arguments[1],arguments[2],arguments[3]);
	};

	$(window).load( initTeam );

	window.PtvpVideoOverlay = this;
	return this;
})(window, $);
