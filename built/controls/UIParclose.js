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
var UIParclose = (function (_super) {
    __extends(UIParclose, _super);
    function UIParclose(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.kind = "parclose";
        _this.opacity = 0;
        _this.opacity = options.opacity === undefined ? _this.opacity : options.opacity;
        return _this;
    }
    UIParclose.prototype.present = function () {
        var fragment = document.createDocumentFragment();
        var kebabCase = StringHelper.getKebabCase(this.kind);
        var parcloseElement = document.createElement("div");
        parcloseElement.id = this.window.elementId + "-" + kebabCase;
        ElementHelper.addClasses(parcloseElement, this.app.prefix, kebabCase);
        ElementHelper.addStyles(parcloseElement, {
            backgroundColor: "rgba(0,0,0," + this.opacity + ")"
        });
        this.bindEvent(parcloseElement);
        fragment.appendChild(parcloseElement);
        return fragment;
    };
    UIParclose.prototype.bindEvent = function (element) {
        var _this = this;
        element.addEventListener("mousedown", function (ev) {
            _this.window.flicker();
        }, true);
        element.addEventListener("contextmenu", function (ev) {
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        });
    };
    return UIParclose;
}(UIWindowComponent_1.default));
exports.default = UIParclose;
