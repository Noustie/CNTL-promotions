(function (window) {
	var $ = window.jQuery,
		currentVideoPlayerID = null,
		currentEndCardID = null,
		html5VideoEnabled = parseInt( (typeof HTMLVideoElement != undefined ? 1 : 0) ) ? 1 : 0;
		isCompareCycle = false;

	var init = function () {
		if ( document.getElementById('headerCycle') ) initHeaderCycle();
		if ( document.getElementById('testimonials') ) initTestimonials();

		initColorboxes();
		initPopupLinks();
		initCompareBoxes();
		launchOnLoad();
		$('.no-js').delay(100).queue( function () {
			$('.no-js').removeClass('no-js');
		});
		initTracking();
	};

	// HEADER CYCLE
	var initHeaderCycle = function () {
		$('#headerCycle').cycle({
			fx:     'fade',
			speed:   700,
			timeout: 8000,
			pager:  '#cycleNav'
		});
		$('.pausePlay').live('click', function (e) {
			var btn = $(this);
			if ( !btn.hasClass('paused') ) {
				$('#headerCycle').cycle('pause');
				btn.addClass('paused');
			} else {
				$('#headerCycle').cycle('resume');
				btn.removeClass('paused');
			}
			e.preventDefault();
		});
	};

	// VIDEO TESTIMONIALS LOGIC
	var initTestimonials = function () {
		var videoCycle = $('#testimonyPlayer').cycle({
			fx:     'fade',
			speedIn:   	300,
			speedOut: 	200,
			startingSlide: (function () {
				var starter = 0
				$('#tmlVideoNav li a').each( function (index, obj) {
					if ( !!getQueryParam('launchVideo') && this.hash.replace('#','') === getQueryParam('launchVideo') ) {
						starter = index;
					}
				});
				return starter;
			})(),
			timeout: 0,
			allowPagerClickBubble: true,
			pager:  '#tmlVideoNav',
			pagerAnchorBuilder: function(idx, slide) {
				var btn = $('#tmlVideoNav li:eq(' + idx + ') a');
				return btn;
			},
			onPagerEvent: function (idx, slide) {
				$('#testimonyPlayer').show();
				$('#tmlVideoNav li').eq(idx).addClass('activeSlide');
				$('#tmlVideoNav li a').eq(idx).each(initVideoPlayer);
				$('#testVidEndCard .replaybtn')[0].hash = $('#tmlVideoNav .activeSlide a')[0].hash;
			}
		});

		//$('#tmlVideoNav li a').eq(0).trigger('click');

		$('#testVidEndCard .replaybtn').live( 'click', function (e) {
			$('#tmlVideoNav .activeSlide a').trigger('click');
			e.preventDefault();
		});

		$('#testVidEndCard a[href$="#prevVid"]').live('click', function (e) {
			$('#testimonyPlayer').cycle('prev');
			$('#tmlVideoNav .activeSlide a').trigger('click');
			e.preventDefault();
		});
		$('#testVidEndCard a[href$="#nextVid"]').live('click', function (e) {
			$('#testimonyPlayer').cycle('next');
			$('#tmlVideoNav .activeSlide a').trigger('click');
			e.preventDefault();
		});
	};

	// VIDEO PLAYER METHODS
	var showVideoEndCard = function ( currentVideoPlayerID ) {
		var endCard = $('#'+currentEndCardID);

		jwplayer( currentVideoPlayerID ).stop();
		//jwplayer( currentVideoPlayerID ).remove();

		if ( !!document.getElementById('testimonyPlayer') ) {
			$('#testimonyPlayer').hide();
		}

		endCard.fadeIn( 200, function () {
			currentVideoPlayerID = null;
		});

	};

	var initVideoPlayer = function (e, v) {
		if ( !!currentVideoPlayerID ) {
			showVideoEndCard( currentVideoPlayerID );
			jwplayer( currentVideoPlayerID ).stop();
			jwplayer( currentVideoPlayerID ).remove();
		}

		var wrapID;
		if ( !!e && !!e.currentTarget && !!e.currentTarget.hash ) {
			wrapID = e.currentTarget.hash;
		} else if ( !!v && !!v.hash ) {
			wrapID = v.hash;
		} else {
			return;
		}


		var vidEle = $(wrapID).find('.videoPlayer');

		if ( !!document.getElementById('testimonyPlayer') && !!vidEle.parents('#testimonials')[0] ) {
			$('#testimonyPlayer').show();
		}

		if ( !!vidEle && !!vidEle[0] && !!vidEle[0].id ) {
			$('#'+vidEle.attr('data-endcard')).hide();
			currentVideoPlayerID = vidEle[0].id;
			currentEndCardID = vidEle.attr('data-endcard');

			jwplayer( currentVideoPlayerID ).setup({
				title: ("Video: "+currentVideoPlayerID),
				width: vidEle.width(),
				height: vidEle.height(),
				autostart: eval( escape( vidEle.attr('data-autoplay') ) ),
				skin: "/test/jwplayer/centurylink.zip",
				image: vidEle.attr('data-poster'),
				modes: [
					{
						type: 'flash',
						src: '/test/jwplayer/player.swf',
						config: {
							file: vidEle.attr('data-flv'),
							provider: "rtmp",
							streamer: vidEle.attr('data-rtmp')
						}
					}
					,{
						type: "html5",
						config: {
							file: vidEle.attr('data-html5')
						}
					},
					{
						type: 'download',
						config: {
							file: (function () {
								if ( !$('body').hasClass('hasVideoPlayer') ) {
									$('body').addClass('noVideoPlayer');
								}
								return '';
							})()
						}
					}
				],
				events: {
					onReady: function () {
						$('body').addClass('hasVideoPlayer');
					},
					onPlay: function () {
						$('.noVideoPlayer').removeClass('noVideoPlayer');
					},
					onComplete: function () {
						showVideoEndCard( currentVideoPlayerID );
					}
				}
			});
		}

		if ( !!e && !!e.preventDefault ) { e.preventDefault(); }
	};


	var initColorboxes = function () {
		// OVERLAY CLOSE BUTTON
		$('.overlayClose').live('click', function (e) {
			$.colorbox.close();
			e.preventDefault();
		});

		// VIDEO PLAYER OVERLAYS
		$('.colorboxLink').colorbox({ inline: true, opacity:0.5, href:this.hash, innerWidth: 810, innerHeight: 590, fixed: false, top: 20, scrolling: false, transition: 'fade',
			onComplete: function () {
				initVideoPlayer( null, this);
			},
			onCleanup: function () {
				if ( !!currentVideoPlayerID && !!jwplayer(currentVideoPlayerID) ) {
					jwplayer( currentVideoPlayerID ).stop();
					jwplayer( currentVideoPlayerID ).remove();
				}
				currentVideoPlayerID = currentEndCardID = null;
			},
			onOpen: function () {
				onAllOverlayOpen( this );
			},
			onClosed: function () {
				onAllOverlayClose();
			}
		});
		$('.relaunchVideo').live('click', initVideoPlayer );

		// COMPARISON OVERLAY
		$('.launchCompare').colorbox( { inline: true, opacity:0.5, href:this.hash, innerWidth: 810, innerHeight: 590, fixed: false, top: 20, scrolling: false, transition: 'fade',
			onOpen: function () {
				onAllOverlayOpen( this );
			},
			onClosed: function () {
				onAllOverlayClose();
			}
		});

		// FIBER OVERLAY
		$(".fiberOverlay").colorbox( { inline: true, opacity:0.5, href:this.hash, transition: 'fade',
			innerWidth: 710, innerHeight: 930, opacity: 0.5, fixed: false, top: 20, scrolling: false,
			onOpen: function () {
				onAllOverlayOpen( this );
			},
			onClosed: function () {
				onAllOverlayClose();
			}
		});

		// SEND TO A FRIEND OVERLAY
		$('.launchSendToAFriend').colorbox({ inline: true, opacity:0.5, href:this.hash, innerWidth: 810, fixed: false, top: 20, scrolling: false, transition: 'fade',
			onComplete: function () {
				Recaptcha.create( window.publickey, "checkHuman", { theme: "clean", callback: Recaptcha.focus_response_field } );
			},
			onCleanup: function () {
				$('.submitted').removeClass('submitted');
			},
			onOpen: function () {
				onAllOverlayOpen( this );
			},
			onClosed: function () {
				onAllOverlayClose();
			}
		});

		// SEND TO A FRIEND OVERLAY FORM VALIDATION + CAPTCHA
		jQuery.extend(jQuery.validator.messages, {
			required: "All fields are required to send an email."
		});

		var validator = $("#sendToFriendForm").validate({
			debug: false,
			errorElement: "em",
			errorContainer: $("#errorWrap"),
			errorPlacement: function(error, element) {
				$("#errorWrap").html(error);
			},
			rules: {
				recaptcha_response_field: "required"
			},
			submitHandler: function(form) {
				//Show Submitted Screen
				$(form).ajaxSubmit( {
					success: function (data) {
						if ( escape(data) === "true" ) {
							$('#sendToFriendForm').parents('.form').addClass('submitted');
							validator.resetForm();
							Recaptcha.destroy();
							pageTracking('ctl|rsd|product|emktg_q4|prism_project|stf|orderconfirmation');
						} else {
							$('#recaptcha_response_field').css( {'border':'1px solid #FF6319 !important'} ).focus();
							$('#errorWrap').html("Please re-enter the recaptcha and click send again.").show();
							Recaptcha.reload();
						}
					}
				});
			}
		});
	};

	var launchOnLoad = function () {
		if ( !!getQueryParam('launchOverlay') ) {
			$('#overlayHide').children().each( function () {
				if ( !!getQueryParam('launchOverlay') && this.id === getQueryParam('launchOverlay') ) {
					$('a[href$="' + this.id + '"]').trigger('click');
				}
			});
		}
		if ( !!document.getElementById('testimonyPlayer') ) {
			$('#tmlVideoNav .activeSlide a').trigger('click');
		}
	};
	var onAllOverlayOpen = function ( pageTrackObj ) {
		var dpt = $(pageTrackObj).attr('data-pagetrack');
		if ( !!dpt ) { pageTracking( dpt ); }
		$('#headerCycle').cycle('pause');
		$('.pausePlay').addClass('paused');
	};
	var onAllOverlayClose = function () {
		$('#headerCycle').cycle('resume');
		$('.pausePlay').removeClass('paused');
		//$('#tmlVideoNav .activeSlide a').trigger('click');
	};

	var initPopupLinks = function () {
		$(".popupLink").live('click', function (e) {
			window.open( this.href, '_blank', this.rel);
			e.preventDefault();
			return false;
		});
		$('#storeLocatorForm .arrowLink').live('click', function (e) {
			$('#storeLocatorForm').submit();
			e.preventDefault();
			return false;
		});
	};

	var initCompareCycle = function () {
		if ( !isCompareCycle ) {
			isCompareCycle = $('#compareCycle').cycle({
				fx:     				'scrollHorz',
				allowPagerClickBubble: 	true,
				speed:   				700,
				slideResize:   			0,
				pager:  				'#compareCycleNav',
				next:   				'#next',
				prev:   				'#prev'
			});
			isCompareCycle.cycle('pause')
		}
	};
	var initCompareBoxes = function () {
		$('.expandBlock').live('click', function (e) {
			var getBlock = parseInt( this.href.match(/\d/i), 10) - 1;
			initCompareCycle();
			$('.compareBlocks').animate({top: 0}, 300, function () {
				isCompareCycle.cycle(getBlock);
			});
			e.preventDefault();
		});
		$('.closeExpand').live('click', function (e) {
			$('.compareBlocks').animate({top: '100%'}, 300);
			e.preventDefault();
		});
	};

	var initTracking = function () {
		//('a[clicktrack]').live( 'click', qa.trackAction );
	};

	var pageTracking = function (pageNameVar) {
		var s = window.s;
		if ( !!s && !!s.t ) {
			s.manageVars('clearVars');
			s.pageName = pageNameVar;
			s.t();
		}
	};

	var getQueryParam = function (key) {
		var a = location.search.slice(1).split("&"), GET = [];
		for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
		return GET[key] || null;
	};

	$(document).ready( init );
})(window)
