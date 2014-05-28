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
            Internet speeds&nbsp;&nbsp;<strong>100x faster</strong>&nbsp;&nbsp;than average broadband speeds.*
        </div>

        <div class="news-paper">
            <a href="<?php echo $path; ?>/news" class="see-more-features">&laquo;View All News</a>
            <h2>News</h2>
            <h3>CenturyLink Gambles On Gigabit Internet In Las Vegas</h3>
            <p class="news-blurb">
                <a href="http://hothardware.com/News/CenturyLink-Gambles-On-Gigabit-Internet-In-Las-Vegas/" target="_blank">Source</a>
            </p>
            <span class="date">10/10/13</span>
            <p>
                While the gigabit Internet revolution (well, evolution) continues for the likes of Google, AT&amp;T, and a handful of smaller ISPs, CenturyLink won’t be left behind. The company is nearly ready to launch its gigabit Internet service in Omaha, NE, and it just announced that it will be rolling out service to Las Vegas, too.
            </p>
            <p>
                "CenturyLink is pleased to announce that Las Vegas will be the next city to receive ultra-fast broadband speeds up to 1 Gbps," said Matt Beal, CenturyLink chief technology officer, in a press release. "We know our customers will embrace this new technology that will allow them to simultaneously use multiple devices in their homes and businesses without the burden of bandwidth constraints."
            </p>
            <p>
                CenturyLink uses fiber-to-the-premises (FTTP) technology to deliver its 1 Gbps speeds, and Las Vegas will enjoy them as early as this fall. Some small businesses in “select locations” can get access early next year, while more communities, presumably around the Las Vegas area, will see gigabit speeds sometime in 2014.
            </p>
            <p>
                Pricing was not announced, but CenturyLink’s website lists a gigabit-plus-Prism TV package for $124.94 per month (for six months, and then it will go up from there).
            </p>
        </div>
    </div>

<?php
    require_once("../inc/footer.php");
?>
