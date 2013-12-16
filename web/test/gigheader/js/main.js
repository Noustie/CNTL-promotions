$(function() {

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