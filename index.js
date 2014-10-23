module.exports = Confined

var value = require('observ')

function Confined(confine, opts){
  opts = opts || {}

  function onchange(n){
    // check new value
    var nv = confine(n, prev, opts)
    if ( n !== nv ) {
      // this avoids never ending recursion
      v.set(nv)
    }
    // if it was different, then we need normalized
    // if it was same, then it doesn't matter which variable I use
    prev = nv
  }
  
  var v = value(opts.initialValue)
  // set prev value to inited value 
  // I don't user `init` because that might be 
  // different from actual value: check `normalize` function
  var prev = v()

  v(onchange)

  return v
}

