(function (window) {
	var $ = window.jQuery;

	var init = function (){
		
		$(".fiberOverlay").colorbox( { inline: true, opacity:0.5, href:this.hash, 
		  innerWidth: 710, innerHeight: 930, opacity: 0.5, fixed: false, top: 20, scrolling: false });
		$(".overlayVideo").colorbox( { iframe:true, opacity:0.5, href:this.href, 
		  innerWidth: 770, innerHeight: 585, opacity: 0.5, fixed: false, top: 20, scrolling: false });
		  // OVERLAY CLOSE BUTTON
       $('.overlayClose').live('click', function (e) {
           e.preventDefault();
           $.colorbox.close();
       });
	   qa.initialize();
	};
	
	$(document).ready(init);
})(window);
