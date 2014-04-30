<?php
    
    $hostName = $_SERVER['SERVER_NAME']; 

    //active styles for header navigation
    $nav_class = array(
        "home" => '',
        "benefits" => '',
        "cities" => '',
        "business" => '',
        "community" => '',
        "news" => '',
        "faqs" => ''
    );

    // $path = "/offers/gpon2";
    // $rootpath = "/Applications/MAMP/htdocs".$path;

    $path = "/offers/gigabit";
    $rootpath = "/var/www/clients/client1/$hostName/web".$path;