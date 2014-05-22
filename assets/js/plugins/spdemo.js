var spDemoInit;

//requestAnimationFrame polyfill.
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
                                       timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }

	var sel_timeinsecs = "spd-timeinsecs",
	    sel_timeinmins = "spd-timeinmins";
	
	var demoWrap = $("#hp-spdemo"),
        downloads = $("#hp-spdemo li.spd-downloadrow"),
        timeNums = $("#hp-spdemo .spd-downloadrow span.spd-num"),
        timeType = $("#hp-spdemo .spd-downloadrow span.spd-type"),
        timeFinal = $("#hp-spdemo .spd-downloadrow small.spd-final-time"),
        graphBars = $("#hp-spdemo .spd-downloadrow div.spd-bar-holder"),
        navBtns = $("#hp-spdemo .spd-speeds a"),
        copyBlocks = $('.spd-copy');
	
	var speedData = {
	    photos: 0,
	    music: 0,
	    tvshows: 0,
	    movies: 0,
	    traveled: 0,
	    timeinc: 0.5, //Time is updated roughly 60 times a second (AKA: 0.02). This number Represents how far the ticker should go in relative time.
	    maxnum: 0
	}
	
	function runSpeedAnimation () {
	    var speedMax = 0, widPerc = 0, perc = 0, time = 0;        
	
	    downloads.each(function(index, ele) {
	        speedMax = speedData[ (graphBars[index].id.replace("bar-","")) ];
	        widPerc = speedData.traveled / speedMax;
	        perc = Math.round(widPerc*1000) / 10;
	        time = speedMax*widPerc;
	        if ( perc < 99.5 ) {
	            graphBars[index].style.width = perc + "%";
	            setTimeText( time, timeNums[index] );
	        } else {
	        	timeFinal.eq(index).hide();
	            graphBars[index].style.width = "100%";
	            setTimeText( speedMax, timeNums[index] ); 
	        }
	    });
	
	    speedData.traveled += speedData.timeinc;
	    if ( speedData.traveled <= speedData.maxnum ) {
	        window.requestAnimationFrame( runSpeedAnimation );
	    }
	}

	function setTimeText( time, timeNumEle ) {
	    var _time = time;
	    if ( time > 60 ) {
	        if ( !timeNumEle["data-minsflag"] ) {
	            timeNumEle["data-minsflag"] = 1;
	            $(timeNumEle).parent().addClass(sel_timeinmins);
	            $(timeNumEle).parent().removeClass(sel_timeinsecs);
	        }
	        _time = time / 60;
	    } else if ( time < 60 && !!timeNumEle["data-minsflag"] ) {
	        timeNumEle["data-minsflag"] = 0;
	        $(timeNumEle).parent().removeClass(sel_timeinmins);
	        $(timeNumEle).parent().addClass(sel_timeinsecs);
	    }
	    timeNumEle.innerHTML = _time.toFixed(1);
	}

	function setFinalTimeText( finaltime, finalTimeEle ) {
        var timeUnit = "sec";

        if ( finaltime > 60 ) {
            finaltime = finaltime / 60;
            timeUnit = "min";
        }
        finalTimeEle.innerHTML = "/ " + finaltime.toFixed(1) + " " + timeUnit + " total";
        $(finalTimeEle).show();
    }

	function getNewSpeedData (e) {
	    $(".selectedSpeedNav").removeClass("selectedSpeedNav");
	    $(this).parent().addClass("selectedSpeedNav");
	
	    copyBlocks.not( this.hash.replace("#","#tab-") ).stop(true,true).fadeOut(150);
	    copyBlocks.filter( this.hash.replace("#","#tab-") ).stop(true,true).fadeIn(150);
	
	    var dataTarget = ( ( "data-"+this.hash.replace("#","") ) ),
	    	maxnum = 0, mapname = null, newtime = 0;

		downloads.each( function(index, ele) {
			setTimeText( 0, timeNums[index] );
			mapname = ele.id.replace("spd-","");
			newtime = $(ele).attr( dataTarget );
			speedData[mapname] = parseFloat( newtime, 10 );
			setFinalTimeText( speedData[mapname], timeFinal[index] );
			if ( maxnum < speedData[mapname] ) {
				maxnum = speedData[mapname];
			}
        });

	    speedData.maxnum = maxnum;
	    speedData.traveled = 0;
	    window.requestAnimationFrame( runSpeedAnimation );
	    !!e && e.preventDefault();
	}

	function isElementInViewport(el) {
	    var rect = el.getBoundingClientRect();
	    return (
	        rect.top >= 0 &&
	        rect.left >= 0 &&
	        rect.bottom <= (window.innerHeight || $(window).height() ) &&
	        rect.right <= (window.innerWidth || $(window).width() )
	    );
	}

	function proxyInitDelay() {
	    setTimeout( function () { $.proxy( getNewSpeedData, navBtns[0] )() }, 300 );
	}

	function travelingInterval () {
        speedData.traveled += speedData.timeinc;
    }

	spDemoInit = function()
	{
		setInterval( travelingInterval, 16 );
		navBtns.click( getNewSpeedData );
		copyBlocks.css({visibility: "visible"}).fadeOut(0);
		
		if ( !isElementInViewport( $("#hp-downloadables")[0] ) ) {
		    function handleWindowScroll () { 
		        if ( !!isElementInViewport( $("#hp-downloadables")[0] ) ) {
		            proxyInitDelay();
		            $(window).unbind( "scroll", handleWindowScroll );
		        }
		    }
		    $(window).bind( "scroll", handleWindowScroll );
		} else {
		    proxyInitDelay();
		}
	};

})();

