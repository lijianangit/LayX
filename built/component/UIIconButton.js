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
var StateStore_1 = require("../core/store/StateStore");
var CastHelper = require("../utils/CastHelper");
var UIIconButton = (function (_super) {
    __extends(UIIconButton, _super);
    function UIIconButton(icon) {
        var _this = _super.call(this) || this;
        _this._icon = icon;
        return _this;
    }
    Object.defineProperty(UIIconButton.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            this._icon = CastHelper.stringCast(value);
        },
        enumerable: true,
        configurable: true
    });
    UIIconButton.prototype.createView = function () {
        var element = ElementHelper.createElement("div");
        element.setAttribute("data-id", this.uniqueId);
        ElementHelper.addClasses(element, StateStore_1.default.instance.prefix, "icon-button");
        var svgElement = ElementHelper.createElementNS("svg");
        svgElement.setAttribute("class", StateStore_1.default.instance.prefix + "svg");
        var useElement = ElementHelper.createElementNS("use");
        useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + this.icon);
        svgElement.appendChild(useElement);
        element.appendChild(svgElement);
        return element;
    };
    return UIIconButton;
}(UIComponent_1.default));
exports.default = UIIconButton;
