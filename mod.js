// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
import r from"@stdlib/string-format";var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(r){return r!=r}var u=Math.floor;function i(r){return u(r)===r}function o(r){return i(r/2)}function f(r){return o(r>0?r-1:r+1)}function a(r){return r===n||r===t}var c=Math.sqrt;function y(r){return Math.abs(r)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var v=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;var A="function"==typeof Symbol?Symbol.toStringTag:"";var w=l&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,i;if(null==r)return v.call(r);t=r[A],i=A,n=null!=(u=r)&&p.call(u,i);try{r[A]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[A]=t:delete r[A],e}:function(r){return v.call(r)},b="function"==typeof Uint32Array;var s="function"==typeof Uint32Array?Uint32Array:null;var m,U="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(b&&t instanceof Uint32Array||"[object Uint32Array]"===w(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var h=m,g="function"==typeof Float64Array;var I="function"==typeof Float64Array?Float64Array:null;var d,N="function"==typeof Float64Array?Float64Array:void 0;d=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I([1,3.14,-3.14,NaN]),t=n,r=(g&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var F=d,S="function"==typeof Uint8Array;var E="function"==typeof Uint8Array?Uint8Array:null;var H,O="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,256,257]),t=n,r=(S&&t instanceof Uint8Array||"[object Uint8Array]"===w(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var j=H,T="function"==typeof Uint16Array;var G="function"==typeof Uint16Array?Uint16Array:null;var L,W="function"==typeof Uint16Array?Uint16Array:void 0;L=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(T&&t instanceof Uint16Array||"[object Uint16Array]"===w(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var M,V={uint16:L,uint8:j};(M=new V.uint16(1))[0]=4660;var q,P,Y=52===new V.uint8(M.buffer)[0];!0===Y?(q=1,P=0):(q=0,P=1);var _={HIGH:q,LOW:P},x=new F(1),k=new h(x.buffer),z=_.HIGH,B=_.LOW;function C(r,n){return x[0]=n,r[0]=k[z],r[1]=k[B],r}function D(r,n){return 1===arguments.length?C([0,0],r):C(r,n)}var J=!0===Y?0:1,K=new F(1),Q=new h(K.buffer);function R(r,n){return K[0]=r,Q[J]=n>>>0,K[0]}function X(r){return 0|r}var Z,$,rr=!0===Y?1:0,nr=new F(1),tr=new h(nr.buffer);function er(r){return nr[0]=r,tr[rr]}!0===Y?(Z=1,$=0):(Z=0,$=1);var ur={HIGH:Z,LOW:$},ir=new F(1),or=new h(ir.buffer),fr=ur.HIGH,ar=ur.LOW;function cr(r,n){return or[fr]=r,or[ar]=n,ir[0]}var yr=[0,0];function lr(r,n){var t,e;return D(yr,r),t=yr[0],t&=2147483647,e=er(n),cr(t|=e&=2147483648,yr[1])}var vr=!0===Y?1:0,pr=new F(1),Ar=new h(pr.buffer);function wr(r,n){return pr[0]=r,Ar[vr]=n>>>0,pr[0]}var br=[1,1.5],sr=[0,.5849624872207642],mr=[0,1.350039202129749e-8];function Ur(r,n){return e(n)||a(n)?(r[0]=n,r[1]=0,r):0!==n&&y(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var hr=[0,0],gr=[0,0];function Ir(r,u){var i,o;return 0===u||0===r||e(r)||a(r)?r:(function(r,n){1===arguments.length?Ur([0,0],r):Ur(r,n)}(hr,r),u+=hr[1],u+=function(r){var n=er(r);return(n=(2146435072&n)>>>20)-1023|0}(r=hr[0]),u<-1074?lr(0,r):u>1023?r<0?t:n:(u<=-1023?(u+=52,o=2220446049250313e-31):o=1,D(gr,r),i=gr[0],i&=2148532223,o*cr(i|=u+1023<<20,gr[1])))}var dr=1e300,Nr=1e-300,Fr=[0,0],Sr=[0,0];function Er(r,u){var o,l,v,p,A,w,b,s,m,U,h,g,I,d;if(e(r)||e(u))return NaN;if(D(Fr,u),A=Fr[0],0===Fr[1]){if(0===u)return 1;if(1===u)return r;if(-1===u)return 1/r;if(.5===u)return c(r);if(-.5===u)return 1/c(r);if(2===u)return r*r;if(3===u)return r*r*r;if(4===u)return(r*=r)*r;if(a(u))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:y(r)<1==(t===n)?0:n}(r,u)}if(D(Fr,r),p=Fr[0],0===Fr[1]){if(0===p)return function(r,e){return e===t?n:e===n?0:e>0?f(e)?r:0:f(e)?lr(n,r):n}(r,u);if(1===r)return 1;if(-1===r&&f(u))return-1;if(a(r))return r===t?Er(-0,-u):u<0?0:n}if(r<0&&!1===i(u))return(r-r)/(r-r);if(v=y(r),o=2147483647&p|0,l=2147483647&A|0,b=A>>>31|0,w=(w=p>>>31|0)&&f(u)?-1:1,l>1105199104){if(l>1139802112)return function(r,n){return(2147483647&er(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,u);if(o<1072693247)return 1===b?w*dr*dr:w*Nr*Nr;if(o>1072693248)return 0===b?w*dr*dr:w*Nr*Nr;h=function(r,n){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=R(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r}(Sr,v)}else h=function(r,n,t){var e,u,i,o,f,a,c,y,l,v,p,A,w,b,s,m,U,h,g,I,d;return h=0,t<1048576&&(h-=53,t=er(n*=9007199254740992)),h+=(t>>20)-1023|0,t=1072693248|(g=1048575&t|0),g<=235662?I=0:g<767610?I=1:(I=0,h+=1,t-=1048576),o=R(u=(m=(n=wr(n,t))-(c=br[I]))*(U=1/(n+c)),0),e=524288+(t>>1|536870912),a=wr(0,e+=I<<18),s=(i=u*u)*i*(0===(d=i)?.5999999999999946:.5999999999999946+d*(.4285714285785502+d*(.33333332981837743+d*(.272728123808534+d*(.23066074577556175+.20697501780033842*d))))),a=R(a=3+(i=o*o)+(s+=(f=U*(m-o*a-o*(n-(a-c))))*(o+u)),0),w=(p=-7.028461650952758e-9*(l=R(l=(m=o*a)+(U=f*a+(s-(a-3-i))*u),0))+.9617966939259756*(U-(l-m))+mr[I])-((A=R(A=(v=.9617967009544373*l)+p+(y=sr[I])+(b=h),0))-b-y-v),r[0]=A,r[1]=w,r}(Sr,v,o);if(U=(u-(s=R(u,0)))*h[0]+u*h[1],m=s*h[0],D(Fr,g=U+m),I=X(Fr[0]),d=X(Fr[1]),I>=1083179008){if(0!=(I-1083179008|d))return w*dr*dr;if(U+8008566259537294e-32>g-m)return w*dr*dr}else if((2147483647&I)>=1083231232){if(0!=(I-3230714880|d))return w*Nr*Nr;if(U<=g-m)return w*Nr*Nr}return g=function(r,n,t){var e,u,i,o,f,a,c,y,l,v,p;return v=((l=2147483647&r|0)>>20)-1023|0,y=0,l>1071644672&&(e=((y=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&y)>>20)-1023|0)))>>>0,y=(1048575&y|1048576)>>20-v>>>0,r<0&&(y=-y),n-=i=wr(0,e)),r=X(r=er(c=1-((c=(o=.6931471824645996*(i=R(i=t+n,0)))+(f=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=f-(c-o))+c*a)-c))),(r+=y<<20>>>0)>>20<=0?Ir(c,y):wr(c,r)}(I,m,U),w*g}function Hr(e){var u,i,o;if(64!==e.length)throw new Error(r("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,e));if(u="1"===e[0]?-1:1,o=parseInt(e.substring(1,12),2)-1023,i=function(r){var n,t=0;for(n=0;n<r.length;n++)"1"===r[n]&&(t+=Er(2,-(n+1)));return t}(e.substring(12)),-1023===o){if(0===i)return 1===u?0:-0;o=-1022}else{if(1024===o)return 0===i?1===u?n:t:NaN;i+=1}return u*i*Er(2,o)}export{Hr as default};
//# sourceMappingURL=mod.js.map
