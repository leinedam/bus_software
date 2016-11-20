/**
 * Created by Madeleine on 2016-11-19. , -113.650529
 */

/** USE   jQuery.getJSON( url [, data ] [, success ] )
 *
 * FOR REST API CALLS
 *
 * ALSO NEEDED: calculate time of arrival
 */

function initMap() {
  var chicago = {lat: 53.554025659, lng: -113.473179333};
  var indianapolis = {lat: 39.79, lng: -123.473179333};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: chicago,
    scrollwheel: false,
    zoom: 7
  });

  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });

  // Set destination, origin and travel mode.
  var request = {
    destination: indianapolis,
    origin: chicago,
    travelMode: 'DRIVING'
  };

  // Pass the directions request to the directions service.
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == 'OK') {
      // Display the route on the map.
      directionsDisplay.setDirections(response);
    }
  });
}
