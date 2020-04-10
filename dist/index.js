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

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  menus: ['bold']\n});\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/core/command/index.js":
/*!***********************************!*\
  !*** ./src/core/command/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Command; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// 自定义命令\nvar customCommand = {\n  todo: {}\n};\n\nvar Command = /*#__PURE__*/function () {\n  function Command(editor) {\n    _classCallCheck(this, Command);\n\n    this.editor = editor;\n  }\n\n  _createClass(Command, [{\n    key: \"exec\",\n    value: function exec(name, value) {\n      var editor = this.editor; // // 使用 styleWithCSS\n      // if (!editor._useStyleWithCSS) {\n      //     document.execCommand('styleWithCSS', null, true)\n      //     editor._useStyleWithCSS = true\n      // }\n\n      console.log('当前存储的range', editor.selection.curRange); // 如果无选区，忽略\n\n      if (!editor.selection.curRange) {\n        return;\n      } // 点击菜单触发此事件时，选区已经改变，需要先恢复到上一次的选区，再执行操作\n\n\n      editor.selection.restoreSelection(); // // 执行\n      // const _name = '_' + name\n      // if (this[_name]) {\n      //     // 有自定义事件\n      //     this[_name](value)\n      // } else {\n      //     // 默认 command\n      //     this.execCommand(name, value)\n      // }\n\n      this.execCommand(name, value); // 修改菜单状态\n\n      editor.menus.updateActive(); // 若命令执行完成，选区的dom结构可能会变化（例如有一行<p>123</p>选择12加粗，变为<p>1<b>23</b></p>）导致range发生改变，需要重新保存range\n\n      editor.selection.saveRange(); // editor.selection.restoreSelection()\n      // // 触发 onchange\n      // editor.change && editor.change()\n    }\n  }, {\n    key: \"queryState\",\n    value: function queryState(name) {\n      if (Object.keys(customCommand).includes(name)) {} else {\n        return this.queryCommandState(name);\n      }\n    }\n  }, {\n    key: \"queryCommandState\",\n    value: function queryCommandState(name) {\n      return document.queryCommandState(name);\n    }\n  }, {\n    key: \"execCommand\",\n    value: function execCommand(name, value) {\n      console.log('执行execCommand，当前选区为', getSelection().getRangeAt(0));\n      document.execCommand(name, false, value);\n    }\n  }]);\n\n  return Command;\n}();\n\n\n\n//# sourceURL=webpack:///./src/core/command/index.js?");

/***/ }),

/***/ "./src/core/editor/index.js":
/*!**********************************!*\
  !*** ./src/core/editor/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/command */ \"./src/core/command/index.js\");\n/* harmony import */ var _core_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/menu */ \"./src/core/menu/index.js\");\n/* harmony import */ var _core_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/selection */ \"./src/core/selection/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config */ \"./src/config.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar Editor = /*#__PURE__*/function () {\n  function Editor() {\n    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {\n      throw new Error('请传入selector');\n    };\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, Editor);\n\n    this.selector = selector; // 初始化配置对象\n\n    this.config = _objectSpread({}, _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, options);\n  }\n\n  _createClass(Editor, [{\n    key: \"create\",\n    value: function create() {\n      this.initDom();\n      this.initCommand();\n      this.initMenus();\n      this.initSelection();\n      this.initEventListeners();\n    }\n  }, {\n    key: \"initDom\",\n    value: function initDom() {\n      var contanierEle = document.querySelector(this.selector);\n      contanierEle.classList.add('z-editor-container');\n      var menuEle = document.createElement('div');\n      menuEle.classList.add('z-editor-menu');\n      var contentEle = document.createElement('div');\n      contentEle.classList.add('z-editor-content');\n      contentEle.setAttribute('contenteditable', 'true');\n      contentEle.innerHTML = \"<p><br></p>\";\n      contanierEle.appendChild(menuEle);\n      contanierEle.appendChild(contentEle);\n      this.contanierEle = contanierEle;\n      this.menuEle = menuEle;\n      this.contentEle = contentEle;\n    }\n  }, {\n    key: \"initCommand\",\n    value: function initCommand() {\n      this.cmd = new _core_command__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    }\n  }, {\n    key: \"initMenus\",\n    value: function initMenus() {\n      this.menus = new _core_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n    }\n  }, {\n    key: \"initSelection\",\n    value: function initSelection() {\n      this.selection = new _core_selection__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n    }\n  }, {\n    key: \"initEventListeners\",\n    value: function initEventListeners() {\n      var self = this;\n      var contentEle = this.contentEle;\n\n      function handleSelectionChange(e) {\n        console.log('光标可能改变');\n        self.selection.saveRange();\n        self.menus.updateActive();\n      }\n\n      function handleLeave() {\n        console.log('leave');\n        handleSelectionChange();\n      } // 鼠标点击完成和键盘输入完成时可能会改变选区\n\n\n      contentEle.addEventListener('mousedown', function () {\n        // 如果按下鼠标时移出编辑区域，也需要实时记录，否则移出松开鼠标后无法监听到选区改变\n        contentEle.addEventListener('mouseleave', handleLeave);\n      });\n      contentEle.addEventListener('mouseup', function () {\n        handleSelectionChange();\n        contentEle.removeEventListener('mouseleave', handleLeave); // 在编辑区内点击取消mouseleave监听\n      });\n      contentEle.addEventListener('keyup', function () {\n        handleSelectionChange();\n        contentEle.removeEventListener('mouseleave', handleLeave); // 在编辑区内输入同样取消mouseleave监听\n      });\n    }\n  }]);\n\n  return Editor;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Editor);\n\n//# sourceURL=webpack:///./src/core/editor/index.js?");

/***/ }),

/***/ "./src/core/menu/Bold.js":
/*!*******************************!*\
  !*** ./src/core/menu/Bold.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bold; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Bold = /*#__PURE__*/function () {\n  function Bold(editor) {\n    var _this = this;\n\n    _classCallCheck(this, Bold);\n\n    this.exec = function () {\n      console.log('点击bold，触发事件');\n      console.log('当前选区', getSelection());\n\n      _this.editor.cmd.exec('bold');\n    };\n\n    console.log(editor, 123);\n    this.editor = editor;\n    var elem = document.createElement('div');\n    elem.classList.add('z-editor-menu-item');\n    elem.innerHTML = \"\\n            <span class=\\\"icon-bold iconfont\\\"></span>\\n        \";\n    editor.menuEle.appendChild(elem);\n    this.elem = elem;\n    this.active = false;\n    console.log(this.exec);\n    elem.addEventListener('click', this.exec);\n  }\n\n  _createClass(Bold, [{\n    key: \"updateActive\",\n    value: function updateActive() {\n      console.log('更新bold状态', this.editor.cmd.queryState('bold'));\n      var active = this.editor.cmd.queryState('bold');\n\n      if (active) {\n        this.elem.classList.add('z-menu-active');\n      } else {\n        this.elem.classList.remove('z-menu-active');\n      }\n\n      this.active = active;\n    }\n  }]);\n\n  return Bold;\n}();\n\n\n\n//# sourceURL=webpack:///./src/core/menu/Bold.js?");

/***/ }),

/***/ "./src/core/menu/index.js":
/*!********************************!*\
  !*** ./src/core/menu/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Menu; });\n/* harmony import */ var _core_menu_Bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/menu/Bold */ \"./src/core/menu/Bold.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar MENU_CONFIG = {\n  bold: {\n    \"class\": _core_menu_Bold__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n};\n\nvar Menu = /*#__PURE__*/function () {\n  function Menu(editor) {\n    _classCallCheck(this, Menu);\n\n    this.menus = {};\n    this.editor = editor;\n    this.init();\n  }\n\n  _createClass(Menu, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var menus = this.editor.config.menus;\n      var editor = this.editor;\n      console.log(menus); // 初始化菜单\n\n      menus.forEach(function (menuName) {\n        console.log(MENU_CONFIG);\n        var MenuClass = MENU_CONFIG[menuName][\"class\"];\n        console.log(MenuClass);\n        _this.menus[menuName] = new MenuClass(editor);\n      });\n    }\n  }, {\n    key: \"updateActive\",\n    value: function updateActive() {\n      for (var menuName in this.menus) {\n        var menuItem = this.menus[menuName];\n        menuItem.updateActive && menuItem.updateActive();\n      }\n    }\n  }]);\n\n  return Menu;\n}();\n\n\n\n//# sourceURL=webpack:///./src/core/menu/index.js?");

/***/ }),

/***/ "./src/core/selection/index.js":
/*!*************************************!*\
  !*** ./src/core/selection/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Selection; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Selection = /*#__PURE__*/function () {\n  function Selection(editor) {\n    _classCallCheck(this, Selection);\n\n    this.editor = editor;\n    this.curRange = null;\n    this.isCollapsed = true;\n  } // 存储当前选区range\n\n\n  _createClass(Selection, [{\n    key: \"saveRange\",\n    value: function saveRange() {\n      var selection = getSelection();\n      if (selection.rangeCount === 0) return;\n      var range = selection.getRangeAt(0);\n      this.isCollapsed = selection.isCollapsed; // 设置选择是否折叠\n\n      this.curRange = range;\n      console.log('保存选区range为this.curRange', this.curRange);\n    } // 恢复选区\n\n  }, {\n    key: \"restoreSelection\",\n    value: function restoreSelection() {\n      console.log('恢复选区为之前保存的range');\n      var selection = getSelection();\n      selection.removeAllRanges();\n      selection.addRange(this.curRange);\n    }\n  }]);\n\n  return Selection;\n}();\n\n\n\n//# sourceURL=webpack:///./src/core/selection/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/editor */ \"./src/core/editor/index.js\");\n\nconsole.log(1);\nconsole.log(_core_editor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nvar editor = new _core_editor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#editor');\neditor.create();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });