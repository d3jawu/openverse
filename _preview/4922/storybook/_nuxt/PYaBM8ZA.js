import{V as u}from"./CGHqfD1T.js";import{_ as d}from"./JMuDRQlf.js";import{d as g,N as s,D as p,Q as r,J as f,K as n,M as v,L as o}from"./BEWIBK-i.js";const b=["data-testid"],h={class:"caption-regular lg:paragraph-small flex-grow"},N=g({__name:"VNotificationBanner",props:{nature:{default:"info"},variant:{default:"regular"},id:{},closeButtonLabel:{}},emits:["close"],setup(l){const a=l,i=s(()=>a.variant==="dark"?"bg-tertiary text-over-dark":{info:"bg-info",warning:"bg-warning",success:"bg-success",error:"bg-error"}[a.nature]),c=s(()=>a.variant==="dark"?"":{info:"text-info-8",warning:"text-warning-8",success:"text-success-8",error:"text-error-8"}[a.nature]),m=s(()=>a.variant==="dark"?"focus-slim-tx-bg-complementary hover:bg-tertiary-hover":{info:"hover:!bg-info-3",warning:"hover:!bg-warning-3",success:"hover:!bg-success-3",error:"hover:!bg-error-3"}[a.nature]);return(e,t)=>(v(),p("section",{class:n(["flex flex-row items-center gap-2 rounded-sm p-2 lg:p-3",i.value]),"data-testid":`banner-${e.id}`},[r(e.$slots,"start",{},()=>[o(u,{name:e.nature,class:n(c.value)},null,8,["name","class"])]),f("p",h,[r(e.$slots,"default")]),r(e.$slots,"end",{},()=>[o(d,{variant:e.variant==="dark"?"transparent-tx":"transparent-gray","icon-props":{name:"close-small"},size:"small",label:e.closeButtonLabel||e.$t("modal.closeBanner"),class:n(m.value),onClick:t[0]||(t[0]=k=>e.$emit("close"))},null,8,["variant","label","class"])])],10,b))}});export{N as _};
