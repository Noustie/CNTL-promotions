<?php require_once('../../../../offsiteincludes/sb_footer.php'); ?>
<div class="footer">
	<p align="center">
		<!-- just add the href links -->
		<a href="http://storelocator.centurylinkapps.com/index.cfm" target="_blank" class="" id="tpl_footer-store-locator">Store Locator</a> | <a href="http://www.centurylink.com/sitemap.html" target="_blank">Site Map</a> | <a href="https://www.centurylink.com/Pages/AboutUs/CompanyInformation/Careers/" target="_blank">Careers</a> | <a href="#ZAM" target="_blank" class="modal-trigger" id="tpl_footer-legal-notices">Legal Notices</a> | <a href="http://www.centurylink.com/Pages/AboutUs/Legal/privacyPolicy.jsp" target="_blank">Privacy Policy</a> | <a href="http://www.centurylink.com/Pages/AboutUs/Community/Disabled" target="_blank">Customers with Disabilities</a> | <a href="#ZAM" target="_blank" class="modal-trigger" id="tpl_footer-yellow-pages">Yellow Pages</a> | <a href="https://www.centurylink.com/Pages/AboutUs/CompanyInformation/Regulatory/tariffLibrary.jsp" target="_blank">Tariffs</a> | <a href="#ZAM" target="_blank" class="modal-trigger" id="tpl_footer-email-offers">Email Offers</a> <br>
		<a href="http://www.centurylink.com/business/federal-gov/" target="_blank">Federal Government</a> | <a href="http://www.centurylink.com/business/state-and-local-gov/" target="_blank">State &amp; Local Government</a> | <a href="http://www.centurylink.com/business/education/" target="_blank">Education</a> | <a href="http://www.centurylink.com/business/partners/" target="_blank">Partners</a> | <a href="#ZAM" target="_blank" class="modal-trigger" id="tpl_footer-referral-program">Referral Program</a> | <a href="#ZAM" target="_blank" class="modal-trigger" id="tpl_footer-smb-email-us">Contact Us</a> <br>
		<br>
		<a href="/home/" target="_blank">Residential</a> | <a href="/small-business/" target="_blank">Small Business</a> | <a href="http://www.centurylink.com/business" target="_blank">Large Business</a> | <a href="/wholesale/" target="_blank">Wholesale</a> <span class="price_other_cat"><br>
		Copyright &copy;
		2012 CenturyLink, Inc. All Rights Reserved.</span> </p>
</div>
<script type="text/javascript" src="//www.centurylink.com/assets/js/plugins/cookies2.js"></script>
<script type="text/javascript" src="//www.centurylink.com/assets/js/plugins/jquery.qwest-core-smb.js"></script>
<script type="text/javascript" src="//www.centurylink.com/assets/js/plugins/centurycore.shortcuts.js"></script>
<script type="text/javascript" src="//www.centurylink.com/assets/js/locator.js"></script>
<script type="text/javascript" src="//www.centurylink.com/assets/js/plugins/jqModal.js"></script>
<script type="text/javascript" src="//www.centurylink.com/assets/js/require.js"></script>
<?php require_once('../../../../offsiteincludes/sb_modals.php'); ?>
<script type="text/javascript" src="//www.centurylink.com/assets/js/template_link_matrix_smb.js"></script>
<script type="text/javascript" src="/soho/assets/js/third-party/metrics/s_h_code_sb_omni_feb2011.js"></script>

<!--i2a, Interest2Action, iCrossing-->
<script type="text/javascript" src="/soho/assets/js/third-party/metrics/metrixConfig.js"></script>
<!--i2a, Interest2Action, iCrossing-->
<!-- Omniture -->

<?php /*
<script language="JavaScript" type="text/javascript"><!--
if(navigator.appVersion.indexOf('MSIE')>=0)document.write(unescape('%3C')+'\!-'+'-')
//--></script> */ ?>

<?php
if ( $isConversionPage ) { addConversionTNTMbox(); }
if ( !!$io ) {
	addIgnOne_conversion( $io['conversion_type'], $io['sku'], $io['order_code'], $io['onetimecharge'], $io['monthlycharge'] );
} else {
	addIgnOne_behavioral();
}
addGoogleAnalytics();
?>

<noscript>
<a href="http://www.omniture.com" title="Web Analytics"><img src="/assets/images/spacer.gif" height="1" width="1" border="0" alt="" /></a>
</noscript>
<!--/DO NOT REMOVE/-->
<!-- End SiteCatalyst code version: H.14. -->

</body>
</html>
