import{n as H}from"./Cce76sJ4.js";import{u as P}from"./BCtc7JZ3.js";import{A as I,i as L,e as G}from"./CfGX2xLT.js";import{_ as O,u as z}from"./cCqouU6D.js";import{u as U,a as j}from"./qPRnTkF6.js";import{u as A}from"./DNEZHl3_.js";import{u as q}from"./CZxy0dxx.js";import{d as y,M as n,O as g,P as f,J as p,U as _,Q as R,X as M,A as b,D as w,K as X,L as h,N as u,Y as J,R as K,I as m,F as Q,G as N,C as Y}from"./BEWIBK-i.js";import{_ as W}from"./B6zzXhvo.js";import{s as Z}from"./BOX21o1p.js";import{u as ee}from"./YWq8oIcR.js";import{H as B}from"./-TaKdCZx.js";import{_ as te}from"./CcV5aQWj.js";import{_ as oe}from"./DSX21sRZ.js";import{_ as re}from"./DNOVApB2.js";import{_ as se}from"./Cahp0-ZF.js";import{a as ae}from"./uZ-0lEQS.js";import{_ as ie}from"./BON4XKnO.js";import"./CFMQYC2y.js";import"./BjWWdqDn.js";import"./Ch9VEDXz.js";import"./rkqTkggK.js";import"./yH-X360_.js";import"./CVtkxrq9.js";import"./B4MmBHep.js";import"../sb-preview/runtime.js";import"./Xs_VBmP5.js";import"./CsabWqlR.js";import"./Bz7P8nyL.js";import"./CEVR7UHH.js";import"./C_CYUtFP.js";import"./BSEdKPgk.js";import"./B7PDfjkz.js";import"./CTON8dBl.js";import"./B7E9nkhM.js";import"./Cpj98o6Y.js";import"./D0ww02ZN.js";import"./Dt-H8hG_.js";import"./CGHqfD1T.js";import"./CuPsdpTl.js";import"./DlAUqK2U.js";import"./BKKbHBBH.js";import"./Ci7G4jyV.js";import"./DkuuNFzK.js";import"./MgnBFGdI.js";import"./BV1ASMkH.js";import"./DQnMOLSw.js";import"./zSZ5H-MP.js";import"./Dojbbv8i.js";import"./DWgzyaNZ.js";import"./Bmw6Lnbo.js";import"./D_HmmmZE.js";import"./RevM6cLn.js";import"./DtYwoVia.js";import"./JMuDRQlf.js";import"./eaiu3iRY.js";import"./Bnkvtx4f.js";import"./D7WbKtSo.js";import"./CEndtym_.js";import"./D5b5zX9w.js";import"./rhzmL4Nn.js";import"./BNuSC4uM.js";import"./dww0iwiH.js";import"./DhnKm2iB.js";import"./DV6kYPw_.js";import"./Bs59icKj.js";import"./fl49u9nx.js";import"./DHle_phB.js";import"./BCLrdwsS.js";import"./CWdWlqwF.js";const ne={class:"flex h-6 items-center rounded-full bg-primary px-2 text-xs font-semibold uppercase text-over-negative"},le={class:"label-regular flex-grow text-default"},pe={class:"label-bold text-default group-hover:underline group-focus:underline"},ce=y({__name:"VFeatureNotice",props:{seeMoreHref:{}},emits:["click"],setup(x,{emit:a}){const l=a,i=e=>{l("click",e)};return(e,c)=>(n(),g(O,{href:e.seeMoreHref,class:"group flex h-10 w-full flex-row items-center gap-2 rounded-full border border-secondary pe-4 ps-2 hover:no-underline sm:w-[23.125rem]",onClick:i},{default:f(()=>[p("div",ne,_(e.$t("notification.new")),1),p("div",le,[R(e.$slots,"default")]),p("span",pe,_(e.$t("notification.more")),1)]),_:3},8,["href"]))}}),me=y({__name:"VDarkModeFeatureNotice",setup(x){const a=A(),l=()=>{a.setIsDarkModeSeen(!0)};return(i,e)=>(n(),g(ce,{"see-more-href":"https://make.wordpress.org/openverse/",onClick:l},{default:f(()=>[M(_(i.$t("notification.darkMode.text")),1)]),_:1}))}}),ue=["placeholder","aria-label"],de=y({__name:"VStandaloneSearchBar",props:{route:{default:"home"},hasPopover:{type:Boolean,default:!1}},emits:["submit"],setup(x,{expose:a,emit:l}){const i=l,e=b(null),c=()=>{var o;const t=(o=e.value)==null?void 0:o.value.trim();t&&i("submit",t)};return a({focusInput:()=>{var t;(t=e.value)==null||t.focus()}}),(t,o)=>(n(),w("form",{action:"/search",role:"search",class:"search-bar group flex h-14 flex-row items-center rounded-sm border-tx bg-default sm:h-16",onSubmit:ae(c,["prevent"])},[p("div",{class:X(["input-field search-field group flex h-full flex-grow items-center overflow-hidden rounded-sm rounded-e-none border border-e-0 p-0.5px pe-2 focus-within:border-1.5 focus-within:border-e-0 focus-within:p-0 focus-within:pe-2",[t.route==="home"?"border-tx":"border-black",t.hasPopover?"focus-within:border-tx":"focus-within:border-focus"]])},[p("input",{id:"search-bar",ref_key:"inputRef",ref:e,type:"search",name:"q",placeholder:t.$t("hero.search.placeholder"),class:"paragraph-large md:label-regular ms-4 h-full w-full appearance-none rounded-none bg-tx leading-none text-default placeholder-gray-8 focus-visible:outline-none","aria-label":t.$t("search.searchBarLabel",{openverse:"Openverse"})},null,8,ue),R(t.$slots,"default")],2),h(ie,{route:t.route},null,8,["route"])],32))}}),fe=["id"],he={class:"mb-2 mt-auto text-[40px] font-light leading-tight lg:text-[63px]"},_e={class:"text-base leading-relaxed"},ge=y({__name:"VHomepageContent",props:{handleSearch:{type:Function},searchType:{},setSearchType:{type:Function}},emits:["keydown","blur","focus","open","close"],setup(x,{emit:a}){const l=x,i=a,e=b(null),c=b(null),S=u(()=>{var r;return((r=c.value)==null?void 0:r.$el)??null}),t=A(),o=b(!1),$=u(()=>t.isBreakpoint("sm")),k=u(()=>t.isBreakpoint("lg")),v=u(()=>{var r;return((r=e.value)==null?void 0:r.$el)||null}),s=u(()=>!k.value),T=r=>{var d;l.setSearchType(r),(d=c.value)==null||d.focusInput(),C()},{close:C,open:D,onTriggerClick:E,triggerA11yProps:F}=ee({id:B,visibleRef:o,nodeRef:S,lockBodyScroll:s,emit:i});return(r,d)=>{const V=J("i18n-t");return n(),w("div",{id:m(Z),tabindex:"-1"},[p("h1",he,_(r.$t("hero.subtitle")),1),d[1]||(d[1]=p("p",{class:"sr-only"},"Testing Nuxt 3",-1)),p("p",_e,_(r.$t("hero.description")),1),h(de,{ref_key:"searchBarRef",ref:c,class:"mt-4 md:mt-6","has-popover":!!v.value&&o.value,onSubmit:r.handleSearch},{default:f(()=>[h(re,K({id:"search-type-button",ref_key:"searchTypeButtonRef",ref:e,class:"ms-2 flex-none","search-type":r.searchType},m(F),{"show-label":$.value,"aria-controls":"content-switcher-popover",onClick:m(E)}),null,16,["search-type","show-label","onClick"]),v.value?(n(),w(Q,{key:0},[k.value?(n(),g(oe,{key:0,id:m(B),"z-index":"popover",hide:m(C),"trap-focus":!1,visible:o.value,"trigger-element":v.value,"aria-labelledby":"search-type-button"},{default:f(()=>[h(se,{size:"small","use-links":!1,onSelect:T})]),_:1},8,["id","hide","visible","trigger-element"])):(n(),g(te,{key:1,id:m(B),"aria-labelledby":"search-type-button",close:m(C),visible:o.value,"use-links":!1,"show-filters":!1,variant:"fit-content",onOpen:m(D),onSelect:T},null,8,["id","close","visible","onOpen"]))],64)):N("",!0)]),_:1},8,["has-popover","onSubmit"]),h(V,{scope:"global",keypath:"hero.disclaimer.content",tag:"p",class:"mt-4 text-sr"},{openverse:f(()=>d[0]||(d[0]=[M("Openverse")])),license:f(()=>[h(O,{href:"https://creativecommons.org/licenses/",class:"text-default underline hover:text-default"},{default:f(()=>[M(_(r.$t("hero.disclaimer.license")),1)]),_:1})]),_:1})],8,fe)}}}),xe={class:"index flex w-full flex-shrink-0 flex-grow flex-col justify-center gap-6 px-6 sm:px-0 xl:flex-row xl:items-center xl:gap-0"},ve={class:"flex flex-grow flex-col items-center justify-center gap-6 xl:h-[33rem] xl:flex-grow-0 xl:items-start"},Et=y({name:"HomePage",__name:"index",setup(x){const a=q(),l=U(),i=j(),e=A(),{sendCustomEvent:c}=z();P({meta:[{hid:"theme-color",name:"theme-color",content:"#ffe033"}]}),Y(()=>{i.$reset(),l.$reset()});const S=u(()=>e.isBreakpoint("xl")),t=u(()=>e.isDarkModeSeen),o=b(I),$=s=>{(s===I||L(s)||a.isOn("additional_search_types")&&G(s))&&(o.value=s)},k=u(()=>a.isOn("dark_mode_ui_toggle")),v=s=>(c("SUBMIT_SEARCH",{searchType:o.value,query:s}),H(i.updateSearchPath({type:o.value,searchTerm:s})));return(s,T)=>(n(),w("main",xe,[p("div",ve,[k.value&&!t.value?(n(),g(me,{key:0,class:"sm:mx-14 md:mx-20 lg:mx-26 xl:me-0"})):N("",!0),h(ge,{class:"my-auto sm:px-14 md:px-20 lg:px-26 xl:w-[53.375rem] xl:pe-0","handle-search":v,"search-type":o.value,"set-search-type":$},null,8,["search-type"])]),S.value?(n(),g(W,{key:0,class:"mx-10 me-12 flex h-full flex-grow"})):N("",!0)]))}});export{Et as default};
