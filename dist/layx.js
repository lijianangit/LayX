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
var Component = (function () {
    function Component(options) {
        this.options = options;
        this.entry = entry_1.Entry.Instance();
        this.eventBus = event_bus_1.EventBus.Instance();
    }
    Component.prototype.readGlobalValue = function (path, defaultValue, startObject) {
        if (defaultValue === void 0) { defaultValue = null; }
        if (startObject === void 0) { startObject = this.entry; }
        return object_1.readObject(path, defaultValue, startObject);
    };
    Component.prototype.readOption = function (path, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        return object_1.readObject(path, defaultValue, this.options);
    };
    Component.prototype.sendEvent = function (key, message) {
        if (message === void 0) { message = {}; }
        this.eventBus.emit(key, {
            dataset: message,
            eventTarget: {
                name: key,
                timestamp: new Date().valueOf()
            }
        });
    };
    return Component;
}());
exports.Component = Component;


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
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! ../ */ "./app/component/index.ts");
var const_1 = __webpack_require__(/*! ../../const */ "./app/const/index.ts");
var contract_1 = __webpack_require__(/*! ../../contract */ "./app/contract/index.ts");
var property_1 = __webpack_require__(/*! ../../core/decorator/property */ "./app/core/decorator/property/index.ts");
var element_1 = __webpack_require__(/*! ../../core/helper/element */ "./app/core/helper/element/index.ts");
var validator_1 = __webpack_require__(/*! ../../core/validator */ "./app/core/validator/index.ts");
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(options) {
        var _a;
        var _this = _super.call(this, options) || this;
        _this.width = _this.readGlobalValue("window/width");
        _this.height = _this.readGlobalValue("window/height");
        _this.minWidth = _this.readGlobalValue("window/minWidth");
        _this.minHeight = _this.readGlobalValue("window/minHeight");
        _this.maxWidth = _this.readGlobalValue("window/maxWidth");
        _this.maxHeight = _this.readGlobalValue("window/maxHeight");
        _this.left = 0;
        _this.top = 0;
        _this.border = _this.readGlobalValue("window/border");
        _this.boxShadow = _this.readGlobalValue("window/boxShadow");
        _this.animate = _this.readGlobalValue("window/animate");
        _this.backgroundColor = _this.readGlobalValue("window/backgroundColor");
        _this.id = (_a = options) === null || _a === void 0 ? void 0 : _a.id;
        _this.width = _this.readOption("width", _this.width);
        _this.height = _this.readOption("height", _this.height);
        _this.maxWidth = _this.readOption("maxWidth", _this.maxWidth);
        _this.maxHeight = _this.readOption("maxHeight", _this.maxHeight);
        _this.minWidth = _this.readOption("minWidth", _this.minWidth);
        _this.minHeight = _this.readOption("minHeight", _this.minHeight);
        _this.width = Math.max(_this.minWidth, _this.width);
        _this.width = Math.min(_this.maxWidth, _this.width);
        _this.height = Math.max(_this.minHeight, _this.height);
        _this.height = Math.min(_this.maxHeight, _this.height);
        _this.border = _this.readOption("border", _this.border);
        _this.boxShadow = _this.readOption("boxShadow", _this.boxShadow);
        _this.backgroundColor = _this.readOption("backgroundColor", _this.backgroundColor);
        return _this;
    }
    UIWindow.prototype.createView = function () {
        var element = element_1.createDivElement(this.id);
        element_1.addCSSClasses(element, "window", "flex-box", "col-direction", this.boxShadow ? "box-shadow" : undefined, this.animate !== false ? "animate" : undefined, this.animate !== false ? "animate-" + this.animate + "-show" : undefined);
        element_1.addCSSStyles(element, {
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
        this.sendEvent(const_1.WINDOW_CREATE, {
            id: this.id,
            target: this
        });
        return element;
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
        property_1.validator.apply(void 0, contract_1.BorderOptionContract)
    ], UIWindow.prototype, "border", void 0);
    __decorate([
        property_1.validator(validator_1.checkBoolean)
    ], UIWindow.prototype, "boxShadow", void 0);
    __decorate([
        property_1.validator([validator_1.checkIn, "zoom"], false)
    ], UIWindow.prototype, "animate", void 0);
    __decorate([
        property_1.validator(validator_1.checkColor)
    ], UIWindow.prototype, "backgroundColor", void 0);
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
exports.WINDOW_CREATE = "window:create";


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
exports.GlobalUIWindowOptionContract = {
    width: validator_1.checkPstNumber,
    height: validator_1.checkPstNumber,
    minWidth: validator_1.checkPstNumber,
    minHeight: validator_1.checkPstNumber,
    maxWidth: validator_1.checkPstNumber,
    maxHeight: validator_1.checkPstNumber,
    backgroundColor: validator_1.checkColor,
    boxShadow: validator_1.checkBoolean,
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

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../../exception */ "./app/core/exception/index.ts");
var object_1 = __webpack_require__(/*! ../../helper/object */ "./app/core/helper/object/index.ts");
var validator_1 = __webpack_require__(/*! ../../validator */ "./app/core/validator/index.ts");
function decorator(propertySetter) {
    if (!validator_1.checkFunction(propertySetter))
        exception_1.parameterInvalid();
    return function (target, propertyKey) {
        var value = target[propertyKey];
        var propertyDescriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function () { return value; },
            set: function (newValue) {
                if (propertyDescriptor && propertyDescriptor.set)
                    propertyDescriptor.set(newValue);
                value = propertySetter(newValue, propertyKey, value);
            }
        });
    };
}
function inValidator(newValue, oldValue) {
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
    if (validator_1.checkIn.apply(void 0, __spreadArrays([newValue], valueOptions)))
        return newValue;
    if (functionValidators.length > 0) {
        var isPassAllFunctionValidator = true;
        for (var _a = 0, functionValidators_1 = functionValidators; _a < functionValidators_1.length; _a++) {
            var functionValidator = functionValidators_1[_a];
            isPassAllFunctionValidator = validator_1.checkValidator(newValue, functionValidator);
            if (!isPassAllFunctionValidator)
                break;
        }
        if (isPassAllFunctionValidator)
            return newValue;
    }
    if (validator_1.checkJSONObject(newValue) && objectValidators.length > 0) {
        var firstValidator = objectValidators[0];
        for (var key in newValue) {
            var childValues = firstValidator[key];
            inValidator.apply(void 0, __spreadArrays([newValue[key], oldValue], (validator_1.checkArray(childValues) ? childValues : [childValues])));
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
        return inValidator.apply(void 0, __spreadArrays([newValue, value], values));
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

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
                this.messageQueues[key] = __spreadArrays(keyHandler, [handler]);
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
        else { }
    };
    EventBus.prototype.off = function (key) {
        if (!validator_1.checkNoEmptyOrNull(key))
            exception_1.parameterInvalid();
        if (!this.messageQueues.hasOwnProperty(key))
            return;
        delete this.messageQueues[key];
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

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = __webpack_require__(/*! ../../exception */ "./app/core/exception/index.ts");
var validator_1 = __webpack_require__(/*! ../../validator */ "./app/core/validator/index.ts");
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
            var cssClassName = cssClass.indexOf("!") === 0 ? cssClass.substr(1) : "layx-" + cssClass;
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
    return updateCSSClasses.apply(void 0, __spreadArrays([element, function (elementCSSClasses, cssClassIndex, cssClass) {
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
    return updateCSSClasses.apply(void 0, __spreadArrays([element, function (elementCSSClasses, cssClassIndex) {
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
    var cssClassName = cssClass.indexOf("!") === 0 ? cssClass.substr(1) : "layx-" + cssClass;
    var index = elementCSSClasses.indexOf(cssClassName);
    return !!~index;
}
exports.hasCSSClass = hasCSSClass;
function createDivElement(id) {
    var element = document.createElement("div");
    if (validator_1.checkString(id)) {
        element.id = id;
    }
    return element;
}
exports.createDivElement = createDivElement;
function createSvgElement(name) {
    if (validator_1.checkNoEmptyOrNull(name))
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


/***/ }),

/***/ "./app/core/validator/index.ts":
/*!*************************************!*\
  !*** ./app/core/validator/index.ts ***!
  \*************************************/
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
var exception_1 = __webpack_require__(/*! ../exception */ "./app/core/exception/index.ts");
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
        var validator = functionValidator[0], args = functionValidator.slice(1);
        if (!validator.apply(void 0, __spreadArrays([data], args)))
            isTrue = false;
    }
    else if (checkArray(functionValidator) && checkArray(functionValidator[0]) && checkFunction(functionValidator[0][0])) {
        var childValidator = functionValidator[0], values = functionValidator.slice(1);
        if (!checkValidator(data, childValidator) && !checkIn.apply(void 0, __spreadArrays([data], values)))
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
    if (!checkArray(data))
        return false;
    if (!checkFunctionValidator(functionValidator))
        return false;
    var isArrayType = true;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        isArrayType = checkValidator(item, functionValidator);
        if (!isArrayType)
            break;
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
var Entry = (function () {
    function Entry(options) {
        this.eventBus = event_bus_1.EventBus.Instance();
        this.version = "3.0";
        this.startZIndex = 10000000;
        this.window = {
            width: 800,
            height: 600,
            minWidth: 200,
            minHeight: 200,
            maxWidth: innerWidth,
            maxHeight: innerHeight,
            backgroundColor: "#ffffff",
            boxShadow: true,
            animate: "zoom",
            border: {
                width: 1,
                style: "solid",
                color: "#3baced",
                radius: 4
            }
        };
        this._zIndex = this.startZIndex;
        this._windows = [];
        this.handlerOptions(options);
        this.monitorEvent();
    }
    Object.defineProperty(Entry.prototype, "zIndex", {
        get: function () {
            return this._zIndex = this._zIndex + 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entry.prototype, "windows", {
        get: function () {
            return this._windows;
        },
        enumerable: true,
        configurable: true
    });
    Entry.Instance = function (options) {
        if (options === void 0) { options = {}; }
        if (!this.instance)
            this.instance = new Entry(options);
        else
            this.instance.handlerOptions(options);
        return this.instance;
    };
    Entry.prototype.handlerOptions = function (options) {
        var _a, _b, _c, _d;
        this.startZIndex = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.startZIndex, (_b !== null && _b !== void 0 ? _b : this.startZIndex));
        this.window = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.window, (_d !== null && _d !== void 0 ? _d : this.window));
    };
    Entry.prototype.monitorEvent = function () {
        var _this = this;
        this.eventBus.on(const_1.WINDOW_CREATE, function (message) {
            _this._windows.push(message.dataset.target);
        });
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
        if (this.getWindow(options.id))
            exception_1.parameterInvalid(": Window ID '" + options.id + "' already exists");
        var fragment = document.createDocumentFragment();
        var uiWindow = new ui_window_1.UIWindow(options);
        var uiWindowElement = uiWindow.createView();
        fragment.appendChild(uiWindowElement);
        document.body.appendChild(uiWindowElement);
    };
    Entry.prototype.getWindow = function (id) {
        if (!validator_1.checkNoEmptyOrNull(id))
            exception_1.parameterInvalid();
        var searchs = this._windows.filter(function (win) {
            return win.id === id;
        });
        return searchs.length > 0 ? searchs[0] : null;
    };
    __decorate([
        property_1.validator(validator_1.checkPstInt, [validator_1.checkMin, 1000])
    ], Entry.prototype, "startZIndex", void 0);
    __decorate([
        property_1.validator(contract_1.GlobalUIWindowOptionContract)
    ], Entry.prototype, "window", void 0);
    return Entry;
}());
exports.Entry = Entry;


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
exports.default = (function overt() {
    var entry = entry_1.Entry.Instance();
    var overt = function (options) {
        entry_1.Entry.Instance(options);
    };
    overt.version = entry.version;
    overt.on = entry.on.bind(entry);
    overt.open = entry.open.bind(entry);
    return overt;
})();


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9hc3NldC9zdHlsZS9hbmltYXRlLmNzcz9hMjlhIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvY29tbW9uLmNzcz80ZGUzIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvc3ZnLmNzcz9hZDhkIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvd2luZG93LmNzcz9iYjQzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29tcG9uZW50L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29tcG9uZW50L3VpLXdpbmRvdy9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvbnN0L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29udHJhY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvcmUvZXZlbnQtYnVzL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9leGNlcHRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2hlbHBlci9lbGVtZW50L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9oZWxwZXIvb2JqZWN0L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9oZWxwZXIvc3RyaW5nL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS92YWxpZGF0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9lbnRyeS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsOEVBQTRCO0FBQzVCLHdFQUF5QjtBQUN6Qiw4RUFBNEI7QUFDNUIsZ0ZBQTZCOzs7Ozs7Ozs7Ozs7QUNIN0IsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7Ozs7O0FDQUEsZ0dBQTZDO0FBQzdDLHFHQUFtRDtBQUVuRCwwRUFBaUM7QUFHakM7SUFLSSxtQkFBNkIsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUhuQyxVQUFLLEdBQVUsYUFBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLGFBQVEs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LEdBQUcsYUFBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLElBQU0sS0FBSyxHQUFVLFVBQVUsT0FBb0I7UUFDL0MsYUFBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUM7SUFDRixLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDOUIsS0FBSyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoibGF5eC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxheXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGF5eFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGUvY29tbW9uLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS9zdmcuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlL3dpbmRvdy5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUvYW5pbWF0ZS5jc3MnO1xyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9jb3JlL2V2ZW50LWJ1cyc7XHJcbmltcG9ydCB7IHJlYWRPYmplY3QgfSBmcm9tICcuLi9jb3JlL2hlbHBlci9vYmplY3QnO1xyXG5pbXBvcnQgeyBKU09OT2JqZWN0IH0gZnJvbSAnLi4vY29yZS90eXBlJztcclxuaW1wb3J0IHsgRW50cnkgfSBmcm9tICcuLi9lbnRyeSc7XHJcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3R5cGUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUT3B0aW9uIGV4dGVuZHMgSlNPTk9iamVjdD4ge1xyXG4gICAgcHJpdmF0ZSBfX05BTUVfXzogYW55O1xyXG4gICAgcHJvdGVjdGVkIGVudHJ5OiBFbnRyeSA9IEVudHJ5Lkluc3RhbmNlKCk7XHJcbiAgICBwcm90ZWN0ZWQgZXZlbnRCdXM6IEV2ZW50QnVzID0gRXZlbnRCdXMuSW5zdGFuY2UoKTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIG9wdGlvbnM6IFRPcHRpb24pIHsgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZWFkR2xvYmFsVmFsdWUocGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IG51bGwsIHN0YXJ0T2JqZWN0ID0gdGhpcy5lbnRyeSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHJlYWRPYmplY3Q8YW55PihwYXRoLCBkZWZhdWx0VmFsdWUsIHN0YXJ0T2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVhZE9wdGlvbihwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55ID0gbnVsbCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHJlYWRPYmplY3Q8YW55PihwYXRoLCBkZWZhdWx0VmFsdWUsIHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNlbmRFdmVudDxURXZlbnRNZXNzYWdlIGV4dGVuZHMgSlNPTk9iamVjdD4oa2V5OiBzdHJpbmcsIG1lc3NhZ2U6IFRFdmVudE1lc3NhZ2UgPSA8VEV2ZW50TWVzc2FnZT57fSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXZlbnRCdXMuZW1pdChrZXksIDxFdmVudE1lc3NhZ2U8VEV2ZW50TWVzc2FnZT4+e1xyXG4gICAgICAgICAgICBkYXRhc2V0OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBldmVudFRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnZhbHVlT2YoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8nO1xyXG5pbXBvcnQgeyBBbmltYXRpb25PcHRpb25hbCwgV0lORE9XX0NSRUFURSB9IGZyb20gJy4uLy4uL2NvbnN0JztcclxuaW1wb3J0IHsgQm9yZGVyT3B0aW9uQ29udHJhY3QgfSBmcm9tICcuLi8uLi9jb250cmFjdCc7XHJcbmltcG9ydCB7IHZhbGlkYXRvciB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5JztcclxuaW1wb3J0IHsgYWRkQ1NTQ2xhc3NlcywgYWRkQ1NTU3R5bGVzLCBjcmVhdGVEaXZFbGVtZW50IH0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXIvZWxlbWVudCc7XHJcbmltcG9ydCB7XHJcbiAgICBjaGVja0Jvb2xlYW4sIGNoZWNrQ29sb3IsIGNoZWNrSW4sIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tQc3ROdW1iZXJcclxufSBmcm9tICcuLi8uLi9jb3JlL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IEJvcmRlck9wdGlvbiwgQ29tcG9uZW50RWxlbWVudCwgVUlXaW5kb3dPcHRpb24sIFdpbmRvd0V2ZW50TWVzc2FnZSB9IGZyb20gJy4uLy4uL3R5cGUnO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gJy4uL3VpLWNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlXaW5kb3cgZXh0ZW5kcyBDb21wb25lbnQ8VUlXaW5kb3dPcHRpb24+IGltcGxlbWVudHMgVUlDb21wb25lbnQ8VUlXaW5kb3dPcHRpb24+IHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBVSVdpbmRvd09wdGlvbikge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucz8uaWQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMucmVhZE9wdGlvbihcIndpZHRoXCIsIHRoaXMud2lkdGgpO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5yZWFkT3B0aW9uKFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLm1heFdpZHRoID0gdGhpcy5yZWFkT3B0aW9uKFwibWF4V2lkdGhcIiwgdGhpcy5tYXhXaWR0aCk7XHJcbiAgICAgICAgdGhpcy5tYXhIZWlnaHQgPSB0aGlzLnJlYWRPcHRpb24oXCJtYXhIZWlnaHRcIiwgdGhpcy5tYXhIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMubWluV2lkdGggPSB0aGlzLnJlYWRPcHRpb24oXCJtaW5XaWR0aFwiLCB0aGlzLm1pbldpZHRoKTtcclxuICAgICAgICB0aGlzLm1pbkhlaWdodCA9IHRoaXMucmVhZE9wdGlvbihcIm1pbkhlaWdodFwiLCB0aGlzLm1pbkhlaWdodCk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGgubWF4KHRoaXMubWluV2lkdGgsIHRoaXMud2lkdGgpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBNYXRoLm1pbih0aGlzLm1heFdpZHRoLCB0aGlzLndpZHRoKTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLm1pbih0aGlzLm1heEhlaWdodCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIC8vIFt0aGlzLmxlZnQsIHRoaXMudG9wXSA9IGNhbGNPZmZzZXQodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIG9wdGlvbnM/Lm9mZnNldCk7XHJcbiAgICAgICAgdGhpcy5ib3JkZXIgPSB0aGlzLnJlYWRPcHRpb24oXCJib3JkZXJcIiwgdGhpcy5ib3JkZXIpO1xyXG4gICAgICAgIHRoaXMuYm94U2hhZG93ID0gdGhpcy5yZWFkT3B0aW9uKFwiYm94U2hhZG93XCIsIHRoaXMuYm94U2hhZG93KTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHRoaXMucmVhZE9wdGlvbihcImJhY2tncm91bmRDb2xvclwiLCB0aGlzLmJhY2tncm91bmRDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja05vRW1wdHlPck51bGwpXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZztcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvdy93aWR0aFwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3cvaGVpZ2h0XCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgbWluV2lkdGg6IG51bWJlciA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93L21pbldpZHRoXCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgbWluSGVpZ2h0OiBudW1iZXIgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvdy9taW5IZWlnaHRcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyBtYXhXaWR0aDogbnVtYmVyID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3cvbWF4V2lkdGhcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyBtYXhIZWlnaHQ6IG51bWJlciA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93L21heEhlaWdodFwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIGxlZnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyB0b3A6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHZhbGlkYXRvciguLi5Cb3JkZXJPcHRpb25Db250cmFjdClcclxuICAgIHB1YmxpYyBib3JkZXI6IGZhbHNlIHwgQm9yZGVyT3B0aW9uID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3cvYm9yZGVyXCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tCb29sZWFuKVxyXG4gICAgcHVibGljIGJveFNoYWRvdzogYm9vbGVhbiA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93L2JveFNoYWRvd1wiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKFtjaGVja0luLCBBbmltYXRpb25PcHRpb25hbC5aT09NXSwgZmFsc2UpXHJcbiAgICBwdWJsaWMgYW5pbWF0ZTogZmFsc2UgfCBBbmltYXRpb25PcHRpb25hbCA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93L2FuaW1hdGVcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja0NvbG9yKVxyXG4gICAgcHVibGljIGJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3cvYmFja2dyb3VuZENvbG9yXCIpO1xyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVWaWV3KCk6IENvbXBvbmVudEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVEaXZFbGVtZW50KHRoaXMuaWQpO1xyXG5cclxuICAgICAgICBhZGRDU1NDbGFzc2VzKGVsZW1lbnQsXHJcbiAgICAgICAgICAgIFwid2luZG93XCIsXHJcbiAgICAgICAgICAgIFwiZmxleC1ib3hcIixcclxuICAgICAgICAgICAgXCJjb2wtZGlyZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIHRoaXMuYm94U2hhZG93ID8gXCJib3gtc2hhZG93XCIgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UgPyBcImFuaW1hdGVcIiA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlICE9PSBmYWxzZSA/IGBhbmltYXRlLSR7dGhpcy5hbmltYXRlfS1zaG93YCA6IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgIGFkZENTU1N0eWxlcyhlbGVtZW50LCA8Q1NTU3R5bGVEZWNsYXJhdGlvbj57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhpcy5iYWNrZ3JvdW5kQ29sb3J9YCxcclxuICAgICAgICAgICAgekluZGV4OiBgJHt0aGlzLmVudHJ5LnpJbmRleH1gLFxyXG4gICAgICAgICAgICB3aWR0aDogYCR7dGhpcy53aWR0aH1weGAsXHJcbiAgICAgICAgICAgIGhlaWdodDogYCR7dGhpcy5oZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogdGhpcy5tYXhXaWR0aCAhPT0gaW5uZXJXaWR0aCA/IGAke3RoaXMubWF4V2lkdGh9cHhgIDogbnVsbCxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLm1heEhlaWdodCAhPT0gaW5uZXJIZWlnaHQgPyBgJHt0aGlzLm1heEhlaWdodH1weGAgOiBudWxsLFxyXG4gICAgICAgICAgICBtaW5XaWR0aDogYCR7dGhpcy5taW5XaWR0aH1weGAsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogYCR7dGhpcy5taW5IZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICBsZWZ0OiBgJHt0aGlzLmxlZnR9cHhgLFxyXG4gICAgICAgICAgICB0b3A6IGAke3RoaXMudG9wfXB4YCxcclxuICAgICAgICAgICAgYm9yZGVyOiB0aGlzLmJvcmRlciA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgIGAke3RoaXMuYm9yZGVyLndpZHRofXB4ICR7dGhpcy5ib3JkZXIuc3R5bGV9ICR7dGhpcy5ib3JkZXIuY29sb3J9YCxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLmJvcmRlciA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgIGAke3RoaXMuYm9yZGVyLnJhZGl1c31weGAsXHJcbiAgICAgICAgICAgIHdlYmtpdEJvcmRlclJhZGl1czogdGhpcy5ib3JkZXIgPT09IGZhbHNlID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci5yYWRpdXN9cHhgLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNlbmRFdmVudChXSU5ET1dfQ1JFQVRFLCA8V2luZG93RXZlbnRNZXNzYWdlPntcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIHRhcmdldDogdGhpc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBlbnVtIEJvcmRlclN0eWxlT3B0aW9uYWwge1xyXG4gICAgRE9UVEVEID0gXCJkb3R0ZWRcIixcclxuICAgIERBU0hFRCA9IFwiZGFzaGVkXCIsXHJcbiAgICBTT0xJRCA9IFwic29saWRcIixcclxuICAgIERPVUJMRSA9IFwiZG91YmxlXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gQW5pbWF0aW9uT3B0aW9uYWwge1xyXG4gICAgWk9PTSA9IFwiem9vbVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIERpcmVjdGlvbk9wdGlvbmFsIHtcclxuICAgIENFTlRFUiA9IFwiY2VudGVyXCIsXHJcbiAgICBUT1BfQ0VOVEVSID0gXCJ0b3AtY2VudGVyXCIsXHJcbiAgICBCT1RUT01fQ0VOVEVSID0gXCJib3R0b20tY2VudGVyXCIsXHJcbiAgICBMRUZUX1RPUCA9IFwibGVmdC10b3BcIixcclxuICAgIExFRlRfTUlERExFID0gXCJsZWZ0LW1pZGRsZVwiLFxyXG4gICAgTEVGVF9CT1RUT00gPSBcImxlZnQtYm90dG9tXCIsXHJcbiAgICBSSUdIVF9UT1AgPSBcInJpZ2h0LXRvcFwiLFxyXG4gICAgUklHSFRfTUlERExFID0gXCJyaWdodC1taWRkbGVcIixcclxuICAgIFJJR0hUX0JPVFRPTSA9IFwicmlnaHQtYm90dG9tXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdJTkRPV19DUkVBVEU6IHN0cmluZyA9IFwid2luZG93OmNyZWF0ZVwiOyIsImltcG9ydCB7IEFuaW1hdGlvbk9wdGlvbmFsLCBCb3JkZXJTdHlsZU9wdGlvbmFsIH0gZnJvbSAnLi4vY29uc3QnO1xyXG5pbXBvcnQgeyBjaGVja0Jvb2xlYW4sIGNoZWNrQ29sb3IsIGNoZWNrSW4sIGNoZWNrUHN0SW50LCBjaGVja1BzdE51bWJlciB9IGZyb20gJy4uL2NvcmUvdmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBjb25zdCBCb3JkZXJPcHRpb25Db250cmFjdCA9IFt7XHJcbiAgICB3aWR0aDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBzdHlsZTogW2NoZWNrSW4sIEJvcmRlclN0eWxlT3B0aW9uYWwuREFTSEVELCBCb3JkZXJTdHlsZU9wdGlvbmFsLlNPTElELCBCb3JkZXJTdHlsZU9wdGlvbmFsLkRPVUJMRSwgQm9yZGVyU3R5bGVPcHRpb25hbC5ET1RURURdLFxyXG4gICAgY29sb3I6IGNoZWNrQ29sb3IsXHJcbiAgICByYWRpdXM6IGNoZWNrUHN0SW50XHJcbn0sIGZhbHNlXTtcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxVSVdpbmRvd09wdGlvbkNvbnRyYWN0ID0ge1xyXG4gICAgd2lkdGg6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBjaGVja1BzdE51bWJlcixcclxuICAgIG1pbldpZHRoOiBjaGVja1BzdE51bWJlcixcclxuICAgIG1pbkhlaWdodDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBtYXhXaWR0aDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBtYXhIZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgYm94U2hhZG93OiBjaGVja0Jvb2xlYW4sXHJcbiAgICBhbmltYXRlOiBbW2NoZWNrSW4sIEFuaW1hdGlvbk9wdGlvbmFsLlpPT01dLCBmYWxzZV0sXHJcbiAgICBib3JkZXI6IEJvcmRlck9wdGlvbkNvbnRyYWN0XHJcbn07IiwiaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uLy4uL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IG1lcmdlSlNPTk9iamVjdCB9IGZyb20gJy4uLy4uL2hlbHBlci9vYmplY3QnO1xyXG5pbXBvcnQgeyBGdW5jdGlvblZhbGlkYXRvciwgSlNPTk9iamVjdCwgUHJvcGVydHlTZXR0ZXIsIFZhbHVlVHlwZSB9IGZyb20gJy4uLy4uL3R5cGUnO1xyXG5pbXBvcnQge1xyXG4gICAgY2hlY2tBcnJheSwgY2hlY2tCYXNlVHlwZSwgY2hlY2tGdW5jdGlvbiwgY2hlY2tGdW5jdGlvblZhbGlkYXRvciwgY2hlY2tJbiwgY2hlY2tKU09OT2JqZWN0LFxyXG4gICAgY2hlY2tWYWxpZGF0b3JcclxufSBmcm9tICcuLi8uLi92YWxpZGF0b3InO1xyXG5cclxuZnVuY3Rpb24gZGVjb3JhdG9yKHByb3BlcnR5U2V0dGVyOiBQcm9wZXJ0eVNldHRlcik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIGlmICghY2hlY2tGdW5jdGlvbjxQcm9wZXJ0eVNldHRlcj4ocHJvcGVydHlTZXR0ZXIpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXkpID0+IHtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcGVydHlLZXldO1xyXG4gICAgICAgIHZhciBwcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpO1xyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGdldDogKCkgPT4gdmFsdWUsXHJcbiAgICAgICAgICAgIHNldDogKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlEZXNjcmlwdG9yICYmIHByb3BlcnR5RGVzY3JpcHRvci5zZXQpIHByb3BlcnR5RGVzY3JpcHRvci5zZXQobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBwcm9wZXJ0eVNldHRlcihuZXdWYWx1ZSwgcHJvcGVydHlLZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpblZhbGlkYXRvcihuZXdWYWx1ZTogYW55LCBvbGRWYWx1ZTogYW55LCAuLi52YWx1ZXM6IEFycmF5PGFueT4pOiBhbnkge1xyXG4gICAgY29uc3QgdmFsdWVPcHRpb25zOiBBcnJheTxWYWx1ZVR5cGU+ID0gW107XHJcbiAgICBjb25zdCBmdW5jdGlvblZhbGlkYXRvcnM6IEFycmF5PEZ1bmN0aW9uVmFsaWRhdG9yPiA9IFtdO1xyXG4gICAgY29uc3Qgb2JqZWN0VmFsaWRhdG9yczogQXJyYXk8SlNPTk9iamVjdD4gPSBbXTtcclxuXHJcbiAgICB2YWx1ZXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtID09PSBudWxsIHx8IGNoZWNrQmFzZVR5cGUoaXRlbSwgXCJzdHJpbmdcIiwgXCJiaWdpbnRcIiwgXCJib29sZWFuXCIsIFwic3ltYm9sXCIsIFwidW5kZWZpbmVkXCIpKSB2YWx1ZU9wdGlvbnMucHVzaChpdGVtKTtcclxuICAgICAgICBpZiAoY2hlY2tGdW5jdGlvblZhbGlkYXRvcihpdGVtKSkgZnVuY3Rpb25WYWxpZGF0b3JzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgaWYgKGNoZWNrSlNPTk9iamVjdChpdGVtKSkgb2JqZWN0VmFsaWRhdG9ycy5wdXNoKGl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGNoZWNrSW4obmV3VmFsdWUsIC4uLnZhbHVlT3B0aW9ucykpIHJldHVybiBuZXdWYWx1ZTtcclxuXHJcbiAgICBpZiAoZnVuY3Rpb25WYWxpZGF0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgaXNQYXNzQWxsRnVuY3Rpb25WYWxpZGF0b3IgPSB0cnVlO1xyXG4gICAgICAgIGZvciAoY29uc3QgZnVuY3Rpb25WYWxpZGF0b3Igb2YgZnVuY3Rpb25WYWxpZGF0b3JzKSB7XHJcbiAgICAgICAgICAgIGlzUGFzc0FsbEZ1bmN0aW9uVmFsaWRhdG9yID0gY2hlY2tWYWxpZGF0b3IobmV3VmFsdWUsIGZ1bmN0aW9uVmFsaWRhdG9yKTtcclxuICAgICAgICAgICAgaWYgKCFpc1Bhc3NBbGxGdW5jdGlvblZhbGlkYXRvcikgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1Bhc3NBbGxGdW5jdGlvblZhbGlkYXRvcikgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGVja0pTT05PYmplY3QobmV3VmFsdWUpICYmIG9iamVjdFZhbGlkYXRvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IFtmaXJzdFZhbGlkYXRvcixdID0gb2JqZWN0VmFsaWRhdG9ycztcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZFZhbHVlcyA9IGZpcnN0VmFsaWRhdG9yW2tleV07XHJcbiAgICAgICAgICAgIGluVmFsaWRhdG9yKG5ld1ZhbHVlW2tleV0sIG9sZFZhbHVlLCAuLi4oY2hlY2tBcnJheShjaGlsZFZhbHVlcykgPyBjaGlsZFZhbHVlcyA6IFtjaGlsZFZhbHVlc10pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1lcmdlSlNPTk9iamVjdChvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcGFyYW1ldGVySW52YWxpZCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdG9yKC4uLnZhbHVlczogQXJyYXk8YW55Pik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBkZWNvcmF0b3IoKG5ld1ZhbHVlLCBwcm9wZXJ0eUtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICByZXR1cm4gaW5WYWxpZGF0b3IobmV3VmFsdWUsIHZhbHVlLCAuLi52YWx1ZXMpO1xyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyLCBNZXNzYWdlUXVldWVzIH0gZnJvbSAnLi4vdHlwZSc7XHJcbmltcG9ydCB7XHJcbiAgICBjaGVja0FycmF5RWFjaCwgY2hlY2tGdW5jdGlvbiwgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja05vTnVsbE9yVW5kZWZpbmVkXHJcbn0gZnJvbSAnLi4vdmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudEJ1cyB7XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEV2ZW50QnVzO1xyXG4gICAgcHJpdmF0ZSBtZXNzYWdlUXVldWVzOiBNZXNzYWdlUXVldWVzID0ge307XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZSgpOiBFdmVudEJ1cyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlID8/IG5ldyBFdmVudEJ1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbihrZXk6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoa2V5KSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgICAgIGlmICghY2hlY2tGdW5jdGlvbjxFdmVudEhhbmRsZXI+KGhhbmRsZXIpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2VRdWV1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlIYW5kbGVyID0gdGhpcy5tZXNzYWdlUXVldWVzW2tleV07XHJcbiAgICAgICAgICAgIGlmIChjaGVja0Z1bmN0aW9uPEV2ZW50SGFuZGxlcj4oa2V5SGFuZGxlcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1trZXldID0gW2tleUhhbmRsZXIsIGhhbmRsZXJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQXJyYXlFYWNoPEV2ZW50SGFuZGxlcj4oa2V5SGFuZGxlciwgY2hlY2tGdW5jdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1trZXldID0gWy4uLmtleUhhbmRsZXIsIGhhbmRsZXJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgdGhpcy5tZXNzYWdlUXVldWVzW2tleV0gPSBoYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbmUoa2V5OiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50SGFuZGxlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKGtleSkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgICAgICBpZiAoIWNoZWNrRnVuY3Rpb248RXZlbnRIYW5kbGVyPihoYW5kbGVyKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgICAgICB0aGlzLm1lc3NhZ2VRdWV1ZXNba2V5XSA9IGhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVtaXQoa2V5OiBzdHJpbmcsIG1lc3NhZ2U6IGFueSwgc3luYzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoa2V5KSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgICAgIGlmICghY2hlY2tOb051bGxPclVuZGVmaW5lZChtZXNzYWdlKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGtleSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qga2V5SGFuZGxlciA9IHRoaXMubWVzc2FnZVF1ZXVlc1trZXldO1xyXG4gICAgICAgIGlmIChjaGVja0Z1bmN0aW9uPEV2ZW50SGFuZGxlcj4oa2V5SGFuZGxlcikpIHtcclxuICAgICAgICAgICAgc3luYyA/IGtleUhhbmRsZXIobWVzc2FnZSkgOlxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBrZXlIYW5kbGVyKG1lc3NhZ2UpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2hlY2tBcnJheUVhY2g8RXZlbnRIYW5kbGVyPihrZXlIYW5kbGVyLCBjaGVja0Z1bmN0aW9uKSkge1xyXG4gICAgICAgICAgICBrZXlIYW5kbGVyLm1hcChoYW5kbGVyID0+IHtcclxuICAgICAgICAgICAgICAgIHN5bmMgPyBoYW5kbGVyKG1lc3NhZ2UpIDpcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGhhbmRsZXIobWVzc2FnZSksIDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb2ZmKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoa2V5KSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGtleSkpIHJldHVybjtcclxuICAgICAgICBkZWxldGUgdGhpcy5tZXNzYWdlUXVldWVzW2tleV07XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVySW52YWxpZChtZXNzYWdlOiBzdHJpbmcgPSBcIlwiKTogbmV2ZXIge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHBhcmFtZXRlciR7bWVzc2FnZX0uYCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uLy4uL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IENTU0NsYXNzT3JVbmRlZmluZWQsIENTU0NsYXNzU2V0dGVyLCBIVE1MRWxlbWVudE9yTnVsbCB9IGZyb20gJy4uLy4uL3R5cGUnO1xyXG5pbXBvcnQgeyBjaGVja05vRW1wdHlPck51bGwsIGNoZWNrU3RyaW5nIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDU1NTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnRPck51bGwsIGNzc1N0eWxlczogQ1NTU3R5bGVEZWNsYXJhdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgZm9yIChjb25zdCBjc3NQcm9wIGluIGNzc1N0eWxlcykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVbY3NzUHJvcF0gPSBjc3NTdHlsZXNbY3NzUHJvcF0gPz8gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ1NTQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudE9yTnVsbCwgaGFuZGxlcjogQ1NTQ2xhc3NTZXR0ZXIsIC4uLmNzc0NsYXNzZXM6IEFycmF5PENTU0NsYXNzT3JVbmRlZmluZWQ+KTogSFRNTEVsZW1lbnRPck51bGwge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50Q1NTQ2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrL2cpO1xyXG4gICAgY3NzQ2xhc3Nlcy5mb3JFYWNoKChjc3NDbGFzcykgPT4ge1xyXG4gICAgICAgIGlmIChjc3NDbGFzcykge1xyXG4gICAgICAgICAgICBjb25zdCBjc3NDbGFzc05hbWUgPSBjc3NDbGFzcy5pbmRleE9mKFwiIVwiKSA9PT0gMCA/IGNzc0NsYXNzLnN1YnN0cigxKSA6IFwibGF5eC1cIiArIGNzc0NsYXNzO1xyXG4gICAgICAgICAgICBjb25zdCBjc3NDbGFzc0luZGV4ID0gZWxlbWVudENTU0NsYXNzZXMuaW5kZXhPZihjc3NDbGFzc05hbWUpO1xyXG4gICAgICAgICAgICBoYW5kbGVyKGVsZW1lbnRDU1NDbGFzc2VzLCBjc3NDbGFzc0luZGV4LCBjc3NDbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50Q1NTQ2xhc3Nlcy5qb2luKFwiIFwiKS50cmltKCk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnRPck51bGwsIC4uLmNzc0NsYXNzZXM6IEFycmF5PENTU0NsYXNzT3JVbmRlZmluZWQ+KTogSFRNTEVsZW1lbnRPck51bGwge1xyXG4gICAgcmV0dXJuIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudCwgKGVsZW1lbnRDU1NDbGFzc2VzLCBjc3NDbGFzc0luZGV4LCBjc3NDbGFzcykgPT4ge1xyXG4gICAgICAgIGlmICghfmNzc0NsYXNzSW5kZXgpIHtcclxuICAgICAgICAgICAgZWxlbWVudENTU0NsYXNzZXMucHVzaChjc3NDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgLi4uY3NzQ2xhc3Nlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDU1NDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50T3JOdWxsLCAuLi5jc3NDbGFzc2VzOiBzdHJpbmdbXSk6IEhUTUxFbGVtZW50T3JOdWxsIHtcclxuICAgIHJldHVybiB1cGRhdGVDU1NDbGFzc2VzKGVsZW1lbnQsIChlbGVtZW50Q1NTQ2xhc3NlcywgY3NzQ2xhc3NJbmRleCkgPT4ge1xyXG4gICAgICAgIGlmICh+Y3NzQ2xhc3NJbmRleCkge1xyXG4gICAgICAgICAgICBlbGVtZW50Q1NTQ2xhc3Nlcy5zcGxpY2UoY3NzQ2xhc3NJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgLi4uY3NzQ2xhc3Nlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNDU1NDbGFzcyhlbGVtZW50OiBIVE1MRWxlbWVudE9yTnVsbCwgY3NzQ2xhc3M6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudENTU0NsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy9nKTtcclxuICAgIGNvbnN0IGNzc0NsYXNzTmFtZSA9IGNzc0NsYXNzLmluZGV4T2YoXCIhXCIpID09PSAwID8gY3NzQ2xhc3Muc3Vic3RyKDEpIDogXCJsYXl4LVwiICsgY3NzQ2xhc3M7XHJcbiAgICBjb25zdCBpbmRleCA9IGVsZW1lbnRDU1NDbGFzc2VzLmluZGV4T2YoY3NzQ2xhc3NOYW1lKTtcclxuICAgIHJldHVybiAhIX5pbmRleDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpdkVsZW1lbnQoaWQ/OiBzdHJpbmcpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlmIChjaGVja1N0cmluZyhpZCkpIHtcclxuICAgICAgICBlbGVtZW50LmlkID0gaWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQobmFtZTogc3RyaW5nKTogU1ZHU1ZHRWxlbWVudCB7XHJcbiAgICBpZiAoY2hlY2tOb0VtcHR5T3JOdWxsKG5hbWUpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgY29uc3Qgc3ZnTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG4gICAgY29uc3QgbnNOYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcclxuXHJcbiAgICBjb25zdCBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgXCJzdmdcIik7XHJcbiAgICBjb25zdCB1c2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgXCJ1c2VcIik7XHJcbiAgICB1c2VFbGVtZW50LnNldEF0dHJpYnV0ZU5TKG5zTmFtZXNwYWNlLCBcInhsaW5rOmhyZWZcIiwgYCMke25hbWV9YCk7XHJcbiAgICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHVzZUVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIHN2Z0VsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIVE1MRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudE9yTnVsbCk6IHZvaWQge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XHJcbiAgICBpZiAoIWVsZW1lbnQucGFyZW50RWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxufSIsImltcG9ydCB7IHBhcmFtZXRlckludmFsaWQgfSBmcm9tICcuLi8uLi9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyByZW1vdmVJbGxlZ2FsQ2hhcmFjdGVyIH0gZnJvbSAnLi4vLi4vaGVscGVyL3N0cmluZyc7XHJcbmltcG9ydCB7IEpTT05PYmplY3QgfSBmcm9tICcuLi8uLi90eXBlJztcclxuaW1wb3J0IHsgY2hlY2tKU09OT2JqZWN0LCBjaGVja05vRW1wdHlPck51bGwsIGNoZWNrTm9OdWxsT3JVbmRlZmluZWQgfSBmcm9tICcuLi8uLi92YWxpZGF0b3InO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lSlNPTk9iamVjdDxUIGV4dGVuZHMgSlNPTk9iamVjdD4oc291cmNlOiBUKTogVCB7XHJcbiAgICBjb25zdCBuZXdKU09OT2JqZWN0ID0gPGFueT57fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHNvdXJjZVtrZXldO1xyXG4gICAgICAgIG5ld0pTT05PYmplY3Rba2V5XSA9IGNoZWNrSlNPTk9iamVjdChrZXlWYWx1ZSlcclxuICAgICAgICAgICAgPyBjbG9uZUpTT05PYmplY3Qoa2V5VmFsdWUpIDoga2V5VmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPFQ+bmV3SlNPTk9iamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSlNPTk9iamVjdDxUIGV4dGVuZHMgSlNPTk9iamVjdD4oc291cmNlOiBULCBkZXN0OiBUKTogVCB7XHJcbiAgICBjb25zdCBuZXdKU09OT2JqZWN0ID0gY2xvbmVKU09OT2JqZWN0PGFueT4oc291cmNlKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkZXN0KSB7XHJcbiAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBkZXN0W2tleV07XHJcbiAgICAgICAgbmV3SlNPTk9iamVjdFtrZXldID0gY2hlY2tKU09OT2JqZWN0KG5ld0pTT05PYmplY3Rba2V5XSkgJiYgY2hlY2tKU09OT2JqZWN0KGtleVZhbHVlKVxyXG4gICAgICAgICAgICA/IG1lcmdlSlNPTk9iamVjdChuZXdKU09OT2JqZWN0W2tleV0sIGtleVZhbHVlKSA6IGtleVZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxUPm5ld0pTT05PYmplY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkT2JqZWN0PFQ+KHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBULCBzdGFydE9iamVjdDogSlNPTk9iamVjdCk6IFQge1xyXG4gICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwocGF0aCkgfHwgIWNoZWNrSlNPTk9iamVjdChzdGFydE9iamVjdCkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICBwYXRoID0gcmVtb3ZlSWxsZWdhbENoYXJhY3RlcihwYXRoKTtcclxuICAgIGlmIChwYXRoLmluZGV4T2YoXCIvXCIpID09PSAtMSkgcmV0dXJuIHN0YXJ0T2JqZWN0W3BhdGhdID8/IGRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICBjb25zdCBrZXlzID0gcGF0aC5zcGxpdChcIi9cIik7XHJcbiAgICBsZXQga2V5VmFsdWUgPSByZWFkT2JqZWN0KGtleXNbMF0sIGRlZmF1bHRWYWx1ZSwgc3RhcnRPYmplY3QpO1xyXG4gICAgaWYgKCFjaGVja05vTnVsbE9yVW5kZWZpbmVkKGtleVZhbHVlKSkgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaSArIDEgPj0ga2V5cy5sZW5ndGgpIGJyZWFrO1xyXG4gICAgICAgIGtleVZhbHVlID0gcmVhZE9iamVjdChrZXlzW2kgKyAxXSwgZGVmYXVsdFZhbHVlLCBrZXlWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ga2V5VmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uLy4uL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IGNoZWNrTm9FbXB0eU9yTnVsbCB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSWxsZWdhbENoYXJhY3RlcihzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChzdHIpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFxyXFxuXFx0XFxzXS9nLCBcIlwiKTtcclxufVxyXG4iLCJpbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHtcclxuICAgIEJhc2VUeXBlLCBDaGVja1ZhbGlkYXRvciwgQ29sb3JTdHJpbmcsIEZ1bmN0aW9uVmFsaWRhdG9yLCBJbnRlZ2VyTnVtYmVyLCBKU09OT2JqZWN0LFxyXG4gICAgTm9FbXB0eU9yTnVsbFN0cmluZywgVmFsdWVUeXBlXHJcbn0gZnJvbSAnLi4vdHlwZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tCYXNlVHlwZShkYXRhOiBhbnksIC4uLnR5cGVOYW1lczogQmFzZVR5cGVbXSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVOYW1lcy5pbmRleE9mKHR5cGVvZiBkYXRhKSA+IC0xO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTdHJpbmcoZGF0YTogYW55KTogZGF0YSBpcyBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNoZWNrQmFzZVR5cGUoZGF0YSwgXCJzdHJpbmdcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Jvb2xlYW4oZGF0YTogYW55KTogZGF0YSBpcyBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwiYm9vbGVhblwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTnVtYmVyKGRhdGE6IGFueSk6IGRhdGEgaXMgbnVtYmVyIHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwibnVtYmVyXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGdW5jdGlvbjxUPihkYXRhOiBhbnkpOiBkYXRhIGlzIFQge1xyXG4gICAgcmV0dXJuIGNoZWNrQmFzZVR5cGUoZGF0YSwgXCJmdW5jdGlvblwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRnVuY3Rpb25WYWxpZGF0b3IoZGF0YTogYW55KTogZGF0YSBpcyBGdW5jdGlvblZhbGlkYXRvciB7XHJcbiAgICByZXR1cm4gY2hlY2tGdW5jdGlvbjxDaGVja1ZhbGlkYXRvcj4oZGF0YSkgfHxcclxuICAgICAgICBjaGVja0FycmF5KGRhdGEpICYmIGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGRhdGFbMF0pIHx8XHJcbiAgICAgICAgY2hlY2tBcnJheShkYXRhKSAmJiBjaGVja0FycmF5KGRhdGFbMF0pICYmIGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGRhdGFbMF1bMF0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tWYWxpZGF0b3IoZGF0YTogYW55LCBmdW5jdGlvblZhbGlkYXRvcjogRnVuY3Rpb25WYWxpZGF0b3IpOiBib29sZWFuIHtcclxuICAgIGxldCBpc1RydWUgPSB0cnVlO1xyXG4gICAgaWYgKGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGZ1bmN0aW9uVmFsaWRhdG9yKSkge1xyXG4gICAgICAgIGlmICghZnVuY3Rpb25WYWxpZGF0b3IoZGF0YSkpIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2hlY2tBcnJheShmdW5jdGlvblZhbGlkYXRvcikgJiYgY2hlY2tGdW5jdGlvbjxDaGVja1ZhbGlkYXRvcj4oZnVuY3Rpb25WYWxpZGF0b3JbMF0pKSB7XHJcbiAgICAgICAgY29uc3QgW3ZhbGlkYXRvciwgLi4uYXJnc10gPSBmdW5jdGlvblZhbGlkYXRvcjtcclxuICAgICAgICBpZiAoIXZhbGlkYXRvcihkYXRhLCAuLi5hcmdzKSkgaXNUcnVlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjaGVja0FycmF5KGZ1bmN0aW9uVmFsaWRhdG9yKSAmJiBjaGVja0FycmF5KGZ1bmN0aW9uVmFsaWRhdG9yWzBdKSAmJiBjaGVja0Z1bmN0aW9uPENoZWNrVmFsaWRhdG9yPihmdW5jdGlvblZhbGlkYXRvclswXVswXSkpIHtcclxuICAgICAgICBjb25zdCBbY2hpbGRWYWxpZGF0b3IsIC4uLnZhbHVlc10gPSBmdW5jdGlvblZhbGlkYXRvcjtcclxuICAgICAgICBpZiAoIWNoZWNrVmFsaWRhdG9yKGRhdGEsIGNoaWxkVmFsaWRhdG9yKSAmJiAhY2hlY2tJbihkYXRhLCAuLi52YWx1ZXMpKSBpc1RydWUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaXNUcnVlID0gZmFsc2U7XHJcbiAgICByZXR1cm4gaXNUcnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBcnJheShkYXRhOiBhbnkpOiBkYXRhIGlzIEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0FycmF5RWFjaDxUPihkYXRhOiBhbnksIGZ1bmN0aW9uVmFsaWRhdG9yOiBGdW5jdGlvblZhbGlkYXRvcik6IGRhdGEgaXMgQXJyYXk8VD4ge1xyXG4gICAgaWYgKCFjaGVja0FycmF5KGRhdGEpKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoIWNoZWNrRnVuY3Rpb25WYWxpZGF0b3IoZnVuY3Rpb25WYWxpZGF0b3IpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgbGV0IGlzQXJyYXlUeXBlID0gdHJ1ZTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XHJcbiAgICAgICAgaXNBcnJheVR5cGUgPSBjaGVja1ZhbGlkYXRvcihpdGVtLCBmdW5jdGlvblZhbGlkYXRvcik7XHJcbiAgICAgICAgaWYgKCFpc0FycmF5VHlwZSkgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNBcnJheVR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja05vTnVsbE9yVW5kZWZpbmVkKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGRhdGEgIT09IHVuZGVmaW5lZCAmJiBkYXRhICE9PSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPYmplY3QoZGF0YTogYW55KTogZGF0YSBpcyBvYmplY3Qge1xyXG4gICAgcmV0dXJuIGNoZWNrQmFzZVR5cGUoZGF0YSwgXCJvYmplY3RcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0pTT05PYmplY3QoZGF0YTogYW55KTogZGF0YSBpcyBKU09OT2JqZWN0IHtcclxuICAgIHJldHVybiBkYXRhICE9PSBudWxsICYmXHJcbiAgICAgICAgIWNoZWNrQXJyYXkoZGF0YSkgJiZcclxuICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSkudG9Mb3dlckNhc2UoKSA9PT0gXCJbb2JqZWN0IG9iamVjdF1cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTnVsbChkYXRhOiBhbnkpOiBkYXRhIGlzIG51bGwge1xyXG4gICAgcmV0dXJuIGRhdGEgPT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JlZ0V4cChkYXRhOiBhbnkpOiBkYXRhIGlzIFJlZ0V4cCB7XHJcbiAgICByZXR1cm4gZGF0YSBpbnN0YW5jZW9mIFJlZ0V4cDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29sb3IoZGF0YTogYW55KTogZGF0YSBpcyBDb2xvclN0cmluZyB7XHJcbiAgICBjb25zdCBiaW5hcnlSZWdFeHAgPSAvXiMoWzAtOWEtZl17Nn18WzAtOWEtZl17M30pJC9pO1xyXG4gICAgY29uc3QgcmdiUmVnRXhwID0gL15yZ2JcXCgoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCkkL2k7XHJcbiAgICBjb25zdCByZ2JhUmVnRXhwID0gL15yZ2JhXFwoKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKDF8MS4wfDAuWzAtOV0pXFwpJC9pO1xyXG5cclxuICAgIHJldHVybiBiaW5hcnlSZWdFeHAudGVzdChkYXRhKSB8fFxyXG4gICAgICAgIHJnYlJlZ0V4cC50ZXN0KGRhdGEpIHx8XHJcbiAgICAgICAgcmdiYVJlZ0V4cC50ZXN0KGRhdGEpIHx8XHJcbiAgICAgICAgZGF0YSA9PT0gXCJ0cmFuc3BhcmVudFwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOb0VtcHR5T3JOdWxsKGRhdGE6IGFueSk6IGRhdGEgaXMgTm9FbXB0eU9yTnVsbFN0cmluZyB7XHJcbiAgICByZXR1cm4gY2hlY2tTdHJpbmcoZGF0YSlcclxuICAgICAgICAmJiBkYXRhLmxlbmd0aCA+IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ludChkYXRhOiBhbnkpOiBkYXRhIGlzIEludGVnZXJOdW1iZXIge1xyXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKGRhdGEpICYmXHJcbiAgICAgICAgKC9eXFwtP1swLTldKyQvLnRlc3QoYCR7ZGF0YX1gKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1BzdEludChkYXRhOiBhbnkpOiBkYXRhIGlzIEludGVnZXJOdW1iZXIge1xyXG4gICAgcmV0dXJuIGNoZWNrSW50KGRhdGEpXHJcbiAgICAgICAgJiYgZGF0YSA+PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQc3ROdW1iZXIoZGF0YTogYW55KTogZGF0YSBpcyBudW1iZXIge1xyXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKGRhdGEpXHJcbiAgICAgICAgJiYgZGF0YSA+PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb250YWlucyhkYXRhOiBhbnksIGNoYXJhY3Rlcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChjaGFyYWN0ZXIpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuIGNoZWNrTm9FbXB0eU9yTnVsbChkYXRhKVxyXG4gICAgICAgICYmIGRhdGEuaW5kZXhPZihjaGFyYWN0ZXIpID4gLTE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0luKGRhdGE6IGFueSwgLi4udmFsdWVzOiBBcnJheTxWYWx1ZVR5cGU+KSB7XHJcbiAgICByZXR1cm4gY2hlY2tCYXNlVHlwZShkYXRhLCBcImJvb2xlYW5cIiwgXCJudW1iZXJcIiwgXCJzdHJpbmdcIiwgXCJ1bmRlZmluZWRcIiwgXCJvYmplY3RcIikgJiZcclxuICAgICAgICB2YWx1ZXMuaW5kZXhPZihkYXRhKSA+IC0xO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW5MZW5ndGgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrU3RyaW5nKGRhdGEpICYmXHJcbiAgICAgICAgZGF0YS5sZW5ndGggPj0gdGhyZXNob2xkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXhMZW5ndGgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrU3RyaW5nKGRhdGEpICYmXHJcbiAgICAgICAgZGF0YS5sZW5ndGggPD0gdGhyZXNob2xkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tMZW5ndGgoZGF0YTogYW55LCBtaW5UaHJlc2hvbGQ6IG51bWJlciwgbWF4VGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmIChtaW5UaHJlc2hvbGQgPj0gbWF4VGhyZXNob2xkKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuIGNoZWNrTWluTGVuZ3RoKGRhdGEsIG1pblRocmVzaG9sZCkgJiZcclxuICAgICAgICBjaGVja01pbkxlbmd0aChkYXRhLCBtYXhUaHJlc2hvbGQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW4oZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKGRhdGEpICYmXHJcbiAgICAgICAgZGF0YSA+PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01heChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tOdW1iZXIoZGF0YSkgJiZcclxuICAgICAgICBkYXRhIDw9IHRocmVzaG9sZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmFuZ2UoZGF0YTogYW55LCBtaW5UaHJlc2hvbGQ6IG51bWJlciwgbWF4VGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmIChtaW5UaHJlc2hvbGQgPj0gbWF4VGhyZXNob2xkKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuIGNoZWNrTWluKGRhdGEsIG1pblRocmVzaG9sZCkgJiZcclxuICAgICAgICBjaGVja01heChkYXRhLCBtYXhUaHJlc2hvbGQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXRjaChkYXRhOiBhbnksIHJlZ2V4OiBSZWdFeHApOiBib29sZWFuIHtcclxuICAgIHJldHVybiByZWdleC50ZXN0KGRhdGEpO1xyXG59IiwiaW1wb3J0ICcuLi9hc3NldCc7XHJcblxyXG5pbXBvcnQgeyBVSVdpbmRvdyB9IGZyb20gJy4uL2NvbXBvbmVudC91aS13aW5kb3cnO1xyXG5pbXBvcnQgeyBBbmltYXRpb25PcHRpb25hbCwgQm9yZGVyU3R5bGVPcHRpb25hbCwgV0lORE9XX0NSRUFURSB9IGZyb20gJy4uL2NvbnN0JztcclxuaW1wb3J0IHsgR2xvYmFsVUlXaW5kb3dPcHRpb25Db250cmFjdCB9IGZyb20gJy4uL2NvbnRyYWN0JztcclxuaW1wb3J0IHsgdmFsaWRhdG9yIH0gZnJvbSAnLi4vY29yZS9kZWNvcmF0b3IvcHJvcGVydHknO1xyXG5pbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL2NvcmUvZXZlbnQtYnVzJztcclxuaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uL2NvcmUvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgRXZlbnRTZXR0ZXIgfSBmcm9tICcuLi9jb3JlL3R5cGUnO1xyXG5pbXBvcnQge1xyXG4gICAgY2hlY2tGdW5jdGlvbiwgY2hlY2tKU09OT2JqZWN0LCBjaGVja01pbiwgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja1BzdEludFxyXG59IGZyb20gJy4uL2NvcmUvdmFsaWRhdG9yJztcclxuaW1wb3J0IHtcclxuICAgIEVudHJ5T3B0aW9uLCBFdmVudE1lc3NhZ2UsIEdsb2JhbFVJV2luZG93T3B0aW9uLCBVSVdpbmRvd09wdGlvbiwgV2luZG93RXZlbnRNZXNzYWdlXHJcbn0gZnJvbSAnLi4vdHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50cnkge1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihvcHRpb25zOiBFbnRyeU9wdGlvbikge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5tb25pdG9yRXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRW50cnk7XHJcblxyXG4gICAgcHJpdmF0ZSBldmVudEJ1czogRXZlbnRCdXMgPSBFdmVudEJ1cy5JbnN0YW5jZSgpO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSB2ZXJzaW9uOiBzdHJpbmcgPSBcIjMuMFwiO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3RJbnQsIFtjaGVja01pbiwgMTAwMF0pXHJcbiAgICBwdWJsaWMgc3RhcnRaSW5kZXg6IG51bWJlciA9IDEwMDAwMDAwO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoR2xvYmFsVUlXaW5kb3dPcHRpb25Db250cmFjdClcclxuICAgIHB1YmxpYyB3aW5kb3c6IEdsb2JhbFVJV2luZG93T3B0aW9uID0ge1xyXG4gICAgICAgIHdpZHRoOiA4MDAsXHJcbiAgICAgICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgbWluV2lkdGg6IDIwMCxcclxuICAgICAgICBtaW5IZWlnaHQ6IDIwMCxcclxuICAgICAgICBtYXhXaWR0aDogaW5uZXJXaWR0aCxcclxuICAgICAgICBtYXhIZWlnaHQ6IGlubmVySGVpZ2h0LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiB0cnVlLFxyXG4gICAgICAgIGFuaW1hdGU6IEFuaW1hdGlvbk9wdGlvbmFsLlpPT00sXHJcbiAgICAgICAgYm9yZGVyOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICBzdHlsZTogQm9yZGVyU3R5bGVPcHRpb25hbC5TT0xJRCxcclxuICAgICAgICAgICAgY29sb3I6IFwiIzNiYWNlZFwiLFxyXG4gICAgICAgICAgICByYWRpdXM6IDRcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgX3pJbmRleDogbnVtYmVyID0gdGhpcy5zdGFydFpJbmRleDtcclxuICAgIGdldCB6SW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3pJbmRleCA9IHRoaXMuX3pJbmRleCArIDI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfd2luZG93czogQXJyYXk8VUlXaW5kb3c+ID0gW107XHJcbiAgICBnZXQgd2luZG93cygpOiBBcnJheTxVSVdpbmRvdz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93aW5kb3dzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2Uob3B0aW9uczogRW50cnlPcHRpb24gPSB7fSk6IEVudHJ5IHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHRoaXMuaW5zdGFuY2UgPSBuZXcgRW50cnkob3B0aW9ucyk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmluc3RhbmNlLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlck9wdGlvbnMob3B0aW9uczogRW50cnlPcHRpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXJ0WkluZGV4ID0gb3B0aW9ucz8uc3RhcnRaSW5kZXggPz8gdGhpcy5zdGFydFpJbmRleDtcclxuICAgICAgICB0aGlzLndpbmRvdyA9IG9wdGlvbnM/LndpbmRvdyA/PyB0aGlzLndpbmRvdztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vbml0b3JFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV2ZW50QnVzLm9uKFdJTkRPV19DUkVBVEUsIChtZXNzYWdlOiBFdmVudE1lc3NhZ2U8V2luZG93RXZlbnRNZXNzYWdlPikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl93aW5kb3dzLnB1c2gobWVzc2FnZS5kYXRhc2V0LnRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uKGV2ZW50U2V0dGVyOiBFdmVudFNldHRlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2hlY2tKU09OT2JqZWN0KGV2ZW50U2V0dGVyKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBldmVudFNldHRlcikge1xyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gZXZlbnRTZXR0ZXJba2V5XTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrRnVuY3Rpb24oaGFuZGxlcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRCdXMub24oa2V5LCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlbihvcHRpb25zOiBVSVdpbmRvd09wdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKG9wdGlvbnM/LmlkKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmdldFdpbmRvdyhvcHRpb25zLmlkKSkgcGFyYW1ldGVySW52YWxpZChgOiBXaW5kb3cgSUQgJyR7b3B0aW9ucy5pZH0nIGFscmVhZHkgZXhpc3RzYCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHVpV2luZG93ID0gbmV3IFVJV2luZG93KG9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnN0IHVpV2luZG93RWxlbWVudCA9IHVpV2luZG93LmNyZWF0ZVZpZXcoKTtcclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh1aVdpbmRvd0VsZW1lbnQpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodWlXaW5kb3dFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0V2luZG93KGlkOiBzdHJpbmcpOiBVSVdpbmRvdyB8IG51bGwge1xyXG4gICAgICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKGlkKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWFyY2hzID0gdGhpcy5fd2luZG93cy5maWx0ZXIod2luID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbi5pZCA9PT0gaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHNlYXJjaHMubGVuZ3RoID4gMCA/IHNlYXJjaHNbMF0gOiBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50cnkgfSBmcm9tICcuL2VudHJ5JztcclxuaW1wb3J0IHsgRW50cnlPcHRpb24sIE92ZXJ0IH0gZnJvbSAnLi90eXBlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBvdmVydCgpOiBPdmVydCB7XHJcbiAgICBjb25zdCBlbnRyeSA9IEVudHJ5Lkluc3RhbmNlKCk7XHJcbiAgICBjb25zdCBvdmVydCA9IDxPdmVydD5mdW5jdGlvbiAob3B0aW9uczogRW50cnlPcHRpb24pIHtcclxuICAgICAgICBFbnRyeS5JbnN0YW5jZShvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBvdmVydC52ZXJzaW9uID0gZW50cnkudmVyc2lvbjtcclxuICAgIG92ZXJ0Lm9uID0gZW50cnkub24uYmluZChlbnRyeSk7XHJcbiAgICBvdmVydC5vcGVuID0gZW50cnkub3Blbi5iaW5kKGVudHJ5KTtcclxuICAgIHJldHVybiBvdmVydDtcclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==