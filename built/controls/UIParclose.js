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
var UIWindowRelative_1 = require("../basic/models/UIWindowRelative");
var StringHelper_1 = require("../utils/StringHelper");
var ElementHelper_1 = require("../utils/ElementHelper");
var ExceptionHelper_1 = require("../utils/ExceptionHelper");
var UIParclose = (function (_super) {
    __extends(UIParclose, _super);
    function UIParclose(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.kind = "parclose";
        _this._opacity = 0;
        _this._opacity = options.opacity === undefined ? _this._opacity : options.opacity;
        if (!(typeof _this._opacity === "number" || _this._opacity === false)) {
            ExceptionHelper_1.assertNever(_this._opacity);
        }
        return _this;
    }
    Object.defineProperty(UIParclose.prototype, "opacity", {
        get: function () {
            return this._opacity;
        },
        set: function (value) {
            this._opacity = value;
        },
        enumerable: true,
        configurable: true
    });
    UIParclose.prototype.present = function () {
        var _this = this;
        var fragment = document.createDocumentFragment();
        if (this.opacity === false)
            return fragment;
        var parcloseElement = document.createElement("div");
        parcloseElement.id = this.window.elementId + "-" + StringHelper_1.getKebabCase(this.kind);
        ElementHelper_1.addClasses(parcloseElement, this.app.prefix, StringHelper_1.getKebabCase(this.kind));
        ElementHelper_1.addStyles(parcloseElement, {
            backgroundColor: "rgba(0,0,0," + this.opacity + ")"
        });
        parcloseElement.addEventListener("click", function (ev) {
            _this.window.flicker();
        }, false);
        parcloseElement.addEventListener("contextmenu", function (ev) {
            ev.returnValue = false;
            return false;
        });
        fragment.appendChild(parcloseElement);
        return fragment;
    };
    return UIParclose;
}(UIWindowRelative_1.default));
exports.default = UIParclose;
