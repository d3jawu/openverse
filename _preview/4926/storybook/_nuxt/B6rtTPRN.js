import{u as v}from"./DZjlKxoF.js";import{u as f}from"./Dru8MgPD.js";import{u as d,O as y,a as g}from"./D7p9i7S1.js";import{_ as i}from"./DQs5-Eiu.js";import{_ as h}from"./CqfDI07r.js";import{_ as $}from"./CwizJlpa.js";import{d as k,z as O,Z as _,D as w,A as C,C as t,I as o,L as r,E as p,Y as a}from"./DIRjBTfL.js";import"./DRH7DRcP.js";import"./C0a-n2GY.js";import"./BGFP1kuB.js";import"./CFMQYC2y.js";import"./yH-X360_.js";import"./CVtkxrq9.js";import"./DQej5_ef.js";import"./BhVvqNG6.js";import"../sb-preview/runtime.js";import"./Xs_VBmP5.js";import"./B2WlxZpZ.js";import"./DQZ7AVLk.js";import"./D0ww02ZN.js";import"./Dt-H8hG_.js";import"./DT9s3jb5.js";import"./D8ABh0bF.js";import"./CTON8dBl.js";import"./BaD6kt_k.js";import"./Cpj98o6Y.js";import"./Ci7G4jyV.js";import"./Bz7P8nyL.js";import"./BOX21o1p.js";import"./Co_6C_Y0.js";import"./BwYXyR0A.js";import"./BSEdKPgk.js";import"./D49-a2Gj.js";import"./n5kG8ZGm.js";import"./BQ1v-1nn.js";import"./CuPsdpTl.js";import"./DlAUqK2U.js";const me=k({name:"PrivacyPage",__name:"privacy",setup(F){const{$i18n:{t:l}}=v();f({title:`${l("privacy.title",{openverse:"Openverse"})} | Openverse`});const n=d(),c=O(()=>n.isOn("analytics")),u=({checked:e})=>{n.toggleFeature("analytics",e?y:g)};return(e,s)=>{const m=_("i18n-t");return w(),C($,null,{default:t(()=>[o("h1",null,r(e.$t("privacy.title",{openverse:"Openverse"})),1),p(m,{scope:"global",keypath:"privacy.intro.content",tag:"p"},{link:t(()=>[p(i,{href:"https://wordpress.org/about/privacy/"},{default:t(()=>[a(r(e.$t("privacy.intro.link")),1)]),_:1})]),openverse:t(()=>s[0]||(s[0]=[a("Openverse")])),_:1}),o("h2",null,r(e.$t("privacy.cookies.title")),1),o("p",null,r(e.$t("privacy.cookies.content.a",{openverse:"Openverse"}))+" "+r(e.$t("privacy.cookies.content.b",{openverse:"Openverse"})),1),o("h2",null,r(e.$t("privacy.contact.title")),1),p(m,{scope:"global",keypath:"privacy.contact.content",tag:"p"},{openverse:t(()=>s[1]||(s[1]=[a("Openverse")])),email:t(()=>[p(i,{href:"mailto:openverse@wordpress.org"},{default:t(()=>s[2]||(s[2]=[a("openverse@wordpress.org")])),_:1})]),issue:t(()=>[p(i,{href:"https://github.com/WordPress/openverse/issues/new/choose"},{default:t(()=>[a(r(e.$t("privacy.contact.issue")),1)]),_:1})]),chat:t(()=>[p(i,{href:"https://make.wordpress.org/chat/"},{default:t(()=>[a(r(e.$t("privacy.contact.chat")),1)]),_:1})]),_:1}),o("h2",null,r(e.$t("prefPage.groups.analytics.title")),1),o("p",null,r(e.$t("prefPage.groups.analytics.desc",{openverse:"Openverse"})),1),p(h,{id:"analytics",class:"flex-row items-center",checked:c.value,"is-switch":"",onChange:u},{default:t(()=>[o("div",null,r(e.$t("prefPage.features.analytics")),1)]),_:1},8,["checked"])]),_:1})}}});export{me as default};
