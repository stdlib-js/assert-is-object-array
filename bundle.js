// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).isObjectArray=n()}(this,(function(){"use strict";var t=Math.floor;var n=function(n){return t(n)===n};var r=function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&n(t.length)&&t.length>=0&&t.length<=4294967295};var e=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,o;if(!r(n))return!1;if(0===(e=n.length))return!1;for(o=0;o<e;o++)if(!1===t(n[o]))return!1;return!0}};var o=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return o&&"symbol"==typeof Symbol.toStringTag},f=Object.prototype.toString,i=f;var l=function(t){return i.call(t)},a=Object.prototype.hasOwnProperty;var c=function(t,n){return null!=t&&a.call(t,n)},y="function"==typeof Symbol?Symbol.toStringTag:"",p=c,b=y,s=f;var v=l,d=function(t){var n,r,e;if(null==t)return s.call(t);r=t[b],n=p(t,b);try{t[b]=void 0}catch(n){return s.call(t)}return e=s.call(t),n?t[b]=r:delete t[b],e},g=u()?d:v;var h=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};return e((function(t){return"object"==typeof t&&null!==t&&!h(t)}))}));
//# sourceMappingURL=bundle.js.map
