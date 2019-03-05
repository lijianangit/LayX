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
var UIWindowRelative_1 = require("../basic/models/UIWindowRelative");
var ElementHelper_1 = require("../utils/ElementHelper");
var StringHelper_1 = require("../utils/StringHelper");
var ResizeDragHandler_1 = require("../basic/handlers/ResizeDragHandler");
var UIResizeBar = (function (_super) {
    __extends(UIResizeBar, _super);
    function UIResizeBar(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.kind = "resizeBar";
        _this.directions = [
            "left",
            "right",
            "top",
            "bottom",
            "leftTop",
            "rightTop",
            "leftBottom",
            "rightBottom"
        ];
        _this._left = true;
        _this._right = true;
        _this._top = true;
        _this._bottom = true;
        _this._leftTop = true;
        _this._rightTop = true;
        _this._leftBottom = true;
        _this._rightBottom = true;
        _this._left = options.left === undefined ? _this._left : options.left;
        _this._right = options.right === undefined ? _this._right : options.right;
        _this._top = options.top === undefined ? _this._top : options.top;
        _this._bottom = options.bottom === undefined ? _this._bottom : options.bottom;
        _this._leftTop = options.leftTop === undefined ? _this._leftTop : options.leftTop;
        _this._rightTop = options.rightTop === undefined ? _this._rightTop : options.rightTop;
        _this._leftBottom = options.leftBottom === undefined ? _this._leftBottom : options.leftBottom;
        _this._rightBottom = options.rightBottom === undefined ? _this._rightBottom : options.rightBottom;
        return _this;
    }
    Object.defineProperty(UIResizeBar.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (value) {
            this._left = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIResizeBar.prototype, "right", {
        get: function () {
            return this._right;
        },
        set: function (value) {
            this._right = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIResizeBar.prototype, "top", {
        get: function () {
            return this._top;
        },
        set: function (value) {
            this._top = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIResizeBar.prototype, "bottom", {
        get: function () {
            return this._bottom;
        },
        set: function (value) {
            this._bottom = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIResizeBar.prototype, "leftTop", {
        get: function () {
            return this._leftTop;
        },
        set: function (value) {
            this._leftTop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIResizeBar.prototype, "rightTop", {
        get: function () {
            return this._rightTop;
        },
        set: function (value) {
            this._rightTop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIResizeBar.prototype, "leftBottom", {
        get: function () {
            return this._leftBottom;
        },
        set: function (value) {
            this._leftBottom = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIResizeBar.prototype, "rightBottom", {
        get: function () {
            return this._rightBottom;
        },
        set: function (value) {
            this._rightBottom = value;
        },
        enumerable: true,
        configurable: true
    });
    UIResizeBar.prototype.present = function () {
        var fragment = document.createDocumentFragment();
        if (this.leastOneTrue()) {
            var resizeElement = document.createElement("div");
            ElementHelper_1.addClasses(resizeElement, this.app.prefix, StringHelper_1.getKebabCase(this.kind));
            for (var _i = 0, _a = this.directions; _i < _a.length; _i++) {
                var key = _a[_i];
                if (this[key] === true) {
                    resizeElement.appendChild(this.presentItem(key));
                }
            }
            fragment.appendChild(resizeElement);
        }
        return fragment;
    };
    UIResizeBar.prototype.presentItem = function (key) {
        var itemElement = document.createElement("div");
        ElementHelper_1.addClasses(itemElement, this.app.prefix, "resize-" + StringHelper_1.getKebabCase(key));
        new ResizeDragHandler_1.default(itemElement);
        return itemElement;
    };
    UIResizeBar.prototype.leastOneTrue = function () {
        var isExist = false;
        for (var _i = 0, _a = this.directions; _i < _a.length; _i++) {
            var key = _a[_i];
            if (this[key] === true) {
                isExist = true;
                break;
            }
        }
        return isExist;
    };
    return UIResizeBar;
}(UIWindowRelative_1.default));
exports.default = UIResizeBar;
