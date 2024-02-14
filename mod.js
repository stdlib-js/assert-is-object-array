// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function e(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length&&(i=e.length,r(i)===i)&&e.length>=0&&e.length<=4294967295;var i}function i(r){return"number"==typeof r}function t(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function a(r,e,i){var a=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=i?r+t(n):t(n)+r,a&&(r="-"+r)),r}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(r){var e,t,s;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===r.specifier||10!==e)&&(s=4294967295+s+1),s<0?(t=(-s).toString(e),r.precision&&(t=a(t,r.precision,r.padRight)),t="-"+t):(t=s.toString(e),s||r.precision?r.precision&&(t=a(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):n.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var p=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,u=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,w=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,a=parseFloat(r.arg);if(!isFinite(a)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);a=r.arg}switch(r.specifier){case"e":case"E":t=a.toExponential(r.precision);break;case"f":case"F":t=a.toFixed(r.precision);break;case"g":case"G":p(a)<1e-4?((e=r.precision)>0&&(e-=1),t=a.toExponential(e)):t=a.toPrecision(r.precision),r.alternate||(t=u.call(t,b,"$1e"),t=u.call(t,v,"e"),t=u.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=u.call(t,g,"e+0$1"),t=u.call(t,h,"e-0$1"),r.alternate&&(t=u.call(t,d,"$1."),t=u.call(t,w,"$1.e")),a>=0&&r.sign&&(t=r.sign+t),t=r.specifier===f.call(r.specifier)?f.call(t):l.call(t)}function x(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function S(r,e,i){var t=e-r.length;return t<0?r:r=i?r+x(t):x(t)+r}var k=String.fromCharCode,E=isNaN,A=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $(r){var e,i,t,n,o,p,l,f,u;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(p="",l=1,f=0;f<r.length;f++)if(c(t=r[f]))p+=t;else{if(e=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,u=0;u<i.length;u++)switch(n=i.charAt(u)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,E(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=S(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,i,t,a;for(i=[],a=0,t=T.exec(r);t;)(e=r.slice(a,T.lastIndex-t[0].length)).length&&i.push(e),i.push(F(t)),a=T.lastIndex,t=T.exec(r);return(e=r.slice(a)).length&&i.push(e),i}function C(r){return"string"==typeof r}function R(r){var e,i;if(!C(r))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],i=1;i<arguments.length;i++)e.push(arguments[i]);return $.apply(null,e)}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var j=Object.prototype.toString;var O=Object.prototype.hasOwnProperty;var W="function"==typeof Symbol?Symbol:void 0,L="function"==typeof W?W.toStringTag:"";var M=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,i,t,a,n;if(null==r)return j.call(r);i=r[L],n=L,e=null!=(a=r)&&O.call(a,n);try{r[L]=void 0}catch(e){return j.call(r)}return t=j.call(r),e?r[L]=i:delete r[L],t}:function(r){return j.call(r)};var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===M(r)};var N=function(r){if("function"!=typeof r)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",r));return function(i){var t,a;if(!e(i))return!1;if(0===(t=i.length))return!1;for(a=0;a<t;a++)if(!1===r(i[a]))return!1;return!0}}((function(r){return"object"==typeof r&&null!==r&&!G(r)}));export{N as default};
//# sourceMappingURL=mod.js.map
