import{u as D}from"./CiFXGpc2.js";import{f as Q,v as X}from"./Xs_VBmP5.js";import{h as Y}from"./CmtqIMGS.js";import{u as Z,s as x}from"./BvBCxLXu.js";import{u as ee}from"./Bnd0lKas.js";import{u as te}from"./VzsjUT7y.js";import{u as ae}from"./BheX1Zp4.js";import{I as A,f as ie}from"./B3aqG266.js";import{s as re}from"./BOX21o1p.js";import{u as oe}from"./B09YfxMF.js";import{u as se}from"./baCxGTTy.js";import{u as le,_ as ne,a as me,b as ue}from"./DIymjgDy.js";import{u as ce}from"./C4DeJDef.js";import{a as P}from"./CYrQIHx3.js";import{_ as pe}from"./CuDdGZSJ.js";import{u as de}from"./CyecUNdH.js";import{d as F,A as p,C as fe,M as r,D as d,J as S,I as _,N as g,ag as ge,T as he,O as h,F as V,R as ve,L as c,G as v}from"./3w4k60lH.js";import{V as _e}from"./X0dmSnui.js";import{a as we,b as be}from"./DasGqnMf.js";import{_ as ye}from"./DDFT8LL9.js";import{e as ke}from"./CTS7pSeN.js";import{_ as Ie}from"./DlAUqK2U.js";import"./BFSUimDm.js";import"./qyDmD4fY.js";import"./CFMQYC2y.js";import"./Dt-H8hG_.js";import"./CTON8dBl.js";import"./Bgm6OsrJ.js";import"./Cpj98o6Y.js";import"./Ci7G4jyV.js";import"./CP2FzhSj.js";import"./ByTiJpPE.js";import"./CVtkxrq9.js";import"./BSkdydGD.js";import"./DLdssb3b.js";import"./yH-X360_.js";import"./C4c1R0R5.js";import"../sb-preview/runtime.js";import"./Bz7P8nyL.js";import"./IGly_OW7.js";import"./BSEdKPgk.js";import"./cbNq9jmL.js";import"./D0ww02ZN.js";import"./cb4-UXG-.js";import"./CuPsdpTl.js";import"./CcRYmc8J.js";import"./HLQs0lI_.js";import"./DkaN-Hbg.js";import"./DjfkZMYu.js";import"./DQnMOLSw.js";import"./efU75a9z.js";import"./DaR_SGqp.js";import"./CkgjXT-P.js";import"./UOcjHQ7X.js";import"./CzfIIMxv.js";import"./B2eQKcp4.js";import"./-TaKdCZx.js";import"./CwO6n2fQ.js";import"./Dx6z3h0D.js";import"./BxU1W8iQ.js";import"./CaAPlkf-.js";import"./RevM6cLn.js";import"./CdYW_o73.js";import"./DWa1oPWi.js";import"./evtOUYYW.js";import"./Bnkvtx4f.js";import"./i1_L4g2b.js";import"./rw0F6EcL.js";import"./DjkfKio3.js";import"./CiVENUWy.js";import"./KAAfoazW.js";import"./BxFueWvQ.js";import"./Ua2mhSTn.js";import"./BOCIT4X8.js";import"./Cai18LUs.js";import"./BS9R2VWD.js";import"./CdBhD-3F.js";import"./CyKRdvvX.js";import"./z5Gch6mg.js";import"./C2qLXmRD.js";import"./DC-AD4tD.js";import"./BsOP2yem.js";const xe=(w="")=>new Promise((l,n)=>{typeof document>"u"&&n();const a=document.createElement("script");a.src=w,a.defer=!0,a.addEventListener("load",l),a.addEventListener("error",n),document.head.appendChild(a)}),Se={class:"block aspect-[2/1]"},Ee=["title","aria-label"],Ce="https://static.sketchfab.com/api/sketchfab-viewer-1.10.1.js",$e=F({__name:"VSketchFabViewer",props:{uid:{}},emits:["failure"],setup(w,{emit:l}){const n=w,a=l,{t:f}=de({useScope:"global"}),s=f("sketchfabIframeTitle",{sketchfab:"Sketchfab"}),i=p(),{$sentry:e}=D(),m=async()=>{if(await xe(Ce),typeof window.Sketchfab>"u"){e.captureMessage("Unable to find window.Sketchfab after loading");return}if(!i.value)return;new window.Sketchfab(i.value).init(n.uid,{error:u=>{e.captureException(u),a("failure")}})};return fe(()=>{m()}),(k,u)=>(r(),d("div",Se,[S("iframe",{id:"sketchfab-iframe",ref_key:"node",ref:i,src:"",sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",title:_(s),"aria-label":_(s),allow:"autoplay; fullscreen; vr",autoplay:!0,class:"h-full w-full"},null,8,Ee)]))}}),Le=["id"],Me={class:"relative mb-4 grid grid-cols-1 grid-rows-1 justify-items-center border-b border-default px-6"},Re=["src","alt","width","height"],Te={key:2,class:"col-span-full row-span-full w-full lg:max-w-4xl lg:px-4"},He={class:"grid grid-cols-1 grid-rows-[auto,1fr] sm:grid-cols-[1fr,auto] sm:grid-rows-1 sm:gap-x-6"},Ae=F({name:"ImageDetailPage",__name:"index",async setup(w){var R,T,H;let l,n;ce();const a=Z(),f=D(),s=ae(),i=g(()=>Q(s==null?void 0:s.params.id));(!i.value||!X(i.value))&&x({statusCode:404,message:`Invalid image id: "${i.value}" on ${s==null?void 0:s.fullPath}.`,fatal:!0});const e=p((R=a.image)!=null&&R.id&&i.value&&a.image.id===i.value?a.image:null),m=g(()=>a.fetchState.fetchingError),k=g(()=>!f.isHydrating),u=p(k.value?(T=e.value)==null?void 0:T.thumbnail:(H=e.value)==null?void 0:H.url),E=p(!f.isHydrating),C=g(()=>b.value?!1:E.value),{sendCustomEvent:B}=oe(),N=t=>{B("RIGHT_CLICK_IMAGE",{id:t})},{reveal:U,isHidden:G}=se(e.value),{pageTitle:j,detailPageMeta:O}=le(e);te(()=>({...O,title:j.value}));const $=p(!0),L=p(!1),b=g(()=>{var t;return((t=e.value)==null?void 0:t.source)!=="sketchfab"||L.value?null:e.value.url.split("https://media.sketchfab.com/models/")[1].split("/")[0]}),W=t=>{var o;t.target instanceof HTMLImageElement&&(u.value=t.target.src===((o=e.value)==null?void 0:o.url)?e.value.thumbnail:ke)},z=t=>{var o;if(!(!(t.target instanceof HTMLImageElement)||!e.value)&&(E.value=!1,$.value)){const y={width:t.target.naturalWidth,height:t.target.naturalHeight};((o=a.mediaItem)==null?void 0:o.frontendMediaType)===A&&(a.mediaItem.width=y.width,a.mediaItem.height=y.height),e.value.filetype||ie.head(e.value.url).then(K=>{const q=K.headers["content-type"];a.mediaItem&&(a.mediaItem.filetype=q)}).catch(()=>{}),u.value=e.value.url,$.value=!1}},J=async()=>{if(f.isHydrating)return e.value;const t=await a.fetch(A,i.value);if(t)return e.value=t,u.value=t.thumbnail,t;throw new Error(`Could not fetch image with id ${i.value}`)},{error:I}=([l,n]=ge(async()=>ee("single-image-result",async()=>await J(),{lazy:!0,server:!1})),l=await l,n(),l),M=t=>{["Image not found","Image ID not found"].includes(t.message)&&x({statusCode:404,message:"Image ID not found",fatal:!0}),m.value&&!Y(m.value)&&x({...m.value??{},fatal:!0})};return I.value&&M(I.value),he(I,t=>{t&&M(t)}),(t,o)=>(r(),d("main",{id:_(re),tabindex:"-1",class:"relative flex-grow"},[m.value?(r(),h(ye,{key:0,"fetching-error":m.value,class:"px-6 py-10 lg:px-10"},null,8,["fetching-error"])):e.value?(r(),d(V,{key:1},[_(G)?(r(),h(_e,ve({key:0},e.value,{onReveal:_(U)}),null,16,["onReveal"])):(r(),d(V,{key:1},[c(ne,{media:e.value},null,8,["media"]),S("figure",Me,[C.value?(r(),h(P,{key:0,class:"col-span-full row-span-full h-[500px] w-[500px] self-center"})):v("",!0),b.value?v("",!0):(r(),d("img",{key:1,id:"main-image",src:u.value,alt:e.value.title,class:"col-span-full row-span-full h-full max-h-[500px] w-full rounded-se-sm rounded-ss-sm object-contain",width:e.value.width??0,height:e.value.height??0,onLoad:z,onError:W,onContextmenu:o[0]||(o[0]=y=>N(e.value.id))},null,40,Re)),b.value?(r(),d("div",Te,[c($e,{uid:b.value,class:"rounded-se-sm rounded-ss-sm",onFailure:o[1]||(o[1]=y=>L.value=!0)},null,8,["uid"])])):v("",!0)]),S("section",He,[c(we,{media:e.value,class:"min-w-0 sm:col-start-1"},null,8,["media"]),c(be,{media:e.value,"media-type":"image",class:"row-start-1 mb-4 !w-full flex-initial sm:col-start-2 sm:mb-0 sm:mt-1 sm:!w-auto"},null,8,["media"])]),c(pe,{media:e.value},null,8,["media"]),c(me,{media:e.value},null,8,["media"]),e.value?(r(),h(ue,{key:0,"media-type":"image","related-to":e.value.id},null,8,["related-to"])):v("",!0)],64))],64)):C.value?(r(),h(P,{key:2,class:"col-span-full row-span-full mx-auto h-[500px] w-[500px]"})):v("",!0)],8,Le))}}),ma=Ie(Ae,[["__scopeId","data-v-02b61222"]]);export{ma as default};
