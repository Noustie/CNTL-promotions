$(function() {
    var isSubmitted = false;
    $("form").submit(function() {
        var name = $("input#name").val();
        var streetAddress = $("input#streetAddress").val();
        var unitNumber = $("input#unitNumber").val();
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
            qa.trackAction( "ctl|rsd|emktg|offers|gigabit|form|home|submit" );
            isSubmitted = true;

            $.ajax({
                type: "POST",
                url: "inc/mailform.php",
                data: {
                    name: name,
                    streetAddress: streetAddress,
                    unitNumber: unitNumber,
                    zip: zip,
                    email: email,
                    phone: phone
                },
                success: function() {
                    $('#contact_form').html("<div id='message'></div>");
                    $('#message').html("<h2>Congratulations!</h2>").append("<p>Now you’ll be one of the first to know when CenturyLink 1-gigabit service is available in your area.</p>").hide().fadeIn(750, function() {
                        $('#message');
                    });
                    $.cookie('vegas_gpon_cookie', 'yes', { expires: 30, path: '/offers/gigabit', domain: "promotions.centurylink.com" });
                }
            });
        }
        return false;
    });

    // form show/hide
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

    // faq toggle controls
    $(".answer").hide();
    $(".answer:first").show().toggleClass('closed opened');
    $(".tog-img:first").attr('src', '/offers/gigabit/img/minus-grey.png');

    $(".faq-toggle").click(function(e) {
        if ($(this).siblings(".answer").hasClass('closed')) {
            $(this).siblings(".answer").stop(true, false).slideDown('fast', function(){}).toggleClass('opened closed');
            var imgExchange = $(".tog-img", this).attr('src') == '/offers/gigabit/img/minus-grey.png' ? '/offers/gigabit/img/green-plus.png' : '/offers/gigabit/img/minus-grey.png';
            $(".tog-img", this).attr('src', imgExchange);

        } else {

            $(this).siblings(".answer").delay(200).slideUp('fast', function(){}).toggleClass('closed opened');
            var imgExchange = $(".tog-img", this).attr('src') == '/offers/gigabit/img/green-plus.png' ? '/offers/gigabit/img/minus-grey.png' : '/offers/gigabit/img/green-plus.png';
            $(".tog-img", this).attr('src', imgExchange);
        }
        e.preventDefault();
    });

    //header animation
    var tl = new TimelineMax({repeat:-1});
    var text = $(".text1, .text2, .text3, .text4");
    var bits = $(".bitstatic");

    function randNum( bit ){
        TweenMax.fromTo(bit, 0.3+(Math.random()*0.3), {top:Math.floor(Math.random()*290) + 1, x:-500, z:-1}, {z:-1, x:1500, ease:Linear.easeNone, onComplete:randNum, onCompleteParams:[bit] }, 0);
    }

    if (!!document.createElement('canvas').getContext && !!document.createElement('canvas').getContext('2d')) {
        //TIMELINES FOR FF
        tl.staggerFromTo(text, 1, {autoAlpha:0, x: -3000}, { x:0, autoAlpha:1, ease:Power4.easeOut}, .4)
            .staggerTo(text, 20, {})
            .staggerTo(text, .5, {rotationX:360, x:2000, ease:Back.easeIn}, .2)
        
        bits.each( function (i, ele) {
            randNum(ele);
        });

    } else {
        
        //TIMELINES FOR IE 8
        tl.set(text, {alpha:1, opacity:1});
        tl.from(text, 1, {left: -3000, ease:Power4.easeOut, opacity:1, alpha:1}, .4)
            .staggerTo(text, 20, {alpha:1, opacity:1})
            // .staggerTo(text, .5, {rotationX:360, x:2000, ease:Back.easeIn}, .2)
                            
        bits.each( function (i, ele) {
            randNum(ele);
        });
    }

});