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
exports.DEFAULT_MIN_WIDTH = 200;
exports.DEFAULT_MIN_HEIGHT = 200;
exports.DEFAULT_MAX_WIDTH = innerWidth;
exports.DEFAULT_MAX_HEIGHT = innerHeight;
exports.DEFAULT_BORDER_WIDTH = 1;
exports.DEFAULT_BORDER_STYLE = BorderStyle.SOLID;
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
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(options) {
        var _a;
        var _this = _super.call(this) || this;
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
        _this.animate = const_1.Animation.ZOOM;
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
        this.eventBus.emit("window:create", { eventName: "window:create", id: this.id });
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
                    _this.eventBus.emit("window:show", { eventName: "window:show", id: _this.id });
                }
            });
        }
    };
    UIWindow.prototype.handlerOptions = function (options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        this.width = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.width, (_b !== null && _b !== void 0 ? _b : this.width));
        this.height = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.height, (_d !== null && _d !== void 0 ? _d : this.height));
        this.maxWidth = (_f = (_e = options) === null || _e === void 0 ? void 0 : _e.maxWidth, (_f !== null && _f !== void 0 ? _f : this.maxWidth));
        this.maxHeight = (_h = (_g = options) === null || _g === void 0 ? void 0 : _g.maxHeight, (_h !== null && _h !== void 0 ? _h : this.maxHeight));
        this.minWidth = (_k = (_j = options) === null || _j === void 0 ? void 0 : _j.minWidth, (_k !== null && _k !== void 0 ? _k : this.minWidth));
        this.minHeight = (_m = (_l = options) === null || _l === void 0 ? void 0 : _l.minHeight, (_m !== null && _m !== void 0 ? _m : this.minHeight));
        this.width = Math.max(this.minWidth, this.width);
        this.width = Math.min(this.maxWidth, this.width);
        this.height = Math.max(this.minHeight, this.height);
        this.height = Math.min(this.maxHeight, this.height);
        this.border = (_p = (_o = options) === null || _o === void 0 ? void 0 : _o.border, (_p !== null && _p !== void 0 ? _p : this.border));
        this.boxShadow = (_r = (_q = options) === null || _q === void 0 ? void 0 : _q.boxShadow, (_r !== null && _r !== void 0 ? _r : this.boxShadow));
        this.animate = (_t = (_s = options) === null || _s === void 0 ? void 0 : _s.animate, (_t !== null && _t !== void 0 ? _t : this.animate));
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
            style: [const_1.BorderStyle.SOLID, const_1.BorderStyle.DOUBLE, const_1.BorderStyle.DOTTED, const_1.BorderStyle.DASHED],
            color: validator_1.checkNoEmptyOrNull,
            radius: validator_1.checkPstInt
        }, false)
    ], UIWindow.prototype, "border", void 0);
    __decorate([
        property_decorator_1.isBoolean()
    ], UIWindow.prototype, "boxShadow", void 0);
    __decorate([
        property_decorator_1.inValueOptions(const_1.Animation.ZOOM, false)
    ], UIWindow.prototype, "animate", void 0);
    return UIWindow;
}(__1.default));
exports.default = UIWindow;


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
__webpack_require__(/*! ../asset/style */ "./src/app/asset/style/index.ts");
var Entry = (function () {
    function Entry(options) {
        this.version = const_1.VERSION;
        this.zIndex = const_1.ZINDEX;
        this.prefix = const_1.PREFIX;
        this.lang = const_1.SupportLanguage.ZH_CN;
        this.width = const_1.DEFAULT_WINDOW_WIDTH;
        this.height = const_1.DEFAULT_WINDOW_HEIGHT;
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
    Entry.prototype.handlerOptions = function (options) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.lang = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.lang, (_b !== null && _b !== void 0 ? _b : const_1.SupportLanguage.ZH_CN));
        this.width = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.width, (_d !== null && _d !== void 0 ? _d : this.width));
        this.height = (_f = (_e = options) === null || _e === void 0 ? void 0 : _e.height, (_f !== null && _f !== void 0 ? _f : this.height));
        this.zIndex = (_h = (_g = options) === null || _g === void 0 ? void 0 : _g.zIndex, (_h !== null && _h !== void 0 ? _h : this.zIndex));
    };
    __decorate([
        property_decorator_1.isPstInt(),
        property_decorator_1.min(1000)
    ], Entry.prototype, "zIndex", void 0);
    __decorate([
        property_decorator_1.inValueOptions(const_1.SupportLanguage.ZH_CN, const_1.SupportLanguage.EN_US)
    ], Entry.prototype, "lang", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], Entry.prototype, "width", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], Entry.prototype, "height", void 0);
    return Entry;
}());
exports.default = Entry;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2FuaW1hdGUuY3NzPzliM2YiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvYXNzZXQvc3R5bGUvY29tbW9uLmNzcz8zOTQ2Iiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL3dpbmRvdy5jc3M/MWE2ZSIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLXdpbmRvdy9jb25zdC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvdWktd2luZG93L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5LWRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL2V2ZW50LWJ1cy9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL2V4Y2VwdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL2hlbHBlci9lbGVtZW50LWhlbHBlci50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL2hlbHBlci9vYmplY3QtaGVscGVyLnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvcmUvdmFsaWRhdG9yL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2VudHJ5L2NvbnN0LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2VudHJ5L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7QUNBQSw0RUFBc0I7QUFDdEIsNEVBQXNCO0FBQ3RCLDhFQUF1Qjs7Ozs7Ozs7Ozs7O0FDRnZCLHVDOzs7Ozs7Ozs7Ozs7OztBQ0FBLDhFQUE2QjtBQUM3QixvR0FBeUM7QUFNekM7SUFBQTtRQUljLFVBQUssR0FBVSxlQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFLbkMsYUFBUSxHQUFhLG1CQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFLOUMsV0FBTSxHQUFXLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQVFoRCxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJELElBQVksV0FpQlg7QUFqQkQsV0FBWSxXQUFXO0lBSW5CLGdDQUFpQjtJQUlqQixnQ0FBaUI7SUFJakIsOEJBQWU7SUFJZixnQ0FBaUI7QUFDckIsQ0FBQyxFQWpCVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQWlCdEI7QUFLRCxJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFJakIsMEJBQWE7QUFDakIsQ0FBQyxFQUxXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBS3BCO0FBS1kseUJBQWlCLEdBQVcsR0FBRyxDQUFDO0FBS2hDLDBCQUFrQixHQUFXLEdBQUcsQ0FBQztBQUtqQyx5QkFBaUIsR0FBVyxVQUFVLENBQUM7QUFLdkMsMEJBQWtCLEdBQVcsV0FBVyxDQUFDO0FBS3pDLDRCQUFvQixHQUFXLENBQUMsQ0FBQztBQUtqQyw0QkFBb0IsR0FBZ0IsV0FBVyxDQUFDLEtBQUssQ0FBQztBQUt0RCw0QkFBb0IsR0FBVyxTQUFTLENBQUM7QUFLekMsNkJBQXFCLEdBQVcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEUvQyx5RUFBNEI7QUFHNUIsZ0pBQTJIO0FBQzNILDhIQUE4RztBQUM5RywyRkFBd047QUFDeE4sdUdBQXVFO0FBS3ZFO0lBQXNDLDRCQUF5QjtJQUkzRCxrQkFBbUIsT0FBdUI7O1FBQTFDLFlBQ0ksaUJBQU8sU0FJVjtRQVlNLFdBQUssR0FBVyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQU1qQyxZQUFNLEdBQVcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFNbkMsY0FBUSxHQUFXLHlCQUFpQixDQUFDO1FBTXJDLGVBQVMsR0FBVywwQkFBa0IsQ0FBQztRQU12QyxjQUFRLEdBQVcseUJBQWlCLENBQUM7UUFNckMsZUFBUyxHQUFXLDBCQUFrQixDQUFDO1FBTXZDLFVBQUksR0FBVyxDQUFDLHlCQUFpQixHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFNcEQsU0FBRyxHQUFXLENBQUMsMEJBQWtCLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQVdyRCxZQUFNLEdBQXVDO1lBQ2hELEtBQUssRUFBRSw0QkFBb0I7WUFDM0IsS0FBSyxFQUFFLDRCQUFvQjtZQUMzQixLQUFLLEVBQUUsNEJBQW9CO1lBQzNCLE1BQU0sRUFBRSw2QkFBcUI7U0FDaEMsQ0FBQztRQU1LLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFNMUIsYUFBTyxHQUFzQixpQkFBUyxDQUFDLElBQUksQ0FBQztRQUs1QyxtQkFBYSxHQUEwQixJQUFJLENBQUM7UUF6Ri9DLEtBQUksQ0FBQyxFQUFFLFNBQUcsT0FBTywwQ0FBRSxFQUFFLENBQUM7UUFDdEIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7SUFDakMsQ0FBQztJQTZGRCwwQkFBTyxHQUFQO1FBQ0ksSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixPQUFPLENBQUMsRUFBRSxHQUFHLE1BQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBRTlDLDhCQUFhLENBQUMsT0FBTyxFQUNqQixRQUFRLEVBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQ3pDLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDOUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQVcsSUFBSSxDQUFDLE9BQU8sVUFBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6RSw2QkFBWSxDQUFDLE9BQU8sRUFDSztZQUNqQixNQUFNLEVBQUUsS0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQVE7WUFDOUIsS0FBSyxFQUFLLElBQUksQ0FBQyxLQUFLLE9BQUk7WUFDeEIsTUFBTSxFQUFLLElBQUksQ0FBQyxNQUFNLE9BQUk7WUFDMUIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBSSxJQUFJLENBQUMsUUFBUSxPQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDcEUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBSSxJQUFJLENBQUMsU0FBUyxPQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDeEUsUUFBUSxFQUFLLElBQUksQ0FBQyxRQUFRLE9BQUk7WUFDOUIsU0FBUyxFQUFLLElBQUksQ0FBQyxTQUFTLE9BQUk7WUFDaEMsSUFBSSxFQUFLLElBQUksQ0FBQyxJQUFJLE9BQUk7WUFDdEIsR0FBRyxFQUFLLElBQUksQ0FBQyxHQUFHLE9BQUk7WUFDcEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFdBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFPO1lBQ3RFLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxPQUFJO1lBQzdCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLE9BQUk7U0FDaEMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFNRCwrQkFBWSxHQUFaO1FBQUEsaUJBZUM7UUFkRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFBRSxPQUFPO1FBRWhDLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsVUFBQyxFQUFrQjtnQkFHbkUsSUFBTSxlQUFlLEdBQUcsYUFBVyxLQUFJLENBQUMsT0FBTyxVQUFPLENBQUM7Z0JBQ3ZELElBQUksNEJBQVcsQ0FBQyxLQUFJLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxFQUFFO29CQUNsRCxpQ0FBZ0IsQ0FBQyxLQUFJLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO29CQUN0RCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxLQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFDaEY7WUFFTCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQU9ELGlDQUFjLEdBQWQsVUFBZSxPQUF1Qjs7UUFDbEMsSUFBSSxDQUFDLEtBQUssZUFBRyxPQUFPLDBDQUFFLEtBQUssdUNBQUksSUFBSSxDQUFDLEtBQUssR0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxlQUFHLE9BQU8sMENBQUUsTUFBTSx1Q0FBSSxJQUFJLENBQUMsTUFBTSxHQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLGVBQUcsT0FBTywwQ0FBRSxRQUFRLHVDQUFJLElBQUksQ0FBQyxRQUFRLEdBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsZUFBRyxPQUFPLDBDQUFFLFNBQVMsdUNBQUksSUFBSSxDQUFDLFNBQVMsR0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxlQUFHLE9BQU8sMENBQUUsUUFBUSx1Q0FBSSxJQUFJLENBQUMsUUFBUSxHQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLGVBQUcsT0FBTywwQ0FBRSxTQUFTLHVDQUFJLElBQUksQ0FBQyxTQUFTLEdBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLFNBQUcsTUFBc0IsT0FBTywwQ0FBRSxNQUFNLHVDQUFJLElBQUksQ0FBQyxNQUFNLEdBQUM7UUFDbkUsSUFBSSxDQUFDLFNBQVMsZUFBRyxPQUFPLDBDQUFFLFNBQVMsdUNBQUksSUFBSSxDQUFDLFNBQVMsR0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxTQUFHLE1BQW1CLE9BQU8sMENBQUUsT0FBTyx1Q0FBSSxJQUFJLENBQUMsT0FBTyxHQUFDO0lBQ3ZFLENBQUM7SUFuS0Q7UUFEQyxvQ0FBZSxFQUFFO3dDQUNTO0lBTTNCO1FBREMsZ0NBQVcsRUFBRTsyQ0FDMEI7SUFNeEM7UUFEQyxnQ0FBVyxFQUFFOzRDQUM0QjtJQU0xQztRQURDLGdDQUFXLEVBQUU7OENBQzhCO0lBTTVDO1FBREMsZ0NBQVcsRUFBRTsrQ0FDZ0M7SUFNOUM7UUFEQyxnQ0FBVyxFQUFFOzhDQUM4QjtJQU01QztRQURDLGdDQUFXLEVBQUU7K0NBQ2dDO0lBTTlDO1FBREMsZ0NBQVcsRUFBRTswQ0FDNkM7SUFNM0Q7UUFEQyxnQ0FBVyxFQUFFO3lDQUM4QztJQVc1RDtRQU5DLDRCQUFPLENBQUM7WUFDTCxLQUFLLEVBQUUsdUJBQVc7WUFDbEIsS0FBSyxFQUFFLENBQUMsbUJBQVcsQ0FBQyxLQUFLLEVBQUUsbUJBQVcsQ0FBQyxNQUFNLEVBQUUsbUJBQVcsQ0FBQyxNQUFNLEVBQUUsbUJBQVcsQ0FBQyxNQUFNLENBQUM7WUFDdEYsS0FBSyxFQUFFLDhCQUFrQjtZQUN6QixNQUFNLEVBQUUsdUJBQVc7U0FDdEIsRUFBRSxLQUFLLENBQUM7NENBTVA7SUFNRjtRQURDLDhCQUFTLEVBQUU7K0NBQ3FCO0lBTWpDO1FBREMsbUNBQWMsQ0FBQyxpQkFBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7NkNBQ2E7SUF3RnZELGVBQUM7Q0FBQSxDQW5McUMsV0FBUyxHQW1MOUM7a0JBbkxvQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjdCLCtGQUFxSztBQUVySywrRkFBNEM7QUFFNUMsbUhBQTBEO0FBTTFELFNBQWdCLFdBQVc7SUFDdkIsT0FBTyxpQkFBaUIsQ0FBQyxVQUFDLFFBQVE7UUFDOUIsSUFBSSxDQUFDLDBCQUFjLENBQUMsUUFBUSxDQUFDO1lBQUUsd0JBQVksQ0FBQyxPQUFJLFFBQVEsZ0ZBQWdCLENBQUMsQ0FBQztRQUUxRSxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCxrQ0FNQztBQU9ELFNBQWdCLGNBQWM7SUFBQyxzQkFBNEI7U0FBNUIsVUFBNEIsRUFBNUIscUJBQTRCLEVBQTVCLElBQTRCO1FBQTVCLGlDQUE0Qjs7SUFDdkQsT0FBTyxpQkFBaUIsQ0FBQyxVQUFDLFFBQVE7UUFDOUIsSUFBSSxDQUFDLCtCQUFtQiwrQkFBQyxRQUFRLEdBQUssWUFBWSxFQUFDO1lBQUUsd0JBQVksQ0FBQyxPQUFJLFFBQVEseUJBQVMsWUFBWSxDQUFDLFFBQVEsRUFBRSwrQkFBUSxDQUFDLENBQUM7UUFFeEgsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBTkQsd0NBTUM7QUFNRCxTQUFnQixlQUFlO0lBQzNCLE9BQU8saUJBQWlCLENBQUMsVUFBQyxRQUFRO1FBQzlCLElBQUksQ0FBQyw4QkFBa0IsQ0FBQyxRQUFRLENBQUM7WUFBRSx3QkFBWSxDQUFDLE9BQUksUUFBUSxnRkFBZ0IsQ0FBQyxDQUFDO1FBRTlFLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQU5ELDBDQU1DO0FBTUQsU0FBZ0IsU0FBUztJQUNyQixPQUFPLGlCQUFpQixDQUFDLFVBQUMsUUFBUTtRQUM5QixJQUFJLENBQUMsdUJBQVcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO1lBQUUsd0JBQVksQ0FBQyxPQUFJLFFBQVEsb0VBQWMsQ0FBQyxDQUFDO1FBRWhGLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQU5ELDhCQU1DO0FBTUQsU0FBZ0IsUUFBUTtJQUNwQixPQUFPLGlCQUFpQixDQUFDLFVBQUMsUUFBUTtRQUM5QixJQUFJLENBQUMsdUJBQVcsQ0FBQyxRQUFRLENBQUM7WUFBRSx3QkFBWSxDQUFDLE9BQUksUUFBUSxvRUFBYyxDQUFDLENBQUM7UUFFckUsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBTkQsNEJBTUM7QUFPRCxTQUFnQixHQUFHLENBQUMsU0FBaUI7SUFDakMsT0FBTyxpQkFBaUIsQ0FBQyxVQUFDLFFBQVE7UUFDOUIsSUFBSSxDQUFDLG9CQUFRLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztZQUFFLHdCQUFZLENBQUMsT0FBSSxRQUFRLGtHQUFxQixTQUFTLE9BQUcsQ0FBQyxDQUFDO1FBRWhHLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQU5ELGtCQU1DO0FBT0QsU0FBZ0IsT0FBTyxDQUFDLGFBQThCO0lBQTlCLGtEQUE4QjtJQUFFLGVBQW9CO1NBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtRQUFwQiw4QkFBb0I7O0lBQ3hFLE9BQU8saUJBQWlCLENBQUMsVUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUs7UUFDbEQsSUFBSSxDQUFDLDJCQUFlLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFBRSx3QkFBWSxDQUFDLE9BQUksUUFBUSxvRUFBYyxDQUFDLENBQUM7UUFDM0csSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFFLE9BQU8sUUFBUSxDQUFDO1FBRWxELEtBQUssSUFBTSxHQUFHLElBQUksUUFBUSxFQUFFO1lBQ3hCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQixJQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVM7Z0JBQUUsU0FBUztZQUV6QixJQUFJLHNCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDN0Qsd0JBQVksQ0FBQyxPQUFJLFFBQVEseUJBQVMsU0FBUyxDQUFDLFFBQVEsRUFBRSwrQkFBUSxDQUFDLENBQUM7Z0JBQ2hFLE1BQU07YUFDVDtZQUNELElBQUksdUJBQVcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzVELHdCQUFZLENBQUMsT0FBSSxRQUFRLG9FQUFjLENBQUMsQ0FBQztnQkFDekMsTUFBTTthQUNUO1lBRUQsSUFBSSx1QkFBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDckQsd0JBQVksQ0FBQyxPQUFJLFFBQVEsb0VBQWMsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNO2FBQ1Q7U0FDSjtRQUVELFFBQVEsR0FBRywrQkFBZSxFQUFDLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLEVBQUUsR0FBRSxRQUFRLENBQUMsQ0FBQztRQUNsRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUE1QkQsMEJBNEJDO0FBT0QsU0FBUyxpQkFBaUIsQ0FBQyxjQUE4QjtJQUNyRCxPQUFPLFVBQVUsTUFBVyxFQUFFLFdBQXFDO1FBQy9ELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVoQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRTtZQUN2QyxZQUFZLEVBQUUsSUFBSTtZQUNsQixVQUFVLEVBQUUsSUFBSTtZQUNoQixHQUFHLEVBQUUsY0FBTSxZQUFLLEVBQUwsQ0FBSztZQUNoQixHQUFHLEVBQUUsVUFBQyxRQUFRO2dCQUNWLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQzlCLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzVCO2dCQUNELEtBQUssR0FBRyxjQUFjLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN6RCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SUQsK0ZBQXVEO0FBS3ZEO0lBSUk7UUFNUSxrQkFBYSxHQUFpQyxFQUFFLENBQUM7SUFMekQsQ0FBQztJQWFNLHFCQUFFLEdBQVQsVUFBVSxRQUFnQixFQUFFLFlBQTBCO1FBQ2xELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0MsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxJQUFJLHVCQUFXLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQWUsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQzNFO2lCQUNJLElBQUksc0JBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsa0JBQTRCLFVBQVUsR0FBRSxZQUFZLEVBQUMsQ0FBQzthQUNyRjtTQUNKO2FBQ0k7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFlBQVksQ0FBQztTQUMvQztJQUNMLENBQUM7SUFRTSxzQkFBRyxHQUFWLFVBQVcsUUFBZ0IsRUFBRSxZQUEwQjtRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFlBQVksQ0FBQztJQUNoRCxDQUFDO0lBUU0sdUJBQUksR0FBWCxVQUFZLFFBQWdCLEVBQUUsT0FBWTtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO1lBQUUsT0FBTztRQUV6RCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksdUJBQVcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUU7WUFDckMsVUFBVSxDQUFDO2dCQUNRLFVBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDVDthQUNJLElBQUksc0JBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNQLFVBQVcsQ0FBQyxHQUFHLENBQUMsaUJBQU87Z0JBQ3pDLFVBQVUsQ0FBQztvQkFDUCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBT00sc0JBQUcsR0FBVixVQUFXLFFBQWdCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7WUFBRSxPQUFPO1FBQ3pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQVdhLG9CQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdGRCxTQUFnQixRQUFRLENBQUMsT0FBZTtJQUNwQyxNQUFNLEtBQUssQ0FBQyxpRkFBbUIsT0FBTyxxQ0FBUyxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUZELDRCQUVDO0FBT0QsU0FBZ0IsWUFBWSxDQUFDLE9BQWU7SUFDeEMsTUFBTSxLQUFLLENBQUMsaUZBQW1CLE9BQU8scUNBQVMsQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFGRCxvQ0FFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRCx1RkFBMkM7QUFRM0MsU0FBZ0IsWUFBWSxDQUFDLE9BQTJCLEVBQUUsU0FBOEI7O0lBQ3BGLElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTztJQUVyQixLQUFLLElBQU0sT0FBTyxJQUFJLFNBQVMsRUFBRTtRQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsdUNBQUksSUFBSSxHQUFDO0tBQ3ZEO0FBQ0wsQ0FBQztBQU5ELG9DQU1DO0FBU0QsU0FBZ0IsYUFBYSxDQUFDLE9BQTJCO0lBQUUsaUJBQXFDO1NBQXJDLFVBQXFDLEVBQXJDLHFCQUFxQyxFQUFyQyxJQUFxQztRQUFyQyxnQ0FBcUM7O0lBQzVGLElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFMUIsT0FBTyxnQkFBZ0IsK0JBQUMsT0FBTyxFQUFFLFVBQVUsY0FBd0IsRUFBRSxLQUFhLEVBQUUsU0FBaUI7WUFDakcsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUNULGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbEM7UUFDTCxDQUFDLEVBQUUsY0FBTSxHQUFLLE9BQU8sR0FBRTtBQUMzQixDQUFDO0FBUkQsc0NBUUM7QUFTRCxTQUFnQixnQkFBZ0IsQ0FBQyxPQUEyQjtJQUFFLGlCQUFvQjtTQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7UUFBcEIsZ0NBQW9COztJQUM5RSxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTFCLE9BQU8sZ0JBQWdCLCtCQUFDLE9BQU8sRUFBRSxVQUFVLGNBQXdCLEVBQUUsS0FBYTtZQUM5RSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNSLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1FBQ0wsQ0FBQyxFQUFFLGNBQU0sR0FBSyxPQUFPLEdBQUU7QUFDM0IsQ0FBQztBQVJELDRDQVFDO0FBU0QsU0FBZ0IsV0FBVyxDQUFDLE9BQTJCLEVBQUUsU0FBaUI7SUFDdEUsSUFBSSxDQUFDLE9BQU87UUFBRSxPQUFPLEtBQUssQ0FBQztJQUUzQixJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2RCxJQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBTSxHQUFHLFNBQVMsQ0FBQztJQUNwRixJQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3BCLENBQUM7QUFQRCxrQ0FPQztBQVdELFNBQVMsZ0JBQWdCLENBQUMsT0FBb0IsRUFBRSxPQUE2RSxFQUFFLE1BQXVCO0lBQXZCLGtDQUFpQixjQUFNO0lBQUUsaUJBQXFDO1NBQXJDLFVBQXFDLEVBQXJDLHFCQUFxQyxFQUFyQyxJQUFxQztRQUFyQyxnQ0FBcUM7O0lBQ3pMLElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFMUIsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7UUFDakIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNyRSxJQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEQsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekZELCtGQUErQztBQVEvQyxTQUFnQixlQUFlLENBQXVCLE1BQVM7SUFDM0QsSUFBTSxTQUFTLEdBQVEsRUFBRSxDQUFDO0lBRTFCLEtBQWtCLFVBQW1CLEVBQW5CLFdBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQW5CLGNBQW1CLEVBQW5CLElBQW1CLEVBQUU7UUFBbEMsSUFBTSxHQUFHO1FBQ1YsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLDJCQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzlGO0lBQ0QsT0FBTyxTQUFjLENBQUM7QUFDMUIsQ0FBQztBQVBELDBDQU9DO0FBUUQsU0FBZ0IsZUFBZSxDQUF1QixNQUFTLEVBQUUsSUFBTztJQUNwRSxJQUFNLFNBQVMsR0FBUSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFL0MsS0FBa0IsVUFBaUIsRUFBakIsV0FBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBakIsY0FBaUIsRUFBakIsSUFBaUIsRUFBRTtRQUFoQyxJQUFNLEdBQUc7UUFDVixJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLElBQUksQ0FBQywyQkFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzdELFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFM0IsU0FBUztTQUNaO1FBQ0QsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDL0Q7SUFDRCxPQUFPLFNBQWMsQ0FBQztBQUMxQixDQUFDO0FBWkQsMENBWUM7Ozs7Ozs7Ozs7Ozs7OztBQzNCRCxTQUFnQixXQUFXLENBQUMsSUFBUztJQUFFLG1CQUE4QjtTQUE5QixVQUE4QixFQUE5QixxQkFBOEIsRUFBOUIsSUFBOEI7UUFBOUIsa0NBQThCOztJQUNqRSxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRkQsa0NBRUM7QUFPRCxTQUFnQixRQUFRLENBQUMsSUFBUztJQUM5QixPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDckUsQ0FBQztBQUZELDRCQUVDO0FBT0QsU0FBZ0IsV0FBVyxDQUFDLElBQVM7SUFDakMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBRkQsa0NBRUM7QUFPRCxTQUFnQixjQUFjLENBQUMsSUFBUztJQUNwQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRkQsd0NBRUM7QUFPRCxTQUFnQixlQUFlLENBQUMsSUFBUztJQUNyQyxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxpQkFBaUI7UUFDeEUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3JCLENBQUM7QUFKRCwwQ0FJQztBQU9ELFNBQWdCLFVBQVUsQ0FBQyxJQUFTO0lBQ2hDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBRkQsZ0NBRUM7QUFRRCxTQUFnQixrQkFBa0IsQ0FBQyxJQUFTLEVBQUUsU0FBaUM7SUFDM0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDdkMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUVuQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDdkIsS0FBbUIsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUksRUFBRTtRQUFwQixJQUFNLElBQUk7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xCLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDcEIsTUFBTTtTQUNUO0tBQ0o7SUFFRCxPQUFPLFdBQVcsQ0FBQztBQUN2QixDQUFDO0FBYkQsZ0RBYUM7QUFRRCxTQUFnQixhQUFhLENBQUMsSUFBUyxFQUFFLFNBQWlCO0lBQ3RELE9BQU8sV0FBVyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFGRCxzQ0FFQztBQVFELFNBQWdCLG1CQUFtQixDQUFDLElBQVM7SUFBRSxzQkFBNEI7U0FBNUIsVUFBNEIsRUFBNUIscUJBQTRCLEVBQTVCLElBQTRCO1FBQTVCLHFDQUE0Qjs7SUFDdkUsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3RILENBQUM7QUFGRCxrREFFQztBQVFELFNBQWdCLGNBQWMsQ0FBQyxJQUFTLEVBQUUsU0FBaUI7SUFDdkQsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDO0FBQ25FLENBQUM7QUFGRCx3Q0FFQztBQVFELFNBQWdCLGNBQWMsQ0FBQyxJQUFTLEVBQUUsU0FBaUI7SUFDdkQsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDO0FBQ25FLENBQUM7QUFGRCx3Q0FFQztBQVNELFNBQWdCLFdBQVcsQ0FBQyxJQUFTLEVBQUUsWUFBb0IsRUFBRSxZQUFvQjtJQUM3RSxPQUFPLGNBQWMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksY0FBYyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNwRixDQUFDO0FBRkQsa0NBRUM7QUFRRCxTQUFnQixRQUFRLENBQUMsSUFBUyxFQUFFLFNBQWlCO0lBQ2pELE9BQU8sV0FBVyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDO0FBQzVELENBQUM7QUFGRCw0QkFFQztBQVFELFNBQWdCLFFBQVEsQ0FBQyxJQUFTLEVBQUUsU0FBaUI7SUFDakQsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxTQUFTLENBQUM7QUFDNUQsQ0FBQztBQUZELDRCQUVDO0FBU0QsU0FBZ0IsVUFBVSxDQUFDLElBQVMsRUFBRSxZQUFvQixFQUFFLFlBQW9CO0lBQzVFLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUFGRCxnQ0FFQztBQU9ELFNBQWdCLGdCQUFnQixDQUFDLElBQVM7SUFDdEMsT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQy9FLENBQUM7QUFGRCw0Q0FFQztBQU9ELFNBQWdCLGtCQUFrQixDQUFDLElBQVM7SUFDeEMsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFGRCxnREFFQztBQU9ELFNBQWdCLFdBQVcsQ0FBQyxJQUFTO0lBQ2pDLE9BQU8sSUFBSSxZQUFZLE1BQU0sQ0FBQztBQUNsQyxDQUFDO0FBRkQsa0NBRUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hMWSxlQUFPLEdBQVcsT0FBTyxDQUFDO0FBSzFCLGNBQU0sR0FBVyxPQUFPLENBQUM7QUFLekIsY0FBTSxHQUFXLFFBQVEsQ0FBQztBQUsxQiw0QkFBb0IsR0FBVyxHQUFHLENBQUM7QUFLbkMsNkJBQXFCLEdBQVcsR0FBRyxDQUFDO0FBS2pELElBQVksZUFTWDtBQVRELFdBQVksZUFBZTtJQUl2QixrQ0FBZTtJQUlmLGtDQUFlO0FBQ25CLENBQUMsRUFUVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQVMxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENELDZFQUFnSDtBQUNoSCw2SUFBa0c7QUFFbEcsOEdBQThDO0FBRTlDLG9HQUF5QztBQUN6QyxvR0FBZ0Q7QUFFaEQsNEVBQXdCO0FBTXhCO0lBSUksZUFBb0IsT0FBb0I7UUFPeEIsWUFBTyxHQUFXLGVBQU8sQ0FBQztRQU9uQyxXQUFNLEdBQVcsY0FBTSxDQUFDO1FBS2YsV0FBTSxHQUFXLGNBQU0sQ0FBQztRQU1qQyxTQUFJLEdBQW9CLHVCQUFlLENBQUMsS0FBSyxDQUFDO1FBTTlDLFVBQUssR0FBVyw0QkFBb0IsQ0FBQztRQU1yQyxXQUFNLEdBQVcsNkJBQXFCLENBQUM7UUFwQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQXlDRCxrQkFBRSxHQUFGLFVBQUcsTUFBd0I7UUFBeEIsb0NBQXdCO1FBQ3ZCLEtBQUssSUFBTSxRQUFRLElBQUksTUFBTSxFQUFFO1lBQzNCLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxJQUFJLHVCQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxFQUFFO2dCQUNsQyxtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDaEQ7U0FDSjtJQUNMLENBQUM7SUFPRCxvQkFBSSxHQUFKLFVBQUssT0FBdUI7UUFDeEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNuRCxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXRDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFZYSxpQkFBVyxHQUF6QixVQUEwQixPQUFzQztRQUF0QyxvQ0FBb0MsRUFBRTtRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RDO2FBQ0k7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBT08sOEJBQWMsR0FBdEIsVUFBdUIsT0FBb0I7O1FBQ3ZDLElBQUksQ0FBQyxJQUFJLGVBQUcsT0FBTywwQ0FBRSxJQUFJLHVDQUFJLHVCQUFlLENBQUMsS0FBSyxHQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLGVBQUcsT0FBTywwQ0FBRSxLQUFLLHVDQUFJLElBQUksQ0FBQyxLQUFLLEdBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sZUFBRyxPQUFPLDBDQUFFLE1BQU0sdUNBQUksSUFBSSxDQUFDLE1BQU0sR0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxlQUFHLE9BQU8sMENBQUUsTUFBTSx1Q0FBSSxJQUFJLENBQUMsTUFBTSxHQUFDO0lBQ2pELENBQUM7SUFsRkQ7UUFGQyw2QkFBUSxFQUFFO1FBQ1Ysd0JBQUcsQ0FBQyxJQUFJLENBQUM7eUNBQ3FCO0lBVy9CO1FBREMsbUNBQWMsQ0FBQyx1QkFBZSxDQUFDLEtBQUssRUFBRSx1QkFBZSxDQUFDLEtBQUssQ0FBQzt1Q0FDUjtJQU1yRDtRQURDLGdDQUFXLEVBQUU7d0NBQzhCO0lBTTVDO1FBREMsZ0NBQVcsRUFBRTt5Q0FDZ0M7SUE0RGxELFlBQUM7Q0FBQTtrQkFyR29CLEtBQUs7Ozs7Ozs7Ozs7Ozs7OztBQ2QxQixpRkFBZ0M7QUFLaEMsU0FBUyxLQUFLO0lBQ1YsSUFBTSxLQUFLLEdBQUcsZUFBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRWxDLElBQU0sVUFBVSxHQUFlLFVBQVUsT0FBb0I7UUFDekQsZUFBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUM7SUFFRixVQUFVLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDekIsVUFBVSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ25DLFVBQVUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUU3QixPQUFPLFVBQVUsQ0FBQztBQUN0QixDQUFDO0FBRUQsa0JBQWUsS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoibGF5eC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxheXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGF5eFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL2NvbW1vbi5jc3NcIjtcclxuaW1wb3J0IFwiLi93aW5kb3cuY3NzXCI7XHJcbmltcG9ydCBcIi4vYW5pbWF0ZS5jc3NcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgRW50cnkgZnJvbSBcIi4uL2VudHJ5XCI7XHJcbmltcG9ydCBFdmVudEJ1cyBmcm9tIFwiLi4vY29yZS9ldmVudC1idXNcIjtcclxuXHJcbi8qKlxyXG4gKiDnu4Tku7bnsbvvvIzmiYDmnInnmoTnu4Tku7bpg73lv4Xpobvnu6fmib/or6XnsbtcclxuICogQHRlbXBsYXRlIFRPcHRpb24g57uE5Lu25Y+C5pWwXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VE9wdGlvbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlhaXlj6Plr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGVudHJ5OiBFbnRyeSA9IEVudHJ5LmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuovku7bmgLvnur/lr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGV2ZW50QnVzOiBFdmVudEJ1cyA9IEV2ZW50QnVzLmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnu4Tku7bllK/kuIDmoIfor4ZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzeW1ib2w6IHN5bWJvbCA9IFN5bWJvbChcIm1vbmtzb3VsXCIpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgaGFuZGxlck9wdGlvbnMob3B0aW9uczogVE9wdGlvbik6IHZvaWQ7XHJcbn0iLCIvKipcclxuICog6L655qGG5qC35byPXHJcbiAqL1xyXG5leHBvcnQgZW51bSBCb3JkZXJTdHlsZSB7XHJcbiAgICAvKipcclxuICAgICAqIOeCueeKtlxyXG4gICAgICovXHJcbiAgICBET1RURUQgPSBcImRvdHRlZFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDomZrnur9cclxuICAgICAqL1xyXG4gICAgREFTSEVEID0gXCJkYXNoZWRcIixcclxuICAgIC8qKlxyXG4gICAgICog5a6e57q/XHJcbiAgICAgKi9cclxuICAgIFNPTElEID0gXCJzb2xpZFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlj4znur9cclxuICAgICAqL1xyXG4gICAgRE9VQkxFID0gXCJkb3VibGVcIlxyXG59XHJcblxyXG4vKipcclxuICog5pSv5oyB5Yqo55S7XHJcbiAqL1xyXG5leHBvcnQgZW51bSBBbmltYXRpb24ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnvKnmlL5cclxuICAgICAqL1xyXG4gICAgWk9PTSA9IFwiem9vbVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpu5jorqTmnIDlsI/lrr3luqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX01JTl9XSURUSDogbnVtYmVyID0gMjAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWwj+mrmOW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUlOX0hFSUdIVDogbnVtYmVyID0gMjAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWkp+WuveW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFYX1dJRFRIOiBudW1iZXIgPSBpbm5lcldpZHRoO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWkp+mrmOW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFYX0hFSUdIVDogbnVtYmVyID0gaW5uZXJIZWlnaHQ7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG5a695bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfV0lEVEg6IG51bWJlciA9IDE7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG5qC35byPXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfU1RZTEU6IEJvcmRlclN0eWxlID0gQm9yZGVyU3R5bGUuU09MSUQ7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG6aKc6ImyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfQ09MT1I6IHN0cmluZyA9IFwiIzNiYWNlZFwiO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOi+ueahhuWchuinklxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQk9SREVSX1JBRElVUzogbnVtYmVyID0gNDsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9cIjtcclxuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gXCIuLi91aS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVUlXaW5kb3dPcHRpb24sIEJvcmRlck9wdGlvbiB9IGZyb20gXCIuL3R5cGVcIjtcclxuaW1wb3J0IHsgaXNQc3ROdW1iZXIsIGlzTm9FbXB0eU9yTnVsbCwgaXNCb29sZWFuLCBjb21iaW5lLCBpblZhbHVlT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcclxuaW1wb3J0IHsgYWRkQ1NTU3R5bGVzLCBhZGRDU1NDbGFzc2VzLCByZW1vdmVDU1NDbGFzc2VzLCBoYXNDU1NDbGFzcyB9IGZyb20gXCIuLi8uLi9jb3JlL2hlbHBlci9lbGVtZW50LWhlbHBlclwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24sIERFRkFVTFRfTUlOX1dJRFRILCBERUZBVUxUX01JTl9IRUlHSFQsIERFRkFVTFRfTUFYX1dJRFRILCBERUZBVUxUX01BWF9IRUlHSFQsIERFRkFVTFRfQk9SREVSX1dJRFRILCBERUZBVUxUX0JPUkRFUl9DT0xPUiwgREVGQVVMVF9CT1JERVJfU1RZTEUsIERFRkFVTFRfQk9SREVSX1JBRElVUywgQm9yZGVyU3R5bGUgfSBmcm9tIFwiLi9jb25zdFwiO1xyXG5pbXBvcnQgeyBjaGVja1BzdEludCwgY2hlY2tOb0VtcHR5T3JOdWxsIH0gZnJvbSBcIi4uLy4uL2NvcmUvdmFsaWRhdG9yXCI7XHJcblxyXG4vKipcclxuICog56qX5Y+j57uE5Lu257G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVdpbmRvdyBleHRlbmRzIENvbXBvbmVudDxVSVdpbmRvd09wdGlvbj4gaW1wbGVtZW50cyBVSUNvbXBvbmVudDxVSVdpbmRvd09wdGlvbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTpgKDlh73mlbDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFVJV2luZG93T3B0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnM/LmlkO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDllK/kuIBJZFxyXG4gICAgICovXHJcbiAgICBAaXNOb0VtcHR5T3JOdWxsKClcclxuICAgIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5a695bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IHRoaXMuZW50cnkud2lkdGg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpq5jluqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IHRoaXMuZW50cnkuaGVpZ2h0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyA5bCP5a695bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgbWluV2lkdGg6IG51bWJlciA9IERFRkFVTFRfTUlOX1dJRFRIO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyA5bCP6auY5bqmXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdE51bWJlcigpXHJcbiAgICBwdWJsaWMgbWluSGVpZ2h0OiBudW1iZXIgPSBERUZBVUxUX01JTl9IRUlHSFQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDlpKflrr3luqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBtYXhXaWR0aDogbnVtYmVyID0gREVGQVVMVF9NQVhfV0lEVEg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDlpKfpq5jluqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBtYXhIZWlnaHQ6IG51bWJlciA9IERFRkFVTFRfTUFYX0hFSUdIVDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW3pui+uei+uei3nVxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIGxlZnQ6IG51bWJlciA9IChERUZBVUxUX01BWF9XSURUSCAtIHRoaXMud2lkdGgpIC8gMjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPs+i+uei+uei3nVxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIHRvcDogbnVtYmVyID0gKERFRkFVTFRfTUFYX0hFSUdIVCAtIHRoaXMuaGVpZ2h0KSAvIDI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovrnmoYbmoLflvI9cclxuICAgICAqL1xyXG4gICAgQGNvbWJpbmUoe1xyXG4gICAgICAgIHdpZHRoOiBjaGVja1BzdEludCwgLyoqIOato+aVtOaVsCAqL1xyXG4gICAgICAgIHN0eWxlOiBbQm9yZGVyU3R5bGUuU09MSUQsIEJvcmRlclN0eWxlLkRPVUJMRSwgQm9yZGVyU3R5bGUuRE9UVEVELCBCb3JkZXJTdHlsZS5EQVNIRURdLCAvKiog5Y+v6YCJ5YC8ICovXHJcbiAgICAgICAgY29sb3I6IGNoZWNrTm9FbXB0eU9yTnVsbCwgIC8qKiDpnZ7nqbrlrZfnrKbkuLIgKi9cclxuICAgICAgICByYWRpdXM6IGNoZWNrUHN0SW50IC8qKiDmraPmlbTmlbAgKi9cclxuICAgIH0sIGZhbHNlKVxyXG4gICAgcHVibGljIGJvcmRlcjogQm9yZGVyT3B0aW9uIHwgZmFsc2UgPSA8Qm9yZGVyT3B0aW9uPntcclxuICAgICAgICB3aWR0aDogREVGQVVMVF9CT1JERVJfV0lEVEgsXHJcbiAgICAgICAgc3R5bGU6IERFRkFVTFRfQk9SREVSX1NUWUxFLFxyXG4gICAgICAgIGNvbG9yOiBERUZBVUxUX0JPUkRFUl9DT0xPUixcclxuICAgICAgICByYWRpdXM6IERFRkFVTFRfQk9SREVSX1JBRElVU1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmYtOW9sVxyXG4gICAgICovXHJcbiAgICBAaXNCb29sZWFuKClcclxuICAgIHB1YmxpYyBib3hTaGFkb3c6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqo55S7XHJcbiAgICAgKi9cclxuICAgIEBpblZhbHVlT3B0aW9ucyhBbmltYXRpb24uWk9PTSwgZmFsc2UpXHJcbiAgICBwdWJsaWMgYW5pbWF0ZTogZmFsc2UgfCBBbmltYXRpb24gPSBBbmltYXRpb24uWk9PTTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeql+WPo+WFg+e0oOWvueixoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd2luZG93RWxlbWVudDogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaOp+S7tuWFg+e0oOWvueixoVxyXG4gICAgICogQHJldHVybnMgSFRNTEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJlc2VudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy53aW5kb3dFbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICBlbGVtZW50LmlkID0gYCR7dGhpcy5lbnRyeS5wcmVmaXggKyB0aGlzLmlkfWA7XHJcblxyXG4gICAgICAgIGFkZENTU0NsYXNzZXMoZWxlbWVudCxcclxuICAgICAgICAgICAgXCJ3aW5kb3dcIixcclxuICAgICAgICAgICAgdGhpcy5ib3hTaGFkb3cgPyBcImJveC1zaGFkb3dcIiA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlICE9PSBmYWxzZSA/IFwiYW5pbWF0ZVwiIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgIT09IGZhbHNlID8gYGFuaW1hdGUtJHt0aGlzLmFuaW1hdGV9LXNob3dgIDogdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgYWRkQ1NTU3R5bGVzKGVsZW1lbnQsXHJcbiAgICAgICAgICAgIDxDU1NTdHlsZURlY2xhcmF0aW9uPntcclxuICAgICAgICAgICAgICAgIHpJbmRleDogYCR7dGhpcy5lbnRyeS56SW5kZXh9YCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHt0aGlzLndpZHRofXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7dGhpcy5oZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMubWF4V2lkdGggIT09IGlubmVyV2lkdGggPyBgJHt0aGlzLm1heFdpZHRofXB4YCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IHRoaXMubWF4SGVpZ2h0ICE9PSBpbm5lckhlaWdodCA/IGAke3RoaXMubWF4SGVpZ2h0fXB4YCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogYCR7dGhpcy5taW5XaWR0aH1weGAsXHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IGAke3RoaXMubWluSGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IGAke3RoaXMubGVmdH1weGAsXHJcbiAgICAgICAgICAgICAgICB0b3A6IGAke3RoaXMudG9wfXB4YCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXIgPT09IGZhbHNlID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5ib3JkZXIud2lkdGh9cHggJHt0aGlzLmJvcmRlci5zdHlsZX0gJHt0aGlzLmJvcmRlci5jb2xvcn1gLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLmJvcmRlciA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci5yYWRpdXN9cHhgLFxyXG4gICAgICAgICAgICAgICAgd2Via2l0Qm9yZGVyUmFkaXVzOiB0aGlzLmJvcmRlciA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci5yYWRpdXN9cHhgLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tb25pdG9yRXZlbnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEJ1cy5lbWl0KGB3aW5kb3c6Y3JlYXRlYCwgeyBldmVudE5hbWU6IFwid2luZG93OmNyZWF0ZVwiLCBpZDogdGhpcy5pZCB9KTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebkeWQrOS6i+S7tlxyXG4gICAgICogQHJldHVybnMgdm9pZCBcclxuICAgICAqL1xyXG4gICAgbW9uaXRvckV2ZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy53aW5kb3dFbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2luZG93RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIChldjogQW5pbWF0aW9uRXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDmlrDlu7rmiJbmmL7npLrnqpflj6NcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGVTaG93TmFtZSA9IGBhbmltYXRlLSR7dGhpcy5hbmltYXRlfS1zaG93YDtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNDU1NDbGFzcyh0aGlzLndpbmRvd0VsZW1lbnQsIGFuaW1hdGVTaG93TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDU1NDbGFzc2VzKHRoaXMud2luZG93RWxlbWVudCwgYW5pbWF0ZVNob3dOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QnVzLmVtaXQoYHdpbmRvdzpzaG93YCwgeyBldmVudE5hbWU6IFwid2luZG93OnNob3dcIiwgaWQ6IHRoaXMuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOaOp+S7tuaUr+aMgeS8oOWFpeWPr+mAieWPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyT3B0aW9ucyhvcHRpb25zOiBVSVdpbmRvd09wdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRpb25zPy53aWR0aCA/PyB0aGlzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucz8uaGVpZ2h0ID8/IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubWF4V2lkdGggPSBvcHRpb25zPy5tYXhXaWR0aCA/PyB0aGlzLm1heFdpZHRoO1xyXG4gICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gb3B0aW9ucz8ubWF4SGVpZ2h0ID8/IHRoaXMubWF4SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubWluV2lkdGggPSBvcHRpb25zPy5taW5XaWR0aCA/PyB0aGlzLm1pbldpZHRoO1xyXG4gICAgICAgIHRoaXMubWluSGVpZ2h0ID0gb3B0aW9ucz8ubWluSGVpZ2h0ID8/IHRoaXMubWluSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCB0aGlzLndpZHRoKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5taW4odGhpcy5tYXhXaWR0aCwgdGhpcy53aWR0aCk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmJvcmRlciA9IDxCb3JkZXJPcHRpb24gfCBmYWxzZT5vcHRpb25zPy5ib3JkZXIgPz8gdGhpcy5ib3JkZXI7XHJcbiAgICAgICAgdGhpcy5ib3hTaGFkb3cgPSBvcHRpb25zPy5ib3hTaGFkb3cgPz8gdGhpcy5ib3hTaGFkb3c7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlID0gPEFuaW1hdGlvbiB8IGZhbHNlPm9wdGlvbnM/LmFuaW1hdGUgPz8gdGhpcy5hbmltYXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHJvcGVydHlTZXR0ZXIsIFByb3BlcnR5RGVjb3JhdG9yIH0gZnJvbSBcIi4vdHlwZVwiO1xyXG5pbXBvcnQgeyBjaGVja1BzdE51bWJlciwgY2hlY2tJblZhbHVlT3B0aW9ucywgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja09mVHlwZSwgY2hlY2tKU09OT2JqZWN0LCBjaGVja0FycmF5LCBjaGVja1JlZ0V4cCwgY2hlY2tQc3RJbnQsIGNoZWNrTWluIH0gZnJvbSBcIi4uL3ZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBWYWx1ZU9wdGlvbiB9IGZyb20gXCIuLi92YWxpZGF0b3IvdHlwZVwiO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUZhaWwgfSBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XHJcbmltcG9ydCB7IEpTT05PYmplY3QgfSBmcm9tIFwiLi4vaGVscGVyL3R5cGVcIjtcclxuaW1wb3J0IHsgbWVyZ2VKU09OT2JqZWN0IH0gZnJvbSBcIi4uL2hlbHBlci9vYmplY3QtaGVscGVyXCI7XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5q2j5pWw5YC857G75Z6LXHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHN0TnVtYmVyKCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrUHN0TnVtYmVyKG5ld1ZhbHVlKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5q2j5pWw5YC857G75Z6LYCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5oyH5a6a5Y+v6YCJ5YC857G75Z6LXHJcbiAqIEBwYXJhbSB2YWx1ZU9wdGlvbnMg5Y+v6YCJ5YC8XHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluVmFsdWVPcHRpb25zKC4uLnZhbHVlT3B0aW9uczogVmFsdWVPcHRpb24pOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja0luVmFsdWVPcHRpb25zKG5ld1ZhbHVlLCAuLi52YWx1ZU9wdGlvbnMpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3lnKggWyR7dmFsdWVPcHRpb25zLnRvU3RyaW5nKCl9XSDlgLzojIPlm7TlhoVgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XpnZ7nqbrmiJbpnZ5OVUxM5a2X56ym5LiyXHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9FbXB0eU9yTnVsbCgpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwobmV3VmFsdWUpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTpnZ7nqbrlrZfnrKbkuLJgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XluIPlsJTnsbvlnovlgLxcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrT2ZUeXBlKG5ld1ZhbHVlLCBcImJvb2xlYW5cIikpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOW4g+WwlOWAvGApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeato+aVtOaVsFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1BzdEludCgpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZ2VuZXJhdGVEZWNvcmF0b3IoKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja1BzdEludChuZXdWYWx1ZSkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOato+aVtOaVsGApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeacgOWwj+WAvFxyXG4gKiBAcGFyYW0gdGhyZXNob2xkIOacgOWwj+mYiOWAvFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbih0aHJlc2hvbGQ6IG51bWJlcik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrTWluKG5ld1ZhbHVlLCB0aHJlc2hvbGQpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDlv4XpobvmmK/mlbDlgLznsbvlnovlubbkuJTlgLzkuI3og73lsI/kuo4gXCIke3RocmVzaG9sZH1cImApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOe7hOWQiOajgOafpemqjOivgVxyXG4gKiBAcGFyYW0ganNvbkRlY29yYXRvciDlj4LmlbDmr4/kuIDpobnoo4XppbDlmajvvIzmlK/mjIFBcnJheXxGdW5jdGlvbnxSZWdFeHBcclxuICogQHBhcmFtIGl0ZW1zIOWFtuS9meWPr+mAieWAvO+8jOWPquaUr+aMgeWfuuacrOaVsOaNruexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUoanNvbkRlY29yYXRvcjogSlNPTk9iamVjdCA9IHt9LCAuLi5pdGVtczogQXJyYXk8YW55Pik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUsIHByb3BlcnR5S2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tKU09OT2JqZWN0KG5ld1ZhbHVlKSAmJiBpdGVtcy5pbmRleE9mKG5ld1ZhbHVlKSA9PT0gLTEpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOWPguaVsOWAvGApO1xyXG4gICAgICAgIGlmIChpdGVtcy5pbmRleE9mKG5ld1ZhbHVlKSA+IC0xKSByZXR1cm4gbmV3VmFsdWU7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlID0gbmV3VmFsdWVba2V5XTtcclxuICAgICAgICAgICAgY29uc3QgZGVjb3JhdG9yID0ganNvbkRlY29yYXRvcltrZXldO1xyXG4gICAgICAgICAgICBpZiAoIWRlY29yYXRvcikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hlY2tBcnJheShkZWNvcmF0b3IpICYmIGRlY29yYXRvci5pbmRleE9mKGtleVZhbHVlKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRmFpbChgXCIke2tleVZhbHVlfVwiIOS4jeWcqCBbJHtkZWNvcmF0b3IudG9TdHJpbmcoKX1dIOWAvOiMg+WbtOWGhWApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNoZWNrT2ZUeXBlKGRlY29yYXRvciwgXCJmdW5jdGlvblwiKSAmJiAhZGVjb3JhdG9yKGtleVZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGYWlsKGBcIiR7a2V5VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5Y+C5pWw5YC8YCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNoZWNrUmVnRXhwKGRlY29yYXRvcikgJiYgIWRlY29yYXRvci50ZXN0KGtleVZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGYWlsKGBcIiR7a2V5VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5Y+C5pWw5YC8YCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3VmFsdWUgPSBtZXJnZUpTT05PYmplY3QodmFsdWUgPz8ge30sIG5ld1ZhbHVlKTtcclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOeUn+aIkOijhemlsOWZqOaguOW/g+S7o+eggVxyXG4gKiBAcGFyYW0gcHJvcGVydHlTZXR0ZXIg5bGe5oCn6K6+572u5ZmoXHJcbiAqIEByZXR1cm5zIFByb3BlcnR5RGVjb3JhdG9yIFxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVEZWNvcmF0b3IocHJvcGVydHlTZXR0ZXI6IFByb3BlcnR5U2V0dGVyKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wZXJ0eUtleV07XHJcblxyXG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGdldDogKCkgPT4gdmFsdWUsXHJcbiAgICAgICAgICAgIHNldDogKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3Iuc2V0KG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gcHJvcGVydHlTZXR0ZXIobmV3VmFsdWUsIHByb3BlcnR5S2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2ZW50SGFuZGxlciwgTWVzc2FnZVF1ZXVlcyB9IGZyb20gXCIuL3R5cGVcIjtcclxuaW1wb3J0IHsgY2hlY2tPZlR5cGUsIGNoZWNrQXJyYXkgfSBmcm9tIFwiLi4vdmFsaWRhdG9yXCI7XHJcblxyXG4vKipcclxuICog5LqL5Lu25oC757q/57G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEJ1cyB7XHJcbiAgICAvKipcclxuICAgICAqIOengeacieWMluaehOmAoOWHveaVsO+8jOWunueOsOWNleS+i1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5raI5oGv6Zif5YiXXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbWVzc2FnZVF1ZXVlczogTWVzc2FnZVF1ZXVlcyA9IDxNZXNzYWdlUXVldWVzPnt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57uR5a6a5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRLZXkg5LqL5Lu25ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRIYW5kbGVyIOS6i+S7tuWkhOeQhuWHveaVsOaIluWHveaVsOaVsOe7hFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb24oZXZlbnRLZXk6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBFdmVudEhhbmRsZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGV2ZW50S2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudFZhbHVlID0gdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrT2ZUeXBlKGV2ZW50VmFsdWUsIFwiZnVuY3Rpb25cIikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1tldmVudEtleV0gPSBbPEV2ZW50SGFuZGxlcj5ldmVudFZhbHVlLCBldmVudEhhbmRsZXJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQXJyYXkoZXZlbnRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1tldmVudEtleV0gPSBbLi4uPEFycmF5PEV2ZW50SGFuZGxlcj4+ZXZlbnRWYWx1ZSwgZXZlbnRIYW5kbGVyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XSA9IGV2ZW50SGFuZGxlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj6rnu5HlrprkuIDmrKFcclxuICAgICAqIEBwYXJhbSBldmVudEtleSDkuovku7blkI3np7BcclxuICAgICAqIEBwYXJhbSBldmVudEhhbmRsZXIg5LqL5Lu25aSE55CG5Ye95pWw5oiW5Ye95pWw5pWw57uEXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbmUoZXZlbnRLZXk6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBFdmVudEhhbmRsZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldID0gZXZlbnRIYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y+R6YCB5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRLZXkg5LqL5Lu25ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSDkuovku7blpITnkIblh73mlbDmiJblh73mlbDmlbDnu4RcclxuICAgICAqIEByZXR1cm5zIHZvaWQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbWl0KGV2ZW50S2V5OiBzdHJpbmcsIG1lc3NhZ2U6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGV2ZW50S2V5KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBldmVudFZhbHVlID0gdGhpcy5tZXNzYWdlUXVldWVzW2V2ZW50S2V5XTtcclxuICAgICAgICBpZiAoY2hlY2tPZlR5cGUoZXZlbnRWYWx1ZSwgXCJmdW5jdGlvblwiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICg8RXZlbnRIYW5kbGVyPmV2ZW50VmFsdWUpKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2hlY2tBcnJheShldmVudFZhbHVlKSkge1xyXG4gICAgICAgICAgICAoPEFycmF5PEV2ZW50SGFuZGxlcj4+ZXZlbnRWYWx1ZSkubWFwKGhhbmRsZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudEtleSDkuovku7blkI3np7BcclxuICAgICAqIEByZXR1cm5zIHZvaWQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvZmYoZXZlbnRLZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGV2ZW50S2V5KSkgcmV0dXJuO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLm1lc3NhZ2VRdWV1ZXNbZXZlbnRLZXldXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuovku7bmgLvnur/lrp7kvotcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEV2ZW50QnVzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5ZSv5LiA5Y+v55So5a+56LGhXHJcbiAgICAgKiBAcmV0dXJucyBFdmVudEJ1cyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBFdmVudEJ1cyB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRXZlbnRCdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICog5oqb5Ye656iL5bqP5byC5bi45L+h5oGvXHJcbiAqIEBwYXJhbSBtZXNzYWdlIOW8guW4uOeugOimgVxyXG4gKiBAcmV0dXJucyBuZXZlciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBuZXZlciB7XHJcbiAgICB0aHJvdyBFcnJvcihgXFxu57G75Z6L77ya56iL5bqP5byC5bi4XFxu5byC5bi45L+h5oGv77yaJHttZXNzYWdlfVxcbuWghuagiOS/oeaBr++8mmApO1xyXG59XHJcblxyXG4vKipcclxuICog5oqb5Ye66aqM6K+B5aSx6LSl5L+h5oGvXHJcbiAqIEBwYXJhbSBtZXNzYWdlIOmUmeivr+S/oeaBr1xyXG4gKiBAcmV0dXJucyBuZXZlciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZhaWwobWVzc2FnZTogc3RyaW5nKTogbmV2ZXIge1xyXG4gICAgdGhyb3cgRXJyb3IoYFxcbuexu+Wei++8mumqjOivgemUmeivr1xcbumUmeivr+S/oeaBr++8miR7bWVzc2FnZX1cXG7loIbmoIjkv6Hmga/vvJpgKTtcclxufSIsImltcG9ydCB7IFBSRUZJWCB9IGZyb20gXCIuLi8uLi9lbnRyeS9jb25zdFwiO1xyXG5cclxuLyoqXHJcbiAqIOaJuemHj+a3u+WKoOWFg+e0oOagt+W8j1xyXG4gKiBAcGFyYW0gZWxlbWVudCDlhYPntKDlr7nosaFcclxuICogQHBhcmFtIGNzc1N0eWxlcyDmoLflvI/ooajlr7nosaFcclxuICogQHJldHVybnMgdm9pZCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDU1NTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLCBjc3NTdHlsZXM6IENTU1N0eWxlRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIGZvciAoY29uc3QgY3NzUHJvcCBpbiBjc3NTdHlsZXMpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlW2Nzc1Byb3BdID0gY3NzU3R5bGVzW2Nzc1Byb3BdID8/IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmt7vliqBDU1MgQ2xhc3NcclxuICog6buY6K6k5YmN57yA5Li6IF9fUFJFRklYX1/vvIzlpoLmnpxjbGFzc+WJjemdouW4piAhIOWImeaXoOmcgOa3u+WKoOWJjee8gFxyXG4gKiBAcGFyYW0gZWxlbWVudCDlhYPntKDlr7nosaFcclxuICogQHBhcmFtIGNsYXNzZXMgY2xhc3PliJfooahcclxuICogQHJldHVybnMgSFRNTEVsZW1lbnQgfCBudWxsIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLCAuLi5jbGFzc2VzOiBBcnJheTxzdHJpbmcgfCB1bmRlZmluZWQ+KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudCwgZnVuY3Rpb24gKGN1cnJlbnRDbGFzc2VzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlciwgaXRlbUNsYXNzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIX5pbmRleCkge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2xhc3Nlcy5wdXNoKGl0ZW1DbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgUFJFRklYLCAuLi5jbGFzc2VzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOenu+mZpENTUyBDbGFzc1xyXG4gKiDpu5jorqTliY3nvIDkuLogX19QUkVGSVhfX++8jOWmguaenGNsYXNz5YmN6Z2i5bimICEg5YiZ5peg6ZyA5re75Yqg5YmN57yAXHJcbiAqIEBwYXJhbSBlbGVtZW50IOWFg+e0oOWvueixoVxyXG4gKiBAcGFyYW0gY2xhc3NlcyBjbGFzc+WIl+ihqFxyXG4gKiBAcmV0dXJucyBIVE1MRWxlbWVudCB8IG51bGwgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ1NTQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsIC4uLmNsYXNzZXM6IHN0cmluZ1tdKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudCwgZnVuY3Rpb24gKGN1cnJlbnRDbGFzc2VzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgY3VycmVudENsYXNzZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBQUkVGSVgsIC4uLmNsYXNzZXMpO1xyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5YyF5ZCrQ1NTIENsYXNzXHJcbiAqIOm7mOiupOWJjee8gOS4uiBfX1BSRUZJWF9f77yM5aaC5p6cY2xhc3PliY3pnaLluKYgISDliJnml6DpnIDmt7vliqDliY3nvIBcclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57Sg5a+56LGhXHJcbiAqIEBwYXJhbSBjbGFzc05hbWUgY2xhc3PliJfooahcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNDU1NDbGFzcyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsIGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrL2cpO1xyXG4gICAgY29uc3QgY2xzID0gY2xhc3NOYW1lLmluZGV4T2YoXCIhXCIpID09PSAwID8gY2xhc3NOYW1lLnN1YnN0cigxKSA6IFBSRUZJWCArIGNsYXNzTmFtZTtcclxuICAgIGNvbnN0IGluZGV4ID0gY3VycmVudENsYXNzZXMuaW5kZXhPZihjbHMpO1xyXG4gICAgcmV0dXJuICEhfmluZGV4O1xyXG59XHJcblxyXG4vKipcclxuICog5pu05pawQ1NTIENsYXNz77yM5YyF5ous5paw5aKe44CB5pu05paw44CB5Yig6ZmkXHJcbiAqIOm7mOiupOWJjee8gOS4uiBfX1BSRUZJWF9f77yM5aaC5p6cY2xhc3PliY3pnaLluKYgISDliJnml6DpnIDmt7vliqDliY3nvIBcclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57Sg5a+56LGhXHJcbiAqIEBwYXJhbSBoYW5kbGVyIOabtOaWsOaWueW8j1xyXG4gKiBAcGFyYW0gW3ByZWZpeF0g5YmN57yA56ymXHJcbiAqIEBwYXJhbSBjbGFzc2VzIGNsYXNz5YiX6KGoXHJcbiAqIEByZXR1cm5zIEhUTUxFbGVtZW50IHwgbnVsbCBcclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnQsIGhhbmRsZXI6IChjdXJyZW50Q2xhc3Nlczogc3RyaW5nW10sIGluZGV4OiBudW1iZXIsIGl0ZW1DbGFzczogc3RyaW5nKSA9PiB2b2lkLCBwcmVmaXg6IHN0cmluZyA9IFBSRUZJWCwgLi4uY2xhc3NlczogQXJyYXk8c3RyaW5nIHwgdW5kZWZpbmVkPik6IEhUTUxFbGVtZW50IHwgbnVsbCB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvZyk7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBjb25zdCBjbHMgPSBpdGVtLmluZGV4T2YoXCIhXCIpID09PSAwID8gaXRlbS5zdWJzdHIoMSkgOiBwcmVmaXggKyBpdGVtO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRDbGFzc2VzLmluZGV4T2YoY2xzKTtcclxuICAgICAgICAgICAgaGFuZGxlcihjdXJyZW50Q2xhc3NlcywgaW5kZXgsIGNscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjdXJyZW50Q2xhc3Nlcy5qb2luKFwiIFwiKS50cmltKCk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufSIsImltcG9ydCB7IGNoZWNrSlNPTk9iamVjdCB9IGZyb20gXCIuLi92YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgSlNPTk9iamVjdCB9IGZyb20gXCIuL3R5cGVcIjtcclxuXHJcbi8qKlxyXG4gKiDlhYvpmoZKU09O5a+56LGhXHJcbiAqIEBwYXJhbSBzb3VyY2Ug5Y6fSlNPTuexu+Wei+WvueixoVxyXG4gKiBAcmV0dXJucyDlhYvpmoblkI7nmoRKU09O57G75Z6L5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVKU09OT2JqZWN0PFQgZXh0ZW5kcyBKU09OT2JqZWN0Pihzb3VyY2U6IFQpOiBUIHtcclxuICAgIGNvbnN0IG5ld09iamVjdCA9IDxhbnk+e307XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xyXG4gICAgICAgIG5ld09iamVjdFtrZXldID0gY2hlY2tKU09OT2JqZWN0KHNvdXJjZVtrZXldKSA/IGNsb25lSlNPTk9iamVjdChzb3VyY2Vba2V5XSkgOiBzb3VyY2Vba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdPYmplY3QgYXMgVDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWQiOW5tkpTT07lr7nosaFcclxuICogQHBhcmFtIHNvdXJjZSDmupBKU09O57G75Z6L5a+56LGhXHJcbiAqIEBwYXJhbSBkZXN0IOebruagh0pTT07nsbvlnovlr7nosaFcclxuICogQHJldHVybnMg5ZCI5bm25ZCO55qESlNPTuexu+Wei+WvueixoVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSlNPTk9iamVjdDxUIGV4dGVuZHMgSlNPTk9iamVjdD4oc291cmNlOiBULCBkZXN0OiBUKTogVCB7XHJcbiAgICBjb25zdCBuZXdPYmplY3QgPSA8YW55PmNsb25lSlNPTk9iamVjdChzb3VyY2UpO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRlc3QpKSB7XHJcbiAgICAgICAgaWYgKG5ld09iamVjdFtrZXldID09PSB1bmRlZmluZWQgfHwgIWNoZWNrSlNPTk9iamVjdChkZXN0W2tleV0pKSB7XHJcbiAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gZGVzdFtrZXldO1xyXG5cclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld09iamVjdFtrZXldID0gbWVyZ2VKU09OT2JqZWN0KG5ld09iamVjdFtrZXldLCBkZXN0W2tleV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld09iamVjdCBhcyBUO1xyXG59XHJcbiIsImltcG9ydCB7IENhblR5cGVvZiwgVmFsdWVPcHRpb24gfSBmcm9tIFwiLi90eXBlXCI7XHJcblxyXG4vKipcclxuICog5qOA5p+l6IO95aSf6KKrIHR5cGVvZiDnmoTnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSB0eXBlTmFtZXMg57G75Z6L6ZuG5ZCIXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPZlR5cGUoZGF0YTogYW55LCAuLi50eXBlTmFtZXM6IEFycmF5PENhblR5cGVvZj4pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlTmFtZXMuaW5kZXhPZih0eXBlb2YgZGF0YSkgPiAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+aVtOaVsOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ludChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm51bWJlclwiKSAmJiAoL15cXC0/WzAtOV0rJC8udGVzdChkYXRhKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mraPmlbTmlbDnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQc3RJbnQoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tJbnQoZGF0YSkgJiYgZGF0YSA+PSAwO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5q2j5pWw5YC857G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUHN0TnVtYmVyKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwibnVtYmVyXCIpICYmIGRhdGEgPj0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr0pTT07lr7nosaHnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tKU09OT2JqZWN0KGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpLnRvTG93ZXJDYXNlKCkgPT09IFwiW29iamVjdCBvYmplY3RdXCIgJiZcclxuICAgICAgICAhZGF0YS5sZW5ndGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mlbDnu4Tlr7nosaHnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBcnJheShkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEpO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5oyH5a6a57G75Z6L5pWw57uE5a+56LGh57G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gY2hlY2tJdGVtIOaVsOe7hOmhueajgOafpeWHveaVsFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXJyYXlFYWNoU2FtZShkYXRhOiBhbnksIGNoZWNrSXRlbTogKGl0ZW06IGFueSkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGxldCBpc1NhbWVBcnJheSA9IHRydWU7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgIGlmICghY2hlY2tJdGVtKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGlzU2FtZUFycmF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNTYW1lQXJyYXk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XlrZfnrKbkuLLmmK/lkKbljIXlkKvmjIflrprlrZfnrKZcclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEBwYXJhbSBjaGFyYWN0ZXIg5a2X56ymXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb250YWlucyhkYXRhOiBhbnksIGNoYXJhY3Rlcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIikgJiYgZGF0YS5pbmRleE9mKGNoYXJhY3RlcikgPiAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+aMh+WumuWPr+mAieWAvOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHZhbHVlT3B0aW9ucyDlj6/pgInlgLxcclxuICogQHJldHVybnMgYm9vbGVhblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSW5WYWx1ZU9wdGlvbnMoZGF0YTogYW55LCAuLi52YWx1ZU9wdGlvbnM6IFZhbHVlT3B0aW9uKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJib29sZWFuXCIsIFwibnVtYmVyXCIsIFwic3RyaW5nXCIsIFwidW5kZWZpbmVkXCIsIFwib2JqZWN0XCIpICYmIHZhbHVlT3B0aW9ucy5pbmRleE9mKGRhdGEpID4gLTE7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XlrZfnrKbkuLLplb/luqbmmK/lkKbmu6HotrPmnIDlsI/plb/luqZcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSB0aHJlc2hvbGQg6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW5MZW5ndGgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwic3RyaW5nXCIpICYmIGRhdGEubGVuZ3RoID49IHRocmVzaG9sZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeWtl+espuS4sumVv+W6puaYr+WQpua7oei2s+acgOWkp+mVv+W6plxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHRocmVzaG9sZCDpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01heExlbmd0aChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIikgJiYgZGF0YS5sZW5ndGggPD0gdGhyZXNob2xkO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5a2X56ym5Liy6ZW/5bqm5piv5ZCm5ruh6Laz5Yy66Ze06ZW/5bqmXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gbWluVGhyZXNob2xkIOacgOWwj+mYiOWAvFxyXG4gKiBAcGFyYW0gbWF4VGhyZXNob2xkIOacgOWkp+mYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTGVuZ3RoKGRhdGE6IGFueSwgbWluVGhyZXNob2xkOiBudW1iZXIsIG1heFRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tNaW5MZW5ndGgoZGF0YSwgbWluVGhyZXNob2xkKSAmJiBjaGVja01heExlbmd0aChkYXRhLCBtYXhUaHJlc2hvbGQpO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5pWw5YC85piv5ZCm5aSn5LqO5p+Q5Liq5YC8XHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gdGhyZXNob2xkIOmYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWluKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm51bWJlclwiKSAmJiBkYXRhID49IHRocmVzaG9sZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaVsOWAvOaYr+WQpuWwj+S6juafkOS4quWAvFxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHRocmVzaG9sZCDpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01heChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJudW1iZXJcIikgJiYgZGF0YSA8PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmlbDlgLzmmK/lkKblnKjmn5DkuKrljLrpl7TlhoVcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSBtaW5UaHJlc2hvbGQg5pyA5bCP6ZiI5YC8XHJcbiAqIEBwYXJhbSBtYXhUaHJlc2hvbGQg5pyA5aSn6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSYW5nZShkYXRhOiBhbnksIG1pblRocmVzaG9sZDogbnVtYmVyLCBtYXhUaHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrTWluKGRhdGEsIG1pblRocmVzaG9sZCkgJiYgY2hlY2tNYXgoZGF0YSwgbWF4VGhyZXNob2xkKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeepuuaIlk5VTEzlrZfnrKbkuLJcclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbXB0eU9yTnVsbChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkYXRhID09PSBudWxsIHx8IChjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmxlbmd0aCA9PT0gMCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XpnZ7nqbrmiJbpnZ5OVUxM5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTm9FbXB0eU9yTnVsbChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmxlbmd0aCA+IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mraPliJnooajovr7lvI9cclxuICogQHBhcmFtIGRhdGEg5pWw5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZWdFeHAoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZGF0YSBpbnN0YW5jZW9mIFJlZ0V4cDtcclxufSIsIi8qKlxyXG4gKiDniYjmnKzlj7dcclxuICovXHJcbmV4cG9ydCBjb25zdCBWRVJTSU9OOiBzdHJpbmcgPSBcIjMuMC4wXCI7XHJcblxyXG4vKipcclxuICog5YmN57yA56ymXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUFJFRklYOiBzdHJpbmcgPSBcImxheXgtXCI7XHJcblxyXG4vKipcclxuICog6buY6K6k5byA5aeL5bGC5pWwXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgWklOREVYOiBudW1iZXIgPSAxMDAwMDAwMDtcclxuXHJcbi8qKlxyXG4gKiDpu5jorqTnqpflj6Plrr3luqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1dJTkRPV19XSURUSDogbnVtYmVyID0gODAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOeql+WPo+mrmOW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0lORE9XX0hFSUdIVDogbnVtYmVyID0gNjAwO1xyXG5cclxuLyoqXHJcbiAqIOWGhee9ruaUr+aMgeivreiogFxyXG4gKi9cclxuZXhwb3J0IGVudW0gU3VwcG9ydExhbmd1YWdlIHtcclxuICAgIC8qKlxyXG4gICAgICog5Lit5paHXHJcbiAgICAgKi9cclxuICAgIFpIX0NOID0gXCJaSF9DTlwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDoi7HmlodcclxuICAgICAqL1xyXG4gICAgRU5fVVMgPSBcIkVOX1VTXCJcclxufSIsImltcG9ydCB7IEVudHJ5T3B0aW9uIH0gZnJvbSBcIi4vdHlwZVwiO1xyXG5pbXBvcnQgeyBWRVJTSU9OLCBaSU5ERVgsIFBSRUZJWCwgREVGQVVMVF9XSU5ET1dfV0lEVEgsIERFRkFVTFRfV0lORE9XX0hFSUdIVCwgU3VwcG9ydExhbmd1YWdlIH0gZnJvbSBcIi4vY29uc3RcIjtcclxuaW1wb3J0IHsgaXNQc3ROdW1iZXIsIGluVmFsdWVPcHRpb25zLCBpc1BzdEludCwgbWluIH0gZnJvbSBcIi4uL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5LWRlY29yYXRvclwiO1xyXG5pbXBvcnQgeyBVSVdpbmRvd09wdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnQvdWktd2luZG93L3R5cGVcIjtcclxuaW1wb3J0IFVJV2luZG93IGZyb20gXCIuLi9jb21wb25lbnQvdWktd2luZG93XCI7XHJcbmltcG9ydCB7IEV2ZW50U2V0dGVyIH0gZnJvbSBcIi4uL2NvcmUvZXZlbnQtYnVzL3R5cGVcIjtcclxuaW1wb3J0IEV2ZW50QnVzIGZyb20gXCIuLi9jb3JlL2V2ZW50LWJ1c1wiO1xyXG5pbXBvcnQgeyBjaGVja09mVHlwZSB9IGZyb20gXCIuLi9jb3JlL3ZhbGlkYXRvclwiO1xyXG5cclxuaW1wb3J0IFwiLi4vYXNzZXQvc3R5bGVcIjtcclxuXHJcblxyXG4vKipcclxuICog5YWl5Y+j5Y2V5L6L57G777yM5om/6L29552A5YWo5bGA5pWw5o2u5a2Y5YKoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyeSB7XHJcbiAgICAvKipcclxuICAgICAqIOengeacieWMluaehOmAoOWHveaVsO+8jOWunueOsOWNleS+i1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEVudHJ5T3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeJiOacrOWPt1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nID0gVkVSU0lPTjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOm7mOiupOWxguaVsCzkuI3og73lsI/kuo4xMDAwXHJcbiAgICAgKi9cclxuICAgIEBpc1BzdEludCgpXHJcbiAgICBAbWluKDEwMDApXHJcbiAgICBwdWJsaWMgekluZGV4OiBudW1iZXIgPSBaSU5ERVg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliY3nvIDnrKZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHByZWZpeDogc3RyaW5nID0gUFJFRklYO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6buY6K6k6K+t6KiAXHJcbiAgICAgKi9cclxuICAgIEBpblZhbHVlT3B0aW9ucyhTdXBwb3J0TGFuZ3VhZ2UuWkhfQ04sIFN1cHBvcnRMYW5ndWFnZS5FTl9VUylcclxuICAgIHB1YmxpYyBsYW5nOiBTdXBwb3J0TGFuZ3VhZ2UgPSBTdXBwb3J0TGFuZ3VhZ2UuWkhfQ047XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpu5jorqTnqpflj6PliJ3lp4vljJblrr3luqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gREVGQVVMVF9XSU5ET1dfV0lEVEg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpu5jorqTnqpflj6PliJ3lp4vljJbpq5jluqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IERFRkFVTFRfV0lORE9XX0hFSUdIVDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOebkeWQrOS6i+S7tlxyXG4gICAgICogQHBhcmFtIHF1ZXVlcyDkuovku7bpmJ/liJdcclxuICAgICAqL1xyXG4gICAgb24ocXVldWVzOiBFdmVudFNldHRlciA9IHt9KTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBldmVudEtleSBpbiBxdWV1ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IHF1ZXVlc1tldmVudEtleV07XHJcbiAgICAgICAgICAgIGlmIChjaGVja09mVHlwZShoYW5kbGVyLCBcImZ1bmN0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBFdmVudEJ1cy5nZXRJbnN0YW5jZSgpLm9uKGV2ZW50S2V5LCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOaWsOeql+WPo1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg56qX5Y+j5Y+C5pWwXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIG9wZW4ob3B0aW9uczogVUlXaW5kb3dPcHRpb24pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB1aVdpbmRvdyA9IG5ldyBVSVdpbmRvdyhvcHRpb25zKTtcclxuICAgICAgICBjb25zdCB1aVdpbmRvd0VsZW1lbnQgPSB1aVdpbmRvdy5wcmVzZW50KCk7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodWlXaW5kb3dFbGVtZW50KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1aVdpbmRvd0VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Z2Z5oCB5a6e5L6L5Y+Y6YePXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFbnRyeTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWUr+S4gOWPr+eUqOWvueixoVxyXG4gICAgICogQHBhcmFtIFtvcHRpb25zXSDlhaXlj6Plj4LmlbBcclxuICAgICAqIEByZXR1cm5zIEVudHJ5IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKG9wdGlvbnM6IEVudHJ5T3B0aW9uID0gPEVudHJ5T3B0aW9uPnt9KTogRW50cnkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEVudHJ5KG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWFpeWPo+WPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZXJPcHRpb25zKG9wdGlvbnM6IEVudHJ5T3B0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYW5nID0gb3B0aW9ucz8ubGFuZyA/PyBTdXBwb3J0TGFuZ3VhZ2UuWkhfQ047XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnM/LndpZHRoID8/IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zPy5oZWlnaHQgPz8gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy56SW5kZXggPSBvcHRpb25zPy56SW5kZXggPz8gdGhpcy56SW5kZXg7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRyeU92ZXJ0LCBFbnRyeU9wdGlvbiB9IGZyb20gXCIuL2FwcC9lbnRyeS90eXBlXCI7XHJcbmltcG9ydCBFbnRyeSBmcm9tIFwiLi9hcHAvZW50cnlcIjtcclxuXHJcbi8qKlxyXG4gKiDlr7nlpJblhazlvIDmlrnms5VcclxuICovXHJcbmZ1bmN0aW9uIG92ZXJ0KCk6IEVudHJ5T3ZlcnQge1xyXG4gICAgY29uc3QgZW50cnkgPSBFbnRyeS5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5T3ZlcnQgPSA8RW50cnlPdmVydD5mdW5jdGlvbiAob3B0aW9uczogRW50cnlPcHRpb24pOiB2b2lkIHtcclxuICAgICAgICBFbnRyeS5nZXRJbnN0YW5jZShvcHRpb25zKTtcclxuICAgIH07XHJcblxyXG4gICAgZW50cnlPdmVydC5vbiA9IGVudHJ5Lm9uO1xyXG4gICAgZW50cnlPdmVydC52ZXJzaW9uID0gZW50cnkudmVyc2lvbjtcclxuICAgIGVudHJ5T3ZlcnQub3BlbiA9IGVudHJ5Lm9wZW47XHJcblxyXG4gICAgcmV0dXJuIGVudHJ5T3ZlcnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG92ZXJ0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==