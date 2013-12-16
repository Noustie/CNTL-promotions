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
			<p class="copyright"> Services are not available everywhere. Business customers only.
				CenturyLink may change, cancel, or substitute services, or vary them by service area, at its sole discretion without notice.
				Speeds are "up to" stated rates, performance may vary due to conditions outside of network control and no speed is guaranteed.

				&copy; 2012 CenturyLink, Inc. All Rights Reserved. The name CenturyLink and the pathways logo are trademarks of CenturyLink, Inc.

				All other marks are the property of their respective owners. </p>
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
addGoogleAnalytics();
?>
<!-- ***************  METRIX RESOURCE SCRIPT CODE BEGIN  ******************** -->
<script type="text/javascript" src="/soho/static/Common/Includes/Lib/Metrix/CTL/metrixConfig.js"></script>
<noscript>
<img src="//centelcom.112.2O7.net/b/ss/centelcom/1/H.14--NS/0" height="1" width="1" border="0"/>
</noscript>
<!-- ***************  METRIX RESOURCE SCRIPT CODE END  ******************** -->

</div>
</body>
</html>
