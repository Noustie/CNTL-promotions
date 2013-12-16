//LOGIC FOR PAGE PRE-INITIALIZATION
if (top != self) { top.location = location; }

if ( !window.auxilaryPage ) {
	if ( !!location.href.match('.html')  ) {
		var newhash = location.href.match(/\w+\.html/)[0];
		var dehashedUrl = location.href.replace( newhash, '' ).replace('#','');
		if ( dehashedUrl.match(/\?/) && dehashedUrl.charAt(dehashedUrl.length - 1) !== "&" ) {
			dehashedUrl = dehashedUrl + "&";
		}
		location.href = dehashedUrl + "#" + newhash;
	} else if ( !!!location.hash && !location.href.match('.htm') ) {
		if ( location.href.match(/\?/) && location.href.charAt(location.href.length - 1) !== "&" ) {
			location.href = location.href + "&#index.html";
		} else {
			location.hash = "#index.html";
		}
	}
}

var pageNameTrackMap = {
	index: "ctl|rsd|shop|iptv|pre_id_learn|what_is",
	prismWhySwitch: "ctl|rsd|shop|iptv|pre_id_learn|why_switch",
	prismAdvancedFeatures: "ctl|rsd|shop|iptv|pre_id_learn|advanced",
	wholeHomeDVR: "ctl|rsd|shop|iptv|pre_id_learn|whole_home",
	prismChannelLineup: "ctl|rsd|shop|iptv|pre_id_learn|channel_lineup",
	prismCompare: "ctl|rsd|shop|iptv|pre_id_learn|compare",
	prismFeaturedOffers: "ctl|rsd|shop|iptv|pre_id_learn|featured_offers",
	prismTestDrive:	"ctl|rsd|shop|iptv|pre_id_learn|prism_videos"	
}

if ( !!location.hash ) {
	var modHash = location.hash.replace("#","");
	modHash = modHash.replace(".html","");

	if ( !!pageNameTrackMap[modHash] ) {
		pageName = pageNameTrackMap[modHash];
	}
}

window.prismMainSite = true;
var htmlTag = document.getElementsByTagName('html')[0];

if( navigator.userAgent.match(/Android/gi) ){ htmlTag.className += ' isAndroid' }

htmlTag.className += ' hasJS';
htmlTag.className = htmlTag.className.replace("initnojs", "");

if ( !!location.hash && !location.hash.match("index.html") && !!location.hash.match(".html") ) {
	htmlTag.className += ' deeplinkToTab';
}
if ( !htmlTag.className.match("mkt") ) {
	htmlTag.className += ' mkt';
}