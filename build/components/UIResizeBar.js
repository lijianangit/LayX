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
var UIComponent_1 = __importDefault(require("./base/UIComponent"));
var StyleHelper_1 = require("../utils/StyleHelper");
var ValueHelper_1 = require("../utils/ValueHelper");
var ObjectHelper_1 = require("../utils/ObjectHelper");
var UIResizeBar = (function (_super) {
    __extends(UIResizeBar, _super);
    function UIResizeBar(window, app) {
        var _this = _super.call(this, window, app) || this;
        _this.name = "resizeBar";
        _this._top = true;
        _this._left = true;
        _this._right = true;
        _this._bottom = true;
        _this._leftTop = true;
        _this._rightTop = true;
        _this._leftBottom = true;
        _this._rightBottom = true;
        if (typeof window.resizeBar === "object") {
            _this.top = typeof window.resizeBar.top === "boolean" ? window.resizeBar.top : _this.top;
            _this.left = typeof window.resizeBar.left === "boolean" ? window.resizeBar.left : _this.left;
            _this.right = typeof window.resizeBar.right === "boolean" ? window.resizeBar.right : _this.right;
            _this.bottom = typeof window.resizeBar.bottom === "boolean" ? window.resizeBar.bottom : _this.bottom;
            _this.leftTop = typeof window.resizeBar.leftTop === "boolean" ? window.resizeBar.leftTop : _this.leftTop;
            _this.rightTop = typeof window.resizeBar.rightTop === "boolean" ? window.resizeBar.rightTop : _this.rightTop;
            _this.leftBottom = typeof window.resizeBar.leftBottom === "boolean" ? window.resizeBar.leftBottom : _this.leftBottom;
            _this.rightBottom = typeof window.resizeBar.rightBottom === "boolean" ? window.resizeBar.rightBottom : _this.rightBottom;
        }
        return _this;
    }
    Object.defineProperty(UIResizeBar.prototype, "top", {
        get: function () {
            return this._top;
        },
        set: function (newValue) {
            this._top = newValue;
            if (typeof this.window.resizeBar === "object") {
                this.window.resizeBar.top = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIResizeBar.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (newValue) {
            this._left = newValue;
            if (typeof this.window.resizeBar === "object") {
                this.window.resizeBar.left = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIResizeBar.prototype, "right", {
        get: function () {
            return this._right;
        },
        set: function (newValue) {
            this._right = newValue;
            if (typeof this.window.resizeBar === "object") {
                this.window.resizeBar.right = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIResizeBar.prototype, "bottom", {
        get: function () {
            return this._bottom;
        },
        set: function (newValue) {
            this._bottom = newValue;
            if (typeof this.window.resizeBar === "object") {
                this.window.resizeBar.bottom = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIResizeBar.prototype, "leftTop", {
        get: function () {
            return this._leftTop;
        },
        set: function (newValue) {
            this._leftTop = newValue;
            if (typeof this.window.resizeBar === "object") {
                this.window.resizeBar.leftTop = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIResizeBar.prototype, "rightTop", {
        get: function () {
            return this._rightTop;
        },
        set: function (newValue) {
            this._rightTop = newValue;
            if (typeof this.window.resizeBar === "object") {
                this.window.resizeBar.rightTop = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIResizeBar.prototype, "leftBottom", {
        get: function () {
            return this._leftBottom;
        },
        set: function (newValue) {
            this._leftBottom = newValue;
            if (typeof this.window.resizeBar === "object") {
                this.window.resizeBar.leftBottom = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIResizeBar.prototype, "rightBottom", {
        get: function () {
            return this._rightBottom;
        },
        set: function (newValue) {
            this._rightBottom = newValue;
            if (typeof this.window.resizeBar === "object") {
                this.window.resizeBar.rightBottom = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    UIResizeBar.prototype.createView = function () {
        var _a;
        if (ObjectHelper_1.leastOneTrue(this.window.resizeBar)) {
            var fragment = document.createDocumentFragment();
            var resizeBarElement = document.createElement("div");
            (_a = resizeBarElement.classList).add.apply(_a, StyleHelper_1.batchClasses(this.app.prefix, ValueHelper_1.getKebabCase(this.name)));
            if (typeof this.window.resizeBar === "object") {
                for (var _i = 0, _b = Object.keys(this.window.resizeBar); _i < _b.length; _i++) {
                    var key = _b[_i];
                    this.createItem(resizeBarElement, this[key], ValueHelper_1.getKebabCase(key));
                }
            }
            fragment.appendChild(resizeBarElement);
            return fragment;
        }
    };
    UIResizeBar.prototype.createItem = function (parent, isCreate, direction) {
        var _a;
        if (!isCreate)
            return;
        var itemElement = document.createElement("div");
        (_a = itemElement.classList).add.apply(_a, StyleHelper_1.batchClasses(this.app.prefix, "resize-" + direction));
        parent.appendChild(itemElement);
    };
    return UIResizeBar;
}(UIComponent_1.default));
exports.default = UIResizeBar;
