// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var N=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,f,c,s,l,p,v,y,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))f+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,g=void 0,(g=v-p.length)<0?p:p=y?p+m(g):m(g)+p)),f+=t.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function I(r){var e,n;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var W=Math.floor;function C(r){return W(r)===r&&r>=0}function L(r){return r!=r}var P=Number.POSITIVE_INFINITY;function R(r){return 0===r&&1/r===P}function M(r,e){return L(r)||L(e)?NaN:r===P||e===P?P:r===e&&0===r?R(r)?r:e:r>e?r:e}var Z=Number.NEGATIVE_INFINITY;function X(r,e){return L(r)||L(e)?NaN:r===Z||e===Z?Z:r===e&&0===r?function(r){return 0===r&&1/r===Z}(r)?r:e:r<e?r:e}function Y(r){return W(r)===r&&r>=0}var q=Math.ceil;function z(r){return r<0?q(r):W(r)}function B(r,e){return L(r)||L(e)?NaN:r===P||e===P?P:r===e&&0===r?R(r)?r:e:r>e?r:e}var D=1023,J=1023,K=-1023,Q=-1074;function rr(r){return r===P||r===Z}var er,nr=2147483648,tr=2147483647,ir="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),ar=Object.prototype.toString,or=Object.prototype.hasOwnProperty,ur="function"==typeof Symbol?Symbol:void 0,fr="function"==typeof ur?ur.toStringTag:"",cr=ir&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return ar.call(r);n=r[fr],a=fr,e=null!=(i=r)&&or.call(i,a);try{r[fr]=void 0}catch(e){return ar.call(r)}return t=ar.call(r),e?r[fr]=n:delete r[fr],t}:function(r){return ar.call(r)},sr="function"==typeof Uint32Array,lr="function"==typeof Uint32Array?Uint32Array:null,pr="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(sr&&n instanceof Uint32Array||"[object Uint32Array]"===cr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var vr,yr=er,gr="function"==typeof Float64Array,dr="function"==typeof Float64Array?Float64Array:null,hr="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr([1,3.14,-3.14,NaN]),n=e,r=(gr&&n instanceof Float64Array||"[object Float64Array]"===cr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr,br=vr,mr="function"==typeof Uint8Array,Nr="function"==typeof Uint8Array?Uint8Array:null,Ar="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,e,n;if("function"!=typeof Nr)return!1;try{e=new Nr(e=[1,3.14,-3.14,256,257]),n=e,r=(mr&&n instanceof Uint8Array||"[object Uint8Array]"===cr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er=wr,Ur="function"==typeof Uint16Array,Sr="function"==typeof Uint16Array?Uint16Array:null,kr="function"==typeof Uint16Array?Uint16Array:void 0;_r=function(){var r,e,n;if("function"!=typeof Sr)return!1;try{e=new Sr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Ur&&n instanceof Uint16Array||"[object Uint16Array]"===cr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var xr,Ir={uint16:_r,uint8:Er};(xr=new Ir.uint16(1))[0]=4660;var Fr,jr,Tr=52===new Ir.uint8(xr.buffer)[0];!0===Tr?(Fr=1,jr=0):(Fr=0,jr=1);var Or={HIGH:Fr,LOW:jr},Vr=new br(1),$r=new yr(Vr.buffer),Gr=Or.HIGH,Hr=Or.LOW;function Wr(r,e,n,t){return Vr[0]=r,e[t]=$r[Gr],e[t+n]=$r[Hr],e}function Cr(r){return Wr(r,[0,0],1,0)}H(Cr,"assign",Wr);var Lr,Pr,Rr=!0===Tr?1:0,Mr=new br(1),Zr=new yr(Mr.buffer);function Xr(r){return Mr[0]=r,Zr[Rr]}!0===Tr?(Lr=1,Pr=0):(Lr=0,Pr=1);var Yr={HIGH:Lr,LOW:Pr},qr=new br(1),zr=new yr(qr.buffer),Br=Yr.HIGH,Dr=Yr.LOW;function Jr(r,e){return zr[Br]=r,zr[Dr]=e,qr[0]}var Kr=[0,0];function Qr(r,e){var n,t;return Cr.assign(r,Kr,1,0),n=Kr[0],n&=tr,t=Xr(e),Jr(n|=t&=nr,Kr[1])}var re=22250738585072014e-324;function ee(r){return Math.abs(r)}var ne=4503599627370496;function te(r,e,n,t){return L(r)||rr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&ee(r)<re?(e[t]=r*ne,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return te(r,[0,0],1,0)}),"assign",te);var ie=2146435072,ae=2220446049250313e-31,oe=2148532223,ue=[0,0],fe=[0,0];function ce(r,e){var n,t;return 0===e||0===r||L(r)||rr(r)?r:(te(r,ue,1,0),r=ue[0],e+=ue[1],e+=function(r){var e=Xr(r);return(e=(e&ie)>>>20)-D|0}(r),e<Q?Qr(0,r):e>J?r<0?Z:P:(e<=K?(e+=52,t=ae):t=1,Cr.assign(r,fe,1,0),n=fe[0],n&=oe,t*Jr(n|=e+D<<20,fe[1])))}var se=.6931471803691238,le=1.9082149292705877e-10,pe=1.4426950408889634,ve=709.782712893384,ye=-745.1332191019411,ge=1/(1<<28),de=-ge;function he(r){var e;return L(r)||r===P?r:r===Z?0:r>ve?P:r<ye?0:r>de&&r<ge?1+r:function(r,e,n){var t,i,a,o;return ce(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=z(r<0?pe*r-.5:pe*r+.5))*se,e*le,e)}var we=!0===Tr?1:0,be=new br(1),me=new yr(be.buffer),Ne=.6931471803691238,Ae=1.9082149292705877e-10,_e=0x40000000000000,Ee=.3333333333333333,Ue=1048575,Se=2146435072,ke=1048576,xe=1072693248;function Ie(r){var e,n,t,i,a,o,u,f,c,s,l,p;return 0===r?Z:L(r)||r<0?NaN:(a=0,(n=Xr(r))<ke&&(a-=54,n=Xr(r*=_e)),n>=Se?r+r:(a+=(n>>20)-D|0,a+=(f=614244+(n&=Ue)&1048576|0)>>20|0,u=(r=function(r,e){return be[0]=r,me[we]=e>>>0,be[0]}(r,n|f^xe))-1,(Ue&2+n)<3?0===u?0===a?0:a*Ne+a*Ae:(o=u*u*(.5-Ee*u),0===a?u-o:a*Ne-(o-a*Ae-u)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Ne-(e-(s*(e+o)+a*Ae)-u)):0===a?u-s*(u-o):a*Ne-(s*(u-o)-a*Ae-u))))}function Fe(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var je=-.16666666666666632,Te=.00833333333332249,Oe=-.0001984126982985795,Ve=27557313707070068e-22,$e=-2.5050760253406863e-8,Ge=1.58969099521155e-10;function He(r,e){var n,t,i;return n=Te+(i=r*r)*(Oe+i*Ve)+i*(i*i)*($e+i*Ge),t=i*r,0===e?r+t*(je+i*n):r-(i*(.5*e-t*n)-e-t*je)}var We=1048575,Ce=!0===Tr?0:1,Le=new br(1),Pe=new yr(Le.buffer);function Re(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Me=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ze=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Xe=16777216,Ye=5.960464477539063e-8,qe=Re(20),ze=Re(20),Be=Re(20),De=Re(20);function Je(r,e,n,t,i,a,o,u,f){var c,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=Ye*h|0,De[v]=h-Xe*s|0,h=t[d-1]+s,d-=1;if(h=ce(h,i),h-=8*W(.125*h),h-=g=0|h,l=0,i>0?(g+=v=De[n-1]>>24-i,De[n-1]-=v<<24-i,l=De[n-1]>>23-i):0===i?l=De[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,c=0,v=0;v<n;v++)d=De[v],0===c?0!==d&&(c=1,De[v]=16777216-d):De[v]=16777215-d;if(i>0)switch(i){case 1:De[n-1]&=8388607;break;case 2:De[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=ce(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=De[v];if(0===d){for(y=1;0===De[a-y];y++);for(v=n+1;v<=n+y;v++){for(f[u+v]=Me[o+v],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(v-d)];t[v]=s}return Je(r,e,n+=y,t,i,a,o,u,f)}}if(0===h)for(n-=1,i-=24;0===De[n];)n-=1,i-=24;else(h=ce(h,-i))>=Xe?(s=Ye*h|0,De[n]=h-Xe*s|0,i+=24,De[n+=1]=s):De[n]=0|h;for(s=ce(1,i),v=n;v>=0;v--)t[v]=s*De[v],s*=Ye;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=Ze[y]*t[v+y];Be[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Be[v];for(e[0]=0===l?s:-s,s=Be[0]-s,v=1;v<=n;v++)s+=Be[v];return e[1]=0===l?s:-s,7&g}function Ke(r,e,n,t){var i,a,o,u,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)qe[f]=c<0?0:Me[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*qe[o+(f-c)];ze[f]=i}return Je(r,e,4,ze,u,4,a,o,qe)}var Qe=Math.round,rn=.6366197723675814,en=1.5707963267341256,nn=6077100506506192e-26,tn=6077100506303966e-26,an=20222662487959506e-37,on=20222662487111665e-37,un=84784276603689e-45,fn=2047;function cn(r,e,n){var t,i,a,o,u;return a=r-(t=Qe(r*rn))*en,o=t*nn,u=e>>20|0,n[0]=a-o,u-(Xr(n[0])>>20&fn)>16&&(o=t*an-((i=a)-(a=i-(o=t*tn))-o),n[0]=a-o,u-(Xr(n[0])>>20&fn)>49&&(o=t*un-((i=a)-(a=i-(o=t*on))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var sn=0,ln=16777216,pn=1.5707963267341256,vn=6077100506506192e-26,yn=2*vn,gn=3*vn,dn=4*vn,hn=598523,wn=1072243195,bn=1073928572,mn=1074752122,Nn=1074977148,An=1075183036,_n=1075388923,En=1075594811,Un=1094263291,Sn=[0,0,0],kn=[0,0];function xn(r,e){var n,t,i,a,o,u,f;if((i=Xr(r)&tr|0)<=wn)return e[0]=r,e[1]=0,0;if(i<=mn)return(i&We)===hn?cn(r,i,e):i<=bn?r>0?(f=r-pn,e[0]=f-vn,e[1]=f-e[0]-vn,1):(f=r+pn,e[0]=f+vn,e[1]=f-e[0]+vn,-1):r>0?(f=r-2*pn,e[0]=f-yn,e[1]=f-e[0]-yn,2):(f=r+2*pn,e[0]=f+yn,e[1]=f-e[0]+yn,-2);if(i<=En)return i<=An?i===Nn?cn(r,i,e):r>0?(f=r-3*pn,e[0]=f-gn,e[1]=f-e[0]-gn,3):(f=r+3*pn,e[0]=f+gn,e[1]=f-e[0]+gn,-3):i===_n?cn(r,i,e):r>0?(f=r-4*pn,e[0]=f-dn,e[1]=f-e[0]-dn,4):(f=r+4*pn,e[0]=f+dn,e[1]=f-e[0]+dn,-4);if(i<Un)return cn(r,i,e);if(i>=ie)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Le[0]=r,Pe[Ce]}(r),f=Jr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Sn[o]=0|f,f=(f-Sn[o])*ln;for(Sn[2]=f,a=3;Sn[a-1]===sn;)a-=1;return u=Ke(Sn,kn,t,a),r<0?(e[0]=-kn[0],e[1]=-kn[1],-u):(e[0]=kn[0],e[1]=kn[1],u)}var In=[0,0],Fn=2147483647,jn=1072243195,Tn=1044381696,On=2146435072;function Vn(r){var e;if(e=Xr(r),(e&=Fn)<=jn)return e<Tn?1:Fe(r,0);if(e>=On)return NaN;switch(3&xn(r,In)){case 0:return Fe(In[0],In[1]);case 1:return-He(In[0],In[1]);case 2:return-Fe(In[0],In[1]);default:return He(In[0],In[1])}}var $n=1072243195,Gn=1045430272,Hn=[0,0];function Wn(r){var e;if(e=Xr(r),(e&=tr)<=$n)return e<Gn?r:He(r,0);if(e>=ie)return NaN;switch(3&xn(r,Hn)){case 0:return He(Hn[0],Hn[1]);case 1:return Fe(Hn[0],Hn[1]);case 2:return-He(Hn[0],Hn[1]);default:return-Fe(Hn[0],Hn[1])}}var Cn=3.141592653589793,Ln=.07721566490153287,Pn=.3224670334241136,Rn=1,Mn=-.07721566490153287,Zn=.48383612272381005,Xn=-.1475877229945939,Yn=.06462494023913339,qn=-.07721566490153287,zn=1,Bn=.4189385332046727,Dn=1.4616321449683622,Jn=4503599627370496,Kn=0x400000000000000,Qn=8470329472543003e-37,rt=1.4616321449683622,et=-.12148629053584961,nt=-3638676997039505e-33;function tt(r){var e,n,t,i,a,o,u,f,c,s,l,p,v;if(L(r)||rr(r))return r;if(0===r)return P;if(r<0?(e=!0,r=-r):e=!1,r<Qn)return-Ie(r);if(e){if(r>=Jn)return P;if(c=function(r){var e,n;return L(r)||rr(r)?NaN:0===(e=ee(n=r%2))||1===e?Qr(0,n):e<.25?Wn(Cn*n):e<.75?Qr(Vn(Cn*(e=.5-e)),n):e<1.25?(n=Qr(1,n)-n,Wn(Cn*n)):e<1.75?-Qr(Vn(Cn*(e-=1.5)),n):(n-=Qr(2,n),Wn(Cn*n))}(r),0===c)return P;n=Ie(Cn/ee(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Ie(r),r>=Dn-1+.27?(l=1-r,t=0):r>=Dn-1-.27?(l=r-(rt-1),t=1):(l=r,t=2)):(v=0,r>=Dn+.27?(l=2-r,t=0):r>=Dn-.27?(l=r-rt,t=1):(l=r-1,t=2)),t){case 0:o=Ln+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(Pn+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=Zn+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=Xn+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=Yn+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=et+(u=p*o-(nt-s*(a+l*i)));break;case 2:o=l*(qn+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),a=zn+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=z(r)))*(Mn+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),f=Rn+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Ie(p*=l+2)}else r<Kn?(c=Ie(r),s=Bn+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(Ie(r)-1);return e&&(v=n-v),v}function it(r){return function(r){return W(r)===r&&r<0}(r)?NaN:tt(r+1)}function at(r,e,n,t){var i,a,o,u;return L(r)||L(e)||L(n)||L(t)||!C(e)||!C(n)||!C(t)||e===P||n===P||n>e||t>e?NaN:(u=M(0,t+n-e),o=X(n,t),C(r)&&u<=r&&r<=o?(a=it(t)+it(n)+it(e-t)+it(e-n),i=it(e)+it(r)+it(t-r),he(a-(i+=it(n-r)+it(e-n+r-t)))):0)}function ot(r){return function(){return r}}function ut(r){var e,n,t;for(e=r.length,n=0,t=0;t<e;t++)n+=r[t];return n}function ft(r,e,n,t){var i,a,o,u;if(L(r)||L(e)||L(n)||L(t)||!Y(e)||!Y(n)||!Y(t)||e===P||n===P||n>e||t>e)return NaN;if((r=z(r))<B(0,t+n-e))return 0;if(r>=X(t,n))return 1;for((a=new br(r+1))[r]=at(r,e,n,t),u=r-1;u>=0;u--)o=(u+1)*(e-n-(t-u-1)),i=(n-u)*(t-u),a[u]=o/i*a[u+1];return X(ut(a),1)}function ct(r,e,n,t){var i;if(L(r)||L(e)||L(n)||L(t)||!C(e)||!C(n)||!C(t)||e===P||n===P||n>e||t>e||r<0||r>1)return NaN;if(0===r)return M(0,t+n-e);if(1===r)return X(t,n);for(i=M(0,t+n-e);!(ft(i,e,n,t)>r);)i+=1;return i}return H(at,"factory",(function(r,e,n){var t,i;return L(r)||L(e)||L(n)||!C(r)||!C(e)||!C(n)||r===P||e===P||e>r||n>r?ot(NaN):(i=M(0,n+e-r),t=X(e,n),function(a){var o,u;return L(a)?NaN:C(a)&&i<=a&&a<=t?(u=it(n)+it(e)+it(r-n)+it(r-e),o=it(r)+it(a)+it(n-a),he(u-(o+=it(e-a)+it(r-e+a-n)))):0})})),H(ft,"factory",(function(r,e,n){return L(r)||L(e)||L(n)||!Y(r)||!Y(e)||!Y(n)||r===P||e===P||e>r||n>r?ot(NaN):function(t){var i,a,o,u;if(L(t))return NaN;if((t=z(t))<B(0,n+e-r))return 0;if(t>=X(n,e))return 1;for((a=new br(t+1))[t]=at(t,r,e,n),u=t-1;u>=0;u--)o=(u+1)*(r-e-(n-u-1)),i=(e-u)*(n-u),a[u]=o/i*a[u+1];return X(ut(a),1)}})),H(ct,"factory",(function(r,e,n){return L(r)||L(e)||L(n)||!C(r)||!C(e)||!C(n)||r===P||e===P||e>r||n>r?ot(NaN):function(t){var i;if(L(t)||t<0||t>1)return NaN;if(0===t)return M(0,n+e-r);if(1===t)return X(n,e);for(i=M(0,n+e-r);!(ft(i,r,e,n)>t);)i+=1;return i}})),ct},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=e();
//# sourceMappingURL=browser.js.map
