import isNumericString from '../src/is-numeric-string'

isNumericString('.5')
//=> true

isNumericString('0.5')
//=> true

isNumericString('12')
//=> true

isNumericString('0')
//=> true

isNumericString('a')
//=> false

isNumericString(25)
//=> false

isNumericString(Inifnity.toString())
//=> false

isNumericString(NaN.toString())
//=> false
