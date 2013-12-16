$(function(){

	// GET QUERY STRING VALUE BY KEY
	function getQueryParam (key, obj) {
		if ( !obj || !obj.search ) obj = location;
		var a = obj.search.slice(1).split("&"), GET = [];
		for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
		return GET[key] || null;
	}

/* 	TABS FOR BUSINESS LANDING PAGE */
	
	var lrgBizTab = $('#lrgBizTab'),
		smBizTab = $('#smBizTab'),
		govTab = $('#govTab'),
		lrgBizLink = ('a.lrgBizTab'),
		smBizLink = ('a.smBizTab'),
		govLink = ('a.govTab'),
		lrgBtn = ('a.lrgBizBtn'),
		sbBtn = ('a.smBizBtn'),
		govBtn = ('a.govBizBtn'),
		prismBtn = ('a.prismBtn'),
		comBtn = ('a.comBtn'),
		mainCycle = $('div.cycle-slideshow.mainCycle');
		

	function handleHomeTabs (e) {
		var _this = e.target;
		if ( !$(_this).hasClass('selectedTab') ) {
			$(".selectedTab").removeClass('selectedTab');
			$(_this).addClass('selectedTab');
			$("#tabs .tab").css({zIndex: null}).stop(true, false).delay(200).fadeOut(200);
			$(_this.hash).css({zIndex: 200}).stop(true, false).fadeIn(200);
		}
		e.preventDefault();
	}
	$( "#container" ).on("click", ([lrgBizLink, smBizLink, govLink]).join(", "), handleHomeTabs );

/* 	TRIGGER CYCLE FOR INDIVIDUAL BUSINESS PAGES */

	function linkToPlayVideo (vidID) {
		$(window).delay(1000).queue( function () {
			var vidBtn = $('.section.cycle-slide-active .entries div a[href*="'+vidID+'"]');
			if ( !!vidBtn.length ) {
				vidBtn.eq(vidBtn.length-1).click();
			}
		});
	}

	function handleCrossTabLink (e) {
		var _this = e.currentTarget;
		var vidHash = (!!_this.hash) ? (_this.hash).replace("#","") : null;
		var tabLinkEle = getQueryParam("x", _this);
		var navItem = $('#mainNav li a[href*="'+tabLinkEle+'"]');
		if ( !!navItem.length && navItem.index("#mainNav li a") !== -1 ) mainCycle.cycle('goto', navItem.index("#mainNav li a") );
		if ( !!vidHash ) linkToPlayVideo( vidHash );
		e.preventDefault();
	}
	$( "#container" ).on("click", ([comBtn, prismBtn, lrgBtn, sbBtn, govBtn ]).join(", "), handleCrossTabLink );
		
/* 	SCROLLABLE VIDEO NAV */

	var $scroller = $(".scroller");
	$scroller.each( function (index, ele) {
		var $ele = $(ele);	
		var $navWrap = $ele.children(".videoNav");
			$navWrap.css({"display":"block"});
		var divHeight = $ele.height();
		var wrapHeight = $navWrap.height();

		if ( wrapHeight > divHeight ) {
			var heightPercent = (divHeight - wrapHeight) / wrapHeight;
			$navWrap.mousemove( function(e){
				var y = e.pageY - $(this).offset().top;
				y = y * heightPercent;
				$(this).stop(false, false).animate({top : y},5)
			} );
		}
	});

	$( '#pageCycle' ).on( {
	    "cycle-after": function(e, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
	    	if ( e.target.id == "pageCycle") {
	    		if ( $(incomingSlideEl).hasClass("highlight_nav_business") ) {
	    			$("#mainNav .nav_business").addClass("section-active");
	    		} else {
	    			$("#mainNav .section-active").removeClass("section-active");
	    		}
	    	}
	    }
	});
	
/* 	FACEBOOK SHARING */

	$('a.fbShare').click(function(e) {

		var domain = "promotions.centurylink.com";
		
		if(!!window.currentVideo){
			var vidLink = 'http://' + domain + '/youtube/?sharelink=true&x=' + ( $("#mainNav li.cycle-pager-active a")[0].href.replace(/.*\?x\=/gi,"") ) + '|' + window.currentVideo + "|r",
				vidTitle = $("<div>"+window.currentVideoTitle+"</div>").text(),
				vidDesc = $("<div>"+window.currentVideoDesc+"</div>").text();
		
			var	publish = {
				method: 'feed',
				message: vidDesc,
				name: vidTitle,
				caption: '',
				description: vidDesc,
				link: vidLink,
				picture: 'http://' + domain + '/youtube/images/youtube_cntl_avatar.gif',
				user_message_prompt: ''
			};

			!!window.console && console.log(publish);
		
			FB.ui(publish);
		}
		e.preventDefault();
	
	});
	
	$('a.twShare').click(function(){
		var domain = "promotions.centurylink.com";
		var vidTitle = $("<div>"+window.currentVideoTitle+"</div>").text();
		if(!!window.currentVideo){
			var vidLink = '//twitter.com/share?url=' + encodeURIComponent( 'https://' + domain + '/youtube/?sharelink=true&x=' + ( $("#mainNav li.cycle-pager-active a")[0].href.replace(/.*\?x\=/gi,"") ) + '|' + window.currentVideo + "|r" ) + "&text=" + encodeURIComponent( vidTitle ); 
			$(this).attr('href', vidLink);
		}
	
	});

	var gotoTab = decodeURIComponent( getQueryParam("x") );
	if ( !gotoTab ) {
		gotoTab = $.cookie('gotoTab');
	}
	if (!!gotoTab) {
		var tabArr = gotoTab.split("|");
		$(function () {
			if ( !tabArr[2] ) {
				$.cookie('gotoTab', tabArr[0], { expires: 30 });
			}
			$('#mainNav a[href*="?x='+tabArr[0]+'"]').click();
			$('#pageCycle .section').stop(true, true);
			if ( tabArr.length > 1 ) {
				linkToPlayVideo( tabArr[1] );
			}
		});
	}

});




