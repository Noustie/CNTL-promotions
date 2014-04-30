<?php
    require_once("../inc/config.php");
    $nav_class["benefits"] = "selected";
    $javascriptFile = "benefits";
    $shadow_styles = "tall";
    $title = "CenturyLink | Fiber Internet | 1 Gigabit High Speed Internet";
    $description = "CenturyLink Fiber 1 Gig Internet gives you the power to connect all your devices, stream multiple HD movies at once & more.";
    $keywords = "centurylink, centurylink fiber, 1 gig internet, high speed internet";

    $svar = array(
        'pageName' => "ctl|rsd|emktg|offers|gigabit|benefits",
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

    <div class="base benefits">
        <div class="hero">
            <h1 class="npm"><img src="<?php echo $path; ?>/img/benefits-hero-txt.png" alt="Discover what speeds up to 1 Gig can do for you."></h1>
            <div class="green-flare burst1"></div>
            <div class="green-flare burst2"></div>
            <div class="green-flare particle3"></div>
            <div class="green-flare particle3"></div>
        </div>

        <div class="speed">
            Internet speeds&nbsp;&nbsp;<strong>100x faster</strong>&nbsp;&nbsp;than average broadband speeds.*
        </div>

        <h2><strong>CenturyLink fiber Internet lets you do more with the Web.</strong></h2>
        <h4>Discover the power of a <strong>next-generation Internet connection</strong> inside your home or business.</h4>

        <div class="icon-list">
            <div class="icons west fL">
                <ul>
                    <li class="ic1">Ideal for multiple users to <strong>connect all devices</strong> at once – without slowing down.</li>
                    <li class="ic2">With 1-Gig service, you can <strong>upload and download files at symmetrical speeds</strong>.</li>
                </ul>
            </div>
            <div class="icons east fL">
                <ul>
                    <li class="ic1">Fast enough for lag-free <strong>online gaming</strong>, plus freeze-free video chatting with friends and family.</li>
                    <li class="ic2"><strong>Back up your entire hard drive</strong> to the cloud, including large photos and videos, in no time. </li>
                </ul>
            </div>
            <div style="clear:both;"></div>
        </div>

        <div class="speed-chart">
            <h3>How fast is 100x faster?</h3>

            <div class="speed-chart-table">
                <table>
                    <tr class="table-titles">
                        <th class="th1">Media</th>
                        <th class="th2">10 Mbps</th>
                        <th class="th3">1 Gig<br>(1,000 Mbps)</th>
                    </tr>
                    <tr class="tr-secondary">
                        <td><strong>Photos</strong> (5 MB)</td>
                        <td><strong>4 sec</strong></td>
                        <td><strong>0.04 sec</strong></td>
                    </tr>
                    <tr class="tr-secondary">
                        <td><strong>Music</strong> (70 MB)</td>
                        <td><strong>56 sec</strong></td>
                        <td><strong>.56 sec</strong></td>
                    </tr>
                    <tr class="tr-secondary">
                        <td><strong>TV Shows</strong> (175 MB)</td>
                        <td><strong>2.3 min</strong></td>
                        <td><strong>1.4 sec</strong></td>
                    </tr>
                    <tr class="tr-secondary">
                        <td><strong>Movies</strong> (700 MB)</td>
                        <td><strong>9.3 min</strong></td>
                        <td><strong>5.6 sec</strong></td>
                    </tr>
                </table>
            </div>
            <p class="chart-disclaimer">
                Results as of 02/20/14. Listed broadband speeds vary due to conditions outside of network control,<br>including customer location and equipment, and are not guaranteed. Customer experiences may vary.
                <br>
                <span class="chart-link"><a href="http://www.centurylink.com/home/internet/" target="_blank" clicktrack="ctl|rsd|emktg|offers|gigabit|benefits|link|speeds">View</a> additional Internet speeds from CenturyLink.</span>
            </p>
            <div class="speedometer">
                <div class="laptop"><img src="<?php echo $path; ?>/img/laptop.png" alt="CenturyLink 1 Gig"></div>
                <div class="speed-action">
                    <img src="<?php echo $path; ?>/img/tac.png" class="tac" alt="">
                </div>
            </div>
        </div>

    </div>

<?php
    require_once("../inc/footer.php");
?>