$(function () {
	function init () {
		$(".callMeBox a").live('click', function (event) {
			mboxTrack('promotions-ctl-smb-120416-6');
		});
		$(window).load( function () {
			setInterval( swapCtaOnTime, 1000 );
		});
	}

	//CTA SWAPPING
	function swapCtaOnTime () {
		var lp_btn = $('.callMeBox a img');
		var lb_btnSrc = '';
		if ( !!lp_btn && !!lp_btn.length ) {
			lb_btnSrc = lp_btn.attr('src');
			if ( !!lb_btnSrc && matchLivePerson(lb_btnSrc) ) {
				$('.activeTimedCta').removeClass('activeTimedCta');
				$('#clickToCallMe').addClass('activeTimedCta');
			} else {
				$('.activeTimedCta').removeClass('activeTimedCta');
				$('#contactForm').addClass('activeTimedCta');
			}
		}
	}

	function matchLivePerson ( src ) {
		var isOpen = true;
		if ( src.match( /offline/gi ) ) {
			isOpen = false;
		}
		return isOpen;
	}

	init();
});
