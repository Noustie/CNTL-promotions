if ( !!window.addEventListener ) {
	addEventListener("load", function() {
		setTimeout( function () {
			window.scrollTo(0,1)
		}, 0);
	}, false);
}

(function mobileSite (window, $) {


	//Event Handling PUB/SUB
	var cache = {}; //the topic/subscription hash
	$.publish = function(topic,args){
		// topic: string, event name
		// args: array, data to be passed to callback
		$.each(cache[topic], function(){
			this.apply($, args || []);
		});
	}
	$.subscribe = function(topic,callback){
		// topic: string, event name
		// callback: array returned by unsubscribe
		if(!cache[topic]){
			cache[topic] = [];
		}
		cache[topic].push(callback);
		return [topic, callback];
	}
	$.unsubscribe = function(handle){
		// handle: jquery obj returned by unsubscribe
		var t = handle[0];
		cache[t] && $.each(cache[t], function(idx){
			if(this == handle[1]){
				cache[t].splice(idx, 1);
			}
		});
	}

	var currPage;
	var interaction = 'click';

	var support = {
		isSupported: false,
		isAndroid: false,
		isAndroidTablet: false,
		isTouch: !!('onguesturestart' in document.documentElement)
	}

	var init = function (){
		if ( determineSupport() ) {
			fixConsole();
			$(document).ready( function () {
				if ( support.isTouch ) {
					interaction = 'touchend';
				}
				setupPubSub();
				setupEvents();
				hasJavascript();
			});
		}
	}

	var hasJavascript = function () {
		$('.nojs').removeClass('nojs');
	}

	var setupPubSub = function () {
		$.subscribe( 'getAjaxPage', onGetAjaxPage );

		$.subscribe( 'togglePageMenu', onTogglePageMenu );

		$.subscribe( 'initSlideTabs', onInitSlideTabs );
		$.subscribe( 'showSlideTab', onShowSlideTab );
		$.subscribe( 'hideSlideTab', onHideSlideTab );

		$.subscribe( 'showForm', onShowForm );
		$.subscribe( 'hideForm', onHideForm );
		$.subscribe( 'submitSuccess', onSubmitSuccess );
	}

	var setupEvents = function () {
		$('.togglePageMenu, .showSlideTab').on('click', function (e) {
			e.preventDefault();
		});

		$('.togglePageMenu').on(interaction, function (e) {
			$.publish('togglePageMenu', [ this.hash, this ] );
			e.preventDefault();
		});

		$('.showSlideTab').on(interaction, function (e) {
			$.publish('showSlideTab', [ this.hash, '.slideTabNav', '.tabCont', '.tab' ] );
			e.preventDefault();
		});

		$('.hideSlideTab').on(interaction, function (e) {
			$.publish('hideSlideTab', [ '.slideTabNav', '.tabCont', '.tab' ] );
			e.preventDefault();
		});

		$.publish('initSlideTabs', [ '.slideTabs', '.slideTabNav', '.tabCont', '.tab' ] );
	}

	var onGetAjaxPage = function () {

	}
	this.onTogglePageMenu = function ( targetEle, btnEle ) {
		var $targ = $(targetEle);
		if ( $targ.height() <= 0 ) {
			$(btnEle).css( { backgroundPosition: '70px bottom' } );
			$targ.stop(true,false).animate( { height: $targ.children().eq(0).height() }, 200 );
		} else {
			$(btnEle).attr( 'style', null );
			$targ.stop(true,false).animate( { height: 0 }, 200 );
		}
	}
	this.onInitSlideTabs = function (tabsWrap, tabNav, tabCont, tabClass) {
		var $nav = $(tabNav);
		var $cont = $(tabCont);
		$cont.css( { left: '100%' } );
		$nav.css({position:'absolute'})
		$(tabsWrap).css({ minHeight: $nav.height(), overflow: 'hidden' });
		$(tabClass).css({ display: 'none' });
	}
	this.onShowSlideTab = function (tabToShow, tabNav, tabCont, tabClass) {
		$(tabClass).css({ display: 'none' });
		$(tabToShow).css({ display: 'block' });
		$(tabNav).stop(true,false).animate({ left: '-100%' }, 350);
		$(tabCont).stop(true,false).animate({ left: '0%' }, 350, function () {
			$('html, body').animate({ scrollTop: ($(tabToShow).offset().top - 40) }, 100);
		});
	}
	this.onHideSlideTab = function (tabNav, tabCont, tabClass) {
		$(tabNav).stop(true,false).animate({ left: '0%' }, 350);
		$(tabCont).stop(true,false).animate({ left: '100%' }, 350, function () {
			$(tabClass).css({ display: 'none' });
		});
	}
	this.onShowForm = function () {

	}
	this.onSubmitSuccess = function () {

	}
	this.onHideForm = function () {

	}

	this.setupTrackingHandlers = function () {
		$(document).on( 'a[clicktrack]', 'click', function () {
			var that = this;
			$('div').promise().done(function () {
				var qLinkName = $(that).attr('clicktrack');
				var s=s_gi(s_account);
				s.linkTrackVars='eVar6';
				s.eVar6=qLinkName;
				s.tl(that,'o',qLinkName);
				s.eVar6=null;
			});
		});
	}

	this.setupCycleContent = function (){
		var infoPagesCollect = $('.infoPagesNav li a');
		infoPagesCollect.each( function (index, ele) {
			var navItem = infoPagesCollect.eq(index);
			var tabObj = {
				url: navItem.attr('href'),
				container: '.cycwrap',
				id: navItem.attr('id'),
				isLoaded: false,
				element: null
			}

			console.log( tabObj.id + ' loaded: ' + document.getElementById( "cycle_index" ) );

			if ( !!document.getElementById( "cycle_" + tabObj.id ) ) {
				tabObj.isLoaded = true;
				tabObj.element = document.getElementById( "cycle_" + tabObj.id );
			} else {
				var divId = "cycle_" + tabObj.id;
				var div = '<div id="' + divId + '" class="cycleItem"></div>';
				$("#content").append(div);
				tabObj.element = document.getElementById(divId);
			}
			infoPages.push(tabObj);
		});


		if($("#content").children().length > 1){
			// pass in initial panel
			$('#content').cycle({
				fx: 'scrollHorz',
				delay: 100,
				speed: 500,
				timeout: 0,
				fit: true,
				slideResize: 0,
				easing: "linear"
			});
		}

	}

	this.setupPageResizing = function () {
		$('#content').width( $('body').width() );
		$('.speedbar .expand').stop(true,false).width(7);
		startPageAnimation(currPageNum);
	}

	this.setupNavHandlers = function (){
		$("#nav a").bind( 'click', function(e){
			var id = this.id;
			var index;
			if($(this).attr("data-pageSet") == "infoPages"){
				for(i = 0; i < infoPages.length; i++){
					if(id == infoPages[i].id){
						index = i;
						break;
					}
				}
			}
			window.scroll( 0, $('.title').offset().top );
			updateHash(index);
			e.preventDefault();
		});
		$('html').attr('class','');
	}

	this.setupHashChangeHandler = function (){
		$(window).hashchange( function (e) {
			hashLink = $('a[href$="'+window.location.hash+'"]');
			if( hashLink.length > 0 ){
				displayPage(i);
				log("hash w/o #: " + window.location.hash.replace("#",""));
			}
		});
		$(window).hashchange();
	}

	this.getCoords = function (e) {
		var coords = {};
		if (e.touches && e.touches.length) { 	// iPhone
			coords.xpos = e.touches[0].clientX;
			coords.ypos = e.touches[0].clientY;
		} else { 				// all others
			coords.xpos = e.clientX;
			coords.ypos = e.clientY;
		}
		return coords;
	}

	//UTILITIES
	this.fixConsole = function () {
		if ( !window.console ) {
			var logging = function () {
				if ( !window.logger ) {
					window.logger = [];
				}
				if ( arguments ) {
					for ( var i = 0, len = arguments.length; i < len; i++ ) {
						window.logger.push( arguments[i] );
					}
				}
			}
			window.console = { log: logging, debug: logging, info: logging, warn: logging, error: logging, assert: logging, dir: logging, dirxml: logging, trace: logging, group: logging, groupCollapsed: logging, groupEnd: logging, time: logging, timeEnd: logging, profile: logging, profileEnd: logging, count: logging, exception: logging, table: logging }
		} else {
			if ( !!window.logger && window.logger.length > 0 ) {
				for ( var ii = 0, len = window.logger.length; ii < len; ii++ ) {
					console.log( window.logger[ii] );
				}
			}
		}
	}

	this.determineSupport = function () {
		var supportClasses = document.getElementsByTagName('html')[0].className;
		if ( !supportClasses.match('notSupported') ) support.isSupported = true;
		if ( !supportClasses.match('isAndroid') ) support.isAndroid = true;
		if ( !supportClasses.match('isAndroidTablet') ) support.isAndroidTablet = true;

		return support.isSupported;
	}

	init();

	window.mobileSite = this;
})(window, jQuery);
