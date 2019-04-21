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
var UIContextMenuBar_1 = require("./UIContextMenuBar");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var UITopMenuButton = (function (_super) {
    __extends(UITopMenuButton, _super);
    function UITopMenuButton(app, window, topMenuBar, options) {
        var _this = _super.call(this, app, window) || this;
        _this.topMenuBar = topMenuBar;
        _this.id = CastHelper.stringCast(options.id);
        _this.label = CastHelper.stringCast(options.label);
        _this.handler = options.handler;
        _this.items = CastHelper.contextMenuButtonsCast(options.items);
        return _this;
    }
    UITopMenuButton.prototype.present = function () {
        var fragment = ElementHelper.createFragment();
        var topMenuButtonElement = ElementHelper.createElement("div");
        topMenuButtonElement.setAttribute("data-window-id", this.window.id);
        ElementHelper.addClasses(topMenuButtonElement, this.app.prefix, "top-menu-button");
        var labelElement = ElementHelper.createElement("label");
        labelElement.setAttribute("data-window-id", this.window.id);
        labelElement.innerText = this.label;
        ElementHelper.addClasses(labelElement, this.app.prefix, "top-menu-button" + "-label");
        topMenuButtonElement.appendChild(labelElement);
        if (this.items !== false) {
            var contextMenuBar = new UIContextMenuBar_1.default(this.app, this.window, "top-menu-" + this.id, this.items);
            var contextMenuBarElement = contextMenuBar.present();
            document.body.appendChild(contextMenuBarElement);
            this.setComponent("context-menu-bar", contextMenuBar);
        }
        this.bindEvent(topMenuButtonElement);
        fragment.appendChild(topMenuButtonElement);
        return fragment;
    };
    UITopMenuButton.prototype.bindEvent = function (element) {
        var _this = this;
        element.addEventListener("mousedown", function (ev) {
            if (_this.topMenuBar.currentTopMenuButtonElement) {
                ElementHelper.removeClasses(_this.topMenuBar.currentTopMenuButtonElement, _this.app.prefix, "top-menu-button" + "-active");
            }
            if (_this.topMenuBar.currentTopMenuContextBar) {
                _this.topMenuBar.currentTopMenuContextBar.hide();
            }
            var contextMenuBar = _this.getComponent("context-menu-bar");
            if (_this.topMenuBar.isActive) {
                ElementHelper.addClasses(element, _this.app.prefix, "top-menu-button" + "-active");
                if (contextMenuBar && contextMenuBar.element) {
                    var clientRect = element.getBoundingClientRect();
                    contextMenuBar.updateOffset(ev, _this.window.zIndex + 1, clientRect.left, clientRect.top + 25);
                }
            }
            else {
                ElementHelper.removeClasses(element, _this.app.prefix, "top-menu-button" + "-active");
                if (contextMenuBar) {
                    contextMenuBar.hide();
                }
            }
            _this.topMenuBar.currentTopMenuContextBar = contextMenuBar;
            _this.topMenuBar.currentTopMenuButtonElement = element;
        });
        element.addEventListener("mouseenter", function (ev) {
            if (_this.topMenuBar.isActive) {
                if (_this.topMenuBar.currentTopMenuButtonElement) {
                    ElementHelper.removeClasses(_this.topMenuBar.currentTopMenuButtonElement, _this.app.prefix, "top-menu-button" + "-active");
                }
                if (_this.topMenuBar.currentTopMenuContextBar) {
                    _this.topMenuBar.currentTopMenuContextBar.hide();
                }
                ElementHelper.addClasses(element, _this.app.prefix, "top-menu-button" + "-active");
                var contextMenuBar = _this.getComponent("context-menu-bar");
                if (contextMenuBar && contextMenuBar.element) {
                    var clientRect = element.getBoundingClientRect();
                    contextMenuBar.updateOffset(ev, _this.window.zIndex + 1, clientRect.left, clientRect.top + 25);
                }
                _this.topMenuBar.currentTopMenuContextBar = contextMenuBar;
                _this.topMenuBar.currentTopMenuButtonElement = element;
            }
        });
    };
    return UITopMenuButton;
}(UIWindowComponent_1.default));
exports.default = UITopMenuButton;
