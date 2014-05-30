<?php
    require_once("inc/config.php");
    $nav_class["home"] = "selected";
    $title = "CenturyLink | High Speed Internet";
    $description = "Bundle CenturyLink High-Speed Internet and Phone service today and save. Lock in a low price for the next year with no contract. Offer ends soon.";
    $keywords = "centurylink, price lock, high-speed internet, phone internet bundle, home internet";

    $svar = array(
        'pageName' => "ctl|rsd|emktg|microsite|position2",
        'server' => "",
        'channelevar41' => "rsd",
        'prop24evar53' => "ctl|rsd|emktg",
        'prop25evar54' => "ctl|rsd|emktg|microsite",
        'prop26evar55' => "ctl|rsd|emktg|microsite|position2",
        'prop38evar48' => "static_page",
        'prop39evar49' => "landing_page",
        'prop52evar56' => "peter_a_mayer"
    );

    require_once("inc/header.php");
?>

    <div class="animation-wrapper">
        <div class="home hero">
            <div class="countdownclock">
                <div class="container-940">
                    <span class="before-clock fL">Time left to order today</span>
                    <div class="clock fL" id="countbox"></div>
                    <span class="after-clock fR">Call Now: 1.866.366.7931</span>
                    <div style="clear:both;"></div>
                </div>
            </div>

            <div class="slide1">
                <div class="container-940">
                    <p class="hidden">
                        CenturyLink&reg; High-Speed Internet. Consistently fast. Guaranteed price.
                        No Contract 5-year price guarantee CenturyLink High-Speed Internet $14.95 a month when you bundle* Speeds up to 768 Kbps.
                    </p>
                    <div class="pp">
                        <img src="<?php echo $path; ?>img/header-pp.png" alt="CenturyLink High-Speed Internet">
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="mid-tfn">
        <div class="container-940">
            <span>Call Now: 1.866.366.7931</span>
        </div>
    </div>

    <div class="home main-info">
        <div class="container-940">
            <h2>Choose CenturyLink and Save.</h2>
            <div class="price-module-one fL">
                <p class="hidden">
                    High-Speed Internet $14.95 a month when you bundle*
                </p>
                <ul>
                    <li>1-Year Price-Lock Guarantee</li>
                    <li>Speeds up to 768 Kbps</li>
                    <li>Perfect for emailing friends and family<br>and web browsing</li>
                </ul>
                <!--<a href="<?php echo $path; ?>internet" class="hero-learn-more-btn" clicktrack="ctl|rsd|emktg|microsite|position2|button|internet">Learn more</a>-->
            </div>
            <div class="price-module-two fL">
                <p class="hidden">
                    Bundle Internet + Phone $54.95 a month*
                </p>
                <ul>
                    <li>1-Year Price-Lock Guarantee</li>
                    <li>Speeds up to 768 Kbps</li>
                    <li>Unlimited nationwide and local calling</li>
                </ul>
                <!--<a href="<?php echo $path; ?>bundles" class="hero-learn-more-btn" clicktrack="ctl|rsd|emktg|microsite|position2|button|bundles">Learn more</a>-->
            </div>
        </div>
        
        <div class="container-940">
        	<p class="high-speed-call">Higher Speeds Available. Call 1.866.366.7931</p>
        </div>
    </div>

    <div class="home green-pack">
        <div class="container-940">
            <h2>Why CenturyLink?</h2>
            <ul>
                <li>
                    <img src="<?php echo $path; ?>img/fortune500_icon.png" alt="">
                    <p>CenturyLink is a name you can trust. We’re an established Fortune 500 company that’s been around for more than 80 years.</p>
                </li>
                <li class="li-middle-margin">
                    <img src="<?php echo $path; ?>img/product_icon.png" alt="">
                    <p>CenturyLink is recognized as a leading national provider of Phone, High-Speed Internet and TV services.</p>
                </li>
                <li>
                    <img src="<?php echo $path; ?>img/people_icon.png" alt="">
                    <p>CenturyLink works hard to make its services more affordable and less complicated – with an unwavering commitment to customer service.</p>
                </li>
            </ul>
        </div>
    </div>

    <div class="lower-tfn">
        <div class="container-940">
            <span>Call Now: 1.866.366.7931</span>
        </div>
    </div>

<?php
    require_once("inc/footer.php");
?>