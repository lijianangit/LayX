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
            height: this.height + "px"
        });
        return element;
    };
    UIWindow.prototype.handlerOptions = function (options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
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

/***/ "./src/app/core/validator/base-validator.ts":
/*!**************************************************!*\
  !*** ./src/app/core/validator/base-validator.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../exception/exception */ "./src/app/core/exception/exception.ts");
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
function propertyValidator(setHandler, typeValidator) {
    return function (target, propertyKey) {
        var value = target[propertyKey];
        Object.defineProperty(target, propertyKey, {
            get: function () { return value; },
            set: function (newValue) {
                if (typeValidator)
                    typeValidator(newValue, propertyKey);
                value = setHandler(newValue, propertyKey);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2Fzc2V0L3N0eWxlL2NvbW1vbi5jc3M/Mzk0NiIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9hc3NldC9zdHlsZS9zdHlsZS50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb250cm9sL2NvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29udHJvbC93aW5kb3cvdWktd2luZG93LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2NvcmUvZXhjZXB0aW9uL2V4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vc3JjL2FwcC9jb3JlL3V0aWwvZWxlbWVudC1oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS92YWxpZGF0b3IvYmFzZS12YWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL3NyYy9hcHAvY29yZS92YWxpZGF0b3IvcHJvcGVydHktdmFsaWRhdG9yLnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvYXBwL2VudHJ5L2VudHJ5LnRzIiwid2VicGFjazovL2xheXgvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FB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Ozs7Ozs7Ozs7O0FDVjFCLHVGQUFzQztBQUt0QyxTQUFTLEtBQUs7SUFDVixJQUFNLEtBQUssR0FBRyxlQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFbEMsSUFBTSxVQUFVLEdBQWUsVUFBVSxPQUFxQjtRQUMxRCxlQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztJQUVGLFVBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUNuQyxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFFN0IsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQUVELGtCQUFlLEtBQUssRUFBRSxDQUFDIiwiZmlsZSI6ImxheXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsYXl4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxheXhcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9jb21tb24uY3NzXCI7IiwiaW1wb3J0IEVudHJ5IGZyb20gXCIuLi9lbnRyeS9lbnRyeVwiO1xyXG5cclxuLyoqXHJcbiAqIOWFqOWxgOaOp+S7tuaKveixoeexu++8jOaJgOacieeahOaOp+S7tumDveW/hemhu+e7p+aJv+ivpeaOp+S7tuexu1xyXG4gKiBAdGVtcGxhdGUgVE9wdGlvbiDmjqfku7bmlK/mjIHkvKDlhaXlj6/pgInlj4LmlbBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbnRyb2w8VE9wdGlvbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlhaXlj6Plr7nosaFcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGVudHJ5OiBFbnRyeSA9IEVudHJ5LmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjqfku7bllK/kuIDmoIfor4ZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzeW1ib2w6IHN5bWJvbCA9IFN5bWJvbChcIm1vbmtzb3VsXCIpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5Yid5aeL5Lyg5YWl5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDmjqfku7bmlK/mjIHkvKDlhaXlj6/pgInlj4LmlbBcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgaGFuZGxlck9wdGlvbnMob3B0aW9uczogVE9wdGlvbik6IHZvaWQ7XHJcbn0iLCJpbXBvcnQgQ29udHJvbCBmcm9tIFwiLi4vY29udHJvbFwiO1xyXG5pbXBvcnQgVUlDb250cm9sIGZyb20gXCIuLi91aS1jb250cm9sXCI7XHJcbmltcG9ydCB7IFVJV2luZG93T3B0aW9uIH0gZnJvbSBcIi4vY29uc3RyYWludFwiO1xyXG5pbXBvcnQgeyBpc051bWJlciwgbm9FbXB0eU9yTnVsbCB9IGZyb20gXCIuLi8uLi9jb3JlL3ZhbGlkYXRvci9wcm9wZXJ0eS12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgYWRkU3R5bGVzIH0gZnJvbSBcIi4uLy4uL2NvcmUvdXRpbC9lbGVtZW50LWhlbHBlclwiO1xyXG5cclxuLyoqXHJcbiAqIOeql+WPo+aOp+S7tuexu++8jOS5n+WwseaYr+aVtOS4quaOp+S7tueahOaguOW/g+eql+WPo+exu1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlXaW5kb3cgZXh0ZW5kcyBDb250cm9sPFVJV2luZG93T3B0aW9uPiBpbXBsZW1lbnRzIFVJQ29udHJvbDxVSVdpbmRvd09wdGlvbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDllK/kuIBJZFxyXG4gICAgICovXHJcbiAgICBAbm9FbXB0eU9yTnVsbCgpXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWuveW6plxyXG4gICAgICovXHJcbiAgICBAaXNOdW1iZXIoZmFsc2UpXHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IHRoaXMuZW50cnkud2lkdGg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpq5jluqZcclxuICAgICAqL1xyXG4gICAgQGlzTnVtYmVyKGZhbHNlKVxyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gdGhpcy5lbnRyeS5oZWlnaHQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDlsI/lrr3luqZcclxuICAgICAqL1xyXG4gICAgQGlzTnVtYmVyKGZhbHNlKVxyXG4gICAgcHVibGljIG1pbldpZHRoOiBudW1iZXIgPSAyMDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnIDlsI/pq5jluqZcclxuICAgICAqL1xyXG4gICAgQGlzTnVtYmVyKGZhbHNlKVxyXG4gICAgcHVibGljIG1pbkhlaWdodDogbnVtYmVyID0gMjAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyA5aSn5a695bqmXHJcbiAgICAgKi9cclxuICAgIEBpc051bWJlcihmYWxzZSlcclxuICAgIHB1YmxpYyBtYXhXaWR0aDogbnVtYmVyID0gaW5uZXJXaWR0aDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacgOWkp+mrmOW6plxyXG4gICAgICovXHJcbiAgICBAaXNOdW1iZXIoZmFsc2UpXHJcbiAgICBwdWJsaWMgbWF4SGVpZ2h0OiBudW1iZXIgPSBpbm5lckhlaWdodDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaehOmAoOWHveaVsOWIneWni+WMllxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBVSVdpbmRvd09wdGlvbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnM/LmlkID8/IFwiXCI7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaOp+S7tuWFg+e0oOWvueixoVxyXG4gICAgICovXHJcbiAgICBwcmVzZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBlbGVtZW50LmlkID0gYCR7dGhpcy5lbnRyeS5wcmVmaXggKyB0aGlzLmlkfWA7XHJcblxyXG4gICAgICAgIGFkZFN0eWxlcyhlbGVtZW50LCA8Q1NTU3R5bGVEZWNsYXJhdGlvbj57XHJcbiAgICAgICAgICAgIG1heFdpZHRoOiBgJHt0aGlzLm1heFdpZHRofXB4YCxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBgJHt0aGlzLm1heEhlaWdodH1weGAsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiBgJHt0aGlzLm1pbldpZHRofXB4YCxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiBgJHt0aGlzLm1pbkhlaWdodH1weGAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBgJHt0aGlzLndpZHRofXB4YCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHt0aGlzLmhlaWdodH1weGBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbliJ3lp4vkvKDlhaXlj4LmlbBcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIOaOp+S7tuaUr+aMgeS8oOWFpeWPr+mAieWPguaVsFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVyT3B0aW9ucyhvcHRpb25zOiBVSVdpbmRvd09wdGlvbikge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRpb25zPy53aWR0aCA/PyB0aGlzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucz8uaGVpZ2h0ID8/IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubWF4V2lkdGggPSBvcHRpb25zPy5tYXhXaWR0aCA/PyB0aGlzLm1heFdpZHRoO1xyXG4gICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gb3B0aW9ucz8ubWF4SGVpZ2h0ID8/IHRoaXMubWF4SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubWluV2lkdGggPSBvcHRpb25zPy5taW5XaWR0aCA/PyB0aGlzLm1pbldpZHRoO1xyXG4gICAgICAgIHRoaXMubWluSGVpZ2h0ID0gb3B0aW9ucz8ubWluSGVpZ2h0ID8/IHRoaXMubWluSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCB0aGlzLndpZHRoKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5taW4odGhpcy5tYXhXaWR0aCwgdGhpcy53aWR0aCk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiDmipvlh7rlvILluLjmj5DnpLpcclxuICogQHBhcmFtIG1lc3NhZ2UgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxcbuexu+Wei++8mueoi+W6j+W8guW4uFxcbuW8guW4uOS/oeaBr++8miR7bWVzc2FnZX1cXG7loIbmoIjkv6Hmga/vvJpgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOmqjOivgemUmeivr+aPkOekulxyXG4gKiBAcGFyYW0gbWVzc2FnZSDplJnor6/kv6Hmga9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZhaWwobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxcbuexu+Wei++8mumqjOivgemUmeivr1xcbumUmeivr+S/oeaBr++8miR7bWVzc2FnZX1cXG7loIbmoIjkv6Hmga/vvJpgKTtcclxufSIsIi8qKlxyXG4gKiDkuLrlhYPntKDmt7vliqDmoLflvI9cclxuICogQHBhcmFtIGVsZW1lbnQg5YWD57SgXHJcbiAqIEBwYXJhbSBzdHlsZXMg5qC35byP5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkU3R5bGVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdHlsZXM6IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlVmFsdWUgPSBzdHlsZXNba2V5XTtcclxuICAgICAgICBpZiAoc3R5bGVWYWx1ZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyB2YWxpZGF0ZUZhaWwsIGVycm9yIH0gZnJvbSBcIi4uL2V4Y2VwdGlvbi9leGNlcHRpb25cIjtcclxuXHJcbi8qKlxyXG4gKiDln7rnoYDnsbvlnovpqozor4FcclxuICogQHBhcmFtIHZhbHVlIOWAvFxyXG4gKiBAcGFyYW0gdHlwZSDlj6/pgInnsbvlnotcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBiYXNlVHlwZVZhbGlkYXRvcih2YWx1ZTogYW55LCB0eXBlOiBcIm51bWJlclwiIHwgXCJzdHJpbmdcIiB8IFwiZnVuY3Rpb25cIiB8IFwiYXJyYXlcIikge1xyXG4gICAgbGV0IGNuVHlwZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJudW1iZXJcIjpcclxuICAgICAgICAgICAgY25UeXBlID0gXCLmlbDlrZdcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxyXG4gICAgICAgICAgICBjblR5cGUgPSBcIuWtl+espuS4slwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcclxuICAgICAgICAgICAgY25UeXBlID0gXCLlh73mlbBcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImFycmF5XCI6XHJcbiAgICAgICAgICAgIGNuVHlwZSA9IFwi5pWw57uEXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6IGVycm9yKFwi5a2Y5Zyo5pyq6K+G5Yir5Z+656GA57G75Z6LXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgodHlwZSAhPT0gXCJhcnJheVwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gdHlwZSkgfHxcclxuICAgICAgICAodHlwZSA9PT0gXCJhcnJheVwiICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkpIHtcclxuICAgICAgICB2YWxpZGF0ZUZhaWwoYFxcYCR7dmFsdWV9XFxgIOS4jeaYr+S4gOS4quato+ehrueahCR7Y25UeXBlfeexu+Wei2ApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHZhbGlkYXRlRmFpbCB9IGZyb20gXCIuLi9leGNlcHRpb24vZXhjZXB0aW9uXCJcclxuaW1wb3J0IHsgYmFzZVR5cGVWYWxpZGF0b3IgfSBmcm9tIFwiLi9iYXNlLXZhbGlkYXRvclwiO1xyXG5cclxuLyoqXHJcbiAqIOWxnuaAp+mqjOivgee7n+S4gOWkhOeQhlxyXG4gKiBAcGFyYW0gc2V0SGFuZGxlciDpqozor4Hlp5TmiZjvvIzpqozor4HmiJDlip/ov5Tlm57mlrDlgLxcclxuICogQHBhcmFtIHR5cGVWYWxpZGF0b3Ig6buY6K6k57G75Z6L6aqM6K+B5ZmoXHJcbiAqL1xyXG5mdW5jdGlvbiBwcm9wZXJ0eVZhbGlkYXRvcihzZXRIYW5kbGVyOiAobmV3VmFsdWU6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCkgPT4gYW55LCB0eXBlVmFsaWRhdG9yPzogKG5ld1ZhbHVlOiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpID0+IHZvaWQpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcGVydHlLZXldO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XHJcbiAgICAgICAgICAgIGdldDogKCkgPT4gdmFsdWUsXHJcbiAgICAgICAgICAgIHNldDogKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZVZhbGlkYXRvcikgdHlwZVZhbGlkYXRvcihuZXdWYWx1ZSwgcHJvcGVydHlLZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhbHVlID0gc2V0SGFuZGxlcihuZXdWYWx1ZSwgcHJvcGVydHlLZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpqozor4HmmK/lkKbmmK/mlbDlrZfnsbvlnotcclxuICogQHBhcmFtIGFsbG93TWludXMg5YWB6K646LSf5pWw77yf6buY6K6k77yadHJ1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKGFsbG93TWludXM6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICByZXR1cm4gcHJvcGVydHlWYWxpZGF0b3IobmV3VmFsdWUgPT4ge1xyXG4gICAgICAgIGlmIChhbGxvd01pbnVzKSByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gTWF0aC5hYnMobmV3VmFsdWUpKSByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgIGVsc2UgdmFsaWRhdGVGYWlsKGDlj6rog73kvKDlhaXmraPlrp7mlbBgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBuZXdWYWx1ZSA9PiBiYXNlVHlwZVZhbGlkYXRvcihuZXdWYWx1ZSwgXCJudW1iZXJcIikpO1xyXG59XHJcblxyXG4vKipcclxuICog5pyA5bCP5YC86aqM6K+BXHJcbiAqIEBwYXJhbSBtaW5WYWx1ZSDmnIDlsI/lgLxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtaW4obWluVmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHByb3BlcnR5VmFsaWRhdG9yKG5ld1ZhbHVlID0+IHtcclxuICAgICAgICBpZiAobmV3VmFsdWUgPj0gbWluVmFsdWUpIHJldHVybiBuZXdWYWx1ZTtcclxuICAgICAgICBlbHNlIHZhbGlkYXRlRmFpbChgXFxgJHtuZXdWYWx1ZX1cXGAg5LiN6IO95bCP5LqOIFxcYCR7bWluVmFsdWV9XFxgYCk7XHJcbiAgICB9LCBuZXdWYWx1ZSA9PiBiYXNlVHlwZVZhbGlkYXRvcihuZXdWYWx1ZSwgXCJudW1iZXJcIikpO1xyXG59XHJcblxyXG4vKipcclxuICog5pyA5aSn5YC86aqM6K+BXHJcbiAqIEBwYXJhbSBtaW5WYWx1ZSDmnIDlpKflgLxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXgobWF4VmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHByb3BlcnR5VmFsaWRhdG9yKG5ld1ZhbHVlID0+IHtcclxuICAgICAgICBpZiAobmV3VmFsdWUgPD0gbWF4VmFsdWUpIHJldHVybiBuZXdWYWx1ZTtcclxuICAgICAgICBlbHNlIHZhbGlkYXRlRmFpbChgXFxgJHtuZXdWYWx1ZX1cXGAg5LiN6IO95aSn5LqOIFxcYCR7bWF4VmFsdWV9XFxgYCk7XHJcbiAgICB9LCBuZXdWYWx1ZSA9PiBiYXNlVHlwZVZhbGlkYXRvcihuZXdWYWx1ZSwgXCJudW1iZXJcIikpO1xyXG59XHJcblxyXG4vKipcclxuICog6ZW/5bqm6aqM6K+BXHJcbiAqIEBwYXJhbSBtaW5WYWx1ZSDmnIDlsI/lgLxcclxuICogQHBhcmFtIG1heFZhbHVlIOacgOWkp+WAvFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChtaW5WYWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gcHJvcGVydHlWYWxpZGF0b3IobmV3VmFsdWUgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZUxlbmd0aCA9IG5ld1ZhbHVlLmxlbmd0aDtcclxuICAgICAgICBpZiAodmFsdWVMZW5ndGggPj0gbWluVmFsdWUgJiYgdmFsdWVMZW5ndGggPD0gbWF4VmFsdWUpIHJldHVybiBuZXdWYWx1ZTtcclxuICAgICAgICBlbHNlIHZhbGlkYXRlRmFpbChgXFxgJHtuZXdWYWx1ZX1cXGAg6ZW/5bqm5LiN5ZyoIFxcYFske21pblZhbHVlfSwke21heFZhbHVlfV1cXGAg5Yy66Ze0YCk7XHJcbiAgICB9LCBuZXdWYWx1ZSA9PiBiYXNlVHlwZVZhbGlkYXRvcihuZXdWYWx1ZSwgXCJzdHJpbmdcIikpO1xyXG59XHJcblxyXG4vKipcclxuICog5q2j5YiZ6KGo6L6+5byP5Yy56YWN6aqM6K+BXHJcbiAqIEBwYXJhbSByZWcg5q2j5YiZ6KGo6L6+5byPXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2gocmVnOiBSZWdFeHApIHtcclxuICAgIHJldHVybiBwcm9wZXJ0eVZhbGlkYXRvcihuZXdWYWx1ZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZy50ZXN0KG5ld1ZhbHVlKSkgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgICAgIGVsc2UgdmFsaWRhdGVGYWlsKGBcXGAke25ld1ZhbHVlfVxcYCDkuI3og73ljLnphY3mraPliJnooajovr7lvI8gXFxgJHtyZWd9XFxgYCk7XHJcbiAgICB9LCBuZXdWYWx1ZSA9PiBiYXNlVHlwZVZhbGlkYXRvcihuZXdWYWx1ZSwgXCJzdHJpbmdcIikpO1xyXG59XHJcblxyXG4vKipcclxuICog5p6a5Li+5Y+v6YCJ5YC86aqM6K+BXHJcbiAqIEBwYXJhbSBlbnVtVmFsdWVzIOWPr+WPmOaemuS4vuWAvFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9wdGlvbnMoLi4uZW51bVZhbHVlczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPikge1xyXG4gICAgcmV0dXJuIHByb3BlcnR5VmFsaWRhdG9yKG5ld1ZhbHVlID0+IHtcclxuICAgICAgICBpZiAoZW51bVZhbHVlcy5pbmRleE9mKG5ld1ZhbHVlKSA+IC0xKSByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICAgICAgZWxzZSB2YWxpZGF0ZUZhaWwoYFxcYCR7bmV3VmFsdWV9XFxgIOS4jeWcqOWPr+mAieWAvCBcXGBbJHtlbnVtVmFsdWVzLnRvU3RyaW5nKCl9XVxcYCDlhoVgKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICog56m65a2X56ym5Liy5ZKMbnVsbOmqjOivgVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5vRW1wdHlPck51bGwoKSB7XHJcbiAgICByZXR1cm4gcHJvcGVydHlWYWxpZGF0b3IoKG5ld1ZhbHVlLCBwcm9wZXJ0eUtleSkgPT4ge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZS50cmltKCkubGVuZ3RoID4gMCkgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgICAgIGVsc2UgdmFsaWRhdGVGYWlsKGBcXGAke3Byb3BlcnR5S2V5LnRvU3RyaW5nKCl9XFxgIOS4jeWFgeiuuOS4uuepuuWtl+espuaIlm51bGxgKTtcclxuICAgIH0sIG5ld1ZhbHVlID0+IGJhc2VUeXBlVmFsaWRhdG9yKG5ld1ZhbHVlLCBcInN0cmluZ1wiKSk7XHJcbn0iLCJpbXBvcnQgeyBHbG9iYWxPcHRpb24gfSBmcm9tIFwiLi9jb25zdHJhaW50XCI7XHJcbmltcG9ydCB7IFN1cHBvcnRMYW5ndWFnZSB9IGZyb20gXCIuL2VudW1cIjtcclxuaW1wb3J0IHsgb3B0aW9ucywgaXNOdW1iZXIgfSBmcm9tIFwiLi4vY29yZS92YWxpZGF0b3IvcHJvcGVydHktdmFsaWRhdG9yXCI7XHJcbmltcG9ydCBVSVdpbmRvdyBmcm9tIFwiLi4vY29udHJvbC93aW5kb3cvdWktd2luZG93XCI7XHJcbmltcG9ydCB7IFVJV2luZG93T3B0aW9uIH0gZnJvbSBcIi4uL2NvbnRyb2wvd2luZG93L2NvbnN0cmFpbnRcIjtcclxuXHJcbmltcG9ydCBcIi4uL2Fzc2V0L3N0eWxlL3N0eWxlXCI7XHJcblxyXG4vKipcclxuICog5YWl5Y+j5Y2V5L6L57G777yM5om/6L29552A5YWo5bGA5pWw5o2u5a2Y5YKoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyeSB7XHJcbiAgICAvKipcclxuICAgICAqIOWJjee8gOesplxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHJlZml4OiBzdHJpbmcgPSBcImxheXgtXCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDniYjmnKzlj7dcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZyA9IFwiMy4wLjBcIjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOm7mOiupOivreiogFxyXG4gICAgICovXHJcbiAgICBAb3B0aW9ucyhTdXBwb3J0TGFuZ3VhZ2UuWkhfQ04sIFN1cHBvcnRMYW5ndWFnZS5FTl9VUylcclxuICAgIHB1YmxpYyBsYW5nOiBTdXBwb3J0TGFuZ3VhZ2UgPSBTdXBwb3J0TGFuZ3VhZ2UuWkhfQ047XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpu5jorqTnqpflj6PliJ3lp4vljJblrr3luqZcclxuICAgICAqL1xyXG4gICAgQGlzTnVtYmVyKGZhbHNlKVxyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSA4MDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpu5jorqTnqpflj6PliJ3lp4vljJbpq5jluqZcclxuICAgICAqL1xyXG4gICAgQGlzTnVtYmVyKGZhbHNlKVxyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gNjAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog56eB5pyJ5YyW5p6E6YCg5Ye95pWw77yM5a6e546w5Y2V5L6LXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3Iob3B0aW9uczogR2xvYmFsT3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOaWsOeql+WPo1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5Y+v6YCJ5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIG9wZW4ob3B0aW9uczogVUlXaW5kb3dPcHRpb24pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB1aVdpbmRvdyA9IG5ldyBVSVdpbmRvdyhvcHRpb25zKTtcclxuICAgICAgICBjb25zdCB1aVdpbmRvd0VsZW1lbnQgPSB1aVdpbmRvdy5wcmVzZW50KCk7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodWlXaW5kb3dFbGVtZW50KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1aVdpbmRvd0VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Z2Z5oCB5a6e5L6L5Y+Y6YePXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFbnRyeTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWUr+S4gOWPr+eUqOWvueixoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKG9wdGlvbnM6IEdsb2JhbE9wdGlvbiA9IDxHbG9iYWxPcHRpb24+e30pOiBFbnRyeSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRW50cnkob3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWkhOeQhuS8oOWFpeWPguaVsFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMg5YWl5Y+j5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlck9wdGlvbnMob3B0aW9uczogR2xvYmFsT3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5sYW5nID0gb3B0aW9ucz8ubGFuZyA/PyBTdXBwb3J0TGFuZ3VhZ2UuWkhfQ047XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnM/LndpZHRoID8/IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zPy5oZWlnaHQgPz8gdGhpcy5oZWlnaHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRyeU92ZXJ0LCBHbG9iYWxPcHRpb24gfSBmcm9tIFwiLi9hcHAvZW50cnkvY29uc3RyYWludFwiO1xyXG5pbXBvcnQgRW50cnkgZnJvbSBcIi4vYXBwL2VudHJ5L2VudHJ5XCI7XHJcblxyXG4vKipcclxuICog5a+55aSW5YWs5byA5pa55rOVXHJcbiAqL1xyXG5mdW5jdGlvbiBvdmVydCgpOiBFbnRyeU92ZXJ0IHtcclxuICAgIGNvbnN0IGVudHJ5ID0gRW50cnkuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbiAgICBjb25zdCBlbnRyeU92ZXJ0ID0gPEVudHJ5T3ZlcnQ+ZnVuY3Rpb24gKG9wdGlvbnM6IEdsb2JhbE9wdGlvbik6IHZvaWQge1xyXG4gICAgICAgIEVudHJ5LmdldEluc3RhbmNlKG9wdGlvbnMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbnRyeU92ZXJ0LnZlcnNpb24gPSBlbnRyeS52ZXJzaW9uO1xyXG4gICAgZW50cnlPdmVydC5vcGVuID0gZW50cnkub3BlbjtcclxuXHJcbiAgICByZXR1cm4gZW50cnlPdmVydDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3ZlcnQoKTsiXSwic291cmNlUm9vdCI6IiJ9