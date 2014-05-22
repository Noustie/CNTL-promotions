if ( !! document.createElement('canvas').getContext && !! document.createElement('canvas').getContext('2d')) {
    //TIMELINES FOR MODERN BROWSERS
    $(function() {
        var particle = $(".particle");

        function getEachParticle() {
            particle.each(particleCoords);
        }

        function particleCoords(i, ele) {
            var rnd = Math.random();
            var fxl = $(".row.hero").width()+175;
            var txl = 150+(Math.random()*320);

            var angleDegL = Math.atan2(165 - 300, fxl - txl) * 180 / Math.PI;
            randNumLeft(i, ele, txl, fxl, angleDegL);
        }

        function randNumLeft(i, comet, txl, fxl, angleDegL) {
            TweenMax.fromTo(comet, 0.6 + (Math.random() * 1), {
                x: fxl,
                y: 165,
                rotation: angleDegL,
                opacity: 0.1,
                scaleY: 0.1
            }, {
                x: txl,
                y: 300,
                rotation: angleDegL,
                opacity: 0.6,
                scaleY: 0.5,
                ease: Power4.easeOut,
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