import "leaflet"
import * as esri from "esri-leaflet"


  var map = L.map("map").setView([37.75, -122.23], 10);

console.log("Esri: ", esri)
console.log("Esri extension: ", L.esri)
esri.basemapLayer("Topographic").addTo(map);
  /*L.esri.basemapLayer("Topographic").addTo(map);*/

