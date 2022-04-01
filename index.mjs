// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var i=e;var a=t,o=s,m=n,d=e,l=r,f=function(t){var s,n=0;for(s=0;s<t.length;s++)"1"===t[s]&&(n+=i(2,-(s+1)));return n};var p=function(t){var s,n,e;if(64!==t.length)throw new Error(l("invalid argument. Input string must have a length equal to `%u`. Value: `%s`.",64,t));if(s="1"===t[0]?-1:1,e=parseInt(t.substring(1,12),2)-m,n=f(t.substring(12)),e===-m){if(0===n)return 1===s?0:-0;e=-1022}else{if(e===m+1)return 0===n?1===s?a:o:NaN;n+=1}return s*n*d(2,e)};export{p as default};
//# sourceMappingURL=index.mjs.map
