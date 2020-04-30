# @bemoje/is-numeric-string

Determine whether a value is a numeric string.

#### Version

<span><a href="https://npmjs.org/@bemoje/is-numeric-string" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/is-numeric-string" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/is-numeric-string" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-is-numeric-string.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/is-numeric-string" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-is-numeric-string.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/is-numeric-string" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/is-numeric-string" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-is-numeric-string/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-is-numeric-string" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/is-numeric-string
npm install --save @bemoje/is-numeric-string
npm install --save-dev @bemoje/is-numeric-string
```

## Usage

```javascript

import isNumericString from '@bemoje/is-numeric-string'

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

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [isNumericString][1]

    -   [Parameters][2]

## isNumericString

Determine whether a value is a numeric string.

##### Parameters

-   `value` **any** The value

Returns **[boolean][3]** 

[1]: #isnumericstring

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean