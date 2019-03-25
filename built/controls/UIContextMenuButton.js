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
var UIIcon_1 = require("./UIIcon");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var UIContextMenuButton = (function (_super) {
    __extends(UIContextMenuButton, _super);
    function UIContextMenuButton(app, window, options, index) {
        if (index === void 0) { index = 0; }
        var _this = _super.call(this, app, window) || this;
        _this.index = index;
        _this.id = CastHelper.stringCast(options.id);
        _this.label = CastHelper.stringCast(options.label);
        _this.handler = options.handler;
        _this.items = CastHelper.contextMenuButtonsCast(options.items);
        return _this;
    }
    UIContextMenuButton.prototype.present = function () {
        var _this = this;
        var fragment = ElementHelper.createFragment();
        var contextMenuButtonElement = ElementHelper.createElement("div");
        contextMenuButtonElement.setAttribute("data-index", "" + this.index);
        ElementHelper.addClasses(contextMenuButtonElement, this.app.prefix, "context-menu-button", "flexbox", "flex-row");
        ElementHelper.addStyles(contextMenuButtonElement, {
            height: UIContextMenuButton.height + "px",
            lineHeight: UIContextMenuButton.height + "px"
        });
        contextMenuButtonElement.addEventListener("mousedown", function (ev) {
            ev.stopPropagation();
            if (ev.button === 0 && typeof _this.handler === "function") {
                _this.handler(ev, _this.window);
            }
        });
        var labelElement = ElementHelper.createElement("label");
        ElementHelper.addClasses(labelElement, this.app.prefix, "context-menu-button" + "-label", "flex-item");
        labelElement.innerText = this.label;
        contextMenuButtonElement.appendChild(labelElement);
        if (this.items !== false) {
            var contextMenuBar_1 = new UIContextMenuBar_1.default(this.app, this.window, "" + this.id, this.items, false);
            var contextMenuBarElement = contextMenuBar_1.present();
            contextMenuButtonElement.appendChild(contextMenuBarElement);
            var childContextMenuBarElement_1 = labelElement.nextElementSibling;
            var waiting_1;
            contextMenuButtonElement.addEventListener("mouseenter", function (ev) {
                waiting_1 = setTimeout(function () {
                    contextMenuBar_1.updateChildrensOffset(ev, childContextMenuBarElement_1, _this.index);
                }, 200);
            });
            contextMenuButtonElement.addEventListener("mouseleave", function (ev) {
                clearTimeout(waiting_1);
                contextMenuBar_1.hideChildren(childContextMenuBarElement_1);
            });
            this.setComponent("context-menu-bar", contextMenuBar_1);
            var rightIconElement = ElementHelper.createElement("div");
            ElementHelper.addClasses(rightIconElement, this.app.prefix, "context-menu-more", "flexbox", "flex-center");
            var icon = new UIIcon_1.default(this.app, this.window, "right");
            var iconElement = icon.present();
            rightIconElement.appendChild(iconElement);
            contextMenuButtonElement.appendChild(rightIconElement);
        }
        fragment.appendChild(contextMenuButtonElement);
        return fragment;
    };
    UIContextMenuButton.height = 30;
    return UIContextMenuButton;
}(UIWindowComponent_1.default));
exports.default = UIContextMenuButton;
