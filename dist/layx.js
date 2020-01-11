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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/asset/style/animate.css":
/*!*****************************************!*\
  !*** ./src/app/asset/style/animate.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/asset/style/common.css":
/*!****************************************!*\
  !*** ./src/app/asset/style/common.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/asset/style/index.ts":
/*!**************************************!*\
  !*** ./src/app/asset/style/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./common.css */ "./src/app/asset/style/common.css");
__webpack_require__(/*! ./animate.css */ "./src/app/asset/style/animate.css");
__webpack_require__(/*! ./window.css */ "./src/app/asset/style/window.css");
__webpack_require__(/*! ./tool-bar.css */ "./src/app/asset/style/tool-bar.css");


/***/ }),

/***/ "./src/app/asset/style/tool-bar.css":
/*!******************************************!*\
  !*** ./src/app/asset/style/tool-bar.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/asset/style/window.css":
/*!****************************************!*\
  !*** ./src/app/asset/style/window.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/component/index.ts":
/*!************************************!*\
  !*** ./src/app/component/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_bus_1 = __webpack_require__(/*! ../core/event-bus */ "./src/app/core/event-bus/index.ts");
var entry_1 = __webpack_require__(/*! ../entry */ "./src/app/entry/index.ts");
var Component = (function () {
    function Component() {
        this.entry = entry_1.default.getInstance();
        this.eventBus = event_bus_1.default.getInstance();
        this.symbol = Symbol("monksoul");
    }
    Component.prototype.sendEvent = function (eventName, message) {
        if (message === void 0) { message = {}; }
        this.eventBus.emit(eventName, {
            dataset: message,
            eventTarget: {
                name: eventName,
                timestamp: new Date().valueOf()
            }
        });
    };
    return Component;
}());
exports.default = Component;


/***/ }),

/***/ "./src/app/component/ui-tool-bar/index.ts":
/*!************************************************!*\
  !*** ./src/app/component/ui-tool-bar/index.ts ***!
  \************************************************/
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
var __1 = __webpack_require__(/*! ../ */ "./src/app/component/index.ts");
var property_decorator_1 = __webpack_require__(/*! ../../core/decorator/property-decorator */ "./src/app/core/decorator/property-decorator.ts");
var element_helper_1 = __webpack_require__(/*! ../../core/helper/element-helper */ "./src/app/core/helper/element-helper.ts");
var validator_1 = __webpack_require__(/*! ../../core/validator */ "./src/app/core/validator/index.ts");
var partial_1 = __webpack_require__(/*! ./partial */ "./src/app/component/ui-tool-bar/partial.ts");
var UIToolBar = (function (_super) {
    __extends(UIToolBar, _super);
    function UIToolBar(options) {
        var _a, _b, _c;
        var _this = _super.call(this) || this;
        _this.handlerOptions = partial_1.handlerOptions;
        _this.titleBar = _this.entry.window.toolBar === false ? false : (_a = _this.entry.window.toolBar) === null || _a === void 0 ? void 0 : _a.titleBar;
        _this.height = _this.entry.window.toolBar === false ? 0 : (_b = _this.entry.window.toolBar) === null || _b === void 0 ? void 0 : _b.height;
        _this.backgroundColor = _this.entry.window.toolBar === false ? "rgba(0,0,0,0)" : (_c = _this.entry.window.toolBar) === null || _c === void 0 ? void 0 : _c.backgroundColor;
        _this.handlerOptions(options);
        return _this;
    }
    UIToolBar.prototype.present = function () {
        var element = element_helper_1.createDivElement();
        element_helper_1.addCSSClasses(element, "tool-bar", "flex-box", "vertical-middle");
        element_helper_1.addCSSStyles(element, {
            height: this.height + "px",
        });
        if (this.titleBar !== false) {
            var titleBarElement = element_helper_1.createDivElement();
            element_helper_1.addCSSClasses(titleBarElement, "title-bar", "flex-item");
            element_helper_1.addCSSStyles(titleBarElement, {
                color: "" + this.titleBar.color,
                textAlign: "" + this.titleBar.align,
                fontSize: this.titleBar.fontSize + "px"
            });
            titleBarElement.textContent = this.titleBar.label;
            element.appendChild(titleBarElement);
        }
        return element;
    };
    __decorate([
        property_decorator_1.combine({
            label: validator_1.checkString,
            color: validator_1.checkColor,
            align: ["left", "center", "right"],
            fontSize: validator_1.checkPstInt
        }, false)
    ], UIToolBar.prototype, "titleBar", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIToolBar.prototype, "height", void 0);
    __decorate([
        property_decorator_1.isColor()
    ], UIToolBar.prototype, "backgroundColor", void 0);
    return UIToolBar;
}(__1.default));
exports.default = UIToolBar;


/***/ }),

/***/ "./src/app/component/ui-tool-bar/partial.ts":
/*!**************************************************!*\
  !*** ./src/app/component/ui-tool-bar/partial.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function handlerOptions(options) {
    var _a, _b, _c, _d, _e, _f;
    this.height = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.height, (_b !== null && _b !== void 0 ? _b : this.height));
    this.backgroundColor = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.backgroundColor, (_d !== null && _d !== void 0 ? _d : this.backgroundColor));
    this.titleBar = (_f = (_e = options) === null || _e === void 0 ? void 0 : _e.titleBar, (_f !== null && _f !== void 0 ? _f : this.titleBar));
}
exports.handlerOptions = handlerOptions;


/***/ }),

/***/ "./src/app/component/ui-window/const.ts":
/*!**********************************************!*\
  !*** ./src/app/component/ui-window/const.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BorderStyle;
(function (BorderStyle) {
    BorderStyle["DOTTED"] = "dotted";
    BorderStyle["DASHED"] = "dashed";
    BorderStyle["SOLID"] = "solid";
    BorderStyle["DOUBLE"] = "double";
})(BorderStyle = exports.BorderStyle || (exports.BorderStyle = {}));
var Animation;
(function (Animation) {
    Animation["ZOOM"] = "zoom";
})(Animation = exports.Animation || (exports.Animation = {}));
var Offset;
(function (Offset) {
    Offset["CENTER"] = "center";
    Offset["TOP_CENTER"] = "top-center";
    Offset["BOTTOM_CENTER"] = "bottom-center";
    Offset["LEFT_TOP"] = "left-top";
    Offset["LEFT_MIDDLE"] = "left-middle";
    Offset["LEFT_BOTTOM"] = "left-bottom";
    Offset["RIGHT_TOP"] = "right-top";
    Offset["RIGHT_MIDDLE"] = "right-middle";
    Offset["RIGHT_BOTTOM"] = "right-bottom";
})(Offset = exports.Offset || (exports.Offset = {}));
exports.DEFAULT_MIN_WIDTH = 200;
exports.DEFAULT_MIN_HEIGHT = 200;
exports.DEFAULT_MAX_WIDTH = innerWidth;
exports.DEFAULT_MAX_HEIGHT = innerHeight;
exports.DEFAULT_BORDER_WIDTH = 1;
exports.DEFAULT_BORDER_STYLE = "solid";
exports.DEFAULT_BORDER_COLOR = "#3baced";
exports.DEFAULT_BORDER_RADIUS = 4;


/***/ }),

/***/ "./src/app/component/ui-window/index.ts":
/*!**********************************************!*\
  !*** ./src/app/component/ui-window/index.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! ../ */ "./src/app/component/index.ts");
var property_decorator_1 = __webpack_require__(/*! ../../core/decorator/property-decorator */ "./src/app/core/decorator/property-decorator.ts");
var element_helper_1 = __webpack_require__(/*! ../../core/helper/element-helper */ "./src/app/core/helper/element-helper.ts");
var validator_1 = __webpack_require__(/*! ../../core/validator */ "./src/app/core/validator/index.ts");
var const_1 = __webpack_require__(/*! ./const */ "./src/app/component/ui-window/const.ts");
var partial_1 = __webpack_require__(/*! ./partial */ "./src/app/component/ui-window/partial.ts");
var ui_tool_bar_1 = __webpack_require__(/*! ../ui-tool-bar */ "./src/app/component/ui-tool-bar/index.ts");
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(options) {
        var _a;
        var _this = _super.call(this) || this;
        _this.handlerOptions = partial_1.handlerOptions;
        _this.width = _this.entry.window.width;
        _this.height = _this.entry.window.height;
        _this.minWidth = const_1.DEFAULT_MIN_WIDTH;
        _this.minHeight = const_1.DEFAULT_MIN_HEIGHT;
        _this.maxWidth = const_1.DEFAULT_MAX_WIDTH;
        _this.maxHeight = const_1.DEFAULT_MAX_HEIGHT;
        _this.left = (const_1.DEFAULT_MAX_WIDTH - _this.width) / 2;
        _this.top = (const_1.DEFAULT_MAX_HEIGHT - _this.height) / 2;
        _this.border = {
            width: const_1.DEFAULT_BORDER_WIDTH,
            style: const_1.DEFAULT_BORDER_STYLE,
            color: const_1.DEFAULT_BORDER_COLOR,
            radius: const_1.DEFAULT_BORDER_RADIUS
        };
        _this.boxShadow = true;
        _this.animate = "zoom";
        _this.backgroundColor = _this.entry.window.backgroundColor;
        _this.toolBar = _this.entry.window.toolBar;
        _this.windowElement = null;
        _this.id = (_a = options) === null || _a === void 0 ? void 0 : _a.id;
        _this.handlerOptions(options);
        return _this;
    }
    UIWindow.prototype.present = function () {
        var element = element_helper_1.createDivElement("" + (this.entry.prefix + this.id));
        this.windowElement = element;
        element_helper_1.addCSSClasses(element, "window", "flex-box", "col-direction", this.boxShadow ? "box-shadow" : undefined, this.animate !== false ? "animate" : undefined, this.animate !== false ? "animate-" + this.animate + "-show" : undefined);
        element_helper_1.addCSSStyles(element, {
            backgroundColor: "" + this.backgroundColor,
            zIndex: "" + this.entry.zIndex,
            width: this.width + "px",
            height: this.height + "px",
            maxWidth: this.maxWidth !== innerWidth ? this.maxWidth + "px" : null,
            maxHeight: this.maxHeight !== innerHeight ? this.maxHeight + "px" : null,
            minWidth: this.minWidth + "px",
            minHeight: this.minHeight + "px",
            left: this.left + "px",
            top: this.top + "px",
            border: this.border === false ? null :
                this.border.width + "px " + this.border.style + " " + this.border.color,
            borderRadius: this.border === false ? null :
                this.border.radius + "px",
            webkitBorderRadius: this.border === false ? null :
                this.border.radius + "px",
        });
        if (this.toolBar !== false) {
            var uiToolBar = new ui_tool_bar_1.default(this.toolBar);
            var uiToolBarElement = uiToolBar.present();
            element.appendChild(uiToolBarElement);
        }
        this.monitorEvent();
        this.sendEvent("window:create", { id: this.id });
        return element;
    };
    UIWindow.prototype.monitorEvent = function () {
        var _this = this;
        if (!this.windowElement)
            return;
        if (this.animate !== false) {
            this.windowElement.addEventListener("animationend", function (ev) {
                var animateShowName = "animate-" + _this.animate + "-show";
                if (element_helper_1.hasCSSClass(_this.windowElement, animateShowName)) {
                    element_helper_1.removeCSSClasses(_this.windowElement, animateShowName);
                    _this.sendEvent("window:show", { id: _this.id });
                }
            });
        }
    };
    __decorate([
        property_decorator_1.isNoEmptyOrNull()
    ], UIWindow.prototype, "id", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "width", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "height", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "minWidth", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "minHeight", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "maxWidth", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "maxHeight", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "left", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "top", void 0);
    __decorate([
        property_decorator_1.combine({
            width: validator_1.checkPstInt,
            style: ["solid", "double", "dotted", "dashed"],
            color: validator_1.checkColor,
            radius: validator_1.checkPstInt
        }, false)
    ], UIWindow.prototype, "border", void 0);
    __decorate([
        property_decorator_1.isBoolean()
    ], UIWindow.prototype, "boxShadow", void 0);
    __decorate([
        property_decorator_1.inValueOptions("zoom", false)
    ], UIWindow.prototype, "animate", void 0);
    __decorate([
        property_decorator_1.isColor()
    ], UIWindow.prototype, "backgroundColor", void 0);
    __decorate([
        property_decorator_1.combine({
            height: validator_1.checkPstNumber,
            backgroundColor: validator_1.checkColor,
            titleBar: {
                decorator: {
                    label: validator_1.checkString,
                    color: validator_1.checkColor,
                    align: ["left", "center", "right"],
                    fontSize: validator_1.checkPstInt
                },
                options: [false]
            }
        }, false)
    ], UIWindow.prototype, "toolBar", void 0);
    return UIWindow;
}(__1.default));
exports.default = UIWindow;


/***/ }),

/***/ "./src/app/component/ui-window/partial.ts":
/*!************************************************!*\
  !*** ./src/app/component/ui-window/partial.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../../core/exception */ "./src/app/core/exception/index.ts");
var validator_1 = __webpack_require__(/*! ../../core/validator */ "./src/app/core/validator/index.ts");
function handlerOptions(options) {
    var _a;
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    this.width = (_c = (_b = options) === null || _b === void 0 ? void 0 : _b.width, (_c !== null && _c !== void 0 ? _c : this.width));
    this.height = (_e = (_d = options) === null || _d === void 0 ? void 0 : _d.height, (_e !== null && _e !== void 0 ? _e : this.height));
    this.maxWidth = (_g = (_f = options) === null || _f === void 0 ? void 0 : _f.maxWidth, (_g !== null && _g !== void 0 ? _g : this.maxWidth));
    this.maxHeight = (_j = (_h = options) === null || _h === void 0 ? void 0 : _h.maxHeight, (_j !== null && _j !== void 0 ? _j : this.maxHeight));
    this.minWidth = (_l = (_k = options) === null || _k === void 0 ? void 0 : _k.minWidth, (_l !== null && _l !== void 0 ? _l : this.minWidth));
    this.minHeight = (_o = (_m = options) === null || _m === void 0 ? void 0 : _m.minHeight, (_o !== null && _o !== void 0 ? _o : this.minHeight));
    this.width = Math.max(this.minWidth, this.width);
    this.width = Math.min(this.maxWidth, this.width);
    this.height = Math.max(this.minHeight, this.height);
    this.height = Math.min(this.maxHeight, this.height);
    this.border = (_q = (_p = options) === null || _p === void 0 ? void 0 : _p.border, (_q !== null && _q !== void 0 ? _q : this.border));
    this.boxShadow = (_s = (_r = options) === null || _r === void 0 ? void 0 : _r.boxShadow, (_s !== null && _s !== void 0 ? _s : this.boxShadow));
    this.animate = (_u = (_t = options) === null || _t === void 0 ? void 0 : _t.animate, (_u !== null && _u !== void 0 ? _u : this.animate));
    _a = calcOffset(this.width, this.height, (_v = options) === null || _v === void 0 ? void 0 : _v.offset), this.left = _a[0], this.top = _a[1];
    this.backgroundColor = (_x = (_w = options) === null || _w === void 0 ? void 0 : _w.backgroundColor, (_x !== null && _x !== void 0 ? _x : this.backgroundColor));
    this.toolBar = (_z = (_y = options) === null || _y === void 0 ? void 0 : _y.toolBar, (_z !== null && _z !== void 0 ? _z : this.toolBar));
}
exports.handlerOptions = handlerOptions;
function calcOffset(width, height, offset) {
    if (offset === undefined)
        return [(innerWidth - width) / 2, (innerHeight - height) / 2];
    if (validator_1.checkArray(offset)) {
        if (offset.length !== 2 ||
            !validator_1.checkOfType(offset[0], "number") ||
            !validator_1.checkOfType(offset[1], "number"))
            exception_1.validateFail("\"" + [offset] + "\" \u4E0D\u662F\u6709\u6548\u7684 \"[number,number]\" \u7C7B\u578B");
        return [offset[0], offset[1]];
    }
    var croods = [0, 0];
    var offsetOptions = [
        "center",
        "top-center",
        "bottom-center",
        "left-top",
        "left-middle",
        "left-bottom",
        "right-top",
        "right-middle",
        "right-bottom"
    ];
    if (validator_1.checkInValueOptions.apply(void 0, __spreadArrays([offset], offsetOptions))) {
        switch (offset) {
            case "center":
                croods = [(innerWidth - width) / 2, (innerHeight - height) / 2];
                break;
            case "top-center":
                croods = [(innerWidth - width) / 2, 0];
                break;
            case "bottom-center":
                croods = [(innerWidth - width) / 2, innerHeight - height];
                break;
            case "left-top":
                croods = [0, 0];
                break;
            case "left-middle":
                croods = [0, (innerHeight - height) / 2];
                break;
            case "left-bottom":
                croods = [0, innerHeight - height];
                break;
            case "right-top":
                croods = [innerWidth - width, 0];
                break;
            case "right-middle":
                croods = [innerWidth - width, (innerHeight - height) / 2];
                break;
            case "right-bottom":
                croods = [innerWidth - width, innerHeight - height];
                break;
        }
        return croods;
    }
    exception_1.validateFail("\"" + offset + "\" \u4E0D\u662F\u6709\u6548\u7684 \"[number,number] \u6216 [" + offsetOptions + "]\" \u7C7B\u578B");
}


/***/ }),

/***/ "./src/app/core/decorator/property-decorator.ts":
/*!******************************************************!*\
  !*** ./src/app/core/decorator/property-decorator.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../exception */ "./src/app/core/exception/index.ts");
var object_helper_1 = __webpack_require__(/*! ../helper/object-helper */ "./src/app/core/helper/object-helper.ts");
var validator_1 = __webpack_require__(/*! ../validator */ "./src/app/core/validator/index.ts");
function isPstNumber() {
    return generateDecorator(function (newValue) {
        if (!validator_1.checkPstNumber(newValue))
            exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u6B63\u6570\u503C\u7C7B\u578B");
        return newValue;
    });
}
exports.isPstNumber = isPstNumber;
function inValueOptions() {
    var valueOptions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        valueOptions[_i] = arguments[_i];
    }
    return generateDecorator(function (newValue) {
        if (!validator_1.checkInValueOptions.apply(void 0, __spreadArrays([newValue], valueOptions)))
            exception_1.validateFail("\"" + newValue + "\" \u4E0D\u5728 [" + valueOptions.toString() + "] \u503C\u8303\u56F4\u5185");
        return newValue;
    });
}
exports.inValueOptions = inValueOptions;
function isNoEmptyOrNull() {
    return generateDecorator(function (newValue) {
        if (!validator_1.checkNoEmptyOrNull(newValue))
            exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u975E\u7A7A\u5B57\u7B26\u4E32");
        return newValue;
    });
}
exports.isNoEmptyOrNull = isNoEmptyOrNull;
function isBoolean() {
    return generateDecorator(function (newValue) {
        if (!validator_1.checkOfType(newValue, "boolean"))
            exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u5E03\u5C14\u503C");
        return newValue;
    });
}
exports.isBoolean = isBoolean;
function isString() {
    return generateDecorator(function (newValue) {
        if (!validator_1.checkString(newValue))
            exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u5B57\u7B26\u4E32");
        return newValue;
    });
}
exports.isString = isString;
function isColor() {
    return generateDecorator(function (newValue) {
        if (!validator_1.checkColor(newValue))
            exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684CSS\u989C\u8272\u503C");
        return newValue;
    });
}
exports.isColor = isColor;
function isPstInt() {
    return generateDecorator(function (newValue) {
        if (!validator_1.checkPstInt(newValue))
            exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u6B63\u6574\u6570");
        return newValue;
    });
}
exports.isPstInt = isPstInt;
function min(threshold) {
    return generateDecorator(function (newValue) {
        if (!validator_1.checkMin(newValue, threshold))
            exception_1.validateFail("\"" + newValue + "\" \u5FC5\u987B\u662F\u6570\u503C\u7C7B\u578B\u5E76\u4E14\u503C\u4E0D\u80FD\u5C0F\u4E8E \"" + threshold + "\"");
        return newValue;
    });
}
exports.min = min;
function combine(jsonDecorator) {
    if (jsonDecorator === void 0) { jsonDecorator = {}; }
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    return generateDecorator(function (newValue, propertyKey, value) {
        newValue = checkCombine.apply(void 0, __spreadArrays([newValue, jsonDecorator], items));
        if (validator_1.checkJSONObject(newValue)) {
            newValue = object_helper_1.mergeJSONObject((value !== null && value !== void 0 ? value : {}), newValue);
        }
        return newValue;
    });
}
exports.combine = combine;
function checkCombine(newValue, jsonDecorator) {
    if (jsonDecorator === void 0) { jsonDecorator = {}; }
    var items = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        items[_i - 2] = arguments[_i];
    }
    var _a, _b, _c, _d;
    if (!validator_1.checkJSONObject(newValue) && (items.length > 0 && items.indexOf(newValue) === -1))
        exception_1.validateFail("\"" + newValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u53C2\u6570\u503C");
    if (items.indexOf(newValue) > -1)
        return newValue;
    for (var key in newValue) {
        var keyValue = newValue[key];
        var decorator = jsonDecorator[key];
        if (!decorator)
            continue;
        if (validator_1.checkArray(decorator) && decorator.indexOf(keyValue) === -1) {
            exception_1.validateFail("\"" + keyValue + "\" \u4E0D\u5728 [" + decorator.toString() + "] \u503C\u8303\u56F4\u5185");
            break;
        }
        if (validator_1.checkOfType(decorator, "function") && !decorator(keyValue)) {
            exception_1.validateFail("\"" + keyValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u53C2\u6570\u503C");
            break;
        }
        if (validator_1.checkRegExp(decorator) && !decorator.test(keyValue)) {
            exception_1.validateFail("\"" + keyValue + "\" \u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684\u53C2\u6570\u503C");
            break;
        }
        if (validator_1.checkJSONObject(decorator)) {
            var childDecorator = (_b = (_a = decorator) === null || _a === void 0 ? void 0 : _a.decorator, (_b !== null && _b !== void 0 ? _b : {}));
            var childItems = (_d = (_c = decorator) === null || _c === void 0 ? void 0 : _c.options, (_d !== null && _d !== void 0 ? _d : []));
            keyValue = checkCombine.apply(void 0, __spreadArrays([keyValue, childDecorator], childItems));
        }
    }
    return newValue;
}
function generateDecorator(propertySetter) {
    return function (target, propertyKey) {
        var value = target[propertyKey];
        var descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function () { return value; },
            set: function (newValue) {
                if (descriptor && descriptor.set) {
                    descriptor.set(newValue);
                }
                value = propertySetter(newValue, propertyKey, value);
            }
        });
    };
}


/***/ }),

/***/ "./src/app/core/event-bus/index.ts":
/*!*****************************************!*\
  !*** ./src/app/core/event-bus/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __webpack_require__(/*! ../validator */ "./src/app/core/validator/index.ts");
var EventBus = (function () {
    function EventBus() {
        this.messageQueues = {};
    }
    EventBus.prototype.on = function (eventKey, eventHandler) {
        if (this.messageQueues.hasOwnProperty(eventKey)) {
            var eventValue = this.messageQueues[eventKey];
            if (validator_1.checkOfType(eventValue, "function")) {
                this.messageQueues[eventKey] = [eventValue, eventHandler];
            }
            else if (validator_1.checkArray(eventValue)) {
                this.messageQueues[eventKey] = __spreadArrays(eventValue, [eventHandler]);
            }
        }
        else {
            this.messageQueues[eventKey] = eventHandler;
        }
    };
    EventBus.prototype.one = function (eventKey, eventHandler) {
        this.messageQueues[eventKey] = eventHandler;
    };
    EventBus.prototype.emit = function (eventKey, message) {
        if (!this.messageQueues.hasOwnProperty(eventKey))
            return;
        var eventValue = this.messageQueues[eventKey];
        if (validator_1.checkOfType(eventValue, "function")) {
            setTimeout(function () {
                eventValue(message);
            }, 0);
        }
        else if (validator_1.checkArray(eventValue)) {
            eventValue.map(function (handler) {
                setTimeout(function () {
                    handler(message);
                }, 0);
            });
        }
    };
    EventBus.prototype.off = function (eventKey) {
        if (!this.messageQueues.hasOwnProperty(eventKey))
            return;
        delete this.messageQueues[eventKey];
    };
    EventBus.getInstance = function () {
        if (!this.instance) {
            this.instance = new EventBus();
        }
        return this.instance;
    };
    return EventBus;
}());
exports.default = EventBus;


/***/ }),

/***/ "./src/app/core/exception/index.ts":
/*!*****************************************!*\
  !*** ./src/app/core/exception/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function appError(message) {
    throw new Error("\n\u7C7B\u578B\uFF1A\u7A0B\u5E8F\u5F02\u5E38\n\u5F02\u5E38\u4FE1\u606F\uFF1A" + message + "\n\u5806\u6808\u4FE1\u606F\uFF1A");
}
exports.appError = appError;
function validateFail(message) {
    throw new Error("\n\u7C7B\u578B\uFF1A\u9A8C\u8BC1\u9519\u8BEF\n\u9519\u8BEF\u4FE1\u606F\uFF1A" + message + "\n\u5806\u6808\u4FE1\u606F\uFF1A");
}
exports.validateFail = validateFail;


/***/ }),

/***/ "./src/app/core/helper/element-helper.ts":
/*!***********************************************!*\
  !*** ./src/app/core/helper/element-helper.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ../../entry/const */ "./src/app/entry/const.ts");
var validator_1 = __webpack_require__(/*! ../validator */ "./src/app/core/validator/index.ts");
function addCSSStyles(element, cssStyles) {
    var _a;
    if (!element)
        return;
    for (var cssProp in cssStyles) {
        element.style[cssProp] = (_a = cssStyles[cssProp], (_a !== null && _a !== void 0 ? _a : null));
    }
}
exports.addCSSStyles = addCSSStyles;
function addCSSClasses(element) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    if (!element)
        return null;
    return updateCSSClasses.apply(void 0, __spreadArrays([element, function (currentClasses, index, itemClass) {
            if (!~index) {
                currentClasses.push(itemClass);
            }
        }, const_1.PREFIX], classes));
}
exports.addCSSClasses = addCSSClasses;
function removeCSSClasses(element) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    if (!element)
        return null;
    return updateCSSClasses.apply(void 0, __spreadArrays([element, function (currentClasses, index) {
            if (~index) {
                currentClasses.splice(index, 1);
            }
        }, const_1.PREFIX], classes));
}
exports.removeCSSClasses = removeCSSClasses;
function hasCSSClass(element, className) {
    if (!element)
        return false;
    var currentClasses = element.className.split(/\s+/g);
    var cls = className.indexOf("!") === 0 ? className.substr(1) : const_1.PREFIX + className;
    var index = currentClasses.indexOf(cls);
    return !!~index;
}
exports.hasCSSClass = hasCSSClass;
function updateCSSClasses(element, handler, prefix) {
    if (prefix === void 0) { prefix = const_1.PREFIX; }
    var classes = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        classes[_i - 3] = arguments[_i];
    }
    if (!element)
        return null;
    var currentClasses = element.className.split(/\s+/g);
    classes.forEach(function (item) {
        if (item) {
            var cls = item.indexOf("!") === 0 ? item.substr(1) : prefix + item;
            var index = currentClasses.indexOf(cls);
            handler(currentClasses, index, cls);
        }
    });
    element.className = currentClasses.join(" ").trim();
    return element;
}
function createDivElement(id) {
    var element = document.createElement("div");
    if (validator_1.checkOfType(id, "string")) {
        element.id = id;
    }
    return element;
}
exports.createDivElement = createDivElement;


/***/ }),

/***/ "./src/app/core/helper/object-helper.ts":
/*!**********************************************!*\
  !*** ./src/app/core/helper/object-helper.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __webpack_require__(/*! ../validator */ "./src/app/core/validator/index.ts");
function cloneJSONObject(source) {
    var newObject = {};
    for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        newObject[key] = validator_1.checkJSONObject(source[key]) ? cloneJSONObject(source[key]) : source[key];
    }
    return newObject;
}
exports.cloneJSONObject = cloneJSONObject;
function mergeJSONObject(source, dest) {
    var newObject = cloneJSONObject(source);
    for (var _i = 0, _a = Object.keys(dest); _i < _a.length; _i++) {
        var key = _a[_i];
        if (newObject[key] === undefined || !validator_1.checkJSONObject(dest[key])) {
            newObject[key] = dest[key];
            continue;
        }
        newObject[key] = mergeJSONObject(newObject[key], dest[key]);
    }
    return newObject;
}
exports.mergeJSONObject = mergeJSONObject;


/***/ }),

/***/ "./src/app/core/validator/index.ts":
/*!*****************************************!*\
  !*** ./src/app/core/validator/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function checkOfType(data) {
    var typeNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        typeNames[_i - 1] = arguments[_i];
    }
    return typeNames.indexOf(typeof data) > -1;
}
exports.checkOfType = checkOfType;
function checkString(data) {
    return checkOfType(data, "string");
}
exports.checkString = checkString;
function checkInt(data) {
    return checkOfType(data, "number") && (/^\-?[0-9]+$/.test(data));
}
exports.checkInt = checkInt;
function checkPstInt(data) {
    return checkInt(data) && data >= 0;
}
exports.checkPstInt = checkPstInt;
function checkPstNumber(data) {
    return checkOfType(data, "number") && data >= 0;
}
exports.checkPstNumber = checkPstNumber;
function checkJSONObject(data) {
    return checkOfType(data, "object") &&
        Object.prototype.toString.call(data).toLowerCase() === "[object object]" &&
        !checkArray(data);
}
exports.checkJSONObject = checkJSONObject;
function checkArray(data) {
    return Array.isArray(data);
}
exports.checkArray = checkArray;
function checkArrayEachSame(data, checkItem) {
    if (!Array.isArray(data))
        return false;
    if (data.length === 0)
        return true;
    var isSameArray = true;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        if (!checkItem(item)) {
            isSameArray = false;
            break;
        }
    }
    return isSameArray;
}
exports.checkArrayEachSame = checkArrayEachSame;
function checkContains(data, character) {
    return checkOfType(data, "string") && data.indexOf(character) > -1;
}
exports.checkContains = checkContains;
function checkInValueOptions(data) {
    var valueOptions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        valueOptions[_i - 1] = arguments[_i];
    }
    return checkOfType(data, "boolean", "number", "string", "undefined", "object") && valueOptions.indexOf(data) > -1;
}
exports.checkInValueOptions = checkInValueOptions;
function checkMinLength(data, threshold) {
    return checkOfType(data, "string") && data.length >= threshold;
}
exports.checkMinLength = checkMinLength;
function checkMaxLength(data, threshold) {
    return checkOfType(data, "string") && data.length <= threshold;
}
exports.checkMaxLength = checkMaxLength;
function checkLength(data, minThreshold, maxThreshold) {
    return checkMinLength(data, minThreshold) && checkMaxLength(data, maxThreshold);
}
exports.checkLength = checkLength;
function checkMin(data, threshold) {
    return checkOfType(data, "number") && data >= threshold;
}
exports.checkMin = checkMin;
function checkMax(data, threshold) {
    return checkOfType(data, "number") && data <= threshold;
}
exports.checkMax = checkMax;
function checkRange(data, minThreshold, maxThreshold) {
    return checkMin(data, minThreshold) && checkMax(data, maxThreshold);
}
exports.checkRange = checkRange;
function checkEmptyOrNull(data) {
    return data === null || (checkOfType(data, "string") && data.length === 0);
}
exports.checkEmptyOrNull = checkEmptyOrNull;
function checkNoEmptyOrNull(data) {
    return checkOfType(data, "string") && data.length > 0;
}
exports.checkNoEmptyOrNull = checkNoEmptyOrNull;
function checkRegExp(data) {
    return data instanceof RegExp;
}
exports.checkRegExp = checkRegExp;
function checkColor(data) {
    var binaryReg = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;
    var rgbRex = /^rgb\(([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\)$/i;
    var rgbaRex = /^rgba\(([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,([0-9]|[0-9][0-9]|25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9])\,(1|1.0|0.[0-9])\)$/i;
    return binaryReg.test(data) || rgbRex.test(data) || rgbaRex.test(data);
}
exports.checkColor = checkColor;


/***/ }),

/***/ "./src/app/entry/const.ts":
/*!********************************!*\
  !*** ./src/app/entry/const.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = "3.0.0";
exports.PREFIX = "layx-";
exports.START_ZINDEX = 10000000;
exports.DEFAULT_WINDOW_WIDTH = 800;
exports.DEFAULT_WINDOW_HEIGHT = 600;
exports.DEFAULT_WINDOW_BACKGROUND_COLOR = "#ffffff";
exports.DEFAULT_TOOLBAR_BACKGROUND_COLOR = "#ffffff";
exports.DEFAULT_TOOLBAR_HEIGHT = 30;
exports.DEFAULT_TITLEBAR_LABEL = "未命名";
exports.DEFAULT_TITLEBAR_COLOR = "#000000";
exports.DEFAULT_TITLEBAR_ALIGN = "left";
exports.DEFAULT_TITLEBAR_FONTSIZE = 14;
var SupportLanguage;
(function (SupportLanguage) {
    SupportLanguage["ZH_CN"] = "ZH_CN";
    SupportLanguage["EN_US"] = "EN_US";
})(SupportLanguage = exports.SupportLanguage || (exports.SupportLanguage = {}));


/***/ }),

/***/ "./src/app/entry/index.ts":
/*!********************************!*\
  !*** ./src/app/entry/index.ts ***!
  \********************************/
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
__webpack_require__(/*! ../asset/style */ "./src/app/asset/style/index.ts");
var ui_window_1 = __webpack_require__(/*! ../component/ui-window */ "./src/app/component/ui-window/index.ts");
var property_decorator_1 = __webpack_require__(/*! ../core/decorator/property-decorator */ "./src/app/core/decorator/property-decorator.ts");
var event_bus_1 = __webpack_require__(/*! ../core/event-bus */ "./src/app/core/event-bus/index.ts");
var validator_1 = __webpack_require__(/*! ../core/validator */ "./src/app/core/validator/index.ts");
var const_1 = __webpack_require__(/*! ./const */ "./src/app/entry/const.ts");
var partial_1 = __webpack_require__(/*! ./partial */ "./src/app/entry/partial.ts");
var Entry = (function () {
    function Entry(options) {
        this.handlerOptions = partial_1.handlerOptions;
        this.version = const_1.VERSION;
        this.startZIndex = const_1.START_ZINDEX;
        this.prefix = const_1.PREFIX;
        this.lang = "ZH_CN";
        this.window = {
            width: const_1.DEFAULT_WINDOW_WIDTH,
            height: const_1.DEFAULT_WINDOW_HEIGHT,
            backgroundColor: const_1.DEFAULT_WINDOW_BACKGROUND_COLOR,
            toolBar: {
                height: const_1.DEFAULT_TOOLBAR_HEIGHT,
                backgroundColor: const_1.DEFAULT_TOOLBAR_BACKGROUND_COLOR,
                titleBar: {
                    label: const_1.DEFAULT_TITLEBAR_LABEL,
                    color: const_1.DEFAULT_TITLEBAR_COLOR,
                    align: const_1.DEFAULT_TITLEBAR_ALIGN,
                    fontSize: const_1.DEFAULT_TITLEBAR_FONTSIZE
                }
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
    Entry.prototype.on = function (queues) {
        if (queues === void 0) { queues = {}; }
        for (var eventKey in queues) {
            var handler = queues[eventKey];
            if (validator_1.checkOfType(handler, "function")) {
                event_bus_1.default.getInstance().on(eventKey, handler);
            }
        }
    };
    Entry.prototype.open = function (options) {
        var uiWindow = new ui_window_1.default(options);
        var uiWindowElement = uiWindow.present();
        var fragment = document.createDocumentFragment();
        fragment.appendChild(uiWindowElement);
        document.body.appendChild(uiWindowElement);
    };
    Entry.getInstance = function (options) {
        if (options === void 0) { options = {}; }
        if (!this.instance) {
            this.instance = new Entry(options);
        }
        else {
            this.instance.handlerOptions(options);
        }
        return this.instance;
    };
    __decorate([
        property_decorator_1.isPstInt(),
        property_decorator_1.min(1000)
    ], Entry.prototype, "startZIndex", void 0);
    __decorate([
        property_decorator_1.isNoEmptyOrNull()
    ], Entry.prototype, "prefix", void 0);
    __decorate([
        property_decorator_1.inValueOptions("ZH_CN", "EN_US")
    ], Entry.prototype, "lang", void 0);
    __decorate([
        property_decorator_1.combine({
            width: validator_1.checkPstNumber,
            height: validator_1.checkPstNumber,
            backgroundColor: validator_1.checkColor,
            toolBar: {
                decorator: {
                    height: validator_1.checkPstNumber,
                    backgroundColor: validator_1.checkColor,
                    titleBar: {
                        decorator: {
                            label: validator_1.checkString,
                            color: validator_1.checkColor,
                            align: ["left", "center", "right"],
                            fontSize: validator_1.checkPstInt
                        },
                        options: [false]
                    }
                },
                options: [false]
            }
        })
    ], Entry.prototype, "window", void 0);
    return Entry;
}());
exports.default = Entry;


/***/ }),

/***/ "./src/app/entry/partial.ts":
/*!**********************************!*\
  !*** ./src/app/entry/partial.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function handlerOptions(options) {
    var _a, _b, _c, _d, _e, _f;
    this.lang = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.lang, (_b !== null && _b !== void 0 ? _b : "ZH_CN"));
    this.startZIndex = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.startZIndex, (_d !== null && _d !== void 0 ? _d : this.startZIndex));
    this.window = (_f = (_e = options) === null || _e === void 0 ? void 0 : _e.window, (_f !== null && _f !== void 0 ? _f : this.window));
}
exports.handlerOptions = handlerOptions;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var entry_1 = __webpack_require__(/*! ./app/entry */ "./src/app/entry/index.ts");
function overt() {
    var entry = entry_1.default.getInstance();
    var entryOvert = function (options) {
        entry_1.default.getInstance(options);
    };
    entryOvert.on = entry.on;
    entryOvert.version = entry.version;
    entryOvert.open = entry.open;
    return entryOvert;
}
exports.default = overt();


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2FuaW1hdGUuY3NzPzliM2YiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvYXNzZXQvc3R5bGUvY29tbW9uLmNzcz8zOTQ2Iiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL3Rvb2wtYmFyLmNzcz9lOWRiIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL3dpbmRvdy5jc3M/MWE2ZSIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLXRvb2wtYmFyL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvbXBvbmVudC91aS10b29sLWJhci9wYXJ0aWFsLnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvbXBvbmVudC91aS13aW5kb3cvY29uc3QudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLXdpbmRvdy9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvdWktd2luZG93L3BhcnRpYWwudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9kZWNvcmF0b3IvcHJvcGVydHktZGVjb3JhdG9yLnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvcmUvZXZlbnQtYnVzL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvcmUvZXhjZXB0aW9uL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvcmUvaGVscGVyL2VsZW1lbnQtaGVscGVyLnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvcmUvaGVscGVyL29iamVjdC1oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS92YWxpZGF0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvZW50cnkvY29uc3QudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvZW50cnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvZW50cnkvcGFydGlhbC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7O0FD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LFNBQUcsTUFBZSxPQUFPLDBDQUFFLE1BQU0sdUNBQUksSUFBSSxDQUFDLE1BQU0sR0FBQztBQUNoRSxDQUFDO0FBSkQsd0NBSUM7Ozs7Ozs7Ozs7Ozs7OztBQ2JELGlGQUFnQztBQU1oQyxTQUFTLEtBQUs7SUFDVixJQUFNLEtBQUssR0FBRyxlQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFbEMsSUFBTSxVQUFVLEdBQWUsVUFBVSxPQUFvQjtRQUN6RCxlQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztJQUVGLFVBQVUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUN6QixVQUFVLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDbkMsVUFBVSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBRTdCLE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUM7QUFFRCxrQkFBZSxLQUFLLEVBQUUsQ0FBQyIsImZpbGUiOiJsYXl4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGF5eFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsYXl4XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9jb21tb24uY3NzJztcclxuaW1wb3J0ICcuL2FuaW1hdGUuY3NzJztcclxuaW1wb3J0ICcuL3dpbmRvdy5jc3MnO1xyXG5pbXBvcnQgJy4vdG9vbC1iYXIuY3NzJztcclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuLi9jb3JlL2V2ZW50LWJ1cyc7XHJcbmltcG9ydCB7IEpTT05PYmplY3QgfSBmcm9tICcuLi9jb3JlL2hlbHBlci90eXBlJztcclxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL2VudHJ5JztcclxuXHJcbi8qKlxyXG4gKiDnu4Tku7bnsbvvvIzmiYDmnInnmoTnu4Tku7bpg73lv4Xpobvnu6fmib/or6XnsbtcclxuICogQHRlbXBsYXRlIFRPcHRpb24g57uE5Lu25Y+C5pWwXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VE9wdGlvbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlhaXlj6Plr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGVudHJ5OiBFbnRyeSA9IEVudHJ5LmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuovku7bmgLvnur/lr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGV2ZW50QnVzOiBFdmVudEJ1cyA9IEV2ZW50QnVzLmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu4Tku7bllK/kuIDmoIfor4ZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzeW1ib2w6IHN5bWJvbCA9IFN5bWJvbChcIm1vbmtzb3VsXCIpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgaGFuZGxlck9wdGlvbnMob3B0aW9uczogVE9wdGlvbik6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5HpgIHkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudE5hbWUg5LqL5Lu25ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSDmtojmga9cclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgc2VuZEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBtZXNzYWdlOiBKU09OT2JqZWN0ID0ge30pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV2ZW50QnVzLmVtaXQoZXZlbnROYW1lLCB7XHJcbiAgICAgICAgICAgIGRhdGFzZXQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBldmVudE5hbWUsXHJcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudmFsdWVPZigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vJztcclxuaW1wb3J0IHsgY29tYmluZSwgaXNDb2xvciwgaXNQc3ROdW1iZXIgfSBmcm9tICcuLi8uLi9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS1kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBhZGRDU1NDbGFzc2VzLCBhZGRDU1NTdHlsZXMsIGNyZWF0ZURpdkVsZW1lbnQgfSBmcm9tICcuLi8uLi9jb3JlL2hlbHBlci9lbGVtZW50LWhlbHBlcic7XHJcbmltcG9ydCB7IGNoZWNrQ29sb3IsIGNoZWNrUHN0SW50LCBjaGVja1N0cmluZyB9IGZyb20gJy4uLy4uL2NvcmUvdmFsaWRhdG9yJztcclxuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4uL3VpLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFsaWduIH0gZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCB7IGhhbmRsZXJPcHRpb25zIH0gZnJvbSAnLi9wYXJ0aWFsJztcclxuaW1wb3J0IHsgVGl0bGVCYXJPcHRpb24sIFVJVG9vbEJhck9wdGlvbiB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG4vKipcclxuICog5bel5YW35qCP57G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVRvb2xCYXIgZXh0ZW5kcyBDb21wb25lbnQ8VUlUb29sQmFyT3B0aW9uPiBpbXBsZW1lbnRzIFVJQ29tcG9uZW50PFVJVG9vbEJhck9wdGlvbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTpgKDlh73mlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogVUlUb29sQmFyT3B0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgaGFuZGxlck9wdGlvbnM6IChvcHRpb25zOiBVSVRvb2xCYXJPcHRpb24pID0+IHZvaWQgPSBoYW5kbGVyT3B0aW9ucztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOagh+mimFxyXG4gICAgICovXHJcbiAgICBAY29tYmluZSh7XHJcbiAgICAgICAgbGFiZWw6IGNoZWNrU3RyaW5nLFxyXG4gICAgICAgIGNvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgICAgIGFsaWduOiBbQWxpZ24uTEVGVCwgQWxpZ24uQ0VOVEVSLCBBbGlnbi5SSUdIVF0sXHJcbiAgICAgICAgZm9udFNpemU6IGNoZWNrUHN0SW50XHJcbiAgICB9LCBmYWxzZSlcclxuICAgIHB1YmxpYyB0aXRsZUJhcjogVGl0bGVCYXJPcHRpb24gfCBmYWxzZSA9IHRoaXMuZW50cnkud2luZG93LnRvb2xCYXIgPT09IGZhbHNlID8gZmFsc2UgOiA8VGl0bGVCYXJPcHRpb24+dGhpcy5lbnRyeS53aW5kb3cudG9vbEJhcj8udGl0bGVCYXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpu5jorqTpq5jluqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IHRoaXMuZW50cnkud2luZG93LnRvb2xCYXIgPT09IGZhbHNlID8gMCA6IDxudW1iZXI+dGhpcy5lbnRyeS53aW5kb3cudG9vbEJhcj8uaGVpZ2h0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6IOM5pmv6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIEBpc0NvbG9yKClcclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9IHRoaXMuZW50cnkud2luZG93LnRvb2xCYXIgPT09IGZhbHNlID8gXCJyZ2JhKDAsMCwwLDApXCIgOiA8c3RyaW5nPnRoaXMuZW50cnkud2luZG93LnRvb2xCYXI/LmJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uue7hOS7tuWFg+e0oOWvueixoVxyXG4gICAgICogQHJldHVybnMgSFRNTEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJlc2VudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZURpdkVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgYWRkQ1NTQ2xhc3NlcyhlbGVtZW50LFxyXG4gICAgICAgICAgICBcInRvb2wtYmFyXCIsXHJcbiAgICAgICAgICAgIFwiZmxleC1ib3hcIixcclxuICAgICAgICAgICAgXCJ2ZXJ0aWNhbC1taWRkbGVcIik7XHJcblxyXG4gICAgICAgIGFkZENTU1N0eWxlcyhlbGVtZW50LFxyXG4gICAgICAgICAgICA8Q1NTU3R5bGVEZWNsYXJhdGlvbj57XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3RoaXMuaGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRpdGxlQmFyICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZUJhckVsZW1lbnQgPSBjcmVhdGVEaXZFbGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICBhZGRDU1NDbGFzc2VzKHRpdGxlQmFyRWxlbWVudCxcclxuICAgICAgICAgICAgICAgIFwidGl0bGUtYmFyXCIsXHJcbiAgICAgICAgICAgICAgICBcImZsZXgtaXRlbVwiKTtcclxuXHJcbiAgICAgICAgICAgIGFkZENTU1N0eWxlcyh0aXRsZUJhckVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICA8Q1NTU3R5bGVEZWNsYXJhdGlvbj57XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGAke3RoaXMudGl0bGVCYXIuY29sb3J9YCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGAke3RoaXMudGl0bGVCYXIuYWxpZ259YCxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogYCR7dGhpcy50aXRsZUJhci5mb250U2l6ZX1weGBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGl0bGVCYXJFbGVtZW50LnRleHRDb250ZW50ID0gPHN0cmluZz50aGlzLnRpdGxlQmFyLmxhYmVsO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUJhckVsZW1lbnQpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFVJVG9vbEJhciBmcm9tICcuLyc7XHJcbmltcG9ydCB7IFVJVG9vbEJhck9wdGlvbiwgVGl0bGVCYXJPcHRpb24gfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOWkhOeQhuWIneWni+S8oOWFpeWPguaVsFxyXG4gKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICogQHJldHVybnMgdm9pZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZXJPcHRpb25zKHRoaXM6IFVJVG9vbEJhciwgb3B0aW9uczogVUlUb29sQmFyT3B0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnM/LmhlaWdodCA/PyB0aGlzLmhlaWdodDtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucz8uYmFja2dyb3VuZENvbG9yID8/IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy50aXRsZUJhciA9IDxUaXRsZUJhck9wdGlvbiB8IGZhbHNlPm9wdGlvbnM/LnRpdGxlQmFyID8/IHRoaXMudGl0bGVCYXI7XHJcbn0iLCIvKipcclxuICog6L655qGG5qC35byPXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBCb3JkZXJTdHlsZSB7XHJcbiAgICAvKipcclxuICAgICAqIOeCueeKtlxyXG4gICAgICovXHJcbiAgICBET1RURUQgPSBcImRvdHRlZFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDomZrnur9cclxuICAgICAqL1xyXG4gICAgREFTSEVEID0gXCJkYXNoZWRcIixcclxuICAgIC8qKlxyXG4gICAgICog5a6e57q/XHJcbiAgICAgKi9cclxuICAgIFNPTElEID0gXCJzb2xpZFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlj4znur9cclxuICAgICAqL1xyXG4gICAgRE9VQkxFID0gXCJkb3VibGVcIlxyXG59XHJcblxyXG4vKipcclxuICog5pSv5oyB5Yqo55S7XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBBbmltYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnvKnmlL5cclxuICAgICAqL1xyXG4gICAgWk9PTSA9IFwiem9vbVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlgY/np7tcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIE9mZnNldCB7XHJcbiAgICAvKipcclxuICAgICAqIOS4remXtFxyXG4gICAgICovXHJcbiAgICBDRU5URVIgPSBcImNlbnRlclwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDpobbpg6jkuK3pl7RcclxuICAgICAqL1xyXG4gICAgVE9QX0NFTlRFUiA9IFwidG9wLWNlbnRlclwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlupXpg6jkuK3pl7RcclxuICAgICAqL1xyXG4gICAgQk9UVE9NX0NFTlRFUiA9IFwiYm90dG9tLWNlbnRlclwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6bkuIrop5JcclxuICAgICAqL1xyXG4gICAgTEVGVF9UT1AgPSBcImxlZnQtdG9wXCIsXHJcbiAgICAvKipcclxuICAgICAqIOW3puS4remXtFxyXG4gICAgICovXHJcbiAgICBMRUZUX01JRERMRSA9IFwibGVmdC1taWRkbGVcIixcclxuICAgIC8qKlxyXG4gICAgICog5bem5LiL6KeSXHJcbiAgICAgKi9cclxuICAgIExFRlRfQk9UVE9NID0gXCJsZWZ0LWJvdHRvbVwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlj7PkuIrop5JcclxuICAgICAqL1xyXG4gICAgUklHSFRfVE9QID0gXCJyaWdodC10b3BcIixcclxuICAgIC8qKlxyXG4gICAgICog5Y+z5Lit6Ze0XHJcbiAgICAgKi9cclxuICAgIFJJR0hUX01JRERMRSA9IFwicmlnaHQtbWlkZGxlXCIsXHJcbiAgICAvKipcclxuICAgICAqIOWPs+S4i+inklxyXG4gICAgICovXHJcbiAgICBSSUdIVF9CT1RUT00gPSBcInJpZ2h0LWJvdHRvbVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpu5jorqTmnIDlsI/lrr3luqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX01JTl9XSURUSDogbnVtYmVyID0gMjAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWwj+mrmOW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUlOX0hFSUdIVDogbnVtYmVyID0gMjAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWkp+WuveW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFYX1dJRFRIOiBudW1iZXIgPSBpbm5lcldpZHRoO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWkp+mrmOW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFYX0hFSUdIVDogbnVtYmVyID0gaW5uZXJIZWlnaHQ7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG5a695bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfV0lEVEg6IG51bWJlciA9IDE7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG5qC35byPXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfU1RZTEU6IEJvcmRlclN0eWxlID0gQm9yZGVyU3R5bGUuU09MSUQ7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG6aKc6ImyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfQ09MT1I6IHN0cmluZyA9IFwiIzNiYWNlZFwiO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOi+ueahhuWchuinklxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQk9SREVSX1JBRElVUzogbnVtYmVyID0gNDsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLyc7XHJcbmltcG9ydCB7XHJcbiAgICBjb21iaW5lLCBpblZhbHVlT3B0aW9ucywgaXNCb29sZWFuLCBpc0NvbG9yLCBpc05vRW1wdHlPck51bGwsIGlzUHN0TnVtYmVyXHJcbn0gZnJvbSAnLi4vLi4vY29yZS9kZWNvcmF0b3IvcHJvcGVydHktZGVjb3JhdG9yJztcclxuaW1wb3J0IHtcclxuICAgIGFkZENTU0NsYXNzZXMsIGFkZENTU1N0eWxlcywgY3JlYXRlRGl2RWxlbWVudCwgaGFzQ1NTQ2xhc3MsIHJlbW92ZUNTU0NsYXNzZXNcclxufSBmcm9tICcuLi8uLi9jb3JlL2hlbHBlci9lbGVtZW50LWhlbHBlcic7XHJcbmltcG9ydCB7IGNoZWNrQ29sb3IsIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tQc3RJbnQsIGNoZWNrUHN0TnVtYmVyLCBjaGVja1N0cmluZyB9IGZyb20gJy4uLy4uL2NvcmUvdmFsaWRhdG9yJztcclxuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4uL3VpLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgICBBbmltYXRpb24sIEJvcmRlclN0eWxlLCBERUZBVUxUX0JPUkRFUl9DT0xPUiwgREVGQVVMVF9CT1JERVJfUkFESVVTLCBERUZBVUxUX0JPUkRFUl9TVFlMRSxcclxuICAgIERFRkFVTFRfQk9SREVSX1dJRFRILCBERUZBVUxUX01BWF9IRUlHSFQsIERFRkFVTFRfTUFYX1dJRFRILCBERUZBVUxUX01JTl9IRUlHSFQsXHJcbiAgICBERUZBVUxUX01JTl9XSURUSCwgT2Zmc2V0XHJcbn0gZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCB7IGhhbmRsZXJPcHRpb25zIH0gZnJvbSAnLi9wYXJ0aWFsJztcclxuaW1wb3J0IHsgQm9yZGVyT3B0aW9uLCBVSVdpbmRvd09wdGlvbiB9IGZyb20gJy4vdHlwZSc7XHJcbmltcG9ydCB7IFVJVG9vbEJhck9wdGlvbiB9IGZyb20gJy4uL3VpLXRvb2wtYmFyL3R5cGUnO1xyXG5pbXBvcnQgVUlUb29sQmFyIGZyb20gJy4uL3VpLXRvb2wtYmFyJztcclxuaW1wb3J0IHsgQWxpZ24gfSBmcm9tICcuLi91aS10b29sLWJhci9jb25zdCc7XHJcblxyXG4vKipcclxuICog56qX5Y+j57uE5Lu257G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVdpbmRvdyBleHRlbmRzIENvbXBvbmVudDxVSVdpbmRvd09wdGlvbj4gaW1wbGVtZW50cyBVSUNvbXBvbmVudDxVSVdpbmRvd09wdGlvbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTpgKDlh73mlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogVUlXaW5kb3dPcHRpb24pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucz8uaWQ7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWkhOeQhuWIneWni+S8oOWFpeWPguaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZXJPcHRpb25zOiAob3B0aW9uczogVUlXaW5kb3dPcHRpb24pID0+IHZvaWQgPSBoYW5kbGVyT3B0aW9ucztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWUr+S4gElkXHJcbiAgICAgKi9cclxuICAgIEBpc05vRW1wdHlPck51bGwoKVxyXG4gICAgcHVibGljIHJlYWRvbmx5IGlkOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlrr3luqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gPG51bWJlcj50aGlzLmVudHJ5LndpbmRvdy53aWR0aDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmrmOW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gPG51bWJlcj50aGlzLmVudHJ5LndpbmRvdy5oZWlnaHQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDlsI/lrr3luqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBtaW5XaWR0aDogbnVtYmVyID0gREVGQVVMVF9NSU5fV0lEVEg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDlsI/pq5jluqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBtaW5IZWlnaHQ6IG51bWJlciA9IERFRkFVTFRfTUlOX0hFSUdIVDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWkp+WuveW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIG1heFdpZHRoOiBudW1iZXIgPSBERUZBVUxUX01BWF9XSURUSDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWkp+mrmOW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIG1heEhlaWdodDogbnVtYmVyID0gREVGQVVMVF9NQVhfSEVJR0hUO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bem6L656L656LedXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgbGVmdDogbnVtYmVyID0gKERFRkFVTFRfTUFYX1dJRFRIIC0gdGhpcy53aWR0aCkgLyAyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+z6L656L656LedXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgdG9wOiBudW1iZXIgPSAoREVGQVVMVF9NQVhfSEVJR0hUIC0gdGhpcy5oZWlnaHQpIC8gMjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi+ueahhuagt+W8j1xyXG4gICAgICovXHJcbiAgICBAY29tYmluZSh7XHJcbiAgICAgICAgd2lkdGg6IGNoZWNrUHN0SW50LCAvKiog5q2j5pW05pWwICovXHJcbiAgICAgICAgc3R5bGU6IFtCb3JkZXJTdHlsZS5TT0xJRCwgQm9yZGVyU3R5bGUuRE9VQkxFLCBCb3JkZXJTdHlsZS5ET1RURUQsIEJvcmRlclN0eWxlLkRBU0hFRF0sIC8qKiDlj6/pgInlgLwgKi9cclxuICAgICAgICBjb2xvcjogY2hlY2tDb2xvciwgIC8qKiDpnZ7nqbrlrZfnrKbkuLIgKi9cclxuICAgICAgICByYWRpdXM6IGNoZWNrUHN0SW50IC8qKiDmraPmlbTmlbAgKi9cclxuICAgIH0sIGZhbHNlKVxyXG4gICAgcHVibGljIGJvcmRlcjogQm9yZGVyT3B0aW9uIHwgZmFsc2UgPSA8Qm9yZGVyT3B0aW9uPntcclxuICAgICAgICB3aWR0aDogREVGQVVMVF9CT1JERVJfV0lEVEgsXHJcbiAgICAgICAgc3R5bGU6IERFRkFVTFRfQk9SREVSX1NUWUxFLFxyXG4gICAgICAgIGNvbG9yOiBERUZBVUxUX0JPUkRFUl9DT0xPUixcclxuICAgICAgICByYWRpdXM6IERFRkFVTFRfQk9SREVSX1JBRElVU1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmYtOW9sVxyXG4gICAgICovXHJcbiAgICBAaXNCb29sZWFuKClcclxuICAgIHB1YmxpYyBib3hTaGFkb3c6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqo55S7XHJcbiAgICAgKi9cclxuICAgIEBpblZhbHVlT3B0aW9ucyhBbmltYXRpb24uWk9PTSwgZmFsc2UpXHJcbiAgICBwdWJsaWMgYW5pbWF0ZTogZmFsc2UgfCBBbmltYXRpb24gPSBBbmltYXRpb24uWk9PTTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiDjOaZr+minOiJslxyXG4gICAgICovXHJcbiAgICBAaXNDb2xvcigpXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSA8c3RyaW5nPnRoaXMuZW50cnkud2luZG93LmJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW3peWFt+agj1xyXG4gICAgICovXHJcbiAgICBAY29tYmluZSh7XHJcbiAgICAgICAgaGVpZ2h0OiBjaGVja1BzdE51bWJlcixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoZWNrQ29sb3IsXHJcbiAgICAgICAgdGl0bGVCYXI6IHtcclxuICAgICAgICAgICAgZGVjb3JhdG9yOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogY2hlY2tTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogY2hlY2tDb2xvcixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBbQWxpZ24uTEVGVCwgQWxpZ24uQ0VOVEVSLCBBbGlnbi5SSUdIVF0sXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogY2hlY2tQc3RJbnRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3B0aW9uczogW2ZhbHNlXVxyXG4gICAgICAgIH1cclxuICAgIH0sIGZhbHNlKVxyXG4gICAgcHVibGljIHRvb2xCYXI6IFVJVG9vbEJhck9wdGlvbiB8IGZhbHNlID0gPFVJVG9vbEJhck9wdGlvbiB8IGZhbHNlPnRoaXMuZW50cnkud2luZG93LnRvb2xCYXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnqpflj6PlhYPntKDlr7nosaFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHdpbmRvd0VsZW1lbnQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rnu4Tku7blhYPntKDlr7nosaFcclxuICAgICAqIEByZXR1cm5zIEhUTUxFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHByZXNlbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVEaXZFbGVtZW50KGAke3RoaXMuZW50cnkucHJlZml4ICsgdGhpcy5pZH1gKTtcclxuICAgICAgICB0aGlzLndpbmRvd0VsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgICAgICBhZGRDU1NDbGFzc2VzKGVsZW1lbnQsXHJcbiAgICAgICAgICAgIFwid2luZG93XCIsXHJcbiAgICAgICAgICAgIFwiZmxleC1ib3hcIixcclxuICAgICAgICAgICAgXCJjb2wtZGlyZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIHRoaXMuYm94U2hhZG93ID8gXCJib3gtc2hhZG93XCIgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UgPyBcImFuaW1hdGVcIiA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlICE9PSBmYWxzZSA/IGBhbmltYXRlLSR7dGhpcy5hbmltYXRlfS1zaG93YCA6IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgIGFkZENTU1N0eWxlcyhlbGVtZW50LFxyXG4gICAgICAgICAgICA8Q1NTU3R5bGVEZWNsYXJhdGlvbj57XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoaXMuYmFja2dyb3VuZENvbG9yfWAsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IGAke3RoaXMuZW50cnkuekluZGV4fWAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7dGhpcy53aWR0aH1weGAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3RoaXMuaGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiB0aGlzLm1heFdpZHRoICE9PSBpbm5lcldpZHRoID8gYCR7dGhpcy5tYXhXaWR0aH1weGAgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLm1heEhlaWdodCAhPT0gaW5uZXJIZWlnaHQgPyBgJHt0aGlzLm1heEhlaWdodH1weGAgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IGAke3RoaXMubWluV2lkdGh9cHhgLFxyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBgJHt0aGlzLm1pbkhlaWdodH1weGAsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBgJHt0aGlzLmxlZnR9cHhgLFxyXG4gICAgICAgICAgICAgICAgdG9wOiBgJHt0aGlzLnRvcH1weGAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuYm9yZGVyID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3RoaXMuYm9yZGVyLndpZHRofXB4ICR7dGhpcy5ib3JkZXIuc3R5bGV9ICR7dGhpcy5ib3JkZXIuY29sb3J9YCxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhpcy5ib3JkZXIgPT09IGZhbHNlID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5ib3JkZXIucmFkaXVzfXB4YCxcclxuICAgICAgICAgICAgICAgIHdlYmtpdEJvcmRlclJhZGl1czogdGhpcy5ib3JkZXIgPT09IGZhbHNlID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5ib3JkZXIucmFkaXVzfXB4YCxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRvb2xCYXIgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVpVG9vbEJhciA9IG5ldyBVSVRvb2xCYXIodGhpcy50b29sQmFyKTtcclxuICAgICAgICAgICAgY29uc3QgdWlUb29sQmFyRWxlbWVudCA9IHVpVG9vbEJhci5wcmVzZW50KCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodWlUb29sQmFyRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1vbml0b3JFdmVudCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbmRFdmVudChcIndpbmRvdzpjcmVhdGVcIiwgeyBpZDogdGhpcy5pZCB9KTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebkeWQrOS6i+S7tlxyXG4gICAgICogQHJldHVybnMgdm9pZCBcclxuICAgICAqL1xyXG4gICAgbW9uaXRvckV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy53aW5kb3dFbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2luZG93RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIChldjogQW5pbWF0aW9uRXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDmlrDlu7rmiJbmmL7npLrnqpflj6NcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGVTaG93TmFtZSA9IGBhbmltYXRlLSR7dGhpcy5hbmltYXRlfS1zaG93YDtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNDU1NDbGFzcyh0aGlzLndpbmRvd0VsZW1lbnQsIGFuaW1hdGVTaG93TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDU1NDbGFzc2VzKHRoaXMud2luZG93RWxlbWVudCwgYW5pbWF0ZVNob3dOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRFdmVudChcIndpbmRvdzpzaG93XCIsIHsgaWQ6IHRoaXMuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyB2YWxpZGF0ZUZhaWwgfSBmcm9tICcuLi8uLi9jb3JlL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IGNoZWNrQXJyYXksIGNoZWNrSW5WYWx1ZU9wdGlvbnMsIGNoZWNrT2ZUeXBlIH0gZnJvbSAnLi4vLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQgVUlXaW5kb3cgZnJvbSAnLi8nO1xyXG5pbXBvcnQgeyBBbmltYXRpb24sIE9mZnNldCB9IGZyb20gJy4vY29uc3QnO1xyXG5pbXBvcnQgeyBCb3JkZXJPcHRpb24sIFVJV2luZG93T3B0aW9uIH0gZnJvbSAnLi90eXBlJztcclxuaW1wb3J0IHsgVUlUb29sQmFyT3B0aW9uIH0gZnJvbSAnLi4vdWktdG9vbC1iYXIvdHlwZSc7XHJcblxyXG4vKipcclxuICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gKiBAcmV0dXJucyB2b2lkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlck9wdGlvbnModGhpczogVUlXaW5kb3csIG9wdGlvbnM6IFVJV2luZG93T3B0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucz8ud2lkdGggPz8gdGhpcy53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucz8uaGVpZ2h0ID8/IHRoaXMuaGVpZ2h0O1xyXG4gICAgdGhpcy5tYXhXaWR0aCA9IG9wdGlvbnM/Lm1heFdpZHRoID8/IHRoaXMubWF4V2lkdGg7XHJcbiAgICB0aGlzLm1heEhlaWdodCA9IG9wdGlvbnM/Lm1heEhlaWdodCA/PyB0aGlzLm1heEhlaWdodDtcclxuICAgIHRoaXMubWluV2lkdGggPSBvcHRpb25zPy5taW5XaWR0aCA/PyB0aGlzLm1pbldpZHRoO1xyXG4gICAgdGhpcy5taW5IZWlnaHQgPSBvcHRpb25zPy5taW5IZWlnaHQgPz8gdGhpcy5taW5IZWlnaHQ7XHJcbiAgICB0aGlzLndpZHRoID0gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgdGhpcy53aWR0aCk7XHJcbiAgICB0aGlzLndpZHRoID0gTWF0aC5taW4odGhpcy5tYXhXaWR0aCwgdGhpcy53aWR0aCk7XHJcbiAgICB0aGlzLmhlaWdodCA9IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmhlaWdodCA9IE1hdGgubWluKHRoaXMubWF4SGVpZ2h0LCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmJvcmRlciA9IDxCb3JkZXJPcHRpb24gfCBmYWxzZT5vcHRpb25zPy5ib3JkZXIgPz8gdGhpcy5ib3JkZXI7XHJcbiAgICB0aGlzLmJveFNoYWRvdyA9IG9wdGlvbnM/LmJveFNoYWRvdyA/PyB0aGlzLmJveFNoYWRvdztcclxuICAgIHRoaXMuYW5pbWF0ZSA9IDxBbmltYXRpb24gfCBmYWxzZT5vcHRpb25zPy5hbmltYXRlID8/IHRoaXMuYW5pbWF0ZTtcclxuICAgIFt0aGlzLmxlZnQsIHRoaXMudG9wXSA9IGNhbGNPZmZzZXQodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIG9wdGlvbnM/Lm9mZnNldCk7XHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnM/LmJhY2tncm91bmRDb2xvciA/PyB0aGlzLmJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMudG9vbEJhciA9IDxVSVRvb2xCYXJPcHRpb24gfCBmYWxzZT5vcHRpb25zPy50b29sQmFyID8/IHRoaXMudG9vbEJhcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIOiuoeeul+eql+WPo+WBj+enu+mHj1xyXG4gKiBAcGFyYW0gd2lkdGgg5a695bqmXHJcbiAqIEBwYXJhbSBoZWlnaHQg6auY5bqmXHJcbiAqIEBwYXJhbSBbb2Zmc2V0XSDlgY/np7tcclxuICogQHJldHVybnMgW251bWJlciwgbnVtYmVyXSBcclxuICovXHJcbmZ1bmN0aW9uIGNhbGNPZmZzZXQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIG9mZnNldD86IFtudW1iZXIsIG51bWJlcl0gfCBPZmZzZXQpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIChpbm5lckhlaWdodCAtIGhlaWdodCkgLyAyXTtcclxuICAgIGlmIChjaGVja0FycmF5KG9mZnNldCkpIHtcclxuICAgICAgICBpZiAob2Zmc2V0Lmxlbmd0aCAhPT0gMiB8fFxyXG4gICAgICAgICAgICAhY2hlY2tPZlR5cGUob2Zmc2V0WzBdLCBcIm51bWJlclwiKSB8fFxyXG4gICAgICAgICAgICAhY2hlY2tPZlR5cGUob2Zmc2V0WzFdLCBcIm51bWJlclwiKSkgdmFsaWRhdGVGYWlsKGBcIiR7W29mZnNldF19XCIg5LiN5piv5pyJ5pWI55qEIFwiW251bWJlcixudW1iZXJdXCIg57G75Z6LYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBbPG51bWJlcj5vZmZzZXRbMF0sIDxudW1iZXI+b2Zmc2V0WzFdXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3Jvb2RzOiBbbnVtYmVyLCBudW1iZXJdID0gWzAsIDBdO1xyXG4gICAgY29uc3Qgb2Zmc2V0T3B0aW9ucyA9IFtcclxuICAgICAgICBPZmZzZXQuQ0VOVEVSLFxyXG4gICAgICAgIE9mZnNldC5UT1BfQ0VOVEVSLFxyXG4gICAgICAgIE9mZnNldC5CT1RUT01fQ0VOVEVSLFxyXG4gICAgICAgIE9mZnNldC5MRUZUX1RPUCxcclxuICAgICAgICBPZmZzZXQuTEVGVF9NSURETEUsXHJcbiAgICAgICAgT2Zmc2V0LkxFRlRfQk9UVE9NLFxyXG4gICAgICAgIE9mZnNldC5SSUdIVF9UT1AsXHJcbiAgICAgICAgT2Zmc2V0LlJJR0hUX01JRERMRSxcclxuICAgICAgICBPZmZzZXQuUklHSFRfQk9UVE9NXHJcbiAgICBdO1xyXG4gICAgaWYgKGNoZWNrSW5WYWx1ZU9wdGlvbnMob2Zmc2V0LCAuLi5vZmZzZXRPcHRpb25zKSkge1xyXG4gICAgICAgIHN3aXRjaCAoPE9mZnNldD5vZmZzZXQpIHtcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuQ0VOVEVSOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gWyhpbm5lcldpZHRoIC0gd2lkdGgpIC8gMiwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LlRPUF9DRU5URVI6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbKGlubmVyV2lkdGggLSB3aWR0aCkgLyAyLCAwXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5CT1RUT01fQ0VOVEVSOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gWyhpbm5lcldpZHRoIC0gd2lkdGgpIC8gMiwgaW5uZXJIZWlnaHQgLSBoZWlnaHRdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LkxFRlRfVE9QOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gWzAsIDBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LkxFRlRfTUlERExFOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gWzAsIChpbm5lckhlaWdodCAtIGhlaWdodCkgLyAyXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5MRUZUX0JPVFRPTTpcclxuICAgICAgICAgICAgICAgIGNyb29kcyA9IFswLCBpbm5lckhlaWdodCAtIGhlaWdodF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuUklHSFRfVE9QOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gW2lubmVyV2lkdGggLSB3aWR0aCwgMF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuUklHSFRfTUlERExFOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gW2lubmVyV2lkdGggLSB3aWR0aCwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LlJJR0hUX0JPVFRPTTpcclxuICAgICAgICAgICAgICAgIGNyb29kcyA9IFtpbm5lcldpZHRoIC0gd2lkdGgsIGlubmVySGVpZ2h0IC0gaGVpZ2h0XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3Jvb2RzO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlRmFpbChgXCIke29mZnNldH1cIiDkuI3mmK/mnInmlYjnmoQgXCJbbnVtYmVyLG51bWJlcl0g5oiWIFske29mZnNldE9wdGlvbnN9XVwiIOexu+Wei2ApO1xyXG59IiwiaW1wb3J0IHsgdmFsaWRhdGVGYWlsIH0gZnJvbSAnLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgbWVyZ2VKU09OT2JqZWN0IH0gZnJvbSAnLi4vaGVscGVyL29iamVjdC1oZWxwZXInO1xyXG5pbXBvcnQgeyBKU09OT2JqZWN0IH0gZnJvbSAnLi4vaGVscGVyL3R5cGUnO1xyXG5pbXBvcnQge1xyXG4gICAgY2hlY2tBcnJheSwgY2hlY2tDb2xvciwgY2hlY2tJblZhbHVlT3B0aW9ucywgY2hlY2tKU09OT2JqZWN0LCBjaGVja01pbiwgY2hlY2tOb0VtcHR5T3JOdWxsLFxyXG4gICAgY2hlY2tPZlR5cGUsIGNoZWNrUHN0SW50LCBjaGVja1BzdE51bWJlciwgY2hlY2tSZWdFeHAsIGNoZWNrU3RyaW5nXHJcbn0gZnJvbSAnLi4vdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgVmFsdWVPcHRpb24gfSBmcm9tICcuLi92YWxpZGF0b3IvdHlwZSc7XHJcbmltcG9ydCB7IFByb3BlcnR5RGVjb3JhdG9yLCBQcm9wZXJ0eVNldHRlciB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5q2j5pWw5YC857G75Z6LXHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHN0TnVtYmVyKCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrUHN0TnVtYmVyKG5ld1ZhbHVlKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5q2j5pWw5YC857G75Z6LYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5oyH5a6a5Y+v6YCJ5YC857G75Z6LXHJcbiAqIEBwYXJhbSB2YWx1ZU9wdGlvbnMg5Y+v6YCJ5YC8XHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluVmFsdWVPcHRpb25zKC4uLnZhbHVlT3B0aW9uczogVmFsdWVPcHRpb24pOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja0luVmFsdWVPcHRpb25zKG5ld1ZhbHVlLCAuLi52YWx1ZU9wdGlvbnMpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3lnKggWyR7dmFsdWVPcHRpb25zLnRvU3RyaW5nKCl9XSDlgLzojIPlm7TlhoVgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XpnZ7nqbrmiJbpnZ5OVUxM5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9FbXB0eU9yTnVsbCgpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwobmV3VmFsdWUpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTpnZ7nqbrlrZfnrKbkuLJgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XluIPlsJTnsbvlnovlgLxcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrT2ZUeXBlKG5ld1ZhbHVlLCBcImJvb2xlYW5cIikpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOW4g+WwlOWAvGApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeWtl+espuS4suexu+Wei+WAvFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZygpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja1N0cmluZyhuZXdWYWx1ZSkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOWtl+espuS4smApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeminOiJsuWAvFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0NvbG9yKCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrQ29sb3IobmV3VmFsdWUpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoRDU1PpopzoibLlgLxgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmraPmlbTmlbBcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQc3RJbnQoKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tQc3RJbnQobmV3VmFsdWUpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTmraPmlbTmlbBgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmnIDlsI/lgLxcclxuICogQHBhcmFtIHRocmVzaG9sZCDmnIDlsI/pmIjlgLxcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtaW4odGhyZXNob2xkOiBudW1iZXIpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja01pbihuZXdWYWx1ZSwgdGhyZXNob2xkKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5b+F6aG75piv5pWw5YC857G75Z6L5bm25LiU5YC85LiN6IO95bCP5LqOIFwiJHt0aHJlc2hvbGR9XCJgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnu4TlkIjmo4Dmn6Xpqozor4FcclxuICogQHBhcmFtIGpzb25EZWNvcmF0b3Ig5Y+C5pWw5q+P5LiA6aG56KOF6aWw5Zmo77yM5pSv5oyBQXJyYXl8RnVuY3Rpb258UmVnRXhwfHtkZWNvcmF0b3I6IHt9LG9wdGlvbnM6IFtdfVxyXG4gKiBAcGFyYW0gaXRlbXMg5YW25L2Z5Y+v6YCJ5YC877yM5Y+q5pSv5oyB5Z+65pys5pWw5o2u57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZShqc29uRGVjb3JhdG9yOiBKU09OT2JqZWN0ID0ge30sIC4uLml0ZW1zOiBBcnJheTxhbnk+KTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSwgcHJvcGVydHlLZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgbmV3VmFsdWUgPSBjaGVja0NvbWJpbmUobmV3VmFsdWUsIGpzb25EZWNvcmF0b3IsIC4uLml0ZW1zKTtcclxuICAgICAgICBpZiAoY2hlY2tKU09OT2JqZWN0KG5ld1ZhbHVlKSkge1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IG1lcmdlSlNPTk9iamVjdCh2YWx1ZSA/PyB7fSwgbmV3VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWQiOW5tumqjOivgeaguOW/g+S7o+eggVxyXG4gKiBAcGFyYW0gbmV3VmFsdWUg5b2T5YmN5YC8XHJcbiAqIEBwYXJhbSBqc29uRGVjb3JhdG9yIOWPguaVsOavj+S4gOmhueijhemlsOWZqO+8jOaUr+aMgUFycmF5fEZ1bmN0aW9ufFJlZ0V4cHx7ZGVjb3JhdG9yOiB7fSxvcHRpb25zOiBbXX1cclxuICogQHBhcmFtIGl0ZW1zIOWFtuS9meWPr+mAieWAvO+8jOWPquaUr+aMgeWfuuacrOaVsOaNruexu+Wei1xyXG4gKiBAcmV0dXJucyB2b2lkXHJcbiAqL1xyXG5mdW5jdGlvbiBjaGVja0NvbWJpbmUobmV3VmFsdWU6IGFueSwganNvbkRlY29yYXRvcjogSlNPTk9iamVjdCA9IHt9LCAuLi5pdGVtczogQXJyYXk8YW55Pik6IGFueSB7XHJcbiAgICBpZiAoIWNoZWNrSlNPTk9iamVjdChuZXdWYWx1ZSkgJiYgKGl0ZW1zLmxlbmd0aCA+IDAgJiYgaXRlbXMuaW5kZXhPZihuZXdWYWx1ZSkgPT09IC0xKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5Y+C5pWw5YC8YCk7XHJcbiAgICBpZiAoaXRlbXMuaW5kZXhPZihuZXdWYWx1ZSkgPiAtMSkgcmV0dXJuIG5ld1ZhbHVlO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGtleVZhbHVlID0gbmV3VmFsdWVba2V5XTtcclxuICAgICAgICBjb25zdCBkZWNvcmF0b3IgPSBqc29uRGVjb3JhdG9yW2tleV07XHJcbiAgICAgICAgaWYgKCFkZWNvcmF0b3IpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBpZiAoY2hlY2tBcnJheShkZWNvcmF0b3IpICYmIGRlY29yYXRvci5pbmRleE9mKGtleVZhbHVlKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdmFsaWRhdGVGYWlsKGBcIiR7a2V5VmFsdWV9XCIg5LiN5ZyoIFske2RlY29yYXRvci50b1N0cmluZygpfV0g5YC86IyD5Zu05YaFYCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tPZlR5cGUoZGVjb3JhdG9yLCBcImZ1bmN0aW9uXCIpICYmICFkZWNvcmF0b3Ioa2V5VmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRmFpbChgXCIke2tleVZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOWPguaVsOWAvGApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrUmVnRXhwKGRlY29yYXRvcikgJiYgIWRlY29yYXRvci50ZXN0KGtleVZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUZhaWwoYFwiJHtrZXlWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTlj4LmlbDlgLxgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVja0pTT05PYmplY3QoZGVjb3JhdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZERlY29yYXRvciA9IGRlY29yYXRvcj8uZGVjb3JhdG9yID8/IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZEl0ZW1zID0gZGVjb3JhdG9yPy5vcHRpb25zID8/IFtdO1xyXG4gICAgICAgICAgICBrZXlWYWx1ZSA9IGNoZWNrQ29tYmluZShrZXlWYWx1ZSwgY2hpbGREZWNvcmF0b3IsIC4uLmNoaWxkSXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3VmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnlJ/miJDoo4XppbDlmajmoLjlv4Pku6PnoIFcclxuICogQHBhcmFtIHByb3BlcnR5U2V0dGVyIOWxnuaAp+iuvue9ruWZqFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRGVjb3JhdG9yKHByb3BlcnR5U2V0dGVyOiBQcm9wZXJ0eVNldHRlcik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcGVydHlLZXldO1xyXG5cclxuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIHtcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBnZXQ6ICgpID0+IHZhbHVlLFxyXG4gICAgICAgICAgICBzZXQ6IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5zZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnNldChuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHByb3BlcnR5U2V0dGVyKG5ld1ZhbHVlLCBwcm9wZXJ0eUtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjaGVja0FycmF5LCBjaGVja09mVHlwZSB9IGZyb20gJy4uL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciwgTWVzc2FnZVF1ZXVlcyB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG4vKipcclxuICog5LqL5Lu25oC757q/57G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEJ1cyB7XHJcbiAgICAvKipcclxuICAgICAqIOengeacieWMluaehOmAoOWHveaVsO+8jOWunueOsOWNleS+i1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5raI5oGv6Zif5YiXXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbWVzc2FnZVF1ZXVlczogTWVzc2FnZVF1ZXVlcyA9IDxNZXNzYWdlUXVldWVzPnt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uR5a6a5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRLZXkg5LqL5Lu25ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRIYW5kbGVyIOS6i+S7tuWkhOeQhuWHveaVsOaIluWHveaVsOaVsOe7hFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb24oZXZlbnRLZXk6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBFdmVudEhhbmRsZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGV2ZW50S2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudFZhbHVlID0gdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrT2ZUeXBlKGV2ZW50VmFsdWUsIFwiZnVuY3Rpb25cIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1tldmVudEtleV0gPSBbPEV2ZW50SGFuZGxlcj5ldmVudFZhbHVlLCBldmVudEhhbmRsZXJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQXJyYXkoZXZlbnRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1tldmVudEtleV0gPSBbLi4uPEFycmF5PEV2ZW50SGFuZGxlcj4+ZXZlbnRWYWx1ZSwgZXZlbnRIYW5kbGVyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XSA9IGV2ZW50SGFuZGxlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj6rnu5HlrprkuIDmrKFcclxuICAgICAqIEBwYXJhbSBldmVudEtleSDkuovku7blkI3np7BcclxuICAgICAqIEBwYXJhbSBldmVudEhhbmRsZXIg5LqL5Lu25aSE55CG5Ye95pWw5oiW5Ye95pWw5pWw57uEXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbmUoZXZlbnRLZXk6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBFdmVudEhhbmRsZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldID0gZXZlbnRIYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+R6YCB5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRLZXkg5LqL5Lu25ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSDkuovku7blpITnkIblh73mlbDmiJblh73mlbDmlbDnu4RcclxuICAgICAqIEByZXR1cm5zIHZvaWQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbWl0KGV2ZW50S2V5OiBzdHJpbmcsIG1lc3NhZ2U6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGV2ZW50S2V5KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBldmVudFZhbHVlID0gdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XTtcclxuICAgICAgICBpZiAoY2hlY2tPZlR5cGUoZXZlbnRWYWx1ZSwgXCJmdW5jdGlvblwiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICg8RXZlbnRIYW5kbGVyPmV2ZW50VmFsdWUpKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2hlY2tBcnJheShldmVudFZhbHVlKSkge1xyXG4gICAgICAgICAgICAoPEFycmF5PEV2ZW50SGFuZGxlcj4+ZXZlbnRWYWx1ZSkubWFwKGhhbmRsZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudEtleSDkuovku7blkI3np7BcclxuICAgICAqIEByZXR1cm5zIHZvaWQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvZmYoZXZlbnRLZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGV2ZW50S2V5KSkgcmV0dXJuO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuovku7bmgLvnur/lrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEV2ZW50QnVzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5ZSv5LiA5Y+v55So5a+56LGhXHJcbiAgICAgKiBAcmV0dXJucyBFdmVudEJ1cyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBFdmVudEJ1cyB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRXZlbnRCdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5oqb5Ye656iL5bqP5byC5bi45L+h5oGvXHJcbiAqIEBwYXJhbSBtZXNzYWdlIOW8guW4uOeugOimgVxyXG4gKiBAcmV0dXJucyBuZXZlciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBuZXZlciB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxcbuexu+Wei++8mueoi+W6j+W8guW4uFxcbuW8guW4uOS/oeaBr++8miR7bWVzc2FnZX1cXG7loIbmoIjkv6Hmga/vvJpgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOaKm+WHuumqjOivgeWksei0peS/oeaBr1xyXG4gKiBAcGFyYW0gbWVzc2FnZSDplJnor6/kv6Hmga9cclxuICogQHJldHVybnMgbmV2ZXIgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVGYWlsKG1lc3NhZ2U6IHN0cmluZyk6IG5ldmVyIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgXFxu57G75Z6L77ya6aqM6K+B6ZSZ6K+vXFxu6ZSZ6K+v5L+h5oGv77yaJHttZXNzYWdlfVxcbuWghuagiOS/oeaBr++8mmApO1xyXG59IiwiaW1wb3J0IHsgUFJFRklYIH0gZnJvbSAnLi4vLi4vZW50cnkvY29uc3QnO1xyXG5pbXBvcnQgeyBjaGVja09mVHlwZSB9IGZyb20gJy4uL3ZhbGlkYXRvcic7XHJcblxyXG4vKipcclxuICog5om56YeP5re75Yqg5YWD57Sg5qC35byPXHJcbiAqIEBwYXJhbSBlbGVtZW50IOWFg+e0oOWvueixoVxyXG4gKiBAcGFyYW0gY3NzU3R5bGVzIOagt+W8j+ihqOWvueixoVxyXG4gKiBAcmV0dXJucyB2b2lkIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENTU1N0eWxlcyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsIGNzc1N0eWxlczogQ1NTU3R5bGVEZWNsYXJhdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgZm9yIChjb25zdCBjc3NQcm9wIGluIGNzc1N0eWxlcykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVbY3NzUHJvcF0gPSBjc3NTdHlsZXNbY3NzUHJvcF0gPz8gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOa3u+WKoENTUyBDbGFzc1xyXG4gKiDpu5jorqTliY3nvIDkuLogX19QUkVGSVhfX++8jOWmguaenGNsYXNz5YmN6Z2i5bimICEg5YiZ5peg6ZyA5re75Yqg5YmN57yAXHJcbiAqIEBwYXJhbSBlbGVtZW50IOWFg+e0oOWvueixoVxyXG4gKiBAcGFyYW0gY2xhc3NlcyBjbGFzc+WIl+ihqFxyXG4gKiBAcmV0dXJucyBIVE1MRWxlbWVudCB8IG51bGwgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ1NTQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsIC4uLmNsYXNzZXM6IEFycmF5PHN0cmluZyB8IHVuZGVmaW5lZD4pOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gdXBkYXRlQ1NTQ2xhc3NlcyhlbGVtZW50LCBmdW5jdGlvbiAoY3VycmVudENsYXNzZXM6IHN0cmluZ1tdLCBpbmRleDogbnVtYmVyLCBpdGVtQ2xhc3M6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghfmluZGV4KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnB1c2goaXRlbUNsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBQUkVGSVgsIC4uLmNsYXNzZXMpO1xyXG59XHJcblxyXG4vKipcclxuICog56e76ZmkQ1NTIENsYXNzXHJcbiAqIOm7mOiupOWJjee8gOS4uiBfX1BSRUZJWF9f77yM5aaC5p6cY2xhc3PliY3pnaLluKYgISDliJnml6DpnIDmt7vliqDliY3nvIBcclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57Sg5a+56LGhXHJcbiAqIEBwYXJhbSBjbGFzc2VzIGNsYXNz5YiX6KGoXHJcbiAqIEByZXR1cm5zIEhUTUxFbGVtZW50IHwgbnVsbCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDU1NDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCwgLi4uY2xhc3Nlczogc3RyaW5nW10pOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gdXBkYXRlQ1NTQ2xhc3NlcyhlbGVtZW50LCBmdW5jdGlvbiAoY3VycmVudENsYXNzZXM6IHN0cmluZ1tdLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2xhc3Nlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFBSRUZJWCwgLi4uY2xhc3Nlcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKbljIXlkKtDU1MgQ2xhc3NcclxuICog6buY6K6k5YmN57yA5Li6IF9fUFJFRklYX1/vvIzlpoLmnpxjbGFzc+WJjemdouW4piAhIOWImeaXoOmcgOa3u+WKoOWJjee8gFxyXG4gKiBAcGFyYW0gZWxlbWVudCDlhYPntKDlr7nosaFcclxuICogQHBhcmFtIGNsYXNzTmFtZSBjbGFzc+WIl+ihqFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NTU0NsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCwgY2xhc3NOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvZyk7XHJcbiAgICBjb25zdCBjbHMgPSBjbGFzc05hbWUuaW5kZXhPZihcIiFcIikgPT09IDAgPyBjbGFzc05hbWUuc3Vic3RyKDEpIDogUFJFRklYICsgY2xhc3NOYW1lO1xyXG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKGNscyk7XHJcbiAgICByZXR1cm4gISF+aW5kZXg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmm7TmlrBDU1MgQ2xhc3PvvIzljIXmi6zmlrDlop7jgIHmm7TmlrDjgIHliKDpmaRcclxuICog6buY6K6k5YmN57yA5Li6IF9fUFJFRklYX1/vvIzlpoLmnpxjbGFzc+WJjemdouW4piAhIOWImeaXoOmcgOa3u+WKoOWJjee8gFxyXG4gKiBAcGFyYW0gZWxlbWVudCDlhYPntKDlr7nosaFcclxuICogQHBhcmFtIGhhbmRsZXIg5pu05paw5pa55byPXHJcbiAqIEBwYXJhbSBbcHJlZml4XSDliY3nvIDnrKZcclxuICogQHBhcmFtIGNsYXNzZXMgY2xhc3PliJfooahcclxuICogQHJldHVybnMgSFRNTEVsZW1lbnQgfCBudWxsIFxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlQ1NTQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgaGFuZGxlcjogKGN1cnJlbnRDbGFzc2VzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlciwgaXRlbUNsYXNzOiBzdHJpbmcpID0+IHZvaWQsIHByZWZpeDogc3RyaW5nID0gUFJFRklYLCAuLi5jbGFzc2VzOiBBcnJheTxzdHJpbmcgfCB1bmRlZmluZWQ+KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgY3VycmVudENsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy9nKTtcclxuICAgIGNsYXNzZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNscyA9IGl0ZW0uaW5kZXhPZihcIiFcIikgPT09IDAgPyBpdGVtLnN1YnN0cigxKSA6IHByZWZpeCArIGl0ZW07XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudENsYXNzZXMuaW5kZXhPZihjbHMpO1xyXG4gICAgICAgICAgICBoYW5kbGVyKGN1cnJlbnRDbGFzc2VzLCBpbmRleCwgY2xzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGN1cnJlbnRDbGFzc2VzLmpvaW4oXCIgXCIpLnRyaW0oKTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICog5Yib5bu6ZGl25qCH562+XHJcbiAqIEBwYXJhbSBbaWRdIGlkXHJcbiAqIEByZXR1cm5zIEhUTUxEaXZFbGVtZW50IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpdkVsZW1lbnQoaWQ/OiBzdHJpbmcpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlmIChjaGVja09mVHlwZShpZCwgXCJzdHJpbmdcIikpIHtcclxuICAgICAgICBlbGVtZW50LmlkID0gPHN0cmluZz5pZDtcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcbiIsImltcG9ydCB7IGNoZWNrSlNPTk9iamVjdCB9IGZyb20gJy4uL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IEpTT05PYmplY3QgfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOWFi+mahkpTT07lr7nosaFcclxuICogQHBhcmFtIHNvdXJjZSDljp9KU09O57G75Z6L5a+56LGhXHJcbiAqIEByZXR1cm5zIOWFi+mahuWQjueahEpTT07nsbvlnovlr7nosaFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUpTT05PYmplY3Q8VCBleHRlbmRzIEpTT05PYmplY3Q+KHNvdXJjZTogVCk6IFQge1xyXG4gICAgY29uc3QgbmV3T2JqZWN0ID0gPGFueT57fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzb3VyY2UpKSB7XHJcbiAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBjaGVja0pTT05PYmplY3Qoc291cmNlW2tleV0pID8gY2xvbmVKU09OT2JqZWN0KHNvdXJjZVtrZXldKSA6IHNvdXJjZVtrZXldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld09iamVjdCBhcyBUO1xyXG59XHJcblxyXG4vKipcclxuICog5ZCI5bm2SlNPTuWvueixoVxyXG4gKiBAcGFyYW0gc291cmNlIOa6kEpTT07nsbvlnovlr7nosaFcclxuICogQHBhcmFtIGRlc3Qg55uu5qCHSlNPTuexu+Wei+WvueixoVxyXG4gKiBAcmV0dXJucyDlkIjlubblkI7nmoRKU09O57G75Z6L5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VKU09OT2JqZWN0PFQgZXh0ZW5kcyBKU09OT2JqZWN0Pihzb3VyY2U6IFQsIGRlc3Q6IFQpOiBUIHtcclxuICAgIGNvbnN0IG5ld09iamVjdCA9IDxhbnk+Y2xvbmVKU09OT2JqZWN0KHNvdXJjZSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGVzdCkpIHtcclxuICAgICAgICBpZiAobmV3T2JqZWN0W2tleV0gPT09IHVuZGVmaW5lZCB8fCAhY2hlY2tKU09OT2JqZWN0KGRlc3Rba2V5XSkpIHtcclxuICAgICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBkZXN0W2tleV07XHJcblxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBtZXJnZUpTT05PYmplY3QobmV3T2JqZWN0W2tleV0sIGRlc3Rba2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3T2JqZWN0IGFzIFQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2FuVHlwZW9mLCBWYWx1ZU9wdGlvbiB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG4vKipcclxuICog5qOA5p+l6IO95aSf6KKrIHR5cGVvZiDnmoTnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSB0eXBlTmFtZXMg57G75Z6L6ZuG5ZCIXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPZlR5cGUoZGF0YTogYW55LCAuLi50eXBlTmFtZXM6IEFycmF5PENhblR5cGVvZj4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlTmFtZXMuaW5kZXhPZih0eXBlb2YgZGF0YSkgPiAtMTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/lrZfnrKbkuLLnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTdHJpbmcoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mlbTmlbDnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbnQoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJudW1iZXJcIikgJiYgKC9eXFwtP1swLTldKyQvLnRlc3QoZGF0YSkpO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5q2j5pW05pWw57G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUHN0SW50KGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrSW50KGRhdGEpICYmIGRhdGEgPj0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+ato+aVsOWAvOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1BzdE51bWJlcihkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm51bWJlclwiKSAmJiBkYXRhID49IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK9KU09O5a+56LGh57G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSlNPTk9iamVjdChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm9iamVjdFwiKSAmJlxyXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhKS50b0xvd2VyQ2FzZSgpID09PSBcIltvYmplY3Qgb2JqZWN0XVwiICYmXHJcbiAgICAgICAgIWNoZWNrQXJyYXkoZGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mlbDnu4Tlr7nosaHnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBcnJheShkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEpO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5oyH5a6a57G75Z6L5pWw57uE5a+56LGh57G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gY2hlY2tJdGVtIOaVsOe7hOmhueajgOafpeWHveaVsFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXJyYXlFYWNoU2FtZShkYXRhOiBhbnksIGNoZWNrSXRlbTogKGl0ZW06IGFueSkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGxldCBpc1NhbWVBcnJheSA9IHRydWU7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgIGlmICghY2hlY2tJdGVtKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGlzU2FtZUFycmF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNTYW1lQXJyYXk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XlrZfnrKbkuLLmmK/lkKbljIXlkKvmjIflrprlrZfnrKZcclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEBwYXJhbSBjaGFyYWN0ZXIg5a2X56ymXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb250YWlucyhkYXRhOiBhbnksIGNoYXJhY3Rlcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIikgJiYgZGF0YS5pbmRleE9mKGNoYXJhY3RlcikgPiAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+aMh+WumuWPr+mAieWAvOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHZhbHVlT3B0aW9ucyDlj6/pgInlgLxcclxuICogQHJldHVybnMgYm9vbGVhblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSW5WYWx1ZU9wdGlvbnMoZGF0YTogYW55LCAuLi52YWx1ZU9wdGlvbnM6IFZhbHVlT3B0aW9uKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJib29sZWFuXCIsIFwibnVtYmVyXCIsIFwic3RyaW5nXCIsIFwidW5kZWZpbmVkXCIsIFwib2JqZWN0XCIpICYmIHZhbHVlT3B0aW9ucy5pbmRleE9mKGRhdGEpID4gLTE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XlrZfnrKbkuLLplb/luqbmmK/lkKbmu6HotrPmnIDlsI/plb/luqZcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSB0aHJlc2hvbGQg6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW5MZW5ndGgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwic3RyaW5nXCIpICYmIGRhdGEubGVuZ3RoID49IHRocmVzaG9sZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeWtl+espuS4sumVv+W6puaYr+WQpua7oei2s+acgOWkp+mVv+W6plxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHRocmVzaG9sZCDpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01heExlbmd0aChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIikgJiYgZGF0YS5sZW5ndGggPD0gdGhyZXNob2xkO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5a2X56ym5Liy6ZW/5bqm5piv5ZCm5ruh6Laz5Yy66Ze06ZW/5bqmXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gbWluVGhyZXNob2xkIOacgOWwj+mYiOWAvFxyXG4gKiBAcGFyYW0gbWF4VGhyZXNob2xkIOacgOWkp+mYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTGVuZ3RoKGRhdGE6IGFueSwgbWluVGhyZXNob2xkOiBudW1iZXIsIG1heFRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tNaW5MZW5ndGgoZGF0YSwgbWluVGhyZXNob2xkKSAmJiBjaGVja01heExlbmd0aChkYXRhLCBtYXhUaHJlc2hvbGQpO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5pWw5YC85piv5ZCm5aSn5LqO5p+Q5Liq5YC8XHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gdGhyZXNob2xkIOmYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWluKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm51bWJlclwiKSAmJiBkYXRhID49IHRocmVzaG9sZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaVsOWAvOaYr+WQpuWwj+S6juafkOS4quWAvFxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHRocmVzaG9sZCDpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01heChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJudW1iZXJcIikgJiYgZGF0YSA8PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmlbDlgLzmmK/lkKblnKjmn5DkuKrljLrpl7TlhoVcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSBtaW5UaHJlc2hvbGQg5pyA5bCP6ZiI5YC8XHJcbiAqIEBwYXJhbSBtYXhUaHJlc2hvbGQg5pyA5aSn6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSYW5nZShkYXRhOiBhbnksIG1pblRocmVzaG9sZDogbnVtYmVyLCBtYXhUaHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrTWluKGRhdGEsIG1pblRocmVzaG9sZCkgJiYgY2hlY2tNYXgoZGF0YSwgbWF4VGhyZXNob2xkKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeepuuaIlk5VTEzlrZfnrKbkuLJcclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbXB0eU9yTnVsbChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkYXRhID09PSBudWxsIHx8IChjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmxlbmd0aCA9PT0gMCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XpnZ7nqbrmiJbpnZ5OVUxM5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTm9FbXB0eU9yTnVsbChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmxlbmd0aCA+IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mraPliJnooajovr7lvI9cclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZWdFeHAoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZGF0YSBpbnN0YW5jZW9mIFJlZ0V4cDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+minOiJsuWAvFxyXG4gKiBAcGFyYW0gZGF0YSDmlbDlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbG9yKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgdmFyIGJpbmFyeVJlZyA9IC9eIyhbMC05YS1mXXs2fXxbMC05YS1mXXszfSkkL2k7XHJcbiAgICB2YXIgcmdiUmV4ID0gL15yZ2JcXCgoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCkkL2k7XHJcbiAgICB2YXIgcmdiYVJleCA9IC9ecmdiYVxcKChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLCgxfDEuMHwwLlswLTldKVxcKSQvaTtcclxuXHJcbiAgICByZXR1cm4gYmluYXJ5UmVnLnRlc3QoZGF0YSkgfHwgcmdiUmV4LnRlc3QoZGF0YSkgfHwgcmdiYVJleC50ZXN0KGRhdGEpO1xyXG59XHJcbiIsImltcG9ydCB7IEFsaWduIH0gZnJvbSBcIi4uL2NvbXBvbmVudC91aS10b29sLWJhci9jb25zdFwiO1xyXG5cclxuLyoqXHJcbiAqIOeJiOacrOWPt1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFZFUlNJT046IHN0cmluZyA9IFwiMy4wLjBcIjtcclxuXHJcbi8qKlxyXG4gKiDliY3nvIDnrKZcclxuICovXHJcbmV4cG9ydCBjb25zdCBQUkVGSVg6IHN0cmluZyA9IFwibGF5eC1cIjtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTlvIDlp4vlsYLmlbBcclxuICovXHJcbmV4cG9ydCBjb25zdCBTVEFSVF9aSU5ERVg6IG51bWJlciA9IDEwMDAwMDAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOeql+WPo+WuveW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0lORE9XX1dJRFRIOiBudW1iZXIgPSA4MDA7XHJcblxyXG4vKipcclxuICog6buY6K6k56qX5Y+j6auY5bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9XSU5ET1dfSEVJR0hUOiBudW1iZXIgPSA2MDA7XHJcblxyXG4vKipcclxuICog6buY6K6k56qX5Y+j6IOM5pmv6aKc6ImyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9XSU5ET1dfQkFDS0dST1VORF9DT0xPUjogc3RyaW5nID0gXCIjZmZmZmZmXCI7XHJcblxyXG4vKipcclxuICog6buY6K6k5bel5YW35qCP6IOM5pmv6aKc6ImyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9UT09MQkFSX0JBQ0tHUk9VTkRfQ09MT1I6IHN0cmluZyA9IFwiI2ZmZmZmZlwiO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOW3peWFt+agj+mrmOW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTEJBUl9IRUlHSFQ6IG51bWJlciA9IDMwO1xyXG5cclxuLyoqXHJcbiAqIOagh+mimOagj+m7mOiupOaWh+acrFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElUTEVCQVJfTEFCRUwgPSBcIuacquWRveWQjVwiO1xyXG5cclxuLyoqXHJcbiAqIOagh+mimOagj+m7mOiupOminOiJslxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElUTEVCQVJfQ09MT1IgPSBcIiMwMDAwMDBcIjtcclxuXHJcbi8qKlxyXG4gKiDmoIfpopjmoI/pu5jorqTlr7npvZDmlrnlvI9cclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJVExFQkFSX0FMSUdOID0gQWxpZ24uTEVGVDtcclxuXHJcbi8qKlxyXG4gKiDmoIfpopjmoI/pu5jorqTlrZfkvZPlpKflsI9cclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJVExFQkFSX0ZPTlRTSVpFID0gMTQ7XHJcblxyXG4vKipcclxuICog5YaF572u5pSv5oyB6K+t6KiAXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBTdXBwb3J0TGFuZ3VhZ2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiDkuK3mlodcclxuICAgICAqL1xyXG4gICAgWkhfQ04gPSBcIlpIX0NOXCIsXHJcbiAgICAvKipcclxuICAgICAqIOiLseaWh1xyXG4gICAgICovXHJcbiAgICBFTl9VUyA9IFwiRU5fVVNcIlxyXG59IiwiaW1wb3J0ICcuLi9hc3NldC9zdHlsZSc7XHJcblxyXG5pbXBvcnQgVUlXaW5kb3cgZnJvbSAnLi4vY29tcG9uZW50L3VpLXdpbmRvdyc7XHJcbmltcG9ydCB7IFVJV2luZG93T3B0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50L3VpLXdpbmRvdy90eXBlJztcclxuaW1wb3J0IHsgY29tYmluZSwgaW5WYWx1ZU9wdGlvbnMsIGlzTm9FbXB0eU9yTnVsbCwgaXNQc3RJbnQsIG1pbiB9IGZyb20gJy4uL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5LWRlY29yYXRvcic7XHJcbmltcG9ydCBFdmVudEJ1cyBmcm9tICcuLi9jb3JlL2V2ZW50LWJ1cyc7XHJcbmltcG9ydCB7IEV2ZW50U2V0dGVyIH0gZnJvbSAnLi4vY29yZS9ldmVudC1idXMvdHlwZSc7XHJcbmltcG9ydCB7IGNoZWNrQ29sb3IsIGNoZWNrT2ZUeXBlLCBjaGVja1BzdE51bWJlciwgY2hlY2tTdHJpbmcsIGNoZWNrUHN0SW50IH0gZnJvbSAnLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQge1xyXG4gICAgREVGQVVMVF9UT09MQkFSX0JBQ0tHUk9VTkRfQ09MT1IsXHJcbiAgICBERUZBVUxUX1RPT0xCQVJfSEVJR0hULFxyXG4gICAgREVGQVVMVF9XSU5ET1dfQkFDS0dST1VORF9DT0xPUixcclxuICAgIERFRkFVTFRfV0lORE9XX0hFSUdIVCxcclxuICAgIERFRkFVTFRfV0lORE9XX1dJRFRILFxyXG4gICAgUFJFRklYLFxyXG4gICAgU1RBUlRfWklOREVYLFxyXG4gICAgU3VwcG9ydExhbmd1YWdlLFxyXG4gICAgVkVSU0lPTixcclxuICAgIERFRkFVTFRfVElUTEVCQVJfTEFCRUwsXHJcbiAgICBERUZBVUxUX1RJVExFQkFSX0NPTE9SLFxyXG4gICAgREVGQVVMVF9USVRMRUJBUl9BTElHTixcclxuICAgIERFRkFVTFRfVElUTEVCQVJfRk9OVFNJWkUsXHJcbn0gZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCB7IGhhbmRsZXJPcHRpb25zIH0gZnJvbSAnLi9wYXJ0aWFsJztcclxuaW1wb3J0IHsgRW50cnlPcHRpb24sIFRvb2xCYXJEZWZhdWx0LCBXaW5kb3dEZWZhdWx0IH0gZnJvbSAnLi90eXBlJztcclxuaW1wb3J0IHsgVGl0bGVCYXJPcHRpb24gfSBmcm9tICcuLi9jb21wb25lbnQvdWktdG9vbC1iYXIvdHlwZSc7XHJcbmltcG9ydCB7IEFsaWduIH0gZnJvbSAnLi4vY29tcG9uZW50L3VpLXRvb2wtYmFyL2NvbnN0JztcclxuXHJcbi8qKlxyXG4gKiDlhaXlj6PljZXkvovnsbvvvIzmib/ovb3nnYDlhajlsYDmlbDmja7lrZjlgqhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcclxuICAgIC8qKlxyXG4gICAgICog56eB5pyJ5YyW5p6E6YCg5Ye95pWw77yM5a6e546w5Y2V5L6LXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3Iob3B0aW9uczogRW50cnlPcHRpb24pIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgaGFuZGxlck9wdGlvbnM6IChvcHRpb25zOiBFbnRyeU9wdGlvbikgPT4gdm9pZCA9IGhhbmRsZXJPcHRpb25zO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog54mI5pys5Y+3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSB2ZXJzaW9uOiBzdHJpbmcgPSBWRVJTSU9OO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6LW35aeL5bGC5pWwLOS4jeiDveWwj+S6jjEwMDBcclxuICAgICAqL1xyXG4gICAgQGlzUHN0SW50KClcclxuICAgIEBtaW4oMTAwMClcclxuICAgIHB1YmxpYyBzdGFydFpJbmRleDogbnVtYmVyID0gU1RBUlRfWklOREVYO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YmN57yA56ymXHJcbiAgICAgKi9cclxuICAgIEBpc05vRW1wdHlPck51bGwoKVxyXG4gICAgcHVibGljIHJlYWRvbmx5IHByZWZpeDogc3RyaW5nID0gUFJFRklYO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6buY6K6k6K+t6KiAXHJcbiAgICAgKi9cclxuICAgIEBpblZhbHVlT3B0aW9ucyhTdXBwb3J0TGFuZ3VhZ2UuWkhfQ04sIFN1cHBvcnRMYW5ndWFnZS5FTl9VUylcclxuICAgIHB1YmxpYyBsYW5nOiBTdXBwb3J0TGFuZ3VhZ2UgPSBTdXBwb3J0TGFuZ3VhZ2UuWkhfQ047XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnqpflj6Ppu5jorqTphY3nva5cclxuICAgICAqL1xyXG4gICAgQGNvbWJpbmUoe1xyXG4gICAgICAgIHdpZHRoOiBjaGVja1BzdE51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hlY2tDb2xvcixcclxuICAgICAgICB0b29sQmFyOiB7XHJcbiAgICAgICAgICAgIGRlY29yYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjaGVja1BzdE51bWJlcixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hlY2tDb2xvcixcclxuICAgICAgICAgICAgICAgIHRpdGxlQmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjb3JhdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBjaGVja1N0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNoZWNrQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiBbQWxpZ24uTEVGVCwgQWxpZ24uQ0VOVEVSLCBBbGlnbi5SSUdIVF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBjaGVja1BzdEludFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW2ZhbHNlXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbZmFsc2VdXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyB3aW5kb3c6IFdpbmRvd0RlZmF1bHQgPSA8V2luZG93RGVmYXVsdD57XHJcbiAgICAgICAgd2lkdGg6IERFRkFVTFRfV0lORE9XX1dJRFRILCAvLyDpu5jorqTlrr3luqZcclxuICAgICAgICBoZWlnaHQ6IERFRkFVTFRfV0lORE9XX0hFSUdIVCwgIC8vIOm7mOiupOmrmOW6plxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogREVGQVVMVF9XSU5ET1dfQkFDS0dST1VORF9DT0xPUiwgICAgLy/pu5jorqTog4zmma/popzoibJcclxuICAgICAgICB0b29sQmFyOiA8VG9vbEJhckRlZmF1bHQgfCBmYWxzZT57XHJcbiAgICAgICAgICAgIGhlaWdodDogREVGQVVMVF9UT09MQkFSX0hFSUdIVCwgLy8g6buY6K6k5bel5YW35qCP6auY5bqmXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogREVGQVVMVF9UT09MQkFSX0JBQ0tHUk9VTkRfQ09MT1IsIC8vIOm7mOiupOW3peWFt+agj+iDjOaZr+minOiJslxyXG4gICAgICAgICAgICB0aXRsZUJhcjogPFRpdGxlQmFyT3B0aW9uIHwgZmFsc2U+e1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IERFRkFVTFRfVElUTEVCQVJfTEFCRUwsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogREVGQVVMVF9USVRMRUJBUl9DT0xPUixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBERUZBVUxUX1RJVExFQkFSX0FMSUdOLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IERFRkFVTFRfVElUTEVCQVJfRk9OVFNJWkVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3lsYLnuqfmlbBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfekluZGV4OiBudW1iZXIgPSB0aGlzLnN0YXJ0WkluZGV4O1xyXG4gICAgZ2V0IHpJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fekluZGV4ID0gdGhpcy5fekluZGV4ICsgMjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebkeWQrOS6i+S7tlxyXG4gICAgICogQHBhcmFtIHF1ZXVlcyDkuovku7bpmJ/liJdcclxuICAgICAqL1xyXG4gICAgb24ocXVldWVzOiBFdmVudFNldHRlciA9IHt9KTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBldmVudEtleSBpbiBxdWV1ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IHF1ZXVlc1tldmVudEtleV07XHJcbiAgICAgICAgICAgIGlmIChjaGVja09mVHlwZShoYW5kbGVyLCBcImZ1bmN0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBFdmVudEJ1cy5nZXRJbnN0YW5jZSgpLm9uKGV2ZW50S2V5LCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOaWsOeql+WPo1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg56qX5Y+j5Y+C5pWwXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIG9wZW4ob3B0aW9uczogVUlXaW5kb3dPcHRpb24pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB1aVdpbmRvdyA9IG5ldyBVSVdpbmRvdyhvcHRpb25zKTtcclxuICAgICAgICBjb25zdCB1aVdpbmRvd0VsZW1lbnQgPSB1aVdpbmRvdy5wcmVzZW50KCk7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodWlXaW5kb3dFbGVtZW50KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1aVdpbmRvd0VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Z2Z5oCB5a6e5L6L5Y+Y6YePXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFbnRyeTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWUr+S4gOWPr+eUqOWvueixoVxyXG4gICAgICogQHBhcmFtIFtvcHRpb25zXSDlhaXlj6Plj4LmlbBcclxuICAgICAqIEByZXR1cm5zIEVudHJ5IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKG9wdGlvbnM6IEVudHJ5T3B0aW9uID0gPEVudHJ5T3B0aW9uPnt9KTogRW50cnkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEVudHJ5KG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRW50cnkgZnJvbSAnLi8nO1xyXG5pbXBvcnQgeyBTdXBwb3J0TGFuZ3VhZ2UgfSBmcm9tICcuL2NvbnN0JztcclxuaW1wb3J0IHsgRW50cnlPcHRpb24sIFdpbmRvd0RlZmF1bHQgfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOWkhOeQhuWIneWni+S8oOWFpeWPguaVsFxyXG4gKiBAcGFyYW0gb3B0aW9ucyDmjqfku7bmlK/mjIHkvKDlhaXlj6/pgInlj4LmlbBcclxuICogQHJldHVybnMgdm9pZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZXJPcHRpb25zKHRoaXM6IEVudHJ5LCBvcHRpb25zOiBFbnRyeU9wdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5sYW5nID0gb3B0aW9ucz8ubGFuZyA/PyBTdXBwb3J0TGFuZ3VhZ2UuWkhfQ047XHJcbiAgICB0aGlzLnN0YXJ0WkluZGV4ID0gb3B0aW9ucz8uc3RhcnRaSW5kZXggPz8gdGhpcy5zdGFydFpJbmRleDtcclxuICAgIHRoaXMud2luZG93ID0gPFdpbmRvd0RlZmF1bHQ+b3B0aW9ucz8ud2luZG93ID8/IHRoaXMud2luZG93O1xyXG59IiwiaW1wb3J0IEVudHJ5IGZyb20gJy4vYXBwL2VudHJ5JztcclxuaW1wb3J0IHsgRW50cnlPcHRpb24sIEVudHJ5T3ZlcnQgfSBmcm9tICcuL2FwcC9lbnRyeS90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDlr7nlpJblhazlvIDmlrnms5VcclxuICovXHJcbmZ1bmN0aW9uIG92ZXJ0KCk6IEVudHJ5T3ZlcnQge1xyXG4gICAgY29uc3QgZW50cnkgPSBFbnRyeS5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5T3ZlcnQgPSA8RW50cnlPdmVydD5mdW5jdGlvbiAob3B0aW9uczogRW50cnlPcHRpb24pOiB2b2lkIHtcclxuICAgICAgICBFbnRyeS5nZXRJbnN0YW5jZShvcHRpb25zKTtcclxuICAgIH07XHJcblxyXG4gICAgZW50cnlPdmVydC5vbiA9IGVudHJ5Lm9uO1xyXG4gICAgZW50cnlPdmVydC52ZXJzaW9uID0gZW50cnkudmVyc2lvbjtcclxuICAgIGVudHJ5T3ZlcnQub3BlbiA9IGVudHJ5Lm9wZW47XHJcblxyXG4gICAgcmV0dXJuIGVudHJ5T3ZlcnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG92ZXJ0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==