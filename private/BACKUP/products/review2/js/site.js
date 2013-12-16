$(document).ready(init);

// Setting Click tracking for inner content links and social links
// The per-page vars are based on the rel attributes
// The rel attributes are set via PHP variables that are at the top of each page.
function init(e){
	$('div#inner_content a, div#social_btm a').click(function() {
		var link_name = $(this).attr("rel");
		trackClick(link_name,s); 
	});
	
	// functionality for left rail on bundles page
	// hide all but pure on load
	$(':checkbox:checked').attr('checked', false);
	$('#dtv_bundle_rail, #verizon_bundle_rail, #triple_bundle_rail').hide();
	$('.bundles_check').change(function(){
		var selected_box = [];
		$(':checkbox:checked').each(function(i){
      		selected_box[i] = $(this).val();
    	});
    	if (selected_box) {
    		if (selected_box.length == 1 && selected_box[0] == 'dtv') {
    			$('.left_rail_module').hide();
    			$('#dtv_bundle_rail').show();
    		} else if (selected_box.length == 1 && selected_box[0] == 'verizon') {
    			$('.left_rail_module').hide();
    			$('#verizon_bundle_rail').show();
    		} else if (selected_box.length == 2) {
    			$('.left_rail_module').hide();
    			$('#triple_bundle_rail').show();
    		} else {
    			$('.left_rail_module').hide();
    			$('#pure_rail').show();
    		}
    	}
	});
}

function trackClick(LinkName,obj)
{	if(!(typeof s_account === "undefined"))
	{	
		var s=s_gi(s_account);
		s.templtv=s.linkTrackVars;
		s.templte=s.linkTrackEvents;
		s.manageVars("clearVars"); 
		s.linkTrackVars="eVar30";
		s.eVar30=LinkName;
		s.tl(obj,'o',LinkName); 
		if(s.templtv) s.linkTrackVars=s.templtv;
		if(s.templte)s.linkTrackEvents=s.templte;
	}
}