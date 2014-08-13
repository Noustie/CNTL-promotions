$(function(){

	var bg = $("body");

	$(window).scroll( function() { 
		var fromtheTop = $(this).scrollTop(); 
		// Calculate distance scrolled 
		if (fromtheTop > 0) { 
			// Make sure it's never less than 0 
			var newPos = ( (fromtheTop * 0.1) + 0); 
			//Ratio here - change 
			if ($('html').hasClass('csstransforms3d')) {
				TweenMax.to(bg, 0.2, {backgroundPosition:'center '+newPos+'px'});						
			}
		} else { 
			// If it's less than 0, reset to original position 
			TweenMax.to(bg, 0.01, {backgroundPosition:'center 0px'});						
		}
	});
});
