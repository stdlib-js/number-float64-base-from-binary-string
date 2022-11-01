// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,n=1023;function t(r){return r!=r}var i=Math.floor;function a(r){return i(r)===r}function o(r){return a(r/2)}function u(r){return o(r>0?r-1:r+1)}function f(n){return n===r||n===e}var c=Math.sqrt;function l(r){return Math.abs(r)}var s,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),g=Object.prototype.toString,y=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"";s=p&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return g.call(r);n=r[d],a=d,e=null!=(i=r)&&y.call(i,a);try{r[d]=void 0}catch(e){return g.call(r)}return t=g.call(r),e?r[d]=n:delete r[d],t}:function(r){return g.call(r)};var h,v=s,w="function"==typeof Uint32Array,b="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var r,e,n;if("function"!=typeof b)return!1;try{e=new b(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(w&&n instanceof Uint32Array||"[object Uint32Array]"===v(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?m:function(){throw new Error("not implemented")};var A,_=h,E="function"==typeof Float64Array,I="function"==typeof Float64Array?Float64Array:null,U="function"==typeof Float64Array?Float64Array:void 0;A=function(){var r,e,n;if("function"!=typeof I)return!1;try{e=new I([1,3.14,-3.14,NaN]),n=e,r=(E&&n instanceof Float64Array||"[object Float64Array]"===v(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")};var S,x=A,k="function"==typeof Uint8Array,F="function"==typeof Uint8Array?Uint8Array:null,j="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var r,e,n;if("function"!=typeof F)return!1;try{e=new F(e=[1,3.14,-3.14,256,257]),n=e,r=(k&&n instanceof Uint8Array||"[object Uint8Array]"===v(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?j:function(){throw new Error("not implemented")};var T,N=S,V="function"==typeof Uint16Array,O="function"==typeof Uint16Array?Uint16Array:null,$="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var r,e,n;if("function"!=typeof O)return!1;try{e=new O(e=[1,3.14,-3.14,65536,65537]),n=e,r=(V&&n instanceof Uint16Array||"[object Uint16Array]"===v(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$:function(){throw new Error("not implemented")};var G,H={uint16:T,uint8:N};(G=new H.uint16(1))[0]=4660;var W,C,L=52===new H.uint8(G.buffer)[0];!0===L?(W=1,C=0):(W=0,C=1);var P={HIGH:W,LOW:C},R=new x(1),Z=new _(R.buffer),M=P.HIGH,q=P.LOW;function X(r,e){return R[0]=e,r[0]=Z[M],r[1]=Z[q],r}function Y(r,e){return 1===arguments.length?X([0,0],r):X(r,e)}var z=!0===L?0:1,B=new x(1),D=new _(B.buffer);function J(r,e){return B[0]=r,D[z]=e>>>0,B[0]}function K(r){return 0|r}var Q,rr,er=!0===L?1:0,nr=new x(1),tr=new _(nr.buffer);function ir(r){return nr[0]=r,tr[er]}!0===L?(Q=1,rr=0):(Q=0,rr=1);var ar={HIGH:Q,LOW:rr},or=new x(1),ur=new _(or.buffer),fr=ar.HIGH,cr=ar.LOW;function lr(r,e){return ur[fr]=r,ur[cr]=e,or[0]}var sr=[0,0];function pr(r,e){var n,t;return Y(sr,r),n=sr[0],n&=2147483647,t=ir(e),lr(n|=t&=2147483648,sr[1])}var gr=!0===L?1:0,yr=new x(1),dr=new _(yr.buffer);function hr(r,e){return yr[0]=r,dr[gr]=e>>>0,yr[0]}var vr,wr=1048576,br=[1,1.5],mr=[0,.5849624872207642],Ar=[0,1.350039202129749e-8],_r="function"==typeof Object.defineProperty?Object.defineProperty:null,Er=Object.defineProperty,Ir=Object.prototype,Ur=Ir.toString,Sr=Ir.__defineGetter__,xr=Ir.__defineSetter__,kr=Ir.__lookupGetter__,Fr=Ir.__lookupSetter__;function jr(r,e,n,i){return t(r)||f(r)?(e[i]=r,e[i+n]=0,e):0!==r&&l(r)<22250738585072014e-324?(e[i]=4503599627370496*r,e[i+n]=-52,e):(e[i]=r,e[i+n]=0,e)}vr=function(){try{return _r({},"x",{}),!0}catch(r){return!1}}()?Er:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Ur.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===Ur.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((i="value"in n)&&(kr.call(r,e)||Fr.call(r,e)?(t=r.__proto__,r.__proto__=Ir,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Sr&&Sr.call(r,e,n.get),o&&xr&&xr.call(r,e,n.set),r},vr((function(r){return jr(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:jr});var Tr=[0,0],Nr=[0,0];function Vr(i,a){var o,u;return 0===a||0===i||t(i)||f(i)?i:(jr(i,Tr,1,0),a+=Tr[1],a+=function(r){var e=ir(r);return(e=(2146435072&e)>>>20)-n|0}(i=Tr[0]),a<-1074?pr(0,i):a>1023?i<0?e:r:(a<=-1023?(a+=52,u=2220446049250313e-31):u=1,Y(Nr,i),o=Nr[0],o&=2148532223,u*lr(o|=a+n<<20,Nr[1])))}var Or=2147483647,$r=1048575,Gr=1048576,Hr=2147483647,Wr=1083179008,Cr=1e300,Lr=1e-300,Pr=[0,0],Rr=[0,0];function Zr(i,o){var s,p,g,y,d,h,v,w,b,m,A,_,E,I;if(t(i)||t(o))return NaN;if(Y(Pr,o),d=Pr[0],0===Pr[1]){if(0===o)return 1;if(1===o)return i;if(-1===o)return 1/i;if(.5===o)return c(i);if(-.5===o)return 1/c(i);if(2===o)return i*i;if(3===o)return i*i*i;if(4===o)return(i*=i)*i;if(f(o))return function(e,n){return-1===e?(e-e)/(e-e):1===e?1:l(e)<1==(n===r)?0:r}(i,o)}if(Y(Pr,i),y=Pr[0],0===Pr[1]){if(0===y)return function(n,t){return t===e?r:t===r?0:t>0?u(t)?n:0:u(t)?pr(r,n):r}(i,o);if(1===i)return 1;if(-1===i&&u(o))return-1;if(f(i))return i===e?Zr(-0,-o):o<0?0:r}if(i<0&&!1===a(o))return(i-i)/(i-i);if(g=l(i),s=y&Hr|0,p=d&Hr|0,v=d>>>31|0,h=(h=y>>>31|0)&&u(o)?-1:1,p>1105199104){if(p>1139802112)return function(r,e){return(2147483647&ir(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(i,o);if(s<1072693247)return 1===v?h*Cr*Cr:h*Lr*Lr;if(s>1072693248)return 0===v?h*Cr*Cr:h*Lr*Lr;A=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=J(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Rr,g)}else A=function(r,e,t){var i,a,o,u,f,c,l,s,p,g,y,d,h,v,w,b,m,A,_,E,I;return A=0,t<wr&&(A-=53,t=ir(e*=9007199254740992)),A+=(t>>20)-n|0,t=1072693248|(_=1048575&t|0),_<=235662?E=0:_<767610?E=1:(E=0,A+=1,t-=wr),u=J(a=(b=(e=hr(e,t))-(l=br[E]))*(m=1/(e+l)),0),i=524288+(t>>1|536870912),c=hr(0,i+=E<<18),w=(o=a*a)*o*(0===(I=o)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),c=J(c=3+(o=u*u)+(w+=(f=m*(b-u*c-u*(e-(c-l))))*(u+a)),0),h=(y=-7.028461650952758e-9*(p=J(p=(b=u*c)+(m=f*c+(w-(c-3-o))*a),0))+.9617966939259756*(m-(p-b))+Ar[E])-((d=J(d=(g=.9617967009544373*p)+y+(s=mr[E])+(v=A),0))-v-s-g),r[0]=d,r[1]=h,r}(Rr,g,s);if(m=(o-(w=J(o,0)))*A[0]+o*A[1],b=w*A[0],Y(Pr,_=m+b),E=K(Pr[0]),I=K(Pr[1]),E>=Wr){if(0!=(E-Wr|I))return h*Cr*Cr;if(m+8008566259537294e-32>_-b)return h*Cr*Cr}else if((E&Hr)>=1083231232){if(0!=(E-3230714880|I))return h*Lr*Lr;if(m<=_-b)return h*Lr*Lr}return _=function(r,e,t){var i,a,o,u,f,c,l,s,p,g;return p=((s=r&Or|0)>>20)-n|0,l=0,s>1071644672&&(a=hr(0,((l=r+(Gr>>p+1)>>>0)&~($r>>(p=((l&Or)>>20)-n|0)))>>>0),l=(l&$r|Gr)>>20-p>>>0,r<0&&(l=-l),e-=a),r=K(r=ir(c=1-((c=(o=.6931471824645996*(a=J(a=t+e,0)))+(u=.6931471805599453*(t-(a-e))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(g=a)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?Vr(c,l):hr(c,r)}(E,b,m),h*_}function Mr(r){return"number"==typeof r}function qr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function Xr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+qr(i):qr(i)+r,t&&(r="-"+r)),r}var Yr=String.prototype.toLowerCase,zr=String.prototype.toUpperCase;function Br(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!Mr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=Xr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=Xr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===zr.call(r.specifier)?zr.call(n):Yr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function Dr(r){return"string"==typeof r}var Jr=Math.abs,Kr=String.prototype.toLowerCase,Qr=String.prototype.toUpperCase,re=String.prototype.replace,ee=/e\+(\d)$/,ne=/e-(\d)$/,te=/^(\d+)$/,ie=/^(\d+)e/,ae=/\.0$/,oe=/\.0*e/,ue=/(\..*[^0])0*e/;function fe(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!Mr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":Jr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=re.call(n,ue,"$1e"),n=re.call(n,oe,"e"),n=re.call(n,ae,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=re.call(n,ee,"e+0$1"),n=re.call(n,ne,"e-0$1"),r.alternate&&(n=re.call(n,te,"$1."),n=re.call(n,ie,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Qr.call(r.specifier)?Qr.call(n):Kr.call(n)}function ce(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function le(r,e,n){var t=e-r.length;return t<0?r:r=n?r+ce(t):ce(t)+r}var se=String.fromCharCode,pe=isNaN,ge=Array.isArray;function ye(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function de(r){var e,n,t,i,a,o,u,f,c;if(!ge(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(Dr(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=ye(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,pe(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,pe(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=Br(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!pe(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=pe(a)?String(t.arg):se(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=fe(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Xr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=le(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var he=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ve(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function we(r){var e,n,t,i;for(n=[],i=0,t=he.exec(r);t;)(e=r.slice(i,he.lastIndex-t[0].length)).length&&n.push(e),n.push(ve(t)),i=he.lastIndex,t=he.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function be(r){return"string"==typeof r}function me(r){var e,n,t;if(!be(r))throw new TypeError(me("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=we(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return de.apply(null,n)}return function(t){var i,a,o;if(64!==t.length)throw new Error(me("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,t));if(i="1"===t[0]?-1:1,o=parseInt(t.substring(1,12),2)-n,a=function(r){var e,n=0;for(e=0;e<r.length;e++)"1"===r[e]&&(n+=Zr(2,-(e+1)));return n}(t.substring(12)),-1023===o){if(0===a)return 1===i?0:-0;o=-1022}else{if(1024===o)return 0===a?1===i?r:e:NaN;a+=1}return i*a*Zr(2,o)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).fromBinaryString=e();
//# sourceMappingURL=browser.js.map
