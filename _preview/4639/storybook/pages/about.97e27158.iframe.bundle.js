(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/components/VContentPage.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.16/node_modules/vue/dist/vue.js"),constants_window=__webpack_require__("./src/constants/window.ts"),components_VContentPagevue_type_script_lang_ts=Object(vue.defineComponent)({name:"VContentPage",setup:function setup(){return{skipToContentTargetId:constants_window.b}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.3.4_babel-core@7.0.0-bridge.0_@babel+core@7.24.4__css-_kpa2jm6q5lntp7j2v7yhhjk7he/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VContentPagevue_type_script_lang_ts,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("main",{staticClass:"flex-grow pt-5 md:pt-10",attrs:{id:this.skipToContentTargetId,tabindex:"-1",dir:"ltr"}},[_c("div",{staticClass:"prose-h1:text-bold prose prose-sm mx-auto mb-10 max-w-none px-6 md:prose-base prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-2xl prose-h3:font-semibold md:max-w-4xl md:prose-h1:mb-10 md:prose-h2:mt-10 md:prose-h3:mt-10 lg:mb-30 lg:px-0 lg:prose-headings:text-3xl lg:prose-h1:text-6xl xl:max-w-5xl"},[this._t("default",null,{default:""})],2)])}),[],!1,null,null,null).exports;__webpack_exports__.a=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VContentPage",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"default",title:"binding"}]}]}},"./src/pages/about.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.34.0_nuxt@2.17.3_@vue+compiler-sfc@3.3.4_acorn@8.11.3_babel-core@7._jr23wub4b6gdovp3dxzpowsa2e/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VLink=__webpack_require__("./src/components/VLink.vue"),VContentPage=__webpack_require__("./src/components/VContentPage.vue"),pages_aboutvue_type_script_lang_ts=Object(runtime.b)({name:"AboutPage",components:{VLink:VLink.a,VContentPage:VContentPage.a},layout:"content-layout",setup:function setup(){var i18n=Object(use_i18n.a)();Object(runtime.k)({title:"".concat(i18n.t("about.title",{openverse:"Openverse"})," | Openverse"),meta:[{hid:"robots",name:"robots",content:"all"}]})},head:{}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.3.4_babel-core@7.0.0-bridge.0_@babel+core@7.24.4__css-_kpa2jm6q5lntp7j2v7yhhjk7he/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(pages_aboutvue_type_script_lang_ts,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VContentPage",[_c("h1",[_vm._v("\n    "+_vm._s(_vm.$t("about.title",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("about.description.content",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("p",[_c("i18n",{attrs:{path:"about.collection.content.a",tag:"span"},scopedSlots:_vm._u([{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0},{key:"commonCrawl",fn:function fn(){return[_c("VLink",{attrs:{href:"https://commoncrawl.org/"}},[_vm._v("Common Crawl")])]},proxy:!0}])}),_vm._v("\n    "+_vm._s(_vm.$t("about.collection.content.b"))+"\n  ")],1),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("about.planning.content.a",{openverse:"Openverse"}))+"\n    "+_vm._s(_vm.$t("about.planning.content.b"))+"\n    "),_c("i18n",{attrs:{path:"about.planning.content.c",tag:"span"},scopedSlots:_vm._u([{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0},{key:"repository",fn:function fn(){return[_c("VLink",{attrs:{href:"https://github.com/wordpress/openverse"}},[_vm._v(_vm._s(_vm.$t("about.planning.repository",{openverse:"Openverse",github:"GitHub"})))])]},proxy:!0},{key:"community",fn:function fn(){return[_c("VLink",{attrs:{href:"https://make.wordpress.org/openverse/"}},[_vm._v(_vm._s(_vm.$t("about.planning.community")))])]},proxy:!0},{key:"working",fn:function fn(){return[_c("VLink",{attrs:{href:"https://github.com/orgs/WordPress/projects/3"}},[_vm._v(_vm._s(_vm.$t("about.planning.working")))])]},proxy:!0}])})],1),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("about.transfer.content.a",{openverse:"Openverse"}))+"\n    "),_c("i18n",{attrs:{path:"about.transfer.content.b",tag:"span"},scopedSlots:_vm._u([{key:"creativeCommons",fn:function fn(){return[_c("VLink",{attrs:{href:"https://creativecommons.org/2021/05/03/cc-search-to-join-wordpress/"}},[_vm._v("Creative Commons")])]},proxy:!0},{key:"wordpress",fn:function fn(){return[_c("VLink",{attrs:{href:"https://ma.tt/2021/04/cc-search-to-join-wordpress-org/"}},[_vm._v("WordPress")])]},proxy:!0}])}),_vm._v("\n    "+_vm._s(_vm.$t("about.transfer.content.c"))+"\n  ")],1),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("about.declaration.content.a",{openverse:"Openverse"}))+"\n    "),_c("i18n",{attrs:{path:"about.declaration.content.b",tag:"span"},scopedSlots:_vm._u([{key:"terms",fn:function fn(){return[_c("VLink",{attrs:{href:"https://creativecommons.org/terms/"}},[_vm._v(_vm._s(_vm.$t("about.declaration.terms",{openverse:"Openverse"})))])]},proxy:!0}])})],1),_vm._v(" "),_c("h2",{attrs:{id:"external-sources"}},[_vm._v("\n    "+_vm._s(_vm.$t("externalSourcesPage.title"))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"externalSourcesPage.intro",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0},{key:"link",fn:function fn(){return[_c("VLink",{attrs:{href:"/sources"}},[_vm._v(_vm._s(_vm.$t("externalSourcesPage.link")))])]},proxy:!0}])}),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("externalSourcesPage.license.a",{openverse:"Openverse"}))+"\n    "+_vm._s(_vm.$t("externalSourcesPage.license.b",{openverse:"Openverse"}))+"\n    "+_vm._s(_vm.$t("externalSourcesPage.license.c"))+"\n  ")]),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("externalSourcesPage.explanation",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("externalSourcesPage.relationships.a",{openverse:"Openverse"}))+"\n    "+_vm._s(_vm.$t("externalSourcesPage.relationships.b",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("h2",[_vm._v("\n    "+_vm._s(_vm.$t("externalSourcesPage.new.title"))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"externalSourcesPage.new.content",tag:"p"},scopedSlots:_vm._u([{key:"issue",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":"issue",href:"https://github.com/WordPress/openverse/issues"}},[_vm._v(_vm._s(_vm.$t("externalSourcesPage.new.issue")))])]},proxy:!0},{key:"email",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":"email",href:"mailto:openverse@wordpress.org"}},[_vm._v(_vm._s(_vm.$t("externalSourcesPage.new.email")))])]},proxy:!0}])}),_vm._v(" "),_c("h2",[_vm._v("\n    "+_vm._s(_vm.$t("externalSourcesPage.why.title"))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"externalSourcesPage.why.content",tag:"p"},scopedSlots:_vm._u([{key:"old",fn:function fn(){return[_c("VLink",{attrs:{href:"https://oldsearch.creativecommons.org"}},[_vm._v("oldsearch.creativecommons.org")])]},proxy:!0}])}),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("externalSourcesPage.why.new.a",{openverse:"Openverse"}))+"\n    "+_vm._s(_vm.$t("externalSourcesPage.why.new.b"))+"\n    "+_vm._s(_vm.$t("externalSourcesPage.why.new.c"))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"externalSourcesPage.why.feedbackSuggestions",tag:"p"},scopedSlots:_vm._u([{key:"feedback",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("externalSourcesPage.why.ariaLabel"),href:"/feedback"}},[_vm._v(_vm._s(_vm.$t("externalSourcesPage.why.feedbackLink")))])]},proxy:!0}])})],1)}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"AboutPage",exportName:"default",description:"",tags:{}}}}]);