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
        ElementHelper.addClasses(topMenuButtonElement, this.app.prefix, "top-menu-button");
        var labelElement = ElementHelper.createElement("label");
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
            _this.topMenuBar.isActive = !_this.topMenuBar.isActive;
            if (_this.topMenuBar.prevTopMenuContextBar
                && _this.topMenuBar.prevTopMenuButtonElement
                && element !== _this.topMenuBar.prevTopMenuButtonElement) {
                _this.topMenuBar.prevTopMenuContextBar.hide();
                ElementHelper.removeClasses(_this.topMenuBar.prevTopMenuButtonElement, _this.app.prefix, "top-menu-button" + "-active");
            }
            var contextMenuBar = _this.getComponent("context-menu-bar");
            if (contextMenuBar && contextMenuBar.element) {
                _this.topMenuBar.prevTopMenuButtonElement = element;
                if (_this.topMenuBar.isActive) {
                    var clientRect = element.getBoundingClientRect();
                    contextMenuBar.updateOffset(ev, _this.window.zIndex + 1, clientRect.left, clientRect.top + 25);
                    ElementHelper.addClasses(element, _this.app.prefix, "top-menu-button" + "-active");
                    _this.topMenuBar.prevTopMenuContextBar = contextMenuBar;
                }
                else {
                    contextMenuBar.hide();
                    ElementHelper.removeClasses(element, _this.app.prefix, "top-menu-button" + "-active");
                }
            }
        });
        element.addEventListener("mouseenter", function (ev) {
            if (_this.topMenuBar.isActive) {
                if (_this.topMenuBar.prevTopMenuContextBar
                    && _this.topMenuBar.prevTopMenuButtonElement
                    && element !== _this.topMenuBar.prevTopMenuButtonElement) {
                    _this.topMenuBar.prevTopMenuContextBar.hide();
                    ElementHelper.removeClasses(_this.topMenuBar.prevTopMenuButtonElement, _this.app.prefix, "top-menu-button" + "-active");
                }
                ElementHelper.addClasses(element, _this.app.prefix, "top-menu-button" + "-active");
                var contextMenuBar = _this.getComponent("context-menu-bar");
                if (contextMenuBar && contextMenuBar.element) {
                    var clientRect = element.getBoundingClientRect();
                    contextMenuBar.updateOffset(ev, _this.window.zIndex + 1, clientRect.left, clientRect.top + 25);
                    _this.topMenuBar.prevTopMenuContextBar = contextMenuBar;
                }
                _this.topMenuBar.prevTopMenuButtonElement = element;
            }
        });
    };
    return UITopMenuButton;
}(UIWindowComponent_1.default));
exports.default = UITopMenuButton;
