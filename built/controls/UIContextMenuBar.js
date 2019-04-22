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
    function UIContextMenuBar(app, window, uniqueId, contextMenuItems, isTopMenu) {
        if (isTopMenu === void 0) { isTopMenu = true; }
        var _this = _super.call(this, app, window) || this;
        _this.isTopMenu = isTopMenu;
        _this.contextMenuButtons = false;
        _this._element = null;
        _this.contextMenuButtons = CastHelper.contextMenuButtonsCast(contextMenuItems);
        _this.uniqueId = CastHelper.stringCast(uniqueId);
        _this.elementId = _this.window.elementId + "-" + _this.uniqueId + "-" + "context-menu-bar";
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
            contextMenuBarElement.setAttribute("data-window-id", this.window.id);
            if (this.isTopMenu)
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
        if (!this.isTopMenu)
            return;
        ElementHelper.removeClasses(this.element, this.app.prefix, "context-menu-bar-active");
    };
    UIContextMenuBar.prototype.updateOffset = function (ev, zIndex, fixLeft, fixTop) {
        if (!this.isTopMenu
            || !this.element
            || this.contextMenuButtons === false
            || this.contextMenuButtons.length === 0)
            return;
        var computedStyle = getComputedStyle(this.element);
        var contextMenuBarWidth = Number(computedStyle.width.replace('px', '')), contextMenuBarHeight = this.contextMenuButtons.length * UIContextMenuButton_1.default.height, x = ev.pageX, y = ev.pageY;
        var left = x, top = y;
        if (fixLeft !== undefined)
            left = fixLeft;
        else {
            if (contextMenuBarWidth + x > innerWidth) {
                left = x - contextMenuBarWidth;
            }
        }
        if (fixTop !== undefined)
            top = fixTop;
        else {
            if (contextMenuBarHeight + y > innerHeight) {
                top = y - contextMenuBarHeight;
            }
        }
        ElementHelper.addClasses(this.element, this.app.prefix, "context-menu-bar-active");
        ElementHelper.addStyles(this.element, {
            zIndex: "" + zIndex,
            top: top + "px",
            left: left + "px",
        });
    };
    UIContextMenuBar.prototype.updateChildrenOffset = function (ev, childrenContextMenuBarElement, index) {
        if (!(!this.isTopMenu
            && childrenContextMenuBarElement
            && childrenContextMenuBarElement.parentElement
            && childrenContextMenuBarElement.parentElement.parentElement))
            return;
        var parentContextMenuBarElement = childrenContextMenuBarElement.parentElement.parentElement;
        var parentComputedStyle = getComputedStyle(parentContextMenuBarElement);
        var parentContextMenubarWidth = Number(parentComputedStyle.width.replace('px', '')), x = Number(parentComputedStyle.left.replace('px', '')), y = Number(parentComputedStyle.top.replace('px', ''));
        var computedStyle = getComputedStyle(childrenContextMenuBarElement);
        var contextMenuBarWidth = Number(computedStyle.width.replace('px', '')), contextMenuBarHeight = childrenContextMenuBarElement.childElementCount * UIContextMenuButton_1.default.height, contextMenuBarTop = UIContextMenuButton_1.default.height * index;
        var left = parentContextMenubarWidth + x - UIContextMenuBar.offset, top = y + contextMenuBarTop - UIContextMenuBar.offset;
        if (parentContextMenubarWidth + x + contextMenuBarWidth > innerWidth)
            left = x - contextMenuBarWidth + UIContextMenuBar.offset;
        if (y + contextMenuBarTop + contextMenuBarHeight > innerHeight)
            top = innerHeight - contextMenuBarHeight - UIContextMenuBar.offset;
        ElementHelper.addClasses(childrenContextMenuBarElement, this.app.prefix, "context-menu-bar-active");
        ElementHelper.addStyles(childrenContextMenuBarElement, {
            top: top + "px",
            left: left + "px"
        });
    };
    UIContextMenuBar.prototype.hideChildren = function (childrenContextMenuBarElement) {
        if (this.isTopMenu)
            return;
        ElementHelper.removeClasses(childrenContextMenuBarElement, this.app.prefix, "context-menu-bar-active");
    };
    UIContextMenuBar.prototype.createContextMenuButtons = function (parentContextMenuBarElement) {
        if (this.contextMenuButtons === false)
            return;
        var contextMenuButtons = Array();
        var index = 0;
        for (var _i = 0, _a = this.contextMenuButtons; _i < _a.length; _i++) {
            var item = _a[_i];
            var contextMenuButton = new UIContextMenuButton_1.default(this.app, this.window, item, index);
            var contextMenuButtonElement = contextMenuButton.present();
            parentContextMenuBarElement.appendChild(contextMenuButtonElement);
            contextMenuButtons.push(contextMenuButton);
            index++;
        }
        this.setComponent("context-menu-buttons", contextMenuButtons);
    };
    UIContextMenuBar.offset = 4;
    return UIContextMenuBar;
}(UIWindowComponent_1.default));
exports.default = UIContextMenuBar;
