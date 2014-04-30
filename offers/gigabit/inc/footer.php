        <?php require_once("$rootpath/inc/twopack.php"); ?>

        </div><!--end interiorwrapper div-->

            <div class="footer">
                <div class="footer-nav fL">
                    <ul>
                        <li><a href="<?php echo $path; ?>/" title="CenturyLink 1-gigabit" class="<?php echo $nav_class["home"]; ?>" clicktrack="ctl|rsd|emktg|offers|gigabit|bottom_nav|home">Home</a></li>
                        <li>|</li>
                        <li><a href="<?php echo $path; ?>/benefits" title="CenturyLink 1-gigabit Benefits" class="<?php echo $nav_class["benefits"]; ?>" clicktrack="ctl|rsd|emktg|offers|gigabit|bottom_nav|benefits">Benefits</a></li>
                        <li>|</li>
                        <li><a href="<?php echo $path; ?>/cities" title="CenturyLink Cities" class="<?php echo $nav_class["cities"]; ?>" clicktrack="ctl|rsd|emktg|offers|gigabit|bottom_nav|cities">Cities</a></li>
                        <li>|</li>
                        <li><a href="<?php echo $path; ?>/business" title="CenturyLink 1-gigabit Business" class="<?php echo $nav_class["business"]; ?>" clicktrack="ctl|rsd|emktg|offers|gigabit|bottom_nav|business">Business</a></li>
                        <li>|</li>
                        <li><a href="<?php echo $path; ?>/community" title="CenturyLink 1-gigabit Community" class="<?php echo $nav_class["community"]; ?>" clicktrack="ctl|rsd|emktg|offers|gigabit|bottom_nav|community">Community</a></li>
                        <li>|</li>
                        <li><a href="<?php echo $path; ?>/news" title="CenturyLink 1-gigabit News" class="<?php echo $nav_class["news"]; ?>" clicktrack="ctl|rsd|emktg|offers|gigabit|bottom_nav|news">News</a></li>
                        <li>|</li>
                        <li><a href="<?php echo $path; ?>/faqs" title="CenturyLink 1-gigabit FAQs" class="<?php echo $nav_class["faqs"]; ?>" clicktrack="ctl|rsd|emktg|offers|gigabit|bottom_nav|faqs">FAQs</a></li>
                    </ul>
                </div>
                <div class="footer-social-nav fR">
                    <ul>
                        <li>Follow Us:</li>
                        <li><a href="https://twitter.com/CenturyLink" class="social-tw" target="_blank" title="CenturyLink Twitter" clicktrack="ctl|rsd|emktg|offers|gigabit|bottom_nav|twitter"></a></li>
                        <li><a href="https://www.facebook.com/CenturyLink" class="social-fb" target="_blank" title="CenturyLink Facebook" clicktrack="ctl|rsd|emktg|offers|gigabit|bottom_nav|facebook"></a></li>
                    </ul>
                </div>
                <div style="clear:both"></div>
                <p class="disclaimer">*Up to 1 Gbps is available in select areas of Las Vegas, NV and Omaha, NE. The claim “100 times faster” is based on industry broadband speed studies that concluded the national average speed is 10 Mbps or less for residents throughout the U.S. Broadband speeds will vary due to conditions outside of network control, including customer location and equipment, and are not guaranteed. Restrictions apply. Contact CenturyLink for details.</p>

                <?php
                    $url = $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
                    if (false !== strpos($url,'community')) {
                        echo "<p class='disclaimer'>**According to respondents in RVA LLC's survey published in the January/February 2013 edition of Broadband Communities Magazine Online - <a href='http://www.bbpmag.com/2013mags/jan-feb/BBC_Jan13_Render.pdf' target='_blank'>http://www.bbpmag.com/2013mags/jan-feb/BBC_Jan13_Render.pdf</a></p>";
                    }
                ?>

            </div>
    <!-- <div class="right-edge fL"></div> -->
    <div style="clear:both"></div>
</div><!--end wrapper div-->

<?php require_once($rootpath."/inc/form.php"); ?>

<script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo $path; ?>/js/validation.js"></script>
<script type="text/javascript" src="<?php echo $path; ?>/js/greensock/TweenMax.min.js"></script>
<script type="text/javascript" src="<?php echo $path; ?>/js/modal.js"></script>

<?php if ( !!$javascriptFile ): ?>
<!-- Load animation script based on which page you're on -->
<script type="text/javascript" src="<?php echo $path; ?>/js/<?php echo $javascriptFile; ?>.js"></script>
<?php endif; ?>
<!-- Jquery Cookies -->
<script type="text/javascript" src="/assets/js/plugins/jquery.cookie.js"></script>

<!-- Track chat -->
<script>
    $(function(){
        $("#lp-chat-residential-english-gpon-ma-modal a").live("mouseup",function(){
            qa.trackAction("ctl|rsd|emktg|offers|gigabit|cities|omaha|chat");
        });
        $("#lp-chat-centurylink-residential-customer-support-gpon-modal a").live("mouseup",function(){
            qa.trackAction("ctl|rsd|emktg|offers|gigabit|cities|lasvegas|chat");
        });
    });
</script>

<!-- Successful Revisit Message -->
<script>
    if(!!$.cookie('gpon_inquiry')){
        $('#contact_form').html("<div id='message'></div>");
        $('#message').html("<h2>Thanks!</h2>").append("<p>According to our records, you have already signed up for CenturyLink<br>up to 1 Gig notifications.</p>", function() {
            $('#message');
        });
        $('#contact_form').append("<a href='#' class='close-button'><img src='"+PATH+"img/modal-X.png'></a>");
    }
</script>

<!-- Do not touch! -->
<!-- SiteCatalyst code version: H.20.3.
Copyright 1997-2009 Omniture, Inc. More info available at http://www.omniture.com -->
<script type="text/javascript" src="/assets/js/third-party/metrics/metrixConfig.js"></script>
<script>
    s.linkInternalFilters+=",facebook.com,twitter.com,storelocator.centurylinkapps.com,"+location.hostname;
</script>
<noscript>
    <a href="http://www.omniture.com" title="Web Analytics"><img src="http://qwest.com/images/spacer.gif" height="1" width="1" border="0" title="" /></a>
</noscript>
<!-- / DO NOT REMOVE / -->
<!-- End SiteCatalyst code version: H.20.3. -->
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
<script type="text/javascript" src="/assets/js/plugins/jquery.qwest-core.js"></script>
<script type="text/javascript" src="/assets/js/plugins/centurycore.shortcuts.js"></script>
<script type="text/javascript" src="<?php echo $path; ?>/js/main.js"></script>

</body>
</html>
