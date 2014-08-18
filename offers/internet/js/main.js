// $(function(){

// 	var bg = $("body");
// 	var newPos = 0;
// 	var fromtheTop = $(window).scrollTop();

// 	function parallax(){
// 		if (fromtheTop > 0) { 
// 			if ($('html').hasClass('csstransforms3d')) {
// 				TweenMax.to(bg, 0.2, {backgroundPosition:'center '+newPos+'px'});						
// 			}
// 		} else { 
// 			TweenMax.set(bg, {backgroundPosition:'center 0px'});						
// 		}
// 	}

// 	TweenMax.ticker.addEventListener("tick", parallax);

// 	$(window).scroll( function() { 
// 		fromtheTop = $(this).scrollTop();
// 		newPos = ( (fromtheTop * 0.25) + 0); 
// 	});

// });
