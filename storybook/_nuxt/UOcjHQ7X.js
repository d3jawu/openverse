import{u as z}from"./CyecUNdH.js";import{A as w,N as g,d as S,Y as M,M as n,O as u,P as d,L as k,X as f,U as s,I as p,D as h,J as l,H as P,F as G,E as H,G as W}from"./3w4k60lH.js";import{u as j,d as K}from"./CiFXGpc2.js";import{o as Q}from"./yH-X360_.js";import{m as X}from"./Xs_VBmP5.js";import{V as C}from"./DaR_SGqp.js";import{V as Z}from"./CzfIIMxv.js";import{_ as N}from"./B09YfxMF.js";import{c as J}from"./DLdssb3b.js";const D="dmca",Y="sensitive",y="other",ee=[D,Y,y],$="sent",U="failed",E="wip",F="https://docs.google.com/forms/d/e/1FAIpQLSd0I8GsEbGQLdaX4K_F6V2NbHZqN137WMZgnptUpzwd-kbDKA/viewform",Ve=()=>{const m=w(E),r=c=>{m.value=c},{t:i}=z({useScope:"global"}),t=g(()=>m.value===E?i("mediaDetails.contentReport.long"):m.value===$?i("mediaDetails.contentReport.success.title"):i("mediaDetails.contentReport.failure.title"));return{status:m,updateStatus:r,title:t}},te=S({__name:"VDmcaNotice",props:{foreignLandingUrl:{},provider:{}},emits:["click"],setup(m){return(r,i)=>{const t=M("i18n-t");return n(),u(t,{scope:"global",class:"dmca-notice leading-normal",keypath:"mediaDetails.contentReport.form.dmca.note",tag:"p"},{form:d(()=>[k(N,{"aria-label":r.$t("mediaDetails.contentReport.form.dmca.form"),href:p(F),class:"text-link hover:underline",onClick:i[0]||(i[0]=c=>r.$emit("click"))},{default:d(()=>[f(s(r.$t("mediaDetails.contentReport.form.dmca.form")),1)]),_:1},8,["aria-label","href"])]),source:d(()=>[k(N,{href:r.foreignLandingUrl,class:"text-link hover:underline"},{default:d(()=>[f(s(r.provider),1)]),_:1},8,["href"])]),_:1})}}}),oe={class:"other-form min-h-[7rem]",for:"description"},ae={class:"flex flex-row items-center justify-between"},ne=["placeholder","required","minlength"],se=S({__name:"VReportDescForm",props:{content:{default:""},reason:{}},emits:["update:content"],setup(m,{emit:r}){const i=m,t=r,c=g({get:()=>i.content,set:a=>t("update:content",a)}),o=g(()=>i.reason===y);return(a,_)=>(n(),h("label",oe,[l("span",ae,[l("span",null,s(a.$t("mediaDetails.contentReport.form.other.note")),1),l("span",null,s(a.$t(`mediaDetails.contentReport.form.${a.reason}.subLabel`)),1)]),P(l("textarea",{id:"description","onUpdate:modelValue":_[0]||(_[0]=R=>c.value=R),class:"mt-2 h-20 w-full border border-default p-2 placeholder-gray-8",placeholder:a.$t(`mediaDetails.contentReport.form.${a.reason}.placeholder`),required:o.value,minlength:o.value?20:0,maxlength:"500"},null,8,ne),[[J,c.value]])]))}}),re={id:"content-report-form"},ie={key:0},le={key:1},de={class:"text-sm"},me={key:2},ce={class:"mb-4 text-sm leading-normal"},ue={class:"flex flex-col gap-y-4"},pe={class:"label-bold mb-4"},fe={class:"leading-normal"},ve={class:"flex flex-row items-center justify-end gap-x-4"},Ce=S({__name:"VContentReportForm",props:{media:{},status:{},allowCancel:{type:Boolean}},emits:["close","update-status"],setup(m,{expose:r,emit:i}){const t=m,c=i,o=w(D),a=w(""),_=()=>{o.value=D,a.value=""},R=g(()=>`${K().public.apiUrl}v1/${X(t.media.frontendMediaType)}/${t.media.id}/report/`),L=g(()=>`${F}?entry.917669540=https://openverse.org/${t.media.frontendMediaType}/${t.media.id}`),I=()=>{_(),c("close")},A=g(()=>o.value===y&&a.value.length<20),{$sendCustomEvent:q}=j(),T=()=>{V($)},x=async e=>{e.preventDefault();try{await Q(R.value,{method:"POST",body:{mediaType:t.media.frontendMediaType,reason:o.value,identifier:t.media.id,description:a.value}}),V($)}catch{V(U)}},V=e=>{e===$&&q("REPORT_MEDIA",{id:t.media.id,mediaType:t.media.frontendMediaType,provider:t.media.provider,reason:o.value}),c("update-status",e)};return r({resetForm:_}),(e,b)=>{const B=M("i18n-t");return n(),h("div",re,[e.status===p($)?(n(),h("div",ie,[k(B,{scope:"global",keypath:"mediaDetails.contentReport.success.note",class:"text-sm",tag:"p"},{source:d(()=>[k(N,{href:e.media.foreign_landing_url,class:"text-link hover:underline"},{default:d(()=>[f(s(e.media.providerName),1)]),_:1},8,["href"])]),_:1})])):e.status===p(U)?(n(),h("div",le,[l("p",de,s(e.$t("mediaDetails.contentReport.failure.note")),1)])):(n(),h("div",me,[l("p",ce,s(e.$t("mediaDetails.contentReport.form.disclaimer",{openverse:"Openverse"})),1),l("form",{class:"flex flex-col gap-y-4 text-sm",onSubmit:x},[l("fieldset",ue,[l("legend",pe,s(e.$t("mediaDetails.contentReport.form.question")),1),(n(!0),h(G,null,H(p(ee),v=>(n(),u(Z,{id:v,key:v,modelValue:o.value,"onUpdate:modelValue":b[0]||(b[0]=O=>o.value=O),name:"reason",value:v},{default:d(()=>[f(s(e.$t(`mediaDetails.contentReport.form.${v}.option`)),1)]),_:2},1032,["id","modelValue","value"]))),128))]),l("div",fe,[o.value===p(D)?(n(),u(te,{key:0,provider:e.media.providerName,"foreign-landing-url":e.media.foreign_landing_url,onClick:T},null,8,["provider","foreign-landing-url"])):(n(),u(se,{key:"other",content:a.value,"onUpdate:content":b[1]||(b[1]=v=>a.value=v),reason:o.value,"is-required":o.value===p(y)},null,8,["content","reason","is-required"]))]),l("div",ve,[e.allowCancel?(n(),u(C,{key:0,variant:"bordered-gray",size:"medium",class:"label-bold",onClick:I},{default:d(()=>[f(s(e.$t("mediaDetails.contentReport.form.cancel")),1)]),_:1})):W("",!0),o.value===p(D)?(n(),u(C,{key:"dmca",as:"VLink",variant:"filled-dark",size:"medium",class:"label-bold","has-icon-end":"","show-external-icon":"","external-icon-size":6,href:L.value,"send-external-link-click-event":!1,target:"_blank",onClick:T},{default:d(()=>[f(s(e.$t("mediaDetails.contentReport.form.dmca.open")),1)]),_:1},8,["href"])):(n(),u(C,{key:"non-dmca",type:"submit",disabled:A.value,"focusable-when-disabled":!0,variant:"filled-dark",size:"medium",class:"label-bold",value:e.$t("mediaDetails.contentReport.form.submit")},{default:d(()=>[f(s(e.$t("mediaDetails.contentReport.form.submit")),1)]),_:1},8,["disabled","value"]))])],32)]))])}}});export{E as W,Ce as _,Ve as u};
