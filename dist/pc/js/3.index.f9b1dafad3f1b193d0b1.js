(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/selector.js?type=script&index=0!../src/pc/pages/2048/index.vue":
/*!**************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!../src/pc/pages/2048/index.vue ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ \"../node_modules/babel-runtime/regenerator/index.js\");\n/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ \"../node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/promise */ \"../node_modules/babel-runtime/core-js/promise.js\");\n/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n// import $ from '@pengliheng/jquery'\nvar by = function by(name) {\n  return function (o, p) {\n    var a = o[name];\n    var b = p[name];\n    return a < b ? -1 : 1;\n  };\n};\nvar dely = function dely(ms) {\n  return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (res) {\n    return setTimeout(res, ms);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      scort: 0,\n      rocks: [],\n      color: {\n        2: \"#eee4da\",\n        4: \"#ede0c8\",\n        8: \"#f2b179\",\n        16: \"#f59563\",\n        32: \"#f67c5f\",\n        64: \"#f65e3b\",\n        128: \"#edcf72\",\n        256: \"#edcc61\",\n        512: \"#0444BF\",\n        1024: \"#A79674\",\n        2048: \"#282726\"\n      }\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    window.app = this;\n    this.init();\n    document.addEventListener(\"keydown\", function (e) {\n      if (e.key === \"ArrowRight\") {\n        _this.turn('right');\n      } else if (e.key === \"ArrowLeft\") {\n        _this.turn('left');\n      } else if (e.key === \"ArrowDown\") {\n        _this.turn('down');\n      } else if (e.key === \"ArrowUp\") {\n        _this.turn('up');\n      }\n    });\n    document.addEventListener('touchstart', function (start) {\n      var moveFunc = function moveFunc(move) {\n        var dx = move.touches[0].clientX - start.touches[0].clientX;\n        var dy = move.touches[0].clientY - start.touches[0].clientY;\n        if (dx > 100) {\n          _this.turn('right');\n          document.removeEventListener('touchmove', moveFunc);\n        } else if (dx < -100) {\n          _this.turn('left');\n          document.removeEventListener('touchmove', moveFunc);\n        } else if (dy > 100) {\n          _this.turn('down');\n          document.removeEventListener('touchmove', moveFunc);\n        } else if (dy < -100) {\n          _this.turn('up');\n          document.removeEventListener('touchmove', moveFunc);\n        }\n      };\n      document.addEventListener('touchmove', moveFunc);\n      document.addEventListener('touchend', function () {\n        document.removeEventListener('touchmove', moveFunc);\n      });\n    });\n  },\n\n  methods: {\n    init: function init() {\n      this.rocks = [];\n      this.scort = 0;\n      this.add();\n      this.add();\n    },\n    random24: function random24() {\n      return ~~(Math.random() * 2) * 2 + 2;\n    },\n    random0123: function random0123() {\n      return ~~(Math.random() * 4);\n    },\n    num: function num() {\n      var num = this.random24();\n      var result = {\n        x: this.random0123(),\n        y: this.random0123(),\n        num: num,\n        id: this.rocks.length + 1,\n        color: this.color[num]\n      };\n      var _isExist = this.isExist({\n        x: result.x,\n        y: result.y\n      });\n      if (_isExist) return;\n      return result;\n    },\n\n    // 是否游戏结束\n    isGameOver: function isGameOver() {\n      var _this2 = this;\n\n      var result = this.isFull() && this.rocks.filter(function (e) {\n        return e && (e.x !== 3 || e.y !== 3);\n      }).find(function (e) {\n        var nextX = _this2.isExist({ x: e.x + 1, y: e.y });\n        var nextY = _this2.isExist({ x: e.x, y: e.y + 1 });\n        return e.num === (nextX && nextX.num) || e.num === (nextY && nextY.num);\n      });\n      if (result === undefined) {\n        return true;\n      } else {\n        return false;\n      }\n    },\n\n    // 是否满了\n    isFull: function isFull() {\n      return this.rocks.filter(function (e) {\n        return e;\n      }).length > 15;\n    },\n\n    // 随机生成1个点\n    add: function add(callback) {\n      if (this.isFull()) {\n        console.log(\"满了不能再加了，但是游戏还没结束啊\");\n        return false;\n      }\n      var a = this.num();\n      if (a) {\n        this.rocks.push(a);\n      } else {\n        this.add();\n      }\n    },\n    getNull: function getNull() {\n      return this.rocks.indexOf(null);\n    },\n    isExist: function isExist(_ref) {\n      var x = _ref.x,\n          y = _ref.y;\n\n      return this.rocks.filter(function (e) {\n        return e;\n      }).find(function (e) {\n        return e.x === x && e.y === y;\n      });\n    },\n    getIndex: function getIndex(id) {\n      return this.rocks.findIndex(function (e) {\n        return e && e.id === id;\n      });\n    },\n    handleDirect: function handleDirect(direct) {\n      if (direct === 'right') {\n        return {\n          handleArr: function handleArr(arr) {\n            return arr.filter(function (e) {\n              return e && e.x !== 3;\n            }).sort(by(\"x\")).reverse();\n          },\n          handleCondition: function handleCondition(e) {\n            return e.x < 3;\n          },\n          next: function next(e) {\n            return { x: e.x + 1, y: e.y };\n          },\n          handleMove: function handleMove(e) {\n            e.x++;\n          }\n        };\n      } else if (direct === 'left') {\n        return {\n          handleArr: function handleArr(arr) {\n            return arr.filter(function (e) {\n              return e && e.x !== 0;\n            }).sort(by(\"x\"));\n          },\n          handleCondition: function handleCondition(e) {\n            return e.x > 0;\n          },\n          next: function next(e) {\n            return { x: e.x - 1, y: e.y };\n          },\n          handleMove: function handleMove(e) {\n            e.x--;\n          }\n        };\n      } else if (direct === 'up') {\n        return {\n          handleArr: function handleArr(arr) {\n            return arr.filter(function (e) {\n              return e && e.y !== 0;\n            }).sort(by(\"y\"));\n          },\n          handleCondition: function handleCondition(e) {\n            return e.y > 0;\n          },\n          next: function next(e) {\n            return { x: e.x, y: e.y - 1 };\n          },\n          handleMove: function handleMove(e) {\n            e.y--;\n          }\n        };\n      } else if (direct === 'down') {\n        return {\n          handleArr: function handleArr(arr) {\n            return arr.filter(function (e) {\n              return e && e.y !== 3;\n            }).sort(by(\"y\")).reverse();\n          },\n          handleCondition: function handleCondition(e) {\n            return e.y < 3;\n          },\n          next: function next(e) {\n            return { x: e.x, y: e.y + 1 };\n          },\n          handleMove: function handleMove(e) {\n            e.y++;\n          }\n        };\n      }\n    },\n\n    // 移动\n    turn: function turn(direct) {\n      var _this3 = this;\n\n      this.rocks.forEach(function (e) {\n        return e && (e.canCalc = true);\n      });\n      babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.all(this.handleDirect(direct).handleArr(this.rocks)\n      // 将他们移到最右\n      .map(function () {\n        var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n          var next;\n          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  next = _this3.isExist(_this3.handleDirect(direct).next(e));\n                  return _context.abrupt(\"return\", _this3.calcAxis({ e: e, direct: direct }));\n\n                case 2:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee, _this3);\n        }));\n\n        return function (_x) {\n          return _ref2.apply(this, arguments);\n        };\n      }())).then(function (res) {\n        if (res.indexOf(true) > -1) {\n          _this3.add();\n          _this3.add();\n        } else {\n          console.log(\"没有移动，不用添加\");\n        }\n        setTimeout(function () {\n          if (_this3.isGameOver()) {\n            alert('游戏结束！');\n            // this.init();\n          }\n        }, 0);\n      });\n    },\n\n    // 处理移动距离的函数\n    calcAxis: function calcAxis(_ref3) {\n      var _this4 = this;\n\n      var e = _ref3.e,\n          direct = _ref3.direct;\n\n      return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {\n        var _ref4 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(resolve, reject) {\n          var next, dom;\n          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  next = _this4.isExist(_this4.handleDirect(direct).next(e));\n\n                  if (next && next.num !== e.num) {\n                    resolve(false);\n                  } else if (next && next.canCalc && next.num === e.num) {\n                    // 3个条件，不为null，\n                    _this4.handleDirect(direct).handleMove(e);\n                    e.num *= 2;\n                    _this4.scort += e.num;\n                    e.canCalc = false;\n                    e.color = _this4.color[e.num];\n                    dom = document.querySelector(\"#r\" + e.id);\n\n                    dom.animate([{ transform: 'scale(1)' }, { transform: 'scale(1)' }, { transform: 'scale(1)' }, { transform: 'scale(1)' }, { transform: 'scale(0.95)' }, { transform: 'scale(1.1)' }, { transform: 'scale(1.03)' }, { transform: 'scale(1)' }], {\n                      duration: 200\n                    });\n                    // dom.style\n                    _this4.rocks.splice(_this4.getIndex(next.id), 1, null);\n                    resolve(true);\n                  } else if (next === undefined) {\n                    if (_this4.handleDirect(direct).handleCondition(e)) {\n                      _this4.handleDirect(direct).handleMove(e);\n                      _this4.calcAxis({ e: e, direct: direct });\n                    }\n                    resolve(true);\n                  }\n\n                case 2:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee2, _this4);\n        }));\n\n        return function (_x2, _x3) {\n          return _ref4.apply(this, arguments);\n        };\n      }());\n    }\n  }\n});\n\n//# sourceURL=webpack:///../src/pc/pages/2048/index.vue?../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-9023cbfa\",\"scoped\":true,\"sourceMap\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/2048/index.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-9023cbfa","scoped":true,"sourceMap":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/2048/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"../node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.show[data-v-9023cbfa] {\\n  position: fixed;\\n  bottom: 50vh;\\n  left: 20px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  margin-bottom: -27%;\\n}\\n.layout[data-v-9023cbfa] {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n.layout header[data-v-9023cbfa] {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    width: 600px;\\n    padding: 20px;\\n    -webkit-box-orient: horizontal;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: row;\\n            flex-direction: row;\\n    -ms-flex-pack: distribute;\\n        justify-content: space-around;\\n}\\n.layout header button[data-v-9023cbfa] {\\n      border: none;\\n      background: #8f7a66;\\n      color: #fff;\\n      font-size: 20px;\\n      padding: 10px 30px;\\n      cursor: pointer;\\n      border-radius: 10px;\\n}\\n.layout header span[data-v-9023cbfa] {\\n      width: 100px;\\n      display: -webkit-inline-box;\\n      display: -ms-inline-flexbox;\\n      display: inline-flex;\\n      -webkit-box-align: center;\\n          -ms-flex-align: center;\\n              align-items: center;\\n      -webkit-box-pack: center;\\n          -ms-flex-pack: center;\\n              justify-content: center;\\n}\\n.layout .all-container[data-v-9023cbfa] {\\n    height: 620px;\\n    width: 620px;\\n}\\n.layout .all-container .background[data-v-9023cbfa] {\\n      -webkit-box-sizing: content-box;\\n              box-sizing: content-box;\\n      -webkit-box-flex: 0;\\n          -ms-flex: 0 0 600px;\\n              flex: 0 0 600px;\\n      background-color: #bbada0;\\n      display: -webkit-inline-box;\\n      display: -ms-inline-flexbox;\\n      display: inline-flex;\\n      -ms-flex-wrap: wrap;\\n          flex-wrap: wrap;\\n      padding: 10px;\\n      -webkit-box-pack: justify;\\n          -ms-flex-pack: justify;\\n              justify-content: space-between;\\n      border-radius: 10px;\\n      width: 600px;\\n      position: absolute;\\n      z-index: -1;\\n}\\n.layout .all-container .background > span[data-v-9023cbfa] {\\n        background-color: #eee4da59;\\n        margin: 10px;\\n        width: 130px;\\n        height: 130px;\\n        border-radius: 10px;\\n}\\n.layout .all-container .container[data-v-9023cbfa] {\\n      z-index: 0;\\n      padding: 10px;\\n      width: 620px;\\n      height: 620px;\\n      display: -webkit-inline-box;\\n      display: -ms-inline-flexbox;\\n      display: inline-flex;\\n      position: absolute;\\n      -webkit-box-pack: start;\\n          -ms-flex-pack: start;\\n              justify-content: flex-start;\\n      -webkit-box-align: start;\\n          -ms-flex-align: start;\\n              align-items: flex-start;\\n}\\n.layout .all-container .container .list[data-v-9023cbfa] {\\n        margin: 10px;\\n        width: 130px;\\n        height: 130px;\\n        border-radius: 10px;\\n        position: absolute;\\n        font-size: 55px;\\n        font-weight: bold;\\n        -webkit-transition-property: -webkit-transform;\\n        transition-property: -webkit-transform;\\n        transition-property: transform;\\n        transition-property: transform, -webkit-transform;\\n        border-radius: 10px;\\n        -webkit-transition: 100ms ease-in-out;\\n        transition: 100ms ease-in-out;\\n}\\n.layout .all-container .container .list .inner[data-v-9023cbfa] {\\n          width: 100%;\\n          height: 100%;\\n          color: #fff;\\n          display: -webkit-inline-box;\\n          display: -ms-inline-flexbox;\\n          display: inline-flex;\\n          -webkit-box-align: center;\\n              -ms-flex-align: center;\\n                  align-items: center;\\n          border-radius: 10px;\\n          -webkit-box-pack: center;\\n              -ms-flex-pack: center;\\n                  justify-content: center;\\n          -webkit-animation-fill-mode: backwards;\\n                  animation-fill-mode: backwards;\\n          -webkit-animation: appear-data-v-9023cbfa 200ms ease-in-out;\\n                  animation: appear-data-v-9023cbfa 200ms ease-in-out;\\n}\\n@-webkit-keyframes appear-data-v-9023cbfa {\\n0% {\\n    opacity: 0;\\n    -webkit-transform: scale(0);\\n            transform: scale(0);\\n}\\n80% {\\n    opacity: 0;\\n    -webkit-transform: scale(0.8);\\n            transform: scale(0.8);\\n}\\n100% {\\n    opacity: 1;\\n    -webkit-transform: scale(1);\\n            transform: scale(1);\\n}\\n}\\n@keyframes appear-data-v-9023cbfa {\\n0% {\\n    opacity: 0;\\n    -webkit-transform: scale(0);\\n            transform: scale(0);\\n}\\n80% {\\n    opacity: 0;\\n    -webkit-transform: scale(0.8);\\n            transform: scale(0.8);\\n}\\n100% {\\n    opacity: 1;\\n    -webkit-transform: scale(1);\\n            transform: scale(1);\\n}\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///../src/pc/pages/2048/index.vue?../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22id%22:%22data-v-9023cbfa%22,%22scoped%22:true,%22sourceMap%22:false%7D!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "../node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9023cbfa\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!../src/pc/pages/2048/index.vue":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9023cbfa","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!../src/pc/pages/2048/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"layout\" }, [\n    _c(\"header\", [\n      _c(\"span\", { staticClass: \"scort\" }, [\n        _vm._v(\"总分：\" + _vm._s(_vm.scort))\n      ]),\n      _vm._v(\" \"),\n      _c(\"button\", { staticClass: \"star\", on: { click: _vm.init } }, [\n        _vm._v(\"New Game\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"sd\" })\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"all-container\" }, [\n      _vm._m(0),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"container\" },\n        _vm._l(_vm.rocks, function(e, i) {\n          return _c(\n            \"span\",\n            {\n              key: i,\n              staticClass: \"list\",\n              style:\n                \"\\n          transform: translate(\" +\n                (e ? e.x : 0) * 150 +\n                \"px, \" +\n                (e ? e.y : 0) * 150 +\n                \"px);\\n          display: \" +\n                (e ? \"\" : \"none\") +\n                \"\\n        \"\n            },\n            [\n              _c(\n                \"span\",\n                {\n                  staticClass: \"inner\",\n                  style: \"backgroundColor: \" + (e ? e.color : \"\"),\n                  attrs: { id: \"r\" + (e && e.id) }\n                },\n                [_vm._v(\"\\n          \" + _vm._s(e ? e.num : \"\") + \"\\n        \")]\n              )\n            ]\n          )\n        })\n      )\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"background\" }, [\n      _c(\"span\", { staticClass: \"list-0-0\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-0-1\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-0-2\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-0-3\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-1-0\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-1-1\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-1-2\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-1-3\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-2-0\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-2-1\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-2-2\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-2-3\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-3-0\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-3-1\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-3-2\" }),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list-3-3\" })\n    ])\n  }\n]\nrender._withStripped = true\n\nif (false) {}\n\n//# sourceURL=webpack:///../src/pc/pages/2048/index.vue?../node_modules/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-9023cbfa%22,%22hasScoped%22:true,%22optionsId%22:%220%22,%22buble%22:%7B%22transforms%22:%7B%7D%7D%7D!../node_modules/vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ "../node_modules/vue-loader/node_modules/vue-style-loader/index.js!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-9023cbfa\",\"scoped\":true,\"sourceMap\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/2048/index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/node_modules/vue-style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-9023cbfa","scoped":true,"sourceMap":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/2048/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/style-compiler?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-9023cbfa\",\"scoped\":true,\"sourceMap\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue */ \"../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"id\\\":\\\"data-v-9023cbfa\\\",\\\"scoped\\\":true,\\\"sourceMap\\\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/2048/index.vue\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js */ \"../node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"5d09306e\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///../src/pc/pages/2048/index.vue?../node_modules/vue-loader/node_modules/vue-style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22id%22:%22data-v-9023cbfa%22,%22scoped%22:true,%22sourceMap%22:false%7D!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "../src/pc/pages/2048/index.vue":
/*!**************************************!*\
  !*** ../src/pc/pages/2048/index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./index.vue */ \"../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/selector.js?type=script&index=0!../src/pc/pages/2048/index.vue\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_9023cbfa_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-9023cbfa\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./index.vue */ \"../node_modules/vue-loader/lib/template-compiler/index.js?{\\\"id\\\":\\\"data-v-9023cbfa\\\",\\\"hasScoped\\\":true,\\\"optionsId\\\":\\\"0\\\",\\\"buble\\\":{\\\"transforms\\\":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!../src/pc/pages/2048/index.vue\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ \"../node_modules/vue-loader/lib/runtime/component-normalizer.js\");\nvar disposed = false\nfunction injectStyle (context) {\n  if (disposed) return\n  __webpack_require__(/*! !vue-loader/node_modules/vue-style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-9023cbfa\",\"scoped\":true,\"sourceMap\":false}!sass-loader!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue */ \"../node_modules/vue-loader/node_modules/vue-style-loader/index.js!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"id\\\":\\\"data-v-9023cbfa\\\",\\\"scoped\\\":true,\\\"sourceMap\\\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../src/pc/pages/2048/index.vue\")\n}\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-9023cbfa\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\n\nvar Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_9023cbfa_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"render\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_9023cbfa_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__[\"staticRenderFns\"],\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src\\\\pc\\\\pages\\\\2048\\\\index.vue\"\n\n/* hot reload */\nif (false) {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//# sourceURL=webpack:///../src/pc/pages/2048/index.vue?");

/***/ })

}]);