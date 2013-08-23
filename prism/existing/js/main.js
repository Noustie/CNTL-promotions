$(function(){
	var trackthis = $(".trackMe");

	function trackTab(trackObj){
		var currentTab = $(trackObj).attr("data-clicktrack");
		s.manageVars('clearVars');
		s.pageName = currentTab;
		s.t();
	}

	$(".trackMe").live("click", function(){
		trackTab(this);
	});

	$("a.close-color-box").click(function(e){
		var delay = function () {
			try {
				if ( !!$.centurycore.modals.activeModalType ) {
					$.colorbox.close();
				}
			} catch (e) {}
		}
		setTimeout( delay, 10 );
		e.preventDefault();
	});

	$("#longBox_container a.premium_channels, #longBox_container a.go").bind("cbox_closed", function () {
		!!window.console && console.log("cbox_closed test");
		var delay = function () {
			if ( !!$.centurycore.modals.activeModalType ) {
				$('#zam_zip-code').focus();
			}
		}
		setTimeout( delay, 10 );		
	});	
});
