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
var TypeHelper = require("../utils/TypeHelper");
var UIStatuBar = (function (_super) {
    __extends(UIStatuBar, _super);
    function UIStatuBar(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.elementId = _this.window.elementId + "-" + "statu-bar";
        _this.height = 30;
        _this.background = "#e5e5e5";
        _this.content = "";
        _this._element = null;
        _this.height = CastHelper.numberCast(options.height, _this.height);
        _this.background = CastHelper.stringOrBooleanStyleCast(options.background, _this.background);
        _this.content = CastHelper.stringOrElementCast(options.content);
        return _this;
    }
    Object.defineProperty(UIStatuBar.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    UIStatuBar.prototype.present = function () {
        var fragment = ElementHelper.createFragment();
        var statuBarElement = ElementHelper.createElement("div");
        statuBarElement.setAttribute("data-window-id", this.window.id);
        statuBarElement.id = this.elementId;
        ElementHelper.addClasses(statuBarElement, this.app.prefix, "statu-bar");
        ElementHelper.addStyles(statuBarElement, {
            height: this.height + "px",
            background: "" + this.background
        });
        if (TypeHelper.isElement(this.content)) {
            var newElement = this.content.cloneNode(true);
            ElementHelper.addStyles(newElement, {
                display: 'inherit'
            });
            statuBarElement.appendChild(newElement);
        }
        else
            statuBarElement.innerHTML = this.content;
        fragment.appendChild(statuBarElement);
        return fragment;
    };
    return UIStatuBar;
}(UIWindowComponent_1.default));
exports.default = UIStatuBar;
