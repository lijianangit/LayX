(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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

/***/ "./src/components/Container.ts":
/*!*************************************!*\
  !*** ./src/components/Container.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ThemeEnum_1 = __webpack_require__(/*! ../enums/ThemeEnum */ "./src/enums/ThemeEnum.ts");
var ValueTypeHelper_1 = __webpack_require__(/*! ../utils/ValueTypeHelper */ "./src/utils/ValueTypeHelper.ts");
var Container = (function () {
    function Container(options) {
        this.prefix = "layx-";
        this.width = 800;
        this.height = 600;
        this.minWidth = 200;
        this.minHeight = 200;
        this.maxWidth = innerWidth;
        this.maxHeight = innerHeight;
        this.theme = ThemeEnum_1.ThemeEnum.DEFAULT;
        this.id = "" + this.prefix + options.id;
        this.width = ValueTypeHelper_1.convertDimension(options.width) || this.width;
        this.height = ValueTypeHelper_1.convertDimension(options.height, "BROWSER_INNER_HEIGHT") || this.height;
        this.minWidth = ValueTypeHelper_1.convertDimension(options.minWidth) || this.minWidth;
        this.minHeight = ValueTypeHelper_1.convertDimension(options.minHeight, "BROWSER_INNER_HEIGHT") || this.minHeight;
        this.maxWidth = ValueTypeHelper_1.convertDimension(options.maxWidth) || this.maxWidth;
        this.maxHeight = ValueTypeHelper_1.convertDimension(options.maxHeight, "BROWSER_INNER_HEIGHT") || this.maxHeight;
        this.theme = options.theme || this.theme;
    }
    Container.prototype.createView = function (container) {
        var fragment = document.createDocumentFragment();
        var containerElement = document.createElement("div");
        containerElement.id = container.id;
        containerElement.classList.add(container.prefix + "container", "" + (container.prefix + container.theme));
        containerElement.style.width = container.width + "px";
        containerElement.style.height = container.height + "px";
        containerElement.style.minWidth = container.minWidth + "px";
        containerElement.style.minHeight = container.minHeight + "px";
        containerElement.style.maxWidth = container.maxWidth === innerWidth ? null : container.maxWidth + "px";
        containerElement.style.maxHeight = container.maxHeight === innerHeight ? null : container.maxHeight + "px";
        fragment.appendChild(containerElement);
        return fragment;
    };
    return Container;
}());
exports.default = Container;


/***/ }),

/***/ "./src/enums/ThemeEnum.ts":
/*!********************************!*\
  !*** ./src/enums/ThemeEnum.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ThemeEnum;
(function (ThemeEnum) {
    ThemeEnum["DEFAULT"] = "default";
})(ThemeEnum = exports.ThemeEnum || (exports.ThemeEnum = {}));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = __importDefault(__webpack_require__(/*! ./components/Container */ "./src/components/Container.ts"));
var container = new Container_1.default({ id: "hello", width: "30%" });
var fragment = container.createView(container);
document.body.appendChild(fragment);


/***/ }),

/***/ "./src/utils/ValueTypeHelper.ts":
/*!**************************************!*\
  !*** ./src/utils/ValueTypeHelper.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function convertDimension(dimension, reference) {
    if (reference === void 0) { reference = "BROWSER_INNER_WIDTH"; }
    if (typeof dimension === "undefined")
        return undefined;
    if (typeof dimension === "number") {
        return dimension;
    }
    if (/^(([1-9][0-9]*(\.\d{1,2})?)|(0\.\d{1,2}))$/.test(dimension)) {
        return Number(dimension);
    }
    if (/^(100|[1-9]?\d(\.\d\d?)?)%$/.test(dimension)) {
        var ratio = Number(dimension.replace("%", ""));
        switch (reference) {
            case "BROWSER_INNER_WIDTH":
                return innerWidth * (ratio / 100);
            case "BROWSER_INNER_HEIGHT":
                return innerHeight * (ratio / 100);
        }
    }
}
exports.convertDimension = convertDimension;


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=layx.js.map