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
var UITopMenuButton_1 = require("./UITopMenuButton");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var UITopMenuBar = (function (_super) {
    __extends(UITopMenuBar, _super);
    function UITopMenuBar(app, window, contextMenuItems) {
        var _this = _super.call(this, app, window) || this;
        _this.elementId = _this.window.elementId + "-" + "top-menu-bar";
        _this.isActive = false;
        _this.currentTopMenuContextBar = null;
        _this.currentTopMenuButtonElement = null;
        _this.contextMenuButtons = false;
        _this._element = null;
        _this.contextMenuButtons = CastHelper.contextMenuButtonsCast(contextMenuItems);
        return _this;
    }
    Object.defineProperty(UITopMenuBar.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    UITopMenuBar.prototype.present = function () {
        var fragment = ElementHelper.createFragment();
        if (this.contextMenuButtons !== false && this.contextMenuButtons.length > 0) {
            var topMenuBarElement = ElementHelper.createElement("div");
            topMenuBarElement.id = this.elementId;
            ElementHelper.addClasses(topMenuBarElement, this.app.prefix, "top-menu-bar");
            topMenuBarElement.addEventListener("contextmenu", function (ev) {
                ev.preventDefault();
                ev.stopPropagation();
                ev.returnValue = false;
                return false;
            }, true);
            this.createTopMenuButtons(topMenuBarElement);
            fragment.appendChild(topMenuBarElement);
        }
        return fragment;
    };
    UITopMenuBar.prototype.hide = function (ev) {
        if (this.currentTopMenuButtonElement) {
            ElementHelper.removeClasses(this.currentTopMenuButtonElement, this.app.prefix, "top-menu-button" + "-active");
        }
        if (this.currentTopMenuContextBar)
            this.currentTopMenuContextBar.hide();
        this.isActive = ev.target.className.indexOf("" + (this.app.prefix + "top-menu-button")) > -1
            ? !this.isActive
            : false;
        this.currentTopMenuContextBar = null;
        this.currentTopMenuButtonElement = null;
    };
    UITopMenuBar.prototype.createTopMenuButtons = function (parentTopMenuBarElement) {
        if (this.contextMenuButtons === false)
            return;
        var topMenuButtons = Array();
        for (var _i = 0, _a = this.contextMenuButtons; _i < _a.length; _i++) {
            var item = _a[_i];
            var topMenuButton = new UITopMenuButton_1.default(this.app, this.window, this, item);
            var topMenuButtonElement = topMenuButton.present();
            parentTopMenuBarElement.appendChild(topMenuButtonElement);
            topMenuButtons.push(topMenuButton);
        }
        this.setComponent("top-menu-buttons", topMenuButtons);
    };
    return UITopMenuBar;
}(UIWindowComponent_1.default));
exports.default = UITopMenuBar;
