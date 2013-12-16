
<!-- ## BEGIN DEFERRED SCRIPT LOADING ## -->
	<footer class="footer"><div class="footWrap">
		<ul class="nav footNav clearfix">
			<li><a target="_blank" href="http://www.centurylink.com/home">Residential</a></li>
			<li><a target="_blank" href="http://www.centurylink.com/Pages/AboutUs/Legal/privacyPolicy.jsp">Privacy Policy</a></li>
			<li><a target="_blank" href="http://www.centurylink.com/Pages/AboutUs/Community/Disabled">Customers with Disabilities</a></li>
			<li class="last"><a target="_blank" href="http://www.centurylink.com/Pages/AboutUs/CompanyInformation/Regulatory/tariffLibrary.jsp">Tariffs</a></li>
		</ul>
		<p class="disclaimer">&copy;<?php echo date('Y');?>. CenturyLink, Inc. All Rights Reserved.</p>
		<p class="disclaimer">All other marks are property of their respective owners.</p>
	</div></footer>
</div> <!--! end of #container -->


<!-- SITE SCRIPTS -->
<script src="../common/dtv-triple/js/script.js"></script>

<!-- GLOBAL SCRIPTS -->
<!-- Do not touch! -->

<!-- SiteCatalyst code version: H.20.3.
Copyright 1997-2009 Omniture, Inc. More info available at http://www.omniture.com -->
<script type="text/javascript" src="/assets/js/third-party/metrics/metrixConfig.js"></script>
<noscript>
	<a href="http://www.omniture.com" title="Web Analytics"><img src="http://qwest.com/images/spacer.gif" height="1" width="1" border="0" title="" /></a>
</noscript>
<!-- / DO NOT REMOVE / -->
<!-- End SiteCatalyst code version: H.20.3. -->

<?php if ( isset( $fb_title ) ) : ?>
<!-- Social Libs -->
<div id="fb-root"></div>
<script type="text/javascript">
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.twttr = (function (d,s,id) {
    var t, js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
    js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
    return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
}(document, "script", "twitter-wjs"));
</script>
<?php endif; ?>
<!-- ## END DEFERRED SCRIPT LOADING ## -->

</body>
</html>
