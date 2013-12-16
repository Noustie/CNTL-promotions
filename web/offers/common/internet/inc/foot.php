
<div id="fb-root"></div>
<script type="text/javascript">
//SOCIAL -- FACEBOOK
window.fbAsyncInit = function() {
	//FB.Event.subscribe('edge.create', function(response) {
	//	var qLinkName = '<?php echo $svar['pageName']; ?>|button|facebook';
	//	trackClick(qLinkName, {});
	//});
	$('.fbshare a').live( 'click', function (e) {
		var share = {
		  method: 'stream.share',
		  u: '<?php echo $fb_url; ?>'
		};
		FB.ui(share);
		var qLinkName = '<?php echo $svar['pageName']; ?>|button|facebook';
		trackClick(qLinkName, this);
		e.preventDefault();
	})
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&status=0&appId=<?php echo $fb_appid; ?>";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


//SOCIAL -- TWITTER
window.twttr = (function (d,s,id) {
    var t, js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
    js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
    return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
}(document, "script", "twitter-wjs"));

twttr.ready(function (twttr) {
	twttr.events.bind('click', function (intent_event) {
		if (intent_event && !!intent_event.target && !!intent_event.target.src ) {
			var response = intent_event.target.src;
			var qLinkName = '<?php echo $svar['pageName']; ?>|button|twitter';
			trackClick(qLinkName, {});
		};
	});
});

</script>

<script type="text/javascript" src="../common/internet/js/tabs.js"></script>
<!-- ***************  METRIX RESOURCE SCRIPT CODE BEGIN  ******************** -->
<div id="GlobalMetrixRouter" class="mboxDefault"><!--DefaultContent--></div>
<script type="text/javascript">
	var GMXR=GMXR;if(GMXR=='activate')mboxCreate('GlobalMetrixRouter','URL='+document.location);
</script>
<script type="text/javascript" src="/static/Common/Includes/Lib/Metrix/CTL/metrixConfig.js"></script>
<noscript>
<img src="http://centelcom.112.2O7.net/b/ss/centelcom/1/H.14--NS/0" height="1" width="1" border="0"/>
</noscript>
<!-- ***************  METRIX RESOURCE SCRIPT CODE END  ******************** -->
</body>
</html>
