import{S as o}from"./B3aqG266.js";import{V as n}from"./X0dmSnui.js";import{h as m,d}from"./3w4k60lH.js";import"./CiFXGpc2.js";import"./BFSUimDm.js";import"./D0ww02ZN.js";import"./CP2FzhSj.js";import"./ByTiJpPE.js";import"./CVtkxrq9.js";import"./Bgm6OsrJ.js";import"./qyDmD4fY.js";import"./CFMQYC2y.js";import"./Dt-H8hG_.js";import"./Xs_VBmP5.js";import"./CmtqIMGS.js";import"./CTON8dBl.js";import"./Cpj98o6Y.js";import"./Ci7G4jyV.js";import"./B09YfxMF.js";import"./BheX1Zp4.js";import"./cb4-UXG-.js";import"./CuPsdpTl.js";import"./DlAUqK2U.js";import"./DaR_SGqp.js";import"./BOX21o1p.js";const i=d({name:"VSafetyWallWrapper",components:{VSafetyWall:n},props:{id:{type:String,required:!0},sensitivities:{type:Array,default:()=>[]}},emits:["reveal"],setup(e,{emit:r}){const l=()=>r("reveal");return()=>m(n,{id:e.id,sensitivity:e.sensitivities,onReveal:l})}}),w={title:"Components/VSafetyWall",component:i,argTypes:{sensitivities:{control:{type:"check"},options:o},onReveal:{action:"reveal"}},args:{sensitivities:[...o],id:"f9384235-b72e-4f1e-9b05-e1b116262a29"}},t={render:e=>({components:{VSafetyWallWrapper:i},setup(){const r=()=>{console.log("Revealed")};return()=>m(i,{id:e.id,sensitivity:e.sensitivities,onReveal:r})}}),name:"default"};var s,a,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VSafetyWallWrapper
    },
    setup() {
      const logReveal = () => {
        console.log("Revealed");
      };
      return () => h(VSafetyWallWrapper, {
        id: args.id,
        sensitivity: args.sensitivities,
        onReveal: logReveal
      });
    }
  }),
  name: "default"
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const z=["Default"];export{t as Default,z as __namedExportsOrder,w as default};
