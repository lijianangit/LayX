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
var UIContextMenuItem_1 = require("./UIContextMenuItem");
var StringHelper = require("../utils/StringHelper");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var UIContextMenu = (function (_super) {
    __extends(UIContextMenu, _super);
    function UIContextMenu(app, window, type, contextMenuItems) {
        var _this = _super.call(this, app, window) || this;
        _this.kind = "contextMenu";
        _this.components = {};
        _this.kebabCase = StringHelper.getKebabCase(_this.kind);
        _this.type = type;
        _this.contextMenuItems = CastHelper.contextMenusCast(contextMenuItems);
        return _this;
    }
    UIContextMenu.prototype.present = function () {
        var fragment = document.createDocumentFragment();
        var contextMenuBarElement = document.createElement("div");
        contextMenuBarElement.id = this.app.prefix + this.kebabCase + "-" + this.type;
        ElementHelper.addClasses(contextMenuBarElement, this.app.prefix, this.kebabCase);
        contextMenuBarElement.addEventListener("contextmenu", function (ev) {
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        }, true);
        this.createContextMenu(contextMenuBarElement);
        fragment.appendChild(contextMenuBarElement);
        return fragment;
    };
    UIContextMenu.prototype.createContextMenu = function (contextMenuBarElement) {
        var contextMenuItems = Array();
        for (var _i = 0, _a = this.contextMenuItems; _i < _a.length; _i++) {
            var item = _a[_i];
            var contextMenu = new UIContextMenuItem_1.default(this.app, this.window, item);
            var contextMenuElement = contextMenu.present();
            contextMenuElement && contextMenuBarElement.appendChild(contextMenuElement);
            contextMenuItems.push(contextMenu);
        }
        this.components["contextMenuItems"] = contextMenuItems;
    };
    UIContextMenu.prototype.hide = function () {
        var contextMenuElements = document.getElementById(this.app.prefix + this.kebabCase + "-" + this.type);
        if (contextMenuElements) {
            ElementHelper.removeClasses(contextMenuElements, this.app.prefix, "context-menu-active");
        }
    };
    UIContextMenu.prototype.updateOffset = function (ev, zIndex) {
        var contextMenuElements = document.getElementById(this.app.prefix + this.kebabCase + "-" + this.type);
        if (contextMenuElements != null) {
            var styles = getComputedStyle(contextMenuElements);
            var contextMenuWidth = Number(styles.width.replace('px', '')), contextMenuHeight = this.contextMenuItems.length * UIContextMenuItem_1.default.height, x = ev.pageX, y = ev.pageY;
            var left = x, top_1 = y;
            if (contextMenuWidth + x > innerWidth) {
                left = x - contextMenuWidth;
            }
            if (contextMenuHeight + y > innerHeight) {
                top_1 = y - contextMenuHeight;
            }
            ElementHelper.addClasses(contextMenuElements, this.app.prefix, "context-menu-active");
            ElementHelper.addStyles(contextMenuElements, {
                zIndex: "" + (zIndex + 1),
                top: top_1 + "px",
                left: left + "px",
            });
        }
    };
    return UIContextMenu;
}(UIWindowComponent_1.default));
exports.default = UIContextMenu;
