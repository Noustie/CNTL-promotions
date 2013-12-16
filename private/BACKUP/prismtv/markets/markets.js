$(function () {
	window.marketInfo = ( !!window.marketInfo ) ? window.marketInfo : null;

	var allMarkets, marketTarget, marketGroup, MarketGroupData,
		targetingPreference = ['dma','city','state'], selectorTemp = "", selectorStack = {};

	function getTopQueryParam (key) {
		var a = location.search.slice(1).split("&"), GET = [];
		for (var i in a) { GET[a[i].split("=")[0]] = a[i].split("=")[1]; }
		return GET[key] || null;
	}
	function getMarketInfo (marketData) {
		if ( !!marketData && !!marketData.marketToSeg ) {
			if ( typeof marketInfo == "string" ) {
				marketTarget = marketData.marketToSeg[ (marketInfo).toLowerCase() ];
			} else if ( typeof marketInfo == "object" ) {
				for (var i = 0; i < targetingPreference.length; i++ ) {
					if ( !!marketInfo[ targetingPreference[i] ] && !!marketData.marketToSeg[ (marketInfo[ targetingPreference[i] ]).toLowerCase() ] ) {
						marketTarget = marketData.marketToSeg[ (marketInfo[ targetingPreference[i] ]).toLowerCase() ];
						break;
					}
				}
			}
			if ( !marketTarget ) { marketTarget = "Default";  }
			if ( !!marketTarget && marketTarget ) {
				for ( var group in marketData.marketGroups ) {
					if ( $.inArray( marketTarget, marketData.marketGroups[group] ) !== -1 ) {
						marketGroup = group;
						MarketGroupData = marketData.groupData[group];
						break;
					}
				}
			}
			
			window.MarketGroupName = group;
			window.MarketGroupData = MarketGroupData;

			$(window).trigger("market-data-loaded", [ window.MarketGroupName, window.MarketGroupData ]);
			
			if ( !!MarketGroupData ) {
				updateMarketInfo( MarketGroupData, $("#main") );
			} else {
				resortToDefault();
			}
		}
	}
	function updateMarketInfo ( context ) {
		if ( !!MarketGroupData ) {
			traverse(MarketGroupData, processDatapoint, "mkt");
			processSelectorStack( selectorStack, context );
		}
		$(".mkt").removeClass("mkt");
	}
	function traverse(o,func,stack) {
	    for (var i in o) {
	        if (!!o[i] && typeof(o[i])=="object") {
	            traverse( o[i], func, stack+" "+i);
	        } else {
	        	func.apply(this, [ i, o[i], stack+" "+i ]);  
	        }
	    }
	}
	function processDatapoint(key,value,stack) {
    	selectorStack[ stack ] = value;
	}
	function processSelectorStack(context) {
		var _sel = '';
		for ( var selector in selectorStack ) {
			//SPECIAL HANDLING FOR CERTAIN SELECTORS
			if ( selector.match("bool_") ) {
				_sel = selector.replace(/\s/gi, "_");
				_sel = _sel.replace(/mkt_/gi, "");
				_sel = _sel + "_" + selectorStack[selector];
				if ( !$("body").hasClass() ) {
					$("body").addClass(_sel);
				}
			} else if ( selector.match("max_speed") ) {
				if ( !!selectorStack[selector] ) {
					var msp = selectorStack[ selector ];
					var nsp = selectorStack[ (selector.replace("max_speed", "speed") ) ];
					_sel = "."+ selector.replace(/\s/gi, " .mkt_");
					_sel = _sel.replace(".mkt_max_speed",".mkt_speed_upgrade");
					$( _sel + " .upgrade" ).remove();

					if ( !!msp && msp != nsp ) {
						$( _sel + " .pnpSprite" ).addClass("sprite-lowspeed").removeClass("sprite-highspeed");
						var _ele = $('<p class="upgrade">Up to <span class="mkt_max_speed">' + selectorStack[selector] + '</span> Mbps available</p>');
						$( _sel ).append( _ele );
					} else if ( !!msp && msp == nsp ) {
						$( _sel + " .pnpSprite" ).addClass("sprite-highspeed").removeClass("sprite-lowspeed");
					}
				}
			} else { //DEFAULT HANDLING FOR OTHER SELECTORS
				_sel = "."+ selector.replace(/\s/gi, " .mkt_");
				$( _sel ).text( selectorStack[selector] );
			}
		}
	}
	function resortToDefault() {
		$(".mkt").removeClass("mkt");
	}
	function initializeMarkets ( marketParam ) {
		if ( !marketParam && !!getTopQueryParam("testmarket") ) {
			var _mktest = decodeURIComponent( getTopQueryParam("testmarket") )
			if ( !!_mktest.match("{") ) {
				marketInfo = eval( "(" + _mktest + ")" );
			} else {
				marketInfo = eval( "('" + _mktest + "')" );
			}
		} else if ( !!marketParam ) {
			marketInfo = marketParam;
		}
		if ( !marketInfo && !!ttPrismMarketConfig ) {
			marketInfo = ttPrismMarketConfig;
		}
		if ( !marketInfo || ( typeof marketInfo === "object" && !marketInfo.state && !marketInfo.city && !marketInfo.dma ) ) {
			resortToDefault();
			return;
		}

		if ( !allMarkets && !!marketInfo ) {
			$.ajax( {
				dataType: "json",
				global: false,
				type: 'GET',
		        url: "/prismtv/markets/markets.json",
				success: function (data, textStatus, jqXHR) {
					allMarkets = data;
					getMarketInfo(allMarkets);
				}
			});
		}
	}
	window.getTopQueryParam = getTopQueryParam;
	window.MarketGroupData = MarketGroupData;
	window.updateMarketInfo = updateMarketInfo;
	window.initializeMarkets = initializeMarkets;

	initializeMarkets();
})