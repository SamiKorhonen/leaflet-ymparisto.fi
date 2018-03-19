import "leaflet"
import * as esri from "esri-leaflet"
import "proj4leaflet"
//import "./wmts"

const bounds = L.bounds(L.point(-548576, 6291456), L.point(1548576, 8388608));
const originNw = L.point(bounds.min.x, bounds.max.y);

var crs = new L.Proj.CRS('EPSG:3067',
 // '+lon_0=15.808277777799999 +lat_0=0.0 +k=1.0 +x_0=1500000.0 +y_0=0.0' +
 //+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs
  '+zone=35' +
  '+proj=utm +ellps=GRS80 +units=m ' +
  '+towgs84=0,0,0,0,0,0,0 +no_defs',
  {
    	resolutions: [
					8192, 4096, 2048, 1024, 512, 256,
					128,64, 32, 16, 8, 4, 2, 1, 0.5,
					0.25, 0.125, 0.0625, 0.03125, 0.015625
				],
       bounds: bounds,
       transformation: new L.Transformation(1, -originNw.x, -1, originNw.y) 
  }
);

var map = L.map("map", {crs: crs}).setView([60.17194, 24.941389], 10);

esri.dynamicMapLayer({ 
	url: 'http://paikkatieto.ymparisto.fi/arcgis/rest/services/sykemaps/GISAineistot/MapServer',
  opacity: 0.7,
  dynamicLayers:'[{"id":277,"source":{"type":"dataLayer","dataSource":{"type":"table","workspaceId":"INSPIRE3","dataSourceName":"GEO.SVW_GEO_TULVARISKIALUE"}},"drawingInfo":{"renderer":{"type":"simple","symbol":{"type":"esriSFS","style":"esriSFSNull","color":[0,0,0,0],"outline":{"type":"esriSLS","style":"","color":[255,0,0,255],"width":2}}}}}]',
  attribution: 'SYKE &copy;'
   }).addTo(map);

