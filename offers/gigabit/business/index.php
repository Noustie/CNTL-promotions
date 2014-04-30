<?php
    require_once("../inc/config.php");
    $nav_class["business"] = "selected";
    $javascriptFile = "business";
    $title = "CenturyLink | Small-Medium Business | 1 Gig | Fiber Internet";
    $description = "Upgrade your Small-Medium Business, with Internet speeds up to 1 Gig, Discover the power of fiber with CenturyLink.";
    $keywords = "CenturyLink Small Business, CenturyLink SMB, Phone and Internet, Business Solutions, Business Internet & Data, Enhanced Business Services, Business Phone, Business Mobile, business communication services, telecommunication solutions, networking, Business Bundles, business phone services, small business it, office services 1 Gig,  fiber";

    $svar = array(
        'pageName' => "ctl|rsd|emktg|offers|gigabit|business",
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
    <div class="base business">
        <div class="hero">
            <h1 class="npm"><img src="<?php echo $path; ?>/img/business-hero-txt.png" alt="Do more, faster with Business Internet speeds up to 1 Gig."></h1>
            <div class="business-flare particle1"></div>
            <div class="business-flare particle2"></div>
        </div>
        <div class="speed">
            Internet speeds&nbsp;&nbsp;<strong>100x faster</strong>&nbsp;&nbsp;than average broadband speeds.*
        </div>

        <div class="intro-text">
            <h2>What can virtually unlimited capacity do for your business?</h2>
            <h3><strong>Virtually anything.</strong></h3>
            <p>Your business relies on IT and communication services.<br>But the truth is, they're only as good as the infrastructure of your network provider.<br><strong>With our best-in-class fiber connection, you can take advantage of:</strong></p>
        </div>
        
        <div class="uls">
            <ul class="fL">
                <li class="icon reliable-network">
                    <h5>A reliable network</h5>
                    <p>We fully own and operate our network. Plus, we deliver your services over a secure IP-based connection for ultimate efficiency.</p>
                </li>
                <li class="icon future-proof">
                    <h5>Future-proof services</h5>
                    <p>Without hampering the speed at which your business runs, you can add advanced applications and emerging technologies as needed.</p>
                </li>
                <li class="icon simplicity">
                    <h5>Simplicity</h5>
                    <p>We know that choosing a provider is not simple, but since we’re already in your building, there is no need for multiple connections, expensive equipment or extensive IT hassles.</p>
                </li>
            </ul>
            <ul class="fL">
                <li class="icon cloud-ready">
                    <h5>A cloud-ready connection</h5>
                    <p>With up to 1 Gbps of dedicated bandwidth, the benefits are enormous. Your business gets symmetrical upload and download speeds and can access applications in the cloud as if they were right in your office.<br><br><a href="http://centurylinkhostedservices.com/" class="linkout" target="_blank" clicktrack="ctl|rsd|emktg|offers|gigabit|business|link|cloud"><strong>Cloud Services</strong> <img src="<?php echo $path; ?>/img/linkout.png"></a></p>
                </li>
                <li class="icon support">
                    <h5>Local presence and support</h5>
                    <p>Your business is here and so are your questions. That’s why we’ve built a strong local presence. A team of dedicated account managers and technicians is right around the corner. They’re there to make sure you’re taken care of, wherever and whenever you need us.</p>
                </li>
            </ul>
            <div style="clear:both;"></div>
        </div>

        <div class="center-piece">
            <h3>Advanced solutions that simplify IT and eliminate capital investment.</h3>
            <h4>At the same time.</h4>
            <p>In addition to our data, voice and application platforms, our new Managed Office solution is available at one flat rate, per seat, per month. It’s a solution we design, install, support and manage so you don’t have to. That means there’s no upfront capital investment – just more savings and more time to focus on business.<br><br><a href="http://centurylinkmanagedoffice.com/" class="linkout" target="_blank" style="font-size:14px;" clicktrack="ctl|rsd|emktg|offers|gigabit|business|link|managed_office"><strong>Managed Office Solutions</strong> <img src="<?php echo $path; ?>/img/linkout.png"></a></p>
        </div>

        <div class="lower-cta">
            <p><strong>Let's talk &ndash; because the more you know about fiber Internet, the harder fiber can work for your business.</strong></p>
            <p class="eighteen">For <strong>Las Vegas</strong> Business Information, call <span>866-324-7265</span></p>
            <p class="eighteen">For <strong>Omaha</strong> Business Information, call <span>855-891-4079</span></p>
        </div>

    </div>

<?php
    require_once("../inc/footer.php");
?>