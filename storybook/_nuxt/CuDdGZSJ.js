import{u as se}from"./CyecUNdH.js";import{u as z}from"./CiFXGpc2.js";import{g as ue}from"./evtOUYYW.js";import{_ as ce,V as le}from"./CaAPlkf-.js";import{c as de,g as fe}from"./Cpj98o6Y.js";import{u as pe}from"./rw0F6EcL.js";import{V as me}from"./DaR_SGqp.js";import{d as P,A as B,C as X,S as Y,M as L,O as G,P as w,D as O,U as C,I as ye,J as $,Q as ve,L as A,F as he,E as be,X as ge,G as U}from"./3w4k60lH.js";import{_ as _e}from"./DjkfKio3.js";import{_ as Te}from"./CiVENUWy.js";var K={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(k,m){(function(g,y){k.exports=y()})(de,function(){return function(){var E={686:function(c,l,e){e.d(l,{default:function(){return ae}});var t=e(279),a=e.n(t),o=e(370),b=e.n(o),v=e(817),_=e.n(v);function f(u){try{return document.execCommand(u)}catch{return!1}}var h=function(r){var n=_()(r);return f("cut"),n},p=h;function S(u){var r=document.documentElement.getAttribute("dir")==="rtl",n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[r?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(i,"px"),n.setAttribute("readonly",""),n.value=u,n}var F=function(r,n){var i=S(r);n.container.appendChild(i);var s=_()(i);return f("copy"),i.remove(),s},q=function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},i="";return typeof r=="string"?i=F(r,n):r instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(r==null?void 0:r.type)?i=F(r.value,n):(i=_()(r),f("copy")),i},I=q;function M(u){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?M=function(n){return typeof n}:M=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},M(u)}var J=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=r.action,i=n===void 0?"copy":n,s=r.container,d=r.target,T=r.text;if(i!=="copy"&&i!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(d!==void 0)if(d&&M(d)==="object"&&d.nodeType===1){if(i==="copy"&&d.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(i==="cut"&&(d.hasAttribute("readonly")||d.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(T)return I(T,{container:s});if(d)return i==="cut"?p(d):I(d,{container:s})},Q=J;function x(u){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(n){return typeof n}:x=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},x(u)}function W(u,r){if(!(u instanceof r))throw new TypeError("Cannot call a class as a function")}function H(u,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(u,i.key,i)}}function Z(u,r,n){return r&&H(u.prototype,r),n&&H(u,n),u}function ee(u,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(r&&r.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),r&&j(u,r)}function j(u,r){return j=Object.setPrototypeOf||function(i,s){return i.__proto__=s,i},j(u,r)}function te(u){var r=oe();return function(){var i=N(u),s;if(r){var d=N(this).constructor;s=Reflect.construct(i,arguments,d)}else s=i.apply(this,arguments);return ne(this,s)}}function ne(u,r){return r&&(x(r)==="object"||typeof r=="function")?r:re(u)}function re(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}function oe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function N(u){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},N(u)}function V(u,r){var n="data-clipboard-".concat(u);if(r.hasAttribute(n))return r.getAttribute(n)}var ie=function(u){ee(n,u);var r=te(n);function n(i,s){var d;return W(this,n),d=r.call(this),d.resolveOptions(s),d.listenClick(i),d}return Z(n,[{key:"resolveOptions",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof s.action=="function"?s.action:this.defaultAction,this.target=typeof s.target=="function"?s.target:this.defaultTarget,this.text=typeof s.text=="function"?s.text:this.defaultText,this.container=x(s.container)==="object"?s.container:document.body}},{key:"listenClick",value:function(s){var d=this;this.listener=b()(s,"click",function(T){return d.onClick(T)})}},{key:"onClick",value:function(s){var d=s.delegateTarget||s.currentTarget,T=this.action(d)||"copy",R=Q({action:T,container:this.container,target:this.target(d),text:this.text(d)});this.emit(R?"success":"error",{action:T,text:R,trigger:d,clearSelection:function(){d&&d.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(s){return V("action",s)}},{key:"defaultTarget",value:function(s){var d=V("target",s);if(d)return document.querySelector(d)}},{key:"defaultText",value:function(s){return V("text",s)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return I(s,d)}},{key:"cut",value:function(s){return p(s)}},{key:"isSupported",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],d=typeof s=="string"?[s]:s,T=!!document.queryCommandSupported;return d.forEach(function(R){T=T&&!!document.queryCommandSupported(R)}),T}}]),n}(a()),ae=ie},828:function(c){var l=9;if(typeof Element<"u"&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}function t(a,o){for(;a&&a.nodeType!==l;){if(typeof a.matches=="function"&&a.matches(o))return a;a=a.parentNode}}c.exports=t},438:function(c,l,e){var t=e(828);function a(v,_,f,h,p){var S=b.apply(this,arguments);return v.addEventListener(f,S,p),{destroy:function(){v.removeEventListener(f,S,p)}}}function o(v,_,f,h,p){return typeof v.addEventListener=="function"?a.apply(null,arguments):typeof f=="function"?a.bind(null,document).apply(null,arguments):(typeof v=="string"&&(v=document.querySelectorAll(v)),Array.prototype.map.call(v,function(S){return a(S,_,f,h,p)}))}function b(v,_,f,h){return function(p){p.delegateTarget=t(p.target,_),p.delegateTarget&&h.call(v,p)}}c.exports=o},879:function(c,l){l.node=function(e){return e!==void 0&&e instanceof HTMLElement&&e.nodeType===1},l.nodeList=function(e){var t=Object.prototype.toString.call(e);return e!==void 0&&(t==="[object NodeList]"||t==="[object HTMLCollection]")&&"length"in e&&(e.length===0||l.node(e[0]))},l.string=function(e){return typeof e=="string"||e instanceof String},l.fn=function(e){var t=Object.prototype.toString.call(e);return t==="[object Function]"}},370:function(c,l,e){var t=e(879),a=e(438);function o(f,h,p){if(!f&&!h&&!p)throw new Error("Missing required arguments");if(!t.string(h))throw new TypeError("Second argument must be a String");if(!t.fn(p))throw new TypeError("Third argument must be a Function");if(t.node(f))return b(f,h,p);if(t.nodeList(f))return v(f,h,p);if(t.string(f))return _(f,h,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function b(f,h,p){return f.addEventListener(h,p),{destroy:function(){f.removeEventListener(h,p)}}}function v(f,h,p){return Array.prototype.forEach.call(f,function(S){S.addEventListener(h,p)}),{destroy:function(){Array.prototype.forEach.call(f,function(S){S.removeEventListener(h,p)})}}}function _(f,h,p){return a(document.body,f,h,p)}c.exports=o},817:function(c){function l(e){var t;if(e.nodeName==="SELECT")e.focus(),t=e.value;else if(e.nodeName==="INPUT"||e.nodeName==="TEXTAREA"){var a=e.hasAttribute("readonly");a||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),a||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),b=document.createRange();b.selectNodeContents(e),o.removeAllRanges(),o.addRange(b),t=o.toString()}return t}c.exports=l},279:function(c){function l(){}l.prototype={on:function(e,t,a){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:a}),this},once:function(e,t,a){var o=this;function b(){o.off(e,b),t.apply(a,arguments)}return b._=t,this.on(e,b,a)},emit:function(e){var t=[].slice.call(arguments,1),a=((this.e||(this.e={}))[e]||[]).slice(),o=0,b=a.length;for(o;o<b;o++)a[o].fn.apply(a[o].ctx,t);return this},off:function(e,t){var a=this.e||(this.e={}),o=a[e],b=[];if(o&&t)for(var v=0,_=o.length;v<_;v++)o[v].fn!==t&&o[v].fn._!==t&&b.push(o[v]);return b.length?a[e]=b:delete a[e],this}},c.exports=l,c.exports.TinyEmitter=l}},g={};function y(c){if(g[c])return g[c].exports;var l=g[c]={exports:{}};return E[c](l,l.exports,y),l.exports}return function(){y.n=function(c){var l=c&&c.__esModule?function(){return c.default}:function(){return c};return y.d(l,{a:l}),l}}(),function(){y.d=function(c,l){for(var e in l)y.o(l,e)&&!y.o(c,e)&&Object.defineProperty(c,e,{enumerable:!0,get:l[e]})}}(),function(){y.o=function(c,l){return Object.prototype.hasOwnProperty.call(c,l)}}(),y(686)}().default})})(K);var Ee=K.exports;const Se=fe(Ee),Ce={key:0},we={key:1},Ae=P({__name:"VCopyButton",props:{el:{},id:{}},emits:["copied","copy-failed"],setup(k,{emit:m}){const E=k,g=m,y=B(null),c=B(!1);function l(){const o=document.getElementById(E.id);o&&o.focus()}const e=o=>{c.value=!0,g("copied"),setTimeout(()=>{c.value=!1},2e3),o.clearSelection(),l()},t=o=>{g("copy-failed"),o.clearSelection(),l()};X(()=>{y.value=new Se(`#${E.id}`),y.value.on("success",e),y.value.on("error",t)}),Y(()=>{var o;return(o=y.value)==null?void 0:o.destroy()});const{doneHydrating:a}=pe();return(o,b)=>(L(),G(me,{id:o.id,type:"button",variant:"filled-dark",size:"small",class:"label-bold flex-shrink-0",disabled:!ye(a),"data-clipboard-target":o.el},{default:w(()=>[c.value?(L(),O("span",we,C(o.$t("mediaDetails.reuse.copyLicense.copied")),1)):(L(),O("span",Ce,C(o.$t("mediaDetails.reuse.copyLicense.copyText")),1))]),_:1},8,["id","disabled","data-clipboard-target"]))}}),Le=["id"],D=P({__name:"VLicenseTabPanel",props:{tab:{},mediaId:{},mediaType:{}},setup(k){const m=k,{$sendCustomEvent:E}=z(),g=()=>{E("COPY_ATTRIBUTION",{id:m.mediaId,format:m.tab,mediaType:m.mediaType})};return(y,c)=>(L(),G(_e,{id:y.tab,class:"flex h-[190px] flex-col items-start justify-between text-sm md:text-base"},{default:w(()=>[$("div",{id:`panel-slot-${y.tab}`,class:"overflow-y-auto"},[ve(y.$slots,"default")],8,Le),A(Ae,{id:`copyattr-${y.tab}`,el:`#panel-slot-${y.tab}`,class:"mt-6",onCopied:g},null,8,["id","el"])]),_:3},8,["id"]))}}),ke={id:"copy-license-title",class:"description-bold md:heading-6 mb-4"},$e=["innerHTML"],Oe={id:"attribution-html",class:"break-all font-mono",dir:"ltr"},xe={id:"attribution-xml",class:"whitespace-pre-wrap break-all",dir:"ltr"},Me=P({__name:"VCopyLicense",props:{media:{}},setup(k){const m=["rich","html","plain","xml"],E=k,g=B(null),y=se({useScope:"global"}),c=t=>ue(E.media,y,t),{$sendCustomEvent:l}=z(),e=t=>{if(!t.currentTarget)return;const a=t.currentTarget.href;l("EXTERNAL_LINK_CLICK",{url:a})};return X(()=>{var t;(t=g.value)==null||t.querySelectorAll("a").forEach(a=>{a.addEventListener("click",e)})}),Y(()=>{var t;(t=g.value)==null||t.querySelectorAll("a").forEach(a=>{a.removeEventListener("click",e)})}),(t,a)=>(L(),O("div",null,[$("h3",ke,C(t.$t("mediaDetails.reuse.copyLicense.title")),1),A(ce,{label:"#copy-license-title","selected-id":m[0]},{tabs:w(()=>[(L(),O(he,null,be(m,o=>A(le,{id:o,key:o},{default:w(()=>[ge(C(t.$t(`mediaDetails.reuse.copyLicense.${o}`)),1)]),_:2},1032,["id"])),64))]),default:w(()=>[A(D,{tab:m[0],"media-id":t.media.id,"media-type":t.media.frontendMediaType},{default:w(()=>[$("div",{ref_key:"richRef",ref:g,innerHTML:c({includeIcons:!1})},null,8,$e)]),_:1},8,["tab","media-id","media-type"]),A(D,{tab:m[1],"media-id":t.media.id,"media-type":t.media.frontendMediaType},{default:w(()=>[$("p",Oe,C(c()),1)]),_:1},8,["tab","media-id","media-type"]),A(D,{tab:m[2],"media-id":t.media.id,"media-type":t.media.frontendMediaType},{default:w(()=>[$("p",null,C(c({isPlaintext:!0})),1)]),_:1},8,["tab","media-id","media-type"]),A(D,{tab:m[3],"media-id":t.media.id,"media-type":t.media.frontendMediaType},{default:w(()=>[$("pre",xe,C(c({isXml:!0})),1)]),_:1},8,["tab","media-id","media-type"])]),_:1},8,["selected-id"])]))}}),Ne=["aria-label"],Re={class:"heading-6 md:heading-5 mb-4"},De={class:"description-regular"},Pe={key:0,class:"description-regular mt-3"},Ie={key:1,class:"mt-8 grid gap-6 md:grid-cols-2"},qe=P({__name:"VMediaReuse",props:{media:{}},setup(k){return(m,E)=>(L(),O("section",{"aria-label":m.$t("mediaDetails.reuse.title"),class:"media-reuse"},[$("h2",Re,C(m.$t("mediaDetails.reuse.title")),1),$("p",De,C(m.$t("mediaDetails.reuse.description",{media:m.media.frontendMediaType})),1),m.media.frontendMediaType==="image"?(L(),O("p",Pe,C(m.$t("mediaDetails.reuse.copyrightDisclaimer")),1)):U("",!0),m.media.license_url?(L(),O("div",Ie,[A(Te,{license:m.media.license,"license-url":m.media.license_url,"license-version":m.media.license_version},null,8,["license","license-url","license-version"]),A(Me,{media:m.media},null,8,["media"])])):U("",!0)],8,Ne))}});export{qe as _};
