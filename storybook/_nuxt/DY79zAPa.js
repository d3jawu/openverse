import{u as c}from"./CyecUNdH.js";import{i as t}from"./vQCScaZm.js";import{g as u}from"./DdMEaL1I.js";import{V as p,g as r}from"./DkaN-Hbg.js";import{u as l}from"./B3aqG266.js";import{_ as f}from"./C1pZmFeO.js";import"./BSEdKPgk.js";import"./3w4k60lH.js";import"./D0ww02ZN.js";import"./Xs_VBmP5.js";import"./CiFXGpc2.js";import"./BheX1Zp4.js";import"./CFMQYC2y.js";import"./cbNq9jmL.js";import"./ByTiJpPE.js";import"./CVtkxrq9.js";import"./BFSUimDm.js";import"./B09YfxMF.js";import"./cb4-UXG-.js";import"./CuPsdpTl.js";import"./DlAUqK2U.js";import"./DLdssb3b.js";import"./DjfkZMYu.js";import"./DQnMOLSw.js";import"./efU75a9z.js";import"./DaR_SGqp.js";import"./qyDmD4fY.js";import"./BOX21o1p.js";import"./CP2FzhSj.js";import"./Bgm6OsrJ.js";import"./Dt-H8hG_.js";import"./Dy8h9AIA.js";const e=u({originalTitle:"Test Audio",sensitivity:[],isSensitive:!1}),g={render:d=>({template:`
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
