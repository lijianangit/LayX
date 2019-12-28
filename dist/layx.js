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

/***/ "./src/app/asset/style/style.ts":
/*!**************************************!*\
  !*** ./src/app/asset/style/style.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./common.css */ "./src/app/asset/style/common.css");


/***/ }),

/***/ "./src/app/control/control.ts":
/*!************************************!*\
  !*** ./src/app/control/control.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var entry_1 = __webpack_require__(/*! ../entry/entry */ "./src/app/entry/entry.ts");
var Control = (function () {
    function Control() {
        this.entry = entry_1.default.getInstance();
        this.symbol = Symbol("monksoul");
    }
    return Control;
}());
exports.default = Control;


/***/ }),

/***/ "./src/app/control/window/ui-window.ts":
/*!*********************************************!*\
  !*** ./src/app/control/window/ui-window.ts ***!
  \*********************************************/
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
var control_1 = __webpack_require__(/*! ../control */ "./src/app/control/control.ts");
var property_validator_1 = __webpack_require__(/*! ../../core/validator/property-validator */ "./src/app/core/validator/property-validator.ts");
var element_helper_1 = __webpack_require__(/*! ../../core/util/element-helper */ "./src/app/core/util/element-helper.ts");
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(options) {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this.width = _this.entry.width;
        _this.height = _this.entry.height;
        _this.minWidth = 200;
        _this.minHeight = 200;
        _this.maxWidth = innerWidth;
        _this.maxHeight = innerHeight;
        _this.border = {
            width: 1,
            style: "solid",
            color: "#3baced",
            radius: 4
        };
        _this.boxShadow = true;
        _this.shadowStyle = "rgba(0, 0, 0, 0.3) 1px 1px 24px";
        _this.id = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.id, (_b !== null && _b !== void 0 ? _b : ""));
        _this.handlerOptions(options);
        return _this;
    }
    UIWindow.prototype.present = function () {
        var element = document.createElement("div");
        element.id = "" + (this.entry.prefix + this.id);
        element_helper_1.addStyles(element, {
            maxWidth: this.maxWidth + "px",
            maxHeight: this.maxHeight + "px",
            minWidth: this.minWidth + "px",
            minHeight: this.minHeight + "px",
            width: this.width + "px",
            height: this.height + "px",
            border: this.border == false ? undefined :
                this.border.width + "px " + this.border.style + " " + this.border.color,
            borderRadius: this.border == false ? undefined :
                this.border.radius + "px",
            boxShadow: this.boxShadow ? this.shadowStyle : undefined
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
        property_validator_1.noEmptyOrNull()
    ], UIWindow.prototype, "id", void 0);
    __decorate([
        property_validator_1.isNumber(false)
    ], UIWindow.prototype, "width", void 0);
    __decorate([
        property_validator_1.isNumber(false)
    ], UIWindow.prototype, "height", void 0);
    __decorate([
        property_validator_1.isNumber(false)
    ], UIWindow.prototype, "minWidth", void 0);
    __decorate([
        property_validator_1.isNumber(false)
    ], UIWindow.prototype, "minHeight", void 0);
    __decorate([
        property_validator_1.isNumber(false)
    ], UIWindow.prototype, "maxWidth", void 0);
    __decorate([
        property_validator_1.isNumber(false)
    ], UIWindow.prototype, "maxHeight", void 0);
    __decorate([
        property_validator_1.jsonObjectOrBooleanMerge({
            width: property_validator_1.isNumber,
            style: ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "inherit"],
            color: property_validator_1.noEmptyOrNull,
            radius: property_validator_1.isNumber
        })
    ], UIWindow.prototype, "border", void 0);
    return UIWindow;
}(control_1.default));
exports.default = UIWindow;


/***/ }),

/***/ "./src/app/core/exception/exception.ts":
/*!*********************************************!*\
  !*** ./src/app/core/exception/exception.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function error(message) {
    throw new Error("\n\u7C7B\u578B\uFF1A\u7A0B\u5E8F\u5F02\u5E38\n\u5F02\u5E38\u4FE1\u606F\uFF1A" + message + "\n\u5806\u6808\u4FE1\u606F\uFF1A");
}
exports.error = error;
function validateFail(message) {
    throw new Error("\n\u7C7B\u578B\uFF1A\u9A8C\u8BC1\u9519\u8BEF\n\u9519\u8BEF\u4FE1\u606F\uFF1A" + message + "\n\u5806\u6808\u4FE1\u606F\uFF1A");
}
exports.validateFail = validateFail;


/***/ }),

/***/ "./src/app/core/util/element-helper.ts":
/*!*********************************************!*\
  !*** ./src/app/core/util/element-helper.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function addStyles(element, styles) {
    if (!element)
        return;
    for (var key in styles) {
        var styleValue = styles[key];
        if (styleValue) {
            element.style[key] = styles[key];
        }
    }
}
exports.addStyles = addStyles;


/***/ }),

/***/ "./src/app/core/util/object-helper.ts":
/*!********************************************!*\
  !*** ./src/app/core/util/object-helper.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var base_validator_1 = __webpack_require__(/*! ../validator/base-validator */ "./src/app/core/validator/base-validator.ts");
function clone(source) {
    var newObject = {};
    for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        newObject[key] = base_validator_1.isJsonObject(source[key]) ? clone(source[key]) : source[key];
    }
    return newObject;
}
exports.clone = clone;
function merge(source, dest) {
    var newObject = clone(source);
    for (var _i = 0, _a = Object.keys(dest); _i < _a.length; _i++) {
        var key = _a[_i];
        if (newObject[key] === undefined || !base_validator_1.isJsonObject(dest[key])) {
            newObject[key] = dest[key];
            continue;
        }
        newObject[key] = merge(newObject[key], dest[key]);
    }
    return newObject;
}
exports.merge = merge;


/***/ }),

/***/ "./src/app/core/validator/base-validator.ts":
/*!**************************************************!*\
  !*** ./src/app/core/validator/base-validator.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../exception/exception */ "./src/app/core/exception/exception.ts");
function isJsonObject(value) {
    return typeof (value) == "object" &&
        Object.prototype.toString.call(value).toLowerCase() == "[object object]" &&
        !value.length;
}
exports.isJsonObject = isJsonObject;
function baseTypeValidator(value, type) {
    var cnType = "";
    switch (type) {
        case "number":
            cnType = "数字";
            break;
        case "string":
            cnType = "字符串";
            break;
        case "function":
            cnType = "函数";
            break;
        case "array":
            cnType = "数组";
            break;
        default: exception_1.error("存在未识别基础类型");
    }
    if ((type !== "array" && typeof value !== type) ||
        (type === "array" && !Array.isArray(value))) {
        exception_1.validateFail("`" + value + "` \u4E0D\u662F\u4E00\u4E2A\u6B63\u786E\u7684" + cnType + "\u7C7B\u578B");
    }
}
exports.baseTypeValidator = baseTypeValidator;
function jsonObjectValidator(value) {
    if (!isJsonObject(value))
        exception_1.validateFail("`" + value + "` \u4E0D\u662F\u4E00\u4E2A\u6B63\u786E\u7684JSON\u7C7B\u578B");
}
exports.jsonObjectValidator = jsonObjectValidator;


/***/ }),

/***/ "./src/app/core/validator/property-validator.ts":
/*!******************************************************!*\
  !*** ./src/app/core/validator/property-validator.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../exception/exception */ "./src/app/core/exception/exception.ts");
var base_validator_1 = __webpack_require__(/*! ./base-validator */ "./src/app/core/validator/base-validator.ts");
var object_helper_1 = __webpack_require__(/*! ../util/object-helper */ "./src/app/core/util/object-helper.ts");
function propertyValidator(setHandler, typeValidator) {
    return function (target, propertyKey) {
        var value = target[propertyKey];
        Object.defineProperty(target, propertyKey, {
            get: function () { return value; },
            set: function (newValue) {
                if (typeValidator)
                    typeValidator(newValue, propertyKey);
                value = setHandler(newValue, propertyKey, value);
            }
        });
    };
}
function isNumber(allowMinus) {
    if (allowMinus === void 0) { allowMinus = true; }
    return propertyValidator(function (newValue) {
        if (allowMinus)
            return newValue;
        else {
            if (newValue === Math.abs(newValue))
                return newValue;
            else
                exception_1.validateFail("\u53EA\u80FD\u4F20\u5165\u6B63\u5B9E\u6570");
        }
    }, function (newValue) { return base_validator_1.baseTypeValidator(newValue, "number"); });
}
exports.isNumber = isNumber;
function min(minValue) {
    return propertyValidator(function (newValue) {
        if (newValue >= minValue)
            return newValue;
        else
            exception_1.validateFail("`" + newValue + "` \u4E0D\u80FD\u5C0F\u4E8E `" + minValue + "`");
    }, function (newValue) { return base_validator_1.baseTypeValidator(newValue, "number"); });
}
exports.min = min;
function max(maxValue) {
    return propertyValidator(function (newValue) {
        if (newValue <= maxValue)
            return newValue;
        else
            exception_1.validateFail("`" + newValue + "` \u4E0D\u80FD\u5927\u4E8E `" + maxValue + "`");
    }, function (newValue) { return base_validator_1.baseTypeValidator(newValue, "number"); });
}
exports.max = max;
function length(minValue, maxValue) {
    return propertyValidator(function (newValue) {
        var valueLength = newValue.length;
        if (valueLength >= minValue && valueLength <= maxValue)
            return newValue;
        else
            exception_1.validateFail("`" + newValue + "` \u957F\u5EA6\u4E0D\u5728 `[" + minValue + "," + maxValue + "]` \u533A\u95F4");
    }, function (newValue) { return base_validator_1.baseTypeValidator(newValue, "string"); });
}
exports.length = length;
function match(reg) {
    return propertyValidator(function (newValue) {
        if (reg.test(newValue))
            return newValue;
        else
            exception_1.validateFail("`" + newValue + "` \u4E0D\u80FD\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F `" + reg + "`");
    }, function (newValue) { return base_validator_1.baseTypeValidator(newValue, "string"); });
}
exports.match = match;
function options() {
    var enumValues = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        enumValues[_i] = arguments[_i];
    }
    return propertyValidator(function (newValue) {
        if (enumValues.indexOf(newValue) > -1)
            return newValue;
        else
            exception_1.validateFail("`" + newValue + "` \u4E0D\u5728\u53EF\u9009\u503C `[" + enumValues.toString() + "]` \u5185");
    });
}
exports.options = options;
function noEmptyOrNull() {
    return propertyValidator(function (newValue, propertyKey) {
        if (newValue.trim().length > 0)
            return newValue;
        else
            exception_1.validateFail("`" + propertyKey.toString() + "` \u4E0D\u5141\u8BB8\u4E3A\u7A7A\u5B57\u7B26\u6216null");
    }, function (newValue) { return base_validator_1.baseTypeValidator(newValue, "string"); });
}
exports.noEmptyOrNull = noEmptyOrNull;
function jsonObjectOrBooleanMerge(keyValidator) {
    if (keyValidator === void 0) { keyValidator = {}; }
    return propertyValidator(function (newValue, propertyKey, oldValue) {
        if (newValue === undefined || newValue === true)
            return oldValue;
        if (newValue === false)
            return false;
        base_validator_1.jsonObjectValidator(newValue);
        return object_helper_1.merge((oldValue !== null && oldValue !== void 0 ? oldValue : {}), newValue);
    });
}
exports.jsonObjectOrBooleanMerge = jsonObjectOrBooleanMerge;


/***/ }),

/***/ "./src/app/entry/entry.ts":
/*!********************************!*\
  !*** ./src/app/entry/entry.ts ***!
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
var property_validator_1 = __webpack_require__(/*! ../core/validator/property-validator */ "./src/app/core/validator/property-validator.ts");
var ui_window_1 = __webpack_require__(/*! ../control/window/ui-window */ "./src/app/control/window/ui-window.ts");
__webpack_require__(/*! ../asset/style/style */ "./src/app/asset/style/style.ts");
var Entry = (function () {
    function Entry(options) {
        this.prefix = "layx-";
        this.version = "3.0.0";
        this.lang = "ZH_CN";
        this.width = 800;
        this.height = 600;
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
        this.lang = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.lang, (_b !== null && _b !== void 0 ? _b : "ZH_CN"));
        this.width = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.width, (_d !== null && _d !== void 0 ? _d : this.width));
        this.height = (_f = (_e = options) === null || _e === void 0 ? void 0 : _e.height, (_f !== null && _f !== void 0 ? _f : this.height));
    };
    __decorate([
        property_validator_1.options("ZH_CN", "EN_US")
    ], Entry.prototype, "lang", void 0);
    __decorate([
        property_validator_1.isNumber(false)
    ], Entry.prototype, "width", void 0);
    __decorate([
        property_validator_1.isNumber(false)
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
var entry_1 = __webpack_require__(/*! ./app/entry/entry */ "./src/app/entry/entry.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2NvbW1vbi5jc3M/Mzk0NiIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9hc3NldC9zdHlsZS9zdHlsZS50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb250cm9sL2NvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29udHJvbC93aW5kb3cvdWktd2luZG93LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvcmUvZXhjZXB0aW9uL2V4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL3V0aWwvZWxlbWVudC1oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS91dGlsL29iamVjdC1oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS92YWxpZGF0b3IvYmFzZS12YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS92YWxpZGF0b3IvcHJvcGVydHktdmFsaWRhdG9yLnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2VudHJ5L2VudHJ5LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVB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QUFDLENBQUM7SUFFRixVQUFVLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDbkMsVUFBVSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBRTdCLE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUM7QUFFRCxrQkFBZSxLQUFLLEVBQUUsQ0FBQyIsImZpbGUiOiJsYXl4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGF5eFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsYXl4XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vY29tbW9uLmNzc1wiOyIsImltcG9ydCBFbnRyeSBmcm9tIFwiLi4vZW50cnkvZW50cnlcIjtcclxuXHJcbi8qKlxyXG4gKiDlhajlsYDmjqfku7bmir3osaHnsbvvvIzmiYDmnInnmoTmjqfku7bpg73lv4Xpobvnu6fmib/or6Xmjqfku7bnsbtcclxuICogQHRlbXBsYXRlIFRPcHRpb24g5o6n5Lu25pSv5oyB5Lyg5YWl5Y+v6YCJ5Y+C5pWwXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb250cm9sPFRPcHRpb24+IHtcclxuICAgIC8qKlxyXG4gICAgICog5YWl5Y+j5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBlbnRyeTogRW50cnkgPSBFbnRyeS5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5o6n5Lu25ZSv5LiA5qCH6K+GXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3ltYm9sOiBzeW1ib2wgPSBTeW1ib2woXCJtb25rc291bFwiKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWkhOeQhuWIneWni+S8oOWFpeWPguaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5o6n5Lu25pSv5oyB5Lyg5YWl5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGhhbmRsZXJPcHRpb25zKG9wdGlvbnM6IFRPcHRpb24pOiB2b2lkO1xyXG59IiwiaW1wb3J0IENvbnRyb2wgZnJvbSBcIi4uL2NvbnRyb2xcIjtcclxuaW1wb3J0IFVJQ29udHJvbCBmcm9tIFwiLi4vdWktY29udHJvbFwiO1xyXG5pbXBvcnQgeyBVSVdpbmRvd09wdGlvbiwgQm9yZGVyT3B0aW9uIH0gZnJvbSBcIi4vY29uc3RyYWludFwiO1xyXG5pbXBvcnQgeyBpc051bWJlciwgbm9FbXB0eU9yTnVsbCwganNvbk9iamVjdE9yQm9vbGVhbk1lcmdlIH0gZnJvbSBcIi4uLy4uL2NvcmUvdmFsaWRhdG9yL3Byb3BlcnR5LXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBhZGRTdHlsZXMgfSBmcm9tIFwiLi4vLi4vY29yZS91dGlsL2VsZW1lbnQtaGVscGVyXCI7XHJcblxyXG4vKipcclxuICog56qX5Y+j5o6n5Lu257G777yM5Lmf5bCx5piv5pW05Liq5o6n5Lu255qE5qC45b+D56qX5Y+j57G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVdpbmRvdyBleHRlbmRzIENvbnRyb2w8VUlXaW5kb3dPcHRpb24+IGltcGxlbWVudHMgVUlDb250cm9sPFVJV2luZG93T3B0aW9uPiB7XHJcbiAgICAvKipcclxuICAgICAqIOWUr+S4gElkXHJcbiAgICAgKi9cclxuICAgIEBub0VtcHR5T3JOdWxsKClcclxuICAgIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5a695bqmXHJcbiAgICAgKi9cclxuICAgIEBpc051bWJlcihmYWxzZSlcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gdGhpcy5lbnRyeS53aWR0aDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmrmOW6plxyXG4gICAgICovXHJcbiAgICBAaXNOdW1iZXIoZmFsc2UpXHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSB0aGlzLmVudHJ5LmhlaWdodDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWwj+WuveW6plxyXG4gICAgICovXHJcbiAgICBAaXNOdW1iZXIoZmFsc2UpXHJcbiAgICBwdWJsaWMgbWluV2lkdGg6IG51bWJlciA9IDIwMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWwj+mrmOW6plxyXG4gICAgICovXHJcbiAgICBAaXNOdW1iZXIoZmFsc2UpXHJcbiAgICBwdWJsaWMgbWluSGVpZ2h0OiBudW1iZXIgPSAyMDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDlpKflrr3luqZcclxuICAgICAqL1xyXG4gICAgQGlzTnVtYmVyKGZhbHNlKVxyXG4gICAgcHVibGljIG1heFdpZHRoOiBudW1iZXIgPSBpbm5lcldpZHRoO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyA5aSn6auY5bqmXHJcbiAgICAgKi9cclxuICAgIEBpc051bWJlcihmYWxzZSlcclxuICAgIHB1YmxpYyBtYXhIZWlnaHQ6IG51bWJlciA9IGlubmVySGVpZ2h0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L655qGG5qC35byPXHJcbiAgICAgKi9cclxuICAgIEBqc29uT2JqZWN0T3JCb29sZWFuTWVyZ2Uoe1xyXG4gICAgICAgIHdpZHRoOiBpc051bWJlcixcclxuICAgICAgICBzdHlsZTogW1wibm9uZVwiLCBcImhpZGRlblwiLCBcImRvdHRlZFwiLCBcImRhc2hlZFwiLCBcInNvbGlkXCIsIFwiZG91YmxlXCIsIFwiZ3Jvb3ZlXCIsIFwicmlkZ2VcIiwgXCJpbnNldFwiLCBcIm91dHNldFwiLCBcImluaGVyaXRcIl0sXHJcbiAgICAgICAgY29sb3I6IG5vRW1wdHlPck51bGwsXHJcbiAgICAgICAgcmFkaXVzOiBpc051bWJlclxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBib3JkZXI6IEJvcmRlck9wdGlvbiB8IGZhbHNlID0gPEJvcmRlck9wdGlvbj57XHJcbiAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgc3R5bGU6IFwic29saWRcIixcclxuICAgICAgICBjb2xvcjogXCIjM2JhY2VkXCIsXHJcbiAgICAgICAgcmFkaXVzOiA0XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Zi05b2xXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBib3hTaGFkb3c6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBzaGFkb3dTdHlsZTogc3RyaW5nID0gXCJyZ2JhKDAsIDAsIDAsIDAuMykgMXB4IDFweCAyNHB4XCI7ICAgIC8vIOWGhee9rumYtOW9sVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p6E6YCg5Ye95pWw5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFVJV2luZG93T3B0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucz8uaWQgPz8gXCJcIjtcclxuICAgICAgICB0aGlzLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65o6n5Lu25YWD57Sg5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHByZXNlbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuaWQgPSBgJHt0aGlzLmVudHJ5LnByZWZpeCArIHRoaXMuaWR9YDtcclxuXHJcbiAgICAgICAgYWRkU3R5bGVzKGVsZW1lbnQsIDxDU1NTdHlsZURlY2xhcmF0aW9uPntcclxuICAgICAgICAgICAgbWF4V2lkdGg6IGAke3RoaXMubWF4V2lkdGh9cHhgLFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IGAke3RoaXMubWF4SGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3RoaXMubWluV2lkdGh9cHhgLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IGAke3RoaXMubWluSGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgd2lkdGg6IGAke3RoaXMud2lkdGh9cHhgLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3RoaXMuaGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgYm9yZGVyOiB0aGlzLmJvcmRlciA9PSBmYWxzZSA/IHVuZGVmaW5lZCA6XHJcbiAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci53aWR0aH1weCAke3RoaXMuYm9yZGVyLnN0eWxlfSAke3RoaXMuYm9yZGVyLmNvbG9yfWAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhpcy5ib3JkZXIgPT0gZmFsc2UgPyB1bmRlZmluZWQgOlxyXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5ib3JkZXIucmFkaXVzfXB4YCxcclxuICAgICAgICAgICAgYm94U2hhZG93OiB0aGlzLmJveFNoYWRvdyA/IHRoaXMuc2hhZG93U3R5bGUgOiB1bmRlZmluZWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOaOp+S7tuaUr+aMgeS8oOWFpeWPr+mAieWPguaVsFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyT3B0aW9ucyhvcHRpb25zOiBVSVdpbmRvd09wdGlvbikge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRpb25zPy53aWR0aCA/PyB0aGlzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucz8uaGVpZ2h0ID8/IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubWF4V2lkdGggPSBvcHRpb25zPy5tYXhXaWR0aCA/PyB0aGlzLm1heFdpZHRoO1xyXG4gICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gb3B0aW9ucz8ubWF4SGVpZ2h0ID8/IHRoaXMubWF4SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubWluV2lkdGggPSBvcHRpb25zPy5taW5XaWR0aCA/PyB0aGlzLm1pbldpZHRoO1xyXG4gICAgICAgIHRoaXMubWluSGVpZ2h0ID0gb3B0aW9ucz8ubWluSGVpZ2h0ID8/IHRoaXMubWluSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCB0aGlzLndpZHRoKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5taW4odGhpcy5tYXhXaWR0aCwgdGhpcy53aWR0aCk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmJvcmRlciA9IDxCb3JkZXJPcHRpb24+b3B0aW9ucz8uYm9yZGVyID8/IHRoaXMuYm9yZGVyO1xyXG4gICAgICAgIHRoaXMuYm94U2hhZG93ID0gb3B0aW9ucz8uYm94U2hhZG93ID8/IHRoaXMuYm94U2hhZG93O1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOaKm+WHuuW8guW4uOaPkOekulxyXG4gKiBAcGFyYW0gbWVzc2FnZSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgXFxu57G75Z6L77ya56iL5bqP5byC5bi4XFxu5byC5bi45L+h5oGv77yaJHttZXNzYWdlfVxcbuWghuagiOS/oeaBr++8mmApO1xyXG59XHJcblxyXG4vKipcclxuICog6aqM6K+B6ZSZ6K+v5o+Q56S6XHJcbiAqIEBwYXJhbSBtZXNzYWdlIOmUmeivr+S/oeaBr1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRmFpbChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgXFxu57G75Z6L77ya6aqM6K+B6ZSZ6K+vXFxu6ZSZ6K+v5L+h5oGv77yaJHttZXNzYWdlfVxcbuWghuagiOS/oeaBr++8mmApO1xyXG59IiwiLyoqXHJcbiAqIOS4uuWFg+e0oOa3u+WKoOagt+W8j1xyXG4gKiBAcGFyYW0gZWxlbWVudCDlhYPntKBcclxuICogQHBhcmFtIHN0eWxlcyDmoLflvI/liJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQsIHN0eWxlczogQ1NTU3R5bGVEZWNsYXJhdGlvbikge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVWYWx1ZSA9IHN0eWxlc1trZXldO1xyXG4gICAgICAgIGlmIChzdHlsZVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IGlzSnNvbk9iamVjdCB9IGZyb20gXCIuLi92YWxpZGF0b3IvYmFzZS12YWxpZGF0b3JcIjtcclxuXHJcbi8qKlxyXG4gKiBKU09OIOexu+Wei+WvueixoVxyXG4gKi9cclxudHlwZSBKc29uT2JqZWN0VHlwZSA9IHsgY29uc3RydWN0b3I6IE9iamVjdDtba2V5OiBzdHJpbmddOiBhbnk7IH07XHJcblxyXG4vKipcclxuICog5YWL6ZqG5a+56LGhXHJcbiAqIEBwYXJhbSBzb3VyY2Ug5rqQ5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmU8VCBleHRlbmRzIEpzb25PYmplY3RUeXBlPihzb3VyY2U6IFQpOiBUIHtcclxuICAgIGNvbnN0IG5ld09iamVjdDogVCA9IDxUPnt9O1xyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xyXG4gICAgICAgICg8YW55Pm5ld09iamVjdClba2V5XSA9IGlzSnNvbk9iamVjdChzb3VyY2Vba2V5XSkgPyBjbG9uZShzb3VyY2Vba2V5XSkgOiBzb3VyY2Vba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdPYmplY3Q7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlkIjlubblr7nosaFcclxuICogQHBhcmFtIHNvdXJjZSDmupDlr7nosaFcclxuICogQHBhcmFtIGRlc3Qg55uu5qCH5a+56LGhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2U8VCBleHRlbmRzIEpzb25PYmplY3RUeXBlPihzb3VyY2U6IFQsIGRlc3Q6IFQpOiBUIHtcclxuICAgIGNvbnN0IG5ld09iamVjdDogVCA9IGNsb25lKHNvdXJjZSk7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkZXN0KSkge1xyXG4gICAgICAgIGlmIChuZXdPYmplY3Rba2V5XSA9PT0gdW5kZWZpbmVkIHx8ICFpc0pzb25PYmplY3QoZGVzdFtrZXldKSkge1xyXG4gICAgICAgICAgICAoPGFueT5uZXdPYmplY3QpW2tleV0gPSBkZXN0W2tleV07XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAoPGFueT5uZXdPYmplY3QpW2tleV0gPSBtZXJnZShuZXdPYmplY3Rba2V5XSwgZGVzdFtrZXldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdPYmplY3Q7XHJcbn0iLCJpbXBvcnQgeyB2YWxpZGF0ZUZhaWwsIGVycm9yIH0gZnJvbSBcIi4uL2V4Y2VwdGlvbi9leGNlcHRpb25cIjtcclxuXHJcblxyXG4vKipcclxuICog5piv5ZCm5pivanNvbuWvueixoVxyXG4gKiBAcGFyYW0gdmFsdWUg5YC8XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNKc29uT2JqZWN0KHZhbHVlOiBhbnkpIHtcclxuICAgIHJldHVybiB0eXBlb2YgKHZhbHVlKSA9PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS50b0xvd2VyQ2FzZSgpID09IFwiW29iamVjdCBvYmplY3RdXCIgJiZcclxuICAgICAgICAhdmFsdWUubGVuZ3RoO1xyXG59XHJcblxyXG4vKipcclxuICog5Z+656GA57G75Z6L6aqM6K+BXHJcbiAqIEBwYXJhbSB2YWx1ZSDlgLxcclxuICogQHBhcmFtIHR5cGUg5Y+v6YCJ57G75Z6LXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmFzZVR5cGVWYWxpZGF0b3IodmFsdWU6IGFueSwgdHlwZTogXCJudW1iZXJcIiB8IFwic3RyaW5nXCIgfCBcImZ1bmN0aW9uXCIgfCBcImFycmF5XCIpIHtcclxuICAgIGxldCBjblR5cGU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIFwibnVtYmVyXCI6XHJcbiAgICAgICAgICAgIGNuVHlwZSA9IFwi5pWw5a2XXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcclxuICAgICAgICAgICAgY25UeXBlID0gXCLlrZfnrKbkuLJcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XHJcbiAgICAgICAgICAgIGNuVHlwZSA9IFwi5Ye95pWwXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJhcnJheVwiOlxyXG4gICAgICAgICAgICBjblR5cGUgPSBcIuaVsOe7hFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiBlcnJvcihcIuWtmOWcqOacquivhuWIq+WfuuehgOexu+Wei1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHR5cGUgIT09IFwiYXJyYXlcIiAmJiB0eXBlb2YgdmFsdWUgIT09IHR5cGUpIHx8XHJcbiAgICAgICAgKHR5cGUgPT09IFwiYXJyYXlcIiAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpKSB7XHJcbiAgICAgICAgdmFsaWRhdGVGYWlsKGBcXGAke3ZhbHVlfVxcYCDkuI3mmK/kuIDkuKrmraPnoa7nmoQke2NuVHlwZX3nsbvlnotgKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEpTT07lr7nosaHpqozor4HlmahcclxuICogQHBhcmFtIHZhbHVlIOWAvFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGpzb25PYmplY3RWYWxpZGF0b3IodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKCFpc0pzb25PYmplY3QodmFsdWUpKSB2YWxpZGF0ZUZhaWwoYFxcYCR7dmFsdWV9XFxgIOS4jeaYr+S4gOS4quato+ehrueahEpTT07nsbvlnotgKTtcclxufSIsImltcG9ydCB7IHZhbGlkYXRlRmFpbCB9IGZyb20gXCIuLi9leGNlcHRpb24vZXhjZXB0aW9uXCJcclxuaW1wb3J0IHsgYmFzZVR5cGVWYWxpZGF0b3IsIGpzb25PYmplY3RWYWxpZGF0b3IgfSBmcm9tIFwiLi9iYXNlLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gXCIuLi91dGlsL29iamVjdC1oZWxwZXJcIjtcclxuXHJcbi8qKlxyXG4gKiDlsZ7mgKfpqozor4Hnu5/kuIDlpITnkIZcclxuICogQHBhcmFtIHNldEhhbmRsZXIg6aqM6K+B5aeU5omY77yM6aqM6K+B5oiQ5Yqf6L+U5Zue5paw5YC8XHJcbiAqIEBwYXJhbSB0eXBlVmFsaWRhdG9yIOm7mOiupOexu+Wei+mqjOivgeWZqFxyXG4gKi9cclxuZnVuY3Rpb24gcHJvcGVydHlWYWxpZGF0b3Ioc2V0SGFuZGxlcjogKG5ld1ZhbHVlOiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wsIG9sZFZhbHVlOiBhbnkpID0+IGFueSwgdHlwZVZhbGlkYXRvcj86IChuZXdWYWx1ZTogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sKSA9PiB2b2lkKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xyXG4gICAgICAgICAgICBnZXQ6ICgpID0+IHZhbHVlLFxyXG4gICAgICAgICAgICBzZXQ6IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVWYWxpZGF0b3IpIHR5cGVWYWxpZGF0b3IobmV3VmFsdWUsIHByb3BlcnR5S2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHNldEhhbmRsZXIobmV3VmFsdWUsIHByb3BlcnR5S2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOmqjOivgeaYr+WQpuaYr+aVsOWtl+exu+Wei1xyXG4gKiBAcGFyYW0gYWxsb3dNaW51cyDlhYHorrjotJ/mlbDvvJ/pu5jorqTvvJp0cnVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoYWxsb3dNaW51czogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIHJldHVybiBwcm9wZXJ0eVZhbGlkYXRvcihuZXdWYWx1ZSA9PiB7XHJcbiAgICAgICAgaWYgKGFsbG93TWludXMpIHJldHVybiBuZXdWYWx1ZTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBNYXRoLmFicyhuZXdWYWx1ZSkpIHJldHVybiBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgZWxzZSB2YWxpZGF0ZUZhaWwoYOWPquiDveS8oOWFpeato+WunuaVsGApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIG5ld1ZhbHVlID0+IGJhc2VUeXBlVmFsaWRhdG9yKG5ld1ZhbHVlLCBcIm51bWJlclwiKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmnIDlsI/lgLzpqozor4FcclxuICogQHBhcmFtIG1pblZhbHVlIOacgOWwj+WAvFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbihtaW5WYWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gcHJvcGVydHlWYWxpZGF0b3IobmV3VmFsdWUgPT4ge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA+PSBtaW5WYWx1ZSkgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgICAgIGVsc2UgdmFsaWRhdGVGYWlsKGBcXGAke25ld1ZhbHVlfVxcYCDkuI3og73lsI/kuo4gXFxgJHttaW5WYWx1ZX1cXGBgKTtcclxuICAgIH0sIG5ld1ZhbHVlID0+IGJhc2VUeXBlVmFsaWRhdG9yKG5ld1ZhbHVlLCBcIm51bWJlclwiKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmnIDlpKflgLzpqozor4FcclxuICogQHBhcmFtIG1pblZhbHVlIOacgOWkp+WAvFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1heChtYXhWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gcHJvcGVydHlWYWxpZGF0b3IobmV3VmFsdWUgPT4ge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA8PSBtYXhWYWx1ZSkgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgICAgIGVsc2UgdmFsaWRhdGVGYWlsKGBcXGAke25ld1ZhbHVlfVxcYCDkuI3og73lpKfkuo4gXFxgJHttYXhWYWx1ZX1cXGBgKTtcclxuICAgIH0sIG5ld1ZhbHVlID0+IGJhc2VUeXBlVmFsaWRhdG9yKG5ld1ZhbHVlLCBcIm51bWJlclwiKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDplb/luqbpqozor4FcclxuICogQHBhcmFtIG1pblZhbHVlIOacgOWwj+WAvFxyXG4gKiBAcGFyYW0gbWF4VmFsdWUg5pyA5aSn5YC8XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKG1pblZhbHVlOiBudW1iZXIsIG1heFZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBwcm9wZXJ0eVZhbGlkYXRvcihuZXdWYWx1ZSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbHVlTGVuZ3RoID0gbmV3VmFsdWUubGVuZ3RoO1xyXG4gICAgICAgIGlmICh2YWx1ZUxlbmd0aCA+PSBtaW5WYWx1ZSAmJiB2YWx1ZUxlbmd0aCA8PSBtYXhWYWx1ZSkgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgICAgIGVsc2UgdmFsaWRhdGVGYWlsKGBcXGAke25ld1ZhbHVlfVxcYCDplb/luqbkuI3lnKggXFxgWyR7bWluVmFsdWV9LCR7bWF4VmFsdWV9XVxcYCDljLrpl7RgKTtcclxuICAgIH0sIG5ld1ZhbHVlID0+IGJhc2VUeXBlVmFsaWRhdG9yKG5ld1ZhbHVlLCBcInN0cmluZ1wiKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmraPliJnooajovr7lvI/ljLnphY3pqozor4FcclxuICogQHBhcmFtIHJlZyDmraPliJnooajovr7lvI9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRjaChyZWc6IFJlZ0V4cCkge1xyXG4gICAgcmV0dXJuIHByb3BlcnR5VmFsaWRhdG9yKG5ld1ZhbHVlID0+IHtcclxuICAgICAgICBpZiAocmVnLnRlc3QobmV3VmFsdWUpKSByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICAgICAgZWxzZSB2YWxpZGF0ZUZhaWwoYFxcYCR7bmV3VmFsdWV9XFxgIOS4jeiDveWMuemFjeato+WImeihqOi+vuW8jyBcXGAke3JlZ31cXGBgKTtcclxuICAgIH0sIG5ld1ZhbHVlID0+IGJhc2VUeXBlVmFsaWRhdG9yKG5ld1ZhbHVlLCBcInN0cmluZ1wiKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmnprkuL7lj6/pgInlgLzpqozor4FcclxuICogQHBhcmFtIGVudW1WYWx1ZXMg5Y+v5Y+Y5p6a5Li+5YC8XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb3B0aW9ucyguLi5lbnVtVmFsdWVzOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+KSB7XHJcbiAgICByZXR1cm4gcHJvcGVydHlWYWxpZGF0b3IobmV3VmFsdWUgPT4ge1xyXG4gICAgICAgIGlmIChlbnVtVmFsdWVzLmluZGV4T2YobmV3VmFsdWUpID4gLTEpIHJldHVybiBuZXdWYWx1ZTtcclxuICAgICAgICBlbHNlIHZhbGlkYXRlRmFpbChgXFxgJHtuZXdWYWx1ZX1cXGAg5LiN5Zyo5Y+v6YCJ5YC8IFxcYFske2VudW1WYWx1ZXMudG9TdHJpbmcoKX1dXFxgIOWGhWApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnqbrlrZfnrKbkuLLlkoxudWxs6aqM6K+BXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbm9FbXB0eU9yTnVsbCgpIHtcclxuICAgIHJldHVybiBwcm9wZXJ0eVZhbGlkYXRvcigobmV3VmFsdWUsIHByb3BlcnR5S2V5KSA9PiB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICAgICAgZWxzZSB2YWxpZGF0ZUZhaWwoYFxcYCR7cHJvcGVydHlLZXkudG9TdHJpbmcoKX1cXGAg5LiN5YWB6K645Li656m65a2X56ym5oiWbnVsbGApO1xyXG4gICAgfSwgbmV3VmFsdWUgPT4gYmFzZVR5cGVWYWxpZGF0b3IobmV3VmFsdWUsIFwic3RyaW5nXCIpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGpzb27lr7nosaHmiJbluIPlsJTnsbvlnovpqozor4HlubblkIjlubZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBqc29uT2JqZWN0T3JCb29sZWFuTWVyZ2Uoa2V5VmFsaWRhdG9yOiB7IFtrZXk6IHN0cmluZ106IEZ1bmN0aW9uIHwgQXJyYXk8c3RyaW5nIHwgbnVtYmVyPjsgfSA9IHt9KSB7XHJcbiAgICByZXR1cm4gcHJvcGVydHlWYWxpZGF0b3IoKG5ld1ZhbHVlLCBwcm9wZXJ0eUtleSwgb2xkVmFsdWUpID0+IHtcclxuICAgICAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBuZXdWYWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuIG9sZFZhbHVlO1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAganNvbk9iamVjdFZhbGlkYXRvcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIG1lcmdlKG9sZFZhbHVlID8/IHt9LCBuZXdWYWx1ZSk7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IEdsb2JhbE9wdGlvbiB9IGZyb20gXCIuL2NvbnN0cmFpbnRcIjtcclxuaW1wb3J0IHsgU3VwcG9ydExhbmd1YWdlIH0gZnJvbSBcIi4vZW51bVwiO1xyXG5pbXBvcnQgeyBvcHRpb25zLCBpc051bWJlciB9IGZyb20gXCIuLi9jb3JlL3ZhbGlkYXRvci9wcm9wZXJ0eS12YWxpZGF0b3JcIjtcclxuaW1wb3J0IFVJV2luZG93IGZyb20gXCIuLi9jb250cm9sL3dpbmRvdy91aS13aW5kb3dcIjtcclxuaW1wb3J0IHsgVUlXaW5kb3dPcHRpb24gfSBmcm9tIFwiLi4vY29udHJvbC93aW5kb3cvY29uc3RyYWludFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vYXNzZXQvc3R5bGUvc3R5bGVcIjtcclxuXHJcbi8qKlxyXG4gKiDlhaXlj6PljZXkvovnsbvvvIzmib/ovb3nnYDlhajlsYDmlbDmja7lrZjlgqhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcclxuICAgIC8qKlxyXG4gICAgICog5YmN57yA56ymXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBwcmVmaXg6IHN0cmluZyA9IFwibGF5eC1cIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeJiOacrOWPt1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nID0gXCIzLjAuMFwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6buY6K6k6K+t6KiAXHJcbiAgICAgKi9cclxuICAgIEBvcHRpb25zKFN1cHBvcnRMYW5ndWFnZS5aSF9DTiwgU3VwcG9ydExhbmd1YWdlLkVOX1VTKVxyXG4gICAgcHVibGljIGxhbmc6IFN1cHBvcnRMYW5ndWFnZSA9IFN1cHBvcnRMYW5ndWFnZS5aSF9DTjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOm7mOiupOeql+WPo+WIneWni+WMluWuveW6plxyXG4gICAgICovXHJcbiAgICBAaXNOdW1iZXIoZmFsc2UpXHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDgwMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOm7mOiupOeql+WPo+WIneWni+WMlumrmOW6plxyXG4gICAgICovXHJcbiAgICBAaXNOdW1iZXIoZmFsc2UpXHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSA2MDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp4HmnInljJbmnoTpgKDlh73mlbDvvIzlrp7njrDljZXkvotcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihvcHRpb25zOiBHbG9iYWxPcHRpb24pIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omT5byA5paw56qX5Y+jXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDlj6/pgInlj4LmlbBcclxuICAgICAqL1xyXG4gICAgb3BlbihvcHRpb25zOiBVSVdpbmRvd09wdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHVpV2luZG93ID0gbmV3IFVJV2luZG93KG9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IHVpV2luZG93RWxlbWVudCA9IHVpV2luZG93LnByZXNlbnQoKTtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh1aVdpbmRvd0VsZW1lbnQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHVpV2luZG93RWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpnZnmgIHlrp7kvovlj5jph49cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEVudHJ5O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5ZSv5LiA5Y+v55So5a+56LGhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2Uob3B0aW9uczogR2xvYmFsT3B0aW9uID0gPEdsb2JhbE9wdGlvbj57fSk6IEVudHJ5IHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBFbnRyeShvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5Lyg5YWl5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDlhaXlj6Plj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyT3B0aW9ucyhvcHRpb25zOiBHbG9iYWxPcHRpb24pIHtcclxuICAgICAgICB0aGlzLmxhbmcgPSBvcHRpb25zPy5sYW5nID8/IFN1cHBvcnRMYW5ndWFnZS5aSF9DTjtcclxuICAgICAgICB0aGlzLndpZHRoID0gb3B0aW9ucz8ud2lkdGggPz8gdGhpcy53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnM/LmhlaWdodCA/PyB0aGlzLmhlaWdodDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudHJ5T3ZlcnQsIEdsb2JhbE9wdGlvbiB9IGZyb20gXCIuL2FwcC9lbnRyeS9jb25zdHJhaW50XCI7XHJcbmltcG9ydCBFbnRyeSBmcm9tIFwiLi9hcHAvZW50cnkvZW50cnlcIjtcclxuXHJcbi8qKlxyXG4gKiDlr7nlpJblhazlvIDmlrnms5VcclxuICovXHJcbmZ1bmN0aW9uIG92ZXJ0KCk6IEVudHJ5T3ZlcnQge1xyXG4gICAgY29uc3QgZW50cnkgPSBFbnRyeS5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICAgIGNvbnN0IGVudHJ5T3ZlcnQgPSA8RW50cnlPdmVydD5mdW5jdGlvbiAob3B0aW9uczogR2xvYmFsT3B0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgRW50cnkuZ2V0SW5zdGFuY2Uob3B0aW9ucyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGVudHJ5T3ZlcnQudmVyc2lvbiA9IGVudHJ5LnZlcnNpb247XHJcbiAgICBlbnRyeU92ZXJ0Lm9wZW4gPSBlbnRyeS5vcGVuO1xyXG5cclxuICAgIHJldHVybiBlbnRyeU92ZXJ0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvdmVydCgpOyJdLCJzb3VyY2VSb290IjoiIn0=