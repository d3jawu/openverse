import{u as c,A as p,V as m}from"./cbNq9jmL.js";import{g as d,w as g}from"./Bgm6OsrJ.js";import{A as l,C as i,h as n,ac as f,T as v}from"./3w4k60lH.js";import{u as b}from"./CyecUNdH.js";import"./ByTiJpPE.js";import"./CVtkxrq9.js";import"./BFSUimDm.js";import"./BSEdKPgk.js";const u=e=>(Object.entries(p).find(([,t])=>e>=t)??["xs",0])[0];function w(){const e=c(),{width:a}=d(),t=()=>{e.updateBreakpoint(u(a.value))};return g(a,r=>{const o=u(r);e.updateBreakpoint(o)},{debounce:100}),{updateBreakpoint:t}}const S=e=>({components:{story:e},setup(){const a=l(),{updateBreakpoint:t}=w();return i(()=>{t()}),()=>n("div",{ref:a},[n(e())])}}),{useEffect:T}=__STORYBOOK_MODULE_PREVIEW_API__,s=f({value:"ltr"}),h=(e,a)=>(T(()=>{s.value=a.globals.languageDirection},[a.globals.languageDirection]),{components:{story:e},setup(){const t=l(),r=b({useScope:"global"});return i(()=>{v(s,async o=>{await r.setLocale(o.value==="rtl"?"ar":"en"),t.value&&t.value.ownerDocument.documentElement.setAttribute("dir",(o==null?void 0:o.value)??"ltr")},{immediate:!0})}),()=>n("div",{ref:t},[n(e())])}}),O={decorators:[h,S],globalTypes:{languageDirection:{name:"RTL",description:"Simulate an RTL language.",table:{defaultValue:{summary:"ltr"}},toolbar:{icon:"globe",items:[{value:"ltr",title:"LTR"},{value:"rtl",title:"RTL"}]}}},parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#0d0d0d"}]},viewport:{viewports:{...m}},actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}};export{O as default};
