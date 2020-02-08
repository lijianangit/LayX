(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["layx"] = factory();
	else
		root["layx"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/asset/index.ts":
/*!****************************!*\
  !*** ./app/asset/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./style/common.css */ "./app/asset/style/common.css");
__webpack_require__(/*! ./style/svg.css */ "./app/asset/style/svg.css");
__webpack_require__(/*! ./style/window.css */ "./app/asset/style/window.css");
__webpack_require__(/*! ./style/animate.css */ "./app/asset/style/animate.css");
__webpack_require__(/*! ./style/action-bar.css */ "./app/asset/style/action-bar.css");
__webpack_require__(/*! ./svg/destroy.svg */ "./app/asset/svg/destroy.svg");
__webpack_require__(/*! ./svg/extra.svg */ "./app/asset/svg/extra.svg");
__webpack_require__(/*! ./svg/maximize.svg */ "./app/asset/svg/maximize.svg");
__webpack_require__(/*! ./svg/minimize.svg */ "./app/asset/svg/minimize.svg");
__webpack_require__(/*! ./svg/restore.svg */ "./app/asset/svg/restore.svg");


/***/ }),

/***/ "./app/asset/style/action-bar.css":
/*!****************************************!*\
  !*** ./app/asset/style/action-bar.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/asset/style/animate.css":
/*!*************************************!*\
  !*** ./app/asset/style/animate.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/asset/style/common.css":
/*!************************************!*\
  !*** ./app/asset/style/common.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/asset/style/svg.css":
/*!*********************************!*\
  !*** ./app/asset/style/svg.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/asset/style/window.css":
/*!************************************!*\
  !*** ./app/asset/style/window.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/asset/svg/destroy.svg":
/*!***********************************!*\
  !*** ./app/asset/svg/destroy.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "destroy",
  "use": "destroy-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"destroy\"><defs><style type=\"text/css\"></style></defs><path d=\"M933.89254819 139.71606348L884.23129279 90.08990363 511.96490363 462.39138834 140.40044113 90.82692583 90.84447403 140.34779656 462.40893653 511.91225907 90.10745181 884.2137446 139.73361166 933.875 512.03509637 561.53841892 883.59955887 933.10288141 933.15552597 883.58201068 561.59106347 512.01754819Z\" p-id=\"4833\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./app/asset/svg/extra.svg":
/*!*********************************!*\
  !*** ./app/asset/svg/extra.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "extra",
  "use": "extra-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"extra\"><defs><style type=\"text/css\"></style></defs><path d=\"M512 269.254656a97.10978845 97.10978845 0 1 0 0-194.16132267 97.10978845 97.10978845 0 0 0 0 194.16132267z\" p-id=\"4591\" /><path d=\"M512 512m-97.10978845 0a97.10978845 97.10978845 0 1 0 194.2195769 0 97.10978845 97.10978845 0 1 0-194.2195769 0Z\" p-id=\"4592\" /><path d=\"M512 948.90666667a97.10978845 97.10978845 0 1 0 0-194.21957689 97.10978845 97.10978845 0 0 0 0 194.21957689z\" p-id=\"4593\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./app/asset/svg/maximize.svg":
/*!************************************!*\
  !*** ./app/asset/svg/maximize.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "maximize",
  "use": "maximize-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"maximize\"><defs><style type=\"text/css\"></style></defs><path d=\"M75.74912227 948.24738475L75.74912227 75.75145131l872.50059037 0 0 872.49593344L75.74912227 948.24738475zM839.18786674 184.81446115L184.81213326 184.81446115l0 654.37573462 654.37573461 0L839.18786674 184.81446115z\" p-id=\"4102\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./app/asset/svg/minimize.svg":
/*!************************************!*\
  !*** ./app/asset/svg/minimize.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "minimize",
  "use": "minimize-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"minimize\"><defs><style type=\"text/css\"></style></defs><path d=\"M65.23884 456.152041 958.760137 456.152041l0 111.695918L65.23884 567.847959 65.23884 456.152041z\" p-id=\"4222\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./app/asset/svg/restore.svg":
/*!***********************************!*\
  !*** ./app/asset/svg/restore.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "restore",
  "use": "restore-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"restore\"><defs><style type=\"text/css\"></style></defs><path d=\"M256 256V149.333333c0-58.88 47.829333-106.666667 106.666667-106.666666h512c58.88 0 106.666667 47.829333 106.666666 106.666666v512c0 58.88-47.829333 106.666667-106.666666 106.666667h-106.666667v106.666667c0 58.88-47.829333 106.666667-106.666667 106.666666H149.333333c-58.88 0-106.666667-47.829333-106.666666-106.666666V362.666667c0-58.88 47.829333-106.666667 106.666666-106.666667h106.666667z m0 85.333333H149.333333c-11.733333 0-21.333333 9.6-21.333333 21.333334v512c0 11.733333 9.6 21.333333 21.333333 21.333333h512c11.733333 0 21.333333-9.6 21.333334-21.333333v-106.666667H362.666667c-58.88 0-106.666667-47.829333-106.666667-106.666667V341.333333z m85.333333-192v512c0 11.733333 9.6 21.333333 21.333334 21.333334h512c11.733333 0 21.333333-9.6 21.333333-21.333334V149.333333c0-11.733333-9.6-21.333333-21.333333-21.333333H362.666667c-11.733333 0-21.333333 9.6-21.333334 21.333333z\" p-id=\"4342\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./app/component/index.ts":
/*!********************************!*\
  !*** ./app/component/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_bus_1 = __webpack_require__(/*! ../core/event-bus */ "./app/core/event-bus/index.ts");
var object_1 = __webpack_require__(/*! ../core/helper/object */ "./app/core/helper/object/index.ts");
var entry_1 = __webpack_require__(/*! ../entry */ "./app/entry/index.ts");
var monitor_1 = __webpack_require__(/*! ../monitor */ "./app/monitor/index.ts");
var Component = (function () {
    function Component(options) {
        this.options = options;
        this.entry = entry_1.Entry.Instance();
        this.eventBus = event_bus_1.EventBus.Instance();
        this.monitorCenter = monitor_1.MonitorCenter.Instance();
        this._components = {};
        this._element = null;
    }
    Object.defineProperty(Component.prototype, "components", {
        get: function () {
            return this._components;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Component.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Component.prototype.readGlobalValue = function (path, defaultValue, startObject) {
        if (defaultValue === void 0) { defaultValue = undefined; }
        if (startObject === void 0) { startObject = this.entry; }
        return object_1.readObject(path, defaultValue, startObject);
    };
    Component.prototype.readOptions = function (keyValue) {
        for (var key in keyValue) {
            if (key.indexOf(":") === -1) {
                this[key] = object_1.readObject(key, keyValue[key], this.options);
                continue;
            }
            var keyPath = key.split(":");
            this[keyPath[0]] = object_1.readObject(keyPath[1], keyValue[key], this.options);
        }
    };
    Component.prototype.readComponent = function (path, startObject) {
        if (startObject === void 0) { startObject = this; }
        return object_1.readObject(path, null, startObject, "components");
    };
    return Component;
}());
exports.Component = Component;


/***/ }),

/***/ "./app/component/ui-action-bar/index.ts":
/*!**********************************************!*\
  !*** ./app/component/ui-action-bar/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! ../ */ "./app/component/index.ts");
var const_1 = __webpack_require__(/*! ../../const */ "./app/const/index.ts");
var contract_1 = __webpack_require__(/*! ../../contract */ "./app/contract/index.ts");
var property_1 = __webpack_require__(/*! ../../core/decorator/property */ "./app/core/decorator/property/index.ts");
var element_1 = __webpack_require__(/*! ../../core/helper/element */ "./app/core/helper/element/index.ts");
var validator_1 = __webpack_require__(/*! ../../core/validator */ "./app/core/validator/index.ts");
var ui_icon_1 = __webpack_require__(/*! ../ui-icon */ "./app/component/ui-icon/index.ts");
var UIActionBar = (function (_super) {
    __extends(UIActionBar, _super);
    function UIActionBar(options) {
        var _this = _super.call(this, options) || this;
        _this.actionButtonWidth = 45;
        _this.actionButtonHoverClass = "action-button-hover";
        _this.height = _this.readGlobalValue("windowOption/actionBar/height");
        _this.backgroundColor = _this.readGlobalValue("windowOption/actionBar/backgroundColor");
        _this.align = _this.readGlobalValue("windowOption/actionBar/align");
        _this.color = _this.readGlobalValue("windowOption/actionBar/color");
        _this.minimize = {
            icon: "minimize",
            disabled: false,
            visible: true,
            width: _this.actionButtonWidth,
            hoverClass: _this.actionButtonHoverClass,
            handler: function (ev) {
                _this.eventBus.broadcast([const_1.WINDOW_MINIMIZE], {
                    target: _this.monitorCenter.window
                });
            },
        };
        _this.maximize = {
            icon: "maximize",
            disabled: false,
            visible: true,
            width: _this.actionButtonWidth,
            switchIcon: "restore",
            hoverClass: _this.actionButtonHoverClass,
            handler: function (ev) {
                _this.eventBus.broadcast([const_1.WINDOW_MAXIMIZE], {
                    target: _this.monitorCenter.window
                });
            },
            switchHandler: function (ev) {
                _this.eventBus.broadcast([const_1.WINDOW_RESTORE], {
                    target: _this.monitorCenter.window
                });
            }
        };
        _this.destroy = {
            icon: "destroy",
            disabled: false,
            visible: true,
            width: _this.actionButtonWidth,
            hoverClass: "action-destroy-hover",
            handler: function (ev) {
                _this.eventBus.broadcast([const_1.WINDOW_DESTROY], {
                    target: _this.monitorCenter.window
                });
            }
        };
        _this.extra = {
            icon: "extra",
            disabled: false,
            visible: false,
            width: _this.actionButtonWidth,
            hoverClass: _this.actionButtonHoverClass,
            handler: function (ev) {
            }
        };
        _this.readOptions({
            height: _this.height,
            backgroundColor: _this.backgroundColor,
            align: _this.align,
            color: _this.color,
            minimize: _this.minimize,
            maximize: _this.maximize,
            destroy: _this.destroy
        });
        _this.monitorEvent();
        return _this;
    }
    UIActionBar.prototype.createView = function () {
        var _a, _b;
        var element = this._element = element_1.createDivElement();
        element_1.addCSSClasses(element, "action-bar", "flex-box", "row-direction");
        element_1.addCSSStyles(element, {
            color: (_a = this.color, (_a !== null && _a !== void 0 ? _a : null)),
            height: this.height + "px",
            backgroundColor: (_b = this.backgroundColor, (_b !== null && _b !== void 0 ? _b : null)),
            left: this.align === "left" ? '0' : null,
            right: this.align === "right" ? '0' : null,
        });
        this.createInlineIcons(this.extra, this.minimize, this.maximize, this.destroy);
        return element;
    };
    UIActionBar.prototype.createInlineIcons = function () {
        var e_1, _a;
        var iconOptions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            iconOptions[_i] = arguments[_i];
        }
        if (!this.element)
            return;
        if (this.align === "left")
            iconOptions = iconOptions.reverse();
        try {
            for (var iconOptions_1 = __values(iconOptions), iconOptions_1_1 = iconOptions_1.next(); !iconOptions_1_1.done; iconOptions_1_1 = iconOptions_1.next()) {
                var option = iconOptions_1_1.value;
                if (option !== false) {
                    var uiIcon = new ui_icon_1.UIIcon(option);
                    var uiIconElement = uiIcon.createView();
                    element_1.addCSSClasses(uiIconElement, "action-button", "action-" + option.icon);
                    this.element.appendChild(uiIconElement);
                    this.components[option.icon] = uiIcon;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iconOptions_1_1 && !iconOptions_1_1.done && (_a = iconOptions_1.return)) _a.call(iconOptions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    UIActionBar.prototype.monitorEvent = function () {
        this.eventBus.on(const_1.WINDOW_MAXIMIZE, function (message) {
            var _a, _b;
            var window = message.dataset.target;
            if (window.status === "maximize") {
                var maximizeAction = window.readComponent("actionBar/maximize");
                if (((_a = maximizeAction) === null || _a === void 0 ? void 0 : _a.isSwitch) === false) {
                    (_b = maximizeAction) === null || _b === void 0 ? void 0 : _b.changeStyle();
                }
            }
        });
        this.eventBus.on(const_1.WINDOW_RESTORE, function (message) {
            var _a, _b;
            var window = message.dataset.target;
            if (window.lastStatus === "maximize") {
                var maximizeAction = window.readComponent("actionBar/maximize");
                if ((_a = maximizeAction) === null || _a === void 0 ? void 0 : _a.isSwitch) {
                    (_b = maximizeAction) === null || _b === void 0 ? void 0 : _b.changeStyle();
                }
            }
        });
    };
    __decorate([
        property_1.validator(validator_1.checkPstNumber)
    ], UIActionBar.prototype, "height", void 0);
    __decorate([
        property_1.validator(validator_1.checkColor, undefined)
    ], UIActionBar.prototype, "backgroundColor", void 0);
    __decorate([
        property_1.validator([validator_1.checkIn, "left", "right"])
    ], UIActionBar.prototype, "align", void 0);
    __decorate([
        property_1.validator(validator_1.checkColor, undefined)
    ], UIActionBar.prototype, "color", void 0);
    __decorate([
        property_1.validator(contract_1.UIIconOptionContract, false)
    ], UIActionBar.prototype, "minimize", void 0);
    __decorate([
        property_1.validator(contract_1.UIIconOptionContract, false)
    ], UIActionBar.prototype, "maximize", void 0);
    __decorate([
        property_1.validator(contract_1.UIIconOptionContract, false)
    ], UIActionBar.prototype, "destroy", void 0);
    __decorate([
        property_1.validator(contract_1.UIIconOptionContract, false)
    ], UIActionBar.prototype, "extra", void 0);
    return UIActionBar;
}(__1.Component));
exports.UIActionBar = UIActionBar;


/***/ }),

/***/ "./app/component/ui-icon/index.ts":
/*!****************************************!*\
  !*** ./app/component/ui-icon/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! ../ */ "./app/component/index.ts");
var property_1 = __webpack_require__(/*! ../../core/decorator/property */ "./app/core/decorator/property/index.ts");
var element_1 = __webpack_require__(/*! ../../core/helper/element */ "./app/core/helper/element/index.ts");
var validator_1 = __webpack_require__(/*! ../../core/validator */ "./app/core/validator/index.ts");
var UIIcon = (function (_super) {
    __extends(UIIcon, _super);
    function UIIcon(options) {
        var _a;
        var _this = _super.call(this, options) || this;
        _this._isSwitch = false;
        _this.disabled = false;
        _this.visible = true;
        _this.size = 14;
        _this.icon = (_a = options) === null || _a === void 0 ? void 0 : _a.icon;
        _this.readOptions({
            color: _this.color,
            backgroundColor: _this.backgroundColor,
            width: _this.width,
            disabled: _this.disabled,
            visible: _this.visible,
            hoverClass: _this.hoverClass,
            handler: _this.handler,
            switchIcon: _this.switchIcon,
            switchColor: _this.switchColor,
            switchBackgroundColor: _this.switchBackgroundColor,
            switchHandler: _this.switchHandler
        });
        _this.svgIcons = [
            _this.createSvgIcon(_this.icon),
            _this.switchIcon ? _this.createSvgIcon(_this.switchIcon) : undefined
        ];
        return _this;
    }
    Object.defineProperty(UIIcon.prototype, "isSwitch", {
        get: function () {
            return this._isSwitch;
        },
        enumerable: true,
        configurable: true
    });
    UIIcon.prototype.createView = function () {
        var _this = this;
        var _a, _b;
        var element = this._element = element_1.createDivElement();
        element_1.addCSSClasses(element, "icon", "flex-box", this.visible ? undefined : "box-hidden", "center-all", this.disabled ? "disable-icon" : undefined);
        element_1.addCSSStyles(element, {
            color: (_a = this.color, (_a !== null && _a !== void 0 ? _a : null)),
            backgroundColor: (_b = this.backgroundColor, (_b !== null && _b !== void 0 ? _b : null)),
            fontSize: this.size + "px",
            width: this.width ? this.width + "px" : null
        });
        if (this.hoverClass) {
            element_1.setHoverClass(element, this.hoverClass);
        }
        element.appendChild(this.svgIcons[0]);
        element.addEventListener("click", function (ev) {
            if (!_this.isSwitch)
                _this.handler && _this.handler(ev);
            else
                _this.switchHandler ? _this.switchHandler(ev) : (_this.handler && _this.handler(ev));
            _this.changeStyle();
        });
        return element;
    };
    UIIcon.prototype.createSvgIcon = function (icon) {
        var svgElement = element_1.createSvgElement(icon);
        svgElement.setAttribute("class", element_1.PREFIX + "svg");
        return svgElement;
    };
    UIIcon.prototype.changeStyle = function () {
        var _a, _b, _c, _d, _e, _f;
        if (!this.element)
            return;
        element_1.addCSSStyles(this.element, {
            color: !this.isSwitch ? (_a = this.color, (_a !== null && _a !== void 0 ? _a : null)) : (_c = (_b = this.switchColor, (_b !== null && _b !== void 0 ? _b : this.color)), (_c !== null && _c !== void 0 ? _c : null)),
            backgroundColor: !this.isSwitch ? (_d = this.backgroundColor, (_d !== null && _d !== void 0 ? _d : null)) : (_f = (_e = this.switchBackgroundColor, (_e !== null && _e !== void 0 ? _e : this.backgroundColor)), (_f !== null && _f !== void 0 ? _f : null))
        });
        if (this.svgIcons[1]) {
            if (!this.isSwitch) {
                this.element.replaceChild(this.svgIcons[1], this.svgIcons[0]);
            }
            else {
                this.element.replaceChild(this.svgIcons[0], this.svgIcons[1]);
            }
        }
        this._isSwitch = !this._isSwitch;
    };
    __decorate([
        property_1.validator(validator_1.checkNoEmptyOrNull)
    ], UIIcon.prototype, "icon", void 0);
    __decorate([
        property_1.validator(validator_1.checkColor, undefined)
    ], UIIcon.prototype, "color", void 0);
    __decorate([
        property_1.validator(validator_1.checkColor, undefined)
    ], UIIcon.prototype, "backgroundColor", void 0);
    __decorate([
        property_1.validator(validator_1.checkBoolean)
    ], UIIcon.prototype, "disabled", void 0);
    __decorate([
        property_1.validator(validator_1.checkBoolean)
    ], UIIcon.prototype, "visible", void 0);
    __decorate([
        property_1.validator(validator_1.checkPstNumber, [validator_1.checkMin, 12])
    ], UIIcon.prototype, "size", void 0);
    __decorate([
        property_1.validator(validator_1.checkPstNumber, undefined)
    ], UIIcon.prototype, "width", void 0);
    __decorate([
        property_1.validator(validator_1.checkNoEmptyOrNull, undefined)
    ], UIIcon.prototype, "hoverClass", void 0);
    __decorate([
        property_1.validator(validator_1.checkFunction, undefined)
    ], UIIcon.prototype, "handler", void 0);
    __decorate([
        property_1.validator(validator_1.checkNoEmptyOrNull, undefined)
    ], UIIcon.prototype, "switchIcon", void 0);
    __decorate([
        property_1.validator(validator_1.checkColor, undefined)
    ], UIIcon.prototype, "switchColor", void 0);
    __decorate([
        property_1.validator(validator_1.checkColor, undefined)
    ], UIIcon.prototype, "switchBackgroundColor", void 0);
    __decorate([
        property_1.validator(validator_1.checkFunction, undefined)
    ], UIIcon.prototype, "switchHandler", void 0);
    return UIIcon;
}(__1.Component));
exports.UIIcon = UIIcon;


/***/ }),

/***/ "./app/component/ui-window/index.ts":
/*!******************************************!*\
  !*** ./app/component/ui-window/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! ../ */ "./app/component/index.ts");
var const_1 = __webpack_require__(/*! ../../const */ "./app/const/index.ts");
var contract_1 = __webpack_require__(/*! ../../contract */ "./app/contract/index.ts");
var property_1 = __webpack_require__(/*! ../../core/decorator/property */ "./app/core/decorator/property/index.ts");
var element_1 = __webpack_require__(/*! ../../core/helper/element */ "./app/core/helper/element/index.ts");
var object_1 = __webpack_require__(/*! ../../core/helper/object */ "./app/core/helper/object/index.ts");
var string_1 = __webpack_require__(/*! ../../core/helper/string */ "./app/core/helper/string/index.ts");
var validator_1 = __webpack_require__(/*! ../../core/validator */ "./app/core/validator/index.ts");
var helper_1 = __webpack_require__(/*! ../../helper */ "./app/helper/index.ts");
var ui_action_bar_1 = __webpack_require__(/*! ../ui-action-bar */ "./app/component/ui-action-bar/index.ts");
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(options) {
        var _a;
        var _b, _c;
        var _this = _super.call(this, options) || this;
        _this.width = _this.readGlobalValue("windowOption/width");
        _this.height = _this.readGlobalValue("windowOption/height");
        _this.minWidth = _this.readGlobalValue("windowOption/minWidth");
        _this.minHeight = _this.readGlobalValue("windowOption/minHeight");
        _this.maxWidth = _this.readGlobalValue("windowOption/maxWidth");
        _this.maxHeight = _this.readGlobalValue("windowOption/maxHeight");
        _this.left = 0;
        _this.top = 0;
        _this.border = _this.readGlobalValue("windowOption/border");
        _this.boxShadow = _this.readGlobalValue("windowOption/boxShadow");
        _this.animate = _this.readGlobalValue("windowOption/animate");
        _this.backgroundColor = _this.readGlobalValue("windowOption/backgroundColor");
        _this.zIndex = _this.entry.zIndex;
        _this.actionBar = _this.readGlobalValue("windowOption/actionBar");
        _this._status = "original";
        _this.eventMessage = {
            target: _this
        };
        _this.id = (_b = options) === null || _b === void 0 ? void 0 : _b.id;
        _this.readOptions({
            width: _this.width,
            height: _this.height,
            maxWidth: _this.maxWidth,
            maxHeight: _this.maxHeight,
            minWidth: _this.minWidth,
            minHeight: _this.minHeight,
            border: _this.border,
            boxShadow: _this.boxShadow,
            backgroundColor: _this.backgroundColor,
            animate: _this.animate,
            actionBar: _this.actionBar
        });
        _this.width = Math.max(_this.minWidth, _this.width);
        _this.width = Math.min(_this.maxWidth, _this.width);
        _this.height = Math.max(_this.minHeight, _this.height);
        _this.height = Math.min(_this.maxHeight, _this.height);
        _a = __read(helper_1.convertDirection(_this.width, _this.height, (_c = options) === null || _c === void 0 ? void 0 : _c.direction), 2), _this.left = _a[0], _this.top = _a[1];
        return _this;
    }
    Object.defineProperty(UIWindow.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "lastStatus", {
        get: function () {
            return this._lastStatus;
        },
        enumerable: true,
        configurable: true
    });
    UIWindow.prototype.createView = function () {
        var _a;
        var element = this._element = element_1.createDivElement(this.id);
        element_1.addCSSClasses(element, "window", "flex-box", "col-direction", this.animate !== false ? "animate" : undefined, this.animate !== false ? string_1.stringFormat(const_1.ANIMATE_SHOW, this.animate) : undefined);
        element_1.addCSSStyles(element, {
            backgroundColor: (_a = this.backgroundColor, (_a !== null && _a !== void 0 ? _a : null)),
            zIndex: "" + this.zIndex,
            width: this.width + "px",
            height: this.height + "px",
            maxWidth: this.maxWidth !== innerWidth ? this.maxWidth + "px" : null,
            maxHeight: this.maxHeight !== innerHeight ? this.maxHeight + "px" : null,
            minWidth: this.minWidth + "px",
            minHeight: this.minHeight + "px",
            left: this.left + "px",
            top: this.top + "px",
            boxShadow: this.boxShadow === false ? null :
                this.boxShadow.offsetX + "px " + this.boxShadow.offsetY + "px " + this.boxShadow.blurRadius + "px " + this.boxShadow.spreadRadius + "px " + this.boxShadow.color,
            border: this.border === false ? null :
                this.border.width + "px " + this.border.style + " " + this.border.color,
            borderRadius: this.border === false ? null :
                this.border.radius + "px"
        });
        if (this.actionBar !== false) {
            var actionBar = new ui_action_bar_1.UIActionBar(this.actionBar);
            element.appendChild(actionBar.createView());
            this.components["actionBar"] = actionBar;
        }
        this.monitorEvent();
        this.monitorCenter.windows.unshift(this);
        return element;
    };
    UIWindow.prototype.monitorEvent = function () {
        var _this = this;
        if (!this.element)
            return;
        this.element.addEventListener("mousedown", function (ev) {
            if (_this.monitorCenter.window === _this)
                return;
            _this.eventBus.broadcast([const_1.WINDOW_FOCUS], _this.eventMessage);
        }, true);
        if (this.animate !== false) {
            this.element.addEventListener("animationend", function (ev) {
                var animateShowName = string_1.stringFormat(const_1.ANIMATE_SHOW, _this.animate);
                if (element_1.hasCSSClass(_this.element, animateShowName)) {
                    element_1.removeCSSClasses(_this.element, animateShowName);
                    _this.eventBus.broadcast([const_1.WINDOW_SHOW], _this.eventMessage);
                }
                var animateDestroyName = string_1.stringFormat(const_1.ANIMATE_DESTROY, _this.animate);
                if (element_1.hasCSSClass(_this.element, animateDestroyName)) {
                    _this.remove();
                }
            });
            this.element.addEventListener("transitionend", function (ev) {
                var animateMaximizeName = string_1.stringFormat(const_1.ANIMATE_MAXIMIZE, _this.animate);
                if (element_1.hasCSSClass(_this.element, animateMaximizeName)) {
                    element_1.removeCSSClasses(_this.element, animateMaximizeName);
                    element_1.addCSSStyles(_this.element, {
                        boxShadow: "none",
                        border: "none",
                        borderRadius: "0"
                    });
                }
                var animateOriginalName = string_1.stringFormat(const_1.ANIMATE_ORIGINAL, _this.animate);
                if (element_1.hasCSSClass(_this.element, animateOriginalName)) {
                    element_1.removeCSSClasses(_this.element, animateOriginalName);
                }
            });
        }
    };
    UIWindow.prototype.updateZIndex = function (isCreate) {
        if (isCreate === void 0) { isCreate = false; }
        if (isCreate) {
            this.monitorCenter.setWindow(this);
            return;
        }
        if (this.monitorCenter.window === this)
            return;
        if (!this.element)
            return;
        this.zIndex = this.entry.zIndex;
        element_1.addCSSStyles(this.element, {
            zIndex: "" + this.zIndex
        });
        this.monitorCenter.setWindow(this);
        object_1.arraySetToFirst(this.monitorCenter.windows, this);
    };
    UIWindow.prototype.attracting = function () {
        var _this = this;
        if (!this.element)
            return;
        var timer = null;
        var frequency = 10;
        var duration = 60;
        if (this.boxShadow !== false) {
            var boxShadowStr_1 = this.boxShadow.offsetX + "px " + this.boxShadow.offsetY + "px {0}px " + this.boxShadow.spreadRadius + "px " + this.boxShadow.color;
            __spread(Array(frequency).keys()).forEach(function (item) {
                timer = setTimeout(function () {
                    element_1.addCSSStyles(_this.element, {
                        boxShadow: item % 2 === 0
                            ? string_1.stringFormat(boxShadowStr_1, _this.boxShadow.blurRadius)
                            : string_1.stringFormat(boxShadowStr_1, _this.boxShadow.blurRadius / 2)
                    });
                }, item * duration);
            });
        }
    };
    UIWindow.prototype.destroy = function () {
        if (!this.element)
            return;
        if (this.animate !== false) {
            element_1.addCSSClasses(this.element, string_1.stringFormat(const_1.ANIMATE_DESTROY, this.animate));
        }
        else
            this.remove();
    };
    UIWindow.prototype.remove = function () {
        if (!this.element)
            return;
        element_1.removeHTMLElement(this.element);
        object_1.arrayRemove(this.monitorCenter.windows, this);
        if (this.monitorCenter.windows.length > 0) {
            var focusWindow = this.monitorCenter.windows[0];
            this.eventBus.broadcast([const_1.WINDOW_FOCUS], {
                target: focusWindow
            });
            var searchs = this.monitorCenter.windows.filter(function (win) {
                return win.status === "maximize";
            });
            if (searchs.length === 0)
                element_1.removeCSSClasses(document.body, "disable-scroll");
        }
        else
            element_1.removeCSSClasses(document.body, "disable-scroll");
    };
    UIWindow.prototype.restore = function () {
        if (!this.element)
            return;
        if (this.lastStatus === undefined)
            return;
        if (this.lastStatus === "maximize") {
            this.eventBus.broadcast([const_1.WINDOW_MAXIMIZE], this.eventMessage);
        }
        else if (this.lastStatus === "original") {
            if (this.animate !== false) {
                element_1.addCSSClasses(this.element, string_1.stringFormat(const_1.ANIMATE_ORIGINAL, this.animate));
            }
            element_1.addCSSStyles(this.element, {
                width: this.width + "px",
                height: this.height + "px",
                left: this.left + "px",
                top: this.top + "px",
                boxShadow: this.boxShadow === false ? null :
                    this.boxShadow.offsetX + "px " + this.boxShadow.offsetY + "px " + this.boxShadow.blurRadius + "px " + this.boxShadow.spreadRadius + "px " + this.boxShadow.color,
                border: this.border === false ? null :
                    this.border.width + "px " + this.border.style + " " + this.border.color,
                borderRadius: this.border === false ? null :
                    this.border.radius + "px"
            });
            this._lastStatus = this._status;
            this._status = "original";
        }
    };
    UIWindow.prototype.maximize = function () {
        if (!this.element)
            return;
        if (this._status === "maximize")
            return;
        element_1.addCSSClasses(document.body, "disable-scroll");
        if (this.animate !== false) {
            element_1.addCSSClasses(this.element, string_1.stringFormat(const_1.ANIMATE_MAXIMIZE, this.animate));
        }
        element_1.addCSSStyles(this.element, {
            top: "0",
            left: "0",
            width: innerWidth + "px",
            height: innerHeight + "px",
            boxShadow: this.animate !== false ? null : "none",
            border: this.animate !== false ? null : "none",
            borderRadius: this.animate !== false ? null : "0"
        });
        this._lastStatus = this._status;
        this._status = "maximize";
    };
    __decorate([
        property_1.validator(validator_1.checkNoEmptyOrNull)
    ], UIWindow.prototype, "id", void 0);
    __decorate([
        property_1.validator(validator_1.checkPstNumber)
    ], UIWindow.prototype, "width", void 0);
    __decorate([
        property_1.validator(validator_1.checkPstNumber)
    ], UIWindow.prototype, "height", void 0);
    __decorate([
        property_1.validator(validator_1.checkPstNumber)
    ], UIWindow.prototype, "minWidth", void 0);
    __decorate([
        property_1.validator(validator_1.checkPstNumber)
    ], UIWindow.prototype, "minHeight", void 0);
    __decorate([
        property_1.validator(validator_1.checkPstNumber)
    ], UIWindow.prototype, "maxWidth", void 0);
    __decorate([
        property_1.validator(validator_1.checkPstNumber)
    ], UIWindow.prototype, "maxHeight", void 0);
    __decorate([
        property_1.validator(validator_1.checkPstNumber)
    ], UIWindow.prototype, "left", void 0);
    __decorate([
        property_1.validator(validator_1.checkPstNumber)
    ], UIWindow.prototype, "top", void 0);
    __decorate([
        property_1.validator.apply(void 0, __spread(contract_1.BorderOptionContract))
    ], UIWindow.prototype, "border", void 0);
    __decorate([
        property_1.validator.apply(void 0, __spread(contract_1.BoxShadowOptionContract))
    ], UIWindow.prototype, "boxShadow", void 0);
    __decorate([
        property_1.validator([validator_1.checkIn, "zoom"], false)
    ], UIWindow.prototype, "animate", void 0);
    __decorate([
        property_1.validator(validator_1.checkColor, undefined)
    ], UIWindow.prototype, "backgroundColor", void 0);
    __decorate([
        property_1.validator(validator_1.checkPstInt)
    ], UIWindow.prototype, "zIndex", void 0);
    __decorate([
        property_1.validator.apply(void 0, __spread(contract_1.UIActionBarOptionContract))
    ], UIWindow.prototype, "actionBar", void 0);
    return UIWindow;
}(__1.Component));
exports.UIWindow = UIWindow;


/***/ }),

/***/ "./app/const/index.ts":
/*!****************************!*\
  !*** ./app/const/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BorderStyleOptional;
(function (BorderStyleOptional) {
    BorderStyleOptional["DOTTED"] = "dotted";
    BorderStyleOptional["DASHED"] = "dashed";
    BorderStyleOptional["SOLID"] = "solid";
    BorderStyleOptional["DOUBLE"] = "double";
})(BorderStyleOptional = exports.BorderStyleOptional || (exports.BorderStyleOptional = {}));
var AnimationOptional;
(function (AnimationOptional) {
    AnimationOptional["ZOOM"] = "zoom";
})(AnimationOptional = exports.AnimationOptional || (exports.AnimationOptional = {}));
var DirectionOptional;
(function (DirectionOptional) {
    DirectionOptional["CENTER"] = "center";
    DirectionOptional["TOP_CENTER"] = "top-center";
    DirectionOptional["BOTTOM_CENTER"] = "bottom-center";
    DirectionOptional["LEFT_TOP"] = "left-top";
    DirectionOptional["LEFT_MIDDLE"] = "left-middle";
    DirectionOptional["LEFT_BOTTOM"] = "left-bottom";
    DirectionOptional["RIGHT_TOP"] = "right-top";
    DirectionOptional["RIGHT_MIDDLE"] = "right-middle";
    DirectionOptional["RIGHT_BOTTOM"] = "right-bottom";
})(DirectionOptional = exports.DirectionOptional || (exports.DirectionOptional = {}));
var WindowStateOptional;
(function (WindowStateOptional) {
    WindowStateOptional["ORIGINAL"] = "original";
    WindowStateOptional["MAXIMIZE"] = "maximize";
    WindowStateOptional["MINIMIZE"] = "minimize";
})(WindowStateOptional = exports.WindowStateOptional || (exports.WindowStateOptional = {}));
var AlignOptional;
(function (AlignOptional) {
    AlignOptional["LEFT"] = "left";
    AlignOptional["CENTER"] = "center";
    AlignOptional["RIGHT"] = "right";
})(AlignOptional = exports.AlignOptional || (exports.AlignOptional = {}));
exports.WINDOW_CREATE = "window:create";
exports.WINDOW_FOCUS = "window:focus";
exports.WINDOW_SHOW = "window:show";
exports.WINDOW_EXIST = "window:exist";
exports.WINDOW_RESTORE = "window:restore";
exports.WINDOW_MAXIMIZE = "window:maximize";
exports.WINDOW_MINIMIZE = "window:minimize";
exports.WINDOW_DESTROY = "window:destroy";
exports.ANIMATE_SHOW = "animate-{0}-show";
exports.ANIMATE_DESTROY = "animate-{0}-destroy";
exports.ANIMATE_MAXIMIZE = "animate-{0}-maximize";
exports.ANIMATE_ORIGINAL = "animate-{0}-original";


/***/ }),

/***/ "./app/contract/index.ts":
/*!*******************************!*\
  !*** ./app/contract/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __webpack_require__(/*! ../core/validator */ "./app/core/validator/index.ts");
exports.BorderOptionContract = [{
        width: validator_1.checkPstNumber,
        style: [validator_1.checkIn, "dashed", "solid", "double", "dotted"],
        color: validator_1.checkColor,
        radius: validator_1.checkPstInt
    }, false];
exports.BoxShadowOptionContract = [{
        offsetX: validator_1.checkPstNumber,
        offsetY: validator_1.checkPstNumber,
        blurRadius: validator_1.checkPstInt,
        spreadRadius: validator_1.checkPstInt,
        color: validator_1.checkColor
    }, false];
exports.UIIconOptionContract = {
    icon: validator_1.checkNoEmptyOrNull,
    color: validator_1.checkColor,
    backgroundColor: validator_1.checkColor,
    disabled: validator_1.checkBoolean,
    visible: validator_1.checkBoolean,
    size: validator_1.checkPstNumber,
    width: validator_1.checkPstNumber,
    hoverClass: validator_1.checkNoEmptyOrNull,
    handler: validator_1.checkFunction,
    switchIcon: validator_1.checkNoEmptyOrNull,
    switchColor: validator_1.checkColor,
    switchBackgroundColor: validator_1.checkColor,
    switchHandler: validator_1.checkFunction
};
exports.UIActionBarOptionContract = [{
        height: validator_1.checkPstNumber,
        backgroundColor: validator_1.checkColor,
        align: [validator_1.checkIn, "left", "right"],
        color: validator_1.checkColor,
        extra: [exports.UIIconOptionContract, false],
        about: [exports.UIIconOptionContract, false],
        develop: [exports.UIIconOptionContract, false],
        refresh: [exports.UIIconOptionContract, false],
        istop: [exports.UIIconOptionContract, false],
        minimize: [exports.UIIconOptionContract, false],
        maximize: [exports.UIIconOptionContract, false],
        destroy: [exports.UIIconOptionContract, false],
        customize: [[validator_1.checkArrayEach, [validator_1.checkContract, exports.UIIconOptionContract]]]
    }, false];
exports.GlobalUIWindowOptionContract = {
    width: validator_1.checkPstNumber,
    height: validator_1.checkPstNumber,
    minWidth: validator_1.checkPstNumber,
    minHeight: validator_1.checkPstNumber,
    maxWidth: validator_1.checkPstNumber,
    maxHeight: validator_1.checkPstNumber,
    backgroundColor: validator_1.checkColor,
    boxShadow: exports.BoxShadowOptionContract,
    animate: [[validator_1.checkIn, "zoom"], false],
    border: exports.BorderOptionContract,
    actionBar: exports.UIActionBarOptionContract
};


/***/ }),

/***/ "./app/core/decorator/property/index.ts":
/*!**********************************************!*\
  !*** ./app/core/decorator/property/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../../exception */ "./app/core/exception/index.ts");
var object_1 = __webpack_require__(/*! ../../helper/object */ "./app/core/helper/object/index.ts");
var validator_1 = __webpack_require__(/*! ../../validator */ "./app/core/validator/index.ts");
function decorator(propertySetter) {
    if (!validator_1.checkFunction(propertySetter))
        exception_1.parameterInvalid();
    return function (target, propertyKey) {
        var storeKey = "_" + propertyKey.toString() + "_";
        Object.defineProperty(target, propertyKey, {
            get: function () { return this[storeKey]; },
            set: function (newValue) {
                this[storeKey] = propertySetter(newValue, propertyKey, this[storeKey]);
            }
        });
    };
}
function validator() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return decorator(function (newValue, propertyKey, value) {
        if (!validator_1.checkContract.apply(void 0, __spread([newValue], values)))
            exception_1.parameterInvalid();
        if (validator_1.checkJSONObject(newValue))
            return object_1.mergeJSONObject(value, newValue);
        else
            return newValue;
    });
}
exports.validator = validator;


/***/ }),

/***/ "./app/core/event-bus/index.ts":
/*!*************************************!*\
  !*** ./app/core/event-bus/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../exception */ "./app/core/exception/index.ts");
var validator_1 = __webpack_require__(/*! ../validator */ "./app/core/validator/index.ts");
var EventBus = (function () {
    function EventBus() {
        this.messageQueues = {};
    }
    EventBus.Instance = function () {
        var _a;
        return this.instance = (_a = this.instance, (_a !== null && _a !== void 0 ? _a : new EventBus()));
    };
    EventBus.prototype.on = function (key, handler) {
        if (!validator_1.checkNoEmptyOrNull(key))
            exception_1.parameterInvalid();
        if (!validator_1.checkFunction(handler))
            exception_1.parameterInvalid();
        if (this.messageQueues.hasOwnProperty(key)) {
            var keyHandler = this.messageQueues[key];
            if (validator_1.checkFunction(keyHandler)) {
                this.messageQueues[key] = [keyHandler, handler];
            }
            else if (validator_1.checkArrayEach(keyHandler, validator_1.checkFunction)) {
                this.messageQueues[key] = __spread(keyHandler, [handler]);
            }
        }
        else
            this.messageQueues[key] = handler;
    };
    EventBus.prototype.one = function (key, handler) {
        if (!validator_1.checkNoEmptyOrNull(key))
            exception_1.parameterInvalid();
        if (!validator_1.checkFunction(handler))
            exception_1.parameterInvalid();
        this.messageQueues[key] = handler;
    };
    EventBus.prototype.emit = function (key, message, sync) {
        if (sync === void 0) { sync = false; }
        if (!validator_1.checkNoEmptyOrNull(key))
            exception_1.parameterInvalid();
        if (!validator_1.checkNoNullOrUndefined(message))
            exception_1.parameterInvalid();
        if (!this.messageQueues.hasOwnProperty(key))
            return;
        var keyHandler = this.messageQueues[key];
        if (validator_1.checkFunction(keyHandler)) {
            sync ? keyHandler(message) :
                setTimeout(function () { return keyHandler(message); }, 0);
        }
        else if (validator_1.checkArrayEach(keyHandler, validator_1.checkFunction)) {
            keyHandler.map(function (handler) {
                sync ? handler(message) :
                    setTimeout(function () { return handler(message); }, 0);
            });
        }
    };
    EventBus.prototype.off = function (key) {
        if (!validator_1.checkNoEmptyOrNull(key))
            exception_1.parameterInvalid();
        if (!this.messageQueues.hasOwnProperty(key))
            return;
        delete this.messageQueues[key];
    };
    EventBus.prototype.broadcast = function (keys, message) {
        var e_1, _a;
        if (message === void 0) { message = {}; }
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                this.emit(key, {
                    dataset: message,
                    eventTarget: {
                        name: key,
                        timestamp: new Date().valueOf()
                    }
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return EventBus;
}());
exports.EventBus = EventBus;


/***/ }),

/***/ "./app/core/exception/index.ts":
/*!*************************************!*\
  !*** ./app/core/exception/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function parameterInvalid(message) {
    if (message === void 0) { message = ""; }
    throw new Error("Invalid parameter" + message + ".");
}
exports.parameterInvalid = parameterInvalid;


/***/ }),

/***/ "./app/core/helper/element/index.ts":
/*!******************************************!*\
  !*** ./app/core/helper/element/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../../exception */ "./app/core/exception/index.ts");
var validator_1 = __webpack_require__(/*! ../../validator */ "./app/core/validator/index.ts");
exports.PREFIX = "layx-";
function addCSSStyles(element, cssStyles) {
    var _a;
    if (!element)
        return;
    for (var cssProp in cssStyles) {
        element.style[cssProp] = (_a = cssStyles[cssProp], (_a !== null && _a !== void 0 ? _a : null));
    }
}
exports.addCSSStyles = addCSSStyles;
function updateCSSClasses(element, handler) {
    var cssClasses = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        cssClasses[_i - 2] = arguments[_i];
    }
    if (!element)
        return null;
    var elementCSSClasses = element.className.split(/\s+/g);
    cssClasses.forEach(function (cssClass) {
        if (cssClass) {
            var cssClassName = cssClass.indexOf("!") === 0 ? cssClass.substr(1) : exports.PREFIX + cssClass;
            var cssClassIndex = elementCSSClasses.indexOf(cssClassName);
            handler(elementCSSClasses, cssClassIndex, cssClassName);
        }
    });
    element.className = elementCSSClasses.join(" ").trim();
    return element;
}
function addCSSClasses(element) {
    var cssClasses = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        cssClasses[_i - 1] = arguments[_i];
    }
    return updateCSSClasses.apply(void 0, __spread([element, function (elementCSSClasses, cssClassIndex, cssClass) {
            if (!~cssClassIndex) {
                elementCSSClasses.push(cssClass);
            }
        }], cssClasses));
}
exports.addCSSClasses = addCSSClasses;
function removeCSSClasses(element) {
    var cssClasses = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        cssClasses[_i - 1] = arguments[_i];
    }
    if (cssClasses.length === 1 && !hasCSSClass(element, cssClasses[0]))
        return element;
    return updateCSSClasses.apply(void 0, __spread([element, function (elementCSSClasses, cssClassIndex) {
            if (~cssClassIndex) {
                elementCSSClasses.splice(cssClassIndex, 1);
            }
        }], cssClasses));
}
exports.removeCSSClasses = removeCSSClasses;
function hasCSSClass(element, cssClass) {
    if (!element)
        return false;
    var elementCSSClasses = element.className.split(/\s+/g);
    var cssClassName = cssClass.indexOf("!") === 0 ? cssClass.substr(1) : exports.PREFIX + cssClass;
    var index = elementCSSClasses.indexOf(cssClassName);
    return !!~index;
}
exports.hasCSSClass = hasCSSClass;
function createDivElement(id) {
    var element = document.createElement("div");
    if (validator_1.checkString(id)) {
        element.id = exports.PREFIX + id;
    }
    return element;
}
exports.createDivElement = createDivElement;
function createSvgElement(name) {
    if (!validator_1.checkNoEmptyOrNull(name))
        exception_1.parameterInvalid();
    var svgNamespace = "http://www.w3.org/2000/svg";
    var nsNamespace = "http://www.w3.org/1999/xlink";
    var svgElement = document.createElementNS(svgNamespace, "svg");
    var useElement = document.createElementNS(svgNamespace, "use");
    useElement.setAttributeNS(nsNamespace, "xlink:href", "#" + name);
    svgElement.appendChild(useElement);
    return svgElement;
}
exports.createSvgElement = createSvgElement;
function removeHTMLElement(element) {
    if (!element)
        return;
    if (!element.parentElement)
        return;
    element.parentElement.removeChild(element);
}
exports.removeHTMLElement = removeHTMLElement;
function setHoverClass(element, hoverCSSClass) {
    if (!element)
        return;
    if (!validator_1.checkNoEmptyOrNull(hoverCSSClass))
        return;
    element.addEventListener("mouseenter", function (ev) {
        addCSSClasses(element, hoverCSSClass);
    }, true);
    element.addEventListener("mouseleave", function (ev) {
        removeCSSClasses(element, hoverCSSClass);
    }, true);
}
exports.setHoverClass = setHoverClass;


/***/ }),

/***/ "./app/core/helper/object/index.ts":
/*!*****************************************!*\
  !*** ./app/core/helper/object/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../../exception */ "./app/core/exception/index.ts");
var string_1 = __webpack_require__(/*! ../../helper/string */ "./app/core/helper/string/index.ts");
var validator_1 = __webpack_require__(/*! ../../validator */ "./app/core/validator/index.ts");
function cloneJSONObject(source) {
    var newJSONObject = {};
    for (var key in source) {
        var keyValue = source[key];
        newJSONObject[key] = validator_1.checkJSONObject(keyValue)
            ? cloneJSONObject(keyValue) : keyValue;
    }
    return newJSONObject;
}
exports.cloneJSONObject = cloneJSONObject;
function mergeJSONObject(source, dest) {
    var newJSONObject = cloneJSONObject(source);
    for (var key in dest) {
        var keyValue = dest[key];
        newJSONObject[key] = validator_1.checkJSONObject(newJSONObject[key]) && validator_1.checkJSONObject(keyValue)
            ? mergeJSONObject(newJSONObject[key], keyValue) : keyValue;
    }
    return newJSONObject;
}
exports.mergeJSONObject = mergeJSONObject;
function readObject(path, defaultValue, startObject, fixKey) {
    var _a, _b;
    if (!validator_1.checkNoEmptyOrNull(path) || !validator_1.checkJSONObject(startObject))
        exception_1.parameterInvalid();
    path = string_1.removeIllegalCharacter(path);
    if (path.indexOf("/") === -1) {
        if (fixKey) {
            if (validator_1.checkJSONObject(startObject[fixKey]))
                return _a = startObject[fixKey][path], (_a !== null && _a !== void 0 ? _a : defaultValue);
            else
                return defaultValue;
        }
        return _b = startObject[path], (_b !== null && _b !== void 0 ? _b : defaultValue);
    }
    ;
    var keys = path.split("/");
    var keyValue = readObject(keys[0], defaultValue, startObject, fixKey);
    if (!validator_1.checkNoNullOrUndefined(keyValue))
        return defaultValue;
    for (var i = 0; i < keys.length; i++) {
        if (i + 1 >= keys.length)
            break;
        keyValue = readObject(keys[i + 1], defaultValue, keyValue, fixKey);
    }
    return keyValue;
}
exports.readObject = readObject;
function arraySetToFirst(arr, ele) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            arr.splice(i, 1);
            break;
        }
    }
    arr.unshift(ele);
}
exports.arraySetToFirst = arraySetToFirst;
function arrayRemove(arr, ele) {
    arr.splice(arr.indexOf(ele), 1);
}
exports.arrayRemove = arrayRemove;


/***/ }),

/***/ "./app/core/helper/string/index.ts":
/*!*****************************************!*\
  !*** ./app/core/helper/string/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../../exception */ "./app/core/exception/index.ts");
var validator_1 = __webpack_require__(/*! ../../validator */ "./app/core/validator/index.ts");
function removeIllegalCharacter(str) {
    if (!validator_1.checkNoEmptyOrNull(str))
        exception_1.parameterInvalid();
    return str.replace(/[\r\n\t\s]/g, "");
}
exports.removeIllegalCharacter = removeIllegalCharacter;
function stringFormat(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (args.length === 0)
        return str;
    for (var i = 0; i < args.length; i++) {
        str = str.replace(new RegExp("\\{" + i + "\\}", 'gm'), args[i]);
    }
    return str;
}
exports.stringFormat = stringFormat;


/***/ }),

/***/ "./app/core/validator/index.ts":
/*!*************************************!*\
  !*** ./app/core/validator/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../exception */ "./app/core/exception/index.ts");
var string_1 = __webpack_require__(/*! ../helper/string */ "./app/core/helper/string/index.ts");
function checkBaseType(data) {
    var typeNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        typeNames[_i - 1] = arguments[_i];
    }
    return typeNames.indexOf(typeof data) > -1;
}
exports.checkBaseType = checkBaseType;
function checkString(data) {
    return checkBaseType(data, "string");
}
exports.checkString = checkString;
function checkBoolean(data) {
    return checkBaseType(data, "boolean");
}
exports.checkBoolean = checkBoolean;
function checkNumber(data) {
    return checkBaseType(data, "number");
}
exports.checkNumber = checkNumber;
function checkFunction(data) {
    return checkBaseType(data, "function");
}
exports.checkFunction = checkFunction;
function checkFunctionValidator(data) {
    return checkFunction(data) ||
        checkArray(data) && checkFunction(data[0]) ||
        checkArray(data) && checkArray(data[0]) && checkFunction(data[0][0]);
}
exports.checkFunctionValidator = checkFunctionValidator;
function checkValidator(data, functionValidator) {
    var isTrue = true;
    if (checkFunction(functionValidator)) {
        if (!functionValidator(data))
            isTrue = false;
    }
    else if (checkArray(functionValidator) && checkFunction(functionValidator[0])) {
        var _a = __read(functionValidator), validator = _a[0], args = _a.slice(1);
        if (!validator.apply(void 0, __spread([data], args)))
            isTrue = false;
    }
    else if (checkArray(functionValidator) && checkArray(functionValidator[0]) && checkFunction(functionValidator[0][0])) {
        var _b = __read(functionValidator), childValidator = _b[0], values = _b.slice(1);
        if (!checkValidator(data, childValidator) && !checkIn.apply(void 0, __spread([data], values)))
            isTrue = false;
    }
    else
        isTrue = false;
    return isTrue;
}
exports.checkValidator = checkValidator;
function checkArray(data) {
    return Array.isArray(data);
}
exports.checkArray = checkArray;
function checkArrayEach(data, functionValidator) {
    var e_1, _a;
    if (!checkArray(data))
        return false;
    if (!checkFunctionValidator(functionValidator))
        return false;
    var isArrayType = true;
    try {
        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
            var item = data_1_1.value;
            isArrayType = checkValidator(item, functionValidator);
            if (!isArrayType)
                break;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return isArrayType;
}
exports.checkArrayEach = checkArrayEach;
function checkNoNullOrUndefined(data) {
    return data !== undefined && data !== null;
}
exports.checkNoNullOrUndefined = checkNoNullOrUndefined;
function checkObject(data) {
    return checkBaseType(data, "object");
}
exports.checkObject = checkObject;
function checkJSONObject(data) {
    return data !== null &&
        !checkArray(data) &&
        Object.prototype.toString.call(data).toLowerCase() === "[object object]";
}
exports.checkJSONObject = checkJSONObject;
function checkNull(data) {
    return data === null;
}
exports.checkNull = checkNull;
function checkRegExp(data) {
    return data instanceof RegExp;
}
exports.checkRegExp = checkRegExp;
function checkColor(data) {
    data = string_1.removeIllegalCharacter(data);
    var binaryRegExp = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;
    var rgbRegExp = /^rgb\(([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\)$/i;
    var rgbaRegExp = /^rgba\(([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,(1|1.0|0.[0-9])\)$/i;
    return binaryRegExp.test(data) ||
        rgbRegExp.test(data) ||
        rgbaRegExp.test(data) ||
        data === "transparent";
}
exports.checkColor = checkColor;
function checkNoEmptyOrNull(data) {
    return checkString(data)
        && data.length > 0;
}
exports.checkNoEmptyOrNull = checkNoEmptyOrNull;
function checkInt(data) {
    return checkNumber(data) &&
        (/^\-?[0-9]+$/.test("" + data));
}
exports.checkInt = checkInt;
function checkPstInt(data) {
    return checkInt(data)
        && data >= 0;
}
exports.checkPstInt = checkPstInt;
function checkPstNumber(data) {
    return checkNumber(data)
        && data >= 0;
}
exports.checkPstNumber = checkPstNumber;
function checkContains(data, character) {
    if (!checkNoEmptyOrNull(character))
        exception_1.parameterInvalid();
    return checkNoEmptyOrNull(data)
        && data.indexOf(character) > -1;
}
exports.checkContains = checkContains;
function checkIn(data) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return checkBaseType(data, "boolean", "number", "string", "undefined", "object") &&
        values.indexOf(data) > -1;
}
exports.checkIn = checkIn;
function checkMinLength(data, threshold) {
    return checkString(data) &&
        data.length >= threshold;
}
exports.checkMinLength = checkMinLength;
function checkMaxLength(data, threshold) {
    return checkString(data) &&
        data.length <= threshold;
}
exports.checkMaxLength = checkMaxLength;
function checkLength(data, minThreshold, maxThreshold) {
    if (minThreshold >= maxThreshold)
        exception_1.parameterInvalid();
    return checkMinLength(data, minThreshold) &&
        checkMinLength(data, maxThreshold);
}
exports.checkLength = checkLength;
function checkMin(data, threshold) {
    return checkNumber(data) &&
        data >= threshold;
}
exports.checkMin = checkMin;
function checkMax(data, threshold) {
    return checkNumber(data) &&
        data <= threshold;
}
exports.checkMax = checkMax;
function checkRange(data, minThreshold, maxThreshold) {
    if (minThreshold >= maxThreshold)
        exception_1.parameterInvalid();
    return checkMin(data, minThreshold) &&
        checkMax(data, maxThreshold);
}
exports.checkRange = checkRange;
function checkMatch(data, regex) {
    return regex.test(data);
}
exports.checkMatch = checkMatch;
function checkContract(data) {
    var e_2, _a;
    var contracts = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        contracts[_i - 1] = arguments[_i];
    }
    var valueOptions = [];
    var functionValidators = [];
    var objectValidators = [];
    contracts.map(function (item) {
        if (item === null || checkBaseType(item, "string", "bigint", "boolean", "symbol", "undefined"))
            valueOptions.push(item);
        if (checkFunctionValidator(item))
            functionValidators.push(item);
        if (checkJSONObject(item))
            objectValidators.push(item);
    });
    if (checkIn.apply(void 0, __spread([data], valueOptions)))
        return true;
    if (functionValidators.length > 0) {
        var isPassAllFunctionValidator = true;
        try {
            for (var functionValidators_1 = __values(functionValidators), functionValidators_1_1 = functionValidators_1.next(); !functionValidators_1_1.done; functionValidators_1_1 = functionValidators_1.next()) {
                var functionValidator = functionValidators_1_1.value;
                isPassAllFunctionValidator = checkValidator(data, functionValidator);
                if (!isPassAllFunctionValidator)
                    break;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (functionValidators_1_1 && !functionValidators_1_1.done && (_a = functionValidators_1.return)) _a.call(functionValidators_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (isPassAllFunctionValidator)
            return true;
    }
    if (checkJSONObject(data) && objectValidators.length > 0) {
        var _b = __read(objectValidators, 1), firstValidator = _b[0];
        var isPassAllPropValidator = true;
        for (var key in data) {
            var childValues = firstValidator[key];
            if (!childValues)
                continue;
            isPassAllPropValidator = checkContract.apply(void 0, __spread([data[key]], (checkArray(childValues) ? childValues : [childValues])));
            if (!isPassAllPropValidator)
                break;
        }
        return isPassAllPropValidator;
    }
    return false;
}
exports.checkContract = checkContract;


/***/ }),

/***/ "./app/entry/index.ts":
/*!****************************!*\
  !*** ./app/entry/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../asset */ "./app/asset/index.ts");
var ui_window_1 = __webpack_require__(/*! ../component/ui-window */ "./app/component/ui-window/index.ts");
var const_1 = __webpack_require__(/*! ../const */ "./app/const/index.ts");
var contract_1 = __webpack_require__(/*! ../contract */ "./app/contract/index.ts");
var property_1 = __webpack_require__(/*! ../core/decorator/property */ "./app/core/decorator/property/index.ts");
var event_bus_1 = __webpack_require__(/*! ../core/event-bus */ "./app/core/event-bus/index.ts");
var exception_1 = __webpack_require__(/*! ../core/exception */ "./app/core/exception/index.ts");
var validator_1 = __webpack_require__(/*! ../core/validator */ "./app/core/validator/index.ts");
var monitor_1 = __webpack_require__(/*! ../monitor */ "./app/monitor/index.ts");
var Entry = (function () {
    function Entry(options) {
        this.monitorCenter = monitor_1.MonitorCenter.Instance();
        this.eventBus = event_bus_1.EventBus.Instance();
        this.version = "3.0";
        this.startZIndex = 10000000;
        this.windowOption = {
            width: 800,
            height: 600,
            minWidth: 200,
            minHeight: 200,
            maxWidth: innerWidth,
            maxHeight: innerHeight,
            backgroundColor: "#ffffff",
            boxShadow: {
                offsetX: 1,
                offsetY: 1,
                blurRadius: 12,
                spreadRadius: 1,
                color: "rgba(0, 0, 0, 0.2)"
            },
            animate: "zoom",
            border: {
                width: 1,
                style: "solid",
                color: "#d5d5d5",
                radius: 4
            },
            actionBar: {
                height: 30,
                align: "right",
                color: "#000000"
            }
        };
        this._zIndex = this.startZIndex;
        this.handlerOptions(options);
    }
    Object.defineProperty(Entry.prototype, "zIndex", {
        get: function () {
            return this._zIndex = this._zIndex + 2;
        },
        enumerable: true,
        configurable: true
    });
    Entry.Instance = function (options) {
        if (options === void 0) { options = {}; }
        if (!this.instance)
            this.instance = new Entry(options);
        else {
            if (Object.keys(options).length > 0) {
                this.instance.handlerOptions(options);
            }
        }
        ;
        return this.instance;
    };
    Entry.prototype.handlerOptions = function (options) {
        var _a, _b, _c, _d, _e;
        this.startZIndex = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.startZIndex, (_b !== null && _b !== void 0 ? _b : this.startZIndex));
        if ((_c = options) === null || _c === void 0 ? void 0 : _c.startZIndex)
            this._zIndex = this.startZIndex;
        this.windowOption = (_e = (_d = options) === null || _d === void 0 ? void 0 : _d.windowOption, (_e !== null && _e !== void 0 ? _e : this.windowOption));
    };
    Entry.prototype.on = function (eventSetter) {
        if (!validator_1.checkJSONObject(eventSetter))
            return;
        for (var key in eventSetter) {
            var handler = eventSetter[key];
            if (validator_1.checkFunction(handler)) {
                this.eventBus.on(key, handler);
            }
        }
    };
    Entry.prototype.open = function (options) {
        var _a;
        if (!validator_1.checkNoEmptyOrNull((_a = options) === null || _a === void 0 ? void 0 : _a.id))
            exception_1.parameterInvalid();
        var window = this.getWindow(options.id);
        if (window) {
            this.eventBus.broadcast([const_1.WINDOW_FOCUS, const_1.WINDOW_EXIST], {
                target: window
            });
            return;
        }
        var fragment = document.createDocumentFragment();
        var uiWindow = new ui_window_1.UIWindow(options);
        var uiWindowElement = uiWindow.createView();
        fragment.appendChild(uiWindowElement);
        document.body.appendChild(uiWindowElement);
        this.eventBus.broadcast([const_1.WINDOW_CREATE, const_1.WINDOW_FOCUS], {
            target: uiWindow,
            created: true
        });
    };
    Entry.prototype.getWindow = function (id) {
        if (!validator_1.checkNoEmptyOrNull(id))
            exception_1.parameterInvalid();
        var searchs = this.monitorCenter.windows.filter(function (win) {
            return win.id === id;
        });
        return searchs.length > 0 ? searchs[0] : null;
    };
    Entry.prototype.triggerWindowOperator = function (id, eventKey) {
        if (!validator_1.checkNoEmptyOrNull(id))
            exception_1.parameterInvalid();
        var window = this.getWindow(id);
        if (!window)
            return;
        this.eventBus.broadcast([eventKey], {
            target: window
        });
    };
    Entry.prototype.destroy = function (id) {
        this.triggerWindowOperator(id, const_1.WINDOW_DESTROY);
    };
    Entry.prototype.maximize = function (id) {
        this.triggerWindowOperator(id, const_1.WINDOW_MAXIMIZE);
    };
    Entry.prototype.focus = function (id) {
        this.triggerWindowOperator(id, const_1.WINDOW_FOCUS);
    };
    Entry.prototype.restore = function (id) {
        this.triggerWindowOperator(id, const_1.WINDOW_RESTORE);
    };
    __decorate([
        property_1.validator(validator_1.checkPstInt, [validator_1.checkMin, 1000])
    ], Entry.prototype, "startZIndex", void 0);
    __decorate([
        property_1.validator(contract_1.GlobalUIWindowOptionContract)
    ], Entry.prototype, "windowOption", void 0);
    return Entry;
}());
exports.Entry = Entry;


/***/ }),

/***/ "./app/helper/index.ts":
/*!*****************************!*\
  !*** ./app/helper/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../core/exception */ "./app/core/exception/index.ts");
var validator_1 = __webpack_require__(/*! ../core/validator */ "./app/core/validator/index.ts");
function convertDirection(width, height, directionOrCoord) {
    if (!validator_1.checkPstNumber(width) || !validator_1.checkPstNumber(height))
        exception_1.parameterInvalid();
    if (directionOrCoord === undefined)
        return [(innerWidth - width) / 2, (innerHeight - height) / 2];
    if (validator_1.checkArrayEach(directionOrCoord, validator_1.checkPstNumber)) {
        if (directionOrCoord.length !== 2)
            exception_1.parameterInvalid();
        return [directionOrCoord[0], directionOrCoord[1]];
    }
    switch (directionOrCoord) {
        case "center":
            return [(innerWidth - width) / 2, (innerHeight - height) / 2];
        case "top-center":
            return [(innerWidth - width) / 2, 0];
        case "bottom-center":
            return [(innerWidth - width) / 2, innerHeight - height];
        case "left-top":
            return [0, 0];
        case "left-middle":
            return [0, (innerHeight - height) / 2];
        case "left-bottom":
            return [0, innerHeight - height];
        case "right-top":
            return [innerWidth - width, 0];
        case "right-middle":
            return [innerWidth - width, (innerHeight - height) / 2];
        case "right-bottom":
            return [innerWidth - width, innerHeight - height];
        default:
            exception_1.parameterInvalid();
    }
}
exports.convertDirection = convertDirection;


/***/ }),

/***/ "./app/index.ts":
/*!**********************!*\
  !*** ./app/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var entry_1 = __webpack_require__(/*! ./entry */ "./app/entry/index.ts");
var monitor_1 = __webpack_require__(/*! ./monitor */ "./app/monitor/index.ts");
exports.default = (function overt() {
    var entry = entry_1.Entry.Instance();
    var monitorCenter = monitor_1.MonitorCenter.Instance();
    var overt = function (options) {
        entry_1.Entry.Instance(options);
    };
    overt.version = entry.version;
    Object.defineProperties(overt, {
        window: { get: function () { return monitorCenter.window; } },
        windows: { get: function () { return monitorCenter.windows; } }
    });
    overt.on = entry.on.bind(entry);
    overt.open = entry.open.bind(entry);
    overt.getWindow = entry.getWindow.bind(entry);
    overt.destroy = entry.destroy.bind(entry);
    overt.maximize = entry.maximize.bind(entry);
    overt.focus = entry.focus.bind(entry);
    overt.restore = entry.restore.bind(entry);
    return overt;
})();


/***/ }),

/***/ "./app/monitor/index.ts":
/*!******************************!*\
  !*** ./app/monitor/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../const */ "./app/const/index.ts");
var event_bus_1 = __webpack_require__(/*! ../core/event-bus */ "./app/core/event-bus/index.ts");
var element_1 = __webpack_require__(/*! ../core/helper/element */ "./app/core/helper/element/index.ts");
var MonitorCenter = (function () {
    function MonitorCenter() {
        this.eventBus = event_bus_1.EventBus.Instance();
        this._windows = [];
        this._window = null;
        document.addEventListener("DOMContentLoaded", function () {
            if (!document.body.id) {
                document.body.id = element_1.PREFIX + "container";
            }
        });
        this.eventBus.on(const_1.WINDOW_CREATE, function (message) {
        });
        this.eventBus.on(const_1.WINDOW_FOCUS, function (message) {
            var _a, _b;
            var window = message.dataset.target;
            window.updateZIndex((_b = (_a = message.dataset) === null || _a === void 0 ? void 0 : _a.created, (_b !== null && _b !== void 0 ? _b : false)));
        });
        this.eventBus.on(const_1.WINDOW_EXIST, function (message) {
            var window = message.dataset.target;
            window.attracting();
        });
        this.eventBus.on(const_1.WINDOW_MAXIMIZE, function (message) {
            var window = message.dataset.target;
            window.maximize();
        });
        this.eventBus.on(const_1.WINDOW_RESTORE, function (message) {
            var window = message.dataset.target;
            window.restore();
        });
        this.eventBus.on(const_1.WINDOW_DESTROY, function (message) {
            var window = message.dataset.target;
            window.destroy();
        });
    }
    Object.defineProperty(MonitorCenter.prototype, "windows", {
        get: function () {
            return this._windows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonitorCenter.prototype, "window", {
        get: function () {
            return this._window;
        },
        enumerable: true,
        configurable: true
    });
    MonitorCenter.Instance = function () {
        var _a;
        return this.instance = (_a = this.instance, (_a !== null && _a !== void 0 ? _a : new MonitorCenter()));
    };
    MonitorCenter.prototype.setWindow = function (window) {
        this._window = window;
    };
    return MonitorCenter;
}());
exports.MonitorCenter = MonitorCenter;


/***/ }),

/***/ "./node_modules/svg-baker-runtime/browser-symbol.js":
/*!**********************************************************!*\
  !*** ./node_modules/svg-baker-runtime/browser-symbol.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js":
/*!************************************************************************!*\
  !*** ./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = deepmerge(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

/**
 * @param {*} arrayLike
 * @return {Array}
 */
var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var browser = {
  isChrome: function () { return /chrome/i.test(navigator.userAgent); },
  isFirefox: function () { return /firefox/i.test(navigator.userAgent); },

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: function () { return /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent); },
  isEdge: function () { return /edge/i.test(navigator.userAgent); }
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
 * This trick will trigger IE to read and use any existing SVG <style> tags.
 * @see https://github.com/iconic/SVGInjector/issues/23
 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
 *
 * @param {Element} node DOM Element to search <style> tags in
 * @return {Array<HTMLStyleElement>}
 */
var evalStylesIEWorkaround = function (node) {
  var updatedNodes = [];

  arrayFrom(node.querySelectorAll('style'))
    .forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

  return updatedNodes;
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(new RegExp(escapeRegExp(startsWithEncoded), 'g'), replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, deepmerge(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    // After sprite mounted
    emitter.on(Events.MOUNT, function (spriteNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode);
      }
    });

    // After symbol mounted into sprite
    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode);
      }

      if (browser.isIE() || browser.isEdge()) {
        evalStylesIEWorkaround(symbolNode);
      }
    });
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
      config.locationChangeAngularEmitter = 'angular' in window;
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox();
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @fires Events#SYMBOL_MOUNT
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var sprite = this;
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(sprite.node);
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    }

    return isNewSymbol;
  };

  /**
   * Attach to existing DOM node
   * @param {string|Element} target
   * @return {Element|null} attached DOM Element. null if node to attach not found.
   */
  BrowserSprite.prototype.attach = function attach (target) {
    var this$1 = this;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    /** @type Element */
    var node = typeof target === 'string' ? document.querySelector(target) : target;
    sprite.node = node;

    // Already added symbols needs to be mounted
    this.symbols.forEach(function (symbol) {
      symbol.mount(sprite.node);
      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    });

    // Create symbols from existing DOM nodes, add and mount them
    arrayFrom(node.querySelectorAll('symbol'))
      .forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @fires Events#MOUNT
   * @param {string|Element} [target]
   * @param {boolean} [prepend=false]
   * @return {Element|null} rendered sprite node. null if mount node not found.
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( target === void 0 ) target = this.config.mountTo;
    if ( prepend === void 0 ) prepend = false;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
    var node = sprite.render();
    this.node = node;

    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0]);
    } else {
      mountNode.appendChild(node);
    }

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var spriteNodeId = '__SVG_SPRITE_NODE__';
var spriteGlobalVarName = '__SVG_SPRITE__';
var isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
var sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({ attrs: { id: spriteNodeId } });
  window[spriteGlobalVarName] = sprite;
}

var loadSprite = function () {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  var existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

var sprite$1 = sprite;

return sprite$1;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9hc3NldC9zdHlsZS9hY3Rpb24tYmFyLmNzcz8yYWI2Iiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvYW5pbWF0ZS5jc3M/YTI5YSIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2Fzc2V0L3N0eWxlL2NvbW1vbi5jc3M/NGRlMyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2Fzc2V0L3N0eWxlL3N2Zy5jc3M/YWQ4ZCIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2Fzc2V0L3N0eWxlL3dpbmRvdy5jc3M/YmI0MyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2Fzc2V0L3N2Zy9kZXN0cm95LnN2ZyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2Fzc2V0L3N2Zy9leHRyYS5zdmciLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9hc3NldC9zdmcvbWF4aW1pemUuc3ZnIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3ZnL21pbmltaXplLnN2ZyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2Fzc2V0L3N2Zy9yZXN0b3JlLnN2ZyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvbXBvbmVudC9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvbXBvbmVudC91aS1hY3Rpb24tYmFyL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29tcG9uZW50L3VpLWljb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb21wb25lbnQvdWktd2luZG93L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29uc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb250cmFjdC9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9ldmVudC1idXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2V4Y2VwdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvcmUvaGVscGVyL2VsZW1lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2hlbHBlci9vYmplY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2hlbHBlci9zdHJpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL3ZhbGlkYXRvci9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2VudHJ5L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvaGVscGVyL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9tb25pdG9yL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vbGF5eC8uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzIiwid2VicGFjazovL2xheXgvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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K0JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJsYXl4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGF5eFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsYXl4XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9pbmRleC50c1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZS9jb21tb24uY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlL3N2Zy5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUvd2luZG93LmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS9hbmltYXRlLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS9hY3Rpb24tYmFyLmNzcyc7XHJcblxyXG5pbXBvcnQgJy4vc3ZnL2Rlc3Ryb3kuc3ZnJztcclxuaW1wb3J0ICcuL3N2Zy9leHRyYS5zdmcnO1xyXG5pbXBvcnQgJy4vc3ZnL21heGltaXplLnN2Zyc7XHJcbmltcG9ydCAnLi9zdmcvbWluaW1pemUuc3ZnJztcclxuaW1wb3J0ICcuL3N2Zy9yZXN0b3JlLnN2Zyc7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImRlc3Ryb3lcIixcbiAgXCJ1c2VcIjogXCJkZXN0cm95LXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCBjbGFzcz1cXFwiaWNvblxcXCIgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgaWQ9XFxcImRlc3Ryb3lcXFwiPjxkZWZzPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD1cXFwiTTkzMy44OTI1NDgxOSAxMzkuNzE2MDYzNDhMODg0LjIzMTI5Mjc5IDkwLjA4OTkwMzYzIDUxMS45NjQ5MDM2MyA0NjIuMzkxMzg4MzQgMTQwLjQwMDQ0MTEzIDkwLjgyNjkyNTgzIDkwLjg0NDQ3NDAzIDE0MC4zNDc3OTY1NiA0NjIuNDA4OTM2NTMgNTExLjkxMjI1OTA3IDkwLjEwNzQ1MTgxIDg4NC4yMTM3NDQ2IDEzOS43MzM2MTE2NiA5MzMuODc1IDUxMi4wMzUwOTYzNyA1NjEuNTM4NDE4OTIgODgzLjU5OTU1ODg3IDkzMy4xMDI4ODE0MSA5MzMuMTU1NTI1OTcgODgzLjU4MjAxMDY4IDU2MS41OTEwNjM0NyA1MTIuMDE3NTQ4MTlaXFxcIiBwLWlkPVxcXCI0ODMzXFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanNcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJleHRyYVwiLFxuICBcInVzZVwiOiBcImV4dHJhLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCBjbGFzcz1cXFwiaWNvblxcXCIgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgaWQ9XFxcImV4dHJhXFxcIj48ZGVmcz48c3R5bGUgdHlwZT1cXFwidGV4dC9jc3NcXFwiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9XFxcIk01MTIgMjY5LjI1NDY1NmE5Ny4xMDk3ODg0NSA5Ny4xMDk3ODg0NSAwIDEgMCAwLTE5NC4xNjEzMjI2NyA5Ny4xMDk3ODg0NSA5Ny4xMDk3ODg0NSAwIDAgMCAwIDE5NC4xNjEzMjI2N3pcXFwiIHAtaWQ9XFxcIjQ1OTFcXFwiIC8+PHBhdGggZD1cXFwiTTUxMiA1MTJtLTk3LjEwOTc4ODQ1IDBhOTcuMTA5Nzg4NDUgOTcuMTA5Nzg4NDUgMCAxIDAgMTk0LjIxOTU3NjkgMCA5Ny4xMDk3ODg0NSA5Ny4xMDk3ODg0NSAwIDEgMC0xOTQuMjE5NTc2OSAwWlxcXCIgcC1pZD1cXFwiNDU5MlxcXCIgLz48cGF0aCBkPVxcXCJNNTEyIDk0OC45MDY2NjY2N2E5Ny4xMDk3ODg0NSA5Ny4xMDk3ODg0NSAwIDEgMCAwLTE5NC4yMTk1NzY4OSA5Ny4xMDk3ODg0NSA5Ny4xMDk3ODg0NSAwIDAgMCAwIDE5NC4yMTk1NzY4OXpcXFwiIHAtaWQ9XFxcIjQ1OTNcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcIm1heGltaXplXCIsXG4gIFwidXNlXCI6IFwibWF4aW1pemUtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMjQgMTAyNFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGNsYXNzPVxcXCJpY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiBpZD1cXFwibWF4aW1pemVcXFwiPjxkZWZzPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD1cXFwiTTc1Ljc0OTEyMjI3IDk0OC4yNDczODQ3NUw3NS43NDkxMjIyNyA3NS43NTE0NTEzMWw4NzIuNTAwNTkwMzcgMCAwIDg3Mi40OTU5MzM0NEw3NS43NDkxMjIyNyA5NDguMjQ3Mzg0NzV6TTgzOS4xODc4NjY3NCAxODQuODE0NDYxMTVMMTg0LjgxMjEzMzI2IDE4NC44MTQ0NjExNWwwIDY1NC4zNzU3MzQ2MiA2NTQuMzc1NzM0NjEgMEw4MzkuMTg3ODY2NzQgMTg0LjgxNDQ2MTE1elxcXCIgcC1pZD1cXFwiNDEwMlxcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwibWluaW1pemVcIixcbiAgXCJ1c2VcIjogXCJtaW5pbWl6ZS11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAyNCAxMDI0XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgY2xhc3M9XFxcImljb25cXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIGlkPVxcXCJtaW5pbWl6ZVxcXCI+PGRlZnM+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPVxcXCJNNjUuMjM4ODQgNDU2LjE1MjA0MSA5NTguNzYwMTM3IDQ1Ni4xNTIwNDFsMCAxMTEuNjk1OTE4TDY1LjIzODg0IDU2Ny44NDc5NTkgNjUuMjM4ODQgNDU2LjE1MjA0MXpcXFwiIHAtaWQ9XFxcIjQyMjJcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcInJlc3RvcmVcIixcbiAgXCJ1c2VcIjogXCJyZXN0b3JlLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCBjbGFzcz1cXFwiaWNvblxcXCIgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgaWQ9XFxcInJlc3RvcmVcXFwiPjxkZWZzPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD1cXFwiTTI1NiAyNTZWMTQ5LjMzMzMzM2MwLTU4Ljg4IDQ3LjgyOTMzMy0xMDYuNjY2NjY3IDEwNi42NjY2NjctMTA2LjY2NjY2Nmg1MTJjNTguODggMCAxMDYuNjY2NjY3IDQ3LjgyOTMzMyAxMDYuNjY2NjY2IDEwNi42NjY2NjZ2NTEyYzAgNTguODgtNDcuODI5MzMzIDEwNi42NjY2NjctMTA2LjY2NjY2NiAxMDYuNjY2NjY3aC0xMDYuNjY2NjY3djEwNi42NjY2NjdjMCA1OC44OC00Ny44MjkzMzMgMTA2LjY2NjY2Ny0xMDYuNjY2NjY3IDEwNi42NjY2NjZIMTQ5LjMzMzMzM2MtNTguODggMC0xMDYuNjY2NjY3LTQ3LjgyOTMzMy0xMDYuNjY2NjY2LTEwNi42NjY2NjZWMzYyLjY2NjY2N2MwLTU4Ljg4IDQ3LjgyOTMzMy0xMDYuNjY2NjY3IDEwNi42NjY2NjYtMTA2LjY2NjY2N2gxMDYuNjY2NjY3eiBtMCA4NS4zMzMzMzNIMTQ5LjMzMzMzM2MtMTEuNzMzMzMzIDAtMjEuMzMzMzMzIDkuNi0yMS4zMzMzMzMgMjEuMzMzMzM0djUxMmMwIDExLjczMzMzMyA5LjYgMjEuMzMzMzMzIDIxLjMzMzMzMyAyMS4zMzMzMzNoNTEyYzExLjczMzMzMyAwIDIxLjMzMzMzMy05LjYgMjEuMzMzMzM0LTIxLjMzMzMzM3YtMTA2LjY2NjY2N0gzNjIuNjY2NjY3Yy01OC44OCAwLTEwNi42NjY2NjctNDcuODI5MzMzLTEwNi42NjY2NjctMTA2LjY2NjY2N1YzNDEuMzMzMzMzeiBtODUuMzMzMzMzLTE5MnY1MTJjMCAxMS43MzMzMzMgOS42IDIxLjMzMzMzMyAyMS4zMzMzMzQgMjEuMzMzMzM0aDUxMmMxMS43MzMzMzMgMCAyMS4zMzMzMzMtOS42IDIxLjMzMzMzMy0yMS4zMzMzMzRWMTQ5LjMzMzMzM2MwLTExLjczMzMzMy05LjYtMjEuMzMzMzMzLTIxLjMzMzMzMy0yMS4zMzMzMzNIMzYyLjY2NjY2N2MtMTEuNzMzMzMzIDAtMjEuMzMzMzMzIDkuNi0yMS4zMzMzMzQgMjEuMzMzMzMzelxcXCIgcC1pZD1cXFwiNDM0MlxcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9jb3JlL2V2ZW50LWJ1cyc7XHJcbmltcG9ydCB7IHJlYWRPYmplY3QgfSBmcm9tICcuLi9jb3JlL2hlbHBlci9vYmplY3QnO1xyXG5pbXBvcnQgeyBKU09OT2JqZWN0IH0gZnJvbSAnLi4vY29yZS90eXBlJztcclxuaW1wb3J0IHsgRW50cnkgfSBmcm9tICcuLi9lbnRyeSc7XHJcbmltcG9ydCB7IE1vbml0b3JDZW50ZXIgfSBmcm9tICcuLi9tb25pdG9yJztcclxuaW1wb3J0IHsgQnVpbHRJbkNvbXBvbmVudCB9IGZyb20gJy4uL3R5cGUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUT3B0aW9uIGV4dGVuZHMgSlNPTk9iamVjdD4ge1xyXG4gICAgcHJpdmF0ZSBfX05BTUVfXzogYW55O1xyXG4gICAgcHJvdGVjdGVkIGVudHJ5OiBFbnRyeSA9IEVudHJ5Lkluc3RhbmNlKCk7XHJcbiAgICBwcm90ZWN0ZWQgZXZlbnRCdXM6IEV2ZW50QnVzID0gRXZlbnRCdXMuSW5zdGFuY2UoKTtcclxuICAgIHByb3RlY3RlZCBtb25pdG9yQ2VudGVyOiBNb25pdG9yQ2VudGVyID0gTW9uaXRvckNlbnRlci5JbnN0YW5jZSgpO1xyXG5cclxuICAgIHB1YmxpYyBfY29tcG9uZW50czogQnVpbHRJbkNvbXBvbmVudCA9IHt9O1xyXG4gICAgcHVibGljIGdldCBjb21wb25lbnRzKCk6IEJ1aWx0SW5Db21wb25lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfZWxlbWVudDogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgZWxlbWVudCgpOiBIVE1MRGl2RWxlbWVudCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3B0aW9uczogVE9wdGlvbikgeyB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlYWRHbG9iYWxWYWx1ZShwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55ID0gdW5kZWZpbmVkLCBzdGFydE9iamVjdCA9IHRoaXMuZW50cnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiByZWFkT2JqZWN0PGFueT4ocGF0aCwgZGVmYXVsdFZhbHVlLCBzdGFydE9iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlYWRPcHRpb25zKGtleVZhbHVlOiBKU09OT2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4ga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKFwiOlwiKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICg8YW55PnRoaXMpW2tleV0gPSByZWFkT2JqZWN0KGtleSwga2V5VmFsdWVba2V5XSwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGtleVBhdGggPSBrZXkuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgICAgICAoPGFueT50aGlzKVtrZXlQYXRoWzBdXSA9IHJlYWRPYmplY3Qoa2V5UGF0aFsxXSwga2V5VmFsdWVba2V5XSwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlYWRDb21wb25lbnQ8VCBleHRlbmRzIENvbXBvbmVudDxKU09OT2JqZWN0Pj4ocGF0aDogc3RyaW5nLCBzdGFydE9iamVjdDogQ29tcG9uZW50PEpTT05PYmplY3Q+ID0gdGhpcyk6IFQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gcmVhZE9iamVjdDxUIHwgbnVsbD4ocGF0aCwgbnVsbCwgc3RhcnRPYmplY3QsIFwiY29tcG9uZW50c1wiKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLyc7XHJcbmltcG9ydCB7XHJcbiAgICBBbGlnbk9wdGlvbmFsLCBXSU5ET1dfREVTVFJPWSwgV0lORE9XX01BWElNSVpFLCBXSU5ET1dfTUlOSU1JWkUsIFdJTkRPV19SRVNUT1JFLFxyXG4gICAgV2luZG93U3RhdGVPcHRpb25hbFxyXG59IGZyb20gJy4uLy4uL2NvbnN0JztcclxuaW1wb3J0IHsgVUlJY29uT3B0aW9uQ29udHJhY3QgfSBmcm9tICcuLi8uLi9jb250cmFjdCc7XHJcbmltcG9ydCB7IHZhbGlkYXRvciB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5JztcclxuaW1wb3J0IHsgYWRkQ1NTQ2xhc3NlcywgYWRkQ1NTU3R5bGVzLCBjcmVhdGVEaXZFbGVtZW50IH0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXIvZWxlbWVudCc7XHJcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uLy4uL2NvcmUvdHlwZSc7XHJcbmltcG9ydCB7IGNoZWNrQ29sb3IsIGNoZWNrSW4sIGNoZWNrUHN0TnVtYmVyIH0gZnJvbSAnLi4vLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBDb21wb25lbnRFbGVtZW50LCBVSUFjdGlvbkJhck9wdGlvbiwgVUlJY29uT3B0aW9uLCBXaW5kb3dFdmVudE1lc3NhZ2UgfSBmcm9tICcuLi8uLi90eXBlJztcclxuaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tICcuLi91aS1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVSUljb24gfSBmcm9tICcuLi91aS1pY29uJztcclxuaW1wb3J0IHsgVUlXaW5kb3cgfSBmcm9tICcuLi91aS13aW5kb3cnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJQWN0aW9uQmFyIGV4dGVuZHMgQ29tcG9uZW50PFVJQWN0aW9uQmFyT3B0aW9uPiBpbXBsZW1lbnRzIFVJQ29tcG9uZW50PFVJQWN0aW9uQmFyT3B0aW9uPiB7XHJcbiAgICBwcml2YXRlIGFjdGlvbkJ1dHRvbldpZHRoOiBudW1iZXIgPSA0NTtcclxuICAgIHByaXZhdGUgYWN0aW9uQnV0dG9uSG92ZXJDbGFzczogc3RyaW5nID0gXCJhY3Rpb24tYnV0dG9uLWhvdmVyXCI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFVJQWN0aW9uQmFyT3B0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMucmVhZE9wdGlvbnMoe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBhbGlnbjogdGhpcy5hbGlnbixcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgICAgICAgIG1pbmltaXplOiB0aGlzLm1pbmltaXplLFxyXG4gICAgICAgICAgICBtYXhpbWl6ZTogdGhpcy5tYXhpbWl6ZSxcclxuICAgICAgICAgICAgZGVzdHJveTogdGhpcy5kZXN0cm95XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubW9uaXRvckV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93T3B0aW9uL2FjdGlvbkJhci9oZWlnaHRcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja0NvbG9yLCB1bmRlZmluZWQpXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vYWN0aW9uQmFyL2JhY2tncm91bmRDb2xvclwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKFtjaGVja0luLCBBbGlnbk9wdGlvbmFsLkxFRlQsIEFsaWduT3B0aW9uYWwuUklHSFRdKVxyXG4gICAgcHVibGljIGFsaWduOiBBbGlnbk9wdGlvbmFsID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vYWN0aW9uQmFyL2FsaWduXCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tDb2xvciwgdW5kZWZpbmVkKVxyXG4gICAgcHVibGljIGNvbG9yPzogc3RyaW5nID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vYWN0aW9uQmFyL2NvbG9yXCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoVUlJY29uT3B0aW9uQ29udHJhY3QsIGZhbHNlKVxyXG4gICAgcHVibGljIG1pbmltaXplOiBmYWxzZSB8IFVJSWNvbk9wdGlvbiA9IDxVSUljb25PcHRpb24+e1xyXG4gICAgICAgIGljb246IFwibWluaW1pemVcIixcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICB3aWR0aDogdGhpcy5hY3Rpb25CdXR0b25XaWR0aCxcclxuICAgICAgICBob3ZlckNsYXNzOiB0aGlzLmFjdGlvbkJ1dHRvbkhvdmVyQ2xhc3MsXHJcbiAgICAgICAgaGFuZGxlcjogKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMuYnJvYWRjYXN0KFtXSU5ET1dfTUlOSU1JWkVdLCB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IDxVSVdpbmRvdz50aGlzLm1vbml0b3JDZW50ZXIud2luZG93XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIEB2YWxpZGF0b3IoVUlJY29uT3B0aW9uQ29udHJhY3QsIGZhbHNlKVxyXG4gICAgcHVibGljIG1heGltaXplOiBmYWxzZSB8IFVJSWNvbk9wdGlvbiA9IDxVSUljb25PcHRpb24+e1xyXG4gICAgICAgIGljb246IFwibWF4aW1pemVcIixcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICB3aWR0aDogdGhpcy5hY3Rpb25CdXR0b25XaWR0aCxcclxuICAgICAgICBzd2l0Y2hJY29uOiBcInJlc3RvcmVcIixcclxuICAgICAgICBob3ZlckNsYXNzOiB0aGlzLmFjdGlvbkJ1dHRvbkhvdmVyQ2xhc3MsXHJcbiAgICAgICAgaGFuZGxlcjogKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMuYnJvYWRjYXN0KFtXSU5ET1dfTUFYSU1JWkVdLCB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IDxVSVdpbmRvdz50aGlzLm1vbml0b3JDZW50ZXIud2luZG93XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3dpdGNoSGFuZGxlcjogKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMuYnJvYWRjYXN0KFtXSU5ET1dfUkVTVE9SRV0sIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDogPFVJV2luZG93PnRoaXMubW9uaXRvckNlbnRlci53aW5kb3dcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKFVJSWNvbk9wdGlvbkNvbnRyYWN0LCBmYWxzZSlcclxuICAgIHB1YmxpYyBkZXN0cm95OiBmYWxzZSB8IFVJSWNvbk9wdGlvbiA9IDxVSUljb25PcHRpb24+e1xyXG4gICAgICAgIGljb246IFwiZGVzdHJveVwiLFxyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIHdpZHRoOiB0aGlzLmFjdGlvbkJ1dHRvbldpZHRoLFxyXG4gICAgICAgIGhvdmVyQ2xhc3M6IFwiYWN0aW9uLWRlc3Ryb3ktaG92ZXJcIixcclxuICAgICAgICBoYW5kbGVyOiAoZXYpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudEJ1cy5icm9hZGNhc3QoW1dJTkRPV19ERVNUUk9ZXSwge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiA8VUlXaW5kb3c+dGhpcy5tb25pdG9yQ2VudGVyLndpbmRvd1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIEB2YWxpZGF0b3IoVUlJY29uT3B0aW9uQ29udHJhY3QsIGZhbHNlKVxyXG4gICAgcHVibGljIGV4dHJhOiBmYWxzZSB8IFVJSWNvbk9wdGlvbiA9IDxVSUljb25PcHRpb24+e1xyXG4gICAgICAgIGljb246IFwiZXh0cmFcIixcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgd2lkdGg6IHRoaXMuYWN0aW9uQnV0dG9uV2lkdGgsXHJcbiAgICAgICAgaG92ZXJDbGFzczogdGhpcy5hY3Rpb25CdXR0b25Ib3ZlckNsYXNzLFxyXG4gICAgICAgIGhhbmRsZXI6IChldikgPT4ge1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZVZpZXcoKTogQ29tcG9uZW50RWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQgPSBjcmVhdGVEaXZFbGVtZW50KCk7XHJcbiAgICAgICAgYWRkQ1NTQ2xhc3NlcyhlbGVtZW50LFxyXG4gICAgICAgICAgICBcImFjdGlvbi1iYXJcIixcclxuICAgICAgICAgICAgXCJmbGV4LWJveFwiLFxyXG4gICAgICAgICAgICBcInJvdy1kaXJlY3Rpb25cIik7XHJcblxyXG4gICAgICAgIGFkZENTU1N0eWxlcyhlbGVtZW50LCA8Q1NTU3R5bGVEZWNsYXJhdGlvbj57XHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yID8/IG51bGwsXHJcbiAgICAgICAgICAgIGhlaWdodDogYCR7dGhpcy5oZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yID8/IG51bGwsXHJcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMuYWxpZ24gPT09IEFsaWduT3B0aW9uYWwuTEVGVCA/ICcwJyA6IG51bGwsXHJcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLmFsaWduID09PSBBbGlnbk9wdGlvbmFsLlJJR0hUID8gJzAnIDogbnVsbCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbmxpbmVJY29ucyh0aGlzLmV4dHJhLCB0aGlzLm1pbmltaXplLCB0aGlzLm1heGltaXplLCB0aGlzLmRlc3Ryb3kpO1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUlubGluZUljb25zKC4uLmljb25PcHRpb25zOiBBcnJheTxVSUljb25PcHRpb24gfCBmYWxzZT4pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmFsaWduID09PSBBbGlnbk9wdGlvbmFsLkxFRlQpIGljb25PcHRpb25zID0gaWNvbk9wdGlvbnMucmV2ZXJzZSgpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBpY29uT3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdWlJY29uID0gbmV3IFVJSWNvbihvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdWlJY29uRWxlbWVudCA9IHVpSWNvbi5jcmVhdGVWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICBhZGRDU1NDbGFzc2VzKHVpSWNvbkVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhY3Rpb24tYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYGFjdGlvbi0ke29wdGlvbi5pY29ufWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHVpSWNvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW29wdGlvbi5pY29uXSA9IHVpSWNvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vbml0b3JFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV2ZW50QnVzLm9uKFdJTkRPV19NQVhJTUlaRSwgKG1lc3NhZ2U6IEV2ZW50TWVzc2FnZTxXaW5kb3dFdmVudE1lc3NhZ2U+KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IG1lc3NhZ2UuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RhdHVzID09PSBXaW5kb3dTdGF0ZU9wdGlvbmFsLk1BWElNSVpFKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhpbWl6ZUFjdGlvbiA9IHdpbmRvdy5yZWFkQ29tcG9uZW50PFVJSWNvbj4oXCJhY3Rpb25CYXIvbWF4aW1pemVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF4aW1pemVBY3Rpb24/LmlzU3dpdGNoID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heGltaXplQWN0aW9uPy5jaGFuZ2VTdHlsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRCdXMub24oV0lORE9XX1JFU1RPUkUsIChtZXNzYWdlOiBFdmVudE1lc3NhZ2U8V2luZG93RXZlbnRNZXNzYWdlPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBtZXNzYWdlLmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgICAgICBpZiAod2luZG93Lmxhc3RTdGF0dXMgPT09IFdpbmRvd1N0YXRlT3B0aW9uYWwuTUFYSU1JWkUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1heGltaXplQWN0aW9uID0gd2luZG93LnJlYWRDb21wb25lbnQ8VUlJY29uPihcImFjdGlvbkJhci9tYXhpbWl6ZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXhpbWl6ZUFjdGlvbj8uaXNTd2l0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhpbWl6ZUFjdGlvbj8uY2hhbmdlU3R5bGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vJztcclxuaW1wb3J0IHsgdmFsaWRhdG9yIH0gZnJvbSAnLi4vLi4vY29yZS9kZWNvcmF0b3IvcHJvcGVydHknO1xyXG5pbXBvcnQge1xyXG4gICAgYWRkQ1NTQ2xhc3NlcywgYWRkQ1NTU3R5bGVzLCBjcmVhdGVEaXZFbGVtZW50LCBjcmVhdGVTdmdFbGVtZW50LCBQUkVGSVgsIHNldEhvdmVyQ2xhc3NcclxufSBmcm9tICcuLi8uLi9jb3JlL2hlbHBlci9lbGVtZW50JztcclxuaW1wb3J0IHsgTW91c2VBbmRUb3VjaEV2ZW50IH0gZnJvbSAnLi4vLi4vY29yZS90eXBlJztcclxuaW1wb3J0IHtcclxuICAgIGNoZWNrQm9vbGVhbiwgY2hlY2tDb2xvciwgY2hlY2tGdW5jdGlvbiwgY2hlY2tNaW4sIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tQc3ROdW1iZXJcclxufSBmcm9tICcuLi8uLi9jb3JlL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IENvbXBvbmVudEVsZW1lbnQsIFVJSWNvbk9wdGlvbiB9IGZyb20gJy4uLy4uL3R5cGUnO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gJy4uL3VpLWNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlJY29uIGV4dGVuZHMgQ29tcG9uZW50PFVJSWNvbk9wdGlvbj4gaW1wbGVtZW50cyBVSUNvbXBvbmVudDxVSUljb25PcHRpb24+IHtcclxuICAgIHByaXZhdGUgX2lzU3dpdGNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZ2V0IGlzU3dpdGNoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1N3aXRjaDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc3ZnSWNvbnM6IFtTVkdTVkdFbGVtZW50LCBTVkdTVkdFbGVtZW50P107XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogVUlJY29uT3B0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMuaWNvbiA9IG9wdGlvbnM/Lmljb247XHJcbiAgICAgICAgdGhpcy5yZWFkT3B0aW9ucyh7XHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIHZpc2libGU6IHRoaXMudmlzaWJsZSxcclxuICAgICAgICAgICAgaG92ZXJDbGFzczogdGhpcy5ob3ZlckNsYXNzLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiB0aGlzLmhhbmRsZXIsXHJcbiAgICAgICAgICAgIHN3aXRjaEljb246IHRoaXMuc3dpdGNoSWNvbixcclxuICAgICAgICAgICAgc3dpdGNoQ29sb3I6IHRoaXMuc3dpdGNoQ29sb3IsXHJcbiAgICAgICAgICAgIHN3aXRjaEJhY2tncm91bmRDb2xvcjogdGhpcy5zd2l0Y2hCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgIHN3aXRjaEhhbmRsZXI6IHRoaXMuc3dpdGNoSGFuZGxlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3ZnSWNvbnMgPSBbXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU3ZnSWNvbih0aGlzLmljb24pLFxyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaEljb24gPyB0aGlzLmNyZWF0ZVN2Z0ljb24odGhpcy5zd2l0Y2hJY29uKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja05vRW1wdHlPck51bGwpXHJcbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tDb2xvciwgdW5kZWZpbmVkKVxyXG4gICAgcHVibGljIGNvbG9yPzogc3RyaW5nO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tDb2xvciwgdW5kZWZpbmVkKVxyXG4gICAgcHVibGljIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrQm9vbGVhbilcclxuICAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tCb29sZWFuKVxyXG4gICAgcHVibGljIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIsIFtjaGVja01pbiwgMTJdKVxyXG4gICAgcHVibGljIHNpemU6IG51bWJlciA9IDE0O1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIsIHVuZGVmaW5lZClcclxuICAgIHB1YmxpYyB3aWR0aD86IG51bWJlcjtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrTm9FbXB0eU9yTnVsbCwgdW5kZWZpbmVkKVxyXG4gICAgcHVibGljIGhvdmVyQ2xhc3M/OiBzdHJpbmc7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja0Z1bmN0aW9uLCB1bmRlZmluZWQpXHJcbiAgICBwdWJsaWMgaGFuZGxlcj86IChldjogTW91c2VBbmRUb3VjaEV2ZW50KSA9PiB2b2lkO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tOb0VtcHR5T3JOdWxsLCB1bmRlZmluZWQpXHJcbiAgICBwdWJsaWMgc3dpdGNoSWNvbj86IHN0cmluZztcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrQ29sb3IsIHVuZGVmaW5lZClcclxuICAgIHB1YmxpYyBzd2l0Y2hDb2xvcj86IHN0cmluZztcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrQ29sb3IsIHVuZGVmaW5lZClcclxuICAgIHB1YmxpYyBzd2l0Y2hCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja0Z1bmN0aW9uLCB1bmRlZmluZWQpXHJcbiAgICBwdWJsaWMgc3dpdGNoSGFuZGxlcj86IChldjogTW91c2VBbmRUb3VjaEV2ZW50KSA9PiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVWaWV3KCk6IENvbXBvbmVudEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50ID0gY3JlYXRlRGl2RWxlbWVudCgpO1xyXG5cclxuICAgICAgICBhZGRDU1NDbGFzc2VzKGVsZW1lbnQsXHJcbiAgICAgICAgICAgIFwiaWNvblwiLFxyXG4gICAgICAgICAgICBcImZsZXgtYm94XCIsXHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA/IHVuZGVmaW5lZCA6IFwiYm94LWhpZGRlblwiLFxyXG4gICAgICAgICAgICBcImNlbnRlci1hbGxcIixcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA/IFwiZGlzYWJsZS1pY29uXCIgOiB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICBhZGRDU1NTdHlsZXMoZWxlbWVudCwgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvciA/PyBudWxsLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yID8/IG51bGwsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBgJHt0aGlzLnNpemV9cHhgLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCA/IGAke3RoaXMud2lkdGh9cHhgIDogbnVsbFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ob3ZlckNsYXNzKSB7XHJcbiAgICAgICAgICAgIHNldEhvdmVyQ2xhc3MoZWxlbWVudCwgdGhpcy5ob3ZlckNsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zdmdJY29uc1swXSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldjogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTd2l0Y2gpIHRoaXMuaGFuZGxlciAmJiB0aGlzLmhhbmRsZXIoZXYpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuc3dpdGNoSGFuZGxlciA/IHRoaXMuc3dpdGNoSGFuZGxlcihldikgOiAodGhpcy5oYW5kbGVyICYmIHRoaXMuaGFuZGxlcihldikpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdHlsZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVN2Z0ljb24oaWNvbjogc3RyaW5nKTogU1ZHU1ZHRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNyZWF0ZVN2Z0VsZW1lbnQoaWNvbik7XHJcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgJHtQUkVGSVh9c3ZnYCk7XHJcbiAgICAgICAgcmV0dXJuIHN2Z0VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZVN0eWxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGFkZENTU1N0eWxlcyh0aGlzLmVsZW1lbnQsIDxDU1NTdHlsZURlY2xhcmF0aW9uPntcclxuICAgICAgICAgICAgY29sb3I6ICF0aGlzLmlzU3dpdGNoID8gKHRoaXMuY29sb3IgPz8gbnVsbCkgOiAodGhpcy5zd2l0Y2hDb2xvciA/PyB0aGlzLmNvbG9yID8/IG51bGwpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICF0aGlzLmlzU3dpdGNoID8gKHRoaXMuYmFja2dyb3VuZENvbG9yID8/IG51bGwpIDogKHRoaXMuc3dpdGNoQmFja2dyb3VuZENvbG9yID8/IHRoaXMuYmFja2dyb3VuZENvbG9yID8/IG51bGwpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN2Z0ljb25zWzFdKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1N3aXRjaCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlcGxhY2VDaGlsZCh0aGlzLnN2Z0ljb25zWzFdLCB0aGlzLnN2Z0ljb25zWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZXBsYWNlQ2hpbGQodGhpcy5zdmdJY29uc1swXSwgdGhpcy5zdmdJY29uc1sxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2lzU3dpdGNoID0gIXRoaXMuX2lzU3dpdGNoO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vJztcclxuaW1wb3J0IHtcclxuICAgIEFOSU1BVEVfREVTVFJPWSwgQU5JTUFURV9NQVhJTUlaRSwgQU5JTUFURV9TSE9XLCBBbmltYXRpb25PcHRpb25hbCwgV0lORE9XX0RFU1RST1ksXHJcbiAgICBXSU5ET1dfRk9DVVMsIFdJTkRPV19NQVhJTUlaRSwgV0lORE9XX1JFU1RPUkUsIFdJTkRPV19TSE9XLCBXaW5kb3dTdGF0ZU9wdGlvbmFsLCBBTklNQVRFX09SSUdJTkFMXHJcbn0gZnJvbSAnLi4vLi4vY29uc3QnO1xyXG5pbXBvcnQge1xyXG4gICAgQm9yZGVyT3B0aW9uQ29udHJhY3QsIEJveFNoYWRvd09wdGlvbkNvbnRyYWN0LCBVSUFjdGlvbkJhck9wdGlvbkNvbnRyYWN0XHJcbn0gZnJvbSAnLi4vLi4vY29udHJhY3QnO1xyXG5pbXBvcnQgeyB2YWxpZGF0b3IgfSBmcm9tICcuLi8uLi9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eSc7XHJcbmltcG9ydCB7XHJcbiAgICBhZGRDU1NDbGFzc2VzLCBhZGRDU1NTdHlsZXMsIGNyZWF0ZURpdkVsZW1lbnQsIGhhc0NTU0NsYXNzLCByZW1vdmVDU1NDbGFzc2VzLCByZW1vdmVIVE1MRWxlbWVudFxyXG59IGZyb20gJy4uLy4uL2NvcmUvaGVscGVyL2VsZW1lbnQnO1xyXG5pbXBvcnQgeyBhcnJheVJlbW92ZSwgYXJyYXlTZXRUb0ZpcnN0IH0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXIvb2JqZWN0JztcclxuaW1wb3J0IHsgc3RyaW5nRm9ybWF0IH0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXIvc3RyaW5nJztcclxuaW1wb3J0IHtcclxuICAgIGNoZWNrQ29sb3IsIGNoZWNrSW4sIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tQc3RJbnQsIGNoZWNrUHN0TnVtYmVyXHJcbn0gZnJvbSAnLi4vLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBjb252ZXJ0RGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vaGVscGVyJztcclxuaW1wb3J0IHtcclxuICAgIEJvcmRlck9wdGlvbiwgQm94U2hhZG93T3B0aW9uLCBDb21wb25lbnRFbGVtZW50LCBVSUFjdGlvbkJhck9wdGlvbiwgVUlJY29uT3B0aW9uLFxyXG4gICAgVUlXaW5kb3dPcHRpb24sIFdpbmRvd0V2ZW50TWVzc2FnZVxyXG59IGZyb20gJy4uLy4uL3R5cGUnO1xyXG5pbXBvcnQgeyBVSUFjdGlvbkJhciB9IGZyb20gJy4uL3VpLWFjdGlvbi1iYXInO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gJy4uL3VpLWNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlXaW5kb3cgZXh0ZW5kcyBDb21wb25lbnQ8VUlXaW5kb3dPcHRpb24+IGltcGxlbWVudHMgVUlDb21wb25lbnQ8VUlXaW5kb3dPcHRpb24+IHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBVSVdpbmRvd09wdGlvbikge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucz8uaWQ7XHJcbiAgICAgICAgdGhpcy5yZWFkT3B0aW9ucyh7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogdGhpcy5tYXhXaWR0aCxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLm1heEhlaWdodCxcclxuICAgICAgICAgICAgbWluV2lkdGg6IHRoaXMubWluV2lkdGgsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5taW5IZWlnaHQsXHJcbiAgICAgICAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXIsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogdGhpcy5ib3hTaGFkb3csXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgIGFuaW1hdGU6IHRoaXMuYW5pbWF0ZSxcclxuICAgICAgICAgICAgYWN0aW9uQmFyOiB0aGlzLmFjdGlvbkJhclxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgdGhpcy53aWR0aCk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHRoaXMud2lkdGgpO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGgubWluKHRoaXMubWF4SGVpZ2h0LCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgW3RoaXMubGVmdCwgdGhpcy50b3BdID0gY29udmVydERpcmVjdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgb3B0aW9ucz8uZGlyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrTm9FbXB0eU9yTnVsbClcclxuICAgIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93T3B0aW9uL3dpZHRoXCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvd09wdGlvbi9oZWlnaHRcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyBtaW5XaWR0aDogbnVtYmVyID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vbWluV2lkdGhcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyBtaW5IZWlnaHQ6IG51bWJlciA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93T3B0aW9uL21pbkhlaWdodFwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIG1heFdpZHRoOiBudW1iZXIgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvd09wdGlvbi9tYXhXaWR0aFwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIG1heEhlaWdodDogbnVtYmVyID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vbWF4SGVpZ2h0XCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgbGVmdDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIHRvcDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAdmFsaWRhdG9yKC4uLkJvcmRlck9wdGlvbkNvbnRyYWN0KVxyXG4gICAgcHVibGljIGJvcmRlcjogZmFsc2UgfCBCb3JkZXJPcHRpb24gPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvd09wdGlvbi9ib3JkZXJcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvciguLi5Cb3hTaGFkb3dPcHRpb25Db250cmFjdClcclxuICAgIHB1YmxpYyBib3hTaGFkb3c6IGZhbHNlIHwgQm94U2hhZG93T3B0aW9uID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vYm94U2hhZG93XCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoW2NoZWNrSW4sIEFuaW1hdGlvbk9wdGlvbmFsLlpPT01dLCBmYWxzZSlcclxuICAgIHB1YmxpYyBhbmltYXRlOiBmYWxzZSB8IEFuaW1hdGlvbk9wdGlvbmFsID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vYW5pbWF0ZVwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrQ29sb3IsIHVuZGVmaW5lZClcclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmcgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvd09wdGlvbi9iYWNrZ3JvdW5kQ29sb3JcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdEludClcclxuICAgIHB1YmxpYyB6SW5kZXg6IG51bWJlciA9IHRoaXMuZW50cnkuekluZGV4O1xyXG5cclxuICAgIEB2YWxpZGF0b3IoLi4uVUlBY3Rpb25CYXJPcHRpb25Db250cmFjdClcclxuICAgIHB1YmxpYyBhY3Rpb25CYXI6IGZhbHNlIHwgVUlBY3Rpb25CYXJPcHRpb24gPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvd09wdGlvbi9hY3Rpb25CYXJcIik7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdHVzOiBXaW5kb3dTdGF0ZU9wdGlvbmFsID0gV2luZG93U3RhdGVPcHRpb25hbC5PUklHSU5BTDtcclxuICAgIHB1YmxpYyBnZXQgc3RhdHVzKCk6IFdpbmRvd1N0YXRlT3B0aW9uYWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFzdFN0YXR1cz86IFdpbmRvd1N0YXRlT3B0aW9uYWw7XHJcbiAgICBwdWJsaWMgZ2V0IGxhc3RTdGF0dXMoKTogV2luZG93U3RhdGVPcHRpb25hbCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhc3RTdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudE1lc3NhZ2U6IFdpbmRvd0V2ZW50TWVzc2FnZSA9IHtcclxuICAgICAgICB0YXJnZXQ6IHRoaXNcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZVZpZXcoKTogQ29tcG9uZW50RWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQgPSBjcmVhdGVEaXZFbGVtZW50KHRoaXMuaWQpO1xyXG5cclxuICAgICAgICBhZGRDU1NDbGFzc2VzKGVsZW1lbnQsXHJcbiAgICAgICAgICAgIFwid2luZG93XCIsXHJcbiAgICAgICAgICAgIFwiZmxleC1ib3hcIixcclxuICAgICAgICAgICAgXCJjb2wtZGlyZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UgPyBcImFuaW1hdGVcIiA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlICE9PSBmYWxzZSA/IHN0cmluZ0Zvcm1hdChBTklNQVRFX1NIT1csIHRoaXMuYW5pbWF0ZSkgOiB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICBhZGRDU1NTdHlsZXMoZWxlbWVudCwgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yID8/IG51bGwsXHJcbiAgICAgICAgICAgIHpJbmRleDogYCR7dGhpcy56SW5kZXh9YCxcclxuICAgICAgICAgICAgd2lkdGg6IGAke3RoaXMud2lkdGh9cHhgLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3RoaXMuaGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMubWF4V2lkdGggIT09IGlubmVyV2lkdGggPyBgJHt0aGlzLm1heFdpZHRofXB4YCA6IG51bGwsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogdGhpcy5tYXhIZWlnaHQgIT09IGlubmVySGVpZ2h0ID8gYCR7dGhpcy5tYXhIZWlnaHR9cHhgIDogbnVsbCxcclxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3RoaXMubWluV2lkdGh9cHhgLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IGAke3RoaXMubWluSGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgbGVmdDogYCR7dGhpcy5sZWZ0fXB4YCxcclxuICAgICAgICAgICAgdG9wOiBgJHt0aGlzLnRvcH1weGAsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogdGhpcy5ib3hTaGFkb3cgPT09IGZhbHNlID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICBgJHt0aGlzLmJveFNoYWRvdy5vZmZzZXRYfXB4ICR7dGhpcy5ib3hTaGFkb3cub2Zmc2V0WX1weCAke3RoaXMuYm94U2hhZG93LmJsdXJSYWRpdXN9cHggJHt0aGlzLmJveFNoYWRvdy5zcHJlYWRSYWRpdXN9cHggJHt0aGlzLmJveFNoYWRvdy5jb2xvcn1gLFxyXG4gICAgICAgICAgICBib3JkZXI6IHRoaXMuYm9yZGVyID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5ib3JkZXIud2lkdGh9cHggJHt0aGlzLmJvcmRlci5zdHlsZX0gJHt0aGlzLmJvcmRlci5jb2xvcn1gLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5ib3JkZXIucmFkaXVzfXB4YFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hY3Rpb25CYXIgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbkJhciA9IG5ldyBVSUFjdGlvbkJhcih0aGlzLmFjdGlvbkJhcik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYWN0aW9uQmFyLmNyZWF0ZVZpZXcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tcImFjdGlvbkJhclwiXSA9IGFjdGlvbkJhcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW9uaXRvckV2ZW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMubW9uaXRvckNlbnRlci53aW5kb3dzLnVuc2hpZnQodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb25pdG9yRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vbml0b3JDZW50ZXIud2luZG93ID09PSB0aGlzKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMuYnJvYWRjYXN0KFtXSU5ET1dfRk9DVVNdLCB0aGlzLmV2ZW50TWVzc2FnZSk7XHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0ZVNob3dOYW1lID0gc3RyaW5nRm9ybWF0KEFOSU1BVEVfU0hPVywgdGhpcy5hbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNDU1NDbGFzcyh0aGlzLmVsZW1lbnQsIGFuaW1hdGVTaG93TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDU1NDbGFzc2VzKHRoaXMuZWxlbWVudCwgYW5pbWF0ZVNob3dOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QnVzLmJyb2FkY2FzdChbV0lORE9XX1NIT1ddLCB0aGlzLmV2ZW50TWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0ZURlc3Ryb3lOYW1lID0gc3RyaW5nRm9ybWF0KEFOSU1BVEVfREVTVFJPWSwgdGhpcy5hbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNDU1NDbGFzcyh0aGlzLmVsZW1lbnQsIGFuaW1hdGVEZXN0cm95TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGVNYXhpbWl6ZU5hbWUgPSBzdHJpbmdGb3JtYXQoQU5JTUFURV9NQVhJTUlaRSwgdGhpcy5hbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNDU1NDbGFzcyh0aGlzLmVsZW1lbnQsIGFuaW1hdGVNYXhpbWl6ZU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ1NTQ2xhc3Nlcyh0aGlzLmVsZW1lbnQsIGFuaW1hdGVNYXhpbWl6ZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENTU1N0eWxlcyh0aGlzLmVsZW1lbnQsIDxDU1NTdHlsZURlY2xhcmF0aW9uPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBgbm9uZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYG5vbmVgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IGAwYFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0ZU9yaWdpbmFsTmFtZSA9IHN0cmluZ0Zvcm1hdChBTklNQVRFX09SSUdJTkFMLCB0aGlzLmFuaW1hdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NTU0NsYXNzKHRoaXMuZWxlbWVudCwgYW5pbWF0ZU9yaWdpbmFsTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDU1NDbGFzc2VzKHRoaXMuZWxlbWVudCwgYW5pbWF0ZU9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlWkluZGV4KGlzQ3JlYXRlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAoaXNDcmVhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb25pdG9yQ2VudGVyLnNldFdpbmRvdyh0aGlzKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tb25pdG9yQ2VudGVyLndpbmRvdyA9PT0gdGhpcykgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuekluZGV4ID0gdGhpcy5lbnRyeS56SW5kZXg7XHJcbiAgICAgICAgYWRkQ1NTU3R5bGVzKHRoaXMuZWxlbWVudCwgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICB6SW5kZXg6IGAke3RoaXMuekluZGV4fWBcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1vbml0b3JDZW50ZXIuc2V0V2luZG93KHRoaXMpO1xyXG4gICAgICAgIGFycmF5U2V0VG9GaXJzdCh0aGlzLm1vbml0b3JDZW50ZXIud2luZG93cywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dHJhY3RpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVyID0gbnVsbDtcclxuICAgICAgICBjb25zdCBmcmVxdWVuY3k6IG51bWJlciA9IDEwO1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uOiBudW1iZXIgPSA2MDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYm94U2hhZG93ICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCBib3hTaGFkb3dTdHIgPSBgJHt0aGlzLmJveFNoYWRvdy5vZmZzZXRYfXB4ICR7dGhpcy5ib3hTaGFkb3cub2Zmc2V0WX1weCB7MH1weCAke3RoaXMuYm94U2hhZG93LnNwcmVhZFJhZGl1c31weCAke3RoaXMuYm94U2hhZG93LmNvbG9yfWA7XHJcblxyXG4gICAgICAgICAgICBbLi4uQXJyYXkoZnJlcXVlbmN5KS5rZXlzKCldLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENTU1N0eWxlcyh0aGlzLmVsZW1lbnQsIDxDU1NTdHlsZURlY2xhcmF0aW9uPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBpdGVtICUgMiA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdHJpbmdGb3JtYXQoYm94U2hhZG93U3RyLCAoPEJveFNoYWRvd09wdGlvbj50aGlzLmJveFNoYWRvdykuYmx1clJhZGl1cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3RyaW5nRm9ybWF0KGJveFNoYWRvd1N0ciwgPG51bWJlcj4oPEJveFNoYWRvd09wdGlvbj50aGlzLmJveFNoYWRvdykuYmx1clJhZGl1cyAvIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCBpdGVtICogZHVyYXRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgYWRkQ1NTQ2xhc3Nlcyh0aGlzLmVsZW1lbnQsIHN0cmluZ0Zvcm1hdChBTklNQVRFX0RFU1RST1ksIHRoaXMuYW5pbWF0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcclxuICAgICAgICByZW1vdmVIVE1MRWxlbWVudCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIGFycmF5UmVtb3ZlKHRoaXMubW9uaXRvckNlbnRlci53aW5kb3dzLCB0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW9uaXRvckNlbnRlci53aW5kb3dzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZm9jdXNXaW5kb3cgPSB0aGlzLm1vbml0b3JDZW50ZXIud2luZG93c1swXTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudEJ1cy5icm9hZGNhc3QoW1dJTkRPV19GT0NVU10sIDxXaW5kb3dFdmVudE1lc3NhZ2U+e1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBmb2N1c1dpbmRvd1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaHMgPSB0aGlzLm1vbml0b3JDZW50ZXIud2luZG93cy5maWx0ZXIod2luID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3aW4uc3RhdHVzID09PSBXaW5kb3dTdGF0ZU9wdGlvbmFsLk1BWElNSVpFO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHNlYXJjaHMubGVuZ3RoID09PSAwKSByZW1vdmVDU1NDbGFzc2VzKGRvY3VtZW50LmJvZHksIFwiZGlzYWJsZS1zY3JvbGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgcmVtb3ZlQ1NTQ2xhc3Nlcyhkb2N1bWVudC5ib2R5LCBcImRpc2FibGUtc2Nyb2xsXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXN0b3JlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMubGFzdFN0YXR1cyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhc3RTdGF0dXMgPT09IFdpbmRvd1N0YXRlT3B0aW9uYWwuTUFYSU1JWkUpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudEJ1cy5icm9hZGNhc3QoW1dJTkRPV19NQVhJTUlaRV0sIHRoaXMuZXZlbnRNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5sYXN0U3RhdHVzID09PSBXaW5kb3dTdGF0ZU9wdGlvbmFsLk9SSUdJTkFMKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRDU1NDbGFzc2VzKHRoaXMuZWxlbWVudCwgc3RyaW5nRm9ybWF0KEFOSU1BVEVfT1JJR0lOQUwsIHRoaXMuYW5pbWF0ZSkpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFkZENTU1N0eWxlcyh0aGlzLmVsZW1lbnQsIDxDU1NTdHlsZURlY2xhcmF0aW9uPntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHt0aGlzLndpZHRofXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7dGhpcy5oZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogYCR7dGhpcy5sZWZ0fXB4YCxcclxuICAgICAgICAgICAgICAgIHRvcDogYCR7dGhpcy50b3B9cHhgLFxyXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiB0aGlzLmJveFNoYWRvdyA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLmJveFNoYWRvdy5vZmZzZXRYfXB4ICR7dGhpcy5ib3hTaGFkb3cub2Zmc2V0WX1weCAke3RoaXMuYm94U2hhZG93LmJsdXJSYWRpdXN9cHggJHt0aGlzLmJveFNoYWRvdy5zcHJlYWRSYWRpdXN9cHggJHt0aGlzLmJveFNoYWRvdy5jb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLmJvcmRlciA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci53aWR0aH1weCAke3RoaXMuYm9yZGVyLnN0eWxlfSAke3RoaXMuYm9yZGVyLmNvbG9yfWAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3RoaXMuYm9yZGVyLnJhZGl1c31weGBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sYXN0U3RhdHVzID0gdGhpcy5fc3RhdHVzO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBXaW5kb3dTdGF0ZU9wdGlvbmFsLk9SSUdJTkFMO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWF4aW1pemUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5fc3RhdHVzID09PSBXaW5kb3dTdGF0ZU9wdGlvbmFsLk1BWElNSVpFKSByZXR1cm47XHJcblxyXG4gICAgICAgIGFkZENTU0NsYXNzZXMoZG9jdW1lbnQuYm9keSwgXCJkaXNhYmxlLXNjcm9sbFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgYWRkQ1NTQ2xhc3Nlcyh0aGlzLmVsZW1lbnQsIHN0cmluZ0Zvcm1hdChBTklNQVRFX01BWElNSVpFLCB0aGlzLmFuaW1hdGUpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkQ1NTU3R5bGVzKHRoaXMuZWxlbWVudCwgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICB0b3A6IGAwYCxcclxuICAgICAgICAgICAgbGVmdDogYDBgLFxyXG4gICAgICAgICAgICB3aWR0aDogYCR7aW5uZXJXaWR0aH1weGAsXHJcbiAgICAgICAgICAgIGhlaWdodDogYCR7aW5uZXJIZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UgPyBudWxsIDogYG5vbmVgLFxyXG4gICAgICAgICAgICBib3JkZXI6IHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UgPyBudWxsIDogYG5vbmVgLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UgPyBudWxsIDogYDBgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2xhc3RTdGF0dXMgPSB0aGlzLl9zdGF0dXM7XHJcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gV2luZG93U3RhdGVPcHRpb25hbC5NQVhJTUlaRTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBlbnVtIEJvcmRlclN0eWxlT3B0aW9uYWwge1xyXG4gICAgRE9UVEVEID0gXCJkb3R0ZWRcIixcclxuICAgIERBU0hFRCA9IFwiZGFzaGVkXCIsXHJcbiAgICBTT0xJRCA9IFwic29saWRcIixcclxuICAgIERPVUJMRSA9IFwiZG91YmxlXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gQW5pbWF0aW9uT3B0aW9uYWwge1xyXG4gICAgWk9PTSA9IFwiem9vbVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIERpcmVjdGlvbk9wdGlvbmFsIHtcclxuICAgIENFTlRFUiA9IFwiY2VudGVyXCIsXHJcbiAgICBUT1BfQ0VOVEVSID0gXCJ0b3AtY2VudGVyXCIsXHJcbiAgICBCT1RUT01fQ0VOVEVSID0gXCJib3R0b20tY2VudGVyXCIsXHJcbiAgICBMRUZUX1RPUCA9IFwibGVmdC10b3BcIixcclxuICAgIExFRlRfTUlERExFID0gXCJsZWZ0LW1pZGRsZVwiLFxyXG4gICAgTEVGVF9CT1RUT00gPSBcImxlZnQtYm90dG9tXCIsXHJcbiAgICBSSUdIVF9UT1AgPSBcInJpZ2h0LXRvcFwiLFxyXG4gICAgUklHSFRfTUlERExFID0gXCJyaWdodC1taWRkbGVcIixcclxuICAgIFJJR0hUX0JPVFRPTSA9IFwicmlnaHQtYm90dG9tXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gV2luZG93U3RhdGVPcHRpb25hbCB7XHJcbiAgICBPUklHSU5BTCA9IFwib3JpZ2luYWxcIixcclxuICAgIE1BWElNSVpFID0gXCJtYXhpbWl6ZVwiLFxyXG4gICAgTUlOSU1JWkUgPSBcIm1pbmltaXplXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gQWxpZ25PcHRpb25hbCB7XHJcbiAgICBMRUZUID0gXCJsZWZ0XCIsXHJcbiAgICBDRU5URVIgPSBcImNlbnRlclwiLFxyXG4gICAgUklHSFQgPSBcInJpZ2h0XCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdJTkRPV19DUkVBVEU6IHN0cmluZyA9IFwid2luZG93OmNyZWF0ZVwiO1xyXG5leHBvcnQgY29uc3QgV0lORE9XX0ZPQ1VTOiBzdHJpbmcgPSBcIndpbmRvdzpmb2N1c1wiO1xyXG5leHBvcnQgY29uc3QgV0lORE9XX1NIT1c6IHN0cmluZyA9IFwid2luZG93OnNob3dcIjtcclxuZXhwb3J0IGNvbnN0IFdJTkRPV19FWElTVDogc3RyaW5nID0gXCJ3aW5kb3c6ZXhpc3RcIjtcclxuZXhwb3J0IGNvbnN0IFdJTkRPV19SRVNUT1JFOiBzdHJpbmcgPSBcIndpbmRvdzpyZXN0b3JlXCI7XHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfTUFYSU1JWkU6IHN0cmluZyA9IFwid2luZG93Om1heGltaXplXCI7XHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfTUlOSU1JWkU6IHN0cmluZyA9IFwid2luZG93Om1pbmltaXplXCI7XHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfREVTVFJPWTogc3RyaW5nID0gXCJ3aW5kb3c6ZGVzdHJveVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFOSU1BVEVfU0hPVzogc3RyaW5nID0gXCJhbmltYXRlLXswfS1zaG93XCI7XHJcbmV4cG9ydCBjb25zdCBBTklNQVRFX0RFU1RST1k6IHN0cmluZyA9IFwiYW5pbWF0ZS17MH0tZGVzdHJveVwiO1xyXG5leHBvcnQgY29uc3QgQU5JTUFURV9NQVhJTUlaRTogc3RyaW5nID0gXCJhbmltYXRlLXswfS1tYXhpbWl6ZVwiO1xyXG5leHBvcnQgY29uc3QgQU5JTUFURV9PUklHSU5BTDogc3RyaW5nID0gXCJhbmltYXRlLXswfS1vcmlnaW5hbFwiOyIsImltcG9ydCB7IEFsaWduT3B0aW9uYWwsIEFuaW1hdGlvbk9wdGlvbmFsLCBCb3JkZXJTdHlsZU9wdGlvbmFsIH0gZnJvbSAnLi4vY29uc3QnO1xyXG5pbXBvcnQge1xyXG4gICAgY2hlY2tBcnJheUVhY2gsIGNoZWNrQm9vbGVhbiwgY2hlY2tDb2xvciwgY2hlY2tDb250cmFjdCwgY2hlY2tGdW5jdGlvbiwgY2hlY2tJbixcclxuICAgIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tQc3RJbnQsIGNoZWNrUHN0TnVtYmVyXHJcbn0gZnJvbSAnLi4vY29yZS92YWxpZGF0b3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvcmRlck9wdGlvbkNvbnRyYWN0ID0gW3tcclxuICAgIHdpZHRoOiBjaGVja1BzdE51bWJlcixcclxuICAgIHN0eWxlOiBbY2hlY2tJbiwgQm9yZGVyU3R5bGVPcHRpb25hbC5EQVNIRUQsIEJvcmRlclN0eWxlT3B0aW9uYWwuU09MSUQsIEJvcmRlclN0eWxlT3B0aW9uYWwuRE9VQkxFLCBCb3JkZXJTdHlsZU9wdGlvbmFsLkRPVFRFRF0sXHJcbiAgICBjb2xvcjogY2hlY2tDb2xvcixcclxuICAgIHJhZGl1czogY2hlY2tQc3RJbnRcclxufSwgZmFsc2VdO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJveFNoYWRvd09wdGlvbkNvbnRyYWN0ID0gW3tcclxuICAgIG9mZnNldFg6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgb2Zmc2V0WTogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBibHVyUmFkaXVzOiBjaGVja1BzdEludCxcclxuICAgIHNwcmVhZFJhZGl1czogY2hlY2tQc3RJbnQsXHJcbiAgICBjb2xvcjogY2hlY2tDb2xvclxyXG59LCBmYWxzZV07XHJcblxyXG5leHBvcnQgY29uc3QgVUlJY29uT3B0aW9uQ29udHJhY3QgPSB7XHJcbiAgICBpY29uOiBjaGVja05vRW1wdHlPck51bGwsXHJcbiAgICBjb2xvcjogY2hlY2tDb2xvcixcclxuICAgIGJhY2tncm91bmRDb2xvcjogY2hlY2tDb2xvcixcclxuICAgIGRpc2FibGVkOiBjaGVja0Jvb2xlYW4sXHJcbiAgICB2aXNpYmxlOiBjaGVja0Jvb2xlYW4sXHJcbiAgICBzaXplOiBjaGVja1BzdE51bWJlcixcclxuICAgIHdpZHRoOiBjaGVja1BzdE51bWJlcixcclxuICAgIGhvdmVyQ2xhc3M6IGNoZWNrTm9FbXB0eU9yTnVsbCxcclxuICAgIGhhbmRsZXI6IGNoZWNrRnVuY3Rpb24sXHJcbiAgICBzd2l0Y2hJY29uOiBjaGVja05vRW1wdHlPck51bGwsXHJcbiAgICBzd2l0Y2hDb2xvcjogY2hlY2tDb2xvcixcclxuICAgIHN3aXRjaEJhY2tncm91bmRDb2xvcjogY2hlY2tDb2xvcixcclxuICAgIHN3aXRjaEhhbmRsZXI6IGNoZWNrRnVuY3Rpb25cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVJQWN0aW9uQmFyT3B0aW9uQ29udHJhY3QgPSBbe1xyXG4gICAgaGVpZ2h0OiBjaGVja1BzdE51bWJlcixcclxuICAgIGJhY2tncm91bmRDb2xvcjogY2hlY2tDb2xvcixcclxuICAgIGFsaWduOiBbY2hlY2tJbiwgQWxpZ25PcHRpb25hbC5MRUZULCBBbGlnbk9wdGlvbmFsLlJJR0hUXSxcclxuICAgIGNvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgZXh0cmE6IFtVSUljb25PcHRpb25Db250cmFjdCwgZmFsc2VdLFxyXG4gICAgYWJvdXQ6IFtVSUljb25PcHRpb25Db250cmFjdCwgZmFsc2VdLFxyXG4gICAgZGV2ZWxvcDogW1VJSWNvbk9wdGlvbkNvbnRyYWN0LCBmYWxzZV0sXHJcbiAgICByZWZyZXNoOiBbVUlJY29uT3B0aW9uQ29udHJhY3QsIGZhbHNlXSxcclxuICAgIGlzdG9wOiBbVUlJY29uT3B0aW9uQ29udHJhY3QsIGZhbHNlXSxcclxuICAgIG1pbmltaXplOiBbVUlJY29uT3B0aW9uQ29udHJhY3QsIGZhbHNlXSxcclxuICAgIG1heGltaXplOiBbVUlJY29uT3B0aW9uQ29udHJhY3QsIGZhbHNlXSxcclxuICAgIGRlc3Ryb3k6IFtVSUljb25PcHRpb25Db250cmFjdCwgZmFsc2VdLFxyXG4gICAgY3VzdG9taXplOiBbW2NoZWNrQXJyYXlFYWNoLCBbY2hlY2tDb250cmFjdCwgVUlJY29uT3B0aW9uQ29udHJhY3RdXV1cclxufSwgZmFsc2VdO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxVSVdpbmRvd09wdGlvbkNvbnRyYWN0ID0ge1xyXG4gICAgd2lkdGg6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBjaGVja1BzdE51bWJlcixcclxuICAgIG1pbldpZHRoOiBjaGVja1BzdE51bWJlcixcclxuICAgIG1pbkhlaWdodDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBtYXhXaWR0aDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBtYXhIZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgYm94U2hhZG93OiBCb3hTaGFkb3dPcHRpb25Db250cmFjdCxcclxuICAgIGFuaW1hdGU6IFtbY2hlY2tJbiwgQW5pbWF0aW9uT3B0aW9uYWwuWk9PTV0sIGZhbHNlXSxcclxuICAgIGJvcmRlcjogQm9yZGVyT3B0aW9uQ29udHJhY3QsXHJcbiAgICBhY3Rpb25CYXI6IFVJQWN0aW9uQmFyT3B0aW9uQ29udHJhY3RcclxufTsiLCJpbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgbWVyZ2VKU09OT2JqZWN0IH0gZnJvbSAnLi4vLi4vaGVscGVyL29iamVjdCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uVmFsaWRhdG9yLCBKU09OT2JqZWN0LCBQcm9wZXJ0eVNldHRlciwgVmFsdWVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZSc7XHJcbmltcG9ydCB7XHJcbiAgICBjaGVja0FycmF5LCBjaGVja0Jhc2VUeXBlLCBjaGVja0NvbnRyYWN0LCBjaGVja0Z1bmN0aW9uLCBjaGVja0Z1bmN0aW9uVmFsaWRhdG9yLCBjaGVja0luLFxyXG4gICAgY2hlY2tKU09OT2JqZWN0LCBjaGVja1ZhbGlkYXRvclxyXG59IGZyb20gJy4uLy4uL3ZhbGlkYXRvcic7XHJcblxyXG5mdW5jdGlvbiBkZWNvcmF0b3IocHJvcGVydHlTZXR0ZXI6IFByb3BlcnR5U2V0dGVyKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgaWYgKCFjaGVja0Z1bmN0aW9uPFByb3BlcnR5U2V0dGVyPihwcm9wZXJ0eVNldHRlcikpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleSkge1xyXG4gICAgICAgIGNvbnN0IHN0b3JlS2V5ID0gYF8ke3Byb3BlcnR5S2V5LnRvU3RyaW5nKCl9X2A7XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XHJcbiAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXNbc3RvcmVLZXldOyB9LFxyXG4gICAgICAgICAgICBzZXQobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbc3RvcmVLZXldID0gcHJvcGVydHlTZXR0ZXIobmV3VmFsdWUsIHByb3BlcnR5S2V5LCB0aGlzW3N0b3JlS2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRvciguLi52YWx1ZXM6IEFycmF5PGFueT4pOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZGVjb3JhdG9yKChuZXdWYWx1ZSwgcHJvcGVydHlLZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja0NvbnRyYWN0KG5ld1ZhbHVlLCAuLi52YWx1ZXMpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbiAgICAgICAgaWYgKGNoZWNrSlNPTk9iamVjdChuZXdWYWx1ZSkpIHJldHVybiBtZXJnZUpTT05PYmplY3QodmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgICAgICBlbHNlIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciwgRXZlbnRNZXNzYWdlLCBKU09OT2JqZWN0LCBNZXNzYWdlUXVldWVzIH0gZnJvbSAnLi4vdHlwZSc7XHJcbmltcG9ydCB7XHJcbiAgICBjaGVja0FycmF5RWFjaCwgY2hlY2tGdW5jdGlvbiwgY2hlY2tKU09OT2JqZWN0LCBjaGVja05vRW1wdHlPck51bGwsIGNoZWNrTm9OdWxsT3JVbmRlZmluZWRcclxufSBmcm9tICcuLi92YWxpZGF0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50QnVzIHtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRXZlbnRCdXM7XHJcbiAgICBwcml2YXRlIG1lc3NhZ2VRdWV1ZXM6IE1lc3NhZ2VRdWV1ZXMgPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlKCk6IEV2ZW50QnVzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UgPz8gbmV3IEV2ZW50QnVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uKGtleTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChrZXkpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbiAgICAgICAgaWYgKCFjaGVja0Z1bmN0aW9uPEV2ZW50SGFuZGxlcj4oaGFuZGxlcikpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZVF1ZXVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUhhbmRsZXIgPSB0aGlzLm1lc3NhZ2VRdWV1ZXNba2V5XTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrRnVuY3Rpb248RXZlbnRIYW5kbGVyPihrZXlIYW5kbGVyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlUXVldWVzW2tleV0gPSBba2V5SGFuZGxlciwgaGFuZGxlcl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBcnJheUVhY2g8RXZlbnRIYW5kbGVyPihrZXlIYW5kbGVyLCBjaGVja0Z1bmN0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlUXVldWVzW2tleV0gPSBbLi4ua2V5SGFuZGxlciwgaGFuZGxlcl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB0aGlzLm1lc3NhZ2VRdWV1ZXNba2V5XSA9IGhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uZShrZXk6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoa2V5KSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgICAgIGlmICghY2hlY2tGdW5jdGlvbjxFdmVudEhhbmRsZXI+KGhhbmRsZXIpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1trZXldID0gaGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW1pdChrZXk6IHN0cmluZywgbWVzc2FnZTogYW55LCBzeW5jOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChrZXkpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbiAgICAgICAgaWYgKCFjaGVja05vTnVsbE9yVW5kZWZpbmVkKG1lc3NhZ2UpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VRdWV1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBrZXlIYW5kbGVyID0gdGhpcy5tZXNzYWdlUXVldWVzW2tleV07XHJcbiAgICAgICAgaWYgKGNoZWNrRnVuY3Rpb248RXZlbnRIYW5kbGVyPihrZXlIYW5kbGVyKSkge1xyXG4gICAgICAgICAgICBzeW5jID8ga2V5SGFuZGxlcihtZXNzYWdlKSA6XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGtleUhhbmRsZXIobWVzc2FnZSksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaGVja0FycmF5RWFjaDxFdmVudEhhbmRsZXI+KGtleUhhbmRsZXIsIGNoZWNrRnVuY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIGtleUhhbmRsZXIubWFwKGhhbmRsZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3luYyA/IGhhbmRsZXIobWVzc2FnZSkgOlxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaGFuZGxlcihtZXNzYWdlKSwgMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb2ZmKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoa2V5KSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGtleSkpIHJldHVybjtcclxuICAgICAgICBkZWxldGUgdGhpcy5tZXNzYWdlUXVldWVzW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJyb2FkY2FzdDxURXZlbnRNZXNzYWdlIGV4dGVuZHMgSlNPTk9iamVjdD4oa2V5czogQXJyYXk8c3RyaW5nPiwgbWVzc2FnZTogVEV2ZW50TWVzc2FnZSA9IDxURXZlbnRNZXNzYWdlPnt9KTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoa2V5LCA8RXZlbnRNZXNzYWdlPFRFdmVudE1lc3NhZ2U+PntcclxuICAgICAgICAgICAgICAgIGRhdGFzZXQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudmFsdWVPZigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJJbnZhbGlkKG1lc3NhZ2U6IHN0cmluZyA9IFwiXCIpOiBuZXZlciB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcGFyYW1ldGVyJHttZXNzYWdlfS5gKTtcclxufVxyXG4iLCJpbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgQ1NTQ2xhc3NPclVuZGVmaW5lZCwgQ1NTQ2xhc3NTZXR0ZXIsIEhUTUxFbGVtZW50T3JOdWxsIH0gZnJvbSAnLi4vLi4vdHlwZSc7XHJcbmltcG9ydCB7IGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tTdHJpbmcgfSBmcm9tICcuLi8uLi92YWxpZGF0b3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBSRUZJWDogc3RyaW5nID0gXCJsYXl4LVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENTU1N0eWxlcyhlbGVtZW50OiBIVE1MRWxlbWVudE9yTnVsbCwgY3NzU3R5bGVzOiBDU1NTdHlsZURlY2xhcmF0aW9uKTogdm9pZCB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNzc1Byb3AgaW4gY3NzU3R5bGVzKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZVtjc3NQcm9wXSA9IGNzc1N0eWxlc1tjc3NQcm9wXSA/PyBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDU1NDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50T3JOdWxsLCBoYW5kbGVyOiBDU1NDbGFzc1NldHRlciwgLi4uY3NzQ2xhc3NlczogQXJyYXk8Q1NTQ2xhc3NPclVuZGVmaW5lZD4pOiBIVE1MRWxlbWVudE9yTnVsbCB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRDU1NDbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvZyk7XHJcbiAgICBjc3NDbGFzc2VzLmZvckVhY2goKGNzc0NsYXNzKSA9PiB7XHJcbiAgICAgICAgaWYgKGNzc0NsYXNzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc0NsYXNzTmFtZSA9IGNzc0NsYXNzLmluZGV4T2YoXCIhXCIpID09PSAwID8gY3NzQ2xhc3Muc3Vic3RyKDEpIDogUFJFRklYICsgY3NzQ2xhc3M7XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc0NsYXNzSW5kZXggPSBlbGVtZW50Q1NTQ2xhc3Nlcy5pbmRleE9mKGNzc0NsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIGhhbmRsZXIoZWxlbWVudENTU0NsYXNzZXMsIGNzc0NsYXNzSW5kZXgsIGNzc0NsYXNzTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnRDU1NDbGFzc2VzLmpvaW4oXCIgXCIpLnRyaW0oKTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ1NTQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudE9yTnVsbCwgLi4uY3NzQ2xhc3NlczogQXJyYXk8Q1NTQ2xhc3NPclVuZGVmaW5lZD4pOiBIVE1MRWxlbWVudE9yTnVsbCB7XHJcbiAgICByZXR1cm4gdXBkYXRlQ1NTQ2xhc3NlcyhlbGVtZW50LCAoZWxlbWVudENTU0NsYXNzZXMsIGNzc0NsYXNzSW5kZXgsIGNzc0NsYXNzKSA9PiB7XHJcbiAgICAgICAgaWYgKCF+Y3NzQ2xhc3NJbmRleCkge1xyXG4gICAgICAgICAgICBlbGVtZW50Q1NTQ2xhc3Nlcy5wdXNoKGNzc0NsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9LCAuLi5jc3NDbGFzc2VzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnRPck51bGwsIC4uLmNzc0NsYXNzZXM6IHN0cmluZ1tdKTogSFRNTEVsZW1lbnRPck51bGwge1xyXG4gICAgaWYgKGNzc0NsYXNzZXMubGVuZ3RoID09PSAxICYmICFoYXNDU1NDbGFzcyhlbGVtZW50LCBjc3NDbGFzc2VzWzBdKSkgcmV0dXJuIGVsZW1lbnQ7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudCwgKGVsZW1lbnRDU1NDbGFzc2VzLCBjc3NDbGFzc0luZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKH5jc3NDbGFzc0luZGV4KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRDU1NDbGFzc2VzLnNwbGljZShjc3NDbGFzc0luZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LCAuLi5jc3NDbGFzc2VzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NTU0NsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50T3JOdWxsLCBjc3NDbGFzczogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50Q1NTQ2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrL2cpO1xyXG4gICAgY29uc3QgY3NzQ2xhc3NOYW1lID0gY3NzQ2xhc3MuaW5kZXhPZihcIiFcIikgPT09IDAgPyBjc3NDbGFzcy5zdWJzdHIoMSkgOiBQUkVGSVggKyBjc3NDbGFzcztcclxuICAgIGNvbnN0IGluZGV4ID0gZWxlbWVudENTU0NsYXNzZXMuaW5kZXhPZihjc3NDbGFzc05hbWUpO1xyXG4gICAgcmV0dXJuICEhfmluZGV4O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGl2RWxlbWVudChpZD86IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaWYgKGNoZWNrU3RyaW5nKGlkKSkge1xyXG4gICAgICAgIGVsZW1lbnQuaWQgPSBQUkVGSVggKyBpZDtcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3ZnRWxlbWVudChuYW1lOiBzdHJpbmcpOiBTVkdTVkdFbGVtZW50IHtcclxuICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKG5hbWUpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgY29uc3Qgc3ZnTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG4gICAgY29uc3QgbnNOYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcclxuXHJcbiAgICBjb25zdCBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgXCJzdmdcIik7XHJcbiAgICBjb25zdCB1c2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgXCJ1c2VcIik7XHJcbiAgICB1c2VFbGVtZW50LnNldEF0dHJpYnV0ZU5TKG5zTmFtZXNwYWNlLCBcInhsaW5rOmhyZWZcIiwgYCMke25hbWV9YCk7XHJcbiAgICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHVzZUVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIHN2Z0VsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIVE1MRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudE9yTnVsbCk6IHZvaWQge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XHJcbiAgICBpZiAoIWVsZW1lbnQucGFyZW50RWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEhvdmVyQ2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnRPck51bGwsIGhvdmVyQ1NTQ2xhc3M6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XHJcbiAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChob3ZlckNTU0NsYXNzKSkgcmV0dXJuO1xyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgYWRkQ1NTQ2xhc3NlcyhlbGVtZW50LCBob3ZlckNTU0NsYXNzKTtcclxuICAgIH0sIHRydWUpO1xyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlQ1NTQ2xhc3NlcyhlbGVtZW50LCBob3ZlckNTU0NsYXNzKTtcclxuICAgIH0sIHRydWUpO1xyXG59IiwiaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uLy4uL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IHJlbW92ZUlsbGVnYWxDaGFyYWN0ZXIgfSBmcm9tICcuLi8uLi9oZWxwZXIvc3RyaW5nJztcclxuaW1wb3J0IHsgSlNPTk9iamVjdCB9IGZyb20gJy4uLy4uL3R5cGUnO1xyXG5pbXBvcnQgeyBjaGVja0pTT05PYmplY3QsIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tOb051bGxPclVuZGVmaW5lZCB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVKU09OT2JqZWN0PFQgZXh0ZW5kcyBKU09OT2JqZWN0Pihzb3VyY2U6IFQpOiBUIHtcclxuICAgIGNvbnN0IG5ld0pTT05PYmplY3QgPSA8YW55Pnt9O1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xyXG4gICAgICAgIGNvbnN0IGtleVZhbHVlID0gc291cmNlW2tleV07XHJcbiAgICAgICAgbmV3SlNPTk9iamVjdFtrZXldID0gY2hlY2tKU09OT2JqZWN0KGtleVZhbHVlKVxyXG4gICAgICAgICAgICA/IGNsb25lSlNPTk9iamVjdChrZXlWYWx1ZSkgOiBrZXlWYWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiA8VD5uZXdKU09OT2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VKU09OT2JqZWN0PFQgZXh0ZW5kcyBKU09OT2JqZWN0Pihzb3VyY2U6IFQsIGRlc3Q6IFQpOiBUIHtcclxuICAgIGNvbnN0IG5ld0pTT05PYmplY3QgPSBjbG9uZUpTT05PYmplY3Q8YW55Pihzb3VyY2UpO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRlc3QpIHtcclxuICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IGRlc3Rba2V5XTtcclxuICAgICAgICBuZXdKU09OT2JqZWN0W2tleV0gPSBjaGVja0pTT05PYmplY3QobmV3SlNPTk9iamVjdFtrZXldKSAmJiBjaGVja0pTT05PYmplY3Qoa2V5VmFsdWUpXHJcbiAgICAgICAgICAgID8gbWVyZ2VKU09OT2JqZWN0KG5ld0pTT05PYmplY3Rba2V5XSwga2V5VmFsdWUpIDoga2V5VmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPFQ+bmV3SlNPTk9iamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRPYmplY3Q8VD4ocGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IFQsIHN0YXJ0T2JqZWN0OiBKU09OT2JqZWN0LCBmaXhLZXk/OiBzdHJpbmcpOiBUIHtcclxuICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKHBhdGgpIHx8ICFjaGVja0pTT05PYmplY3Qoc3RhcnRPYmplY3QpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcGF0aCA9IHJlbW92ZUlsbGVnYWxDaGFyYWN0ZXIocGF0aCk7XHJcbiAgICBpZiAocGF0aC5pbmRleE9mKFwiL1wiKSA9PT0gLTEpIHtcclxuICAgICAgICBpZiAoZml4S2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja0pTT05PYmplY3Qoc3RhcnRPYmplY3RbZml4S2V5XSkpIHJldHVybiBzdGFydE9iamVjdFtmaXhLZXldW3BhdGhdID8/IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhcnRPYmplY3RbcGF0aF0gPz8gZGVmYXVsdFZhbHVlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGtleXMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcclxuICAgIGxldCBrZXlWYWx1ZSA9IHJlYWRPYmplY3Qoa2V5c1swXSwgZGVmYXVsdFZhbHVlLCBzdGFydE9iamVjdCwgZml4S2V5KTtcclxuICAgIGlmICghY2hlY2tOb051bGxPclVuZGVmaW5lZChrZXlWYWx1ZSkpIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgKyAxID49IGtleXMubGVuZ3RoKSBicmVhaztcclxuICAgICAgICBrZXlWYWx1ZSA9IHJlYWRPYmplY3Qoa2V5c1tpICsgMV0sIGRlZmF1bHRWYWx1ZSwga2V5VmFsdWUsIGZpeEtleSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ga2V5VmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheVNldFRvRmlyc3QoYXJyOiBBcnJheTxhbnk+LCBlbGU6IGFueSk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoYXJyW2ldID09PSBlbGUpIHtcclxuICAgICAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXJyLnVuc2hpZnQoZWxlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5UmVtb3ZlKGFycjogQXJyYXk8YW55PiwgZWxlOiBhbnkpOiB2b2lkIHtcclxuICAgIGFyci5zcGxpY2UoYXJyLmluZGV4T2YoZWxlKSwgMSk7XHJcbn0iLCJpbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgY2hlY2tOb0VtcHR5T3JOdWxsIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJbGxlZ2FsQ2hhcmFjdGVyKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKHN0cikpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHJcXG5cXHRcXHNdL2csIFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRm9ybWF0KHN0cjogc3RyaW5nLCAuLi5hcmdzOiBBcnJheTxhbnk+KTogc3RyaW5nIHtcclxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHN0cjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxceyR7aX1cXFxcfWAsICdnbScpLCBhcmdzW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHI7XHJcbn0iLCJpbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgcmVtb3ZlSWxsZWdhbENoYXJhY3RlciB9IGZyb20gJy4uL2hlbHBlci9zdHJpbmcnO1xyXG5pbXBvcnQge1xyXG4gICAgQmFzZVR5cGUsIFZhbGlkYXRpb24sIENvbG9yU3RyaW5nLCBGdW5jdGlvblZhbGlkYXRvciwgSW50ZWdlck51bWJlciwgSlNPTk9iamVjdCxcclxuICAgIE5vRW1wdHlPck51bGxTdHJpbmcsIFZhbHVlVHlwZVxyXG59IGZyb20gJy4uL3R5cGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQmFzZVR5cGUoZGF0YTogYW55LCAuLi50eXBlTmFtZXM6IEJhc2VUeXBlW10pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlTmFtZXMuaW5kZXhPZih0eXBlb2YgZGF0YSkgPiAtMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU3RyaW5nKGRhdGE6IGFueSk6IGRhdGEgaXMgc3RyaW5nIHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwic3RyaW5nXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tCb29sZWFuKGRhdGE6IGFueSk6IGRhdGEgaXMgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tCYXNlVHlwZShkYXRhLCBcImJvb2xlYW5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja051bWJlcihkYXRhOiBhbnkpOiBkYXRhIGlzIG51bWJlciB7XHJcbiAgICByZXR1cm4gY2hlY2tCYXNlVHlwZShkYXRhLCBcIm51bWJlclwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRnVuY3Rpb248VD4oZGF0YTogYW55KTogZGF0YSBpcyBUIHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwiZnVuY3Rpb25cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Z1bmN0aW9uVmFsaWRhdG9yKGRhdGE6IGFueSk6IGRhdGEgaXMgRnVuY3Rpb25WYWxpZGF0b3Ige1xyXG4gICAgcmV0dXJuIGNoZWNrRnVuY3Rpb248VmFsaWRhdGlvbj4oZGF0YSkgfHxcclxuICAgICAgICBjaGVja0FycmF5KGRhdGEpICYmIGNoZWNrRnVuY3Rpb248VmFsaWRhdGlvbj4oZGF0YVswXSkgfHxcclxuICAgICAgICBjaGVja0FycmF5KGRhdGEpICYmIGNoZWNrQXJyYXkoZGF0YVswXSkgJiYgY2hlY2tGdW5jdGlvbjxWYWxpZGF0aW9uPihkYXRhWzBdWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVmFsaWRhdG9yKGRhdGE6IGFueSwgZnVuY3Rpb25WYWxpZGF0b3I6IEZ1bmN0aW9uVmFsaWRhdG9yKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaXNUcnVlID0gdHJ1ZTtcclxuICAgIGlmIChjaGVja0Z1bmN0aW9uPFZhbGlkYXRpb24+KGZ1bmN0aW9uVmFsaWRhdG9yKSkge1xyXG4gICAgICAgIGlmICghZnVuY3Rpb25WYWxpZGF0b3IoZGF0YSkpIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2hlY2tBcnJheShmdW5jdGlvblZhbGlkYXRvcikgJiYgY2hlY2tGdW5jdGlvbjxWYWxpZGF0aW9uPihmdW5jdGlvblZhbGlkYXRvclswXSkpIHtcclxuICAgICAgICBjb25zdCBbdmFsaWRhdG9yLCAuLi5hcmdzXSA9IGZ1bmN0aW9uVmFsaWRhdG9yO1xyXG4gICAgICAgIGlmICghdmFsaWRhdG9yKGRhdGEsIC4uLmFyZ3MpKSBpc1RydWUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNoZWNrQXJyYXkoZnVuY3Rpb25WYWxpZGF0b3IpICYmIGNoZWNrQXJyYXkoZnVuY3Rpb25WYWxpZGF0b3JbMF0pICYmIGNoZWNrRnVuY3Rpb248VmFsaWRhdGlvbj4oZnVuY3Rpb25WYWxpZGF0b3JbMF1bMF0pKSB7XHJcbiAgICAgICAgY29uc3QgW2NoaWxkVmFsaWRhdG9yLCAuLi52YWx1ZXNdID0gZnVuY3Rpb25WYWxpZGF0b3I7XHJcbiAgICAgICAgaWYgKCFjaGVja1ZhbGlkYXRvcihkYXRhLCBjaGlsZFZhbGlkYXRvcikgJiYgIWNoZWNrSW4oZGF0YSwgLi4udmFsdWVzKSkgaXNUcnVlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIGlzVHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXJyYXkoZGF0YTogYW55KTogZGF0YSBpcyBBcnJheTxhbnk+IHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBcnJheUVhY2g8VD4oZGF0YTogYW55LCBmdW5jdGlvblZhbGlkYXRvcjogRnVuY3Rpb25WYWxpZGF0b3IpOiBkYXRhIGlzIEFycmF5PFQ+IHtcclxuICAgIGlmICghY2hlY2tBcnJheShkYXRhKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKCFjaGVja0Z1bmN0aW9uVmFsaWRhdG9yKGZ1bmN0aW9uVmFsaWRhdG9yKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGxldCBpc0FycmF5VHlwZSA9IHRydWU7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgIGlzQXJyYXlUeXBlID0gY2hlY2tWYWxpZGF0b3IoaXRlbSwgZnVuY3Rpb25WYWxpZGF0b3IpO1xyXG4gICAgICAgIGlmICghaXNBcnJheVR5cGUpIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzQXJyYXlUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOb051bGxPclVuZGVmaW5lZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YSAhPT0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT2JqZWN0KGRhdGE6IGFueSk6IGRhdGEgaXMgb2JqZWN0IHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwib2JqZWN0XCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tKU09OT2JqZWN0KGRhdGE6IGFueSk6IGRhdGEgaXMgSlNPTk9iamVjdCB7XHJcbiAgICByZXR1cm4gZGF0YSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICFjaGVja0FycmF5KGRhdGEpICYmXHJcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpLnRvTG93ZXJDYXNlKCkgPT09IFwiW29iamVjdCBvYmplY3RdXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja051bGwoZGF0YTogYW55KTogZGF0YSBpcyBudWxsIHtcclxuICAgIHJldHVybiBkYXRhID09PSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZWdFeHAoZGF0YTogYW55KTogZGF0YSBpcyBSZWdFeHAge1xyXG4gICAgcmV0dXJuIGRhdGEgaW5zdGFuY2VvZiBSZWdFeHA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbG9yKGRhdGE6IGFueSk6IGRhdGEgaXMgQ29sb3JTdHJpbmcge1xyXG4gICAgZGF0YSA9IHJlbW92ZUlsbGVnYWxDaGFyYWN0ZXIoZGF0YSk7XHJcbiAgICBjb25zdCBiaW5hcnlSZWdFeHAgPSAvXiMoWzAtOWEtZl17Nn18WzAtOWEtZl17M30pJC9pO1xyXG4gICAgY29uc3QgcmdiUmVnRXhwID0gL15yZ2JcXCgoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCkkL2k7XHJcbiAgICBjb25zdCByZ2JhUmVnRXhwID0gL15yZ2JhXFwoKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKDF8MS4wfDAuWzAtOV0pXFwpJC9pO1xyXG5cclxuICAgIHJldHVybiBiaW5hcnlSZWdFeHAudGVzdChkYXRhKSB8fFxyXG4gICAgICAgIHJnYlJlZ0V4cC50ZXN0KGRhdGEpIHx8XHJcbiAgICAgICAgcmdiYVJlZ0V4cC50ZXN0KGRhdGEpIHx8XHJcbiAgICAgICAgZGF0YSA9PT0gXCJ0cmFuc3BhcmVudFwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOb0VtcHR5T3JOdWxsKGRhdGE6IGFueSk6IGRhdGEgaXMgTm9FbXB0eU9yTnVsbFN0cmluZyB7XHJcbiAgICByZXR1cm4gY2hlY2tTdHJpbmcoZGF0YSlcclxuICAgICAgICAmJiBkYXRhLmxlbmd0aCA+IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ludChkYXRhOiBhbnkpOiBkYXRhIGlzIEludGVnZXJOdW1iZXIge1xyXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKGRhdGEpICYmXHJcbiAgICAgICAgKC9eXFwtP1swLTldKyQvLnRlc3QoYCR7ZGF0YX1gKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1BzdEludChkYXRhOiBhbnkpOiBkYXRhIGlzIEludGVnZXJOdW1iZXIge1xyXG4gICAgcmV0dXJuIGNoZWNrSW50KGRhdGEpXHJcbiAgICAgICAgJiYgZGF0YSA+PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQc3ROdW1iZXIoZGF0YTogYW55KTogZGF0YSBpcyBudW1iZXIge1xyXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKGRhdGEpXHJcbiAgICAgICAgJiYgZGF0YSA+PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb250YWlucyhkYXRhOiBhbnksIGNoYXJhY3Rlcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChjaGFyYWN0ZXIpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuIGNoZWNrTm9FbXB0eU9yTnVsbChkYXRhKVxyXG4gICAgICAgICYmIGRhdGEuaW5kZXhPZihjaGFyYWN0ZXIpID4gLTE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0luKGRhdGE6IGFueSwgLi4udmFsdWVzOiBBcnJheTxWYWx1ZVR5cGU+KSB7XHJcbiAgICByZXR1cm4gY2hlY2tCYXNlVHlwZShkYXRhLCBcImJvb2xlYW5cIiwgXCJudW1iZXJcIiwgXCJzdHJpbmdcIiwgXCJ1bmRlZmluZWRcIiwgXCJvYmplY3RcIikgJiZcclxuICAgICAgICB2YWx1ZXMuaW5kZXhPZihkYXRhKSA+IC0xO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW5MZW5ndGgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrU3RyaW5nKGRhdGEpICYmXHJcbiAgICAgICAgZGF0YS5sZW5ndGggPj0gdGhyZXNob2xkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXhMZW5ndGgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrU3RyaW5nKGRhdGEpICYmXHJcbiAgICAgICAgZGF0YS5sZW5ndGggPD0gdGhyZXNob2xkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tMZW5ndGgoZGF0YTogYW55LCBtaW5UaHJlc2hvbGQ6IG51bWJlciwgbWF4VGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmIChtaW5UaHJlc2hvbGQgPj0gbWF4VGhyZXNob2xkKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuIGNoZWNrTWluTGVuZ3RoKGRhdGEsIG1pblRocmVzaG9sZCkgJiZcclxuICAgICAgICBjaGVja01pbkxlbmd0aChkYXRhLCBtYXhUaHJlc2hvbGQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW4oZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKGRhdGEpICYmXHJcbiAgICAgICAgZGF0YSA+PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01heChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tOdW1iZXIoZGF0YSkgJiZcclxuICAgICAgICBkYXRhIDw9IHRocmVzaG9sZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmFuZ2UoZGF0YTogYW55LCBtaW5UaHJlc2hvbGQ6IG51bWJlciwgbWF4VGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmIChtaW5UaHJlc2hvbGQgPj0gbWF4VGhyZXNob2xkKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuIGNoZWNrTWluKGRhdGEsIG1pblRocmVzaG9sZCkgJiZcclxuICAgICAgICBjaGVja01heChkYXRhLCBtYXhUaHJlc2hvbGQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXRjaChkYXRhOiBhbnksIHJlZ2V4OiBSZWdFeHApOiBib29sZWFuIHtcclxuICAgIHJldHVybiByZWdleC50ZXN0KGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb250cmFjdChkYXRhOiBhbnksIC4uLmNvbnRyYWN0czogQXJyYXk8YW55Pik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdmFsdWVPcHRpb25zOiBBcnJheTxWYWx1ZVR5cGU+ID0gW107XHJcbiAgICBjb25zdCBmdW5jdGlvblZhbGlkYXRvcnM6IEFycmF5PEZ1bmN0aW9uVmFsaWRhdG9yPiA9IFtdO1xyXG4gICAgY29uc3Qgb2JqZWN0VmFsaWRhdG9yczogQXJyYXk8SlNPTk9iamVjdD4gPSBbXTtcclxuXHJcbiAgICBjb250cmFjdHMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtID09PSBudWxsIHx8IGNoZWNrQmFzZVR5cGUoaXRlbSwgXCJzdHJpbmdcIiwgXCJiaWdpbnRcIiwgXCJib29sZWFuXCIsIFwic3ltYm9sXCIsIFwidW5kZWZpbmVkXCIpKSB2YWx1ZU9wdGlvbnMucHVzaChpdGVtKTtcclxuICAgICAgICBpZiAoY2hlY2tGdW5jdGlvblZhbGlkYXRvcihpdGVtKSkgZnVuY3Rpb25WYWxpZGF0b3JzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgaWYgKGNoZWNrSlNPTk9iamVjdChpdGVtKSkgb2JqZWN0VmFsaWRhdG9ycy5wdXNoKGl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGNoZWNrSW4oZGF0YSwgLi4udmFsdWVPcHRpb25zKSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKGZ1bmN0aW9uVmFsaWRhdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGlzUGFzc0FsbEZ1bmN0aW9uVmFsaWRhdG9yID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZ1bmN0aW9uVmFsaWRhdG9yIG9mIGZ1bmN0aW9uVmFsaWRhdG9ycykge1xyXG4gICAgICAgICAgICBpc1Bhc3NBbGxGdW5jdGlvblZhbGlkYXRvciA9IGNoZWNrVmFsaWRhdG9yKGRhdGEsIGZ1bmN0aW9uVmFsaWRhdG9yKTtcclxuICAgICAgICAgICAgaWYgKCFpc1Bhc3NBbGxGdW5jdGlvblZhbGlkYXRvcikgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1Bhc3NBbGxGdW5jdGlvblZhbGlkYXRvcikgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoZWNrSlNPTk9iamVjdChkYXRhKSAmJiBvYmplY3RWYWxpZGF0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBbZmlyc3RWYWxpZGF0b3IsXSA9IG9iamVjdFZhbGlkYXRvcnM7XHJcbiAgICAgICAgbGV0IGlzUGFzc0FsbFByb3BWYWxpZGF0b3IgPSB0cnVlO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGRWYWx1ZXMgPSBmaXJzdFZhbGlkYXRvcltrZXldO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkVmFsdWVzKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaXNQYXNzQWxsUHJvcFZhbGlkYXRvciA9IGNoZWNrQ29udHJhY3QoZGF0YVtrZXldLCAuLi4oY2hlY2tBcnJheShjaGlsZFZhbHVlcykgPyBjaGlsZFZhbHVlcyA6IFtjaGlsZFZhbHVlc10pKTtcclxuICAgICAgICAgICAgaWYgKCFpc1Bhc3NBbGxQcm9wVmFsaWRhdG9yKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzUGFzc0FsbFByb3BWYWxpZGF0b3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0iLCJpbXBvcnQgJy4uL2Fzc2V0JztcclxuXHJcbmltcG9ydCB7IFVJV2luZG93IH0gZnJvbSAnLi4vY29tcG9uZW50L3VpLXdpbmRvdyc7XHJcbmltcG9ydCB7XHJcbiAgICBBbGlnbk9wdGlvbmFsLCBBbmltYXRpb25PcHRpb25hbCwgQm9yZGVyU3R5bGVPcHRpb25hbCwgV0lORE9XX0NSRUFURSwgV0lORE9XX0RFU1RST1ksXHJcbiAgICBXSU5ET1dfRVhJU1QsIFdJTkRPV19GT0NVUywgV0lORE9XX01BWElNSVpFLCBXSU5ET1dfTUlOSU1JWkUsIFdJTkRPV19SRVNUT1JFXHJcbn0gZnJvbSAnLi4vY29uc3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxVSVdpbmRvd09wdGlvbkNvbnRyYWN0IH0gZnJvbSAnLi4vY29udHJhY3QnO1xyXG5pbXBvcnQgeyB2YWxpZGF0b3IgfSBmcm9tICcuLi9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSAnLi4vY29yZS9ldmVudC1idXMnO1xyXG5pbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vY29yZS9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBFdmVudFNldHRlciB9IGZyb20gJy4uL2NvcmUvdHlwZSc7XHJcbmltcG9ydCB7XHJcbiAgICBjaGVja0Z1bmN0aW9uLCBjaGVja0pTT05PYmplY3QsIGNoZWNrTWluLCBjaGVja05vRW1wdHlPck51bGwsIGNoZWNrUHN0SW50XHJcbn0gZnJvbSAnLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBNb25pdG9yQ2VudGVyIH0gZnJvbSAnLi4vbW9uaXRvcic7XHJcbmltcG9ydCB7XHJcbiAgICBCb3JkZXJPcHRpb24sIEJveFNoYWRvd09wdGlvbiwgRW50cnlPcHRpb24sIEdsb2JhbFVJV2luZG93T3B0aW9uLCBVSUFjdGlvbkJhck9wdGlvbixcclxuICAgIFVJSWNvbk9wdGlvbiwgVUlXaW5kb3dPcHRpb24sIFdpbmRvd0V2ZW50TWVzc2FnZVxyXG59IGZyb20gJy4uL3R5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudHJ5IHtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFbnRyeTtcclxuICAgIHByaXZhdGUgbW9uaXRvckNlbnRlcjogTW9uaXRvckNlbnRlciA9IE1vbml0b3JDZW50ZXIuSW5zdGFuY2UoKTtcclxuICAgIHByaXZhdGUgZXZlbnRCdXM6IEV2ZW50QnVzID0gRXZlbnRCdXMuSW5zdGFuY2UoKTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEVudHJ5T3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nID0gXCIzLjBcIjtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0SW50LCBbY2hlY2tNaW4sIDEwMDBdKVxyXG4gICAgcHVibGljIHN0YXJ0WkluZGV4OiBudW1iZXIgPSAxMDAwMDAwMDtcclxuXHJcbiAgICBAdmFsaWRhdG9yKEdsb2JhbFVJV2luZG93T3B0aW9uQ29udHJhY3QpXHJcbiAgICBwdWJsaWMgd2luZG93T3B0aW9uOiBHbG9iYWxVSVdpbmRvd09wdGlvbiA9IHtcclxuICAgICAgICB3aWR0aDogODAwLFxyXG4gICAgICAgIGhlaWdodDogNjAwLFxyXG4gICAgICAgIG1pbldpZHRoOiAyMDAsXHJcbiAgICAgICAgbWluSGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgbWF4V2lkdGg6IGlubmVyV2lkdGgsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiBpbm5lckhlaWdodCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIGJveFNoYWRvdzoge1xyXG4gICAgICAgICAgICBvZmZzZXRYOiAxLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAxLFxyXG4gICAgICAgICAgICBibHVyUmFkaXVzOiAxMixcclxuICAgICAgICAgICAgc3ByZWFkUmFkaXVzOiAxLFxyXG4gICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuMilcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5pbWF0ZTogQW5pbWF0aW9uT3B0aW9uYWwuWk9PTSxcclxuICAgICAgICBib3JkZXI6IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgIHN0eWxlOiBCb3JkZXJTdHlsZU9wdGlvbmFsLlNPTElELFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjZDVkNWQ1XCIsXHJcbiAgICAgICAgICAgIHJhZGl1czogNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWN0aW9uQmFyOiA8VUlBY3Rpb25CYXJPcHRpb24+e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBhbGlnbjogQWxpZ25PcHRpb25hbC5SSUdIVCxcclxuICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIF96SW5kZXg6IG51bWJlciA9IHRoaXMuc3RhcnRaSW5kZXg7XHJcbiAgICBnZXQgekluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl96SW5kZXggPSB0aGlzLl96SW5kZXggKyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2Uob3B0aW9uczogRW50cnlPcHRpb24gPSB7fSk6IEVudHJ5IHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHRoaXMuaW5zdGFuY2UgPSBuZXcgRW50cnkob3B0aW9ucyk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZXJPcHRpb25zKG9wdGlvbnM6IEVudHJ5T3B0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGFydFpJbmRleCA9IG9wdGlvbnM/LnN0YXJ0WkluZGV4ID8/IHRoaXMuc3RhcnRaSW5kZXg7XHJcbiAgICAgICAgaWYgKG9wdGlvbnM/LnN0YXJ0WkluZGV4KSB0aGlzLl96SW5kZXggPSB0aGlzLnN0YXJ0WkluZGV4O1xyXG4gICAgICAgIHRoaXMud2luZG93T3B0aW9uID0gb3B0aW9ucz8ud2luZG93T3B0aW9uID8/IHRoaXMud2luZG93T3B0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbihldmVudFNldHRlcjogRXZlbnRTZXR0ZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWNoZWNrSlNPTk9iamVjdChldmVudFNldHRlcikpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXZlbnRTZXR0ZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IGV2ZW50U2V0dGVyW2tleV07XHJcbiAgICAgICAgICAgIGlmIChjaGVja0Z1bmN0aW9uKGhhbmRsZXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QnVzLm9uKGtleSwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW4ob3B0aW9uczogVUlXaW5kb3dPcHRpb24pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChvcHRpb25zPy5pZCkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgd2luZG93ID0gdGhpcy5nZXRXaW5kb3cob3B0aW9ucy5pZCk7XHJcbiAgICAgICAgaWYgKHdpbmRvdykge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50QnVzLmJyb2FkY2FzdChbV0lORE9XX0ZPQ1VTLCBXSU5ET1dfRVhJU1RdLCA8V2luZG93RXZlbnRNZXNzYWdlPntcclxuICAgICAgICAgICAgICAgIHRhcmdldDogd2luZG93XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBjb25zdCB1aVdpbmRvdyA9IG5ldyBVSVdpbmRvdyhvcHRpb25zKTtcclxuICAgICAgICBjb25zdCB1aVdpbmRvd0VsZW1lbnQgPSB1aVdpbmRvdy5jcmVhdGVWaWV3KCk7XHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodWlXaW5kb3dFbGVtZW50KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHVpV2luZG93RWxlbWVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRCdXMuYnJvYWRjYXN0KFtXSU5ET1dfQ1JFQVRFLCBXSU5ET1dfRk9DVVNdLCA8V2luZG93RXZlbnRNZXNzYWdlPntcclxuICAgICAgICAgICAgdGFyZ2V0OiB1aVdpbmRvdyxcclxuICAgICAgICAgICAgY3JlYXRlZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRXaW5kb3coaWQ6IHN0cmluZyk6IFVJV2luZG93IHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoaWQpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaHMgPSB0aGlzLm1vbml0b3JDZW50ZXIud2luZG93cy5maWx0ZXIod2luID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbi5pZCA9PT0gaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHNlYXJjaHMubGVuZ3RoID4gMCA/IHNlYXJjaHNbMF0gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJpZ2dlcldpbmRvd09wZXJhdG9yKGlkOiBzdHJpbmcsIGV2ZW50S2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChpZCkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgICAgICBjb25zdCB3aW5kb3cgPSB0aGlzLmdldFdpbmRvdyhpZCk7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEJ1cy5icm9hZGNhc3QoW2V2ZW50S2V5XSwgPFdpbmRvd0V2ZW50TWVzc2FnZT57XHJcbiAgICAgICAgICAgIHRhcmdldDogd2luZG93XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlc3Ryb3koaWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcldpbmRvd09wZXJhdG9yKGlkLCBXSU5ET1dfREVTVFJPWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1heGltaXplKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJXaW5kb3dPcGVyYXRvcihpZCwgV0lORE9XX01BWElNSVpFKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZm9jdXMoaWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcldpbmRvd09wZXJhdG9yKGlkLCBXSU5ET1dfRk9DVVMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXN0b3JlKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJXaW5kb3dPcGVyYXRvcihpZCwgV0lORE9XX1JFU1RPUkUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aW9uT3B0aW9uYWwgfSBmcm9tICcuLi9jb25zdCc7XHJcbmltcG9ydCB7IHBhcmFtZXRlckludmFsaWQgfSBmcm9tICcuLi9jb3JlL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IGNoZWNrQXJyYXlFYWNoLCBjaGVja1BzdE51bWJlciB9IGZyb20gJy4uL2NvcmUvdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgRGlyZWN0aW9uT3JDb29yZCB9IGZyb20gJy4uL3R5cGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREaXJlY3Rpb24od2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGRpcmVjdGlvbk9yQ29vcmQ/OiBEaXJlY3Rpb25PckNvb3JkKTogW251bWJlciwgbnVtYmVyXSB7XHJcbiAgICBpZiAoIWNoZWNrUHN0TnVtYmVyKHdpZHRoKSB8fCAhY2hlY2tQc3ROdW1iZXIoaGVpZ2h0KSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIGlmIChkaXJlY3Rpb25PckNvb3JkID09PSB1bmRlZmluZWQpIHJldHVybiBbKGlubmVyV2lkdGggLSB3aWR0aCkgLyAyLCAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMl07XHJcblxyXG4gICAgaWYgKGNoZWNrQXJyYXlFYWNoPG51bWJlcj4oZGlyZWN0aW9uT3JDb29yZCwgY2hlY2tQc3ROdW1iZXIpKSB7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbk9yQ29vcmQubGVuZ3RoICE9PSAyKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbiAgICAgICAgcmV0dXJuIFtkaXJlY3Rpb25PckNvb3JkWzBdLCBkaXJlY3Rpb25PckNvb3JkWzFdXTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbk9yQ29vcmQpIHtcclxuICAgICAgICBjYXNlIERpcmVjdGlvbk9wdGlvbmFsLkNFTlRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIChpbm5lckhlaWdodCAtIGhlaWdodCkgLyAyXTtcclxuICAgICAgICBjYXNlIERpcmVjdGlvbk9wdGlvbmFsLlRPUF9DRU5URVI6XHJcbiAgICAgICAgICAgIHJldHVybiBbKGlubmVyV2lkdGggLSB3aWR0aCkgLyAyLCAwXTtcclxuICAgICAgICBjYXNlIERpcmVjdGlvbk9wdGlvbmFsLkJPVFRPTV9DRU5URVI6XHJcbiAgICAgICAgICAgIHJldHVybiBbKGlubmVyV2lkdGggLSB3aWR0aCkgLyAyLCBpbm5lckhlaWdodCAtIGhlaWdodF07XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb25PcHRpb25hbC5MRUZUX1RPUDpcclxuICAgICAgICAgICAgcmV0dXJuIFswLCAwXTtcclxuICAgICAgICBjYXNlIERpcmVjdGlvbk9wdGlvbmFsLkxFRlRfTUlERExFOlxyXG4gICAgICAgICAgICByZXR1cm4gWzAsIChpbm5lckhlaWdodCAtIGhlaWdodCkgLyAyXTtcclxuICAgICAgICBjYXNlIERpcmVjdGlvbk9wdGlvbmFsLkxFRlRfQk9UVE9NOlxyXG4gICAgICAgICAgICByZXR1cm4gWzAsIGlubmVySGVpZ2h0IC0gaGVpZ2h0XTtcclxuICAgICAgICBjYXNlIERpcmVjdGlvbk9wdGlvbmFsLlJJR0hUX1RPUDpcclxuICAgICAgICAgICAgcmV0dXJuIFtpbm5lcldpZHRoIC0gd2lkdGgsIDBdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuUklHSFRfTUlERExFOlxyXG4gICAgICAgICAgICByZXR1cm4gW2lubmVyV2lkdGggLSB3aWR0aCwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuUklHSFRfQk9UVE9NOlxyXG4gICAgICAgICAgICByZXR1cm4gW2lubmVyV2lkdGggLSB3aWR0aCwgaW5uZXJIZWlnaHQgLSBoZWlnaHRdO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudHJ5IH0gZnJvbSAnLi9lbnRyeSc7XHJcbmltcG9ydCB7IE1vbml0b3JDZW50ZXIgfSBmcm9tICcuL21vbml0b3InO1xyXG5pbXBvcnQgeyBFbnRyeU9wdGlvbiwgT3ZlcnQgfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIG92ZXJ0KCk6IE92ZXJ0IHtcclxuICAgIGNvbnN0IGVudHJ5ID0gRW50cnkuSW5zdGFuY2UoKTtcclxuICAgIGNvbnN0IG1vbml0b3JDZW50ZXIgPSBNb25pdG9yQ2VudGVyLkluc3RhbmNlKCk7XHJcblxyXG4gICAgY29uc3Qgb3ZlcnQgPSA8T3ZlcnQ+ZnVuY3Rpb24gKG9wdGlvbnM6IEVudHJ5T3B0aW9uKSB7XHJcbiAgICAgICAgRW50cnkuSW5zdGFuY2Uob3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gICAgb3ZlcnQudmVyc2lvbiA9IGVudHJ5LnZlcnNpb247XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvdmVydCwge1xyXG4gICAgICAgIHdpbmRvdzogeyBnZXQ6ICgpID0+IG1vbml0b3JDZW50ZXIud2luZG93IH0sXHJcbiAgICAgICAgd2luZG93czogeyBnZXQ6ICgpID0+IG1vbml0b3JDZW50ZXIud2luZG93cyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBvdmVydC5vbiA9IGVudHJ5Lm9uLmJpbmQoZW50cnkpO1xyXG4gICAgb3ZlcnQub3BlbiA9IGVudHJ5Lm9wZW4uYmluZChlbnRyeSk7XHJcbiAgICBvdmVydC5nZXRXaW5kb3cgPSBlbnRyeS5nZXRXaW5kb3cuYmluZChlbnRyeSk7XHJcbiAgICBvdmVydC5kZXN0cm95ID0gZW50cnkuZGVzdHJveS5iaW5kKGVudHJ5KTtcclxuICAgIG92ZXJ0Lm1heGltaXplID0gZW50cnkubWF4aW1pemUuYmluZChlbnRyeSk7XHJcbiAgICBvdmVydC5mb2N1cyA9IGVudHJ5LmZvY3VzLmJpbmQoZW50cnkpO1xyXG4gICAgb3ZlcnQucmVzdG9yZSA9IGVudHJ5LnJlc3RvcmUuYmluZChlbnRyeSk7XHJcblxyXG4gICAgcmV0dXJuIG92ZXJ0O1xyXG59KSgpO1xyXG4iLCJpbXBvcnQgeyBVSVdpbmRvdyB9IGZyb20gJy4uL2NvbXBvbmVudC91aS13aW5kb3cnO1xyXG5pbXBvcnQgeyBXSU5ET1dfQ1JFQVRFLCBXSU5ET1dfREVTVFJPWSwgV0lORE9XX0VYSVNULCBXSU5ET1dfRk9DVVMsIFdJTkRPV19NQVhJTUlaRSwgV0lORE9XX1JFU1RPUkUgfSBmcm9tICcuLi9jb25zdCc7XHJcbmltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSAnLi4vY29yZS9ldmVudC1idXMnO1xyXG5pbXBvcnQgeyBFdmVudE1lc3NhZ2UgfSBmcm9tICcuLi9jb3JlL3R5cGUnO1xyXG5pbXBvcnQgeyBXaW5kb3dFdmVudE1lc3NhZ2UgfSBmcm9tICcuLi90eXBlJztcclxuaW1wb3J0IHsgUFJFRklYIH0gZnJvbSAnLi4vY29yZS9oZWxwZXIvZWxlbWVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9uaXRvckNlbnRlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTW9uaXRvckNlbnRlcjtcclxuXHJcbiAgICBwcml2YXRlIGV2ZW50QnVzOiBFdmVudEJ1cyA9IEV2ZW50QnVzLkluc3RhbmNlKCk7XHJcbiAgICBwcml2YXRlIF93aW5kb3dzOiBBcnJheTxVSVdpbmRvdz4gPSBbXTtcclxuICAgIGdldCB3aW5kb3dzKCk6IEFycmF5PFVJV2luZG93PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpbmRvd3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfd2luZG93OiBVSVdpbmRvdyB8IG51bGwgPSBudWxsO1xyXG4gICAgZ2V0IHdpbmRvdygpOiBVSVdpbmRvdyB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93aW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZSgpOiBNb25pdG9yQ2VudGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UgPz8gbmV3IE1vbml0b3JDZW50ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmlkKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmlkID0gYCR7UFJFRklYfWNvbnRhaW5lcmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEJ1cy5vbihXSU5ET1dfQ1JFQVRFLCAobWVzc2FnZTogRXZlbnRNZXNzYWdlPFdpbmRvd0V2ZW50TWVzc2FnZT4pID0+IHtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEJ1cy5vbihXSU5ET1dfRk9DVVMsIChtZXNzYWdlOiBFdmVudE1lc3NhZ2U8V2luZG93RXZlbnRNZXNzYWdlPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBtZXNzYWdlLmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgICAgICB3aW5kb3cudXBkYXRlWkluZGV4KG1lc3NhZ2UuZGF0YXNldD8uY3JlYXRlZCA/PyBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRCdXMub24oV0lORE9XX0VYSVNULCAobWVzc2FnZTogRXZlbnRNZXNzYWdlPFdpbmRvd0V2ZW50TWVzc2FnZT4pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gbWVzc2FnZS5kYXRhc2V0LnRhcmdldDtcclxuICAgICAgICAgICAgd2luZG93LmF0dHJhY3RpbmcoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEJ1cy5vbihXSU5ET1dfTUFYSU1JWkUsIChtZXNzYWdlOiBFdmVudE1lc3NhZ2U8V2luZG93RXZlbnRNZXNzYWdlPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBtZXNzYWdlLmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgICAgICB3aW5kb3cubWF4aW1pemUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEJ1cy5vbihXSU5ET1dfUkVTVE9SRSwgKG1lc3NhZ2U6IEV2ZW50TWVzc2FnZTxXaW5kb3dFdmVudE1lc3NhZ2U+KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IG1lc3NhZ2UuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXN0b3JlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRCdXMub24oV0lORE9XX0RFU1RST1ksIChtZXNzYWdlOiBFdmVudE1lc3NhZ2U8V2luZG93RXZlbnRNZXNzYWdlPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBtZXNzYWdlLmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgICAgICB3aW5kb3cuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRXaW5kb3cod2luZG93OiBVSVdpbmRvdyB8IG51bGwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl93aW5kb3cgPSB3aW5kb3c7XHJcbiAgICB9XHJcbn0iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuQnJvd3NlclNwcml0ZVN5bWJvbCA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIFNwcml0ZVN5bWJvbCA9IGZ1bmN0aW9uIFNwcml0ZVN5bWJvbChyZWYpIHtcbiAgdmFyIGlkID0gcmVmLmlkO1xuICB2YXIgdmlld0JveCA9IHJlZi52aWV3Qm94O1xuICB2YXIgY29udGVudCA9IHJlZi5jb250ZW50O1xuXG4gIHRoaXMuaWQgPSBpZDtcbiAgdGhpcy52aWV3Qm94ID0gdmlld0JveDtcbiAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeSAoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCk7XG59O1xuXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBbJ2lkJywgJ3ZpZXdCb3gnLCAnY29udGVudCddLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuIGRlbGV0ZSB0aGlzJDFbcHJvcF07IH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIHBhcnNlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgdmFyIGhhc0ltcG9ydE5vZGUgPSAhIWRvY3VtZW50LmltcG9ydE5vZGU7XG4gIHZhciBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGNvbnRlbnQsICdpbWFnZS9zdmcreG1sJykuZG9jdW1lbnRFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBGaXggZm9yIGJyb3dzZXIgd2hpY2ggYXJlIHRocm93aW5nIFdyb25nRG9jdW1lbnRFcnJvclxuICAgKiBpZiB5b3UgaW5zZXJ0IGFuIGVsZW1lbnQgd2hpY2ggaXMgbm90IHBhcnQgb2YgdGhlIGRvY3VtZW50XG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzk4NjUxOS80NjI0NDAzXG4gICAqL1xuICBpZiAoaGFzSW1wb3J0Tm9kZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKGRvYywgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gZG9jO1xufTtcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGRlZXBtZXJnZSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgdW5kZWZpbmVkID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZC5hbWQpIHtcbiAgICAgICAgdW5kZWZpbmVkKGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH1cbn0oY29tbW9uanNHbG9iYWwsIGZ1bmN0aW9uICgpIHtcblxuZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsKSB7XG4gICAgdmFyIG5vbk51bGxPYmplY3QgPSB2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gbm9uTnVsbE9iamVjdFxuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgUmVnRXhwXSdcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IERhdGVdJ1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZUlmTmVjZXNzYXJ5KHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgY2xvbmUgPSBvcHRpb25zQXJndW1lbnQgJiYgb3B0aW9uc0FyZ3VtZW50LmNsb25lID09PSB0cnVlO1xuICAgIHJldHVybiAoY2xvbmUgJiYgaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKSA/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHRhcmdldC5zbGljZSgpO1xuICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KGUpKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGRlZXBtZXJnZSh0YXJnZXRbaV0sIGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmluZGV4T2YoZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5wdXNoKGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuICAgIGlmIChpc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeSh0YXJnZXRba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdGlvbnNBcmd1bWVudCB8fCB7IGFycmF5TWVyZ2U6IGRlZmF1bHRBcnJheU1lcmdlIH07XG4gICAgdmFyIGFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cbiAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KSA/IGFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkgOiBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSB8fCBhcnJheS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5IHdpdGggYXQgbGVhc3QgdHdvIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICAvLyB3ZSBhcmUgc3VyZSB0aGVyZSBhcmUgYXQgbGVhc3QgMiB2YWx1ZXMsIHNvIGl0IGlzIHNhZmUgdG8gaGF2ZSBubyBpbml0aWFsIHZhbHVlXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0pXG59O1xuXG5yZXR1cm4gZGVlcG1lcmdlXG5cbn0pKTtcbn0pO1xuXG52YXIgbmFtZXNwYWNlc18xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xudmFyIG5hbWVzcGFjZXMgPSB7XG4gIHN2Zzoge1xuICAgIG5hbWU6ICd4bWxucycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gIH0sXG4gIHhsaW5rOiB7XG4gICAgbmFtZTogJ3htbG5zOnhsaW5rJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJ1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuYW1lc3BhY2VzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59KTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIG9iamVjdFRvQXR0cnNTdHJpbmcgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJzKS5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICB2YXIgdmFsdWUgPSBhdHRyc1thdHRyXS50b1N0cmluZygpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICByZXR1cm4gKGF0dHIgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKTtcbiAgfSkuam9pbignICcpO1xufTtcblxudmFyIHN2ZyA9IG5hbWVzcGFjZXNfMS5zdmc7XG52YXIgeGxpbmsgPSBuYW1lc3BhY2VzXzEueGxpbms7XG5cbnZhciBkZWZhdWx0QXR0cnMgPSB7fTtcbmRlZmF1bHRBdHRyc1tzdmcubmFtZV0gPSBzdmcudXJpO1xuZGVmYXVsdEF0dHJzW3hsaW5rLm5hbWVdID0geGxpbmsudXJpO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29udGVudF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIHdyYXBJblN2Z1N0cmluZyA9IGZ1bmN0aW9uIChjb250ZW50LCBhdHRyaWJ1dGVzKSB7XG4gIGlmICggY29udGVudCA9PT0gdm9pZCAwICkgY29udGVudCA9ICcnO1xuXG4gIHZhciBhdHRycyA9IGRlZXBtZXJnZShkZWZhdWx0QXR0cnMsIGF0dHJpYnV0ZXMgfHwge30pO1xuICB2YXIgYXR0cnNSZW5kZXJlZCA9IG9iamVjdFRvQXR0cnNTdHJpbmcoYXR0cnMpO1xuICByZXR1cm4gKFwiPHN2ZyBcIiArIGF0dHJzUmVuZGVyZWQgKyBcIj5cIiArIGNvbnRlbnQgKyBcIjwvc3ZnPlwiKTtcbn07XG5cbnZhciBCcm93c2VyU3ByaXRlU3ltYm9sID0gKGZ1bmN0aW9uIChTcHJpdGVTeW1ib2wkJDEpIHtcbiAgZnVuY3Rpb24gQnJvd3NlclNwcml0ZVN5bWJvbCAoKSB7XG4gICAgU3ByaXRlU3ltYm9sJCQxLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBpZiAoIFNwcml0ZVN5bWJvbCQkMSApIEJyb3dzZXJTcHJpdGVTeW1ib2wuX19wcm90b19fID0gU3ByaXRlU3ltYm9sJCQxO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNwcml0ZVN5bWJvbCQkMSAmJiBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlICk7XG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnJvd3NlclNwcml0ZVN5bWJvbDtcblxuICB2YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBpc01vdW50ZWQ6IHt9IH07XG5cbiAgcHJvdG90eXBlQWNjZXNzb3JzLmlzTW91bnRlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5ub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAgICogQHJldHVybiB7QnJvd3NlclNwcml0ZVN5bWJvbH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wuY3JlYXRlRnJvbUV4aXN0aW5nTm9kZSA9IGZ1bmN0aW9uIGNyZWF0ZUZyb21FeGlzdGluZ05vZGUgKG5vZGUpIHtcbiAgICByZXR1cm4gbmV3IEJyb3dzZXJTcHJpdGVTeW1ib2woe1xuICAgICAgaWQ6IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpLFxuICAgICAgdmlld0JveDogbm9kZS5nZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnKSxcbiAgICAgIGNvbnRlbnQ6IG5vZGUub3V0ZXJIVE1MXG4gICAgfSk7XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgdGhpcy51bm1vdW50KCk7XG4gICAgfVxuICAgIFNwcml0ZVN5bWJvbCQkMS5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSB0YXJnZXRcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gbW91bnQgKHRhcmdldCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICB2YXIgbW91bnRUYXJnZXQgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbiAgICB2YXIgbm9kZSA9IHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgIG1vdW50VGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5zdHJpbmdpZnkoKTtcbiAgICByZXR1cm4gcGFyc2Uod3JhcEluU3ZnU3RyaW5nKGNvbnRlbnQpKS5jaGlsZE5vZGVzWzBdO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiB1bm1vdW50ICgpIHtcbiAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbiAgcmV0dXJuIEJyb3dzZXJTcHJpdGVTeW1ib2w7XG59KFNwcml0ZVN5bWJvbCkpO1xuXG5yZXR1cm4gQnJvd3NlclNwcml0ZVN5bWJvbDtcblxufSkpKTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5Ccm93c2VyU3ByaXRlID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgZGVlcG1lcmdlID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkLmFtZCkge1xuICAgICAgICB1bmRlZmluZWQoZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfVxufShjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKCkge1xuXG5mdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWwpIHtcbiAgICB2YXIgbm9uTnVsbE9iamVjdCA9IHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcblxuICAgIHJldHVybiBub25OdWxsT2JqZWN0XG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBSZWdFeHBdJ1xuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgRGF0ZV0nXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNsb25lSWZOZWNlc3NhcnkodmFsdWUsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBjbG9uZSA9IG9wdGlvbnNBcmd1bWVudCAmJiBvcHRpb25zQXJndW1lbnQuY2xvbmUgPT09IHRydWU7XG4gICAgcmV0dXJuIChjbG9uZSAmJiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpID8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnNBcmd1bWVudCkgOiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XG4gICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNNZXJnZWFibGVPYmplY3QoZSkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVlcG1lcmdlKHRhcmdldFtpXSwgZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuaW5kZXhPZihlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLnB1c2goY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0ge307XG4gICAgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHRhcmdldFtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCFpc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuICAgIHZhciBvcHRpb25zID0gb3B0aW9uc0FyZ3VtZW50IHx8IHsgYXJyYXlNZXJnZTogZGVmYXVsdEFycmF5TWVyZ2UgfTtcbiAgICB2YXIgYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblxuICAgIGlmIChhcnJheSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KSA6IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpXG4gICAgfVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpIHx8IGFycmF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCB0d28gZWxlbWVudHMnKVxuICAgIH1cblxuICAgIC8vIHdlIGFyZSBzdXJlIHRoZXJlIGFyZSBhdCBsZWFzdCAyIHZhbHVlcywgc28gaXQgaXMgc2FmZSB0byBoYXZlIG5vIGluaXRpYWwgdmFsdWVcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zQXJndW1lbnQpXG4gICAgfSlcbn07XG5cbnJldHVybiBkZWVwbWVyZ2VcblxufSkpO1xufSk7XG5cbi8vICAgICAgXG4vLyBBbiBldmVudCBoYW5kbGVyIGNhbiB0YWtlIGFuIG9wdGlvbmFsIGV2ZW50IGFyZ3VtZW50XG4vLyBhbmQgc2hvdWxkIG5vdCByZXR1cm4gYSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBbiBhcnJheSBvZiBhbGwgY3VycmVudGx5IHJlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnMgZm9yIGEgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEEgbWFwIG9mIGV2ZW50IHR5cGVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBcblxuLyoqIE1pdHQ6IFRpbnkgKH4yMDBiKSBmdW5jdGlvbmFsIGV2ZW50IGVtaXR0ZXIgLyBwdWJzdWIuXG4gKiAgQG5hbWUgbWl0dFxuICogIEByZXR1cm5zIHtNaXR0fVxuICovXG5mdW5jdGlvbiBtaXR0KGFsbCAgICAgICAgICAgICAgICAgKSB7XG5cdGFsbCA9IGFsbCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdHJldHVybiB7XG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvciwgb3IgYFwiKlwiYCBmb3IgYWxsIGV2ZW50c1xuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEZ1bmN0aW9uIHRvIGNhbGwgaW4gcmVzcG9uc2UgdG8gZ2l2ZW4gZXZlbnRcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9uOiBmdW5jdGlvbiBvbih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gdW5yZWdpc3RlciBgaGFuZGxlcmAgZnJvbSwgb3IgYFwiKlwiYFxuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEhhbmRsZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvZmY6IGZ1bmN0aW9uIG9mZih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0aWYgKGFsbFt0eXBlXSkge1xuXHRcdFx0XHRhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW52b2tlIGFsbCBoYW5kbGVycyBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICogSWYgcHJlc2VudCwgYFwiKlwiYCBoYW5kbGVycyBhcmUgaW52b2tlZCBhZnRlciB0eXBlLW1hdGNoZWQgaGFuZGxlcnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAgVGhlIGV2ZW50IHR5cGUgdG8gaW52b2tlXG5cdFx0ICogQHBhcmFtIHtBbnl9IFtldnRdICBBbnkgdmFsdWUgKG9iamVjdCBpcyByZWNvbW1lbmRlZCBhbmQgcG93ZXJmdWwpLCBwYXNzZWQgdG8gZWFjaCBoYW5kbGVyXG5cdFx0ICogQG1lbWJlcm9mIG1pdHRcblx0XHQgKi9cblx0XHRlbWl0OiBmdW5jdGlvbiBlbWl0KHR5cGUgICAgICAgICwgZXZ0ICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgW10pLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKGV2dCk7IH0pO1xuXHRcdFx0KGFsbFsnKiddIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcih0eXBlLCBldnQpOyB9KTtcblx0XHR9XG5cdH07XG59XG5cbnZhciBuYW1lc3BhY2VzXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG52YXIgbmFtZXNwYWNlcyA9IHtcbiAgc3ZnOiB7XG4gICAgbmFtZTogJ3htbG5zJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgfSxcbiAgeGxpbms6IHtcbiAgICBuYW1lOiAneG1sbnM6eGxpbmsnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnXG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5hbWVzcGFjZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn0pO1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgb2JqZWN0VG9BdHRyc1N0cmluZyA9IGZ1bmN0aW9uIChhdHRycykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cnMpLm1hcChmdW5jdGlvbiAoYXR0cikge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJzW2F0dHJdLnRvU3RyaW5nKCkucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgIHJldHVybiAoYXR0ciArIFwiPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpO1xuICB9KS5qb2luKCcgJyk7XG59O1xuXG52YXIgc3ZnID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRBdHRycyA9IHt9O1xuZGVmYXVsdEF0dHJzW3N2Zy5uYW1lXSA9IHN2Zy51cmk7XG5kZWZhdWx0QXR0cnNbeGxpbmsubmFtZV0gPSB4bGluay51cmk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZW50XVxuICogQHBhcmFtIHtPYmplY3R9IFthdHRyaWJ1dGVzXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgd3JhcEluU3ZnU3RyaW5nID0gZnVuY3Rpb24gKGNvbnRlbnQsIGF0dHJpYnV0ZXMpIHtcbiAgaWYgKCBjb250ZW50ID09PSB2b2lkIDAgKSBjb250ZW50ID0gJyc7XG5cbiAgdmFyIGF0dHJzID0gZGVlcG1lcmdlKGRlZmF1bHRBdHRycywgYXR0cmlidXRlcyB8fCB7fSk7XG4gIHZhciBhdHRyc1JlbmRlcmVkID0gb2JqZWN0VG9BdHRyc1N0cmluZyhhdHRycyk7XG4gIHJldHVybiAoXCI8c3ZnIFwiICsgYXR0cnNSZW5kZXJlZCArIFwiPlwiICsgY29udGVudCArIFwiPC9zdmc+XCIpO1xufTtcblxudmFyIHN2ZyQxID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayQxID0gbmFtZXNwYWNlc18xLnhsaW5rO1xuXG52YXIgZGVmYXVsdENvbmZpZyA9IHtcbiAgYXR0cnM6ICggb2JqID0ge1xuICAgIHN0eWxlOiBbJ3Bvc2l0aW9uOiBhYnNvbHV0ZScsICd3aWR0aDogMCcsICdoZWlnaHQ6IDAnXS5qb2luKCc7ICcpXG4gIH0sIG9ialtzdmckMS5uYW1lXSA9IHN2ZyQxLnVyaSwgb2JqW3hsaW5rJDEubmFtZV0gPSB4bGluayQxLnVyaSwgb2JqIClcbn07XG52YXIgb2JqO1xuXG52YXIgU3ByaXRlID0gZnVuY3Rpb24gU3ByaXRlKGNvbmZpZykge1xuICB0aGlzLmNvbmZpZyA9IGRlZXBtZXJnZShkZWZhdWx0Q29uZmlnLCBjb25maWcgfHwge30pO1xuICB0aGlzLnN5bWJvbHMgPSBbXTtcbn07XG5cbi8qKlxuICogQWRkIG5ldyBzeW1ib2wuIElmIHN5bWJvbCB3aXRoIHRoZSBzYW1lIGlkIGV4aXN0cyBpdCB3aWxsIGJlIHJlcGxhY2VkLlxuICogQHBhcmFtIHtTcHJpdGVTeW1ib2x9IHN5bWJvbFxuICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIC0gc3ltYm9sIHdhcyBhZGRlZCwgYGZhbHNlYCAtIHJlcGxhY2VkXG4gKi9cblNwcml0ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChzeW1ib2wpIHtcbiAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHN5bWJvbHMgPSByZWYuc3ltYm9scztcbiAgdmFyIGV4aXN0aW5nID0gdGhpcy5maW5kKHN5bWJvbC5pZCk7XG5cbiAgaWYgKGV4aXN0aW5nKSB7XG4gICAgc3ltYm9sc1tzeW1ib2xzLmluZGV4T2YoZXhpc3RpbmcpXSA9IHN5bWJvbDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzeW1ib2wgJiBkZXN0cm95IGl0XG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgZm91bmQgJiBzdWNjZXNzZnVsbHkgZGVzdHJveWVkLCBgZmFsc2VgIC0gb3RoZXJ3aXNlXG4gKi9cblNwcml0ZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChpZCkge1xuICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgc3ltYm9scyA9IHJlZi5zeW1ib2xzO1xuICB2YXIgc3ltYm9sID0gdGhpcy5maW5kKGlkKTtcblxuICBpZiAoc3ltYm9sKSB7XG4gICAgc3ltYm9scy5zcGxpY2Uoc3ltYm9scy5pbmRleE9mKHN5bWJvbCksIDEpO1xuICAgIHN5bWJvbC5kZXN0cm95KCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7U3ByaXRlU3ltYm9sfG51bGx9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIGZpbmQgKGlkKSB7XG4gIHJldHVybiB0aGlzLnN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmlkID09PSBpZDsgfSlbMF0gfHwgbnVsbDtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5TcHJpdGUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyAoaWQpIHtcbiAgcmV0dXJuIHRoaXMuZmluZChpZCkgIT09IG51bGw7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkgKCkge1xuICB2YXIgcmVmID0gdGhpcy5jb25maWc7XG4gICAgdmFyIGF0dHJzID0gcmVmLmF0dHJzO1xuICB2YXIgc3RyaW5naWZpZWRTeW1ib2xzID0gdGhpcy5zeW1ib2xzLm1hcChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5zdHJpbmdpZnkoKTsgfSkuam9pbignJyk7XG4gIHJldHVybiB3cmFwSW5TdmdTdHJpbmcoc3RyaW5naWZpZWRTeW1ib2xzLCBhdHRycyk7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCk7XG59O1xuXG5TcHJpdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdGhpcy5zeW1ib2xzLmZvckVhY2goZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuZGVzdHJveSgpOyB9KTtcbn07XG5cbnZhciBTcHJpdGVTeW1ib2wgPSBmdW5jdGlvbiBTcHJpdGVTeW1ib2wocmVmKSB7XG4gIHZhciBpZCA9IHJlZi5pZDtcbiAgdmFyIHZpZXdCb3ggPSByZWYudmlld0JveDtcbiAgdmFyIGNvbnRlbnQgPSByZWYuY29udGVudDtcblxuICB0aGlzLmlkID0gaWQ7XG4gIHRoaXMudmlld0JveCA9IHZpZXdCb3g7XG4gIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkgKCkge1xuICByZXR1cm4gdGhpcy5jb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgWydpZCcsICd2aWV3Qm94JywgJ2NvbnRlbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBkZWxldGUgdGhpcyQxW3Byb3BdOyB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbnZhciBwYXJzZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHZhciBoYXNJbXBvcnROb2RlID0gISFkb2N1bWVudC5pbXBvcnROb2RlO1xuICB2YXIgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhjb250ZW50LCAnaW1hZ2Uvc3ZnK3htbCcpLmRvY3VtZW50RWxlbWVudDtcblxuICAvKipcbiAgICogRml4IGZvciBicm93c2VyIHdoaWNoIGFyZSB0aHJvd2luZyBXcm9uZ0RvY3VtZW50RXJyb3JcbiAgICogaWYgeW91IGluc2VydCBhbiBlbGVtZW50IHdoaWNoIGlzIG5vdCBwYXJ0IG9mIHRoZSBkb2N1bWVudFxuICAgKiBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc5ODY1MTkvNDYyNDQwM1xuICAgKi9cbiAgaWYgKGhhc0ltcG9ydE5vZGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuaW1wb3J0Tm9kZShkb2MsIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIGRvYztcbn07XG5cbnZhciBCcm93c2VyU3ByaXRlU3ltYm9sID0gKGZ1bmN0aW9uIChTcHJpdGVTeW1ib2wkJDEpIHtcbiAgZnVuY3Rpb24gQnJvd3NlclNwcml0ZVN5bWJvbCAoKSB7XG4gICAgU3ByaXRlU3ltYm9sJCQxLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBpZiAoIFNwcml0ZVN5bWJvbCQkMSApIEJyb3dzZXJTcHJpdGVTeW1ib2wuX19wcm90b19fID0gU3ByaXRlU3ltYm9sJCQxO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNwcml0ZVN5bWJvbCQkMSAmJiBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlICk7XG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnJvd3NlclNwcml0ZVN5bWJvbDtcblxuICB2YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBpc01vdW50ZWQ6IHt9IH07XG5cbiAgcHJvdG90eXBlQWNjZXNzb3JzLmlzTW91bnRlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5ub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAgICogQHJldHVybiB7QnJvd3NlclNwcml0ZVN5bWJvbH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wuY3JlYXRlRnJvbUV4aXN0aW5nTm9kZSA9IGZ1bmN0aW9uIGNyZWF0ZUZyb21FeGlzdGluZ05vZGUgKG5vZGUpIHtcbiAgICByZXR1cm4gbmV3IEJyb3dzZXJTcHJpdGVTeW1ib2woe1xuICAgICAgaWQ6IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpLFxuICAgICAgdmlld0JveDogbm9kZS5nZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnKSxcbiAgICAgIGNvbnRlbnQ6IG5vZGUub3V0ZXJIVE1MXG4gICAgfSk7XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgdGhpcy51bm1vdW50KCk7XG4gICAgfVxuICAgIFNwcml0ZVN5bWJvbCQkMS5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSB0YXJnZXRcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gbW91bnQgKHRhcmdldCkge1xuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICB2YXIgbW91bnRUYXJnZXQgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbiAgICB2YXIgbm9kZSA9IHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgIG1vdW50VGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5zdHJpbmdpZnkoKTtcbiAgICByZXR1cm4gcGFyc2Uod3JhcEluU3ZnU3RyaW5nKGNvbnRlbnQpKS5jaGlsZE5vZGVzWzBdO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiB1bm1vdW50ICgpIHtcbiAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbiAgcmV0dXJuIEJyb3dzZXJTcHJpdGVTeW1ib2w7XG59KFNwcml0ZVN5bWJvbCkpO1xuXG52YXIgZGVmYXVsdENvbmZpZyQxID0ge1xuICAvKipcbiAgICogU2hvdWxkIGZvbGxvd2luZyBvcHRpb25zIGJlIGF1dG9tYXRpY2FsbHkgY29uZmlndXJlZDpcbiAgICogLSBgc3luY1VybHNXaXRoQmFzZVRhZ2BcbiAgICogLSBgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcmBcbiAgICogLSBgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2xgXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgYXV0b0NvbmZpZ3VyZTogdHJ1ZSxcblxuICAvKipcbiAgICogRGVmYXVsdCBtb3VudGluZyBzZWxlY3RvclxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbW91bnRUbzogJ2JvZHknLFxuXG4gIC8qKlxuICAgKiBGaXggZGlzYXBwZWFyaW5nIFNWRyBlbGVtZW50cyB3aGVuIDxiYXNlIGhyZWY+IGV4aXN0cy5cbiAgICogRXhlY3V0ZXMgd2hlbiBzcHJpdGUgbW91bnRlZC5cbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODI2NTMzNi83OTYxNTJcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXZlcmRpbWVuc2lvbi9hbmd1bGFyLXN2Zy1iYXNlLWZpeFxuICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvaXNzdWVzLzg5MzQjaXNzdWVjb21tZW50LTU2NTY4NDY2XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgc3luY1VybHNXaXRoQmFzZVRhZzogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNob3VsZCBzcHJpdGUgbGlzdGVuIGN1c3RvbSBsb2NhdGlvbiBjaGFuZ2UgZXZlbnRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBsaXN0ZW5Mb2NhdGlvbkNoYW5nZUV2ZW50OiB0cnVlLFxuXG4gIC8qKlxuICAgKiBDdXN0b20gd2luZG93IGV2ZW50IG5hbWUgd2hpY2ggc2hvdWxkIGJlIGVtaXR0ZWQgdG8gdXBkYXRlIHNwcml0ZSB1cmxzXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBsb2NhdGlvbkNoYW5nZUV2ZW50OiAnbG9jYXRpb25DaGFuZ2UnLFxuXG4gIC8qKlxuICAgKiBFbWl0IGxvY2F0aW9uIGNoYW5nZSBldmVudCBpbiBBbmd1bGFyIGF1dG9tYXRpY2FsbHlcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyOiBmYWxzZSxcblxuICAvKipcbiAgICogU2VsZWN0b3IgdG8gZmluZCBzeW1ib2xzIHVzYWdlcyB3aGVuIHVwZGF0aW5nIHNwcml0ZSB1cmxzXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB1c2FnZXNUb1VwZGF0ZTogJ3VzZVsqfGhyZWZdJyxcblxuICAvKipcbiAgICogRml4IEZpcmVmb3ggYnVnIHdoZW4gZ3JhZGllbnRzIGFuZCBwYXR0ZXJucyBkb24ndCB3b3JrIGlmIHRoZXkgYXJlIHdpdGhpbiBhIHN5bWJvbC5cbiAgICogRXhlY3V0ZXMgd2hlbiBzcHJpdGUgaXMgcmVuZGVyZWQsIGJ1dCBub3QgbW91bnRlZC5cbiAgICogQHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0zMDY2NzRcbiAgICogQHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0zNTM1NzVcbiAgICogQHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjM1MzY0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2w6IGZhbHNlXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Kn0gYXJyYXlMaWtlXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xudmFyIGFycmF5RnJvbSA9IGZ1bmN0aW9uIChhcnJheUxpa2UpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5TGlrZSwgMCk7XG59O1xuXG52YXIgYnJvd3NlciA9IHtcbiAgaXNDaHJvbWU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC9jaHJvbWUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyB9LFxuICBpc0ZpcmVmb3g6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC9maXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgfSxcblxuICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM3NTAzKHY9dnMuODUpLmFzcHhcbiAgaXNJRTogZnVuY3Rpb24gKCkgeyByZXR1cm4gL21zaWUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IC90cmlkZW50L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgfSxcbiAgaXNFZGdlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAvZWRnZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gZGF0YVxuICovXG52YXIgZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XG4gIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICBldmVudC5pbml0Q3VzdG9tRXZlbnQobmFtZSwgZmFsc2UsIGZhbHNlLCBkYXRhKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxuLyoqXG4gKiBJRSBkb2Vzbid0IGV2YWx1YXRlIDxzdHlsZT4gdGFncyBpbiBTVkdzIHRoYXQgYXJlIGR5bmFtaWNhbGx5IGFkZGVkIHRvIHRoZSBwYWdlLlxuICogVGhpcyB0cmljayB3aWxsIHRyaWdnZXIgSUUgdG8gcmVhZCBhbmQgdXNlIGFueSBleGlzdGluZyBTVkcgPHN0eWxlPiB0YWdzLlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vaWNvbmljL1NWR0luamVjdG9yL2lzc3Vlcy8yM1xuICogQHNlZSBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMDg5ODQ2OS9cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgRE9NIEVsZW1lbnQgdG8gc2VhcmNoIDxzdHlsZT4gdGFncyBpblxuICogQHJldHVybiB7QXJyYXk8SFRNTFN0eWxlRWxlbWVudD59XG4gKi9cbnZhciBldmFsU3R5bGVzSUVXb3JrYXJvdW5kID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIHVwZGF0ZWROb2RlcyA9IFtdO1xuXG4gIGFycmF5RnJvbShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJykpXG4gICAgLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCArPSAnJztcbiAgICAgIHVwZGF0ZWROb2Rlcy5wdXNoKHN0eWxlKTtcbiAgICB9KTtcblxuICByZXR1cm4gdXBkYXRlZE5vZGVzO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF0gSWYgbm90IHByb3ZpZGVkIC0gY3VycmVudCBVUkwgd2lsbCBiZSB1c2VkXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBnZXRVcmxXaXRob3V0RnJhZ21lbnQgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiAodXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zcGxpdCgnIycpWzBdO1xufTtcblxuLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICovXG52YXIgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlciA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHJvb3RTY29wZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlKSB7XG4gICAgJHJvb3RTY29wZS4kb24oJyRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbiAoZSwgbmV3VXJsLCBvbGRVcmwpIHtcbiAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCB7IG9sZFVybDogb2xkVXJsLCBuZXdVcmw6IG5ld1VybCB9KTtcbiAgICB9KTtcbiAgfV0pO1xufTtcblxudmFyIGRlZmF1bHRTZWxlY3RvciA9ICdsaW5lYXJHcmFkaWVudCwgcmFkaWFsR3JhZGllbnQsIHBhdHRlcm4nO1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3ZnXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yXVxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID0gZnVuY3Rpb24gKHN2Zywgc2VsZWN0b3IpIHtcbiAgaWYgKCBzZWxlY3RvciA9PT0gdm9pZCAwICkgc2VsZWN0b3IgPSBkZWZhdWx0U2VsZWN0b3I7XG5cbiAgYXJyYXlGcm9tKHN2Zy5xdWVyeVNlbGVjdG9yQWxsKCdzeW1ib2wnKSkuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgYXJyYXlGcm9tKHN5bWJvbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgc3ltYm9sLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHN5bWJvbCk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gc3ZnO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW21hdGNoZXJdXG4gKiBAcmV0dXJuIHtBdHRyW119XG4gKi9cbmZ1bmN0aW9uIHNlbGVjdEF0dHJpYnV0ZXMobm9kZXMsIG1hdGNoZXIpIHtcbiAgdmFyIGF0dHJzID0gYXJyYXlGcm9tKG5vZGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbm9kZSkge1xuICAgIGlmICghbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIHZhciBhcnJheWZpZWQgPSBhcnJheUZyb20obm9kZS5hdHRyaWJ1dGVzKTtcbiAgICB2YXIgbWF0Y2hlZCA9IG1hdGNoZXIgPyBhcnJheWZpZWQuZmlsdGVyKG1hdGNoZXIpIDogYXJyYXlmaWVkO1xuICAgIHJldHVybiBhY2MuY29uY2F0KG1hdGNoZWQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGF0dHJzO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8Tm9kZX0gbm9kZXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Nsb25lPXRydWVdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxudmFyIHhMaW5rTlMgPSBuYW1lc3BhY2VzXzEueGxpbmsudXJpO1xudmFyIHhMaW5rQXR0ck5hbWUgPSAneGxpbms6aHJlZic7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxudmFyIHNwZWNpYWxVcmxDaGFyc1BhdHRlcm4gPSAvW3t9fFxcXFxcXF5cXFtcXF1gXCI8Pl0vZztcblxuZnVuY3Rpb24gZW5jb2Rlcih1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKHNwZWNpYWxVcmxDaGFyc1BhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiAoXCIlXCIgKyAobWF0Y2hbMF0uY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCBcIlxcXFwkJlwiKTsgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlTGlzdH0gbm9kZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGFydHNXaXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZVdpdGhcbiAqIEByZXR1cm4ge05vZGVMaXN0fVxuICovXG5mdW5jdGlvbiB1cGRhdGVSZWZlcmVuY2VzKG5vZGVzLCBzdGFydHNXaXRoLCByZXBsYWNlV2l0aCkge1xuICBhcnJheUZyb20obm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgaHJlZiA9IG5vZGUuZ2V0QXR0cmlidXRlKHhMaW5rQXR0ck5hbWUpO1xuICAgIGlmIChocmVmICYmIGhyZWYuaW5kZXhPZihzdGFydHNXaXRoKSA9PT0gMCkge1xuICAgICAgdmFyIG5ld1VybCA9IGhyZWYucmVwbGFjZShzdGFydHNXaXRoLCByZXBsYWNlV2l0aCk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZU5TKHhMaW5rTlMsIHhMaW5rQXR0ck5hbWUsIG5ld1VybCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbm9kZXM7XG59XG5cbi8qKlxuICogTGlzdCBvZiBTVkcgYXR0cmlidXRlcyB0byB1cGRhdGUgdXJsKCkgdGFyZ2V0IGluIHRoZW1cbiAqL1xudmFyIGF0dExpc3QgPSBbXG4gICdjbGlwUGF0aCcsXG4gICdjb2xvclByb2ZpbGUnLFxuICAnc3JjJyxcbiAgJ2N1cnNvcicsXG4gICdmaWxsJyxcbiAgJ2ZpbHRlcicsXG4gICdtYXJrZXInLFxuICAnbWFya2VyU3RhcnQnLFxuICAnbWFya2VyTWlkJyxcbiAgJ21hcmtlckVuZCcsXG4gICdtYXNrJyxcbiAgJ3N0cm9rZScsXG4gICdzdHlsZSdcbl07XG5cbnZhciBhdHRTZWxlY3RvciA9IGF0dExpc3QubWFwKGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiAoXCJbXCIgKyBhdHRyICsgXCJdXCIpOyB9KS5qb2luKCcsJyk7XG5cbi8qKlxuICogVXBkYXRlIFVSTHMgaW4gc3ZnIGltYWdlIChsaWtlIGBmaWxsPVwidXJsKC4uLilcImApIGFuZCB1cGRhdGUgcmVmZXJlbmNpbmcgZWxlbWVudHNcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3ZnXG4gKiBAcGFyYW0ge05vZGVMaXN0fSByZWZlcmVuY2VzXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHN0YXJ0c1dpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlV2l0aFxuICogQHJldHVybiB7dm9pZH1cbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3Qgc3ByaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnLnNwcml0ZScpO1xuICogY29uc3QgdXNhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndXNlJyk7XG4gKiB1cGRhdGVVcmxzKHNwcml0ZSwgdXNhZ2VzLCAnIycsICdwcmVmaXgjJyk7XG4gKi9cbnZhciB1cGRhdGVVcmxzID0gZnVuY3Rpb24gKHN2ZywgcmVmZXJlbmNlcywgc3RhcnRzV2l0aCwgcmVwbGFjZVdpdGgpIHtcbiAgdmFyIHN0YXJ0c1dpdGhFbmNvZGVkID0gZW5jb2RlcihzdGFydHNXaXRoKTtcbiAgdmFyIHJlcGxhY2VXaXRoRW5jb2RlZCA9IGVuY29kZXIocmVwbGFjZVdpdGgpO1xuXG4gIHZhciBub2RlcyA9IHN2Zy5xdWVyeVNlbGVjdG9yQWxsKGF0dFNlbGVjdG9yKTtcbiAgdmFyIGF0dHJzID0gc2VsZWN0QXR0cmlidXRlcyhub2RlcywgZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBsb2NhbE5hbWUgPSByZWYubG9jYWxOYW1lO1xuICAgIHZhciB2YWx1ZSA9IHJlZi52YWx1ZTtcblxuICAgIHJldHVybiBhdHRMaXN0LmluZGV4T2YobG9jYWxOYW1lKSAhPT0gLTEgJiYgdmFsdWUuaW5kZXhPZigoXCJ1cmwoXCIgKyBzdGFydHNXaXRoRW5jb2RlZCkpICE9PSAtMTtcbiAgfSk7XG5cbiAgYXR0cnMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gYXR0ci52YWx1ZSA9IGF0dHIudmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChzdGFydHNXaXRoRW5jb2RlZCksICdnJyksIHJlcGxhY2VXaXRoRW5jb2RlZCk7IH0pO1xuICB1cGRhdGVSZWZlcmVuY2VzKHJlZmVyZW5jZXMsIHN0YXJ0c1dpdGhFbmNvZGVkLCByZXBsYWNlV2l0aEVuY29kZWQpO1xufTtcblxuLyoqXG4gKiBJbnRlcm5hbCBlbWl0dGVyIGV2ZW50c1xuICogQGVudW1cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBFdmVudHMgPSB7XG4gIE1PVU5UOiAnbW91bnQnLFxuICBTWU1CT0xfTU9VTlQ6ICdzeW1ib2xfbW91bnQnXG59O1xuXG52YXIgQnJvd3NlclNwcml0ZSA9IChmdW5jdGlvbiAoU3ByaXRlJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGUoY2ZnKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgaWYgKCBjZmcgPT09IHZvaWQgMCApIGNmZyA9IHt9O1xuXG4gICAgU3ByaXRlJCQxLmNhbGwodGhpcywgZGVlcG1lcmdlKGRlZmF1bHRDb25maWckMSwgY2ZnKSk7XG5cbiAgICB2YXIgZW1pdHRlciA9IG1pdHQoKTtcbiAgICB0aGlzLl9lbWl0dGVyID0gZW1pdHRlcjtcbiAgICB0aGlzLm5vZGUgPSBudWxsO1xuXG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIGNvbmZpZyA9IHJlZi5jb25maWc7XG5cbiAgICBpZiAoY29uZmlnLmF1dG9Db25maWd1cmUpIHtcbiAgICAgIHRoaXMuX2F1dG9Db25maWd1cmUoY2ZnKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnN5bmNVcmxzV2l0aEJhc2VUYWcpIHtcbiAgICAgIHZhciBiYXNlVXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGVtaXR0ZXIub24oRXZlbnRzLk1PVU5ULCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzJDEudXBkYXRlVXJscygnIycsIGJhc2VVcmwpOyB9KTtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlTG9jYXRpb25DaGFuZ2UgPSB0aGlzLl9oYW5kbGVMb2NhdGlvbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZUxvY2F0aW9uQ2hhbmdlID0gaGFuZGxlTG9jYXRpb25DaGFuZ2U7XG5cbiAgICAvLyBQcm92aWRlIHdheSB0byB1cGRhdGUgc3ByaXRlIHVybHMgZXh0ZXJuYWxseSB2aWEgZGlzcGF0Y2hpbmcgY3VzdG9tIHdpbmRvdyBldmVudFxuICAgIGlmIChjb25maWcubGlzdGVuTG9jYXRpb25DaGFuZ2VFdmVudCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoY29uZmlnLmxvY2F0aW9uQ2hhbmdlRXZlbnQsIGhhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcbiAgICB9XG5cbiAgICAvLyBFbWl0IGxvY2F0aW9uIGNoYW5nZSBldmVudCBpbiBBbmd1bGFyIGF1dG9tYXRpY2FsbHlcbiAgICBpZiAoY29uZmlnLmxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIpIHtcbiAgICAgIGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIoY29uZmlnLmxvY2F0aW9uQ2hhbmdlRXZlbnQpO1xuICAgIH1cblxuICAgIC8vIEFmdGVyIHNwcml0ZSBtb3VudGVkXG4gICAgZW1pdHRlci5vbihFdmVudHMuTU9VTlQsIGZ1bmN0aW9uIChzcHJpdGVOb2RlKSB7XG4gICAgICBpZiAoY29uZmlnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKSB7XG4gICAgICAgIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKHNwcml0ZU5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQWZ0ZXIgc3ltYm9sIG1vdW50ZWQgaW50byBzcHJpdGVcbiAgICBlbWl0dGVyLm9uKEV2ZW50cy5TWU1CT0xfTU9VTlQsIGZ1bmN0aW9uIChzeW1ib2xOb2RlKSB7XG4gICAgICBpZiAoY29uZmlnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKSB7XG4gICAgICAgIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sKHN5bWJvbE5vZGUucGFyZW50Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChicm93c2VyLmlzSUUoKSB8fCBicm93c2VyLmlzRWRnZSgpKSB7XG4gICAgICAgIGV2YWxTdHlsZXNJRVdvcmthcm91bmQoc3ltYm9sTm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIFNwcml0ZSQkMSApIEJyb3dzZXJTcHJpdGUuX19wcm90b19fID0gU3ByaXRlJCQxO1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNwcml0ZSQkMSAmJiBTcHJpdGUkJDEucHJvdG90eXBlICk7XG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnJvd3NlclNwcml0ZTtcblxuICB2YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBpc01vdW50ZWQ6IHt9IH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBwcm90b3R5cGVBY2Nlc3NvcnMuaXNNb3VudGVkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISF0aGlzLm5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEF1dG9tYXRpY2FsbHkgY29uZmlndXJlIGZvbGxvd2luZyBvcHRpb25zXG4gICAqIC0gYHN5bmNVcmxzV2l0aEJhc2VUYWdgXG4gICAqIC0gYGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXJgXG4gICAqIC0gYG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sYFxuICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5fYXV0b0NvbmZpZ3VyZSA9IGZ1bmN0aW9uIF9hdXRvQ29uZmlndXJlIChjZmcpIHtcbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgY29uZmlnID0gcmVmLmNvbmZpZztcblxuICAgIGlmICh0eXBlb2YgY2ZnLnN5bmNVcmxzV2l0aEJhc2VUYWcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcuc3luY1VybHNXaXRoQmFzZVRhZyA9IHR5cGVvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNmZy5sb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLmxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIgPSAnYW5ndWxhcicgaW4gd2luZG93O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2ZnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID0gYnJvd3Nlci5pc0ZpcmVmb3goKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudC5kZXRhaWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50LmRldGFpbC5vbGRVcmxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50LmRldGFpbC5uZXdVcmxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLl9oYW5kbGVMb2NhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uIF9oYW5kbGVMb2NhdGlvbkNoYW5nZSAoZXZlbnQpIHtcbiAgICB2YXIgcmVmID0gZXZlbnQuZGV0YWlsO1xuICAgIHZhciBvbGRVcmwgPSByZWYub2xkVXJsO1xuICAgIHZhciBuZXdVcmwgPSByZWYubmV3VXJsO1xuICAgIHRoaXMudXBkYXRlVXJscyhvbGRVcmwsIG5ld1VybCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgc3ltYm9sLiBJZiBzeW1ib2wgd2l0aCB0aGUgc2FtZSBpZCBleGlzdHMgaXQgd2lsbCBiZSByZXBsYWNlZC5cbiAgICogSWYgc3ByaXRlIGFscmVhZHkgbW91bnRlZCAtIGBzeW1ib2wubW91bnQoc3ByaXRlLm5vZGUpYCB3aWxsIGJlIGNhbGxlZC5cbiAgICogQGZpcmVzIEV2ZW50cyNTWU1CT0xfTU9VTlRcbiAgICogQHBhcmFtIHtCcm93c2VyU3ByaXRlU3ltYm9sfSBzeW1ib2xcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIC0gc3ltYm9sIHdhcyBhZGRlZCwgYGZhbHNlYCAtIHJlcGxhY2VkXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKHN5bWJvbCkge1xuICAgIHZhciBzcHJpdGUgPSB0aGlzO1xuICAgIHZhciBpc05ld1N5bWJvbCA9IFNwcml0ZSQkMS5wcm90b3R5cGUuYWRkLmNhbGwodGhpcywgc3ltYm9sKTtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCAmJiBpc05ld1N5bWJvbCkge1xuICAgICAgc3ltYm9sLm1vdW50KHNwcml0ZS5ub2RlKTtcbiAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFdmVudHMuU1lNQk9MX01PVU5ULCBzeW1ib2wubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTmV3U3ltYm9sO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBdHRhY2ggdG8gZXhpc3RpbmcgRE9NIG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmd8RWxlbWVudH0gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH0gYXR0YWNoZWQgRE9NIEVsZW1lbnQuIG51bGwgaWYgbm9kZSB0byBhdHRhY2ggbm90IGZvdW5kLlxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gYXR0YWNoICh0YXJnZXQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBzcHJpdGUgPSB0aGlzO1xuXG4gICAgaWYgKHNwcml0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBzcHJpdGUubm9kZTtcbiAgICB9XG5cbiAgICAvKiogQHR5cGUgRWxlbWVudCAqL1xuICAgIHZhciBub2RlID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgc3ByaXRlLm5vZGUgPSBub2RlO1xuXG4gICAgLy8gQWxyZWFkeSBhZGRlZCBzeW1ib2xzIG5lZWRzIHRvIGJlIG1vdW50ZWRcbiAgICB0aGlzLnN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgICBzeW1ib2wubW91bnQoc3ByaXRlLm5vZGUpO1xuICAgICAgdGhpcyQxLl9lbWl0dGVyLmVtaXQoRXZlbnRzLlNZTUJPTF9NT1VOVCwgc3ltYm9sLm5vZGUpO1xuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIHN5bWJvbHMgZnJvbSBleGlzdGluZyBET00gbm9kZXMsIGFkZCBhbmQgbW91bnQgdGhlbVxuICAgIGFycmF5RnJvbShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N5bWJvbCcpKVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbE5vZGUpIHtcbiAgICAgICAgdmFyIHN5bWJvbCA9IEJyb3dzZXJTcHJpdGVTeW1ib2wuY3JlYXRlRnJvbUV4aXN0aW5nTm9kZShzeW1ib2xOb2RlKTtcbiAgICAgICAgc3ltYm9sLm5vZGUgPSBzeW1ib2xOb2RlOyAvLyBoYWNrIHRvIHByZXZlbnQgc3ltYm9sIG1vdW50aW5nIHRvIHNwcml0ZSB3aGVuIGFkZGluZ1xuICAgICAgICBzcHJpdGUuYWRkKHN5bWJvbCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFdmVudHMuTU9VTlQsIG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuICAgIHZhciBzeW1ib2xzID0gcmVmLnN5bWJvbHM7XG4gICAgdmFyIF9lbWl0dGVyID0gcmVmLl9lbWl0dGVyO1xuXG4gICAgc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmRlc3Ryb3koKTsgfSk7XG5cbiAgICBfZW1pdHRlci5vZmYoJyonKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihjb25maWcubG9jYXRpb25DaGFuZ2VFdmVudCwgdGhpcy5faGFuZGxlTG9jYXRpb25DaGFuZ2UpO1xuXG4gICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICB0aGlzLnVubW91bnQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBmaXJlcyBFdmVudHMjTU9VTlRcbiAgICogQHBhcmFtIHtzdHJpbmd8RWxlbWVudH0gW3RhcmdldF1cbiAgICogQHBhcmFtIHtib29sZWFufSBbcHJlcGVuZD1mYWxzZV1cbiAgICogQHJldHVybiB7RWxlbWVudHxudWxsfSByZW5kZXJlZCBzcHJpdGUgbm9kZS4gbnVsbCBpZiBtb3VudCBub2RlIG5vdCBmb3VuZC5cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gbW91bnQgKHRhcmdldCwgcHJlcGVuZCkge1xuICAgIGlmICggdGFyZ2V0ID09PSB2b2lkIDAgKSB0YXJnZXQgPSB0aGlzLmNvbmZpZy5tb3VudFRvO1xuICAgIGlmICggcHJlcGVuZCA9PT0gdm9pZCAwICkgcHJlcGVuZCA9IGZhbHNlO1xuXG4gICAgdmFyIHNwcml0ZSA9IHRoaXM7XG5cbiAgICBpZiAoc3ByaXRlLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIHNwcml0ZS5ub2RlO1xuICAgIH1cblxuICAgIHZhciBtb3VudE5vZGUgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbiAgICB2YXIgbm9kZSA9IHNwcml0ZS5yZW5kZXIoKTtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuXG4gICAgaWYgKHByZXBlbmQgJiYgbW91bnROb2RlLmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgIG1vdW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgbW91bnROb2RlLmNoaWxkTm9kZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3VudE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZW1pdHRlci5lbWl0KEV2ZW50cy5NT1VOVCwgbm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIHBhcnNlKHRoaXMuc3RyaW5naWZ5KCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXRhY2ggc3ByaXRlIGZyb20gdGhlIERPTVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uIHVubW91bnQgKCkge1xuICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBVUkxzIGluIHNwcml0ZSBhbmQgdXNhZ2UgZWxlbWVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9sZFVybFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VXJsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIFVSTHMgd2FzIHVwZGF0ZWQsIGBmYWxzZWAgLSBzcHJpdGUgaXMgbm90IG1vdW50ZWRcbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnVwZGF0ZVVybHMgPSBmdW5jdGlvbiB1cGRhdGVVcmxzJDEgKG9sZFVybCwgbmV3VXJsKSB7XG4gICAgaWYgKCF0aGlzLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB1c2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29uZmlnLnVzYWdlc1RvVXBkYXRlKTtcblxuICAgIHVwZGF0ZVVybHMoXG4gICAgICB0aGlzLm5vZGUsXG4gICAgICB1c2FnZXMsXG4gICAgICAoKGdldFVybFdpdGhvdXRGcmFnbWVudChvbGRVcmwpKSArIFwiI1wiKSxcbiAgICAgICgoZ2V0VXJsV2l0aG91dEZyYWdtZW50KG5ld1VybCkpICsgXCIjXCIpXG4gICAgKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBCcm93c2VyU3ByaXRlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbiAgcmV0dXJuIEJyb3dzZXJTcHJpdGU7XG59KFNwcml0ZSkpO1xuXG52YXIgcmVhZHkkMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbi8qIVxuICAqIGRvbXJlYWR5IChjKSBEdXN0aW4gRGlheiAyMDE0IC0gTGljZW5zZSBNSVRcbiAgKi9cbiFmdW5jdGlvbiAobmFtZSwgZGVmaW5pdGlvbikge1xuXG4gIHsgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKCk7IH1cblxufSgnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGZucyA9IFtdLCBsaXN0ZW5lclxuICAgICwgZG9jID0gZG9jdW1lbnRcbiAgICAsIGhhY2sgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsXG4gICAgLCBkb21Db250ZW50TG9hZGVkID0gJ0RPTUNvbnRlbnRMb2FkZWQnXG4gICAgLCBsb2FkZWQgPSAoaGFjayA/IC9ebG9hZGVkfF5jLyA6IC9ebG9hZGVkfF5pfF5jLykudGVzdChkb2MucmVhZHlTdGF0ZSk7XG5cblxuICBpZiAoIWxvYWRlZClcbiAgeyBkb2MuYWRkRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihkb21Db250ZW50TG9hZGVkLCBsaXN0ZW5lcik7XG4gICAgbG9hZGVkID0gMTtcbiAgICB3aGlsZSAobGlzdGVuZXIgPSBmbnMuc2hpZnQoKSkgeyBsaXN0ZW5lcigpOyB9XG4gIH0pOyB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIGxvYWRlZCA/IHNldFRpbWVvdXQoZm4sIDApIDogZm5zLnB1c2goZm4pO1xuICB9XG5cbn0pO1xufSk7XG5cbnZhciBzcHJpdGVOb2RlSWQgPSAnX19TVkdfU1BSSVRFX05PREVfXyc7XG52YXIgc3ByaXRlR2xvYmFsVmFyTmFtZSA9ICdfX1NWR19TUFJJVEVfXyc7XG52YXIgaXNTcHJpdGVFeGlzdHMgPSAhIXdpbmRvd1tzcHJpdGVHbG9iYWxWYXJOYW1lXTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcbnZhciBzcHJpdGU7XG5cbmlmIChpc1Nwcml0ZUV4aXN0cykge1xuICBzcHJpdGUgPSB3aW5kb3dbc3ByaXRlR2xvYmFsVmFyTmFtZV07XG59IGVsc2Uge1xuICBzcHJpdGUgPSBuZXcgQnJvd3NlclNwcml0ZSh7IGF0dHJzOiB7IGlkOiBzcHJpdGVOb2RlSWQgfSB9KTtcbiAgd2luZG93W3Nwcml0ZUdsb2JhbFZhck5hbWVdID0gc3ByaXRlO1xufVxuXG52YXIgbG9hZFNwcml0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENoZWNrIGZvciBwYWdlIGFscmVhZHkgY29udGFpbnMgc3ByaXRlIG5vZGVcbiAgICogSWYgZm91bmQgLSBhdHRhY2ggdG8gYW5kIHJldXNlIGl0J3MgY29udGVudFxuICAgKiBJZiBub3QgLSByZW5kZXIgYW5kIG1vdW50IHRoZSBuZXcgc3ByaXRlXG4gICAqL1xuICB2YXIgZXhpc3RpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzcHJpdGVOb2RlSWQpO1xuXG4gIGlmIChleGlzdGluZykge1xuICAgIHNwcml0ZS5hdHRhY2goZXhpc3RpbmcpO1xuICB9IGVsc2Uge1xuICAgIHNwcml0ZS5tb3VudChkb2N1bWVudC5ib2R5LCB0cnVlKTtcbiAgfVxufTtcblxuaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgbG9hZFNwcml0ZSgpO1xufSBlbHNlIHtcbiAgcmVhZHkkMShsb2FkU3ByaXRlKTtcbn1cblxudmFyIHNwcml0ZSQxID0gc3ByaXRlO1xuXG5yZXR1cm4gc3ByaXRlJDE7XG5cbn0pKSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9