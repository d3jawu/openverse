import{u as c}from"./D49-a2Gj.js";import{i as t}from"./vQCScaZm.js";import{g as u}from"./DdMEaL1I.js";import{V as p,g as r}from"./CBV_TNzK.js";import{u as l}from"./DQZ7AVLk.js";import{_ as f}from"./CodyZhPf.js";import"./BSEdKPgk.js";import"./DIRjBTfL.js";import"./D0ww02ZN.js";import"./Xs_VBmP5.js";import"./DZjlKxoF.js";import"./DQej5_ef.js";import"./CFMQYC2y.js";import"./n5kG8ZGm.js";import"./BwYXyR0A.js";import"./CVtkxrq9.js";import"./B2WlxZpZ.js";import"./DQs5-Eiu.js";import"./BQ1v-1nn.js";import"./CuPsdpTl.js";import"./DlAUqK2U.js";import"./BGFP1kuB.js";import"./BCZrajsX.js";import"./DQnMOLSw.js";import"./B9OEfXZU.js";import"./Cq4psN1U.js";import"./DT9s3jb5.js";import"./BOX21o1p.js";import"./D7p9i7S1.js";import"./BaD6kt_k.js";import"./Dt-H8hG_.js";import"./91lceNO6.js";const e=u({originalTitle:"Test Audio",sensitivity:[],isSensitive:!1}),g={render:d=>({template:`
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
