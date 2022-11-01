// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.7-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.0.3-esm/index.mjs";function i(i){var o,m,a;if(64!==i.length)throw new Error(r("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,i));if(o="1"===i[0]?-1:1,a=parseInt(i.substring(1,12),2)-n,m=function(t){var s,n=0;for(s=0;s<t.length;s++)"1"===t[s]&&(n+=e(2,-(s+1)));return n}(i.substring(12)),a===-n){if(0===m)return 1===o?0:-0;a=-1022}else{if(a===n+1)return 0===m?1===o?t:s:NaN;m+=1}return o*m*e(2,a)}export{i as default};
//# sourceMappingURL=index.mjs.map
