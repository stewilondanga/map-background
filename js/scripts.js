var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var position = [-1.28333, 36.81667];

function initialize() {
  var myOptions = {
    zoom: 10,
    streetViewControl: true,
    scaleControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('googlemaps'), myOptions);
  latLng = new google.maps.LatLng(position[0], position[1]);
  map.setCenter(latLng);
  marker = new google.maps.Marker({
    position: latLng,
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
