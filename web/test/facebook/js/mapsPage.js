(function mapsPage (window) {
	var $ = window.jQuery,
		map = null,
		geocoder = new google.maps.Geocoder(),
		directionsDisplay = new google.maps.DirectionsRenderer({ draggable: false, suppressMarkers: true }),
		directionsService = new google.maps.DirectionsService(),
		currentOrigin = new google.maps.Marker({ position: new google.maps.LatLng( 36.107958, -115.172816 ), draggable: true }),
		storeIcon = 'images/logo-map.png',
		locs = [
			new google.maps.Marker({ position: new google.maps.LatLng( 36.201576, -115.242285 ), icon: storeIcon }),
			new google.maps.Marker({ position: new google.maps.LatLng( 36.20001,  -115.117557 ), icon: storeIcon }),
			new google.maps.Marker({ position: new google.maps.LatLng( 36.100932, -115.297268 ), icon: storeIcon }),
			new google.maps.Marker({ position: new google.maps.LatLng( 36.100131, -115.120617 ), icon: storeIcon }),
			new google.maps.Marker({ position: new google.maps.LatLng( 36.063712, -115.043117 ), icon: storeIcon }),
			new google.maps.Marker({ position: new google.maps.LatLng( 36.012294, -115.118887 ), icon: storeIcon })
		],
		mapOptions = {
			zoom: 12,
			center: currentOrigin.position,
			mapTypeControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		},
		recenterBounds = false,
		currentDestination = null,
		mapBounds = null;

	var init = function () {
		map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

		directionsDisplay.setMap(map);
	    directionsDisplay.setPanel(document.getElementById("directionsPanel"));

		currentOrigin.setMap(map);
		google.maps.event.addListener(currentOrigin, 'dragend', function() {
			currentDestination = findClosestStore();
			calcRoute();
		});

		for ( var i = 0, len = locs.length; i < len; i++ ) {
			locs[i].setMap(map);
			google.maps.event.addListener(locs[i], 'click', function(event) {
				currentDestination = this;
				calcRoute();
			});
		}

		google.maps.event.addListener(map, 'idle', function () {
			if ( recenterBounds && !!directionsDisplay && !!directionsDisplay.getDirections() && !!directionsDisplay.getDirections().routes[0] ) {
				var chngCenter = directionsDisplay.getDirections().routes[0].bounds;
				map.fitBounds( chngCenter );
				map.panToBounds( chngCenter );
				recenterBounds = false;
			}
		});

		$(window).resize( function () {
			recenterBounds = true;
			google.maps.event.trigger(map, 'resize');
		});

		initForm();
	};

	var initForm = function () {
		$('#formAddress').bind( 'submit', function (e) {
			var search = $('#myAddress').get(0).value;
			if ( !!search ) {
				submitAddressRequest(search);
			}
			e.preventDefault();
		});

		$('.printBtn').live('click', readyPrintPage );
		$(".backToMap").live('click', backToMapPage );

		if ( window.self.location.hash.match('address') ) {
			var addressVar = String(decodeURIComponent(window.self.location.hash)).replace('address=', '').replace('#','');
			$('#myAddress').attr('value', addressVar);
			$('#formAddress').trigger('submit');
		}
	};

	var readyPrintPage = function (e) {
		e.preventDefault();
		$('body').addClass('printPage');
		recenterBounds = true;
		for ( var i = 0, len = locs.length; i < len; i++ ) {
			if ( locs[i] != currentDestination ) {
				locs[i].setVisible(false);
			}
		}
		google.maps.event.trigger(map, 'resize');
	};

	var backToMapPage = function (e) {
		e.preventDefault();
		$('body').removeClass('printPage');
		for ( var i = 0, len = locs.length; i < len; i++ ) {
			locs[i].setVisible(true);
		}
		recenterBounds = true;
		google.maps.event.trigger(map, 'resize');
	};

	var submitAddressRequest = function (newaddress) {
		if ( !!!mapBounds ) {
			mapBounds = map.getBounds();
		}
		var geocodeOpts = { 'address':newaddress, 'bounds':mapBounds };

		geocoder.geocode( geocodeOpts, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				window.self.location.hash = encodeURIComponent("address="+newaddress);
				addressDataReady( results[0] );
			} else {
				$('#myAddress').attr('value', 'The address you entered is not recognized. Please enter a vaild address.');
			}
		});
	};

	var serialize = function(obj, prefix) {
        var str = [];
        for(var p in obj) {
            var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
            str.push(typeof v == "object" ?
                serialize(v, k) :
                encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
        return str.join("&");
    }


	var addressDataReady = function(data) {
		if ( !!data && !!data.geometry && !!data.geometry.location ) {
			currentOrigin.setPosition( data.geometry.location );
			currentDestination = findClosestStore();
			calcRoute();
		}
	};

	var calcRoute = function () {
		var request = {
			origin: currentOrigin.position,
			destination: currentDestination.position,
			travelMode: google.maps.DirectionsTravelMode.DRIVING
		};
		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
				$('body').addClass('routeSelected');
				recenterBounds = true;
				google.maps.event.trigger(map, 'resize');
				if ( !!response.routes[0] && !!response.routes[0].legs[0] && !!response.routes[0].legs[0].start_address ) {
					$('#myAddress').attr('value', response.routes[0].legs[0].start_address);
				}
			}
		});
	}

	var rad = function (x) { return x*Math.PI/180; }
	var findClosestStore = function () {
		var lat = currentOrigin.position.lat();
		var lng = currentOrigin.position.lng();
		var R = 6371;
		var distances = [];
		var closest = -1;
		for ( var i = 0, len = locs.length; i < len; i++ ) {
			var mlat = locs[i].position.lat();
			var mlng = locs[i].position.lng();
			var dLat  = rad(mlat - lat);
			var dLong = rad(mlng - lng);
			var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
			var d = R * c;
			distances[i] = d;
			if ( closest == -1 || d < distances[closest] ) {
				closest = i;
			}
		}

		return locs[closest];
	}
	var computeTotalDistance = function (result) {
		var total = 0;
		var myroute = result.routes[0];
		for (i = 0; i < myroute.legs.length; i++) {
			total += myroute.legs[i].distance.value;
		}
		total = total / 1000.
		document.getElementById("total").innerHTML = total + " km";
	}

	$(window).load( init );
})(window);
