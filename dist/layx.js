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
var Component = (function () {
    function Component() {
        this.entry = entry_1.default.getInstance();
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
        _this.border = {
            width: const_1.DEFAULT_BORDER_WIDTH,
            style: const_1.DEFAULT_BORDER_STYLE,
            color: const_1.DEFAULT_BORDER_COLOR,
            radius: const_1.DEFAULT_BORDER_RADIUS
        };
        _this.boxShadow = true;
        _this.id = (_a = options) === null || _a === void 0 ? void 0 : _a.id;
        _this.handlerOptions(options);
        return _this;
    }
    UIWindow.prototype.present = function () {
        var element = document.createElement("div");
        element.id = "" + (this.entry.prefix + this.id);
        element_helper_1.addCSSClasses(element, "window", this.boxShadow ? "box-shadow" : undefined);
        element_helper_1.addCSSStyles(element, {
            maxWidth: this.maxWidth !== innerWidth ? this.maxWidth + "px" : null,
            maxHeight: this.maxHeight !== innerHeight ? this.maxHeight + "px" : null,
            minWidth: this.minWidth + "px",
            minHeight: this.minHeight + "px",
            width: this.width + "px",
            height: this.height + "px",
            border: this.border === false ? null :
                this.border.width + "px " + this.border.style + " " + this.border.color,
            borderRadius: this.border === false ? null :
                this.border.radius + "px",
            webkitBorderRadius: this.border === false ? null :
                this.border.radius + "px",
        });
        return element;
    };
    UIWindow.prototype.handlerOptions = function (options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
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
        Object.defineProperty(target, propertyKey, {
            get: function () { return value; },
            set: function (newValue) {
                value = propertySetter(newValue, propertyKey, value);
            }
        });
    };
}


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
    return checkOfType(data, "number", "string", "undefined", "object") && valueOptions.indexOf(data) > -1;
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
__webpack_require__(/*! ../asset/style */ "./src/app/asset/style/index.ts");
var Entry = (function () {
    function Entry(options) {
        this.version = const_1.VERSION;
        this.prefix = const_1.PREFIX;
        this.lang = const_1.SupportLanguage.ZH_CN;
        this.width = const_1.DEFAULT_WINDOW_WIDTH;
        this.height = const_1.DEFAULT_WINDOW_HEIGHT;
        this.handlerOptions(options);
    }
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
        var _a, _b, _c, _d, _e, _f;
        this.lang = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.lang, (_b !== null && _b !== void 0 ? _b : const_1.SupportLanguage.ZH_CN));
        this.width = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.width, (_d !== null && _d !== void 0 ? _d : this.width));
        this.height = (_f = (_e = options) === null || _e === void 0 ? void 0 : _e.height, (_f !== null && _f !== void 0 ? _f : this.height));
    };
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
    entryOvert.version = entry.version;
    entryOvert.open = entry.open;
    return entryOvert;
}
exports.default = overt();


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2NvbW1vbi5jc3M/Mzk0NiIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9hc3NldC9zdHlsZS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29tcG9uZW50L3VpLXdpbmRvdy9jb25zdC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb21wb25lbnQvdWktd2luZG93L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5LWRlY29yYXRvci50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL2V4Y2VwdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL2hlbHBlci9lbGVtZW50LWhlbHBlci50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL2hlbHBlci9vYmplY3QtaGVscGVyLnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvcmUvdmFsaWRhdG9yL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2VudHJ5L2NvbnN0LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2VudHJ5L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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dUJBQWUsQ0FBQyxLQUFLLEdBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssZUFBRyxPQUFPLDBDQUFFLEtBQUssdUNBQUksSUFBSSxDQUFDLEtBQUssR0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxlQUFHLE9BQU8sMENBQUUsTUFBTSx1Q0FBSSxJQUFJLENBQUMsTUFBTSxHQUFDO0lBQ2pELENBQUM7SUF6REQ7UUFEQyxtQ0FBYyxDQUFDLHVCQUFlLENBQUMsS0FBSyxFQUFFLHVCQUFlLENBQUMsS0FBSyxDQUFDO3VDQUNSO0lBTXJEO1FBREMsZ0NBQVcsRUFBRTt3Q0FDOEI7SUFNNUM7UUFEQyxnQ0FBVyxFQUFFO3lDQUNnQztJQThDbEQsWUFBQztDQUFBO2tCQWhGb0IsS0FBSzs7Ozs7Ozs7Ozs7Ozs7O0FDVjFCLGlGQUFnQztBQUtoQyxTQUFTLEtBQUs7SUFDVixJQUFNLEtBQUssR0FBRyxlQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFbEMsSUFBTSxVQUFVLEdBQWUsVUFBVSxPQUFvQjtRQUN6RCxlQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztJQUVGLFVBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUNuQyxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFFN0IsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQUVELGtCQUFlLEtBQUssRUFBRSxDQUFDIiwiZmlsZSI6ImxheXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsYXl4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxheXhcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9jb21tb24uY3NzXCI7IiwiaW1wb3J0IEVudHJ5IGZyb20gXCIuLi9lbnRyeVwiO1xyXG5cclxuLyoqXHJcbiAqIOe7hOS7tuexu++8jOaJgOacieeahOe7hOS7tumDveW/hemhu+e7p+aJv+ivpeexu1xyXG4gKiBAdGVtcGxhdGUgVE9wdGlvbiDnu4Tku7blj4LmlbBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUT3B0aW9uPiB7XHJcbiAgICAvKipcclxuICAgICAqIOWFpeWPo+WvueixoVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZW50cnk6IEVudHJ5ID0gRW50cnkuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7hOS7tuWUr+S4gOagh+ivhlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN5bWJvbDogc3ltYm9sID0gU3ltYm9sKFwibW9ua3NvdWxcIik7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWPr+mAieWPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBoYW5kbGVyT3B0aW9ucyhvcHRpb25zOiBUT3B0aW9uKTogdm9pZDtcclxufSIsIi8qKlxyXG4gKiDovrnmoYbmoLflvI9cclxuICovXHJcbmV4cG9ydCBlbnVtIEJvcmRlclN0eWxlIHtcclxuICAgIC8qKlxyXG4gICAgICog54K554q2XHJcbiAgICAgKi9cclxuICAgIERPVFRFRCA9IFwiZG90dGVkXCIsXHJcbiAgICAvKipcclxuICAgICAqIOiZmue6v1xyXG4gICAgICovXHJcbiAgICBEQVNIRUQgPSBcImRhc2hlZFwiLFxyXG4gICAgLyoqXHJcbiAgICAgKiDlrp7nur9cclxuICAgICAqL1xyXG4gICAgU09MSUQgPSBcInNvbGlkXCIsXHJcbiAgICAvKipcclxuICAgICAqIOWPjOe6v1xyXG4gICAgICovXHJcbiAgICBET1VCTEUgPSBcImRvdWJsZVwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpu5jorqTmnIDlsI/lrr3luqZcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX01JTl9XSURUSDogbnVtYmVyID0gMjAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWwj+mrmOW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUlOX0hFSUdIVDogbnVtYmVyID0gMjAwO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWkp+WuveW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFYX1dJRFRIOiBudW1iZXIgPSBpbm5lcldpZHRoO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOacgOWkp+mrmOW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFYX0hFSUdIVDogbnVtYmVyID0gaW5uZXJIZWlnaHQ7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG5a695bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfV0lEVEg6IG51bWJlciA9IDE7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG5qC35byPXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfU1RZTEU6IEJvcmRlclN0eWxlID0gQm9yZGVyU3R5bGUuU09MSUQ7XHJcblxyXG4vKipcclxuICog6buY6K6k6L655qGG6aKc6ImyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9CT1JERVJfQ09MT1I6IHN0cmluZyA9IFwiIzNiYWNlZFwiO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOi+ueahhuWchuinklxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQk9SREVSX1JBRElVUzogbnVtYmVyID0gNDsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9cIjtcclxuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gXCIuLi91aS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVUlXaW5kb3dPcHRpb24sIEJvcmRlck9wdGlvbiB9IGZyb20gXCIuL3R5cGVcIjtcclxuaW1wb3J0IHsgaXNQc3ROdW1iZXIsIGlzTm9FbXB0eU9yTnVsbCwgaXNCb29sZWFuLCBjb21iaW5lIH0gZnJvbSBcIi4uLy4uL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5LWRlY29yYXRvclwiO1xyXG5pbXBvcnQgeyBhZGRDU1NTdHlsZXMsIGFkZENTU0NsYXNzZXMgfSBmcm9tIFwiLi4vLi4vY29yZS9oZWxwZXIvZWxlbWVudC1oZWxwZXJcIjtcclxuaW1wb3J0IHsgREVGQVVMVF9NSU5fV0lEVEgsIERFRkFVTFRfTUlOX0hFSUdIVCwgREVGQVVMVF9NQVhfV0lEVEgsIERFRkFVTFRfTUFYX0hFSUdIVCwgREVGQVVMVF9CT1JERVJfV0lEVEgsIERFRkFVTFRfQk9SREVSX0NPTE9SLCBERUZBVUxUX0JPUkRFUl9TVFlMRSwgREVGQVVMVF9CT1JERVJfUkFESVVTLCBCb3JkZXJTdHlsZSB9IGZyb20gXCIuL2NvbnN0XCI7XHJcbmltcG9ydCB7IGNoZWNrUHN0SW50LCBjaGVja0luVmFsdWVPcHRpb25zLCBjaGVja05vRW1wdHlPck51bGwgfSBmcm9tIFwiLi4vLi4vY29yZS92YWxpZGF0b3JcIjtcclxuXHJcbi8qKlxyXG4gKiDnqpflj6Pnu4Tku7bnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJV2luZG93IGV4dGVuZHMgQ29tcG9uZW50PFVJV2luZG93T3B0aW9uPiBpbXBsZW1lbnRzIFVJQ29tcG9uZW50PFVJV2luZG93T3B0aW9uPiB7XHJcbiAgICAvKipcclxuICAgICAqIOaehOmAoOWHveaVsOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogVUlXaW5kb3dPcHRpb24pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucz8uaWQ7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWUr+S4gElkXHJcbiAgICAgKi9cclxuICAgIEBpc05vRW1wdHlPck51bGwoKVxyXG4gICAgcHVibGljIHJlYWRvbmx5IGlkOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlrr3luqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gdGhpcy5lbnRyeS53aWR0aDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmrmOW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gdGhpcy5lbnRyeS5oZWlnaHQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDlsI/lrr3luqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBtaW5XaWR0aDogbnVtYmVyID0gREVGQVVMVF9NSU5fV0lEVEg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDlsI/pq5jluqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBtaW5IZWlnaHQ6IG51bWJlciA9IERFRkFVTFRfTUlOX0hFSUdIVDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWkp+WuveW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIG1heFdpZHRoOiBudW1iZXIgPSBERUZBVUxUX01BWF9XSURUSDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWkp+mrmOW6plxyXG4gICAgICovXHJcbiAgICBAaXNQc3ROdW1iZXIoKVxyXG4gICAgcHVibGljIG1heEhlaWdodDogbnVtYmVyID0gREVGQVVMVF9NQVhfSEVJR0hUO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L655qGG5qC35byPXHJcbiAgICAgKi9cclxuICAgIEBjb21iaW5lKHtcclxuICAgICAgICB3aWR0aDogY2hlY2tQc3RJbnQsIC8qKiDmraPmlbTmlbAgKi9cclxuICAgICAgICBzdHlsZTogW0JvcmRlclN0eWxlLlNPTElELCBCb3JkZXJTdHlsZS5ET1VCTEUsIEJvcmRlclN0eWxlLkRPVFRFRCwgQm9yZGVyU3R5bGUuREFTSEVEXSwgLyoqIOWPr+mAieWAvCAqL1xyXG4gICAgICAgIGNvbG9yOiBjaGVja05vRW1wdHlPck51bGwsICAvKiog6Z2e56m65a2X56ym5LiyICovXHJcbiAgICAgICAgcmFkaXVzOiBjaGVja1BzdEludCAvKiog5q2j5pW05pWwICovXHJcbiAgICB9LCBmYWxzZSlcclxuICAgIHB1YmxpYyBib3JkZXI6IEJvcmRlck9wdGlvbiB8IGZhbHNlID0gPEJvcmRlck9wdGlvbj57XHJcbiAgICAgICAgd2lkdGg6IERFRkFVTFRfQk9SREVSX1dJRFRILFxyXG4gICAgICAgIHN0eWxlOiBERUZBVUxUX0JPUkRFUl9TVFlMRSxcclxuICAgICAgICBjb2xvcjogREVGQVVMVF9CT1JERVJfQ09MT1IsXHJcbiAgICAgICAgcmFkaXVzOiBERUZBVUxUX0JPUkRFUl9SQURJVVNcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmLTlvbFcclxuICAgICAqL1xyXG4gICAgQGlzQm9vbGVhbigpXHJcbiAgICBwdWJsaWMgYm94U2hhZG93OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaOp+S7tuWFg+e0oOWvueixoVxyXG4gICAgICogQHJldHVybnMgSFRNTEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJlc2VudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZWxlbWVudC5pZCA9IGAke3RoaXMuZW50cnkucHJlZml4ICsgdGhpcy5pZH1gO1xyXG5cclxuICAgICAgICBhZGRDU1NDbGFzc2VzKGVsZW1lbnQsXHJcbiAgICAgICAgICAgIFwid2luZG93XCIsXHJcbiAgICAgICAgICAgIHRoaXMuYm94U2hhZG93ID8gXCJib3gtc2hhZG93XCIgOiB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICBhZGRDU1NTdHlsZXMoZWxlbWVudCxcclxuICAgICAgICAgICAgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMubWF4V2lkdGggIT09IGlubmVyV2lkdGggPyBgJHt0aGlzLm1heFdpZHRofXB4YCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IHRoaXMubWF4SGVpZ2h0ICE9PSBpbm5lckhlaWdodCA/IGAke3RoaXMubWF4SGVpZ2h0fXB4YCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogYCR7dGhpcy5taW5XaWR0aH1weGAsXHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IGAke3RoaXMubWluSGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHt0aGlzLndpZHRofXB4YCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7dGhpcy5oZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLmJvcmRlciA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci53aWR0aH1weCAke3RoaXMuYm9yZGVyLnN0eWxlfSAke3RoaXMuYm9yZGVyLmNvbG9yfWAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3RoaXMuYm9yZGVyLnJhZGl1c31weGAsXHJcbiAgICAgICAgICAgICAgICB3ZWJraXRCb3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgICAgIGAke3RoaXMuYm9yZGVyLnJhZGl1c31weGAsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWkhOeQhuWIneWni+S8oOWFpeWPguaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5o6n5Lu25pSv5oyB5Lyg5YWl5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZXJPcHRpb25zKG9wdGlvbnM6IFVJV2luZG93T3B0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnM/LndpZHRoID8/IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zPy5oZWlnaHQgPz8gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5tYXhXaWR0aCA9IG9wdGlvbnM/Lm1heFdpZHRoID8/IHRoaXMubWF4V2lkdGg7XHJcbiAgICAgICAgdGhpcy5tYXhIZWlnaHQgPSBvcHRpb25zPy5tYXhIZWlnaHQgPz8gdGhpcy5tYXhIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5taW5XaWR0aCA9IG9wdGlvbnM/Lm1pbldpZHRoID8/IHRoaXMubWluV2lkdGg7XHJcbiAgICAgICAgdGhpcy5taW5IZWlnaHQgPSBvcHRpb25zPy5taW5IZWlnaHQgPz8gdGhpcy5taW5IZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGgubWF4KHRoaXMubWluV2lkdGgsIHRoaXMud2lkdGgpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBNYXRoLm1pbih0aGlzLm1heFdpZHRoLCB0aGlzLndpZHRoKTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLm1pbih0aGlzLm1heEhlaWdodCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYm9yZGVyID0gPEJvcmRlck9wdGlvbiB8IGZhbHNlPm9wdGlvbnM/LmJvcmRlciA/PyB0aGlzLmJvcmRlcjtcclxuICAgICAgICB0aGlzLmJveFNoYWRvdyA9IG9wdGlvbnM/LmJveFNoYWRvdyA/PyB0aGlzLmJveFNoYWRvdztcclxuICAgIH1cclxufSIsImltcG9ydCB7IFByb3BlcnR5U2V0dGVyLCBQcm9wZXJ0eURlY29yYXRvciB9IGZyb20gXCIuL3R5cGVcIjtcclxuaW1wb3J0IHsgY2hlY2tQc3ROdW1iZXIsIGNoZWNrSW5WYWx1ZU9wdGlvbnMsIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tPZlR5cGUsIGNoZWNrSlNPTk9iamVjdCwgY2hlY2tBcnJheSwgY2hlY2tSZWdFeHAgfSBmcm9tIFwiLi4vdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IFZhbHVlT3B0aW9uIH0gZnJvbSBcIi4uL3ZhbGlkYXRvci90eXBlXCI7XHJcbmltcG9ydCB7IHZhbGlkYXRlRmFpbCB9IGZyb20gXCIuLi9leGNlcHRpb25cIjtcclxuaW1wb3J0IHsgSlNPTk9iamVjdCB9IGZyb20gXCIuLi9oZWxwZXIvdHlwZVwiO1xyXG5pbXBvcnQgeyBtZXJnZUpTT05PYmplY3QgfSBmcm9tIFwiLi4vaGVscGVyL29iamVjdC1oZWxwZXJcIjtcclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mraPmlbDlgLznsbvlnotcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNQc3ROdW1iZXIoKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tQc3ROdW1iZXIobmV3VmFsdWUpKSB2YWxpZGF0ZUZhaWwoYFwiJHtuZXdWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTmraPmlbDlgLznsbvlnotgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mjIflrprlj6/pgInlgLznsbvlnotcclxuICogQHBhcmFtIHZhbHVlT3B0aW9ucyDlj6/pgInlgLxcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5WYWx1ZU9wdGlvbnMoLi4udmFsdWVPcHRpb25zOiBWYWx1ZU9wdGlvbik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrSW5WYWx1ZU9wdGlvbnMobmV3VmFsdWUsIC4uLnZhbHVlT3B0aW9ucykpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeWcqCBbJHt2YWx1ZU9wdGlvbnMudG9TdHJpbmcoKX1dIOWAvOiMg+WbtOWGhWApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpemdnuepuuaIlumdnk5VTEzlrZfnrKbkuLJcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOb0VtcHR5T3JOdWxsKCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBnZW5lcmF0ZURlY29yYXRvcigobmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChuZXdWYWx1ZSkpIHZhbGlkYXRlRmFpbChgXCIke25ld1ZhbHVlfVwiIOS4jeaYr+S4gOS4quacieaViOeahOmdnuepuuWtl+espuS4smApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeW4g+WwlOexu+Wei+WAvFxyXG4gKiBAcmV0dXJucyBQcm9wZXJ0eURlY29yYXRvciBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4oKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2tPZlR5cGUobmV3VmFsdWUsIFwiYm9vbGVhblwiKSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5biD5bCU5YC8YCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog57uE5ZCI5qOA5p+l6aqM6K+BXHJcbiAqIEBwYXJhbSBqc29uRGVjb3JhdG9yIOWPguaVsOavj+S4gOmhueijhemlsOWZqO+8jOaUr+aMgUFycmF5fEZ1bmN0aW9ufFJlZ0V4cFxyXG4gKiBAcGFyYW0gaXRlbXMg5YW25L2Z5Y+v6YCJ5YC877yM5Y+q5pSv5oyB5Z+65pys5pWw5o2u57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZShqc29uRGVjb3JhdG9yOiBKU09OT2JqZWN0ID0ge30sIC4uLml0ZW1zOiBBcnJheTxhbnk+KTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRGVjb3JhdG9yKChuZXdWYWx1ZSwgcHJvcGVydHlLZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVja0pTT05PYmplY3QobmV3VmFsdWUpICYmIGl0ZW1zLmluZGV4T2YobmV3VmFsdWUpID09PSAtMSkgdmFsaWRhdGVGYWlsKGBcIiR7bmV3VmFsdWV9XCIg5LiN5piv5LiA5Liq5pyJ5pWI55qE5Y+C5pWw5YC8YCk7XHJcbiAgICAgICAgaWYgKGl0ZW1zLmluZGV4T2YobmV3VmFsdWUpID4gLTEpIHJldHVybiBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBuZXdWYWx1ZVtrZXldO1xyXG4gICAgICAgICAgICBjb25zdCBkZWNvcmF0b3IgPSBqc29uRGVjb3JhdG9yW2tleV07XHJcbiAgICAgICAgICAgIGlmICghZGVjb3JhdG9yKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaGVja0FycmF5KGRlY29yYXRvcikgJiYgZGVjb3JhdG9yLmluZGV4T2Yoa2V5VmFsdWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGYWlsKGBcIiR7a2V5VmFsdWV9XCIg5LiN5ZyoIFske2RlY29yYXRvci50b1N0cmluZygpfV0g5YC86IyD5Zu05YaFYCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2hlY2tPZlR5cGUoZGVjb3JhdG9yLCBcImZ1bmN0aW9uXCIpICYmICFkZWNvcmF0b3Ioa2V5VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZhaWwoYFwiJHtrZXlWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTlj4LmlbDlgLxgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hlY2tSZWdFeHAoZGVjb3JhdG9yKSAmJiAhZGVjb3JhdG9yLnRlc3Qoa2V5VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZhaWwoYFwiJHtrZXlWYWx1ZX1cIiDkuI3mmK/kuIDkuKrmnInmlYjnmoTlj4LmlbDlgLxgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdWYWx1ZSA9IG1lcmdlSlNPTk9iamVjdCh2YWx1ZSA/PyB7fSwgbmV3VmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog55Sf5oiQ6KOF6aWw5Zmo5qC45b+D5Luj56CBXHJcbiAqIEBwYXJhbSBwcm9wZXJ0eVNldHRlciDlsZ7mgKforr7nva7lmahcclxuICogQHJldHVybnMgUHJvcGVydHlEZWNvcmF0b3IgXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZURlY29yYXRvcihwcm9wZXJ0eVNldHRlcjogUHJvcGVydHlTZXR0ZXIpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIHtcclxuICAgICAgICAgICAgZ2V0OiAoKSA9PiB2YWx1ZSxcclxuICAgICAgICAgICAgc2V0OiAobmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gcHJvcGVydHlTZXR0ZXIobmV3VmFsdWUsIHByb3BlcnR5S2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDmipvlh7rnqIvluo/lvILluLjkv6Hmga9cclxuICogQHBhcmFtIG1lc3NhZ2Ug5byC5bi4566A6KaBXHJcbiAqIEByZXR1cm5zIG5ldmVyIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcEVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IG5ldmVyIHtcclxuICAgIHRocm93IEVycm9yKGBcXG7nsbvlnovvvJrnqIvluo/lvILluLhcXG7lvILluLjkv6Hmga/vvJoke21lc3NhZ2V9XFxu5aCG5qCI5L+h5oGv77yaYCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmipvlh7rpqozor4HlpLHotKXkv6Hmga9cclxuICogQHBhcmFtIG1lc3NhZ2Ug6ZSZ6K+v5L+h5oGvXHJcbiAqIEByZXR1cm5zIG5ldmVyIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRmFpbChtZXNzYWdlOiBzdHJpbmcpOiBuZXZlciB7XHJcbiAgICB0aHJvdyBFcnJvcihgXFxu57G75Z6L77ya6aqM6K+B6ZSZ6K+vXFxu6ZSZ6K+v5L+h5oGv77yaJHttZXNzYWdlfVxcbuWghuagiOS/oeaBr++8mmApO1xyXG59IiwiaW1wb3J0IHsgUFJFRklYIH0gZnJvbSBcIi4uLy4uL2VudHJ5L2NvbnN0XCI7XHJcblxyXG4vKipcclxuICog5om56YeP5re75Yqg5YWD57Sg5qC35byPXHJcbiAqIEBwYXJhbSBlbGVtZW50IOWFg+e0oOWvueixoVxyXG4gKiBAcGFyYW0gY3NzU3R5bGVzIOagt+W8j+ihqOWvueixoVxyXG4gKiBAcmV0dXJucyB2b2lkIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENTU1N0eWxlcyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsIGNzc1N0eWxlczogQ1NTU3R5bGVEZWNsYXJhdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgZm9yIChjb25zdCBjc3NQcm9wIGluIGNzc1N0eWxlcykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVbY3NzUHJvcF0gPSBjc3NTdHlsZXNbY3NzUHJvcF0gPz8gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOa3u+WKoENTUyBDbGFzc1xyXG4gKiDpu5jorqTliY3nvIDkuLogX19QUkVGSVhfX++8jOWmguaenGNsYXNz5YmN6Z2i5bimICEg5YiZ5peg6ZyA5re75Yqg5YmN57yAXHJcbiAqIEBwYXJhbSBlbGVtZW50IOWFg+e0oOWvueixoVxyXG4gKiBAcGFyYW0gY2xhc3NlcyBjbGFzc+WIl+ihqFxyXG4gKiBAcmV0dXJucyBIVE1MRWxlbWVudCB8IG51bGwgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ1NTQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsIC4uLmNsYXNzZXM6IEFycmF5PHN0cmluZyB8IHVuZGVmaW5lZD4pOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gdXBkYXRlQ1NTQ2xhc3NlcyhlbGVtZW50LCBmdW5jdGlvbiAoY3VycmVudENsYXNzZXM6IHN0cmluZ1tdLCBpbmRleDogbnVtYmVyLCBpdGVtQ2xhc3M6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghfmluZGV4KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDbGFzc2VzLnB1c2goaXRlbUNsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBQUkVGSVgsIC4uLmNsYXNzZXMpO1xyXG59XHJcblxyXG4vKipcclxuICog56e76ZmkQ1NTIENsYXNzXHJcbiAqIOm7mOiupOWJjee8gOS4uiBfX1BSRUZJWF9f77yM5aaC5p6cY2xhc3PliY3pnaLluKYgISDliJnml6DpnIDmt7vliqDliY3nvIBcclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57Sg5a+56LGhXHJcbiAqIEBwYXJhbSBjbGFzc2VzIGNsYXNz5YiX6KGoXHJcbiAqIEByZXR1cm5zIEhUTUxFbGVtZW50IHwgbnVsbCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDU1NDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCwgLi4uY2xhc3Nlczogc3RyaW5nW10pOiBIVE1MRWxlbWVudCB8IG51bGwge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gdXBkYXRlQ1NTQ2xhc3NlcyhlbGVtZW50LCBmdW5jdGlvbiAoY3VycmVudENsYXNzZXM6IHN0cmluZ1tdLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2xhc3Nlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFBSRUZJWCwgLi4uY2xhc3Nlcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKbljIXlkKtDU1MgQ2xhc3NcclxuICog6buY6K6k5YmN57yA5Li6IF9fUFJFRklYX1/vvIzlpoLmnpxjbGFzc+WJjemdouW4piAhIOWImeaXoOmcgOa3u+WKoOWJjee8gFxyXG4gKiBAcGFyYW0gZWxlbWVudCDlhYPntKDlr7nosaFcclxuICogQHBhcmFtIGNsYXNzTmFtZSBjbGFzc+WIl+ihqFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NTU0NsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCwgY2xhc3NOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRDbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvZyk7XHJcbiAgICBjb25zdCBjbHMgPSBjbGFzc05hbWUuaW5kZXhPZihcIiFcIikgPT09IDAgPyBjbGFzc05hbWUuc3Vic3RyKDEpIDogUFJFRklYICsgY2xhc3NOYW1lO1xyXG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50Q2xhc3Nlcy5pbmRleE9mKGNscyk7XHJcbiAgICByZXR1cm4gISF+aW5kZXg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmm7TmlrBDU1MgQ2xhc3PvvIzljIXmi6zmlrDlop7jgIHmm7TmlrDjgIHliKDpmaRcclxuICog6buY6K6k5YmN57yA5Li6IF9fUFJFRklYX1/vvIzlpoLmnpxjbGFzc+WJjemdouW4piAhIOWImeaXoOmcgOa3u+WKoOWJjee8gFxyXG4gKiBAcGFyYW0gZWxlbWVudCDlhYPntKDlr7nosaFcclxuICogQHBhcmFtIGhhbmRsZXIg5pu05paw5pa55byPXHJcbiAqIEBwYXJhbSBbcHJlZml4XSDliY3nvIDnrKZcclxuICogQHBhcmFtIGNsYXNzZXMgY2xhc3PliJfooahcclxuICogQHJldHVybnMgSFRNTEVsZW1lbnQgfCBudWxsIFxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlQ1NTQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgaGFuZGxlcjogKGN1cnJlbnRDbGFzc2VzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlciwgaXRlbUNsYXNzOiBzdHJpbmcpID0+IHZvaWQsIHByZWZpeDogc3RyaW5nID0gUFJFRklYLCAuLi5jbGFzc2VzOiBBcnJheTxzdHJpbmcgfCB1bmRlZmluZWQ+KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgY3VycmVudENsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy9nKTtcclxuICAgIGNsYXNzZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNscyA9IGl0ZW0uaW5kZXhPZihcIiFcIikgPT09IDAgPyBpdGVtLnN1YnN0cigxKSA6IHByZWZpeCArIGl0ZW07XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY3VycmVudENsYXNzZXMuaW5kZXhPZihjbHMpO1xyXG4gICAgICAgICAgICBoYW5kbGVyKGN1cnJlbnRDbGFzc2VzLCBpbmRleCwgY2xzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGN1cnJlbnRDbGFzc2VzLmpvaW4oXCIgXCIpLnRyaW0oKTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59IiwiaW1wb3J0IHsgY2hlY2tKU09OT2JqZWN0IH0gZnJvbSBcIi4uL3ZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBKU09OT2JqZWN0IH0gZnJvbSBcIi4vdHlwZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWFi+mahkpTT07lr7nosaFcclxuICogQHBhcmFtIHNvdXJjZSDljp9KU09O57G75Z6L5a+56LGhXHJcbiAqIEByZXR1cm5zIOWFi+mahuWQjueahEpTT07nsbvlnovlr7nosaFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUpTT05PYmplY3Q8VCBleHRlbmRzIEpTT05PYmplY3Q+KHNvdXJjZTogVCk6IFQge1xyXG4gICAgY29uc3QgbmV3T2JqZWN0ID0gPGFueT57fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzb3VyY2UpKSB7XHJcbiAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBjaGVja0pTT05PYmplY3Qoc291cmNlW2tleV0pID8gY2xvbmVKU09OT2JqZWN0KHNvdXJjZVtrZXldKSA6IHNvdXJjZVtrZXldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld09iamVjdCBhcyBUO1xyXG59XHJcblxyXG4vKipcclxuICog5ZCI5bm2SlNPTuWvueixoVxyXG4gKiBAcGFyYW0gc291cmNlIOa6kEpTT07nsbvlnovlr7nosaFcclxuICogQHBhcmFtIGRlc3Qg55uu5qCHSlNPTuexu+Wei+WvueixoVxyXG4gKiBAcmV0dXJucyDlkIjlubblkI7nmoRKU09O57G75Z6L5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VKU09OT2JqZWN0PFQgZXh0ZW5kcyBKU09OT2JqZWN0Pihzb3VyY2U6IFQsIGRlc3Q6IFQpOiBUIHtcclxuICAgIGNvbnN0IG5ld09iamVjdCA9IDxhbnk+Y2xvbmVKU09OT2JqZWN0KHNvdXJjZSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGVzdCkpIHtcclxuICAgICAgICBpZiAobmV3T2JqZWN0W2tleV0gPT09IHVuZGVmaW5lZCB8fCAhY2hlY2tKU09OT2JqZWN0KGRlc3Rba2V5XSkpIHtcclxuICAgICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBkZXN0W2tleV07XHJcblxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBtZXJnZUpTT05PYmplY3QobmV3T2JqZWN0W2tleV0sIGRlc3Rba2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3T2JqZWN0IGFzIFQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2FuVHlwZW9mLCBWYWx1ZU9wdGlvbiB9IGZyb20gXCIuL3R5cGVcIjtcclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6Xog73lpJ/ooqsgdHlwZW9mIOeahOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHR5cGVOYW1lcyDnsbvlnovpm4blkIhcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja09mVHlwZShkYXRhOiBhbnksIC4uLnR5cGVOYW1lczogQXJyYXk8Q2FuVHlwZW9mPik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVOYW1lcy5pbmRleE9mKHR5cGVvZiBkYXRhKSA+IC0xO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5pW05pWw57G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSW50KGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwibnVtYmVyXCIpICYmICgvXlxcLT9bMC05XSskLy50ZXN0KGRhdGEpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+ato+aVtOaVsOexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1BzdEludChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja0ludChkYXRhKSAmJiBkYXRhID49IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mraPmlbDlgLznsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQc3ROdW1iZXIoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJudW1iZXJcIikgJiYgZGF0YSA+PSAwO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5pivSlNPTuWvueixoeexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0pTT05PYmplY3QoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJvYmplY3RcIikgJiZcclxuICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSkudG9Mb3dlckNhc2UoKSA9PT0gXCJbb2JqZWN0IG9iamVjdF1cIiAmJlxyXG4gICAgICAgICFkYXRhLmxlbmd0aDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaYr+aVsOe7hOWvueixoeexu+Wei1xyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0FycmF5KGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmmK/mjIflrprnsbvlnovmlbDnu4Tlr7nosaHnsbvlnotcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSBjaGVja0l0ZW0g5pWw57uE6aG55qOA5p+l5Ye95pWwXHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBcnJheUVhY2hTYW1lKGRhdGE6IGFueSwgY2hlY2tJdGVtOiAoaXRlbTogYW55KSA9PiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgbGV0IGlzU2FtZUFycmF5ID0gdHJ1ZTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XHJcbiAgICAgICAgaWYgKCFjaGVja0l0ZW0oaXRlbSkpIHtcclxuICAgICAgICAgICAgaXNTYW1lQXJyYXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc1NhbWVBcnJheTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeWtl+espuS4suaYr+WQpuWMheWQq+aMh+WumuWtl+esplxyXG4gKiBAcGFyYW0gZGF0YSDmlbDlgLxcclxuICogQHBhcmFtIGNoYXJhY3RlciDlrZfnrKZcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbnRhaW5zKGRhdGE6IGFueSwgY2hhcmFjdGVyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmluZGV4T2YoY2hhcmFjdGVyKSA+IC0xO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5oyH5a6a5Y+v6YCJ5YC857G75Z6LXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gdmFsdWVPcHRpb25zIOWPr+mAieWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJblZhbHVlT3B0aW9ucyhkYXRhOiBhbnksIC4uLnZhbHVlT3B0aW9uczogVmFsdWVPcHRpb24pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcIm51bWJlclwiLCBcInN0cmluZ1wiLCBcInVuZGVmaW5lZFwiLCBcIm9iamVjdFwiKSAmJiB2YWx1ZU9wdGlvbnMuaW5kZXhPZihkYXRhKSA+IC0xO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5a2X56ym5Liy6ZW/5bqm5piv5ZCm5ruh6Laz5pyA5bCP6ZW/5bqmXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gdGhyZXNob2xkIOmYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWluTGVuZ3RoKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja09mVHlwZShkYXRhLCBcInN0cmluZ1wiKSAmJiBkYXRhLmxlbmd0aCA+PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XlrZfnrKbkuLLplb/luqbmmK/lkKbmu6HotrPmnIDlpKfplb/luqZcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSB0aHJlc2hvbGQg6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXhMZW5ndGgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwic3RyaW5nXCIpICYmIGRhdGEubGVuZ3RoIDw9IHRocmVzaG9sZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeWtl+espuS4sumVv+W6puaYr+WQpua7oei2s+WMuumXtOmVv+W6plxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIG1pblRocmVzaG9sZCDmnIDlsI/pmIjlgLxcclxuICogQHBhcmFtIG1heFRocmVzaG9sZCDmnIDlpKfpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0xlbmd0aChkYXRhOiBhbnksIG1pblRocmVzaG9sZDogbnVtYmVyLCBtYXhUaHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrTWluTGVuZ3RoKGRhdGEsIG1pblRocmVzaG9sZCkgJiYgY2hlY2tNYXhMZW5ndGgoZGF0YSwgbWF4VGhyZXNob2xkKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaVsOWAvOaYr+WQpuWkp+S6juafkOS4quWAvFxyXG4gKiBAcGFyYW0gZGF0YSDmlbDmja5cclxuICogQHBhcmFtIHRocmVzaG9sZCDpmIjlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01pbihkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJudW1iZXJcIikgJiYgZGF0YSA+PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmlbDlgLzmmK/lkKblsI/kuo7mn5DkuKrlgLxcclxuICogQHBhcmFtIGRhdGEg5pWw5o2uXHJcbiAqIEBwYXJhbSB0aHJlc2hvbGQg6ZiI5YC8XHJcbiAqIEByZXR1cm5zIGJvb2xlYW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrT2ZUeXBlKGRhdGEsIFwibnVtYmVyXCIpICYmIGRhdGEgPD0gdGhyZXNob2xkO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5pWw5YC85piv5ZCm5Zyo5p+Q5Liq5Yy66Ze05YaFXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gKiBAcGFyYW0gbWluVGhyZXNob2xkIOacgOWwj+mYiOWAvFxyXG4gKiBAcGFyYW0gbWF4VGhyZXNob2xkIOacgOWkp+mYiOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmFuZ2UoZGF0YTogYW55LCBtaW5UaHJlc2hvbGQ6IG51bWJlciwgbWF4VGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja01pbihkYXRhLCBtaW5UaHJlc2hvbGQpICYmIGNoZWNrTWF4KGRhdGEsIG1heFRocmVzaG9sZCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XnqbrmiJZOVUxM5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRW1wdHlPck51bGwoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZGF0YSA9PT0gbnVsbCB8fCAoY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIikgJiYgZGF0YS5sZW5ndGggPT09IDApO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l6Z2e56m65oiW6Z2eTlVMTOWtl+espuS4slxyXG4gKiBAcGFyYW0gZGF0YSDmlbDlgLxcclxuICogQHJldHVybnMgYm9vbGVhbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja05vRW1wdHlPck51bGwoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tPZlR5cGUoZGF0YSwgXCJzdHJpbmdcIikgJiYgZGF0YS5sZW5ndGggPiAwO1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5piv5q2j5YiZ6KGo6L6+5byPXHJcbiAqIEBwYXJhbSBkYXRhIOaVsOWAvFxyXG4gKiBAcmV0dXJucyBib29sZWFuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmVnRXhwKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGRhdGEgaW5zdGFuY2VvZiBSZWdFeHA7XHJcbn0iLCIvKipcclxuICog54mI5pys5Y+3XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVkVSU0lPTjogc3RyaW5nID0gXCIzLjAuMFwiO1xyXG5cclxuLyoqXHJcbiAqIOWJjee8gOesplxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBSRUZJWDogc3RyaW5nID0gXCJsYXl4LVwiO1xyXG5cclxuLyoqXHJcbiAqIOm7mOiupOeql+WPo+WuveW6plxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0lORE9XX1dJRFRIOiBudW1iZXIgPSA4MDA7XHJcblxyXG4vKipcclxuICog6buY6K6k56qX5Y+j6auY5bqmXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9XSU5ET1dfSEVJR0hUOiBudW1iZXIgPSA2MDA7XHJcblxyXG4vKipcclxuICog5YaF572u5pSv5oyB6K+t6KiAXHJcbiAqL1xyXG5leHBvcnQgZW51bSBTdXBwb3J0TGFuZ3VhZ2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiDkuK3mlodcclxuICAgICAqL1xyXG4gICAgWkhfQ04gPSBcIlpIX0NOXCIsXHJcbiAgICAvKipcclxuICAgICAqIOiLseaWh1xyXG4gICAgICovXHJcbiAgICBFTl9VUyA9IFwiRU5fVVNcIlxyXG59IiwiaW1wb3J0IHsgRW50cnlPcHRpb24gfSBmcm9tIFwiLi90eXBlXCI7XHJcbmltcG9ydCB7IFZFUlNJT04sIFBSRUZJWCwgREVGQVVMVF9XSU5ET1dfV0lEVEgsIERFRkFVTFRfV0lORE9XX0hFSUdIVCwgU3VwcG9ydExhbmd1YWdlIH0gZnJvbSBcIi4vY29uc3RcIjtcclxuaW1wb3J0IHsgaXNQc3ROdW1iZXIsIGluVmFsdWVPcHRpb25zIH0gZnJvbSBcIi4uL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5LWRlY29yYXRvclwiO1xyXG5pbXBvcnQgeyBVSVdpbmRvd09wdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnQvdWktd2luZG93L3R5cGVcIjtcclxuaW1wb3J0IFVJV2luZG93IGZyb20gXCIuLi9jb21wb25lbnQvdWktd2luZG93XCI7XHJcblxyXG5pbXBvcnQgXCIuLi9hc3NldC9zdHlsZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWFpeWPo+WNleS+i+exu++8jOaJv+i9veedgOWFqOWxgOaVsOaNruWtmOWCqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnp4HmnInljJbmnoTpgKDlh73mlbDvvIzlrp7njrDljZXkvotcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihvcHRpb25zOiBFbnRyeU9wdGlvbikge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDniYjmnKzlj7dcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZyA9IFZFUlNJT047XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliY3nvIDnrKZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHByZWZpeDogc3RyaW5nID0gUFJFRklYO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6buY6K6k6K+t6KiAXHJcbiAgICAgKi9cclxuICAgIEBpblZhbHVlT3B0aW9ucyhTdXBwb3J0TGFuZ3VhZ2UuWkhfQ04sIFN1cHBvcnRMYW5ndWFnZS5FTl9VUylcclxuICAgIHB1YmxpYyBsYW5nOiBTdXBwb3J0TGFuZ3VhZ2UgPSBTdXBwb3J0TGFuZ3VhZ2UuWkhfQ047XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpu5jorqTnqpflj6PliJ3lp4vljJblrr3luqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gREVGQVVMVF9XSU5ET1dfV0lEVEg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpu5jorqTnqpflj6PliJ3lp4vljJbpq5jluqZcclxuICAgICAqL1xyXG4gICAgQGlzUHN0TnVtYmVyKClcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IERFRkFVTFRfV0lORE9XX0hFSUdIVDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOaWsOeql+WPo1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg56qX5Y+j5Y+C5pWwXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIG9wZW4ob3B0aW9uczogVUlXaW5kb3dPcHRpb24pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB1aVdpbmRvdyA9IG5ldyBVSVdpbmRvdyhvcHRpb25zKTtcclxuICAgICAgICBjb25zdCB1aVdpbmRvd0VsZW1lbnQgPSB1aVdpbmRvdy5wcmVzZW50KCk7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodWlXaW5kb3dFbGVtZW50KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1aVdpbmRvd0VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Z2Z5oCB5a6e5L6L5Y+Y6YePXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFbnRyeTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWUr+S4gOWPr+eUqOWvueixoVxyXG4gICAgICogQHBhcmFtIFtvcHRpb25zXSDlhaXlj6Plj4LmlbBcclxuICAgICAqIEByZXR1cm5zIEVudHJ5IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKG9wdGlvbnM6IEVudHJ5T3B0aW9uID0gPEVudHJ5T3B0aW9uPnt9KTogRW50cnkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEVudHJ5KG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOWFpeWPo+WPguaVsFxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZXJPcHRpb25zKG9wdGlvbnM6IEVudHJ5T3B0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYW5nID0gb3B0aW9ucz8ubGFuZyA/PyBTdXBwb3J0TGFuZ3VhZ2UuWkhfQ047XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnM/LndpZHRoID8/IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zPy5oZWlnaHQgPz8gdGhpcy5oZWlnaHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRyeU92ZXJ0LCBFbnRyeU9wdGlvbiB9IGZyb20gXCIuL2FwcC9lbnRyeS90eXBlXCI7XHJcbmltcG9ydCBFbnRyeSBmcm9tIFwiLi9hcHAvZW50cnlcIjtcclxuXHJcbi8qKlxyXG4gKiDlr7nlpJblhazlvIDmlrnms5VcclxuICovXHJcbmZ1bmN0aW9uIG92ZXJ0KCk6IEVudHJ5T3ZlcnQge1xyXG4gICAgY29uc3QgZW50cnkgPSBFbnRyeS5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5T3ZlcnQgPSA8RW50cnlPdmVydD5mdW5jdGlvbiAob3B0aW9uczogRW50cnlPcHRpb24pOiB2b2lkIHtcclxuICAgICAgICBFbnRyeS5nZXRJbnN0YW5jZShvcHRpb25zKTtcclxuICAgIH07XHJcblxyXG4gICAgZW50cnlPdmVydC52ZXJzaW9uID0gZW50cnkudmVyc2lvbjtcclxuICAgIGVudHJ5T3ZlcnQub3BlbiA9IGVudHJ5Lm9wZW47XHJcblxyXG4gICAgcmV0dXJuIGVudHJ5T3ZlcnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG92ZXJ0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==