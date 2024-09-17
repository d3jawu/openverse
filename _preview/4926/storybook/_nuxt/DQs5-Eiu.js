import{a as S,b as _,o as T,n as q}from"./DQej5_ef.js";import{h as I,p as R,b as A,c as L,d as N}from"./CFMQYC2y.js";import{u as y}from"./DZjlKxoF.js";import{d as w,z as p,S as b,T as B,V,h as C,Z as z,A as x,C as D,P as $,D as P,J as M,M as O}from"./DIRjBTfL.js";import{V as U}from"./BQ1v-1nn.js";async function E(t,l=S()){const{path:a,matched:e}=l.resolve(t);if(!e.length||(l._routePreloaded||(l._routePreloaded=new Set),l._routePreloaded.has(a)))return;const o=l._preloadPromises=l._preloadPromises||[];if(o.length>4)return Promise.all(o).then(()=>E(t,l));l._routePreloaded.add(a);const i=e.map(r=>{var c;return(c=r.components)==null?void 0:c.default}).filter(r=>typeof r=="function");for(const r of i){const c=Promise.resolve(r()).catch(()=>{}).finally(()=>o.splice(o.indexOf(c)));o.push(c)}await Promise.all(o)}const j=(...t)=>t.find(l=>l!==void 0),F="noopener noreferrer",K=globalThis.requestIdleCallback||(t=>{const l=Date.now(),a={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-l))};return setTimeout(()=>{t(a)},1)}),W=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)});/*! @__NO_SIDE_EFFECTS__ */function H(t){const l=t.componentName||"NuxtLink",a=(e,o)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const i=t.trailingSlash==="append"?L:N;if(typeof e=="string")return i(e,!0);const r="path"in e?e.path:o(e).path;return{...e,name:void 0,path:i(r,!0)}};return w({name:l,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:o}){const i=S()??_(),r=p(()=>{const n=e.to||e.href||"";return a(n,i.resolve)}),c=p(()=>e.external||e.target&&e.target!=="_self"?!0:typeof r.value=="object"?!1:r.value===""||I(r.value,{acceptRelative:!0})),v=b(!1),f=b(null),g=n=>{var u;f.value=e.custom?(u=n==null?void 0:n.$el)==null?void 0:u.nextElementSibling:n==null?void 0:n.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!Q()){const u=y();let h,s=null;B(()=>{const k=J();T(()=>{h=K(()=>{var m;(m=f==null?void 0:f.value)!=null&&m.tagName&&(s=k.observe(f.value,async()=>{s==null||s(),s=null;const d=typeof r.value=="string"?r.value:i.resolve(r.value).fullPath;await Promise.all([u.hooks.callHook("link:prefetch",d).catch(()=>{}),!c.value&&E(r.value,i).catch(()=>{})]),v.value=!0}))})})}),V(()=>{h&&W(h),s==null||s(),s=null})}return()=>{var k,m;if(!c.value){const d={ref:g,to:r.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(v.value&&(d.class=e.prefetchedClass||t.prefetchedClass),d.rel=e.rel),C(z("RouterLink"),d,o.default)}const n=typeof r.value=="object"?((k=i.resolve(r.value))==null?void 0:k.href)??null:r.value||null,u=e.target||null,h=e.noRel?null:j(e.rel,t.externalRelAttribute,n?F:"")||null,s=()=>q(n,{replace:e.replace});return e.custom?o.default?o.default({href:n,navigate:s,get route(){if(!n)return;const d=R(n);return{path:d.pathname,fullPath:d.pathname,get query(){return A(d.search)},hash:d.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:n}},rel:h,target:u,isExternal:c.value,isActive:!1,isExactActive:!1}):null:C("a",{ref:f,href:n,rel:h,target:u},(m=o.default)==null?void 0:m.call(o))}}})}const X=H({componentName:"NuxtLink"});function J(){const t=y();if(t._observer)return t._observer;let l=null;const a=new Map,e=(i,r)=>(l||(l=new IntersectionObserver(c=>{for(const v of c){const f=a.get(v.target);(v.isIntersecting||v.intersectionRatio>0)&&f&&f()}})),a.set(i,r),l.observe(i),()=>{a.delete(i),l.unobserve(i),a.size===0&&(l.disconnect(),l=null)});return t._observer={observe:e}}function Q(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const Z=()=>{const{$sendCustomEvent:t}=y();return{sendCustomEvent:t}},ae=w({__name:"VLink",props:{href:{},showExternalIcon:{type:Boolean,default:!1},externalIconSize:{default:4},sendExternalLinkClickEvent:{type:Boolean,default:!0}},emits:["mousedown","click","blur","focus","keydown"],setup(t,{emit:l}){const a=t,e=l;function o(n){return typeof n.href=="string"&&!["","#"].includes(n.href)}const i=y().$localePath,r=p(()=>o(a)&&a.href.startsWith("/")),c=p(()=>o(a)?a.href.startsWith("/")?null:{rel:"noopener noreferrer"}:{role:"link"}),v=p(()=>{if(o(a))return a.href.startsWith("/")?i(a.href)??a.href:a.href}),{sendCustomEvent:f}=Z(),g=n=>{e("click",n),!(!o(a)||r.value||!a.sendExternalLinkClickEvent)&&f("EXTERNAL_LINK_CLICK",{url:a.href})};return(n,u)=>{const h=X;return P(),x(h,$({class:{"inline-flex w-max items-center gap-x-2":n.showExternalIcon},"aria-disabled":!v.value},c.value,{to:v.value,onClick:g,onMousedown:u[0]||(u[0]=s=>e("mousedown",s)),onBlur:u[1]||(u[1]=s=>e("blur",s)),onFocus:u[2]||(u[2]=s=>e("focus",s)),onKeydown:u[3]||(u[3]=s=>e("keydown",s))}),{default:D(()=>[M(n.$slots,"default"),n.showExternalIcon&&!r.value?(P(),x(U,{key:0,name:"external-link",class:"inline-block",size:n.externalIconSize,"rtl-flip":""},null,8,["size"])):O("",!0)]),_:3},16,["class","aria-disabled","to"])}}});export{ae as _,Z as u};
