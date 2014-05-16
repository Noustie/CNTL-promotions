<?php 
error_reporting(E_ERROR | E_PARSE);
set_time_limit( 90 );

require("private/configs/ratingsandreviews-config.php");

class RatingsAndReviews {
    var $prod_apikey = PROD_APIKEY; //PRODUCTION KEY
    var $prod_apiurl = PROD_APIURL; //PRODUCTION URL

    var $staging_apikey = STAGING_APIKEY; //STAGING KEY
    var $staging_apiurl = STAGING_APIURL; //STAGING URL

    var $products = array(
        "prism" => array(
            'productids' => "TV0300,TV0700,TV0200,TV0100",
            'displaycode' => "7108prism",
            'metapidfilter' => "All Prism Plans",
            'generaltitle' => "Prism<sup>&trade;</sup> TV",
            'metatitle' => "CenturyLink&reg; Prism&trade; TV",
            'metapid' => "CenturyLink-Prism-TV"
        ),
        "hsi" => array(
            'productids' => "RP1000,RP0800,RP0600,RP0400,RP0100",
            'displaycode' => "7108",
            'metapidfilter' => "All Speeds",
            'generaltitle' => "High-Speed Internet",
            'metatitle' => "CenturyLink&reg; High-Speed Internet",
            'metapid' => "CenturyLink-High-Speed-Internet"
        )
    );

    var $Queries = array( 
        "reviews" => array(
            "ApiVersion" => 5.4, 
            "displaycode" => null,
            "passKey" => "", 
            "Sort" => "submissiontime:desc",
            "Limit" => 100,
            "Offset" => 0,
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
            "Limit" => 100,
            "passKey" => "",
            "stats" => "Reviews",
            "Filter" => array(
                "Id:%%PROD_IDS%%"
            )
       )
    );

    var $product_meta_key = "";

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
            'SEOName' => "Prism&trade; Essential",
            'ShortName' => "Essential"
        ), 
        'TV0200' => array(
            'Name' => "Prism<sup>&trade;</sup> Complete",
            'SEOName' => "Prism&trade; Complete",
            'ShortName' => "Complete"
        ), 
        'TV0700' => array(
            'Name' => "Prism<sup>&trade;</sup> Preferred",
            'SEOName' => "Prism&trade; Preferred",
            'ShortName' => "Preferred"
        ), 
        'TV0300' => array(
            'Name' => "Prism<sup>&trade;</sup> Premium",
            'SEOName' => "Prism&trade; Premium",
            'ShortName' => "Premium"
        ), 
        'RP1000' => array(
            'Name' => "High-Speed Internet 40 Mbps",
            'SEOName' => "High-Speed Internet 40 Mbps",
            'ShortName' => "40 Mbps"
        ), 
        'RP0900' => array(
            'Name' => "High-Speed Internet 35 Mbps",
            'SEOName' => "High-Speed Internet 35 Mbps",
            'ShortName' => "35 Mbps"
        ), 
        'RP0800' => array(
            'Name' => "High-Speed Internet 20 Mbps",
            'SEOName' => "High-Speed Internet 20 Mbps",
            'ShortName' => "20 Mbps"
        ), 
        'RP0700' => array(
            'Name' => "High-Speed Internet 15 Mbps",
            'SEOName' => "High-Speed Internet 15 Mbps",
            'ShortName' => "15 Mbps"
        ),
        'RP0600' => array(
            'Name' => "High-Speed Internet 12 Mbps",
            'SEOName' => "High-Speed Internet 12 Mbps",
            'ShortName' => "12 Mbps"
        ), 
        'RP0500' => array(
            'Name' => "High-Speed Internet 10 Mbps",
            'SEOName' => "High-Speed Internet 10 Mbps",
            'ShortName' => "10 Mbps"
        ),
        'RP0400' => array(
            'Name' => "High-Speed Internet 7 Mbps",
            'SEOName' => "High-Speed Internet 7 Mbps",
            'ShortName' => "7 Mbps"
        ), 
        'RP0300' => array(
            'Name' => "High-Speed Internet 5 Mbps",
            'SEOName' => "High-Speed Internet 5 Mbps",
            'ShortName' => "5 Mbps"
        ),
        'RP0200' => array(
            'Name' => "High-Speed Internet 3 Mbps",
            'SEOName' => "High-Speed Internet 3 Mbps",
            'ShortName' => "3 Mbps"
        ), 
        'RP0100' => array(
            'Name' => "High-Speed Internet 1.5 Mbps",
            'SEOName' => "High-Speed Internet 1.5 Mbps",
            'ShortName' => "1.5 Mbps"
        )
    );

    var $ReviewsMap = null;
    var $ReviewsHTML = array();
    var $ProductHTML = "";

    var $sort_by_key = null;
    var $sort_by_dir = null;

    var $AllFilesOutput = array();
    // var $ScriptRoot = "http://staging.promotions.centurylink.com/test/bazaarvoice-api/";
    var $ScriptRoot = "./";
    var $OutputRoot = "review-includes/";
    var $TestOutputRoot = "review-includes-test/";

    var $outputFetchRoot = "http://staging.promotions.centurylink.com/webservices/ratingsandreviews/";
    //var $outputFetchRoot = "http://staging.promotions.centurylink.com/test/bazaarvoice-api/";
    var $outputMapRoot = "/assets/feeds/third-party/bazaarVoice/";

    var $aux_file_jsonmap = "review-map.json";
    var $aux_file_jsonmap_all = "all-reviews-map.json";
    var $aux_file_overview = "product-overview.html";
    var $aux_file_pagination = "review-pagination.html";

    var $truncationLimit;

    function RatingsAndReviews( $datatarget, $product_meta_key = "prism" ) 
    {
        $this->truncationLimit = strtotime("January 1, 2005"); // strtotime("January 1, 2011");

        if ( $_GET["includetest"] == "1" ) {
            $this->OutputRoot = $this->TestOutputRoot;
        }
        $this->OutputRoot .= ($product_meta_key."/");

        if ( !$_GET["nocache"] ) {
            $reviewsMapFileTmp = file_get_contents( "./" . $this->OutputRoot . $this->aux_file_jsonmap_all );
            if ( !!$reviewsMapFileTmp ) {
                $this->ReviewsMap = json_decode( $reviewsMapFileTmp, true );
            }
        }

        if ( $this->ReviewsMap == null ) {
            $this->ReviewsMap = array(
                "config" => array(),
                "reviews" => array()
            );
        }

        //$apitarget = "reviews";
        $this->product_meta_key = $product_meta_key;

        $prquery = $this->getQuerySpecifics( $datatarget, "products" );     
        $productsRawJSON = $this->makeAPIRequest( ( $this->{ $datatarget . "_apiurl" } ), "products", $this->Queries[ "products" ] );      
        $productsData = json_decode( $productsRawJSON, true );
        $this->processProductsData( $productsData );

        $rrquery = $this->getQuerySpecifics( $datatarget, "reviews" );     
        
        $offset = 0;
        $reviewLoop = true;


        while ( $reviewLoop ) {
            $reviewsRawJSON = $this->makeAPIRequest( ( $this->{ $datatarget . "_apiurl" } ), "reviews", $this->Queries[ "reviews" ], array(), $offset );      
            $reviewsData = json_decode( $reviewsRawJSON, true );
            $totalOffsets = floor( $reviewsData["TotalResults"] / $this->Queries["reviews"]["Limit"] );

            $reviewLoop = $this->processReviewsData( $reviewsData );

            if ( $totalOffsets > $offset ) {
                $offset++;
            } else {
                $reviewLoop = false;
            }
        }
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

    function makeAPIRequest($url, $apitarget, array $post = NULL, array $options = array(), $offset = 0 ) 
    {
        $filters = $post["Filter"];
        unset( $post["Filter"] );
        if ( isset( $post["Offset"] ) ) {
            $post["Offset"] = $offset * $post["Limit"];
        }
        $curlURLOPT = $url . $apitarget. ".json?" . http_build_query($post) . $this->buildFilters($apitarget, $filters);

        //echo $curlURLOPT . "\n\n";

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
        return $result; 
    } 
    function processReviewsData ( $dataArr ) {
        $results = $dataArr["Results"];
        $this->ReviewsMap["config"]["rootpath"] = $this->outputMapRoot . $this->OutputRoot;
        if ( !isset($this->ReviewsMap["config"]["pid"]) ){
            $this->ReviewsMap["config"]["pid"] = array();
        }
        if ( !isset($this->ReviewsMap["config"]["pidfilter"]) ){
            $this->ReviewsMap["config"]["pidfilter"] = array();
        }
        $this->ReviewsMap["config"]["sort"] = array( 
            "time-desc" => "Most Recent", 
            //"help-desc" => "Most Helpful", 
            "stars-desc" => "Highest", 
            "stars-asc" => "Lowest" 
        );
        $this->ReviewsMap["config"]["filter"] = array( "pid", "stars" );
        $this->ReviewsMap["config"]["stars"] = array( 
            "5" => "5 Stars &#9733;&#9733;&#9733;&#9733;&#9733;", 
            "4" => "4 Stars &#9733;&#9733;&#9733;&#9733;", 
            "3" => "3 Stars &#9733;&#9733;&#9733;", 
            "2" => "2 Stars &#9733;&#9733;", 
            "1" => "1 Star &#9733;" 
        );
        $this->ReviewsMap["config"]["filenamepattern"] = "review-%%PID%%.html";
        $this->ReviewsMap["config"]["filenamematch"] = "%%PID%%";

        $keeplooping = true;

        foreach ($results as $key => $dataobj) {
            $reviewID = substr( ("00000000000".$dataobj["Id"] ), -11 );
            $resultFileName = "review-".$reviewID.".html";
            $submissiontime = strtotime( $dataobj["SubmissionTime"] );
            
            $dateoutputfolder = date( "Y/m-d", $submissiontime );
            $fullpath = $this->outputMapRoot . $this->OutputRoot . $dateoutputfolder . "/" . $resultFileName;


            if ( !file_exists( $this->OutputRoot . $dateoutputfolder . "/" . $resultFileName ) || !!$_GET["nocache"] ) {
                $reviewHTML = $this->outputReviewTemplate( $dataobj, $reviewID, $reviewRowClass, $fullpath );
                $keeplooping = true;
            } else {
                $keeplooping = false;
                $reviewHTML = "";
            }

            $this->ReviewsMap["reviews"][$reviewID] = array( 
                "stars" => $dataobj["Rating"],
                "featured" => $dataobj["IsFeatured"],
                "time" => $submissiontime,
                "year" => $dateoutputfolder,
                "pid" => $dataobj["ProductId"],
                "help" => $dataobj["Helpfulness"],
                "h_pos" => $dataobj["TotalPositiveFeedbackCount"],
                "h_neg" => $dataobj["TotalNegativeFeedbackCount"],
                "rid" => $reviewID
            );
            if ( !isset( $this->ReviewsMap["config"]["pid"][ $dataobj["ProductId"] ] ) ) {
                $this->ReviewsMap["config"]["pid"][ $dataobj["ProductId"] ] = $this->productMeta[ $dataobj["ProductId"] ]["Name"];
            }
            if ( !isset( $this->ReviewsMap["config"]["pidfilter"][ $dataobj["ProductId"] ] ) ) {
                $this->ReviewsMap["config"]["pidfilter"][ $dataobj["ProductId"] ] = $this->productMeta[ $dataobj["ProductId"] ]["ShortName"];
            }
            $this->ReviewsHTML[$reviewID] = $reviewHTML;
        }

        if ( isset($_GET["nocache"]) ) {
            $keeplooping = true;
        }

        return $keeplooping;
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
            'secondaryRatings' => array(),
            'subProducts' => array()
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
                $aggragatedData["subProducts"][ $dataobj["Id"] ] = array(
                    'RatingCount' => $dataobj["TotalReviewCount"], 
                    'RatingAverage' => $dataobj["ReviewStatistics"]["AverageOverallRating"],
                    'RatingRange' => $dataobj["ReviewStatistics"]["OverallRatingRange"]
                );
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
        $output[] = "\n\t" . '<div class="roundcorners overviewWrapper">';
        $output[] = "\n\t" . '<div class="reviewsoverview"'. '>';
        $output[] = "\n\t\t" . '<meta itemprop="name" content="' . $this->products[ $this->product_meta_key ]["metatitle"] . '" />';
        $output[] = "\n\t\t" . '<meta itemprop="productID" content="' . $this->products[ $this->product_meta_key ]["metapid"] . '" />';
        $output[] = "\n\t\t" . '<div class="heading">';
        $output[] = "\n\t\t\t" . '<h3 class="overviewheading" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">';
        $output[] = "\n\t\t\t\t" . '<span class="headingText"><span>' . $this->products{ $this->product_meta_key }["generaltitle"] . '</span> Overall Rating' . '</span>';
        $starWidth = ceil( ($productData["AverageOverallRating"] / $productData["OverallRatingRange"]) * 100 );
        $output[] = "\n\t\t\t\t" . '<meta itemprop="itemReviewed" content="' . $this->products[ $this->product_meta_key ]["metatitle"] . '" />';
        $output[] = "\n\t\t\t\t" . '<meta itemprop="worstRating" content="1" />';
        $output[] = "\n\t\t\t\t" . '<span class="starRatingBlock starBG"><span class="starRatingInner starBG" style="width: ' . $starWidth . '%;"><span itemprop="ratingValue">'. round( $productData["AverageOverallRating"], 2 ) . '</span> Stars</span></span>';
        $output[] = "\n\t\t\t\t" . '<meta itemprop="bestRating" content="' . $productData["OverallRatingRange"] . '" />';
        $output[] = "\n\t\t\t\t" . '<meta itemprop="reviewCount" content="' . $productData["TotalReviewCount"] . '" />';
        $output[] = "\n\t\t\t" . '</h3>';
        $output[] = "\n\t\t" . '</div>';
        $output[] = "\n\t\t" . '<div class="ratings">';
        $output[] = "\n\t\t\t" . '<div class="overallRatings">';

        foreach ($productData["RatingCounts"] as $starText => $numRatings) {
            $ratingsWhole = round( ( $numRatings / $productData["MaxStarReviews"] ) * 10);
            $ratingsPerc = round( ( $numRatings / $productData["TotalReviewCount"] ) * 100);
            $output[] = "\n\t\t\t\t" . '<p class="rating">';
            $output[] = "\n\t\t\t\t\t" . '<a href="?reviewstars=' . str_replace( array(" Stars", " Star"), "", $starText ) . '" rel="nofollow"><span class="ratingLabel">' . $starText . '</span></a>';
            $output[] = "\n\t\t\t\t\t" . '<span class="ratingBar bar' . $ratingsWhole . '" data-numratings="' . $numRatings . '" title="' . $ratingsPerc . '%"><span class="ratingInner" style="width: ' . $ratingsPerc . '%; ">' . $ratingsPerc . '% of total number of reviews </span></span>';
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
            $output[] = "\n\t\t\t\t\t" . '<p class="rating"'.'>'; 
            $output[] = "\n\t\t\t\t\t\t" . '<span class="ratingLabel"'.'>' . $secRatingObj["title"] . '</span>'; 
            $output[] = "\n\t\t\t\t\t\t" . '' . '';
            $output[] = "\n\t\t\t\t\t\t" . '<span class="ratingBar bar' . $ratingsWhole . '" data-rating="' . round( $secRatingObj["rating"], 2 ) . '" title="' . $ratingsPerc . '%"><span class="ratingInner" style="width: ' . $ratingsPerc . '%; "'.'>' . round( $secRatingObj["rating"], 2 ) . '</span></span>';
            $output[] = "\n\t\t\t\t\t\t" . '' . '';
            $output[] = "\n\t\t\t\t\t" . '</p>';
        }

        $output[] = "\n\t\t\t\t" . '</div>';
        $output[] = "\n\t\t\t" . '</div>';
        $output[] = "\n\t\t\t" . '</div>';

        $output[] = "\n\t\t" . '<div class="reviewsBySubProduct">';
        foreach ( $productData["subProducts"] as $subProdID => $subProdObj ) {
            $output[] = "\n\t\t\t" . '<div class="subProduct"'.'>'; 
            $output[] = "\n\t\t\t\t" . ''.'';
            $output[] = "\n\t\t\t\t" . ''.'';

            $ratingsWhole = round( ( $subProdObj["RatingAverage"] / $subProdObj["RatingRange"] ) * 10);
            $ratingsPerc = round( ( $subProdObj["RatingAverage"] / $subProdObj["RatingRange"] ) * 100);
            $numRatings = $subProdObj["RatingCount"];

            $output[] = "\n\t\t\t\t" . '<p class="rating">';
            $output[] = "\n\t\t\t\t\t" . '<a href="?reviewpid=' . $subProdID . '"><span class="ratingLabel">' . $this->productMeta[ $subProdID ]["ShortName"] . '</span></a>';
            $output[] = "\n\t\t\t\t\t" . '<span class="ratingBar bar' . $ratingsWhole . '" data-numratings="' . $numRatings . '" title="' . $ratingsPerc . '%"><span class="ratingInner" style="width: ' . $ratingsPerc . '%; ">' . $ratingsPerc . '% of total number o reviews </span></span>';
            $output[] = "\n\t\t\t\t\t" . '<small class="numReviewsLabel"><span class="numReviews">' . $numRatings . '</span> reviews</small>';
            $output[] = "\n\t\t\t\t" . '</p>';

            $output[] = "\n\t\t\t" . '</div>';        
        }

        $output[] = "\n\t\t" . '</div>';
        $output[] = "\n\t" . '</div>';
        $output[] = "\n\t" . '</div>';

        $output[] = "\n\t" . '<span class="roundcorner rcLeft rcTop outsideW">&nbsp;</span> <span class="roundcorner rcLeft rcBottom outsideW">&nbsp;</span> <span class="roundcorner rcRight rcTop outsideW">&nbsp;</span> <span class="roundcorner rcRight rcBottom outsideW">&nbsp;</span>';
        $output[] = "\n\t" . '</div>';
        return $output;
    }
    function outputReviewTemplate ( $dataobj, $reviewID, $reviewRowClass = "oddreview", $fullpath = "" ) {
        //REVIEW WEIGHTING SYSTEM
        $reviewkey_int = intval($dataobj["Rating"])-1;
        $this->visibleReviewStats[ ($reviewkey_int+1)."Star" ] += 1;


        //CREATE REVIEW HTML
        $output = array();
        $output[] = ( ("\n\t" . '<div class="review ' . $reviewRowClass . '"'.' id="review-'.$reviewID.'">') );
        $output[] = ( ("\n\t" . ''.'') );
        $output[] = ( ("\n\t" . ''.'') );
        $output[] = ( ("\n\t" . '<div class="reviewRowWrap" itemprop="review" itemscope itemtype="http://schema.org/Review">') );
        $output[] = ( ("\n\t" . '<meta itemprop="itemReviewed" content="' . $this->products[ $this->product_meta_key ]["metatitle"] . '" />') );
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
        $output[] = ( ("\n\t\t\t" . '<!-- Was this review helpful? Yes: '.$dataobj["TotalPositiveFeedbackCount"].' | No: '.$dataobj["TotalNegativeFeedbackCount"].' -->') ); 
        $output[] = ( ("\n\t\t\t" . '</div>') );
        $output[] = ( ("\n\t\t" . '</div>') );


        $output[] = ( ("\n\t" . '</div>') );
        $output[] = ( ("\n\t" . '</div>') );
        $output[] = ( ("\n\t" . '</div>') );

        return implode(" ", $output);
    }
    function writeOverviewFile () {
        $thisfilename = $this->aux_file_overview;
        $fp = fopen( $this->OutputRoot . $thisfilename, 'w');
        fwrite($fp, $this->ProductHTML );
        fclose($fp);
        //$this->AllFilesOutput[] = $this->ScriptRoot . $this->OutputRoot . $thisfilename;
    }
    function writeReviewFiles () {
        foreach ( $this->ReviewsHTML as $rid => $htmloutput ) {
            if ( !!$htmloutput ) {
                $nextpath = $this->getFileNameFromID( $rid );
                $timefolders = explode("/", $this->ReviewsMap["reviews"][$rid]["year"] );

                if (!is_dir($this->OutputRoot . $timefolders[0] )) {
                    mkdir($this->OutputRoot . $timefolders[0] );         
                }
                if (!is_dir($this->OutputRoot . $timefolders[0] . "/" . $timefolders[1] )) {
                    mkdir($this->OutputRoot . $timefolders[0] . "/" . $timefolders[1] );         
                }

                $fp = fopen( $this->OutputRoot . $timefolders[0] . "/" . $timefolders[1] . "/" . $nextpath, 'w');
                fwrite($fp, $this->ReviewsHTML["$rid"] );
                fclose($fp);
            }
        }
    }
    function getFileNameFromID ( $reviewid ) {
        return str_replace( $this->ReviewsMap["config"]["filenamematch"], $reviewid, $this->ReviewsMap["config"]["filenamepattern"] );
    }
    function writeReviewSEOPagination () {
        $thisfilename = $this->aux_file_pagination;

        $output = array();
        $output[] = ( "\n".'<!--#if expr="!${reviewPageLocation}" -->');
        $output[] = ( "\n".'<!--#set var="reviewPageLocation" value="" -->');
        $output[] = ( "\n".'<!--#endif -->');
        $output[] = ( "\n".'<!--#if expr="!${moreReviewsClicktrack}" -->');
        $output[] = ( "\n".'<!--#set var="moreReviewsClicktrack" value="" -->');
        $output[] = ( "\n".'<!--#endif -->');

        $output[] = ( "\n".'<!--#if expr="${REQUEST_URI}=/reviewpage=([0-9]{5})/" -->');
        $output[] = ( "\n".'<!--#set var="reviewpage" value="${1}" -->');
        $output[] = ( "\n".'<!--#else -->');
        $output[] = ( "\n".'<!--#set var="reviewpage" value="00000" -->');
        $output[] = ( "\n".'<!--#endif -->');

        $output[] = ( "\n".'<!--#if expr="${REQUEST_URI}=/reviewpid=([A-Z0-9]+)/" -->');
        $output[] = ( "\n".'<!--#set var="reviewpid" value="-${1}" -->');
        $output[] = ( "\n".'<!--#set var="qs_reviewpid" value="&reviewpid=${1}" -->');
        $output[] = ( "\n".'<!--#else -->');
        $output[] = ( "\n".'<!--#set var="reviewpid" value="" -->');
        $output[] = ( "\n".'<!--#set var="qs_reviewpid" value="" -->');
        $output[] = ( "\n".'<!--#endif -->');

        $output[] = ( "\n".'<!--#if expr="${REQUEST_URI}=/reviewstars=([0-9])/" -->');
        $output[] = ( "\n".'<!--#set var="reviewstars" value="-${1}stars" -->');
        $output[] = ( "\n".'<!--#set var="qs_reviewstars" value="&reviewstars=${1}" -->');
        $output[] = ( "\n".'<!--#else -->');
        $output[] = ( "\n".'<!--#set var="reviewstars" value="" -->');
        $output[] = ( "\n".'<!--#set var="qs_reviewstars" value="" -->');
        $output[] = ( "\n".'<!--#endif -->');

        $output[] = ( "\n".'<!--#if expr="${REQUEST_URI}=/reviewsort=([a-z-]+)/" -->');
        $output[] = ( "\n".'<!--#set var="reviewsort" value="-${1}" -->');
        $output[] = ( "\n".'<!--#set var="qs_reviewsort" value="&reviewsort=${1}" -->');
        $output[] = ( "\n".'<!--#else -->');
        $output[] = ( "\n".'<!--#set var="reviewsort" value="-time-desc" -->');
        $output[] = ( "\n".'<!--#set var="qs_reviewsort" value="&reviewsort=time-desc" -->');
        $output[] = ( "\n".'<!--#endif -->');

        $output[] = ( "\n".'<!--#set var="reviewQS" value="${qs_reviewpid}${qs_reviewstars}${qs_reviewsort}" -->');

        //Filename format: reviews-PID-0stars-sort.html
        $output[] = ( "\n".'<!--#config errmsg="Sorry, but there are no reviews for these search terms." -->');
        $output[] = ( "\n".'<!--#set var="reviewsincludename" value="reviews${reviewpid}${reviewstars}${reviewsort}.html" -->');
        $output[] = ( "\n".'<!-- <!--#echo var="reviewsincludename" --> -->');
        $output[] = ( "\n".'<!--#include virtual="${reviewsincludename}" -->');

        $reviewFileArr = array_keys( $this->ReviewsMap["reviews"] ); //glob( $this->OutputRoot . "review-0*.html");
        //$reviewFileArr = str_replace( $this->OutputRoot . "review-", "", $reviewFileArr );
        //$reviewFileArr = str_replace( ".html", "", $reviewFileArr );

        //rsort( $reviewFileArr );

        $loopthrough_pid = array_merge( array(""), array_keys( $this->ReviewsMap["config"]["pid"] ) );
        $loopthrough_stars = array_merge( array(""), array_keys( $this->ReviewsMap["config"]["stars"] ) );
        $loopthrough_sort = array_merge( array_keys( $this->ReviewsMap["config"]["sort"] ) );

        if ( !$_GET["nocache"] ) {

        foreach ( $loopthrough_pid as $pid_index => $pid_val ) {
            foreach ( $loopthrough_stars as $stars_index => $stars_val ) {
                foreach ( $loopthrough_sort as $sort_index => $sort_val) {
                    $pid_val_mod = "";
                    $stars_val_mod = "";
                    $sort_val_mod = "";
                    if ( !!$pid_val ) $pid_val_mod = "-" . $pid_val;
                    if ( !!$stars_val ) $stars_val_mod = "-" . $stars_val . "stars";
                    if ( !!$sort_val ) $sort_val_mod = "-" . $sort_val;
                    $pagerFileName = "reviews". $pid_val_mod . $stars_val_mod . $sort_val_mod .".html";
                    
                    $filteredFileArr = array();

                    foreach ($reviewFileArr as $key => $rid) {
                        $isinset = true;
                        if ( !!$stars_val && $this->ReviewsMap["reviews"][$rid]["stars"] !== $stars_val ) {
                            $isinset = false;
                        }
                        if ( !!$pid_val && $this->ReviewsMap["reviews"][$rid]["pid"] !== $pid_val ) {
                            $isinset = false;
                        }
                        //Time Restrict
                        if ( $this->ReviewsMap["reviews"][$rid]["time"] < $this->truncationLimit ) {
                            $isinset = false;
                        }
                        if ( $isinset ) {
                            $filteredFileArr[] = $rid;
                        }
                    }

                    if ( !!$sort_val ) {
                        if ( strpos( $sort_val, "time" ) !== false ) {
                            $sort_by_key = "time";
                        }
                        if ( strpos( $sort_val, "help" ) !== false ) {
                            $sort_by_key = "help";
                        }
                        if ( strpos( $sort_val, "stars" ) !== false ) {
                            $sort_by_key = "stars";
                        }
                        if ( strpos( $sort_val, "asc" ) !== false ) {
                            $sort_dir = SORT_ASC;
                        } else {
                            $sort_dir = SORT_DESC;
                        }

                        $this->sort_by_key = $sort_by_key;
                        $this->sort_by_dir = $sort_dir;

                        usort( $filteredFileArr, array( $this, "sortReviewPages") );
                    }
                    $this->collectReviewsInPager( $filteredFileArr, $pagerFileName );

                }
            }
        }

        }

        foreach ($reviewFileArr as $index => $rkey) {
            //Time Restrict
            if ( $this->ReviewsMap["reviews"][$rkey]["time"] > $this->truncationLimit ) {
                //$this->AllFilesOutput[] = $this->ScriptRoot . $this->OutputRoot . $this->getFileNameFromID( $rkey );            
            }
        }
        
        $fp = fopen( $this->OutputRoot . $thisfilename, 'w');
        fwrite( $fp, implode(" ", $output) );
        fclose( $fp );
        //$this->AllFilesOutput[] = $this->ScriptRoot . $this->OutputRoot . $thisfilename;

        $this->writeRevewsFilterForm();
    }

    function writeRevewsFilterForm () {
        $thisfilename = "reviews-filter-form.html";
        $output = array();

        $output[] = ("\n\t" . '<form action="" method="GET" class="displayOptionsForm">');
        $output[] = ("\n\t" . '<div class="displayOptions">');
        $output[] = ("\n\t\t" . '<div class="displayOptionsWrap verticalGradientSmall">');
        $output[] = ("\n\t\t" . '<div class="sortby"><strong>Sort By:</strong> ');
        $output[] = ("\n\t\t\t" . '<label for="reviewsort">');
        $output[] = ("\n\t\t\t" . '<select name="reviewsort" id="reviewsort">');

        $defaultset = false;
        foreach ($this->ReviewsMap["config"]["sort"] as $key => $value) {
            if ( !$defaultset ) {
                $output[] = ("\n\t\t\t\t" . '<option value="'.$key.'" class="sort-'.$key.' sort-default default">'.$value.'</option>');
                $defaultset = true;
            } else {
                $output[] = ("\n\t\t\t\t" . '<option value="'.$key.'" class="sort-'.$key.'">'.$value.'</option>');
            }
        }

        $output[] = ("\n\t\t\t" . '</select>');
        $output[] = ("\n\t\t\t" . '</label>');
        $output[] = ("\n\t\t" . '</div>');
        $output[] = ("\n\t\t" . '<div class="filterby"><strong>Filter By: </strong>');
        $output[] = ("\n\t\t\t" . '<label for="reviewpid">Plans: ');
        $output[] = ("\n\t\t\t" . '<select name="reviewpid" id="reviewpid">'); 

            $output[] = ("\n\t\t\t\t" . '<option value="" class="filter-default default" selected="selected">'.$this->products{ $this->product_meta_key }["metapidfilter"].'</option>');

        $pidslist = explode(",", $this->products{ $this->product_meta_key }["productids"]);
        foreach ($pidslist as $index => $key) {
            if ( !!$this->ReviewsMap["config"]["pidfilter"]["$key"] ) {
                $output[] = ("\n\t\t\t\t" . '<option value="'.$key.'" class="filter-'.$key.'">'.$this->ReviewsMap["config"]["pidfilter"]["$key"].'</option>');
            }
        }

        $output[] = ("\n\t\t\t" . '</select>');
        $output[] = ("\n\t\t\t" . '</label>');
        $output[] = ("\n\t\t\t" . '<label for="reviewstars">Ratings: ');
        $output[] = ("\n\t\t\t" . '<select name="reviewstars" id="reviewstars">');

            $output[] = ("\n\t\t\t\t" . '<option value="" class="filter-default default" selected="selected">All Ratings</option>');
        foreach ($this->ReviewsMap["config"]["stars"] as $key => $value) {
            $output[] = ("\n\t\t\t\t" . '<option value="'.$key.'" class="filter-star'.$key.'">'.$value.'</option>');
        }

        $output[] = ("\n\t\t\t" . '</select>');
        $output[] = ("\n\t\t\t" . '</label>');
        $output[] = ("\n\t\t" . '</div>');
        $output[] = ("\n\t\t" . '<div class="submitWrap"><input type="submit" /></div>');
        $output[] = ("\n\t\t" . '<div class="all-reviews-link"><a href="?reviewspage=00000">Show All Reviews</a></div>');
        $output[] = ("\n\t\t" . '</div>'); 
        $output[] = ("\n\t\t" . '<span class="roundcorner rcLeft rcTop outsideW">&nbsp;</span> <span class="roundcorner rcLeft rcBottom outsideW">&nbsp;</span> <span class="roundcorner rcRight rcTop outsideW">&nbsp;</span> <span class="roundcorner rcRight rcBottom outsideW">&nbsp;</span>'); 
        $output[] = ("\n\t" . '</div>'); 
        $output[] = ("\n\t" . '</form>'); 

        $fp = fopen( $this->OutputRoot . $thisfilename, 'w');
        fwrite( $fp, implode(" ", $output) );
        fclose( $fp );
        //$this->AllFilesOutput[] = $this->ScriptRoot . $this->OutputRoot . $thisfilename;
    }

    function sortReviewPages($a, $b) {
        $val = 0;
        if ( $this->ReviewsMap["reviews"][ $a ][ $this->sort_by_key ] > $this->ReviewsMap["reviews"][ $b ][ $this->sort_by_key ] ) {
            $val = 1;
        }
        if ( $this->ReviewsMap["reviews"][ $a ][ $this->sort_by_key ] < $this->ReviewsMap["reviews"][ $b ][ $this->sort_by_key ] ) {
            $val = -1;
        }
        if ( $val === 0 ) {
            if ( $this->ReviewsMap["reviews"][ $a ][ "time" ] > $this->ReviewsMap["reviews"][ $b ][ "time" ] ) {
                $val = 1;
            }
            if ( $this->ReviewsMap["reviews"][ $a ][ "time" ] < $this->ReviewsMap["reviews"][ $b ][ "time" ] ) {
                $val = -1;
            }
        }

        if ( $this->sort_by_dir == SORT_DESC ) {
            $val = $val * -1;
        }
        return $val;
    }    

    function collectReviewsInPager ( $reviewFileArr, $pagefilename ) {
        $reviewsPerPage = 6;

        $pagenum = "00000";
        $lastpagenum = null;

        $reviewcount = 0;
        $pageoutput = array();
        $pageoutput[] = ( "<!-- $pagefilename --> \n");
        foreach ($reviewFileArr as $index => $rkey) {
            if ( ceil( $reviewcount / $reviewsPerPage ) == 0 ) {
                $pageoutput[] = ( "\n\n".'<!--#if expr="$reviewpage='.$pagenum.'" -->'."\n");
            }
            //$pageoutput[] = ( "<!-- REVIEW ID $rkey --> \n");
            $pageoutput[] = ( '<!--#include virtual="'. $this->ReviewsMap["reviews"]["$rkey"]["year"] . "/" . $this->getFileNameFromID( $rkey ).'" -->'."\n");
            if ( $reviewcount % $reviewsPerPage == 0 ) {
                $nextpagenum = substr( "00000" .ceil( $reviewcount / $reviewsPerPage ), -5);
                if ( $reviewcount > 0 ) {

                    $pageoutput[] = ( "\n".'<p class="moreReviewsLink edgeShadowGradientTop">');
                    if ( !!$lastpagenum ) {
                        $pageoutput[] = ( '<a href="<!--#echo var="reviewPageLocation"-->?reviewpage='.$lastpagenum.'<!--#echo var="reviewQS"-->" class="previousReviews glossyButtonBG" rel="prev">Load Previous Reviews</a>' );
                    }
                    if ( !!$nextpagenum ) {
                        $pageoutput[] = ( '<a href="<!--#echo var="reviewPageLocation"-->?reviewpage='.$nextpagenum.'<!--#echo var="reviewQS"-->" class="moreReviews glossyButtonBG querylink" clicktrack="<!--#echo var="moreReviewsClicktrack"-->" rel="next">Load More Reviews</a>' );
                    }
                    $pageoutput[] = ( '</p>'."\n\n");
                    $lastpagenum = $pagenum; 
                }
                $pagenum = $nextpagenum;
                if ( ceil( $reviewcount / $reviewsPerPage ) > 0 ) {
                    $pageoutput[] = ( '<!--#elif expr="$reviewpage='.$pagenum.'" -->'."\n");
                }
            }
            $reviewcount++;           
        }
        $pageoutput[] = ("\n".'<p class="moreReviewsLink edgeShadowGradientTop endOfReviewsPager">&nbsp;</p>'."\n");        
        $pageoutput[] = ( '<!--#endif -->'."\n");
        $this->writeReviewsSubPager( $pageoutput, $pagefilename );        
    }

    function writeReviewsSubPager ( $pageoutput, $pagefilename ) {

        $fp = fopen( $this->OutputRoot . $pagefilename, 'w');
        fwrite( $fp, implode(" ", $pageoutput) );
        fclose( $fp );

        //$this->AllFilesOutput[] = $this->ScriptRoot . $this->OutputRoot . $pagefilename;

    }
    function writeReviewMapJSON () {

        $fp = fopen( $this->OutputRoot . $this->aux_file_jsonmap_all, 'w');
        fwrite( $fp, json_encode($this->ReviewsMap) );
        fclose( $fp );

        $reviewMapJSON = $this->ReviewsMap;
        $truncRevewMap = $this->reviewMapTruncation( $reviewMapJSON );
        $fp = fopen( $this->OutputRoot . $this->aux_file_jsonmap, 'w');
        fwrite( $fp, json_encode( $truncRevewMap ) );
        fclose( $fp );

        //$this->AllFilesOutput[] = $this->ScriptRoot . $this->OutputRoot . $this->aux_file_jsonmap;
        //$this->AllFilesOutput[] = $this->ScriptRoot . $this->OutputRoot . $this->aux_file_jsonmap_all;
    }
    function reviewMapTruncation ( $reviewMapJSON ) {
        $maxlength = 500;

        $quotas = array(
            '5stars' => 100, 
            '4stars' => 100, 
            '3stars' => 100, 
            '2stars' => 50, 
            '1stars' => 50 
        );
        foreach ( $reviewMapJSON["config"]["pid"] as $pidname => $pidfulltitle) {
            $quotas["$pidname"] = ceil($maxlength/count($reviewMapJSON["config"]["pid"])/50)*50;
        }

        $reviewsList = $reviewMapJSON["reviews"];

        if (  count( $reviewsList ) < $maxlength ) {
            return $reviewMapJSON;
        }
        
        $truncatedReviewsList = array();
        $deferredReviewsList = array();
        foreach ($reviewsList as $key => $reviewobj) {
            $isUnderStarsQuota = !!($quotas[ $reviewobj["stars"]."stars" ]);
            $isUnderPIDQuota = !!($quotas[ $reviewobj["pid"] ]);
            if ( $isUnderStarsQuota && $isUnderPIDQuota ) {
                //add to truncated
                $quotas[ $reviewobj["stars"]."stars" ]--;
                $quotas[ $reviewobj["pid"] ]--;
                $truncatedReviewsList[$rid] = $reviewobj;

                if ( count($truncatedReviewsList) > $maxlength ) {
                    break;
                }   

            } else { 
                //add to deferred
                $deferredReviewsList[$rid] = $reviewobj;
            }
        }
        if ( count($truncatedReviewsList) < $maxlength  ) {
            foreach ( $deferredReviewsList as $rid => $reviewobj ) {
                $truncatedReviewsList[$rid] = $reviewobj;
                if ( count($truncatedReviewsList) > $maxlength ) {
                    break;
                }                   
            }
        }

        $reviewMapJSON["reviews"] = $truncatedReviewsList;
        return $reviewMapJSON;
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
        $objects = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($this->OutputRoot), RecursiveIteratorIterator::SELF_FIRST);
        foreach($objects as $name => $object){
            //var_dump( $object );
            if ( preg_match('/\.html|\.json/', $name)  ) {
                echo $this->outputFetchRoot . str_replace("\n", "", $name) . "\n";
            }
        }
        //exit();

        //foreach (//$this->AllFilesOutput as $key => $value) {
            //echo $this->outputFetchRoot.str_replace("./", "", $value)."\n";
        //}
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

header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + 1));
        

$RatingsAndReviews = new RatingsAndReviews( "prod", $ids );

//include_once("./prism-top-snippet.php");
//$RatingsAndReviews->outputHTML();
//include_once("./prism-btm-snippet.php");


$RatingsAndReviews->writeFiles();

