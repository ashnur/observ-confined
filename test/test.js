var bounded = require('../index.js')

function norm(v, prev, min, max){
  v = confine(Math.round(v), min, max)
  if ( isNaN(v) ) v = prev
  return v
}

function confine(v, min, max){
  return v > max ? max : v < min ? min : v
}


var test = require('tape')

test('init value', function(t){
  var value = bounded(norm, -5, 25, 10)
  t.ok(value(), 10)
  var value = bounded(norm, -5, 25, -15)
  t.ok(value(), -5)
  var value = bounded(norm, -5, 25, 35)
  t.ok(value(), 25)
  var value = bounded(norm, -5, 25, 'wattafak')
  t.ok(value(), -5)
  t.end()
})

test('set value', function(t){
  var value = bounded(norm, -5, 25, 10)
  value.set(15)
  t.ok(value(), 15)
  value.set(55)
  t.ok(value(), 25)
  value.set(-33)
  t.ok(value(), -5)
  value.set(-0.6)
  t.ok(value(), -1)
  value.set('wat')
  t.ok(value(), -1)
  t.end()
})
