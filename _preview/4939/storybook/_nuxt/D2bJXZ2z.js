import{u as v}from"./CyecUNdH.js";import{a as R,u as L}from"./CmtqIMGS.js";import{u as E}from"./De0LWTJY.js";import{g as V}from"./rzpoyOek.js";import{d as T,N as f,M as a,D as p,J as y,U as _,K as w,A as N,Y as P,L as i,P as c,O as h,I as $,X as B,G as b,F as x,E as A}from"./3w4k60lH.js";import{_ as F}from"./DlAUqK2U.js";import{_ as K}from"./Cvq3P3Lw.js";import{_ as M}from"./B9ueq6jU.js";import{u as z}from"./CiFXGpc2.js";import{s as I}from"./BFSUimDm.js";import{u as q}from"./cbNq9jmL.js";import{u as H}from"./BxRLyS4t.js";import{E as O}from"./-TaKdCZx.js";import{_ as D}from"./CQDjPk9t.js";import{V as G}from"./DaR_SGqp.js";import{V as U}from"./cb4-UXG-.js";import{_ as X}from"./CwO6n2fQ.js";import{_ as j}from"./D8fw7iEP.js";const J={"aria-hidden":"true"},W={class:"sr-only"},Y=T({__name:"VSearchResultsTitle",props:{searchTerm:{},searchType:{},resultCounts:{},size:{default:"default"}},setup(g){const t=g,u=E(),{t:o}=v(),n=f(()=>t.resultCounts.reduce((s,[e,r])=>({...s,[e]:{count:r,countKey:V(r),localeCount:u(r)}}),{})),m=()=>{const s=n.value.image,e=o(`browsePage.aria.allResultsHeadingCount.image.${s.countKey}`,{localeCount:s.localeCount}),r=n.value.audio,l=o(`browsePage.aria.allResultsHeadingCount.audio.${r.countKey}`,{localeCount:r.localeCount});return o("browsePage.aria.results.all",{query:t.searchTerm,imageResults:e,audioResults:l})},d=f(()=>{switch(t.searchType){case"image":{const{count:s,countKey:e,localeCount:r}=n.value.image;return o(`browsePage.aria.results.image.${e}`,{count:s,localeCount:r,query:t.searchTerm})}case"audio":{const{count:s,countKey:e,localeCount:r}=n.value.audio;return o(`browsePage.aria.results.audio.${e}`,{count:s,localeCount:r,query:t.searchTerm})}default:case"all":return m()}});return(s,e)=>(a(),p("h1",{class:w(["sr-only break-words md:not-sr-only",[s.size==="large"?"heading-2 lg:heading-1 !leading-none lg:!leading-none":"heading-2 !leading-none"]])},[y("span",J,_(s.searchTerm),1),y("span",W,_(d.value),1)],2))}}),Q=F(Y,[["__scopeId","data-v-a8af9dad"]]),Z={class:"heading-6",tabindex:"-1"},ee=T({__name:"VExternalSearchForm",props:{searchTerm:{},isSupported:{type:Boolean,default:!1},hasNoResults:{type:Boolean,default:!0}},setup(g){const t=N(null),u=R(),o=q(),{$sendCustomEvent:n}=z(),m=L(),{currentPage:d}=I(m),s=()=>{n("VIEW_EXTERNAL_SOURCES",{searchType:u.searchType,query:u.searchTerm,resultPage:d.value||1})},{externalSourcesType:e}=H(),r=f(()=>o.isBreakpoint("md"));return(l,C)=>{const S=P("i18n-t");return a(),p("section",{key:$(e),ref_key:"sectionRef",ref:t,class:"external-sources flex flex-row place-items-center justify-center pb-6 pt-4 lg:pb-10","data-testid":"external-sources-form"},[i(X,{id:$(O),variant:"centered","hide-on-click-outside":!0,"labelled-by":"external-sources-button",class:"w-full",onOpen:s},{trigger:c(({a11yProps:k})=>[i(G,{id:"external-sources-button",ref:"triggerRef",pressed:k["aria-expanded"],"aria-haspopup":"dialog","aria-controls":"external-sources-modal",variant:"bordered-gray",size:"disabled",class:"label-bold lg:description-bold h-16 w-full gap-x-2 lg:h-18"},{default:c(()=>[r.value?(a(),h(S,{key:0,scope:"global",keypath:"externalSources.form.supportedTitle",tag:"p"})):(a(),h(S,{key:1,scope:"global",keypath:"externalSources.form.supportedTitleSm",tag:"p"})),i(U,{class:w({"text-over-dark":k["aria-expanded"]}),name:"caret-down"},null,8,["class"])]),_:2},1032,["pressed"])]),title:c(()=>[y("h2",Z,_(l.$t("externalSources.title")),1)]),default:c(()=>[i(D,{class:"flex flex-col","search-term":l.searchTerm},null,8,["search-term"])]),_:1},8,["id"])])}}}),se={key:0,class:"my-0 md:mb-8 md:mt-4"},re={key:1,class:"mb-4 mt-2 grid grid-cols-2 gap-4 md:mt-0"},te={class:"mb-6 mt-4 lg:mb-10"},Se=T({__name:"VSearchResults",props:{searchTerm:{},results:{},isFetching:{type:Boolean}},emits:["load-more"],setup(g){const t=g,{t:u}=v(),o=L(),n=R(),m=f(()=>u(`browsePage.aria.resultsLabel.${t.results.type}`,{query:t.searchTerm})),d=e=>n.getSearchPath({type:e}),s=f(()=>o.resultCountsPerMediaType);return(e,r)=>(a(),h(K,{"collection-label":m.value,results:e.results,"is-fetching":e.isFetching,"search-term":e.searchTerm,kind:"search"},{header:c(()=>[e.searchTerm?(a(),p("header",se,[i(Q,{"search-term":e.searchTerm,size:e.results.type==="all"?"large":"default","search-type":e.results.type,"result-counts":s.value},{default:c(()=>[B(_(e.searchTerm),1)]),_:1},8,["search-term","size","search-type","result-counts"])])):b("",!0),e.results.type==="all"?(a(),p("div",re,[(a(!0),p(x,null,A(s.value,([l,C])=>(a(),h(j,{key:l,"media-type":l,"search-term":e.searchTerm,"results-count":C,to:d(l)},null,8,["media-type","search-term","results-count","to"]))),128))])):b("",!0)]),footer:c(()=>[y("footer",te,[i(M,{"search-type":e.results.type,kind:"search","search-term":e.searchTerm,"is-fetching":e.isFetching,class:"mb-4",onLoadMore:r[0]||(r[0]=l=>e.$emit("load-more"))},null,8,["search-type","search-term","is-fetching"]),e.results.type!=="all"?(a(),h(ee,{key:0,"search-term":e.searchTerm,"is-supported":!0,"has-no-results":!1},null,8,["search-term"])):b("",!0)])]),_:1},8,["collection-label","results","is-fetching","search-term"]))}});export{Se as _};
