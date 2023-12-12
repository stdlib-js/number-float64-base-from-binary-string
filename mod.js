// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY;function n(r){return r!=r}var t=Math.floor;function i(r){return t(r)===r}function a(r){return i(r/2)}function o(r){return a(r>0?r-1:r+1)}function u(n){return n===r||n===e}var c=Math.sqrt;function f(r){return Math.abs(r)}var s="function"==typeof Object.defineProperty?Object.defineProperty:null;var l=Object.defineProperty;function p(r){return"number"==typeof r}function g(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function y(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+g(i):g(i)+r,t&&(r="-"+r)),r}var v=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function h(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!p(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=y(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=y(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===d.call(r.specifier)?d.call(n):v.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function w(r){return"string"==typeof r}var b=Math.abs,m=String.prototype.toLowerCase,A=String.prototype.toUpperCase,_=String.prototype.replace,E=/e\+(\d)$/,I=/e-(\d)$/,U=/^(\d+)$/,S=/^(\d+)e/,k=/\.0$/,x=/\.0*e/,F=/(\..*[^0])0*e/;function j(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!p(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":b(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=_.call(n,F,"$1e"),n=_.call(n,x,"e"),n=_.call(n,k,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=_.call(n,E,"e+0$1"),n=_.call(n,I,"e-0$1"),r.alternate&&(n=_.call(n,U,"$1."),n=_.call(n,S,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===A.call(r.specifier)?A.call(n):m.call(n)}function N(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function T(r,e,n){var t=e-r.length;return t<0?r:r=n?r+N(t):N(t)+r}var V=String.fromCharCode,O=isNaN,$=Array.isArray;function G(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function H(r){var e,n,t,i,a,o,u,c,f;if(!$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(w(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=G(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,O(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,O(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=h(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!O(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=O(a)?String(t.arg):V(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=j(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=y(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=T(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function L(r){var e,n,t,i;for(n=[],i=0,t=W.exec(r);t;)(e=r.slice(i,W.lastIndex-t[0].length)).length&&n.push(e),n.push(C(t)),i=W.lastIndex,t=W.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function P(r){return"string"==typeof r}function R(r){var e,n,t;if(!P(r))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=L(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return H.apply(null,n)}var Z=Object.prototype,M=Z.toString,q=Z.__defineGetter__,X=Z.__defineSetter__,Y=Z.__lookupGetter__,z=Z.__lookupSetter__;var B=function(){try{return s({},"x",{}),!0}catch(r){return!1}}()?l:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===M.call(n))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Y.call(r,e)||z.call(r,e)?(t=r.__proto__,r.__proto__=Z,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&q&&q.call(r,e,n.get),o&&X&&X.call(r,e,n.set),r};function D(r,e,n){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;var rr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof rr?rr.toStringTag:"";var nr=J&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return K.call(r);n=r[er],a=er,e=null!=(i=r)&&Q.call(i,a);try{r[er]=void 0}catch(e){return K.call(r)}return t=K.call(r),e?r[er]=n:delete r[er],t}:function(r){return K.call(r)},tr="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var ar,or="function"==typeof Uint32Array?Uint32Array:void 0;ar=function(){var r,e,n;if("function"!=typeof ir)return!1;try{e=new ir(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(tr&&n instanceof Uint32Array||"[object Uint32Array]"===nr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur=ar,cr="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var sr,lr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,e,n;if("function"!=typeof fr)return!1;try{e=new fr([1,3.14,-3.14,NaN]),n=e,r=(cr&&n instanceof Float64Array||"[object Float64Array]"===nr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr=sr,gr="function"==typeof Uint8Array;var yr="function"==typeof Uint8Array?Uint8Array:null;var vr,dr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,e,n;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,256,257]),n=e,r=(gr&&n instanceof Uint8Array||"[object Uint8Array]"===nr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr=vr,wr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null;var mr,Ar="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,e,n;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,65536,65537]),n=e,r=(wr&&n instanceof Uint16Array||"[object Uint16Array]"===nr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er={uint16:mr,uint8:hr};(_r=new Er.uint16(1))[0]=4660;var Ir,Ur,Sr=52===new Er.uint8(_r.buffer)[0];!0===Sr?(Ir=1,Ur=0):(Ir=0,Ur=1);var kr={HIGH:Ir,LOW:Ur},xr=new pr(1),Fr=new ur(xr.buffer),jr=kr.HIGH,Nr=kr.LOW;function Tr(r,e,n,t){return xr[0]=r,e[t]=Fr[jr],e[t+n]=Fr[Nr],e}function Vr(r){return Tr(r,[0,0],1,0)}D(Vr,"assign",Tr);var Or=!0===Sr?0:1,$r=new pr(1),Gr=new ur($r.buffer);function Hr(r,e){return $r[0]=r,Gr[Or]=e>>>0,$r[0]}function Wr(r){return 0|r}var Cr,Lr,Pr=!0===Sr?1:0,Rr=new pr(1),Zr=new ur(Rr.buffer);function Mr(r){return Rr[0]=r,Zr[Pr]}!0===Sr?(Cr=1,Lr=0):(Cr=0,Lr=1);var qr={HIGH:Cr,LOW:Lr},Xr=new pr(1),Yr=new ur(Xr.buffer),zr=qr.HIGH,Br=qr.LOW;function Dr(r,e){return Yr[zr]=r,Yr[Br]=e,Xr[0]}var Jr=[0,0];function Kr(r,e){var n,t;return Vr.assign(r,Jr,1,0),n=Jr[0],n&=2147483647,t=Mr(e),Dr(n|=t&=2147483648,Jr[1])}var Qr=!0===Sr?1:0,re=new pr(1),ee=new ur(re.buffer);function ne(r,e){return re[0]=r,ee[Qr]=e>>>0,re[0]}var te=[1,1.5],ie=[0,.5849624872207642],ae=[0,1.350039202129749e-8];function oe(r,e,t,i){return n(r)||u(r)?(e[i]=r,e[i+t]=0,e):0!==r&&f(r)<22250738585072014e-324?(e[i]=4503599627370496*r,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}D((function(r){return oe(r,[0,0],1,0)}),"assign",oe);var ue=[0,0],ce=[0,0];function fe(t,i){var a,o;return 0===i||0===t||n(t)||u(t)?t:(oe(t,ue,1,0),i+=ue[1],i+=function(r){var e=Mr(r);return(e=(2146435072&e)>>>20)-1023|0}(t=ue[0]),i<-1074?Kr(0,t):i>1023?t<0?e:r:(i<=-1023?(i+=52,o=2220446049250313e-31):o=1,Vr.assign(t,ce,1,0),a=ce[0],a&=2148532223,o*Dr(a|=i+1023<<20,ce[1])))}var se=1e300,le=1e-300,pe=[0,0],ge=[0,0];function ye(t,a){var s,l,p,g,y,v,d,h,w,b,m,A,_,E;if(n(t)||n(a))return NaN;if(Vr.assign(a,pe,1,0),y=pe[0],0===pe[1]){if(0===a)return 1;if(1===a)return t;if(-1===a)return 1/t;if(.5===a)return c(t);if(-.5===a)return 1/c(t);if(2===a)return t*t;if(3===a)return t*t*t;if(4===a)return(t*=t)*t;if(u(a))return function(e,n){return-1===e?(e-e)/(e-e):1===e?1:f(e)<1==(n===r)?0:r}(t,a)}if(Vr.assign(t,pe,1,0),g=pe[0],0===pe[1]){if(0===g)return function(n,t){return t===e?r:t===r?0:t>0?o(t)?n:0:o(t)?Kr(r,n):r}(t,a);if(1===t)return 1;if(-1===t&&o(a))return-1;if(u(t))return t===e?ye(-0,-a):a<0?0:r}if(t<0&&!1===i(a))return(t-t)/(t-t);if(p=f(t),s=2147483647&g|0,l=2147483647&y|0,d=y>>>31|0,v=(v=g>>>31|0)&&o(a)?-1:1,l>1105199104){if(l>1139802112)return function(r,e){return(2147483647&Mr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(t,a);if(s<1072693247)return 1===d?v*se*se:v*le*le;if(s>1072693248)return 0===d?v*se*se:v*le*le;m=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Hr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(ge,p)}else m=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,g,y,v,d,h,w,b,m,A,_,E;return m=0,n<1048576&&(m-=53,n=Mr(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=1048576),o=Hr(i=(w=(e=ne(e,n))-(f=te[_]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=ne(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Hr(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),v=(g=-7.028461650952758e-9*(l=Hr(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+ae[_])-((y=Hr(y=(p=.9617967009544373*l)+g+(s=ie[_])+(d=m),0))-d-s-p),r[0]=y,r[1]=v,r}(ge,p,s);if(A=(b=(a-(h=Hr(a,0)))*m[0]+a*m[1])+(w=h*m[0]),Vr.assign(A,pe,1,0),_=Wr(pe[0]),E=Wr(pe[1]),_>=1083179008){if(0!=(_-1083179008|E))return v*se*se;if(b+8008566259537294e-32>A-w)return v*se*se}else if((2147483647&_)>=1083231232){if(0!=(_-3230714880|E))return v*le*le;if(b<=A-w)return v*le*le}return A=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,g;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=ne(0,t)),r=Wr(r=Mr(f=1-((f=(o=.6931471824645996*(a=Hr(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=f-(a=f*f)*(0===(g=a)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((c=u-(f-o))+f*c)-f))),(r+=s<<20>>>0)>>20<=0?fe(f,s):ne(f,r)}(_,w,b),v*A}function ve(n){var t,i,a;if(64!==n.length)throw new Error(R("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,n));if(t="1"===n[0]?-1:1,a=parseInt(n.substring(1,12),2)-1023,i=function(r){var e,n=0;for(e=0;e<r.length;e++)"1"===r[e]&&(n+=ye(2,-(e+1)));return n}(n.substring(12)),-1023===a){if(0===i)return 1===t?0:-0;a=-1022}else{if(1024===a)return 0===i?1===t?r:e:NaN;i+=1}return t*i*ye(2,a)}export{ve as default};
//# sourceMappingURL=mod.js.map
