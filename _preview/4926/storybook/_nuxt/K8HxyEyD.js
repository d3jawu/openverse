import{a as w,m as F,f as V}from"./D8ABh0bF.js";import{I as s}from"./DQZ7AVLk.js";import{_ as i}from"./CVpMdkN0.js";import{h as a}from"./DIRjBTfL.js";import"./DZjlKxoF.js";import"./B2WlxZpZ.js";import"./DT9s3jb5.js";import"./CFMQYC2y.js";import"./Dt-H8hG_.js";import"./CTON8dBl.js";import"./BaD6kt_k.js";import"./Cpj98o6Y.js";import"./Ci7G4jyV.js";import"./Xs_VBmP5.js";import"./D7p9i7S1.js";import"./BwYXyR0A.js";import"./CVtkxrq9.js";import"./D0ww02ZN.js";import"./D49-a2Gj.js";import"./BSEdKPgk.js";import"./Cq4psN1U.js";import"./BOX21o1p.js";import"./DQs5-Eiu.js";import"./DQej5_ef.js";import"./BQ1v-1nn.js";import"./CuPsdpTl.js";import"./DlAUqK2U.js";import"./DMKwOO6r.js";const Z={title:"Components/VHeader/VFilterButton",component:i,argTypes:{pressed:{type:"boolean"},appliedFilters:{type:"number"},disabled:{type:"boolean"},onToggle:{action:"toggle"}}},g=p=>({components:{VFilterButton:i},setup(){const o=w();o.setSearchType(s);function y(T){o.clearFilters();const h=[...F[s]];let e=0,m=1;for(let n=0;n<T;n++){let l=h[m];o.toggleFilter({filterType:l,codeIdx:e}),e+=1,V[l].length===e&&(m+=1,e=0)}}return y(p.appliedFilters),()=>a("div",{class:"flex"},[a("div",{id:"wrapper",class:"px-4 h-16 bg-surface flex align-center justify-center"},[a(i,p)])])}}),t={render:g.bind({}),name:"Default",parameters:{viewport:{defaultViewport:"lg"}}},r={render:g.bind({}),name:"With text label",parameters:{viewport:{defaultViewport:"xl"}}};var d,c,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: "Default",
  parameters: {
    viewport: {
      defaultViewport: "lg"
    }
  }
}`,...(f=(c=t.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var u,x,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: "With text label",
  parameters: {
    viewport: {
      defaultViewport: "xl"
    }
  }
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const $=["Default","WithTextLabel"];export{t as Default,r as WithTextLabel,$ as __namedExportsOrder,Z as default};
