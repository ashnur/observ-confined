# Usage

```
var confined = require('observ-confined')
var opts = {minimumValue: -5, maximumValue: 25, initialValue: 10}

function restricter(currentValue, previousValue, options){
  currentValue = Number(currentValue)
  if ( isNaN(currentValue) ) return previousValue
  return currentValue > options.maximumValue ? options.maximumValue
       : currentValue < options.minimumValue ? options.minimumValue
       : /* otherwise */                     : currentValue


}

var boundedValue = confined(restricter)

boundedValue() // returns 10
boundedValue.set(-555) 
boundedValue() // returns -5
boundedValue.set(119) 
boundedValue() // returns 25
boundedValue.set(-3.3) 
boundedValue() // returns -3.3
boundedValue.set(17) 
boundedValue() // returns 17
boundedValue.set('somenotnumericvalue') 
boundedValue() // returns previous value: 17
```

# notes

options are not really required, but I find it really useful
to have some way to share values with the outside in both directions

internally nothing expects numbers, it's just the main usecase for me right now






