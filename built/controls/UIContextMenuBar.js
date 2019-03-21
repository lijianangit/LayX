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
var UIContextMenuButton_1 = require("./UIContextMenuButton");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var UIContextMenuBar = (function (_super) {
    __extends(UIContextMenuBar, _super);
    function UIContextMenuBar(app, window, type, contextMenuItems) {
        var _this = _super.call(this, app, window) || this;
        _this.contextMenuButtons = false;
        _this._element = null;
        _this.type = CastHelper.stringCast(type);
        _this.contextMenuButtons = CastHelper.contextMenuButtonsCast(contextMenuItems);
        _this.elementId = _this.window.elementId + "-" + _this.type + "-" + "context-menu-bar";
        return _this;
    }
    Object.defineProperty(UIContextMenuBar.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    UIContextMenuBar.prototype.present = function () {
        var fragment = ElementHelper.createFragment();
        if (this.contextMenuButtons !== false && this.contextMenuButtons.length > 0) {
            var contextMenuBarElement = ElementHelper.createElement("div");
            contextMenuBarElement.id = this.elementId;
            ElementHelper.addClasses(contextMenuBarElement, this.app.prefix, "context-menu-bar");
            contextMenuBarElement.addEventListener("contextmenu", function (ev) {
                ev.preventDefault();
                ev.returnValue = false;
                return false;
            }, true);
            this.createContextMenuButtons(contextMenuBarElement);
            fragment.appendChild(contextMenuBarElement);
        }
        return fragment;
    };
    UIContextMenuBar.prototype.hide = function () {
        ElementHelper.removeClasses(this.element, this.app.prefix, "context-menu-bar-active");
    };
    UIContextMenuBar.prototype.updateOffset = function (ev, zIndex) {
        if (!this.element)
            return;
        if (this.contextMenuButtons === false || this.contextMenuButtons.length === 0)
            return;
        var computedStyle = getComputedStyle(this.element);
        var contextMenuWidth = Number(computedStyle.width.replace('px', '')), contextMenuHeight = this.contextMenuButtons.length * UIContextMenuButton_1.default.height, x = ev.pageX, y = ev.pageY;
        var left = x, top = y;
        if (contextMenuWidth + x > innerWidth) {
            left = x - contextMenuWidth;
        }
        if (contextMenuHeight + y > innerHeight) {
            top = y - contextMenuHeight;
        }
        ElementHelper.addClasses(this.element, this.app.prefix, "context-menu-bar-active");
        ElementHelper.addStyles(this.element, {
            zIndex: "" + zIndex,
            top: top + "px",
            left: left + "px",
        });
    };
    UIContextMenuBar.prototype.createContextMenuButtons = function (parentContextMenuBarElement) {
        if (this.contextMenuButtons === false)
            return;
        var contextMenuButtons = Array();
        for (var _i = 0, _a = this.contextMenuButtons; _i < _a.length; _i++) {
            var item = _a[_i];
            var contextMenu = new UIContextMenuButton_1.default(this.app, this.window, this.type, item);
            var contextMenuElement = contextMenu.present();
            parentContextMenuBarElement.appendChild(contextMenuElement);
            contextMenuButtons.push(contextMenu);
        }
        this.setComponent("context-menu-buttons", contextMenuButtons);
    };
    return UIContextMenuBar;
}(UIWindowComponent_1.default));
exports.default = UIContextMenuBar;
