(function (window) {
	var $ = window.jQuery;

	var init = function (e){

		$('.no-js').removeClass('no-js')

		$('#main_page_nav a').click( function (e) {
			var tabID = getQueryParam( this.rel, $(this).attr('href') );
			changeTabs( this.rel, tabID );
			e.preventDefault();
		});


		//added by Kevin for tracking
		qa.initialize();

		$('.chatBtn a').live('click',  function (event) {
			var _this = this;
			if( !!s_account ) {
				var s=s_gi(s_account);
				s.templtv=s.linkTrackVars;
				s.templte=s.linkTrackEvents;
				s.manageVars('clearVars');
				s.linkTrackVars='eVar30';
				s.eVar30='ctl|rsd|product|eMktg_q4|prism_existing_ctl.net_page|header|clicktochat';
				s.tl(_this,'o','ctl|rsd|product|eMktg_q4|prism_existing_ctl.net_page|header|clicktochat');
				if(s.templtv) s.linkTrackVars=s.templtv;
				if(s.templte) s.linkTrackEvents=s.templte;
			}
		});
	};

	var changeTabs = function( tabClass, tabID ) {
		if (!tabID || $('#inner_content #'+tabID).length <= 0 ) {
			tabID = 'premiumChannels';
		}
		$('.current').removeClass('current');
		$('#'+tabID).addClass('current');
		$('a[href$="'+tabClass+"="+tabID+'"]').parent().addClass('current');
		tabTracking(tabID);
		if ( !!window.s && !!window.s.t) {
			window.s.t();
		}
	};

	var getQueryParam = function (key, searchString) {
		var theSearch = searchString;
		if ( theSearch === undefined ) theSearch = window.location.search;
		var a = theSearch.slice(1).split("&"), GET = [];
		for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
		return GET[key] || null;
	};

	var tabOmniTracking = function (tabID) {
		if(!!!window.s) {
			window.s = {};
		}
		switch(tabID)
		{
			case 'starz':
				pageName = window.s.pageName = "ctl|rsd|product|eMktg_q4|prism_existing_ctl.net_premiumchannels";
				eBiz_evar55 = eBiz_prop26 = s.prop26 = s.eVar55 = "rsd|product|emktg_q4|prism_existing_ctl.net_premiumchannels"; //level2
				break;
			case 'showtime':
				pageName = window.s.pageName = "ctl|rsd|product|emktg_t1|prism_existing_ctl.net_showtime";
				eBiz_evar55 = eBiz_prop26 = s.prop26 = s.eVar55 = "rsd|product|emktg_t1|prism_existing_ctl.net_showtime"; //level2
				break;
			case 'moviesOnDemand':
				pageName = window.s.pageName = "ctl|rsd|product|eMktg_q4|prism_existing_ctl.net_ondemand";
				eBiz_evar55 = eBiz_prop26 = s.prop26 = s.eVar55 = "rsd|product|emktg_q4|prism_existing_ctl.net_ondemand"; //level2
				break;
			case 'hdAccess':
				pageName = window.s.pageName = "ctl|rsd|product|eMktg_q4|prism_existing_ctl.net_hdaccess";
				eBiz_evar55 = eBiz_prop26 = s.prop26 = s.eVar55 = "ctl|rsd|product|eMktg_q4|prism_existing_ctl.net_hdaccess"; //level2
				break;
			case 'nflRedZone':
				pageName = window.s.pageName = "ctl|rsd|product|emktg_t1|prism_existing_ctl.net_redzone";
				eBiz_evar55 = eBiz_prop26 = s.prop26 = s.eVar55 = "rsd|product|emktg_t1|prism_existing_ctl.net_redzone"; //level2
				eBiz_evar52 = eBiz_prop25 = s.prop25 = s.eVar52 = "rsd|product|emktg_t1";
				eBiz_evar56 = eBiz_prop52 = s.prop52 = s.eVar56 = "ctl";
				break;
			default:
				pageName = window.s.pageName = "ctl|rsd|product|eMktg_q4|prism_existing_ctl.net_premiumchannels";
				eBiz_evar55 = eBiz_prop26 = s.prop26 = s.eVar55 = "rsd|product|emktg_q4|prism_existing_ctl.net_premiumchannels"; //level2
				break;
		}
		/*
window.s.server = "promotions.centurylink.com";
		window.s.channel = s.evar41 = "rsd";
		window.s.hierarchy = "";
		window.s.prop3 = s.eVar24 = ""; //Customer Type
		window.s.prop6 = ""; //Report suite ID
		window.s.prop20 = ""; //Subchannel (Product)
		eBiz_prop24 = window.s.prop24 = s.eVar53 = "rsd|product"; //Sub Section
		window.s.prop25 =  s.eVar54 = "rsd|product|emktg_q4"; //level1
		window.s.prop27 =""; //level3
		window.s.prop38 = s.eVar48 = "static_page"; //System Group
		window.s.prop39 = s.evar49 = "landing_page"; //Cart Page Category
		window.s.prop52 = s.eVar56 = "ctl"; //Page Owner
*/
	};

	var tabDCTracking = function() {
		var axel = Math.random() + "";
		var a = axel * 10000000000000;
		$('body').append('<iframe src="https://fls.doubleclick.net/activityi;src=2660564;type=produ742;cat=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
	}

	var tabTracking = function(tabID) {
		tabOmniTracking(tabID);
		tabDCTracking(tabID);
	}

	var initTabTo = getQueryParam('tab');
	changeTabs( 'tab', initTabTo );

	$(document).ready(init);
})(window);
