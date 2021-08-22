<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Hypergeometric][hypergeometric-distribution] distribution [quantile function][quantile-function].

<section class="intro">

Imagine a scenario with a population of size `N`, of which a subpopulation of size `K` can be considered successes. We draw `n` observations from the total population. Defining the random variable `X` as the number of successes in the `n` draws, `X` is said to follow a [hypergeometric distribution][hypergeometric-distribution].

The [quantile function][quantile-function] for a [hypergeometric][hypergeometric-distribution] random variable returns for any `0 <= p <= 1` the value `x` for which

<!-- <equation class="equation" label="eq:hypergeometric_quantile_function" align="center" raw="F(x-1;N,K,n) < p \le F(x;N,K,n)" alt="Quantile value for a hypergeometric distribution."> -->

<div class="equation" align="center" data-raw-text="F(x-1;N,K,n) &lt; p \le F(x;N,K,n)" data-equation="eq:hypergeometric_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/hypergeometric/quantile/docs/img/equation_hypergeometric_quantile_function.svg" alt="Quantile value for a hypergeometric distribution.">
    <br>
</div>

<!-- </equation> -->

where `F` is the cumulative distribution function (CDF) of a hypergeometric random variable with parameters `N`, `K` and `n`, where `N` is the population size, `K` is the subpopulation size, and `n` is the number of draws.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-hypergeometric-quantile
```

</section>

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats-base-dists-hypergeometric-quantile' );
```

#### quantile( p, N, K, n )

Evaluates the [quantile function][quantile-function] for a [hypergeometric][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var y = quantile( 0.5, 8, 4, 2 );
// returns 1

y = quantile( 0.9, 120, 80, 20 );
// returns 16

y = quantile( 0.0, 120, 80, 50 );
// returns 10

y = quantile( 0.0, 8, 4, 2 );
// returns 0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 10, 5, 2 );
// returns NaN

y = quantile( 0.4, NaN, 5, 2 );
// returns NaN

y = quantile( 0.4, 10, NaN, 2 );
// returns NaN

y = quantile( 0.4, 10, 5, NaN );
// returns NaN
```

If provided a population size `N`, subpopulation size `K` or draws `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = quantile( 0.2, 6.5, 5, 2 );
// returns NaN

y = quantile( 0.2, 5, 1.5, 2 );
// returns NaN

y = quantile( 0.2, 10, 5, -2.0 );
// returns NaN
```

If the number of draws `n` or the subpopulation size `K` exceed population size `N`, the function returns `NaN`.

```javascript
var y = quantile( 0.2, 10, 5, 12 );
// returns NaN

y = quantile( 0.2, 8, 3, 9 );
// returns NaN
```

#### quantile.factory( N, K, n )

Returns a function for evaluating the [quantile function][quantile-function] for a [hypergeometric ][hypergeometric-distribution] distribution with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var myquantile = quantile.factory( 100, 20, 10 );
var y = myquantile( 0.2 );
// returns 1

y = myquantile( 0.9 );
// returns 4
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var quantile = require( '@stdlib/stats-base-dists-hypergeometric-quantile' );

var i;
var N;
var K;
var n;
var p;
var y;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    N = round( randu() * 20 );
    K = round( randu() * N );
    n = round( randu() * K );
    y = quantile( p, N, K, n );
    console.log( 'p: %d, N: %d, K: %d, n: %d, Q(p;N,K,n): %d', p.toFixed( 4 ), N, K, n, y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-hypergeometric-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-hypergeometric-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-quantile/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-quantile/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-hypergeometric-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-hypergeometric-quantile?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-hypergeometric-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-hypergeometric-quantile/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[hypergeometric-distribution]: https://en.wikipedia.org/wiki/hypergeometric_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
