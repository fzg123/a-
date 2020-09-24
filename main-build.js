/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"*{\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n}\\r\\n:root, body{\\r\\n    height: 100%;\\r\\n}\\r\\nbody{\\r\\n    background-color: black;\\r\\n}\\r\\n#btn{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n    width: 100px;\\r\\n    height: 200px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-around;\\r\\n    \\r\\n}\\r\\n#btn #hint{\\r\\n    color: white;\\r\\n}\\r\\n#btn button{\\r\\n    cursor: pointer;\\r\\n}\\r\\n#btn.hide{\\r\\n    \\r\\n    display: none;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Game */ \"./src/js/Game.js\");\n\r\n\r\n\r\n\r\n_js_Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\r\n// const c = document.getElementById('root');\r\n// console.log(c);\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/Block.js":
/*!*************************!*\
  !*** ./src/js/Block.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Block; });\n\r\nclass Block {\r\n    constructor(width, height, x, y) {\r\n        this.width = width;\r\n        this.height = height;\r\n        this.x = x;\r\n        this.y = y;\r\n        this.viewContent = document.createElement('div');\r\n    }\r\n    render(context) {\r\n        // this.viewContent.style.width = this.width + 'px';\r\n        // this.viewContent.style.height = this.height + 'px';\r\n        // this.viewContent.style.top = this.y * this.width + 'px';\r\n        // this.viewContent.style.left = this.x * this.height + 'px';\r\n        // console.log(context)\r\n        context.fillStyle = this.bgColor;\r\n        context.fillRect(this.x * this.width, this.y * this.height, this.width, this.height)\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/Block.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Life__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Life */ \"./src/js/Life.js\");\n\r\nclass Game {\r\n    constructor() {\r\n        this.canvas = document.getElementById('root');\r\n        this.context = this.canvas.getContext('2d');\r\n        this.lifeArr = []; // 装生命的盒子\r\n        this.lifeWidth = 10;    // 每个区域的宽度\r\n        this.lifeHeight = 10;   // 每块区域的高度\r\n        this.row = Math.floor(document.documentElement.clientHeight / this.lifeHeight); // 行数\r\n        this.column = Math.floor(document.documentElement.clientWidth / this.lifeWidth); // 每行的列数\r\n        this.isRandom = false;  // 是否 随机生成生命\r\n        this.time = 300;  //每个多久迭代一次\r\n        this.isAutoIteration = false; // 是否 无限次的 继续 下一次迭代\r\n        this.currentMoveLife = null; // 当前鼠标移动到的 生命\r\n        // this.row = 10;\r\n        // this.column = 10;\r\n        this.dom = {\r\n            start: document.getElementById('start'),\r\n            oneStart: document.getElementById('one-start'),\r\n            stop: document.getElementById('stop'),\r\n            hint: document.getElementById('hint'),\r\n            resetGame: document.getElementById('reset-game'),\r\n            btn: document.getElementById('btn')\r\n        }\r\n        this.lifeStates = this.resetLifeStates();  // 所有的生命状态\r\n        this.mouseMoveTimer = null;\r\n\r\n    }/**\r\n     * 监听鼠标移动\r\n     */\r\n    switchMouseMove() {\r\n        this.switchMouseMoveTimer = setTimeout(() => {\r\n            this.dom.btn.classList.add('hide');\r\n        }, 5000)\r\n    }\r\n    init() {\r\n        this.initViewContent();\r\n        this.addEvent();\r\n        this.switchMouseMove();\r\n    }\r\n    /**\r\n     * 重置游戏\r\n     */\r\n    resetGame() {\r\n        this.lifeArr = [];\r\n        this.clearRect();\r\n        this.initViewContent();\r\n    }\r\n    resetLifeStates() {     // 返回一个 默认的 lifeStates\r\n        const arr = [];\r\n        for (let i = 0; i < this.row; i++) {\r\n            let column = [];\r\n            for (let j = 0; j < this.column; j++) {\r\n                column.push(false);\r\n            }\r\n            arr.push(column);\r\n        }\r\n        return arr;\r\n    }\r\n    /**\r\n     * 开始 无限次的 继续 下一次迭代\r\n     */\r\n    start() {\r\n        this.stop();\r\n        this.isAutoIteration = true;\r\n        this.timer = setInterval(() => {\r\n            this.societyMove();\r\n        }, this.time)\r\n    }\r\n    stop() {\r\n        this.isAutoIteration = false;\r\n        clearInterval(this.timer);\r\n    }\r\n    /**\r\n     * 生命自由繁殖死亡\r\n     */\r\n    societyMove() {\r\n        this.nextState(); // 获取下一刻的 状态\r\n        \r\n        this.stateLeadingIn(); // 导入新状态\r\n\r\n        this.lifeStates = this.resetLifeStates(); // 重置状态存储器\r\n\r\n        this.clearRect();   // 清空面板\r\n        this.viewContentUpDate(); // 重新渲染\r\n    }\r\n    /**\r\n     * 初始化视图\r\n     */\r\n    initViewContent() {\r\n        for (let i = 0; i < this.row; i++) {\r\n            let row = [];\r\n            for (let j = 0; j < this.column; j++) {\r\n                let isOrganic = (Math.random() > 0.9) ? true : false;\r\n                let life = new _Life__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.lifeWidth, this.lifeHeight, j, i, this.isRandom ? isOrganic : false, this.context);\r\n                row.push(life);\r\n            }\r\n            this.lifeArr.push(row);\r\n        }\r\n    }\r\n    /**\r\n     * 将元素挂载到 页面上\r\n     * @param {*} dom \r\n     */\r\n    viewContentMount(dom) {\r\n        this.container.appendChild(dom);\r\n    }\r\n    /**\r\n     * 下一个时刻的状态\r\n     */\r\n    nextState() {\r\n        for (let i = 0; i < this.lifeArr.length; i++) {\r\n            let element = this.lifeArr[i];\r\n            for (let j = 0; j < element.length; j++) {\r\n\r\n                let item = element[j];\r\n                let neighborsNum = this.getNeighborsNum(item);\r\n\r\n                if (neighborsNum == 2) this.lifeStates[item.y][item.x] = item.isOrganic;\r\n                else if (neighborsNum == 3) this.lifeStates[item.y][item.x] = true;\r\n                else this.lifeStates[item.y][item.x] = false;\r\n            }\r\n        }\r\n        \r\n        \r\n    }\r\n    /**\r\n     * 将新的生命状态导入到 lifeArr 内\r\n     */\r\n    stateLeadingIn() {\r\n        for (let i = 0; i < this.lifeStates.length; i++) {\r\n            const element = this.lifeStates[i];\r\n            for (let j = 0; j < element.length; j++) {\r\n                const lifeStatesItem = element[j];\r\n                const lifeArrItem = this.lifeArr[i][j];\r\n                if (lifeStatesItem === lifeArrItem.isOrganic) continue;\r\n                lifeArrItem.setOrganic(lifeStatesItem);\r\n            }\r\n        }\r\n    }\r\n    /**\r\n     * 清空画布\r\n     */\r\n    clearRect() {\r\n        this.context.clearRect(0, 0, 1436, 754);\r\n    }\r\n    /**\r\n     * 画布更新\r\n     */\r\n    viewContentUpDate() {\r\n        for (let i = 0; i < this.lifeArr.length; i++) {\r\n            let element = this.lifeArr[i];\r\n            for (let j = 0; j < element.length; j++) {\r\n                let prop = element[j];\r\n                prop.render();\r\n            }\r\n        }\r\n    }\r\n    /**\r\n     * 获得邻居数量\r\n     * @param {*} life \r\n     */\r\n    getNeighborsNum(life) {\r\n        let lifeNum = 0,\r\n            { x, y } = life;\r\n        let tempLifeArr = [\r\n            this.isOrganic(this.lifeArr[y][x + 1]), //右边的\r\n            this.isOrganic(this.lifeArr[y][x - 1]), //左边的\r\n            this.isOrganic(this.lifeArr[y + 1] ? this.lifeArr[y + 1][x] : null), //上边的\r\n            this.isOrganic(this.lifeArr[y - 1] ? this.lifeArr[y - 1][x] : null), //下边的\r\n            this.isOrganic(this.lifeArr[y + 1] ? this.lifeArr[y + 1][x + 1] : null), //右上的\r\n            this.isOrganic(this.lifeArr[y - 1] ? this.lifeArr[y - 1][x + 1] : null), //右下的\r\n            this.isOrganic(this.lifeArr[y + 1] ? this.lifeArr[y + 1][x - 1] : null), //左上\r\n            this.isOrganic(this.lifeArr[y - 1] ? this.lifeArr[y - 1][x - 1] : null), //左下\r\n        ]\r\n\r\n        tempLifeArr.forEach((e) => {\r\n            if (e) lifeNum++;\r\n        })\r\n        return lifeNum;\r\n    }\r\n    /**\r\n     * 生命是否存活\r\n     * @param {*} life \r\n     */\r\n    isOrganic(life) {\r\n        if (life == undefined) return;\r\n        return life.isOrganic;\r\n    }\r\n    addEvent() {\r\n        this.canvas.onmousedown = (e) => {\r\n            if (this.isAutoIteration) {\r\n                alert('正在自动迭代，不能点击');\r\n                return;\r\n            }\r\n            let x = Math.floor(e.clientX / this.lifeWidth);\r\n            let y = Math.floor(e.clientY / this.lifeHeight);\r\n            const life = this.lifeArr[y][x];\r\n\r\n            life.isOrganic = !life.isOrganic;\r\n            this.lifeAgainRender(life);\r\n            this.currentMoveLife = life;\r\n\r\n            this.canvas.onmousemove = (e) => {\r\n                let x = Math.floor(e.clientX / this.lifeWidth);\r\n                let y = Math.floor(e.clientY / this.lifeHeight);\r\n                const life = this.lifeArr[y][x];\r\n                if (this.currentMoveLife != null && life.x == this.currentMoveLife.x && life.y == this.currentMoveLife.y) return;\r\n                this.currentMoveLife = life;\r\n    \r\n                life.isOrganic = !life.isOrganic;\r\n                this.lifeAgainRender(life);\r\n            }\r\n        }\r\n        this.canvas.onmouseup = (e) => {\r\n            this.canvas.onmousemove = null;\r\n        }\r\n        this.dom.start.onclick = () => {\r\n            this.start();\r\n            hint.innerHTML = '已在运行中';\r\n        }\r\n        this.dom.stop.onclick = () => {\r\n            this.stop();\r\n            hint.innerHTML = '已停止运行';\r\n        }\r\n        this.dom.oneStart.onclick = () => {\r\n            this.societyMove();\r\n        }\r\n        this.dom.resetGame.onclick = () => {\r\n            hint.innerHTML = '已停止运行';\r\n            this.stop();\r\n            this.resetGame();\r\n        }\r\n        document.onmousemove = () => {\r\n            clearTimeout(this.mouseMoveTimer);\r\n            if (this.dom.btn.classList.contains('hide')) this.dom.btn.classList.remove('hide');\r\n            this.mouseMoveTimer = setTimeout(() => {\r\n                clearTimeout(this.switchMouseMoveTimer);\r\n                this.switchMouseMove();\r\n            }, 300)\r\n        }\r\n        \r\n\r\n    }\r\n    /**\r\n     * 生命重新渲染\r\n     */\r\n    lifeAgainRender(life) {\r\n        this.context.clearRect(life.x * this.lifeWidth, life.y * this.lifeHeight, this.lifeWidth, this.lifeHeight);\r\n        life.render();\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Game());\n\n//# sourceURL=webpack:///./src/js/Game.js?");

/***/ }),

/***/ "./src/js/Life.js":
/*!************************!*\
  !*** ./src/js/Life.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Life; });\n/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Block */ \"./src/js/Block.js\");\n\r\n/**\r\n    * \r\n    * @param {*} width \r\n    * @param {*} height \r\n    * @param {*} x \r\n    * @param {*} y \r\n    * @param {*} isOrganic 为true代表这个生命 活着， false为 死亡\r\n    * @param {*} context 画笔\r\n    */\r\nclass Life extends _Block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor(width, height, x, y, isOrganic, context) {\r\n        super(width, height, x, y);\r\n        this.isOrganic = isOrganic;\r\n        this.context = context;\r\n        this.init();\r\n    }\r\n    /**\r\n     * \r\n     * @param {Boolean} state 存活 或者 死亡\r\n     */\r\n    setOrganic(state) {\r\n        this.isOrganic = state;\r\n    }\r\n    die() {\r\n        this.setOrganic(false);\r\n        this.render();// 重新渲染\r\n    }\r\n    revive() {\r\n        this.setOrganic(true);\r\n        this.render(); //重新渲染\r\n    }\r\n    render() {\r\n        if (this.isOrganic) {\r\n            this.context.fillStyle = 'aqua';\r\n            this.context.fillRect(this.x * this.width, this.y * this.height, this.width, this.height)\r\n        }\r\n        else {\r\n            this.context.strokeRect(this.x * this.width, this.y * this.height, this.width, this.height)\r\n        }\r\n    }\r\n    init() {\r\n        this.render();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/Life.js?");

/***/ })

/******/ });