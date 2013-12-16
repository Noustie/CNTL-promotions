$(function(){

	var tl = new TimelineMax({paused:true, repeat:7, yoyo:true});
	var switchIcons = $(".switch-icon1, .switch-icon2, .switch-icon3");
	var bubble1 = $(".bubble1");
	var bubble2 = $(".bubble2");
	var shadow = $(".shadow");
	var greenIcons = $(".green-icons");
	var bits = $(".bitstatic");

	function randNum( bit ){
        TweenMax.fromTo(bit, 0.2+(Math.random()*0.2), {top:Math.floor(Math.random()*113) + 1, x:-174, z:-1}, {z:-1, x:174, ease:Linear.easeNone, onComplete:randNum, onCompleteParams:[bit] }, 0);
    }

	function swing(target) {
		// the values in vars can (and should) be tweaked to modify the way the swing works
		// * = affected by power
		var vars = {
			origin: 'top center',   // transformOrigin
			perspective: 600,       // transformPerspective
			ease: Power1.easeInOut, // an easeInOut should really be used here...
			power: 1,               // multiplier for the effect that is reduced to 0 over the duration
			duration: 2,            // total length of the effect (well, it can be up to vars.speed longer than this)
			rotation: -90,          // start rotation, also stores target rotations during tween
			maxrotation: 30,        // * max rotation after starting
			speed: 0.5,             // minimum duration for each swing
			maxspeed: 0.2           // * extra duration to add to the larger swings (any sort of real physics seems like overkill)
		};

		// target could be a string selector (it will be selected each swing though...), or a DOM or jQuery object
		vars.target = target;

		// starting position
		TweenMax.set(vars.target, { rotationX: vars.rotation, transformOrigin: vars.origin, transformPerspective: vars.perspective });

		TweenMax.to(vars, vars.duration, { power: 0, onStart: nextSwing, onStartParams: [vars] });
	}

	function nextSwing(vars) {
		if (vars.power > 0) {
			vars.rotation = (vars.rotation > 0 ? -1 : 1) * vars.maxrotation * vars.power;
			TweenMax.to(vars.target, vars.speed + vars.maxspeed * vars.power, { rotationX: vars.rotation, ease: vars.ease, opacity:1, onComplete: nextSwing, onCompleteParams: [vars] });
		} else {
			TweenMax.to(vars.target, vars.speed, { rotationX: 0, ease: vars.ease, opacity:1 });
		}
	}

	if (!!document.createElement('canvas').getContext && !!document.createElement('canvas').getContext('2d')) {
		tl.to(bubble1, .5, {top:33}, 0)
			.to(bubble2, .7, {top:123}, 0)
			.to(shadow, .6, {scale:.6, transformOrigin:"center center"}, 0);
		}else {
		tl.to(bubble1, .5, {top:33}, 0)
		.to(bubble2, .7, {top:123}, 0);
	}

	$(window).load(function () {
		$('.switch').waypoint(function() {
			swing('.switch-icon1');
			setTimeout(function() { swing('.switch-icon2'); },200);
			setTimeout(function() { swing('.switch-icon3'); },400);
			$('.switch').waypoint('destroy');
		}, { offset: 'bottom-in-view'});
		
		$('.content').waypoint(function() {
			function loopy(){
				tl.restart();
			}
			window.setInterval(loopy, 20000);

			setTimeout(function() { 
				tl.play();
				loopy();
			},3500);
			
			$('.content').waypoint('destroy');
		}, { offset: '60%'});

		$('.content-icon1').waypoint(function() {
			TweenMax.to($(".content-icon1"), .5, {backgroundPosition: '0px center'});
			$('.content-icon1').waypoint('destroy');
		}, { offset: 'bottom-in-view'});

		$('.content-icon2').waypoint(function() {
			TweenMax.to($(".content-icon2"), .5, {backgroundPosition: '3px center'});
			$('.content-icon2').waypoint('destroy');
		}, { offset: 'bottom-in-view'});

		$('.content-icon3').waypoint(function() {
			TweenMax.to($(".content-icon3"), .5, {backgroundPosition: '6px center'});
			$('.content-icon1').waypoint('destroy');
		}, { offset: 'bottom-in-view'});

		$('.content-icon4').waypoint(function() {
			TweenMax.to($(".content-icon4"), .5, {backgroundPosition: '0px center'});
			$('.content-icon1').waypoint('destroy');
		}, { offset: 'bottom-in-view'});

		bits.each( function (i, ele) {
			randNum(ele);
		});

	});

});


