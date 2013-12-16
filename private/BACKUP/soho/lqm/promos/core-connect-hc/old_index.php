<?php
    $pageID = 'ctlCC_HC';
    $pageTitle = 'Core Connect';
    $classExts = 'ccHeader';
    $headIncludeBlock = <<<HEADDOC
<style type="text/css">

</style>
HEADDOC;
?>
<?php include_once('../../inc/head.php') ?>
<?php /*
<!--
	echo $refreshURL . "\n";
	echo $_COOKIE['mobileExit'] . "\n";
	echo $_GET['mobileExit'] . "\n";
-->
*/ ?>
    <div class="message">
        <div class="cta">
            <h1 class="ir">One bundle. Unlimited savings. CenturyLink<sup>&reg;</sup> CORECONNECT<sup>&reg;</sup></h1>
            <h2 class="ir">$95 per month for 36 months*. FREE Activation Support.</h2>
            <h3 class="title ir">Plus, get an extra $20/mo. off for your first year &ndash; a total savings of $240.</h3>
        </div>
    </div>
	<div class="orderBtnWrap">
		<p class="orderButton"><a clicktrack="" href=""><span class="btnBg">Call XXX.XXX.XXXX &raquo;</span></a></p>
	</div>
	<div class="requestLinkBlock">
		<p><a href="./request.php" class="ir">Request a Call</a></p>
	</div>
    <div id="container" class="hwacel">
        <div class="contentWrap">
            <h3>Core Connect<sup>&reg;</sup> gives you phone, Internet, and business-class email service. </h3>
            <ul class="iconList">
                <li class="iconHSI"><strong>High-Speed Internet</strong><br />
                    Speeds up to 10 Mbps.</li>
                <li class="iconWeb"><strong>Website Design &amp; Hosting</strong><br />
                    Create a website the easy way or transfer your existing site to CenturyLink hosting at no extra charge, with no disruption in service.</li>
                <li class="iconEmail"><strong>Business Email &amp; Calendar</strong><br />
                    Make a great impression with Microsoft<sup>&reg;</sup> Outlook&trade; email.</li>
                <li class="iconPhone"><strong>Business Phone Service</strong><br />
                    Stay connected with customers, vendors, and suppliers with unlimited local and nationwide long distance calling.</li>
            </ul>
            <h3>Plus, boost your productivity with these great features &ndash; all included.</h3>
            <h4>Instant Business Broadcast</h4>
            <ul>
                <li>Free with purchase of CenturyLink<sup>&reg;</sup> Core Connect<sup>&reg;</sup></li>
                <li>Gives you a free profile on 10 high-traffic directories,like Google, Yahoo!, and other major search engines</li>
                <li> Puts your business in front of 94% of web searchers</li>
            </ul>
            <h4>Additional Services</h4>
            <ul>
                <li> Business-class security and 2 GB data backup</li>
                <li> Fax over email</li>
                <li> Upgrade to faster speeds and more phone  lines at a discounted rate</li>
            </ul>
        </div>
    </div>
    <div class="footer">
		<div class="orderBtnWrap">
			<p class="orderButton"><a clicktrack="ctl|rsd|mobile|product|emktg|t1_2012|qrcode_speedoverview|button|footer_check_availability" href="https://q.myaccount.centurylink.com/mobile/loop/index.vm?track=centurylinkmobile|homepage|getinternet_btn"><span class="btnBg">Call XXX.XXX.XXXX &raquo;</span></a></p>
		</div>
        <div class="disclaimer">
            <p>*Other fees and conditions may apply. <a target="_blank" href="http://www.centurylink.com/smallbusiness/Disclaimers/businessDisclaimer.jsp?mobileExit=yes">Click here for details.</a></p>
            <p>&copy;2012 CenturyLink, Inc. All Rights Reserved. The CenturyLink mark, pathways logo and certain CenturyLink product names are the property of CenturyLink, Inc. All other marks are the property of their respective owners.</p>
        </div>
    </div>
<?php
    $s_account = 'qwestmobiledev';
    //if ( $_SERVER['SERVER_NAME'] ) {}

    $s_pageName = '';
    $s_server = '';
    $s_channel = '';
    $s_prop24 = $s_evar53 = '';
    $s_prop25 = $s_evar54 = '';
    $s_prop38 = $s_evar48 = '';
    $s_prop39 = $s_evar49 = '';
?>
<?php include_once('../../inc/foot.php') ?>
