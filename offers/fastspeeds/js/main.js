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
	
	tl = new TimelineLite({pause:true});
	tl.to($(".hero-text1"), 1, {alpha:1}, .5)
	  .to($(".hero-text2"), .8, {alpha:1}, 1)

	  .to($(".better"), .5, {width:"1560px", ease:Expo.easeOut,rotationX:"+=1080deg"}, 1.2)
	  .to($(".better p"), .5, {left:"1470px", alpha:1, ease:Strong.easeOut, width:"68px"}, 1.4)
	  
	  .to($(".faster"), .5, {width:"1800px", ease:Expo.easeOut,rotationX:"+=1080deg"},1.8)
	  .to($(".faster p"), .5, {left:"1715px", alpha:1, ease:Strong.easeOut, width:"63px"}, 2)
	  
	  .to($(".family"), .5, {width:"1690px", ease:Expo.easeOut,rotationX:"+=1080deg"}, 2.4)
	  .to($(".family p"), .5, {left:"1545px", alpha:1, ease:Strong.easeOut, width:"129px"}, 2.6);
});

