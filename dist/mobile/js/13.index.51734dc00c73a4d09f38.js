(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/selector.js?type=script&index=0!../src/mobile/component/Usercenter/avator.vue":
/*!*****************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!../src/mobile/component/Usercenter/avator.vue ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mobile_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mobile/store */ \"../src/mobile/store/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  store: _mobile_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  data: function data() {\n    return {\n      company: _mobile_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].state.company,\n      isShow: false\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    var mask = document.querySelector(\".mask\");\n    mask.addEventListener(\"click\", function (e) {\n      console.log(e.path);\n      console.log(e.path.id);\n      console.log(\"==============================================\");\n      if (e.path === \"btn-able\") {\n        _this.isShow = true;\n      } else {\n        _this.isShow = false;\n      }\n    });\n  },\n\n  methods: {\n    toggle: function toggle(e) {\n      this.isShow = !this.isShow;\n    },\n    upload: function upload() {\n      var _this2 = this;\n\n      var input_upload = document.createElement(\"input\");\n      input_upload.type = \"file\";\n      input_upload.id = \"pengliheng\";\n      input_upload.click();\n      input_upload.addEventListener(\"change\", function (e) {\n        var url = \"${ctx}\" + \"/file/upload\";\n        _this2.ajax_upload_image(e, url);\n      });\n    },\n    init_camera: function init_camera() {\n      var _this3 = this;\n\n      var input_upload = document.createElement(\"input\");\n      input_upload.type = \"file\";\n      input_upload.accept = \"image/*\";\n      input_upload.click();\n      input_upload.addEventListener(\"change\", function (e) {\n        var url = \"${ctx}\" + \"/file/upload\";\n        _this3.ajax_upload_image(e, url);\n      });\n    },\n\n\n    //上传保存，暂时没有接口\n    ajax_upload_image: function ajax_upload_image(e, url) {\n      var _this4 = this;\n\n      var file = e.path[0].files[0];\n      var formData = new FormData();\n      formData.append(\"file\", file);\n      this.$ajax({\n        method: 'post',\n        url: '/upload',\n        data: formData\n      }).then(function (res) {\n        console.log('上传图片成功', res.data);\n        _this4.$el.querySelector('img').src = res.data[0].url;\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///../src/mobile/component/Usercenter/avator.vue?../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-09357bd8\",\"scoped\":true,\"sourceMap\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/mobile/component/Usercenter/avator.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-09357bd8","scoped":true,"sourceMap":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/mobile/component/Usercenter/avator.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"../node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.avator[data-v-09357bd8] {\\n  height: 100vh;\\n  background: #333;\\n}\\n.avator .header[data-v-09357bd8] {\\n    left: 0;\\n    height: 1.06667rem;\\n    top: 0;\\n    width: 100%;\\n    display: -webkit-inline-box;\\n    display: -ms-inline-flexbox;\\n    display: inline-flex;\\n    -webkit-box-orient: horizontal;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: row;\\n            flex-direction: row;\\n    -webkit-box-align: center;\\n        -ms-flex-align: center;\\n            align-items: center;\\n    -webkit-box-pack: justify;\\n        -ms-flex-pack: justify;\\n            justify-content: space-between;\\n    color: #fff;\\n    padding: 0 0.2rem;\\n    font-size: 14px;\\n}\\n[data-dpr=\\\"2\\\"] .avator .header[data-v-09357bd8] {\\n      font-size: 28px;\\n}\\n[data-dpr=\\\"3\\\"] .avator .header[data-v-09357bd8] {\\n      font-size: 42px;\\n}\\n.avator .header .option[data-v-09357bd8] {\\n      font-size: 40px;\\n      min-width: 1rem;\\n      text-align: center;\\n}\\n[data-dpr=\\\"2\\\"] .avator .header .option[data-v-09357bd8] {\\n        font-size: 80px;\\n}\\n[data-dpr=\\\"3\\\"] .avator .header .option[data-v-09357bd8] {\\n        font-size: 120px;\\n}\\n.avator .avator-img[data-v-09357bd8] {\\n    width: 6rem;\\n    height: 6rem;\\n    margin: 3.73333rem 2rem;\\n}\\n.avator .mask[data-v-09357bd8] {\\n    background: rgba(0, 0, 0, 0.6);\\n    height: 100vh;\\n    width: 100vw;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n}\\n.avator .mask div[data-v-09357bd8] {\\n      width: 100vw;\\n      position: absolute;\\n      background: #fff;\\n      bottom: 0;\\n}\\n.avator .mask div.btn-able[data-v-09357bd8] {\\n        height: 5rem;\\n}\\n.avator .mask div.btn-disable[data-v-09357bd8] {\\n        height: 2rem;\\n        border-top: 0.04rem solid #f5f5f5;\\n}\\n.avator .mask div button[data-v-09357bd8] {\\n        width: 9.33333rem;\\n        height: 1rem;\\n        display: block;\\n        margin: 0.33333rem auto;\\n        font-size: 16px;\\n        color: #fff;\\n        border: none;\\n        border-radius: 0.1rem;\\n        background: #b84747;\\n}\\n[data-dpr=\\\"2\\\"] .avator .mask div button[data-v-09357bd8] {\\n          font-size: 32px;\\n}\\n[data-dpr=\\\"3\\\"] .avator .mask div button[data-v-09357bd8] {\\n          font-size: 48px;\\n}\\n.avator .mask div button.cancel[data-v-09357bd8] {\\n          background: #ccc;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///../src/mobile/component/Usercenter/avator.vue?../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22id%22:%22data-v-09357bd8%22,%22scoped%22:true,%22sourceMap%22:false%7D!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "../node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-09357bd8\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!../src/mobile/component/Usercenter/avator.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-09357bd8","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!../src/mobile/component/Usercenter/avator.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"avator\" }, [\n    _c(\n      \"header\",\n      { staticClass: \"header\" },\n      [\n        _c(\n          \"router-link\",\n          {\n            attrs: { fst: \"\", tag: \"span\", to: \"/\" + _vm.company + \"/message\" }\n          },\n          [\n            _c(\n              \"svg\",\n              { staticClass: \"icon\", attrs: { \"aria-hidden\": \"true\" } },\n              [_c(\"use\", { attrs: { \"xlink:href\": \"#icon-jiantou-copy\" } })]\n            ),\n            _vm._v(\"\\n      返回\\n    \")\n          ]\n        ),\n        _vm._v(\" \"),\n        _c(\"span\", { staticClass: \"option\", on: { click: _vm.toggle } }, [\n          _vm._v(\"···\")\n        ])\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"img\", {\n      staticClass: \"avator-img\",\n      attrs: { src: __webpack_require__(/*! @/assets/images/lufa/autoPhoto.jpg */ \"../src/assets/images/lufa/autoPhoto.jpg\"), alt: \"\" }\n    }),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: _vm.isShow,\n            expression: \"isShow\"\n          }\n        ],\n        staticClass: \"mask\"\n      },\n      [\n        _c(\"div\", { staticClass: \"btn-able\", attrs: { id: \"btn-able\" } }, [\n          _c(\n            \"button\",\n            { staticClass: \"local-photo\", on: { click: _vm.upload } },\n            [_vm._v(\"本地相册\")]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"button\",\n            { staticClass: \"take-photo\", on: { click: _vm.init_camera } },\n            [_vm._v(\"拍照\")]\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"btn-disable\", attrs: { id: \"btn-disable\" } },\n          [\n            _c(\"button\", { staticClass: \"cancel\", on: { click: _vm.toggle } }, [\n              _vm._v(\"取消\")\n            ])\n          ]\n        )\n      ]\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\nif (false) {}\n\n//# sourceURL=webpack:///../src/mobile/component/Usercenter/avator.vue?../node_modules/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-09357bd8%22,%22hasScoped%22:true,%22optionsId%22:%220%22,%22buble%22:%7B%22transforms%22:%7B%7D%7D%7D!../node_modules/vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ "../node_modules/vue-loader/node_modules/vue-style-loader/index.js!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-09357bd8\",\"scoped\":true,\"sourceMap\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/mobile/component/Usercenter/avator.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/node_modules/vue-style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-09357bd8","scoped":true,"sourceMap":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/mobile/component/Usercenter/avator.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/style-compiler?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-09357bd8\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./avator.vue */ \"../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"id\\\":\\\"data-v-09357bd8\\\",\\\"scoped\\\":true,\\\"sourceMap\\\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/mobile/component/Usercenter/avator.vue\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js */ \"../node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"4f5e79c6\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///../src/mobile/component/Usercenter/avator.vue?../node_modules/vue-loader/node_modules/vue-style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22id%22:%22data-v-09357bd8%22,%22scoped%22:true,%22sourceMap%22:false%7D!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "../src/assets/images/lufa/autoPhoto.jpg":
/*!***********************************************!*\
  !*** ../src/assets/images/lufa/autoPhoto.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/autoPhoto.jpg\";\n\n//# sourceURL=webpack:///../src/assets/images/lufa/autoPhoto.jpg?");

/***/ }),

/***/ "../src/mobile/component/Usercenter/avator.vue":
/*!*****************************************************!*\
  !*** ../src/mobile/component/Usercenter/avator.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_avator_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./avator.vue */ \"../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/selector.js?type=script&index=0!../src/mobile/component/Usercenter/avator.vue\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_09357bd8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_avator_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-09357bd8\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./avator.vue */ \"../node_modules/vue-loader/lib/template-compiler/index.js?{\\\"id\\\":\\\"data-v-09357bd8\\\",\\\"hasScoped\\\":true,\\\"optionsId\\\":\\\"0\\\",\\\"buble\\\":{\\\"transforms\\\":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!../src/mobile/component/Usercenter/avator.vue\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ \"../node_modules/vue-loader/lib/runtime/component-normalizer.js\");\nvar disposed = false\nfunction injectStyle (context) {\n  if (disposed) return\n  __webpack_require__(/*! !vue-loader/node_modules/vue-style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-09357bd8\",\"scoped\":true,\"sourceMap\":false}!sass-loader!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./avator.vue */ \"../node_modules/vue-loader/node_modules/vue-style-loader/index.js!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"id\\\":\\\"data-v-09357bd8\\\",\\\"scoped\\\":true,\\\"sourceMap\\\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/mobile/component/Usercenter/avator.vue\")\n}\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-09357bd8\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\n\nvar Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_avator_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_09357bd8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_avator_vue__WEBPACK_IMPORTED_MODULE_1__[\"render\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_09357bd8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_avator_vue__WEBPACK_IMPORTED_MODULE_1__[\"staticRenderFns\"],\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src\\\\mobile\\\\component\\\\Usercenter\\\\avator.vue\"\n\n/* hot reload */\nif (false) {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//# sourceURL=webpack:///../src/mobile/component/Usercenter/avator.vue?");

/***/ })

}]);