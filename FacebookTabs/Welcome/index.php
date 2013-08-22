<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" style="overflow: hidden">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>CenturyLink - Welcome</title>
	<link href="css/welcome.css" rel="stylesheet" type="text/css" />

    <script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
    <script type="text/javascript">
		window.fbAsyncInit = function() {
			FB.Canvas.setAutoResize({ width: 520, height: 1000 });
		}
		// Do things that will sometimes call sizeChangeCallback()
		function sizeChangeCallback() {
			FB.Canvas.setSize({ width: 520, height: 1000 });
		}
		$(document).ready(function () {
			$("#learnMore1").click(function () {
				_gaq.push(['_trackEvent', 'Welcome', 'Learn_More']);
			});
			$("#learnMore1").mouseover(function () {
                $("#learnMore1 img").attr("src", "img/wel_learnMoreBtnOver.jpg");
            });
            $("#learnMore1").mouseout(function () {
                $("#learnMore1 img").attr("src", "img/wel_learnMoreBtn.jpg");
            });
			$("#getSupport").click(function () {
				_gaq.push(['_trackEvent', 'Welcome', 'Get_Support']);
			});
			$("#getSupport").mouseover(function () {
                $("#getSupport img").attr("src", "img/wel_getSupportBtnOver.jpg");
            });
            $("#getSupport").mouseout(function () {
                $("#getSupport img").attr("src", "img/wel_getSupportBtn.jpg");
            });

		});
		$(function(){
		<?php

			require 'facebook.php';

			$app_id = "236041189761008";
			$app_secret = "bbfa141db8ea7eb1b84abc5f7bac91a4";
			$facebook = new Facebook(array(
					'appId' => $app_id,
					'secret' => $app_secret,
					'cookie' => true
			));


			$signed_request = $facebook->getSignedRequest();

			$page_id = $signed_request["page"]["id"];
			$page_admin = $signed_request["page"]["admin"];
			$like_status = $signed_request["page"]["liked"];
			$country = $signed_request["user"]["country"];
			$locale = $signed_request["user"]["locale"];

			if ($like_status) {
				echo '$("#prelike").css("display", "none");';
				echo "sizeChangeCallback();";
			}
			else {
				echo '$("#prelike").css("display", "block");';
			}
		?>
		});
    </script>

    <script type="text/javascript">
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-24819517-2']);
	  _gaq.push(['_trackPageview']);

	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
	</script>
</head>
<body style="overflow: hidden">
    <div id="wrapper">
        <div id="border_wrap">
            <div id="prelike">
                <img src="img/wel_prelike.jpg" />
            </div>
            <div id="header">
                <img src="img/wel_header1.jpg" alt="Explore Everything CenturyLink Has to Offer" width="520" height="61" />
            </div> <!--End heade 1r-->
            <div id="content">
                <div id="groupTop"><!--Group 1-->
                  <div class="header">Discover amazing services and savings.</div>
                  <div class="content"><p>Stay up to speed, connected and entertained for less.</p>
                      <ul>
                        <li>TRUE SPEED all day, every day, for all your connection needs.</li>
                        <li>Enhanced phone service with great calling features like Caller ID,<br />Call Waiting and Voice Mail.</li>
                        <li>A variety of top entertainment packages available.</li>
                        <li>Save money with one of our most popular bundles or build your own!</li>
                      </ul>

                  <p id="imgDevices"><img src="img/wel_imgDevices.gif" /></p>
                  <p id="learnMore1"><a href="http://www.centurylink.com?nid=S_2011_CTLFBCTA_4075957" target="_blank"><img src="img/wel_learnMoreBtn.jpg" alt="Learn More" /></a></p>
                </div>
                </div><!--End Group 1-->
            </div> <!--End Content Top-->
            <div id="header">
                <img src="img/wel_header2.jpg" alt="More Ways To Do More" />
            </div> <!--End header 2-->
            <div id="content">
                <div id="group"><!--Group 1-->
                    <div class="groupImgs">
                        <img src="img/wel_img_bottom.jpg" />
                    </div>
                    <div class="groupTxt">
                        <div class="groupContent"><p>Our customer service team is ready to answer all of your service questions. Just hop on over to our support page and tell us your concern.</p><br />
                        <div id="getSupport"><a href="http://www.facebook.com/CenturyLink?sk=app_225620084141650" id="getSupportBtn" target="_top"><img src="img/wel_getSupportBtn.jpg" alt="Get Support" /></a></div>
                        </div>

                        <div id="ctlLogo"></div>
                    </div>
                </div><!--End Group 1-->
          	</div> <!--End Content Bottom-->
         </div> <!-- End border_wrap-->
	</div> <!-- End Wrapper-->

	<!--FB SCROLL BAR FIX-->
    <div id="fb-root"></div>
	<script>
		window.fbAsyncInit = function() {
			FB.init({
				appId  : '236041189761008',
				status : true, // check login status
				cookie : true, // enable cookies to allow the server to access the session
				xfbml  : true, // parse XFBML
				channelURL : '//promotions.centurylink.com/FacebookTabs/Welcome/channel.html', // channel.html file
				oauth  : true // enable OAuth 2.0
			});
			FB.Canvas.setAutoResize(100);
		};
		(function(d){
			var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
			js = d.createElement('script'); js.id = id; js.async = true;
			js.src = "//connect.facebook.net/en_US/all.js";
			d.getElementsByTagName('head')[0].appendChild(js);
		 }(document));
	</script>
</body>
</html>
