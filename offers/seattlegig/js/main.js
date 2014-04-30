if ( !!document.createElement('canvas').getContext && !!document.createElement('canvas').getContext('2d')) {
        //TIMELINES FOR MODERN BROWSERS
    $(function() {
        var mainw = $("#stars").width(),
            mainh = $("#stars").height(),
            midX = Math.floor(mainw / 2),
            midY = Math.floor(mainh / 2);

        var stage = new Kinetic.Stage({
            container: "stars",
            width: mainw,
            height: mainh
        });

        var layer = new Kinetic.Layer();
        var topLayer = new Kinetic.Layer();
        var group = new Kinetic.Group();

        var _baseRad = 2;
        var _num = 50;

        var tweens = [];
        var _tmo = null;

        // $(window).on( {
        // 	click: function (e) {
        // 		rndComet();
        // 	}
        // });

        rndComet();

        function rndComet() {
            tweenComet({
                x: /* Math.round( Math.random() )* */ mainw,
                y: Math.round((Math.random() * 250))
            });
        }

        function tweenComet(startpos) {
            var dots = group.getChildren();
            var toX = (startpos.x > 1) ? 0 : mainw;
            var toY = Math.round(Math.random() * 100) + 200 + startpos.y; //Math.round( (Math.random()*mainh) );
            var _yrnd = Math.random();
            var time = 2;

            //!! window.console && console.log(startpos, toX, toY)

            for (var i = 0; i < dots.length; i++) {
                dots[i].setX(startpos.x);
                dots[i].setY(startpos.y);
                dots[i].setOpacity(0.3);
                tweens[i] = TweenMax.to(dots[i], time, {
                    setOpacity: 0,
                    overwrite: "all",
                    setX: toX,
                    setY: toY,
                    delay: i * time * 0.0005,
                    ease: Power4.easeOut
                });
            }
            if ( !! _tmo) {
                clearTimeout(_tmo);
            }
            _tmo = setTimeout(rndComet, time * 500 + Math.floor(Math.random() * 2500));
        }

        for (i = 0; i < _num; i++) {
            var radius = _baseRad + 1 - _baseRad * (i / (_num));
    		var circle = new Kinetic.Rect({
    			x: 0,
    			y: 0,
    			width: radius,
    			height: radius,
    			fill: '#FFFFFF',
    			strokeWidth: 0
    		});
            group.add(circle);
        }
        stage.add(layer);
        layer.add(group);
        stage.add(topLayer);
        //group.setOffset(0, 0);
        TweenLite.ticker.addEventListener("tick", go);

        var lastRot = 0;
        group.setPosition(0, 0);

        function go() {
            stage.clear();
            group.draw();
            topLayer.draw();
        }

        // var tl = new TimelineMax();
        // var row = $(".row");

        //tl.staggerTo(row, 1, {opacity:1}, 0.4);
        //
        
        $('.sec1').waypoint(function() {
            $('.one').animate({
                 width: "100%"
            }, 500 );
            $('.two').animate({
                 width: "100%"
            }, 900 );
            $('.three').animate({
                 width: "100%"
            }, 1300 );
        }, { offset: 'bottom-in-view'});

    });
}