"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=s(function(B,l){
var f=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-max/dist'),F=require('@stdlib/math-base-special-min/dist'),h=require('@stdlib/stats-base-dists-hypergeometric-cdf/dist'),x=require('@stdlib/constants-float64-pinf/dist');function k(e,r,i,a){var t,u;if(v(e)||v(r)||v(i)||v(a)||!f(r)||!f(i)||!f(a)||r===x||i===x||i>r||a>r||e<0||e>1)return NaN;if(e===0)return c(0,a+i-r);if(e===1)return F(a,i);for(u=c(0,a+i-r);t=h(u,r,i,a),!(t>e);)u+=1;return u}l.exports=k
});var I=s(function(C,y){
var o=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/utils-constant-function/dist'),b=require('@stdlib/math-base-special-max/dist'),P=require('@stdlib/math-base-special-min/dist'),O=require('@stdlib/stats-base-dists-hypergeometric-cdf/dist'),g=require('@stdlib/constants-float64-pinf/dist');function R(e,r,i){if(q(e)||q(r)||q(i)||!o(e)||!o(r)||!o(i)||e===g||r===g||r>e||i>e)return w(NaN);return a;function a(t){var u,n;if(q(t)||t<0||t>1)return NaN;if(t===0)return b(0,i+r-e);if(t===1)return P(i,r);for(n=b(0,i+r-e);u=O(n,e,r,i),!(u>t);)n+=1;return n}}y.exports=R
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=m(),z=I();j(d,"factory",z);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map