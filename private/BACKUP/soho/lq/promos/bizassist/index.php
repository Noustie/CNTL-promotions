<?php
$pagePhone = "866.283.0044";
if( $_GET['source']=="email" ) {
	$pagePhone = "EEE.EEE.EEEE";
} else if ( $_GET['source']=="display" ) {
	$pagePhone = "866.283.0044";
} else if ( $_GET['source']=="search" ){
	$pagePhone = "SSS.SSS.SSSS ";
}

$viewOffer = "https://promotions.centurylink.com/soho/lq/promos/core-connect-mc/";

if ( $_GET['zone']=="lc" || $_GET['zone']=="mc" || $_GET['zone']=="hc" ) {
	$viewOffer = "https://promotions.centurylink.com/soho/lq/promos/core-connect-".$_GET['zone']."/";
} else if ( $_GET['zone']=="lc" && $_GET['topic']=="seo" || $_GET['zone']=="mc" && $_GET['topic']=="seo" || $_GET['zone']=="hc"&& $_GET['topic']=="seo" ){
	$viewOffer = "https://promotions.centurylink.com/soho/lq/promos/core-connect-".$_GET['zone']."&".$_GET['topic']."/";
}else if ( $_GET['zone']=="lc" && $_GET['topic']=="cloud" || $_GET['zone']=="mc" && $_GET['topic']=="cloud" || $_GET['zone']=="hc"&& $_GET['topic']=="cloud" ){
	$viewOffer = "https://promotions.centurylink.com/soho/lq/promos/core-connect-".$_GET['zone']."&".$_GET['topic']."/";
}else if ( $_GET['zone']=="lc" && $_GET['topic']=="social" || $_GET['zone']=="mc" && $_GET['topic']=="social" || $_GET['zone']=="hc"&& $_GET['topic']=="social" ){
	$viewOffer = "https://promotions.centurylink.com/soho/lq/promos/core-connect-".$_GET['zone']."&".$_GET['topic']."/";
}

include_once('inc_new/head.php');
$addEmailField = true;
$footerLinks = array(
	"Home" => "http://www.centurylink.com/small-business/", 
	"AboutUs" => "http://www.centurylink.com/Pages/AboutUs/",
	"Careers" => "http://www.centurylink.com/Pages/AboutUs/CompanyInformation/Careers/index.jsp",
	"InvestorRelations" => "http://ir.centurylink.com/phoenix.zhtml?c=112635&p=irol-IRHome",
	"Media" => "http://news.centurylink.com/",
	"Legal" => "http://www.centurylink.com/Pages/AboutUs/Legal/",
	"Privacy" => "http://www.centurylink.com/Pages/AboutUs/Legal/PrivacyPolicy/",
	"SiteMap" => "http://www.centurylink.com/sitemap.html",
	"FindaStore" => "http://storelocator.centurylinkapps.com/",
	"ContactUs" => "https://www.centurylink.com/small-business/support/"
	);
?>

<!-- 
Start of DoubleClick Floodlight Tag: Please do not remove 
Activity name of this tag: MidUpper Educational Landing Page LQW 
URL of the webpage where the tag is expected to be placed: https://promotions.centurylink.com/soho/lq/promos/bizassist/ 
This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag. 
Creation Date: 02/22/2013 
--> 
<script type="text/javascript"> 
var axel = Math.random() + ""; 
var a = axel * 10000000000000; 
document.write('<iframe src="https://3490900.fls.doubleclick.net/activityi;src=3490900;type=landi831;cat=midup975;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>'); 
</script> 
<noscript> 
<iframe src="https://3490900.fls.doubleclick.net/activityi;src=3490900;type=landi831;cat=midup975;ord=1?" width="1" height="1" frameborder="0" style="display:none"></iframe> 
</noscript> 
<!-- End of DoubleClick Floodlight Tag: Please do not remove --> 

<script>
	$(document).ready(function(){
		$(".vid").colorbox({iframe:true, innerWidth:810, innerHeight:733});
		qa.initialize();
	});
</script>
<?php 
$prot = "http:";
if ( !!$_SERVER['HTTPS'] ) {
	$prot = "https:";
}
?>
<body>
	<div id="wrapper">
	    <div class="content header">
	    	<div class="logo fL">
		    	<a href="http://www.centurylink.com/small-business/" title="Century Link" target="_blank" onClick="_gaq.push(['_trackEvent', 'Index', 'Click',]);" clicktrack="qwest|smb|mid_upper_educational|landing|logo"><img src="img/century-link-logo.png" alt="Century Link Logo" /></a>
	    	</div>
	    	<div class="topPhone">Call <?php echo $pagePhone; ?></div>
	    	<div style="clear:both;"></div>
	    </div><!--end header content div-->
	    
	    <div class="content">
	    	<div id="slider">
				<div id="social" class="one">
					<img src="img/hero1.jpg" alt="" width="958" height="390" />
					<span class="hero1-copy"></span>
					<a class='vid hero-link' href="//ad.doubleclick.net/clk;268958177;95054494;g?<?php echo $prot;?>//<?php echo $_SERVER["SERVER_NAME"]; ?>/soho/lc/promos/bizhelp/videoplayer.html?selectVideo=social" title="" onClick="_gaq.push(['_trackEvent', 'Slider', 'Click', 'Social Video Open']);" clicktrack="qwest|smb|mid_upper_educational|landing|rba|socialize_video"><img src="img/hero-3-link.png" alt="" /></a>			
				</div>
				
				<div id="cloud" class="two">
					<img src="img/hero2.jpg" alt="" width="958" height="390" />
					<span class="hero2-copy"></span>
					<a class='vid hero-link' href="//ad.doubleclick.net/clk;268958175;95054493;d?<?php echo $prot;?>//<?php echo $_SERVER["SERVER_NAME"]; ?>/soho/lc/promos/bizhelp/videoplayer.html?selectVideo=cloud" title="" onClick="_gaq.push(['_trackEvent', 'Slider', 'Click', 'Cloud Video Open']);" clicktrack="qwest|smb|mid_upper_educational|landing|rba|to_the_cloud_video"><img src="img/hero-2-link.png" alt="" /></a>
				</div>
				
				<div id="seo" class="three">
					<img src="img/hero3.jpg" alt="" width="958" height="390" />
					<span class="hero3-copy"></span>
					<a class='vid hero-link' href="//ad.doubleclick.net/clk;268958179;95054492;g?<?php echo $prot;?>//<?php echo $_SERVER["SERVER_NAME"]; ?>/soho/lc/promos/bizhelp/videoplayer.html?selectVideo=seo" title="" onClick="_gaq.push(['_trackEvent', 'Slider', 'Click', 'Seo Video Open']);" clicktrack="qwest|smb|mid_upper_educational|landing|rba|zero_to_hero_video"><img src="img/hero-1-link.png" alt="" /></a>
				</div>
				
			</div><!--end slider-->
			<div class="arrows"><a id="prev2" href="#" onClick="_gaq.push(['_trackEvent', 'Slider', 'Click', 'Previous Slide']);" clicktrack="qwest|smb|mid_upper_educational|landing|rba|advance_left">Prev</a> <a id="next2" href="#" onClick="_gaq.push(['_trackEvent', 'Slider', 'Click','Next Slide']);" clicktrack="qwest|smb|mid_upper_educational|landing|rba|advance_right">Next</a></div>
	    </div><!--end content div-->
	    
	    <div class="content yield">
    		<div class="fL text-content">
    		
    			<div class="module">
    				<h2>We've Helped Over 200,000 Small Businesses Grow</h2>
    				<p>Small business owners like you work faster, smarter, harder and are always on the go. And, today's marketplace demands your online presence works just as hard. Whether you want &aacute; la carte small business services, bundle savings or access to helpful business-building articles and videos, you can count on CenturyLink for help, 24/7. No wonder more than 200,000 businesses get their services from CenturyLink.</p>
    			</div>
    			
    			<div class="module">
    				<h2>The Advantages With CenturyLink Business Are Clear</h2>
    				<ul class="advantages-list">
    					<li>Consistently fast <em style="font-style: italic;">and</em> reliable Business Internet</li>
    					<li>Dedicated technical support 24/7/365 </li>
    					<li>No&ndash;hassle switching &mdash; easy setup and installation</li>
    					<li>Pricing you can count on, month after month</li>
    					<li>Consistent, reliable business phone services</li>
    					<li>Web hosting and design templates are included</li>
    					<li>Promote your business to 94% of web searchers in Google, Yahoo! and other major search engines</li>
    				</ul>
    			</div>
    			
    			<div class="toggles">
<!-- 						<h3>To Elevate Your Small Business Potential, Start Here.</h3> -->
						
						<div class="perimiter">
							<div class="perimiter-image fL">
								<img src="img/modem.png" alt="" class="modem" />
							</div>
							<div class="perimiter-text fL">
								<h4 class="green">High-Speed Business Internet</h4>
								<p>Whether your business operates locally or across the nation, the power of CenturyLink is at your fingertips.</p>
								<ul id="changestate1" class="closed">
									<li>Keep projects moving with speeds up to 12 Mbps and additional upgrades up to 40 Mbps</li>
									<li>Get a private, direct Internet connection to CenturyLink's consistently fast national network</li>
									<li>Never miss a beat with dedicated technical support 24/7/365</li>
								</ul>
								<a href="#" id="expandButton1" onClick="_gaq.push(['_trackEvent', 'Expand', 'Click', 'High-Speed Internet']);" clicktrack="qwest|smb|mid_upper_educational|landing|expand|high_speed_internet">Expand +</a>
								<a href="#" class="setit toggle-btn" onClick="_gaq.push(['_trackEvent', 'Expand', 'Click', 'High-Speed Internet']);" clicktrack="qwest|smb|mid_upper_educational|landing|expand|high_speed_internet"><img id="tog-img1" src="img/toggle-button.png" alt="" /></a>
							</div>
							<div style="clear:both;"></div>
						</div>
						
						<div class="perimiter">
							<div class="perimiter-image fL">
								<img src="img/laptop.png" alt="" />
							</div>
							<div class="perimiter-text fL">
								<h4 class="green">Web Hosting and Design</h4>
								<p>Attract more customers and engage viewers with total web solutions for companies of all sizes.</p>
								<ul id="changestate2" class="closed">
									<li>Create your own website with domain registration and personalized address</li>
									<li>Transfer your existing site to CenturyLink hosting, no extra charge, no service interruption</li>
									<li>Customize up to 10 Web pages with easy templates and search optimization</li>
									<li>Get FREE online profiles with top search engines and make your business more visible online</li>
									<li>Web security backs up your important files and data automatically</li>
								</ul>
								<a href="#" id="expandButton2" onClick="_gaq.push(['_trackEvent', 'Expand', 'Click', 'Web-hosting']);" clicktrack="qwest|smb|mid_upper_educational|landing|expand|website_hosting">Expand +</a>
								<a href="#" class="setit toggle-btn" onClick="_gaq.push(['_trackEvent', 'Expand', 'Click', 'Web-hosting']);" clicktrack="qwest|smb|mid_upper_educational|landing|expand|website_hosting"><img id="tog-img2" src="img/toggle-button.png" alt="" /></a>
							</div>
							<div style="clear:both;"></div>
						</div>
						
						<div class="perimiter">
							<div class="perimiter-image fL">
								<img src="img/atsymbol.png" alt="" />
							</div>
							<div class="perimiter-text fL">
								<h4 class="green">Business Email</h4>
								<p>Stay in touch with your customers and let them know what's new at your business.</p>
								<ul id="changestate3" class="closed">
									<li>Microsoft® Exchange email keeps you connected to clients, customer and staff – no matter where you are</li>
									<li>Create your address book and calendar</li>
									<li>Send &amp; receive up to 20 “fax over email” pages a month</li>
								</ul>
								<a href="#" id="expandButton3" onClick="_gaq.push(['_trackEvent', 'Expand', 'Click', 'Business-class-email']);" clicktrack="qwest|smb|mid_upper_educational|landing|expand|business_class_email">Expand +</a>
								<a href="#" class="setit toggle-btn" onClick="_gaq.push(['_trackEvent', 'Expand', 'Click', 'Business-class-email']);" clicktrack="qwest|smb|mid_upper_educational|landing|expand|business_class_email"><img id="tog-img3" src="img/toggle-button.png" alt="" /></a>
							</div>
							<div style="clear:both;"></div>
						</div>
						
						<div class="perimiter">
							<div class="perimiter-image fL">
								<img src="img/teley.png" class="teley-style" alt="" />
							</div>
							<div class="perimiter-text fL">
								<h4 class="green">Business Phone</h4>
								<p>Get reliable business phone service, everything from a basic line to full business calling packages.</p>
								<ul id="changestate4" class="closed">
									<li>Clear connection and no dropped calls</li>
									<li>Unlimited Nationwide and International calling plans</li>
									<li>Enhanced business calling features like Anywhere Voicemail, Remote Call Forwarding and more</li>
									<li>Hassle-free switching with easy setup and installation</li>
								</ul>
								<a href="#" id="expandButton4" onClick="_gaq.push(['_trackEvent', 'Expand', 'Click', 'Business-Voice']);" clicktrack="qwest|smb|mid_upper_educational|landing|expand|business_voice">Expand +</a>
								<a href="#" class="setit toggle-btn" onClick="_gaq.push(['_trackEvent', 'Expand', 'Click', 'Business-Voice']);" clicktrack="qwest|smb|mid_upper_educational|landing|expand|business_voice"><img id="tog-img4" src="img/toggle-button.png" alt="" /></a>
							</div>
							<div style="clear:both;"></div>
						</div>
						
					<div style="clear:both;"></div>
    			</div><!--end toggles div-->
    			
    		</div><!--end text-content div-->
    		
    		<div class="fL badge">
    			<div class="badge-content">
    				<h4 class="white">CenturyLink Core Connect.</h4>
    				<p>Give your business everything it<br/>needs to thrive with a money-saving<br/>bundle that's got it all.</p>
    				<a href="<?php echo $viewOffer; ?>" title="CenturyLink Core Connect Offers" target="_blank" onClick="_gaq.push(['_trackEvent', 'ViewOffer', 'Click', 'Offer Interest']);" clicktrack="qwest|smb|mid_upper_educational|landing|button|view_offers"><img src="img/offer-button.png" alt="" /></a>
    				<p class="white">More clicks. More calls.<br/>More customers.</p>
    			</div>
    			
    		</div><!--end badge-content div-->
    		<div style="clear:both;"></div>
	    </div><!--end yield content div-->
	   
	    <div class="content pathways">
	    	&nbsp;
	    </div>
	    
	    <div class="content footer">
		    <?php include_once('inc_new/foot.php'); ?>
	    </div>
	    
	</div><!--End wrapper div-->

</body>
</html>
