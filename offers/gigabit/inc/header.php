<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie6"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie7"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html class=""> <!--<![endif]-->

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?php echo $title; ?></title>
        <meta name="description" content="<?php echo $description; ?>">
        <meta name="keywords" content="<?php echo $keywords; ?>">

        <meta name="msapplication-tap-highlight" content="no" />

        <link rel="stylesheet" href="<?php echo $path; ?>/css/normalize.min.css">
        <link rel="stylesheet" href="<?php echo $path; ?>/css/main.css">

        <script src="<?php echo $path; ?>/js/vendor/modernizr-2.6.2.min.js"></script>
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
            var eBiz_channel = "<?php echo $svar['channelevar41']; ?>"; // s.channel, s.eVar41
            var eBiz_prop20 = "<?php echo $svar['prop20']; ?>";
            var eBiz_prop24 = "<?php echo $svar['prop24evar53']; ?>";
            var eBiz_prop25 = "<?php echo $svar['prop25evar54']; ?>";
            var eBiz_prop26 = "<?php echo $svar['prop26evar55']; ?>";
            var eBiz_prop38 = "<?php echo $svar['prop38evar48']; ?>";
            var eBiz_prop39 = "<?php echo $svar['prop39evar49']; ?>";
            var eBiz_prop52 = "<?php echo $svar['prop52evar56']; ?>";
            var eBiz_evar53 = eBiz_prop24;
            var eBiz_evar54 = eBiz_prop25;
            var eBiz_evar55 = eBiz_prop26;
            var eBiz_evar48 = eBiz_prop38;
            var eBiz_evar49 = eBiz_prop39;
            var eBiz_evar56 = eBiz_prop52;

            var PATH = "<?php echo $path; ?>/";

        </script>
        
        <!-- include chat button -->
        <?php
            if($chatbtn == true){
                include($rootpath."/inc/clicktochat.php");
            }
        ?>
</head>

<body>
<!-- Google Tag Manager -->
    <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-HS85"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-HS85');</script>
<!-- End Google Tag Manager -->

<div class="wrapper container <?php echo $shadow_styles; ?>">
    <!-- <div class="left-edge fL"></div> -->
        <div class="interior-wrapper">

            <div class="sticky">
                <div class="cta-wrapper">
                    <div class="fL logo"><a href="http://www.centurylink.com" target="_blank"><img src="<?php echo $path; ?>/img/centuryLink-logo.png" alt="CenturyLink"></a></div>
                    <div class="fR tfn">
                        <span class="cta-title">Find out when you can get 1 Gig.</span>
                        <br>
                        <a href="#" class="bookendButton signupbtn" clicktrack="ctl|rsd|emktg|offers|gigabit|topnav|sign_up">
                            <span class="bookend leftBookend">&nbsp;</span>
                            <span class="bookend centerBookend">Sign Up Now</span>
                            <span class="bookend rightBookend">&nbsp;</span>
                        </a>
                    </div>
                    <div style="clear:both"></div>
                    <div class="header-nav">
                        <ul class="npm">
                            <li class="first"><a href="<?php echo $path; ?>/" class="<?php echo $nav_class["home"]; ?>" clicktrack="ctl|rsd|emktg|offers|gigabit|topnav|home">Home</a></li>
                            <li><a href="<?php echo $path; ?>/benefits" class="<?php echo $nav_class["benefits"]; ?>" clicktrack="ctl|rsd|emktg|offers|gigabit|topnav|benefits">Benefits</a></li>
                            <li><a href="<?php echo $path; ?>/cities" class="<?php echo $nav_class["cities"]; ?>" clicktrack="ctl|rsd|emktg|offers|gigabit|topnav|cities">Cities</a></li>
                            <li><a href="<?php echo $path; ?>/business" class="<?php echo $nav_class["business"]; ?>" clicktrack="ctl|rsd|emktg|offers|gigabit|topnav|business">Business</a></li>
                            <li><a href="<?php echo $path; ?>/community" class="<?php echo $nav_class["community"]; ?>" clicktrack="ctl|rsd|emktg|offers|gigabit|topnav|community">Community</a></li>
                            <li><a href="<?php echo $path; ?>/news" class="<?php echo $nav_class["news"]; ?>" clicktrack="ctl|rsd|emktg|offers|gigabit|topnav|news">News</a></li>
                            <li class="last"><a href="<?php echo $path; ?>/faqs" class="<?php echo $nav_class["faqs"]; ?>" clicktrack="ctl|rsd|emktg|offers|gigabit|topnav|faqs">FAQs</a></li>
                        </ul>
                    </div>
                </div>
            </div>