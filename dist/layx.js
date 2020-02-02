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
var contract_1 = __webpack_require__(/*! ../contract */ "./app/contract/index.ts");
var property_1 = __webpack_require__(/*! ../core/decorator/property */ "./app/core/decorator/property/index.ts");
var validator_1 = __webpack_require__(/*! ../core/validator */ "./app/core/validator/index.ts");
var Entry = (function () {
    function Entry(options) {
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
        this.handlerOptions(options);
    }
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
    return overt;
})();


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sYXl4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheXgvLi9hcHAvYXNzZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9hc3NldC9zdHlsZS9jb21tb24uY3NzPzRkZTMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9hc3NldC9zdHlsZS9zdmcuY3NzP2FkOGQiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb250cmFjdC9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2NvcmUvZGVjb3JhdG9yL3Byb3BlcnR5L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvY29yZS9leGNlcHRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2hlbHBlci9vYmplY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL2hlbHBlci9zdHJpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGF5eC8uL2FwcC9jb3JlL3ZhbGlkYXRvci9pbmRleC50cyIsIndlYnBhY2s6Ly9sYXl4Ly4vYXBwL2VudHJ5L2luZGV4LnRzIiwid2VicGFjazovL2xheXgvLi9hcHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFB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QzVCLENBQUMsQ0FBQztJQUNGLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM5QixPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImxheXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsYXl4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxheXhcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlL2NvbW1vbi5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUvc3ZnLmNzcyc7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgQW5pbWF0aW9uT3B0aW9uYWwsIEJvcmRlclN0eWxlT3B0aW9uYWwgfSBmcm9tICcuLi9jb25zdCc7XHJcbmltcG9ydCB7IGNoZWNrQm9vbGVhbiwgY2hlY2tDb2xvciwgY2hlY2tJbiwgY2hlY2tQc3RJbnQsIGNoZWNrUHN0TnVtYmVyIH0gZnJvbSAnLi4vY29yZS92YWxpZGF0b3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvcmRlck9wdGlvbkNvbnRyYWN0ID0gW3tcclxuICAgIHdpZHRoOiBjaGVja1BzdE51bWJlcixcclxuICAgIHN0eWxlOiBbY2hlY2tJbiwgQm9yZGVyU3R5bGVPcHRpb25hbC5EQVNIRUQsIEJvcmRlclN0eWxlT3B0aW9uYWwuU09MSUQsIEJvcmRlclN0eWxlT3B0aW9uYWwuRE9VQkxFLCBCb3JkZXJTdHlsZU9wdGlvbmFsLkRPVFRFRF0sXHJcbiAgICBjb2xvcjogY2hlY2tDb2xvcixcclxuICAgIHJhZGl1czogY2hlY2tQc3RJbnRcclxufSwgZmFsc2VdO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFVJV2luZG93T3B0aW9uQ29udHJhY3QgPSB7XHJcbiAgICB3aWR0aDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBoZWlnaHQ6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgbWluV2lkdGg6IGNoZWNrUHN0TnVtYmVyLFxyXG4gICAgbWluSGVpZ2h0OiBjaGVja1BzdE51bWJlcixcclxuICAgIG1heFdpZHRoOiBjaGVja1BzdE51bWJlcixcclxuICAgIG1heEhlaWdodDogY2hlY2tQc3ROdW1iZXIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoZWNrQ29sb3IsXHJcbiAgICBib3hTaGFkb3c6IGNoZWNrQm9vbGVhbixcclxuICAgIGFuaW1hdGU6IFtbY2hlY2tJbiwgQW5pbWF0aW9uT3B0aW9uYWwuWk9PTV0sIGZhbHNlXSxcclxuICAgIGJvcmRlcjogQm9yZGVyT3B0aW9uQ29udHJhY3RcclxufTsiLCJpbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHsgbWVyZ2VKU09OT2JqZWN0IH0gZnJvbSAnLi4vLi4vaGVscGVyL29iamVjdCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uVmFsaWRhdG9yLCBKU09OT2JqZWN0LCBQcm9wZXJ0eVNldHRlciwgVmFsdWVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZSc7XHJcbmltcG9ydCB7XHJcbiAgICBjaGVja0FycmF5LCBjaGVja0Jhc2VUeXBlLCBjaGVja0Z1bmN0aW9uLCBjaGVja0Z1bmN0aW9uVmFsaWRhdG9yLCBjaGVja0luLCBjaGVja0pTT05PYmplY3QsXHJcbiAgICBjaGVja1ZhbGlkYXRvclxyXG59IGZyb20gJy4uLy4uL3ZhbGlkYXRvcic7XHJcblxyXG5mdW5jdGlvbiBkZWNvcmF0b3IocHJvcGVydHlTZXR0ZXI6IFByb3BlcnR5U2V0dGVyKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgaWYgKCFjaGVja0Z1bmN0aW9uPFByb3BlcnR5U2V0dGVyPihwcm9wZXJ0eVNldHRlcikpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleSkgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wZXJ0eUtleV07XHJcbiAgICAgICAgdmFyIHByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZ2V0OiAoKSA9PiB2YWx1ZSxcclxuICAgICAgICAgICAgc2V0OiAobmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eURlc2NyaXB0b3IgJiYgcHJvcGVydHlEZXNjcmlwdG9yLnNldCkgcHJvcGVydHlEZXNjcmlwdG9yLnNldChuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHByb3BlcnR5U2V0dGVyKG5ld1ZhbHVlLCBwcm9wZXJ0eUtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluVmFsaWRhdG9yKG5ld1ZhbHVlOiBhbnksIG9sZFZhbHVlOiBhbnksIC4uLnZhbHVlczogQXJyYXk8YW55Pik6IGFueSB7XHJcbiAgICBjb25zdCB2YWx1ZU9wdGlvbnM6IEFycmF5PFZhbHVlVHlwZT4gPSBbXTtcclxuICAgIGNvbnN0IGZ1bmN0aW9uVmFsaWRhdG9yczogQXJyYXk8RnVuY3Rpb25WYWxpZGF0b3I+ID0gW107XHJcbiAgICBjb25zdCBvYmplY3RWYWxpZGF0b3JzOiBBcnJheTxKU09OT2JqZWN0PiA9IFtdO1xyXG5cclxuICAgIHZhbHVlcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwgfHwgY2hlY2tCYXNlVHlwZShpdGVtLCBcInN0cmluZ1wiLCBcImJpZ2ludFwiLCBcImJvb2xlYW5cIiwgXCJzeW1ib2xcIiwgXCJ1bmRlZmluZWRcIikpIHZhbHVlT3B0aW9ucy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIGlmIChjaGVja0Z1bmN0aW9uVmFsaWRhdG9yKGl0ZW0pKSBmdW5jdGlvblZhbGlkYXRvcnMucHVzaChpdGVtKTtcclxuICAgICAgICBpZiAoY2hlY2tKU09OT2JqZWN0KGl0ZW0pKSBvYmplY3RWYWxpZGF0b3JzLnB1c2goaXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoY2hlY2tJbihuZXdWYWx1ZSwgLi4udmFsdWVPcHRpb25zKSkgcmV0dXJuIG5ld1ZhbHVlO1xyXG5cclxuICAgIGlmIChmdW5jdGlvblZhbGlkYXRvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBpc1Bhc3NBbGxGdW5jdGlvblZhbGlkYXRvciA9IHRydWU7XHJcbiAgICAgICAgZm9yIChjb25zdCBmdW5jdGlvblZhbGlkYXRvciBvZiBmdW5jdGlvblZhbGlkYXRvcnMpIHtcclxuICAgICAgICAgICAgaXNQYXNzQWxsRnVuY3Rpb25WYWxpZGF0b3IgPSBjaGVja1ZhbGlkYXRvcihuZXdWYWx1ZSwgZnVuY3Rpb25WYWxpZGF0b3IpO1xyXG4gICAgICAgICAgICBpZiAoIWlzUGFzc0FsbEZ1bmN0aW9uVmFsaWRhdG9yKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzUGFzc0FsbEZ1bmN0aW9uVmFsaWRhdG9yKSByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoZWNrSlNPTk9iamVjdChuZXdWYWx1ZSkgJiYgb2JqZWN0VmFsaWRhdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgW2ZpcnN0VmFsaWRhdG9yLF0gPSBvYmplY3RWYWxpZGF0b3JzO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkVmFsdWVzID0gZmlyc3RWYWxpZGF0b3Jba2V5XTtcclxuICAgICAgICAgICAgaW5WYWxpZGF0b3IobmV3VmFsdWVba2V5XSwgb2xkVmFsdWUsIC4uLihjaGVja0FycmF5KGNoaWxkVmFsdWVzKSA/IGNoaWxkVmFsdWVzIDogW2NoaWxkVmFsdWVzXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWVyZ2VKU09OT2JqZWN0KG9sZFZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0b3IoLi4udmFsdWVzOiBBcnJheTxhbnk+KTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgcmV0dXJuIGRlY29yYXRvcigobmV3VmFsdWUsIHByb3BlcnR5S2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpblZhbGlkYXRvcihuZXdWYWx1ZSwgdmFsdWUsIC4uLnZhbHVlcyk7XHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBwYXJhbWV0ZXJJbnZhbGlkKG1lc3NhZ2U6IHN0cmluZyA9IFwiXCIpOiBuZXZlciB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcGFyYW1ldGVyLiR7bWVzc2FnZX1gKTtcclxufSIsImltcG9ydCB7IHBhcmFtZXRlckludmFsaWQgfSBmcm9tICcuLi8uLi9leGNlcHRpb24nO1xyXG5pbXBvcnQgeyByZW1vdmVJbGxlZ2FsQ2hhcmFjdGVyIH0gZnJvbSAnLi4vLi4vaGVscGVyL3N0cmluZyc7XHJcbmltcG9ydCB7IEpTT05PYmplY3QgfSBmcm9tICcuLi8uLi90eXBlJztcclxuaW1wb3J0IHsgY2hlY2tKU09OT2JqZWN0LCBjaGVja05vRW1wdHlPck51bGwsIGNoZWNrTm9OdWxsT3JVbmRlZmluZWQgfSBmcm9tICcuLi8uLi92YWxpZGF0b3InO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lSlNPTk9iamVjdDxUIGV4dGVuZHMgSlNPTk9iamVjdD4oc291cmNlOiBUKTogVCB7XHJcbiAgICBjb25zdCBuZXdKU09OT2JqZWN0ID0gPGFueT57fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHNvdXJjZVtrZXldO1xyXG4gICAgICAgIG5ld0pTT05PYmplY3Rba2V5XSA9IGNoZWNrSlNPTk9iamVjdChrZXlWYWx1ZSlcclxuICAgICAgICAgICAgPyBjbG9uZUpTT05PYmplY3Qoa2V5VmFsdWUpIDoga2V5VmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPFQ+bmV3SlNPTk9iamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSlNPTk9iamVjdDxUIGV4dGVuZHMgSlNPTk9iamVjdD4oc291cmNlOiBULCBkZXN0OiBUKTogVCB7XHJcbiAgICBjb25zdCBuZXdKU09OT2JqZWN0ID0gY2xvbmVKU09OT2JqZWN0PGFueT4oc291cmNlKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkZXN0KSB7XHJcbiAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBkZXN0W2tleV07XHJcbiAgICAgICAgbmV3SlNPTk9iamVjdFtrZXldID0gY2hlY2tKU09OT2JqZWN0KG5ld0pTT05PYmplY3Rba2V5XSkgJiYgY2hlY2tKU09OT2JqZWN0KGtleVZhbHVlKVxyXG4gICAgICAgICAgICA/IG1lcmdlSlNPTk9iamVjdChuZXdKU09OT2JqZWN0W2tleV0sIGtleVZhbHVlKSA6IGtleVZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxUPm5ld0pTT05PYmplY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkT2JqZWN0PFQ+KHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBULCBzdGFydE9iamVjdDogSlNPTk9iamVjdCk6IFQge1xyXG4gICAgaWYgKCFjaGVja05vRW1wdHlPck51bGwocGF0aCkgfHwgIWNoZWNrSlNPTk9iamVjdChzdGFydE9iamVjdCkpIHBhcmFtZXRlckludmFsaWQoKTtcclxuXHJcbiAgICBwYXRoID0gcmVtb3ZlSWxsZWdhbENoYXJhY3RlcihwYXRoKTtcclxuICAgIGlmIChwYXRoLmluZGV4T2YoXCIvXCIpID09PSAtMSkgcmV0dXJuIHN0YXJ0T2JqZWN0W3BhdGhdID8/IGRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICBjb25zdCBrZXlzID0gcGF0aC5zcGxpdChcIi9cIik7XHJcbiAgICBsZXQga2V5VmFsdWUgPSByZWFkT2JqZWN0KGtleXNbMF0sIGRlZmF1bHRWYWx1ZSwgc3RhcnRPYmplY3QpO1xyXG4gICAgaWYgKCFjaGVja05vTnVsbE9yVW5kZWZpbmVkKGtleVZhbHVlKSkgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaSArIDEgPj0ga2V5cy5sZW5ndGgpIGJyZWFrO1xyXG4gICAgICAgIGtleVZhbHVlID0gcmVhZE9iamVjdChrZXlzW2kgKyAxXSwgZGVmYXVsdFZhbHVlLCBrZXlWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ga2V5VmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgcGFyYW1ldGVySW52YWxpZCB9IGZyb20gJy4uLy4uL2V4Y2VwdGlvbic7XHJcbmltcG9ydCB7IGNoZWNrTm9FbXB0eU9yTnVsbCB9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSWxsZWdhbENoYXJhY3RlcihzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChzdHIpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFxyXFxuXFx0XFxzXS9nLCBcIlwiKTtcclxufVxyXG4iLCJpbXBvcnQgeyBwYXJhbWV0ZXJJbnZhbGlkIH0gZnJvbSAnLi4vZXhjZXB0aW9uJztcclxuaW1wb3J0IHtcclxuICAgIEJhc2VUeXBlLCBDaGVja1ZhbGlkYXRvciwgQ29sb3JTdHJpbmcsIEZ1bmN0aW9uVmFsaWRhdG9yLCBJbnRlZ2VyTnVtYmVyLCBKU09OT2JqZWN0LFxyXG4gICAgTm9FbXB0eU9yTnVsbFN0cmluZywgVmFsdWVUeXBlXHJcbn0gZnJvbSAnLi4vdHlwZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tCYXNlVHlwZShkYXRhOiBhbnksIC4uLnR5cGVOYW1lczogQmFzZVR5cGVbXSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVOYW1lcy5pbmRleE9mKHR5cGVvZiBkYXRhKSA+IC0xO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTdHJpbmcoZGF0YTogYW55KTogZGF0YSBpcyBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNoZWNrQmFzZVR5cGUoZGF0YSwgXCJzdHJpbmdcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Jvb2xlYW4oZGF0YTogYW55KTogZGF0YSBpcyBib29sZWFuIHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwiYm9vbGVhblwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTnVtYmVyKGRhdGE6IGFueSk6IGRhdGEgaXMgbnVtYmVyIHtcclxuICAgIHJldHVybiBjaGVja0Jhc2VUeXBlKGRhdGEsIFwibnVtYmVyXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGdW5jdGlvbjxUPihkYXRhOiBhbnkpOiBkYXRhIGlzIFQge1xyXG4gICAgcmV0dXJuIGNoZWNrQmFzZVR5cGUoZGF0YSwgXCJmdW5jdGlvblwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRnVuY3Rpb25WYWxpZGF0b3IoZGF0YTogYW55KTogZGF0YSBpcyBGdW5jdGlvblZhbGlkYXRvciB7XHJcbiAgICByZXR1cm4gY2hlY2tGdW5jdGlvbjxDaGVja1ZhbGlkYXRvcj4oZGF0YSkgfHxcclxuICAgICAgICBjaGVja0FycmF5KGRhdGEpICYmIGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGRhdGFbMF0pIHx8XHJcbiAgICAgICAgY2hlY2tBcnJheShkYXRhKSAmJiBjaGVja0FycmF5KGRhdGFbMF0pICYmIGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGRhdGFbMF1bMF0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tWYWxpZGF0b3IoZGF0YTogYW55LCBmdW5jdGlvblZhbGlkYXRvcjogRnVuY3Rpb25WYWxpZGF0b3IpOiBib29sZWFuIHtcclxuICAgIGxldCBpc1RydWUgPSB0cnVlO1xyXG4gICAgaWYgKGNoZWNrRnVuY3Rpb248Q2hlY2tWYWxpZGF0b3I+KGZ1bmN0aW9uVmFsaWRhdG9yKSkge1xyXG4gICAgICAgIGlmICghZnVuY3Rpb25WYWxpZGF0b3IoZGF0YSkpIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2hlY2tBcnJheShmdW5jdGlvblZhbGlkYXRvcikgJiYgY2hlY2tGdW5jdGlvbjxDaGVja1ZhbGlkYXRvcj4oZnVuY3Rpb25WYWxpZGF0b3JbMF0pKSB7XHJcbiAgICAgICAgY29uc3QgW3ZhbGlkYXRvciwgLi4uYXJnc10gPSBmdW5jdGlvblZhbGlkYXRvcjtcclxuICAgICAgICBpZiAoIXZhbGlkYXRvcihkYXRhLCAuLi5hcmdzKSkgaXNUcnVlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjaGVja0FycmF5KGZ1bmN0aW9uVmFsaWRhdG9yKSAmJiBjaGVja0FycmF5KGZ1bmN0aW9uVmFsaWRhdG9yWzBdKSAmJiBjaGVja0Z1bmN0aW9uPENoZWNrVmFsaWRhdG9yPihmdW5jdGlvblZhbGlkYXRvclswXVswXSkpIHtcclxuICAgICAgICBjb25zdCBbY2hpbGRWYWxpZGF0b3IsIC4uLnZhbHVlc10gPSBmdW5jdGlvblZhbGlkYXRvcjtcclxuICAgICAgICBpZiAoIWNoZWNrVmFsaWRhdG9yKGRhdGEsIGNoaWxkVmFsaWRhdG9yKSAmJiAhY2hlY2tJbihkYXRhLCAuLi52YWx1ZXMpKSBpc1RydWUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaXNUcnVlID0gZmFsc2U7XHJcbiAgICByZXR1cm4gaXNUcnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBcnJheShkYXRhOiBhbnkpOiBkYXRhIGlzIEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0FycmF5RWFjaDxUPihkYXRhOiBhbnksIGZ1bmN0aW9uVmFsaWRhdG9yOiBGdW5jdGlvblZhbGlkYXRvcik6IGRhdGEgaXMgQXJyYXk8VD4ge1xyXG4gICAgaWYgKCFjaGVja0FycmF5KGRhdGEpKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoIWNoZWNrRnVuY3Rpb25WYWxpZGF0b3IoZnVuY3Rpb25WYWxpZGF0b3IpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgbGV0IGlzQXJyYXlUeXBlID0gdHJ1ZTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XHJcbiAgICAgICAgaXNBcnJheVR5cGUgPSBjaGVja1ZhbGlkYXRvcihpdGVtLCBmdW5jdGlvblZhbGlkYXRvcik7XHJcbiAgICAgICAgaWYgKCFpc0FycmF5VHlwZSkgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNBcnJheVR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja05vTnVsbE9yVW5kZWZpbmVkKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGRhdGEgIT09IHVuZGVmaW5lZCAmJiBkYXRhICE9PSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPYmplY3QoZGF0YTogYW55KTogZGF0YSBpcyBvYmplY3Qge1xyXG4gICAgcmV0dXJuIGNoZWNrQmFzZVR5cGUoZGF0YSwgXCJvYmplY3RcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0pTT05PYmplY3QoZGF0YTogYW55KTogZGF0YSBpcyBKU09OT2JqZWN0IHtcclxuICAgIHJldHVybiBkYXRhICE9PSBudWxsICYmXHJcbiAgICAgICAgIWNoZWNrQXJyYXkoZGF0YSkgJiZcclxuICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSkudG9Mb3dlckNhc2UoKSA9PT0gXCJbb2JqZWN0IG9iamVjdF1cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTnVsbChkYXRhOiBhbnkpOiBkYXRhIGlzIG51bGwge1xyXG4gICAgcmV0dXJuIGRhdGEgPT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JlZ0V4cChkYXRhOiBhbnkpOiBkYXRhIGlzIFJlZ0V4cCB7XHJcbiAgICByZXR1cm4gZGF0YSBpbnN0YW5jZW9mIFJlZ0V4cDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29sb3IoZGF0YTogYW55KTogZGF0YSBpcyBDb2xvclN0cmluZyB7XHJcbiAgICBjb25zdCBiaW5hcnlSZWdFeHAgPSAvXiMoWzAtOWEtZl17Nn18WzAtOWEtZl17M30pJC9pO1xyXG4gICAgY29uc3QgcmdiUmVnRXhwID0gL15yZ2JcXCgoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCwoWzAtOV18WzAtOV1bMC05XXwyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XSlcXCkkL2k7XHJcbiAgICBjb25zdCByZ2JhUmVnRXhwID0gL15yZ2JhXFwoKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKFswLTldfFswLTldWzAtOV18MjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV0pXFwsKDF8MS4wfDAuWzAtOV0pXFwpJC9pO1xyXG5cclxuICAgIHJldHVybiBiaW5hcnlSZWdFeHAudGVzdChkYXRhKSB8fFxyXG4gICAgICAgIHJnYlJlZ0V4cC50ZXN0KGRhdGEpIHx8XHJcbiAgICAgICAgcmdiYVJlZ0V4cC50ZXN0KGRhdGEpIHx8XHJcbiAgICAgICAgZGF0YSA9PT0gXCJ0cmFuc3BhcmVudFwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tOb0VtcHR5T3JOdWxsKGRhdGE6IGFueSk6IGRhdGEgaXMgTm9FbXB0eU9yTnVsbFN0cmluZyB7XHJcbiAgICByZXR1cm4gY2hlY2tTdHJpbmcoZGF0YSlcclxuICAgICAgICAmJiBkYXRhLmxlbmd0aCA+IDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ludChkYXRhOiBhbnkpOiBkYXRhIGlzIEludGVnZXJOdW1iZXIge1xyXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKGRhdGEpICYmXHJcbiAgICAgICAgKC9eXFwtP1swLTldKyQvLnRlc3QoYCR7ZGF0YX1gKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1BzdEludChkYXRhOiBhbnkpOiBkYXRhIGlzIEludGVnZXJOdW1iZXIge1xyXG4gICAgcmV0dXJuIGNoZWNrSW50KGRhdGEpXHJcbiAgICAgICAgJiYgZGF0YSA+PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQc3ROdW1iZXIoZGF0YTogYW55KTogZGF0YSBpcyBudW1iZXIge1xyXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKGRhdGEpXHJcbiAgICAgICAgJiYgZGF0YSA+PSAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDb250YWlucyhkYXRhOiBhbnksIGNoYXJhY3Rlcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWNoZWNrTm9FbXB0eU9yTnVsbChjaGFyYWN0ZXIpKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuIGNoZWNrTm9FbXB0eU9yTnVsbChkYXRhKVxyXG4gICAgICAgICYmIGRhdGEuaW5kZXhPZihjaGFyYWN0ZXIpID4gLTE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0luKGRhdGE6IGFueSwgLi4udmFsdWVzOiBBcnJheTxWYWx1ZVR5cGU+KSB7XHJcbiAgICByZXR1cm4gY2hlY2tCYXNlVHlwZShkYXRhLCBcImJvb2xlYW5cIiwgXCJudW1iZXJcIiwgXCJzdHJpbmdcIiwgXCJ1bmRlZmluZWRcIiwgXCJvYmplY3RcIikgJiZcclxuICAgICAgICB2YWx1ZXMuaW5kZXhPZihkYXRhKSA+IC0xO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW5MZW5ndGgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrU3RyaW5nKGRhdGEpICYmXHJcbiAgICAgICAgZGF0YS5sZW5ndGggPj0gdGhyZXNob2xkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXhMZW5ndGgoZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrU3RyaW5nKGRhdGEpICYmXHJcbiAgICAgICAgZGF0YS5sZW5ndGggPD0gdGhyZXNob2xkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tMZW5ndGgoZGF0YTogYW55LCBtaW5UaHJlc2hvbGQ6IG51bWJlciwgbWF4VGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmIChtaW5UaHJlc2hvbGQgPj0gbWF4VGhyZXNob2xkKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuIGNoZWNrTWluTGVuZ3RoKGRhdGEsIG1pblRocmVzaG9sZCkgJiZcclxuICAgICAgICBjaGVja01pbkxlbmd0aChkYXRhLCBtYXhUaHJlc2hvbGQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNaW4oZGF0YTogYW55LCB0aHJlc2hvbGQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKGRhdGEpICYmXHJcbiAgICAgICAgZGF0YSA+PSB0aHJlc2hvbGQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja01heChkYXRhOiBhbnksIHRocmVzaG9sZDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hlY2tOdW1iZXIoZGF0YSkgJiZcclxuICAgICAgICBkYXRhIDw9IHRocmVzaG9sZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmFuZ2UoZGF0YTogYW55LCBtaW5UaHJlc2hvbGQ6IG51bWJlciwgbWF4VGhyZXNob2xkOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmIChtaW5UaHJlc2hvbGQgPj0gbWF4VGhyZXNob2xkKSBwYXJhbWV0ZXJJbnZhbGlkKCk7XHJcblxyXG4gICAgcmV0dXJuIGNoZWNrTWluKGRhdGEsIG1pblRocmVzaG9sZCkgJiZcclxuICAgICAgICBjaGVja01heChkYXRhLCBtYXhUaHJlc2hvbGQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tNYXRjaChkYXRhOiBhbnksIHJlZ2V4OiBSZWdFeHApOiBib29sZWFuIHtcclxuICAgIHJldHVybiByZWdleC50ZXN0KGRhdGEpO1xyXG59IiwiaW1wb3J0ICcuLi9hc3NldCc7XHJcblxyXG5pbXBvcnQgeyBBbmltYXRpb25PcHRpb25hbCwgQm9yZGVyU3R5bGVPcHRpb25hbCB9IGZyb20gJy4uL2NvbnN0JztcclxuaW1wb3J0IHsgR2xvYmFsVUlXaW5kb3dPcHRpb25Db250cmFjdCB9IGZyb20gJy4uL2NvbnRyYWN0JztcclxuaW1wb3J0IHsgdmFsaWRhdG9yIH0gZnJvbSAnLi4vY29yZS9kZWNvcmF0b3IvcHJvcGVydHknO1xyXG5pbXBvcnQgeyBjaGVja01pbiwgY2hlY2tQc3RJbnQgfSBmcm9tICcuLi9jb3JlL3ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IEVudHJ5T3B0aW9uLCBHbG9iYWxVSVdpbmRvd09wdGlvbiB9IGZyb20gJy4uL3R5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudHJ5IHtcclxuICAgIHByaXZhdGUgY29uc3RydWN0b3Iob3B0aW9uczogRW50cnlPcHRpb24pIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFbnRyeTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlKG9wdGlvbnM6IEVudHJ5T3B0aW9uID0ge30pOiBFbnRyeSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB0aGlzLmluc3RhbmNlID0gbmV3IEVudHJ5KG9wdGlvbnMpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5pbnN0YW5jZS5oYW5kbGVyT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZXJPcHRpb25zKG9wdGlvbnM6IEVudHJ5T3B0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGFydFpJbmRleCA9IG9wdGlvbnM/LnN0YXJ0WkluZGV4ID8/IHRoaXMuc3RhcnRaSW5kZXg7XHJcbiAgICAgICAgdGhpcy53aW5kb3cgPSBvcHRpb25zPy53aW5kb3cgPz8gdGhpcy53aW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlYWRvbmx5IHZlcnNpb246IHN0cmluZyA9IFwiMy4wXCI7XHJcblxyXG4gICAgQHZhbGlkYXRvcihjaGVja1BzdEludCwgW2NoZWNrTWluLCAxMDAwXSlcclxuICAgIHB1YmxpYyBzdGFydFpJbmRleDogbnVtYmVyID0gMTAwMDAwMDA7XHJcblxyXG4gICAgQHZhbGlkYXRvcihHbG9iYWxVSVdpbmRvd09wdGlvbkNvbnRyYWN0KVxyXG4gICAgcHVibGljIHdpbmRvdzogR2xvYmFsVUlXaW5kb3dPcHRpb24gPSB7XHJcbiAgICAgICAgd2lkdGg6IDgwMCxcclxuICAgICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgICBtaW5XaWR0aDogMjAwLFxyXG4gICAgICAgIG1pbkhlaWdodDogMjAwLFxyXG4gICAgICAgIG1heFdpZHRoOiBpbm5lcldpZHRoLFxyXG4gICAgICAgIG1heEhlaWdodDogaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBib3hTaGFkb3c6IHRydWUsXHJcbiAgICAgICAgYW5pbWF0ZTogQW5pbWF0aW9uT3B0aW9uYWwuWk9PTSxcclxuICAgICAgICBib3JkZXI6IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgIHN0eWxlOiBCb3JkZXJTdHlsZU9wdGlvbmFsLlNPTElELFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjM2JhY2VkXCIsXHJcbiAgICAgICAgICAgIHJhZGl1czogNFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyBFbnRyeSB9IGZyb20gJy4vZW50cnknO1xyXG5pbXBvcnQgeyBFbnRyeU9wdGlvbiwgT3ZlcnQgfSBmcm9tICcuL3R5cGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIG92ZXJ0KCk6IE92ZXJ0IHtcclxuICAgIGNvbnN0IGVudHJ5ID0gRW50cnkuSW5zdGFuY2UoKTtcclxuICAgIGNvbnN0IG92ZXJ0ID0gPE92ZXJ0PmZ1bmN0aW9uIChvcHRpb25zOiBFbnRyeU9wdGlvbikge1xyXG4gICAgICAgIEVudHJ5Lkluc3RhbmNlKG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIG92ZXJ0LnZlcnNpb24gPSBlbnRyeS52ZXJzaW9uO1xyXG4gICAgcmV0dXJuIG92ZXJ0O1xyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9