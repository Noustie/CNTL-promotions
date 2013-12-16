// TODO: write a function to listen to orientation change, swap class on <body>
// TODO: display "loading" msg during page loads
var hideURLbar = function (){
	window.scrollTo(0,1);
}
if ( !!window.addEventListener ) {
	addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
}

function mobileSite (window) {

	//var $ = window.jQuery;

	var startXpos,
		startYpos,
		lastXpos,
		isDragging = false,
		isScrolling = false,
		mainScroll,
		currPage,
		currPageNum = 0,
		xhrPages = [],
		interactionEvent = 'click';

	var isTouchDevice = !!('ontouchstart' in document.documentElement);

	this.log = function (msg) {
		window.console && console.log && console.log(msg);
	}

	this.init = function (){
		if ( determineSupport() ) {
			$(document).ready( function () {
				hasJavascript();

				omniSetPage();

				setupPageEvents();
				setupTrackingHandlers();

				$(window).resize( setupPageResizing );

				setupAjaxPages();
			});
		}
	}

	this.determineSupport = function () {
		var ua = navigator.userAgent;
		if ( !!$('#notSupported')[0] ) {
			return false;
		}
		return true;
	}

	this.hasJavascript = function () {
		$('.nojs').removeClass('nojs');
	}

	this.setupAjaxPages = function () {
		var cont;
		xhrPages = $('.xhr');
		setupHashChangeHandler();

		if ( !!location.hash ) {
			var hs = location.hash.replace('#','') || '';
			var startPage = xhrPages.filter('a[href$="'+hs+'"]');
			if ( !!startPage[0] && !!startPage.attr('href') ) {
				updateHash( startPage.attr('href') );
				if ( hs == 'request.php' || hs == 'success.php' || hs == 'error.php' ) {
					var contID = '#'+hs.replace('.php','');
					$('body').trigger( 'showForm', [contID] );
				}
				$(window).hashchange();
			}
		}
	}

	this.setupPageEvents = function () {
		$('body').bind({
			getPage: onGetPage,
			showForm: onShowForm,
			submitSuccess: onSubmitSuccess,
			hideForm: onHideForm,
			trackEvent: onTrackEvent
		});
		$('.xhr').live( 'click', function (e) {
			e.preventDefault();
			var pageID = String( '#' + $(this).attr('href') ).replace('.php','');

			$('body').trigger('getPage', [ this.href, pageID ] );
			if ( !!this.href.match('index.php') ) {
				onHideForm( {}, '#request, #error, #success' );
			} else if ( !!this.href.match('request.php') ) {
				var contID = '#'+$(this).attr('href').replace('.php','');
				onShowForm( {}, contID );
			}
			//updateHash(pageID);
		});
		/*
		$('a[href$="index.php"]').live( 'click',  function (e) {
			e.preventDefault();
		});
		$('a[href$="request.php"]').live( 'click',  function (e) {
			e.preventDefault();
		});
		*/
		$('#smallBusiness_Promos').live( 'submit',  function (e) {
			if ( !validateContactForm(this) ) {
				e.preventDefault();
				return false;
			}
		});
	}

	this.onGetPage = function (e, pageURL, contID){
		if( !!!$(contID)[0] ) {
			loadPage(pageURL,'#content');
		} else {
			moveAjaxIn( contID );
		}
	}

	this.loadPage = function ( pageURL, loadInto, callback ){
		var holder = $('<div />');
		var chunk;
		holder.load(pageURL + ' ' + loadInto, function (response, status, xhr) {
			if ( status == 'success' ) {
				$('div').promise().done(function () {
					var chunk = holder.find( loadInto + ' .container' );
					$(loadInto).append(chunk);
					var pageID = '#'+ chunk.attr('id');
					moveAjaxIn( pageID );
				})
			}
		});
	}

	this.onShowForm = function (e, showID) {
		var moveW = $('#content').width() * 1;
		$('#index').stop(true, false).animate( { left: -moveW }, 400, 'linear', function () {
			$('#index').css( { left: moveW*-2 } );
		});
		$('.backBtn').stop(true, false).animate( { left: 0 }, 200 );
		moveAjaxIn(showID);
	}

	this.onHideForm = function (e, hideID) {
		var boxHeight = $('#index').height();
		var moveW = $('#content').width() * 1;
		//$('#content').stop(true, false).animate( { height: boxHeight }, 400 );
		$('#content').css( { height: boxHeight } );
		$('.backBtn').stop(true, false).animate( { left: -moveW }, 200, 'linear', function () {
			$('.backBtn').css( { left: moveW*-2 } );
		} );
		$('#index').stop(true, false).animate( { left: 0 }, 400 );
		moveAjaxOut(hideID);
	}

	this.moveAjaxIn = function (id) {
		if ( !!$(id)[0] ) {
			var boxHeight = $(id).height();
			$(id).stop(true, false).animate( { left: 0 }, 400 );
			//$('#content').stop(true, false).animate( { height: boxHeight }, 400 );
			$('#content').css( { height: boxHeight } );
		}
	}

	this.moveAjaxOut = function (id) {
		if ( !!$(id)[0] ) {
			var moveW = $('#content').width() * 1;
			$(id).stop(true, false).animate( { left: moveW }, 400, 'linear', function () {
				$(id).css( { left: moveW*2 } );
			});
		}
	}

	this.validateContactForm = function (form) {
		if ( !!!form["first_name"].value || !!!form["last_name"].value || !!!form["phone1"].value || !!!form["phone2"].value || !!!form["phone3"].value ) 		{
			alert("Please enter information in all the fields before submitting.");
			return false;
		}
		return true;
	}

	this.onSubmitSuccess = function (e) {
		var data = e.data;

	}

	this.onTrackEvent = function (e, trackThis) {
		var data = e.data;
		var that = trackThis;

		$('div').promise().done(function () {
			var qLinkName = $(that).attr('clicktrack');
			var s=s_gi(s_account);
			s.linkTrackVars='eVar6';
			s.eVar6=qLinkName;
			s.tl(that,'o',qLinkName);
			s.eVar6=null;
		});
	}

	this.setupTrackingHandlers = function () {
		$('a[clicktrack]').live('click', function () {
			$(this).trigger('trackEvent', [ this ] );
		});
	}

	this.omniSetPage = function () {
		$('div').promise().done(function () {
			var pageID = 'ctl|rsd|mobile|product|emktg|t1_2012|qrcode_speedoverview';
			var s=s_gi(s_account);
			s.pageName = pageID;
			s.linkInternalFilters="javascript:,centurylink.,centurytel.,embarqmail.,synacor.,embarq.,speedpay.,mspcare.bcgi.,embarqnow.,centurylink-business,prismtvproject.";
			s.server = "promotions.centurylink.com";
			s.channel = s.evar41 = "rsd";
			s.prop3 = s.eVar24 = ""; //Customer Type
			s.prop6 = ""; //Report suite ID
			s.prop24 = s.eVar35 = "rsd|mobile|product"; //Sub Section
			s.prop25 = s.eVar54 = "rsd|mobile|product|emktg"; //level1
			if ( !!s.t ) {
				//s.t();
			}
		});
	}

	this.setupPageResizing = function () {

	}

	this.setupHashChangeHandler = function (){
		$(window).hashchange( function (e) {
			log("hash: " + window.location.hash);

			e.preventDefault();
			// Adding to fix "back button" functionality when there is NO hash
			if(!window.location.hash) { return; }

			var hashStripped = window.location.hash.replace('#','');
			if ( !!window.location.hash && !!xhrPages.filter('a[href$="'+ hashStripped +'"]')[0] ) {
				var pageID = window.location.hash.replace('.php','');
				var link = xhrPages.filter('a[href$="'+ hashStripped +'"]')[0]
				$('body').trigger('getPage', [ link.href, pageID ] );
			}
		});
	}

	this.updateHash = function ( xhrURL ){
		window.location.hash = xhrURL;
	}

	init();
}
mobileSite(window);
