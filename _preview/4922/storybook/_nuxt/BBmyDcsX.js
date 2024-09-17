import{W as g}from"./Cu7nQ9EK.js";import{_ as r}from"./D7WbKtSo.js";import{V as c}from"./CEndtym_.js";import{h as e}from"./BEWIBK-i.js";import"./uZ-0lEQS.js";import"./CGHqfD1T.js";import"./CuPsdpTl.js";import"./CFMQYC2y.js";import"./DlAUqK2U.js";import"./B7PDfjkz.js";import"./BSEdKPgk.js";import"./D5b5zX9w.js";import"./DNEZHl3_.js";import"./C_CYUtFP.js";import"./CVtkxrq9.js";import"./CsabWqlR.js";import"./BKKbHBBH.js";import"./CZxy0dxx.js";import"./BjWWdqDn.js";import"./B7E9nkhM.js";import"./Bnkvtx4f.js";import"./Ci7G4jyV.js";import"./D0ww02ZN.js";const G={title:"Components/VCheckbox",component:r,decorators:[g],args:{id:"default",name:"Code is Poetry",value:"codeIsPoetry",checked:!1,isSwitch:!1},argTypes:{onChange:{action:"change"}}},f={render:n=>({components:{VCheckbox:r},setup(){return()=>e(r,n,{default:()=>n.name})}})},t={...f,name:"Default"},s={...f,name:"Switch",args:{isSwitch:!0}},o={name:"License Checkbox",render:n=>({components:{VCheckbox:r,VLicense:c},setup(){return()=>e("fieldset",{},[e("legend",{},"License"),e(r,{...n,class:"mb-4"},[e(c,{license:"by-nc",class:"me-4"})])])}}),args:{id:"cc-by",name:"license",value:"cc-by",checked:!0}};var a,m,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template,
  name: "Default"
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,l,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template,
  name: "Switch",
  args: {
    isSwitch: true
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,h,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "License Checkbox",
  render: args => ({
    components: {
      VCheckbox,
      VLicense
    },
    setup() {
      return () => h("fieldset", {}, [h("legend", {}, "License"), h(VCheckbox, {
        ...args,
        class: "mb-4"
      }, [h(VLicense, {
        license: "by-nc",
        class: "me-4"
      })])]);
    }
  }),
  args: {
    id: "cc-by",
    name: "license",
    value: "cc-by",
    checked: true
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const H=["Default","Switch","LicenseCheckbox"];export{t as Default,o as LicenseCheckbox,s as Switch,H as __namedExportsOrder,G as default};
