import{_ as $}from"./DkuuNFzK.js";import{u as V,_ as O,a as x}from"./1riSQT_R.js";import{u as N}from"./BV1ASMkH.js";import{u as w,S as y}from"./DNEZHl3_.js";import{u as T}from"./CZxy0dxx.js";import{_ as D}from"./cCqouU6D.js";import{_ as I}from"./Da_AF2Ec.js";import{_ as M}from"./D5ti56Yi.js";import{u as P}from"./B7PDfjkz.js";import{u as F}from"./D5b5zX9w.js";import{V as j}from"./CGHqfD1T.js";import{_ as z}from"./BvNLlYDq.js";import{d as C,N as s,M as r,O as B,P as g,L as e,A as H,D as u,J as p,af as R,G as A,F as S,R as b,K as U}from"./BEWIBK-i.js";const G=C({__name:"VThemeSelect",setup(k){const n=P({useScope:"global"}),a=w(),d=Object.freeze({light:"sun",dark:"moon"}),l={light:n.t("theme.choices.light"),dark:n.t("theme.choices.dark")},c=s({get:()=>a.colorMode,set:t=>{a.setColorMode(t)}}),f=s(()=>a.isDarkModeSeen),i=()=>{a.setIsDarkModeSeen(!0)},m=F(),_=s(()=>d[m.effectiveColorMode.value]),h=s(()=>{const t=`${n.t("theme.choices.system")} (${l[m.osColorMode.value]})`;return[{key:"light",text:l.light},{key:"dark",text:l.dark},{key:"system",text:t}]});return(t,o)=>(r(),B(z,{modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=v=>c.value=v),"field-id":"theme",choices:h.value,"blank-text":t.$t("theme.theme"),"label-text":t.$t("theme.theme"),"show-selected":!1,"show-new-highlight":!f.value,onClick:i},{start:g(()=>[e(j,{name:_.value},null,8,["name"])]),_:1},8,["modelValue","choices","blank-text","label-text","show-new-highlight"]))}}),J={key:0,class:"logo-and-links flex flex-col gap-y-10"},K={class:"locale-and-wp flex flex-col justify-between"},L={class:"flex flex-row items-center gap-6"},re=C({__name:"VFooter",props:{mode:{},languageProps:{default:()=>({})}},setup(k){const n=k,a=w(),{all:d}=V(),l=s(()=>n.mode==="content"),c=T(),f=s(()=>c.isOn("dark_mode_ui_toggle")),i=H(null),m=y[a.breakpoint],{dimens:_}=N(i,{initialWidth:m}),h=s(()=>Object.entries(y).filter(([,o])=>_.value.width>=o).map(([o])=>`footer-${o}`)),t=s(()=>({"--link-col-height":Math.ceil(Object.keys(d).length/2)}));return(o,v)=>{const E=$;return r(),u("footer",{ref_key:"footerEl",ref:i,class:U(["footer flex flex-col gap-10 px-6",[...h.value,l.value?"footer-content":"footer-internal"]])},[l.value?(r(),u("div",J,[e(D,{href:"/",class:"logo text-default","aria-label":"Openverse"},{default:g(()=>[e(I,{class:"text-[18px]"})]),_:1}),p("nav",null,[e(O,{class:"nav-list label-regular",style:R(t.value),"nav-link-classes":"py-2"},null,8,["style"])])])):A("",!0),p("div",K,[f.value?(r(),u(S,{key:0},[e(x,{mode:"light"}),p("div",L,[e(M,b(o.languageProps,{class:"language max-w-full border-secondary"}),null,16),e(E,null,{default:g(()=>[e(G,{class:"border-secondary"})]),_:1})])],64)):(r(),u(S,{key:1},[e(M,b(o.languageProps,{class:"language max-w-full border-secondary"}),null,16),e(x,{mode:"light"})],64))])],2)}}});export{re as _};
