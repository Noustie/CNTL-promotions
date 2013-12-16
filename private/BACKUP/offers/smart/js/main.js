function ActionDeferr (_allowDebug) {
	var actionQueue = [];
	var actionDeferr = null;
	var elementWatchList = "html,body,div,span,li,a";
	var allowDebug = _allowDebug;
	
	function DefferedAction ( args, callback ) {
		this.args = args;
		this.callback = callback;
		DefferedAction.prototype.execute = function () {
			if ( !!this.callback && !!this.callback.apply ) {
				this.callback.apply( window, this.args );
				!!allowDebug && !!window.console && console.log("deferred execute: ", this.args );
			}
		}
	}
	function isAnythingAnimating () {
		var v = false;
		//CHECK FOR ANIMATING JQUERY ELEMENTS
		if ( !!jQuery && jQuery(elementWatchList).is(":animated") ) {
			v = true;
			return v;
		}
		//CHECK FOR ANIMATING TWEENLITE/TWEENMAX ELEMENTS
		var GS = null;
		if ( !!window.TweenMax ) { GS = TweenMax }
		if ( !!window.TweenLite ) { GS = TweenLite }
		if ( !GS ) { return v; }
		var tweens = TweenMax.getAllTweens();
		for (var i = 0, len = tweens.length; i < len; i++ ) {
			if ( !tweens[i].paused ) {
				v = true;
				return v;
			}
		}
		return v;
	}
	function executeQueue() {
		if ( !!actionQueue.length ) {
			if( !isAnythingAnimating() ) {
				while ( !!actionQueue.length ) {
					actionQueue.pop().execute();
				}
			} else {
				if ( !!actionDeferr ) {
					clearTimeout( actionDeferr );
					actionDeferr = null;
				}
				actionDeferr = setTimeout( deferredHandle, 333 );
				!!allowDebug && !!window.console && console.log("deferred waiting: " + actionQueue.length );
			}
		}
	}
	function deferredHandle () {
		actionDeferr = null;
		executeQueue();
	}
	ActionDeferr.prototype.enqueueAction = function enqueueAction( callback, args ) {
		actionQueue.push( new DefferedAction( args, callback ) );
		if ( !!actionDeferr ) {
			clearTimeout( actionDeferr );
			actionDeferr = null;
		}
		actionDeferr = setTimeout( deferredHandle, 333 );
	}
}
window.Deferr = new ActionDeferr(true);

$(function(){

	function trackClick ( clicktrack, ele) {
		Deferr.enqueueAction( eventTrack, [ ele, { eVar30: clicktrack }, clicktrack ] );
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

		s.templtv = s.linkTrackVars;
		s.templte = s.linkTrackEvents;		
		s.manageVars( 'clearVars' );

		var linkTrackEvents = [],
			linkTrackVars = [],
			linkType = "o";

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

		if(s.templtv) s.linkTrackVars=s.templtv;
		if(s.templte) s.linkTrackEvents=s.templte;
	}	
	function onPlayerStateChange (event) {
		if ( !!event && event.data !== undefined && ( event.data === YT.PlayerState.PLAYING || event.data === YT.PlayerState.PAUSED ) ) {

			var trackObj = {
				eVar68: ( "ctl|rsd|Smart Home" + window.currentVideo ),
				prop53: ( "ctl|rsd|Smart Home" + window.currentVideo )
			}
			var linkName = "";

			if ( event.data === YT.PlayerState.PLAYING && window.playTrackLock != window.currentVideo ) {
				window.playTrackLock = window.currentVideo;
				trackObj.events = "event50";
				trackObj.event50 = ( "ctl|rsd|Smart Home" + window.currentVideo );
				linkName = "Video is Playing -- Tracked";
			} else if ( event.data === YT.PlayerState.PAUSED ) {
				window.playTrackLock = null;
				var _time = window.player_time;
				if ( !_time ) _time = window.player_dur;
				trackObj.events = "event49";
				trackObj.event49 = ( "ctl|rsd|Smart Home" + window.currentVideo + "," + _time );
				linkName = "Video has been Paused -- Tracked";
			}

			Deferr.enqueueAction( eventTrack, [ videoPlayer, trackObj, linkName ] );
		}
	}

	window.eventTrack = eventTrack;
	window.onPlayerStateChange = onPlayerStateChange;

	tl_demo = new TimelineMax({paused: true});
	tl_start = new TimelineMax({paused: true});

	$("body").on("click", "a[clicktrack]", function () {
		Deferr.enqueueAction( eventTrack, [ this, { eVar30: $(this).attr("clicktrack") }, $(this).attr("clicktrack") ] );
	});

	var alldots = $( ".tipDot1,.tipDot2,.tipDot3,.tipDot4,.tipDot5,.tipDot6,.tipDot7,.tipDot8" );

	if ( !!document.createElement('canvas').getContext && !!document.createElement('canvas').getContext('2d')) {
		//TIMELINES FOR MODERN BROWSERS
		tl_start.to( $(".lady"), 0.5, { alpha:1, ease:Power2.easeOut })
				.from( $(".lady"), 1.7, { left:"300px", ease:Power2.easeInOut }, 0.4)
				.to($(".anim2 .anim2-s1"), 0.7,{ left:"0px", opacity: 1, ease:Power2.easeInOut}, .4)
				.to($(".anim2 .anim2-s2"), 0.7,{ left:"0px", opacity: 1, ease:Power2.easeInOut}, .5)
				.to($(".anim2 .anim2-s3"), 0.7,{ left:"0px", opacity: 1, ease:Power2.easeInOut}, .6)
				.to($(".anim2 .anim2-s4"), 0.7,{ left:"0px", opacity: 1, ease:Power2.easeInOut}, .7)
				.to($(".anim2 .anim2-s5"), 0.7,{ left:"0px", opacity: 1, ease:Power2.easeInOut}, .8)
				.to($(".anim2 .anim2-s6"), 0.7,{ left:"0px", opacity: 1, ease:Power2.easeInOut}, .8);
		
		tl_demo.to( $(".lady"), 0.5, { left:"-200px", scale: 1.3, alpha:0, ease: Power2.easeInOut}, 0)
		 		.to( $(".anim2"), 0.5, { left:"700px", scale: 1.3, alpha:0, ease: Power2.easeInOut}, 0)
		 		.to( $(".lady, .anim2"), 0.1, { display:"none"}, 0.7)
				.to($(".roomblur"), 0.5, { alpha:0 }, 0.3)
				.to($(".roomblur"), 0.1, { display:"none" }, 0.8)
				.to($(".tips"), 0.1, { display:"block" }, 0.8)
		.staggerFromTo(alldots,
						1.5,
						{alpha:0, scale:0.1, rotationY:0, z:-50},
						{alpha:1, scale:1, rotationY:360, z:0, ease:Back.easeOut }, 
						.1)
	} else {
		//TIMELINES FOR IE 8
		tl_start.to( $(".lady"), 0.5, { alpha:1, ease:Power2.easeOut })
				.from( $(".lady"), 1.7, { left:"300px", ease:Power2.easeInOut }, 0.4)
				.to($(".anim2 .anim2-s1"), 0.7,{ left:"0px", opacity: 1, ease:Power2.easeInOut}, .4)
				.to($(".anim2 .anim2-s2"), 0.7,{ left:"0px", opacity: 1, ease:Power2.easeInOut}, .5)
				.to($(".anim2 .anim2-s3"), 0.7,{ left:"0px", opacity: 1, ease:Power2.easeInOut}, .6)
				.to($(".anim2 .anim2-s4"), 0.7,{ left:"0px", opacity: 1, ease:Power2.easeInOut}, .7)
				.to($(".anim2 .anim2-s5"), 0.7,{ left:"0px", opacity: 1, ease:Power2.easeInOut}, .8)
				.to($(".anim2 .anim2-s6"), 0.7,{ left:"0px", opacity: 1, ease:Power2.easeInOut}, .8);
		
		tl_demo.to( $(".lady"), 0.7, { left:"-500px", alpha:1, ease: Power2.easeInOut}, 0)
		 		.to( $(".anim2"), 0.7, { left:"1400px", alpha:1, ease: Power2.easeInOut}, 0)
		 		.to( $(".lady, .anim2"), 0.1, { display:"none"}, 0.7)
				.to($(".roomblur"), 0.5, { alpha:1 }, 0.3)
				.to($(".roomblur"), 0.1, { display:"none" }, 0.8)
				.to($(".tips"), 0.1, { display:"block" }, 0.8)
				.staggerFromTo(alldots,
						1.5,
						{ alpha:1 },
						{ alpha:1, ease:Back.easeOut }, 
						.1)
	}
			
	var tl_shimmer = TweenMax.to( $(".shimmer"), 1, { backgroundPosition: "180px 6px", repeatDelay: 3, repeat: -1 } );
	$(".shimmer").mouseover(function(){
		tl_shimmer.play(0.2);
	});
	var tl_blushimmer = TweenMax.to( $(".blue-shimmer"), .85, { backgroundPosition: "180px 0px", repeatDelay: 3, repeat: -1 } );
	$(".blue-shimmer").mouseover(function(){
		tl_blushimmer.play(0.2);
	});

	if ( !!document.createElement('canvas').getContext && !!document.createElement('canvas').getContext('2d')) {
		var tl_iconshimmer;
		function onShimmerComplete(){
			var randomshimmer = $(".icon-shimmer"+ Math.floor(Math.random() * 8 +1));
			tl_iconshimmer =  new TimelineMax({onComplete:onShimmerComplete, delay: 3});
			tl_iconshimmer.to( randomshimmer, .3, { opacity:1, rotationY:360, transformOrigin:"50% 50%"})
				  		 .to( randomshimmer, .3, { opacity:0, rotationY:0, transformOrigin:"50% 50%"});
		}
	}

	//starts the explore timeline, and stops the shimmer timeline
	$("a.btn-animate, #video-btn").click( function( e ){
		e.preventDefault();
		tl_demo.play();
		tl_shimmer.pause();
		if ( !!document.createElement('canvas').getContext && !!document.createElement('canvas').getContext('2d')) {
			onShimmerComplete();
		}
		//adds active class to "VIDEOS" button
		$('ul#nav li a').removeClass('active');
	  	$("#video-btn").addClass('active');
	});
	//Demo area tooltip controls
	$(".tt-point-left").on({ 
		click: function (e){
			var cycleToVideoPlayer = $('#slideshow .cycle-slideshow > div a[href*="'+ this.hash +'"].video-pop-up').eq(0);
			cycleToVideoPlayer.click();
			e.preventDefault();
		},
		mouseover: function (e) {
			var tip = $(this).children(".tooltip")[0];
			if ( !!document.createElement('canvas').getContext && !!document.createElement('canvas').getContext('2d')) {
				TweenMax.to( this, .4, { zIndex: 100 } );
				TweenMax.to( tip, .4, { left:"76px", alpha:1, overwrite:1, display:'block' } );
			} else {
				TweenMax.to( this, .4, { zIndex: 100 } );
				TweenMax.to( tip, .4, { left:"76px", alpha:1, overwrite:1, display:'block' } );
			}
			e.preventDefault();
		},
		mouseout: function (e) {
			var tip = $(this).children(".tooltip")[0];
			if ( !!document.createElement('canvas').getContext && !!document.createElement('canvas').getContext('2d')) {
			TweenMax.to(this, .4, { zIndex: 10 } );
			TweenMax.to(tip, .4, { left:"85px", alpha:0, overwrite:1, onCompleteParams:[tip], 
				onComplete: function (tip) {
				TweenMax.set(tip, { display:"none", alpha: 0 } );
			}});
			} else {
			TweenMax.to(this, .4, { zIndex: 10 } );
			TweenMax.to(tip, .4, { left:"85px", alpha:0, overwrite:1, onCompleteParams:[tip], 
				onComplete: function (tip) {
				TweenMax.set(tip, { display:"none", alpha: 0 } );
			}});			
			}
			e.preventDefault();
		}
	});
	//Demo area tooltip controls
	$(".tt-point-right").on({ 
		click: function (e){
			var cycleToVideoPlayer = $('#slideshow .cycle-slideshow > div a[href*="'+ this.hash +'"].video-pop-up').eq(0);
			cycleToVideoPlayer.click();
			e.preventDefault();
		},
		mouseover: function (e) {
			var tip = $(this).children(".tooltip")[0];
			TweenMax.to( this, .4, { zIndex: 100 } );
			TweenMax.to( tip, .4, { left:"-245px", opacity:1, overwrite:1, display:'block' } );
			e.preventDefault();
		},
		mouseout: function (e) {
			var tip = $(this).children(".tooltip")[0];
			TweenMax.to(this, .4, { zIndex: 10 } );
			TweenMax.to(tip, .4, { left:"-250px", opacity:0, overwrite:1, onCompleteParams:[tip], 
				onComplete: function (tip) {
				TweenMax.set(tip, { display:"none", opacity: 0 } );
			}} );
			e.preventDefault();
		}
	});

	var videoPlayer = $('<div id="video" />'); 
    //var videoPlayerModal = $('<div id="videoModal" />'); 

	function loadVideoPlayer (thishash, vidApiID, videoPLayerEle) {
       	if ( !!window.player ) {
			if ( !!window.player.getDuration ) {
				if ( !!window.player.getCurrentTime() ) {
					window.player_time = parseFloat( window.player.getCurrentTime(), 10 ).toFixed( 2 );
				} else {
					window.player_time = null;
				}
				window.player_dur = parseFloat( window.player.getDuration(), 10 ).toFixed( 2 );
			}

       		onPlayerStateChange( { data: YT.PlayerState.PAUSED } );
       		//window.player.pauseVideo();
       		window.player.stopVideo();
       		window.player.destroy();
       	}
        
        $(thishash + ' .video-player').html(videoPLayerEle); 	

        window.currentVideo = $(thishash + ' .video-player').attr("data-vidtrack");

   		window.player = new YT.Player( vidApiID, {
			onStateChange: onPlayerStateChange,
			width: '640',
			height: '360',
			videoId: $(thishash + ' .video-player').attr("data-vidsrc"),
			rel: 0,
			origin: location.hostname,
			events: {
				"onStateChange": onPlayerStateChange,
				"onReady": function () {
					//window.player = newplayer;
				}
			},
			playerVars: { 'wmode': 'opaque', rel: 0, origin: location.hostname }				
        });
	}

	//handles loading youtube src into iframe
	//var videoPlayer = $('<iframe width="640" height="360" id="video" frameborder="0" allowfullscreen />'); 
	$("#slideshow").on("click", ".video-pop-up", function(e){ 
		var thishash = this.hash; 

        $(".videobox").stop(true,false).fadeOut(500);  
        $(thishash).stop(true,false).fadeIn(500, function(){
        	loadVideoPlayer(thishash, "video", videoPlayer);
        });  

        $("#slideshow .vidpopup-active").removeClass("vidpopup-active"); 
        $('#slideshow a[href*="'+thishash+'"]').parent("div").addClass("vidpopup-active");          
        $('html, body').stop(true,false).animate({scrollTop:0}, 'slow').delay(1000);  
        e.preventDefault();
    });      
    
    //handles loading youtube src into iframe for colorbox
	$("a.inline").click(function(e){ 
        e.preventDefault();  
		var thishash = this.hash; 
       	loadVideoPlayer(thishash, "video", videoPlayer);
    });  
     
    $("a.close-it").click(function(e){ 
         e.preventDefault();           
         $(".videobox").fadeOut(500).delay(2000); 
         if ( !!window.player ) {
             window.player.pauseVideo();
        }
        $("#slideshow .vidpopup-active").removeClass("vidpopup-active");
    });
    TweenLite.defaultEase = Linear.easeNone;
	//beneftis page timeline and controls
	benefitsTl = new TimelineMax({paused:true});
	benefitsTl.to($(".benefits .dot-bar"), 1, {top:-100, ease:Linear.easeNone}, "label1")
			.to($(".benefits .floater"), 1, {backgroundPosition: "-30px -691px", ease:Linear.easeNone}, "label1")
			.to($(".benefits .slow-bg"), 1, {backgroundPosition: "-60px -250px", ease:Linear.easeNone}, "label1")
			.to($(".benefits .scroll-height.tile1"), 1, {top:-458, ease:Linear.easeNone}, "label1")
			.to($(".benefits .scroll-height.tile1"), .3, {opacity:0, ease:Linear.easeNone}, "label1")
			
			.to($(".benefits .scroll-height.tile2"), 1, {top:-515, ease:Linear.easeNone}, "label1")
			.to($(".benefits .scroll-height.tile2"), .4, {opacity:1, ease:Linear.easeNone}, "label1")
			
			.to($(".benefits .scroll-height.tile2"), 1, {top:-960, ease:Linear.easeNone}, "label2")
			.to($(".benefits .scroll-height.tile2"), .4, {opacity:0, ease:Linear.easeNone}, "label2")
			
			.to($(".benefits .scroll-height.tile3"), 1, {top:-1027, ease:Linear.easeNone}, "label2")
			.to($(".benefits .scroll-height.tile3"), .4, {opacity:1, ease:Linear.easeNone}, "label2")
			
			.to($(".benefits .floater"), 1.1, {backgroundPosition: "-30px -1304px", ease:Linear.easeNone},"label2")
			.to($(".benefits .slow-bg"), 1.1, {backgroundPosition: "-60px -360px", ease:Linear.easeNone}, "label2")
			.to($(".benefits .dot-bar"), 1.1, {top:-23, ease:Sine.easeInOut}, "label2")
			
			.addLabel("label3");
			var benefitsTlTotalDuration = benefitsTl.totalDuration(); 	
				
	$(".security").click(function(e){
		e.preventDefault();
	   benefitsTl.tweenTo("label1", {ease:Sine.easeInOut});
	});
	$(".emanagement").click(function(e){
		e.preventDefault();
	   benefitsTl.tweenTo("label2", {ease:Sine.easeInOut});
	});
   	$(".convenience").click(function(e){
   		e.preventDefault();
	   benefitsTl.tweenTo("label3", {ease:Sine.easeInOut});
	});
	
	//plans timeline and controls
	plansTl = new TimelineMax({paused:true});
	plansTl.to($(".plans .dot-bar"), 1, {top:-91, ease:Linear.easeNone}, "label1")
		   .to($(".plans .lady-in-corner"), .8, {right:-240, top:-200, opacity:0, ease:Linear.easeNone}, "label1")
		   .to($(".plan-animate-container.tile1 h3"), .2, { opacity:0, ease:Linear.easeNone}, "label1")
		   .to($(".plan-animate-container.tile1 p"), .2, { opacity:0, ease:Linear.easeNone}, "label1")
		   
		   .to($(".plan-animate-container.tile1 h3"), .8, { top:-250, ease:Linear.easeNone}, "label1")
		   .to($(".plan-animate-container.tile1 p"), .9, { top:-250, ease:Linear.easeNone}, "label1")
		   .to($(".plans .slow-bg"), 1, {css:{backgroundPosition: "-60px -250px"}, ease:Linear.easeNone}, "label1")

		   //tile2 animate on screen
		   .to($(".price-grid"), .3, {opacity:0, ease:Linear.easeNone}, "label1")
		   .to($(".price-grid"), 1.4, {top:-1000, ease:Linear.easeNone}, "label1")
		   .to($(".plan-animate-container.tile2"), .8, {top:-572, opacity:1, ease:Linear.easeNone}, "label1")
		   .to($(".plan-tile2-a1"), .8, {top:-303, opacity:1, autoAlpha:1, ease:Linear.easeNone}, "label1")
		   .to($(".plan-tile2-a2"), .8, {top:-1228, opacity:1, autoAlpha:1, ease:Linear.easeNone}, "label1")
		   .to($(".plan-tile2-a4"), .6, {opacity:1, delay:0.7, autoAlpha:1, bezier:{type:'quadratic', values:[{x:0, y:0},{x:100, y:0},{x:200, y:54}]}, ease:Linear.easeNone}, "label1")
		   .to($(".plan-tile2-a3"), .6, {opacity:1, delay:0.7, autoAlpha:1, bezier:{type:'quadratic', values:[{x:0, y:0},{x:-70, y:0},{x:-105, y:-14}]}, ease:Linear.easeNone}, "label1")
		   
		   //tile2 animate off screen
		   .to($(".plan-tile2-a1"), .6, {top:-124, opacity:0, autoAlpha:0, ease:Linear.easeNone}, "label2")
		   .to($(".plan-tile2-a2"), .6, {top:-1848, opacity:0, autoAlpha:0, ease:Linear.easeNone}, "label2")
		   .to($(".plan-tile2-a4"), .3, {opacity:0, autoAlpha:0, bezier:{type:'quadratic', values:[{x:200, y:54},{x:100, y:-50},{x:0, y:-100}]}, ease:Power1.easeOut}, "label2")
		   .to($(".plan-tile2-a3"), .3, {opacity:0, autoAlpha:0, bezier:{type:'quadratic', values:[{x:-105, y:-14},{x:100, y:0},{x:0, y:0}]}, ease:Power1.easeOut}, "label2")
		   .to($(".plan-animate-container.tile2"), .3, {opacity:0, ease:Linear.easeNone}, "label2")				
		   .to($(".plan-animate-container.tile2"), .8, {top:-832, ease:Linear.easeNone}, "label2")
		   
		   //tile3 animate on screen
		   .to($(".plan-animate-container.tile3"), 1, {top:-1761, opacity:1, ease:Linear.easeNone}, "label2")
		   .to($(".plan-tile3-a1"), .9, {top:-731, opacity:1, autoAlpha:1, ease:Linear.easeNone}, "label2")
		   .to($(".plan-tile3-a2"), 1, {height:720, delay:0.7, opacity:1, ease:Linear.easeNone}, "label2")
		   .to($(".plan-tile3-a4"), .8, {top:310, opacity:1, delay:0.4, ease:Linear.easeNone}, "label2")
		   .to($(".plan-tile3-a3"), .8, {top:407, opacity:1, delay:0.7, ease:Linear.easeNone}, "label2")
		   .to($(".plan-tile3-a5"), .8, {top:510, opacity:1, delay:0.9, ease:Linear.easeNone}, "label2")
		   .from($(".intro-offer-equipment"), .6, {right:-350, opacity:1, delay:0.6, ease:Linear.easeNone}, "label2")
		   .from($(".secondary-addons"), .6, {right:-350, opacity:1, delay:0.6, ease:Linear.easeNone}, "label2")
		   .to($(".plans .slow-bg"), 1.3, {css:{backgroundPosition: "-60px -680px"}, ease:Linear.easeNone}, "label2")
		   .to($(".plans .dot-bar"), 1, {top:-24, ease:Linear.easeNone}, "label2")
		   .addLabel("label3");
		   var plansTlTotalDuration = plansTl.totalDuration(); 
	
	$(".pricing").click(function(e){
		e.preventDefault();
	   plansTl.tweenTo("label1", {ease:Sine.easeInOut});
	});
	$(".installation").click(function(e){
		e.preventDefault();
	   plansTl.tweenTo("label2", {ease:Sine.easeInOut});
	});
   	$(".equipment").click(function(e){
   		e.preventDefault();
	   plansTl.tweenTo("label3", {ease:Sine.easeInOut});
	});
	
	//mininav active states
	$('.benefits-content .mini-nav ul li a').click(function(){
	  $('.benefits-content .mini-nav ul li').removeClass('mini-nav-active');
	  $(this).parent().addClass('mini-nav-active');
  	});      
  	$('.plans-content .mini-nav ul li a').click(function(){
	  $('.plans-content .mini-nav ul li').removeClass('mini-nav-active');
	  $(this).parent().addClass('mini-nav-active');
  	}); 
	
	//Scroll navigation
	$("a#demo-btn").bind('click', { id: '#demo' }, scroller);
	$("a#video-btn").bind('click', { id: '#demo' }, scroller);
	$("a#benefits-btn").bind('click', { id: '#benefits' }, scroller);
	$("a#plans-btn").bind('click', { id: '#plans' }, scroller);
	$("a#contact-btn").bind('click', { id: '#contact' }, scroller);
	$("a#support-btn").bind('click', { id: '#support' }, scroller);
	function scroller(event){
		var scrollYPos = $(event.data.id).offset().top;
		var windowScrollTop = $(window).scrollTop();
		var dur = Math.abs((scrollYPos - windowScrollTop) / 700);
		$('html,body').animate({scrollTop: scrollYPos }, dur*1000);
		event.preventDefault();
	}
	
	$(window).scroll(function(){
		var demoHeight = $('.demo').height() + $('.videoNav').height();
		var windowTop = $(window).scrollTop();
		if(windowTop >= demoHeight){
			$('ul#nav li.update-cta').addClass("nav-li-cta");
			$('ul#nav li.update-cta a#video-btn').addClass("wht-txt");
		}else{
			$('ul#nav li.update-cta').removeClass("nav-li-cta");
			$('ul#nav li.update-cta a#video-btn').removeClass("wht-txt");
		}
	});
	
	$("a.inline").colorbox({inline:true, width:"1020px"});
	$("a.intro-offer").colorbox({inline:true, width:"780px"});
	$("a.intro-offer-equipment").colorbox({inline:true, width:"780px"});
	$("a.installation-modal").colorbox({inline:true, width:"780px"});
	$("a.site-disclaimer").colorbox({inline:true, width:"1020px"});
	$("a.customized").colorbox({inline:true, width:"1020px"});

	$(".intro-offer, .customized, .installation-modal").click(function(e){
		$("button#cboxClose").addClass("wht-txt"); 
		$(document).bind('cbox_closed', function(){
			$("button#cboxClose").removeClass("wht-txt");
		});
		e.preventDefault();
	});

  	//kill playing of youtube videos in demo area if they are currently playing when colorbox is initiated
	$(".inline").click(function(e){
		$(".videobox").stop(true,false).fadeOut(500);
		videoPlayer.attr('src', '');
		e.preventDefault(); 
	});

	$("a.explore-all-features-btn").click(function(e) {
    	$.colorbox.close(); 
    	e.preventDefault();
    	$('html, body').stop(true,false).delay(500).animate({scrollTop:0}, 'slow');
    	if(tl_demo._totalDuration <= 3){
    		tl_demo.delay(1).play();
    	}
    });

    //Main nav active states	
  	$('ul#nav li a').click(function(){
	  $('ul#nav li a').removeClass('active');
	  $(this).parent().children().addClass('active');
  	}); 

  	//If colorbox is active, and a navigation link is clicked, close colorbox
    $("#demo-btn, #video-btn, #benefits-btn, #plans-btn, #contact-btn, #support-btn").click(function(e){
    	$.colorbox.close(); 
    	e.preventDefault();
    });

    //Home button behavior
	$("#demo-btn").click(function(e){
    	$.colorbox.close(); 
    	$(".videobox").fadeOut(500).delay(2000); 
         if ( !!window.player ) {
             window.player.pauseVideo();
        }
        $("#slideshow .vidpopup-active").removeClass("vidpopup-active");
        tl_demo.reverse(0);
        tl_shimmer.restart();
    });

	//Video button behavior
    $("#video-btn").click(function(e){
		$.colorbox.close(); 
		$(".videobox").fadeOut(500).delay(2000); 
         if ( !!window.player ) {
             window.player.pauseVideo();
        }
        $("#slideshow .vidpopup-active").removeClass("vidpopup-active");
        tl_demo.play();
    });

    $(".tipDot1").click(function(e){$('.cycle-slideshow').cycle('goto', 7);e.preventDefault();});
    $(".tipDot2").click(function(e){$('.cycle-slideshow').cycle('goto', 0);e.preventDefault();});
    $(".tipDot3").click(function(e){$('.cycle-slideshow').cycle('goto', 1);e.preventDefault();});
    $(".tipDot4").click(function(e){$('.cycle-slideshow').cycle('goto', 2);e.preventDefault();});
    $(".tipDot5").click(function(e){$('.cycle-slideshow').cycle('goto', 3);e.preventDefault();});
    $(".tipDot6").click(function(e){$('.cycle-slideshow').cycle('goto', 4);e.preventDefault();});
    $(".tipDot7").click(function(e){$('.cycle-slideshow').cycle('goto', 5);e.preventDefault();});
    $(".tipDot8").click(function(e){$('.cycle-slideshow').cycle('goto', 6);e.preventDefault();});
		
	$(window).load(function () { tl_start.play() });
	//console.log( $('*').length );
});