//Override the shop domains since prism ALWAYS goes to LCTL, and not TCAT.
//THIS CANNOT BE INCLUDED ANYWHERE OTHER THAN PRISM.  IT WOULD BREAK NORMAL MODAL FUNCTIONALITY. jcm
generalUrls['shop'] = {Q:ctl_url+'/shop/index.html',CTL:ctl_url+'/shop/index.html'};

//Create a mock LM object if we havent loaded the real link matrix.
if(typeof linkMatrix == "undefined") {
	linkMatrix = {};
	linkMatrix.ctam = {};
}

//Prism CTA ids.
prismIds = [
	'prism-header-startnow1',
	'prism-header-startnow2',
	'prism-header-startnow3',
	'prism-header-startnow4',
	'prism-overview-challenger-seewhatsavailable',
	'prism-footer-startnow',
	'prism-whyswitch-compare',
	'prism-whyswitch-startnow',
	'prism-whyswitch-switchnow',
	'prism-whyswitch-findyourbundle',
	'prism-wholehomedvr-startorder1',
	'prism-wholehomedvr-startorder2',
	'prism-compare-startorder',
	'prism-channel-viewchannel',
	'prism-home-double-orderonline-1',
	'prism-home-double-orderonline-2',
	'prism-home-double-orderonline-3',
	'prism-home-addprism-orderonline-1',
	'prism-home-addprism-orderonline-2',
	'prism-home-addprism-orderonline-3',
	'prism-featured-double-orderonline-1',
	'prism-featured-double-orderonline-2',
	'prism-featured-double-orderonline-3',
	'prism-featured-addprism-orderonline-1',
	'prism-featured-addprism-orderonline-2',
	'prism-featured-addprism-orderonline-3'
];

var prismTripleIds = [
	'prism-home-triple-orderonline-1',
	'prism-home-triple-orderonline-2',
	'prism-home-triple-orderonline-3',
	'prism-featured-triple-orderonline-1',
	'prism-featured-triple-orderonline-2',
	'prism-featured-triple-orderonline-3'
];

//Add an LM entry for each ID.  All urls go to the same place, we are just getting a profile cookie.
$(prismIds).each(function(){
	linkMatrix.ctam[this] = {
		EC:{
			type:'TCAT',
			Q:ctlsecure_url + '/shop/Iptv/displayPrism.html?Internet=true&DIRECTV=true',
			CTL:ctlsecure_url + '/shop/Iptv/displayPrism.html?Internet=true&DIRECTV=true'
		},
		NC:{
			type:'TCAT',
			Q:ctlsecure_url + '/shop/Iptv/displayPrism.html?Internet=true&DIRECTV=true',
			CTL:ctlsecure_url + '/shop/Iptv/displayPrism.html?Internet=true&DIRECTV=true'
		}
	}
});

//Add an LM entry for each Triple Bundle CTA ID.  All urls go to the same place, we are just getting a profile cookie.
$(prismTripleIds).each(function(){
	linkMatrix.ctam[this] = {
		EC:{
			type:'TCAT',
			Q:ctlsecure_url + '/shop/Iptv/displayPrism.html?Internet=true&Phone=true&DIRECTV=true',
			CTL:ctlsecure_url + '/shop/Iptv/displayPrism.html?Internet=true&Phone=true&DIRECTV=true'
		},
		NC:{
			type:'TCAT',
			Q:ctlsecure_url + '/shop/Iptv/displayPrism.html?Internet=true&Phone=true&DIRECTV=true',
			CTL:ctlsecure_url + '/shop/Iptv/displayPrism.html?Internet=true&Phone=true&DIRECTV=true'
		}
	}
});

linkMatrix.zam['prism-chat-online-now-header'] = {
	type: "popup",
	CTL: ctl_url+"/assets/popups/clicktochat-ctl.html",
	Q: q_url+"/global/popups/clicktochat.html",
	EQ: ctl_url+"/assets/popups/clicktochat-ctl.html"
}
