<?php
    $bodyBg = "home";
    $url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
    if (!!strpos($url,'schedule-reschedule-appointment')) {
        $bodyBg = "sra";
    } elseif (!!strpos($url,'prepare-for-appointment')) {
        $bodyBg = "pfa";
    } elseif (!!strpos($url,'additional-tools')) {
        $bodyBg = "at";
    } elseif (!!strpos($url,'faqs')) {
        $bodyBg = "faqs-bg";
    }

?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <title><?php echo $title; ?></title>
        <meta name="description" content="<?php echo $description; ?>">
        <meta name="keywords" content="CenturyLink Small Business, CenturyLink SMB, Phone and Internet, Business Solutions, Business Internet &amp; Data, Enhanced Business Services, Business Phone, Business Mobile,  Business TV, business communication services, telecommunication solutions, networking, Business Bundles, business phone services, small business it, office services">
        <link rel="stylesheet" href="/soho/all/promos/activate/css/normalize.min.css">
        <link rel="stylesheet" href="/soho/all/promos/activate/css/main.css">
        <!--[if IE 8]>
            <style>
                #logmeinform .forminput{
                    padding-left: 11px;
                    padding-top: 8px;
                }
            </style>
        <![endif]-->
        <script src="/soho/all/promos/activate/js/vendor/modernizr-2.6.2.min.js"></script>
        <script type="text/javascript">
            // var custClass = "business"; //uncomment to use biz suite
            var sAddress = "";
            var pageName = "<?php echo $svar['pageName']; ?>"; //s.pageName
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
            var eBiz_prop20 = "<?php echo $svar['prop20']; ?>";
            var eBiz_prop24 = "<?php echo $svar['prop24evar35']; ?>";
            var eBiz_prop25 = "<?php echo $svar['prop25evar53']; ?>";
            var eBiz_prop26 = "<?php echo $svar['prop26evar54']; ?>";
            var eBiz_prop38 = "<?php echo $svar['prop38evar48']; ?>";
            var eBiz_prop39 = "<?php echo $svar['prop39evar49']; ?>";
            var eBiz_prop52 = "<?php echo $svar['prop52evar56']; ?>";
            var eBiz_prop27 = "<?php echo $svar['prop27evar55']; ?>";
            var eBiz_evar35 = eBiz_prop24;
            var eBiz_evar41 = eBiz_server;
            var eBiz_evar48 = eBiz_prop38;
            var eBiz_evar49 = eBiz_prop39;
            var eBiz_evar53 = eBiz_prop25;
            var eBiz_evar54 = eBiz_prop26;
            var eBiz_evar55 = eBiz_prop27;
            var eBiz_evar56 = eBiz_prop52;
        </script>
    </head>
    <body class="<?php echo $bodyBg; ?>" id="<?php echo $bodyBg; ?>">
    <!-- Google Tag Manager -->
    <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-HS85"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-HS85');</script>
    <!-- End Google Tag Manager -->
