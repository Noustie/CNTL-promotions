<?php
    require_once("../../inc/config.php");
    $nav_class["cities"] = "selected";
    $javascriptFile = "cities"; //vegas
    $chatbtn = true;
    $title = "CenturyLink | Fiber Internet Las Vegas | 1 Gigabit High Speed Internet";
    $description = "CenturyLink Fiber 1 Gig Internet in Las Vegas gives you the power to connect all your devices, stream multiple HD movies at once & more.";
    $keywords = "centurylink, centurylink fiber, 1 gig internet, las vegas internet, high speed internet";

    $svar = array(
        'pageName' => "ctl|rsd|emktg|offers|gigabit|cities",
        'server' => "centurylink.com",
        'channelevar41' => "rsd",
        'prop24evar53' => "ctl|rsd|emktg",
        'prop25evar54' => "ctl|rsd|emktg|offers",
        'prop26evar55' => "ctl|rsd|emktg|offers|gigabit",
        'prop38evar48' => "static_page",
        'prop39evar49' => "landing_page",
        'prop52evar56' => "peter_a_mayer"
    );

    require_once("../../inc/header.php");
?>
    <div class="base cities">
        <div class="hero">
            <h1 class="npm"><img src="<?php echo $path; ?>/img/cities-hero-txt.png" alt="Discover what speeds up to 1 Gig can do for you."></h1>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
<!--             <div class="cities-flare particle1"></div>
            <div class="cities-flare particle2"></div> -->
        </div>

        <div class="speed">
            Internet speeds&nbsp;&nbsp;<strong>100x faster</strong>&nbsp;&nbsp;than average broadband speeds.*
        </div>

        <div class="mid-cta">
            <div class="tfn fL">Call Now! 877-543-2979</div>

            <div id="lp-chat-centurylink-residential-customer-support-gpon-modal" class="chat fR"></div>
            <p class="fR">Chat Live with a<br>CenturyLink Representative</p>
            <div style="clear:both;"></div>
            <script type="text/javascript">
                var lpMTagConfig1 = lpMTagConfig;
                if(typeof(lpMTagConfig1.dynButton)!="undefined") {
                    lpMTagConfig1.dynButton[lpMTagConfig1.dynButton.length] = {'name':"chat-centurylink-residential-customer-support-gpon-modal",'pid':'lp-chat-centurylink-residential-customer-support-gpon-modal'};
                }
            </script>
        </div>

        <div class="city">
            <div class="title-selection">
                <h3 class="fL">Las Vegas Residential Pricing</h3>
                <div class="selection fR">
                    <span>Select a City:&nbsp;&nbsp;</span>
                    <select name="cities" onchange="location = this.options[this.selectedIndex].value;">
                        <option value="<?php echo $path; ?>/cities/omaha-nebraska">Nebraska - Omaha</option>
                        <option value="Nevada - Las Vegas" selected>Nevada - Las Vegas</option>
                    </select>
                </div>
                <div style="clear:both;"></div>
            </div>
            <div class="pricing">
                <div class="fL price-point tier3">
                    <h4>CenturyLink speeds<br>up to 1 Gig + Prism&trade;<br>Essential TV</h4>
                    <div class="price-area">
                        <img src="<?php echo $path; ?>/img/laptop-tv.png" alt="">
                        <p class="above-price">Starting at</p>
                        <span class="price"><sup>$</sup>129<sup>94</sup></span>
                        <p class="below-price">a month for 6 months.</p>
                    </div>
                </div>

                <div class="fL price-point tier2">
                    <h4>Add CenturyLink<br>speeds up to 1 Gig to<br>Prism&trade; Essential TV</h4>
                    <div class="price-area">
                        <img src="<?php echo $path; ?>/img/laptop-2.png" alt="">
                        <p class="above-price">Starting at</p>
                        <span class="price"><sup>$</sup>79<sup>95</sup></span>
                        <p class="below-price">a month when bundled with<br>CenturyLink<sup>&reg;</sup> Prism&trade; TV for<br>12 months.</p>
                    </div>
                </div>

                <div class="fL price-point tier1">
                    <h4>Prism&trade; Essential TV</h4>
                    <div class="price-area">
                        <img src="<?php echo $path; ?>/img/tv.png" alt="">
                        <p class="above-price">Starting at</p>
                        <span class="price"><sup>$</sup>49<sup>99</sup></span>
                        <p class="below-price">a month for 6 months when bundled<br>with a qualifying service.</p>
                    </div>
                </div>
                <div style="clear:both;"></div>
            </div>
            <div class="toggle">
                <a href="#" class="toggle-arrow fR"><img src="<?php echo $path; ?>/img/toggle-arrow.png" alt=""></a>
                <p class="toggle-learn fR">Learn More About Prism&trade; TV</p>
            </div>
            <div class="expanded">
                <div class="pos">
                    <p><strong>CenturyLink<sup>&reg;</sup> Prism<sup>&trade;</sup> is next-generation TV delivered to your neighborhood through our own fiber-optic network.</strong> So you get a combination of interactive features that put you in control of what you watch, where you watch and even what device you watch it on. Plus, there are a wide range of plans and packages to fit any budget or TV lover.</p>
                    <p><a href="http://www.centurylink.com/prismtv/#index.html" class="linkout" target="_blank" style="padding-top:5px;" clicktrack="ctl|rsd|emktg|offers|gigabit|cities|las_vegas|link|prism"><strong>Learn More</strong> <img src="<?php echo $path; ?>/img/linkout.png"></a></p>
                </div>
            </div>
            <div class="small-disclaimer">
                <a href="<?php echo $path; ?>/ens-disclaimer.html" onclick="window.open(this.href,'disclaimer','height=650,width=970,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank">Offer details</a>
            </div>
            <div class="breaker-disclaimer"></div>
            <div class="store">
                <img src="<?php echo $path; ?>/img/store-interior.jpg" class="fL" alt="Find a CenturyLink store near you">
                <span class="fL"></span>
                <div class="find-store fL">
                    <p><strong>Test-drive speeds up to<br>1 Gig at our retail stores.</strong></p>
                    <a href="http://storelocator.centurylinkapps.com/index.cfm" target="_blank" class="bookendButton" title="Find a CenturyLink store near you" clicktrack="ctl|rsd|emktg|offers|gigabit|cities|las_vegas|link|store">
                        <span class="bookend leftBookend">&nbsp;</span>
                        <span class="bookend centerBookend">Find a Store</span>
                        <span class="bookend rightBookend">&nbsp;</span>
                    </a>
                </div>
                <div style="clear:both;"></div>
            </div>
            <div class="breaker"></div>
        </div>
    </div>

<?php
    require_once("../../inc/footer.php");
?>