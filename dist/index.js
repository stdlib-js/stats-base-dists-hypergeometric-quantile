/** @license Apache-2.0 */

'use strict';

/**
* Hypergeometric distribution quantile function.
*
* @module @stdlib/stats-base-dists-hypergeometric-quantile
*
* @example
* var quantile = require( '@stdlib/stats-base-dists-hypergeometric-quantile' );
*
* var y = quantile( 0.4, 40, 20, 10 );
* // returns 5
*
* y = quantile( 0.8, 60, 40, 20 );
* // returns 15
*
* y = quantile( 0.5, 100, 10, 10 );
* // returns 1
*
* y = quantile( 0.0, 100, 40, 20 );
* // returns 0
*
* y = quantile( 1.0, 100, 40, 20 );
* // returns 20
*
* var myquantile = quantile.factory( 100, 20, 10 );
* y = myquantile( 0.2 );
* // returns 1
*
* y = myquantile( 0.9 );
* // returns 4
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
