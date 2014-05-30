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

        <link rel="shortcut icon" href="http://www.centurylinkinternet.com/img/favicon.png" />

        <link rel="stylesheet" href="<?php echo $path; ?>css/normalize.min.css">
        <link rel="stylesheet" href="<?php echo $path; ?>css/main.css">

        <script src="<?php echo $path; ?>js/vendor/modernizr-2.6.2.min.js"></script>        
        <script type="text/javascript">
            // var custClass = "business"; //uncomment to use biz suite
            var sAddress = "";
            var custClass = "consumer";
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
        </script>

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
<div class="site-wrapper home">

    <div class="header">
        <div class="container-940">
            <div class="logo fL">

                <?php   
                    if ( $nav_class["bundles"] == "selected" ) {
                        echo '<a href="http://centurylinkinternet.com/"><img src="'. $path .'img/centurylink.png" alt=""></a>';
                    } elseif ( $nav_class["internet"] == "selected" ) {
                        echo '<a href="http://centurylinkinternet.com/"><img src="'. $path .'img/centurylink.png" alt=""></a>';
                    } else {
                        echo '<img src="'. $path .'img/centurylink.png" alt="">';
                    }
                ?>

            </div>
            <!-- <div class="nav fR">
                <ul>
                    <li><a href="<?php echo $path; ?>" clicktrack="ctl|rsd|emktg|microsite|position2|top_nav|link|home" class="<?php echo $nav_class["home"]; ?>">HOME</a></li>
                    <li><a href="<?php echo $path; ?>internet" clicktrack="ctl|rsd|emktg|microsite|position2|top_nav|link|internet" class="<?php echo $nav_class["internet"]; ?>">INTERNET</a></li>
                    <li><a href="<?php echo $path; ?>bundles" class="<?php echo $nav_class["bundles"]; ?>" clicktrack="ctl|rsd|emktg|microsite|position2|top_nav|link|bundles">BUNDLES</a></li>
                </ul>
            </div>-->
            <div style="clear:both;"></div>
        </div>
    </div>

