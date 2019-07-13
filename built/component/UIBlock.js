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
var UIComponent_1 = require("../core/ui/UIComponent");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var TypeHelper = require("../utils/TypeHelper");
var StateStore_1 = require("../core/store/StateStore");
var UIBlock = (function (_super) {
    __extends(UIBlock, _super);
    function UIBlock() {
        var _this = _super.call(this) || this;
        _this._background = false;
        _this._shadow = false;
        _this._border = false;
        _this._animate = "none";
        _this._mode = "float";
        _this.animatable = false;
        return _this;
    }
    Object.defineProperty(UIBlock.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = CastHelper.numberOrUndefinedCast(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = CastHelper.numberOrUndefinedCast(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "maxWidth", {
        get: function () {
            return this._maxWidth;
        },
        set: function (value) {
            this._maxWidth = CastHelper.numberOrUndefinedCast(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "maxHeight", {
        get: function () {
            return this._maxHeight;
        },
        set: function (value) {
            this._maxHeight = CastHelper.numberOrUndefinedCast(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "minWidth", {
        get: function () {
            return this._minWidth;
        },
        set: function (value) {
            this._minWidth = CastHelper.numberOrUndefinedCast(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "minHeight", {
        get: function () {
            return this._minHeight;
        },
        set: function (value) {
            this._minHeight = CastHelper.numberOrUndefinedCast(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (value) {
            this._left = CastHelper.numberOrUndefinedCast(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "top", {
        get: function () {
            return this._top;
        },
        set: function (value) {
            this._top = CastHelper.numberOrUndefinedCast(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "background", {
        get: function () {
            return this._background;
        },
        set: function (value) {
            this._background = value === false ? undefined : CastHelper.stringOrUndefinedCast(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "shadow", {
        get: function () {
            return this._shadow;
        },
        set: function (value) {
            this._shadow = value === false ? undefined : CastHelper.stringOrUndefinedCast(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "border", {
        get: function () {
            return this._border;
        },
        set: function (value) {
            this._border = value === false ? undefined : CastHelper.stringOrUndefinedCast(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "borderRadius", {
        get: function () {
            return this._borderRadius;
        },
        set: function (value) {
            this._borderRadius = CastHelper.numberOrUndefinedCast(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "animate", {
        get: function () {
            return this._animate;
        },
        set: function (value) {
            if (value === false || value === undefined) {
                this._animate = "none";
            }
            if (TypeHelper.isAnimateType(value)) {
                this._animate = value;
            }
            if (this._animate !== "none") {
                this.animatable = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            if (value === undefined)
                this._mode = "float";
            if (TypeHelper.isPresentMode(value)) {
                this._mode = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    UIBlock.prototype.createView = function () {
        var stateStore = StateStore_1.default.instance;
        var element = ElementHelper.createElement("div");
        element.setAttribute("data-id", this.uniqueId);
        ElementHelper.addClasses(element, stateStore.prefix, "block", this.animatable ? "animate" : undefined, this.animatable ? "animate-" + this.animate + "-to-in" : undefined, "mode-" + this.mode);
        ElementHelper.addStyles(element, {
            width: this.width ? this.width + "px" : undefined,
            height: this.height ? this.height + "px" : undefined,
            maxWidth: this.maxWidth ? this.maxWidth + "px" : undefined,
            maxHeight: this.maxHeight ? this.maxHeight + "px" : undefined,
            minWidth: this.maxHeight ? this.minWidth + "px" : undefined,
            minHeight: this.minHeight ? this.minHeight + "px" : undefined,
            left: this.mode === "float" && this.left ? this.left + "px" : undefined,
            top: this.mode === "float" && this.top ? this.top + "px" : undefined,
            zIndex: this.mode === "float" ? "" + stateStore.zIndex : undefined,
            background: this.background,
            border: this.border,
            borderRadius: this.borderRadius ? this.borderRadius + "px" : undefined,
            webkitBorderRadius: this.borderRadius ? this.borderRadius + "px" : undefined,
            boxShadow: this.shadow,
            webkitBoxShadow: this.shadow
        });
        return element;
    };
    UIBlock.prototype.updateZIndex = function () {
        var stateStore = StateStore_1.default.instance;
        ElementHelper.addStyles(this.element, {
            zIndex: this.mode === "float" ? "" + stateStore.zIndex : undefined,
        });
    };
    return UIBlock;
}(UIComponent_1.default));
exports.default = UIBlock;
