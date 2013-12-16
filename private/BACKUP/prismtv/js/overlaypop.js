if ( self === top && !!!window.location.href.match('donotjump') ) {
	var launchOverlay = encodeURIComponent(self.location.href);
	document.cookie = "sptvLaunchOverlay=" + encodeURIComponent(self.location.href); // + ';expires=0;path=/;domain=' + window.location.hostname;
	window.location.href = './';
}
