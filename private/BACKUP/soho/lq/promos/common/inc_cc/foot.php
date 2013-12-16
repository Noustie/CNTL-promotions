
<script type="text/javascript">
function getURLParam (key) {
	var a = location.search.slice(1).split("&"), GET = [];
	for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
	return GET[key] || null;
}
</script>

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

</body>
</html>
