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
var UIContextMenuButton = (function (_super) {
    __extends(UIContextMenuButton, _super);
    function UIContextMenuButton(app, window, type, options) {
        var _this = _super.call(this, app, window) || this;
        _this.verticalPadding = 5;
        _this._element = null;
        _this.type = CastHelper.stringCast(type);
        _this.id = CastHelper.stringCast(options.id);
        _this.label = CastHelper.stringCast(options.label);
        _this.handler = options.handler;
        _this.elementId = _this.window.elementId + "-" + _this.type + "-" + "context-menu-button" + "-" + _this.id;
        return _this;
    }
    Object.defineProperty(UIContextMenuButton.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    UIContextMenuButton.prototype.present = function () {
        var _this = this;
        var fragment = ElementHelper.createFragment();
        var contextMenuElement = ElementHelper.createElement("div");
        contextMenuElement.id = this.elementId;
        ElementHelper.addClasses(contextMenuElement, this.app.prefix, "context-menu-button");
        ElementHelper.addStyles(contextMenuElement, {
            height: UIContextMenuButton.height + "px",
            lineHeight: UIContextMenuButton.height - this.verticalPadding * 2 + "px"
        });
        contextMenuElement.addEventListener("mousedown", function (ev) {
            if (ev.button === 0 && typeof _this.handler === "function") {
                _this.handler(ev, _this.window);
            }
        });
        var labelElement = ElementHelper.createElement("label");
        ElementHelper.addClasses(labelElement, this.app.prefix, "context-menu-button" + "-label");
        labelElement.innerText = this.label;
        contextMenuElement.appendChild(labelElement);
        fragment.appendChild(contextMenuElement);
        return fragment;
    };
    UIContextMenuButton.height = 34;
    return UIContextMenuButton;
}(UIWindowComponent_1.default));
exports.default = UIContextMenuButton;
