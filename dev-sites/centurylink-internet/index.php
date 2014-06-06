<?php
    require_once("inc/config.php");
    $nav_class["home"] = "selected";
    $title = "CenturyLink | High Speed Internet";
    $description = "Bundle CenturyLink High-Speed Internet and Phone service today and save. Lock in a low price for the next three years with no contract. Offer ends soon.";
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
                    <span class="after-clock fR">Call Now: 866-366-7931</span>
                    <div style="clear:both;"></div>
                </div>
            </div>

            <div class="slide1">
                <div class="container-940">
                    <p class="hidden">
                        CenturyLink&reg; High-Speed Internet. Consistently fast. Guaranteed price.
                        3 years. 1 price. 0 contract. $19.95 a month when you bundle* Speeds up to 10Mbps
                    </p>
                    <div class="pp">
                        <a href="https://shop.centurylink.com/MasterWebPortal/freeRange/login/shop" targert="_blank" class="orangeBookend bookendButton hero-btn" clicktrack="ctl|rsd|emktg|microsite|position2|button|check_avail1">
                            <span class="bookend leftBookend">&nbsp;</span>
                            <span class="bookend centerBookend">Check Availability</span>
                            <span class="bookend rightBookend">&nbsp;</span>
                        </a>
                        <img src="<?php echo $path; ?>img/header-pp.png" alt="CenturyLink High-Speed Internet">
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="mid-tfn">
        <div class="container-940">
            <span>Order Today! Call 866-366-7931<!--  or <a href="https://shop.centurylink.com/MasterWebPortal/freeRange/login/shop" target="_blank" class="shop-link" clicktrack="ctl|rsd|emktg|microsite|position2|link|order_now">Order Online</a> -->.</span>
        </div>
    </div>

    <div class="home main-info">
        <div class="container-940">
            <h2>Choose CenturyLink and save on speeds up to 10 Mbps.</h2>
            <div class="price-module-one">
                <h1>CenturyLink High-Speed Internet</h1>
                <p class="hidden">
                    High-Speed Internet $19.95 a month when you bundle*
                </p>
                <ul>
                    <li>Watch movies and shows on Netflix<sup>&reg;</sup> and Hulu in HD.</li>
                    <li>Save on mobile data &ndash; connect with in-home Wi-Fi to download the latest apps.</li>
                    <li>Get answers when you need them with 24/7 tech support.</li>
                    <li>Award-winning Norton&trade; AntiVirus Online is included at no additional cost.</li>
                </ul>
            </div>
            <div class="high-speed-call">
                <p>Higher Speeds Available.</p>
                <a href="https://shop.centurylink.com/MasterWebPortal/freeRange/login/shop" targert="_blank" class="orangeBookend bookendButton snipe-btn" clicktrack="ctl|rsd|emktg|microsite|position2|button|check_avail2">
                    <span class="bookend leftBookend">&nbsp;</span>
                    <span class="bookend centerBookend">Check Availability</span>
                    <span class="bookend rightBookend">&nbsp;</span>
                </a>
            </div>
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
            <span>Call Now: 866-366-7931</span>
        </div>
    </div>

<?php
    require_once("inc/footer.php");
?>