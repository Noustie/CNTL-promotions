<?php
    require_once("../inc/config.php");
    $nav_class["news"] = "selected";
    $javascriptFile = "news";
    $title = "CenturyLink | Fiber Internet | 1 Gigabit High Speed Internet";
    $description = "CenturyLink Fiber 1 Gig Internet gives you the power to connect all your devices, stream multiple HD movies at once & more.";
    $keywords = "centurylink, centurylink fiber, 1 gig internet, high speed internet";

    $svar = array(
        'pageName' => "ctl|rsd|emktg|offers|gigabit|news",
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
    <div class="base news">
        <div class="hero">
            <h1 class="npm"><img src="<?php echo $path; ?>/img/news-hero-txt.png" alt="Stay up to date on the latest CenturyLink fiber Internet developments."></h1>
            <div class="news-optic particle"></div>
            <div class="news-optic particle"></div>
            <div class="news-optic particle"></div>
            <div class="news-optic particle"></div>
            <div class="news-optic particle"></div>
            <div class="news-optic particle"></div>
        </div>
        <div class="speed">
            Internet Speeds&nbsp;&nbsp;<strong>100x faster</strong>&nbsp;&nbsp;than average broadband speeds.*
        </div>
        <div class="news-paper">
            <a href="<?php echo $path; ?>/news" class="see-more-features">&laquo;View All News</a>
            <h2>News</h2>
    		<h3>CenturyLink Bringing Gigabit Internet to Las Vegas</h3>
            <p class="news-blurb">
                <a href="http://www.fiercetelecom.com/story/centurylink-starts-lighting-1-gbps-ftth-customers-las-vegas/2013-12-06" target="_blank">Source</a>
            </p>
    		<span class="date">12/6/13</span>
    		<p>
    			CenturyLink (NYSE: CTL) has started to deliver its new 1 Gbps fiber to the home (FTTH) service to customers that reside in the northwest area of Las Vegas.
    		</p>
            <p>
                Following a pilot it conducted in Omaha, Neb., the telco announced that it would begin delivering the service to residential and small business customers this fall.
            </p>
            <p>
                The telco said that while the northwest area of Vegas is the first to get the service, it plans to extend it to additional communities and small businesses located in other areas next year.
            </p>
            <p>
                Similar to Google Fiber's (Nasdaq: GOOG) signup process, Jason Chan, market development manager for CenturyLink in Las Vegas, told FierceTelecom that they are trying to gauge customer interest.
            </p>
            <p>
               "In 2013, the build was already done, but we still have the chance to prioritize to go to the South, West or East for next year," he said. "The biggest thing for us is we're trying to get consumers to register on the website so we can see more of the addresses."
            </p>
            <p>
                What makes Las Vegas a unique market is that it was one of the first to get CenturyLink's emerging Prism TV product.
            </p>
            <p>
                "(W)e launched the Prism IPTV product here about three years ago and it's done well for the company in Las Vegas," Chan said. "We also have a growing tech center, so Las Vegas was the right fit for markets, especially on a trial basis."
            </p>
            <p>
                Already providing up to 1 Gbps speeds for larger business customers, the initial focus for the FTTH buildout is serving residential customers.
            </p>
            <p>
                "The big push here is really the residential neighborhoods, but there are obviously small businesses and strip malls that will be within those neighborhoods," Chan said. "Some will be covered but it just happens to be where they are located in residential neighborhoods."
            </p>
            <p>
                While CenturyLink has not revealed other areas where it will bring FTTH, the telco previously indicated that Omaha is a test bed it could potentially duplicate in other markets.
            </p>
    	</div>

    </div>

<?php
    require_once("../inc/footer.php");
?>