var t,e,r,i,n,o,s,a,h,u,l,c,f,p,d,_,y,v,m,g,b,x,T,E,A,S,R,O,I,P,w,M,D,C,F,N,L,B,G,U,k,X,j,H,Y,z,V,W,q,K,Z,J,Q,$,tt,te,tr,ti,tn,to,ts,ta,th,tu,tl,tc,tf,tp,td,t_,ty,tv,tm,tg,tb,tx,tT,tE,tA,tS,tR,tO,tI,tP,tw="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function tM(t){return t&&t.__esModule?t.default:t}var tD={},tC={},tF=tw.parcelRequirea0e5;/**
 * @constructor
 */function tN(t,e){this.name="AggregateError",this.errors=t,this.message=e||""}null==tF&&((tF=function(t){if(t in tD)return tD[t].exports;if(t in tC){var e=tC[t];delete tC[t];var r={id:t,exports:{}};return tD[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){tC[t]=e},tw.parcelRequirea0e5=tF),tF.register("dBHwk",function(t,e){!function(r){/** Detect free variables */var i=e&&!e.nodeType&&e,n=t&&!t.nodeType&&t,o="object"==typeof tw&&tw;(o.global===o||o.window===o||o.self===o)&&(r=o);/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */var s,/** Temporary variable */a,/** Regular expressions */h=/^xn--/,u=/[^\x20-\x7E]/,l=/[\x2E\u3002\uFF0E\uFF61]/g,/** Error messages */c={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},f=Math.floor,p=String.fromCharCode;/*--------------------------------------------------------------------------*//**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */function d(t){throw RangeError(c[t])}/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */function _(t,e){for(var r=t.length,i=[];r--;)i[r]=e(t[r]);return i}/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */function y(t,e){var r=t.split("@"),i="";return r.length>1&&(// In email addresses, only the domain name should be punycoded. Leave
// the local part (i.e. everything up to `@`) intact.
i=r[0]+"@",t=r[1]),i+_(// Avoid `split(regex)` for IE8 compatibility. See #17.
(t=t.replace(l,".")).split("."),e).join(".")}/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */function v(t){for(var e,r,i=[],n=0,o=t.length;n<o;)(e=t.charCodeAt(n++))>=55296&&e<=56319&&n<o?(64512&// high surrogate, and there is a next character
(r=t.charCodeAt(n++)))==56320?i.push(((1023&e)<<10)+(1023&r)+65536):(// unmatched surrogate; only append this code unit, in case the next
// code unit is the high surrogate of a surrogate pair
i.push(e),n--):i.push(e);return i}/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */function m(t){return _(t,function(t){var e="";return t>65535&&(t-=65536,e+=p(t>>>10&1023|55296),t=56320|1023&t),e+=p(t)}).join("")}/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */function g(t,e){//  0..25 map to ASCII a..z or A..Z
// 26..35 map to ASCII 0..9
return t+22+75*(t<26)-((0!=e)<<5)}/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */function b(t,e,r){var i=0;for(t=r?f(t/700):t>>1,t+=f(t/e);t>455;i+=36)t=f(t/35);return f(i+36*t/(t+38))}/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */function x(t){// Don't use UCS-2
var e,r,i,n,o,s,a,h,u,l,/** Cached calculation results */c,p=[],_=t.length,y=0,v=128,g=72;for(// Handle the basic code points: let `basic` be the number of input code
// points before the last delimiter, or `0` if there is none, then copy
// the first basic code points to the output.
(i=t.lastIndexOf("-"))<0&&(i=0),n=0;n<i;++n)t.charCodeAt(n)>=128&&d("not-basic"),p.push(t.charCodeAt(n));// Main decoding loop: start just after the last delimiter if any basic code
// points were copied; start at the beginning otherwise.
for(o=i>0?i+1:0;o<_;){// `index` is the index of the next character to be consumed.
// Decode a generalized variable-length integer into `delta`,
// which gets added to `i`. The overflow checking is easier
// if we increase `i` as we go, then subtract off its starting
// value at the end to obtain `delta`.
for(s=y,a=1,h=36;o>=_&&d("invalid-input"),((u=(e=t.charCodeAt(o++))-48<10?e-22:e-65<26?e-65:e-97<26?e-97:36)>=36||u>f((2147483647-y)/a))&&d("overflow"),y+=u*a,!(u<(l=h<=g?1:h>=g+26?26:h-g));h+=36)a>f(2147483647/(c=36-l))&&d("overflow"),a*=c;g=b(y-s,r=p.length+1,0==s),f(y/r)>2147483647-v&&d("overflow"),v+=f(y/r),y%=r,// Insert `n` at position `i` of the output
p.splice(y++,0,v)}return m(p)}/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */function T(t){var e,r,i,n,o,s,a,h,u,l,c,/** `inputLength` will hold the number of code points in `input`. */_,/** Cached calculation results */y,m,x,T=[];// Handle the basic code points
for(s=0,// Cache the length
_=// Convert the input in UCS-2 to Unicode
(t=v(t)).length,// Initialize the state
e=128,r=0,o=72;s<_;++s)(c=t[s])<128&&T.push(p(c));// Main encoding loop:
for(i=n=T.length,n&&T.push("-");i<_;){// All non-basic code points < n have been handled already. Find the next
// larger one:
for(a=2147483647,s=0;s<_;++s)(c=t[s])>=e&&c<a&&(a=c);for(a-e>f((2147483647-r)/// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
// but guard against overflow
(y=i+1))&&d("overflow"),r+=(a-e)*y,e=a,s=0;s<_;++s)if((c=t[s])<e&&++r>2147483647&&d("overflow"),c==e){// Represent delta as a generalized variable-length integer
for(h=r,u=36;!(h<(l=u<=o?1:u>=o+26?26:u-o));u+=36)x=h-l,m=36-l,T.push(p(g(l+x%m,0))),h=f(x/m);T.push(p(g(h,0))),o=b(r,y,i==n),r=0,++i}++r,++e}return T.join("")}/** Expose `punycode` */// Some AMD build optimizers, like r.js, check for specific condition patterns
// like the following:
if(/*--------------------------------------------------------------------------*//** Define the public API */s={/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */version:"1.4.1",/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */ucs2:{decode:v,encode:m},decode:x,encode:T,toASCII:/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */function(t){return y(t,function(t){return u.test(t)?"xn--"+T(t):t})},toUnicode:/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */function(t){return y(t,function(t){return h.test(t)?x(t.slice(4).toLowerCase()):t})}},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return s});else if(i&&n){if(t.exports==i)n.exports=s;else for(a in s)s.hasOwnProperty(a)&&(i[a]=s[a])}else r.punycode=s}(this)}),tF.register("24qIq",function(t,e){var r="undefined"!=typeof Symbol&&Symbol,i=tF("7YWkK");t.exports=function(){return"function"==typeof r&&"function"==typeof Symbol&&"symbol"==typeof r("foo")&&"symbol"==typeof Symbol("bar")&&i()}}),tF.register("7YWkK",function(t,e){/* eslint complexity: [2, 18], max-statements: [2, 33] */t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e||"[object Symbol]"!==Object.prototype.toString.call(e)||"[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;// eslint-disable-line no-restricted-syntax, no-unreachable-loop
if("function"==typeof Object.keys&&0!==Object.keys(t).length||"function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var i=Object.getOwnPropertySymbols(t);if(1!==i.length||i[0]!==e||!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(t,e);if(42!==n.value||!0!==n.enumerable)return!1}return!0}}),tF.register("dSRh6",function(t,e){var r={foo:{}},i=Object;t.exports=function(){return({__proto__:r}).foo===r.foo&&!(({__proto__:null})instanceof i)}}),tN.prototype=Error.prototype;// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var tL=setTimeout;function tB(t){return!!(t&&void 0!==t.length)}function tG(){}/**
 * @constructor
 * @param {Function} fn
 */function tU(t){if(!(this instanceof tU))throw TypeError("Promises must be constructed via new");if("function"!=typeof t)throw TypeError("not a function");/** @type {!number} */this._state=0,/** @type {!boolean} */this._handled=!1,/** @type {Promise|undefined} */this._value=void 0,/** @type {!Array<!Function>} */this._deferreds=[],tz(t,this)}function tk(t,e){for(;3===t._state;)t=t._value;if(0===t._state){t._deferreds.push(e);return}t._handled=!0,tU._immediateFn(function(){var r,i=1===t._state?e.onFulfilled:e.onRejected;if(null===i){(1===t._state?tX:tj)(e.promise,t._value);return}try{r=i(t._value)}catch(t){tj(e.promise,t);return}tX(e.promise,r)})}function tX(t,e){try{// Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
if(e===t)throw TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if(e instanceof tU){t._state=3,t._value=e,tH(t);return}if("function"==typeof r){tz(function(){r.apply(e,arguments)},t);return}}t._state=1,t._value=e,tH(t)}catch(e){tj(t,e)}}function tj(t,e){t._state=2,t._value=e,tH(t)}function tH(t){2===t._state&&0===t._deferreds.length&&tU._immediateFn(function(){t._handled||tU._unhandledRejectionFn(t._value)});for(var e=0,r=t._deferreds.length;e<r;e++)tk(t,t._deferreds[e]);t._deferreds=null}/**
 * @constructor
 */function tY(t,e,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=r}/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */function tz(t,e){var r=!1;try{t(function(t){r||(r=!0,tX(e,t))},function(t){r||(r=!0,tj(e,t))})}catch(t){if(r)return;r=!0,tj(e,t)}}tU.prototype.catch=function(t){return this.then(null,t)},tU.prototype.then=function(t,e){// @ts-ignore
var r=new this.constructor(tG);return tk(this,new tY(t,e,r)),r},tU.prototype.finally=/*!
 * pixi.js - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*!
 * @pixi/polyfill - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/polyfill is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//**
 * @this {Promise}
 */function(t){var e=this.constructor;return this.then(function(r){// @ts-ignore
return e.resolve(t()).then(function(){return r})},function(r){// @ts-ignore
return e.resolve(t()).then(function(){// @ts-ignore
return e.reject(r)})})},tU.all=function(t){return new tU(function(e,r){if(!tB(t))return r(TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(t);if(0===i.length)return e([]);for(var n=i.length,o=0;o<i.length;o++)!function t(o,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a){a.call(s,function(e){t(o,e)},r);return}}i[o]=s,0==--n&&e(i)}catch(t){r(t)}}(o,i[o])})},tU.any=function(t){var e=this;return new e(function(r,i){if(!(t&&void 0!==t.length))return i(TypeError("Promise.any accepts an array"));var n=Array.prototype.slice.call(t);if(0===n.length)return i();for(var o=[],s=0;s<n.length;s++)try{e.resolve(n[s]).then(r).catch(function(t){o.push(t),o.length===n.length&&i(new tN(o,"All promises were rejected"))})}catch(t){i(t)}})},tU.allSettled=function(t){return new this(function(e,r){if(!(t&&void 0!==t.length))return r(TypeError(typeof t+" "+t+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var i=Array.prototype.slice.call(t);if(0===i.length)return e([]);for(var n=i.length,o=0;o<i.length;o++)!function t(r,o){if(o&&("object"==typeof o||"function"==typeof o)){var s=o.then;if("function"==typeof s){s.call(o,function(e){t(r,e)},function(t){i[r]={status:"rejected",reason:t},0==--n&&e(i)});return}}i[r]={status:"fulfilled",value:o},0==--n&&e(i)}(o,i[o])})},tU.resolve=function(t){return t&&"object"==typeof t&&t.constructor===tU?t:new tU(function(e){e(t)})},tU.reject=function(t){return new tU(function(e,r){r(t)})},tU.race=function(t){return new tU(function(e,r){if(!tB(t))return r(TypeError("Promise.race accepts an array"));for(var i=0,n=t.length;i<n;i++)tU.resolve(t[i]).then(e,r)})},// Use polyfill for setImmediate for performance gains
tU._immediateFn="function"==typeof setImmediate&&function(t){// @ts-ignore
setImmediate(t)}||function(t){tL(t,0)},tU._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t);// eslint-disable-line no-console
};var tV={},tW=Object.getOwnPropertySymbols,tq=Object.prototype.hasOwnProperty,tK=Object.prototype.propertyIsEnumerable;// performance.now
if(tV=!function(){try{if(!Object.assign)return!1;// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var t=new String("abc");// eslint-disable-line no-new-wrappers
if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var i=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==i.join(""))return!1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var n={};if("abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},n)).join(""))return!1;return!0}catch(t){// We don't expect any of the above to throw, but better to be safe.
return!1}}()?function(t,e){for(var r,i,n=function(t){if(null==t)throw TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),o=1;o<arguments.length;o++){for(var s in r=Object(arguments[o]))tq.call(r,s)&&(n[s]=r[s]);if(tW){i=tW(r);for(var a=0;a<i.length;a++)tK.call(r,i[a])&&(n[i[a]]=r[i[a]])}}return n}:Object.assign,"undefined"==typeof globalThis&&("undefined"!=typeof self?// @ts-expect-error not-writable ts(2540) error only on node
self.globalThis=self:void 0!==tw&&// @ts-expect-error not-writable ts(2540) error only on node
(tw.globalThis=tw)),globalThis.Promise||(globalThis.Promise=tU),Object.assign||(Object.assign=/*@__PURE__*/tM(tV)),Date.now&&Date.prototype.getTime||(Date.now=function(){return new Date().getTime()}),!(globalThis.performance&&globalThis.performance.now)){var tZ=Date.now();globalThis.performance||(globalThis.performance={}),globalThis.performance.now=function(){return Date.now()-tZ}}for(var tJ=Date.now(),tQ=["ms","moz","webkit","o"],t$=0;t$<tQ.length&&!globalThis.requestAnimationFrame;++t$){var t0=tQ[t$];globalThis.requestAnimationFrame=globalThis[t0+"RequestAnimationFrame"],globalThis.cancelAnimationFrame=globalThis[t0+"CancelAnimationFrame"]||globalThis[t0+"CancelRequestAnimationFrame"]}globalThis.requestAnimationFrame||(globalThis.requestAnimationFrame=function(t){if("function"!=typeof t)throw TypeError(t+"is not a function");var e=Date.now(),r=16+tJ-e;return r<0&&(r=0),tJ=e,globalThis.self.setTimeout(function(){tJ=Date.now(),t(performance.now())},r)}),globalThis.cancelAnimationFrame||(globalThis.cancelAnimationFrame=function(t){return clearTimeout(t)}),Math.sign||(Math.sign=function(t){return 0===(t=Number(t))||isNaN(t)?t:t>0?1:-1}),Number.isInteger||(Number.isInteger=function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}),globalThis.ArrayBuffer||(globalThis.ArrayBuffer=Array),globalThis.Float32Array||(globalThis.Float32Array=Array),globalThis.Uint32Array||(globalThis.Uint32Array=Array),globalThis.Uint16Array||(globalThis.Uint16Array=Array),globalThis.Uint8Array||(globalThis.Uint8Array=Array),globalThis.Int32Array||(globalThis.Int32Array=Array),(t=j||(j={}))[t.WEBGL_LEGACY=0]="WEBGL_LEGACY",t[t.WEBGL=1]="WEBGL",t[t.WEBGL2=2]="WEBGL2",(e=H||(H={}))[e.UNKNOWN=0]="UNKNOWN",e[e.WEBGL=1]="WEBGL",e[e.CANVAS=2]="CANVAS",(r=Y||(Y={}))[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL",(i=z||(z={}))[i.NORMAL=0]="NORMAL",i[i.ADD=1]="ADD",i[i.MULTIPLY=2]="MULTIPLY",i[i.SCREEN=3]="SCREEN",i[i.OVERLAY=4]="OVERLAY",i[i.DARKEN=5]="DARKEN",i[i.LIGHTEN=6]="LIGHTEN",i[i.COLOR_DODGE=7]="COLOR_DODGE",i[i.COLOR_BURN=8]="COLOR_BURN",i[i.HARD_LIGHT=9]="HARD_LIGHT",i[i.SOFT_LIGHT=10]="SOFT_LIGHT",i[i.DIFFERENCE=11]="DIFFERENCE",i[i.EXCLUSION=12]="EXCLUSION",i[i.HUE=13]="HUE",i[i.SATURATION=14]="SATURATION",i[i.COLOR=15]="COLOR",i[i.LUMINOSITY=16]="LUMINOSITY",i[i.NORMAL_NPM=17]="NORMAL_NPM",i[i.ADD_NPM=18]="ADD_NPM",i[i.SCREEN_NPM=19]="SCREEN_NPM",i[i.NONE=20]="NONE",i[i.SRC_OVER=0]="SRC_OVER",i[i.SRC_IN=21]="SRC_IN",i[i.SRC_OUT=22]="SRC_OUT",i[i.SRC_ATOP=23]="SRC_ATOP",i[i.DST_OVER=24]="DST_OVER",i[i.DST_IN=25]="DST_IN",i[i.DST_OUT=26]="DST_OUT",i[i.DST_ATOP=27]="DST_ATOP",i[i.ERASE=26]="ERASE",i[i.SUBTRACT=28]="SUBTRACT",i[i.XOR=29]="XOR",(n=V||(V={}))[n.POINTS=0]="POINTS",n[n.LINES=1]="LINES",n[n.LINE_LOOP=2]="LINE_LOOP",n[n.LINE_STRIP=3]="LINE_STRIP",n[n.TRIANGLES=4]="TRIANGLES",n[n.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",n[n.TRIANGLE_FAN=6]="TRIANGLE_FAN",(o=W||(W={}))[o.RGBA=6408]="RGBA",o[o.RGB=6407]="RGB",o[o.RG=33319]="RG",o[o.RED=6403]="RED",o[o.RGBA_INTEGER=36249]="RGBA_INTEGER",o[o.RGB_INTEGER=36248]="RGB_INTEGER",o[o.RG_INTEGER=33320]="RG_INTEGER",o[o.RED_INTEGER=36244]="RED_INTEGER",o[o.ALPHA=6406]="ALPHA",o[o.LUMINANCE=6409]="LUMINANCE",o[o.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",o[o.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",o[o.DEPTH_STENCIL=34041]="DEPTH_STENCIL",(s=q||(q={}))[s.TEXTURE_2D=3553]="TEXTURE_2D",s[s.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",s[s.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",s[s.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",s[s.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",s[s.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",s[s.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",s[s.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",s[s.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",(a=K||(K={}))[a.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",a[a.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",a[a.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",a[a.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",a[a.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",a[a.UNSIGNED_INT=5125]="UNSIGNED_INT",a[a.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",a[a.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",a[a.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",a[a.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",a[a.BYTE=5120]="BYTE",a[a.SHORT=5122]="SHORT",a[a.INT=5124]="INT",a[a.FLOAT=5126]="FLOAT",a[a.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",a[a.HALF_FLOAT=36193]="HALF_FLOAT",(h=Z||(Z={}))[h.FLOAT=0]="FLOAT",h[h.INT=1]="INT",h[h.UINT=2]="UINT",(u=J||(J={}))[u.NEAREST=0]="NEAREST",u[u.LINEAR=1]="LINEAR",(l=Q||(Q={}))[l.CLAMP=33071]="CLAMP",l[l.REPEAT=10497]="REPEAT",l[l.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",(c=$||($={}))[c.OFF=0]="OFF",c[c.POW2=1]="POW2",c[c.ON=2]="ON",c[c.ON_MANUAL=3]="ON_MANUAL",(f=tt||(tt={}))[f.NPM=0]="NPM",f[f.UNPACK=1]="UNPACK",f[f.PMA=2]="PMA",f[f.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",f[f.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",f[f.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",f[f.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA",(p=te||(te={}))[p.NO=0]="NO",p[p.YES=1]="YES",p[p.AUTO=2]="AUTO",p[p.BLEND=0]="BLEND",p[p.CLEAR=1]="CLEAR",p[p.BLIT=2]="BLIT",(d=tr||(tr={}))[d.AUTO=0]="AUTO",d[d.MANUAL=1]="MANUAL",(_=ti||(ti={})).LOW="lowp",_.MEDIUM="mediump",_.HIGH="highp",(y=tn||(tn={}))[y.NONE=0]="NONE",y[y.SCISSOR=1]="SCISSOR",y[y.STENCIL=2]="STENCIL",y[y.SPRITE=3]="SPRITE",y[y.COLOR=4]="COLOR",(v=to||(to={}))[v.RED=1]="RED",v[v.GREEN=2]="GREEN",v[v.BLUE=4]="BLUE",v[v.ALPHA=8]="ALPHA",(m=ts||(ts={}))[m.NONE=0]="NONE",m[m.LOW=2]="LOW",m[m.MEDIUM=4]="MEDIUM",m[m.HIGH=8]="HIGH",(g=ta||(ta={}))[g.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",g[g.ARRAY_BUFFER=34962]="ARRAY_BUFFER",// NOT YET SUPPORTED
g[g.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER";var t1=/iPhone/i,t2=/iPod/i,t3=/iPad/i,t4=/\biOS-universal(?:.+)Mac\b/i,t8=/\bAndroid(?:.+)Mobile\b/i,t6=/Android/i,t5=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,t9=/Silk/i,t7=/Windows Phone/i,et=/\bWindows(?:.+)ARM\b/i,ee=/BlackBerry/i,er=/BB10/i,ei=/Opera Mini/i,en=/\b(CriOS|Chrome)(?:.+)Mobile/i,eo=/Mobile(?:.+)Firefox\b/i,es=function(t){return void 0!==t&&"MacIntel"===t.platform&&"number"==typeof t.maxTouchPoints&&t.maxTouchPoints>1&&"undefined"==typeof MSStream},ea=(x={userAgent:"",platform:"",maxTouchPoints:0},(b=globalThis.navigator)||"undefined"==typeof navigator?"string"==typeof b?x.userAgent=b:b&&b.userAgent&&(x={userAgent:b.userAgent,platform:b.platform,maxTouchPoints:b.maxTouchPoints||0}):x={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0},void 0!==(E=(T=x.userAgent).split("[FBAN"))[1]&&(T=E[0]),void 0!==(E=T.split("Twitter"))[1]&&(T=E[0]),(R={apple:{phone:(A=T,S=function(t){return t.test(A)})(t1)&&!S(t7),ipod:S(t2),tablet:!S(t1)&&(S(t3)||es(x))&&!S(t7),universal:S(t4),device:(S(t1)||S(t2)||S(t3)||S(t4)||es(x))&&!S(t7)},amazon:{phone:S(t5),tablet:!S(t5)&&S(t9),device:S(t5)||S(t9)},android:{phone:!S(t7)&&S(t5)||!S(t7)&&S(t8),tablet:!S(t7)&&!S(t5)&&!S(t8)&&(S(t9)||S(t6)),device:!S(t7)&&(S(t5)||S(t9)||S(t8)||S(t6))||S(/\bokhttp\b/i)},windows:{phone:S(t7),tablet:S(et),device:S(t7)||S(et)},other:{blackberry:S(ee),blackberry10:S(er),opera:S(ei),firefox:S(eo),chrome:S(en),device:S(ee)||S(er)||S(ei)||S(eo)||S(en)},any:!1,phone:!1,tablet:!1}).any=R.apple.device||R.android.device||R.windows.device||R.other.device,R.phone=R.apple.phone||R.android.phone||R.windows.phone,R.tablet=R.apple.tablet||R.android.tablet||R.windows.tablet,R),eh={/**
     * This adapter is used to call methods that are platform dependent.
     * For example `document.createElement` only runs on the web but fails in node environments.
     * This allows us to support more platforms by abstracting away specific implementations per platform.
     *
     * By default the adapter is set to work in the browser. However you can create your own
     * by implementing the `IAdapter` interface. See `IAdapter` for more information.
     * @name ADAPTER
     * @memberof PIXI.settings
     * @type {PIXI.IAdapter}
     * @default PIXI.BrowserAdapter
     */ADAPTER:{/**
     * Creates a canvas element of the given size.
     * This canvas is created using the browser's native canvas element.
     * @param width - width of the canvas
     * @param height - height of the canvas
     */createCanvas:function(t,e){var r=document.createElement("canvas");return r.width=t,r.height=e,r},getWebGLRenderingContext:function(){return WebGLRenderingContext},getNavigator:function(){return navigator},getBaseUrl:function(){var t;return null!==(t=document.baseURI)&&void 0!==t?t:window.location.href},fetch:function(t,e){return fetch(t,e)}},/**
     * If set to true WebGL will attempt make textures mimpaped by default.
     * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
     * @static
     * @name MIPMAP_TEXTURES
     * @memberof PIXI.settings
     * @type {PIXI.MIPMAP_MODES}
     * @default PIXI.MIPMAP_MODES.POW2
     */MIPMAP_TEXTURES:$.POW2,/**
     * Default anisotropic filtering level of textures.
     * Usually from 0 to 16
     * @static
     * @name ANISOTROPIC_LEVEL
     * @memberof PIXI.settings
     * @type {number}
     * @default 0
     */ANISOTROPIC_LEVEL:0,/**
     * Default resolution / device pixel ratio of the renderer.
     * @static
     * @name RESOLUTION
     * @memberof PIXI.settings
     * @type {number}
     * @default 1
     */RESOLUTION:1,/**
     * Default filter resolution.
     * @static
     * @name FILTER_RESOLUTION
     * @memberof PIXI.settings
     * @type {number}
     * @default 1
     */FILTER_RESOLUTION:1,/**
     * Default filter samples.
     * @static
     * @name FILTER_MULTISAMPLE
     * @memberof PIXI.settings
     * @type {PIXI.MSAA_QUALITY}
     * @default PIXI.MSAA_QUALITY.NONE
     */FILTER_MULTISAMPLE:ts.NONE,/**
     * The maximum textures that this device supports.
     * @static
     * @name SPRITE_MAX_TEXTURES
     * @memberof PIXI.settings
     * @type {number}
     * @default 32
     */SPRITE_MAX_TEXTURES:/**
 * The maximum recommended texture units to use.
 * In theory the bigger the better, and for desktop we'll use as many as we can.
 * But some mobile devices slow down if there is to many branches in the shader.
 * So in practice there seems to be a sweet spot size that varies depending on the device.
 *
 * In v4, all mobile devices were limited to 4 texture units because for this.
 * In v5, we allow all texture units to be used on modern Apple or Android devices.
 * @private
 * @param {number} max
 * @returns {number} The maximum recommended texture units to use.
 */function(t){var e=!0;if(ea.tablet||ea.phone){if(ea.apple.device){var r=navigator.userAgent.match(/OS (\d+)_(\d+)?/);if(r){var i=parseInt(r[1],10);// Limit texture units on devices below iOS 11, which will be older hardware
i<11&&(e=!1)}}if(ea.android.device){var r=navigator.userAgent.match(/Android\s([0-9.]*)/);if(r){var i=parseInt(r[1],10);// Limit texture units on devices below Android 7 (Nougat), which will be older hardware
i<7&&(e=!1)}}}return e?32:4}(0),// TODO: maybe change to SPRITE.BATCH_SIZE: 2000
// TODO: maybe add PARTICLE.BATCH_SIZE: 15000
/**
     * The default sprite batch size.
     *
     * The default aims to balance desktop and mobile devices.
     * @static
     * @name SPRITE_BATCH_SIZE
     * @memberof PIXI.settings
     * @type {number}
     * @default 4096
     */SPRITE_BATCH_SIZE:4096,/**
     * The default render options if none are supplied to {@link PIXI.Renderer}
     * or {@link PIXI.CanvasRenderer}.
     * @static
     * @name RENDER_OPTIONS
     * @memberof PIXI.settings
     * @type {object}
     * @property {boolean} [antialias=false] - {@link PIXI.IRendererOptions.antialias}
     * @property {boolean} [autoDensity=false] - {@link PIXI.IRendererOptions.autoDensity}
     * @property {number} [backgroundAlpha=1] - {@link PIXI.IRendererOptions.backgroundAlpha}
     * @property {number} [backgroundColor=0x000000] - {@link PIXI.IRendererOptions.backgroundColor}
     * @property {boolean} [clearBeforeRender=true] - {@link PIXI.IRendererOptions.clearBeforeRender}
     * @property {number} [height=600] - {@link PIXI.IRendererOptions.height}
     * @property {boolean} [preserveDrawingBuffer=false] - {@link PIXI.IRendererOptions.preserveDrawingBuffer}
     * @property {boolean|'notMultiplied'} [useContextAlpha=true] - {@link PIXI.IRendererOptions.useContextAlpha}
     * @property {HTMLCanvasElement} [view=null] - {@link PIXI.IRendererOptions.view}
     * @property {number} [width=800] - {@link PIXI.IRendererOptions.width}
     */RENDER_OPTIONS:{view:null,width:800,height:600,autoDensity:!1,backgroundColor:0,backgroundAlpha:1,useContextAlpha:!0,clearBeforeRender:!0,antialias:!1,preserveDrawingBuffer:!1},/**
     * Default Garbage Collection mode.
     * @static
     * @name GC_MODE
     * @memberof PIXI.settings
     * @type {PIXI.GC_MODES}
     * @default PIXI.GC_MODES.AUTO
     */GC_MODE:tr.AUTO,/**
     * Default Garbage Collection max idle.
     * @static
     * @name GC_MAX_IDLE
     * @memberof PIXI.settings
     * @type {number}
     * @default 3600
     */GC_MAX_IDLE:3600,/**
     * Default Garbage Collection maximum check count.
     * @static
     * @name GC_MAX_CHECK_COUNT
     * @memberof PIXI.settings
     * @type {number}
     * @default 600
     */GC_MAX_CHECK_COUNT:600,/**
     * Default wrap modes that are supported by pixi.
     * @static
     * @name WRAP_MODE
     * @memberof PIXI.settings
     * @type {PIXI.WRAP_MODES}
     * @default PIXI.WRAP_MODES.CLAMP
     */WRAP_MODE:Q.CLAMP,/**
     * Default scale mode for textures.
     * @static
     * @name SCALE_MODE
     * @memberof PIXI.settings
     * @type {PIXI.SCALE_MODES}
     * @default PIXI.SCALE_MODES.LINEAR
     */SCALE_MODE:J.LINEAR,/**
     * Default specify float precision in vertex shader.
     * @static
     * @name PRECISION_VERTEX
     * @memberof PIXI.settings
     * @type {PIXI.PRECISION}
     * @default PIXI.PRECISION.HIGH
     */PRECISION_VERTEX:ti.HIGH,/**
     * Default specify float precision in fragment shader.
     * iOS is best set at highp due to https://github.com/pixijs/pixi.js/issues/3742
     * @static
     * @name PRECISION_FRAGMENT
     * @memberof PIXI.settings
     * @type {PIXI.PRECISION}
     * @default PIXI.PRECISION.MEDIUM
     */PRECISION_FRAGMENT:ea.apple.device?ti.HIGH:ti.MEDIUM,/**
     * Can we upload the same buffer in a single frame?
     * @static
     * @name CAN_UPLOAD_SAME_BUFFER
     * @memberof PIXI.settings
     * @type {boolean}
     */CAN_UPLOAD_SAME_BUFFER:!ea.apple.device,/**
     * Enables bitmap creation before image load. This feature is experimental.
     * @static
     * @name CREATE_IMAGE_BITMAP
     * @memberof PIXI.settings
     * @type {boolean}
     * @default false
     */CREATE_IMAGE_BITMAP:!1,/**
     * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
     * Advantages can include sharper image quality (like text) and faster rendering on canvas.
     * The main disadvantage is movement of objects may appear less smooth.
     * @static
     * @constant
     * @memberof PIXI.settings
     * @type {boolean}
     * @default false
     */ROUND_PIXELS:!1},eu={},el=Object.prototype.hasOwnProperty,ec="~";/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */function ef(){}/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */function ep(t,e,r){this.fn=t,this.context=e,this.once=r||!1}/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */function ed(t,e,r,i,n){if("function"!=typeof r)throw TypeError("The listener must be a function");var o=new ep(r,i||t,n),s=ec?ec+e:e;return t._events[s]?t._events[s].fn?t._events[s]=[t._events[s],o]:t._events[s].push(o):(t._events[s]=o,t._eventsCount++),t}/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */function e_(t,e){0==--t._eventsCount?t._events=new ef:delete t._events[e]}/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */function ey(){this._events=new ef,this._eventsCount=0}Object.create&&(ef.prototype=Object.create(null),new ef().__proto__||(ec=!1)),/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ey.prototype.eventNames=function(){var t,e,r=[];if(0===this._eventsCount)return r;for(e in t=this._events)el.call(t,e)&&r.push(ec?e.slice(1):e);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(t)):r},/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ey.prototype.listeners=function(t){var e=ec?ec+t:t,r=this._events[e];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,n=r.length,o=Array(n);i<n;i++)o[i]=r[i].fn;return o},/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ey.prototype.listenerCount=function(t){var e=ec?ec+t:t,r=this._events[e];return r?r.fn?1:r.length:0},/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ey.prototype.emit=function(t,e,r,i,n,o){var s=ec?ec+t:t;if(!this._events[s])return!1;var a,h,u=this._events[s],l=arguments.length;if(u.fn){switch(u.once&&this.removeListener(t,u.fn,void 0,!0),l){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,e),!0;case 3:return u.fn.call(u.context,e,r),!0;case 4:return u.fn.call(u.context,e,r,i),!0;case 5:return u.fn.call(u.context,e,r,i,n),!0;case 6:return u.fn.call(u.context,e,r,i,n,o),!0}for(h=1,a=Array(l-1);h<l;h++)a[h-1]=arguments[h];u.fn.apply(u.context,a)}else{var c,f=u.length;for(h=0;h<f;h++)switch(u[h].once&&this.removeListener(t,u[h].fn,void 0,!0),l){case 1:u[h].fn.call(u[h].context);break;case 2:u[h].fn.call(u[h].context,e);break;case 3:u[h].fn.call(u[h].context,e,r);break;case 4:u[h].fn.call(u[h].context,e,r,i);break;default:if(!a)for(c=1,a=Array(l-1);c<l;c++)a[c-1]=arguments[c];u[h].fn.apply(u[h].context,a)}}return!0},/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ey.prototype.on=function(t,e,r){return ed(this,t,e,r,!1)},/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ey.prototype.once=function(t,e,r){return ed(this,t,e,r,!0)},/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ey.prototype.removeListener=function(t,e,r,i){var n=ec?ec+t:t;if(!this._events[n])return this;if(!e)return e_(this,n),this;var o=this._events[n];if(o.fn)o.fn!==e||i&&!o.once||r&&o.context!==r||e_(this,n);else{for(var s=0,a=[],h=o.length;s<h;s++)(o[s].fn!==e||i&&!o[s].once||r&&o[s].context!==r)&&a.push(o[s]);//
// Reset the array, or remove it completely if we have no more listeners.
//
a.length?this._events[n]=1===a.length?a[0]:a:e_(this,n)}return this},/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ey.prototype.removeAllListeners=function(t){var e;return t?(e=ec?ec+t:t,this._events[e]&&e_(this,e)):(this._events=new ef,this._eventsCount=0),this},//
// Alias methods names because people roll like that.
//
ey.prototype.off=ey.prototype.removeListener,ey.prototype.addListener=ey.prototype.on,//
// Expose the prefix.
//
ey.prefixed=ec,//
// Allow `EventEmitter` to be imported as module namespace.
//
ey.EventEmitter=ey,eu=ey;var ev={};function em(t,e,r){r=r||2;var i,n,o,s,a,h,u,l=e&&e.length,c=l?e[0]*r:t.length,f=eg(t,0,c,r,!0),p=[];if(!f||f.next===f.prev)return p;// if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
if(l&&(f=// link every hole into the outer loop, producing a single-ring polygon without holes
function(t,e,r,i){var n,o,s,a,h,u=[];for(n=0,o=e.length;n<o;n++)s=e[n]*i,a=n<o-1?e[n+1]*i:t.length,(h=eg(t,s,a,i,!1))===h.next&&(h.steiner=!0),u.push(// find the leftmost node of a polygon ring
function(t){var e=t,r=t;do(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next;while(e!==t)return r}(h));// process holes from left to right
for(u.sort(ex),n=0;n<u.length;n++)r=// find a bridge between vertices that connects hole with an outer ring and and link it
function(t,e){var r=// David Eberly's algorithm for finding a bridge between hole and outer polygon
function(t,e){var r,i,n,o=e,s=t.x,a=t.y,h=-1/0;// find a segment intersected by a ray from the hole's leftmost point to the left;
// segment's endpoint with lesser x will be potential connection point
do{if(a<=o.y&&a>=o.next.y&&o.next.y!==o.y){var u=o.x+(a-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(u<=s&&u>h&&(h=u,n=o.x<o.next.x?o:o.next,u===s))return n;// hole touches outer segment; pick leftmost endpoint
}o=o.next}while(o!==e)if(!n)return null;// look for points inside the triangle of hole point, segment intersection and endpoint;
// if there are no points found, we have a valid connection;
// otherwise choose the point of the minimum angle with the ray as connection point
var l,c=n,f=n.x,p=n.y,d=1/0;o=n;do s>=o.x&&o.x>=f&&s!==o.x&&eE(a<p?s:h,a,f,p,a<p?h:s,a,o.x,o.y)&&(l=Math.abs(a-o.y)/(s-o.x),eP(o,t)&&(l<d||l===d&&(o.x>n.x||o.x===n.x&&(r=n,i=o,0>eA(r.prev,r,i.prev)&&0>eA(i.next,r,r.next))))&&(n=o,d=l)),o=o.next;while(o!==c)return n}(t,e);if(!r)return e;var i=ew(r,t);return(// filter collinear points around the cuts
eb(i,i.next),eb(r,r.next))}(u[n],r);return r}(t,e,f,r)),t.length>80*r){i=o=t[0],n=s=t[1];for(var d=r;d<c;d+=r)a=t[d],h=t[d+1],a<i&&(i=a),h<n&&(n=h),a>o&&(o=a),h>s&&(s=h);u=0!==// minX, minY and invSize are later used to transform coords into integers for z-order calculation
(u=Math.max(o-i,s-n))?32767/u:0}return(// main ear slicing loop which triangulates a polygon (given as a linked list)
function t(e,r,i,n,o,s,a){if(e){// interlink polygon nodes in z-order
!a&&s&&// interlink polygon nodes in z-order
function(t,e,r,i){var n=t;do 0===n.z&&(n.z=eT(n.x,n.y,e,r,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==t)n.prevZ.nextZ=null,n.prevZ=null,// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function(t){var e,r,i,n,o,s,a,h,u=1;do{for(r=t,t=null,o=null,s=0;r;){for(s++,i=r,a=0,e=0;e<u&&(a++,i=i.nextZ);e++);for(h=u;a>0||h>0&&i;)0!==a&&(0===h||!i||r.z<=i.z)?(n=r,r=r.nextZ,a--):(n=i,i=i.nextZ,h--),o?o.nextZ=n:t=n,n.prevZ=o,o=n;r=i}o.nextZ=null,u*=2}while(s>1)}(n)}(e,n,o,s);// iterate through ears, slicing them one by one
for(var h,u,l=e;e.prev!==e.next;){if(h=e.prev,u=e.next,s?function(t,e,r,i){var n=t.prev,o=t.next;if(eA(n,t,o)>=0)return!1;// reflex, can't be an ear
// look for points inside the triangle in both directions
for(var s=n.x,a=t.x,h=o.x,u=n.y,l=t.y,c=o.y,f=s<a?s<h?s:h:a<h?a:h,p=u<l?u<c?u:c:l<c?l:c,d=s>a?s>h?s:h:a>h?a:h,_=u>l?u>c?u:c:l>c?l:c,y=eT(f,p,e,r,i),v=eT(d,_,e,r,i),m=t.prevZ,g=t.nextZ;m&&m.z>=y&&g&&g.z<=v;){if(m.x>=f&&m.x<=d&&m.y>=p&&m.y<=_&&m!==n&&m!==o&&eE(s,u,a,l,h,c,m.x,m.y)&&eA(m.prev,m,m.next)>=0||(m=m.prevZ,g.x>=f&&g.x<=d&&g.y>=p&&g.y<=_&&g!==n&&g!==o&&eE(s,u,a,l,h,c,g.x,g.y)&&eA(g.prev,g,g.next)>=0))return!1;g=g.nextZ}// look for remaining points in decreasing z-order
for(;m&&m.z>=y;){if(m.x>=f&&m.x<=d&&m.y>=p&&m.y<=_&&m!==n&&m!==o&&eE(s,u,a,l,h,c,m.x,m.y)&&eA(m.prev,m,m.next)>=0)return!1;m=m.prevZ}// look for remaining points in increasing z-order
for(;g&&g.z<=v;){if(g.x>=f&&g.x<=d&&g.y>=p&&g.y<=_&&g!==n&&g!==o&&eE(s,u,a,l,h,c,g.x,g.y)&&eA(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}(e,n,o,s):// check whether a polygon node forms a valid ear with adjacent nodes
function(t){var e=t.prev,r=t.next;if(eA(e,t,r)>=0)return!1;// reflex, can't be an ear
for(// now make sure we don't have other points inside the potential ear
var i=e.x,n=t.x,o=r.x,s=e.y,a=t.y,h=r.y,u=i<n?i<o?i:o:n<o?n:o,l=s<a?s<h?s:h:a<h?a:h,c=i>n?i>o?i:o:n>o?n:o,f=s>a?s>h?s:h:a>h?a:h,p=r.next;p!==e;){if(p.x>=u&&p.x<=c&&p.y>=l&&p.y<=f&&eE(i,s,n,a,o,h,p.x,p.y)&&eA(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}(e)){// cut off the triangle
r.push(h.i/i|0),r.push(e.i/i|0),r.push(u.i/i|0),eD(e),// skipping the next vertex leads to less sliver triangles
e=u.next,l=u.next;continue}// if we looped through the whole remaining polygon and can't find any more ears
if((e=u)===l){// try filtering points and slicing again
a?1===a?t(e=// go through all polygon nodes and cure small local self-intersections
function(t,e,r){var i=t;do{var n=i.prev,o=i.next.next;!eS(n,o)&&eR(n,i,i.next,o)&&eP(n,o)&&eP(o,n)&&(e.push(n.i/r|0),e.push(i.i/r|0),e.push(o.i/r|0),// remove two nodes involved
eD(i),eD(i.next),i=t=o),i=i.next}while(i!==t)return eb(i)}(eb(e),r,i),r,i,n,o,s,2):2===a&&// try splitting polygon into two and triangulate them independently
function(e,r,i,n,o,s){// look for a valid diagonal that divides the polygon into two
var a=e;do{for(var h,u,l=a.next.next;l!==a.prev;){if(a.i!==l.i&&(h=a,u=l,h.next.i!==u.i&&h.prev.i!==u.i&&!// check if a polygon diagonal intersects any polygon segments
function(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&eR(r,r.next,t,e))return!0;r=r.next}while(r!==t)return!1}(h,u)&&// dones't intersect other edges
(eP(h,u)&&eP(u,h)&&// check if the middle point of a polygon diagonal is inside the polygon
function(t,e){var r=t,i=!1,n=(t.x+e.x)/2,o=(t.y+e.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&n<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==t)return i}(h,u)&&// locally visible
(eA(h.prev,h,u.prev)||eA(h,u.prev,u))||// does not create opposite-facing sectors
eS(h,u)&&eA(h.prev,h,h.next)>0&&eA(u.prev,u,u.next)>0))){// split the polygon in two by the diagonal
var c=ew(a,l);// filter colinear points around the cuts
a=eb(a,a.next),c=eb(c,c.next),// run earcut on each half
t(a,r,i,n,o,s,0),t(c,r,i,n,o,s,0);return}l=l.next}a=a.next}while(a!==e)}(e,r,i,n,o,s):t(eb(e),r,i,n,o,s,1);break}}}}(f,p,r,i,n,u,0),p)}// create a circular doubly linked list from polygon points in the specified winding order
function eg(t,e,r,i,n){var o,s;if(n===eF(t,e,r,i)>0)for(o=e;o<r;o+=i)s=eM(o,t[o],t[o+1],s);else for(o=r-i;o>=e;o-=i)s=eM(o,t[o],t[o+1],s);return s&&eS(s,s.next)&&(eD(s),s=s.next),s}// eliminate colinear or duplicate points
function eb(t,e){if(!t)return t;e||(e=t);var r,i=t;do if(r=!1,!i.steiner&&(eS(i,i.next)||0===eA(i.prev,i,i.next))){if(eD(i),(i=e=i.prev)===i.next)break;r=!0}else i=i.next;while(r||i!==e)return e}function ex(t,e){return t.x-e.x}// z-order of a point given coords and inverse of the longer side of data bbox
function eT(t,e,r,i,n){return(t=((t=((t=((t=(// coords are transformed into non-negative 15-bit integer range
(t=(t-r)*n|0)|t<<8)&16711935)|t<<4)&252645135)|t<<2)&858993459)|t<<1)&1431655765)|(e=((e=((e=((e=((e=(e-i)*n|0)|e<<8)&16711935)|e<<4)&252645135)|e<<2)&858993459)|e<<1)&1431655765)<<1}// check if a point lies within a convex triangle
function eE(t,e,r,i,n,o,s,a){return(n-s)*(e-a)>=(t-s)*(o-a)&&(t-s)*(i-a)>=(r-s)*(e-a)&&(r-s)*(o-a)>=(n-s)*(i-a)}// signed area of a triangle
function eA(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}// check if two points are equal
function eS(t,e){return t.x===e.x&&t.y===e.y}// check if two segments intersect
function eR(t,e,r,i){var n=eI(eA(t,e,r)),o=eI(eA(t,e,i)),s=eI(eA(r,i,t)),a=eI(eA(r,i,e));return!!(n!==o&&s!==a||0===n&&eO(t,r,e)||0===o&&eO(t,i,e)||0===s&&eO(r,t,i)||0===a&&eO(r,e,i))}// for collinear points p, q, r, check if point q lies on segment pr
function eO(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function eI(t){return t>0?1:t<0?-1:0}// check if a polygon diagonal is locally inside the polygon
function eP(t,e){return 0>eA(t.prev,t,t.next)?eA(t,e,t.next)>=0&&eA(t,t.prev,e)>=0:0>eA(t,e,t.prev)||0>eA(t,t.next,e)}// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function ew(t,e){var r=new eC(t.i,t.x,t.y),i=new eC(e.i,e.x,e.y),n=t.next,o=e.prev;return t.next=e,e.prev=t,r.next=n,n.prev=r,i.next=r,r.prev=i,o.next=i,i.prev=o,i}// create a node and optionally link it with previous one (in a circular doubly linked list)
function eM(t,e,r,i){var n=new eC(t,e,r);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function eD(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function eC(t,e,r){// vertex index in coordinates array
this.i=t,// vertex coordinates
this.x=e,this.y=r,// previous and next vertex nodes in a polygon ring
this.prev=null,this.next=null,// z-order curve value
this.z=0,// previous and next nodes in z-order
this.prevZ=null,this.nextZ=null,// indicates whether this is a steiner point
this.steiner=!1}function eF(t,e,r,i){for(var n=0,o=e,s=r-i;o<r;o+=i)n+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return n}(ev=em).default=em,// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
em.deviation=function(t,e,r,i){var n=e&&e.length,o=n?e[0]*r:t.length,s=Math.abs(eF(t,0,o,r));if(n)for(var a=0,h=e.length;a<h;a++){var u=e[a]*r,l=a<h-1?e[a+1]*r:t.length;s-=Math.abs(eF(t,u,l,r))}var c=0;for(a=0;a<i.length;a+=3){var f=i[a]*r,p=i[a+1]*r,d=i[a+2]*r;c+=Math.abs((t[f]-t[d])*(t[p+1]-t[f+1])-(t[f]-t[p])*(t[d+1]-t[f+1]))}return 0===s&&0===c?0:Math.abs((c-s)/s)},// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
em.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},i=0,n=0;n<t.length;n++){for(var o=0;o<t[n].length;o++)for(var s=0;s<e;s++)r.vertices.push(t[n][o][s]);n>0&&(i+=t[n-1].length,r.holes.push(i))}return r};var eN=tF("dBHwk");function eL(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}// Reference: RFC 3986, RFC 1808, RFC 2396
/*
 * define these here so at least they only have to be
 * compiled once on the first module load.
 */var eB=/^([a-z0-9.+-]+:)/i,eG=/:[0-9]*$/,eU=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,ek=["'"].concat(["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","	"])),/*
   * Characters that are never ever allowed in a hostname.
   * Note that any invalid chars are also handled, but these
   * are the ones that are *expected* to be seen, so we fast-path
   * them.
   */eX=["%","/","?",";","#"].concat(ek),ej=["/","?","#"],eH=/^[+a-z0-9A-Z_-]{0,63}$/,eY=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,ez={javascript:!0,"javascript:":!0},eV={javascript:!0,"javascript:":!0},eW={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},eq={},eK={},eZ={},eJ={},eQ=SyntaxError,e$=Function,e0=TypeError,e1=function(t){try{return e$('"use strict"; return ('+t+").constructor;")()}catch(t){}},e2=Object.getOwnPropertyDescriptor;if(e2)try{e2({},"")}catch(t){e2=null;// this is IE 8, which has a broken gOPD
}var e3=function(){throw new e0},e4=e2?function(){try{return(// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
arguments.callee,e3)}catch(t){try{// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
return e2(arguments,"callee").get}catch(t){return e3}}}():e3,e8=tF("24qIq")(),e6=tF("dSRh6")(),e5=Object.getPrototypeOf||(e6?function(t){return t.__proto__}// eslint-disable-line no-proto
:null),e9={},e7="undefined"!=typeof Uint8Array&&e5?e5(Uint8Array):th,rt={"%AggregateError%":"undefined"==typeof AggregateError?th:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?th:ArrayBuffer,"%ArrayIteratorPrototype%":e8&&e5?e5([][Symbol.iterator]()):th,"%AsyncFromSyncIteratorPrototype%":th,"%AsyncFunction%":e9,"%AsyncGenerator%":e9,"%AsyncGeneratorFunction%":e9,"%AsyncIteratorPrototype%":e9,"%Atomics%":"undefined"==typeof Atomics?th:Atomics,"%BigInt%":"undefined"==typeof BigInt?th:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?th:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?th:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?th:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?th:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?th:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?th:FinalizationRegistry,"%Function%":e$,"%GeneratorFunction%":e9,"%Int8Array%":"undefined"==typeof Int8Array?th:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?th:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?th:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":e8&&e5?e5(e5([][Symbol.iterator]())):th,"%JSON%":"object"==typeof JSON?JSON:th,"%Map%":"undefined"==typeof Map?th:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&e8&&e5?e5(new Map()[Symbol.iterator]()):th,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?th:Promise,"%Proxy%":"undefined"==typeof Proxy?th:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?th:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?th:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&e8&&e5?e5(new Set()[Symbol.iterator]()):th,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?th:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":e8&&e5?e5(""[Symbol.iterator]()):th,"%Symbol%":e8?Symbol:th,"%SyntaxError%":eQ,"%ThrowTypeError%":e4,"%TypedArray%":e7,"%TypeError%":e0,"%Uint8Array%":"undefined"==typeof Uint8Array?th:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?th:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?th:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?th:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?th:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?th:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?th:WeakSet};if(e5)try{null.error;// eslint-disable-line no-unused-expressions
}catch(t){// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
var re=e5(e5(t));rt["%Error.prototype%"]=re}var rr=function t(e){var r;if("%AsyncFunction%"===e)r=e1("async function () {}");else if("%GeneratorFunction%"===e)r=e1("function* () {}");else if("%AsyncGeneratorFunction%"===e)r=e1("async function* () {}");else if("%AsyncGenerator%"===e){var i=t("%AsyncGeneratorFunction%");i&&(r=i.prototype)}else if("%AsyncIteratorPrototype%"===e){var n=t("%AsyncGenerator%");n&&e5&&(r=e5(n.prototype))}return rt[e]=r,r},ri={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},rn={},ro={},rs=Array.prototype.slice,ra=Object.prototype.toString;ro=function(t){var e,r=this;if("function"!=typeof r||"[object Function]"!==ra.call(r))throw TypeError("Function.prototype.bind called on incompatible "+r);for(var i=rs.call(arguments,1),n=Math.max(0,r.length-i.length),o=[],s=0;s<n;s++)o.push("$"+s);if(e=Function("binder","return function ("+o.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(!(this instanceof e))return r.apply(t,i.concat(rs.call(arguments)));var n=r.apply(this,i.concat(rs.call(arguments)));return Object(n)===n?n:this}),r.prototype){var a=function(){};a.prototype=r.prototype,e.prototype=new a,a.prototype=null}return e},rn=Function.prototype.bind||ro;var rh={},ru={}.hasOwnProperty,rl=Function.prototype.call;rh=rl.bind?rl.bind(ru):function(t,e){return rl.call(ru,t,e)};var rc=rn.call(Function.call,Array.prototype.concat),rf=rn.call(Function.apply,Array.prototype.splice),rp=rn.call(Function.call,String.prototype.replace),rd=rn.call(Function.call,String.prototype.slice),r_=rn.call(Function.call,RegExp.prototype.exec),ry=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,rv=/\\(\\)?/g,rm=function(t){var e=rd(t,0,1),r=rd(t,-1);if("%"===e&&"%"!==r)throw new eQ("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==e)throw new eQ("invalid intrinsic syntax, expected opening `%`");var i=[];return rp(t,ry,function(t,e,r,n){i[i.length]=r?rp(n,rv,"$1"):e||t}),i},rg=function(t,e){var r,i=t;if(rh(ri,i)&&(i="%"+(r=ri[i])[0]+"%"),rh(rt,i)){var n=rt[i];if(n===e9&&(n=rr(i)),void 0===n&&!e)throw new e0("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:r,name:i,value:n}}throw new eQ("intrinsic "+t+" does not exist!")},rb={},rx={},rT=(eJ=function(t,e){if("string"!=typeof t||0===t.length)throw new e0("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new e0('"allowMissing" argument must be a boolean');if(null===r_(/^%?[^%]*%?$/,t))throw new eQ("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=rm(t),i=r.length>0?r[0]:"",n=rg("%"+i+"%",e),o=n.name,s=n.value,a=!1,h=n.alias;h&&(i=h[0],rf(r,rc([0,1],h)));for(var u=1,l=!0;u<r.length;u+=1){var c=r[u],f=rd(c,0,1),p=rd(c,-1);if(('"'===f||"'"===f||"`"===f||'"'===p||"'"===p||"`"===p)&&f!==p)throw new eQ("property names with quotes must have matching quotes");if("constructor"!==c&&l||(a=!0),i+="."+c,rh(rt,o="%"+i+"%"))s=rt[o];else if(null!=s){if(!(c in s)){if(!e)throw new e0("base intrinsic for "+t+" exists, but the property is not available.");return}if(e2&&u+1>=r.length){var d=e2(s,c);// By convention, when a data property is converted to an accessor
// property to emulate a data property that does not suffer from
// the override mistake, that accessor's getter is marked with
// an `originalValue` property. Here, when we detect this, we
// uphold the illusion by pretending to see that original data
// property, i.e., returning the value rather than the getter
// itself.
s=(l=!!d)&&"get"in d&&!("originalValue"in d.get)?d.get:s[c]}else l=rh(s,c),s=s[c];l&&!a&&(rt[o]=s)}}return s})("%Function.prototype.apply%"),rE=eJ("%Function.prototype.call%"),rA=eJ("%Reflect.apply%",!0)||rn.call(rE,rT),rS=eJ("%Object.getOwnPropertyDescriptor%",!0),rR=eJ("%Object.defineProperty%",!0),rO=eJ("%Math.max%");if(rR)try{rR({},"a",{value:1})}catch(t){// IE 8 has a broken defineProperty
rR=null}rx=function(t){var e=rA(rn,rE,arguments);return rS&&rR&&rS(e,"length").configurable&&rR(e,"length",{value:1+rO(0,t.length-(arguments.length-1))}),e};var rI=function(){return rA(rn,rT,arguments)};rR?rR(rx,"apply",{value:rI}):rx.apply=rI;var rP=rx(eJ("String.prototype.indexOf"));rb=function(t,e){var r=eJ(t,!!e);return"function"==typeof r&&rP(t,".prototype.")>-1?rx(r):r};var rw={},rM="function"==typeof Map&&Map.prototype,rD=Object.getOwnPropertyDescriptor&&rM?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,rC=rM&&rD&&"function"==typeof rD.get?rD.get:null,rF=rM&&Map.prototype.forEach,rN="function"==typeof Set&&Set.prototype,rL=Object.getOwnPropertyDescriptor&&rN?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,rB=rN&&rL&&"function"==typeof rL.get?rL.get:null,rG=rN&&Set.prototype.forEach,rU="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,rk="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,rX="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,rj=Boolean.prototype.valueOf,rH=Object.prototype.toString,rY=Function.prototype.toString,rz=String.prototype.match,rV=String.prototype.slice,rW=String.prototype.replace,rq=String.prototype.toUpperCase,rK=String.prototype.toLowerCase,rZ=RegExp.prototype.test,rJ=Array.prototype.concat,rQ=Array.prototype.join,r$=Array.prototype.slice,r0=Math.floor,r1="function"==typeof BigInt?BigInt.prototype.valueOf:null,r2=Object.getOwnPropertySymbols,r3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,r4="function"==typeof Symbol&&"object"==typeof Symbol.iterator,r8="function"==typeof Symbol&&Symbol.toStringTag&&(typeof Symbol.toStringTag===r4?"object":"symbol")?Symbol.toStringTag:null,r6=Object.prototype.propertyIsEnumerable,r5=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype// eslint-disable-line no-proto
?function(t){return t.__proto__;// eslint-disable-line no-proto
}:null);function r9(t,e){if(t===1/0||t===-1/0||t!=t||t&&t>-1e3&&t<1e3||rZ.call(/e/,e))return e;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof t){var i=t<0?-r0(-t):r0(t);// trunc(num)
if(i!==t){var n=String(i),o=rV.call(e,n.length+1);return rW.call(n,r,"$&_")+"."+rW.call(rW.call(o,/([0-9]{3})/g,"$&_"),/_$/,"")}}return rW.call(e,r,"$&_")}var r7={},it=r7.custom,ie=is(it)?it:null;function ir(t,e,r){var i="double"===(r.quoteStyle||e)?'"':"'";return i+t+i}function ii(t){return"[object Array]"===iu(t)&&(!r8||!("object"==typeof t&&r8 in t))}function io(t){return"[object RegExp]"===iu(t)&&(!r8||!("object"==typeof t&&r8 in t))}// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function is(t){if(r4)return t&&"object"==typeof t&&t instanceof Symbol;if("symbol"==typeof t)return!0;if(!t||"object"!=typeof t||!r3)return!1;try{return r3.call(t),!0}catch(t){}return!1}rw=function t(e,r,i,n){var o=r||{};if(ih(o,"quoteStyle")&&"single"!==o.quoteStyle&&"double"!==o.quoteStyle)throw TypeError('option "quoteStyle" must be "single" or "double"');if(ih(o,"maxStringLength")&&("number"==typeof o.maxStringLength?o.maxStringLength<0&&o.maxStringLength!==1/0:null!==o.maxStringLength))throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var s=!ih(o,"customInspect")||o.customInspect;if("boolean"!=typeof s&&"symbol"!==s)throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(ih(o,"indent")&&null!==o.indent&&"	"!==o.indent&&!(parseInt(o.indent,10)===o.indent&&o.indent>0))throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(ih(o,"numericSeparator")&&"boolean"!=typeof o.numericSeparator)throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');var a=o.numericSeparator;if(void 0===e)return"undefined";if(null===e)return"null";if("boolean"==typeof e)return e?"true":"false";if("string"==typeof e)return function t(e,r){if(e.length>r.maxStringLength){var i=e.length-r.maxStringLength;return t(rV.call(e,0,r.maxStringLength),r)+"... "+i+" more character"+(i>1?"s":"")}return ir(rW.call(rW.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,ic),"single",r)}(e,o);if("number"==typeof e){if(0===e)return 1/0/e>0?"0":"-0";var h=String(e);return a?r9(e,h):h}if("bigint"==typeof e){var u=String(e)+"n";return a?r9(e,u):u}var l=void 0===o.depth?5:o.depth;if(void 0===i&&(i=0),i>=l&&l>0&&"object"==typeof e)return ii(e)?"[Array]":"[Object]";var c=function(t,e){var r;if("	"===t.indent)r="	";else{if("number"!=typeof t.indent||!(t.indent>0))return null;r=rQ.call(Array(t.indent+1)," ")}return{base:r,prev:rQ.call(Array(e+1),r)}}(o,i);if(void 0===n)n=[];else if(il(n,e)>=0)return"[Circular]";function f(e,r,s){if(r&&(n=r$.call(n)).push(r),s){var a={depth:o.depth};return ih(o,"quoteStyle")&&(a.quoteStyle=o.quoteStyle),t(e,a,i+1,n)}return t(e,o,i+1,n)}if("function"==typeof e&&!io(e)){var p=function(t){if(t.name)return t.name;var e=rz.call(rY.call(t),/^function\s*([\w$]+)/);return e?e[1]:null}(e),d=iv(e,f);return"[Function"+(p?": "+p:" (anonymous)")+"]"+(d.length>0?" { "+rQ.call(d,", ")+" }":"")}if(is(e)){var _=r4?rW.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):r3.call(e);return"object"!=typeof e||r4?_:ip(_)}if(e&&"object"==typeof e&&("undefined"!=typeof HTMLElement&&e instanceof HTMLElement||"string"==typeof e.nodeName&&"function"==typeof e.getAttribute)){for(var y,v="<"+rK.call(String(e.nodeName)),m=e.attributes||[],g=0;g<m.length;g++)v+=" "+m[g].name+"="+ir((y=m[g].value,rW.call(String(y),/"/g,"&quot;")),"double",o);return v+=">",e.childNodes&&e.childNodes.length&&(v+="..."),v+="</"+rK.call(String(e.nodeName))+">"}if(ii(e)){if(0===e.length)return"[]";var b=iv(e,f);return c&&!function(t){for(var e=0;e<t.length;e++)if(il(t[e],"\n")>=0)return!1;return!0}(b)?"["+iy(b,c)+"]":"[ "+rQ.call(b,", ")+" ]"}if("[object Error]"===iu(e)&&(!r8||!("object"==typeof e&&r8 in e))){var x=iv(e,f);return"cause"in Error.prototype||!("cause"in e)||r6.call(e,"cause")?0===x.length?"["+String(e)+"]":"{ ["+String(e)+"] "+rQ.call(x,", ")+" }":"{ ["+String(e)+"] "+rQ.call(rJ.call("[cause]: "+f(e.cause),x),", ")+" }"}if("object"==typeof e&&s){if(ie&&"function"==typeof e[ie]&&r7)return r7(e,{depth:l-i});if("symbol"!==s&&"function"==typeof e.inspect)return e.inspect()}if(function(t){if(!rC||!t||"object"!=typeof t)return!1;try{rC.call(t);try{rB.call(t)}catch(t){return!0}return t instanceof Map;// core-js workaround, pre-v2.5.0
}catch(t){}return!1}(e)){var T=[];return rF&&rF.call(e,function(t,r){T.push(f(r,e,!0)+" => "+f(t,e))}),i_("Map",rC.call(e),T,c)}if(function(t){if(!rB||!t||"object"!=typeof t)return!1;try{rB.call(t);try{rC.call(t)}catch(t){return!0}return t instanceof Set;// core-js workaround, pre-v2.5.0
}catch(t){}return!1}(e)){var E=[];return rG&&rG.call(e,function(t){E.push(f(t,e))}),i_("Set",rB.call(e),E,c)}if(function(t){if(!rU||!t||"object"!=typeof t)return!1;try{rU.call(t,rU);try{rk.call(t,rk)}catch(t){return!0}return t instanceof WeakMap;// core-js workaround, pre-v2.5.0
}catch(t){}return!1}(e))return id("WeakMap");if(function(t){if(!rk||!t||"object"!=typeof t)return!1;try{rk.call(t,rk);try{rU.call(t,rU)}catch(t){return!0}return t instanceof WeakSet;// core-js workaround, pre-v2.5.0
}catch(t){}return!1}(e))return id("WeakSet");if(function(t){if(!rX||!t||"object"!=typeof t)return!1;try{return rX.call(t),!0}catch(t){}return!1}(e))return id("WeakRef");if("[object Number]"===iu(e)&&(!r8||!("object"==typeof e&&r8 in e)))return ip(f(Number(e)));if(function(t){if(!t||"object"!=typeof t||!r1)return!1;try{return r1.call(t),!0}catch(t){}return!1}(e))return ip(f(r1.call(e)));if("[object Boolean]"===iu(e)&&(!r8||!("object"==typeof e&&r8 in e)))return ip(rj.call(e));if("[object String]"===iu(e)&&(!r8||!("object"==typeof e&&r8 in e)))return ip(f(String(e)));if(!("[object Date]"===iu(e)&&(!r8||!("object"==typeof e&&r8 in e)))&&!io(e)){var A=iv(e,f),S=r5?r5(e)===Object.prototype:e instanceof Object||e.constructor===Object,R=e instanceof Object?"":"null prototype",O=!S&&r8&&Object(e)===e&&r8 in e?rV.call(iu(e),8,-1):R?"Object":"",I=(S||"function"!=typeof e.constructor?"":e.constructor.name?e.constructor.name+" ":"")+(O||R?"["+rQ.call(rJ.call([],O||[],R||[]),": ")+"] ":"");return 0===A.length?I+"{}":c?I+"{"+iy(A,c)+"}":I+"{ "+rQ.call(A,", ")+" }"}return String(e)};var ia=Object.prototype.hasOwnProperty||function(t){return t in this};function ih(t,e){return ia.call(t,e)}function iu(t){return rH.call(t)}function il(t,e){if(t.indexOf)return t.indexOf(e);for(var r=0,i=t.length;r<i;r++)if(t[r]===e)return r;return -1}function ic(t){var e=t.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return r?"\\"+r:"\\x"+(e<16?"0":"")+rq.call(e.toString(16))}function ip(t){return"Object("+t+")"}function id(t){return t+" { ? }"}function i_(t,e,r,i){return t+" ("+e+") {"+(i?iy(r,i):rQ.call(r,", "))+"}"}function iy(t,e){if(0===t.length)return"";var r="\n"+e.prev+e.base;return r+rQ.call(t,","+r)+"\n"+e.prev}function iv(t,e){var r,i=ii(t),n=[];if(i){n.length=t.length;for(var o=0;o<t.length;o++)n[o]=ih(t,o)?e(t[o],t):""}var s="function"==typeof r2?r2(t):[];if(r4){r={};for(var a=0;a<s.length;a++)r["$"+s[a]]=s[a]}for(var h in t)if(ih(t,h)&&(!i||String(Number(h))!==h||!(h<t.length))){// eslint-disable-line no-restricted-syntax, no-continue
if(r4&&r["$"+h]instanceof Symbol)continue;// eslint-disable-line no-restricted-syntax, no-continue
rZ.call(/[^\w$]/,h)?n.push(e(h,t)+": "+e(t[h],t)):n.push(h+": "+e(t[h],t))}if("function"==typeof r2)for(var u=0;u<s.length;u++)r6.call(t,s[u])&&n.push("["+e(s[u])+"]: "+e(t[s[u]],t));return n}var im=eJ("%TypeError%"),ig=eJ("%WeakMap%",!0),ib=eJ("%Map%",!0),ix=rb("WeakMap.prototype.get",!0),iT=rb("WeakMap.prototype.set",!0),iE=rb("WeakMap.prototype.has",!0),iA=rb("Map.prototype.get",!0),iS=rb("Map.prototype.set",!0),iR=rb("Map.prototype.has",!0),iO=function(t,e){for(var r,i=t;null!==(r=i.next);i=r)if(r.key===e)return i.next=r.next,r.next=t.next,t.next=r,r},iI=function(t,e){var r=iO(t,e);return r&&r.value},iP=function(t,e,r){var i=iO(t,e);i?i.value=r:t.next={key:e,next:t.next,value:r}};eZ=function(){var t,e,r,i={assert:function(t){if(!i.has(t))throw new im("Side channel does not contain "+rw(t))},get:function(i){if(ig&&i&&("object"==typeof i||"function"==typeof i)){if(t)return ix(t,i)}else if(ib){if(e)return iA(e,i)}else if(r)return iI(r,i)},has:function(i){if(ig&&i&&("object"==typeof i||"function"==typeof i)){if(t)return iE(t,i)}else if(ib){if(e)return iR(e,i)}else if(r)return!!iO(r,i);return!1},set:function(i,n){ig&&i&&("object"==typeof i||"function"==typeof i)?(t||(t=new ig),iT(t,i,n)):ib?(e||(e=new ib),iS(e,i,n)):(r||/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */(r={key:{},next:null}),iP(r,i,n))}};return i};var iw={},iM={},iD=String.prototype.replace,iC=/%20/g,iF={RFC1738:"RFC1738",RFC3986:"RFC3986"};iM={default:iF.RFC3986,formatters:{RFC1738:function(t){return iD.call(t,iC,"+")},RFC3986:function(t){return String(t)}},RFC1738:iF.RFC1738,RFC3986:iF.RFC3986};var iN=Object.prototype.hasOwnProperty,iL=Array.isArray,iB=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),iG=function(t){for(;t.length>1;){var e=t.pop(),r=e.obj[e.prop];if(iL(r)){for(var i=[],n=0;n<r.length;++n)void 0!==r[n]&&i.push(r[n]);e.obj[e.prop]=i}}},iU=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},i=0;i<t.length;++i)void 0!==t[i]&&(r[i]=t[i]);return r};iw={arrayToObject:iU,assign:function(t,e){return Object.keys(e).reduce(function(t,r){return t[r]=e[r],t},t)},combine:function(t,e){return[].concat(t,e)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],i=0;i<e.length;++i)for(var n=e[i],o=n.obj[n.prop],s=Object.keys(o),a=0;a<s.length;++a){var h=s[a],u=o[h];"object"==typeof u&&null!==u&&-1===r.indexOf(u)&&(e.push({obj:o,prop:h}),r.push(u))}return iG(e),t},decode:function(t,e,r){var i=t.replace(/\+/g," ");if("iso-8859-1"===r)return i.replace(/%[0-9a-f]{2}/gi,unescape);// utf-8
try{return decodeURIComponent(i)}catch(t){return i}},encode:function(t,e,r,i,n){// This code was originally written by Brian White (mscdex) for the io.js core querystring library.
// It has been adapted here for stricter adherence to RFC 3986
if(0===t.length)return t;var o=t;if("symbol"==typeof t?o=Symbol.prototype.toString.call(t):"string"!=typeof t&&(o=String(t)),"iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var s="",a=0;a<o.length;++a){var h=o.charCodeAt(a);if(45// -
===h||46// .
===h||95// _
===h||126// ~
===h||h>=48&&h<=57// 0-9
||h>=65&&h<=90// a-z
||h>=97&&h<=122// A-Z
||n===iM.RFC1738&&(40===h||41// ( )
===h)){s+=o.charAt(a);continue}if(h<128){s+=iB[h];continue}if(h<2048){s+=iB[192|h>>6]+iB[128|63&h];continue}if(h<55296||h>=57344){s+=iB[224|h>>12]+iB[128|h>>6&63]+iB[128|63&h];continue}a+=1,/* eslint operator-linebreak: [2, "before"] */s+=iB[240|(h=65536+((1023&h)<<10|1023&o.charCodeAt(a)))>>18]+iB[128|h>>12&63]+iB[128|h>>6&63]+iB[128|63&h]}return s},isBuffer:function(t){return!!t&&"object"==typeof t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},maybeMap:function(t,e){if(iL(t)){for(var r=[],i=0;i<t.length;i+=1)r.push(e(t[i]));return r}return e(t)},merge:function t(e,r,i){/* eslint no-param-reassign: 0 */if(!r)return e;if("object"!=typeof r){if(iL(e))e.push(r);else{if(!e||"object"!=typeof e)return[e,r];(i&&(i.plainObjects||i.allowPrototypes)||!iN.call(Object.prototype,r))&&(e[r]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(r);var n=e;return(iL(e)&&!iL(r)&&(n=iU(e,i)),iL(e)&&iL(r))?(r.forEach(function(r,n){if(iN.call(e,n)){var o=e[n];o&&"object"==typeof o&&r&&"object"==typeof r?e[n]=t(o,r,i):e.push(r)}else e[n]=r}),e):Object.keys(r).reduce(function(e,n){var o=r[n];return iN.call(e,n)?e[n]=t(e[n],o,i):e[n]=o,e},n)}};var ik=Object.prototype.hasOwnProperty,iX={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},ij=Array.isArray,iH=Array.prototype.push,iY=function(t,e){iH.apply(t,ij(e)?e:[e])},iz=Date.prototype.toISOString,iV=iM.default,iW={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:iw.encode,encodeValuesOnly:!1,format:iV,formatter:iM.formatters[iV],// deprecated
indices:!1,serializeDate:function(t){return iz.call(t)},skipNulls:!1,strictNullHandling:!1},iq={},iK=function t(e,r,i,n,o,s,a,h,u,l,c,f,p,d,_,y){for(var v,m,g=e,b=y,x=0,T=!1;void 0!==(b=b.get(iq))&&!T;){// Where object last appeared in the ref tree
var E=b.get(e);if(x+=1,void 0!==E){if(E===x)throw RangeError("Cyclic object value");// Break while
T=!0}void 0===b.get(iq)&&(x=0)}if("function"==typeof h?g=h(r,g):g instanceof Date?g=c(g):"comma"===i&&ij(g)&&(g=iw.maybeMap(g,function(t){return t instanceof Date?c(t):t})),null===g){if(o)return a&&!d?a(r,iW.encoder,_,"key",f):r;g=""}if("string"==typeof(v=g)||"number"==typeof v||"boolean"==typeof v||"symbol"==typeof v||"bigint"==typeof v||iw.isBuffer(g))return a?[p(d?r:a(r,iW.encoder,_,"key",f))+"="+p(a(g,iW.encoder,_,"value",f))]:[p(r)+"="+p(String(g))];var A=[];if(void 0===g)return A;if("comma"===i&&ij(g))d&&a&&(g=iw.maybeMap(g,a)),m=[{value:g.length>0?g.join(",")||null:void 0}];else if(ij(h))m=h;else{var S=Object.keys(g);m=u?S.sort(u):S}for(var R=n&&ij(g)&&1===g.length?r+"[]":r,O=0;O<m.length;++O){var I=m[O],P="object"==typeof I&&void 0!==I.value?I.value:g[I];if(!s||null!==P){var w=ij(g)?"function"==typeof i?i(R,I):R:R+(l?"."+I:"["+I+"]");y.set(e,x);var M=eZ();M.set(iq,y),iY(A,t(P,w,i,n,o,s,"comma"===i&&d&&ij(g)?null:a,h,u,l,c,f,p,d,_,M))}}return A},iZ=function(t){if(!t)return iW;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw TypeError("Encoder has to be a function.");var e=t.charset||iW.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=iM.default;if(void 0!==t.format){if(!ik.call(iM.formatters,t.format))throw TypeError("Unknown format option provided.");r=t.format}var i=iM.formatters[r],n=iW.filter;return("function"==typeof t.filter||ij(t.filter))&&(n=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:iW.addQueryPrefix,allowDots:void 0===t.allowDots?iW.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:iW.charsetSentinel,delimiter:void 0===t.delimiter?iW.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:iW.encode,encoder:"function"==typeof t.encoder?t.encoder:iW.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:iW.encodeValuesOnly,filter:n,format:r,formatter:i,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:iW.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:iW.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:iW.strictNullHandling}};eK=function(t,e){var r,i,n=t,o=iZ(e);"function"==typeof o.filter?n=(0,o.filter)("",n):ij(o.filter)&&(r=o.filter);var s=[];if("object"!=typeof n||null===n)return"";i=e&&e.arrayFormat in iX?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var a=iX[i];if(e&&"commaRoundTrip"in e&&"boolean"!=typeof e.commaRoundTrip)throw TypeError("`commaRoundTrip` must be a boolean, or absent");var h="comma"===a&&e&&e.commaRoundTrip;r||(r=Object.keys(n)),o.sort&&r.sort(o.sort);for(var u=eZ(),l=0;l<r.length;++l){var c=r[l];o.skipNulls&&null===n[c]||iY(s,iK(n[c],c,a,h,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.format,o.formatter,o.encodeValuesOnly,o.charset,u))}var f=s.join(o.delimiter),p=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?p+="utf8=%26%2310003%3B&":p+="utf8=%E2%9C%93&"),f.length>0?p+f:""};var iJ=Object.prototype.hasOwnProperty,iQ=Array.isArray,i$={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:iw.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},i0=function(t,e){return t&&"string"==typeof t&&e.comma&&t.indexOf(",")>-1?t.split(","):t},i1=function(t,e){var r={__proto__:null},i=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,n=e.parameterLimit===1/0?void 0:e.parameterLimit,o=i.split(e.delimiter,n),s=-1,a=e.charset;if(e.charsetSentinel)for(h=0;h<o.length;++h)0===o[h].indexOf("utf8=")&&("utf8=%E2%9C%93"===o[h]?a="utf-8":"utf8=%26%2310003%3B"===o[h]&&(a="iso-8859-1"),s=h,h=o.length);for(h=0;h<o.length;++h)if(h!==s){var h,u,l,c=o[h],f=c.indexOf("]="),p=-1===f?c.indexOf("="):f+1;-1===p?(u=e.decoder(c,i$.decoder,a,"key"),l=e.strictNullHandling?null:""):(u=e.decoder(c.slice(0,p),i$.decoder,a,"key"),l=iw.maybeMap(i0(c.slice(p+1),e),function(t){return e.decoder(t,i$.decoder,a,"value")})),l&&e.interpretNumericEntities&&"iso-8859-1"===a&&(l=l.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})),c.indexOf("[]=")>-1&&(l=iQ(l)?[l]:l),iJ.call(r,u)?r[u]=iw.combine(r[u],l):r[u]=l}return r},i2=function(t,e,r,i){for(var n=i?e:i0(e,r),o=t.length-1;o>=0;--o){var s,a=t[o];if("[]"===a&&r.parseArrays)s=[].concat(n);else{s=r.plainObjects?Object.create(null):{};var h="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,u=parseInt(h,10);r.parseArrays||""!==h?!isNaN(u)&&a!==h&&String(u)===h&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(s=[])[u]=n:"__proto__"!==h&&(s[h]=n):s={0:n}}n=s}return n},i3=function(t,e,r,i){if(t){// Transform dot notation to bracket notation
var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/g,s=r.depth>0&&/(\[[^[\]]*])/.exec(n),a=s?n.slice(0,s.index):n,h=[];if(a){// If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
if(!r.plainObjects&&iJ.call(Object.prototype,a)&&!r.allowPrototypes)return;h.push(a)}for(// Loop through children appending to the array until we hit depth
var u=0;r.depth>0&&null!==(s=o.exec(n))&&u<r.depth;){if(u+=1,!r.plainObjects&&iJ.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;h.push(s[1])}return s&&h.push("["+n.slice(s.index)+"]"),i2(h,e,r,i)}},i4=function(t){if(!t)return i$;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?i$.charset:t.charset;return{allowDots:void 0===t.allowDots?i$.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:i$.allowPrototypes,allowSparse:"boolean"==typeof t.allowSparse?t.allowSparse:i$.allowSparse,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:i$.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:i$.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:i$.comma,decoder:"function"==typeof t.decoder?t.decoder:i$.decoder,delimiter:"string"==typeof t.delimiter||iw.isRegExp(t.delimiter)?t.delimiter:i$.delimiter,// eslint-disable-next-line no-implicit-coercion, no-extra-parens
depth:"number"==typeof t.depth||!1===t.depth?+t.depth:i$.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:i$.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:i$.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:i$.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:i$.strictNullHandling}};function i8(t,e,r){if(t&&"object"==typeof t&&t instanceof eL)return t;var i=new eL;return i.parse(t,e,r),i}eq={formats:iM,parse:function(t,e){var r=i4(e);if(""===t||null==t)return r.plainObjects?Object.create(null):{};for(var i="string"==typeof t?i1(t,r):t,n=r.plainObjects?Object.create(null):{},o=Object.keys(i),s=0;s<o.length;++s){var a=o[s],h=i3(a,i[a],r,"string"==typeof t);n=iw.merge(n,h,r)}return!0===r.allowSparse?n:iw.compact(n)},stringify:eK},eL.prototype.parse=function(t,e,r){if("string"!=typeof t)throw TypeError("Parameter 'url' must be a string, not "+typeof t);/*
   * Copy chrome, IE, opera backslash-handling behavior.
   * Back slashes before the query string get converted to forward slashes
   * See: https://code.google.com/p/chromium/issues/detail?id=25916
   */var i=t.indexOf("?"),n=-1!==i&&i<t.indexOf("#")?"?":"#",o=t.split(n);o[0]=o[0].replace(/\\/g,"/");var s=t=o.join(n);if(/*
   * trim before proceeding.
   * This is to support parse stuff like "  http://foo.com  \n"
   */s=s.trim(),!r&&1===t.split("#").length){// Try fast path regexp
var a=eU.exec(s);if(a)return this.path=s,this.href=s,this.pathname=a[1],a[2]?(this.search=a[2],e?this.query=eq.parse(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var h=eB.exec(s);if(h){var u=(h=h[0]).toLowerCase();this.protocol=u,s=s.substr(h.length)}/*
   * figure out if it's got a host
   * user@server is *always* interpreted as a hostname, and url
   * resolution will treat //foo/bar as host=foo,path=bar because that's
   * how the browser resolves relative URLs.
   */if(r||h||s.match(/^\/\/[^@/]+@[^@/]+/)){var l="//"===s.substr(0,2);l&&!(h&&eV[h])&&(s=s.substr(2),this.slashes=!0)}if(!eV[h]&&(l||h&&!eW[h])){for(var c,f,p=-1,d=0;d<ej.length;d++){var _=s.indexOf(ej[d]);-1!==_&&(-1===p||_<p)&&(p=_)}-1!==(f=-1===p?s.lastIndexOf("@"):s.lastIndexOf("@",p))&&(c=s.slice(0,f),s=s.slice(f+1),this.auth=decodeURIComponent(c)),// the host is the remaining to the left of the first non-host char
p=-1;for(var d=0;d<eX.length;d++){var _=s.indexOf(eX[d]);-1!==_&&(-1===p||_<p)&&(p=_)}-1===p&&(p=s.length),this.host=s.slice(0,p),s=s.slice(p),// pull out port.
this.parseHost(),/*
     * we've indicated that there is a hostname,
     * so even if it's empty, it has to be present.
     */this.hostname=this.hostname||"";/*
     * if hostname begins with [ and ends with ]
     * assume that it's an IPv6 address.
     */var y="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];// validate a little.
if(!y)for(var v=this.hostname.split(/\./),d=0,m=v.length;d<m;d++){var g=v[d];if(g&&!g.match(eH)){for(var b="",x=0,T=g.length;x<T;x++)g.charCodeAt(x)>127?/*
               * we replace non-ASCII char with a temporary placeholder
               * we need this to make sure size of hostname is not
               * broken by replacing non-ASCII by nothing
               */b+="x":b+=g[x];// we test again with ASCII char only
if(!b.match(eH)){var E=v.slice(0,d),A=v.slice(d+1),S=g.match(eY);S&&(E.push(S[1]),A.unshift(S[2])),A.length&&(s="/"+A.join(".")+s),this.hostname=E.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),y||/*
       * IDNA Support: Returns a punycoded representation of "domain".
       * It only converts parts of the domain name that
       * have non-ASCII characters, i.e. it doesn't matter if
       * you call it with a domain that already is ASCII-only.
       */(this.hostname=eN.toASCII(this.hostname));var R=this.port?":"+this.port:"",O=this.hostname||"";this.host=O+R,this.href+=this.host,y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==s[0]&&(s="/"+s))}/*
   * now rest is set to the post-host stuff.
   * chop off any delim chars.
   */if(!ez[u])/*
     * First, make 100% sure that any "autoEscape" chars get
     * escaped, even if encodeURIComponent doesn't think they
     * need to be.
     */for(var d=0,m=ek.length;d<m;d++){var I=ek[d];if(-1!==s.indexOf(I)){var P=encodeURIComponent(I);P===I&&(P=escape(I)),s=s.split(I).join(P)}}// chop off from the tail first.
var w=s.indexOf("#");-1!==w&&(// got a fragment string.
this.hash=s.substr(w),s=s.slice(0,w));var M=s.indexOf("?");// to support http.request
if(-1!==M?(this.search=s.substr(M),this.query=s.substr(M+1),e&&(this.query=eq.parse(this.query)),s=s.slice(0,M)):e&&(// no query string, but parseQueryString still requested
this.search="",this.query={}),s&&(this.pathname=s),eW[u]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var R=this.pathname||"",D=this.search||"";this.path=R+D}return(// finally, reconstruct the href based on what has been validated.
this.href=this.format(),this)},eL.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":")+"@");var e=this.protocol||"",r=this.pathname||"",i=this.hash||"",n=!1,o="";this.host?n=t+this.host:this.hostname&&(n=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(n+=":"+this.port)),this.query&&"object"==typeof this.query&&Object.keys(this.query).length&&(o=eq.stringify(this.query,{arrayFormat:"repeat",addQueryPrefix:!1}));var s=this.search||o&&"?"+o||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||eW[e])&&!1!==n?(n="//"+(n||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):n||(n=""),i&&"#"!==i.charAt(0)&&(i="#"+i),s&&"?"!==s.charAt(0)&&(s="?"+s),e+n+(r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}))+(s=s.replace("#","%23"))+i},eL.prototype.resolve=function(t){return this.resolveObject(i8(t,!1,!0)).format()},eL.prototype.resolveObject=function(t){if("string"==typeof t){var e=new eL;e.parse(t,!1,!0),t=e}for(var r=new eL,i=Object.keys(this),n=0;n<i.length;n++){var o=i[n];r[o]=this[o]}// if the relative url is empty, then there's nothing left to do here.
if(/*
   * hash is always overridden, no matter what.
   * even href="" will remove it.
   */r.hash=t.hash,""===t.href)return r.href=r.format(),r;// hrefs like //foo/bar always cut to the protocol.
if(t.slashes&&!t.protocol){for(var s=Object.keys(t),a=0;a<s.length;a++){var h=s[a];"protocol"!==h&&(r[h]=t[h])}return eW[r.protocol]&&r.hostname&&!r.pathname&&(r.pathname="/",r.path=r.pathname),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){/*
     * if it's a known url protocol, then changing
     * the protocol does weird things
     * first, if it's not file:, then we MUST have a host,
     * and if there was a path
     * to begin with, then we MUST have a path.
     * if it is file:, then the host is dropped,
     * because that's known to be hostless.
     * anything else is assumed to be absolute.
     */if(!eW[t.protocol]){for(var u=Object.keys(t),l=0;l<u.length;l++){var c=u[l];r[c]=t[c]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||eV[t.protocol])r.pathname=t.pathname;else{for(var f=(t.pathname||"").split("/");f.length&&!(t.host=f.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==f[0]&&f.unshift(""),f.length<2&&f.unshift(""),r.pathname=f.join("/")}// to support http.request
if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var p=r.pathname||"",d=r.search||"";r.path=p+d}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var _=r.pathname&&"/"===r.pathname.charAt(0),y=t.host||t.pathname&&"/"===t.pathname.charAt(0),v=y||_||r.host&&t.pathname,m=v,g=r.pathname&&r.pathname.split("/")||[],f=t.pathname&&t.pathname.split("/")||[],b=r.protocol&&!eW[r.protocol];if(b&&(r.hostname="",r.port=null,r.host&&(""===g[0]?g[0]=r.host:g.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===f[0]?f[0]=t.host:f.unshift(t.host)),t.host=null),v=v&&(""===f[0]||""===g[0])),y)// it's absolute.
r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,g=f;else if(f.length)g||(g=[]),g.pop(),g=g.concat(f),r.search=t.search,r.query=t.query;else if(null!=t.search){/*
     * just pull out the search.
     * like href='?foo'.
     * Put this after the other two cases because it simplifies the booleans
     */if(b){r.host=g.shift(),r.hostname=r.host;/*
       * occationaly the auth can get stuck only in host
       * this especially happens in cases like
       * url.resolveObject('mailto:local1@domain1', 'local2@domain2')
       */var x=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");x&&(r.auth=x.shift(),r.hostname=x.shift(),r.host=r.hostname)}return r.search=t.search,r.query=t.query,(null!==r.pathname||null!==r.search)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!g.length)return(/*
     * no path at all.  easy.
     * we've already handled the other stuff above.
     */r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r);for(var T=g.slice(-1)[0],E=(r.host||t.host||g.length>1)&&("."===T||".."===T)||""===T,A=0,S=g.length;S>=0;S--)"."===(T=g[S])?g.splice(S,1):".."===T?(g.splice(S,1),A++):A&&(g.splice(S,1),A--);// if the path is allowed to go above the root, restore leading ..s
if(!v&&!m)for(;A--;A)g.unshift("..");v&&""!==g[0]&&(!g[0]||"/"!==g[0].charAt(0))&&g.unshift(""),E&&"/"!==g.join("/").substr(-1)&&g.push("");var R=""===g[0]||g[0]&&"/"===g[0].charAt(0);// put the host back
if(b){r.hostname=R?"":g.length?g.shift():"",r.host=r.hostname;/*
     * occationaly the auth can get stuck only in host
     * this especially happens in cases like
     * url.resolveObject('mailto:local1@domain1', 'local2@domain2')
     */var x=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");x&&(r.auth=x.shift(),r.hostname=x.shift(),r.host=r.hostname)}return(v=v||r.host&&g.length)&&!R&&g.unshift(""),g.length>0?r.pathname=g.join("/"):(r.pathname=null,r.path=null),(null!==r.pathname||null!==r.search)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},eL.prototype.parseHost=function(){var t=this.host,e=eG.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)};/**
 * This file contains redeclared types for Node `url` and `querystring` modules. These modules
 * don't provide their own typings but instead are a part of the full Node typings. The purpose of
 * this file is to redeclare the required types to avoid having the whole Node types as a
 * dependency.
 */var i6={parse:i8,format:// format a parsed object into a url string
function(t){return("string"==typeof t&&(t=i8(t)),t instanceof eL)?t.format():eL.prototype.format.call(t)},resolve:function(t,e){return i8(t,!1,!0).resolve(e)}};eh.RETINA_PREFIX=/@([0-9\.]+)x/,eh.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;var i5=!1,i9="6.5.10",i7={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};/**
 * Converts a hexadecimal color number to an [R, G, B] array of normalized floats (numbers from 0.0 to 1.0).
 * @example
 * PIXI.utils.hex2rgb(0xffffff); // returns [1, 1, 1]
 * @memberof PIXI.utils
 * @function hex2rgb
 * @param {number} hex - The hexadecimal number to convert
 * @param  {number[]} [out=[]] - If supplied, this array will be used rather than returning a new one
 * @returns {number[]} An array representing the [R, G, B] of the color where all values are floats.
 */function nt(t,e){return void 0===e&&(e=[]),e[0]=(t>>16&255)/255,e[1]=(t>>8&255)/255,e[2]=(255&t)/255,e}/**
 * Converts a hexadecimal color number to a string.
 * @example
 * PIXI.utils.hex2string(0xffffff); // returns "#ffffff"
 * @memberof PIXI.utils
 * @function hex2string
 * @param {number} hex - Number in hex (e.g., `0xffffff`)
 * @returns {string} The string color (e.g., `"#ffffff"`).
 */function ne(t){var e=t.toString(16);return"#"+(e="000000".substring(0,6-e.length)+e)}/**
 * Converts a string to a hexadecimal color number.
 * It can handle:
 *  hex strings starting with #: "#ffffff"
 *  hex strings starting with 0x: "0xffffff"
 *  hex strings without prefix: "ffffff"
 *  css colors: "black"
 * @example
 * PIXI.utils.string2hex("#ffffff"); // returns 0xffffff, which is 16777215 as an integer
 * @memberof PIXI.utils
 * @function string2hex
 * @param {string} string - The string color (e.g., `"#ffffff"`)
 * @returns {number} Number in hexadecimal.
 */function nr(t){return"string"==typeof t&&"#"===(t=i7[t.toLowerCase()]||t)[0]&&(t=t.slice(1)),parseInt(t,16)}/**
 * maps premultiply flag and blendMode to adjusted blendMode
 * @memberof PIXI.utils
 * @constant premultiplyBlendMode
 * @type {Array<number[]>}
 */var ni=/**
 * Corrects PixiJS blend, takes premultiplied alpha into account
 * @memberof PIXI.utils
 * @function mapPremultipliedBlendModes
 * @private
 * @returns {Array<number[]>} Mapped modes.
 */function(){for(var t=[],e=[],r=0;r<32;r++)t[r]=r,e[r]=r;t[z.NORMAL_NPM]=z.NORMAL,t[z.ADD_NPM]=z.ADD,t[z.SCREEN_NPM]=z.SCREEN,e[z.NORMAL]=z.NORMAL_NPM,e[z.ADD]=z.ADD_NPM,e[z.SCREEN]=z.SCREEN_NPM;var i=[];return i.push(e),i.push(t),i}();/**
 * premultiplies tint
 * @memberof PIXI.utils
 * @function premultiplyTint
 * @param {number} tint - integer RGB
 * @param {number} alpha - floating point alpha (0.0-1.0)
 * @returns {number} tint multiplied by alpha
 */function nn(t,e){if(1===e)return(255*e<<24)+t;if(0===e)return 0;var r=t>>16&255,i=t>>8&255,n=255&t;return r=r*e+.5|0,i=i*e+.5|0,n=n*e+.5|0,(255*e<<24)+(r<<16)+(i<<8)+n}/**
 * converts integer tint and float alpha to vec4 form, premultiplies by default
 * @memberof PIXI.utils
 * @function premultiplyTintToRgba
 * @param {number} tint - input tint
 * @param {number} alpha - alpha param
 * @param {Float32Array} [out] - output
 * @param {boolean} [premultiply=true] - do premultiply it
 * @returns {Float32Array} vec4 rgba
 */function no(t,e,r,i){return(r=r||new Float32Array(4))[0]=(t>>16&255)/255,r[1]=(t>>8&255)/255,r[2]=(255&t)/255,(i||void 0===i)&&(r[0]*=e,r[1]*=e,r[2]*=e),r[3]=e,r}function ns(t){if(4===t.BYTES_PER_ELEMENT)return t instanceof Float32Array?"Float32Array":t instanceof Uint32Array?"Uint32Array":"Int32Array";if(2===t.BYTES_PER_ELEMENT){if(t instanceof Uint16Array)return"Uint16Array"}else if(1===t.BYTES_PER_ELEMENT&&t instanceof Uint8Array)return"Uint8Array";// TODO map out the rest of the array elements!
return null}// Taken from the bit-twiddle package
/**
 * Rounds to next power of two.
 * @function nextPow2
 * @memberof PIXI.utils
 * @param {number} v - input value
 * @returns {number} - next rounded power of two
 */function na(t){return t+=0===t?1:0,--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,(t|=t>>>16)+1}/**
 * Computes ceil of log base 2
 * @function log2
 * @memberof PIXI.utils
 * @param {number} v - input value
 * @returns {number} logarithm base 2
 */function nh(t){var e=(t>65535?1:0)<<4,r=((t>>>=e)>255?1:0)<<3;return t>>>=r,e|=r,r=(t>15?1:0)<<2,t>>>=r,e|=r,r=(t>3?1:0)<<1,t>>>=r,(e|=r)|t>>1}/**
 * Remove items from a javascript array without generating garbage
 * @function removeItems
 * @memberof PIXI.utils
 * @param {Array<any>} arr - Array to remove elements from
 * @param {number} startIdx - starting index
 * @param {number} removeCount - how many to remove
 */function nu(t,e,r){var i,n=t.length;if(!(e>=n)&&0!==r){r=e+r>n?n-e:r;var o=n-r;for(i=e;i<o;++i)t[i]=t[i+r];t.length=o}}/**
 * Returns sign of number
 * @memberof PIXI.utils
 * @function sign
 * @param {number} n - the number to check the sign of
 * @returns {number} 0 if `n` is 0, -1 if `n` is negative, 1 if `n` is positive
 */function nl(t){return 0===t?0:t<0?-1:1}Float32Array,Uint32Array,Int32Array,Uint8Array;var nc=0,nf={};/**
 * Helper for warning developers about deprecated features & settings.
 * A stack track for warnings is given; useful for tracking-down where
 * deprecated methods/properties/classes are being used within the code.
 * @memberof PIXI.utils
 * @function deprecation
 * @param {string} version - The version where the feature became deprecated
 * @param {string} message - Message should include what is deprecated, where, and the new solution
 * @param {number} [ignoreDepth=3] - The number of steps to ignore at the top of the error stack
 *        this is mostly to ignore internal deprecation calls.
 */function np(t,e,r){// Ignore duplicat
if(void 0===r&&(r=3),!nf[e]){/* eslint-disable no-console */var i=Error().stack;void 0===i?console.warn("PixiJS Deprecation Warning: ",e+"\nDeprecated since v"+t):(// chop off the stack trace which includes PixiJS internal calls
i=i.split("\n").splice(r).join("\n"),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",e+"\nDeprecated since v"+t),console.warn(i),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",e+"\nDeprecated since v"+t),console.warn(i))),/* eslint-enable no-console */nf[e]=!0}}/**
 * @todo Describe property usage
 * @static
 * @name ProgramCache
 * @memberof PIXI.utils
 * @type {object}
 */var nd={},n_=Object.create(null),ny=Object.create(null),nv=/** @class */function(){/**
     * @param width - the width for the newly created canvas
     * @param height - the height for the newly created canvas
     * @param {number} [resolution=PIXI.settings.RESOLUTION] - The resolution / device pixel ratio of the canvas
     */function t(t,e,r){this.canvas=eh.ADAPTER.createCanvas(),this.context=this.canvas.getContext("2d"),this.resolution=r||eh.RESOLUTION,this.resize(t,e)}return(/**
     * Clears the canvas that was created by the CanvasRenderTarget class.
     * @private
     */t.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},/**
     * Resizes the canvas to the specified width and height.
     * @param desiredWidth - the desired width of the canvas
     * @param desiredHeight - the desired height of the canvas
     */t.prototype.resize=function(t,e){this.canvas.width=Math.round(t*this.resolution),this.canvas.height=Math.round(e*this.resolution)},/** Destroys this canvas. */t.prototype.destroy=function(){this.context=null,this.canvas=null},Object.defineProperty(t.prototype,"width",{/**
         * The width of the canvas buffer in pixels.
         * @member {number}
         */get:function(){return this.canvas.width},set:function(t){this.canvas.width=Math.round(t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{/**
         * The height of the canvas buffer in pixels.
         * @member {number}
         */get:function(){return this.canvas.height},set:function(t){this.canvas.height=Math.round(t)},enumerable:!1,configurable:!0}),t)}();/**
 * get the resolution / device pixel ratio of an asset by looking for the prefix
 * used by spritesheets and image urls
 * @memberof PIXI.utils
 * @function getResolutionOfUrl
 * @param {string} url - the image path
 * @param {number} [defaultValue=1] - the defaultValue if no filename prefix is set.
 * @returns {number} resolution / device pixel ratio of an asset
 */function nm(t,e){var r=eh.RETINA_PREFIX.exec(t);return r?parseFloat(r[1]):void 0!==e?e:1}/*!
 * @pixi/accessibility - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/accessibility is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*!
 * @pixi/display - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/display is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*!
 * @pixi/math - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/math is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//**
 * Two Pi.
 * @static
 * @member {number}
 * @memberof PIXI
 */var ng=2*Math.PI,nb=180/Math.PI,nx=Math.PI/180;(O=tc||(tc={}))[O.POLY=0]="POLY",O[O.RECT=1]="RECT",O[O.CIRC=2]="CIRC",O[O.ELIP=3]="ELIP",O[O.RREC=4]="RREC";/**
 * The Point object represents a location in a two-dimensional coordinate system, where `x` represents
 * the position on the horizontal axis and `y` represents the position on the vertical axis
 * @class
 * @memberof PIXI
 * @implements {IPoint}
 */var nT=/** @class */function(){/**
     * Creates a new `Point`
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),/** Position of the point on the x axis */this.x=0,/** Position of the point on the y axis */this.y=0,this.x=t,this.y=e}return(/**
     * Creates a clone of this point
     * @returns A clone of this point
     */t.prototype.clone=function(){return new t(this.x,this.y)},/**
     * Copies `x` and `y` from the given point into this point
     * @param p - The point to copy from
     * @returns The point instance itself
     */t.prototype.copyFrom=function(t){return this.set(t.x,t.y),this},/**
     * Copies this point's x and y into the given point (`p`).
     * @param p - The point to copy to. Can be any of type that is or extends `IPointData`
     * @returns The point (`p`) with values updated
     */t.prototype.copyTo=function(t){return t.set(this.x,this.y),t},/**
     * Accepts another point (`p`) and returns `true` if the given point is equal to this point
     * @param p - The point to check
     * @returns Returns `true` if both `x` and `y` are equal
     */t.prototype.equals=function(t){return t.x===this.x&&t.y===this.y},/**
     * Sets the point to a new `x` and `y` position.
     * If `y` is omitted, both `x` and `y` will be set to `x`.
     * @param {number} [x=0] - position of the point on the `x` axis
     * @param {number} [y=x] - position of the point on the `y` axis
     * @returns The point instance itself
     */t.prototype.set=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=t),this.x=t,this.y=e,this},t.prototype.toString=function(){return"[@pixi/math:Point x="+this.x+" y="+this.y+"]"},t)}(),nE=[new nT,new nT,new nT,new nT],nA=/** @class */function(){/**
     * @param x - The X coordinate of the upper-left corner of the rectangle
     * @param y - The Y coordinate of the upper-left corner of the rectangle
     * @param width - The overall width of the rectangle
     * @param height - The overall height of the rectangle
     */function t(t,e,r,i){void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=0),void 0===i&&(i=0),this.x=Number(t),this.y=Number(e),this.width=Number(r),this.height=Number(i),this.type=tc.RECT}return Object.defineProperty(t.prototype,"left",{/** Returns the left edge of the rectangle. */get:function(){return this.x},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"right",{/** Returns the right edge of the rectangle. */get:function(){return this.x+this.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"top",{/** Returns the top edge of the rectangle. */get:function(){return this.y},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bottom",{/** Returns the bottom edge of the rectangle. */get:function(){return this.y+this.height},enumerable:!1,configurable:!0}),Object.defineProperty(t,"EMPTY",{/** A constant empty rectangle. */get:function(){return new t(0,0,0,0)},enumerable:!1,configurable:!0}),/**
     * Creates a clone of this Rectangle
     * @returns a copy of the rectangle
     */t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height)},/**
     * Copies another rectangle to this one.
     * @param rectangle - The rectangle to copy from.
     * @returns Returns itself.
     */t.prototype.copyFrom=function(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this},/**
     * Copies this rectangle to another one.
     * @param rectangle - The rectangle to copy to.
     * @returns Returns given parameter.
     */t.prototype.copyTo=function(t){return t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t},/**
     * Checks whether the x and y coordinates given are contained within this Rectangle
     * @param x - The X coordinate of the point to test
     * @param y - The Y coordinate of the point to test
     * @returns Whether the x/y coordinates are within this Rectangle
     */t.prototype.contains=function(t,e){return!(this.width<=0)&&!(this.height<=0)&&t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height},/**
     * Determines whether the `other` Rectangle transformed by `transform` intersects with `this` Rectangle object.
     * Returns true only if the area of the intersection is >0, this means that Rectangles
     * sharing a side are not overlapping. Another side effect is that an arealess rectangle
     * (width or height equal to zero) can't intersect any other rectangle.
     * @param {Rectangle} other - The Rectangle to intersect with `this`.
     * @param {Matrix} transform - The transformation matrix of `other`.
     * @returns {boolean} A value of `true` if the transformed `other` Rectangle intersects with `this`; otherwise `false`.
     */t.prototype.intersects=function(t,e){if(!e){var r=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=r)return!1;var i=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>i}var n=this.left,o=this.right,s=this.top,a=this.bottom;if(o<=n||a<=s)return!1;var h=nE[0].set(t.left,t.top),u=nE[1].set(t.left,t.bottom),l=nE[2].set(t.right,t.top),c=nE[3].set(t.right,t.bottom);if(l.x<=h.x||u.y<=h.y)return!1;var f=Math.sign(e.a*e.d-e.b*e.c);if(0===f||(e.apply(h,h),e.apply(u,u),e.apply(l,l),e.apply(c,c),Math.max(h.x,u.x,l.x,c.x)<=n||Math.min(h.x,u.x,l.x,c.x)>=o||Math.max(h.y,u.y,l.y,c.y)<=s||Math.min(h.y,u.y,l.y,c.y)>=a))return!1;var p=f*(u.y-h.y),d=f*(h.x-u.x),_=p*n+d*s,y=p*o+d*s,v=p*n+d*a,m=p*o+d*a;if(Math.max(_,y,v,m)<=p*h.x+d*h.y||Math.min(_,y,v,m)>=p*c.x+d*c.y)return!1;var g=f*(h.y-l.y),b=f*(l.x-h.x),x=g*n+b*s,T=g*o+b*s,E=g*n+b*a,A=g*o+b*a;return!(Math.max(x,T,E,A)<=g*h.x+b*h.y||Math.min(x,T,E,A)>=g*c.x+b*c.y)},/**
     * Pads the rectangle making it grow in all directions.
     * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
     * @param paddingX - The horizontal padding amount.
     * @param paddingY - The vertical padding amount.
     * @returns Returns itself.
     */t.prototype.pad=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=t),this.x-=t,this.y-=e,this.width+=2*t,this.height+=2*e,this},/**
     * Fits this rectangle around the passed one.
     * @param rectangle - The rectangle to fit.
     * @returns Returns itself.
     */t.prototype.fit=function(t){var e=Math.max(this.x,t.x),r=Math.min(this.x+this.width,t.x+t.width),i=Math.max(this.y,t.y),n=Math.min(this.y+this.height,t.y+t.height);return this.x=e,this.width=Math.max(r-e,0),this.y=i,this.height=Math.max(n-i,0),this},/**
     * Enlarges rectangle that way its corners lie on grid
     * @param resolution - resolution
     * @param eps - precision
     * @returns Returns itself.
     */t.prototype.ceil=function(t,e){void 0===t&&(t=1),void 0===e&&(e=.001);var r=Math.ceil((this.x+this.width-e)*t)/t,i=Math.ceil((this.y+this.height-e)*t)/t;return this.x=Math.floor((this.x+e)*t)/t,this.y=Math.floor((this.y+e)*t)/t,this.width=r-this.x,this.height=i-this.y,this},/**
     * Enlarges this rectangle to include the passed rectangle.
     * @param rectangle - The rectangle to include.
     * @returns Returns itself.
     */t.prototype.enlarge=function(t){var e=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),i=Math.min(this.y,t.y),n=Math.max(this.y+this.height,t.y+t.height);return this.x=e,this.width=r-e,this.y=i,this.height=n-i,this},t.prototype.toString=function(){return"[@pixi/math:Rectangle x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},t}(),nS=/** @class */function(){/**
     * @param x - The X coordinate of the center of this circle
     * @param y - The Y coordinate of the center of this circle
     * @param radius - The radius of the circle
     */function t(t,e,r){void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=0),this.x=t,this.y=e,this.radius=r,this.type=tc.CIRC}return(/**
     * Creates a clone of this Circle instance
     * @returns A copy of the Circle
     */t.prototype.clone=function(){return new t(this.x,this.y,this.radius)},/**
     * Checks whether the x and y coordinates given are contained within this circle
     * @param x - The X coordinate of the point to test
     * @param y - The Y coordinate of the point to test
     * @returns Whether the x/y coordinates are within this Circle
     */t.prototype.contains=function(t,e){if(this.radius<=0)return!1;var r=this.radius*this.radius,i=this.x-t,n=this.y-e;return i*=i,n*=n,i+n<=r},/**
     * Returns the framing rectangle of the circle as a Rectangle object
     * @returns The framing rectangle
     */t.prototype.getBounds=function(){return new nA(this.x-this.radius,this.y-this.radius,2*this.radius,2*this.radius)},t.prototype.toString=function(){return"[@pixi/math:Circle x="+this.x+" y="+this.y+" radius="+this.radius+"]"},t)}(),nR=/** @class */function(){/**
     * @param x - The X coordinate of the center of this ellipse
     * @param y - The Y coordinate of the center of this ellipse
     * @param halfWidth - The half width of this ellipse
     * @param halfHeight - The half height of this ellipse
     */function t(t,e,r,i){void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=0),void 0===i&&(i=0),this.x=t,this.y=e,this.width=r,this.height=i,this.type=tc.ELIP}return(/**
     * Creates a clone of this Ellipse instance
     * @returns {PIXI.Ellipse} A copy of the ellipse
     */t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height)},/**
     * Checks whether the x and y coordinates given are contained within this ellipse
     * @param x - The X coordinate of the point to test
     * @param y - The Y coordinate of the point to test
     * @returns Whether the x/y coords are within this ellipse
     */t.prototype.contains=function(t,e){if(this.width<=0||this.height<=0)return!1;// normalize the coords to an ellipse with center 0,0
var r=(t-this.x)/this.width,i=(e-this.y)/this.height;return r*=r,i*=i,r+i<=1},/**
     * Returns the framing rectangle of the ellipse as a Rectangle object
     * @returns The framing rectangle
     */t.prototype.getBounds=function(){return new nA(this.x-this.width,this.y-this.height,this.width,this.height)},t.prototype.toString=function(){return"[@pixi/math:Ellipse x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},t)}(),nO=/** @class */function(){/**
     * @param {PIXI.IPointData[]|number[]} points - This can be an array of Points
     *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
     *  the arguments passed can be all the points of the polygon e.g.
     *  `new PIXI.Polygon(new PIXI.Point(), new PIXI.Point(), ...)`, or the arguments passed can be flat
     *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
     */function t(){for(var t=arguments,e=[],r=0;r<arguments.length;r++)e[r]=t[r];var i=Array.isArray(e[0])?e[0]:e;// if this is an array of points, convert it to a flat array of numbers
if("number"!=typeof i[0]){for(var n=[],o=0,s=i.length;o<s;o++)n.push(i[o].x,i[o].y);i=n}this.points=i,this.type=tc.POLY,this.closeStroke=!0}return(/**
     * Creates a clone of this polygon.
     * @returns - A copy of the polygon.
     */t.prototype.clone=function(){var e=this.points.slice(),r=new t(e);return r.closeStroke=this.closeStroke,r},/**
     * Checks whether the x and y coordinates passed to this function are contained within this polygon.
     * @param x - The X coordinate of the point to test.
     * @param y - The Y coordinate of the point to test.
     * @returns - Whether the x/y coordinates are within this polygon.
     */t.prototype.contains=function(t,e){for(var r=!1,i=this.points.length/2,n=0,o=i-1;n<i;o=n++){var s=this.points[2*n],a=this.points[2*n+1],h=this.points[2*o],u=this.points[2*o+1];a>e!=u>e&&t<(h-s)*((e-a)/(u-a))+s&&(r=!r)}return r},t.prototype.toString=function(){return"[@pixi/math:PolygoncloseStroke="+this.closeStroke+"points="+this.points.reduce(function(t,e){return t+", "+e},"")+"]"},t)}(),nI=/** @class */function(){/**
     * @param x - The X coordinate of the upper-left corner of the rounded rectangle
     * @param y - The Y coordinate of the upper-left corner of the rounded rectangle
     * @param width - The overall width of this rounded rectangle
     * @param height - The overall height of this rounded rectangle
     * @param radius - Controls the radius of the rounded corners
     */function t(t,e,r,i,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=0),void 0===i&&(i=0),void 0===n&&(n=20),this.x=t,this.y=e,this.width=r,this.height=i,this.radius=n,this.type=tc.RREC}return(/**
     * Creates a clone of this Rounded Rectangle.
     * @returns - A copy of the rounded rectangle.
     */t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height,this.radius)},/**
     * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
     * @param x - The X coordinate of the point to test.
     * @param y - The Y coordinate of the point to test.
     * @returns - Whether the x/y coordinates are within this Rounded Rectangle.
     */t.prototype.contains=function(t,e){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){var r=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(e>=this.y+r&&e<=this.y+this.height-r||t>=this.x+r&&t<=this.x+this.width-r)return!0;var i=t-(this.x+r),n=e-(this.y+r),o=r*r;if(i*i+n*n<=o||(i=t-(this.x+this.width-r))*i+n*n<=o||i*i+(n=e-(this.y+this.height-r))*n<=o||(i=t-(this.x+r))*i+n*n<=o)return!0}return!1},t.prototype.toString=function(){return"[@pixi/math:RoundedRectangle x="+this.x+" y="+this.y+("width="+this.width+" height="+this.height)+" radius="+this.radius+"]"},t)}(),nP=/** @class */function(){/**
     * Creates a new `ObservablePoint`
     * @param cb - callback function triggered when `x` and/or `y` are changed
     * @param scope - owner of callback
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */function t(t,e,r,i){void 0===r&&(r=0),void 0===i&&(i=0),this._x=r,this._y=i,this.cb=t,this.scope=e}return(/**
     * Creates a clone of this point.
     * The callback and scope params can be overridden otherwise they will default
     * to the clone object's values.
     * @override
     * @param cb - The callback function triggered when `x` and/or `y` are changed
     * @param scope - The owner of the callback
     * @returns a copy of this observable point
     */t.prototype.clone=function(e,r){return void 0===e&&(e=this.cb),void 0===r&&(r=this.scope),new t(e,r,this._x,this._y)},/**
     * Sets the point to a new `x` and `y` position.
     * If `y` is omitted, both `x` and `y` will be set to `x`.
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=x] - position of the point on the y axis
     * @returns The observable point instance itself
     */t.prototype.set=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=t),(this._x!==t||this._y!==e)&&(this._x=t,this._y=e,this.cb.call(this.scope)),this},/**
     * Copies x and y from the given point (`p`)
     * @param p - The point to copy from. Can be any of type that is or extends `IPointData`
     * @returns The observable point instance itself
     */t.prototype.copyFrom=function(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this.cb.call(this.scope)),this},/**
     * Copies this point's x and y into that of the given point (`p`)
     * @param p - The point to copy to. Can be any of type that is or extends `IPointData`
     * @returns The point (`p`) with values updated
     */t.prototype.copyTo=function(t){return t.set(this._x,this._y),t},/**
     * Accepts another point (`p`) and returns `true` if the given point is equal to this point
     * @param p - The point to check
     * @returns Returns `true` if both `x` and `y` are equal
     */t.prototype.equals=function(t){return t.x===this._x&&t.y===this._y},t.prototype.toString=function(){return"[@pixi/math:ObservablePoint x=0 y=0 scope="+this.scope+"]"},Object.defineProperty(t.prototype,"x",{/** Position of the observable point on the x axis. */get:function(){return this._x},set:function(t){this._x!==t&&(this._x=t,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{/** Position of the observable point on the y axis. */get:function(){return this._y},set:function(t){this._y!==t&&(this._y=t,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),t)}(),nw=/** @class */function(){/**
     * @param a - x scale
     * @param b - y skew
     * @param c - x skew
     * @param d - y scale
     * @param tx - x translation
     * @param ty - y translation
     */function t(t,e,r,i,n,o){void 0===t&&(t=1),void 0===e&&(e=0),void 0===r&&(r=0),void 0===i&&(i=1),void 0===n&&(n=0),void 0===o&&(o=0),this.array=null,this.a=t,this.b=e,this.c=r,this.d=i,this.tx=n,this.ty=o}return(/**
     * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
     *
     * a = array[0]
     * b = array[1]
     * c = array[3]
     * d = array[4]
     * tx = array[2]
     * ty = array[5]
     * @param array - The array that the matrix will be populated from.
     */t.prototype.fromArray=function(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]},/**
     * Sets the matrix properties.
     * @param a - Matrix component
     * @param b - Matrix component
     * @param c - Matrix component
     * @param d - Matrix component
     * @param tx - Matrix component
     * @param ty - Matrix component
     * @returns This matrix. Good for chaining method calls.
     */t.prototype.set=function(t,e,r,i,n,o){return this.a=t,this.b=e,this.c=r,this.d=i,this.tx=n,this.ty=o,this},/**
     * Creates an array from the current Matrix object.
     * @param transpose - Whether we need to transpose the matrix or not
     * @param [out=new Float32Array(9)] - If provided the array will be assigned to out
     * @returns The newly created array which contains the matrix
     */t.prototype.toArray=function(t,e){this.array||(this.array=new Float32Array(9));var r=e||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0),r[8]=1,r},/**
     * Get a new position with the current transformation applied.
     * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
     * @param pos - The origin
     * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
     * @returns {PIXI.Point} The new point, transformed through this matrix
     */t.prototype.apply=function(t,e){e=e||new nT;var r=t.x,i=t.y;return e.x=this.a*r+this.c*i+this.tx,e.y=this.b*r+this.d*i+this.ty,e},/**
     * Get a new position with the inverse of the current transformation applied.
     * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
     * @param pos - The origin
     * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
     * @returns {PIXI.Point} The new point, inverse-transformed through this matrix
     */t.prototype.applyInverse=function(t,e){e=e||new nT;var r=1/(this.a*this.d+-(this.c*this.b)),i=t.x,n=t.y;return e.x=this.d*r*i+-this.c*r*n+(this.ty*this.c-this.tx*this.d)*r,e.y=this.a*r*n+-this.b*r*i+(-this.ty*this.a+this.tx*this.b)*r,e},/**
     * Translates the matrix on the x and y.
     * @param x - How much to translate x by
     * @param y - How much to translate y by
     * @returns This matrix. Good for chaining method calls.
     */t.prototype.translate=function(t,e){return this.tx+=t,this.ty+=e,this},/**
     * Applies a scale transformation to the matrix.
     * @param x - The amount to scale horizontally
     * @param y - The amount to scale vertically
     * @returns This matrix. Good for chaining method calls.
     */t.prototype.scale=function(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this},/**
     * Applies a rotation transformation to the matrix.
     * @param angle - The angle in radians.
     * @returns This matrix. Good for chaining method calls.
     */t.prototype.rotate=function(t){var e=Math.cos(t),r=Math.sin(t),i=this.a,n=this.c,o=this.tx;return this.a=i*e-this.b*r,this.b=i*r+this.b*e,this.c=n*e-this.d*r,this.d=n*r+this.d*e,this.tx=o*e-this.ty*r,this.ty=o*r+this.ty*e,this},/**
     * Appends the given Matrix to this Matrix.
     * @param matrix - The matrix to append.
     * @returns This matrix. Good for chaining method calls.
     */t.prototype.append=function(t){var e=this.a,r=this.b,i=this.c,n=this.d;return this.a=t.a*e+t.b*i,this.b=t.a*r+t.b*n,this.c=t.c*e+t.d*i,this.d=t.c*r+t.d*n,this.tx=t.tx*e+t.ty*i+this.tx,this.ty=t.tx*r+t.ty*n+this.ty,this},/**
     * Sets the matrix based on all the available properties
     * @param x - Position on the x axis
     * @param y - Position on the y axis
     * @param pivotX - Pivot on the x axis
     * @param pivotY - Pivot on the y axis
     * @param scaleX - Scale on the x axis
     * @param scaleY - Scale on the y axis
     * @param rotation - Rotation in radians
     * @param skewX - Skew on the x axis
     * @param skewY - Skew on the y axis
     * @returns This matrix. Good for chaining method calls.
     */t.prototype.setTransform=function(t,e,r,i,n,o,s,a,h){return this.a=Math.cos(s+h)*n,this.b=Math.sin(s+h)*n,this.c=-Math.sin(s-a)*o,this.d=Math.cos(s-a)*o,this.tx=t-(r*this.a+i*this.c),this.ty=e-(r*this.b+i*this.d),this},/**
     * Prepends the given Matrix to this Matrix.
     * @param matrix - The matrix to prepend
     * @returns This matrix. Good for chaining method calls.
     */t.prototype.prepend=function(t){var e=this.tx;if(1!==t.a||0!==t.b||0!==t.c||1!==t.d){var r=this.a,i=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=i*t.a+this.d*t.c,this.d=i*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this},/**
     * Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform.
     * @param transform - The transform to apply the properties to.
     * @returns The transform with the newly applied properties
     */t.prototype.decompose=function(t){// sort out rotation / skew..
var e=this.a,r=this.b,i=this.c,n=this.d,o=t.pivot,s=-Math.atan2(-i,n),a=Math.atan2(r,e),h=Math.abs(s+a);return h<1e-5||1e-5>Math.abs(ng-h)?(t.rotation=a,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=s,t.skew.y=a),// next set scale
t.scale.x=Math.sqrt(e*e+r*r),t.scale.y=Math.sqrt(i*i+n*n),// next set position
t.position.x=this.tx+(o.x*e+o.y*i),t.position.y=this.ty+(o.x*r+o.y*n),t},/**
     * Inverts this matrix
     * @returns This matrix. Good for chaining method calls.
     */t.prototype.invert=function(){var t=this.a,e=this.b,r=this.c,i=this.d,n=this.tx,o=t*i-e*r;return this.a=i/o,this.b=-e/o,this.c=-r/o,this.d=t/o,this.tx=(r*this.ty-i*n)/o,this.ty=-(t*this.ty-e*n)/o,this},/**
     * Resets this Matrix to an identity (default) matrix.
     * @returns This matrix. Good for chaining method calls.
     */t.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},/**
     * Creates a new Matrix object with the same values as this one.
     * @returns A copy of this matrix. Good for chaining method calls.
     */t.prototype.clone=function(){var e=new t;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},/**
     * Changes the values of the given matrix to be the same as the ones in this matrix
     * @param matrix - The matrix to copy to.
     * @returns The matrix given in parameter with its values updated.
     */t.prototype.copyTo=function(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t},/**
     * Changes the values of the matrix to be the same as the ones in given matrix
     * @param {PIXI.Matrix} matrix - The matrix to copy from.
     * @returns {PIXI.Matrix} this
     */t.prototype.copyFrom=function(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this},t.prototype.toString=function(){return"[@pixi/math:Matrix a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+"]"},Object.defineProperty(t,"IDENTITY",{/**
         * A default (identity) matrix
         * @readonly
         */get:function(){return new t},enumerable:!1,configurable:!0}),Object.defineProperty(t,"TEMP_MATRIX",{/**
         * A temp matrix
         * @readonly
         */get:function(){return new t},enumerable:!1,configurable:!0}),t)}(),nM=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],nD=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],nC=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],nF=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],nN=[],nL=[],nB=Math.sign;!/*
 * Initializes `rotationCayley` and `rotationMatrices`. It is called
 * only once below.
 */function(){for(var t=0;t<16;t++){var e=[];nN.push(e);for(var r=0;r<16;r++)/* Finds rotation matrix matching the product and pushes it. */for(var i=nB(nM[t]*nM[r]+nC[t]*nD[r]),n=nB(nD[t]*nM[r]+nF[t]*nD[r]),o=nB(nM[t]*nC[r]+nC[t]*nF[r]),s=nB(nD[t]*nC[r]+nF[t]*nF[r]),a=0;a<16;a++)if(nM[a]===i&&nD[a]===n&&nC[a]===o&&nF[a]===s){e.push(a);break}}for(var t=0;t<16;t++){var h=new nw;h.set(nM[t],nD[t],nC[t],nF[t],0,0),nL.push(h)}}();/**
 * @memberof PIXI
 * @typedef {number} GD8Symmetry
 * @see PIXI.groupD8
 *//**
 * Implements the dihedral group D8, which is similar to
 * [group D4]{@link http://mathworld.wolfram.com/DihedralGroupD4.html};
 * D8 is the same but with diagonals, and it is used for texture
 * rotations.
 *
 * The directions the U- and V- axes after rotation
 * of an angle of `a: GD8Constant` are the vectors `(uX(a), uY(a))`
 * and `(vX(a), vY(a))`. These aren't necessarily unit vectors.
 *
 * **Origin:**<br>
 *  This is the small part of gameofbombs.com portal system. It works.
 * @see PIXI.groupD8.E
 * @see PIXI.groupD8.SE
 * @see PIXI.groupD8.S
 * @see PIXI.groupD8.SW
 * @see PIXI.groupD8.W
 * @see PIXI.groupD8.NW
 * @see PIXI.groupD8.N
 * @see PIXI.groupD8.NE
 * @author Ivan @ivanpopelyshev
 * @namespace PIXI.groupD8
 * @memberof PIXI
 */var nG={/**
     * | Rotation | Direction |
     * |----------|-----------|
     * | 0°       | East      |
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */E:0,/**
     * | Rotation | Direction |
     * |----------|-----------|
     * | 45°↻     | Southeast |
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */SE:1,/**
     * | Rotation | Direction |
     * |----------|-----------|
     * | 90°↻     | South     |
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */S:2,/**
     * | Rotation | Direction |
     * |----------|-----------|
     * | 135°↻    | Southwest |
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */SW:3,/**
     * | Rotation | Direction |
     * |----------|-----------|
     * | 180°     | West      |
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */W:4,/**
     * | Rotation    | Direction    |
     * |-------------|--------------|
     * | -135°/225°↻ | Northwest    |
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */NW:5,/**
     * | Rotation    | Direction    |
     * |-------------|--------------|
     * | -90°/270°↻  | North        |
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */N:6,/**
     * | Rotation    | Direction    |
     * |-------------|--------------|
     * | -45°/315°↻  | Northeast    |
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */NE:7,/**
     * Reflection about Y-axis.
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */MIRROR_VERTICAL:8,/**
     * Reflection about the main diagonal.
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */MAIN_DIAGONAL:10,/**
     * Reflection about X-axis.
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */MIRROR_HORIZONTAL:12,/**
     * Reflection about reverse diagonal.
     * @memberof PIXI.groupD8
     * @constant {PIXI.GD8Symmetry}
     */REVERSE_DIAGONAL:14,/**
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
     * @returns {PIXI.GD8Symmetry} The X-component of the U-axis
     *    after rotating the axes.
     */uX:function(t){return nM[t]},/**
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
     * @returns {PIXI.GD8Symmetry} The Y-component of the U-axis
     *    after rotating the axes.
     */uY:function(t){return nD[t]},/**
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
     * @returns {PIXI.GD8Symmetry} The X-component of the V-axis
     *    after rotating the axes.
     */vX:function(t){return nC[t]},/**
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
     * @returns {PIXI.GD8Symmetry} The Y-component of the V-axis
     *    after rotating the axes.
     */vY:function(t){return nF[t]},/**
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} rotation - symmetry whose opposite
     *   is needed. Only rotations have opposite symmetries while
     *   reflections don't.
     * @returns {PIXI.GD8Symmetry} The opposite symmetry of `rotation`
     */inv:function(t){return 8&t?15&t:7&-t// or rotation % 16
},/**
     * Composes the two D8 operations.
     *
     * Taking `^` as reflection:
     *
     * |       | E=0 | S=2 | W=4 | N=6 | E^=8 | S^=10 | W^=12 | N^=14 |
     * |-------|-----|-----|-----|-----|------|-------|-------|-------|
     * | E=0   | E   | S   | W   | N   | E^   | S^    | W^    | N^    |
     * | S=2   | S   | W   | N   | E   | S^   | W^    | N^    | E^    |
     * | W=4   | W   | N   | E   | S   | W^   | N^    | E^    | S^    |
     * | N=6   | N   | E   | S   | W   | N^   | E^    | S^    | W^    |
     * | E^=8  | E^  | N^  | W^  | S^  | E    | N     | W     | S     |
     * | S^=10 | S^  | E^  | N^  | W^  | S    | E     | N     | W     |
     * | W^=12 | W^  | S^  | E^  | N^  | W    | S     | E     | N     |
     * | N^=14 | N^  | W^  | S^  | E^  | N    | W     | S     | E     |
     *
     * [This is a Cayley table]{@link https://en.wikipedia.org/wiki/Cayley_table}
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} rotationSecond - Second operation, which
     *   is the row in the above cayley table.
     * @param {PIXI.GD8Symmetry} rotationFirst - First operation, which
     *   is the column in the above cayley table.
     * @returns {PIXI.GD8Symmetry} Composed operation
     */add:function(t,e){return nN[t][e]},/**
     * Reverse of `add`.
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} rotationSecond - Second operation
     * @param {PIXI.GD8Symmetry} rotationFirst - First operation
     * @returns {PIXI.GD8Symmetry} Result
     */sub:function(t,e){return nN[t][nG.inv(e)]},/**
     * Adds 180 degrees to rotation, which is a commutative
     * operation.
     * @memberof PIXI.groupD8
     * @param {number} rotation - The number to rotate.
     * @returns {number} Rotated number
     */rotate180:function(t){return 4^t},/**
     * Checks if the rotation angle is vertical, i.e. south
     * or north. It doesn't work for reflections.
     * @memberof PIXI.groupD8
     * @param {PIXI.GD8Symmetry} rotation - The number to check.
     * @returns {boolean} Whether or not the direction is vertical
     */isVertical:function(t){return(3&t)==2},/**
     * Approximates the vector `V(dx,dy)` into one of the
     * eight directions provided by `groupD8`.
     * @memberof PIXI.groupD8
     * @param {number} dx - X-component of the vector
     * @param {number} dy - Y-component of the vector
     * @returns {PIXI.GD8Symmetry} Approximation of the vector into
     *  one of the eight symmetries.
     */byDirection:function(t,e){return 2*Math.abs(t)<=Math.abs(e)?e>=0?nG.S:nG.N:2*Math.abs(e)<=Math.abs(t)?t>0?nG.E:nG.W:e>0?t>0?nG.SE:nG.SW:t>0?nG.NE:nG.NW},/**
     * Helps sprite to compensate texture packer rotation.
     * @memberof PIXI.groupD8
     * @param {PIXI.Matrix} matrix - sprite world matrix
     * @param {PIXI.GD8Symmetry} rotation - The rotation factor to use.
     * @param {number} tx - sprite anchoring
     * @param {number} ty - sprite anchoring
     */matrixAppendRotationInv:function(t,e,r,i){void 0===r&&(r=0),void 0===i&&(i=0);// Packer used "rotation", we use "inv(rotation)"
var n=nL[nG.inv(e)];n.tx=r,n.ty=i,t.append(n)}},nU=/** @class */function(){function t(){this.worldTransform=new nw,this.localTransform=new nw,this.position=new nP(this.onChange,this,0,0),this.scale=new nP(this.onChange,this,1,1),this.pivot=new nP(this.onChange,this,0,0),this.skew=new nP(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}return(/** Called when a value changes. */t.prototype.onChange=function(){this._localID++},/** Called when the skew or the rotation changes. */t.prototype.updateSkew=function(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++},t.prototype.toString=function(){return"[@pixi/math:Transform position=("+this.position.x+", "+this.position.y+") rotation="+this.rotation+" "+("scale=("+this.scale.x)+", "+this.scale.y+") "+("skew=("+this.skew.x)+", "+this.skew.y+") ]"},/** Updates the local transformation matrix. */t.prototype.updateLocalTransform=function(){var t=this.localTransform;this._localID!==this._currentLocalID&&(// get the matrix values of the displayobject based on its transform properties..
t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,// force an update..
this._parentID=-1)},/**
     * Updates the local and the world transformation matrices.
     * @param parentTransform - The parent transform
     */t.prototype.updateTransform=function(t){var e=this.localTransform;if(this._localID!==this._currentLocalID&&(// get the matrix values of the displayobject based on its transform properties..
e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this._currentLocalID=this._localID,// force an update..
this._parentID=-1),this._parentID!==t._worldID){// concat the parent matrix with the objects transform.
var r=t.worldTransform,i=this.worldTransform;i.a=e.a*r.a+e.b*r.c,i.b=e.a*r.b+e.b*r.d,i.c=e.c*r.a+e.d*r.c,i.d=e.c*r.b+e.d*r.d,i.tx=e.tx*r.a+e.ty*r.c+r.tx,i.ty=e.tx*r.b+e.ty*r.d+r.ty,this._parentID=t._worldID,// update the id of the transform..
this._worldID++}},/**
     * Decomposes a matrix and sets the transforms properties based on it.
     * @param matrix - The matrix to decompose
     */t.prototype.setFromMatrix=function(t){t.decompose(this),this._localID++},Object.defineProperty(t.prototype,"rotation",{/** The rotation of the object in radians. */get:function(){return this._rotation},set:function(t){this._rotation!==t&&(this._rotation=t,this.updateSkew())},enumerable:!1,configurable:!0}),/** A default (identity) transform. */t.IDENTITY=new t,t)}();eh.SORTABLE_CHILDREN=!1;/**
 * 'Builder' pattern for bounds rectangles.
 *
 * This could be called an Axis-Aligned Bounding Box.
 * It is not an actual shape. It is a mutable thing; no 'EMPTY' or those kind of problems.
 * @memberof PIXI
 */var nk=/** @class */function(){function t(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}return(/**
     * Checks if bounds are empty.
     * @returns - True if empty.
     */t.prototype.isEmpty=function(){return this.minX>this.maxX||this.minY>this.maxY},/** Clears the bounds and resets. */t.prototype.clear=function(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0},/**
     * Can return Rectangle.EMPTY constant, either construct new rectangle, either use your rectangle
     * It is not guaranteed that it will return tempRect
     * @param rect - Temporary object will be used if AABB is not empty
     * @returns - A rectangle of the bounds
     */t.prototype.getRectangle=function(t){return this.minX>this.maxX||this.minY>this.maxY?nA.EMPTY:((t=t||new nA(0,0,1,1)).x=this.minX,t.y=this.minY,t.width=this.maxX-this.minX,t.height=this.maxY-this.minY,t)},/**
     * This function should be inlined when its possible.
     * @param point - The point to add.
     */t.prototype.addPoint=function(t){this.minX=Math.min(this.minX,t.x),this.maxX=Math.max(this.maxX,t.x),this.minY=Math.min(this.minY,t.y),this.maxY=Math.max(this.maxY,t.y)},/**
     * Adds a point, after transformed. This should be inlined when its possible.
     * @param matrix
     * @param point
     */t.prototype.addPointMatrix=function(t,e){var r=t.a,i=t.b,n=t.c,o=t.d,s=t.tx,a=t.ty,h=r*e.x+n*e.y+s,u=i*e.x+o*e.y+a;this.minX=Math.min(this.minX,h),this.maxX=Math.max(this.maxX,h),this.minY=Math.min(this.minY,u),this.maxY=Math.max(this.maxY,u)},/**
     * Adds a quad, not transformed
     * @param vertices - The verts to add.
     */t.prototype.addQuad=function(t){var e=this.minX,r=this.minY,i=this.maxX,n=this.maxY,o=t[0],s=t[1];e=o<e?o:e,r=s<r?s:r,i=o>i?o:i,n=s>n?s:n,o=t[2],s=t[3],e=o<e?o:e,r=s<r?s:r,i=o>i?o:i,n=s>n?s:n,o=t[4],s=t[5],e=o<e?o:e,r=s<r?s:r,i=o>i?o:i,n=s>n?s:n,o=t[6],s=t[7],e=o<e?o:e,r=s<r?s:r,i=o>i?o:i,n=s>n?s:n,this.minX=e,this.minY=r,this.maxX=i,this.maxY=n},/**
     * Adds sprite frame, transformed.
     * @param transform - transform to apply
     * @param x0 - left X of frame
     * @param y0 - top Y of frame
     * @param x1 - right X of frame
     * @param y1 - bottom Y of frame
     */t.prototype.addFrame=function(t,e,r,i,n){this.addFrameMatrix(t.worldTransform,e,r,i,n)},/**
     * Adds sprite frame, multiplied by matrix
     * @param matrix - matrix to apply
     * @param x0 - left X of frame
     * @param y0 - top Y of frame
     * @param x1 - right X of frame
     * @param y1 - bottom Y of frame
     */t.prototype.addFrameMatrix=function(t,e,r,i,n){var o=t.a,s=t.b,a=t.c,h=t.d,u=t.tx,l=t.ty,c=this.minX,f=this.minY,p=this.maxX,d=this.maxY,_=o*e+a*r+u,y=s*e+h*r+l;c=_<c?_:c,f=y<f?y:f,p=_>p?_:p,d=y>d?y:d,_=o*i+a*r+u,y=s*i+h*r+l,c=_<c?_:c,f=y<f?y:f,p=_>p?_:p,d=y>d?y:d,_=o*e+a*n+u,y=s*e+h*n+l,c=_<c?_:c,f=y<f?y:f,p=_>p?_:p,d=y>d?y:d,_=o*i+a*n+u,y=s*i+h*n+l,c=_<c?_:c,f=y<f?y:f,p=_>p?_:p,d=y>d?y:d,this.minX=c,this.minY=f,this.maxX=p,this.maxY=d},/**
     * Adds screen vertices from array
     * @param vertexData - calculated vertices
     * @param beginOffset - begin offset
     * @param endOffset - end offset, excluded
     */t.prototype.addVertexData=function(t,e,r){for(var i=this.minX,n=this.minY,o=this.maxX,s=this.maxY,a=e;a<r;a+=2){var h=t[a],u=t[a+1];i=h<i?h:i,n=u<n?u:n,o=h>o?h:o,s=u>s?u:s}this.minX=i,this.minY=n,this.maxX=o,this.maxY=s},/**
     * Add an array of mesh vertices
     * @param transform - mesh transform
     * @param vertices - mesh coordinates in array
     * @param beginOffset - begin offset
     * @param endOffset - end offset, excluded
     */t.prototype.addVertices=function(t,e,r,i){this.addVerticesMatrix(t.worldTransform,e,r,i)},/**
     * Add an array of mesh vertices.
     * @param matrix - mesh matrix
     * @param vertices - mesh coordinates in array
     * @param beginOffset - begin offset
     * @param endOffset - end offset, excluded
     * @param padX - x padding
     * @param padY - y padding
     */t.prototype.addVerticesMatrix=function(t,e,r,i,n,o){void 0===n&&(n=0),void 0===o&&(o=n);for(var s=t.a,a=t.b,h=t.c,u=t.d,l=t.tx,c=t.ty,f=this.minX,p=this.minY,d=this.maxX,_=this.maxY,y=r;y<i;y+=2){var v=e[y],m=e[y+1],g=s*v+h*m+l,b=u*m+a*v+c;f=Math.min(f,g-n),d=Math.max(d,g+n),p=Math.min(p,b-o),_=Math.max(_,b+o)}this.minX=f,this.minY=p,this.maxX=d,this.maxY=_},/**
     * Adds other {@link Bounds}.
     * @param bounds - The Bounds to be added
     */t.prototype.addBounds=function(t){var e=this.minX,r=this.minY,i=this.maxX,n=this.maxY;this.minX=t.minX<e?t.minX:e,this.minY=t.minY<r?t.minY:r,this.maxX=t.maxX>i?t.maxX:i,this.maxY=t.maxY>n?t.maxY:n},/**
     * Adds other Bounds, masked with Bounds.
     * @param bounds - The Bounds to be added.
     * @param mask - TODO
     */t.prototype.addBoundsMask=function(t,e){var r=t.minX>e.minX?t.minX:e.minX,i=t.minY>e.minY?t.minY:e.minY,n=t.maxX<e.maxX?t.maxX:e.maxX,o=t.maxY<e.maxY?t.maxY:e.maxY;if(r<=n&&i<=o){var s=this.minX,a=this.minY,h=this.maxX,u=this.maxY;this.minX=r<s?r:s,this.minY=i<a?i:a,this.maxX=n>h?n:h,this.maxY=o>u?o:u}},/**
     * Adds other Bounds, multiplied by matrix. Bounds shouldn't be empty.
     * @param bounds - other bounds
     * @param matrix - multiplicator
     */t.prototype.addBoundsMatrix=function(t,e){this.addFrameMatrix(e,t.minX,t.minY,t.maxX,t.maxY)},/**
     * Adds other Bounds, masked with Rectangle.
     * @param bounds - TODO
     * @param area - TODO
     */t.prototype.addBoundsArea=function(t,e){var r=t.minX>e.x?t.minX:e.x,i=t.minY>e.y?t.minY:e.y,n=t.maxX<e.x+e.width?t.maxX:e.x+e.width,o=t.maxY<e.y+e.height?t.maxY:e.y+e.height;if(r<=n&&i<=o){var s=this.minX,a=this.minY,h=this.maxX,u=this.maxY;this.minX=r<s?r:s,this.minY=i<a?i:a,this.maxX=n>h?n:h,this.maxY=o>u?o:u}},/**
     * Pads bounds object, making it grow in all directions.
     * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
     * @param paddingX - The horizontal padding amount.
     * @param paddingY - The vertical padding amount.
     */t.prototype.pad=function(t,e){void 0===t&&(t=0),void 0===e&&(e=t),this.isEmpty()||(this.minX-=t,this.maxX+=t,this.minY-=e,this.maxY+=e)},/**
     * Adds padded frame. (x0, y0) should be strictly less than (x1, y1)
     * @param x0 - left X of frame
     * @param y0 - top Y of frame
     * @param x1 - right X of frame
     * @param y1 - bottom Y of frame
     * @param padX - padding X
     * @param padY - padding Y
     */t.prototype.addFramePad=function(t,e,r,i,n,o){t-=n,e-=o,r+=n,i+=o,this.minX=this.minX<t?this.minX:t,this.maxX=this.maxX>r?this.maxX:r,this.minY=this.minY<e?this.minY:e,this.maxY=this.maxY>i?this.maxY:i},t)}(),nX=function(t,e){return(nX=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function nj(t,e){function r(){this.constructor=t}nX(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}/**
 * The base class for all objects that are rendered on the screen.
 *
 * This is an abstract class and can not be used on its own; rather it should be extended.
 *
 * ## Display objects implemented in PixiJS
 *
 * | Display Object                  | Description                                                           |
 * | ------------------------------- | --------------------------------------------------------------------- |
 * | {@link PIXI.Container}          | Adds support for `children` to DisplayObject                          |
 * | {@link PIXI.Graphics}           | Shape-drawing display object similar to the Canvas API                |
 * | {@link PIXI.Sprite}             | Draws textures (i.e. images)                                          |
 * | {@link PIXI.Text}               | Draws text using the Canvas API internally                            |
 * | {@link PIXI.BitmapText}         | More scaleable solution for text rendering, reusing glyph textures    |
 * | {@link PIXI.TilingSprite}       | Draws textures/images in a tiled fashion                              |
 * | {@link PIXI.AnimatedSprite}     | Draws an animation of multiple images                                 |
 * | {@link PIXI.Mesh}               | Provides a lower-level API for drawing meshes with custom data        |
 * | {@link PIXI.NineSlicePlane}     | Mesh-related                                                          |
 * | {@link PIXI.SimpleMesh}         | v4-compatible mesh                                                    |
 * | {@link PIXI.SimplePlane}        | Mesh-related                                                          |
 * | {@link PIXI.SimpleRope}         | Mesh-related                                                          |
 *
 * ## Transforms
 *
 * The [transform]{@link DisplayObject#transform} of a display object describes the projection from its
 * local coordinate space to its parent's local coordinate space. The following properties are derived
 * from the transform:
 *
 * <table>
 *   <thead>
 *     <tr>
 *       <th>Property</th>
 *       <th>Description</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td>[pivot]{@link PIXI.DisplayObject#pivot}</td>
 *       <td>
 *         Invariant under rotation, scaling, and skewing. The projection of into the parent's space of the pivot
 *         is equal to position, regardless of the other three transformations. In other words, It is the center of
 *         rotation, scaling, and skewing.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td>[position]{@link PIXI.DisplayObject#position}</td>
 *       <td>
 *         Translation. This is the position of the [pivot]{@link PIXI.DisplayObject#pivot} in the parent's local
 *         space. The default value of the pivot is the origin (0,0). If the top-left corner of your display object
 *         is (0,0) in its local space, then the position will be its top-left corner in the parent's local space.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td>[scale]{@link PIXI.DisplayObject#scale}</td>
 *       <td>
 *         Scaling. This will stretch (or compress) the display object's projection. The scale factors are along the
 *         local coordinate axes. In other words, the display object is scaled before rotated or skewed. The center
 *         of scaling is the [pivot]{@link PIXI.DisplayObject#pivot}.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td>[rotation]{@link PIXI.DisplayObject#rotation}</td>
 *       <td>
 *          Rotation. This will rotate the display object's projection by this angle (in radians).
 *       </td>
 *     </tr>
 *     <tr>
 *       <td>[skew]{@link PIXI.DisplayObject#skew}</td>
 *       <td>
 *         <p>Skewing. This can be used to deform a rectangular display object into a parallelogram.</p>
 *         <p>
 *         In PixiJS, skew has a slightly different behaviour than the conventional meaning. It can be
 *         thought of the net rotation applied to the coordinate axes (separately). For example, if "skew.x" is
 *         ⍺ and "skew.y" is β, then the line x = 0 will be rotated by ⍺ (y = -x*cot⍺) and the line y = 0 will be
 *         rotated by β (y = x*tanβ). A line y = x*tanϴ (i.e. a line at angle ϴ to the x-axis in local-space) will
 *         be rotated by an angle between ⍺ and β.
 *         </p>
 *         <p>
 *         It can be observed that if skew is applied equally to both axes, then it will be equivalent to applying
 *         a rotation. Indeed, if "skew.x" = -ϴ and "skew.y" = ϴ, it will produce an equivalent of "rotation" = ϴ.
 *         </p>
 *         <p>
 *         Another quite interesting observation is that "skew.x", "skew.y", rotation are communtative operations. Indeed,
 *         because rotation is essentially a careful combination of the two.
 *         </p>
 *       </td>
 *     </tr>
 *     <tr>
 *       <td>angle</td>
 *       <td>Rotation. This is an alias for [rotation]{@link PIXI.DisplayObject#rotation}, but in degrees.</td>
 *     </tr>
 *     <tr>
 *       <td>x</td>
 *       <td>Translation. This is an alias for position.x!</td>
 *     </tr>
 *     <tr>
 *       <td>y</td>
 *       <td>Translation. This is an alias for position.y!</td>
 *     </tr>
 *     <tr>
 *       <td>width</td>
 *       <td>
 *         Implemented in [Container]{@link PIXI.Container}. Scaling. The width property calculates scale.x by dividing
 *         the "requested" width by the local bounding box width. It is indirectly an abstraction over scale.x, and there
 *         is no concept of user-defined width.
 *       </td>
 *     </tr>
 *     <tr>
 *       <td>height</td>
 *       <td>
 *         Implemented in [Container]{@link PIXI.Container}. Scaling. The height property calculates scale.y by dividing
 *         the "requested" height by the local bounding box height. It is indirectly an abstraction over scale.y, and there
 *         is no concept of user-defined height.
 *       </td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * ## Bounds
 *
 * The bounds of a display object is defined by the minimum axis-aligned rectangle in world space that can fit
 * around it. The abstract `calculateBounds` method is responsible for providing it (and it should use the
 * `worldTransform` to calculate in world space).
 *
 * There are a few additional types of bounding boxes:
 *
 * | Bounds                | Description                                                                              |
 * | --------------------- | ---------------------------------------------------------------------------------------- |
 * | World Bounds          | This is synonymous is the regular bounds described above. See `getBounds()`.             |
 * | Local Bounds          | This the axis-aligned bounding box in the parent's local space. See `getLocalBounds()`.  |
 * | Render Bounds         | The bounds, but including extra rendering effects like filter padding.                   |
 * | Projected Bounds      | The bounds of the projected display object onto the screen. Usually equals world bounds. |
 * | Relative Bounds       | The bounds of a display object when projected onto a ancestor's (or parent's) space.     |
 * | Natural Bounds        | The bounds of an object in its own local space (not parent's space, like in local bounds)|
 * | Content Bounds        | The natural bounds when excluding all children of a `Container`.                         |
 *
 * ### calculateBounds
 *
 * [Container]{@link Container} already implements `calculateBounds` in a manner that includes children.
 *
 * But for a non-Container display object, the `calculateBounds` method must be overridden in order for `getBounds` and
 * `getLocalBounds` to work. This method must write the bounds into `this._bounds`.
 *
 * Generally, the following technique works for most simple cases: take the list of points
 * forming the "hull" of the object (i.e. outline of the object's shape), and then add them
 * using {@link PIXI.Bounds#addPointMatrix}.
 *
 * ```js
 * calculateBounds(): void
 * {
 *     const points = [...];
 *
 *     for (let i = 0, j = points.length; i < j; i++)
 *     {
 *         this._bounds.addPointMatrix(this.worldTransform, points[i]);
 *     }
 * }
 * ```
 *
 * You can optimize this for a large number of points by using {@link PIXI.Bounds#addVerticesMatrix} to pass them
 * in one array together.
 *
 * ## Alpha
 *
 * This alpha sets a display object's **relative opacity** w.r.t its parent. For example, if the alpha of a display
 * object is 0.5 and its parent's alpha is 0.5, then it will be rendered with 25% opacity (assuming alpha is not
 * applied on any ancestor further up the chain).
 *
 * The alpha with which the display object will be rendered is called the [worldAlpha]{@link PIXI.DisplayObject#worldAlpha}.
 *
 * ## Renderable vs Visible
 *
 * The `renderable` and `visible` properties can be used to prevent a display object from being rendered to the
 * screen. However, there is a subtle difference between the two. When using `renderable`, the transforms  of the display
 * object (and its children subtree) will continue to be calculated. When using `visible`, the transforms will not
 * be calculated.
 *
 * It is recommended that applications use the `renderable` property for culling. See
 * [@pixi-essentials/cull]{@link https://www.npmjs.com/package/@pixi-essentials/cull} or
 * [pixi-cull]{@link https://www.npmjs.com/package/pixi-cull} for more details.
 *
 * Otherwise, to prevent an object from rendering in the general-purpose sense - `visible` is the property to use. This
 * one is also better in terms of performance.
 * @memberof PIXI
 */var nH=/** @class */function(t){function e(){var e=t.call(this)||this;return e.tempDisplayObjectParent=null,// TODO: need to create Transform from factory
e.transform=new nU,e.alpha=1,e.visible=!0,e.renderable=!0,e.cullable=!1,e.cullArea=null,e.parent=null,e.worldAlpha=1,e._lastSortedIndex=0,e._zIndex=0,e.filterArea=null,e.filters=null,e._enabledFilters=null,e._bounds=new nk,e._localBounds=null,e._boundsID=0,e._boundsRect=null,e._localBoundsRect=null,e._mask=null,e._maskRefCount=0,e._destroyed=!1,e.isSprite=!1,e.isMask=!1,e}return nj(e,t),/**
     * Mixes all enumerable properties and methods from a source object to DisplayObject.
     * @param source - The source of properties and methods to mix in.
     */e.mixin=function(t){// loop through properties
for(var r=Object.keys(t),i=0;i<r.length;++i){var n=r[i];// Set the property using the property descriptor - this works for accessors and normal value properties
Object.defineProperty(e.prototype,n,Object.getOwnPropertyDescriptor(t,n))}},Object.defineProperty(e.prototype,"destroyed",{/**
         * Fired when this DisplayObject is added to a Container.
         * @instance
         * @event added
         * @param {PIXI.Container} container - The container added to.
         *//**
         * Fired when this DisplayObject is removed from a Container.
         * @instance
         * @event removed
         * @param {PIXI.Container} container - The container removed from.
         *//**
         * Fired when this DisplayObject is destroyed. This event is emitted once
         * destroy is finished.
         * @instance
         * @event destroyed
         *//** Readonly flag for destroyed display objects. */get:function(){return this._destroyed},enumerable:!1,configurable:!0}),/** Recursively updates transform of all objects from the root to this one internal function for toLocal() */e.prototype._recursivePostUpdateTransform=function(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)},/** Updates the object transform for rendering. TODO - Optimization pass! */e.prototype.updateTransform=function(){this._boundsID++,this.transform.updateTransform(this.parent.transform),// multiply the alphas..
this.worldAlpha=this.alpha*this.parent.worldAlpha},/**
     * Calculates and returns the (world) bounds of the display object as a [Rectangle]{@link PIXI.Rectangle}.
     *
     * This method is expensive on containers with a large subtree (like the stage). This is because the bounds
     * of a container depend on its children's bounds, which recursively causes all bounds in the subtree to
     * be recalculated. The upside, however, is that calling `getBounds` once on a container will indeed update
     * the bounds of all children (the whole subtree, in fact). This side effect should be exploited by using
     * `displayObject._bounds.getRectangle()` when traversing through all the bounds in a scene graph. Otherwise,
     * calling `getBounds` on each object in a subtree will cause the total cost to increase quadratically as
     * its height increases.
     *
     * The transforms of all objects in a container's **subtree** and of all **ancestors** are updated.
     * The world bounds of all display objects in a container's **subtree** will also be recalculated.
     *
     * The `_bounds` object stores the last calculation of the bounds. You can use to entirely skip bounds
     * calculation if needed.
     *
     * ```js
     * const lastCalculatedBounds = displayObject._bounds.getRectangle(optionalRect);
     * ```
     *
     * Do know that usage of `getLocalBounds` can corrupt the `_bounds` of children (the whole subtree, actually). This
     * is a known issue that has not been solved. See [getLocalBounds]{@link PIXI.DisplayObject#getLocalBounds} for more
     * details.
     *
     * `getBounds` should be called with `skipUpdate` equal to `true` in a render() call. This is because the transforms
     * are guaranteed to be update-to-date. In fact, recalculating inside a render() call may cause corruption in certain
     * cases.
     * @param skipUpdate - Setting to `true` will stop the transforms of the scene graph from
     *  being updated. This means the calculation returned MAY be out of date BUT will give you a
     *  nice performance boost.
     * @param rect - Optional rectangle to store the result of the bounds calculation.
     * @returns - The minimum axis-aligned rectangle in world space that fits around this object.
     */e.prototype.getBounds=function(t,e){return t||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),e||(this._boundsRect||(this._boundsRect=new nA),e=this._boundsRect),this._bounds.getRectangle(e)},/**
     * Retrieves the local bounds of the displayObject as a rectangle object.
     * @param rect - Optional rectangle to store the result of the bounds calculation.
     * @returns - The rectangular bounding area.
     */e.prototype.getLocalBounds=function(t){t||(this._localBoundsRect||(this._localBoundsRect=new nA),t=this._localBoundsRect),this._localBounds||(this._localBounds=new nk);var e=this.transform,r=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform;var i=this._bounds,n=this._boundsID;this._bounds=this._localBounds;var o=this.getBounds(!1,t);return this.parent=r,this.transform=e,this._bounds=i,this._bounds.updateID+=this._boundsID-n,o},/**
     * Calculates the global position of the display object.
     * @param position - The world origin to calculate from.
     * @param point - A Point object in which to store the value, optional
     *  (otherwise will create a new Point).
     * @param skipUpdate - Should we skip the update transform.
     * @returns - A point object representing the position of this object.
     */e.prototype.toGlobal=function(t,e,r){// don't need to update the lot
return void 0===r&&(r=!1),r||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(t,e)},/**
     * Calculates the local position of the display object relative to another point.
     * @param position - The world origin to calculate from.
     * @param from - The DisplayObject to calculate the global position from.
     * @param point - A Point object in which to store the value, optional
     *  (otherwise will create a new Point).
     * @param skipUpdate - Should we skip the update transform
     * @returns - A point object representing the position of this object
     */e.prototype.toLocal=function(t,e,r,i){// simply apply the matrix..
return e&&(t=e.toGlobal(t,r,i)),i||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(t,r)},/**
     * Set the parent Container of this DisplayObject.
     * @param container - The Container to add this DisplayObject to.
     * @returns - The Container that this DisplayObject was added to.
     */e.prototype.setParent=function(t){if(!t||!t.addChild)throw Error("setParent: Argument must be a Container");return t.addChild(this),t},/**
     * Convenience function to set the position, scale, skew and pivot at once.
     * @param x - The X position
     * @param y - The Y position
     * @param scaleX - The X scale value
     * @param scaleY - The Y scale value
     * @param rotation - The rotation
     * @param skewX - The X skew value
     * @param skewY - The Y skew value
     * @param pivotX - The X pivot value
     * @param pivotY - The Y pivot value
     * @returns - The DisplayObject instance
     */e.prototype.setTransform=function(t,e,r,i,n,o,s,a,h){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=1),void 0===i&&(i=1),void 0===n&&(n=0),void 0===o&&(o=0),void 0===s&&(s=0),void 0===a&&(a=0),void 0===h&&(h=0),this.position.x=t,this.position.y=e,this.scale.x=r||1,this.scale.y=i||1,this.rotation=n,this.skew.x=o,this.skew.y=s,this.pivot.x=a,this.pivot.y=h,this},/**
     * Base destroy method for generic display objects. This will automatically
     * remove the display object from its parent Container as well as remove
     * all current event listeners and internal references. Do not use a DisplayObject
     * after calling `destroy()`.
     * @param _options
     */e.prototype.destroy=function(t){this.parent&&this.parent.removeChild(this),this._destroyed=!0,this.transform=null,this.parent=null,this._bounds=null,this.mask=null,this.cullArea=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.interactive=!1,this.interactiveChildren=!1,this.emit("destroyed"),this.removeAllListeners()},Object.defineProperty(e.prototype,"_tempDisplayObjectParent",{/**
         * @protected
         * @member {PIXI.Container}
         */get:function(){return null===this.tempDisplayObjectParent&&(this.tempDisplayObjectParent=new nY),this.tempDisplayObjectParent},enumerable:!1,configurable:!0}),/**
     * Used in Renderer, cacheAsBitmap and other places where you call an `updateTransform` on root
     *
     * ```
     * const cacheParent = elem.enableTempParent();
     * elem.updateTransform();
     * elem.disableTempParent(cacheParent);
     * ```
     * @returns - current parent
     */e.prototype.enableTempParent=function(){var t=this.parent;return this.parent=this._tempDisplayObjectParent,t},/**
     * Pair method for `enableTempParent`
     * @param cacheParent - Actual parent of element
     */e.prototype.disableTempParent=function(t){this.parent=t},Object.defineProperty(e.prototype,"x",{/**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         */get:function(){return this.position.x},set:function(t){this.transform.position.x=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{/**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         */get:function(){return this.position.y},set:function(t){this.transform.position.y=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldTransform",{/**
         * Current transform of the object based on world (parent) factors.
         * @readonly
         */get:function(){return this.transform.worldTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"localTransform",{/**
         * Current transform of the object based on local factors: position, scale, other stuff.
         * @readonly
         */get:function(){return this.transform.localTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"position",{/**
         * The coordinate of the object relative to the local coordinates of the parent.
         * @since 4.0.0
         */get:function(){return this.transform.position},set:function(t){this.transform.position.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scale",{/**
         * The scale factors of this object along the local coordinate axes.
         *
         * The default scale is (1, 1).
         * @since 4.0.0
         */get:function(){return this.transform.scale},set:function(t){this.transform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pivot",{/**
         * The center of rotation, scaling, and skewing for this display object in its local space. The `position`
         * is the projection of `pivot` in the parent's local space.
         *
         * By default, the pivot is the origin (0, 0).
         * @since 4.0.0
         */get:function(){return this.transform.pivot},set:function(t){this.transform.pivot.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"skew",{/**
         * The skew factor for the object in radians.
         * @since 4.0.0
         */get:function(){return this.transform.skew},set:function(t){this.transform.skew.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{/**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         */get:function(){return this.transform.rotation},set:function(t){this.transform.rotation=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{/**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         */get:function(){return this.transform.rotation*nb},set:function(t){this.transform.rotation=t*nx},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"zIndex",{/**
         * The zIndex of the displayObject.
         *
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other display objects within the same container.
         * @see PIXI.Container#sortableChildren
         */get:function(){return this._zIndex},set:function(t){this._zIndex=t,this.parent&&(this.parent.sortDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldVisible",{/**
         * Indicates if the object is globally visible.
         * @readonly
         */get:function(){var t=this;do{if(!t.visible)return!1;t=t.parent}while(t)return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mask",{/**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. Furthermore, a mask of an object must be in the subtree of its parent.
         * Otherwise, `getLocalBounds` may calculate incorrect bounds, which makes the container's width and height wrong.
         * To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new PIXI.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new PIXI.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         */get:function(){return this._mask},set:function(t){if(this._mask!==t){if(this._mask){var e=this._mask.isMaskData?this._mask.maskObject:this._mask;e&&(e._maskRefCount--,0===e._maskRefCount&&(e.renderable=!0,e.isMask=!1))}if(this._mask=t,this._mask){var e=this._mask.isMaskData?this._mask.maskObject:this._mask;e&&(0===e._maskRefCount&&(e.renderable=!1,e.isMask=!0),e._maskRefCount++)}}},enumerable:!1,configurable:!0}),e}(/*@__PURE__*/tM(eu)),nY=/** @class */function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sortDirty=null,e}return nj(e,t),e}(nH);function nz(t,e){return t.zIndex===e.zIndex?t._lastSortedIndex-e._lastSortedIndex:t.zIndex-e.zIndex}/**
 * DisplayObject default updateTransform, does not update children of container.
 * Will crash if there's no parent element.
 * @memberof PIXI.DisplayObject#
 * @method displayObjectUpdateTransform
 */nH.prototype.displayObjectUpdateTransform=nH.prototype.updateTransform;/**
 * Container is a general-purpose display object that holds children. It also adds built-in support for advanced
 * rendering features like masking and filtering.
 *
 * It is the base class of all display objects that act as a container for other objects, including Graphics
 * and Sprite.
 *
 * ```js
 * import { BlurFilter } from '@pixi/filter-blur';
 * import { Container } from '@pixi/display';
 * import { Graphics } from '@pixi/graphics';
 * import { Sprite } from '@pixi/sprite';
 *
 * let container = new Container();
 * let sprite = Sprite.from("https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png");
 *
 * sprite.width = 512;
 * sprite.height = 512;
 *
 * // Adds a sprite as a child to this container. As a result, the sprite will be rendered whenever the container
 * // is rendered.
 * container.addChild(sprite);
 *
 * // Blurs whatever is rendered by the container
 * container.filters = [new BlurFilter()];
 *
 * // Only the contents within a circle at the center should be rendered onto the screen.
 * container.mask = new Graphics()
 *  .beginFill(0xffffff)
 *  .drawCircle(sprite.width / 2, sprite.height / 2, Math.min(sprite.width, sprite.height) / 2)
 *  .endFill();
 * ```
 * @memberof PIXI
 */var nV=/** @class */function(t){function e(){var e=t.call(this)||this;return e.children=[],e.sortableChildren=eh.SORTABLE_CHILDREN,e.sortDirty=!1,e;/**
         * Fired when a DisplayObject is added to this Container.
         * @event PIXI.Container#childAdded
         * @param {PIXI.DisplayObject} child - The child added to the Container.
         * @param {PIXI.Container} container - The container that added the child.
         * @param {number} index - The children's index of the added child.
         *//**
         * Fired when a DisplayObject is removed from this Container.
         * @event PIXI.DisplayObject#childRemoved
         * @param {PIXI.DisplayObject} child - The child removed from the Container.
         * @param {PIXI.Container} container - The container that removed the child.
         * @param {number} index - The former children's index of the removed child
         */}return nj(e,t),/**
     * Overridable method that can be used by Container subclasses whenever the children array is modified.
     * @param _length
     */e.prototype.onChildrenChange=function(t){/* empty */},/**
     * Adds one or more children to the container.
     *
     * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
     * @param {...PIXI.DisplayObject} children - The DisplayObject(s) to add to the container
     * @returns {PIXI.DisplayObject} - The first child that was added.
     */e.prototype.addChild=function(){for(var t=arguments,e=[],r=0;r<arguments.length;r++)e[r]=t[r];// if there is only one argument we can bypass looping through the them
if(e.length>1)for(var i=0;i<e.length;i++)this.addChild(e[i]);else{var n=e[0];n.parent&&n.parent.removeChild(n),n.parent=this,this.sortDirty=!0,// ensure child transform will be recalculated
n.transform._parentID=-1,this.children.push(n),// ensure bounds will be recalculated
this._boundsID++,// TODO - lets either do all callbacks or all events.. not both!
this.onChildrenChange(this.children.length-1),this.emit("childAdded",n,this,this.children.length-1),n.emit("added",this)}return e[0]},/**
     * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
     * @param {PIXI.DisplayObject} child - The child to add
     * @param {number} index - The index to place the child in
     * @returns {PIXI.DisplayObject} The child that was added.
     */e.prototype.addChildAt=function(t,e){if(e<0||e>this.children.length)throw Error(t+"addChildAt: The index "+e+" supplied is out of bounds "+this.children.length);return t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,// ensure child transform will be recalculated
t.transform._parentID=-1,this.children.splice(e,0,t),// ensure bounds will be recalculated
this._boundsID++,// TODO - lets either do all callbacks or all events.. not both!
this.onChildrenChange(e),t.emit("added",this),this.emit("childAdded",t,this,e),t},/**
     * Swaps the position of 2 Display Objects within this container.
     * @param child - First display object to swap
     * @param child2 - Second display object to swap
     */e.prototype.swapChildren=function(t,e){if(t!==e){var r=this.getChildIndex(t),i=this.getChildIndex(e);this.children[r]=e,this.children[i]=t,this.onChildrenChange(r<i?r:i)}},/**
     * Returns the index position of a child DisplayObject instance
     * @param child - The DisplayObject instance to identify
     * @returns - The index position of the child display object to identify
     */e.prototype.getChildIndex=function(t){var e=this.children.indexOf(t);if(-1===e)throw Error("The supplied DisplayObject must be a child of the caller");return e},/**
     * Changes the position of an existing child in the display object container
     * @param child - The child DisplayObject instance for which you want to change the index number
     * @param index - The resulting index number for the child display object
     */e.prototype.setChildIndex=function(t,e){if(e<0||e>=this.children.length)throw Error("The index "+e+" supplied is out of bounds "+this.children.length);var r=this.getChildIndex(t);nu(this.children,r,1),this.children.splice(e,0,t),this.onChildrenChange(e)},/**
     * Returns the child at the specified index
     * @param index - The index to get the child at
     * @returns - The child at the given index, if any.
     */e.prototype.getChildAt=function(t){if(t<0||t>=this.children.length)throw Error("getChildAt: Index ("+t+") does not exist.");return this.children[t]},/**
     * Removes one or more children from the container.
     * @param {...PIXI.DisplayObject} children - The DisplayObject(s) to remove
     * @returns {PIXI.DisplayObject} The first child that was removed.
     */e.prototype.removeChild=function(){for(var t=arguments,e=[],r=0;r<arguments.length;r++)e[r]=t[r];// if there is only one argument we can bypass looping through the them
if(e.length>1)for(var i=0;i<e.length;i++)this.removeChild(e[i]);else{var n=e[0],o=this.children.indexOf(n);if(-1===o)return null;n.parent=null,// ensure child transform will be recalculated
n.transform._parentID=-1,nu(this.children,o,1),// ensure bounds will be recalculated
this._boundsID++,// TODO - lets either do all callbacks or all events.. not both!
this.onChildrenChange(o),n.emit("removed",this),this.emit("childRemoved",n,this,o)}return e[0]},/**
     * Removes a child from the specified index position.
     * @param index - The index to get the child from
     * @returns The child that was removed.
     */e.prototype.removeChildAt=function(t){var e=this.getChildAt(t);return(// ensure child transform will be recalculated..
e.parent=null,e.transform._parentID=-1,nu(this.children,t,1),// ensure bounds will be recalculated
this._boundsID++,// TODO - lets either do all callbacks or all events.. not both!
this.onChildrenChange(t),e.emit("removed",this),this.emit("childRemoved",e,this,t),e)},/**
     * Removes all children from this container that are within the begin and end indexes.
     * @param beginIndex - The beginning position.
     * @param endIndex - The ending position. Default value is size of the container.
     * @returns - List of removed children
     */e.prototype.removeChildren=function(t,e){void 0===t&&(t=0),void 0===e&&(e=this.children.length);var r,i=t,n=e,o=n-i;if(o>0&&o<=n){r=this.children.splice(i,o);for(var s=0;s<r.length;++s)r[s].parent=null,r[s].transform&&(r[s].transform._parentID=-1);this._boundsID++,this.onChildrenChange(t);for(var s=0;s<r.length;++s)r[s].emit("removed",this),this.emit("childRemoved",r[s],this,s);return r}if(0===o&&0===this.children.length)return[];throw RangeError("removeChildren: numeric values are outside the acceptable range.")},/** Sorts children by zIndex. Previous order is maintained for 2 children with the same zIndex. */e.prototype.sortChildren=function(){for(var t=!1,e=0,r=this.children.length;e<r;++e){var i=this.children[e];i._lastSortedIndex=e,t||0===i.zIndex||(t=!0)}t&&this.children.length>1&&this.children.sort(nz),this.sortDirty=!1},/** Updates the transform on all children of this container for rendering. */e.prototype.updateTransform=function(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),// TODO: check render flags, how to process stuff here
this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var t=0,e=this.children.length;t<e;++t){var r=this.children[t];r.visible&&r.updateTransform()}},/**
     * Recalculates the bounds of the container.
     *
     * This implementation will automatically fit the children's bounds into the calculation. Each child's bounds
     * is limited to its mask's bounds or filterArea, if any is applied.
     */e.prototype.calculateBounds=function(){this._bounds.clear(),this._calculateBounds();for(var t=0;t<this.children.length;t++){var e=this.children[t];if(e.visible&&e.renderable){// TODO: filter+mask, need to mask both somehow
if(e.calculateBounds(),e._mask){var r=e._mask.isMaskData?e._mask.maskObject:e._mask;r?(r.calculateBounds(),this._bounds.addBoundsMask(e._bounds,r._bounds)):this._bounds.addBounds(e._bounds)}else e.filterArea?this._bounds.addBoundsArea(e._bounds,e.filterArea):this._bounds.addBounds(e._bounds)}}this._bounds.updateID=this._boundsID},/**
     * Retrieves the local bounds of the displayObject as a rectangle object.
     *
     * Calling `getLocalBounds` may invalidate the `_bounds` of the whole subtree below. If using it inside a render()
     * call, it is advised to call `getBounds()` immediately after to recalculate the world bounds of the subtree.
     * @param rect - Optional rectangle to store the result of the bounds calculation.
     * @param skipChildrenUpdate - Setting to `true` will stop re-calculation of children transforms,
     *  it was default behaviour of pixi 4.0-5.2 and caused many problems to users.
     * @returns - The rectangular bounding area.
     */e.prototype.getLocalBounds=function(e,r){void 0===r&&(r=!1);var i=t.prototype.getLocalBounds.call(this,e);if(!r)for(var n=0,o=this.children.length;n<o;++n){var s=this.children[n];s.visible&&s.updateTransform()}return i},/**
     * Recalculates the content bounds of this object. This should be overriden to
     * calculate the bounds of this specific object (not including children).
     * @protected
     */e.prototype._calculateBounds=function(){// FILL IN//
},/**
     * Renders this object and its children with culling.
     * @protected
     * @param {PIXI.Renderer} renderer - The renderer
     */e.prototype._renderWithCulling=function(t){var r,i,n=t.renderTexture.sourceFrame;// If the source frame is empty, stop rendering.
if(n.width>0&&n.height>0){// Render the container if the source frame intersects the bounds.
if(this.cullArea?(r=this.cullArea,i=this.worldTransform):this._render!==e.prototype._render&&(r=this.getBounds(!0)),r&&n.intersects(r,i))this._render(t);else if(this.cullArea)return;// Unless cullArea is set, we cannot skip the children if the bounds of the container do not intersect
// the source frame, because the children might have filters with nonzero padding, which may intersect
// with the source frame while the bounds do not: filter padding is not included in the bounds.
// If cullArea is not set, render the children with culling temporarily enabled so that they are not rendered
// if they are out of frame; otherwise, render the children normally.
for(var o=0,s=this.children.length;o<s;++o){var a=this.children[o],h=a.cullable;a.cullable=h||!this.cullArea,a.render(t),a.cullable=h}}},/**
     * Renders the object using the WebGL renderer.
     *
     * The [_render]{@link PIXI.Container#_render} method is be overriden for rendering the contents of the
     * container itself. This `render` method will invoke it, and also invoke the `render` methods of all
     * children afterward.
     *
     * If `renderable` or `visible` is false or if `worldAlpha` is not positive or if `cullable` is true and
     * the bounds of this object are out of frame, this implementation will entirely skip rendering.
     * See {@link PIXI.DisplayObject} for choosing between `renderable` or `visible`. Generally,
     * setting alpha to zero is not recommended for purely skipping rendering.
     *
     * When your scene becomes large (especially when it is larger than can be viewed in a single screen), it is
     * advised to employ **culling** to automatically skip rendering objects outside of the current screen.
     * See [cullable]{@link PIXI.DisplayObject#cullable} and [cullArea]{@link PIXI.DisplayObject#cullArea}.
     * Other culling methods might be better suited for a large number static objects; see
     * [@pixi-essentials/cull]{@link https://www.npmjs.com/package/@pixi-essentials/cull} and
     * [pixi-cull]{@link https://www.npmjs.com/package/pixi-cull}.
     *
     * The [renderAdvanced]{@link PIXI.Container#renderAdvanced} method is internally used when when masking or
     * filtering is applied on a container. This does, however, break batching and can affect performance when
     * masking and filtering is applied extensively throughout the scene graph.
     * @param renderer - The renderer
     */e.prototype.render=function(t){// if the object is not visible or the alpha is 0 then no need to render this element
if(this.visible&&!(this.worldAlpha<=0)&&this.renderable){// do a quick check to see if this element has a mask or a filter.
if(this._mask||this.filters&&this.filters.length)this.renderAdvanced(t);else if(this.cullable)this._renderWithCulling(t);else{this._render(t);for(var e=0,r=this.children.length;e<r;++e)this.children[e].render(t)}}},/**
     * Render the object using the WebGL renderer and advanced features.
     * @param renderer - The renderer
     */e.prototype.renderAdvanced=function(t){var e=this.filters,r=this._mask;// push filter first as we need to ensure the stencil buffer is correct for any masking
if(e){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var i=0;i<e.length;i++)e[i].enabled&&this._enabledFilters.push(e[i])}var n=e&&this._enabledFilters&&this._enabledFilters.length||r&&(!r.isMaskData||r.enabled&&(r.autoDetect||r.type!==tn.NONE));if(n&&t.batch.flush(),e&&this._enabledFilters&&this._enabledFilters.length&&t.filter.push(this,this._enabledFilters),r&&t.mask.push(this,this._mask),this.cullable)this._renderWithCulling(t);else{this._render(t);for(var i=0,o=this.children.length;i<o;++i)this.children[i].render(t)}n&&t.batch.flush(),r&&t.mask.pop(this),e&&this._enabledFilters&&this._enabledFilters.length&&t.filter.pop()},/**
     * To be overridden by the subclasses.
     * @param _renderer - The renderer
     */e.prototype._render=function(t){// this is where content itself gets rendered...
},/**
     * Removes all internal references and listeners as well as removes children from the display list.
     * Do not use a Container after calling `destroy`.
     * @param options - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
     *  method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the texture of the child sprite
     * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the base texture of the child sprite
     */e.prototype.destroy=function(e){t.prototype.destroy.call(this),this.sortDirty=!1;var r="boolean"==typeof e?e:e&&e.children,i=this.removeChildren(0,this.children.length);if(r)for(var n=0;n<i.length;++n)i[n].destroy(e)},Object.defineProperty(e.prototype,"width",{/** The width of the Container, setting this will actually modify the scale to achieve the value set. */get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var e=this.getLocalBounds().width;0!==e?this.scale.x=t/e:this.scale.x=1,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{/** The height of the Container, setting this will actually modify the scale to achieve the value set. */get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var e=this.getLocalBounds().height;0!==e?this.scale.y=t/e:this.scale.y=1,this._height=t},enumerable:!1,configurable:!0}),e}(nH);/**
 * Container default updateTransform, does update children of container.
 * Will crash if there's no parent element.
 * @memberof PIXI.Container#
 * @method containerUpdateTransform
 */nV.prototype.containerUpdateTransform=nV.prototype.updateTransform;/*!
 * @pixi/core - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/core is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*!
 * @pixi/extensions - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/extensions is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var nW=function(){return(nW=Object.assign||function(t){for(var e,r=arguments,i=1,n=arguments.length;i<n;i++)for(var o in e=r[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};(I=tf||(tf={})).Application="application",I.RendererPlugin="renderer-webgl-plugin",I.CanvasRendererPlugin="renderer-canvas-plugin",I.Loader="loader",I.LoadParser="load-parser",I.ResolveParser="resolve-parser",I.CacheParser="cache-parser",I.DetectionParser="detection-parser";/**
 * Convert input into extension format data.
 * @ignore
 */var nq=function(t){// Class/Object submission, use extension object
if("function"==typeof t||"object"==typeof t&&t.extension){if(!t.extension)throw Error("Extension class must have an extension object");var e="object"!=typeof t.extension?{type:t.extension}:t.extension;t=nW(nW({},e),{ref:t})}if("object"==typeof t)t=nW({},t);else throw Error("Invalid extension type");return"string"==typeof t.type&&(t.type=[t.type]),t},nK={/** @ignore */_addHandlers:null,/** @ignore */_removeHandlers:null,/** @ignore */_queue:{},/**
     * Remove extensions from PixiJS.
     * @param extensions - Extensions to be removed.
     * @returns {PIXI.extensions} For chaining.
     */remove:function(){for(var t=arguments,e=this,r=[],i=0;i<arguments.length;i++)r[i]=t[i];return r.map(nq).forEach(function(t){t.type.forEach(function(r){var i,n;return null===(n=(i=e._removeHandlers)[r])||void 0===n?void 0:n.call(i,t)})}),this},/**
     * Register new extensions with PixiJS.
     * @param extensions - The spread of extensions to add to PixiJS.
     * @returns {PIXI.extensions} For chaining.
     */add:function(){for(var t=arguments,e=this,r=[],i=0;i<arguments.length;i++)r[i]=t[i];return(// Handle any extensions either passed as class w/ data or as data
r.map(nq).forEach(function(t){t.type.forEach(function(r){var i=e._addHandlers,n=e._queue;i[r]?i[r](t):(n[r]=n[r]||[],n[r].push(t))})}),this)},/**
     * Internal method to handle extensions by name.
     * @param type - The extension type.
     * @param onAdd  - Function for handling when extensions are added/registered passes {@link PIXI.ExtensionFormat}.
     * @param onRemove  - Function for handling when extensions are removed/unregistered passes {@link PIXI.ExtensionFormat}.
     * @returns {PIXI.extensions} For chaining.
     */handle:function(t,e,r){var i=this._addHandlers=this._addHandlers||{},n=this._removeHandlers=this._removeHandlers||{};if(i[t]||n[t])throw Error("Extension type "+t+" already has a handler");i[t]=e,n[t]=r;// Process the queue
var o=this._queue;return o[t]&&(o[t].forEach(function(t){return e(t)}),delete o[t]),this},/**
     * Handle a type, but using a map by `name` property.
     * @param type - Type of extension to handle.
     * @param map - The object map of named extensions.
     * @returns {PIXI.extensions} For chaining.
     */handleByMap:function(t,e){return this.handle(t,function(t){e[t.name]=t.ref},function(t){delete e[t.name]})},/**
     * Handle a type, but using a list of extensions.
     * @param type - Type of extension to handle.
     * @param list - The list of extensions.
     * @returns {PIXI.extensions} For chaining.
     */handleByList:function(t,e){return this.handle(t,function(r){var i,n;e.includes(r.ref)||(e.push(r.ref),t===tf.Loader&&(null===(n=(i=r.ref).add)||void 0===n||n.call(i)))},function(t){var r=e.indexOf(t.ref);-1!==r&&e.splice(r,1)})}},nZ=/** @class */function(){/**
     * @param name - The function name that will be executed on the listeners added to this Runner.
     */function t(t){this.items=[],this._name=t,this._aliasCount=0}return(/* eslint-disable jsdoc/require-param, jsdoc/check-param-names *//**
     * Dispatch/Broadcast Runner to all listeners added to the queue.
     * @param {...any} params - (optional) parameters to pass to each listener
     *//*  eslint-enable jsdoc/require-param, jsdoc/check-param-names */t.prototype.emit=function(t,e,r,i,n,o,s,a){if(arguments.length>8)throw Error("max arguments reached");var h=this.name,u=this.items;this._aliasCount++;for(var l=0,c=u.length;l<c;l++)u[l][h](t,e,r,i,n,o,s,a);return u===this.items&&this._aliasCount--,this},t.prototype.ensureNonAliasedItems=function(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))},/**
     * Add a listener to the Runner
     *
     * Runners do not need to have scope or functions passed to them.
     * All that is required is to pass the listening object and ensure that it has contains a function that has the same name
     * as the name provided to the Runner when it was created.
     *
     * Eg A listener passed to this Runner will require a 'complete' function.
     *
     * ```
     * import { Runner } from '@pixi/runner';
     *
     * const complete = new Runner('complete');
     * ```
     *
     * The scope used will be the object itself.
     * @param {any} item - The object that will be listening.
     */t.prototype.add=function(t){return t[this._name]&&(this.ensureNonAliasedItems(),this.remove(t),this.items.push(t)),this},/**
     * Remove a single listener from the dispatch queue.
     * @param {any} item - The listener that you would like to remove.
     */t.prototype.remove=function(t){var e=this.items.indexOf(t);return -1!==e&&(this.ensureNonAliasedItems(),this.items.splice(e,1)),this},/**
     * Check to see if the listener is already in the Runner
     * @param {any} item - The listener that you would like to check.
     */t.prototype.contains=function(t){return -1!==this.items.indexOf(t)},/** Remove all listeners from the Runner */t.prototype.removeAll=function(){return this.ensureNonAliasedItems(),this.items.length=0,this},/** Remove all references, don't use after this. */t.prototype.destroy=function(){this.removeAll(),this.items=null,this._name=null},Object.defineProperty(t.prototype,"empty",{/**
         * `true` if there are no this Runner contains no listeners
         * @readonly
         */get:function(){return 0===this.items.length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"name",{/**
         * The name of the runner.
         * @readonly
         */get:function(){return this._name},enumerable:!1,configurable:!0}),t)}();Object.defineProperties(nZ.prototype,{/**
     * Alias for `emit`
     * @memberof PIXI.Runner#
     * @method dispatch
     * @see PIXI.Runner#emit
     */dispatch:{value:nZ.prototype.emit},/**
     * Alias for `emit`
     * @memberof PIXI.Runner#
     * @method run
     * @see PIXI.Runner#emit
     */run:{value:nZ.prototype.emit}}),eh.TARGET_FPMS=.06,(P=tp||(tp={}))[P.INTERACTION=50]="INTERACTION",P[P.HIGH=25]="HIGH",P[P.NORMAL=0]="NORMAL",P[P.LOW=-25]="LOW",P[P.UTILITY=-50]="UTILITY";/**
 * Internal class for handling the priority sorting of ticker handlers.
 * @private
 * @class
 * @memberof PIXI
 */var nJ=/** @class */function(){/**
     * Constructor
     * @private
     * @param fn - The listener function to be added for one update
     * @param context - The listener context
     * @param priority - The priority for emitting
     * @param once - If the handler should fire once
     */function t(t,e,r,i){void 0===e&&(e=null),void 0===r&&(r=0),void 0===i&&(i=!1),/** The next item in chain. */this.next=null,/** The previous item in chain. */this.previous=null,/** `true` if this listener has been destroyed already. */this._destroyed=!1,this.fn=t,this.context=e,this.priority=r,this.once=i}return(/**
     * Simple compare function to figure out if a function and context match.
     * @private
     * @param fn - The listener function to be added for one update
     * @param context - The listener context
     * @returns `true` if the listener match the arguments
     */t.prototype.match=function(t,e){return void 0===e&&(e=null),this.fn===t&&this.context===e},/**
     * Emit by calling the current function.
     * @private
     * @param deltaTime - time since the last emit.
     * @returns Next ticker
     */t.prototype.emit=function(t){this.fn&&(this.context?this.fn.call(this.context,t):this.fn(t));var e=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),e},/**
     * Connect to the list.
     * @private
     * @param previous - Input node, previous listener
     */t.prototype.connect=function(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this},/**
     * Destroy and don't use after this.
     * @private
     * @param hard - `true` to remove the `next` reference, this
     *        is considered a hard destroy. Soft destroy maintains the next reference.
     * @returns The listener to redirect while emitting or removing.
     */t.prototype.destroy=function(t){void 0===t&&(t=!1),this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);// Redirect to the next item
var e=this.next;return(// Remove references
this.next=t?null:e,this.previous=null,e)},t)}(),nQ=/** @class */function(){function t(){var t=this;/**
         * Whether or not this ticker should invoke the method
         * {@link PIXI.Ticker#start} automatically
         * when a listener is added.
         */this.autoStart=!1,/**
         * Scalar time value from last frame to this frame.
         * This value is capped by setting {@link PIXI.Ticker#minFPS}
         * and is scaled with {@link PIXI.Ticker#speed}.
         * **Note:** The cap may be exceeded by scaling.
         */this.deltaTime=1,/**
         * The last time {@link PIXI.Ticker#update} was invoked.
         * This value is also reset internally outside of invoking
         * update, but only when a new animation frame is requested.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         */this.lastTime=-1,/**
         * Factor of current {@link PIXI.Ticker#deltaTime}.
         * @example
         * // Scales ticker.deltaTime to what would be
         * // the equivalent of approximately 120 FPS
         * ticker.speed = 2;
         */this.speed=1,/**
         * Whether or not this ticker has been started.
         * `true` if {@link PIXI.Ticker#start} has been called.
         * `false` if {@link PIXI.Ticker#stop} has been called.
         * While `false`, this value may change to `true` in the
         * event of {@link PIXI.Ticker#autoStart} being `true`
         * and a listener is added.
         */this.started=!1,/** Internal current frame request ID */this._requestId=null,/**
         * Internal value managed by minFPS property setter and getter.
         * This is the maximum allowed milliseconds between updates.
         */this._maxElapsedMS=100,/**
         * Internal value managed by minFPS property setter and getter.
         * This is the minimum allowed milliseconds between updates.
         */this._minElapsedMS=0,/** If enabled, deleting is disabled.*/this._protected=!1,/** The last time keyframe was executed. Maintains a relatively fixed interval with the previous value. */this._lastFrame=-1,this._head=new nJ(null,null,1/0),this.deltaMS=1/eh.TARGET_FPMS,this.elapsedMS=1/eh.TARGET_FPMS,this._tick=function(e){t._requestId=null,t.started&&(// Invoke listeners now
t.update(e),t.started&&null===t._requestId&&t._head.next&&(t._requestId=requestAnimationFrame(t._tick)))}}return(/**
     * Conditionally requests a new animation frame.
     * If a frame has not already been requested, and if the internal
     * emitter has listeners, a new frame is requested.
     * @private
     */t.prototype._requestIfNeeded=function(){null===this._requestId&&this._head.next&&(// ensure callbacks get correct delta
this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))},/**
     * Conditionally cancels a pending animation frame.
     * @private
     */t.prototype._cancelIfNeeded=function(){null!==this._requestId&&(cancelAnimationFrame(this._requestId),this._requestId=null)},/**
     * Conditionally requests a new animation frame.
     * If the ticker has been started it checks if a frame has not already
     * been requested, and if the internal emitter has listeners. If these
     * conditions are met, a new frame is requested. If the ticker has not
     * been started, but autoStart is `true`, then the ticker starts now,
     * and continues with the previous conditions to request a new frame.
     * @private
     */t.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},/**
     * Register a handler for tick events. Calls continuously unless
     * it is removed or the ticker is stopped.
     * @param fn - The listener function to be added for updates
     * @param context - The listener context
     * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
     * @returns This instance of a ticker
     */t.prototype.add=function(t,e,r){return void 0===r&&(r=tp.NORMAL),this._addListener(new nJ(t,e,r))},/**
     * Add a handler for the tick event which is only execute once.
     * @param fn - The listener function to be added for one update
     * @param context - The listener context
     * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
     * @returns This instance of a ticker
     */t.prototype.addOnce=function(t,e,r){return void 0===r&&(r=tp.NORMAL),this._addListener(new nJ(t,e,r,!0))},/**
     * Internally adds the event handler so that it can be sorted by priority.
     * Priority allows certain handler (user, AnimatedSprite, Interaction) to be run
     * before the rendering.
     * @private
     * @param listener - Current listener being added.
     * @returns This instance of a ticker
     */t.prototype._addListener=function(t){// For attaching to head
var e=this._head.next,r=this._head;// Add the first item
if(e){// Go from highest to lowest priority
for(;e;){if(t.priority>e.priority){t.connect(r);break}r=e,e=e.next}// Not yet connected
t.previous||t.connect(r)}else t.connect(r);return this._startIfPossible(),this},/**
     * Removes any handlers matching the function and context parameters.
     * If no handlers are left after removing, then it cancels the animation frame.
     * @param fn - The listener function to be removed
     * @param context - The listener context to be removed
     * @returns This instance of a ticker
     */t.prototype.remove=function(t,e){for(var r=this._head.next;r;)// no break to delete all possible matches
// incase a listener was added 2+ times
r=r.match(t,e)?r.destroy():r.next;return this._head.next||this._cancelIfNeeded(),this},Object.defineProperty(t.prototype,"count",{/**
         * The number of listeners on this ticker, calculated by walking through linked list
         * @readonly
         * @member {number}
         */get:function(){if(!this._head)return 0;for(var t=0,e=this._head;e=e.next;)t++;return t},enumerable:!1,configurable:!0}),/** Starts the ticker. If the ticker has listeners a new animation frame is requested at this point. */t.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},/** Stops the ticker. If the ticker has requested an animation frame it is canceled at this point. */t.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},/** Destroy the ticker and don't use after this. Calling this method removes all references to internal events. */t.prototype.destroy=function(){if(!this._protected){this.stop();for(var t=this._head.next;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}},/**
     * Triggers an update. An update entails setting the
     * current {@link PIXI.Ticker#elapsedMS},
     * the current {@link PIXI.Ticker#deltaTime},
     * invoking all listeners with current deltaTime,
     * and then finally setting {@link PIXI.Ticker#lastTime}
     * with the value of currentTime that was provided.
     * This method will be called automatically by animation
     * frame callbacks if the ticker instance has been started
     * and listeners are added.
     * @param {number} [currentTime=performance.now()] - the current time of execution
     */t.prototype.update=function(t){// If the difference in time is zero or negative, we ignore most of the work done here.
// If there is no valid difference, then should be no reason to let anyone know about it.
// A zero delta, is exactly that, nothing should update.
//
// The difference in time can be negative, and no this does not mean time traveling.
// This can be the result of a race condition between when an animation frame is requested
// on the current JavaScript engine event loop, and when the ticker's start method is invoked
// (which invokes the internal _requestIfNeeded method). If a frame is requested before
// _requestIfNeeded is invoked, then the callback for the animation frame the ticker requests,
// can receive a time argument that can be less than the lastTime value that was set within
// _requestIfNeeded. This difference is in microseconds, but this is enough to cause problems.
//
// This check covers this browser engine timing issue, as well as if consumers pass an invalid
// currentTime value. This may happen if consumers opt-out of the autoStart, and update themselves.
if(void 0===t&&(t=performance.now()),t>this.lastTime){// If not enough time has passed, exit the function.
// Get ready for next frame by setting _lastFrame, but based on _minElapsedMS
// adjustment to ensure a relatively stable interval.
if(// Save uncapped elapsedMS for measurement
(e=this.elapsedMS=t-this.lastTime)>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){var e,r=t-this._lastFrame|0;if(r<this._minElapsedMS)return;this._lastFrame=t-r%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*eh.TARGET_FPMS;for(// Cache a local reference, in-case ticker is destroyed
// during the emit, we can still check for head.next
var i=this._head,n=i.next;n;)n=n.emit(this.deltaTime);i.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t},Object.defineProperty(t.prototype,"FPS",{/**
         * The frames per second at which this ticker is running.
         * The default is approximately 60 in most modern browsers.
         * **Note:** This does not factor in the value of
         * {@link PIXI.Ticker#speed}, which is specific
         * to scaling {@link PIXI.Ticker#deltaTime}.
         * @member {number}
         * @readonly
         */get:function(){return 1e3/this.elapsedMS},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"minFPS",{/**
         * Manages the maximum amount of milliseconds allowed to
         * elapse between invoking {@link PIXI.Ticker#update}.
         * This value is used to cap {@link PIXI.Ticker#deltaTime},
         * but does not effect the measured value of {@link PIXI.Ticker#FPS}.
         * When setting this property it is clamped to a value between
         * `0` and `PIXI.settings.TARGET_FPMS * 1000`.
         * @member {number}
         * @default 10
         */get:function(){return 1e3/this._maxElapsedMS},set:function(t){// Must be at least 0, but below 1 / settings.TARGET_FPMS
var e=Math.min(Math.max(0,Math.min(this.maxFPS,t))/1e3,eh.TARGET_FPMS);this._maxElapsedMS=1/e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"maxFPS",{/**
         * Manages the minimum amount of milliseconds required to
         * elapse between invoking {@link PIXI.Ticker#update}.
         * This will effect the measured value of {@link PIXI.Ticker#FPS}.
         * If it is set to `0`, then there is no limit; PixiJS will render as many frames as it can.
         * Otherwise it will be at least `minFPS`
         * @member {number}
         * @default 0
         */get:function(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0},set:function(t){if(0===t)this._minElapsedMS=0;else{// Max must be at least the minFPS
var e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3)}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"shared",{/**
         * The shared ticker instance used by {@link PIXI.AnimatedSprite} and by
         * {@link PIXI.VideoResource} to update animation frames / video textures.
         *
         * It may also be used by {@link PIXI.Application} if created with the `sharedTicker` option property set to true.
         *
         * The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.
         * Please follow the examples for usage, including how to opt-out of auto-starting the shared ticker.
         * @example
         * let ticker = PIXI.Ticker.shared;
         * // Set this to prevent starting this ticker when listeners are added.
         * // By default this is true only for the PIXI.Ticker.shared instance.
         * ticker.autoStart = false;
         * // FYI, call this to ensure the ticker is stopped. It should be stopped
         * // if you have not attempted to render anything yet.
         * ticker.stop();
         * // Call this when you are ready for a running shared ticker.
         * ticker.start();
         * @example
         * // You may use the shared ticker to render...
         * let renderer = PIXI.autoDetectRenderer();
         * let stage = new PIXI.Container();
         * document.body.appendChild(renderer.view);
         * ticker.add(function (time) {
         *     renderer.render(stage);
         * });
         * @example
         * // Or you can just update it manually.
         * ticker.autoStart = false;
         * ticker.stop();
         * function animate(time) {
         *     ticker.update(time);
         *     renderer.render(stage);
         *     requestAnimationFrame(animate);
         * }
         * animate(performance.now());
         * @member {PIXI.Ticker}
         * @static
         */get:function(){if(!t._shared){var e=t._shared=new t;e.autoStart=!0,e._protected=!0}return t._shared},enumerable:!1,configurable:!0}),Object.defineProperty(t,"system",{/**
         * The system ticker instance used by {@link PIXI.InteractionManager} and by
         * {@link PIXI.BasePrepare} for core timing functionality that shouldn't usually need to be paused,
         * unlike the `shared` ticker which drives visual animations and rendering which may want to be paused.
         *
         * The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.
         * @member {PIXI.Ticker}
         * @static
         */get:function(){if(!t._system){var e=t._system=new t;e.autoStart=!0,e._protected=!0}return t._system},enumerable:!1,configurable:!0}),t)}(),n$=/** @class */function(){function t(){}return(/**
     * Initialize the plugin with scope of application instance
     * @static
     * @private
     * @param {object} [options] - See application options
     */t.init=function(t){var e=this;// Set default
t=Object.assign({autoStart:!0,sharedTicker:!1},t),// Create ticker setter
Object.defineProperty(this,"ticker",{set:function(t){this._ticker&&this._ticker.remove(this.render,this),this._ticker=t,t&&t.add(this.render,this,tp.LOW)},get:function(){return this._ticker}}),/**
         * Convenience method for stopping the render.
         * @method
         * @memberof PIXI.Application
         * @instance
         */this.stop=function(){e._ticker.stop()},/**
         * Convenience method for starting the render.
         * @method
         * @memberof PIXI.Application
         * @instance
         */this.start=function(){e._ticker.start()},/**
         * Internal reference to the ticker.
         * @type {PIXI.Ticker}
         * @name _ticker
         * @memberof PIXI.Application#
         * @private
         */this._ticker=null,/**
         * Ticker for doing render updates.
         * @type {PIXI.Ticker}
         * @name ticker
         * @memberof PIXI.Application#
         * @default PIXI.Ticker.shared
         */this.ticker=t.sharedTicker?nQ.shared:new nQ,t.autoStart&&this.start()},/**
     * Clean up the ticker, scoped to application.
     * @static
     * @private
     */t.destroy=function(){if(this._ticker){var t=this._ticker;this.ticker=null,t.destroy()}},/** @ignore */t.extension=tf.Application,t)}();eh.PREFER_ENV=ea.any?j.WEBGL:j.WEBGL2,eh.STRICT_TEXTURE_CACHE=!1;/**
 * Collection of installed resource types, class must extend {@link PIXI.Resource}.
 * @example
 * class CustomResource extends PIXI.Resource {
 *   // MUST have source, options constructor signature
 *   // for auto-detected resources to be created.
 *   constructor(source, options) {
 *     super();
 *   }
 *   upload(renderer, baseTexture, glTexture) {
 *     // upload with GL
 *     return true;
 *   }
 *   // used to auto-detect resource
 *   static test(source, extension) {
 *     return extension === 'xyz'|| source instanceof SomeClass;
 *   }
 * }
 * // Install the new resource type
 * PIXI.INSTALLED.push(CustomResource);
 * @memberof PIXI
 * @type {Array<PIXI.IResourcePlugin>}
 * @static
 * @readonly
 */var n0=[];/**
 * Create a resource element from a single source element. This
 * auto-detects which type of resource to create. All resources that
 * are auto-detectable must have a static `test` method and a constructor
 * with the arguments `(source, options?)`. Currently, the supported
 * resources for auto-detection include:
 *  - {@link PIXI.ImageResource}
 *  - {@link PIXI.CanvasResource}
 *  - {@link PIXI.VideoResource}
 *  - {@link PIXI.SVGResource}
 *  - {@link PIXI.BufferResource}
 * @static
 * @memberof PIXI
 * @function autoDetectResource
 * @param {string|*} source - Resource source, this can be the URL to the resource,
 *        a typed-array (for BufferResource), HTMLVideoElement, SVG data-uri
 *        or any other resource that can be auto-detected. If not resource is
 *        detected, it's assumed to be an ImageResource.
 * @param {object} [options] - Pass-through options to use for Resource
 * @param {number} [options.width] - Width of BufferResource or SVG rasterization
 * @param {number} [options.height] - Height of BufferResource or SVG rasterization
 * @param {boolean} [options.autoLoad=true] - Image, SVG and Video flag to start loading
 * @param {number} [options.scale=1] - SVG source scale. Overridden by width, height
 * @param {boolean} [options.createBitmap=PIXI.settings.CREATE_IMAGE_BITMAP] - Image option to create Bitmap object
 * @param {boolean} [options.crossorigin=true] - Image and Video option to set crossOrigin
 * @param {boolean} [options.autoPlay=true] - Video option to start playing video immediately
 * @param {number} [options.updateFPS=0] - Video option to update how many times a second the
 *        texture should be updated from the video. Leave at 0 to update at every render
 * @returns {PIXI.Resource} The created resource.
 */function n1(t,e){if(!t)return null;var r="";if("string"==typeof t){// search for file extension: period, 3-4 chars, then ?, # or EOL
var i=/\.(\w{3,4})(?:$|\?|#)/i.exec(t);i&&(r=i[1].toLowerCase())}for(var n=n0.length-1;n>=0;--n){var o=n0[n];if(o.test&&o.test(t,r))return new o(t,e)}throw Error("Unrecognized source type to auto-detect Resource")}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise */var n2=function(t,e){return(n2=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function n3(t,e){function r(){this.constructor=t}n2(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var n4=function(){return(n4=Object.assign||function(t){for(var e,r=arguments,i=1,n=arguments.length;i<n;i++)for(var o in e=r[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},n8=/** @class */function(){/**
     * @param width - Width of the resource
     * @param height - Height of the resource
     */function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this._width=t,this._height=e,this.destroyed=!1,this.internal=!1,this.onResize=new nZ("setRealSize"),this.onUpdate=new nZ("update"),this.onError=new nZ("onError")}return(/**
     * Bind to a parent BaseTexture
     * @param baseTexture - Parent texture
     */t.prototype.bind=function(t){this.onResize.add(t),this.onUpdate.add(t),this.onError.add(t),(this._width||this._height)&&this.onResize.emit(this._width,this._height)},/**
     * Unbind to a parent BaseTexture
     * @param baseTexture - Parent texture
     */t.prototype.unbind=function(t){this.onResize.remove(t),this.onUpdate.remove(t),this.onError.remove(t)},/**
     * Trigger a resize event
     * @param width - X dimension
     * @param height - Y dimension
     */t.prototype.resize=function(t,e){(t!==this._width||e!==this._height)&&(this._width=t,this._height=e,this.onResize.emit(t,e))},Object.defineProperty(t.prototype,"valid",{/**
         * Has been validated
         * @readonly
         */get:function(){return!!this._width&&!!this._height},enumerable:!1,configurable:!0}),/** Has been updated trigger event. */t.prototype.update=function(){this.destroyed||this.onUpdate.emit()},/**
     * This can be overridden to start preloading a resource
     * or do any other prepare step.
     * @protected
     * @returns Handle the validate event
     */t.prototype.load=function(){return Promise.resolve(this)},Object.defineProperty(t.prototype,"width",{/**
         * The width of the resource.
         * @readonly
         */get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{/**
         * The height of the resource.
         * @readonly
         */get:function(){return this._height},enumerable:!1,configurable:!0}),/**
     * Set the style, optional to override
     * @param _renderer - yeah, renderer!
     * @param _baseTexture - the texture
     * @param _glTexture - texture instance for this webgl context
     * @returns - `true` is success
     */t.prototype.style=function(t,e,r){return!1},/** Clean up anything, this happens when destroying is ready. */t.prototype.dispose=function(){// override
},/**
     * Call when destroying resource, unbind any BaseTexture object
     * before calling this method, as reference counts are maintained
     * internally.
     */t.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)},/**
     * Abstract, used to auto-detect resource type.
     * @param {*} _source - The source object
     * @param {string} _extension - The extension of source, if set
     */t.test=function(t,e){return!1},t)}(),n6=/** @class */function(t){/**
     * @param source - Source buffer
     * @param options - Options
     * @param {number} options.width - Width of the texture
     * @param {number} options.height - Height of the texture
     */function e(e,r){var i=this,n=r||{},o=n.width,s=n.height;if(!o||!s)throw Error("BufferResource width or height invalid");return(i=t.call(this,o,s)||this).data=e,i}return n3(e,t),/**
     * Upload the texture to the GPU.
     * @param renderer - Upload to the renderer
     * @param baseTexture - Reference to parent texture
     * @param glTexture - glTexture
     * @returns - true is success
     */e.prototype.upload=function(t,e,r){var i=t.gl;i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.alphaMode===tt.UNPACK);var n=e.realWidth,o=e.realHeight;return r.width===n&&r.height===o?i.texSubImage2D(e.target,0,0,0,n,o,e.format,r.type,this.data):(r.width=n,r.height=o,i.texImage2D(e.target,0,r.internalFormat,n,o,0,e.format,r.type,this.data)),!0},/** Destroy and don't use after this. */e.prototype.dispose=function(){this.data=null},/**
     * Used to auto-detect the type of resource.
     * @param {*} source - The source object
     * @returns {boolean} `true` if <canvas>
     */e.test=function(t){return t instanceof Float32Array||t instanceof Uint8Array||t instanceof Uint32Array},e}(n8),n5={scaleMode:J.NEAREST,format:W.RGBA,alphaMode:tt.NPM},n9=/** @class */function(t){/**
     * @param {PIXI.Resource|string|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} [resource=null] -
     *        The current resource to use, for things that aren't Resource objects, will be converted
     *        into a Resource.
     * @param options - Collection of options
     * @param {PIXI.MIPMAP_MODES} [options.mipmap=PIXI.settings.MIPMAP_TEXTURES] - If mipmapping is enabled for texture
     * @param {number} [options.anisotropicLevel=PIXI.settings.ANISOTROPIC_LEVEL] - Anisotropic filtering level of texture
     * @param {PIXI.WRAP_MODES} [options.wrapMode=PIXI.settings.WRAP_MODE] - Wrap mode for textures
     * @param {PIXI.SCALE_MODES} [options.scaleMode=PIXI.settings.SCALE_MODE] - Default scale mode, linear, nearest
     * @param {PIXI.FORMATS} [options.format=PIXI.FORMATS.RGBA] - GL format type
     * @param {PIXI.TYPES} [options.type=PIXI.TYPES.UNSIGNED_BYTE] - GL data type
     * @param {PIXI.TARGETS} [options.target=PIXI.TARGETS.TEXTURE_2D] - GL texture target
     * @param {PIXI.ALPHA_MODES} [options.alphaMode=PIXI.ALPHA_MODES.UNPACK] - Pre multiply the image alpha
     * @param {number} [options.width=0] - Width of the texture
     * @param {number} [options.height=0] - Height of the texture
     * @param {number} [options.resolution=PIXI.settings.RESOLUTION] - Resolution of the base texture
     * @param {object} [options.resourceOptions] - Optional resource options,
     *        see {@link PIXI.autoDetectResource autoDetectResource}
     */function e(e,r){void 0===e&&(e=null),void 0===r&&(r=null);var i=t.call(this)||this,n=(r=r||{}).alphaMode,o=r.mipmap,s=r.anisotropicLevel,a=r.scaleMode,h=r.width,u=r.height,l=r.wrapMode,c=r.format,f=r.type,p=r.target,d=r.resolution,_=r.resourceOptions;return!e||e instanceof n8||((e=n1(e,_)).internal=!0),i.resolution=d||eh.RESOLUTION,i.width=Math.round((h||0)*i.resolution)/i.resolution,i.height=Math.round((u||0)*i.resolution)/i.resolution,i._mipmap=void 0!==o?o:eh.MIPMAP_TEXTURES,i.anisotropicLevel=void 0!==s?s:eh.ANISOTROPIC_LEVEL,i._wrapMode=l||eh.WRAP_MODE,i._scaleMode=void 0!==a?a:eh.SCALE_MODE,i.format=c||W.RGBA,i.type=f||K.UNSIGNED_BYTE,i.target=p||q.TEXTURE_2D,i.alphaMode=void 0!==n?n:tt.UNPACK,i.uid=++nc,i.touched=0,i.isPowerOfTwo=!1,i._refreshPOT(),i._glTextures={},i.dirtyId=0,i.dirtyStyleId=0,i.cacheId=null,i.valid=h>0&&u>0,i.textureCacheIds=[],i.destroyed=!1,i.resource=null,i._batchEnabled=0,i._batchLocation=0,i.parentTextureArray=null,/**
         * Fired when a not-immediately-available source finishes loading.
         * @protected
         * @event PIXI.BaseTexture#loaded
         * @param {PIXI.BaseTexture} baseTexture - Resource loaded.
         *//**
         * Fired when a not-immediately-available source fails to load.
         * @protected
         * @event PIXI.BaseTexture#error
         * @param {PIXI.BaseTexture} baseTexture - Resource errored.
         * @param {ErrorEvent} event - Load error event.
         *//**
         * Fired when BaseTexture is updated.
         * @protected
         * @event PIXI.BaseTexture#loaded
         * @param {PIXI.BaseTexture} baseTexture - Resource loaded.
         *//**
         * Fired when BaseTexture is updated.
         * @protected
         * @event PIXI.BaseTexture#update
         * @param {PIXI.BaseTexture} baseTexture - Instance of texture being updated.
         *//**
         * Fired when BaseTexture is destroyed.
         * @protected
         * @event PIXI.BaseTexture#dispose
         * @param {PIXI.BaseTexture} baseTexture - Instance of texture being destroyed.
         */// Set the resource
i.setResource(e),i}return n3(e,t),Object.defineProperty(e.prototype,"realWidth",{/**
         * Pixel width of the source of this texture
         * @readonly
         */get:function(){return Math.round(this.width*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"realHeight",{/**
         * Pixel height of the source of this texture
         * @readonly
         */get:function(){return Math.round(this.height*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mipmap",{/**
         * Mipmap mode of the texture, affects downscaled images
         * @default PIXI.settings.MIPMAP_TEXTURES
         */get:function(){return this._mipmap},set:function(t){this._mipmap!==t&&(this._mipmap=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scaleMode",{/**
         * The scale mode to apply when scaling this texture
         * @default PIXI.settings.SCALE_MODE
         */get:function(){return this._scaleMode},set:function(t){this._scaleMode!==t&&(this._scaleMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapMode",{/**
         * How the texture wraps
         * @default PIXI.settings.WRAP_MODE
         */get:function(){return this._wrapMode},set:function(t){this._wrapMode!==t&&(this._wrapMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),/**
     * Changes style options of BaseTexture
     * @param scaleMode - Pixi scalemode
     * @param mipmap - enable mipmaps
     * @returns - this
     */e.prototype.setStyle=function(t,e){var r;return void 0!==t&&t!==this.scaleMode&&(this.scaleMode=t,r=!0),void 0!==e&&e!==this.mipmap&&(this.mipmap=e,r=!0),r&&this.dirtyStyleId++,this},/**
     * Changes w/h/resolution. Texture becomes valid if width and height are greater than zero.
     * @param desiredWidth - Desired visual width
     * @param desiredHeight - Desired visual height
     * @param resolution - Optionally set resolution
     * @returns - this
     */e.prototype.setSize=function(t,e,r){return r=r||this.resolution,this.setRealSize(t*r,e*r,r)},/**
     * Sets real size of baseTexture, preserves current resolution.
     * @param realWidth - Full rendered width
     * @param realHeight - Full rendered height
     * @param resolution - Optionally set resolution
     * @returns - this
     */e.prototype.setRealSize=function(t,e,r){return this.resolution=r||this.resolution,this.width=Math.round(t)/this.resolution,this.height=Math.round(e)/this.resolution,this._refreshPOT(),this.update(),this},/**
     * Refresh check for isPowerOfTwo texture based on size
     * @private
     */e.prototype._refreshPOT=function(){var t,e;this.isPowerOfTwo=!((t=this.realWidth)&t-1)&&!!t&&!((e=this.realHeight)&e-1)&&!!e},/**
     * Changes resolution
     * @param resolution - res
     * @returns - this
     */e.prototype.setResolution=function(t){var e=this.resolution;return e===t||(this.resolution=t,this.valid&&(this.width=Math.round(this.width*e)/t,this.height=Math.round(this.height*e)/t,this.emit("update",this)),this._refreshPOT()),this},/**
     * Sets the resource if it wasn't set. Throws error if resource already present
     * @param resource - that is managing this BaseTexture
     * @returns - this
     */e.prototype.setResource=function(t){if(this.resource===t)return this;if(this.resource)throw Error("Resource can be set only once");return t.bind(this),this.resource=t,this},/** Invalidates the object. Texture becomes valid if width and height are greater than zero. */e.prototype.update=function(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))},/**
     * Handle errors with resources.
     * @private
     * @param event - Error event emitted.
     */e.prototype.onError=function(t){this.emit("error",this,t)},/**
     * Destroys this base texture.
     * The method stops if resource doesn't want this texture to be destroyed.
     * Removes texture from all caches.
     */e.prototype.destroy=function(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete ny[this.cacheId],delete n_[this.cacheId],this.cacheId=null),// finally let the WebGL renderer know..
this.dispose(),e.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0},/**
     * Frees the texture from WebGL memory without destroying this texture object.
     * This means you can still use the texture later which will upload it to GPU
     * memory again.
     * @fires PIXI.BaseTexture#dispose
     */e.prototype.dispose=function(){this.emit("dispose",this)},/** Utility function for BaseTexture|Texture cast. */e.prototype.castToBaseTexture=function(){return this},/**
     * Helper function that creates a base texture based on the source you provide.
     * The source can be - image url, image element, canvas element. If the
     * source is an image url or an image element and not in the base texture
     * cache, it will be created and loaded.
     * @static
     * @param {string|string[]|HTMLImageElement|HTMLCanvasElement|SVGElement|HTMLVideoElement} source - The
     *        source to create base texture from.
     * @param options - See {@link PIXI.BaseTexture}'s constructor for options.
     * @param {string} [options.pixiIdPrefix=pixiid] - If a source has no id, this is the prefix of the generated id
     * @param {boolean} [strict] - Enforce strict-mode, see {@link PIXI.settings.STRICT_TEXTURE_CACHE}.
     * @returns {PIXI.BaseTexture} The new base texture.
     */e.from=function(t,r,i){void 0===i&&(i=eh.STRICT_TEXTURE_CACHE);var n="string"==typeof t,o=null;if(n)o=t;else{if(!t._pixiId){var s=r&&r.pixiIdPrefix||"pixiid";t._pixiId=s+"_"+ ++nc}o=t._pixiId}var a=ny[o];// Strict-mode rejects invalid cacheIds
if(n&&i&&!a)throw Error('The cacheId "'+o+'" does not exist in BaseTextureCache.');return a||((a=new e(t,r)).cacheId=o,e.addToCache(a,o)),a},/**
     * Create a new BaseTexture with a BufferResource from a Float32Array.
     * RGBA values are floats from 0 to 1.
     * @param {Float32Array|Uint8Array} buffer - The optional array to use, if no data
     *        is provided, a new Float32Array is created.
     * @param width - Width of the resource
     * @param height - Height of the resource
     * @param options - See {@link PIXI.BaseTexture}'s constructor for options.
     *        Default properties are different from the constructor's defaults.
     * @param {PIXI.FORMATS} [options.format=PIXI.FORMATS.RGBA] - GL format type
     * @param {PIXI.ALPHA_MODES} [options.alphaMode=PIXI.ALPHA_MODES.NPM] - Image alpha, not premultiplied by default
     * @param {PIXI.SCALE_MODES} [options.scaleMode=PIXI.SCALE_MODES.NEAREST] - Scale mode, pixelating by default
     * @returns - The resulting new BaseTexture
     */e.fromBuffer=function(t,r,i,n){t=t||new Float32Array(r*i*4);var o=new n6(t,{width:r,height:i}),s=t instanceof Float32Array?K.FLOAT:K.UNSIGNED_BYTE;return new e(o,Object.assign({},n5,n||{width:r,height:i,type:s}))},/**
     * Adds a BaseTexture to the global BaseTextureCache. This cache is shared across the whole PIXI object.
     * @param {PIXI.BaseTexture} baseTexture - The BaseTexture to add to the cache.
     * @param {string} id - The id that the BaseTexture will be stored against.
     */e.addToCache=function(t,e){e&&(-1===t.textureCacheIds.indexOf(e)&&t.textureCacheIds.push(e),ny[e]&&console.warn("BaseTexture added to the cache with an id ["+e+"] that already had an entry"),ny[e]=t)},/**
     * Remove a BaseTexture from the global BaseTextureCache.
     * @param {string|PIXI.BaseTexture} baseTexture - id of a BaseTexture to be removed, or a BaseTexture instance itself.
     * @returns {PIXI.BaseTexture|null} The BaseTexture that was removed.
     */e.removeFromCache=function(t){if("string"==typeof t){var e=ny[t];if(e){var r=e.textureCacheIds.indexOf(t);return r>-1&&e.textureCacheIds.splice(r,1),delete ny[t],e}}else if(t&&t.textureCacheIds){for(var i=0;i<t.textureCacheIds.length;++i)delete ny[t.textureCacheIds[i]];return t.textureCacheIds.length=0,t}return null},/** Global number of the texture batch, used by multi-texture renderers. */e._globalBatch=0,e}(/*@__PURE__*/tM(eu)),n7=/** @class */function(t){/**
     * @param length
     * @param options - Options to for Resource constructor
     * @param {number} [options.width] - Width of the resource
     * @param {number} [options.height] - Height of the resource
     */function e(e,r){var i=this,n=r||{},o=n.width,s=n.height;(i=t.call(this,o,s)||this).items=[],i.itemDirtyIds=[];for(var a=0;a<e;a++){var h=new n9;i.items.push(h),// -2 - first run of texture array upload
// -1 - texture item was allocated
// >=0 - texture item uploaded , in sync with items[i].dirtyId
i.itemDirtyIds.push(-2)}return i.length=e,i._load=null,i.baseTexture=null,i}return n3(e,t),/**
     * Used from ArrayResource and CubeResource constructors.
     * @param resources - Can be resources, image elements, canvas, etc. ,
     *  length should be same as constructor length
     * @param options - Detect options for resources
     */e.prototype.initFromArray=function(t,e){for(var r=0;r<this.length;r++)t[r]&&(t[r].castToBaseTexture?this.addBaseTextureAt(t[r].castToBaseTexture(),r):t[r]instanceof n8?this.addResourceAt(t[r],r):this.addResourceAt(n1(t[r],e),r))},/** Destroy this BaseImageResource. */e.prototype.dispose=function(){for(var t=0,e=this.length;t<e;t++)this.items[t].destroy();this.items=null,this.itemDirtyIds=null,this._load=null},/**
     * Set a resource by ID
     * @param resource
     * @param index - Zero-based index of resource to set
     * @returns - Instance for chaining
     */e.prototype.addResourceAt=function(t,e){if(!this.items[e])throw Error("Index "+e+" is out of bounds");return t.valid&&!this.valid&&this.resize(t.width,t.height),this.items[e].setResource(t),this},/**
     * Set the parent base texture.
     * @param baseTexture
     */e.prototype.bind=function(e){if(null!==this.baseTexture)throw Error("Only one base texture per TextureArray is allowed");t.prototype.bind.call(this,e);for(var r=0;r<this.length;r++)this.items[r].parentTextureArray=e,this.items[r].on("update",e.update,e)},/**
     * Unset the parent base texture.
     * @param baseTexture
     */e.prototype.unbind=function(e){t.prototype.unbind.call(this,e);for(var r=0;r<this.length;r++)this.items[r].parentTextureArray=null,this.items[r].off("update",e.update,e)},/**
     * Load all the resources simultaneously
     * @returns - When load is resolved
     */e.prototype.load=function(){var t=this;if(this._load)return this._load;// TODO: also implement load part-by-part strategy
var e=this.items.map(function(t){return t.resource}).filter(function(t){return t}).map(function(t){return t.load()});return this._load=Promise.all(e).then(function(){var e=t.items[0],r=e.realWidth,i=e.realHeight;return t.resize(r,i),Promise.resolve(t)}),this._load},e}(n8),ot=/** @class */function(t){/**
     * @param source - Number of items in array or the collection
     *        of image URLs to use. Can also be resources, image elements, canvas, etc.
     * @param options - Options to apply to {@link PIXI.autoDetectResource}
     * @param {number} [options.width] - Width of the resource
     * @param {number} [options.height] - Height of the resource
     */function e(e,r){var i,n,o=this,s=r||{},a=s.width,h=s.height;return Array.isArray(e)?(i=e,n=e.length):n=e,o=t.call(this,n,{width:a,height:h})||this,i&&o.initFromArray(i,r),o}return n3(e,t),/**
     * Set a baseTexture by ID,
     * ArrayResource just takes resource from it, nothing more
     * @param baseTexture
     * @param index - Zero-based index of resource to set
     * @returns - Instance for chaining
     */e.prototype.addBaseTextureAt=function(t,e){if(t.resource)this.addResourceAt(t.resource,e);else throw Error("ArrayResource does not support RenderTexture");return this},/**
     * Add binding
     * @param baseTexture
     */e.prototype.bind=function(e){t.prototype.bind.call(this,e),e.target=q.TEXTURE_2D_ARRAY},/**
     * Upload the resources to the GPU.
     * @param renderer
     * @param texture
     * @param glTexture
     * @returns - whether texture was uploaded
     */e.prototype.upload=function(t,e,r){var i=this.length,n=this.itemDirtyIds,o=this.items,s=t.gl;r.dirtyId<0&&s.texImage3D(s.TEXTURE_2D_ARRAY,0,r.internalFormat,this._width,this._height,i,0,e.format,r.type,null);for(var a=0;a<i;a++){var h=o[a];n[a]<h.dirtyId&&(n[a]=h.dirtyId,h.valid&&s.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,a,h.resource.width,h.resource.height,1,e.format,r.type,h.resource.source))}return!0},e}(n7),oe=/** @class */function(t){/**
     * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} source
     */function e(e){var r=this,i=e.naturalWidth||e.videoWidth||e.width,n=e.naturalHeight||e.videoHeight||e.height;return(r=t.call(this,i,n)||this).source=e,r.noSubImage=!1,r}return n3(e,t),/**
     * Set cross origin based detecting the url and the crossorigin
     * @param element - Element to apply crossOrigin
     * @param url - URL to check
     * @param crossorigin - Cross origin value to use
     */e.crossOrigin=function(t,e,r){void 0===r&&0!==e.indexOf("data:")?t.crossOrigin=/**
 * Sets the `crossOrigin` property for this resource based on if the url
 * for this resource is cross-origin. If crossOrigin was manually set, this
 * function does nothing.
 * Nipped from the resource loader!
 * @ignore
 * @param {string} url - The url to test.
 * @param {object} [loc=window.location] - The location object to test against.
 * @returns {string} The crossOrigin value to use (or empty string for none).
 */function(t,e){// data: and javascript: urls are considered same-origin
if(void 0===e&&(e=globalThis.location),0===t.indexOf("data:"))return"";// default is window.location
e=e||globalThis.location,tl||(tl=document.createElement("a")),// let the browser determine the full href for the url of this resource and then
// parse with the node url lib, we can't use the properties of the anchor element
// because they don't work in IE9 :(
tl.href=t;var r=i6.parse(tl.href),i=!r.port&&""===e.port||r.port===e.port;return(// if cross origin
r.hostname===e.hostname&&i&&r.protocol===e.protocol?"":"anonymous")}(e):!1!==r&&(t.crossOrigin="string"==typeof r?r:"anonymous")},/**
     * Upload the texture to the GPU.
     * @param renderer - Upload to the renderer
     * @param baseTexture - Reference to parent texture
     * @param glTexture
     * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} [source] - (optional)
     * @returns - true is success
     */e.prototype.upload=function(t,e,r,i){var n=t.gl,o=e.realWidth,s=e.realHeight;if((i=i||this.source)instanceof HTMLImageElement){if(!i.complete||0===i.naturalWidth)return!1}else if(i instanceof HTMLVideoElement&&i.readyState<=1)return!1;return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.alphaMode===tt.UNPACK),this.noSubImage||e.target!==n.TEXTURE_2D||r.width!==o||r.height!==s?(r.width=o,r.height=s,n.texImage2D(e.target,0,r.internalFormat,e.format,r.type,i)):n.texSubImage2D(n.TEXTURE_2D,0,0,0,e.format,r.type,i),!0},/**
     * Checks if source width/height was changed, resize can cause extra baseTexture update.
     * Triggers one update in any case.
     */e.prototype.update=function(){if(!this.destroyed){var e=this.source,r=e.naturalWidth||e.videoWidth||e.width,i=e.naturalHeight||e.videoHeight||e.height;this.resize(r,i),t.prototype.update.call(this)}},/** Destroy this {@link BaseImageResource} */e.prototype.dispose=function(){this.source=null},e}(n8),or=/** @class */function(t){/**
     * @param source - Canvas element to use
     */// eslint-disable-next-line @typescript-eslint/no-useless-constructor
function e(e){return t.call(this,e)||this}return n3(e,t),/**
     * Used to auto-detect the type of resource.
     * @param {*} source - The source object
     * @returns {boolean} `true` if source is HTMLCanvasElement or OffscreenCanvas
     */e.test=function(t){var e=globalThis.OffscreenCanvas;return(// Check for browsers that don't yet support OffscreenCanvas
!!e&&t instanceof e||globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement)},e}(oe),oi=/** @class */function(t){/**
     * @param {Array<string|PIXI.Resource>} [source] - Collection of URLs or resources
     *        to use as the sides of the cube.
     * @param options - ImageResource options
     * @param {number} [options.width] - Width of resource
     * @param {number} [options.height] - Height of resource
     * @param {number} [options.autoLoad=true] - Whether to auto-load resources
     * @param {number} [options.linkBaseTexture=true] - In case BaseTextures are supplied,
     *   whether to copy them or use
     */function e(r,i){var n=this,o=i||{},s=o.width,a=o.height,h=o.autoLoad,u=o.linkBaseTexture;if(r&&r.length!==e.SIDES)throw Error("Invalid length. Got "+r.length+", expected 6");n=t.call(this,6,{width:s,height:a})||this;for(var l=0;l<e.SIDES;l++)n.items[l].target=q.TEXTURE_CUBE_MAP_POSITIVE_X+l;return n.linkBaseTexture=!1!==u,r&&n.initFromArray(r,i),!1!==h&&n.load(),n}return n3(e,t),/**
     * Add binding.
     * @param baseTexture - parent base texture
     */e.prototype.bind=function(e){t.prototype.bind.call(this,e),e.target=q.TEXTURE_CUBE_MAP},e.prototype.addBaseTextureAt=function(t,e,r){if(!this.items[e])throw Error("Index "+e+" is out of bounds");if(!this.linkBaseTexture||t.parentTextureArray||Object.keys(t._glTextures).length>0){// copy mode
if(t.resource)this.addResourceAt(t.resource,e);else throw Error("CubeResource does not support copying of renderTexture.")}else // link mode, the difficult one!
t.target=q.TEXTURE_CUBE_MAP_POSITIVE_X+e,t.parentTextureArray=this.baseTexture,this.items[e]=t;return t.valid&&!this.valid&&this.resize(t.realWidth,t.realHeight),this.items[e]=t,this},/**
     * Upload the resource
     * @param renderer
     * @param _baseTexture
     * @param glTexture
     * @returns {boolean} true is success
     */e.prototype.upload=function(t,r,i){for(var n=this.itemDirtyIds,o=0;o<e.SIDES;o++){var s=this.items[o];(n[o]<s.dirtyId||i.dirtyId<r.dirtyId)&&(s.valid&&s.resource?(s.resource.upload(t,s,i),n[o]=s.dirtyId):n[o]<-1&&(// either item is not valid yet, either its a renderTexture
// allocate the memory
t.gl.texImage2D(s.target,0,i.internalFormat,r.realWidth,r.realHeight,0,r.format,i.type,null),n[o]=-1))}return!0},/**
     * Used to auto-detect the type of resource.
     * @param {*} source - The source object
     * @returns {boolean} `true` if source is an array of 6 elements
     */e.test=function(t){return Array.isArray(t)&&t.length===e.SIDES},/** Number of texture sides to store for CubeResources. */e.SIDES=6,e}(n7),on=/** @class */function(t){/**
     * @param source - image source or URL
     * @param options
     * @param {boolean} [options.autoLoad=true] - start loading process
     * @param {boolean} [options.createBitmap=PIXI.settings.CREATE_IMAGE_BITMAP] - whether its required to create
     *        a bitmap before upload
     * @param {boolean} [options.crossorigin=true] - Load image using cross origin
     * @param {PIXI.ALPHA_MODES} [options.alphaMode=PIXI.ALPHA_MODES.UNPACK] - Premultiply image alpha in bitmap
     */function e(e,r){var i=this;if(r=r||{},!(e instanceof HTMLImageElement)){var n=new Image;oe.crossOrigin(n,e,r.crossorigin),n.src=e,e=n}return i=t.call(this,e)||this,!e.complete&&i._width&&i._height&&(i._width=0,i._height=0),i.url=e.src,i._process=null,i.preserveBitmap=!1,i.createBitmap=(void 0!==r.createBitmap?r.createBitmap:eh.CREATE_IMAGE_BITMAP)&&!!globalThis.createImageBitmap,i.alphaMode="number"==typeof r.alphaMode?r.alphaMode:null,i.bitmap=null,i._load=null,!1!==r.autoLoad&&i.load(),i}return n3(e,t),/**
     * Returns a promise when image will be loaded and processed.
     * @param createBitmap - whether process image into bitmap
     */e.prototype.load=function(t){var e=this;return this._load||(void 0!==t&&(this.createBitmap=t),this._load=new Promise(function(t,r){var i=e.source;e.url=i.src;var n=function(){e.destroyed||(i.onload=null,i.onerror=null,e.resize(i.width,i.height),e._load=null,e.createBitmap?t(e.process()):t(e))};i.complete&&i.src?n():(i.onload=n,i.onerror=function(t){// Avoids Promise freezing when resource broken
r(t),e.onError.emit(t)})})),this._load},/**
     * Called when we need to convert image into BitmapImage.
     * Can be called multiple times, real promise is cached inside.
     * @returns - Cached promise to fill that bitmap
     */e.prototype.process=function(){var t=this,e=this.source;if(null!==this._process)return this._process;if(null!==this.bitmap||!globalThis.createImageBitmap)return Promise.resolve(this);var r=globalThis.createImageBitmap,i=!e.crossOrigin||"anonymous"===e.crossOrigin;return this._process=fetch(e.src,{mode:i?"cors":"no-cors"}).then(function(t){return t.blob()}).then(function(i){return r(i,0,0,e.width,e.height,{premultiplyAlpha:null===t.alphaMode||t.alphaMode===tt.UNPACK?"premultiply":"none"})}).then(function(e){return t.destroyed?Promise.reject():(t.bitmap=e,t.update(),t._process=null,Promise.resolve(t))}),this._process},/**
     * Upload the image resource to GPU.
     * @param renderer - Renderer to upload to
     * @param baseTexture - BaseTexture for this resource
     * @param glTexture - GLTexture to use
     * @returns {boolean} true is success
     */e.prototype.upload=function(e,r,i){if("number"==typeof this.alphaMode&&(r.alphaMode=this.alphaMode),!this.createBitmap)return t.prototype.upload.call(this,e,r,i);if(!this.bitmap&&(// yeah, ignore the output
this.process(),!this.bitmap))return!1;if(t.prototype.upload.call(this,e,r,i,this.bitmap),!this.preserveBitmap){// checks if there are other renderers that possibly need this bitmap
var n=!0,o=r._glTextures;for(var s in o){var a=o[s];if(a!==i&&a.dirtyId!==r.dirtyId){n=!1;break}}n&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0},/** Destroys this resource. */e.prototype.dispose=function(){this.source.onload=null,this.source.onerror=null,t.prototype.dispose.call(this),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null},/**
     * Used to auto-detect the type of resource.
     * @param {*} source - The source object
     * @returns {boolean} `true` if source is string or HTMLImageElement
     */e.test=function(t){return"string"==typeof t||t instanceof HTMLImageElement},e}(oe),oo=/** @class */function(t){/**
     * @param sourceBase64 - Base64 encoded SVG element or URL for SVG file.
     * @param {object} [options] - Options to use
     * @param {number} [options.scale=1] - Scale to apply to SVG. Overridden by...
     * @param {number} [options.width] - Rasterize SVG this wide. Aspect ratio preserved if height not specified.
     * @param {number} [options.height] - Rasterize SVG this high. Aspect ratio preserved if width not specified.
     * @param {boolean} [options.autoLoad=true] - Start loading right away.
     */function e(e,r){var i=this;return r=r||{},(i=t.call(this,eh.ADAPTER.createCanvas())||this)._width=0,i._height=0,i.svg=e,i.scale=r.scale||1,i._overrideWidth=r.width,i._overrideHeight=r.height,i._resolve=null,i._crossorigin=r.crossorigin,i._load=null,!1!==r.autoLoad&&i.load(),i}return n3(e,t),e.prototype.load=function(){var t=this;return this._load||(this._load=new Promise(function(r){// Convert SVG inline string to data-uri
if(// Save this until after load is finished
t._resolve=function(){t.resize(t.source.width,t.source.height),r(t)},e.SVG_XML.test(t.svg.trim())){if(!btoa)throw Error("Your browser doesn't support base64 conversions.");t.svg="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t.svg)))}t._loadSvg()})),this._load},/** Loads an SVG image from `imageUrl` or `data URL`. */e.prototype._loadSvg=function(){var t=this,e=new Image;oe.crossOrigin(e,this.svg,this._crossorigin),e.src=this.svg,e.onerror=function(r){t._resolve&&(e.onerror=null,t.onError.emit(r))},e.onload=function(){if(t._resolve){var r=e.width,i=e.height;if(!r||!i)throw Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");// Set render size
var n=r*t.scale,o=i*t.scale;(t._overrideWidth||t._overrideHeight)&&(n=t._overrideWidth||t._overrideHeight/i*r,o=t._overrideHeight||t._overrideWidth/r*i),n=Math.round(n),o=Math.round(o);// Create a canvas element
var s=t.source;s.width=n,s.height=o,s._pixiId="canvas_"+ ++nc,// Draw the Svg to the canvas
s.getContext("2d").drawImage(e,0,0,r,i,0,0,n,o),t._resolve(),t._resolve=null}}},/**
     * Get size from an svg string using a regular expression.
     * @param svgString - a serialized svg element
     * @returns - image extension
     */e.getSize=function(t){var r=e.SVG_SIZE.exec(t),i={};return r&&(i[r[1]]=Math.round(parseFloat(r[3])),i[r[5]]=Math.round(parseFloat(r[7]))),i},/** Destroys this texture. */e.prototype.dispose=function(){t.prototype.dispose.call(this),this._resolve=null,this._crossorigin=null},/**
     * Used to auto-detect the type of resource.
     * @param {*} source - The source object
     * @param {string} extension - The extension of source, if set
     * @returns {boolean} - If the source is a SVG source or data file
     */e.test=function(t,r){// url file extension is SVG
return"svg"===r||"string"==typeof t&&t.startsWith("data:image/svg+xml")||"string"==typeof t&&e.SVG_XML.test(t)},/**
     * Regular expression for SVG XML document.
     * @example &lt;?xml version="1.0" encoding="utf-8" ?&gt;&lt;!-- image/svg --&gt;&lt;svg
     * @readonly
     */e.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,/**
     * Regular expression for SVG size.
     * @example &lt;svg width="100" height="100"&gt;&lt;/svg&gt;
     * @readonly
     */e.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,e}(oe),os=/** @class */function(t){/**
     * @param {HTMLVideoElement|object|string|Array<string|object>} source - Video element to use.
     * @param {object} [options] - Options to use
     * @param {boolean} [options.autoLoad=true] - Start loading the video immediately
     * @param {boolean} [options.autoPlay=true] - Start playing video immediately
     * @param {number} [options.updateFPS=0] - How many times a second to update the texture from the video.
     * Leave at 0 to update at every render.
     * @param {boolean} [options.crossorigin=true] - Load image using cross origin
     */function e(r,i){var n=this;if(i=i||{},!(r instanceof HTMLVideoElement)){var o=document.createElement("video");// workaround for https://github.com/pixijs/pixi.js/issues/5996
o.setAttribute("preload","auto"),o.setAttribute("webkit-playsinline",""),o.setAttribute("playsinline",""),"string"==typeof r&&(r=[r]);var s=r[0].src||r[0];oe.crossOrigin(o,s,i.crossorigin);// array of objects or strings
for(var a=0;a<r.length;++a){var h=document.createElement("source"),u=r[a],l=u.src,c=u.mime,f=(l=l||r[a]).split("?").shift().toLowerCase(),p=f.slice(f.lastIndexOf(".")+1);c=c||e.MIME_TYPES[p]||"video/"+p,h.src=l,h.type=c,o.appendChild(h)}// Override the source
r=o}return(n=t.call(this,r)||this).noSubImage=!0,n._autoUpdate=!0,n._isConnectedToTicker=!1,n._updateFPS=i.updateFPS||0,n._msToNextUpdate=0,n.autoPlay=!1!==i.autoPlay,n._load=null,n._resolve=null,// Bind for listeners
n._onCanPlay=n._onCanPlay.bind(n),n._onError=n._onError.bind(n),!1!==i.autoLoad&&n.load(),n}return n3(e,t),/**
     * Trigger updating of the texture.
     * @param _deltaTime - time delta since last tick
     */e.prototype.update=function(e){if(!this.destroyed){// account for if video has had its playbackRate changed
var r=nQ.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-r),(!this._updateFPS||this._msToNextUpdate<=0)&&(t.prototype.update.call(this),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}},/**
     * Start preloading the video resource.
     * @returns {Promise<void>} Handle the validate event
     */e.prototype.load=function(){var t=this;if(this._load)return this._load;var e=this.source;return(e.readyState===e.HAVE_ENOUGH_DATA||e.readyState===e.HAVE_FUTURE_DATA)&&e.width&&e.height&&(e.complete=!0),e.addEventListener("play",this._onPlayStart.bind(this)),e.addEventListener("pause",this._onPlayStop.bind(this)),this._isSourceReady()?this._onCanPlay():(e.addEventListener("canplay",this._onCanPlay),e.addEventListener("canplaythrough",this._onCanPlay),e.addEventListener("error",this._onError,!0)),this._load=new Promise(function(r){t.valid?r(t):(t._resolve=r,e.load())}),this._load},/**
     * Handle video error events.
     * @param event
     */e.prototype._onError=function(t){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(t)},/**
     * Returns true if the underlying source is playing.
     * @returns - True if playing.
     */e.prototype._isSourcePlaying=function(){var t=this.source;return!t.paused&&!t.ended&&this._isSourceReady()},/**
     * Returns true if the underlying source is ready for playing.
     * @returns - True if ready.
     */e.prototype._isSourceReady=function(){return this.source.readyState>2},/** Runs the update loop when the video is ready to play. */e.prototype._onPlayStart=function(){this.valid||this._onCanPlay(),this.autoUpdate&&!this._isConnectedToTicker&&(nQ.shared.add(this.update,this),this._isConnectedToTicker=!0)},/** Fired when a pause event is triggered, stops the update loop. */e.prototype._onPlayStop=function(){this._isConnectedToTicker&&(nQ.shared.remove(this.update,this),this._isConnectedToTicker=!1)},/** Fired when the video is loaded and ready to play. */e.prototype._onCanPlay=function(){var t=this.source;t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlay);var e=this.valid;this.resize(t.videoWidth,t.videoHeight),!e&&this._resolve&&(this._resolve(this),this._resolve=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&t.play()},/** Destroys this texture. */e.prototype.dispose=function(){this._isConnectedToTicker&&(nQ.shared.remove(this.update,this),this._isConnectedToTicker=!1);var e=this.source;e&&(e.removeEventListener("error",this._onError,!0),e.pause(),e.src="",e.load()),t.prototype.dispose.call(this)},Object.defineProperty(e.prototype,"autoUpdate",{/** Should the base texture automatically update itself, set to true by default. */get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(nQ.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._isSourcePlaying()&&(nQ.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"updateFPS",{/**
         * How many times a second to update the texture from the video. Leave at 0 to update at every render.
         * A lower fps can help performance, as updating the texture at 60fps on a 30ps video may not be efficient.
         */get:function(){return this._updateFPS},set:function(t){t!==this._updateFPS&&(this._updateFPS=t)},enumerable:!1,configurable:!0}),/**
     * Used to auto-detect the type of resource.
     * @param {*} source - The source object
     * @param {string} extension - The extension of source, if set
     * @returns {boolean} `true` if video source
     */e.test=function(t,r){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||e.TYPES.indexOf(r)>-1},/**
     * List of common video file extensions supported by VideoResource.
     * @readonly
     */e.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"],/**
     * Map of video MIME types that can't be directly derived from file extensions.
     * @readonly
     */e.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"},e}(oe),oa=/** @class */function(t){/**
     * @param source - Image element to use
     */// eslint-disable-next-line @typescript-eslint/no-useless-constructor
function e(e){return t.call(this,e)||this}return n3(e,t),/**
     * Used to auto-detect the type of resource.
     * @param {*} source - The source object
     * @returns {boolean} `true` if source is an ImageBitmap
     */e.test=function(t){return!!globalThis.createImageBitmap&&"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap},e}(oe);n0.push(on,oa,or,os,oo,n6,oi,ot);var oh={__proto__:null,Resource:n8,BaseImageResource:oe,INSTALLED:n0,autoDetectResource:n1,AbstractMultiResource:n7,ArrayResource:ot,BufferResource:n6,CanvasResource:or,CubeResource:oi,ImageResource:on,SVGResource:oo,VideoResource:os,ImageBitmapResource:oa},ou=/** @class */function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n3(e,t),/**
     * Upload the texture to the GPU.
     * @param renderer - Upload to the renderer
     * @param baseTexture - Reference to parent texture
     * @param glTexture - glTexture
     * @returns - true is success
     */e.prototype.upload=function(t,e,r){var i=t.gl;i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.alphaMode===tt.UNPACK);var n=e.realWidth,o=e.realHeight;return r.width===n&&r.height===o?i.texSubImage2D(e.target,0,0,0,n,o,e.format,r.type,this.data):(r.width=n,r.height=o,i.texImage2D(e.target,0,r.internalFormat,n,o,0,e.format,r.type,this.data)),!0},e}(n6),ol=/** @class */function(){/**
     * @param width - Width of the frame buffer
     * @param height - Height of the frame buffer
     */function t(t,e){this.width=Math.round(t||100),this.height=Math.round(e||100),this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new nZ("disposeFramebuffer"),this.multisample=ts.NONE}return Object.defineProperty(t.prototype,"colorTexture",{/**
         * Reference to the colorTexture.
         * @readonly
         */get:function(){return this.colorTextures[0]},enumerable:!1,configurable:!0}),/**
     * Add texture to the colorTexture array.
     * @param index - Index of the array to add the texture to
     * @param texture - Texture to add to the array
     */t.prototype.addColorTexture=function(t,e){return void 0===t&&(t=0),// TODO add some validation to the texture - same width / height etc?
this.colorTextures[t]=e||new n9(null,{scaleMode:J.NEAREST,resolution:1,mipmap:$.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this},/**
     * Add a depth texture to the frame buffer.
     * @param texture - Texture to add.
     */t.prototype.addDepthTexture=function(t){return(/* eslint-disable max-len */this.depthTexture=t||new n9(new ou(null,{width:this.width,height:this.height}),{scaleMode:J.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:$.OFF,format:W.DEPTH_COMPONENT,type:K.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this)},/** Enable depth on the frame buffer. */t.prototype.enableDepth=function(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this},/** Enable stencil on the frame buffer. */t.prototype.enableStencil=function(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this},/**
     * Resize the frame buffer
     * @param width - Width of the frame buffer to resize to
     * @param height - Height of the frame buffer to resize to
     */t.prototype.resize=function(t,e){if(t=Math.round(t),e=Math.round(e),t!==this.width||e!==this.height){this.width=t,this.height=e,this.dirtyId++,this.dirtySize++;for(var r=0;r<this.colorTextures.length;r++){var i=this.colorTextures[r],n=i.resolution;// take into account the fact the texture may have a different resolution..
i.setSize(t/n,e/n)}if(this.depthTexture){var n=this.depthTexture.resolution;this.depthTexture.setSize(t/n,e/n)}}},/** Disposes WebGL resources that are connected to this geometry. */t.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},/** Destroys and removes the depth texture added to this framebuffer. */t.prototype.destroyDepthTexture=function(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)},t}(),oc=/** @class */function(t){/**
     * @param options
     * @param {number} [options.width=100] - The width of the base render texture.
     * @param {number} [options.height=100] - The height of the base render texture.
     * @param {PIXI.SCALE_MODES} [options.scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES}
     *   for possible values.
     * @param {number} [options.resolution=PIXI.settings.RESOLUTION] - The resolution / device pixel ratio
     *   of the texture being generated.
     * @param {PIXI.MSAA_QUALITY} [options.multisample=PIXI.MSAA_QUALITY.NONE] - The number of samples of the frame buffer.
     */function e(e){void 0===e&&(e={});var r=this;if("number"==typeof e){/* eslint-disable prefer-rest-params */// Backward compatibility of signature
var i=arguments[0],n=arguments[1],o=arguments[2],s=arguments[3];e={width:i,height:n,scaleMode:o,resolution:s};/* eslint-enable prefer-rest-params */}return e.width=e.width||100,e.height=e.height||100,e.multisample=void 0!==e.multisample?e.multisample:ts.NONE,// Set defaults
(r=t.call(this,null,e)||this).mipmap=$.OFF,r.valid=!0,r.clearColor=[0,0,0,0],r.framebuffer=new ol(r.realWidth,r.realHeight).addColorTexture(0,r),r.framebuffer.multisample=e.multisample,// TODO - could this be added the systems?
r.maskStack=[],r.filterStack=[{}],r}return n3(e,t),/**
     * Resizes the BaseRenderTexture.
     * @param desiredWidth - The desired width to resize to.
     * @param desiredHeight - The desired height to resize to.
     */e.prototype.resize=function(t,e){this.framebuffer.resize(t*this.resolution,e*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)},/**
     * Frees the texture and framebuffer from WebGL memory without destroying this texture object.
     * This means you can still use the texture later which will upload it to GPU
     * memory again.
     * @fires PIXI.BaseTexture#dispose
     */e.prototype.dispose=function(){this.framebuffer.dispose(),t.prototype.dispose.call(this)},/** Destroys this texture. */e.prototype.destroy=function(){t.prototype.destroy.call(this),this.framebuffer.destroyDepthTexture(),this.framebuffer=null},e}(n9),of=/** @class */function(){function t(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}return(/**
     * Sets the texture Uvs based on the given frame information.
     * @protected
     * @param frame - The frame of the texture
     * @param baseFrame - The base frame of the texture
     * @param rotate - Rotation of frame, see {@link PIXI.groupD8}
     */t.prototype.set=function(t,e,r){var i=e.width,n=e.height;if(r){// width and height div 2 div baseFrame size
var o=t.width/2/i,s=t.height/2/n,a=t.x/i+o,h=t.y/n+s;r=nG.add(r,nG.NW),this.x0=a+o*nG.uX(r),this.y0=h+s*nG.uY(r),r=nG.add(r,2),this.x1=a+o*nG.uX(r),this.y1=h+s*nG.uY(r),r=nG.add(r,2),this.x2=a+o*nG.uX(r),this.y2=h+s*nG.uY(r),r=nG.add(r,2),this.x3=a+o*nG.uX(r),this.y3=h+s*nG.uY(r)}else this.x0=t.x/i,this.y0=t.y/n,this.x1=(t.x+t.width)/i,this.y1=t.y/n,this.x2=(t.x+t.width)/i,this.y2=(t.y+t.height)/n,this.x3=t.x/i,this.y3=(t.y+t.height)/n;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3},t.prototype.toString=function(){return"[@pixi/core:TextureUvs x0="+this.x0+" y0="+this.y0+" "+("x1="+this.x1+" y1="+this.y1)+" x2="+this.x2+" "+("y2="+this.y2+" x3=")+this.x3+" y3="+this.y3+"]"},t)}(),op=new of;/**
 * Used to remove listeners from WHITE and EMPTY Textures
 * @ignore
 */function od(t){t.destroy=function(){},t.on=function(){},t.once=function(){},t.emit=function(){}}/**
 * A texture stores the information that represents an image or part of an image.
 *
 * It cannot be added to the display list directly; instead use it as the texture for a Sprite.
 * If no frame is provided for a texture, then the whole image is used.
 *
 * You can directly create a texture from an image and then reuse it multiple times like this :
 *
 * ```js
 * let texture = PIXI.Texture.from('assets/image.png');
 * let sprite1 = new PIXI.Sprite(texture);
 * let sprite2 = new PIXI.Sprite(texture);
 * ```
 *
 * If you didnt pass the texture frame to constructor, it enables `noFrame` mode:
 * it subscribes on baseTexture events, it automatically resizes at the same time as baseTexture.
 *
 * Textures made from SVGs, loaded or not, cannot be used before the file finishes processing.
 * You can check for this by checking the sprite's _textureID property.
 * ```js
 * var texture = PIXI.Texture.from('assets/image.svg');
 * var sprite1 = new PIXI.Sprite(texture);
 * //sprite1._textureID should not be undefined if the texture has finished processing the SVG file
 * ```
 * You can use a ticker or rAF to ensure your sprites load the finished textures after processing. See issue #3068.
 * @memberof PIXI
 * @typeParam R - The BaseTexture's Resource type.
 */var o_=/** @class */function(t){/**
     * @param baseTexture - The base texture source to create the texture from
     * @param frame - The rectangle frame of the texture to show
     * @param orig - The area of original texture
     * @param trim - Trimmed rectangle of original texture
     * @param rotate - indicates how the texture was rotated by texture packer. See {@link PIXI.groupD8}
     * @param anchor - Default anchor point used for sprite placement / rotation
     */function e(r,i,n,o,s,a){var h=t.call(this)||this;if(h.noFrame=!1,i||(h.noFrame=!0,i=new nA(0,0,1,1)),r instanceof e&&(r=r.baseTexture),h.baseTexture=r,h._frame=i,h.trim=o,h.valid=!1,h._uvs=op,h.uvMatrix=null,h.orig=n||i,h._rotate=Number(s||0),!0===s)h._rotate=2;else if(h._rotate%2!=0)throw Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");return h.defaultAnchor=a?new nT(a.x,a.y):new nT(0,0),h._updateID=0,h.textureCacheIds=[],r.valid?h.noFrame?r.valid&&h.onBaseTextureUpdated(r):h.frame=i:r.once("loaded",h.onBaseTextureUpdated,h),h.noFrame&&r.on("update",h.onBaseTextureUpdated,h),h}return n3(e,t),/**
     * Updates this texture on the gpu.
     *
     * Calls the TextureResource update.
     *
     * If you adjusted `frame` manually, please call `updateUvs()` instead.
     */e.prototype.update=function(){this.baseTexture.resource&&this.baseTexture.resource.update()},/**
     * Called when the base texture is updated
     * @protected
     * @param baseTexture - The base texture.
     */e.prototype.onBaseTextureUpdated=function(t){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=t.width,this._frame.height=t.height,this.valid=!0,this.updateUvs()}else // if user gave us frame that has bigger size than resized texture it can be a problem
this.frame=this._frame;this.emit("update",this)},/**
     * Destroys this texture
     * @param [destroyBase=false] - Whether to destroy the base texture as well
     */e.prototype.destroy=function(t){if(this.baseTexture){if(t){var r=this.baseTexture.resource;r&&r.url&&n_[r.url]&&e.removeFromCache(r.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,e.removeFromCache(this),this.textureCacheIds=null},/**
     * Creates a new texture object that acts the same as this one.
     * @returns - The new texture
     */e.prototype.clone=function(){var t=this._frame.clone(),r=this._frame===this.orig?t:this.orig.clone(),i=new e(this.baseTexture,!this.noFrame&&t,r,this.trim&&this.trim.clone(),this.rotate,this.defaultAnchor);return this.noFrame&&(i._frame=t),i},/**
     * Updates the internal WebGL UV cache. Use it after you change `frame` or `trim` of the texture.
     * Call it after changing the frame
     */e.prototype.updateUvs=function(){this._uvs===op&&(this._uvs=new of),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++},/**
     * Helper function that creates a new Texture based on the source you provide.
     * The source can be - frame id, image url, video url, canvas element, video element, base texture
     * @param {string|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|PIXI.BaseTexture} source -
     *        Source or array of sources to create texture from
     * @param options - See {@link PIXI.BaseTexture}'s constructor for options.
     * @param {string} [options.pixiIdPrefix=pixiid] - If a source has no id, this is the prefix of the generated id
     * @param {boolean} [strict] - Enforce strict-mode, see {@link PIXI.settings.STRICT_TEXTURE_CACHE}.
     * @returns {PIXI.Texture} The newly created texture
     */e.from=function(t,r,i){void 0===r&&(r={}),void 0===i&&(i=eh.STRICT_TEXTURE_CACHE);var n="string"==typeof t,o=null;if(n)o=t;else if(t instanceof n9){if(!t.cacheId){var s=r&&r.pixiIdPrefix||"pixiid";t.cacheId=s+"-"+ ++nc,n9.addToCache(t,t.cacheId)}o=t.cacheId}else{if(!t._pixiId){var s=r&&r.pixiIdPrefix||"pixiid";t._pixiId=s+"_"+ ++nc}o=t._pixiId}var a=n_[o];// Strict-mode rejects invalid cacheIds
if(n&&i&&!a)throw Error('The cacheId "'+o+'" does not exist in TextureCache.');// lets assume its a base texture!
return a||t instanceof n9?!a&&t instanceof n9&&(a=new e(t),e.addToCache(a,o)):(r.resolution||(r.resolution=nm(t)),(a=new e(new n9(t,r))).baseTexture.cacheId=o,n9.addToCache(a.baseTexture,o),e.addToCache(a,o)),a},/**
     * Useful for loading textures via URLs. Use instead of `Texture.from` because
     * it does a better job of handling failed URLs more effectively. This also ignores
     * `PIXI.settings.STRICT_TEXTURE_CACHE`. Works for Videos, SVGs, Images.
     * @param url - The remote URL or array of URLs to load.
     * @param options - Optional options to include
     * @returns - A Promise that resolves to a Texture.
     */e.fromURL=function(t,r){var i=Object.assign({autoLoad:!1},null==r?void 0:r.resourceOptions),n=e.from(t,Object.assign({resourceOptions:i},r),!1),o=n.baseTexture.resource;return(// The texture was already loaded
n.baseTexture.valid?Promise.resolve(n):o.load().then(function(){return Promise.resolve(n)}))},/**
     * Create a new Texture with a BufferResource from a Float32Array.
     * RGBA values are floats from 0 to 1.
     * @param {Float32Array|Uint8Array} buffer - The optional array to use, if no data
     *        is provided, a new Float32Array is created.
     * @param width - Width of the resource
     * @param height - Height of the resource
     * @param options - See {@link PIXI.BaseTexture}'s constructor for options.
     * @returns - The resulting new BaseTexture
     */e.fromBuffer=function(t,r,i,n){return new e(n9.fromBuffer(t,r,i,n))},/**
     * Create a texture from a source and add to the cache.
     * @param {HTMLImageElement|HTMLCanvasElement|string} source - The input source.
     * @param imageUrl - File name of texture, for cache and resolving resolution.
     * @param name - Human readable name for the texture cache. If no name is
     *        specified, only `imageUrl` will be used as the cache ID.
     * @param options
     * @returns - Output texture
     */e.fromLoader=function(t,r,i,n){var o=new n9(t,Object.assign({scaleMode:eh.SCALE_MODE,resolution:nm(r)},n)),s=o.resource;s instanceof on&&(s.url=r);var a=new e(o);return(// Generally images are valid right away
(i||(i=r),// lets also add the frame to pixi's global cache for 'fromLoader' function
n9.addToCache(a.baseTexture,i),e.addToCache(a,i),i!==r&&(n9.addToCache(a.baseTexture,r),e.addToCache(a,r)),a.baseTexture.valid)?Promise.resolve(a):new Promise(function(t){a.baseTexture.once("loaded",function(){return t(a)})}))},/**
     * Adds a Texture to the global TextureCache. This cache is shared across the whole PIXI object.
     * @param texture - The Texture to add to the cache.
     * @param id - The id that the Texture will be stored against.
     */e.addToCache=function(t,e){e&&(-1===t.textureCacheIds.indexOf(e)&&t.textureCacheIds.push(e),n_[e]&&console.warn("Texture added to the cache with an id ["+e+"] that already had an entry"),n_[e]=t)},/**
     * Remove a Texture from the global TextureCache.
     * @param texture - id of a Texture to be removed, or a Texture instance itself
     * @returns - The Texture that was removed
     */e.removeFromCache=function(t){if("string"==typeof t){var e=n_[t];if(e){var r=e.textureCacheIds.indexOf(t);return r>-1&&e.textureCacheIds.splice(r,1),delete n_[t],e}}else if(t&&t.textureCacheIds){for(var i=0;i<t.textureCacheIds.length;++i)n_[t.textureCacheIds[i]]===t&&delete n_[t.textureCacheIds[i]];return t.textureCacheIds.length=0,t}return null},Object.defineProperty(e.prototype,"resolution",{/**
         * Returns resolution of baseTexture
         * @readonly
         */get:function(){return this.baseTexture.resolution},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"frame",{/**
         * The frame specifies the region of the base texture that this texture uses.
         * Please call `updateUvs()` after you change coordinates of `frame` manually.
         */get:function(){return this._frame},set:function(t){this._frame=t,this.noFrame=!1;var e=t.x,r=t.y,i=t.width,n=t.height,o=e+i>this.baseTexture.width,s=r+n>this.baseTexture.height;if(o||s)throw Error("Texture Error: frame does not fit inside the base Texture dimensions: "+("X: "+e+" + "+i+" = "+(e+i)+" > "+this.baseTexture.width+" ")+(o&&s?"and":"or")+" "+("Y: "+r+" + "+n+" = "+(r+n))+" > "+this.baseTexture.height);this.valid=i&&n&&this.baseTexture.valid,this.trim||this.rotate||(this.orig=t),this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotate",{/**
         * Indicates whether the texture is rotated inside the atlas
         * set to 2 to compensate for texture packer rotation
         * set to 6 to compensate for spine packer rotation
         * can be used to rotate or mirror sprites
         * See {@link PIXI.groupD8} for explanation
         */get:function(){return this._rotate},set:function(t){this._rotate=t,this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{/** The width of the Texture in pixels. */get:function(){return this.orig.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{/** The height of the Texture in pixels. */get:function(){return this.orig.height},enumerable:!1,configurable:!0}),/** Utility function for BaseTexture|Texture cast. */e.prototype.castToBaseTexture=function(){return this.baseTexture},Object.defineProperty(e,"EMPTY",{/** An empty texture, used often to not have to create multiple empty textures. Can not be destroyed. */get:function(){return e._EMPTY||(e._EMPTY=new e(new n9),od(e._EMPTY),od(e._EMPTY.baseTexture)),e._EMPTY},enumerable:!1,configurable:!0}),Object.defineProperty(e,"WHITE",{/** A white texture of 16x16 size, used for graphics and other things Can not be destroyed. */get:function(){if(!e._WHITE){var t=eh.ADAPTER.createCanvas(16,16),r=t.getContext("2d");t.width=16,t.height=16,r.fillStyle="white",r.fillRect(0,0,16,16),e._WHITE=new e(n9.from(t)),od(e._WHITE),od(e._WHITE.baseTexture)}return e._WHITE},enumerable:!1,configurable:!0}),e}(/*@__PURE__*/tM(eu)),oy=/** @class */function(t){/**
     * @param baseRenderTexture - The base texture object that this texture uses.
     * @param frame - The rectangle frame of the texture to show.
     */function e(e,r){var i=t.call(this,e,r)||this;return i.valid=!0,i.filterFrame=null,i.filterPoolKey=null,i.updateUvs(),i}return n3(e,t),Object.defineProperty(e.prototype,"framebuffer",{/**
         * Shortcut to `this.baseTexture.framebuffer`, saves baseTexture cast.
         * @readonly
         */get:function(){return this.baseTexture.framebuffer},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"multisample",{/**
         * Shortcut to `this.framebuffer.multisample`.
         * @default PIXI.MSAA_QUALITY.NONE
         */get:function(){return this.framebuffer.multisample},set:function(t){this.framebuffer.multisample=t},enumerable:!1,configurable:!0}),/**
     * Resizes the RenderTexture.
     * @param desiredWidth - The desired width to resize to.
     * @param desiredHeight - The desired height to resize to.
     * @param resizeBaseTexture - Should the baseTexture.width and height values be resized as well?
     */e.prototype.resize=function(t,e,r){void 0===r&&(r=!0);var i=this.baseTexture.resolution,n=Math.round(t*i)/i,o=Math.round(e*i)/i;// TODO - could be not required..
this.valid=n>0&&o>0,this._frame.width=this.orig.width=n,this._frame.height=this.orig.height=o,r&&this.baseTexture.resize(n,o),this.updateUvs()},/**
     * Changes the resolution of baseTexture, but does not change framebuffer size.
     * @param resolution - The new resolution to apply to RenderTexture
     */e.prototype.setResolution=function(t){var e=this.baseTexture;e.resolution!==t&&(e.setResolution(t),this.resize(e.width,e.height,!1))},e.create=function(t){for(var r=arguments,i=[],n=1;n<arguments.length;n++)i[n-1]=r[n];return"number"==typeof t&&(np("6.0.0","Arguments (width, height, scaleMode, resolution) have been deprecated."),/* eslint-disable prefer-rest-params */t={width:t,height:i[0],scaleMode:i[1],resolution:i[2]}),new e(new oc(t))},e}(o_),ov=/** @class */function(){/**
     * @param textureOptions - options that will be passed to BaseRenderTexture constructor
     * @param {PIXI.SCALE_MODES} [textureOptions.scaleMode] - See {@link PIXI.SCALE_MODES} for possible values.
     */function t(t){this.texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}return(/**
     * Creates texture with params that were specified in pool constructor.
     * @param realWidth - Width of texture in pixels.
     * @param realHeight - Height of texture in pixels.
     * @param multisample - Number of samples of the framebuffer.
     */t.prototype.createTexture=function(t,e,r){void 0===r&&(r=ts.NONE);var i=new oc(Object.assign({width:t,height:e,resolution:1,multisample:r},this.textureOptions));return new oy(i)},/**
     * Gets a Power-of-Two render texture or fullScreen texture
     * @param minWidth - The minimum width of the render texture.
     * @param minHeight - The minimum height of the render texture.
     * @param resolution - The resolution of the render texture.
     * @param multisample - Number of samples of the render texture.
     * @returns The new render texture.
     */t.prototype.getOptimalTexture=function(t,e,r,i){void 0===r&&(r=1),void 0===i&&(i=ts.NONE),t=Math.ceil(t*r-1e-6),e=Math.ceil(e*r-1e-6),this.enableFullScreen&&t===this._pixelsWidth&&e===this._pixelsHeight?n=i>1?-i:-1:(n=((65535&(t=na(t)))<<16|65535&(e=na(e)))>>>0,i>1&&(n+=4294967296*i)),this.texturePool[n]||(this.texturePool[n]=[]);var n,o=this.texturePool[n].pop();return o||(o=this.createTexture(t,e,i)),o.filterPoolKey=n,o.setResolution(r),o},/**
     * Gets extra texture of the same size as input renderTexture
     *
     * `getFilterTexture(input, 0.5)` or `getFilterTexture(0.5, input)`
     * @param input - renderTexture from which size and resolution will be copied
     * @param resolution - override resolution of the renderTexture
     *  It overrides, it does not multiply
     * @param multisample - number of samples of the renderTexture
     */t.prototype.getFilterTexture=function(t,e,r){var i=this.getOptimalTexture(t.width,t.height,e||t.resolution,r||ts.NONE);return i.filterFrame=t.filterFrame,i},/**
     * Place a render texture back into the pool.
     * @param renderTexture - The renderTexture to free
     */t.prototype.returnTexture=function(t){var e=t.filterPoolKey;t.filterFrame=null,this.texturePool[e].push(t)},/**
     * Alias for returnTexture, to be compliant with FilterSystem interface.
     * @param renderTexture - The renderTexture to free
     */t.prototype.returnFilterTexture=function(t){this.returnTexture(t)},/**
     * Clears the pool.
     * @param destroyTextures - Destroy all stored textures.
     */t.prototype.clear=function(t){if(t=!1!==t)for(var e in this.texturePool){var r=this.texturePool[e];if(r)for(var i=0;i<r.length;i++)r[i].destroy(!0)}this.texturePool={}},/**
     * If screen size was changed, drops all screen-sized textures,
     * sets new screen size, sets `enableFullScreen` to true
     *
     * Size is measured in pixels, `renderer.view` can be passed here, not `renderer.screen`
     * @param size - Initial size of screen.
     */t.prototype.setScreenSize=function(t){if(t.width!==this._pixelsWidth||t.height!==this._pixelsHeight){for(var e in this.enableFullScreen=t.width>0&&t.height>0,this.texturePool)if(0>Number(e)){var r=this.texturePool[e];if(r)for(var i=0;i<r.length;i++)r[i].destroy(!0);this.texturePool[e]=[]}this._pixelsWidth=t.width,this._pixelsHeight=t.height}},/**
     * Key that is used to store fullscreen renderTextures in a pool
     * @constant
     */t.SCREEN_KEY=-1,t)}(),om=/** @class */function(){/**
     * @param buffer - the id of the buffer that this attribute will look for
     * @param size - the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2.
     * @param normalized - should the data be normalized.
     * @param {PIXI.TYPES} [type=PIXI.TYPES.FLOAT] - what type of number is the attribute. Check {@link PIXI.TYPES} to see the ones available
     * @param [stride=0] - How far apart, in bytes, the start of each value is. (used for interleaving data)
     * @param [start=0] - How far into the array to start reading values (used for interleaving data)
     * @param [instance=false] - Whether the geometry is instanced.
     */function t(t,e,r,i,n,o,s){void 0===e&&(e=0),void 0===r&&(r=!1),void 0===i&&(i=K.FLOAT),this.buffer=t,this.size=e,this.normalized=r,this.type=i,this.stride=n,this.start=o,this.instance=s}return(/** Destroys the Attribute. */t.prototype.destroy=function(){this.buffer=null},/**
     * Helper function that creates an Attribute based on the information provided
     * @param buffer - the id of the buffer that this attribute will look for
     * @param [size=0] - the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
     * @param [normalized=false] - should the data be normalized.
     * @param [type=PIXI.TYPES.FLOAT] - what type of number is the attribute. Check {@link PIXI.TYPES} to see the ones available
     * @param [stride=0] - How far apart, in bytes, the start of each value is. (used for interleaving data)
     * @returns - A new {@link PIXI.Attribute} based on the information provided
     */t.from=function(e,r,i,n,o){return new t(e,r,i,n,o)},t)}(),og=0,ob=/** @class */function(){/**
     * @param {PIXI.IArrayBuffer} data - the data to store in the buffer.
     * @param _static - `true` for static buffer
     * @param index - `true` for index buffer
     */function t(t,e,r){void 0===e&&(e=!0),void 0===r&&(r=!1),this.data=t||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=r,this.static=e,this.id=og++,this.disposeRunner=new nZ("disposeBuffer")}return(// TODO could explore flagging only a partial upload?
/**
     * Flags this buffer as requiring an upload to the GPU.
     * @param {PIXI.IArrayBuffer|number[]} [data] - the data to update in the buffer.
     */t.prototype.update=function(t){t instanceof Array&&(t=new Float32Array(t)),this.data=t||this.data,this._updateID++},/** Disposes WebGL resources that are connected to this geometry. */t.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},/** Destroys the buffer. */t.prototype.destroy=function(){this.dispose(),this.data=null},Object.defineProperty(t.prototype,"index",{get:function(){return this.type===ta.ELEMENT_ARRAY_BUFFER},/**
         * Flags whether this is an index buffer.
         *
         * Index buffers are of type `ELEMENT_ARRAY_BUFFER`. Note that setting this property to false will make
         * the buffer of type `ARRAY_BUFFER`.
         *
         * For backwards compatibility.
         */set:function(t){this.type=t?ta.ELEMENT_ARRAY_BUFFER:ta.ARRAY_BUFFER},enumerable:!1,configurable:!0}),/**
     * Helper function that creates a buffer based on an array or TypedArray
     * @param {ArrayBufferView | number[]} data - the TypedArray that the buffer will store. If this is a regular Array it will be converted to a Float32Array.
     * @returns - A new Buffer based on the data provided.
     */t.from=function(e){return e instanceof Array&&(e=new Float32Array(e)),new t(e)},t)}(),ox={Float32Array:Float32Array,Uint32Array:Uint32Array,Int32Array:Int32Array,Uint8Array:Uint8Array},oT={5126:4,5123:2,5121:1},oE=0,oA={Float32Array:Float32Array,Uint32Array:Uint32Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array},oS=/** @class */function(){/**
     * @param buffers - An array of buffers. optional.
     * @param attributes - Of the geometry, optional structure of the attributes layout
     */function t(t,e){void 0===t&&(t=[]),void 0===e&&(e={}),this.buffers=t,this.indexBuffer=null,this.attributes=e,this.glVertexArrayObjects={},this.id=oE++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new nZ("disposeGeometry"),this.refCount=0}return(/**
     *
     * Adds an attribute to the geometry
     * Note: `stride` and `start` should be `undefined` if you dont know them, not 0!
     * @param id - the name of the attribute (matching up to a shader)
     * @param {PIXI.Buffer|number[]} buffer - the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.
     * @param size - the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
     * @param normalized - should the data be normalized.
     * @param [type=PIXI.TYPES.FLOAT] - what type of number is the attribute. Check {PIXI.TYPES} to see the ones available
     * @param [stride=0] - How far apart, in bytes, the start of each value is. (used for interleaving data)
     * @param [start=0] - How far into the array to start reading values (used for interleaving data)
     * @param instance - Instancing flag
     * @returns - Returns self, useful for chaining.
     */t.prototype.addAttribute=function(t,e,r,i,n,o,s,a){if(void 0===r&&(r=0),void 0===i&&(i=!1),void 0===a&&(a=!1),!e)throw Error("You must pass a buffer when creating an attribute");e instanceof ob||(e instanceof Array&&(e=new Float32Array(e)),e=new ob(e));var h=t.split("|");if(h.length>1){for(var u=0;u<h.length;u++)this.addAttribute(h[u],e,r,i,n);return this}var l=this.buffers.indexOf(e);return -1===l&&(this.buffers.push(e),l=this.buffers.length-1),this.attributes[t]=new om(l,r,i,n,o,s,a),// assuming that if there is instanced data then this will be drawn with instancing!
this.instanced=this.instanced||a,this},/**
     * Returns the requested attribute.
     * @param id - The name of the attribute required
     * @returns - The attribute requested.
     */t.prototype.getAttribute=function(t){return this.attributes[t]},/**
     * Returns the requested buffer.
     * @param id - The name of the buffer required.
     * @returns - The buffer requested.
     */t.prototype.getBuffer=function(t){return this.buffers[this.getAttribute(t).buffer]},/**
     *
     * Adds an index buffer to the geometry
     * The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, …). There is only ONE index buffer.
     * @param {PIXI.Buffer|number[]} [buffer] - The buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.
     * @returns - Returns self, useful for chaining.
     */t.prototype.addIndex=function(t){return t instanceof ob||(t instanceof Array&&(t=new Uint16Array(t)),t=new ob(t)),t.type=ta.ELEMENT_ARRAY_BUFFER,this.indexBuffer=t,-1===this.buffers.indexOf(t)&&this.buffers.push(t),this},/**
     * Returns the index buffer
     * @returns - The index buffer.
     */t.prototype.getIndex=function(){return this.indexBuffer},/**
     * This function modifies the structure so that all current attributes become interleaved into a single buffer
     * This can be useful if your model remains static as it offers a little performance boost
     * @returns - Returns self, useful for chaining.
     */t.prototype.interleave=function(){// a simple check to see if buffers are already interleaved..
if(1===this.buffers.length||2===this.buffers.length&&this.indexBuffer)return this;// assume already that no buffers are interleaved
var t,e=[],r=[],i=new ob;for(t in this.attributes){var n=this.attributes[t],o=this.buffers[n.buffer];e.push(o.data),r.push(n.size*oT[n.type]/4),n.buffer=0}for(t=0,i.data=function(t,e){for(var r=0,i=0,n={},o=0;o<t.length;o++)i+=e[o],r+=t[o].length;for(var s=new ArrayBuffer(4*r),a=null,h=0,o=0;o<t.length;o++){var u=e[o],l=t[o],c=ns(l);n[c]||(n[c]=new ox[c](s)),a=n[c];for(var f=0;f<l.length;f++)a[(f/u|0)*i+h+f%u]=l[f];h+=u}return new Float32Array(s)}(e,r);t<this.buffers.length;t++)this.buffers[t]!==this.indexBuffer&&this.buffers[t].destroy();return this.buffers=[i],this.indexBuffer&&this.buffers.push(this.indexBuffer),this},/** Get the size of the geometries, in vertices. */t.prototype.getSize=function(){for(var t in this.attributes){var e=this.attributes[t];return this.buffers[e.buffer].data.length/(e.stride/4||e.size)}return 0},/** Disposes WebGL resources that are connected to this geometry. */t.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},/** Destroys the geometry. */t.prototype.destroy=function(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null},/**
     * Returns a clone of the geometry.
     * @returns - A new clone of this geometry.
     */t.prototype.clone=function(){for(var e=new t,r=0;r<this.buffers.length;r++)e.buffers[r]=new ob(this.buffers[r].data.slice(0));for(var r in this.attributes){var i=this.attributes[r];e.attributes[r]=new om(i.buffer,i.size,i.normalized,i.type,i.stride,i.start,i.instance)}return this.indexBuffer&&(e.indexBuffer=e.buffers[this.buffers.indexOf(this.indexBuffer)],e.indexBuffer.type=ta.ELEMENT_ARRAY_BUFFER),e},/**
     * Merges an array of geometries into a new single one.
     *
     * Geometry attribute styles must match for this operation to work.
     * @param geometries - array of geometries to merge
     * @returns - Shiny new geometry!
     */t.merge=function(e){// pass one.. get sizes..
for(var r,i=new t,n=[],o=[],s=[],a=0;a<e.length;a++){r=e[a];for(var h=0;h<r.buffers.length;h++)o[h]=o[h]||0,o[h]+=r.buffers[h].data.length,s[h]=0}// build the correct size arrays..
for(var a=0;a<r.buffers.length;a++)// TODO types!
n[a]=new oA[ns(r.buffers[a].data)](o[a]),i.buffers[a]=new ob(n[a]);// pass to set data..
for(var a=0;a<e.length;a++){r=e[a];for(var h=0;h<r.buffers.length;h++)n[h].set(r.buffers[h].data,s[h]),s[h]+=r.buffers[h].data.length}if(i.attributes=r.attributes,r.indexBuffer){i.indexBuffer=i.buffers[r.buffers.indexOf(r.indexBuffer)],i.indexBuffer.type=ta.ELEMENT_ARRAY_BUFFER;// get a buffer
for(var u=0,l=0,c=0,f=0,a=0;a<r.buffers.length;a++)if(r.buffers[a]!==r.indexBuffer){f=a;break}// figure out the stride of one buffer..
for(var a in r.attributes){var p=r.attributes[a];(0|p.buffer)===f&&(l+=p.size*oT[p.type]/4)}// time to off set all indexes..
for(var a=0;a<e.length;a++){for(var d=e[a].indexBuffer.data,h=0;h<d.length;h++)i.indexBuffer.data[h+c]+=u;u+=e[a].buffers[f].data.length/l,c+=d.length}}return i},t)}(),oR=/** @class */function(t){function e(){var e=t.call(this)||this;return e.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2]),e}return n3(e,t),e}(oS),oO=/** @class */function(t){function e(){var e=t.call(this)||this;return e.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),e.uvs=new Float32Array([0,0,1,0,1,1,0,1]),e.vertexBuffer=new ob(e.vertices),e.uvBuffer=new ob(e.uvs),e.addAttribute("aVertexPosition",e.vertexBuffer).addAttribute("aTextureCoord",e.uvBuffer).addIndex([0,1,2,0,2,3]),e}return n3(e,t),/**
     * Maps two Rectangle to the quad.
     * @param targetTextureFrame - The first rectangle
     * @param destinationFrame - The second rectangle
     * @returns - Returns itself.
     */e.prototype.map=function(t,e){var r=0,i=0;// destinationFrame.x / targetTextureFrame.width;
return this.uvs[0]=r,this.uvs[1]=i,this.uvs[2]=r+e.width/t.width,this.uvs[3]=i,this.uvs[4]=r+e.width/t.width,this.uvs[5]=i+e.height/t.height,this.uvs[6]=r,this.uvs[7]=i+e.height/t.height,r=e.x,i=e.y,this.vertices[0]=r,this.vertices[1]=i,this.vertices[2]=r+e.width,this.vertices[3]=i,this.vertices[4]=r+e.width,this.vertices[5]=i+e.height,this.vertices[6]=r,this.vertices[7]=i+e.height,this.invalidate(),this},/**
     * Legacy upload method, just marks buffers dirty.
     * @returns - Returns itself.
     */e.prototype.invalidate=function(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this},e}(oS),oI=0,oP=/** @class */function(){/**
     * @param {object | Buffer} [uniforms] - Custom uniforms to use to augment the built-in ones. Or a pixi buffer.
     * @param isStatic - Uniforms wont be changed after creation.
     * @param isUbo - If true, will treat this uniform group as a uniform buffer object.
     */function t(t,e,r){this.group=!0,// lets generate this when the shader ?
this.syncUniforms={},this.dirtyId=0,this.id=oI++,this.static=!!e,this.ubo=!!r,t instanceof ob?(this.buffer=t,this.buffer.type=ta.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=t,this.ubo&&(this.buffer=new ob(new Float32Array(1)),this.buffer.type=ta.UNIFORM_BUFFER,this.autoManage=!0))}return t.prototype.update=function(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()},t.prototype.add=function(e,r,i){if(this.ubo)throw Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");this.uniforms[e]=new t(r,i)},t.from=function(e,r,i){return new t(e,r,i)},/**
     * A short hand function for creating a static UBO UniformGroup.
     * @param uniforms - the ubo item
     * @param _static - should this be updated each time it is used? defaults to true here!
     */t.uboFrom=function(e,r){return new t(e,null==r||r,!0)},t}(),ow=/** @class */function(){function t(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=ts.NONE,// next three fields are created only for root
// re-assigned for everything else
this.sourceFrame=new nA,this.destinationFrame=new nA,this.bindingSourceFrame=new nA,this.bindingDestinationFrame=new nA,this.filters=[],this.transform=null}return(/** Clears the state */t.prototype.clear=function(){this.target=null,this.filters=null,this.renderTexture=null},t)}(),oM=[new nT,new nT,new nT,new nT],oD=new nw,oC=/** @class */function(){/**
     * @param renderer - The renderer this System works for.
     */function t(t){this.renderer=t,this.defaultFilterStack=[{}],this.texturePool=new ov,this.texturePool.setScreenSize(t.view),this.statePool=[],this.quad=new oR,this.quadUv=new oO,this.tempRect=new nA,this.activeState={},this.globalUniforms=new oP({outputFrame:new nA,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,// legacy variables
filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}return(/**
     * Pushes a set of filters to be applied later to the system. This will redirect further rendering into an
     * input render-texture for the rest of the filtering pipeline.
     * @param {PIXI.DisplayObject} target - The target of the filter to render.
     * @param filters - The filters to apply.
     */t.prototype.push=function(t,e){for(var r,i,n=this.renderer,o=this.defaultFilterStack,s=this.statePool.pop()||new ow,a=this.renderer.renderTexture,h=e[0].resolution,u=e[0].multisample,l=e[0].padding,c=e[0].autoFit,f=null===(r=e[0].legacy)||void 0===r||r,p=1;p<e.length;p++){var d=e[p];// let's use the lowest resolution
h=Math.min(h,d.resolution),// let's use the lowest number of samples
u=Math.min(u,d.multisample),// figure out the padding required for filters
l=this.useMaxPadding?Math.max(l,d.padding):l+d.padding,// only auto fit if all filters are autofit
c=c&&d.autoFit,f=f||null===(i=d.legacy)||void 0===i||i}1===o.length&&(this.defaultFilterStack[0].renderTexture=a.current),o.push(s),s.resolution=h,s.multisample=u,s.legacy=f,s.target=t,s.sourceFrame.copyFrom(t.filterArea||t.getBounds(!0)),s.sourceFrame.pad(l);var _=this.tempRect.copyFrom(a.sourceFrame);n.projection.transform&&this.transformAABB(oD.copyFrom(n.projection.transform).invert(),_),c?(s.sourceFrame.fit(_),(s.sourceFrame.width<=0||s.sourceFrame.height<=0)&&(s.sourceFrame.width=0,s.sourceFrame.height=0)):s.sourceFrame.intersects(_)||(s.sourceFrame.width=0,s.sourceFrame.height=0),// Round sourceFrame in screen space based on render-texture.
this.roundFrame(s.sourceFrame,a.current?a.current.resolution:n.resolution,a.sourceFrame,a.destinationFrame,n.projection.transform),s.renderTexture=this.getOptimalFilterTexture(s.sourceFrame.width,s.sourceFrame.height,h,u),s.filters=e,s.destinationFrame.width=s.renderTexture.width,s.destinationFrame.height=s.renderTexture.height;var y=this.tempRect;y.x=0,y.y=0,y.width=s.sourceFrame.width,y.height=s.sourceFrame.height,s.renderTexture.filterFrame=s.sourceFrame,s.bindingSourceFrame.copyFrom(a.sourceFrame),s.bindingDestinationFrame.copyFrom(a.destinationFrame),s.transform=n.projection.transform,n.projection.transform=null,a.bind(s.renderTexture,s.sourceFrame,y),n.framebuffer.clear(0,0,0,0)},/** Pops off the filter and applies it. */t.prototype.pop=function(){var t=this.defaultFilterStack,e=t.pop(),r=e.filters;this.activeState=e;var i=this.globalUniforms.uniforms;i.outputFrame=e.sourceFrame,i.resolution=e.resolution;var n=i.inputSize,o=i.inputPixel,s=i.inputClamp;// only update the rect if its legacy..
if(n[0]=e.destinationFrame.width,n[1]=e.destinationFrame.height,n[2]=1/n[0],n[3]=1/n[1],o[0]=Math.round(n[0]*e.resolution),o[1]=Math.round(n[1]*e.resolution),o[2]=1/o[0],o[3]=1/o[1],s[0]=.5*o[2],s[1]=.5*o[3],s[2]=e.sourceFrame.width*n[2]-.5*o[2],s[3]=e.sourceFrame.height*n[3]-.5*o[3],e.legacy){var a=i.filterArea;a[0]=e.destinationFrame.width,a[1]=e.destinationFrame.height,a[2]=e.sourceFrame.x,a[3]=e.sourceFrame.y,i.filterClamp=i.inputClamp}this.globalUniforms.update();var h=t[t.length-1];if(this.renderer.framebuffer.blit(),1===r.length)r[0].apply(this,e.renderTexture,h.renderTexture,te.BLEND,e),this.returnFilterTexture(e.renderTexture);else{var u=e.renderTexture,l=this.getOptimalFilterTexture(u.width,u.height,e.resolution);l.filterFrame=u.filterFrame;var c=0;for(c=0;c<r.length-1;++c){1===c&&e.multisample>1&&((l=this.getOptimalFilterTexture(u.width,u.height,e.resolution)).filterFrame=u.filterFrame),r[c].apply(this,u,l,te.CLEAR,e);var f=u;u=l,l=f}r[c].apply(this,u,h.renderTexture,te.BLEND,e),c>1&&e.multisample>1&&this.returnFilterTexture(e.renderTexture),this.returnFilterTexture(u),this.returnFilterTexture(l)}// lastState.renderTexture is blitted when lastState is popped
e.clear(),this.statePool.push(e)},/**
     * Binds a renderTexture with corresponding `filterFrame`, clears it if mode corresponds.
     * @param filterTexture - renderTexture to bind, should belong to filter pool or filter stack
     * @param clearMode - clearMode, by default its CLEAR/YES. See {@link PIXI.CLEAR_MODES}
     */t.prototype.bindAndClear=function(t,e){void 0===e&&(e=te.CLEAR);var r=this.renderer,i=r.renderTexture,n=r.state;if(t===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,t&&t.filterFrame){var o=this.tempRect;o.x=0,o.y=0,o.width=t.filterFrame.width,o.height=t.filterFrame.height,i.bind(t,t.filterFrame,o)}else t!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?i.bind(t):this.renderer.renderTexture.bind(t,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);// Clear the texture in BLIT mode if blending is disabled or the forceClear flag is set. The blending
// is stored in the 0th bit of the state.
var s=1&n.stateId||this.forceClear;(e===te.CLEAR||e===te.BLIT&&s)&&// area over which the shaders are run. This is because filters may sampling outside of it (e.g. blur)
// instead of clamping their arithmetic.
this.renderer.framebuffer.clear(0,0,0,0)},/**
     * Draws a filter using the default rendering process.
     *
     * This should be called only by {@link Filter#apply}.
     * @param filter - The filter to draw.
     * @param input - The input render target.
     * @param output - The target to output to.
     * @param clearMode - Should the output be cleared before rendering to it
     */t.prototype.applyFilter=function(t,e,r,i){var n=this.renderer;// Set state before binding, so bindAndClear gets the blend mode.
n.state.set(t.state),this.bindAndClear(r,i),// set the uniforms..
t.uniforms.uSampler=e,t.uniforms.filterGlobals=this.globalUniforms,// TODO make it so that the order of this does not matter..
// because it does at the moment cos of global uniforms.
// they need to get resynced
n.shader.bind(t),// check to see if the filter is a legacy one..
t.legacy=!!t.program.attributeData.aTextureCoord,t.legacy?(this.quadUv.map(e._frame,e.filterFrame),n.geometry.bind(this.quadUv),n.geometry.draw(V.TRIANGLES)):(n.geometry.bind(this.quad),n.geometry.draw(V.TRIANGLE_STRIP))},/**
     * Multiply _input normalized coordinates_ to this matrix to get _sprite texture normalized coordinates_.
     *
     * Use `outputMatrix * vTextureCoord` in the shader.
     * @param outputMatrix - The matrix to output to.
     * @param {PIXI.Sprite} sprite - The sprite to map to.
     * @returns The mapped matrix.
     */t.prototype.calculateSpriteMatrix=function(t,e){var r=this.activeState,i=r.sourceFrame,n=r.destinationFrame,o=e._texture.orig,s=t.set(n.width,0,0,n.height,i.x,i.y),a=e.worldTransform.copyTo(nw.TEMP_MATRIX);return a.invert(),s.prepend(a),s.scale(1/o.width,1/o.height),s.translate(e.anchor.x,e.anchor.y),s},/** Destroys this Filter System. */t.prototype.destroy=function(){this.renderer=null,// Those textures has to be destroyed by RenderTextureSystem or FramebufferSystem
this.texturePool.clear(!1)},/**
     * Gets a Power-of-Two render texture or fullScreen texture
     * @param minWidth - The minimum width of the render texture in real pixels.
     * @param minHeight - The minimum height of the render texture in real pixels.
     * @param resolution - The resolution of the render texture.
     * @param multisample - Number of samples of the render texture.
     * @returns - The new render texture.
     */t.prototype.getOptimalFilterTexture=function(t,e,r,i){return void 0===r&&(r=1),void 0===i&&(i=ts.NONE),this.texturePool.getOptimalTexture(t,e,r,i)},/**
     * Gets extra render texture to use inside current filter
     * To be compliant with older filters, you can use params in any order
     * @param input - renderTexture from which size and resolution will be copied
     * @param resolution - override resolution of the renderTexture
     * @param multisample - number of samples of the renderTexture
     */t.prototype.getFilterTexture=function(t,e,r){if("number"==typeof t){var i=t;t=e,e=i}t=t||this.activeState.renderTexture;var n=this.texturePool.getOptimalTexture(t.width,t.height,e||t.resolution,r||ts.NONE);return n.filterFrame=t.filterFrame,n},/**
     * Frees a render texture back into the pool.
     * @param renderTexture - The renderTarget to free
     */t.prototype.returnFilterTexture=function(t){this.texturePool.returnTexture(t)},/** Empties the texture pool. */t.prototype.emptyPool=function(){this.texturePool.clear(!0)},/** Calls `texturePool.resize()`, affects fullScreen renderTextures. */t.prototype.resize=function(){this.texturePool.setScreenSize(this.renderer.view)},/**
     * @param matrix - first param
     * @param rect - second param
     */t.prototype.transformAABB=function(t,e){var r=oM[0],i=oM[1],n=oM[2],o=oM[3];r.set(e.left,e.top),i.set(e.left,e.bottom),n.set(e.right,e.top),o.set(e.right,e.bottom),t.apply(r,r),t.apply(i,i),t.apply(n,n),t.apply(o,o);var s=Math.min(r.x,i.x,n.x,o.x),a=Math.min(r.y,i.y,n.y,o.y),h=Math.max(r.x,i.x,n.x,o.x),u=Math.max(r.y,i.y,n.y,o.y);e.x=s,e.y=a,e.width=h-s,e.height=u-a},t.prototype.roundFrame=function(t,e,r,i,n){if(!(t.width<=0)&&!(t.height<=0)&&!(r.width<=0)&&!(r.height<=0)){if(n){var o=n.a,s=n.b,a=n.c,h=n.d;// Skip if skew/rotation present in matrix, except for multiple of 90° rotation. If rotation
// is a multiple of 90°, then either pair of (b,c) or (a,d) will be (0,0).
if((Math.abs(s)>1e-4||Math.abs(a)>1e-4)&&(Math.abs(o)>1e-4||Math.abs(h)>1e-4))return}// Get forward transform from world space to screen space
(n=n?oD.copyFrom(n):oD.identity()).translate(-r.x,-r.y).scale(i.width/r.width,i.height/r.height).translate(i.x,i.y),// Convert frame to screen space
this.transformAABB(n,t),// Round frame in screen space
t.ceil(e),// Project back into world space.
this.transformAABB(n.invert(),t)}},t)}(),oF=/** @class */function(){/**
     * @param renderer - The renderer this manager works for.
     */function t(t){this.renderer=t}return(/** Stub method that should be used to empty the current batch by rendering objects now. */t.prototype.flush=function(){// flush!
},/** Generic destruction method that frees all resources. This should be called by subclasses. */t.prototype.destroy=function(){this.renderer=null},/**
     * Stub method that initializes any state required before
     * rendering starts. It is different from the `prerender`
     * signal, which occurs every frame, in that it is called
     * whenever an object requests _this_ renderer specifically.
     */t.prototype.start=function(){// set the shader..
},/** Stops the renderer. It should free up any state and become dormant. */t.prototype.stop=function(){this.flush()},/**
     * Keeps the object to render. It doesn't have to be
     * rendered immediately.
     * @param {PIXI.DisplayObject} _object - The object to render.
     */t.prototype.render=function(t){// render the object
},t)}(),oN=/** @class */function(){/**
     * @param renderer - The renderer this System works for.
     */function t(t){this.renderer=t,this.emptyRenderer=new oF(t),this.currentRenderer=this.emptyRenderer}return(/**
     * Changes the current renderer to the one given in parameter
     * @param objectRenderer - The object renderer to use.
     */t.prototype.setObjectRenderer=function(t){this.currentRenderer!==t&&(this.currentRenderer.stop(),this.currentRenderer=t,this.currentRenderer.start())},/**
     * This should be called if you wish to do some custom rendering
     * It will basically render anything that may be batched up such as sprites
     */t.prototype.flush=function(){this.setObjectRenderer(this.emptyRenderer)},/** Reset the system to an empty renderer */t.prototype.reset=function(){this.setObjectRenderer(this.emptyRenderer)},/**
     * Handy function for batch renderers: copies bound textures in first maxTextures locations to array
     * sets actual _batchLocation for them
     * @param arr - arr copy destination
     * @param maxTextures - number of copied elements
     */t.prototype.copyBoundTextures=function(t,e){for(var r=this.renderer.texture.boundTextures,i=e-1;i>=0;--i)t[i]=r[i]||null,t[i]&&(t[i]._batchLocation=i)},/**
     * Assigns batch locations to textures in array based on boundTextures state.
     * All textures in texArray should have `_batchEnabled = _batchId`,
     * and their count should be less than `maxTextures`.
     * @param texArray - textures to bound
     * @param boundTextures - current state of bound textures
     * @param batchId - marker for _batchEnabled param of textures in texArray
     * @param maxTextures - number of texture locations to manipulate
     */t.prototype.boundArray=function(t,e,r,i){for(var n=t.elements,o=t.ids,s=t.count,a=0,h=0;h<s;h++){var u=n[h],l=u._batchLocation;if(l>=0&&l<i&&e[l]===u){o[h]=l;continue}for(;a<i;){var c=e[a];if(c&&c._batchEnabled===r&&c._batchLocation===a){a++;continue}o[h]=a,u._batchLocation=a,e[a]=u;break}}},/**
     * @ignore
     */t.prototype.destroy=function(){this.renderer=null},t)}(),oL=0,oB=/** @class */function(){/** @param renderer - The renderer this System works for. */function t(t){this.renderer=t,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},// Bind functions
this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),t.view.addEventListener("webglcontextlost",this.handleContextLost,!1),t.view.addEventListener("webglcontextrestored",this.handleContextRestored,!1)}return Object.defineProperty(t.prototype,"isLost",{/**
         * `true` if the context is lost
         * @readonly
         */get:function(){return!this.gl||this.gl.isContextLost()},enumerable:!1,configurable:!0}),/**
     * Handles the context change event.
     * @param {WebGLRenderingContext} gl - New WebGL context.
     */t.prototype.contextChange=function(t){this.gl=t,this.renderer.gl=t,this.renderer.CONTEXT_UID=oL++},/**
     * Initializes the context.
     * @protected
     * @param {WebGLRenderingContext} gl - WebGL context
     */t.prototype.initFromContext=function(t){this.gl=t,this.validateContext(t),this.renderer.gl=t,this.renderer.CONTEXT_UID=oL++,this.renderer.runners.contextChange.emit(t)},/**
     * Initialize from context options
     * @protected
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
     * @param {object} options - context attributes
     */t.prototype.initFromOptions=function(t){var e=this.createContext(this.renderer.view,t);this.initFromContext(e)},/**
     * Helper class to create a WebGL Context
     * @param canvas - the canvas element that we will get the context from
     * @param options - An options object that gets passed in to the canvas element containing the
     *    context attributes
     * @see https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/getContext
     * @returns {WebGLRenderingContext} the WebGL context
     */t.prototype.createContext=function(t,e){var r;if(eh.PREFER_ENV>=j.WEBGL2&&(r=t.getContext("webgl2",e)),r)this.webGLVersion=2;else if(this.webGLVersion=1,!(r=t.getContext("webgl",e)||t.getContext("experimental-webgl",e)))throw Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=r,this.getExtensions(),this.gl},/** Auto-populate the {@link PIXI.ContextSystem.extensions extensions}. */t.prototype.getExtensions=function(){// time to set up default extensions that Pixi uses.
var t=this.gl,e={loseContext:t.getExtension("WEBGL_lose_context"),anisotropicFiltering:t.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:t.getExtension("OES_texture_float_linear"),s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:t.getExtension("WEBGL_compressed_texture_etc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:t.getExtension("WEBGL_compressed_texture_atc"),astc:t.getExtension("WEBGL_compressed_texture_astc")};1===this.webGLVersion?Object.assign(this.extensions,e,{drawBuffers:t.getExtension("WEBGL_draw_buffers"),depthTexture:t.getExtension("WEBGL_depth_texture"),vertexArrayObject:t.getExtension("OES_vertex_array_object")||t.getExtension("MOZ_OES_vertex_array_object")||t.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:t.getExtension("OES_element_index_uint"),// Floats and half-floats
floatTexture:t.getExtension("OES_texture_float"),floatTextureLinear:t.getExtension("OES_texture_float_linear"),textureHalfFloat:t.getExtension("OES_texture_half_float"),textureHalfFloatLinear:t.getExtension("OES_texture_half_float_linear")}):2===this.webGLVersion&&Object.assign(this.extensions,e,{// Floats and half-floats
colorBufferFloat:t.getExtension("EXT_color_buffer_float")})},/**
     * Handles a lost webgl context
     * @param {WebGLContextEvent} event - The context lost event.
     */t.prototype.handleContextLost=function(t){var e=this;// Prevent default to be able to restore the context
t.preventDefault(),// Restore the context after this event has exited
setTimeout(function(){e.gl.isContextLost()&&e.extensions.loseContext&&e.extensions.loseContext.restoreContext()},0)},/** Handles a restored webgl context. */t.prototype.handleContextRestored=function(){this.renderer.runners.contextChange.emit(this.gl)},t.prototype.destroy=function(){var t=this.renderer.view;this.renderer=null,// remove listeners
t.removeEventListener("webglcontextlost",this.handleContextLost),t.removeEventListener("webglcontextrestored",this.handleContextRestored),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()},/** Handle the post-render runner event. */t.prototype.postrender=function(){this.renderer.renderingToScreen&&this.gl.flush()},/**
     * Validate context.
     * @param {WebGLRenderingContext} gl - Render context.
     */t.prototype.validateContext=function(t){var e=t.getContextAttributes(),r="WebGL2RenderingContext"in globalThis&&t instanceof globalThis.WebGL2RenderingContext;r&&(this.webGLVersion=2),e&&!e.stencil&&/* eslint-disable max-len, no-console */console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");var i=r||!!t.getExtension("OES_element_index_uint");this.supports.uint32Indices=i,i||/* eslint-disable max-len, no-console */console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")},t}(),oG=function(t){this.framebuffer=t,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=ts.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0},oU=new nA,ok=/** @class */function(){/**
     * @param renderer - The renderer this System works for.
     */function t(t){this.renderer=t,this.managedFramebuffers=[],this.unknownFramebuffer=new ol(10,10),this.msaaSamples=null}return(/** Sets up the renderer context and necessary buffers. */t.prototype.contextChange=function(){this.disposeAll(!0);var t=this.gl=this.renderer.gl;// webgl2
if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new nA,this.hasMRT=!0,this.writeDepthTexture=!0,1===this.renderer.context.webGLVersion){// webgl 1!
var e=this.renderer.context.extensions.drawBuffers,r=this.renderer.context.extensions.depthTexture;eh.PREFER_ENV===j.WEBGL_LEGACY&&(e=null,r=null),e?t.drawBuffers=function(t){return e.drawBuffersWEBGL(t)}:(this.hasMRT=!1,t.drawBuffers=function(){// empty
}),r||(this.writeDepthTexture=!1)}else // cache possible MSAA samples
this.msaaSamples=t.getInternalformatParameter(t.RENDERBUFFER,t.RGBA8,t.SAMPLES)},/**
     * Bind a framebuffer.
     * @param framebuffer
     * @param frame - frame, default is framebuffer size
     * @param mipLevel - optional mip level to set on the framebuffer - defaults to 0
     */t.prototype.bind=function(t,e,r){void 0===r&&(r=0);var i=this.gl;if(t){// TODO caching layer!
var n=t.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(t);this.current!==t&&(this.current=t,i.bindFramebuffer(i.FRAMEBUFFER,n.framebuffer)),n.mipLevel!==r&&(t.dirtyId++,t.dirtyFormat++,n.mipLevel=r),n.dirtyId!==t.dirtyId&&(n.dirtyId=t.dirtyId,n.dirtyFormat!==t.dirtyFormat?(n.dirtyFormat=t.dirtyFormat,n.dirtySize=t.dirtySize,this.updateFramebuffer(t,r)):n.dirtySize!==t.dirtySize&&(n.dirtySize=t.dirtySize,this.resizeFramebuffer(t)));for(var o=0;o<t.colorTextures.length;o++){var s=t.colorTextures[o];this.renderer.texture.unbind(s.parentTextureArray||s)}if(t.depthTexture&&this.renderer.texture.unbind(t.depthTexture),e){var a=e.width>>r,h=e.height>>r,u=a/e.width;this.setViewport(e.x*u,e.y*u,a,h)}else{var a=t.width>>r,h=t.height>>r;this.setViewport(0,0,a,h)}}else this.current&&(this.current=null,i.bindFramebuffer(i.FRAMEBUFFER,null)),e?this.setViewport(e.x,e.y,e.width,e.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)},/**
     * Set the WebGLRenderingContext's viewport.
     * @param x - X position of viewport
     * @param y - Y position of viewport
     * @param width - Width of viewport
     * @param height - Height of viewport
     */t.prototype.setViewport=function(t,e,r,i){var n=this.viewport;t=Math.round(t),e=Math.round(e),r=Math.round(r),i=Math.round(i),(n.width!==r||n.height!==i||n.x!==t||n.y!==e)&&(n.x=t,n.y=e,n.width=r,n.height=i,this.gl.viewport(t,e,r,i))},Object.defineProperty(t.prototype,"size",{/**
         * Get the size of the current width and height. Returns object with `width` and `height` values.
         * @readonly
         */get:function(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}},enumerable:!1,configurable:!0}),/**
     * Clear the color of the context
     * @param r - Red value from 0 to 1
     * @param g - Green value from 0 to 1
     * @param b - Blue value from 0 to 1
     * @param a - Alpha value from 0 to 1
     * @param {PIXI.BUFFER_BITS} [mask=BUFFER_BITS.COLOR | BUFFER_BITS.DEPTH] - Bitwise OR of masks
     *  that indicate the buffers to be cleared, by default COLOR and DEPTH buffers.
     */t.prototype.clear=function(t,e,r,i,n){void 0===n&&(n=Y.COLOR|Y.DEPTH);var o=this.gl;// TODO clear color can be set only one right?
o.clearColor(t,e,r,i),o.clear(n)},/**
     * Initialize framebuffer for this context
     * @protected
     * @param framebuffer
     * @returns - created GLFramebuffer
     */t.prototype.initFramebuffer=function(t){var e=this.gl,r=new oG(e.createFramebuffer());return r.multisample=this.detectSamples(t.multisample),t.glFramebuffers[this.CONTEXT_UID]=r,this.managedFramebuffers.push(t),t.disposeRunner.add(this),r},/**
     * Resize the framebuffer
     * @param framebuffer
     * @protected
     */t.prototype.resizeFramebuffer=function(t){var e=this.gl,r=t.glFramebuffers[this.CONTEXT_UID];r.msaaBuffer&&(e.bindRenderbuffer(e.RENDERBUFFER,r.msaaBuffer),e.renderbufferStorageMultisample(e.RENDERBUFFER,r.multisample,e.RGBA8,t.width,t.height)),r.stencil&&(e.bindRenderbuffer(e.RENDERBUFFER,r.stencil),r.msaaBuffer?e.renderbufferStorageMultisample(e.RENDERBUFFER,r.multisample,e.DEPTH24_STENCIL8,t.width,t.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,t.width,t.height));var i=t.colorTextures,n=i.length;e.drawBuffers||(n=Math.min(n,1));for(var o=0;o<n;o++){var s=i[o],a=s.parentTextureArray||s;this.renderer.texture.bind(a,0)}t.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(t.depthTexture,0)},/**
     * Update the framebuffer
     * @param framebuffer
     * @param mipLevel
     * @protected
     */t.prototype.updateFramebuffer=function(t,e){var r=this.gl,i=t.glFramebuffers[this.CONTEXT_UID],n=t.colorTextures,o=n.length;r.drawBuffers||(o=Math.min(o,1)),i.multisample>1&&this.canMultisampleFramebuffer(t)?(i.msaaBuffer=i.msaaBuffer||r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,i.msaaBuffer),r.renderbufferStorageMultisample(r.RENDERBUFFER,i.multisample,r.RGBA8,t.width,t.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,i.msaaBuffer)):i.msaaBuffer&&(r.deleteRenderbuffer(i.msaaBuffer),i.msaaBuffer=null,i.blitFramebuffer&&(i.blitFramebuffer.dispose(),i.blitFramebuffer=null));for(var s=[],a=0;a<o;a++){var h=n[a],u=h.parentTextureArray||h;this.renderer.texture.bind(u,0),0===a&&i.msaaBuffer||(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+a,h.target,u._glTextures[this.CONTEXT_UID].texture,e),s.push(r.COLOR_ATTACHMENT0+a))}if(s.length>1&&r.drawBuffers(s),t.depthTexture&&this.writeDepthTexture){var l=t.depthTexture;this.renderer.texture.bind(l,0),r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,l._glTextures[this.CONTEXT_UID].texture,e)}(t.stencil||t.depth)&&!(t.depthTexture&&this.writeDepthTexture)?(i.stencil=i.stencil||r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,i.stencil),i.msaaBuffer?r.renderbufferStorageMultisample(r.RENDERBUFFER,i.multisample,r.DEPTH24_STENCIL8,t.width,t.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,t.width,t.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,i.stencil)):i.stencil&&(r.deleteRenderbuffer(i.stencil),i.stencil=null)},/**
     * Returns true if the frame buffer can be multisampled.
     * @param framebuffer
     */t.prototype.canMultisampleFramebuffer=function(t){return 1!==this.renderer.context.webGLVersion&&t.colorTextures.length<=1&&!t.depthTexture},/**
     * Detects number of samples that is not more than a param but as close to it as possible
     * @param samples - number of samples
     * @returns - recommended number of samples
     */t.prototype.detectSamples=function(t){var e=this.msaaSamples,r=ts.NONE;if(t<=1||null===e)return r;for(var i=0;i<e.length;i++)if(e[i]<=t){r=e[i];break}return 1===r&&(r=ts.NONE),r},/**
     * Only works with WebGL2
     *
     * blits framebuffer to another of the same or bigger size
     * after that target framebuffer is bound
     *
     * Fails with WebGL warning if blits multisample framebuffer to different size
     * @param framebuffer - by default it blits "into itself", from renderBuffer to texture.
     * @param sourcePixels - source rectangle in pixels
     * @param destPixels - dest rectangle in pixels, assumed to be the same as sourcePixels
     */t.prototype.blit=function(t,e,r){var i=this.current,n=this.renderer,o=this.gl,s=this.CONTEXT_UID;if(2===n.context.webGLVersion&&i){var a=i.glFramebuffers[s];if(a){if(!t){if(!a.msaaBuffer)return;var h=i.colorTextures[0];if(!h)return;a.blitFramebuffer||(a.blitFramebuffer=new ol(i.width,i.height),a.blitFramebuffer.addColorTexture(0,h)),(t=a.blitFramebuffer).colorTextures[0]!==h&&(t.colorTextures[0]=h,t.dirtyId++,t.dirtyFormat++),(t.width!==i.width||t.height!==i.height)&&(t.width=i.width,t.height=i.height,t.dirtyId++,t.dirtySize++)}e||((e=oU).width=i.width,e.height=i.height),r||(r=e);var u=e.width===r.width&&e.height===r.height;this.bind(t),o.bindFramebuffer(o.READ_FRAMEBUFFER,a.framebuffer),o.blitFramebuffer(e.left,e.top,e.right,e.bottom,r.left,r.top,r.right,r.bottom,o.COLOR_BUFFER_BIT,u?o.NEAREST:o.LINEAR)}}},/**
     * Disposes framebuffer.
     * @param framebuffer - framebuffer that has to be disposed of
     * @param contextLost - If context was lost, we suppress all delete function calls
     */t.prototype.disposeFramebuffer=function(t,e){var r=t.glFramebuffers[this.CONTEXT_UID],i=this.gl;if(r){delete t.glFramebuffers[this.CONTEXT_UID];var n=this.managedFramebuffers.indexOf(t);n>=0&&this.managedFramebuffers.splice(n,1),t.disposeRunner.remove(this),!e&&(i.deleteFramebuffer(r.framebuffer),r.msaaBuffer&&i.deleteRenderbuffer(r.msaaBuffer),r.stencil&&i.deleteRenderbuffer(r.stencil)),r.blitFramebuffer&&r.blitFramebuffer.dispose()}},/**
     * Disposes all framebuffers, but not textures bound to them.
     * @param [contextLost=false] - If context was lost, we suppress all delete function calls
     */t.prototype.disposeAll=function(t){var e=this.managedFramebuffers;this.managedFramebuffers=[];for(var r=0;r<e.length;r++)this.disposeFramebuffer(e[r],t)},/**
     * Forcing creation of stencil buffer for current framebuffer, if it wasn't done before.
     * Used by MaskSystem, when its time to use stencil mask for Graphics element.
     *
     * Its an alternative for public lazy `framebuffer.enableStencil`, in case we need stencil without rebind.
     * @private
     */t.prototype.forceStencil=function(){var t=this.current;if(t){var e=t.glFramebuffers[this.CONTEXT_UID];if(e&&!e.stencil){t.stencil=!0;var r=t.width,i=t.height,n=this.gl,o=n.createRenderbuffer();n.bindRenderbuffer(n.RENDERBUFFER,o),e.msaaBuffer?n.renderbufferStorageMultisample(n.RENDERBUFFER,e.multisample,n.DEPTH24_STENCIL8,r,i):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,r,i),e.stencil=o,n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,o)}}},/** Resets framebuffer stored state, binds screen framebuffer. Should be called before renderTexture reset(). */t.prototype.reset=function(){this.current=this.unknownFramebuffer,this.viewport=new nA},t.prototype.destroy=function(){this.renderer=null},t)}(),oX={5126:4,5123:2,5121:1},oj=/** @class */function(){/** @param renderer - The renderer this System works for. */function t(t){this.renderer=t,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}return(/** Sets up the renderer context and necessary buffers. */t.prototype.contextChange=function(){this.disposeAll(!0);var t=this.gl=this.renderer.gl,e=this.renderer.context;// webgl2
if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,2!==e.webGLVersion){// webgl 1!
var r=this.renderer.context.extensions.vertexArrayObject;eh.PREFER_ENV===j.WEBGL_LEGACY&&(r=null),r?(t.createVertexArray=function(){return r.createVertexArrayOES()},t.bindVertexArray=function(t){return r.bindVertexArrayOES(t)},t.deleteVertexArray=function(t){return r.deleteVertexArrayOES(t)}):(this.hasVao=!1,t.createVertexArray=function(){return null},t.bindVertexArray=function(){return null},t.deleteVertexArray=function(){return null})}if(2!==e.webGLVersion){var i=t.getExtension("ANGLE_instanced_arrays");i?(t.vertexAttribDivisor=function(t,e){return i.vertexAttribDivisorANGLE(t,e)},t.drawElementsInstanced=function(t,e,r,n,o){return i.drawElementsInstancedANGLE(t,e,r,n,o)},t.drawArraysInstanced=function(t,e,r,n){return i.drawArraysInstancedANGLE(t,e,r,n)}):this.hasInstance=!1}this.canUseUInt32ElementIndex=2===e.webGLVersion||!!e.extensions.uint32ElementIndex},/**
     * Binds geometry so that is can be drawn. Creating a Vao if required
     * @param geometry - Instance of geometry to bind.
     * @param shader - Instance of shader to use vao for.
     */t.prototype.bind=function(t,e){e=e||this.renderer.shader.shader;var r=this.gl,i=t.glVertexArrayObjects[this.CONTEXT_UID],n=!1;i||(this.managedGeometries[t.id]=t,t.disposeRunner.add(this),t.glVertexArrayObjects[this.CONTEXT_UID]=i={},n=!0);var o=i[e.program.id]||this.initGeometryVao(t,e,n);this._activeGeometry=t,this._activeVao!==o&&(this._activeVao=o,this.hasVao?r.bindVertexArray(o):this.activateVao(t,e.program)),// TODO - optimise later!
// don't need to loop through if nothing changed!
// maybe look to add an 'autoupdate' to geometry?
this.updateBuffers()},/** Reset and unbind any active VAO and geometry. */t.prototype.reset=function(){this.unbind()},/** Update buffers of the currently bound geometry. */t.prototype.updateBuffers=function(){for(var t=this._activeGeometry,e=this.renderer.buffer,r=0;r<t.buffers.length;r++){var i=t.buffers[r];e.update(i)}},/**
     * Check compatibility between a geometry and a program
     * @param geometry - Geometry instance.
     * @param program - Program instance.
     */t.prototype.checkCompatibility=function(t,e){// geometry must have at least all the attributes that the shader requires.
var r=t.attributes,i=e.attributeData;for(var n in i)if(!r[n])throw Error('shader and geometry incompatible, geometry missing the "'+n+'" attribute')},/**
     * Takes a geometry and program and generates a unique signature for them.
     * @param geometry - To get signature from.
     * @param program - To test geometry against.
     * @returns - Unique signature of the geometry and program
     */t.prototype.getSignature=function(t,e){var r=t.attributes,i=e.attributeData,n=["g",t.id];for(var o in r)i[o]&&n.push(o,i[o].location);return n.join("-")},/**
     * Creates or gets Vao with the same structure as the geometry and stores it on the geometry.
     * If vao is created, it is bound automatically. We use a shader to infer what and how to set up the
     * attribute locations.
     * @param geometry - Instance of geometry to to generate Vao for.
     * @param shader - Instance of the shader.
     * @param incRefCount - Increment refCount of all geometry buffers.
     */t.prototype.initGeometryVao=function(t,e,r){void 0===r&&(r=!0);var i=this.gl,n=this.CONTEXT_UID,o=this.renderer.buffer,s=e.program;s.glPrograms[n]||this.renderer.shader.generateProgram(e),this.checkCompatibility(t,s);var a=this.getSignature(t,s),h=t.glVertexArrayObjects[this.CONTEXT_UID],u=h[a];if(u)return(// this will give us easy access to the vao
h[s.id]=u,u);var l=t.buffers,c=t.attributes,f={},p={};for(var d in l)f[d]=0,p[d]=0;for(var d in c)!c[d].size&&s.attributeData[d]?c[d].size=s.attributeData[d].size:c[d].size||console.warn("PIXI Geometry attribute '"+d+"' size cannot be determined (likely the bound shader does not have the attribute)"),f[c[d].buffer]+=c[d].size*oX[c[d].type];for(var d in c){var _=c[d],y=_.size;void 0===_.stride&&(f[_.buffer]===y*oX[_.type]?_.stride=0:_.stride=f[_.buffer]),void 0===_.start&&(_.start=p[_.buffer],p[_.buffer]+=y*oX[_.type])}u=i.createVertexArray(),i.bindVertexArray(u);// first update - and create the buffers!
// only create a gl buffer if it actually gets
for(var v=0;v<l.length;v++){var m=l[v];o.bind(m),r&&m._glBuffers[n].refCount++}return(// TODO - maybe make this a data object?
// lets wait to see if we need to first!
this.activateVao(t,s),this._activeVao=u,// add it to the cache!
h[s.id]=u,h[a]=u,u)},/**
     * Disposes geometry.
     * @param geometry - Geometry with buffers. Only VAO will be disposed
     * @param [contextLost=false] - If context was lost, we suppress deleteVertexArray
     */t.prototype.disposeGeometry=function(t,e){if(this.managedGeometries[t.id]){delete this.managedGeometries[t.id];var r,i=t.glVertexArrayObjects[this.CONTEXT_UID],n=this.gl,o=t.buffers,s=null===(r=this.renderer)||void 0===r?void 0:r.buffer;if(t.disposeRunner.remove(this),i){// bufferSystem may have already been destroyed..
// if this is the case, there is no need to destroy the geometry buffers...
// they already have been!
if(s)for(var a=0;a<o.length;a++){var h=o[a]._glBuffers[this.CONTEXT_UID];// my be null as context may have changed right before the dispose is called
h&&(h.refCount--,0!==h.refCount||e||s.dispose(o[a],e))}if(!e){for(var u in i)if("g"===u[0]){var l=i[u];this._activeVao===l&&this.unbind(),n.deleteVertexArray(l)}}delete t.glVertexArrayObjects[this.CONTEXT_UID]}}},/**
     * Dispose all WebGL resources of all managed geometries.
     * @param [contextLost=false] - If context was lost, we suppress `gl.delete` calls
     */t.prototype.disposeAll=function(t){for(var e=Object.keys(this.managedGeometries),r=0;r<e.length;r++)this.disposeGeometry(this.managedGeometries[e[r]],t)},/**
     * Activate vertex array object.
     * @param geometry - Geometry instance.
     * @param program - Shader program instance.
     */t.prototype.activateVao=function(t,e){var r=this.gl,i=this.CONTEXT_UID,n=this.renderer.buffer,o=t.buffers,s=t.attributes;t.indexBuffer&&n.bind(t.indexBuffer);var a=null;// add a new one!
for(var h in s){var u=s[h],l=o[u.buffer],c=l._glBuffers[i];if(e.attributeData[h]){a!==c&&(n.bind(l),a=c);var f=e.attributeData[h].location;if(// TODO introduce state again
// we can optimise this for older devices that have no VAOs
r.enableVertexAttribArray(f),r.vertexAttribPointer(f,u.size,u.type||r.FLOAT,u.normalized,u.stride,u.start),u.instance){// TODO calculate instance count based of this...
if(this.hasInstance)r.vertexAttribDivisor(f,1);else throw Error("geometry error, GPU Instancing is not supported on this device")}}}},/**
     * Draws the currently bound geometry.
     * @param type - The type primitive to render.
     * @param size - The number of elements to be rendered. If not specified, all vertices after the
     *  starting vertex will be drawn.
     * @param start - The starting vertex in the geometry to start drawing from. If not specified,
     *  drawing will start from the first vertex.
     * @param instanceCount - The number of instances of the set of elements to execute. If not specified,
     *  all instances will be drawn.
     */t.prototype.draw=function(t,e,r,i){var n=this.gl,o=this._activeGeometry;// TODO.. this should not change so maybe cache the function?
if(o.indexBuffer){var s=o.indexBuffer.data.BYTES_PER_ELEMENT,a=2===s?n.UNSIGNED_SHORT:n.UNSIGNED_INT;2===s||4===s&&this.canUseUInt32ElementIndex?o.instanced?/* eslint-disable max-len */n.drawElementsInstanced(t,e||o.indexBuffer.data.length,a,(r||0)*s,i||1):/* eslint-disable max-len */n.drawElements(t,e||o.indexBuffer.data.length,a,(r||0)*s):console.warn("unsupported index buffer type: uint32")}else o.instanced?n.drawArraysInstanced(t,r,e||o.getSize(),i||1):n.drawArrays(t,r,e||o.getSize());return this},/** Unbind/reset everything. */t.prototype.unbind=function(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null},t.prototype.destroy=function(){this.renderer=null},t)}(),oH=/** @class */function(){/**
     * Create MaskData
     * @param {PIXI.DisplayObject} [maskObject=null] - object that describes the mask
     */function t(t){void 0===t&&(t=null),this.type=tn.NONE,this.autoDetect=!0,this.maskObject=t||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=eh.FILTER_MULTISAMPLE,this.enabled=!0,this.colorMask=15,this._filters=null,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._scissorRectLocal=null,this._colorMask=15,this._target=null}return Object.defineProperty(t.prototype,"filter",{/**
         * The sprite mask filter.
         * If set to `null`, the default sprite mask filter is used.
         * @default null
         */get:function(){return this._filters?this._filters[0]:null},set:function(t){t?this._filters?this._filters[0]=t:this._filters=[t]:this._filters=null},enumerable:!1,configurable:!0}),/** Resets the mask data after popMask(). */t.prototype.reset=function(){this.pooled&&(this.maskObject=null,this.type=tn.NONE,this.autoDetect=!0),this._target=null,this._scissorRectLocal=null},/**
     * Copies counters from maskData above, called from pushMask().
     * @param maskAbove
     */t.prototype.copyCountersOrReset=function(t){t?(this._stencilCounter=t._stencilCounter,this._scissorCounter=t._scissorCounter,this._scissorRect=t._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)},t}();/**
 * @private
 * @param {WebGLRenderingContext} gl - The current WebGL context {WebGLProgram}
 * @param {number} type - the type, can be either VERTEX_SHADER or FRAGMENT_SHADER
 * @param {string} src - The vertex shader source as an array of strings.
 * @returns {WebGLShader} the shader
 */function oY(t,e,r){var i=t.createShader(e);return t.shaderSource(i,r),t.compileShader(i),i}/**
 * will log a shader error highlighting the lines with the error
 * also will add numbers along the side.
 * @param gl - the WebGLContext
 * @param shader - the shader to log errors for
 */function oz(t,e){var r=t.getShaderSource(e).split("\n").map(function(t,e){return e+": "+t}),i=t.getShaderInfoLog(e),n=i.split("\n"),o={},s=n.map(function(t){return parseFloat(t.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))}).filter(function(t){return!!t&&!o[t]&&(o[t]=!0,!0)}),a=[""];s.forEach(function(t){r[t-1]="%c"+r[t-1]+"%c",a.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});var h=r.join("\n");a[0]=h,console.error(i),// eslint-disable-next-line no-console
console.groupCollapsed("click to view full shader code"),console.warn.apply(console,a),// eslint-disable-next-line no-console
console.groupEnd()}function oV(t){for(var e=Array(t),r=0;r<e.length;r++)e[r]=!1;return e}/**
 * @method defaultValue
 * @memberof PIXI.glCore.shader
 * @param {string} type - Type of value
 * @param {number} size
 * @private
 */function oW(t,e){switch(t){case"float":case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"vec2":return new Float32Array(2*e);case"vec3":return new Float32Array(3*e);case"vec4":return new Float32Array(4*e);case"ivec2":return new Int32Array(2*e);case"ivec3":return new Int32Array(3*e);case"ivec4":return new Int32Array(4*e);case"uvec2":return new Uint32Array(2*e);case"uvec3":return new Uint32Array(3*e);case"uvec4":return new Uint32Array(4*e);case"bool":return!1;case"bvec2":return oV(2*e);case"bvec3":return oV(3*e);case"bvec4":return oV(4*e);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var oq={},oK=oq;/**
 * Sets the float precision on the shader, ensuring the device supports the request precision.
 * If the precision is already present, it just ensures that the device is able to handle it.
 * @private
 * @param {string} src - The shader source
 * @param {PIXI.PRECISION} requestedPrecision - The request float precision of the shader.
 * @param {PIXI.PRECISION} maxSupportedPrecision - The maximum precision the shader supports.
 * @returns {string} modified shader source
 */function oZ(t,e,r){if("precision"!==t.substring(0,9)){// no precision supplied, so PixiJS will add the requested level.
var i=e;return e===ti.HIGH&&r!==ti.HIGH&&(i=ti.MEDIUM),"precision "+i+" float;\n"+t}return r!==ti.HIGH&&"precision highp"===t.substring(0,15)?t.replace("precision highp","precision mediump"):t}var oJ={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1},oQ=null,o$={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function o0(t,e){if(!oQ){var r=Object.keys(o$);oQ={};for(var i=0;i<r.length;++i){var n=r[i];oQ[t[n]]=o$[n]}}return oQ[e]}/* eslint-disable @typescript-eslint/explicit-module-boundary-types */// Parsers, each one of these will take a look at the type of shader property and uniform.
// if they pass the test function then the code function is called that returns a the shader upload code for that uniform.
// Shader upload code is automagically generated with these parsers.
// If no parser is valid then the default upload functions are used.
// exposing Parsers means that custom upload logic can be added to pixi's shaders.
// A good example would be a pixi rectangle can be directly set on a uniform.
// If the shader sees it it knows how to upload the rectangle structure as a vec4
// format is as follows:
//
// {
//     test: (data, uniform) => {} <--- test is this code should be used for this uniform
//     code: (name, uniform) => {} <--- returns the string of the piece of code that uploads the uniform
//     codeUbo: (name, uniform) => {} <--- returns the string of the piece of code that uploads the
//                                         uniform to a uniform buffer
// }
var o1=[// a float cache layer
{test:function(t){return"float"===t.type&&1===t.size&&!t.isArray},code:function(t){return'\n            if(uv["'+t+'"] !== ud["'+t+'"].value)\n            {\n                ud["'+t+'"].value = uv["'+t+'"]\n                gl.uniform1f(ud["'+t+'"].location, uv["'+t+'"])\n            }\n            '}},// handling samplers
{test:function(t,e){// eslint-disable-next-line max-len,no-eq-null,eqeqeq
return("sampler2D"===t.type||"samplerCube"===t.type||"sampler2DArray"===t.type)&&1===t.size&&!t.isArray&&(null==e||void 0!==e.castToBaseTexture)},code:function(t){return't = syncData.textureCount++;\n\n            renderer.texture.bind(uv["'+t+'"], t);\n\n            if(ud["'+t+'"].value !== t)\n            {\n                ud["'+t+'"].value = t;\n                gl.uniform1i(ud["'+t+'"].location, t);\n; // eslint-disable-line max-len\n            }'}},// uploading pixi matrix object to mat3
{test:function(t,e){return"mat3"===t.type&&1===t.size&&!t.isArray&&void 0!==e.a},code:function(t){// TODO and some smart caching dirty ids here!
return'\n            gl.uniformMatrix3fv(ud["'+t+'"].location, false, uv["'+t+'"].toArray(true));\n            '},codeUbo:function(t){return"\n                var "+t+"_matrix = uv."+t+".toArray(true);\n\n                data[offset] = "+t+"_matrix[0];\n                data[offset+1] = "+t+"_matrix[1];\n                data[offset+2] = "+t+"_matrix[2];\n        \n                data[offset + 4] = "+t+"_matrix[3];\n                data[offset + 5] = "+t+"_matrix[4];\n                data[offset + 6] = "+t+"_matrix[5];\n        \n                data[offset + 8] = "+t+"_matrix[6];\n                data[offset + 9] = "+t+"_matrix[7];\n                data[offset + 10] = "+t+"_matrix[8];\n            "}},// uploading a pixi point as a vec2 with caching layer
{test:function(t,e){return"vec2"===t.type&&1===t.size&&!t.isArray&&void 0!==e.x},code:function(t){return'\n                cv = ud["'+t+'"].value;\n                v = uv["'+t+'"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["'+t+'"].location, v.x, v.y);\n                }'},codeUbo:function(t){return"\n                v = uv."+t+";\n\n                data[offset] = v.x;\n                data[offset+1] = v.y;\n            "}},// caching layer for a vec2
{test:function(t){return"vec2"===t.type&&1===t.size&&!t.isArray},code:function(t){return'\n                cv = ud["'+t+'"].value;\n                v = uv["'+t+'"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["'+t+'"].location, v[0], v[1]);\n                }\n            '}},// upload a pixi rectangle as a vec4 with caching layer
{test:function(t,e){return"vec4"===t.type&&1===t.size&&!t.isArray&&void 0!==e.width},code:function(t){return'\n                cv = ud["'+t+'"].value;\n                v = uv["'+t+'"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["'+t+'"].location, v.x, v.y, v.width, v.height)\n                }'},codeUbo:function(t){return"\n                    v = uv."+t+";\n\n                    data[offset] = v.x;\n                    data[offset+1] = v.y;\n                    data[offset+2] = v.width;\n                    data[offset+3] = v.height;\n                "}},// a caching layer for vec4 uploading
{test:function(t){return"vec4"===t.type&&1===t.size&&!t.isArray},code:function(t){return'\n                cv = ud["'+t+'"].value;\n                v = uv["'+t+'"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["'+t+'"].location, v[0], v[1], v[2], v[3])\n                }'}}],o2={float:"\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1f(location, v);\n    }",vec2:"\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2f(location, v[0], v[1])\n    }",vec3:"\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",vec4:"\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4f(location, v[0], v[1], v[2], v[3]);\n    }",int:"\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }",ivec2:"\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }",ivec3:"\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }",ivec4:"\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }",uint:"\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1ui(location, v);\n    }",uvec2:"\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2ui(location, v[0], v[1]);\n    }",uvec3:"\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3ui(location, v[0], v[1], v[2]);\n    }",uvec4:"\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);\n    }",bool:"\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1i(location, v);\n    }",bvec2:"\n    if (cv[0] != v[0] || cv[1] != v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }",bvec3:"\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }",bvec4:"\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }",mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:"\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }",samplerCube:"\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }",sampler2DArray:"\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }"},o3={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"},o4=0,o8={},o6=/** @class */function(){/**
     * @param vertexSrc - The source of the vertex shader.
     * @param fragmentSrc - The source of the fragment shader.
     * @param name - Name for shader
     */function t(e,r,i){void 0===i&&(i="pixi-shader"),this.id=o4++,this.vertexSrc=e||t.defaultVertexSrc,this.fragmentSrc=r||t.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),"#version"!==this.vertexSrc.substring(0,8)&&(o8[i=i.replace(/\s+/g,"-")]?(o8[i]++,i+="-"+o8[i]):o8[i]=1,this.vertexSrc="#define SHADER_NAME "+i+"\n"+this.vertexSrc,this.fragmentSrc="#define SHADER_NAME "+i+"\n"+this.fragmentSrc,this.vertexSrc=oZ(this.vertexSrc,eh.PRECISION_VERTEX,ti.HIGH),this.fragmentSrc=oZ(this.fragmentSrc,eh.PRECISION_FRAGMENT,function(){if(!td){td=ti.MEDIUM;var t=/**
 * returns a little WebGL context to use for program inspection.
 * @static
 * @private
 * @returns {WebGLRenderingContext} a gl context to test with
 */function(){if(oK===oq||oK&&oK.isContextLost()){var t=eh.ADAPTER.createCanvas(),e=void 0;eh.PREFER_ENV>=j.WEBGL2&&(e=t.getContext("webgl2",{})),e||((e=t.getContext("webgl",{})||t.getContext("experimental-webgl",{}))?e.getExtension("WEBGL_draw_buffers"):e=null),oK=e}return oK}();t&&t.getShaderPrecisionFormat&&(td=t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision?ti.HIGH:ti.MEDIUM)}return td}())),// currently this does not extract structs only default types
// this is where we store shader references..
this.glPrograms={},this.syncUniforms=null}return Object.defineProperty(t,"defaultVertexSrc",{/**
         * The default vertex shader source.
         * @constant
         */get:function(){return"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n"},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultFragmentSrc",{/**
         * The default fragment shader source.
         * @constant
         */get:function(){return"varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}"},enumerable:!1,configurable:!0}),/**
     * A short hand function to create a program based of a vertex and fragment shader.
     *
     * This method will also check to see if there is a cached program.
     * @param vertexSrc - The source of the vertex shader.
     * @param fragmentSrc - The source of the fragment shader.
     * @param name - Name for shader
     * @returns A shiny new PixiJS shader program!
     */t.from=function(e,r,i){var n=e+r,o=nd[n];return o||(nd[n]=o=new t(e,r,i)),o},t}(),o5=/** @class */function(){/**
     * @param program - The program the shader will use.
     * @param uniforms - Custom uniforms to use to augment the built-in ones.
     */function t(t,e){/**
         * Used internally to bind uniform buffer objects.
         * @ignore
         */this.uniformBindCount=0,this.program=t,e?e instanceof oP?this.uniformGroup=e:this.uniformGroup=new oP(e):this.uniformGroup=new oP({}),this.disposeRunner=new nZ("disposeShader")}return(// TODO move to shader system..
t.prototype.checkUniformExists=function(t,e){if(e.uniforms[t])return!0;for(var r in e.uniforms){var i=e.uniforms[r];if(i.group&&this.checkUniformExists(t,i))return!0}return!1},t.prototype.destroy=function(){// usage count on programs?
// remove if not used!
this.uniformGroup=null,this.disposeRunner.emit(this),this.disposeRunner.destroy()},Object.defineProperty(t.prototype,"uniforms",{/**
         * Shader uniform values, shortcut for `uniformGroup.uniforms`.
         * @readonly
         */get:function(){return this.uniformGroup.uniforms},enumerable:!1,configurable:!0}),/**
     * A short hand function to create a shader based of a vertex and fragment shader.
     * @param vertexSrc - The source of the vertex shader.
     * @param fragmentSrc - The source of the fragment shader.
     * @param uniforms - Custom uniforms to use to augment the built-in ones.
     * @returns A shiny new PixiJS shader!
     */t.from=function(e,r,i){var n=o6.from(e,r);return new t(n,i)},t)}(),o9=/** @class */function(){function t(){this.data=0,this.blendMode=z.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0;//  this.depthTest = true;
}return Object.defineProperty(t.prototype,"blend",{/**
         * Activates blending of the computed fragment color values.
         * @default true
         */get:function(){return!!(1&this.data)},set:function(t){!!(1&this.data)!==t&&(this.data^=1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"offsets",{/**
         * Activates adding an offset to depth values of polygon's fragments
         * @default false
         */get:function(){return!!(2&this.data)},set:function(t){!!(2&this.data)!==t&&(this.data^=2)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"culling",{/**
         * Activates culling of polygons.
         * @default false
         */get:function(){return!!(4&this.data)},set:function(t){!!(4&this.data)!==t&&(this.data^=4)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"depthTest",{/**
         * Activates depth comparisons and updates to the depth buffer.
         * @default false
         */get:function(){return!!(8&this.data)},set:function(t){!!(8&this.data)!==t&&(this.data^=8)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"depthMask",{/**
         * Enables or disables writing to the depth buffer.
         * @default true
         */get:function(){return!!(32&this.data)},set:function(t){!!(32&this.data)!==t&&(this.data^=32)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"clockwiseFrontFace",{/**
         * Specifies whether or not front or back-facing polygons can be culled.
         * @default false
         */get:function(){return!!(16&this.data)},set:function(t){!!(16&this.data)!==t&&(this.data^=16)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blendMode",{/**
         * The blend mode to be applied when this state is set. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
         * @default PIXI.BLEND_MODES.NORMAL
         */get:function(){return this._blendMode},set:function(t){this.blend=t!==z.NONE,this._blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"polygonOffset",{/**
         * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
         * @default 0
         */get:function(){return this._polygonOffset},set:function(t){this.offsets=!!t,this._polygonOffset=t},enumerable:!1,configurable:!0}),t.prototype.toString=function(){return"[@pixi/core:State blendMode="+this.blendMode+" clockwiseFrontFace="+this.clockwiseFrontFace+" culling="+this.culling+" depthMask="+this.depthMask+" polygonOffset="+this.polygonOffset+"]"},t.for2d=function(){var e=new t;return e.depthTest=!1,e.blend=!0,e},t}(),o7=/** @class */function(t){/**
     * @param vertexSrc - The source of the vertex shader.
     * @param fragmentSrc - The source of the fragment shader.
     * @param uniforms - Custom uniforms to use to augment the built-in ones.
     */function e(r,i,n){var o=this,s=o6.from(r||e.defaultVertexSrc,i||e.defaultFragmentSrc);return(o=t.call(this,s,n)||this).padding=0,o.resolution=eh.FILTER_RESOLUTION,o.multisample=eh.FILTER_MULTISAMPLE,o.enabled=!0,o.autoFit=!0,o.state=new o9,o}return n3(e,t),/**
     * Applies the filter
     * @param {PIXI.FilterSystem} filterManager - The renderer to retrieve the filter from
     * @param {PIXI.RenderTexture} input - The input render target.
     * @param {PIXI.RenderTexture} output - The target to output to.
     * @param {PIXI.CLEAR_MODES} [clearMode] - Should the output be cleared before rendering to it.
     * @param {object} [_currentState] - It's current state of filter.
     *        There are some useful properties in the currentState :
     *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
     */e.prototype.apply=function(t,e,r,i,n){// do as you please!
t.applyFilter(this,e,r,i);// or just do a regular render..
},Object.defineProperty(e.prototype,"blendMode",{/**
         * Sets the blend mode of the filter.
         * @default PIXI.BLEND_MODES.NORMAL
         */get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{/**
         * The resolution of the filter. Setting this to be lower will lower the quality but
         * increase the performance of the filter.
         */get:function(){return this._resolution},set:function(t){this._resolution=t},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultVertexSrc",{/**
         * The default vertex shader source
         * @constant
         */get:function(){return"attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n"},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultFragmentSrc",{/**
         * The default fragment shader source
         * @constant
         */get:function(){return"varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"},enumerable:!1,configurable:!0}),e}(o5),st=new nw,se=/** @class */function(){/**
     * @param texture - observed texture
     * @param clampMargin - Changes frame clamping, 0.5 by default. Use -0.5 for extra border.
     */function t(t,e){this._texture=t,this.mapCoord=new nw,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=void 0===e?.5:e,this.isSimple=!1}return Object.defineProperty(t.prototype,"texture",{/** Texture property. */get:function(){return this._texture},set:function(t){this._texture=t,this._textureID=-1},enumerable:!1,configurable:!0}),/**
     * Multiplies uvs array to transform
     * @param uvs - mesh uvs
     * @param [out=uvs] - output
     * @returns - output
     */t.prototype.multiplyUvs=function(t,e){void 0===e&&(e=t);for(var r=this.mapCoord,i=0;i<t.length;i+=2){var n=t[i],o=t[i+1];e[i]=n*r.a+o*r.c+r.tx,e[i+1]=n*r.b+o*r.d+r.ty}return e},/**
     * Updates matrices if texture was changed.
     * @param [forceUpdate=false] - if true, matrices will be updated any case
     * @returns - Whether or not it was updated
     */t.prototype.update=function(t){var e=this._texture;if(!e||!e.valid||!t&&this._textureID===e._updateID)return!1;this._textureID=e._updateID,this._updateID++;var r=e._uvs;this.mapCoord.set(r.x1-r.x0,r.y1-r.y0,r.x3-r.x0,r.y3-r.y0,r.x0,r.y0);var i=e.orig,n=e.trim;n&&(st.set(i.width/n.width,0,0,i.height/n.height,-n.x/n.width,-n.y/n.height),this.mapCoord.append(st));var o=e.baseTexture,s=this.uClampFrame,a=this.clampMargin/o.resolution,h=this.clampOffset;return s[0]=(e._frame.x+a+h)/o.width,s[1]=(e._frame.y+a+h)/o.height,s[2]=(e._frame.x+e._frame.width-a+h)/o.width,s[3]=(e._frame.y+e._frame.height-a+h)/o.height,this.uClampOffset[0]=h/o.realWidth,this.uClampOffset[1]=h/o.realHeight,this.isSimple=e._frame.width===o.width&&e._frame.height===o.height&&0===e.rotate,!0},t}(),sr=/** @class */function(t){/** @ignore */function e(e,r,i){var n=this,o=null;return"string"!=typeof e&&void 0===r&&void 0===i&&(o=e,e=void 0,r=void 0,i=void 0),(n=t.call(this,e||"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n",r||"varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n",i)||this).maskSprite=o,n.maskMatrix=new nw,n}return n3(e,t),Object.defineProperty(e.prototype,"maskSprite",{/**
         * Sprite mask
         * @type {PIXI.DisplayObject}
         */get:function(){return this._maskSprite},set:function(t){this._maskSprite=t,this._maskSprite&&(this._maskSprite.renderable=!1)},enumerable:!1,configurable:!0}),/**
     * Applies the filter
     * @param filterManager - The renderer to retrieve the filter from
     * @param input - The input render target.
     * @param output - The target to output to.
     * @param clearMode - Should the output be cleared before rendering to it.
     */e.prototype.apply=function(t,e,r,i){var n=this._maskSprite,o=n._texture;o.valid&&(o.uvMatrix||// assuming that atlas textures were made with 1-pixel padding
(o.uvMatrix=new se(o,0)),o.uvMatrix.update(),this.uniforms.npmAlpha=o.baseTexture.alphaMode?0:1,this.uniforms.mask=o,// get _normalized sprite texture coords_ and convert them to _normalized atlas texture coords_ with `prepend`
this.uniforms.otherMatrix=t.calculateSpriteMatrix(this.maskMatrix,n).prepend(o.uvMatrix.mapCoord),this.uniforms.alpha=n.worldAlpha,this.uniforms.maskClamp=o.uvMatrix.uClampFrame,t.applyFilter(this,e,r,i))},e}(o7),si=/** @class */function(){/**
     * @param renderer - The renderer this System works for.
     */function t(t){this.renderer=t,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}return(/**
     * Changes the mask stack that is used by this System.
     * @param maskStack - The mask stack
     */t.prototype.setMaskStack=function(t){this.maskStack=t,this.renderer.scissor.setMaskStack(t),this.renderer.stencil.setMaskStack(t)},/**
     * Enables the mask and appends it to the current mask stack.
     *
     * NOTE: The batch renderer should be flushed beforehand to prevent pending renders from being masked.
     * @param {PIXI.DisplayObject} target - Display Object to push the mask to
     * @param {PIXI.MaskData|PIXI.Sprite|PIXI.Graphics|PIXI.DisplayObject} maskDataOrTarget - The masking data.
     */t.prototype.push=function(t,e){var r=e;if(!r.isMaskData){var i=this.maskDataPool.pop()||new oH;i.pooled=!0,i.maskObject=e,r=i}var n=0!==this.maskStack.length?this.maskStack[this.maskStack.length-1]:null;if(r.copyCountersOrReset(n),r._colorMask=n?n._colorMask:15,r.autoDetect&&this.detect(r),r._target=t,r.type!==tn.SPRITE&&this.maskStack.push(r),r.enabled)switch(r.type){case tn.SCISSOR:this.renderer.scissor.push(r);break;case tn.STENCIL:this.renderer.stencil.push(r);break;case tn.SPRITE:r.copyCountersOrReset(null),this.pushSpriteMask(r);break;case tn.COLOR:this.pushColorMask(r)}r.type===tn.SPRITE&&this.maskStack.push(r)},/**
     * Removes the last mask from the mask stack and doesn't return it.
     *
     * NOTE: The batch renderer should be flushed beforehand to render the masked contents before the mask is removed.
     * @param {PIXI.IMaskTarget} target - Display Object to pop the mask from
     */t.prototype.pop=function(t){var e=this.maskStack.pop();if(e&&e._target===t){if(e.enabled)switch(e.type){case tn.SCISSOR:this.renderer.scissor.pop(e);break;case tn.STENCIL:this.renderer.stencil.pop(e.maskObject);break;case tn.SPRITE:this.popSpriteMask(e);break;case tn.COLOR:this.popColorMask(e)}if(e.reset(),e.pooled&&this.maskDataPool.push(e),0!==this.maskStack.length){var r=this.maskStack[this.maskStack.length-1];r.type===tn.SPRITE&&r._filters&&(r._filters[0].maskSprite=r.maskObject)}}},/**
     * Sets type of MaskData based on its maskObject.
     * @param maskData
     */t.prototype.detect=function(t){var e=t.maskObject;e?e.isSprite?t.type=tn.SPRITE:this.enableScissor&&this.renderer.scissor.testScissor(t)?t.type=tn.SCISSOR:t.type=tn.STENCIL:t.type=tn.COLOR},/**
     * Applies the Mask and adds it to the current filter stack.
     * @param maskData - Sprite to be used as the mask.
     */t.prototype.pushSpriteMask=function(t){var e,r,i,n,o=t.maskObject,s=t._target,a=t._filters;a||(a=this.alphaMaskPool[this.alphaMaskIndex])||(a=this.alphaMaskPool[this.alphaMaskIndex]=[new sr]);var h=this.renderer,u=h.renderTexture;if(u.current){var l=u.current;i=t.resolution||l.resolution,n=null!==(e=t.multisample)&&void 0!==e?e:l.multisample}else i=t.resolution||h.resolution,n=null!==(r=t.multisample)&&void 0!==r?r:h.multisample;a[0].resolution=i,a[0].multisample=n,a[0].maskSprite=o;var c=s.filterArea;s.filterArea=o.getBounds(!0),h.filter.push(s,a),s.filterArea=c,!t._filters&&this.alphaMaskIndex++},/**
     * Removes the last filter from the filter stack and doesn't return it.
     * @param maskData - Sprite to be used as the mask.
     */t.prototype.popSpriteMask=function(t){this.renderer.filter.pop(),t._filters?t._filters[0].maskSprite=null:(this.alphaMaskIndex--,this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite=null)},/**
     * Pushes the color mask.
     * @param maskData - The mask data
     */t.prototype.pushColorMask=function(t){var e=t._colorMask,r=t._colorMask=e&t.colorMask;r!==e&&this.renderer.gl.colorMask((1&r)!=0,(2&r)!=0,(4&r)!=0,(8&r)!=0)},/**
     * Pops the color mask.
     * @param maskData - The mask data
     */t.prototype.popColorMask=function(t){var e=t._colorMask,r=this.maskStack.length>0?this.maskStack[this.maskStack.length-1]._colorMask:15;r!==e&&this.renderer.gl.colorMask((1&r)!=0,(2&r)!=0,(4&r)!=0,(8&r)!=0)},t.prototype.destroy=function(){this.renderer=null},t)}(),sn=/** @class */function(){/**
     * @param renderer - The renderer this System works for.
     */function t(t){this.renderer=t,this.maskStack=[],this.glConst=0}return(/** Gets count of masks of certain type. */t.prototype.getStackLength=function(){return this.maskStack.length},/**
     * Changes the mask stack that is used by this System.
     * @param {PIXI.MaskData[]} maskStack - The mask stack
     */t.prototype.setMaskStack=function(t){var e=this.renderer.gl,r=this.getStackLength();this.maskStack=t;var i=this.getStackLength();i!==r&&(0===i?e.disable(this.glConst):(e.enable(this.glConst),this._useCurrent()))},/**
     * Setup renderer to use the current mask data.
     * @private
     */t.prototype._useCurrent=function(){// OVERWRITE;
},/** Destroys the mask stack. */t.prototype.destroy=function(){this.renderer=null,this.maskStack=null},t)}(),so=new nw,ss=[],sa=/** @class */function(t){/**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */function e(e){var r=t.call(this,e)||this;return r.glConst=eh.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST,r}return n3(e,t),e.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._scissorCounter:0},/**
     * evaluates _boundsTransformed, _scissorRect for MaskData
     * @param maskData
     */e.prototype.calcScissorRect=function(t){if(!t._scissorRectLocal){var e,r=t._scissorRect,i=t.maskObject,n=this.renderer,o=n.renderTexture,s=i.getBounds(!0,null!==(e=ss.pop())&&void 0!==e?e:new nA);this.roundFrameToPixels(s,o.current?o.current.resolution:n.resolution,o.sourceFrame,o.destinationFrame,n.projection.transform),r&&s.fit(r),t._scissorRectLocal=s}},e.isMatrixRotated=function(t){if(!t)return!1;var e=t.a,r=t.b,i=t.c,n=t.d;// Skip if skew/rotation present in matrix, except for multiple of 90° rotation. If rotation
// is a multiple of 90°, then either pair of (b,c) or (a,d) will be (0,0).
return(Math.abs(r)>1e-4||Math.abs(i)>1e-4)&&(Math.abs(e)>1e-4||Math.abs(n)>1e-4)},/**
     * Test, whether the object can be scissor mask with current renderer projection.
     * Calls "calcScissorRect()" if its true.
     * @param maskData - mask data
     * @returns whether Whether the object can be scissor mask
     */e.prototype.testScissor=function(t){var r=t.maskObject;if(!r.isFastRect||!r.isFastRect()||e.isMatrixRotated(r.worldTransform)||e.isMatrixRotated(this.renderer.projection.transform))return!1;this.calcScissorRect(t);var i=t._scissorRectLocal;return i.width>0&&i.height>0},e.prototype.roundFrameToPixels=function(t,r,i,n,o){e.isMatrixRotated(o)||(// Get forward transform from world space to screen space
(o=o?so.copyFrom(o):so.identity()).translate(-i.x,-i.y).scale(n.width/i.width,n.height/i.height).translate(n.x,n.y),// Convert frame to screen space
this.renderer.filter.transformAABB(o,t),t.fit(n),t.x=Math.round(t.x*r),t.y=Math.round(t.y*r),t.width=Math.round(t.width*r),t.height=Math.round(t.height*r))},/**
     * Applies the Mask and adds it to the current stencil stack.
     * @author alvin
     * @param maskData - The mask data.
     */e.prototype.push=function(t){t._scissorRectLocal||this.calcScissorRect(t);var e=this.renderer.gl;t._scissorRect||e.enable(e.SCISSOR_TEST),t._scissorCounter++,t._scissorRect=t._scissorRectLocal,this._useCurrent()},/**
     * This should be called after a mask is popped off the mask stack. It will rebind the scissor box to be latest with the
     * last mask in the stack.
     *
     * This can also be called when you directly modify the scissor box and want to restore PixiJS state.
     * @param maskData - The mask data.
     */e.prototype.pop=function(t){var e=this.renderer.gl;t&&ss.push(t._scissorRectLocal),this.getStackLength()>0?this._useCurrent():e.disable(e.SCISSOR_TEST)},/**
     * Setup renderer to use the current scissor data.
     * @private
     */e.prototype._useCurrent=function(){var t,e=this.maskStack[this.maskStack.length-1]._scissorRect;t=this.renderer.renderTexture.current?e.y:this.renderer.height-e.height-e.y,this.renderer.gl.scissor(e.x,t,e.width,e.height)},e}(sn),sh=/** @class */function(t){/**
     * @param renderer - The renderer this System works for.
     */function e(e){var r=t.call(this,e)||this;return r.glConst=eh.ADAPTER.getWebGLRenderingContext().STENCIL_TEST,r}return n3(e,t),e.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._stencilCounter:0},/**
     * Applies the Mask and adds it to the current stencil stack.
     * @param maskData - The mask data
     */e.prototype.push=function(t){var e=t.maskObject,r=this.renderer.gl,i=t._stencilCounter;0===i&&(// force use stencil texture in current framebuffer
this.renderer.framebuffer.forceStencil(),r.clearStencil(0),r.clear(r.STENCIL_BUFFER_BIT),r.enable(r.STENCIL_TEST)),t._stencilCounter++;var n=t._colorMask;0!==n&&(t._colorMask=0,r.colorMask(!1,!1,!1,!1)),// Increment the reference stencil value where the new mask overlaps with the old ones.
r.stencilFunc(r.EQUAL,i,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.INCR),e.renderable=!0,e.render(this.renderer),this.renderer.batch.flush(),e.renderable=!1,0!==n&&(t._colorMask=n,r.colorMask((1&n)!=0,(2&n)!=0,(4&n)!=0,(8&n)!=0)),this._useCurrent()},/**
     * Pops stencil mask. MaskData is already removed from stack
     * @param {PIXI.DisplayObject} maskObject - object of popped mask data
     */e.prototype.pop=function(t){var e=this.renderer.gl;if(0===this.getStackLength())e.disable(e.STENCIL_TEST);else{var r=0!==this.maskStack.length?this.maskStack[this.maskStack.length-1]:null,i=r?r._colorMask:15;0!==i&&(r._colorMask=0,e.colorMask(!1,!1,!1,!1)),// Decrement the reference stencil value where the popped mask overlaps with the other ones
e.stencilOp(e.KEEP,e.KEEP,e.DECR),t.renderable=!0,t.render(this.renderer),this.renderer.batch.flush(),t.renderable=!1,0!==i&&(r._colorMask=i,e.colorMask((1&i)!=0,(2&i)!=0,(4&i)!=0,(8&i)!=0)),this._useCurrent()}},/**
     * Setup renderer to use the current stencil data.
     * @private
     */e.prototype._useCurrent=function(){var t=this.renderer.gl;t.stencilFunc(t.EQUAL,this.getStackLength(),4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP)},e}(sn),su=/** @class */function(){/** @param renderer - The renderer this System works for. */function t(t){this.renderer=t,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new nw,this.transform=null}return(/**
     * Updates the projection-matrix based on the sourceFrame → destinationFrame mapping provided.
     *
     * NOTE: It is expected you call `renderer.framebuffer.setViewport(destinationFrame)` after this. This is because
     * the framebuffer viewport converts shader vertex output in normalized device coordinates to window coordinates.
     *
     * NOTE-2: {@link RenderTextureSystem#bind} updates the projection-matrix when you bind a render-texture. It is expected
     * that you dirty the current bindings when calling this manually.
     * @param destinationFrame - The rectangle in the render-target to render the contents into. If rendering to the canvas,
     *  the origin is on the top-left; if rendering to a render-texture, the origin is on the bottom-left.
     * @param sourceFrame - The rectangle in world space that contains the contents being rendered.
     * @param resolution - The resolution of the render-target, which is the ratio of
     *  world-space (or CSS) pixels to physical pixels.
     * @param root - Whether the render-target is the screen. This is required because rendering to textures
     *  is y-flipped (i.e. upside down relative to the screen).
     */t.prototype.update=function(t,e,r,i){this.destinationFrame=t||this.destinationFrame||this.defaultFrame,this.sourceFrame=e||this.sourceFrame||t,// Calculate object-space to clip-space projection
this.calculateProjection(this.destinationFrame,this.sourceFrame,r,i),this.transform&&this.projectionMatrix.append(this.transform);var n=this.renderer;n.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,n.globalUniforms.update(),n.shader.shader&&n.shader.syncUniformGroup(n.shader.shader.uniforms.globals)},/**
     * Calculates the `projectionMatrix` to map points inside `sourceFrame` to inside `destinationFrame`.
     * @param _destinationFrame - The destination frame in the render-target.
     * @param sourceFrame - The source frame in world space.
     * @param _resolution - The render-target's resolution, i.e. ratio of CSS to physical pixels.
     * @param root - Whether rendering into the screen. Otherwise, if rendering to a framebuffer, the projection
     *  is y-flipped.
     */t.prototype.calculateProjection=function(t,e,r,i){var n=this.projectionMatrix,o=i?-1:1;n.identity(),n.a=1/e.width*2,n.d=o*(1/e.height*2),n.tx=-1-e.x*n.a,n.ty=-o-e.y*n.d},/**
     * Sets the transform of the active render target to the given matrix.
     * @param _matrix - The transformation matrix
     */t.prototype.setTransform=function(t){// this._activeRenderTarget.transform = matrix;
},t.prototype.destroy=function(){this.renderer=null},t)}(),sl=new nA,sc=new nA,sf=/** @class */function(){/**
     * @param renderer - The renderer this System works for.
     */function t(t){this.renderer=t,this.clearColor=t._backgroundColorRgba,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new nA,this.destinationFrame=new nA,this.viewportFrame=new nA}return(/**
     * Bind the current render texture.
     * @param renderTexture - RenderTexture to bind, by default its `null` - the screen.
     * @param sourceFrame - Part of world that is mapped to the renderTexture.
     * @param destinationFrame - Part of renderTexture, by default it has the same size as sourceFrame.
     */t.prototype.bind=function(t,e,r){void 0===t&&(t=null);var i,n,o,s=this.renderer;this.current=t,t?(o=(i=t.baseTexture).resolution,e||(sl.width=t.frame.width,sl.height=t.frame.height,e=sl),r||(sc.x=t.frame.x,sc.y=t.frame.y,sc.width=e.width,sc.height=e.height,r=sc),n=i.framebuffer):(o=s.resolution,e||(sl.width=s.screen.width,sl.height=s.screen.height,e=sl),r||((r=sl).width=e.width,r.height=e.height));var a=this.viewportFrame;a.x=r.x*o,a.y=r.y*o,a.width=r.width*o,a.height=r.height*o,t||(a.y=s.view.height-(a.y+a.height)),a.ceil(),this.renderer.framebuffer.bind(n,a),this.renderer.projection.update(r,e,o,!n),t?this.renderer.mask.setMaskStack(i.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(e),this.destinationFrame.copyFrom(r)},/**
     * Erases the render texture and fills the drawing area with a colour.
     * @param clearColor - The color as rgba, default to use the renderer backgroundColor
     * @param [mask=BUFFER_BITS.COLOR | BUFFER_BITS.DEPTH] - Bitwise OR of masks
     *  that indicate the buffers to be cleared, by default COLOR and DEPTH buffers.
     */t.prototype.clear=function(t,e){t=this.current?t||this.current.baseTexture.clearColor:t||this.clearColor;var r=this.destinationFrame,i=this.current?this.current.baseTexture:this.renderer.screen,n=r.width!==i.width||r.height!==i.height;if(n){var o=this.viewportFrame,s=o.x,a=o.y,h=o.width,u=o.height;s=Math.round(s),a=Math.round(a),h=Math.round(h),u=Math.round(u),// TODO: ScissorSystem should cache whether the scissor test is enabled or not.
this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(s,a,h,u)}this.renderer.framebuffer.clear(t[0],t[1],t[2],t[3],e),n&&this.renderer.scissor.pop()},t.prototype.resize=function(){// resize the root only!
this.bind(null)},/** Resets render-texture state. */t.prototype.reset=function(){this.bind(null)},t.prototype.destroy=function(){this.renderer=null},t)}();function sp(t,e,r,i,n){r.buffer.update(n)}// cv = CachedValue
// v = value
// ud = uniformData
// uv = uniformValue
// l = location
var sd={float:"\n        data[offset] = v;\n    ",vec2:"\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n    ",vec3:"\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n    ",vec4:"\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n        data[offset+3] = v[3];\n    ",mat2:"\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n\n        data[offset+4] = v[2];\n        data[offset+5] = v[3];\n    ",mat3:"\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];\n    ",mat4:"\n        for(var i = 0; i < 16; i++)\n        {\n            data[offset + i] = v[i];\n        }\n    "},s_={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:32,mat3:48,mat4:64},sy=/** @class */function(){/**
     * Makes a new Pixi program.
     * @param program - webgl program
     * @param uniformData - uniforms
     */function t(t,e){this.program=t,this.uniformData=e,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}return(/** Destroys this program. */t.prototype.destroy=function(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null},t)}(),sv=0,sm={textureCount:0,uboCount:0},sg=/** @class */function(){/** @param renderer - The renderer this System works for. */function t(t){this.destroyed=!1,this.renderer=t,// Validation check that this environment support `new Function`
this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=sv++}return(/**
     * Overrideable function by `@pixi/unsafe-eval` to silence
     * throwing an error if platform doesn't support unsafe-evals.
     * @private
     */t.prototype.systemCheck=function(){if(!/**
 * Not all platforms allow to generate function code (e.g., `new Function`).
 * this provides the platform-level detection.
 * @private
 * @returns {boolean} `true` if `new Function` is supported.
 */function(){if("boolean"==typeof t_)return t_;try{/* eslint-disable no-new-func */var t=Function("param1","param2","param3","return param1[param2] === param3;");/* eslint-enable no-new-func */t_=!0===t({a:"b"},"a","b")}catch(t){t_=!1}return t_}())throw Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")},t.prototype.contextChange=function(t){this.gl=t,this.reset()},/**
     * Changes the current shader to the one given in parameter.
     * @param shader - the new shader
     * @param dontSync - false if the shader should automatically sync its uniforms.
     * @returns the glProgram that belongs to the shader.
     */t.prototype.bind=function(t,e){t.disposeRunner.add(this),t.uniforms.globals=this.renderer.globalUniforms;var r=t.program,i=r.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(t);return this.shader=t,this.program!==r&&(this.program=r,this.gl.useProgram(i.program)),e||(sm.textureCount=0,sm.uboCount=0,this.syncUniformGroup(t.uniformGroup,sm)),i},/**
     * Uploads the uniforms values to the currently bound shader.
     * @param uniforms - the uniforms values that be applied to the current shader
     */t.prototype.setUniforms=function(t){var e=this.shader.program,r=e.glPrograms[this.renderer.CONTEXT_UID];e.syncUniforms(r.uniformData,t,this.renderer)},/* eslint-disable @typescript-eslint/explicit-module-boundary-types *//**
     * Syncs uniforms on the group
     * @param group - the uniform group to sync
     * @param syncData - this is data that is passed to the sync function and any nested sync functions
     */t.prototype.syncUniformGroup=function(t,e){var r=this.getGlProgram();t.static&&t.dirtyId===r.uniformDirtyGroups[t.id]||(r.uniformDirtyGroups[t.id]=t.dirtyId,this.syncUniforms(t,r,e))},/**
     * Overrideable by the @pixi/unsafe-eval package to use static syncUniforms instead.
     * @param group
     * @param glProgram
     * @param syncData
     */t.prototype.syncUniforms=function(t,e,r){(t.syncUniforms[this.shader.program.id]||this.createSyncGroups(t))(e.uniformData,t.uniforms,this.renderer,r)},t.prototype.createSyncGroups=function(t){var e=this.getSignature(t,this.shader.program.uniformData,"u");return this.cache[e]||(this.cache[e]=function(t,e){var r,i=["\n        var v = null;\n        var cv = null;\n        var cu = null;\n        var t = 0;\n        var gl = renderer.gl;\n    "];for(var n in t.uniforms){var o=e[n];if(!o){(null===(r=t.uniforms[n])||void 0===r?void 0:r.group)&&(t.uniforms[n].ubo?i.push("\n                        renderer.shader.syncUniformBufferGroup(uv."+n+", '"+n+"');\n                    "):i.push("\n                        renderer.shader.syncUniformGroup(uv."+n+", syncData);\n                    "));continue}for(var s=t.uniforms[n],a=!1,h=0;h<o1.length;h++)if(o1[h].test(o,s)){i.push(o1[h].code(n,s)),a=!0;break}if(!a){var u=(1!==o.size||o.isArray?o3:o2)[o.type].replace("location",'ud["'+n+'"].location');i.push('\n            cu = ud["'+n+'"];\n            cv = cu.value;\n            v = uv["'+n+'"];\n            '+u+";")}}/*
     * the introduction of syncData is to solve an issue where textures in uniform groups are not set correctly
     * the texture count was always starting from 0 in each group. This needs to increment each time a texture is used
     * no matter which group is being used
     *
     */// eslint-disable-next-line no-new-func
return Function("ud","uv","renderer","syncData",i.join("\n"))}(t,this.shader.program.uniformData)),t.syncUniforms[this.shader.program.id]=this.cache[e],t.syncUniforms[this.shader.program.id]},/**
     * Syncs uniform buffers
     * @param group - the uniform buffer group to sync
     * @param name - the name of the uniform buffer
     */t.prototype.syncUniformBufferGroup=function(t,e){var r=this.getGlProgram();if(!t.static||0!==t.dirtyId||!r.uniformGroups[t.id]){t.dirtyId=0;var i=r.uniformGroups[t.id]||this.createSyncBufferGroup(t,r,e);// TODO wrap update in a cache??
t.buffer.update(),i(r.uniformData,t.uniforms,this.renderer,sm,t.buffer)}this.renderer.buffer.bindBufferBase(t.buffer,r.uniformBufferBindings[e])},/**
     * Will create a function that uploads a uniform buffer using the STD140 standard.
     * The upload function will then be cached for future calls
     * If a group is manually managed, then a simple upload function is generated
     * @param group - the uniform buffer group to sync
     * @param glProgram - the gl program to attach the uniform bindings to
     * @param name - the name of the uniform buffer (must exist on the shader)
     */t.prototype.createSyncBufferGroup=function(t,e,r){var i=this.renderer.gl;this.renderer.buffer.bind(t.buffer);// bind them...
var n=this.gl.getUniformBlockIndex(e.program,r);e.uniformBufferBindings[r]=this.shader.uniformBindCount,i.uniformBlockBinding(e.program,n,this.shader.uniformBindCount),this.shader.uniformBindCount++;var o=this.getSignature(t,this.shader.program.uniformData,"ubo"),s=this._uboCache[o];if(s||(s=this._uboCache[o]=function(t,e){if(!t.autoManage)return{size:0,syncFunc:sp};for(var r=/**
 * logic originally from here: https://github.com/sketchpunk/FunWithWebGL2/blob/master/lesson_022/Shaders.js
 * rewrote it, but this was a great starting point to get a solid understanding of whats going on :)
 * @ignore
 * @param uniformData
 */function(t){for(var e=t.map(function(t){return{data:t,offset:0,dataLen:0,dirty:0}}),r=0,i=0,n=0,o=0;o<e.length;o++){var s=e[o];// add some size offset..
// must align to the nearest 16 bytes or internally nearest round size
if(r=s_[s.data.type],s.data.size>1&&(r=Math.max(r,16)*s.data.size),s.dataLen=r,i%r!=0&&i<16){// diff required to line up..
var a=i%r%16;i+=a,n+=a}i+r>16?(n=16*Math.ceil(n/16),s.offset=n,n+=r,i=r):(s.offset=n,i+=r,n+=r)}return{uboElements:e,size:n=16*Math.ceil(n/16)}}(function(t,e){var r=[];// build..
for(var i in t)e[i]&&r.push(e[i]);return(// sort them out by index!
r.sort(function(t,e){return t.index-e.index}),r)}(t.uniforms,e)),i=r.uboElements,n=r.size,o=["\n    var v = null;\n    var v2 = null;\n    var cv = null;\n    var t = 0;\n    var gl = renderer.gl\n    var index = 0;\n    var data = buffer.data;\n    "],s=0;s<i.length;s++){for(var a=i[s],h=t.uniforms[a.data.name],u=a.data.name,l=!1,c=0;c<o1.length;c++){var f=o1[c];if(f.codeUbo&&f.test(a.data,h)){o.push("offset = "+a.offset/4+";",o1[c].codeUbo(a.data.name,h)),l=!0;break}}if(!l){if(a.data.size>1){var p=oJ[a.data.type],d=Math.max(s_[a.data.type]/16,1),_=p/d,y=(4-_%4)%4;o.push("\n                cv = ud."+u+".value;\n                v = uv."+u+";\n                offset = "+a.offset/4+";\n\n                t = 0;\n\n                for(var i=0; i < "+a.data.size*d+"; i++)\n                {\n                    for(var j = 0; j < "+_+"; j++)\n                    {\n                        data[offset++] = v[t++];\n                    }\n                    offset += "+y+";\n                }\n\n                ")}else{var v=sd[a.data.type];o.push("\n                cv = ud."+u+".value;\n                v = uv."+u+";\n                offset = "+a.offset/4+";\n                "+v+";\n                ")}}}return o.push("\n       renderer.buffer.update(buffer);\n    "),{size:n,// eslint-disable-next-line no-new-func
syncFunc:Function("ud","uv","renderer","syncData","buffer",o.join("\n"))}}(t,this.shader.program.uniformData)),t.autoManage){var a=new Float32Array(s.size/4);t.buffer.update(a)}return e.uniformGroups[t.id]=s.syncFunc,e.uniformGroups[t.id]},/**
     * Takes a uniform group and data and generates a unique signature for them.
     * @param group - The uniform group to get signature of
     * @param group.uniforms
     * @param uniformData - Uniform information generated by the shader
     * @param preFix
     * @returns Unique signature of the uniform group
     */t.prototype.getSignature=function(t,e,r){var i=t.uniforms,n=[r+"-"];for(var o in i)n.push(o),e[o]&&n.push(e[o].type);return n.join("-")},/**
     * Returns the underlying GLShade rof the currently bound shader.
     *
     * This can be handy for when you to have a little more control over the setting of your uniforms.
     * @returns The glProgram for the currently bound Shader for this context
     */t.prototype.getGlProgram=function(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null},/**
     * Generates a glProgram version of the Shader provided.
     * @param shader - The shader that the glProgram will be based on.
     * @returns A shiny new glProgram!
     */t.prototype.generateProgram=function(t){var e=this.gl,r=t.program,i=/**
 * generates a WebGL Program object from a high level Pixi Program.
 * @param gl - a rendering context on which to generate the program
 * @param program - the high level Pixi Program.
 */function(t,e){var r=oY(t,t.VERTEX_SHADER,e.vertexSrc),i=oY(t,t.FRAGMENT_SHADER,e.fragmentSrc),n=t.createProgram();// GLSL 1.00: bind attributes sorted by name in ascending order
// GLSL 3.00: don't change the attribute locations that where chosen by the compiler
//            or assigned by the layout specifier in the shader source code
if(t.attachShader(n,r),t.attachShader(n,i),t.linkProgram(n),!t.getProgramParameter(n,t.LINK_STATUS)&&(t.getProgramParameter(n,t.LINK_STATUS)||(t.getShaderParameter(r,t.COMPILE_STATUS)||oz(t,r),t.getShaderParameter(i,t.COMPILE_STATUS)||oz(t,i),console.error("PixiJS Error: Could not initialize shader."),""!==t.getProgramInfoLog(n)&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",t.getProgramInfoLog(n)))),e.attributeData=/**
 * returns the attribute data from the program
 * @private
 * @param {WebGLProgram} [program] - the WebGL program
 * @param {WebGLRenderingContext} [gl] - the WebGL context
 * @returns {object} the attribute data for this program
 */function(t,e){for(var r={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES),n=0;n<i;n++){var o=e.getActiveAttrib(t,n);if(0!==o.name.indexOf("gl_")){var s=o0(e,o.type),a={type:s,name:o.name,size:oJ[s],location:e.getAttribLocation(t,o.name)};r[o.name]=a}}return r}(n,t),e.uniformData=/**
 * returns the uniform data from the program
 * @private
 * @param program - the webgl program
 * @param gl - the WebGL context
 * @returns {object} the uniform data for this program
 */function(t,e){for(var r={},i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),n=0;n<i;n++){var o=e.getActiveUniform(t,n),s=o.name.replace(/\[.*?\]$/,""),a=!!o.name.match(/\[.*?\]$/),h=o0(e,o.type);r[s]={name:s,index:n,type:h,size:o.size,isArray:a,value:oW(h,o.size)}}return r}(n,t),!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertexSrc)){var o=Object.keys(e.attributeData);o.sort(function(t,e){return t>e?1:-1});// eslint-disable-line no-confusing-arrow
for(var s=0;s<o.length;s++)e.attributeData[o[s]].location=s,t.bindAttribLocation(n,s,o[s]);t.linkProgram(n)}t.deleteShader(r),t.deleteShader(i);var a={};for(var s in e.uniformData){var h=e.uniformData[s];a[s]={location:t.getUniformLocation(n,s),value:oW(h.type,h.size)}}return new sy(n,a)}(e,r);return r.glPrograms[this.renderer.CONTEXT_UID]=i,i},/** Resets ShaderSystem state, does not affect WebGL state. */t.prototype.reset=function(){this.program=null,this.shader=null},/**
     * Disposes shader.
     * If disposing one equals with current shader, set current as null.
     * @param shader - Shader object
     */t.prototype.disposeShader=function(t){this.shader===t&&(this.shader=null)},/** Destroys this System and removes all its textures. */t.prototype.destroy=function(){this.renderer=null,// TODO implement destroy method for ShaderSystem
this.destroyed=!0},t)}(),sb=/** @class */function(){function t(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=z.NONE,this._blendEq=!1,// map functions for when we set state..
this.map=[],this.map[0]=this.setBlend,this.map[1]=this.setOffset,this.map[2]=this.setCullFace,this.map[3]=this.setDepthTest,this.map[4]=this.setFrontFace,this.map[5]=this.setDepthMask,this.checks=[],this.defaultState=new o9,this.defaultState.blend=!0}return t.prototype.contextChange=function(t){var e;this.gl=t,this.blendModes=(void 0===e&&(e=[]),// TODO - premultiply alpha would be different.
// add a boolean for that!
e[z.NORMAL]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.ADD]=[t.ONE,t.ONE],e[z.MULTIPLY]=[t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.SCREEN]=[t.ONE,t.ONE_MINUS_SRC_COLOR,t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.OVERLAY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.DARKEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.LIGHTEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.COLOR_DODGE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.COLOR_BURN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.HARD_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.SOFT_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.DIFFERENCE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.EXCLUSION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.HUE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.SATURATION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.COLOR]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.LUMINOSITY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.NONE]=[0,0],// not-premultiplied blend modes
e[z.NORMAL_NPM]=[t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA],e[z.ADD_NPM]=[t.SRC_ALPHA,t.ONE,t.ONE,t.ONE],e[z.SCREEN_NPM]=[t.SRC_ALPHA,t.ONE_MINUS_SRC_COLOR,t.ONE,t.ONE_MINUS_SRC_ALPHA],// composite operations
e[z.SRC_IN]=[t.DST_ALPHA,t.ZERO],e[z.SRC_OUT]=[t.ONE_MINUS_DST_ALPHA,t.ZERO],e[z.SRC_ATOP]=[t.DST_ALPHA,t.ONE_MINUS_SRC_ALPHA],e[z.DST_OVER]=[t.ONE_MINUS_DST_ALPHA,t.ONE],e[z.DST_IN]=[t.ZERO,t.SRC_ALPHA],e[z.DST_OUT]=[t.ZERO,t.ONE_MINUS_SRC_ALPHA],e[z.DST_ATOP]=[t.ONE_MINUS_DST_ALPHA,t.SRC_ALPHA],e[z.XOR]=[t.ONE_MINUS_DST_ALPHA,t.ONE_MINUS_SRC_ALPHA],// SUBTRACT from flash
e[z.SUBTRACT]=[t.ONE,t.ONE,t.ONE,t.ONE,t.FUNC_REVERSE_SUBTRACT,t.FUNC_ADD],e),this.set(this.defaultState),this.reset()},/**
     * Sets the current state
     * @param {*} state - The state to set.
     */t.prototype.set=function(t){// TODO maybe to an object check? ( this.state === state )?
if(t=t||this.defaultState,this.stateId!==t.data){// order from least to most common
for(var e=this.stateId^t.data,r=0;e;)1&e&&this.map[r].call(this,!!(t.data&1<<r)),e>>=1,r++;this.stateId=t.data}// based on the above settings we check for specific modes..
// for example if blend is active we check and set the blend modes
// or of polygon offset is active we check the poly depth.
for(var r=0;r<this.checks.length;r++)this.checks[r](this,t)},/**
     * Sets the state, when previous state is unknown.
     * @param {*} state - The state to set
     */t.prototype.forceState=function(t){t=t||this.defaultState;for(var e=0;e<this.map.length;e++)this.map[e].call(this,!!(t.data&1<<e));for(var e=0;e<this.checks.length;e++)this.checks[e](this,t);this.stateId=t.data},/**
     * Sets whether to enable or disable blending.
     * @param value - Turn on or off WebGl blending.
     */t.prototype.setBlend=function(e){this.updateCheck(t.checkBlendMode,e),this.gl[e?"enable":"disable"](this.gl.BLEND)},/**
     * Sets whether to enable or disable polygon offset fill.
     * @param value - Turn on or off webgl polygon offset testing.
     */t.prototype.setOffset=function(e){this.updateCheck(t.checkPolygonOffset,e),this.gl[e?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)},/**
     * Sets whether to enable or disable depth test.
     * @param value - Turn on or off webgl depth testing.
     */t.prototype.setDepthTest=function(t){this.gl[t?"enable":"disable"](this.gl.DEPTH_TEST)},/**
     * Sets whether to enable or disable depth mask.
     * @param value - Turn on or off webgl depth mask.
     */t.prototype.setDepthMask=function(t){this.gl.depthMask(t)},/**
     * Sets whether to enable or disable cull face.
     * @param {boolean} value - Turn on or off webgl cull face.
     */t.prototype.setCullFace=function(t){this.gl[t?"enable":"disable"](this.gl.CULL_FACE)},/**
     * Sets the gl front face.
     * @param {boolean} value - true is clockwise and false is counter-clockwise
     */t.prototype.setFrontFace=function(t){this.gl.frontFace(this.gl[t?"CW":"CCW"])},/**
     * Sets the blend mode.
     * @param {number} value - The blend mode to set to.
     */t.prototype.setBlendMode=function(t){if(t!==this.blendMode){this.blendMode=t;var e=this.blendModes[t],r=this.gl;2===e.length?r.blendFunc(e[0],e[1]):r.blendFuncSeparate(e[0],e[1],e[2],e[3]),6===e.length?(this._blendEq=!0,r.blendEquationSeparate(e[4],e[5])):this._blendEq&&(this._blendEq=!1,r.blendEquationSeparate(r.FUNC_ADD,r.FUNC_ADD))}},/**
     * Sets the polygon offset.
     * @param {number} value - the polygon offset
     * @param {number} scale - the polygon offset scale
     */t.prototype.setPolygonOffset=function(t,e){this.gl.polygonOffset(t,e)},// used
/** Resets all the logic and disables the VAOs. */t.prototype.reset=function(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)},/**
     * Checks to see which updates should be checked based on which settings have been activated.
     *
     * For example, if blend is enabled then we should check the blend modes each time the state is changed
     * or if polygon fill is activated then we need to check if the polygon offset changes.
     * The idea is that we only check what we have too.
     * @param func - the checking function to add or remove
     * @param value - should the check function be added or removed.
     */t.prototype.updateCheck=function(t,e){var r=this.checks.indexOf(t);e&&-1===r?this.checks.push(t):e||-1===r||this.checks.splice(r,1)},/**
     * A private little wrapper function that we call to check the blend mode.
     * @param system - the System to perform the state check on
     * @param state - the state that the blendMode will pulled from
     */t.checkBlendMode=function(t,e){t.setBlendMode(e.blendMode)},/**
     * A private little wrapper function that we call to check the polygon offset.
     * @param system - the System to perform the state check on
     * @param state - the state that the blendMode will pulled from
     */t.checkPolygonOffset=function(t,e){t.setPolygonOffset(1,e.polygonOffset)},/**
     * @ignore
     */t.prototype.destroy=function(){this.gl=null},t}(),sx=/** @class */function(){/** @param renderer - The renderer this System works for. */function t(t){this.renderer=t,this.count=0,this.checkCount=0,this.maxIdle=eh.GC_MAX_IDLE,this.checkCountMax=eh.GC_MAX_CHECK_COUNT,this.mode=eh.GC_MODE}return(/**
     * Checks to see when the last time a texture was used
     * if the texture has not been used for a specified amount of time it will be removed from the GPU
     */t.prototype.postrender=function(){this.renderer.renderingToScreen&&(this.count++,this.mode!==tr.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))},/**
     * Checks to see when the last time a texture was used
     * if the texture has not been used for a specified amount of time it will be removed from the GPU
     */t.prototype.run=function(){for(var t=this.renderer.texture,e=t.managedTextures,r=!1,i=0;i<e.length;i++){var n=e[i];// only supports non generated textures at the moment!
!n.framebuffer&&this.count-n.touched>this.maxIdle&&(t.destroyTexture(n,!0),e[i]=null,r=!0)}if(r){for(var o=0,i=0;i<e.length;i++)null!==e[i]&&(e[o++]=e[i]);e.length=o}},/**
     * Removes all the textures within the specified displayObject and its children from the GPU
     * @param {PIXI.DisplayObject} displayObject - the displayObject to remove the textures from.
     */t.prototype.unload=function(t){var e=this.renderer.texture,r=t._texture;// only destroy non generated textures
r&&!r.framebuffer&&e.destroyTexture(r);for(var i=t.children.length-1;i>=0;i--)this.unload(t.children[i])},t.prototype.destroy=function(){this.renderer=null},t)}(),sT=function(t){this.texture=t,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=K.UNSIGNED_BYTE,this.internalFormat=W.RGBA,this.samplerType=0},sE=/** @class */function(){/**
     * @param renderer - The renderer this system works for.
     */function t(t){this.renderer=t,// TODO set to max textures...
this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new n9,this.hasIntegerTextures=!1}return(/** Sets up the renderer context and necessary buffers. */t.prototype.contextChange=function(){var t,e,r,i,n,o,s,a,h,u,l,c,f,p,d,_,y,v,m,g,b,x,T,E=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=("WebGL2RenderingContext"in globalThis&&E instanceof globalThis.WebGL2RenderingContext?((t={})[K.UNSIGNED_BYTE]=((e={})[W.RGBA]=E.RGBA8,e[W.RGB]=E.RGB8,e[W.RG]=E.RG8,e[W.RED]=E.R8,e[W.RGBA_INTEGER]=E.RGBA8UI,e[W.RGB_INTEGER]=E.RGB8UI,e[W.RG_INTEGER]=E.RG8UI,e[W.RED_INTEGER]=E.R8UI,e[W.ALPHA]=E.ALPHA,e[W.LUMINANCE]=E.LUMINANCE,e[W.LUMINANCE_ALPHA]=E.LUMINANCE_ALPHA,e),t[K.BYTE]=((r={})[W.RGBA]=E.RGBA8_SNORM,r[W.RGB]=E.RGB8_SNORM,r[W.RG]=E.RG8_SNORM,r[W.RED]=E.R8_SNORM,r[W.RGBA_INTEGER]=E.RGBA8I,r[W.RGB_INTEGER]=E.RGB8I,r[W.RG_INTEGER]=E.RG8I,r[W.RED_INTEGER]=E.R8I,r),t[K.UNSIGNED_SHORT]=((i={})[W.RGBA_INTEGER]=E.RGBA16UI,i[W.RGB_INTEGER]=E.RGB16UI,i[W.RG_INTEGER]=E.RG16UI,i[W.RED_INTEGER]=E.R16UI,i[W.DEPTH_COMPONENT]=E.DEPTH_COMPONENT16,i),t[K.SHORT]=((n={})[W.RGBA_INTEGER]=E.RGBA16I,n[W.RGB_INTEGER]=E.RGB16I,n[W.RG_INTEGER]=E.RG16I,n[W.RED_INTEGER]=E.R16I,n),t[K.UNSIGNED_INT]=((o={})[W.RGBA_INTEGER]=E.RGBA32UI,o[W.RGB_INTEGER]=E.RGB32UI,o[W.RG_INTEGER]=E.RG32UI,o[W.RED_INTEGER]=E.R32UI,o[W.DEPTH_COMPONENT]=E.DEPTH_COMPONENT24,o),t[K.INT]=((s={})[W.RGBA_INTEGER]=E.RGBA32I,s[W.RGB_INTEGER]=E.RGB32I,s[W.RG_INTEGER]=E.RG32I,s[W.RED_INTEGER]=E.R32I,s),t[K.FLOAT]=((a={})[W.RGBA]=E.RGBA32F,a[W.RGB]=E.RGB32F,a[W.RG]=E.RG32F,a[W.RED]=E.R32F,a[W.DEPTH_COMPONENT]=E.DEPTH_COMPONENT32F,a),t[K.HALF_FLOAT]=((h={})[W.RGBA]=E.RGBA16F,h[W.RGB]=E.RGB16F,h[W.RG]=E.RG16F,h[W.RED]=E.R16F,h),t[K.UNSIGNED_SHORT_5_6_5]=((u={})[W.RGB]=E.RGB565,u),t[K.UNSIGNED_SHORT_4_4_4_4]=((l={})[W.RGBA]=E.RGBA4,l),t[K.UNSIGNED_SHORT_5_5_5_1]=((c={})[W.RGBA]=E.RGB5_A1,c),t[K.UNSIGNED_INT_2_10_10_10_REV]=((f={})[W.RGBA]=E.RGB10_A2,f[W.RGBA_INTEGER]=E.RGB10_A2UI,f),t[K.UNSIGNED_INT_10F_11F_11F_REV]=((p={})[W.RGB]=E.R11F_G11F_B10F,p),t[K.UNSIGNED_INT_5_9_9_9_REV]=((d={})[W.RGB]=E.RGB9_E5,d),t[K.UNSIGNED_INT_24_8]=((_={})[W.DEPTH_STENCIL]=E.DEPTH24_STENCIL8,_),t[K.FLOAT_32_UNSIGNED_INT_24_8_REV]=((y={})[W.DEPTH_STENCIL]=E.DEPTH32F_STENCIL8,y),T=t):((v={})[K.UNSIGNED_BYTE]=((m={})[W.RGBA]=E.RGBA,m[W.RGB]=E.RGB,m[W.ALPHA]=E.ALPHA,m[W.LUMINANCE]=E.LUMINANCE,m[W.LUMINANCE_ALPHA]=E.LUMINANCE_ALPHA,m),v[K.UNSIGNED_SHORT_5_6_5]=((g={})[W.RGB]=E.RGB,g),v[K.UNSIGNED_SHORT_4_4_4_4]=((b={})[W.RGBA]=E.RGBA,b),v[K.UNSIGNED_SHORT_5_5_5_1]=((x={})[W.RGBA]=E.RGBA,x),T=v),T);var A=E.getParameter(E.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=A;for(var S=0;S<A;S++)this.boundTextures[S]=null;// TODO move this.. to a nice make empty textures class..
this.emptyTextures={};var R=new sT(E.createTexture());E.bindTexture(E.TEXTURE_2D,R.texture),E.texImage2D(E.TEXTURE_2D,0,E.RGBA,1,1,0,E.RGBA,E.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[E.TEXTURE_2D]=R,this.emptyTextures[E.TEXTURE_CUBE_MAP]=new sT(E.createTexture()),E.bindTexture(E.TEXTURE_CUBE_MAP,this.emptyTextures[E.TEXTURE_CUBE_MAP].texture);for(var S=0;S<6;S++)E.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,E.RGBA,1,1,0,E.RGBA,E.UNSIGNED_BYTE,null);E.texParameteri(E.TEXTURE_CUBE_MAP,E.TEXTURE_MAG_FILTER,E.LINEAR),E.texParameteri(E.TEXTURE_CUBE_MAP,E.TEXTURE_MIN_FILTER,E.LINEAR);for(var S=0;S<this.boundTextures.length;S++)this.bind(null,S)},/**
     * Bind a texture to a specific location
     *
     * If you want to unbind something, please use `unbind(texture)` instead of `bind(null, textureLocation)`
     * @param texture - Texture to bind
     * @param [location=0] - Location to bind at
     */t.prototype.bind=function(t,e){void 0===e&&(e=0);var r=this.gl;// cannot bind partial texture
// TODO: report a warning
if((t=null==t?void 0:t.castToBaseTexture())&&t.valid&&!t.parentTextureArray){t.touched=this.renderer.textureGC.count;var i=t._glTextures[this.CONTEXT_UID]||this.initTexture(t);this.boundTextures[e]!==t&&(this.currentLocation!==e&&(this.currentLocation=e,r.activeTexture(r.TEXTURE0+e)),r.bindTexture(t.target,i.texture)),i.dirtyId!==t.dirtyId?(this.currentLocation!==e&&(this.currentLocation=e,r.activeTexture(r.TEXTURE0+e)),this.updateTexture(t)):i.dirtyStyleId!==t.dirtyStyleId&&this.updateTextureStyle(t),this.boundTextures[e]=t}else this.currentLocation!==e&&(this.currentLocation=e,r.activeTexture(r.TEXTURE0+e)),r.bindTexture(r.TEXTURE_2D,this.emptyTextures[r.TEXTURE_2D].texture),this.boundTextures[e]=null},/** Resets texture location and bound textures Actual `bind(null, i)` calls will be performed at next `unbind()` call */t.prototype.reset=function(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(var t=0;t<this.boundTextures.length;t++)this.boundTextures[t]=this.unknownTexture},/**
     * Unbind a texture.
     * @param texture - Texture to bind
     */t.prototype.unbind=function(t){var e=this.gl,r=this.boundTextures;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;// someone changed webGL state,
// we have to be sure that our texture does not appear in multi-texture renderer samplers
for(var i=0;i<r.length;i++)r[i]===this.unknownTexture&&this.bind(null,i)}for(var i=0;i<r.length;i++)r[i]===t&&(this.currentLocation!==i&&(e.activeTexture(e.TEXTURE0+i),this.currentLocation=i),e.bindTexture(t.target,this.emptyTextures[t.target].texture),r[i]=null)},/**
     * Ensures that current boundTextures all have FLOAT sampler type,
     * see {@link PIXI.SAMPLER_TYPES} for explanation.
     * @param maxTextures - number of locations to check
     */t.prototype.ensureSamplerType=function(t){var e=this.boundTextures,r=this.hasIntegerTextures,i=this.CONTEXT_UID;if(r)for(var n=t-1;n>=0;--n){var o=e[n];o&&o._glTextures[i].samplerType!==Z.FLOAT&&this.renderer.texture.unbind(o)}},/**
     * Initialize a texture
     * @private
     * @param texture - Texture to initialize
     */t.prototype.initTexture=function(t){var e=new sT(this.gl.createTexture());return(// guarantee an update..
e.dirtyId=-1,t._glTextures[this.CONTEXT_UID]=e,this.managedTextures.push(t),t.on("dispose",this.destroyTexture,this),e)},t.prototype.initTextureType=function(t,e){var r,i;e.internalFormat=null!==(i=null===(r=this.internalFormats[t.type])||void 0===r?void 0:r[t.format])&&void 0!==i?i:t.format,2===this.webGLVersion&&t.type===K.HALF_FLOAT?// we have to convert it to WebGL HALF_FLOAT
e.type=this.gl.HALF_FLOAT:e.type=t.type},/**
     * Update a texture
     * @private
     * @param {PIXI.BaseTexture} texture - Texture to initialize
     */t.prototype.updateTexture=function(t){var e=t._glTextures[this.CONTEXT_UID];if(e){var r=this.renderer;if(this.initTextureType(t,e),t.resource&&t.resource.upload(r,t,e))e.samplerType!==Z.FLOAT&&(this.hasIntegerTextures=!0);else{// default, renderTexture-like logic
var i=t.realWidth,n=t.realHeight,o=r.gl;(e.width!==i||e.height!==n||e.dirtyId<0)&&(e.width=i,e.height=n,o.texImage2D(t.target,0,e.internalFormat,i,n,0,t.format,e.type,null))}t.dirtyStyleId!==e.dirtyStyleId&&this.updateTextureStyle(t),e.dirtyId=t.dirtyId}},/**
     * Deletes the texture from WebGL
     * @private
     * @param texture - the texture to destroy
     * @param [skipRemove=false] - Whether to skip removing the texture from the TextureManager.
     */t.prototype.destroyTexture=function(t,e){var r=this.gl;if((t=t.castToBaseTexture())._glTextures[this.CONTEXT_UID]&&(this.unbind(t),r.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),t.off("dispose",this.destroyTexture,this),delete t._glTextures[this.CONTEXT_UID],!e)){var i=this.managedTextures.indexOf(t);-1!==i&&nu(this.managedTextures,i,1)}},/**
     * Update texture style such as mipmap flag
     * @private
     * @param {PIXI.BaseTexture} texture - Texture to update
     */t.prototype.updateTextureStyle=function(t){var e=t._glTextures[this.CONTEXT_UID];e&&(t.mipmap!==$.POW2&&2===this.webGLVersion||t.isPowerOfTwo?e.mipmap=t.mipmap>=1:e.mipmap=!1,2===this.webGLVersion||t.isPowerOfTwo?e.wrapMode=t.wrapMode:e.wrapMode=Q.CLAMP,t.resource&&t.resource.style(this.renderer,t,e)||this.setStyle(t,e),e.dirtyStyleId=t.dirtyStyleId)},/**
     * Set style for texture
     * @private
     * @param texture - Texture to update
     * @param glTexture
     */t.prototype.setStyle=function(t,e){var r=this.gl;if(e.mipmap&&t.mipmap!==$.ON_MANUAL&&r.generateMipmap(t.target),r.texParameteri(t.target,r.TEXTURE_WRAP_S,e.wrapMode),r.texParameteri(t.target,r.TEXTURE_WRAP_T,e.wrapMode),e.mipmap){/* eslint-disable max-len */r.texParameteri(t.target,r.TEXTURE_MIN_FILTER,t.scaleMode===J.LINEAR?r.LINEAR_MIPMAP_LINEAR:r.NEAREST_MIPMAP_NEAREST);/* eslint-disable max-len */var i=this.renderer.context.extensions.anisotropicFiltering;if(i&&t.anisotropicLevel>0&&t.scaleMode===J.LINEAR){var n=Math.min(t.anisotropicLevel,r.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));r.texParameterf(t.target,i.TEXTURE_MAX_ANISOTROPY_EXT,n)}}else r.texParameteri(t.target,r.TEXTURE_MIN_FILTER,t.scaleMode===J.LINEAR?r.LINEAR:r.NEAREST);r.texParameteri(t.target,r.TEXTURE_MAG_FILTER,t.scaleMode===J.LINEAR?r.LINEAR:r.NEAREST)},t.prototype.destroy=function(){this.renderer=null},t)}(),sA={__proto__:null,FilterSystem:oC,BatchSystem:oN,ContextSystem:oB,FramebufferSystem:ok,GeometrySystem:oj,MaskSystem:si,ScissorSystem:sa,StencilSystem:sh,ProjectionSystem:su,RenderTextureSystem:sf,ShaderSystem:sg,StateSystem:sb,TextureGCSystem:sx,TextureSystem:sE},sS=new nw,sR=/** @class */function(t){/**
     * @param type - The renderer type.
     * @param {PIXI.IRendererOptions} [options] - The optional renderer parameters.
     * @param {boolean} [options.antialias=false] -
     *  **WebGL Only.** Whether to enable anti-aliasing. This may affect performance.
     * @param {boolean} [options.autoDensity=false] -
     *  Whether the CSS dimensions of the renderer's view should be resized automatically.
     * @param {number} [options.backgroundAlpha=1] -
     *  Transparency of the background color, value from `0` (fully transparent) to `1` (fully opaque).
     * @param {number} [options.backgroundColor=0x000000] -
     *  The background color used to clear the canvas. It accepts hex numbers (e.g. `0xff0000`).
     * @param {boolean} [options.clearBeforeRender=true] - Whether to clear the canvas before new render passes.
     * @param {PIXI.IRenderingContext} [options.context] - **WebGL Only.** User-provided WebGL rendering context object.
     * @param {number} [options.height=600] - The height of the renderer's view.
     * @param {string} [options.powerPreference] -
     *  **WebGL Only.** A hint indicating what configuration of GPU is suitable for the WebGL context,
     *  can be `'default'`, `'high-performance'` or `'low-power'`.
     *  Setting to `'high-performance'` will prioritize rendering performance over power consumption,
     *  while setting to `'low-power'` will prioritize power saving over rendering performance.
     * @param {boolean} [options.premultipliedAlpha=true] -
     *  **WebGL Only.** Whether the compositor will assume the drawing buffer contains colors with premultiplied alpha.
     * @param {boolean} [options.preserveDrawingBuffer=false] -
     *  **WebGL Only.** Whether to enable drawing buffer preservation. If enabled, the drawing buffer will preserve
     *  its value until cleared or overwritten. Enable this if you need to call `toDataUrl` on the WebGL context.
     * @param {number} [options.resolution=PIXI.settings.RESOLUTION] -
     *  The resolution / device pixel ratio of the renderer.
     * @param {boolean} [options.transparent] -
     *  **Deprecated since 6.0.0, Use `backgroundAlpha` instead.** \
     *  `true` sets `backgroundAlpha` to `0`, `false` sets `backgroundAlpha` to `1`.
     * @param {boolean|'notMultiplied'} [options.useContextAlpha=true] -
     *  Pass-through value for canvas' context attribute `alpha`. This option is for cases where the
     *  canvas needs to be opaque, possibly for performance reasons on some older devices.
     *  If you want to set transparency, please use `backgroundAlpha`. \
     *  **WebGL Only:** When set to `'notMultiplied'`, the canvas' context attribute `alpha` will be
     *  set to `true` and `premultipliedAlpha` will be to `false`.
     * @param {HTMLCanvasElement} [options.view=null] -
     *  The canvas to use as the view. If omitted, a new canvas will be created.
     * @param {number} [options.width=800] - The width of the renderer's view.
     */function e(e,r){void 0===e&&(e=H.UNKNOWN);var i=t.call(this)||this;return(// Add the default render options
r=Object.assign({},eh.RENDER_OPTIONS,r),/**
         * The supplied constructor options.
         * @member {object}
         * @readonly
         */i.options=r,/**
         * The type of the renderer.
         * @member {number}
         * @default PIXI.RENDERER_TYPE.UNKNOWN
         * @see PIXI.RENDERER_TYPE
         */i.type=e,/**
         * Measurements of the screen. (0, 0, screenWidth, screenHeight).
         *
         * Its safe to use as filterArea or hitArea for the whole stage.
         * @member {PIXI.Rectangle}
         */i.screen=new nA(0,0,r.width,r.height),/**
         * The canvas element that everything is drawn to.
         * @member {HTMLCanvasElement}
         */i.view=r.view||eh.ADAPTER.createCanvas(),/**
         * The resolution / device pixel ratio of the renderer.
         * @member {number}
         * @default PIXI.settings.RESOLUTION
         */i.resolution=r.resolution||eh.RESOLUTION,/**
         * Pass-thru setting for the canvas' context `alpha` property. This is typically
         * not something you need to fiddle with. If you want transparency, use `backgroundAlpha`.
         * @member {boolean}
         */i.useContextAlpha=r.useContextAlpha,/**
         * Whether CSS dimensions of canvas view should be resized to screen dimensions automatically.
         * @member {boolean}
         */i.autoDensity=!!r.autoDensity,/**
         * The value of the preserveDrawingBuffer flag affects whether or not the contents of
         * the stencil buffer is retained after rendering.
         * @member {boolean}
         */i.preserveDrawingBuffer=r.preserveDrawingBuffer,/**
         * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
         * If the scene is NOT transparent PixiJS will use a canvas sized fillRect operation every
         * frame to set the canvas background color. If the scene is transparent PixiJS will use clearRect
         * to clear the canvas every frame. Disable this by setting this to false. For example, if
         * your game has a canvas filling background image you often don't need this set.
         * @member {boolean}
         * @default
         */i.clearBeforeRender=r.clearBeforeRender,/**
         * The background color as a number.
         * @member {number}
         * @protected
         */i._backgroundColor=0,/**
         * The background color as an [R, G, B, A] array.
         * @member {number[]}
         * @protected
         */i._backgroundColorRgba=[0,0,0,1],/**
         * The background color as a string.
         * @member {string}
         * @protected
         */i._backgroundColorString="#000000",i.backgroundColor=r.backgroundColor||i._backgroundColor,i.backgroundAlpha=r.backgroundAlpha,void 0!==r.transparent&&(np("6.0.0","Option transparent is deprecated, please use backgroundAlpha instead."),i.useContextAlpha=r.transparent,i.backgroundAlpha=r.transparent?0:1),/**
         * The last root object that the renderer tried to render.
         * @member {PIXI.DisplayObject}
         * @protected
         */i._lastObjectRendered=null,/**
         * Collection of plugins.
         * @readonly
         * @member {object}
         */i.plugins={},i)}return n3(e,t),/**
     * Initialize the plugins.
     * @protected
     * @param {object} staticMap - The dictionary of statically saved plugins.
     */e.prototype.initPlugins=function(t){for(var e in t)this.plugins[e]=new t[e](this)},Object.defineProperty(e.prototype,"width",{/**
         * Same as view.width, actual number of pixels in the canvas by horizontal.
         * @member {number}
         * @readonly
         * @default 800
         */get:function(){return this.view.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{/**
         * Same as view.height, actual number of pixels in the canvas by vertical.
         * @member {number}
         * @readonly
         * @default 600
         */get:function(){return this.view.height},enumerable:!1,configurable:!0}),/**
     * Resizes the screen and canvas as close as possible to the specified width and height.
     * Canvas dimensions are multiplied by resolution and rounded to the nearest integers.
     * The new canvas dimensions divided by the resolution become the new screen dimensions.
     * @param desiredScreenWidth - The desired width of the screen.
     * @param desiredScreenHeight - The desired height of the screen.
     */e.prototype.resize=function(t,e){this.view.width=Math.round(t*this.resolution),this.view.height=Math.round(e*this.resolution);var r=this.view.width/this.resolution,i=this.view.height/this.resolution;this.screen.width=r,this.screen.height=i,this.autoDensity&&(this.view.style.width=r+"px",this.view.style.height=i+"px"),/**
         * Fired after view has been resized.
         * @event PIXI.Renderer#resize
         * @param {number} screenWidth - The new width of the screen.
         * @param {number} screenHeight - The new height of the screen.
         */this.emit("resize",r,i)},/**
     * @ignore
     */e.prototype.generateTexture=function(t,e,r,i){void 0===e&&(e={}),"number"==typeof e&&(np("6.1.0","generateTexture options (scaleMode, resolution, region) are now object options."),e={scaleMode:e,resolution:r,region:i});var n=e.region,o=function(t,e){var r={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&0>e.indexOf(i)&&(r[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(t);n<i.length;n++)0>e.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(r[i[n]]=t[i[n]]);return r}(e,["region"]);0===(i=n||t.getLocalBounds(null,!0)).width&&(i.width=1),0===i.height&&(i.height=1);var s=oy.create(n4({width:i.width,height:i.height},o));return sS.tx=-i.x,sS.ty=-i.y,this.render(t,{renderTexture:s,clear:!1,transform:sS,skipUpdateTransform:!!t.parent}),s},/**
     * Removes everything from the renderer and optionally removes the Canvas DOM element.
     * @param [removeView=false] - Removes the Canvas element from the DOM.
     */e.prototype.destroy=function(t){for(var e in this.plugins)this.plugins[e].destroy(),this.plugins[e]=null;t&&this.view.parentNode&&this.view.parentNode.removeChild(this.view),// null-ing all objects, that's a tradition!
this.plugins=null,this.type=H.UNKNOWN,this.view=null,this.screen=null,this._tempDisplayObjectParent=null,this.options=null,this._backgroundColorRgba=null,this._backgroundColorString=null,this._lastObjectRendered=null},Object.defineProperty(e.prototype,"backgroundColor",{/**
         * The background color to fill if not transparent
         * @member {number}
         */get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this._backgroundColorString=ne(t),nt(t,this._backgroundColorRgba)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"backgroundAlpha",{/**
         * The background color alpha. Setting this to 0 will make the canvas transparent.
         * @member {number}
         */get:function(){return this._backgroundColorRgba[3]},set:function(t){this._backgroundColorRgba[3]=t},enumerable:!1,configurable:!0}),e}(/*@__PURE__*/tM(eu)),sO=function(t){this.buffer=t||null,this.updateID=-1,this.byteLength=-1,this.refCount=0},sI=/** @class */function(){/**
     * @param {PIXI.Renderer} renderer - The renderer this System works for.
     */function t(t){this.renderer=t,this.managedBuffers={},this.boundBufferBases={}}return(/**
     * @ignore
     */t.prototype.destroy=function(){this.renderer=null},/** Sets up the renderer context and necessary buffers. */t.prototype.contextChange=function(){this.disposeAll(!0),this.gl=this.renderer.gl,// TODO fill out...
this.CONTEXT_UID=this.renderer.CONTEXT_UID},/**
     * This binds specified buffer. On first run, it will create the webGL buffers for the context too
     * @param buffer - the buffer to bind to the renderer
     */t.prototype.bind=function(t){var e=this.gl,r=this.CONTEXT_UID,i=t._glBuffers[r]||this.createGLBuffer(t);e.bindBuffer(t.type,i.buffer)},/**
     * Binds an uniform buffer to at the given index.
     *
     * A cache is used so a buffer will not be bound again if already bound.
     * @param buffer - the buffer to bind
     * @param index - the base index to bind it to.
     */t.prototype.bindBufferBase=function(t,e){var r=this.gl,i=this.CONTEXT_UID;if(this.boundBufferBases[e]!==t){var n=t._glBuffers[i]||this.createGLBuffer(t);this.boundBufferBases[e]=t,r.bindBufferBase(r.UNIFORM_BUFFER,e,n.buffer)}},/**
     * Binds a buffer whilst also binding its range.
     * This will make the buffer start from the offset supplied rather than 0 when it is read.
     * @param buffer - the buffer to bind
     * @param index - the base index to bind at, defaults to 0
     * @param offset - the offset to bind at (this is blocks of 256). 0 = 0, 1 = 256, 2 = 512 etc
     */t.prototype.bindBufferRange=function(t,e,r){var i=this.gl,n=this.CONTEXT_UID;r=r||0;var o=t._glBuffers[n]||this.createGLBuffer(t);i.bindBufferRange(i.UNIFORM_BUFFER,e||0,o.buffer,256*r,256)},/**
     * Will ensure the data in the buffer is uploaded to the GPU.
     * @param {PIXI.Buffer} buffer - the buffer to update
     */t.prototype.update=function(t){var e=this.gl,r=this.CONTEXT_UID,i=t._glBuffers[r];if(t._updateID!==i.updateID){if(i.updateID=t._updateID,e.bindBuffer(t.type,i.buffer),i.byteLength>=t.data.byteLength)e.bufferSubData(t.type,0,t.data);else{var n=t.static?e.STATIC_DRAW:e.DYNAMIC_DRAW;i.byteLength=t.data.byteLength,e.bufferData(t.type,t.data,n)}}},/**
     * Disposes buffer
     * @param {PIXI.Buffer} buffer - buffer with data
     * @param {boolean} [contextLost=false] - If context was lost, we suppress deleteVertexArray
     */t.prototype.dispose=function(t,e){if(this.managedBuffers[t.id]){delete this.managedBuffers[t.id];var r=t._glBuffers[this.CONTEXT_UID],i=this.gl;t.disposeRunner.remove(this),r&&(e||i.deleteBuffer(r.buffer),delete t._glBuffers[this.CONTEXT_UID])}},/**
     * dispose all WebGL resources of all managed buffers
     * @param {boolean} [contextLost=false] - If context was lost, we suppress `gl.delete` calls
     */t.prototype.disposeAll=function(t){for(var e=Object.keys(this.managedBuffers),r=0;r<e.length;r++)this.dispose(this.managedBuffers[e[r]],t)},/**
     * creates and attaches a GLBuffer object tied to the current context.
     * @param buffer
     * @protected
     */t.prototype.createGLBuffer=function(t){var e=this.CONTEXT_UID,r=this.gl;return t._glBuffers[e]=new sO(r.createBuffer()),this.managedBuffers[t.id]=t,t.disposeRunner.add(this),t._glBuffers[e]},t)}(),sP=/** @class */function(t){/**
     * @param {PIXI.IRendererOptions} [options] - The optional renderer parameters.
     * @param {boolean} [options.antialias=false] -
     *  **WebGL Only.** Whether to enable anti-aliasing. This may affect performance.
     * @param {boolean} [options.autoDensity=false] -
     *  Whether the CSS dimensions of the renderer's view should be resized automatically.
     * @param {number} [options.backgroundAlpha=1] -
     *  Transparency of the background color, value from `0` (fully transparent) to `1` (fully opaque).
     * @param {number} [options.backgroundColor=0x000000] -
     *  The background color used to clear the canvas. It accepts hex numbers (e.g. `0xff0000`).
     * @param {boolean} [options.clearBeforeRender=true] - Whether to clear the canvas before new render passes.
     * @param {PIXI.IRenderingContext} [options.context] - **WebGL Only.** User-provided WebGL rendering context object.
     * @param {number} [options.height=600] - The height of the renderer's view.
     * @param {string} [options.powerPreference] -
     *  **WebGL Only.** A hint indicating what configuration of GPU is suitable for the WebGL context,
     *  can be `'default'`, `'high-performance'` or `'low-power'`.
     *  Setting to `'high-performance'` will prioritize rendering performance over power consumption,
     *  while setting to `'low-power'` will prioritize power saving over rendering performance.
     * @param {boolean} [options.premultipliedAlpha=true] -
     *  **WebGL Only.** Whether the compositor will assume the drawing buffer contains colors with premultiplied alpha.
     * @param {boolean} [options.preserveDrawingBuffer=false] -
     *  **WebGL Only.** Whether to enable drawing buffer preservation. If enabled, the drawing buffer will preserve
     *  its value until cleared or overwritten. Enable this if you need to call `toDataUrl` on the WebGL context.
     * @param {number} [options.resolution=PIXI.settings.RESOLUTION] -
     *  The resolution / device pixel ratio of the renderer.
     * @param {boolean} [options.transparent] -
     *  **Deprecated since 6.0.0, Use `backgroundAlpha` instead.** \
     *  `true` sets `backgroundAlpha` to `0`, `false` sets `backgroundAlpha` to `1`.
     * @param {boolean|'notMultiplied'} [options.useContextAlpha=true] -
     *  Pass-through value for canvas' context attribute `alpha`. This option is for cases where the
     *  canvas needs to be opaque, possibly for performance reasons on some older devices.
     *  If you want to set transparency, please use `backgroundAlpha`. \
     *  **WebGL Only:** When set to `'notMultiplied'`, the canvas' context attribute `alpha` will be
     *  set to `true` and `premultipliedAlpha` will be to `false`.
     * @param {HTMLCanvasElement} [options.view=null] -
     *  The canvas to use as the view. If omitted, a new canvas will be created.
     * @param {number} [options.width=800] - The width of the renderer's view.
     */function e(r){var i=t.call(this,H.WEBGL,r)||this;return(// the options will have been modified here in the super constructor with pixi's default settings..
r=i.options,i.gl=null,i.CONTEXT_UID=0,i.runners={destroy:new nZ("destroy"),contextChange:new nZ("contextChange"),reset:new nZ("reset"),update:new nZ("update"),postrender:new nZ("postrender"),prerender:new nZ("prerender"),resize:new nZ("resize")},i.runners.contextChange.add(i),i.globalUniforms=new oP({projectionMatrix:new nw},!0),i.addSystem(si,"mask").addSystem(oB,"context").addSystem(sb,"state").addSystem(sg,"shader").addSystem(sE,"texture").addSystem(sI,"buffer").addSystem(oj,"geometry").addSystem(ok,"framebuffer").addSystem(sa,"scissor").addSystem(sh,"stencil").addSystem(su,"projection").addSystem(sx,"textureGC").addSystem(oC,"filter").addSystem(sf,"renderTexture").addSystem(oN,"batch"),i.initPlugins(e.__plugins),i.multisample=void 0,r.context?i.context.initFromContext(r.context):i.context.initFromOptions({alpha:!!i.useContextAlpha,antialias:r.antialias,premultipliedAlpha:i.useContextAlpha&&"notMultiplied"!==i.useContextAlpha,stencil:!0,preserveDrawingBuffer:r.preserveDrawingBuffer,powerPreference:i.options.powerPreference}),i.renderingToScreen=!0,!/**
 * Logs out the version and renderer information for this running instance of PIXI.
 * If you don't want to see this message you can run `PIXI.utils.skipHello()` before
 * creating your renderer. Keep in mind that doing that will forever make you a jerk face.
 * @static
 * @function sayHello
 * @memberof PIXI.utils
 * @param {string} type - The string renderer type to log.
 */function(t){var e;if(!i5){if(eh.ADAPTER.getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){var r=["\n %c %c %c PixiJS "+i9+" - ✰ "+t+" ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n","background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];(e=globalThis.console).log.apply(e,r)}else globalThis.console&&globalThis.console.log("PixiJS "+i9+" - "+t+" - http://www.pixijs.com/");i5=!0}}(2===i.context.webGLVersion?"WebGL 2":"WebGL 1"),i.resize(i.options.width,i.options.height),i)}return n3(e,t),/**
     * Create renderer if WebGL is available. Overrideable
     * by the **@pixi/canvas-renderer** package to allow fallback.
     * throws error if WebGL is not available.
     * @param options
     * @private
     */e.create=function(t){if(void 0===tu&&(tu=function(){var t={stencil:!0,failIfMajorPerformanceCaveat:eh.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!eh.ADAPTER.getWebGLRenderingContext())return!1;var e=eh.ADAPTER.createCanvas(),r=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),i=!!(r&&r.getContextAttributes().stencil);if(r){var n=r.getExtension("WEBGL_lose_context");n&&n.loseContext()}return r=null,i}catch(t){return!1}}()),tu)return new e(t);throw Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')},e.prototype.contextChange=function(){var t,e=this.gl;if(1===this.context.webGLVersion){var r=e.getParameter(e.FRAMEBUFFER_BINDING);e.bindFramebuffer(e.FRAMEBUFFER,null),t=e.getParameter(e.SAMPLES),e.bindFramebuffer(e.FRAMEBUFFER,r)}else{var r=e.getParameter(e.DRAW_FRAMEBUFFER_BINDING);e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),t=e.getParameter(e.SAMPLES),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,r)}t>=ts.HIGH?this.multisample=ts.HIGH:t>=ts.MEDIUM?this.multisample=ts.MEDIUM:t>=ts.LOW?this.multisample=ts.LOW:this.multisample=ts.NONE},/**
     * Add a new system to the renderer.
     * @param ClassRef - Class reference
     * @param name - Property name for system, if not specified
     *        will use a static `name` property on the class itself. This
     *        name will be assigned as s property on the Renderer so make
     *        sure it doesn't collide with properties on Renderer.
     * @returns Return instance of renderer
     */e.prototype.addSystem=function(t,e){var r=new t(this);if(this[e])throw Error('Whoops! The name "'+e+'" is already in use');for(var i in this[e]=r,this.runners)this.runners[i].add(r);/**
         * Fired after rendering finishes.
         * @event PIXI.Renderer#postrender
         *//**
         * Fired before rendering starts.
         * @event PIXI.Renderer#prerender
         *//**
         * Fired when the WebGL context is set.
         * @event PIXI.Renderer#context
         * @param {WebGLRenderingContext} gl - WebGL context.
         */return this},/**
     * @ignore
     */e.prototype.render=function(t,e){// no point rendering if our context has been blown up!
if(e&&(e instanceof oy?(np("6.0.0","Renderer#render arguments changed, use options instead."),/* eslint-disable prefer-rest-params */r=e,i=arguments[2],n=arguments[3],o=arguments[4]):(r=e.renderTexture,i=e.clear,n=e.transform,o=e.skipUpdateTransform)),// can be handy to know!
this.renderingToScreen=!r,this.runners.prerender.emit(),this.emit("prerender"),// apply a transform at a GPU level
this.projection.transform=n,!this.context.isLost){if(r||(this._lastObjectRendered=t),!o){// update the scene graph
var r,i,n,o,s=t.enableTempParent();t.updateTransform(),t.disableTempParent(s);// displayObject.hitArea = //TODO add a temp hit area
}this.renderTexture.bind(r),this.batch.currentRenderer.start(),(void 0!==i?i:this.clearBeforeRender)&&this.renderTexture.clear(),t.render(this),// apply transform..
this.batch.currentRenderer.flush(),r&&r.baseTexture.update(),this.runners.postrender.emit(),// reset transform after render
this.projection.transform=null,this.emit("postrender")}},/**
     * @override
     * @ignore
     */e.prototype.generateTexture=function(e,r,i,n){void 0===r&&(r={});var o=t.prototype.generateTexture.call(this,e,r,i,n);return this.framebuffer.blit(),o},/**
     * Resizes the WebGL view to the specified width and height.
     * @param desiredScreenWidth - The desired width of the screen.
     * @param desiredScreenHeight - The desired height of the screen.
     */e.prototype.resize=function(e,r){t.prototype.resize.call(this,e,r),this.runners.resize.emit(this.screen.height,this.screen.width)},/**
     * Resets the WebGL state so you can render things however you fancy!
     * @returns Returns itself.
     */e.prototype.reset=function(){return this.runners.reset.emit(),this},/** Clear the frame buffer. */e.prototype.clear=function(){this.renderTexture.bind(),this.renderTexture.clear()},/**
     * Removes everything from the renderer (event listeners, spritebatch, etc...)
     * @param [removeView=false] - Removes the Canvas element from the DOM.
     *  See: https://github.com/pixijs/pixi.js/issues/2233
     */e.prototype.destroy=function(e){for(var r in this.runners.destroy.emit(),this.runners)this.runners[r].destroy();// call base destroy
t.prototype.destroy.call(this,e),// TODO nullify all the managers..
this.gl=null},Object.defineProperty(e.prototype,"extract",{/**
         * Please use `plugins.extract` instead.
         * @member {PIXI.Extract} extract
         * @deprecated since 6.0.0
         * @readonly
         */get:function(){return np("6.0.0","Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."),this.plugins.extract},enumerable:!1,configurable:!0}),/**
     * Use the {@link PIXI.extensions.add} API to register plugins.
     * @deprecated since 6.5.0
     * @param pluginName - The name of the plugin.
     * @param ctor - The constructor function or class for the plugin.
     */e.registerPlugin=function(t,e){np("6.5.0","Renderer.registerPlugin() has been deprecated, please use extensions.add() instead."),nK.add({name:t,type:tf.RendererPlugin,ref:e})},/**
     * Collection of installed plugins. These are included by default in PIXI, but can be excluded
     * by creating a custom build. Consult the README for more information about creating custom
     * builds and excluding plugins.
     * @readonly
     * @property {PIXI.AccessibilityManager} accessibility Support tabbing interactive elements.
     * @property {PIXI.Extract} extract Extract image data from renderer.
     * @property {PIXI.InteractionManager} interaction Handles mouse, touch and pointer events.
     * @property {PIXI.ParticleRenderer} particle Renderer for ParticleContainer objects.
     * @property {PIXI.Prepare} prepare Pre-render display objects.
     * @property {PIXI.BatchRenderer} batch Batching of Sprite, Graphics and Mesh objects.
     * @property {PIXI.TilingSpriteRenderer} tilingSprite Renderer for TilingSprite objects.
     */e.__plugins={},e}(sR);nK.handleByMap(tf.RendererPlugin,sP.__plugins);var sw="attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";/** Destroy and don't use after this. *//**
     * @param renderer - Reference to Renderer
     */(function(t){np("6.1.0","System class is deprecated, implemement ISystem interface instead."),this.renderer=t}).prototype.destroy=function(){this.renderer=null};/**
 * Used by the batcher to draw batches.
 * Each one of these contains all information required to draw a bound geometry.
 * @memberof PIXI
 */var sM=function(){this.texArray=null,this.blend=0,this.type=V.TRIANGLES,this.start=0,this.size=0,this.data=null},sD=/** @class */function(){function t(){this.elements=[],this.ids=[],this.count=0}return t.prototype.clear=function(){for(var t=0;t<this.count;t++)this.elements[t]=null;this.count=0},t}(),sC=/** @class */function(){function t(t){"number"==typeof t?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}return Object.defineProperty(t.prototype,"int8View",{/** View on the raw binary data as a `Int8Array`. */get:function(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"uint8View",{/** View on the raw binary data as a `Uint8Array`. */get:function(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"int16View",{/**  View on the raw binary data as a `Int16Array`. */get:function(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"uint16View",{/** View on the raw binary data as a `Uint16Array`. */get:function(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"int32View",{/** View on the raw binary data as a `Int32Array`. */get:function(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View},enumerable:!1,configurable:!0}),/**
     * Returns the view of the given type.
     * @param type - One of `int8`, `uint8`, `int16`,
     *    `uint16`, `int32`, `uint32`, and `float32`.
     * @returns - typed array of given type
     */t.prototype.view=function(t){return this[t+"View"]},/** Destroys all buffer references. Do not use after calling this. */t.prototype.destroy=function(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null},t.sizeOf=function(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw Error(t+" isn't a valid view type")}},t}(),sF=/** @class */function(t){/**
     * This will hook onto the renderer's `contextChange`
     * and `prerender` signals.
     * @param {PIXI.Renderer} renderer - The renderer this works for.
     */function e(e){var r=t.call(this,e)||this;return r.shaderGenerator=null,r.geometryClass=null,r.vertexSize=null,r.state=o9.for2d(),r.size=4*eh.SPRITE_BATCH_SIZE,r._vertexCount=0,r._indexCount=0,r._bufferedElements=[],r._bufferedTextures=[],r._bufferSize=0,r._shader=null,r._packedGeometries=[],r._packedGeometryPoolSize=2,r._flushId=0,r._aBuffers={},r._iBuffers={},r.MAX_TEXTURES=1,r.renderer.on("prerender",r.onPrerender,r),e.runners.contextChange.add(r),r._dcIndex=0,r._aIndex=0,r._iIndex=0,r._attributeBuffer=null,r._indexBuffer=null,r._tempBoundTextures=[],r}return n3(e,t),/**
     * Handles the `contextChange` signal.
     *
     * It calculates `this.MAX_TEXTURES` and allocating the packed-geometry object pool.
     */e.prototype.contextChange=function(){var t=this.renderer.gl;eh.PREFER_ENV===j.WEBGL_LEGACY?this.MAX_TEXTURES=1:(// step 1: first check max textures the GPU can handle.
this.MAX_TEXTURES=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),eh.SPRITE_MAX_TEXTURES),// step 2: check the maximum number of if statements the shader can have too..
this.MAX_TEXTURES=function(t,e){if(0===t)throw Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");for(var r=e.createShader(e.FRAGMENT_SHADER);;){var i="precision mediump float;\nvoid main(void){\nfloat test = 0.1;\n%forloop%\ngl_FragColor = vec4(0.0);\n}".replace(/%forloop%/gi,function(t){for(var e="",r=0;r<t;++r)r>0&&(e+="\nelse "),r<t-1&&(e+="if(test == "+r+".0){}");return e}(t));if(e.shaderSource(r,i),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))break;t=t/2|0}return t}(this.MAX_TEXTURES,t)),this._shader=this.shaderGenerator.generateShader(this.MAX_TEXTURES);// we use the second shader as the first one depending on your browser
// may omit aTextureId as it is not used by the shader so is optimized out.
for(var e=0;e<this._packedGeometryPoolSize;e++)/* eslint-disable max-len */this._packedGeometries[e]=new this.geometryClass;this.initFlushBuffers()},/** Makes sure that static and dynamic flush pooled objects have correct dimensions. */e.prototype.initFlushBuffers=function(){for(var t=e._drawCallPool,r=e._textureArrayPool,i=this.size/4,n=Math.floor(i/this.MAX_TEXTURES)+1;t.length<i;)t.push(new sM);for(;r.length<n;)r.push(new sD);for(var o=0;o<this.MAX_TEXTURES;o++)this._tempBoundTextures[o]=null},/** Handles the `prerender` signal. It ensures that flushes start from the first geometry object again. */e.prototype.onPrerender=function(){this._flushId=0},/**
     * Buffers the "batchable" object. It need not be rendered immediately.
     * @param {PIXI.DisplayObject} element - the element to render when
     *    using this renderer
     */e.prototype.render=function(t){t._texture.valid&&(this._vertexCount+t.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=t.vertexData.length/2,this._indexCount+=t.indices.length,this._bufferedTextures[this._bufferSize]=t._texture.baseTexture,this._bufferedElements[this._bufferSize++]=t)},e.prototype.buildTexturesAndDrawCalls=function(){var t=this._bufferedTextures,r=this.MAX_TEXTURES,i=e._textureArrayPool,n=this.renderer.batch,o=this._tempBoundTextures,s=this.renderer.textureGC.count,a=++n9._globalBatch,h=0,u=i[0],l=0;n.copyBoundTextures(o,r);for(var c=0;c<this._bufferSize;++c){var f=t[c];t[c]=null,f._batchEnabled!==a&&(u.count>=r&&(n.boundArray(u,o,a,r),this.buildDrawCalls(u,l,c),l=c,u=i[++h],++a),f._batchEnabled=a,f.touched=s,u.elements[u.count++]=f)}u.count>0&&(n.boundArray(u,o,a,r),this.buildDrawCalls(u,l,this._bufferSize),++h,++a);// Clean-up
for(var c=0;c<o.length;c++)o[c]=null;n9._globalBatch=a},/**
     * Populating drawcalls for rendering
     * @param texArray
     * @param start
     * @param finish
     */e.prototype.buildDrawCalls=function(t,r,i){var n=this._bufferedElements,o=this._attributeBuffer,s=this._indexBuffer,a=this.vertexSize,h=e._drawCallPool,u=this._dcIndex,l=this._aIndex,c=this._iIndex,f=h[u];f.start=this._iIndex,f.texArray=t;for(var p=r;p<i;++p){var d=n[p],_=ni[d._texture.baseTexture.alphaMode?1:0][d.blendMode];n[p]=null,r<p&&f.blend!==_&&(f.size=c-f.start,r=p,(f=h[++u]).texArray=t,f.start=c),this.packInterleavedGeometry(d,o,s,l,c),l+=d.vertexData.length/2*a,c+=d.indices.length,f.blend=_}r<i&&(f.size=c-f.start,++u),this._dcIndex=u,this._aIndex=l,this._iIndex=c},/**
     * Bind textures for current rendering
     * @param texArray
     */e.prototype.bindAndClearTexArray=function(t){for(var e=this.renderer.texture,r=0;r<t.count;r++)e.bind(t.elements[r],t.ids[r]),t.elements[r]=null;t.count=0},e.prototype.updateGeometry=function(){var t=this._packedGeometries,e=this._attributeBuffer,r=this._indexBuffer;eh.CAN_UPLOAD_SAME_BUFFER?(// lets use the faster option, always use buffer number 0
t[this._flushId]._buffer.update(e.rawBinaryData),t[this._flushId]._indexBuffer.update(r),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,t[this._flushId]=new this.geometryClass),t[this._flushId]._buffer.update(e.rawBinaryData),t[this._flushId]._indexBuffer.update(r),this.renderer.geometry.bind(t[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)},e.prototype.drawBatches=function(){// Upload textures and do the draw calls
for(var t=this._dcIndex,r=this.renderer,i=r.gl,n=r.state,o=e._drawCallPool,s=null,a=0;a<t;a++){var h=o[a],u=h.texArray,l=h.type,c=h.size,f=h.start,p=h.blend;s!==u&&(s=u,this.bindAndClearTexArray(u)),this.state.blendMode=p,n.set(this.state),i.drawElements(l,c,i.UNSIGNED_SHORT,2*f)}},/** Renders the content _now_ and empties the current batch. */e.prototype.flush=function(){0!==this._vertexCount&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),// reset elements buffer for the next flush
this._bufferSize=0,this._vertexCount=0,this._indexCount=0)},/** Starts a new sprite batch. */e.prototype.start=function(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES),this.renderer.shader.bind(this._shader),eh.CAN_UPLOAD_SAME_BUFFER&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])},/** Stops and flushes the current batch. */e.prototype.stop=function(){this.flush()},/** Destroys this `AbstractBatchRenderer`. It cannot be used again. */e.prototype.destroy=function(){for(var e=0;e<this._packedGeometryPoolSize;e++)this._packedGeometries[e]&&this._packedGeometries[e].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),t.prototype.destroy.call(this)},/**
     * Fetches an attribute buffer from `this._aBuffers` that can hold atleast `size` floats.
     * @param size - minimum capacity required
     * @returns - buffer than can hold atleast `size` floats
     */e.prototype.getAttributeBuffer=function(t){// 8 vertices is enough for 2 quads
var e=na(Math.ceil(t/8)),r=nh(e),i=8*e;this._aBuffers.length<=r&&(this._iBuffers.length=r+1);var n=this._aBuffers[i];return n||(this._aBuffers[i]=n=new sC(i*this.vertexSize*4)),n},/**
     * Fetches an index buffer from `this._iBuffers` that can
     * have at least `size` capacity.
     * @param size - minimum required capacity
     * @returns - buffer that can fit `size` indices.
     */e.prototype.getIndexBuffer=function(t){// 12 indices is enough for 2 quads
var e=na(Math.ceil(t/12)),r=nh(e),i=12*e;this._iBuffers.length<=r&&(this._iBuffers.length=r+1);var n=this._iBuffers[r];return n||(this._iBuffers[r]=n=new Uint16Array(i)),n},/**
     * Takes the four batching parameters of `element`, interleaves
     * and pushes them into the batching attribute/index buffers given.
     *
     * It uses these properties: `vertexData` `uvs`, `textureId` and
     * `indicies`. It also uses the "tint" of the base-texture, if
     * present.
     * @param {PIXI.DisplayObject} element - element being rendered
     * @param attributeBuffer - attribute buffer.
     * @param indexBuffer - index buffer
     * @param aIndex - number of floats already in the attribute buffer
     * @param iIndex - number of indices already in `indexBuffer`
     */e.prototype.packInterleavedGeometry=function(t,e,r,i,n){// lets not worry about tint! for now..
for(var o=e.uint32View,s=e.float32View,a=i/this.vertexSize,h=t.uvs,u=t.indices,l=t.vertexData,c=t._texture.baseTexture._batchLocation,f=Math.min(t.worldAlpha,1),p=f<1&&t._texture.baseTexture.alphaMode?nn(t._tintRGB,f):t._tintRGB+(255*f<<24),d=0;d<l.length;d+=2)s[i++]=l[d],s[i++]=l[d+1],s[i++]=h[d],s[i++]=h[d+1],o[i++]=p,s[i++]=c;for(var d=0;d<u.length;d++)r[n++]=a+u[d]},/**
     * Pool of `BatchDrawCall` objects that `flush` used
     * to create "batches" of the objects being rendered.
     *
     * These are never re-allocated again.
     * Shared between all batch renderers because it can be only one "flush" working at the moment.
     * @member {PIXI.BatchDrawCall[]}
     */e._drawCallPool=[],/**
     * Pool of `BatchDrawCall` objects that `flush` used
     * to create "batches" of the objects being rendered.
     *
     * These are never re-allocated again.
     * Shared between all batch renderers because it can be only one "flush" working at the moment.
     * @member {PIXI.BatchTextureArray[]}
     */e._textureArrayPool=[],e}(oF),sN=/** @class */function(){/**
     * @param vertexSrc - Vertex shader
     * @param fragTemplate - Fragment shader template
     */function t(t,e){if(this.vertexSrc=t,this.fragTemplate=e,this.programCache={},this.defaultGroupCache={},0>e.indexOf("%count%"))throw Error('Fragment template must contain "%count%".');if(0>e.indexOf("%forloop%"))throw Error('Fragment template must contain "%forloop%".')}return t.prototype.generateShader=function(t){if(!this.programCache[t]){for(var e=new Int32Array(t),r=0;r<t;r++)e[r]=r;this.defaultGroupCache[t]=oP.from({uSamplers:e},!0);var i=this.fragTemplate;i=(i=i.replace(/%count%/gi,""+t)).replace(/%forloop%/gi,this.generateSampleSrc(t)),this.programCache[t]=new o6(this.vertexSrc,i)}var n={tint:new Float32Array([1,1,1,1]),translationMatrix:new nw,default:this.defaultGroupCache[t]};return new o5(this.programCache[t],n)},t.prototype.generateSampleSrc=function(t){var e="";e+="\n\n";for(var r=0;r<t;r++)r>0&&(e+="\nelse "),r<t-1&&(e+="if(vTextureId < "+r+".5)"),e+="\n{\n	color = texture2D(uSamplers["+r+"], vTextureCoord);\n}";return e+"\n\n"},t}(),sL=/** @class */function(t){/**
     * @param {boolean} [_static=false] - Optimization flag, where `false`
     *        is updated every frame, `true` doesn't change frame-to-frame.
     */function e(e){void 0===e&&(e=!1);var r=t.call(this)||this;return r._buffer=new ob(null,e,!1),r._indexBuffer=new ob(null,e,!0),r.addAttribute("aVertexPosition",r._buffer,2,!1,K.FLOAT).addAttribute("aTextureCoord",r._buffer,2,!1,K.FLOAT).addAttribute("aColor",r._buffer,4,!0,K.UNSIGNED_BYTE).addAttribute("aTextureId",r._buffer,1,!0,K.FLOAT).addIndex(r._indexBuffer),r}return n3(e,t),e}(oS),sB="precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n",sG="varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n",sU=/** @class */(function(){function t(){}return(/**
     * Create a new BatchRenderer plugin for Renderer. this convenience can provide an easy way
     * to extend BatchRenderer with all the necessary pieces.
     * @example
     * const fragment = `
     * varying vec2 vTextureCoord;
     * varying vec4 vColor;
     * varying float vTextureId;
     * uniform sampler2D uSamplers[%count%];
     *
     * void main(void){
     *     vec4 color;
     *     %forloop%
     *     gl_FragColor = vColor * vec4(color.a - color.rgb, color.a);
     * }
     * `;
     * const InvertBatchRenderer = PIXI.BatchPluginFactory.create({ fragment });
     * PIXI.extensions.add({
     *  name: 'invert',
     *  ref: InvertBatchRenderer,
     *  type: PIXI.ExtensionType.RendererPlugin,
     * });
     * const sprite = new PIXI.Sprite();
     * sprite.pluginName = 'invert';
     * @param {object} [options]
     * @param {string} [options.vertex=PIXI.BatchPluginFactory.defaultVertexSrc] - Vertex shader source
     * @param {string} [options.fragment=PIXI.BatchPluginFactory.defaultFragmentTemplate] - Fragment shader template
     * @param {number} [options.vertexSize=6] - Vertex size
     * @param {object} [options.geometryClass=PIXI.BatchGeometry]
     * @returns {*} New batch renderer plugin
     */t.create=function(t){var e=Object.assign({vertex:sB,fragment:sG,geometryClass:sL,vertexSize:6},t),r=e.vertex,i=e.fragment,n=e.vertexSize,o=e.geometryClass;return /** @class */function(t){function e(e){var s=t.call(this,e)||this;return s.shaderGenerator=new sN(r,i),s.geometryClass=o,s.vertexSize=n,s}return n3(e,t),e}(sF)},Object.defineProperty(t,"defaultVertexSrc",{/**
         * The default vertex shader source
         * @readonly
         */get:function(){return sB},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultFragmentTemplate",{/**
         * The default fragment shader source
         * @readonly
         */get:function(){return sG},enumerable:!1,configurable:!0}),t)})().create();Object.assign(sU,{extension:{name:"batch",type:tf.RendererPlugin}});/**
 * @memberof PIXI
 * @namespace resources
 * @see PIXI
 * @deprecated since 6.0.0
 */var sk={},sX=function(t){Object.defineProperty(sk,t,{get:function(){return np("6.0.0","PIXI.systems."+t+" has moved to PIXI."+t),oh[t]}})};for(var sj in oh)sX(sj);/**
 * @memberof PIXI
 * @namespace systems
 * @see PIXI
 * @deprecated since 6.0.0
 */var sH={},sY=function(t){Object.defineProperty(sH,t,{get:function(){return np("6.0.0","PIXI.resources."+t+" has moved to PIXI."+t),sA[t]}})};for(var sj in sA)sY(sj);nH.mixin({/**
     *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
     *   shadow div with attributes set
     * @member {boolean}
     * @memberof PIXI.DisplayObject#
     */accessible:!1,/**
     * Sets the title attribute of the shadow div
     * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
     * @member {?string}
     * @memberof PIXI.DisplayObject#
     */accessibleTitle:null,/**
     * Sets the aria-label attribute of the shadow div
     * @member {string}
     * @memberof PIXI.DisplayObject#
     */accessibleHint:null,/**
     * @member {number}
     * @memberof PIXI.DisplayObject#
     * @private
     * @todo Needs docs.
     */tabIndex:0,/**
     * @member {boolean}
     * @memberof PIXI.DisplayObject#
     * @todo Needs docs.
     */_accessibleActive:!1,/**
     * @member {boolean}
     * @memberof PIXI.DisplayObject#
     * @todo Needs docs.
     */_accessibleDiv:null,/**
     * Specify the type of div the accessible layer is. Screen readers treat the element differently
     * depending on this type. Defaults to button.
     * @member {string}
     * @memberof PIXI.DisplayObject#
     * @default 'button'
     */accessibleType:"button",/**
     * Specify the pointer-events the accessible div will use
     * Defaults to auto.
     * @member {string}
     * @memberof PIXI.DisplayObject#
     * @default 'auto'
     */accessiblePointerEvents:"auto",/**
     * Setting to false will prevent any children inside this container to
     * be accessible. Defaults to true.
     * @member {boolean}
     * @memberof PIXI.DisplayObject#
     * @default true
     */accessibleChildren:!0,renderId:-1});/**
 * The Accessibility manager recreates the ability to tab and have content read by screen readers.
 * This is very important as it can possibly help people with disabilities access PixiJS content.
 *
 * A DisplayObject can be made accessible just like it can be made interactive. This manager will map the
 * events as if the mouse was being used, minimizing the effort required to implement.
 *
 * An instance of this class is automatically created by default, and can be found at `renderer.plugins.accessibility`
 * @class
 * @memberof PIXI
 */var sz=/** @class */function(){/**
     * @param {PIXI.CanvasRenderer|PIXI.Renderer} renderer - A reference to the current renderer
     */function t(t){/** Setting this to true will visually show the divs. */this.debug=!1,/** Internal variable, see isActive getter. */this._isActive=!1,/** Internal variable, see isMobileAccessibility getter. */this._isMobileAccessibility=!1,/** A simple pool for storing divs. */this.pool=[],/** This is a tick used to check if an object is no longer being rendered. */this.renderId=0,/** The array of currently active accessible items. */this.children=[],/** Count to throttle div updates on android devices. */this.androidUpdateCount=0,/**  The frequency to update the div elements. */this.androidUpdateFrequency=500,this._hookDiv=null,(ea.tablet||ea.phone)&&this.createTouchHook();// first we create a div that will sit over the PixiJS element. This is where the div overlays will go.
var e=document.createElement("div");e.style.width="100px",e.style.height="100px",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.zIndex="2",this.div=e,this.renderer=t,/**
         * pre-bind the functions
         * @type {Function}
         * @private
         */this._onKeyDown=this._onKeyDown.bind(this),/**
         * pre-bind the functions
         * @type {Function}
         * @private
         */this._onMouseMove=this._onMouseMove.bind(this),// let listen for tab.. once pressed we can fire up and show the accessibility layer
globalThis.addEventListener("keydown",this._onKeyDown,!1)}return Object.defineProperty(t.prototype,"isActive",{/**
         * Value of `true` if accessibility is currently active and accessibility layers are showing.
         * @member {boolean}
         * @readonly
         */get:function(){return this._isActive},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isMobileAccessibility",{/**
         * Value of `true` if accessibility is enabled for touch devices.
         * @member {boolean}
         * @readonly
         */get:function(){return this._isMobileAccessibility},enumerable:!1,configurable:!0}),/**
     * Creates the touch hooks.
     * @private
     */t.prototype.createTouchHook=function(){var t=this,e=document.createElement("button");e.style.width="1px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.left="-1000px",e.style.zIndex="2",e.style.backgroundColor="#FF0000",e.title="select to enable accessibility for this content",e.addEventListener("focus",function(){t._isMobileAccessibility=!0,t.activate(),t.destroyTouchHook()}),document.body.appendChild(e),this._hookDiv=e},/**
     * Destroys the touch hooks.
     * @private
     */t.prototype.destroyTouchHook=function(){this._hookDiv&&(document.body.removeChild(this._hookDiv),this._hookDiv=null)},/**
     * Activating will cause the Accessibility layer to be shown.
     * This is called when a user presses the tab key.
     * @private
     */t.prototype.activate=function(){var t;this._isActive||(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),null===(t=this.renderer.view.parentNode)||void 0===t||t.appendChild(this.div))},/**
     * Deactivating will cause the Accessibility layer to be hidden.
     * This is called when a user moves the mouse.
     * @private
     */t.prototype.deactivate=function(){var t;this._isActive&&!this._isMobileAccessibility&&(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),null===(t=this.div.parentNode)||void 0===t||t.removeChild(this.div))},/**
     * This recursive function will run through the scene graph and add any new accessible objects to the DOM layer.
     * @private
     * @param {PIXI.Container} displayObject - The DisplayObject to check.
     */t.prototype.updateAccessibleObjects=function(t){if(t.visible&&t.accessibleChildren){t.accessible&&t.interactive&&(t._accessibleActive||this.addChild(t),t.renderId=this.renderId);var e=t.children;if(e)for(var r=0;r<e.length;r++)this.updateAccessibleObjects(e[r])}},/**
     * Before each render this function will ensure that all divs are mapped correctly to their DisplayObjects.
     * @private
     */t.prototype.update=function(){/* On Android default web browser, tab order seems to be calculated by position rather than tabIndex,
        *  moving buttons can cause focus to flicker between two buttons making it hard/impossible to navigate,
        *  so I am just running update every half a second, seems to fix it.
        */var t=performance.now();if((!ea.android.device||!(t<this.androidUpdateCount))&&(this.androidUpdateCount=t+this.androidUpdateFrequency,this.renderer.renderingToScreen)){this.renderer._lastObjectRendered&&this.updateAccessibleObjects(this.renderer._lastObjectRendered);var e=this.renderer.view.getBoundingClientRect(),r=e.left,i=e.top,n=e.width,o=e.height,s=this.renderer,a=s.width,h=s.height,u=s.resolution,l=n/a*u,c=o/h*u,f=this.div;f.style.left=r+"px",f.style.top=i+"px",f.style.width=a+"px",f.style.height=h+"px";for(var p=0;p<this.children.length;p++){var d=this.children[p];if(d.renderId!==this.renderId)d._accessibleActive=!1,nu(this.children,p,1),this.div.removeChild(d._accessibleDiv),this.pool.push(d._accessibleDiv),d._accessibleDiv=null,p--;else{// map div to display..
f=d._accessibleDiv;var _=d.hitArea,y=d.worldTransform;d.hitArea?(f.style.left=(y.tx+_.x*y.a)*l+"px",f.style.top=(y.ty+_.y*y.d)*c+"px",f.style.width=_.width*y.a*l+"px",f.style.height=_.height*y.d*c+"px"):(_=d.getBounds(),this.capHitArea(_),f.style.left=_.x*l+"px",f.style.top=_.y*c+"px",f.style.width=_.width*l+"px",f.style.height=_.height*c+"px",f.title!==d.accessibleTitle&&null!==d.accessibleTitle&&(f.title=d.accessibleTitle),f.getAttribute("aria-label")!==d.accessibleHint&&null!==d.accessibleHint&&f.setAttribute("aria-label",d.accessibleHint)),(d.accessibleTitle!==f.title||d.tabIndex!==f.tabIndex)&&(f.title=d.accessibleTitle,f.tabIndex=d.tabIndex,this.debug&&this.updateDebugHTML(f))}}// increment the render id..
this.renderId++}},/**
     * private function that will visually add the information to the
     * accessability div
     * @param {HTMLElement} div -
     */t.prototype.updateDebugHTML=function(t){t.innerHTML="type: "+t.type+"</br> title : "+t.title+"</br> tabIndex: "+t.tabIndex},/**
     * Adjust the hit area based on the bounds of a display object
     * @param {PIXI.Rectangle} hitArea - Bounds of the child
     */t.prototype.capHitArea=function(t){t.x<0&&(t.width+=t.x,t.x=0),t.y<0&&(t.height+=t.y,t.y=0);var e=this.renderer,r=e.width,i=e.height;t.x+t.width>r&&(t.width=r-t.x),t.y+t.height>i&&(t.height=i-t.y)},/**
     * Adds a DisplayObject to the accessibility manager
     * @private
     * @param {PIXI.DisplayObject} displayObject - The child to make accessible.
     */t.prototype.addChild=function(t){//    this.activate();
var e=this.pool.pop();e||((e=document.createElement("button")).style.width="100px",e.style.height="100px",e.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",e.style.position="absolute",e.style.zIndex="2",e.style.borderStyle="none",navigator.userAgent.toLowerCase().indexOf("chrome")>-1?e.setAttribute("aria-live","off"):e.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?e.setAttribute("aria-relevant","additions"):e.setAttribute("aria-relevant","text"),e.addEventListener("click",this._onClick.bind(this)),e.addEventListener("focus",this._onFocus.bind(this)),e.addEventListener("focusout",this._onFocusOut.bind(this))),// set pointer events
e.style.pointerEvents=t.accessiblePointerEvents,// set the type, this defaults to button!
e.type=t.accessibleType,t.accessibleTitle&&null!==t.accessibleTitle?e.title=t.accessibleTitle:t.accessibleHint&&null!==t.accessibleHint||(e.title="displayObject "+t.tabIndex),t.accessibleHint&&null!==t.accessibleHint&&e.setAttribute("aria-label",t.accessibleHint),this.debug&&this.updateDebugHTML(e),t._accessibleActive=!0,t._accessibleDiv=e,e.displayObject=t,this.children.push(t),this.div.appendChild(t._accessibleDiv),t._accessibleDiv.tabIndex=t.tabIndex},/**
     * Maps the div button press to pixi's InteractionManager (click)
     * @private
     * @param {MouseEvent} e - The click event.
     */t.prototype._onClick=function(t){var e=this.renderer.plugins.interaction,r=t.target.displayObject,i=e.eventData;e.dispatchEvent(r,"click",i),e.dispatchEvent(r,"pointertap",i),e.dispatchEvent(r,"tap",i)},/**
     * Maps the div focus events to pixi's InteractionManager (mouseover)
     * @private
     * @param {FocusEvent} e - The focus event.
     */t.prototype._onFocus=function(t){t.target.getAttribute("aria-live")||t.target.setAttribute("aria-live","assertive");var e=this.renderer.plugins.interaction,r=t.target.displayObject,i=e.eventData;e.dispatchEvent(r,"mouseover",i)},/**
     * Maps the div focus events to pixi's InteractionManager (mouseout)
     * @private
     * @param {FocusEvent} e - The focusout event.
     */t.prototype._onFocusOut=function(t){t.target.getAttribute("aria-live")||t.target.setAttribute("aria-live","polite");var e=this.renderer.plugins.interaction,r=t.target.displayObject,i=e.eventData;e.dispatchEvent(r,"mouseout",i)},/**
     * Is called when a key is pressed
     * @private
     * @param {KeyboardEvent} e - The keydown event.
     */t.prototype._onKeyDown=function(t){9===t.keyCode&&this.activate()},/**
     * Is called when the mouse moves across the renderer element
     * @private
     * @param {MouseEvent} e - The mouse event.
     */t.prototype._onMouseMove=function(t){(0!==t.movementX||0!==t.movementY)&&this.deactivate()},/** Destroys the accessibility manager */t.prototype.destroy=function(){this.destroyTouchHook(),this.div=null,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null},/** @ignore */t.extension={name:"accessibility",type:[tf.RendererPlugin,tf.CanvasRendererPlugin]},t}(),sV=/** @class */function(){function t(){/**
         * Pressure applied by the pointing device during the event. A Touch's force property
         * will be represented by this value.
         * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure
         */this.pressure=0,/**
         * From TouchEvents (not PointerEvents triggered by touches), the rotationAngle of the Touch.
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Touch/rotationAngle
         */this.rotationAngle=0,/**
         * Twist of a stylus pointer.
         * @see https://w3c.github.io/pointerevents/#pointerevent-interface
         */this.twist=0,/**
         * Barrel pressure on a stylus pointer.
         * @see https://w3c.github.io/pointerevents/#pointerevent-interface
         */this.tangentialPressure=0,this.global=new nT,this.target=null,this.originalEvent=null,this.identifier=null,this.isPrimary=!1,this.button=0,this.buttons=0,this.width=0,this.height=0,this.tiltX=0,this.tiltY=0,this.pointerType=null,this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0}return Object.defineProperty(t.prototype,"pointerId",{/**
         * The unique identifier of the pointer. It will be the same as `identifier`.
         * @readonly
         * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId
         */get:function(){return this.identifier},enumerable:!1,configurable:!0}),/**
     * This will return the local coordinates of the specified displayObject for this InteractionData
     * @param displayObject - The DisplayObject that you would like the local
     *  coords off
     * @param point - A Point object in which to store the value, optional (otherwise
     *  will create a new point)
     * @param globalPos - A Point object containing your custom global coords, optional
     *  (otherwise will use the current global coords)
     * @returns - A point containing the coordinates of the InteractionData position relative
     *  to the DisplayObject
     */t.prototype.getLocalPosition=function(t,e,r){return t.worldTransform.applyInverse(r||this.global,e)},/**
     * Copies properties from normalized event data.
     * @param {Touch|MouseEvent|PointerEvent} event - The normalized event data
     */t.prototype.copyEvent=function(t){"isPrimary"in t&&t.isPrimary&&(this.isPrimary=!0),this.button="button"in t&&t.button;// event.buttons is not available in all browsers (ie. Safari), but it does have a non-standard
// event.which property instead, which conveys the same information.
var e="buttons"in t&&t.buttons;this.buttons=Number.isInteger(e)?e:"which"in t&&t.which,this.width="width"in t&&t.width,this.height="height"in t&&t.height,this.tiltX="tiltX"in t&&t.tiltX,this.tiltY="tiltY"in t&&t.tiltY,this.pointerType="pointerType"in t&&t.pointerType,this.pressure="pressure"in t&&t.pressure,this.rotationAngle="rotationAngle"in t&&t.rotationAngle,this.twist="twist"in t&&t.twist||0,this.tangentialPressure="tangentialPressure"in t&&t.tangentialPressure||0},/** Resets the data for pooling. */t.prototype.reset=function(){// isPrimary is the only property that we really need to reset - everything else is
// guaranteed to be overwritten
this.isPrimary=!1},t}(),sW=function(t,e){return(sW=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},sq=/** @class */function(){function t(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.target=null,this.currentTarget=null,this.type=null,this.data=null}return(/** Prevents event from reaching any objects other than the current object. */t.prototype.stopPropagation=function(){this.stopped=!0,this.stopPropagationHint=!0,this.stopsPropagatingAt=this.currentTarget},/** Resets the event. */t.prototype.reset=function(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.currentTarget=null,this.target=null},t)}(),sK=/** @class */function(){/**
     * @param {number} pointerId - Unique pointer id of the event
     * @private
     */function t(e){this._pointerId=e,this._flags=t.FLAGS.NONE}return(/**
     *
     * @private
     * @param {number} flag - The interaction flag to set
     * @param {boolean} yn - Should the flag be set or unset
     */t.prototype._doSet=function(t,e){e?this._flags=this._flags|t:this._flags=this._flags&~t},Object.defineProperty(t.prototype,"pointerId",{/**
         * Unique pointer id of the event
         * @readonly
         * @private
         * @member {number}
         */get:function(){return this._pointerId},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"flags",{/**
         * State of the tracking data, expressed as bit flags
         * @private
         * @member {number}
         */get:function(){return this._flags},set:function(t){this._flags=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"none",{/**
         * Is the tracked event inactive (not over or down)?
         * @private
         * @member {number}
         */get:function(){return this._flags===t.FLAGS.NONE},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"over",{/**
         * Is the tracked event over the DisplayObject?
         * @private
         * @member {boolean}
         */get:function(){return(this._flags&t.FLAGS.OVER)!=0},set:function(e){this._doSet(t.FLAGS.OVER,e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rightDown",{/**
         * Did the right mouse button come down in the DisplayObject?
         * @private
         * @member {boolean}
         */get:function(){return(this._flags&t.FLAGS.RIGHT_DOWN)!=0},set:function(e){this._doSet(t.FLAGS.RIGHT_DOWN,e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"leftDown",{/**
         * Did the left mouse button come down in the DisplayObject?
         * @private
         * @member {boolean}
         */get:function(){return(this._flags&t.FLAGS.LEFT_DOWN)!=0},set:function(e){this._doSet(t.FLAGS.LEFT_DOWN,e)},enumerable:!1,configurable:!0}),t.FLAGS=Object.freeze({NONE:0,OVER:1,LEFT_DOWN:2,RIGHT_DOWN:4}),t)}(),sZ=/** @class */function(){function t(){this._tempPoint=new nT}return(/**
     * Recursive implementation for findHit
     * @private
     * @param interactionEvent - event containing the point that
     *  is tested for collision
     * @param displayObject - the displayObject
     *  that will be hit test (recursively crawls its children)
     * @param func - the function that will be called on each interactive object. The
     *  interactionEvent, displayObject and hit will be passed to the function
     * @param hitTest - this indicates if the objects inside should be hit test against the point
     * @param interactive - Whether the displayObject is interactive
     * @returns - Returns true if the displayObject hit the point
     */t.prototype.recursiveFindHit=function(t,e,r,i,n){if(!e||!e.visible)return!1;var o,s=t.data.global;// Took a little while to rework this function correctly! But now it is done and nice and optimized! ^_^
//
// This function will now loop through all objects and then only hit test the objects it HAS
// to, not all of them. MUCH faster..
// An object will be hit test if the following is true:
//
// 1: It is interactive.
// 2: It belongs to a parent that is interactive AND one of the parents children have not already been hit.
//
// As another little optimization once an interactive object has been hit we can carry on
// through the scenegraph, but we know that there will be no more hits! So we can avoid extra hit tests
// A final optimization is that an object is not hit test directly if a child has already been hit.
n=e.interactive||n;var a=!1,h=n,u=!0;// If there is a hitArea, no need to test against anything else if the pointer is not within the hitArea
// There is also no longer a need to hitTest children.
if(e.hitArea)i&&(e.worldTransform.applyInverse(s,this._tempPoint),e.hitArea.contains(this._tempPoint.x,this._tempPoint.y)?a=!0:(i=!1,u=!1)),h=!1;else if(e._mask&&i){var l=e._mask.isMaskData?e._mask.maskObject:e._mask;!l||(null===(o=l.containsPoint)||void 0===o?void 0:o.call(l,s))||(i=!1)}// ** FREE TIP **! If an object is not interactive or has no buttons in it
// (such as a game scene!) set interactiveChildren to false for that displayObject.
// This will allow PixiJS to completely ignore and bypass checking the displayObjects children.
if(u&&e.interactiveChildren&&e.children)for(var c=e.children,f=c.length-1;f>=0;f--){var p=c[f],d=this.recursiveFindHit(t,p,r,i,h);if(d){// its a good idea to check if a child has lost its parent.
// this means it has been removed whilst looping so its best
if(!p.parent)continue;// we no longer need to hit test any more objects in this container as we we
// now know the parent has been hit
h=!1,d&&(t.target&&(i=!1),a=!0)}}return n&&(i&&!t.target&&!e.hitArea&&e.containsPoint&&e.containsPoint(s)&&(a=!0),e.interactive&&(a&&!t.target&&(t.target=e),r&&r(t,e,!!a))),a},/**
     * This function is provides a neat way of crawling through the scene graph and running a
     * specified function on all interactive objects it finds. It will also take care of hit
     * testing the interactive objects and passes the hit across in the function.
     * @private
     * @param interactionEvent - event containing the point that
     *  is tested for collision
     * @param displayObject - the displayObject
     *  that will be hit test (recursively crawls its children)
     * @param func - the function that will be called on each interactive object. The
     *  interactionEvent, displayObject and hit will be passed to the function
     * @param hitTest - this indicates if the objects inside should be hit test against the point
     * @returns - Returns true if the displayObject hit the point
     */t.prototype.findHit=function(t,e,r,i){this.recursiveFindHit(t,e,r,i,!1)},t)}();nH.mixin({interactive:!1,interactiveChildren:!0,hitArea:null,/**
     * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
     * Setting this changes the 'cursor' property to `'pointer'`.
     * @example
     * const sprite = new PIXI.Sprite(texture);
     * sprite.interactive = true;
     * sprite.buttonMode = true;
     * @member {boolean}
     * @memberof PIXI.DisplayObject#
     */get buttonMode(){return"pointer"===this.cursor},set buttonMode(value){value?this.cursor="pointer":"pointer"===this.cursor&&(this.cursor=null)},/**
     * This defines what cursor mode is used when the mouse cursor
     * is hovered over the displayObject.
     * @example
     * const sprite = new PIXI.Sprite(texture);
     * sprite.interactive = true;
     * sprite.cursor = 'wait';
     * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
     * @member {string}
     * @memberof PIXI.DisplayObject#
     */cursor:null,/**
     * Internal set of all active pointers, by identifier
     * @member {Map<number, InteractionTrackingData>}
     * @memberof PIXI.DisplayObject#
     * @private
     */get trackedPointers(){return void 0===this._trackedPointers&&(this._trackedPointers={}),this._trackedPointers},/**
     * Map of all tracked pointers, by identifier. Use trackedPointers to access.
     * @private
     * @type {Map<number, InteractionTrackingData>}
     */_trackedPointers:void 0});// helpers for hitTest() - only used inside hitTest()
var sJ={target:null,data:{global:null}},sQ=/** @class */function(t){/**
     * @param {PIXI.CanvasRenderer|PIXI.Renderer} renderer - A reference to the current renderer
     * @param options - The options for the manager.
     * @param {boolean} [options.autoPreventDefault=true] - Should the manager automatically prevent default browser actions.
     * @param {number} [options.interactionFrequency=10] - Maximum frequency (ms) at pointer over/out states will be checked.
     * @param {number} [options.useSystemTicker=true] - Whether to add {@link tickerUpdate} to {@link PIXI.Ticker.system}.
     */function e(e,r){var i=t.call(this)||this;return r=r||{},i.renderer=e,i.autoPreventDefault=void 0===r.autoPreventDefault||r.autoPreventDefault,i.interactionFrequency=r.interactionFrequency||10,i.mouse=new sV,i.mouse.identifier=1,// setting the mouse to start off far off screen will mean that mouse over does
//  not get called before we even move the mouse.
i.mouse.global.set(-999999),i.activeInteractionData={},i.activeInteractionData[1]=i.mouse,i.interactionDataPool=[],i.eventData=new sq,i.interactionDOMElement=null,i.moveWhenInside=!1,i.eventsAdded=!1,i.tickerAdded=!1,i.mouseOverRenderer=!("PointerEvent"in globalThis),i.supportsTouchEvents="ontouchstart"in globalThis,i.supportsPointerEvents=!!globalThis.PointerEvent,// this will make it so that you don't have to call bind all the time
i.onPointerUp=i.onPointerUp.bind(i),i.processPointerUp=i.processPointerUp.bind(i),i.onPointerCancel=i.onPointerCancel.bind(i),i.processPointerCancel=i.processPointerCancel.bind(i),i.onPointerDown=i.onPointerDown.bind(i),i.processPointerDown=i.processPointerDown.bind(i),i.onPointerMove=i.onPointerMove.bind(i),i.processPointerMove=i.processPointerMove.bind(i),i.onPointerOut=i.onPointerOut.bind(i),i.processPointerOverOut=i.processPointerOverOut.bind(i),i.onPointerOver=i.onPointerOver.bind(i),i.cursorStyles={default:"inherit",pointer:"pointer"},i.currentCursorMode=null,i.cursor=null,i.resolution=1,i.delayedEvents=[],i.search=new sZ,i._tempDisplayObject=new nY,i._eventListenerOptions={capture:!0,passive:!1},/**
         * Fired when a pointer device button (usually a mouse left-button) is pressed on the display
         * object.
         * @event PIXI.InteractionManager#mousedown
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
         * on the display object.
         * @event PIXI.InteractionManager#rightdown
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device button (usually a mouse left-button) is released over the display
         * object.
         * @event PIXI.InteractionManager#mouseup
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device secondary button (usually a mouse right-button) is released
         * over the display object.
         * @event PIXI.InteractionManager#rightup
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device button (usually a mouse left-button) is pressed and released on
         * the display object.
         * @event PIXI.InteractionManager#click
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
         * and released on the display object.
         * @event PIXI.InteractionManager#rightclick
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device button (usually a mouse left-button) is released outside the
         * display object that initially registered a
         * [mousedown]{@link PIXI.InteractionManager#event:mousedown}.
         * @event PIXI.InteractionManager#mouseupoutside
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device secondary button (usually a mouse right-button) is released
         * outside the display object that initially registered a
         * [rightdown]{@link PIXI.InteractionManager#event:rightdown}.
         * @event PIXI.InteractionManager#rightupoutside
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device (usually a mouse) is moved while over the display object
         * @event PIXI.InteractionManager#mousemove
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device (usually a mouse) is moved onto the display object
         * @event PIXI.InteractionManager#mouseover
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device (usually a mouse) is moved off the display object
         * @event PIXI.InteractionManager#mouseout
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device button is pressed on the display object.
         * @event PIXI.InteractionManager#pointerdown
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device button is released over the display object.
         * Not always fired when some buttons are held down while others are released. In those cases,
         * use [mousedown]{@link PIXI.InteractionManager#event:mousedown} and
         * [mouseup]{@link PIXI.InteractionManager#event:mouseup} instead.
         * @event PIXI.InteractionManager#pointerup
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when the operating system cancels a pointer event
         * @event PIXI.InteractionManager#pointercancel
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device button is pressed and released on the display object.
         * @event PIXI.InteractionManager#pointertap
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device button is released outside the display object that initially
         * registered a [pointerdown]{@link PIXI.InteractionManager#event:pointerdown}.
         * @event PIXI.InteractionManager#pointerupoutside
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device is moved while over the display object
         * @event PIXI.InteractionManager#pointermove
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device is moved onto the display object
         * @event PIXI.InteractionManager#pointerover
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device is moved off the display object
         * @event PIXI.InteractionManager#pointerout
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a touch point is placed on the display object.
         * @event PIXI.InteractionManager#touchstart
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a touch point is removed from the display object.
         * @event PIXI.InteractionManager#touchend
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when the operating system cancels a touch
         * @event PIXI.InteractionManager#touchcancel
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a touch point is placed and removed from the display object.
         * @event PIXI.InteractionManager#tap
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a touch point is removed outside of the display object that initially
         * registered a [touchstart]{@link PIXI.InteractionManager#event:touchstart}.
         * @event PIXI.InteractionManager#touchendoutside
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a touch point is moved along the display object.
         * @event PIXI.InteractionManager#touchmove
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device button (usually a mouse left-button) is pressed on the display.
         * object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#mousedown
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
         * on the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#rightdown
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device button (usually a mouse left-button) is released over the display
         * object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#mouseup
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device secondary button (usually a mouse right-button) is released
         * over the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#rightup
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device button (usually a mouse left-button) is pressed and released on
         * the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#click
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
         * and released on the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#rightclick
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device button (usually a mouse left-button) is released outside the
         * display object that initially registered a
         * [mousedown]{@link PIXI.DisplayObject#event:mousedown}.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#mouseupoutside
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device secondary button (usually a mouse right-button) is released
         * outside the display object that initially registered a
         * [rightdown]{@link PIXI.DisplayObject#event:rightdown}.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#rightupoutside
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device (usually a mouse) is moved while over the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#mousemove
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device (usually a mouse) is moved onto the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#mouseover
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device (usually a mouse) is moved off the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#mouseout
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device button is pressed on the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#pointerdown
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device button is released over the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#pointerup
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when the operating system cancels a pointer event.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#pointercancel
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device button is pressed and released on the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#pointertap
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device button is released outside the display object that initially
         * registered a [pointerdown]{@link PIXI.DisplayObject#event:pointerdown}.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#pointerupoutside
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device is moved while over the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#pointermove
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device is moved onto the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#pointerover
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a pointer device is moved off the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#pointerout
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a touch point is placed on the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#touchstart
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a touch point is removed from the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#touchend
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when the operating system cancels a touch.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#touchcancel
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a touch point is placed and removed from the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#tap
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a touch point is removed outside of the display object that initially
         * registered a [touchstart]{@link PIXI.DisplayObject#event:touchstart}.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#touchendoutside
         * @param {PIXI.InteractionEvent} event - Interaction event
         *//**
         * Fired when a touch point is moved along the display object.
         * DisplayObject's `interactive` property must be set to `true` to fire event.
         *
         * This comes from the @pixi/interaction package.
         * @event PIXI.DisplayObject#touchmove
         * @param {PIXI.InteractionEvent} event - Interaction event
         */i._useSystemTicker=void 0===r.useSystemTicker||r.useSystemTicker,i.setTargetElement(i.renderer.view,i.renderer.resolution),i}return!function(t,e){function r(){this.constructor=t}sW(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),Object.defineProperty(e.prototype,"useSystemTicker",{/**
         * Should the InteractionManager automatically add {@link tickerUpdate} to {@link PIXI.Ticker.system}.
         * @default true
         */get:function(){return this._useSystemTicker},set:function(t){this._useSystemTicker=t,t?this.addTickerListener():this.removeTickerListener()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lastObjectRendered",{/**
         * Last rendered object or temp object.
         * @readonly
         * @protected
         */get:function(){return this.renderer._lastObjectRendered||this._tempDisplayObject},enumerable:!1,configurable:!0}),/**
     * Hit tests a point against the display tree, returning the first interactive object that is hit.
     * @param globalPoint - A point to hit test with, in global space.
     * @param root - The root display object to start from. If omitted, defaults
     * to the last rendered root of the associated renderer.
     * @returns - The hit display object, if any.
     */e.prototype.hitTest=function(t,e){// return our found object - it'll be null if we didn't hit anything
return(// clear the target for our hit test
sJ.target=null,// assign the global point
sJ.data.global=t,e||(e=this.lastObjectRendered),// run the hit test
this.processInteractive(sJ,e,null,!0),sJ.target)},/**
     * Sets the DOM element which will receive mouse/touch events. This is useful for when you have
     * other DOM elements on top of the renderers Canvas element. With this you'll be bale to delegate
     * another DOM element to receive those events.
     * @param element - the DOM element which will receive mouse and touch events.
     * @param resolution - The resolution / device pixel ratio of the new element (relative to the canvas).
     */e.prototype.setTargetElement=function(t,e){void 0===e&&(e=1),this.removeTickerListener(),this.removeEvents(),this.interactionDOMElement=t,this.resolution=e,this.addEvents(),this.addTickerListener()},/** Adds the ticker listener. */e.prototype.addTickerListener=function(){!this.tickerAdded&&this.interactionDOMElement&&this._useSystemTicker&&(nQ.system.add(this.tickerUpdate,this,tp.INTERACTION),this.tickerAdded=!0)},/** Removes the ticker listener. */e.prototype.removeTickerListener=function(){this.tickerAdded&&(nQ.system.remove(this.tickerUpdate,this),this.tickerAdded=!1)},/** Registers all the DOM events. */e.prototype.addEvents=function(){if(!this.eventsAdded&&this.interactionDOMElement){var t=this.interactionDOMElement.style;globalThis.navigator.msPointerEnabled?(t.msContentZooming="none",t.msTouchAction="none"):this.supportsPointerEvents&&(t.touchAction="none"),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),// pointerout is fired in addition to pointerup (for touch events) and pointercancel
// we already handle those, so for the purposes of what we do in onPointerOut, we only
// care about the pointerleave event
this.interactionDOMElement.addEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),globalThis.addEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),globalThis.addEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(globalThis.document.addEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),globalThis.addEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.addEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.eventsAdded=!0}},/** Removes all the DOM events that were previously registered. */e.prototype.removeEvents=function(){if(this.eventsAdded&&this.interactionDOMElement){var t=this.interactionDOMElement.style;globalThis.navigator.msPointerEnabled?(t.msContentZooming="",t.msTouchAction=""):this.supportsPointerEvents&&(t.touchAction=""),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),globalThis.removeEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),globalThis.removeEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(globalThis.document.removeEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),globalThis.removeEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.removeEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.interactionDOMElement=null,this.eventsAdded=!1}},/**
     * Updates the state of interactive objects if at least {@link interactionFrequency}
     * milliseconds have passed since the last invocation.
     *
     * Invoked by a throttled ticker update from {@link PIXI.Ticker.system}.
     * @param deltaTime - time delta since the last call
     */e.prototype.tickerUpdate=function(t){this._deltaTime+=t,this._deltaTime<this.interactionFrequency||(this._deltaTime=0,this.update())},/** Updates the state of interactive objects. */e.prototype.update=function(){if(this.interactionDOMElement){// if the user move the mouse this check has already been done using the mouse move!
if(this._didMove){this._didMove=!1;return}// Resets the flag as set by a stopPropagation call. This flag is usually reset by a user interaction of any kind,
// but there was a scenario of a display object moving under a static mouse cursor.
// In this case, mouseover and mouseevents would not pass the flag test in dispatchEvent function
for(var t in this.cursor=null,this.activeInteractionData)if(this.activeInteractionData.hasOwnProperty(t)){var e=this.activeInteractionData[t];if(e.originalEvent&&"touch"!==e.pointerType){var r=this.configureInteractionEventForDOMEvent(this.eventData,e.originalEvent,e);this.processInteractive(r,this.lastObjectRendered,this.processPointerOverOut,!0)}}this.setCursorMode(this.cursor)}},/**
     * Sets the current cursor mode, handling any callbacks or CSS style changes.
     * @param mode - cursor mode, a key from the cursorStyles dictionary
     */e.prototype.setCursorMode=function(t){t=t||"default";var e=!0;// if the mode didn't actually change, bail early
if(globalThis.OffscreenCanvas&&this.interactionDOMElement instanceof OffscreenCanvas&&(e=!1),this.currentCursorMode!==t){this.currentCursorMode=t;var r=this.cursorStyles[t];// only do things if there is a cursor style for it
if(r)switch(typeof r){case"string":// string styles are handled as cursor CSS
e&&(this.interactionDOMElement.style.cursor=r);break;case"function":// functions are just called, and passed the cursor mode
r(t);break;case"object":// if it is an object, assume that it is a dictionary of CSS styles,
// apply it to the interactionDOMElement
e&&Object.assign(this.interactionDOMElement.style,r)}else e&&"string"==typeof t&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,t)&&// for the mode, then assume that the dev wants it to be CSS for the cursor.
(this.interactionDOMElement.style.cursor=t)}},/**
     * Dispatches an event on the display object that was interacted with.
     * @param displayObject - the display object in question
     * @param eventString - the name of the event (e.g, mousedown)
     * @param eventData - the event data object
     */e.prototype.dispatchEvent=function(t,e,r){// Even if the event was stopped, at least dispatch any remaining events
// for the same display object.
(!r.stopPropagationHint||t===r.stopsPropagatingAt)&&(r.currentTarget=t,r.type=e,t.emit(e,r),t[e]&&t[e](r))},/**
     * Puts a event on a queue to be dispatched later. This is used to guarantee correct
     * ordering of over/out events.
     * @param displayObject - the display object in question
     * @param eventString - the name of the event (e.g, mousedown)
     * @param eventData - the event data object
     */e.prototype.delayDispatchEvent=function(t,e,r){this.delayedEvents.push({displayObject:t,eventString:e,eventData:r})},/**
     * Maps x and y coords from a DOM object and maps them correctly to the PixiJS view. The
     * resulting value is stored in the point. This takes into account the fact that the DOM
     * element could be scaled and positioned anywhere on the screen.
     * @param point - the point that the result will be stored in
     * @param x - the x coord of the position to map
     * @param y - the y coord of the position to map
     */e.prototype.mapPositionToPoint=function(t,e,r){i=this.interactionDOMElement.parentElement?this.interactionDOMElement.getBoundingClientRect():{x:0,y:0,width:this.interactionDOMElement.width,height:this.interactionDOMElement.height,left:0,top:0};var i,n=1/this.resolution;t.x=(e-i.left)*(this.interactionDOMElement.width/i.width)*n,t.y=(r-i.top)*(this.interactionDOMElement.height/i.height)*n},/**
     * This function is provides a neat way of crawling through the scene graph and running a
     * specified function on all interactive objects it finds. It will also take care of hit
     * testing the interactive objects and passes the hit across in the function.
     * @protected
     * @param interactionEvent - event containing the point that
     *  is tested for collision
     * @param displayObject - the displayObject
     *  that will be hit test (recursively crawls its children)
     * @param func - the function that will be called on each interactive object. The
     *  interactionEvent, displayObject and hit will be passed to the function
     * @param hitTest - indicates whether we want to calculate hits
     *  or just iterate through all interactive objects
     */e.prototype.processInteractive=function(t,e,r,i){var n=this.search.findHit(t,e,r,i),o=this.delayedEvents;if(!o.length)return n;// Reset the propagation hint, because we start deeper in the tree again.
t.stopPropagationHint=!1;var s=o.length;this.delayedEvents=[];for(var a=0;a<s;a++){var h=o[a],u=h.displayObject,l=h.eventString,c=h.eventData;c.stopsPropagatingAt===u&&(c.stopPropagationHint=!0),this.dispatchEvent(u,l,c)}return n},/**
     * Is called when the pointer button is pressed down on the renderer element
     * @param originalEvent - The DOM event of a pointer button being pressed down
     */e.prototype.onPointerDown=function(t){// if we support touch events, then only use those for touch events, not pointer events
if(!this.supportsTouchEvents||"touch"!==t.pointerType){var e=this.normalizeToPointerData(t);/*
         * No need to prevent default on natural pointer events, as there are no side effects
         * Normalized events, however, may have the double mousedown/touchstart issue on the native android browser,
         * so still need to be prevented.
         */// Guaranteed that there will be at least one event in events, and all events must have the same pointer type
this.autoPreventDefault&&e[0].isNormalized&&(t.cancelable||!("cancelable"in t))&&t.preventDefault();for(var r=e.length,i=0;i<r;i++){var n=e[i],o=this.getInteractionDataForPointerId(n),s=this.configureInteractionEventForDOMEvent(this.eventData,n,o);if(s.data.originalEvent=t,this.processInteractive(s,this.lastObjectRendered,this.processPointerDown,!0),this.emit("pointerdown",s),"touch"===n.pointerType)this.emit("touchstart",s);else if("mouse"===n.pointerType||"pen"===n.pointerType){var a=2===n.button;this.emit(a?"rightdown":"mousedown",this.eventData)}}}},/**
     * Processes the result of the pointer down check and dispatches the event if need be
     * @param interactionEvent - The interaction event wrapping the DOM event
     * @param displayObject - The display object that was tested
     * @param hit - the result of the hit test on the display object
     */e.prototype.processPointerDown=function(t,e,r){var i=t.data,n=t.data.identifier;if(r){if(e.trackedPointers[n]||(e.trackedPointers[n]=new sK(n)),this.dispatchEvent(e,"pointerdown",t),"touch"===i.pointerType)this.dispatchEvent(e,"touchstart",t);else if("mouse"===i.pointerType||"pen"===i.pointerType){var o=2===i.button;o?e.trackedPointers[n].rightDown=!0:e.trackedPointers[n].leftDown=!0,this.dispatchEvent(e,o?"rightdown":"mousedown",t)}}},/**
     * Is called when the pointer button is released on the renderer element
     * @param originalEvent - The DOM event of a pointer button being released
     * @param cancelled - true if the pointer is cancelled
     * @param func - Function passed to {@link processInteractive}
     */e.prototype.onPointerComplete=function(t,e,r){var i=this.normalizeToPointerData(t),n=i.length,o=t.target;// if in shadow DOM use composedPath to access target
t.composedPath&&t.composedPath().length>0&&(o=t.composedPath()[0]);for(var s=o!==this.interactionDOMElement?"outside":"",a=0;a<n;a++){var h=i[a],u=this.getInteractionDataForPointerId(h),l=this.configureInteractionEventForDOMEvent(this.eventData,h,u);if(l.data.originalEvent=t,// perform hit testing for events targeting our canvas or cancel events
this.processInteractive(l,this.lastObjectRendered,r,e||!s),this.emit(e?"pointercancel":"pointerup"+s,l),"mouse"===h.pointerType||"pen"===h.pointerType){var c=2===h.button;this.emit(c?"rightup"+s:"mouseup"+s,l)}else"touch"===h.pointerType&&(this.emit(e?"touchcancel":"touchend"+s,l),this.releaseInteractionDataForPointerId(h.pointerId))}},/**
     * Is called when the pointer button is cancelled
     * @param event - The DOM event of a pointer button being released
     */e.prototype.onPointerCancel=function(t){// if we support touch events, then only use those for touch events, not pointer events
this.supportsTouchEvents&&"touch"===t.pointerType||this.onPointerComplete(t,!0,this.processPointerCancel)},/**
     * Processes the result of the pointer cancel check and dispatches the event if need be
     * @param interactionEvent - The interaction event wrapping the DOM event
     * @param displayObject - The display object that was tested
     */e.prototype.processPointerCancel=function(t,e){var r=t.data,i=t.data.identifier;void 0!==e.trackedPointers[i]&&(delete e.trackedPointers[i],this.dispatchEvent(e,"pointercancel",t),"touch"===r.pointerType&&this.dispatchEvent(e,"touchcancel",t))},/**
     * Is called when the pointer button is released on the renderer element
     * @param event - The DOM event of a pointer button being released
     */e.prototype.onPointerUp=function(t){// if we support touch events, then only use those for touch events, not pointer events
this.supportsTouchEvents&&"touch"===t.pointerType||this.onPointerComplete(t,!1,this.processPointerUp)},/**
     * Processes the result of the pointer up check and dispatches the event if need be
     * @param interactionEvent - The interaction event wrapping the DOM event
     * @param displayObject - The display object that was tested
     * @param hit - the result of the hit test on the display object
     */e.prototype.processPointerUp=function(t,e,r){var i=t.data,n=t.data.identifier,o=e.trackedPointers[n],s="touch"===i.pointerType,a="mouse"===i.pointerType||"pen"===i.pointerType,h=!1;// Mouse only
if(a){var u=2===i.button,l=sK.FLAGS,c=u?l.RIGHT_DOWN:l.LEFT_DOWN,f=void 0!==o&&o.flags&c;r?(this.dispatchEvent(e,u?"rightup":"mouseup",t),f&&(this.dispatchEvent(e,u?"rightclick":"click",t),// because we can confirm that the mousedown happened on this object, flag for later emit of pointertap
h=!0)):f&&this.dispatchEvent(e,u?"rightupoutside":"mouseupoutside",t),o&&(u?o.rightDown=!1:o.leftDown=!1)}r?(this.dispatchEvent(e,"pointerup",t),s&&this.dispatchEvent(e,"touchend",t),o&&((!a||h)&&this.dispatchEvent(e,"pointertap",t),s&&(this.dispatchEvent(e,"tap",t),// touches are no longer over (if they ever were) when we get the touchend
// so we should ensure that we don't keep pretending that they are
o.over=!1))):o&&(this.dispatchEvent(e,"pointerupoutside",t),s&&this.dispatchEvent(e,"touchendoutside",t)),o&&o.none&&delete e.trackedPointers[n]},/**
     * Is called when the pointer moves across the renderer element
     * @param originalEvent - The DOM event of a pointer moving
     */e.prototype.onPointerMove=function(t){// if we support touch events, then only use those for touch events, not pointer events
if(!this.supportsTouchEvents||"touch"!==t.pointerType){var e=this.normalizeToPointerData(t);("mouse"===e[0].pointerType||"pen"===e[0].pointerType)&&(this._didMove=!0,this.cursor=null);for(var r=e.length,i=0;i<r;i++){var n=e[i],o=this.getInteractionDataForPointerId(n),s=this.configureInteractionEventForDOMEvent(this.eventData,n,o);s.data.originalEvent=t,this.processInteractive(s,this.lastObjectRendered,this.processPointerMove,!0),this.emit("pointermove",s),"touch"===n.pointerType&&this.emit("touchmove",s),("mouse"===n.pointerType||"pen"===n.pointerType)&&this.emit("mousemove",s)}"mouse"===e[0].pointerType&&this.setCursorMode(this.cursor)}},/**
     * Processes the result of the pointer move check and dispatches the event if need be
     * @param interactionEvent - The interaction event wrapping the DOM event
     * @param displayObject - The display object that was tested
     * @param hit - the result of the hit test on the display object
     */e.prototype.processPointerMove=function(t,e,r){var i=t.data,n="touch"===i.pointerType,o="mouse"===i.pointerType||"pen"===i.pointerType;o&&this.processPointerOverOut(t,e,r),(!this.moveWhenInside||r)&&(this.dispatchEvent(e,"pointermove",t),n&&this.dispatchEvent(e,"touchmove",t),o&&this.dispatchEvent(e,"mousemove",t))},/**
     * Is called when the pointer is moved out of the renderer element
     * @private
     * @param {PointerEvent} originalEvent - The DOM event of a pointer being moved out
     */e.prototype.onPointerOut=function(t){// if we support touch events, then only use those for touch events, not pointer events
if(!this.supportsTouchEvents||"touch"!==t.pointerType){// Only mouse and pointer can call onPointerOut, so events will always be length 1
var e=this.normalizeToPointerData(t)[0];"mouse"===e.pointerType&&(this.mouseOverRenderer=!1,this.setCursorMode(null));var r=this.getInteractionDataForPointerId(e),i=this.configureInteractionEventForDOMEvent(this.eventData,e,r);i.data.originalEvent=e,this.processInteractive(i,this.lastObjectRendered,this.processPointerOverOut,!1),this.emit("pointerout",i),"mouse"===e.pointerType||"pen"===e.pointerType?this.emit("mouseout",i):// introduce memory leaks
this.releaseInteractionDataForPointerId(r.identifier)}},/**
     * Processes the result of the pointer over/out check and dispatches the event if need be.
     * @param interactionEvent - The interaction event wrapping the DOM event
     * @param displayObject - The display object that was tested
     * @param hit - the result of the hit test on the display object
     */e.prototype.processPointerOverOut=function(t,e,r){var i=t.data,n=t.data.identifier,o="mouse"===i.pointerType||"pen"===i.pointerType,s=e.trackedPointers[n];r&&!s&&(s=e.trackedPointers[n]=new sK(n)),void 0!==s&&(r&&this.mouseOverRenderer?(!s.over&&(s.over=!0,this.delayDispatchEvent(e,"pointerover",t),o&&this.delayDispatchEvent(e,"mouseover",t)),o&&null===this.cursor&&(this.cursor=e.cursor)):s.over&&(s.over=!1,this.dispatchEvent(e,"pointerout",this.eventData),o&&this.dispatchEvent(e,"mouseout",t),s.none&&delete e.trackedPointers[n]))},/**
     * Is called when the pointer is moved into the renderer element.
     * @param originalEvent - The DOM event of a pointer button being moved into the renderer view.
     */e.prototype.onPointerOver=function(t){if(!this.supportsTouchEvents||"touch"!==t.pointerType){// Only mouse and pointer can call onPointerOver, so events will always be length 1
var e=this.normalizeToPointerData(t)[0],r=this.getInteractionDataForPointerId(e),i=this.configureInteractionEventForDOMEvent(this.eventData,e,r);i.data.originalEvent=e,"mouse"===e.pointerType&&(this.mouseOverRenderer=!0),this.emit("pointerover",i),("mouse"===e.pointerType||"pen"===e.pointerType)&&this.emit("mouseover",i)}},/**
     * Get InteractionData for a given pointerId. Store that data as well.
     * @param event - Normalized pointer event, output from normalizeToPointerData.
     * @returns - Interaction data for the given pointer identifier.
     */e.prototype.getInteractionDataForPointerId=function(t){var e,r=t.pointerId;return 1===r||"mouse"===t.pointerType?e=this.mouse:this.activeInteractionData[r]?e=this.activeInteractionData[r]:((e=this.interactionDataPool.pop()||new sV).identifier=r,this.activeInteractionData[r]=e),// copy properties from the event, so that we can make sure that touch/pointer specific
// data is available
e.copyEvent(t),e},/**
     * Return unused InteractionData to the pool, for a given pointerId
     * @param pointerId - Identifier from a pointer event
     */e.prototype.releaseInteractionDataForPointerId=function(t){var e=this.activeInteractionData[t];e&&(delete this.activeInteractionData[t],e.reset(),this.interactionDataPool.push(e))},/**
     * Configure an InteractionEvent to wrap a DOM PointerEvent and InteractionData
     * @param interactionEvent - The event to be configured
     * @param pointerEvent - The DOM event that will be paired with the InteractionEvent
     * @param interactionData - The InteractionData that will be paired
     *        with the InteractionEvent
     * @returns - the interaction event that was passed in
     */e.prototype.configureInteractionEventForDOMEvent=function(t,e,r){return t.data=r,this.mapPositionToPoint(r.global,e.clientX,e.clientY),"touch"===e.pointerType&&(e.globalX=r.global.x,e.globalY=r.global.y),r.originalEvent=e,t.reset(),t},/**
     * Ensures that the original event object contains all data that a regular pointer event would have
     * @param {TouchEvent|MouseEvent|PointerEvent} event - The original event data from a touch or mouse event
     * @returns - An array containing a single normalized pointer event, in the case of a pointer
     *  or mouse event, or a multiple normalized pointer events if there are multiple changed touches
     */e.prototype.normalizeToPointerData=function(t){var e=[];if(this.supportsTouchEvents&&t instanceof TouchEvent)for(var r=0,i=t.changedTouches.length;r<i;r++){var n=t.changedTouches[r];void 0===n.button&&(n.button=t.touches.length?1:0),void 0===n.buttons&&(n.buttons=t.touches.length?1:0),void 0===n.isPrimary&&(n.isPrimary=1===t.touches.length&&"touchstart"===t.type),void 0===n.width&&(n.width=n.radiusX||1),void 0===n.height&&(n.height=n.radiusY||1),void 0===n.tiltX&&(n.tiltX=0),void 0===n.tiltY&&(n.tiltY=0),void 0===n.pointerType&&(n.pointerType="touch"),void 0===n.pointerId&&(n.pointerId=n.identifier||0),void 0===n.pressure&&(n.pressure=n.force||.5),void 0===n.twist&&(n.twist=0),void 0===n.tangentialPressure&&(n.tangentialPressure=0),void 0===n.layerX&&(n.layerX=n.offsetX=n.clientX),void 0===n.layerY&&(n.layerY=n.offsetY=n.clientY),// mark the touch as normalized, just so that we know we did it
n.isNormalized=!0,e.push(n)}else(!globalThis.MouseEvent||t instanceof MouseEvent&&(!this.supportsPointerEvents||!(t instanceof globalThis.PointerEvent)))&&(void 0===t.isPrimary&&(t.isPrimary=!0),void 0===t.width&&(t.width=1),void 0===t.height&&(t.height=1),void 0===t.tiltX&&(t.tiltX=0),void 0===t.tiltY&&(t.tiltY=0),void 0===t.pointerType&&(t.pointerType="mouse"),void 0===t.pointerId&&(t.pointerId=1),void 0===t.pressure&&(t.pressure=.5),void 0===t.twist&&(t.twist=0),void 0===t.tangentialPressure&&(t.tangentialPressure=0),// mark the mouse event as normalized, just so that we know we did it
t.isNormalized=!0),e.push(t);return e},/** Destroys the interaction manager. */e.prototype.destroy=function(){this.removeEvents(),this.removeTickerListener(),this.removeAllListeners(),this.renderer=null,this.mouse=null,this.eventData=null,this.interactionDOMElement=null,this.onPointerDown=null,this.processPointerDown=null,this.onPointerUp=null,this.processPointerUp=null,this.onPointerCancel=null,this.processPointerCancel=null,this.onPointerMove=null,this.processPointerMove=null,this.onPointerOut=null,this.processPointerOverOut=null,this.onPointerOver=null,this.search=null},/** @ignore */e.extension={name:"interaction",type:[tf.RendererPlugin,tf.CanvasRendererPlugin]},e}(/*@__PURE__*/tM(eu)),s$=new nA,s0=/** @class */function(){/**
     * @param renderer - A reference to the current renderer
     */function t(t){this.renderer=t}return(/**
     * Will return a HTML Image of the target
     * @param target - A displayObject or renderTexture
     *  to convert. If left empty will use the main renderer
     * @param format - Image format, e.g. "image/jpeg" or "image/webp".
     * @param quality - JPEG or Webp compression from 0 to 1. Default is 0.92.
     * @returns - HTML Image of the target
     */t.prototype.image=function(t,e,r){var i=new Image;return i.src=this.base64(t,e,r),i},/**
     * Will return a base64 encoded string of this target. It works by calling
     *  `Extract.getCanvas` and then running toDataURL on that.
     * @param target - A displayObject or renderTexture
     *  to convert. If left empty will use the main renderer
     * @param format - Image format, e.g. "image/jpeg" or "image/webp".
     * @param quality - JPEG or Webp compression from 0 to 1. Default is 0.92.
     * @returns - A base64 encoded string of the texture.
     */t.prototype.base64=function(t,e,r){return this.canvas(t).toDataURL(e,r)},/**
     * Creates a Canvas element, renders this target to it and then returns it.
     * @param target - A displayObject or renderTexture
     *  to convert. If left empty will use the main renderer
     * @param frame - The frame the extraction is restricted to.
     * @returns - A Canvas element with the texture rendered on.
     */t.prototype.canvas=function(e,r){var i=this._rawPixels(e,r),n=i.pixels,o=i.width,s=i.height,a=i.flipY,h=new nv(o,s,1),u=h.context.getImageData(0,0,o,s);// Flipping pixels
if(t.arrayPostDivide(n,u.data),h.context.putImageData(u,0,0),a){var l=new nv(h.width,h.height,1);l.context.scale(1,-1),// We can't render to itself because we should be empty before render.
l.context.drawImage(h.canvas,0,-s),h.destroy(),h=l}// Send the canvas back
return h.canvas},/**
     * Will return a one-dimensional array containing the pixel data of the entire texture in RGBA
     * order, with integer values between 0 and 255 (included).
     * @param target - A displayObject or renderTexture
     *  to convert. If left empty will use the main renderer
     * @param frame - The frame the extraction is restricted to.
     * @returns - One-dimensional array containing the pixel data of the entire texture
     */t.prototype.pixels=function(e,r){var i=this._rawPixels(e,r).pixels;return t.arrayPostDivide(i,i),i},t.prototype._rawPixels=function(t,e){var r,i,n=this.renderer,o=!1,s=!1;if(t){if(t instanceof oy)i=t;else{var a=n.context.webGLVersion>=2?n.multisample:ts.NONE;if(i=this.renderer.generateTexture(t,{multisample:a}),a!==ts.NONE){// Resolve the multisampled texture to a non-multisampled texture
var h=oy.create({width:i.width,height:i.height});n.framebuffer.bind(i.framebuffer),n.framebuffer.blit(h.framebuffer),n.framebuffer.bind(null),i.destroy(!0),i=h}s=!0}}i?(r=i.baseTexture.resolution,e=null!=e?e:i.frame,o=!1,n.renderTexture.bind(i)):(r=n.resolution,e||((e=s$).width=n.width,e.height=n.height),o=!0,n.renderTexture.bind(null));var u=Math.round(e.width*r),l=Math.round(e.height*r),c=new Uint8Array(4*u*l),f=n.gl;return f.readPixels(Math.round(e.x*r),Math.round(e.y*r),u,l,f.RGBA,f.UNSIGNED_BYTE,c),s&&i.destroy(!0),{pixels:c,width:u,height:l,flipY:o}},/** Destroys the extract. */t.prototype.destroy=function(){this.renderer=null},/**
     * Takes premultiplied pixel data and produces regular pixel data
     * @private
     * @param pixels - array of pixel data
     * @param out - output array
     */t.arrayPostDivide=function(t,e){for(var r=0;r<t.length;r+=4){var i=e[r+3]=t[r+3];0!==i?(e[r]=Math.round(Math.min(255*t[r]/i,255)),e[r+1]=Math.round(Math.min(255*t[r+1]/i,255)),e[r+2]=Math.round(Math.min(255*t[r+2]/i,255))):(e[r]=t[r],e[r+1]=t[r+1],e[r+2]=t[r+2])}},/** @ignore */t.extension={name:"extract",type:tf.RendererPlugin},t)}(),s1=/** @class */function(){/**
     * SignalBinding constructor.
     * @constructs SignalBinding
     * @param {Function} fn - Event handler to be called.
     * @param {boolean} [once=false] - Should this listener be removed after dispatch
     * @param {object} [thisArg] - The context of the callback function.
     * @api private
     */// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function t(t,e,r){void 0===e&&(e=!1),this._fn=t,this._once=e,this._thisArg=r,this._next=this._prev=this._owner=null}return t.prototype.detach=function(){return null!==this._owner&&(this._owner.detach(this),!0)},t}();/**
 * @param self
 * @param node
 * @private
 */function s2(t,e){return t._head?(t._tail._next=e,e._prev=t._tail):t._head=e,t._tail=e,e._owner=t,e}/**
 * @memberof PIXI
 */var s3=/** @class */function(){/**
     * MiniSignal constructor.
     * @example
     * let mySignal = new Signal();
     * let binding = mySignal.add(onSignal);
     * mySignal.dispatch('foo', 'bar');
     * mySignal.detach(binding);
     */function t(){this._head=this._tail=void 0}return(/**
     * Return an array of attached SignalBinding.
     * @param {boolean} [exists=false] - We only need to know if there are handlers.
     * @returns {PIXI.SignalBinding[] | boolean} Array of attached SignalBinding or Boolean if called with exists = true
     * @api public
     */t.prototype.handlers=function(t){void 0===t&&(t=!1);var e=this._head;if(t)return!!e;for(var r=[];e;)r.push(e),e=e._next;return r},/**
     * Return true if node is a SignalBinding attached to this MiniSignal
     * @param {PIXI.SignalBinding} node - Node to check.
     * @returns {boolean} True if node is attache to mini-signal
     */t.prototype.has=function(t){if(!(t instanceof s1))throw Error("MiniSignal#has(): First arg must be a SignalBinding object.");return t._owner===this},/**
     * Dispaches a signal to all registered listeners.
     * @param {...any} args
     * @returns {boolean} Indication if we've emitted an event.
     */t.prototype.dispatch=function(){for(var t=arguments,e=[],r=0;r<arguments.length;r++)e[r]=t[r];var i=this._head;if(!i)return!1;for(;i;)i._once&&this.detach(i),i._fn.apply(i._thisArg,e),i=i._next;return!0},/**
     * Register a new listener.
     * @param {Function} fn - Callback function.
     * @param {object} [thisArg] - The context of the callback function.
     * @returns {PIXI.SignalBinding} The SignalBinding node that was added.
     */t.prototype.add=function(t,e){if(void 0===e&&(e=null),"function"!=typeof t)throw Error("MiniSignal#add(): First arg must be a Function.");return s2(this,new s1(t,!1,e))},/**
     * Register a new listener that will be executed only once.
     * @param {Function} fn - Callback function.
     * @param {object} [thisArg] - The context of the callback function.
     * @returns {PIXI.SignalBinding} The SignalBinding node that was added.
     */t.prototype.once=function(t,e){if(void 0===e&&(e=null),"function"!=typeof t)throw Error("MiniSignal#once(): First arg must be a Function.");return s2(this,new s1(t,!0,e))},/**
     * Remove binding object.
     * @param {PIXI.SignalBinding} node - The binding node that will be removed.
     * @returns {Signal} The instance on which this method was called.
      @api public */t.prototype.detach=function(t){if(!(t instanceof s1))throw Error("MiniSignal#detach(): First arg must be a SignalBinding object.");return t._owner!==this||(t._prev&&(t._prev._next=t._next),t._next&&(t._next._prev=t._prev),t===this._head?(this._head=t._next,null===t._next&&(this._tail=null)):t===this._tail&&(this._tail=t._prev,this._tail._next=null),t._owner=null),this},/**
     * Detach all listeners.
     * @returns {Signal} The instance on which this method was called.
     */t.prototype.detachAll=function(){var t=this._head;if(!t)return this;for(this._head=this._tail=null;t;)t._owner=null,t=t._next;return this},t)}();/**
 * function from npm package `parseUri`, converted to TS to avoid leftpad incident
 * @param {string} str
 * @param [opts] - options
 * @param {boolean} [opts.strictMode] - type of parser
 */function s4(t,e){e=e||{};for(var r={// eslint-disable-next-line max-len
key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{// eslint-disable-next-line max-len
strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,// eslint-disable-next-line max-len
loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},i=r.parser[e.strictMode?"strict":"loose"].exec(t),n={},o=14;o--;)n[r.key[o]]=i[o]||"";return n[r.q.name]={},n[r.key[12]].replace(r.q.parser,function(t,e,i){e&&(n[r.q.name][e]=i)}),n}var s8=null;// noop
function s6(){}/**
 * Quick helper to set a value on one of the extension maps. Ensures there is no
 * dot at the start of the extension.
 * @ignore
 * @param map - The map to set on.
 * @param extname - The extension (or key) to set.
 * @param val - The value to set.
 */function s5(t,e,r){e&&0===e.indexOf(".")&&(e=e.substring(1)),e&&(t[e]=r)}/**
 * Quick helper to get string xhr type.
 * @ignore
 * @param xhr - The request to check.
 * @returns The type.
 */function s9(t){return t.toString().replace("object ","")}/**
 * Manages the state and loading of a resource and all child resources.
 *
 * Can be extended in `GlobalMixins.LoaderResource`.
 * @memberof PIXI
 */var s7=/** @class */function(){/**
     * @param {string} name - The name of the resource to load.
     * @param {string|string[]} url - The url for this resource, for audio/video loads you can pass
     *      an array of sources.
     * @param {object} [options] - The options for the load.
     * @param {string|boolean} [options.crossOrigin] - Is this request cross-origin? Default is to
     *      determine automatically.
     * @param {number} [options.timeout=0] - A timeout in milliseconds for the load. If the load takes
     *      longer than this time it is cancelled and the load is considered a failure. If this value is
     *      set to `0` then there is no explicit timeout.
     * @param {PIXI.LoaderResource.LOAD_TYPE} [options.loadType=LOAD_TYPE.XHR] - How should this resource
     *      be loaded?
     * @param {PIXI.LoaderResource.XHR_RESPONSE_TYPE} [options.xhrType=XHR_RESPONSE_TYPE.DEFAULT] - How
     *      should the data being loaded be interpreted when using XHR?
     * @param {PIXI.LoaderResource.IMetadata} [options.metadata] - Extra configuration for middleware
     *      and the Resource object.
     */function t(e,r,i){if(/**
         * The `dequeue` method that will be used a storage place for the async queue dequeue method
         * used privately by the loader.
         * @private
         * @member {Function}
         */this._dequeue=s6,/**
         * Used a storage place for the on load binding used privately by the loader.
         * @private
         * @member {Function}
         */this._onLoadBinding=null,/**
         * The timer for element loads to check if they timeout.
         * @private
         */this._elementTimer=0,/**
         * The `complete` function bound to this resource's context.
         * @private
         * @type {Function}
         */this._boundComplete=null,/**
         * The `_onError` function bound to this resource's context.
         * @private
         * @type {Function}
         */this._boundOnError=null,/**
         * The `_onProgress` function bound to this resource's context.
         * @private
         * @type {Function}
         */this._boundOnProgress=null,/**
         * The `_onTimeout` function bound to this resource's context.
         * @private
         * @type {Function}
         */this._boundOnTimeout=null,this._boundXhrOnError=null,this._boundXhrOnTimeout=null,this._boundXhrOnAbort=null,this._boundXhrOnLoad=null,"string"!=typeof e||"string"!=typeof r)throw Error("Both name and url are required for constructing a resource.");i=i||{},this._flags=0,// set data url flag, needs to be set early for some _determineX checks to work.
this._setFlag(t.STATUS_FLAGS.DATA_URL,0===r.indexOf("data:")),this.name=e,this.url=r,this.extension=this._getExtension(),this.data=null,this.crossOrigin=!0===i.crossOrigin?"anonymous":i.crossOrigin,this.timeout=i.timeout||0,this.loadType=i.loadType||this._determineLoadType(),// The type used to load the resource via XHR. If unset, determined automatically.
this.xhrType=i.xhrType,// Extra info for middleware, and controlling specifics about how the resource loads.
// Note that if you pass in a `loadElement`, the Resource class takes ownership of it.
// Meaning it will modify it as it sees fit.
this.metadata=i.metadata||{},// The error that occurred while loading (if any).
this.error=null,// The XHR object that was used to load this resource. This is only set
// when `loadType` is `LoaderResource.LOAD_TYPE.XHR`.
this.xhr=null,// The child resources this resource owns.
this.children=[],// The resource type.
this.type=t.TYPE.UNKNOWN,// The progress chunk owned by this resource.
this.progressChunk=0,// The `dequeue` method that will be used a storage place for the async queue dequeue method
// used privately by the loader.
this._dequeue=s6,// Used a storage place for the on load binding used privately by the loader.
this._onLoadBinding=null,// The timer for element loads to check if they timeout.
this._elementTimer=0,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundOnTimeout=this._onTimeout.bind(this),// xhr callbacks
this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnTimeout=this._xhrOnTimeout.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),// Dispatched when the resource beings to load.
this.onStart=new s3,// Dispatched each time progress of this resource load updates.
// Not all resources types and loader systems can support this event
// so sometimes it may not be available. If the resource
// is being loaded on a modern browser, using XHR, and the remote server
// properly sets Content-Length headers, then this will be available.
this.onProgress=new s3,// Dispatched once this resource has loaded, if there was an error it will
// be in the `error` property.
this.onComplete=new s3,// Dispatched after this resource has had all the *after* middleware run on it.
this.onAfterMiddleware=new s3}return(/**
     * Sets the load type to be used for a specific extension.
     * @static
     * @param {string} extname - The extension to set the type for, e.g. "png" or "fnt"
     * @param {PIXI.LoaderResource.LOAD_TYPE} loadType - The load type to set it to.
     */t.setExtensionLoadType=function(e,r){s5(t._loadTypeMap,e,r)},/**
     * Sets the load type to be used for a specific extension.
     * @static
     * @param {string} extname - The extension to set the type for, e.g. "png" or "fnt"
     * @param {PIXI.LoaderResource.XHR_RESPONSE_TYPE} xhrType - The xhr type to set it to.
     */t.setExtensionXhrType=function(e,r){s5(t._xhrTypeMap,e,r)},Object.defineProperty(t.prototype,"isDataUrl",{/**
         * When the resource starts to load.
         * @memberof PIXI.LoaderResource
         * @callback OnStartSignal
         * @param {PIXI.Resource} resource - The resource that the event happened on.
         *//**
         * When the resource reports loading progress.
         * @memberof PIXI.LoaderResource
         * @callback OnProgressSignal
         * @param {PIXI.Resource} resource - The resource that the event happened on.
         * @param {number} percentage - The progress of the load in the range [0, 1].
         *//**
         * When the resource finishes loading.
         * @memberof PIXI.LoaderResource
         * @callback OnCompleteSignal
         * @param {PIXI.Resource} resource - The resource that the event happened on.
         *//**
         * @memberof PIXI.LoaderResource
         * @typedef {object} IMetadata
         * @property {HTMLImageElement|HTMLAudioElement|HTMLVideoElement} [loadElement=null] - The
         *      element to use for loading, instead of creating one.
         * @property {boolean} [skipSource=false] - Skips adding source(s) to the load element. This
         *      is useful if you want to pass in a `loadElement` that you already added load sources to.
         * @property {string|string[]} [mimeType] - The mime type to use for the source element
         *      of a video/audio elment. If the urls are an array, you can pass this as an array as well
         *      where each index is the mime type to use for the corresponding url index.
         *//**
         * Stores whether or not this url is a data url.
         * @readonly
         * @member {boolean}
         */get:function(){return this._hasFlag(t.STATUS_FLAGS.DATA_URL)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isComplete",{/**
         * Describes if this resource has finished loading. Is true when the resource has completely
         * loaded.
         * @readonly
         * @member {boolean}
         */get:function(){return this._hasFlag(t.STATUS_FLAGS.COMPLETE)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isLoading",{/**
         * Describes if this resource is currently loading. Is true when the resource starts loading,
         * and is false again when complete.
         * @readonly
         * @member {boolean}
         */get:function(){return this._hasFlag(t.STATUS_FLAGS.LOADING)},enumerable:!1,configurable:!0}),/** Marks the resource as complete. */t.prototype.complete=function(){this._clearEvents(),this._finish()},/**
     * Aborts the loading of this resource, with an optional message.
     * @param {string} message - The message to use for the error
     */t.prototype.abort=function(e){// abort can be called multiple times, ignore subsequent calls.
if(!this.error){// abort the actual loading
if(// store error
this.error=Error(e),// clear events before calling aborts
this._clearEvents(),this.xhr)this.xhr.abort();else if(this.xdr)this.xdr.abort();else if(this.data){// single source
if(this.data.src)this.data.src=t.EMPTY_GIF;else for(;this.data.firstChild;)this.data.removeChild(this.data.firstChild)}// done now.
this._finish()}},/**
     * Kicks off loading of this resource. This method is asynchronous.
     * @param {PIXI.LoaderResource.OnCompleteSignal} [cb] - Optional callback to call once the resource is loaded.
     */t.prototype.load=function(e){var r=this;if(!this.isLoading){if(this.isComplete){e&&setTimeout(function(){return e(r)},1);return}switch(e&&this.onComplete.once(e),this._setFlag(t.STATUS_FLAGS.LOADING,!0),this.onStart.dispatch(this),(!1===this.crossOrigin||"string"!=typeof this.crossOrigin)&&(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case t.LOAD_TYPE.IMAGE:this.type=t.TYPE.IMAGE,this._loadElement("image");break;case t.LOAD_TYPE.AUDIO:this.type=t.TYPE.AUDIO,this._loadSourceElement("audio");break;case t.LOAD_TYPE.VIDEO:this.type=t.TYPE.VIDEO,this._loadSourceElement("video");break;case t.LOAD_TYPE.XHR:/* falls through */default:void 0===ty&&(ty=!!(globalThis.XDomainRequest&&!("withCredentials"in new XMLHttpRequest))),ty&&this.crossOrigin?this._loadXdr():this._loadXhr()}}},/**
     * Checks if the flag is set.
     * @param flag - The flag to check.
     * @returns True if the flag is set.
     */t.prototype._hasFlag=function(t){return(this._flags&t)!=0},/**
     * (Un)Sets the flag.
     * @param flag - The flag to (un)set.
     * @param value - Whether to set or (un)set the flag.
     */t.prototype._setFlag=function(t,e){this._flags=e?this._flags|t:this._flags&~t},/** Clears all the events from the underlying loading source. */t.prototype._clearEvents=function(){clearTimeout(this._elementTimer),this.data&&this.data.removeEventListener&&(this.data.removeEventListener("error",this._boundOnError,!1),this.data.removeEventListener("load",this._boundComplete,!1),this.data.removeEventListener("progress",this._boundOnProgress,!1),this.data.removeEventListener("canplaythrough",this._boundComplete,!1)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener("error",this._boundXhrOnError,!1),this.xhr.removeEventListener("timeout",this._boundXhrOnTimeout,!1),this.xhr.removeEventListener("abort",this._boundXhrOnAbort,!1),this.xhr.removeEventListener("progress",this._boundOnProgress,!1),this.xhr.removeEventListener("load",this._boundXhrOnLoad,!1)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null))},/** Finalizes the load. */t.prototype._finish=function(){if(this.isComplete)throw Error("Complete called again for an already completed resource.");this._setFlag(t.STATUS_FLAGS.COMPLETE,!0),this._setFlag(t.STATUS_FLAGS.LOADING,!1),this.onComplete.dispatch(this)},/**
     * Loads this resources using an element that has a single source,
     * like an HTMLImageElement.
     * @private
     * @param type - The type of element to use.
     */t.prototype._loadElement=function(t){this.metadata.loadElement?this.data=this.metadata.loadElement:"image"===t&&void 0!==globalThis.Image?this.data=new Image:this.data=document.createElement(t),this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),this.metadata.skipSource||(this.data.src=this.url),this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},/**
     * Loads this resources using an element that has multiple sources,
     * like an HTMLAudioElement or HTMLVideoElement.
     * @param type - The type of element to use.
     */t.prototype._loadSourceElement=function(t){if(this.metadata.loadElement?this.data=this.metadata.loadElement:"audio"===t&&void 0!==globalThis.Audio?this.data=new Audio:this.data=document.createElement(t),null===this.data){this.abort("Unsupported element: "+t);return}if(this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),!this.metadata.skipSource){// support for CocoonJS Canvas+ runtime, lacks document.createElement('source')
if(navigator.isCocoonJS)this.data.src=Array.isArray(this.url)?this.url[0]:this.url;else if(Array.isArray(this.url))for(var e=this.metadata.mimeType,r=0;r<this.url.length;++r)this.data.appendChild(this._createSource(t,this.url[r],Array.isArray(e)?e[r]:e));else{var e=this.metadata.mimeType;this.data.appendChild(this._createSource(t,this.url,Array.isArray(e)?e[0]:e))}}this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete,!1),this.data.load(),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},/** Loads this resources using an XMLHttpRequest. */t.prototype._loadXhr=function(){"string"!=typeof this.xhrType&&(this.xhrType=this._determineXhrType());var e=this.xhr=new XMLHttpRequest;"use-credentials"===this.crossOrigin&&(e.withCredentials=!0),// set the request type and url
e.open("GET",this.url,!0),e.timeout=this.timeout,this.xhrType===t.XHR_RESPONSE_TYPE.JSON||this.xhrType===t.XHR_RESPONSE_TYPE.DOCUMENT?e.responseType=t.XHR_RESPONSE_TYPE.TEXT:e.responseType=this.xhrType,e.addEventListener("error",this._boundXhrOnError,!1),e.addEventListener("timeout",this._boundXhrOnTimeout,!1),e.addEventListener("abort",this._boundXhrOnAbort,!1),e.addEventListener("progress",this._boundOnProgress,!1),e.addEventListener("load",this._boundXhrOnLoad,!1),e.send()},/** Loads this resources using an XDomainRequest. This is here because we need to support IE9 (gross). */t.prototype._loadXdr=function(){"string"!=typeof this.xhrType&&(this.xhrType=this._determineXhrType());var t=this.xhr=new globalThis.XDomainRequest;// eslint-disable-line no-undef
// XDomainRequest has a few quirks. Occasionally it will abort requests
// A way to avoid this is to make sure ALL callbacks are set even if not used
// More info here: http://stackoverflow.com/questions/15786966/xdomainrequest-aborts-post-on-ie-9
t.timeout=this.timeout||5e3,t.onerror=this._boundXhrOnError,t.ontimeout=this._boundXhrOnTimeout,t.onprogress=this._boundOnProgress,t.onload=this._boundXhrOnLoad,t.open("GET",this.url,!0),// Note: The xdr.send() call is wrapped in a timeout to prevent an
// issue with the interface where some requests are lost if multiple
// XDomainRequests are being sent at the same time.
// Some info here: https://github.com/photonstorm/phaser/issues/1248
setTimeout(function(){return t.send()},1)},/**
     * Creates a source used in loading via an element.
     * @param type - The element type (video or audio).
     * @param url - The source URL to load from.
     * @param [mime] - The mime type of the video
     * @returns The source element.
     */t.prototype._createSource=function(t,e,r){r||(r=t+"/"+this._getExtension(e));var i=document.createElement("source");return i.src=e,i.type=r,i},/**
     * Called if a load errors out.
     * @param event - The error event from the element that emits it.
     */t.prototype._onError=function(t){this.abort("Failed to load element using: "+t.target.nodeName)},/**
     * Called if a load progress event fires for an element or xhr/xdr.
     * @param event - Progress event.
     */t.prototype._onProgress=function(t){t&&t.lengthComputable&&this.onProgress.dispatch(this,t.loaded/t.total)},/** Called if a timeout event fires for an element. */t.prototype._onTimeout=function(){this.abort("Load timed out.")},/** Called if an error event fires for xhr/xdr. */t.prototype._xhrOnError=function(){var t=this.xhr;this.abort(s9(t)+" Request failed. Status: "+t.status+', text: "'+t.statusText+'"')},/** Called if an error event fires for xhr/xdr. */t.prototype._xhrOnTimeout=function(){var t=this.xhr;this.abort(s9(t)+" Request timed out.")},/** Called if an abort event fires for xhr/xdr. */t.prototype._xhrOnAbort=function(){var t=this.xhr;this.abort(s9(t)+" Request was aborted by the user.")},/** Called when data successfully loads from an xhr/xdr request. */t.prototype._xhrOnLoad=function(){var e=this.xhr,r="",i=void 0===e.status?200:e.status;if((""===e.responseType||"text"===e.responseType||void 0===e.responseType)&&(r=e.responseText),0===i&&(r.length>0||e.responseType===t.XHR_RESPONSE_TYPE.BUFFER)?i=200:1223===i&&(i=204),(i/100|0)==2){// if text, just return it
if(this.xhrType===t.XHR_RESPONSE_TYPE.TEXT)this.data=r,this.type=t.TYPE.TEXT;else if(this.xhrType===t.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(r),this.type=t.TYPE.JSON}catch(t){this.abort("Error trying to parse loaded json: "+t);return}else if(this.xhrType===t.XHR_RESPONSE_TYPE.DOCUMENT)try{if(globalThis.DOMParser){var n=new DOMParser;this.data=n.parseFromString(r,"text/xml")}else{var o=document.createElement("div");o.innerHTML=r,this.data=o}this.type=t.TYPE.XML}catch(t){this.abort("Error trying to parse loaded xml: "+t);return}else this.data=e.response||r}else{this.abort("["+e.status+"] "+e.statusText+": "+e.responseURL);return}this.complete()},/**
     * Sets the `crossOrigin` property for this resource based on if the url
     * for this resource is cross-origin. If crossOrigin was manually set, this
     * function does nothing.
     * @private
     * @param url - The url to test.
     * @param [loc=globalThis.location] - The location object to test against.
     * @returns The crossOrigin value to use (or empty string for none).
     */// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
t.prototype._determineCrossOrigin=function(t,e){// data: and javascript: urls are considered same-origin
if(0===t.indexOf("data:"))return"";// A sandboxed iframe without the 'allow-same-origin' attribute will have a special
// origin designed not to match globalThis.location.origin, and will always require
// crossOrigin requests regardless of whether the location matches.
if(globalThis.origin!==globalThis.location.origin)return"anonymous";// default is globalThis.location
e=e||globalThis.location,s8||(s8=document.createElement("a")),// let the browser determine the full href for the url of this resource and then
// parse with the node url lib, we can't use the properties of the anchor element
// because they don't work in IE9 :(
s8.href=t;var r=s4(s8.href,{strictMode:!0}),i=!r.port&&""===e.port||r.port===e.port,n=r.protocol?r.protocol+":":"";return(// if cross origin
r.host===e.hostname&&i&&n===e.protocol?"":"anonymous")},/**
     * Determines the responseType of an XHR request based on the extension of the
     * resource being loaded.
     * @private
     * @returns {PIXI.LoaderResource.XHR_RESPONSE_TYPE} The responseType to use.
     */t.prototype._determineXhrType=function(){return t._xhrTypeMap[this.extension]||t.XHR_RESPONSE_TYPE.TEXT},/**
     * Determines the loadType of a resource based on the extension of the
     * resource being loaded.
     * @private
     * @returns {PIXI.LoaderResource.LOAD_TYPE} The loadType to use.
     */t.prototype._determineLoadType=function(){return t._loadTypeMap[this.extension]||t.LOAD_TYPE.XHR},/**
     * Extracts the extension (sans '.') of the file being loaded by the resource.
     * @param [url] - url to parse, `this.url` by default.
     * @returns The extension.
     */t.prototype._getExtension=function(t){void 0===t&&(t=this.url);var e="";if(this.isDataUrl){var r=t.indexOf("/");e=t.substring(r+1,t.indexOf(";",r))}else{var i=t.indexOf("?"),n=t.indexOf("#"),o=Math.min(i>-1?i:t.length,n>-1?n:t.length);e=(t=t.substring(0,o)).substring(t.lastIndexOf(".")+1)}return e.toLowerCase()},/**
     * Determines the mime type of an XHR request based on the responseType of
     * resource being loaded.
     * @param type - The type to get a mime type for.
     * @private
     * @returns The mime type to use.
     */t.prototype._getMimeFromXhrType=function(e){switch(e){case t.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case t.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case t.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case t.XHR_RESPONSE_TYPE.JSON:return"application/json";case t.XHR_RESPONSE_TYPE.DEFAULT:case t.XHR_RESPONSE_TYPE.TEXT:/* falls through */default:return"text/plain"}},t)}();/**
 * Smaller version of the async library constructs.
 * @ignore
 */function at(){}/** None */(M=(w=s7||(s7={})).STATUS_FLAGS||(w.STATUS_FLAGS={}))[M.NONE=0]="NONE",/** Data URL */M[M.DATA_URL=1]="DATA_URL",/** Complete */M[M.COMPLETE=2]="COMPLETE",/** Loading */M[M.LOADING=4]="LOADING",/** Unknown */(D=w.TYPE||(w.TYPE={}))[D.UNKNOWN=0]="UNKNOWN",/** JSON */D[D.JSON=1]="JSON",/** XML */D[D.XML=2]="XML",/** Image */D[D.IMAGE=3]="IMAGE",/** Audio */D[D.AUDIO=4]="AUDIO",/** Video */D[D.VIDEO=5]="VIDEO",/** Plain text */D[D.TEXT=6]="TEXT",/** Uses XMLHttpRequest to load the resource. */(C=w.LOAD_TYPE||(w.LOAD_TYPE={}))[C.XHR=1]="XHR",/** Uses an `Image` object to load the resource. */C[C.IMAGE=2]="IMAGE",/** Uses an `Audio` object to load the resource. */C[C.AUDIO=3]="AUDIO",/** Uses a `Video` object to load the resource. */C[C.VIDEO=4]="VIDEO",/** string */(F=w.XHR_RESPONSE_TYPE||(w.XHR_RESPONSE_TYPE={})).DEFAULT="text",/** ArrayBuffer */F.BUFFER="arraybuffer",/** Blob */F.BLOB="blob",/** Document */F.DOCUMENT="document",/** Object */F.JSON="json",/** String */F.TEXT="text",w._loadTypeMap={// images
gif:w.LOAD_TYPE.IMAGE,png:w.LOAD_TYPE.IMAGE,bmp:w.LOAD_TYPE.IMAGE,jpg:w.LOAD_TYPE.IMAGE,jpeg:w.LOAD_TYPE.IMAGE,tif:w.LOAD_TYPE.IMAGE,tiff:w.LOAD_TYPE.IMAGE,webp:w.LOAD_TYPE.IMAGE,tga:w.LOAD_TYPE.IMAGE,avif:w.LOAD_TYPE.IMAGE,svg:w.LOAD_TYPE.IMAGE,"svg+xml":w.LOAD_TYPE.IMAGE,// audio
mp3:w.LOAD_TYPE.AUDIO,ogg:w.LOAD_TYPE.AUDIO,wav:w.LOAD_TYPE.AUDIO,// videos
mp4:w.LOAD_TYPE.VIDEO,webm:w.LOAD_TYPE.VIDEO},w._xhrTypeMap={// xml
xhtml:w.XHR_RESPONSE_TYPE.DOCUMENT,html:w.XHR_RESPONSE_TYPE.DOCUMENT,htm:w.XHR_RESPONSE_TYPE.DOCUMENT,xml:w.XHR_RESPONSE_TYPE.DOCUMENT,tmx:w.XHR_RESPONSE_TYPE.DOCUMENT,svg:w.XHR_RESPONSE_TYPE.DOCUMENT,// This was added to handle Tiled Tileset XML, but .tsx is also a TypeScript React Component.
// Since it is way less likely for people to be loading TypeScript files instead of Tiled files,
// this should probably be fine.
tsx:w.XHR_RESPONSE_TYPE.DOCUMENT,// images
gif:w.XHR_RESPONSE_TYPE.BLOB,png:w.XHR_RESPONSE_TYPE.BLOB,bmp:w.XHR_RESPONSE_TYPE.BLOB,jpg:w.XHR_RESPONSE_TYPE.BLOB,jpeg:w.XHR_RESPONSE_TYPE.BLOB,tif:w.XHR_RESPONSE_TYPE.BLOB,tiff:w.XHR_RESPONSE_TYPE.BLOB,webp:w.XHR_RESPONSE_TYPE.BLOB,tga:w.XHR_RESPONSE_TYPE.BLOB,avif:w.XHR_RESPONSE_TYPE.BLOB,// json
json:w.XHR_RESPONSE_TYPE.JSON,// text
text:w.XHR_RESPONSE_TYPE.TEXT,txt:w.XHR_RESPONSE_TYPE.TEXT,// fonts
ttf:w.XHR_RESPONSE_TYPE.BUFFER,otf:w.XHR_RESPONSE_TYPE.BUFFER},// We can't set the `src` attribute to empty string, so on abort we set it to this 1px transparent gif
w.EMPTY_GIF="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";/**
 * @private
 * @memberof PIXI
 */var ae=/**
     * @param data
     * @param callback
     * @private
     */function(t,e){this.data=t,this.callback=e},ar=/** @class */function(){/**
     * @param worker
     * @param concurrency
     * @private
     */function t(t,e){var r=this;if(void 0===e&&(e=1),this.workers=0,this.saturated=at,this.unsaturated=at,this.empty=at,this.drain=at,this.error=at,this.started=!1,this.paused=!1,this._tasks=[],this._insert=function(t,e,i){if(i&&"function"!=typeof i)throw Error("task callback must be a function");// eslint-disable-next-line no-eq-null,eqeqeq
if(r.started=!0,null==t&&r.idle()){// call drain immediately if there are no tasks
setTimeout(function(){return r.drain()},1);return}var n=new ae(t,"function"==typeof i?i:at);e?r._tasks.unshift(n):r._tasks.push(n),setTimeout(r.process,1)},this.process=function(){for(;!r.paused&&r.workers<r.concurrency&&r._tasks.length;){var t=r._tasks.shift();0===r._tasks.length&&r.empty(),r.workers+=1,r.workers===r.concurrency&&r.saturated(),r._worker(t.data,/**
 * Ensures a function is only called once.
 * @ignore
 * @param {Function} fn - The function to wrap.
 * @returns {Function} The wrapping function.
 */function(t){return function(){for(var e=arguments,r=[],i=0;i<arguments.length;i++)r[i]=e[i];if(null===t)throw Error("Callback was already called.");var n=t;t=null,n.apply(this,r)}}(r._next(t)))}},this._worker=t,0===e)throw Error("Concurrency must not be zero");this.concurrency=e,this.buffer=e/4}return(/**
     * @param task
     * @private
     */t.prototype._next=function(t){var e=this;return function(){for(var r=arguments,i=[],n=0;n<arguments.length;n++)i[n]=r[n];e.workers-=1,t.callback.apply(t,i),null!=i[0]&&e.error(i[0],t.data),e.workers<=e.concurrency-e.buffer&&e.unsaturated(),e.idle()&&e.drain(),e.process()}},// That was in object
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
t.prototype.push=function(t,e){this._insert(t,!1,e)},t.prototype.kill=function(){this.workers=0,this.drain=at,this.started=!1,this._tasks=[]},// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
t.prototype.unshift=function(t,e){this._insert(t,!0,e)},t.prototype.length=function(){return this._tasks.length},t.prototype.running=function(){return this.workers},t.prototype.idle=function(){return this._tasks.length+this.workers===0},t.prototype.pause=function(){!0!==this.paused&&(this.paused=!0)},t.prototype.resume=function(){if(!1!==this.paused){this.paused=!1;// Need to call this.process once per concurrent
// worker to preserve full concurrency after pause
for(var t=1;t<=this.concurrency;t++)this.process()}},/**
     * Iterates an array in series.
     * @param {Array.<*>} array - Array to iterate.
     * @param {Function} iterator - Function to call for each element.
     * @param {Function} callback - Function to call when done, or on error.
     * @param {boolean} [deferNext=false] - Break synchronous each loop by calling next with a setTimeout of 1.
     */t.eachSeries=function(t,e,r,i){var n=0,o=t.length;!function s(a){if(a||n===o){r&&r(a);return}i?setTimeout(function(){e(t[n++],s)},1):e(t[n++],s)}()},/**
     * Async queue implementation,
     * @param {Function} worker - The worker function to call for each task.
     * @param {number} concurrency - How many workers to run in parrallel.
     * @returns {*} The async queue object.
     */t.queue=function(e,r){return new t(e,r)},t)}(),ai=/(#[\w-]+)?$/,an=/** @class */function(){/**
     * @param baseUrl - The base url for all resources loaded by this loader.
     * @param concurrency - The number of resources to load concurrently.
     */function t(e,r){var i=this;void 0===e&&(e=""),void 0===r&&(r=10),/** The progress percent of the loader going through the queue. */this.progress=0,/** Loading state of the loader, true if it is currently loading resources. */this.loading=!1,/**
         * A querystring to append to every URL added to the loader.
         *
         * This should be a valid query string *without* the question-mark (`?`). The loader will
         * also *not* escape values for you. Make sure to escape your parameters with
         * [`encodeURIComponent`](https://mdn.io/encodeURIComponent) before assigning this property.
         * @example
         * const loader = new Loader();
         *
         * loader.defaultQueryString = 'user=me&password=secret';
         *
         * // This will request 'image.png?user=me&password=secret'
         * loader.add('image.png').load();
         *
         * loader.reset();
         *
         * // This will request 'image.png?v=1&user=me&password=secret'
         * loader.add('iamge.png?v=1').load();
         */this.defaultQueryString="",/** The middleware to run before loading each resource. */this._beforeMiddleware=[],/** The middleware to run after loading each resource. */this._afterMiddleware=[],/** The tracks the resources we are currently completing parsing for. */this._resourcesParsing=[],/**
         * The `_loadResource` function bound with this object context.
         * @param r - The resource to load
         * @param d - The dequeue function
         */this._boundLoadResource=function(t,e){return i._loadResource(t,e)},/** All the resources for this loader keyed by name. */this.resources={},this.baseUrl=e,this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(t,e){return i._loadResource(t,e)},this._queue=ar.queue(this._boundLoadResource,r),this._queue.pause(),this.resources={},this.onProgress=new s3,this.onError=new s3,this.onLoad=new s3,this.onStart=new s3,this.onComplete=new s3;for(var n=0;n<t._plugins.length;++n){var o=t._plugins[n],s=o.pre,a=o.use;s&&this.pre(s),a&&this.use(a)}this._protected=!1}return(/**
     * Same as add, params have strict order
     * @private
     * @param name - The name of the resource to load.
     * @param url - The url for this resource, relative to the baseUrl of this loader.
     * @param options - The options for the load.
     * @param callback - Function to call when this specific resource completes loading.
     * @returns The loader itself.
     */t.prototype._add=function(t,e,r,i){// if loading already you can only add resources that have a parent.
if(this.loading&&(!r||!r.parentResource))throw Error("Cannot add resources while the loader is running.");// check if resource already exists.
if(this.resources[t])throw Error('Resource named "'+t+'" already exists.');// if actively loading, make sure to adjust progress chunks for that parent and its children
if(// add base url if this isn't an absolute url
e=this._prepareUrl(e),// create the store the resource
this.resources[t]=new s7(t,e,r),"function"==typeof i&&this.resources[t].onAfterMiddleware.once(i),this.loading){for(var n=r.parentResource,o=[],s=0;s<n.children.length;++s)n.children[s].isComplete||o.push(n.children[s]);var a=n.progressChunk*(o.length+1)/(o.length+2);n.children.push(this.resources[t]),n.progressChunk=a;for(var s=0;s<o.length;++s)o[s].progressChunk=a;this.resources[t].progressChunk=a}return(// add the resource to the queue
this._queue.push(this.resources[t]),this)},/* eslint-enable require-jsdoc,valid-jsdoc *//**
     * Sets up a middleware function that will run *before* the
     * resource is loaded.
     * @param fn - The middleware function to register.
     * @returns The loader itself.
     */t.prototype.pre=function(t){return this._beforeMiddleware.push(t),this},/**
     * Sets up a middleware function that will run *after* the
     * resource is loaded.
     * @param fn - The middleware function to register.
     * @returns The loader itself.
     */t.prototype.use=function(t){return this._afterMiddleware.push(t),this},/**
     * Resets the queue of the loader to prepare for a new load.
     * @returns The loader itself.
     */t.prototype.reset=function(){// abort all resource loads
for(var t in this.progress=0,this.loading=!1,this._queue.kill(),this._queue.pause(),this.resources){var e=this.resources[t];e._onLoadBinding&&e._onLoadBinding.detach(),e.isLoading&&e.abort("loader reset")}return this.resources={},this},/**
     * Starts loading the queued resources.
     * @param cb - Optional callback that will be bound to the `complete` event.
     * @returns The loader itself.
     */t.prototype.load=function(t){// if the queue has already started we are done here
if(np("6.5.0","@pixi/loaders is being replaced with @pixi/assets in the next major release."),"function"==typeof t&&this.onComplete.once(t),this.loading)return this;if(this._queue.idle())this._onStart(),this._onComplete();else{for(var e=100/this._queue._tasks.length,r=0;r<this._queue._tasks.length;++r)this._queue._tasks[r].data.progressChunk=e;// notify we are starting
this._onStart(),// start loading
this._queue.resume()}return this},Object.defineProperty(t.prototype,"concurrency",{/**
         * The number of resources to load concurrently.
         * @default 10
         */get:function(){return this._queue.concurrency},set:function(t){this._queue.concurrency=t},enumerable:!1,configurable:!0}),/**
     * Prepares a url for usage based on the configuration of this object
     * @param url - The url to prepare.
     * @returns The prepared url.
     */t.prototype._prepareUrl=function(t){var e,r=s4(t,{strictMode:!0});// if we need to add a default querystring, there is a bit more work
if(e=r.protocol||!r.path||0===t.indexOf("//")?t:this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length-1&&"/"!==t.charAt(0)?this.baseUrl+"/"+t:this.baseUrl+t,this.defaultQueryString){var i=ai.exec(e)[0];-1!==(e=e.slice(0,e.length-i.length)).indexOf("?")?e+="&"+this.defaultQueryString:e+="?"+this.defaultQueryString,e+=i}return e},/**
     * Loads a single resource.
     * @param resource - The resource to load.
     * @param dequeue - The function to call when we need to dequeue this item.
     */t.prototype._loadResource=function(t,e){var r=this;t._dequeue=e,// run before middleware
ar.eachSeries(this._beforeMiddleware,function(e,i){e.call(r,t,function(){// if the before middleware marks the resource as complete,
// break and don't process any more before middleware
i(t.isComplete?{}:null)})},function(){t.isComplete?r._onLoad(t):(t._onLoadBinding=t.onComplete.once(r._onLoad,r),t.load())},!0)},/** Called once loading has started. */t.prototype._onStart=function(){this.progress=0,this.loading=!0,this.onStart.dispatch(this)},/** Called once each resource has loaded. */t.prototype._onComplete=function(){this.progress=100,this.loading=!1,this.onComplete.dispatch(this,this.resources)},/**
     * Called each time a resources is loaded.
     * @param resource - The resource that was loaded
     */t.prototype._onLoad=function(t){var e=this;t._onLoadBinding=null,// remove this resource from the async queue, and add it to our list of resources that are being parsed
this._resourcesParsing.push(t),t._dequeue(),// run all the after middleware for this resource
ar.eachSeries(this._afterMiddleware,function(r,i){r.call(e,t,i)},function(){t.onAfterMiddleware.dispatch(t),e.progress=Math.min(100,e.progress+t.progressChunk),e.onProgress.dispatch(e,t),t.error?e.onError.dispatch(t.error,e,t):e.onLoad.dispatch(e,t),e._resourcesParsing.splice(e._resourcesParsing.indexOf(t),1),e._queue.idle()&&0===e._resourcesParsing.length&&e._onComplete()},!0)},/** Destroy the loader, removes references. */t.prototype.destroy=function(){this._protected||this.reset()},Object.defineProperty(t,"shared",{/** A premade instance of the loader that can be used to load resources. */get:function(){var e=t._shared;return e||((e=new t)._protected=!0,t._shared=e),e},enumerable:!1,configurable:!0}),/**
     * Use the {@link PIXI.extensions.add} API to register plugins.
     * @deprecated since 6.5.0
     * @param plugin - The plugin to add
     * @returns Reference to PIXI.Loader for chaining
     */t.registerPlugin=function(e){return np("6.5.0","Loader.registerPlugin() is deprecated, use extensions.add() instead."),nK.add({type:tf.Loader,ref:e}),t},t._plugins=[],t)}();nK.handleByList(tf.Loader,an._plugins),an.prototype.add=function(t,e,r,i){// special case of an array of objects or urls
if(Array.isArray(t)){for(var n=0;n<t.length;++n)this.add(t[n]);return this}// now that we shifted make sure we have a proper url.
if("object"==typeof t&&(r=t,i=e||r.callback||r.onComplete,e=r.url,t=r.name||r.key||r.url),"string"!=typeof e&&(i=r,r=e,e=t),"string"!=typeof e)throw Error("No url passed to add resource to loader.");return"function"==typeof r&&(i=r,r=null),this._add(t,e,r,i)};/**
 * Application plugin for supporting loader option. Installing the LoaderPlugin
 * is not necessary if using **pixi.js** or **pixi.js-legacy**.
 * @example
 * import {AppLoaderPlugin} from '@pixi/loaders';
 * import {extensions} from '@pixi/core';
 * extensions.add(AppLoaderPlugin);
 * @memberof PIXI
 */var ao=/** @class */function(){function t(){}return(/**
     * Called on application constructor
     * @param options
     * @private
     */t.init=function(t){t=Object.assign({sharedLoader:!1},t),this.loader=t.sharedLoader?an.shared:new an},/**
     * Called when application destroyed
     * @private
     */t.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},/** @ignore */t.extension=tf.Application,t)}(),as=/** @class */function(){function t(){}return(/** Handle SVG elements a text, render with SVGResource. */t.add=function(){s7.setExtensionLoadType("svg",s7.LOAD_TYPE.XHR),s7.setExtensionXhrType("svg",s7.XHR_RESPONSE_TYPE.TEXT)},/**
     * Called after a resource is loaded.
     * @see PIXI.Loader.loaderMiddleware
     * @param resource
     * @param {Function} next
     */t.use=function(t,e){// create a new texture if the data is an Image object
if(t.data&&(t.type===s7.TYPE.IMAGE||"svg"===t.extension)){var r=t.data,i=t.url,n=t.name,o=t.metadata;o_.fromLoader(r,i,n,o).then(function(r){t.texture=r,e()})// TODO: handle errors in Texture.fromLoader
// so we can pass them to the Loader
.catch(e)}else e()},/** @ignore */t.extension=tf.Loader,t)}();/**
 * A middleware for transforming XHR loaded Blobs into more useful objects
 * @ignore
 * @function parsing
 * @example
 * import { Loader, middleware } from 'resource-loader';
 * const loader = new Loader();
 * loader.use(middleware.parsing);
 * @param resource - Current Resource
 * @param next - Callback when complete
 */function aa(t,e){if(!t.data){e();return}// if this was an XHR load of a blob
if(t.xhr&&t.xhrType===s7.XHR_RESPONSE_TYPE.BLOB){// if there is no blob support we probably got a binary string back
if(self.Blob&&"string"!=typeof t.data){if(0===t.data.type.indexOf("image")){var r=globalThis.URL||globalThis.webkitURL,i=r.createObjectURL(t.data);t.blob=t.data,t.data=new Image,t.data.src=i,t.type=s7.TYPE.IMAGE,// cleanup the no longer used blob after the image loads
// TODO: Is this correct? Will the image be invalid after revoking?
t.data.onload=function(){r.revokeObjectURL(i),t.data.onload=null,e()};// next will be called on load.
return}}else{var n=t.xhr.getResponseHeader("content-type");// this is an image, convert the binary string into a data url
if(n&&0===n.indexOf("image")){t.data=new Image,t.data.src="data:"+n+";base64,"+/**
 * Encodes binary into base64.
 * @function encodeBinary
 * @param {string} input - The input data to encode.
 * @returns {string} The encoded base64 string
 */function(t){for(var e="",r=0;r<t.length;){for(var i=[0,0,0],n=[0,0,0,0],o=0;o<i.length;++o)r<t.length?// https://developer.mozilla.org/En/Using_XMLHttpRequest#Handling_binary_data
i[o]=255&t.charCodeAt(r++):i[o]=0;switch(// Get each encoded character, 6 bits at a time
// index 1: first 6 bits
n[0]=i[0]>>2,// index 2: second 6 bits (2 least significant bits from input byte 1 + 4 most significant bits from byte 2)
n[1]=(3&i[0])<<4|i[1]>>4,// index 3: third 6 bits (4 least significant bits from input byte 2 + 2 most significant bits from byte 3)
n[2]=(15&i[1])<<2|i[2]>>6,// index 3: forth 6 bits (6 least significant bits from input byte 3)
n[3]=63&i[2],r-(t.length-1)){case 2:// Set last 2 characters to padding char
n[3]=64,n[2]=64;break;case 1:// Set last character to padding char
n[3]=64}// Now we will grab each appropriate character out of our keystring
// based on our index array and append it to the output string
for(var o=0;o<n.length;++o)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n[o])}return e}(t.xhr.responseText),t.type=s7.TYPE.IMAGE,// wait until the image loads and then callback
t.data.onload=function(){t.data.onload=null,e()};// next will be called on load
return}}}e()}/**
 * Parse any blob into more usable objects (e.g. Image).
 * @memberof PIXI
 */var ah=/** @class */function(){function t(){}return(/** @ignore */t.extension=tf.Loader,t.use=aa,t)}();nK.add(as,ah),// WEBGL_compressed_texture_s3tc
(N=tm||(tm={}))[N.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",N[N.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",N[N.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",N[N.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",// WEBGL_compressed_texture_s3tc_srgb
N[N.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",N[N.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",N[N.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",N[N.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",// WEBGL_compressed_texture_etc
N[N.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",N[N.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",N[N.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",N[N.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",N[N.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",N[N.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",N[N.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",N[N.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",N[N.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",N[N.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",// WEBGL_compressed_texture_pvrtc
N[N.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",N[N.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",N[N.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",N[N.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",// WEBGL_compressed_texture_etc1
N[N.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",// WEBGL_compressed_texture_atc
N[N.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",N[N.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",N[N.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL",// WEBGL_compressed_texture_astc
/* eslint-disable-next-line camelcase */N[N.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KHR";/**
 * Maps the compressed texture formats in {@link PIXI.INTERNAL_FORMATS} to the number of bytes taken by
 * each texel.
 * @memberof PIXI
 * @static
 * @ignore
 */var au=((tv={})[tm.COMPRESSED_RGB_S3TC_DXT1_EXT]=.5,tv[tm.COMPRESSED_RGBA_S3TC_DXT1_EXT]=.5,tv[tm.COMPRESSED_RGBA_S3TC_DXT3_EXT]=1,tv[tm.COMPRESSED_RGBA_S3TC_DXT5_EXT]=1,tv[tm.COMPRESSED_SRGB_S3TC_DXT1_EXT]=.5,tv[tm.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT]=.5,tv[tm.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT]=1,tv[tm.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT]=1,tv[tm.COMPRESSED_R11_EAC]=.5,tv[tm.COMPRESSED_SIGNED_R11_EAC]=.5,tv[tm.COMPRESSED_RG11_EAC]=1,tv[tm.COMPRESSED_SIGNED_RG11_EAC]=1,tv[tm.COMPRESSED_RGB8_ETC2]=.5,tv[tm.COMPRESSED_RGBA8_ETC2_EAC]=1,tv[tm.COMPRESSED_SRGB8_ETC2]=.5,tv[tm.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]=1,tv[tm.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,tv[tm.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,tv[tm.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]=.5,tv[tm.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]=.5,tv[tm.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]=.25,tv[tm.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]=.25,tv[tm.COMPRESSED_RGB_ETC1_WEBGL]=.5,// WEBGL_compressed_texture_atc
tv[tm.COMPRESSED_RGB_ATC_WEBGL]=.5,tv[tm.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL]=1,tv[tm.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL]=1,// WEBGL_compressed_texture_astc
/* eslint-disable-next-line camelcase */tv[tm.COMPRESSED_RGBA_ASTC_4x4_KHR]=1,tv),al=function(t,e){return(al=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function ac(t,e){function r(){this.constructor=t}al(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}/**
 * Resource for compressed texture formats, as follows: S3TC/DXTn (& their sRGB formats), ATC, ASTC, ETC 1/2, PVRTC.
 *
 * Compressed textures improve performance when rendering is texture-bound. The texture data stays compressed in
 * graphics memory, increasing memory locality and speeding up texture fetches. These formats can also be used to store
 * more detail in the same amount of memory.
 *
 * For most developers, container file formats are a better abstraction instead of directly handling raw texture
 * data. PixiJS provides native support for the following texture file formats (via {@link PIXI.Loader}):
 *
 * **.dds** - the DirectDraw Surface file format stores DXTn (DXT-1,3,5) data. See {@link PIXI.DDSLoader}
 * **.ktx** - the Khronos Texture Container file format supports storing all the supported WebGL compression formats.
 *  See {@link PIXI.KTXLoader}.
 * **.basis** - the BASIS supercompressed file format stores texture data in an internal format that is transcoded
 *  to the compression format supported on the device at _runtime_. It also supports transcoding into a uncompressed
 *  format as a fallback; you must install the `@pixi/basis-loader`, `@pixi/basis-transcoder` packages separately to
 *  use these files. See {@link PIXI.BasisLoader}.
 *
 * The loaders for the aforementioned formats use `CompressedTextureResource` internally. It is strongly suggested that
 * they be used instead.
 *
 * ## Working directly with CompressedTextureResource
 *
 * Since `CompressedTextureResource` inherits `BlobResource`, you can provide it a URL pointing to a file containing
 * the raw texture data (with no file headers!):
 *
 * ```js
 * // The resource backing the texture data for your textures.
 * // NOTE: You can also provide a ArrayBufferView instead of a URL. This is used when loading data from a container file
 * //   format such as KTX, DDS, or BASIS.
 * const compressedResource = new PIXI.CompressedTextureResource("bunny.dxt5", {
 *   format: PIXI.INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT,
 *   width: 256,
 *   height: 256
 * });
 *
 * // You can create a base-texture to the cache, so that future `Texture`s can be created using the `Texture.from` API.
 * const baseTexture = new PIXI.BaseTexture(compressedResource, { pmaMode: PIXI.ALPHA_MODES.NPM });
 *
 * // Create a Texture to add to the TextureCache
 * const texture = new PIXI.Texture(baseTexture);
 *
 * // Add baseTexture & texture to the global texture cache
 * PIXI.BaseTexture.addToCache(baseTexture, "bunny.dxt5");
 * PIXI.Texture.addToCache(texture, "bunny.dxt5");
 * ```
 * @memberof PIXI
 */var af=/** @class */function(t){/**
     * @param source - the buffer/URL holding the compressed texture data
     * @param options
     * @param {PIXI.INTERNAL_FORMATS} options.format - the compression format
     * @param {number} options.width - the image width in pixels.
     * @param {number} options.height - the image height in pixels.
     * @param {number} [options.level=1] - the mipmap levels stored in the compressed texture, including level 0.
     * @param {number} [options.levelBuffers] - the buffers for each mipmap level. `CompressedTextureResource` can allows you
     *      to pass `null` for `source`, for cases where each level is stored in non-contiguous memory.
     */function e(r,i){var n=t.call(this,r,i)||this;return n.format=i.format,n.levels=i.levels||1,n._width=i.width,n._height=i.height,n._extension=e._formatToExtension(n.format),(i.levelBuffers||n.buffer)&&(n._levelBuffers=i.levelBuffers||e._createLevelBuffers(r instanceof Uint8Array?r:n.buffer.uint8View,n.format,n.levels,4,4,n.width,n.height)),n}return ac(e,t),/**
     * @override
     * @param renderer - A reference to the current renderer
     * @param _texture - the texture
     * @param _glTexture - texture instance for this webgl context
     */e.prototype.upload=function(t,e,r){var i=t.gl;if(!t.context.extensions[this._extension])throw Error(this._extension+" textures are not supported on the current machine");if(!this._levelBuffers)return!1;for(var n=0,o=this.levels;n<o;n++){var s=this._levelBuffers[n],a=s.levelID,h=s.levelWidth,u=s.levelHeight,l=s.levelBuffer;i.compressedTexImage2D(i.TEXTURE_2D,a,this.format,h,u,0,l)}return!0},/** @protected */e.prototype.onBlobLoaded=function(){this._levelBuffers=e._createLevelBuffers(this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height)},/**
     * Returns the key (to ContextSystem#extensions) for the WebGL extension supporting the compression format
     * @private
     * @param format - the compression format to get the extension for.
     */e._formatToExtension=function(t){if(t>=33776&&t<=33779)return"s3tc";if(t>=37488&&t<=37497)return"etc";if(t>=35840&&t<=35843)return"pvrtc";if(t>=36196)return"etc1";if(t>=35986&&t<=34798)return"atc";throw Error("Invalid (compressed) texture format given!")},/**
     * Pre-creates buffer views for each mipmap level
     * @private
     * @param buffer -
     * @param format - compression formats
     * @param levels - mipmap levels
     * @param blockWidth -
     * @param blockHeight -
     * @param imageWidth - width of the image in pixels
     * @param imageHeight - height of the image in pixels
     */e._createLevelBuffers=function(t,e,r,i,n,o,s){for(var a=Array(r),h=t.byteOffset,u=o,l=s,c=u+i-1&~(i-1),f=l+n-1&~(n-1),p=c*f*au[e],d=0;d<r;d++)a[d]={levelID:d,levelWidth:r>1?u:c,levelHeight:r>1?l:f,levelBuffer:new Uint8Array(t.buffer,h,p)},h+=p,l=l>>1||1,p=(c=// Calculate levelBuffer dimensions for next iteration
(u=u>>1||1)+i-1&~(i-1))*(f=l+n-1&~(n-1))*au[e];return a},e}(/** @class */function(t){/**
     * @param {string} source - the URL of the texture file
     * @param {PIXI.IBlobOptions} options
     * @param {boolean}[options.autoLoad] - whether to fetch the data immediately;
     *  you can fetch it later via {@link BlobResource#load}
     * @param {boolean}[options.width] - the width in pixels.
     * @param {boolean}[options.height] - the height in pixels.
     */function e(e,r){void 0===r&&(r={width:1,height:1,autoLoad:!0});var i,n,o=this;return"string"==typeof e?(i=e,n=new Uint8Array):(i=null,n=e),/**
         * The URL of the texture file
         * @member {string}
         */(o=t.call(this,n,r)||this).origin=i,/**
         * The viewable buffer on the data
         * @member {ViewableBuffer}
         */// HINT: BlobResource allows "null" sources, assuming the child class provides an alternative
o.buffer=n?new sC(n):null,o.origin&&!1!==r.autoLoad&&o.load(),n&&n.length&&(o.loaded=!0,o.onBlobLoaded(o.buffer.rawBinaryData)),o}return ac(e,t),e.prototype.onBlobLoaded=function(t){// TODO: Override this method
},/** Loads the blob */e.prototype.load=function(){var t,e,r,i;return t=this,e=void 0,r=Promise,i=function(){var t;return function(t,e){var r,i,n,o,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw TypeError("Generator is already executing.");for(;s;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){s.label=o[1];break}if(6===o[0]&&s.label<n[1]){s.label=n[1],n=o;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(o);break}n[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}(this,function(e){switch(e.label){case 0:return[4/*yield*/,fetch(this.origin)];case 1:return[4/*yield*/,e.sent().blob()];case 2:return[4/*yield*/,e.sent().arrayBuffer()];case 3:return t=e.sent(),this.data=new Uint32Array(t),this.buffer=new sC(t),this.loaded=!0,this.onBlobLoaded(t),this.update(),[2/*return*/,this]}})},new(r||(r=Promise))(function(n,o){function s(t){try{h(i.next(t))}catch(t){o(t)}}function a(t){try{h(i.throw(t))}catch(t){o(t)}}function h(t){var e;t.done?n(t.value):((e=t.value)instanceof r?e:new r(function(t){t(e)})).then(s,a)}h((i=i.apply(t,e||[])).next())})},e}(n6)),ap=/** @class */function(){function t(){}return(/**
     * Called after a compressed-textures manifest is loaded.
     *
     * This will then load the correct compression format for the device. Your manifest should adhere
     * to the following schema:
     *
     * ```js
     * import { INTERNAL_FORMATS } from '@pixi/constants';
     *
     * type CompressedTextureManifest = {
     *  textures: Array<{ src: string, format?: keyof INTERNAL_FORMATS}>,
     *  cacheID: string;
     * };
     * ```
     *
     * This is an example of a .json manifest file
     *
     * ```json
     * {
     *   "cacheID":"asset",
     *   "textures":[
     *     { "src":"asset.fallback.png" },
     *     { "format":"COMPRESSED_RGBA_S3TC_DXT5_EXT", "src":"asset.s3tc.ktx" },
     *     { "format":"COMPRESSED_RGBA8_ETC2_EAC", "src":"asset.etc.ktx" },
     *     { "format":"RGBA_PVRTC_4BPPV1_IMG", "src":"asset.pvrtc.ktx" }
     *   ]
     * }
     * ```
     */t.use=function(e,r){var i=e.data;if(e.type===s7.TYPE.JSON&&i&&i.cacheID&&i.textures){// Search for an extension that holds one the formats
for(var n=i.textures,o=void 0,s=void 0,a=0,h=n.length;a<h;a++){var u=n[a],l=u.src,c=u.format;if(c||(s=l),t.textureFormats[c]){o=l;break}}// Make sure we have a URL
if(!(o=o||s)){r(Error("Cannot load compressed-textures in "+e.url+", make sure you provide a fallback"));return}if(o===e.url){// Prevent infinite loops
r(Error("URL of compressed texture cannot be the same as the manifest's URL"));return}var f={crossOrigin:e.crossOrigin,metadata:e.metadata.imageMetadata,parentResource:e},p=i6.resolve(e.url.replace(this.baseUrl,""),o),d=i.cacheID;// The appropriate loader should register the texture
this.add(d,p,f,function(t){if(t.error){r(t.error);return}var i=t.texture,n=t.textures;// Make sure texture/textures is assigned to parent resource
Object.assign(e,{texture:void 0===i?null:i,textures:void 0===n?{}:n}),// Pass along any error
r()})}else r()},Object.defineProperty(t,"textureExtensions",{/**  Map of available texture extensions. */get:function(){if(!t._textureExtensions){var e=eh.ADAPTER.createCanvas().getContext("webgl");if(!e)return console.warn("WebGL not available for compressed textures. Silently failing."),{};var r={s3tc:e.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:e.getExtension("WEBGL_compressed_texture_etc"),etc1:e.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:e.getExtension("WEBGL_compressed_texture_atc"),astc:e.getExtension("WEBGL_compressed_texture_astc")};t._textureExtensions=r}return t._textureExtensions},enumerable:!1,configurable:!0}),Object.defineProperty(t,"textureFormats",{/** Map of available texture formats. */get:function(){if(!t._textureFormats){var e=t.textureExtensions;// Assign all available compressed-texture formats
for(var r in t._textureFormats={},e){var i=e[r];i&&Object.assign(t._textureFormats,Object.getPrototypeOf(i))}}return t._textureFormats},enumerable:!1,configurable:!0}),/** @ignore */t.extension=tf.Loader,t)}();/**
 * Creates base-textures and textures for each compressed-texture resource and adds them into the global
 * texture cache. The first texture has two IDs - `${url}`, `${url}-1`; while the rest have an ID of the
 * form `${url}-i`.
 * @param url - the original address of the resources
 * @param resources - the resources backing texture data
 * @ignore
 */function ad(t,e,r){var i={textures:{},texture:null};return e&&e.map(function(t){return new o_(new n9(t,Object.assign({mipmap:$.OFF,alphaMode:tt.NO_PREMULTIPLIED_ALPHA},r)))}).forEach(function(e,r){var n=e.baseTexture,o=t+"-"+(r+1);n9.addToCache(n,o),o_.addToCache(e,o),0===r&&(n9.addToCache(n,t),o_.addToCache(e,t),i.texture=e),i.textures[o]=e}),i}/**
 * DWORD offsets of the DDS file header fields (relative to file start).
 * @ignore
 */var a_={FOURCC:2},ay={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3};(L=tx||(tx={}))[L.DXGI_FORMAT_UNKNOWN=0]="DXGI_FORMAT_UNKNOWN",L[L.DXGI_FORMAT_R32G32B32A32_TYPELESS=1]="DXGI_FORMAT_R32G32B32A32_TYPELESS",L[L.DXGI_FORMAT_R32G32B32A32_FLOAT=2]="DXGI_FORMAT_R32G32B32A32_FLOAT",L[L.DXGI_FORMAT_R32G32B32A32_UINT=3]="DXGI_FORMAT_R32G32B32A32_UINT",L[L.DXGI_FORMAT_R32G32B32A32_SINT=4]="DXGI_FORMAT_R32G32B32A32_SINT",L[L.DXGI_FORMAT_R32G32B32_TYPELESS=5]="DXGI_FORMAT_R32G32B32_TYPELESS",L[L.DXGI_FORMAT_R32G32B32_FLOAT=6]="DXGI_FORMAT_R32G32B32_FLOAT",L[L.DXGI_FORMAT_R32G32B32_UINT=7]="DXGI_FORMAT_R32G32B32_UINT",L[L.DXGI_FORMAT_R32G32B32_SINT=8]="DXGI_FORMAT_R32G32B32_SINT",L[L.DXGI_FORMAT_R16G16B16A16_TYPELESS=9]="DXGI_FORMAT_R16G16B16A16_TYPELESS",L[L.DXGI_FORMAT_R16G16B16A16_FLOAT=10]="DXGI_FORMAT_R16G16B16A16_FLOAT",L[L.DXGI_FORMAT_R16G16B16A16_UNORM=11]="DXGI_FORMAT_R16G16B16A16_UNORM",L[L.DXGI_FORMAT_R16G16B16A16_UINT=12]="DXGI_FORMAT_R16G16B16A16_UINT",L[L.DXGI_FORMAT_R16G16B16A16_SNORM=13]="DXGI_FORMAT_R16G16B16A16_SNORM",L[L.DXGI_FORMAT_R16G16B16A16_SINT=14]="DXGI_FORMAT_R16G16B16A16_SINT",L[L.DXGI_FORMAT_R32G32_TYPELESS=15]="DXGI_FORMAT_R32G32_TYPELESS",L[L.DXGI_FORMAT_R32G32_FLOAT=16]="DXGI_FORMAT_R32G32_FLOAT",L[L.DXGI_FORMAT_R32G32_UINT=17]="DXGI_FORMAT_R32G32_UINT",L[L.DXGI_FORMAT_R32G32_SINT=18]="DXGI_FORMAT_R32G32_SINT",L[L.DXGI_FORMAT_R32G8X24_TYPELESS=19]="DXGI_FORMAT_R32G8X24_TYPELESS",L[L.DXGI_FORMAT_D32_FLOAT_S8X24_UINT=20]="DXGI_FORMAT_D32_FLOAT_S8X24_UINT",L[L.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS=21]="DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",L[L.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT=22]="DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",L[L.DXGI_FORMAT_R10G10B10A2_TYPELESS=23]="DXGI_FORMAT_R10G10B10A2_TYPELESS",L[L.DXGI_FORMAT_R10G10B10A2_UNORM=24]="DXGI_FORMAT_R10G10B10A2_UNORM",L[L.DXGI_FORMAT_R10G10B10A2_UINT=25]="DXGI_FORMAT_R10G10B10A2_UINT",L[L.DXGI_FORMAT_R11G11B10_FLOAT=26]="DXGI_FORMAT_R11G11B10_FLOAT",L[L.DXGI_FORMAT_R8G8B8A8_TYPELESS=27]="DXGI_FORMAT_R8G8B8A8_TYPELESS",L[L.DXGI_FORMAT_R8G8B8A8_UNORM=28]="DXGI_FORMAT_R8G8B8A8_UNORM",L[L.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB=29]="DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",L[L.DXGI_FORMAT_R8G8B8A8_UINT=30]="DXGI_FORMAT_R8G8B8A8_UINT",L[L.DXGI_FORMAT_R8G8B8A8_SNORM=31]="DXGI_FORMAT_R8G8B8A8_SNORM",L[L.DXGI_FORMAT_R8G8B8A8_SINT=32]="DXGI_FORMAT_R8G8B8A8_SINT",L[L.DXGI_FORMAT_R16G16_TYPELESS=33]="DXGI_FORMAT_R16G16_TYPELESS",L[L.DXGI_FORMAT_R16G16_FLOAT=34]="DXGI_FORMAT_R16G16_FLOAT",L[L.DXGI_FORMAT_R16G16_UNORM=35]="DXGI_FORMAT_R16G16_UNORM",L[L.DXGI_FORMAT_R16G16_UINT=36]="DXGI_FORMAT_R16G16_UINT",L[L.DXGI_FORMAT_R16G16_SNORM=37]="DXGI_FORMAT_R16G16_SNORM",L[L.DXGI_FORMAT_R16G16_SINT=38]="DXGI_FORMAT_R16G16_SINT",L[L.DXGI_FORMAT_R32_TYPELESS=39]="DXGI_FORMAT_R32_TYPELESS",L[L.DXGI_FORMAT_D32_FLOAT=40]="DXGI_FORMAT_D32_FLOAT",L[L.DXGI_FORMAT_R32_FLOAT=41]="DXGI_FORMAT_R32_FLOAT",L[L.DXGI_FORMAT_R32_UINT=42]="DXGI_FORMAT_R32_UINT",L[L.DXGI_FORMAT_R32_SINT=43]="DXGI_FORMAT_R32_SINT",L[L.DXGI_FORMAT_R24G8_TYPELESS=44]="DXGI_FORMAT_R24G8_TYPELESS",L[L.DXGI_FORMAT_D24_UNORM_S8_UINT=45]="DXGI_FORMAT_D24_UNORM_S8_UINT",L[L.DXGI_FORMAT_R24_UNORM_X8_TYPELESS=46]="DXGI_FORMAT_R24_UNORM_X8_TYPELESS",L[L.DXGI_FORMAT_X24_TYPELESS_G8_UINT=47]="DXGI_FORMAT_X24_TYPELESS_G8_UINT",L[L.DXGI_FORMAT_R8G8_TYPELESS=48]="DXGI_FORMAT_R8G8_TYPELESS",L[L.DXGI_FORMAT_R8G8_UNORM=49]="DXGI_FORMAT_R8G8_UNORM",L[L.DXGI_FORMAT_R8G8_UINT=50]="DXGI_FORMAT_R8G8_UINT",L[L.DXGI_FORMAT_R8G8_SNORM=51]="DXGI_FORMAT_R8G8_SNORM",L[L.DXGI_FORMAT_R8G8_SINT=52]="DXGI_FORMAT_R8G8_SINT",L[L.DXGI_FORMAT_R16_TYPELESS=53]="DXGI_FORMAT_R16_TYPELESS",L[L.DXGI_FORMAT_R16_FLOAT=54]="DXGI_FORMAT_R16_FLOAT",L[L.DXGI_FORMAT_D16_UNORM=55]="DXGI_FORMAT_D16_UNORM",L[L.DXGI_FORMAT_R16_UNORM=56]="DXGI_FORMAT_R16_UNORM",L[L.DXGI_FORMAT_R16_UINT=57]="DXGI_FORMAT_R16_UINT",L[L.DXGI_FORMAT_R16_SNORM=58]="DXGI_FORMAT_R16_SNORM",L[L.DXGI_FORMAT_R16_SINT=59]="DXGI_FORMAT_R16_SINT",L[L.DXGI_FORMAT_R8_TYPELESS=60]="DXGI_FORMAT_R8_TYPELESS",L[L.DXGI_FORMAT_R8_UNORM=61]="DXGI_FORMAT_R8_UNORM",L[L.DXGI_FORMAT_R8_UINT=62]="DXGI_FORMAT_R8_UINT",L[L.DXGI_FORMAT_R8_SNORM=63]="DXGI_FORMAT_R8_SNORM",L[L.DXGI_FORMAT_R8_SINT=64]="DXGI_FORMAT_R8_SINT",L[L.DXGI_FORMAT_A8_UNORM=65]="DXGI_FORMAT_A8_UNORM",L[L.DXGI_FORMAT_R1_UNORM=66]="DXGI_FORMAT_R1_UNORM",L[L.DXGI_FORMAT_R9G9B9E5_SHAREDEXP=67]="DXGI_FORMAT_R9G9B9E5_SHAREDEXP",L[L.DXGI_FORMAT_R8G8_B8G8_UNORM=68]="DXGI_FORMAT_R8G8_B8G8_UNORM",L[L.DXGI_FORMAT_G8R8_G8B8_UNORM=69]="DXGI_FORMAT_G8R8_G8B8_UNORM",L[L.DXGI_FORMAT_BC1_TYPELESS=70]="DXGI_FORMAT_BC1_TYPELESS",L[L.DXGI_FORMAT_BC1_UNORM=71]="DXGI_FORMAT_BC1_UNORM",L[L.DXGI_FORMAT_BC1_UNORM_SRGB=72]="DXGI_FORMAT_BC1_UNORM_SRGB",L[L.DXGI_FORMAT_BC2_TYPELESS=73]="DXGI_FORMAT_BC2_TYPELESS",L[L.DXGI_FORMAT_BC2_UNORM=74]="DXGI_FORMAT_BC2_UNORM",L[L.DXGI_FORMAT_BC2_UNORM_SRGB=75]="DXGI_FORMAT_BC2_UNORM_SRGB",L[L.DXGI_FORMAT_BC3_TYPELESS=76]="DXGI_FORMAT_BC3_TYPELESS",L[L.DXGI_FORMAT_BC3_UNORM=77]="DXGI_FORMAT_BC3_UNORM",L[L.DXGI_FORMAT_BC3_UNORM_SRGB=78]="DXGI_FORMAT_BC3_UNORM_SRGB",L[L.DXGI_FORMAT_BC4_TYPELESS=79]="DXGI_FORMAT_BC4_TYPELESS",L[L.DXGI_FORMAT_BC4_UNORM=80]="DXGI_FORMAT_BC4_UNORM",L[L.DXGI_FORMAT_BC4_SNORM=81]="DXGI_FORMAT_BC4_SNORM",L[L.DXGI_FORMAT_BC5_TYPELESS=82]="DXGI_FORMAT_BC5_TYPELESS",L[L.DXGI_FORMAT_BC5_UNORM=83]="DXGI_FORMAT_BC5_UNORM",L[L.DXGI_FORMAT_BC5_SNORM=84]="DXGI_FORMAT_BC5_SNORM",L[L.DXGI_FORMAT_B5G6R5_UNORM=85]="DXGI_FORMAT_B5G6R5_UNORM",L[L.DXGI_FORMAT_B5G5R5A1_UNORM=86]="DXGI_FORMAT_B5G5R5A1_UNORM",L[L.DXGI_FORMAT_B8G8R8A8_UNORM=87]="DXGI_FORMAT_B8G8R8A8_UNORM",L[L.DXGI_FORMAT_B8G8R8X8_UNORM=88]="DXGI_FORMAT_B8G8R8X8_UNORM",L[L.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM=89]="DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",L[L.DXGI_FORMAT_B8G8R8A8_TYPELESS=90]="DXGI_FORMAT_B8G8R8A8_TYPELESS",L[L.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB=91]="DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",L[L.DXGI_FORMAT_B8G8R8X8_TYPELESS=92]="DXGI_FORMAT_B8G8R8X8_TYPELESS",L[L.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB=93]="DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",L[L.DXGI_FORMAT_BC6H_TYPELESS=94]="DXGI_FORMAT_BC6H_TYPELESS",L[L.DXGI_FORMAT_BC6H_UF16=95]="DXGI_FORMAT_BC6H_UF16",L[L.DXGI_FORMAT_BC6H_SF16=96]="DXGI_FORMAT_BC6H_SF16",L[L.DXGI_FORMAT_BC7_TYPELESS=97]="DXGI_FORMAT_BC7_TYPELESS",L[L.DXGI_FORMAT_BC7_UNORM=98]="DXGI_FORMAT_BC7_UNORM",L[L.DXGI_FORMAT_BC7_UNORM_SRGB=99]="DXGI_FORMAT_BC7_UNORM_SRGB",L[L.DXGI_FORMAT_AYUV=100]="DXGI_FORMAT_AYUV",L[L.DXGI_FORMAT_Y410=101]="DXGI_FORMAT_Y410",L[L.DXGI_FORMAT_Y416=102]="DXGI_FORMAT_Y416",L[L.DXGI_FORMAT_NV12=103]="DXGI_FORMAT_NV12",L[L.DXGI_FORMAT_P010=104]="DXGI_FORMAT_P010",L[L.DXGI_FORMAT_P016=105]="DXGI_FORMAT_P016",L[L.DXGI_FORMAT_420_OPAQUE=106]="DXGI_FORMAT_420_OPAQUE",L[L.DXGI_FORMAT_YUY2=107]="DXGI_FORMAT_YUY2",L[L.DXGI_FORMAT_Y210=108]="DXGI_FORMAT_Y210",L[L.DXGI_FORMAT_Y216=109]="DXGI_FORMAT_Y216",L[L.DXGI_FORMAT_NV11=110]="DXGI_FORMAT_NV11",L[L.DXGI_FORMAT_AI44=111]="DXGI_FORMAT_AI44",L[L.DXGI_FORMAT_IA44=112]="DXGI_FORMAT_IA44",L[L.DXGI_FORMAT_P8=113]="DXGI_FORMAT_P8",L[L.DXGI_FORMAT_A8P8=114]="DXGI_FORMAT_A8P8",L[L.DXGI_FORMAT_B4G4R4A4_UNORM=115]="DXGI_FORMAT_B4G4R4A4_UNORM",L[L.DXGI_FORMAT_P208=116]="DXGI_FORMAT_P208",L[L.DXGI_FORMAT_V208=117]="DXGI_FORMAT_V208",L[L.DXGI_FORMAT_V408=118]="DXGI_FORMAT_V408",L[L.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE=119]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",L[L.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE=120]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",L[L.DXGI_FORMAT_FORCE_UINT=121]="DXGI_FORMAT_FORCE_UINT",(B=tT||(tT={}))[B.DDS_DIMENSION_TEXTURE1D=2]="DDS_DIMENSION_TEXTURE1D",B[B.DDS_DIMENSION_TEXTURE2D=3]="DDS_DIMENSION_TEXTURE2D",B[B.DDS_DIMENSION_TEXTURE3D=6]="DDS_DIMENSION_TEXTURE3D";/**
 * Maps `FOURCC_*` formats to internal formats (see {@link PIXI.INTERNAL_FORMATS}).
 * @ignore
 */var av=((tg={})[827611204]=tm.COMPRESSED_RGBA_S3TC_DXT1_EXT,tg[861165636]=tm.COMPRESSED_RGBA_S3TC_DXT3_EXT,tg[894720068]=tm.COMPRESSED_RGBA_S3TC_DXT5_EXT,tg),am=((tb={})[tx.DXGI_FORMAT_BC1_TYPELESS]=tm.COMPRESSED_RGBA_S3TC_DXT1_EXT,tb[tx.DXGI_FORMAT_BC1_UNORM]=tm.COMPRESSED_RGBA_S3TC_DXT1_EXT,tb[tx.DXGI_FORMAT_BC2_TYPELESS]=tm.COMPRESSED_RGBA_S3TC_DXT3_EXT,tb[tx.DXGI_FORMAT_BC2_UNORM]=tm.COMPRESSED_RGBA_S3TC_DXT3_EXT,tb[tx.DXGI_FORMAT_BC3_TYPELESS]=tm.COMPRESSED_RGBA_S3TC_DXT5_EXT,tb[tx.DXGI_FORMAT_BC3_UNORM]=tm.COMPRESSED_RGBA_S3TC_DXT5_EXT,tb[tx.DXGI_FORMAT_BC1_UNORM_SRGB]=tm.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,tb[tx.DXGI_FORMAT_BC2_UNORM_SRGB]=tm.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,tb[tx.DXGI_FORMAT_BC3_UNORM_SRGB]=tm.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,tb),ag=[171,75,84,88,32,49,49,187,13,10,26,10],ab={ENDIANNESS:12,GL_TYPE:16,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},ax=((tE={})[K.UNSIGNED_BYTE]=1,tE[K.UNSIGNED_SHORT]=2,tE[K.INT]=4,tE[K.UNSIGNED_INT]=4,tE[K.FLOAT]=4,tE[K.HALF_FLOAT]=8,tE),aT=((tA={})[W.RGBA]=4,tA[W.RGB]=3,tA[W.RG]=2,tA[W.RED]=1,tA[W.LUMINANCE]=1,tA[W.LUMINANCE_ALPHA]=2,tA[W.ALPHA]=1,tA),aE=((tS={})[K.UNSIGNED_SHORT_4_4_4_4]=2,tS[K.UNSIGNED_SHORT_5_5_5_1]=2,tS[K.UNSIGNED_SHORT_5_6_5]=2,tS);s7.setExtensionXhrType("dds",s7.XHR_RESPONSE_TYPE.BUFFER);/**
 * @class
 * @memberof PIXI
 * @implements {PIXI.ILoaderPlugin}
 * @see https://docs.microsoft.com/en-us/windows/win32/direct3ddds/dx-graphics-dds-pguide
 */var aA=/** @class */function(){function t(){}return(/**
     * Registers a DDS compressed texture
     * @see PIXI.Loader.loaderMiddleware
     * @param resource - loader resource that is checked to see if it is a DDS file
     * @param next - callback Function to call when done
     */t.use=function(t,e){if("dds"===t.extension&&t.data)try{Object.assign(t,ad(t.name||t.url,/**
 * @class
 * @memberof PIXI
 * @implements {PIXI.ILoaderPlugin}
 * @see https://docs.microsoft.com/en-us/windows/win32/direct3ddds/dx-graphics-dds-pguide
 *//**
 * Parses the DDS file header, generates base-textures, and puts them into the texture cache.
 * @param arrayBuffer
 */function(t){var e=new Uint32Array(t);if(542327876!==e[0])throw Error("Invalid DDS file magic word");var r=new Uint32Array(t,0,124/Uint32Array.BYTES_PER_ELEMENT),i=r[3],n=r[4],o=r[7],s=new Uint32Array(t,19*Uint32Array.BYTES_PER_ELEMENT,32/Uint32Array.BYTES_PER_ELEMENT),a=s[1];// File contains compressed texture(s)
if(4&a){var h=s[a_.FOURCC];// File contains one DXTn compressed texture
if(808540228!==h){var u=av[h],l=new Uint8Array(t,128);return[new af(l,{format:u,width:n,height:i,levels:o// CompressedTextureResource will separate the levelBuffers for us!
})]}var c=new Uint32Array(e.buffer,128,20/Uint32Array.BYTES_PER_ELEMENT),f=c[ay.DXGI_FORMAT],p=c[ay.RESOURCE_DIMENSION],d=c[ay.MISC_FLAG],_=c[ay.ARRAY_SIZE],y=am[f];if(void 0===y)throw Error("DDSParser cannot parse texture data with DXGI format "+f);if(4===d)throw Error("DDSParser does not support cubemap textures");if(p===tT.DDS_DIMENSION_TEXTURE3D)throw Error("DDSParser does not supported 3D texture data");// Uint8Array buffers of image data, including all mipmap levels in each image
var v=[];if(1===_)v.push(new Uint8Array(t,148));else{for(var m=au[y],g=0,b=n,x=i,T=0;T<o;T++)g+=Math.max(1,b+3&-4)*Math.max(1,x+3&-4)*m,b>>>=1,x>>>=1;// NOTE: Cubemaps have 6-images per texture (but they aren't supported so ^_^)
for(var E=148,T=0;T<_;T++)v.push(new Uint8Array(t,E,g)),E+=g}// Uint8Array -> CompressedTextureResource, and we're done!
return v.map(function(t){return new af(t,{format:y,width:n,height:i,levels:o})})}if(64&a)throw Error("DDSParser does not support uncompressed texture data.");if(512&a)throw Error("DDSParser does not supported YUV uncompressed texture data.");if(131072&a)throw Error("DDSParser does not support single-channel (lumninance) texture data!");if(2&a)throw Error("DDSParser does not support single-channel (alpha) texture data!");throw Error("DDSParser failed to load a texture file due to an unknown reason!")}(t.data),t.metadata))}catch(t){e(t);return}e()},/** @ignore */t.extension=tf.Loader,t)}();s7.setExtensionXhrType("ktx",s7.XHR_RESPONSE_TYPE.BUFFER);/**
 * Loader plugin for handling KTX texture container files.
 *
 * This KTX loader does not currently support the following features:
 * * cube textures
 * * 3D textures
 * * endianness conversion for big-endian machines
 * * embedded *.basis files
 *
 * It does supports the following features:
 * * multiple textures per file
 * * mipmapping (only for compressed formats)
 * * vendor-specific key/value data parsing (enable {@link PIXI.KTXLoader.loadKeyValueData})
 * @class
 * @memberof PIXI
 * @implements {PIXI.ILoaderPlugin}
 */var aS=/** @class */function(){function t(){}return(/**
     * Called after a KTX file is loaded.
     *
     * This will parse the KTX file header and add a {@code BaseTexture} to the texture
     * cache.
     * @see PIXI.Loader.loaderMiddleware
     * @param resource - loader resource that is checked to see if it is a KTX file
     * @param next - callback Function to call when done
     */t.use=function(t,e){if("ktx"===t.extension&&t.data)try{var r=t.name||t.url,i=function(t,e,r){void 0===r&&(r=!1);var i,n=new DataView(e);if(!/**
 * Checks whether the arrayBuffer contains a valid *.ktx file.
 * @param url
 * @param dataView
 */function(t,e){// NOTE: Do not optimize this into 3 32-bit integer comparison because the endianness
// of the data is not specified.
for(var r=0;r<ag.length;r++)if(e.getUint8(r)!==ag[r])return console.error(t+" is not a valid *.ktx file!"),!1;return!0}(t,n))return null;var o=67305985===n.getUint32(ab.ENDIANNESS,!0),s=n.getUint32(ab.GL_TYPE,o),a=n.getUint32(ab.GL_FORMAT,o),h=n.getUint32(ab.GL_INTERNAL_FORMAT,o),u=n.getUint32(ab.PIXEL_WIDTH,o),l=n.getUint32(ab.PIXEL_HEIGHT,o)||1,c=n.getUint32(ab.PIXEL_DEPTH,o)||1,f=n.getUint32(ab.NUMBER_OF_ARRAY_ELEMENTS,o)||1,p=n.getUint32(ab.NUMBER_OF_FACES,o),d=n.getUint32(ab.NUMBER_OF_MIPMAP_LEVELS,o),_=n.getUint32(ab.BYTES_OF_KEY_VALUE_DATA,o);// Whether the platform architecture is little endian. If littleEndian !== platformLittleEndian, then the
// file contents must be endian-converted!
// TODO: Endianness conversion
// const platformLittleEndian = new Uint8Array((new Uint32Array([ENDIANNESS])).buffer)[0] === 0x01;
if(0===l||1!==c)throw Error("Only 2D textures are supported");if(1!==p)throw Error("CubeTextures are not supported by KTXLoader yet!");if(1!==f)throw Error("WebGL does not support array textures");var y=u+3&-4,v=l+3&-4,m=Array(f),g=u*l;if(0===s&&(g=y*v),void 0===(i=0!==s?ax[s]?ax[s]*aT[a]:aE[s]:au[h]))throw Error("Unable to resolve the pixel format stored in the *.ktx file!");for(var b=r?function(t,e,r){for(var i=new Map,n=0;n<e;){var o=t.getUint32(64+n,r),s=64+n+4,a=3-(o+3)%4;// Bounds check
if(0===o||o>e-n){console.error("KTXLoader: keyAndValueByteSize out of bounds");break}for(// Note: keyNulByte can't be 0 otherwise the key is an empty string.
var h=0;h<o&&0!==t.getUint8(s+h);h++);if(-1===h){console.error("KTXLoader: Failed to find null byte terminating kvData key");break}var u=new TextDecoder().decode(new Uint8Array(t.buffer,s,h)),l=new DataView(t.buffer,s+h+1,o-h-1);i.set(u,l),// 4 = the keyAndValueByteSize field itself
// keyAndValueByteSize = the bytes taken by the key and value
// valuePadding = extra padding to align with 4 bytes
n+=4+o+a}return i}(n,_,o):null,x=g*i,T=u,E=l,A=y,S=v,R=64+_,O=0;O<d;O++){for(var I=n.getUint32(R,o),P=R+4,w=0;w<f;w++){// TODO: Maybe support 3D textures? :-)
// for (let zSlice = 0; zSlice < pixelDepth; zSlice)
var M=m[w];M||(M=m[w]=Array(d)),M[O]={levelID:O,// don't align mipWidth when texture not compressed! (glType not zero)
levelWidth:d>1||0!==s?T:A,levelHeight:d>1||0!==s?E:S,levelBuffer:new Uint8Array(e,P,x)},P+=x}// HINT: Aligns to 4-byte boundary after jumping imageSize (in lieu of mipPadding)
R+=I+4,R=R%4!=0?R+4-R%4:R,E=E>>1||1,// Each mipmap level is 4-times smaller?
x=(A=// Calculate mipWidth, mipHeight for _next_ iteration
(T=T>>1||1)+4-1&-4)*(S=E+4-1&-4)*i}return(// We use the levelBuffers feature of CompressedTextureResource b/c texture data is image-major, not level-major.
0!==s?{uncompressed:m.map(function(t){var e=t[0].levelBuffer,r=!1;return s===K.FLOAT?e=new Float32Array(t[0].levelBuffer.buffer,t[0].levelBuffer.byteOffset,t[0].levelBuffer.byteLength/4):s===K.UNSIGNED_INT?(r=!0,e=new Uint32Array(t[0].levelBuffer.buffer,t[0].levelBuffer.byteOffset,t[0].levelBuffer.byteLength/4)):s===K.INT&&(r=!0,e=new Int32Array(t[0].levelBuffer.buffer,t[0].levelBuffer.byteOffset,t[0].levelBuffer.byteLength/4)),{resource:new n6(e,{width:t[0].levelWidth,height:t[0].levelHeight}),type:s,format:r?function(t){switch(t){case W.RGBA:return W.RGBA_INTEGER;case W.RGB:return W.RGB_INTEGER;case W.RG:return W.RG_INTEGER;case W.RED:return W.RED_INTEGER;default:return t}}(a):a}}),kvData:b}:{compressed:m.map(function(t){return new af(null,{format:h,width:u,height:l,levels:d,levelBuffers:t})}),kvData:b})}(r,t.data,this.loadKeyValueData),n=i.compressed,o=i.uncompressed,s=i.kvData;if(n){var a=ad(r,n,t.metadata);if(s&&a.textures)for(var h in a.textures)a.textures[h].baseTexture.ktxKeyValueData=s;Object.assign(t,a)}else if(o){var u={};o.forEach(function(t,e){var i=new o_(new n9(t.resource,{mipmap:$.OFF,alphaMode:tt.NO_PREMULTIPLIED_ALPHA,type:t.type,format:t.format})),n=r+"-"+(e+1);s&&(i.baseTexture.ktxKeyValueData=s),n9.addToCache(i.baseTexture,n),o_.addToCache(i,n),0===e&&(u[r]=i,n9.addToCache(i.baseTexture,r),o_.addToCache(i,r)),u[n]=i}),Object.assign(t,{textures:u})}}catch(t){e(t);return}e()},/** @ignore */t.extension=tf.Loader,/**
     * If set to `true`, {@link PIXI.KTXLoader} will parse key-value data in KTX textures. This feature relies
     * on the [Encoding Standard]{@link https://encoding.spec.whatwg.org}.
     *
     * The key-value data will be available on the base-textures as {@code PIXI.BaseTexture.ktxKeyValueData}. They
     * will hold a reference to the texture data buffer, so make sure to delete key-value data once you are done
     * using it.
     */t.loadKeyValueData=!1,t)}(),aR=function(t,e){return(aR=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function aO(t,e){function r(){this.constructor=t}aR(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}!/** @class */function(t){/**
     * @param maxSize - The maximum number of particles that can be rendered by the container.
     *  Affects size of allocated buffers.
     * @param properties - The properties of children that should be uploaded to the gpu and applied.
     * @param {boolean} [properties.vertices=false] - When true, vertices be uploaded and applied.
     *                  if sprite's ` scale/anchor/trim/frame/orig` is dynamic, please set `true`.
     * @param {boolean} [properties.position=true] - When true, position be uploaded and applied.
     * @param {boolean} [properties.rotation=false] - When true, rotation be uploaded and applied.
     * @param {boolean} [properties.uvs=false] - When true, uvs be uploaded and applied.
     * @param {boolean} [properties.tint=false] - When true, alpha and tint be uploaded and applied.
     * @param {number} [batchSize=16384] - Number of particles per batch. If less than maxSize, it uses maxSize instead.
     * @param {boolean} [autoResize=false] - If true, container allocates more batches in case
     *  there are more than `maxSize` particles.
     */function e(e,r,i,n){void 0===e&&(e=1500),void 0===i&&(i=16384),void 0===n&&(n=!1);var o=t.call(this)||this;return i>16384&&(i=16384),o._properties=[!1,!0,!1,!1,!1],o._maxSize=e,o._batchSize=i,o._buffers=null,o._bufferUpdateIDs=[],o._updateID=0,o.interactiveChildren=!1,o.blendMode=z.NORMAL,o.autoResize=n,o.roundPixels=!0,o.baseTexture=null,o.setProperties(r),o._tint=0,o.tintRgb=new Float32Array(4),o.tint=16777215,o}aO(e,t),/**
     * Sets the private properties array to dynamic / static based on the passed properties object
     * @param properties - The properties to be uploaded
     */e.prototype.setProperties=function(t){t&&(this._properties[0]="vertices"in t||"scale"in t?!!t.vertices||!!t.scale:this._properties[0],this._properties[1]="position"in t?!!t.position:this._properties[1],this._properties[2]="rotation"in t?!!t.rotation:this._properties[2],this._properties[3]="uvs"in t?!!t.uvs:this._properties[3],this._properties[4]="tint"in t||"alpha"in t?!!t.tint||!!t.alpha:this._properties[4])},e.prototype.updateTransform=function(){// TODO don't need to!
this.displayObjectUpdateTransform()},Object.defineProperty(e.prototype,"tint",{/**
         * The tint applied to the container. This is a hex value.
         * A value of 0xFFFFFF will remove any tint effect.
         * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * @default 0xFFFFFF
         */get:function(){return this._tint},set:function(t){this._tint=t,nt(t,this.tintRgb)},enumerable:!1,configurable:!0}),/**
     * Renders the container using the WebGL renderer.
     * @param renderer - The WebGL renderer.
     */e.prototype.render=function(t){var e=this;this.visible&&!(this.worldAlpha<=0)&&this.children.length&&this.renderable&&(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.valid||this.baseTexture.once("update",function(){return e.onChildrenChange(0)})),t.batch.setObjectRenderer(t.plugins.particle),t.plugins.particle.render(this))},/**
     * Set the flag that static data should be updated to true
     * @param smallestChildIndex - The smallest child index.
     */e.prototype.onChildrenChange=function(t){for(var e=Math.floor(t/this._batchSize);this._bufferUpdateIDs.length<e;)this._bufferUpdateIDs.push(0);this._bufferUpdateIDs[e]=++this._updateID},e.prototype.dispose=function(){if(this._buffers){for(var t=0;t<this._buffers.length;++t)this._buffers[t].destroy();this._buffers=null}},/**
     * Destroys the container
     * @param options - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have their
     *  destroy method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the texture of the child sprite
     * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the base texture of the child sprite
     */e.prototype.destroy=function(e){t.prototype.destroy.call(this,e),this.dispose(),this._properties=null,this._buffers=null,this._bufferUpdateIDs=null}}(nV);/*
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original PixiJS version!
 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that
 * they now share 4 bytes on the vertex buffer
 *
 * Heavily inspired by LibGDX's ParticleBuffer:
 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/ParticleBuffer.java
 *//**
 * The particle buffer manages the static and dynamic buffers for a particle container.
 * @private
 * @memberof PIXI
 */var aI=/** @class */function(){/**
     * @param {object} properties - The properties to upload.
     * @param {boolean[]} dynamicPropertyFlags - Flags for which properties are dynamic.
     * @param {number} size - The size of the batch.
     */function t(t,e,r){this.geometry=new oS,this.indexBuffer=null,this.size=r,this.dynamicProperties=[],this.staticProperties=[];for(var i=0;i<t.length;++i){var n=t[i];// Make copy of properties object so that when we edit the offset it doesn't
// change all other instances of the object literal
n={attributeName:n.attributeName,size:n.size,uploadFunction:n.uploadFunction,type:n.type||K.FLOAT,offset:n.offset},e[i]?this.dynamicProperties.push(n):this.staticProperties.push(n)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}return(/** Sets up the renderer context and necessary buffers. */t.prototype.initBuffers=function(){var t=this.geometry,e=0;this.indexBuffer=new ob(/**
 * Generic Mask Stack data structure
 * @memberof PIXI.utils
 * @function createIndicesForQuads
 * @param {number} size - Number of quads
 * @param {Uint16Array|Uint32Array} [outBuffer] - Buffer for output, length has to be `6 * size`
 * @returns {Uint16Array|Uint32Array} - Resulting index buffer
 */function(t,e){void 0===e&&(e=null);// the total number of indices in our array, there are 6 points per quad.
var r=6*t;if((e=e||new Uint16Array(r)).length!==r)throw Error("Out buffer length is incorrect, got "+e.length+" and expected "+r);// fill the indices with the quads to draw
for(var i=0,n=0;i<r;i+=6,n+=4)e[i+0]=n+0,e[i+1]=n+1,e[i+2]=n+2,e[i+3]=n+0,e[i+4]=n+2,e[i+5]=n+3;return e}(this.size),!0,!0),t.addIndex(this.indexBuffer),this.dynamicStride=0;for(var r=0;r<this.dynamicProperties.length;++r){var i=this.dynamicProperties[r];i.offset=e,e+=i.size,this.dynamicStride+=i.size}var n=new ArrayBuffer(this.size*this.dynamicStride*16);this.dynamicData=new Float32Array(n),this.dynamicDataUint32=new Uint32Array(n),this.dynamicBuffer=new ob(this.dynamicData,!1,!1);// static //
var o=0;this.staticStride=0;for(var r=0;r<this.staticProperties.length;++r){var i=this.staticProperties[r];i.offset=o,o+=i.size,this.staticStride+=i.size}var s=new ArrayBuffer(this.size*this.staticStride*16);this.staticData=new Float32Array(s),this.staticDataUint32=new Uint32Array(s),this.staticBuffer=new ob(this.staticData,!0,!1);for(var r=0;r<this.dynamicProperties.length;++r){var i=this.dynamicProperties[r];t.addAttribute(i.attributeName,this.dynamicBuffer,0,i.type===K.UNSIGNED_BYTE,i.type,4*this.dynamicStride,4*i.offset)}for(var r=0;r<this.staticProperties.length;++r){var i=this.staticProperties[r];t.addAttribute(i.attributeName,this.staticBuffer,0,i.type===K.UNSIGNED_BYTE,i.type,4*this.staticStride,4*i.offset)}},/**
     * Uploads the dynamic properties.
     * @param children - The children to upload.
     * @param startIndex - The index to start at.
     * @param amount - The number to upload.
     */t.prototype.uploadDynamic=function(t,e,r){for(var i=0;i<this.dynamicProperties.length;i++){var n=this.dynamicProperties[i];n.uploadFunction(t,e,r,n.type===K.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,n.offset)}this.dynamicBuffer._updateID++},/**
     * Uploads the static properties.
     * @param children - The children to upload.
     * @param startIndex - The index to start at.
     * @param amount - The number to upload.
     */t.prototype.uploadStatic=function(t,e,r){for(var i=0;i<this.staticProperties.length;i++){var n=this.staticProperties[i];n.uploadFunction(t,e,r,n.type===K.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,n.offset)}this.staticBuffer._updateID++},/** Destroys the ParticleBuffer. */t.prototype.destroy=function(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,// all buffers are destroyed inside geometry
this.geometry.destroy()},t)}(),aP=/** @class */function(t){/**
     * @param renderer - The renderer this sprite batch works for.
     */function e(e){var r=t.call(this,e)||this;return(// 65535 is max vertex index in the index buffer (see ParticleRenderer)
// so max number of particles is 65536 / 4 = 16384
// and max number of element in the index buffer is 16384 * 6 = 98304
// Creating a full index buffer, overhead is 98304 * 2 = 196Ko
// let numIndices = 98304;
r.shader=null,r.properties=null,r.tempMatrix=new nw,r.properties=[// verticesData
{attributeName:"aVertexPosition",size:2,uploadFunction:r.uploadVertices,offset:0},// positionData
{attributeName:"aPositionCoord",size:2,uploadFunction:r.uploadPosition,offset:0},// rotationData
{attributeName:"aRotation",size:1,uploadFunction:r.uploadRotation,offset:0},// uvsData
{attributeName:"aTextureCoord",size:2,uploadFunction:r.uploadUvs,offset:0},// tintData
{attributeName:"aColor",size:1,type:K.UNSIGNED_BYTE,uploadFunction:r.uploadTint,offset:0}],r.shader=o5.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n","varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}",{}),r.state=o9.for2d(),r)}return aO(e,t),/**
     * Renders the particle container object.
     * @param container - The container to render using this ParticleRenderer.
     */e.prototype.render=function(t){var e,r,i,n,o=t.children,s=t._maxSize,a=t._batchSize,h=this.renderer,u=o.length;if(0!==u){u>s&&!t.autoResize&&(u=s);var l=t._buffers;l||(l=t._buffers=this.generateBuffers(t));var c=o[0]._texture.baseTexture,f=c.alphaMode>0;// if the uvs have not updated then no point rendering just yet!
this.state.blendMode=(e=t.blendMode,ni[f?1:0][e]),h.state.set(this.state);var p=h.gl,d=t.worldTransform.copyTo(this.tempMatrix);d.prepend(h.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=d.toArray(!0),this.shader.uniforms.uColor=(r=t.tintRgb,i=t.worldAlpha,n=(n=this.shader.uniforms.uColor)||new Float32Array(4),f||void 0===f?(n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i):(n[0]=r[0],n[1]=r[1],n[2]=r[2]),n[3]=i,n),this.shader.uniforms.uSampler=c,this.renderer.shader.bind(this.shader);// now lets upload and render the buffers..
for(var _=!1,y=0,v=0;y<u;y+=a,v+=1){var m=u-y;m>a&&(m=a),v>=l.length&&l.push(this._generateOneMoreBuffer(t));var g=l[v];// we always upload the dynamic
g.uploadDynamic(o,y,m);var b=t._bufferUpdateIDs[v]||0;(_=_||g._updateID<b)&&(g._updateID=t._updateID,g.uploadStatic(o,y,m)),// bind the buffer
h.geometry.bind(g.geometry),p.drawElements(p.TRIANGLES,6*m,p.UNSIGNED_SHORT,0)}}},/**
     * Creates one particle buffer for each child in the container we want to render and updates internal properties.
     * @param container - The container to render using this ParticleRenderer
     * @returns - The buffers
     */e.prototype.generateBuffers=function(t){for(var e=[],r=t._maxSize,i=t._batchSize,n=t._properties,o=0;o<r;o+=i)e.push(new aI(this.properties,n,i));return e},/**
     * Creates one more particle buffer, because container has autoResize feature.
     * @param container - The container to render using this ParticleRenderer
     * @returns - The generated buffer
     */e.prototype._generateOneMoreBuffer=function(t){var e=t._batchSize,r=t._properties;return new aI(this.properties,r,e)},/**
     * Uploads the vertices.
     * @param children - the array of sprites to render
     * @param startIndex - the index to start from in the children array
     * @param amount - the amount of children that will have their vertices uploaded
     * @param array - The vertices to upload.
     * @param stride - Stride to use for iteration.
     * @param offset - Offset to start at.
     */e.prototype.uploadVertices=function(t,e,r,i,n,o){for(var s=0,a=0,h=0,u=0,l=0;l<r;++l){var c=t[e+l],f=c._texture,p=c.scale.x,d=c.scale.y,_=f.trim,y=f.orig;_?(s=// if the sprite is trimmed and is not a tilingsprite then we need to add the
// extra space before transforming the sprite coords..
(a=_.x-c.anchor.x*y.width)+_.width,h=(u=_.y-c.anchor.y*y.height)+_.height):(s=y.width*(1-c.anchor.x),a=-(y.width*c.anchor.x),h=y.height*(1-c.anchor.y),u=-(y.height*c.anchor.y)),i[o]=a*p,i[o+1]=u*d,i[o+n]=s*p,i[o+n+1]=u*d,i[o+2*n]=s*p,i[o+2*n+1]=h*d,i[o+3*n]=a*p,i[o+3*n+1]=h*d,o+=4*n}},/**
     * Uploads the position.
     * @param children - the array of sprites to render
     * @param startIndex - the index to start from in the children array
     * @param amount - the amount of children that will have their positions uploaded
     * @param array - The vertices to upload.
     * @param stride - Stride to use for iteration.
     * @param offset - Offset to start at.
     */e.prototype.uploadPosition=function(t,e,r,i,n,o){for(var s=0;s<r;s++){var a=t[e+s].position;i[o]=a.x,i[o+1]=a.y,i[o+n]=a.x,i[o+n+1]=a.y,i[o+2*n]=a.x,i[o+2*n+1]=a.y,i[o+3*n]=a.x,i[o+3*n+1]=a.y,o+=4*n}},/**
     * Uploads the rotation.
     * @param children - the array of sprites to render
     * @param startIndex - the index to start from in the children array
     * @param amount - the amount of children that will have their rotation uploaded
     * @param array - The vertices to upload.
     * @param stride - Stride to use for iteration.
     * @param offset - Offset to start at.
     */e.prototype.uploadRotation=function(t,e,r,i,n,o){for(var s=0;s<r;s++){var a=t[e+s].rotation;i[o]=a,i[o+n]=a,i[o+2*n]=a,i[o+3*n]=a,o+=4*n}},/**
     * Uploads the UVs.
     * @param children - the array of sprites to render
     * @param startIndex - the index to start from in the children array
     * @param amount - the amount of children that will have their rotation uploaded
     * @param array - The vertices to upload.
     * @param stride - Stride to use for iteration.
     * @param offset - Offset to start at.
     */e.prototype.uploadUvs=function(t,e,r,i,n,o){for(var s=0;s<r;++s){var a=t[e+s]._texture._uvs;a?(i[o]=a.x0,i[o+1]=a.y0,i[o+n]=a.x1,i[o+n+1]=a.y1,i[o+2*n]=a.x2,i[o+2*n+1]=a.y2,i[o+3*n]=a.x3,i[o+3*n+1]=a.y3):(// TODO you know this can be easier!
i[o]=0,i[o+1]=0,i[o+n]=0,i[o+n+1]=0,i[o+2*n]=0,i[o+2*n+1]=0,i[o+3*n]=0,i[o+3*n+1]=0),o+=4*n}},/**
     * Uploads the tint.
     * @param children - the array of sprites to render
     * @param startIndex - the index to start from in the children array
     * @param amount - the amount of children that will have their rotation uploaded
     * @param array - The vertices to upload.
     * @param stride - Stride to use for iteration.
     * @param offset - Offset to start at.
     */e.prototype.uploadTint=function(t,e,r,i,n,o){for(var s=0;s<r;++s){var a=t[e+s],h=a._texture.baseTexture.alphaMode>0,u=a.alpha,l=u<1&&h?nn(a._tintRGB,u):a._tintRGB+(255*u<<24);i[o]=l,i[o+n]=l,i[o+2*n]=l,i[o+3*n]=l,o+=4*n}},/** Destroys the ParticleRenderer. */e.prototype.destroy=function(){t.prototype.destroy.call(this),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null},/** @ignore */e.extension={name:"particle",type:tf.RendererPlugin},e}(oF);(G=tR||(tR={})).MITER="miter",G.BEVEL="bevel",G.ROUND="round",(U=tO||(tO={})).BUTT="butt",U.ROUND="round",U.SQUARE="square";/**
 * Graphics curves resolution settings. If `adaptive` flag is set to `true`,
 * the resolution is calculated based on the curve's length to ensure better visual quality.
 * Adaptive draw works with `bezierCurveTo` and `quadraticCurveTo`.
 * @static
 * @constant
 * @memberof PIXI
 * @name GRAPHICS_CURVES
 * @type {object}
 * @property {boolean} [adaptive=true] - flag indicating if the resolution should be adaptive
 * @property {number} [maxLength=10] - maximal length of a single segment of the curve (if adaptive = false, ignored)
 * @property {number} [minSegments=8] - minimal number of segments in the curve (if adaptive = false, ignored)
 * @property {number} [maxSegments=2048] - maximal number of segments in the curve (if adaptive = false, ignored)
 */var aw={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount:function(t,e){if(void 0===e&&(e=20),!this.adaptive||!t||isNaN(t))return e;var r=Math.ceil(t/this.maxLength);return r<this.minSegments?r=this.minSegments:r>this.maxSegments&&(r=this.maxSegments),r}},aM=/** @class */function(){function t(){/**
         * The hex color value used when coloring the Graphics object.
         * @default 0xFFFFFF
         */this.color=16777215,/** The alpha value used when filling the Graphics object. */this.alpha=1,/**
         * The texture to be used for the fill.
         * @default 0
         */this.texture=o_.WHITE,/**
         * The transform applied to the texture.
         * @default null
         */this.matrix=null,/** If the current fill is visible. */this.visible=!1,this.reset()}return(/** Clones the object */t.prototype.clone=function(){var e=new t;return e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.matrix=this.matrix,e.visible=this.visible,e},/** Reset */t.prototype.reset=function(){this.color=16777215,this.alpha=1,this.texture=o_.WHITE,this.matrix=null,this.visible=!1},/** Destroy and don't use after this. */t.prototype.destroy=function(){this.texture=null,this.matrix=null},t)}(),aD=function(t,e){return(aD=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function aC(t,e){function r(){this.constructor=t}aD(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function aF(t,e){void 0===e&&(e=!1);var r,i,n=t.length;if(!(n<6)){for(var o=0,s=0,a=t[n-2],h=t[n-1];s<n;s+=2){var u=t[s],l=t[s+1];o+=(u-a)*(l+h),a=u,h=l}if(!e&&o>0||e&&o<=0)for(var c=n/2,s=c+c%2;s<n;s+=2){var f=n-s-2,p=n-s-1,d=s,_=s+1;r=[t[d],t[f]],t[f]=r[0],t[d]=r[1],i=[t[_],t[p]],t[p]=i[0],t[_]=i[1]}}}/**
 * Builds a polygon to draw
 *
 * Ignored from docs since it is not directly exposed.
 * @ignore
 * @private
 * @param {PIXI.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the WebGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the WebGL-specific information to create nativeLines
 */var aN={build:function(t){t.points=t.shape.points.slice()},triangulate:function(t,e){var r=t.points,i=t.holes,n=e.points,o=e.indices;if(r.length>=6){aF(r,!1);// Process holes..
for(var s=[],a=0;a<i.length;a++){var h=i[a];aF(h.points,!0),s.push(r.length/2),r=r.concat(h.points)}var u=/*@__PURE__*/tM(ev)(r,s,2);if(!u)return;for(var l=n.length/2,a=0;a<u.length;a+=3)o.push(u[a]+l),o.push(u[a+1]+l),o.push(u[a+2]+l);for(var a=0;a<r.length;a++)n.push(r[a])}}},aL={build:function(t){// need to convert points to a nice regular data
var e,r,i,n,o,s,a=t.points;if(t.type===tc.CIRC){var h=t.shape;e=h.x,r=h.y,o=s=h.radius,i=n=0}else if(t.type===tc.ELIP){var u=t.shape;e=u.x,r=u.y,o=u.width,s=u.height,i=n=0}else{var l=t.shape,c=l.width/2,f=l.height/2;e=l.x+c,r=l.y+f,o=s=Math.max(0,Math.min(l.radius,Math.min(c,f))),i=c-o,n=f-s}if(!(o>=0&&s>=0&&i>=0&&n>=0)){a.length=0;return}// Choose a number of segments such that the maximum absolute deviation from the circle is approximately 0.029
var p=Math.ceil(2.3*Math.sqrt(o+s)),d=8*p+(i?4:0)+(n?4:0);if(a.length=d,0!==d){if(0===p){a.length=8,a[0]=a[6]=e+i,a[1]=a[3]=r+n,a[2]=a[4]=e-i,a[5]=a[7]=r-n;return}var _=0,y=4*p+(i?2:0)+2,v=y,m=d,g=i+o,b=n,x=e+g,T=e-g,E=r+b;if(a[_++]=x,a[_++]=E,a[--y]=E,a[--y]=T,n){var A=r-b;a[v++]=T,a[v++]=A,a[--m]=A,a[--m]=x}for(var S=1;S<p;S++){var R=Math.PI/2*(S/p),g=i+Math.cos(R)*o,b=n+Math.sin(R)*s,x=e+g,T=e-g,E=r+b,A=r-b;a[_++]=x,a[_++]=E,a[--y]=E,a[--y]=T,a[v++]=T,a[v++]=A,a[--m]=A,a[--m]=x}var g=i,b=n+s,x=e+g,T=e-g,E=r+b,A=r-b;a[_++]=x,a[_++]=E,a[--m]=A,a[--m]=x,i&&(a[_++]=T,a[_++]=E,a[--m]=A,a[--m]=T)}},triangulate:function(t,e){var r,i,n=t.points,o=e.points,s=e.indices;if(0!==n.length){var a=o.length/2,h=a;if(t.type!==tc.RREC){var u=t.shape;r=u.x,i=u.y}else{var l=t.shape;r=l.x+l.width/2,i=l.y+l.height/2}var c=t.matrix;// Push center (special point)
o.push(t.matrix?c.a*r+c.c*i+c.tx:r,t.matrix?c.b*r+c.d*i+c.ty:i),a++,o.push(n[0],n[1]);for(var f=2;f<n.length;f+=2)o.push(n[f],n[f+1]),// add some uvs
s.push(a++,h,a);s.push(h+1,h,a)}}};/**
 * Calculate the points for a quadratic bezier curve. (helper function..)
 * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * Ignored from docs since it is not directly exposed.
 * @ignore
 * @private
 * @param {number} fromX - Origin point x
 * @param {number} fromY - Origin point x
 * @param {number} cpX - Control point x
 * @param {number} cpY - Control point y
 * @param {number} toX - Destination point x
 * @param {number} toY - Destination point y
 * @param {number[]} [out=[]] - The output array to add points into. If not passed, a new array is created.
 * @returns {number[]} an array of points
 */function aB(t,e,r,i,n,o,s){void 0===s&&(s=[]);for(var a,h,u=s,l=0,c=0,f=0,p=0,d=0,_=0,y=0,v=0;y<=20;++y)// The Green Line
l=t+(r-t)*(v=y/20),c=e+(i-e)*v,f=r+(n-r)*v,p=i+(o-i)*v,// The Black Dot
d=(a=l)+(f-a)*v,_=(h=c)+(p-h)*v,(0!==y||u[u.length-2]!==d||u[u.length-1]!==_)&&u.push(d,_);return u}/**
 * Buffers vertices to draw a square cap.
 *
 * Ignored from docs since it is not directly exposed.
 * @ignore
 * @private
 * @param {number} x - X-coord of end point
 * @param {number} y - Y-coord of end point
 * @param {number} nx - X-coord of line normal pointing inside
 * @param {number} ny - Y-coord of line normal pointing inside
 * @param {number} innerWeight - Weight of inner points
 * @param {number} outerWeight - Weight of outer points
 * @param {boolean} clockwise - Whether the cap is drawn clockwise
 * @param {Array<number>} verts - vertex buffer
 * @returns {number} - no. of vertices pushed
 */function aG(t,e,r,i,n,o,s,/* rotation for square (true at left end, false at right end) */a){s?(h=i,u=-r):(h=-i,u=r);/* [i|0]x,y extended at cap */var h,u,l=t-r*n+h,c=e-i*n+u,f=t+r*o+h,p=e+i*o+u;return /* Square itself must be inserted clockwise*/a.push(l,c),a.push(f,p),2}/**
 * Buffers vertices to draw an arc at the line joint or cap.
 *
 * Ignored from docs since it is not directly exposed.
 * @ignore
 * @private
 * @param {number} cx - X-coord of center
 * @param {number} cy - Y-coord of center
 * @param {number} sx - X-coord of arc start
 * @param {number} sy - Y-coord of arc start
 * @param {number} ex - X-coord of arc end
 * @param {number} ey - Y-coord of arc end
 * @param {Array<number>} verts - buffer of vertices
 * @param {boolean} clockwise - orientation of vertices
 * @returns {number} - no. of vertices pushed
 */function aU(t,e,r,i,n,o,s,a){var h=r-t,u=i-e,l=Math.atan2(h,u),c=Math.atan2(n-t,o-e);a&&l<c?l+=2*Math.PI:!a&&l>c&&(c+=2*Math.PI);var f=l,p=c-l,d=Math.sqrt(h*h+u*u),_=(15*Math.abs(p)*Math.sqrt(d)/Math.PI>>0)+1,y=p/_;if(f+=y,a){s.push(t,e),s.push(r,i);for(var v=1,m=f;v<_;v++,m+=y)s.push(t,e),s.push(t+Math.sin(m)*d,e+Math.cos(m)*d);s.push(t,e),s.push(n,o)}else{s.push(r,i),s.push(t,e);for(var v=1,m=f;v<_;v++,m+=y)s.push(t+Math.sin(m)*d,e+Math.cos(m)*d),s.push(t,e);s.push(n,o),s.push(t,e)}return 2*_}/**
 * Builds a line to draw
 *
 * Ignored from docs since it is not directly exposed.
 * @ignore
 * @private
 * @param {PIXI.GraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {PIXI.GraphicsGeometry} graphicsGeometry - Geometry where to append output
 */function ak(t,e){t.lineStyle.native?/**
 * Builds a line to draw using the gl.drawArrays(gl.LINES) method
 *
 * Ignored from docs since it is not directly exposed.
 * @ignore
 * @private
 * @param {PIXI.GraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {PIXI.GraphicsGeometry} graphicsGeometry - Geometry where to append output
 */function(t,e){var r=0,i=t.shape,n=t.points||i.points,o=i.type!==tc.POLY||i.closeStroke;if(0!==n.length){var s=e.points,a=e.indices,h=n.length/2,u=s.length/2,l=u;for(s.push(n[0],n[1]),r=1;r<h;r++)s.push(n[2*r],n[2*r+1]),a.push(l,l+1),l++;o&&a.push(l,u)}}(t,e):/**
 * Builds a line to draw using the polygon method.
 *
 * Ignored from docs since it is not directly exposed.
 * @ignore
 * @private
 * @param {PIXI.GraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {PIXI.GraphicsGeometry} graphicsGeometry - Geometry where to append output
 */function(t,e){var r=t.shape,i=t.points||r.points.slice(),n=e.closePointEps;if(0!==i.length){// if the line width is an odd number add 0.5 to align to a whole pixel
// commenting this out fixes #711 and #1620
// if (graphicsData.lineWidth%2)
// {
//     for (i = 0; i < points.length; i++)
//     {
//         points[i] += 0.5;
//     }
// }
var o=t.lineStyle,s=new nT(i[0],i[1]),a=new nT(i[i.length-2],i[i.length-1]),h=r.type!==tc.POLY||r.closeStroke,u=Math.abs(s.x-a.x)<n&&Math.abs(s.y-a.y)<n;// if the first point is the last point - gonna have issues :)
if(h){// need to clone as we are going to slightly modify the shape..
i=i.slice(),u&&(i.pop(),i.pop(),a.set(i[i.length-2],i[i.length-1]));var l=(s.x+a.x)*.5,c=(a.y+s.y)*.5;i.unshift(l,c),i.push(l,c)}var f=e.points,p=i.length/2,d=i.length,_=f.length/2,y=o.width/2,v=y*y,m=o.miterLimit*o.miterLimit,g=i[0],b=i[1],x=i[2],T=i[3],E=0,A=0,S=-(b-T),R=g-x,O=0,I=0,P=Math.sqrt(S*S+R*R);S/=P,R/=P,S*=y,R*=y;var w=o.alignment,M=(1-w)*2,D=2*w;// 0.5;
h||(o.cap===tO.ROUND?d+=aU(g-S*(M-D)*.5,b-R*(M-D)*.5,g-S*M,b-R*M,g+S*D,b+R*D,f,!0)+2:o.cap===tO.SQUARE&&(d+=aG(g,b,S,R,M,D,!0,f))),// Push first point (below & above vertices)
f.push(g-S*M,b-R*M),f.push(g+S*D,b+R*D);for(var C=1;C<p-1;++C){g=i[(C-1)*2],b=i[(C-1)*2+1],x=i[2*C],T=i[2*C+1],E=i[(C+1)*2],A=i[(C+1)*2+1],P=Math.sqrt((S=-(b-T))*S+(R=g-x)*R),S/=P,R/=P,S*=y,R*=y,P=Math.sqrt((O=-(T-A))*O+(I=x-E)*I),O/=P,I/=P,O*=y,I*=y;/* d[x|y](0|1) = the component displacement between points p(0,1|1,2) */var F=x-g,N=b-T,L=x-E,B=A-T,G=F*L+N*B,U=N*L-B*F,k=U<0;/* Going nearly parallel? *//* atan(0.001) ~= 0.001 rad ~= 0.057 degree */if(Math.abs(U)<.001*Math.abs(G)){f.push(x-S*M,T-R*M),f.push(x+S*D,T+R*D),G>=0&&(o.join===tR.ROUND?d+=aU(x,T,x-S*M,T-R*M,x-O*M,T-I*M,f,!1)+4:d+=2,f.push(x-O*D,T-I*D),f.push(x+O*M,T+I*M));continue}/* p[x|y] is the miter point. pdist is the distance between miter point and p1. */var X=(-S+g)*(-R+T)-(-S+x)*(-R+b),j=(-O+E)*(-I+T)-(-O+x)*(-I+A),H=(F*j-L*X)/U,Y=(B*X-N*j)/U,z=(H-x)*(H-x)+(Y-T)*(Y-T),V=x+(H-x)*M,W=T+(Y-T)*M,q=x-(H-x)*D,K=T-(Y-T)*D,Z=k?M:D;z<=Math.min(F*F+N*N,L*L+B*B)+Z*Z*v?o.join===tR.BEVEL||z/v>m?(k?(f.push(V,W),f.push(x+S*D,T+R*D),f.push(V,W),f.push(x+O*D,T+I*D)):(f.push(x-S*M,T-R*M),f.push(q,K),f.push(x-O*M,T-I*M),f.push(q,K)),d+=2):o.join===tR.ROUND?k?(f.push(V,W),f.push(x+S*D,T+R*D),d+=aU(x,T,x+S*D,T+R*D,x+O*D,T+I*D,f,!0)+4,f.push(V,W),f.push(x+O*D,T+I*D)):(f.push(x-S*M,T-R*M),f.push(q,K),d+=aU(x,T,x-S*M,T-R*M,x-O*M,T-I*M,f,!1)+4,f.push(x-O*M,T-I*M),f.push(q,K)):(f.push(V,W),f.push(q,K)):(f.push(x-S*M,T-R*M),f.push(x+S*D,T+R*D),o.join===tR.ROUND?k?d+=aU(x,T,x+S*D,T+R*D,x+O*D,T+I*D,f,!0)+2:d+=aU(x,T,x-S*M,T-R*M,x-O*M,T-I*M,f,!1)+2:o.join===tR.MITER&&z/v<=m&&(k?(f.push(q,K),f.push(q,K)):(f.push(V,W),f.push(V,W)),d+=2),f.push(x-O*M,T-I*M),f.push(x+O*D,T+I*D),d+=2)}g=i[(p-2)*2],b=i[(p-2)*2+1],x=i[(p-1)*2],P=Math.sqrt((S=-(b-(T=i[(p-1)*2+1])))*S+(R=g-x)*R),S/=P,R/=P,S*=y,R*=y,f.push(x-S*M,T-R*M),f.push(x+S*D,T+R*D),h||(o.cap===tO.ROUND?d+=aU(x-S*(M-D)*.5,T-R*(M-D)*.5,x-S*M,T-R*M,x+S*D,T+R*D,f,!1)+2:o.cap===tO.SQUARE&&(d+=aG(x,T,S,R,M,D,!1,f)));// indices.push(indexStart);
for(var J=e.indices,Q=aw.epsilon*aw.epsilon,C=_;C<d+_-2;++C)g=f[2*C],b=f[2*C+1],x=f[(C+1)*2],T=f[(C+1)*2+1],E=f[(C+2)*2],Math.abs(g*(T-(A=f[(C+2)*2+1]))+x*(A-b)+E*(b-T))<Q||J.push(C,C+1,C+2)}}(t,e)}/**
 * Utilities for arc curves.
 * @private
 */var aX=/** @class */function(){function t(){}return(/**
     * The arcTo() method creates an arc/curve between two tangents on the canvas.
     *
     * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
     * @private
     * @param x1 - The x-coordinate of the beginning of the arc
     * @param y1 - The y-coordinate of the beginning of the arc
     * @param x2 - The x-coordinate of the end of the arc
     * @param y2 - The y-coordinate of the end of the arc
     * @param radius - The radius of the arc
     * @param points -
     * @returns - If the arc length is valid, return center of circle, radius and other info otherwise `null`.
     */t.curveTo=function(t,e,r,i,n,o){var s=o[o.length-2],a=o[o.length-1]-e,h=s-t,u=i-e,l=r-t,c=Math.abs(a*l-h*u);if(c<1e-8||0===n)return(o[o.length-2]!==t||o[o.length-1]!==e)&&o.push(t,e),null;var f=a*a+h*h,p=u*u+l*l,d=a*u+h*l,_=n*Math.sqrt(f)/c,y=n*Math.sqrt(p)/c,v=_*d/f,m=y*d/p,g=_*l+y*h,b=_*u+y*a,x=Math.atan2(a*(y+v)-b,h*(y+v)-g),T=Math.atan2(u*(_+m)-b,l*(_+m)-g);return{cx:g+t,cy:b+e,radius:n,startAngle:x,endAngle:T,anticlockwise:h*u>l*a}},/* eslint-disable max-len *//**
     * The arc method creates an arc/curve (used to create circles, or parts of circles).
     * @private
     * @param _startX - Start x location of arc
     * @param _startY - Start y location of arc
     * @param cx - The x-coordinate of the center of the circle
     * @param cy - The y-coordinate of the center of the circle
     * @param radius - The radius of the circle
     * @param startAngle - The starting angle, in radians (0 is at the 3 o'clock position
     *  of the arc's circle)
     * @param endAngle - The ending angle, in radians
     * @param _anticlockwise - Specifies whether the drawing should be
     *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
     *  indicates counter-clockwise.
     * @param points - Collection of points to add to
     */t.arc=function(t,e,r,i,n,o,s,a,h){for(var u=s-o,l=aw._segmentsCount(Math.abs(u)*n,40*Math.ceil(Math.abs(u)/ng)),c=u/(2*l),f=2*c,p=Math.cos(c),d=Math.sin(c),_=l-1,y=_%1/_,v=0;v<=_;++v){var m=c+o+f*(v+y*v),g=Math.cos(m),b=-Math.sin(m);h.push((p*g+d*b)*n+r,(-(p*b)+d*g)*n+i)}},t)}(),aj=/** @class */function(){function t(){}return(/**
     * Calculate length of bezier curve.
     * Analytical solution is impossible, since it involves an integral that does not integrate in general.
     * Therefore numerical solution is used.
     * @private
     * @param fromX - Starting point x
     * @param fromY - Starting point y
     * @param cpX - Control point x
     * @param cpY - Control point y
     * @param cpX2 - Second Control point x
     * @param cpY2 - Second Control point y
     * @param toX - Destination point x
     * @param toY - Destination point y
     * @returns - Length of bezier curve
     */t.curveLength=function(t,e,r,i,n,o,s,a){for(var h=0,u=0,l=0,c=0,f=0,p=0,d=0,_=0,y=0,v=0,m=0,g=t,b=e,x=1;x<=10;++x)c=(l=(u=x/10)*u)*u,_=(d=(p=(f=1-u)*f)*f)*t+3*p*u*r+3*f*l*n+c*s,y=d*e+3*p*u*i+3*f*l*o+c*a,v=g-_,m=b-y,g=_,b=y,h+=Math.sqrt(v*v+m*m);return h},/**
     * Calculate the points for a bezier curve and then draws it.
     *
     * Ignored from docs since it is not directly exposed.
     * @ignore
     * @param cpX - Control point x
     * @param cpY - Control point y
     * @param cpX2 - Second Control point x
     * @param cpY2 - Second Control point y
     * @param toX - Destination point x
     * @param toY - Destination point y
     * @param points - Path array to push points into
     */t.curveTo=function(e,r,i,n,o,s,a){var h=a[a.length-2],u=a[a.length-1];a.length-=2;var l=aw._segmentsCount(t.curveLength(h,u,e,r,i,n,o,s)),c=0,f=0,p=0,d=0,_=0;a.push(h,u);for(var y=1,v=0;y<=l;++y)p=(f=(c=1-(v=y/l))*c)*c,_=(d=v*v)*v,a.push(p*h+3*f*v*e+3*c*d*i+_*o,p*u+3*f*v*r+3*c*d*n+_*s)},t)}(),aH=/** @class */function(){function t(){}return(/**
     * Calculate length of quadratic curve
     * @see {@link http://www.malczak.linuxpl.com/blog/quadratic-bezier-curve-length/}
     * for the detailed explanation of math behind this.
     * @private
     * @param fromX - x-coordinate of curve start point
     * @param fromY - y-coordinate of curve start point
     * @param cpX - x-coordinate of curve control point
     * @param cpY - y-coordinate of curve control point
     * @param toX - x-coordinate of curve end point
     * @param toY - y-coordinate of curve end point
     * @returns - Length of quadratic curve
     */t.curveLength=function(t,e,r,i,n,o){var s=t-2*r+n,a=e-2*i+o,h=2*r-2*t,u=2*i-2*e,l=4*(s*s+a*a),c=4*(s*h+a*u),f=h*h+u*u,p=2*Math.sqrt(l+c+f),d=Math.sqrt(l),_=2*l*d,y=2*Math.sqrt(f),v=c/d;return(_*p+d*c*(p-y)+(4*f*l-c*c)*Math.log((2*d+v+p)/(v+y)))/(4*_)},/**
     * Calculate the points for a quadratic bezier curve and then draws it.
     * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
     * @private
     * @param cpX - Control point x
     * @param cpY - Control point y
     * @param toX - Destination point x
     * @param toY - Destination point y
     * @param points - Points to add segments to.
     */t.curveTo=function(e,r,i,n,o){for(var s=o[o.length-2],a=o[o.length-1],h=aw._segmentsCount(t.curveLength(s,a,e,r,i,n)),u=0,l=0,c=1;c<=h;++c){var f=c/h;u=s+(e-s)*f,l=a+(r-a)*f,o.push(u+(e+(i-e)*f-u)*f,l+(r+(n-r)*f-l)*f)}},t)}(),aY=/** @class */function(){function t(){this.reset()}return(/**
     * Begin batch part.
     * @param style
     * @param startIndex
     * @param attribStart
     */t.prototype.begin=function(t,e,r){this.reset(),this.style=t,this.start=e,this.attribStart=r},/**
     * End batch part.
     * @param endIndex
     * @param endAttrib
     */t.prototype.end=function(t,e){this.attribSize=e-this.attribStart,this.size=t-this.start},t.prototype.reset=function(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0},t)}(),az=((tI={})[tc.POLY]=aN,tI[tc.CIRC]=aL,tI[tc.ELIP]=aL,tI[tc.RECT]={build:function(t){// --- //
// need to convert points to a nice regular data
//
var e=t.shape,r=e.x,i=e.y,n=e.width,o=e.height,s=t.points;s.length=0,s.push(r,i,r+n,i,r+n,i+o,r,i+o)},triangulate:function(t,e){var r=t.points,i=e.points,n=i.length/2;i.push(r[0],r[1],r[2],r[3],r[6],r[7],r[4],r[5]),e.indices.push(n,n+1,n+2,n+1,n+2,n+3)}},tI[tc.RREC]={build:function(t){if(a0.nextRoundedRectBehavior){aL.build(t);return}var e=t.shape,r=t.points,i=e.x,n=e.y,o=e.width,s=e.height,a=Math.max(0,Math.min(e.radius,Math.min(o,s)/2));r.length=0,a?(aB(i,n+a,i,n,i+a,n,r),aB(i+o-a,n,i+o,n,i+o,n+a,r),aB(i+o,n+s-a,i+o,n+s,i+o-a,n+s,r),aB(i+a,n+s,i,n+s,i,n+s-a,r)):r.push(i,n,i+o,n,i+o,n+s,i,n+s)},triangulate:function(t,e){if(a0.nextRoundedRectBehavior){aL.triangulate(t,e);return}for(var r=t.points,i=e.points,n=e.indices,o=i.length/2,s=/*@__PURE__*/tM(ev)(r,null,2),a=0,h=s.length;a<h;a+=3)n.push(s[a]+o),//     indices.push(triangles[i] + vecPos);
n.push(s[a+1]+o),//   indices.push(triangles[i + 2] + vecPos);
n.push(s[a+2]+o);for(var a=0,h=r.length;a<h;a++)i.push(r[a],r[++a])}},tI),aV=[],aW=[],aq=/** @class */function(){/**
     * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
     * @param fillStyle - the width of the line to draw
     * @param lineStyle - the color of the line to draw
     * @param matrix - Transform matrix
     */function t(t,e,r,i){void 0===e&&(e=null),void 0===r&&(r=null),void 0===i&&(i=null),/** The collection of points. */this.points=[],/** The collection of holes. */this.holes=[],this.shape=t,this.lineStyle=r,this.fillStyle=e,this.matrix=i,this.type=t.type}return(/**
     * Creates a new GraphicsData object with the same values as this one.
     * @returns - Cloned GraphicsData object
     */t.prototype.clone=function(){return new t(this.shape,this.fillStyle,this.lineStyle,this.matrix)},/** Destroys the Graphics data. */t.prototype.destroy=function(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null},t)}(),aK=new nT,aZ=/** @class */function(t){// eslint-disable-next-line @typescript-eslint/no-useless-constructor
function e(){var e=t.call(this)||this;return(/** Minimal distance between points that are considered different. Affects line tesselation. */e.closePointEps=1e-4,/** Padding to add to the bounds. */e.boundsPadding=0,e.uvsFloat32=null,e.indicesUint16=null,e.batchable=!1,/** An array of points to draw, 2 numbers per point */e.points=[],/** The collection of colors */e.colors=[],/** The UVs collection */e.uvs=[],/** The indices of the vertices */e.indices=[],/** Reference to the texture IDs. */e.textureIds=[],/**
         * The collection of drawn shapes.
         * @member {PIXI.GraphicsData[]}
         */e.graphicsData=[],/**
         * List of current draw calls drived from the batches.
         * @member {PIXI.BatchDrawCall[]}
         */e.drawCalls=[],/** Batches need to regenerated if the geometry is updated. */e.batchDirty=-1,/**
         * Intermediate abstract format sent to batch system.
         * Can be converted to drawCalls or to batchable objects.
         * @member {PIXI.graphicsUtils.BatchPart[]}
         */e.batches=[],/** Used to detect if the graphics object has changed. */e.dirty=0,/** Used to check if the cache is dirty. */e.cacheDirty=-1,/** Used to detect if we cleared the graphicsData. */e.clearDirty=0,/** Index of the last batched shape in the stack of calls. */e.shapeIndex=0,/** Cached bounds. */e._bounds=new nk,/** The bounds dirty flag. */e.boundsDirty=-1,e)}return aC(e,t),Object.defineProperty(e.prototype,"bounds",{/**
         * Get the current bounds of the graphic geometry.
         * @readonly
         */get:function(){return this.updateBatches(),this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds},enumerable:!1,configurable:!0}),/** Call if you changed graphicsData manually. Empties all batch buffers. */e.prototype.invalidate=function(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(var t=0;t<this.drawCalls.length;t++)this.drawCalls[t].texArray.clear(),aW.push(this.drawCalls[t]);this.drawCalls.length=0;for(var t=0;t<this.batches.length;t++){var e=this.batches[t];e.reset(),aV.push(e)}this.batches.length=0},/**
     * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
     * @returns - This GraphicsGeometry object. Good for chaining method calls
     */e.prototype.clear=function(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this},/**
     * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
     * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
     * @param fillStyle - Defines style of the fill.
     * @param lineStyle - Defines style of the lines.
     * @param matrix - Transform applied to the points of the shape.
     * @returns - Returns geometry for chaining.
     */e.prototype.drawShape=function(t,e,r,i){void 0===e&&(e=null),void 0===r&&(r=null),void 0===i&&(i=null);var n=new aq(t,e,r,i);return this.graphicsData.push(n),this.dirty++,this},/**
     * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
     * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
     * @param matrix - Transform applied to the points of the shape.
     * @returns - Returns geometry for chaining.
     */e.prototype.drawHole=function(t,e){if(void 0===e&&(e=null),!this.graphicsData.length)return null;var r=new aq(t,null,null,e),i=this.graphicsData[this.graphicsData.length-1];return r.lineStyle=i.lineStyle,i.holes.push(r),this.dirty++,this},/** Destroys the GraphicsGeometry object. */e.prototype.destroy=function(){t.prototype.destroy.call(this);// destroy each of the GraphicsData objects
for(var e=0;e<this.graphicsData.length;++e)this.graphicsData[e].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null},/**
     * Check to see if a point is contained within this geometry.
     * @param point - Point to check if it's contained.
     * @returns {boolean} `true` if the point is contained within geometry.
     */e.prototype.containsPoint=function(t){for(var e=this.graphicsData,r=0;r<e.length;++r){var i=e[r];if(i.fillStyle.visible&&i.shape&&(i.matrix?i.matrix.applyInverse(t,aK):aK.copyFrom(t),i.shape.contains(aK.x,aK.y))){var n=!1;if(i.holes){for(var o=0;o<i.holes.length;o++)if(i.holes[o].shape.contains(aK.x,aK.y)){n=!0;break}}if(!n)return!0}}return!1},/**
     * Generates intermediate batch data. Either gets converted to drawCalls
     * or used to convert to batch objects directly by the Graphics object.
     */e.prototype.updateBatches=function(){if(!this.graphicsData.length){this.batchable=!0;return}if(this.validateBatching()){this.cacheDirty=this.dirty;var t=this.uvs,e=this.graphicsData,r=null,i=null;this.batches.length>0&&(i=(r=this.batches[this.batches.length-1]).style);for(var n=this.shapeIndex;n<e.length;n++){this.shapeIndex++;var o=e[n],s=o.fillStyle,a=o.lineStyle;// build out the shapes points..
az[o.type].build(o),o.matrix&&this.transformPoints(o.points,o.matrix),(s.visible||a.visible)&&this.processHoles(o.holes);for(var h=0;h<2;h++){var u=0===h?s:a;if(u.visible){var l=u.texture.baseTexture,c=this.indices.length,f=this.points.length/2;l.wrapMode=Q.REPEAT,0===h?this.processFill(o):this.processLine(o);var p=this.points.length/2-f;0!==p&&(r&&!this._compareStyles(i,u)&&(r.end(c,f),r=null),r||((r=aV.pop()||new aY).begin(u,c,f),this.batches.push(r),i=u),this.addUvs(this.points,t,u.texture,f,p,u.matrix))}}}var d=this.indices.length,_=this.points.length/2;if(r&&r.end(d,_),0===this.batches.length){// there are no visible styles in GraphicsData
// its possible that someone wants Graphics just for the bounds
this.batchable=!0;return}var y=_>65535;this.indicesUint16&&this.indices.length===this.indicesUint16.length&&y===this.indicesUint16.BYTES_PER_ELEMENT>2?this.indicesUint16.set(this.indices):this.indicesUint16=y?new Uint32Array(this.indices):new Uint16Array(this.indices),// TODO make this a const..
this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}},/**
     * Affinity check
     * @param styleA
     * @param styleB
     */e.prototype._compareStyles=function(t,e){return!!t&&!!e&&t.texture.baseTexture===e.texture.baseTexture&&t.color+t.alpha===e.color+e.alpha&&!!t.native==!!e.native},/** Test geometry for batching process. */e.prototype.validateBatching=function(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(var t=0,e=this.graphicsData.length;t<e;t++){var r=this.graphicsData[t],i=r.fillStyle,n=r.lineStyle;if(i&&!i.texture.baseTexture.valid||n&&!n.texture.baseTexture.valid)return!1}return!0},/** Offset the indices so that it works with the batcher. */e.prototype.packBatches=function(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);for(var t=this.batches,e=0,r=t.length;e<r;e++)for(var i=t[e],n=0;n<i.size;n++){var o=i.start+n;this.indicesUint16[o]=this.indicesUint16[o]-i.attribStart}},/**
     * Checks to see if this graphics geometry can be batched.
     * Currently it needs to be small enough and not contain any native lines.
     */e.prototype.isBatchable=function(){// prevent heavy mesh batching
if(this.points.length>131070)return!1;for(var t=this.batches,r=0;r<t.length;r++)if(t[r].style.native)return!1;return this.points.length<2*e.BATCHABLE_SIZE},/** Converts intermediate batches data to drawCalls. */e.prototype.buildDrawCalls=function(){for(var t=++n9._globalBatch,e=0;e<this.drawCalls.length;e++)this.drawCalls[e].texArray.clear(),aW.push(this.drawCalls[e]);this.drawCalls.length=0;var r=this.colors,i=this.textureIds,n=aW.pop();n||((n=new sM).texArray=new sD),n.texArray.count=0,n.start=0,n.size=0,n.type=V.TRIANGLES;var o=0,s=null,a=0,h=!1,u=V.TRIANGLES,l=0;this.drawCalls.push(n);// TODO - this can be simplified
for(var e=0;e<this.batches.length;e++){var c=this.batches[e],f=c.style,p=f.texture.baseTexture;!!f.native!==h&&(u=(h=!!f.native)?V.LINES:V.TRIANGLES,// force the batch to break!
s=null,o=8,t++),s!==p&&(s=p,p._batchEnabled!==t&&(8===o&&(t++,o=0,n.size>0&&((n=aW.pop())||((n=new sM).texArray=new sD),this.drawCalls.push(n)),n.start=l,n.size=0,n.texArray.count=0,n.type=u),// TODO add this to the render part..
// Hack! Because texture has protected `touched`
p.touched=1,p._batchEnabled=t,p._batchLocation=o,p.wrapMode=Q.REPEAT,n.texArray.elements[n.texArray.count++]=p,o++)),n.size+=c.size,l+=c.size,a=p._batchLocation,this.addColors(r,f.color,f.alpha,c.attribSize,c.attribStart),this.addTextureIds(i,a,c.attribSize,c.attribStart)}n9._globalBatch=t,// upload..
// merge for now!
this.packAttributes()},/** Packs attributes to single buffer. */e.prototype.packAttributes=function(){for(var t=this.points,e=this.uvs,r=this.colors,i=this.textureIds,n=new ArrayBuffer(12*t.length),o=new Float32Array(n),s=new Uint32Array(n),a=0,h=0;h<t.length/2;h++)o[a++]=t[2*h],o[a++]=t[2*h+1],o[a++]=e[2*h],o[a++]=e[2*h+1],s[a++]=r[h],o[a++]=i[h];this._buffer.update(n),this._indexBuffer.update(this.indicesUint16)},/**
     * Process fill part of Graphics.
     * @param data
     */e.prototype.processFill=function(t){t.holes.length?aN.triangulate(t,this):az[t.type].triangulate(t,this)},/**
     * Process line part of Graphics.
     * @param data
     */e.prototype.processLine=function(t){ak(t,this);for(var e=0;e<t.holes.length;e++)ak(t.holes[e],this)},/**
     * Process the holes data.
     * @param holes
     */e.prototype.processHoles=function(t){for(var e=0;e<t.length;e++){var r=t[e];az[r.type].build(r),r.matrix&&this.transformPoints(r.points,r.matrix)}},/** Update the local bounds of the object. Expensive to use performance-wise. */e.prototype.calculateBounds=function(){var t=this._bounds;t.clear(),t.addVertexData(this.points,0,this.points.length),t.pad(this.boundsPadding,this.boundsPadding)},/**
     * Transform points using matrix.
     * @param points - Points to transform
     * @param matrix - Transform matrix
     */e.prototype.transformPoints=function(t,e){for(var r=0;r<t.length/2;r++){var i=t[2*r],n=t[2*r+1];t[2*r]=e.a*i+e.c*n+e.tx,t[2*r+1]=e.b*i+e.d*n+e.ty}},/**
     * Add colors.
     * @param colors - List of colors to add to
     * @param color - Color to add
     * @param alpha - Alpha to use
     * @param size - Number of colors to add
     * @param offset
     */e.prototype.addColors=function(t,e,r,i,n){void 0===n&&(n=0);var o=nn((e>>16)+(65280&e)+((255&e)<<16),r);t.length=Math.max(t.length,n+i);for(var s=0;s<i;s++)t[n+s]=o},/**
     * Add texture id that the shader/fragment wants to use.
     * @param textureIds
     * @param id
     * @param size
     * @param offset
     */e.prototype.addTextureIds=function(t,e,r,i){void 0===i&&(i=0),t.length=Math.max(t.length,i+r);for(var n=0;n<r;n++)t[i+n]=e},/**
     * Generates the UVs for a shape.
     * @param verts - Vertices
     * @param uvs - UVs
     * @param texture - Reference to Texture
     * @param start - Index buffer start index.
     * @param size - The size/length for index buffer.
     * @param matrix - Optional transform for all points.
     */e.prototype.addUvs=function(t,e,r,i,n,o){void 0===o&&(o=null);for(var s=0,a=e.length,h=r.frame;s<n;){var u=t[(i+s)*2],l=t[(i+s)*2+1];if(o){var c=o.a*u+o.c*l+o.tx;l=o.b*u+o.d*l+o.ty,u=c}s++,e.push(u/h.width,l/h.height)}var f=r.baseTexture;(h.width<f.width||h.height<f.height)&&this.adjustUvs(e,r,a,n)},/**
     * Modify uvs array according to position of texture region
     * Does not work with rotated or trimmed textures
     * @param uvs - array
     * @param texture - region
     * @param start - starting index for uvs
     * @param size - how many points to adjust
     */e.prototype.adjustUvs=function(t,e,r,i){for(var n=e.baseTexture,o=r+2*i,s=e.frame,a=s.width/n.width,h=s.height/n.height,u=s.x/s.width,l=s.y/s.height,c=Math.floor(t[r]+1e-6),f=Math.floor(t[r+1]+1e-6),p=r+2;p<o;p+=2)c=Math.min(c,Math.floor(t[p]+1e-6)),f=Math.min(f,Math.floor(t[p+1]+1e-6));u-=c,l-=f;for(var p=r;p<o;p+=2)t[p]=(t[p]+u)*a,t[p+1]=(t[p+1]+l)*h},/**
     * The maximum number of points to consider an object "batchable",
     * able to be batched by the renderer's batch system.
\
     */e.BATCHABLE_SIZE=100,e}(sL),aJ=/** @class */function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return(/** The width (thickness) of any lines drawn. */e.width=0,/** The alignment of any lines drawn (0.5 = middle, 1 = outer, 0 = inner). WebGL only. */e.alignment=.5,/** If true the lines will be draw using LINES instead of TRIANGLE_STRIP. */e.native=!1,/**
         * Line cap style.
         * @member {PIXI.LINE_CAP}
         * @default PIXI.LINE_CAP.BUTT
         */e.cap=tO.BUTT,/**
         * Line join style.
         * @member {PIXI.LINE_JOIN}
         * @default PIXI.LINE_JOIN.MITER
         */e.join=tR.MITER,/** Miter limit. */e.miterLimit=10,e)}return aC(e,t),/** Clones the object. */e.prototype.clone=function(){var t=new e;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t.width=this.width,t.alignment=this.alignment,t.native=this.native,t.cap=this.cap,t.join=this.join,t.miterLimit=this.miterLimit,t},/** Reset the line style to default. */e.prototype.reset=function(){t.prototype.reset.call(this),// Override default line style color
this.color=0,this.alignment=.5,this.width=0,this.native=!1},e}(aM),aQ=new Float32Array(3),a$={},a0=/** @class */function(t){/**
     * @param geometry - Geometry to use, if omitted will create a new GraphicsGeometry instance.
     */function e(e){void 0===e&&(e=null);var r=t.call(this)||this;return(/**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Graphics objects.
         */r.shader=null,/** Renderer plugin for batching */r.pluginName="batch",/**
         * Current path
         * @readonly
         */r.currentPath=null,/** A collections of batches! These can be drawn by the renderer batch system. */r.batches=[],/** Update dirty for limiting calculating tints for batches. */r.batchTint=-1,/** Update dirty for limiting calculating batches.*/r.batchDirty=-1,/** Copy of the object vertex data. */r.vertexData=null,/** Current fill style. */r._fillStyle=new aM,/** Current line style. */r._lineStyle=new aJ,/** Current shape transform matrix. */r._matrix=null,/** Current hole mode is enabled. */r._holeMode=!1,/**
         * Represents the WebGL state the Graphics required to render, excludes shader and geometry. E.g.,
         * blend mode, culling, depth testing, direction of rendering triangles, backface, etc.
         */r.state=o9.for2d(),r._geometry=e||new aZ,r._geometry.refCount++,/**
         * When cacheAsBitmap is set to true the graphics object will be rendered as if it was a sprite.
         * This is useful if your graphics element does not change often, as it will speed up the rendering
         * of the object in exchange for taking up texture memory. It is also useful if you need the graphics
         * object to be anti-aliased, because it will be rendered using canvas. This is not recommended if
         * you are constantly redrawing the graphics element.
         * @name cacheAsBitmap
         * @member {boolean}
         * @memberof PIXI.Graphics#
         * @default false
         */r._transformID=-1,// Set default
r.tint=16777215,r.blendMode=z.NORMAL,r)}return aC(e,t),Object.defineProperty(e.prototype,"geometry",{/**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh or Graphics objects.
         * @readonly
         */get:function(){return this._geometry},enumerable:!1,configurable:!0}),/**
     * Creates a new Graphics object with the same values as this one.
     * Note that only the geometry of the object is cloned, not its transform (position,scale,etc)
     * @returns - A clone of the graphics object
     */e.prototype.clone=function(){return this.finishPoly(),new e(this._geometry)},Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},/**
         * The blend mode to be applied to the graphic shape. Apply a value of
         * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.  Note that, since each
         * primitive in the GraphicsGeometry list is rendered sequentially, modes
         * such as `PIXI.BLEND_MODES.ADD` and `PIXI.BLEND_MODES.MULTIPLY` will
         * be applied per-primitive.
         * @default PIXI.BLEND_MODES.NORMAL
         */set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{/**
         * The tint applied to each graphic shape. This is a hex value. A value of
         * 0xFFFFFF will remove any tint effect.
         * @default 0xFFFFFF
         */get:function(){return this._tint},set:function(t){this._tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fill",{/**
         * The current fill style.
         * @readonly
         */get:function(){return this._fillStyle},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"line",{/**
         * The current line style.
         * @readonly
         */get:function(){return this._lineStyle},enumerable:!1,configurable:!0}),e.prototype.lineStyle=function(t,e,r,i,n){return void 0===t&&(t=null),void 0===e&&(e=0),void 0===r&&(r=1),void 0===i&&(i=.5),void 0===n&&(n=!1),"number"==typeof t&&(t={width:t,color:e,alpha:r,alignment:i,native:n}),this.lineTextureStyle(t)},/**
     * Like line style but support texture for line fill.
     * @param [options] - Collection of options for setting line style.
     * @param {number} [options.width=0] - width of the line to draw, will update the objects stored style
     * @param {PIXI.Texture} [options.texture=PIXI.Texture.WHITE] - Texture to use
     * @param {number} [options.color=0x0] - color of the line to draw, will update the objects stored style.
     *  Default 0xFFFFFF if texture present.
     * @param {number} [options.alpha=1] - alpha of the line to draw, will update the objects stored style
     * @param {PIXI.Matrix} [options.matrix=null] - Texture matrix to transform texture
     * @param {number} [options.alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outer).
     *        WebGL only.
     * @param {boolean} [options.native=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
     * @param {PIXI.LINE_CAP}[options.cap=PIXI.LINE_CAP.BUTT] - line cap style
     * @param {PIXI.LINE_JOIN}[options.join=PIXI.LINE_JOIN.MITER] - line join style
     * @param {number}[options.miterLimit=10] - miter limit ratio
     * @returns {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */e.prototype.lineTextureStyle=function(t){// Apply defaults
t=Object.assign({width:0,texture:o_.WHITE,color:t&&t.texture?16777215:0,alpha:1,matrix:null,alignment:.5,native:!1,cap:tO.BUTT,join:tR.MITER,miterLimit:10},t),this.currentPath&&this.startPoly();var e=t.width>0&&t.alpha>0;return e?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._lineStyle,{visible:e},t)):this._lineStyle.reset(),this},/**
     * Start a polygon object internally.
     * @protected
     */e.prototype.startPoly=function(){if(this.currentPath){var t=this.currentPath.points,e=this.currentPath.points.length;e>2&&(this.drawShape(this.currentPath),this.currentPath=new nO,this.currentPath.closeStroke=!1,this.currentPath.points.push(t[e-2],t[e-1]))}else this.currentPath=new nO,this.currentPath.closeStroke=!1},/**
     * Finish the polygon object.
     * @protected
     */e.prototype.finishPoly=function(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)},/**
     * Moves the current drawing position to x, y.
     * @param x - the X coordinate to move to
     * @param y - the Y coordinate to move to
     * @returns - This Graphics object. Good for chaining method calls
     */e.prototype.moveTo=function(t,e){return this.startPoly(),this.currentPath.points[0]=t,this.currentPath.points[1]=e,this},/**
     * Draws a line using the current line style from the current drawing position to (x, y);
     * The current drawing position is then set to (x, y).
     * @param x - the X coordinate to draw to
     * @param y - the Y coordinate to draw to
     * @returns - This Graphics object. Good for chaining method calls
     */e.prototype.lineTo=function(t,e){this.currentPath||this.moveTo(0,0);// remove duplicates..
var r=this.currentPath.points,i=r[r.length-2],n=r[r.length-1];return(i!==t||n!==e)&&r.push(t,e),this},/**
     * Initialize the curve
     * @param x
     * @param y
     */e.prototype._initCurve=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.currentPath?0===this.currentPath.points.length&&(this.currentPath.points=[t,e]):this.moveTo(t,e)},/**
     * Calculate the points for a quadratic bezier curve and then draws it.
     * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
     * @param cpX - Control point x
     * @param cpY - Control point y
     * @param toX - Destination point x
     * @param toY - Destination point y
     * @returns - This Graphics object. Good for chaining method calls
     */e.prototype.quadraticCurveTo=function(t,e,r,i){this._initCurve();var n=this.currentPath.points;return 0===n.length&&this.moveTo(0,0),aH.curveTo(t,e,r,i,n),this},/**
     * Calculate the points for a bezier curve and then draws it.
     * @param cpX - Control point x
     * @param cpY - Control point y
     * @param cpX2 - Second Control point x
     * @param cpY2 - Second Control point y
     * @param toX - Destination point x
     * @param toY - Destination point y
     * @returns This Graphics object. Good for chaining method calls
     */e.prototype.bezierCurveTo=function(t,e,r,i,n,o){return this._initCurve(),aj.curveTo(t,e,r,i,n,o,this.currentPath.points),this},/**
     * The arcTo() method creates an arc/curve between two tangents on the canvas.
     *
     * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
     * @param x1 - The x-coordinate of the first tangent point of the arc
     * @param y1 - The y-coordinate of the first tangent point of the arc
     * @param x2 - The x-coordinate of the end of the arc
     * @param y2 - The y-coordinate of the end of the arc
     * @param radius - The radius of the arc
     * @returns - This Graphics object. Good for chaining method calls
     */e.prototype.arcTo=function(t,e,r,i,n){this._initCurve(t,e);var o=this.currentPath.points,s=aX.curveTo(t,e,r,i,n,o);if(s){var a=s.cx,h=s.cy,u=s.radius,l=s.startAngle,c=s.endAngle,f=s.anticlockwise;this.arc(a,h,u,l,c,f)}return this},/**
     * The arc method creates an arc/curve (used to create circles, or parts of circles).
     * @param cx - The x-coordinate of the center of the circle
     * @param cy - The y-coordinate of the center of the circle
     * @param radius - The radius of the circle
     * @param startAngle - The starting angle, in radians (0 is at the 3 o'clock position
     *  of the arc's circle)
     * @param endAngle - The ending angle, in radians
     * @param anticlockwise - Specifies whether the drawing should be
     *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
     *  indicates counter-clockwise.
     * @returns - This Graphics object. Good for chaining method calls
     */e.prototype.arc=function(t,e,r,i,n,o){if(void 0===o&&(o=!1),i===n||(!o&&n<=i?n+=ng:o&&i<=n&&(i+=ng),0==n-i))return this;var s=t+Math.cos(i)*r,a=e+Math.sin(i)*r,h=this._geometry.closePointEps,u=this.currentPath?this.currentPath.points:null;if(u){// TODO: make a better fix.
// We check how far our start is from the last existing point
var l=Math.abs(u[u.length-2]-s),c=Math.abs(u[u.length-1]-a);l<h&&c<h||u.push(s,a)}else this.moveTo(s,a),u=this.currentPath.points;return aX.arc(s,a,t,e,r,i,n,o,u),this},/**
     * Specifies a simple one-color fill that subsequent calls to other Graphics methods
     * (such as lineTo() or drawCircle()) use when drawing.
     * @param color - the color of the fill
     * @param alpha - the alpha of the fill
     * @returns - This Graphics object. Good for chaining method calls
     */e.prototype.beginFill=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=1),this.beginTextureFill({texture:o_.WHITE,color:t,alpha:e})},/**
     * Begin the texture fill
     * @param options - Object object.
     * @param {PIXI.Texture} [options.texture=PIXI.Texture.WHITE] - Texture to fill
     * @param {number} [options.color=0xffffff] - Background to fill behind texture
     * @param {number} [options.alpha=1] - Alpha of fill
     * @param {PIXI.Matrix} [options.matrix=null] - Transform matrix
     * @returns {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */e.prototype.beginTextureFill=function(t){// Apply defaults
t=Object.assign({texture:o_.WHITE,color:16777215,alpha:1,matrix:null},t),this.currentPath&&this.startPoly();var e=t.alpha>0;return e?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._fillStyle,{visible:e},t)):this._fillStyle.reset(),this},/**
     * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
     * @returns - This Graphics object. Good for chaining method calls
     */e.prototype.endFill=function(){return this.finishPoly(),this._fillStyle.reset(),this},/**
     * Draws a rectangle shape.
     * @param x - The X coord of the top-left of the rectangle
     * @param y - The Y coord of the top-left of the rectangle
     * @param width - The width of the rectangle
     * @param height - The height of the rectangle
     * @returns - This Graphics object. Good for chaining method calls
     */e.prototype.drawRect=function(t,e,r,i){return this.drawShape(new nA(t,e,r,i))},/**
     * Draw a rectangle shape with rounded/beveled corners.
     * @param x - The X coord of the top-left of the rectangle
     * @param y - The Y coord of the top-left of the rectangle
     * @param width - The width of the rectangle
     * @param height - The height of the rectangle
     * @param radius - Radius of the rectangle corners
     * @returns - This Graphics object. Good for chaining method calls
     */e.prototype.drawRoundedRect=function(t,e,r,i,n){return this.drawShape(new nI(t,e,r,i,n))},/**
     * Draws a circle.
     * @param x - The X coordinate of the center of the circle
     * @param y - The Y coordinate of the center of the circle
     * @param radius - The radius of the circle
     * @returns - This Graphics object. Good for chaining method calls
     */e.prototype.drawCircle=function(t,e,r){return this.drawShape(new nS(t,e,r))},/**
     * Draws an ellipse.
     * @param x - The X coordinate of the center of the ellipse
     * @param y - The Y coordinate of the center of the ellipse
     * @param width - The half width of the ellipse
     * @param height - The half height of the ellipse
     * @returns - This Graphics object. Good for chaining method calls
     */e.prototype.drawEllipse=function(t,e,r,i){return this.drawShape(new nR(t,e,r,i))},/**
     * Draws a polygon using the given path.
     * @param {number[]|PIXI.IPointData[]|PIXI.Polygon} path - The path data used to construct the polygon.
     * @returns - This Graphics object. Good for chaining method calls
     */e.prototype.drawPolygon=function(){for(var t,e=arguments,r=[],i=0;i<arguments.length;i++)r[i]=e[i];var n=!0,o=r[0];o.points?(n=o.closeStroke,t=o.points):t=Array.isArray(r[0])?r[0]:r;var s=new nO(t);return s.closeStroke=n,this.drawShape(s),this},/**
     * Draw any shape.
     * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - Shape to draw
     * @returns - This Graphics object. Good for chaining method calls
     */e.prototype.drawShape=function(t){return this._holeMode?this._geometry.drawHole(t,this._matrix):this._geometry.drawShape(t,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this},/**
     * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
     * @returns - This Graphics object. Good for chaining method calls
     */e.prototype.clear=function(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this},/**
     * True if graphics consists of one rectangle, and thus, can be drawn like a Sprite and
     * masked with gl.scissor.
     * @returns - True if only 1 rect.
     */e.prototype.isFastRect=function(){var t=this._geometry.graphicsData;return 1===t.length&&t[0].shape.type===tc.RECT&&!t[0].matrix&&!t[0].holes.length&&!(t[0].lineStyle.visible&&t[0].lineStyle.width)},/**
     * Renders the object using the WebGL renderer
     * @param renderer - The renderer
     */e.prototype._render=function(t){this.finishPoly();var e=this._geometry;// batch part..
// batch it!
e.updateBatches(),e.batchable?(this.batchDirty!==e.batchDirty&&this._populateBatches(),this._renderBatched(t)):(// no batching...
t.batch.flush(),this._renderDirect(t))},/** Populating batches for rendering. */e.prototype._populateBatches=function(){var t=this._geometry,e=this.blendMode,r=t.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=t.batchDirty,this.batches.length=r,this.vertexData=new Float32Array(t.points);for(var i=0;i<r;i++){var n=t.batches[i],o=n.style.color,s=new Float32Array(this.vertexData.buffer,8*n.attribStart,2*n.attribSize),a=new Float32Array(t.uvsFloat32.buffer,8*n.attribStart,2*n.attribSize),h={vertexData:s,blendMode:e,indices:new Uint16Array(t.indicesUint16.buffer,2*n.start,n.size),uvs:a,_batchRGB:nt(o),_tintRGB:o,_texture:n.style.texture,alpha:n.style.alpha,worldAlpha:1};this.batches[i]=h}},/**
     * Renders the batches using the BathedRenderer plugin
     * @param renderer - The renderer
     */e.prototype._renderBatched=function(t){if(this.batches.length){t.batch.setObjectRenderer(t.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(var e=0,r=this.batches.length;e<r;e++){var i=this.batches[e];i.worldAlpha=this.worldAlpha*i.alpha,t.plugins[this.pluginName].render(i)}}},/**
     * Renders the graphics direct
     * @param renderer - The renderer
     */e.prototype._renderDirect=function(t){var e=this._resolveDirectShader(t),r=this._geometry,i=this.tint,n=this.worldAlpha,o=e.uniforms,s=r.drawCalls;// lets set the transfomr
o.translationMatrix=this.transform.worldTransform,// and then lets set the tint..
o.tint[0]=(i>>16&255)/255*n,o.tint[1]=(i>>8&255)/255*n,o.tint[2]=(255&i)/255*n,o.tint[3]=n,// the first draw call, we can set the uniforms of the shader directly here.
// this means that we can tack advantage of the sync function of pixi!
// bind and sync uniforms..
// there is a way to optimise this..
t.shader.bind(e),t.geometry.bind(r,e),// set state..
t.state.set(this.state);// then render the rest of them...
for(var a=0,h=s.length;a<h;a++)this._renderDrawCallDirect(t,r.drawCalls[a])},/**
     * Renders specific DrawCall
     * @param renderer
     * @param drawCall
     */e.prototype._renderDrawCallDirect=function(t,e){for(var r=e.texArray,i=e.type,n=e.size,o=e.start,s=r.count,a=0;a<s;a++)t.texture.bind(r.elements[a],a);t.geometry.draw(i,n,o)},/**
     * Resolves shader for direct rendering
     * @param renderer - The renderer
     */e.prototype._resolveDirectShader=function(t){var e=this.shader,r=this.pluginName;if(!e){// if there is no shader here, we can use the default shader.
// and that only gets created if we actually need it..
// but may be more than one plugins for graphics
if(!a$[r]){for(var i=t.plugins[r].MAX_TEXTURES,n=new Int32Array(i),o=0;o<i;o++)n[o]=o;var s={tint:new Float32Array([1,1,1,1]),translationMatrix:new nw,default:oP.from({uSamplers:n},!0)},a=t.plugins[r]._shader.program;a$[r]=new o5(a,s)}e=a$[r]}return e},/** Retrieves the bounds of the graphic shape as a rectangle object. */e.prototype._calculateBounds=function(){this.finishPoly();var t=this._geometry;// skipping when graphics is empty, like a container
if(t.graphicsData.length){var e=t.bounds,r=e.minX,i=e.minY,n=e.maxX,o=e.maxY;this._bounds.addFrame(this.transform,r,i,n,o)}},/**
     * Tests if a point is inside this graphics object
     * @param point - the point to test
     * @returns - the result of the test
     */e.prototype.containsPoint=function(t){return this.worldTransform.applyInverse(t,e._TEMP_POINT),this._geometry.containsPoint(e._TEMP_POINT)},/** Recalculate the tint by applying tint to batches using Graphics tint. */e.prototype.calculateTints=function(){if(this.batchTint!==this.tint){this.batchTint=this.tint;for(var t=nt(this.tint,aQ),e=0;e<this.batches.length;e++){var r=this.batches[e],i=r._batchRGB,n=(t[0]*i[0]*255<<16)+(t[1]*i[1]*255<<8)+(0|t[2]*i[2]*255);r._tintRGB=(n>>16)+(65280&n)+((255&n)<<16)}}},/** If there's a transform update or a change to the shape of the geometry, recalculate the vertices. */e.prototype.calculateVertices=function(){var t=this.transform._worldID;if(this._transformID!==t){this._transformID=t;for(var e=this.transform.worldTransform,r=e.a,i=e.b,n=e.c,o=e.d,s=e.tx,a=e.ty,h=this._geometry.points,u=this.vertexData,l=0,c=0;c<h.length;c+=2){var f=h[c],p=h[c+1];u[l++]=r*f+n*p+s,u[l++]=o*p+i*f+a}}},/**
     * Closes the current path.
     * @returns - Returns itself.
     */e.prototype.closePath=function(){var t=this.currentPath;return t&&(// we don't need to add extra point in the end because buildLine will take care of that
t.closeStroke=!0,// ensure that the polygon is completed, and is available for hit detection
// (even if the graphics is not rendered yet)
this.finishPoly()),this},/**
     * Apply a matrix to the positional data.
     * @param matrix - Matrix to use for transform current shape.
     * @returns - Returns itself.
     */e.prototype.setMatrix=function(t){return this._matrix=t,this},/**
     * Begin adding holes to the last draw shape
     * IMPORTANT: holes must be fully inside a shape to work
     * Also weirdness ensues if holes overlap!
     * Ellipses, Circles, Rectangles and Rounded Rectangles cannot be holes or host for holes in CanvasRenderer,
     * please use `moveTo` `lineTo`, `quadraticCurveTo` if you rely on pixi-legacy bundle.
     * @returns - Returns itself.
     */e.prototype.beginHole=function(){return this.finishPoly(),this._holeMode=!0,this},/**
     * End adding holes to the last draw shape.
     * @returns - Returns itself.
     */e.prototype.endHole=function(){return this.finishPoly(),this._holeMode=!1,this},/**
     * Destroys the Graphics object.
     * @param options - Options parameter. A boolean will act as if all
     *  options have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have
     *  their destroy method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the texture of the child sprite
     * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the base texture of the child sprite
     */e.prototype.destroy=function(e){this._geometry.refCount--,0===this._geometry.refCount&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,t.prototype.destroy.call(this,e)},/**
     * New rendering behavior for rounded rectangles: circular arcs instead of quadratic bezier curves.
     * In the next major release, we'll enable this by default.
     */e.nextRoundedRectBehavior=!1,/**
     * Temporary point to use for containsPoint.
     * @private
     */e._TEMP_POINT=new nT,e}(nV),a1=function(t,e){return(a1=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},a2=new nT,a3=new Uint16Array([0,1,2,0,2,3]),a4=/** @class */function(t){/** @param texture - The texture for this sprite. */function e(e){var r=t.call(this)||this;return r._anchor=new nP(r._onAnchorUpdate,r,e?e.defaultAnchor.x:0,e?e.defaultAnchor.y:0),r._texture=null,r._width=0,r._height=0,r._tint=null,r._tintRGB=null,r.tint=16777215,r.blendMode=z.NORMAL,r._cachedTint=16777215,r.uvs=null,// call texture setter
r.texture=e||o_.EMPTY,r.vertexData=new Float32Array(8),r.vertexTrimmedData=null,r._transformID=-1,r._textureID=-1,r._transformTrimmedID=-1,r._textureTrimmedID=-1,// Batchable stuff..
// TODO could make this a mixin?
r.indices=a3,r.pluginName="batch",/**
         * Used to fast check if a sprite is.. a sprite!
         * @member {boolean}
         */r.isSprite=!0,r._roundPixels=eh.ROUND_PIXELS,r}return!function(t,e){function r(){this.constructor=t}a1(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),/** When the texture is updated, this event will fire to update the scale and frame. */e.prototype._onTextureUpdate=function(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=nl(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=nl(this.scale.y)*this._height/this._texture.orig.height)},/** Called when the anchor position updates. */e.prototype._onAnchorUpdate=function(){this._transformID=-1,this._transformTrimmedID=-1},/** Calculates worldTransform * vertices, store it in vertexData. */e.prototype.calculateVertices=function(){var t=this._texture;if(this._transformID!==this.transform._worldID||this._textureID!==t._updateID){this._textureID!==t._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=t._updateID;// set the vertex data
var e=this.transform.worldTransform,r=e.a,i=e.b,n=e.c,o=e.d,s=e.tx,a=e.ty,h=this.vertexData,u=t.trim,l=t.orig,c=this._anchor,f=0,p=0,d=0,_=0;if(u?(f=// if the sprite is trimmed and is not a tilingsprite then we need to add the extra
// space before transforming the sprite coords.
(p=u.x-c._x*l.width)+u.width,d=(_=u.y-c._y*l.height)+u.height):(f=(p=-c._x*l.width)+l.width,d=(_=-c._y*l.height)+l.height),// xy
h[0]=r*p+n*_+s,h[1]=o*_+i*p+a,// xy
h[2]=r*f+n*_+s,h[3]=o*_+i*f+a,// xy
h[4]=r*f+n*d+s,h[5]=o*d+i*f+a,// xy
h[6]=r*p+n*d+s,h[7]=o*d+i*p+a,this._roundPixels)for(var y=eh.RESOLUTION,v=0;v<h.length;++v)h[v]=Math.round((h[v]*y|0)/y)}},/**
     * Calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData.
     *
     * This is used to ensure that the true width and height of a trimmed texture is respected.
     */e.prototype.calculateTrimmedVertices=function(){if(this.vertexTrimmedData){if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return}else this.vertexTrimmedData=new Float32Array(8);this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;// lets do some special trim code!
var t=this._texture,e=this.vertexTrimmedData,r=t.orig,i=this._anchor,n=this.transform.worldTransform,o=n.a,s=n.b,a=n.c,h=n.d,u=n.tx,l=n.ty,c=-i._x*r.width,f=c+r.width,p=-i._y*r.height,d=p+r.height;// xy
e[0]=o*c+a*p+u,e[1]=h*p+s*c+l,// xy
e[2]=o*f+a*p+u,e[3]=h*p+s*f+l,// xy
e[4]=o*f+a*d+u,e[5]=h*d+s*f+l,// xy
e[6]=o*c+a*d+u,e[7]=h*d+s*c+l},/**
     *
     * Renders the object using the WebGL renderer
     * @param renderer - The webgl renderer to use.
     */e.prototype._render=function(t){this.calculateVertices(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this)},/** Updates the bounds of the sprite. */e.prototype._calculateBounds=function(){var t=this._texture.trim,e=this._texture.orig;// First lets check to see if the current texture has a trim..
t&&(t.width!==e.width||t.height!==e.height)?(// lets calculate a special trimmed bounds...
this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData)):(// no trim! lets use the usual calculations..
this.calculateVertices(),this._bounds.addQuad(this.vertexData))},/**
     * Gets the local bounds of the sprite object.
     * @param rect - Optional output rectangle.
     * @returns The bounds.
     */e.prototype.getLocalBounds=function(e){return(// we can do a fast local bounds if the sprite has no children!
0===this.children.length?(this._localBounds||(this._localBounds=new nk),this._localBounds.minX=-(this._texture.orig.width*this._anchor._x),this._localBounds.minY=-(this._texture.orig.height*this._anchor._y),this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),e||(this._localBoundsRect||(this._localBoundsRect=new nA),e=this._localBoundsRect),this._localBounds.getRectangle(e)):t.prototype.getLocalBounds.call(this,e))},/**
     * Tests if a point is inside this sprite
     * @param point - the point to test
     * @returns The result of the test
     */e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,a2);var e=this._texture.orig.width,r=this._texture.orig.height,i=-e*this.anchor.x,n=0;return a2.x>=i&&a2.x<i+e&&(n=-r*this.anchor.y,a2.y>=n&&a2.y<n+r)},/**
     * Destroys this sprite and optionally its texture and children.
     * @param options - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param [options.children=false] - if set to true, all the children will have their destroy
     *      method called as well. 'options' will be passed on to those calls.
     * @param [options.texture=false] - Should it destroy the current texture of the sprite as well
     * @param [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
     */e.prototype.destroy=function(e){if(t.prototype.destroy.call(this,e),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null,"boolean"==typeof e?e:e&&e.texture){var r="boolean"==typeof e?e:e&&e.baseTexture;this._texture.destroy(!!r)}this._texture=null},// some helper functions..
/**
     * Helper function that creates a new sprite based on the source you provide.
     * The source can be - frame id, image url, video url, canvas element, video element, base texture
     * @param {string|PIXI.Texture|HTMLCanvasElement|HTMLVideoElement} source - Source to create texture from
     * @param {object} [options] - See {@link PIXI.BaseTexture}'s constructor for options.
     * @returns The newly created sprite
     */e.from=function(t,r){var i=t instanceof o_?t:o_.from(t,r);return new e(i)},Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},/**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         *
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         *
         * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}.
         * @default false
         */set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{/** The width of the sprite, setting this will actually modify the scale to achieve the value set. */get:function(){return Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){var e=nl(this.scale.x)||1;this.scale.x=e*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{/** The height of the sprite, setting this will actually modify the scale to achieve the value set. */get:function(){return Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){var e=nl(this.scale.y)||1;this.scale.y=e*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{/**
         * The anchor sets the origin point of the sprite. The default value is taken from the {@link PIXI.Texture|Texture}
         * and passed to the constructor.
         *
         * The default is `(0,0)`, this means the sprite's origin is the top left.
         *
         * Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.
         *
         * Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.
         *
         * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
         */get:function(){return this._anchor},set:function(t){this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{/**
         * The tint applied to the sprite. This is a hex value.
         *
         * A value of 0xFFFFFF will remove any tint effect.
         * @default 0xFFFFFF
         */get:function(){return this._tint},set:function(t){this._tint=t,this._tintRGB=(t>>16)+(65280&t)+((255&t)<<16)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"texture",{/** The texture that the sprite is using. */get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=t||o_.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,t&&(t.baseTexture.valid?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))},enumerable:!1,configurable:!0}),e}(nV),a8=function(t,e){return(a8=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};(k=tP||(tP={}))[k.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",k[k.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL";// disabling eslint for now, going to rewrite this in v5
var a6={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:tP.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100,leading:0},a5=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],a9=/** @class */function(){/**
     * @param {object} [style] - The style parameters
     * @param {string} [style.align='left'] - Alignment for multiline text ('left', 'center' or 'right'),
     *  does not affect single line text
     * @param {boolean} [style.breakWords=false] - Indicates if lines can be wrapped within words, it
     *  needs wordWrap to be set to true
     * @param {boolean} [style.dropShadow=false] - Set a drop shadow for the text
     * @param {number} [style.dropShadowAlpha=1] - Set alpha for the drop shadow
     * @param {number} [style.dropShadowAngle=Math.PI/6] - Set a angle of the drop shadow
     * @param {number} [style.dropShadowBlur=0] - Set a shadow blur radius
     * @param {string|number} [style.dropShadowColor='black'] - A fill style to be used on the dropshadow e.g 'red', '#00FF00'
     * @param {number} [style.dropShadowDistance=5] - Set a distance of the drop shadow
     * @param {string|string[]|number|number[]|CanvasGradient|CanvasPattern} [style.fill='black'] - A canvas
     *  fillstyle that will be used on the text e.g 'red', '#00FF00'. Can be an array to create a gradient
     *  eg ['#000000','#FFFFFF']
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|MDN}
     * @param {number} [style.fillGradientType=PIXI.TEXT_GRADIENT.LINEAR_VERTICAL] - If fill is an array of colours
     *  to create a gradient, this can change the type/direction of the gradient. See {@link PIXI.TEXT_GRADIENT}
     * @param {number[]} [style.fillGradientStops] - If fill is an array of colours to create a gradient, this array can set
     * the stop points (numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.
     * @param {string|string[]} [style.fontFamily='Arial'] - The font family
     * @param {number|string} [style.fontSize=26] - The font size (as a number it converts to px, but as a string,
     *  equivalents are '26px','20pt','160%' or '1.6em')
     * @param {string} [style.fontStyle='normal'] - The font style ('normal', 'italic' or 'oblique')
     * @param {string} [style.fontVariant='normal'] - The font variant ('normal' or 'small-caps')
     * @param {string} [style.fontWeight='normal'] - The font weight ('normal', 'bold', 'bolder', 'lighter' and '100',
     *  '200', '300', '400', '500', '600', '700', '800' or '900')
     * @param {number} [style.leading=0] - The space between lines
     * @param {number} [style.letterSpacing=0] - The amount of spacing between letters, default is 0
     * @param {number} [style.lineHeight] - The line height, a number that represents the vertical space that a letter uses
     * @param {string} [style.lineJoin='miter'] - The lineJoin property sets the type of corner created, it can resolve
     *      spiked text issues. Possible values "miter" (creates a sharp corner), "round" (creates a round corner) or "bevel"
     *      (creates a squared corner).
     * @param {number} [style.miterLimit=10] - The miter limit to use when using the 'miter' lineJoin mode. This can reduce
     *      or increase the spikiness of rendered text.
     * @param {number} [style.padding=0] - Occasionally some fonts are cropped. Adding some padding will prevent this from
     *     happening by adding padding to all sides of the text.
     * @param {string|number} [style.stroke='black'] - A canvas fillstyle that will be used on the text stroke
     *  e.g 'blue', '#FCFF00'
     * @param {number} [style.strokeThickness=0] - A number that represents the thickness of the stroke.
     *  Default is 0 (no stroke)
     * @param {boolean} [style.trim=false] - Trim transparent borders
     * @param {string} [style.textBaseline='alphabetic'] - The baseline of the text that is rendered.
     * @param {string} [style.whiteSpace='pre'] - Determines whether newlines & spaces are collapsed or preserved "normal"
     *      (collapse, collapse), "pre" (preserve, preserve) | "pre-line" (preserve, collapse). It needs wordWrap to be set to true
     * @param {boolean} [style.wordWrap=false] - Indicates if word wrap should be used
     * @param {number} [style.wordWrapWidth=100] - The width at which text will wrap, it needs wordWrap to be set to true
     */function t(t){this.styleID=0,this.reset(),he(this,t,t)}return(/**
     * Creates a new TextStyle object with the same values as this one.
     * Note that the only the properties of the object are cloned.
     *
     * @return New cloned TextStyle object
     */t.prototype.clone=function(){var e={};return he(e,this,a6),new t(e)},/** Resets all properties to the defaults specified in TextStyle.prototype._default */t.prototype.reset=function(){he(this,a6,a6)},Object.defineProperty(t.prototype,"align",{/**
         * Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
         *
         * @member {string}
         */get:function(){return this._align},set:function(t){this._align!==t&&(this._align=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"breakWords",{/** Indicates if lines can be wrapped within words, it needs wordWrap to be set to true. */get:function(){return this._breakWords},set:function(t){this._breakWords!==t&&(this._breakWords=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dropShadow",{/** Set a drop shadow for the text. */get:function(){return this._dropShadow},set:function(t){this._dropShadow!==t&&(this._dropShadow=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dropShadowAlpha",{/** Set alpha for the drop shadow. */get:function(){return this._dropShadowAlpha},set:function(t){this._dropShadowAlpha!==t&&(this._dropShadowAlpha=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dropShadowAngle",{/** Set a angle of the drop shadow. */get:function(){return this._dropShadowAngle},set:function(t){this._dropShadowAngle!==t&&(this._dropShadowAngle=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dropShadowBlur",{/** Set a shadow blur radius. */get:function(){return this._dropShadowBlur},set:function(t){this._dropShadowBlur!==t&&(this._dropShadowBlur=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dropShadowColor",{/** A fill style to be used on the dropshadow e.g 'red', '#00FF00'. */get:function(){return this._dropShadowColor},set:function(t){var e=ht(t);this._dropShadowColor!==e&&(this._dropShadowColor=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dropShadowDistance",{/** Set a distance of the drop shadow. */get:function(){return this._dropShadowDistance},set:function(t){this._dropShadowDistance!==t&&(this._dropShadowDistance=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fill",{/**
         * A canvas fillstyle that will be used on the text e.g 'red', '#00FF00'.
         *
         * Can be an array to create a gradient eg ['#000000','#FFFFFF']
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|MDN}
         *
         * @member {string|string[]|number|number[]|CanvasGradient|CanvasPattern}
         */get:function(){return this._fill},set:function(t){// TODO: Can't have different types for getter and setter. The getter shouldn't have the number type as
//       the setter converts to string. See this thread for more details:
//       https://github.com/microsoft/TypeScript/issues/2521
// TODO: Not sure if getColor works properly with CanvasGradient and/or CanvasPattern, can't pass in
//       without casting here.
var e=ht(t);this._fill!==e&&(this._fill=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fillGradientType",{/**
         * If fill is an array of colours to create a gradient, this can change the type/direction of the gradient.
         *
         * @see PIXI.TEXT_GRADIENT
         */get:function(){return this._fillGradientType},set:function(t){this._fillGradientType!==t&&(this._fillGradientType=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fillGradientStops",{/**
         * If fill is an array of colours to create a gradient, this array can set the stop points
         * (numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.
         */get:function(){return this._fillGradientStops},set:function(t){!/**
 * Utility function to convert hexadecimal colors to strings, and simply return the color if it's a string.
 * This version can also convert array of colors
 * @private
 * @param array1 - First array to compare
 * @param array2 - Second array to compare
 * @return Do the arrays contain the same values in the same order
 */function(t,e){if(!Array.isArray(t)||!Array.isArray(e)||t.length!==e.length)return!1;for(var r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0}(this._fillGradientStops,t)&&(this._fillGradientStops=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontFamily",{/** The font family. */get:function(){return this._fontFamily},set:function(t){this.fontFamily!==t&&(this._fontFamily=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontSize",{/**
         * The font size
         * (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')
         */get:function(){return this._fontSize},set:function(t){this._fontSize!==t&&(this._fontSize=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontStyle",{/**
         * The font style
         * ('normal', 'italic' or 'oblique')
         *
         * @member {string}
         */get:function(){return this._fontStyle},set:function(t){this._fontStyle!==t&&(this._fontStyle=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontVariant",{/**
         * The font variant
         * ('normal' or 'small-caps')
         *
         * @member {string}
         */get:function(){return this._fontVariant},set:function(t){this._fontVariant!==t&&(this._fontVariant=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontWeight",{/**
         * The font weight
         * ('normal', 'bold', 'bolder', 'lighter' and '100', '200', '300', '400', '500', '600', '700', 800' or '900')
         *
         * @member {string}
         */get:function(){return this._fontWeight},set:function(t){this._fontWeight!==t&&(this._fontWeight=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"letterSpacing",{/** The amount of spacing between letters, default is 0. */get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lineHeight",{/** The line height, a number that represents the vertical space that a letter uses. */get:function(){return this._lineHeight},set:function(t){this._lineHeight!==t&&(this._lineHeight=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"leading",{/** The space between lines. */get:function(){return this._leading},set:function(t){this._leading!==t&&(this._leading=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lineJoin",{/**
         * The lineJoin property sets the type of corner created, it can resolve spiked text issues.
         * Default is 'miter' (creates a sharp corner).
         *
         * @member {string}
         */get:function(){return this._lineJoin},set:function(t){this._lineJoin!==t&&(this._lineJoin=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"miterLimit",{/**
         * The miter limit to use when using the 'miter' lineJoin mode.
         *
         * This can reduce or increase the spikiness of rendered text.
         */get:function(){return this._miterLimit},set:function(t){this._miterLimit!==t&&(this._miterLimit=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"padding",{/**
         * Occasionally some fonts are cropped. Adding some padding will prevent this from happening
         * by adding padding to all sides of the text.
         */get:function(){return this._padding},set:function(t){this._padding!==t&&(this._padding=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"stroke",{/**
         * A canvas fillstyle that will be used on the text stroke
         * e.g 'blue', '#FCFF00'
         */get:function(){return this._stroke},set:function(t){// TODO: Can't have different types for getter and setter. The getter shouldn't have the number type as
//       the setter converts to string. See this thread for more details:
//       https://github.com/microsoft/TypeScript/issues/2521
var e=ht(t);this._stroke!==e&&(this._stroke=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"strokeThickness",{/**
         * A number that represents the thickness of the stroke.
         *
         * @default 0
         */get:function(){return this._strokeThickness},set:function(t){this._strokeThickness!==t&&(this._strokeThickness=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"textBaseline",{/**
         * The baseline of the text that is rendered.
         *
         * @member {string}
         */get:function(){return this._textBaseline},set:function(t){this._textBaseline!==t&&(this._textBaseline=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"trim",{/** Trim transparent borders. */get:function(){return this._trim},set:function(t){this._trim!==t&&(this._trim=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"whiteSpace",{/**
         * How newlines and spaces should be handled.
         * Default is 'pre' (preserve, preserve).
         *
         *  value       | New lines     |   Spaces
         *  ---         | ---           |   ---
         * 'normal'     | Collapse      |   Collapse
         * 'pre'        | Preserve      |   Preserve
         * 'pre-line'   | Preserve      |   Collapse
         *
         * @member {string}
         */get:function(){return this._whiteSpace},set:function(t){this._whiteSpace!==t&&(this._whiteSpace=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wordWrap",{/** Indicates if word wrap should be used. */get:function(){return this._wordWrap},set:function(t){this._wordWrap!==t&&(this._wordWrap=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wordWrapWidth",{/** The width at which text will wrap, it needs wordWrap to be set to true. */get:function(){return this._wordWrapWidth},set:function(t){this._wordWrapWidth!==t&&(this._wordWrapWidth=t,this.styleID++)},enumerable:!1,configurable:!0}),/**
     * Generates a font style string to use for `TextMetrics.measureFont()`.
     *
     * @return Font style string, for passing to `TextMetrics.measureFont()`
     */t.prototype.toFontString=function(){// build canvas api font setting from individual components. Convert a numeric this.fontSize to px
var t="number"==typeof this.fontSize?this.fontSize+"px":this.fontSize,e=this.fontFamily;Array.isArray(this.fontFamily)||(e=this.fontFamily.split(","));for(var r=e.length-1;r>=0;r--){// Trim any extra white-space
var i=e[r].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&0>a5.indexOf(i)&&(i='"'+i+'"'),e[r]=i}return this.fontStyle+" "+this.fontVariant+" "+this.fontWeight+" "+t+" "+e.join(",")},t)}();/**
 * Utility function to convert hexadecimal colors to strings, and simply return the color if it's a string.
 * @private
 * @param color
 * @return The color as a string.
 */function a7(t){return"number"==typeof t?ne(t):("string"==typeof t&&0===t.indexOf("0x")&&(t=t.replace("0x","#")),t)}function ht(t){if(!Array.isArray(t))return a7(t);for(var e=0;e<t.length;++e)t[e]=a7(t[e]);return t}/**
 * Utility function to ensure that object properties are copied by value, and not by reference
 * @private
 * @param target - Target object to copy properties into
 * @param source - Source object for the properties to copy
 * @param propertyObj - Object containing properties names we want to loop over
 */function he(t,e,r){for(var i in r)Array.isArray(e[i])?t[i]=e[i].slice():t[i]=e[i]}// Default settings used for all getContext calls
var hr={// TextMetrics requires getImageData readback for measuring fonts.
willReadFrequently:!0},hi=/** @class */function(){/**
     * @param text - the text that was measured
     * @param style - the style that was measured
     * @param width - the measured width of the text
     * @param height - the measured height of the text
     * @param lines - an array of the lines of text broken by new lines and wrapping if specified in style
     * @param lineWidths - an array of the line widths for each line matched to `lines`
     * @param lineHeight - the measured line height for this style
     * @param maxLineWidth - the maximum line width for all measured lines
     * @param {PIXI.IFontMetrics} fontProperties - the font properties object from TextMetrics.measureFont
     */function t(t,e,r,i,n,o,s,a,h){this.text=t,this.style=e,this.width=r,this.height=i,this.lines=n,this.lineWidths=o,this.lineHeight=s,this.maxLineWidth=a,this.fontProperties=h}return(/**
     * Measures the supplied string of text and returns a Rectangle.
     * @param text - The text to measure.
     * @param style - The text style to use for measuring
     * @param wordWrap - Override for if word-wrap should be applied to the text.
     * @param canvas - optional specification of the canvas to use for measuring.
     * @returns Measured width and height of the text.
     */t.measureText=function(e,r,i,n){void 0===n&&(n=t._canvas),i=null==i?r.wordWrap:i;var o=r.toFontString(),s=t.measureFont(o);0===s.fontSize&&(s.fontSize=r.fontSize,s.ascent=r.fontSize);var a=n.getContext("2d",hr);a.font=o;for(var h=(i?t.wordWrap(e,r,n):e).split(/(?:\r\n|\r|\n)/),u=Array(h.length),l=0,c=0;c<h.length;c++){var f=a.measureText(h[c]).width+(h[c].length-1)*r.letterSpacing;u[c]=f,l=Math.max(l,f)}var p=l+r.strokeThickness;r.dropShadow&&(p+=r.dropShadowDistance);var d=r.lineHeight||s.fontSize+r.strokeThickness,_=Math.max(d,s.fontSize+r.strokeThickness)+(h.length-1)*(d+r.leading);return r.dropShadow&&(_+=r.dropShadowDistance),new t(e,r,p,_,h,u,d+r.leading,l,s)},/**
     * Applies newlines to a string to have it optimally fit into the horizontal
     * bounds set by the Text object's wordWrapWidth property.
     * @param text - String to apply word wrapping to
     * @param style - the style to use when wrapping
     * @param canvas - optional specification of the canvas to use for measuring.
     * @returns New string with new lines applied where required
     */t.wordWrap=function(e,r,i){void 0===i&&(i=t._canvas);for(var n=i.getContext("2d",hr),o=0,s="",a="",h=Object.create(null),u=r.letterSpacing,l=r.whiteSpace,c=t.collapseSpaces(l),f=t.collapseNewlines(l),p=!c,d=r.wordWrapWidth+u,_=t.tokenize(e),y=0;y<_.length;y++){// get the word, space or newlineChar
var v=_[y];// if word is a new line
if(t.isNewline(v)){// keep the new line
if(!f){a+=t.addLine(s),p=!c,s="",o=0;continue}// if we should collapse new lines
// we simply convert it into a space
v=" "}// if we should collapse repeated whitespaces
if(c){// check both this and the last tokens for spaces
var m=t.isBreakingSpace(v),g=t.isBreakingSpace(s[s.length-1]);if(m&&g)continue}// get word width from cache if possible
var b=t.getFromCache(v,u,h,n);// word is longer than desired bounds
if(b>d){// break large word over multiple lines
if(""!==s&&(// start newlines for overflow words
a+=t.addLine(s),s="",o=0),t.canBreakWords(v,r.breakWords))// loop the characters
for(var x=t.wordWrapSplit(v),T=0;T<x.length;T++){// we are not at the end of the token
for(var E=x[T],A=1;x[T+A];){var S=x[T+A],R=E[E.length-1];// should not split chars
if(t.canBreakChars(R,S,v,T,r.breakWords))break;E+=S,A++}T+=E.length-1;var O=t.getFromCache(E,u,h,n);O+o>d&&(a+=t.addLine(s),p=!1,s="",o=0),s+=E,o+=O}else{s.length>0&&(a+=t.addLine(s),s="",o=0);var I=y===_.length-1;// give it its own line if it's not the end
a+=t.addLine(v,!I),p=!1,s="",o=0}}else b+o>d&&(// if its a space we don't want it
p=!1,// add a new line
a+=t.addLine(s),// start a new line
s="",o=0),(s.length>0||!t.isBreakingSpace(v)||p)&&(// add the word to the current line
s+=v,// update width counter
o+=b)}return a+t.addLine(s,!1)},/**
     * Convienience function for logging each line added during the wordWrap method.
     * @param line    - The line of text to add
     * @param newLine - Add new line character to end
     * @returns A formatted line
     */t.addLine=function(e,r){return void 0===r&&(r=!0),e=t.trimRight(e),e=r?e+"\n":e},/**
     * Gets & sets the widths of calculated characters in a cache object
     * @param key            - The key
     * @param letterSpacing  - The letter spacing
     * @param cache          - The cache
     * @param context        - The canvas context
     * @returns The from cache.
     */t.getFromCache=function(t,e,r,i){var n=r[t];if("number"!=typeof n){var o=t.length*e;n=i.measureText(t).width+o,r[t]=n}return n},/**
     * Determines whether we should collapse breaking spaces.
     * @param whiteSpace - The TextStyle property whiteSpace
     * @returns Should collapse
     */t.collapseSpaces=function(t){return"normal"===t||"pre-line"===t},/**
     * Determines whether we should collapse newLine chars.
     * @param whiteSpace - The white space
     * @returns  should collapse
     */t.collapseNewlines=function(t){return"normal"===t},/**
     * Trims breaking whitespaces from string.
     * @param  text - The text
     * @returns Trimmed string
     */t.trimRight=function(e){if("string"!=typeof e)return"";for(var r=e.length-1;r>=0;r--){var i=e[r];if(!t.isBreakingSpace(i))break;e=e.slice(0,-1)}return e},/**
     * Determines if char is a newline.
     * @param  char - The character
     * @returns True if newline, False otherwise.
     */t.isNewline=function(e){return"string"==typeof e&&t._newlines.indexOf(e.charCodeAt(0))>=0},/**
     * Determines if char is a breaking whitespace.
     *
     * It allows one to determine whether char should be a breaking whitespace
     * For example certain characters in CJK langs or numbers.
     * It must return a boolean.
     * @param char - The character
     * @param [_nextChar] - The next character
     * @returns True if whitespace, False otherwise.
     */t.isBreakingSpace=function(e,r){return"string"==typeof e&&t._breakingSpaces.indexOf(e.charCodeAt(0))>=0},/**
     * Splits a string into words, breaking-spaces and newLine characters
     * @param  text - The text
     * @returns  A tokenized array
     */t.tokenize=function(e){var r=[],i="";if("string"!=typeof e)return r;for(var n=0;n<e.length;n++){var o=e[n],s=e[n+1];if(t.isBreakingSpace(o,s)||t.isNewline(o)){""!==i&&(r.push(i),i=""),r.push(o);continue}i+=o}return""!==i&&r.push(i),r},/**
     * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
     *
     * It allows one to customise which words should break
     * Examples are if the token is CJK or numbers.
     * It must return a boolean.
     * @param _token - The token
     * @param  breakWords - The style attr break words
     * @returns Whether to break word or not
     */t.canBreakWords=function(t,e){return e},/**
     * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
     *
     * It allows one to determine whether a pair of characters
     * should be broken by newlines
     * For example certain characters in CJK langs or numbers.
     * It must return a boolean.
     * @param _char - The character
     * @param _nextChar - The next character
     * @param _token - The token/word the characters are from
     * @param _index - The index in the token of the char
     * @param _breakWords - The style attr break words
     * @returns whether to break word or not
     */t.canBreakChars=function(t,e,r,i,n){return!0},/**
     * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
     *
     * It is called when a token (usually a word) has to be split into separate pieces
     * in order to determine the point to break a word.
     * It must return an array of characters.
     * @example
     * // Correctly splits emojis, eg "🤪🤪" will result in two element array, each with one emoji.
     * TextMetrics.wordWrapSplit = (token) => [...token];
     * @param  token - The token to split
     * @returns The characters of the token
     */t.wordWrapSplit=function(t){return t.split("")},/**
     * Calculates the ascent, descent and fontSize of a given font-style
     * @param font - String representing the style of the font
     * @returns Font properties object
     */t.measureFont=function(e){// as this method is used for preparing assets, don't recalculate things if we don't need to
if(t._fonts[e])return t._fonts[e];var r={ascent:0,descent:0,fontSize:0},i=t._canvas,n=t._context;n.font=e;var o=t.METRICS_STRING+t.BASELINE_SYMBOL,s=Math.ceil(n.measureText(o).width),a=Math.ceil(n.measureText(t.BASELINE_SYMBOL).width),h=Math.ceil(t.HEIGHT_MULTIPLIER*a);a=a*t.BASELINE_MULTIPLIER|0,i.width=s,i.height=h,n.fillStyle="#f00",n.fillRect(0,0,s,h),n.font=e,n.textBaseline="alphabetic",n.fillStyle="#000",n.fillText(o,0,a);var u=n.getImageData(0,0,s,h).data,l=u.length,c=4*s,f=0,p=0,d=!1;// ascent. scan from top to bottom until we find a non red pixel
for(f=0;f<a;++f){for(var _=0;_<c;_+=4)if(255!==u[p+_]){d=!0;break}if(d)break;p+=c}// descent. scan from bottom to top until we find a non red pixel
for(r.ascent=a-f,p=l-c,d=!1,f=h;f>a;--f){for(var _=0;_<c;_+=4)if(255!==u[p+_]){d=!0;break}if(d)break;p-=c}return r.descent=f-a,r.fontSize=r.ascent+r.descent,t._fonts[e]=r,r},/**
     * Clear font metrics in metrics cache.
     * @param {string} [font] - font name. If font name not set then clear cache for all fonts.
     */t.clearMetrics=function(e){void 0===e&&(e=""),e?delete t._fonts[e]:t._fonts={}},Object.defineProperty(t,"_canvas",{/**
         * Cached canvas element for measuring text
         * TODO: this should be private, but isn't because of backward compat, will fix later.
         * @ignore
         */get:function(){if(!t.__canvas){var e=void 0;try{// OffscreenCanvas2D measureText can be up to 40% faster.
var r=new OffscreenCanvas(0,0),i=r.getContext("2d",hr);if(i&&i.measureText)return t.__canvas=r,r;e=eh.ADAPTER.createCanvas()}catch(t){e=eh.ADAPTER.createCanvas()}e.width=e.height=10,t.__canvas=e}return t.__canvas},enumerable:!1,configurable:!0}),Object.defineProperty(t,"_context",{/**
         * TODO: this should be private, but isn't because of backward compat, will fix later.
         * @ignore
         */get:function(){return t.__context||(t.__context=t._canvas.getContext("2d",hr)),t.__context},enumerable:!1,configurable:!0}),t)}();/**
 * Internal return object for {@link PIXI.TextMetrics.measureFont `TextMetrics.measureFont`}.
 * @typedef {object} FontMetrics
 * @property {number} ascent - The ascent distance
 * @property {number} descent - The descent distance
 * @property {number} fontSize - Font size from ascent to descent
 * @memberof PIXI.TextMetrics
 * @private
 *//**
 * Cache of {@see PIXI.TextMetrics.FontMetrics} objects.
 * @memberof PIXI.TextMetrics
 * @type {object}
 * @private
 */hi._fonts={},/**
 * String used for calculate font metrics.
 * These characters are all tall to help calculate the height required for text.
 * @static
 * @memberof PIXI.TextMetrics
 * @name METRICS_STRING
 * @type {string}
 * @default |ÉqÅ
 */hi.METRICS_STRING="|\xc9q\xc5",/**
 * Baseline symbol for calculate font metrics.
 * @static
 * @memberof PIXI.TextMetrics
 * @name BASELINE_SYMBOL
 * @type {string}
 * @default M
 */hi.BASELINE_SYMBOL="M",/**
 * Baseline multiplier for calculate font metrics.
 * @static
 * @memberof PIXI.TextMetrics
 * @name BASELINE_MULTIPLIER
 * @type {number}
 * @default 1.4
 */hi.BASELINE_MULTIPLIER=1.4,/**
 * Height multiplier for setting height of canvas to calculate font metrics.
 * @static
 * @memberof PIXI.TextMetrics
 * @name HEIGHT_MULTIPLIER
 * @type {number}
 * @default 2.00
 */hi.HEIGHT_MULTIPLIER=2,/**
 * Cache of new line chars.
 * @memberof PIXI.TextMetrics
 * @type {number[]}
 * @private
 */hi._newlines=[10,13],/**
 * Cache of breaking spaces.
 * @memberof PIXI.TextMetrics
 * @type {number[]}
 * @private
 */hi._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];/**
 * A number, or a string containing a number.
 * @memberof PIXI
 * @typedef {object} IFontMetrics
 * @property {number} ascent - Font ascent
 * @property {number} descent - Font descent
 * @property {number} fontSize - Font size
 */var hn={texture:!0,children:!1,baseTexture:!0},ho=/** @class */function(t){/**
     * @param text - The string that you would like the text to display
     * @param {object|PIXI.TextStyle} [style] - The style parameters
     * @param canvas - The canvas element for drawing text
     */function e(e,r,i){var n=this,o=!1;i||(i=eh.ADAPTER.createCanvas(),o=!0),i.width=3,i.height=3;var s=o_.from(i);return s.orig=new nA,s.trim=new nA,(n=t.call(this,s)||this)._ownCanvas=o,n.canvas=i,n.context=i.getContext("2d",{// required for trimming to work without warnings
willReadFrequently:!0}),n._resolution=eh.RESOLUTION,n._autoResolution=!0,n._text=null,n._style=null,n._styleListener=null,n._font="",n.text=e,n.style=r,n.localStyleID=-1,n}return!function(t,e){function r(){this.constructor=t}a8(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),/**
     * Renders text to its canvas, and updates its texture.
     *
     * By default this is used internally to ensure the texture is correct before rendering,
     * but it can be used called externally, for example from this class to 'pre-generate' the texture from a piece of text,
     * and then shared across multiple Sprites.
     * @param respectDirty - Whether to abort updating the text if the Text isn't dirty and the function is called.
     */e.prototype.updateText=function(t){var r,i,n=this._style;if(this.localStyleID!==n.styleID&&(this.dirty=!0,this.localStyleID=n.styleID),this.dirty||!t){this._font=this._style.toFontString();var o=this.context,s=hi.measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),a=s.width,h=s.height,u=s.lines,l=s.lineHeight,c=s.lineWidths,f=s.maxLineWidth,p=s.fontProperties;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,a)+2*n.padding)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,h)+2*n.padding)*this._resolution),o.scale(this._resolution,this._resolution),o.clearRect(0,0,this.canvas.width,this.canvas.height),o.font=this._font,o.lineWidth=n.strokeThickness,o.textBaseline=n.textBaseline,o.lineJoin=n.lineJoin,o.miterLimit=n.miterLimit;// For v4, we drew text at the colours of the drop shadow underneath the normal text. This gave the correct zIndex,
// but features such as alpha and shadowblur did not look right at all, since we were using actual text as a shadow.
//
// For v5.0.0, we moved over to just use the canvas API for drop shadows, which made them look much nicer and more
// visually please, but now because the stroke is drawn and then the fill, drop shadows would appear on both the fill
// and the stroke; and fill drop shadows would appear over the top of the stroke.
//
// For v5.1.1, the new route is to revert to v4 style of drawing text first to get the drop shadows underneath normal
// text, but instead drawing text in the correct location, we'll draw it off screen (-paddingY), and then adjust the
// drop shadow so only that appears on screen (+paddingY). Now we'll have the correct draw order of the shadow
// beneath the text, whilst also having the proper text shadow styling.
for(var d=n.dropShadow?2:1,_=0;_<d;++_){var y=n.dropShadow&&0===_,v=y?Math.ceil(Math.max(1,h)+2*n.padding):0,m=v*this._resolution;if(y){// On Safari, text with gradient and drop shadows together do not position correctly
// if the scale of the canvas is not 1: https://bugs.webkit.org/show_bug.cgi?id=197689
// Therefore we'll set the styles to be a plain black whilst generating this drop shadow
o.fillStyle="black",o.strokeStyle="black";var g=n.dropShadowColor,b=nt("number"==typeof g?g:nr(g)),x=n.dropShadowBlur*this._resolution,T=n.dropShadowDistance*this._resolution;o.shadowColor="rgba("+255*b[0]+","+255*b[1]+","+255*b[2]+","+n.dropShadowAlpha+")",o.shadowBlur=x,o.shadowOffsetX=Math.cos(n.dropShadowAngle)*T,o.shadowOffsetY=Math.sin(n.dropShadowAngle)*T+m}else // set canvas text styles
o.fillStyle=this._generateFillStyle(n,u,s),// TODO: Can't have different types for getter and setter. The getter shouldn't have the number type as
//       the setter converts to string. See this thread for more details:
//       https://github.com/microsoft/TypeScript/issues/2521
o.strokeStyle=n.stroke,o.shadowColor="black",o.shadowBlur=0,o.shadowOffsetX=0,o.shadowOffsetY=0;var E=(l-p.fontSize)/2;(!e.nextLineHeightBehavior||l-p.fontSize<0)&&(E=0);// draw lines line by line
for(var A=0;A<u.length;A++)r=n.strokeThickness/2,i=n.strokeThickness/2+A*l+p.ascent+E,"right"===n.align?r+=f-c[A]:"center"===n.align&&(r+=(f-c[A])/2),n.stroke&&n.strokeThickness&&this.drawLetterSpacing(u[A],r+n.padding,i+n.padding-v,!0),n.fill&&this.drawLetterSpacing(u[A],r+n.padding,i+n.padding-v)}this.updateTexture()}},/**
     * Render the text with letter-spacing.
     * @param text - The text to draw
     * @param x - Horizontal position to draw the text
     * @param y - Vertical position to draw the text
     * @param isStroke - Is this drawing for the outside stroke of the
     *  text? If not, it's for the inside fill
     */e.prototype.drawLetterSpacing=function(t,r,i,n){void 0===n&&(n=!1);// letterSpacing of 0 means normal
var o=this._style.letterSpacing,s=e.experimentalLetterSpacing&&("letterSpacing"in CanvasRenderingContext2D.prototype||"textLetterSpacing"in CanvasRenderingContext2D.prototype);if(0===o||s){s&&(this.context.letterSpacing=o,this.context.textLetterSpacing=o),n?this.context.strokeText(t,r,i):this.context.fillText(t,r,i);return}for(var a=r,h=Array.from?Array.from(t):t.split(""),u=this.context.measureText(t).width,l=0,c=0;c<h.length;++c){var f=h[c];n?this.context.strokeText(f,a,i):this.context.fillText(f,a,i);for(var p="",d=c+1;d<h.length;++d)p+=h[d];a+=u-(l=this.context.measureText(p).width)+o,u=l}},/** Updates texture size based on canvas size. */e.prototype.updateTexture=function(){var t=this.canvas;if(this._style.trim){var e=/**
 * Trim transparent borders from a canvas
 * @memberof PIXI.utils
 * @function trimCanvas
 * @param {HTMLCanvasElement} canvas - the canvas to trim
 * @returns {object} Trim data
 */function(t){// https://gist.github.com/remy/784508
var e,r,i,n=t.width,o=t.height,s=t.getContext("2d",{willReadFrequently:!0}),a=s.getImageData(0,0,n,o).data,h=a.length,u={top:null,left:null,right:null,bottom:null},l=null;for(e=0;e<h;e+=4)0!==a[e+3]&&(r=e/4%n,i=~~(e/4/n),null===u.top&&(u.top=i),null===u.left?u.left=r:r<u.left&&(u.left=r),null===u.right?u.right=r+1:u.right<r&&(u.right=r+1),null===u.bottom?u.bottom=i:u.bottom<i&&(u.bottom=i));return null!==u.top&&(n=u.right-u.left,o=u.bottom-u.top+1,l=s.getImageData(u.left,u.top,n,o)),{height:o,width:n,data:l}}(t);e.data&&(t.width=e.width,t.height=e.height,this.context.putImageData(e.data,0,0))}var r=this._texture,i=this._style,n=i.trim?0:i.padding,o=r.baseTexture;r.trim.width=r._frame.width=t.width/this._resolution,r.trim.height=r._frame.height=t.height/this._resolution,r.trim.x=-n,r.trim.y=-n,r.orig.width=r._frame.width-2*n,r.orig.height=r._frame.height-2*n,// call sprite onTextureUpdate to update scale if _width or _height were set
this._onTextureUpdate(),o.setRealSize(t.width,t.height,this._resolution),r.updateUvs(),this.dirty=!1},/**
     * Renders the object using the WebGL renderer
     * @param renderer - The renderer
     */e.prototype._render=function(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0),this.updateText(!0),t.prototype._render.call(this,e)},/** Updates the transform on all children of this container for rendering. */e.prototype.updateTransform=function(){this.updateText(!0),t.prototype.updateTransform.call(this)},e.prototype.getBounds=function(e,r){return this.updateText(!0),-1===this._textureID&&(e=!1),t.prototype.getBounds.call(this,e,r)},/**
     * Gets the local bounds of the text object.
     * @param rect - The output rectangle.
     * @returns The bounds.
     */e.prototype.getLocalBounds=function(e){return this.updateText(!0),t.prototype.getLocalBounds.call(this,e)},/** Calculates the bounds of the Text as a rectangle. The bounds calculation takes the worldTransform into account. */e.prototype._calculateBounds=function(){this.calculateVertices(),// if we have already done this on THIS frame.
this._bounds.addQuad(this.vertexData)},/**
     * Generates the fill style. Can automatically generate a gradient based on the fill style being an array
     * @param style - The style.
     * @param lines - The lines of text.
     * @param metrics
     * @returns The fill style
     */e.prototype._generateFillStyle=function(t,e,r){// TODO: Can't have different types for getter and setter. The getter shouldn't have the number type as
//       the setter converts to string. See this thread for more details:
//       https://github.com/microsoft/TypeScript/issues/2521
var i,n=t.fill;if(!Array.isArray(n))return n;if(1===n.length)return n[0];// a dropshadow will enlarge the canvas and result in the gradient being
// generated with the incorrect dimensions
var o=t.dropShadow?t.dropShadowDistance:0,s=t.padding||0,a=this.canvas.width/this._resolution-o-2*s,h=this.canvas.height/this._resolution-o-2*s,u=n.slice(),l=t.fillGradientStops.slice();// wanting to evenly distribute the fills. So an array of 4 colours should give fills of 0.25, 0.5 and 0.75
if(!l.length)for(var c=u.length+1,f=1;f<c;++f)l.push(f/c);if(// stop the bleeding of the last gradient on the line above to the top gradient of the this line
// by hard defining the first gradient colour at point 0, and last gradient colour at point 1
u.unshift(n[0]),l.unshift(0),u.push(n[n.length-1]),l.push(1),t.fillGradientType===tP.LINEAR_VERTICAL){// start the gradient at the top center of the canvas, and end at the bottom middle of the canvas
i=this.context.createLinearGradient(a/2,s,a/2,h+s);for(var p=r.fontProperties.fontSize+t.strokeThickness,f=0;f<e.length;f++){var d=r.lineHeight*(f-1)+p,_=r.lineHeight*f,y=_;// Handle case where last & this line overlap
f>0&&d>_&&(y=(_+d)/2);var v=_+p,m=r.lineHeight*(f+1),g=v;// Handle case where this & next line overlap
f+1<e.length&&m<v&&(g=(v+m)/2);for(var b=(g-y)/h,x=0;x<u.length;x++){// 0-1 stop point for the current line, multiplied to global space afterwards
var T=Math.min(1,Math.max(0,y/h+("number"==typeof l[x]?l[x]:x/u.length)*b));// There's potential for floating point precision issues at the seams between gradient repeats.
T=Number(T.toFixed(5)),i.addColorStop(T,u[x])}}}else{// start the gradient at the center left of the canvas, and end at the center right of the canvas
i=this.context.createLinearGradient(s,h/2,a+s,h/2);for(var E=u.length+1,A=1,f=0;f<u.length;f++){var S=void 0;S="number"==typeof l[f]?l[f]:A/E,i.addColorStop(S,u[f]),A++}}return i},/**
     * Destroys this text object.
     *
     * Note* Unlike a Sprite, a Text object will automatically destroy its baseTexture and texture as
     * the majority of the time the texture will not be shared with any other Sprites.
     * @param options - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have their
     *  destroy method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=true] - Should it destroy the current texture of the sprite as well
     * @param {boolean} [options.baseTexture=true] - Should it destroy the base texture of the sprite as well
     */e.prototype.destroy=function(e){"boolean"==typeof e&&(e={children:e}),e=Object.assign({},hn,e),t.prototype.destroy.call(this,e),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),// make sure to reset the context and canvas.. dont want this hanging around in memory!
this.context=null,this.canvas=null,this._style=null},Object.defineProperty(e.prototype,"width",{/** The width of the Text, setting this will actually modify the scale to achieve the value set. */get:function(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){this.updateText(!0);var e=nl(this.scale.x)||1;this.scale.x=e*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{/** The height of the Text, setting this will actually modify the scale to achieve the value set. */get:function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){this.updateText(!0);var e=nl(this.scale.y)||1;this.scale.y=e*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"style",{/**
         * Set the style of the text.
         *
         * Set up an event listener to listen for changes on the style object and mark the text as dirty.
         */get:function(){// TODO: Can't have different types for getter and setter. The getter shouldn't have the ITextStyle
//       since the setter creates the TextStyle. See this thread for more details:
//       https://github.com/microsoft/TypeScript/issues/2521
return this._style},set:function(t){(t=t||{})instanceof a9?this._style=t:this._style=new a9(t),this.localStyleID=-1,this.dirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{/** Set the copy for the text object. To split a line you can use '\n'. */get:function(){return this._text},set:function(t){t=String(null==t?"":t),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{/**
         * The resolution / device pixel ratio of the canvas.
         *
         * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
         * @default 1
         */get:function(){return this._resolution},set:function(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)},enumerable:!1,configurable:!0}),/**
     * New behavior for `lineHeight` that's meant to mimic HTML text. A value of `true` will
     * make sure the first baseline is offset by the `lineHeight` value if it is greater than `fontSize`.
     * A value of `false` will use the legacy behavior and not change the baseline of the first line.
     * In the next major release, we'll enable this by default.
     */e.nextLineHeightBehavior=!1,/**
     * New rendering behavior for letter-spacing which uses Chrome's new native API. This will
     * lead to more accurate letter-spacing results because it does not try to manually draw
     * each character. However, this Chrome API is experimental and may not serve all cases yet.
     */e.experimentalLetterSpacing=!1,e}(a4);eh.UPLOADS_PER_FRAME=4;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise */var hs=function(t,e){return(hs=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},ha=/** @class */function(){/**
     * @param maxItemsPerFrame - The maximum number of items that can be prepared each frame.
     */function t(t){this.maxItemsPerFrame=t,this.itemsLeft=0}return(/** Resets any counting properties to start fresh on a new frame. */t.prototype.beginFrame=function(){this.itemsLeft=this.maxItemsPerFrame},/**
     * Checks to see if another item can be uploaded. This should only be called once per item.
     * @returns If the item is allowed to be uploaded.
     */t.prototype.allowedToUpload=function(){return this.itemsLeft-- >0},t)}();/**
 * Built-in hook to find multiple textures from objects like AnimatedSprites.
 * @private
 * @param item - Display object to check
 * @param queue - Collection of items to upload
 * @returns If a PIXI.Texture object was found.
 */function hh(t,e){var r=!1;// Objects with multiple textures
if(t&&t._textures&&t._textures.length){for(var i=0;i<t._textures.length;i++)if(t._textures[i]instanceof o_){var n=t._textures[i].baseTexture;-1===e.indexOf(n)&&(e.push(n),r=!0)}}return r}/**
 * Built-in hook to find BaseTextures from Texture.
 * @private
 * @param item - Display object to check
 * @param queue - Collection of items to upload
 * @returns If a PIXI.Texture object was found.
 */function hu(t,e){if(t.baseTexture instanceof n9){var r=t.baseTexture;return -1===e.indexOf(r)&&e.push(r),!0}return!1}/**
 * Built-in hook to find textures from objects.
 * @private
 * @param item - Display object to check
 * @param queue - Collection of items to upload
 * @returns If a PIXI.Texture object was found.
 */function hl(t,e){if(t._texture&&t._texture instanceof o_){var r=t._texture.baseTexture;return -1===e.indexOf(r)&&e.push(r),!0}return!1}/**
 * Built-in hook to draw PIXI.Text to its texture.
 * @private
 * @param _helper - Not used by this upload handler
 * @param item - Item to check
 * @returns If item was uploaded.
 */function hc(t,e){return e instanceof ho&&(// updating text will return early if it is not dirty
e.updateText(!0),!0)}/**
 * Built-in hook to calculate a text style for a PIXI.Text object.
 * @private
 * @param _helper - Not used by this upload handler
 * @param item - Item to check
 * @returns If item was uploaded.
 */function hf(t,e){if(e instanceof a9){var r=e.toFontString();return hi.measureFont(r),!0}return!1}/**
 * Built-in hook to find Text objects.
 * @private
 * @param item - Display object to check
 * @param queue - Collection of items to upload
 * @returns if a PIXI.Text object was found.
 */function hp(t,e){if(t instanceof ho){-1===e.indexOf(t.style)&&e.push(t.style),-1===e.indexOf(t)&&e.push(t);// also push the Text's texture for upload to GPU
var r=t._texture.baseTexture;return -1===e.indexOf(r)&&e.push(r),!0}return!1}/**
 * Built-in hook to find TextStyle objects.
 * @private
 * @param item - Display object to check
 * @param queue - Collection of items to upload
 * @returns If a PIXI.TextStyle object was found.
 */function hd(t,e){return t instanceof a9&&(-1===e.indexOf(t)&&e.push(t),!0)}/**
 * Built-in hook to upload PIXI.Texture objects to the GPU.
 * @private
 * @param renderer - instance of the webgl renderer
 * @param item - Item to check
 * @returns If item was uploaded.
 */function h_(t,e){return e instanceof n9&&(e._glTextures[t.CONTEXT_UID]||t.texture.bind(e),!0)}/**
 * Built-in hook to upload PIXI.Graphics to the GPU.
 * @private
 * @param renderer - instance of the webgl renderer
 * @param item - Item to check
 * @returns If item was uploaded.
 */function hy(t,e){if(!(e instanceof a0))return!1;var r=e.geometry;// update dirty graphics to get batches
e.finishPoly(),r.updateBatches();// upload all textures found in styles
for(var i=r.batches,n=0;n<i.length;n++){var o=i[n].style.texture;o&&h_(t,o.baseTexture)}return r.batchable||t.geometry.bind(r,e._resolveDirectShader(t)),!0}/**
 * Built-in hook to find graphics.
 * @private
 * @param item - Display object to check
 * @param queue - Collection of items to upload
 * @returns if a PIXI.Graphics object was found.
 */function hv(t,e){return t instanceof a0&&(e.push(t),!0)}/**
 * The prepare plugin provides renderer-specific plugins for pre-rendering DisplayObjects. These plugins are useful for
 * asynchronously preparing and uploading to the GPU assets, textures, graphics waiting to be displayed.
 *
 * Do not instantiate this plugin directly. It is available from the `renderer.plugins` property.
 * See {@link PIXI.CanvasRenderer#plugins} or {@link PIXI.Renderer#plugins}.
 * @example
 * // Create a new application
 * const app = new PIXI.Application();
 * document.body.appendChild(app.view);
 *
 * // Don't start rendering right away
 * app.stop();
 *
 * // create a display object
 * const rect = new PIXI.Graphics()
 *     .beginFill(0x00ff00)
 *     .drawRect(40, 40, 200, 200);
 *
 * // Add to the stage
 * app.stage.addChild(rect);
 *
 * // Don't start rendering until the graphic is uploaded to the GPU
 * app.renderer.plugins.prepare.upload(app.stage, () => {
 *     app.start();
 * });
 * @memberof PIXI
 */var hm=/** @class */function(t){/**
     * @param {PIXI.Renderer} renderer - A reference to the current renderer
     */function e(e){var r=t.call(this,e)||this;return r.uploadHookHelper=r.renderer,// Add textures and graphics to upload
r.registerFindHook(hv),r.registerUploadHook(h_),r.registerUploadHook(hy),r}return!function(t,e){function r(){this.constructor=t}hs(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),/** @ignore */e.extension={name:"prepare",type:tf.RendererPlugin},e}(/** @class */function(){/**
     * @param {PIXI.AbstractRenderer} renderer - A reference to the current renderer
     */function t(t){var e=this;this.limiter=new ha(eh.UPLOADS_PER_FRAME),this.renderer=t,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=function(){// unlikely, but in case we were destroyed between tick() and delayedTick()
e.queue&&e.prepareItems()},// hooks to find the correct texture
this.registerFindHook(hp),this.registerFindHook(hd),this.registerFindHook(hh),this.registerFindHook(hu),this.registerFindHook(hl),// upload hooks
this.registerUploadHook(hc),this.registerUploadHook(hf)}return(/** @ignore */t.prototype.upload=function(t,e){var r=this;return"function"==typeof t&&(e=t,t=null),e&&np("6.5.0","BasePrepare.upload callback is deprecated, use the return Promise instead."),new Promise(function(i){// If a display object, search for items
// that we could upload
t&&r.add(t);// TODO: remove done callback and just use resolve
var n=function(){null==e||e(),i()};// Get the items for upload from the display
r.queue.length?(r.completes.push(n),r.ticking||(r.ticking=!0,nQ.system.addOnce(r.tick,r,tp.UTILITY))):n()})},/**
     * Handle tick update
     * @private
     */t.prototype.tick=function(){setTimeout(this.delayedTick,0)},/**
     * Actually prepare items. This is handled outside of the tick because it will take a while
     * and we do NOT want to block the current animation frame from rendering.
     * @private
     */t.prototype.prepareItems=function(){// Upload the graphics
for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){var t=this.queue[0],e=!1;if(t&&!t._destroyed){for(var r=0,i=this.uploadHooks.length;r<i;r++)if(this.uploadHooks[r](this.uploadHookHelper,t)){this.queue.shift(),e=!0;break}}e||this.queue.shift()}// We're finished
if(this.queue.length)nQ.system.addOnce(this.tick,this,tp.UTILITY);else{this.ticking=!1;var n=this.completes.slice(0);this.completes.length=0;for(var r=0,i=n.length;r<i;r++)n[r]()}},/**
     * Adds hooks for finding items.
     * @param {Function} addHook - Function call that takes two parameters: `item:*, queue:Array`
     *          function must return `true` if it was able to add item to the queue.
     * @returns Instance of plugin for chaining.
     */t.prototype.registerFindHook=function(t){return t&&this.addHooks.push(t),this},/**
     * Adds hooks for uploading items.
     * @param {Function} uploadHook - Function call that takes two parameters: `prepare:CanvasPrepare, item:*` and
     *          function must return `true` if it was able to handle upload of item.
     * @returns Instance of plugin for chaining.
     */t.prototype.registerUploadHook=function(t){return t&&this.uploadHooks.push(t),this},/**
     * Manually add an item to the uploading queue.
     * @param {PIXI.DisplayObject|PIXI.Container|PIXI.BaseTexture|PIXI.Texture|PIXI.Graphics|PIXI.Text|*} item - Object to
     *        add to the queue
     * @returns Instance of plugin for chaining.
     */t.prototype.add=function(t){// Add additional hooks for finding elements on special
// types of objects that
for(var e=0,r=this.addHooks.length;e<r&&!this.addHooks[e](t,this.queue);e++);// Get children recursively
if(t instanceof nV)for(var e=t.children.length-1;e>=0;e--)this.add(t.children[e]);return this},/** Destroys the plugin, don't use after this. */t.prototype.destroy=function(){this.ticking&&nQ.system.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null},t)}());!/** @class */function(){/** @param maxMilliseconds - The maximum milliseconds that can be spent preparing items each frame. */function t(t){this.maxMilliseconds=t,this.frameStart=0}/** Resets any counting properties to start fresh on a new frame. */t.prototype.beginFrame=function(){this.frameStart=Date.now()},/**
     * Checks to see if another item can be uploaded. This should only be called once per item.
     * @returns - If the item is allowed to be uploaded.
     */t.prototype.allowedToUpload=function(){return Date.now()-this.frameStart<this.maxMilliseconds}}();/*!
 * @pixi/spritesheet - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/spritesheet is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//**
 * Utility class for maintaining reference to a collection
 * of Textures on a single Spritesheet.
 *
 * To access a sprite sheet from your code you may pass its JSON data file to Pixi's loader:
 *
 * ```js
 * PIXI.Loader.shared.add("images/spritesheet.json").load(setup);
 *
 * function setup() {
 *   let sheet = PIXI.Loader.shared.resources["images/spritesheet.json"].spritesheet;
 *   ...
 * }
 * ```
 *
 * Alternately, you may circumvent the loader by instantiating the Spritesheet directly:
 * ```js
 * const sheet = new PIXI.Spritesheet(texture, spritesheetData);
 * await sheet.parse();
 * console.log('Spritesheet ready to use!');
 * ```
 *
 * With the `sheet.textures` you can create Sprite objects,`sheet.animations` can be used to create an AnimatedSprite.
 *
 * Sprite sheets can be packed using tools like {@link https://codeandweb.com/texturepacker|TexturePacker},
 * {@link https://renderhjs.net/shoebox/|Shoebox} or {@link https://github.com/krzysztof-o/spritesheet.js|Spritesheet.js}.
 * Default anchor points (see {@link PIXI.Texture#defaultAnchor}) and grouping of animation sprites are currently only
 * supported by TexturePacker.
 * @memberof PIXI
 */var hg=/** @class */function(){/**
     * @param texture - Reference to the source BaseTexture object.
     * @param {object} data - Spritesheet image data.
     * @param resolutionFilename - The filename to consider when determining
     *        the resolution of the spritesheet. If not provided, the imageUrl will
     *        be used on the BaseTexture.
     */function t(t,e,r){void 0===r&&(r=null),/** For multi-packed spritesheets, this contains a reference to all the other spritesheets it depends on. */this.linkedSheets=[],this._texture=t instanceof o_?t:null,this.baseTexture=t instanceof n9?t:this._texture.baseTexture,this.textures={},this.animations={},this.data=e;var i=this.baseTexture.resource;this.resolution=this._updateResolution(r||(i?i.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}return(/**
     * Generate the resolution from the filename or fallback
     * to the meta.scale field of the JSON data.
     * @param resolutionFilename - The filename to use for resolving
     *        the default resolution.
     * @returns Resolution to use for spritesheet.
     */t.prototype._updateResolution=function(t){void 0===t&&(t=null);var e=this.data.meta.scale,r=nm(t,null);return null===r&&(r=void 0!==e?parseFloat(e):1),1!==r&&this.baseTexture.setResolution(r),r},/** @ignore */t.prototype.parse=function(e){var r=this;return e&&np("6.5.0","Spritesheet.parse callback is deprecated, use the return Promise instead."),new Promise(function(i){r._callback=function(t){null==e||e(t),i(t)},r._batchIndex=0,r._frameKeys.length<=t.BATCH_SIZE?(r._processFrames(0),r._processAnimations(),r._parseComplete()):r._nextBatch()})},/**
     * Process a batch of frames
     * @param initialFrameIndex - The index of frame to start.
     */t.prototype._processFrames=function(e){for(var r=e,i=t.BATCH_SIZE;r-e<i&&r<this._frameKeys.length;){var n=this._frameKeys[r],o=this._frames[n],s=o.frame;if(s){var a=null,h=null,u=!1!==o.trimmed&&o.sourceSize?o.sourceSize:o.frame,l=new nA(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);a=o.rotated?new nA(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.h)/this.resolution,Math.floor(s.w)/this.resolution):new nA(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution),!1!==o.trimmed&&o.spriteSourceSize&&(h=new nA(Math.floor(o.spriteSourceSize.x)/this.resolution,Math.floor(o.spriteSourceSize.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution)),this.textures[n]=new o_(this.baseTexture,a,l,h,o.rotated?2:0,o.anchor),o_.addToCache(this.textures[n],n)}r++}},/** Parse animations config. */t.prototype._processAnimations=function(){var t=this.data.animations||{};for(var e in t){this.animations[e]=[];for(var r=0;r<t[e].length;r++){var i=t[e][r];this.animations[e].push(this.textures[i])}}},/** The parse has completed. */t.prototype._parseComplete=function(){var t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)},/** Begin the next batch of textures. */t.prototype._nextBatch=function(){var e=this;this._processFrames(this._batchIndex*t.BATCH_SIZE),this._batchIndex++,setTimeout(function(){e._batchIndex*t.BATCH_SIZE<e._frameKeys.length?e._nextBatch():(e._processAnimations(),e._parseComplete())},0)},/**
     * Destroy Spritesheet and don't use after this.
     * @param {boolean} [destroyBase=false] - Whether to destroy the base texture as well
     */t.prototype.destroy=function(t){var e;for(var r in void 0===t&&(t=!1),this.textures)this.textures[r].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&(null===(e=this._texture)||void 0===e||e.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null,this.linkedSheets=[]},/** The maximum number of Textures to build per process. */t.BATCH_SIZE=1e3,t)}(),hb=/** @class */function(){function t(){}return(/**
     * Called after a resource is loaded.
     * @see PIXI.Loader.loaderMiddleware
     * @param resource
     * @param next
     */t.use=function(e,r){// because this is middleware, it execute in loader context. `this` = loader
var i,n,o=this,s=e.name+"_image";// skip if no data, its not json, it isn't spritesheet data, or the image resource already exists
if(!e.data||e.type!==s7.TYPE.JSON||!e.data.frames||o.resources[s]){r();return}// Check and add the multi atlas
// Heavily influenced and based on https://github.com/rocket-ua/pixi-tps-loader/blob/master/src/ResourceLoader.js
// eslint-disable-next-line camelcase
var a=null===(n=null===(i=e.data)||void 0===i?void 0:i.meta)||void 0===n?void 0:n.related_multi_packs;if(Array.isArray(a))for(var h=0;h<a.length;h++)!function(t){if("string"==typeof t){var r=t.replace(".json",""),i=i6.resolve(e.url.replace(o.baseUrl,""),t);// Check if the file wasn't already added as multipacks are redundant
if(!(o.resources[r]||Object.values(o.resources).some(function(t){return i6.format(i6.parse(t.url))===i}))){var n={crossOrigin:e.crossOrigin,loadType:s7.LOAD_TYPE.XHR,xhrType:s7.XHR_RESPONSE_TYPE.JSON,parentResource:e,metadata:e.metadata};o.add(r,i,n)}}}(a[h]);var u={crossOrigin:e.crossOrigin,metadata:e.metadata.imageMetadata,parentResource:e},l=t.getResourcePath(e,o.baseUrl);// load the image for this sheet
o.add(s,l,u,function(t){if(t.error){r(t.error);return}var i=new hg(t.texture,e.data,e.url);i.parse().then(function(){e.spritesheet=i,e.textures=i.textures,r()})})},/**
     * Get the spritesheets root path
     * @param resource - Resource to check path
     * @param baseUrl - Base root url
     */t.getResourcePath=function(t,e){return(// Prepend url path unless the resource image is a data url
t.isDataUrl?t.data.meta.image:i6.resolve(t.url.replace(e,""),t.data.meta.image))},/** @ignore */t.extension=tf.Loader,t)}(),hx=function(t,e){return(hx=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function hT(t,e){function r(){this.constructor=t}hx(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var hE=new nT;!/** @class */function(t){/**
     * @param texture - The texture of the tiling sprite.
     * @param width - The width of the tiling sprite.
     * @param height - The height of the tiling sprite.
     */function e(e,r,i){void 0===r&&(r=100),void 0===i&&(i=100);var n=t.call(this,e)||this;return n.tileTransform=new nU,// The width of the tiling sprite
n._width=r,// The height of the tiling sprite
n._height=i,n.uvMatrix=n.texture.uvMatrix||new se(e),/**
         * Plugin that is responsible for rendering this element.
         * Allows to customize the rendering process without overriding '_render' method.
         * @default 'tilingSprite'
         */n.pluginName="tilingSprite",n.uvRespectAnchor=!1,n}hT(e,t),Object.defineProperty(e.prototype,"clampMargin",{/**
         * Changes frame clamping in corresponding textureTransform, shortcut
         * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
         * @default 0.5
         * @member {number}
         */get:function(){return this.uvMatrix.clampMargin},set:function(t){this.uvMatrix.clampMargin=t,this.uvMatrix.update(!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tileScale",{/** The scaling of the image that is being tiled. */get:function(){return this.tileTransform.scale},set:function(t){this.tileTransform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tilePosition",{/** The offset of the image that is being tiled. */get:function(){return this.tileTransform.position},set:function(t){this.tileTransform.position.copyFrom(t)},enumerable:!1,configurable:!0}),/**
     * @protected
     */e.prototype._onTextureUpdate=function(){this.uvMatrix&&(this.uvMatrix.texture=this._texture),this._cachedTint=16777215},/**
     * Renders the object using the WebGL renderer
     * @param renderer - The renderer
     */e.prototype._render=function(t){// tweak our texture temporarily..
var e=this._texture;e&&e.valid&&(this.tileTransform.updateLocalTransform(),this.uvMatrix.update(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this))},/** Updates the bounds of the tiling sprite. */e.prototype._calculateBounds=function(){var t=-(this._width*this._anchor._x),e=-(this._height*this._anchor._y),r=this._width*(1-this._anchor._x),i=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,t,e,r,i)},/**
     * Gets the local bounds of the sprite object.
     * @param rect - Optional output rectangle.
     * @returns The bounds.
     */e.prototype.getLocalBounds=function(e){return(// we can do a fast local bounds if the sprite has no children!
0===this.children.length?(this._bounds.minX=-(this._width*this._anchor._x),this._bounds.minY=-(this._height*this._anchor._y),this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),e||(this._localBoundsRect||(this._localBoundsRect=new nA),e=this._localBoundsRect),this._bounds.getRectangle(e)):t.prototype.getLocalBounds.call(this,e))},/**
     * Checks if a point is inside this tiling sprite.
     * @param point - The point to check.
     * @returns Whether or not the sprite contains the point.
     */e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,hE);var e=this._width,r=this._height,i=-e*this.anchor._x;if(hE.x>=i&&hE.x<i+e){var n=-r*this.anchor._y;if(hE.y>=n&&hE.y<n+r)return!0}return!1},/**
     * Destroys this sprite and optionally its texture and children
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
     *      method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
     * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
     */e.prototype.destroy=function(e){t.prototype.destroy.call(this,e),this.tileTransform=null,this.uvMatrix=null},/**
     * Helper function that creates a new tiling sprite based on the source you provide.
     * The source can be - frame id, image url, video url, canvas element, video element, base texture
     * @static
     * @param {string|PIXI.Texture|HTMLCanvasElement|HTMLVideoElement} source - Source to create texture from
     * @param {object} options - See {@link PIXI.BaseTexture}'s constructor for options.
     * @param {number} options.width - required width of the tiling sprite
     * @param {number} options.height - required height of the tiling sprite
     * @returns {PIXI.TilingSprite} The newly created texture
     */e.from=function(t,r){var i=t instanceof o_?t:o_.from(t,r);return new e(i,r.width,r.height)},Object.defineProperty(e.prototype,"width",{/** The width of the sprite, setting this will actually modify the scale to achieve the value set. */get:function(){return this._width},set:function(t){this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{/** The height of the TilingSprite, setting this will actually modify the scale to achieve the value set. */get:function(){return this._height},set:function(t){this._height=t},enumerable:!1,configurable:!0})}(a4);var hA="#version 100\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n",hS=new nw,hR=/** @class */function(t){/**
     * constructor for renderer
     * @param {PIXI.Renderer} renderer - The renderer this tiling awesomeness works for.
     */function e(e){var r=t.call(this,e)||this;return(// WebGL version is not available during initialization!
e.runners.contextChange.add(r),r.quad=new oO,/**
         * The WebGL state in which this renderer will work.
         * @member {PIXI.State}
         * @readonly
         */r.state=o9.for2d(),r)}return hT(e,t),/** Creates shaders when context is initialized. */e.prototype.contextChange=function(){var t=this.renderer,e={globals:t.globalUniforms};this.simpleShader=o5.from(hA,"#version 100\n#define SHADER_NAME Tiling-Sprite-Simple-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 texSample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = texSample * uColor;\n}\n",e),this.shader=t.context.webGLVersion>1?o5.from("#version 300 es\n#define SHADER_NAME Tiling-Sprite-300\n\nprecision lowp float;\n\nin vec2 aVertexPosition;\nin vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nout vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n","#version 300 es\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nin vec2 vTextureCoord;\n\nout vec4 fragmentColor;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0\n\n    fragmentColor = texSample * uColor;\n}\n",e):o5.from(hA,"#version 100\n#ifdef GL_EXT_shader_texture_lod\n    #extension GL_EXT_shader_texture_lod : enable\n#endif\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    #ifdef GL_EXT_shader_texture_lod\n        vec4 texSample = unclamped == coord\n            ? texture2D(uSampler, coord) \n            : texture2DLodEXT(uSampler, coord, 0);\n    #else\n        vec4 texSample = texture2D(uSampler, coord);\n    #endif\n\n    gl_FragColor = texSample * uColor;\n}\n",e)},/**
     * @param {PIXI.TilingSprite} ts - tilingSprite to be rendered
     */e.prototype.render=function(t){var e,r=this.renderer,i=this.quad,n=i.vertices;n[0]=n[6]=-(t._width*t.anchor.x),n[1]=n[3]=-(t._height*t.anchor.y),n[2]=n[4]=t._width*(1-t.anchor.x),n[5]=n[7]=t._height*(1-t.anchor.y);var o=t.uvRespectAnchor?t.anchor.x:0,s=t.uvRespectAnchor?t.anchor.y:0;(n=i.uvs)[0]=n[6]=-o,n[1]=n[3]=-s,n[2]=n[4]=1-o,n[5]=n[7]=1-s,i.invalidate();var a=t._texture,h=a.baseTexture,u=h.alphaMode>0,l=t.tileTransform.localTransform,c=t.uvMatrix,f=h.isPowerOfTwo&&a.frame.width===h.width&&a.frame.height===h.height;f&&(h._glTextures[r.CONTEXT_UID]?f=h.wrapMode!==Q.CLAMP:h.wrapMode===Q.CLAMP&&(h.wrapMode=Q.REPEAT));var p=f?this.simpleShader:this.shader,d=a.width,_=a.height,y=t._width,v=t._height;hS.set(l.a*d/y,l.b*d/v,l.c*_/y,l.d*_/v,l.tx/y,l.ty/v),// that part is the same as above:
// tempMat.identity();
// tempMat.scale(tex.width, tex.height);
// tempMat.prepend(lt);
// tempMat.scale(1.0 / ts._width, 1.0 / ts._height);
hS.invert(),f?hS.prepend(c.mapCoord):(p.uniforms.uMapCoord=c.mapCoord.toArray(!0),p.uniforms.uClampFrame=c.uClampFrame,p.uniforms.uClampOffset=c.uClampOffset),p.uniforms.uTransform=hS.toArray(!0),p.uniforms.uColor=no(t.tint,t.worldAlpha,p.uniforms.uColor,u),p.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),p.uniforms.uSampler=a,r.shader.bind(p),r.geometry.bind(i),this.state.blendMode=(e=t.blendMode,ni[u?1:0][e]),r.state.set(this.state),r.geometry.draw(this.renderer.gl.TRIANGLES,6,0)},/** @ignore */e.extension={name:"tilingSprite",type:tf.RendererPlugin},e}(oF),hO=function(t,e){return(hO=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function hI(t,e){function r(){this.constructor=t}hO(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}/**
 * Class controls cache for UV mapping from Texture normal space to BaseTexture normal space.
 * @memberof PIXI
 */var hP=/** @class */function(){/**
     * @param uvBuffer - Buffer with normalized uv's
     * @param uvMatrix - Material UV matrix
     */function t(t,e){this.uvBuffer=t,this.uvMatrix=e,this.data=null,this._bufferUpdateId=-1,this._textureUpdateId=-1,this._updateID=0}return(/**
     * Updates
     * @param forceUpdate - force the update
     */t.prototype.update=function(t){if(t||this._bufferUpdateId!==this.uvBuffer._updateID||this._textureUpdateId!==this.uvMatrix._updateID){this._bufferUpdateId=this.uvBuffer._updateID,this._textureUpdateId=this.uvMatrix._updateID;var e=this.uvBuffer.data;this.data&&this.data.length===e.length||(this.data=new Float32Array(e.length)),this.uvMatrix.multiplyUvs(e,this.data),this._updateID++}},t)}(),hw=new nT,hM=new nO,hD=/** @class */function(t){/**
     * @param geometry - The geometry the mesh will use.
     * @param {PIXI.MeshMaterial} shader - The shader the mesh will use.
     * @param state - The state that the WebGL context is required to be in to render the mesh
     *        if no state is provided, uses {@link PIXI.State.for2d} to create a 2D state for PixiJS.
     * @param drawMode - The drawMode, can be any of the {@link PIXI.DRAW_MODES} constants.
     */function e(e,r,i,n){void 0===n&&(n=V.TRIANGLES);var o=t.call(this)||this;return o.geometry=e,o.shader=r,o.state=i||o9.for2d(),o.drawMode=n,o.start=0,o.size=0,o.uvs=null,o.indices=null,o.vertexData=new Float32Array(1),o.vertexDirty=-1,o._transformID=-1,o._roundPixels=eh.ROUND_PIXELS,o.batchUvs=null,o}return hI(e,t),Object.defineProperty(e.prototype,"geometry",{/**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh objects.
         */get:function(){return this._geometry},set:function(t){this._geometry!==t&&(this._geometry&&(this._geometry.refCount--,0===this._geometry.refCount&&this._geometry.dispose()),this._geometry=t,this._geometry&&this._geometry.refCount++,this.vertexDirty=-1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"uvBuffer",{/**
         * To change mesh uv's, change its uvBuffer data and increment its _updateID.
         * @readonly
         */get:function(){return this.geometry.buffers[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"verticesBuffer",{/**
         * To change mesh vertices, change its uvBuffer data and increment its _updateID.
         * Incrementing _updateID is optional because most of Mesh objects do it anyway.
         * @readonly
         */get:function(){return this.geometry.buffers[0]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"material",{get:function(){return this.shader},/** Alias for {@link PIXI.Mesh#shader}. */set:function(t){this.shader=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},/**
         * The blend mode to be applied to the Mesh. Apply a value of
         * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         * @default PIXI.BLEND_MODES.NORMAL;
         */set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},/**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
         * @default false
         */set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{/**
         * The multiply tint applied to the Mesh. This is a hex value. A value of
         * `0xFFFFFF` will remove any tint effect.
         *
         * Null for non-MeshMaterial shaders
         * @default 0xFFFFFF
         */get:function(){return"tint"in this.shader?this.shader.tint:null},set:function(t){this.shader.tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"texture",{/** The texture that the Mesh uses. Null for non-MeshMaterial shaders */get:function(){return"texture"in this.shader?this.shader.texture:null},set:function(t){this.shader.texture=t},enumerable:!1,configurable:!0}),/**
     * Standard renderer draw.
     * @param renderer - Instance to renderer.
     */e.prototype._render=function(t){// set properties for batching..
// TODO could use a different way to grab verts?
var r=this.geometry.buffers[0].data;// TODO benchmark check for attribute size..
this.shader.batchable&&this.drawMode===V.TRIANGLES&&r.length<2*e.BATCHABLE_SIZE?this._renderToBatch(t):this._renderDefault(t)},/**
     * Standard non-batching way of rendering.
     * @param renderer - Instance to renderer.
     */e.prototype._renderDefault=function(t){var e=this.shader;e.alpha=this.worldAlpha,e.update&&e.update(),t.batch.flush(),// bind and sync uniforms..
e.uniforms.translationMatrix=this.transform.worldTransform.toArray(!0),t.shader.bind(e),// set state..
t.state.set(this.state),// bind the geometry...
t.geometry.bind(this.geometry,e),// then render it
t.geometry.draw(this.drawMode,this.size,this.start,this.geometry.instanceCount)},/**
     * Rendering by using the Batch system.
     * @param renderer - Instance to renderer.
     */e.prototype._renderToBatch=function(t){var e=this.geometry,r=this.shader;r.uvMatrix&&(r.uvMatrix.update(),this.calculateUvs()),// set properties for batching..
this.calculateVertices(),this.indices=e.indexBuffer.data,this._tintRGB=r._tintRGB,this._texture=r.texture;var i=this.material.pluginName;t.batch.setObjectRenderer(t.plugins[i]),t.plugins[i].render(this)},/** Updates vertexData field based on transform and vertices. */e.prototype.calculateVertices=function(){var t=this.geometry.buffers[0],e=t.data,r=t._updateID;if(r!==this.vertexDirty||this._transformID!==this.transform._worldID){this._transformID=this.transform._worldID,this.vertexData.length!==e.length&&(this.vertexData=new Float32Array(e.length));for(var i=this.transform.worldTransform,n=i.a,o=i.b,s=i.c,a=i.d,h=i.tx,u=i.ty,l=this.vertexData,c=0;c<l.length/2;c++){var f=e[2*c],p=e[2*c+1];l[2*c]=n*f+s*p+h,l[2*c+1]=o*f+a*p+u}if(this._roundPixels)for(var d=eh.RESOLUTION,c=0;c<l.length;++c)l[c]=Math.round((l[c]*d|0)/d);this.vertexDirty=r}},/** Updates uv field based on from geometry uv's or batchUvs. */e.prototype.calculateUvs=function(){var t=this.geometry.buffers[1],e=this.shader;e.uvMatrix.isSimple?this.uvs=t.data:(this.batchUvs||(this.batchUvs=new hP(t,e.uvMatrix)),this.batchUvs.update(),this.uvs=this.batchUvs.data)},/**
     * Updates the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
     * there must be a aVertexPosition attribute present in the geometry for bounds to be calculated correctly.
     */e.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addVertexData(this.vertexData,0,this.vertexData.length)},/**
     * Tests if a point is inside this mesh. Works only for PIXI.DRAW_MODES.TRIANGLES.
     * @param point - The point to test.
     * @returns - The result of the test.
     */e.prototype.containsPoint=function(t){if(!this.getBounds().contains(t.x,t.y))return!1;this.worldTransform.applyInverse(t,hw);for(var e=this.geometry.getBuffer("aVertexPosition").data,r=hM.points,i=this.geometry.getIndex().data,n=i.length,o=4===this.drawMode?3:1,s=0;s+2<n;s+=o){var a=2*i[s],h=2*i[s+1],u=2*i[s+2];if(r[0]=e[a],r[1]=e[a+1],r[2]=e[h],r[3]=e[h+1],r[4]=e[u],r[5]=e[u+1],hM.contains(hw.x,hw.y))return!0}return!1},e.prototype.destroy=function(e){t.prototype.destroy.call(this,e),this._cachedTexture&&(this._cachedTexture.destroy(),this._cachedTexture=null),this.geometry=null,this.shader=null,this.state=null,this.uvs=null,this.indices=null,this.vertexData=null},/** The maximum number of vertices to consider batchable. Generally, the complexity of the geometry. */e.BATCHABLE_SIZE=100,e}(nV),hC=/** @class */function(t){/**
     * @param uSampler - Texture that material uses to render.
     * @param options - Additional options
     * @param {number} [options.alpha=1] - Default alpha.
     * @param {number} [options.tint=0xFFFFFF] - Default tint.
     * @param {string} [options.pluginName='batch'] - Renderer plugin for batching.
     * @param {PIXI.Program} [options.program=0xFFFFFF] - Custom program.
     * @param {object} [options.uniforms] - Custom uniforms.
     */function e(e,r){var i=this,n={uSampler:e,alpha:1,uTextureMatrix:nw.IDENTITY,uColor:new Float32Array([1,1,1,1])};return(// Set defaults
(r=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},r)).uniforms&&Object.assign(n,r.uniforms),(i=t.call(this,r.program||o6.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n","varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n"),n)||this)._colorDirty=!1,i.uvMatrix=new se(e),i.batchable=void 0===r.program,i.pluginName=r.pluginName,i.tint=r.tint,i.alpha=r.alpha,i)}return hI(e,t),Object.defineProperty(e.prototype,"texture",{/** Reference to the texture being rendered. */get:function(){return this.uniforms.uSampler},set:function(t){this.uniforms.uSampler!==t&&(!this.uniforms.uSampler.baseTexture.alphaMode!=!t.baseTexture.alphaMode&&(this._colorDirty=!0),this.uniforms.uSampler=t,this.uvMatrix.texture=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._alpha},/**
         * This gets automatically set by the object using this.
         * @default 1
         */set:function(t){t!==this._alpha&&(this._alpha=t,this._colorDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},/**
         * Multiply tint for the material.
         * @default 0xFFFFFF
         */set:function(t){t!==this._tint&&(this._tint=t,this._tintRGB=(t>>16)+(65280&t)+((255&t)<<16),this._colorDirty=!0)},enumerable:!1,configurable:!0}),/** Gets called automatically by the Mesh. Intended to be overridden for custom {@link MeshMaterial} objects. */e.prototype.update=function(){if(this._colorDirty){this._colorDirty=!1;var t=this.texture.baseTexture;no(this._tint,this._alpha,this.uniforms.uColor,t.alphaMode)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)},e}(o5),hF=/** @class */function(t){/**
     * @param {Float32Array|number[]} [vertices] - Positional data on geometry.
     * @param {Float32Array|number[]} [uvs] - Texture UVs.
     * @param {Uint16Array|number[]} [index] - IndexBuffer
     */function e(e,r,i){var n=t.call(this)||this,o=new ob(e),s=new ob(r,!0),a=new ob(i,!0,!0);return n.addAttribute("aVertexPosition",o,2,!1,K.FLOAT).addAttribute("aTextureCoord",s,2,!1,K.FLOAT).addIndex(a),n._updateId=-1,n}return hI(e,t),Object.defineProperty(e.prototype,"vertexDirtyId",{/**
         * If the vertex position is updated.
         * @readonly
         * @private
         */get:function(){return this.buffers[0]._updateID},enumerable:!1,configurable:!0}),e}(oS),hN=function(t,e){return(hN=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},hL=function(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[],this.distanceField=[]},hB=/** @class */function(){function t(){}return(/**
     * Check if resource refers to txt font data.
     * @param data
     * @returns - True if resource could be treated as font data, false otherwise.
     */t.test=function(t){return"string"==typeof t&&0===t.indexOf("info face=")},/**
     * Convert text font data to a javascript object.
     * @param txt - Raw string data to be converted
     * @returns - Parsed font data
     */t.parse=function(t){// Retrieve data item
var e=t.match(/^[a-z]+\s+.+$/gm),r={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(var i in e){// Extract item name
var n=e[i].match(/^[a-z]+/gm)[0],o=e[i].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),s={};for(var a in o){// Split key-value pairs
var h=o[a].split("="),u=h[0],l=h[1].replace(/"/gm,""),c=parseFloat(l),f=isNaN(c)?l:c;s[u]=f}// Push current item to the resulting data
r[n].push(s)}var p=new hL;return r.info.forEach(function(t){return p.info.push({face:t.face,size:parseInt(t.size,10)})}),r.common.forEach(function(t){return p.common.push({lineHeight:parseInt(t.lineHeight,10)})}),r.page.forEach(function(t){return p.page.push({id:parseInt(t.id,10),file:t.file})}),r.char.forEach(function(t){return p.char.push({id:parseInt(t.id,10),page:parseInt(t.page,10),x:parseInt(t.x,10),y:parseInt(t.y,10),width:parseInt(t.width,10),height:parseInt(t.height,10),xoffset:parseInt(t.xoffset,10),yoffset:parseInt(t.yoffset,10),xadvance:parseInt(t.xadvance,10)})}),r.kerning.forEach(function(t){return p.kerning.push({first:parseInt(t.first,10),second:parseInt(t.second,10),amount:parseInt(t.amount,10)})}),r.distanceField.forEach(function(t){return p.distanceField.push({distanceRange:parseInt(t.distanceRange,10),fieldType:t.fieldType})}),p},t)}(),hG=/** @class */function(){function t(){}return(/**
     * Check if resource refers to xml font data.
     * @param data
     * @returns - True if resource could be treated as font data, false otherwise.
     */t.test=function(t){return t instanceof XMLDocument&&t.getElementsByTagName("page").length&&null!==t.getElementsByTagName("info")[0].getAttribute("face")},/**
     * Convert the XML into BitmapFontData that we can use.
     * @param xml
     * @returns - Data to use for BitmapFont
     */t.parse=function(t){for(var e=new hL,r=t.getElementsByTagName("info"),i=t.getElementsByTagName("common"),n=t.getElementsByTagName("page"),o=t.getElementsByTagName("char"),s=t.getElementsByTagName("kerning"),a=t.getElementsByTagName("distanceField"),h=0;h<r.length;h++)e.info.push({face:r[h].getAttribute("face"),size:parseInt(r[h].getAttribute("size"),10)});for(var h=0;h<i.length;h++)e.common.push({lineHeight:parseInt(i[h].getAttribute("lineHeight"),10)});for(var h=0;h<n.length;h++)e.page.push({id:parseInt(n[h].getAttribute("id"),10)||0,file:n[h].getAttribute("file")});for(var h=0;h<o.length;h++){var u=o[h];e.char.push({id:parseInt(u.getAttribute("id"),10),page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xoffset:parseInt(u.getAttribute("xoffset"),10),yoffset:parseInt(u.getAttribute("yoffset"),10),xadvance:parseInt(u.getAttribute("xadvance"),10)})}for(var h=0;h<s.length;h++)e.kerning.push({first:parseInt(s[h].getAttribute("first"),10),second:parseInt(s[h].getAttribute("second"),10),amount:parseInt(s[h].getAttribute("amount"),10)});for(var h=0;h<a.length;h++)e.distanceField.push({fieldType:a[h].getAttribute("fieldType"),distanceRange:parseInt(a[h].getAttribute("distanceRange"),10)});return e},t)}(),hU=/** @class */function(){function t(){}return(/**
     * Check if resource refers to text xml font data.
     * @param data
     * @returns - True if resource could be treated as font data, false otherwise.
     */t.test=function(t){if("string"==typeof t&&t.indexOf("<font>")>-1){var e=new globalThis.DOMParser().parseFromString(t,"text/xml");return hG.test(e)}return!1},/**
     * Convert the text XML into BitmapFontData that we can use.
     * @param xmlTxt
     * @returns - Data to use for BitmapFont
     */t.parse=function(t){var e=new globalThis.DOMParser().parseFromString(t,"text/xml");return hG.parse(e)},t)}(),hk=[hB,hG,hU];/**
 * Auto-detect BitmapFont parsing format based on data.
 * @private
 * @param {any} data - Data to detect format
 * @returns {any} Format or null
 */function hX(t){for(var e=0;e<hk.length;e++)if(hk[e].test(t))return hk[e];return null}/**
 * Ponyfill for IE because it doesn't support `Array.from`
 * @param text
 * @private
 */function hj(t){return Array.from?Array.from(t):t.split("")}/**
 * Ponyfill for IE because it doesn't support `codePointAt`
 * @param str
 * @private
 */function hH(t){return t.codePointAt?t.codePointAt(0):t.charCodeAt(0)}/**
 * BitmapFont represents a typeface available for use with the BitmapText class. Use the `install`
 * method for adding a font to be used.
 * @memberof PIXI
 */var hY=/** @class */function(){/**
     * @param data
     * @param textures
     * @param ownsTextures - Setting to `true` will destroy page textures
     *        when the font is uninstalled.
     */function t(t,e,r){var i,n,o=t.info[0],s=t.common[0],a=t.page[0],h=t.distanceField[0],u=nm(a.file),l={};this._ownsTextures=r,this.font=o.face,this.size=o.size,this.lineHeight=s.lineHeight/u,this.chars={},this.pageTextures=l;// Convert the input Texture, Textures or object
// into a page Texture lookup by "id"
for(var c=0;c<t.page.length;c++){var f=t.page[c],p=f.id,d=f.file;l[p]=e instanceof Array?e[c]:e[d],(null==h?void 0:h.fieldType)&&"none"!==h.fieldType&&(l[p].baseTexture.alphaMode=tt.NO_PREMULTIPLIED_ALPHA,l[p].baseTexture.mipmap=$.OFF)}// parse letters
for(var c=0;c<t.char.length;c++){var _=t.char[c],p=_.id,y=_.page,v=t.char[c],m=v.x,g=v.y,b=v.width,x=v.height,T=v.xoffset,E=v.yoffset,A=v.xadvance;m/=u,g/=u,b/=u,x/=u,T/=u,E/=u,A/=u;var S=new nA(m+l[y].frame.x/u,g+l[y].frame.y/u,b,x);this.chars[p]={xOffset:T,yOffset:E,xAdvance:A,kerning:{},texture:new o_(l[y].baseTexture,S),page:y}}// parse kernings
for(var c=0;c<t.kerning.length;c++){var R=t.kerning[c],O=R.first,I=R.second,P=R.amount;O/=u,I/=u,P/=u,this.chars[I]&&(this.chars[I].kerning[O]=P)}// Store distance field information
this.distanceFieldRange=null==h?void 0:h.distanceRange,this.distanceFieldType=null!==(n=null===(i=null==h?void 0:h.fieldType)||void 0===i?void 0:i.toLowerCase())&&void 0!==n?n:"none"}return(/** Remove references to created glyph textures. */t.prototype.destroy=function(){for(var t in this.chars)this.chars[t].texture.destroy(),this.chars[t].texture=null;for(var t in this.pageTextures)this._ownsTextures&&this.pageTextures[t].destroy(!0),this.pageTextures[t]=null;// Set readonly null.
this.chars=null,this.pageTextures=null},/**
     * Register a new bitmap font.
     * @param data - The
     *        characters map that could be provided as xml or raw string.
     * @param textures - List of textures for each page.
     * @param ownsTextures - Set to `true` to destroy page textures
     *        when the font is uninstalled. By default fonts created with
     *        `BitmapFont.from` or from the `BitmapFontLoader` are `true`.
     * @returns {PIXI.BitmapFont} Result font object with font, size, lineHeight
     *         and char fields.
     */t.install=function(e,r,i){if(e instanceof hL)n=e;else{var n,o=hX(e);if(!o)throw Error("Unrecognized data format for font.");n=o.parse(e)}r instanceof o_&&(r=[r]);var s=new t(n,r,i);return t.available[s.font]=s,s},/**
     * Remove bitmap font by name.
     * @param name - Name of the font to uninstall.
     */t.uninstall=function(e){var r=t.available[e];if(!r)throw Error("No font found named '"+e+"'");r.destroy(),delete t.available[e]},/**
     * Generates a bitmap-font for the given style and character set. This does not support
     * kernings yet. With `style` properties, only the following non-layout properties are used:
     *
     * - {@link PIXI.TextStyle#dropShadow|dropShadow}
     * - {@link PIXI.TextStyle#dropShadowDistance|dropShadowDistance}
     * - {@link PIXI.TextStyle#dropShadowColor|dropShadowColor}
     * - {@link PIXI.TextStyle#dropShadowBlur|dropShadowBlur}
     * - {@link PIXI.TextStyle#dropShadowAngle|dropShadowAngle}
     * - {@link PIXI.TextStyle#fill|fill}
     * - {@link PIXI.TextStyle#fillGradientStops|fillGradientStops}
     * - {@link PIXI.TextStyle#fillGradientType|fillGradientType}
     * - {@link PIXI.TextStyle#fontFamily|fontFamily}
     * - {@link PIXI.TextStyle#fontSize|fontSize}
     * - {@link PIXI.TextStyle#fontVariant|fontVariant}
     * - {@link PIXI.TextStyle#fontWeight|fontWeight}
     * - {@link PIXI.TextStyle#lineJoin|lineJoin}
     * - {@link PIXI.TextStyle#miterLimit|miterLimit}
     * - {@link PIXI.TextStyle#stroke|stroke}
     * - {@link PIXI.TextStyle#strokeThickness|strokeThickness}
     * - {@link PIXI.TextStyle#textBaseline|textBaseline}
     * @param name - The name of the custom font to use with BitmapText.
     * @param textStyle - Style options to render with BitmapFont.
     * @param options - Setup options for font or name of the font.
     * @param {string|string[]|string[][]} [options.chars=PIXI.BitmapFont.ALPHANUMERIC] - characters included
     *      in the font set. You can also use ranges. For example, `[['a', 'z'], ['A', 'Z'], "!@#$%^&*()~{}[] "]`.
     *      Don't forget to include spaces ' ' in your character set!
     * @param {number} [options.resolution=1] - Render resolution for glyphs.
     * @param {number} [options.textureWidth=512] - Optional width of atlas, smaller values to reduce memory.
     * @param {number} [options.textureHeight=512] - Optional height of atlas, smaller values to reduce memory.
     * @param {number} [options.padding=4] - Padding between glyphs on texture atlas.
     * @returns Font generated by style options.
     * @example
     * PIXI.BitmapFont.from("TitleFont", {
     *     fontFamily: "Arial",
     *     fontSize: 12,
     *     strokeThickness: 2,
     *     fill: "purple"
     * });
     *
     * const title = new PIXI.BitmapText("This is the title", { fontName: "TitleFont" });
     */t.from=function(e,r,i){if(!e)throw Error("[BitmapFont] Property `name` is required.");var n,o,s,a=Object.assign({},t.defaultOptions,i),h=a.chars,u=a.padding,l=a.resolution,c=a.textureWidth,f=a.textureHeight,p=/**
 * Processes the passed character set data and returns a flattened array of all the characters.
 *
 * Ignored because not directly exposed.
 * @ignore
 * @param {string | string[] | string[][] } chars
 * @returns {string[]} the flattened array of characters
 */function(t){// Split the chars string into individual characters
"string"==typeof t&&(t=[t]);for(var e=[],r=0,i=t.length;r<i;r++){var n=t[r];// Handle range delimited by start/end chars
if(Array.isArray(n)){if(2!==n.length)throw Error("[BitmapFont]: Invalid character range length, expecting 2 got "+n.length+".");var o=n[0].charCodeAt(0),s=n[1].charCodeAt(0);if(s<o)throw Error("[BitmapFont]: Invalid character range.");for(var a=o;a<=s;a++)e.push(String.fromCharCode(a))}else e.push.apply(e,hj(n))}if(0===e.length)throw Error("[BitmapFont]: Empty set when resolving characters.");return e}(h),d=r instanceof a9?r:new a9(r),_=new hL;_.info[0]={face:d.fontFamily,size:d.fontSize},_.common[0]={lineHeight:d.fontSize};for(var y=0,v=0,m=0,g=[],b=0;b<p.length;b++){n||((n=eh.ADAPTER.createCanvas()).width=c,n.height=f,o=n.getContext("2d"),s=new n9(n,{resolution:l}),g.push(new o_(s)),_.page.push({id:g.length-1,file:""}));// Measure glyph dimensions
var x=p[b],T=hi.measureText(x,d,!1,n),E=T.width,A=Math.ceil(T.height),S=Math.ceil(("italic"===d.fontStyle?2:1)*E);// Can't fit char anymore: next canvas please!
if(v>=f-A*l){if(0===v)throw Error("[BitmapFont] textureHeight "+f+"px is too small "+("(fontFamily: '"+d.fontFamily+"', fontSize: "+d.fontSize)+"px, char: '"+x+"')");--b,// Create new atlas once current has filled up
n=null,o=null,s=null,v=0,y=0,m=0;continue}// Wrap line once full row has been rendered
if(m=Math.max(A+T.fontProperties.descent,m),S*l+y>=c){if(0===y)throw Error("[BitmapFont] textureWidth "+c+"px is too small "+("(fontFamily: '"+d.fontFamily+"', fontSize: "+d.fontSize)+"px, char: '"+x+"')");--b,v+=m*l,v=Math.ceil(v),y=0,m=0;continue}!// TODO: Prevent code duplication b/w drawGlyph & Text#updateText
/**
 * Draws the glyph `metrics.text` on the given canvas.
 *
 * Ignored because not directly exposed.
 * @ignore
 * @param {HTMLCanvasElement} canvas
 * @param {CanvasRenderingContext2D} context
 * @param {TextMetrics} metrics
 * @param {number} x
 * @param {number} y
 * @param {number} resolution
 * @param {TextStyle} style
 */function(t,e,r,i,n,o,s){var a=r.text,h=r.fontProperties;e.translate(i,n),e.scale(o,o);var u=s.strokeThickness/2,l=-(s.strokeThickness/2);if(e.font=s.toFontString(),e.lineWidth=s.strokeThickness,e.textBaseline=s.textBaseline,e.lineJoin=s.lineJoin,e.miterLimit=s.miterLimit,// set canvas text styles
e.fillStyle=// TODO: Prevent code duplication b/w generateFillStyle & Text#generateFillStyle
/**
 * Generates the fill style. Can automatically generate a gradient based on the fill style being an array
 * @private
 * @param canvas
 * @param context
 * @param {object} style - The style.
 * @param resolution
 * @param {string[]} lines - The lines of text.
 * @param metrics
 * @returns {string|number|CanvasGradient} The fill style
 */function(t,e,r,i,n,o){// TODO: Can't have different types for getter and setter. The getter shouldn't have the number type as
//       the setter converts to string. See this thread for more details:
//       https://github.com/microsoft/TypeScript/issues/2521
var s,a=r.fill;if(!Array.isArray(a))return a;if(1===a.length)return a[0];// a dropshadow will enlarge the canvas and result in the gradient being
// generated with the incorrect dimensions
var h=r.dropShadow?r.dropShadowDistance:0,u=r.padding||0,l=t.width/i-h-2*u,c=t.height/i-h-2*u,f=a.slice(),p=r.fillGradientStops.slice();// wanting to evenly distribute the fills. So an array of 4 colours should give fills of 0.25, 0.5 and 0.75
if(!p.length)for(var d=f.length+1,_=1;_<d;++_)p.push(_/d);if(// stop the bleeding of the last gradient on the line above to the top gradient of the this line
// by hard defining the first gradient colour at point 0, and last gradient colour at point 1
f.unshift(a[0]),p.unshift(0),f.push(a[a.length-1]),p.push(1),r.fillGradientType===tP.LINEAR_VERTICAL){// start the gradient at the top center of the canvas, and end at the bottom middle of the canvas
s=e.createLinearGradient(l/2,u,l/2,c+u);for(var y=0,v=(o.fontProperties.fontSize+r.strokeThickness)/c,_=0;_<n.length;_++)for(var m=o.lineHeight*_,g=0;g<f.length;g++){// 0-1 stop point for the current line, multiplied to global space afterwards
var b=Math.max(y,m/c+("number"==typeof p[g]?p[g]:g/f.length)*v);b=Math.min(b,1),s.addColorStop(b,f[g]),y=b}}else{// start the gradient at the center left of the canvas, and end at the center right of the canvas
s=e.createLinearGradient(u,c/2,l+u,c/2);for(var x=f.length+1,T=1,_=0;_<f.length;_++){var E=void 0;E="number"==typeof p[_]?p[_]:T/x,s.addColorStop(E,f[_]),T++}}return s}(t,e,s,o,[a],r),e.strokeStyle=s.stroke,s.dropShadow){var c=s.dropShadowColor,f=nt("number"==typeof c?c:nr(c)),p=s.dropShadowBlur*o,d=s.dropShadowDistance*o;e.shadowColor="rgba("+255*f[0]+","+255*f[1]+","+255*f[2]+","+s.dropShadowAlpha+")",e.shadowBlur=p,e.shadowOffsetX=Math.cos(s.dropShadowAngle)*d,e.shadowOffsetY=Math.sin(s.dropShadowAngle)*d}else e.shadowColor="black",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0;s.stroke&&s.strokeThickness&&e.strokeText(a,u,l+r.lineHeight-h.descent),s.fill&&e.fillText(a,u,l+r.lineHeight-h.descent),e.setTransform(1,0,0,1,0,0),e.fillStyle="rgba(0, 0, 0, 0)"}(n,o,T,y,v,l,d);// Unique (numeric) ID mapping to this glyph
var R=hH(T.text);// Create a texture holding just the glyph
_.char.push({id:R,page:g.length-1,x:y/l,y:v/l,width:S,height:A,xoffset:0,yoffset:0,xadvance:Math.ceil(E-(d.dropShadow?d.dropShadowDistance:0)-(d.stroke?d.strokeThickness:0))}),y+=(S+2*u)*l,y=Math.ceil(y)}if(!(null==i?void 0:i.skipKerning))// but we're using measureText which is native and fast.
for(var b=0,O=p.length;b<O;b++)for(var I=p[b],P=0;P<O;P++){var w=p[P],M=o.measureText(I).width,D=o.measureText(w).width,C=o.measureText(I+w).width-(M+D);C&&_.kerning.push({first:hH(I),second:hH(w),amount:C})}var F=new t(_,g,!0);return void 0!==t.available[e]&&t.uninstall(e),t.available[e]=F,F},/**
     * This character set includes all the letters in the alphabet (both lower- and upper- case).
     * @type {string[][]}
     * @example
     * BitmapFont.from("ExampleFont", style, { chars: BitmapFont.ALPHA })
     */t.ALPHA=[["a","z"],["A","Z"]," "],/**
     * This character set includes all decimal digits (from 0 to 9).
     * @type {string[][]}
     * @example
     * BitmapFont.from("ExampleFont", style, { chars: BitmapFont.NUMERIC })
     */t.NUMERIC=[["0","9"]],/**
     * This character set is the union of `BitmapFont.ALPHA` and `BitmapFont.NUMERIC`.
     * @type {string[][]}
     */t.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],/**
     * This character set consists of all the ASCII table.
     * @member {string[][]}
     * @see http://www.asciitable.com/
     */t.ASCII=[[" ","~"]],/**
     * Collection of default options when using `BitmapFont.from`.
     * @property {number} [resolution=1] -
     * @property {number} [textureWidth=512] -
     * @property {number} [textureHeight=512] -
     * @property {number} [padding=4] -
     * @property {string|string[]|string[][]} chars = PIXI.BitmapFont.ALPHANUMERIC
     */t.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:t.ALPHANUMERIC},/** Collection of available/installed fonts. */t.available={},t)}(),hz=[],hV=[],hW=[];!/** @class */function(t){/**
     * @param text - A string that you would like the text to display.
     * @param style - The style parameters.
     * @param {string} style.fontName - The installed BitmapFont name.
     * @param {number} [style.fontSize] - The size of the font in pixels, e.g. 24. If undefined,
     *.     this will default to the BitmapFont size.
     * @param {string} [style.align='left'] - Alignment for multiline text ('left', 'center', 'right' or 'justify'),
     *      does not affect single line text.
     * @param {number} [style.tint=0xFFFFFF] - The tint color.
     * @param {number} [style.letterSpacing=0] - The amount of spacing between letters.
     * @param {number} [style.maxWidth=0] - The max width of the text before line wrapping.
     */function e(r,i){void 0===i&&(i={});var n=t.call(this)||this;/**
         * Private tracker for the current tint.
         * @private
         */n._tint=16777215;// Apply the defaults
var o=Object.assign({},e.styleDefaults,i),s=o.align,a=o.tint,h=o.maxWidth,u=o.letterSpacing,l=o.fontName,c=o.fontSize;if(!hY.available[l])throw Error('Missing BitmapFont "'+l+'"');return n._activePagesMeshData=[],n._textWidth=0,n._textHeight=0,n._align=s,n._tint=a,n._font=void 0,n._fontName=l,n._fontSize=c,n.text=r,n._maxWidth=h,n._maxLineHeight=0,n._letterSpacing=u,n._anchor=new nP(function(){n.dirty=!0},n,0,0),n._roundPixels=eh.ROUND_PIXELS,n.dirty=!0,n._resolution=eh.RESOLUTION,n._autoResolution=!0,n._textureCache={},n}!function(t,e){function r(){this.constructor=t}hN(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),/** Renders text and updates it when needed. This should only be called if the BitmapFont is regenerated. */e.prototype.updateText=function(){for(var t,e=hY.available[this._fontName],r=this.fontSize,i=r/e.size,n=new nT,o=[],s=[],a=[],h=hj(this._text.replace(/(?:\r\n|\r)/g,"\n")||" "),u=this._maxWidth*e.size/r,l="none"===e.distanceFieldType?hz:hV,c=null,f=0,p=0,d=0,_=-1,y=0,v=0,m=0,g=0,b=0;b<h.length;b++){var x=h[b],T=hH(x);if(/(?:\s)/.test(x)&&(_=b,y=f,g++),"\r"===x||"\n"===x){s.push(f),a.push(-1),p=Math.max(p,f),++d,++v,n.x=0,n.y+=e.lineHeight,c=null,g=0;continue}var E=e.chars[T];if(E){c&&E.kerning[c]&&(n.x+=E.kerning[c]);var A=hW.pop()||{texture:o_.EMPTY,line:0,charCode:0,prevSpaces:0,position:new nT};A.texture=E.texture,A.line=d,A.charCode=T,A.position.x=n.x+E.xOffset+this._letterSpacing/2,A.position.y=n.y+E.yOffset,A.prevSpaces=g,o.push(A),f=A.position.x+Math.max(E.xAdvance-E.xOffset,E.texture.orig.width),n.x+=E.xAdvance+this._letterSpacing,m=Math.max(m,E.yOffset+E.texture.height),c=T,-1!==_&&u>0&&n.x>u&&(nu(o,1+_-++v,1+b-_),b=_,_=-1,s.push(y),a.push(o.length>0?o[o.length-1].prevSpaces:0),p=Math.max(p,y),d++,n.x=0,n.y+=e.lineHeight,c=null,g=0)}}var S=h[h.length-1];"\r"!==S&&"\n"!==S&&(/(?:\s)/.test(S)&&(f=y),s.push(f),p=Math.max(p,f),a.push(-1));for(var R=[],b=0;b<=d;b++){var O=0;"right"===this._align?O=p-s[b]:"center"===this._align?O=(p-s[b])/2:"justify"===this._align&&(O=a[b]<0?0:(p-s[b])/a[b]),R.push(O)}var I=o.length,P={},w=[],M=this._activePagesMeshData;l.push.apply(l,M);for(var b=0;b<I;b++){var D=o[b].texture,C=D.baseTexture.uid;if(!P[C]){var F=l.pop();if(!F){var N=new hF,L=void 0,B=void 0;"none"===e.distanceFieldType?(L=new hC(o_.EMPTY),B=z.NORMAL):(L=new hC(o_.EMPTY,{program:o6.from("// Mesh material default fragment\r\nattribute vec2 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\n\r\nuniform mat3 projectionMatrix;\r\nuniform mat3 translationMatrix;\r\nuniform mat3 uTextureMatrix;\r\n\r\nvarying vec2 vTextureCoord;\r\n\r\nvoid main(void)\r\n{\r\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r\n\r\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r\n}\r\n","// Pixi texture info\r\nvarying vec2 vTextureCoord;\r\nuniform sampler2D uSampler;\r\n\r\n// Tint\r\nuniform vec4 uColor;\r\n\r\n// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r\nuniform float uFWidth;\r\n\r\nvoid main(void) {\r\n\r\n  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r\n  vec4 texColor = texture2D(uSampler, vTextureCoord);\r\n\r\n  // MSDF\r\n  float median = texColor.r + texColor.g + texColor.b -\r\n                  min(texColor.r, min(texColor.g, texColor.b)) -\r\n                  max(texColor.r, max(texColor.g, texColor.b));\r\n  // SDF\r\n  median = min(median, texColor.a);\r\n\r\n  float screenPxDistance = uFWidth * (median - 0.5);\r\n  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r\n  if (median < 0.01) {\r\n    alpha = 0.0;\r\n  } else if (median > 0.99) {\r\n    alpha = 1.0;\r\n  }\r\n\r\n  // NPM Textures, NPM outputs\r\n  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r\n\r\n}\r\n"),uniforms:{uFWidth:0}}),B=z.NORMAL_NPM);var G=new hD(N,L);G.blendMode=B,F={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:G,vertices:null,uvs:null,indices:null}}// reset data..
F.index=0,F.indexCount=0,F.vertexCount=0,F.uvsCount=0,F.total=0;// TODO need to get page texture here somehow..
var U=this._textureCache;U[C]=U[C]||new o_(D.baseTexture),F.mesh.texture=U[C],F.mesh.tint=this._tint,w.push(F),P[C]=F}P[C].total++}// lets find any previously active pageMeshDatas that are no longer required for
// the updated text (if any), removed and return them to the pool.
for(var b=0;b<M.length;b++)-1===w.indexOf(M[b])&&this.removeChild(M[b].mesh);// next lets add any new meshes, that have not yet been added to this BitmapText
// we only add if its not already a child of this BitmapObject
for(var b=0;b<w.length;b++)w[b].mesh.parent!==this&&this.addChild(w[b].mesh);for(var b in // active page mesh datas are set to be the new pages added.
this._activePagesMeshData=w,P){var F=P[b],k=F.total;// lets only allocate new buffers if we can fit the new text in the current ones..
// unless that is, we will be batching. Currently batching dose not respect the size property of mesh
if(!((null===(t=F.indices)||void 0===t?void 0:t.length)>6*k)||F.vertices.length<2*hD.BATCHABLE_SIZE)F.vertices=new Float32Array(8*k),F.uvs=new Float32Array(8*k),F.indices=new Uint16Array(6*k);else // Clear the garbage at the end of the vertices buffer. This will prevent the bounds miscalculation.
for(var X=F.total,j=F.vertices,H=8*X;H<j.length;H++)j[H]=0;// as a buffer maybe bigger than the current word, we set the size of the meshMaterial
// to match the number of letters needed
F.mesh.size=6*k}for(var b=0;b<I;b++){var x=o[b],Y=x.position.x+R[x.line]*("justify"===this._align?x.prevSpaces:1);this._roundPixels&&(Y=Math.round(Y));var V=Y*i,W=x.position.y*i,D=x.texture,q=P[D.baseTexture.uid],K=D.frame,Z=D._uvs,J=q.index++;q.indices[6*J+0]=0+4*J,q.indices[6*J+1]=1+4*J,q.indices[6*J+2]=2+4*J,q.indices[6*J+3]=0+4*J,q.indices[6*J+4]=2+4*J,q.indices[6*J+5]=3+4*J,q.vertices[8*J+0]=V,q.vertices[8*J+1]=W,q.vertices[8*J+2]=V+K.width*i,q.vertices[8*J+3]=W,q.vertices[8*J+4]=V+K.width*i,q.vertices[8*J+5]=W+K.height*i,q.vertices[8*J+6]=V,q.vertices[8*J+7]=W+K.height*i,q.uvs[8*J+0]=Z.x0,q.uvs[8*J+1]=Z.y0,q.uvs[8*J+2]=Z.x1,q.uvs[8*J+3]=Z.y1,q.uvs[8*J+4]=Z.x2,q.uvs[8*J+5]=Z.y2,q.uvs[8*J+6]=Z.x3,q.uvs[8*J+7]=Z.y3}for(var b in this._textWidth=p*i,this._textHeight=(n.y+e.lineHeight)*i,P){var F=P[b];// apply anchor
if(0!==this.anchor.x||0!==this.anchor.y)for(var Q=0,$=this._textWidth*this.anchor.x,tt=this._textHeight*this.anchor.y,te=0;te<F.total;te++)F.vertices[Q++]-=$,F.vertices[Q++]-=tt,F.vertices[Q++]-=$,F.vertices[Q++]-=tt,F.vertices[Q++]-=$,F.vertices[Q++]-=tt,F.vertices[Q++]-=$,F.vertices[Q++]-=tt;this._maxLineHeight=m*i;var tr=F.mesh.geometry.getBuffer("aVertexPosition"),ti=F.mesh.geometry.getBuffer("aTextureCoord"),tn=F.mesh.geometry.getIndex();tr.data=F.vertices,ti.data=F.uvs,tn.data=F.indices,tr.update(),ti.update(),tn.update()}for(var b=0;b<o.length;b++)hW.push(o[b]);this._font=e,this.dirty=!1},e.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},e.prototype._render=function(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0);// Update the uniform
var r=hY.available[this._fontName],i=r.distanceFieldRange,n=r.distanceFieldType,o=r.size;if("none"!==n)for(var s=this.worldTransform,a=s.a,h=s.b,u=s.c,l=s.d,c=(Math.abs(Math.sqrt(a*a+h*h))+Math.abs(Math.sqrt(u*u+l*l)))/2,f=this.fontSize/o,p=0,d=this._activePagesMeshData;p<d.length;p++)d[p].mesh.shader.uniforms.uFWidth=c*i*f*this._resolution;t.prototype._render.call(this,e)},/**
     * Validates text before calling parent's getLocalBounds
     * @returns - The rectangular bounding area
     */e.prototype.getLocalBounds=function(){return this.validate(),t.prototype.getLocalBounds.call(this)},/**
     * Updates text when needed
     * @private
     */e.prototype.validate=function(){var t=hY.available[this._fontName];if(!t)throw Error('Missing BitmapFont "'+this._fontName+'"');this._font!==t&&(this.dirty=!0),this.dirty&&this.updateText()},Object.defineProperty(e.prototype,"tint",{/**
         * The tint of the BitmapText object.
         * @default 0xffffff
         */get:function(){return this._tint},set:function(t){if(this._tint!==t){this._tint=t;for(var e=0;e<this._activePagesMeshData.length;e++)this._activePagesMeshData[e].mesh.tint=t}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"align",{/**
         * The alignment of the BitmapText object.
         * @member {string}
         * @default 'left'
         */get:function(){return this._align},set:function(t){this._align!==t&&(this._align=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontName",{/** The name of the BitmapFont. */get:function(){return this._fontName},set:function(t){if(!hY.available[t])throw Error('Missing BitmapFont "'+t+'"');this._fontName!==t&&(this._fontName=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontSize",{/** The size of the font to display. */get:function(){var t;return null!==(t=this._fontSize)&&void 0!==t?t:hY.available[this._fontName].size},set:function(t){this._fontSize!==t&&(this._fontSize=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{/**
         * The anchor sets the origin point of the text.
         *
         * The default is `(0,0)`, this means the text's origin is the top left.
         *
         * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
         *
         * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
         */get:function(){return this._anchor},set:function(t){"number"==typeof t?this._anchor.set(t):this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{/** The text of the BitmapText object. */get:function(){return this._text},set:function(t){t=String(null==t?"":t),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxWidth",{/**
         * The max width of this bitmap text in pixels. If the text provided is longer than the
         * value provided, line breaks will be automatically inserted in the last whitespace.
         * Disable by setting the value to 0.
         */get:function(){return this._maxWidth},set:function(t){this._maxWidth!==t&&(this._maxWidth=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLineHeight",{/**
         * The max line height. This is useful when trying to use the total height of the Text,
         * i.e. when trying to vertically align.
         * @readonly
         */get:function(){return this.validate(),this._maxLineHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textWidth",{/**
         * The width of the overall text, different from fontSize,
         * which is defined in the style object.
         * @readonly
         */get:function(){return this.validate(),this._textWidth},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"letterSpacing",{/** Additional space between characters. */get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundPixels",{/**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
         * @default PIXI.settings.ROUND_PIXELS
         */get:function(){return this._roundPixels},set:function(t){t!==this._roundPixels&&(this._roundPixels=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textHeight",{/**
         * The height of the overall text, different from fontSize,
         * which is defined in the style object.
         * @readonly
         */get:function(){return this.validate(),this._textHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{/**
         * The resolution / device pixel ratio of the canvas.
         *
         * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
         * @default 1
         */get:function(){return this._resolution},set:function(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)},enumerable:!1,configurable:!0}),e.prototype.destroy=function(e){var r=this._textureCache,i="none"===hY.available[this._fontName].distanceFieldType?hz:hV;i.push.apply(i,this._activePagesMeshData);for(var n=0,o=this._activePagesMeshData;n<o.length;n++){var s=o[n];this.removeChild(s.mesh)}for(var a in this._activePagesMeshData=[],// Release references to any cached textures in page pool
i.filter(function(t){return r[t.mesh.texture.baseTexture.uid]}).forEach(function(t){t.mesh.texture=o_.EMPTY}),r)r[a].destroy(),delete r[a];this._font=null,this._textureCache=null,t.prototype.destroy.call(this,e)},e.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0}}(nV);/**
 * {@link PIXI.Loader Loader} middleware for loading
 * bitmap-based fonts suitable for using with {@link PIXI.BitmapText}.
 * @memberof PIXI
 */var hq=/** @class */function(){function t(){}return(/**
     * Called when the plugin is installed.
     * @see PIXI.extensions.add
     */t.add=function(){s7.setExtensionXhrType("fnt",s7.XHR_RESPONSE_TYPE.TEXT)},/**
     * Called after a resource is loaded.
     * @see PIXI.Loader.loaderMiddleware
     * @param this
     * @param {PIXI.LoaderResource} resource
     * @param {Function} next
     */t.use=function(e,r){var i=hX(e.data);// Resource was not recognised as any of the expected font data format
if(!i){r();return}for(var n=t.getBaseUrl(this,e),o=i.parse(e.data),s={},a=function(t){s[t.metadata.pageFile]=t.texture,Object.keys(s).length===o.page.length&&(e.bitmapFont=hY.install(o,s,!0),r())},h=0;h<o.page.length;++h){var u=o.page[h].file,l=n+u,c=!1;// incase the image is loaded outside
// using the same loader, resource will be available
for(var f in this.resources){var p=this.resources[f];if(p.url===l){p.metadata.pageFile=u,p.texture?a(p):p.onAfterMiddleware.add(a),c=!0;break}}// texture is not loaded, we'll attempt to add
// it to the load and add the texture to the list
if(!c){// Standard loading options for images
var d={crossOrigin:e.crossOrigin,loadType:s7.LOAD_TYPE.IMAGE,metadata:Object.assign({pageFile:u},e.metadata.imageMetadata),parentResource:e};this.add(l,d,a)}}},/**
     * Get folder path from a resource.
     * @param loader
     * @param resource
     */t.getBaseUrl=function(e,r){var i=r.isDataUrl?"":t.dirname(r.url);return r.isDataUrl&&("."===i&&(i=""),e.baseUrl&&i&&"/"===e.baseUrl.charAt(e.baseUrl.length-1)&&(i+="/")),// remove baseUrl from resUrl
(i=i.replace(e.baseUrl,""))&&"/"!==i.charAt(i.length-1)&&(i+="/"),i},/**
     * Replacement for NodeJS's path.dirname
     * @param {string} url - Path to get directory for
     */t.dirname=function(t){var e=t.replace(/\\/g,"/")// convert windows notation to UNIX notation, URL-safe because it's a forbidden character
.replace(/\/$/,"")// replace trailing slash
.replace(/\/[^\/]*$/,"");// remove everything after the last
return(// File request is relative, use current directory
e===t?".":""===e?"/":e)},/** @ignore */t.extension=tf.Loader,t)}(),hK=function(t,e){return(hK=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};!/** @class */function(t){/**
     * @param alpha - Amount of alpha from 0 to 1, where 0 is transparent
     */function e(e){void 0===e&&(e=1);var r=t.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n",{uAlpha:1})||this;return r.alpha=e,r}!function(t,e){function r(){this.constructor=t}hK(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),Object.defineProperty(e.prototype,"alpha",{/**
         * Coefficient for alpha multiplication
         * @default 1
         */get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0})}(o7);/*!
 * @pixi/filter-blur - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise */var hZ=function(t,e){return(hZ=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function hJ(t,e){function r(){this.constructor=t}hZ(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var hQ={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},h$=/** @class */function(t){/**
     * @param horizontal - Do pass along the x-axis (`true`) or y-axis (`false`).
     * @param strength - The strength of the blur filter.
     * @param quality - The quality of the blur filter.
     * @param resolution - The resolution of the blur filter.
     * @param kernelSize - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
     */function e(e,r,i,n,o){void 0===r&&(r=8),void 0===i&&(i=4),void 0===n&&(n=eh.FILTER_RESOLUTION),void 0===o&&(o=5);var s=this,a=function(t,e){var r,i=Math.ceil(t/2),n="\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }",o="";r=e?"vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":"vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(var s=0;s<t;s++){var a=r.replace("%index%",s.toString());o+=(a=a.replace("%sampleIndex%",s-(i-1)+".0"))+"\n"}return(n=n.replace("%blur%",o)).replace("%size%",t.toString())}(o,e),h=function(t){for(var e,r=hQ[t],i=r.length,n="varying vec2 vBlurTexCoords[%size%];\nuniform sampler2D uSampler;\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n    %blur%\n}",o="",s=0;s<t;s++){var a="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%",s.toString());e=s,s>=i&&(e=t-s-1),o+=(a=a.replace("%value%",r[e].toString()))+"\n"}return(n=n.replace("%blur%",o)).replace("%size%",t.toString())}(o);return(s=t.call(this,a,h)||this).horizontal=e,s.resolution=n,s._quality=0,s.quality=i,s.blur=r,s}return hJ(e,t),/**
     * Applies the filter.
     * @param filterManager - The manager.
     * @param input - The input target.
     * @param output - The output target.
     * @param clearMode - How to clear
     */e.prototype.apply=function(t,e,r,i){if(r?this.horizontal?this.uniforms.strength=1/r.width*(r.width/e.width):this.uniforms.strength=1/r.height*(r.height/e.height):this.horizontal?this.uniforms.strength=1/t.renderer.width*(t.renderer.width/e.width):this.uniforms.strength=1/t.renderer.height*(t.renderer.height/e.height),// screen space!
this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,1===this.passes)t.applyFilter(this,e,r,i);else{var n=t.getFilterTexture(),o=t.renderer,s=e,a=n;this.state.blend=!1,t.applyFilter(this,s,a,te.CLEAR);for(var h=1;h<this.passes-1;h++){t.bindAndClear(s,te.BLIT),this.uniforms.uSampler=a;var u=a;a=s,s=u,o.shader.bind(this),o.geometry.draw(5)}this.state.blend=!0,t.applyFilter(this,a,r,i),t.returnFilterTexture(n)}},Object.defineProperty(e.prototype,"blur",{/**
         * Sets the strength of both the blur.
         * @default 16
         */get:function(){return this.strength},set:function(t){this.padding=1+2*Math.abs(t),this.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{/**
         * Sets the quality of the blur by modifying the number of passes. More passes means higher
         * quality bluring but the lower the performance.
         * @default 4
         */get:function(){return this._quality},set:function(t){this._quality=t,this.passes=t},enumerable:!1,configurable:!0}),e}(o7);!/** @class */function(t){/**
     * @param strength - The strength of the blur filter.
     * @param quality - The quality of the blur filter.
     * @param [resolution=PIXI.settings.FILTER_RESOLUTION] - The resolution of the blur filter.
     * @param kernelSize - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
     */function e(e,r,i,n){void 0===e&&(e=8),void 0===r&&(r=4),void 0===i&&(i=eh.FILTER_RESOLUTION),void 0===n&&(n=5);var o=t.call(this)||this;return o.blurXFilter=new h$(!0,e,r,i,n),o.blurYFilter=new h$(!1,e,r,i,n),o.resolution=i,o.quality=r,o.blur=e,o.repeatEdgePixels=!1,o}hJ(e,t),/**
     * Applies the filter.
     * @param filterManager - The manager.
     * @param input - The input target.
     * @param output - The output target.
     * @param clearMode - How to clear
     */e.prototype.apply=function(t,e,r,i){var n=Math.abs(this.blurXFilter.strength),o=Math.abs(this.blurYFilter.strength);if(n&&o){var s=t.getFilterTexture();this.blurXFilter.apply(t,e,s,te.CLEAR),this.blurYFilter.apply(t,s,r,i),t.returnFilterTexture(s)}else o?this.blurYFilter.apply(t,e,r,i):this.blurXFilter.apply(t,e,r,i)},e.prototype.updatePadding=function(){this._repeatEdgePixels?this.padding=0:this.padding=2*Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))},Object.defineProperty(e.prototype,"blur",{/**
         * Sets the strength of both the blurX and blurY properties simultaneously
         * @default 2
         */get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{/**
         * Sets the number of passes for blur. More passes means higher quality bluring.
         * @default 1
         */get:function(){return this.blurXFilter.quality},set:function(t){this.blurXFilter.quality=this.blurYFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurX",{/**
         * Sets the strength of the blurX property
         * @default 2
         */get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurY",{/**
         * Sets the strength of the blurY property
         * @default 2
         */get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{/**
         * Sets the blendmode of the filter
         * @default PIXI.BLEND_MODES.NORMAL
         */get:function(){return this.blurYFilter.blendMode},set:function(t){this.blurYFilter.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"repeatEdgePixels",{/**
         * If set to true the edge of the target will be clamped
         * @default false
         */get:function(){return this._repeatEdgePixels},set:function(t){this._repeatEdgePixels=t,this.updatePadding()},enumerable:!1,configurable:!0})}(o7);/*!
 * @pixi/filter-color-matrix - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-color-matrix is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise */var h0=function(t,e){return(h0=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},h1=/** @class */function(t){function e(){var e=this,r={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};return(e=t.call(this,sw,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n",r)||this).alpha=1,e}return!function(t,e){function r(){this.constructor=t}h0(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),/**
     * Transforms current matrix and set the new one
     * @param {number[]} matrix - 5x4 matrix
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype._loadMatrix=function(t,e){void 0===e&&(e=!1);var r=t;e&&(this._multiply(r,this.uniforms.m,t),r=this._colorMatrix(r)),// set the new matrix
this.uniforms.m=r},/**
     * Multiplies two mat5's
     * @private
     * @param out - 5x4 matrix the receiving matrix
     * @param a - 5x4 matrix the first operand
     * @param b - 5x4 matrix the second operand
     * @returns {number[]} 5x4 matrix
     */e.prototype._multiply=function(t,e,r){return(// Red Channel
t[0]=e[0]*r[0]+e[1]*r[5]+e[2]*r[10]+e[3]*r[15],t[1]=e[0]*r[1]+e[1]*r[6]+e[2]*r[11]+e[3]*r[16],t[2]=e[0]*r[2]+e[1]*r[7]+e[2]*r[12]+e[3]*r[17],t[3]=e[0]*r[3]+e[1]*r[8]+e[2]*r[13]+e[3]*r[18],t[4]=e[0]*r[4]+e[1]*r[9]+e[2]*r[14]+e[3]*r[19]+e[4],// Green Channel
t[5]=e[5]*r[0]+e[6]*r[5]+e[7]*r[10]+e[8]*r[15],t[6]=e[5]*r[1]+e[6]*r[6]+e[7]*r[11]+e[8]*r[16],t[7]=e[5]*r[2]+e[6]*r[7]+e[7]*r[12]+e[8]*r[17],t[8]=e[5]*r[3]+e[6]*r[8]+e[7]*r[13]+e[8]*r[18],t[9]=e[5]*r[4]+e[6]*r[9]+e[7]*r[14]+e[8]*r[19]+e[9],// Blue Channel
t[10]=e[10]*r[0]+e[11]*r[5]+e[12]*r[10]+e[13]*r[15],t[11]=e[10]*r[1]+e[11]*r[6]+e[12]*r[11]+e[13]*r[16],t[12]=e[10]*r[2]+e[11]*r[7]+e[12]*r[12]+e[13]*r[17],t[13]=e[10]*r[3]+e[11]*r[8]+e[12]*r[13]+e[13]*r[18],t[14]=e[10]*r[4]+e[11]*r[9]+e[12]*r[14]+e[13]*r[19]+e[14],// Alpha Channel
t[15]=e[15]*r[0]+e[16]*r[5]+e[17]*r[10]+e[18]*r[15],t[16]=e[15]*r[1]+e[16]*r[6]+e[17]*r[11]+e[18]*r[16],t[17]=e[15]*r[2]+e[16]*r[7]+e[17]*r[12]+e[18]*r[17],t[18]=e[15]*r[3]+e[16]*r[8]+e[17]*r[13]+e[18]*r[18],t[19]=e[15]*r[4]+e[16]*r[9]+e[17]*r[14]+e[18]*r[19]+e[19],t)},/**
     * Create a Float32 Array and normalize the offset component to 0-1
     * @param {number[]} matrix - 5x4 matrix
     * @returns {number[]} 5x4 matrix with all values between 0-1
     */e.prototype._colorMatrix=function(t){// Create a Float32 Array and normalize the offset component to 0-1
var e=new Float32Array(t);return e[4]/=255,e[9]/=255,e[14]/=255,e[19]/=255,e},/**
     * Adjusts brightness
     * @param b - value of the brigthness (0-1, where 0 is black)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.brightness=function(t,e){var r=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},/**
     * Sets each channel on the diagonal of the color matrix.
     * This can be used to achieve a tinting effect on Containers similar to the tint field of some
     * display objects like Sprite, Text, Graphics, and Mesh.
     * @param color - Color of the tint. This is a hex value.
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.tint=function(t,e){this._loadMatrix([(t>>16&255)/255,0,0,0,0,0,(t>>8&255)/255,0,0,0,0,0,(255&t)/255,0,0,0,0,0,1,0],e)},/**
     * Set the matrices in grey scales
     * @param scale - value of the grey (0-1, where 0 is black)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.greyscale=function(t,e){var r=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},/**
     * Set the black and white matrice.
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.blackAndWhite=function(t){this._loadMatrix([.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0],t)},/**
     * Set the hue property of the color
     * @param rotation - in degrees
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.hue=function(t,e){var r=Math.cos(t=(t||0)/180*Math.PI),i=Math.sin(t),n=1/3,o=(0,Math.sqrt)(1/3);this._loadMatrix([r+(1-r)*n,n*(1-r)-o*i,n*(1-r)+o*i,0,0,n*(1-r)+o*i,r+n*(1-r),n*(1-r)-o*i,0,0,n*(1-r)-o*i,n*(1-r)+o*i,r+n*(1-r),0,0,0,0,0,1,0],e)},/**
     * Set the contrast matrix, increase the separation between dark and bright
     * Increase contrast : shadows darker and highlights brighter
     * Decrease contrast : bring the shadows up and the highlights down
     * @param amount - value of the contrast (0-1)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.contrast=function(t,e){var r=(t||0)+1,i=-.5*(r-1),n=[r,0,0,0,i,0,r,0,0,i,0,0,r,0,i,0,0,0,1,0];this._loadMatrix(n,e)},/**
     * Set the saturation matrix, increase the separation between colors
     * Increase saturation : increase contrast, brightness, and sharpness
     * @param amount - The saturation amount (0-1)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.saturate=function(t,e){void 0===t&&(t=0);var r=2*t/3+1,i=-((r-1)*.5),n=[r,i,i,0,0,i,r,i,0,0,i,i,r,0,0,0,0,0,1,0];this._loadMatrix(n,e)},/** Desaturate image (remove color) Call the saturate function */e.prototype.desaturate=function(){this.saturate(-1)},/**
     * Negative image (inverse of classic rgb matrix)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.negative=function(t){this._loadMatrix([-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0],t)},/**
     * Sepia image
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.sepia=function(t){this._loadMatrix([.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0],t)},/**
     * Color motion picture process invented in 1916 (thanks Dominic Szablewski)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.technicolor=function(t){this._loadMatrix([1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0],t)},/**
     * Polaroid filter
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.polaroid=function(t){this._loadMatrix([1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0],t)},/**
     * Filter who transforms : Red -> Blue and Blue -> Red
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.toBGR=function(t){this._loadMatrix([0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0],t)},/**
     * Color reversal film introduced by Eastman Kodak in 1935. (thanks Dominic Szablewski)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.kodachrome=function(t){this._loadMatrix([1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0],t)},/**
     * Brown delicious browni filter (thanks Dominic Szablewski)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.browni=function(t){this._loadMatrix([.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0],t)},/**
     * Vintage filter (thanks Dominic Szablewski)
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.vintage=function(t){this._loadMatrix([.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0],t)},/**
     * We don't know exactly what it does, kind of gradient map, but funny to play with!
     * @param desaturation - Tone values.
     * @param toned - Tone values.
     * @param lightColor - Tone values, example: `0xFFE580`
     * @param darkColor - Tone values, example: `0xFFE580`
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.colorTone=function(t,e,r,i,n){var o=((r=r||16770432)>>16&255)/255,s=(r>>8&255)/255,a=(255&r)/255,h=((i=i||3375104)>>16&255)/255,u=(i>>8&255)/255,l=(255&i)/255,c=[.3,.59,.11,0,0,o,s,a,t=t||.2,0,h,u,l,e=e||.15,0,o-h,s-u,a-l,0,0];this._loadMatrix(c,n)},/**
     * Night effect
     * @param intensity - The intensity of the night effect.
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.night=function(t,e){var r=[-2*(t=t||.1),-t,0,0,0,-t,0,t,0,0,0,t,2*t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},/**
     * Predator effect
     *
     * Erase the current matrix by setting a new indepent one
     * @param amount - how much the predator feels his future victim
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.predator=function(t,e){this._loadMatrix([// row 1
11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,// row 2
-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,// row 3
-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,// row 4
0,0,0,1,0],e)},/**
     * LSD effect
     *
     * Multiply the current matrix
     * @param multiply - if true, current matrix and matrix are multiplied. If false,
     *  just set the current matrix with @param matrix
     */e.prototype.lsd=function(t){this._loadMatrix([2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0],t)},/** Erase the current matrix by setting the default one. */e.prototype.reset=function(){this._loadMatrix([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],!1)},Object.defineProperty(e.prototype,"matrix",{/**
         * The matrix of the color matrix filter
         * @member {number[]}
         * @default [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
         */get:function(){return this.uniforms.m},set:function(t){this.uniforms.m=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{/**
         * The opacity value to use when mixing the original and resultant colors.
         *
         * When the value is 0, the original color is used without modification.
         * When the value is 1, the result color is used.
         * When in the range (0, 1) the color is interpolated between the original and result by this amount.
         * @default 1
         */get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),e}(o7);// Americanized alias
h1.prototype.grayscale=h1.prototype.greyscale;/*!
 * @pixi/filter-displacement - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-displacement is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise */var h2=function(t,e){return(h2=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};!/** @class */function(t){/**
     * @param {PIXI.Sprite} sprite - The sprite used for the displacement map. (make sure its added to the scene!)
     * @param scale - The scale of the displacement
     */function e(e,r){var i=this,n=new nw;return e.renderable=!1,(i=t.call(this,"attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n	gl_Position = filterVertexPosition();\n	vTextureCoord = filterTextureCoord();\n	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n","varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n",{mapSampler:e._texture,filterMatrix:n,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])})||this).maskSprite=e,i.maskMatrix=n,null==r&&(r=20),/**
         * scaleX, scaleY for displacements
         * @member {PIXI.Point}
         */i.scale=new nT(r,r),i}!function(t,e){function r(){this.constructor=t}h2(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),/**
     * Applies the filter.
     * @param filterManager - The manager.
     * @param input - The input target.
     * @param output - The output target.
     * @param clearMode - clearMode.
     */e.prototype.apply=function(t,e,r,i){// fill maskMatrix with _normalized sprite texture coords_
this.uniforms.filterMatrix=t.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;// Extract rotation from world transform
var n=this.maskSprite.worldTransform,o=Math.sqrt(n.a*n.a+n.b*n.b),s=Math.sqrt(n.c*n.c+n.d*n.d);0!==o&&0!==s&&(this.uniforms.rotation[0]=n.a/o,this.uniforms.rotation[1]=n.b/o,this.uniforms.rotation[2]=n.c/s,this.uniforms.rotation[3]=n.d/s),// draw the filter...
t.applyFilter(this,e,r,i)},Object.defineProperty(e.prototype,"map",{/** The texture used for the displacement map. Must be power of 2 sized texture. */get:function(){return this.uniforms.mapSampler},set:function(t){this.uniforms.mapSampler=t},enumerable:!1,configurable:!0})}(o7);/*!
 * @pixi/filter-fxaa - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-fxaa is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise */var h3=function(t,e){return(h3=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};!function(t,e){function r(){this.constructor=t}h3(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(function(){// TODO - needs work
return X.call(this,"\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n",'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputSize;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n')||this},X=o7);/*!
 * @pixi/filter-noise - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/filter-noise is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise */var h4=function(t,e){return(h4=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};!/** @class */function(t){/**
     * @param {number} [noise=0.5] - The noise intensity, should be a normalized value in the range [0, 1].
     * @param {number} [seed] - A random seed for the noise generation. Default is `Math.random()`.
     */function e(e,r){void 0===e&&(e=.5),void 0===r&&(r=Math.random());var i=t.call(this,sw,"precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n",{uNoise:0,uSeed:0})||this;return i.noise=e,i.seed=r,i}!function(t,e){function r(){this.constructor=t}h4(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),Object.defineProperty(e.prototype,"noise",{/**
         * The amount of noise to apply, this value should be in the range (0, 1].
         * @default 0.5
         */get:function(){return this.uniforms.uNoise},set:function(t){this.uniforms.uNoise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"seed",{/** A seed value to apply to the random noise generation. `Math.random()` is a good value to use. */get:function(){return this.uniforms.uSeed},set:function(t){this.uniforms.uSeed=t},enumerable:!1,configurable:!0})}(o7);/*!
 * @pixi/mixin-cache-as-bitmap - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/mixin-cache-as-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var h8=new nw;nH.prototype._cacheAsBitmap=!1,nH.prototype._cacheData=null,nH.prototype._cacheAsBitmapResolution=null,nH.prototype._cacheAsBitmapMultisample=ts.NONE;// figured there's no point adding ALL the extra variables to prototype.
// this model can hold the information needed. This can also be generated on demand as
// most objects are not cached as bitmaps.
/**
 * @class
 * @ignore
 * @private
 */var h6=function(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null};Object.defineProperties(nH.prototype,{/**
     * The resolution to use for cacheAsBitmap. By default this will use the renderer's resolution
     * but can be overriden for performance. Lower values will reduce memory usage at the expense
     * of render quality. A falsey value of `null` or `0` will default to the renderer's resolution.
     * If `cacheAsBitmap` is set to `true`, this will re-render with the new resolution.
     * @member {number} cacheAsBitmapResolution
     * @memberof PIXI.DisplayObject#
     * @default null
     */cacheAsBitmapResolution:{get:function(){return this._cacheAsBitmapResolution},set:function(t){t!==this._cacheAsBitmapResolution&&(this._cacheAsBitmapResolution=t,this.cacheAsBitmap&&(// Toggle to re-render at the new resolution
this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},/**
     * The number of samples to use for cacheAsBitmap. If set to `null`, the renderer's
     * sample count is used.
     * If `cacheAsBitmap` is set to `true`, this will re-render with the new number of samples.
     * @member {number} cacheAsBitmapMultisample
     * @memberof PIXI.DisplayObject#
     * @default PIXI.MSAA_QUALITY.NONE
     */cacheAsBitmapMultisample:{get:function(){return this._cacheAsBitmapMultisample},set:function(t){t!==this._cacheAsBitmapMultisample&&(this._cacheAsBitmapMultisample=t,this.cacheAsBitmap&&(// Toggle to re-render with new multisample
this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},/**
     * Set this to true if you want this display object to be cached as a bitmap.
     * This basically takes a snap shot of the display object as it is at that moment. It can
     * provide a performance benefit for complex static displayObjects.
     * To remove simply set this property to `false`
     *
     * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
     * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
     * @member {boolean}
     * @memberof PIXI.DisplayObject#
     */cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(t){var e;this._cacheAsBitmap!==t&&(this._cacheAsBitmap=t,t?(this._cacheData||(this._cacheData=new h6),(e=this._cacheData).originalRender=this.render,e.originalRenderCanvas=this.renderCanvas,e.originalUpdateTransform=this.updateTransform,e.originalCalculateBounds=this.calculateBounds,e.originalGetLocalBounds=this.getLocalBounds,e.originalDestroy=this.destroy,e.originalContainsPoint=this.containsPoint,e.originalMask=this._mask,e.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):((e=this._cacheData).sprite&&this._destroyCachedDisplayObject(),this.render=e.originalRender,this.renderCanvas=e.originalRenderCanvas,this.calculateBounds=e.originalCalculateBounds,this.getLocalBounds=e.originalGetLocalBounds,this.destroy=e.originalDestroy,this.updateTransform=e.originalUpdateTransform,this.containsPoint=e.originalContainsPoint,this._mask=e.originalMask,this.filterArea=e.originalFilterArea))}}}),nH.prototype._renderCached=function(t){this.visible&&!(this.worldAlpha<=0)&&this.renderable&&(this._initCachedDisplayObject(t),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(t))},nH.prototype._initCachedDisplayObject=function(t){if(!this._cacheData||!this._cacheData.sprite){// make sure alpha is set to 1 otherwise it will get rendered as invisible!
var e,r=this.alpha;this.alpha=1,// first we flush anything left in the renderer (otherwise it would get rendered to the cached texture)
t.batch.flush();// this.filters= [];
// next we find the dimensions of the untransformed object
// this function also calls updatetransform on all its children as part of the measuring.
// This means we don't need to update the transform again in this function
// TODO pass an object to clone too? saves having to create a new one each time!
var i=this.getLocalBounds(null,!0).clone();// add some padding!
if(this.filters&&this.filters.length){var n=this.filters[0].padding;i.pad(n)}i.ceil(eh.RESOLUTION);// for now we cache the current renderTarget that the WebGL renderer is currently using.
// this could be more elegant..
var o=t.renderTexture.current,s=t.renderTexture.sourceFrame.clone(),a=t.renderTexture.destinationFrame.clone(),h=t.projection.transform,u=oy.create({width:i.width,height:i.height,resolution:this.cacheAsBitmapResolution||t.resolution,multisample:null!==(e=this.cacheAsBitmapMultisample)&&void 0!==e?e:t.multisample}),l="cacheAsBitmap_"+ ++nc;this._cacheData.textureCacheId=l,n9.addToCache(u.baseTexture,l),o_.addToCache(u,l);// need to set //
var c=this.transform.localTransform.copyTo(h8).invert().translate(-i.x,-i.y);// set all properties to there original so we can render to a texture
this.render=this._cacheData.originalRender,t.render(this,{renderTexture:u,clear:!0,transform:c,skipUpdateTransform:!1}),t.framebuffer.blit(),// now restore the state be setting the new properties
t.projection.transform=h,t.renderTexture.bind(o,s,a),// renderer.filterManager.filterStack = stack;
this.render=this._renderCached,// the rest is the same as for Canvas
this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=r;// create our cached sprite
var f=new a4(u);f.transform.worldTransform=this.transform.worldTransform,f.anchor.x=-(i.x/i.width),f.anchor.y=-(i.y/i.height),f.alpha=r,f._bounds=this._bounds,this._cacheData.sprite=f,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),// map the hit test..
this.containsPoint=f.containsPoint.bind(f)}},nH.prototype._renderCachedCanvas=function(t){this.visible&&!(this.worldAlpha<=0)&&this.renderable&&(this._initCachedDisplayObjectCanvas(t),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(t))},nH.prototype._initCachedDisplayObjectCanvas=function(t){if(!this._cacheData||!this._cacheData.sprite){// get bounds actually transforms the object for us already!
var e=this.getLocalBounds(null,!0),r=this.alpha;this.alpha=1;var i=t.context,n=t._projTransform;e.ceil(eh.RESOLUTION);var o=oy.create({width:e.width,height:e.height}),s="cacheAsBitmap_"+ ++nc;this._cacheData.textureCacheId=s,n9.addToCache(o.baseTexture,s),o_.addToCache(o,s),this.transform.localTransform.copyTo(h8),h8.invert(),h8.tx-=e.x,h8.ty-=e.y,// m.append(this.transform.worldTransform.)
// set all properties to there original so we can render to a texture
this.renderCanvas=this._cacheData.originalRenderCanvas,t.render(this,{renderTexture:o,clear:!0,transform:h8,skipUpdateTransform:!1}),// now restore the state be setting the new properties
t.context=i,t._projTransform=n,this.renderCanvas=this._renderCachedCanvas,// the rest is the same as for WebGL
this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=r;// create our cached sprite
var a=new a4(o);a.transform.worldTransform=this.transform.worldTransform,a.anchor.x=-(e.x/e.width),a.anchor.y=-(e.y/e.height),a.alpha=r,a._bounds=this._bounds,this._cacheData.sprite=a,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=t._tempDisplayObjectParent,this.updateTransform(),this.parent=null),// map the hit test..
this.containsPoint=a.containsPoint.bind(a)}},nH.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID},nH.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)},nH.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,n9.removeFromCache(this._cacheData.textureCacheId),o_.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null},nH.prototype._cacheAsBitmapDestroy=function(t){this.cacheAsBitmap=!1,this.destroy(t)},nH.prototype.name=null,nV.prototype.getChildByName=function(t,e){for(var r=0,i=this.children.length;r<i;r++)if(this.children[r].name===t)return this.children[r];if(e)for(var r=0,i=this.children.length;r<i;r++){var n=this.children[r];if(n.getChildByName){var o=n.getChildByName(t,!0);if(o)return o}}return null},nH.prototype.getGlobalPosition=function(t,e){return void 0===t&&(t=new nT),void 0===e&&(e=!1),this.parent?this.parent.toGlobal(this.position,t,e):(t.x=this.position.x,t.y=this.position.y),t};/*!
 * @pixi/app - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/app is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//**
 * Middleware for for Application's resize functionality
 * @private
 * @class
 */var h5=/** @class */function(){function t(){}return(/**
     * Initialize the plugin with scope of application instance
     * @static
     * @private
     * @param {object} [options] - See application options
     */t.init=function(t){var e=this;Object.defineProperty(this,"resizeTo",/**
         * The HTML element or window to automatically resize the
         * renderer's view element to match width and height.
         * @member {Window|HTMLElement}
         * @name resizeTo
         * @memberof PIXI.Application#
         */{set:function(t){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=t,t&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get:function(){return this._resizeTo}}),/**
         * Resize is throttled, so it's safe to call this multiple times per frame and it'll
         * only be called once.
         * @memberof PIXI.Application#
         * @method queueResize
         * @private
         */this.queueResize=function(){e._resizeTo&&(e.cancelResize(),// // Throttle resize events per raf
e._resizeId=requestAnimationFrame(function(){return e.resize()}))},/**
         * Cancel the resize queue.
         * @memberof PIXI.Application#
         * @method cancelResize
         * @private
         */this.cancelResize=function(){e._resizeId&&(cancelAnimationFrame(e._resizeId),e._resizeId=null)},/**
         * Execute an immediate resize on the renderer, this is not
         * throttled and can be expensive to call many times in a row.
         * Will resize only if `resizeTo` property is set.
         * @memberof PIXI.Application#
         * @method resize
         */this.resize=function(){if(e._resizeTo){// Resize to the window
if(// clear queue resize
e.cancelResize(),e._resizeTo===globalThis.window)t=globalThis.innerWidth,r=globalThis.innerHeight;else{var t,r,i=e._resizeTo,n=i.clientWidth,o=i.clientHeight;t=n,r=o}e.renderer.resize(t,r)}},// On resize
this._resizeId=null,this._resizeTo=null,this.resizeTo=t.resizeTo||null},/**
     * Clean up the ticker, scoped to application
     * @static
     * @private
     */t.destroy=function(){globalThis.removeEventListener("resize",this.queueResize),this.cancelResize(),this.cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null},/** @ignore */t.extension=tf.Application,t)}(),h9=/** @class */function(){/**
     * @param {PIXI.IApplicationOptions} [options] - The optional application and renderer parameters.
     * @param {boolean} [options.antialias=false] -
     *  **WebGL Only.** Whether to enable anti-aliasing. This may affect performance.
     * @param {boolean} [options.autoDensity=false] -
     *  Whether the CSS dimensions of the renderer's view should be resized automatically.
     * @param {boolean} [options.autoStart=true] - Automatically starts the rendering after the construction.
     *  **Note**: Setting this parameter to false does NOT stop the shared ticker even if you set
     *  `options.sharedTicker` to `true` in case that it is already started. Stop it by your own.
     * @param {number} [options.backgroundAlpha=1] -
     *  Transparency of the background color, value from `0` (fully transparent) to `1` (fully opaque).
     * @param {number} [options.backgroundColor=0x000000] -
     *  The background color used to clear the canvas. It accepts hex numbers (e.g. `0xff0000`).
     * @param {boolean} [options.clearBeforeRender=true] - Whether to clear the canvas before new render passes.
     * @param {PIXI.IRenderingContext} [options.context] - **WebGL Only.** User-provided WebGL rendering context object.
     * @param {boolean} [options.forceCanvas=false] -
     *  Force using {@link PIXI.CanvasRenderer}, even if WebGL is available. This option only is available when
     *  using **pixi.js-legacy** or **@pixi/canvas-renderer** packages, otherwise it is ignored.
     * @param {number} [options.height=600] - The height of the renderer's view.
     * @param {string} [options.powerPreference] -
     *  **WebGL Only.** A hint indicating what configuration of GPU is suitable for the WebGL context,
     *  can be `'default'`, `'high-performance'` or `'low-power'`.
     *  Setting to `'high-performance'` will prioritize rendering performance over power consumption,
     *  while setting to `'low-power'` will prioritize power saving over rendering performance.
     * @param {boolean} [options.premultipliedAlpha=true] -
     *  **WebGL Only.** Whether the compositor will assume the drawing buffer contains colors with premultiplied alpha.
     * @param {boolean} [options.preserveDrawingBuffer=false] -
     *  **WebGL Only.** Whether to enable drawing buffer preservation. If enabled, the drawing buffer will preserve
     *  its value until cleared or overwritten. Enable this if you need to call `toDataUrl` on the WebGL context.
     * @param {Window|HTMLElement} [options.resizeTo] - Element to automatically resize stage to.
     * @param {number} [options.resolution=PIXI.settings.RESOLUTION] -
     *  The resolution / device pixel ratio of the renderer.
     * @param {boolean} [options.sharedLoader=false] - `true` to use PIXI.Loader.shared, `false` to create new Loader.
     * @param {boolean} [options.sharedTicker=false] - `true` to use PIXI.Ticker.shared, `false` to create new ticker.
     *  If set to `false`, you cannot register a handler to occur before anything that runs on the shared ticker.
     *  The system ticker will always run before both the shared ticker and the app ticker.
     * @param {boolean} [options.transparent] -
     *  **Deprecated since 6.0.0, Use `backgroundAlpha` instead.** \
     *  `true` sets `backgroundAlpha` to `0`, `false` sets `backgroundAlpha` to `1`.
     * @param {boolean|'notMultiplied'} [options.useContextAlpha=true] -
     *  Pass-through value for canvas' context attribute `alpha`. This option is for cases where the
     *  canvas needs to be opaque, possibly for performance reasons on some older devices.
     *  If you want to set transparency, please use `backgroundAlpha`. \
     *  **WebGL Only:** When set to `'notMultiplied'`, the canvas' context attribute `alpha` will be
     *  set to `true` and `premultipliedAlpha` will be to `false`.
     * @param {HTMLCanvasElement} [options.view=null] -
     *  The canvas to use as the view. If omitted, a new canvas will be created.
     * @param {number} [options.width=800] - The width of the renderer's view.
     */function t(e){var r,i=this;/**
         * The root display container that's rendered.
         * @member {PIXI.Container}
         */this.stage=new nV,// The default options
e=Object.assign({forceCanvas:!1},e),this.renderer=(r=e,sP.create(r)),// install plugins here
t._plugins.forEach(function(t){t.init.call(i,e)})}return(/**
     * Use the {@link PIXI.extensions.add} API to register plugins.
     * @deprecated since 6.5.0
     * @static
     * @param {PIXI.IApplicationPlugin} plugin - Plugin being installed
     */t.registerPlugin=function(t){np("6.5.0","Application.registerPlugin() is deprecated, use extensions.add()"),nK.add({type:tf.Application,ref:t})},/** Render the current stage. */t.prototype.render=function(){this.renderer.render(this.stage)},Object.defineProperty(t.prototype,"view",{/**
         * Reference to the renderer's canvas element.
         * @member {HTMLCanvasElement}
         * @readonly
         */get:function(){return this.renderer.view},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"screen",{/**
         * Reference to the renderer's screen rectangle. Its safe to use as `filterArea` or `hitArea` for the whole screen.
         * @member {PIXI.Rectangle}
         * @readonly
         */get:function(){return this.renderer.screen},enumerable:!1,configurable:!0}),/**
     * Destroy and don't use after this.
     * @param {boolean} [removeView=false] - Automatically remove canvas from DOM.
     * @param {object|boolean} [stageOptions] - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [stageOptions.children=false] - if set to true, all the children will have their destroy
     *  method called as well. 'stageOptions' will be passed on to those calls.
     * @param {boolean} [stageOptions.texture=false] - Only used for child Sprites if stageOptions.children is set
     *  to true. Should it destroy the texture of the child sprite
     * @param {boolean} [stageOptions.baseTexture=false] - Only used for child Sprites if stageOptions.children is set
     *  to true. Should it destroy the base texture of the child sprite
     */t.prototype.destroy=function(e,r){var i=this,n=t._plugins.slice(0);n.reverse(),n.forEach(function(t){t.destroy.call(i)}),this.stage.destroy(r),this.stage=null,this.renderer.destroy(e),this.renderer=null},/** Collection of installed plugins. */t._plugins=[],t)}();nK.handleByList(tf.Application,h9._plugins),nK.add(h5);/*!
 * @pixi/mesh-extras - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/mesh-extras is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise */var h7=function(t,e){return(h7=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function ut(t,e){function r(){this.constructor=t}h7(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}/**
 * @memberof PIXI
 */var ue=/** @class */function(t){/**
     * @param width - The width of the plane.
     * @param height - The height of the plane.
     * @param segWidth - Number of horizontal segments.
     * @param segHeight - Number of vertical segments.
     */function e(e,r,i,n){void 0===e&&(e=100),void 0===r&&(r=100),void 0===i&&(i=10),void 0===n&&(n=10);var o=t.call(this)||this;return o.segWidth=i,o.segHeight=n,o.width=e,o.height=r,o.build(),o}return ut(e,t),/**
     * Refreshes plane coordinates
     * @private
     */e.prototype.build=function(){for(var t=this.segWidth*this.segHeight,e=[],r=[],i=[],n=this.segWidth-1,o=this.segHeight-1,s=this.width/n,a=this.height/o,h=0;h<t;h++){var u=h%this.segWidth,l=h/this.segWidth|0;e.push(u*s,l*a),r.push(u/n,l/o)}for(var c=n*o,h=0;h<c;h++){var f=h%n,p=h/n|0,d=p*this.segWidth+f,_=p*this.segWidth+f+1,y=(p+1)*this.segWidth+f,v=(p+1)*this.segWidth+f+1;i.push(d,_,y,_,v,y)}this.buffers[0].data=new Float32Array(e),this.buffers[1].data=new Float32Array(r),this.indexBuffer.data=new Uint16Array(i),// ensure that the changes are uploaded
this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()},e}(hF),ur=/** @class */function(t){/**
     * @param width - The width (i.e., thickness) of the rope.
     * @param points - An array of {@link PIXI.Point} objects to construct this rope.
     * @param textureScale - By default the rope texture will be stretched to match
     *     rope length. If textureScale is positive this value will be treated as a scaling
     *     factor and the texture will preserve its aspect ratio instead. To create a tiling rope
     *     set baseTexture.wrapMode to {@link PIXI.WRAP_MODES.REPEAT} and use a power of two texture,
     *     then set textureScale=1 to keep the original texture pixel size.
     *     In order to reduce alpha channel artifacts provide a larger texture and downsample -
     *     i.e. set textureScale=0.5 to scale it down twice.
     */function e(e,r,i){void 0===e&&(e=200),void 0===i&&(i=0);var n=t.call(this,new Float32Array(4*r.length),new Float32Array(4*r.length),new Uint16Array((r.length-1)*6))||this;return n.points=r,n._width=e,n.textureScale=i,n.build(),n}return ut(e,t),Object.defineProperty(e.prototype,"width",{/**
         * The width (i.e., thickness) of the rope.
         * @readonly
         */get:function(){return this._width},enumerable:!1,configurable:!0}),/** Refreshes Rope indices and uvs */e.prototype.build=function(){var t=this.points;if(t){var e=this.getBuffer("aVertexPosition"),r=this.getBuffer("aTextureCoord"),i=this.getIndex();// if too little points, or texture hasn't got UVs set yet just move on.
if(!(t.length<1)){e.data.length/4!==t.length&&(e.data=new Float32Array(4*t.length),r.data=new Float32Array(4*t.length),i.data=new Uint16Array((t.length-1)*6));var n=r.data,o=i.data;n[0]=0,n[1]=0,n[2]=0,n[3]=1;for(var s=0,a=t[0],h=this._width*this.textureScale,u=t.length,l=0;l<u;l++){// time to do some smart drawing!
var c=4*l;if(this.textureScale>0){// calculate pixel distance from previous point
var f=a.x-t[l].x,p=a.y-t[l].y,d=Math.sqrt(f*f+p*p);a=t[l],s+=d/h}else s=l/(u-1);n[c]=s,n[c+1]=0,n[c+2]=s,n[c+3]=1}for(var _=0,l=0;l<u-1;l++){var c=2*l;o[_++]=c,o[_++]=c+1,o[_++]=c+2,o[_++]=c+2,o[_++]=c+1,o[_++]=c+3}// ensure that the changes are uploaded
r.update(),i.update(),this.updateVertices()}}},/** refreshes vertices of Rope mesh */e.prototype.updateVertices=function(){var t,e=this.points;if(!(e.length<1)){for(var r=e[0],i=0,n=0,o=this.buffers[0].data,s=e.length,a=0;a<s;a++){var h=e[a],u=4*a;n=-((t=a<e.length-1?e[a+1]:h).x-r.x);var l=Math.sqrt((i=t.y-r.y)*i+n*n),c=this.textureScale>0?this.textureScale*this._width/2:this._width/2;i/=l,n/=l,i*=c,n*=c,o[u]=h.x+i,o[u+1]=h.y+n,o[u+2]=h.x-i,o[u+3]=h.y-n,r=h}this.buffers[0].update()}},e.prototype.update=function(){this.textureScale>0?this.build():this.updateVertices()},e}(hF);!/** @class */function(t){/**
     * @param texture - The texture to use on the rope.
     * @param points - An array of {@link PIXI.Point} objects to construct this rope.
     * @param {number} textureScale - Optional. Positive values scale rope texture
     * keeping its aspect ratio. You can reduce alpha channel artifacts by providing a larger texture
     * and downsampling here. If set to zero, texture will be stretched instead.
     */function e(e,r,i){void 0===i&&(i=0);var n=this,o=new ur(e.height,r,i),s=new hC(e);return i>0&&(e.baseTexture.wrapMode=Q.REPEAT),/**
         * re-calculate vertices by rope points each frame
         * @member {boolean}
         */(n=t.call(this,o,s)||this).autoUpdate=!0,n}ut(e,t),e.prototype._render=function(e){var r=this.geometry;(this.autoUpdate||r._width!==this.shader.texture.height)&&(r._width=this.shader.texture.height,r.update()),t.prototype._render.call(this,e)}}(hD);/**
 * The SimplePlane allows you to draw a texture across several points and then manipulate these points
 *
 *```js
 * for (let i = 0; i < 20; i++) {
 *     points.push(new PIXI.Point(i * 50, 0));
 * };
 * let SimplePlane = new PIXI.SimplePlane(PIXI.Texture.from("snake.png"), points);
 *  ```
 * @memberof PIXI
 */var ui=/** @class */function(t){/**
     * @param texture - The texture to use on the SimplePlane.
     * @param verticesX - The number of vertices in the x-axis
     * @param verticesY - The number of vertices in the y-axis
     */function e(e,r,i){var n=this,o=new ue(e.width,e.height,r,i),s=new hC(o_.WHITE);return(// lets call the setter to ensure all necessary updates are performed
(n=t.call(this,o,s)||this).texture=e,n.autoResize=!0,n)}return ut(e,t),/**
     * Method used for overrides, to do something in case texture frame was changed.
     * Meshes based on plane can override it and change more details based on texture.
     */e.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID;var t=this.geometry,e=this.shader.texture,r=e.width,i=e.height;this.autoResize&&(t.width!==r||t.height!==i)&&(t.width=this.shader.texture.width,t.height=this.shader.texture.height,t.build())},Object.defineProperty(e.prototype,"texture",{get:function(){return this.shader.texture},set:function(t){// Track texture same way sprite does.
// For generated meshes like NineSlicePlane it can change the geometry.
// Unfortunately, this method might not work if you directly change texture in material.
this.shader.texture!==t&&(this.shader.texture=t,this._textureID=-1,t.baseTexture.valid?this.textureUpdated():t.once("update",this.textureUpdated,this))},enumerable:!1,configurable:!0}),e.prototype._render=function(e){this._textureID!==this.shader.texture._updateID&&this.textureUpdated(),t.prototype._render.call(this,e)},e.prototype.destroy=function(e){this.shader.texture.off("update",this.textureUpdated,this),t.prototype.destroy.call(this,e)},e}(hD);!/** @class */function(t){/**
     * @param texture - The texture to use
     * @param {Float32Array} [vertices] - if you want to specify the vertices
     * @param {Float32Array} [uvs] - if you want to specify the uvs
     * @param {Uint16Array} [indices] - if you want to specify the indices
     * @param drawMode - the drawMode, can be any of the Mesh.DRAW_MODES consts
     */function e(e,r,i,n,o){void 0===e&&(e=o_.EMPTY);var s=this,a=new hF(r,i,n);a.getBuffer("aVertexPosition").static=!1;var h=new hC(e);return(s=t.call(this,a,h,null,o)||this).autoUpdate=!0,s}ut(e,t),Object.defineProperty(e.prototype,"vertices",{/**
         * Collection of vertices data.
         * @type {Float32Array}
         */get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),e.prototype._render=function(e){this.autoUpdate&&this.geometry.getBuffer("aVertexPosition").update(),t.prototype._render.call(this,e)}}(hD),/** @class */function(t){/**
     * @param texture - The texture to use on the NineSlicePlane.
     * @param {number} [leftWidth=10] - size of the left vertical bar (A)
     * @param {number} [topHeight=10] - size of the top horizontal bar (C)
     * @param {number} [rightWidth=10] - size of the right vertical bar (B)
     * @param {number} [bottomHeight=10] - size of the bottom horizontal bar (D)
     */function e(e,r,i,n,o){void 0===r&&(r=10),void 0===i&&(i=10),void 0===n&&(n=10),void 0===o&&(o=10);var s=t.call(this,o_.WHITE,4,4)||this;return s._origWidth=e.orig.width,s._origHeight=e.orig.height,/** The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane. */s._width=s._origWidth,/** The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane. */s._height=s._origHeight,s._leftWidth=r,s._rightWidth=n,s._topHeight=i,s._bottomHeight=o,// lets call the setter to ensure all necessary updates are performed
s.texture=e,s}ut(e,t),e.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID,this._refresh()},Object.defineProperty(e.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),/** Updates the horizontal vertices. */e.prototype.updateHorizontalVertices=function(){var t=this.vertices,e=this._getMinScale();t[9]=t[11]=t[13]=t[15]=this._topHeight*e,t[17]=t[19]=t[21]=t[23]=this._height-this._bottomHeight*e,t[25]=t[27]=t[29]=t[31]=this._height},/** Updates the vertical vertices. */e.prototype.updateVerticalVertices=function(){var t=this.vertices,e=this._getMinScale();t[2]=t[10]=t[18]=t[26]=this._leftWidth*e,t[4]=t[12]=t[20]=t[28]=this._width-this._rightWidth*e,t[6]=t[14]=t[22]=t[30]=this._width},/**
     * Returns the smaller of a set of vertical and horizontal scale of nine slice corners.
     * @returns Smaller number of vertical and horizontal scale.
     */e.prototype._getMinScale=function(){var t=this._leftWidth+this._rightWidth,e=this._width>t?1:this._width/t,r=this._topHeight+this._bottomHeight;return Math.min(e,this._height>r?1:this._height/r)},Object.defineProperty(e.prototype,"width",{/** The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane. */get:function(){return this._width},set:function(t){this._width=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{/** The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane. */get:function(){return this._height},set:function(t){this._height=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leftWidth",{/** The width of the left column. */get:function(){return this._leftWidth},set:function(t){this._leftWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rightWidth",{/** The width of the right column. */get:function(){return this._rightWidth},set:function(t){this._rightWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"topHeight",{/** The height of the top row. */get:function(){return this._topHeight},set:function(t){this._topHeight=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bottomHeight",{/** The height of the bottom row. */get:function(){return this._bottomHeight},set:function(t){this._bottomHeight=t,this._refresh()},enumerable:!1,configurable:!0}),/** Refreshes NineSlicePlane coords. All of them. */e.prototype._refresh=function(){var t=this.texture,e=this.geometry.buffers[1].data;this._origWidth=t.orig.width,this._origHeight=t.orig.height;var r=1/this._origWidth,i=1/this._origHeight;e[0]=e[8]=e[16]=e[24]=0,e[1]=e[3]=e[5]=e[7]=0,e[6]=e[14]=e[22]=e[30]=1,e[25]=e[27]=e[29]=e[31]=1,e[2]=e[10]=e[18]=e[26]=r*this._leftWidth,e[4]=e[12]=e[20]=e[28]=1-r*this._rightWidth,e[9]=e[11]=e[13]=e[15]=i*this._topHeight,e[17]=e[19]=e[21]=e[23]=1-i*this._bottomHeight,this.updateHorizontalVertices(),this.updateVerticalVertices(),this.geometry.buffers[0].update(),this.geometry.buffers[1].update()}}(ui);/*!
 * @pixi/sprite-animated - v6.5.10
 * Compiled Thu, 06 Jul 2023 15:25:11 UTC
 *
 * @pixi/sprite-animated is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise */var un=function(t,e){return(un=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},uo=/** @class */function(t){/**
     * @param textures - An array of {@link PIXI.Texture} or frame
     *  objects that make up the animation.
     * @param {boolean} [autoUpdate=true] - Whether to use PIXI.Ticker.shared to auto update animation time.
     */function e(e,r){void 0===r&&(r=!0);var i=t.call(this,e[0]instanceof o_?e[0]:e[0].texture)||this;return i._textures=null,i._durations=null,i._autoUpdate=r,i._isConnectedToTicker=!1,i.animationSpeed=1,i.loop=!0,i.updateAnchor=!1,i.onComplete=null,i.onFrameChange=null,i.onLoop=null,i._currentTime=0,i._playing=!1,i._previousFrame=null,i.textures=e,i}return!function(t,e){function r(){this.constructor=t}un(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),/** Stops the AnimatedSprite. */e.prototype.stop=function(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(nQ.shared.remove(this.update,this),this._isConnectedToTicker=!1))},/** Plays the AnimatedSprite. */e.prototype.play=function(){this._playing||(this._playing=!0,!this._autoUpdate||this._isConnectedToTicker||(nQ.shared.add(this.update,this,tp.HIGH),this._isConnectedToTicker=!0))},/**
     * Stops the AnimatedSprite and goes to a specific frame.
     * @param frameNumber - Frame index to stop at.
     */e.prototype.gotoAndStop=function(t){this.stop();var e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this.updateTexture()},/**
     * Goes to a specific frame and begins playing the AnimatedSprite.
     * @param frameNumber - Frame index to start at.
     */e.prototype.gotoAndPlay=function(t){var e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this.updateTexture(),this.play()},/**
     * Updates the object transform for rendering.
     * @param deltaTime - Time since last tick.
     */e.prototype.update=function(t){if(this._playing){var e=this.animationSpeed*t,r=this.currentFrame;if(null!==this._durations){var i=this._currentTime%1*this._durations[this.currentFrame];for(i+=e/60*1e3;i<0;)this._currentTime--,i+=this._durations[this.currentFrame];var n=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);i>=this._durations[this.currentFrame];)i-=this._durations[this.currentFrame]*n,this._currentTime+=n;this._currentTime+=i/this._durations[this.currentFrame]}else this._currentTime+=e;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):r!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<r?this.onLoop():this.animationSpeed<0&&this.currentFrame>r&&this.onLoop()),this.updateTexture())}},/** Updates the displayed texture to match the current frame index. */e.prototype.updateTexture=function(){var t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this._texture=this._textures[t],this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this.uvs=this._texture._uvs.uvsFloat32,this.updateAnchor&&this._anchor.copyFrom(this._texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))},/**
     * Stops the AnimatedSprite and destroys it.
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
     *  have been set to that value.
     * @param {boolean} [options.children=false] - If set to true, all the children will have their destroy
     *      method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well.
     * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well.
     */e.prototype.destroy=function(e){this.stop(),t.prototype.destroy.call(this,e),this.onComplete=null,this.onFrameChange=null,this.onLoop=null},/**
     * A short hand way of creating an AnimatedSprite from an array of frame ids.
     * @param frames - The array of frames ids the AnimatedSprite will use as its texture frames.
     * @returns - The new animated sprite with the specified frames.
     */e.fromFrames=function(t){for(var r=[],i=0;i<t.length;++i)r.push(o_.from(t[i]));return new e(r)},/**
     * A short hand way of creating an AnimatedSprite from an array of image ids.
     * @param images - The array of image urls the AnimatedSprite will use as its texture frames.
     * @returns The new animate sprite with the specified images as frames.
     */e.fromImages=function(t){for(var r=[],i=0;i<t.length;++i)r.push(o_.from(t[i]));return new e(r)},Object.defineProperty(e.prototype,"totalFrames",{/**
         * The total number of frames in the AnimatedSprite. This is the same as number of textures
         * assigned to the AnimatedSprite.
         * @readonly
         * @default 0
         */get:function(){return this._textures.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textures",{/** The array of textures used for this AnimatedSprite. */get:function(){return this._textures},set:function(t){if(t[0]instanceof o_)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(var e=0;e<t.length;e++)this._textures.push(t[e].texture),this._durations.push(t[e].time)}this._previousFrame=null,this.gotoAndStop(0),this.updateTexture()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentFrame",{/**
         * The AnimatedSprites current frame index.
         * @readonly
         */get:function(){var t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"playing",{/**
         * Indicates if the AnimatedSprite is currently playing.
         * @readonly
         */get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoUpdate",{/** Whether to use PIXI.Ticker.shared to auto update animation time. */get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(nQ.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(nQ.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),e}(a4);nK.add(sz,s0,sQ,aP,hm,sU,hR,hq,ap,aA,aS,hb,n$,ao);class us extends an{constructor(t){super(),// private game: Game
this.assets=[],// this.game = game
this.assets=[{name:"KnightAnimation",url:"Idle_JSON.json"}],this.assets.forEach(t=>{this.add(t.name,t.url)}),this.onError.add(t=>{console.error(t)}),this.onProgress.add(t=>this.showProgress(t)),this.load(()=>t.loadCompleted())}showProgress(t){console.log(`Loading ${t.progress}%`)}}eh.SCALE_MODE=J.NEAREST;class ua extends uo{constructor(t,e,r,i){super(e),this.game=t,this.x=r,this.y=i,this.scale.set(10),this.animationSpeed=.07,this.play(),this.game.pixi.stage.addChild(this)}}new class{get pixi(){return this._pixi}constructor(){this._pixi=new h9({width:1600,height:800,backgroundColor:5570781}),document.body.appendChild(this._pixi.view),new us(this)}loadCompleted(){let t=this.PlayerIdleFrames();this.player=new ua(this,t,100,100),this._pixi.ticker.add(t=>this.update(t))}update(t){this.player.update(t)}PlayerIdleFrames(){let t=[];for(let e=0;e<=9;e++)t.push(o_.from(`Pixel Knight Idle000${e}.png`));return t}};//# sourceMappingURL=AnimationTest.e698610a.js.map

//# sourceMappingURL=AnimationTest.e698610a.js.map
