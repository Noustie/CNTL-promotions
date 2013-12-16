function polyfillRequestAnimFrame (window) {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
        window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        }
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        }
    }
}
$(function () {
	polyfillRequestAnimFrame(window);

	var xf = 40;
	var xh = xf/4;
	var xm = xf/4;

	var yf = 20;
	var yh = yf/2;
	var ym = yf/4;

	var xmod = 1; //Increase to slow down X
	var ymod = 1; //Increase to slow down Y

	var xmin = 0.2; //Increase to slow down X
	var ymin = 0; //Increase to slow down Y

	var bgs = [
		{
			ele: document.getElementById("bg1"),
			pos: { x: Math.round(Math.random()*1000), y: Math.round(Math.random()*1000) },
			mods: { x: 20, y: 0 }
		},
		{
			ele: document.getElementById("bg2"),
			pos: { x: Math.round(Math.random()*1000), y: Math.round(Math.random()*1000) },
			mods: { x: 30, y: 0 }
		}/* ,
		{
			ele: document.getElementById("bg3"),
			pos: { x: Math.round(Math.random()*100), y: Math.round(Math.random()*100) },
			mods: { x: Math.round((Math.random()*xf)-xh)/xm, y: Math.round((Math.random()*yf)-yh)/ym }
		} */
	];


	function setBGPercent ( bgObj ) {
		var mx = bgObj.mods.x/xmod;
		var my = bgObj.mods.y/ymod;
		if ( Math.abs(mx) < xmin) { 
			if ( !!mx ) {
				mx = xmin * (Math.abs(mx)/mx);
			} else {
				mx = xmin;
			}
		}
		if ( Math.abs(my) < ymin ) {
			if ( !!my ) {
				my = ymin * (Math.abs(my)/my);
			} else {
				my = ymin;
			}
		}
		bgObj.pos.x = bgObj.pos.x+(mx);
		bgObj.pos.y = bgObj.pos.y+(my);
		bgObj.ele.style.backgroundPosition = bgObj.pos.x+"px " + bgObj.pos.y + "px";
	}


	function animateBGS () {
		for ( var bg in bgs ) {
			setBGPercent( bgs[bg] );
		}
		window.requestAnimationFrame(animateBGS);
	}

	animateBGS();

});