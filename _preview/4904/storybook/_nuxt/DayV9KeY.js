import{w as n,a as m}from"./DLdssb3b.js";import{d,N as p,M as c,D as u,J as r,K as b}from"./3w4k60lH.js";const f=["aria-label"],h="ltr:right-4 rtl:left-4",w="ltr:right-[22rem] rtl:left-[22rem]",x=d({__name:"VScrollButton",props:{isFilterSidebarVisible:{type:Boolean,default:!0}},emits:["tab"],setup(s){const a=s,l=p(()=>a.isFilterSidebarVisible?w:h),i=e=>{var o;(((o=e.currentTarget)==null?void 0:o.closest("#main-page"))||window).scrollTo({top:0,left:0,behavior:"smooth"})};return(e,t)=>(c(),u("button",{"aria-label":e.$t("browsePage.aria.scroll"),type:"button",class:b(["scroll fixed bottom-4 mb-4 ms-auto h-14 w-14 rounded-full bg-primary text-center text-over-dark transition-all duration-100 ease-linear hover:bg-primary-hover hover:shadow-md",l.value]),onClick:i,onKeydown:t[0]||(t[0]=n(m(o=>e.$emit("tab",o),["exact"]),["tab"]))},t[1]||(t[1]=[r("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",class:"h-full w-full fill-curr"},[r("path",{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"})],-1)]),42,f))}});export{x as _};
