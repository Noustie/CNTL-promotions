(function (window) {
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})(window);

if ( !window.getQueryParam ){
	// GET QUERY STRING VALUE BY KEY
	function getQueryParam (key) {
		var a = location.search.slice(1).split("&"), GET = [];
		for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
		return GET[key] || null;
	}
}
var vidClass = "cntlVideoPlayer";
function loadVideoPlayer ( videoId, videoInfo, videoPLayerWrapper, autoPlay ) {
	removeCurrentVideo();

	var vidTXTID = 'video'+videoId+'_'+Math.round(Math.random()*1000000);
    
    videoPLayerWrapper.html( $('<div id="'+vidTXTID+'" class="'+vidClass+'" />') ); 	

    window.currentVideo = videoId;
    window.currentVideoTitle = videoInfo.title;
    window.currentVideoDesc = videoInfo.desc;

    var titleEle = $('<h2 class="vid-title" />').text( window.currentVideoTitle );
    var descEle = $('<div class="vid-desc" />').html( window.currentVideoDesc );

	videoPLayerWrapper.append(titleEle);
	videoPLayerWrapper.append(descEle);

	descEle.find("*").css({ visibility: "visible" });

    dropInVideoPlayer( vidTXTID, videoId, '640', '360', autoPlay );
}
function dropInVideoPlayer( playerID, videoId, vw, vh, autoPlay ) {
	window.cntlPlayer = new YT.Player( playerID, {
		width: vw,
		height: vh,
		videoId: videoId,
		rel: 0,
		origin: location.hostname,
		events: {
			"onStateChange": function (e) {
				//!!window.console && console.log(e);
			},
			"onReady": function (w) {
				!!window.console && console.log("playing: " + videoId);
				if ( !!autoPlay ) {
					window.cntlPlayer.playVideo();
				}
			}
		},
		playerVars: { 'wmode': 'opaque', rel: 0, origin: location.hostname }				
    });

	$("a.playingVideo").removeClass("playingVideo");
	$('a[href*="'+videoId+'"]').addClass("playingVideo");
}

function removeCurrentVideo () {
   	if ( !!window.cntlPlayer && !!window.cntlPlayer.stopVideo ) {
		window.cntlPlayer.stopVideo();
		window.cntlPlayer.destroy();
		window.cntlPlayer = null;
   	}
}

$(function () {
	$( '#pageCycle' ).on( {
	    "cycle-before": function (e) {
	    	if ( !!window.YTAPI && e.target.id == "pageCycle") {
	    		removeCurrentVideo();
	    	}
	    },
	    "cycle-after": function(e, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
	    	if ( e.target.id == "pageCycle") {
				var activeVid = $(incomingSlideEl).find(".playlist .cycle-slide-active .entries .cycle-slide-active a");
				if ( !!activeVid.length ) {
					var $section = activeVid.parents(".section");
					var videoId = activeVid[0].href.replace(/http[s]*\:\/\/www\.youtube\.com\/watch\?v\=/gi,"");
					var playerWrapper = $section.find(".videoPlayerHolder");

					var videoInfo = {
						title: activeVid.find(".vidTitle").text(),
						desc: activeVid.parent().find(".vidDesc").clone().html()
					}
					if ( !!window.YTAPI ) {
						loadVideoPlayer( videoId, videoInfo, playerWrapper, false );
					} else {
						var defferedVideo = function () {
							if ( !!window.YTAPI ) {
								loadVideoPlayer( videoId, videoInfo, playerWrapper, false );
							} else {
								$(window).delay(1000).queue( defferedVideo );
							}
						}
						defferedVideo();
					}
				} 
			}
		}
	});	
});
function onYouTubeIframeAPIReady() {
	window.YTAPI = true;

	$(window).load( function () {

		$("#pageCycle").on( "click", ".entries .cycle-slide a", function (e) {
			e.preventDefault();
			if ( !!window.YTAPI ) {
				var $section = $(this).parents(".section");
				var videoId = this.href.replace(/http[s]*\:\/\/www\.youtube\.com\/watch\?v\=/gi,"");
				var playerWrapper = $section.find(".videoPlayerHolder");

				var videoInfo = {
					title: $(this).find(".vidTitle").text(),
					desc: $(this).parent().find(".vidDesc").clone().html()
				}
				loadVideoPlayer( videoId, videoInfo, playerWrapper, true );
			} 
		});

		if ( !getQueryParam("x") || !!getQueryParam("x").match("home") ) {
			dropInVideoPlayer( "landingVid", $('#data-videoid').attr('data-videoid'), "380", "214", false );
		}
	});
}
