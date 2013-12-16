$(function () { 

	$(document).pjax('#home .tabbed-nav a', '#main', { scrollTo: "#main" })

	$(".tabbed-nav ul li a").click(function(e){
		$(".tabbed-nav ul li a").removeClass('selected-tab');
		$(this, ".tabbed-nav ul li a").addClass('selected-tab');
		// e.preventDefault();
	});

	$(":input[placeholder]").placeholder();

	var url = $.url().param('LogMeInRescueResponse');
	if (typeof url == 'undefined'){
		$(".success").css("display", "block");
	} 
	else if(url == "PINCODE_INVALID" || url == "PINCODE_MISSING" || url == "PINCODE_EXPIRED" || url == "PINCODE_ERROR" || url == "PINCODE_ALREADYUSED" ){
		$(".success").css("display", "none");
		$(".fail").css("display", "inherit");
	} 
	var tabthis = $(".tabbed-nav ul li a");

	function trackTab(){
		var currentTab = tabthis.filter("a.selected-tab").attr("data-clicktrack");
		s.manageVars('clearVars');
		s.pageName = currentTab;
		s.prop26 = s.eVar54 = currentTab.replace("ctl|", "");
		s.prop6 = s_account;
		s.prop20 = eBiz_prop20;
		s.prop24 = s.eVar35 = eBiz_prop24;
		s.prop38 = s.eVar48 = eBiz_prop38;
		s.prop39 = s.eVar49 = eBiz_prop39;
		s.prop52 = s.eVar56 = eBiz_prop52;
		s.t();
	}

	$('input[type="submit"]').click( function (e) {
		var ct = $(this).attr("clicktrack");
		var submitTrack = function(){
			$.centurycore.analytics.trackAction(ct); 
			$("#logmeinform").submit();
		}
		setTimeout(submitTrack, 300);
		e.preventDefault();
	});

	$(document).on('pjax:complete', function(){
		trackTab();
	});
});