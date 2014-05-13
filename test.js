var test = require('tape')
var fs = require('fs')
var tin = require('./')

test('tag', function(t){
  var points = JSON.parse(fs.readFileSync(__dirname+'/geojson/Points.geojson'))
  
  var taggedPoints = tag(points, polygons, 'polyID', 'containingPolyID')
  var tinned = tin(points, 'elevation')

  t.equal(tinned.features[0].geometry.type, 'Polygon')
  console.log(tinned.features.length)
  t.end()
});
