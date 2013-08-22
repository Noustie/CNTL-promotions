br = null;
newButton = null;
$.centurycore.bannerRotator = {
	defaults:{},
	options:{},
	buttons:[],
	slides:null,
	focusSlide:null,
	slideTimer: null,
	displayedSlide:null,
	initialize:function(options){
		$.extend(this.options,this.defaults);
		$.extend(this.options,options);
		
		this.getSlides();
		progressSlide();
	},
	createStockButtons:function(){
		var playButton,playImage = null;
		
		playImage = $('<img>');
		playImage.attr('src',this.imagesUrl + '/assets/images/templates/btn_play.gif');
		
		playButton = $('<a>');
		playButton.attr('id','banners-play-button');
		playButton.html(playImage);
		playButton.click(this.pause());
		
		return playButton;
	},
	getSlides:function() {
		var banners = $('#banner_matte').children('.banner');		
		$(banners).each(function(){
			if(this.id && this.id.indexOf('aSlide') === 0) {
				br.numberOfSlides++;
				var pageName = $(this).attr('title');
				
				var bannerID = $(this).id;
				newButton = $('<a>');
				newButton.attr('id','banner-' + br.numberOfSlides);
				//newButton.click(br.pickSlide(this.id));
				//newButton.click(br.trackSelection(pageName));
				newButton.text(br.numberOfSlides);
				br.addSlide($(this));
			}
          br.buttons[br.buttons.length] = newButton; 
		});
		
		var buttonContainer = $('#banner-buttons');
		$(this.buttons).each(function(){
			buttonContainer.append(this);
		});
		buttonContainer.append(this.createStockButtons());
		console.log(br.slides);
		br.focusSlide = br.slides;
			while(br.focusSlide.nextSlide) {
				br.focusSlide = focusSlide.nextSlide;
			}
			br.focusSlide.nextSlide = br.slides;
	},
	trackSelection:function(linkName) {
		var s=s_gi(s_account);
		s.templtv=s.linkTrackVars;
		s.templte=s.linkTrackEvents;
		s.linkTrackVars='eVar6';
		s.eVar6=linkName;
		s.tl(this,'o',linkName);
		if(s.templtv)s.linkTrackVars=s.templtv;
		if(s.templte)s.linkTrackEvents=s.templte;
	},
	pause:function(){},
	addSlide:function(aSlide) {
		newSlide = new SlideClass(aSlide);
		if(br.slides === null) {
			br.slides = newSlide;
			newSlide.showSlide();
			br.displayedSlide = newSlide;
		} else {
			focusSlide = br.displayedSlide;
			console.log(focusSlide);
			while(focusSlide.nextSlide) {
				br.focusSlide = focusSlide.nextSlide;
			}
			br.focusSlide.nextSlide = newSlide;
			newSlide.hideSlide();
		}
	},
	pickSlide:function (thing)
	{
		clearTimeout(br.slideTimer);
		br.pausedState = true;
		$("#btn_play").innerHTML = "<img style='display:inline;margin-top:0px' src='/assets/images/templates/btn_pause.gif'>";
		if(br.displayedSlide) {
			br.displayedSlide.hideSlide();
		}
		document.getElementById(br.displayedSlide.getSlideEvar6()).style.color = "#666666";
		document.getElementById(br.displayedSlide.getSlideEvar6()).style.background = "url(/assets/images/templates/btn_promo.gif) no-repeat top center";
		br.focusSlide = br.displayedSlide;
		while(br.focusSlide.nextSlide.getSlideEvar6() !== thing) {
			br.focusSlide = br.focusSlide.nextSlide;
			br.playedSlide = br.focusSlide.nextSlide;
			br.displayedSlide.showSlide();
			document.getElementById(br.displayedSlide.getSlideEvar6()).style.color = "#ffffff";
			document.getElementById(br.displayedSlide.getSlideEvar6()).style.background = "url(/assets/images/templates/btn_promo_over.gif) no-repeat top center";
		}
	}
};

br = $.centurycore.bannerRotator;
/*
function SlideshowClass(container)
{
	var slideshowContainer = document.getElementById(container);
	var slides = null;
	var numberOfSlides = 0;
	var displayedSlide = null;
	var pausedState = true;
	var progressSlideTimerFunction = progressSlide;
	var slideTimer = null;

	getSlides();
	progressSlide();

	this.pause = pauseF;
	this.pickSlide = pickSlideF;

	function pickSlideF(thing)
	{
		clearTimeout(slideTimer);
		pausedState = true;
		document.getElementById("btn_play").innerHTML = "<img style='display:inline;margin-top:0px' src='/assets/images/templates/btn_pause.gif'>";
		if(displayedSlide)
			displayedSlide.hideSlide();
		document.getElementById(displayedSlide.getSlideEvar6()).style.color = "#666666";
		document.getElementById(displayedSlide.getSlideEvar6()).style.background = "url(/assets/images/templates/btn_promo.gif) no-repeat top center";
		focusSlide = displayedSlide;
		while(focusSlide.nextSlide.getSlideEvar6() != thing)
			focusSlide = focusSlide.nextSlide;
		displayedSlide = focusSlide.nextSlide;
		displayedSlide.showSlide();
		document.getElementById(displayedSlide.getSlideEvar6()).style.color = "#ffffff";
		document.getElementById(displayedSlide.getSlideEvar6()).style.background = "url(/assets/images/templates/btn_promo_over.gif) no-repeat top center";
}
	function pauseF(instruction)
	{
		if(instruction == true || !pausedState)
		{
			clearTimeout(slideTimer);
			pausedState = true;
			document.getElementById("btn_play").innerHTML = "<img style='display:inline;margin-top:0px' src='/assets/images/templates/btn_pause.gif'>";
			displayedSlide.showSlide();
		}
		else if(instruction == false || pausedState)
		{
				document.getElementById("btn_play").innerHTML = "<img style='display:inline;margin-top:0px' src='/assets/images/templates/btn_play.gif'>";
			progressSlide()
		}
	}
	
	*/
	function SlideClass(slide)
	{
		var theSlide = slide;
		var evar6 = theSlide.attr('id').substring(theSlide.attr('id').indexOf(":") + 1, theSlide.attr('id').indexOf("@"));
		var delay = 1000 * theSlide.attr('id').substring(theSlide.attr('id').indexOf("@") + 1);
		var nextSlide = null;
		var fadeIndex = null;
		var fadeSlideInTimerFunction = fadeSlideInF;
		var fadeSlideOutTimerFunction = fadeSlideOutF;
		var fadeTimer = null;
		var fadeDelay = 30;
		var fadeStep = 10;

		this.showSlide = showSlideF;
		this.hideSlide = hideSlideF;
		this.getDelay = getDelayF;
		this.setOpacity = setOpacityF;
		this.fadeSlideIn = fadeSlideInF;
		this.fadeSlideOut = fadeSlideOutF;
		this.getSlideEvar6 = getSlideEvar6F;

		function setOpacityF(percent)
		{
			$(theSlide).fadeTo(0,percent);
			fadeIndex = percent;
		}
		function showSlideF()
		{
			$(theSlide).show();
			setOpacityF(100);
			fadeIndex = 100;
		}
		function hideSlideF()
		{
			$(theSlide).hide();
			setOpacityF(0);
			fadeIndex = 0;
		}
		function getDelayF()
		{
			return delay;
		}
		function fadeSlideInF()
		{
			setOpacityF(fadeIndex + fadeStep);
			$(theSlide).show();
			if(fadeIndex < 100)
				fadeTimer = window.setTimeout(fadeSlideInTimerFunction, fadeDelay);
		}
		function fadeSlideOutF()
		{
			setOpacityF(fadeIndex - fadeStep);
			if(fadeIndex < 1)
			{
				hideSlideF();
			}
			if(fadeIndex > 0)
			{
				fadeTimer = window.setTimeout(fadeSlideOutTimerFunction, fadeDelay);
			}
		}
		function getSlideEvar6F()
		{
			return evar6;
		}
	}
	function progressSlide()
	{
		if(br.displayedSlide)
		{
			br.displayedSlide.fadeSlideOut();
			$('#' + br.displayedSlide.getSlideEvar6()).css('color',"#666666");
			document.getElementById(br.displayedSlide.getSlideEvar6()).css('background',"url(/assets/images/templates/btn_promo.gif) no-repeat top center");
			br.displayedSlide = br.displayedSlide.nextSlide;
			br.displayedSlide.fadeSlideIn();
			$('#' + br.displayedSlide.getSlideEvar6()).css('color',"#ffffff");
			$('#' + br.displayedSlide.getSlideEvar6()).css('background',"url(/assets/images/templates/btn_promo_over.gif) no-repeat top center");
			slideTimer = window.setTimeout(progressSlideTimerFunction, br.displayedSlide.getDelay());
			pausedState = false;
		}
		else
		{
			br.displayedSlide = br.slides;
			br.displayedSlide.fadeSlideIn();
			$('#' + br.displayedSlide.getSlideEvar6()).css('color',"#ffffff");
			document.getElementById(br.displayedSlide.getSlideEvar6()).style.background = "url(/assets/images/templates/btn_promo_over.gif) no-repeat top center";
			slideTimer = window.setTimeout(progressSlideTimerFunction, br.displayedSlide.getDelay());
			pausedState = false;
		}
	}

function initRotation(rotationContainer)
{
	theSlideshow = new SlideshowClass(rotationContainer);
}
