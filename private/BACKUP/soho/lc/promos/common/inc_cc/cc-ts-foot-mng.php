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
// addGoogleAnalytics();
?>
<!-- ***************  METRIX RESOURCE SCRIPT CODE BEGIN  ******************** -->
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

if(typeof eBiz_pageName != 'undefined' && eBiz_pageName)s.pageName=eBiz_pageName;
if(typeof eBiz_server != 'undefined' && eBiz_server)s.server=eBiz_server
if(typeof eBiz_channel != 'undefined' && eBiz_channel)s.channel=eBiz_channel;
if(typeof eBiz_hier1 != 'undefined' && eBiz_hier1)s.hier1=eBiz_hier1;
if(typeof eBiz_prop3 != 'undefined' && eBiz_prop3)s.prop3=eBiz_prop3;
if(typeof eBiz_prop6 != 'undefined' && eBiz_prop6)s.prop6=eBiz_prop6;
if(typeof eBiz_prop8 != 'undefined' && eBiz_prop8)s.prop8=eBiz_prop8;
if(typeof eBiz_prop20 != 'undefined' && eBiz_prop20)s.prop20=eBiz_prop20;
if(typeof eBiz_prop24 != 'undefined' && eBiz_prop24)s.prop24=eBiz_prop24;
if(typeof eBiz_prop25 != 'undefined' && eBiz_prop25)s.prop25=eBiz_prop25;
if(typeof eBiz_prop26 != 'undefined' && eBiz_prop26)s.prop26=eBiz_prop26;
if(typeof eBiz_prop27 != 'undefined' && eBiz_prop27)s.prop27=eBiz_prop27;
if(typeof eBiz_prop38 != 'undefined' && eBiz_prop38)s.prop38=eBiz_prop38;
if(typeof eBiz_prop39 != 'undefined' && eBiz_prop39)s.prop39=eBiz_prop39;
if(typeof eBiz_prop51 != 'undefined' && eBiz_prop51)s.prop51=eBiz_prop51;
if(typeof eBiz_prop52 != 'undefined' && eBiz_prop52)s.prop52=eBiz_prop52;
if(typeof eBiz_evar24 != 'undefined' && eBiz_evar24)s.eVar24=eBiz_evar24;
if(typeof eBiz_evar27 != 'undefined' && eBiz_evar27)s.eVar27=eBiz_evar27;
if(typeof eBiz_evar41 != 'undefined' && eBiz_evar41)s.eVar41=eBiz_channel;
if(typeof eBiz_evar48 != 'undefined' && eBiz_evar48)s.eVar48=eBiz_evar48;
if(typeof eBiz_evar49 != 'undefined' && eBiz_evar49)s.eVar49=eBiz_evar49;
if(typeof eBiz_evar51 != 'undefined' && eBiz_evar51)s.eVar51=eBiz_evar51;
if(typeof eBiz_evar53 != 'undefined' && eBiz_evar53)s.eVar53=eBiz_evar53;
if(typeof eBiz_evar54 != 'undefined' && eBiz_evar54)s.eVar54=eBiz_evar54;
if(typeof eBiz_evar55 != 'undefined' && eBiz_evar55)s.eVar55=eBiz_evar55;
if(typeof eBiz_evar56 != 'undefined' && eBiz_evar56)s.eVar56=eBiz_evar56;
if(typeof eBiz_evar59 != 'undefined' && eBiz_evar59)s.eVar59=eBiz_evar59;
if(typeof eBiz_evar60 != 'undefined' && eBiz_evar60)s.eVar60=eBiz_evar60;
if(typeof eBiz_evar66 != 'undefined' && eBiz_evar66)s.eVar66=eBiz_evar66;
if(typeof eBiz_events != 'undefined' && eBiz_events)s.events=eBiz_events;
s_code=s.t();

</script>
<noscript>
<img src="//centelcom.112.2O7.net/b/ss/centelcom/1/H.14--NS/0" height="1" width="1" border="0"/>
</noscript>
<!-- ***************  METRIX RESOURCE SCRIPT CODE END  ******************** -->

<!-- Begin Mongoose Metrics Tracking Code -->
<script type="text/javascript">
var mm_c = '50d3ea85f492c7cbc35c27ebd7b46a81';
var customer_number_format = 0;
var mm_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");
document.write(unescape("%3Cscript src='" + mm_protocol + "www.mongoosemetrics.com/jsfiles/js-correlation/mm-getvar.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
/* Custom Parameters */
/* MANDATORY default_number Setup Parameter DO NOT REMOVE */
var default_number='8773033080'; /* 10 Digits Only i.e. 8881234567 */

/* Custom Parameters */

</script>
<script type="text/javascript">
document.write(unescape("%3Cscript src='" + mm_protocol + "www.mongoosemetrics.com/jsfiles/js-correlation/mm-control.php%3F" + mm_variables + "' type='text/javascript'%3E%3C/script%3E"));
</script>
<!-- End Mongoose Metrics Tracking Code -->
</div>
</body>
</html>
