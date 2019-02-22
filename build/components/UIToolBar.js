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
var ValueHelper_1 = require("../utils/ValueHelper");
var UIComponent_1 = __importDefault(require("./base/UIComponent"));
var StyleHelper_1 = require("../utils/StyleHelper");
var UIToolBar = (function (_super) {
    __extends(UIToolBar, _super);
    function UIToolBar(window, app) {
        var _this = _super.call(this, window, app) || this;
        _this.name = "toolBar";
        _this._height = 30;
        _this._background = "#ffffff";
        if (typeof window.toolBar === "object") {
            _this.height = window.toolBar.height || _this.height;
            _this.background = window.toolBar.background || _this.background;
        }
        return _this;
    }
    Object.defineProperty(UIToolBar.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (newValue) {
            this._height = newValue;
            if (typeof this.window.toolBar === "object") {
                this.window.toolBar.height = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIToolBar.prototype, "background", {
        get: function () {
            return this._background;
        },
        set: function (newValue) {
            this._background = newValue;
            if (typeof this.window.toolBar === "object") {
                this.window.toolBar.background = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    UIToolBar.prototype.createView = function () {
        var _a;
        var fragment = document.createDocumentFragment();
        var toolBarElement = document.createElement("div");
        (_a = toolBarElement.classList).add.apply(_a, StyleHelper_1.batchClasses(this.app.prefix, ValueHelper_1.getKebabCase(this.name)));
        StyleHelper_1.batchStyles(toolBarElement, {
            height: this.height + "px",
            background: this.background
        });
        fragment.appendChild(toolBarElement);
        return fragment;
    };
    return UIToolBar;
}(UIComponent_1.default));
exports.default = UIToolBar;
