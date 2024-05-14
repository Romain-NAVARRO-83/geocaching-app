// Chez wam
// 43.334527, 1.320524
var geo = require('node-geo-distance');
function getDistance (lat1 = 0,long1 = 0,lat2 = 0,long2 = 0){
    const coord1 = {
        latitude: lat1, 
        longitude: long1
      }
       
      // quest
      const coord2 = {
        latitude: lat2,
        longitude: long2
      }
       
      geo.vincenty(coord1, coord2, function(dist) {
        return("test"+dist);
      });
}
module.exports = {
    getDistance,
}