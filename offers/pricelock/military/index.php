<?php
// Include anything in Headerblock that you would like to be included in the header of the landing page.
// Meta tags, css files, js files, etc...
// This information is included right before the closing 'head' tag.
$headerInfo = <<<HEADERBLOCK
<title>CenturyLink | Special Offers for Armed Forces</title>
<meta name="Description" content="CenturyLink proudly offers those in the United States Armed Forces up to $5 off a month on High-Speed Internet, with speeds up to 10 Mbps. And with the Price-Lock Guarantee, you can lock into a low monthly price for 3 years! Check out offers now!">
<meta name="Keywords" content="internet for military, centurylink military offer, centurylink military discount, military deal">
<!-- Styles specific to this page -->
<style type="text/css">
#offerWrap {
	padding: 30px 0 0 0;
}
#offerdetails {
	width: 475px;
	color: #666;
}
#tabCont .tabin {
	padding: 0 10px;
}
#tabCont {
	border: none;
	background-image: none;
}
.tabContent {
	padding: 0 0 0 0;
}

#tabCont .tabContent .tabcopy {
	height: auto;
}

.tabcopy p {
	color: #666;
	font-size: 14px;
}

.tabcopy ul li {
	margin-bottom: 10px;
	font-size: 13px;
}

.ir {
	position: absolute;
	text-indent: -9999px;
	margin: 0;
	padding: 0;
}

#rightRail {
	width: 371px;
	height: 293px;
	position: relative;
	background: url(images/rightRailImg.jpg) left top no-repeat;
	margin-left: 15px;
}
.chatBtn {
	position: absolute;
	left: 30px;
	bottom: 20px;
}
</style>
<script type="text/javascript" src="http://qwest.centurylink.com/global/includes/c2c/residential/mtagconfig.js"></script>

<!-- Ignition Tracking code -->
<script type="text/javascript">
(function() {
  var h = 'com-centurylink.netmng.com';
  var a = '1279';
  var t = document.createElement('script');
  t.type = 'text/javascript'; t.async = true;
  var p = 'https:'==document.location.protocol?'https://':'http://';
  var m = document.referrer.match(/https?:\/\/([a-z]+\.[a-z\.]+)/i);
  var r = (m && m[1] != document.location.hostname) ? ('&ref=' + escape(document.referrer)) : '';
  t.src = p + h + '/?async=1&aid=' + a + r;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(t, s);
})();
</script>

<script type="text/javascript">
			var createBundlesCTCButton = function(name, pid, targetContainer){
				// Write out button code
				$(targetContainer).each( function (index) {
					var ctocButton = $('<div>');
					ctocButton.attr('id',pid);
					// Associate button name and skill
					if( typeof(lpMTagConfig.dynButton)!="undefined") {
						lpMTagConfig.dynButton[lpMTagConfig.dynButton.length] = {'name':name,'pid':pid};
					}
					$(this).append(ctocButton);
				});
			}
			$(document).ready(function () {
				createBundlesCTCButton("chat-centurylink-residential-customer-support-usmilitary","chat-centurylink-residential-customer-support-usmilitary","#chatBtn");
			});
</script>
<!-- SiteCatalyst code version: H.14.
Copyright 1997-2009 Omniture, Inc. More info available at
http://www.omniture.com -->
<script type="text/javascript">
	// COPY THIS SCRIPT TAG AND PASTE IT INTO YOUR <HEAD> TAG TO INCORPORATE THIS TRACKING.
	// ONCE THIS SCRIPT TAG IS IN THE <HEAD>, REPLACE THE APPROPRIATE VALUES.
	// var sAccount; // SET THE VALUE OF THIS VAR IF THE ACCOUNT IS NOT THE STANDARD ACCOUNT, EG FOR MOBILE PAGES.
	var pageName = "ctl|rsd|product|emktg|T1_2012|military_lctl"; //s.pageName
	var pageType = ""; //s.pageType
	var sAddress = ""; 
	var errorType = ""; //s.prop2
	var accountEvents = ""; //eVar1
	var serviceEvents = ""; //eVar2
	var pCategory = ""; //eVar3
	var unisysEvent = ""; //eVar4
	var orderType = ""; //eVar7
	var zipAvail = ""; //eVar8
	var phoneAvail = ""; //eVar9
	var addressAvail = ""; //eVar10
	var respMsg = ""; //eVar11
	var availType = ""; //eVar12
	var sEvents = ""; //s.events
	var sProducts = ""; //s.products
	var orderNum = ""; //s.purchaseID
	var totalOrderPrice = ""; //Doubleclick
	var eBiz_server = "promotions.centurylink.com"; // s.server
	var eBiz_channel = "rsd"; // s.channel, s.eVar41
	var eBiz_prop20 = "";
	var eBiz_prop24 = "rsd|product";
	var eBiz_prop25 = "rsd|product|emktg|T1_2012";
	var eBiz_prop26 = "rsd|product|emktg|T1_2012|military_lctl";
	var eBiz_prop38 = "static_page";
	var eBiz_prop39 = "landing_page";
	var eBiz_prop52 = "";
	var eBiz_evar27 = "";
	var eBiz_evar48 = "static_page";
	var eBiz_evar49 = "landing_page";
	var eBiz_evar53 = "rsd|product";
	var eBiz_evar54 = "rsd|product|emktg|T1_2012";
	var eBiz_evar55 = "rsd|product|emktg|T1_2012|military_lctl";
	var eBiz_evar56 = "";
</script>
<!--/DO NOT REMOVE/-->
<!-- End SiteCatalyst code version: H.14. -->
HEADERBLOCK;

include('../includes/header.php');
?>
        <div class="nojs">
            <div id="pureWrapper">
                <div id="headerCont" class="cropHeader">
                	<img src="images/headerImg.jpg" alt="It&rsquo;s our duty to keep you connected. Centurylink proudly supports the men and women of the United States Armed Forces." />
                </div>
                <div id="offerWrap" class="message messageBG">
                    <div id="offerdetails">
                        <div id="tabCont">
                            <div id="offerTabOneTab" class="offerTabOneTab speed tabin active">
                                <div class="tabContent">
                                    <div class="tabcopy">
                                        <h3 class="black-txt">For those in the Armed Forces, staying connected to friends and family is more important than ever.</h3>
                                        <p>That&rsquo;s why we&rsquo;re proud to offer those serving our country our best offers. Our guarantee is that you&rsquo;ll get a low monthly price on up to 10 Mbps High-Speed Internet when you bundle with Unlimited Nationwide Calling. Save even more when you bundle High-Speed Internet with Unlimited Nationwide Calling and TV.</p>
                                        <ul>
                                        	<li>Download speeds of up to 10 Mbps so you can stream, game, and videoconference with family and friends</li>
                                        	<li>A private, direct connection to our national network</li>
                                        	<li>A network designed for consistent speed all day, every day</li>
                                        	<li>Unlimited Nationwide Calling</li>
                                        	<li>Clear connections, no dropped calls</li>
                                        	<li><strong>Ask about our Price-Lock guarantee &ndash; 3 years. 1 price. No term commitment.</strong></li> 
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="rightRail">
						<h3 class="ir">CenturyLink&reg; High-Speed Internet</h3>
						<p class="ir">Get up to $5 off every month with our Armed Forces discount*</p>
						<p class="ir">Learn about all of our military discounts:</p>
						<div id="chatBtn" class="chatBtn"></div>
                    </div>
                    <div class="clearing"></div>
                    <div class="corners outsideW cBottom"> <span class="corner cLeft"> &nbsp; </span> <span class="corner cRight"> &nbsp; </span> </div>
                </div>
                <div id="footerBlock">
                    <div id="footcontent">
                        <h2>Visit your local CenturyLink Store.</h2>
                        <p class="storeList arrowEndLink"><a href="http://storelocator.centurylinkapps.com/" target="_blank">Find a CenturyLink Store near you</a></p>
                        <div class="rightfootCol">
                        </div>
                    </div>
                </div>
           		<div class="disclaimer" style="clear: both;">*Other fees and conditions may apply. <a href="disclaimer.html" target="_blank" onclick="javascript:window.open(this.href,'disclaimer','height=600,width=800,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;">Click here for details.</a><br /><a href="http://www.centurylink.com/common/disclaimers/general.html" target="_blank" onclick="javascript:window.open(this.href,'disclaimer','height=600,width=800,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;">**See other important details.</a></div>
            </div>
        </div>
        <script type="text/javascript">
        	$('.chatBtn a').live('click',  function (event) { 
				var _this = this; 
				if( !!s_account ) { 
				   var s=s_gi(s_account); 
				   s.templtv=s.linkTrackVars; 
				   s.templte=s.linkTrackEvents; 
				   s.manageVars('clearVars'); 
				   s.linkTrackVars='eVar30'; 
				   s.eVar30='ctl|rsd|product|emktg|t1_2012|military_lctl|click_to_chat'; 
				   s.tl(_this,'o','ctl|rsd|product|emktg|t1_2012|military_lctl|click_to_chat'); 
				   if(s.templtv) s.linkTrackVars=s.templtv; 
				   if(s.templte) s.linkTrackEvents=s.templte; 
				}  
			});
        </script>
<?php include('../includes/footer.php'); ?>
