if ( !! document.createElement('canvas').getContext && !! document.createElement('canvas').getContext('2d')) {
    //TIMELINES FOR MODERN BROWSERS
    $(function() {
        var particle = $(".particle");

        function particleCoords(i, ele) {
            var rnd = Math.random();
            var fxr = $(".row.hero").width()-175;
            var txl = 0 + (Math.random() * -200);
            var fyr = 0 + (Math.random() * 165);
            var tyl = 200 + (Math.random() * 250);

            var angleDegL = Math.atan2(fyr - tyl, fxr - txl) * 180 / Math.PI;

            randNumLeft(i, ele, txl, fxr, angleDegL, tyl, fyr);
        }

        function randNumLeft(i, comet, txl, fxr, angleDegL, tyl, fyr) {
            TweenMax.fromTo(comet, 2, {
                x: fxr,
                y: fyr,
                rotation: angleDegL,
                opacity: 0.6,
                scaleY: 0.6
            }, {
                x: txl,
                y: tyl,
                rotation: angleDegL,
                opacity: 0,
                scaleY: 0,
                ease: Power4.easeOut,
                delay: 3,
                onComplete: particleCoords,
                onCompleteParams: [i, comet]
            });
        }

        particleCoords(0, particle[0]);

        $('.sec1').waypoint(function() {
            $('.one').animate({
                width: "100%"
            }, 500);
            $('.two').animate({
                width: "100%"
            }, 900);
            $('.three').animate({
                width: "100%"
            }, 1300);
        }, {
            offset: 'bottom-in-view'
        });

    });
}