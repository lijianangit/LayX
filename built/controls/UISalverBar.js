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
var UISalverButton_1 = require("./UISalverButton");
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
            height: UISalverButton_1.default.size + "px",
            bottom: "-" + (UISalverButton_1.default.size - UISalverButton_1.default.talentHeight) + "px"
        });
        fragment.appendChild(salverBarElement);
        return fragment;
    };
    UISalverBar.prototype.addOrUpdateItem = function () {
        var salverElement = this.element;
        if (!this.app.window || !salverElement)
            return;
        var lastWindow = this.app.lastWindow;
        if (lastWindow) {
            var lastSalverButton = new UISalverButton_1.default(this.app, lastWindow.id);
            ElementHelper.removeClasses(lastSalverButton.element, this.app.prefix, "salver-button-active");
        }
        var windowId = this.app.window.id;
        var salverButton = new UISalverButton_1.default(this.app, windowId);
        if (this.items.indexOf(windowId) === -1) {
            var salverButtonElement = salverButton.present();
            salverElement.appendChild(salverButtonElement);
            this.items.push(windowId);
            this.updateOffset();
        }
        else {
            ElementHelper.addClasses(salverButton.element, this.app.prefix, "salver-button-active");
        }
    };
    UISalverBar.prototype.removeItem = function () {
        var salverElement = this.element;
        if (!this.app.window || !salverElement)
            return;
        var windowId = this.app.window.id;
        var salverButton = new UISalverButton_1.default(this.app, windowId);
        ElementHelper.removeElement(salverButton.element);
        var index = this.items.indexOf(windowId);
        this.items.splice(index, 1);
        this.updateOffset();
    };
    UISalverBar.prototype.updateOffset = function () {
        var salverElement = this.element;
        if (!salverElement)
            return;
        var itemsWidth = this.items.length * UISalverButton_1.default.size;
        ElementHelper.addStyles(salverElement, {
            left: (innerWidth - itemsWidth) / 2 + "px"
        });
    };
    UISalverBar.prototype.show = function (isVisible) {
        if (isVisible === void 0) { isVisible = true; }
        if (isVisible) {
            ElementHelper.removeClasses(this.element, this.app.prefix, "animate-salver-slide-down");
            ElementHelper.addClasses(this.element, this.app.prefix, "animate-salver-slide-up", "salver-bar-keep");
        }
        else {
            ElementHelper.removeClasses(this.element, this.app.prefix, "animate-salver-slide-up", "salver-bar-keep");
            ElementHelper.addClasses(this.element, this.app.prefix, "animate-salver-slide-down");
        }
    };
    return UISalverBar;
}(UIComponent_1.default));
exports.default = UISalverBar;
