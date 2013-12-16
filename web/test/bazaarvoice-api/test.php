<?php 

class RatingsAndReviews {
    var $prod_apikey = "tyuzag9qhjbc7gddgaez2j2yu"; //PRODUCTION KEY
    var $prod_apiurl = "http://reviews.centurylink.com/data/"; //PRODUCTION URL

    var $staging_apikey = "z4qvcxmw4dzwemgwxx43ehfc"; //STAGING KEY
    var $staging_apiurl = "http://reviews.centurylink.com/bvstaging/data/"; //STAGING URL

    var $reviews_query = array( 
        "ApiVersion" => 5.4, 
        "displaycode" => "7108prism",
        "passKey" => "", 
        "Sort" => "submissiontime:desc",
        "Limit" => 100
    );
    var $statistics_query = array( 
        "ApiVersion" => 5.4, 
        "displaycode" => "7108prism",
        "passKey" => "",
        "stats" => "Reviews"
    );
    var $products_query = array( 
        "ApiVersion" => 5.4, 
        "displaycode" => "7108prism",
        "passKey" => "",
        "stats" => "Reviews"
    );

    var $filters = array(
        "ProductId:TV0100,TV0200,TV0300,TV0700"
        //"Rating:3,4,5"
    );

    var $reviewWeight = array( 5, 5, 30, 40, 40 );
    var $visibleReviewStats = array(
        '1Star' => 0,
        '2Star' => 0,
        '3Star' => 0,
        '4Star' => 0,
        '5Star' => 0
    );


    var $productMeta = array(   
        'TV0100' => array(
            'Name' => "Prism<sup>&trade;</sup> Essential"
        ), 
        'TV0200' => array(
            'Name' => "Prism<sup>&trade;</sup> Complete"
        ), 
        'TV0700' => array(
            'Name' => "Prism<sup>&trade;</sup> Preferred"
        ), 
        'TV0300' => array(
            'Name' => "Prism<sup>&trade;</sup> Premium"
        ), 
        'RP1000' => array(
            'Name' => "High-Speed Internet<sup>&reg;</sup> 40Mbps"
        ), 
        'RP0900' => array(
            'Name' => "High-Speed Internet<sup>&reg;</sup> 35Mbps"
        ), 
        'RP0800' => array(
            'Name' => "High-Speed Internet<sup>&reg;</sup> 20Mbps"
        ), 
        'RP0700' => array(
            'Name' => "High-Speed Internet<sup>&reg;</sup> 15Mbps"
        )
    );

    var $DATA;
    var $ReviewsHTML = array();

    function RatingsAndReviews( $datatarget, $apitarget ) 
    {
        $rrquery = $this->getQuerySpecifics( $datatarget, $apitarget );     
        $reviewsRawJSON = $this->makeAPIRequest( ( $this->{ $datatarget . "_apiurl"} ), $apitarget, $this->{ $apitarget . "_query" } );      
        $this->DATA = json_decode( $reviewsRawJSON, true );
        $this->processData( $this->DATA );

    }

    function getQuerySpecifics ( $datatarget, $apitarget ) 
    {
        $this->{ $apitarget . "_query" }["passKey"] = $this->{ $datatarget ."_apikey"};
        $params = filter_input_array(INPUT_GET, FILTER_SANITIZE_STRING);
        return $params;
    }

    function buildFilters ($apitarget) {
        if ( $apitarget == "reviews" || $apitarget == "statistics" ) {
            foreach ($this->filters as $index => $filtervalue) {
                $out .= ("&Filter=".$filtervalue);
            }
        } else {
            $out = "";
        }
        return $out;
    }

    function makeAPIRequest($url, $apitarget, array $post = NULL, array $options = array()) 
    {
        $curlURLOPT = $url . $apitarget. ".json?" . http_build_query($post) . $this->buildFilters($apitarget);

        $defaults = array( 
            //CURLOPT_POST => 0, 
            CURLOPT_HEADER => 0, 
            CURLOPT_URL => $curlURLOPT, 
            CURLOPT_FRESH_CONNECT => 1, 
            CURLOPT_RETURNTRANSFER => 1, 
            CURLOPT_FORBID_REUSE => 1, 
            CURLOPT_TIMEOUT => 10, 
            //CURLOPT_POSTFIELDS => $post
        ); 

        $ch = curl_init(); 
        curl_setopt_array($ch, ($options + $defaults)); 
        if( ! $result = curl_exec($ch)) 
        { 
            trigger_error(curl_error($ch)); 
        } 
        curl_close($ch); 
        return $result; 
        //echo $curlURLOPT; 
        //exit();
    } 

    function processData ( $dataArr ) {
        $results = $dataArr["Results"];
        foreach ($results as $key => $dataobj) {
            $reviewData = $this->outputReviewTemplate( $dataobj );
            if ( !!$reviewData ) {
                $this->ReviewsHTML[] = $reviewData;
            }
        }
    }

    function outputReviewTemplate ( $dataobj ) {
        //REVIEW WEIGHTING SYSTEM
        $reviewkey_int = intval($dataobj["Rating"])-1;
        $this->reviewWeight[ $reviewkey_int ]--;
        if ( $this->reviewWeight[ $reviewkey_int ] < 0 ) {
            return false;
        }
        $this->visibleReviewStats[ ($reviewkey_int+1)."Star" ] += 1;
        

        //CREATE REVIEW HTML
        $output = array();
        array_push($output, ("\n\t" . '<div class="review">') );


        array_push($output, ("\n\t\t" . '<div class="reviewStats">') );
        array_push($output, ("\n\t\t\t" . '<p class="starRating stars'.$dataobj["Rating"].'" data-rating="'.$dataobj["Rating"].'"><span class="starRatingBlock starBG"><span class="starRatingInner starBG">'.$dataobj["Rating"].' Stars</span></span></p>') );
        array_push($output, ("\n\t\t\t" . '<div class="secondaryRatings">') );
        
        foreach ( $dataobj["SecondaryRatings"] as $ratingkey => $ratingobj) {
            array_push($output, ("\n\t\t\t\t" . '<p class="rating">') );
            array_push($output, ("\n\t\t\t\t\t" . '<span class="ratingLabel">'.$ratingobj["Label"].'</span>') );
            array_push($output, ("\n\t\t\t\t\t" . '<span class="ratingBar bar'.round( ($ratingobj["Value"]/$ratingobj["ValueRange"])*10 ).'" data-rating="'.$ratingobj["Value"].'"><span class="ratingInner">'.$ratingobj["Value"].'</span></span>') );
            array_push($output, ("\n\t\t\t\t" . '</p>') );
        }

        array_push($output, ("\n\t\t\t" . '</div>') );
        array_push($output, ("\n\t\t" . '</div>') );

        
        $meta = $this->productMeta[ $dataobj["ProductId"] ];
        $reviewDate = strtotime( $dataobj["SubmissionTime"] );
        $reviewTitle = ( !!$dataobj["Title"] ) ? htmlentities( $dataobj["Title"] ) : $dataobj["Rating"] . " Star Review for ". $meta["Name"];
        $reviewerNickname = ( !!$dataobj["UserNickname"] ) ? $dataobj["UserNickname"] : null;
        $reviewerLocation = ( !!$dataobj["UserLocation"] ) ? $dataobj["UserLocation"] : null;
        $productname = $meta["Name"];
        $reviewText = '<p>'. nl2br( htmlentities( $dataobj["ReviewText"]) ) .'</p>';

        array_push($output, ("\n\t\t" . '<div class="reviewText">') );
        array_push($output, ("\n\t\t\t" . '<div class="reviewMeta">') );
        if ( !!$reviewDate )        array_push($output, ("\n\t\t\t\t" . '<p class="reviewDate metaSmall">'.date( 'F j, Y', $reviewDate ).'</p>') );
        if ( !!$reviewTitle )       array_push($output, ("\n\t\t\t\t" . '<h4 class="reviewtitle">'.$reviewTitle.'</h4>') );
        if ( !!$reviewerNickname )  array_push($output, ("\n\t\t\t\t" . '<p class="reviewerNickname metaInline">'.$reviewerNickname.'</p>') );
        if ( !!$reviewerLocation )  array_push($output, ("\n\t\t\t\t" . '<p class="reviewerLocation metaInline">'.$reviewerLocation.'</p>') );
        if ( !!$productname )       array_push($output, ("\n\t\t\t\t" . '<p class="productname metaInline">'.$productname.'</p>') );
        array_push($output, ("\n\t\t\t" . '</div>') );
        array_push($output, ("\n\t\t\t" . '<div class="reviewBody">') );
        array_push($output, ("\n\t\t\t\t" . $reviewText) );
        array_push($output, ("\n\t\t\t" . '</div>') );
        array_push($output, ("\n\t\t" . '</div>') );


        array_push($output, ("\n\t" . '</div>') );
        return implode(" ", $output);
    }

    function outputProductTemplate () {
        
    }

    function outputHTML () {
        echo $this->outputVisibleReviewStats();
        echo implode(" \n ", $this->ReviewsHTML );
    }

    function outputVisibleReviewStats () {
        $out = "";
        $out .= $this->visibleReviewStats["1Star"] . " -- 1 Star reviews shown. <br />";
        $out .= $this->visibleReviewStats["2Star"] . " -- 2 Star reviews shown. <br />";
        $out .= $this->visibleReviewStats["3Star"] . " -- 3 Star reviews shown. <br />";
        $out .= $this->visibleReviewStats["4Star"] . " -- 4 Star reviews shown. <br />";
        $out .= $this->visibleReviewStats["5Star"] . " -- 5 Star reviews shown. <br />";
        return $out;
    }

    function writeReviewFiles () {
        foreach ( $this->ReviewsHTML as $key => $reviewstring ) {
            $fp = fopen("review-includes/review$key.html", 'w');
            fwrite($fp, $reviewstring);
            fclose($fp);
        }
    }

}
$RatingsAndReviews = new RatingsAndReviews( "prod", "reviews" );

include_once("./prism-top-snippet.php");
$RatingsAndReviews->outputHTML();
include_once("./prism-btm-snippet.php");
