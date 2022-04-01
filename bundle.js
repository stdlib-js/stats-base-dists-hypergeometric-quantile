// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,f=e.__defineSetter__,a=e.__lookupGetter__,i=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(a.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,n,t.get),y&&f&&f.call(r,n,t.set),r},l=n()?c:v;var y=function(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},p=Math.floor,s=p;var b=function(r){return s(r)===r&&r>=0};var N=function(r){return r!=r},w=Number.POSITIVE_INFINITY,d=w;var h=function(r){return 0===r&&1/r===d},A=Number.NEGATIVE_INFINITY,_=h,m=N,U=A,g=w;var j=function(r,n){var t,e,u,o;if(2===(t=arguments.length))return m(r)||m(n)?NaN:r===g||n===g?g:r===n&&0===r?_(r)?r:n:r>n?r:n;for(e=U,o=0;o<t;o++){if(m(u=arguments[o])||u===g)return u;(u>e||u===e&&0===u&&_(u))&&(e=u)}return e},I=j,O=A;var S=function(r){return 0===r&&1/r===O},E=N,F=A,T=w;var H=function(r,n){var t,e,u,o;if(2===(t=arguments.length))return E(r)||E(n)?NaN:r===F||n===F?F:r===n&&0===r?S(r)?r:n:r<n?r:n;for(e=T,o=0;o<t;o++){if(E(u=arguments[o])||u===F)return u;(u<e||u===e&&0===u&&S(u))&&(e=u)}return e},G=H,P=Math.ceil,k=p,x=P;var L=function(r){return r<0?x(r):k(r)},M=w,V=A;var W=function(r){return r===M||r===V};var Y=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var q=function(){return Y&&"symbol"==typeof Symbol.toStringTag},C=Object.prototype.toString,z=C;var B=function(r){return z.call(r)},D=Object.prototype.hasOwnProperty;var J=function(r,n){return null!=r&&D.call(r,n)},K="function"==typeof Symbol?Symbol.toStringTag:"",Q=J,R=K,X=C;var Z=B,$=function(r){var n,t,e;if(null==r)return X.call(r);t=r[R],n=Q(r,R);try{r[R]=void 0}catch(n){return X.call(r)}return e=X.call(r),n?r[R]=t:delete r[R],e},rr=q()?$:Z,nr=rr,tr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null,ur=function(r){return tr&&r instanceof Uint32Array||"[object Uint32Array]"===nr(r)},or=er;var fr=function(){var r,n;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,4294967296,4294967297]),r=ur(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var ar="function"==typeof Uint32Array?Uint32Array:void 0,ir=function(){throw new Error("not implemented")},cr=fr()?ar:ir,vr=rr,lr="function"==typeof Float64Array;var yr="function"==typeof Float64Array?Float64Array:null,pr=function(r){return lr&&r instanceof Float64Array||"[object Float64Array]"===vr(r)},sr=yr;var br=function(){var r,n;if("function"!=typeof sr)return!1;try{n=new sr([1,3.14,-3.14,NaN]),r=pr(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var Nr="function"==typeof Float64Array?Float64Array:void 0,wr=function(){throw new Error("not implemented")},dr=br()?Nr:wr,hr=rr,Ar="function"==typeof Uint8Array;var _r="function"==typeof Uint8Array?Uint8Array:null,mr=function(r){return Ar&&r instanceof Uint8Array||"[object Uint8Array]"===hr(r)},Ur=_r;var gr=function(){var r,n;if("function"!=typeof Ur)return!1;try{n=new Ur(n=[1,3.14,-3.14,256,257]),r=mr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var jr="function"==typeof Uint8Array?Uint8Array:void 0,Ir=function(){throw new Error("not implemented")},Or=gr()?jr:Ir,Sr=rr,Er="function"==typeof Uint16Array;var Fr="function"==typeof Uint16Array?Uint16Array:null,Tr=function(r){return Er&&r instanceof Uint16Array||"[object Uint16Array]"===Sr(r)},Hr=Fr;var Gr=function(){var r,n;if("function"!=typeof Hr)return!1;try{n=new Hr(n=[1,3.14,-3.14,65536,65537]),r=Tr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Pr,kr="function"==typeof Uint16Array?Uint16Array:void 0,xr=function(){throw new Error("not implemented")},Lr={uint16:Gr()?kr:xr,uint8:Or};(Pr=new Lr.uint16(1))[0]=4660;var Mr,Vr,Wr=52===new Lr.uint8(Pr.buffer)[0];!0===Wr?(Mr=1,Vr=0):(Mr=0,Vr=1);var Yr=cr,qr={HIGH:Mr,LOW:Vr},Cr=new dr(1),zr=new Yr(Cr.buffer),Br=qr.HIGH,Dr=qr.LOW;var Jr=function(r,n){return Cr[0]=n,r[0]=zr[Br],r[1]=zr[Dr],r};var Kr=function(r,n){return 1===arguments.length?Jr([0,0],r):Jr(r,n)},Qr=Kr,Rr=cr,Xr=!0===Wr?1:0,Zr=new dr(1),$r=new Rr(Zr.buffer);var rn,nn,tn=function(r){return Zr[0]=r,$r[Xr]};!0===Wr?(rn=1,nn=0):(rn=0,nn=1);var en=cr,un={HIGH:rn,LOW:nn},on=new dr(1),fn=new en(on.buffer),an=un.HIGH,cn=un.LOW;var vn=function(r,n){return fn[an]=r,fn[cn]=n,on[0]},ln=vn,yn=Qr,pn=tn,sn=ln,bn=[0,0];var Nn=function(r,n){var t,e;return yn(bn,r),t=bn[0],t&=2147483647,e=pn(n),sn(t|=e&=2147483648,bn[1])};var wn=function(r){return Math.abs(r)},dn=W,hn=N,An=wn;var _n=function(r,n){return hn(n)||dn(n)?(r[0]=n,r[1]=0,r):0!==n&&An(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var mn=function(r,n){return 1===arguments.length?_n([0,0],r):_n(r,n)},Un=tn;var gn=function(r){var n=Un(r);return(n=(2146435072&n)>>>20)-1023|0},jn=w,In=A,On=N,Sn=W,En=Nn,Fn=mn,Tn=gn,Hn=Qr,Gn=ln,Pn=[0,0],kn=[0,0];var xn=function(r,n){var t,e;return 0===n||0===r||On(r)||Sn(r)?r:(Fn(Pn,r),n+=Pn[1],(n+=Tn(r=Pn[0]))<-1074?En(0,r):n>1023?r<0?In:jn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Hn(kn,r),t=kn[0],t&=2148532223,e*Gn(t|=n+1023<<20,kn[1])))},Ln=xn;var Mn=Ln,Vn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Wn=N,Yn=L,qn=A,Cn=w,zn=function(r,n,t){var e,u,o;return o=(e=r-n)-(u=e*e)*Vn(u),Mn(1-(n-e*o/(2-o)-r),t)},Bn=1.4426950408889634,Dn=1/(1<<28);var Jn=function(r){var n;return Wn(r)||r===Cn?r:r===qn?0:r>709.782712893384?Cn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Dn?1+r:(n=Yn(r<0?Bn*r-.5:Bn*r+.5),zn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Kn=p;var Qn=function(r){return Kn(r)===r&&r<0},Rn=cr,Xn=!0===Wr?1:0,Zn=new dr(1),$n=new Rn(Zn.buffer);var rt=function(r,n){return Zn[0]=r,$n[Xn]=n>>>0,Zn[0]};var nt=tn,tt=rt,et=N,ut=A,ot=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},ft=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},at=.6931471803691238,it=1.9082149292705877e-10,ct=1048575;var vt=function(r){var n,t,e,u,o,f,a,i,c,v,l;return 0===r?ut:et(r)||r<0?NaN:(u=0,(t=nt(r))<1048576&&(u-=54,t=nt(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(a=(t&=ct)+614244&1048576|0)>>20|0,f=(r=tt(r,t|1072693248^a))-1,(ct&2+t)<3?0===f?0===u?0:u*at+u*it:(o=f*f*(.5-.3333333333333333*f),0===u?f-o:u*at-(o-u*it-f)):(a=t-398458|0,i=440401-t|0,e=(v=(l=(c=f/(2+f))*c)*l)*ot(v),o=l*ft(v)+e,(a|=i)>0?(n=.5*f*f,0===u?f-(n-c*(n+o)):u*at-(n-(c*(n+o)+u*it)-f)):0===u?f-c*(f-o):u*at-(c*(f-o)-u*it-f))))};var lt=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},yt=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var pt=function(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*lt(o),e+=u*u*yt(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))},st=-.16666666666666632;var bt=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(st+u*t):r-(u*(.5*n-e*t)-n-e*st)},Nt=cr,wt=!0===Wr?0:1,dt=new dr(1),ht=new Nt(dt.buffer);var At=function(r){return dt[0]=r,ht[wt]};var _t=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var mt=p,Ut=Ln,gt=function(r){return _t(0,r)},jt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],It=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ot=16777216,St=5.960464477539063e-8,Et=gt(20),Ft=gt(20),Tt=gt(20),Ht=gt(20);function Gt(r,n,t,e,u,o,f,a,i){var c,v,l,y,p,s,b,N,w;for(y=o,w=e[t],N=t,p=0;N>0;p++)v=St*w|0,Ht[p]=w-Ot*v|0,w=e[N-1]+v,N-=1;if(w=Ut(w,u),w-=8*mt(.125*w),w-=b=0|w,l=0,u>0?(b+=p=Ht[t-1]>>24-u,Ht[t-1]-=p<<24-u,l=Ht[t-1]>>23-u):0===u?l=Ht[t-1]>>23:w>=.5&&(l=2),l>0){for(b+=1,c=0,p=0;p<t;p++)N=Ht[p],0===c?0!==N&&(c=1,Ht[p]=16777216-N):Ht[p]=16777215-N;if(u>0)switch(u){case 1:Ht[t-1]&=8388607;break;case 2:Ht[t-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=Ut(1,u)))}if(0===w){for(N=0,p=t-1;p>=o;p--)N|=Ht[p];if(0===N){for(s=1;0===Ht[o-s];s++);for(p=t+1;p<=t+s;p++){for(i[a+p]=jt[f+p],v=0,N=0;N<=a;N++)v+=r[N]*i[a+(p-N)];e[p]=v}return Gt(r,n,t+=s,e,u,o,f,a,i)}}if(0===w)for(t-=1,u-=24;0===Ht[t];)t-=1,u-=24;else(w=Ut(w,-u))>=Ot?(v=St*w|0,Ht[t]=w-Ot*v|0,u+=24,Ht[t+=1]=v):Ht[t]=0|w;for(v=Ut(1,u),p=t;p>=0;p--)e[p]=v*Ht[p],v*=St;for(p=t;p>=0;p--){for(v=0,s=0;s<=y&&s<=t-p;s++)v+=It[s]*e[p+s];Tt[t-p]=v}for(v=0,p=t;p>=0;p--)v+=Tt[p];for(n[0]=0===l?v:-v,v=Tt[0]-v,p=1;p<=t;p++)v+=Tt[p];return n[1]=0===l?v:-v,7&b}var Pt=function(r,n,t,e){var u,o,f,a,i,c,v;for(4,(o=(t-3)/24|0)<0&&(o=0),a=t-24*(o+1),c=o-(f=e-1),v=f+4,i=0;i<=v;i++)Et[i]=c<0?0:jt[c],c+=1;for(i=0;i<=4;i++){for(u=0,c=0;c<=f;c++)u+=r[c]*Et[f+(i-c)];Ft[i]=u}return 4,Gt(r,n,4,Ft,a,4,o,f,Et)},kt=Math.round,xt=tn;var Lt=tn,Mt=At,Vt=ln,Wt=Pt,Yt=function(r,n,t){var e,u,o,f,a;return o=r-1.5707963267341256*(e=kt(.6366197723675814*r)),f=6077100506506192e-26*e,a=n>>20|0,t[0]=o-f,a-(xt(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,a-(xt(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e},qt=1.5707963267341256,Ct=6077100506506192e-26,zt=2*Ct,Bt=3*Ct,Dt=4*Ct,Jt=[0,0,0],Kt=[0,0];var Qt=function(r,n){var t,e,u,o,f,a,i;if((u=2147483647&Lt(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Yt(r,u,n):u<=1073928572?r>0?(i=r-qt,n[0]=i-Ct,n[1]=i-n[0]-Ct,1):(i=r+qt,n[0]=i+Ct,n[1]=i-n[0]+Ct,-1):r>0?(i=r-2*qt,n[0]=i-zt,n[1]=i-n[0]-zt,2):(i=r+2*qt,n[0]=i+zt,n[1]=i-n[0]+zt,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Yt(r,u,n):r>0?(i=r-3*qt,n[0]=i-Bt,n[1]=i-n[0]-Bt,3):(i=r+3*qt,n[0]=i+Bt,n[1]=i-n[0]+Bt,-3):1075388923===u?Yt(r,u,n):r>0?(i=r-4*qt,n[0]=i-Dt,n[1]=i-n[0]-Dt,4):(i=r+4*qt,n[0]=i+Dt,n[1]=i-n[0]+Dt,-4);if(u<1094263291)return Yt(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Mt(r),i=Vt(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)Jt[f]=0|i,i=16777216*(i-Jt[f]);for(Jt[2]=i,o=3;0===Jt[o-1];)o-=1;return a=Wt(Jt,Kt,e,o),r<0?(n[0]=-Kt[0],n[1]=-Kt[1],-a):(n[0]=Kt[0],n[1]=Kt[1],a)},Rt=tn,Xt=pt,Zt=bt,$t=Qt,re=[0,0];var ne=tn,te=pt,ee=bt,ue=Qt,oe=[0,0];var fe=3.141592653589793,ae=N,ie=W,ce=function(r){var n;if(n=Rt(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Xt(r,0);if(n>=2146435072)return NaN;switch(3&$t(r,re)){case 0:return Xt(re[0],re[1]);case 1:return-Zt(re[0],re[1]);case 2:return-Xt(re[0],re[1]);default:return Zt(re[0],re[1])}},ve=function(r){var n;if(n=ne(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ee(r,0);if(n>=2146435072)return NaN;switch(3&ue(r,oe)){case 0:return ee(oe[0],oe[1]);case 1:return te(oe[0],oe[1]);case 2:return-ee(oe[0],oe[1]);default:return-te(oe[0],oe[1])}},le=wn,ye=Nn,pe=fe;var se=N,be=W,Ne=wn,we=vt,de=L,he=function(r){var n,t;return ae(r)||ie(r)?NaN:0===(n=le(t=r%2))||1===n?ye(0,t):n<.25?ve(pe*t):n<.75?ye(ce(pe*(n=.5-n)),t):n<1.25?(t=ye(1,t)-t,ve(pe*t)):n<1.75?-ye(ce(pe*(n-=1.5)),t):(t-=ye(2,t),ve(pe*t))},Ae=w,_e=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},me=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},Ue=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},ge=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},je=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},Ie=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},Oe=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},Se=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},Ee=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},Fe=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},Te=1.4616321449683622,He=1.4616321449683622;var Ge=Qn,Pe=function(r){var n,t,e,u,o,f,a,i;if(se(r)||be(r))return r;if(0===r)return Ae;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-we(r);if(n){if(r>=4503599627370496)return Ae;if(0===(u=he(r)))return Ae;t=we(3.141592653589793/Ne(u*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(i=-we(r),r>=Te-1+.27?(f=1-r,e=0):r>=Te-1-.27?(f=r-(He-1),e=1):(f=r,e=2)):(i=0,r>=Te+.27?(f=2-r,e=0):r>=Te-.27?(f=r-He,e=1):(f=r-1,e=2)),e){case 0:i+=f*(.07721566490153287+(a=f*f)*_e(a))+a*(.3224670334241136+a*me(a))-.5*f;break;case 1:i+=-.12148629053584961+((a=f*f)*(.48383612272381005+(o=a*f)*je(o))-(-3638676997039505e-33-o*(o*Ie(o)-.1475877229945939+f*(.06462494023913339+o*Oe(o)))));break;case 2:i+=-.5*f+f*(f*Se(f)-.07721566490153287)/(1+f*Ee(f))}else if(r<8)switch(i=.5*(f=r-(e=de(r)))+f*(f*ge(f)-.07721566490153287)/(1+f*Ue(f)),a=1,e){case 7:a*=f+6;case 6:a*=f+5;case 5:a*=f+4;case 4:a*=f+3;case 3:i+=we(a*=f+2)}else i=r<0x400000000000000?(r-.5)*((u=we(r))-1)+(o=.4189385332046727+(a=1/r)*Fe(f=a*a)):r*(we(r)-1);return n&&(i=t-i),i};var ke=function(r){return Ge(r)?NaN:Pe(r+1)},xe=b,Le=N,Me=Jn,Ve=ke,We=I,Ye=G,qe=w;var Ce=function(r){return function(){return r}},ze=b,Be=N,De=Ce,Je=Jn,Ke=ke,Qe=I,Re=G,Xe=w;var Ze=function(r,n,t,e){var u,o,f,a;return Le(r)||Le(n)||Le(t)||Le(e)||!xe(n)||!xe(t)||!xe(e)||n===qe||t===qe||t>n||e>n?NaN:(a=We(0,e+t-n),f=Ye(t,e),xe(r)&&a<=r&&r<=f?(o=Ve(e)+Ve(t)+Ve(n-e)+Ve(n-t),u=Ve(n)+Ve(r)+Ve(e-r),u+=Ve(t-r)+Ve(n-t+r-e),Me(o-u)):0)};y(Ze,"factory",(function(r,n,t){var e,u;return Be(r)||Be(n)||Be(t)||!ze(r)||!ze(n)||!ze(t)||r===Xe||n===Xe||n>r||t>r?De(NaN):(u=Qe(0,t+n-r),e=Re(n,t),function(o){var f,a;if(Be(o))return NaN;if(ze(o)&&u<=o&&o<=e)return a=Ke(t)+Ke(n)+Ke(r-t)+Ke(r-n),f=Ke(r)+Ke(o)+Ke(t-o),f+=Ke(n-o)+Ke(r-n+o-t),Je(a-f);return 0})}));var $e=function(r){var n,t,e;for(n=r.length,t=0,e=0;e<n;e++)t+=r[e];return t},ru=b,nu=N,tu=L,eu=I,uu=G,ou=Ze,fu=w,au=dr,iu=$e;var cu=b,vu=N,lu=Ce,yu=L,pu=I,su=G,bu=Ze,Nu=w,wu=dr,du=$e;var hu=function(r,n,t,e){var u,o,f,a,i;if(nu(r)||nu(n)||nu(t)||nu(e)||!ru(n)||!ru(t)||!ru(e)||n===fu||t===fu||t>n||e>n)return NaN;if((r=tu(r))<eu(0,e+t-n))return 0;if(r>=uu(e,t))return 1;for((o=new au(r+1))[r]=ou(r,n,t,e),i=r-1;i>=0;i--)f=(i+1)*(n-t-(e-i-1)),u=(t-i)*(e-i),o[i]=f/u*o[i+1];return a=iu(o),uu(a,1)};y(hu,"factory",(function(r,n,t){return vu(r)||vu(n)||vu(t)||!cu(r)||!cu(n)||!cu(t)||r===Nu||n===Nu||n>r||t>r?lu(NaN):function(e){var u,o,f,a,i;if(vu(e))return NaN;if((e=yu(e))<pu(0,t+n-r))return 0;if(e>=su(t,n))return 1;for((o=new wu(e+1))[e]=bu(e,r,n,t),i=e-1;i>=0;i--)f=(i+1)*(r-n-(t-i-1)),u=(n-i)*(t-i),o[i]=f/u*o[i+1];return a=du(o),su(a,1)}}));var Au=b,_u=N,mu=I,Uu=G,gu=hu,ju=w;var Iu=b,Ou=N,Su=Ce,Eu=I,Fu=G,Tu=hu,Hu=w;var Gu=function(r,n,t,e){var u;if(_u(r)||_u(n)||_u(t)||_u(e)||!Au(n)||!Au(t)||!Au(e)||n===ju||t===ju||t>n||e>n||r<0||r>1)return NaN;if(0===r)return mu(0,e+t-n);if(1===r)return Uu(e,t);for(u=mu(0,e+t-n);!(gu(u,n,t,e)>r);)u+=1;return u};return y(Gu,"factory",(function(r,n,t){return Ou(r)||Ou(n)||Ou(t)||!Iu(r)||!Iu(n)||!Iu(t)||r===Hu||n===Hu||n>r||t>r?Su(NaN):function(e){var u;if(Ou(e)||e<0||e>1)return NaN;if(0===e)return Eu(0,t+n-r);if(1===e)return Fu(t,n);u=Eu(0,t+n-r);for(;!(Tu(u,r,n,t)>e);)u+=1;return u}})),Gu}));
//# sourceMappingURL=bundle.js.map
