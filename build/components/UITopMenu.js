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
var UITopMenu = (function (_super) {
    __extends(UITopMenu, _super);
    function UITopMenu(window, app) {
        var _this = _super.call(this, window, app) || this;
        _this.name = "topMenu";
        _this._background = "#eeeef2";
        if (typeof window.topMenu === "object") {
            _this.background = window.topMenu.background || _this.background;
        }
        return _this;
    }
    Object.defineProperty(UITopMenu.prototype, "background", {
        get: function () {
            return this._background;
        },
        set: function (newValue) {
            this._background = newValue;
            if (typeof this.window.topMenu === "object") {
                this.window.topMenu.background = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    UITopMenu.prototype.createView = function () {
        var _a;
        var fragment = document.createDocumentFragment();
        var topMenuElement = document.createElement("div");
        (_a = topMenuElement.classList).add.apply(_a, StyleHelper_1.batchClasses(this.app.prefix, ValueHelper_1.getKebabCase(this.name)));
        StyleHelper_1.batchStyles(topMenuElement, {
            background: this.background
        });
        fragment.appendChild(topMenuElement);
        return fragment;
    };
    return UITopMenu;
}(UIComponent_1.default));
exports.default = UITopMenu;
