(function nerfConsole () {
	// Avoid 'console' errors in browsers that lack a console.
	if ( !(window.console && window.console.log) ) {
		var noop = function() {};
		var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
		var length = methods.length;
		var console = window.console = {};
		while (length--) {
			console[methods[length]] = noop;
		}
	}
})(window);
if( !!window.addEventListener ){
	window.addEventListener("load",function(){
		setTimeout(function(){ window.scrollTo(0,1) }, 1);
	});
}
function ActionDeferr (_allowDebug) {

	var actionQueue = [];
	var actionDeferr = null;
	var elementWatchList = "html,body,div,span,li,a";
	var allowDebug = _allowDebug;

	function DefferedAction ( args, callback ) {
		this.args = args;
		this.callback = callback;
		DefferedAction.prototype.execute = function () {
			if ( !!this.callback && !!this.callback.apply ) {
				this.callback.apply( window, this.args );
				!!allowDebug && !!window.console && console.log("deferred: " + callback + " -- " + this.args.join("|") );
			}
		}
	}
	function isAnythingAnimating () {
		var v = false;
		//CHECK FOR ANIMATING JQUERY ELEMENTS
		if ( !!jQuery && jQuery(elementWatchList).is(":animated") ) {
			v = true;
			return v;
		}
		return v;
	}
	function executeQueue() {
		if ( !!actionQueue.length ) {
			if( !isAnythingAnimating() ) {
				while ( !!actionQueue.length ) {
					actionQueue.pop().execute();
				}
			} else {
				if ( !!actionDeferr ) {
					clearTimeout( actionDeferr );
					actionDeferr = null;
				}
				actionDeferr = setTimeout( deferredHandle, 333 );
			}
		}
	}
	function deferredHandle () {
		actionDeferr = null;
		executeQueue();
	}
	ActionDeferr.prototype.enqueueAction = function enqueueAction( callback, args ) {
		actionQueue.push( new DefferedAction( args, callback ) );
		if ( !!actionDeferr ) {
			clearTimeout( actionDeferr );
			actionDeferr = null;
		}
		actionDeferr = setTimeout( deferredHandle, 333 );
	}
}
var Deferr = new ActionDeferr(false);
$(function () {
	if ( !!navigator.userAgent.match(/android/gi) ) {
		$(".notAndroid").removeClass("notAndroid");
	}
	var locatorRequestor = "EBIZ";
	var serviceDomain = location.protocol + "//" + location.hostname;
	var haslocation = false;

	if ( !serviceDomain.match("centurylink.com") || serviceDomain.match("staging")  ) {
		serviceDomain = location.protocol + "//" + "www.centurylink.com";
	}

	if ( !!window.initializeLocator ) {
		SORRY_URL= location.href+"#location-invalid";
		initializeLocator("EBIZ", serviceDomain);
		getProfileFromRememberMe(handleGetProfile);
		$(".zamCTAForm").live("submit", function (e) {
			e.preventDefault();
			var zipVal = +( $(this).find("input.textinput")[0].value );
			getProfileFromZip( zipVal, true, handleGetProfile);
		});
		if ( haslocation ) {
			$(".nolocation").removeClass("nolocation");
		}
	}

	function toggleFolddownZAM (e) {
		e.preventDefault();
		$(this.hash).stop(true,false).slideToggle(100, function () {
			var zamVis = $("#header-ZAM-folddown:visible").length;
			if ( zamVis > 0 ) {
				$(".toggleFoldDownZAM").hide();
			} else {
				$(".toggleFoldDownZAM").show();
			}
		});
	}


	function trackAction (qLinkName,withImpressions) {
		Deferr.enqueueAction( executeTrackAction, [qLinkName,withImpressions,this] );
	}
	function executeTrackAction (qLinkName,withImpressions,_this) {
		if(typeof withImpressions != 'undefined'){var withImpressions = false;}
		switch(typeof qLinkName) {
			case 'object':
			case 'undefined':
				qLinkName = $(_this).attr('clicktrack');
				break;
		}
		if(!(typeof s_account === "undefined"))
		{
			var s=s_gi(s_account);
			s.templtv=s.linkTrackVars;
			s.templte=s.linkTrackEvents;
			s.manageVars('clearVars');
			if(withImpressions) {
				s.linkTrackVars='eVar30,products';
				s.products=";" + qLinkName;
			} else {
				s.linkTrackVars='eVar30';
			}
			s.eVar30=qLinkName;
			s.tl(_this,'o',qLinkName);
			if(s.templtv) s.linkTrackVars=s.templtv;
			if(s.templte) s.linkTrackEvents=s.templte;
		}
	}

	var phonemap = { "Q":"18009446254", "CTL":"18882487535", "OOR": "18882487535" }
	var callclicktracks = [ "mobile|prism|top|button|call_number" , "mobile|prism|bottom|button|call_number" ];	

	function handleGetProfile( data ) {
		if ( !!data.shoppingDomain && !!phonemap[data.shoppingDomain] ) {
			var pn = phonemap[data.shoppingDomain].split("");
			var phoneReadable = pn[0] + "." + pn[1] + pn[2] + pn[3] + "." + pn[4] + pn[5] + pn[6] + "." + pn[7] + pn[8] + pn[9] + pn[10];
			var callbtn = '<div class="ctaBtnWrap"><a class="flexBtn" href="tel:+'+pn.join('')+'" clicktrack="%%%%"><span class="flex">Call '+phoneReadable+'</span></a></div>';
			$(".zamCTAForm").each( function (index, ele) {
				var _callbtn = callbtn;
				_callbtn = _callbtn.replace("%%%%",callclicktracks[index]);
				$(ele).parent().html( _callbtn );
			});
			$(".toggleFoldDownZAM").hide();
			$(".foldDownZAM ").show();
			$(".nolocation").removeClass("nolocation");
			haslocation = true;
			if ( !!window.s ) {
				s.pageName = "mobile|prism|landing";
				s.t();
			}
		} else if ( !!data.errorCode && data.errorCode == "INVALID_VALUE" ) {
			$(".validation").show();
		}
	}

	$(".mobileToggle a").live('click', function (e) {
		e.preventDefault();
		var _path = this.href;
		setTimeout( function () { location.href = _path; }, 500 );
	});
	$('a[href~="#header-ZAM-folddown"]').live('click',toggleFolddownZAM);
	$('a[clicktrack],area[clicktrack],button[clicktrack]').live('click',trackAction);

	$(".initnojs").removeClass("initnojs");	
});