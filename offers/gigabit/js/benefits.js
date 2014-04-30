$(function(){
	if (!!document.createElement('canvas').getContext && !!document.createElement('canvas').getContext('2d')) {
		var tl = new TimelineMax({repeat:-1});
		var particle = $(".particle3");

		particle.each( function (i, ele) {
			tl.fromTo(ele, 0.5,
				{	
					y:Math.random()*243,
					x:-600,
					opacity:0.8,
					scaleY:0.5
				},
				{	
					y:87,
					x:460,
					opacity:0.8,
					scaleY:(0.01+(Math.random()*0.1)),
					ease:Power2.easeInOut
			}, 0.4)
		});

		tl.to(particle, 1, {opacity:0})
			.fromTo($(".burst1, .burst2"), 1, {opacity:0}, {opacity:1}, 0.6)

			.fromTo($(".burst1"), 2, {left:"-=60", top:"+="+(0+(Math.random()*15)), scale:0.5}, {left:"480", top: "87", scale:1, ease:Power2.easeInOut}, 0.01)
			.fromTo($(".burst2"), 2, {left:"-=60", top:"-="+(0+(Math.random()*15)), scale:0.5}, {left:"480", top: "87", scale:1, ease:Power2.easeInOut}, 0.01)

			.fromTo($(".burst1"), 4, {rotation:0}, {rotation:"+="+(15+(Math.random()*20)),ease:Power1.easeOut}, 1)
			.fromTo($(".burst2"), 4, {rotation:0}, {rotation:"-="+(15+(Math.random()*20)),ease:Power1.easeOut}, 1)
			//out
			.to($(".burst1"), 1, {opacity:0, scale:0, rotation:0, left:"+=65"}, 7)
			.to($(".burst2"), 1, {opacity:0, scale:0, rotation:0, left:"+=45"}, 7)


		particle.each( function (i, ele) {
			tl.fromTo(ele, 0.1+(Math.random()*0.4),
				{	
					x:480,
					y:87,
					opacity:0.3,
					scale:0.5
				},
				{	
					x:1020,
					y:100+Math.random()*100,
					rotationY: 20+Math.random()*-90,
					opacity:0.8,
					scale:0.1,
					ease:Expo.easeIn
			}, 7.1)
		});
		
		TweenMax.fromTo($(".tac"), 0.05, {rotation:"0"}, {rotation:"+=4", repeat:-1, yoyo:true, transformOrigin:"28px 20px"})
	}	

});