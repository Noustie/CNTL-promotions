var currentTab = $('#tabnav li.active a').attr('href');

function pageInit () {
	$("#tabnav li a").click(function (e) {
		switchTabs(this.hash);
		e.preventDefault();
	});
	var q = getQuerystring('tabid');
	$(".nojs").removeClass("nojs").addClass('hasjs');

	if ( !q ) { switchTabs(currentTab) }
	else { $('a[href=#'+q+']').trigger('click'); }

	$("a[clicktrack]").live( 'click', function (e) {
		trackClick( $(this).attr("clicktrack"), this);
	});
}

$(document).ready( function () { pageInit(); } );

function switchTabs(tabN){
	var btnName = tabN.substr(1);
	var tabName = btnName + "Tab";

	var newTab = $("."+tabName);
	if ( newTab.length > 0 ) {
		$('.tabBtn, .tabin').removeClass('active');
		newTab.addClass('active');
	}
}

function trackClick(LinkName,obj) {
	if(!(typeof s_account === "undefined")) {
		var s = s_gi(s_account);
		s.templtv = s.linkTrackVars;
		s.templte = s.linkTrackEvents;
		s.manageVars("clearVars");
		s.linkTrackVars = "eVar30";
		s.eVar30 = LinkName;
		s.tl(obj,'o',LinkName);
		if(s.templtv) s.linkTrackVars = s.templtv;
		if(s.templte) s.linkTrackEvents = s.templte;
	}
}

var getQuerystring=function(key) {
	var a = location.search.slice(1).split("&"), GET = [];
	for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
	return GET[key] || null;
}
