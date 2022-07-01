// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
import r from"@stdlib/string-format";var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;var e=function(r){return r!=r},u=Math.floor;var i=function(r){return u(r)===r},o=i;var f=function(r){return o(r/2)};var a=function(r){return f(r>0?r-1:r+1)},c=n,v=t;var y=function(r){return r===c||r===v},l=Math.sqrt;var p=function(r){return Math.abs(r)};var A=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return A&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,s=b;var m=function(r){return s.call(r)},U=Object.prototype.hasOwnProperty;var h=function(r,n){return null!=r&&U.call(r,n)},g="function"==typeof Symbol?Symbol.toStringTag:"",I=h,d=g,N=b;var F=m,S=function(r){var n,t,e;if(null==r)return N.call(r);t=r[d],n=I(r,d);try{r[d]=void 0}catch(n){return N.call(r)}return e=N.call(r),n?r[d]=t:delete r[d],e},E=w()?S:F,H=E,O="function"==typeof Uint32Array;var j="function"==typeof Uint32Array?Uint32Array:null,T=function(r){return O&&r instanceof Uint32Array||"[object Uint32Array]"===H(r)},G=j;var L=function(){var r,n;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,4294967296,4294967297]),r=T(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var W="function"==typeof Uint32Array?Uint32Array:void 0,M=function(){throw new Error("not implemented")},V=L()?W:M,q=E,P="function"==typeof Float64Array;var Y="function"==typeof Float64Array?Float64Array:null,_=function(r){return P&&r instanceof Float64Array||"[object Float64Array]"===q(r)},x=Y;var k=function(){var r,n;if("function"!=typeof x)return!1;try{n=new x([1,3.14,-3.14,NaN]),r=_(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var z="function"==typeof Float64Array?Float64Array:void 0,B=function(){throw new Error("not implemented")},C=k()?z:B,D=E,J="function"==typeof Uint8Array;var K="function"==typeof Uint8Array?Uint8Array:null,Q=function(r){return J&&r instanceof Uint8Array||"[object Uint8Array]"===D(r)},R=K;var X=function(){var r,n;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,256,257]),r=Q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},rr=X()?Z:$,nr=E,tr="function"==typeof Uint16Array;var er="function"==typeof Uint16Array?Uint16Array:null,ur=function(r){return tr&&r instanceof Uint16Array||"[object Uint16Array]"===nr(r)},ir=er;var or=function(){var r,n;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,65536,65537]),r=ur(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var fr,ar="function"==typeof Uint16Array?Uint16Array:void 0,cr=function(){throw new Error("not implemented")},vr={uint16:or()?ar:cr,uint8:rr};(fr=new vr.uint16(1))[0]=4660;var yr,lr,pr=52===new vr.uint8(fr.buffer)[0];!0===pr?(yr=1,lr=0):(yr=0,lr=1);var Ar=V,wr={HIGH:yr,LOW:lr},br=new C(1),sr=new Ar(br.buffer),mr=wr.HIGH,Ur=wr.LOW;var hr=function(r,n){return br[0]=n,r[0]=sr[mr],r[1]=sr[Ur],r};var gr=function(r,n){return 1===arguments.length?hr([0,0],r):hr(r,n)},Ir=V,dr=!0===pr?0:1,Nr=new C(1),Fr=new Ir(Nr.buffer);var Sr=function(r,n){return Nr[0]=r,Fr[dr]=n>>>0,Nr[0]},Er=Sr;var Hr=function(r){return 0|r},Or=V,jr=!0===pr?1:0,Tr=new C(1),Gr=new Or(Tr.buffer);var Lr,Wr,Mr=function(r){return Tr[0]=r,Gr[jr]};!0===pr?(Lr=1,Wr=0):(Lr=0,Wr=1);var Vr=V,qr={HIGH:Lr,LOW:Wr},Pr=new C(1),Yr=new Vr(Pr.buffer),_r=qr.HIGH,xr=qr.LOW;var kr=function(r,n){return Yr[_r]=r,Yr[xr]=n,Pr[0]},zr=kr,Br=gr,Cr=Mr,Dr=zr,Jr=[0,0];var Kr=function(r,n){var t,e;return Br(Jr,r),t=Jr[0],t&=2147483647,e=Cr(n),Dr(t|=e&=2147483648,Jr[1])},Qr=a,Rr=Kr,Xr=t,Zr=n;var $r=function(r,n){return n===Xr?Zr:n===Zr?0:n>0?Qr(n)?r:0:Qr(n)?Rr(Zr,r):Zr},rn=Mr;var nn=function(r,n){return(2147483647&rn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},tn=p,en=n;var un=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:tn(r)<1==(n===en)?0:en},on=V,fn=!0===pr?1:0,an=new C(1),cn=new on(an.buffer);var vn=function(r,n){return an[0]=r,cn[fn]=n>>>0,an[0]};var yn=Mr,ln=Er,pn=vn,An=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},wn=[1,1.5],bn=[0,.5849624872207642],sn=[0,1.350039202129749e-8];var mn=Er,Un=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var hn=y,gn=e,In=p;var dn=function(r,n){return gn(n)||hn(n)?(r[0]=n,r[1]=0,r):0!==n&&In(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Nn=Mr;var Fn=function(r){var n=Nn(r);return(n=(2146435072&n)>>>20)-1023|0},Sn=n,En=t,Hn=e,On=y,jn=Kr,Tn=function(r,n){return 1===arguments.length?dn([0,0],r):dn(r,n)},Gn=Fn,Ln=gr,Wn=zr,Mn=[0,0],Vn=[0,0];var qn=function(r,n){var t,e;return 0===n||0===r||Hn(r)||On(r)?r:(Tn(Mn,r),n+=Mn[1],(n+=Gn(r=Mn[0]))<-1074?jn(0,r):n>1023?r<0?En:Sn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Ln(Vn,r),t=Vn[0],t&=2148532223,e*Wn(t|=n+1023<<20,Vn[1])))};var Pn=Mr,Yn=vn,_n=Er,xn=Hr,kn=qn,zn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Bn=e,Cn=a,Dn=y,Jn=i,Kn=l,Qn=p,Rn=gr,Xn=Er,Zn=Hr,$n=t,rt=n,nt=$r,tt=nn,et=un,ut=function(r,n,t){var e,u,i,o,f,a,c,v,y,l,p,A,w,b,s,m,U,h,g,I;return h=0,t<1048576&&(h-=53,t=yn(n*=9007199254740992)),h+=(t>>20)-1023|0,t=1072693248|(g=1048575&t|0),g<=235662?I=0:g<767610?I=1:(I=0,h+=1,t-=1048576),e=524288+(t>>1|536870912),f=(U=1/((n=pn(n,t))+(c=wn[I])))*((m=n-c)-(o=ln(u=m*U,0))*(a=pn(0,e+=I<<18))-o*(n-(a-c))),s=(i=u*u)*i*An(i),a=ln(a=3+(i=o*o)+(s+=f*(o+u)),0),w=(p=-7.028461650952758e-9*(y=ln(y=(m=o*a)+(U=f*a+(s-(a-3-i))*u),0))+.9617966939259756*(U-(y-m))+sn[I])-((A=ln(A=(l=.9617967009544373*y)+p+(v=bn[I])+(b=h),0))-b-v-l),r[0]=A,r[1]=w,r},it=function(r,n){var t,e,u,i,o;return t=(o=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*Un(u)))-((e=mn(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r},ot=function(r,n,t){var e,u,i,o,f,a,c,v,y,l;return l=((y=2147483647&r|0)>>20)-1023|0,v=0,y>1071644672&&(e=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),n-=i=Yn(0,e)),a=(f=.6931471805599453*(t-((i=_n(i=t+n,0))-n))+-1.904654299957768e-9*i)-((c=(o=.6931471824645996*i)+f)-o),u=c-(i=c*c)*zn(i),r=Pn(c=1-(c*u/(u-2)-(a+c*a)-c)),r=xn(r),c=(r+=v<<20>>>0)>>20<=0?kn(c,v):Yn(c,r)},ft=1e300,at=1e-300,ct=[0,0],vt=[0,0];var yt=function r(n,t){var e,u,i,o,f,a,c,v,y,l,p,A,w,b;if(Bn(n)||Bn(t))return NaN;if(Rn(ct,t),f=ct[0],0===ct[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Kn(n);if(-.5===t)return 1/Kn(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Dn(t))return et(n,t)}if(Rn(ct,n),o=ct[0],0===ct[1]){if(0===o)return nt(n,t);if(1===n)return 1;if(-1===n&&Cn(t))return-1;if(Dn(n))return n===$n?r(-0,-t):t<0?0:rt}if(n<0&&!1===Jn(t))return(n-n)/(n-n);if(i=Qn(n),e=2147483647&o|0,u=2147483647&f|0,c=f>>>31|0,a=(a=o>>>31|0)&&Cn(t)?-1:1,u>1105199104){if(u>1139802112)return tt(n,t);if(e<1072693247)return 1===c?a*ft*ft:a*at*at;if(e>1072693248)return 0===c?a*ft*ft:a*at*at;p=it(vt,i)}else p=ut(vt,i,e);if(l=(t-(v=Xn(t,0)))*p[0]+t*p[1],y=v*p[0],Rn(ct,A=l+y),w=Zn(ct[0]),b=Zn(ct[1]),w>=1083179008){if(0!=(w-1083179008|b))return a*ft*ft;if(l+8008566259537294e-32>A-y)return a*ft*ft}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|b))return a*at*at;if(l<=A-y)return a*at*at}return a*(A=ot(w,y,l))},lt=yt;function pt(e){var u,i,o;if(64!==e.length)throw new Error(r("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,e));if(u="1"===e[0]?-1:1,o=parseInt(e.substring(1,12),2)-1023,i=function(r){var n,t=0;for(n=0;n<r.length;n++)"1"===r[n]&&(t+=lt(2,-(n+1)));return t}(e.substring(12)),-1023===o){if(0===i)return 1===u?0:-0;o=-1022}else{if(1024===o)return 0===i?1===u?n:t:NaN;i+=1}return u*i*lt(2,o)}export{pt as default};
//# sourceMappingURL=mod.js.map
