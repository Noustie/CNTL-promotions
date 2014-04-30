$(function(){
	if (!!document.createElement('canvas').getContext && !!document.createElement('canvas').getContext('2d')) {
	    var tl = new TimelineMax({repeat:-1, repeatDelay:5});

	    tl.fromTo($(".particle1"), 1, {scale:0.01, left:-257, opacity:0}, {scale:1, left:80, opacity:1, ease:Power4.easeInOut})
			.fromTo($(".particle2"), 1.5, {scale:0.1, rotation:45, opacity:0}, {scale:1, rotation: -8, opacity:1, ease:Power2.easeOut}, 0.4)
			.to($(".particle1"), 2.5, {rotation:25, ease:Power1.easeInOut}, 0.5)
			.to($(".particle2"), 2.5, {rotation:-12, ease:Power1.easeInOut}, 0.5)
			.to($(".particle1, .particle2"), 2, {rotation:0, opacity:0, ease:Power2.easeIn}, 3.5)
			.to($(".particle1"), 0.5, {left: "+=400", rotation:0, ease:Power2.easeIn}, 5.2)
	}
});
