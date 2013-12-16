<?php
	require_once("../inc/config.php");
    $nav_class["news"] = "selected";
    $shadow_styles = "short";
    $title = "";
    $description = "";

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


<div class="secondary center-content news-page-level">
	<a href="/offers/gigabit/news/" class="see-more-features"><img src="../img/l-arrows.png" alt="">View All News</a>
	<h1>News</h1>
	<div class="news-paper">
		<h2>CenturyLink Gambles On Gigabit Internet In Las Vegas</h2>
        <p class="news-blurb">
            <a href="http://hothardware.com/News/CenturyLink-Gambles-On-Gigabit-Internet-In-Las-Vegas/" target="_blank">Source</a>
        </p>
		<span class="date">10/10/13</span>
		<p>
			While the gigabit Internet revolution (well, evolution) continues for the likes of Google, AT&T, and a handful of smaller ISPs, CenturyLink won’t be left behind. The company is nearly ready to launch its gigabit Internet service in Omaha, NE, and it just announced that it will be rolling out service to Las Vegas, too.
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

    <div style="clear:both"></div>
</div>
<!-- <img src="/offers/gigabit/img/fpo.gif" alt=""> -->

<?php
    require_once("../inc/footer.php");
?>