$(function(){
	var tl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:1});

	tl.fromTo($(".wf1"), 1.5, {opacity: 0, left:"-=60"}, {opacity:0.9, left:"150", ease:Quart.easeInOut}, 0)
		.fromTo($(".wf2"), 1.5, {opacity: 0, left:"+=80"}, {opacity:0.9, left:"150", ease:Quart.easeInOut}, 0)
		.fromTo($(".wf1"), 3, {left:"150", opacity:1}, {left:"-=15", opacity:0.5})
		.fromTo($(".wf2"), 3, {left:"150", opacity:1}, {left:"+=15", opacity:0.2, ease:Bounce.easeInOut})
	
	//left side
	var bitsL = $(".bitstaticL");
	function getEachParticleLeft(){
		bitsL.each(leftParticleCoords);
	}
	function leftParticleCoords(i, ele){
		var rnd = Math.random();
		var fxl = rnd*(340 - -50)+ -50;
		var txl = rnd*(350 - 330)+330;
		var angleDegL = Math.atan2(40 - 275, txl - fxl) * 180 / Math.PI;
		randNumLeft(i, ele, fxl, txl, angleDegL);
	}
	function randNumLeft( i, bitL, fxl, txl, angleDegL ){
        TweenMax.fromTo(bitL, 0.5+(Math.random()*0.5), {x:fxl, y:275, rotation:angleDegL, opacity:1, scale:1}, {x:txl, y:40, rotation: angleDegL, opacity: 0.3, scale: 0.3, ease:Power2.easeOut, onComplete:leftParticleCoords, onCompleteParams:[i,bitL] }, 0);
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
		TweenMax.fromTo(bitR, 0.5+(Math.random()*0.5), {x:fxr, y:275, rotation:angleDegR, opacity:1, scale:1}, {x:txr, y:40, rotation: angleDegR, opacity: 0.3, scale: 0.3, ease:Power2.easeOut, onComplete:rightParticleCoords, onCompleteParams:[i,bitR] }, 0);
	}

	getEachParticleLeft();
	getEachParticleRight();

});