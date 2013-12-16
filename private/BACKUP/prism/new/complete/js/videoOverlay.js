(function PrismOverlay (window, $) {

	var mainClickTrackingHandle = "flashTrack";

	var soPrismDemo = {};
		soPrismDemo.mainSwf = "prismMain.swf";
		soPrismDemo.wrapper = "flashContent";
		soPrismDemo.fv = {
			assetsPath: "./flash/demoFlash/",

			demoRoomSwf:"prismDemoRoom.swf",
			videoPlayerSwf:"prismVideoPlayer.swf",
			prismIntroOverlay: "prismIntro.swf",
			entertainmentOverlay: "entertainment.swf",
			overviewOverlay: "advancedFeatures.swf",
			findItFastOverlay: "findItFast.swf",
			wholeHomeOverlay: "wholeHomeDVR.swf",
			hsiOverlay: "hsi.swf",
			remoteOverlay: "remoteDemo.swf",
			callingOverlay: "voice.swf",

			rmtpPath: escape("rtmp://cp108058.edgefcs.net/ondemand/flash/"),

			prismIntroVideo: "tvprismletsgo30_wtag",
			entertainmentVideo: "entertainment",
			overviewVideo: "overview",
			findItFastVideo: "find_it_fast",
			wholeHomeVideo: "wholehomedvr",
			trackingHandler: "window.PrismOverlay.flashTrackingHandler"
			/*
			,plansAndPricesURL: "http://www.centurylink.com/Pages/Personal/Iptv/displayTvMarket.html"
			,exitDemoAction: null,
			,trackingHandler: null,
			,jumpToVideo: null
			*/
		};
		soPrismDemo.params = {
			wmode: "window"
		};
		soPrismDemo.attributes = {
			id: "prismDemoFlash",
			name: "prismDemoFlash"
		};

	this.init = function () {
		var jtv = getQueryParam("jumpToVideo");
		launchDemo(jtv);
	};

	this.soCallback = function (e) {
		if ( !!e && !!!e.success ) {
			$('.testFlash').removeClass('testFlash');
		}
	};

	this.launchDemo = function ( videoNameToJumpTo ) {
		if ( !!videoNameToJumpTo ) soPrismDemo.fv["jumpToVideo"] = videoNameToJumpTo;
		else delete soPrismDemo.fv["jumpToVideo"];

		swfobject.embedSWF(soPrismDemo.fv.assetsPath+soPrismDemo.mainSwf, soPrismDemo.wrapper,
				   "730", "460", "9.0.0", null,
				   soPrismDemo.fv, soPrismDemo.params, soPrismDemo.attributes, soCallback);
	};

	// Utilities
	this.getQueryParam = function (key) {
		var a = location.search.slice(1).split("&"), GET = [];
		for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
		return GET[key] || null;
	};

	// Flash Tracking Handle
	this.flashTrackingHandler = function (arguments) {
		// handle tracking behavior here...
		var track = window[mainClickTrackingHandle];
		if ( !!track ) track(arguments[0],arguments[1],arguments[2],arguments[3]);
	};
	$( init );

	window.PrismOverlay = this;
	return this;
})(window, $);
