import{u as c}from"./CyecUNdH.js";import{V as u}from"./cb4-UXG-.js";import{_ as m}from"./Bfw0Hhnp.js";import{d as r,N as l,O as g,P as i,M as p,L as d}from"./3w4k60lH.js";const v=r({__name:"VLanguageSelect",setup(_){const o=c({useScope:"global"}),t=l({get:()=>o.locale.value,set:e=>{o.setLocale(e)}}),s=l(()=>o.locales.value.map(e=>({key:e.code,text:e.nativeName})).sort((e,a)=>e.key.localeCompare(a.key)));return(e,a)=>(p(),g(m,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=n=>t.value=n),"field-id":"language",choices:s.value,"blank-text":e.$t("language.language"),"label-text":e.$t("language.language")},{start:i(()=>[d(u,{name:"globe"})]),_:1},8,["modelValue","choices","blank-text","label-text"]))}});export{v as _};
