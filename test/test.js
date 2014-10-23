var bounded = require('../index.js')

function confine(v, prev, opts){
  v = Math.round(v)
  v = v > opts.maximumValue ? opts.maximumValue : v < opts.minimumValue ? opts.minimumValue : v
  if ( isNaN(v) ) v = prev
  return v
}

var test = require('tape')

var opts = {minimumValue: -5, maximumValue: 25, initialValue: 10}

test('init value', function(t){
  var value = bounded(confine, opts)
  t.ok(value(), 10)
  var value = bounded(confine, opts)
  t.ok(value(), -5)
  var value = bounded(confine, opts)
  t.ok(value(), 25)
  var value = bounded(confine, opts)
  t.ok(value(), -5)
  t.end()
})

test('set value', function(t){
  var value = bounded(confine, opts)
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
