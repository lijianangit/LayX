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
var partial_1 = __webpack_require__(/*! ./partial */ "./src/app/component/ui-tool-bar/partial.ts");
var UIToolBar = (function (_super) {
    __extends(UIToolBar, _super);
    function UIToolBar(options) {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this.handlerOptions = partial_1.handlerOptions;
        _this.height = (_a = _this.entry.window.toolBar) === null || _a === void 0 ? void 0 : _a.height;
        _this.backgroundColor = (_b = _this.entry.window.toolBar) === null || _b === void 0 ? void 0 : _b.backgroundColor;
        _this.handlerOptions(options);
        return _this;
    }
    UIToolBar.prototype.present = function () {
        var element = element_helper_1.createDivElement();
        element_helper_1.addCSSClasses(element, "tool-bar");
        element_helper_1.addCSSStyles(element, {
            height: this.height + "px",
        });
        return element;
    };
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
    var _a, _b, _c, _d;
    this.height = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.height, (_b !== null && _b !== void 0 ? _b : this.height));
    this.backgroundColor = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.backgroundColor, (_d !== null && _d !== void 0 ? _d : this.backgroundColor));
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
        var _a, _b, _c;
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
        _this.toolBar = {
            height: (_a = _this.entry.window.toolBar) === null || _a === void 0 ? void 0 : _a.height,
            backgroundColor: (_b = _this.entry.window.toolBar) === null || _b === void 0 ? void 0 : _b.backgroundColor
        };
        _this.windowElement = null;
        _this.id = (_c = options) === null || _c === void 0 ? void 0 : _c.id;
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
            backgroundColor: validator_1.checkColor
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
        checkCombine(newValue, jsonDecorator, items);
        newValue = object_helper_1.mergeJSONObject((value !== null && value !== void 0 ? value : {}), newValue);
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
            checkCombine(keyValue, childDecorator, childItems);
        }
    }
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
                backgroundColor: const_1.DEFAULT_TOOLBAR_BACKGROUND_COLOR
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
                    backgroundColor: validator_1.checkColor
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2FuaW1hdGUuY3NzPzliM2YiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvYXNzZXQvc3R5bGUvY29tbW9uLmNzcz8zOTQ2Iiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL3Rvb2wtYmFyLmNzcz9lOWRiIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL3dpbmRvdy5jc3M/MWE2ZSIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLXRvb2wtYmFyL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvbXBvbmVudC91aS10b29sLWJhci9wYXJ0aWFsLnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvbXBvbmVudC91aS13aW5kb3cvY29uc3QudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLXdpbmRvdy9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvdWktd2luZG93L3BhcnRpYWwudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9kZWNvcmF0b3IvcHJvcGVydHktZGVjb3JhdG9yLnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvcmUvZXZlbnQtYnVzL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvcmUvZXhjZXB0aW9uL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvcmUvaGVscGVyL2VsZW1lbnQtaGVscGVyLnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvcmUvaGVscGVyL29iamVjdC1oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS92YWxpZGF0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvZW50cnkvY29uc3QudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvZW50cnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvZW50cnkvcGFydGlhbC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7O0FD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QUFDO0FBQ2hFLENBQUM7QUFKRCx3Q0FJQzs7Ozs7Ozs7Ozs7Ozs7O0FDYkQsaUZBQWdDO0FBTWhDLFNBQVMsS0FBSztJQUNWLElBQU0sS0FBSyxHQUFHLGVBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUVsQyxJQUFNLFVBQVUsR0FBZSxVQUFVLE9BQW9CO1FBQ3pELGVBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0lBRUYsVUFBVSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO0lBQ3pCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUNuQyxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFFN0IsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQUVELGtCQUFlLEtBQUssRUFBRSxDQUFDIiwiZmlsZSI6ImxheXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsYXl4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxheXhcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2NvbW1vbi5jc3MnO1xyXG5pbXBvcnQgJy4vYW5pbWF0ZS5jc3MnO1xyXG5pbXBvcnQgJy4vd2luZG93LmNzcyc7XHJcbmltcG9ydCAnLi90b29sLWJhci5jc3MnO1xyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4uL2NvcmUvZXZlbnQtYnVzJztcclxuaW1wb3J0IHsgSlNPTk9iamVjdCB9IGZyb20gJy4uL2NvcmUvaGVscGVyL3R5cGUnO1xyXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vZW50cnknO1xyXG5cclxuLyoqXHJcbiAqIOe7hOS7tuexu++8jOaJgOacieeahOe7hOS7tumDveW/hemhu+e7p+aJv+ivpeexu1xyXG4gKiBAdGVtcGxhdGUgVE9wdGlvbiDnu4Tku7blj4LmlbBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUT3B0aW9uPiB7XHJcbiAgICAvKipcclxuICAgICAqIOWFpeWPo+WvueixoVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZW50cnk6IEVudHJ5ID0gRW50cnkuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS6i+S7tuaAu+e6v+WvueixoVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZXZlbnRCdXM6IEV2ZW50QnVzID0gRXZlbnRCdXMuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7hOS7tuWUr+S4gOagh+ivhlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN5bWJvbDogc3ltYm9sID0gU3ltYm9sKFwibW9ua3NvdWxcIik7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBoYW5kbGVyT3B0aW9ucyhvcHRpb25zOiBUT3B0aW9uKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPkemAgeS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSDkuovku7blkI3np7BcclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIOa2iOaBr1xyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBzZW5kRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IEpTT05PYmplY3QgPSB7fSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXZlbnRCdXMuZW1pdChldmVudE5hbWUsIHtcclxuICAgICAgICAgICAgZGF0YXNldDogbWVzc2FnZSxcclxuICAgICAgICAgICAgZXZlbnRUYXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGV2ZW50TmFtZSxcclxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS52YWx1ZU9mKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8nO1xyXG5pbXBvcnQgeyBpc1BzdE51bWJlciwgaXNDb2xvciB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5LWRlY29yYXRvcic7XHJcbmltcG9ydCB7IGFkZENTU0NsYXNzZXMsIGFkZENTU1N0eWxlcywgY3JlYXRlRGl2RWxlbWVudCB9IGZyb20gJy4uLy4uL2NvcmUvaGVscGVyL2VsZW1lbnQtaGVscGVyJztcclxuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4uL3VpLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGhhbmRsZXJPcHRpb25zIH0gZnJvbSAnLi9wYXJ0aWFsJztcclxuaW1wb3J0IHsgVUlUb29sQmFyT3B0aW9uIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDlt6XlhbfmoI/nsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJVG9vbEJhciBleHRlbmRzIENvbXBvbmVudDxVSVRvb2xCYXJPcHRpb24+IGltcGxlbWVudHMgVUlDb21wb25lbnQ8VUlUb29sQmFyT3B0aW9uPiB7XHJcbiAgICAvKipcclxuICAgICAqIOaehOmAoOWHveaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBVSVRvb2xCYXJPcHRpb24pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyT3B0aW9uczogKG9wdGlvbnM6IFVJVG9vbEJhck9wdGlvbikgPT4gdm9pZCA9IGhhbmRsZXJPcHRpb25zO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6buY6K6k6auY5bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSA8bnVtYmVyPnRoaXMuZW50cnkud2luZG93LnRvb2xCYXI/LmhlaWdodDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiDjOaZr+minOiJslxyXG4gICAgICovXHJcbiAgICBAaXNDb2xvcigpXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSA8c3RyaW5nPnRoaXMuZW50cnkud2luZG93LnRvb2xCYXI/LmJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uue7hOS7tuWFg+e0oOWvueixoVxyXG4gICAgICogQHJldHVybnMgSFRNTEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJlc2VudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZURpdkVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgYWRkQ1NTQ2xhc3NlcyhlbGVtZW50LFxyXG4gICAgICAgICAgICBcInRvb2wtYmFyXCIpO1xyXG5cclxuICAgICAgICBhZGRDU1NTdHlsZXMoZWxlbWVudCxcclxuICAgICAgICAgICAgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHt0aGlzLmhlaWdodH1weGAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxufSIsImltcG9ydCBVSVRvb2xCYXIgZnJvbSAnLi8nO1xyXG5pbXBvcnQgeyBVSVRvb2xCYXJPcHRpb24gfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOWkhOeQhuWIneWni+S8oOWFpeWPguaVsFxyXG4gKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICogQHJldHVybnMgdm9pZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZXJPcHRpb25zKHRoaXM6IFVJVG9vbEJhciwgb3B0aW9uczogVUlUb29sQmFyT3B0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnM/LmhlaWdodCA/PyB0aGlzLmhlaWdodDtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucz8uYmFja2dyb3VuZENvbG9yID8/IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG59IiwiLyoqXHJcbiAqIOi+ueahhuagt+W8j1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gQm9yZGVyU3R5bGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiDngrnnirZcclxuICAgICAqL1xyXG4gICAgRE9UVEVEID0gXCJkb3R0ZWRcIixcclxuICAgIC8qKlxyXG4gICAgICog6Jma57q/XHJcbiAgICAgKi9cclxuICAgIERBU0hFRCA9IFwiZGFzaGVkXCIsXHJcbiAgICAvKipcclxuICAgICAqIOWunue6v1xyXG4gICAgICovXHJcbiAgICBTT0xJRCA9IFwic29saWRcIixcclxuICAgIC8qKlxyXG4gICAgICog5Y+M57q/XHJcbiAgICAgKi9cclxuICAgIERPVUJMRSA9IFwiZG91YmxlXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOaUr+aMgeWKqOeUu1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gQW5pbWF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICog57yp5pS+XHJcbiAgICAgKi9cclxuICAgIFpPT00gPSBcInpvb21cIlxyXG59XHJcblxyXG4vKipcclxuICog5YGP56e7XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBPZmZzZXQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDkuK3pl7RcclxuICAgICAqL1xyXG4gICAgQ0VOVEVSID0gXCJjZW50ZXJcIixcclxuICAgIC8qKlxyXG4gICAgICog6aG26YOo5Lit6Ze0XHJcbiAgICAgKi9cclxuICAgIFRPUF9DRU5URVIgPSBcInRvcC1jZW50ZXJcIixcclxuICAgIC8qKlxyXG4gICAgICog5bqV6YOo5Lit6Ze0XHJcbiAgICAgKi9cclxuICAgIEJPVFRPTV9DRU5URVIgPSBcImJvdHRvbS1jZW50ZXJcIixcclxuICAgIC8qKlxyXG4gICAgICog5bem5LiK6KeSXHJcbiAgICAgKi9cclxuICAgIExFRlRfVE9QID0gXCJsZWZ0LXRvcFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6bkuK3pl7RcclxuICAgICAqL1xyXG4gICAgTEVGVF9NSURETEUgPSBcImxlZnQtbWlkZGxlXCIsXHJcbiAgICAvKipcclxuICAgICAqIOW3puS4i+inklxyXG4gICAgICovXHJcbiAgICBMRUZUX0JPVFRPTSA9IFwibGVmdC1ib3R0b21cIixcclxuICAgIC8qKlxyXG4gICAgICog5Y+z5LiK6KeSXHJcbiAgICAgKi9cclxuICAgIFJJR0hUX1RPUCA9IFwicmlnaHQtdG9wXCIsXHJcbiAgICAvKipcclxuICAgICAqIOWPs+S4remXtFxyXG4gICAgICovXHJcbiAgICBSSUdIVF9NSURETEUgPSBcInJpZ2h0LW1pZGRsZVwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlj7PkuIvop5JcclxuICAgICAqL1xyXG4gICAgUklHSFRfQk9UVE9NID0gXCJyaWdodC1ib3R0b21cIlxyXG59XHJcblxyXG4vKipcclxuICog6buY6K6k5pyA5bCP5a695bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9NSU5fV0lEVEg6IG51bWJlciA9IDIwMDtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTmnIDlsI/pq5jluqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX01JTl9IRUlHSFQ6IG51bWJlciA9IDIwMDtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTmnIDlpKflrr3luqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX01BWF9XSURUSDogbnVtYmVyID0gaW5uZXJXaWR0aDtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTmnIDlpKfpq5jluqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX01BWF9IRUlHSFQ6IG51bWJlciA9IGlubmVySGVpZ2h0O1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOi+ueahhuWuveW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQk9SREVSX1dJRFRIOiBudW1iZXIgPSAxO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOi+ueahhuagt+W8j1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQk9SREVSX1NUWUxFOiBCb3JkZXJTdHlsZSA9IEJvcmRlclN0eWxlLlNPTElEO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOi+ueahhuminOiJslxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQk9SREVSX0NPTE9SOiBzdHJpbmcgPSBcIiMzYmFjZWRcIjtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTovrnmoYblnIbop5JcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0JPUkRFUl9SQURJVVM6IG51bWJlciA9IDQ7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8nO1xyXG5pbXBvcnQge1xyXG4gICAgY29tYmluZSwgaW5WYWx1ZU9wdGlvbnMsIGlzQm9vbGVhbiwgaXNDb2xvciwgaXNOb0VtcHR5T3JOdWxsLCBpc1BzdE51bWJlclxyXG59IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5LWRlY29yYXRvcic7XHJcbmltcG9ydCB7XHJcbiAgICBhZGRDU1NDbGFzc2VzLCBhZGRDU1NTdHlsZXMsIGNyZWF0ZURpdkVsZW1lbnQsIGhhc0NTU0NsYXNzLCByZW1vdmVDU1NDbGFzc2VzXHJcbn0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXIvZWxlbWVudC1oZWxwZXInO1xyXG5pbXBvcnQgeyBjaGVja0NvbG9yLCBjaGVja05vRW1wdHlPck51bGwsIGNoZWNrUHN0SW50LCBjaGVja1BzdE51bWJlciB9IGZyb20gJy4uLy4uL2NvcmUvdmFsaWRhdG9yJztcclxuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gJy4uL3VpLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgICBBbmltYXRpb24sIEJvcmRlclN0eWxlLCBERUZBVUxUX0JPUkRFUl9DT0xPUiwgREVGQVVMVF9CT1JERVJfUkFESVVTLCBERUZBVUxUX0JPUkRFUl9TVFlMRSxcclxuICAgIERFRkFVTFRfQk9SREVSX1dJRFRILCBERUZBVUxUX01BWF9IRUlHSFQsIERFRkFVTFRfTUFYX1dJRFRILCBERUZBVUxUX01JTl9IRUlHSFQsXHJcbiAgICBERUZBVUxUX01JTl9XSURUSCwgT2Zmc2V0XHJcbn0gZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCB7IGhhbmRsZXJPcHRpb25zIH0gZnJvbSAnLi9wYXJ0aWFsJztcclxuaW1wb3J0IHsgQm9yZGVyT3B0aW9uLCBVSVdpbmRvd09wdGlvbiB9IGZyb20gJy4vdHlwZSc7XHJcbmltcG9ydCB7IFVJVG9vbEJhck9wdGlvbiB9IGZyb20gJy4uL3VpLXRvb2wtYmFyL3R5cGUnO1xyXG5pbXBvcnQgVUlUb29sQmFyIGZyb20gJy4uL3VpLXRvb2wtYmFyJztcclxuXHJcbi8qKlxyXG4gKiDnqpflj6Pnu4Tku7bnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJV2luZG93IGV4dGVuZHMgQ29tcG9uZW50PFVJV2luZG93T3B0aW9uPiBpbXBsZW1lbnRzIFVJQ29tcG9uZW50PFVJV2luZG93T3B0aW9uPiB7XHJcbiAgICAvKipcclxuICAgICAqIOaehOmAoOWHveaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBVSVdpbmRvd09wdGlvbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgPSBvcHRpb25zPy5pZDtcclxuICAgICAgICB0aGlzLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgaGFuZGxlck9wdGlvbnM6IChvcHRpb25zOiBVSVdpbmRvd09wdGlvbikgPT4gdm9pZCA9IGhhbmRsZXJPcHRpb25zO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ZSv5LiASWRcclxuICAgICAqL1xyXG4gICAgQGlzTm9FbXB0eU9yTnVsbCgpXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWuveW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSA8bnVtYmVyPnRoaXMuZW50cnkud2luZG93LndpZHRoO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6auY5bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSA8bnVtYmVyPnRoaXMuZW50cnkud2luZG93LmhlaWdodDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWwj+WuveW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIG1pbldpZHRoOiBudW1iZXIgPSBERUZBVUxUX01JTl9XSURUSDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWwj+mrmOW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIG1pbkhlaWdodDogbnVtYmVyID0gREVGQVVMVF9NSU5fSEVJR0hUO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyA5aSn5a695bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgbWF4V2lkdGg6IG51bWJlciA9IERFRkFVTFRfTUFYX1dJRFRIO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyA5aSn6auY5bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgbWF4SGVpZ2h0OiBudW1iZXIgPSBERUZBVUxUX01BWF9IRUlHSFQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6bovrnovrnot51cclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBsZWZ0OiBudW1iZXIgPSAoREVGQVVMVF9NQVhfV0lEVEggLSB0aGlzLndpZHRoKSAvIDI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj7Povrnovrnot51cclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyB0b3A6IG51bWJlciA9IChERUZBVUxUX01BWF9IRUlHSFQgLSB0aGlzLmhlaWdodCkgLyAyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L655qGG5qC35byPXHJcbiAgICAgKi9cclxuICAgIEBjb21iaW5lKHtcclxuICAgICAgICB3aWR0aDogY2hlY2tQc3RJbnQsIC8qKiDmraPmlbTmlbAgKi9cclxuICAgICAgICBzdHlsZTogW0JvcmRlclN0eWxlLlNPTElELCBCb3JkZXJTdHlsZS5ET1VCTEUsIEJvcmRlclN0eWxlLkRPVFRFRCwgQm9yZGVyU3R5bGUuREFTSEVEXSwgLyoqIOWPr+mAieWAvCAqL1xyXG4gICAgICAgIGNvbG9yOiBjaGVja0NvbG9yLCAgLyoqIOmdnuepuuWtl+espuS4siAqL1xyXG4gICAgICAgIHJhZGl1czogY2hlY2tQc3RJbnQgLyoqIOato+aVtOaVsCAqL1xyXG4gICAgfSwgZmFsc2UpXHJcbiAgICBwdWJsaWMgYm9yZGVyOiBCb3JkZXJPcHRpb24gfCBmYWxzZSA9IDxCb3JkZXJPcHRpb24+e1xyXG4gICAgICAgIHdpZHRoOiBERUZBVUxUX0JPUkRFUl9XSURUSCxcclxuICAgICAgICBzdHlsZTogREVGQVVMVF9CT1JERVJfU1RZTEUsXHJcbiAgICAgICAgY29sb3I6IERFRkFVTFRfQk9SREVSX0NPTE9SLFxyXG4gICAgICAgIHJhZGl1czogREVGQVVMVF9CT1JERVJfUkFESVVTXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Zi05b2xXHJcbiAgICAgKi9cclxuICAgIEBpc0Jvb2xlYW4oKVxyXG4gICAgcHVibGljIGJveFNoYWRvdzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqjnlLtcclxuICAgICAqL1xyXG4gICAgQGluVmFsdWVPcHRpb25zKEFuaW1hdGlvbi5aT09NLCBmYWxzZSlcclxuICAgIHB1YmxpYyBhbmltYXRlOiBmYWxzZSB8IEFuaW1hdGlvbiA9IEFuaW1hdGlvbi5aT09NO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6IOM5pmv6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIEBpc0NvbG9yKClcclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9IDxzdHJpbmc+dGhpcy5lbnRyeS53aW5kb3cuYmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bel5YW35qCPXHJcbiAgICAgKi9cclxuICAgIEBjb21iaW5lKHtcclxuICAgICAgICBoZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY2hlY2tDb2xvclxyXG4gICAgfSwgZmFsc2UpXHJcbiAgICBwdWJsaWMgdG9vbEJhcjogVUlUb29sQmFyT3B0aW9uIHwgZmFsc2UgPSA8VUlUb29sQmFyT3B0aW9uPntcclxuICAgICAgICBoZWlnaHQ6IHRoaXMuZW50cnkud2luZG93LnRvb2xCYXI/LmhlaWdodCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuZW50cnkud2luZG93LnRvb2xCYXI/LmJhY2tncm91bmRDb2xvclxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeql+WPo+WFg+e0oOWvueixoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd2luZG93RWxlbWVudDogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uue7hOS7tuWFg+e0oOWvueixoVxyXG4gICAgICogQHJldHVybnMgSFRNTEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJlc2VudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZURpdkVsZW1lbnQoYCR7dGhpcy5lbnRyeS5wcmVmaXggKyB0aGlzLmlkfWApO1xyXG4gICAgICAgIHRoaXMud2luZG93RWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGFkZENTU0NsYXNzZXMoZWxlbWVudCxcclxuICAgICAgICAgICAgXCJ3aW5kb3dcIixcclxuICAgICAgICAgICAgXCJmbGV4LWJveFwiLFxyXG4gICAgICAgICAgICBcImNvbC1kaXJlY3Rpb25cIixcclxuICAgICAgICAgICAgdGhpcy5ib3hTaGFkb3cgPyBcImJveC1zaGFkb3dcIiA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlICE9PSBmYWxzZSA/IFwiYW5pbWF0ZVwiIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgIT09IGZhbHNlID8gYGFuaW1hdGUtJHt0aGlzLmFuaW1hdGV9LXNob3dgIDogdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgYWRkQ1NTU3R5bGVzKGVsZW1lbnQsXHJcbiAgICAgICAgICAgIDxDU1NTdHlsZURlY2xhcmF0aW9uPntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhpcy5iYWNrZ3JvdW5kQ29sb3J9YCxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogYCR7dGhpcy5lbnRyeS56SW5kZXh9YCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHt0aGlzLndpZHRofXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7dGhpcy5oZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMubWF4V2lkdGggIT09IGlubmVyV2lkdGggPyBgJHt0aGlzLm1heFdpZHRofXB4YCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IHRoaXMubWF4SGVpZ2h0ICE9PSBpbm5lckhlaWdodCA/IGAke3RoaXMubWF4SGVpZ2h0fXB4YCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogYCR7dGhpcy5taW5XaWR0aH1weGAsXHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IGAke3RoaXMubWluSGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IGAke3RoaXMubGVmdH1weGAsXHJcbiAgICAgICAgICAgICAgICB0b3A6IGAke3RoaXMudG9wfXB4YCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXIgPT09IGZhbHNlID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5ib3JkZXIud2lkdGh9cHggJHt0aGlzLmJvcmRlci5zdHlsZX0gJHt0aGlzLmJvcmRlci5jb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLmJvcmRlciA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci5yYWRpdXN9cHhgLFxyXG4gICAgICAgICAgICAgICAgd2Via2l0Qm9yZGVyUmFkaXVzOiB0aGlzLmJvcmRlciA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci5yYWRpdXN9cHhgLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudG9vbEJhciAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgdWlUb29sQmFyID0gbmV3IFVJVG9vbEJhcih0aGlzLnRvb2xCYXIpO1xyXG4gICAgICAgICAgICBjb25zdCB1aVRvb2xCYXJFbGVtZW50ID0gdWlUb29sQmFyLnByZXNlbnQoKTtcclxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh1aVRvb2xCYXJFbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW9uaXRvckV2ZW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VuZEV2ZW50KFwid2luZG93OmNyZWF0ZVwiLCB7IGlkOiB0aGlzLmlkIH0pO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55uR5ZCs5LqL5Lu2XHJcbiAgICAgKiBAcmV0dXJucyB2b2lkIFxyXG4gICAgICovXHJcbiAgICBtb25pdG9yRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLndpbmRvd0VsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy53aW5kb3dFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKGV2OiBBbmltYXRpb25FdmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOaWsOW7uuaIluaYvuekuueql+WPo1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0ZVNob3dOYW1lID0gYGFuaW1hdGUtJHt0aGlzLmFuaW1hdGV9LXNob3dgO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NTU0NsYXNzKHRoaXMud2luZG93RWxlbWVudCwgYW5pbWF0ZVNob3dOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNTU0NsYXNzZXModGhpcy53aW5kb3dFbGVtZW50LCBhbmltYXRlU2hvd05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZEV2ZW50KFwid2luZG93OnNob3dcIiwgeyBpZDogdGhpcy5pZCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IHZhbGlkYXRlRmFpbCB9IGZyb20gJy4uLy4uL2NvcmUvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgY2hlY2tBcnJheSwgY2hlY2tJblZhbHVlT3B0aW9ucywgY2hlY2tPZlR5cGUgfSBmcm9tICcuLi8uLi9jb3JlL3ZhbGlkYXRvcic7XHJcbmltcG9ydCBVSVdpbmRvdyBmcm9tICcuLyc7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiwgT2Zmc2V0IH0gZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCB7IEJvcmRlck9wdGlvbiwgVUlXaW5kb3dPcHRpb24gfSBmcm9tICcuL3R5cGUnO1xyXG5pbXBvcnQgeyBVSVRvb2xCYXJPcHRpb24gfSBmcm9tICcuLi91aS10b29sLWJhci90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAqIEByZXR1cm5zIHZvaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVyT3B0aW9ucyh0aGlzOiBVSVdpbmRvdywgb3B0aW9uczogVUlXaW5kb3dPcHRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMud2lkdGggPSBvcHRpb25zPy53aWR0aCA/PyB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zPy5oZWlnaHQgPz8gdGhpcy5oZWlnaHQ7XHJcbiAgICB0aGlzLm1heFdpZHRoID0gb3B0aW9ucz8ubWF4V2lkdGggPz8gdGhpcy5tYXhXaWR0aDtcclxuICAgIHRoaXMubWF4SGVpZ2h0ID0gb3B0aW9ucz8ubWF4SGVpZ2h0ID8/IHRoaXMubWF4SGVpZ2h0O1xyXG4gICAgdGhpcy5taW5XaWR0aCA9IG9wdGlvbnM/Lm1pbldpZHRoID8/IHRoaXMubWluV2lkdGg7XHJcbiAgICB0aGlzLm1pbkhlaWdodCA9IG9wdGlvbnM/Lm1pbkhlaWdodCA/PyB0aGlzLm1pbkhlaWdodDtcclxuICAgIHRoaXMud2lkdGggPSBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCB0aGlzLndpZHRoKTtcclxuICAgIHRoaXMud2lkdGggPSBNYXRoLm1pbih0aGlzLm1heFdpZHRoLCB0aGlzLndpZHRoKTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYm9yZGVyID0gPEJvcmRlck9wdGlvbiB8IGZhbHNlPm9wdGlvbnM/LmJvcmRlciA/PyB0aGlzLmJvcmRlcjtcclxuICAgIHRoaXMuYm94U2hhZG93ID0gb3B0aW9ucz8uYm94U2hhZG93ID8/IHRoaXMuYm94U2hhZG93O1xyXG4gICAgdGhpcy5hbmltYXRlID0gPEFuaW1hdGlvbiB8IGZhbHNlPm9wdGlvbnM/LmFuaW1hdGUgPz8gdGhpcy5hbmltYXRlO1xyXG4gICAgW3RoaXMubGVmdCwgdGhpcy50b3BdID0gY2FsY09mZnNldCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgb3B0aW9ucz8ub2Zmc2V0KTtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucz8uYmFja2dyb3VuZENvbG9yID8/IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy50b29sQmFyID0gPFVJVG9vbEJhck9wdGlvbiB8IGZhbHNlPm9wdGlvbnM/LnRvb2xCYXIgPz8gdGhpcy50b29sQmFyO1xyXG59XHJcblxyXG4vKipcclxuICog6K6h566X56qX5Y+j5YGP56e76YePXHJcbiAqIEBwYXJhbSB3aWR0aCDlrr3luqZcclxuICogQHBhcmFtIGhlaWdodCDpq5jluqZcclxuICogQHBhcmFtIFtvZmZzZXRdIOWBj+enu1xyXG4gKiBAcmV0dXJucyBbbnVtYmVyLCBudW1iZXJdIFxyXG4gKi9cclxuZnVuY3Rpb24gY2FsY09mZnNldCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgb2Zmc2V0PzogW251bWJlciwgbnVtYmVyXSB8IE9mZnNldCk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gWyhpbm5lcldpZHRoIC0gd2lkdGgpIC8gMiwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgaWYgKGNoZWNrQXJyYXkob2Zmc2V0KSkge1xyXG4gICAgICAgIGlmIChvZmZzZXQubGVuZ3RoICE9PSAyIHx8XHJcbiAgICAgICAgICAgICFjaGVja09mVHlwZShvZmZzZXRbMF0sIFwibnVtYmVyXCIpIHx8XHJcbiAgICAgICAgICAgICFjaGVja09mVHlwZShvZmZzZXRbMV0sIFwibnVtYmVyXCIpKSB2YWxpZGF0ZUZhaWwoYFwiJHtbb2Zmc2V0XX1cIiDkuI3mmK/mnInmlYjnmoQgXCJbbnVtYmVyLG51bWJlcl1cIiDnsbvlnotgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFs8bnVtYmVyPm9mZnNldFswXSwgPG51bWJlcj5vZmZzZXRbMV1dO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjcm9vZHM6IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgMF07XHJcbiAgICBjb25zdCBvZmZzZXRPcHRpb25zID0gW1xyXG4gICAgICAgIE9mZnNldC5DRU5URVIsXHJcbiAgICAgICAgT2Zmc2V0LlRPUF9DRU5URVIsXHJcbiAgICAgICAgT2Zmc2V0LkJPVFRPTV9DRU5URVIsXHJcbiAgICAgICAgT2Zmc2V0LkxFRlRfVE9QLFxyXG4gICAgICAgIE9mZnNldC5MRUZUX01JRERMRSxcclxuICAgICAgICBPZmZzZXQuTEVGVF9CT1RUT00sXHJcbiAgICAgICAgT2Zmc2V0LlJJR0hUX1RPUCxcclxuICAgICAgICBPZmZzZXQuUklHSFRfTUlERExFLFxyXG4gICAgICAgIE9mZnNldC5SSUdIVF9CT1RUT01cclxuICAgIF07XHJcbiAgICBpZiAoY2hlY2tJblZhbHVlT3B0aW9ucyhvZmZzZXQsIC4uLm9mZnNldE9wdGlvbnMpKSB7XHJcbiAgICAgICAgc3dpdGNoICg8T2Zmc2V0Pm9mZnNldCkge1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5DRU5URVI6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbKGlubmVyV2lkdGggLSB3aWR0aCkgLyAyLCAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuVE9QX0NFTlRFUjpcclxuICAgICAgICAgICAgICAgIGNyb29kcyA9IFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIDBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LkJPVFRPTV9DRU5URVI6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbKGlubmVyV2lkdGggLSB3aWR0aCkgLyAyLCBpbm5lckhlaWdodCAtIGhlaWdodF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuTEVGVF9UT1A6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbMCwgMF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuTEVGVF9NSURETEU6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbMCwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LkxFRlRfQk9UVE9NOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gWzAsIGlubmVySGVpZ2h0IC0gaGVpZ2h0XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5SSUdIVF9UT1A6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbaW5uZXJXaWR0aCAtIHdpZHRoLCAwXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5SSUdIVF9NSURETEU6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbaW5uZXJXaWR0aCAtIHdpZHRoLCAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuUklHSFRfQk9UVE9NOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gW2lubmVyV2lkdGggLSB3aWR0aCwgaW5uZXJIZWlnaHQgLSBoZWlnaHRdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjcm9vZHM7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVGYWlsKGBcIiR7b2Zmc2V0fVwiIOS4jeaYr+acieaViOeahCBcIltudW1iZXIsbnVtYmVyXSDmiJYgWyR7b2Zmc2V0T3B0aW9uc31dXCIg57G75Z6LYCk7XHJcbn0iLCJpbXBvcnQgeyB2YWxpZGF0ZUZhaWwgfSBmcm9tICcuLi9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBtZXJnZUpTT05PYmplY3QgfSBmcm9tICcuLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XHJcbmltcG9ydCB7IEpTT05PYmplY3QgfSBmcm9tICcuLi9oZWxwZXIvdHlwZSc7XHJcbmltcG9ydCB7XHJcbiAgICBjaGVja0FycmF5LCBjaGVja0NvbG9yLCBjaGVja0luVmFsdWVPcHRpb25zLCBjaGVja0pTT05PYmplY3QsIGNoZWNrTWluLCBjaGVja05vRW1wdHlPck51bGwsXHJcbiAgICBjaGVja09mVHlwZSwgY2hlY2tQc3RJbnQsIGNoZWNrUHN0TnVtYmVyLCBjaGVja1JlZ0V4cFxyXG59IGZyb20gJy4uL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IFZhbHVlT3B0aW9uIH0gZnJvbSAnLi4vdmFsaWRhdG9yL3R5cGUnO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eURlY29yYXRvciwgUHJvcGVydHlTZXR0ZXIgfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+ato+aVsOWAvOexu+Wei1xyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BzdE51bWJlcigpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja1BzdE51bWJlcihuZXdWYWx1ZSkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOato+aVsOWAvOexu+Wei2ApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+aMh+WumuWPr+mAieWAvOexu+Wei1xyXG4gKiBAcGFyYW0gdmFsdWVPcHRpb25zIOWPr+mAieWAvFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpblZhbHVlT3B0aW9ucyguLi52YWx1ZU9wdGlvbnM6IFZhbHVlT3B0aW9uKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tJblZhbHVlT3B0aW9ucyhuZXdWYWx1ZSwgLi4udmFsdWVPcHRpb25zKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5ZyoIFske3ZhbHVlT3B0aW9ucy50b1N0cmluZygpfV0g5YC86IyD5Zu05YaFYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l6Z2e56m65oiW6Z2eTlVMTOWtl+espuS4slxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05vRW1wdHlPck51bGwoKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKG5ld1ZhbHVlKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE6Z2e56m65a2X56ym5LiyYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5biD5bCU57G75Z6L5YC8XHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbigpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja09mVHlwZShuZXdWYWx1ZSwgXCJib29sZWFuXCIpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTluIPlsJTlgLxgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XpopzoibLlgLxcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNDb2xvcigpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja0NvbG9yKG5ld1ZhbHVlKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qEQ1NT6aKc6Imy5YC8YCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5q2j5pW05pWwXHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHN0SW50KCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrUHN0SW50KG5ld1ZhbHVlKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5q2j5pW05pWwYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5pyA5bCP5YC8XHJcbiAqIEBwYXJhbSB0aHJlc2hvbGQg5pyA5bCP6ZiI5YC8XHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWluKHRocmVzaG9sZDogbnVtYmVyKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tNaW4obmV3VmFsdWUsIHRocmVzaG9sZCkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOW/hemhu+aYr+aVsOWAvOexu+Wei+W5tuS4lOWAvOS4jeiDveWwj+S6jiBcIiR7dGhyZXNob2xkfVwiYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog57uE5ZCI5qOA5p+l6aqM6K+BXHJcbiAqIEBwYXJhbSBqc29uRGVjb3JhdG9yIOWPguaVsOavj+S4gOmhueijhemlsOWZqO+8jOaUr+aMgUFycmF5fEZ1bmN0aW9ufFJlZ0V4cHx7ZGVjb3JhdG9yOiB7fSxvcHRpb25zOiBbXX1cclxuICogQHBhcmFtIGl0ZW1zIOWFtuS9meWPr+mAieWAvO+8jOWPquaUr+aMgeWfuuacrOaVsOaNruexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUoanNvbkRlY29yYXRvcjogSlNPTk9iamVjdCA9IHt9LCAuLi5pdGVtczogQXJyYXk8YW55Pik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUsIHByb3BlcnR5S2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNoZWNrQ29tYmluZShuZXdWYWx1ZSwganNvbkRlY29yYXRvciwgaXRlbXMpO1xyXG4gICAgICAgIG5ld1ZhbHVlID0gbWVyZ2VKU09OT2JqZWN0KHZhbHVlID8/IHt9LCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlkIjlubbpqozor4HmoLjlv4Pku6PnoIFcclxuICogQHBhcmFtIG5ld1ZhbHVlIOW9k+WJjeWAvFxyXG4gKiBAcGFyYW0ganNvbkRlY29yYXRvciDlj4LmlbDmr4/kuIDpobnoo4XppbDlmajvvIzmlK/mjIFBcnJheXxGdW5jdGlvbnxSZWdFeHB8e2RlY29yYXRvcjoge30sb3B0aW9uczogW119XHJcbiAqIEBwYXJhbSBpdGVtcyDlhbbkvZnlj6/pgInlgLzvvIzlj6rmlK/mjIHln7rmnKzmlbDmja7nsbvlnotcclxuICogQHJldHVybnMgdm9pZFxyXG4gKi9cclxuZnVuY3Rpb24gY2hlY2tDb21iaW5lKG5ld1ZhbHVlOiBhbnksIGpzb25EZWNvcmF0b3I6IEpTT05PYmplY3QgPSB7fSwgLi4uaXRlbXM6IEFycmF5PGFueT4pOiB2b2lkIHtcclxuICAgIGlmICghY2hlY2tKU09OT2JqZWN0KG5ld1ZhbHVlKSAmJiAoaXRlbXMubGVuZ3RoID4gMCAmJiBpdGVtcy5pbmRleE9mKG5ld1ZhbHVlKSA9PT0gLTEpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTlj4LmlbDlgLxgKTtcclxuICAgIGlmIChpdGVtcy5pbmRleE9mKG5ld1ZhbHVlKSA+IC0xKSByZXR1cm4gbmV3VmFsdWU7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmV3VmFsdWUpIHtcclxuICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IG5ld1ZhbHVlW2tleV07XHJcbiAgICAgICAgY29uc3QgZGVjb3JhdG9yID0ganNvbkRlY29yYXRvcltrZXldO1xyXG4gICAgICAgIGlmICghZGVjb3JhdG9yKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgaWYgKGNoZWNrQXJyYXkoZGVjb3JhdG9yKSAmJiBkZWNvcmF0b3IuaW5kZXhPZihrZXlWYWx1ZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRmFpbChgXCIke2tleVZhbHVlfVwiIOS4jeWcqCBbJHtkZWNvcmF0b3IudG9TdHJpbmcoKX1dIOWAvOiMg+WbtOWGhWApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrT2ZUeXBlKGRlY29yYXRvciwgXCJmdW5jdGlvblwiKSAmJiAhZGVjb3JhdG9yKGtleVZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUZhaWwoYFwiJHtrZXlWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTlj4LmlbDlgLxgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGVja1JlZ0V4cChkZWNvcmF0b3IpICYmICFkZWNvcmF0b3IudGVzdChrZXlWYWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsaWRhdGVGYWlsKGBcIiR7a2V5VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5Y+C5pWw5YC8YCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hlY2tKU09OT2JqZWN0KGRlY29yYXRvcikpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGREZWNvcmF0b3IgPSBkZWNvcmF0b3I/LmRlY29yYXRvciA/PyB7fTtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGRJdGVtcyA9IGRlY29yYXRvcj8ub3B0aW9ucyA/PyBbXTtcclxuICAgICAgICAgICAgY2hlY2tDb21iaW5lKGtleVZhbHVlLCBjaGlsZERlY29yYXRvciwgY2hpbGRJdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog55Sf5oiQ6KOF6aWw5Zmo5qC45b+D5Luj56CBXHJcbiAqIEBwYXJhbSBwcm9wZXJ0eVNldHRlciDlsZ7mgKforr7nva7lmahcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZURlY29yYXRvcihwcm9wZXJ0eVNldHRlcjogUHJvcGVydHlTZXR0ZXIpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcclxuXHJcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZ2V0OiAoKSA9PiB2YWx1ZSxcclxuICAgICAgICAgICAgc2V0OiAobmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3Iuc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvci5zZXQobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBwcm9wZXJ0eVNldHRlcihuZXdWYWx1ZSwgcHJvcGVydHlLZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgY2hlY2tBcnJheSwgY2hlY2tPZlR5cGUgfSBmcm9tICcuLi92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIsIE1lc3NhZ2VRdWV1ZXMgfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOS6i+S7tuaAu+e6v+exu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRCdXMge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnp4HmnInljJbmnoTpgKDlh73mlbDvvIzlrp7njrDljZXkvotcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa2iOaBr+mYn+WIl1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1lc3NhZ2VRdWV1ZXM6IE1lc3NhZ2VRdWV1ZXMgPSA8TWVzc2FnZVF1ZXVlcz57fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7keWumuS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50S2V5IOS6i+S7tuWQjeensFxyXG4gICAgICogQHBhcmFtIGV2ZW50SGFuZGxlciDkuovku7blpITnkIblh73mlbDmiJblh73mlbDmlbDnu4RcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uKGV2ZW50S2V5OiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogRXZlbnRIYW5kbGVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZVF1ZXVlcy5oYXNPd25Qcm9wZXJ0eShldmVudEtleSkpIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRWYWx1ZSA9IHRoaXMubWVzc2FnZVF1ZXVlc1tldmVudEtleV07XHJcbiAgICAgICAgICAgIGlmIChjaGVja09mVHlwZShldmVudFZhbHVlLCBcImZ1bmN0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldID0gWzxFdmVudEhhbmRsZXI+ZXZlbnRWYWx1ZSwgZXZlbnRIYW5kbGVyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGVja0FycmF5KGV2ZW50VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldID0gWy4uLjxBcnJheTxFdmVudEhhbmRsZXI+PmV2ZW50VmFsdWUsIGV2ZW50SGFuZGxlcl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1tldmVudEtleV0gPSBldmVudEhhbmRsZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+q57uR5a6a5LiA5qyhXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRLZXkg5LqL5Lu25ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRIYW5kbGVyIOS6i+S7tuWkhOeQhuWHveaVsOaIluWHveaVsOaVsOe7hFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25lKGV2ZW50S2V5OiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogRXZlbnRIYW5kbGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XSA9IGV2ZW50SGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPkemAgeS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50S2V5IOS6i+S7tuWQjeensFxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2Ug5LqL5Lu25aSE55CG5Ye95pWw5oiW5Ye95pWw5pWw57uEXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZW1pdChldmVudEtleTogc3RyaW5nLCBtZXNzYWdlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZVF1ZXVlcy5oYXNPd25Qcm9wZXJ0eShldmVudEtleSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZXZlbnRWYWx1ZSA9IHRoaXMubWVzc2FnZVF1ZXVlc1tldmVudEtleV07XHJcbiAgICAgICAgaWYgKGNoZWNrT2ZUeXBlKGV2ZW50VmFsdWUsIFwiZnVuY3Rpb25cIikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAoPEV2ZW50SGFuZGxlcj5ldmVudFZhbHVlKShtZXNzYWdlKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNoZWNrQXJyYXkoZXZlbnRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgKDxBcnJheTxFdmVudEhhbmRsZXI+PmV2ZW50VmFsdWUpLm1hcChoYW5kbGVyID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56e76Zmk5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRLZXkg5LqL5Lu25ZCN56ewXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb2ZmKGV2ZW50S2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZVF1ZXVlcy5oYXNPd25Qcm9wZXJ0eShldmVudEtleSkpIHJldHVybjtcclxuICAgICAgICBkZWxldGUgdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LqL5Lu25oC757q/5a6e5L6LXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFdmVudEJ1cztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWUr+S4gOWPr+eUqOWvueixoVxyXG4gICAgICogQHJldHVybnMgRXZlbnRCdXMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogRXZlbnRCdXMge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEV2ZW50QnVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOaKm+WHuueoi+W6j+W8guW4uOS/oeaBr1xyXG4gKiBAcGFyYW0gbWVzc2FnZSDlvILluLjnroDopoFcclxuICogQHJldHVybnMgbmV2ZXIgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXBwRXJyb3IobWVzc2FnZTogc3RyaW5nKTogbmV2ZXIge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBcXG7nsbvlnovvvJrnqIvluo/lvILluLhcXG7lvILluLjkv6Hmga/vvJoke21lc3NhZ2V9XFxu5aCG5qCI5L+h5oGv77yaYCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmipvlh7rpqozor4HlpLHotKXkv6Hmga9cclxuICogQHBhcmFtIG1lc3NhZ2Ug6ZSZ6K+v5L+h5oGvXHJcbiAqIEByZXR1cm5zIG5ldmVyIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRmFpbChtZXNzYWdlOiBzdHJpbmcpOiBuZXZlciB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxcbuexu+Wei++8mumqjOivgemUmeivr1xcbumUmeivr+S/oeaBr++8miR7bWVzc2FnZX1cXG7loIbmoIjkv6Hmga/vvJpgKTtcclxufSIsImltcG9ydCB7IFBSRUZJWCB9IGZyb20gJy4uLy4uL2VudHJ5L2NvbnN0JztcclxuaW1wb3J0IHsgY2hlY2tPZlR5cGUgfSBmcm9tICcuLi92YWxpZGF0b3InO1xyXG5cclxuLyoqXHJcbiAqIOaJuemHj+a3u+WKoOWFg+e0oOagt+W8j1xyXG4gKiBAcGFyYW0gZWxlbWVudCDlhYPntKDlr7nosaFcclxuICogQHBhcmFtIGNzc1N0eWxlcyDmoLflvI/ooajlr7nosaFcclxuICogQHJldHVybnMgdm9pZCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDU1NTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLCBjc3NTdHlsZXM6IENTU1N0eWxlRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIGZvciAoY29uc3QgY3NzUHJvcCBpbiBjc3NTdHlsZXMpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlW2Nzc1Byb3BdID0gY3NzU3R5bGVzW2Nzc1Byb3BdID8/IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmt7vliqBDU1MgQ2xhc3NcclxuICog6buY6K6k5YmN57yA5Li6IF9fUFJFRklYX1/vvIzlpoLmnpxjbGFzc+WJjemdouW4piAhIOWImeaXoOmcgOa3u+WKoOWJjee8gFxyXG4gKiBAcGFyYW0gZWxlbWVudCDlhYPntKDlr7nosaFcclxuICogQHBhcmFtIGNsYXNzZXMgY2xhc3PliJfooahcclxuICogQHJldHVybnMgSFRNTEVsZW1lbnQgfCBudWxsIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLCAuLi5jbGFzc2VzOiBBcnJheTxzdHJpbmcgfCB1bmRlZmluZWQ+KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudCwgZnVuY3Rpb24gKGN1cnJlbnRDbGFzc2VzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlciwgaXRlbUNsYXNzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIX5pbmRleCkge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2xhc3Nlcy5wdXNoKGl0ZW1DbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgUFJFRklYLCAuLi5jbGFzc2VzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOenu+mZpENTUyBDbGFzc1xyXG4gKiDpu5jorqTliY3nvIDkuLogX19QUkVGSVhfX++8jOWmguaenGNsYXNz5YmN6Z2i5bimICEg5YiZ5peg6ZyA5re75Yqg5YmN57yAXHJcbiAqIEBwYXJhbSBlbGVtZW50IOWFg+e0oOWvueixoVxyXG4gKiBAcGFyYW0gY2xhc3NlcyBjbGFzc+WIl+ihqFxyXG4gKiBAcmV0dXJucyBIVE1MRWxlbWVudCB8IG51bGwgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ1NTQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsIC4uLmNsYXNzZXM6IHN0cmluZ1tdKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudCwgZnVuY3Rpb24gKGN1cnJlbnRDbGFzc2VzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgY3VycmVudENsYXNzZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBQUkVGSVgsIC4uLmNsYXNzZXMpO1xyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5YyF5ZCrQ1NTIENsYXNzXHJcbiAqIOm7mOiupOWJjee8gOS4uiBfX1BSRUZJWF9f77yM5aaC5p6cY2xhc3PliY3pnaLluKYgISDliJnml6DpnIDmt7vliqDliY3nvIBcclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57Sg5a+56LGhXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgY2xhc3PliJfooahcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNDU1NDbGFzcyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsIGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrL2cpO1xyXG4gICAgY29uc3QgY2xzID0gY2xhc3NOYW1lLmluZGV4T2YoXCIhXCIpID09PSAwID8gY2xhc3NOYW1lLnN1YnN0cigxKSA6IFBSRUZJWCArIGNsYXNzTmFtZTtcclxuICAgIGNvbnN0IGluZGV4ID0gY3VycmVudENsYXNzZXMuaW5kZXhPZihjbHMpO1xyXG4gICAgcmV0dXJuICEhfmluZGV4O1xyXG59XHJcblxyXG4vKipcclxuICog5pu05pawQ1NTIENsYXNz77yM5YyF5ous5paw5aKe44CB5pu05paw44CB5Yig6ZmkXHJcbiAqIOm7mOiupOWJjee8gOS4uiBfX1BSRUZJWF9f77yM5aaC5p6cY2xhc3PliY3pnaLluKYgISDliJnml6DpnIDmt7vliqDliY3nvIBcclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57Sg5a+56LGhXHJcbiAqIEBwYXJhbSBoYW5kbGVyIOabtOaWsOaWueW8j1xyXG4gKiBAcGFyYW0gW3ByZWZpeF0g5YmN57yA56ymXHJcbiAqIEBwYXJhbSBjbGFzc2VzIGNsYXNz5YiX6KGoXHJcbiAqIEByZXR1cm5zIEhUTUxFbGVtZW50IHwgbnVsbCBcclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnQsIGhhbmRsZXI6IChjdXJyZW50Q2xhc3Nlczogc3RyaW5nW10sIGluZGV4OiBudW1iZXIsIGl0ZW1DbGFzczogc3RyaW5nKSA9PiB2b2lkLCBwcmVmaXg6IHN0cmluZyA9IFBSRUZJWCwgLi4uY2xhc3NlczogQXJyYXk8c3RyaW5nIHwgdW5kZWZpbmVkPik6IEhUTUxFbGVtZW50IHwgbnVsbCB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvZyk7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBjb25zdCBjbHMgPSBpdGVtLmluZGV4T2YoXCIhXCIpID09PSAwID8gaXRlbS5zdWJzdHIoMSkgOiBwcmVmaXggKyBpdGVtO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoY2xzKTtcclxuICAgICAgICAgICAgaGFuZGxlcihjdXJyZW50Q2xhc3NlcywgaW5kZXgsIGNscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKFwiIFwiKS50cmltKCk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIm+W7umRpduagh+etvlxyXG4gKiBAcGFyYW0gW2lkXSBpZFxyXG4gKiBAcmV0dXJucyBIVE1MRGl2RWxlbWVudCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXZFbGVtZW50KGlkPzogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpZiAoY2hlY2tPZlR5cGUoaWQsIFwic3RyaW5nXCIpKSB7XHJcbiAgICAgICAgZWxlbWVudC5pZCA9IDxzdHJpbmc+aWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgeyBjaGVja0pTT05PYmplY3QgfSBmcm9tICcuLi92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBKU09OT2JqZWN0IH0gZnJvbSAnLi90eXBlJztcclxuXHJcbi8qKlxyXG4gKiDlhYvpmoZKU09O5a+56LGhXHJcbiAqIEBwYXJhbSBzb3VyY2Ug5Y6fSlNPTuexu+Wei+WvueixoVxyXG4gKiBAcmV0dXJucyDlhYvpmoblkI7nmoRKU09O57G75Z6L5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVKU09OT2JqZWN0PFQgZXh0ZW5kcyBKU09OT2JqZWN0Pihzb3VyY2U6IFQpOiBUIHtcclxuICAgIGNvbnN0IG5ld09iamVjdCA9IDxhbnk+e307XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xyXG4gICAgICAgIG5ld09iamVjdFtrZXldID0gY2hlY2tKU09OT2JqZWN0KHNvdXJjZVtrZXldKSA/IGNsb25lSlNPTk9iamVjdChzb3VyY2Vba2V5XSkgOiBzb3VyY2Vba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdPYmplY3QgYXMgVDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWQiOW5tkpTT07lr7nosaFcclxuICogQHBhcmFtIHNvdXJjZSDmupBKU09O57G75Z6L5a+56LGhXHJcbiAqIEBwYXJhbSBkZXN0IOebruagh0pTT07nsbvlnovlr7nosaFcclxuICogQHJldHVybnMg5ZCI5bm25ZCO55qESlNPTuexu+Wei+WvueixoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSlNPTk9iamVjdDxUIGV4dGVuZHMgSlNPTk9iamVjdD4oc291cmNlOiBULCBkZXN0OiBUKTogVCB7XHJcbiAgICBjb25zdCBuZXdPYmplY3QgPSA8YW55PmNsb25lSlNPTk9iamVjdChzb3VyY2UpO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRlc3QpKSB7XHJcbiAgICAgICAgaWYgKG5ld09iamVjdFtrZXldID09PSB1bmRlZmluZWQgfHwgIWNoZWNrSlNPTk9iamVjdChkZXN0W2tleV0pKSB7XHJcbiAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gZGVzdFtrZXldO1xyXG5cclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld09iamVjdFtrZXldID0gbWVyZ2VKU09OT2JqZWN0KG5ld09iamVjdFtrZXldLCBkZXN0W2tleV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld09iamVjdCBhcyBUO1xyXG59XHJcbiIsImltcG9ydCB7IENhblR5cGVvZiwgVmFsdWVPcHRpb24gfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOajgOafpeiDveWkn+iiqyB0eXBlb2Yg55qE57G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gdHlwZU5hbWVzIOexu+Wei+mbhuWQiFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT2ZUeXBlKGRhdGE6IGFueSwgLi4udHlwZU5hbWVzOiBBcnJheTxDYW5UeXBlb2Y+KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU5hbWVzLmluZGV4T2YodHlwZW9mIGRhdGEpID4gLTE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mlbTmlbDnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbnQoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJudW1iZXJcIikgJiYgKC9eXFwtP1swLTldKyQvLnRlc3QoZGF0YSkpO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5q2j5pW05pWw57G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUHN0SW50KGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrSW50KGRhdGEpICYmIGRhdGEgPj0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+ato+aVsOWAvOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1BzdE51bWJlcihkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm51bWJlclwiKSAmJiBkYXRhID49IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK9KU09O5a+56LGh57G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSlNPTk9iamVjdChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm9iamVjdFwiKSAmJlxyXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhKS50b0xvd2VyQ2FzZSgpID09PSBcIltvYmplY3Qgb2JqZWN0XVwiICYmXHJcbiAgICAgICAgIWNoZWNrQXJyYXkoZGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mlbDnu4Tlr7nosaHnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBcnJheShkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEpO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5oyH5a6a57G75Z6L5pWw57uE5a+56LGh57G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gY2hlY2tJdGVtIOaVsOe7hOmhueajgOafpeWHveaVsFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXJyYXlFYWNoU2FtZShkYXRhOiBhbnksIGNoZWNrSXRlbTogKGl0ZW06IGFueSkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGxldCBpc1NhbWVBcnJheSA9IHRydWU7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgIGlmICghY2hlY2tJdGVtKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGlzU2FtZUFycmF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNTYW1lQXJyYXk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XlrZfnrKbkuLLmmK/lkKbljIXlkKvmjIflrprlrZfnrKZcclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEBwYXJhbSBjaGFyYWN0ZXIg5a2X56ymXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb250YWlucyhkYXRhOiBhbnksIGNoYXJhY3Rlcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIikgJiYgZGF0YS5pbmRleE9mKGNoYXJhY3RlcikgPiAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+aMh+WumuWPr+mAieWAvOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHZhbHVlT3B0aW9ucyDlj6/pgInlgLxcclxuICogQHJldHVybnMgYm9vbGVhblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSW5WYWx1ZU9wdGlvbnMoZGF0YTogYW55LCAuLi52YWx1ZU9wdGlvbnM6IFZhbHVlT3B0aW9uKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJib29sZWFuXCIsIFwibnVtYmVyXCIsIFwic3RyaW5nXCIsIFwidW5kZWZpbmVkXCIsIFwib2JqZWN0XCIpICYmIHZhbHVlT3B0aW9ucy5pbmRleE9mKGRhdGEpID4gLTE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XlrZfnrKbkuLLplb/luqbmmK/lkKbmu6HotrPmnIDlsI/plb/luqZcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSB0aHJlc2hvbGQg6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW5MZW5ndGgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwic3RyaW5nXCIpICYmIGRhdGEubGVuZ3RoID49IHRocmVzaG9sZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeWtl+espuS4sumVv+W6puaYr+WQpua7oei2s+acgOWkp+mVv+W6plxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHRocmVzaG9sZCDpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01heExlbmd0aChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIikgJiYgZGF0YS5sZW5ndGggPD0gdGhyZXNob2xkO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5a2X56ym5Liy6ZW/5bqm5piv5ZCm5ruh6Laz5Yy66Ze06ZW/5bqmXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gbWluVGhyZXNob2xkIOacgOWwj+mYiOWAvFxyXG4gKiBAcGFyYW0gbWF4VGhyZXNob2xkIOacgOWkp+mYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTGVuZ3RoKGRhdGE6IGFueSwgbWluVGhyZXNob2xkOiBudW1iZXIsIG1heFRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tNaW5MZW5ndGgoZGF0YSwgbWluVGhyZXNob2xkKSAmJiBjaGVja01heExlbmd0aChkYXRhLCBtYXhUaHJlc2hvbGQpO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5pWw5YC85piv5ZCm5aSn5LqO5p+Q5Liq5YC8XHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gdGhyZXNob2xkIOmYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWluKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm51bWJlclwiKSAmJiBkYXRhID49IHRocmVzaG9sZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaVsOWAvOaYr+WQpuWwj+S6juafkOS4quWAvFxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHRocmVzaG9sZCDpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01heChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJudW1iZXJcIikgJiYgZGF0YSA8PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmlbDlgLzmmK/lkKblnKjmn5DkuKrljLrpl7TlhoVcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSBtaW5UaHJlc2hvbGQg5pyA5bCP6ZiI5YC8XHJcbiAqIEBwYXJhbSBtYXhUaHJlc2hvbGQg5pyA5aSn6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSYW5nZShkYXRhOiBhbnksIG1pblRocmVzaG9sZDogbnVtYmVyLCBtYXhUaHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrTWluKGRhdGEsIG1pblRocmVzaG9sZCkgJiYgY2hlY2tNYXgoZGF0YSwgbWF4VGhyZXNob2xkKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeepuuaIlk5VTEzlrZfnrKbkuLJcclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbXB0eU9yTnVsbChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkYXRhID09PSBudWxsIHx8IChjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmxlbmd0aCA9PT0gMCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XpnZ7nqbrmiJbpnZ5OVUxM5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTm9FbXB0eU9yTnVsbChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmxlbmd0aCA+IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mraPliJnooajovr7lvI9cclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZWdFeHAoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZGF0YSBpbnN0YW5jZW9mIFJlZ0V4cDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+minOiJsuWAvFxyXG4gKiBAcGFyYW0gZGF0YSDmlbDlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbG9yKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgdmFyIGJpbmFyeVJlZyA9IC9eIyhbMC05YS1mXXs2fXxbMC05YS1mXXszfSkkL2k7XHJcbiAgICB2YXIgcmdiUmV4ID0gL15yZ2JcXCgoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCkkL2k7XHJcbiAgICB2YXIgcmdiYVJleCA9IC9ecmdiYVxcKChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLCgxfDEuMHwwLlswLTldKVxcKSQvaTtcclxuXHJcbiAgICByZXR1cm4gYmluYXJ5UmVnLnRlc3QoZGF0YSkgfHwgcmdiUmV4LnRlc3QoZGF0YSkgfHwgcmdiYVJleC50ZXN0KGRhdGEpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiDniYjmnKzlj7dcclxuICovXHJcbmV4cG9ydCBjb25zdCBWRVJTSU9OOiBzdHJpbmcgPSBcIjMuMC4wXCI7XHJcblxyXG4vKipcclxuICog5YmN57yA56ymXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUFJFRklYOiBzdHJpbmcgPSBcImxheXgtXCI7XHJcblxyXG4vKipcclxuICog6buY6K6k5byA5aeL5bGC5pWwXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU1RBUlRfWklOREVYOiBudW1iZXIgPSAxMDAwMDAwMDtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTnqpflj6Plrr3luqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1dJTkRPV19XSURUSDogbnVtYmVyID0gODAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOeql+WPo+mrmOW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0lORE9XX0hFSUdIVDogbnVtYmVyID0gNjAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOeql+WPo+iDjOaZr+minOiJslxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0lORE9XX0JBQ0tHUk9VTkRfQ09MT1I6IHN0cmluZyA9IFwiI2ZmZmZmZlwiO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOW3peWFt+agj+iDjOaZr+minOiJslxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTEJBUl9CQUNLR1JPVU5EX0NPTE9SOiBzdHJpbmcgPSBcIiNmZmZmZmZcIjtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTlt6XlhbfmoI/pq5jluqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RPT0xCQVJfSEVJR0hUOiBudW1iZXIgPSAzMDtcclxuXHJcbi8qKlxyXG4gKiDlhoXnva7mlK/mjIHor63oqIBcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFN1cHBvcnRMYW5ndWFnZSB7XHJcbiAgICAvKipcclxuICAgICAqIOS4reaWh1xyXG4gICAgICovXHJcbiAgICBaSF9DTiA9IFwiWkhfQ05cIixcclxuICAgIC8qKlxyXG4gICAgICog6Iux5paHXHJcbiAgICAgKi9cclxuICAgIEVOX1VTID0gXCJFTl9VU1wiXHJcbn0iLCJpbXBvcnQgJy4uL2Fzc2V0L3N0eWxlJztcclxuXHJcbmltcG9ydCBVSVdpbmRvdyBmcm9tICcuLi9jb21wb25lbnQvdWktd2luZG93JztcclxuaW1wb3J0IHsgVUlXaW5kb3dPcHRpb24gfSBmcm9tICcuLi9jb21wb25lbnQvdWktd2luZG93L3R5cGUnO1xyXG5pbXBvcnQgeyBjb21iaW5lLCBpblZhbHVlT3B0aW9ucywgaXNOb0VtcHR5T3JOdWxsLCBpc1BzdEludCwgbWluIH0gZnJvbSAnLi4vY29yZS9kZWNvcmF0b3IvcHJvcGVydHktZGVjb3JhdG9yJztcclxuaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4uL2NvcmUvZXZlbnQtYnVzJztcclxuaW1wb3J0IHsgRXZlbnRTZXR0ZXIgfSBmcm9tICcuLi9jb3JlL2V2ZW50LWJ1cy90eXBlJztcclxuaW1wb3J0IHsgY2hlY2tDb2xvciwgY2hlY2tPZlR5cGUsIGNoZWNrUHN0TnVtYmVyIH0gZnJvbSAnLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQge1xyXG4gICAgREVGQVVMVF9UT09MQkFSX0JBQ0tHUk9VTkRfQ09MT1IsXHJcbiAgICBERUZBVUxUX1RPT0xCQVJfSEVJR0hULFxyXG4gICAgREVGQVVMVF9XSU5ET1dfQkFDS0dST1VORF9DT0xPUixcclxuICAgIERFRkFVTFRfV0lORE9XX0hFSUdIVCxcclxuICAgIERFRkFVTFRfV0lORE9XX1dJRFRILFxyXG4gICAgUFJFRklYLFxyXG4gICAgU1RBUlRfWklOREVYLFxyXG4gICAgU3VwcG9ydExhbmd1YWdlLFxyXG4gICAgVkVSU0lPTixcclxufSBmcm9tICcuL2NvbnN0JztcclxuaW1wb3J0IHsgaGFuZGxlck9wdGlvbnMgfSBmcm9tICcuL3BhcnRpYWwnO1xyXG5pbXBvcnQgeyBFbnRyeU9wdGlvbiwgVG9vbEJhckRlZmF1bHQsIFdpbmRvd0RlZmF1bHQgfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOWFpeWPo+WNleS+i+exu++8jOaJv+i9veedgOWFqOWxgOaVsOaNruWtmOWCqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnp4HmnInljJbmnoTpgKDlh73mlbDvvIzlrp7njrDljZXkvotcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihvcHRpb25zOiBFbnRyeU9wdGlvbikge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyT3B0aW9uczogKG9wdGlvbnM6IEVudHJ5T3B0aW9uKSA9PiB2b2lkID0gaGFuZGxlck9wdGlvbnM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDniYjmnKzlj7dcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZyA9IFZFUlNJT047XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDotbflp4vlsYLmlbAs5LiN6IO95bCP5LqOMTAwMFxyXG4gICAgICovXHJcbiAgICBAaXNQc3RJbnQoKVxyXG4gICAgQG1pbigxMDAwKVxyXG4gICAgcHVibGljIHN0YXJ0WkluZGV4OiBudW1iZXIgPSBTVEFSVF9aSU5ERVg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliY3nvIDnrKZcclxuICAgICAqL1xyXG4gICAgQGlzTm9FbXB0eU9yTnVsbCgpXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHJlZml4OiBzdHJpbmcgPSBQUkVGSVg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpu5jorqTor63oqIBcclxuICAgICAqL1xyXG4gICAgQGluVmFsdWVPcHRpb25zKFN1cHBvcnRMYW5ndWFnZS5aSF9DTiwgU3VwcG9ydExhbmd1YWdlLkVOX1VTKVxyXG4gICAgcHVibGljIGxhbmc6IFN1cHBvcnRMYW5ndWFnZSA9IFN1cHBvcnRMYW5ndWFnZS5aSF9DTjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeql+WPo+m7mOiupOmFjee9rlxyXG4gICAgICovXHJcbiAgICBAY29tYmluZSh7XHJcbiAgICAgICAgd2lkdGg6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgICAgIGhlaWdodDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgICAgIHRvb2xCYXI6IHtcclxuICAgICAgICAgICAgZGVjb3JhdG9yOiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaGVja0NvbG9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcHVibGljIHdpbmRvdzogV2luZG93RGVmYXVsdCA9IDxXaW5kb3dEZWZhdWx0PntcclxuICAgICAgICB3aWR0aDogREVGQVVMVF9XSU5ET1dfV0lEVEgsIC8vIOm7mOiupOWuveW6plxyXG4gICAgICAgIGhlaWdodDogREVGQVVMVF9XSU5ET1dfSEVJR0hULCAgLy8g6buY6K6k6auY5bqmXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBERUZBVUxUX1dJTkRPV19CQUNLR1JPVU5EX0NPTE9SLCAgICAvL+m7mOiupOiDjOaZr+minOiJslxyXG4gICAgICAgIHRvb2xCYXI6IDxUb29sQmFyRGVmYXVsdD57XHJcbiAgICAgICAgICAgIGhlaWdodDogREVGQVVMVF9UT09MQkFSX0hFSUdIVCwgLy8g6buY6K6k5bel5YW35qCP6auY5bqmXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogREVGQVVMVF9UT09MQkFSX0JBQ0tHUk9VTkRfQ09MT1IgLy8g6buY6K6k5bel5YW35qCP6IOM5pmv6aKc6ImyXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjeWxgue6p+aVsFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF96SW5kZXg6IG51bWJlciA9IHRoaXMuc3RhcnRaSW5kZXg7XHJcbiAgICBnZXQgekluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl96SW5kZXggPSB0aGlzLl96SW5kZXggKyAyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55uR5ZCs5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gcXVldWVzIOS6i+S7tumYn+WIl1xyXG4gICAgICovXHJcbiAgICBvbihxdWV1ZXM6IEV2ZW50U2V0dGVyID0ge30pOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50S2V5IGluIHF1ZXVlcykge1xyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gcXVldWVzW2V2ZW50S2V5XTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrT2ZUeXBlKGhhbmRsZXIsIFwiZnVuY3Rpb25cIikpIHtcclxuICAgICAgICAgICAgICAgIEV2ZW50QnVzLmdldEluc3RhbmNlKCkub24oZXZlbnRLZXksIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omT5byA5paw56qX5Y+jXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDnqpflj6Plj4LmlbBcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgb3BlbihvcHRpb25zOiBVSVdpbmRvd09wdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHVpV2luZG93ID0gbmV3IFVJV2luZG93KG9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IHVpV2luZG93RWxlbWVudCA9IHVpV2luZG93LnByZXNlbnQoKTtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh1aVdpbmRvd0VsZW1lbnQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHVpV2luZG93RWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpnZnmgIHlrp7kvovlj5jph49cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEVudHJ5O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5ZSv5LiA5Y+v55So5a+56LGhXHJcbiAgICAgKiBAcGFyYW0gW29wdGlvbnNdIOWFpeWPo+WPguaVsFxyXG4gICAgICogQHJldHVybnMgRW50cnkgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2Uob3B0aW9uczogRW50cnlPcHRpb24gPSA8RW50cnlPcHRpb24+e30pOiBFbnRyeSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRW50cnkob3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxufSIsImltcG9ydCBFbnRyeSBmcm9tICcuLyc7XHJcbmltcG9ydCB7IFN1cHBvcnRMYW5ndWFnZSB9IGZyb20gJy4vY29uc3QnO1xyXG5pbXBvcnQgeyBFbnRyeU9wdGlvbiwgV2luZG93RGVmYXVsdCB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG4vKipcclxuICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAqIEBwYXJhbSBvcHRpb25zIOaOp+S7tuaUr+aMgeS8oOWFpeWPr+mAieWPguaVsFxyXG4gKiBAcmV0dXJucyB2b2lkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlck9wdGlvbnModGhpczogRW50cnksIG9wdGlvbnM6IEVudHJ5T3B0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLmxhbmcgPSBvcHRpb25zPy5sYW5nID8/IFN1cHBvcnRMYW5ndWFnZS5aSF9DTjtcclxuICAgIHRoaXMuc3RhcnRaSW5kZXggPSBvcHRpb25zPy5zdGFydFpJbmRleCA/PyB0aGlzLnN0YXJ0WkluZGV4O1xyXG4gICAgdGhpcy53aW5kb3cgPSA8V2luZG93RGVmYXVsdD5vcHRpb25zPy53aW5kb3cgPz8gdGhpcy53aW5kb3c7XHJcbn0iLCJpbXBvcnQgRW50cnkgZnJvbSAnLi9hcHAvZW50cnknO1xyXG5pbXBvcnQgeyBFbnRyeU9wdGlvbiwgRW50cnlPdmVydCB9IGZyb20gJy4vYXBwL2VudHJ5L3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIOWvueWkluWFrOW8gOaWueazlVxyXG4gKi9cclxuZnVuY3Rpb24gb3ZlcnQoKTogRW50cnlPdmVydCB7XHJcbiAgICBjb25zdCBlbnRyeSA9IEVudHJ5LmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgY29uc3QgZW50cnlPdmVydCA9IDxFbnRyeU92ZXJ0PmZ1bmN0aW9uIChvcHRpb25zOiBFbnRyeU9wdGlvbik6IHZvaWQge1xyXG4gICAgICAgIEVudHJ5LmdldEluc3RhbmNlKG9wdGlvbnMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbnRyeU92ZXJ0Lm9uID0gZW50cnkub247XHJcbiAgICBlbnRyeU92ZXJ0LnZlcnNpb24gPSBlbnRyeS52ZXJzaW9uO1xyXG4gICAgZW50cnlPdmVydC5vcGVuID0gZW50cnkub3BlbjtcclxuXHJcbiAgICByZXR1cm4gZW50cnlPdmVydDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3ZlcnQoKTsiXSwic291cmNlUm9vdCI6IiJ9