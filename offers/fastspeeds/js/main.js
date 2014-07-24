var tl;
$(function(){
	$('.sec1').waypoint(function() {
	  	$('.one').delay(3000).animate({
	   		 width: "100%"
	   	}, 500 );
	   	$('.two').delay(3000).animate({
	   		 width: "100%"
	   	}, 900 );
	    $('.three').delay(3000).animate({
	   		 width: "100%"
	   	}, 1300 );
	   	$('.four').delay(3000).animate({
	   		 width: "100%"
	   	}, 1600 );
	}, { offset: 'bottom-in-view'});

	if ( !$('html').hasClass('oldIE') ) {
	
		tl = new TimelineLite({pause:true});
		tl.from($(".herotext-part1"),  1, { x:-1500, z: 20, rotationY: 30, ease:Power4.easeOut }, .5)

		  .from($(".herotext-part2"), .5, { x:2000, z: 20, rotationY: -30, ease:Power2.easeOut  }, 1.2)
		  
		  .from($(".herotext-part3"), 2.5, { x:2000, rotationX: 3600, ease:Power4.easeOut }, 1.8)
		  
		  .from($(".herotext-part4"), 1.5, { opacity: 0 }, 2.4);
		  
	}
});

