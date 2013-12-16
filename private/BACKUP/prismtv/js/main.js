/**************************************************
 *	UTILITY PLUGINS
 **************************************************/

//SIMPLE PUB/SUB PATTERN IMPLEMENTATION PLUGGED IN TO JQUERY
(function($,window){var cache={};$.publish=function(topic,args){if(!args)args=[];cache[topic]&&$.each(cache[topic],function(){this.apply($,args)})};$.subscribe=function(topic,callback){if(!cache[topic])cache[topic]=[];cache[topic].push(callback);return[topic,callback]};$.unsubscribe=function(handle){var t=handle[0];cache[t]&&$.each(cache[t],function(idx){if(this==handle[1])cache[t].splice(idx,1)})};window.$pubsubready=true})(jQuery,window);

//ACTIONDEFERR --  DEFFERS THE EXECUTION OF SOME ACTIONS TO PREVENT ANIMATION JUTTER
function ActionDeferr(_allowDebug){var actionQueue=[];var actionDeferr=null;var elementWatchList="html,body,div,span,li,a";var allowDebug=_allowDebug;function DefferedAction(args,callback){this.args=args;this.callback=callback;DefferedAction.prototype.execute=function(){if(!!this.callback&&!!this.callback.apply){this.callback.apply(window,this.args);!!allowDebug&&!!window.console&&console.log("deferred: "+callback+" -- "+this.args.join("|"))}}}function isAnythingAnimating(){var v=false;if(!!jQuery&&
jQuery(elementWatchList).is(":animated")){v=true;return v}var GS=null;if(!!window.TweenMax)GS=TweenMax;if(!!window.TweenLite)GS=TweenLite;if(!GS)return v;var tweens=TweenMax.getAllTweens();for(var i=0,len=tweens.length;i<len;i++)if(!tweens[i].paused){v=true;return v}return v}function executeQueue(){if(!!actionQueue.length)if(!isAnythingAnimating())while(!!actionQueue.length)actionQueue.pop().execute();else{if(!!actionDeferr){clearTimeout(actionDeferr);actionDeferr=null}actionDeferr=setTimeout(deferredHandle,
333)}}function deferredHandle(){actionDeferr=null;executeQueue()}ActionDeferr.prototype.enqueueAction=function enqueueAction(callback,args){actionQueue.push(new DefferedAction(args,callback));if(!!actionDeferr){clearTimeout(actionDeferr);actionDeferr=null}actionDeferr=setTimeout(deferredHandle,333)}};
var Deferr = new ActionDeferr(false);


/**************************************************
 *	PRISM CORE FUNCTIONALITY
 **************************************************/
(function PrismMain (window, $, TweenMax, TimelineMax) {
"use strict";
	//Class Constants
	var MARKET_NAME_VAR = 'marketName',
		MARKET_DATA_PATH = 'markets/',
		STORE_LOC_VAR = 'storeLocatorPost',
		REQUIRED = [
			'/prismtv/js/jquery.colorbox-min.js',
			'/prismtv/js/jquery.cookie.js',
			'/prismtv/js/jquery.ba-hashchange.min.js',
			'/prismtv/js/jquery.clinkSlide.js'
		],
		TABS_REQUIRED = '/assets/js/jquery-ui.min.js',

		MAIN_PAGE_NAV = '#tabScrollToView .mainPageNav ul li a',
		AJAX_FRAG = ['.ajaxFragment', '.contFooter .ajaxDisclaimer'],
		TRACKING_CUST_ATTR = 'clicktrack',
		WHYSWITCH_VIDPLAYER_ID = 'whySwitchVideoPlayer',
		SLIDER_SEL = '.enableSlider, .videoThumbSlider';

	//Class Variables
	// OLD -- var marketData, old_sorryCache, sliders = null, multiVideoPlayer = null, videoInfoCycle = null, videoScroller,
	var	interiorPages = [], 
		pageTabs = null, 
		hashStore = "", 
		headCycle = null, 
		transition = "", 
		hasRequired = 0,
		slideRequired = 0, 
		currentLoadingTab = [], 
		isHeadCyclePaused = false;

	var pauseHeaderCycleToggles = {
		overlay: false,
		video: false,
		mouseout: false,
		directclick: false
	};

	//PUBSUB TOPICS
	var topics = {
			INIT: "INIT_MAIN",
			TRACKPAGE: "TRACKPAGE",
			OMNI_TRACKPAGE: "OMNI_TRACKPAGE",
			TRACKACTION: "TRACKACTION",
			CLEAR_TO_TRACK: "CLEAR_TO_TRACK",
			TABS_PREPARED: "TABS_PREPARED",
			ALL_TABS_LOADED: "ALL_TABS_LOADED",
			SHOWTAB: "UI_SHOWTAB",
			INIT_VIDEOPLAYER: "INIT_VIDEOPLAYER",
			CHANGE_VIDEO: "UI_CHANGE_VIDEO",
			STOP_VIDEO: "STOP_VIDEO",
			LAUNCH_OVERLAY: "LAUNCH_OVERLAY",
			PAUSE_HEADER_CYCLE: "PAUSE_HEADER_CYCLE",
			RESUME_HEADER_CYCLE: "RESUME_HEADER_CYCLE"
		},
		pubSubHandles = {};

	function onPageTabInit (uiEvent, ui) {
		initVideoPlayer();
		$.publish( topics.TRACKPAGE, [ top.location.hash ] );
		$.publish( topics.INIT_VIDEOPLAYER, [ true ] );
	}
	function initHashChange () {
		$(".js-proc").removeClass("js-proc");
		$(window).hashchange( function () {
			if ( top.location.hash !== hashStore ) {
				$.publish( topics.SHOWTAB, [ top.location.hash ]);
			}
		}, { delay: 100 });
		$(window).hashchange();
	}
	function changePageTab( newHash ) {
		if ( !newHash ) newHash = top.location.hash;
		var hashClean = newHash.replace('#','');
		var pageNav = $(MAIN_PAGE_NAV+'[rel*="' + hashClean + '"]');
		if ( !hashClean || pageNav.length <= 0 ) {
			return false;
		}
 		
 		var mainWrapNewID = hashClean.replace(/\.\w+/,'');
		$("#main .mainWrap").attr('id', mainWrapNewID);

		if ( pageNav.length > 0 && !!pageTabs ) {
			var pageNavIndex = $(MAIN_PAGE_NAV).index( pageNav );
			if ( newHash !== hashStore && ( pageNavIndex === 0 || !!pageNavIndex ) ) {
				pageTabs.tabs( 'select', pageNavIndex );
			}
		}

		$.publish( topics.STOP_VIDEO );

		hashStore = newHash;
		return true;
	}
	function initPageContentCrossLinks () {
		for ( var p = 0, len = interiorPages.length; p < len; p++) {
			$('#main .pageBody a[href*="'+interiorPages[p]+'"], #main .header a[href*="'+interiorPages[p]+'"]').attr('href','#'+interiorPages[p]);
		}
		$('#main .pageBody a.crossPageLink, #main .prismheader a.crossPageLink').live('click', function (e) {
			$('html,body').animate({
				scrollTop: $("#tabScrollToView").offset().top
			}, 250);
		});
		$('#main a.crossPageDeepLink').live('click', function (e) {
			var _rel = this.rel;
			var _extraeval = $(this).attr("data-extra-eval");
			if ( location.hash !== this.hash ) {
				pubSubHandles.quicktabchange = $.subscribe( topics.SHOWTAB, function () {
					$('html,body').animate({
						scrollTop: $( _rel ).offset().top
					}, 500);
					$.unsubscribe( pubSubHandles.quicktabchange );
				});
			} else {
				$('html,body').animate({
					scrollTop: $(_rel).offset().top
				}, 500);
			}
			if ( !!_extraeval ) {
				eval(_extraeval);
			}
		});
	}

	// INITIALIZE PAGE CONTENT AS TABS
	// Requires jQuery UI tabs widget
	function initTabs () {
		interiorPages = [];

		prepareTabPlaceholders();

		getPrismScript( TABS_REQUIRED, function () {
			extendJQueryUITabs();

			// HANDLE PRELOADING TAB CONTENT THROUGH AJAX
			function pageTabLoadHandler ( event, tabs ){
				currentLoadingTab[ tabs.index ] = "loaded";
				if ( $.inArray( "not", currentLoadingTab ) !== -1 ) {
					pageTabs.tabs('load', $.inArray( "not", currentLoadingTab ) );
				} else {
					pageTabs.unbind('tabsload', pageTabLoadHandler);
				}
				delayedPageModifications( event, tabs );
				window.updateMarketInfo();
			}

			// LOAD CORRECT TAB ON PAGE LOAD
			var pageNavIndex = 0;
			if ( !!top.location.hash ) {
				var pageNav = $(MAIN_PAGE_NAV+'[rel*="'+top.location.hash.replace('#','')+'"]');
				if ( pageNav.length > 0 ) {
					pageNavIndex = $(MAIN_PAGE_NAV).index( pageNav );
				}
			}
			if ( !!top.location.pathname.match(/\/.+\.html/gi) ) {
				var pageNav = $(MAIN_PAGE_NAV+'[rel*="'+top.location.pathname.replace('/prismtv/','')+'"]');
				if ( pageNav.length > 0 ) {
					pageNavIndex = $(MAIN_PAGE_NAV).index( pageNav );
				}
			}

			// INITIALIZE PAGE CONTENT AS TABS
			pageTabs = $( ".pageCont" ).tabs({
				ajaxOptions: {
					data: { isajaxed: true },
					dataType: "text",
					pageFragment: AJAX_FRAG,
					fragmentHandler: function(fragRef, fragPage, content) {
						var replaceHtml = $(fragRef, content);
						var holderRef = '';
						if ( fragRef === AJAX_FRAG[0] ) {
							holderRef = '.pageBody.' + fragPage.replace(/\.\w+/,'');
							$( holderRef ).html( replaceHtml.html() );
						} else if ( fragRef === AJAX_FRAG[1] ) {
							$( fragRef ).last().after( replaceHtml );
						}						
					},
					mainWrapSelector: '.mainWrap'
				},
				cache: true,
				//event: 'change',
				selected: pageNavIndex,
				show: onPageTabInit,
				load: pageTabLoadHandler
			});


			if ( currentLoadingTab[ pageTabs.tabs('option', 'selected') ] === "loaded" ) {
				pageTabs.tabs('load', ( $.inArray( "not", currentLoadingTab ) ) );
			}


			//Allow tracking on ajaxed links.
			if ( !window.qa ) window.qa = { trackAction: function () {} }

			$(MAIN_PAGE_NAV).click( function (e) {
				if ( !!location.pathname.match(/\/.+\.html/gi) ) {
					location.href = "./#"+this.rel;
					return false;
				}				
				$.publish( topics.SHOWTAB, [ '#' + this.rel ] );
				top.location.hash = this.rel;
				omniTrackAction( $(this).attr('clicktrack') );
				ignitOneTrackURL();
			});

			$('div.pageBody a[clicktrack], div.pageBody area[clicktrack]').unbind('click');
			$('div.pageBody a[clicktrack], div.pageBody area[clicktrack]').live('click', function (e) {
				omniTrackAction( $(this).attr('clicktrack') );
			});

			if ( !!$('#BlankPreload').length ) $('#BlankPreload').remove();

		});
		$.unsubscribe( pubSubHandles.initTabs );
		$.publish( topics.TABS_PREPARED );
	}

	//ADDS PLACEHOLDERS DIVS FOR TABS TO THE PAGE.
	function prepareTabPlaceholders () {
		var rep_holderID = "%%holderid%%";
		var rep_pageclass = "%%pageclass%%";

		var tabPlaceHolderTemplate = ' \
					<div id="'+rep_holderID+'" class="pageBody tabholder roundcorners rcHasBdr clearfix '+rep_pageclass+'"> \
						<div class="tabPreload"> \
							<div class="subContent padded clearfix">&nbsp;</div> \
							<span class="roundcorner rcLeft rcTop insideW">&nbsp;</span> <span class="roundcorner rcLeft rcBottom insideW">&nbsp;</span> <span class="roundcorner rcRight rcTop insideW">&nbsp;</span> <span class="roundcorner rcRight rcBottom insideW">&nbsp;</span> \
						</div> \
					</div> \
						';

		var placeHoldersDivs = '';

		var plugin_holderID = '';
		var plugin_pageclass = '';


		$(MAIN_PAGE_NAV).each( function () {
			var $this = $(this);
			plugin_holderID = $this.attr('title').replace(/\s/gi,'_'); // this.rel.replace(".","_"); 

			interiorPages.push( $this.attr('rel') );

			if ( !document.getElementById( plugin_holderID ) ) {
				plugin_pageclass = $this.attr('rel');
				plugin_pageclass = plugin_pageclass.replace('.html','');
				var thisPlaceHolder = tabPlaceHolderTemplate;
				thisPlaceHolder = thisPlaceHolder.replace( rep_holderID, plugin_holderID );
				thisPlaceHolder = thisPlaceHolder.replace( rep_pageclass, plugin_pageclass );
				placeHoldersDivs += thisPlaceHolder;
			}

			if ( $( "#"+plugin_holderID ).length > 0 ) {
				currentLoadingTab.push("loaded");
			} else {
				currentLoadingTab.push("not");
			}
		});

		$('#tabScrollToView').append( placeHoldersDivs );
	}

	//EXTENDS JQUERY UI TABS IN TO ALLOW FOR FRAGMENTS. 
	//SEPARATED OUT FOR READABILITY. 
	//MUST BE CALLED BEFORE OTHER UI TABS BEHAVIOR RUNS.
	function extendJQueryUITabs () {
		$.extend($.ui.tabs.prototype, {
			_tabId: function( a ) {
				/*
				if ( a.rel ) {
					return a.rel.replace(".","_");
				} 
				*/
				return a.title && a.title.replace( /\s/g, "_" ).replace( /[^\w\u00c0-\uFFFF-]/g, "" ) || this.options.idPrefix + getNextTabId();
			},
			load: function( index ) {
				index = this._getIndex( index );
				var self = this, o = this.options, a = this.anchors.eq( index )[ 0 ], url = $.data( a, "load.tabs" ), isinpage = false;
				if( $(a).attr("data-isinpage") ) isinpage = true;
				
				if ( isinpage || !url || this.element.queue( "tabs" ).length !== 0 && $.data( a, "cache.tabs" ) ) {
					self.element.dequeue( "tabs" );
					this.abort();
					return null;
				}

				// load remote from here on
				this.lis.eq( index ).addClass( "ui-state-processing" );
				if ( o.spinner ) {
					var span = $( "span", a );
					span.data( "label.tabs", span.html() ).html( o.spinner );
				}
				this.xhr = $.ajax( $.extend( {}, o.ajaxOptions, {
					url: url,
					global: false,
					success: function( r, s ) {
						//Code addition to allow page fragments to be used from loaded ajax tabs
						if ( !!o.ajaxOptions.pageFragment ) {
							var frag = o.ajaxOptions.pageFragment;
							if ( !!o.ajaxOptions.fragmentHandler && frag.constructor.toString().indexOf("Array") != -1 ) {
								for ( var fid = 0, len = frag.length; fid < len; fid++ ) {
									o.ajaxOptions.fragmentHandler( frag[fid], a.rel, r )
								}
							} else {
								r = $( o.ajaxOptions.pageFragment, r ).html();
								self.element.find( self._sanitizeSelector( a.hash ) ).html( r );
							}
						} else {
							self.element.find( self._sanitizeSelector( a.hash ) ).html( r );
						}
						self._cleanup();
						if ( o.cache ) { $.data( a, "cache.tabs", true ); }
						self._trigger( "load", null, self._ui( self.anchors[ index ], self.panels[ index ] ) );
						try {
							o.ajaxOptions.success( r, s );
						} catch ( e ) {}
					},
					error: function( xhr, s, e ) {
						self._cleanup();
						self._trigger( "load", null, self._ui( self.anchors[ index ], self.panels[ index ] ) );
						try {
							o.ajaxOptions.error( xhr, s, index, a );
						} catch ( err ) {}
					}
				} ) );
				self.element.dequeue( "tabs" );
				return self;
			}
		});
	}
	//Callback function Run after each tab is loaded.
	function delayedPageModifications (uie, ui) {
		if ( $.inArray( "not", currentLoadingTab ) === -1 ) {			
			$.publish( topics.ALL_TABS_LOADED );
		}
	}
	function allTabsLoaded () {
		$('a[href$="#CTAM"]').each( function (e) {
			this.href = this.hash;
		});
		$('#main').addClass('tabShow');
		$.publish( topics.INIT_VIDEOPLAYER, [ true ] );
	}


	/***************************
	 * EXTRA FUNCTIONALITY
	 ***************************/
	//ENABLE POP UP LINKS, EG. CHAT WINDOW
	function enablePopUpWindowLinks () {
		$('#main a.popuplink').live('click', function (e) {
			window.open( this.href, 'chatWindow', 'height=500,width=600,top=100,left=100');
			e.preventDefault();
		});
		$("#main a.disclaimerOverlay").live('click', function (e) {
			window.open( this.href, 'discWindow', 'height=500,width=870,top=100,left=100,scrollbars=yes');
			e.preventDefault();
		});
	}

	//ENABLE PLANS AND PRICES BUNDLE SUBTABS
	function enablePlansAndPrices () {
		$('#main .packageNav a').live('click', function (e) {
			var tabClass = this.hash.replace("#","");
			$(".mainWrap").removeClass("selectTripleBundle selectDoubleBundle selectAddPrism").addClass(tabClass);
			var extraparams = { products: $(this).attr("data-sproducts"), events:"prodView", linkTrackVars: 'events,products' }
			$.publish( topics.OMNI_TRACKPAGE, [ $(this).attr("clicktrack"), extraparams ] );
			e.preventDefault();
		});
		window.prism_openPNPTab = function (pnpTabID) {
			if ( $('#main .packageNav a[href*="'+pnpTabID+'"]').length > 0 ) {
				$('#main .packageNav a[href*="'+pnpTabID+'"]').trigger('click');
			}
		}
	}

	//INIT UNIQUE WHY-SWITCH-PAGE FUNCTIONALITY 
	function initWhySwitchFunctionality() {
		var playerReady = false;

		$("#whySwitchVideoPlayerWrap .videoNav li a").live("click", function (e) {
			e.preventDefault();
			if ( playerReady ) {
				jwplayer( WHYSWITCH_VIDPLAYER_ID ).load( getVideoName( $(this), WHYSWITCH_VIDPLAYER_ID ) );
				jwplayer( WHYSWITCH_VIDPLAYER_ID ).play();
			}
			$("#whySwitchVideoPlayerWrap .videoNav li").removeClass("selected");
			$(this).parent().addClass("selected");
		});

		$("#whySwitchVideoPlayerWrap a.watchvideonow.btn").live("click", function (e) { 
			e.preventDefault();
			if ( playerReady ) {
				jwplayer( WHYSWITCH_VIDPLAYER_ID ).play();
			}
		});
		$(".accoridan-open .accordian").show();
		$(".accoridan-closed .accordian").hide();

		$('.accordianTable a.expander:not(".expandAll")').live("click", function (e) {
			e.preventDefault();
			var expBtn = $(this);
			$(this.hash).find(".accordian").stop(false,false).slideToggle( function (e) {
				if ( $(".accoridan-closed").length > 0 ) {
					$(".accordianTable").removeClass("toCollapseAll").addClass("toExpandAll");
				} else if ( $(".accordianTable").hasClass("toExpandAll") )  {
					$(".accordianTable").removeClass("toExpandAll").addClass("toCollapseAll");
				}
			});
			var $parent = $(this).parents(".accordian-expander").eq(0);
			if ( $parent.length && $parent.hasClass("accoridan-closed")  ) {
				$parent.removeClass("accoridan-closed").addClass("accoridan-open");
			} else if ( $parent.length && $parent.hasClass("accoridan-open")  ) {
				$parent.removeClass("accoridan-open").addClass("accoridan-closed");
			}
		});
		$(".accordianTable a.expandAll").live("click", function (e) {
			e.preventDefault();
			var expBtn = $(this);
			var parentTarget = $( expBtn.attr("data-parent-target") );
			if ( parentTarget.hasClass("toCollapseAll") ) {
				parentTarget.removeClass("toCollapseAll").addClass("toExpandAll");
				$(this.rel).find(".accordian").stop(false,false).slideUp();
				$(".accoridan-open").removeClass("accoridan-open").addClass("accoridan-closed");
			} else if ( parentTarget.hasClass("toExpandAll") ) {
				parentTarget.removeClass("toExpandAll").addClass("toCollapseAll");
				$(this.rel).find(".accordian").stop(false,false).slideDown();
				$(".accoridan-closed").removeClass("accoridan-closed").addClass("accoridan-open");
			}
		});

		var vidPlayerObj = $("#whySwitchVideoPlayer");

		var onplayclicktrack = null;

		!!window.jwplayer && jwplayer( WHYSWITCH_VIDPLAYER_ID ).setup({
			width: vidPlayerObj.width(),
			height: vidPlayerObj.height(),
			skin: "/prismtv/jwplayer-darkgray/centurylink.zip",
			backcolor: 'ffffff',
			stretching: 'fill',
			modes: [
				{ type: 'flash', src: '/prismtv/jwplayer/player.swf' },
				{ type: "html5" },
				{ type: "download" }
			],
			events: {
				onReady: function () {
					playerReady = true;
					var firstload = getVideoName( $("#whySwitchVideoPlayerWrap .videoNav li.selected a").eq(0), WHYSWITCH_VIDPLAYER_ID );
					jwplayer( WHYSWITCH_VIDPLAYER_ID ).load( firstload );
				},
				onPlay: function () {
					if ( onplayclicktrack !== $("#whySwitchVideoPlayerWrap .videoNav li.selected a").attr("data-video-clicktrack") ) {
						onplayclicktrack = $("#whySwitchVideoPlayerWrap .videoNav li.selected a").attr("data-video-clicktrack");
						omniTrackAction(onplayclicktrack);
					}
				},
				onComplete: function () {
					onplayclicktrack = null;
				},
				onError: function (e) {
					if ( jwplayer( WHYSWITCH_VIDPLAYER_ID ).renderingMode == 'html5' ) {
						jwplayer( WHYSWITCH_VIDPLAYER_ID ).stop();
						onplayclicktrack = null;
					}
				}
			}
		});

		var pauseVideo = function () {
			if ( jwplayer( WHYSWITCH_VIDPLAYER_ID ) ) {
				jwplayer( WHYSWITCH_VIDPLAYER_ID ).stop();
			}
		}
		$.subscribe( topics.STOP_VIDEO, pauseVideo );
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


	//INIT IFRAMED VIDEO PLAYER IF NECESSARY
	function initVideoPlayer (data) {
		var vidPlayFrame = $( "#tabScrollToView .ui-tabs-panel .videoPlayerFrame" );
		if ( vidPlayFrame.length > 0 ) {
			vidPlayFrame.each( function (index, frameEle) {
				if ( !!frameEle.contentWindow && !!frameEle.contentWindow.init ) {
					frameEle.contentWindow.init();
				}
			});
		}
	}


	//INIT OVERLAY FUNCTIONALITY
	function enableOverlays () {
		$("#main a.ptvpVideoOverlay").live('click', function (e) {
			$.publish( topics.LAUNCH_OVERLAY, [ e.currentTarget.href ] );
			e.preventDefault();
		});
		$("#main a.fiberOverlay").live('click', function (e) {
			$.publish( topics.LAUNCH_OVERLAY, [ e.currentTarget.href, { innerWidth: 710, innerHeight: 950 } ] );
			e.preventDefault();
		});
	}
	function launchOverlay ( overlayURL, options ) {
		var settings = {
			iframe: true,
			fastIframe: false,
			href: overlayURL,
			innerWidth: 840,
			innerHeight: 740,
			opacity: 0.7,
			scrolling: false,
			close: "Close",
			onOpen: overlayOpening,
			onClosed: overlayClosed
		}

		if ( !!options ) {
			settings = $.extend( settings, options );
		}
		if ( !!overlayURL ) {
			$.colorbox( settings );
		}
	}
	//CALLBACK ON OVERLAY OPENING
	function overlayOpening () {
		$.publish( topics.PAUSE_HEADER_CYCLE, ["overlay"] );
		$.publish( topics.STOP_VIDEO );
	}
	//CALLBACK ON OVERLAY CLOSING
	function overlayClosed () {
		$.publish( topics.RESUME_HEADER_CYCLE, ["overlay"] );
	}
	function overlayAlternateHandler ( scrollto, tabhash ) {
		var onpubSHOWTAB = function () {
			$('html,body').animate({
				scrollTop: $( scrollto ).offset().top
			}, 500);
			$.unsubscribe( pubSubHandles.quicktabchange );
		}
		pubSubHandles.quicktabchange = $.subscribe( topics.SHOWTAB, onpubSHOWTAB );	
		$.publish( topics.SHOWTAB, [ tabhash ] );			
	}

	//LAUNCH OVERLAY UPON PAGELOAD
	function checkLaunchOverlay () {
		var overlayURL = document.cookie.match(/sptvLaunchOverlay\=?.+?\;/gi);
		if ( !!overlayURL && !!overlayURL[0] ) {
			overlayURL = decodeURIComponent(overlayURL[0]);
			overlayURL = overlayURL.replace( 'sptvLaunchOverlay=', '' );
			overlayURL = overlayURL.replace( ';', '' );
			overlayURL = overlayURL.replace( (location.protocol+'//'+location.host+location.pathname), '' );

			var checkURL = overlayURL.replace( /\#.+/gi, '' );
			console.log( checkURL );

			var expirationDate = new Date;
			expirationDate.setMonth(expirationDate.getMonth()-1);
			document.cookie = 'sptvLaunchOverlay=; expires=' + expirationDate.toGMTString();

			var overlayPopMap = {
				"videoOverlay.html": function () {
					overlayAlternateHandler( "#deeplink_videoOverlay", "#prismTestDrive.html" );
				},
				"ptvpVideoOverlay.html": function () {
					overlayAlternateHandler( "#whySwitchVideoPlayerWrap", "#prismWhySwitch.html" );
				},
				"fiberOverlay.html": function () {
					var clickLink = $('#main a[href*="'+checkURL+'"].fiberOverlay').eq(0);
					if ( clickLink.length > 0 ) {
						clickLink.trigger("click");
					}
				}
			}

			$(window).delay(10).queue( overlayPopMap[checkURL] );			
		}
	}	

	//Channel Lineup PDF Selector
	function channelLineupHandler(){
		var configURL = "//prisminfo.centurylink.net/getCofigInfo.php";
		if ( !!qafeed ) configURL = configURL.replace("prisminfo.centurylink.net", qafeed);

		var onclickLineupLabel = function () {
			var _input = $(this).children("input")[0];
			if ( !_input.checked ) {
				_input.checked = true;
				$(_input).trigger("change");
			}
		};
		var onchangeLineupInput = function (e) {
			if ( !!this.value && !!this.checked ) {
				$("#alternateLineup").css({overflow:"hidden"});
				$(this).parent().siblings().removeClass("selected");
				$(this).parent().addClass("selected");
				scrollToID("lineupHolder",0,500);			
				var chnlIframe = $("#dynamicChannelLineup iframe");
				var iframesrc = chnlIframe.attr("data-src")+"?marketName=" + this.value + "&r=" + ~~(Math.random()*10000000);
				if ( !!qafeed ) {
					iframesrc = iframesrc + "&qafeed=true";
				}
				chnlIframe.attr( "src", iframesrc );
				$("#dynamicChannelLineup").css( {display: "block", height: 800 } );
				handleExpander("contract", "#channelInfo");
			}
		};
		var onclickExpanderBtn = function (e) {
			e.preventDefault();
			handleExpander( $(this).attr("data-action"), this.hash );
		};
		var onsuccessGetCofigFeed = function (data, textStatus, jqXHR) {
			if ( !!data & !!data["Cities"] ) {
				var locationOptions = ['<div id="marketNameBox">','<label for="mkt_select_choose" class="select_replace selected select_blank">Choose Your Location <input type="radio" checked="true" name="marketName" id="mkt_select_choose" value="" class="select_check_hide" /> </label>'];
				var cityConfigObj = data["Cities"];
				for ( var varName in cityConfigObj ) {
					locationOptions.push( '<label for="mkt_select_'+varName+'" class="select_replace"> '+cityConfigObj[varName]+' <input type="radio"  name="marketName" id="mkt_select_'+varName+'" value="'+varName+'" class="select_check_hide" /> </label>' );
				}
				locationOptions.push( '</div>' );
				$("#alternateLineup #marketNameBox").replaceWith( locationOptions.join(" ") );
			}
		};

		$.ajax({
			type: 'GET',
			dataType: "jsonp",
			global: false,
	        async: false,
	        url: configURL,
	        contentType: "application/json",
			success: onsuccessGetCofigFeed 
		});
		$('#alternateLineup label').live( "click", onclickLineupLabel );
		$('#alternateLineup input').live( "change", onchangeLineupInput );
		$(".expanderBtn a").live( "click", onclickExpanderBtn );
		$('#marketNameBox').live({ 
			"mouseenter": function (e) {
				$(this).parent().css({overflow:"visible"});
			},
			"mouseleave": function (e) {
				$(this).parent().css({overflow:"hidden"});
			}
		})
	}

	function handleExpander( action, target ) {
		var btns = $('.expanderBtn a[href*="'+target+'"]');
		if ( action == "expand" ) {
			$(target).slideDown( "slow" );
			btns.filter('[data-action="expand"]').parent().hide();
			btns.filter('[data-action="contract"]').parent().show();
		} else if ( action == "contract" ) {
			$(target).slideUp( "slow" );
			btns.filter('[data-action="contract"]').parent().hide();
			btns.filter('[data-action="expand"]').parent().show();
		}
	}

	//Get Slider Script if sliders are needed.
	function enableSliders () {
		if ( $(SLIDER_SEL).length > 0 ) {
			if ( !!$.fn.clinkSlide ) {
				initSliders();
			} else {
				getPrismScript( SLIDER_REQUIRED, function () {
					if ( !!$.fn.clinkSlide ) {
						initSliders();
					} else {
						enableSliders();
					}
				});
			}
		}
	}
	//Enable Sliders if needed
	function initSliders () {
		//sliders = [];
		$(SLIDER_SEL).clinkSlide({
			speed: 250,
			hideSpeed: 100,
			numVisible: 4
		});
	}

	/*******************************
	 * INIT ANALYTICS FUNCTIONALITY
	 *******************************/
	//ANALYTICS EXECUTION FUNCTIONS
	function partnerClickTrack ( trackingObject ) {
		if ( !!trackingObject.pixConv ) {
			if ( !!pixel_conversion ) { pixel_conversion( trackingObject.pixConv ) }
		}
	}
	function addFloodlight(src, type, cat){
		if(!src || !type) return;
		cat = cat || "";
		var axel = Math.random() + "";
		var a = axel * 10000000000000;
		$("body").append('<iframe src="https://fls.doubleclick.net/activityi;src=' + src + ';type=' + type + ';cat=' + cat + ';ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
	};

	//ANALYTICS INITILZATION
	function omniTrackAction ( clicktrack ) {
		if ( !window.qa ) window.qa = { trackAction: function () {} }
		Deferr.enqueueAction( window.qa.trackAction, [ clicktrack ] );
	}
	function omniTrackPage ( pagename, extraparams  ) {
		if ( !extraparams ) extraparams = null;
		Deferr.enqueueAction( omniDoPageTrack, [ pagename, extraparams ] );
	}
	function omniDoPageTrack ( pagename, extraparams ) {
		if ( !!extraparams ) {
			for ( var p in extraparams ) {
				s[p] = extraparams[p];
			}
		}
		s.pageName = pagename;
		s.t();
	}
	function ignitOneTrackURL ( action ) {
		if ( !action ) action = location.href;
		window._nm = window._nm || [];
		window._nm.push(['trackurl', action]);
	}
	function enableDblClckTracking(){
		$('#main a.dbl_channelLineup').live('click',function(){
			Deferr.enqueueAction( addFloodlight, ["2660564","produ742","ctlpr983"] );
		});
		$('#main a.dbl_launchDemo').live('click',function(){
			Deferr.enqueueAction( addFloodlight, ["2660564","produ742","ctlpr078"] );
		});
	};
	function enableParterTracking () {
		//I2A CLICK TRACKING
		var i2aTrackMap = { 
			'3473': '#main a.i2a_PrismStartNow', 
			'2530': '#main a.i2a_PrismDemo', 
			'3474': '#main a.i2a_PrismStoreLocator', 
			'3475': '#main a.i2a_PrismCompareNow', 
			'3476': '#main a.i2a_PrismDLChannelLineup', 
			'3441': '#main a.i2a_PrismViewPlansPrices', 
			'3477': '#main a.i2a_PrismViewAll' 
		};

		for ( var key in i2aTrackMap ) {
			$( i2aTrackMap[key] ).data("pixConv", key).live( 'click', onclickHandlePartnerTracking );
		}
	}
	function onclickHandlePartnerTracking (e) {
		Deferr.enqueueAction( partnerClickTrack, [ { pixConv: $(this).data("pixConv") } ] );
	}
	function pageDblClckTracking ( pageHash ) {
		var _hash = "#index.html";
		var doubleClickTrackingMap = {
			"#index.html" : ["2660564","produ742","ctlco159"],
			"#prismFeaturedOffers.html" : ["2660564","produ742","ctlpr927"],
			"#wholeHomeDVR.html" : ["2660564","produ742","ctlpr991"],
			"#prismCompare.html" : ["2660564","produ742","ctlpr360"]
		}
		if ( pageHash ) _hash = pageHash.match(/\#.+/gi)[0];
		if ( !!doubleClickTrackingMap[_hash] ) {
			Deferr.enqueueAction( addFloodlight, doubleClickTrackingMap[_hash] );
		}
	}
	function handleAddTrackAction ( clicktrack ) {
		omniTrackAction( clicktrack );
	}	
	function handleAddTrackPage ( clicktrack, extraparams ) {
		omniTrackPage( clicktrack, extraparams );
	}


	/*******************************
	 * COMMON-USE UTILITY FUNCTIONS
	 *******************************/
	// GET QUERY STRING VALUE BY KEY
	function getQueryParam (key) {
		var a = location.search.slice(1).split("&"), GET = [];
		for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
		return GET[key] || null;
	}
	// SCROLL TO ID ON PAGE, WITH OPTIONAL DELAY AND PIXEL ADJUSTMENT
	function scrollToID(id, numAdj, delay){
		if ( !delay ) delay = 0;
		if ( !numAdj ) numAdj = 0;
     	$('html,body').delay(delay).animate({scrollTop: ($("#"+id).offset().top+numAdj) },'slow');
	}
	// PREVENT 'CONSOLE' ERRORS IN BROWSERS THAT LACK A CONSOLE.
	function nerfConsole () {
		if ( !(window.console && window.console.log) ) {
			var noop = function() {};
			var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
			var length = methods.length;
			var console = window.console = {};
			while (length--) {
				console[methods[length]] = noop;
			}
		}
	}
	// SPECIALIZED FUNCTION FOR RETRIEVING JAVASCRIPT FILES WITH AJAX
	function getPrismScript ( url, callback ) {
		return jQuery.ajax( {
			type: "GET",
			url: url,
			data: null,
			global: false,
			complete: callback,
			dataType: 'script',
			cache: true,
			crossDomain: true
		} );
	}
	// ALLOW METHODS THESE GLOBALLY
	window.getQueryParam = getQueryParam;
	window.nerfConsole = nerfConsole;
	window.scrollToID = scrollToID;


	/******************************
	 * HEADER ANIMATION AND LOGIC *
	 ******************************/
	//INITIALIZE HEADER AUTO-CYCLING BEHAVIOR
	function initHeaderCycle () {
		if ( !transition ) transition = setupHeaderTransition();
		headCycle = $('.headMainCycle');

		if ( !headCycle.hasClass('headCycleActive') && headCycle.children('.headCycleItem').length > 1 ) {
			headCycle.before('<div class="headCycleNav"><a href="#prev" class="prev cycleNavBtn">&laquo;</a><a href="#next" class="next cycleNavBtn">&raquo;</a></div><div class="headCyclePager"><div id="headCyclePagerWrap"></div></div>');
			var mainDur = 800;
			if ( $("#main").hasClass("oldIE") ) mainDur = 1200; 

			headCycle.cycle({
				fx: transition,
				prev: '.headCycleNav .prev',
				next: '.headCycleNav .next',
				speed: mainDur,
				pause: 1,
				timeout: 12000,
				manualTrump: false,
				pager: '#headCyclePagerWrap',
				pagerAnchorBuilder: function (index, ele) {
					return '<a class="ir pagerBtn pager'+index+'" href="#'+ele.id+'">'+index+'</a>';
				}
			}).addClass('headCycleActive');

			var playPause = $('<a href="#playpause" class="ir playPauseBtn">Play Pause</a>').click( function (e) {
				var $this = $(this);
				$this.toggleClass('showPlay');
				if ( pauseHeaderCycleToggles.directclick ){
					$.publish( topics.RESUME_HEADER_CYCLE, ["directclick"] );
				} else {
					$.publish( topics.PAUSE_HEADER_CYCLE, ["directclick"] );
				}
				e.preventDefault();
			})
			$('.headCyclePager').prepend( playPause );

			$("#main").mouseenter(onMouseEnterMain);
			$("#main").mouseleave(onMouseLeaveMain);

		}
	}
	function onMouseEnterMain () {
		if ( isHeadCyclePaused ) {
			$.publish( topics.RESUME_HEADER_CYCLE, ["mouseout"] );
			isHeadCyclePaused = false;
		}
	}
	function onMouseLeaveMain () {
		isHeadCyclePaused = true;
		$.publish( topics.PAUSE_HEADER_CYCLE, ["mouseout"] );
	}

	//PAUSE HEADER ANIMATION AUTO-CYCLING
	function pauseHeaderCycle ( toggleType ) {
		if ( !!pauseHeaderCycleToggles.hasOwnProperty(toggleType) ) {
			pauseHeaderCycleToggles[toggleType] = true;
		}
		if ( headCycle ) {
			headCycle.cycle("pause");
			$('.headCyclePager .playPauseBtn').addClass('showPlay');
		}
	}
	//RESUME HEADER ANIMATION AUTO-CYCLING
	function resumeHeaderCycle ( toggleType ) {
		if ( !!pauseHeaderCycleToggles.hasOwnProperty(toggleType) ) {
			pauseHeaderCycleToggles[toggleType] = false;
		}
		if ( headCycle && !checkKeepHeaderPaused() ) {
			headCycle.cycle("resume");
			$('.headCyclePager .playPauseBtn').removeClass('showPlay');
		}
	}
	//DETERMINE IF CONDITIONS EXIST TO PAUSE OR UNPAUSE HEADER ANIMATION AUTO-CYCLING
	function checkKeepHeaderPaused () {
		for ( var prop in pauseHeaderCycleToggles ) {
			if ( !!pauseHeaderCycleToggles.hasOwnProperty(prop) ) {
				if ( pauseHeaderCycleToggles[prop] === true ) {
					return true;
				}
			}
		}
		return false;
	}
	//HEADER ANIMATION TIMELINE SETUP
	function setupHeaderTransition () {
		//SIMPLIFIED HEADER TRANSITION FOR UNSUPPORTED BROWSERS.
		if ( $('#main').hasClass('oldIE') || $("html").hasClass("isAndroid") || ( !TweenMax && !TimelineMax ) ) {
			$.fn.cycle.transitions.scrollHorzFade = function($cont, $slides, opts) {
				$cont.css('overflow','hidden').width();
				opts.before.push(function(curr, next, opts, fwd) {
					if (opts.rev)
						fwd = !fwd;
					$.fn.cycle.commonReset(curr,next,opts);
					opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
					opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
				});
				opts.before.push(function(curr, next, opts, fwd) {
					var hidden = $slides.not(next);
					$('.header_externalAsset[data-tlid]:visible').stop(true,false).fadeOut(700);
					$('.header_externalAsset[data-tlid="' + $(next).attr("data-slide-timeline-id") + '"]:hidden').stop(true,false).fadeIn(700);
				});
				opts.cssFirst.left = 0;
				opts.cssBefore.top = 0;
				
				opts.cssBefore.opacity = 0;

				opts.animIn.left = 0;
				opts.animOut.top = 0;
				
				opts.animIn.opacity = 1;
				opts.animOut.opacity = 0;
			};			
			return "scrollHorzFade";
		}

		//HEADER TRANSITION FOR MODERN BROWSERS.
		$.fn.cycle.transitions['tweenHeader'] = function($cont, $slides, opts) {
			$slides.css( { display: 'block' } );

			opts.cssBefore = { top: 0, opacity: 1, zIndex: null }
			opts.animIn = { top: 0, opacity: 1, zIndex: null }
			opts.animOut = { top: 0, opacity: 1, zIndex: null }
			opts.cssAfter = { top: 0, opacity: 1, zIndex: null }

			if ( !opts.timelines ) {
				opts.timelines = {};

				var mainDur = 2.5;

				//TIMELINES FOR INDIVIDUAL HEADERS. UTILIZES data-tweenmap PROPERTY AS INDEX TO DETERMINE WHICH TWEEN.
				//ALL TWEENS ARE SET AS "from" BELOW PARAMETERS, TO CSS-DICTATED POSITIONS.

				var tw_fade = [ 
					{ dur: 0.5, props: { opacity:0, delay: 0.1 } }, { dur: 0.5, props: { opacity:0, delay: 0.1 } }, 
					{ dur: 0.5, props: { opacity:0, delay: 0.1 } }, { dur: 0.5, props: { opacity:0, delay: 0.1 } } 
				];

				var tw_bundlePackage = [
					{ dur: 1.3, offset:0.5, props: { backgroundPosition: "700px 0px", ease: Strong.easeOut } }, 
					{ dur: 1.1, offset:0.5, props: { x: 500, z: 100, delay: 0.1 } },
					{ dur: 0.7, props: { x: -30, rotationY: -4, z:10, opacity: 0, delay:0.1, transformOrigin: "50% 50% -500px" } },
					{ dur: 0.7, offset:1.3, props: { opacity: 0, delay:0.4 } }
				];				
				var tw_pricepoint = [
					{ dur: 1.3, offset:0.5, props: { backgroundPosition: "-500px 0px", ease: Strong.easeOut } }, 
					{ dur: 1.1, offset:0.5, props: { x: -500, z: 100, delay: 0.1 } },
					{ dur: 0.7, props: { x: 30, rotationY: 4, z:10, opacity: 0, delay:0.1, transformOrigin: "30% 50% -500px" } },
					{ dur: 0.7, props: { height:0, delay:0.4 } }
				];
				var tw_premium = [
					{ dur: 1.3, offset:0.5, props: { backgroundPosition: "-500px 0px", ease: Strong.easeOut } }, 
					{ dur: 1.1, offset:0.5, props: { x: -500, z: 100, delay:0.1 } },
					{ dur: 0.7, props: { x: 30, rotationY: 4, z:10, opacity: 0, delay:0.1, transformOrigin: "30% 50% -500px" } },
					{ dur: 0.7, props: { x: 200, rotation: 120, delay:0.2, ease: Back.easeOut } }
				];
				
				var tw_channelLineup = [ 
					{ dur: 1.9, props: { x: 45, y: 40, delay:0, rotation: -3, ease: Strong.easeOut } },
					{ dur: 1.9, props: { x: 45, y: 40, delay:0, rotation: -3, ease: Strong.easeOut } },
					{ dur: 1.4, props: { x: -50, y: 500, z:10, scale: 10, rotation:220, ease: Strong.easeOut } },
					{ dur: 1.5, props: { y: 300, delay:0.2 } },
					{ dur: 1.5, props: { opacity:0, delay:0.01 } },
					{ dur: 2.4, props: { backgroundPosition: "50% 300px", delay:0.1 } }
				];
				var timelineStorage = {
					fade: tw_fade,
					bundlePackage: tw_bundlePackage,
					pricepoint: tw_pricepoint,
					premium: tw_premium,
					channelLineup: tw_channelLineup
				}

				//Defaults
				var default_duration = opts.speed / 2000;
				var default_ease = Strong.easeOut;
				var default_delay = 0.1;


				var createTimeline = function ( timelineID, slide, dir ) {
					var tl = new TimelineMax( { paused: true, autoRemoveChildren: false } );

					var tlProps = timelineStorage[ timelineID ];
					if ( !tlProps ) tlProps = timelineStorage["fade"];
					
					tl.append( TweenMax.set( slide, { display: "none", autoAlpha: 0, x: 0, y: 0, z: 0 } ) );
					tl.to( slide, 0.3, { autoAlpha: 1, display: "block" }, 0.01 );
					tl.addLabel( "start", mainDur );

					TweenMax.set( slide, { perspective: 500 } );

					// data-tlid PROPERTY LINKS ITEMS TOGETHER INTO TIMELINE GROUPS.
					$('#main *[data-tlid="'+timelineID+'"]').each( function ( index, ele ) {
						if ( !!tlProps[ $(this).attr("data-tweenmap") ] ) {
							var tweenMap = $.extend( true, {}, tlProps[ $(this).attr("data-tweenmap") ] );
							TweenMax.set( ele, { opacity: 1, x: 0, y: 0, z: 0 } );
							if ( !tweenMap.dur ) tweenMap.dur = default_duration;
							if ( typeof tweenMap.props.delay != undefined ) {
								tweenMap.props.delay = ( default_delay * index );
							} else {
								tweenMap.props.delay = ( tweenMap.props.delay * index );
							}

							//Assign default tween values
							if ( !tweenMap.props.ease ) tweenMap.props.ease = default_ease;
							if ( !tweenMap.props.roundProps ) tweenMap.props.ease.roundProps = "x,y,height,width,backgroundPosition";
							if ( !tweenMap.offset ) tweenMap.offset = 0;

							tl.insert( TweenMax.from( ele, tweenMap.dur, tweenMap.props), tweenMap.offset );
						}
					});

					return tl;
				}

				$slides.each(function ( index, slide ) {
					var tlID = $(slide).attr("data-slide-timeline-id");
					$(slide).data('timelineindex', tlID );

					TweenMax.set( slide, {display: "none", opacity: 0} );
					opts.timelines[ tlID ] = createTimeline( tlID, slide, 1 );

					if ( opts.speed/1000 < opts.timelines[ tlID ].totalDuration() ) {
						 opts.speed = opts.timelines[ tlID ].totalDuration()*1000;
					}
				});
			}

			opts.before.push(function(curr, next, opts, fwd) {
				var tlDir = 1;
				if ( !fwd ) tlDir= -1;

				if ( curr === next ) {
					var TLin = opts.timelines[ $(next).data('timelineindex') ];
					TLin && TLin.time( TLin.totalDuration() );
				} else {
					var TLout = opts.timelines[ $(curr).data('timelineindex') ];
					TLout && TLout.duration(0.8).reverse( TLout.totalDuration() );
					//TLout && TLout.timeScale(3).reverse( TLout.totalDuration() );
				}
			});
			opts.after.push(function(curr, next, opts, fwd) {
				var tlDir = 1;
				if ( !fwd ) tlDir= -1;

				if ( curr === next ) {
					var TLin = opts.timelines[ $(next).data('timelineindex') ];
					TLin && TLin.time( TLin.totalDuration() );
				} else {
					var TLin = opts.timelines[ $(next).data('timelineindex') ];
/*
					if ( !!TLin ) {
						var tls = TLin.getChildren();
						for ( var tl in tls ) {
							if ( !!tls[tl].vars && !!tls[tl].vars.x ) {
								tls[tl].updateTo( {x: Math.abs(tls[tl].vars.x)*10*tlDir }, false);
							}
						}
					}
*/
					TLin && TLin.duration(1.7).play( 0 );
					//TLin && TLin.timeScale(1.2).play( 0 );
				}
			});
		}
		if ( !$("html").hasClass("headerInited") ) {
			$("html").addClass("headerInited")
		}
		return 'tweenHeader';
	};

	//DEPENDENCY INJECTION -- Pull in scripts as needed according to CONSTANTS set at top.
	function injectDependencies () {
		$(".no-js").addClass('js-proc').removeClass("no-js");
		hasRequired = 0;
		for ( var i = 0, len = REQUIRED.length; i < len; i++ ) {
			getPrismScript( REQUIRED[i], function () {
				hasRequired++;
				if ( hasRequired === REQUIRED.length ) {
					$.publish( topics.INIT );
				}
			});
		}

		if ( !!window.s ) {
			s.linkInternalFilters += (","+location.hostname);
		}
	}

	//Main Initialize function.
	function Initialize () {
		$.subscribe( topics.INIT, nerfConsole );
		$.subscribe( topics.INIT, initHashChange );
		$.subscribe( topics.INIT, enableOverlays );
		$.subscribe( topics.INIT, enablePlansAndPrices );
		$.subscribe( topics.INIT, enablePopUpWindowLinks );
		$.subscribe( topics.INIT, enableParterTracking );
		$.subscribe( topics.INIT, enableDblClckTracking );
		pubSubHandles.initTabs = $.subscribe( topics.INIT, initTabs );

		$.subscribe( topics.TABS_PREPARED, initHeaderCycle );
		$.subscribe( topics.PAUSE_HEADER_CYCLE, pauseHeaderCycle );
		$.subscribe( topics.RESUME_HEADER_CYCLE, resumeHeaderCycle );

		$.subscribe( topics.ALL_TABS_LOADED, checkLaunchOverlay );
		$.subscribe( topics.ALL_TABS_LOADED, channelLineupHandler );
		$.subscribe( topics.ALL_TABS_LOADED, allTabsLoaded );
		$.subscribe( topics.ALL_TABS_LOADED, initPageContentCrossLinks );
		$.subscribe( topics.ALL_TABS_LOADED, enableSliders );
		$.subscribe( topics.ALL_TABS_LOADED, initWhySwitchFunctionality );

		$.subscribe( topics.SHOWTAB, changePageTab );
		$.subscribe( topics.TRACKPAGE, pageDblClckTracking );
		$.subscribe( topics.OMNI_TRACKPAGE, handleAddTrackPage );
		//$.subscribe( topics.TRACKACTION, handleAddTrackAction );
		//$.subscribe( topics.CLEAR_TO_TRACK, executeTrackingQueue );

		$.subscribe( topics.LAUNCH_OVERLAY, launchOverlay );

		injectDependencies();
	}


	//Run initialization sequence.
	$( Initialize );

	window.PrismMain = this;
	return this;
})(window, jQuery, TweenMax, TimelineMax);
