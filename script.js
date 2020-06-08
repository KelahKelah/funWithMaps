// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDcD4ZHxk-oaZEKVMkFT3BuyqgYVKkEATY&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
     shop = {lat: 6.4595445, lng: 7.4931562}
     // add a new map object
     var map = new google.maps.Map(document.getElementById("map"), {center: {lat: 6.4595445, lng: 7.4931562}, zoom: 12 });
     
var marker = [
     {
          coords: {lat:6.4595445, lng: 7.4931562},
          content: '<h2>BS001</h2><p>Shoprite</p>',
          map: map
     },
     {
          coords: {lat:6.4354518, lng: 7.4826216},
          // content: '<h2>BS002</h2><p>Ogbete</p>',
          map: map
     },
     {
          coords: {lat:6.3908948, lng: 7.5318491}, 
          content: '<h2>BS003</h2><p>Centenary City</p>',
          map: map
     },
     {
          coords: {lat:6.4494885, lng: 7.490644}, 
          content: '<h2>BS004</h2><p>Bethel Plaza</p>',
          map: map
     },
     {
          coords: {lat:6.4553312, lng: 7.5021473},
          content: '<h2>BS005</h2><p>Elim Plaza</p>',
          map: map
     }
     
]
     // loop through marker array
     for(i = 0; i < marker.length; i++) {
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

               // Checking  for content
               if(props.content) {
                    var infoWindow = new google.maps.InfoWindow(
                         {content: props.content }
                    );
                    marker.addListener('click', function(event) {
                         infoWindow.open(map, marker);
                         // console.log('my event', event)

                    })
               } else {
                    console.log('no content to display')
                    
               }
     }
     
};               
// Append the 'script' element to 'head'
document.head.appendChild(script);
      
