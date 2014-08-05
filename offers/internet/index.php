<?php 
    $phone = "866-000-0000";
    $img_prefix = "ten-mbps-";
    if(isset($_GET["mkt"])){
        //ENS
        if($_GET["mkt"]=="ens"){
            $phone="000-000-0000";
            $img_prefix = "ten-mbps-";
            $title = "CenturyLink | Residential | High-Speed Internet";
            $description = "Get great deals on fast, reliable Internet – all backed by our 30-Day Satisfaction Guarantee and 24/7 technical support.";
            $keywords = "CenturyLink, CenturyLink High-Speed Internet, Pure broadband, CenturyLink Internet bundles, no contract Internet, Internet and Home Phone bundles, fast Internet, cheap Internet, great Internet deals, CenturyLink 3-year Internet deal";
            $floodlight = "";
        }
        //CRIS
        if($_GET["mkt"]=="cris"){
            $phone="111-111-1111";
            $img_prefix = "twelve-mbps-";
            $title = "CenturyLink | Residential | High-Speed Internet";
            $description = "Get great deals on fast, reliable Internet – all backed by our 30-Day Satisfaction Guarantee and 24/7 technical support.";
            $keywords = "CenturyLink, CenturyLink High-Speed Internet, Pure broadband, CenturyLink Internet bundles, no contract Internet, Internet and Home Phone bundles, fast Internet, cheap Internet, great Internet deals, CenturyLink 3-year Internet deal";
            $floodlight = "";
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

        <?php include $floodlight.'.php' ?>

        <div class="page-wrapper">

            <div class="row header">
                <div class="container">
                    <div class="logo fL">
                        <a href="">
                            <img src="img/centurylink-logo.png" alt="CenturyLink">
                        </a>
                    </div>
                    <nav class="fR">
                        <a href="">Home</a> |
                        <a href="">About Us</a> |
                        <a href="">Manage My Account</a> |
                        <a href="">Contact Us</a>
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
                        <img src="img/tenmbps-heading-device.png" alt="" class="offset-img">
                    </div>
                    <div class="left-side fL">
                        <img src="img/tenmbps-laptop-phone.png" alt="" class="tenmbps-hsi-and-phone-img">
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
                        <a href="" class="bookendButton" clicktrack="">
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
                        <img src="img/tenmbps-lowerheading-laptop.png" alt="" class="offset-img">
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
                        <a href="" class="bookendButton" clicktrack="">
                            <span class="bookend leftBookend">&nbsp;</span>
                            <span class="bookend centerBookend">Check Availability</span>
                            <span class="bookend rightBookend">&nbsp;</span>
                        </a>
                        <p><a href="" class="offer-details">Offer details</a></p>
                        <p class="perks ir">Norton by Symantec. 30-Day Satisfaction Guarantee. 24/7 Technical Support</p>
                    </div>
                    <div class="right-side fR">
                        <img src="img/tenmbps-ipad.png" alt="">
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
                            <span class="cta">XXX-XXX-XXXX</span>
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
                        <a href="">Residential</a> |
                        <a href="">Small Business</a> |
                        <a href="">Large Business</a> |
                        <a href="">Wholesale</a>
                    </nav>
                    <p>&copy; 2014 CenturyLink. All Rights Reserved.</p>
                </div>
            </div>

        </div><!--end page-wrapper -->

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>

        <script src="js/main.js"></script>
    </body>
</html>
