# turf-tin

[![build status](https://secure.travis-ci.org/Turfjs/turf-tin.png)](http://travis-ci.org/Turfjs/turf-tin)

turf tin module


### `turf.tin(points, propertyName)`

Takes a set of points and the name of a z-value property and
creates a [Triangulated Irregular Network](http://en.wikipedia.org/wiki/Triangulated_irregular_network),
or a TIN for short, returned as a collection of Polygons. These are often used
for developing elevation contour maps or stepped heat visualizations.

This triangulates the points, as well as adds properties called `a`, `b`,
and `c` representing the value of the given `propertyName` at each of
the points that represent the corners of the triangle.


### Parameters

| parameter      | type              | description                                                                                                                                                      |
| -------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `points`       | FeatureCollection | - a GeoJSON FeatureCollection containing Features with Point geometries                                                                                          |
| `propertyName` | string            | _optional:_ - name of the property from which to pull z values. This is optional: if not given, then there will be no extra data added to the derived triangles. |


### Example

```js
// generate some random point data
var points = turf.random('points', 30, {
  bbox: [50, 30, 70, 50]
});
//=points
// add a random property to each point between 0 and 9
for (var i = 0; i < points.features.length; i++) {
  points.features[i].properties.z = ~~(Math.random() * 9);
}
var tin = turf.tin(points, 'z')
for (var i = 0; i < tin.features.length; i++) {
  var properties  = tin.features[i].properties;
  // roughly turn the properties of each
  // triangle into a fill color
  // so we can visualize the result
  properties.fill = '#' + properties.a +
    properties.b + properties.c;
}
//=tin
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-tin
```

## Tests

```sh
$ npm test
```


### `undefined`

If the points of the triangle are collinear, then just find the
extremes and use the midpoint as the center of the circumcircle.

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-tin
```

## Tests

```sh
$ npm test
```


### `undefined`

Bail if there aren't enough vertices to form any triangles.

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-tin
```

## Tests

```sh
$ npm test
```


### `undefined`

Ensure the vertex array is in order of descending X coordinate
(which is needed to ensure a subquadratic runtime), and then find
the bounding box around the points.

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-tin
```

## Tests

```sh
$ npm test
```


### `dx`

Find a supertriangle, which is a triangle that surrounds all the
vertices. This is used like something of a sentinel value to remove
cases in the main algorithm, and is removed before we return any
results.

Once found, put it in the "open" list. (The "open" list is for
triangles who may still need to be considered; the "closed" list is
for triangles which do not.)

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-tin
```

## Tests

```sh
$ npm test
```


### `undefined`

Incrementally add each vertex to the mesh.

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-tin
```

## Tests

```sh
$ npm test
```


### `length`

For each open triangle, check to see if the current point is
inside it's circumcircle. If it is, remove the triangle and add
it's edges to an edge list.

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-tin
```

## Tests

```sh
$ npm test
```


### `undefined`

If this point is to the right of this triangle's circumcircle,
then this triangle should never get checked again. Remove it
from the open list, add it to the closed list, and skip.

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-tin
```

## Tests

```sh
$ npm test
```


### `undefined`

If not, skip this triangle.

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-tin
```

## Tests

```sh
$ npm test
```


### `undefined`

Remove the triangle and add it's edges to the edge list.

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-tin
```

## Tests

```sh
$ npm test
```


### `undefined`

Remove any doubled edges.

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-tin
```

## Tests

```sh
$ npm test
```


### `undefined`

Add a new triangle for each edge.

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-tin
```

## Tests

```sh
$ npm test
```


### `undefined`

Copy any remaining open triangles to the closed list, and then
remove any triangles that share a vertex with the supertriangle.

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-tin
```

## Tests

```sh
$ npm test
```


### `undefined`

Yay, we're done!

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-tin
```

## Tests

```sh
$ npm test
```

