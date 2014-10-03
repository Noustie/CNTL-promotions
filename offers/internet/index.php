<?php 
    $phone = "";
    $img_prefix = "";
    $floodlight = "";
    $tracking_bundle = "";
    $tracking_pure = "";
    $bundle_disclaimer = "";
    $pure_disclaimer = "";
    $pure_price = "";
    $pure_claim = "";
    $bundle_claim = "";

    $svar = array(
        'pageName' => "ctl|rsd|promos|internet|pre_id_learn",
        'server' => "centurylink.com",
        'channel' => "rsd",
        'prop20' => "promo",
        'prop24evar53' => "ctl|rsd|promo",
        'prop38evar48' => "static_page",
        'prop39evar49' => "landing_page",
        'prop52evar56' => "peter_a_mayer",
    );

    if(isset($_GET["mkt"])){
        //ENS
        if($_GET["mkt"]=="ens"){
            $phone="866-962-6021";
            $img_prefix = "ens-";
            $title = "CenturyLink | Residential | High-Speed Internet";
            $description = "Get great deals on fast, reliable Internet – all backed by our 30-Day Satisfaction Guarantee and 24/7 technical support.";
            $keywords = "CenturyLink, CenturyLink High-Speed Internet, Pure broadband, CenturyLink Internet bundles, no contract Internet, Internet and Home Phone bundles, fast Internet, cheap Internet, great Internet deals, CenturyLink 3-year Internet deal";
            $floodlight = "floodlight-ens";
            $tracking_bundle = "ctl|rsd|emktg|offers|hsi|lp|link|ens|bundle";
            $tracking_pure = "ctl|rsd|emktg|offers|hsi|lp|link|ens|pure";
            $bundle_disclaimer = "ens_bundle_disclaimer";
            $pure_disclaimer = "ens_pure_disclaimer";
            $pure_price = "39";
            $pure_claim = "a month for 12 months";
            $bundle_claim = "a month when you bundle";
        }
        //CRIS
        if($_GET["mkt"]=="cris"){
            $phone="888-807-4368";
            $img_prefix = "cris-";
            $title = "CenturyLink | Residential | High-Speed Internet";
            $description = "Get great deals on fast, reliable Internet – all backed by our 30-Day Satisfaction Guarantee and 24/7 technical support.";
            $keywords = "CenturyLink, CenturyLink High-Speed Internet, Pure broadband, CenturyLink Internet bundles, no contract Internet, Internet and Home Phone bundles, fast Internet, cheap Internet, great Internet deals, CenturyLink 3-year Internet deal";
            $floodlight = "floodlight-cris";
            $tracking_bundle = "ctl|rsd|emktg|offers|hsi|lp|link|cris|bundle";
            $tracking_pure = "ctl|rsd|emktg|offers|hsi|lp|link|cris|pure";
            $bundle_disclaimer = "cris_bundle_disclaimer";
            $pure_disclaimer = "cris_pure_disclaimer";
            $pure_price = "29";
            $pure_claim = "a month for 12 months";
            $bundle_claim = "a month when you bundle";
        }
    }
?>

<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?php echo $title; ?></title>
        <meta name="description" content="<?php echo $description; ?>">
        <meta name="keywords" content="<?php echo $keywords; ?>">

        <link rel="shortcut icon" href="//www.centurylink.com/favicon.ico" type="image/vnd.microsoft.icon" />

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">

        <!--[if IE 8]>
            <style type="text/css">
                .price sup{top: -0.8em}
            </style>
        <![endif]-->

        <!--[if IE 9]>
            <style type="text/css">
                .price sup{top: -0.8em}
            </style>
        <![endif]-->

        <script src="js/vendor/modernizr-2.6.2.min.js"></script>

        <script type="text/javascript">
            // var custClass = "business"; //uncomment to use biz suite
            var sAddress = "";
            var eBiz_pageName = "<?php echo $svar['pageName']; ?>"; //s.pageName
            var pageType = ""; //s.pageType
            var errorType = ""; //s.prop2
            var accountEvents = ""; //eVar1
            var serviceEvents = ""; //eVar2
            var pCategory = ""; //eVar3
            var unisysEvent = ""; //eVar4
            var orderType = ""; //eVar7
            var zipAvail = ""; //eVar8
            var phoneAvail = ""; //eVar9
            var addressAvail = ""; //eVar10
            var respMsg = ""; //eVar11
            var availType = ""; //eVar12
            var sEvents = ""; //s.events
            var sProducts = ""; //s.products
            var orderNum = ""; //s.purchaseID
            var totalOrderPrice = ""; //Doubleclick
            var eBiz_server = "<?php echo $svar['server']; ?>"; // s.server
            var eBiz_channel = "<?php echo $svar['channel']; ?>"; // s.channel, s.eVar41
            var eBiz_prop3 = "unknown";
            var eBiz_prop20 = "<?php echo $svar['prop20']; ?>";
            var eBiz_prop24 = "<?php echo $svar['prop24evar53']; ?>";
            var eBiz_prop25 = "<?php echo $svar['prop25evar54']; ?>";
            var eBiz_prop26 = "<?php echo $svar['prop26evar55']; ?>";
            var eBiz_prop38 = "<?php echo $svar['prop38evar48']; ?>";
            var eBiz_prop39 = "<?php echo $svar['prop39evar49']; ?>";
            var eBiz_prop52 = "<?php echo $svar['prop52evar56']; ?>";
            var eBiz_evar24 = "unknown";
            var eBiz_evar27 = "";
            var eBiz_evar41 = "<?php echo $svar['channel']; ?>";
            var eBiz_evar48 = eBiz_prop38;
            var eBiz_evar49 = eBiz_prop39;
            var eBiz_evar53 = eBiz_prop24;
            var eBiz_evar54 = eBiz_prop25;
            var eBiz_evar55 = eBiz_prop26;
            var eBiz_evar56 = eBiz_prop52;
        </script>

    </head>
    <body>

        <?php include 'inc/'.$floodlight.'.php' ?>

        <div class="page-wrapper">

            <div class="row header">
                <div class="container">
                    <div class="logo fL">
                        <a href="http://www.centurylink.com/">
                            <img src="img/centurylink-logo.png" alt="CenturyLink">
                        </a>
                    </div>
                    <nav class="fR">
                        <a href="http://www.centurylink.com/">Home</a> |
                        <a href="http://www.centurylink.com/Pages/AboutUs/">About Us</a> |
                        <a href="https://eam.centurylink.com/eam/login.do">Manage My Account</a> |
                        <a href="http://www.centurylink.com/help/contact/">Contact Us</a>
                    </nav>
                    <div style="clear:both;"></div>
                </div><!--end container -->           
            </div><!--end header -->

            <div class="row h1-heading">
                <div class="container">
                    <h1>
                        Want to Go Fast Online?<br><span>Get CenturyLink<sup>&reg;</sup> High-Speed Internet.</span>
                    </h1>
                </div>
            </div>

            <div class="row internet-and-phone">
                <div class="container">
                    <div class="heading">
                        <h3>High-Speed Internet + Home Phone</h3>
                        <img src="img/<?php echo $img_prefix; ?>upper-heading-devices.png" alt="High-Speed Internet and Home Phone" class="offset-img">
                    </div>
                    <div class="left-side fL">
                        <img src="img/<?php echo $img_prefix; ?>content-bug-devices.png" alt="High-Speed Internet and Home Phone" class="tenmbps-hsi-and-phone-img">
                        <ul>
                            <li>Watch movies and shows on Netflix<sup>&reg;</sup> and Hulu in HD.</li>
                            <li>Save on mobile data &ndash; connect with in-home Wi-Fi to download the latest apps.</li>
                            <li>Stream music instantly with Pandora and Spotify.</li>
                            <li>Connect to a network serving more than 5 million residential customers.</li>
                            <li>Includes award-winning Norton&trade; AntiVirus Online, at no additional cost.</li>
                        </ul>
                    </div>
                    <div class="right-side fR">
                        <h2>Centurylink<sup>&reg;</sup> High-Speed Internet</h2>
                        <div class="pricepoint">
                            <span class="price"><sup>$</sup>19<sup>95</sup></span>
                            <span class="time-frame"><?php echo $bundle_claim; ?></span>
                        </div>
                        <div class="tag-line">
                            3 Years. 1 Price. No Contract.
                        </div>
                        <a href="https://shop.centurylink.com/MasterWebPortal/freeRange/login/shop" target="_blank" class="bookendButton" clicktrack="<?php echo $tracking_bundle; ?>">
                            <span class="bookend leftBookend">&nbsp;</span>
                            <span class="bookend centerBookend">Check Availability</span>
                            <span class="bookend rightBookend">&nbsp;</span>
                        </a>
                        <p>
                            <a onclick="window.open(this.href,'<?php echo $bundle_disclaimer; ?>','height=500,width=800,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank" class="offer-details" href="./<?php echo $bundle_disclaimer; ?>.php">
                                Offer details
                            </a>
                        </p>
                        <p class="perks ir">Norton by Symantec. 30-Day Satisfaction Guarantee. 24/7 Technical Support</p>
                    </div>
                    <div style="clear:both;"></div>
                </div>
            </div>
            
            <div class="row hsi">
                <div class="container">
                    <div class="heading">
                        <h3>High-Speed Internet</h3>
                        <img src="img/<?php echo $img_prefix; ?>lower-heading-devices.png" alt="High-Speed Internet" class="offset-img">
                    </div>
                    <div class="left-side fL">
                        <h2>Pure broadband&trade;</h2>
                        <div class="pricepoint">
                            <span class="price"><sup>$</sup><?php echo $pure_price; ?><sup>95</sup></span>
                            <span class="time-frame"><?php echo $pure_claim; ?></span>
                        </div>
                        <div class="tag-line">
                            Pure speed online. No phone line required.
                        </div>
                        <a href="https://shop.centurylink.com/MasterWebPortal/freeRange/login/shop" target="_blank" class="bookendButton" clicktrack="<?php echo $tracking_pure; ?>">
                            <span class="bookend leftBookend">&nbsp;</span>
                            <span class="bookend centerBookend">Check Availability</span>
                            <span class="bookend rightBookend">&nbsp;</span>
                        </a>
                        <p>
                            <a onclick="window.open(this.href,'<?php echo $pure_disclaimer; ?>','height=500,width=800,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank" class="offer-details" href="./<?php echo $pure_disclaimer; ?>.php">
                                Offer details
                            </a>
                        </p>
                        <p class="perks ir">Norton by Symantec. 30-Day Satisfaction Guarantee. 24/7 Technical Support</p>
                    </div>
                    <div class="right-side fR">
                        <img src="img/<?php echo $img_prefix; ?>content-bug-ipad.png" alt="">
                    </div>
                    <div style="clear:both;"></div>
                </div>
            </div>

            <div class="row tfn-cta">
                <div class="container">
                    <div class="shadow"></div>
                    <div class="tfn-cta-text fL">
                        <p class="orange">
                            Call a CenturyLink representative.<br>
                            <span class="cta"><?php echo $phone; ?></span>
                        </p>
                    </div>
                    <div class="disclaimer fR">
                        <p>All other marks are property of their respective owners.</p>
                    </div>
                    <div style="clear:both;"></div>
                </div>
            </div>

            <div class="row footer">
                <div class="container">
                    <nav>
                        <a href="http://www.centurylink.com/home/">Residential</a> |
                        <a href="http://www.centurylink.com/small-business/">Small Business</a> |
                        <a href="https://www.centurylink.com/business/">Large Business</a> |
                        <a href="http://www.centurylink.com/wholesale/">Wholesale</a>
                    </nav>
                    <p>&copy; <?php echo date('Y');?> CenturyLink. All Rights Reserved.</p>
                </div>
            </div>

        </div><!--end page-wrapper -->

        <script language="JavaScript" type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
        <script src="/assets/js/plugins/jquery.qwest-core.js"></script>
        <script src="/assets/js/plugins/centurycore.shortcuts.js"></script>

        <script src="js/main.js"></script>

        <!-- Do not touch! -->
        <!-- SiteCatalyst code version: H.20.3.
        Copyright 1997-2009 Omniture, Inc. More info available at http://www.omniture.com -->
        <script type="text/javascript" src="/assets/js/third-party/metrics/metrixConfig.js"></script>
        <noscript>
            <a href="http://www.omniture.com" title="Web Analytics"><img src="//qwest.com/images/spacer.gif" height="1" width="1" border="0" title="" /></a>
        </noscript>
        <!-- / DO NOT REMOVE / -->
        <!-- End SiteCatalyst code version: H.20.3. -->
    </body>
</html>
