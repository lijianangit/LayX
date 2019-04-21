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
var UIIcon_1 = require("./UIIcon");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var EventHelper = require("../utils/EventHelper");
var UISalverButton = (function (_super) {
    __extends(UISalverButton, _super);
    function UISalverButton(app, windowId) {
        var _this = _super.call(this, app) || this;
        _this._element = null;
        _this.windowId = CastHelper.stringCast(windowId);
        _this.elementId = _this.app.prefix + windowId + "-" + "salver-button";
        return _this;
    }
    Object.defineProperty(UISalverButton.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    UISalverButton.prototype.present = function () {
        var _this = this;
        var fragment = ElementHelper.createFragment();
        var salverButtonElement = ElementHelper.createElement("div");
        salverButtonElement.id = this.elementId;
        salverButtonElement.setAttribute("data-window-id", this.windowId);
        ElementHelper.addClasses(salverButtonElement, this.app.prefix, "salver-button", "flexbox", "flex-center", "salver-button-active");
        ElementHelper.addStyles(salverButtonElement, {
            width: UISalverButton.size + "px",
            height: UISalverButton.size + "px"
        });
        var window = this.app.getWindow(this.windowId);
        EventHelper.addTouchStartEvent(salverButtonElement, function (ev) {
            if (!window)
                return;
            if (window === _this.app.window && window.status !== "min") {
                window.min();
            }
            else {
                window.updateZIndex();
            }
        });
        var titleBar = window.getComponent("\n            " + "tool-bar" + "\n            /" + "title-bar");
        var defaultTitle = "未命名标题";
        var defaultIcon = new UIIcon_1.default(this.app, "icon");
        if (titleBar) {
            defaultTitle = titleBar.title || defaultTitle;
            var windowIcon = titleBar.getComponent("" + "window-icon");
            if (windowIcon)
                defaultIcon = windowIcon;
        }
        salverButtonElement.setAttribute("title", defaultTitle);
        salverButtonElement.appendChild(defaultIcon.present());
        fragment.appendChild(salverButtonElement);
        return fragment;
    };
    UISalverButton.size = 50;
    UISalverButton.talentHeight = 5;
    return UISalverButton;
}(UIComponent_1.default));
exports.default = UISalverButton;
