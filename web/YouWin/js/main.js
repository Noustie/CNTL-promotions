(function promoAnim (window) {
	var $ = window.jQuery;

	var animObjs = {
		header: {},
		ctaObjs: {},
		tabObjs: {}
	};
	var buildArr = [];

	var initPrep = function () {
		initBuild();
		assignListeners();
	};

	var initBuild = function () {
		animObjs.header.clink = $('.centurylinkPromo');

		animObjs.header.vs = $('.versus');
		animObjs.header.cable = $('.cablePromo');

		animObjs.ctaObjs = $('.cta .animate');
		animObjs.tabObjs = $('.popupInfo .animate');

		buildArr = animObjs.header.cable.add(animObjs.header.clink).add(animObjs.header.vs).add(animObjs.ctaObjs).add(animObjs.tabObjs);

		buildArr.each(function (i, o) {
			var pos = {};
			var obj = $(this);
			if ( !!obj.attr('data-anim') ) {
				var startcss = eval( '('+ obj.attr('data-anim') +')' );

				for ( var prop in startcss ) {
					pos[prop] = parseInt( obj.css(prop), 10 );
				}

				obj.data( 'pos', pos );
				obj.css( startcss );
			}
		});
	};

	var assignListeners = function () {
		$('.disclink').bind('click', function (e) {
			if ( $(this.hash).parent().height() <= 1 ) {
				$(this.hash).parent().stop(true,false).animate({height:350}, 500);
			} else {
				$(this.hash).parent().stop(true,false).animate({height:0}, 500);
			}
			e.preventDefault();
		});
		$('.socBtn').bind('click', function (e) {
			window.open(this.href, this.id, this.rel);
			e.preventDefault();
		});
		$('a[clicktrack]').live('click', function () {
			var qLinkName = $(this).attr('clicktrack');
			var s=s_gi(s_account);
			s.linkTrackVars='eVar30';
			s.eVar30=qLinkName;
			s.tl(this,'o',qLinkName);
			s.eVar30=null;
		});
	};

	var launchAnimation = function () {
		buildArr.each(function (i, o) {
			var obj = $(this);

			var props = obj.data('pos');
			var dur = obj.attr('data-speed') || 1000;
			var delay = obj.attr('data-delay') || 0;
			var ease = obj.attr('data-ease') || 'easeOutSine';
			obj.delay(delay).animate( props, dur, ease );
		});
	};

	var loop = function () {

	};

	$(document).ready(initPrep);
	$(window).load(launchAnimation);

})(window);
