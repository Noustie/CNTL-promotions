$(function(){
	if (!!document.createElement('canvas').getContext && !!document.createElement('canvas').getContext('2d')) {
		var particle = $(".particle");
		function getEachParticle(){
			particle.each(particleCoords);
		}
		function particleCoords(i, ele){
			var rnd = Math.random();
			var fxl = 462;
			var txl = -400+(Math.random()*1500);
			var yBend = -100;

			if (txl > 1000){
				yBend = rnd*(155 - -75)+ -75;
			} else if (txl < -100){
				yBend = rnd*(155 - 1)+ 1;
			}

			var angleDegL = Math.atan2(165 - yBend, fxl - txl) * 180 / Math.PI;
			randNumLeft(i, ele, txl, fxl, angleDegL, yBend);
		}
		function randNumLeft( i, comet, txl, fxl, angleDegL, yBend ){
	        TweenMax.fromTo(comet, 0.6+(Math.random()*1), {x:fxl, y:165, rotation:angleDegL, opacity:0.1, scaleY:0.1}, {x:txl, y:yBend, rotation: angleDegL, opacity: 0.6, scaleY: 0.5, ease:Power4.easeOut, onComplete:particleCoords, onCompleteParams:[i,comet] });
	    }
	    getEachParticle();
	}

	$(".toggle a").toggle(function(){
    	$(".expanded").stop(false, true).slideDown('slow');
    	TweenMax.to($(".toggle a img"), 0.5, {rotation:180, transformOrigin:"50% 50%", ease:Strong.easeIn})
    }, function(){
    	$(".expanded").stop(false, true).slideUp('slow');
    	TweenMax.to($(".toggle a img"), 0.5, {rotation:0, transformOrigin:"50% 50%", ease:Strong.easeIn})
    });

});