<div id="footer">
		<div class="corners outsideW cTop noLayoutTop">
			<span class="corner cLeft">   </span>
			<span class="corner cRight">   </span>
		</div>
		<div class="about">
			<ul class="nav">
				<li class="first"><a target="_blank" href="<?php echo $footerLinks["Home"];?>">Home</a></li>
				<li><a target="_blank" href="<?php echo $footerLinks["AboutUs"];?>">About Us</a></li>
				<li><a target="_blank" href="<?php echo $footerLinks["Careers"];?>">Careers</a></li>
				<li><a target="_blank" href="<?php echo $footerLinks["InvestorRelations"];?>">Investor Relations</a></li>
				<li><a target="_blank" href="<?php echo $footerLinks["Media"];?>">Media</a></li>
				<li><a target="_blank" href="<?php echo $footerLinks["Legal"];?>">Legal</a></li>
				<li><a target="_blank" href="<?php echo $footerLinks["Privacy"];?>">Privacy</a></li>
				<li><a target="_blank" href="<?php echo $footerLinks["SiteMap"];?>">Site Map</a></li>
			</ul>
			<p class="copyright">&copy;<?php echo date('Y');?> CenturyLink. All Rights Reserved. The name CenturyLink and the pathways logo are trademarks of CenturyLink.</p>
		</div>
		<div class="support">
			<p class="cta">Call us at <?php echo $pagePhone; ?></p>
			<ul class="nav"><li class="first"><a href="javascript:O_LC();">Feedback<img style="margin-left:6px;border:0" src="/static/Common/Includes/Lib/Metrix/CTL/sm_oo.gif"></a></li>
				<li class=""><a target="_blank" href="<?php echo $footerLinks["FindaStore"];?>">Find a Store</a></li>

				<li class="last"><a target="_blank" href="<?php echo $footerLinks["ContactUs"];?>">Contact Us</a></li>
			</ul>
		</div>
	</div>
<script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
<script type="text/javascript" src="/soho/assets/js/contactFormValidate.js"></script>
<script type="text/javascript" src="/assets/js/plugins/jquery.cookie.js"></script>
<script type="text/javascript" src="/assets/js/plugins/cookies2.js"></script>
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
//if ( $isConversionPage ) { addConversionTNTMbox(); }
if ( !!$io ) {
	addIgnOne_conversion( $io['conversion_type'], $io['sku'], $io['order_code'], $io['onetimecharge'], $io['monthlycharge'] );
} else {
	addIgnOne_behavioral();
}
//addGoogleAnalytics();
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

<script type="text/javascript" src="/assets/js/third-party/metrics/customerprofile.js"></script>
<script type="text/javascript" src="/soho/assets/js/third-party/metrics/s_h_code_sb_omni_feb2011.js"></script>
<script type="text/javascript" src="/soho/assets/js/third-party/metrics/metrixConfig.js"></script>

<!-- Omniture -->
<script language="JavaScript" type="text/javascript"><!--
if(navigator.appVersion.indexOf('MSIE')>=0)document.write(unescape('%3C')+'\!-'+'-')
//--></script>
<noscript>
<a href="http://www.omniture.com" title="Web Analytics"><img src="/assets/images/spacer.gif" height="1" width="1" border="0" alt="" /></a>
</noscript>
<!--/DO NOT REMOVE/-->
<!-- End SiteCatalyst code version: H.14. -->

<!-- Begin Mongoose Metrics Tracking Code -->
<script type="text/javascript">
var mm_c = '0e40f2c56b499245ace43b145299457f';
var mm_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");
document.write(unescape("%3Cscript src='" + mm_protocol + "www.mongoosemetrics.com/jsfiles/js-correlation/mm-getvar.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
/* Custom Parameters */
/* MANDATORY default_number Setup Parameter DO NOT REMOVE */
var default_number='8778686683'; /* 10 Digits Only i.e. 8881234567 */
if (getURLVar('userguid')){
                var custom1=getURLVar('userguid');
}

/* Custom Parameters */

</script>
<script type="text/javascript">
document.write(unescape("%3Cscript src='" + mm_protocol + "www.mongoosemetrics.com/jsfiles/js-correlation/mm-control.php%3F" + mm_variables + "' type='text/javascript'%3E%3C/script%3E"));
</script>
<!-- End Mongoose Metrics Tracking Code -->