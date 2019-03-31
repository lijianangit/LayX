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
var UIComponent_1 = require("../basic/models/UIComponent");
var ElementHelper = require("../utils/ElementHelper");
var UISalverBar = (function (_super) {
    __extends(UISalverBar, _super);
    function UISalverBar(app) {
        var _this = _super.call(this, app) || this;
        _this.elementId = "" + (_this.app.prefix + "salver-bar");
        _this._element = null;
        _this._items = [];
        return _this;
    }
    Object.defineProperty(UISalverBar.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UISalverBar.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    UISalverBar.prototype.present = function () {
        var fragment = ElementHelper.createFragment();
        var salverBarElement = ElementHelper.createElement("div");
        salverBarElement.id = this.elementId;
        ElementHelper.addClasses(salverBarElement, this.app.prefix, "salver-bar", "animate-d3s", "flexbox", "flex-row");
        ElementHelper.addStyles(salverBarElement, {
            zIndex: "" + this.app.salverZIndex,
            height: UISalverBar.size + "px",
            bottom: "-" + (UISalverBar.size - UISalverBar.talentHeight) + "px"
        });
        salverBarElement.addEventListener("animationend", function (ev) {
        });
        fragment.appendChild(salverBarElement);
        return fragment;
    };
    UISalverBar.prototype.addOrUpdateItem = function () {
        var _this = this;
        if (!this.app.window || !this.element)
            return;
        if (this.app.lastWindow) {
            var lastSelectItemElement = this.element.querySelector("." + (this.app.prefix + "salver-item") + "[data-window-id='" + this.app.lastWindow.id + "']");
            ElementHelper.removeClasses(lastSelectItemElement, this.app.prefix, "salver-item-active");
        }
        if (this.items.indexOf(this.app.window.id) === -1) {
            var fragment = ElementHelper.createFragment();
            var itemElement_1 = ElementHelper.createElement("div");
            itemElement_1.setAttribute("data-window-id", this.app.window.id);
            ElementHelper.addClasses(itemElement_1, this.app.prefix, "salver-item", "flexbox", "flex-center", "salver-item-active");
            ElementHelper.addStyles(itemElement_1, {
                width: UISalverBar.size + "px",
                height: UISalverBar.size + "px"
            });
            itemElement_1.addEventListener("mousedown", function (ev) {
                var windowId = itemElement_1.getAttribute("data-window-id");
                if (!windowId)
                    return;
                var window = _this.app.getWindow(windowId);
                window && window.updateZIndex();
            });
            if (this.app.window) {
                var titleBar = this.app.window.getComponent("tool-bar" + "->" + "title-bar");
                if (titleBar) {
                    var windowIcon = titleBar.getComponent("" + "window-icon");
                    if (windowIcon) {
                        itemElement_1.setAttribute("title", titleBar.title || "");
                        itemElement_1.appendChild(windowIcon.present());
                    }
                }
            }
            else
                itemElement_1.innerText = "Layx";
            fragment.appendChild(itemElement_1);
            this.element.appendChild(fragment);
            this.items.push(this.app.window.id);
            this.updateOffset();
        }
        else {
            var currentItemElement = this.element.querySelector("." + (this.app.prefix + "salver-item") + "[data-window-id='" + this.app.window.id + "']");
            ElementHelper.addClasses(currentItemElement, this.app.prefix, "salver-item-active");
        }
    };
    UISalverBar.prototype.removeItem = function () {
        if (!this.app.window || !this.element)
            return;
        if (this.items.indexOf(this.app.window.id) > -1) {
            var currentSelectItemElement = this.element.querySelector("." + (this.app.prefix + "salver-item") + "[data-window-id='" + this.app.window.id + "']");
            if (currentSelectItemElement && currentSelectItemElement.parentElement) {
                currentSelectItemElement.parentElement.removeChild(currentSelectItemElement);
            }
            var index = this.items.indexOf(this.app.window.id);
            this.items.splice(index, 1);
        }
    };
    UISalverBar.prototype.updateOffset = function () {
        if (this.element) {
            var itemsWidth = this.items.length * UISalverBar.size;
            ElementHelper.addStyles(this.element, {
                left: (innerWidth - itemsWidth) / 2 + "px"
            });
        }
    };
    UISalverBar.prototype.show = function () {
        ElementHelper.removeClasses(this.element, this.app.prefix, "animate-salver-slide-down");
        ElementHelper.addClasses(this.element, this.app.prefix, "animate-salver-slide-up", "salver-bar-keep");
    };
    UISalverBar.prototype.hide = function () {
        ElementHelper.removeClasses(this.element, this.app.prefix, "animate-salver-slide-up", "salver-bar-keep");
        ElementHelper.addClasses(this.element, this.app.prefix, "animate-salver-slide-down");
    };
    UISalverBar.size = 50;
    UISalverBar.talentHeight = 5;
    return UISalverBar;
}(UIComponent_1.default));
exports.default = UISalverBar;
