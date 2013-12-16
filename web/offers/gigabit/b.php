<?php
    require_once("./inc/config.php");
    $nav_class["home"] = "selected";
    $shadow_styles = "tall";
    $title = "";
    $description = "";

    $svar = array(
        'pageName' => "ctl|rsd|emktg|offers|fiber|home",
        'server' => "centurylink.com",
        'channelevar41' => "rsd",
        'prop24evar53' => "ctl|rsd|emktg",
        'prop25evar54' => "ctl|rsd|emktg|offers",
        'prop26evar55' => "ctl|rsd|emktg|offers|fiber",
        'prop38evar48' => "static_page",
        'prop39evar49' => "landing_page",
        'prop52evar56' => "peter_a_mayer"
    );

    require_once("./inc/header-animateb.php");
?>
    <div class="center-content primary">
        <div class="left-side fL">
            <h1>Internet speeds 100x faster than the average broadband speeds.*</h1>
            <p>CenturyLink now offers Internet speeds up to 1 Gig per second to deliver more power for every person, device, site, game and app.</p>
            <p class="second">But this isn&rsquo;t just speed. A private, fiber connection is the most advanced Internet technology available today &ndash; giving you the power to download HD movies in seconds and stream it from all the devices you own at the same time. This is next-generation technology that lets you future-proof your home for whatever comes next.</p>
            <a href="/offers/gigabit/features/" class="see-more-features">See More Features &raquo;</a>
        </div><!--end left-side div-->

        <div class="right-side fL">
            <span class="uno">
                Be the first to know when<br>
                <span class="dos">
                    1-gigabit service<br>
                </span>
                is in your area.
            </span>

            <div id="contact_form">
<?php if ( $_GET["thanks"] == 1 ): ?>

                <div id="message" style="display: block;">
                    <h2>Congratulations!</h2>
                    <p>Now you’ll be one of the first to know when CenturyLink<sup>&reg;</sup> 1-gigabit service is available in your area.</p>
                </div>

<?php elseif ( $_COOKIE["vegas_gpon_cookie"] == "yes" ) : ?>  

                <div id="message">
                    <h2>Thanks!</h2>
                    <p>According to our records, you have already signed up for Las Vegas 1Gig notifications.</p>
                </div>

<?php else: ?>
                <p class="sign-me-up-p">Sign up for updates today.</p>                  
                <form id="mailform" name="mailform" action="inc/mailform.php" method="post">
                    <!-- succes link -->
                    <input type="hidden" id="successView" name="successView" value="/offers/gigabit/index.php">

                    <!-- name -->
                    <label>
                        <span class="placeholder">Name (Required)</span>
                        <input type="Text" class="longBox validate" maxlength="150" size="25" value="" name="name" id="name">
                    </label>

                    <!-- streetAddress -->
                    <label>
                        <span>Street Address (Required)</span>
                        <input type="Text" class="longBox validate" maxlength="150" size="25" value="" name="streetAddress" id="streetAddress">
                    </label>

                    <!-- unit -->
                    <label>
                        <span class="shorty1">Unit</span>
                        <input type="Text" class="shortBox1" maxlength="10" size="10" value="" name="unitNumber" id="unitNumber">
                    </label>

                    <!-- zip -->
                    <label>
                        <span class="shorty2">ZIP (Required)</span>
                        <input type="Text" class="shortBox2 validate" maxlength="5" size="15" value="" name="zip" id="zip">
                    </label>

                    <!-- email -->
                    <label>
                        <span>Email (Required)</span>
                        <input type="Text" class="longBox validate" maxlength="150" size="25" value="" name="email" id="email">
                    </label>

                    <!-- phoneNumber -->
                    <label>
                        <span>Phone Number (Optional)</span>
                        <input type="Text" class="longBox" maxlength="150" size="25" value="" name="phone" id="phone">
                    </label>
                    
                    <input type="image" class="subBtn" value="SUBMIT" src="img/form-submit-btn.png">
                </form>
<?php endif; ?>
            </div>       
        </div><!--end right-side div-->
        <div style="clear:both"></div>
    </div>

    <div class="shadow-divider"></div>

    <div class="center-content secondary">
        <div class="left-side fL">
            <h3>Get the latest about 1-gigabit service.</h3>

            <div class="news-unit">
                <!-- <div class="news-unit-image fL">
                    <img src="img/fpo.gif" alt="">
                </div> -->
                <div class="news-unit-info fL">
                    <h4><a href="/offers/gigabit/news/lasvegas.php">CenturyLink brings 1 gigabit fiber service to<br>Las Vegas</a></h4>
                    <p><strong>MONROE, La.</strong> – CenturyLink, Inc. (NYSE: CTL) today announced that it will expand its fiber network pilot to Las Vegas, enabling Internet speeds of up to 1 gigabit per second (Gbps). CenturyLink’s enhanced fiber network will deliver this ultra-fast broadband technology to residential and small business customers in select Las Vegas neighborhoods beginning this fall. <a href="/offers/gigabit/news/lasvegas.php">Read more</a></p>
                </div>
                <span class="date">10/13</span>
                <div style="clear:both"></div>
            </div>

            <div class="news-unit">
<!--            <div class="news-unit-image fL">
                    <img src="img/fpo.gif" alt="">
                </div> -->
                <div class="news-unit-info fL">
                    <h4><a href="/offers/gigabit/news/omaha.php">CenturyLink to make Omaha one of the fastest broadband cities in America</a></h4>
                    <p><strong>OMAHA, Neb.</strong> May 1, 2013 /PRNewswire/ -- CenturyLink, Inc. (NYSE: CTL) today announced it is connecting 48,000 Omaha homes and businesses with its new high-speed fiber network pilot that will deliver Internet speeds of up to one Gigabit per second (Gbps) – 100 times faster than average broadband speeds. <a href="/offers/gigabit/news/omaha.php">Read more</a></p>
                </div>
                <span class="date">05/13</span>
                <div style="clear:both"></div>
            </div>

            <a href="/offers/gigabit/news" class="view-more-news">View More News &raquo;</a> 
        </div>

        <div class="right-side fL">
            <div class="tweets">
                <a class="twitter-timeline" href="https://twitter.com/CenturyLinkLV" data-widget-id="377513482196754432" data-chrome="nofooter" data-border-color="#cccccc" data-tweet-limit="2" height="300">Tweets by @CenturyLinkLV</a>
                <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
            </div>
            
        </div>
        <div style="clear:both"></div>
    </div>

<?php
    require_once("./inc/footer-animate.php");
?>