$(function(){

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

    $( ".faq-toggle" ).mouseenter(function() {
            TweenMax.to($( ".tog-img-hover:first", this ), 0, {display:"block"});
        })
        .mouseleave(function() {
            TweenMax.to($( ".tog-img-hover:first", this ), 0, {display:"none"});
    });


});