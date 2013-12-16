$(function(){

	var demoProps = {w:0,h:0};
	tl_demo = new TimelineMax({paused: true});
	tl_start = new TimelineMax({paused: true});
	
	tl_demo.to($(".lady"), 0.5, { left:"-200px", scale: 1.3, alpha:0, ease: Power2.easeInOut}, 0)
	 		.to( $(".anim2"), 0.5, { left:"700px", scale: 1.3, alpha:0, ease: Power2.easeInOut}, 0)
	 		.to( $(".lady, .anim2"), 0.1, { display:"none", }, 0.7)
			.to($(".roomblur"), 0.5, { alpha:0 }, 0.3)
			.to($(".roomblur"), 0.1, { display:"none" }, 0.8)
			.to($(".tips"), 0.1, { display:"block" }, 0.8)
			.from($(".tipDot1"), 0.7, { alpha:0, scale:0.2, y:-50, ease:Back.easeOut, delay: 1.2 }, 0)
			.from($(".tipDot2"), 0.7, { alpha:0, scale:0.2, y:-50, ease:Back.easeOut, delay: 1.3}, 0)
			.from($(".tipDot3"), 0.7, { alpha:0, scale:0.2, y:-50, ease:Back.easeOut, delay: 1.4}, 0)
			.from($(".tipDot4"), 0.7, { alpha:0, scale:0.2, y:-50, ease:Back.easeOut, delay: 1.5}, 0)
			.from($(".tipDot5"), 0.7, { alpha:0, scale:0.2, y:-50, ease:Back.easeOut, delay: 1.6}, 0)
			.from($(".tipDot6"), 0.7, { alpha:0, scale:0.2, y:-50, ease:Back.easeOut, delay: 1.7}, 0)
			.from($(".tipDot7"), 0.7, { alpha:0, scale:0.2, y:-50, ease:Back.easeOut, delay: 1.8}, 0)
			.from($(".tipDot8"), 0.7, { alpha:0, scale:0.2, y:-50, ease:Back.easeOut, delay: 1.9}, 0);
	
	tl_start.from( $(".lady"), 1, { alpha:0, ease:Power2.easeOut }, 0.5)
			.from( $(".lady"), 1, { left:"300px", ease:Power2.easeOut }, 0.9)
	 		.from( $(".anim2 .anim2-s1"), 0.7, {left:"-600px", ease:Power2.easeInOut}, 0.5)
	 		.from( $(".anim2 .anim2-s2"), 0.7, {left:"-600px", ease:Power2.easeInOut}, 0.6)
	 		.from( $(".anim2 .anim2-s3"), 0.7, {left:"-600px", ease:Power2.easeInOut}, 0.7)
	 		.from( $(".anim2 .anim2-s4"), 0.7, {left:"-600px", ease:Power2.easeInOut}, 0.8)
	 		.from( $(".anim2 .anim2-s5"), 0.7, {left:"-600px", ease:Power2.easeInOut}, 0.9);

	var tl_shimmer = TweenMax.to( $(".shimmer"), 1, { backgroundPosition: "180px 6px", repeatDelay: 3, repeat: -1 } );
		
	$("a.btn-animate").click( function( e ){
		e.preventDefault();
		tl_demo.play();
		tl_shimmer.stop();
		demoProps.h = $(".demo").height();
		demoProps.w = $(".demo").width();
	});

	$(".loadvideo").on({ 
		click: function (e){
			//$(this.hash).fadeIn(500);
			var test = $('#slideshow .cycle-slideshow > div a[href*="'+ this.hash +'"].video-pop-up').eq(0);
			test.click();
			e.preventDefault();
		},
		mouseover: function (e) {
			var tip = $(this).children(".tooltip")[0];
			TweenMax.to( this, .4, { zIndex: 100 } );
			TweenMax.to( tip, .4, { left:"73px", opacity:1, overwrite: 1, display:'block' } );
			e.preventDefault();
		},
		mouseout: function (e) {
			var tip = $(this).children(".tooltip")[0];
			TweenMax.to(this, .4, { zIndex: 10 } );
			TweenMax.to(tip, .4, { left:"100px", opacity:0, overwrite: 1, 
			onCompleteParams:[tip], onComplete: function (tip) {
				TweenMax.set(tip, { display:"none", opacity: 0 } );
			}} );
			e.preventDefault();
		}
	});
	
	var videoPlayer = $('<iframe width="640" height="360" id="video" frameborder="0" allowfullscreen</iframe>'); 
	$("#slideshow").on("click", ".video-pop-up", function(e){ 
		var thishash = this.hash; 
        $(".videobox").stop(true,false).fadeOut(500);  
        $(thishash).stop(true,false).fadeIn(500, function(){
	        videoPlayer.attr( "src", $(thishash + ' .video-player').attr("data-vidsrc") );  
	        $(thishash + ' .video-player').html(videoPlayer);  
        });  
         
        $("#slideshow .vidpopup-active").removeClass("vidpopup-active"); 
        $('#slideshow a[href*="'+thishash+'"]').parent("div").addClass("vidpopup-active"); 
         
        $('html, body').animate({scrollTop:0}, 'slow').delay(1000);  
        console.log(videoPlayer)
        e.preventDefault();  
    });       
    $("a.close-it").click(function(e){ 
         e.preventDefault();           
         videoPlayer.attr('src', ''); 
         $(".videobox").fadeOut(500).delay(2000); 
          console.log(videoPlayer)
    });
	
	  benefitsTl = new TimelineMax({paused:true});
	  benefitsTl.to($(".benefits .dot-bar"), 1.1, {top:-97, ease:Sine.easeInOut}, "label1")
				.to($(".benefits .floater"), 1.1, {css:{backgroundPosition: "-30px -691px"}, ease:Sine.easeInOut}, "label1")
				.to($(".benefits .slow-bg"), 1.1, {css:{backgroundPosition: "-60px -250px"}, ease:Sine.easeInOut}, "label1")
				.to($(".benefits .scroll-height.tile1"), .8, {top:-458, ease:Sine.easeInOut}, "label1")
				.to($(".benefits .scroll-height.tile1"), .3, {opacity:0, ease:Sine.easeInOut}, "label1")
				
				.to($(".benefits .scroll-height.tile2"), .9, {top:-515, ease:Sine.easeInOut}, "label1")
				.to($(".benefits .scroll-height.tile2"), .5, {opacity:1, ease:Sine.easeInOut}, "label1")
				
				.to($(".benefits .scroll-height.tile2"), .9, {top:-805, ease:Sine.easeInOut}, "label2")
				.to($(".benefits .scroll-height.tile2"), .5, {opacity:0, ease:Sine.easeInOut}, "label2")
				
				.to($(".benefits .scroll-height.tile3"), .9, {top:-1027, ease:Sine.easeInOut}, "label2")
				.to($(".benefits .scroll-height.tile3"), .5, {opacity:1, ease:Sine.easeInOut}, "label2")
				
				.to($(".benefits .floater"), 1.1, {css:{backgroundPosition: "-30px -1304px"}, ease:Sine.easeInOut},"label2")
				.to($(".benefits .slow-bg"), 1.1, {css:{backgroundPosition: "-60px -360px"}, ease:Sine.easeInOut}, "label2")
				.to($(".benefits .dot-bar"), 1.1, {top:-19, ease:Sine.easeInOut}, "label2")
				
				.addLabel("label3");
				var benefitsTlTotalDuration = benefitsTl.totalDuration(); 	
				
	$(".security").click(function(e){
		e.preventDefault();
	   benefitsTl.tweenTo("label1");
	});
	$(".emanagement").click(function(e){
		e.preventDefault();
	   benefitsTl.tweenTo("label2");
	});
   	$(".convenience").click(function(e){
   		e.preventDefault();
	   benefitsTl.tweenTo("label3");
	});
	console.log(benefitsTlTotalDuration)
	
	plansTl = new TimelineMax({paused:true});
	plansTl.to($(".plans .dot-bar"), 1, {top:-89, ease:Sine.easeInOut}, "label1")
		   .to($(".plans .lady-in-corner"), .8, {right:-240, top:-200, opacity:0, ease:Sine.easeInOut}, "label1")
		   .to($(".plan-animate-container.tile1 h3"), .2, { opacity:0, ease:Sine.easeInOut}, "label1")
		   .to($(".plan-animate-container.tile1 p"), .2, { opacity:0, ease:Sine.easeInOut}, "label1")
		   
		   .to($(".plan-animate-container.tile1 h3"), .8, { top:-250, ease:Sine.easeInOut}, "label1")
		   .to($(".plan-animate-container.tile1 p"), .9, { top:-250, ease:Sine.easeInOut}, "label1")

		   .to($(".price-grid"), .3, {opacity:0, ease:Sine.easeInOut}, "label1")
		   .to($(".price-grid"), 1.4, {top:-1000, ease:Sine.easeInOut}, "label1")
		   .to($(".plan-animate-container.tile2"), .8, {top:-572, opacity:1, ease:Sine.easeInOut}, "label1")
	
		   .to($(".plans .dot-bar"), 1, {top:-22, ease:Sine.easeInOut}, "label2")
		   .to($(".plan-animate-container.tile2"), .3, {opacity:0, ease:Sine.easeInOut}, "label2")				
		   .to($(".plan-animate-container.tile2"), 1, {top:-832, ease:Sine.easeInOut}, "label2")				
		   
		   .to($(".plan-animate-container.tile3"), .9, {top:-1181, opacity:1, ease:Sine.easeInOut}, "label2")
		   
		   .addLabel("label3");
		   var plansTlTotalDuration = plansTl.totalDuration(); 
	
	$(".pricing").click(function(e){
		e.preventDefault();
	   plansTl.tweenTo("label1");
	});
	$(".installation").click(function(e){
		e.preventDefault();
	   plansTl.tweenTo("label2");
	});
   	$(".equipment").click(function(e){
   		e.preventDefault();
	   plansTl.tweenTo("label3");
	});
	console.log(plansTlTotalDuration) 
	
	$('.benefits-content .mini-nav ul li a').click(function(){
	  $('.benefits-content .mini-nav ul li').removeClass('mini-nav-active');
	  $(this).parent().addClass('mini-nav-active');
  	});      
  	$('.plans-content .mini-nav ul li a').click(function(){
	  $('.plans-content .mini-nav ul li').removeClass('mini-nav-active');
	  $(this).parent().addClass('mini-nav-active');
  	}); 	
  	
  	
  	$(".inline").colorbox({inline:true, width:"1020px"});
	$(".inline").click(function(e){
		$(".videobox").stop(true,false).fadeOut(500);
		videoPlayer.attr('src', ''); 
         e.preventDefault(); 
         console.log(videoPlayer)
	});
	
	$("a#demo-btn").bind('click', { id: '#demo' }, scroller);
	$("a#benefits-btn").bind('click', { id: '#benefits' }, scroller);
	$("a#plans-btn").bind('click', { id: '#plans' }, scroller);
	$("a#contact-btn").bind('click', { id: '#contact' }, scroller);
	$("a#support-btn").bind('click', { id: '#support' }, scroller);
	
	function scroller(event){
		var scrollYPos = $(event.data.id).offset().top;
		var windowScrollTop = $(window).scrollTop();
		var dur = Math.abs((scrollYPos - windowScrollTop) / 800);
		$('html,body').animate({scrollTop: scrollYPos }, dur*1000);
		event.preventDefault();
	}
		
	$(window).load(function () { tl_start.play() });
});
