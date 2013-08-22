<?php
	if ( strpos( $_SERVER['SERVER_NAME'], 'staging' ) === false ) {
    	if ( !!!$_SERVER['HTTPS'] || $_SERVER['HTTPS'] == 'no' ) {
    		header( 'Location: https://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'], true );
		}
    }

$successPath = "/contact_fb/";

?>

<!DOCTYPE html>
<html lang="en-US" class="fb-html">
<head>
	<meta charset="utf-8">
	<title>CenturyLink | Customer Support</title>
	<meta name="robots" content="noindex, nofollow">
	<meta name="description" content="Let CenturyLink help you. Please complete the form and a CenturyLink representative will contact you." />
	<meta name="keywords" content="" />
	<meta name="robots" content="" />
	<link rel="stylesheet" href="/contact/css/reset.css" />
	<link rel="stylesheet" href="/contact/css/master.css" />
	<link rel="stylesheet" href="/contact/css/colorbox.css" />
	<script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
	<script type="text/javascript" src="/contact/js/jquery.validate.min.js"></script>
	<script type="text/javascript" src="/contact/js/jquery.colorbox-min.js"></script>

	<script type="text/javascript">
		// var sAccount;
		// var custClass = "business"; //uncomment to use biz suite
		var eBiz_linkInternalFilters = "javascript:,centurylink.,centurytel.,embarqmail.,synacor.,embarq.,speedpay.,mspcare.bcgi.,embarqnow.,centurylink-business,twitter.,facebook."; //Uncomment for special clicktrack needs
		var pageName = "ctl|rsd|product|emktg|2012|facebook|customer_service_form"; //s.pageName
		var pageType = ""; 		//s.pageType
		var errorType = ""; 	//s.prop2
		var accountEvents = ""; //eVar1
		var serviceEvents = ""; //eVar2
		var pCategory = ""; 	//eVar3
		var unisysEvent = ""; 	//eVar4
		var orderType = ""; 	//eVar7
		var zipAvail = ""; 		//eVar8
		var phoneAvail = ""; 	//eVar9
		var addressAvail = ""; 	//eVar10
		var respMsg = ""; 		//eVar11
		var availType = ""; 	//eVar12
		var sEvents = ""; 		//s.events
		var sProducts = ""; 	//s.products
		var orderNum = ""; 		//s.purchaseID
		var totalOrderPrice = ""; //Doubleclick
		var eBiz_server = "promotions.centurylink.com"; // s.server
		var eBiz_channel = "rsd"; // s.channel, s.eVar41
		var eBiz_prop20 = "";
		var eBiz_prop24 = "rsd|product";
		var eBiz_prop25 = "rsd|product|emktg|2012|facebook";
		var eBiz_prop26 = "rsd|product|emktg|2012|facebook|customer_service_form";
		var eBiz_prop38 = "static_page";
		var eBiz_prop39 = "landing_page";
		var eBiz_prop52 = "";
		var eBiz_evar27 = "";
		var eBiz_evar48 = eBiz_prop38;
		var eBiz_evar49 = eBiz_prop39;
		var eBiz_evar53 = eBiz_prop24;
		var eBiz_evar54 = eBiz_prop25;
		var eBiz_evar55 = eBiz_prop26;
		var eBiz_evar56 = "";
	</script>
</head>

<body class="fb-html">
	    <!--START MAIN CONTENT AREA - set height in master.css-->
	    <div id="content" class="content-fb">
	    	<!-- START SUBHEAD -->
	    	<div class="subHeaderCont">
	    		<h2>Let&rsquo;s Connect</h2>
	    		<div class="connect left">
	    			<p>We want to address your concerns as quickly as possible. Please fill out the form below, and we will get to work.</p>
	    		</div>
	    		<div class="subnav right">
					<div class="team right">
	    				<p><a href="https://promotions.centurylink.com/contact/team.php" target="_blank" clicktrack="ctl|rsd|product|emktg|2012|facebook|customer_service|button|meet_team">Meet the Team</a></p>
	    			</div>
					<div class="tweet right">
	    				<p>Send us a tweet or follow us at<br /><a href="http://twitter.com/CenturyLinkHelp" target="_blank" clicktrack="ctl|rsd|product|emktg|2012|facebook|customer_service|button|twitter">@CenturyLinkHelp</a></p>
	    			</div>
	    		</div>
	    	</div>
	    	<!-- END SUBHEAD -->
	    	<?php
				include('../contact/includes/form.php');
			?>
	    </div>
	    <!--END MAIN CONTENT AREA-->

	<script type="text/javascript" src="/contact/js/site.js"></script>
	<!--PAGE TRACKING-->
	<!-- Do not touch! -->
	<!-- SiteCatalyst code version: H.20.3.
	Copyright 1997-2009 Omniture, Inc. More info available at http://www.omniture.com -->
	<script type="text/javascript" src="/assets/js/third-party/metrics/metrixConfig.js"></script>
	<noscript>
		<a href="http://www.omniture.com" title="Web Analytics"><img src="http://qwest.com/images/spacer.gif" height="1" width="1" border="0" title="" /></a>
	</noscript>
	<!-- DO NOT REMOVE -->
	<!-- SiteCatalyst code version: H.20.3. -->

	<div id="fb-root">
  <!-- you must include this div for the JS SDK to load properly -->
	</div>
	<script type="text/javascript">
		window.fbAsyncInit = function () {
			//FB._https = true;
	        FB.init({ appId: '202239213221764', status: true, cookie: true, xfbml: true });
	        FB.XFBML.parse();
			if ( !!FB.Canvas.setAutoGrow ) {
				FB.Canvas.setAutoGrow(100);
			} else if ( !!FB.Canvas.setAutoGrow )  {
				FB.Canvas.setAutoResize(100);
			}
	    };
	    (function () {
	        var e = document.createElement('script');
	        e.async = true;
	        e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js#xfbml=1';
	        document.getElementById('fb-root').appendChild(e);
	    })();
	</script>

</body>

</html>
