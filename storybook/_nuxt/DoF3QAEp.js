import{u as S}from"./CiFXGpc2.js";import{u as T}from"./BheX1Zp4.js";import{u as V}from"./Dx6z3h0D.js";import{u as z}from"./rw0F6EcL.js";import{u as F}from"./cbNq9jmL.js";import{P as c}from"./-TaKdCZx.js";import{_ as v}from"./DfBix1eo.js";import{_ as u,a as G}from"./B3Xw8I1N.js";import{_ as D}from"./BxU1W8iQ.js";import{_ as H}from"./BP8ykEZs.js";import{_ as b}from"./efU75a9z.js";import{d as I,A as l,N as n,T as j,D as h,L as a,J as r,I as e,R as L,F as U,O as k,P as d,G as x,M as i}from"./3w4k60lH.js";const J={class:"hidden lg:flex"},q={class:"flex lg:hidden"},K={class:"flex h-20 w-full justify-between px-2 py-4"},me=I({__name:"VHeaderInternal",emits:["open","close"],setup(Q,{emit:y}){const C=y,f=l(null),p=l(null),g=l(null),P=F(),w=T(),{$sendCustomEvent:R}=S(),o=l(!1),m=n(()=>P.isBreakpoint("sm")),_=n(()=>{var t;return((t=f.value)==null?void 0:t.$el)||null}),$=n(()=>!m.value),B=n(()=>{var t;return(t=g.value)==null?void 0:t.deactivateFocusTrap}),{doneHydrating:E}=z(),{close:s,open:N,onTriggerClick:A,triggerA11yProps:M}=V({id:c,visibleRef:o,nodeRef:p,lockBodyScroll:$,emit:C,deactivateFocusTrap:B}),O=()=>(o.value||R("OPEN_PAGES_MENU",{}),A());return j(w,()=>{o.value&&s()}),(t,W)=>(i(),h("header",{ref_key:"nodeRef",ref:p,class:"main-header z-30 flex h-20 w-full items-stretch justify-between gap-x-2 border-b border-tx px-2 py-4 md:py-4 lg:pe-10 lg:ps-6"},[a(v,{variant:"dark"}),r("nav",J,[a(u,{mode:"light",class:"flex items-center gap-6 text-sm",onClose:e(s)},null,8,["onClose"])]),r("div",q,[a(b,L({id:"menu-button",ref_key:"menuButtonRef",ref:f,variant:"transparent-dark",size:"large",disabled:!e(E),"icon-props":{name:"menu"},label:t.$t("header.aria.menu")},e(M),{onClick:O}),null,16,["disabled","label"]),_.value?(i(),h(U,{key:0},[m.value?(i(),k(H,{key:0,id:e(c),"z-index":"popover",hide:e(s),visible:o.value,"trigger-element":_.value,"trap-focus":!1,"aria-labelledby":"menu-button"},{default:d(()=>[a(u,{mode:"dark",variant:"itemgroup",class:"label-regular w-50 items-start",onClose:e(s)},null,8,["onClose"])]),_:1},8,["id","hide","visible","trigger-element"])):m.value?x("",!0):(i(),k(D,{key:1,id:e(c),ref_key:"modalContentRef",ref:g,"aria-labelledby":"menu-button",hide:e(s),variant:"full",mode:"dark","modal-content-classes":"flex sm:hidden",visible:o.value,onOpen:e(N)},{"top-bar":d(()=>[r("div",K,[a(v,{variant:"light"}),a(b,{variant:"transparent-tx",size:"large","icon-props":{name:"close"},class:"focus-visible:ring-bg-complementary text-white focus-slim-tx hover:bg-tertiary",label:t.$t("modal.closePagesMenu"),onClick:e(s)},null,8,["label","onClick"])])]),default:d(()=>[r("nav",null,[a(u,{mode:"dark",class:"mt-3 flex flex-col items-end gap-y-6","nav-link-classes":"text-white text-3xl focus-visible:ring-bg-complementary","is-in-modal":!0,onClose:e(s)},null,8,["onClose"])]),a(G,{class:"focus-visible:ring-bg-complementary mt-auto focus-visible:ring-offset-0",mode:"dark"})]),_:1},8,["id","hide","visible","onOpen"]))],64)):x("",!0)])],512))}});export{me as _};
