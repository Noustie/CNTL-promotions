<?php
	require_once("../inc/config.php");
    $nav_class["features"] = "selected";
    $shadow_styles = "short";
    $title = "";
    $description = "";

    $svar = array(
        'pageName' => "ctl|rsd|emktg|offers|gigabit|features",
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

<div class="primary center-content features">
    <h1>Speeds 100x faster than the<br>average American download speed.*</h1>
    <ul class="features-first-ul">
        <li class="first">Symmetrical speed lets you <strong>upload and download at speeds of up to 1 Gig</strong> &ndash; equivalent to 1,000 Mbps!</li>
        <li class="second"><strong>Ideal for multiple users</strong> to connect all devices at once – without<br>slowing down.</li>
    </ul>
    <ul class="features-second-ul">
        <li class="third">Fast enough to access movies and files, plus <strong>freeze-free video chatting</strong> with friends and family.</li>
        <li class="fourth">Perfect for <strong>intense real-time gaming</strong>.</li>
        <li class="fifth">A dedicated <strong>fiber-optic line</strong> to<br>your home.</li>
    </ul>
    <p class="sub-info">
        <a href="http://www.centurylink.com/home/internet/" class="heavy" target="_blank">View</a> additional Internet speeds from CenturyLink.
    </p>
</div>

<?php
    require_once("../inc/footer.php");
?>


