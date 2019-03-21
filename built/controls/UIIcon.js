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
var CastHelper = require("../utils/CastHelper");
var UIIcon = (function (_super) {
    __extends(UIIcon, _super);
    function UIIcon(app, window, name) {
        var _this = _super.call(this, app, window) || this;
        _this.className = "" + (_this.app.prefix + "icon");
        _this.name = CastHelper.stringCast(name);
        return _this;
    }
    UIIcon.prototype.present = function () {
        var fragment = ElementHelper.createFragment();
        var iconElement = ElementHelper.createElementNS("svg");
        iconElement.setAttribute("class", this.className);
        var useElement = ElementHelper.createElementNS("use");
        useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + this.name);
        iconElement.appendChild(useElement);
        fragment.appendChild(iconElement);
        return fragment;
    };
    return UIIcon;
}(UIWindowComponent_1.default));
exports.default = UIIcon;
