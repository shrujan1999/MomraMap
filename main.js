function sampleGetLocationMethodInPEGA(locations) {
    // example passed object
    // locations = {
    //    amanaID => string,
    //    baladyaID => string,
    //    districts => array of strings,
    //    streets => array of strings,
    // }
    console.log(locations["districts"]);
}
function sampleCallbackAfterMapSave(result) {
 // return Object Id for saved features

  console.log(result);
  if(result.objectId > 0)
    alert('saved successfully')
}
let config = {
  containerID: 'map1',
  languageCode: 'ar',
  applicationMode: 'delete',
  proxyUrl:"http://localhost/fursaProxy/proxy.ashx",
  proxy: "https://gisserver.momra.gov.sa",
  featureServiceType: 'point',
  featureServiceURL: 'https://gisserver.momra.gov.sa/arcgis/rest/services/GISProjects/investment/FeatureServer/0',
  boundariesURL: 'https://gisserver.momra.gov.sa/arcgis/rest/services/data_sharing/AdministrativeBoundaryNonBaldy/MapServer/2',
  districtLocationService: "https://gisserver.momra.gov.sa:6443/arcgis/rest/services/data_sharing/AdministrativeBoundaryNonBaldy/MapServer/0",
  basemap: 'streets',
  additionalLayers: [],
  getLocationDetails: sampleGetLocationMethodInPEGA,
  forsa: {
    forsaID: "20-05-123456",
    amanaID: '004',
    baladyaID: '004101',
  },
  billboards: {
    active: true,
    types: [
      {code: "type1", name: "شاشات إلكترونية", count: 5, color: 'blue'},
      {code: "type2", name: "ميجاكوم", count: 4, color: 'green'},
      {code: "type3", name: "يوني بول", count: 3, color: 'red'},
      {code: "type4", name: "موبي", count: 2, color: 'gold'},
      {code: "type5", name: "اخرى", count: 1, color: 'violet'},
    ],
    // Available colors (blue-green-red-gold-violet-orange-yellow-grey-black)
  },
  debugMode: false,
};

$('document').ready(function(){
OE.initializeMap(config);
});