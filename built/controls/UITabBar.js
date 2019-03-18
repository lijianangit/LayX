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
var StringHelper = require("../utils/StringHelper");
var ElementHelper = require("../utils/ElementHelper");
var UITabBar = (function (_super) {
    __extends(UITabBar, _super);
    function UITabBar(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.kind = "tabBar";
        _this.components = {};
        return _this;
    }
    UITabBar.prototype.present = function () {
        var fragment = document.createDocumentFragment();
        var kebabCase = StringHelper.getKebabCase(this.kind);
        var tabBarElement = document.createElement("div");
        ElementHelper.addClasses(tabBarElement, this.app.prefix, kebabCase, "flexbox", "flex-item", "flex-row");
        fragment.appendChild(tabBarElement);
        return fragment;
    };
    return UITabBar;
}(UIWindowComponent_1.default));
exports.default = UITabBar;
