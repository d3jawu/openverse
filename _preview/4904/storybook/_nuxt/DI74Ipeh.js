import{v as m}from"./DLdssb3b.js";import{V as h}from"./BohTCMpu.js";import{d as v,A as p,N as o,T as k,D as d,J as i,R as g,K as r,H as y,O as w,Q as B,M as t}from"./3w4k60lH.js";const C=["for"],S={class:"relative block"},_=["id","disabled"],D=v({__name:"VCheckbox",props:{id:{},checked:{type:Boolean,default:!1},name:{},value:{},disabled:{type:Boolean},isSwitch:{type:Boolean,default:!1}},emits:["change"],setup(n,{emit:c}){const s=n,u=c,a=p(s.checked||!1),b=o(()=>s.disabled?"text-disabled":"text-default"),l=o(()=>{const e={name:s.name||s.id,value:s.value||s.id};return a.value&&(e.checked=!0),e});k(()=>s.checked,e=>{e!==a.value&&(a.value=e)});const f=()=>{a.value=!a.value,u("change",{name:l.value.name,value:l.value.value,checked:a.value})};return(e,x)=>(t(),d("label",{for:e.id,class:r(["relative flex text-sm leading-5",b.value])},[i("span",S,[i("input",g({id:e.id,type:"checkbox",class:["me-3 block appearance-none border border-tertiary bg-default transition-colors duration-100 checked:bg-tertiary disabled:border-disabled disabled:bg-secondary checked:disabled:border-disabled checked:disabled:bg-disabled",e.isSwitch?["h-4.5","w-9","rounded-full","focus-slim-offset"]:["h-5","w-5","rounded-sm","focus-slim-tx","checked:focus-visible:border-bg-ring"]]},l.value,{disabled:e.disabled?!0:void 0,onClick:f}),null,16,_),e.isSwitch?(t(),d("span",{key:0,class:r(["absolute left-0.75 top-0.75 block h-3 w-3 rounded-full transition-transform duration-100",a.value?["bg-default","translate-x-[1.125rem]"]:e.disabled?["bg-disabled"]:["bg-tertiary"]]),"aria-hidden":"true"},null,2)):y((t(),w(h,{key:1,class:"pointer-events-none absolute inset-0 transform text-over-dark",name:"check",size:5},null,512)),[[m,a.value]])]),B(e.$slots,"default")],10,C))}});export{D as _};
