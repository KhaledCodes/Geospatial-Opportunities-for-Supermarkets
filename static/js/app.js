var myMap = L.map("map", {
    center: [43.68, -79.38],
    zoom: 11
  });

// localStorage.setItem("0","Walmart Toronto Downsview Supercentre","1","Walmart Thornhill Supercentre");
// var item = localStorage.getItem('0');
// console.log(item)

  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY 
  }).addTo(myMap);

  var myIcon = L.icon({
    iconUrl: 'file://http://127.0.0.1:5000/26501+.JPG',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  })

  L.marker([43.68, -79.38], {icon:myIcon}).addTo(myMap);

var path = "/Users/khaledkhatib/Documents/GitHub/Geospatial-Opportunities-for-Supermarkets/supermarket_locations/longos_locations.json"

d3.json(path, function(data) {
    console.log(data.name[0]);
})
