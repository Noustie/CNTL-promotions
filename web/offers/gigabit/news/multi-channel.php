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
		<h2>CenturyLink Places 1-Gig Bet In Las Vegas</h2>
        <p class="news-blurb">
            <a href="http://www.multichannel.com/distribution/centurylink-places-1-gig-bet-las-vegas/145998" target="_blank">Source</a>
        </p>
		<span class="date">10/10/13</span>
		<p>
			If needling broadband service providers into upgrading to 1 Gbps speeds is one of Google Fiber’s key motivators, evidence continues to mount that that the strategy is paying off.
		</p>
        <p>
            CenturyLink on Wednesday said it will follow its original 1-Gig pilot in Omaha, Neb., with a similar fiber-to-the-premises project in Las Vegas, where it intends to offer those speeds to both residential and small business customers in “select” neighborhoods this fall.
        </p>
        <p>
            Like its trial in Omaha, which is starting off with a pocket of 48,000 homes, the new trial in Sin City will also apply pressure on incumbent cable operator Cox Communications.
        </p>
        <p>
            According to CenturyLink’s 1-Gig web site, the service will start at $79.95 per month with a 12-month contract, or $124.94 when paired with Prism TV, the telco's Ericsson Mediaroom-powered IPTV service, along with a six-month contract. Cox’s current, fastest DOCSIS-based residential tier tops out at 150 Mbps for $109.99 per month, but also offers business-class services over fiber that offer speeds of 1-Gig and beyond.
        </p>
        <p>
            CenturyLink, whose residential DSL service offers up to 40 Mbps, didn’t identify which parts of Las Vegas will join the first leg of the 1-Gig trial. Taking a page from the Google Fiber playbook, CenturyLink will center the deployment on areas with the most demand. “Expansion of our 1 Gbps service throughout Las Vegas will be dependent on customer demand during our initial launch phase in 2013 and 2014,” the company said in its 1-Gig FAQ. The telco has set up a Web page where prospective customers can sign up to express interest in the service and to stay apprised of deployment plans.
        </p>
        <p>
            "The initial installation this fall will be available to a few thousand homes throughout the Las Vegas area and that number will significantly increase into 2014," a CenturyLink spokeswoman said via email.
        </p>
        <p>
            Small businesses in select locations will also be eligible for 1 Gbps service “in early 2014," the company said.
        </p>
        <p>
            "We know our customers will embrace this new technology that will allow them to simultaneously use multiple devices in their homes and businesses without the burden of bandwidth constraints,” said CenturyLink chief technology officer Matt Beal, in a statement.
        </p>
        <p>
            "Advances like these will ensure that Las Vegas continues to cement its reputation as a high-tech hub. I support these efforts by CenturyLink, and welcome more investments in our local economy. I look forward to even more access to high-speed technology in Las Vegas and throughout Nevada,” added  Senator Harry Reid (D-Nev.)
        </p>

	</div>

    <div style="clear:both"></div>
</div>

<?php
    require_once("../inc/footer.php");
?>