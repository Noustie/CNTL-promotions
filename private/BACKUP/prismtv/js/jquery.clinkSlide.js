(function applyClinkSlide ( window, $ ){

	$.fn.clinkSlide = function clinkSlide ( options ) {
		var $main = $(this);

		var settings = {
			prevBtn : '<a href="#prev" class="prev">&laquo;</a>',
			nextBtn : '<a href="#next" class="next">&raquo;</a>',
			content : ".slideContent",
			active : "sliderActive",
			item : "",
			speed : 400,
			hideSpeed : 50,
			numVisible : 3,
			itemPad : 0,
			height : 0
		}

		var sliderObj = {};

		if ( options ) {
		  $.extend( settings, options );
		}

		sliderObj.initSlider = function (objindex, obj) {
			var $this = $(obj);
			if ( $this.length > 0 && $this.children( settings.item ).length > settings.numVisible ) {
				var total = sliderObj.totalNum = $this.children( settings.item ).length;

				if ( !!!settings.height ) {
					settings.height = $this.children( settings.item ).height();
				}
				$this.css({'overflow':'hidden'}).height(settings.height);

				sliderObj.makeButton( $(settings.nextBtn), -1, $this);
				sliderObj.makeButton( $(settings.prevBtn), 1, $this);

				var inc = $this.children(settings.item).width() + settings.itemPad;
				var pos = 0;

				$this.children( settings.item ).each( function(index) {
						pos = ( ( ( (index + total) % total ) ) * inc );
						$(this).css( { left: pos+"px", top: 0, opacity:1, position:'absolute' } );
					}
				);

				$this.data( 'currentNum', 0 );
				$this.addClass( settings.active );
			}
		}
		sliderObj.makeButton = function ( btn, dir, $this ) {
			btn.data.slider = $this;
			btn.bind( "click", function (e, obj) {
				sliderObj.animate( dir, $this );
				e.preventDefault();
				return false;
			});
			$this.after(btn);
		}

		sliderObj.animate = function ( dir, $this ) {
			var s = $this;
			if ( s && dir ) {
				var inc = Math.round( $this.children(settings.item).width() + settings.itemPad );
				var incomingIndex = $this.data( 'currentNum' ) + dir;

				var totalItems = s.children( settings.item ).length-1;

				if ( incomingIndex > totalItems ) {
					incomingIndex = 0;
				} else if ( incomingIndex < 0 ) {
					incomingIndex = totalItems;
				}

				var outgoingIndex = ( (-incomingIndex-1+totalItems+totalItems) % (totalItems+1) );
				var rightHide = (settings.numVisible-1) * inc;

				s.children( settings.item ).each( function(index) {
					var offsetIndex = (incomingIndex + index) % (totalItems + 1);
					var newPos = offsetIndex * inc;
					var slideSpeed = settings.speed;

					var eleLeftPos = $(this).position().left;

					var startIndex = (incomingIndex + index) % (totalItems + 1) - dir;
					if ( startIndex > totalItems && dir < 0 ) {
						startIndex = 0;
						newPos = -inc;
						slideSpeed = settings.hideSpeed;
					}
					if ( rightHide === eleLeftPos && dir > 0 ) {
						slideSpeed = settings.hideSpeed;
					}

					var isAnimating = true;
					if ( newPos > (settings.numVisible*2*inc) ) {
						isAnimating = false;
					}

					var incomingStart = startIndex * inc;
					$(this).stop(false,false).css( { left: incomingStart } );
					if ( isAnimating ) {
						$(this).stop(false,false).css( { visible:"visible", opacity: 1 } ).animate( { left: newPos+"px" }, slideSpeed, 'swing' );
					} else {
						$(this).stop(false,false).css( { visible:"visible", opacity: 1 } ).css( { left: newPos+"px" } );
					}
				});

				$this.data( 'currentNum', incomingIndex );
			}
		}


		return $main.each( sliderObj.initSlider );
			//sliderObj.initSlider( this );
			/*
			if ( sliderObj[method] ) {
				return sliderObj[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
			} else if ( typeof method === 'object' || ! method ) {
				return sliderObj.initSlider.apply( this, arguments );
			} else {
				$.error( 'Method ' +  method + ' does not exist on jQuery.clinkSlider' );
			}
			*/
		//});
	};

})( window, jQuery );
