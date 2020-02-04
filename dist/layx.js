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
        else
            this.instance.handlerOptions(options);
        return this.instance;
    };
    Entry.prototype.handlerOptions = function (options) {
        var _a, _b, _c, _d;
        this._zIndex = this.startZIndex = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.startZIndex, (_b !== null && _b !== void 0 ? _b : this.startZIndex));
        this.windowOption = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.windowOption, (_d !== null && _d !== void 0 ? _d : this.windowOption));
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
            _this._window = _this._windows.length > 0 ? _this._windows[0] : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9hc3NldC9zdHlsZS9hbmltYXRlLmNzcz9hMjlhIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvY29tbW9uLmNzcz80ZGUzIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvc3ZnLmNzcz9hZDhkIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvc3R5bGUvd2luZG93LmNzcz9iYjQzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29tcG9uZW50L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29tcG9uZW50L3VpLXdpbmRvdy9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvbnN0L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29udHJhY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvcmUvZXZlbnQtYnVzL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9leGNlcHRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2hlbHBlci9lbGVtZW50L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9oZWxwZXIvb2JqZWN0L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9oZWxwZXIvc3RyaW5nL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS92YWxpZGF0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9lbnRyeS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2hlbHBlci9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsOEVBQTRCO0FBQzVCLHdFQUF5QjtBQUN6Qiw4RUFBNEI7QUFDNUIsZ0ZBQTZCOzs7Ozs7Ozs7Ozs7QUNIN0IsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7Ozs7O0FDQUEsZ0dBQTZDO0FBQzdDLHFHQUFtRDtBQUVuRCwwRUFBaUM7QUFHakM7SUFLSSxtQkFBNkIsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUhuQyxVQUFLLEdBQVUsYUFBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLGFBQVEsR0FBYSxvQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRUYsQ0FBQztJQUV4QyxtQ0FBZSxHQUF6QixVQUEwQixJQUFZLEVBQUUsWUFBd0IsRUFBRSxXQUF3QjtRQUFsRCxrREFBd0I7UUFBRSw0Q0FBYyxJQUFJLENBQUMsS0FBSztRQUN0RixPQUFPLG1CQUFVLENBQU0sSUFBSSxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRVMsK0JBQVcsR0FBckIsVUFBc0IsUUFBb0I7UUFDdEMsS0FBSyxJQUFNLEdBQUcsSUFBSSxRQUFRLEVBQUU7WUFDeEIsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNuQixJQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsbUJBQVUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEUsU0FBUzthQUNaO1lBQ0QsSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixJQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqRjtJQUNMLENBQUM7SUFFUyw4QkFBVSxHQUFwQixVQUF1RCxJQUFtQixFQUFFLE9BQTBDO1FBQTFDLG9DQUF3QyxFQUFFO1FBQ2xILEtBQWtCLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJLEVBQUU7WUFBbkIsSUFBTSxHQUFHO1lBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUErQjtnQkFDakQsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFdBQVcsRUFBRTtvQkFDVCxJQUFJLEVBQUUsR0FBRztvQkFDVCxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7aUJBQ2xDO2FBQ0osQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDO0FBakNxQiw4QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04vQixxRUFBZ0M7QUFDaEMsNkVBRXFCO0FBQ3JCLHNGQUErRTtBQUMvRSxvSEFBMEQ7QUFDMUQsMkdBRW1DO0FBQ25DLHdHQUF3RDtBQUN4RCxtR0FFOEI7QUFDOUIsZ0ZBQWdEO0FBTWhEO0lBQThCLDRCQUF5QjtJQUNuRCxrQkFBbUIsT0FBdUI7OztRQUExQyxZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQXFCakI7UUFNTSxXQUFLLEdBQVcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRzNELFlBQU0sR0FBVyxLQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFHN0QsY0FBUSxHQUFXLEtBQUksQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUdqRSxlQUFTLEdBQVcsS0FBSSxDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBR25FLGNBQVEsR0FBVyxLQUFJLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFHakUsZUFBUyxHQUFXLEtBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUduRSxVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBR2pCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFHaEIsWUFBTSxHQUF5QixLQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFHM0UsZUFBUyxHQUE0QixLQUFJLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFHcEYsYUFBTyxHQUE4QixLQUFJLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFHbEYscUJBQWUsR0FBVyxLQUFJLENBQUMsZUFBZSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFHL0UsWUFBTSxHQUFXLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRWxDLGNBQVEsR0FBMEIsSUFBSSxDQUFDO1FBSzlCLGtCQUFZLEdBQXVCO1lBQ2hELEVBQUUsRUFBRSxLQUFJLENBQUMsRUFBRTtZQUNYLE1BQU0sRUFBRSxLQUFJO1NBQ2YsQ0FBQztRQXZFRSxLQUFJLENBQUMsRUFBRSxTQUFHLE9BQU8sMENBQUUsRUFBRSxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxXQUFXLENBQUM7WUFDYixLQUFLLEVBQUUsS0FBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLEtBQUksQ0FBQyxNQUFNO1lBQ25CLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsS0FBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxLQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsS0FBSSxDQUFDLE1BQU07WUFDbkIsU0FBUyxFQUFFLEtBQUksQ0FBQyxTQUFTO1lBQ3pCLGVBQWUsRUFBRSxLQUFJLENBQUMsZUFBZTtZQUNyQyxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU87U0FDeEIsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELDJIQUFxRixFQUFwRixrQkFBUyxFQUFFLGlCQUFRLENBQWtFOztJQUMxRixDQUFDO0lBNkNELHNCQUFXLDZCQUFPO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBT00sNkJBQVUsR0FBakI7UUFDSSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLDBCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUxRCx1QkFBYSxDQUFDLE9BQU8sRUFDakIsUUFBUSxFQUNSLFVBQVUsRUFDVixlQUFlLEVBQ2YsSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUM5QyxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMscUJBQVksQ0FBQyxvQkFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFbkYsc0JBQVksQ0FBQyxPQUFPLEVBQXVCO1lBQ3ZDLGVBQWUsRUFBRSxLQUFHLElBQUksQ0FBQyxlQUFpQjtZQUMxQyxNQUFNLEVBQUUsS0FBRyxJQUFJLENBQUMsTUFBUTtZQUN4QixLQUFLLEVBQUssSUFBSSxDQUFDLEtBQUssT0FBSTtZQUN4QixNQUFNLEVBQUssSUFBSSxDQUFDLE1BQU0sT0FBSTtZQUMxQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFJLElBQUksQ0FBQyxRQUFRLE9BQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNwRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFJLElBQUksQ0FBQyxTQUFTLE9BQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUN4RSxRQUFRLEVBQUssSUFBSSxDQUFDLFFBQVEsT0FBSTtZQUM5QixTQUFTLEVBQUssSUFBSSxDQUFDLFNBQVMsT0FBSTtZQUNoQyxJQUFJLEVBQUssSUFBSSxDQUFDLElBQUksT0FBSTtZQUN0QixHQUFHLEVBQUssSUFBSSxDQUFDLEdBQUcsT0FBSTtZQUNwQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sV0FBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sV0FBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsV0FBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksV0FBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQU87WUFDckosTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFdBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFPO1lBQ3RFLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxPQUFJO1NBQ2hDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMscUJBQWEsRUFBRSxvQkFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWxFLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTywrQkFBWSxHQUFwQjtRQUFBLGlCQXFCQztRQXBCRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRTFCLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQUMsRUFBRTtZQUMxQyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxVQUFDLEVBQUU7Z0JBQzdDLElBQU0sZUFBZSxHQUFHLHFCQUFZLENBQUMsb0JBQVksRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pFLElBQUkscUJBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxFQUFFO29CQUM1QywwQkFBZ0IsQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO29CQUNoRCxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsbUJBQVcsQ0FBQyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDckQ7Z0JBRUQsSUFBTSxrQkFBa0IsR0FBRyxxQkFBWSxDQUFDLHVCQUFlLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN2RSxJQUFJLHFCQUFXLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxFQUFFO29CQUMvQyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ2pCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFTSwrQkFBWSxHQUFuQjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSTtZQUFFLE9BQU87UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUUxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ2hDLHNCQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBdUI7WUFDNUMsTUFBTSxFQUFFLEtBQUcsSUFBSSxDQUFDLE1BQVE7U0FDM0IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLG9CQUFZLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLDBCQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRTFCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDeEIsdUJBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUN0QixxQkFBWSxDQUFDLHVCQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDcEQ7O1lBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyx5QkFBTSxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUUxQiwyQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHNCQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQXpJRDtRQURDLG9CQUFTLENBQUMsOEJBQWtCLENBQUM7d0NBQ0g7SUFHM0I7UUFEQyxvQkFBUyxDQUFDLDBCQUFjLENBQUM7MkNBQ3dDO0lBR2xFO1FBREMsb0JBQVMsQ0FBQywwQkFBYyxDQUFDOzRDQUMwQztJQUdwRTtRQURDLG9CQUFTLENBQUMsMEJBQWMsQ0FBQzs4Q0FDOEM7SUFHeEU7UUFEQyxvQkFBUyxDQUFDLDBCQUFjLENBQUM7K0NBQ2dEO0lBRzFFO1FBREMsb0JBQVMsQ0FBQywwQkFBYyxDQUFDOzhDQUM4QztJQUd4RTtRQURDLG9CQUFTLENBQUMsMEJBQWMsQ0FBQzsrQ0FDZ0Q7SUFHMUU7UUFEQyxvQkFBUyxDQUFDLDBCQUFjLENBQUM7MENBQ0Y7SUFHeEI7UUFEQyxvQkFBUyxDQUFDLDBCQUFjLENBQUM7eUNBQ0g7SUFHdkI7UUFEQyxvQkFBUyxlQUFJLCtCQUFvQjs0Q0FDZ0Q7SUFHbEY7UUFEQyxvQkFBUyxlQUFJLGtDQUF1QjsrQ0FDc0Q7SUFHM0Y7UUFEQyxvQkFBUyxDQUFDLENBQUMsbUJBQU8sU0FBeUIsRUFBRSxLQUFLLENBQUM7NkNBQ3FDO0lBR3pGO1FBREMsb0JBQVMsQ0FBQyxzQkFBVSxDQUFDO3FEQUNnRTtJQUd0RjtRQURDLG9CQUFTLENBQUMsdUJBQVcsQ0FBQzs0Q0FDbUI7SUFtRzlDLGVBQUM7Q0FBQSxDQXBLNkIsYUFBUyxHQW9LdEM7QUFwS1ksNEJBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ25CckIsSUFBa0IsbUJBS2pCO0FBTEQsV0FBa0IsbUJBQW1CO0lBQ2pDLHdDQUFpQjtJQUNqQix3Q0FBaUI7SUFDakIsc0NBQWU7SUFDZix3Q0FBaUI7QUFDckIsQ0FBQyxFQUxpQixtQkFBbUIsR0FBbkIsMkJBQW1CLEtBQW5CLDJCQUFtQixRQUtwQztBQUVELElBQWtCLGlCQUVqQjtBQUZELFdBQWtCLGlCQUFpQjtJQUMvQixrQ0FBYTtBQUNqQixDQUFDLEVBRmlCLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBRWxDO0FBRUQsSUFBa0IsaUJBVWpCO0FBVkQsV0FBa0IsaUJBQWlCO0lBQy9CLHNDQUFpQjtJQUNqQiw4Q0FBeUI7SUFDekIsb0RBQStCO0lBQy9CLDBDQUFxQjtJQUNyQixnREFBMkI7SUFDM0IsZ0RBQTJCO0lBQzNCLDRDQUF1QjtJQUN2QixrREFBNkI7SUFDN0Isa0RBQTZCO0FBQ2pDLENBQUMsRUFWaUIsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFVbEM7QUFFWSxxQkFBYSxHQUFXLGVBQWUsQ0FBQztBQUN4QyxvQkFBWSxHQUFXLGNBQWMsQ0FBQztBQUN0QyxtQkFBVyxHQUFXLGFBQWEsQ0FBQztBQUNwQyxzQkFBYyxHQUFXLGdCQUFnQixDQUFDO0FBRTFDLG9CQUFZLEdBQVcsa0JBQWtCLENBQUM7QUFDMUMsdUJBQWUsR0FBVyxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUI3RCxnR0FBbUc7QUFFdEYsNEJBQW9CLEdBQUcsQ0FBQztRQUNqQyxLQUFLLEVBQUUsMEJBQWM7UUFDckIsS0FBSyxFQUFFLENBQUMsbUJBQU8sd0NBQWdIO1FBQy9ILEtBQUssRUFBRSxzQkFBVTtRQUNqQixNQUFNLEVBQUUsdUJBQVc7S0FDdEIsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUVHLCtCQUF1QixHQUFHLENBQUM7UUFDcEMsT0FBTyxFQUFFLDBCQUFjO1FBQ3ZCLE9BQU8sRUFBRSwwQkFBYztRQUN2QixVQUFVLEVBQUUsdUJBQVc7UUFDdkIsWUFBWSxFQUFFLHVCQUFXO1FBQ3pCLEtBQUssRUFBRSxzQkFBVTtLQUNwQixFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRUcsb0NBQTRCLEdBQUc7SUFDeEMsS0FBSyxFQUFFLDBCQUFjO0lBQ3JCLE1BQU0sRUFBRSwwQkFBYztJQUN0QixRQUFRLEVBQUUsMEJBQWM7SUFDeEIsU0FBUyxFQUFFLDBCQUFjO0lBQ3pCLFFBQVEsRUFBRSwwQkFBYztJQUN4QixTQUFTLEVBQUUsMEJBQWM7SUFDekIsZUFBZSxFQUFFLHNCQUFVO0lBQzNCLFNBQVMsRUFBRSwrQkFBdUI7SUFDbEMsT0FBTyxFQUFFLENBQUMsQ0FBQyxtQkFBTyxTQUF5QixFQUFFLEtBQUssQ0FBQztJQUNuRCxNQUFNLEVBQUUsNEJBQW9CO0NBQy9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkYsOEZBQW1EO0FBQ25ELG1HQUFzRDtBQUV0RCw4RkFHeUI7QUFFekIsU0FBUyxTQUFTLENBQUMsY0FBOEI7SUFDN0MsSUFBSSxDQUFDLHlCQUFhLENBQWlCLGNBQWMsQ0FBQztRQUFFLDRCQUFnQixFQUFFLENBQUM7SUFFdkUsT0FBTyxVQUFVLE1BQVcsRUFBRSxXQUFXO1FBQ3JDLElBQU0sUUFBUSxHQUFHLE1BQUksV0FBVyxDQUFDLFFBQVEsRUFBRSxNQUFHLENBQUM7UUFFL0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFO1lBQ3ZDLEdBQUcsZ0JBQUssT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLEdBQUcsWUFBQyxRQUFRO2dCQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxjQUFjLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzRSxDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxRQUFhLEVBQUUsUUFBYTtJQUFFLGdCQUFxQjtTQUFyQixVQUFxQixFQUFyQixxQkFBcUIsRUFBckIsSUFBcUI7UUFBckIsK0JBQXFCOztJQUNwRSxJQUFNLFlBQVksR0FBcUIsRUFBRSxDQUFDO0lBQzFDLElBQU0sa0JBQWtCLEdBQTZCLEVBQUUsQ0FBQztJQUN4RCxJQUFNLGdCQUFnQixHQUFzQixFQUFFLENBQUM7SUFFL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFJO1FBQ1gsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLHlCQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUM7WUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hILElBQUksa0NBQXNCLENBQUMsSUFBSSxDQUFDO1lBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksMkJBQWUsQ0FBQyxJQUFJLENBQUM7WUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLG1CQUFPLCtCQUFDLFFBQVEsR0FBSyxZQUFZO1FBQUcsT0FBTyxRQUFRLENBQUM7SUFFeEQsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQy9CLElBQUksMEJBQTBCLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLEtBQWdDLFVBQWtCLEVBQWxCLHlDQUFrQixFQUFsQixnQ0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtZQUEvQyxJQUFNLGlCQUFpQjtZQUN4QiwwQkFBMEIsR0FBRywwQkFBYyxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQywwQkFBMEI7Z0JBQUUsTUFBTTtTQUMxQztRQUNELElBQUksMEJBQTBCO1lBQUUsT0FBTyxRQUFRLENBQUM7S0FDbkQ7SUFFRCxJQUFJLDJCQUFlLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNuRCx3Q0FBYyxDQUFzQjtRQUMzQyxLQUFLLElBQU0sR0FBRyxJQUFJLFFBQVEsRUFBRTtZQUN4QixJQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsV0FBVywrQkFBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFLLENBQUMsc0JBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUU7U0FDcEc7UUFDRCxPQUFPLHdCQUFlLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzlDO0lBQ0QsNEJBQWdCLEVBQUUsQ0FBQztBQUN2QixDQUFDO0FBRUQsU0FBZ0IsU0FBUztJQUFDLGdCQUFxQjtTQUFyQixVQUFxQixFQUFyQixxQkFBcUIsRUFBckIsSUFBcUI7UUFBckIsMkJBQXFCOztJQUMzQyxPQUFPLFNBQVMsQ0FBQyxVQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBSztRQUMxQyxPQUFPLFdBQVcsK0JBQUMsUUFBUSxFQUFFLEtBQUssR0FBSyxNQUFNLEdBQUU7SUFDbkQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSkQsOEJBSUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REQsMkZBQWdEO0FBRWhELDJGQUVzQjtBQUV0QjtJQUNJO1FBR1Esa0JBQWEsR0FBa0IsRUFBRSxDQUFDO0lBSGxCLENBQUM7SUFLWCxpQkFBUSxHQUF0Qjs7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLFNBQUcsSUFBSSxDQUFDLFFBQVEsdUNBQUksSUFBSSxRQUFRLEVBQUUsR0FBQztJQUMzRCxDQUFDO0lBRU0scUJBQUUsR0FBVCxVQUFVLEdBQVcsRUFBRSxPQUFxQjtRQUN4QyxJQUFJLENBQUMsOEJBQWtCLENBQUMsR0FBRyxDQUFDO1lBQUUsNEJBQWdCLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMseUJBQWEsQ0FBZSxPQUFPLENBQUM7WUFBRSw0QkFBZ0IsRUFBRSxDQUFDO1FBRTlELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQyxJQUFJLHlCQUFhLENBQWUsVUFBVSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDbkQ7aUJBQ0ksSUFBSSwwQkFBYyxDQUFlLFVBQVUsRUFBRSx5QkFBYSxDQUFDLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGtCQUFPLFVBQVUsR0FBRSxPQUFPLEVBQUMsQ0FBQzthQUN0RDtTQUNKOztZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzNDLENBQUM7SUFFTSxzQkFBRyxHQUFWLFVBQVcsR0FBVyxFQUFFLE9BQXFCO1FBQ3pDLElBQUksQ0FBQyw4QkFBa0IsQ0FBQyxHQUFHLENBQUM7WUFBRSw0QkFBZ0IsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyx5QkFBYSxDQUFlLE9BQU8sQ0FBQztZQUFFLDRCQUFnQixFQUFFLENBQUM7UUFFOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDdEMsQ0FBQztJQUVNLHVCQUFJLEdBQVgsVUFBWSxHQUFXLEVBQUUsT0FBWSxFQUFFLElBQXFCO1FBQXJCLG1DQUFxQjtRQUN4RCxJQUFJLENBQUMsOEJBQWtCLENBQUMsR0FBRyxDQUFDO1lBQUUsNEJBQWdCLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsa0NBQXNCLENBQUMsT0FBTyxDQUFDO1lBQUUsNEJBQWdCLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTztRQUVwRCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUkseUJBQWEsQ0FBZSxVQUFVLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixVQUFVLENBQUMsY0FBTSxpQkFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFuQixDQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO2FBQ0ksSUFBSSwwQkFBYyxDQUFlLFVBQVUsRUFBRSx5QkFBYSxDQUFDLEVBQUU7WUFDOUQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxpQkFBTztnQkFDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDckIsVUFBVSxDQUFDLGNBQU0sY0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFoQixDQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRU0sc0JBQUcsR0FBVixVQUFXLEdBQVc7UUFDbEIsSUFBSSxDQUFDLDhCQUFrQixDQUFDLEdBQUcsQ0FBQztZQUFFLDRCQUFnQixFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFDcEQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQztBQXhEWSw0QkFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCLFNBQWdCLGdCQUFnQixDQUFDLE9BQW9CO0lBQXBCLHNDQUFvQjtJQUNqRCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFvQixPQUFPLE1BQUcsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFGRCw0Q0FFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZELDhGQUFtRDtBQUVuRCw4RkFBa0U7QUFFckQsY0FBTSxHQUFXLE9BQU8sQ0FBQztBQUV0QyxTQUFnQixZQUFZLENBQUMsT0FBMEIsRUFBRSxTQUE4Qjs7SUFDbkYsSUFBSSxDQUFDLE9BQU87UUFBRSxPQUFPO0lBRXJCLEtBQUssSUFBTSxPQUFPLElBQUksU0FBUyxFQUFFO1FBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyx1Q0FBSSxJQUFJLEdBQUM7S0FDdkQ7QUFDTCxDQUFDO0FBTkQsb0NBTUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLE9BQTBCLEVBQUUsT0FBdUI7SUFBRSxvQkFBeUM7U0FBekMsVUFBeUMsRUFBekMscUJBQXlDLEVBQXpDLElBQXlDO1FBQXpDLG1DQUF5Qzs7SUFDcEgsSUFBSSxDQUFDLE9BQU87UUFBRSxPQUFPLElBQUksQ0FBQztJQUUxQixJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFELFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1FBQ3hCLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQU0sR0FBRyxRQUFRLENBQUM7WUFDMUYsSUFBTSxhQUFhLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlELE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFFRCxTQUFnQixhQUFhLENBQUMsT0FBMEI7SUFBRSxvQkFBeUM7U0FBekMsVUFBeUMsRUFBekMscUJBQXlDLEVBQXpDLElBQXlDO1FBQXpDLG1DQUF5Qzs7SUFDL0YsT0FBTyxnQkFBZ0IsK0JBQUMsT0FBTyxFQUFFLFVBQUMsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLFFBQVE7WUFDeEUsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFO2dCQUNqQixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEM7UUFDTCxDQUFDLEdBQUssVUFBVSxHQUFFO0FBQ3RCLENBQUM7QUFORCxzQ0FNQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLE9BQTBCO0lBQUUsb0JBQXVCO1NBQXZCLFVBQXVCLEVBQXZCLHFCQUF1QixFQUF2QixJQUF1QjtRQUF2QixtQ0FBdUI7O0lBQ2hGLE9BQU8sZ0JBQWdCLCtCQUFDLE9BQU8sRUFBRSxVQUFDLGlCQUFpQixFQUFFLGFBQWE7WUFDOUQsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDaEIsaUJBQWlCLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM5QztRQUNMLENBQUMsR0FBSyxVQUFVLEdBQUU7QUFDdEIsQ0FBQztBQU5ELDRDQU1DO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLE9BQTBCLEVBQUUsUUFBZ0I7SUFDcEUsSUFBSSxDQUFDLE9BQU87UUFBRSxPQUFPLEtBQUssQ0FBQztJQUUzQixJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFELElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFNLEdBQUcsUUFBUSxDQUFDO0lBQzFGLElBQU0sS0FBSyxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0RCxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNwQixDQUFDO0FBUEQsa0NBT0M7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxFQUFXO0lBQ3hDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsSUFBSSx1QkFBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sQ0FBQyxFQUFFLEdBQUcsY0FBTSxHQUFHLEVBQUUsQ0FBQztLQUM1QjtJQUNELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFORCw0Q0FNQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLElBQVk7SUFDekMsSUFBSSw4QkFBa0IsQ0FBQyxJQUFJLENBQUM7UUFBRSw0QkFBZ0IsRUFBRSxDQUFDO0lBRWpELElBQU0sWUFBWSxHQUFHLDRCQUE0QixDQUFDO0lBQ2xELElBQU0sV0FBVyxHQUFHLDhCQUE4QixDQUFDO0lBRW5ELElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLFVBQVUsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFJLElBQU0sQ0FBQyxDQUFDO0lBQ2pFLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkMsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQVhELDRDQVdDO0FBRUQsU0FBZ0IsaUJBQWlCLENBQUMsT0FBMEI7SUFDeEQsSUFBSSxDQUFDLE9BQU87UUFBRSxPQUFPO0lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYTtRQUFFLE9BQU87SUFFbkMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUxELDhDQUtDOzs7Ozs7Ozs7Ozs7Ozs7QUNoRkQsOEZBQW1EO0FBQ25ELG1HQUE2RDtBQUU3RCw4RkFBOEY7QUFFOUYsU0FBZ0IsZUFBZSxDQUF1QixNQUFTO0lBQzNELElBQU0sYUFBYSxHQUFRLEVBQUUsQ0FBQztJQUU5QixLQUFLLElBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtRQUN0QixJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLDJCQUFlLENBQUMsUUFBUSxDQUFDO1lBQzFDLENBQUMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztLQUM5QztJQUNELE9BQVUsYUFBYSxDQUFDO0FBQzVCLENBQUM7QUFURCwwQ0FTQztBQUVELFNBQWdCLGVBQWUsQ0FBdUIsTUFBUyxFQUFFLElBQU87SUFDcEUsSUFBTSxhQUFhLEdBQUcsZUFBZSxDQUFNLE1BQU0sQ0FBQyxDQUFDO0lBRW5ELEtBQUssSUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3BCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsMkJBQWUsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSwyQkFBZSxDQUFDLFFBQVEsQ0FBQztZQUNqRixDQUFDLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0tBQ2xFO0lBQ0QsT0FBVSxhQUFhLENBQUM7QUFDNUIsQ0FBQztBQVRELDBDQVNDO0FBRUQsU0FBZ0IsVUFBVSxDQUFJLElBQVksRUFBRSxZQUFlLEVBQUUsV0FBdUI7O0lBQ2hGLElBQUksQ0FBQyw4QkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUFlLENBQUMsV0FBVyxDQUFDO1FBQUUsNEJBQWdCLEVBQUUsQ0FBQztJQUVuRixJQUFJLEdBQUcsK0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUFFLFlBQU8sV0FBVyxDQUFDLElBQUksQ0FBQyx1Q0FBSSxZQUFZLEVBQUM7SUFFdkUsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM5RCxJQUFJLENBQUMsa0NBQXNCLENBQUMsUUFBUSxDQUFDO1FBQUUsT0FBTyxZQUFZLENBQUM7SUFFM0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsTUFBTTtRQUNoQyxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzlEO0lBQ0QsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQWZELGdDQWVDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLEdBQWUsRUFBRSxHQUFRO0lBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNO1NBQ1Q7S0FDSjtJQUNELEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckIsQ0FBQztBQVJELDBDQVFDO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLEdBQWUsRUFBRSxHQUFRO0lBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRkQsa0NBRUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hERCw4RkFBbUQ7QUFDbkQsOEZBQXFEO0FBRXJELFNBQWdCLHNCQUFzQixDQUFDLEdBQVc7SUFDOUMsSUFBSSxDQUFDLDhCQUFrQixDQUFDLEdBQUcsQ0FBQztRQUFFLDRCQUFnQixFQUFFLENBQUM7SUFFakQsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBSkQsd0RBSUM7QUFFRCxTQUFnQixZQUFZLENBQUMsR0FBVztJQUFFLGNBQW1CO1NBQW5CLFVBQW1CLEVBQW5CLHFCQUFtQixFQUFuQixJQUFtQjtRQUFuQiw2QkFBbUI7O0lBQ3pELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxHQUFHLENBQUM7SUFFbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBTSxDQUFDLFFBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM5RDtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQVBELG9DQU9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJELDJGQUFnRDtBQUNoRCxnR0FBMEQ7QUFNMUQsU0FBZ0IsYUFBYSxDQUFDLElBQVM7SUFBRSxtQkFBd0I7U0FBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1FBQXhCLGtDQUF3Qjs7SUFDN0QsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUZELHNDQUVDO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLElBQVM7SUFDakMsT0FBTyxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFGRCxrQ0FFQztBQUVELFNBQWdCLFlBQVksQ0FBQyxJQUFTO0lBQ2xDLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRkQsb0NBRUM7QUFFRCxTQUFnQixXQUFXLENBQUMsSUFBUztJQUNqQyxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUZELGtDQUVDO0FBRUQsU0FBZ0IsYUFBYSxDQUFJLElBQVM7SUFDdEMsT0FBTyxhQUFhLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFGRCxzQ0FFQztBQUVELFNBQWdCLHNCQUFzQixDQUFDLElBQVM7SUFDNUMsT0FBTyxhQUFhLENBQWlCLElBQUksQ0FBQztRQUN0QyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFpQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFhLENBQWlCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdGLENBQUM7QUFKRCx3REFJQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxJQUFTLEVBQUUsaUJBQW9DO0lBQzFFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztJQUNsQixJQUFJLGFBQWEsQ0FBaUIsaUJBQWlCLENBQUMsRUFBRTtRQUNsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQUUsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUNoRDtTQUNJLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksYUFBYSxDQUFpQixpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3BGLG9DQUFTLEVBQUUsaUNBQU8sQ0FBc0I7UUFDL0MsSUFBSSxDQUFDLFNBQVMsK0JBQUMsSUFBSSxHQUFLLElBQUksRUFBQztZQUFFLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDakQ7U0FDSSxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBaUIsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMzSCx5Q0FBYyxFQUFFLG1DQUFTLENBQXNCO1FBQ3RELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTywrQkFBQyxJQUFJLEdBQUssTUFBTSxFQUFDO1lBQUUsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUMxRjs7UUFDSSxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFmRCx3Q0FlQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxJQUFTO0lBQ2hDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBRkQsZ0NBRUM7QUFFRCxTQUFnQixjQUFjLENBQUksSUFBUyxFQUFFLGlCQUFvQztJQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ3BDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRTdELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQztJQUN2QixLQUFtQixVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSSxFQUFFO1FBQXBCLElBQU0sSUFBSTtRQUNYLFdBQVcsR0FBRyxjQUFjLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVc7WUFBRSxNQUFNO0tBQzNCO0lBQ0QsT0FBTyxXQUFXLENBQUM7QUFDdkIsQ0FBQztBQVZELHdDQVVDO0FBRUQsU0FBZ0Isc0JBQXNCLENBQUMsSUFBUztJQUM1QyxPQUFPLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQztBQUMvQyxDQUFDO0FBRkQsd0RBRUM7QUFFRCxTQUFnQixXQUFXLENBQUMsSUFBUztJQUNqQyxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUZELGtDQUVDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLElBQVM7SUFDckMsT0FBTyxJQUFJLEtBQUssSUFBSTtRQUNoQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDakIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLGlCQUFpQixDQUFDO0FBQ2pGLENBQUM7QUFKRCwwQ0FJQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxJQUFTO0lBQy9CLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQztBQUN6QixDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixXQUFXLENBQUMsSUFBUztJQUNqQyxPQUFPLElBQUksWUFBWSxNQUFNLENBQUM7QUFDbEMsQ0FBQztBQUZELGtDQUVDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLElBQVM7SUFDaEMsSUFBSSxHQUFHLCtCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLElBQU0sWUFBWSxHQUFHLCtCQUErQixDQUFDO0lBQ3JELElBQU0sU0FBUyxHQUFHLGtMQUFrTCxDQUFDO0lBQ3JNLElBQU0sVUFBVSxHQUFHLG9NQUFvTSxDQUFDO0lBRXhOLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDcEIsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxLQUFLLGFBQWEsQ0FBQztBQUMvQixDQUFDO0FBVkQsZ0NBVUM7QUFFRCxTQUFnQixrQkFBa0IsQ0FBQyxJQUFTO0lBQ3hDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztXQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBSEQsZ0RBR0M7QUFFRCxTQUFnQixRQUFRLENBQUMsSUFBUztJQUM5QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDcEIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUcsSUFBTSxDQUFDLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBSEQsNEJBR0M7QUFFRCxTQUFnQixXQUFXLENBQUMsSUFBUztJQUNqQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7V0FDZCxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQ3JCLENBQUM7QUFIRCxrQ0FHQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxJQUFTO0lBQ3BDLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztXQUNqQixJQUFJLElBQUksQ0FBQyxDQUFDO0FBQ3JCLENBQUM7QUFIRCx3Q0FHQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxJQUFTLEVBQUUsU0FBaUI7SUFDdEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztRQUFFLDRCQUFnQixFQUFFLENBQUM7SUFFdkQsT0FBTyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7V0FDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBTEQsc0NBS0M7QUFFRCxTQUFnQixPQUFPLENBQUMsSUFBUztJQUFFLGdCQUEyQjtTQUEzQixVQUEyQixFQUEzQixxQkFBMkIsRUFBM0IsSUFBMkI7UUFBM0IsK0JBQTJCOztJQUMxRCxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQztRQUM1RSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFIRCwwQkFHQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxJQUFTLEVBQUUsU0FBaUI7SUFDdkQsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDO0FBQ2pDLENBQUM7QUFIRCx3Q0FHQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxJQUFTLEVBQUUsU0FBaUI7SUFDdkQsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDO0FBQ2pDLENBQUM7QUFIRCx3Q0FHQztBQUVELFNBQWdCLFdBQVcsQ0FBQyxJQUFTLEVBQUUsWUFBb0IsRUFBRSxZQUFvQjtJQUM3RSxJQUFJLFlBQVksSUFBSSxZQUFZO1FBQUUsNEJBQWdCLEVBQUUsQ0FBQztJQUVyRCxPQUFPLGNBQWMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDO1FBQ3JDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUxELGtDQUtDO0FBRUQsU0FBZ0IsUUFBUSxDQUFDLElBQVMsRUFBRSxTQUFpQjtJQUNqRCxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDcEIsSUFBSSxJQUFJLFNBQVMsQ0FBQztBQUMxQixDQUFDO0FBSEQsNEJBR0M7QUFFRCxTQUFnQixRQUFRLENBQUMsSUFBUyxFQUFFLFNBQWlCO0lBQ2pELE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztRQUNwQixJQUFJLElBQUksU0FBUyxDQUFDO0FBQzFCLENBQUM7QUFIRCw0QkFHQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxJQUFTLEVBQUUsWUFBb0IsRUFBRSxZQUFvQjtJQUM1RSxJQUFJLFlBQVksSUFBSSxZQUFZO1FBQUUsNEJBQWdCLEVBQUUsQ0FBQztJQUVyRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDO1FBQy9CLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUxELGdDQUtDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLElBQVMsRUFBRSxLQUFhO0lBQy9DLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBRkQsZ0NBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLRCw0REFBa0I7QUFFbEIsMEdBQWtEO0FBQ2xELDBFQUVrQjtBQUNsQixtRkFBMkQ7QUFDM0QsaUhBQXVEO0FBQ3ZELGdHQUE2QztBQUM3QyxnR0FBcUQ7QUFDckQscUdBQXFFO0FBRXJFLGdHQUUyQjtBQUszQjtJQUNJLGVBQW9CLE9BQW9CO1FBT2hDLGFBQVEsR0FBYSxvQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpDLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFHakMsZ0JBQVcsR0FBVyxRQUFRLENBQUM7UUFHL0IsaUJBQVksR0FBeUI7WUFDeEMsS0FBSyxFQUFFLEdBQUc7WUFDVixNQUFNLEVBQUUsR0FBRztZQUNYLFFBQVEsRUFBRSxHQUFHO1lBQ2IsU0FBUyxFQUFFLEdBQUc7WUFDZCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsV0FBVztZQUN0QixlQUFlLEVBQUUsU0FBUztZQUMxQixTQUFTLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsWUFBWSxFQUFFLENBQUM7Z0JBQ2YsS0FBSyxFQUFFLG9CQUFvQjthQUM5QjtZQUNELE9BQU8sUUFBd0I7WUFDL0IsTUFBTSxFQUFFO2dCQUNKLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssU0FBMkI7Z0JBQ2hDLEtBQUssRUFBRSxTQUFTO2dCQUNoQixNQUFNLEVBQUUsQ0FBQzthQUNaO1NBQ0osQ0FBQztRQUVNLFlBQU8sR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBS25DLGFBQVEsR0FBb0IsRUFBRSxDQUFDO1FBSy9CLFlBQU8sR0FBb0IsSUFBSSxDQUFDO1FBaERwQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBcUNELHNCQUFJLHlCQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSwwQkFBTzthQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUkseUJBQU07YUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVhLGNBQVEsR0FBdEIsVUFBdUIsT0FBeUI7UUFBekIsc0NBQXlCO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRU8sOEJBQWMsR0FBdEIsVUFBdUIsT0FBb0I7O1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsZUFBRyxPQUFPLDBDQUFFLFdBQVcsdUNBQUksSUFBSSxDQUFDLFdBQVcsR0FBQztRQUMzRSxJQUFJLENBQUMsWUFBWSxlQUFHLE9BQU8sMENBQUUsWUFBWSx1Q0FBSSxJQUFJLENBQUMsWUFBWSxHQUFDO0lBQ25FLENBQUM7SUFFTyw0QkFBWSxHQUFwQjtRQUFBLGlCQWdCQztRQWZHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLHFCQUFhLEVBQUUsVUFBQyxPQUF5QztZQUN0RSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsb0JBQVksRUFBRSxVQUFDLE9BQXlDO1lBQ3JFLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLHdCQUFlLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLHNCQUFjLEVBQUUsVUFBQyxPQUF5QztZQUN2RSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN0QyxvQkFBVyxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxrQkFBRSxHQUFULFVBQVUsV0FBd0I7UUFDOUIsSUFBSSxDQUFDLDJCQUFlLENBQUMsV0FBVyxDQUFDO1lBQUUsT0FBTztRQUUxQyxLQUFLLElBQU0sR0FBRyxJQUFJLFdBQVcsRUFBRTtZQUMzQixJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsSUFBSSx5QkFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDbEM7U0FDSjtJQUNMLENBQUM7SUFFTSxvQkFBSSxHQUFYLFVBQVksT0FBdUI7O1FBQy9CLElBQUksQ0FBQyw4QkFBa0IsT0FBQyxPQUFPLDBDQUFFLEVBQUUsQ0FBQztZQUFFLDRCQUFnQixFQUFFLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFBRSw0QkFBZ0IsQ0FBQyxrQkFBZ0IsT0FBTyxDQUFDLEVBQUUscUJBQWtCLENBQUMsQ0FBQztRQUUvRixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNuRCxJQUFNLFFBQVEsR0FBRyxJQUFJLG9CQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLHlCQUFTLEdBQWhCLFVBQWlCLEVBQVU7UUFDdkIsSUFBSSxDQUFDLDhCQUFrQixDQUFDLEVBQUUsQ0FBQztZQUFFLDRCQUFnQixFQUFFLENBQUM7UUFFaEQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBRztZQUNwQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQXBHRDtRQURDLG9CQUFTLENBQUMsdUJBQVcsRUFBRSxDQUFDLG9CQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7OENBQ0g7SUFHdEM7UUFEQyxvQkFBUyxDQUFDLHVDQUE0QixDQUFDOytDQXVCdEM7SUE0RU4sWUFBQztDQUFBO0FBbEhZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUNsQmxCLGdHQUFxRDtBQUNyRCxnR0FBbUU7QUFHbkUsU0FBZ0IsZ0JBQWdCLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxnQkFBbUM7SUFDL0YsSUFBSSxDQUFDLDBCQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywwQkFBYyxDQUFDLE1BQU0sQ0FBQztRQUFFLDRCQUFnQixFQUFFLENBQUM7SUFFMUUsSUFBSSxnQkFBZ0IsS0FBSyxTQUFTO1FBQUUsT0FBTyxDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVsRyxJQUFJLDBCQUFjLENBQVMsZ0JBQWdCLEVBQUUsMEJBQWMsQ0FBQyxFQUFFO1FBQzFELElBQUksZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSw0QkFBZ0IsRUFBRSxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JEO0lBRUQsUUFBUSxnQkFBZ0IsRUFBRTtRQUN0QjtZQUNJLE9BQU8sQ0FBQyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEU7WUFDSSxPQUFPLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDO1lBQ0ksT0FBTyxDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDNUQ7WUFDSSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xCO1lBQ0ksT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQztZQUNJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDO1lBQ0ksT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkM7WUFDSSxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssRUFBRSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RDtZQUNJLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxFQUFFLFdBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN0RDtZQUNJLDRCQUFnQixFQUFFLENBQUM7S0FDMUI7QUFDTCxDQUFDO0FBaENELDRDQWdDQzs7Ozs7Ozs7Ozs7Ozs7O0FDckNELHlFQUFnQztBQUdoQyxrQkFBZSxDQUFDLFNBQVMsS0FBSztJQUMxQixJQUFNLEtBQUssR0FBRyxhQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsSUFBTSxLQUFLLEdBQVUsVUFBVSxPQUFvQjtRQUMvQyxhQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQztJQUNGLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM5QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1FBQzNCLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxjQUFNLFlBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWSxFQUFFO1FBQ25DLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxjQUFNLFlBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxFQUFFO0tBQ3hDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTlDLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoibGF5eC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxheXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGF5eFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGUvY29tbW9uLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS9zdmcuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlL3dpbmRvdy5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUvYW5pbWF0ZS5jc3MnO1xyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICcuLi9jb3JlL2V2ZW50LWJ1cyc7XHJcbmltcG9ydCB7IHJlYWRPYmplY3QgfSBmcm9tICcuLi9jb3JlL2hlbHBlci9vYmplY3QnO1xyXG5pbXBvcnQgeyBKU09OT2JqZWN0IH0gZnJvbSAnLi4vY29yZS90eXBlJztcclxuaW1wb3J0IHsgRW50cnkgfSBmcm9tICcuLi9lbnRyeSc7XHJcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3R5cGUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudDxUT3B0aW9uIGV4dGVuZHMgSlNPTk9iamVjdD4ge1xyXG4gICAgcHJpdmF0ZSBfX05BTUVfXzogYW55O1xyXG4gICAgcHJvdGVjdGVkIGVudHJ5OiBFbnRyeSA9IEVudHJ5Lkluc3RhbmNlKCk7XHJcbiAgICBwcm90ZWN0ZWQgZXZlbnRCdXM6IEV2ZW50QnVzID0gRXZlbnRCdXMuSW5zdGFuY2UoKTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIG9wdGlvbnM6IFRPcHRpb24pIHsgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZWFkR2xvYmFsVmFsdWUocGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IG51bGwsIHN0YXJ0T2JqZWN0ID0gdGhpcy5lbnRyeSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHJlYWRPYmplY3Q8YW55PihwYXRoLCBkZWZhdWx0VmFsdWUsIHN0YXJ0T2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVhZE9wdGlvbnMoa2V5VmFsdWU6IEpTT05PYmplY3QpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoXCI6XCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcylba2V5XSA9IHJlYWRPYmplY3Qoa2V5LCBrZXlWYWx1ZVtrZXldLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qga2V5UGF0aCA9IGtleS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgICg8YW55PnRoaXMpW2tleVBhdGhbMF1dID0gcmVhZE9iamVjdChrZXlQYXRoWzFdLCBrZXlWYWx1ZVtrZXldLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2VuZEV2ZW50czxURXZlbnRNZXNzYWdlIGV4dGVuZHMgSlNPTk9iamVjdD4oa2V5czogQXJyYXk8c3RyaW5nPiwgbWVzc2FnZTogVEV2ZW50TWVzc2FnZSA9IDxURXZlbnRNZXNzYWdlPnt9KTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50QnVzLmVtaXQoa2V5LCA8RXZlbnRNZXNzYWdlPFRFdmVudE1lc3NhZ2U+PntcclxuICAgICAgICAgICAgICAgIGRhdGFzZXQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudmFsdWVPZigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uLyc7XHJcbmltcG9ydCB7XHJcbiAgICBBTklNQVRFX1NIT1csIEFuaW1hdGlvbk9wdGlvbmFsLCBXSU5ET1dfQ1JFQVRFLCBXSU5ET1dfRk9DVVMsIFdJTkRPV19TSE9XLCBBTklNQVRFX0RFU1RST1ksIFdJTkRPV19ERVNUUk9ZXHJcbn0gZnJvbSAnLi4vLi4vY29uc3QnO1xyXG5pbXBvcnQgeyBCb3JkZXJPcHRpb25Db250cmFjdCwgQm94U2hhZG93T3B0aW9uQ29udHJhY3QgfSBmcm9tICcuLi8uLi9jb250cmFjdCc7XHJcbmltcG9ydCB7IHZhbGlkYXRvciB9IGZyb20gJy4uLy4uL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5JztcclxuaW1wb3J0IHtcclxuICAgIGFkZENTU0NsYXNzZXMsIGFkZENTU1N0eWxlcywgY3JlYXRlRGl2RWxlbWVudCwgaGFzQ1NTQ2xhc3MsIHJlbW92ZUNTU0NsYXNzZXMsIHJlbW92ZUhUTUxFbGVtZW50XHJcbn0gZnJvbSAnLi4vLi4vY29yZS9oZWxwZXIvZWxlbWVudCc7XHJcbmltcG9ydCB7IHN0cmluZ0Zvcm1hdCB9IGZyb20gJy4uLy4uL2NvcmUvaGVscGVyL3N0cmluZyc7XHJcbmltcG9ydCB7XHJcbiAgICBjaGVja0NvbG9yLCBjaGVja0luLCBjaGVja05vRW1wdHlPck51bGwsIGNoZWNrUHN0SW50LCBjaGVja1BzdE51bWJlclxyXG59IGZyb20gJy4uLy4uL2NvcmUvdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgY29udmVydERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL2hlbHBlcic7XHJcbmltcG9ydCB7XHJcbiAgICBCb3JkZXJPcHRpb24sIEJveFNoYWRvd09wdGlvbiwgQ29tcG9uZW50RWxlbWVudCwgVUlXaW5kb3dPcHRpb24sIFdpbmRvd0V2ZW50TWVzc2FnZVxyXG59IGZyb20gJy4uLy4uL3R5cGUnO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gJy4uL3VpLWNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlXaW5kb3cgZXh0ZW5kcyBDb21wb25lbnQ8VUlXaW5kb3dPcHRpb24+IGltcGxlbWVudHMgVUlDb21wb25lbnQ8VUlXaW5kb3dPcHRpb24+IHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBVSVdpbmRvd09wdGlvbikge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB0aGlzLmlkID0gb3B0aW9ucz8uaWQ7XHJcbiAgICAgICAgdGhpcy5yZWFkT3B0aW9ucyh7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogdGhpcy5tYXhXaWR0aCxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLm1heEhlaWdodCxcclxuICAgICAgICAgICAgbWluV2lkdGg6IHRoaXMubWluV2lkdGgsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogdGhpcy5taW5IZWlnaHQsXHJcbiAgICAgICAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXIsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogdGhpcy5ib3hTaGFkb3csXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgIGFuaW1hdGU6IHRoaXMuYW5pbWF0ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5tYXgodGhpcy5taW5XaWR0aCwgdGhpcy53aWR0aCk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGgubWluKHRoaXMubWF4V2lkdGgsIHRoaXMud2lkdGgpO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5taW5IZWlnaHQsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGgubWluKHRoaXMubWF4SGVpZ2h0LCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgW3RoaXMubGVmdCwgdGhpcy50b3BdID0gY29udmVydERpcmVjdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgb3B0aW9ucz8uZGlyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrTm9FbXB0eU9yTnVsbClcclxuICAgIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93T3B0aW9uL3dpZHRoXCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvd09wdGlvbi9oZWlnaHRcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyBtaW5XaWR0aDogbnVtYmVyID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vbWluV2lkdGhcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdE51bWJlcilcclxuICAgIHB1YmxpYyBtaW5IZWlnaHQ6IG51bWJlciA9IHRoaXMucmVhZEdsb2JhbFZhbHVlKFwid2luZG93T3B0aW9uL21pbkhlaWdodFwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIG1heFdpZHRoOiBudW1iZXIgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvd09wdGlvbi9tYXhXaWR0aFwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIG1heEhlaWdodDogbnVtYmVyID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vbWF4SGVpZ2h0XCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3ROdW1iZXIpXHJcbiAgICBwdWJsaWMgbGVmdDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrUHN0TnVtYmVyKVxyXG4gICAgcHVibGljIHRvcDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAdmFsaWRhdG9yKC4uLkJvcmRlck9wdGlvbkNvbnRyYWN0KVxyXG4gICAgcHVibGljIGJvcmRlcjogZmFsc2UgfCBCb3JkZXJPcHRpb24gPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvd09wdGlvbi9ib3JkZXJcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvciguLi5Cb3hTaGFkb3dPcHRpb25Db250cmFjdClcclxuICAgIHB1YmxpYyBib3hTaGFkb3c6IGZhbHNlIHwgQm94U2hhZG93T3B0aW9uID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vYm94U2hhZG93XCIpO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoW2NoZWNrSW4sIEFuaW1hdGlvbk9wdGlvbmFsLlpPT01dLCBmYWxzZSlcclxuICAgIHB1YmxpYyBhbmltYXRlOiBmYWxzZSB8IEFuaW1hdGlvbk9wdGlvbmFsID0gdGhpcy5yZWFkR2xvYmFsVmFsdWUoXCJ3aW5kb3dPcHRpb24vYW5pbWF0ZVwiKTtcclxuXHJcbiAgICBAdmFsaWRhdG9yKGNoZWNrQ29sb3IpXHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSB0aGlzLnJlYWRHbG9iYWxWYWx1ZShcIndpbmRvd09wdGlvbi9iYWNrZ3JvdW5kQ29sb3JcIik7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdEludClcclxuICAgIHB1YmxpYyB6SW5kZXg6IG51bWJlciA9IHRoaXMuZW50cnkuekluZGV4O1xyXG5cclxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwdWJsaWMgZ2V0IGVsZW1lbnQoKTogSFRNTERpdkVsZW1lbnQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50TWVzc2FnZTogV2luZG93RXZlbnRNZXNzYWdlID0ge1xyXG4gICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgIHRhcmdldDogdGhpc1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlVmlldygpOiBDb21wb25lbnRFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZWxlbWVudCA9IGNyZWF0ZURpdkVsZW1lbnQodGhpcy5pZCk7XHJcblxyXG4gICAgICAgIGFkZENTU0NsYXNzZXMoZWxlbWVudCxcclxuICAgICAgICAgICAgXCJ3aW5kb3dcIixcclxuICAgICAgICAgICAgXCJmbGV4LWJveFwiLFxyXG4gICAgICAgICAgICBcImNvbC1kaXJlY3Rpb25cIixcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlICE9PSBmYWxzZSA/IFwiYW5pbWF0ZVwiIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgIT09IGZhbHNlID8gc3RyaW5nRm9ybWF0KEFOSU1BVEVfU0hPVywgdGhpcy5hbmltYXRlKSA6IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgIGFkZENTU1N0eWxlcyhlbGVtZW50LCA8Q1NTU3R5bGVEZWNsYXJhdGlvbj57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7dGhpcy5iYWNrZ3JvdW5kQ29sb3J9YCxcclxuICAgICAgICAgICAgekluZGV4OiBgJHt0aGlzLnpJbmRleH1gLFxyXG4gICAgICAgICAgICB3aWR0aDogYCR7dGhpcy53aWR0aH1weGAsXHJcbiAgICAgICAgICAgIGhlaWdodDogYCR7dGhpcy5oZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogdGhpcy5tYXhXaWR0aCAhPT0gaW5uZXJXaWR0aCA/IGAke3RoaXMubWF4V2lkdGh9cHhgIDogbnVsbCxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLm1heEhlaWdodCAhPT0gaW5uZXJIZWlnaHQgPyBgJHt0aGlzLm1heEhlaWdodH1weGAgOiBudWxsLFxyXG4gICAgICAgICAgICBtaW5XaWR0aDogYCR7dGhpcy5taW5XaWR0aH1weGAsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogYCR7dGhpcy5taW5IZWlnaHR9cHhgLFxyXG4gICAgICAgICAgICBsZWZ0OiBgJHt0aGlzLmxlZnR9cHhgLFxyXG4gICAgICAgICAgICB0b3A6IGAke3RoaXMudG9wfXB4YCxcclxuICAgICAgICAgICAgYm94U2hhZG93OiB0aGlzLmJveFNoYWRvdyA9PT0gZmFsc2UgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgIGAke3RoaXMuYm94U2hhZG93Lm9mZnNldFh9cHggJHt0aGlzLmJveFNoYWRvdy5vZmZzZXRZfXB4ICR7dGhpcy5ib3hTaGFkb3cuYmx1clJhZGl1c31weCAke3RoaXMuYm94U2hhZG93LnNwcmVhZFJhZGl1c31weCAke3RoaXMuYm94U2hhZG93LmNvbG9yfWAsXHJcbiAgICAgICAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXIgPT09IGZhbHNlID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci53aWR0aH1weCAke3RoaXMuYm9yZGVyLnN0eWxlfSAke3RoaXMuYm9yZGVyLmNvbG9yfWAsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogdGhpcy5ib3JkZXIgPT09IGZhbHNlID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICBgJHt0aGlzLmJvcmRlci5yYWRpdXN9cHhgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubW9uaXRvckV2ZW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VuZEV2ZW50cyhbV0lORE9XX0NSRUFURSwgV0lORE9XX0ZPQ1VTXSwgdGhpcy5ldmVudE1lc3NhZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vbml0b3JFdmVudCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVaSW5kZXgoKTtcclxuICAgICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRlU2hvd05hbWUgPSBzdHJpbmdGb3JtYXQoQU5JTUFURV9TSE9XLCB0aGlzLmFuaW1hdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NTU0NsYXNzKHRoaXMuZWxlbWVudCwgYW5pbWF0ZVNob3dOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNTU0NsYXNzZXModGhpcy5lbGVtZW50LCBhbmltYXRlU2hvd05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZEV2ZW50cyhbV0lORE9XX1NIT1ddLCB0aGlzLmV2ZW50TWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0ZURlc3Ryb3lOYW1lID0gc3RyaW5nRm9ybWF0KEFOSU1BVEVfREVTVFJPWSwgdGhpcy5hbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNDU1NDbGFzcyh0aGlzLmVsZW1lbnQsIGFuaW1hdGVEZXN0cm95TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVpJbmRleCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5lbnRyeS53aW5kb3cgPT09IHRoaXMpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnpJbmRleCA9IHRoaXMuZW50cnkuekluZGV4O1xyXG4gICAgICAgIGFkZENTU1N0eWxlcyh0aGlzLmVsZW1lbnQsIDxDU1NTdHlsZURlY2xhcmF0aW9uPntcclxuICAgICAgICAgICAgekluZGV4OiBgJHt0aGlzLnpJbmRleH1gXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VuZEV2ZW50cyhbV0lORE9XX0ZPQ1VTXSwgdGhpcy5ldmVudE1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGFkZENTU0NsYXNzZXModGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgc3RyaW5nRm9ybWF0KEFOSU1BVEVfREVTVFJPWSwgdGhpcy5hbmltYXRlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICByZW1vdmVIVE1MRWxlbWVudCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuc2VuZEV2ZW50cyhbV0lORE9XX0RFU1RST1ldLCB0aGlzLmV2ZW50TWVzc2FnZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgZW51bSBCb3JkZXJTdHlsZU9wdGlvbmFsIHtcclxuICAgIERPVFRFRCA9IFwiZG90dGVkXCIsXHJcbiAgICBEQVNIRUQgPSBcImRhc2hlZFwiLFxyXG4gICAgU09MSUQgPSBcInNvbGlkXCIsXHJcbiAgICBET1VCTEUgPSBcImRvdWJsZVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEFuaW1hdGlvbk9wdGlvbmFsIHtcclxuICAgIFpPT00gPSBcInpvb21cIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBEaXJlY3Rpb25PcHRpb25hbCB7XHJcbiAgICBDRU5URVIgPSBcImNlbnRlclwiLFxyXG4gICAgVE9QX0NFTlRFUiA9IFwidG9wLWNlbnRlclwiLFxyXG4gICAgQk9UVE9NX0NFTlRFUiA9IFwiYm90dG9tLWNlbnRlclwiLFxyXG4gICAgTEVGVF9UT1AgPSBcImxlZnQtdG9wXCIsXHJcbiAgICBMRUZUX01JRERMRSA9IFwibGVmdC1taWRkbGVcIixcclxuICAgIExFRlRfQk9UVE9NID0gXCJsZWZ0LWJvdHRvbVwiLFxyXG4gICAgUklHSFRfVE9QID0gXCJyaWdodC10b3BcIixcclxuICAgIFJJR0hUX01JRERMRSA9IFwicmlnaHQtbWlkZGxlXCIsXHJcbiAgICBSSUdIVF9CT1RUT00gPSBcInJpZ2h0LWJvdHRvbVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfQ1JFQVRFOiBzdHJpbmcgPSBcIndpbmRvdzpjcmVhdGVcIjtcclxuZXhwb3J0IGNvbnN0IFdJTkRPV19GT0NVUzogc3RyaW5nID0gXCJ3aW5kb3c6Zm9jdXNcIjtcclxuZXhwb3J0IGNvbnN0IFdJTkRPV19TSE9XOiBzdHJpbmcgPSBcIndpbmRvdzpzaG93XCI7XHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfREVTVFJPWTogc3RyaW5nID0gXCJ3aW5kb3c6ZGVzdHJveVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFOSU1BVEVfU0hPVzogc3RyaW5nID0gXCJhbmltYXRlLXswfS1zaG93XCI7XHJcbmV4cG9ydCBjb25zdCBBTklNQVRFX0RFU1RST1k6IHN0cmluZyA9IFwiYW5pbWF0ZS17MH0tZGVzdHJveVwiOyIsImltcG9ydCB7IEFuaW1hdGlvbk9wdGlvbmFsLCBCb3JkZXJTdHlsZU9wdGlvbmFsIH0gZnJvbSAnLi4vY29uc3QnO1xyXG5pbXBvcnQgeyBjaGVja0Jvb2xlYW4sIGNoZWNrQ29sb3IsIGNoZWNrSW4sIGNoZWNrUHN0SW50LCBjaGVja1BzdE51bWJlciB9IGZyb20gJy4uL2NvcmUvdmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBjb25zdCBCb3JkZXJPcHRpb25Db250cmFjdCA9IFt7XHJcbiAgICB3aWR0aDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBzdHlsZTogW2NoZWNrSW4sIEJvcmRlclN0eWxlT3B0aW9uYWwuREFTSEVELCBCb3JkZXJTdHlsZU9wdGlvbmFsLlNPTElELCBCb3JkZXJTdHlsZU9wdGlvbmFsLkRPVUJMRSwgQm9yZGVyU3R5bGVPcHRpb25hbC5ET1RURURdLFxyXG4gICAgY29sb3I6IGNoZWNrQ29sb3IsXHJcbiAgICByYWRpdXM6IGNoZWNrUHN0SW50XHJcbn0sIGZhbHNlXTtcclxuXHJcbmV4cG9ydCBjb25zdCBCb3hTaGFkb3dPcHRpb25Db250cmFjdCA9IFt7XHJcbiAgICBvZmZzZXRYOiBjaGVja1BzdE51bWJlcixcclxuICAgIG9mZnNldFk6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgYmx1clJhZGl1czogY2hlY2tQc3RJbnQsXHJcbiAgICBzcHJlYWRSYWRpdXM6IGNoZWNrUHN0SW50LFxyXG4gICAgY29sb3I6IGNoZWNrQ29sb3JcclxufSwgZmFsc2VdO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFVJV2luZG93T3B0aW9uQ29udHJhY3QgPSB7XHJcbiAgICB3aWR0aDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBoZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgbWluV2lkdGg6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgbWluSGVpZ2h0OiBjaGVja1BzdE51bWJlcixcclxuICAgIG1heFdpZHRoOiBjaGVja1BzdE51bWJlcixcclxuICAgIG1heEhlaWdodDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoZWNrQ29sb3IsXHJcbiAgICBib3hTaGFkb3c6IEJveFNoYWRvd09wdGlvbkNvbnRyYWN0LFxyXG4gICAgYW5pbWF0ZTogW1tjaGVja0luLCBBbmltYXRpb25PcHRpb25hbC5aT09NXSwgZmFsc2VdLFxyXG4gICAgYm9yZGVyOiBCb3JkZXJPcHRpb25Db250cmFjdFxyXG59OyIsImltcG9ydCB7IHBhcmFtZXRlckludmFsaWQgfSBmcm9tICcuLi8uLi9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBtZXJnZUpTT05PYmplY3QgfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0JztcclxuaW1wb3J0IHsgRnVuY3Rpb25WYWxpZGF0b3IsIEpTT05PYmplY3QsIFByb3BlcnR5U2V0dGVyLCBWYWx1ZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlJztcclxuaW1wb3J0IHtcclxuICAgIGNoZWNrQXJyYXksIGNoZWNrQmFzZVR5cGUsIGNoZWNrRnVuY3Rpb24sIGNoZWNrRnVuY3Rpb25WYWxpZGF0b3IsIGNoZWNrSW4sIGNoZWNrSlNPTk9iamVjdCxcclxuICAgIGNoZWNrVmFsaWRhdG9yXHJcbn0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJztcclxuXHJcbmZ1bmN0aW9uIGRlY29yYXRvcihwcm9wZXJ0eVNldHRlcjogUHJvcGVydHlTZXR0ZXIpOiBQcm9wZXJ0eURlY29yYXRvciB7XHJcbiAgICBpZiAoIWNoZWNrRnVuY3Rpb248UHJvcGVydHlTZXR0ZXI+KHByb3BlcnR5U2V0dGVyKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5KSB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVLZXkgPSBgXyR7cHJvcGVydHlLZXkudG9TdHJpbmcoKX1fYDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIHtcclxuICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gdGhpc1tzdG9yZUtleV07IH0sXHJcbiAgICAgICAgICAgIHNldChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1tzdG9yZUtleV0gPSBwcm9wZXJ0eVNldHRlcihuZXdWYWx1ZSwgcHJvcGVydHlLZXksIHRoaXNbc3RvcmVLZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpblZhbGlkYXRvcihuZXdWYWx1ZTogYW55LCBvbGRWYWx1ZTogYW55LCAuLi52YWx1ZXM6IEFycmF5PGFueT4pOiBhbnkge1xyXG4gICAgY29uc3QgdmFsdWVPcHRpb25zOiBBcnJheTxWYWx1ZVR5cGU+ID0gW107XHJcbiAgICBjb25zdCBmdW5jdGlvblZhbGlkYXRvcnM6IEFycmF5PEZ1bmN0aW9uVmFsaWRhdG9yPiA9IFtdO1xyXG4gICAgY29uc3Qgb2JqZWN0VmFsaWRhdG9yczogQXJyYXk8SlNPTk9iamVjdD4gPSBbXTtcclxuXHJcbiAgICB2YWx1ZXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtID09PSBudWxsIHx8IGNoZWNrQmFzZVR5cGUoaXRlbSwgXCJzdHJpbmdcIiwgXCJiaWdpbnRcIiwgXCJib29sZWFuXCIsIFwic3ltYm9sXCIsIFwidW5kZWZpbmVkXCIpKSB2YWx1ZU9wdGlvbnMucHVzaChpdGVtKTtcclxuICAgICAgICBpZiAoY2hlY2tGdW5jdGlvblZhbGlkYXRvcihpdGVtKSkgZnVuY3Rpb25WYWxpZGF0b3JzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgaWYgKGNoZWNrSlNPTk9iamVjdChpdGVtKSkgb2JqZWN0VmFsaWRhdG9ycy5wdXNoKGl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGNoZWNrSW4obmV3VmFsdWUsIC4uLnZhbHVlT3B0aW9ucykpIHJldHVybiBuZXdWYWx1ZTtcclxuXHJcbiAgICBpZiAoZnVuY3Rpb25WYWxpZGF0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgaXNQYXNzQWxsRnVuY3Rpb25WYWxpZGF0b3IgPSB0cnVlO1xyXG4gICAgICAgIGZvciAoY29uc3QgZnVuY3Rpb25WYWxpZGF0b3Igb2YgZnVuY3Rpb25WYWxpZGF0b3JzKSB7XHJcbiAgICAgICAgICAgIGlzUGFzc0FsbEZ1bmN0aW9uVmFsaWRhdG9yID0gY2hlY2tWYWxpZGF0b3IobmV3VmFsdWUsIGZ1bmN0aW9uVmFsaWRhdG9yKTtcclxuICAgICAgICAgICAgaWYgKCFpc1Bhc3NBbGxGdW5jdGlvblZhbGlkYXRvcikgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1Bhc3NBbGxGdW5jdGlvblZhbGlkYXRvcikgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGVja0pTT05PYmplY3QobmV3VmFsdWUpICYmIG9iamVjdFZhbGlkYXRvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IFtmaXJzdFZhbGlkYXRvcixdID0gb2JqZWN0VmFsaWRhdG9ycztcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZFZhbHVlcyA9IGZpcnN0VmFsaWRhdG9yW2tleV07XHJcbiAgICAgICAgICAgIGluVmFsaWRhdG9yKG5ld1ZhbHVlW2tleV0sIG9sZFZhbHVlLCAuLi4oY2hlY2tBcnJheShjaGlsZFZhbHVlcykgPyBjaGlsZFZhbHVlcyA6IFtjaGlsZFZhbHVlc10pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1lcmdlSlNPTk9iamVjdChvbGRWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcGFyYW1ldGVySW52YWxpZCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdG9yKC4uLnZhbHVlczogQXJyYXk8YW55Pik6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuICAgIHJldHVybiBkZWNvcmF0b3IoKG5ld1ZhbHVlLCBwcm9wZXJ0eUtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICByZXR1cm4gaW5WYWxpZGF0b3IobmV3VmFsdWUsIHZhbHVlLCAuLi52YWx1ZXMpO1xyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyLCBNZXNzYWdlUXVldWVzIH0gZnJvbSAnLi4vdHlwZSc7XHJcbmltcG9ydCB7XHJcbiAgICBjaGVja0FycmF5RWFjaCwgY2hlY2tGdW5jdGlvbiwgY2hlY2tKU09OT2JqZWN0LCBjaGVja05vRW1wdHlPck51bGwsIGNoZWNrTm9OdWxsT3JVbmRlZmluZWRcclxufSBmcm9tICcuLi92YWxpZGF0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50QnVzIHtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRXZlbnRCdXM7XHJcbiAgICBwcml2YXRlIG1lc3NhZ2VRdWV1ZXM6IE1lc3NhZ2VRdWV1ZXMgPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlKCk6IEV2ZW50QnVzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UgPz8gbmV3IEV2ZW50QnVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uKGtleTogc3RyaW5nLCBoYW5kbGVyOiBFdmVudEhhbmRsZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChrZXkpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbiAgICAgICAgaWYgKCFjaGVja0Z1bmN0aW9uPEV2ZW50SGFuZGxlcj4oaGFuZGxlcikpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZVF1ZXVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleUhhbmRsZXIgPSB0aGlzLm1lc3NhZ2VRdWV1ZXNba2V5XTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrRnVuY3Rpb248RXZlbnRIYW5kbGVyPihrZXlIYW5kbGVyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlUXVldWVzW2tleV0gPSBba2V5SGFuZGxlciwgaGFuZGxlcl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tBcnJheUVhY2g8RXZlbnRIYW5kbGVyPihrZXlIYW5kbGVyLCBjaGVja0Z1bmN0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlUXVldWVzW2tleV0gPSBbLi4ua2V5SGFuZGxlciwgaGFuZGxlcl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB0aGlzLm1lc3NhZ2VRdWV1ZXNba2V5XSA9IGhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uZShrZXk6IHN0cmluZywgaGFuZGxlcjogRXZlbnRIYW5kbGVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoa2V5KSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgICAgIGlmICghY2hlY2tGdW5jdGlvbjxFdmVudEhhbmRsZXI+KGhhbmRsZXIpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlc1trZXldID0gaGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW1pdChrZXk6IHN0cmluZywgbWVzc2FnZTogYW55LCBzeW5jOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChrZXkpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbiAgICAgICAgaWYgKCFjaGVja05vTnVsbE9yVW5kZWZpbmVkKG1lc3NhZ2UpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VRdWV1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBrZXlIYW5kbGVyID0gdGhpcy5tZXNzYWdlUXVldWVzW2tleV07XHJcbiAgICAgICAgaWYgKGNoZWNrRnVuY3Rpb248RXZlbnRIYW5kbGVyPihrZXlIYW5kbGVyKSkge1xyXG4gICAgICAgICAgICBzeW5jID8ga2V5SGFuZGxlcihtZXNzYWdlKSA6XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGtleUhhbmRsZXIobWVzc2FnZSksIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjaGVja0FycmF5RWFjaDxFdmVudEhhbmRsZXI+KGtleUhhbmRsZXIsIGNoZWNrRnVuY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIGtleUhhbmRsZXIubWFwKGhhbmRsZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3luYyA/IGhhbmRsZXIobWVzc2FnZSkgOlxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaGFuZGxlcihtZXNzYWdlKSwgMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb2ZmKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoa2V5KSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlUXVldWVzLmhhc093blByb3BlcnR5KGtleSkpIHJldHVybjtcclxuICAgICAgICBkZWxldGUgdGhpcy5tZXNzYWdlUXVldWVzW2tleV07XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gcGFyYW1ldGVySW52YWxpZChtZXNzYWdlOiBzdHJpbmcgPSBcIlwiKTogbmV2ZXIge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHBhcmFtZXRlciR7bWVzc2FnZX0uYCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uLy4uL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IENTU0NsYXNzT3JVbmRlZmluZWQsIENTU0NsYXNzU2V0dGVyLCBIVE1MRWxlbWVudE9yTnVsbCB9IGZyb20gJy4uLy4uL3R5cGUnO1xyXG5pbXBvcnQgeyBjaGVja05vRW1wdHlPck51bGwsIGNoZWNrU3RyaW5nIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBjb25zdCBQUkVGSVg6IHN0cmluZyA9IFwibGF5eC1cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDU1NTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnRPck51bGwsIGNzc1N0eWxlczogQ1NTU3R5bGVEZWNsYXJhdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgZm9yIChjb25zdCBjc3NQcm9wIGluIGNzc1N0eWxlcykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGVbY3NzUHJvcF0gPSBjc3NTdHlsZXNbY3NzUHJvcF0gPz8gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ1NTQ2xhc3NlcyhlbGVtZW50OiBIVE1MRWxlbWVudE9yTnVsbCwgaGFuZGxlcjogQ1NTQ2xhc3NTZXR0ZXIsIC4uLmNzc0NsYXNzZXM6IEFycmF5PENTU0NsYXNzT3JVbmRlZmluZWQ+KTogSFRNTEVsZW1lbnRPck51bGwge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50Q1NTQ2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrL2cpO1xyXG4gICAgY3NzQ2xhc3Nlcy5mb3JFYWNoKChjc3NDbGFzcykgPT4ge1xyXG4gICAgICAgIGlmIChjc3NDbGFzcykge1xyXG4gICAgICAgICAgICBjb25zdCBjc3NDbGFzc05hbWUgPSBjc3NDbGFzcy5pbmRleE9mKFwiIVwiKSA9PT0gMCA/IGNzc0NsYXNzLnN1YnN0cigxKSA6IFBSRUZJWCArIGNzc0NsYXNzO1xyXG4gICAgICAgICAgICBjb25zdCBjc3NDbGFzc0luZGV4ID0gZWxlbWVudENTU0NsYXNzZXMuaW5kZXhPZihjc3NDbGFzc05hbWUpO1xyXG4gICAgICAgICAgICBoYW5kbGVyKGVsZW1lbnRDU1NDbGFzc2VzLCBjc3NDbGFzc0luZGV4LCBjc3NDbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50Q1NTQ2xhc3Nlcy5qb2luKFwiIFwiKS50cmltKCk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENTU0NsYXNzZXMoZWxlbWVudDogSFRNTEVsZW1lbnRPck51bGwsIC4uLmNzc0NsYXNzZXM6IEFycmF5PENTU0NsYXNzT3JVbmRlZmluZWQ+KTogSFRNTEVsZW1lbnRPck51bGwge1xyXG4gICAgcmV0dXJuIHVwZGF0ZUNTU0NsYXNzZXMoZWxlbWVudCwgKGVsZW1lbnRDU1NDbGFzc2VzLCBjc3NDbGFzc0luZGV4LCBjc3NDbGFzcykgPT4ge1xyXG4gICAgICAgIGlmICghfmNzc0NsYXNzSW5kZXgpIHtcclxuICAgICAgICAgICAgZWxlbWVudENTU0NsYXNzZXMucHVzaChjc3NDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgLi4uY3NzQ2xhc3Nlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDU1NDbGFzc2VzKGVsZW1lbnQ6IEhUTUxFbGVtZW50T3JOdWxsLCAuLi5jc3NDbGFzc2VzOiBzdHJpbmdbXSk6IEhUTUxFbGVtZW50T3JOdWxsIHtcclxuICAgIHJldHVybiB1cGRhdGVDU1NDbGFzc2VzKGVsZW1lbnQsIChlbGVtZW50Q1NTQ2xhc3NlcywgY3NzQ2xhc3NJbmRleCkgPT4ge1xyXG4gICAgICAgIGlmICh+Y3NzQ2xhc3NJbmRleCkge1xyXG4gICAgICAgICAgICBlbGVtZW50Q1NTQ2xhc3Nlcy5zcGxpY2UoY3NzQ2xhc3NJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgLi4uY3NzQ2xhc3Nlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNDU1NDbGFzcyhlbGVtZW50OiBIVE1MRWxlbWVudE9yTnVsbCwgY3NzQ2xhc3M6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudENTU0NsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy9nKTtcclxuICAgIGNvbnN0IGNzc0NsYXNzTmFtZSA9IGNzc0NsYXNzLmluZGV4T2YoXCIhXCIpID09PSAwID8gY3NzQ2xhc3Muc3Vic3RyKDEpIDogUFJFRklYICsgY3NzQ2xhc3M7XHJcbiAgICBjb25zdCBpbmRleCA9IGVsZW1lbnRDU1NDbGFzc2VzLmluZGV4T2YoY3NzQ2xhc3NOYW1lKTtcclxuICAgIHJldHVybiAhIX5pbmRleDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpdkVsZW1lbnQoaWQ/OiBzdHJpbmcpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGlmIChjaGVja1N0cmluZyhpZCkpIHtcclxuICAgICAgICBlbGVtZW50LmlkID0gUFJFRklYICsgaWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQobmFtZTogc3RyaW5nKTogU1ZHU1ZHRWxlbWVudCB7XHJcbiAgICBpZiAoY2hlY2tOb0VtcHR5T3JOdWxsKG5hbWUpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgY29uc3Qgc3ZnTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG4gICAgY29uc3QgbnNOYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcclxuXHJcbiAgICBjb25zdCBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgXCJzdmdcIik7XHJcbiAgICBjb25zdCB1c2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgXCJ1c2VcIik7XHJcbiAgICB1c2VFbGVtZW50LnNldEF0dHJpYnV0ZU5TKG5zTmFtZXNwYWNlLCBcInhsaW5rOmhyZWZcIiwgYCMke25hbWV9YCk7XHJcbiAgICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHVzZUVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIHN2Z0VsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIVE1MRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudE9yTnVsbCk6IHZvaWQge1xyXG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XHJcbiAgICBpZiAoIWVsZW1lbnQucGFyZW50RWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxufSIsImltcG9ydCB7IHBhcmFtZXRlckludmFsaWQgfSBmcm9tICcuLi8uLi9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyByZW1vdmVJbGxlZ2FsQ2hhcmFjdGVyIH0gZnJvbSAnLi4vLi4vaGVscGVyL3N0cmluZyc7XHJcbmltcG9ydCB7IEpTT05PYmplY3QgfSBmcm9tICcuLi8uLi90eXBlJztcclxuaW1wb3J0IHsgY2hlY2tKU09OT2JqZWN0LCBjaGVja05vRW1wdHlPck51bGwsIGNoZWNrTm9OdWxsT3JVbmRlZmluZWQgfSBmcm9tICcuLi8uLi92YWxpZGF0b3InO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lSlNPTk9iamVjdDxUIGV4dGVuZHMgSlNPTk9iamVjdD4oc291cmNlOiBUKTogVCB7XHJcbiAgICBjb25zdCBuZXdKU09OT2JqZWN0ID0gPGFueT57fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHNvdXJjZVtrZXldO1xyXG4gICAgICAgIG5ld0pTT05PYmplY3Rba2V5XSA9IGNoZWNrSlNPTk9iamVjdChrZXlWYWx1ZSlcclxuICAgICAgICAgICAgPyBjbG9uZUpTT05PYmplY3Qoa2V5VmFsdWUpIDoga2V5VmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPFQ+bmV3SlNPTk9iamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSlNPTk9iamVjdDxUIGV4dGVuZHMgSlNPTk9iamVjdD4oc291cmNlOiBULCBkZXN0OiBUKTogVCB7XHJcbiAgICBjb25zdCBuZXdKU09OT2JqZWN0ID0gY2xvbmVKU09OT2JqZWN0PGFueT4oc291cmNlKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkZXN0KSB7XHJcbiAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBkZXN0W2tleV07XHJcbiAgICAgICAgbmV3SlNPTk9iamVjdFtrZXldID0gY2hlY2tKU09OT2JqZWN0KG5ld0pTT05PYmplY3Rba2V5XSkgJiYgY2hlY2tKU09OT2JqZWN0KGtleVZhbHVlKVxyXG4gICAgICAgICAgICA/IG1lcmdlSlNPTk9iamVjdChuZXdKU09OT2JqZWN0W2tleV0sIGtleVZhbHVlKSA6IGtleVZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxUPm5ld0pTT05PYmplY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkT2JqZWN0PFQ+KHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBULCBzdGFydE9iamVjdDogSlNPTk9iamVjdCk6IFQge1xyXG4gICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwocGF0aCkgfHwgIWNoZWNrSlNPTk9iamVjdChzdGFydE9iamVjdCkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICBwYXRoID0gcmVtb3ZlSWxsZWdhbENoYXJhY3RlcihwYXRoKTtcclxuICAgIGlmIChwYXRoLmluZGV4T2YoXCIvXCIpID09PSAtMSkgcmV0dXJuIHN0YXJ0T2JqZWN0W3BhdGhdID8/IGRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICBjb25zdCBrZXlzID0gcGF0aC5zcGxpdChcIi9cIik7XHJcbiAgICBsZXQga2V5VmFsdWUgPSByZWFkT2JqZWN0KGtleXNbMF0sIGRlZmF1bHRWYWx1ZSwgc3RhcnRPYmplY3QpO1xyXG4gICAgaWYgKCFjaGVja05vTnVsbE9yVW5kZWZpbmVkKGtleVZhbHVlKSkgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaSArIDEgPj0ga2V5cy5sZW5ndGgpIGJyZWFrO1xyXG4gICAgICAgIGtleVZhbHVlID0gcmVhZE9iamVjdChrZXlzW2kgKyAxXSwgZGVmYXVsdFZhbHVlLCBrZXlWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ga2V5VmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheVNldFRvRmlyc3QoYXJyOiBBcnJheTxhbnk+LCBlbGU6IGFueSk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoYXJyW2ldID09PSBlbGUpIHtcclxuICAgICAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXJyLnVuc2hpZnQoZWxlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5UmVtb3ZlKGFycjogQXJyYXk8YW55PiwgZWxlOiBhbnkpOiB2b2lkIHtcclxuICAgIGFyci5zcGxpY2UoYXJyLmluZGV4T2YoZWxlKSwgMSk7XHJcbn0iLCJpbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgY2hlY2tOb0VtcHR5T3JOdWxsIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJbGxlZ2FsQ2hhcmFjdGVyKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICghY2hlY2tOb0VtcHR5T3JOdWxsKHN0cikpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHJcXG5cXHRcXHNdL2csIFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRm9ybWF0KHN0cjogc3RyaW5nLCAuLi5hcmdzOiBBcnJheTxhbnk+KTogc3RyaW5nIHtcclxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHN0cjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxceyR7aX1cXFxcfWAsICdnbScpLCBhcmdzW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHI7XHJcbn0iLCJpbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgcmVtb3ZlSWxsZWdhbENoYXJhY3RlciB9IGZyb20gJy4uL2hlbHBlci9zdHJpbmcnO1xyXG5pbXBvcnQge1xyXG4gICAgQmFzZVR5cGUsIENoZWNrVmFsaWRhdG9yLCBDb2xvclN0cmluZywgRnVuY3Rpb25WYWxpZGF0b3IsIEludGVnZXJOdW1iZXIsIEpTT05PYmplY3QsXHJcbiAgICBOb0VtcHR5T3JOdWxsU3RyaW5nLCBWYWx1ZVR5cGVcclxufSBmcm9tICcuLi90eXBlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Jhc2VUeXBlKGRhdGE6IGFueSwgLi4udHlwZU5hbWVzOiBCYXNlVHlwZVtdKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZU5hbWVzLmluZGV4T2YodHlwZW9mIGRhdGEpID4gLTE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1N0cmluZyhkYXRhOiBhbnkpOiBkYXRhIGlzIHN0cmluZyB7XHJcbiAgICByZXR1cm4gY2hlY2tCYXNlVHlwZShkYXRhLCBcInN0cmluZ1wiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQm9vbGVhbihkYXRhOiBhbnkpOiBkYXRhIGlzIGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrQmFzZVR5cGUoZGF0YSwgXCJib29sZWFuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOdW1iZXIoZGF0YTogYW55KTogZGF0YSBpcyBudW1iZXIge1xyXG4gICAgcmV0dXJuIGNoZWNrQmFzZVR5cGUoZGF0YSwgXCJudW1iZXJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Z1bmN0aW9uPFQ+KGRhdGE6IGFueSk6IGRhdGEgaXMgVCB7XHJcbiAgICByZXR1cm4gY2hlY2tCYXNlVHlwZShkYXRhLCBcImZ1bmN0aW9uXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGdW5jdGlvblZhbGlkYXRvcihkYXRhOiBhbnkpOiBkYXRhIGlzIEZ1bmN0aW9uVmFsaWRhdG9yIHtcclxuICAgIHJldHVybiBjaGVja0Z1bmN0aW9uPENoZWNrVmFsaWRhdG9yPihkYXRhKSB8fFxyXG4gICAgICAgIGNoZWNrQXJyYXkoZGF0YSkgJiYgY2hlY2tGdW5jdGlvbjxDaGVja1ZhbGlkYXRvcj4oZGF0YVswXSkgfHxcclxuICAgICAgICBjaGVja0FycmF5KGRhdGEpICYmIGNoZWNrQXJyYXkoZGF0YVswXSkgJiYgY2hlY2tGdW5jdGlvbjxDaGVja1ZhbGlkYXRvcj4oZGF0YVswXVswXSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1ZhbGlkYXRvcihkYXRhOiBhbnksIGZ1bmN0aW9uVmFsaWRhdG9yOiBGdW5jdGlvblZhbGlkYXRvcik6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGlzVHJ1ZSA9IHRydWU7XHJcbiAgICBpZiAoY2hlY2tGdW5jdGlvbjxDaGVja1ZhbGlkYXRvcj4oZnVuY3Rpb25WYWxpZGF0b3IpKSB7XHJcbiAgICAgICAgaWYgKCFmdW5jdGlvblZhbGlkYXRvcihkYXRhKSkgaXNUcnVlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjaGVja0FycmF5KGZ1bmN0aW9uVmFsaWRhdG9yKSAmJiBjaGVja0Z1bmN0aW9uPENoZWNrVmFsaWRhdG9yPihmdW5jdGlvblZhbGlkYXRvclswXSkpIHtcclxuICAgICAgICBjb25zdCBbdmFsaWRhdG9yLCAuLi5hcmdzXSA9IGZ1bmN0aW9uVmFsaWRhdG9yO1xyXG4gICAgICAgIGlmICghdmFsaWRhdG9yKGRhdGEsIC4uLmFyZ3MpKSBpc1RydWUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNoZWNrQXJyYXkoZnVuY3Rpb25WYWxpZGF0b3IpICYmIGNoZWNrQXJyYXkoZnVuY3Rpb25WYWxpZGF0b3JbMF0pICYmIGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGZ1bmN0aW9uVmFsaWRhdG9yWzBdWzBdKSkge1xyXG4gICAgICAgIGNvbnN0IFtjaGlsZFZhbGlkYXRvciwgLi4udmFsdWVzXSA9IGZ1bmN0aW9uVmFsaWRhdG9yO1xyXG4gICAgICAgIGlmICghY2hlY2tWYWxpZGF0b3IoZGF0YSwgY2hpbGRWYWxpZGF0b3IpICYmICFjaGVja0luKGRhdGEsIC4uLnZhbHVlcykpIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpc1RydWUgPSBmYWxzZTtcclxuICAgIHJldHVybiBpc1RydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0FycmF5KGRhdGE6IGFueSk6IGRhdGEgaXMgQXJyYXk8YW55PiB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXJyYXlFYWNoPFQ+KGRhdGE6IGFueSwgZnVuY3Rpb25WYWxpZGF0b3I6IEZ1bmN0aW9uVmFsaWRhdG9yKTogZGF0YSBpcyBBcnJheTxUPiB7XHJcbiAgICBpZiAoIWNoZWNrQXJyYXkoZGF0YSkpIHJldHVybiBmYWxzZTtcclxuICAgIGlmICghY2hlY2tGdW5jdGlvblZhbGlkYXRvcihmdW5jdGlvblZhbGlkYXRvcikpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBsZXQgaXNBcnJheVR5cGUgPSB0cnVlO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcclxuICAgICAgICBpc0FycmF5VHlwZSA9IGNoZWNrVmFsaWRhdG9yKGl0ZW0sIGZ1bmN0aW9uVmFsaWRhdG9yKTtcclxuICAgICAgICBpZiAoIWlzQXJyYXlUeXBlKSBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBpc0FycmF5VHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTm9OdWxsT3JVbmRlZmluZWQoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgIT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja09iamVjdChkYXRhOiBhbnkpOiBkYXRhIGlzIG9iamVjdCB7XHJcbiAgICByZXR1cm4gY2hlY2tCYXNlVHlwZShkYXRhLCBcIm9iamVjdFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSlNPTk9iamVjdChkYXRhOiBhbnkpOiBkYXRhIGlzIEpTT05PYmplY3Qge1xyXG4gICAgcmV0dXJuIGRhdGEgIT09IG51bGwgJiZcclxuICAgICAgICAhY2hlY2tBcnJheShkYXRhKSAmJlxyXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhKS50b0xvd2VyQ2FzZSgpID09PSBcIltvYmplY3Qgb2JqZWN0XVwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOdWxsKGRhdGE6IGFueSk6IGRhdGEgaXMgbnVsbCB7XHJcbiAgICByZXR1cm4gZGF0YSA9PT0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmVnRXhwKGRhdGE6IGFueSk6IGRhdGEgaXMgUmVnRXhwIHtcclxuICAgIHJldHVybiBkYXRhIGluc3RhbmNlb2YgUmVnRXhwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb2xvcihkYXRhOiBhbnkpOiBkYXRhIGlzIENvbG9yU3RyaW5nIHtcclxuICAgIGRhdGEgPSByZW1vdmVJbGxlZ2FsQ2hhcmFjdGVyKGRhdGEpO1xyXG4gICAgY29uc3QgYmluYXJ5UmVnRXhwID0gL14jKFswLTlhLWZdezZ9fFswLTlhLWZdezN9KSQvaTtcclxuICAgIGNvbnN0IHJnYlJlZ0V4cCA9IC9ecmdiXFwoKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwpJC9pO1xyXG4gICAgY29uc3QgcmdiYVJlZ0V4cCA9IC9ecmdiYVxcKChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLCgxfDEuMHwwLlswLTldKVxcKSQvaTtcclxuXHJcbiAgICByZXR1cm4gYmluYXJ5UmVnRXhwLnRlc3QoZGF0YSkgfHxcclxuICAgICAgICByZ2JSZWdFeHAudGVzdChkYXRhKSB8fFxyXG4gICAgICAgIHJnYmFSZWdFeHAudGVzdChkYXRhKSB8fFxyXG4gICAgICAgIGRhdGEgPT09IFwidHJhbnNwYXJlbnRcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTm9FbXB0eU9yTnVsbChkYXRhOiBhbnkpOiBkYXRhIGlzIE5vRW1wdHlPck51bGxTdHJpbmcge1xyXG4gICAgcmV0dXJuIGNoZWNrU3RyaW5nKGRhdGEpXHJcbiAgICAgICAgJiYgZGF0YS5sZW5ndGggPiAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbnQoZGF0YTogYW55KTogZGF0YSBpcyBJbnRlZ2VyTnVtYmVyIHtcclxuICAgIHJldHVybiBjaGVja051bWJlcihkYXRhKSAmJlxyXG4gICAgICAgICgvXlxcLT9bMC05XSskLy50ZXN0KGAke2RhdGF9YCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQc3RJbnQoZGF0YTogYW55KTogZGF0YSBpcyBJbnRlZ2VyTnVtYmVyIHtcclxuICAgIHJldHVybiBjaGVja0ludChkYXRhKVxyXG4gICAgICAgICYmIGRhdGEgPj0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUHN0TnVtYmVyKGRhdGE6IGFueSk6IGRhdGEgaXMgbnVtYmVyIHtcclxuICAgIHJldHVybiBjaGVja051bWJlcihkYXRhKVxyXG4gICAgICAgICYmIGRhdGEgPj0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29udGFpbnMoZGF0YTogYW55LCBjaGFyYWN0ZXI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoY2hhcmFjdGVyKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIHJldHVybiBjaGVja05vRW1wdHlPck51bGwoZGF0YSlcclxuICAgICAgICAmJiBkYXRhLmluZGV4T2YoY2hhcmFjdGVyKSA+IC0xO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbihkYXRhOiBhbnksIC4uLnZhbHVlczogQXJyYXk8VmFsdWVUeXBlPikge1xyXG4gICAgcmV0dXJuIGNoZWNrQmFzZVR5cGUoZGF0YSwgXCJib29sZWFuXCIsIFwibnVtYmVyXCIsIFwic3RyaW5nXCIsIFwidW5kZWZpbmVkXCIsIFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgdmFsdWVzLmluZGV4T2YoZGF0YSkgPiAtMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWluTGVuZ3RoKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja1N0cmluZyhkYXRhKSAmJlxyXG4gICAgICAgIGRhdGEubGVuZ3RoID49IHRocmVzaG9sZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWF4TGVuZ3RoKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja1N0cmluZyhkYXRhKSAmJlxyXG4gICAgICAgIGRhdGEubGVuZ3RoIDw9IHRocmVzaG9sZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTGVuZ3RoKGRhdGE6IGFueSwgbWluVGhyZXNob2xkOiBudW1iZXIsIG1heFRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAobWluVGhyZXNob2xkID49IG1heFRocmVzaG9sZCkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIHJldHVybiBjaGVja01pbkxlbmd0aChkYXRhLCBtaW5UaHJlc2hvbGQpICYmXHJcbiAgICAgICAgY2hlY2tNaW5MZW5ndGgoZGF0YSwgbWF4VGhyZXNob2xkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWluKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja051bWJlcihkYXRhKSAmJlxyXG4gICAgICAgIGRhdGEgPj0gdGhyZXNob2xkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKGRhdGEpICYmXHJcbiAgICAgICAgZGF0YSA8PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JhbmdlKGRhdGE6IGFueSwgbWluVGhyZXNob2xkOiBudW1iZXIsIG1heFRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAobWluVGhyZXNob2xkID49IG1heFRocmVzaG9sZCkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIHJldHVybiBjaGVja01pbihkYXRhLCBtaW5UaHJlc2hvbGQpICYmXHJcbiAgICAgICAgY2hlY2tNYXgoZGF0YSwgbWF4VGhyZXNob2xkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWF0Y2goZGF0YTogYW55LCByZWdleDogUmVnRXhwKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcmVnZXgudGVzdChkYXRhKTtcclxufSIsImltcG9ydCAnLi4vYXNzZXQnO1xyXG5cclxuaW1wb3J0IHsgVUlXaW5kb3cgfSBmcm9tICcuLi9jb21wb25lbnQvdWktd2luZG93JztcclxuaW1wb3J0IHtcclxuICAgIEFuaW1hdGlvbk9wdGlvbmFsLCBCb3JkZXJTdHlsZU9wdGlvbmFsLCBXSU5ET1dfQ1JFQVRFLCBXSU5ET1dfREVTVFJPWSwgV0lORE9XX0ZPQ1VTXHJcbn0gZnJvbSAnLi4vY29uc3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxVSVdpbmRvd09wdGlvbkNvbnRyYWN0IH0gZnJvbSAnLi4vY29udHJhY3QnO1xyXG5pbXBvcnQgeyB2YWxpZGF0b3IgfSBmcm9tICcuLi9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSAnLi4vY29yZS9ldmVudC1idXMnO1xyXG5pbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vY29yZS9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyBhcnJheVJlbW92ZSwgYXJyYXlTZXRUb0ZpcnN0IH0gZnJvbSAnLi4vY29yZS9oZWxwZXIvb2JqZWN0JztcclxuaW1wb3J0IHsgRXZlbnRTZXR0ZXIgfSBmcm9tICcuLi9jb3JlL3R5cGUnO1xyXG5pbXBvcnQge1xyXG4gICAgY2hlY2tGdW5jdGlvbiwgY2hlY2tKU09OT2JqZWN0LCBjaGVja01pbiwgY2hlY2tOb0VtcHR5T3JOdWxsLCBjaGVja1BzdEludFxyXG59IGZyb20gJy4uL2NvcmUvdmFsaWRhdG9yJztcclxuaW1wb3J0IHtcclxuICAgIEVudHJ5T3B0aW9uLCBFdmVudE1lc3NhZ2UsIEdsb2JhbFVJV2luZG93T3B0aW9uLCBVSVdpbmRvd09wdGlvbiwgV2luZG93RXZlbnRNZXNzYWdlXHJcbn0gZnJvbSAnLi4vdHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50cnkge1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihvcHRpb25zOiBFbnRyeU9wdGlvbikge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlck9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5tb25pdG9yRXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRW50cnk7XHJcblxyXG4gICAgcHJpdmF0ZSBldmVudEJ1czogRXZlbnRCdXMgPSBFdmVudEJ1cy5JbnN0YW5jZSgpO1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSB2ZXJzaW9uOiBzdHJpbmcgPSBcIjMuMFwiO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoY2hlY2tQc3RJbnQsIFtjaGVja01pbiwgMTAwMF0pXHJcbiAgICBwdWJsaWMgc3RhcnRaSW5kZXg6IG51bWJlciA9IDEwMDAwMDAwO1xyXG5cclxuICAgIEB2YWxpZGF0b3IoR2xvYmFsVUlXaW5kb3dPcHRpb25Db250cmFjdClcclxuICAgIHB1YmxpYyB3aW5kb3dPcHRpb246IEdsb2JhbFVJV2luZG93T3B0aW9uID0ge1xyXG4gICAgICAgIHdpZHRoOiA4MDAsXHJcbiAgICAgICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgbWluV2lkdGg6IDIwMCxcclxuICAgICAgICBtaW5IZWlnaHQ6IDIwMCxcclxuICAgICAgICBtYXhXaWR0aDogaW5uZXJXaWR0aCxcclxuICAgICAgICBtYXhIZWlnaHQ6IGlubmVySGVpZ2h0LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiB7XHJcbiAgICAgICAgICAgIG9mZnNldFg6IDEsXHJcbiAgICAgICAgICAgIG9mZnNldFk6IDEsXHJcbiAgICAgICAgICAgIGJsdXJSYWRpdXM6IDEyLFxyXG4gICAgICAgICAgICBzcHJlYWRSYWRpdXM6IDEsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC4yKVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbmltYXRlOiBBbmltYXRpb25PcHRpb25hbC5aT09NLFxyXG4gICAgICAgIGJvcmRlcjoge1xyXG4gICAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgICAgc3R5bGU6IEJvcmRlclN0eWxlT3B0aW9uYWwuU09MSUQsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiNkNWQ1ZDVcIixcclxuICAgICAgICAgICAgcmFkaXVzOiA0XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIF96SW5kZXg6IG51bWJlciA9IHRoaXMuc3RhcnRaSW5kZXg7XHJcbiAgICBnZXQgekluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl96SW5kZXggPSB0aGlzLl96SW5kZXggKyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3dpbmRvd3M6IEFycmF5PFVJV2luZG93PiA9IFtdO1xyXG4gICAgZ2V0IHdpbmRvd3MoKTogQXJyYXk8VUlXaW5kb3c+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2luZG93cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF93aW5kb3c6IFVJV2luZG93IHwgbnVsbCA9IG51bGw7XHJcbiAgICBnZXQgd2luZG93KCk6IFVJV2luZG93IHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpbmRvdztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlKG9wdGlvbnM6IEVudHJ5T3B0aW9uID0ge30pOiBFbnRyeSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB0aGlzLmluc3RhbmNlID0gbmV3IEVudHJ5KG9wdGlvbnMpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5pbnN0YW5jZS5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZXJPcHRpb25zKG9wdGlvbnM6IEVudHJ5T3B0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fekluZGV4ID0gdGhpcy5zdGFydFpJbmRleCA9IG9wdGlvbnM/LnN0YXJ0WkluZGV4ID8/IHRoaXMuc3RhcnRaSW5kZXg7XHJcbiAgICAgICAgdGhpcy53aW5kb3dPcHRpb24gPSBvcHRpb25zPy53aW5kb3dPcHRpb24gPz8gdGhpcy53aW5kb3dPcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb25pdG9yRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ldmVudEJ1cy5vbihXSU5ET1dfQ1JFQVRFLCAobWVzc2FnZTogRXZlbnRNZXNzYWdlPFdpbmRvd0V2ZW50TWVzc2FnZT4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fd2luZG93cy51bnNoaWZ0KG1lc3NhZ2UuZGF0YXNldC50YXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50QnVzLm9uKFdJTkRPV19GT0NVUywgKG1lc3NhZ2U6IEV2ZW50TWVzc2FnZTxXaW5kb3dFdmVudE1lc3NhZ2U+KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IG1lc3NhZ2UuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvdyA9IHdpbmRvdztcclxuICAgICAgICAgICAgYXJyYXlTZXRUb0ZpcnN0KHRoaXMuX3dpbmRvd3MsIHdpbmRvdyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRCdXMub24oV0lORE9XX0RFU1RST1ksIChtZXNzYWdlOiBFdmVudE1lc3NhZ2U8V2luZG93RXZlbnRNZXNzYWdlPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBtZXNzYWdlLmRhdGFzZXQudGFyZ2V0O1xyXG4gICAgICAgICAgICBhcnJheVJlbW92ZSh0aGlzLl93aW5kb3dzLCB3aW5kb3cpO1xyXG4gICAgICAgICAgICB0aGlzLl93aW5kb3cgPSB0aGlzLl93aW5kb3dzLmxlbmd0aCA+IDAgPyB0aGlzLl93aW5kb3dzWzBdIDogbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb24oZXZlbnRTZXR0ZXI6IEV2ZW50U2V0dGVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjaGVja0pTT05PYmplY3QoZXZlbnRTZXR0ZXIpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGV2ZW50U2V0dGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBldmVudFNldHRlcltrZXldO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tGdW5jdGlvbihoYW5kbGVyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEJ1cy5vbihrZXksIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuKG9wdGlvbnM6IFVJV2luZG93T3B0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwob3B0aW9ucz8uaWQpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0V2luZG93KG9wdGlvbnMuaWQpKSBwYXJhbWV0ZXJJbnZhbGlkKGA6IFdpbmRvdyBJRCAnJHtvcHRpb25zLmlkfScgYWxyZWFkeSBleGlzdHNgKTtcclxuXHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgY29uc3QgdWlXaW5kb3cgPSBuZXcgVUlXaW5kb3cob3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgdWlXaW5kb3dFbGVtZW50ID0gdWlXaW5kb3cuY3JlYXRlVmlldygpO1xyXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHVpV2luZG93RWxlbWVudCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1aVdpbmRvd0VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRXaW5kb3coaWQ6IHN0cmluZyk6IFVJV2luZG93IHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoaWQpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaHMgPSB0aGlzLl93aW5kb3dzLmZpbHRlcih3aW4gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luLmlkID09PSBpZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc2VhcmNocy5sZW5ndGggPiAwID8gc2VhcmNoc1swXSA6IG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3Rpb25PcHRpb25hbCB9IGZyb20gJy4uL2NvbnN0JztcclxuaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uL2NvcmUvZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgY2hlY2tBcnJheUVhY2gsIGNoZWNrUHN0TnVtYmVyIH0gZnJvbSAnLi4vY29yZS92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb25PckNvb3JkIH0gZnJvbSAnLi4vdHlwZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERpcmVjdGlvbih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZGlyZWN0aW9uT3JDb29yZD86IERpcmVjdGlvbk9yQ29vcmQpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGlmICghY2hlY2tQc3ROdW1iZXIod2lkdGgpIHx8ICFjaGVja1BzdE51bWJlcihoZWlnaHQpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbk9yQ29vcmQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIChpbm5lckhlaWdodCAtIGhlaWdodCkgLyAyXTtcclxuXHJcbiAgICBpZiAoY2hlY2tBcnJheUVhY2g8bnVtYmVyPihkaXJlY3Rpb25PckNvb3JkLCBjaGVja1BzdE51bWJlcikpIHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uT3JDb29yZC5sZW5ndGggIT09IDIpIHBhcmFtZXRlckludmFsaWQoKTtcclxuICAgICAgICByZXR1cm4gW2RpcmVjdGlvbk9yQ29vcmRbMF0sIGRpcmVjdGlvbk9yQ29vcmRbMV1dO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uT3JDb29yZCkge1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuQ0VOVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4gWyhpbm5lcldpZHRoIC0gd2lkdGgpIC8gMiwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuVE9QX0NFTlRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIDBdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuQk9UVE9NX0NFTlRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIFsoaW5uZXJXaWR0aCAtIHdpZHRoKSAvIDIsIGlubmVySGVpZ2h0IC0gaGVpZ2h0XTtcclxuICAgICAgICBjYXNlIERpcmVjdGlvbk9wdGlvbmFsLkxFRlRfVE9QOlxyXG4gICAgICAgICAgICByZXR1cm4gWzAsIDBdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuTEVGVF9NSURETEU6XHJcbiAgICAgICAgICAgIHJldHVybiBbMCwgKGlubmVySGVpZ2h0IC0gaGVpZ2h0KSAvIDJdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuTEVGVF9CT1RUT006XHJcbiAgICAgICAgICAgIHJldHVybiBbMCwgaW5uZXJIZWlnaHQgLSBoZWlnaHRdO1xyXG4gICAgICAgIGNhc2UgRGlyZWN0aW9uT3B0aW9uYWwuUklHSFRfVE9QOlxyXG4gICAgICAgICAgICByZXR1cm4gW2lubmVyV2lkdGggLSB3aWR0aCwgMF07XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb25PcHRpb25hbC5SSUdIVF9NSURETEU6XHJcbiAgICAgICAgICAgIHJldHVybiBbaW5uZXJXaWR0aCAtIHdpZHRoLCAoaW5uZXJIZWlnaHQgLSBoZWlnaHQpIC8gMl07XHJcbiAgICAgICAgY2FzZSBEaXJlY3Rpb25PcHRpb25hbC5SSUdIVF9CT1RUT006XHJcbiAgICAgICAgICAgIHJldHVybiBbaW5uZXJXaWR0aCAtIHdpZHRoLCBpbm5lckhlaWdodCAtIGhlaWdodF07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcGFyYW1ldGVySW52YWxpZCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50cnkgfSBmcm9tICcuL2VudHJ5JztcclxuaW1wb3J0IHsgRW50cnlPcHRpb24sIE92ZXJ0IH0gZnJvbSAnLi90eXBlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBvdmVydCgpOiBPdmVydCB7XHJcbiAgICBjb25zdCBlbnRyeSA9IEVudHJ5Lkluc3RhbmNlKCk7XHJcbiAgICBjb25zdCBvdmVydCA9IDxPdmVydD5mdW5jdGlvbiAob3B0aW9uczogRW50cnlPcHRpb24pIHtcclxuICAgICAgICBFbnRyeS5JbnN0YW5jZShvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBvdmVydC52ZXJzaW9uID0gZW50cnkudmVyc2lvbjtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG92ZXJ0LCB7XHJcbiAgICAgICAgd2luZG93OiB7IGdldDogKCkgPT4gZW50cnkud2luZG93IH0sXHJcbiAgICAgICAgd2luZG93czogeyBnZXQ6ICgpID0+IGVudHJ5LndpbmRvd3MgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcnQub24gPSBlbnRyeS5vbi5iaW5kKGVudHJ5KTtcclxuICAgIG92ZXJ0Lm9wZW4gPSBlbnRyeS5vcGVuLmJpbmQoZW50cnkpO1xyXG4gICAgb3ZlcnQuZ2V0V2luZG93ID0gZW50cnkuZ2V0V2luZG93LmJpbmQoZW50cnkpO1xyXG5cclxuICAgIHJldHVybiBvdmVydDtcclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==