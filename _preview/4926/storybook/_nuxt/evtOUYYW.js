import{c as y,b as v,a as k}from"./Bnkvtx4f.js";import L from"./i1_L4g2b.js";const h=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),b=(e,t,s=null)=>{const r=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],n=Object.entries(t).map(([i,l])=>`${i}="${l}"`).join(" ");if(r.includes(e))return n?`<${e} ${n} />`:`<${e} />`;const a=n?`<${e} ${n}>`:`<${e}>`,o=`</${e}>`;return`${a}${(s??[]).join(`
`)}${o}`},j=(e,t)=>(Object.entries(t).forEach(([s,r])=>{e=e.replace(`{${s}}`,r)}),e),w=(e,t={})=>{const s=e.split(".");let r=L.mediaDetails.reuse.credit,n;return s.forEach(a=>{const o=r[a];typeof o=="string"?n=o:r=o}),n?j(n,t):""},x=e=>{const s=`https://mirrors.creativecommons.org/presskit/icons/${e.replace("-",".")}.svg`;return b("img",{src:s,style:"height: 1em; margin-right: 0.125em; display: inline;"})},$=(e,t)=>b("a",{rel:"noopener noreferrer",href:e},[t]),E=e=>`<attribution xmlns:dc="http://purl.org/dc/elements/1.1/">
	<dc:creator>${e.creator}</dc:creator>
	<dc:title>${e.title}</dc:title>
	<dc:rights>${e.license_url}</dc:rights>
	<dc:identifier>${e.foreign_landing_url}</dc:identifier>
	<dc:type>${e.type}</dc:type>
</attribution>`,N=(e,t=null,{includeIcons:s,isPlaintext:r,isXml:n}={isPlaintext:!1,includeIcons:!0,isXml:!1})=>{if(!e)return"";const a=y(e.license),o="mediaDetails.reuse.credit",i=t?(c,u)=>t.t(`${o}.${c}`,u):w;let l=e.originalTitle||i("genericTitle");r||(l=h(l)),!r&&e.foreign_landing_url&&(l=$(e.foreign_landing_url,l)),e.originalTitle&&(l=i("actualTitle",{title:l}));const T=v(e.license,e.license_version,t);let d="";if(s&&e.license){const u=k(e.license).map(p=>x(p));u.includes("")||(d=u.join(""))}let g=`${T} ${d}`.trim();!r&&e.license_url&&(g=$(`${e.license_url}?ref=openverse`,g));const f={title:l,markedLicensed:i(a?"marked":"licensed"),license:g,viewLegal:"",creator:""};if(r&&e.license_url&&(f.viewLegal=i("viewLegalText",{termsCopy:i(a?"termsText":"copyText"),url:`${e.license_url}?ref=openverse`})),e.creator){let c=e.creator;r||(c=h(c)),!r&&e.creator_url&&(c=$(e.creator_url,c)),f.creator=i("creatorText",{creatorName:c})}const _=i("text",f).replace(/\s{2}/g," ").trim();if(n){const{frontendMediaType:c,...u}=e,p={...u,type:c==="audio"?"Sound":"StillImage"};return E(p)}else return r?_:b("p",{class:"attribution"},[_])};export{N as g};
