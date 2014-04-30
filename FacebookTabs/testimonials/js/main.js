var page_tracking = {
	pageName: "ctl|iptv|Facebook"
}
$(function () {

	var currentVideo = {};
	var url_template, playTrackLock, defaultClick = true, doScrollToVideo = false;


	function init() {
		url_template = '' + location.href.replace(location.search,'') + videoJSON;

		$("#main").on('click', '#videoWrapper a.fbshare', onFBShare );
		$("#main").on('click', "a.ctaBtn", trackCtaBtn );
		twttr.events.bind('tweet', trackTweet);

		$("#main").on('click', ".videoLinks li a", function (e) {
			e.preventDefault();
			onVideoBtnClick( this, defaultClick );
		});

		if ( !!deeplinkVideoID ) {
			var openLaunch = $('.videoLinks li a[href*="'+deeplinkVideoID+'"]');
			if ( !!openLaunch.length ) {
				doScrollToVideo = true;
				defaultClick = false;
				openLaunch.click();
			}
		} else {
			$('.videoLinks li a.selected').click();
			defaultClick = false;
		}
		videoPlayer.addEventListener( "onStateChange", onPlayerStateChange);
	}

	function onFBShare (e) {
		videoPlayer.pauseVideo();

		var $btn = $(this);
		var share = {
			method: 'feed',
			name: $btn.attr('data-videotitle'),
			link: $btn.attr('href'),
			picture: $btn.attr('data-videoposter'),
			caption: $btn.attr('href'),
			description: $btn.attr('data-videodesc')
		}
		if ( !!FB ) {
			FB.ui(share);
			var trackObj = { prop42: ("ctl|iptv|Facebook|share|video: " + currentVideo.videotrackingtitle) }
			eventTrack( this, trackObj, "Social Media Share" );
		}
		e.preventDefault();
	}
	function trackCtaBtn (e) {
		var trackObj = { eVar72: ("ctl|iptv|Facebook|Learn More"), prop43: ("ctl|iptv|Facebook|Learn More") }
		eventTrack( this, trackObj, "Social Media Link clicks" );
	}
	function trackTweet (event) {
		var trackObj = { prop42: ("ctl|iptv|Twitter|tweet|video: " + currentVideo.videotrackingtitle) }
		eventTrack( this, trackObj, "Social Media Tweet" );
	}
	function onVideoBtnClick (_this, isDefaultClick ) {
		if ( !!videoPlayer ) {
			if ( !!videoPlayer.i && !!videoPlayer.i.currentTime ) {
				currentVideo.currentTime = parseFloat( videoPlayer.i.currentTime, 10 ).toFixed( 2 );
			}
			if ( !!currentVideo.currentTime && videoPlayer.i.playerState !== YT.PlayerState.ENDED ) {
				onPlayerStateChange( { data: YT.PlayerState.ENDED } );
			}

			var $btn = $(_this);

			$(".videoLinks .selected").removeClass("selected");
			$btn.addClass("selected");

			currentVideo.currentTime = 0;
			currentVideo.duration = 0;
			currentVideo.videoID = _this.hash.replace("#","");
			currentVideo.videotitle = $btn.find(".vidThumbTitle").text();
			currentVideo.videotrackingtitle = currentVideo.videotitle.replace(/[^a-zA-Z0-9\s-]/g,"");
			currentVideo.videodesc = $btn.find(".vidThumbDesc").text();
			currentVideo.videoposter = $btn.attr('data-posterurl');
			currentVideo.videourl = url_template.replace( videoMatch, currentVideo.videoID );

			$("#videoWrapper a.fbshare").attr({
				"data-videotitle": currentVideo.videotitle,
				"data-videodesc": currentVideo.videodesc,
				"data-videoposter": currentVideo.videoposter,
				href: currentVideo.videourl
			});

			$("#videoWrapper .videoTitle").html( $btn.find(".vidThumbTitle").html() );

			var newTweetBtn = $("<a/>");
			newTweetBtn.attr({
				"data-text": currentVideo.videotitle,
				"data-count": "none",
				"href": 'http://twitter.com/share',
				"class": "twitter-share-button",
				"data-url": fixedEncodeURI( currentVideo.videourl )
			});

			$("#videoWrapper div.socialTWT").html( newTweetBtn );

			!!twttr && twttr.widgets.load();

			videoPlayer && videoPlayer.stopVideo && videoPlayer.stopVideo();
			newVideoPlayer( currentVideo.videoID )

			//videoPlayer && videoPlayer.loadVideoById && videoPlayer.cueVideoById(currentVideo.videoID);

			if ( !isDefaultClick ) {
				var trackObj = {
					eVar68:("ctl|iptv|Facebook|" + currentVideo.videotrackingtitle),
					prop53:("ctl|iptv|Facebook|" + currentVideo.videotrackingtitle)
				}
				eventTrack ( _this, trackObj, ("Video Tracking - " + currentVideo.videotrackingtitle) );
			}

			if ( !!doScrollToVideo ) {
				if ( FB && FB.Canvas ) {
					FB.Canvas.getPageInfo(function(pageInfo){
						$({y: pageInfo.scrollTop}).animate(
							{y: 370},
							{
								duration: 1000,
								step: function(offset){
									FB.Canvas.scrollTo(0, offset);
								},
								complete: function () {
									//videoPlayer && videoPlayer.loadVideoById && videoPlayer.cueVideoById(videoID);
								}
							}
						);
					});
				}
			}

			doScrollToVideo = true;
		}
	}

	function newVideoPlayer ( videoID ) {
		if ( !!videoPlayer ) {
			videoPlayer.destroy();
		}
		videoPlayer = new YT.Player('ytVideoPlayer', {
			width: '514',
			height: '292',
			videoId: videoID,
			rel: 0,
			origin: location.hostname,
			modestbranding: 1,
			controls: 2,
			events: {
				"onStateChange": onPlayerStateChange,
				"onReady": function () {
					//videoPlayer.playVideo();
				}
			},
			playerVars: { 'wmode': 'opaque', rel: 0, origin: location.hostname,	modestbranding: 1, controls: 2 }
		});

	}

	function onPlayerStateChange (event) {
		if ( !!event && event.data !== undefined && ( event.data === YT.PlayerState.PLAYING || event.data === YT.PlayerState.ENDED ) ) {
			var trackObj = {
				eVar68:("ctl|iptv|Facebook|" + currentVideo.videotrackingtitle),
				prop53:("ctl|iptv|Facebook|" + currentVideo.videotrackingtitle)
			}
			var linkName = "";
			if ( event.data === YT.PlayerState.PLAYING && playTrackLock != currentVideo.videotrackingtitle ) {
				playTrackLock = currentVideo.videotrackingtitle;
				currentVideo.duration = parseFloat( videoPlayer.i.duration, 10 ).toFixed( 2 );
				trackObj.events = "event50";
				trackObj.event50 = ( "ctl|iptv|Facebook|" + currentVideo.videotrackingtitle );
				linkName = "Video Tracking -- Video View";
			} else if ( event.data === YT.PlayerState.ENDED ) {
				playTrackLock = null;
				var _time = currentVideo.currentTime;
				if (!_time) _time = currentVideo.duration;
				trackObj.events = "event49";
				trackObj.event49 = ( "ctl|iptv|Facebook|" + currentVideo.videotrackingtitle + "," + _time );
				linkName = "Video Tracking -- Video Time Played";
			}
			eventTrack ( videoPlayer, trackObj, linkName );
		}
	}

	function eventTrack ( ele, trackObj, linkName ) {
		// s_account MUST be set earlier in page or script will abort
		// trackObj param should be formatted as below:
		// { eVar68:"ctl|iptv|video name", prop53:"ctl|iptv|video name", events:"event49,event50", event49:"ctl|iptv|I Love Whole Home DVR,30" }

		if ( !!s_account ) var s=s_gi(s_account);
		else return;

		if ( !!s.pageName ) {
			delete s.pageName;
		}


		var linkTrackEvents = [];
		var linkTrackVars = [];
		var linkType = "o";

		if ( !!trackObj )  {

			if( !!trackObj["events"] ) {
				if ( !linkTrackVars.join(",").match("events") ) { // don't add "events" more than once
					linkTrackVars.push("events");
				}

				var eventList = trackObj["events"].split(",");
				for ( var evt in eventList ) {
					if ( !linkTrackEvents.join(",").match( eventList[evt] ) ) {
						linkTrackEvents.push( eventList[evt] );
					}
					if ( !!trackObj[ eventList[evt] ] ) {
						linkName = trackObj[ eventList[evt] ];
					}
				}
			}

			for (var i in trackObj) {
				// HANDLE EVARS AND PROP
				if ( i.match("eVar") || i.match("prop") ) {
					if ( !linkTrackVars.join(",").match(i) ) linkTrackVars.push( i );
					s[i] = trackObj[i];
				}
			}
		}
		var getUniqueArray = function ( srcArr ) {
			var a = srcArr;
			for(var i=0; i<a.length; ++i) {
				for(var j=i+1; j<a.length; ++j) {
					if(a[i] === a[j])
						a.splice(j, 1);
				}
			}
			return a;
		}

		var s_linkTrackEvents = linkTrackEvents.sort().join(",");
		var s_linkTrackVars = linkTrackVars.sort().join(",");


		var s_events = /*( !!s.events ) ? s.events.split(",") :*/ [];
		s_events = s_events.concat( linkTrackEvents );
		s_events = getUniqueArray( s_events ).sort().join(",");

		// Apply new variables to event object
		if ( !!s_linkTrackEvents ) s.linkTrackEvents = s_linkTrackEvents;
		s.linkTrackVars = s_linkTrackVars;
		s.events = s_events;

		s.tl(true, linkType, linkName);
	}

	function fixedEncodeURI(str) {
		return encodeURI(str).replace(/%25/g, '%').replace(/%5B/g, '[').replace(/%5D/g, ']');
	}

	function verifyDependencies() {
		if ( !!window.isready.YT && !!window.isready.FB && !!window.twttr && !!window.YT ) {
			init();
		} else {
			setTimeout( verifyDependencies, 200 );
		}
	}

	verifyDependencies();
})
