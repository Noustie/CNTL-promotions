$(function(){

	var isSubmitted = false;
    $("form").submit(function() {
        var name = $("input#name").val();
        var streetAddress = $("input#streetAddress").val();
        var unitNumber = $("input#unitNumber").val();
        var state = $("select#state").val();
        var zip = $("input#zip").val();
        var email = $("input#email").val();
        var phone = $("input#phone").val();

        if ($("form input").hasClass('hasError')) {
            // console.log($("hasError"));
        } else {
            if (isSubmitted) {
                return false;
            }
            //tracks button click
            qa.trackAction( "ctl|rsd|emktg|offers|gigabit|modal|sign_up" );
            isSubmitted = true;

            $.ajax({
                type: "POST",
                url: this.action,
                data: {
                    name: name,
                    streetAddress: streetAddress,
                    unitNumber: unitNumber,
                    state: state,
                    zip: zip,
                    email: email,
                    phone: phone
                },
                success: function() {
                    $('#contact_form').html("<div id='message'></div>");
                    $('#message').html("<h2>Congratulations!</h2>").append("<p>Now you’ll be one of the first to know when CenturyLink up to 1-Gig service is available in your area.</p>").hide().fadeIn(750, function() {
                        $('#message');
                    });
					$('#contact_form').append("<a href='#' class='close-button'><img src='"+PATH+"img/modal-X.png'></a>");
                    $.cookie('gpon_inquiry', 'yes', { expires: 30, path: '<?php echo $path; ?>', domain: "promotions.centurylink.com" });
                }
            });
        }
        return false;
    });

    // form place holder text rig
    $("input").focus(function() {
        onInputChange(this,true);
    });
    $("input").blur(function() {
        onInputChange(this);
    });
    $("input").change(function() {
        onInputChange(this);
    });
    $("input").each(function(i,ele) {
        onInputChange(this);
    });

    function onInputChange (inputEle, forceDirty ) {
        if ( !$(inputEle).val() ) {
            $(inputEle).css("background-color", "transparent");
        }
        if ( !!$(inputEle).val() || !!forceDirty ) {
            $(inputEle).css("background-color", "#ffffff");
        }
    }

    //modal in
	$(".signupbtn").click(function(e){
		TweenMax.fromTo($("#modal"), 0.5, {display:"none", opacity:0}, {display:"block", opacity:1});
		TweenMax.fromTo($("#contact_form"), 1, {display:"none", opacity:0, rotationX:0, z:-1000}, {display:"block", opacity:1, z:0, rotationX:360, transformOrigin:"50% 50% -500", ease:Back.easeOut, easeParams:[0.6]});
		e.preventDefault();
	});

    //modal out
	$("#contact_form").on( "click", "a.close-button", function(e) {
        TweenMax.fromTo($("#contact_form"), 1, {display:"block", opacity:1, rotationX:360, z:0}, {display:"none", opacity:0, rotationX:-0, z:-1000, transformOrigin:"50% 50% -500", ease:Back.easeInOut, easeParams:[0.5]});
		TweenMax.fromTo($("#modal"), 0.8, {display:"block", opacity:1}, {display:"none", opacity:0});
		e.preventDefault();
	});
    // $(window).on( "click", "#modal", function(e) {
    //     TweenMax.fromTo($("#contact_form"), 1, {display:"block", opacity:1, rotationX:360}, {display:"none", opacity:0, rotationX:0, transformOrigin:"50% 50% -500", ease:Back.easeOut, easeParams:[0.6]});
    //     TweenMax.fromTo($("#modal"), 0.5, {display:"block", opacity:1}, {display:"none", opacity:0, delay:0.2});
    //     e.preventDefault();
    // });

});
