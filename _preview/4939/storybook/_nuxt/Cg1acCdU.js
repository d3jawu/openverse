import{u as L}from"./B09YfxMF.js";import{u as N,a as T}from"./CmtqIMGS.js";import{u as B}from"./B3aqG266.js";import{u as E}from"./rzpoyOek.js";import{V as f}from"./cb4-UXG-.js";import{V as h}from"./DaR_SGqp.js";import{V as z}from"./z5Gch6mg.js";import{d as R,N as t,D as U,J as a,L as i,U as s,O as v,P as m,G as g,K as x,M as u,X as $}from"./3w4k60lH.js";import{_ as A}from"./DlAUqK2U.js";const K={class:"title flex flex-col gap-2 sm:flex-row"},O={class:"label-regular flex text-secondary sm:hidden"},D={class:"text-3xl font-semibold leading-snug sm:text-6xl"},H={class:"results mt-6 flex w-full min-w-0 flex-col items-start gap-1 sm:mt-0 sm:flex-row sm:items-center"},M={class:"w-max whitespace-nowrap"},F=R({__name:"VCollectionHeader",props:{mediaType:{},collectionParams:{},creatorUrl:{}},setup(_){const P={tag:"tag",source:"institution",creator:"person"},e=_,c=N(),d=B(),k=T(),w=t(()=>P[e.collectionParams.collection]),l=t(()=>e.collectionParams.collection),r=t(()=>e.collectionParams.collection==="tag"?{name:"",link:""}:{name:d.getProviderName(e.collectionParams.source,e.mediaType),link:d.getSourceUrl(e.collectionParams.source,e.mediaType)}),C=t(()=>e.collectionParams.collection==="tag"?e.collectionParams.tag:e.collectionParams.collection==="creator"?e.collectionParams.creator:r.value.name),n=t(()=>{if(e.collectionParams.collection!=="tag")return e.collectionParams.collection==="creator"?e.creatorUrl:r.value.link}),V=t(()=>e.collectionParams.collection!=="creator"?"":k.getCollectionPath({type:e.mediaType,collectionParams:{collection:"source",source:e.collectionParams.source}})),p=t(()=>!!(e.collectionParams.collection!=="tag"&&n.value)),{getI18nCollectionResultCountLabel:y}=E(),S=t(()=>{if(c.resultCount===0&&c.fetchState.isFetching)return"";const o=c.results[e.mediaType].count;return y(o,e.mediaType,e.collectionParams.collection)}),{sendCustomEvent:b}=L(),I=()=>{if(e.collectionParams.collection==="tag")return;const o=e.collectionParams.collection==="creator"?"VISIT_CREATOR_LINK":"VISIT_SOURCE_LINK";b(o,{url:n.value,source:e.collectionParams.source})};return(o,G)=>(u(),U("div",{class:x(["collection-header grid gap-2 sm:grid-cols-[1fr,auto]",{"no-link":!p.value}])},[a("h1",K,[i(f,{name:w.value,title:l.value,size:10,class:"icon hidden sm:flex"},null,8,["name","title"]),a("span",O,s(o.$t(`collection.heading.${l.value}`)),1),a("span",D,s(C.value),1)]),p.value?(u(),v(h,{key:0,as:"VLink",variant:"filled-dark",size:"medium",class:"link label-bold mt-1 !w-full","has-icon-end":"","show-external-icon":"","external-icon-size":6,href:n.value,onClick:I},{default:m(()=>[$(s(o.$t(`collection.link.${l.value}`)),1)]),_:1},8,["href"])):g("",!0),a("div",H,[a("p",{class:x(["label-regular w-max text-secondary sm:whitespace-nowrap",{"pb-2 sm:pb-0":l.value!=="creator"}])},s(S.value),3),l.value==="creator"?(u(),v(z,{key:0,class:"-ms-2 -mt-1.5px h-8 w-[calc(100%+theme(space.4))] sm:ms-0"},{default:m(()=>[i(h,{as:"VLink",size:"disabled",variant:"transparent-gray",class:"label-bold m-1.5px h-8 w-max gap-x-1 whitespace-nowrap p-1",href:V.value,"has-icon-start":""},{default:m(()=>[i(f,{name:"institution",title:o.$t("collection.link.source")},null,8,["title"]),a("span",M,s(r.value.name),1)]),_:1},8,["href"])]),_:1})):g("",!0)])],2))}}),te=A(F,[["__scopeId","data-v-278662e0"]]);export{te as V};
