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
var helper_1 = __webpack_require__(/*! ../../helper */ "./app/helper/index.ts");
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(options) {
        var _a;
        var _b, _c;
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
        });
        _this.width = Math.max(_this.minWidth, _this.width);
        _this.width = Math.min(_this.maxWidth, _this.width);
        _this.height = Math.max(_this.minHeight, _this.height);
        _this.height = Math.min(_this.maxHeight, _this.height);
        _a = helper_1.convertDirection(_this.width, _this.height, (_c = options) === null || _c === void 0 ? void 0 : _c.direction), _this.left = _a[0], _this.top = _a[1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9hc3NldC9zdHlsZS9hbmltYXRlLmNzcz9hMjlhIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvY29tbW9uLmNzcz80ZGUzIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvc3ZnLmNzcz9hZDhkIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvd2luZG93LmNzcz9iYjQzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29tcG9uZW50L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29tcG9uZW50L3VpLXdpbmRvdy9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvbnN0L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29udHJhY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvcmUvZXZlbnQtYnVzL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9leGNlcHRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2hlbHBlci9lbGVtZW50L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9oZWxwZXIvb2JqZWN0L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9oZWxwZXIvc3RyaW5nL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS92YWxpZGF0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9lbnRyeS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2hlbHBlci9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsOEVBQTRCO0FBQzVCLHdFQUF5QjtBQUN6Qiw4RUFBNEI7QUFDNUIsZ0ZBQTZCOzs7Ozs7Ozs7Ozs7QUNIN0IsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7Ozs7O0FDQUEsZ0dBQTZDO0FBQzdDLHFHQUFtRDtBQUVuRCwwRUFBaUM7QUFHakM7SUFLSSxtQkFBNkIsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUhuQyxVQUFLLEdB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UUFDckM7WUFDSSxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQztZQUNJLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxFQUFFLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVEO1lBQ0ksT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLEVBQUUsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3REO1lBQ0ksNEJBQWdCLEVBQUUsQ0FBQztLQUMxQjtBQUNMLENBQUM7QUFoQ0QsNENBZ0NDOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ0QseUVBQWdDO0FBR2hDLGtCQUFlLENBQUMsU0FBUyxLQUFLO0lBQzFCLElBQU0sS0FBSyxHQUFHLGFBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixJQUFNLEtBQUssR0FBVSxVQUFVLE9BQW9CO1FBQy9DLGFBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0lBQ0YsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzlCLEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImxheXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsYXl4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxheXhcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlL2NvbW1vbi5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUvc3ZnLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS93aW5kb3cuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlL2FuaW1hdGUuY3NzJztcclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSAnLi4vY29yZS9ldmVudC1idXMnO1xyXG5pbXBvcnQgeyByZWFkT2JqZWN0IH0gZnJvbSAnLi4vY29yZS9oZWxwZXIvb2JqZWN0JztcclxuaW1wb3J0IHsgSlNPTk9iamVjdCB9IGZyb20gJy4uL2NvcmUvdHlwZSc7XHJcbmltcG9ydCB7IEVudHJ5IH0gZnJvbSAnLi4vZW50cnknO1xyXG5pbXBvcnQgeyBFdmVudE1lc3NhZ2UgfSBmcm9tICcuLi90eXBlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VE9wdGlvbiBleHRlbmRzIEpTT05PYmplY3Q+IHtcclxuICAgIHByaXZhdGUgX19OQU1FX186IGFueTtcclxuICAgIHByb3RlY3RlZCBlbnRyeTogRW50cnkgPSBFbnRyeS5JbnN0YW5jZSgpO1xyXG4gICAgcHJvdGVjdGVkIGV2ZW50QnVzOiBFdmVudEJ1cyA9IEV2ZW50QnVzLkluc3RhbmNlKCk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcHRpb25zOiBUT3B0aW9uKSB7IH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVhZEdsb2JhbFZhbHVlKHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSBudWxsLCBzdGFydE9iamVjdCA9IHRoaXMuZW50cnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiByZWFkT2JqZWN0PGFueT4ocGF0aCwgZGVmYXVsdFZhbHVlLCBzdGFydE9iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlYWRPcHRpb25zKGtleVZhbHVlOiBKU09OT2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4ga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKFwiOlwiKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICg8YW55PnRoaXMpW2tleV0gPSByZWFkT2JqZWN0KGtleSwga2V5VmFsdWVba2V5XSwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGtleVBhdGggPSBrZXkuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgICAgICAoPGFueT50aGlzKVtrZXlQYXRoWzBdXSA9IHJlYWRPYmplY3Qoa2V5UGF0aFsxXSwga2V5VmFsdWVba2V5XSwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNlbmRFdmVudDxURXZlbnRNZXNzYWdlIGV4dGVuZHMgSlNPTk9iamVjdD4oa2V5OiBzdHJpbmcsIG1lc3NhZ2U6IFRFdmVudE1lc3NhZ2UgPSA8VEV2ZW50TWVzc2FnZT57fSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXZlbnRCdXMuZW1pdChrZXksIDxFdmVudE1lc3NhZ2U8VEV2ZW50TWVzc2FnZT4+e1xyXG4gICAgICAgICAgICBkYXRhc2V0OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBldmVudFRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnZhbHVlT2YoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi8nO1xyXG5pbXBvcnQgeyBBbmltYXRpb25PcHRpb25hbCwgV0lORE9XX0NSRUFURSB9IGZyb20gJy4uLy4uL2NvbnN0JztcclxuaW1wb3J0IHsgQm9yZGVyT3B0aW9uQ29udHJhY3QgfSBmcm9tICcuLi8uLi9jb250cmFjdCc7XHJcbmltcG9ydCB7IHZhbGlkYXRvciB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5JztcclxuaW1wb3J0IHsgYWRkQ1NTQ2xhc3NlcywgYWRkQ1NTU3R5bGVzLCBjcmVhdGVEaXZFbGVtZW50IH0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXIvZWxlbWVudCc7XHJcbmltcG9ydCB7XHJcbiAgICBjaGVja0Jvb2xlYW4sIGNoZWNrQ29sb3IsIGNoZWNrSW4sIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tQc3ROdW1iZXJcclxufSBmcm9tICcuLi8uLi9jb3JlL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IGNvbnZlcnREaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9oZWxwZXInO1xyXG5pbXBvcnQgeyBCb3JkZXJPcHRpb24sIENvbXBvbmVudEVsZW1lbnQsIFVJV2luZG93T3B0aW9uLCBXaW5kb3dFdmVudE1lc3NhZ2UgfSBmcm9tICcuLi8uLi90eXBlJztcclxuaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tICcuLi91aS1jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJV2luZG93IGV4dGVuZHMgQ29tcG9uZW50PFVJV2luZG93T3B0aW9uPiBpbXBsZW1lbnRzIFVJQ29tcG9uZW50PFVJV2luZG93T3B0aW9uPiB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogVUlXaW5kb3dPcHRpb24pIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnM/LmlkO1xyXG4gICAgICAgIHRoaXMucmVhZE9wdGlvbnMoe1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMubWF4V2lkdGgsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogdGhpcy5tYXhIZWlnaHQsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLm1pbldpZHRoLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IHRoaXMubWluSGVpZ2h0LFxyXG4gICAgICAgICAgICBib3JkZXI6IHRoaXMuYm9yZGVyLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IHRoaXMuYm94U2hhZG93LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBNYXRoLm1heCh0aGlzLm1pbldpZHRoLCB0aGlzLndpZHRoKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5taW4odGhpcy5tYXhXaWR0aCwgdGhpcy53aWR0aCk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLm1heCh0aGlzLm1pbkhlaWdodCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5tYXhIZWlnaHQsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICBbdGhpcy5sZWZ0LCB0aGlzLnRvcF0gPSBjb252ZXJ0RGlyZWN0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCBvcHRpb25zPy5kaXJlY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tOb0VtcHR5T3JOdWxsKVxyXG4gICAgcHVibGljIHJlYWRvbmx5IGlkOiBzdHJpbmc7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3cvd2lkdGhcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93L2hlaWdodFwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIG1pbldpZHRoOiBudW1iZXIgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvdy9taW5XaWR0aFwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIG1pbkhlaWdodDogbnVtYmVyID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3cvbWluSGVpZ2h0XCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgbWF4V2lkdGg6IG51bWJlciA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93L21heFdpZHRoXCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgbWF4SGVpZ2h0OiBudW1iZXIgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvdy9tYXhIZWlnaHRcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyBsZWZ0OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgdG9wOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoLi4uQm9yZGVyT3B0aW9uQ29udHJhY3QpXHJcbiAgICBwdWJsaWMgYm9yZGVyOiBmYWxzZSB8IEJvcmRlck9wdGlvbiA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93L2JvcmRlclwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrQm9vbGVhbilcclxuICAgIHB1YmxpYyBib3hTaGFkb3c6IGJvb2xlYW4gPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvdy9ib3hTaGFkb3dcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihbY2hlY2tJbiwgQW5pbWF0aW9uT3B0aW9uYWwuWk9PTV0sIGZhbHNlKVxyXG4gICAgcHVibGljIGFuaW1hdGU6IGZhbHNlIHwgQW5pbWF0aW9uT3B0aW9uYWwgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvdy9hbmltYXRlXCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tDb2xvcilcclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93L2JhY2tncm91bmRDb2xvclwiKTtcclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlVmlldygpOiBDb21wb25lbnRFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRGl2RWxlbWVudCh0aGlzLmlkKTtcclxuXHJcbiAgICAgICAgYWRkQ1NTQ2xhc3NlcyhlbGVtZW50LFxyXG4gICAgICAgICAgICBcIndpbmRvd1wiLFxyXG4gICAgICAgICAgICBcImZsZXgtYm94XCIsXHJcbiAgICAgICAgICAgIFwiY29sLWRpcmVjdGlvblwiLFxyXG4gICAgICAgICAgICB0aGlzLmJveFNoYWRvdyA/IFwiYm94LXNoYWRvd1wiIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgIT09IGZhbHNlID8gXCJhbmltYXRlXCIgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UgPyBgYW5pbWF0ZS0ke3RoaXMuYW5pbWF0ZX0tc2hvd2AgOiB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICBhZGRDU1NTdHlsZXMoZWxlbWVudCwgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoaXMuYmFja2dyb3VuZENvbG9yfWAsXHJcbiAgICAgICAgICAgIHpJbmRleDogYCR7dGhpcy5lbnRyeS56SW5kZXh9YCxcclxuICAgICAgICAgICAgd2lkdGg6IGAke3RoaXMud2lkdGh9cHhgLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3RoaXMuaGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMubWF4V2lkdGggIT09IGlubmVyV2lkdGggPyBgJHt0aGlzLm1heFdpZHRofXB4YCA6IG51bGwsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogdGhpcy5tYXhIZWlnaHQgIT09IGlubmVySGVpZ2h0ID8gYCR7dGhpcy5tYXhIZWlnaHR9cHhgIDogbnVsbCxcclxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3RoaXMubWluV2lkdGh9cHhgLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IGAke3RoaXMubWluSGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgbGVmdDogYCR7dGhpcy5sZWZ0fXB4YCxcclxuICAgICAgICAgICAgdG9wOiBgJHt0aGlzLnRvcH1weGAsXHJcbiAgICAgICAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXIgPT09IGZhbHNlID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci53aWR0aH1weCAke3RoaXMuYm9yZGVyLnN0eWxlfSAke3RoaXMuYm9yZGVyLmNvbG9yfWAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhpcy5ib3JkZXIgPT09IGZhbHNlID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci5yYWRpdXN9cHhgLFxyXG4gICAgICAgICAgICB3ZWJraXRCb3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5ib3JkZXIucmFkaXVzfXB4YCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZW5kRXZlbnQoV0lORE9XX0NSRUFURSwgPFdpbmRvd0V2ZW50TWVzc2FnZT57XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgZW51bSBCb3JkZXJTdHlsZU9wdGlvbmFsIHtcclxuICAgIERPVFRFRCA9IFwiZG90dGVkXCIsXHJcbiAgICBEQVNIRUQgPSBcImRhc2hlZFwiLFxyXG4gICAgU09MSUQgPSBcInNvbGlkXCIsXHJcbiAgICBET1VCTEUgPSBcImRvdWJsZVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEFuaW1hdGlvbk9wdGlvbmFsIHtcclxuICAgIFpPT00gPSBcInpvb21cIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBEaXJlY3Rpb25PcHRpb25hbCB7XHJcbiAgICBDRU5URVIgPSBcImNlbnRlclwiLFxyXG4gICAgVE9QX0NFTlRFUiA9IFwidG9wLWNlbnRlclwiLFxyXG4gICAgQk9UVE9NX0NFTlRFUiA9IFwiYm90dG9tLWNlbnRlclwiLFxyXG4gICAgTEVGVF9UT1AgPSBcImxlZnQtdG9wXCIsXHJcbiAgICBMRUZUX01JRERMRSA9IFwibGVmdC1taWRkbGVcIixcclxuICAgIExFRlRfQk9UVE9NID0gXCJsZWZ0LWJvdHRvbVwiLFxyXG4gICAgUklHSFRfVE9QID0gXCJyaWdodC10b3BcIixcclxuICAgIFJJR0hUX01JRERMRSA9IFwicmlnaHQtbWlkZGxlXCIsXHJcbiAgICBSSUdIVF9CT1RUT00gPSBcInJpZ2h0LWJvdHRvbVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfQ1JFQVRFOiBzdHJpbmcgPSBcIndpbmRvdzpjcmVhdGVcIjsiLCJpbXBvcnQgeyBBbmltYXRpb25PcHRpb25hbCwgQm9yZGVyU3R5bGVPcHRpb25hbCB9IGZyb20gJy4uL2NvbnN0JztcclxuaW1wb3J0IHsgY2hlY2tCb29sZWFuLCBjaGVja0NvbG9yLCBjaGVja0luLCBjaGVja1BzdEludCwgY2hlY2tQc3ROdW1iZXIgfSBmcm9tICcuLi9jb3JlL3ZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgY29uc3QgQm9yZGVyT3B0aW9uQ29udHJhY3QgPSBbe1xyXG4gICAgd2lkdGg6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgc3R5bGU6IFtjaGVja0luLCBCb3JkZXJTdHlsZU9wdGlvbmFsLkRBU0hFRCwgQm9yZGVyU3R5bGVPcHRpb25hbC5TT0xJRCwgQm9yZGVyU3R5bGVPcHRpb25hbC5ET1VCTEUsIEJvcmRlclN0eWxlT3B0aW9uYWwuRE9UVEVEXSxcclxuICAgIGNvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgcmFkaXVzOiBjaGVja1BzdEludFxyXG59LCBmYWxzZV07XHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsVUlXaW5kb3dPcHRpb25Db250cmFjdCA9IHtcclxuICAgIHdpZHRoOiBjaGVja1BzdE51bWJlcixcclxuICAgIGhlaWdodDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBtaW5XaWR0aDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBtaW5IZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgbWF4V2lkdGg6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgbWF4SGVpZ2h0OiBjaGVja1BzdE51bWJlcixcclxuICAgIGJhY2tncm91bmRDb2xvcjogY2hlY2tDb2xvcixcclxuICAgIGJveFNoYWRvdzogY2hlY2tCb29sZWFuLFxyXG4gICAgYW5pbWF0ZTogW1tjaGVja0luLCBBbmltYXRpb25PcHRpb25hbC5aT09NXSwgZmFsc2VdLFxyXG4gICAgYm9yZGVyOiBCb3JkZXJPcHRpb25Db250cmFjdFxyXG59OyIsImltcG9ydCB7IHBhcmFtZXRlckludmFsaWQgfSBmcm9tICcuLi8uLi9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBtZXJnZUpTT05PYmplY3QgfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0JztcclxuaW1wb3J0IHsgRnVuY3Rpb25WYWxpZGF0b3IsIEpTT05PYmplY3QsIFByb3BlcnR5U2V0dGVyLCBWYWx1ZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlJztcclxuaW1wb3J0IHtcclxuICAgIGNoZWNrQXJyYXksIGNoZWNrQmFzZVR5cGUsIGNoZWNrRnVuY3Rpb24sIGNoZWNrRnVuY3Rpb25WYWxpZGF0b3IsIGNoZWNrSW4sIGNoZWNrSlNPTk9iamVjdCxcclxuICAgIGNoZWNrVmFsaWRhdG9yXHJcbn0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJztcclxuXHJcbmZ1bmN0aW9uIGRlY29yYXRvcihwcm9wZXJ0eVNldHRlcjogUHJvcGVydHlTZXR0ZXIpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICBpZiAoIWNoZWNrRnVuY3Rpb248UHJvcGVydHlTZXR0ZXI+KHByb3BlcnR5U2V0dGVyKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIHJldHVybiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5KSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcclxuICAgICAgICB2YXIgcHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIHtcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBnZXQ6ICgpID0+IHZhbHVlLFxyXG4gICAgICAgICAgICBzZXQ6IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5RGVzY3JpcHRvciAmJiBwcm9wZXJ0eURlc2NyaXB0b3Iuc2V0KSBwcm9wZXJ0eURlc2NyaXB0b3Iuc2V0KG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gcHJvcGVydHlTZXR0ZXIobmV3VmFsdWUsIHByb3BlcnR5S2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5WYWxpZGF0b3IobmV3VmFsdWU6IGFueSwgb2xkVmFsdWU6IGFueSwgLi4udmFsdWVzOiBBcnJheTxhbnk+KTogYW55IHtcclxuICAgIGNvbnN0IHZhbHVlT3B0aW9uczogQXJyYXk8VmFsdWVUeXBlPiA9IFtdO1xyXG4gICAgY29uc3QgZnVuY3Rpb25WYWxpZGF0b3JzOiBBcnJheTxGdW5jdGlvblZhbGlkYXRvcj4gPSBbXTtcclxuICAgIGNvbnN0IG9iamVjdFZhbGlkYXRvcnM6IEFycmF5PEpTT05PYmplY3Q+ID0gW107XHJcblxyXG4gICAgdmFsdWVzLm1hcChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCB8fCBjaGVja0Jhc2VUeXBlKGl0ZW0sIFwic3RyaW5nXCIsIFwiYmlnaW50XCIsIFwiYm9vbGVhblwiLCBcInN5bWJvbFwiLCBcInVuZGVmaW5lZFwiKSkgdmFsdWVPcHRpb25zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgaWYgKGNoZWNrRnVuY3Rpb25WYWxpZGF0b3IoaXRlbSkpIGZ1bmN0aW9uVmFsaWRhdG9ycy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIGlmIChjaGVja0pTT05PYmplY3QoaXRlbSkpIG9iamVjdFZhbGlkYXRvcnMucHVzaChpdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChjaGVja0luKG5ld1ZhbHVlLCAuLi52YWx1ZU9wdGlvbnMpKSByZXR1cm4gbmV3VmFsdWU7XHJcblxyXG4gICAgaWYgKGZ1bmN0aW9uVmFsaWRhdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGlzUGFzc0FsbEZ1bmN0aW9uVmFsaWRhdG9yID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZ1bmN0aW9uVmFsaWRhdG9yIG9mIGZ1bmN0aW9uVmFsaWRhdG9ycykge1xyXG4gICAgICAgICAgICBpc1Bhc3NBbGxGdW5jdGlvblZhbGlkYXRvciA9IGNoZWNrVmFsaWRhdG9yKG5ld1ZhbHVlLCBmdW5jdGlvblZhbGlkYXRvcik7XHJcbiAgICAgICAgICAgIGlmICghaXNQYXNzQWxsRnVuY3Rpb25WYWxpZGF0b3IpIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNQYXNzQWxsRnVuY3Rpb25WYWxpZGF0b3IpIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hlY2tKU09OT2JqZWN0KG5ld1ZhbHVlKSAmJiBvYmplY3RWYWxpZGF0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBbZmlyc3RWYWxpZGF0b3IsXSA9IG9iamVjdFZhbGlkYXRvcnM7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGRWYWx1ZXMgPSBmaXJzdFZhbGlkYXRvcltrZXldO1xyXG4gICAgICAgICAgICBpblZhbGlkYXRvcihuZXdWYWx1ZVtrZXldLCBvbGRWYWx1ZSwgLi4uKGNoZWNrQXJyYXkoY2hpbGRWYWx1ZXMpID8gY2hpbGRWYWx1ZXMgOiBbY2hpbGRWYWx1ZXNdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZXJnZUpTT05PYmplY3Qob2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICAgIHBhcmFtZXRlckludmFsaWQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRvciguLi52YWx1ZXM6IEFycmF5PGFueT4pOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZGVjb3JhdG9yKChuZXdWYWx1ZSwgcHJvcGVydHlLZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGluVmFsaWRhdG9yKG5ld1ZhbHVlLCB2YWx1ZSwgLi4udmFsdWVzKTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciwgTWVzc2FnZVF1ZXVlcyB9IGZyb20gJy4uL3R5cGUnO1xyXG5pbXBvcnQge1xyXG4gICAgY2hlY2tBcnJheUVhY2gsIGNoZWNrRnVuY3Rpb24sIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tOb051bGxPclVuZGVmaW5lZFxyXG59IGZyb20gJy4uL3ZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRCdXMge1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFdmVudEJ1cztcclxuICAgIHByaXZhdGUgbWVzc2FnZVF1ZXVlczogTWVzc2FnZVF1ZXVlcyA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2UoKTogRXZlbnRCdXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlID0gdGhpcy5pbnN0YW5jZSA/PyBuZXcgRXZlbnRCdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb24oa2V5OiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50SGFuZGxlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKGtleSkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgICAgICBpZiAoIWNoZWNrRnVuY3Rpb248RXZlbnRIYW5kbGVyPihoYW5kbGVyKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5SGFuZGxlciA9IHRoaXMubWVzc2FnZVF1ZXVlc1trZXldO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tGdW5jdGlvbjxFdmVudEhhbmRsZXI+KGtleUhhbmRsZXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VRdWV1ZXNba2V5XSA9IFtrZXlIYW5kbGVyLCBoYW5kbGVyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGVja0FycmF5RWFjaDxFdmVudEhhbmRsZXI+KGtleUhhbmRsZXIsIGNoZWNrRnVuY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VRdWV1ZXNba2V5XSA9IFsuLi5rZXlIYW5kbGVyLCBoYW5kbGVyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMubWVzc2FnZVF1ZXVlc1trZXldID0gaGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25lKGtleTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChrZXkpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbiAgICAgICAgaWYgKCFjaGVja0Z1bmN0aW9uPEV2ZW50SGFuZGxlcj4oaGFuZGxlcikpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlUXVldWVzW2tleV0gPSBoYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbWl0KGtleTogc3RyaW5nLCBtZXNzYWdlOiBhbnksIHN5bmM6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKGtleSkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgICAgICBpZiAoIWNoZWNrTm9OdWxsT3JVbmRlZmluZWQobWVzc2FnZSkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZVF1ZXVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGtleUhhbmRsZXIgPSB0aGlzLm1lc3NhZ2VRdWV1ZXNba2V5XTtcclxuICAgICAgICBpZiAoY2hlY2tGdW5jdGlvbjxFdmVudEhhbmRsZXI+KGtleUhhbmRsZXIpKSB7XHJcbiAgICAgICAgICAgIHN5bmMgPyBrZXlIYW5kbGVyKG1lc3NhZ2UpIDpcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ga2V5SGFuZGxlcihtZXNzYWdlKSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNoZWNrQXJyYXlFYWNoPEV2ZW50SGFuZGxlcj4oa2V5SGFuZGxlciwgY2hlY2tGdW5jdGlvbikpIHtcclxuICAgICAgICAgICAga2V5SGFuZGxlci5tYXAoaGFuZGxlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBzeW5jID8gaGFuZGxlcihtZXNzYWdlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBoYW5kbGVyKG1lc3NhZ2UpLCAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9mZihrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKGtleSkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZVF1ZXVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSByZXR1cm47XHJcbiAgICAgICAgZGVsZXRlIHRoaXMubWVzc2FnZVF1ZXVlc1trZXldO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckludmFsaWQobWVzc2FnZTogc3RyaW5nID0gXCJcIik6IG5ldmVyIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwYXJhbWV0ZXIke21lc3NhZ2V9LmApO1xyXG59XHJcbiIsImltcG9ydCB7IHBhcmFtZXRlckludmFsaWQgfSBmcm9tICcuLi8uLi9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBDU1NDbGFzc09yVW5kZWZpbmVkLCBDU1NDbGFzc1NldHRlciwgSFRNTEVsZW1lbnRPck51bGwgfSBmcm9tICcuLi8uLi90eXBlJztcclxuaW1wb3J0IHsgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja1N0cmluZyB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ1NTU3R5bGVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50T3JOdWxsLCBjc3NTdHlsZXM6IENTU1N0eWxlRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIGZvciAoY29uc3QgY3NzUHJvcCBpbiBjc3NTdHlsZXMpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlW2Nzc1Byb3BdID0gY3NzU3R5bGVzW2Nzc1Byb3BdID8/IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnRPck51bGwsIGhhbmRsZXI6IENTU0NsYXNzU2V0dGVyLCAuLi5jc3NDbGFzc2VzOiBBcnJheTxDU1NDbGFzc09yVW5kZWZpbmVkPik6IEhUTUxFbGVtZW50T3JOdWxsIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudENTU0NsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy9nKTtcclxuICAgIGNzc0NsYXNzZXMuZm9yRWFjaCgoY3NzQ2xhc3MpID0+IHtcclxuICAgICAgICBpZiAoY3NzQ2xhc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgY3NzQ2xhc3NOYW1lID0gY3NzQ2xhc3MuaW5kZXhPZihcIiFcIikgPT09IDAgPyBjc3NDbGFzcy5zdWJzdHIoMSkgOiBcImxheXgtXCIgKyBjc3NDbGFzcztcclxuICAgICAgICAgICAgY29uc3QgY3NzQ2xhc3NJbmRleCA9IGVsZW1lbnRDU1NDbGFzc2VzLmluZGV4T2YoY3NzQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgaGFuZGxlcihlbGVtZW50Q1NTQ2xhc3NlcywgY3NzQ2xhc3NJbmRleCwgY3NzQ2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudENTU0NsYXNzZXMuam9pbihcIiBcIikudHJpbSgpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDU1NDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50T3JOdWxsLCAuLi5jc3NDbGFzc2VzOiBBcnJheTxDU1NDbGFzc09yVW5kZWZpbmVkPik6IEhUTUxFbGVtZW50T3JOdWxsIHtcclxuICAgIHJldHVybiB1cGRhdGVDU1NDbGFzc2VzKGVsZW1lbnQsIChlbGVtZW50Q1NTQ2xhc3NlcywgY3NzQ2xhc3NJbmRleCwgY3NzQ2xhc3MpID0+IHtcclxuICAgICAgICBpZiAoIX5jc3NDbGFzc0luZGV4KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRDU1NDbGFzc2VzLnB1c2goY3NzQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIC4uLmNzc0NsYXNzZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ1NTQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudE9yTnVsbCwgLi4uY3NzQ2xhc3Nlczogc3RyaW5nW10pOiBIVE1MRWxlbWVudE9yTnVsbCB7XHJcbiAgICByZXR1cm4gdXBkYXRlQ1NTQ2xhc3NlcyhlbGVtZW50LCAoZWxlbWVudENTU0NsYXNzZXMsIGNzc0NsYXNzSW5kZXgpID0+IHtcclxuICAgICAgICBpZiAofmNzc0NsYXNzSW5kZXgpIHtcclxuICAgICAgICAgICAgZWxlbWVudENTU0NsYXNzZXMuc3BsaWNlKGNzc0NsYXNzSW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIC4uLmNzc0NsYXNzZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzQ1NTQ2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnRPck51bGwsIGNzc0NsYXNzOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRDU1NDbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvZyk7XHJcbiAgICBjb25zdCBjc3NDbGFzc05hbWUgPSBjc3NDbGFzcy5pbmRleE9mKFwiIVwiKSA9PT0gMCA/IGNzc0NsYXNzLnN1YnN0cigxKSA6IFwibGF5eC1cIiArIGNzc0NsYXNzO1xyXG4gICAgY29uc3QgaW5kZXggPSBlbGVtZW50Q1NTQ2xhc3Nlcy5pbmRleE9mKGNzc0NsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gISF+aW5kZXg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXZFbGVtZW50KGlkPzogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpZiAoY2hlY2tTdHJpbmcoaWQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdmdFbGVtZW50KG5hbWU6IHN0cmluZyk6IFNWR1NWR0VsZW1lbnQge1xyXG4gICAgaWYgKGNoZWNrTm9FbXB0eU9yTnVsbChuYW1lKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIGNvbnN0IHN2Z05hbWVzcGFjZSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuICAgIGNvbnN0IG5zTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI7XHJcblxyXG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwic3ZnXCIpO1xyXG4gICAgY29uc3QgdXNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwidXNlXCIpO1xyXG4gICAgdXNlRWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhuc05hbWVzcGFjZSwgXCJ4bGluazpocmVmXCIsIGAjJHtuYW1lfWApO1xyXG4gICAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZCh1c2VFbGVtZW50KTtcclxuICAgIHJldHVybiBzdmdFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSFRNTEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnRPck51bGwpOiB2b2lkIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG4gICAgaWYgKCFlbGVtZW50LnBhcmVudEVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbn0iLCJpbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgcmVtb3ZlSWxsZWdhbENoYXJhY3RlciB9IGZyb20gJy4uLy4uL2hlbHBlci9zdHJpbmcnO1xyXG5pbXBvcnQgeyBKU09OT2JqZWN0IH0gZnJvbSAnLi4vLi4vdHlwZSc7XHJcbmltcG9ydCB7IGNoZWNrSlNPTk9iamVjdCwgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja05vTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUpTT05PYmplY3Q8VCBleHRlbmRzIEpTT05PYmplY3Q+KHNvdXJjZTogVCk6IFQge1xyXG4gICAgY29uc3QgbmV3SlNPTk9iamVjdCA9IDxhbnk+e307XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBzb3VyY2Vba2V5XTtcclxuICAgICAgICBuZXdKU09OT2JqZWN0W2tleV0gPSBjaGVja0pTT05PYmplY3Qoa2V5VmFsdWUpXHJcbiAgICAgICAgICAgID8gY2xvbmVKU09OT2JqZWN0KGtleVZhbHVlKSA6IGtleVZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxUPm5ld0pTT05PYmplY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUpTT05PYmplY3Q8VCBleHRlbmRzIEpTT05PYmplY3Q+KHNvdXJjZTogVCwgZGVzdDogVCk6IFQge1xyXG4gICAgY29uc3QgbmV3SlNPTk9iamVjdCA9IGNsb25lSlNPTk9iamVjdDxhbnk+KHNvdXJjZSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVzdCkge1xyXG4gICAgICAgIGNvbnN0IGtleVZhbHVlID0gZGVzdFtrZXldO1xyXG4gICAgICAgIG5ld0pTT05PYmplY3Rba2V5XSA9IGNoZWNrSlNPTk9iamVjdChuZXdKU09OT2JqZWN0W2tleV0pICYmIGNoZWNrSlNPTk9iamVjdChrZXlWYWx1ZSlcclxuICAgICAgICAgICAgPyBtZXJnZUpTT05PYmplY3QobmV3SlNPTk9iamVjdFtrZXldLCBrZXlWYWx1ZSkgOiBrZXlWYWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiA8VD5uZXdKU09OT2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZE9iamVjdDxUPihwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogVCwgc3RhcnRPYmplY3Q6IEpTT05PYmplY3QpOiBUIHtcclxuICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKHBhdGgpIHx8ICFjaGVja0pTT05PYmplY3Qoc3RhcnRPYmplY3QpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcGF0aCA9IHJlbW92ZUlsbGVnYWxDaGFyYWN0ZXIocGF0aCk7XHJcbiAgICBpZiAocGF0aC5pbmRleE9mKFwiL1wiKSA9PT0gLTEpIHJldHVybiBzdGFydE9iamVjdFtwYXRoXSA/PyBkZWZhdWx0VmFsdWU7XHJcblxyXG4gICAgY29uc3Qga2V5cyA9IHBhdGguc3BsaXQoXCIvXCIpO1xyXG4gICAgbGV0IGtleVZhbHVlID0gcmVhZE9iamVjdChrZXlzWzBdLCBkZWZhdWx0VmFsdWUsIHN0YXJ0T2JqZWN0KTtcclxuICAgIGlmICghY2hlY2tOb051bGxPclVuZGVmaW5lZChrZXlWYWx1ZSkpIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgKyAxID49IGtleXMubGVuZ3RoKSBicmVhaztcclxuICAgICAgICBrZXlWYWx1ZSA9IHJlYWRPYmplY3Qoa2V5c1tpICsgMV0sIGRlZmF1bHRWYWx1ZSwga2V5VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleVZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7IHBhcmFtZXRlckludmFsaWQgfSBmcm9tICcuLi8uLi9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBjaGVja05vRW1wdHlPck51bGwgfSBmcm9tICcuLi8uLi92YWxpZGF0b3InO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUlsbGVnYWxDaGFyYWN0ZXIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoc3RyKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW1xcclxcblxcdFxcc10vZywgXCJcIik7XHJcbn1cclxuIiwiaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7XHJcbiAgICBCYXNlVHlwZSwgQ2hlY2tWYWxpZGF0b3IsIENvbG9yU3RyaW5nLCBGdW5jdGlvblZhbGlkYXRvciwgSW50ZWdlck51bWJlciwgSlNPTk9iamVjdCxcclxuICAgIE5vRW1wdHlPck51bGxTdHJpbmcsIFZhbHVlVHlwZVxyXG59IGZyb20gJy4uL3R5cGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQmFzZVR5cGUoZGF0YTogYW55LCAuLi50eXBlTmFtZXM6IEJhc2VUeXBlW10pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlTmFtZXMuaW5kZXhPZih0eXBlb2YgZGF0YSkgPiAtMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU3RyaW5nKGRhdGE6IGFueSk6IGRhdGEgaXMgc3RyaW5nIHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwic3RyaW5nXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tCb29sZWFuKGRhdGE6IGFueSk6IGRhdGEgaXMgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tCYXNlVHlwZShkYXRhLCBcImJvb2xlYW5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja051bWJlcihkYXRhOiBhbnkpOiBkYXRhIGlzIG51bWJlciB7XHJcbiAgICByZXR1cm4gY2hlY2tCYXNlVHlwZShkYXRhLCBcIm51bWJlclwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRnVuY3Rpb248VD4oZGF0YTogYW55KTogZGF0YSBpcyBUIHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwiZnVuY3Rpb25cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Z1bmN0aW9uVmFsaWRhdG9yKGRhdGE6IGFueSk6IGRhdGEgaXMgRnVuY3Rpb25WYWxpZGF0b3Ige1xyXG4gICAgcmV0dXJuIGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGRhdGEpIHx8XHJcbiAgICAgICAgY2hlY2tBcnJheShkYXRhKSAmJiBjaGVja0Z1bmN0aW9uPENoZWNrVmFsaWRhdG9yPihkYXRhWzBdKSB8fFxyXG4gICAgICAgIGNoZWNrQXJyYXkoZGF0YSkgJiYgY2hlY2tBcnJheShkYXRhWzBdKSAmJiBjaGVja0Z1bmN0aW9uPENoZWNrVmFsaWRhdG9yPihkYXRhWzBdWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVmFsaWRhdG9yKGRhdGE6IGFueSwgZnVuY3Rpb25WYWxpZGF0b3I6IEZ1bmN0aW9uVmFsaWRhdG9yKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaXNUcnVlID0gdHJ1ZTtcclxuICAgIGlmIChjaGVja0Z1bmN0aW9uPENoZWNrVmFsaWRhdG9yPihmdW5jdGlvblZhbGlkYXRvcikpIHtcclxuICAgICAgICBpZiAoIWZ1bmN0aW9uVmFsaWRhdG9yKGRhdGEpKSBpc1RydWUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNoZWNrQXJyYXkoZnVuY3Rpb25WYWxpZGF0b3IpICYmIGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGZ1bmN0aW9uVmFsaWRhdG9yWzBdKSkge1xyXG4gICAgICAgIGNvbnN0IFt2YWxpZGF0b3IsIC4uLmFyZ3NdID0gZnVuY3Rpb25WYWxpZGF0b3I7XHJcbiAgICAgICAgaWYgKCF2YWxpZGF0b3IoZGF0YSwgLi4uYXJncykpIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2hlY2tBcnJheShmdW5jdGlvblZhbGlkYXRvcikgJiYgY2hlY2tBcnJheShmdW5jdGlvblZhbGlkYXRvclswXSkgJiYgY2hlY2tGdW5jdGlvbjxDaGVja1ZhbGlkYXRvcj4oZnVuY3Rpb25WYWxpZGF0b3JbMF1bMF0pKSB7XHJcbiAgICAgICAgY29uc3QgW2NoaWxkVmFsaWRhdG9yLCAuLi52YWx1ZXNdID0gZnVuY3Rpb25WYWxpZGF0b3I7XHJcbiAgICAgICAgaWYgKCFjaGVja1ZhbGlkYXRvcihkYXRhLCBjaGlsZFZhbGlkYXRvcikgJiYgIWNoZWNrSW4oZGF0YSwgLi4udmFsdWVzKSkgaXNUcnVlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIGlzVHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXJyYXkoZGF0YTogYW55KTogZGF0YSBpcyBBcnJheTxhbnk+IHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBcnJheUVhY2g8VD4oZGF0YTogYW55LCBmdW5jdGlvblZhbGlkYXRvcjogRnVuY3Rpb25WYWxpZGF0b3IpOiBkYXRhIGlzIEFycmF5PFQ+IHtcclxuICAgIGlmICghY2hlY2tBcnJheShkYXRhKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKCFjaGVja0Z1bmN0aW9uVmFsaWRhdG9yKGZ1bmN0aW9uVmFsaWRhdG9yKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGxldCBpc0FycmF5VHlwZSA9IHRydWU7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgIGlzQXJyYXlUeXBlID0gY2hlY2tWYWxpZGF0b3IoaXRlbSwgZnVuY3Rpb25WYWxpZGF0b3IpO1xyXG4gICAgICAgIGlmICghaXNBcnJheVR5cGUpIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzQXJyYXlUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOb051bGxPclVuZGVmaW5lZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YSAhPT0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT2JqZWN0KGRhdGE6IGFueSk6IGRhdGEgaXMgb2JqZWN0IHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwib2JqZWN0XCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tKU09OT2JqZWN0KGRhdGE6IGFueSk6IGRhdGEgaXMgSlNPTk9iamVjdCB7XHJcbiAgICByZXR1cm4gZGF0YSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICFjaGVja0FycmF5KGRhdGEpICYmXHJcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpLnRvTG93ZXJDYXNlKCkgPT09IFwiW29iamVjdCBvYmplY3RdXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja051bGwoZGF0YTogYW55KTogZGF0YSBpcyBudWxsIHtcclxuICAgIHJldHVybiBkYXRhID09PSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZWdFeHAoZGF0YTogYW55KTogZGF0YSBpcyBSZWdFeHAge1xyXG4gICAgcmV0dXJuIGRhdGEgaW5zdGFuY2VvZiBSZWdFeHA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbG9yKGRhdGE6IGFueSk6IGRhdGEgaXMgQ29sb3JTdHJpbmcge1xyXG4gICAgY29uc3QgYmluYXJ5UmVnRXhwID0gL14jKFswLTlhLWZdezZ9fFswLTlhLWZdezN9KSQvaTtcclxuICAgIGNvbnN0IHJnYlJlZ0V4cCA9IC9ecmdiXFwoKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwpJC9pO1xyXG4gICAgY29uc3QgcmdiYVJlZ0V4cCA9IC9ecmdiYVxcKChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLCgxfDEuMHwwLlswLTldKVxcKSQvaTtcclxuXHJcbiAgICByZXR1cm4gYmluYXJ5UmVnRXhwLnRlc3QoZGF0YSkgfHxcclxuICAgICAgICByZ2JSZWdFeHAudGVzdChkYXRhKSB8fFxyXG4gICAgICAgIHJnYmFSZWdFeHAudGVzdChkYXRhKSB8fFxyXG4gICAgICAgIGRhdGEgPT09IFwidHJhbnNwYXJlbnRcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTm9FbXB0eU9yTnVsbChkYXRhOiBhbnkpOiBkYXRhIGlzIE5vRW1wdHlPck51bGxTdHJpbmcge1xyXG4gICAgcmV0dXJuIGNoZWNrU3RyaW5nKGRhdGEpXHJcbiAgICAgICAgJiYgZGF0YS5sZW5ndGggPiAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbnQoZGF0YTogYW55KTogZGF0YSBpcyBJbnRlZ2VyTnVtYmVyIHtcclxuICAgIHJldHVybiBjaGVja051bWJlcihkYXRhKSAmJlxyXG4gICAgICAgICgvXlxcLT9bMC05XSskLy50ZXN0KGAke2RhdGF9YCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQc3RJbnQoZGF0YTogYW55KTogZGF0YSBpcyBJbnRlZ2VyTnVtYmVyIHtcclxuICAgIHJldHVybiBjaGVja0ludChkYXRhKVxyXG4gICAgICAgICYmIGRhdGEgPj0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUHN0TnVtYmVyKGRhdGE6IGFueSk6IGRhdGEgaXMgbnVtYmVyIHtcclxuICAgIHJldHVybiBjaGVja051bWJlcihkYXRhKVxyXG4gICAgICAgICYmIGRhdGEgPj0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29udGFpbnMoZGF0YTogYW55LCBjaGFyYWN0ZXI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoY2hhcmFjdGVyKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIHJldHVybiBjaGVja05vRW1wdHlPck51bGwoZGF0YSlcclxuICAgICAgICAmJiBkYXRhLmluZGV4T2YoY2hhcmFjdGVyKSA+IC0xO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbihkYXRhOiBhbnksIC4uLnZhbHVlczogQXJyYXk8VmFsdWVUeXBlPikge1xyXG4gICAgcmV0dXJuIGNoZWNrQmFzZVR5cGUoZGF0YSwgXCJib29sZWFuXCIsIFwibnVtYmVyXCIsIFwic3RyaW5nXCIsIFwidW5kZWZpbmVkXCIsIFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgdmFsdWVzLmluZGV4T2YoZGF0YSkgPiAtMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWluTGVuZ3RoKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja1N0cmluZyhkYXRhKSAmJlxyXG4gICAgICAgIGRhdGEubGVuZ3RoID49IHRocmVzaG9sZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWF4TGVuZ3RoKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja1N0cmluZyhkYXRhKSAmJlxyXG4gICAgICAgIGRhdGEubGVuZ3RoIDw9IHRocmVzaG9sZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTGVuZ3RoKGRhdGE6IGFueSwgbWluVGhyZXNob2xkOiBudW1iZXIsIG1heFRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAobWluVGhyZXNob2xkID49IG1heFRocmVzaG9sZCkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIHJldHVybiBjaGVja01pbkxlbmd0aChkYXRhLCBtaW5UaHJlc2hvbGQpICYmXHJcbiAgICAgICAgY2hlY2tNaW5MZW5ndGgoZGF0YSwgbWF4VGhyZXNob2xkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWluKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja051bWJlcihkYXRhKSAmJlxyXG4gICAgICAgIGRhdGEgPj0gdGhyZXNob2xkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKGRhdGEpICYmXHJcbiAgICAgICAgZGF0YSA8PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JhbmdlKGRhdGE6IGFueSwgbWluVGhyZXNob2xkOiBudW1iZXIsIG1heFRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAobWluVGhyZXNob2xkID49IG1heFRocmVzaG9sZCkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIHJldHVybiBjaGVja01pbihkYXRhLCBtaW5UaHJlc2hvbGQpICYmXHJcbiAgICAgICAgY2hlY2tNYXgoZGF0YSwgbWF4VGhyZXNob2xkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWF0Y2goZGF0YTogYW55LCByZWdleDogUmVnRXhwKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcmVnZXgudGVzdChkYXRhKTtcclxufSIsImltcG9ydCAnLi4vYXNzZXQnO1xyXG5cclxuaW1wb3J0IHsgVUlXaW5kb3cgfSBmcm9tICcuLi9jb21wb25lbnQvdWktd2luZG93JztcclxuaW1wb3J0IHsgQW5pbWF0aW9uT3B0aW9uYWwsIEJvcmRlclN0eWxlT3B0aW9uYWwsIFdJTkRPV19DUkVBVEUgfSBmcm9tICcuLi9jb25zdCc7XHJcbmltcG9ydCB7IEdsb2JhbFVJV2luZG93T3B0aW9uQ29udHJhY3QgfSBmcm9tICcuLi9jb250cmFjdCc7XHJcbmltcG9ydCB7IHZhbGlkYXRvciB9IGZyb20gJy4uL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5JztcclxuaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9jb3JlL2V2ZW50LWJ1cyc7XHJcbmltcG9ydCB7IHBhcmFtZXRlckludmFsaWQgfSBmcm9tICcuLi9jb3JlL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IEV2ZW50U2V0dGVyIH0gZnJvbSAnLi4vY29yZS90eXBlJztcclxuaW1wb3J0IHtcclxuICAgIGNoZWNrRnVuY3Rpb24sIGNoZWNrSlNPTk9iamVjdCwgY2hlY2tNaW4sIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tQc3RJbnRcclxufSBmcm9tICcuLi9jb3JlL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7XHJcbiAgICBFbnRyeU9wdGlvbiwgRXZlbnRNZXNzYWdlLCBHbG9iYWxVSVdpbmRvd09wdGlvbiwgVUlXaW5kb3dPcHRpb24sIFdpbmRvd0V2ZW50TWVzc2FnZVxyXG59IGZyb20gJy4uL3R5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudHJ5IHtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3Iob3B0aW9uczogRW50cnlPcHRpb24pIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMubW9uaXRvckV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEVudHJ5O1xyXG5cclxuICAgIHByaXZhdGUgZXZlbnRCdXM6IEV2ZW50QnVzID0gRXZlbnRCdXMuSW5zdGFuY2UoKTtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nID0gXCIzLjBcIjtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0SW50LCBbY2hlY2tNaW4sIDEwMDBdKVxyXG4gICAgcHVibGljIHN0YXJ0WkluZGV4OiBudW1iZXIgPSAxMDAwMDAwMDtcclxuXHJcbiAgICBAdmFsaWRhdG9yKEdsb2JhbFVJV2luZG93T3B0aW9uQ29udHJhY3QpXHJcbiAgICBwdWJsaWMgd2luZG93OiBHbG9iYWxVSVdpbmRvd09wdGlvbiA9IHtcclxuICAgICAgICB3aWR0aDogODAwLFxyXG4gICAgICAgIGhlaWdodDogNjAwLFxyXG4gICAgICAgIG1pbldpZHRoOiAyMDAsXHJcbiAgICAgICAgbWluSGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgbWF4V2lkdGg6IGlubmVyV2lkdGgsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiBpbm5lckhlaWdodCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIGJveFNoYWRvdzogdHJ1ZSxcclxuICAgICAgICBhbmltYXRlOiBBbmltYXRpb25PcHRpb25hbC5aT09NLFxyXG4gICAgICAgIGJvcmRlcjoge1xyXG4gICAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgICAgc3R5bGU6IEJvcmRlclN0eWxlT3B0aW9uYWwuU09MSUQsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiMzYmFjZWRcIixcclxuICAgICAgICAgICAgcmFkaXVzOiA0XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIF96SW5kZXg6IG51bWJlciA9IHRoaXMuc3RhcnRaSW5kZXg7XHJcbiAgICBnZXQgekluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl96SW5kZXggPSB0aGlzLl96SW5kZXggKyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3dpbmRvd3M6IEFycmF5PFVJV2luZG93PiA9IFtdO1xyXG4gICAgZ2V0IHdpbmRvd3MoKTogQXJyYXk8VUlXaW5kb3c+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2luZG93cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlKG9wdGlvbnM6IEVudHJ5T3B0aW9uID0ge30pOiBFbnRyeSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB0aGlzLmluc3RhbmNlID0gbmV3IEVudHJ5KG9wdGlvbnMpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5pbnN0YW5jZS5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZXJPcHRpb25zKG9wdGlvbnM6IEVudHJ5T3B0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGFydFpJbmRleCA9IG9wdGlvbnM/LnN0YXJ0WkluZGV4ID8/IHRoaXMuc3RhcnRaSW5kZXg7XHJcbiAgICAgICAgdGhpcy53aW5kb3cgPSBvcHRpb25zPy53aW5kb3cgPz8gdGhpcy53aW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb25pdG9yRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ldmVudEJ1cy5vbihXSU5ET1dfQ1JFQVRFLCAobWVzc2FnZTogRXZlbnRNZXNzYWdlPFdpbmRvd0V2ZW50TWVzc2FnZT4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fd2luZG93cy5wdXNoKG1lc3NhZ2UuZGF0YXNldC50YXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbihldmVudFNldHRlcjogRXZlbnRTZXR0ZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWNoZWNrSlNPTk9iamVjdChldmVudFNldHRlcikpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXZlbnRTZXR0ZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IGV2ZW50U2V0dGVyW2tleV07XHJcbiAgICAgICAgICAgIGlmIChjaGVja0Z1bmN0aW9uKGhhbmRsZXIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QnVzLm9uKGtleSwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW4ob3B0aW9uczogVUlXaW5kb3dPcHRpb24pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChvcHRpb25zPy5pZCkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgICAgICBpZiAodGhpcy5nZXRXaW5kb3cob3B0aW9ucy5pZCkpIHBhcmFtZXRlckludmFsaWQoYDogV2luZG93IElEICcke29wdGlvbnMuaWR9JyBhbHJlYWR5IGV4aXN0c2ApO1xyXG5cclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBjb25zdCB1aVdpbmRvdyA9IG5ldyBVSVdpbmRvdyhvcHRpb25zKTtcclxuICAgICAgICBjb25zdCB1aVdpbmRvd0VsZW1lbnQgPSB1aVdpbmRvdy5jcmVhdGVWaWV3KCk7XHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodWlXaW5kb3dFbGVtZW50KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHVpV2luZG93RWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFdpbmRvdyhpZDogc3RyaW5nKTogVUlXaW5kb3cgfCBudWxsIHtcclxuICAgICAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChpZCkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VhcmNocyA9IHRoaXMuX3dpbmRvd3MuZmlsdGVyKHdpbiA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW4uaWQgPT09IGlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzZWFyY2hzLmxlbmd0aCA+IDAgPyBzZWFyY2hzWzBdIDogbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGlvbk9wdGlvbmFsIH0gZnJvbSAnLi4vY29uc3QnO1xyXG5pbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vY29yZS9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBjaGVja0FycmF5RWFjaCwgY2hlY2tQc3ROdW1iZXIgfSBmcm9tICcuLi9jb3JlL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IERpcmVjdGlvbk9yQ29vcmQgfSBmcm9tICcuLi90eXBlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGlyZWN0aW9uKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBkaXJlY3Rpb25PckNvb3JkPzogRGlyZWN0aW9uT3JDb29yZCk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgaWYgKCFjaGVja1BzdE51bWJlcih3aWR0aCkgfHwgIWNoZWNrUHN0TnVtYmVyKGhlaWdodCkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICBpZiAoZGlyZWN0aW9uT3JDb29yZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gWyhpbm5lcldpZHRoIC0gd2lkdGgpIC8gMiwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG5cclxuICAgIGlmIChjaGVja0FycmF5RWFjaDxudW1iZXI+KGRpcmVjdGlvbk9yQ29vcmQsIGNoZWNrUHN0TnVtYmVyKSkge1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb25PckNvb3JkLmxlbmd0aCAhPT0gMikgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgICAgIHJldHVybiBbZGlyZWN0aW9uT3JDb29yZFswXSwgZGlyZWN0aW9uT3JDb29yZFsxXV07XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChkaXJlY3Rpb25PckNvb3JkKSB7XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb25PcHRpb25hbC5DRU5URVI6XHJcbiAgICAgICAgICAgIHJldHVybiBbKGlubmVyV2lkdGggLSB3aWR0aCkgLyAyLCAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMl07XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb25PcHRpb25hbC5UT1BfQ0VOVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4gWyhpbm5lcldpZHRoIC0gd2lkdGgpIC8gMiwgMF07XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb25PcHRpb25hbC5CT1RUT01fQ0VOVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4gWyhpbm5lcldpZHRoIC0gd2lkdGgpIC8gMiwgaW5uZXJIZWlnaHQgLSBoZWlnaHRdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuTEVGVF9UT1A6XHJcbiAgICAgICAgICAgIHJldHVybiBbMCwgMF07XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb25PcHRpb25hbC5MRUZUX01JRERMRTpcclxuICAgICAgICAgICAgcmV0dXJuIFswLCAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMl07XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb25PcHRpb25hbC5MRUZUX0JPVFRPTTpcclxuICAgICAgICAgICAgcmV0dXJuIFswLCBpbm5lckhlaWdodCAtIGhlaWdodF07XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb25PcHRpb25hbC5SSUdIVF9UT1A6XHJcbiAgICAgICAgICAgIHJldHVybiBbaW5uZXJXaWR0aCAtIHdpZHRoLCAwXTtcclxuICAgICAgICBjYXNlIERpcmVjdGlvbk9wdGlvbmFsLlJJR0hUX01JRERMRTpcclxuICAgICAgICAgICAgcmV0dXJuIFtpbm5lcldpZHRoIC0gd2lkdGgsIChpbm5lckhlaWdodCAtIGhlaWdodCkgLyAyXTtcclxuICAgICAgICBjYXNlIERpcmVjdGlvbk9wdGlvbmFsLlJJR0hUX0JPVFRPTTpcclxuICAgICAgICAgICAgcmV0dXJuIFtpbm5lcldpZHRoIC0gd2lkdGgsIGlubmVySGVpZ2h0IC0gaGVpZ2h0XTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRyeSB9IGZyb20gJy4vZW50cnknO1xyXG5pbXBvcnQgeyBFbnRyeU9wdGlvbiwgT3ZlcnQgfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIG92ZXJ0KCk6IE92ZXJ0IHtcclxuICAgIGNvbnN0IGVudHJ5ID0gRW50cnkuSW5zdGFuY2UoKTtcclxuICAgIGNvbnN0IG92ZXJ0ID0gPE92ZXJ0PmZ1bmN0aW9uIChvcHRpb25zOiBFbnRyeU9wdGlvbikge1xyXG4gICAgICAgIEVudHJ5Lkluc3RhbmNlKG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIG92ZXJ0LnZlcnNpb24gPSBlbnRyeS52ZXJzaW9uO1xyXG4gICAgb3ZlcnQub24gPSBlbnRyeS5vbi5iaW5kKGVudHJ5KTtcclxuICAgIG92ZXJ0Lm9wZW4gPSBlbnRyeS5vcGVuLmJpbmQoZW50cnkpO1xyXG4gICAgcmV0dXJuIG92ZXJ0O1xyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9