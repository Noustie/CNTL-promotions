<?php 
    $phone = "866-000-0000";
    $img_prefix = "ens-";
    $floodlight = "floodlight-ens.php";
    if(isset($_GET["mkt"])){
        //ENS
        if($_GET["mkt"]=="ens"){
            $phone="000-000-0000";
            $img_prefix = "ens-";
            $title = "CenturyLink | Residential | High-Speed Internet";
            $description = "Get great deals on fast, reliable Internet – all backed by our 30-Day Satisfaction Guarantee and 24/7 technical support.";
            $keywords = "CenturyLink, CenturyLink High-Speed Internet, Pure broadband, CenturyLink Internet bundles, no contract Internet, Internet and Home Phone bundles, fast Internet, cheap Internet, great Internet deals, CenturyLink 3-year Internet deal";
            $floodlight = "floodlight-ens";
        }
        //CRIS
        if($_GET["mkt"]=="cris"){
            $phone="111-111-1111";
            $img_prefix = "cris-";
            $title = "CenturyLink | Residential | High-Speed Internet";
            $description = "Get great deals on fast, reliable Internet – all backed by our 30-Day Satisfaction Guarantee and 24/7 technical support.";
            $keywords = "CenturyLink, CenturyLink High-Speed Internet, Pure broadband, CenturyLink Internet bundles, no contract Internet, Internet and Home Phone bundles, fast Internet, cheap Internet, great Internet deals, CenturyLink 3-year Internet deal";
            $floodlight = "floodlight-cris";
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
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
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
                        <img src="img/<?php echo $img_prefix; ?>content-bug-devices.png" alt="" class="tenmbps-hsi-and-phone-img">
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
                            <span class="time-frame">a month when<br>you bundle</span>
                        </div>
                        <div class="tag-line">
                            3 Years. 1 Price. No Contract.
                        </div>
                        <a href="https://shop.centurylink.com/MasterWebPortal/freeRange/login/shop" class="bookendButton" clicktrack="">
                            <span class="bookend leftBookend">&nbsp;</span>
                            <span class="bookend centerBookend">Check Availability</span>
                            <span class="bookend rightBookend">&nbsp;</span>
                        </a>
                        <p><a href="" class="offer-details">Offer details</a></p>
                        <p class="perks ir">Norton by Symantec. 30-Day Satisfaction Guarantee. 24/7 Technical Support</p>
                    </div>
                    <div style="clear:both;"></div>
                </div>
            </div>
            
            <div class="row hsi">
                <div class="container">
                    <div class="heading">
                        <h3>High-Speed Internet</h3>
                        <img src="img/<?php echo $img_prefix; ?>lower-heading-devices.png" alt="" class="offset-img">
                    </div>
                    <div class="left-side fL">
                        <h2>Pure broadband&trade;</h2>
                        <div class="pricepoint">
                            <span class="price"><sup>$</sup>39<sup>95</sup></span>
                            <span class="time-frame">a month when<br>you bundle</span>
                        </div>
                        <div class="tag-line">
                            Pure speed online. No phone line required.
                        </div>
                        <a href="https://shop.centurylink.com/MasterWebPortal/freeRange/login/shop" class="bookendButton" clicktrack="">
                            <span class="bookend leftBookend">&nbsp;</span>
                            <span class="bookend centerBookend">Check Availability</span>
                            <span class="bookend rightBookend">&nbsp;</span>
                        </a>
                        <p><a href="" class="offer-details">Offer details</a></p>
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
                    <p>&copy; 2014 CenturyLink. All Rights Reserved.</p>
                </div>
            </div>

        </div><!--end page-wrapper -->

        <script type="text/javascript" src="/assets/js/common/jquery.min.js"></script>
        <script type="text/javascript" src="js/vendor/TweenMax.min.js"></script>

        <script src="js/main.js"></script>
    </body>
</html>
