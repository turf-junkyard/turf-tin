var test = require('tape')
var fs = require('fs')
var tag = require('./')

test('tag', function(t){
  t.plan(3)

  var points = JSON.parse(fs.readFileSync(__dirname+'/geojson/Points.geojson'))
  
  var taggedPoints = tag(points, polygons, 'polyID', 'containingPolyID')

  t.ok(taggedPoints.features, 'features should be ok')
  t.equal(taggedPoints.features.length, points.features.length, 
    'tagged points should have the same length as the input points')

  var count = 0
  taggedPoints.features.forEach(function(pt){
    if(pt.properties.containingPolyID === 4){
      count++
    }
  })
  t.equal(count, 6, 'polygon 4 should have tagged 6 points')
});





var t = require('../index'),
  should = require('should'),
  fs = require('fs')

describe('tin', function(){
  it('should create a TIN from a set of points', function(done){
    t.load(__dirname+'/testIn/Points3.geojson', function(err, points){
      var syncTin = t.tin(points, 'elevation', function(err, tin){
        if(err) throw err
        tin.should.be.ok
        tin.features[0].geometry.type.should.equal('Polygon')
        tin.features[0].geometry.coordinates.should.be.ok
        //fs.writeFileSync('./testOut/tin.geojson',JSON.stringify(tin))
      })

      if (typeof syncTin === 'Error') {
        throw syncTin;
      }

      syncTin.should.be.ok;
      syncTin.features[0].geometry.type.should.equal('Polygon');
      syncTin.features[0].geometry.coordinates.should.be.ok;

      done();
    })
  })
  it('should create a TIN from a set of points with a null z', function(done){
    t.load(__dirname+'/testIn/Points3.geojson', function(err, points){
      var syncTin = t.tin(points, null, function(err, tin){
        if(err) throw err
        tin.should.be.ok
        tin.features[0].geometry.type.should.equal('Polygon')
        tin.features[0].geometry.coordinates.should.be.ok
        //fs.writeFileSync('./testOut/tin2.geojson',JSON.stringify(tin))
      })

      if (typeof syncTin === 'Error') {
        throw syncTin;
      }

      syncTin.should.be.ok;
      syncTin.features[0].geometry.type.should.equal('Polygon');
      syncTin.features[0].geometry.coordinates.should.be.ok;

      done();
    })
  })
})