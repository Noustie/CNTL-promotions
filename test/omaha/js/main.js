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
	var pausebg = false;
	$("body").on("touchstart", function(){
		pausebg = true;
	});
	
	$("body").on("touchend", function(){
		pausebg = false;
	});
	
	polyfillRequestAnimFrame(window);

	var xf = 40;
	var xh = xf/4;
	var xm = xf/4;

	var yf = 20;
	var yh = yf/2;
	var ym = yf/4;

	var xmod = .6; //Increase to slow down X
	var ymod = .6; //Increase to slow down Y

	var xmin = 0.2; //Increase to slow down X
	var ymin = 0; //Increase to slow down Y

	var bgs = [
		{
			ele: document.getElementById("bg1"),
			pos: { x: 0, y: 25 },
			mods: { x: 30, y: 0 }
		},
		{
			ele: document.getElementById("bg2"),
			pos: { x: 2, y: 75 },
			mods: { x: 35, y: 0 }
		}
		,
		{
			ele: document.getElementById("bg3"),
			pos: { x: 0, y: 350 },
			mods: { x: 20, y: 0 }
		},
		{
			ele: document.getElementById("bg4"),
			pos: { x: 0, y: 505 },
			mods: { x: 30, y: 0 }
		}
	];


	function setBGPercent ( bgObj ) {
		var mx = bgObj.mods.x/xmod;
		var my = bgObj.mods.y/ymod;
		bgObj.pos.x = bgObj.pos.x+(mx);
		bgObj.pos.y = bgObj.pos.y+(my);
		bgObj.pos.x = bgObj.pos.x%8400;
		bgObj.ele.style.backgroundPosition = bgObj.pos.x+"px " + bgObj.pos.y + "px";
	}


	function animateBGS () {
		if (!pausebg){
			for ( var bg in bgs ) {
				setBGPercent( bgs[bg] );
			}
		}
		window.requestAnimationFrame(animateBGS);
	}

	animateBGS();

});

$(function(){
	$(".form-field.address").ghosttext();
	$(".form-field.unit").ghosttext();
	$(".form-field.zip").ghosttext();
	$(".form-field.email").ghosttext();
});

function popup(mylink, windowname)
{
if (! window.focus)return true;
var href;
if (typeof(mylink) == '1Gig')
   href=mylink;
else
   href=mylink.href;
window.open(href, windowname, 'width=550,height=420,scrollbars=yes');
return false;
}


