function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        jQuery('#geo').html('no es compatible tu navegador');
    }
}
function showPosition(position) {
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    var APIlink = 'http://api.weatherapi.com/v1/current.json?key=6279fd2238c14241a47214137211505&q=';
    var linkF = APIlink + latitud + ',' + longitud;
    jQuery.getJSON(linkF,
        function (data) {
            jQuery('#geo').html(data.location.name + ', '+ data.location.region + ', ' + data.location.country + ': ' + data.current.temp_c + ' °C');
        });
}
function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }

jQuery(document).ready(function(){
    getLocation();
});

