var tin = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');

var points = JSON.parse(fs.readFileSync(__dirname+'/geojson/Points.geojson'));

var suite = new Benchmark.Suite('turf-tin');
suite
  .add('turf-tin',function () {
    tin(points, 'elevation');
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();