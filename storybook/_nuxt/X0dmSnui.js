import{u as y}from"./CiFXGpc2.js";import{a as x}from"./CmtqIMGS.js";import{c as C}from"./D0ww02ZN.js";import{_ as S}from"./B09YfxMF.js";import{V as m}from"./DaR_SGqp.js";import{V}from"./cb4-UXG-.js";import{d as w,N as $,Y as R,M as l,D as r,J as i,U as t,F as B,E,I as N,L as s,P as n,X as a}from"./3w4k60lH.js";import{_ as I}from"./DlAUqK2U.js";const T={id:"safety-wall",class:"relative flex h-full w-full flex-grow items-center justify-center border-t border-default bg-default py-8 text-center"},L={class:"mx-auto max-w-2xl px-8 text-sm leading-relaxed"},M={class:"heading-5 mb-2"},O={class:"mb-2"},j={class:"mt-6 flex flex-col items-stretch justify-center gap-4 md:flex-row md:gap-6"},F=w({__name:"VSafetyWall",props:{sensitivity:{},id:{}},emits:["reveal"],setup(p,{emit:f}){const c=p,u=f,v=x(),_=$(()=>v.backToSearchPath),{$sendCustomEvent:h}=y(),g=()=>{h("GO_BACK_FROM_SENSITIVE_RESULT",{id:c.id,sensitivities:c.sensitivity.join(",")})},b=()=>{u("reveal")};return(e,o)=>{const k=R("i18n-t");return l(),r("div",T,[i("section",L,[i("h1",M,t(e.$t("sensitiveContent.singleResult.title")),1),i("p",O,t(e.$t("sensitiveContent.singleResult.explanation")),1),(l(!0),r(B,null,E(e.sensitivity,d=>(l(),r("p",{key:d},t(e.$t(`sensitiveContent.reasons.${N(C)(d)}`,{openverse:"Openverse"})),1))),128)),s(k,{scope:"global",tag:"p",class:"mt-2",keypath:"sensitiveContent.singleResult.learnMore"},{openverse:n(()=>o[0]||(o[0]=[a("Openverse")])),link:n(()=>[s(S,{class:"text-link hover:underline",href:"/sensitive-content"},{default:n(()=>[a(t(e.$t("sensitiveContent.singleResult.link")),1)]),_:1}),o[1]||(o[1]=a(" "+t(" ")))]),_:1}),i("div",j,[s(m,{as:"VLink",size:"large",variant:"filled-dark",class:"label-bold",href:_.value||"/",onMousedown:g},{default:n(()=>[a(t(e.$t("singleResult.back")),1)]),_:1},8,["href"]),s(m,{size:"large",variant:"bordered-gray",class:"label-bold","has-icon-end":"",onClick:b},{default:n(()=>[a(t(e.$t("sensitiveContent.singleResult.show"))+" ",1),s(V,{name:"eye-open"})]),_:1})])])])}}}),K=I(F,[["__scopeId","data-v-d07568ba"]]);export{K as V};
