// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDcD4ZHxk-oaZEKVMkFT3BuyqgYVKkEATY&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
     var shopriteLocation = {lat: 6.4595445, lng: 7.4931562};
     var newhaven = {lat:6.4515293, lng: 7.5122126};
     var map = new google.maps.Map(document.getElementById("map"), {center: shopriteLocation, zoom: 10});
     var marker = new google.maps.Marker({position: shopriteLocation, map: map});
     var marker = new google.maps.Marker({position: newhaven, map: map});


};

// Append the 'script' element to 'head'
document.head.appendChild(script);
      


