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
__webpack_require__(/*! ./window.css */ "./src/app/asset/style/window.css");
__webpack_require__(/*! ./animate.css */ "./src/app/asset/style/animate.css");


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
var entry_1 = __webpack_require__(/*! ../entry */ "./src/app/entry/index.ts");
var event_bus_1 = __webpack_require__(/*! ../core/event-bus */ "./src/app/core/event-bus/index.ts");
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
var const_1 = __webpack_require__(/*! ./const */ "./src/app/component/ui-window/const.ts");
var validator_1 = __webpack_require__(/*! ../../core/validator */ "./src/app/core/validator/index.ts");
var partial_1 = __webpack_require__(/*! ./partial */ "./src/app/component/ui-window/partial.ts");
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(options) {
        var _a;
        var _this = _super.call(this) || this;
        _this.handlerOptions = partial_1.handlerOptions;
        _this.width = _this.entry.width;
        _this.height = _this.entry.height;
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
        _this.backgroundColor = _this.entry.backgroundColor;
        _this.windowElement = null;
        _this.id = (_a = options) === null || _a === void 0 ? void 0 : _a.id;
        _this.handlerOptions(options);
        return _this;
    }
    UIWindow.prototype.present = function () {
        var element = document.createElement("div");
        this.windowElement = element;
        element.id = "" + (this.entry.prefix + this.id);
        element_helper_1.addCSSClasses(element, "window", this.boxShadow ? "box-shadow" : undefined, this.animate !== false ? "animate" : undefined, this.animate !== false ? "animate-" + this.animate + "-show" : undefined);
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
var validator_1 = __webpack_require__(/*! ../../core/validator */ "./src/app/core/validator/index.ts");
var exception_1 = __webpack_require__(/*! ../../core/exception */ "./src/app/core/exception/index.ts");
function handlerOptions(options) {
    var _a;
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
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
var validator_1 = __webpack_require__(/*! ../validator */ "./src/app/core/validator/index.ts");
var exception_1 = __webpack_require__(/*! ../exception */ "./src/app/core/exception/index.ts");
var object_helper_1 = __webpack_require__(/*! ../helper/object-helper */ "./src/app/core/helper/object-helper.ts");
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
        if (!validator_1.checkJSONObject(newValue) && items.indexOf(newValue) === -1)
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
        }
        newValue = object_helper_1.mergeJSONObject((value !== null && value !== void 0 ? value : {}), newValue);
        return newValue;
    });
}
exports.combine = combine;
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
    throw Error("\n\u7C7B\u578B\uFF1A\u7A0B\u5E8F\u5F02\u5E38\n\u5F02\u5E38\u4FE1\u606F\uFF1A" + message + "\n\u5806\u6808\u4FE1\u606F\uFF1A");
}
exports.appError = appError;
function validateFail(message) {
    throw Error("\n\u7C7B\u578B\uFF1A\u9A8C\u8BC1\u9519\u8BEF\n\u9519\u8BEF\u4FE1\u606F\uFF1A" + message + "\n\u5806\u6808\u4FE1\u606F\uFF1A");
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
        !data.length;
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
exports.ZINDEX = 10000000;
exports.DEFAULT_WINDOW_WIDTH = 800;
exports.DEFAULT_WINDOW_HEIGHT = 600;
exports.DEFAULT_WINDOW_BACKGROUND_COLOR = "#ffffff";
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
var const_1 = __webpack_require__(/*! ./const */ "./src/app/entry/const.ts");
var property_decorator_1 = __webpack_require__(/*! ../core/decorator/property-decorator */ "./src/app/core/decorator/property-decorator.ts");
var ui_window_1 = __webpack_require__(/*! ../component/ui-window */ "./src/app/component/ui-window/index.ts");
var event_bus_1 = __webpack_require__(/*! ../core/event-bus */ "./src/app/core/event-bus/index.ts");
var validator_1 = __webpack_require__(/*! ../core/validator */ "./src/app/core/validator/index.ts");
var partial_1 = __webpack_require__(/*! ./partial */ "./src/app/entry/partial.ts");
__webpack_require__(/*! ../asset/style */ "./src/app/asset/style/index.ts");
var Entry = (function () {
    function Entry(options) {
        this.handlerOptions = partial_1.handlerOptions;
        this.version = const_1.VERSION;
        this.zIndex = const_1.ZINDEX;
        this.prefix = const_1.PREFIX;
        this.lang = "ZH_CN";
        this.width = const_1.DEFAULT_WINDOW_WIDTH;
        this.height = const_1.DEFAULT_WINDOW_HEIGHT;
        this.backgroundColor = const_1.DEFAULT_WINDOW_BACKGROUND_COLOR;
        this.handlerOptions(options);
    }
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
    ], Entry.prototype, "zIndex", void 0);
    __decorate([
        property_decorator_1.inValueOptions("ZH_CN", "EN_US")
    ], Entry.prototype, "lang", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], Entry.prototype, "width", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], Entry.prototype, "height", void 0);
    __decorate([
        property_decorator_1.isColor()
    ], Entry.prototype, "backgroundColor", void 0);
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    this.lang = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.lang, (_b !== null && _b !== void 0 ? _b : "ZH_CN"));
    this.width = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.width, (_d !== null && _d !== void 0 ? _d : this.width));
    this.height = (_f = (_e = options) === null || _e === void 0 ? void 0 : _e.height, (_f !== null && _f !== void 0 ? _f : this.height));
    this.zIndex = (_h = (_g = options) === null || _g === void 0 ? void 0 : _g.zIndex, (_h !== null && _h !== void 0 ? _h : this.zIndex));
    this.backgroundColor = (_k = (_j = options) === null || _j === void 0 ? void 0 : _j.backgroundColor, (_k !== null && _k !== void 0 ? _k : this.backgroundColor));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2FuaW1hdGUuY3NzPzliM2YiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvYXNzZXQvc3R5bGUvY29tbW9uLmNzcz8zOTQ2Iiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL3dpbmRvdy5jc3M/MWE2ZSIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLXdpbmRvdy9jb25zdC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvdWktd2luZG93L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvbXBvbmVudC91aS13aW5kb3cvcGFydGlhbC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS1kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9ldmVudC1idXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9leGNlcHRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9oZWxwZXIvZWxlbWVudC1oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS9oZWxwZXIvb2JqZWN0LWhlbHBlci50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL3ZhbGlkYXRvci9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9lbnRyeS9jb25zdC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9lbnRyeS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9lbnRyeS9wYXJ0aWFsLnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7QUNBQSw0RUFBc0I7QUFDdEIsNEVBQXNCO0FBQ3RCLDhFQUF1Qjs7Ozs7Ozs7Ozs7O0FDRnZCLHVDOzs7Ozs7Ozs7Ozs7OztBQ0FBLDhFQUE2QjtBQUM3QixvR0FBeUM7QUFPekM7SUFBQTtRQUljLFVBQUssR0FBVSxlQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFLbkMsYUFB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LEdBQUM7SUFDN0MsSUFBSSxDQUFDLE1BQU0sZUFBRyxPQUFPLDBDQUFFLE1BQU0sdUNBQUksSUFBSSxDQUFDLE1BQU0sR0FBQztJQUM3QyxJQUFJLENBQUMsZUFBZSxlQUFHLE9BQU8sMENBQUUsZUFBZSx1Q0FBSSxJQUFJLENBQUMsZUFBZSxHQUFDO0FBQzVFLENBQUM7QUFORCx3Q0FNQzs7Ozs7Ozs7Ozs7Ozs7O0FDZEQsaUZBQWdDO0FBS2hDLFNBQVMsS0FBSztJQUNWLElBQU0sS0FBSyxHQUFHLGVBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUVsQyxJQUFNLFVBQVUsR0FBZSxVQUFVLE9BQW9CO1FBQ3pELGVBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0lBRUYsVUFBVSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO0lBQ3pCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUNuQyxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFFN0IsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQUVELGtCQUFlLEtBQUssRUFBRSxDQUFDIiwiZmlsZSI6ImxheXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsYXl4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxheXhcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9jb21tb24uY3NzXCI7XHJcbmltcG9ydCBcIi4vd2luZG93LmNzc1wiO1xyXG5pbXBvcnQgXCIuL2FuaW1hdGUuY3NzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IEVudHJ5IGZyb20gXCIuLi9lbnRyeVwiO1xyXG5pbXBvcnQgRXZlbnRCdXMgZnJvbSBcIi4uL2NvcmUvZXZlbnQtYnVzXCI7XHJcbmltcG9ydCB7IEpTT05PYmplY3QgfSBmcm9tIFwiLi4vY29yZS9oZWxwZXIvdHlwZVwiO1xyXG5cclxuLyoqXHJcbiAqIOe7hOS7tuexu++8jOaJgOacieeahOe7hOS7tumDveW/hemhu+e7p+aJv+ivpeexu1xyXG4gKiBAdGVtcGxhdGUgVE9wdGlvbiDnu4Tku7blj4LmlbBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUT3B0aW9uPiB7XHJcbiAgICAvKipcclxuICAgICAqIOWFpeWPo+WvueixoVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZW50cnk6IEVudHJ5ID0gRW50cnkuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS6i+S7tuaAu+e6v+WvueixoVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZXZlbnRCdXM6IEV2ZW50QnVzID0gRXZlbnRCdXMuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7hOS7tuWUr+S4gOagh+ivhlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN5bWJvbDogc3ltYm9sID0gU3ltYm9sKFwibW9ua3NvdWxcIik7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBoYW5kbGVyT3B0aW9ucyhvcHRpb25zOiBUT3B0aW9uKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPkemAgeS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSDkuovku7blkI3np7BcclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIOa2iOaBr1xyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBzZW5kRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IEpTT05PYmplY3QgPSB7fSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXZlbnRCdXMuZW1pdChldmVudE5hbWUsIHtcclxuICAgICAgICAgICAgZGF0YXNldDogbWVzc2FnZSxcclxuICAgICAgICAgICAgZXZlbnRUYXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGV2ZW50TmFtZSxcclxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS52YWx1ZU9mKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOi+ueahhuagt+W8j1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gQm9yZGVyU3R5bGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiDngrnnirZcclxuICAgICAqL1xyXG4gICAgRE9UVEVEID0gXCJkb3R0ZWRcIixcclxuICAgIC8qKlxyXG4gICAgICog6Jma57q/XHJcbiAgICAgKi9cclxuICAgIERBU0hFRCA9IFwiZGFzaGVkXCIsXHJcbiAgICAvKipcclxuICAgICAqIOWunue6v1xyXG4gICAgICovXHJcbiAgICBTT0xJRCA9IFwic29saWRcIixcclxuICAgIC8qKlxyXG4gICAgICog5Y+M57q/XHJcbiAgICAgKi9cclxuICAgIERPVUJMRSA9IFwiZG91YmxlXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIOaUr+aMgeWKqOeUu1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gQW5pbWF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICog57yp5pS+XHJcbiAgICAgKi9cclxuICAgIFpPT00gPSBcInpvb21cIlxyXG59XHJcblxyXG4vKipcclxuICog5YGP56e7XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBPZmZzZXQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDkuK3pl7RcclxuICAgICAqL1xyXG4gICAgQ0VOVEVSID0gXCJjZW50ZXJcIixcclxuICAgIC8qKlxyXG4gICAgICog6aG26YOo5Lit6Ze0XHJcbiAgICAgKi9cclxuICAgIFRPUF9DRU5URVIgPSBcInRvcC1jZW50ZXJcIixcclxuICAgIC8qKlxyXG4gICAgICog5bqV6YOo5Lit6Ze0XHJcbiAgICAgKi9cclxuICAgIEJPVFRPTV9DRU5URVIgPSBcImJvdHRvbS1jZW50ZXJcIixcclxuICAgIC8qKlxyXG4gICAgICog5bem5LiK6KeSXHJcbiAgICAgKi9cclxuICAgIExFRlRfVE9QID0gXCJsZWZ0LXRvcFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6bkuK3pl7RcclxuICAgICAqL1xyXG4gICAgTEVGVF9NSURETEUgPSBcImxlZnQtbWlkZGxlXCIsXHJcbiAgICAvKipcclxuICAgICAqIOW3puS4i+inklxyXG4gICAgICovXHJcbiAgICBMRUZUX0JPVFRPTSA9IFwibGVmdC1ib3R0b21cIixcclxuICAgIC8qKlxyXG4gICAgICog5Y+z5LiK6KeSXHJcbiAgICAgKi9cclxuICAgIFJJR0hUX1RPUCA9IFwicmlnaHQtdG9wXCIsXHJcbiAgICAvKipcclxuICAgICAqIOWPs+S4remXtFxyXG4gICAgICovXHJcbiAgICBSSUdIVF9NSURETEUgPSBcInJpZ2h0LW1pZGRsZVwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlj7PkuIvop5JcclxuICAgICAqL1xyXG4gICAgUklHSFRfQk9UVE9NID0gXCJyaWdodC1ib3R0b21cIlxyXG59XHJcblxyXG4vKipcclxuICog6buY6K6k5pyA5bCP5a695bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9NSU5fV0lEVEg6IG51bWJlciA9IDIwMDtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTmnIDlsI/pq5jluqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX01JTl9IRUlHSFQ6IG51bWJlciA9IDIwMDtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTmnIDlpKflrr3luqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX01BWF9XSURUSDogbnVtYmVyID0gaW5uZXJXaWR0aDtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTmnIDlpKfpq5jluqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX01BWF9IRUlHSFQ6IG51bWJlciA9IGlubmVySGVpZ2h0O1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOi+ueahhuWuveW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQk9SREVSX1dJRFRIOiBudW1iZXIgPSAxO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOi+ueahhuagt+W8j1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQk9SREVSX1NUWUxFOiBCb3JkZXJTdHlsZSA9IEJvcmRlclN0eWxlLlNPTElEO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOi+ueahhuminOiJslxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQk9SREVSX0NPTE9SOiBzdHJpbmcgPSBcIiMzYmFjZWRcIjtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTovrnmoYblnIbop5JcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0JPUkRFUl9SQURJVVM6IG51bWJlciA9IDQ7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vXCI7XHJcbmltcG9ydCBVSUNvbXBvbmVudCBmcm9tIFwiLi4vdWktY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVJV2luZG93T3B0aW9uLCBCb3JkZXJPcHRpb24gfSBmcm9tIFwiLi90eXBlXCI7XHJcbmltcG9ydCB7IGlzUHN0TnVtYmVyLCBpc05vRW1wdHlPck51bGwsIGlzQm9vbGVhbiwgY29tYmluZSwgaW5WYWx1ZU9wdGlvbnMsIGlzQ29sb3IgfSBmcm9tIFwiLi4vLi4vY29yZS9kZWNvcmF0b3IvcHJvcGVydHktZGVjb3JhdG9yXCI7XHJcbmltcG9ydCB7IGFkZENTU1N0eWxlcywgYWRkQ1NTQ2xhc3NlcywgcmVtb3ZlQ1NTQ2xhc3NlcywgaGFzQ1NTQ2xhc3MgfSBmcm9tIFwiLi4vLi4vY29yZS9oZWxwZXIvZWxlbWVudC1oZWxwZXJcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uLCBERUZBVUxUX01JTl9XSURUSCwgREVGQVVMVF9NSU5fSEVJR0hULCBERUZBVUxUX01BWF9XSURUSCwgREVGQVVMVF9NQVhfSEVJR0hULCBERUZBVUxUX0JPUkRFUl9XSURUSCwgREVGQVVMVF9CT1JERVJfQ09MT1IsIERFRkFVTFRfQk9SREVSX1NUWUxFLCBERUZBVUxUX0JPUkRFUl9SQURJVVMsIEJvcmRlclN0eWxlLCBPZmZzZXQgfSBmcm9tIFwiLi9jb25zdFwiO1xyXG5pbXBvcnQgeyBjaGVja1BzdEludCwgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja0NvbG9yIH0gZnJvbSBcIi4uLy4uL2NvcmUvdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IGhhbmRsZXJPcHRpb25zIH0gZnJvbSBcIi4vcGFydGlhbFwiO1xyXG5cclxuLyoqXHJcbiAqIOeql+WPo+e7hOS7tuexu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlXaW5kb3cgZXh0ZW5kcyBDb21wb25lbnQ8VUlXaW5kb3dPcHRpb24+IGltcGxlbWVudHMgVUlDb21wb25lbnQ8VUlXaW5kb3dPcHRpb24+IHtcclxuICAgIC8qKlxyXG4gICAgICog5p6E6YCg5Ye95pWw5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBVSVdpbmRvd09wdGlvbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgPSBvcHRpb25zPy5pZDtcclxuICAgICAgICB0aGlzLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgaGFuZGxlck9wdGlvbnM6IChvcHRpb25zOiBVSVdpbmRvd09wdGlvbikgPT4gdm9pZCA9IGhhbmRsZXJPcHRpb25zO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ZSv5LiASWRcclxuICAgICAqL1xyXG4gICAgQGlzTm9FbXB0eU9yTnVsbCgpXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWuveW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSB0aGlzLmVudHJ5LndpZHRoO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6auY5bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSB0aGlzLmVudHJ5LmhlaWdodDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWwj+WuveW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIG1pbldpZHRoOiBudW1iZXIgPSBERUZBVUxUX01JTl9XSURUSDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWwj+mrmOW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIG1pbkhlaWdodDogbnVtYmVyID0gREVGQVVMVF9NSU5fSEVJR0hUO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyA5aSn5a695bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgbWF4V2lkdGg6IG51bWJlciA9IERFRkFVTFRfTUFYX1dJRFRIO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyA5aSn6auY5bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgbWF4SGVpZ2h0OiBudW1iZXIgPSBERUZBVUxUX01BWF9IRUlHSFQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlt6bovrnovrnot51cclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBsZWZ0OiBudW1iZXIgPSAoREVGQVVMVF9NQVhfV0lEVEggLSB0aGlzLndpZHRoKSAvIDI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj7Povrnovrnot51cclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyB0b3A6IG51bWJlciA9IChERUZBVUxUX01BWF9IRUlHSFQgLSB0aGlzLmhlaWdodCkgLyAyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L655qGG5qC35byPXHJcbiAgICAgKi9cclxuICAgIEBjb21iaW5lKHtcclxuICAgICAgICB3aWR0aDogY2hlY2tQc3RJbnQsIC8qKiDmraPmlbTmlbAgKi9cclxuICAgICAgICBzdHlsZTogW0JvcmRlclN0eWxlLlNPTElELCBCb3JkZXJTdHlsZS5ET1VCTEUsIEJvcmRlclN0eWxlLkRPVFRFRCwgQm9yZGVyU3R5bGUuREFTSEVEXSwgLyoqIOWPr+mAieWAvCAqL1xyXG4gICAgICAgIGNvbG9yOiBjaGVja0NvbG9yLCAgLyoqIOmdnuepuuWtl+espuS4siAqL1xyXG4gICAgICAgIHJhZGl1czogY2hlY2tQc3RJbnQgLyoqIOato+aVtOaVsCAqL1xyXG4gICAgfSwgZmFsc2UpXHJcbiAgICBwdWJsaWMgYm9yZGVyOiBCb3JkZXJPcHRpb24gfCBmYWxzZSA9IDxCb3JkZXJPcHRpb24+e1xyXG4gICAgICAgIHdpZHRoOiBERUZBVUxUX0JPUkRFUl9XSURUSCxcclxuICAgICAgICBzdHlsZTogREVGQVVMVF9CT1JERVJfU1RZTEUsXHJcbiAgICAgICAgY29sb3I6IERFRkFVTFRfQk9SREVSX0NPTE9SLFxyXG4gICAgICAgIHJhZGl1czogREVGQVVMVF9CT1JERVJfUkFESVVTXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Zi05b2xXHJcbiAgICAgKi9cclxuICAgIEBpc0Jvb2xlYW4oKVxyXG4gICAgcHVibGljIGJveFNoYWRvdzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqjnlLtcclxuICAgICAqL1xyXG4gICAgQGluVmFsdWVPcHRpb25zKEFuaW1hdGlvbi5aT09NLCBmYWxzZSlcclxuICAgIHB1YmxpYyBhbmltYXRlOiBmYWxzZSB8IEFuaW1hdGlvbiA9IEFuaW1hdGlvbi5aT09NO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6IOM5pmv6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIEBpc0NvbG9yKClcclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9IHRoaXMuZW50cnkuYmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog56qX5Y+j5YWD57Sg5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3aW5kb3dFbGVtZW50OiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65o6n5Lu25YWD57Sg5a+56LGhXHJcbiAgICAgKiBAcmV0dXJucyBIVE1MRWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwcmVzZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLndpbmRvd0VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIGVsZW1lbnQuaWQgPSBgJHt0aGlzLmVudHJ5LnByZWZpeCArIHRoaXMuaWR9YDtcclxuXHJcbiAgICAgICAgYWRkQ1NTQ2xhc3NlcyhlbGVtZW50LFxyXG4gICAgICAgICAgICBcIndpbmRvd1wiLFxyXG4gICAgICAgICAgICB0aGlzLmJveFNoYWRvdyA/IFwiYm94LXNoYWRvd1wiIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgIT09IGZhbHNlID8gXCJhbmltYXRlXCIgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UgPyBgYW5pbWF0ZS0ke3RoaXMuYW5pbWF0ZX0tc2hvd2AgOiB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICBhZGRDU1NTdHlsZXMoZWxlbWVudCxcclxuICAgICAgICAgICAgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHt0aGlzLmJhY2tncm91bmRDb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiBgJHt0aGlzLmVudHJ5LnpJbmRleH1gLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke3RoaXMud2lkdGh9cHhgLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHt0aGlzLmhlaWdodH1weGAsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogdGhpcy5tYXhXaWR0aCAhPT0gaW5uZXJXaWR0aCA/IGAke3RoaXMubWF4V2lkdGh9cHhgIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogdGhpcy5tYXhIZWlnaHQgIT09IGlubmVySGVpZ2h0ID8gYCR7dGhpcy5tYXhIZWlnaHR9cHhgIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiBgJHt0aGlzLm1pbldpZHRofXB4YCxcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogYCR7dGhpcy5taW5IZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogYCR7dGhpcy5sZWZ0fXB4YCxcclxuICAgICAgICAgICAgICAgIHRvcDogYCR7dGhpcy50b3B9cHhgLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLmJvcmRlciA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci53aWR0aH1weCAke3RoaXMuYm9yZGVyLnN0eWxlfSAke3RoaXMuYm9yZGVyLmNvbG9yfWAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3RoaXMuYm9yZGVyLnJhZGl1c31weGAsXHJcbiAgICAgICAgICAgICAgICB3ZWJraXRCb3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3RoaXMuYm9yZGVyLnJhZGl1c31weGAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vbml0b3JFdmVudCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbmRFdmVudChcIndpbmRvdzpjcmVhdGVcIiwgeyBpZDogdGhpcy5pZCB9KTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebkeWQrOS6i+S7tlxyXG4gICAgICogQHJldHVybnMgdm9pZCBcclxuICAgICAqL1xyXG4gICAgbW9uaXRvckV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy53aW5kb3dFbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2luZG93RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIChldjogQW5pbWF0aW9uRXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDmlrDlu7rmiJbmmL7npLrnqpflj6NcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGVTaG93TmFtZSA9IGBhbmltYXRlLSR7dGhpcy5hbmltYXRlfS1zaG93YDtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNDU1NDbGFzcyh0aGlzLndpbmRvd0VsZW1lbnQsIGFuaW1hdGVTaG93TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDU1NDbGFzc2VzKHRoaXMud2luZG93RWxlbWVudCwgYW5pbWF0ZVNob3dOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRFdmVudChcIndpbmRvdzpzaG93XCIsIHsgaWQ6IHRoaXMuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjaGVja0FycmF5LCBjaGVja09mVHlwZSwgY2hlY2tJblZhbHVlT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9jb3JlL3ZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUZhaWwgfSBmcm9tIFwiLi4vLi4vY29yZS9leGNlcHRpb25cIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uLCBPZmZzZXQgfSBmcm9tIFwiLi9jb25zdFwiO1xyXG5pbXBvcnQgVUlXaW5kb3cgZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgVUlXaW5kb3dPcHRpb24sIEJvcmRlck9wdGlvbiB9IGZyb20gXCIuL3R5cGVcIjtcclxuXHJcbi8qKlxyXG4gKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAqIEByZXR1cm5zIHZvaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVyT3B0aW9ucyh0aGlzOiBVSVdpbmRvdywgb3B0aW9uczogVUlXaW5kb3dPcHRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMud2lkdGggPSBvcHRpb25zPy53aWR0aCA/PyB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zPy5oZWlnaHQgPz8gdGhpcy5oZWlnaHQ7XHJcbiAgICB0aGlzLm1heFdpZHRoID0gb3B0aW9ucz8ubWF4V2lkdGggPz8gdGhpcy5tYXhXaWR0aDtcclxuICAgIHRoaXMubWF4SGVpZ2h0ID0gb3B0aW9ucz8ubWF4SGVpZ2h0ID8/IHRoaXMubWF4SGVpZ2h0O1xyXG4gICAgdGhpcy5taW5XaWR0aCA9IG9wdGlvbnM/Lm1pbldpZHRoID8/IHRoaXMubWluV2lkdGg7XHJcbiAgICB0aGlzLm1pbkhlaWdodCA9IG9wdGlvbnM/Lm1pbkhlaWdodCA/PyB0aGlzLm1pbkhlaWdodDtcclxuICAgIHRoaXMud2lkdGggPSBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCB0aGlzLndpZHRoKTtcclxuICAgIHRoaXMud2lkdGggPSBNYXRoLm1pbih0aGlzLm1heFdpZHRoLCB0aGlzLndpZHRoKTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYm9yZGVyID0gPEJvcmRlck9wdGlvbiB8IGZhbHNlPm9wdGlvbnM/LmJvcmRlciA/PyB0aGlzLmJvcmRlcjtcclxuICAgIHRoaXMuYm94U2hhZG93ID0gb3B0aW9ucz8uYm94U2hhZG93ID8/IHRoaXMuYm94U2hhZG93O1xyXG4gICAgdGhpcy5hbmltYXRlID0gPEFuaW1hdGlvbiB8IGZhbHNlPm9wdGlvbnM/LmFuaW1hdGUgPz8gdGhpcy5hbmltYXRlO1xyXG4gICAgW3RoaXMubGVmdCwgdGhpcy50b3BdID0gY2FsY09mZnNldCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgb3B0aW9ucz8ub2Zmc2V0KTtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucz8uYmFja2dyb3VuZENvbG9yID8/IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG59XHJcblxyXG4vKipcclxuICog6K6h566X56qX5Y+j5YGP56e76YePXHJcbiAqIEBwYXJhbSB3aWR0aCDlrr3luqZcclxuICogQHBhcmFtIGhlaWdodCDpq5jluqZcclxuICogQHBhcmFtIFtvZmZzZXRdIOWBj+enu1xyXG4gKiBAcmV0dXJucyBbbnVtYmVyLCBudW1iZXJdIFxyXG4gKi9cclxuZnVuY3Rpb24gY2FsY09mZnNldCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgb2Zmc2V0PzogW251bWJlciwgbnVtYmVyXSB8IE9mZnNldCk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gWyhpbm5lcldpZHRoIC0gd2lkdGgpIC8gMiwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgaWYgKGNoZWNrQXJyYXkob2Zmc2V0KSkge1xyXG4gICAgICAgIGlmIChvZmZzZXQubGVuZ3RoICE9PSAyIHx8XHJcbiAgICAgICAgICAgICFjaGVja09mVHlwZShvZmZzZXRbMF0sIFwibnVtYmVyXCIpIHx8XHJcbiAgICAgICAgICAgICFjaGVja09mVHlwZShvZmZzZXRbMV0sIFwibnVtYmVyXCIpKSB2YWxpZGF0ZUZhaWwoYFwiJHtbb2Zmc2V0XX1cIiDkuI3mmK/mnInmlYjnmoQgXCJbbnVtYmVyLG51bWJlcl1cIiDnsbvlnotgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFs8bnVtYmVyPm9mZnNldFswXSwgPG51bWJlcj5vZmZzZXRbMV1dO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjcm9vZHM6IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgMF07XHJcbiAgICBjb25zdCBvZmZzZXRPcHRpb25zID0gW1xyXG4gICAgICAgIE9mZnNldC5DRU5URVIsXHJcbiAgICAgICAgT2Zmc2V0LlRPUF9DRU5URVIsXHJcbiAgICAgICAgT2Zmc2V0LkJPVFRPTV9DRU5URVIsXHJcbiAgICAgICAgT2Zmc2V0LkxFRlRfVE9QLFxyXG4gICAgICAgIE9mZnNldC5MRUZUX01JRERMRSxcclxuICAgICAgICBPZmZzZXQuTEVGVF9CT1RUT00sXHJcbiAgICAgICAgT2Zmc2V0LlJJR0hUX1RPUCxcclxuICAgICAgICBPZmZzZXQuUklHSFRfTUlERExFLFxyXG4gICAgICAgIE9mZnNldC5SSUdIVF9CT1RUT01cclxuICAgIF07XHJcbiAgICBpZiAoY2hlY2tJblZhbHVlT3B0aW9ucyhvZmZzZXQsIC4uLm9mZnNldE9wdGlvbnMpKSB7XHJcbiAgICAgICAgc3dpdGNoICg8T2Zmc2V0Pm9mZnNldCkge1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5DRU5URVI6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbKGlubmVyV2lkdGggLSB3aWR0aCkgLyAyLCAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuVE9QX0NFTlRFUjpcclxuICAgICAgICAgICAgICAgIGNyb29kcyA9IFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIDBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LkJPVFRPTV9DRU5URVI6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbKGlubmVyV2lkdGggLSB3aWR0aCkgLyAyLCBpbm5lckhlaWdodCAtIGhlaWdodF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuTEVGVF9UT1A6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbMCwgMF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuTEVGVF9NSURETEU6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbMCwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgT2Zmc2V0LkxFRlRfQk9UVE9NOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gWzAsIGlubmVySGVpZ2h0IC0gaGVpZ2h0XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5SSUdIVF9UT1A6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbaW5uZXJXaWR0aCAtIHdpZHRoLCAwXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE9mZnNldC5SSUdIVF9NSURETEU6XHJcbiAgICAgICAgICAgICAgICBjcm9vZHMgPSBbaW5uZXJXaWR0aCAtIHdpZHRoLCAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBPZmZzZXQuUklHSFRfQk9UVE9NOlxyXG4gICAgICAgICAgICAgICAgY3Jvb2RzID0gW2lubmVyV2lkdGggLSB3aWR0aCwgaW5uZXJIZWlnaHQgLSBoZWlnaHRdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjcm9vZHM7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVGYWlsKGBcIiR7b2Zmc2V0fVwiIOS4jeaYr+acieaViOeahCBcIltudW1iZXIsbnVtYmVyXSDmiJYgWyR7b2Zmc2V0T3B0aW9uc31dXCIg57G75Z6LYCk7XHJcbn0iLCJpbXBvcnQgeyBQcm9wZXJ0eVNldHRlciwgUHJvcGVydHlEZWNvcmF0b3IgfSBmcm9tIFwiLi90eXBlXCI7XHJcbmltcG9ydCB7IGNoZWNrUHN0TnVtYmVyLCBjaGVja0luVmFsdWVPcHRpb25zLCBjaGVja05vRW1wdHlPck51bGwsIGNoZWNrT2ZUeXBlLCBjaGVja0pTT05PYmplY3QsIGNoZWNrQXJyYXksIGNoZWNrUmVnRXhwLCBjaGVja1BzdEludCwgY2hlY2tNaW4sIGNoZWNrQ29sb3IgfSBmcm9tIFwiLi4vdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IFZhbHVlT3B0aW9uIH0gZnJvbSBcIi4uL3ZhbGlkYXRvci90eXBlXCI7XHJcbmltcG9ydCB7IHZhbGlkYXRlRmFpbCB9IGZyb20gXCIuLi9leGNlcHRpb25cIjtcclxuaW1wb3J0IHsgSlNPTk9iamVjdCB9IGZyb20gXCIuLi9oZWxwZXIvdHlwZVwiO1xyXG5pbXBvcnQgeyBtZXJnZUpTT05PYmplY3QgfSBmcm9tIFwiLi4vaGVscGVyL29iamVjdC1oZWxwZXJcIjtcclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mraPmlbDlgLznsbvlnotcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQc3ROdW1iZXIoKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tQc3ROdW1iZXIobmV3VmFsdWUpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTmraPmlbDlgLznsbvlnotgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mjIflrprlj6/pgInlgLznsbvlnotcclxuICogQHBhcmFtIHZhbHVlT3B0aW9ucyDlj6/pgInlgLxcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5WYWx1ZU9wdGlvbnMoLi4udmFsdWVPcHRpb25zOiBWYWx1ZU9wdGlvbik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrSW5WYWx1ZU9wdGlvbnMobmV3VmFsdWUsIC4uLnZhbHVlT3B0aW9ucykpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeWcqCBbJHt2YWx1ZU9wdGlvbnMudG9TdHJpbmcoKX1dIOWAvOiMg+WbtOWGhWApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpemdnuepuuaIlumdnk5VTEzlrZfnrKbkuLJcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOb0VtcHR5T3JOdWxsKCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChuZXdWYWx1ZSkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOmdnuepuuWtl+espuS4smApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeW4g+WwlOexu+Wei+WAvFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4oKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tPZlR5cGUobmV3VmFsdWUsIFwiYm9vbGVhblwiKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5biD5bCU5YC8YCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l6aKc6Imy5YC8XHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29sb3IoKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tDb2xvcihuZXdWYWx1ZSkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahENTU+minOiJsuWAvGApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeato+aVtOaVsFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BzdEludCgpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja1BzdEludChuZXdWYWx1ZSkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOato+aVtOaVsGApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeacgOWwj+WAvFxyXG4gKiBAcGFyYW0gdGhyZXNob2xkIOacgOWwj+mYiOWAvFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbih0aHJlc2hvbGQ6IG51bWJlcik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrTWluKG5ld1ZhbHVlLCB0aHJlc2hvbGQpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDlv4XpobvmmK/mlbDlgLznsbvlnovlubbkuJTlgLzkuI3og73lsI/kuo4gXCIke3RocmVzaG9sZH1cImApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOe7hOWQiOajgOafpemqjOivgVxyXG4gKiBAcGFyYW0ganNvbkRlY29yYXRvciDlj4LmlbDmr4/kuIDpobnoo4XppbDlmajvvIzmlK/mjIFBcnJheXxGdW5jdGlvbnxSZWdFeHBcclxuICogQHBhcmFtIGl0ZW1zIOWFtuS9meWPr+mAieWAvO+8jOWPquaUr+aMgeWfuuacrOaVsOaNruexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUoanNvbkRlY29yYXRvcjogSlNPTk9iamVjdCA9IHt9LCAuLi5pdGVtczogQXJyYXk8YW55Pik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUsIHByb3BlcnR5S2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tKU09OT2JqZWN0KG5ld1ZhbHVlKSAmJiBpdGVtcy5pbmRleE9mKG5ld1ZhbHVlKSA9PT0gLTEpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOWPguaVsOWAvGApO1xyXG4gICAgICAgIGlmIChpdGVtcy5pbmRleE9mKG5ld1ZhbHVlKSA+IC0xKSByZXR1cm4gbmV3VmFsdWU7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlID0gbmV3VmFsdWVba2V5XTtcclxuICAgICAgICAgICAgY29uc3QgZGVjb3JhdG9yID0ganNvbkRlY29yYXRvcltrZXldO1xyXG4gICAgICAgICAgICBpZiAoIWRlY29yYXRvcikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hlY2tBcnJheShkZWNvcmF0b3IpICYmIGRlY29yYXRvci5pbmRleE9mKGtleVZhbHVlKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRmFpbChgXCIke2tleVZhbHVlfVwiIOS4jeWcqCBbJHtkZWNvcmF0b3IudG9TdHJpbmcoKX1dIOWAvOiMg+WbtOWGhWApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNoZWNrT2ZUeXBlKGRlY29yYXRvciwgXCJmdW5jdGlvblwiKSAmJiAhZGVjb3JhdG9yKGtleVZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGYWlsKGBcIiR7a2V5VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5Y+C5pWw5YC8YCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNoZWNrUmVnRXhwKGRlY29yYXRvcikgJiYgIWRlY29yYXRvci50ZXN0KGtleVZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGYWlsKGBcIiR7a2V5VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5Y+C5pWw5YC8YCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3VmFsdWUgPSBtZXJnZUpTT05PYmplY3QodmFsdWUgPz8ge30sIG5ld1ZhbHVlKTtcclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOeUn+aIkOijhemlsOWZqOaguOW/g+S7o+eggVxyXG4gKiBAcGFyYW0gcHJvcGVydHlTZXR0ZXIg5bGe5oCn6K6+572u5ZmoXHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVEZWNvcmF0b3IocHJvcGVydHlTZXR0ZXI6IFByb3BlcnR5U2V0dGVyKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wZXJ0eUtleV07XHJcblxyXG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGdldDogKCkgPT4gdmFsdWUsXHJcbiAgICAgICAgICAgIHNldDogKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3Iuc2V0KG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gcHJvcGVydHlTZXR0ZXIobmV3VmFsdWUsIHByb3BlcnR5S2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2ZW50SGFuZGxlciwgTWVzc2FnZVF1ZXVlcyB9IGZyb20gXCIuL3R5cGVcIjtcclxuaW1wb3J0IHsgY2hlY2tPZlR5cGUsIGNoZWNrQXJyYXkgfSBmcm9tIFwiLi4vdmFsaWRhdG9yXCI7XHJcblxyXG4vKipcclxuICog5LqL5Lu25oC757q/57G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEJ1cyB7XHJcbiAgICAvKipcclxuICAgICAqIOengeacieWMluaehOmAoOWHveaVsO+8jOWunueOsOWNleS+i1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5raI5oGv6Zif5YiXXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbWVzc2FnZVF1ZXVlczogTWVzc2FnZVF1ZXVlcyA9IDxNZXNzYWdlUXVldWVzPnt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uR5a6a5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRLZXkg5LqL5Lu25ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRIYW5kbGVyIOS6i+S7tuWkhOeQhuWHveaVsOaIluWHveaVsOaVsOe7hFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb24oZXZlbnRLZXk6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBFdmVudEhhbmRsZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGV2ZW50S2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudFZhbHVlID0gdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrT2ZUeXBlKGV2ZW50VmFsdWUsIFwiZnVuY3Rpb25cIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1tldmVudEtleV0gPSBbPEV2ZW50SGFuZGxlcj5ldmVudFZhbHVlLCBldmVudEhhbmRsZXJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQXJyYXkoZXZlbnRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1tldmVudEtleV0gPSBbLi4uPEFycmF5PEV2ZW50SGFuZGxlcj4+ZXZlbnRWYWx1ZSwgZXZlbnRIYW5kbGVyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XSA9IGV2ZW50SGFuZGxlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj6rnu5HlrprkuIDmrKFcclxuICAgICAqIEBwYXJhbSBldmVudEtleSDkuovku7blkI3np7BcclxuICAgICAqIEBwYXJhbSBldmVudEhhbmRsZXIg5LqL5Lu25aSE55CG5Ye95pWw5oiW5Ye95pWw5pWw57uEXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbmUoZXZlbnRLZXk6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBFdmVudEhhbmRsZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldID0gZXZlbnRIYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+R6YCB5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRLZXkg5LqL5Lu25ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSDkuovku7blpITnkIblh73mlbDmiJblh73mlbDmlbDnu4RcclxuICAgICAqIEByZXR1cm5zIHZvaWQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbWl0KGV2ZW50S2V5OiBzdHJpbmcsIG1lc3NhZ2U6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGV2ZW50S2V5KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBldmVudFZhbHVlID0gdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XTtcclxuICAgICAgICBpZiAoY2hlY2tPZlR5cGUoZXZlbnRWYWx1ZSwgXCJmdW5jdGlvblwiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICg8RXZlbnRIYW5kbGVyPmV2ZW50VmFsdWUpKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2hlY2tBcnJheShldmVudFZhbHVlKSkge1xyXG4gICAgICAgICAgICAoPEFycmF5PEV2ZW50SGFuZGxlcj4+ZXZlbnRWYWx1ZSkubWFwKGhhbmRsZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudEtleSDkuovku7blkI3np7BcclxuICAgICAqIEByZXR1cm5zIHZvaWQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvZmYoZXZlbnRLZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGV2ZW50S2V5KSkgcmV0dXJuO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuovku7bmgLvnur/lrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEV2ZW50QnVzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5ZSv5LiA5Y+v55So5a+56LGhXHJcbiAgICAgKiBAcmV0dXJucyBFdmVudEJ1cyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBFdmVudEJ1cyB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRXZlbnRCdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5oqb5Ye656iL5bqP5byC5bi45L+h5oGvXHJcbiAqIEBwYXJhbSBtZXNzYWdlIOW8guW4uOeugOimgVxyXG4gKiBAcmV0dXJucyBuZXZlciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBuZXZlciB7XHJcbiAgICB0aHJvdyBFcnJvcihgXFxu57G75Z6L77ya56iL5bqP5byC5bi4XFxu5byC5bi45L+h5oGv77yaJHttZXNzYWdlfVxcbuWghuagiOS/oeaBr++8mmApO1xyXG59XHJcblxyXG4vKipcclxuICog5oqb5Ye66aqM6K+B5aSx6LSl5L+h5oGvXHJcbiAqIEBwYXJhbSBtZXNzYWdlIOmUmeivr+S/oeaBr1xyXG4gKiBAcmV0dXJucyBuZXZlciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZhaWwobWVzc2FnZTogc3RyaW5nKTogbmV2ZXIge1xyXG4gICAgdGhyb3cgRXJyb3IoYFxcbuexu+Wei++8mumqjOivgemUmeivr1xcbumUmeivr+S/oeaBr++8miR7bWVzc2FnZX1cXG7loIbmoIjkv6Hmga/vvJpgKTtcclxufSIsImltcG9ydCB7IFBSRUZJWCB9IGZyb20gXCIuLi8uLi9lbnRyeS9jb25zdFwiO1xyXG5cclxuLyoqXHJcbiAqIOaJuemHj+a3u+WKoOWFg+e0oOagt+W8j1xyXG4gKiBAcGFyYW0gZWxlbWVudCDlhYPntKDlr7nosaFcclxuICogQHBhcmFtIGNzc1N0eWxlcyDmoLflvI/ooajlr7nosaFcclxuICogQHJldHVybnMgdm9pZCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDU1NTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLCBjc3NTdHlsZXM6IENTU1N0eWxlRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIGZvciAoY29uc3QgY3NzUHJvcCBpbiBjc3NTdHlsZXMpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlW2Nzc1Byb3BdID0gY3NzU3R5bGVzW2Nzc1Byb3BdID8/IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmt7vliqBDU1MgQ2xhc3NcclxuICog6buY6K6k5YmN57yA5Li6IF9fUFJFRklYX1/vvIzlpoLmnpxjbGFzc+WJjemdouW4piAhIOWImeaXoOmcgOa3u+WKoOWJjee8gFxyXG4gKiBAcGFyYW0gZWxlbWVudCDlhYPntKDlr7nosaFcclxuICogQHBhcmFtIGNsYXNzZXMgY2xhc3PliJfooahcclxuICogQHJldHVybnMgSFRNTEVsZW1lbnQgfCBudWxsIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLCAuLi5jbGFzc2VzOiBBcnJheTxzdHJpbmcgfCB1bmRlZmluZWQ+KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudCwgZnVuY3Rpb24gKGN1cnJlbnRDbGFzc2VzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlciwgaXRlbUNsYXNzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIX5pbmRleCkge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2xhc3Nlcy5wdXNoKGl0ZW1DbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgUFJFRklYLCAuLi5jbGFzc2VzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOenu+mZpENTUyBDbGFzc1xyXG4gKiDpu5jorqTliY3nvIDkuLogX19QUkVGSVhfX++8jOWmguaenGNsYXNz5YmN6Z2i5bimICEg5YiZ5peg6ZyA5re75Yqg5YmN57yAXHJcbiAqIEBwYXJhbSBlbGVtZW50IOWFg+e0oOWvueixoVxyXG4gKiBAcGFyYW0gY2xhc3NlcyBjbGFzc+WIl+ihqFxyXG4gKiBAcmV0dXJucyBIVE1MRWxlbWVudCB8IG51bGwgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ1NTQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsIC4uLmNsYXNzZXM6IHN0cmluZ1tdKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudCwgZnVuY3Rpb24gKGN1cnJlbnRDbGFzc2VzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgY3VycmVudENsYXNzZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBQUkVGSVgsIC4uLmNsYXNzZXMpO1xyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5YyF5ZCrQ1NTIENsYXNzXHJcbiAqIOm7mOiupOWJjee8gOS4uiBfX1BSRUZJWF9f77yM5aaC5p6cY2xhc3PliY3pnaLluKYgISDliJnml6DpnIDmt7vliqDliY3nvIBcclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57Sg5a+56LGhXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgY2xhc3PliJfooahcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNDU1NDbGFzcyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsIGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrL2cpO1xyXG4gICAgY29uc3QgY2xzID0gY2xhc3NOYW1lLmluZGV4T2YoXCIhXCIpID09PSAwID8gY2xhc3NOYW1lLnN1YnN0cigxKSA6IFBSRUZJWCArIGNsYXNzTmFtZTtcclxuICAgIGNvbnN0IGluZGV4ID0gY3VycmVudENsYXNzZXMuaW5kZXhPZihjbHMpO1xyXG4gICAgcmV0dXJuICEhfmluZGV4O1xyXG59XHJcblxyXG4vKipcclxuICog5pu05pawQ1NTIENsYXNz77yM5YyF5ous5paw5aKe44CB5pu05paw44CB5Yig6ZmkXHJcbiAqIOm7mOiupOWJjee8gOS4uiBfX1BSRUZJWF9f77yM5aaC5p6cY2xhc3PliY3pnaLluKYgISDliJnml6DpnIDmt7vliqDliY3nvIBcclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57Sg5a+56LGhXHJcbiAqIEBwYXJhbSBoYW5kbGVyIOabtOaWsOaWueW8j1xyXG4gKiBAcGFyYW0gW3ByZWZpeF0g5YmN57yA56ymXHJcbiAqIEBwYXJhbSBjbGFzc2VzIGNsYXNz5YiX6KGoXHJcbiAqIEByZXR1cm5zIEhUTUxFbGVtZW50IHwgbnVsbCBcclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnQsIGhhbmRsZXI6IChjdXJyZW50Q2xhc3Nlczogc3RyaW5nW10sIGluZGV4OiBudW1iZXIsIGl0ZW1DbGFzczogc3RyaW5nKSA9PiB2b2lkLCBwcmVmaXg6IHN0cmluZyA9IFBSRUZJWCwgLi4uY2xhc3NlczogQXJyYXk8c3RyaW5nIHwgdW5kZWZpbmVkPik6IEhUTUxFbGVtZW50IHwgbnVsbCB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvZyk7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBjb25zdCBjbHMgPSBpdGVtLmluZGV4T2YoXCIhXCIpID09PSAwID8gaXRlbS5zdWJzdHIoMSkgOiBwcmVmaXggKyBpdGVtO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoY2xzKTtcclxuICAgICAgICAgICAgaGFuZGxlcihjdXJyZW50Q2xhc3NlcywgaW5kZXgsIGNscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKFwiIFwiKS50cmltKCk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufSIsImltcG9ydCB7IGNoZWNrSlNPTk9iamVjdCB9IGZyb20gXCIuLi92YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgSlNPTk9iamVjdCB9IGZyb20gXCIuL3R5cGVcIjtcclxuXHJcbi8qKlxyXG4gKiDlhYvpmoZKU09O5a+56LGhXHJcbiAqIEBwYXJhbSBzb3VyY2Ug5Y6fSlNPTuexu+Wei+WvueixoVxyXG4gKiBAcmV0dXJucyDlhYvpmoblkI7nmoRKU09O57G75Z6L5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVKU09OT2JqZWN0PFQgZXh0ZW5kcyBKU09OT2JqZWN0Pihzb3VyY2U6IFQpOiBUIHtcclxuICAgIGNvbnN0IG5ld09iamVjdCA9IDxhbnk+e307XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xyXG4gICAgICAgIG5ld09iamVjdFtrZXldID0gY2hlY2tKU09OT2JqZWN0KHNvdXJjZVtrZXldKSA/IGNsb25lSlNPTk9iamVjdChzb3VyY2Vba2V5XSkgOiBzb3VyY2Vba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdPYmplY3QgYXMgVDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWQiOW5tkpTT07lr7nosaFcclxuICogQHBhcmFtIHNvdXJjZSDmupBKU09O57G75Z6L5a+56LGhXHJcbiAqIEBwYXJhbSBkZXN0IOebruagh0pTT07nsbvlnovlr7nosaFcclxuICogQHJldHVybnMg5ZCI5bm25ZCO55qESlNPTuexu+Wei+WvueixoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSlNPTk9iamVjdDxUIGV4dGVuZHMgSlNPTk9iamVjdD4oc291cmNlOiBULCBkZXN0OiBUKTogVCB7XHJcbiAgICBjb25zdCBuZXdPYmplY3QgPSA8YW55PmNsb25lSlNPTk9iamVjdChzb3VyY2UpO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRlc3QpKSB7XHJcbiAgICAgICAgaWYgKG5ld09iamVjdFtrZXldID09PSB1bmRlZmluZWQgfHwgIWNoZWNrSlNPTk9iamVjdChkZXN0W2tleV0pKSB7XHJcbiAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gZGVzdFtrZXldO1xyXG5cclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld09iamVjdFtrZXldID0gbWVyZ2VKU09OT2JqZWN0KG5ld09iamVjdFtrZXldLCBkZXN0W2tleV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld09iamVjdCBhcyBUO1xyXG59XHJcbiIsImltcG9ydCB7IENhblR5cGVvZiwgVmFsdWVPcHRpb24gfSBmcm9tIFwiLi90eXBlXCI7XHJcblxyXG4vKipcclxuICog5qOA5p+l6IO95aSf6KKrIHR5cGVvZiDnmoTnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSB0eXBlTmFtZXMg57G75Z6L6ZuG5ZCIXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPZlR5cGUoZGF0YTogYW55LCAuLi50eXBlTmFtZXM6IEFycmF5PENhblR5cGVvZj4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlTmFtZXMuaW5kZXhPZih0eXBlb2YgZGF0YSkgPiAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+aVtOaVsOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ludChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm51bWJlclwiKSAmJiAoL15cXC0/WzAtOV0rJC8udGVzdChkYXRhKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mraPmlbTmlbDnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQc3RJbnQoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tJbnQoZGF0YSkgJiYgZGF0YSA+PSAwO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5q2j5pWw5YC857G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUHN0TnVtYmVyKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwibnVtYmVyXCIpICYmIGRhdGEgPj0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr0pTT07lr7nosaHnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tKU09OT2JqZWN0KGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpLnRvTG93ZXJDYXNlKCkgPT09IFwiW29iamVjdCBvYmplY3RdXCIgJiZcclxuICAgICAgICAhZGF0YS5sZW5ndGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mlbDnu4Tlr7nosaHnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBcnJheShkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEpO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5oyH5a6a57G75Z6L5pWw57uE5a+56LGh57G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gY2hlY2tJdGVtIOaVsOe7hOmhueajgOafpeWHveaVsFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXJyYXlFYWNoU2FtZShkYXRhOiBhbnksIGNoZWNrSXRlbTogKGl0ZW06IGFueSkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGxldCBpc1NhbWVBcnJheSA9IHRydWU7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgIGlmICghY2hlY2tJdGVtKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGlzU2FtZUFycmF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNTYW1lQXJyYXk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XlrZfnrKbkuLLmmK/lkKbljIXlkKvmjIflrprlrZfnrKZcclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEBwYXJhbSBjaGFyYWN0ZXIg5a2X56ymXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb250YWlucyhkYXRhOiBhbnksIGNoYXJhY3Rlcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIikgJiYgZGF0YS5pbmRleE9mKGNoYXJhY3RlcikgPiAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+aMh+WumuWPr+mAieWAvOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHZhbHVlT3B0aW9ucyDlj6/pgInlgLxcclxuICogQHJldHVybnMgYm9vbGVhblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSW5WYWx1ZU9wdGlvbnMoZGF0YTogYW55LCAuLi52YWx1ZU9wdGlvbnM6IFZhbHVlT3B0aW9uKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJib29sZWFuXCIsIFwibnVtYmVyXCIsIFwic3RyaW5nXCIsIFwidW5kZWZpbmVkXCIsIFwib2JqZWN0XCIpICYmIHZhbHVlT3B0aW9ucy5pbmRleE9mKGRhdGEpID4gLTE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XlrZfnrKbkuLLplb/luqbmmK/lkKbmu6HotrPmnIDlsI/plb/luqZcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSB0aHJlc2hvbGQg6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW5MZW5ndGgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwic3RyaW5nXCIpICYmIGRhdGEubGVuZ3RoID49IHRocmVzaG9sZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeWtl+espuS4sumVv+W6puaYr+WQpua7oei2s+acgOWkp+mVv+W6plxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHRocmVzaG9sZCDpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01heExlbmd0aChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIikgJiYgZGF0YS5sZW5ndGggPD0gdGhyZXNob2xkO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5a2X56ym5Liy6ZW/5bqm5piv5ZCm5ruh6Laz5Yy66Ze06ZW/5bqmXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gbWluVGhyZXNob2xkIOacgOWwj+mYiOWAvFxyXG4gKiBAcGFyYW0gbWF4VGhyZXNob2xkIOacgOWkp+mYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTGVuZ3RoKGRhdGE6IGFueSwgbWluVGhyZXNob2xkOiBudW1iZXIsIG1heFRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tNaW5MZW5ndGgoZGF0YSwgbWluVGhyZXNob2xkKSAmJiBjaGVja01heExlbmd0aChkYXRhLCBtYXhUaHJlc2hvbGQpO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5pWw5YC85piv5ZCm5aSn5LqO5p+Q5Liq5YC8XHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gdGhyZXNob2xkIOmYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWluKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm51bWJlclwiKSAmJiBkYXRhID49IHRocmVzaG9sZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaVsOWAvOaYr+WQpuWwj+S6juafkOS4quWAvFxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHRocmVzaG9sZCDpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01heChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJudW1iZXJcIikgJiYgZGF0YSA8PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmlbDlgLzmmK/lkKblnKjmn5DkuKrljLrpl7TlhoVcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSBtaW5UaHJlc2hvbGQg5pyA5bCP6ZiI5YC8XHJcbiAqIEBwYXJhbSBtYXhUaHJlc2hvbGQg5pyA5aSn6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSYW5nZShkYXRhOiBhbnksIG1pblRocmVzaG9sZDogbnVtYmVyLCBtYXhUaHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrTWluKGRhdGEsIG1pblRocmVzaG9sZCkgJiYgY2hlY2tNYXgoZGF0YSwgbWF4VGhyZXNob2xkKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeepuuaIlk5VTEzlrZfnrKbkuLJcclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbXB0eU9yTnVsbChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkYXRhID09PSBudWxsIHx8IChjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmxlbmd0aCA9PT0gMCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XpnZ7nqbrmiJbpnZ5OVUxM5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTm9FbXB0eU9yTnVsbChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmxlbmd0aCA+IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mraPliJnooajovr7lvI9cclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZWdFeHAoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZGF0YSBpbnN0YW5jZW9mIFJlZ0V4cDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+minOiJsuWAvFxyXG4gKiBAcGFyYW0gZGF0YSDmlbDlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbG9yKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgdmFyIGJpbmFyeVJlZyA9IC9eIyhbMC05YS1mXXs2fXxbMC05YS1mXXszfSkkL2k7XHJcbiAgICB2YXIgcmdiUmV4ID0gL15yZ2JcXCgoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCkkL2k7XHJcbiAgICB2YXIgcmdiYVJleCA9IC9ecmdiYVxcKChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLCgxfDEuMHwwLlswLTldKVxcKSQvaTtcclxuXHJcbiAgICByZXR1cm4gYmluYXJ5UmVnLnRlc3QoZGF0YSkgfHwgcmdiUmV4LnRlc3QoZGF0YSkgfHwgcmdiYVJleC50ZXN0KGRhdGEpO1xyXG59IiwiLyoqXHJcbiAqIOeJiOacrOWPt1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFZFUlNJT046IHN0cmluZyA9IFwiMy4wLjBcIjtcclxuXHJcbi8qKlxyXG4gKiDliY3nvIDnrKZcclxuICovXHJcbmV4cG9ydCBjb25zdCBQUkVGSVg6IHN0cmluZyA9IFwibGF5eC1cIjtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTlvIDlp4vlsYLmlbBcclxuICovXHJcbmV4cG9ydCBjb25zdCBaSU5ERVg6IG51bWJlciA9IDEwMDAwMDAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOeql+WPo+WuveW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0lORE9XX1dJRFRIOiBudW1iZXIgPSA4MDA7XHJcblxyXG4vKipcclxuICog6buY6K6k56qX5Y+j6auY5bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9XSU5ET1dfSEVJR0hUOiBudW1iZXIgPSA2MDA7XHJcblxyXG4vKipcclxuICog6buY6K6k56qX5Y+j6IOM5pmv6aKc6ImyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9XSU5ET1dfQkFDS0dST1VORF9DT0xPUjogc3RyaW5nID0gXCIjZmZmZmZmXCI7XHJcblxyXG4vKipcclxuICog5YaF572u5pSv5oyB6K+t6KiAXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBTdXBwb3J0TGFuZ3VhZ2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiDkuK3mlodcclxuICAgICAqL1xyXG4gICAgWkhfQ04gPSBcIlpIX0NOXCIsXHJcbiAgICAvKipcclxuICAgICAqIOiLseaWh1xyXG4gICAgICovXHJcbiAgICBFTl9VUyA9IFwiRU5fVVNcIlxyXG59IiwiaW1wb3J0IHsgRW50cnlPcHRpb24gfSBmcm9tIFwiLi90eXBlXCI7XHJcbmltcG9ydCB7IFZFUlNJT04sIFpJTkRFWCwgUFJFRklYLCBERUZBVUxUX1dJTkRPV19XSURUSCwgREVGQVVMVF9XSU5ET1dfSEVJR0hULCBERUZBVUxUX1dJTkRPV19CQUNLR1JPVU5EX0NPTE9SLCBTdXBwb3J0TGFuZ3VhZ2UgfSBmcm9tIFwiLi9jb25zdFwiO1xyXG5pbXBvcnQgeyBpc1BzdE51bWJlciwgaW5WYWx1ZU9wdGlvbnMsIGlzUHN0SW50LCBtaW4sIGlzQ29sb3IgfSBmcm9tIFwiLi4vY29yZS9kZWNvcmF0b3IvcHJvcGVydHktZGVjb3JhdG9yXCI7XHJcbmltcG9ydCB7IFVJV2luZG93T3B0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudC91aS13aW5kb3cvdHlwZVwiO1xyXG5pbXBvcnQgVUlXaW5kb3cgZnJvbSBcIi4uL2NvbXBvbmVudC91aS13aW5kb3dcIjtcclxuaW1wb3J0IHsgRXZlbnRTZXR0ZXIgfSBmcm9tIFwiLi4vY29yZS9ldmVudC1idXMvdHlwZVwiO1xyXG5pbXBvcnQgRXZlbnRCdXMgZnJvbSBcIi4uL2NvcmUvZXZlbnQtYnVzXCI7XHJcbmltcG9ydCB7IGNoZWNrT2ZUeXBlIH0gZnJvbSBcIi4uL2NvcmUvdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IGhhbmRsZXJPcHRpb25zIH0gZnJvbSBcIi4vcGFydGlhbFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vYXNzZXQvc3R5bGVcIjtcclxuXHJcblxyXG4vKipcclxuICog5YWl5Y+j5Y2V5L6L57G777yM5om/6L29552A5YWo5bGA5pWw5o2u5a2Y5YKoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyeSB7XHJcbiAgICAvKipcclxuICAgICAqIOengeacieWMluaehOmAoOWHveaVsO+8jOWunueOsOWNleS+i1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEVudHJ5T3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWkhOeQhuWIneWni+S8oOWFpeWPguaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZXJPcHRpb25zOiAob3B0aW9uczogRW50cnlPcHRpb24pID0+IHZvaWQgPSBoYW5kbGVyT3B0aW9ucztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeJiOacrOWPt1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nID0gVkVSU0lPTjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOm7mOiupOWxguaVsCzkuI3og73lsI/kuo4xMDAwXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdEludCgpXHJcbiAgICBAbWluKDEwMDApXHJcbiAgICBwdWJsaWMgekluZGV4OiBudW1iZXIgPSBaSU5ERVg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliY3nvIDnrKZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHByZWZpeDogc3RyaW5nID0gUFJFRklYO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6buY6K6k6K+t6KiAXHJcbiAgICAgKi9cclxuICAgIEBpblZhbHVlT3B0aW9ucyhTdXBwb3J0TGFuZ3VhZ2UuWkhfQ04sIFN1cHBvcnRMYW5ndWFnZS5FTl9VUylcclxuICAgIHB1YmxpYyBsYW5nOiBTdXBwb3J0TGFuZ3VhZ2UgPSBTdXBwb3J0TGFuZ3VhZ2UuWkhfQ047XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpu5jorqTnqpflj6PliJ3lp4vljJblrr3luqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gREVGQVVMVF9XSU5ET1dfV0lEVEg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpu5jorqTnqpflj6PliJ3lp4vljJbpq5jluqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IERFRkFVTFRfV0lORE9XX0hFSUdIVDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOm7mOiupOiDjOaZr+minOiJslxyXG4gICAgICovXHJcbiAgICBAaXNDb2xvcigpXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSBERUZBVUxUX1dJTkRPV19CQUNLR1JPVU5EX0NPTE9SO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog55uR5ZCs5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gcXVldWVzIOS6i+S7tumYn+WIl1xyXG4gICAgICovXHJcbiAgICBvbihxdWV1ZXM6IEV2ZW50U2V0dGVyID0ge30pOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50S2V5IGluIHF1ZXVlcykge1xyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gcXVldWVzW2V2ZW50S2V5XTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrT2ZUeXBlKGhhbmRsZXIsIFwiZnVuY3Rpb25cIikpIHtcclxuICAgICAgICAgICAgICAgIEV2ZW50QnVzLmdldEluc3RhbmNlKCkub24oZXZlbnRLZXksIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omT5byA5paw56qX5Y+jXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDnqpflj6Plj4LmlbBcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgb3BlbihvcHRpb25zOiBVSVdpbmRvd09wdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHVpV2luZG93ID0gbmV3IFVJV2luZG93KG9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IHVpV2luZG93RWxlbWVudCA9IHVpV2luZG93LnByZXNlbnQoKTtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh1aVdpbmRvd0VsZW1lbnQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHVpV2luZG93RWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpnZnmgIHlrp7kvovlj5jph49cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEVudHJ5O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5ZSv5LiA5Y+v55So5a+56LGhXHJcbiAgICAgKiBAcGFyYW0gW29wdGlvbnNdIOWFpeWPo+WPguaVsFxyXG4gICAgICogQHJldHVybnMgRW50cnkgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2Uob3B0aW9uczogRW50cnlPcHRpb24gPSA8RW50cnlPcHRpb24+e30pOiBFbnRyeSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRW50cnkob3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxufSIsImltcG9ydCBFbnRyeSBmcm9tIFwiLi9cIlxyXG5pbXBvcnQgeyBFbnRyeU9wdGlvbiB9IGZyb20gXCIuL3R5cGVcIjtcclxuaW1wb3J0IHsgU3VwcG9ydExhbmd1YWdlIH0gZnJvbSBcIi4vY29uc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICogQHBhcmFtIG9wdGlvbnMg5o6n5Lu25pSv5oyB5Lyg5YWl5Y+v6YCJ5Y+C5pWwXHJcbiAqIEByZXR1cm5zIHZvaWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVyT3B0aW9ucyh0aGlzOiBFbnRyeSwgb3B0aW9uczogRW50cnlPcHRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMubGFuZyA9IG9wdGlvbnM/LmxhbmcgPz8gU3VwcG9ydExhbmd1YWdlLlpIX0NOO1xyXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnM/LndpZHRoID8/IHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnM/LmhlaWdodCA/PyB0aGlzLmhlaWdodDtcclxuICAgIHRoaXMuekluZGV4ID0gb3B0aW9ucz8uekluZGV4ID8/IHRoaXMuekluZGV4O1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zPy5iYWNrZ3JvdW5kQ29sb3IgPz8gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbn0iLCJpbXBvcnQgeyBFbnRyeU92ZXJ0LCBFbnRyeU9wdGlvbiB9IGZyb20gXCIuL2FwcC9lbnRyeS90eXBlXCI7XHJcbmltcG9ydCBFbnRyeSBmcm9tIFwiLi9hcHAvZW50cnlcIjtcclxuXHJcbi8qKlxyXG4gKiDlr7nlpJblhazlvIDmlrnms5VcclxuICovXHJcbmZ1bmN0aW9uIG92ZXJ0KCk6IEVudHJ5T3ZlcnQge1xyXG4gICAgY29uc3QgZW50cnkgPSBFbnRyeS5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5T3ZlcnQgPSA8RW50cnlPdmVydD5mdW5jdGlvbiAob3B0aW9uczogRW50cnlPcHRpb24pOiB2b2lkIHtcclxuICAgICAgICBFbnRyeS5nZXRJbnN0YW5jZShvcHRpb25zKTtcclxuICAgIH07XHJcblxyXG4gICAgZW50cnlPdmVydC5vbiA9IGVudHJ5Lm9uO1xyXG4gICAgZW50cnlPdmVydC52ZXJzaW9uID0gZW50cnkudmVyc2lvbjtcclxuICAgIGVudHJ5T3ZlcnQub3BlbiA9IGVudHJ5Lm9wZW47XHJcblxyXG4gICAgcmV0dXJuIGVudHJ5T3ZlcnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG92ZXJ0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==