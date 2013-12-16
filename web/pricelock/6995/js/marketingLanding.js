var currentTab = $('#tabnav li.active a').attr('href');

function pageInit () {
	$("#tabnav li a").click(function () {
		switchTabs(this.hash); 
		return false;							  
	});
	var q = getQuerystring('tabid');
	$(".nojs").removeClass("nojs");	

	if ( !q ) { switchTabs(currentTab) }
	else { $('a[href=#'+q+']').trigger('click'); }
	
	// for clearing form fields on focus in right rail
	$(".inputText").focus(function() {
		if( this.value == this.defaultValue ) {
			this.value = "";
		}
	}).blur(function() {
		if( !this.value.length ) {
			this.value = this.defaultValue;
		}
	});
}

function switchTabs(tabN){
	var btnName = tabN.substr(1);
	var tabName = btnName + "Tab";
	
	$('.tabBtn, .tabin').removeClass('active');
	$("."+tabName).addClass('active');
}

var getQuerystring=function(key) {
	var a = location.search.slice(1).split("&"), GET = [];
	for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
	return GET[key] || null;
}