window.flashTrack = function flashTrack (trackObj, linkName, mediaMethod, methodParams) { // Parameter types: Object, String, String, Array

	/******
	*
	* trackObj param should be formatted as below:
	* { eVar6:"HSI:LowestPrice", events:"event3,event14", prop12:"some value" }
	*
	* javascript example:
	*
	* flashTrack({prop16:'5006_mediaRoom_advancedFeatures'}, 'Tab Click');
	*
	* Flash example:
	*
	* import flash.external.ExternalInterface;
	* ExternalInterface.call("flashTrack",{prop16:"5006_mediaRoom_advancedFeatures"},"Flash Click");
	*
	* ExternalInterface.call("flashTrack",{prop16:"5006_mediaRoom_advancedFeatures"},"Movie Event", "open", ["movieFileName",0]);
	*
	******/

	/* FOR DEBUGGING */
	try {
		if ( !!trackObj ) 		console.log( trackObj );
		if ( !!linkName ) 		console.log( linkName );
		if ( !!mediaMethod ) 	console.log( mediaMethod );
		if ( !!methodParams ) 	console.log( methodParams );
	} catch (e) {
		// Do nothing.
	}

	// s_account MUST be set earlier in page or script will abort
	if ( !!s_account ) var s=s_gi(s_account);
	else return;

	var linkTrackEvents = "";
	var linkTrackVars = "";

	if ( !!trackObj )  {

		// HANDLE EVENTS
		if( !!trackObj["events"] ) {
			if ( !linkTrackVars.match("events") ) { // don't add "events" more than once
				linkTrackVars += "events";
			}

			var spl = trackObj["events"].split(",");
			for ( evt in spl ) {
				if ( !linkTrackEvents.match(spl[evt]) ) linkTrackEvents += "," + spl[evt];
			}
		}

		for (i in trackObj) {
			// HANDLE EVARS AND PROP
			if ( i.match("eVar") || i.match("prop") ) {
				if ( !linkTrackVars.match(i) ) linkTrackVars += "," + i;
				if ( !s[i] || !s[i].match( trackObj[i] ) ) s[i] = trackObj[i];
			}
		}

		// Get rid of leading/trailing commas
		if ( linkTrackEvents.charAt(0) == "," ) linkTrackEvents = linkTrackEvents.slice(1,linkTrackEvents.length);
		if ( linkTrackEvents.charAt(linkTrackEvents.length-1) == "," ) linkTrackEvents = linkTrackEvents.slice(0,-1);
		if ( linkTrackVars.charAt(0) == "," ) linkTrackVars = linkTrackVars.slice(1,linkTrackVars.length);
		if ( linkTrackVars.charAt(linkTrackVars.length-1) == "," ) linkTrackVars = linkTrackVars.slice(0,-1);

		// Sort Strings
		var sortByNumber = function (a,b) {
			return b.match(/\d*/) - a.match(/\d*/);
		}
	}

	linkTrackEvents = linkTrackEvents.split(',').sort().toString();
	linkTrackVars = linkTrackVars.split(',').sort().toString();

	// Apply new variables to event object
	if (linkTrackEvents != "") s.linkTrackEvents = linkTrackEvents;
	s.linkTrackVars = linkTrackVars;
	s.events = (s.events) ? s.events + "," + linkTrackEvents : linkTrackEvents;


	// Media Method handling:
	if ( !!mediaMethod && !!methodParams ) {
		if ( !!s['Media'] && !!s.Media[mediaMethod] ) {
			if ( mediaMethod == 'open' ) {
				var vaxel = Math.random() + "";
				var va = vaxel * 10000000000000;
				$("body").append('<iframe src="https://fls.doubleclick.net/activityi;src=2660564;type=produ742;cat=ctlpr689;ord=' + va + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
				s.Media[mediaMethod]( methodParams[0],methodParams[1],methodParams[2] );
			}
			if ( mediaMethod == 'play' ) s.Media[mediaMethod]( methodParams[0],methodParams[1] );
			if ( mediaMethod == 'stop' ) s.Media[mediaMethod]( methodParams[0],methodParams[1] );
			if ( mediaMethod == 'close' ) s.Media[mediaMethod]( methodParams[0] );
			s.Media.track( methodParams[0] );
		}
	}

	if ( !!linkName ) s.tl(this, 'o', linkName);
}
