<?php
    require_once("./inc/config.php");
    $nav_class["home"] = "selected";
    $javascriptFile = "home";
    $title = "CenturyLink | Fiber Internet | 1 Gigabit High Speed Internet";
    $description = "CenturyLink Fiber 1 Gig Internet gives you the power to connect all your devices, stream multiple HD movies at once & more.";
    $keywords = "centurylink, centurylink fiber, 1 gig internet, high speed internet";

    $svar = array(
        'pageName' => "ctl|rsd|emktg|offers|gigabit|home",
        'server' => "centurylink.com",
        'channelevar41' => "rsd",
        'prop24evar53' => "ctl|rsd|emktg",
        'prop25evar54' => "ctl|rsd|emktg|offers",
        'prop26evar55' => "ctl|rsd|emktg|offers|gigabit",
        'prop38evar48' => "static_page",
        'prop39evar49' => "landing_page",
        'prop52evar56' => "peter_a_mayer"
    );

    require_once("./inc/header.php");
?>

    <div class="base home">
        <div class="hero">
            <h1 class="npm"><img src="<?php echo $path; ?>/img/home-hero-txt.png" alt="CenturyLink is bringing up to 1-Gig Internet speeds to your community."></h1>
            <div class="white-flare wf1"></div>
            <div class="white-flare wf2"></div>
            <div class="vert-white-streak bitstaticL"></div>
            <div class="vert-white-streak bitstaticL"></div>
            <div class="vert-white-streak bitstaticL"></div>
            <div class="vert-white-streak bitstaticL"></div>
            <div class="vert-white-streak bitstaticR"></div>
            <div class="vert-white-streak bitstaticR"></div>
            <div class="vert-white-streak bitstaticR"></div>
            <div class="vert-white-streak bitstaticR"></div>
        </div>

        <div class="speed">
            Internet speeds&nbsp;&nbsp;<strong>100x faster</strong>&nbsp;&nbsp;than average broadband speeds.*
        </div>

        <h2 class="eighty">CenturyLink’s <strong>fiber Internet</strong> is one of the most advanced Internet technologies available today.</h2>
        
        <div class="center-uls">
            <ul class="split fL">
                <li><strong>Ideal for multiple users</strong> to stream several<br>devices simultaneously.</li>
                <li class="lower-li">Watch HD movies with almost <strong>no lag or buffering</strong>.</li>
            </ul>
            <ul class="fL">
                <li>With 1-Gig service, you can <strong>upload and<br>download files at symmetrical speeds</strong>.</li>
                <li class="lower-li">Provides a <strong>fast, reliable connection</strong>.</li>
            </ul>
            <div style="clear:both;"></div>
        </div>

        <div class="three-pack">
            <div class="pack packone fL">
                <div class="imgHeading">
                    <strong><i>For Your Home</i></strong>
                </div>
                <p>CenturyLink is bringing speeds up<br>to 1 Gig to cities across the country.</p>
                <a href="<?php echo $path; ?>/cities" clicktrack="ctl|rsd|emktg|offers|gigabit|home|link|home">Learn More</a>
            </div>
            <div class="pack packtwo fL">
                <div class="imgHeading">
                    <strong><i>For Your Business</i></strong>
                </div>
                <p>Take your business to the next<br>level with speeds up to 1 Gig.</p>
                <a href="<?php echo $path; ?>/business" clicktrack="ctl|rsd|emktg|offers|gigabit|home|link|business">Learn More</a>
            </div>
            <div class="pack packthree fR">
                <div class="imgHeading">
                    <strong><i>For Your Community</i></strong>
                </div>
                <p>Discover how speeds up to 1 Gig<br>can take your town to the next level.</p>
                <a href="<?php echo $path; ?>/community" clicktrack="ctl|rsd|emktg|offers|gigabit|home|link|community">Learn More</a>
            </div>
            <div style="clear:both;"></div>
        </div>

        <div class="newsy">
            <h3><strong>Get the latest</strong> about speeds up to 1 Gig.</h3>
            <div class="newsblurbs">

                <div class="newsblurb fL">
                    <a href="<?php echo $path; ?>/news/centurylink-expands-las-vegas-coverage.php" class="title" clicktrack="ctl|rsd|emktg|offers|gigabit|home|link|article_1">
                        CenturyLink plans expansion of Las Vegas<br>gigabit fiber network 
                    </a>
                    <p class="blurb">
                        <strong>LAS VEGAS &mdash; CenturyLink, Inc. (NYSE: CTL),</strong> which offers the fastest residential broadband speeds in Las Vegas, has announced plans to expand its gigabit fiber network and more than double the number of homes eligible for up to 1 gigabit per second (Gbps) service by the end of 2014...<a href="<?php echo $path; ?>/news/centurylink-expands-las-vegas-coverage.php" class="read-more-link" clicktrack="ctl|rsd|emktg|offers|gigabit|home|link|article_1">Read More</a>
                    </p>
                </div>

                <div class="newsblurb fL">
                    <a href="<?php echo $path; ?>/news/lasvegas.php" class="title" clicktrack="ctl|rsd|emktg|offers|gigabit|home|link|article_2">
                        CenturyLink brings 1 gigabit fiber<br>service to Las Vegas
                    </a>
                    <p class="blurb">
                        <strong>MONROE, La., October 9, 2013 &mdash; CenturyLink, Inc. (NYSE: CTL)</strong> today announced that it will expand its fiber network pilot to Las Vegas, enabling Internet speeds of up to 1 gigabit per second (Gbps). CenturyLink’s enhanced fiber network will deliver this ultra-fast broadband technology to residential...<a href="<?php echo $path; ?>/news/lasvegas.php" class="read-more-link" clicktrack="ctl|rsd|emktg|offers|gigabit|home|link|article_2">Read More</a>
                    </p>
                </div>
                <div style="clear:both;"></div>
            </div>
            <a href="<?php echo $path; ?>/news" class="bookendButton" clicktrack="ctl|rsd|emktg|offers|gigabit|home|button|more_news">
                <span class="bookend leftBookend">&nbsp;</span>
                <span class="bookend centerBookend">View More News</span>
                <span class="bookend rightBookend">&nbsp;</span>
            </a>
        </div>
    </div>

<?php
    require_once("./inc/footer.php");
?>