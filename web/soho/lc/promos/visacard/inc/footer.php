	</div>
	<div id="footer">
		<div class="about">
			<ul class="nav">
				<li class="first"><a href="http://www.centurylink.com/small-business/" target="_blank">Home</a></li>
				<li><a href="http://www.centurylink.com/Pages/AboutUs/" target="_blank">About Us</a></li>
				<li><a href="http://www.centurylink.com/Pages/AboutUs/CompanyInformation/Careers/index.jsp" target="_blank">Careers</a></li>
				<li><a href="http://ir.centurylink.com/CorporateProfile.aspx?iid=4057179" target="_blank">Investor Relations</a></li>
				<li><a href="http://news.centurylink.com/" target="_blank">Media</a></li>
				<li><a href="http://www.centurylink.com/Pages/AboutUs/Legal/" target="_blank">Legal</a></li>
				<li><a href="http://www.centurylink.com/Pages/AboutUs/Legal/PrivacyPolicy/" target="_blank">Privacy</a></li>
				<li><a href="http://www.centurylink.com/sitemap.html" target="_blank">Site Map</a></li>
			</ul>
			<p class="copyright">&copy;2013 CenturyLink. All Rights Reserved. The CenturyLink mark, pathways logo and certain CenturyLink<br>product names are the property of CenturyLink. All other marks are the property of their respective owners.</p>
		</div>
		<div class="support">
			<p class="cta">Call us at <?php echo $pagePhone; ?></p>
			<ul class="nav">
				<li class="first"><a href="http://storelocator.centurylinkapps.com/" target="_blank">Find a Store</a></li>
				<li class="last"><a href="https://www.centurylink.com/small-business/support/" target="_blank">Contact Us</a></li>
			</ul>
		</div>
	</div>

<!-- ***************  METRIX CONFIGURATION CODE BEGIN  ******************** -->
<script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
<script type="text/javascript" src="/soho/assets/js/contactFormValidate.js"></script>
<script type="text/javascript" src="/soho/static/Common/Includes/Lib/cookies.js"></script>
<script type="text/javascript" src="/soho/static/Common/Includes/Lib/locator.js"></script>
<script type="text/javascript" src="/soho/static/Common/Includes/Lib/modal.js"></script>
<script type="text/javascript" src="/soho/static/Common/Includes/Lib/jquery.simplemodal-1.4.1.js"></script>
<script type="text/JavaScript">
   	$(document).ready(function(){ initializeLocator("COM", "");});
</script>

<?php
//if ( $isConversionPage ) { addConversionTNTMbox(); }
if ( !!$io ) {
	addIgnOne_conversion( $io['conversion_type'], $io['sku'], $io['order_code'], $io['onetimecharge'], $io['monthlycharge'] );
} else {
	addIgnOne_behavioral();
}
// addGoogleAnalytics();
?>
<!-- ***************  METRIX RESOURCE SCRIPT CODE BEGIN  ******************** -->
<script type="text/javascript" src="/assets/js/third-party/metrics/customerprofile.js"></script>
<!-- <script type="text/javascript" src="/soho/static/Common/Includes/Lib/Metrix/CTL/metrixConfig.js"></script> -->
<script type="text/javascript" src="/static/Common/Includes/Lib/Metrix/CTL/s_code.js"></script>
<script type="text/javascript">

/*** Omniture SiteCatalyst Unique PageName Tagging ***/
for (i = 0; i < document.forms.length; i++) {
	if (location.pathname == "/Pages/Personal/Television/index.html") {
		if (typeof(pageNameExt) == 'undefined' && !document.getElementById('location')) var pageNameExt = "_PRE"
	} else if (typeof(pageNameExt) == 'undefined' && document.forms[i].id.match(/availForm|newCustomers|continueForm/)) var pageNameExt = "_PRE"
};

function tagAddressSelect() {
	$('#address').change(function() {
		trackAvailCheck('NOrder_Address');
		this.form.submit()
	});
}

function trackAvailCheck(cType) {
	s.linkTrackVars = 'eVar12,events';
	s.linkTrackEvents = 'event8';
	s.events = 'event8';
	s.eVar12 = 'CheckAvail_' + cType;
	void(s.tl()); //alert('CheckAvail_'+cType);
	void(pixel_conversion('2034')); //icrossing tracking call
}

function makePOSTRequest(http_request, url, parameters, destination) {
	if (http_request) {
		if (typeof(destination) == "string") destination = document.getElementById(destination);
		http_request.open('POST', url, true);
		http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http_request.setRequestHeader("Content-length", parameters.length);
		http_request.setRequestHeader("Connection", "close");
		http_request.send(parameters);
		http_request.onreadystatechange = function() {
			if (http_request.readyState == 4) {
				if (http_request.status == 200) {
					result = http_request.responseText;
					destination.innerHTML = result;
					tagAddressSelect();
					return true;
				} else {
					if (http_request.readyState == 4) {
						if (http_request.status == 200) {
							result = http_request.responseText;
							destination.innerHTML = result;
							tagAddressSelect();
							return true;
						} else {
							destination.innerHTML = 'An error has occurred - please try again later.';
							return false;
						}
					}
				}
			}
		}
	} else {
		return false;
	}
}

</script>
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
var default_number='8665157937'; /* 10 Digits Only i.e. 8881234567 */
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
