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
var UISideBar = (function (_super) {
    __extends(UISideBar, _super);
    function UISideBar(window, app) {
        var _this = _super.call(this, window, app) || this;
        _this.name = "sideBar";
        _this.width = 60;
        _this.background = "#eeeef2";
        if (typeof window.sideBar === "object") {
            window.sideBar.width = _this.width = window.sideBar.width || _this.width;
            window.sideBar.background = _this.background = window.sideBar.background || _this.background;
        }
        return _this;
    }
    UISideBar.prototype.createView = function () {
        var _a;
        var fragment = document.createDocumentFragment();
        var sideBarElement = document.createElement("div");
        (_a = sideBarElement.classList).add.apply(_a, StyleHelper_1.batchClasses(this.app.prefix, ValueHelper_1.getKebabCase(this.name)));
        StyleHelper_1.batchStyles(sideBarElement, {
            width: this.width + "px",
            background: this.background
        });
        fragment.appendChild(sideBarElement);
        return fragment;
    };
    return UISideBar;
}(UIComponent_1.default));
exports.default = UISideBar;
