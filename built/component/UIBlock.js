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
var NumberHelper = require("../utils/NumberHelper");
var UIBlock = (function (_super) {
    __extends(UIBlock, _super);
    function UIBlock(type) {
        if (type === void 0) { type = "default"; }
        var _this = _super.call(this) || this;
        _this.type = type;
        _this._position = "center";
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
            var width = CastHelper.numberOrUndefinedCast(value);
            var newValue = NumberHelper.handlerMaxAndMinValue("all", width, this.maxWidth, this.minWidth);
            if (newValue) {
                width = newValue;
            }
            ;
            this._width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            var height = CastHelper.numberOrUndefinedCast(value);
            var newValue = NumberHelper.handlerMaxAndMinValue("all", height, this.maxHeight, this.minHeight);
            if (newValue) {
                height = newValue;
            }
            this._height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "maxWidth", {
        get: function () {
            return this._maxWidth;
        },
        set: function (value) {
            var maxWidth = CastHelper.numberOrUndefinedCast(value);
            var newValue = NumberHelper.handlerMaxAndMinValue("max", this.width, maxWidth);
            if (newValue) {
                this._width = newValue;
            }
            if (NumberHelper.compareValue(this.minWidth, maxWidth)) {
                throw new Error("The max width can't be letter to min width.");
            }
            this._maxWidth = maxWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "maxHeight", {
        get: function () {
            return this._maxHeight;
        },
        set: function (value) {
            var maxHeight = CastHelper.numberOrUndefinedCast(value);
            var newValue = NumberHelper.handlerMaxAndMinValue("max", this.height, maxHeight);
            if (newValue) {
                this._height = newValue;
            }
            if (NumberHelper.compareValue(this.minHeight, maxHeight)) {
                throw new Error("The max height can't be letter to min height.");
            }
            this._maxHeight = maxHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "minWidth", {
        get: function () {
            return this._minWidth;
        },
        set: function (value) {
            var minWidth = CastHelper.numberOrUndefinedCast(value);
            var newValue = NumberHelper.handlerMaxAndMinValue("min", this.width, minWidth);
            if (newValue) {
                this._width = newValue;
            }
            if (NumberHelper.compareValue(minWidth, this.maxWidth)) {
                throw new Error("The min width can't be greater to max width.");
            }
            this._minWidth = minWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "minHeight", {
        get: function () {
            return this._minHeight;
        },
        set: function (value) {
            var minHeight = CastHelper.numberOrUndefinedCast(value);
            var newValue = NumberHelper.handlerMaxAndMinValue("min", this.height, minHeight);
            if (newValue) {
                this._height = newValue;
            }
            if (NumberHelper.compareValue(minHeight, this.maxHeight)) {
                throw new Error("The min height can't be greater to max height.");
            }
            this._minHeight = minHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIBlock.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            if (!value || TypeHelper.isOffsetArray(value) || TypeHelper.isPositionType(value)) {
                this._position = value;
            }
            if (this.width && this.height) {
                var _a = CastHelper.positionCast(this._position, this.width, this.height), left = _a[0], top_1 = _a[1];
                if (!this.left)
                    this.left = left;
                if (!this.top)
                    this.top = top_1;
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
    UIBlock.prototype.updateCoordinate = function (coordinate) {
        var element = this.element;
        if (!element)
            return;
        if (NumberHelper.compareValue(coordinate.minWidth, coordinate.maxWidth)) {
            throw new Error("The max width can't be letter to min width.");
        }
        if (NumberHelper.compareValue(coordinate.minHeight, coordinate.maxHeight)) {
            throw new Error("The max height can't be letter to min height.");
        }
        coordinate.width = NumberHelper.handlerMaxAndMinValue("all", coordinate.width, coordinate.maxWidth, coordinate.minWidth);
        coordinate.height = NumberHelper.handlerMaxAndMinValue("all", coordinate.height, coordinate.maxHeight, coordinate.minHeight);
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
    UIBlock.prototype.updatePosition = function (position) {
        var element = this.element;
        if (!element)
            return;
        if (!this.width || !this.height)
            return;
        var _a = CastHelper.positionCast(position, this.width, this.height), left = _a[0], top = _a[1];
        ElementHelper.addStyles(element, {
            left: this.mode === "float" ? left + "px" : undefined,
            top: this.mode === "float" ? top + "px" : undefined,
        });
        this.left = left;
        this.top = top;
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
    return UIBlock;
}(UIComponent_1.default));
exports.default = UIBlock;
