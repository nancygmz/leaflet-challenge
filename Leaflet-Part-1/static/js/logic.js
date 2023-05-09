//store end point
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

//create base level map
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 4
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


//query url and add to map
d3.json(url).then(function (data) {
    function mapStyle(feature) {
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: mapColor(feature.geometry.coordinates[2]),
            color: "black",
            radius: mapRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }
    //create a function that sets circle color based on the depth of the earthquake 
    function mapColor(depth) {
        switch (true) {
            case depth > 90:
                return "#e71414";
            case depth > 70:
                return "#cd330d";
            case depth > 50:
                return "#d48201";
            case depth > 30:
                return "#e2a825";
            case depth > 10:
                return "#96db3d";
            default:
                return "#49d719";
        }
    }
    //change size of circles based on magnitude
    function mapRadius(mag) {
        if (mag === 0) {
            return 1;
        }
            return mag * 4;
    }
     //add earthquakes to the map
    L.geoJson(data, {

        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },

        style: mapStyle,

        //interactive info when circles are clicked
        onEachFeature: function (feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>Depth: " + feature.geometry.coordinates[2]);

        }
    }).addTo(myMap);

 //add legend with colors
var legend = L.control({position: "bottomright"});
legend.onAdd = function() {
  var div = L.DomUtil.create("div", "info legend"),
  depth = [-10, 10, 30, 50, 70, 90];
  var labels = [];
  for (var i = 0; i < depth.length; i++) {
    div.innerHTML +=
    '<i style="background:' + mapColor(depth[i] + 1) + '"></i> ' +
    depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
  }
  div.innerHTML += "<div>" + labels.join("") + "</div>";
  return div;
};
legend.addTo(myMap);

 });