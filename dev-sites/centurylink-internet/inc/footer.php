    <div class="footer">
        <div class="container-940">
            <div class="logo fL">
                <?php   
                    if ( $nav_class["bundles"] == "selected" ) {
                        echo '<a href="http://centurylinkinternet.com/"><img src="'. $path .'img/centurylink.png" alt=""></a>';
                    } elseif ( $nav_class["internet"] == "selected" ) {
                        echo '<a href="http://centurylinkinternet.com/"><img src="'. $path .'img/centurylink.png" alt=""></a>';
                    } else {
                        echo '<img src="'. $path .'img/centurylink.png" alt="">';
                    }
                ?>
            </div>
            <!--<div class="nav fL">
                <ul>
                    <li><a href="<?php echo $path; ?>" clicktrack="ctl|rsd|emktg|microsite|position2|footer|link|home" class="<?php echo $nav_class["home"]; ?>">HOME</a></li>
                    <li><a href="<?php echo $path; ?>internet" clicktrack="ctl|rsd|emktg|microsite|position2|footer|link|internet" class="<?php echo $nav_class["internet"]; ?>">INTERNET</a></li>
                    <li><a href="<?php echo $path; ?>bundles" class="<?php echo $nav_class["bundles"]; ?>" clicktrack="ctl|rsd|emktg|microsite|position2|footer|link|bundles">BUNDLES</a></li>
                </ul>
            </div>-->
            <div style="clear:both;"></div>

            <p class="small grey">*Other fees and conditions may apply. <a href="<?php echo $path; ?>disclaimer.html" class="disclaimer-link" clicktrack="ctl|rsd|emktg|microsite|position2|footer|link|fees_and_conditions" onclick="window.open(this.href,'disclaimer','height=650,width=600,left=100,top=50,resizable=yes,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank">Click here for details</a></p>
            <p class="small dk-grey">©2014 CenturyLink. All Rights Reserved. The name CenturyLink and the pathways logo are trademarks of CenturyLink.</p>
        </div>
        <div class="footer-bottom"></div>
    </div>

</div><!--end site-wrapper div-->

    <script type="text/javascript" src="<?php echo $path; ?>js/jquery.min.js"></script>
    <script type="text/javascript" src="<?php echo $path; ?>js/greensock/TweenMax.min.js"></script>
    <script type="text/javascript" src="<?php echo $path; ?>js/main.js"></script>
    <script type="text/javascript" src="<?php echo $path; ?>js/animation.js"></script>
    <!-- Do not touch! -->
    <!-- SiteCatalyst code version: H.20.3.
    Copyright 1997-2009 Omniture, Inc. More info available at http://www.omniture.com -->
    <script type="text/javascript" src="<?php echo $path; ?>js/s_code.js"></script>
    <script>
        s.linkInternalFilters+=","+location.hostname;
    </script>
    <noscript>
        <a href="http://www.omniture.com" title="Web Analytics"><img src="http://qwest.com/images/spacer.gif" height="1" width="1" border="0" title="" /></a>
    </noscript>
    <!-- / DO NOT REMOVE / -->
    <!-- End SiteCatalyst code version: H.20.3. -->
    <!-- Ignition One Start -->
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
    <!-- Ignition One End-->
    <script type="text/javascript" src="<?php echo $path; ?>js/jquery.qwest-core.js"></script>
    <script type="text/javascript" src="<?php echo $path; ?>js/centurycore.shortcuts.js"></script>

    <script>
        $(document).ready(function(){
            qa.initialize();
        });
    </script>

</body>
</html>
