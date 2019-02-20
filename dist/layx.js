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

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Theme_1 = __webpack_require__(/*! ../enums/Theme */ "./src/enums/Theme.ts");
var ValueHelper_1 = __webpack_require__(/*! ../utils/ValueHelper */ "./src/utils/ValueHelper.ts");
var ObjectHelper_1 = __webpack_require__(/*! ../utils/ObjectHelper */ "./src/utils/ObjectHelper.ts");
var ToolBar_1 = __importDefault(__webpack_require__(/*! ./ToolBar */ "./src/components/ToolBar.ts"));
var TopMenu_1 = __importDefault(__webpack_require__(/*! ./TopMenu */ "./src/components/TopMenu.ts"));
var StatuBar_1 = __importDefault(__webpack_require__(/*! ./StatuBar */ "./src/components/StatuBar.ts"));
var SideBar_1 = __importDefault(__webpack_require__(/*! ./SideBar */ "./src/components/SideBar.ts"));
var Container = (function () {
    function Container(options) {
        this.prefix = "layx-";
        this.width = 800;
        this.height = 600;
        this.minWidth = 200;
        this.minHeight = 200;
        this.maxWidth = innerWidth;
        this.maxHeight = innerHeight;
        this.theme = Theme_1.Theme.DEFAULT;
        this.background = "#ffffff";
        this.parclose = false;
        this.resize = {
            top: true,
            left: true,
            right: true,
            bottom: true,
            leftTop: true,
            rightTop: true,
            leftBottom: true,
            rightBottom: true
        };
        this.toolBar = {};
        this.topMenu = undefined;
        this.statuBar = undefined;
        this.sideBar = undefined;
        this.id = "" + this.prefix + options.id;
        this.width = ValueHelper_1.convertDimension(options.width) || this.width;
        this.height = ValueHelper_1.convertDimension(options.height, "BROWSER_INNER_HEIGHT") || this.height;
        this.minWidth = ValueHelper_1.convertDimension(options.minWidth) || this.minWidth;
        this.minHeight = ValueHelper_1.convertDimension(options.minHeight, "BROWSER_INNER_HEIGHT") || this.minHeight;
        this.maxWidth = ValueHelper_1.convertDimension(options.maxWidth) || this.maxWidth;
        this.maxHeight = ValueHelper_1.convertDimension(options.maxHeight, "BROWSER_INNER_HEIGHT") || this.maxHeight;
        this.theme = options.theme || this.theme;
        this.background = options.background || this.background;
        this.parclose = typeof options.parclose === "boolean" ? options.parclose : this.parclose;
        if (typeof options.resize === "boolean" && options.resize === false) {
            this.resize = ObjectHelper_1.reverseBooleanObject(this.resize);
        }
        else if (typeof options.resize === "object") {
            this.resize = ObjectHelper_1.merge(this.resize, options.resize);
        }
        if (typeof options.toolBar === "boolean" && options.toolBar === false) {
            this.toolBar = undefined;
        }
        else if (typeof options.toolBar === "object") {
            this.toolBar = ObjectHelper_1.merge(this.toolBar, options.toolBar);
        }
        if (typeof options.topMenu === "object") {
            this.topMenu = ObjectHelper_1.merge({}, options.topMenu);
        }
        if (typeof options.statuBar === "object") {
            this.statuBar = ObjectHelper_1.merge({}, options.statuBar);
        }
        if (typeof options.sideBar === "object") {
            this.sideBar = ObjectHelper_1.merge({}, options.sideBar);
        }
    }
    Container.prototype.createView = function () {
        var fragment = document.createDocumentFragment();
        var containerElement = document.createElement("div");
        containerElement.id = this.id;
        containerElement.classList.add(this.prefix + "container", this.prefix + "theme-" + this.theme);
        containerElement.style.width = this.width + "px";
        containerElement.style.height = this.height + "px";
        containerElement.style.minWidth = this.minWidth + "px";
        containerElement.style.minHeight = this.minHeight + "px";
        containerElement.style.maxWidth = this.maxWidth === innerWidth ? null : this.maxWidth + "px";
        containerElement.style.maxHeight = this.maxHeight === innerHeight ? null : this.maxHeight + "px";
        containerElement.style.background = this.background;
        var parcloseElement = this.createParcloseView();
        if (parcloseElement) {
            fragment.appendChild(parcloseElement);
        }
        if (this.toolBar !== undefined) {
            var toolBar = new ToolBar_1.default(this);
            var toolBarFragment = toolBar.createView();
            containerElement.appendChild(toolBarFragment);
        }
        if (this.topMenu !== undefined) {
            var topMenu = new TopMenu_1.default(this);
            var topMenuFragment = topMenu.createView();
            containerElement.appendChild(topMenuFragment);
        }
        if (this.sideBar !== undefined) {
            var sideBar = new SideBar_1.default(this);
            var sideBarFragment = sideBar.createView();
            containerElement.appendChild(sideBarFragment);
        }
        if (this.statuBar !== undefined) {
            var statuBar = new StatuBar_1.default(this);
            var statuBarFragment = statuBar.createView();
            containerElement.appendChild(statuBarFragment);
        }
        var resizeElements = this.createResizeView();
        if (resizeElements) {
            containerElement.appendChild(resizeElements);
        }
        fragment.appendChild(containerElement);
        return fragment;
    };
    Container.prototype.createParcloseView = function () {
        if (this.parclose === true) {
            var parcloseElement = document.createElement("div");
            parcloseElement.id = this.id + "-parclose";
            parcloseElement.classList.add(this.prefix + "parclose");
            return parcloseElement;
        }
    };
    Container.prototype.createResizeView = function () {
        if (ObjectHelper_1.leastOneTrue(this.resize)) {
            var resizeElements = document.createElement("div");
            resizeElements.classList.add(this.prefix + "resizes");
            for (var _i = 0, _a = Object.keys(this.resize); _i < _a.length; _i++) {
                var key = _a[_i];
                this.createResizeItem(resizeElements, this.resize.top, ValueHelper_1.getKebabCase(key));
            }
            return resizeElements;
        }
    };
    Container.prototype.createResizeItem = function (parent, isCreate, direction) {
        if (!isCreate)
            return;
        var resize = document.createElement("div");
        resize.classList.add(this.prefix + "resize-" + direction);
        parent.appendChild(resize);
    };
    return Container;
}());
exports.default = Container;


/***/ }),

/***/ "./src/components/SideBar.ts":
/*!***********************************!*\
  !*** ./src/components/SideBar.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SideBar = (function () {
    function SideBar(container) {
        this.container = container;
        this.width = 60;
        this.background = "#eeeef2";
        if (typeof container.sideBar === "object") {
            this.width = container.sideBar.width || this.width;
            this.background = container.sideBar.background || this.background;
        }
    }
    SideBar.prototype.createView = function () {
        var fragment = document.createDocumentFragment();
        var sideBarElement = document.createElement("div");
        sideBarElement.classList.add(this.container.prefix + "side-bar");
        sideBarElement.style.width = this.width + "px";
        sideBarElement.style.background = this.background;
        fragment.appendChild(sideBarElement);
        return fragment;
    };
    return SideBar;
}());
exports.default = SideBar;


/***/ }),

/***/ "./src/components/StatuBar.ts":
/*!************************************!*\
  !*** ./src/components/StatuBar.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StatuBar = (function () {
    function StatuBar(container) {
        this.container = container;
        this.height = 30;
        this.background = "#eeeef2";
        if (typeof container.statuBar === "object") {
            this.background = container.statuBar.background || this.background;
            this.height = container.statuBar.height || this.height;
        }
    }
    StatuBar.prototype.createView = function () {
        var fragment = document.createDocumentFragment();
        var statuBarElement = document.createElement("div");
        statuBarElement.classList.add(this.container.prefix + "statu-bar");
        statuBarElement.style.height = this.height + "px";
        statuBarElement.style.background = this.background;
        fragment.appendChild(statuBarElement);
        return fragment;
    };
    return StatuBar;
}());
exports.default = StatuBar;


/***/ }),

/***/ "./src/components/ToolBar.ts":
/*!***********************************!*\
  !*** ./src/components/ToolBar.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ToolBar = (function () {
    function ToolBar(container) {
        this.container = container;
        this.height = 30;
        this.background = "#ffffff";
        if (typeof container.toolBar === "object") {
            this.height = container.toolBar.height || this.height;
            this.background = container.toolBar.background || this.background;
        }
    }
    ToolBar.prototype.createView = function () {
        var fragment = document.createDocumentFragment();
        var toolBarElement = document.createElement("div");
        toolBarElement.classList.add(this.container.prefix + "tool-bar");
        toolBarElement.style.height = this.height + "px";
        toolBarElement.style.background = this.background;
        fragment.appendChild(toolBarElement);
        return fragment;
    };
    return ToolBar;
}());
exports.default = ToolBar;


/***/ }),

/***/ "./src/components/TopMenu.ts":
/*!***********************************!*\
  !*** ./src/components/TopMenu.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TopMenu = (function () {
    function TopMenu(container) {
        this.container = container;
        this.background = "#eeeef2";
        if (typeof container.topMenu === "object") {
            this.background = container.topMenu.background || this.background;
        }
    }
    TopMenu.prototype.createView = function () {
        var fragment = document.createDocumentFragment();
        var topMenuElement = document.createElement("div");
        topMenuElement.classList.add(this.container.prefix + "top-menu");
        topMenuElement.style.background = this.background;
        fragment.appendChild(topMenuElement);
        return fragment;
    };
    return TopMenu;
}());
exports.default = TopMenu;


/***/ }),

/***/ "./src/enums/Theme.ts":
/*!****************************!*\
  !*** ./src/enums/Theme.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Theme;
(function (Theme) {
    Theme["DEFAULT"] = "default";
})(Theme = exports.Theme || (exports.Theme = {}));


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
var containerOptions = { id: "hello", background: "#dedede" };
var container = new Container_1.default(containerOptions);
var containerFragment = container.createView();
document.body.appendChild(containerFragment);


/***/ }),

/***/ "./src/utils/ObjectHelper.ts":
/*!***********************************!*\
  !*** ./src/utils/ObjectHelper.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isJsonObject(target) {
    return typeof target === "object" && target.constructor === Object;
}
exports.isJsonObject = isJsonObject;
function clone(source) {
    var newT = {};
    for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        newT[key] = isJsonObject(source[key]) ? clone(source[key]) : source[key];
    }
    return newT;
}
exports.clone = clone;
function merge(source, dest) {
    var target = clone(source);
    for (var _i = 0, _a = Object.keys(dest); _i < _a.length; _i++) {
        var key = _a[_i];
        if (target[key] === undefined || !isJsonObject(dest[key])) {
            target[key] = dest[key];
            continue;
        }
        target[key] = merge(target[key], dest[key]);
    }
    return target;
}
exports.merge = merge;
function leastOneTrue(obj) {
    if (typeof obj === "boolean")
        return obj;
    var flag = false;
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        if (obj[key] === true) {
            flag = true;
            break;
        }
    }
    return flag;
}
exports.leastOneTrue = leastOneTrue;
function reverseBooleanObject(source) {
    var target = {};
    for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        target[key] = !source[key];
    }
    return target;
}
exports.reverseBooleanObject = reverseBooleanObject;
function getProperty(obj, key) {
    return obj[key];
}
exports.getProperty = getProperty;


/***/ }),

/***/ "./src/utils/ValueHelper.ts":
/*!**********************************!*\
  !*** ./src/utils/ValueHelper.ts ***!
  \**********************************/
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
function getKebabCase(str) {
    return str.replace(/[A-Z]/g, function (item) {
        return "-" + item.toLowerCase();
    });
}
exports.getKebabCase = getKebabCase;


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=layx.js.map