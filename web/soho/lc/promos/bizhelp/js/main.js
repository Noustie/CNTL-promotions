$(function(){
  $("#changestate1").hide();
  var $itemContent1 = $("#changestate1");
  
  $("#expandButton1, #tog-img1").click(function(e){
    e.preventDefault();
    if($itemContent1.hasClass('closed')){
    	$itemContent1.stop(true,false).delay(200).slideDown('slow',function(){
	    		$('#expandButton1').attr('clicktrack',$('#expandButton1').attr('clicktrack').replace( 'expand', 'close'));
	    		$('#tog-img1').parent().attr('clicktrack',$('#expandButton1').attr('clicktrack').replace( 'expand', 'close'));
    	}).toggleClass('opened closed');
    	
    	var newtext = $('#expandButton1').text() == 'Expand +' ? 'Close -' : 'Expand +';
    	$('#expandButton1').text(newtext);
		var newimg = $('#tog-img1').attr('src') == 'img/toggle-button.png'?'img/toggle-button-neg.png':'img/toggle-button.png';
		$('#tog-img1').attr('src',newimg); 
		 
    } else {
    
      	$itemContent1.delay(200).slideUp('slow',function(){
	    		$('#expandButton1').attr('clicktrack',$('#expandButton1').attr('clicktrack').replace( 'close', 'expand'));
	    		$('#tog-img1').parent().attr('clicktrack',$('#expandButton1').attr('clicktrack').replace( 'close', 'expand'));
    	}).toggleClass('closed opened');
    	
    	var newtext = $('#expandButton1').text() == 'Close -' ? 'Expand +' : 'Close -';
    	$('#expandButton1').text(newtext);
    	var newimg = $('#tog-img1').attr('src') == 'img/toggle-button-neg.png'?'img/toggle-button.png':'img/toggle-button-neg.png';
    	$('#tog-img1').attr('src',newimg);
    }
  });
});

$(function(){
  $("#changestate2").hide();
  var $itemContent2 = $("#changestate2");
  
  $("#expandButton2, #tog-img2").click(function(e){
    e.preventDefault();
    if($itemContent2.hasClass('closed')){
    	$itemContent2.stop(true,false).delay(200).slideDown('slow',function(){
	    		$('#expandButton2').attr('clicktrack',$('#expandButton2').attr('clicktrack').replace( 'expand', 'close'));
	    		$('#tog-img2').parent().attr('clicktrack',$('#expandButton2').attr('clicktrack').replace( 'expand', 'close'));
    	}).toggleClass('opened closed');
    	
    	var newtext = $('#expandButton2').text() == 'Expand +' ? 'Close -' : 'Expand +';
    	$('#expandButton2').text(newtext);
		var newimg = $('#tog-img2').attr('src') == 'img/toggle-button.png'?'img/toggle-button-neg.png':'img/toggle-button.png';
		$('#tog-img2').attr('src',newimg); 
		 
    } else {
    
      	$itemContent2.delay(200).slideUp('slow',function(){
	    		$('#expandButton2').attr('clicktrack',$('#expandButton2').attr('clicktrack').replace( 'close', 'expand'));
	    		$('#tog-img2').parent().attr('clicktrack',$('#expandButton2').attr('clicktrack').replace( 'close', 'expand'));
    	}).toggleClass('closed opened');
    	
    	var newtext = $('#expandButton2').text() == 'Close -' ? 'Expand +' : 'Close -';
    	$('#expandButton2').text(newtext);
    	var newimg = $('#tog-img2').attr('src') == 'img/toggle-button-neg.png'?'img/toggle-button.png':'img/toggle-button-neg.png';
    	$('#tog-img2').attr('src',newimg);
    }
  });
});


$(function(){
  $("#changestate3").hide();
  var $itemContent3 = $("#changestate3");
  
  $("#expandButton3, #tog-img3").click(function(e){
    e.preventDefault();
    if($itemContent3.hasClass('closed')){
    	$itemContent3.stop(true,false).delay(200).slideDown('slow',function(){
	    		$('#expandButton3').attr('clicktrack',$('#expandButton3').attr('clicktrack').replace( 'expand', 'close'));
	    		$('#tog-img3').parent().attr('clicktrack',$('#expandButton3').attr('clicktrack').replace( 'expand', 'close'));
    	}).toggleClass('opened closed');
    	
    	var newtext = $('#expandButton3').text() == 'Expand +' ? 'Close -' : 'Expand +';
    	$('#expandButton3').text(newtext);
		var newimg = $('#tog-img3').attr('src') == 'img/toggle-button.png'?'img/toggle-button-neg.png':'img/toggle-button.png';
		$('#tog-img3').attr('src',newimg); 
		 
    } else {
    
      	$itemContent3.delay(200).slideUp('slow',function(){
	    		$('#expandButton3').attr('clicktrack',$('#expandButton3').attr('clicktrack').replace( 'close', 'expand'));
	    		$('#tog-img3').parent().attr('clicktrack',$('#expandButton3').attr('clicktrack').replace( 'close', 'expand'));
    	}).toggleClass('closed opened');
    	
    	var newtext = $('#expandButton3').text() == 'Close -' ? 'Expand +' : 'Close -';
    	$('#expandButton3').text(newtext);
    	var newimg = $('#tog-img3').attr('src') == 'img/toggle-button-neg.png'?'img/toggle-button.png':'img/toggle-button-neg.png';
    	$('#tog-img3').attr('src',newimg);
    }
  });
});

$(function(){
  $("#changestate4").hide();
  var $itemContent4 = $("#changestate4");
  
  $("#expandButton4, #tog-img4").click(function(e){
    e.preventDefault();
    if($itemContent4.hasClass('closed')){
    	$itemContent4.stop(true,false).delay(200).slideDown('slow',function(){
	    		$('#expandButton4').attr('clicktrack',$('#expandButton4').attr('clicktrack').replace( 'expand', 'close'));
	    		$('#tog-img4').parent().attr('clicktrack',$('#expandButton4').attr('clicktrack').replace( 'expand', 'close'));
    	}).toggleClass('opened closed');
    	
    	var newtext = $('#expandButton4').text() == 'Expand +' ? 'Close -' : 'Expand +';
    	$('#expandButton4').text(newtext);
		var newimg = $('#tog-img4').attr('src') == 'img/toggle-button.png'?'img/toggle-button-neg.png':'img/toggle-button.png';
		$('#tog-img4').attr('src',newimg); 
		 
    } else {
    
      	$itemContent4.delay(200).slideUp('slow',function(){
	    		$('#expandButton4').attr('clicktrack',$('#expandButton4').attr('clicktrack').replace( 'close', 'expand'));
	    		$('#tog-img4').parent().attr('clicktrack',$('#expandButton4').attr('clicktrack').replace( 'close', 'expand'));
    	}).toggleClass('closed opened');
    	
    	var newtext = $('#expandButton4').text() == 'Close -' ? 'Expand +' : 'Close -';
    	$('#expandButton4').text(newtext);
    	var newimg = $('#tog-img4').attr('src') == 'img/toggle-button-neg.png'?'img/toggle-button.png':'img/toggle-button-neg.png';
    	$('#tog-img4').attr('src',newimg);
    }
  });
});


function getQueryParam (key) {
	var a = location.search.slice(1).split("&"), GET = [];
	for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
	return GET[key] || null;
}

$(function() {
	var topic = getQueryParam("topic");
	if ( !!topic ) {
		topic = topic.toLowerCase();
		if ( !!$("#"+topic).length ) {
			 $("#"+topic).prependTo("#slider");
		}
	}
});

$(function() {
	$('#slider').before('<div id="nav" class="nav">').cycle({
        fx:     		'fadeout',
        speed:   		500,
        fastOnEvent: 	2000,
        timeout: 		 5000,
        easing:      $.easeInOutQuad,
        next:   		'#next2',
        prev:   		'#prev2',
        pager:  		'#nav'
    });
});


$(function(){
	$("#nav a:eq(0)").attr('clicktrack','ctl|smb|mid_upper_educational|landing|rba|small_nav_1');
	$("#nav a:eq(1)").attr('clicktrack','ctl|smb|mid_upper_educational|landing|rba|small_nav_2');
	$("#nav a:eq(2)").attr('clicktrack','ctl|smb|mid_upper_educational|landing|rba|small_nav_3');
});






