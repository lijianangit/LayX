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
    function UIBlock(type) {
        if (type === void 0) { type = "default"; }
        var _this = _super.call(this) || this;
        _this.type = type;
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
            var newSize = this.handlerWidthOrHeight("width");
            if (newSize) {
                this._width = newSize;
                this.updateOffset({
                    width: newSize
                });
            }
            ;
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
            var newSize = this.handlerWidthOrHeight("height");
            if (newSize) {
                this._height = newSize;
                this.updateOffset({
                    height: newSize
                });
            }
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
            if (this._maxWidth && this.width && this.width > this._maxWidth) {
                this.width = this._maxWidth;
                this.updateOffset({
                    width: this._maxWidth
                });
            }
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
            if (this._maxHeight && this.height && this.height > this._maxHeight) {
                this.height = this._maxHeight;
                this.updateOffset({
                    height: this._maxHeight
                });
            }
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
            if (this._minWidth && this.width && this.width < this._minWidth) {
                this.width = this._minWidth;
                this.updateOffset({
                    width: this._minWidth
                });
            }
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
            if (this._minHeight && this.height && this.height < this._minHeight) {
                this.height = this.minHeight;
                this.updateOffset({
                    height: this.minHeight
                });
            }
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
    UIBlock.prototype.createView = function (inject) {
        var stateStore = StateStore_1.default.instance;
        var element = ElementHelper.createElement("div");
        element.setAttribute("data-id", this.uniqueId);
        element.setAttribute("data-type", this.type);
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
        this.registerEvent(element);
        if (inject)
            inject(element);
        return element;
    };
    UIBlock.prototype.updateZIndex = function () {
        var stateStore = StateStore_1.default.instance;
        ElementHelper.addStyles(this.element, {
            zIndex: this.mode === "float" ? "" + stateStore.zIndex : undefined,
        });
    };
    UIBlock.prototype.destroy = function () {
        if (this.animatable) {
            var element = this.element;
            if (!element)
                return;
            var stateStore = StateStore_1.default.instance;
            ElementHelper.addClasses(element, stateStore.prefix, "animate-" + this.animate + "-to-out");
        }
        else {
            this.dispose();
        }
    };
    UIBlock.prototype.updateOffset = function (coordinate) {
        var element = this.element;
        if (!element)
            return;
        var stateStore = StateStore_1.default.instance;
        ElementHelper.addStyles(element, {
            width: coordinate.width ? coordinate.width + "px" : undefined,
            height: coordinate.height ? coordinate.height + "px" : undefined,
            maxWidth: coordinate.maxWidth ? coordinate.maxWidth + "px" : undefined,
            maxHeight: coordinate.maxHeight ? coordinate.maxHeight + "px" : undefined,
            minWidth: coordinate.maxHeight ? coordinate.minWidth + "px" : undefined,
            minHeight: coordinate.minHeight ? coordinate.minHeight + "px" : undefined,
            left: this.mode === "float" && coordinate.left ? coordinate.left + "px" : undefined,
            top: this.mode === "float" && coordinate.top ? coordinate.top + "px" : undefined,
        });
        if (coordinate.width)
            this.width = coordinate.width;
        if (coordinate.height)
            this.height = coordinate.height;
        if (coordinate.maxWidth)
            this.maxWidth = coordinate.maxWidth;
        if (coordinate.maxHeight)
            this.maxHeight = coordinate.maxHeight;
        if (coordinate.minWidth)
            this.minWidth = coordinate.minWidth;
        if (coordinate.minHeight)
            this.minHeight = coordinate.minHeight;
        if (coordinate.left)
            this.left = coordinate.left;
        if (coordinate.top)
            this.top = coordinate.top;
    };
    UIBlock.prototype.dispose = function () {
        var stateStore = StateStore_1.default.instance;
        ElementHelper.removeElement(this.element);
        delete stateStore.components[this.uniqueId];
    };
    UIBlock.prototype.registerEvent = function (element) {
        var _this = this;
        if (!element)
            return;
        var stateStore = StateStore_1.default.instance;
        element.addEventListener("animationstart", function (ev) {
        });
        element.addEventListener("animationend", function (ev) {
            var animateToInClass = "animate-" + _this.animate + "-to-in";
            var animateToOutClass = "animate-" + _this.animate + "-to-out";
            if (_this.animatable) {
                if (ElementHelper.hasClass(element, stateStore.prefix, animateToInClass)) {
                    ElementHelper.removeClasses(element, stateStore.prefix, animateToInClass);
                }
                if (ElementHelper.hasClass(element, stateStore.prefix, animateToOutClass)) {
                    ElementHelper.removeClasses(element, stateStore.prefix, animateToOutClass);
                    _this.dispose();
                }
            }
        });
    };
    UIBlock.prototype.handlerWidthOrHeight = function (type) {
        var newSize = null;
        if (type === "width") {
            if (this.minWidth && this.width)
                newSize = Math.max(this.minWidth, this.width);
            if (this.maxWidth && this.width)
                newSize = Math.min(this.maxWidth, this.width);
        }
        else if (type === "height") {
            if (this.minHeight && this.height)
                newSize = Math.max(this.minHeight, this.height);
            if (this.maxHeight && this.height)
                newSize = Math.min(this.maxHeight, this.height);
        }
        return newSize;
    };
    return UIBlock;
}(UIComponent_1.default));
exports.default = UIBlock;
