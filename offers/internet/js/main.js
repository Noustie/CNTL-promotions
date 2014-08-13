$(function(){

	var bg = $("body");




	// function x(){

	// }







	$(window).scroll( function() { 
		var fromtheTop = $(this).scrollTop();
		console.log(fromtheTop);


		// Calculate distance scrolled 
		if (fromtheTop > 0) { 
			// Make sure it's never less than 0 
			var newPos = ( (fromtheTop * 0.08) + 0); 
			//Ratio here - change 
			if ($('html').hasClass('csstransforms3d')) {
				TweenMax.to(bg, 0.1, {backgroundPosition:'center '+newPos+'px'});						
			}
		} else { 
			// If it's less than 0, reset to original position 
			TweenMax.set(bg, {backgroundPosition:'center 0px'});						
		}
	});
























});
