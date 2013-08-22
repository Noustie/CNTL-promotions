<?php
    $pagePhone = "877.293.3791";
    $svar = array(
            'pageName' => "ctl|smb|soho|promos|dtv|double_bundle",
            'server' => "centurylink.com",
            'channel' => "Small Business",
            'prop20' => "promos",
            'prop24evar35' => "ctl|smb|promos",
            'prop38evar48' => "static_page",
            'prop39evar49' => "static_page",
            'prop52evar56' => "ctl"
        );

    $footerLinks = array(
            "Home" => "http://www.centurylink.com/small-business/", 
            "AboutUs" => "http://www.centurylink.com/Pages/AboutUs/",
            "Careers" => "http://www.centurylink.com/Pages/AboutUs/CompanyInformation/Careers/index.jsp",
            "InvestorRelations" => "http://ir.centurylink.com/phoenix.zhtml?c=112635&p=irol-IRHome",
            "Media" => "http://news.centurylink.com/",
            "Legal" => "http://www.centurylink.com/Pages/AboutUs/Legal/",
            "Privacy" => "http://www.centurylink.com/Pages/AboutUs/Legal/PrivacyPolicy/",
            "SiteMap" => "http://www.centurylink.com/sitemap.html",
            "FindaStore" => "http://storelocator.centurylinkapps.com/",
            "ContactUs" => "https://www.centurylink.com/small-business/support/"
        );

    if( $_GET['source']=="dm" && $_GET['mkt']=="lc" ) {
        $pagePhone = "877.293.3791";
    } else if ( $_GET['source']=="email" && $_GET['mkt']=="lc" ) {
        $pagePhone = "866.211.9254";
    }  else if ( $_GET['source']=="dm" && $_GET['mkt']=="lq" ) {
        $pagePhone = "877.509.2315";
        $footerLinks["ContactUs"] = "https://www.centurylink.com/small-business/customer-support/";
    }  else if ( $_GET['source']=="email" && $_GET['mkt']=="lq" ) {
        $pagePhone = "877.299.0965";
        $footerLinks["ContactUs"] = "https://www.centurylink.com/small-business/customer-support/";
    }

?>
<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>CenturyLink | Small-Medium Business | DIRECTV + High-Speed Internet</title>
        <meta name="description" content="Bundle High-Speed Internet, web hosting, email and DIRECTV service through CenturyLink Small-Medium Business. Reliable service and low pricing.">
        <meta name="keywords" content="Phone and Internet Business Solutions, Business Internet &amp; Data, Business Phone, Business TV, business communication services, telecommunication solutions, networking, Business Bundles, business phone services, small business it, office services DIRECTV, NFL Sunday Ticket">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">

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
            var eBiz_prop20 = "<?php echo $svar['prop20']; ?>";
            var eBiz_prop24 = "<?php echo $svar['prop24evar35']; ?>";
            var eBiz_prop25 = "<?php echo $svar['prop25evar53']; ?>";
            var eBiz_prop26 = "<?php echo $svar['prop26evar54']; ?>";
            var eBiz_prop38 = "<?php echo $svar['prop38evar48']; ?>";
            var eBiz_prop39 = "<?php echo $svar['prop39evar49']; ?>";
            var eBiz_prop52 = "<?php echo $svar['prop52evar56']; ?>";
            var eBiz_prop27 = "<?php echo $svar['prop27evar55']; ?>";
            var eBiz_evar35 = eBiz_prop24;
            var eBiz_evar41 = eBiz_channel;
            var eBiz_evar48 = eBiz_prop38;
            var eBiz_evar49 = eBiz_prop39;
            var eBiz_evar53 = eBiz_prop25;
            var eBiz_evar54 = eBiz_prop26;
            var eBiz_evar55 = eBiz_prop27;
            var eBiz_evar56 = eBiz_prop52;
        </script>
    </head>

    <!--[if lte IE 8 ]> 
      <body class="ie8"> 
    <![endif]-->
    <!--[if IE 9 ]>
        <body class="ie9">
    <![endif]-->
        <!--[if gt IE 9]><!-->
        <body class="no-js">
    <!--<![endif]-->

        <!-- Google Tag Manager -->
        <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-HS85"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-HS85');</script>
        <!-- End Google Tag Manager -->

        <div class="wrapper">
            <div class="header c960">
                <div class="logo float-left">
                    <a href="http://www.centurylink.com/small-business/" target="_blank"><img src="img/centurylink-business-logo.png" alt=""></a>
                </div>
                <div class="upper-tfn float-right">
                    <p>Call <?php echo $pagePhone ?></p>
                </div>
                <div style="clear:both;"></div>
            </div>            
            <div class="hero c960">
                <h2>
                    <img src="img/hero.jpg" alt="Call now and ask how to get NFL Sunday Ticket at no extra charge. Build your fan base with Business Internet +DIRECTV.">
                </h2>
            </div>
            <div class="content c960">
                <div class="float-left">
                    <div class="info">
                        <h2>Connect with the power of CenturyLink Business Internet.</h2>
                        <ul class="img-list">
                            <li class="hsi">
                                <h4>High-Speed Internet</h4>
                                <p>Do more, faster with speeds up to 10 Mbps.</p>
                            </li>
                            <li class="wp">
                                <h4>Web Presence</h4>
                                <p>Customize your own website and easily promote your business online. Create your own vanity URL too.</p>
                            </li>
                            <li class="bce">
                                <h4>Business-Class Email</h4>
                                <p>Microsoft<sup>&reg;</sup>-hosted Exchange email keeps you connected from virtually anywhere.</p>
                            </li>
                            <li class="ds">
                                <h4>Dedicated Support</h4>
                                <p>Our Business Support Team is available 24/7/365 to help your business thrive.</p>
                            </li>
                        </ul>
                        <div class="fixtop">
                            <h2>Turn on the star treatment for your<br>customers with America’s #1 satellite TV.</h2>
                            <ul class="check-list">
                                <li>Over 45 channels, including local channels in HD where available</li>
                                <li>Enhance your customers’ experience and reduce perceived wait times</li>
                                <li>Stay informed on the news and events that could impact your business</li>
                            </ul>
                        </div>
                        <div class="tv-icons">
                            <h2>Local Channels Included*</h2>
                        </div>
                        <div class="lower-tfn">
                            <p class="orange">Call <?php echo $pagePhone ?> to score a great deal<br>on High-Speed Internet and DIRECTV for Business.</p>
                        </div>
                        <p class="disclaimer">*Other terms and restrictions apply. <a class="popupTrigger" target="_blank" href="disclaimer.html">Click here</a> for more information.</p>
                    </div>
                </div>
                <div class="float-right">
                    <div class="badge">
                        <h1>Business Internet + Directv Business Information&reg; Package</h1>
                        <p class="hide-me">$54.99/mo.* For 12 months. Speeds up to 10Mbps. With Auto Bill Pay and Bundle offer discounts. Requires a 24- month agreement Call <?php echo $pagePhone ?></p>
                        <p class="middle-tfn">Call <?php echo $pagePhone ?></p>
                    </div>
                    <div class="ticket">
                        <p class="orange">Call now and ask how to<br>save an additional $100.</p>
                        <p class="small-grey">Business/Private viewing customers only. Requires<br>Business Choice&trade; or Commercial Xtra&trade; Package.</p>
                        <p class="sunday-ticket">EXCLUSIVE! ASK HOW TO GET NFL SUNDAY TICKET, only on directv. 2013 Season Included at no extra charge*. Every Game Every Sunday. With activation of Business Choice&trade; package.</p>
                    </div>
                </div>
                <div style="clear:both;"></div>
            </div>
            <div class="pathways c960"></div>
            <div id="footer">
                <div class="corners outsideW cTop noLayoutTop">
                    <span class="corner cLeft">   </span>
                    <span class="corner cRight">   </span>
                </div>
                <div class="about">
                    <ul class="nav">
                        <li class="first"><a target="_blank" href="<?php echo $footerLinks["Home"];?>">Home</a></li>
                        <li><a target="_blank" href="<?php echo $footerLinks["AboutUs"];?>">About Us</a></li>
                        <li><a target="_blank" href="<?php echo $footerLinks["Careers"];?>">Careers</a></li>
                        <li><a target="_blank" href="<?php echo $footerLinks["InvestorRelations"];?>">Investor Relations</a></li>
                        <li><a target="_blank" href="<?php echo $footerLinks["Media"];?>">Media</a></li>
                        <li><a target="_blank" href="<?php echo $footerLinks["Legal"];?>">Legal</a></li>
                        <li><a target="_blank" href="<?php echo $footerLinks["Privacy"];?>">Privacy</a></li>
                        <li><a target="_blank" href="<?php echo $footerLinks["SiteMap"];?>">Site Map</a></li>
                    </ul>
                    <p class="copyright">&copy;<?php echo date('Y');?> CenturyLink. All Rights Reserved. The CenturyLink mark, pathways logo and certain CenturyLink product<br>names are the property of CenturyLink. All other marks are the property of their respective owners. </p>
                </div>
                <div class="support">
                    <p class="cta">Call us at <?php echo $pagePhone ?></p>
                    <ul class="nav">

                    <li class=""><a target="_blank" href="http://storelocator.centurylinkapps.com/">Find a Store</a></li>
                    <li class="last"><a target="_blank" href="<?php echo $footerLinks["ContactUs"];?>">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <script src="/assets/js/common/jquery.latest.min.js"></script>
        <script src="js/main.js"></script>

        <!-- Do not touch! -->
        <!-- SiteCatalyst code version: H.20.3.
        Copyright 1997-2009 Omniture, Inc. More info available at http://www.omniture.com -->
        <script type="text/javascript" src="/soho/assets/js/third-party/metrics/s_code.js"></script>
        <script>
            s.linkInternalFilters+=","+location.hostname;
        </script>
        <noscript>
            <a href="http://www.omniture.com" title="Web Analytics"><img src="http://qwest.com/images/spacer.gif" height="1" width="1" border="0" title="" /></a>
        </noscript>
        <!-- / DO NOT REMOVE / -->
        <!-- End SiteCatalyst code version: H.20.3. -->
        <script type="text/javascript">
            (function() {
              var h = 'com-centurylink.netmng.com';
              var a = '1279';
              var t = document.createElement('script');
              t.type = 'text/javascript'; t.async = true;
              var p = 'https:'==document.location.protocol?'https://':'http://';
              var m = document.referrer.match(/https?:\/\/([a-z]+\.[a-z\.]+)/i);
              var r = (m && m[1] != document.location.hostname) ? ('&ref=' + escape(document.referrer)) : '';
              t.src = p + h + '/?async=1&aid=' + a + r;
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(t, s);
            })();
        </script>
        <script type="text/javascript" src="/assets/js/plugins/jquery.qwest-core.js"></script>
        <script type="text/javascript" src="/assets/js/plugins/centurycore.shortcuts.js"></script>
        <!-- Start OpinionLab --> 
        <script>
            document.write('<link rel="stylesheet" type="text/css" href="/common/3rdparty/opinionlab/5/oo_style.css">'); 
            document.write('<script language="javascript" type="text/javascript" charset="windows-1252" src="/common/3rdparty/opinionlab/5/oo_engine.min.js"></'+'script>'); 
            document.write('<script language="javascript" type="text/javascript" charset="windows-1252" src="/common/3rdparty/opinionlab/5/oo_conf_inline.js"></'+'script>'); 
            $('#footer>.support>.nav>li:first').removeClass('first').parent().prepend('<li class="first"><a href="javascript:void(0);" onClick="oo_feedback.show()"><img src="/common/3rdparty/opinionlab/5/oo_icon.gif" border="0" title="Feedback"> Feedback</a></li>'); 
        </script>
        <!-- End OpinionLab -->


        <script>
            $(document).ready(function(){
                qa.initialize();
            });
        </script>

    </body>
</html>
