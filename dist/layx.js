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
__webpack_require__(/*! ./svg/destroy.svg */ "./app/asset/svg/destroy.svg");
__webpack_require__(/*! ./svg/extra.svg */ "./app/asset/svg/extra.svg");
__webpack_require__(/*! ./svg/maximize.svg */ "./app/asset/svg/maximize.svg");
__webpack_require__(/*! ./svg/minimize.svg */ "./app/asset/svg/minimize.svg");
__webpack_require__(/*! ./svg/restore.svg */ "./app/asset/svg/restore.svg");


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
        this._element = null;
    }
    Object.defineProperty(Component.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    Component.prototype.readGlobalValue = function (path, defaultValue, startObject) {
        if (defaultValue === void 0) { defaultValue = null; }
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
    return Component;
}());
exports.Component = Component;


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
        _this.isSwitch = false;
        _this.color = "#000000";
        _this.backgroundColor = "transparent";
        _this.disabled = false;
        _this.visible = true;
        _this.size = 14;
        _this.icon = (_a = options) === null || _a === void 0 ? void 0 : _a.icon;
        _this.readOptions({
            color: _this.color,
            backgroundColor: _this.backgroundColor,
            disabled: _this.disabled,
            visible: _this.visible,
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
    UIIcon.prototype.createView = function () {
        var _this = this;
        var element = this._element = element_1.createDivElement();
        element_1.addCSSClasses(element, "icon", this.disabled ? "disable-icon" : undefined);
        element_1.addCSSStyles(element, {
            color: this.color,
            backgroundColor: this.backgroundColor,
            visibility: this.visible ? "visible" : "hidden",
            fontSize: this.size + "px"
        });
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
        var _a, _b;
        if (!this.element)
            return;
        element_1.addCSSStyles(this.element, {
            color: !this.isSwitch ? this.color : (_a = this.switchColor, (_a !== null && _a !== void 0 ? _a : this.color)),
            backgroundColor: !this.isSwitch ? this.backgroundColor : (_b = this.switchBackgroundColor, (_b !== null && _b !== void 0 ? _b : this.backgroundColor))
        });
        if (this.svgIcons[1]) {
            if (!this.isSwitch) {
                this.element.replaceChild(this.svgIcons[1], this.svgIcons[0]);
            }
            else {
                this.element.replaceChild(this.svgIcons[0], this.svgIcons[1]);
            }
        }
        this.isSwitch = !this.isSwitch;
    };
    __decorate([
        property_1.validator(validator_1.checkNoEmptyOrNull)
    ], UIIcon.prototype, "icon", void 0);
    __decorate([
        property_1.validator(validator_1.checkColor)
    ], UIIcon.prototype, "color", void 0);
    __decorate([
        property_1.validator(validator_1.checkColor)
    ], UIIcon.prototype, "backgroundColor", void 0);
    __decorate([
        property_1.validator(validator_1.checkBoolean)
    ], UIIcon.prototype, "disabled", void 0);
    __decorate([
        property_1.validator(validator_1.checkBoolean)
    ], UIIcon.prototype, "visible", void 0);
    __decorate([
        property_1.validator(validator_1.checkPstInt, [validator_1.checkMin, 12])
    ], UIIcon.prototype, "size", void 0);
    __decorate([
        property_1.validator(validator_1.checkFunction, undefined)
    ], UIIcon.prototype, "handler", void 0);
    __decorate([
        property_1.validator(validator_1.checkString, undefined)
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
var ui_icon_1 = __webpack_require__(/*! ../ui-icon */ "./app/component/ui-icon/index.ts");
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
            animate: _this.animate
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
    UIWindow.prototype.createView = function () {
        var _this = this;
        var element = this._element = element_1.createDivElement(this.id);
        element_1.addCSSClasses(element, "window", "flex-box", "col-direction", this.animate !== false ? "animate" : undefined, this.animate !== false ? string_1.stringFormat(const_1.ANIMATE_SHOW, this.animate) : undefined);
        element_1.addCSSStyles(element, {
            backgroundColor: "" + this.backgroundColor,
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
        element.appendChild(new ui_icon_1.UIIcon({
            icon: "maximize",
            handler: function (ev) {
                _this.eventBus.broadcast([const_1.WINDOW_MAXIMIZE], _this.eventMessage);
            },
            switchIcon: "restore"
        }).createView());
        element.appendChild(new ui_icon_1.UIIcon({
            icon: "destroy",
            handler: function (ev) {
                _this.eventBus.broadcast([const_1.WINDOW_DESTROY], _this.eventMessage);
            }
        }).createView());
        this.monitorEvent();
        this.monitorCenter.windows.unshift(this);
        return element;
    };
    UIWindow.prototype.monitorEvent = function () {
        var _this = this;
        if (!this.element)
            return;
        this.element.addEventListener("mousedown", function (ev) {
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
        property_1.validator(validator_1.checkColor)
    ], UIWindow.prototype, "backgroundColor", void 0);
    __decorate([
        property_1.validator(validator_1.checkPstInt)
    ], UIWindow.prototype, "zIndex", void 0);
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
exports.WINDOW_CREATE = "window:create";
exports.WINDOW_FOCUS = "window:focus";
exports.WINDOW_SHOW = "window:show";
exports.WINDOW_EXIST = "window:exist";
exports.WINDOW_MAXIMIZE = "window:maximize";
exports.WINDOW_MINIMIZE = "window:minimize";
exports.WINDOW_DESTROY = "window:destroy";
exports.ANIMATE_SHOW = "animate-{0}-show";
exports.ANIMATE_DESTROY = "animate-{0}-destroy";
exports.ANIMATE_MAXIMIZE = "animate-{0}-maximize";


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
    border: exports.BorderOptionContract
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
function inValidator(newValue, oldValue) {
    var e_1, _a;
    var values = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        values[_i - 2] = arguments[_i];
    }
    var valueOptions = [];
    var functionValidators = [];
    var objectValidators = [];
    values.map(function (item) {
        if (item === null || validator_1.checkBaseType(item, "string", "bigint", "boolean", "symbol", "undefined"))
            valueOptions.push(item);
        if (validator_1.checkFunctionValidator(item))
            functionValidators.push(item);
        if (validator_1.checkJSONObject(item))
            objectValidators.push(item);
    });
    if (validator_1.checkIn.apply(void 0, __spread([newValue], valueOptions)))
        return newValue;
    if (functionValidators.length > 0) {
        var isPassAllFunctionValidator = true;
        try {
            for (var functionValidators_1 = __values(functionValidators), functionValidators_1_1 = functionValidators_1.next(); !functionValidators_1_1.done; functionValidators_1_1 = functionValidators_1.next()) {
                var functionValidator = functionValidators_1_1.value;
                isPassAllFunctionValidator = validator_1.checkValidator(newValue, functionValidator);
                if (!isPassAllFunctionValidator)
                    break;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (functionValidators_1_1 && !functionValidators_1_1.done && (_a = functionValidators_1.return)) _a.call(functionValidators_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (isPassAllFunctionValidator)
            return newValue;
    }
    if (validator_1.checkJSONObject(newValue) && objectValidators.length > 0) {
        var _b = __read(objectValidators, 1), firstValidator = _b[0];
        for (var key in newValue) {
            var childValues = firstValidator[key];
            inValidator.apply(void 0, __spread([newValue[key], oldValue], (validator_1.checkArray(childValues) ? childValues : [childValues])));
        }
        return object_1.mergeJSONObject(oldValue, newValue);
    }
    exception_1.parameterInvalid();
}
function validator() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return decorator(function (newValue, propertyKey, value) {
        return inValidator.apply(void 0, __spread([newValue, value], values));
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
function readObject(path, defaultValue, startObject) {
    var _a;
    if (!validator_1.checkNoEmptyOrNull(path) || !validator_1.checkJSONObject(startObject))
        exception_1.parameterInvalid();
    path = string_1.removeIllegalCharacter(path);
    if (path.indexOf("/") === -1)
        return _a = startObject[path], (_a !== null && _a !== void 0 ? _a : defaultValue);
    var keys = path.split("/");
    var keyValue = readObject(keys[0], defaultValue, startObject);
    if (!validator_1.checkNoNullOrUndefined(keyValue))
        return defaultValue;
    for (var i = 0; i < keys.length; i++) {
        if (i + 1 >= keys.length)
            break;
        keyValue = readObject(keys[i + 1], defaultValue, keyValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9hc3NldC9zdHlsZS9hbmltYXRlLmNzcz9hMjlhIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvY29tbW9uLmNzcz80ZGUzIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvc3ZnLmNzcz9hZDhkIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvd2luZG93LmNzcz9iYjQzIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3ZnL2Rlc3Ryb3kuc3ZnIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3ZnL2V4dHJhLnN2ZyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2Fzc2V0L3N2Zy9tYXhpbWl6ZS5zdmciLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9hc3NldC9zdmcvbWluaW1pemUuc3ZnIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3ZnL3Jlc3RvcmUuc3ZnIiwid2VicGFjazovL2xheXgvLi9hcHAvY29tcG9uZW50L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29tcG9uZW50L3VpLWljb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb21wb25lbnQvdWktd2luZG93L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29uc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb250cmFjdC9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9ldmVudC1idXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2V4Y2VwdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvcmUvaGVscGVyL2VsZW1lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2hlbHBlci9vYmplY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2hlbHBlci9zdHJpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL3ZhbGlkYXRvci9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2VudHJ5L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvaGVscGVyL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9tb25pdG9yL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vbGF5eC8uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzIiwid2VicGFjazovL2xheXgvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtR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QztBQUNEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzMrQkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImxheXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsYXl4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxheXhcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlL2NvbW1vbi5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUvc3ZnLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS93aW5kb3cuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlL2FuaW1hdGUuY3NzJztcclxuXHJcbmltcG9ydCAnLi9zdmcvZGVzdHJveS5zdmcnO1xyXG5pbXBvcnQgJy4vc3ZnL2V4dHJhLnN2Zyc7XHJcbmltcG9ydCAnLi9zdmcvbWF4aW1pemUuc3ZnJztcclxuaW1wb3J0ICcuL3N2Zy9taW5pbWl6ZS5zdmcnO1xyXG5pbXBvcnQgJy4vc3ZnL3Jlc3RvcmUuc3ZnJztcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiZGVzdHJveVwiLFxuICBcInVzZVwiOiBcImRlc3Ryb3ktdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMjQgMTAyNFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGNsYXNzPVxcXCJpY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiBpZD1cXFwiZGVzdHJveVxcXCI+PGRlZnM+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPVxcXCJNOTMzLjg5MjU0ODE5IDEzOS43MTYwNjM0OEw4ODQuMjMxMjkyNzkgOTAuMDg5OTAzNjMgNTExLjk2NDkwMzYzIDQ2Mi4zOTEzODgzNCAxNDAuNDAwNDQxMTMgOTAuODI2OTI1ODMgOTAuODQ0NDc0MDMgMTQwLjM0Nzc5NjU2IDQ2Mi40MDg5MzY1MyA1MTEuOTEyMjU5MDcgOTAuMTA3NDUxODEgODg0LjIxMzc0NDYgMTM5LjczMzYxMTY2IDkzMy44NzUgNTEyLjAzNTA5NjM3IDU2MS41Mzg0MTg5MiA4ODMuNTk5NTU4ODcgOTMzLjEwMjg4MTQxIDkzMy4xNTU1MjU5NyA4ODMuNTgyMDEwNjggNTYxLjU5MTA2MzQ3IDUxMi4wMTc1NDgxOVpcXFwiIHAtaWQ9XFxcIjQ4MzNcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImV4dHJhXCIsXG4gIFwidXNlXCI6IFwiZXh0cmEtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMjQgMTAyNFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGNsYXNzPVxcXCJpY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiBpZD1cXFwiZXh0cmFcXFwiPjxkZWZzPjxzdHlsZSB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD1cXFwiTTUxMiAyNjkuMjU0NjU2YTk3LjEwOTc4ODQ1IDk3LjEwOTc4ODQ1IDAgMSAwIDAtMTk0LjE2MTMyMjY3IDk3LjEwOTc4ODQ1IDk3LjEwOTc4ODQ1IDAgMCAwIDAgMTk0LjE2MTMyMjY3elxcXCIgcC1pZD1cXFwiNDU5MVxcXCIgLz48cGF0aCBkPVxcXCJNNTEyIDUxMm0tOTcuMTA5Nzg4NDUgMGE5Ny4xMDk3ODg0NSA5Ny4xMDk3ODg0NSAwIDEgMCAxOTQuMjE5NTc2OSAwIDk3LjEwOTc4ODQ1IDk3LjEwOTc4ODQ1IDAgMSAwLTE5NC4yMTk1NzY5IDBaXFxcIiBwLWlkPVxcXCI0NTkyXFxcIiAvPjxwYXRoIGQ9XFxcIk01MTIgOTQ4LjkwNjY2NjY3YTk3LjEwOTc4ODQ1IDk3LjEwOTc4ODQ1IDAgMSAwIDAtMTk0LjIxOTU3Njg5IDk3LjEwOTc4ODQ1IDk3LjEwOTc4ODQ1IDAgMCAwIDAgMTk0LjIxOTU3Njg5elxcXCIgcC1pZD1cXFwiNDU5M1xcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwibWF4aW1pemVcIixcbiAgXCJ1c2VcIjogXCJtYXhpbWl6ZS11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAyNCAxMDI0XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgY2xhc3M9XFxcImljb25cXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIGlkPVxcXCJtYXhpbWl6ZVxcXCI+PGRlZnM+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPVxcXCJNNzUuNzQ5MTIyMjcgOTQ4LjI0NzM4NDc1TDc1Ljc0OTEyMjI3IDc1Ljc1MTQ1MTMxbDg3Mi41MDA1OTAzNyAwIDAgODcyLjQ5NTkzMzQ0TDc1Ljc0OTEyMjI3IDk0OC4yNDczODQ3NXpNODM5LjE4Nzg2Njc0IDE4NC44MTQ0NjExNUwxODQuODEyMTMzMjYgMTg0LjgxNDQ2MTE1bDAgNjU0LjM3NTczNDYyIDY1NC4zNzU3MzQ2MSAwTDgzOS4xODc4NjY3NCAxODQuODE0NDYxMTV6XFxcIiBwLWlkPVxcXCI0MTAyXFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanNcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJtaW5pbWl6ZVwiLFxuICBcInVzZVwiOiBcIm1pbmltaXplLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCBjbGFzcz1cXFwiaWNvblxcXCIgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgaWQ9XFxcIm1pbmltaXplXFxcIj48ZGVmcz48c3R5bGUgdHlwZT1cXFwidGV4dC9jc3NcXFwiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9XFxcIk02NS4yMzg4NCA0NTYuMTUyMDQxIDk1OC43NjAxMzcgNDU2LjE1MjA0MWwwIDExMS42OTU5MThMNjUuMjM4ODQgNTY3Ljg0Nzk1OSA2NS4yMzg4NCA0NTYuMTUyMDQxelxcXCIgcC1pZD1cXFwiNDIyMlxcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwicmVzdG9yZVwiLFxuICBcInVzZVwiOiBcInJlc3RvcmUtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMjQgMTAyNFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGNsYXNzPVxcXCJpY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiBpZD1cXFwicmVzdG9yZVxcXCI+PGRlZnM+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPVxcXCJNMjU2IDI1NlYxNDkuMzMzMzMzYzAtNTguODggNDcuODI5MzMzLTEwNi42NjY2NjcgMTA2LjY2NjY2Ny0xMDYuNjY2NjY2aDUxMmM1OC44OCAwIDEwNi42NjY2NjcgNDcuODI5MzMzIDEwNi42NjY2NjYgMTA2LjY2NjY2NnY1MTJjMCA1OC44OC00Ny44MjkzMzMgMTA2LjY2NjY2Ny0xMDYuNjY2NjY2IDEwNi42NjY2NjdoLTEwNi42NjY2Njd2MTA2LjY2NjY2N2MwIDU4Ljg4LTQ3LjgyOTMzMyAxMDYuNjY2NjY3LTEwNi42NjY2NjcgMTA2LjY2NjY2NkgxNDkuMzMzMzMzYy01OC44OCAwLTEwNi42NjY2NjctNDcuODI5MzMzLTEwNi42NjY2NjYtMTA2LjY2NjY2NlYzNjIuNjY2NjY3YzAtNTguODggNDcuODI5MzMzLTEwNi42NjY2NjcgMTA2LjY2NjY2Ni0xMDYuNjY2NjY3aDEwNi42NjY2Njd6IG0wIDg1LjMzMzMzM0gxNDkuMzMzMzMzYy0xMS43MzMzMzMgMC0yMS4zMzMzMzMgOS42LTIxLjMzMzMzMyAyMS4zMzMzMzR2NTEyYzAgMTEuNzMzMzMzIDkuNiAyMS4zMzMzMzMgMjEuMzMzMzMzIDIxLjMzMzMzM2g1MTJjMTEuNzMzMzMzIDAgMjEuMzMzMzMzLTkuNiAyMS4zMzMzMzQtMjEuMzMzMzMzdi0xMDYuNjY2NjY3SDM2Mi42NjY2NjdjLTU4Ljg4IDAtMTA2LjY2NjY2Ny00Ny44MjkzMzMtMTA2LjY2NjY2Ny0xMDYuNjY2NjY3VjM0MS4zMzMzMzN6IG04NS4zMzMzMzMtMTkydjUxMmMwIDExLjczMzMzMyA5LjYgMjEuMzMzMzMzIDIxLjMzMzMzNCAyMS4zMzMzMzRoNTEyYzExLjczMzMzMyAwIDIxLjMzMzMzMy05LjYgMjEuMzMzMzMzLTIxLjMzMzMzNFYxNDkuMzMzMzMzYzAtMTEuNzMzMzMzLTkuNi0yMS4zMzMzMzMtMjEuMzMzMzMzLTIxLjMzMzMzM0gzNjIuNjY2NjY3Yy0xMS43MzMzMzMgMC0yMS4zMzMzMzMgOS42LTIxLjMzMzMzNCAyMS4zMzMzMzN6XFxcIiBwLWlkPVxcXCI0MzQyXFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiLCJpbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL2NvcmUvZXZlbnQtYnVzJztcclxuaW1wb3J0IHsgcmVhZE9iamVjdCB9IGZyb20gJy4uL2NvcmUvaGVscGVyL29iamVjdCc7XHJcbmltcG9ydCB7IEpTT05PYmplY3QgfSBmcm9tICcuLi9jb3JlL3R5cGUnO1xyXG5pbXBvcnQgeyBFbnRyeSB9IGZyb20gJy4uL2VudHJ5JztcclxuaW1wb3J0IHsgTW9uaXRvckNlbnRlciB9IGZyb20gJy4uL21vbml0b3InO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUT3B0aW9uIGV4dGVuZHMgSlNPTk9iamVjdD4ge1xyXG4gICAgcHJpdmF0ZSBfX05BTUVfXzogYW55O1xyXG4gICAgcHJvdGVjdGVkIGVudHJ5OiBFbnRyeSA9IEVudHJ5Lkluc3RhbmNlKCk7XHJcbiAgICBwcm90ZWN0ZWQgZXZlbnRCdXM6IEV2ZW50QnVzID0gRXZlbnRCdXMuSW5zdGFuY2UoKTtcclxuICAgIHByb3RlY3RlZCBtb25pdG9yQ2VudGVyOiBNb25pdG9yQ2VudGVyID0gTW9uaXRvckNlbnRlci5JbnN0YW5jZSgpO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2VsZW1lbnQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IGVsZW1lbnQoKTogSFRNTERpdkVsZW1lbnQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIG9wdGlvbnM6IFRPcHRpb24pIHsgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZWFkR2xvYmFsVmFsdWUocGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IG51bGwsIHN0YXJ0T2JqZWN0ID0gdGhpcy5lbnRyeSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHJlYWRPYmplY3Q8YW55PihwYXRoLCBkZWZhdWx0VmFsdWUsIHN0YXJ0T2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVhZE9wdGlvbnMoa2V5VmFsdWU6IEpTT05PYmplY3QpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoXCI6XCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcylba2V5XSA9IHJlYWRPYmplY3Qoa2V5LCBrZXlWYWx1ZVtrZXldLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qga2V5UGF0aCA9IGtleS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgICg8YW55PnRoaXMpW2tleVBhdGhbMF1dID0gcmVhZE9iamVjdChrZXlQYXRoWzFdLCBrZXlWYWx1ZVtrZXldLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLyc7XHJcbmltcG9ydCB7IHZhbGlkYXRvciB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5JztcclxuaW1wb3J0IHtcclxuICAgIGFkZENTU0NsYXNzZXMsIGFkZENTU1N0eWxlcywgY3JlYXRlRGl2RWxlbWVudCwgY3JlYXRlU3ZnRWxlbWVudCwgUFJFRklYXHJcbn0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXIvZWxlbWVudCc7XHJcbmltcG9ydCB7IE1vdXNlQW5kVG91Y2hFdmVudCB9IGZyb20gJy4uLy4uL2NvcmUvdHlwZSc7XHJcbmltcG9ydCB7XHJcbiAgICBjaGVja0Jvb2xlYW4sIGNoZWNrQ29sb3IsIGNoZWNrRnVuY3Rpb24sIGNoZWNrTWluLCBjaGVja05vRW1wdHlPck51bGwsIGNoZWNrUHN0SW50LCBjaGVja1N0cmluZ1xyXG59IGZyb20gJy4uLy4uL2NvcmUvdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgQ29tcG9uZW50RWxlbWVudCwgVUlJY29uT3B0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZSc7XHJcbmltcG9ydCB7IFVJQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBVSUljb24gZXh0ZW5kcyBDb21wb25lbnQ8VUlJY29uT3B0aW9uPiBpbXBsZW1lbnRzIFVJQ29tcG9uZW50PFVJSWNvbk9wdGlvbj4ge1xyXG4gICAgcHJpdmF0ZSBpc1N3aXRjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzdmdJY29uczogW1NWR1NWR0VsZW1lbnQsIFNWR1NWR0VsZW1lbnQ/XTtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBVSUljb25PcHRpb24pIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy5pY29uID0gb3B0aW9ucz8uaWNvbjtcclxuICAgICAgICB0aGlzLnJlYWRPcHRpb25zKHtcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiB0aGlzLnZpc2libGUsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuaGFuZGxlcixcclxuICAgICAgICAgICAgc3dpdGNoSWNvbjogdGhpcy5zd2l0Y2hJY29uLFxyXG4gICAgICAgICAgICBzd2l0Y2hDb2xvcjogdGhpcy5zd2l0Y2hDb2xvcixcclxuICAgICAgICAgICAgc3dpdGNoQmFja2dyb3VuZENvbG9yOiB0aGlzLnN3aXRjaEJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgc3dpdGNoSGFuZGxlcjogdGhpcy5zd2l0Y2hIYW5kbGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdmdJY29ucyA9IFtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdmdJY29uKHRoaXMuaWNvbiksXHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoSWNvbiA/IHRoaXMuY3JlYXRlU3ZnSWNvbih0aGlzLnN3aXRjaEljb24pIDogdW5kZWZpbmVkXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrTm9FbXB0eU9yTnVsbClcclxuICAgIHB1YmxpYyBpY29uOiBzdHJpbmc7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja0NvbG9yKVxyXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSBcIiMwMDAwMDBcIjtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrQ29sb3IpXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSBcInRyYW5zcGFyZW50XCI7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja0Jvb2xlYW4pXHJcbiAgICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrQm9vbGVhbilcclxuICAgIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0SW50LCBbY2hlY2tNaW4sIDEyXSlcclxuICAgIHB1YmxpYyBzaXplOiBudW1iZXIgPSAxNDtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrRnVuY3Rpb24sIHVuZGVmaW5lZClcclxuICAgIHB1YmxpYyBoYW5kbGVyPzogKGV2OiBNb3VzZUFuZFRvdWNoRXZlbnQpID0+IHZvaWQ7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1N0cmluZywgdW5kZWZpbmVkKVxyXG4gICAgcHVibGljIHN3aXRjaEljb24/OiBzdHJpbmc7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja0NvbG9yLCB1bmRlZmluZWQpXHJcbiAgICBwdWJsaWMgc3dpdGNoQ29sb3I/OiBzdHJpbmc7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja0NvbG9yLCB1bmRlZmluZWQpXHJcbiAgICBwdWJsaWMgc3dpdGNoQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tGdW5jdGlvbiwgdW5kZWZpbmVkKVxyXG4gICAgcHVibGljIHN3aXRjaEhhbmRsZXI/OiAoZXY6IE1vdXNlQW5kVG91Y2hFdmVudCkgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlVmlldygpOiBDb21wb25lbnRFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZWxlbWVudCA9IGNyZWF0ZURpdkVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgYWRkQ1NTQ2xhc3NlcyhlbGVtZW50LFxyXG4gICAgICAgICAgICBcImljb25cIixcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA/IFwiZGlzYWJsZS1pY29uXCIgOiB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICBhZGRDU1NTdHlsZXMoZWxlbWVudCwgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdGhpcy52aXNpYmxlID8gYHZpc2libGVgIDogYGhpZGRlbmAsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBgJHt0aGlzLnNpemV9cHhgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zdmdJY29uc1swXSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldjogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTd2l0Y2gpIHRoaXMuaGFuZGxlciAmJiB0aGlzLmhhbmRsZXIoZXYpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuc3dpdGNoSGFuZGxlciA/IHRoaXMuc3dpdGNoSGFuZGxlcihldikgOiAodGhpcy5oYW5kbGVyICYmIHRoaXMuaGFuZGxlcihldikpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdHlsZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVN2Z0ljb24oaWNvbjogc3RyaW5nKTogU1ZHU1ZHRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNyZWF0ZVN2Z0VsZW1lbnQoaWNvbik7XHJcbiAgICAgICAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgJHtQUkVGSVh9c3ZnYCk7XHJcbiAgICAgICAgcmV0dXJuIHN2Z0VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VTdHlsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBhZGRDU1NTdHlsZXModGhpcy5lbGVtZW50LCA8Q1NTU3R5bGVEZWNsYXJhdGlvbj57XHJcbiAgICAgICAgICAgIGNvbG9yOiAhdGhpcy5pc1N3aXRjaCA/IHRoaXMuY29sb3IgOiAodGhpcy5zd2l0Y2hDb2xvciA/PyB0aGlzLmNvbG9yKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAhdGhpcy5pc1N3aXRjaCA/IHRoaXMuYmFja2dyb3VuZENvbG9yIDogKHRoaXMuc3dpdGNoQmFja2dyb3VuZENvbG9yID8/IHRoaXMuYmFja2dyb3VuZENvbG9yKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdmdJY29uc1sxXSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTd2l0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZXBsYWNlQ2hpbGQodGhpcy5zdmdJY29uc1sxXSwgdGhpcy5zdmdJY29uc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVwbGFjZUNoaWxkKHRoaXMuc3ZnSWNvbnNbMF0sIHRoaXMuc3ZnSWNvbnNbMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzU3dpdGNoID0gIXRoaXMuaXNTd2l0Y2g7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8nO1xyXG5pbXBvcnQge1xyXG4gICAgQU5JTUFURV9ERVNUUk9ZLCBBTklNQVRFX01BWElNSVpFLCBBTklNQVRFX1NIT1csIEFuaW1hdGlvbk9wdGlvbmFsLCBXSU5ET1dfREVTVFJPWSxcclxuICAgIFdJTkRPV19GT0NVUywgV0lORE9XX01BWElNSVpFLCBXSU5ET1dfU0hPVywgV2luZG93U3RhdGVPcHRpb25hbFxyXG59IGZyb20gJy4uLy4uL2NvbnN0JztcclxuaW1wb3J0IHsgQm9yZGVyT3B0aW9uQ29udHJhY3QsIEJveFNoYWRvd09wdGlvbkNvbnRyYWN0IH0gZnJvbSAnLi4vLi4vY29udHJhY3QnO1xyXG5pbXBvcnQgeyB2YWxpZGF0b3IgfSBmcm9tICcuLi8uLi9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eSc7XHJcbmltcG9ydCB7XHJcbiAgICBhZGRDU1NDbGFzc2VzLCBhZGRDU1NTdHlsZXMsIGNyZWF0ZURpdkVsZW1lbnQsIGhhc0NTU0NsYXNzLCByZW1vdmVDU1NDbGFzc2VzLCByZW1vdmVIVE1MRWxlbWVudFxyXG59IGZyb20gJy4uLy4uL2NvcmUvaGVscGVyL2VsZW1lbnQnO1xyXG5pbXBvcnQgeyBhcnJheVJlbW92ZSwgYXJyYXlTZXRUb0ZpcnN0IH0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXIvb2JqZWN0JztcclxuaW1wb3J0IHsgc3RyaW5nRm9ybWF0IH0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXIvc3RyaW5nJztcclxuaW1wb3J0IHtcclxuICAgIGNoZWNrQ29sb3IsIGNoZWNrSW4sIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tQc3RJbnQsIGNoZWNrUHN0TnVtYmVyXHJcbn0gZnJvbSAnLi4vLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBjb252ZXJ0RGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vaGVscGVyJztcclxuaW1wb3J0IHtcclxuICAgIEJvcmRlck9wdGlvbiwgQm94U2hhZG93T3B0aW9uLCBDb21wb25lbnRFbGVtZW50LCBVSUljb25PcHRpb24sIFVJV2luZG93T3B0aW9uLFxyXG4gICAgV2luZG93RXZlbnRNZXNzYWdlXHJcbn0gZnJvbSAnLi4vLi4vdHlwZSc7XHJcbmltcG9ydCB7IFVJQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktY29tcG9uZW50JztcclxuaW1wb3J0IHsgVUlJY29uIH0gZnJvbSAnLi4vdWktaWNvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlXaW5kb3cgZXh0ZW5kcyBDb21wb25lbnQ8VUlXaW5kb3dPcHRpb24+IGltcGxlbWVudHMgVUlDb21wb25lbnQ8VUlXaW5kb3dPcHRpb24+IHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBVSVdpbmRvd09wdGlvbikge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucz8uaWQ7XHJcbiAgICAgICAgdGhpcy5yZWFkT3B0aW9ucyh7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogdGhpcy5tYXhXaWR0aCxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLm1heEhlaWdodCxcclxuICAgICAgICAgICAgbWluV2lkdGg6IHRoaXMubWluV2lkdGgsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5taW5IZWlnaHQsXHJcbiAgICAgICAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXIsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogdGhpcy5ib3hTaGFkb3csXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgIGFuaW1hdGU6IHRoaXMuYW5pbWF0ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgdGhpcy53aWR0aCk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHRoaXMud2lkdGgpO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGgubWluKHRoaXMubWF4SGVpZ2h0LCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgW3RoaXMubGVmdCwgdGhpcy50b3BdID0gY29udmVydERpcmVjdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgb3B0aW9ucz8uZGlyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrTm9FbXB0eU9yTnVsbClcclxuICAgIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93T3B0aW9uL3dpZHRoXCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvd09wdGlvbi9oZWlnaHRcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyBtaW5XaWR0aDogbnVtYmVyID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vbWluV2lkdGhcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyBtaW5IZWlnaHQ6IG51bWJlciA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93T3B0aW9uL21pbkhlaWdodFwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIG1heFdpZHRoOiBudW1iZXIgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvd09wdGlvbi9tYXhXaWR0aFwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIG1heEhlaWdodDogbnVtYmVyID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vbWF4SGVpZ2h0XCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgbGVmdDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIHRvcDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAdmFsaWRhdG9yKC4uLkJvcmRlck9wdGlvbkNvbnRyYWN0KVxyXG4gICAgcHVibGljIGJvcmRlcjogZmFsc2UgfCBCb3JkZXJPcHRpb24gPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvd09wdGlvbi9ib3JkZXJcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvciguLi5Cb3hTaGFkb3dPcHRpb25Db250cmFjdClcclxuICAgIHB1YmxpYyBib3hTaGFkb3c6IGZhbHNlIHwgQm94U2hhZG93T3B0aW9uID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vYm94U2hhZG93XCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoW2NoZWNrSW4sIEFuaW1hdGlvbk9wdGlvbmFsLlpPT01dLCBmYWxzZSlcclxuICAgIHB1YmxpYyBhbmltYXRlOiBmYWxzZSB8IEFuaW1hdGlvbk9wdGlvbmFsID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vYW5pbWF0ZVwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrQ29sb3IpXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvd09wdGlvbi9iYWNrZ3JvdW5kQ29sb3JcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdEludClcclxuICAgIHB1YmxpYyB6SW5kZXg6IG51bWJlciA9IHRoaXMuZW50cnkuekluZGV4O1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXR1czogV2luZG93U3RhdGVPcHRpb25hbCA9IFdpbmRvd1N0YXRlT3B0aW9uYWwuT1JJR0lOQUw7XHJcbiAgICBwdWJsaWMgZ2V0IHN0YXR1cygpOiBXaW5kb3dTdGF0ZU9wdGlvbmFsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRNZXNzYWdlOiBXaW5kb3dFdmVudE1lc3NhZ2UgPSB7XHJcbiAgICAgICAgdGFyZ2V0OiB0aGlzXHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVWaWV3KCk6IENvbXBvbmVudEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50ID0gY3JlYXRlRGl2RWxlbWVudCh0aGlzLmlkKTtcclxuXHJcbiAgICAgICAgYWRkQ1NTQ2xhc3NlcyhlbGVtZW50LFxyXG4gICAgICAgICAgICBcIndpbmRvd1wiLFxyXG4gICAgICAgICAgICBcImZsZXgtYm94XCIsXHJcbiAgICAgICAgICAgIFwiY29sLWRpcmVjdGlvblwiLFxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgIT09IGZhbHNlID8gXCJhbmltYXRlXCIgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UgPyBzdHJpbmdGb3JtYXQoQU5JTUFURV9TSE9XLCB0aGlzLmFuaW1hdGUpIDogdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgYWRkQ1NTU3R5bGVzKGVsZW1lbnQsIDxDU1NTdHlsZURlY2xhcmF0aW9uPntcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0aGlzLmJhY2tncm91bmRDb2xvcn1gLFxyXG4gICAgICAgICAgICB6SW5kZXg6IGAke3RoaXMuekluZGV4fWAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBgJHt0aGlzLndpZHRofXB4YCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHt0aGlzLmhlaWdodH1weGAsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiB0aGlzLm1heFdpZHRoICE9PSBpbm5lcldpZHRoID8gYCR7dGhpcy5tYXhXaWR0aH1weGAgOiBudWxsLFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IHRoaXMubWF4SGVpZ2h0ICE9PSBpbm5lckhlaWdodCA/IGAke3RoaXMubWF4SGVpZ2h0fXB4YCA6IG51bGwsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiBgJHt0aGlzLm1pbldpZHRofXB4YCxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBgJHt0aGlzLm1pbkhlaWdodH1weGAsXHJcbiAgICAgICAgICAgIGxlZnQ6IGAke3RoaXMubGVmdH1weGAsXHJcbiAgICAgICAgICAgIHRvcDogYCR7dGhpcy50b3B9cHhgLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IHRoaXMuYm94U2hhZG93ID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5ib3hTaGFkb3cub2Zmc2V0WH1weCAke3RoaXMuYm94U2hhZG93Lm9mZnNldFl9cHggJHt0aGlzLmJveFNoYWRvdy5ibHVyUmFkaXVzfXB4ICR7dGhpcy5ib3hTaGFkb3cuc3ByZWFkUmFkaXVzfXB4ICR7dGhpcy5ib3hTaGFkb3cuY29sb3J9YCxcclxuICAgICAgICAgICAgYm9yZGVyOiB0aGlzLmJvcmRlciA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgIGAke3RoaXMuYm9yZGVyLndpZHRofXB4ICR7dGhpcy5ib3JkZXIuc3R5bGV9ICR7dGhpcy5ib3JkZXIuY29sb3J9YCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLmJvcmRlciA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgIGAke3RoaXMuYm9yZGVyLnJhZGl1c31weGBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChuZXcgVUlJY29uKDxVSUljb25PcHRpb24+e1xyXG4gICAgICAgICAgICBpY29uOiBcIm1heGltaXplXCIsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6IChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEJ1cy5icm9hZGNhc3QoW1dJTkRPV19NQVhJTUlaRV0sIHRoaXMuZXZlbnRNZXNzYWdlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3dpdGNoSWNvbjogXCJyZXN0b3JlXCJcclxuICAgICAgICB9KS5jcmVhdGVWaWV3KCkpO1xyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5ldyBVSUljb24oPFVJSWNvbk9wdGlvbj57XHJcbiAgICAgICAgICAgIGljb246IFwiZGVzdHJveVwiLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiAoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMuYnJvYWRjYXN0KFtXSU5ET1dfREVTVFJPWV0sIHRoaXMuZXZlbnRNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNyZWF0ZVZpZXcoKSk7XHJcblxyXG4gICAgICAgIHRoaXMubW9uaXRvckV2ZW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMubW9uaXRvckNlbnRlci53aW5kb3dzLnVuc2hpZnQodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb25pdG9yRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMuYnJvYWRjYXN0KFtXSU5ET1dfRk9DVVNdLCB0aGlzLmV2ZW50TWVzc2FnZSk7XHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0ZVNob3dOYW1lID0gc3RyaW5nRm9ybWF0KEFOSU1BVEVfU0hPVywgdGhpcy5hbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNDU1NDbGFzcyh0aGlzLmVsZW1lbnQsIGFuaW1hdGVTaG93TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDU1NDbGFzc2VzKHRoaXMuZWxlbWVudCwgYW5pbWF0ZVNob3dOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QnVzLmJyb2FkY2FzdChbV0lORE9XX1NIT1ddLCB0aGlzLmV2ZW50TWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0ZURlc3Ryb3lOYW1lID0gc3RyaW5nRm9ybWF0KEFOSU1BVEVfREVTVFJPWSwgdGhpcy5hbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNDU1NDbGFzcyh0aGlzLmVsZW1lbnQsIGFuaW1hdGVEZXN0cm95TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGVNYXhpbWl6ZU5hbWUgPSBzdHJpbmdGb3JtYXQoQU5JTUFURV9NQVhJTUlaRSwgdGhpcy5hbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNDU1NDbGFzcyh0aGlzLmVsZW1lbnQsIGFuaW1hdGVNYXhpbWl6ZU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ1NTQ2xhc3Nlcyh0aGlzLmVsZW1lbnQsIGFuaW1hdGVNYXhpbWl6ZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENTU1N0eWxlcyh0aGlzLmVsZW1lbnQsIDxDU1NTdHlsZURlY2xhcmF0aW9uPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBgbm9uZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYG5vbmVgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IGAwYFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVpJbmRleChpc0NyZWF0ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGlzQ3JlYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9uaXRvckNlbnRlci5zZXRXaW5kb3codGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubW9uaXRvckNlbnRlci53aW5kb3cgPT09IHRoaXMpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnpJbmRleCA9IHRoaXMuZW50cnkuekluZGV4O1xyXG4gICAgICAgIGFkZENTU1N0eWxlcyh0aGlzLmVsZW1lbnQsIDxDU1NTdHlsZURlY2xhcmF0aW9uPntcclxuICAgICAgICAgICAgekluZGV4OiBgJHt0aGlzLnpJbmRleH1gXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tb25pdG9yQ2VudGVyLnNldFdpbmRvdyh0aGlzKTtcclxuICAgICAgICBhcnJheVNldFRvRmlyc3QodGhpcy5tb25pdG9yQ2VudGVyLndpbmRvd3MsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRyYWN0aW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0aW1lciA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgZnJlcXVlbmN5OiBudW1iZXIgPSAxMDtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbjogbnVtYmVyID0gNjA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJveFNoYWRvdyAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgYm94U2hhZG93U3RyID0gYCR7dGhpcy5ib3hTaGFkb3cub2Zmc2V0WH1weCAke3RoaXMuYm94U2hhZG93Lm9mZnNldFl9cHggezB9cHggJHt0aGlzLmJveFNoYWRvdy5zcHJlYWRSYWRpdXN9cHggJHt0aGlzLmJveFNoYWRvdy5jb2xvcn1gO1xyXG5cclxuICAgICAgICAgICAgWy4uLkFycmF5KGZyZXF1ZW5jeSkua2V5cygpXS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRDU1NTdHlsZXModGhpcy5lbGVtZW50LCA8Q1NTU3R5bGVEZWNsYXJhdGlvbj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogaXRlbSAlIDIgPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc3RyaW5nRm9ybWF0KGJveFNoYWRvd1N0ciwgKDxCb3hTaGFkb3dPcHRpb24+dGhpcy5ib3hTaGFkb3cpLmJsdXJSYWRpdXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHN0cmluZ0Zvcm1hdChib3hTaGFkb3dTdHIsIDxudW1iZXI+KDxCb3hTaGFkb3dPcHRpb24+dGhpcy5ib3hTaGFkb3cpLmJsdXJSYWRpdXMgLyAyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgaXRlbSAqIGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGFkZENTU0NsYXNzZXModGhpcy5lbGVtZW50LCBzdHJpbmdGb3JtYXQoQU5JTUFURV9ERVNUUk9ZLCB0aGlzLmFuaW1hdGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XHJcbiAgICAgICAgcmVtb3ZlSFRNTEVsZW1lbnQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICBhcnJheVJlbW92ZSh0aGlzLm1vbml0b3JDZW50ZXIud2luZG93cywgdGhpcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vbml0b3JDZW50ZXIud2luZG93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzV2luZG93ID0gdGhpcy5tb25pdG9yQ2VudGVyLndpbmRvd3NbMF07XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMuYnJvYWRjYXN0KFtXSU5ET1dfRk9DVVNdLCA8V2luZG93RXZlbnRNZXNzYWdlPntcclxuICAgICAgICAgICAgICAgIHRhcmdldDogZm9jdXNXaW5kb3dcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hzID0gdGhpcy5tb25pdG9yQ2VudGVyLndpbmRvd3MuZmlsdGVyKHdpbiA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luLnN0YXR1cyA9PT0gV2luZG93U3RhdGVPcHRpb25hbC5NQVhJTUlaRTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hzLmxlbmd0aCA9PT0gMCkgcmVtb3ZlQ1NTQ2xhc3Nlcyhkb2N1bWVudC5ib2R5LCBcImRpc2FibGUtc2Nyb2xsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHJlbW92ZUNTU0NsYXNzZXMoZG9jdW1lbnQuYm9keSwgXCJkaXNhYmxlLXNjcm9sbFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWF4aW1pemUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5fc3RhdHVzID09PSBXaW5kb3dTdGF0ZU9wdGlvbmFsLk1BWElNSVpFKSByZXR1cm47XHJcblxyXG4gICAgICAgIGFkZENTU0NsYXNzZXMoZG9jdW1lbnQuYm9keSwgXCJkaXNhYmxlLXNjcm9sbFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgYWRkQ1NTQ2xhc3Nlcyh0aGlzLmVsZW1lbnQsIHN0cmluZ0Zvcm1hdChBTklNQVRFX01BWElNSVpFLCB0aGlzLmFuaW1hdGUpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkQ1NTU3R5bGVzKHRoaXMuZWxlbWVudCwgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICB0b3A6IGAwYCxcclxuICAgICAgICAgICAgbGVmdDogYDBgLFxyXG4gICAgICAgICAgICB3aWR0aDogYCR7aW5uZXJXaWR0aH1weGAsXHJcbiAgICAgICAgICAgIGhlaWdodDogYCR7aW5uZXJIZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UgPyBudWxsIDogYG5vbmVgLFxyXG4gICAgICAgICAgICBib3JkZXI6IHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UgPyBudWxsIDogYG5vbmVgLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UgPyBudWxsIDogYDBgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IFdpbmRvd1N0YXRlT3B0aW9uYWwuTUFYSU1JWkU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgZW51bSBCb3JkZXJTdHlsZU9wdGlvbmFsIHtcclxuICAgIERPVFRFRCA9IFwiZG90dGVkXCIsXHJcbiAgICBEQVNIRUQgPSBcImRhc2hlZFwiLFxyXG4gICAgU09MSUQgPSBcInNvbGlkXCIsXHJcbiAgICBET1VCTEUgPSBcImRvdWJsZVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEFuaW1hdGlvbk9wdGlvbmFsIHtcclxuICAgIFpPT00gPSBcInpvb21cIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBEaXJlY3Rpb25PcHRpb25hbCB7XHJcbiAgICBDRU5URVIgPSBcImNlbnRlclwiLFxyXG4gICAgVE9QX0NFTlRFUiA9IFwidG9wLWNlbnRlclwiLFxyXG4gICAgQk9UVE9NX0NFTlRFUiA9IFwiYm90dG9tLWNlbnRlclwiLFxyXG4gICAgTEVGVF9UT1AgPSBcImxlZnQtdG9wXCIsXHJcbiAgICBMRUZUX01JRERMRSA9IFwibGVmdC1taWRkbGVcIixcclxuICAgIExFRlRfQk9UVE9NID0gXCJsZWZ0LWJvdHRvbVwiLFxyXG4gICAgUklHSFRfVE9QID0gXCJyaWdodC10b3BcIixcclxuICAgIFJJR0hUX01JRERMRSA9IFwicmlnaHQtbWlkZGxlXCIsXHJcbiAgICBSSUdIVF9CT1RUT00gPSBcInJpZ2h0LWJvdHRvbVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFdpbmRvd1N0YXRlT3B0aW9uYWwge1xyXG4gICAgT1JJR0lOQUwgPSBcIm9yaWdpbmFsXCIsXHJcbiAgICBNQVhJTUlaRSA9IFwibWF4aW1pemVcIixcclxuICAgIE1JTklNSVpFID0gXCJtaW5pbWl6ZVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfQ1JFQVRFOiBzdHJpbmcgPSBcIndpbmRvdzpjcmVhdGVcIjtcclxuZXhwb3J0IGNvbnN0IFdJTkRPV19GT0NVUzogc3RyaW5nID0gXCJ3aW5kb3c6Zm9jdXNcIjtcclxuZXhwb3J0IGNvbnN0IFdJTkRPV19TSE9XOiBzdHJpbmcgPSBcIndpbmRvdzpzaG93XCI7XHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfRVhJU1Q6IHN0cmluZyA9IFwid2luZG93OmV4aXN0XCI7XHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfTUFYSU1JWkU6IHN0cmluZyA9IFwid2luZG93Om1heGltaXplXCI7XHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfTUlOSU1JWkU6IHN0cmluZyA9IFwid2luZG93Om1pbmltaXplXCI7XHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfREVTVFJPWTogc3RyaW5nID0gXCJ3aW5kb3c6ZGVzdHJveVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFOSU1BVEVfU0hPVzogc3RyaW5nID0gXCJhbmltYXRlLXswfS1zaG93XCI7XHJcbmV4cG9ydCBjb25zdCBBTklNQVRFX0RFU1RST1k6IHN0cmluZyA9IFwiYW5pbWF0ZS17MH0tZGVzdHJveVwiO1xyXG5leHBvcnQgY29uc3QgQU5JTUFURV9NQVhJTUlaRTogc3RyaW5nID0gXCJhbmltYXRlLXswfS1tYXhpbWl6ZVwiOyIsImltcG9ydCB7IEFuaW1hdGlvbk9wdGlvbmFsLCBCb3JkZXJTdHlsZU9wdGlvbmFsIH0gZnJvbSAnLi4vY29uc3QnO1xyXG5pbXBvcnQgeyBjaGVja0Jvb2xlYW4sIGNoZWNrQ29sb3IsIGNoZWNrSW4sIGNoZWNrUHN0SW50LCBjaGVja1BzdE51bWJlciB9IGZyb20gJy4uL2NvcmUvdmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBjb25zdCBCb3JkZXJPcHRpb25Db250cmFjdCA9IFt7XHJcbiAgICB3aWR0aDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBzdHlsZTogW2NoZWNrSW4sIEJvcmRlclN0eWxlT3B0aW9uYWwuREFTSEVELCBCb3JkZXJTdHlsZU9wdGlvbmFsLlNPTElELCBCb3JkZXJTdHlsZU9wdGlvbmFsLkRPVUJMRSwgQm9yZGVyU3R5bGVPcHRpb25hbC5ET1RURURdLFxyXG4gICAgY29sb3I6IGNoZWNrQ29sb3IsXHJcbiAgICByYWRpdXM6IGNoZWNrUHN0SW50XHJcbn0sIGZhbHNlXTtcclxuXHJcbmV4cG9ydCBjb25zdCBCb3hTaGFkb3dPcHRpb25Db250cmFjdCA9IFt7XHJcbiAgICBvZmZzZXRYOiBjaGVja1BzdE51bWJlcixcclxuICAgIG9mZnNldFk6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgYmx1clJhZGl1czogY2hlY2tQc3RJbnQsXHJcbiAgICBzcHJlYWRSYWRpdXM6IGNoZWNrUHN0SW50LFxyXG4gICAgY29sb3I6IGNoZWNrQ29sb3JcclxufSwgZmFsc2VdO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFVJV2luZG93T3B0aW9uQ29udHJhY3QgPSB7XHJcbiAgICB3aWR0aDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBoZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgbWluV2lkdGg6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgbWluSGVpZ2h0OiBjaGVja1BzdE51bWJlcixcclxuICAgIG1heFdpZHRoOiBjaGVja1BzdE51bWJlcixcclxuICAgIG1heEhlaWdodDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoZWNrQ29sb3IsXHJcbiAgICBib3hTaGFkb3c6IEJveFNoYWRvd09wdGlvbkNvbnRyYWN0LFxyXG4gICAgYW5pbWF0ZTogW1tjaGVja0luLCBBbmltYXRpb25PcHRpb25hbC5aT09NXSwgZmFsc2VdLFxyXG4gICAgYm9yZGVyOiBCb3JkZXJPcHRpb25Db250cmFjdFxyXG59OyIsImltcG9ydCB7IHBhcmFtZXRlckludmFsaWQgfSBmcm9tICcuLi8uLi9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBtZXJnZUpTT05PYmplY3QgfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0JztcclxuaW1wb3J0IHsgRnVuY3Rpb25WYWxpZGF0b3IsIEpTT05PYmplY3QsIFByb3BlcnR5U2V0dGVyLCBWYWx1ZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlJztcclxuaW1wb3J0IHtcclxuICAgIGNoZWNrQXJyYXksIGNoZWNrQmFzZVR5cGUsIGNoZWNrRnVuY3Rpb24sIGNoZWNrRnVuY3Rpb25WYWxpZGF0b3IsIGNoZWNrSW4sIGNoZWNrSlNPTk9iamVjdCxcclxuICAgIGNoZWNrVmFsaWRhdG9yXHJcbn0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJztcclxuXHJcbmZ1bmN0aW9uIGRlY29yYXRvcihwcm9wZXJ0eVNldHRlcjogUHJvcGVydHlTZXR0ZXIpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICBpZiAoIWNoZWNrRnVuY3Rpb248UHJvcGVydHlTZXR0ZXI+KHByb3BlcnR5U2V0dGVyKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5KSB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVLZXkgPSBgXyR7cHJvcGVydHlLZXkudG9TdHJpbmcoKX1fYDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIHtcclxuICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpc1tzdG9yZUtleV07IH0sXHJcbiAgICAgICAgICAgIHNldChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1tzdG9yZUtleV0gPSBwcm9wZXJ0eVNldHRlcihuZXdWYWx1ZSwgcHJvcGVydHlLZXksIHRoaXNbc3RvcmVLZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpblZhbGlkYXRvcihuZXdWYWx1ZTogYW55LCBvbGRWYWx1ZTogYW55LCAuLi52YWx1ZXM6IEFycmF5PGFueT4pOiBhbnkge1xyXG4gICAgY29uc3QgdmFsdWVPcHRpb25zOiBBcnJheTxWYWx1ZVR5cGU+ID0gW107XHJcbiAgICBjb25zdCBmdW5jdGlvblZhbGlkYXRvcnM6IEFycmF5PEZ1bmN0aW9uVmFsaWRhdG9yPiA9IFtdO1xyXG4gICAgY29uc3Qgb2JqZWN0VmFsaWRhdG9yczogQXJyYXk8SlNPTk9iamVjdD4gPSBbXTtcclxuXHJcbiAgICB2YWx1ZXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtID09PSBudWxsIHx8IGNoZWNrQmFzZVR5cGUoaXRlbSwgXCJzdHJpbmdcIiwgXCJiaWdpbnRcIiwgXCJib29sZWFuXCIsIFwic3ltYm9sXCIsIFwidW5kZWZpbmVkXCIpKSB2YWx1ZU9wdGlvbnMucHVzaChpdGVtKTtcclxuICAgICAgICBpZiAoY2hlY2tGdW5jdGlvblZhbGlkYXRvcihpdGVtKSkgZnVuY3Rpb25WYWxpZGF0b3JzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgaWYgKGNoZWNrSlNPTk9iamVjdChpdGVtKSkgb2JqZWN0VmFsaWRhdG9ycy5wdXNoKGl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGNoZWNrSW4obmV3VmFsdWUsIC4uLnZhbHVlT3B0aW9ucykpIHJldHVybiBuZXdWYWx1ZTtcclxuXHJcbiAgICBpZiAoZnVuY3Rpb25WYWxpZGF0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgaXNQYXNzQWxsRnVuY3Rpb25WYWxpZGF0b3IgPSB0cnVlO1xyXG4gICAgICAgIGZvciAoY29uc3QgZnVuY3Rpb25WYWxpZGF0b3Igb2YgZnVuY3Rpb25WYWxpZGF0b3JzKSB7XHJcbiAgICAgICAgICAgIGlzUGFzc0FsbEZ1bmN0aW9uVmFsaWRhdG9yID0gY2hlY2tWYWxpZGF0b3IobmV3VmFsdWUsIGZ1bmN0aW9uVmFsaWRhdG9yKTtcclxuICAgICAgICAgICAgaWYgKCFpc1Bhc3NBbGxGdW5jdGlvblZhbGlkYXRvcikgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1Bhc3NBbGxGdW5jdGlvblZhbGlkYXRvcikgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGVja0pTT05PYmplY3QobmV3VmFsdWUpICYmIG9iamVjdFZhbGlkYXRvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IFtmaXJzdFZhbGlkYXRvcixdID0gb2JqZWN0VmFsaWRhdG9ycztcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZFZhbHVlcyA9IGZpcnN0VmFsaWRhdG9yW2tleV07XHJcbiAgICAgICAgICAgIGluVmFsaWRhdG9yKG5ld1ZhbHVlW2tleV0sIG9sZFZhbHVlLCAuLi4oY2hlY2tBcnJheShjaGlsZFZhbHVlcykgPyBjaGlsZFZhbHVlcyA6IFtjaGlsZFZhbHVlc10pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1lcmdlSlNPTk9iamVjdChvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcGFyYW1ldGVySW52YWxpZCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdG9yKC4uLnZhbHVlczogQXJyYXk8YW55Pik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBkZWNvcmF0b3IoKG5ld1ZhbHVlLCBwcm9wZXJ0eUtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICByZXR1cm4gaW5WYWxpZGF0b3IobmV3VmFsdWUsIHZhbHVlLCAuLi52YWx1ZXMpO1xyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyLCBFdmVudE1lc3NhZ2UsIEpTT05PYmplY3QsIE1lc3NhZ2VRdWV1ZXMgfSBmcm9tICcuLi90eXBlJztcclxuaW1wb3J0IHtcclxuICAgIGNoZWNrQXJyYXlFYWNoLCBjaGVja0Z1bmN0aW9uLCBjaGVja0pTT05PYmplY3QsIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tOb051bGxPclVuZGVmaW5lZFxyXG59IGZyb20gJy4uL3ZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRCdXMge1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFdmVudEJ1cztcclxuICAgIHByaXZhdGUgbWVzc2FnZVF1ZXVlczogTWVzc2FnZVF1ZXVlcyA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2UoKTogRXZlbnRCdXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlID0gdGhpcy5pbnN0YW5jZSA/PyBuZXcgRXZlbnRCdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb24oa2V5OiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50SGFuZGxlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKGtleSkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgICAgICBpZiAoIWNoZWNrRnVuY3Rpb248RXZlbnRIYW5kbGVyPihoYW5kbGVyKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5SGFuZGxlciA9IHRoaXMubWVzc2FnZVF1ZXVlc1trZXldO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tGdW5jdGlvbjxFdmVudEhhbmRsZXI+KGtleUhhbmRsZXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VRdWV1ZXNba2V5XSA9IFtrZXlIYW5kbGVyLCBoYW5kbGVyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGVja0FycmF5RWFjaDxFdmVudEhhbmRsZXI+KGtleUhhbmRsZXIsIGNoZWNrRnVuY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VRdWV1ZXNba2V5XSA9IFsuLi5rZXlIYW5kbGVyLCBoYW5kbGVyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMubWVzc2FnZVF1ZXVlc1trZXldID0gaGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25lKGtleTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChrZXkpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbiAgICAgICAgaWYgKCFjaGVja0Z1bmN0aW9uPEV2ZW50SGFuZGxlcj4oaGFuZGxlcikpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlUXVldWVzW2tleV0gPSBoYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbWl0KGtleTogc3RyaW5nLCBtZXNzYWdlOiBhbnksIHN5bmM6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKGtleSkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgICAgICBpZiAoIWNoZWNrTm9OdWxsT3JVbmRlZmluZWQobWVzc2FnZSkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZVF1ZXVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGtleUhhbmRsZXIgPSB0aGlzLm1lc3NhZ2VRdWV1ZXNba2V5XTtcclxuICAgICAgICBpZiAoY2hlY2tGdW5jdGlvbjxFdmVudEhhbmRsZXI+KGtleUhhbmRsZXIpKSB7XHJcbiAgICAgICAgICAgIHN5bmMgPyBrZXlIYW5kbGVyKG1lc3NhZ2UpIDpcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ga2V5SGFuZGxlcihtZXNzYWdlKSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNoZWNrQXJyYXlFYWNoPEV2ZW50SGFuZGxlcj4oa2V5SGFuZGxlciwgY2hlY2tGdW5jdGlvbikpIHtcclxuICAgICAgICAgICAga2V5SGFuZGxlci5tYXAoaGFuZGxlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBzeW5jID8gaGFuZGxlcihtZXNzYWdlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBoYW5kbGVyKG1lc3NhZ2UpLCAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvZmYoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChrZXkpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VRdWV1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkgcmV0dXJuO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLm1lc3NhZ2VRdWV1ZXNba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYnJvYWRjYXN0PFRFdmVudE1lc3NhZ2UgZXh0ZW5kcyBKU09OT2JqZWN0PihrZXlzOiBBcnJheTxzdHJpbmc+LCBtZXNzYWdlOiBURXZlbnRNZXNzYWdlID0gPFRFdmVudE1lc3NhZ2U+e30pOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChrZXksIDxFdmVudE1lc3NhZ2U8VEV2ZW50TWVzc2FnZT4+e1xyXG4gICAgICAgICAgICAgICAgZGF0YXNldDogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS52YWx1ZU9mKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckludmFsaWQobWVzc2FnZTogc3RyaW5nID0gXCJcIik6IG5ldmVyIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwYXJhbWV0ZXIke21lc3NhZ2V9LmApO1xyXG59XHJcbiIsImltcG9ydCB7IHBhcmFtZXRlckludmFsaWQgfSBmcm9tICcuLi8uLi9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBDU1NDbGFzc09yVW5kZWZpbmVkLCBDU1NDbGFzc1NldHRlciwgSFRNTEVsZW1lbnRPck51bGwgfSBmcm9tICcuLi8uLi90eXBlJztcclxuaW1wb3J0IHsgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja1N0cmluZyB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgY29uc3QgUFJFRklYOiBzdHJpbmcgPSBcImxheXgtXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ1NTU3R5bGVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50T3JOdWxsLCBjc3NTdHlsZXM6IENTU1N0eWxlRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIGZvciAoY29uc3QgY3NzUHJvcCBpbiBjc3NTdHlsZXMpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlW2Nzc1Byb3BdID0gY3NzU3R5bGVzW2Nzc1Byb3BdID8/IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnRPck51bGwsIGhhbmRsZXI6IENTU0NsYXNzU2V0dGVyLCAuLi5jc3NDbGFzc2VzOiBBcnJheTxDU1NDbGFzc09yVW5kZWZpbmVkPik6IEhUTUxFbGVtZW50T3JOdWxsIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudENTU0NsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy9nKTtcclxuICAgIGNzc0NsYXNzZXMuZm9yRWFjaCgoY3NzQ2xhc3MpID0+IHtcclxuICAgICAgICBpZiAoY3NzQ2xhc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgY3NzQ2xhc3NOYW1lID0gY3NzQ2xhc3MuaW5kZXhPZihcIiFcIikgPT09IDAgPyBjc3NDbGFzcy5zdWJzdHIoMSkgOiBQUkVGSVggKyBjc3NDbGFzcztcclxuICAgICAgICAgICAgY29uc3QgY3NzQ2xhc3NJbmRleCA9IGVsZW1lbnRDU1NDbGFzc2VzLmluZGV4T2YoY3NzQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgaGFuZGxlcihlbGVtZW50Q1NTQ2xhc3NlcywgY3NzQ2xhc3NJbmRleCwgY3NzQ2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudENTU0NsYXNzZXMuam9pbihcIiBcIikudHJpbSgpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDU1NDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50T3JOdWxsLCAuLi5jc3NDbGFzc2VzOiBBcnJheTxDU1NDbGFzc09yVW5kZWZpbmVkPik6IEhUTUxFbGVtZW50T3JOdWxsIHtcclxuICAgIHJldHVybiB1cGRhdGVDU1NDbGFzc2VzKGVsZW1lbnQsIChlbGVtZW50Q1NTQ2xhc3NlcywgY3NzQ2xhc3NJbmRleCwgY3NzQ2xhc3MpID0+IHtcclxuICAgICAgICBpZiAoIX5jc3NDbGFzc0luZGV4KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRDU1NDbGFzc2VzLnB1c2goY3NzQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIC4uLmNzc0NsYXNzZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ1NTQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudE9yTnVsbCwgLi4uY3NzQ2xhc3Nlczogc3RyaW5nW10pOiBIVE1MRWxlbWVudE9yTnVsbCB7XHJcbiAgICByZXR1cm4gdXBkYXRlQ1NTQ2xhc3NlcyhlbGVtZW50LCAoZWxlbWVudENTU0NsYXNzZXMsIGNzc0NsYXNzSW5kZXgpID0+IHtcclxuICAgICAgICBpZiAofmNzc0NsYXNzSW5kZXgpIHtcclxuICAgICAgICAgICAgZWxlbWVudENTU0NsYXNzZXMuc3BsaWNlKGNzc0NsYXNzSW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIC4uLmNzc0NsYXNzZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzQ1NTQ2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnRPck51bGwsIGNzc0NsYXNzOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRDU1NDbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvZyk7XHJcbiAgICBjb25zdCBjc3NDbGFzc05hbWUgPSBjc3NDbGFzcy5pbmRleE9mKFwiIVwiKSA9PT0gMCA/IGNzc0NsYXNzLnN1YnN0cigxKSA6IFBSRUZJWCArIGNzc0NsYXNzO1xyXG4gICAgY29uc3QgaW5kZXggPSBlbGVtZW50Q1NTQ2xhc3Nlcy5pbmRleE9mKGNzc0NsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gISF+aW5kZXg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXZFbGVtZW50KGlkPzogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpZiAoY2hlY2tTdHJpbmcoaWQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5pZCA9IFBSRUZJWCArIGlkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdmdFbGVtZW50KG5hbWU6IHN0cmluZyk6IFNWR1NWR0VsZW1lbnQge1xyXG4gICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwobmFtZSkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICBjb25zdCBzdmdOYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcbiAgICBjb25zdCBuc05hbWVzcGFjZSA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xyXG5cclxuICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBcInN2Z1wiKTtcclxuICAgIGNvbnN0IHVzZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBcInVzZVwiKTtcclxuICAgIHVzZUVsZW1lbnQuc2V0QXR0cmlidXRlTlMobnNOYW1lc3BhY2UsIFwieGxpbms6aHJlZlwiLCBgIyR7bmFtZX1gKTtcclxuICAgIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQodXNlRWxlbWVudCk7XHJcbiAgICByZXR1cm4gc3ZnRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUhUTUxFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50T3JOdWxsKTogdm9pZCB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcclxuICAgIGlmICghZWxlbWVudC5wYXJlbnRFbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG59IiwiaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uLy4uL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IHJlbW92ZUlsbGVnYWxDaGFyYWN0ZXIgfSBmcm9tICcuLi8uLi9oZWxwZXIvc3RyaW5nJztcclxuaW1wb3J0IHsgSlNPTk9iamVjdCB9IGZyb20gJy4uLy4uL3R5cGUnO1xyXG5pbXBvcnQgeyBjaGVja0pTT05PYmplY3QsIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tOb051bGxPclVuZGVmaW5lZCB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVKU09OT2JqZWN0PFQgZXh0ZW5kcyBKU09OT2JqZWN0Pihzb3VyY2U6IFQpOiBUIHtcclxuICAgIGNvbnN0IG5ld0pTT05PYmplY3QgPSA8YW55Pnt9O1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xyXG4gICAgICAgIGNvbnN0IGtleVZhbHVlID0gc291cmNlW2tleV07XHJcbiAgICAgICAgbmV3SlNPTk9iamVjdFtrZXldID0gY2hlY2tKU09OT2JqZWN0KGtleVZhbHVlKVxyXG4gICAgICAgICAgICA/IGNsb25lSlNPTk9iamVjdChrZXlWYWx1ZSkgOiBrZXlWYWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiA8VD5uZXdKU09OT2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VKU09OT2JqZWN0PFQgZXh0ZW5kcyBKU09OT2JqZWN0Pihzb3VyY2U6IFQsIGRlc3Q6IFQpOiBUIHtcclxuICAgIGNvbnN0IG5ld0pTT05PYmplY3QgPSBjbG9uZUpTT05PYmplY3Q8YW55Pihzb3VyY2UpO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRlc3QpIHtcclxuICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IGRlc3Rba2V5XTtcclxuICAgICAgICBuZXdKU09OT2JqZWN0W2tleV0gPSBjaGVja0pTT05PYmplY3QobmV3SlNPTk9iamVjdFtrZXldKSAmJiBjaGVja0pTT05PYmplY3Qoa2V5VmFsdWUpXHJcbiAgICAgICAgICAgID8gbWVyZ2VKU09OT2JqZWN0KG5ld0pTT05PYmplY3Rba2V5XSwga2V5VmFsdWUpIDoga2V5VmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPFQ+bmV3SlNPTk9iamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRPYmplY3Q8VD4ocGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IFQsIHN0YXJ0T2JqZWN0OiBKU09OT2JqZWN0KTogVCB7XHJcbiAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChwYXRoKSB8fCAhY2hlY2tKU09OT2JqZWN0KHN0YXJ0T2JqZWN0KSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIHBhdGggPSByZW1vdmVJbGxlZ2FsQ2hhcmFjdGVyKHBhdGgpO1xyXG4gICAgaWYgKHBhdGguaW5kZXhPZihcIi9cIikgPT09IC0xKSByZXR1cm4gc3RhcnRPYmplY3RbcGF0aF0gPz8gZGVmYXVsdFZhbHVlO1xyXG5cclxuICAgIGNvbnN0IGtleXMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcclxuICAgIGxldCBrZXlWYWx1ZSA9IHJlYWRPYmplY3Qoa2V5c1swXSwgZGVmYXVsdFZhbHVlLCBzdGFydE9iamVjdCk7XHJcbiAgICBpZiAoIWNoZWNrTm9OdWxsT3JVbmRlZmluZWQoa2V5VmFsdWUpKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpICsgMSA+PSBrZXlzLmxlbmd0aCkgYnJlYWs7XHJcbiAgICAgICAga2V5VmFsdWUgPSByZWFkT2JqZWN0KGtleXNbaSArIDFdLCBkZWZhdWx0VmFsdWUsIGtleVZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBrZXlWYWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5U2V0VG9GaXJzdChhcnI6IEFycmF5PGFueT4sIGVsZTogYW55KTogdm9pZCB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhcnJbaV0gPT09IGVsZSkge1xyXG4gICAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcnIudW5zaGlmdChlbGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlSZW1vdmUoYXJyOiBBcnJheTxhbnk+LCBlbGU6IGFueSk6IHZvaWQge1xyXG4gICAgYXJyLnNwbGljZShhcnIuaW5kZXhPZihlbGUpLCAxKTtcclxufSIsImltcG9ydCB7IHBhcmFtZXRlckludmFsaWQgfSBmcm9tICcuLi8uLi9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBjaGVja05vRW1wdHlPck51bGwgfSBmcm9tICcuLi8uLi92YWxpZGF0b3InO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUlsbGVnYWxDaGFyYWN0ZXIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoc3RyKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW1xcclxcblxcdFxcc10vZywgXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdGb3JtYXQoc3RyOiBzdHJpbmcsIC4uLmFyZ3M6IEFycmF5PGFueT4pOiBzdHJpbmcge1xyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gc3RyO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYFxcXFx7JHtpfVxcXFx9YCwgJ2dtJyksIGFyZ3NbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cjtcclxufSIsImltcG9ydCB7IHBhcmFtZXRlckludmFsaWQgfSBmcm9tICcuLi9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyByZW1vdmVJbGxlZ2FsQ2hhcmFjdGVyIH0gZnJvbSAnLi4vaGVscGVyL3N0cmluZyc7XHJcbmltcG9ydCB7XHJcbiAgICBCYXNlVHlwZSwgQ2hlY2tWYWxpZGF0b3IsIENvbG9yU3RyaW5nLCBGdW5jdGlvblZhbGlkYXRvciwgSW50ZWdlck51bWJlciwgSlNPTk9iamVjdCxcclxuICAgIE5vRW1wdHlPck51bGxTdHJpbmcsIFZhbHVlVHlwZVxyXG59IGZyb20gJy4uL3R5cGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQmFzZVR5cGUoZGF0YTogYW55LCAuLi50eXBlTmFtZXM6IEJhc2VUeXBlW10pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlTmFtZXMuaW5kZXhPZih0eXBlb2YgZGF0YSkgPiAtMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU3RyaW5nKGRhdGE6IGFueSk6IGRhdGEgaXMgc3RyaW5nIHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwic3RyaW5nXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tCb29sZWFuKGRhdGE6IGFueSk6IGRhdGEgaXMgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tCYXNlVHlwZShkYXRhLCBcImJvb2xlYW5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja051bWJlcihkYXRhOiBhbnkpOiBkYXRhIGlzIG51bWJlciB7XHJcbiAgICByZXR1cm4gY2hlY2tCYXNlVHlwZShkYXRhLCBcIm51bWJlclwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRnVuY3Rpb248VD4oZGF0YTogYW55KTogZGF0YSBpcyBUIHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwiZnVuY3Rpb25cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Z1bmN0aW9uVmFsaWRhdG9yKGRhdGE6IGFueSk6IGRhdGEgaXMgRnVuY3Rpb25WYWxpZGF0b3Ige1xyXG4gICAgcmV0dXJuIGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGRhdGEpIHx8XHJcbiAgICAgICAgY2hlY2tBcnJheShkYXRhKSAmJiBjaGVja0Z1bmN0aW9uPENoZWNrVmFsaWRhdG9yPihkYXRhWzBdKSB8fFxyXG4gICAgICAgIGNoZWNrQXJyYXkoZGF0YSkgJiYgY2hlY2tBcnJheShkYXRhWzBdKSAmJiBjaGVja0Z1bmN0aW9uPENoZWNrVmFsaWRhdG9yPihkYXRhWzBdWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVmFsaWRhdG9yKGRhdGE6IGFueSwgZnVuY3Rpb25WYWxpZGF0b3I6IEZ1bmN0aW9uVmFsaWRhdG9yKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaXNUcnVlID0gdHJ1ZTtcclxuICAgIGlmIChjaGVja0Z1bmN0aW9uPENoZWNrVmFsaWRhdG9yPihmdW5jdGlvblZhbGlkYXRvcikpIHtcclxuICAgICAgICBpZiAoIWZ1bmN0aW9uVmFsaWRhdG9yKGRhdGEpKSBpc1RydWUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNoZWNrQXJyYXkoZnVuY3Rpb25WYWxpZGF0b3IpICYmIGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGZ1bmN0aW9uVmFsaWRhdG9yWzBdKSkge1xyXG4gICAgICAgIGNvbnN0IFt2YWxpZGF0b3IsIC4uLmFyZ3NdID0gZnVuY3Rpb25WYWxpZGF0b3I7XHJcbiAgICAgICAgaWYgKCF2YWxpZGF0b3IoZGF0YSwgLi4uYXJncykpIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2hlY2tBcnJheShmdW5jdGlvblZhbGlkYXRvcikgJiYgY2hlY2tBcnJheShmdW5jdGlvblZhbGlkYXRvclswXSkgJiYgY2hlY2tGdW5jdGlvbjxDaGVja1ZhbGlkYXRvcj4oZnVuY3Rpb25WYWxpZGF0b3JbMF1bMF0pKSB7XHJcbiAgICAgICAgY29uc3QgW2NoaWxkVmFsaWRhdG9yLCAuLi52YWx1ZXNdID0gZnVuY3Rpb25WYWxpZGF0b3I7XHJcbiAgICAgICAgaWYgKCFjaGVja1ZhbGlkYXRvcihkYXRhLCBjaGlsZFZhbGlkYXRvcikgJiYgIWNoZWNrSW4oZGF0YSwgLi4udmFsdWVzKSkgaXNUcnVlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIGlzVHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXJyYXkoZGF0YTogYW55KTogZGF0YSBpcyBBcnJheTxhbnk+IHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBcnJheUVhY2g8VD4oZGF0YTogYW55LCBmdW5jdGlvblZhbGlkYXRvcjogRnVuY3Rpb25WYWxpZGF0b3IpOiBkYXRhIGlzIEFycmF5PFQ+IHtcclxuICAgIGlmICghY2hlY2tBcnJheShkYXRhKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKCFjaGVja0Z1bmN0aW9uVmFsaWRhdG9yKGZ1bmN0aW9uVmFsaWRhdG9yKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGxldCBpc0FycmF5VHlwZSA9IHRydWU7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgIGlzQXJyYXlUeXBlID0gY2hlY2tWYWxpZGF0b3IoaXRlbSwgZnVuY3Rpb25WYWxpZGF0b3IpO1xyXG4gICAgICAgIGlmICghaXNBcnJheVR5cGUpIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzQXJyYXlUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOb051bGxPclVuZGVmaW5lZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YSAhPT0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT2JqZWN0KGRhdGE6IGFueSk6IGRhdGEgaXMgb2JqZWN0IHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwib2JqZWN0XCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tKU09OT2JqZWN0KGRhdGE6IGFueSk6IGRhdGEgaXMgSlNPTk9iamVjdCB7XHJcbiAgICByZXR1cm4gZGF0YSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICFjaGVja0FycmF5KGRhdGEpICYmXHJcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpLnRvTG93ZXJDYXNlKCkgPT09IFwiW29iamVjdCBvYmplY3RdXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja051bGwoZGF0YTogYW55KTogZGF0YSBpcyBudWxsIHtcclxuICAgIHJldHVybiBkYXRhID09PSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZWdFeHAoZGF0YTogYW55KTogZGF0YSBpcyBSZWdFeHAge1xyXG4gICAgcmV0dXJuIGRhdGEgaW5zdGFuY2VvZiBSZWdFeHA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbG9yKGRhdGE6IGFueSk6IGRhdGEgaXMgQ29sb3JTdHJpbmcge1xyXG4gICAgZGF0YSA9IHJlbW92ZUlsbGVnYWxDaGFyYWN0ZXIoZGF0YSk7XHJcbiAgICBjb25zdCBiaW5hcnlSZWdFeHAgPSAvXiMoWzAtOWEtZl17Nn18WzAtOWEtZl17M30pJC9pO1xyXG4gICAgY29uc3QgcmdiUmVnRXhwID0gL15yZ2JcXCgoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCkkL2k7XHJcbiAgICBjb25zdCByZ2JhUmVnRXhwID0gL15yZ2JhXFwoKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKDF8MS4wfDAuWzAtOV0pXFwpJC9pO1xyXG5cclxuICAgIHJldHVybiBiaW5hcnlSZWdFeHAudGVzdChkYXRhKSB8fFxyXG4gICAgICAgIHJnYlJlZ0V4cC50ZXN0KGRhdGEpIHx8XHJcbiAgICAgICAgcmdiYVJlZ0V4cC50ZXN0KGRhdGEpIHx8XHJcbiAgICAgICAgZGF0YSA9PT0gXCJ0cmFuc3BhcmVudFwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOb0VtcHR5T3JOdWxsKGRhdGE6IGFueSk6IGRhdGEgaXMgTm9FbXB0eU9yTnVsbFN0cmluZyB7XHJcbiAgICByZXR1cm4gY2hlY2tTdHJpbmcoZGF0YSlcclxuICAgICAgICAmJiBkYXRhLmxlbmd0aCA+IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ludChkYXRhOiBhbnkpOiBkYXRhIGlzIEludGVnZXJOdW1iZXIge1xyXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKGRhdGEpICYmXHJcbiAgICAgICAgKC9eXFwtP1swLTldKyQvLnRlc3QoYCR7ZGF0YX1gKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1BzdEludChkYXRhOiBhbnkpOiBkYXRhIGlzIEludGVnZXJOdW1iZXIge1xyXG4gICAgcmV0dXJuIGNoZWNrSW50KGRhdGEpXHJcbiAgICAgICAgJiYgZGF0YSA+PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQc3ROdW1iZXIoZGF0YTogYW55KTogZGF0YSBpcyBudW1iZXIge1xyXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKGRhdGEpXHJcbiAgICAgICAgJiYgZGF0YSA+PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb250YWlucyhkYXRhOiBhbnksIGNoYXJhY3Rlcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChjaGFyYWN0ZXIpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuIGNoZWNrTm9FbXB0eU9yTnVsbChkYXRhKVxyXG4gICAgICAgICYmIGRhdGEuaW5kZXhPZihjaGFyYWN0ZXIpID4gLTE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0luKGRhdGE6IGFueSwgLi4udmFsdWVzOiBBcnJheTxWYWx1ZVR5cGU+KSB7XHJcbiAgICByZXR1cm4gY2hlY2tCYXNlVHlwZShkYXRhLCBcImJvb2xlYW5cIiwgXCJudW1iZXJcIiwgXCJzdHJpbmdcIiwgXCJ1bmRlZmluZWRcIiwgXCJvYmplY3RcIikgJiZcclxuICAgICAgICB2YWx1ZXMuaW5kZXhPZihkYXRhKSA+IC0xO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW5MZW5ndGgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrU3RyaW5nKGRhdGEpICYmXHJcbiAgICAgICAgZGF0YS5sZW5ndGggPj0gdGhyZXNob2xkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXhMZW5ndGgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrU3RyaW5nKGRhdGEpICYmXHJcbiAgICAgICAgZGF0YS5sZW5ndGggPD0gdGhyZXNob2xkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tMZW5ndGgoZGF0YTogYW55LCBtaW5UaHJlc2hvbGQ6IG51bWJlciwgbWF4VGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmIChtaW5UaHJlc2hvbGQgPj0gbWF4VGhyZXNob2xkKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuIGNoZWNrTWluTGVuZ3RoKGRhdGEsIG1pblRocmVzaG9sZCkgJiZcclxuICAgICAgICBjaGVja01pbkxlbmd0aChkYXRhLCBtYXhUaHJlc2hvbGQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW4oZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKGRhdGEpICYmXHJcbiAgICAgICAgZGF0YSA+PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01heChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tOdW1iZXIoZGF0YSkgJiZcclxuICAgICAgICBkYXRhIDw9IHRocmVzaG9sZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmFuZ2UoZGF0YTogYW55LCBtaW5UaHJlc2hvbGQ6IG51bWJlciwgbWF4VGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmIChtaW5UaHJlc2hvbGQgPj0gbWF4VGhyZXNob2xkKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuIGNoZWNrTWluKGRhdGEsIG1pblRocmVzaG9sZCkgJiZcclxuICAgICAgICBjaGVja01heChkYXRhLCBtYXhUaHJlc2hvbGQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXRjaChkYXRhOiBhbnksIHJlZ2V4OiBSZWdFeHApOiBib29sZWFuIHtcclxuICAgIHJldHVybiByZWdleC50ZXN0KGRhdGEpO1xyXG59IiwiaW1wb3J0ICcuLi9hc3NldCc7XHJcblxyXG5pbXBvcnQgeyBVSVdpbmRvdyB9IGZyb20gJy4uL2NvbXBvbmVudC91aS13aW5kb3cnO1xyXG5pbXBvcnQge1xyXG4gICAgQW5pbWF0aW9uT3B0aW9uYWwsIEJvcmRlclN0eWxlT3B0aW9uYWwsIFdJTkRPV19DUkVBVEUsIFdJTkRPV19ERVNUUk9ZLCBXSU5ET1dfRVhJU1QsXHJcbiAgICBXSU5ET1dfRk9DVVMsIFdJTkRPV19NQVhJTUlaRVxyXG59IGZyb20gJy4uL2NvbnN0JztcclxuaW1wb3J0IHsgR2xvYmFsVUlXaW5kb3dPcHRpb25Db250cmFjdCB9IGZyb20gJy4uL2NvbnRyYWN0JztcclxuaW1wb3J0IHsgdmFsaWRhdG9yIH0gZnJvbSAnLi4vY29yZS9kZWNvcmF0b3IvcHJvcGVydHknO1xyXG5pbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL2NvcmUvZXZlbnQtYnVzJztcclxuaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uL2NvcmUvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgRXZlbnRTZXR0ZXIgfSBmcm9tICcuLi9jb3JlL3R5cGUnO1xyXG5pbXBvcnQge1xyXG4gICAgY2hlY2tGdW5jdGlvbiwgY2hlY2tKU09OT2JqZWN0LCBjaGVja01pbiwgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja1BzdEludFxyXG59IGZyb20gJy4uL2NvcmUvdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgTW9uaXRvckNlbnRlciB9IGZyb20gJy4uL21vbml0b3InO1xyXG5pbXBvcnQgeyBFbnRyeU9wdGlvbiwgR2xvYmFsVUlXaW5kb3dPcHRpb24sIFVJV2luZG93T3B0aW9uLCBXaW5kb3dFdmVudE1lc3NhZ2UgfSBmcm9tICcuLi90eXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnRyeSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRW50cnk7XHJcbiAgICBwcml2YXRlIG1vbml0b3JDZW50ZXI6IE1vbml0b3JDZW50ZXIgPSBNb25pdG9yQ2VudGVyLkluc3RhbmNlKCk7XHJcbiAgICBwcml2YXRlIGV2ZW50QnVzOiBFdmVudEJ1cyA9IEV2ZW50QnVzLkluc3RhbmNlKCk7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihvcHRpb25zOiBFbnRyeU9wdGlvbikge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZyA9IFwiMy4wXCI7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdEludCwgW2NoZWNrTWluLCAxMDAwXSlcclxuICAgIHB1YmxpYyBzdGFydFpJbmRleDogbnVtYmVyID0gMTAwMDAwMDA7XHJcblxyXG4gICAgQHZhbGlkYXRvcihHbG9iYWxVSVdpbmRvd09wdGlvbkNvbnRyYWN0KVxyXG4gICAgcHVibGljIHdpbmRvd09wdGlvbjogR2xvYmFsVUlXaW5kb3dPcHRpb24gPSB7XHJcbiAgICAgICAgd2lkdGg6IDgwMCxcclxuICAgICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgICBtaW5XaWR0aDogMjAwLFxyXG4gICAgICAgIG1pbkhlaWdodDogMjAwLFxyXG4gICAgICAgIG1heFdpZHRoOiBpbm5lcldpZHRoLFxyXG4gICAgICAgIG1heEhlaWdodDogaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBib3hTaGFkb3c6IHtcclxuICAgICAgICAgICAgb2Zmc2V0WDogMSxcclxuICAgICAgICAgICAgb2Zmc2V0WTogMSxcclxuICAgICAgICAgICAgYmx1clJhZGl1czogMTIsXHJcbiAgICAgICAgICAgIHNwcmVhZFJhZGl1czogMSxcclxuICAgICAgICAgICAgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjIpXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuaW1hdGU6IEFuaW1hdGlvbk9wdGlvbmFsLlpPT00sXHJcbiAgICAgICAgYm9yZGVyOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICBzdHlsZTogQm9yZGVyU3R5bGVPcHRpb25hbC5TT0xJRCxcclxuICAgICAgICAgICAgY29sb3I6IFwiI2Q1ZDVkNVwiLFxyXG4gICAgICAgICAgICByYWRpdXM6IDRcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgX3pJbmRleDogbnVtYmVyID0gdGhpcy5zdGFydFpJbmRleDtcclxuICAgIGdldCB6SW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3pJbmRleCA9IHRoaXMuX3pJbmRleCArIDI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZShvcHRpb25zOiBFbnRyeU9wdGlvbiA9IHt9KTogRW50cnkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkgdGhpcy5pbnN0YW5jZSA9IG5ldyBFbnRyeShvcHRpb25zKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlck9wdGlvbnMob3B0aW9uczogRW50cnlPcHRpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXJ0WkluZGV4ID0gb3B0aW9ucz8uc3RhcnRaSW5kZXggPz8gdGhpcy5zdGFydFpJbmRleDtcclxuICAgICAgICBpZiAob3B0aW9ucz8uc3RhcnRaSW5kZXgpIHRoaXMuX3pJbmRleCA9IHRoaXMuc3RhcnRaSW5kZXg7XHJcbiAgICAgICAgdGhpcy53aW5kb3dPcHRpb24gPSBvcHRpb25zPy53aW5kb3dPcHRpb24gPz8gdGhpcy53aW5kb3dPcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uKGV2ZW50U2V0dGVyOiBFdmVudFNldHRlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2hlY2tKU09OT2JqZWN0KGV2ZW50U2V0dGVyKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBldmVudFNldHRlcikge1xyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gZXZlbnRTZXR0ZXJba2V5XTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrRnVuY3Rpb24oaGFuZGxlcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMub24oa2V5LCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlbihvcHRpb25zOiBVSVdpbmRvd09wdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKG9wdGlvbnM/LmlkKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgICAgICBjb25zdCB3aW5kb3cgPSB0aGlzLmdldFdpbmRvdyhvcHRpb25zLmlkKTtcclxuICAgICAgICBpZiAod2luZG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMuYnJvYWRjYXN0KFtXSU5ET1dfRk9DVVMsIFdJTkRPV19FWElTVF0sIDxXaW5kb3dFdmVudE1lc3NhZ2U+e1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB3aW5kb3dcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHVpV2luZG93ID0gbmV3IFVJV2luZG93KG9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IHVpV2luZG93RWxlbWVudCA9IHVpV2luZG93LmNyZWF0ZVZpZXcoKTtcclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh1aVdpbmRvd0VsZW1lbnQpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodWlXaW5kb3dFbGVtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEJ1cy5icm9hZGNhc3QoW1dJTkRPV19DUkVBVEUsIFdJTkRPV19GT0NVU10sIDxXaW5kb3dFdmVudE1lc3NhZ2U+e1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHVpV2luZG93LFxyXG4gICAgICAgICAgICBjcmVhdGVkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFdpbmRvdyhpZDogc3RyaW5nKTogVUlXaW5kb3cgfCBudWxsIHtcclxuICAgICAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChpZCkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VhcmNocyA9IHRoaXMubW9uaXRvckNlbnRlci53aW5kb3dzLmZpbHRlcih3aW4gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luLmlkID09PSBpZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc2VhcmNocy5sZW5ndGggPiAwID8gc2VhcmNoc1swXSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0cmlnZ2VyV2luZG93T3BlcmF0b3IoaWQ6IHN0cmluZywgZXZlbnRLZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKGlkKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IHRoaXMuZ2V0V2luZG93KGlkKTtcclxuICAgICAgICBpZiAoIXdpbmRvdykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50QnVzLmJyb2FkY2FzdChbZXZlbnRLZXldLCA8V2luZG93RXZlbnRNZXNzYWdlPntcclxuICAgICAgICAgICAgdGFyZ2V0OiB3aW5kb3dcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVzdHJveShpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyV2luZG93T3BlcmF0b3IoaWQsIFdJTkRPV19ERVNUUk9ZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWF4aW1pemUoaWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcldpbmRvd09wZXJhdG9yKGlkLCBXSU5ET1dfTUFYSU1JWkUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb2N1cyhpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyV2luZG93T3BlcmF0b3IoaWQsIFdJTkRPV19GT0NVUyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3Rpb25PcHRpb25hbCB9IGZyb20gJy4uL2NvbnN0JztcclxuaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uL2NvcmUvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgY2hlY2tBcnJheUVhY2gsIGNoZWNrUHN0TnVtYmVyIH0gZnJvbSAnLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb25PckNvb3JkIH0gZnJvbSAnLi4vdHlwZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERpcmVjdGlvbih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZGlyZWN0aW9uT3JDb29yZD86IERpcmVjdGlvbk9yQ29vcmQpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGlmICghY2hlY2tQc3ROdW1iZXIod2lkdGgpIHx8ICFjaGVja1BzdE51bWJlcihoZWlnaHQpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbk9yQ29vcmQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIChpbm5lckhlaWdodCAtIGhlaWdodCkgLyAyXTtcclxuXHJcbiAgICBpZiAoY2hlY2tBcnJheUVhY2g8bnVtYmVyPihkaXJlY3Rpb25PckNvb3JkLCBjaGVja1BzdE51bWJlcikpIHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uT3JDb29yZC5sZW5ndGggIT09IDIpIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgICAgICByZXR1cm4gW2RpcmVjdGlvbk9yQ29vcmRbMF0sIGRpcmVjdGlvbk9yQ29vcmRbMV1dO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uT3JDb29yZCkge1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuQ0VOVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4gWyhpbm5lcldpZHRoIC0gd2lkdGgpIC8gMiwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuVE9QX0NFTlRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIDBdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuQk9UVE9NX0NFTlRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIGlubmVySGVpZ2h0IC0gaGVpZ2h0XTtcclxuICAgICAgICBjYXNlIERpcmVjdGlvbk9wdGlvbmFsLkxFRlRfVE9QOlxyXG4gICAgICAgICAgICByZXR1cm4gWzAsIDBdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuTEVGVF9NSURETEU6XHJcbiAgICAgICAgICAgIHJldHVybiBbMCwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuTEVGVF9CT1RUT006XHJcbiAgICAgICAgICAgIHJldHVybiBbMCwgaW5uZXJIZWlnaHQgLSBoZWlnaHRdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuUklHSFRfVE9QOlxyXG4gICAgICAgICAgICByZXR1cm4gW2lubmVyV2lkdGggLSB3aWR0aCwgMF07XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb25PcHRpb25hbC5SSUdIVF9NSURETEU6XHJcbiAgICAgICAgICAgIHJldHVybiBbaW5uZXJXaWR0aCAtIHdpZHRoLCAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMl07XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb25PcHRpb25hbC5SSUdIVF9CT1RUT006XHJcbiAgICAgICAgICAgIHJldHVybiBbaW5uZXJXaWR0aCAtIHdpZHRoLCBpbm5lckhlaWdodCAtIGhlaWdodF07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50cnkgfSBmcm9tICcuL2VudHJ5JztcclxuaW1wb3J0IHsgTW9uaXRvckNlbnRlciB9IGZyb20gJy4vbW9uaXRvcic7XHJcbmltcG9ydCB7IEVudHJ5T3B0aW9uLCBPdmVydCB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gb3ZlcnQoKTogT3ZlcnQge1xyXG4gICAgY29uc3QgZW50cnkgPSBFbnRyeS5JbnN0YW5jZSgpO1xyXG4gICAgY29uc3QgbW9uaXRvckNlbnRlciA9IE1vbml0b3JDZW50ZXIuSW5zdGFuY2UoKTtcclxuXHJcbiAgICBjb25zdCBvdmVydCA9IDxPdmVydD5mdW5jdGlvbiAob3B0aW9uczogRW50cnlPcHRpb24pIHtcclxuICAgICAgICBFbnRyeS5JbnN0YW5jZShvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBvdmVydC52ZXJzaW9uID0gZW50cnkudmVyc2lvbjtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG92ZXJ0LCB7XHJcbiAgICAgICAgd2luZG93OiB7IGdldDogKCkgPT4gbW9uaXRvckNlbnRlci53aW5kb3cgfSxcclxuICAgICAgICB3aW5kb3dzOiB7IGdldDogKCkgPT4gbW9uaXRvckNlbnRlci53aW5kb3dzIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG92ZXJ0Lm9uID0gZW50cnkub24uYmluZChlbnRyeSk7XHJcbiAgICBvdmVydC5vcGVuID0gZW50cnkub3Blbi5iaW5kKGVudHJ5KTtcclxuICAgIG92ZXJ0LmdldFdpbmRvdyA9IGVudHJ5LmdldFdpbmRvdy5iaW5kKGVudHJ5KTtcclxuICAgIG92ZXJ0LmRlc3Ryb3kgPSBlbnRyeS5kZXN0cm95LmJpbmQoZW50cnkpO1xyXG4gICAgb3ZlcnQubWF4aW1pemUgPSBlbnRyeS5tYXhpbWl6ZS5iaW5kKGVudHJ5KTtcclxuICAgIG92ZXJ0LmZvY3VzID0gZW50cnkuZm9jdXMuYmluZChlbnRyeSk7XHJcblxyXG4gICAgcmV0dXJuIG92ZXJ0O1xyXG59KSgpO1xyXG4iLCJpbXBvcnQgeyBVSVdpbmRvdyB9IGZyb20gJy4uL2NvbXBvbmVudC91aS13aW5kb3cnO1xyXG5pbXBvcnQgeyBXSU5ET1dfQ1JFQVRFLCBXSU5ET1dfREVTVFJPWSwgV0lORE9XX0VYSVNULCBXSU5ET1dfRk9DVVMsIFdJTkRPV19NQVhJTUlaRSB9IGZyb20gJy4uL2NvbnN0JztcclxuaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9jb3JlL2V2ZW50LWJ1cyc7XHJcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL2NvcmUvdHlwZSc7XHJcbmltcG9ydCB7IFdpbmRvd0V2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3R5cGUnO1xyXG5pbXBvcnQgeyBQUkVGSVggfSBmcm9tICcuLi9jb3JlL2hlbHBlci9lbGVtZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb25pdG9yQ2VudGVyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBNb25pdG9yQ2VudGVyO1xyXG5cclxuICAgIHByaXZhdGUgZXZlbnRCdXM6IEV2ZW50QnVzID0gRXZlbnRCdXMuSW5zdGFuY2UoKTtcclxuICAgIHByaXZhdGUgX3dpbmRvd3M6IEFycmF5PFVJV2luZG93PiA9IFtdO1xyXG4gICAgZ2V0IHdpbmRvd3MoKTogQXJyYXk8VUlXaW5kb3c+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2luZG93cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF93aW5kb3c6IFVJV2luZG93IHwgbnVsbCA9IG51bGw7XHJcbiAgICBnZXQgd2luZG93KCk6IFVJV2luZG93IHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpbmRvdztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlKCk6IE1vbml0b3JDZW50ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlID0gdGhpcy5pbnN0YW5jZSA/PyBuZXcgTW9uaXRvckNlbnRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuaWQpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaWQgPSBgJHtQUkVGSVh9Y29udGFpbmVyYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50QnVzLm9uKFdJTkRPV19DUkVBVEUsIChtZXNzYWdlOiBFdmVudE1lc3NhZ2U8V2luZG93RXZlbnRNZXNzYWdlPikgPT4ge1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50QnVzLm9uKFdJTkRPV19GT0NVUywgKG1lc3NhZ2U6IEV2ZW50TWVzc2FnZTxXaW5kb3dFdmVudE1lc3NhZ2U+KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IG1lc3NhZ2UuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgICAgICAgIHdpbmRvdy51cGRhdGVaSW5kZXgobWVzc2FnZS5kYXRhc2V0Py5jcmVhdGVkID8/IGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEJ1cy5vbihXSU5ET1dfRVhJU1QsIChtZXNzYWdlOiBFdmVudE1lc3NhZ2U8V2luZG93RXZlbnRNZXNzYWdlPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBtZXNzYWdlLmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgICAgICB3aW5kb3cuYXR0cmFjdGluZygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50QnVzLm9uKFdJTkRPV19NQVhJTUlaRSwgKG1lc3NhZ2U6IEV2ZW50TWVzc2FnZTxXaW5kb3dFdmVudE1lc3NhZ2U+KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IG1lc3NhZ2UuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgICAgICAgIHdpbmRvdy5tYXhpbWl6ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50QnVzLm9uKFdJTkRPV19ERVNUUk9ZLCAobWVzc2FnZTogRXZlbnRNZXNzYWdlPFdpbmRvd0V2ZW50TWVzc2FnZT4pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gbWVzc2FnZS5kYXRhc2V0LnRhcmdldDtcclxuICAgICAgICAgICAgd2luZG93LmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0V2luZG93KHdpbmRvdzogVUlXaW5kb3cgfCBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fd2luZG93ID0gd2luZG93O1xyXG4gICAgfVxyXG59IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLkJyb3dzZXJTcHJpdGVTeW1ib2wgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBTcHJpdGVTeW1ib2wgPSBmdW5jdGlvbiBTcHJpdGVTeW1ib2wocmVmKSB7XG4gIHZhciBpZCA9IHJlZi5pZDtcbiAgdmFyIHZpZXdCb3ggPSByZWYudmlld0JveDtcbiAgdmFyIGNvbnRlbnQgPSByZWYuY29udGVudDtcblxuICB0aGlzLmlkID0gaWQ7XG4gIHRoaXMudmlld0JveCA9IHZpZXdCb3g7XG4gIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkgKCkge1xuICByZXR1cm4gdGhpcy5jb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgWydpZCcsICd2aWV3Qm94JywgJ2NvbnRlbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBkZWxldGUgdGhpcyQxW3Byb3BdOyB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbnZhciBwYXJzZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHZhciBoYXNJbXBvcnROb2RlID0gISFkb2N1bWVudC5pbXBvcnROb2RlO1xuICB2YXIgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhjb250ZW50LCAnaW1hZ2Uvc3ZnK3htbCcpLmRvY3VtZW50RWxlbWVudDtcblxuICAvKipcbiAgICogRml4IGZvciBicm93c2VyIHdoaWNoIGFyZSB0aHJvd2luZyBXcm9uZ0RvY3VtZW50RXJyb3JcbiAgICogaWYgeW91IGluc2VydCBhbiBlbGVtZW50IHdoaWNoIGlzIG5vdCBwYXJ0IG9mIHRoZSBkb2N1bWVudFxuICAgKiBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc5ODY1MTkvNDYyNDQwM1xuICAgKi9cbiAgaWYgKGhhc0ltcG9ydE5vZGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuaW1wb3J0Tm9kZShkb2MsIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIGRvYztcbn07XG5cbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBkZWVwbWVyZ2UgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIHVuZGVmaW5lZCA9PT0gJ2Z1bmN0aW9uJyAmJiB1bmRlZmluZWQuYW1kKSB7XG4gICAgICAgIHVuZGVmaW5lZChmYWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9XG59KGNvbW1vbmpzR2xvYmFsLCBmdW5jdGlvbiAoKSB7XG5cbmZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbCkge1xuICAgIHZhciBub25OdWxsT2JqZWN0ID0gdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xuXG4gICAgcmV0dXJuIG5vbk51bGxPYmplY3RcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IFJlZ0V4cF0nXG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBEYXRlXSdcbn1cblxuZnVuY3Rpb24gZW1wdHlUYXJnZXQodmFsKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVJZk5lY2Vzc2FyeSh2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGNsb25lID0gb3B0aW9uc0FyZ3VtZW50ICYmIG9wdGlvbnNBcmd1bWVudC5jbG9uZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gKGNsb25lICYmIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSkgPyBkZWVwbWVyZ2UoZW1wdHlUYXJnZXQodmFsdWUpLCB2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSA6IHZhbHVlXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB0YXJnZXQuc2xpY2UoKTtcbiAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbihlLCBpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVzdGluYXRpb25baV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChpc01lcmdlYWJsZU9iamVjdChlKSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2ldLCBlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5pbmRleE9mKGUpID09PSAtMSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb24ucHVzaChjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB7fTtcbiAgICBpZiAoaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3NhcnkodGFyZ2V0W2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIWlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSB8fCAhdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGRlZXBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRpb25zQXJndW1lbnQgfHwgeyBhcnJheU1lcmdlOiBkZWZhdWx0QXJyYXlNZXJnZSB9O1xuICAgIHZhciBhcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuXG4gICAgaWYgKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRhcmdldCkgPyBhcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIDogY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2UsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9XG59XG5cbmRlZXBtZXJnZS5hbGwgPSBmdW5jdGlvbiBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkgfHwgYXJyYXkubGVuZ3RoIDwgMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IHR3byBlbGVtZW50cycpXG4gICAgfVxuXG4gICAgLy8gd2UgYXJlIHN1cmUgdGhlcmUgYXJlIGF0IGxlYXN0IDIgdmFsdWVzLCBzbyBpdCBpcyBzYWZlIHRvIGhhdmUgbm8gaW5pdGlhbCB2YWx1ZVxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgbmV4dCkge1xuICAgICAgICByZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9KVxufTtcblxucmV0dXJuIGRlZXBtZXJnZVxuXG59KSk7XG59KTtcblxudmFyIG5hbWVzcGFjZXNfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbnZhciBuYW1lc3BhY2VzID0ge1xuICBzdmc6IHtcbiAgICBuYW1lOiAneG1sbnMnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICB9LFxuICB4bGluazoge1xuICAgIG5hbWU6ICd4bWxuczp4bGluaycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaydcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmFtZXNwYWNlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufSk7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBvYmplY3RUb0F0dHJzU3RyaW5nID0gZnVuY3Rpb24gKGF0dHJzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhhdHRycykubWFwKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgdmFyIHZhbHVlID0gYXR0cnNbYXR0cl0udG9TdHJpbmcoKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG4gICAgcmV0dXJuIChhdHRyICsgXCI9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIik7XG4gIH0pLmpvaW4oJyAnKTtcbn07XG5cbnZhciBzdmcgPSBuYW1lc3BhY2VzXzEuc3ZnO1xudmFyIHhsaW5rID0gbmFtZXNwYWNlc18xLnhsaW5rO1xuXG52YXIgZGVmYXVsdEF0dHJzID0ge307XG5kZWZhdWx0QXR0cnNbc3ZnLm5hbWVdID0gc3ZnLnVyaTtcbmRlZmF1bHRBdHRyc1t4bGluay5uYW1lXSA9IHhsaW5rLnVyaTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbnRlbnRdXG4gKiBAcGFyYW0ge09iamVjdH0gW2F0dHJpYnV0ZXNdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciB3cmFwSW5TdmdTdHJpbmcgPSBmdW5jdGlvbiAoY29udGVudCwgYXR0cmlidXRlcykge1xuICBpZiAoIGNvbnRlbnQgPT09IHZvaWQgMCApIGNvbnRlbnQgPSAnJztcblxuICB2YXIgYXR0cnMgPSBkZWVwbWVyZ2UoZGVmYXVsdEF0dHJzLCBhdHRyaWJ1dGVzIHx8IHt9KTtcbiAgdmFyIGF0dHJzUmVuZGVyZWQgPSBvYmplY3RUb0F0dHJzU3RyaW5nKGF0dHJzKTtcbiAgcmV0dXJuIChcIjxzdmcgXCIgKyBhdHRyc1JlbmRlcmVkICsgXCI+XCIgKyBjb250ZW50ICsgXCI8L3N2Zz5cIik7XG59O1xuXG52YXIgQnJvd3NlclNwcml0ZVN5bWJvbCA9IChmdW5jdGlvbiAoU3ByaXRlU3ltYm9sJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGVTeW1ib2wgKCkge1xuICAgIFNwcml0ZVN5bWJvbCQkMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgaWYgKCBTcHJpdGVTeW1ib2wkJDEgKSBCcm93c2VyU3ByaXRlU3ltYm9sLl9fcHJvdG9fXyA9IFNwcml0ZVN5bWJvbCQkMTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGVTeW1ib2wkJDEgJiYgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gICAqIEByZXR1cm4ge0Jyb3dzZXJTcHJpdGVTeW1ib2x9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUgPSBmdW5jdGlvbiBjcmVhdGVGcm9tRXhpc3RpbmdOb2RlIChub2RlKSB7XG4gICAgcmV0dXJuIG5ldyBCcm93c2VyU3ByaXRlU3ltYm9sKHtcbiAgICAgIGlkOiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSxcbiAgICAgIHZpZXdCb3g6IG5vZGUuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JyksXG4gICAgICBjb250ZW50OiBub2RlLm91dGVySFRNTFxuICAgIH0pO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMudW5tb3VudCgpO1xuICAgIH1cbiAgICBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50VGFyZ2V0ID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG5cbiAgICBtb3VudFRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuc3RyaW5naWZ5KCk7XG4gICAgcmV0dXJuIHBhcnNlKHdyYXBJblN2Z1N0cmluZyhjb250ZW50KSkuY2hpbGROb2Rlc1swXTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCAoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xufShTcHJpdGVTeW1ib2wpKTtcblxucmV0dXJuIEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbn0pKSk7XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuQnJvd3NlclNwcml0ZSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGRlZXBtZXJnZSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgdW5kZWZpbmVkID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZC5hbWQpIHtcbiAgICAgICAgdW5kZWZpbmVkKGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH1cbn0oY29tbW9uanNHbG9iYWwsIGZ1bmN0aW9uICgpIHtcblxuZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsKSB7XG4gICAgdmFyIG5vbk51bGxPYmplY3QgPSB2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gbm9uTnVsbE9iamVjdFxuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgUmVnRXhwXSdcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IERhdGVdJ1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZUlmTmVjZXNzYXJ5KHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgY2xvbmUgPSBvcHRpb25zQXJndW1lbnQgJiYgb3B0aW9uc0FyZ3VtZW50LmNsb25lID09PSB0cnVlO1xuICAgIHJldHVybiAoY2xvbmUgJiYgaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKSA/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHRhcmdldC5zbGljZSgpO1xuICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KGUpKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGRlZXBtZXJnZSh0YXJnZXRbaV0sIGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmluZGV4T2YoZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5wdXNoKGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuICAgIGlmIChpc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeSh0YXJnZXRba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdGlvbnNBcmd1bWVudCB8fCB7IGFycmF5TWVyZ2U6IGRlZmF1bHRBcnJheU1lcmdlIH07XG4gICAgdmFyIGFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cbiAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KSA/IGFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkgOiBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSB8fCBhcnJheS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5IHdpdGggYXQgbGVhc3QgdHdvIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICAvLyB3ZSBhcmUgc3VyZSB0aGVyZSBhcmUgYXQgbGVhc3QgMiB2YWx1ZXMsIHNvIGl0IGlzIHNhZmUgdG8gaGF2ZSBubyBpbml0aWFsIHZhbHVlXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0pXG59O1xuXG5yZXR1cm4gZGVlcG1lcmdlXG5cbn0pKTtcbn0pO1xuXG4vLyAgICAgIFxuLy8gQW4gZXZlbnQgaGFuZGxlciBjYW4gdGFrZSBhbiBvcHRpb25hbCBldmVudCBhcmd1bWVudFxuLy8gYW5kIHNob3VsZCBub3QgcmV0dXJuIGEgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQW4gYXJyYXkgb2YgYWxsIGN1cnJlbnRseSByZWdpc3RlcmVkIGV2ZW50IGhhbmRsZXJzIGZvciBhIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBIG1hcCBvZiBldmVudCB0eXBlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgXG5cbi8qKiBNaXR0OiBUaW55ICh+MjAwYikgZnVuY3Rpb25hbCBldmVudCBlbWl0dGVyIC8gcHVic3ViLlxuICogIEBuYW1lIG1pdHRcbiAqICBAcmV0dXJucyB7TWl0dH1cbiAqL1xuZnVuY3Rpb24gbWl0dChhbGwgICAgICAgICAgICAgICAgICkge1xuXHRhbGwgPSBhbGwgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRyZXR1cm4ge1xuXHRcdC8qKlxuXHRcdCAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIGxpc3RlbiBmb3IsIG9yIGBcIipcImAgZm9yIGFsbCBldmVudHNcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBGdW5jdGlvbiB0byBjYWxsIGluIHJlc3BvbnNlIHRvIGdpdmVuIGV2ZW50XG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvbjogZnVuY3Rpb24gb24odHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIHVucmVnaXN0ZXIgYGhhbmRsZXJgIGZyb20sIG9yIGBcIipcImBcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBIYW5kbGVyIGZ1bmN0aW9uIHRvIHJlbW92ZVxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b2ZmOiBmdW5jdGlvbiBvZmYodHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdGlmIChhbGxbdHlwZV0pIHtcblx0XHRcdFx0YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEludm9rZSBhbGwgaGFuZGxlcnMgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqIElmIHByZXNlbnQsIGBcIipcImAgaGFuZGxlcnMgYXJlIGludm9rZWQgYWZ0ZXIgdHlwZS1tYXRjaGVkIGhhbmRsZXJzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgIFRoZSBldmVudCB0eXBlIHRvIGludm9rZVxuXHRcdCAqIEBwYXJhbSB7QW55fSBbZXZ0XSAgQW55IHZhbHVlIChvYmplY3QgaXMgcmVjb21tZW5kZWQgYW5kIHBvd2VyZnVsKSwgcGFzc2VkIHRvIGVhY2ggaGFuZGxlclxuXHRcdCAqIEBtZW1iZXJvZiBtaXR0XG5cdFx0ICovXG5cdFx0ZW1pdDogZnVuY3Rpb24gZW1pdCh0eXBlICAgICAgICAsIGV2dCAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcihldnQpOyB9KTtcblx0XHRcdChhbGxbJyonXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIodHlwZSwgZXZ0KTsgfSk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgbmFtZXNwYWNlc18xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xudmFyIG5hbWVzcGFjZXMgPSB7XG4gIHN2Zzoge1xuICAgIG5hbWU6ICd4bWxucycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gIH0sXG4gIHhsaW5rOiB7XG4gICAgbmFtZTogJ3htbG5zOnhsaW5rJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJ1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuYW1lc3BhY2VzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59KTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIG9iamVjdFRvQXR0cnNTdHJpbmcgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJzKS5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICB2YXIgdmFsdWUgPSBhdHRyc1thdHRyXS50b1N0cmluZygpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICByZXR1cm4gKGF0dHIgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKTtcbiAgfSkuam9pbignICcpO1xufTtcblxudmFyIHN2ZyA9IG5hbWVzcGFjZXNfMS5zdmc7XG52YXIgeGxpbmsgPSBuYW1lc3BhY2VzXzEueGxpbms7XG5cbnZhciBkZWZhdWx0QXR0cnMgPSB7fTtcbmRlZmF1bHRBdHRyc1tzdmcubmFtZV0gPSBzdmcudXJpO1xuZGVmYXVsdEF0dHJzW3hsaW5rLm5hbWVdID0geGxpbmsudXJpO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29udGVudF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIHdyYXBJblN2Z1N0cmluZyA9IGZ1bmN0aW9uIChjb250ZW50LCBhdHRyaWJ1dGVzKSB7XG4gIGlmICggY29udGVudCA9PT0gdm9pZCAwICkgY29udGVudCA9ICcnO1xuXG4gIHZhciBhdHRycyA9IGRlZXBtZXJnZShkZWZhdWx0QXR0cnMsIGF0dHJpYnV0ZXMgfHwge30pO1xuICB2YXIgYXR0cnNSZW5kZXJlZCA9IG9iamVjdFRvQXR0cnNTdHJpbmcoYXR0cnMpO1xuICByZXR1cm4gKFwiPHN2ZyBcIiArIGF0dHJzUmVuZGVyZWQgKyBcIj5cIiArIGNvbnRlbnQgKyBcIjwvc3ZnPlwiKTtcbn07XG5cbnZhciBzdmckMSA9IG5hbWVzcGFjZXNfMS5zdmc7XG52YXIgeGxpbmskMSA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRDb25maWcgPSB7XG4gIGF0dHJzOiAoIG9iaiA9IHtcbiAgICBzdHlsZTogWydwb3NpdGlvbjogYWJzb2x1dGUnLCAnd2lkdGg6IDAnLCAnaGVpZ2h0OiAwJ10uam9pbignOyAnKVxuICB9LCBvYmpbc3ZnJDEubmFtZV0gPSBzdmckMS51cmksIG9ialt4bGluayQxLm5hbWVdID0geGxpbmskMS51cmksIG9iaiApXG59O1xudmFyIG9iajtcblxudmFyIFNwcml0ZSA9IGZ1bmN0aW9uIFNwcml0ZShjb25maWcpIHtcbiAgdGhpcy5jb25maWcgPSBkZWVwbWVyZ2UoZGVmYXVsdENvbmZpZywgY29uZmlnIHx8IHt9KTtcbiAgdGhpcy5zeW1ib2xzID0gW107XG59O1xuXG4vKipcbiAqIEFkZCBuZXcgc3ltYm9sLiBJZiBzeW1ib2wgd2l0aCB0aGUgc2FtZSBpZCBleGlzdHMgaXQgd2lsbCBiZSByZXBsYWNlZC5cbiAqIEBwYXJhbSB7U3ByaXRlU3ltYm9sfSBzeW1ib2xcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgYWRkZWQsIGBmYWxzZWAgLSByZXBsYWNlZFxuICovXG5TcHJpdGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoc3ltYm9sKSB7XG4gIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBzeW1ib2xzID0gcmVmLnN5bWJvbHM7XG4gIHZhciBleGlzdGluZyA9IHRoaXMuZmluZChzeW1ib2wuaWQpO1xuXG4gIGlmIChleGlzdGluZykge1xuICAgIHN5bWJvbHNbc3ltYm9scy5pbmRleE9mKGV4aXN0aW5nKV0gPSBzeW1ib2w7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3ltYm9sICYgZGVzdHJveSBpdFxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBzeW1ib2wgd2FzIGZvdW5kICYgc3VjY2Vzc2Z1bGx5IGRlc3Ryb3llZCwgYGZhbHNlYCAtIG90aGVyd2lzZVxuICovXG5TcHJpdGUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAoaWQpIHtcbiAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHN5bWJvbHMgPSByZWYuc3ltYm9scztcbiAgdmFyIHN5bWJvbCA9IHRoaXMuZmluZChpZCk7XG5cbiAgaWYgKHN5bWJvbCkge1xuICAgIHN5bWJvbHMuc3BsaWNlKHN5bWJvbHMuaW5kZXhPZihzeW1ib2wpLCAxKTtcbiAgICBzeW1ib2wuZGVzdHJveSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1Nwcml0ZVN5bWJvbHxudWxsfVxuICovXG5TcHJpdGUucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiBmaW5kIChpZCkge1xuICByZXR1cm4gdGhpcy5zeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcy5pZCA9PT0gaWQ7IH0pWzBdIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGlkKSB7XG4gIHJldHVybiB0aGlzLmZpbmQoaWQpICE9PSBudWxsO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5ICgpIHtcbiAgdmFyIHJlZiA9IHRoaXMuY29uZmlnO1xuICAgIHZhciBhdHRycyA9IHJlZi5hdHRycztcbiAgdmFyIHN0cmluZ2lmaWVkU3ltYm9scyA9IHRoaXMuc3ltYm9scy5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuc3RyaW5naWZ5KCk7IH0pLmpvaW4oJycpO1xuICByZXR1cm4gd3JhcEluU3ZnU3RyaW5nKHN0cmluZ2lmaWVkU3ltYm9scywgYXR0cnMpO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHRoaXMuc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmRlc3Ryb3koKTsgfSk7XG59O1xuXG52YXIgU3ByaXRlU3ltYm9sID0gZnVuY3Rpb24gU3ByaXRlU3ltYm9sKHJlZikge1xuICB2YXIgaWQgPSByZWYuaWQ7XG4gIHZhciB2aWV3Qm94ID0gcmVmLnZpZXdCb3g7XG4gIHZhciBjb250ZW50ID0gcmVmLmNvbnRlbnQ7XG5cbiAgdGhpcy5pZCA9IGlkO1xuICB0aGlzLnZpZXdCb3ggPSB2aWV3Qm94O1xuICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5ICgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGVudDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKTtcbn07XG5cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIFsnaWQnLCAndmlld0JveCcsICdjb250ZW50J10uZm9yRWFjaChmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gZGVsZXRlIHRoaXMkMVtwcm9wXTsgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG52YXIgcGFyc2UgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICB2YXIgaGFzSW1wb3J0Tm9kZSA9ICEhZG9jdW1lbnQuaW1wb3J0Tm9kZTtcbiAgdmFyIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoY29udGVudCwgJ2ltYWdlL3N2Zyt4bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEZpeCBmb3IgYnJvd3NlciB3aGljaCBhcmUgdGhyb3dpbmcgV3JvbmdEb2N1bWVudEVycm9yXG4gICAqIGlmIHlvdSBpbnNlcnQgYW4gZWxlbWVudCB3aGljaCBpcyBub3QgcGFydCBvZiB0aGUgZG9jdW1lbnRcbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83OTg2NTE5LzQ2MjQ0MDNcbiAgICovXG4gIGlmIChoYXNJbXBvcnROb2RlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmltcG9ydE5vZGUoZG9jLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBkb2M7XG59O1xuXG52YXIgQnJvd3NlclNwcml0ZVN5bWJvbCA9IChmdW5jdGlvbiAoU3ByaXRlU3ltYm9sJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGVTeW1ib2wgKCkge1xuICAgIFNwcml0ZVN5bWJvbCQkMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgaWYgKCBTcHJpdGVTeW1ib2wkJDEgKSBCcm93c2VyU3ByaXRlU3ltYm9sLl9fcHJvdG9fXyA9IFNwcml0ZVN5bWJvbCQkMTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGVTeW1ib2wkJDEgJiYgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gICAqIEByZXR1cm4ge0Jyb3dzZXJTcHJpdGVTeW1ib2x9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUgPSBmdW5jdGlvbiBjcmVhdGVGcm9tRXhpc3RpbmdOb2RlIChub2RlKSB7XG4gICAgcmV0dXJuIG5ldyBCcm93c2VyU3ByaXRlU3ltYm9sKHtcbiAgICAgIGlkOiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSxcbiAgICAgIHZpZXdCb3g6IG5vZGUuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JyksXG4gICAgICBjb250ZW50OiBub2RlLm91dGVySFRNTFxuICAgIH0pO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMudW5tb3VudCgpO1xuICAgIH1cbiAgICBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50VGFyZ2V0ID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG5cbiAgICBtb3VudFRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuc3RyaW5naWZ5KCk7XG4gICAgcmV0dXJuIHBhcnNlKHdyYXBJblN2Z1N0cmluZyhjb250ZW50KSkuY2hpbGROb2Rlc1swXTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCAoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xufShTcHJpdGVTeW1ib2wpKTtcblxudmFyIGRlZmF1bHRDb25maWckMSA9IHtcbiAgLyoqXG4gICAqIFNob3VsZCBmb2xsb3dpbmcgb3B0aW9ucyBiZSBhdXRvbWF0aWNhbGx5IGNvbmZpZ3VyZWQ6XG4gICAqIC0gYHN5bmNVcmxzV2l0aEJhc2VUYWdgXG4gICAqIC0gYGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXJgXG4gICAqIC0gYG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sYFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGF1dG9Db25maWd1cmU6IHRydWUsXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgbW91bnRpbmcgc2VsZWN0b3JcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIG1vdW50VG86ICdib2R5JyxcblxuICAvKipcbiAgICogRml4IGRpc2FwcGVhcmluZyBTVkcgZWxlbWVudHMgd2hlbiA8YmFzZSBocmVmPiBleGlzdHMuXG4gICAqIEV4ZWN1dGVzIHdoZW4gc3ByaXRlIG1vdW50ZWQuXG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTgyNjUzMzYvNzk2MTUyXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2V2ZXJkaW1lbnNpb24vYW5ndWxhci1zdmctYmFzZS1maXhcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2lzc3Vlcy84OTM0I2lzc3VlY29tbWVudC01NjU2ODQ2NlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHN5bmNVcmxzV2l0aEJhc2VUYWc6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTaG91bGQgc3ByaXRlIGxpc3RlbiBjdXN0b20gbG9jYXRpb24gY2hhbmdlIGV2ZW50XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbGlzdGVuTG9jYXRpb25DaGFuZ2VFdmVudDogdHJ1ZSxcblxuICAvKipcbiAgICogQ3VzdG9tIHdpbmRvdyBldmVudCBuYW1lIHdoaWNoIHNob3VsZCBiZSBlbWl0dGVkIHRvIHVwZGF0ZSBzcHJpdGUgdXJsc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbG9jYXRpb25DaGFuZ2VFdmVudDogJ2xvY2F0aW9uQ2hhbmdlJyxcblxuICAvKipcbiAgICogRW1pdCBsb2NhdGlvbiBjaGFuZ2UgZXZlbnQgaW4gQW5ndWxhciBhdXRvbWF0aWNhbGx5XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcjogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNlbGVjdG9yIHRvIGZpbmQgc3ltYm9scyB1c2FnZXMgd2hlbiB1cGRhdGluZyBzcHJpdGUgdXJsc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdXNhZ2VzVG9VcGRhdGU6ICd1c2VbKnxocmVmXScsXG5cbiAgLyoqXG4gICAqIEZpeCBGaXJlZm94IGJ1ZyB3aGVuIGdyYWRpZW50cyBhbmQgcGF0dGVybnMgZG9uJ3Qgd29yayBpZiB0aGV5IGFyZSB3aXRoaW4gYSBzeW1ib2wuXG4gICAqIEV4ZWN1dGVzIHdoZW4gc3ByaXRlIGlzIHJlbmRlcmVkLCBidXQgbm90IG1vdW50ZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzA2Njc0XG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzUzNTc1XG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTIzNTM2NFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sOiBmYWxzZVxufTtcblxuLyoqXG4gKiBAcGFyYW0geyp9IGFycmF5TGlrZVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbnZhciBhcnJheUZyb20gPSBmdW5jdGlvbiAoYXJyYXlMaWtlKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UsIDApO1xufTtcblxudmFyIGJyb3dzZXIgPSB7XG4gIGlzQ2hyb21lOiBmdW5jdGlvbiAoKSB7IHJldHVybiAvY2hyb21lL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgfSxcbiAgaXNGaXJlZm94OiBmdW5jdGlvbiAoKSB7IHJldHVybiAvZmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IH0sXG5cbiAgLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNzUwMyh2PXZzLjg1KS5hc3B4XG4gIGlzSUU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIC9tc2llL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAvdHJpZGVudC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IH0sXG4gIGlzRWRnZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gL2VkZ2UvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0geyp9IGRhdGFcbiAqL1xudmFyIGRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSkge1xuICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KG5hbWUsIGZhbHNlLCBmYWxzZSwgZGF0YSk7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5cbi8qKlxuICogSUUgZG9lc24ndCBldmFsdWF0ZSA8c3R5bGU+IHRhZ3MgaW4gU1ZHcyB0aGF0IGFyZSBkeW5hbWljYWxseSBhZGRlZCB0byB0aGUgcGFnZS5cbiAqIFRoaXMgdHJpY2sgd2lsbCB0cmlnZ2VyIElFIHRvIHJlYWQgYW5kIHVzZSBhbnkgZXhpc3RpbmcgU1ZHIDxzdHlsZT4gdGFncy5cbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ljb25pYy9TVkdJbmplY3Rvci9pc3N1ZXMvMjNcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTA4OTg0NjkvXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBub2RlIERPTSBFbGVtZW50IHRvIHNlYXJjaCA8c3R5bGU+IHRhZ3MgaW5cbiAqIEByZXR1cm4ge0FycmF5PEhUTUxTdHlsZUVsZW1lbnQ+fVxuICovXG52YXIgZXZhbFN0eWxlc0lFV29ya2Fyb3VuZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciB1cGRhdGVkTm9kZXMgPSBbXTtcblxuICBhcnJheUZyb20obm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpKVxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgKz0gJyc7XG4gICAgICB1cGRhdGVkTm9kZXMucHVzaChzdHlsZSk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHVwZGF0ZWROb2Rlcztcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFt1cmxdIElmIG5vdCBwcm92aWRlZCAtIGN1cnJlbnQgVVJMIHdpbGwgYmUgdXNlZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgZ2V0VXJsV2l0aG91dEZyYWdtZW50ID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gKHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZikuc3BsaXQoJyMnKVswXTtcbn07XG5cbi8qIGdsb2JhbCBhbmd1bGFyICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAqL1xudmFyIGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gIGFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyRyb290U2NvcGUnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSkge1xuICAgICRyb290U2NvcGUuJG9uKCckbG9jYXRpb25DaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24gKGUsIG5ld1VybCwgb2xkVXJsKSB7XG4gICAgICBkaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgeyBvbGRVcmw6IG9sZFVybCwgbmV3VXJsOiBuZXdVcmwgfSk7XG4gICAgfSk7XG4gIH1dKTtcbn07XG5cbnZhciBkZWZhdWx0U2VsZWN0b3IgPSAnbGluZWFyR3JhZGllbnQsIHJhZGlhbEdyYWRpZW50LCBwYXR0ZXJuJztcblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN2Z1xuICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcl1cbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbnZhciBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCA9IGZ1bmN0aW9uIChzdmcsIHNlbGVjdG9yKSB7XG4gIGlmICggc2VsZWN0b3IgPT09IHZvaWQgMCApIHNlbGVjdG9yID0gZGVmYXVsdFNlbGVjdG9yO1xuXG4gIGFycmF5RnJvbShzdmcucXVlcnlTZWxlY3RvckFsbCgnc3ltYm9sJykpLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgIGFycmF5RnJvbShzeW1ib2wucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHN5bWJvbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBzeW1ib2wpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHN2Zztcbn07XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlTGlzdH0gbm9kZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFttYXRjaGVyXVxuICogQHJldHVybiB7QXR0cltdfVxuICovXG5mdW5jdGlvbiBzZWxlY3RBdHRyaWJ1dGVzKG5vZGVzLCBtYXRjaGVyKSB7XG4gIHZhciBhdHRycyA9IGFycmF5RnJvbShub2RlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5vZGUpIHtcbiAgICBpZiAoIW5vZGUuYXR0cmlidXRlcykge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlmaWVkID0gYXJyYXlGcm9tKG5vZGUuYXR0cmlidXRlcyk7XG4gICAgdmFyIG1hdGNoZWQgPSBtYXRjaGVyID8gYXJyYXlmaWVkLmZpbHRlcihtYXRjaGVyKSA6IGFycmF5ZmllZDtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChtYXRjaGVkKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBhdHRycztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fE5vZGV9IG5vZGVzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjbG9uZT10cnVlXVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbnZhciB4TGlua05TID0gbmFtZXNwYWNlc18xLnhsaW5rLnVyaTtcbnZhciB4TGlua0F0dHJOYW1lID0gJ3hsaW5rOmhyZWYnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbnZhciBzcGVjaWFsVXJsQ2hhcnNQYXR0ZXJuID0gL1t7fXxcXFxcXFxeXFxbXFxdYFwiPD5dL2c7XG5cbmZ1bmN0aW9uIGVuY29kZXIodXJsKSB7XG4gIHJldHVybiB1cmwucmVwbGFjZShzcGVjaWFsVXJsQ2hhcnNQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gKFwiJVwiICsgKG1hdGNoWzBdLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgXCJcXFxcJCZcIik7IC8vICQmIG1lYW5zIHRoZSB3aG9sZSBtYXRjaGVkIHN0cmluZ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IG5vZGVzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhcnRzV2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VXaXRoXG4gKiBAcmV0dXJuIHtOb2RlTGlzdH1cbiAqL1xuZnVuY3Rpb24gdXBkYXRlUmVmZXJlbmNlcyhub2Rlcywgc3RhcnRzV2l0aCwgcmVwbGFjZVdpdGgpIHtcbiAgYXJyYXlGcm9tKG5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIGhyZWYgPSBub2RlLmdldEF0dHJpYnV0ZSh4TGlua0F0dHJOYW1lKTtcbiAgICBpZiAoaHJlZiAmJiBocmVmLmluZGV4T2Yoc3RhcnRzV2l0aCkgPT09IDApIHtcbiAgICAgIHZhciBuZXdVcmwgPSBocmVmLnJlcGxhY2Uoc3RhcnRzV2l0aCwgcmVwbGFjZVdpdGgpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUyh4TGlua05TLCB4TGlua0F0dHJOYW1lLCBuZXdVcmwpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuXG4vKipcbiAqIExpc3Qgb2YgU1ZHIGF0dHJpYnV0ZXMgdG8gdXBkYXRlIHVybCgpIHRhcmdldCBpbiB0aGVtXG4gKi9cbnZhciBhdHRMaXN0ID0gW1xuICAnY2xpcFBhdGgnLFxuICAnY29sb3JQcm9maWxlJyxcbiAgJ3NyYycsXG4gICdjdXJzb3InLFxuICAnZmlsbCcsXG4gICdmaWx0ZXInLFxuICAnbWFya2VyJyxcbiAgJ21hcmtlclN0YXJ0JyxcbiAgJ21hcmtlck1pZCcsXG4gICdtYXJrZXJFbmQnLFxuICAnbWFzaycsXG4gICdzdHJva2UnLFxuICAnc3R5bGUnXG5dO1xuXG52YXIgYXR0U2VsZWN0b3IgPSBhdHRMaXN0Lm1hcChmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gKFwiW1wiICsgYXR0ciArIFwiXVwiKTsgfSkuam9pbignLCcpO1xuXG4vKipcbiAqIFVwZGF0ZSBVUkxzIGluIHN2ZyBpbWFnZSAobGlrZSBgZmlsbD1cInVybCguLi4pXCJgKSBhbmQgdXBkYXRlIHJlZmVyZW5jaW5nIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN2Z1xuICogQHBhcmFtIHtOb2RlTGlzdH0gcmVmZXJlbmNlc1xuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBzdGFydHNXaXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZVdpdGhcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2Zy5zcHJpdGUnKTtcbiAqIGNvbnN0IHVzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VzZScpO1xuICogdXBkYXRlVXJscyhzcHJpdGUsIHVzYWdlcywgJyMnLCAncHJlZml4IycpO1xuICovXG52YXIgdXBkYXRlVXJscyA9IGZ1bmN0aW9uIChzdmcsIHJlZmVyZW5jZXMsIHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKSB7XG4gIHZhciBzdGFydHNXaXRoRW5jb2RlZCA9IGVuY29kZXIoc3RhcnRzV2l0aCk7XG4gIHZhciByZXBsYWNlV2l0aEVuY29kZWQgPSBlbmNvZGVyKHJlcGxhY2VXaXRoKTtcblxuICB2YXIgbm9kZXMgPSBzdmcucXVlcnlTZWxlY3RvckFsbChhdHRTZWxlY3Rvcik7XG4gIHZhciBhdHRycyA9IHNlbGVjdEF0dHJpYnV0ZXMobm9kZXMsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIgbG9jYWxOYW1lID0gcmVmLmxvY2FsTmFtZTtcbiAgICB2YXIgdmFsdWUgPSByZWYudmFsdWU7XG5cbiAgICByZXR1cm4gYXR0TGlzdC5pbmRleE9mKGxvY2FsTmFtZSkgIT09IC0xICYmIHZhbHVlLmluZGV4T2YoKFwidXJsKFwiICsgc3RhcnRzV2l0aEVuY29kZWQpKSAhPT0gLTE7XG4gIH0pO1xuXG4gIGF0dHJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIGF0dHIudmFsdWUgPSBhdHRyLnZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoc3RhcnRzV2l0aEVuY29kZWQpLCAnZycpLCByZXBsYWNlV2l0aEVuY29kZWQpOyB9KTtcbiAgdXBkYXRlUmVmZXJlbmNlcyhyZWZlcmVuY2VzLCBzdGFydHNXaXRoRW5jb2RlZCwgcmVwbGFjZVdpdGhFbmNvZGVkKTtcbn07XG5cbi8qKlxuICogSW50ZXJuYWwgZW1pdHRlciBldmVudHNcbiAqIEBlbnVtXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgRXZlbnRzID0ge1xuICBNT1VOVDogJ21vdW50JyxcbiAgU1lNQk9MX01PVU5UOiAnc3ltYm9sX21vdW50J1xufTtcblxudmFyIEJyb3dzZXJTcHJpdGUgPSAoZnVuY3Rpb24gKFNwcml0ZSQkMSkge1xuICBmdW5jdGlvbiBCcm93c2VyU3ByaXRlKGNmZykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgIGlmICggY2ZnID09PSB2b2lkIDAgKSBjZmcgPSB7fTtcblxuICAgIFNwcml0ZSQkMS5jYWxsKHRoaXMsIGRlZXBtZXJnZShkZWZhdWx0Q29uZmlnJDEsIGNmZykpO1xuXG4gICAgdmFyIGVtaXR0ZXIgPSBtaXR0KCk7XG4gICAgdGhpcy5fZW1pdHRlciA9IGVtaXR0ZXI7XG4gICAgdGhpcy5ub2RlID0gbnVsbDtcblxuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvQ29uZmlndXJlKSB7XG4gICAgICB0aGlzLl9hdXRvQ29uZmlndXJlKGNmZyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zeW5jVXJsc1dpdGhCYXNlVGFnKSB7XG4gICAgICB2YXIgYmFzZVVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICBlbWl0dGVyLm9uKEV2ZW50cy5NT1VOVCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcyQxLnVwZGF0ZVVybHMoJyMnLCBiYXNlVXJsKTsgfSk7XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZUxvY2F0aW9uQ2hhbmdlID0gdGhpcy5faGFuZGxlTG9jYXRpb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVMb2NhdGlvbkNoYW5nZSA9IGhhbmRsZUxvY2F0aW9uQ2hhbmdlO1xuXG4gICAgLy8gUHJvdmlkZSB3YXkgdG8gdXBkYXRlIHNwcml0ZSB1cmxzIGV4dGVybmFsbHkgdmlhIGRpc3BhdGNoaW5nIGN1c3RvbSB3aW5kb3cgZXZlbnRcbiAgICBpZiAoY29uZmlnLmxpc3RlbkxvY2F0aW9uQ2hhbmdlRXZlbnQpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUV2ZW50LCBoYW5kbGVMb2NhdGlvbkNoYW5nZSk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBsb2NhdGlvbiBjaGFuZ2UgZXZlbnQgaW4gQW5ndWxhciBhdXRvbWF0aWNhbGx5XG4gICAgaWYgKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyKSB7XG4gICAgICBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUV2ZW50KTtcbiAgICB9XG5cbiAgICAvLyBBZnRlciBzcHJpdGUgbW91bnRlZFxuICAgIGVtaXR0ZXIub24oRXZlbnRzLk1PVU5ULCBmdW5jdGlvbiAoc3ByaXRlTm9kZSkge1xuICAgICAgaWYgKGNvbmZpZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCkge1xuICAgICAgICBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbChzcHJpdGVOb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFmdGVyIHN5bWJvbCBtb3VudGVkIGludG8gc3ByaXRlXG4gICAgZW1pdHRlci5vbihFdmVudHMuU1lNQk9MX01PVU5ULCBmdW5jdGlvbiAoc3ltYm9sTm9kZSkge1xuICAgICAgaWYgKGNvbmZpZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCkge1xuICAgICAgICBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbChzeW1ib2xOb2RlLnBhcmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYnJvd3Nlci5pc0lFKCkgfHwgYnJvd3Nlci5pc0VkZ2UoKSkge1xuICAgICAgICBldmFsU3R5bGVzSUVXb3JrYXJvdW5kKHN5bWJvbE5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCBTcHJpdGUkJDEgKSBCcm93c2VyU3ByaXRlLl9fcHJvdG9fXyA9IFNwcml0ZSQkMTtcbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGUkJDEgJiYgU3ByaXRlJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGU7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgcHJvdG90eXBlQWNjZXNzb3JzLmlzTW91bnRlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5ub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBdXRvbWF0aWNhbGx5IGNvbmZpZ3VyZSBmb2xsb3dpbmcgb3B0aW9uc1xuICAgKiAtIGBzeW5jVXJsc1dpdGhCYXNlVGFnYFxuICAgKiAtIGBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyYFxuICAgKiAtIGBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbGBcbiAgICogQHBhcmFtIHtPYmplY3R9IGNmZ1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuX2F1dG9Db25maWd1cmUgPSBmdW5jdGlvbiBfYXV0b0NvbmZpZ3VyZSAoY2ZnKSB7XG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIGNvbmZpZyA9IHJlZi5jb25maWc7XG5cbiAgICBpZiAodHlwZW9mIGNmZy5zeW5jVXJsc1dpdGhCYXNlVGFnID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLnN5bmNVcmxzV2l0aEJhc2VUYWcgPSB0eXBlb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjZmcubG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZy5sb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyID0gJ2FuZ3VsYXInIGluIHdpbmRvdztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNmZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCA9IGJyb3dzZXIuaXNGaXJlZm94KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQuZGV0YWlsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5kZXRhaWwub2xkVXJsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5kZXRhaWwubmV3VXJsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5faGFuZGxlTG9jYXRpb25DaGFuZ2UgPSBmdW5jdGlvbiBfaGFuZGxlTG9jYXRpb25DaGFuZ2UgKGV2ZW50KSB7XG4gICAgdmFyIHJlZiA9IGV2ZW50LmRldGFpbDtcbiAgICB2YXIgb2xkVXJsID0gcmVmLm9sZFVybDtcbiAgICB2YXIgbmV3VXJsID0gcmVmLm5ld1VybDtcbiAgICB0aGlzLnVwZGF0ZVVybHMob2xkVXJsLCBuZXdVcmwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHN5bWJvbC4gSWYgc3ltYm9sIHdpdGggdGhlIHNhbWUgaWQgZXhpc3RzIGl0IHdpbGwgYmUgcmVwbGFjZWQuXG4gICAqIElmIHNwcml0ZSBhbHJlYWR5IG1vdW50ZWQgLSBgc3ltYm9sLm1vdW50KHNwcml0ZS5ub2RlKWAgd2lsbCBiZSBjYWxsZWQuXG4gICAqIEBmaXJlcyBFdmVudHMjU1lNQk9MX01PVU5UXG4gICAqIEBwYXJhbSB7QnJvd3NlclNwcml0ZVN5bWJvbH0gc3ltYm9sXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgYWRkZWQsIGBmYWxzZWAgLSByZXBsYWNlZFxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChzeW1ib2wpIHtcbiAgICB2YXIgc3ByaXRlID0gdGhpcztcbiAgICB2YXIgaXNOZXdTeW1ib2wgPSBTcHJpdGUkJDEucHJvdG90eXBlLmFkZC5jYWxsKHRoaXMsIHN5bWJvbCk7XG5cbiAgICBpZiAodGhpcy5pc01vdW50ZWQgJiYgaXNOZXdTeW1ib2wpIHtcbiAgICAgIHN5bWJvbC5tb3VudChzcHJpdGUubm9kZSk7XG4gICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoRXZlbnRzLlNZTUJPTF9NT1VOVCwgc3ltYm9sLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBpc05ld1N5bWJvbDtcbiAgfTtcblxuICAvKipcbiAgICogQXR0YWNoIHRvIGV4aXN0aW5nIERPTSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfEVsZW1lbnR9IHRhcmdldFxuICAgKiBAcmV0dXJuIHtFbGVtZW50fG51bGx9IGF0dGFjaGVkIERPTSBFbGVtZW50LiBudWxsIGlmIG5vZGUgdG8gYXR0YWNoIG5vdCBmb3VuZC5cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIGF0dGFjaCAodGFyZ2V0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgc3ByaXRlID0gdGhpcztcblxuICAgIGlmIChzcHJpdGUuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gc3ByaXRlLm5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIEVsZW1lbnQgKi9cbiAgICB2YXIgbm9kZSA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0O1xuICAgIHNwcml0ZS5ub2RlID0gbm9kZTtcblxuICAgIC8vIEFscmVhZHkgYWRkZWQgc3ltYm9scyBuZWVkcyB0byBiZSBtb3VudGVkXG4gICAgdGhpcy5zeW1ib2xzLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgICAgc3ltYm9sLm1vdW50KHNwcml0ZS5ub2RlKTtcbiAgICAgIHRoaXMkMS5fZW1pdHRlci5lbWl0KEV2ZW50cy5TWU1CT0xfTU9VTlQsIHN5bWJvbC5ub2RlKTtcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBzeW1ib2xzIGZyb20gZXhpc3RpbmcgRE9NIG5vZGVzLCBhZGQgYW5kIG1vdW50IHRoZW1cbiAgICBhcnJheUZyb20obm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdzeW1ib2wnKSlcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChzeW1ib2xOb2RlKSB7XG4gICAgICAgIHZhciBzeW1ib2wgPSBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUoc3ltYm9sTm9kZSk7XG4gICAgICAgIHN5bWJvbC5ub2RlID0gc3ltYm9sTm9kZTsgLy8gaGFjayB0byBwcmV2ZW50IHN5bWJvbCBtb3VudGluZyB0byBzcHJpdGUgd2hlbiBhZGRpbmdcbiAgICAgICAgc3ByaXRlLmFkZChzeW1ib2wpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLl9lbWl0dGVyLmVtaXQoRXZlbnRzLk1PVU5ULCBub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgY29uZmlnID0gcmVmLmNvbmZpZztcbiAgICB2YXIgc3ltYm9scyA9IHJlZi5zeW1ib2xzO1xuICAgIHZhciBfZW1pdHRlciA9IHJlZi5fZW1pdHRlcjtcblxuICAgIHN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5kZXN0cm95KCk7IH0pO1xuXG4gICAgX2VtaXR0ZXIub2ZmKCcqJyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoY29uZmlnLmxvY2F0aW9uQ2hhbmdlRXZlbnQsIHRoaXMuX2hhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgdGhpcy51bm1vdW50KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAZmlyZXMgRXZlbnRzI01PVU5UXG4gICAqIEBwYXJhbSB7c3RyaW5nfEVsZW1lbnR9IFt0YXJnZXRdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXBlbmQ9ZmFsc2VdXG4gICAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH0gcmVuZGVyZWQgc3ByaXRlIG5vZGUuIG51bGwgaWYgbW91bnQgbm9kZSBub3QgZm91bmQuXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQsIHByZXBlbmQpIHtcbiAgICBpZiAoIHRhcmdldCA9PT0gdm9pZCAwICkgdGFyZ2V0ID0gdGhpcy5jb25maWcubW91bnRUbztcbiAgICBpZiAoIHByZXBlbmQgPT09IHZvaWQgMCApIHByZXBlbmQgPSBmYWxzZTtcblxuICAgIHZhciBzcHJpdGUgPSB0aGlzO1xuXG4gICAgaWYgKHNwcml0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBzcHJpdGUubm9kZTtcbiAgICB9XG5cbiAgICB2YXIgbW91bnROb2RlID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSBzcHJpdGUucmVuZGVyKCk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgIGlmIChwcmVwZW5kICYmIG1vdW50Tm9kZS5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICBtb3VudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG1vdW50Tm9kZS5jaGlsZE5vZGVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW91bnROb2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFdmVudHMuTU9VTlQsIG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHJldHVybiBwYXJzZSh0aGlzLnN0cmluZ2lmeSgpKTtcbiAgfTtcblxuICAvKipcbiAgICogRGV0YWNoIHNwcml0ZSBmcm9tIHRoZSBET01cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiB1bm1vdW50ICgpIHtcbiAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgVVJMcyBpbiBzcHJpdGUgYW5kIHVzYWdlIGVsZW1lbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRVcmxcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1VybFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBVUkxzIHdhcyB1cGRhdGVkLCBgZmFsc2VgIC0gc3ByaXRlIGlzIG5vdCBtb3VudGVkXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS51cGRhdGVVcmxzID0gZnVuY3Rpb24gdXBkYXRlVXJscyQxIChvbGRVcmwsIG5ld1VybCkge1xuICAgIGlmICghdGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdXNhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbmZpZy51c2FnZXNUb1VwZGF0ZSk7XG5cbiAgICB1cGRhdGVVcmxzKFxuICAgICAgdGhpcy5ub2RlLFxuICAgICAgdXNhZ2VzLFxuICAgICAgKChnZXRVcmxXaXRob3V0RnJhZ21lbnQob2xkVXJsKSkgKyBcIiNcIiksXG4gICAgICAoKGdldFVybFdpdGhvdXRGcmFnbWVudChuZXdVcmwpKSArIFwiI1wiKVxuICAgICk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlO1xufShTcHJpdGUpKTtcblxudmFyIHJlYWR5JDEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4vKiFcbiAgKiBkb21yZWFkeSAoYykgRHVzdGluIERpYXogMjAxNCAtIExpY2Vuc2UgTUlUXG4gICovXG4hZnVuY3Rpb24gKG5hbWUsIGRlZmluaXRpb24pIHtcblxuICB7IG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpOyB9XG5cbn0oJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xuXG4gIHZhciBmbnMgPSBbXSwgbGlzdGVuZXJcbiAgICAsIGRvYyA9IGRvY3VtZW50XG4gICAgLCBoYWNrID0gZG9jLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbFxuICAgICwgZG9tQ29udGVudExvYWRlZCA9ICdET01Db250ZW50TG9hZGVkJ1xuICAgICwgbG9hZGVkID0gKGhhY2sgPyAvXmxvYWRlZHxeYy8gOiAvXmxvYWRlZHxeaXxeYy8pLnRlc3QoZG9jLnJlYWR5U3RhdGUpO1xuXG5cbiAgaWYgKCFsb2FkZWQpXG4gIHsgZG9jLmFkZEV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIpO1xuICAgIGxvYWRlZCA9IDE7XG4gICAgd2hpbGUgKGxpc3RlbmVyID0gZm5zLnNoaWZ0KCkpIHsgbGlzdGVuZXIoKTsgfVxuICB9KTsgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICBsb2FkZWQgPyBzZXRUaW1lb3V0KGZuLCAwKSA6IGZucy5wdXNoKGZuKTtcbiAgfVxuXG59KTtcbn0pO1xuXG52YXIgc3ByaXRlTm9kZUlkID0gJ19fU1ZHX1NQUklURV9OT0RFX18nO1xudmFyIHNwcml0ZUdsb2JhbFZhck5hbWUgPSAnX19TVkdfU1BSSVRFX18nO1xudmFyIGlzU3ByaXRlRXhpc3RzID0gISF3aW5kb3dbc3ByaXRlR2xvYmFsVmFyTmFtZV07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG52YXIgc3ByaXRlO1xuXG5pZiAoaXNTcHJpdGVFeGlzdHMpIHtcbiAgc3ByaXRlID0gd2luZG93W3Nwcml0ZUdsb2JhbFZhck5hbWVdO1xufSBlbHNlIHtcbiAgc3ByaXRlID0gbmV3IEJyb3dzZXJTcHJpdGUoeyBhdHRyczogeyBpZDogc3ByaXRlTm9kZUlkIH0gfSk7XG4gIHdpbmRvd1tzcHJpdGVHbG9iYWxWYXJOYW1lXSA9IHNwcml0ZTtcbn1cblxudmFyIGxvYWRTcHJpdGUgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBDaGVjayBmb3IgcGFnZSBhbHJlYWR5IGNvbnRhaW5zIHNwcml0ZSBub2RlXG4gICAqIElmIGZvdW5kIC0gYXR0YWNoIHRvIGFuZCByZXVzZSBpdCdzIGNvbnRlbnRcbiAgICogSWYgbm90IC0gcmVuZGVyIGFuZCBtb3VudCB0aGUgbmV3IHNwcml0ZVxuICAgKi9cbiAgdmFyIGV4aXN0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3ByaXRlTm9kZUlkKTtcblxuICBpZiAoZXhpc3RpbmcpIHtcbiAgICBzcHJpdGUuYXR0YWNoKGV4aXN0aW5nKTtcbiAgfSBlbHNlIHtcbiAgICBzcHJpdGUubW91bnQoZG9jdW1lbnQuYm9keSwgdHJ1ZSk7XG4gIH1cbn07XG5cbmlmIChkb2N1bWVudC5ib2R5KSB7XG4gIGxvYWRTcHJpdGUoKTtcbn0gZWxzZSB7XG4gIHJlYWR5JDEobG9hZFNwcml0ZSk7XG59XG5cbnZhciBzcHJpdGUkMSA9IHNwcml0ZTtcblxucmV0dXJuIHNwcml0ZSQxO1xuXG59KSkpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==