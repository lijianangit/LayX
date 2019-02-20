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

/***/ "./src/components/UIDefaultWindow.ts":
/*!*******************************************!*\
  !*** ./src/components/UIDefaultWindow.ts ***!
  \*******************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIToolBar_1 = __importDefault(__webpack_require__(/*! ./UIToolBar */ "./src/components/UIToolBar.ts"));
var UITopMenu_1 = __importDefault(__webpack_require__(/*! ./UITopMenu */ "./src/components/UITopMenu.ts"));
var UISideBar_1 = __importDefault(__webpack_require__(/*! ./UISideBar */ "./src/components/UISideBar.ts"));
var UIWindow_1 = __importDefault(__webpack_require__(/*! ./base/UIWindow */ "./src/components/base/UIWindow.ts"));
var UIDefaultWindow = (function (_super) {
    __extends(UIDefaultWindow, _super);
    function UIDefaultWindow(options, layx) {
        return _super.call(this, options, layx) || this;
    }
    UIDefaultWindow.prototype.createView = function () {
        var fragment = document.createDocumentFragment();
        var windowElement = document.createElement("div");
        windowElement.id = this.id;
        windowElement.classList.add(this.layx.prefix + "window", this.layx.prefix + "theme-" + this.theme);
        windowElement.style.width = this.width + "px";
        windowElement.style.height = this.height + "px";
        windowElement.style.minWidth = this.minWidth + "px";
        windowElement.style.minHeight = this.minHeight + "px";
        windowElement.style.maxWidth = this.maxWidth === innerWidth ? null : this.maxWidth + "px";
        windowElement.style.maxHeight = this.maxHeight === innerHeight ? null : this.maxHeight + "px";
        windowElement.style.background = this.background;
        var parcloseElement = this.createParcloseView();
        if (parcloseElement) {
            fragment.appendChild(parcloseElement);
        }
        for (var _i = 0, _a = [UIToolBar_1.default, UITopMenu_1.default, UISideBar_1.default, UISideBar_1.default]; _i < _a.length; _i++) {
            var component = _a[_i];
            this.initComponet(windowElement, component);
        }
        var resizeElements = this.createResizeView();
        if (resizeElements) {
            windowElement.appendChild(resizeElements);
        }
        fragment.appendChild(windowElement);
        return fragment;
    };
    return UIDefaultWindow;
}(UIWindow_1.default));
exports.default = UIDefaultWindow;


/***/ }),

/***/ "./src/components/UISideBar.ts":
/*!*************************************!*\
  !*** ./src/components/UISideBar.ts ***!
  \*************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ValueHelper_1 = __webpack_require__(/*! ../utils/ValueHelper */ "./src/utils/ValueHelper.ts");
var UIComponent_1 = __importDefault(__webpack_require__(/*! ./base/UIComponent */ "./src/components/base/UIComponent.ts"));
var UISideBar = (function (_super) {
    __extends(UISideBar, _super);
    function UISideBar(window, layx) {
        var _this = _super.call(this, window, layx) || this;
        _this.name = "sideBar";
        _this.width = 60;
        _this.background = "#eeeef2";
        if (typeof window.sideBar === "object") {
            _this.width = window.sideBar.width || _this.width;
            _this.background = window.sideBar.background || _this.background;
        }
        return _this;
    }
    UISideBar.prototype.createView = function () {
        var fragment = document.createDocumentFragment();
        var sideBarElement = document.createElement("div");
        sideBarElement.classList.add("" + (this.layx.prefix + ValueHelper_1.getKebabCase(this.name)));
        sideBarElement.style.width = this.width + "px";
        sideBarElement.style.background = this.background;
        fragment.appendChild(sideBarElement);
        return fragment;
    };
    return UISideBar;
}(UIComponent_1.default));
exports.default = UISideBar;


/***/ }),

/***/ "./src/components/UIToolBar.ts":
/*!*************************************!*\
  !*** ./src/components/UIToolBar.ts ***!
  \*************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ValueHelper_1 = __webpack_require__(/*! ../utils/ValueHelper */ "./src/utils/ValueHelper.ts");
var UIComponent_1 = __importDefault(__webpack_require__(/*! ./base/UIComponent */ "./src/components/base/UIComponent.ts"));
var UIToolBar = (function (_super) {
    __extends(UIToolBar, _super);
    function UIToolBar(window, layx) {
        var _this = _super.call(this, window, layx) || this;
        _this.name = "toolBar";
        _this.height = 30;
        _this.background = "#ffffff";
        if (typeof window.toolBar === "object") {
            _this.height = window.toolBar.height || _this.height;
            _this.background = window.toolBar.background || _this.background;
        }
        return _this;
    }
    UIToolBar.prototype.createView = function () {
        var fragment = document.createDocumentFragment();
        var toolBarElement = document.createElement("div");
        toolBarElement.classList.add("" + (this.layx.prefix + ValueHelper_1.getKebabCase(this.name)));
        toolBarElement.style.height = this.height + "px";
        toolBarElement.style.background = this.background;
        fragment.appendChild(toolBarElement);
        return fragment;
    };
    return UIToolBar;
}(UIComponent_1.default));
exports.default = UIToolBar;


/***/ }),

/***/ "./src/components/UITopMenu.ts":
/*!*************************************!*\
  !*** ./src/components/UITopMenu.ts ***!
  \*************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ValueHelper_1 = __webpack_require__(/*! ../utils/ValueHelper */ "./src/utils/ValueHelper.ts");
var UIComponent_1 = __importDefault(__webpack_require__(/*! ./base/UIComponent */ "./src/components/base/UIComponent.ts"));
var UITopMenu = (function (_super) {
    __extends(UITopMenu, _super);
    function UITopMenu(window, layx) {
        var _this = _super.call(this, window, layx) || this;
        _this.name = "topMenu";
        _this.background = "#eeeef2";
        if (typeof window.topMenu === "object") {
            _this.background = window.topMenu.background || _this.background;
        }
        return _this;
    }
    UITopMenu.prototype.createView = function () {
        var fragment = document.createDocumentFragment();
        var topMenuElement = document.createElement("div");
        topMenuElement.classList.add("" + (this.layx.prefix + ValueHelper_1.getKebabCase(this.name)));
        topMenuElement.style.background = this.background;
        fragment.appendChild(topMenuElement);
        return fragment;
    };
    return UITopMenu;
}(UIComponent_1.default));
exports.default = UITopMenu;


/***/ }),

/***/ "./src/components/base/UIComponent.ts":
/*!********************************************!*\
  !*** ./src/components/base/UIComponent.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UIComponent = (function () {
    function UIComponent(window, layx) {
        this.window = window;
        this.layx = layx;
    }
    return UIComponent;
}());
exports.default = UIComponent;


/***/ }),

/***/ "./src/components/base/UIWindow.ts":
/*!*****************************************!*\
  !*** ./src/components/base/UIWindow.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ValueHelper_1 = __webpack_require__(/*! ../../utils/ValueHelper */ "./src/utils/ValueHelper.ts");
var ObjectHelper_1 = __webpack_require__(/*! ../../utils/ObjectHelper */ "./src/utils/ObjectHelper.ts");
var UIWindow = (function () {
    function UIWindow(options, layx) {
        this.options = options;
        this.layx = layx;
        this.width = 800;
        this.height = 600;
        this.minWidth = 200;
        this.minHeight = 200;
        this.maxWidth = innerWidth;
        this.maxHeight = innerHeight;
        this.theme = "default";
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
        this.id = "" + layx.prefix + options.id;
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
    UIWindow.prototype.createParcloseView = function () {
        if (this.parclose === true) {
            var parcloseElement = document.createElement("div");
            parcloseElement.id = this.id + "-parclose";
            parcloseElement.classList.add(this.layx.prefix + "parclose");
            return parcloseElement;
        }
    };
    UIWindow.prototype.createResizeView = function () {
        if (ObjectHelper_1.leastOneTrue(this.resize)) {
            var resizeElements = document.createElement("div");
            resizeElements.classList.add(this.layx.prefix + "resizes");
            for (var _i = 0, _a = Object.keys(this.resize); _i < _a.length; _i++) {
                var key = _a[_i];
                this.createResizeItem(resizeElements, this.resize.top, ValueHelper_1.getKebabCase(key));
            }
            return resizeElements;
        }
    };
    UIWindow.prototype.createResizeItem = function (parent, isCreate, direction) {
        if (!isCreate)
            return;
        var resize = document.createElement("div");
        resize.classList.add(this.layx.prefix + "resize-" + direction);
        parent.appendChild(resize);
    };
    UIWindow.prototype.initComponet = function (parent, ctor) {
        var componet = new ctor(this, this.layx);
        if (this[componet.name] !== undefined) {
            var componentFragment = componet.createView();
            parent.appendChild(componentFragment);
            return componet;
        }
    };
    return UIWindow;
}());
exports.default = UIWindow;


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
var UIDefaultWindow_1 = __importDefault(__webpack_require__(/*! ./components/UIDefaultWindow */ "./src/components/UIDefaultWindow.ts"));
function layxInstance() {
    var layx = function (options) { };
    layx.zIndex = 10000000;
    layx.prefix = "layx-";
    layx.create = function (options) {
        var windowOptions = { id: "hello", background: "#dedede" };
        var window = new UIDefaultWindow_1.default(windowOptions, layx);
        var windowFragment = window.createView();
        document.body.appendChild(windowFragment);
    };
    return layx;
}
exports.default = layxInstance();


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