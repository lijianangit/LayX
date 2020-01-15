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

/***/ "./app/const.ts":
/*!**********************!*\
  !*** ./app/const.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TextAlign;
(function (TextAlign) {
    TextAlign["LEFT"] = "left";
    TextAlign["CENTER"] = "center";
    TextAlign["RIGHT"] = "right";
})(TextAlign = exports.TextAlign || (exports.TextAlign = {}));
;
var BuiltInICON;
(function (BuiltInICON) {
    BuiltInICON["ICON"] = "icon";
})(BuiltInICON = exports.BuiltInICON || (exports.BuiltInICON = {}));
;
exports.VERSION = "3.0.0";
exports.DEFAULT_START_ZINDEX = 10000000;
exports.DEFAULT_WINDOW_WIDTH = 800;
exports.DEFAULT_WINDOW_HEIGHT = 600;
exports.DEFAULT_WINDOW_BACKGROUND_COLOR = "#ffffff";
exports.DEFAULT_TOOLBAR_HEIGHT = 30;
exports.DEFAULT_TOOLBAR_BACKGROUND_COLOR = "#ffffff";
exports.DEFAULT_TITLEBAR_LABEL = "未命名";
exports.DEFAULT_TITLEBAR_COLOR = "#000000";
exports.DEFAULT_TITLEBAR_ALIGN = "left";
exports.DEFAULT_TITLEBAR_FONT_SIZE = 14;
exports.DEFAULT_TOOLBAR_ICON_NAME = "icon";
exports.DEFAULT_TOOLBAR_ICON_COLOR = "#000000";
exports.DEFAULT_TOOLBAR_ICON_SIZE = 14;
exports.DEFAULT_TOOLBAR_ICON_OPTION = {
    name: exports.DEFAULT_TOOLBAR_ICON_NAME,
    color: exports.DEFAULT_TOOLBAR_ICON_COLOR,
    size: exports.DEFAULT_TOOLBAR_ICON_SIZE,
    path: null
};
exports.DEFAULT_TITLEBAR_OPTION = {
    label: exports.DEFAULT_TITLEBAR_LABEL,
    color: exports.DEFAULT_TITLEBAR_COLOR,
    align: exports.DEFAULT_TITLEBAR_ALIGN,
    fontSize: exports.DEFAULT_TITLEBAR_FONT_SIZE
};
exports.DEFAULT_TOOLBAR_OPTION = {
    height: exports.DEFAULT_TOOLBAR_HEIGHT,
    backgroundColor: exports.DEFAULT_TOOLBAR_BACKGROUND_COLOR,
    titleBar: exports.DEFAULT_TITLEBAR_OPTION,
    icon: exports.DEFAULT_TOOLBAR_ICON_OPTION
};
exports.DEFAULT_WINDOW_OPTION = {
    width: exports.DEFAULT_WINDOW_WIDTH,
    height: exports.DEFAULT_WINDOW_HEIGHT,
    backgroundColor: exports.DEFAULT_WINDOW_BACKGROUND_COLOR,
    toolBar: exports.DEFAULT_TOOLBAR_OPTION,
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
    throw new Error("Invalid parameter." + message);
}
exports.parameterInvalid = parameterInvalid;


/***/ }),

/***/ "./app/core/helper/object/index.ts":
/*!*****************************************!*\
  !*** ./app/core/helper/object/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
var const_1 = __webpack_require__(/*! ../const */ "./app/const.ts");
var property_1 = __webpack_require__(/*! ../core/decorator/property */ "./app/core/decorator/property/index.ts");
var validator_1 = __webpack_require__(/*! ../core/validator */ "./app/core/validator/index.ts");
var Entry = (function () {
    function Entry(options) {
        this.version = const_1.VERSION;
        this.startZIndex = const_1.DEFAULT_START_ZINDEX;
        this.window = const_1.DEFAULT_WINDOW_OPTION;
        this.handlerOptions(options);
    }
    Entry.prototype.handlerOptions = function (options) {
        var _a, _b, _c, _d;
        this.startZIndex = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.startZIndex, (_b !== null && _b !== void 0 ? _b : this.startZIndex));
        this.window = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.window, (_d !== null && _d !== void 0 ? _d : this.window));
    };
    Entry.Instance = function (options) {
        if (options === void 0) { options = {}; }
        if (!this.instance)
            this.instance = new Entry(options);
        else
            this.instance.handlerOptions(options);
        return this.instance;
    };
    __decorate([
        property_1.validator(validator_1.checkPstInt, [validator_1.checkMin, 1000])
    ], Entry.prototype, "startZIndex", void 0);
    __decorate([
        property_1.validator({
            width: validator_1.checkPstNumber, height: validator_1.checkPstNumber, backgroundColor: validator_1.checkColor,
            toolBar: [{
                    height: validator_1.checkPstNumber, backgroundColor: validator_1.checkColor,
                    titleBar: [{ label: validator_1.checkString, color: validator_1.checkColor, align: [validator_1.checkIn, "left", "center", "right"], fontSize: validator_1.checkPstInt }, false],
                    icon: [{ name: [validator_1.checkString, null], color: [validator_1.checkColor, null], size: validator_1.checkPstInt, path: [validator_1.checkString, null] }, false]
                }, false]
        })
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
    return overt;
})();


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9hcHAvY29uc3QudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2RlY29yYXRvci9wcm9wZXJ0eS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvcmUvZXhjZXB0aW9uL2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9oZWxwZXIvb2JqZWN0L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS92YWxpZGF0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9lbnRyeS9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxp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LFFBQVEsRUFBRSx1QkFBVyxFQUFFLEVBQUUsS0FBSyxDQUFDO29CQUN4SixJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLHVCQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsc0JBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsdUJBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyx1QkFBVyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO2lCQUN4SCxFQUFFLEtBQUssQ0FBQztTQUNaLENBQUM7eUNBQ3lEO0lBTy9ELFlBQUM7Q0FBQTtBQTlCWSxzQkFBSzs7Ozs7Ozs7Ozs7Ozs7O0FDUGxCLHlFQUFnQztBQUdoQyxrQkFBZSxDQUFDLFNBQVMsS0FBSztJQUMxQixJQUFNLEtBQUssR0FBRyxhQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsSUFBTSxLQUFLLEdBQVUsVUFBVSxPQUFvQjtRQUMvQyxhQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQztJQUNGLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM5QixPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImxheXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsYXl4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxheXhcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHtcclxuICAgIEVudHJ5VUlUaXRsZUJhck9wdGlvbiwgRW50cnlVSVRvb2xCYXJJQ09OT3B0aW9uLCBFbnRyeVVJVG9vbEJhck9wdGlvbiwgRW50cnlVSVdpbmRvd09wdGlvblxyXG59IGZyb20gJy4vZW50cnkvdHlwZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBUZXh0QWxpZ24geyBMRUZUID0gXCJsZWZ0XCIsIENFTlRFUiA9IFwiY2VudGVyXCIsIFJJR0hUID0gXCJyaWdodFwiIH07XHJcbmV4cG9ydCBjb25zdCBlbnVtIEJ1aWx0SW5JQ09OIHsgSUNPTiA9IFwiaWNvblwiIH07XHJcblxyXG5leHBvcnQgY29uc3QgVkVSU0lPTjogc3RyaW5nID0gXCIzLjAuMFwiO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9TVEFSVF9aSU5ERVg6IG51bWJlciA9IDEwMDAwMDAwO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9XSU5ET1dfV0lEVEg6IG51bWJlciA9IDgwMDtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0lORE9XX0hFSUdIVDogbnVtYmVyID0gNjAwO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9XSU5ET1dfQkFDS0dST1VORF9DT0xPUjogc3RyaW5nID0gXCIjZmZmZmZmXCI7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RPT0xCQVJfSEVJR0hUOiBudW1iZXIgPSAzMDtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTEJBUl9CQUNLR1JPVU5EX0NPTE9SOiBzdHJpbmcgPSBcIiNmZmZmZmZcIjtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElUTEVCQVJfTEFCRUw6IHN0cmluZyA9IFwi5pyq5ZG95ZCNXCI7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJVExFQkFSX0NPTE9SOiBzdHJpbmcgPSBcIiMwMDAwMDBcIjtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElUTEVCQVJfQUxJR046IFRleHRBbGlnbiA9IFRleHRBbGlnbi5MRUZUO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9USVRMRUJBUl9GT05UX1NJWkU6IG51bWJlciA9IDE0O1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9UT09MQkFSX0lDT05fTkFNRTogc3RyaW5nID0gQnVpbHRJbklDT04uSUNPTjtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTEJBUl9JQ09OX0NPTE9SOiBzdHJpbmcgPSBcIiMwMDAwMDBcIjtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTEJBUl9JQ09OX1NJWkU6IG51bWJlciA9IDE0O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RPT0xCQVJfSUNPTl9PUFRJT046IEVudHJ5VUlUb29sQmFySUNPTk9wdGlvbiA9IHtcclxuICAgIG5hbWU6IERFRkFVTFRfVE9PTEJBUl9JQ09OX05BTUUsXHJcbiAgICBjb2xvcjogREVGQVVMVF9UT09MQkFSX0lDT05fQ09MT1IsXHJcbiAgICBzaXplOiBERUZBVUxUX1RPT0xCQVJfSUNPTl9TSVpFLFxyXG4gICAgcGF0aDogbnVsbFxyXG59O1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9USVRMRUJBUl9PUFRJT046IEVudHJ5VUlUaXRsZUJhck9wdGlvbiA9IHtcclxuICAgIGxhYmVsOiBERUZBVUxUX1RJVExFQkFSX0xBQkVMLFxyXG4gICAgY29sb3I6IERFRkFVTFRfVElUTEVCQVJfQ09MT1IsXHJcbiAgICBhbGlnbjogREVGQVVMVF9USVRMRUJBUl9BTElHTixcclxuICAgIGZvbnRTaXplOiBERUZBVUxUX1RJVExFQkFSX0ZPTlRfU0laRVxyXG59O1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9UT09MQkFSX09QVElPTjogRW50cnlVSVRvb2xCYXJPcHRpb24gPSB7XHJcbiAgICBoZWlnaHQ6IERFRkFVTFRfVE9PTEJBUl9IRUlHSFQsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IERFRkFVTFRfVE9PTEJBUl9CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgdGl0bGVCYXI6IERFRkFVTFRfVElUTEVCQVJfT1BUSU9OLFxyXG4gICAgaWNvbjogREVGQVVMVF9UT09MQkFSX0lDT05fT1BUSU9OXHJcbn07XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1dJTkRPV19PUFRJT046IEVudHJ5VUlXaW5kb3dPcHRpb24gPSB7XHJcbiAgICB3aWR0aDogREVGQVVMVF9XSU5ET1dfV0lEVEgsXHJcbiAgICBoZWlnaHQ6IERFRkFVTFRfV0lORE9XX0hFSUdIVCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogREVGQVVMVF9XSU5ET1dfQkFDS0dST1VORF9DT0xPUixcclxuICAgIHRvb2xCYXI6IERFRkFVTFRfVE9PTEJBUl9PUFRJT04sXHJcbn1cclxuIiwiaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uLy4uL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IG1lcmdlSlNPTk9iamVjdCB9IGZyb20gJy4uLy4uL2hlbHBlci9vYmplY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgY2hlY2tBcnJheSwgY2hlY2tCYXNlVHlwZSwgY2hlY2tGdW5jdGlvbiwgY2hlY2tGdW5jdGlvblZhbGlkYXRvciwgY2hlY2tJbiwgY2hlY2tKU09OT2JqZWN0LFxyXG4gICAgY2hlY2tWYWxpZGF0b3JcclxufSBmcm9tICcuLi8uLi92YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBGdW5jdGlvblZhbGlkYXRvciwgSlNPTk9iamVjdCwgVmFsdWVUeXBlIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yL3R5cGUnO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eVNldHRlciB9IGZyb20gJy4vdHlwZSc7XHJcblxyXG5mdW5jdGlvbiBkZWNvcmF0b3IocHJvcGVydHlTZXR0ZXI6IFByb3BlcnR5U2V0dGVyKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgaWYgKCFjaGVja0Z1bmN0aW9uPFByb3BlcnR5U2V0dGVyPihwcm9wZXJ0eVNldHRlcikpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleSkgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wZXJ0eUtleV07XHJcbiAgICAgICAgdmFyIHByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZ2V0OiAoKSA9PiB2YWx1ZSxcclxuICAgICAgICAgICAgc2V0OiAobmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eURlc2NyaXB0b3IgJiYgcHJvcGVydHlEZXNjcmlwdG9yLnNldCkgcHJvcGVydHlEZXNjcmlwdG9yLnNldChuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHByb3BlcnR5U2V0dGVyKG5ld1ZhbHVlLCBwcm9wZXJ0eUtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluVmFsaWRhdG9yKG5ld1ZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnksIC4uLnZhbHVlczogQXJyYXk8YW55Pik6IGFueSB7XHJcbiAgICBjb25zdCB2YWx1ZU9wdGlvbnM6IEFycmF5PFZhbHVlVHlwZT4gPSBbXTtcclxuICAgIGNvbnN0IGZ1bmN0aW9uVmFsaWRhdG9yczogQXJyYXk8RnVuY3Rpb25WYWxpZGF0b3I+ID0gW107XHJcbiAgICBjb25zdCBvYmplY3RWYWxpZGF0b3JzOiBBcnJheTxKU09OT2JqZWN0PiA9IFtdO1xyXG5cclxuICAgIHZhbHVlcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwgfHwgY2hlY2tCYXNlVHlwZShpdGVtLCBcInN0cmluZ1wiLCBcImJpZ2ludFwiLCBcImJvb2xlYW5cIiwgXCJzeW1ib2xcIiwgXCJ1bmRlZmluZWRcIikpIHZhbHVlT3B0aW9ucy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIGlmIChjaGVja0Z1bmN0aW9uVmFsaWRhdG9yKGl0ZW0pKSBmdW5jdGlvblZhbGlkYXRvcnMucHVzaChpdGVtKTtcclxuICAgICAgICBpZiAoY2hlY2tKU09OT2JqZWN0KGl0ZW0pKSBvYmplY3RWYWxpZGF0b3JzLnB1c2goaXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoY2hlY2tJbihuZXdWYWx1ZSwgLi4udmFsdWVPcHRpb25zKSkgcmV0dXJuIG5ld1ZhbHVlO1xyXG5cclxuICAgIGlmIChmdW5jdGlvblZhbGlkYXRvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBpc1Bhc3NBbGxGdW5jdGlvblZhbGlkYXRvciA9IHRydWU7XHJcbiAgICAgICAgZm9yIChjb25zdCBmdW5jdGlvblZhbGlkYXRvciBvZiBmdW5jdGlvblZhbGlkYXRvcnMpIHtcclxuICAgICAgICAgICAgaXNQYXNzQWxsRnVuY3Rpb25WYWxpZGF0b3IgPSBjaGVja1ZhbGlkYXRvcihuZXdWYWx1ZSwgZnVuY3Rpb25WYWxpZGF0b3IpO1xyXG4gICAgICAgICAgICBpZiAoIWlzUGFzc0FsbEZ1bmN0aW9uVmFsaWRhdG9yKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzUGFzc0FsbEZ1bmN0aW9uVmFsaWRhdG9yKSByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoZWNrSlNPTk9iamVjdChuZXdWYWx1ZSkgJiYgb2JqZWN0VmFsaWRhdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgW2ZpcnN0VmFsaWRhdG9yLF0gPSBvYmplY3RWYWxpZGF0b3JzO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkVmFsdWVzID0gZmlyc3RWYWxpZGF0b3Jba2V5XTtcclxuICAgICAgICAgICAgaW5WYWxpZGF0b3IobmV3VmFsdWVba2V5XSwgb2xkVmFsdWUsIC4uLihjaGVja0FycmF5KGNoaWxkVmFsdWVzKSA/IGNoaWxkVmFsdWVzIDogW2NoaWxkVmFsdWVzXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWVyZ2VKU09OT2JqZWN0KG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0b3IoLi4udmFsdWVzOiBBcnJheTxhbnk+KTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGRlY29yYXRvcigobmV3VmFsdWUsIHByb3BlcnR5S2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpblZhbGlkYXRvcihuZXdWYWx1ZSwgdmFsdWUsIC4uLnZhbHVlcyk7XHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJJbnZhbGlkKG1lc3NhZ2U6IHN0cmluZyA9IFwiXCIpOiBuZXZlciB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcGFyYW1ldGVyLiR7bWVzc2FnZX1gKTtcclxufSIsImltcG9ydCB7IGNoZWNrSlNPTk9iamVjdCB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IEpTT05PYmplY3QgfSBmcm9tICcuLi8uLi92YWxpZGF0b3IvdHlwZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVKU09OT2JqZWN0PFQgZXh0ZW5kcyBKU09OT2JqZWN0Pihzb3VyY2U6IFQpOiBUIHtcclxuICAgIGNvbnN0IG5ld0pTT05PYmplY3QgPSA8YW55Pnt9O1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xyXG4gICAgICAgIGNvbnN0IGtleVZhbHVlID0gc291cmNlW2tleV07XHJcbiAgICAgICAgbmV3SlNPTk9iamVjdFtrZXldID0gY2hlY2tKU09OT2JqZWN0KGtleVZhbHVlKVxyXG4gICAgICAgICAgICA/IGNsb25lSlNPTk9iamVjdChrZXlWYWx1ZSkgOiBrZXlWYWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiA8VD5uZXdKU09OT2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VKU09OT2JqZWN0PFQgZXh0ZW5kcyBKU09OT2JqZWN0Pihzb3VyY2U6IFQsIGRlc3Q6IFQpOiBUIHtcclxuICAgIGNvbnN0IG5ld0pTT05PYmplY3QgPSBjbG9uZUpTT05PYmplY3Q8YW55Pihzb3VyY2UpO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRlc3QpIHtcclxuICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IGRlc3Rba2V5XTtcclxuICAgICAgICBuZXdKU09OT2JqZWN0W2tleV0gPSBjaGVja0pTT05PYmplY3QobmV3SlNPTk9iamVjdFtrZXldKSAmJiBjaGVja0pTT05PYmplY3Qoa2V5VmFsdWUpXHJcbiAgICAgICAgICAgID8gbWVyZ2VKU09OT2JqZWN0KG5ld0pTT05PYmplY3Rba2V5XSwga2V5VmFsdWUpIDoga2V5VmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPFQ+bmV3SlNPTk9iamVjdDtcclxufSIsImltcG9ydCB7IHBhcmFtZXRlckludmFsaWQgfSBmcm9tICcuLi9leGNlcHRpb24nO1xyXG5pbXBvcnQge1xyXG4gICAgQmFzZVR5cGUsIENoZWNrVmFsaWRhdG9yLCBDb2xvclN0cmluZywgRnVuY3Rpb25WYWxpZGF0b3IsIEludGVnZXJOdW1iZXIsIEpTT05PYmplY3QsXHJcbiAgICBOb0VtcHR5T3JOdWxsU3RyaW5nLCBWYWx1ZVR5cGVcclxufSBmcm9tICcuL3R5cGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQmFzZVR5cGUoZGF0YTogYW55LCAuLi50eXBlTmFtZXM6IEJhc2VUeXBlW10pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlTmFtZXMuaW5kZXhPZih0eXBlb2YgZGF0YSkgPiAtMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU3RyaW5nKGRhdGE6IGFueSk6IGRhdGEgaXMgc3RyaW5nIHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwic3RyaW5nXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tCb29sZWFuKGRhdGE6IGFueSk6IGRhdGEgaXMgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tCYXNlVHlwZShkYXRhLCBcImJvb2xlYW5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja051bWJlcihkYXRhOiBhbnkpOiBkYXRhIGlzIG51bWJlciB7XHJcbiAgICByZXR1cm4gY2hlY2tCYXNlVHlwZShkYXRhLCBcIm51bWJlclwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRnVuY3Rpb248VD4oZGF0YTogYW55KTogZGF0YSBpcyBUIHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwiZnVuY3Rpb25cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Z1bmN0aW9uVmFsaWRhdG9yKGRhdGE6IGFueSk6IGRhdGEgaXMgRnVuY3Rpb25WYWxpZGF0b3Ige1xyXG4gICAgcmV0dXJuIGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGRhdGEpIHx8XHJcbiAgICAgICAgY2hlY2tBcnJheShkYXRhKSAmJiBjaGVja0Z1bmN0aW9uPENoZWNrVmFsaWRhdG9yPihkYXRhWzBdKSB8fFxyXG4gICAgICAgIGNoZWNrQXJyYXkoZGF0YSkgJiYgY2hlY2tBcnJheShkYXRhWzBdKSAmJiBjaGVja0Z1bmN0aW9uPENoZWNrVmFsaWRhdG9yPihkYXRhWzBdWzBdKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVmFsaWRhdG9yKGRhdGE6IGFueSwgZnVuY3Rpb25WYWxpZGF0b3I6IEZ1bmN0aW9uVmFsaWRhdG9yKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaXNUcnVlID0gdHJ1ZTtcclxuICAgIGlmIChjaGVja0Z1bmN0aW9uPENoZWNrVmFsaWRhdG9yPihmdW5jdGlvblZhbGlkYXRvcikpIHtcclxuICAgICAgICBpZiAoIWZ1bmN0aW9uVmFsaWRhdG9yKGRhdGEpKSBpc1RydWUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNoZWNrQXJyYXkoZnVuY3Rpb25WYWxpZGF0b3IpICYmIGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGZ1bmN0aW9uVmFsaWRhdG9yWzBdKSkge1xyXG4gICAgICAgIGNvbnN0IFt2YWxpZGF0b3IsIC4uLmFyZ3NdID0gZnVuY3Rpb25WYWxpZGF0b3I7XHJcbiAgICAgICAgaWYgKCF2YWxpZGF0b3IoZGF0YSwgLi4uYXJncykpIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2hlY2tBcnJheShmdW5jdGlvblZhbGlkYXRvcikgJiYgY2hlY2tBcnJheShmdW5jdGlvblZhbGlkYXRvclswXSkgJiYgY2hlY2tGdW5jdGlvbjxDaGVja1ZhbGlkYXRvcj4oZnVuY3Rpb25WYWxpZGF0b3JbMF1bMF0pKSB7XHJcbiAgICAgICAgY29uc3QgW2NoaWxkVmFsaWRhdG9yLCAuLi52YWx1ZXNdID0gZnVuY3Rpb25WYWxpZGF0b3I7XHJcbiAgICAgICAgaWYgKCFjaGVja1ZhbGlkYXRvcihkYXRhLCBjaGlsZFZhbGlkYXRvcikgJiYgIWNoZWNrSW4oZGF0YSwgLi4udmFsdWVzKSkgaXNUcnVlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIGlzVHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXJyYXkoZGF0YTogYW55KTogZGF0YSBpcyBBcnJheTxhbnk+IHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBcnJheUVhY2g8VD4oZGF0YTogYW55LCBmdW5jdGlvblZhbGlkYXRvcjogRnVuY3Rpb25WYWxpZGF0b3IpOiBkYXRhIGlzIEFycmF5PFQ+IHtcclxuICAgIGlmICghY2hlY2tBcnJheShkYXRhKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKCFjaGVja0Z1bmN0aW9uVmFsaWRhdG9yKGZ1bmN0aW9uVmFsaWRhdG9yKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGxldCBpc0FycmF5VHlwZSA9IHRydWU7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgIGlzQXJyYXlUeXBlID0gY2hlY2tWYWxpZGF0b3IoaXRlbSwgZnVuY3Rpb25WYWxpZGF0b3IpO1xyXG4gICAgICAgIGlmICghaXNBcnJheVR5cGUpIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzQXJyYXlUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOb051bGxPclVuZGVmaW5lZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YSAhPT0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT2JqZWN0KGRhdGE6IGFueSk6IGRhdGEgaXMgb2JqZWN0IHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwib2JqZWN0XCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tKU09OT2JqZWN0KGRhdGE6IGFueSk6IGRhdGEgaXMgSlNPTk9iamVjdCB7XHJcbiAgICByZXR1cm4gZGF0YSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICFjaGVja0FycmF5KGRhdGEpICYmXHJcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEpLnRvTG93ZXJDYXNlKCkgPT09IFwiW29iamVjdCBvYmplY3RdXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja051bGwoZGF0YTogYW55KTogZGF0YSBpcyBudWxsIHtcclxuICAgIHJldHVybiBkYXRhID09PSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZWdFeHAoZGF0YTogYW55KTogZGF0YSBpcyBSZWdFeHAge1xyXG4gICAgcmV0dXJuIGRhdGEgaW5zdGFuY2VvZiBSZWdFeHA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbG9yKGRhdGE6IGFueSk6IGRhdGEgaXMgQ29sb3JTdHJpbmcge1xyXG4gICAgY29uc3QgYmluYXJ5UmVnRXhwID0gL14jKFswLTlhLWZdezZ9fFswLTlhLWZdezN9KSQvaTtcclxuICAgIGNvbnN0IHJnYlJlZ0V4cCA9IC9ecmdiXFwoKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwpJC9pO1xyXG4gICAgY29uc3QgcmdiYVJlZ0V4cCA9IC9ecmdiYVxcKChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLChbMC05XXxbMC05XVswLTldfDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldKVxcLCgxfDEuMHwwLlswLTldKVxcKSQvaTtcclxuXHJcbiAgICByZXR1cm4gYmluYXJ5UmVnRXhwLnRlc3QoZGF0YSkgfHxcclxuICAgICAgICByZ2JSZWdFeHAudGVzdChkYXRhKSB8fFxyXG4gICAgICAgIHJnYmFSZWdFeHAudGVzdChkYXRhKSB8fFxyXG4gICAgICAgIGRhdGEgPT09IFwidHJhbnNwYXJlbnRcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTm9FbXB0eU9yTnVsbChkYXRhOiBhbnkpOiBkYXRhIGlzIE5vRW1wdHlPck51bGxTdHJpbmcge1xyXG4gICAgcmV0dXJuIGNoZWNrU3RyaW5nKGRhdGEpXHJcbiAgICAgICAgJiYgZGF0YS5sZW5ndGggPiAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbnQoZGF0YTogYW55KTogZGF0YSBpcyBJbnRlZ2VyTnVtYmVyIHtcclxuICAgIHJldHVybiBjaGVja051bWJlcihkYXRhKSAmJlxyXG4gICAgICAgICgvXlxcLT9bMC05XSskLy50ZXN0KGAke2RhdGF9YCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQc3RJbnQoZGF0YTogYW55KTogZGF0YSBpcyBJbnRlZ2VyTnVtYmVyIHtcclxuICAgIHJldHVybiBjaGVja0ludChkYXRhKVxyXG4gICAgICAgICYmIGRhdGEgPj0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUHN0TnVtYmVyKGRhdGE6IGFueSk6IGRhdGEgaXMgbnVtYmVyIHtcclxuICAgIHJldHVybiBjaGVja051bWJlcihkYXRhKVxyXG4gICAgICAgICYmIGRhdGEgPj0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29udGFpbnMoZGF0YTogYW55LCBjaGFyYWN0ZXI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwoY2hhcmFjdGVyKSkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIHJldHVybiBjaGVja05vRW1wdHlPck51bGwoZGF0YSlcclxuICAgICAgICAmJiBkYXRhLmluZGV4T2YoY2hhcmFjdGVyKSA+IC0xO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbihkYXRhOiBhbnksIC4uLnZhbHVlczogQXJyYXk8VmFsdWVUeXBlPikge1xyXG4gICAgcmV0dXJuIGNoZWNrQmFzZVR5cGUoZGF0YSwgXCJib29sZWFuXCIsIFwibnVtYmVyXCIsIFwic3RyaW5nXCIsIFwidW5kZWZpbmVkXCIsIFwib2JqZWN0XCIpICYmXHJcbiAgICAgICAgdmFsdWVzLmluZGV4T2YoZGF0YSkgPiAtMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWluTGVuZ3RoKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja1N0cmluZyhkYXRhKSAmJlxyXG4gICAgICAgIGRhdGEubGVuZ3RoID49IHRocmVzaG9sZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWF4TGVuZ3RoKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja1N0cmluZyhkYXRhKSAmJlxyXG4gICAgICAgIGRhdGEubGVuZ3RoIDw9IHRocmVzaG9sZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTGVuZ3RoKGRhdGE6IGFueSwgbWluVGhyZXNob2xkOiBudW1iZXIsIG1heFRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAobWluVGhyZXNob2xkID49IG1heFRocmVzaG9sZCkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIHJldHVybiBjaGVja01pbkxlbmd0aChkYXRhLCBtaW5UaHJlc2hvbGQpICYmXHJcbiAgICAgICAgY2hlY2tNaW5MZW5ndGgoZGF0YSwgbWF4VGhyZXNob2xkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWluKGRhdGE6IGFueSwgdGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja051bWJlcihkYXRhKSAmJlxyXG4gICAgICAgIGRhdGEgPj0gdGhyZXNob2xkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKGRhdGEpICYmXHJcbiAgICAgICAgZGF0YSA8PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JhbmdlKGRhdGE6IGFueSwgbWluVGhyZXNob2xkOiBudW1iZXIsIG1heFRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAobWluVGhyZXNob2xkID49IG1heFRocmVzaG9sZCkgcGFyYW1ldGVySW52YWxpZCgpO1xyXG5cclxuICAgIHJldHVybiBjaGVja01pbihkYXRhLCBtaW5UaHJlc2hvbGQpICYmXHJcbiAgICAgICAgY2hlY2tNYXgoZGF0YSwgbWF4VGhyZXNob2xkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWF0Y2goZGF0YTogYW55LCByZWdleDogUmVnRXhwKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gcmVnZXgudGVzdChkYXRhKTtcclxufSIsImltcG9ydCB7IERFRkFVTFRfU1RBUlRfWklOREVYLCBERUZBVUxUX1dJTkRPV19PUFRJT04sIFRleHRBbGlnbiwgVkVSU0lPTiB9IGZyb20gJy4uL2NvbnN0JztcclxuaW1wb3J0IHsgdmFsaWRhdG9yIH0gZnJvbSAnLi4vY29yZS9kZWNvcmF0b3IvcHJvcGVydHknO1xyXG5pbXBvcnQge1xyXG4gICAgY2hlY2tDb2xvciwgY2hlY2tDb250YWlucywgY2hlY2tJbiwgY2hlY2tNaW4sIGNoZWNrUHN0SW50LCBjaGVja1BzdE51bWJlciwgY2hlY2tTdHJpbmdcclxufSBmcm9tICcuLi9jb3JlL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IEVudHJ5T3B0aW9uLCBFbnRyeVVJV2luZG93T3B0aW9uIH0gZnJvbSAnLi90eXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnRyeSB7XHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEVudHJ5T3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZXJPcHRpb25zKG9wdGlvbnM6IEVudHJ5T3B0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGFydFpJbmRleCA9IG9wdGlvbnM/LnN0YXJ0WkluZGV4ID8/IHRoaXMuc3RhcnRaSW5kZXg7XHJcbiAgICAgICAgdGhpcy53aW5kb3cgPSBvcHRpb25zPy53aW5kb3cgPz8gdGhpcy53aW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEVudHJ5O1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSB2ZXJzaW9uOiBzdHJpbmcgPSBWRVJTSU9OO1xyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdEludCwgW2NoZWNrTWluLCAxMDAwXSlcclxuICAgIHB1YmxpYyBzdGFydFpJbmRleDogbnVtYmVyID0gREVGQVVMVF9TVEFSVF9aSU5ERVg7XHJcbiAgICBAdmFsaWRhdG9yKHtcclxuICAgICAgICB3aWR0aDogY2hlY2tQc3ROdW1iZXIsIGhlaWdodDogY2hlY2tQc3ROdW1iZXIsIGJhY2tncm91bmRDb2xvcjogY2hlY2tDb2xvcixcclxuICAgICAgICB0b29sQmFyOiBbe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLCBiYWNrZ3JvdW5kQ29sb3I6IGNoZWNrQ29sb3IsXHJcbiAgICAgICAgICAgIHRpdGxlQmFyOiBbeyBsYWJlbDogY2hlY2tTdHJpbmcsIGNvbG9yOiBjaGVja0NvbG9yLCBhbGlnbjogW2NoZWNrSW4sIFRleHRBbGlnbi5MRUZULCBUZXh0QWxpZ24uQ0VOVEVSLCBUZXh0QWxpZ24uUklHSFRdLCBmb250U2l6ZTogY2hlY2tQc3RJbnQgfSwgZmFsc2VdLFxyXG4gICAgICAgICAgICBpY29uOiBbeyBuYW1lOiBbY2hlY2tTdHJpbmcsIG51bGxdLCBjb2xvcjogW2NoZWNrQ29sb3IsIG51bGxdLCBzaXplOiBjaGVja1BzdEludCwgcGF0aDogW2NoZWNrU3RyaW5nLCBudWxsXSB9LCBmYWxzZV1cclxuICAgICAgICB9LCBmYWxzZV1cclxuICAgIH0pXHJcbiAgICBwdWJsaWMgd2luZG93OiBFbnRyeVVJV2luZG93T3B0aW9uID0gREVGQVVMVF9XSU5ET1dfT1BUSU9OO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2Uob3B0aW9uczogRW50cnlPcHRpb24gPSB7fSk6IEVudHJ5IHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHRoaXMuaW5zdGFuY2UgPSBuZXcgRW50cnkob3B0aW9ucyk7XHJcbiAgICAgICAgZWxzZSB0aGlzLmluc3RhbmNlLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW50cnkgfSBmcm9tICcuL2VudHJ5JztcclxuaW1wb3J0IHsgRW50cnlPcHRpb24sIE92ZXJ0IH0gZnJvbSAnLi9lbnRyeS90eXBlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBvdmVydCgpOiBPdmVydCB7XHJcbiAgICBjb25zdCBlbnRyeSA9IEVudHJ5Lkluc3RhbmNlKCk7XHJcbiAgICBjb25zdCBvdmVydCA9IDxPdmVydD5mdW5jdGlvbiAob3B0aW9uczogRW50cnlPcHRpb24pIHtcclxuICAgICAgICBFbnRyeS5JbnN0YW5jZShvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBvdmVydC52ZXJzaW9uID0gZW50cnkudmVyc2lvbjtcclxuICAgIHJldHVybiBvdmVydDtcclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==