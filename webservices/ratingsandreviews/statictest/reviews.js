$(function () {

	// PREVENT 'CONSOLE' ERRORS IN BROWSERS THAT LACK A CONSOLE.
	(function (window){if(!(window.console&&window.console.log)){var noop=function(){};var methods=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","markTimeline","table","time","timeEnd","timeStamp","trace","warn"];var length=methods.length;var console=window.console={};while(length--)console[methods[length]]=noop}})(window);


	$('html').addClass('hasJS');

	var topbutton = '<a href="#top" class="backToTopArrow" clicktrack="ctl|rsd|shop|iptv|pre_id_learn|customer_reviews|center|button|position2|top">Top</a>';


	// UTILITY
	function scrollToPos(offset,delay,timing){if(!timing)timing="slow";if(!delay)delay=0;if(!offset)offset=0;$("html,body").delay(delay).animate({scrollTop:offset},timing)};
	function getQueryObject(a){if(!a.match(/\?|\&/gi)){return {};}a=a.substring(a.indexOf("?")+1).replace(/\#.+/gi,"").split("&");for(var c,b={},d=decodeURIComponent,e=a.length-1;e>=0;e--){if(!a[e]){continue;}c=a[e].split("="),b[d(c[0])]=d(c[1])};return b};
	

	function initCustomerReviews() {
		$("#ratingsAndReviews a.moreReviews").live( "click", getMoreReviews );
		$("#ratingsAndReviews a.backToTopArrow").live( "click", function (e) { e.preventDefault(); scrollToPos(0); });
		$("#ratingsAndReviews a.moreReviews").after( topbutton );
		$("#ratingsAndReviews form.displayOptionsForm select").live("change", filterReviews );

		//$.unsubscribe( $.pubSubHandles.initCustomerReviewsTab );

	}

	function filterReviews (e) {
		var formData = getFormSelectedData( $(this).parents("form") );
		var getdata = $.extend( { isajaxed: true, isajaxpaged: true }, formData );
		var reviewsLists = $(".reviewsList");
		reviewsLists.remove();
		$(".displayOptionsForm").after('<div class="reviewsList reviewsPlaceHolder"><span class="loadingSpinner">&nbsp;</span></div>');
		var _context = $(".reviewsPlaceHolder");
		console.log( location.pathname+"?"+$.param(getdata) );
		$.ajax({
			//url: "/prismtv/prism-tv-customer-reviews.html",
			url: location.pathname,
			global: false,
			data: getdata, 
			dataType: "html",
			context: _context,
			success: replaceReviews
		});		
	}

	function replaceReviews (data) {
		$(this).replaceWith(data);
		$("#ratingsAndReviews").find("p.moreReviewsLink").append( topbutton )
	}

	function getMoreReviews ( e ) {
		e.preventDefault();

		var moreLink = $(this); 
		var _context = moreLink.parents(".reviewsList")[0];
		var getdata = $.extend( { isajaxed: true, isajaxpaged: true }, getQueryObject( ""+this.href ) );

		$.ajax({
			//url: "/prismtv/prism-tv-customer-reviews.html", 
			url: location.pathname,
			global: false,
			data: getdata, 
			dataType: "html",
			context: _context,
			success: processMoreReviews
		});

		moreLink.parent().html('<span class="loadingSpinner">&nbsp;</span>');
	}

	function getFormSelectedData( $form ) {
	    var formObj = {};
	    var inputs = $form.serializeArray();
	    $.each(inputs, function (i, input) {
	        formObj[input.name] = input.value;
	    });
	    return formObj;
	}

	function processMoreReviews ( data ) {
		var reviews = $(data);
		var block = $(this);
		block.after(reviews);
		reviews.find(".moreReviewsLink a.previousReviews").remove();
		reviews.hide().delay(100).slideDown(500, function() { 
			block.find("p.moreReviewsLink").slideUp(100, function() {
				$(this).remove();
			}); 
			reviews.find("p.moreReviewsLink").append( topbutton );
		} );
	}

	initCustomerReviews();

});