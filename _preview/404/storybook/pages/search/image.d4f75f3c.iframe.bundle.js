(window.webpackJsonp=window.webpackJsonp||[]).push([[199,202],{"./src/pages/search/image.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),search_page_types=__webpack_require__("./src/pages/search/search-page.types.ts"),VImageGrid=__webpack_require__("./src/components/VImageGrid/VImageGrid.vue"),search_imagevue_type_script_lang_ts_=Object(runtime.b)({name:"ImageSearch",components:{VImageGrid:VImageGrid.default},props:search_page_types.propTypes,setup:function setup(props){return Object(runtime.w)({title:"".concat(props.searchTerm," | Openverse"),meta:[{hid:"robots",name:"robots",content:"all"}]}),{results:Object(runtime.a)((function(){return props.resultItems.image}))}},head:{}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(search_imagevue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("VImageGrid",{attrs:{images:this.results,"is-single-page":!1,"fetch-state":this.fetchState}})}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VImageGrid:__webpack_require__("./src/components/VImageGrid/VImageGrid.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"ImageSearch",exportName:"default",description:"",tags:{}}},"./src/pages/search/search-page.types.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"propTypes",(function(){return propTypes}));var propTypes={resultItems:{type:Object,required:!0},fetchState:{type:Object,required:!0},isFilterVisible:{type:Boolean,required:!1},searchTerm:{type:String,required:!0},supported:{type:Boolean,required:!1}}}}]);