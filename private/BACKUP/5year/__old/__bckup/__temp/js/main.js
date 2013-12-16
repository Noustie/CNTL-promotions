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

		buildArr = [ animObjs.header.cable, animObjs.header.clink, animObjs.header.vs, animObjs.ctaObjs.eq(0), animObjs.ctaObjs.eq(1), animObjs.ctaObjs.eq(2), animObjs.tabObjs.eq(0), animObjs.tabObjs.eq(1), animObjs.tabObjs.eq(2), animObjs.tabObjs.eq(3), ];

		$( buildArr ).each(function (i, obj) {
			var pos = {};
			if ( !!obj.css('left') ) { pos.left = obj.css('left') }
			if ( !!obj.css('right') ) { pos.right = obj.css('right') }
			if ( !!obj.css('top') ) { pos.top = obj.css('top') }
			if ( !!obj.css('bottom') ) { pos.bottom = obj.css('bottom') }
			if ( !!obj.height() ) { pos.height = obj.height() }
			if ( !!obj.width() ) { pos.width = obj.width() }

			obj.data( 'pos', pos );
			console.log( pos );
			if ( !!obj.attr('data-anim') ) {
				var startcss = eval( '('+ obj.attr('data-anim') +')' );
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
	};

	var launchAnimation = function () {
		$( buildArr ).each(function (i, obj) {
			var props = obj.data('pos');
			var dur = obj.attr('data-speed') || 1000;
			var delay = obj.attr('data-delay') || 0;
			var ease = obj.attr('data-ease') || 'easeOutSine';
			obj.delay(delay).animate( obj.data('pos'), dur, ease );
		});
	};

	var loop = function () {

	};

	$(document).ready(initPrep);
	$(window).load(launchAnimation);

})(window);
