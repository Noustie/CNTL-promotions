var prismJS = {}

prismJS.chanLineURL = $('#channelLineupURL').attr('href');
prismJS.storeLocatorURL = "/storeLocator.html";
prismJS.planPricesURL = $(".offer a").attr('href');
prismJS.tabMovies = { advantages: "whatisprism1.swf", how: "whatisprism2.swf", compare: "whatisprism3.swf", satisfaction:"whatisprism4.swf" };
prismJS.wipOnLoad = prismJS.tabMovies.advantages;

prismJS.divIDs = {	home:"prismHomeFlash",
					wip:"whatIsFlash",
					advanced:"advFeatFlash",
					channels:"channelsFlash" }
						
prismJS.swfIDs = {	home:"prismHomepageFlashID",
					wip:"whatIsPrismFlashID",
					advanced:"advFeatFlashID",
					channels:"channelsFlashID",
					demo:"prismDemoID" }
	
prismJS.files = {	shell:"prismShell.swf",
					demo:"prismMain.swf",
                    assetPath: "/static/Images/Personal/Iptv/",
					demoAssetsPath:"DemoFlash/",
					home:["prism_homepage.swf", "prism_homepage_2.swf"],
					wip: prismJS.tabMovies,
					advanced:"advanced_features.swf",
					channels: [ "prism_channels_1.swf", "prism_channels_2.swf" ] }
	
prismJS.sophm = new SWFObject( prismJS.files.assetPath+prismJS.files.shell, prismJS.swfIDs.home, "730", "460", "9.0.0.0", "#000000");
prismJS.sowip = new SWFObject( prismJS.files.assetPath+prismJS.files.shell, prismJS.swfIDs.wip, "730", "460", "9.0.0.0", "#000000");
prismJS.soadf = new SWFObject( prismJS.files.assetPath+prismJS.files.shell, prismJS.swfIDs.advanced, "730", "460", "9.0.0.0", "#000000");
prismJS.sochan = new SWFObject( prismJS.files.assetPath+prismJS.files.shell, prismJS.swfIDs.channels, "730", "460", "9.0.0.0", "#000000");
prismJS.soPrismDemo = new SWFObject( prismJS.files.assetPath+prismJS.files.demoAssetsPath+prismJS.files.demo, prismJS.swfIDs.demo, "730", "460", "9.0.0.0", "#000000");

prismJS.initFlash = function () {
		prismJS.sophm.addParam("wmode", "opaque");
		prismJS.sowip.addParam("wmode", "opaque");
		prismJS.soadf.addParam("wmode", "opaque");
		prismJS.sochan.addParam("wmode", "opaque");
		prismJS.soPrismDemo.addParam("wmode", "opaque");
	}
	
prismJS.currentTabFlash = null;
prismJS.rewriteCurrentFlashFn = null;
prismJS.isFlashEnabled = false;
	
prismJS.encodeJSforFlash = function (action) {
		var newVal;
		newVal = escape("javascript:") + escape(action);
		return newVal;
	}
	
prismJS.addHomepageFlash = function () {
		prismJS.sophm.addVariable("assetsPath",prismJS.files.assetPath);
		prismJS.sophm.addVariable("showPrismScript", "prismJS.launchDemo" );
		prismJS.sophm.addVariable("prismLanding",prismJS.files.home[0]);
        
		prismJS.removeOtherFlash();
		prismJS.isFlashEnabled = prismJS.sophm.write(prismJS.divIDs.home);
		prismJS.currentTabFlash = prismJS.swfIDs.home;
		prismJS.rewriteCurrentFlashFn = prismJS.addHomepageFlash;
        
        prismJS.onFlashEnabled();
	}
	
prismJS.addWIPFlash = function () {
		prismJS.sowip.addVariable("assetsPath",prismJS.files.assetPath);
		prismJS.sowip.addVariable("showPrismScript", "prismJS.launchDemo" );
		prismJS.sowip.addVariable("prismLanding",prismJS.wipOnLoad);
		prismJS.sowip.addVariable("prismMovadvantages",prismJS.tabMovies.advantages);
		prismJS.sowip.addVariable("prismMovhow",prismJS.tabMovies.how);
		prismJS.sowip.addVariable("prismMovcompare",prismJS.tabMovies.compare);
		prismJS.sowip.addVariable("prismMovsatisfaction",prismJS.tabMovies.satisfaction);
		prismJS.removeOtherFlash();
		prismJS.isFlashEnabled = prismJS.sowip.write(prismJS.divIDs.wip);
		prismJS.currentTabFlash = prismJS.swfIDs.wip;
		prismJS.rewriteCurrentFlashFn = prismJS.addWIPFlash;
        
        prismJS.onFlashEnabled();
	}
prismJS.addAdvancedFlash = function () {
		prismJS.soadf.addVariable("assetsPath",prismJS.files.assetPath);
		prismJS.soadf.addVariable("showPrismScript", "prismJS.launchDemo" );
		prismJS.soadf.addVariable("prismLanding",prismJS.files.advanced);
		prismJS.removeOtherFlash();
		prismJS.isFlashEnabled = prismJS.soadf.write(prismJS.divIDs.advanced);
		prismJS.currentTabFlash = prismJS.swfIDs.advanced;
		prismJS.rewriteCurrentFlashFn = prismJS.addAdvancedFlash;
        
        prismJS.onFlashEnabled();
	}
prismJS.addChannelsFlash = function () {
		prismJS.sochan.addVariable("assetsPath",prismJS.files.assetPath);
		prismJS.sochan.addVariable("showPrismScript", "prismJS.launchDemo" );
		prismJS.sochan.addVariable("prismLanding",prismJS.files.channels[0]);
		prismJS.sochan.addVariable("prismChannelURL",prismJS.chanLineURL);
        prismJS.sochan.addVariable("channelTrackFN",'prismJS.extTracking.trackChannelPDF');        
		prismJS.removeOtherFlash();
		prismJS.isFlashEnabled = prismJS.sochan.write(prismJS.divIDs.channels);
		prismJS.currentTabFlash = prismJS.swfIDs.channels;
		prismJS.rewriteCurrentFlashFn = prismJS.addChannelsFlash;
        
        prismJS.onFlashEnabled();
	}
prismJS.launchDemo = function ( videoNameToJumpTo, trackFlashBtnID ) {
		$('html, body').animate( {scrollTop:0}, ( $(document).scrollTop()+200)*0.5 );
		var demoAssets = prismJS.files.assetPath+prismJS.files.demoAssetsPath;
		prismJS.soPrismDemo.addVariable("assetsPath", demoAssets);
		
		if ( videoNameToJumpTo && videoNameToJumpTo != undefined ) prismJS.soPrismDemo.addVariable("jumpToVideo", videoNameToJumpTo);
		else prismJS.soPrismDemo.addVariable("jumpToVideo", null);        
        
		// Overlay window swfs
		prismJS.soPrismDemo.addVariable("prismIntroOverlay","prismIntro.swf");
		prismJS.soPrismDemo.addVariable("entertainmentOverlay","entertainment.swf");
		prismJS.soPrismDemo.addVariable("overviewOverlay","advancedFeatures.swf");
		prismJS.soPrismDemo.addVariable("findItFastOverlay","findItFast.swf");
		prismJS.soPrismDemo.addVariable("wholeHomeOverlay","wholeHomeDVR.swf");
		prismJS.soPrismDemo.addVariable("hsiOverlay","hsi.swf");
		prismJS.soPrismDemo.addVariable("remoteOverlay","remoteDemo.swf");
		prismJS.soPrismDemo.addVariable("callingOverlay","voice.swf");
	
		// Other swfs
		prismJS.soPrismDemo.addVariable("demoRoomSwf","prismDemoRoom.swf");
		prismJS.soPrismDemo.addVariable("videoPlayerSwf","prismVideoPlayer.swf");
	
		// Flash Media Server Streaming path -- same path must be used for all videos.
		prismJS.soPrismDemo.addVariable("rmtpPath", escape("rtmp://cp108058.edgefcs.net/ondemand/flash/") );
	
		// Streaming Video Filenames (complete paths if not streaming)
		prismJS.soPrismDemo.addVariable("prismIntroVideo","tvprismletsgo30_wtag");
		prismJS.soPrismDemo.addVariable("entertainmentVideo","entertainment");
		prismJS.soPrismDemo.addVariable("overviewVideo","overview");
		prismJS.soPrismDemo.addVariable("findItFastVideo","find_it_fast");
		prismJS.soPrismDemo.addVariable("wholeHomeVideo","wholehomedvr");
		
		// Plans and Prices link URL
		prismJS.soPrismDemo.addVariable("plansAndPricesURL", escape(prismJS.planPricesURL) );
	
		// JavaScript Actions
		prismJS.soPrismDemo.addVariable("exitDemoAction", prismJS.encodeJSforFlash( "prismJS.hideDemo()" ) );
		prismJS.soPrismDemo.addVariable("trackingHandler", "prismJS.trackingHandler" );
		
		var curr = document.getElementById(prismJS.currentTabFlash);
		var currTabID = curr.parentNode.id;
		
		prismJS.removeOtherFlash();
		
        // Partner Agency Tracking Call
        prismJS.extTracking.track(prismJS.currentTabFlash);
        
		prismJS.isFlashEnabled = prismJS.soPrismDemo.write(currTabID);
		prismJS.currentTabFlash = prismJS.swfIDs.demo;
		
		if ( window['trackLink'] ) trackLink({prop14:'Prism:Demo Open'}, 'Prism Overlay');
         
        prismJS.onFlashEnabled();
   }
	
prismJS.removeOtherFlash = function () {
        var mov = null;
		for ( var id in prismJS.swfIDs ) {
				mov = document.getElementById( prismJS.swfIDs[id] );
				if ( mov ) {
						mov.parentNode.removeChild( mov );
				}
                mov = null;
		}
    }

prismJS.hideDemo = function () {
		if ( prismJS.rewriteCurrentFlashFn ) prismJS.rewriteCurrentFlashFn();
	}
	

prismJS.trackingHandler = function (arguments) {
		// handle tracking behavior here...
		if ( window['trackLink'] ) trackLink(arguments[0],arguments[1],arguments[2],arguments[3]);
}

// Partner Agency Tracking -- NON-OMNITURE
prismJS.extTracking = {};

prismJS.extTracking.track = function(dartSRCID) {
    if ( dartSRCID && prismJS.extTracking.dartSRC[dartSRCID] ) {
        prismJS.extTracking.rsta(dartSRCID);
        prismJS.extTracking.ixng();
    }
}

prismJS.extTracking.trackChannelPDF = function () {
    prismJS.extTracking.track('channelsPDFID');
}

prismJS.extTracking.dartSRC = {
    prismHomepageFlashID:"src=2833013;type=shared;cat=globa769;u4=HomepageFlash;u5=IPTV Product Information Page;u6=PRISM;u2=DemoPrismStart;ord=",
	whatIsPrismFlashID:"src=2833013;type=shared;cat=globa769;u4=WhatIsPrismFlash;u5=IPTV Product Information Page;u6=PRISM;u2=DemoPrismStart;ord=",
    channelsFlashID:"src=2833013;type=shared;cat=globa769;u4=ChannelLineupFlash;u5=IPTV Product Information Page;u6=PRISM;u2=DemoPrismStart;ord=",
    channelsPDFID:"src=2833013;type=shared;cat=globa769;u4=ChannelLineupFlash;u5=IPTV Product Information Page;u6=PRISM;u2=PDFChannelLineup;ord="
}

prismJS.extTracking.rsta = function(dartSRCID) {
    if ( genFloodlight_onClick != undefined && dartSRCID && prismJS.extTracking.dartSRC[dartSRCID] ) genFloodlight_onClick(prismJS.extTracking.dartSRC[dartSRCID]);
}
prismJS.extTracking.ixng = function() {
    if ( pixel_conversion != undefined ) pixel_conversion('2154');
}
// END PARTNER AGENCY TRACKING


// PRISM PAGE FUNCTIONALITY
prismJS.tabsFlash = {
		home: prismJS.addHomepageFlash,
		prism: prismJS.addWIPFlash,
		advanced: prismJS.addAdvancedFlash,
		channels: prismJS.addChannelsFlash,
		showdemo: prismJS.launchDemo
	}

prismJS.onFlashEnabled = function () {
        if ( prismJS.isFlashEnabled ) {
            $(".noFlash").removeClass("noFlash");
        }
    }
    
prismJS.addClickActions = function () {
		$(".promoList li a,  a.inlineJumplink").click(function (){
			var hash = this.href.match(/\#.*/);
			var divid = hash.toString().substr(1);
			prismJS.openPrismPage(hash);
				
			var trig = function (tabid) { $("#tabNavCont.prismContentTabs ul li a[href=#"+tabid+"]").trigger('click') }
			
			if ( this.rel ) {
				var tabid = this.rel;
				if ( prismJS.tabMovies[tabid] ) prismJS.wipOnLoad = prismJS.tabMovies[tabid]; 
				trig(tabid);
			}
            $('html, body').animate( {scrollTop:0}, ( $(document).scrollTop()+200)*0.5 );
			return false;
		});
		$("a.showDemoLink").click( function () {
			var vid = this.rel;
			prismJS.tabsFlash.showdemo(vid);
			return false;
		});
		$("#tabNavCont.prismContentTabs ul li a").click( function() {
			$("#tabNavCont.prismContentTabs ul li").removeClass('active');
			$(this).parent().addClass('active');
			
			var tabName = this.href.match(/\#.*/);
			tabName = tabName.toString().substr(1);
			
			if ( prismJS.tabMovies[tabName] ) prismJS.wipOnLoad = prismJS.tabMovies[tabName]; 
			var sendToFlash = "prismMov"+tabName;
			
			var myfmr = null;
			if ( document.getElementById(prismJS.swfIDs.wip) ) { myfmr = document.getElementById(prismJS.swfIDs.wip) } 
			
			if ( sendToFlash && typeof(ei) != "undefined" && ei.isReady() && myfmr && myfmr.sendToActionScript ) { 
				ei.sendToActionScript(sendToFlash,prismJS.swfIDs.wip);
			}
			
			$(".tab").hide();
			$("#"+tabName+"Tab").show();
			
			return false;
		});
		$("ul.bannerNav a[class!='last']").click(function (){
			var clicked = $(this).attr("href");
			prismJS.openPrismPage(clicked);
			return false;
		});
	}
	
prismJS.getqs = function (key) {
		var a = location.search.slice(1).split("&"), GET = [];
		for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
		return GET[key] || null;
	}
	
prismJS.openPrismPage = function (pageToOpen) {
		var demo = document.getElementById(this.swfIDs.demo);
		if (demo) demo.parentNode.removeChild(demo);
		
		if (this.currentTabFlash) {
			var oldTabFlash = document.getElementById(this.currentTabFlash);
			if ( oldTabFlash ) oldTabFlash.parentNode.removeChild(oldTabFlash);	
		}
		
		var divid = pageToOpen.toString().substr(1);
		$(".contentBlock[id="+divid+"]").show();
		$(".contentBlock[id!="+divid+"]").hide();
		
		setTimeout( prismJS.tabsFlash[divid], 100 );
		//$('html, body').scrollTop(0);
	}
	
prismJS.init = function () {
		this.initFlash();
		$('a[href=#prism]').click(function () { prismJS.tabsFlash.prism() } );
		if ( $('#prism.contentBlock').css('display') != 'none' ) { prismJS.tabsFlash.prism() } 			
		
		$(document).ready(function() {
			chanLineURL = $('#channelLineupURL').attr('href');
			prismJS.addClickActions();
			
			var urlStr = location.href;
			var pageTabs = new Array("#home","#prism","#advanced","#channels"); 
			for(var i=0; i<pageTabs.length; i++) {
				if ( urlStr.indexOf( pageTabs[i] ) != "-1" ){
					prismJS.openPrismPage(pageTabs[i]);
					return;
				}
			}
			prismJS.tabsFlash.prism();
			prismJS.openPrismPage(pageTabs[0]);
            
		});	
	}

prismJS.init();