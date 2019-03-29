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
var UIIcon_1 = require("./UIIcon");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var UITitleBar = (function (_super) {
    __extends(UITitleBar, _super);
    function UITitleBar(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.elementId = _this.window.elementId + "-" + "title-bar";
        _this.icon = "icon";
        _this._element = null;
        _this.icon = CastHelper.typeOrBooleanCast(options.icon, _this.icon);
        _this.title = options.title;
        return _this;
    }
    Object.defineProperty(UITitleBar.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    UITitleBar.prototype.present = function () {
        var _this = this;
        var fragment = ElementHelper.createFragment();
        var titleBarElement = ElementHelper.createElement("div");
        titleBarElement.setAttribute("data-window-id", this.window.id);
        titleBarElement.id = this.elementId;
        ElementHelper.addClasses(titleBarElement, this.app.prefix, "title-bar", "flexbox", "flex-row", "flex-vertical-center");
        if (this.icon) {
            var windowIconElement = ElementHelper.createElement("div");
            windowIconElement.setAttribute("data-window-id", this.window.id);
            ElementHelper.addClasses(windowIconElement, this.app.prefix, "window-icon", "flexbox", "flex-center");
            windowIconElement.addEventListener("dblclick", function (ev) {
                ev.stopPropagation();
                _this.window.destroy();
            });
            titleBarElement.appendChild(windowIconElement);
            var icon = new UIIcon_1.default(this.app, this.window, this.icon);
            var iconElement = icon.present();
            windowIconElement.appendChild(iconElement);
        }
        if (this.title) {
            var titleElement = ElementHelper.createElement("div");
            titleElement.setAttribute("data-window-id", this.window.id);
            ElementHelper.addClasses(titleElement, this.app.prefix, "window-title");
            var labelElement = document.createElement("label");
            labelElement.setAttribute("data-window-id", this.window.id);
            ElementHelper.addClasses(labelElement, this.app.prefix, "window-title-label");
            labelElement.innerText = this.title;
            titleElement.appendChild(labelElement);
            titleBarElement.appendChild(titleElement);
        }
        fragment.appendChild(titleBarElement);
        return fragment;
    };
    return UITitleBar;
}(UIWindowComponent_1.default));
exports.default = UITitleBar;
