<?php
    require_once("../inc/config.php");
    $nav_class["cities"] = "selected";
    $javascriptFile = "cities";
    $title = "CenturyLink | Fiber Internet | 1 Gigabit High Speed Internet";
    $description = "CenturyLink Fiber 1 Gig Internet gives you the power to connect all your devices, stream multiple HD movies at once & more.";
    $keywords = "centurylink, centurylink fiber, 1 gig internet, high speed internet";

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

    require_once("../inc/header.php");
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

        <div class="city-selection">
            <h2>See what CenturyLink fiber Internet has to offer.</h2>
            <div class="breaker-alt"></div>
            <h3>Select an area to get started.</h3>
            <ul>
                <li><a href="<?php echo $path; ?>/cities/omaha-nebraska" clicktrack="ctl|rsd|emktg|offers|gigabit|cities|link|omaha">Nebraska - Omaha</a></li>
                <li><a href="<?php echo $path; ?>/cities/las-vegas-nevada" clicktrack="ctl|rsd|emktg|offers|gigabit|cities|link|las_vegas">Nevada - Las Vegas</a></li>
            </ul>
        </div>

    </div>

<?php
    require_once("../inc/footer.php");
?>