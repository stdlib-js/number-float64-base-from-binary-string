"use strict";var a=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var o=a(function(w,n){"use strict";var f=require("@stdlib/math-base-special-pow");function l(i){var r=0,e;for(e=0;e<i.length;e++)i[e]==="1"&&(r+=f(2,-(e+1)));return r}n.exports=l});var v=a(function(x,s){"use strict";var g=require("@stdlib/constants-float64-pinf"),q=require("@stdlib/constants-float64-ninf"),t=require("@stdlib/constants-float64-exponent-bias"),p=require("@stdlib/math-base-special-pow"),m=require("@stdlib/string-format"),c=o();function h(i){var r,e,u;if(i.length!==64)throw new Error(m("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,i));if(r=i[0]==="1"?-1:1,u=parseInt(i.substring(1,12),2)-t,e=c(i.substring(12)),u===-t){if(e===0)return r===1?0:-0;u=-1022}else{if(u===t+1)return e===0?r===1?g:q:NaN;e+=1}return r*e*p(2,u)}s.exports=h});var I=v();module.exports=I;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
