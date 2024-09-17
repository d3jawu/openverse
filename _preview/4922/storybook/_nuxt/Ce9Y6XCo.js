import{u as c}from"./B7PDfjkz.js";import{i as t}from"./vQCScaZm.js";import{g as u}from"./DdMEaL1I.js";import{V as p,g as r}from"./BpUZq8XW.js";import{u as l}from"./CfGX2xLT.js";import{_ as f}from"./D5ti56Yi.js";import"./BSEdKPgk.js";import"./BEWIBK-i.js";import"./D0ww02ZN.js";import"./Xs_VBmP5.js";import"./BjWWdqDn.js";import"./Cce76sJ4.js";import"./CFMQYC2y.js";import"./DNEZHl3_.js";import"./C_CYUtFP.js";import"./CVtkxrq9.js";import"./CsabWqlR.js";import"./cCqouU6D.js";import"./CGHqfD1T.js";import"./CuPsdpTl.js";import"./DlAUqK2U.js";import"./uZ-0lEQS.js";import"./Bs59icKj.js";import"./DQnMOLSw.js";import"./JMuDRQlf.js";import"./Dojbbv8i.js";import"./B7E9nkhM.js";import"./BOX21o1p.js";import"./CZxy0dxx.js";import"./BKKbHBBH.js";import"./Dt-H8hG_.js";import"./BvNLlYDq.js";const e=u({originalTitle:"Test Audio",sensitivity:[],isSensitive:!1}),g={render:d=>({template:`
    <div class="flex flex-col gap-y-2">
      <VLanguageSelect />
      <section class="wrapper flex flex-col p-2 gap-y-2 bg-surface">
        <VMetadata
        v-for="datum in data"
        :key="datum.media.id"
        :metadata="datum.metadata"
        :media="datum.media"
        v-bind="datum"
        class="bg-default"/>
      </section>
    </div>
  `,components:{VMetadata:p,VLanguageSelect:f},setup(){l().$patch({providers:{audio:[{source_name:e.source}],image:[{source_name:t.source}]},sourceNames:{audio:[e.source],image:[t.source]}});const o=c({useScope:"global"}),n=[{metadata:r(t,o,{width:t.width,height:t.height,type:t.filetype}),media:t},{metadata:r(e,o),media:e}];return{args:d,data:n}}})},U={title:"Components/VMediaInfo/VMetadata",component:p},a={...g,name:"VMetadata"};var i,m,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template,
  name: "VMetadata"
}`,...(s=(m=a.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const W=["Default"];export{a as Default,W as __namedExportsOrder,U as default};
