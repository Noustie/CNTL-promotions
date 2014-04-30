$(function(){
	if (!!document.createElement('canvas').getContext && !!document.createElement('canvas').getContext('2d')) {
		var tl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:8});

		tl.fromTo($(".wf1"), 1, {opacity: 0, left:"-=100"}, {opacity:1, left:"150", ease:Power2.easeOut}, 0)
		.fromTo($(".wf2"), 1, {opacity: 0, left:"+=100"}, {opacity:1, left:"150", ease:Power1.easeOut}, 0);

		//left side
		var bitsL = $(".bitstaticL");
		function getEachParticleLeft(){
			bitsL.each(leftParticleCoords);
		}
		function leftParticleCoords(i, ele){
			var rnd = Math.random();
			var txl = rnd*(340 - -50)+ -50;
			var fxl = rnd*(350 - 330)+330;
			var angleDegL = Math.atan2(40 - 300, fxl - txl) * 180 / Math.PI;
			randNumLeft(i, ele, txl, fxl, angleDegL);
		}
		function randNumLeft( i, bitL, txl, fxl, angleDegL ){
	        TweenMax.fromTo(bitL, 0.3+(Math.random()*0.5), {x:fxl, y:40, rotation:angleDegL, opacity:0.6, scale:0.3}, {x:txl, y:300, rotation: angleDegL, opacity: 1, scale: 1, ease:Power2.easeOut, onComplete:leftParticleCoords, onCompleteParams:[i,bitL] }, 0);
	    }

	    //right side
	    var bitsR = $(".bitstaticR");
		function getEachParticleRight(){
			bitsR.each(rightParticleCoords);
		}
		function rightParticleCoords(i, ele){
			var rnd = Math.random();
			var fxr = rnd*(700 - 440)+440;
			var txr = rnd*(400 - 360)+360;
			var angleDegR = Math.atan2(40 - 275, txr - fxr) * 180 / Math.PI;
			randNumRight(i, ele, fxr, txr, angleDegR);
		}
		function randNumRight( i, bitR, fxr, txr, angleDegR ){
			TweenMax.fromTo(bitR, 0.3+(Math.random()*0.5), {x:fxr, y:275, rotation:angleDegR, opacity:1, scale:1}, {x:txr, y:40, rotation: angleDegR, opacity: 0.8, scale: 0.3, ease:Power2.easeOut, onComplete:rightParticleCoords, onCompleteParams:[i,bitR] }, 0);
		}

		getEachParticleLeft();
		getEachParticleRight();
	}
});