	</div>
	<div id="footer">
		<div class="about">
			<ul class="nav">
				<li class="first"><a href="http://www.centurylink.com/small-business/" target="_blank">Home</a></li>
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
				<li class="last"><a href="https://www.centurylink.com/small-business/support/" target="_blank">Contact Us</a></li>
			</ul>
		</div>
	</div>

<script type="text/javascript" src="/soho/static/Common/Includes/Lib/cookies.js"></script>
<script type="text/javascript" src="/soho/static/Common/Includes/Lib/locator.js"></script>
<script type="text/javascript" src="/soho/static/Common/Includes/Lib/modal.js"></script>
<script type="text/javascript" src="/soho/static/Common/Includes/Lib/jquery.simplemodal-1.4.1.js"></script>

<?php
if ( $isConversionPage ) { addConversionTNTMbox(); }
if ( !!$io ) {
	addIgnOne_conversion( $io['conversion_type'], $io['sku'], $io['order_code'], $io['onetimecharge'], $io['monthlycharge'] );
} else {
	addIgnOne_behavioral();
}
?>
<!-- ***************  METRIX RESOURCE SCRIPT CODE BEGIN  ******************** -->
<script type="text/javascript" src="/soho/static/Common/Includes/Lib/Metrix/CTL/metrixConfig.js"></script>
<noscript>
<img src="//centelcom.112.2O7.net/b/ss/centelcom/1/H.14--NS/0" height="1" width="1" border="0"/>
</noscript>
<!-- ***************  METRIX RESOURCE SCRIPT CODE END  ******************** -->

<!-- Begin Mongoose Metrics Tracking Code -->
<script type="text/javascript">
var mm_c = '50d3ea85f492c7cbc35c27ebd7b46a81';
var mm_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");
document.write(unescape("%3Cscript src='" + mm_protocol + "www.mongoosemetrics.com/jsfiles/js-correlation/mm-getvar.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
/* Custom Parameters */
/* MANDATORY default_number Setup Parameter DO NOT REMOVE */
var default_number='8666028436'; /* 10 Digits Only i.e. 8881234567 */
if (getURLVar('userguid')){
                var custom1=getURLVar('userguid');
}
/* Custom Parameters */

</script>
<script type="text/javascript">
document.write(unescape("%3Cscript src='" + mm_protocol + "www.mongoosemetrics.com/jsfiles/js-correlation/mm-control.php%3F" + mm_variables + "' type='text/javascript'%3E%3C/script%3E"));
</script>
<!-- End Mongoose Metrics Tracking Code -->

</div>
</body>
</html>
