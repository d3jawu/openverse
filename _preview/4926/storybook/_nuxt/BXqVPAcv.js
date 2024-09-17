import{_ as t}from"./BGC2yl48.js";import{S as y,h as e}from"./DIRjBTfL.js";import"./C7ap0NCC.js";import"./BGFP1kuB.js";import"./BaD6kt_k.js";import"./DKeW2LvZ.js";import"./RevM6cLn.js";import"./D8ABh0bF.js";import"./DZjlKxoF.js";import"./B2WlxZpZ.js";import"./DT9s3jb5.js";import"./CFMQYC2y.js";import"./Dt-H8hG_.js";import"./CTON8dBl.js";import"./DQZ7AVLk.js";import"./D0ww02ZN.js";import"./D7p9i7S1.js";import"./BwYXyR0A.js";import"./CVtkxrq9.js";import"./Xs_VBmP5.js";import"./Cpj98o6Y.js";import"./Ci7G4jyV.js";import"./DC-AD4tD.js";import"./CcZT6l24.js";import"./DlAUqK2U.js";import"./DXFirxxP.js";import"./BNp_2Fah.js";import"./BQ1v-1nn.js";import"./CuPsdpTl.js";import"./Cq4psN1U.js";import"./BOX21o1p.js";import"./DQs5-Eiu.js";import"./DQej5_ef.js";import"./DmjChvEw.js";import"./B9OEfXZU.js";const re={title:"Components/VHeader/Search bar",component:t,argTypes:{onSubmit:{action:"submit"}}},x={render:n=>({components:{VSearchBar:t},setup(){return()=>e(t,{...n},{default:()=>e("span",{class:"info-8 text-xs font-semibold text-secondary mx-4 whitespace-nowrap group-hover:text-default group-focus:text-default"},"12,345 results")})}})},r={...x,name:"Default",args:{value:"Search query"}},o={render:n=>({components:{VSearchBar:t},setup(){const s=y("Hello, World!"),g=v=>{const S=v.target;s.value=S.value};return()=>e("div",[e(t,{...n},{default:()=>e("span",{class:"info-8 text-xs font-semibold text-secondary mx-4 whitespace-nowrap group-hover:text-default group-focus:text-default",onChange:g},`${s.value.length} chars`)}),s.value])}}),name:"v-model"},a={...x,name:"With placeholder",args:{placeholder:"Search query"}};var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template,
  name: "Default",
  args: {
    value: "Search query"
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,i,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VSearchBar
    },
    setup() {
      const text = ref("Hello, World!");
      const updateText = (event: Event) => {
        const target = (event.target as HTMLInputElement);
        text.value = target.value;
      };
      return () => h("div", [h(VSearchBar, {
        ...args
      }, {
        default: () => h("span", {
          class: "info-8 text-xs font-semibold text-secondary mx-4 whitespace-nowrap group-hover:text-default group-focus:text-default",
          onChange: updateText
        }, \`\${text.value.length} chars\`)
      }), text.value]);
    }
  }),
  name: "v-model"
}`,...(u=(i=o.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,h,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template,
  name: "With placeholder",
  args: {
    placeholder: "Search query"
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const oe=["Default","VModel","WithPlaceholder"];export{r as Default,o as VModel,a as WithPlaceholder,oe as __namedExportsOrder,re as default};
