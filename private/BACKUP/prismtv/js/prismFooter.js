var prism_cust_info = {
	domain: subcookiejar.fetch("profile_cookie") || null,
	type: subcookiejar.fetch('customerType','customerType') || null,
	company: "Unknown",
	customerType: "unknown"
}

if ( !!prism_cust_info.domain && !!prism_cust_info.domain.shoppingDomain ) {
	switch(prism_cust_info.domain.shoppingDomain) {
		case 'Q':
			prism_cust_info.company = "Qwest";
			break;
		case 'CTL':
			prism_cust_info.company = "CenturyLink";
			break;
		default:
			prism_cust_info.company = "Unknown";
			break;
	}
	if ( prism_cust_info.domain.domainOverlap == 'Y') {
		prism_cust_info.company = "Overlapped";
	}
} else {
	prism_cust_info.company = "unknown";
}
switch(prism_cust_info.type){
	case "NC":
		prism_cust_info.customerType = "New Customer";
		break;
	case 'EC':
		prism_cust_info.customerType = "Existing Customer: Legacy " + prism_cust_info.company;
		break;
	default:
		prism_cust_info.customerType = "unknown";
}

eBiz_prop3 = prism_cust_info.customerType;
eBiz_evar24 = eBiz_prop3;	

var scriptsReady = function () {
	qa.initialize();
	qm.initialize({serviceDomain:ctl_url});
}
$( scriptsReady );


function setUpSocialSDKs (window) {
	//Facebook
	$(".socialLink").show();

	window.fbAsyncInit = function() {
		FB.init({
			appId: '339031079452503',
			status: true,
			cookie: true,
			xfbml: true,
			channelUrl: './fb.html'
		});
		FB.Event.subscribe('edge.create', function(response) {
			var qLinkName = 'ctl|rsd|shop|iptv|pre_id_learn|bottom|button2|facebook';
			qa.trackAction(qLinkName);

			var axel = Math.random() + "";
			var a = axel * 10000000000000;
			$("body").append('<iframe src="https://fls.doubleclick.net/activityi;src=2660564;type=produ630;cat=ctlpr046;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		});
	};

	// Load the SDK Asynchronously
	(function(d){
		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement('script'); js.id = id; js.async = true;
		js.src = "//connect.facebook.net/en_US/all.js";
		ref.parentNode.insertBefore(js, ref);
	}(document));


	//Twitter API
	window.twttr = (function (d,s,id) {
		var t, js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
		js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
		return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
	}(document, "script", "twitter-wjs"));

	twttr.ready(function (twttr) {
		if ( !!twttr && !!twttr.events && !!twttr.events.bind ) {
			twttr.events.bind('tweet', function(event) {
				$("body").append('<iframe src="https://fls.doubleclick.net/activityi;src=2660564;type=produ630;cat=ctlpr046;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
			});
		}
	});
}
var pageGetPrismScript = function ( url, callback ) {
	if (!!callback) callback = function () {}
	return jQuery.ajax( { type: "GET", url: url, data: null, complete: callback, dataType: 'script', cache: true, crossDomain: true } );
}
var windowloaded = function () {
	setUpSocialSDKs(window);
}
$( function () { $(window).delay(1500).queue( windowloaded ) } );