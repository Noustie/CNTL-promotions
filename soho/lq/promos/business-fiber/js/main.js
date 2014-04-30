$(function () { 
	var tabthis = $("#nav li");

	var mainDur = 1000;
	function setupTransition () {
		//SIMPLIFIED HEADER TRANSITION FOR UNSUPPORTED BROWSERS.
		if ( $('#main').hasClass('oldIE') || $("html").hasClass("isAndroid") || ( !TweenMax && !TimelineMax ) ) {
			$.fn.cycle.transitions.scrollHorzFade = function($cont, $slides, opts) {
				$cont.css('overflow','hidden').width();
				opts.before.push(function(curr, next, opts, fwd) {
					if (opts.rev)
						fwd = !fwd;
					$.fn.cycle.commonReset(curr,next,opts);
					opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
					opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
				});
				opts.before.push(function(curr, next, opts, fwd) {
					var hidden = $slides.not(next);
				});
				opts.cssFirst.left = 0;
				opts.cssBefore.top = 0;
				
				opts.cssBefore.opacity = 0;
 
				opts.animIn.left = 0;
				opts.animOut.top = 0;
				
				opts.animIn.opacity = 1;
				opts.animOut.opacity = 0;
			};			
			return "scrollHorzFade";
		}
 
		//HEADER TRANSITION FOR MODERN BROWSERS.
		$.fn.cycle.transitions['tweenHeader'] = function($cont, $slides, opts) {
			$slides.css( { display: 'block' } );
 
			if ( !opts.timelines ) {
				opts.timelines = {};
 
				//ON ELEMENT FORMAT OF TWEEN MAP:
				//<div data-tweenmap="{ dur: 1.3, offset:0.5, props: { backgroundPosition: '-500px 0px', ease: Back.easeOut } }">content</div>
 
				//Defaults
				var default_tweenmap = {
					offset : 0,
					dur : opts.speed / 2000,
					props : {
						roundProps: "x,y,height,width,backgroundPosition",
						ease: Strong.easeOut,
						delay: 0.1
					}
				}
 
				var createTimeline = function ( timelineID, slide, dir ) {
					var tl = new TimelineMax( { paused: true, autoRemoveChildren: false });
					tl.append( TweenMax.set( slide, { display: "none", autoAlpha: 0, x: 0, y: 0, z: 0 } ) );
					tl.to( slide, 0.3, { autoAlpha: 1, display: "block" }, 0.01 );
 
					TweenMax.set( slide, { perspective: 500 } );
 
					// data-tlid PROPERTY LINKS ITEMS TOGETHER INTO TIMELINE GROUPS.
					$('*[data-tweenmap]', slide).each( function ( index, ele ) {
						var tweenMap = $.extend( true, {}, default_tweenmap, eval( "(" + $(this).attr("data-tweenmap") + ")" ) );
						TweenMax.set( ele, { opacity: 1, x: 0, y: 0, z: 0 } );
						tweenMap.props.delay = ( tweenMap.props.delay * index );
						tl.insert( TweenMax.from( ele, tweenMap.dur, tweenMap.props), tweenMap.offset );
					});
					return tl;
				}

				$slides.each(function ( index, slide ) {
					var tlID = "tl"+index;
					$(slide).data('timelineindex', tlID );
 
					TweenMax.set( slide, {display: "none", opacity: 0} );
					opts.timelines[ tlID ] = createTimeline( tlID, slide, 1 );
 
					if ( opts.speed / 1000 < opts.timelines[ tlID ].totalDuration() ) {
						 opts.speed = opts.timelines[ tlID ].totalDuration()*1000;
					}
					if ( index === 0 ) {
						opts.timelines[ tlID ].time( opts.timelines[ tlID ].totalDuration() );
					}
				});
			}
 
			opts.fxFn = function(curr,next,opts,after) {
				var nextTL = $(next).data('timelineindex');
				var currTL = $(curr).data('timelineindex');
				var tlDir = 1;
				if ( !opts.fwd ) tlDir= -1;
 
				var TLin = opts.timelines[ nextTL ];				
				if ( curr !== next ) {
					var TLout = opts.timelines[ currTL ];
					if ( !!TLout ) {
						TLout.duration(opts.speed/3000).reverse();
					} 
					if ( !!TLin ) {
						var playTLIN = function () {
							for ( var tl in opts.timelines ) {
								if ( !opts.timelines[tl].paused ) {
									opts.timelines[tl].pause(0);
								}
							}							
							TLin.duration(opts.speed/1200).play( 0 );
						}
						setTimeout( playTLIN, opts.speed/20 );
					}
				} else {
					TLin.time( TLin.totalDuration() );
				}
				after();
			}
		}
		return 'tweenHeader';
	}

	function trackTabAfterAnimation(){
		var currentTab = tabthis.filter(".activeSlide").children("a").attr("data-clicktrack");
		s.pageName = currentTab;
		s.t();
	}

	$('#slideshow').cycle({
        fx: setupTransition(),
        speed:  mainDur,
        timeout: 0,
        pager:  '#nav',
        after: function(a,b){
        	setTimeout(trackTabAfterAnimation, 3600);
        }, 
        pagerAnchorBuilder: function(idx, slide) {
            // return sel string for existing anchor
            return '#nav li:eq(' + (idx) + ') a';
        }
    });

	$(document).on('click', ".popupTrigger", function (e) {
		var $this = $(this);
		var width = ( !!$this.data('width') ) ? $this.data('width') : 500;
		var name = ( !!$this.data('name') ) ? $this.data('name') : 'discWindow';
		window.open( this.href, name, 'height=500,width='+width+',top=100,left=100,scrollbars=yes');
		e.preventDefault();
	});

	tl_orangeArrow = new TimelineMax({paused:true});
	tl_flame = new TimelineMax({repeat: -1, repeatDelay:0, yoyo:true, delay:3});
	var txt = $(".stag");
	var arrow = $(".blazing-orange-arrow");
	var flame = $(".f1, .f2, .f3, .f4, .f5, .f6, .f7, .f8, .f9, .f10");
	TweenMax.set([txt, arrow, flame],{visibility: "visible"});

	if ( !!document.createElement('canvas').getContext && !!document.createElement('canvas').getContext('2d')) {
		//TIMELINES FOR MODERN BROWSERS
		tl_orangeArrow.from(arrow, .35, {x:-2000, scaleY:0, opacity:0, ease:Linear.easeIn})
					  .staggerFrom(txt, .55, {x:-2000, opacity:0, ease:Power3.easeOut}, 0.05)
					  .to(arrow, .75, {rotationY:360, ease:Power3.easeOut}, .35);
					  
		tl_flame.staggerTo(flame, 3, {rotationX:60, ease:Bounce.easeOut, transformOrigin:"50% 50% 0px", opacity:0}, 0.03);

	} else {
		//TIMELINES FOR IE 8
				tl_orangeArrow.from(arrow, .35, {x:-2000, scaleY:0, opacity:1, ease:Linear.easeIn})
					  .staggerFrom(txt, .55, {x:-2000, opacity:1, ease:Power3.easeOut}, 0.05)
	}


	$(window).load(function () { tl_orangeArrow.play() });
	
});
