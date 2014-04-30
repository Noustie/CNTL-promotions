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
            <a href="<?php echo $path; ?>/news" class="see-more-features">&lt;&lt;View All News</a>
            <h2>News</h2>
    		<h3>CenturyLink Bringing Gigabit Internet to Las Vegas</h3>
            <p class="news-blurb">
                <a href="http://www.pcmag.com/article2/0,2817,2425471,00.asp" target="_blank">Source</a>
            </p>
    		<span class="date">10/10/13</span>
    		<p>
    			CenturyLink is expanding its gigabit Internet service to Sin City, bringing ultra-fast Web access to select Las Vegas neighborhoods this fall.
    		</p>
            <p>
                The company launched its first gigabit Internet fiber network in Omaha several months ago, and it is now expanding west.
            </p>
            <p>
                CenturyLink said customers can bundle 1 Gbps service with its advanced Prism TV service for $124.94 per month or with unlimited nationwide calling for $134.95 per month.
            </p>
            <p>
                Exact Las Vegas rollout locations will depend on customer demand. Those who live in the region can sign up on CenturyLink's website now to register their interest and receive updates when gigabit Internet is available in their neighborhood. Certain small business customers will also be eligible for 1 Gbps service in early 2014.
            </p>
            <p>
                With gigabit Internet, customers can expect speeds that are 100 times faster than average U.S. download speeds, CenturyLink said. High-definition movies will download in seconds and stream seamlessly from multiple devices, and access to cloud services and on-demand applications are instantaneous.
            </p>
            <p>
                "Las Vegas has always been one of America's most connected cities and is quickly becoming a premier destination for launching tech-focused businesses," Nevada Governor Brian Sandoval said in a statement. "CenturyLink's high-speed 1 Gbps fiber network pilot in Las Vegas adds another level of vital infrastructure to support our continued growth as a technology-driven city."
            </p>
            <p>
                The announcement comes shortly after AT&ampo;T announced that it will deploy fiber gigabit Internet service Austin, Texas. Google also plans to roll out Google Fiber there in 2014.
            </p>
            <p>
                Google really got the gigabit Internet train rolling in 2011 when it selected Kansas City as its first gigabit Internet city. Since then, it has announced plans to bring Google Fiber to surrounding Kansas City suburbs, Austin, and Provo, Utah.
            </p>
    	</div>

    </div>

<?php
    require_once("../inc/footer.php");
?>