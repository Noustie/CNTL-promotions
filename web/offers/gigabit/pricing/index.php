<?php
	require_once("../inc/config.php");
    $nav_class["pricing"] = "selected";
    $shadow_styles = "short";
    $title = "";
    $description = "";

    $svar = array(
        'pageName' => "ctl|rsd|emktg|offers|gigabit|pricing",
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

<div class="primary center-content pricing">
	<h1>CenturyLink 1-gigabit service + Prism<sup>&trade;</sup> TV offers</h1>
<!-- 	<h3>Be the first to know when these offers are available.</h3> -->
    <div id="lp-chat-centurylink-residential-customer-support-gigabit-modal"></div>
    <script type="text/javascript">
        var lpMTagConfig1 = lpMTagConfig;
        if(typeof(lpMTagConfig1.dynButton)!="undefined") {
            lpMTagConfig1.dynButton[lpMTagConfig1.dynButton.length] = {'name':"chat-centurylink-residential-customer-support-gigabit-modal",'pid':'lp-chat-centurylink-residential-customer-support-gigabit-modal'};
        }
    </script>

	<div class="price-unit pp1 fL">
		<h2>CenturyLink<br>1-gigabit service</h2>
		<p class="above-price">Starting at</p>
		<span class="price-point"><sup>$</sup>79<sup>95</sup><span class="mo">/mo.</span></span>
		<p class="below-price">when bundled with CenturyLink<sup>&reg;</sup> Prism<sup>&trade;</sup> TV for 12 months.</p>
	</div>
	<div class="price-unit pp2 fL">
		<h2>CenturyLink<br>1-gigabit + Prism<sup>&trade;</sup> TV</h2>
		<p class="above-price">Starting at</p>
		<span class="price-point"><sup>$</sup>124<sup>94</sup><span class="mo">/mo.</span></span>
		<p class="below-price">for 6 months.</p>
	</div>
	<div class="price-unit pp3 fL">
		<h2>Prism<sup>&trade;</sup> TV</h2>
		<p class="above-price">Starting at</p>
		<span class="price-point"><sup>$</sup>44<sup>99</sup><span class="mo">/mo.</span></span>
		<p class="below-price">for 6 months when bundled with a qualifying service.</p>
	</div>
    <div style="clear:both"></div>
	<p class="sub-info">
		<a href="http://www.seeprismtv.com" class="heavy" target="_blank">Learn more</a> about Prism<sup>&trade;</sup> TV.
		<a href="/offers/gigabit/disclaimer.html" class="see-more-features eleven" onclick="window.open(this.href,'disclaimer','height=650,width=600,left=100,top=50,resizable=yes,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank">See Important Details</a>
	</p>
</div>

<?php
    require_once("../inc/footer.php");
?>