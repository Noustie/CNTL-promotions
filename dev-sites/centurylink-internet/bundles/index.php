<?php
    require_once("../inc/config.php");
    $nav_class["bundles"] = "selected";
    $title = "CenturyLink | High-Speed Internet | Save Big & Bundle With Phone & TV";
    $description = "Enjoy reduced rates on High-Speed Internet, Home Phone and DIRECTV service by bundling with CenturyLink. Offer ends soon.";
    $keywords = "centurylink, 5-year price lock, high-speed internet, phone internet bundle, home internet, directv, tv service";

    $svar = array(
        'pageName' => "ctl|rsd|emktg|microsite|position2|bundles",
        'server' => "",
        'channelevar41' => "rsd",
        'prop24evar53' => "ctl|rsd|emktg",
        'prop25evar54' => "ctl|rsd|emktg|microsite",
        'prop26evar55' => "ctl|rsd|emktg|microsite|position2",
        'prop38evar48' => "static_page",
        'prop39evar49' => "landing_page",
        'prop52evar56' => "peter_a_mayer"
    );

    require_once("../inc/header.php");
?>

    <div class="bundles hero">
        <div class="countdownclock">
            <div class="container-940">
                <span class="before-clock fL">Time left to order today</span>
                <div class="clock fL" id="countbox">
                </div>
                <span class="after-clock fR">Call Now: 1.866.366.7931</span>
                <div style="clear:both;"></div>
            </div>
        </div>
        <div class="container-940">
            <p class="hidden">
                Bundle now. Save big.
                CenturyLink&reg; High-Speed Internet + Unlimited Nationwide Calling
                $59.95 a month*
                Speeds up to 10Mbps
                No Contract 5 - year price guarantee 
            </p>
            <div class="bundle-hero-pp-wrapper">
            </div>
        </div>
    </div>

    <div class="mid-tfn">
        <div class="container-940">
            <span>Call Now: 1.866.366.7931</span>
        </div>
    </div>

    <div class="bundles main-info">
        <div class="container-940">
            <h2>Bundle to save on the services you need.</h2>
            <div class="price-module-one fL">
                <p class="hidden">
                    High-Speed Internet + Unlimited Nationwide Calling 5-Year Guaranteed Price $59.95 a month*
                </p>
                <ul>
                    <li>Unlimited nationwide and local calling</li>
                    <li>Speeds up to 10 Mbps</li>
                    <li>No contract</li>
                </ul>
            </div>
            <div class="price-module-two fL">
                <p class="hidden">
                    High-Speed Internet + Unlimited Nationwide Calling + DIRECTV® Service Guaranteed Price (5 years Internet + Phone, 2 years DIRECTV) $89.94 a month for 24 months*
                </p>
                <ul>
                    <li>Unlimited nationwide and local calling</li>
                    <li>Speeds up to 10 Mbps</li>
                    <li>DIRECTV® CHOICE™ Package</li>
                </ul>
                <p class="disclaimer-txt">
                    *ALL DIRECTV OFFERS REQUIRE 24-MONTH AGREEMENT. Offers end 2/5/14. Credit card required (except in PA). New approved customers only (lease required). Hardware and programming available separately. Additional fees required. Programming, pricing and offers are subject to change and may vary in certain markets.
                </p>
            </div>
        </div>
    </div>

    <div class="internet green-pack">
        <div class="container-940">
            <h2>Why bundle with CenturyLink?</h2>
            <ul>
                <li>
                    <img src="<?php echo $path; ?>img/lapandphone_icon.png" alt="">
                    <p>You can save big! Not only will you enjoy reduced rates by bundling – you’ll get the convenience of all your services on one bill.</p>
                </li>
                <li class="li-middle-margin">
                    <img src="<?php echo $path; ?>img/lock_icon.png" alt="">
                    <p>The CenturyLink Price Guarantee. Customers who bundle can take advantage of our Price-Lock Guarantee. The price you sign up for is locked-in for 5 years. Best of all, even though the price is locked-in, you’re not. No contract. That’s also a guarantee!</p>
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
    require_once("../inc/footer.php");
?>