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
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(app, options) {
        var _this = _super.call(this, app) || this;
        _this.kind = "window";
        _this._width = 800;
        _this._height = 600;
        _this._id = options.id;
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
    UIWindow.prototype.present = function () {
        var fragment = document.createDocumentFragment();
        var windowElement = document.createElement("div");
        windowElement.id = this.app.prefix + this.id;
        ElementHelper_1.addClasses(windowElement, this.app.prefix, this.kind, "flexbox");
        ElementHelper_1.addStyles(windowElement, {
            width: this.width + "px",
            height: this.height + "px"
        });
        fragment.appendChild(windowElement);
        return fragment;
    };
    return UIWindow;
}(UIComponent_1.default));
exports.default = UIWindow;
