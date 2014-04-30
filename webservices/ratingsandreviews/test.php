<?php 

class RatingsAndReviews {
    var $prod_apikey = "tyuzag9qhjbc7gddgaez2j2yu"; //PRODUCTION KEY
    var $prod_apiurl = "http://reviews.centurylink.com/data/"; //PRODUCTION URL

    var $staging_apikey = "z4qvcxmw4dzwemgwxx43ehfc"; //STAGING KEY
    var $staging_apiurl = "http://reviews.centurylink.com/bvstaging/data/"; //STAGING URL

    var $products = array(
        "prism" => array(
            'productids' => "TV0100,TV0200,TV0300,TV0700",
            'displaycode' => "7108prism",
            'generaltitle' => "Prism<sup>&trade;</sup> TV",
            'metatitle' => "CenturyLink&reg; Prism&trade; TV"
        ),
        "hsi" => array(
            'productids' => "RP1000,RP0900,RP0800,RP0700",
            'displaycode' => "7108",
            'generaltitle' => "High-Speed Internet",
            'metatitle' => "CenturyLink&reg; High-Speed Internet"
        ),
    );

    var $Queries = array( 
        "reviews" => array(
            "ApiVersion" => 5.4, 
            "displaycode" => null,
            "passKey" => "", 
            "Sort" => "submissiontime:desc",
            "Limit" => 100,
            "Filter" => array(
                "ProductId:%%PROD_IDS%%"
            )
        ),
        "statistics" => array( 
            "ApiVersion" => 5.4, 
            "displaycode" => null,
            "passKey" => "",
            "stats" => "Reviews",
            "Filter" => null
        ),
        "products" => array( 
            "ApiVersion" => 5.4, 
            "displaycode" => null,
            "passKey" => "",
            "stats" => "Reviews",
            "Filter" => array(
                "Id:%%PROD_IDS%%"
            )
       )
    );

    var $product_meta_key = "";

    var $reviewWeight = array( 25, 25, 30, 40, 40 );
    var $visibleReviewStats = array(
        '1Star' => 0,
        '2Star' => 0,
        '3Star' => 0,
        '4Star' => 0,
        '5Star' => 0
    );


    var $productMeta = array(   
        'TV0100' => array(
            'Name' => "Prism<sup>&trade;</sup> Essential",
            'SEOName' => "Prism&trade; Essential"
        ), 
        'TV0200' => array(
            'Name' => "Prism<sup>&trade;</sup> Complete",
            'SEOName' => "Prism&trade; Complete"
        ), 
        'TV0700' => array(
            'Name' => "Prism<sup>&trade;</sup> Preferred",
            'SEOName' => "Prism&trade; Preferred"
        ), 
        'TV0300' => array(
            'Name' => "Prism<sup>&trade;</sup> Premium",
            'SEOName' => "Prism&trade; Premium"
        ), 
        'RP1000' => array(
            'Name' => "High-Speed Internet<sup>&reg;</sup> 40Mbps",
            'SEOName' => "High-Speed Internet&reg; 40Mbps"
        ), 
        'RP0900' => array(
            'Name' => "High-Speed Internet<sup>&reg;</sup> 35Mbps",
            'SEOName' => "High-Speed Internet&reg; 35Mbps"
        ), 
        'RP0800' => array(
            'Name' => "High-Speed Internet<sup>&reg;</sup> 20Mbps",
            'SEOName' => "High-Speed Internet&reg; 20Mbps"
        ), 
        'RP0700' => array(
            'Name' => "High-Speed Internet<sup>&reg;</sup> 15Mbps",
            'SEOName' => "High-Speed Internet&reg; 15Mbps"
        )
    );

    var $DATA;
    var $ReviewsMap = array(
        "config" => array(),
        "reviews" => array()
    );
    var $ReviewsHTML = array();
    var $ProductHTML = "";

    var $AllFilesOutput = array();
    // var $ScriptRoot = "http://staging.promotions.centurylink.com/test/bazaarvoice-api/";
    var $ScriptRoot = "./";
    var $OutputRoot = "review-includes/";
    var $TestOutputRoot = "review-includes-test/";

    //var $outputFetchRoot = "http://staging.promotions.centurylink.com/webservices/ratingsandreviews/";
    var $outputFetchRoot = "http://staging.promotions.centurylink.com/test/bazaarvoice-api/";
    var $outputMapRoot = "/assets/feeds/third-party/bazaarVoice/";

    function RatingsAndReviews( $datatarget, $product_meta_key = "prism" ) 
    {
        if ( $_GET["includetest"] == "1" ) {
            $this->OutputRoot = $this->TestOutputRoot;
        }
        $this->OutputRoot .= ($product_meta_key."/");

        $apitarget = "reviews";
        $this->product_meta_key = $product_meta_key;

        $prquery = $this->getQuerySpecifics( $datatarget, "products" );     
        $productsRawJSON = $this->makeAPIRequest( ( $this->{ $datatarget . "_apiurl" } ), "products", $this->Queries[ "products" ] );      
        $productsData = json_decode( $productsRawJSON, true );
        $this->processProductsData( $productsData );

        $rrquery = $this->getQuerySpecifics( $datatarget, "reviews" );     
        $reviewsRawJSON = $this->makeAPIRequest( ( $this->{ $datatarget . "_apiurl" } ), "reviews", $this->Queries[ "reviews" ] );      
        $this->DATA = json_decode( $reviewsRawJSON, true );
        $this->processReviewsData( $this->DATA );



        echo $reviewsRawJSON;
        exit();
    }

    function getQuerySpecifics ( $datatarget, $apitarget ) 
    {
        $this->Queries["$apitarget"]["passKey"] = $this->{ $datatarget ."_apikey" };
        $this->Queries["$apitarget"]["displaycode"] = $this->products{ $this->product_meta_key }["displaycode"];
        $params = filter_input_array(INPUT_GET, FILTER_SANITIZE_STRING);
        return $params;
    }

    function buildFilters ($apitarget, $filters ) {
        if ( !!$filters ) {
            foreach ($filters as $index => $filtervalue) {
                $filtered = str_replace( "%%PROD_IDS%%", $this->products{ $this->product_meta_key }["productids"], $filtervalue );
                $out .= ("&Filter=". $filtered ); 
            }
        } else {
            $out = "";
        }
        return $out;
    }

    function makeAPIRequest($url, $apitarget, array $post = NULL, array $options = array()) 
    {
        $filters = $post["Filter"];
        unset( $post["Filter"] );
        $curlURLOPT = $url . $apitarget. ".json?" . http_build_query($post) . $this->buildFilters($apitarget, $filters);

        $defaults = array( 
            CURLOPT_HEADER => 0, 
            CURLOPT_URL => $curlURLOPT, 
            CURLOPT_FRESH_CONNECT => 1, 
            CURLOPT_RETURNTRANSFER => 1, 
            CURLOPT_FORBID_REUSE => 1, 
            CURLOPT_TIMEOUT => 20
        ); 

        $ch = curl_init(); 
        curl_setopt_array($ch, ($options + $defaults)); 
        if( ! $result = curl_exec($ch)) 
        {
            curl_close($ch); 
            exit();
        } 
        curl_close($ch); 
        echo ("\n\n <br /> <br />" . $curlURLOPT . "\n\n <br /> <br />"); 
        //exit();
        return $result; 
    } 
    function processReviewsData ( $dataArr ) {
        $results = $dataArr["Results"];
        foreach ($results as $key => $dataobj) {
            $reviewHTML = $this->outputReviewTemplate( $dataobj, $reviewRowClass );
            if ( !!$reviewHTML ) {
                $this->ReviewsMap["reviews"][] = array( 
                    "fullpath" => $this->outputMapRoot . $this->OutputRoot . "review".$dataobj["Id"].".html",
                    //"filename" => "review".substr("000$key",-3).".html",
                    "filename" => "review".$dataobj["Id"].".html",
                    "stars" => $dataobj["Rating"],
                    "productid" => $dataobj["ProductId"],
                    "productname" => $this->productMeta[ $dataobj["ProductId"] ]["Name"]
                );
                $this->ReviewsHTML[] = $reviewHTML;
            }
        }
    }
    function processProductsData ( $dataArr ) {
        $results = $dataArr["Results"];
        
        $aggragatedData = array(
            'TotalReviewCount' => 0,
            'AverageOverallRating' => 0,
            'OverallRatingRange' => 0,
            'MaxStarReviews' => 0,
            'RatingCounts' => array(
                '5 Stars' => 0,
                '4 Stars' => 0,
                '3 Stars' => 0,
                '2 Stars' => 0,
                '1 Star' => 0
            ),
            'secondaryRatings' => array()
        );

        $productCount = 0;
        foreach ($results as $key => $dataobj) {
            if ( $dataobj["TotalReviewCount"] > 0 ) {
                
                $productCount++;

                $aggragatedData["TotalReviewCount"] += $dataobj["TotalReviewCount"];
                $aggragatedData["AverageOverallRating"] += $dataobj["ReviewStatistics"]["AverageOverallRating"];
                $aggragatedData["OverallRatingRange"] += $dataobj["ReviewStatistics"]["OverallRatingRange"];

                $secondaryStats = $dataobj["ReviewStatistics"]["SecondaryRatingsAverages"];
                foreach ( $secondaryStats as $secondarykey => $secondarydataobj ) {
                    if ( !isset( $aggragatedData["secondaryRatings"][ $secondarydataobj["Id"] ] ) ) {
                        $aggragatedData["secondaryRatings"][ $secondarydataobj["Id"] ] = array(
                            'title' => preg_replace('/(?<! )(?<!^)[A-Z]/',' $0', $secondarydataobj["Id"]), 
                            'id' => $secondarydataobj["Id"],
                            'rating' => 0
                        );
                    }
                    $aggragatedData["secondaryRatings"][ $secondarydataobj["Id"] ]["rating"] += $secondarydataobj["AverageRating"];
                }

                $ratingDist = $dataobj["ReviewStatistics"]["RatingDistribution"];
                foreach ( $ratingDist as $distkey => $ratingDistObj ) {
                    if ( $ratingDistObj["RatingValue"] !== 1 ) {
                        $aggragatedData["RatingCounts"][ "" . $ratingDistObj["RatingValue"] . " Stars" ] += $ratingDistObj["Count"];
                    } else {
                        $aggragatedData["RatingCounts"][ "" . $ratingDistObj["RatingValue"] . " Star" ] += $ratingDistObj["Count"];
                    }
                }
                foreach ( $aggragatedData["RatingCounts"] as $totalratingskey => $totalRatingsObj ) {
                    if ( $totalRatingsObj > $aggragatedData["MaxStarReviews"] ) {
                        $aggragatedData["MaxStarReviews"] = ceil( $totalRatingsObj / 100 ) * 100;
                    }
                }
            }
        }

        $aggragatedData["AverageOverallRating"] = $aggragatedData["AverageOverallRating"]/($productCount);
        $aggragatedData["OverallRatingRange"] = $aggragatedData["OverallRatingRange"]/($productCount);

        foreach ($aggragatedData["secondaryRatings"] as $secRatingID => $secRatingIDObj) {
            $aggragatedData["secondaryRatings"][ $secRatingID ]["rating"] = $aggragatedData["secondaryRatings"][ $secRatingID ]["rating"]/($productCount);
        }


        $output = $this->outputProductTemplate( $aggragatedData );
        $this->ProductHTML = implode(" ", $output);
    }
    function outputProductTemplate ( $productData ) {
        $output = array();
        $output[] = "\n\t" . '<div class="roundcorners">';
        $output[] = "\n\t" . '<div class="reviewsoverview" itemscope itemtype="Product">';
        $output[] = "\n\t" . '<meta itemprop="name" content="' . $this->products[ $this->product_meta_key ]["metatitle"] . '">';
        $output[] = "\n\t\t" . '<div class="heading">';
        $output[] = "\n\t\t\t" . '<h3 class="overviewheading" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">';
        $output[] = "\n\t\t\t\t" . '<span class="headingText"><span itemprop="itemReviewed">' . $this->products{ $this->product_meta_key }["generaltitle"] . '</span> Overall Rating' . '</span>';
        $starWidth = ceil( ($productData["AverageOverallRating"] / $productData["OverallRatingRange"]) * 100 );
        $output[] = "\n\t\t\t\t" . '<meta itemprop="worstRating" content="1">';
        $output[] = "\n\t\t\t\t" . '<span class="starRatingBlock starBG"><span class="starRatingInner starBG" style="width: ' . $starWidth . '%;"><span itemprop="ratingValue">'. round( $productData["AverageOverallRating"], 1 ) . '</span> Stars</span></span>';
        $output[] = "\n\t\t\t\t" . '<meta itemprop="bestRating" content="' . $productData["OverallRatingRange"] . '">';
        $output[] = "\n\t\t\t\t" . '<meta itemprop="ratingCount" content="' . $productData["TotalReviewCount"] . '">';
        $output[] = "\n\t\t\t" . '</h3>';
        $output[] = "\n\t\t" . '</div>';
        $output[] = "\n\t\t" . '<div class="ratings">';
        $output[] = "\n\t\t\t" . '<div class="overallRatings">';

        foreach ($productData["RatingCounts"] as $starText => $numRatings) {
            $ratingsWhole = round( ( $numRatings / $productData["MaxStarReviews"] ) * 10);
            $ratingsPerc = round( ( $numRatings / $productData["TotalReviewCount"] ) * 100);
            $output[] = "\n\t\t\t\t" . '<p class="rating">';
            $output[] = "\n\t\t\t\t\t" . '<span class="ratingLabel">' . $starText . '</span>';
            $output[] = "\n\t\t\t\t\t" . '<span class="ratingBar bar' . $ratingsWhole . '" data-numratings="' . $numRatings . '" title="' . $ratingsPerc . '%"><span class="ratingInner" style="width: ' . $ratingsPerc . '%; ">' . $ratingsPerc . '% of total number o reviews </span></span>';
            $output[] = "\n\t\t\t\t\t" . '<small class="numReviewsLabel"><span class="numReviews">' . $numRatings . '</span> reviews</small>';
            $output[] = "\n\t\t\t\t" . '</p>';
        }
        
        $output[] = "\n\t\t\t" . '</div>';
        $output[] = "\n\t\t\t" . '<div class="categoryRatings">';
        $output[] = "\n\t\t\t" . '<div class="categoryRatingsPad">';
        $output[] = "\n\t\t\t\t" . '<h5>' . $this->products{ $this->product_meta_key }["generaltitle"] . ' Category Ratings' . '</h5>';
        $output[] = "\n\t\t\t\t" . '<div class="ratingsWrap twoColStack">';

        foreach ($productData["secondaryRatings"] as $secRatingKey => $secRatingObj ) {
            $ratingsWhole = round( ( $secRatingObj["rating"] / $productData["OverallRatingRange"] ) * 10);
            $ratingsPerc = round( ( $secRatingObj["rating"] / $productData["OverallRatingRange"] ) * 100);
            $output[] = "\n\t\t\t\t\t" . '<p class="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">';
            $output[] = "\n\t\t\t\t\t\t" . '<span class="ratingLabel" itemprop="itemReviewed">' . $secRatingObj["title"] . '</span>';
            $output[] = "\n\t\t\t\t\t\t" . '<meta itemprop="worstRating" content="1">';
            $output[] = "\n\t\t\t\t\t\t" . '<span class="ratingBar bar' . $ratingsWhole . '" data-rating="' . round( $secRatingObj["rating"], 2 ) . '" title="' . $ratingsPerc . '%"><span class="ratingInner" style="width: ' . $ratingsPerc . '%; " itemprop="ratingValue">' . round( $secRatingObj["rating"], 2 ) . '</span></span>';
            $output[] = "\n\t\t\t\t\t\t" . '<meta itemprop="bestRating" content="' . $productData["OverallRatingRange"] . '">';
            $output[] = "\n\t\t\t\t\t" . '</p>';
        }

        $output[] = "\n\t\t\t\t" . '</div>';
        $output[] = "\n\t\t\t" . '</div>';
        $output[] = "\n\t\t\t" . '</div>';
        $output[] = "\n\t\t" . '</div>';
        $output[] = "\n\t" . '</div>';
        $output[] = "\n\t" . '<span class="roundcorner rcLeft rcTop outsideW">&nbsp;</span> <span class="roundcorner rcLeft rcBottom outsideW">&nbsp;</span> <span class="roundcorner rcRight rcTop outsideW">&nbsp;</span> <span class="roundcorner rcRight rcBottom outsideW">&nbsp;</span>';
        $output[] = "\n\t" . '</div>';
        return $output;
    }
    function outputReviewTemplate ( $dataobj, $reviewRowClass = "oddreview" ) {
        //REVIEW WEIGHTING SYSTEM
        $reviewkey_int = intval($dataobj["Rating"])-1;
        $this->reviewWeight[ $reviewkey_int ]--;
        if ( $this->reviewWeight[ $reviewkey_int ] < 0 ) {
            return false;
        }
        $this->visibleReviewStats[ ($reviewkey_int+1)."Star" ] += 1;


        //CREATE REVIEW HTML
        $output = array();
        $output[] = ( ("\n\t" . '<div class="review ' . $reviewRowClass . '" itemscope itemtype="http://schema.org/Product">') );
        $output[] = ( ("\n\t" . '<meta itemprop="name" content="' . $this->productMeta[ $dataobj["ProductId"] ]["SEOName"] . '">') );
        $output[] = ( ("\n\t" . '<div class="reviewRowWrap" itemprop="review" itemscope itemtype="http://schema.org/Review">') );
        $output[] = ( ("\n\t" . '<meta itemprop="itemReviewed" content="' . $this->productMeta[ $dataobj["ProductId"] ]["SEOName"] . '">') );
        $output[] = ( ("\n\t" . '<div class="reviewRowWrapInner">') );


        $output[] = ( ("\n\t\t" . '<div class="reviewStats" itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">') );
        $output[] = ( ("\n\t\t\t" . '<meta itemprop="worstRating" content="1" />') );
        $output[] = ( ("\n\t\t\t" . '<p class="starRating stars'.$dataobj["Rating"].'" data-rating="'.$dataobj["Rating"].'"><span class="starRatingBlock starBG"><span class="starRatingInner starBG"><span itemprop="ratingValue">'.$dataobj["Rating"].'</span> Stars</span></span></p>') );
        $output[] = ( ("\n\t\t\t" . '<meta itemprop="bestRating" content="'. $dataobj["RatingRange"] .'" />') );
        $output[] = ( ("\n\t\t\t" . '<div class="secondaryRatings">') );
        
        foreach ( $dataobj["SecondaryRatings"] as $ratingkey => $ratingobj) {
            $output[] = ( ("\n\t\t\t\t" . '<p class="rating">') );
            $output[] = ( ("\n\t\t\t\t\t" . '<span class="ratingLabel">'.$ratingobj["Label"].'</span>') );
            $output[] = ( ("\n\t\t\t\t\t" . '<span class="ratingBar bar'.round( ($ratingobj["Value"]/$ratingobj["ValueRange"])*10 ).'" data-rating="'.$ratingobj["Value"].'"><span class="ratingInner">'.$ratingobj["Value"].'</span></span>') );
            $output[] = ( ("\n\t\t\t\t" . '</p>') );
        }

        $output[] = ( ("\n\t\t\t" . '</div>') );
        $output[] = ( ("\n\t\t" . '</div>') );

        
        $meta = $this->productMeta[ $dataobj["ProductId"] ];
        $reviewDate = strtotime( $dataobj["SubmissionTime"] );
        $reviewTitle = ( !!$dataobj["Title"] ) ? htmlentities( $dataobj["Title"] ) : $dataobj["Rating"] . " Star Review for ". $meta["Name"];
        $reviewerNickname = ( !!$dataobj["UserNickname"] ) ? $dataobj["UserNickname"] : null;
        $reviewerLocation = ( !!$dataobj["UserLocation"] ) ? $dataobj["UserLocation"] : null;
        $productname = $meta["Name"];
        $reviewText = '<p>'. nl2br( htmlentities( $dataobj["ReviewText"]) ) .'</p>';

        $output[] = ( ("\n\t\t" . '<div class="reviewText">') );
        $output[] = ( ("\n\t\t\t" . '<div class="reviewMeta">') );
        if ( !!$reviewDate )        $output[] = ( ("\n\t\t\t\t" . '<p class="reviewDate metaSmall" itemprop="datePublished">'.date( 'F j, Y', $reviewDate ).'</p>') );
        if ( !!$reviewTitle )       $output[] = ( ("\n\t\t\t\t" . '<h4 class="reviewtitle" itemprop="name">'.$reviewTitle.'</h4>') );
        if ( !!$reviewerNickname )  $output[] = ( ("\n\t\t\t\t" . '<p class="reviewerNickname metaInline" itemprop="author">'.$reviewerNickname.'</p>') );
        if ( !!$reviewerLocation )  $output[] = ( ("\n\t\t\t\t" . '<p class="reviewerLocation metaInline" itemprop="contentLocation">'.$reviewerLocation.'</p>') );
        if ( !!$productname )       $output[] = ( ("\n\t\t\t\t" . '<p class="productname metaInline lastMetaInLine">'.$productname.'</p>') );
        $output[] = ( ("\n\t\t\t" . '</div>') );
        $output[] = ( ("\n\t\t\t" . '<div class="reviewBody" itemprop="reviewBody">') );
        $output[] = ( ("\n\t\t\t\t" . $reviewText) );
        $output[] = ( ("\n\t\t\t" . '</div>') );
        $output[] = ( ("\n\t\t" . '</div>') );


        $output[] = ( ("\n\t" . '</div>') );
        $output[] = ( ("\n\t" . '</div>') );
        $output[] = ( ("\n\t" . '</div>') );

        return implode(" ", $output);
    }
    function writeOverviewFile () {
        $fp = fopen( $this->OutputRoot."product-overview.html", 'w');
        fwrite($fp, $this->ProductHTML );
        fclose($fp);
        $this->AllFilesOutput[] = $this->ScriptRoot. $this->OutputRoot. "product-overview.html";
        //echo "\n\n <br /> <br /> Overview File Written.";
    }
    function writeReviewFiles () {
        foreach ( $this->ReviewsMap["reviews"] as $key => $reviewobj ) {
            $nextpath = $reviewobj["filename"];
            $fp = fopen($this->OutputRoot . $nextpath, 'w');
            fwrite($fp, $this->ReviewsHTML["$key"] );
            fclose($fp);
            $this->AllFilesOutput[] = $this->ScriptRoot . $this->OutputRoot . $nextpath;
        }
        //echo "\n\n <br /> <br /> $key Reviews Written.";
    }
    function writeReviewSEOPagination () {
        $thisfilename = "review-pagination.html";
        $fp = fopen( $this->OutputRoot . $thisfilename, 'w');
        $reviewsPerPage = 6;
        fwrite($fp, "\n".'<!--#if expr="!${reviewPageLocation}" -->');
        fwrite($fp, "\n".'<!--#set var="reviewPageLocation" value="" -->');
        fwrite($fp, "\n".'<!--#endif -->');
        fwrite($fp, "\n".'<!--#if expr="!${moreReviewsClicktrack}" -->');
        fwrite($fp, "\n".'<!--#set var="moreReviewsClicktrack" value="" -->'."\n\n");
        fwrite($fp, "\n".'<!--#endif -->');
        foreach ( $this->ReviewsMap["reviews"] as $rkey => $reviewobj ) {
            $pagenum = substr( "000" .ceil( $rkey / $reviewsPerPage ), -3);
            if ( $rkey % $reviewsPerPage == 0 ) {
                if ( $rkey > 0 ) {
                    fwrite($fp, "\n\n".'<p class="moreReviewsLink edgeShadowGradientTop"><a href="<!--#echo var="reviewPageLocation"-->?reviewpage='.$pagenum.'" class="moreReviews querylink" clicktrack="<!--#echo var="moreReviewsClicktrack"-->">Load More Reviews</a></p>'."\n\n");
                }
                if ( $rkey > 0 ) {
                    fwrite($fp, '<!--#elif expr="${REQUEST_URI}==/reviewpage='.$pagenum.'/" -->'."\n");
                }
                if ( $rkey == 0 ) {
                    fwrite($fp, '<!--#if expr="${REQUEST_URI}!=/reviewpage/" -->'."\n");
                }
            }
            fwrite($fp, "<!-- REVIEW NUMBER $rkey --> \n");
            fwrite($fp, '<!--#include virtual="'.$reviewobj["filename"].'" -->'."\n");
        }
        fwrite($fp, "\n\n".'<p class="moreReviewsLink edgeShadowGradientTop">&nbsp;</p>'."\n\n");
        fwrite($fp,'<!--#endif -->'."\n");
        fclose($fp);
        $this->AllFilesOutput[] = $this->ScriptRoot . $this->OutputRoot . $thisfilename;
    }
    function writeReviewMapJSON () {
        $thisfilename = "review-map.json";
        $reviewMapJSON = $this->ReviewsMap;
        $fp = fopen( $this->OutputRoot . $thisfilename, 'w');
        fwrite( $fp, json_encode($reviewMapJSON) );
        fclose($fp);
        $this->AllFilesOutput[] = $this->ScriptRoot . $this->OutputRoot . $thisfilename;
    }

    //DEBUG
    function outputVisibleReviewStats () {
        $out = "";
        $out .= $this->visibleReviewStats["1Star"] . " -- 1 Star reviews shown. <br />";
        $out .= $this->visibleReviewStats["2Star"] . " -- 2 Star reviews shown. <br />";
        $out .= $this->visibleReviewStats["3Star"] . " -- 3 Star reviews shown. <br />";
        $out .= $this->visibleReviewStats["4Star"] . " -- 4 Star reviews shown. <br />";
        $out .= $this->visibleReviewStats["5Star"] . " -- 5 Star reviews shown. <br />";
        return $out;
    }
    function outputHTML () {
        //echo $this->outputVisibleReviewStats();
        //echo implode(" \n ", $this->ReviewsMap );
    }
    function outputFetchList () {
        //echo $this->outputVisibleReviewStats();
        foreach ($this->AllFilesOutput as $key => $value) {
            echo $this->outputFetchRoot.str_replace("./", "", $value)."\n";
        }
    }

    function writeFiles () {
        $this->writeOverviewFile();
        $this->writeReviewFiles();
        $this->writeReviewSEOPagination();
        $this->writeReviewMapJSON();
        $this->outputFetchList();
    }
}

$product = $_GET["product"];
if ( $product == "hsi" ) {
    $ids = 'hsi';
} else if ( $product == "prism" ) {
    $ids = 'prism';
} else {
    $ids = 'prism';
}


        

$RatingsAndReviews = new RatingsAndReviews( "staging", $ids );

//include_once("./prism-top-snippet.php");
//$RatingsAndReviews->outputHTML();
//include_once("./prism-btm-snippet.php");


//$RatingsAndReviews->writeFiles();

