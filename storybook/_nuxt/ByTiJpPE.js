import{d as F}from"./CVtkxrq9.js";import{A as O,a9 as S,T as j,aa as N,at as L,p as P}from"./3w4k60lH.js";function I(r,i){if(typeof r!="string")throw new TypeError("argument str must be a string");const n={},e=i||{},t=e.decode||M;let a=0;for(;a<r.length;){const o=r.indexOf("=",a);if(o===-1)break;let c=r.indexOf(";",a);if(c===-1)c=r.length;else if(c<o){a=r.lastIndexOf(";",o-1)+1;continue}const u=r.slice(a,o).trim();if(e!=null&&e.filter&&!(e!=null&&e.filter(u))){a=c+1;continue}if(n[u]===void 0){let s=r.slice(o+1,c).trim();s.codePointAt(0)===34&&(s=s.slice(1,-1)),n[u]=_(s,t)}a=c+1}return n}function M(r){return r.includes("%")?decodeURIComponent(r):r}function _(r,i){try{return i(r)}catch{return r}}const w=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function v(r,i,n){const e=n||{},t=e.encode||encodeURIComponent;if(typeof t!="function")throw new TypeError("option encode is invalid");if(!w.test(r))throw new TypeError("argument name is invalid");const a=t(i);if(a&&!w.test(a))throw new TypeError("argument val is invalid");let o=r+"="+a;if(e.maxAge!==void 0&&e.maxAge!==null){const c=e.maxAge-0;if(Number.isNaN(c)||!Number.isFinite(c))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(c)}if(e.domain){if(!w.test(e.domain))throw new TypeError("option domain is invalid");o+="; Domain="+e.domain}if(e.path){if(!w.test(e.path))throw new TypeError("option path is invalid");o+="; Path="+e.path}if(e.expires){if(!B(e.expires)||Number.isNaN(e.expires.valueOf()))throw new TypeError("option expires is invalid");o+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(o+="; HttpOnly"),e.secure&&(o+="; Secure"),e.priority)switch(typeof e.priority=="string"?e.priority.toLowerCase():e.priority){case"low":{o+="; Priority=Low";break}case"medium":{o+="; Priority=Medium";break}case"high":{o+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:{o+="; SameSite=Strict";break}case"lax":{o+="; SameSite=Lax";break}case"strict":{o+="; SameSite=Strict";break}case"none":{o+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return e.partitioned&&(o+="; Partitioned"),o}function B(r){return Object.prototype.toString.call(r)==="[object Date]"||r instanceof Date}const A=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function x(r,i){i?i={...A,...i}:i=A;const n=R(i);return n.dispatch(r),n.toString()}const z=Object.freeze(["prototype","__proto__","constructor"]);function R(r){let i="",n=new Map;const e=t=>{i+=t};return{toString(){return i},getContext(){return n},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const a=Object.prototype.toString.call(t);let o="";const c=a.length;c<10?o="unknown:["+a+"]":o=a.slice(8,c-1),o=o.toLowerCase();let u=null;if((u=n.get(t))===void 0)n.set(t,n.size);else return this.dispatch("[CIRCULAR:"+u+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):r.ignoreUnknown||this.unkown(t,o);else{let s=Object.keys(t);r.unorderedObjects&&(s=s.sort());let l=[];r.respectType!==!1&&!C(t)&&(l=z),r.excludeKeys&&(s=s.filter(f=>!r.excludeKeys(f)),l=l.filter(f=>!r.excludeKeys(f))),e("object:"+(s.length+l.length)+":");const d=f=>{this.dispatch(f),e(":"),r.excludeValues||this.dispatch(t[f]),e(",")};for(const f of s)d(f);for(const f of l)d(f)}},array(t,a){if(a=a===void 0?r.unorderedArrays!==!1:a,e("array:"+t.length+":"),!a||t.length<=1){for(const u of t)this.dispatch(u);return}const o=new Map,c=t.map(u=>{const s=R(r);s.dispatch(u);for(const[l,d]of s.getContext())o.set(l,d);return s.toString()});return n=o,c.sort(),this.array(c,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),C(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const a=[...t];return this.array(a,r.unorderedSets!==!1)},set(t){e("set:");const a=[...t];return this.array(a,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const U="[native code] }",K=U.length;function C(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-K)===U}function H(r,i,n={}){return r===i||x(r,n)===x(i,n)}function p(r){if(typeof r!="object")return r;var i,n,e=Object.prototype.toString.call(r);if(e==="[object Object]"){if(r.constructor!==Object&&typeof r.constructor=="function"){n=new r.constructor;for(i in r)r.hasOwnProperty(i)&&n[i]!==r[i]&&(n[i]=p(r[i]))}else{n={};for(i in r)i==="__proto__"?Object.defineProperty(n,i,{value:p(r[i]),configurable:!0,enumerable:!0,writable:!0}):n[i]=p(r[i])}return n}if(e==="[object Array]"){for(i=r.length,n=Array(i);i--;)n[i]=p(r[i]);return n}return e==="[object Set]"?(n=new Set,r.forEach(function(t){n.add(p(t))}),n):e==="[object Map]"?(n=new Map,r.forEach(function(t,a){n.set(p(a),p(t))}),n):e==="[object Date]"?new Date(+r):e==="[object RegExp]"?(n=new RegExp(r.source,r.flags),n.lastIndex=r.lastIndex,n):e==="[object DataView]"?new r.constructor(p(r.buffer)):e==="[object ArrayBuffer]"?r.slice(0):e.slice(-6)==="Array]"?new r.constructor(r):r}const V={path:"/",watch:!0,decode:r=>F(decodeURIComponent(r)),encode:r=>encodeURIComponent(typeof r=="string"?r:JSON.stringify(r))},m=window.cookieStore;function G(r,i){var u;const n={...V,...i};n.filter??(n.filter=s=>s===r);const e=E(n)||{};let t;n.maxAge!==void 0?t=n.maxAge*1e3:n.expires&&(t=n.expires.getTime()-Date.now());const a=t!==void 0&&t<=0,o=p(a?void 0:e[r]??((u=n.default)==null?void 0:u.call(n))),c=t&&!a?$(o,t,n.watch&&n.watch!=="shallow"):O(o);{let s=null;try{!m&&typeof BroadcastChannel<"u"&&(s=new BroadcastChannel(`nuxt:cookies:${r}`))}catch{}const l=()=>{n.readonly||H(c.value,e[r])||(q(r,c.value,n),e[r]=p(c.value),s==null||s.postMessage({value:n.encode(c.value)}))},d=y=>{var g;const h=y.refresh?(g=E(n))==null?void 0:g[r]:n.decode(y.value);f=!0,c.value=h,e[r]=p(h),P(()=>{f=!1})};let f=!1;const k=!!N();if(k&&S(()=>{f=!0,l(),s==null||s.close()}),m){const y=h=>{const g=h.changed.find(b=>b.name===r),D=h.deleted.find(b=>b.name===r);g&&d({value:g.value}),D&&d({value:null})};m.addEventListener("change",y),k&&S(()=>m.removeEventListener("change",y))}else s&&(s.onmessage=({data:y})=>d(y));n.watch?j(c,()=>{f||l()},{deep:n.watch!=="shallow"}):l()}return c}function E(r={}){return I(document.cookie,r)}function J(r,i,n={}){return i==null?v(r,i,{...n,maxAge:-1}):v(r,i,n)}function q(r,i,n={}){document.cookie=J(r,i,n)}const T=2147483647;function $(r,i,n){let e,t,a=0;const o=n?O(r):{value:r};return N()&&S(()=>{t==null||t(),clearTimeout(e)}),L((c,u)=>{n&&(t=j(o,u));function s(){a=0,clearTimeout(e);const l=i-a,d=l<T?l:T;e=setTimeout(()=>{if(a+=d,a<i)return s();o.value=void 0,u()},d)}return{get(){return c(),o.value},set(l){s(),o.value=l,u()}}})}export{G as u};
