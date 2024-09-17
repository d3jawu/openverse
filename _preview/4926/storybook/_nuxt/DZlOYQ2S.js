import{u as m}from"./D8ABh0bF.js";import{u as c}from"./DQZ7AVLk.js";import{V as e}from"./6nZLb3tE.js";import{h as r}from"./DIRjBTfL.js";import"./DZjlKxoF.js";import"./B2WlxZpZ.js";import"./DT9s3jb5.js";import"./CFMQYC2y.js";import"./Dt-H8hG_.js";import"./CTON8dBl.js";import"./BaD6kt_k.js";import"./Cpj98o6Y.js";import"./Ci7G4jyV.js";import"./Xs_VBmP5.js";import"./D7p9i7S1.js";import"./BwYXyR0A.js";import"./CVtkxrq9.js";import"./D0ww02ZN.js";import"./DQs5-Eiu.js";import"./DQej5_ef.js";import"./BQ1v-1nn.js";import"./CuPsdpTl.js";import"./DlAUqK2U.js";import"./CramaCr3.js";import"./Bys5hUga.js";import"./Cq4psN1U.js";import"./BOX21o1p.js";import"./B2z6H_yQ.js";import"./D49-a2Gj.js";import"./BSEdKPgk.js";import"./BGFP1kuB.js";import"./B9OEfXZU.js";const s=[{source_name:"smithsonian_african_american_history_museum",display_name:"Smithsonian Institution: National Museum of African American History and Culture",source_url:"https://nmaahc.si.edu",logo_url:null,media_count:10895},{source_name:"flickr",display_name:"Flickr",source_url:"https://www.flickr.com",logo_url:null,media_count:505849755},{source_name:"met",display_name:"Metropolitan Museum of Art",source_url:"https://www.metmuseum.org",logo_url:null,media_count:396650}],l=["smithsonian_african_american_history_museum","flickr","met"],K={title:"Components/VCollectionHeader",component:e},p=[{collectionName:"tag",collectionParams:{collection:"tag",tag:"cat"},mediaType:"image"},{collectionName:"source",collectionParams:{collection:"source",source:"met"},mediaType:"image"},{collectionName:"creator",collectionParams:{collection:"creator",source:"flickr",creator:"iocyoungreporters"},mediaType:"image",creatorUrl:"https://www.flickr.com/photos/126018610@N05"},{collectionName:"source-with-long-name",collectionParams:{collection:"source",source:"smithsonian_african_american_history_museum"},mediaType:"image"}],o={render:()=>({components:{VCollectionHeader:e},setup(){return c().$patch({providers:{image:s},sourceNames:{image:l}}),m().$patch({results:{image:{count:240}}}),()=>r("div",{class:"wrapper w-full p-3 flex flex-col gap-4 bg-surface"},p.map(n=>r(e,{...n,class:"bg-default"})))}}),name:"All collections"};var t,i,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
