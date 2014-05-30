$(document).ready(function(){

    //header animation
    var tl = new TimelineMax({repeat:-1});
    var tl_start = new TimelineMax();
    var slide1 = $(".slide1");
    var action1all = $(".slide1 .pp").children('*');
    var slide1Titles = $(".slide1 .title1, .slide1 .title2, .slide1 .title3");
    var slide1Circles = $(".lrg-circ-s1, .md-circ-s1, .sm-circ-s1, .slide1-blue")

    var slide2 = $(".slide2");
    var action2all = $(".slide2 .pp").children('*');
    var slide2Title = $(".slide2 .title");
    var slide2Circles = $(".slide2 .lrg-circ ,.slide2 .md-circ , .slide2 .sm-circ,.slide2 .slide2-blue");


    tl_start.to(slide1, 1, {opacity:1, display:"block"})


    //modern brosers
    if (!!document.createElement('canvas').getContext && !!document.createElement('canvas').getContext('2d')) {

          //intro
        tl.from(slide1Titles, .8, {x:-1000, ease:Power1.easeOut, opacity:0})
          .from($(".slide1-pp"), 1, {x:-1000, rotationX:360, rotationZ:360, transformOrigin:"50% 50%", autoAlpha:0, scale:6, ease:Power2.easeOut}, "-=.8")

          //circles
          .staggerFrom(slide1Circles, 1, {x:-2000, opacity:0, rotationX:360, rotationZ:360, transformOrigin:"50% 50%", autoAlpha:0, scale:6, ease:Power2.easeOut}, 0.3, "-=1")

          //outro
          .to($(".slide1-pp"), .8, {x:2000, opacity:0, rotationX:360, rotationZ:360, transformOrigin:"50% 50%", autoAlpha:0, scale:0, ease:Power2.easeOut, delay:7}, "-=1")
          .staggerTo(slide1Circles, .7, {x:2000, opacity:0, rotationX:360, rotationZ:360, transformOrigin:"50% 50%", autoAlpha:0, scale:0, ease:Power2.easeOut}, 0.2, "-=1")
          .staggerTo(slide1Titles, .8, {opacity:0}, .06, "-=1")
          .to(slide1, 1, {opacity:0, display:"none"})

          //slide2 intro
          .to(slide2, 1, {opacity:1, display:"block"}, "-=1")
          .from(slide2Title, .8, {x:-1000, ease:Power1.easeOut, opacity:0})
          .from($(".slide2-pp"), 1, {x:-1000, rotationX:360, rotationZ:360, transformOrigin:"50% 50%", autoAlpha:0, scale:6, ease:Power2.easeOut}, "-=.8")

          //slide2 circles
          .staggerFrom(slide2Circles, 1, {x:-2000, opacity:0, rotationX:360, rotationZ:360, transformOrigin:"50% 50", autoAlpha:0, scale:6, ease:Power2.easeOut}, 0.3, "-=1")

          //slide2 outro
          .to($(".slide2-pp"), .8, {x:2000, opacity:0, rotationX:360, rotationZ:360, transformOrigin:"50% 50%", autoAlpha:0, scale:0, ease:Power2.easeOut, delay:7}, "-=1")
          .staggerTo(slide2Circles, .7, {x:2000, opacity:0, rotationX:360, rotationZ:360, transformOrigin:"50% 50%", autoAlpha:0, scale:0, ease:Power2.easeOut}, 0.2, "-=1")
          .staggerTo(slide2Title, .8, {opacity:0}, .06, "-=1")
          .to(slide2, 1, {opacity:0, display:"none"})

          .to(slide1, 1, {opacity:1, display:"block"}, "-=1")

    } else {

    //old broswer

          //intro
        tl.from(slide1Titles, .8, {x:-1000, ease:Power1.easeOut, opacity:0})
          .from($(".slide1-pp"), 1, {x:-1000, rotationX:360, rotationZ:360, transformOrigin:"50% 50%", autoAlpha:0, scale:6, ease:Power2.easeOut}, "-=.8")

          //circles
          .staggerFrom(slide1Circles, 1, {x:-2000, opacity:0, rotationX:360, rotationZ:360, transformOrigin:"50% 50%", autoAlpha:0, scale:6, ease:Power2.easeOut}, 0.3, "-=1")

          //outro
          .to($(".slide1-pp"), .8, {x:2000, opacity:0, rotationX:360, rotationZ:360, transformOrigin:"50% 50%", autoAlpha:0, scale:0, ease:Power2.easeOut, delay:7}, "-=1")
          .staggerTo(slide1Circles, .7, {x:2000, opacity:0, rotationX:360, rotationZ:360, transformOrigin:"50% 50%", autoAlpha:0, scale:0, ease:Power2.easeOut}, 0.2, "-=1")
          .staggerTo(slide1Titles, .8, {opacity:0}, .06, "-=1")
          .to(slide1, 1, {opacity:0, display:"none"})

          //slide2 intro
          .to(slide2, 1, {opacity:1, display:"block"}, "-=1")
          .from(slide2Title, .8, {x:-1000, ease:Power1.easeOut, opacity:0})
          .from($(".slide2-pp"), 1, {x:-1000, rotationX:360, rotationZ:360, transformOrigin:"50% 50%", autoAlpha:0, scale:6, ease:Power2.easeOut}, "-=.8")

          //slide2 circles
          .staggerFrom(slide2Circles, 1, {x:-2000, opacity:0, rotationX:360, rotationZ:360, transformOrigin:"50% 50", autoAlpha:0, scale:6, ease:Power2.easeOut}, 0.3, "-=1")

          //slide2 outro
          .to($(".slide2-pp"), .8, {x:2000, opacity:0, rotationX:360, rotationZ:360, transformOrigin:"50% 50%", autoAlpha:0, scale:0, ease:Power2.easeOut, delay:7}, "-=1")
          .staggerTo(slide2Circles, .7, {x:2000, opacity:0, rotationX:360, rotationZ:360, transformOrigin:"50% 50%", autoAlpha:0, scale:0, ease:Power2.easeOut}, 0.2, "-=1")
          .staggerTo(slide2Title, .8, {opacity:0}, .06, "-=1")
          .to(slide2, 1, {opacity:0, display:"none"})

          .to(slide1, 1, {opacity:1, display:"block"}, "-=1")
    }

});