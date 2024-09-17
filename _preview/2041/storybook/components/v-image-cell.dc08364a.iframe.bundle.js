(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/assets/image_not_available_placeholder.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/image_not_available_placeholder.png"},"./src/components/VSearchResultsGrid/VImageCell.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.concat.js");var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js"),runtime=__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_vy7xpffix5pmcjc7tpwmoxm2hq/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),maxAspect=16/9,use_image_cell_size_useImageCellSize=function useImageCellSize(_ref){var imageSize=_ref.imageSize,isSquare=_ref.isSquare,imgHeight=Object(runtime.e)(isSquare.value?250:imageSize.height||100),imgWidth=Object(runtime.e)(isSquare.value?250:imageSize.width||100),imageAspect=Object(runtime.a)((function(){return imgWidth.value/imgHeight.value})),isPanorama=Object(runtime.a)((function(){return imageAspect.value>2.3333333333333335})),styles=Object(runtime.a)((function(){var aspect=imageAspect.value;if(isSquare.value)return{container:"",figure:"",iPadding:""};var imageWidth,imageLeft,imageTop,containerAspect=function getContainerAspect(aspect){return aspect>maxAspect?maxAspect:aspect<.75?.75:aspect}(aspect),containerWidth=253.125*containerAspect;return aspect<maxAspect?(imageWidth=100,imageLeft=0):(imageWidth=aspect/maxAspect*100,imageLeft=(aspect-maxAspect)/maxAspect*-50),imageTop=aspect>.75?0:(.75-aspect)/(.75*aspect*.75)*-50,{container:"width: ".concat(containerWidth,"px;flex-grow: ").concat(containerWidth),figure:"width: ".concat(imageWidth,"%; top: ").concat(imageTop,"%; left:").concat(imageLeft,"%;"),iPadding:"padding-bottom:".concat(1/containerAspect*100,"%")}}));return{imgHeight:imgHeight,imgWidth:imgWidth,isPanorama:isPanorama,styles:styles}},VLicense=__webpack_require__("./src/components/VLicense/VLicense.vue"),VLink=__webpack_require__("./src/components/VLink.vue"),image_not_available_placeholder=__webpack_require__("./src/assets/image_not_available_placeholder.png"),image_not_available_placeholder_default=__webpack_require__.n(image_not_available_placeholder),toAbsolutePath=function toAbsolutePath(url){var prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://";return url.indexOf("http://")>=0||url.indexOf("https://")>=0?url:"".concat(prefix).concat(url)},VSearchResultsGrid_VImageCellvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VImageCell",components:{VLicense:VLicense.default,VLink:VLink.default},props:{image:{type:Object,required:!0},searchTerm:{type:String},aspectRatio:{type:String,default:"square"}},setup:function setup(props){var isSquare=Object(vue.computed)((function(){return"square"===props.aspectRatio})),_useImageCellSize=use_image_cell_size_useImageCellSize({imageSize:{width:props.image.width,height:props.image.height},isSquare:isSquare}),imgHeight=_useImageCellSize.imgHeight,imgWidth=_useImageCellSize.imgWidth,isPanorama=_useImageCellSize.isPanorama,styles=_useImageCellSize.styles,imageUrl=Object(vue.computed)((function(){if(isPanorama.value)return toAbsolutePath(props.image.url);var url=props.image.thumbnail||props.image.url;return toAbsolutePath(url)})),imageLink=Object(vue.computed)((function(){return"/image/".concat(props.image.id,"/").concat(props.searchTerm?"?q="+props.searchTerm:"")}));return{styles:styles,imgWidth:imgWidth,imgHeight:imgHeight,imageUrl:imageUrl,imageLink:imageLink,getImageForeignUrl:function getImageForeignUrl(){return toAbsolutePath(props.image.foreign_landing_url)},onImageLoadError:function onImageLoadError(event){var element=event.target;element.src=element.src===props.image.url?image_not_available_placeholder_default.a:props.image.url},getImgDimension:function getImgDimension(event){if("square"!==props.aspectRatio){var element=event.target;imgHeight.value=element.naturalHeight,imgWidth.value=element.naturalWidth}},isSquare:isSquare}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VSearchResultsGrid_VImageCellvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VLink",{staticClass:"group relative block w-full overflow-hidden rounded-sm bg-dark-charcoal-10 text-dark-charcoal-10 focus-bold-filled",style:_vm.styles.container,attrs:{itemprop:"contentUrl",title:_vm.image.title,href:_vm.imageLink,"aria-label":_vm.image.title}},[_c("figure",{staticClass:"absolute w-full rounded-sm",class:{"relative aspect-square":_vm.isSquare},style:_vm.styles.figure,attrs:{itemprop:"image",itemscope:"",itemtype:"https://schema.org/ImageObject"}},[_c("img",{ref:"img",staticClass:"block w-full rounded-sm object-cover",class:_vm.isSquare?"h-full":"margin-auto",attrs:{loading:"lazy",alt:_vm.image.title,src:_vm.imageUrl,width:_vm.imgWidth,height:_vm.imgHeight,itemprop:"thumbnailUrl"},on:{load:_vm.getImgDimension,error:function error($event){return _vm.onImageLoadError($event)}}}),_vm._v(" "),_c("figcaption",{staticClass:"invisible absolute bottom-0 left-0 bg-white p-1 text-dark-charcoal group-hover:visible group-focus:visible"},[_c("h2",{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.image.title))]),_vm._v(" "),_c("VLicense",{attrs:{license:_vm.image.license,"hide-name":!0}})],1)]),_vm._v(" "),_vm.isSquare?_vm._e():_c("i",{staticClass:"block",style:_vm.styles.iPadding,attrs:{"aria-hidden":""}})])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLicense:__webpack_require__("./src/components/VLicense/VLicense.vue").default,VLink:__webpack_require__("./src/components/VLink.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VImageCell",exportName:"default",description:"",tags:{},props:[{name:"image",type:{name:"ImageDetail"},required:!0},{name:"searchTerm",description:"The search term is added to the URL to allow the user to\nnavigate back/forward to the search results page.",type:{name:"string"}},{name:"aspectRatio",description:"All content view uses the square image cells, Image view\nuses the image's intrinsic size.",type:{name:"AspectRatio"},defaultValue:{func:!1,value:'"square"'}}]}}}]);