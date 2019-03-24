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
var UITopMenuBar = (function (_super) {
    __extends(UITopMenuBar, _super);
    function UITopMenuBar(app, window, contextMenuItems) {
        var _this = _super.call(this, app, window) || this;
        _this.isActive = false;
        _this.elementId = _this.window.elementId + "-" + "top-menu-bar";
        _this.prevTopMenuButtonElement = null;
        _this.prevTopMenuContextBar = null;
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
    UITopMenuBar.prototype.createTopMenuButtons = function (parentTopMenuBarElement) {
        var _this = this;
        if (this.contextMenuButtons === false)
            return;
        var contextMenuButtons = Array();
        var index = 0;
        var _loop_1 = function (item) {
            var topMenuButtonElement = ElementHelper.createElement("div");
            ElementHelper.addClasses(topMenuButtonElement, this_1.app.prefix, "top-menu-button");
            var labelElement = ElementHelper.createElement("label");
            ElementHelper.addClasses(labelElement, this_1.app.prefix, "top-menu-button" + "-label");
            labelElement.innerText = item.label;
            topMenuButtonElement.appendChild(labelElement);
            parentTopMenuBarElement.appendChild(topMenuButtonElement);
            item.items = CastHelper.contextMenuButtonsCast(item.items);
            if (item.items) {
                var topContextMenuBar_1 = new UIContextMenuBar_1.default(this_1.app, this_1.window, "top-menu-" + item.id, item.items);
                var topContextMenuBarElement = topContextMenuBar_1.present();
                document.body.appendChild(topContextMenuBarElement);
                topMenuButtonElement.addEventListener("mousedown", function (ev) {
                    _this.isActive = !_this.isActive;
                    if (_this.isActive) {
                        var rect = topMenuButtonElement.getBoundingClientRect();
                        topContextMenuBar_1.updateOffset(ev, _this.window.zIndex + 1, rect.left, rect.top + 25);
                        ElementHelper.addClasses(topMenuButtonElement, _this.app.prefix, "top-menu-button" + "-active");
                        _this.prevTopMenuButtonElement = topMenuButtonElement;
                        _this.prevTopMenuContextBar = topContextMenuBar_1;
                    }
                    else {
                        topContextMenuBar_1.hide();
                        ElementHelper.removeClasses(topMenuButtonElement, _this.app.prefix, "top-menu-button" + "-active");
                    }
                });
                topMenuButtonElement.addEventListener("mouseenter", function (ev) {
                    if (_this.isActive) {
                        if (_this.prevTopMenuContextBar && _this.prevTopMenuButtonElement && _this.prevTopMenuContextBar !== topContextMenuBar_1) {
                            _this.prevTopMenuContextBar.hide();
                            ElementHelper.removeClasses(_this.prevTopMenuButtonElement, _this.app.prefix, "top-menu-button" + "-active");
                        }
                        ElementHelper.addClasses(topMenuButtonElement, _this.app.prefix, "top-menu-button" + "-active");
                        var rect = topMenuButtonElement.getBoundingClientRect();
                        topContextMenuBar_1.updateOffset(ev, _this.window.zIndex + 1, rect.left, rect.top + 25);
                        _this.prevTopMenuButtonElement = topMenuButtonElement;
                        _this.prevTopMenuContextBar = topContextMenuBar_1;
                    }
                });
            }
            else {
                topMenuButtonElement.addEventListener("mousedown", function (ev) {
                    _this.isActive = !_this.isActive;
                    if (_this.prevTopMenuContextBar && _this.prevTopMenuButtonElement) {
                        _this.prevTopMenuContextBar.hide();
                        ElementHelper.removeClasses(_this.prevTopMenuButtonElement, _this.app.prefix, "top-menu-button" + "-active");
                    }
                });
                topMenuButtonElement.addEventListener("mouseenter", function (ev) {
                    if (_this.isActive) {
                        if (_this.prevTopMenuContextBar && _this.prevTopMenuButtonElement && topMenuButtonElement !== _this.prevTopMenuButtonElement) {
                            _this.prevTopMenuContextBar.hide();
                            ElementHelper.removeClasses(_this.prevTopMenuButtonElement, _this.app.prefix, "top-menu-button" + "-active");
                        }
                    }
                });
            }
            index++;
        };
        var this_1 = this;
        for (var _i = 0, _a = this.contextMenuButtons; _i < _a.length; _i++) {
            var item = _a[_i];
            _loop_1(item);
        }
    };
    return UITopMenuBar;
}(UIWindowComponent_1.default));
exports.default = UITopMenuBar;
