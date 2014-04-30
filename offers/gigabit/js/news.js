$(function(){
	if (!!document.createElement('canvas').getContext && !!document.createElement('canvas').getContext('2d')) {
		var particle = $(".news-optic.particle");

		function getEachParticle(){
			particle.each(particleCoords);
		}
		
		function particleCoords(i, ele){
			var rnd = Math.random();
			var rightRange = 640;
			var totalRange = 1465;
			var fxl = randNumRange(940, -rightRange, rnd);//rnd*(940 - -100)+ -100;
			var txl = randNumRange(940+rightRange+90, 0, rnd);//rnd*(940 - 0)+490;
			var angleDegL = Math.atan2(-100 - 400, fxl - txl) * 180 / Math.PI;
			randNumLeft(i, ele, txl, fxl, angleDegL, totalRange);
		}

		function randNumLeft( i, comet, txl, fxl, angleDegL, totalRange ){
	        TweenMax.fromTo(comet, 0.5+(Math.random()*1), {x:fxl, y:-100, rotation:angleDegL, opacity:0.3, scale:1.5*(txl/totalRange)}, {x:txl, y:400, rotation: angleDegL, opacity: 0.1, scale: 6*(txl/totalRange), ease:Power3.easeIn, onComplete:particleCoords, onCompleteParams:[i,comet] });
	    }

	    function randNumRange(min, max, rnd){
			if(!rnd){
				var rnd = Math.random();
			}
			return Math.floor(rnd * (max - min + 1)) + min;
		}

	    getEachParticle();
	}
});