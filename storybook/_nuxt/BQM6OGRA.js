import{_ as $}from"./H-yXjwn7.js";import{u as w,_ as V,a as x}from"./B3Xw8I1N.js";import{u as O}from"./BOCIT4X8.js";import{u as S,S as v}from"./cbNq9jmL.js";import{u as N}from"./CP2FzhSj.js";import{_ as T}from"./B09YfxMF.js";import{_ as P}from"./CvLOEWj9.js";import{_ as y}from"./C1pZmFeO.js";import{u as F}from"./CyecUNdH.js";import{u as I}from"./BxFueWvQ.js";import{V as j}from"./cb4-UXG-.js";import{_ as z}from"./Dy8h9AIA.js";import{d as C,N as o,M as r,O as B,P as g,L as e,A as D,D as f,J as h,af as H,G as R,F as b,R as M,K as A}from"./3w4k60lH.js";const U=C({__name:"VThemeSelect",setup(k){const l=F({useScope:"global"}),n=S(),d=Object.freeze({light:"sun",dark:"moon"}),s={light:l.t("theme.choices.light"),dark:l.t("theme.choices.dark")},c=o({get:()=>n.colorMode,set:t=>{n.setColorMode(t)}}),i=I(),m=o(()=>d[i.effectiveColorMode.value]),_=o(()=>{const t=`${l.t("theme.choices.system")} (${s[i.osColorMode.value]})`;return[{key:"light",text:s.light},{key:"dark",text:s.dark},{key:"system",text:t}]});return(t,u)=>(r(),B(z,{modelValue:c.value,"onUpdate:modelValue":u[0]||(u[0]=p=>c.value=p),"field-id":"theme",choices:_.value,"blank-text":t.$t("theme.theme"),"label-text":t.$t("theme.theme"),"show-selected":!1},{start:g(()=>[e(j,{name:m.value},null,8,["name"])]),_:1},8,["modelValue","choices","blank-text","label-text"]))}}),G={key:0,class:"logo-and-links flex flex-col gap-y-10"},J={class:"locale-and-wp flex flex-col justify-between"},K={class:"flex flex-row items-center gap-6"},ne=C({__name:"VFooter",props:{mode:{},languageProps:{default:()=>({})}},setup(k){const l=k,n=S(),{all:d}=w(),s=o(()=>l.mode==="content"),c=N(),i=o(()=>c.isOn("dark_mode_ui_toggle")),m=D(null),_=v[n.breakpoint],{dimens:t}=O(m,{initialWidth:_}),u=o(()=>Object.entries(v).filter(([,a])=>t.value.width>=a).map(([a])=>`footer-${a}`)),p=o(()=>({"--link-col-height":Math.ceil(Object.keys(d).length/2)}));return(a,L)=>{const E=$;return r(),f("footer",{ref_key:"footerEl",ref:m,class:A(["footer flex flex-col gap-10 px-6",[...u.value,s.value?"footer-content":"footer-internal"]])},[s.value?(r(),f("div",G,[e(T,{href:"/",class:"logo text-default","aria-label":"Openverse"},{default:g(()=>[e(P,{class:"text-[18px]"})]),_:1}),h("nav",null,[e(V,{class:"nav-list label-regular",style:H(p.value),"nav-link-classes":"py-2"},null,8,["style"])])])):R("",!0),h("div",J,[i.value?(r(),f(b,{key:0},[e(x,{mode:"light"}),h("div",K,[e(y,M(a.languageProps,{class:"language max-w-full border-secondary"}),null,16),e(E,null,{default:g(()=>[e(U,{class:"border-secondary"})]),_:1})])],64)):(r(),f(b,{key:1},[e(y,M(a.languageProps,{class:"language max-w-full border-secondary"}),null,16),e(x,{mode:"light"})],64))])],2)}}});export{ne as _};
