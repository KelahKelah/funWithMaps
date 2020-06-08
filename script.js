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
     
var marker = [
     {
          coords: {lat:6.4515293, lng: 7.5122126},
          content: '<h2>Shoprite</h2>',
          map: map
     },
     {
          coords: {lat:6.4494885, lng: 7.490644},
          content: '<h2>Ogbete</h2>',
          map: map
     },
     {
          coords: {lat:6.4354518, lng: 7.4826216},
          content: '<h2>Centenary City</h2>',
          map: map
     },
     {
          coords: {lat:6.459964, lng: 7.548949},
          content: '<h2>Bethel Plaza</h2>',
          map: map
     },
     {
          coords: {lat:6.4553312, lng: 7.5021473},
          content: '<h2>Elim Plaza</h2>',
          map: map
     }
     
]
     // loop through markers
     for(i=0; i< marker.length; i++) {
          addMarker(marker[i]); 
     }   
          // add a new marker object
      function addMarker(props) {
           var marker = new google.maps.Marker({
                position:props.coords, 
                map: map,
                content: props.infoWindow,
               //  iconImage: 'https://developers.google.com/maps/documentation/javascript/examples'
               });

               // if(iconImage) {
               //      marker.setIcon(iconImage)
               // }
          
               if(props.content) {
                    var infoWindow = new google.maps.InfoWindow(
                         {content: props.content }
                    );
                    marker.addListener('click', function(event) {
                         infoWindow.open(map, marker);
                    })
                    console.log('my event', event)
               }
     }
     
};               
// Append the 'script' element to 'head'
document.head.appendChild(script);
      
