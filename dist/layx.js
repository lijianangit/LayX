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
    Component.prototype.sendEvents = function (keys, message) {
        if (message === void 0) { message = {}; }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            this.eventBus.emit(key, {
                dataset: message,
                eventTarget: {
                    name: key,
                    timestamp: new Date().valueOf()
                }
            });
        }
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
var string_1 = __webpack_require__(/*! ../../core/helper/string */ "./app/core/helper/string/index.ts");
var validator_1 = __webpack_require__(/*! ../../core/validator */ "./app/core/validator/index.ts");
var helper_1 = __webpack_require__(/*! ../../helper */ "./app/helper/index.ts");
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
        _this._element = null;
        _this.eventMessage = {
            id: _this.id,
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
        _a = helper_1.convertDirection(_this.width, _this.height, (_c = options) === null || _c === void 0 ? void 0 : _c.direction), _this.left = _a[0], _this.top = _a[1];
        return _this;
    }
    Object.defineProperty(UIWindow.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    UIWindow.prototype.createView = function () {
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
        this.monitorEvent();
        this.sendEvents([const_1.WINDOW_CREATE, const_1.WINDOW_FOCUS], this.eventMessage);
        return element;
    };
    UIWindow.prototype.monitorEvent = function () {
        var _this = this;
        if (!this.element)
            return;
        this.element.addEventListener("mousedown", function (ev) {
            _this.updateZIndex();
        }, true);
        if (this.animate !== false) {
            this.element.addEventListener("animationend", function (ev) {
                var animateShowName = string_1.stringFormat(const_1.ANIMATE_SHOW, _this.animate);
                if (element_1.hasCSSClass(_this.element, animateShowName)) {
                    element_1.removeCSSClasses(_this.element, animateShowName);
                    _this.sendEvents([const_1.WINDOW_SHOW], _this.eventMessage);
                }
                var animateDestroyName = string_1.stringFormat(const_1.ANIMATE_DESTROY, _this.animate);
                if (element_1.hasCSSClass(_this.element, animateDestroyName)) {
                    _this.remove();
                }
            });
        }
    };
    UIWindow.prototype.updateZIndex = function () {
        if (this.entry.window === this)
            return;
        if (!this.element)
            return;
        this.zIndex = this.entry.zIndex;
        element_1.addCSSStyles(this.element, {
            zIndex: "" + this.zIndex
        });
        this.sendEvents([const_1.WINDOW_FOCUS], this.eventMessage);
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
        this.sendEvents([const_1.WINDOW_DESTROY], this.eventMessage);
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
        property_1.validator.apply(void 0, contract_1.BoxShadowOptionContract)
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
exports.WINDOW_CREATE = "window:create";
exports.WINDOW_FOCUS = "window:focus";
exports.WINDOW_SHOW = "window:show";
exports.WINDOW_DESTROY = "window:destroy";
exports.ANIMATE_SHOW = "animate-{0}-show";
exports.ANIMATE_DESTROY = "animate-{0}-destroy";


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

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
var object_1 = __webpack_require__(/*! ../core/helper/object */ "./app/core/helper/object/index.ts");
var validator_1 = __webpack_require__(/*! ../core/validator */ "./app/core/validator/index.ts");
var Entry = (function () {
    function Entry(options) {
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
        this._windows = [];
        this._window = null;
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
    Object.defineProperty(Entry.prototype, "window", {
        get: function () {
            return this._window;
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
    Entry.prototype.monitorEvent = function () {
        var _this = this;
        this.eventBus.on(const_1.WINDOW_CREATE, function (message) {
            _this._windows.unshift(message.dataset.target);
        });
        this.eventBus.on(const_1.WINDOW_FOCUS, function (message) {
            var window = message.dataset.target;
            _this._window = window;
            object_1.arraySetToFirst(_this._windows, window);
        });
        this.eventBus.on(const_1.WINDOW_DESTROY, function (message) {
            var window = message.dataset.target;
            object_1.arrayRemove(_this._windows, window);
            _this._windows.length > 0 && _this._windows[0].updateZIndex();
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
exports.default = (function overt() {
    var entry = entry_1.Entry.Instance();
    var overt = function (options) {
        entry_1.Entry.Instance(options);
    };
    overt.version = entry.version;
    Object.defineProperties(overt, {
        window: { get: function () { return entry.window; } },
        windows: { get: function () { return entry.windows; } }
    });
    overt.on = entry.on.bind(entry);
    overt.open = entry.open.bind(entry);
    overt.getWindow = entry.getWindow.bind(entry);
    return overt;
})();


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9hc3NldC9zdHlsZS9hbmltYXRlLmNzcz9hMjlhIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvY29tbW9uLmNzcz80ZGUzIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvc3ZnLmNzcz9hZDhkIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvd2luZG93LmNzcz9iYjQzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29tcG9uZW50L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29tcG9uZW50L3VpLXdpbmRvdy9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvbnN0L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29udHJhY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvcmUvZXZlbnQtYnVzL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9leGNlcHRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2hlbHBlci9lbGVtZW50L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9oZWxwZXIvb2JqZWN0L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9oZWxwZXIvc3RyaW5nL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS92YWxpZGF0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9lbnRyeS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2hlbHBlci9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsOEVBQTRCO0FBQzVCLHdFQUF5QjtBQUN6Qiw4RUFBNEI7QUFDNUIsZ0ZBQTZCOzs7Ozs7Ozs7Ozs7QUNIN0IsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7Ozs7O0FDQUEsZ0dBQTZDO0FBQzdDLHFHQUFtRDtBQUVuRCwwRUFBaUM7QUFHakM7SUFLSSxtQkFBNkIsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUhuQyxVQUFLLEdB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LFlBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWSxFQUFFO1FBQ25DLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxjQUFNLFlBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxFQUFFO0tBQ3hDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTlDLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoibGF5eC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxheXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGF5eFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGUvY29tbW9uLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS9zdmcuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlL3dpbmRvdy5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUvYW5pbWF0ZS5jc3MnO1xyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9jb3JlL2V2ZW50LWJ1cyc7XHJcbmltcG9ydCB7IHJlYWRPYmplY3QgfSBmcm9tICcuLi9jb3JlL2hlbHBlci9vYmplY3QnO1xyXG5pbXBvcnQgeyBKU09OT2JqZWN0IH0gZnJvbSAnLi4vY29yZS90eXBlJztcclxuaW1wb3J0IHsgRW50cnkgfSBmcm9tICcuLi9lbnRyeSc7XHJcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3R5cGUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUT3B0aW9uIGV4dGVuZHMgSlNPTk9iamVjdD4ge1xyXG4gICAgcHJpdmF0ZSBfX05BTUVfXzogYW55O1xyXG4gICAgcHJvdGVjdGVkIGVudHJ5OiBFbnRyeSA9IEVudHJ5Lkluc3RhbmNlKCk7XHJcbiAgICBwcm90ZWN0ZWQgZXZlbnRCdXM6IEV2ZW50QnVzID0gRXZlbnRCdXMuSW5zdGFuY2UoKTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIG9wdGlvbnM6IFRPcHRpb24pIHsgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZWFkR2xvYmFsVmFsdWUocGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IG51bGwsIHN0YXJ0T2JqZWN0ID0gdGhpcy5lbnRyeSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHJlYWRPYmplY3Q8YW55PihwYXRoLCBkZWZhdWx0VmFsdWUsIHN0YXJ0T2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVhZE9wdGlvbnMoa2V5VmFsdWU6IEpTT05PYmplY3QpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoXCI6XCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcylba2V5XSA9IHJlYWRPYmplY3Qoa2V5LCBrZXlWYWx1ZVtrZXldLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qga2V5UGF0aCA9IGtleS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgICg8YW55PnRoaXMpW2tleVBhdGhbMF1dID0gcmVhZE9iamVjdChrZXlQYXRoWzFdLCBrZXlWYWx1ZVtrZXldLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2VuZEV2ZW50czxURXZlbnRNZXNzYWdlIGV4dGVuZHMgSlNPTk9iamVjdD4oa2V5czogQXJyYXk8c3RyaW5nPiwgbWVzc2FnZTogVEV2ZW50TWVzc2FnZSA9IDxURXZlbnRNZXNzYWdlPnt9KTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50QnVzLmVtaXQoa2V5LCA8RXZlbnRNZXNzYWdlPFRFdmVudE1lc3NhZ2U+PntcclxuICAgICAgICAgICAgICAgIGRhdGFzZXQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudmFsdWVPZigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLyc7XHJcbmltcG9ydCB7XHJcbiAgICBBTklNQVRFX0RFU1RST1ksIEFOSU1BVEVfU0hPVywgQW5pbWF0aW9uT3B0aW9uYWwsIFdJTkRPV19DUkVBVEUsIFdJTkRPV19ERVNUUk9ZLCBXSU5ET1dfRk9DVVMsXHJcbiAgICBXSU5ET1dfU0hPV1xyXG59IGZyb20gJy4uLy4uL2NvbnN0JztcclxuaW1wb3J0IHsgQm9yZGVyT3B0aW9uQ29udHJhY3QsIEJveFNoYWRvd09wdGlvbkNvbnRyYWN0IH0gZnJvbSAnLi4vLi4vY29udHJhY3QnO1xyXG5pbXBvcnQgeyB2YWxpZGF0b3IgfSBmcm9tICcuLi8uLi9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eSc7XHJcbmltcG9ydCB7XHJcbiAgICBhZGRDU1NDbGFzc2VzLCBhZGRDU1NTdHlsZXMsIGNyZWF0ZURpdkVsZW1lbnQsIGhhc0NTU0NsYXNzLCByZW1vdmVDU1NDbGFzc2VzLCByZW1vdmVIVE1MRWxlbWVudFxyXG59IGZyb20gJy4uLy4uL2NvcmUvaGVscGVyL2VsZW1lbnQnO1xyXG5pbXBvcnQgeyBzdHJpbmdGb3JtYXQgfSBmcm9tICcuLi8uLi9jb3JlL2hlbHBlci9zdHJpbmcnO1xyXG5pbXBvcnQge1xyXG4gICAgY2hlY2tDb2xvciwgY2hlY2tJbiwgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja1BzdEludCwgY2hlY2tQc3ROdW1iZXJcclxufSBmcm9tICcuLi8uLi9jb3JlL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IGNvbnZlcnREaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9oZWxwZXInO1xyXG5pbXBvcnQge1xyXG4gICAgQm9yZGVyT3B0aW9uLCBCb3hTaGFkb3dPcHRpb24sIENvbXBvbmVudEVsZW1lbnQsIFVJV2luZG93T3B0aW9uLCBXaW5kb3dFdmVudE1lc3NhZ2VcclxufSBmcm9tICcuLi8uLi90eXBlJztcclxuaW1wb3J0IHsgVUlDb21wb25lbnQgfSBmcm9tICcuLi91aS1jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJV2luZG93IGV4dGVuZHMgQ29tcG9uZW50PFVJV2luZG93T3B0aW9uPiBpbXBsZW1lbnRzIFVJQ29tcG9uZW50PFVJV2luZG93T3B0aW9uPiB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogVUlXaW5kb3dPcHRpb24pIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnM/LmlkO1xyXG4gICAgICAgIHRoaXMucmVhZE9wdGlvbnMoe1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMubWF4V2lkdGgsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogdGhpcy5tYXhIZWlnaHQsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLm1pbldpZHRoLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IHRoaXMubWluSGVpZ2h0LFxyXG4gICAgICAgICAgICBib3JkZXI6IHRoaXMuYm9yZGVyLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IHRoaXMuYm94U2hhZG93LFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBhbmltYXRlOiB0aGlzLmFuaW1hdGVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGgubWF4KHRoaXMubWluV2lkdGgsIHRoaXMud2lkdGgpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBNYXRoLm1pbih0aGlzLm1heFdpZHRoLCB0aGlzLndpZHRoKTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGgubWF4KHRoaXMubWluSGVpZ2h0LCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLm1pbih0aGlzLm1heEhlaWdodCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIFt0aGlzLmxlZnQsIHRoaXMudG9wXSA9IGNvbnZlcnREaXJlY3Rpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIG9wdGlvbnM/LmRpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja05vRW1wdHlPck51bGwpXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZztcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvd09wdGlvbi93aWR0aFwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vaGVpZ2h0XCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgbWluV2lkdGg6IG51bWJlciA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93T3B0aW9uL21pbldpZHRoXCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgbWluSGVpZ2h0OiBudW1iZXIgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvd09wdGlvbi9taW5IZWlnaHRcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyBtYXhXaWR0aDogbnVtYmVyID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vbWF4V2lkdGhcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyBtYXhIZWlnaHQ6IG51bWJlciA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93T3B0aW9uL21heEhlaWdodFwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIGxlZnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyB0b3A6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHZhbGlkYXRvciguLi5Cb3JkZXJPcHRpb25Db250cmFjdClcclxuICAgIHB1YmxpYyBib3JkZXI6IGZhbHNlIHwgQm9yZGVyT3B0aW9uID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vYm9yZGVyXCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoLi4uQm94U2hhZG93T3B0aW9uQ29udHJhY3QpXHJcbiAgICBwdWJsaWMgYm94U2hhZG93OiBmYWxzZSB8IEJveFNoYWRvd09wdGlvbiA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93T3B0aW9uL2JveFNoYWRvd1wiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKFtjaGVja0luLCBBbmltYXRpb25PcHRpb25hbC5aT09NXSwgZmFsc2UpXHJcbiAgICBwdWJsaWMgYW5pbWF0ZTogZmFsc2UgfCBBbmltYXRpb25PcHRpb25hbCA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93T3B0aW9uL2FuaW1hdGVcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja0NvbG9yKVxyXG4gICAgcHVibGljIGJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vYmFja2dyb3VuZENvbG9yXCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3RJbnQpXHJcbiAgICBwdWJsaWMgekluZGV4OiBudW1iZXIgPSB0aGlzLmVudHJ5LnpJbmRleDtcclxuXHJcbiAgICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHVibGljIGdldCBlbGVtZW50KCk6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudE1lc3NhZ2U6IFdpbmRvd0V2ZW50TWVzc2FnZSA9IHtcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICB0YXJnZXQ6IHRoaXNcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZVZpZXcoKTogQ29tcG9uZW50RWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQgPSBjcmVhdGVEaXZFbGVtZW50KHRoaXMuaWQpO1xyXG5cclxuICAgICAgICBhZGRDU1NDbGFzc2VzKGVsZW1lbnQsXHJcbiAgICAgICAgICAgIFwid2luZG93XCIsXHJcbiAgICAgICAgICAgIFwiZmxleC1ib3hcIixcclxuICAgICAgICAgICAgXCJjb2wtZGlyZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UgPyBcImFuaW1hdGVcIiA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlICE9PSBmYWxzZSA/IHN0cmluZ0Zvcm1hdChBTklNQVRFX1NIT1csIHRoaXMuYW5pbWF0ZSkgOiB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICBhZGRDU1NTdHlsZXMoZWxlbWVudCwgPENTU1N0eWxlRGVjbGFyYXRpb24+e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGAke3RoaXMuYmFja2dyb3VuZENvbG9yfWAsXHJcbiAgICAgICAgICAgIHpJbmRleDogYCR7dGhpcy56SW5kZXh9YCxcclxuICAgICAgICAgICAgd2lkdGg6IGAke3RoaXMud2lkdGh9cHhgLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGAke3RoaXMuaGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMubWF4V2lkdGggIT09IGlubmVyV2lkdGggPyBgJHt0aGlzLm1heFdpZHRofXB4YCA6IG51bGwsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogdGhpcy5tYXhIZWlnaHQgIT09IGlubmVySGVpZ2h0ID8gYCR7dGhpcy5tYXhIZWlnaHR9cHhgIDogbnVsbCxcclxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3RoaXMubWluV2lkdGh9cHhgLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IGAke3RoaXMubWluSGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgbGVmdDogYCR7dGhpcy5sZWZ0fXB4YCxcclxuICAgICAgICAgICAgdG9wOiBgJHt0aGlzLnRvcH1weGAsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogdGhpcy5ib3hTaGFkb3cgPT09IGZhbHNlID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICBgJHt0aGlzLmJveFNoYWRvdy5vZmZzZXRYfXB4ICR7dGhpcy5ib3hTaGFkb3cub2Zmc2V0WX1weCAke3RoaXMuYm94U2hhZG93LmJsdXJSYWRpdXN9cHggJHt0aGlzLmJveFNoYWRvdy5zcHJlYWRSYWRpdXN9cHggJHt0aGlzLmJveFNoYWRvdy5jb2xvcn1gLFxyXG4gICAgICAgICAgICBib3JkZXI6IHRoaXMuYm9yZGVyID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5ib3JkZXIud2lkdGh9cHggJHt0aGlzLmJvcmRlci5zdHlsZX0gJHt0aGlzLmJvcmRlci5jb2xvcn1gLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyID09PSBmYWxzZSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5ib3JkZXIucmFkaXVzfXB4YFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vbml0b3JFdmVudCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbmRFdmVudHMoW1dJTkRPV19DUkVBVEUsIFdJTkRPV19GT0NVU10sIHRoaXMuZXZlbnRNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb25pdG9yRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlWkluZGV4KCk7XHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0ZVNob3dOYW1lID0gc3RyaW5nRm9ybWF0KEFOSU1BVEVfU0hPVywgdGhpcy5hbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNDU1NDbGFzcyh0aGlzLmVsZW1lbnQsIGFuaW1hdGVTaG93TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDU1NDbGFzc2VzKHRoaXMuZWxlbWVudCwgYW5pbWF0ZVNob3dOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRFdmVudHMoW1dJTkRPV19TSE9XXSwgdGhpcy5ldmVudE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGVEZXN0cm95TmFtZSA9IHN0cmluZ0Zvcm1hdChBTklNQVRFX0RFU1RST1ksIHRoaXMuYW5pbWF0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzQ1NTQ2xhc3ModGhpcy5lbGVtZW50LCBhbmltYXRlRGVzdHJveU5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVaSW5kZXgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW50cnkud2luZG93ID09PSB0aGlzKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy56SW5kZXggPSB0aGlzLmVudHJ5LnpJbmRleDtcclxuICAgICAgICBhZGRDU1NTdHlsZXModGhpcy5lbGVtZW50LCA8Q1NTU3R5bGVEZWNsYXJhdGlvbj57XHJcbiAgICAgICAgICAgIHpJbmRleDogYCR7dGhpcy56SW5kZXh9YFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNlbmRFdmVudHMoW1dJTkRPV19GT0NVU10sIHRoaXMuZXZlbnRNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hbmltYXRlICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBhZGRDU1NDbGFzc2VzKHRoaXMuZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIHN0cmluZ0Zvcm1hdChBTklNQVRFX0RFU1RST1ksIHRoaXMuYW5pbWF0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgcmVtb3ZlSFRNTEVsZW1lbnQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICB0aGlzLnNlbmRFdmVudHMoW1dJTkRPV19ERVNUUk9ZXSwgdGhpcy5ldmVudE1lc3NhZ2UpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IGVudW0gQm9yZGVyU3R5bGVPcHRpb25hbCB7XHJcbiAgICBET1RURUQgPSBcImRvdHRlZFwiLFxyXG4gICAgREFTSEVEID0gXCJkYXNoZWRcIixcclxuICAgIFNPTElEID0gXCJzb2xpZFwiLFxyXG4gICAgRE9VQkxFID0gXCJkb3VibGVcIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBBbmltYXRpb25PcHRpb25hbCB7XHJcbiAgICBaT09NID0gXCJ6b29tXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gRGlyZWN0aW9uT3B0aW9uYWwge1xyXG4gICAgQ0VOVEVSID0gXCJjZW50ZXJcIixcclxuICAgIFRPUF9DRU5URVIgPSBcInRvcC1jZW50ZXJcIixcclxuICAgIEJPVFRPTV9DRU5URVIgPSBcImJvdHRvbS1jZW50ZXJcIixcclxuICAgIExFRlRfVE9QID0gXCJsZWZ0LXRvcFwiLFxyXG4gICAgTEVGVF9NSURETEUgPSBcImxlZnQtbWlkZGxlXCIsXHJcbiAgICBMRUZUX0JPVFRPTSA9IFwibGVmdC1ib3R0b21cIixcclxuICAgIFJJR0hUX1RPUCA9IFwicmlnaHQtdG9wXCIsXHJcbiAgICBSSUdIVF9NSURETEUgPSBcInJpZ2h0LW1pZGRsZVwiLFxyXG4gICAgUklHSFRfQk9UVE9NID0gXCJyaWdodC1ib3R0b21cIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV0lORE9XX0NSRUFURTogc3RyaW5nID0gXCJ3aW5kb3c6Y3JlYXRlXCI7XHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfRk9DVVM6IHN0cmluZyA9IFwid2luZG93OmZvY3VzXCI7XHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfU0hPVzogc3RyaW5nID0gXCJ3aW5kb3c6c2hvd1wiO1xyXG5leHBvcnQgY29uc3QgV0lORE9XX0RFU1RST1k6IHN0cmluZyA9IFwid2luZG93OmRlc3Ryb3lcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBTklNQVRFX1NIT1c6IHN0cmluZyA9IFwiYW5pbWF0ZS17MH0tc2hvd1wiO1xyXG5leHBvcnQgY29uc3QgQU5JTUFURV9ERVNUUk9ZOiBzdHJpbmcgPSBcImFuaW1hdGUtezB9LWRlc3Ryb3lcIjsiLCJpbXBvcnQgeyBBbmltYXRpb25PcHRpb25hbCwgQm9yZGVyU3R5bGVPcHRpb25hbCB9IGZyb20gJy4uL2NvbnN0JztcclxuaW1wb3J0IHsgY2hlY2tCb29sZWFuLCBjaGVja0NvbG9yLCBjaGVja0luLCBjaGVja1BzdEludCwgY2hlY2tQc3ROdW1iZXIgfSBmcm9tICcuLi9jb3JlL3ZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgY29uc3QgQm9yZGVyT3B0aW9uQ29udHJhY3QgPSBbe1xyXG4gICAgd2lkdGg6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgc3R5bGU6IFtjaGVja0luLCBCb3JkZXJTdHlsZU9wdGlvbmFsLkRBU0hFRCwgQm9yZGVyU3R5bGVPcHRpb25hbC5TT0xJRCwgQm9yZGVyU3R5bGVPcHRpb25hbC5ET1VCTEUsIEJvcmRlclN0eWxlT3B0aW9uYWwuRE9UVEVEXSxcclxuICAgIGNvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgcmFkaXVzOiBjaGVja1BzdEludFxyXG59LCBmYWxzZV07XHJcblxyXG5leHBvcnQgY29uc3QgQm94U2hhZG93T3B0aW9uQ29udHJhY3QgPSBbe1xyXG4gICAgb2Zmc2V0WDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBvZmZzZXRZOiBjaGVja1BzdE51bWJlcixcclxuICAgIGJsdXJSYWRpdXM6IGNoZWNrUHN0SW50LFxyXG4gICAgc3ByZWFkUmFkaXVzOiBjaGVja1BzdEludCxcclxuICAgIGNvbG9yOiBjaGVja0NvbG9yXHJcbn0sIGZhbHNlXTtcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxVSVdpbmRvd09wdGlvbkNvbnRyYWN0ID0ge1xyXG4gICAgd2lkdGg6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgaGVpZ2h0OiBjaGVja1BzdE51bWJlcixcclxuICAgIG1pbldpZHRoOiBjaGVja1BzdE51bWJlcixcclxuICAgIG1pbkhlaWdodDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBtYXhXaWR0aDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBtYXhIZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjaGVja0NvbG9yLFxyXG4gICAgYm94U2hhZG93OiBCb3hTaGFkb3dPcHRpb25Db250cmFjdCxcclxuICAgIGFuaW1hdGU6IFtbY2hlY2tJbiwgQW5pbWF0aW9uT3B0aW9uYWwuWk9PTV0sIGZhbHNlXSxcclxuICAgIGJvcmRlcjogQm9yZGVyT3B0aW9uQ29udHJhY3RcclxufTsiLCJpbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgbWVyZ2VKU09OT2JqZWN0IH0gZnJvbSAnLi4vLi4vaGVscGVyL29iamVjdCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uVmFsaWRhdG9yLCBKU09OT2JqZWN0LCBQcm9wZXJ0eVNldHRlciwgVmFsdWVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZSc7XHJcbmltcG9ydCB7XHJcbiAgICBjaGVja0FycmF5LCBjaGVja0Jhc2VUeXBlLCBjaGVja0Z1bmN0aW9uLCBjaGVja0Z1bmN0aW9uVmFsaWRhdG9yLCBjaGVja0luLCBjaGVja0pTT05PYmplY3QsXHJcbiAgICBjaGVja1ZhbGlkYXRvclxyXG59IGZyb20gJy4uLy4uL3ZhbGlkYXRvcic7XHJcblxyXG5mdW5jdGlvbiBkZWNvcmF0b3IocHJvcGVydHlTZXR0ZXI6IFByb3BlcnR5U2V0dGVyKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgaWYgKCFjaGVja0Z1bmN0aW9uPFByb3BlcnR5U2V0dGVyPihwcm9wZXJ0eVNldHRlcikpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleSkge1xyXG4gICAgICAgIGNvbnN0IHN0b3JlS2V5ID0gYF8ke3Byb3BlcnR5S2V5LnRvU3RyaW5nKCl9X2A7XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XHJcbiAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuIHRoaXNbc3RvcmVLZXldOyB9LFxyXG4gICAgICAgICAgICBzZXQobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbc3RvcmVLZXldID0gcHJvcGVydHlTZXR0ZXIobmV3VmFsdWUsIHByb3BlcnR5S2V5LCB0aGlzW3N0b3JlS2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5WYWxpZGF0b3IobmV3VmFsdWU6IGFueSwgb2xkVmFsdWU6IGFueSwgLi4udmFsdWVzOiBBcnJheTxhbnk+KTogYW55IHtcclxuICAgIGNvbnN0IHZhbHVlT3B0aW9uczogQXJyYXk8VmFsdWVUeXBlPiA9IFtdO1xyXG4gICAgY29uc3QgZnVuY3Rpb25WYWxpZGF0b3JzOiBBcnJheTxGdW5jdGlvblZhbGlkYXRvcj4gPSBbXTtcclxuICAgIGNvbnN0IG9iamVjdFZhbGlkYXRvcnM6IEFycmF5PEpTT05PYmplY3Q+ID0gW107XHJcblxyXG4gICAgdmFsdWVzLm1hcChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCB8fCBjaGVja0Jhc2VUeXBlKGl0ZW0sIFwic3RyaW5nXCIsIFwiYmlnaW50XCIsIFwiYm9vbGVhblwiLCBcInN5bWJvbFwiLCBcInVuZGVmaW5lZFwiKSkgdmFsdWVPcHRpb25zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgaWYgKGNoZWNrRnVuY3Rpb25WYWxpZGF0b3IoaXRlbSkpIGZ1bmN0aW9uVmFsaWRhdG9ycy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIGlmIChjaGVja0pTT05PYmplY3QoaXRlbSkpIG9iamVjdFZhbGlkYXRvcnMucHVzaChpdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChjaGVja0luKG5ld1ZhbHVlLCAuLi52YWx1ZU9wdGlvbnMpKSByZXR1cm4gbmV3VmFsdWU7XHJcblxyXG4gICAgaWYgKGZ1bmN0aW9uVmFsaWRhdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGlzUGFzc0FsbEZ1bmN0aW9uVmFsaWRhdG9yID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZ1bmN0aW9uVmFsaWRhdG9yIG9mIGZ1bmN0aW9uVmFsaWRhdG9ycykge1xyXG4gICAgICAgICAgICBpc1Bhc3NBbGxGdW5jdGlvblZhbGlkYXRvciA9IGNoZWNrVmFsaWRhdG9yKG5ld1ZhbHVlLCBmdW5jdGlvblZhbGlkYXRvcik7XHJcbiAgICAgICAgICAgIGlmICghaXNQYXNzQWxsRnVuY3Rpb25WYWxpZGF0b3IpIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNQYXNzQWxsRnVuY3Rpb25WYWxpZGF0b3IpIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hlY2tKU09OT2JqZWN0KG5ld1ZhbHVlKSAmJiBvYmplY3RWYWxpZGF0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBbZmlyc3RWYWxpZGF0b3IsXSA9IG9iamVjdFZhbGlkYXRvcnM7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGRWYWx1ZXMgPSBmaXJzdFZhbGlkYXRvcltrZXldO1xyXG4gICAgICAgICAgICBpblZhbGlkYXRvcihuZXdWYWx1ZVtrZXldLCBvbGRWYWx1ZSwgLi4uKGNoZWNrQXJyYXkoY2hpbGRWYWx1ZXMpID8gY2hpbGRWYWx1ZXMgOiBbY2hpbGRWYWx1ZXNdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZXJnZUpTT05PYmplY3Qob2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICAgIHBhcmFtZXRlckludmFsaWQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRvciguLi52YWx1ZXM6IEFycmF5PGFueT4pOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZGVjb3JhdG9yKChuZXdWYWx1ZSwgcHJvcGVydHlLZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGluVmFsaWRhdG9yKG5ld1ZhbHVlLCB2YWx1ZSwgLi4udmFsdWVzKTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciwgTWVzc2FnZVF1ZXVlcyB9IGZyb20gJy4uL3R5cGUnO1xyXG5pbXBvcnQge1xyXG4gICAgY2hlY2tBcnJheUVhY2gsIGNoZWNrRnVuY3Rpb24sIGNoZWNrSlNPTk9iamVjdCwgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja05vTnVsbE9yVW5kZWZpbmVkXHJcbn0gZnJvbSAnLi4vdmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudEJ1cyB7XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEV2ZW50QnVzO1xyXG4gICAgcHJpdmF0ZSBtZXNzYWdlUXVldWVzOiBNZXNzYWdlUXVldWVzID0ge307XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZSgpOiBFdmVudEJ1cyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlID8/IG5ldyBFdmVudEJ1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbihrZXk6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoa2V5KSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgICAgIGlmICghY2hlY2tGdW5jdGlvbjxFdmVudEhhbmRsZXI+KGhhbmRsZXIpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2VRdWV1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlIYW5kbGVyID0gdGhpcy5tZXNzYWdlUXVldWVzW2tleV07XHJcbiAgICAgICAgICAgIGlmIChjaGVja0Z1bmN0aW9uPEV2ZW50SGFuZGxlcj4oa2V5SGFuZGxlcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1trZXldID0gW2tleUhhbmRsZXIsIGhhbmRsZXJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoZWNrQXJyYXlFYWNoPEV2ZW50SGFuZGxlcj4oa2V5SGFuZGxlciwgY2hlY2tGdW5jdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1trZXldID0gWy4uLmtleUhhbmRsZXIsIGhhbmRsZXJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgdGhpcy5tZXNzYWdlUXVldWVzW2tleV0gPSBoYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbmUoa2V5OiBzdHJpbmcsIGhhbmRsZXI6IEV2ZW50SGFuZGxlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKGtleSkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgICAgICBpZiAoIWNoZWNrRnVuY3Rpb248RXZlbnRIYW5kbGVyPihoYW5kbGVyKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgICAgICB0aGlzLm1lc3NhZ2VRdWV1ZXNba2V5XSA9IGhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVtaXQoa2V5OiBzdHJpbmcsIG1lc3NhZ2U6IGFueSwgc3luYzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoa2V5KSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgICAgIGlmICghY2hlY2tOb051bGxPclVuZGVmaW5lZChtZXNzYWdlKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGtleSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qga2V5SGFuZGxlciA9IHRoaXMubWVzc2FnZVF1ZXVlc1trZXldO1xyXG4gICAgICAgIGlmIChjaGVja0Z1bmN0aW9uPEV2ZW50SGFuZGxlcj4oa2V5SGFuZGxlcikpIHtcclxuICAgICAgICAgICAgc3luYyA/IGtleUhhbmRsZXIobWVzc2FnZSkgOlxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBrZXlIYW5kbGVyKG1lc3NhZ2UpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2hlY2tBcnJheUVhY2g8RXZlbnRIYW5kbGVyPihrZXlIYW5kbGVyLCBjaGVja0Z1bmN0aW9uKSkge1xyXG4gICAgICAgICAgICBrZXlIYW5kbGVyLm1hcChoYW5kbGVyID0+IHtcclxuICAgICAgICAgICAgICAgIHN5bmMgPyBoYW5kbGVyKG1lc3NhZ2UpIDpcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGhhbmRsZXIobWVzc2FnZSksIDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9mZihrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKGtleSkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZVF1ZXVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSByZXR1cm47XHJcbiAgICAgICAgZGVsZXRlIHRoaXMubWVzc2FnZVF1ZXVlc1trZXldO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHBhcmFtZXRlckludmFsaWQobWVzc2FnZTogc3RyaW5nID0gXCJcIik6IG5ldmVyIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwYXJhbWV0ZXIke21lc3NhZ2V9LmApO1xyXG59XHJcbiIsImltcG9ydCB7IHBhcmFtZXRlckludmFsaWQgfSBmcm9tICcuLi8uLi9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBDU1NDbGFzc09yVW5kZWZpbmVkLCBDU1NDbGFzc1NldHRlciwgSFRNTEVsZW1lbnRPck51bGwgfSBmcm9tICcuLi8uLi90eXBlJztcclxuaW1wb3J0IHsgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja1N0cmluZyB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgY29uc3QgUFJFRklYOiBzdHJpbmcgPSBcImxheXgtXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ1NTU3R5bGVzKGVsZW1lbnQ6IEhUTUxFbGVtZW50T3JOdWxsLCBjc3NTdHlsZXM6IENTU1N0eWxlRGVjbGFyYXRpb24pOiB2b2lkIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIGZvciAoY29uc3QgY3NzUHJvcCBpbiBjc3NTdHlsZXMpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlW2Nzc1Byb3BdID0gY3NzU3R5bGVzW2Nzc1Byb3BdID8/IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnRPck51bGwsIGhhbmRsZXI6IENTU0NsYXNzU2V0dGVyLCAuLi5jc3NDbGFzc2VzOiBBcnJheTxDU1NDbGFzc09yVW5kZWZpbmVkPik6IEhUTUxFbGVtZW50T3JOdWxsIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudENTU0NsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy9nKTtcclxuICAgIGNzc0NsYXNzZXMuZm9yRWFjaCgoY3NzQ2xhc3MpID0+IHtcclxuICAgICAgICBpZiAoY3NzQ2xhc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgY3NzQ2xhc3NOYW1lID0gY3NzQ2xhc3MuaW5kZXhPZihcIiFcIikgPT09IDAgPyBjc3NDbGFzcy5zdWJzdHIoMSkgOiBQUkVGSVggKyBjc3NDbGFzcztcclxuICAgICAgICAgICAgY29uc3QgY3NzQ2xhc3NJbmRleCA9IGVsZW1lbnRDU1NDbGFzc2VzLmluZGV4T2YoY3NzQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgaGFuZGxlcihlbGVtZW50Q1NTQ2xhc3NlcywgY3NzQ2xhc3NJbmRleCwgY3NzQ2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudENTU0NsYXNzZXMuam9pbihcIiBcIikudHJpbSgpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDU1NDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50T3JOdWxsLCAuLi5jc3NDbGFzc2VzOiBBcnJheTxDU1NDbGFzc09yVW5kZWZpbmVkPik6IEhUTUxFbGVtZW50T3JOdWxsIHtcclxuICAgIHJldHVybiB1cGRhdGVDU1NDbGFzc2VzKGVsZW1lbnQsIChlbGVtZW50Q1NTQ2xhc3NlcywgY3NzQ2xhc3NJbmRleCwgY3NzQ2xhc3MpID0+IHtcclxuICAgICAgICBpZiAoIX5jc3NDbGFzc0luZGV4KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRDU1NDbGFzc2VzLnB1c2goY3NzQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIC4uLmNzc0NsYXNzZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ1NTQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudE9yTnVsbCwgLi4uY3NzQ2xhc3Nlczogc3RyaW5nW10pOiBIVE1MRWxlbWVudE9yTnVsbCB7XHJcbiAgICByZXR1cm4gdXBkYXRlQ1NTQ2xhc3NlcyhlbGVtZW50LCAoZWxlbWVudENTU0NsYXNzZXMsIGNzc0NsYXNzSW5kZXgpID0+IHtcclxuICAgICAgICBpZiAofmNzc0NsYXNzSW5kZXgpIHtcclxuICAgICAgICAgICAgZWxlbWVudENTU0NsYXNzZXMuc3BsaWNlKGNzc0NsYXNzSW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIC4uLmNzc0NsYXNzZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzQ1NTQ2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnRPck51bGwsIGNzc0NsYXNzOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRDU1NDbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvZyk7XHJcbiAgICBjb25zdCBjc3NDbGFzc05hbWUgPSBjc3NDbGFzcy5pbmRleE9mKFwiIVwiKSA9PT0gMCA/IGNzc0NsYXNzLnN1YnN0cigxKSA6IFBSRUZJWCArIGNzc0NsYXNzO1xyXG4gICAgY29uc3QgaW5kZXggPSBlbGVtZW50Q1NTQ2xhc3Nlcy5pbmRleE9mKGNzc0NsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gISF+aW5kZXg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXZFbGVtZW50KGlkPzogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpZiAoY2hlY2tTdHJpbmcoaWQpKSB7XHJcbiAgICAgICAgZWxlbWVudC5pZCA9IFBSRUZJWCArIGlkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdmdFbGVtZW50KG5hbWU6IHN0cmluZyk6IFNWR1NWR0VsZW1lbnQge1xyXG4gICAgaWYgKGNoZWNrTm9FbXB0eU9yTnVsbChuYW1lKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIGNvbnN0IHN2Z05hbWVzcGFjZSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuICAgIGNvbnN0IG5zTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI7XHJcblxyXG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwic3ZnXCIpO1xyXG4gICAgY29uc3QgdXNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwidXNlXCIpO1xyXG4gICAgdXNlRWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhuc05hbWVzcGFjZSwgXCJ4bGluazpocmVmXCIsIGAjJHtuYW1lfWApO1xyXG4gICAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZCh1c2VFbGVtZW50KTtcclxuICAgIHJldHVybiBzdmdFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSFRNTEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnRPck51bGwpOiB2b2lkIHtcclxuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xyXG4gICAgaWYgKCFlbGVtZW50LnBhcmVudEVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbn0iLCJpbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgcmVtb3ZlSWxsZWdhbENoYXJhY3RlciB9IGZyb20gJy4uLy4uL2hlbHBlci9zdHJpbmcnO1xyXG5pbXBvcnQgeyBKU09OT2JqZWN0IH0gZnJvbSAnLi4vLi4vdHlwZSc7XHJcbmltcG9ydCB7IGNoZWNrSlNPTk9iamVjdCwgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja05vTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUpTT05PYmplY3Q8VCBleHRlbmRzIEpTT05PYmplY3Q+KHNvdXJjZTogVCk6IFQge1xyXG4gICAgY29uc3QgbmV3SlNPTk9iamVjdCA9IDxhbnk+e307XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBzb3VyY2Vba2V5XTtcclxuICAgICAgICBuZXdKU09OT2JqZWN0W2tleV0gPSBjaGVja0pTT05PYmplY3Qoa2V5VmFsdWUpXHJcbiAgICAgICAgICAgID8gY2xvbmVKU09OT2JqZWN0KGtleVZhbHVlKSA6IGtleVZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxUPm5ld0pTT05PYmplY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUpTT05PYmplY3Q8VCBleHRlbmRzIEpTT05PYmplY3Q+KHNvdXJjZTogVCwgZGVzdDogVCk6IFQge1xyXG4gICAgY29uc3QgbmV3SlNPTk9iamVjdCA9IGNsb25lSlNPTk9iamVjdDxhbnk+KHNvdXJjZSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVzdCkge1xyXG4gICAgICAgIGNvbnN0IGtleVZhbHVlID0gZGVzdFtrZXldO1xyXG4gICAgICAgIG5ld0pTT05PYmplY3Rba2V5XSA9IGNoZWNrSlNPTk9iamVjdChuZXdKU09OT2JqZWN0W2tleV0pICYmIGNoZWNrSlNPTk9iamVjdChrZXlWYWx1ZSlcclxuICAgICAgICAgICAgPyBtZXJnZUpTT05PYmplY3QobmV3SlNPTk9iamVjdFtrZXldLCBrZXlWYWx1ZSkgOiBrZXlWYWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiA8VD5uZXdKU09OT2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZE9iamVjdDxUPihwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogVCwgc3RhcnRPYmplY3Q6IEpTT05PYmplY3QpOiBUIHtcclxuICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKHBhdGgpIHx8ICFjaGVja0pTT05PYmplY3Qoc3RhcnRPYmplY3QpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcGF0aCA9IHJlbW92ZUlsbGVnYWxDaGFyYWN0ZXIocGF0aCk7XHJcbiAgICBpZiAocGF0aC5pbmRleE9mKFwiL1wiKSA9PT0gLTEpIHJldHVybiBzdGFydE9iamVjdFtwYXRoXSA/PyBkZWZhdWx0VmFsdWU7XHJcblxyXG4gICAgY29uc3Qga2V5cyA9IHBhdGguc3BsaXQoXCIvXCIpO1xyXG4gICAgbGV0IGtleVZhbHVlID0gcmVhZE9iamVjdChrZXlzWzBdLCBkZWZhdWx0VmFsdWUsIHN0YXJ0T2JqZWN0KTtcclxuICAgIGlmICghY2hlY2tOb051bGxPclVuZGVmaW5lZChrZXlWYWx1ZSkpIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgKyAxID49IGtleXMubGVuZ3RoKSBicmVhaztcclxuICAgICAgICBrZXlWYWx1ZSA9IHJlYWRPYmplY3Qoa2V5c1tpICsgMV0sIGRlZmF1bHRWYWx1ZSwga2V5VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleVZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlTZXRUb0ZpcnN0KGFycjogQXJyYXk8YW55PiwgZWxlOiBhbnkpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFycltpXSA9PT0gZWxlKSB7XHJcbiAgICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFyci51bnNoaWZ0KGVsZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheVJlbW92ZShhcnI6IEFycmF5PGFueT4sIGVsZTogYW55KTogdm9pZCB7XHJcbiAgICBhcnIuc3BsaWNlKGFyci5pbmRleE9mKGVsZSksIDEpO1xyXG59IiwiaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uLy4uL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IGNoZWNrTm9FbXB0eU9yTnVsbCB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSWxsZWdhbENoYXJhY3RlcihzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChzdHIpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFxyXFxuXFx0XFxzXS9nLCBcIlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zvcm1hdChzdHI6IHN0cmluZywgLi4uYXJnczogQXJyYXk8YW55Pik6IHN0cmluZyB7XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHJldHVybiBzdHI7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXHske2l9XFxcXH1gLCAnZ20nKSwgYXJnc1tpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyO1xyXG59IiwiaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IHJlbW92ZUlsbGVnYWxDaGFyYWN0ZXIgfSBmcm9tICcuLi9oZWxwZXIvc3RyaW5nJztcclxuaW1wb3J0IHtcclxuICAgIEJhc2VUeXBlLCBDaGVja1ZhbGlkYXRvciwgQ29sb3JTdHJpbmcsIEZ1bmN0aW9uVmFsaWRhdG9yLCBJbnRlZ2VyTnVtYmVyLCBKU09OT2JqZWN0LFxyXG4gICAgTm9FbXB0eU9yTnVsbFN0cmluZywgVmFsdWVUeXBlXHJcbn0gZnJvbSAnLi4vdHlwZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tCYXNlVHlwZShkYXRhOiBhbnksIC4uLnR5cGVOYW1lczogQmFzZVR5cGVbXSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVOYW1lcy5pbmRleE9mKHR5cGVvZiBkYXRhKSA+IC0xO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTdHJpbmcoZGF0YTogYW55KTogZGF0YSBpcyBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNoZWNrQmFzZVR5cGUoZGF0YSwgXCJzdHJpbmdcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Jvb2xlYW4oZGF0YTogYW55KTogZGF0YSBpcyBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwiYm9vbGVhblwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTnVtYmVyKGRhdGE6IGFueSk6IGRhdGEgaXMgbnVtYmVyIHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwibnVtYmVyXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGdW5jdGlvbjxUPihkYXRhOiBhbnkpOiBkYXRhIGlzIFQge1xyXG4gICAgcmV0dXJuIGNoZWNrQmFzZVR5cGUoZGF0YSwgXCJmdW5jdGlvblwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRnVuY3Rpb25WYWxpZGF0b3IoZGF0YTogYW55KTogZGF0YSBpcyBGdW5jdGlvblZhbGlkYXRvciB7XHJcbiAgICByZXR1cm4gY2hlY2tGdW5jdGlvbjxDaGVja1ZhbGlkYXRvcj4oZGF0YSkgfHxcclxuICAgICAgICBjaGVja0FycmF5KGRhdGEpICYmIGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGRhdGFbMF0pIHx8XHJcbiAgICAgICAgY2hlY2tBcnJheShkYXRhKSAmJiBjaGVja0FycmF5KGRhdGFbMF0pICYmIGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGRhdGFbMF1bMF0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tWYWxpZGF0b3IoZGF0YTogYW55LCBmdW5jdGlvblZhbGlkYXRvcjogRnVuY3Rpb25WYWxpZGF0b3IpOiBib29sZWFuIHtcclxuICAgIGxldCBpc1RydWUgPSB0cnVlO1xyXG4gICAgaWYgKGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGZ1bmN0aW9uVmFsaWRhdG9yKSkge1xyXG4gICAgICAgIGlmICghZnVuY3Rpb25WYWxpZGF0b3IoZGF0YSkpIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2hlY2tBcnJheShmdW5jdGlvblZhbGlkYXRvcikgJiYgY2hlY2tGdW5jdGlvbjxDaGVja1ZhbGlkYXRvcj4oZnVuY3Rpb25WYWxpZGF0b3JbMF0pKSB7XHJcbiAgICAgICAgY29uc3QgW3ZhbGlkYXRvciwgLi4uYXJnc10gPSBmdW5jdGlvblZhbGlkYXRvcjtcclxuICAgICAgICBpZiAoIXZhbGlkYXRvcihkYXRhLCAuLi5hcmdzKSkgaXNUcnVlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjaGVja0FycmF5KGZ1bmN0aW9uVmFsaWRhdG9yKSAmJiBjaGVja0FycmF5KGZ1bmN0aW9uVmFsaWRhdG9yWzBdKSAmJiBjaGVja0Z1bmN0aW9uPENoZWNrVmFsaWRhdG9yPihmdW5jdGlvblZhbGlkYXRvclswXVswXSkpIHtcclxuICAgICAgICBjb25zdCBbY2hpbGRWYWxpZGF0b3IsIC4uLnZhbHVlc10gPSBmdW5jdGlvblZhbGlkYXRvcjtcclxuICAgICAgICBpZiAoIWNoZWNrVmFsaWRhdG9yKGRhdGEsIGNoaWxkVmFsaWRhdG9yKSAmJiAhY2hlY2tJbihkYXRhLCAuLi52YWx1ZXMpKSBpc1RydWUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaXNUcnVlID0gZmFsc2U7XHJcbiAgICByZXR1cm4gaXNUcnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBcnJheShkYXRhOiBhbnkpOiBkYXRhIGlzIEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0FycmF5RWFjaDxUPihkYXRhOiBhbnksIGZ1bmN0aW9uVmFsaWRhdG9yOiBGdW5jdGlvblZhbGlkYXRvcik6IGRhdGEgaXMgQXJyYXk8VD4ge1xyXG4gICAgaWYgKCFjaGVja0FycmF5KGRhdGEpKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoIWNoZWNrRnVuY3Rpb25WYWxpZGF0b3IoZnVuY3Rpb25WYWxpZGF0b3IpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgbGV0IGlzQXJyYXlUeXBlID0gdHJ1ZTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XHJcbiAgICAgICAgaXNBcnJheVR5cGUgPSBjaGVja1ZhbGlkYXRvcihpdGVtLCBmdW5jdGlvblZhbGlkYXRvcik7XHJcbiAgICAgICAgaWYgKCFpc0FycmF5VHlwZSkgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNBcnJheVR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja05vTnVsbE9yVW5kZWZpbmVkKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGRhdGEgIT09IHVuZGVmaW5lZCAmJiBkYXRhICE9PSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPYmplY3QoZGF0YTogYW55KTogZGF0YSBpcyBvYmplY3Qge1xyXG4gICAgcmV0dXJuIGNoZWNrQmFzZVR5cGUoZGF0YSwgXCJvYmplY3RcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0pTT05PYmplY3QoZGF0YTogYW55KTogZGF0YSBpcyBKU09OT2JqZWN0IHtcclxuICAgIHJldHVybiBkYXRhICE9PSBudWxsICYmXHJcbiAgICAgICAgIWNoZWNrQXJyYXkoZGF0YSkgJiZcclxuICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSkudG9Mb3dlckNhc2UoKSA9PT0gXCJbb2JqZWN0IG9iamVjdF1cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTnVsbChkYXRhOiBhbnkpOiBkYXRhIGlzIG51bGwge1xyXG4gICAgcmV0dXJuIGRhdGEgPT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JlZ0V4cChkYXRhOiBhbnkpOiBkYXRhIGlzIFJlZ0V4cCB7XHJcbiAgICByZXR1cm4gZGF0YSBpbnN0YW5jZW9mIFJlZ0V4cDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29sb3IoZGF0YTogYW55KTogZGF0YSBpcyBDb2xvclN0cmluZyB7XHJcbiAgICBkYXRhID0gcmVtb3ZlSWxsZWdhbENoYXJhY3RlcihkYXRhKTtcclxuICAgIGNvbnN0IGJpbmFyeVJlZ0V4cCA9IC9eIyhbMC05YS1mXXs2fXxbMC05YS1mXXszfSkkL2k7XHJcbiAgICBjb25zdCByZ2JSZWdFeHAgPSAvXnJnYlxcKChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcKSQvaTtcclxuICAgIGNvbnN0IHJnYmFSZWdFeHAgPSAvXnJnYmFcXCgoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoMXwxLjB8MC5bMC05XSlcXCkkL2k7XHJcblxyXG4gICAgcmV0dXJuIGJpbmFyeVJlZ0V4cC50ZXN0KGRhdGEpIHx8XHJcbiAgICAgICAgcmdiUmVnRXhwLnRlc3QoZGF0YSkgfHxcclxuICAgICAgICByZ2JhUmVnRXhwLnRlc3QoZGF0YSkgfHxcclxuICAgICAgICBkYXRhID09PSBcInRyYW5zcGFyZW50XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja05vRW1wdHlPck51bGwoZGF0YTogYW55KTogZGF0YSBpcyBOb0VtcHR5T3JOdWxsU3RyaW5nIHtcclxuICAgIHJldHVybiBjaGVja1N0cmluZyhkYXRhKVxyXG4gICAgICAgICYmIGRhdGEubGVuZ3RoID4gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSW50KGRhdGE6IGFueSk6IGRhdGEgaXMgSW50ZWdlck51bWJlciB7XHJcbiAgICByZXR1cm4gY2hlY2tOdW1iZXIoZGF0YSkgJiZcclxuICAgICAgICAoL15cXC0/WzAtOV0rJC8udGVzdChgJHtkYXRhfWApKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUHN0SW50KGRhdGE6IGFueSk6IGRhdGEgaXMgSW50ZWdlck51bWJlciB7XHJcbiAgICByZXR1cm4gY2hlY2tJbnQoZGF0YSlcclxuICAgICAgICAmJiBkYXRhID49IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1BzdE51bWJlcihkYXRhOiBhbnkpOiBkYXRhIGlzIG51bWJlciB7XHJcbiAgICByZXR1cm4gY2hlY2tOdW1iZXIoZGF0YSlcclxuICAgICAgICAmJiBkYXRhID49IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbnRhaW5zKGRhdGE6IGFueSwgY2hhcmFjdGVyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKGNoYXJhY3RlcikpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICByZXR1cm4gY2hlY2tOb0VtcHR5T3JOdWxsKGRhdGEpXHJcbiAgICAgICAgJiYgZGF0YS5pbmRleE9mKGNoYXJhY3RlcikgPiAtMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSW4oZGF0YTogYW55LCAuLi52YWx1ZXM6IEFycmF5PFZhbHVlVHlwZT4pIHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwiYm9vbGVhblwiLCBcIm51bWJlclwiLCBcInN0cmluZ1wiLCBcInVuZGVmaW5lZFwiLCBcIm9iamVjdFwiKSAmJlxyXG4gICAgICAgIHZhbHVlcy5pbmRleE9mKGRhdGEpID4gLTE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01pbkxlbmd0aChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tTdHJpbmcoZGF0YSkgJiZcclxuICAgICAgICBkYXRhLmxlbmd0aCA+PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01heExlbmd0aChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tTdHJpbmcoZGF0YSkgJiZcclxuICAgICAgICBkYXRhLmxlbmd0aCA8PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0xlbmd0aChkYXRhOiBhbnksIG1pblRocmVzaG9sZDogbnVtYmVyLCBtYXhUaHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKG1pblRocmVzaG9sZCA+PSBtYXhUaHJlc2hvbGQpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICByZXR1cm4gY2hlY2tNaW5MZW5ndGgoZGF0YSwgbWluVGhyZXNob2xkKSAmJlxyXG4gICAgICAgIGNoZWNrTWluTGVuZ3RoKGRhdGEsIG1heFRocmVzaG9sZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01pbihkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tOdW1iZXIoZGF0YSkgJiZcclxuICAgICAgICBkYXRhID49IHRocmVzaG9sZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWF4KGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja051bWJlcihkYXRhKSAmJlxyXG4gICAgICAgIGRhdGEgPD0gdGhyZXNob2xkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSYW5nZShkYXRhOiBhbnksIG1pblRocmVzaG9sZDogbnVtYmVyLCBtYXhUaHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKG1pblRocmVzaG9sZCA+PSBtYXhUaHJlc2hvbGQpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICByZXR1cm4gY2hlY2tNaW4oZGF0YSwgbWluVGhyZXNob2xkKSAmJlxyXG4gICAgICAgIGNoZWNrTWF4KGRhdGEsIG1heFRocmVzaG9sZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01hdGNoKGRhdGE6IGFueSwgcmVnZXg6IFJlZ0V4cCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZGF0YSk7XHJcbn0iLCJpbXBvcnQgJy4uL2Fzc2V0JztcclxuXHJcbmltcG9ydCB7IFVJV2luZG93IH0gZnJvbSAnLi4vY29tcG9uZW50L3VpLXdpbmRvdyc7XHJcbmltcG9ydCB7XHJcbiAgICBBbmltYXRpb25PcHRpb25hbCwgQm9yZGVyU3R5bGVPcHRpb25hbCwgV0lORE9XX0NSRUFURSwgV0lORE9XX0RFU1RST1ksIFdJTkRPV19GT0NVU1xyXG59IGZyb20gJy4uL2NvbnN0JztcclxuaW1wb3J0IHsgR2xvYmFsVUlXaW5kb3dPcHRpb25Db250cmFjdCB9IGZyb20gJy4uL2NvbnRyYWN0JztcclxuaW1wb3J0IHsgdmFsaWRhdG9yIH0gZnJvbSAnLi4vY29yZS9kZWNvcmF0b3IvcHJvcGVydHknO1xyXG5pbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJy4uL2NvcmUvZXZlbnQtYnVzJztcclxuaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uL2NvcmUvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgYXJyYXlSZW1vdmUsIGFycmF5U2V0VG9GaXJzdCB9IGZyb20gJy4uL2NvcmUvaGVscGVyL29iamVjdCc7XHJcbmltcG9ydCB7IEV2ZW50U2V0dGVyIH0gZnJvbSAnLi4vY29yZS90eXBlJztcclxuaW1wb3J0IHtcclxuICAgIGNoZWNrRnVuY3Rpb24sIGNoZWNrSlNPTk9iamVjdCwgY2hlY2tNaW4sIGNoZWNrTm9FbXB0eU9yTnVsbCwgY2hlY2tQc3RJbnRcclxufSBmcm9tICcuLi9jb3JlL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7XHJcbiAgICBFbnRyeU9wdGlvbiwgRXZlbnRNZXNzYWdlLCBHbG9iYWxVSVdpbmRvd09wdGlvbiwgVUlXaW5kb3dPcHRpb24sIFdpbmRvd0V2ZW50TWVzc2FnZVxyXG59IGZyb20gJy4uL3R5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudHJ5IHtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3Iob3B0aW9uczogRW50cnlPcHRpb24pIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMubW9uaXRvckV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEVudHJ5O1xyXG5cclxuICAgIHByaXZhdGUgZXZlbnRCdXM6IEV2ZW50QnVzID0gRXZlbnRCdXMuSW5zdGFuY2UoKTtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nID0gXCIzLjBcIjtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0SW50LCBbY2hlY2tNaW4sIDEwMDBdKVxyXG4gICAgcHVibGljIHN0YXJ0WkluZGV4OiBudW1iZXIgPSAxMDAwMDAwMDtcclxuXHJcbiAgICBAdmFsaWRhdG9yKEdsb2JhbFVJV2luZG93T3B0aW9uQ29udHJhY3QpXHJcbiAgICBwdWJsaWMgd2luZG93T3B0aW9uOiBHbG9iYWxVSVdpbmRvd09wdGlvbiA9IHtcclxuICAgICAgICB3aWR0aDogODAwLFxyXG4gICAgICAgIGhlaWdodDogNjAwLFxyXG4gICAgICAgIG1pbldpZHRoOiAyMDAsXHJcbiAgICAgICAgbWluSGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgbWF4V2lkdGg6IGlubmVyV2lkdGgsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiBpbm5lckhlaWdodCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIGJveFNoYWRvdzoge1xyXG4gICAgICAgICAgICBvZmZzZXRYOiAxLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAxLFxyXG4gICAgICAgICAgICBibHVyUmFkaXVzOiAxMixcclxuICAgICAgICAgICAgc3ByZWFkUmFkaXVzOiAxLFxyXG4gICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuMilcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5pbWF0ZTogQW5pbWF0aW9uT3B0aW9uYWwuWk9PTSxcclxuICAgICAgICBib3JkZXI6IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgIHN0eWxlOiBCb3JkZXJTdHlsZU9wdGlvbmFsLlNPTElELFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjZDVkNWQ1XCIsXHJcbiAgICAgICAgICAgIHJhZGl1czogNFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBfekluZGV4OiBudW1iZXIgPSB0aGlzLnN0YXJ0WkluZGV4O1xyXG4gICAgZ2V0IHpJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fekluZGV4ID0gdGhpcy5fekluZGV4ICsgMjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF93aW5kb3dzOiBBcnJheTxVSVdpbmRvdz4gPSBbXTtcclxuICAgIGdldCB3aW5kb3dzKCk6IEFycmF5PFVJV2luZG93PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpbmRvd3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfd2luZG93OiBVSVdpbmRvdyB8IG51bGwgPSBudWxsO1xyXG4gICAgZ2V0IHdpbmRvdygpOiBVSVdpbmRvdyB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93aW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZShvcHRpb25zOiBFbnRyeU9wdGlvbiA9IHt9KTogRW50cnkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkgdGhpcy5pbnN0YW5jZSA9IG5ldyBFbnRyeShvcHRpb25zKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlck9wdGlvbnMob3B0aW9uczogRW50cnlPcHRpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXJ0WkluZGV4ID0gb3B0aW9ucz8uc3RhcnRaSW5kZXggPz8gdGhpcy5zdGFydFpJbmRleDtcclxuICAgICAgICBpZiAob3B0aW9ucz8uc3RhcnRaSW5kZXgpIHRoaXMuX3pJbmRleCA9IHRoaXMuc3RhcnRaSW5kZXg7XHJcbiAgICAgICAgdGhpcy53aW5kb3dPcHRpb24gPSBvcHRpb25zPy53aW5kb3dPcHRpb24gPz8gdGhpcy53aW5kb3dPcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb25pdG9yRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ldmVudEJ1cy5vbihXSU5ET1dfQ1JFQVRFLCAobWVzc2FnZTogRXZlbnRNZXNzYWdlPFdpbmRvd0V2ZW50TWVzc2FnZT4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fd2luZG93cy51bnNoaWZ0KG1lc3NhZ2UuZGF0YXNldC50YXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50QnVzLm9uKFdJTkRPV19GT0NVUywgKG1lc3NhZ2U6IEV2ZW50TWVzc2FnZTxXaW5kb3dFdmVudE1lc3NhZ2U+KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IG1lc3NhZ2UuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvdyA9IHdpbmRvdztcclxuICAgICAgICAgICAgYXJyYXlTZXRUb0ZpcnN0KHRoaXMuX3dpbmRvd3MsIHdpbmRvdyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRCdXMub24oV0lORE9XX0RFU1RST1ksIChtZXNzYWdlOiBFdmVudE1lc3NhZ2U8V2luZG93RXZlbnRNZXNzYWdlPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBtZXNzYWdlLmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgICAgICBhcnJheVJlbW92ZSh0aGlzLl93aW5kb3dzLCB3aW5kb3cpO1xyXG4gICAgICAgICAgICB0aGlzLl93aW5kb3dzLmxlbmd0aCA+IDAgJiYgdGhpcy5fd2luZG93c1swXS51cGRhdGVaSW5kZXgoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb24oZXZlbnRTZXR0ZXI6IEV2ZW50U2V0dGVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjaGVja0pTT05PYmplY3QoZXZlbnRTZXR0ZXIpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGV2ZW50U2V0dGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBldmVudFNldHRlcltrZXldO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tGdW5jdGlvbihoYW5kbGVyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEJ1cy5vbihrZXksIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuKG9wdGlvbnM6IFVJV2luZG93T3B0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwob3B0aW9ucz8uaWQpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0V2luZG93KG9wdGlvbnMuaWQpKSBwYXJhbWV0ZXJJbnZhbGlkKGA6IFdpbmRvdyBJRCAnJHtvcHRpb25zLmlkfScgYWxyZWFkeSBleGlzdHNgKTtcclxuXHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgY29uc3QgdWlXaW5kb3cgPSBuZXcgVUlXaW5kb3cob3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgdWlXaW5kb3dFbGVtZW50ID0gdWlXaW5kb3cuY3JlYXRlVmlldygpO1xyXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHVpV2luZG93RWxlbWVudCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1aVdpbmRvd0VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRXaW5kb3coaWQ6IHN0cmluZyk6IFVJV2luZG93IHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoaWQpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaHMgPSB0aGlzLl93aW5kb3dzLmZpbHRlcih3aW4gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luLmlkID09PSBpZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc2VhcmNocy5sZW5ndGggPiAwID8gc2VhcmNoc1swXSA6IG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3Rpb25PcHRpb25hbCB9IGZyb20gJy4uL2NvbnN0JztcclxuaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uL2NvcmUvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgY2hlY2tBcnJheUVhY2gsIGNoZWNrUHN0TnVtYmVyIH0gZnJvbSAnLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb25PckNvb3JkIH0gZnJvbSAnLi4vdHlwZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERpcmVjdGlvbih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZGlyZWN0aW9uT3JDb29yZD86IERpcmVjdGlvbk9yQ29vcmQpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGlmICghY2hlY2tQc3ROdW1iZXIod2lkdGgpIHx8ICFjaGVja1BzdE51bWJlcihoZWlnaHQpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbk9yQ29vcmQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIChpbm5lckhlaWdodCAtIGhlaWdodCkgLyAyXTtcclxuXHJcbiAgICBpZiAoY2hlY2tBcnJheUVhY2g8bnVtYmVyPihkaXJlY3Rpb25PckNvb3JkLCBjaGVja1BzdE51bWJlcikpIHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uT3JDb29yZC5sZW5ndGggIT09IDIpIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgICAgICByZXR1cm4gW2RpcmVjdGlvbk9yQ29vcmRbMF0sIGRpcmVjdGlvbk9yQ29vcmRbMV1dO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uT3JDb29yZCkge1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuQ0VOVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4gWyhpbm5lcldpZHRoIC0gd2lkdGgpIC8gMiwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuVE9QX0NFTlRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIDBdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuQk9UVE9NX0NFTlRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIGlubmVySGVpZ2h0IC0gaGVpZ2h0XTtcclxuICAgICAgICBjYXNlIERpcmVjdGlvbk9wdGlvbmFsLkxFRlRfVE9QOlxyXG4gICAgICAgICAgICByZXR1cm4gWzAsIDBdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuTEVGVF9NSURETEU6XHJcbiAgICAgICAgICAgIHJldHVybiBbMCwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuTEVGVF9CT1RUT006XHJcbiAgICAgICAgICAgIHJldHVybiBbMCwgaW5uZXJIZWlnaHQgLSBoZWlnaHRdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuUklHSFRfVE9QOlxyXG4gICAgICAgICAgICByZXR1cm4gW2lubmVyV2lkdGggLSB3aWR0aCwgMF07XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb25PcHRpb25hbC5SSUdIVF9NSURETEU6XHJcbiAgICAgICAgICAgIHJldHVybiBbaW5uZXJXaWR0aCAtIHdpZHRoLCAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMl07XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb25PcHRpb25hbC5SSUdIVF9CT1RUT006XHJcbiAgICAgICAgICAgIHJldHVybiBbaW5uZXJXaWR0aCAtIHdpZHRoLCBpbm5lckhlaWdodCAtIGhlaWdodF07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50cnkgfSBmcm9tICcuL2VudHJ5JztcclxuaW1wb3J0IHsgRW50cnlPcHRpb24sIE92ZXJ0IH0gZnJvbSAnLi90eXBlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBvdmVydCgpOiBPdmVydCB7XHJcbiAgICBjb25zdCBlbnRyeSA9IEVudHJ5Lkluc3RhbmNlKCk7XHJcbiAgICBjb25zdCBvdmVydCA9IDxPdmVydD5mdW5jdGlvbiAob3B0aW9uczogRW50cnlPcHRpb24pIHtcclxuICAgICAgICBFbnRyeS5JbnN0YW5jZShvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBvdmVydC52ZXJzaW9uID0gZW50cnkudmVyc2lvbjtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG92ZXJ0LCB7XHJcbiAgICAgICAgd2luZG93OiB7IGdldDogKCkgPT4gZW50cnkud2luZG93IH0sXHJcbiAgICAgICAgd2luZG93czogeyBnZXQ6ICgpID0+IGVudHJ5LndpbmRvd3MgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcnQub24gPSBlbnRyeS5vbi5iaW5kKGVudHJ5KTtcclxuICAgIG92ZXJ0Lm9wZW4gPSBlbnRyeS5vcGVuLmJpbmQoZW50cnkpO1xyXG4gICAgb3ZlcnQuZ2V0V2luZG93ID0gZW50cnkuZ2V0V2luZG93LmJpbmQoZW50cnkpO1xyXG5cclxuICAgIHJldHVybiBvdmVydDtcclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==