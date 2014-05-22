if ( !! document.createElement('canvas').getContext && !! document.createElement('canvas').getContext('2d')) {
    //TIMELINES FOR MODERN BROWSERS
    $(function() {
        var particle = $(".particle");

        function getEachParticle() {
            particle.each(particleCoords);
        }

        function particleCoords(i, ele) {
            var rnd = Math.random();
            var fxr = $(".row.hero").width();
            var txl = 0+(Math.random()* -200);
            var fyr = 0+(Math.random()* 165);
            var tyl = 250+(Math.random()* 300);

            var angleDegL = Math.atan2(fyr - tyl, fxr - txl) * 180 / Math.PI;

            randNumLeft(i, ele, txl, fxr, angleDegL, tyl, fyr);
        }

        function randNumLeft(i, comet, txl, fxr, angleDegL, tyl, fyr) {
            TweenMax.fromTo(comet, 0.6 + (Math.random() * 1), {
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

        getEachParticle();

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