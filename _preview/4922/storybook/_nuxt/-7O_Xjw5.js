import{u as m}from"./qPRnTkF6.js";import{u as c}from"./CfGX2xLT.js";import{V as e}from"./B_yxDtTs.js";import{h as r}from"./BEWIBK-i.js";import"./BjWWdqDn.js";import"./CsabWqlR.js";import"./B7E9nkhM.js";import"./CFMQYC2y.js";import"./Dt-H8hG_.js";import"./CTON8dBl.js";import"./BKKbHBBH.js";import"./Cpj98o6Y.js";import"./Ci7G4jyV.js";import"./Xs_VBmP5.js";import"./CZxy0dxx.js";import"./C_CYUtFP.js";import"./CVtkxrq9.js";import"./D0ww02ZN.js";import"./cCqouU6D.js";import"./Cce76sJ4.js";import"./CGHqfD1T.js";import"./CuPsdpTl.js";import"./DlAUqK2U.js";import"./3NSqGncJ.js";import"./ouGEfpOH.js";import"./Dojbbv8i.js";import"./BOX21o1p.js";import"./5bIoLrNy.js";import"./B7PDfjkz.js";import"./BSEdKPgk.js";import"./uZ-0lEQS.js";import"./JMuDRQlf.js";const s=[{source_name:"smithsonian_african_american_history_museum",display_name:"Smithsonian Institution: National Museum of African American History and Culture",source_url:"https://nmaahc.si.edu",logo_url:null,media_count:10895},{source_name:"flickr",display_name:"Flickr",source_url:"https://www.flickr.com",logo_url:null,media_count:505849755},{source_name:"met",display_name:"Metropolitan Museum of Art",source_url:"https://www.metmuseum.org",logo_url:null,media_count:396650}],l=["smithsonian_african_american_history_museum","flickr","met"],K={title:"Components/VCollectionHeader",component:e},p=[{collectionName:"tag",collectionParams:{collection:"tag",tag:"cat"},mediaType:"image"},{collectionName:"source",collectionParams:{collection:"source",source:"met"},mediaType:"image"},{collectionName:"creator",collectionParams:{collection:"creator",source:"flickr",creator:"iocyoungreporters"},mediaType:"image",creatorUrl:"https://www.flickr.com/photos/126018610@N05"},{collectionName:"source-with-long-name",collectionParams:{collection:"source",source:"smithsonian_african_american_history_museum"},mediaType:"image"}],o={render:()=>({components:{VCollectionHeader:e},setup(){return c().$patch({providers:{image:s},sourceNames:{image:l}}),m().$patch({results:{image:{count:240}}}),()=>r("div",{class:"wrapper w-full p-3 flex flex-col gap-4 bg-surface"},p.map(n=>r(e,{...n,class:"bg-default"})))}}),name:"All collections"};var t,i,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    components: {
      VCollectionHeader
    },
    setup() {
      const providerStore = useProviderStore();
      providerStore.$patch({
        providers: {
          image: imageProviders
        },
        sourceNames: {
          image: imageProviderNames
        }
      });
      const mediaStore = useMediaStore();
      mediaStore.$patch({
        results: {
          image: {
            count: 240
          }
        }
      });
      return () => h("div", {
        class: "wrapper w-full p-3 flex flex-col gap-4 bg-surface"
      }, collections.map(collection => h(VCollectionHeader, {
        ...(collection as typeof VCollectionHeader.props),
        class: "bg-default"
      })));
    }
  }),
  name: "All collections"
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const L=["AllCollections"];export{o as AllCollections,L as __namedExportsOrder,K as default};
