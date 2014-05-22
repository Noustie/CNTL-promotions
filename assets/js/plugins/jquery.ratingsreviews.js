
   var myDomain = document.domain;
   var myURL = "reviews.centurylink.com";
   document.domain = "centurylink.com";
   if (SERVER_TYPE=='DEV' || SERVER_TYPE=='TEST') {
	myURL = "reviews.centurylink.com/bvstaging";
   } else{
    myURL = "reviews.centurylink.com";
   }
   //1.5=RP0100, 7=RP0400, 12=RP0600, 20=RP0800 40=RP1000
   //implement bizarrevoice methods
   
   function BVHandleSummaryResults(jsonData){

    var reviewsSummaryContent = document.getElementById('ReviewsSummaryContent_' + jsonData.subjectID);
    if(reviewsSummaryContent) {
     if(jsonData.totalReviews > 0 && jsonData.reviewsUrl.length > 0) {
      var readReviewStr = "See all customer reviews:";
      var reviewStars=jsonData.averageRating.toFixed(1);
      var grayStars=(5-Math.ceil(reviewStars));
      var fractionStar=reviewStars-Math.floor(reviewStars);
      fractionStar=(fractionStar.toFixed(1))*10;
      var wholeStars=parseInt(reviewStars);
      //alert("reviewStars" +reviewStars +" grayStars " +grayStars + " fractionStar " +fractionStar + " wholeStars "+ wholeStars);
      var speedUrl;
      var speed;
      switch(jsonData.subjectID){
        case "RP0100":
         speed="1.5";
        break;
        case "RP0400":
         speed="7";
        break;
        case "RP0600":
         speed="12";
        break;
        case "RP0800":
         speed="20";
        break;
        case "RP1000":
        default:
         speed="40"; 
        break;
      }
	  speedUrl=ctl_url+"/assets/popups/ratings-reviews.html?prod="+jsonData.subjectID;
       reviewsSummaryContent.innerHTML+="<img src='/assets/images/templates/rating-"+wholeStars+"_"+fractionStar+".gif' alt='("+jsonData.averageRating.toFixed(2)+" stars)' />";
      reviewsSummaryContent.innerHTML += "<br /><br /><a class=\"review_link\" id=\"review_" + speed +"\" href=\"javascript:void window.open('"+speedUrl+"', 'reviews','height=550,width=430,top=200,left=300,scrollbars=yes');\" onClick=\"trackClick('res|pre_iap_summary|ratings_reviews_tab|"+speed+"mbps');\">"+readReviewStr+"</a>";
      //reviewsSummaryContent.innerHTML += readReviewStr.link(jsonData.reviewsUrl);
     }
   else{
      reviewsSummaryContent.innerHTML+="<img src="+q_url+"'/assets/images/templates/rating_gray_star.gif' /><img src="+q_url+"'/assets/images/templates/rating_gray_star.gif' /><img src="+q_url+"'/assets/images/templates/rating_gray_star.gif' /><img src="+q_url+"'/assets/images/templates/rating_gray_star.gif' /><img src="+q_url+"'/assets/images/templates/rating_gray_star.gif' /><br /> <br />Reviews coming soon";
     }
   if(jsonData.totalQuestions > 0 && jsonData.questionsUrl.length > 0) {
      var readQAStr = "Read " + jsonData.totalQuestions + " Questions and " +
      jsonData.totalAnswers + " Answers";
      reviewsSummaryContent.innerHTML += "<br />" + readQAStr.link(jsonData.questionsUrl);
     }
    }
   }
