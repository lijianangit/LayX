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
var UIWindowComponent_1 = require("../basic/models/UIWindowComponent");
var ElementHelper = require("../utils/ElementHelper");
var UITabBar = (function (_super) {
    __extends(UITabBar, _super);
    function UITabBar(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.elementId = _this.window.elementId + "-" + "tab-bar";
        _this._element = null;
        return _this;
    }
    Object.defineProperty(UITabBar.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    UITabBar.prototype.present = function () {
        var fragment = ElementHelper.createFragment();
        var tabBarElement = ElementHelper.createElement("div");
        tabBarElement.setAttribute("data-window-id", this.window.id);
        tabBarElement.id = this.elementId;
        ElementHelper.addClasses(tabBarElement, this.app.prefix, "tab-bar", "flexbox", "flex-item", "flex-row");
        fragment.appendChild(tabBarElement);
        return fragment;
    };
    return UITabBar;
}(UIWindowComponent_1.default));
exports.default = UITabBar;
