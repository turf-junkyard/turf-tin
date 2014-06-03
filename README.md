turf-tin
========
[![build status](https://secure.travis-ci.org/Turfjs/turf-tin.png)](http://travis-ci.org/Turfjs/turf-tin)

Takes a set of points and the name of a z-value property and creates a tin (Triangulated Irregular Network). These are often used for developing elevation contour maps or stepped heat visualizations.

```javascript
var tin = require('turf-tin')
var fs = require('fs')

var z = 'elevation'
var pts = JSON.parse(fs.readFileSync('/path/to/pts.geojson'))

var tinPolys = tin(pts, z)

console.log(tinPolys)
```