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
Object.defineProperty(exports, "__esModule", { value: true });
var UIComponent_1 = require("../basic/UIComponent");
var ElementHelper_1 = require("../utils/ElementHelper");
var WindowAnimate_1 = require("../basic/enums/WindowAnimate");
var ValueHelper_1 = require("../utils/ValueHelper");
var TypeHelper_1 = require("../utils/TypeHelper");
var JsonHelper_1 = require("../utils/JsonHelper");
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(app, options) {
        var _this = _super.call(this, app) || this;
        _this.kind = "window";
        _this._width = 800;
        _this._height = 600;
        _this._mode = "layer";
        _this._background = "#ffffff";
        _this._border = null;
        _this._borderRadius = null;
        _this._boxShadow = "rgba(0, 0, 0, 0.3) 1px 1px 24px";
        _this._animate = WindowAnimate_1.WindowAnimate.ZOOM;
        if (!options.id)
            throw new Error("`id` is required.");
        _this._id = options.id;
        _this._width = ValueHelper_1.numberCast(options.width) || _this._width;
        _this._height = ValueHelper_1.numberCast(options.height) || _this._height;
        var coord = ValueHelper_1.offsetCast(options.offset, _this._width, _this._height) || [(innerWidth - _this._width) / 2, (innerHeight - _this._height) / 2];
        _this._left = coord[0];
        _this._top = coord[1];
        (_this._mode = options.mode || _this._mode) && TypeHelper_1.isWindowMode(_this._mode);
        _this._background = options.background || _this.background;
        var defaultBorder = {
            width: 1,
            style: "solid",
            color: "#3baced",
            radius: 4
        };
        var borderOption = options.border === undefined ?
            defaultBorder :
            (TypeHelper_1.isJsonObject(options.border) ? JsonHelper_1.merge(defaultBorder, options.border) : options.border);
        var borderStyle = ElementHelper_1.borderCast(borderOption);
        _this._border = borderStyle[0];
        _this._borderRadius = borderStyle[1];
        return _this;
    }
    Object.defineProperty(UIWindow.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "background", {
        get: function () {
            return this._background;
        },
        set: function (value) {
            this._background = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "border", {
        get: function () {
            return this._border;
        },
        set: function (value) {
            this._border = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "borderRadius", {
        get: function () {
            return this._borderRadius;
        },
        set: function (value) {
            this._borderRadius = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "boxShadow", {
        get: function () {
            return this._boxShadow;
        },
        set: function (value) {
            this._boxShadow = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "animate", {
        get: function () {
            return this._animate;
        },
        set: function (value) {
            this._animate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (value) {
            this._left = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIWindow.prototype, "top", {
        get: function () {
            return this._top;
        },
        set: function (value) {
            this._top = value;
        },
        enumerable: true,
        configurable: true
    });
    UIWindow.prototype.present = function () {
        var _this = this;
        var fragment = document.createDocumentFragment();
        var windowElement = document.createElement("div");
        windowElement.id = this.app.prefix + this.id;
        var isNeedAnimation = this.animate !== WindowAnimate_1.WindowAnimate.NONE;
        ElementHelper_1.addClasses(windowElement, this.app.prefix, this.kind, "window-" + this.mode, "flexbox", isNeedAnimation ? "animate" : "", isNeedAnimation ? "animate-" + this.animate + "In" : "");
        ElementHelper_1.addStyles(windowElement, {
            zIndex: this.mode === "layer" ? "" + this.app.zIndex : null,
            width: this.width + "px",
            height: this.height + "px",
            top: this.top + "px",
            left: this.left + "px",
            background: this.background,
            border: this.border,
            borderRadius: this.borderRadius,
            webkitBorderRadius: this.borderRadius,
            boxShadow: this.boxShadow,
            webkitBoxShadow: this.boxShadow
        });
        isNeedAnimation && (windowElement.addEventListener("animationend", function (ev) {
            ElementHelper_1.removeClasses(windowElement, _this.app.prefix, "animate-" + _this.animate + "In");
        }));
        fragment.appendChild(windowElement);
        return fragment;
    };
    return UIWindow;
}(UIComponent_1.default));
exports.default = UIWindow;
