// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,n=1023;function t(r){return r!=r}var i=Math.floor;function a(r){return i(r)===r}function o(r){return a(r/2)}function u(r){return o(r>0?r-1:r+1)}function f(n){return n===r||n===e}var c=Math.sqrt;function s(r){return Math.abs(r)}var l="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function g(r){return"number"==typeof r}function y(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function d(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+y(i):y(i)+r,t&&(r="-"+r)),r}var h=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!g(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=d(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=d(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===v.call(r.specifier)?v.call(n):h.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var b=Math.abs,m=String.prototype.toLowerCase,A=String.prototype.toUpperCase,_=String.prototype.replace,E=/e\+(\d)$/,U=/e-(\d)$/,I=/^(\d+)$/,S=/^(\d+)e/,x=/\.0$/,k=/\.0*e/,F=/(\..*[^0])0*e/;function j(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!g(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":b(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=_.call(n,F,"$1e"),n=_.call(n,k,"e"),n=_.call(n,x,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=_.call(n,E,"e+0$1"),n=_.call(n,U,"e-0$1"),r.alternate&&(n=_.call(n,I,"$1."),n=_.call(n,S,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===A.call(r.specifier)?A.call(n):m.call(n)}function T(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var N=String.fromCharCode,O=isNaN,V=Array.isArray;function $(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function G(r){var e,n,t,i,a,o,u,f,c,s,l,p,g;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if("string"==typeof(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=$(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,O(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,O(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=w(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!O(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=O(a)?String(t.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=j(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=d(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,g=void 0,(g=l-s.length)<0?s:s=p?s+T(g):T(g)+s)),o+=t.arg||"",u+=1}return o}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function H(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function W(r){var e,n,t,i;for(n=[],i=0,t=C.exec(r);t;)(e=r.slice(i,C.lastIndex-t[0].length)).length&&n.push(e),n.push(H(t)),i=C.lastIndex,t=C.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function L(r){var e,n;if("string"!=typeof r)throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[W(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return G.apply(null,e)}var P=Object.prototype,R=P.toString,Z=P.__defineGetter__,M=P.__defineSetter__,X=P.__lookupGetter__,Y=P.__lookupSetter__,q=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?p:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(L("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===R.call(n))throw new TypeError(L("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(X.call(r,e)||Y.call(r,e)?(t=r.__proto__,r.__proto__=P,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(r,e,n.get),o&&M&&M.call(r,e,n.set),r};function z(r,e,n){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var B,D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),J=Object.prototype.toString,K=Object.prototype.hasOwnProperty,Q="function"==typeof Symbol?Symbol:void 0,rr="function"==typeof Q?Q.toStringTag:"",er=D&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return J.call(r);n=r[rr],a=rr,e=null!=(i=r)&&K.call(i,a);try{r[rr]=void 0}catch(e){return J.call(r)}return t=J.call(r),e?r[rr]=n:delete r[rr],t}:function(r){return J.call(r)},nr="function"==typeof Uint32Array,tr="function"==typeof Uint32Array?Uint32Array:null,ir="function"==typeof Uint32Array?Uint32Array:void 0;B=function(){var r,e,n;if("function"!=typeof tr)return!1;try{e=new tr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(nr&&n instanceof Uint32Array||"[object Uint32Array]"===er(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar,or=B,ur="function"==typeof Float64Array,fr="function"==typeof Float64Array?Float64Array:null,cr="function"==typeof Float64Array?Float64Array:void 0;ar=function(){var r,e,n;if("function"!=typeof fr)return!1;try{e=new fr([1,3.14,-3.14,NaN]),n=e,r=(ur&&n instanceof Float64Array||"[object Float64Array]"===er(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var sr,lr=ar,pr="function"==typeof Uint8Array,gr="function"==typeof Uint8Array?Uint8Array:null,yr="function"==typeof Uint8Array?Uint8Array:void 0;sr=function(){var r,e,n;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,256,257]),n=e,r=(pr&&n instanceof Uint8Array||"[object Uint8Array]"===er(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var dr,hr=sr,vr="function"==typeof Uint16Array,wr="function"==typeof Uint16Array?Uint16Array:null,br="function"==typeof Uint16Array?Uint16Array:void 0;dr=function(){var r,e,n;if("function"!=typeof wr)return!1;try{e=new wr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(vr&&n instanceof Uint16Array||"[object Uint16Array]"===er(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr,Ar={uint16:dr,uint8:hr};(mr=new Ar.uint16(1))[0]=4660;var _r,Er,Ur=52===new Ar.uint8(mr.buffer)[0];!0===Ur?(_r=1,Er=0):(_r=0,Er=1);var Ir={HIGH:_r,LOW:Er},Sr=new lr(1),xr=new or(Sr.buffer),kr=Ir.HIGH,Fr=Ir.LOW;function jr(r,e,n,t){return Sr[0]=r,e[t]=xr[kr],e[t+n]=xr[Fr],e}function Tr(r){return jr(r,[0,0],1,0)}z(Tr,"assign",jr);var Nr=!0===Ur?0:1,Or=new lr(1),Vr=new or(Or.buffer);function $r(r,e){return Or[0]=r,Vr[Nr]=e>>>0,Or[0]}function Gr(r){return 0|r}var Cr,Hr,Wr=2147483647,Lr=2147483648,Pr=!0===Ur?1:0,Rr=new lr(1),Zr=new or(Rr.buffer);function Mr(r){return Rr[0]=r,Zr[Pr]}!0===Ur?(Cr=1,Hr=0):(Cr=0,Hr=1);var Xr={HIGH:Cr,LOW:Hr},Yr=new lr(1),qr=new or(Yr.buffer),zr=Xr.HIGH,Br=Xr.LOW;function Dr(r,e){return qr[zr]=r,qr[Br]=e,Yr[0]}var Jr=[0,0];function Kr(r,e){var n,t;return Tr.assign(r,Jr,1,0),n=Jr[0],n&=Wr,t=Mr(e),Dr(n|=t&=Lr,Jr[1])}var Qr=1072693247,re=1e300,ee=1e-300,ne=!0===Ur?1:0,te=new lr(1),ie=new or(te.buffer);function ae(r,e){return te[0]=r,ie[ne]=e>>>0,te[0]}var oe=1048575,ue=1048576,fe=1072693248,ce=536870912,se=524288,le=20,pe=9007199254740992,ge=.9617966939259756,ye=.9617967009544373,de=-7.028461650952758e-9,he=[1,1.5],ve=[0,.5849624872207642],we=[0,1.350039202129749e-8],be=1.4426950408889634,me=1.4426950216293335,Ae=1.9259629911266175e-8,_e=1023,Ee=-1023,Ue=-1074,Ie=22250738585072014e-324,Se=4503599627370496;function xe(r,e,n,i){return t(r)||f(r)?(e[i]=r,e[i+n]=0,e):0!==r&&s(r)<Ie?(e[i]=r*Se,e[i+n]=-52,e):(e[i]=r,e[i+n]=0,e)}z((function(r){return xe(r,[0,0],1,0)}),"assign",xe);var ke=2146435072,Fe=2220446049250313e-31,je=2148532223,Te=[0,0],Ne=[0,0];function Oe(i,a){var o,u;return 0===a||0===i||t(i)||f(i)?i:(xe(i,Te,1,0),i=Te[0],a+=Te[1],a+=function(r){var e=Mr(r);return(e=(e&ke)>>>20)-n|0}(i),a<Ue?Kr(0,i):a>_e?i<0?e:r:(a<=Ee?(a+=52,u=Fe):u=1,Tr.assign(i,Ne,1,0),o=Ne[0],o&=je,u*Dr(o|=a+n<<20,Ne[1])))}var Ve=.6931471805599453,$e=1048575,Ge=1048576,Ce=1071644672,He=20,We=.6931471824645996,Le=-1.904654299957768e-9,Pe=1072693247,Re=1105199104,Ze=1139802112,Me=1083179008,Xe=1072693248,Ye=1083231232,qe=3230714880,ze=31,Be=1e300,De=1e-300,Je=8008566259537294e-32,Ke=[0,0],Qe=[0,0];function rn(i,o){var l,p,g,y,d,h,v,w,b,m,A,_,E,U;if(t(i)||t(o))return NaN;if(Tr.assign(o,Ke,1,0),d=Ke[0],0===Ke[1]){if(0===o)return 1;if(1===o)return i;if(-1===o)return 1/i;if(.5===o)return c(i);if(-.5===o)return 1/c(i);if(2===o)return i*i;if(3===o)return i*i*i;if(4===o)return(i*=i)*i;if(f(o))return function(e,n){return-1===e?(e-e)/(e-e):1===e?1:s(e)<1==(n===r)?0:r}(i,o)}if(Tr.assign(i,Ke,1,0),y=Ke[0],0===Ke[1]){if(0===y)return function(n,t){return t===e?r:t===r?0:t>0?u(t)?n:0:u(t)?Kr(r,n):r}(i,o);if(1===i)return 1;if(-1===i&&u(o))return-1;if(f(i))return i===e?rn(-0,-o):o<0?0:r}if(i<0&&!1===a(o))return(i-i)/(i-i);if(g=s(i),l=y&Wr|0,p=d&Wr|0,v=d>>>ze|0,h=(h=y>>>ze|0)&&u(o)?-1:1,p>Re){if(p>Ze)return function(r,e){return(Mr(r)&Wr)<=Qr?e<0?re*re:ee*ee:e>0?re*re:ee*ee}(i,o);if(l<Pe)return 1===v?h*Be*Be:h*De*De;if(l>Xe)return 0===v?h*Be*Be:h*De*De;A=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Ae-a*be)-((t=$r(t=(o=me*i)+u,0))-o),r[0]=t,r[1]=n,r}(Qe,g)}else A=function(r,e,t){var i,a,o,u,f,c,s,l,p,g,y,d,h,v,w,b,m,A,_,E,U;return A=0,t<ue&&(A-=53,t=Mr(e*=pe)),A+=(t>>le)-n|0,t=(_=t&oe|0)|fe|0,_<=235662?E=0:_<767610?E=1:(E=0,A+=1,t-=ue),u=$r(a=(b=(e=ae(e,t))-(s=he[E]))*(m=1/(e+s)),0),i=(t>>1|ce)+se,c=ae(0,i+=E<<18),w=(o=a*a)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),c=$r(c=3+(o=u*u)+(w+=(f=m*(b-u*c-u*(e-(c-s))))*(u+a)),0),p=$r(p=(b=u*c)+(m=f*c+(w-(c-3-o))*a),0),g=ye*p,h=(y=de*p+(m-(p-b))*ge+we[E])-((d=$r(d=g+y+(l=ve[E])+(v=A),0))-v-l-g),r[0]=d,r[1]=h,r}(Qe,g,l);if(_=(m=(o-(w=$r(o,0)))*A[0]+o*A[1])+(b=w*A[0]),Tr.assign(_,Ke,1,0),E=Gr(Ke[0]),U=Gr(Ke[1]),E>=Me){if(0!=(E-Me|U))return h*Be*Be;if(m+Je>_-b)return h*Be*Be}else if((E&Wr)>=Ye){if(0!=(E-qe|U))return h*De*De;if(m<=_-b)return h*De*De}return _=function(r,e,t){var i,a,o,u,f,c,s,l,p,g;return p=((l=r&Wr|0)>>He)-n|0,s=0,l>Ce&&(a=ae(0,((s=r+(Ge>>p+1)>>>0)&~($e>>(p=((s&Wr)>>He)-n|0)))>>>0),s=(s&$e|Ge)>>He-p>>>0,r<0&&(s=-s),e-=a),r=Gr(r=Mr(c=1-((c=(o=(a=$r(a=t+e,0))*We)+(u=(t-(a-e))*Ve+a*Le))*(i=c-(a=c*c)*(0===(g=a)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<He>>>0)>>He<=0?Oe(c,s):ae(c,r)}(E,b,m),h*_}return function(t){var i,a,o;if(64!==t.length)throw new Error(function(){var r,e=arguments,n="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}("0l760",64,t));if(i="1"===t[0]?-1:1,o=parseInt(t.substring(1,12),2)-n,a=function(r){var e,n=0;for(e=0;e<r.length;e++)"1"===r[e]&&(n+=rn(2,-(e+1)));return n}(t.substring(12)),o===-n){if(0===a)return 1===i?0:-0;o=-1022}else{if(o===n+1)return 0===a?1===i?r:e:NaN;a+=1}return i*a*rn(2,o)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).fromBinaryString=e();
//# sourceMappingURL=index.js.map
