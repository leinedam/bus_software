var rest_route_request = "http://207.244.95.50:28080/ariadne/thread/devices/routePoints?routeName=TestBusRoute";
var rest_stops_request = "http://207.244.95.50:28080/ariadne/thread/devices/busStops?routeName=TestBusRoute";
var prediction_request = "http://207.244.95.50:28080/ariadne/thread/devices/busStopTime?routeName=TestBusRoute&stopName=";

function initMap() {
  var roadAtlasStyles = [
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        { hue: "#ff0022" },
        { saturation: 60 },
        { lightness: -20 }
      ]
    },{
      featureType: "road.arterial",
      elementType: "all",
      stylers: [
        { hue: "#2200ff" },
        { lightness: -40 },
        { visibility: "simplified" },
        { saturation: 30 }
      ]
    },{
      featureType: "road.local",
      elementType: "all",
      stylers: [
        { hue: "#f6ff00" },
        { saturation: 50 },
        { gamma: 0.7 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { saturation: 40 },
        { lightness: 40 }
      ]
    },{
      featureType: "road.highway",
      elementType: "labels",
      stylers: [
        { visibility: "on" },
        { saturation: 98 }
      ]
    },{
      featureType: "administrative.locality",
      elementType: "labels",
      stylers: [
        { hue: "#0022ff" },
        { saturation: 50 },
        { lightness: -10 },
        { gamma: 2.50 }
      ]
    },{
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        { hue: "#ff0000" },
        { visibility: "on" },
        { lightness: -70 }
      ]
    }
  ];

  var mapOptions = {
    zoom: 15,
    center: {lat: 53.542756, lng: -113.47847},
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas', google.maps.MapTypeId.SATELLITE]
    }
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var styledMapOptions = {
    map: map,
    name: "Road Atlas"
  }

  var usRoadMapType = new google.maps.StyledMapType(
    roadAtlasStyles, styledMapOptions);

  var dotBus = new google.maps.MarkerImage('./JsMap/bus_icon.png',
    null,
    null,
    null,
    new google.maps.Size(29, 29));
  var img = './JsMap/bus_icon.png';


  var currentBus = new google.maps.Marker({
    position: new google.maps.LatLng(43.81087, -79.45524),
    map: map,
    title: "",
    icon: dotBus
  });
  xmlhttpGet(rest_route_request, function(strResponse){drawRoute(strResponse);});



  setInterval(function() {
    var myPOs = [
      [43.81087,-79.45524],
      [43.8139,-79.45475],
      [43.81762,-79.45885],
      [43.81813,-79.45188],
      [43.81804,-79.44591],
      [43.81072,-79.44389]

    ];


    var y = myPOs[Math.floor(Math.random()*myPOs.length)];


    var newLatLng = new google.maps.LatLng(y[0],y[1]);

    currentBus.setPosition(newLatLng);

  }, 1000); // we're passing x


  function updateBus(a,b){



  }
}

function xmlhttpGet(strURL, callBack) {
  var xmlHttpReq = false;
  var self = this;
  // Mozilla/Safari
  if (window.XMLHttpRequest) {
    xmlHttpReq = new XMLHttpRequest();
  }
  // IE
  else if (window.ActiveXObject) {
    xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlHttpReq.open('GET', strURL, true);
  xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlHttpReq.onreadystatechange = function() {
    if (xmlHttpReq.readyState == 4) {
      callBack(xmlHttpReq.responseText);
    }
  }
  xmlHttpReq.send();
}

function getquerystring() {
  var form     = document.forms['f1'];
  var word = form.word.value;
  qstr = 'w=' + escape(word);  // NOTE: no '?' before querystring
  return qstr;
}





function drawRoute(strResponse){
  var parsedJSON = JSON.parse(strResponse);
  map.setCenter(new google.maps.LatLng(parsedJSON.route_points[0].lat, parsedJSON.route_points[0].lng));
  for (var i=0;i<parsedJSON.route_points.length;i++) {
    var dot = new google.maps.MarkerImage('./JsMap/red-dot2.png',
      new google.maps.Size(9, 9),
      new google.maps.Point(0,0),
      new google.maps.Point(4, 4));

    var info = parsedJSON.route_points[i].lat + ', ' + parsedJSON.route_points[i].lng;

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(parsedJSON.route_points[i].lat, parsedJSON.route_points[i].lng),
      map: map,
      title: info,
      icon: dot
    });
  }

  var routePath = new google.maps.Polyline({
    path: parsedJSON.route_points,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  routePath.setMap(map);

  xmlhttpGet(rest_stops_request, function(strResponse){drawStops(strResponse);});

}

function mycallback(a,b,c,d,e){



  return function(response,status){

    var results = response.rows[0].elements;
    var distance = results[0].distance.text;
    var duration = results[0].duration.text;
    var destinationList = response.destinationAddresses;
    a(b,c,destinationList,distance,duration);



  }
}
function updateBus(){

  var dot = new google.maps.MarkerImage('./JsMap/bullturk.gif',
    new google.maps.Size(38,39),
    new google.maps.Point(0,0),
    new google.maps.Point(19, 19));


}
function drawStops(strResponse){
  var parsedJSON = JSON.parse(strResponse);

  map.setCenter(new google.maps.LatLng(parsedJSON.bus_stops[0].lat, parsedJSON.bus_stops[0].lng));



  var outputDiv = document.getElementById('output');

  for (var i=0;i<parsedJSON.bus_stops.length;i++) {


    var origin= {lat: (parsedJSON.bus_stops[6].lat), lng: (parsedJSON.bus_stops[6].lng)};
    var destiny= {lat: (parsedJSON.bus_stops[i].lat), lng: (parsedJSON.bus_stops[i].lng)};

    var currentBusName = parsedJSON.bus_stops[i].name;

    var dot = new google.maps.MarkerImage('./JsMap/bullturk.gif',
      new google.maps.Size(38,39),
      new google.maps.Point(0,0),
      new google.maps.Point(19, 19));

    var info = "<h1>" + parsedJSON.bus_stops[i].name + ":</h1><br><i> " + parsedJSON.bus_stops[i].lat + '<br>' + parsedJSON.bus_stops[i].lng + "</i>";

    console.log( parsedJSON.bus_stops[i].name + ":<br><i> " + parsedJSON.bus_stops[i].lat +
      '<br>' + parsedJSON.bus_stops[i].lng + "</i>" ) ;

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(parsedJSON.bus_stops[i].lat, parsedJSON.bus_stops[i].lng),
      map: map,
      //title: info,
      icon: dot


    });


    var service = new google.maps.DistanceMatrixService;
    service.getDistanceMatrix({
      origins: [origin],
      destinations: [destiny],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC},mycallback(attachPredictionMessage,marker, parsedJSON.bus_stops[i].name,parsedJSON.bus_stops[i].lat, parsedJSON.bus_stops[i].lng));



    service.getDistanceMatrix({
      origins: [origin],
      destinations: [destiny],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC
    }, function(response, status) {


      if (status !== google.maps.DistanceMatrixStatus.OK) {
        alert('Error was: ' + status);
      } else {
        var originList = response.originAddresses;
        var destinationList = response.destinationAddresses;

        for (var k = 0; k < originList.length; k++) {
          var results = response.rows[k].elements;
          for (var j = 0; j < results.length; j++) {


            var div = document.createElement("div");
            div.innerHTML = 'FROM: <span class="from">' +originList[k] + '</span> TO:  <span class="to">' + destinationList[j] +
              '</span></br> DISTANCE: <span class="distance">' + results[j].distance.text + '</span> ARRIVAL TIME: <span class="time">' +
              results[j].duration.text + '</span></br> _____________________________________________';
            var node = document.createTextNode('FROM: <span class="from">' +originList[k] + '</span> TO:  ' + destinationList[j] +
              '</br> DISTANCE: ' + results[j].distance.text + ' ARRIVAL TIME:  ' +
              results[j].duration.text + '</br> _____________________________________________');
            //div.appendChild(node);
            outputDiv.appendChild(div);



            /* console.log(' FROM: ' +originList[k] + ' TO:  ' + destinationList[k] +
             ' DISTANCE: ' + results[k].distance.text + ' IN:  ' + results[j].duration.text  );
             // hamCuaKhanh(maker,destinationList[k]);
             //attachPredictionMessage(marker, parsedJSON.bus_stops[i].name,parsedJSON.bus_stops[i].lat, parsedJSON.bus_stops[i].lng );
             outputDiv.innerHTML +=  ' FROM: ' +originList[k] + ' TO:  ' + destinationList[j] +
             '</br> DISTANCE: ' + results[j].distance.text + ' ARRIVAL TIME:  ' +
             results[j].duration.text + "</br> _____________________________________________" ;*/


          }
        }
        //console.log("asdfad");
        //console.log(parsedJSON.bus_stops[i].name);
        //attachPredictionMessage(marker, parsedJSON.bus_stops[i].name,parsedJSON.bus_stops[i].lat, parsedJSON.bus_stops[i].lng );
      }
    });

    //console.log(parsedJSON.bus_stops[i]);
    //attachPredictionMessage(marker, parsedJSON.bus_stops[i].name,parsedJSON.bus_stops[i].lat, parsedJSON.bus_stops[i].lng );
  }


  function attachPredictionMessage(marker, bus_stop_name, address ,distance,time ) {

    var infowindow = new google.maps.InfoWindow({

      pixelOffset: new google.maps.Size(11, 26), // Adjust to get right position of arrow
      content: "<b>"
      + bus_stop_name
      + ":</b></br>Arrival Time: <i>NO INFORMATION</i>"
    });

    marker.addListener('mouseover', function() {
      var parsedJSON = JSON.parse(strResponse);
      infowindow.setContent( "<h3>" + bus_stop_name + " </h3>address: " +address +" </br> Distance" + distance + "</br> Time:   "+time)
      infowindow.open(map, marker);
    });

    marker.addListener('mouseout', function() {
      infowindow.close(marker.get('map'), marker);
    });

  }

}
