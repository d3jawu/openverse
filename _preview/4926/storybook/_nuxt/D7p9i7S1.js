import{t as v}from"./DZjlKxoF.js";import{u as h}from"./BwYXyR0A.js";import{d as F,p as O,a as _}from"./B2WlxZpZ.js";import{d as C}from"./BaD6kt_k.js";import{w as c,D as o}from"./DT9s3jb5.js";const A={fake_sensitive:{status:{staging:"switchable",production:"disabled"},description:"Mark 50% of results as sensitive to test content safety.",defaultState:"off",storage:"cookie"},additional_search_types:{status:{staging:"switchable",production:"disabled"},description:"Toggle additional search types in the content switcher.",defaultState:"off",storage:"cookie"},analytics:{status:"switchable",defaultState:"on",description:"Record custom events and page views.",storage:"cookie"},fetch_sensitive:{status:"switchable",defaultState:"off",description:"Show results marked as sensitive in the results area.",supportsQuery:!1,storage:"session"},dark_mode_ui_toggle:{status:{staging:"switchable",production:"disabled"},defaultState:"on",description:"Display the UI toggle to change the site color theme and respect system preferences.",storage:"cookie"}},I=[{title:"analytics",features:["analytics"]}],d={features:A,groups:I},y="enabled",u="disabled",i="switchable",S=[y,u,i],f="on",l="off",w="session",b="cookie",n=t=>Object.keys(d.features).includes(t),E=(t,e)=>{if(typeof t.status=="string")return S.includes(t.status)?t.status:(c(`Invalid ${t.description} flag status: ${t.status}`),u);{const s=o.indexOf(e);for(let r=s;r<o.length;r+=1)if(o[r]in t.status)return S.includes(t.status[o[r]])?t.status[o[r]]:(c(`Invalid ${t.description} flag status: ${t.status[o[r]]}`),u)}return u},T=(t,e)=>{const s=E(t,e);return s===i?"preferredState"in t?t.preferredState??t.defaultState??l:t.defaultState??l:s===y?f:l},$=t=>({flags:Object.entries(d.features).reduce((s,[r,a])=>(s[r]={...a,name:r,state:T(a,t),status:E(a,t),preferredState:void 0},s),{}),groups:d.groups}),N="feature_flag",M=F(N,{state:()=>{const t=v();if(t)return $(t.$config.public.deploymentEnv);throw new Error("Could not set up feature flag store because Nuxt content isn't available.")},getters:{featureState:t=>e=>n(e)?t.flags[e].state:(c(`Invalid feature flag accessed: ${e}`),f),flagStateMap:t=>e=>{const s={};return Object.entries(t.flags).forEach(([r,a])=>{a.status===i&&a.preferredState!==void 0&&a.storage===e&&(s[r]=a.state)}),s}},actions:{getFlagsBySwitchable(t){return Object.entries(this.flags).filter(e=>e[1].status===i===t).map(e=>e[1])},getFeatureGroups(){const t=[];for(const{title:e,features:s}of this.groups)s.length!==0&&t.push({title:e,features:s.map(r=>this.flags[r])});return t},initFromCookies(t){Object.entries(t).forEach(([e,s])=>{const r=this.flags[e];r&&r.status===i&&this.setPreferredState(e,s)})},writeToCookie(){const t=h("features",O);t.value=this.flagStateMap(b)},writeToSession(){const t=h("sessionFeatures",_);t.value=this.flagStateMap(w)},initFromQuery(t){const e=a=>a.startsWith("ff_")&&a.replace("ff_","")in this.flags,s=a=>typeof a=="string"&&["on","off"].includes(a),r=a=>e(a[0])&&s(a[1]);Object.entries(t).filter(r).forEach(([a,k])=>{const g=a.substring(3),p=this.flags[g];p.status===i&&p.supportsQuery!==!1&&this.setPreferredState(g,k)})},setPreferredState(t,e){const s=this.flags[t];s.status===i&&(s.preferredState=e,s.state=e)},updateStorage(t){const e=this.flags[t];e.storage===b?this.writeToCookie():e.storage===w&&this.writeToSession(),t==="analytics"&&this.syncAnalyticsWithLocalStorage()},toggleFeature(t,e){if(!n(t))throw new Error(`Toggling invalid feature flag: ${t}`);this.flags[t].status===i?(this.setPreferredState(t,e),this.updateStorage(t)):c(`Cannot set preferred state for non-switchable flag: ${t}`)},syncAnalyticsWithLocalStorage(){const t=C("plausible_ignore",null);t.value=this.flags.analytics.state===f?null:!0},isSwitchable(t){if(!n(t))throw new Error(`Invalid feature flag accessed: ${t}`);return this.flags[t].status===i},isOn(t){if(!n(t))throw new Error(`Invalid feature flag accessed: ${t}`);return this.flags[t].state===f}}});export{f as O,i as S,l as a,d as f,M as u};
