$(function(){
	s.linkInternalFilters += ",.apple.,.google.,promotions.centurylink.com";
	
	var trackthis = $(".trackMe");

	function trackTab(trackObj){
		var currentTab = $(trackObj).attr("data-clicktrack");
		s.manageVars('clearVars');
		s.pageName = currentTab;
		s.channel = eBiz_channel;
		s.prop20  = eBiz_prop20;
		s.prop24  = eBiz_prop24;
		s.prop26  = eBiz_prop26;
		s.prop38  = eBiz_prop38;
		s.prop39  = eBiz_prop39;
		s.prop52  = eBiz_prop52;
		s.evar35  = eBiz_evar35;
		s.evar41  = eBiz_evar41;
		s.evar48  = eBiz_evar48;
		s.evar49  = eBiz_evar49;
		s.evar53  = eBiz_evar53;
		s.evar54  = eBiz_evar54;
		s.evar55  = eBiz_evar55;
		s.evar56  = eBiz_evar56;
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
