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
        var _this = this;
        var fragment = ElementHelper.createFragment();
        var salverBarElement = ElementHelper.createElement("div");
        salverBarElement.id = this.elementId;
        ElementHelper.addClasses(salverBarElement, this.app.prefix, "salver-bar", "animate-1s", "flexbox", "flex-row");
        ElementHelper.addStyles(salverBarElement, {
            zIndex: "" + this.app.salverZIndex,
            height: UISalverBar.size + "px",
            bottom: "-" + (UISalverBar.size - UISalverBar.talentHeight) + "px"
        });
        salverBarElement.addEventListener("animationend", function (ev) {
            if (ElementHelper.containClass(_this.element, _this.app.prefix, "animate-salver-slide-up")) {
                ElementHelper.removeClasses(_this.element, _this.app.prefix, "animate-salver-slide-up");
                ElementHelper.addClasses(_this.element, _this.app.prefix, "animate-salver-slide-down");
            }
            else {
                ElementHelper.removeClasses(_this.element, _this.app.prefix, "animate-salver-slide-up", "animate-salver-slide-down");
            }
        });
        fragment.appendChild(salverBarElement);
        return fragment;
    };
    UISalverBar.prototype.addOrUpdateItem = function () {
        if (!this.app.window || !this.element)
            return;
        if (this.app.lastWindow) {
            var lastSelectItemElement = this.element.querySelector("." + (this.app.prefix + "salver-item") + "[data-window-id='" + this.app.lastWindow.id + "']");
            ElementHelper.removeClasses(lastSelectItemElement, this.app.prefix, "salver-item-active");
        }
        if (this.items.indexOf(this.app.window.id) === -1) {
            var fragment = ElementHelper.createFragment();
            var itemElement = ElementHelper.createElement("div");
            itemElement.setAttribute("data-window-id", this.app.window.id);
            ElementHelper.addClasses(itemElement, this.app.prefix, "salver-item", "flexbox", "flex-center", "salver-item-active");
            ElementHelper.addStyles(itemElement, {
                width: UISalverBar.size + "px",
                height: UISalverBar.size + "px"
            });
            itemElement.innerText = "Layx";
            fragment.appendChild(itemElement);
            this.element.appendChild(fragment);
            this.updateOffset();
            this.items.push(this.app.window.id);
        }
        else {
            var currentItemElement = this.element.querySelector("." + (this.app.prefix + "salver-item") + "[data-window-id='" + this.app.window.id + "']");
            ElementHelper.addClasses(currentItemElement, this.app.prefix, "salver-item-active");
        }
        this.show();
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
        ElementHelper.addClasses(this.element, this.app.prefix, "animate-salver-slide-up");
    };
    UISalverBar.size = 50;
    UISalverBar.talentHeight = 5;
    return UISalverBar;
}(UIComponent_1.default));
exports.default = UISalverBar;
