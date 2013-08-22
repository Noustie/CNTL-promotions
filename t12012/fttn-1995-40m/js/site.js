// TODO: write a function to listen to orientation change, swap class on <body>
// TODO: display "loading" msg during page loads
var mobileSite = {}
addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);

(function mobileSite (window) {

	//var $ = window.jQuery;

	var startXpos,
		startYpos,
		lastXpos,
		isDragging = false,
		isScrolling = false,
		mainScroll,
		currPage,
		currPageNum = 0,
		infoPages = [],
		interactionEvent = 'click';

	var isTouchDevice = !!('ontouchstart' in document.documentElement);

	this.hideURLbar = function (){
		window.scrollTo(0,1);
	}

	this.log = function (msg) {
		window.console && console.log && console.log(msg);
	}

	this.init = function (){
		if ( determineSupport() ) {
			$(document).ready( function () {
				hasJavascript();

				omniSetPage();

				//setupEventInteraction();
				setupCycleContent();
				setupNavHandlers();
				setupSpeedSelection();
				setupHashChangeHandler();
				setupTrackingHandlers();

				$(window).resize( setupPageResizing );
				if(!window.location.hash){ displayPage(0); }
			});
		}
	}

	this.determineSupport = function () {
		var ua = navigator.userAgent;
		if ( ( ua.match(/blackberry/gi) && !ua.match(/webkit/gi) ) || ua.match(/opera\smini/gi) ) {
			return false;
		}
		return true;
	}

	this.hasJavascript = function () {
		$('.cycwrap').css({visibility:'visible'}).fadeIn(200);
		$('.nojs').removeClass('nojs');
	}

	this.setupTrackingHandlers = function () {
		$('a[clicktrack]').live('click', function () {
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

	this.omniSetPage = function () {
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
	}

	this.setupSpeedSelection = function (){
		$('.speedDetailsBlock').css({ position: 'absolute', top: 0, left: '100%'});
		$('.speedDetailsItem').hide();

		$('.speedDetailsBlock .speedTitle a').each(function (index, obj) {
			var $this = $(this);
			var testText = $this.text()
			if ( $this.text().length > 35 ) {
				$this.text( testText.substring( 0, testText.lastIndexOf(' ') ) + '...' );
			}
		});

		$('.speedNav .speedTitle a').live('click', function (e) {
			var $this = $(this);
			$('.speedDetailsItem').hide();
			$(this.hash).show();
			$('.speedNav').stop(true,false).animate({ left: '-100%' },300 );
			$('.speedDetailsBlock').stop(true,false).animate({ left: '0%' },300 );
			e.preventDefault();
		});
		$('.speedDetailsBlock .speedTitle a').live('click', function (e) {
			var $this = $(this);
			$('.speedNav').stop(true,false).animate({ left: '0%' }, 300 );
			$('.speedDetailsBlock').stop(true,false).animate({ left: '100%' }, 300 );
			e.preventDefault();
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

			log( tabObj.id + ' loaded: ' + document.getElementById( "cycle_index" ) );

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
			log("hash: " + window.location.hash);

			e.preventDefault();
			// Adding to fix "back button" functionality when there is NO hash
		   if(!window.location.hash) { displayPage(0); return;}

			for(var i in infoPages){
				if(window.location.hash.replace("#","") == infoPages[i].url){
					displayPage(i);
					log("hash w/o #: " + window.location.hash.replace("#",""));
				}
			}
		});
		$(window).hashchange();
	}



	/*****************************

		PAGE CHANGE FUNCTIONS

	*****************************/

	this.displayNextPage = function (){
		var nextPage = currPage + 1;
		if(nextPage == $("#content").children().length){
			return;
		}
		displayPage(nextPage);
	}

	this.displayPrevPage = function (){
		var prevPage = currPage - 1;
		if(prevPage < 0){
			return;
		}
		displayPage(prevPage);
	}

	this.loadPage = function (i,callback){
		var href = infoPages[i].url + ' ' + infoPages[i].container;
		var id = infoPages[i].id;

		var cont = '#cycle_'+id;
		$(cont).load(href,function(){
			infoPages[i].isLoaded = true;
			if(callback){ callback(); }
		});
	}

	var currPage = '';
	this.displayPage = function (i){
		i = parseInt(i,10);
		currPageNum = i;

		if(infoPages[i]){
			currPage = i;
		} else {
			return;
		}
		currPage = infoPages[i].id;

		var callback = function(){
			startPageAnimation(i);
		}

		$("#content").cycle(i);

		$('#nav .active').removeClass('active');
		$('#'+infoPages[i].id).parent().addClass('active');

		if(!infoPages[i].isLoaded){
			loadPage(i,callback);
		} else {
			callback();
		}
	}

	var animateBars = null;
	this.onBarsInView = function () {}

	this.startPageAnimation = function (i) {
		i = parseInt(i,10);

		if( !!!infoPages[i] ) return;

		currPage = infoPages[i].id;
		$( '#cycle_' + currPage + ' .speedbar .expand').width(7);

		onBarsInView = function () {
			var timePad = 4;
			var speedBars = $( '#cycle_' + currPage + ' .speedbar');
			var barEndWidth = speedBars.width() - speedBars.find('.downloadTime').width() - 5;
			speedBars.each( function (index, ele) {
				var bar = speedBars.eq(index);
				var animTime = (parseInt( bar.find('.num').attr('data-animtime'), 10 ) * timePad ) + 200;
				var expand = bar.find('.expand');
				expand.stop(true,false).queue('bar'+index);
				expand.width(7);
				expand.delay(500).animate( { 'width': barEndWidth }, animTime, 'linear' );
			});
		}

		if ( $(window).scrollTop() > $('#content').offset().top * .5 || $(window).height() - $(window).scrollTop() > $('#content').height() + $('#content').offset().top ) {
			onBarsInView();
		} else {
			$(window).scroll(function () {
				if ( $(window).scrollTop() > $('#content').offset().top * .5 || $(window).height() - $(window).scrollTop() > $('#content').height() + $('#content').offset().top ) {
					onBarsInView();
					$(window).unbind( 'scroll' );
				}
			})
		}
	}

	/*****************************

		CYCLE CONTENT DRAGGING

	****************************

	this.setDrag = function (i){
		if(i==0) return;

		infoPages[i].element.ontouchstart = function(e){
			startXpos = getCoords(e).xpos;
		}

		infoPages[i].element.ontouchmove = function(e){

			// don't drag horizonally if scrolling vertically
			if(!isScrolling){
				var xpos = getCoords(e).xpos;
				lastXpos = xpos;

				// drag at least 12px...
				if(isDragging || (xpos - startXpos) > 6 || (xpos - startXpos) < -6){
					//mainScroll.disable();

					isDragging = true;
					xpos = xpos - startXpos;

					infoPages[i].element.style.webkitTransform = 'translate3d(' + xpos + 'px,0,0)';

					// drag prev and next panel too
					if(infoPages[i-1] && infoPages[i-1].isLoaded){
						infoPages[i-1].element.style.display = 'block';
						infoPages[i-1].element.style.left = "-320px";
						infoPages[i-1].element.style.webkitTransform = 'translate3d(' + xpos + 'px,0,0)';
					}

					if(infoPages[i+1] && infoPages[i+1].isLoaded){
						infoPages[i+1].element.style.display = 'block';
						infoPages[i+1].element.style.left = "320px";
						infoPages[i+1].element.style.webkitTransform = 'translate3d(' + xpos + 'px,0,0)';
					}
				}
			}
		}

		infoPages[i].element.ontouchend = function(e){
			var divId = "#cycle_"+infoPages[i].id;
			var diff =  lastXpos - startXpos;

			isDragging = false;
			startXpos = null;
			lastXpos = null;

			//mainScroll.enable();

			if(isScrolling) return;

			// if they didn't drag far, don't change pages
			// if diff is a neg number, we're going to the next page
			// else we're going to the prev page
			var next = (diff > 0) ? i - 1 : i + 1;
			// or we're going to no page at all
			if ((diff < 100 && diff > -100) || (next < 1 || next >= infoPages.length)){
				$(divId).animate({left:0},250);

				if(infoPages[i-1] && infoPages[i-1].isLoaded){
					$("#cycle_"+infoPages[i-1].id).animate({left:-321},250);
				}
				if(infoPages[i+1] && infoPages[i+1].isLoaded){
					$("#cycle_"+infoPages[i+1].id).animate({left:321},250);
				}

				return;
			}

			infoPages[i].element.ontouchstart = null;
			infoPages[i].element.ontouchmove = null;
			infoPages[i].element.ontouchend = null;

			updateHash(next);
		}
	}
	*/

	this.updateHash = function (i){
		window.location.hash = infoPages[i].url;
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

	this.adjustHeight = function (){
		var wH = $(window).height();
		var logoH = $("#logo").innerHeight();
		var navH = $("#nav").innerHeight()

		$("#container").css("height",(wH - logoH));
		window.scrollTo(0,1);
	}

	init();

	window.mobileSite = this;
})(window)
