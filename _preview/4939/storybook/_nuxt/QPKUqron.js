import{u as x}from"./CyecUNdH.js";import{N as r,A as w,T as N,d as k,M as o,O as S,P as M,J as g,K as D,U as v,G as b,C as U,p as B,D as p,F as W,E as X,L as T,X as V,Q as J,H as K,I as P}from"./3w4k60lH.js";import{u as Q}from"./BheX1Zp4.js";import{f as z}from"./Xs_VBmP5.js";import{d as Y,a as O}from"./CmtqIMGS.js";import{_ as Z}from"./Cvq3P3Lw.js";import{I as ee}from"./B3aqG266.js";import{g as te,V as ae}from"./DkaN-Hbg.js";import{_ as se}from"./CkgjXT-P.js";import{u as ie}from"./B9GuYyX-.js";import{u as le}from"./CiFXGpc2.js";import{h as ne,w as oe}from"./Bgm6OsrJ.js";import{a as re}from"./CaAPlkf-.js";import{_ as ce}from"./CdYW_o73.js";import{V as G}from"./DaR_SGqp.js";import{V as F}from"./cb4-UXG-.js";import{_ as ue}from"./B09YfxMF.js";import{v as de}from"./DLdssb3b.js";import{u as me}from"./baCxGTTy.js";import{_ as pe}from"./DWa1oPWi.js";import{u as fe}from"./cbNq9jmL.js";import{_ as he}from"./efU75a9z.js";const ge=({title:l,thumbnail:a,isSensitive:t})=>{const s={meta:[]},e=[];return l&&e.push({key:"og:title",property:"og:title",content:l}),a&&!t&&e.push({key:"og:image",property:"og:image",content:a}),s.meta=e,s},it=l=>{var h;const{t:a}=x({useScope:"global"}),t=()=>l.value?{genericTitle:`${a(`mediaDetails.reuse.${l.value.frontendMediaType}`)}`,sensitiveTitle:`${a(`sensitiveContent.title.${l.value.frontendMediaType}`)}`}:{genericTitle:"",sensitiveTitle:""},s=r(()=>{var m;return((m=l.value)==null?void 0:m.isSensitive)??!1}),e=()=>l.value?s.value?t().sensitiveTitle:l.value.title??t().genericTitle:"",c=()=>`${e()} | Openverse`,d=w(c()),i=ge({title:e(),thumbnail:(h=l.value)==null?void 0:h.thumbnail,isSensitive:s.value});return N(l,()=>{d.value=c()}),{pageTitle:d,detailPageMeta:i}},lt=k({__name:"VRelatedMedia",props:{mediaType:{},relatedTo:{}},setup(l){const a=l,t=Y(),s=Q(),e=r(()=>{const f=t.media??[];return{type:a.mediaType,items:f}});N(s,async f=>{const $=z(f==null?void 0:f.params.id);$&&$!==t.mainMediaId&&await t.fetchMedia(a.mediaType,$)},{immediate:!0});const c=r(()=>t.fetchState.isFetching),d=r(()=>e.value.items.length>0||c.value),i=r(()=>z(s==null?void 0:s.query.q)??""),{t:h}=x({useScope:"global"}),m=r(()=>{const f=a.mediaType==="audio"?"audioDetails.relatedAudios":"imageDetails.relatedImages";return h(f)});return(f,$)=>d.value?(o(),S(Z,{key:0,results:e.value,"is-fetching":c.value,"collection-label":m.value,kind:"related","related-to":f.relatedTo,"search-term":i.value,"aria-label":m.value},{header:M(()=>[g("h2",{id:"related-heading",class:D(["heading-6 mb-6",e.value.type==="image"?"md:heading-5":"lg:heading-6"])},v(m.value),3)]),_:1},8,["results","is-fetching","collection-label","related-to","search-term","aria-label"])):b("",!0)}}),ve={class:"-my-1.5px"},_e=3,E=k({__name:"VCollapsibleTagSection",props:{tags:{},mediaType:{}},setup(l){const a=l,t=w(),s=O(),{$sendCustomEvent:e}=le(),c=n=>s.getCollectionPath({type:a.mediaType,collectionParams:{collection:"tag",tag:n}}),d=r(()=>Array.from(new Set(a.tags.map(n=>n.name)))),i=w(),{localeProperties:h}=x({useScope:"global"}),m=r(()=>h.value.dir);function f(n,u){return m.value==="rtl"?n.offsetLeft<u.offsetLeft:n.offsetLeft>u.offsetLeft}function $(n){const u=Array.from(n.children);if(!u.length)return 0;let y=0;for(let C=0;C<u.length;C++){const L=u[C],R=L.previousElementSibling;if(R?f(R,L)&&y++:y++,y===_e+1)return C}return u.length}const q=r(()=>i.value&&_.value==="show"?d.value.slice(0,i.value):d.value),I=r(()=>i.value&&i.value<d.value.length);U(()=>{t.value&&(i.value=$(t.value))});const _=w("show"),H=()=>{_.value=_.value==="show"?"hide":"show",e("TOGGLE_TAG_EXPANSION",{toState:_.value==="show"?"collapsed":"expanded"}),_.value==="hide"&&i.value&&B(()=>{var u;if(!i.value)return;const n=(u=t.value)==null?void 0:u.children.item(i.value);re(n==null?void 0:n.querySelector("a"))})},j=r(()=>I.value?_.value==="show"?"max-h-[7.6875rem]":"mah-h-none":"max-h-none"),A=w();return ne(t,n=>{A.value=n[0].contentRect.width}),oe(A,(n,u)=>{if(!t.value)return;u&&n&&n>u&&(i.value=d.value.length),B(()=>{t.value&&(i.value=$(t.value))})},{debounce:300}),(n,u)=>(o(),p("div",ve,[g("ul",{ref_key:"tagsContainerRef",ref:t,class:D(["flex flex-wrap gap-3 overflow-y-hidden p-1.5px",j.value])},[(o(!0),p(W,null,X(q.value,y=>(o(),p("li",{key:y},[T(ce,{href:c(y)},{default:M(()=>[V(v(y),1)]),_:2},1032,["href"])]))),128))],2),I.value?(o(),S(G,{key:0,size:"small",variant:"transparent-tx","has-icon-end":"",class:"label-bold -ms-2 mt-4 hover:underline","aria-expanded":_.value==="show"?"false":"true",onClick:H},{default:M(()=>[V(v(n.$t(_.value==="show"?"mediaDetails.tags.showMore":"mediaDetails.tags.showLess")),1),T(F,{name:"caret-down",size:4,class:D({"-scale-y-100 transform":_.value==="hide"})},null,8,["class"])]),_:1},8,["aria-expanded"])):b("",!0)]))}}),ye={class:"flex flex-col gap-6 sm:gap-8"},Te={key:0},be={key:0,class:"label-regular mb-2"},$e={key:1,class:"sr-only"},Se={key:1},ke={class:"label-regular mb-2 flex gap-2"},we=k({__name:"VMediaTags",props:{tags:{},mediaType:{},provider:{}},setup(l){const a=l,t=r(()=>{const i=[],h=[];for(const m of a.tags)m.unstable__provider&&m.unstable__provider!==a.provider?i.push(m):h.push(m);return{generated:i,source:h}}),s=r(()=>t.value.source.length>0),e=r(()=>t.value.generated.length>0),c=ie(),d=r(()=>c("/tags"));return(i,h)=>(o(),p("div",ye,[s.value?(o(),p("div",Te,[e.value?(o(),p("h3",be,v(i.$t("mediaDetails.tags.source.heading")),1)):(o(),p("h3",$e,v(i.$t("mediaDetails.tags.title")),1)),T(E,{"media-type":i.mediaType,tags:t.value.source},null,8,["media-type","tags"])])):b("",!0),e.value?(o(),p("div",Se,[g("div",ke,[g("h3",null,v(i.$t("mediaDetails.tags.generated.heading")),1),T(ue,{href:d.value},{default:M(()=>[V(v(i.$t("mediaDetails.tags.generated.pageTitle")),1)]),_:1},8,["href"])]),T(E,{"media-type":i.mediaType,tags:t.value.generated},null,8,["media-type","tags"])])):b("",!0)]))}}),Me={class:"flex flex-col gap-y-6 md:gap-y-8"},Ce={class:"flex flex-row items-center justify-between"},xe={class:"heading-6 md:heading-5"},Pe={class:"flex flex-col items-start gap-6 md:flex-row"},De={class:"flex flex-col gap-6 md:gap-8"},Ve={class:"flex w-full flex-grow flex-col items-start gap-6 md:flex-row"},Ie={key:0},nt=k({__name:"VMediaDetails",props:{media:{}},setup(l){const a=l,t=x({useScope:"global"}),s=r(()=>{if(!a.media)return null;let e=a.media.frontendMediaType===ee?{width:a.media.width,height:a.media.height,type:a.media.filetype}:{};return te(a.media,t,e)});return(e,c)=>(o(),p("section",Me,[g("header",Ce,[g("h2",xe,v(e.$t(`mediaDetails.${e.media.frontendMediaType}Info`)),1),T(se,{media:e.media},null,8,["media"])]),g("div",Pe,[J(e.$slots,"thumbnail"),g("div",De,[g("div",Ve,[e.media.description?(o(),p("p",Ie,v(e.media.description),1)):b("",!0),s.value?(o(),S(ae,{key:1,metadata:s.value},null,8,["metadata"])):b("",!0)]),T(we,{tags:e.media.tags,"media-type":e.media.frontendMediaType,provider:e.media.provider},null,8,["tags","media-type","provider"])])])]))}}),Ae={class:"hidden md:block"},Le=k({__name:"VHideButton",emits:["click"],setup(l){const a=fe(),t=r(()=>a.isBreakpoint("md"));return(s,e)=>(o(),p("div",null,[t.value?(o(),S(G,{key:0,variant:"transparent-gray",class:"label-bold",size:"small","has-icon-end":"",onClick:e[0]||(e[0]=c=>s.$emit("click"))},{default:M(()=>[g("span",Ae,v(s.$t("sensitiveContent.singleResult.hide")),1),T(F,{name:"eye-closed"})]),_:1})):(o(),S(he,{key:1,variant:"transparent-gray","icon-props":{name:"eye-closed"},size:"small",label:s.$t("sensitiveContent.singleResult.hide"),onClick:e[1]||(e[1]=c=>s.$emit("click"))},null,8,["label"]))]))}}),Re={class:"flex w-full justify-between px-4 pb-4 md:px-8"},ot=k({__name:"VSingleResultControls",props:{media:{}},setup(l){const a=l,t=O(),s=r(()=>t.backToSearchPath),{hide:e,canBeHidden:c}=me(a.media);return(d,i)=>K((o(),p("div",Re,[s.value?(o(),S(pe,{key:0,id:d.media.id,href:s.value},null,8,["id","href"])):b("",!0),P(c)?(o(),S(Le,{key:1,class:"ml-auto",onClick:P(e)},null,8,["onClick"])):b("",!0)],512)),[[de,P(c)||s.value]])}});export{ot as _,nt as a,lt as b,it as u};
