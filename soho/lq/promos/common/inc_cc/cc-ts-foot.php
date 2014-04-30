	</div>
	<div id="footer">
		<div class="about">
			<ul class="nav">
				<li class="first"><a href="http://www.centurylink.com/" target="_blank">Home</a></li>
				<li><a href="http://www.centurylink.com/Pages/AboutUs/" target="_blank">About Us</a></li>
				<li><a href="http://www.centurylink.com/Pages/AboutUs/Careers/" target="_blank">Careers</a></li>
				<li><a href="http://www.centurylink.com/Pages/AboutUs/InvestorRelations/" target="_blank">Investor Relations</a></li>
				<li><a href="http://www.centurylink.com/Pages/AboutUs/PressRoom/" target="_blank">Media</a></li>
				<li><a href="http://www.centurylink.com/Pages/AboutUs/Legal/" target="_blank">Legal</a></li>
				<li><a href="http://www.centurylink.com/Pages/PrivacyPolicy/" target="_blank">Privacy</a></li>
				<li><a href="http://www.centurylink.com/sitemap.html" target="_blank">Site Map</a></li>
			</ul>
			<p class="copyright"> &copy; 2012 CenturyLink, Inc. All Rights Reserved. The name CenturyLink and the pathways logo are trademarks of CenturyLink, Inc. </p>
		</div>
		<div class="support">
			<p class="cta">Call us at <?php echo $pagePhone; ?></p>
			<ul class="nav">
				<li class="first"><a href="http://www.centurylink.com/Pages/Support/storeLocator.html" target="_blank">Find a Store</a></li>
				<li class="last"><a href="http://www.centurylink.com/" target="_blank">Contact Us</a></li>
			</ul>
		</div>
	</div>

<script type="text/javascript" src="/static/Common/Includes/Lib/Metrix/CTL/i2a.js"></script>
<script type="text/javascript" src="/static/Common/Includes/Lib/Metrix/CTL/oo_engine.js"></script>
<script type="text/javascript" src="/soho/static/Common/Includes/Lib/cookies.js"></script>
<script type="text/javascript" src="/soho/static/Common/Includes/Lib/locator.js"></script>
<script type="text/javascript" src="/soho/static/Common/Includes/Lib/modal.js"></script>
<script type="text/javascript" src="/soho/static/Common/Includes/Lib/jquery.simplemodal-1.4.1.js"></script>



<script type="text/javascript" src="//www.centurylink.com/small-business/js/voice-mtagconfig.js"></script>
<script type="text/javascript">
if(typeof(lpMTagConfig.dynButton)!="undefined")
lpMTagConfig.dynButton[lpMTagConfig.dynButton.length] = {'name':'smallbusiness-voice-english-subnav','pid':'smallbusiness-voice-english-subnav'};
</script>

<?php
if ( $isConversionPage ) { addConversionTNTMbox(); }
if ( !!$io ) {
	addIgnOne_conversion( $io['conversion_type'], $io['sku'], $io['order_code'], $io['onetimecharge'], $io['monthlycharge'] );
} else {
	addIgnOne_behavioral();
}
addGoogleAnalytics();
?>

<!-- Omniture -->
<script type="text/javascript">
<?php
if ( !!$omnitureVars ) {
	echo $omnitureVars;
}
?>

function setCookie(c_name,value,expiredays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/";
}
//check url for param
var campaign_param=getURLParam("Source");
if(!!campaign_param){
	setCookie('campaign_source',escape(campaign_param));
	s.prop36=campaign_param;
}
setCookie('searchtarget', 'small business');
</script>

<script type="text/javascript" src="/soho/assets/js/third-party/metrics/s_h_code_sb_omni_feb2011.js"></script>

<!--i2a, Interest2Action, iCrossing-->
<script type="text/javascript" src="/soho/assets/js/third-party/metrics/metrixConfig.js"></script>
<!--i2a, Interest2Action, iCrossing-->

<!-- Omniture -->

<script language="JavaScript" type="text/javascript"><!--
if(navigator.appVersion.indexOf('MSIE')>=0)document.write(unescape('%3C')+'\!-'+'-')
//--></script>
<noscript>
<a href="http://www.omniture.com" title="Web Analytics"><img src="/assets/images/spacer.gif" height="1" width="1" border="0" alt="" /></a>
</noscript>
<!--/DO NOT REMOVE/-->
<!-- End SiteCatalyst code version: H.14. -->

</div>


</body>
</html>
