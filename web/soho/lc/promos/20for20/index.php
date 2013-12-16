<?php
    $pagePhone = "866.408.4365";
    $svar = array(
            'pageName' => "smb|products|hsi|lctl|price_lock",
            'server' => "centurylink.com",
            'channel' => "Small Business",
            'prop20' => "Small Business",
            'prop24evar35' => "smb|promos",
            'prop25evar53' => "smb|promos|hsi",
            'prop26evar54' => "smb|promos|hsi|lctl",
            'prop27evar55' => "Null",
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
?>
<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>CenturyLink | High-Speed Business Internet &amp; Marketing Tools</title>
        <meta name="description" content="Access CenturyLink's web design, business email, and data protection services at no extra cost. 20 Mbps for 3 years, guaranteed. This special offer ends soon.">
        <meta name="keywords" content="">
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
                    <p>Call <?php echo $pagePhone; ?></p>
                </div>
                <div style="clear:both;"></div>
            </div>            
            <div class="hero c960">
                <h2>
                    <img src="img/20-for-20-hero.jpg" alt="Get more for your business. CenturyLink's High-Speed Business Internet gives you a full suite of business tools at no extra cost. Web Design &amp; Hosting, Business-Class Email, Data Protection Services. Special Offer High-Speed Business Internet.">
                </h2>
                <span class="hero-tfn">Call <?php echo $pagePhone; ?></span>
            </div>
            <div class="content c960">
                <div class="float-left">
                    <div class="info">
                        <h2>CenturyLink lets you do more with your connection.</h2>
                        <ul class="img-list">
                            <li class="hsi">
                                <h4>Get the speed and reliability you need.</h4>
                                <p>Run cloud apps, participate in Web conferences and stream audio and video, all with virtually no lag or buffering.</p>
                            </li>
                            <li class="wp">
                                <h4>Promote your business like never before.</h4>
                                <p>Create and host your own website with a custom vanity URL or migrate your existing site in just a few simple steps.</p>
                            </li>
                            <li class="bce">
                                <h4>Keep the whole team in touch.</h4>
                                <p>Stay in sync with Microsoft<sup>&reg;</sup> Outlook business email and calendar. Plus you&rsquo;ll get a professional email address that uses your business name.</p>
                            </li>
                            <li class="bv">
                                <h4>Protect your essential business data. </h4>
                                <p>Get the peace of mind that comes with 24/7 tech support, online security tools and automated backup – all made easy.</p>
                            </li>
                            <li class="ds">
                                <h4>We know not everyone is an IT expert.</h4>
                                <p>A technology consultant will help configure your online services, including automated backup of business-critical data. Maximize your bundle value with this 1-on-1 consultation, <strong>a $300 value!</strong></p>
                            </li>
                        </ul>
                        <div id="smilingBox">
                            <h3>What our customers are saying:</h3>
                            <p>"My consultant was excellent and helped me through setup of both my website and email. He really took his time and didn't rush the consultation. Thanks!"</p>
                        </div>
                        <p class="disclaimer">*Other fees and conditions may apply. <a href="https://www.centurylink.com/smallbusiness/disclaimers/index.html" onclick="window.open(this.href,'disclaimer','height=650,width=970,left=100,top=50,resizable=no,scrollbars=yes,toolbar=no,status=no');return false;" target="_blank">View details.</a></p>
                    </div>
                </div>
                <div class="float-right">
                    <div class="badge">
                        <p class="hide-me">Up to 20 Mbps for $20 a month for 36-months when you bundle with Core Connect.® Speed where available. 3 Years 1 Price Guaranteed</p>
                        <span class="orange-tfn">Call <?php echo $pagePhone; ?></span>
                    </div>
<!--                     <div id="underForm">
                        <div class="corners outsideW cTop noLayoutTop">
                            <span class="corner cLeft">   </span>
                            <span class="corner cRight">   </span>
                        </div>
                        <h4>Switch with peace of mind</h4>
                        <ul class="greenDot">
                            <li><strong>FREE activation</strong> of online services from our professional support team</li>
                            <li>24/7 tech support</li>
                            <li>Security tools and backup</li>
                        </ul>
                        <div class="corners outsideW cBottom">
                            <span class="corner cLeft">   </span>
                            <span class="corner cRight">   </span>
                        </div>
                    </div> -->
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
                    <p class="copyright">&copy;<?php echo date('Y');?> CenturyLink. All Rights Reserved. The name CenturyLink and the pathways logo are trademarks of CenturyLink. </p>
                </div>
                <div class="support">
                    <p class="cta">Call us at <?php echo $pagePhone; ?></p>
                    <ul class="nav">

                    <li class=""><a target="_blank" href="http://storelocator.centurylinkapps.com/">Find a Store</a></li>
                    <li class="last"><a target="_blank" href="<?php echo $footerLinks["ContactUs"];?>">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <script src="/assets/js/jquery.min.js"></script>
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

        <!-- Begin Mongoose Metrics Tracking Code -->
        <script type="text/javascript">
        var mm_c = '50d3ea85f492c7cbc35c27ebd7b46a81';
        var mm_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");
        document.write(unescape("%3Cscript src='" + mm_protocol + "www.mongoosemetrics.com/jsfiles/js-correlation/mm-getvar.js' type='text/javascript'%3E%3C/script%3E"));
        </script>
        <script type="text/javascript">
        /* Custom Parameters */
        /* MANDATORY default_number Setup Parameter DO NOT REMOVE */
        var default_number='8664084365'; /* 10 Digits Only i.e. 8881234567 */
        if (getURLVar('userguid')){
            var custom1=getURLVar('userguid');
        }
        /* Custom Parameters */
        </script>
        <script type="text/javascript">
        document.write(unescape("%3Cscript src='" + mm_protocol + "www.mongoosemetrics.com/jsfiles/js-correlation/mm-control.php%3F" + mm_variables + "' type='text/javascript'%3E%3C/script%3E"));
        </script>
        <!-- End Mongoose Metrics Tracking Code -->
    </body>
</html>
