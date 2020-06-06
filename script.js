// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDcD4ZHxk-oaZEKVMkFT3BuyqgYVKkEATY&callback=initMap';
script.defer = true;
script.async = true;


// Attach your callback function to the `window` object
window.initMap = function() {
     shop = {lat: 6.4595445, lng: 7.4931562}
     // add a new map object
     var map = new google.maps.Map(document.getElementById("map"), {center: {lat: 6.4595445, lng: 7.4931562}, zoom: 14 });
     
     var newhaven = {lat:6.4515293, lng: 7.5122126}; 
     var bethelPlaza = {lat:6.4494885, lng: 7.490644};
     var ogbete = {lat:6.4354518, lng: 7.4826216};
     var centenaryCity = {lat:6.459964, lng: 7.548949};

     // add a new marker object
      function addMarker(coords) {
          var marker = new google.maps.Marker(
               {
                    position: coords,
                    map: map
               } 
          );    
          }

     addMarker(newhaven);
     addMarker(bethelPlaza);
     addMarker(ogbete);
     addMarker(centenaryCity);

     
};               
// Append the 'script' element to 'head'
document.head.appendChild(script);
      


