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
var EventHelper = require("../utils/EventHelper");
var UIParclose = (function (_super) {
    __extends(UIParclose, _super);
    function UIParclose(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.elementId = _this.window.elementId + "-" + "parclose";
        _this.opacity = 0;
        _this._element = null;
        _this.opacity = CastHelper.numberCast(options.opacity, _this.opacity);
        return _this;
    }
    Object.defineProperty(UIParclose.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    UIParclose.prototype.present = function () {
        var fragment = ElementHelper.createFragment();
        var parcloseElement = ElementHelper.createElement("div");
        parcloseElement.setAttribute("data-window-id", this.window.id);
        parcloseElement.id = this.elementId;
        ElementHelper.addClasses(parcloseElement, this.app.prefix, "parclose");
        ElementHelper.addStyles(parcloseElement, {
            backgroundColor: "rgba(0,0,0," + this.opacity + ")",
            zIndex: "" + (this.window.zIndex - 1)
        });
        this.bindEvent(parcloseElement);
        fragment.appendChild(parcloseElement);
        return fragment;
    };
    UIParclose.prototype.updateZIndex = function (zIndex) {
        ElementHelper.addStyles(this.element, {
            zIndex: "" + zIndex
        });
    };
    UIParclose.prototype.bindEvent = function (parcloseElement) {
        var _this = this;
        EventHelper.addTouchStartEvent(parcloseElement, function (ev) {
            _this.window.flicker();
        }, true);
        parcloseElement.addEventListener("contextmenu", function (ev) {
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        });
    };
    return UIParclose;
}(UIWindowComponent_1.default));
exports.default = UIParclose;
