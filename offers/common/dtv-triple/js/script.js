function trackAction(_this, qLinkName){
	if( !!window.s_account && !!window.s_gi ) {
		var s=window.s_gi(window.s_account);
		s.templtv=s.linkTrackVars;
		s.templte=s.linkTrackEvents;
		s.manageVars('clearVars');
		s.linkTrackVars='eVar30';
		s.eVar30=qLinkName;
		s.tl(_this,'o',qLinkName);
		if(s.templtv) s.linkTrackVars=s.templtv;
		if(s.templte) s.linkTrackEvents=s.templte;
	}
}

(function (window, $) {

	this.init = function () {
		$('.nojs').removeClass('nojs');
		initPopups();
		initTabs();
		initTracking();
		initFBShare();
	}

	this.initTabs = function () {
		$(document).on( 'click', '.tabsNav a', function (e) {
			tabChange(this.hash);
			e.preventDefault();
		} );

		var tabhash = location.hash;
		if ( !!$('.tabsNav a').length && ( !!!tabhash || $( '.tabsCont '+tabhash ).length == 0 ))  {
		   tabhash = $('.tabsNav a')[0].hash;
		}
		tabChange(tabhash);
	}

	this.initTracking = function () {
		$('.chatBtn a').live('mousedown', function (e) {
			var qLinkName = c2c_clickTrack;
			trackAction(this,qLinkName);
		});
		$('a[clicktrack]').live('click', function (e) {
			var qLinkName = $(this).attr('clicktrack');
			trackAction(this,qLinkName);
		});
	}

	this.tabChange = function ( tabhash ) {
		$('.tab').hide();
		var tab = $( '.tabs '+tabhash );
		if ( !!tab.length ) {
			$('.tab').stop(true, false).delay(300).fadeOut();
			$('.tabsNav .active').removeClass('active');
			if ( $('.tab').index(tabhash) !== 0 ) {
				$('.tab').eq(0).before( $(tabhash) );
			}
			$(tabhash).stop(true, false).fadeIn(300);
			$('.tabsNav a[href$="'+tabhash+'"]').addClass('active');
		}
	}

	this.initPopups = function () {
		$(document).on('click', ".popupTrigger", function (e) {
			var $this = $(this);
			var width = ( !!$this.data('width') ) ? $this.data('width') : 500;
			var name = ( !!$this.data('name') ) ? $this.data('name') : 'discWindow';
			window.open( this.href, name, 'height=500,width='+width+',top=100,left=100,scrollbars=yes');
			e.preventDefault();
		});
	}

	this.getQueryParam = function (key, urlsearch) {
		if ( !!urlsearch ) urlsearch = location.search;
		var a = urlsearch.slice(1).split("&"), GET = [];
		for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
		return GET[key] || null;
	};

	this.initFBShare = function () {
		$('.fbshare a').live( 'click', function (e) {
			var share = {
			  method: 'stream.share',
			  u: $(this).attr('data-href')
			};
			if ( !!FB ) {
				FB.ui(share);
			}
			e.preventDefault();
		});
	}

	$(init);
})(window, jQuery);
