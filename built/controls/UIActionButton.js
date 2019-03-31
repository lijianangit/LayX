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
var UIIcon_1 = require("./UIIcon");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var UIActionButton = (function (_super) {
    __extends(UIActionButton, _super);
    function UIActionButton(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this._element = null;
        _this.id = CastHelper.stringCast(options.id);
        _this.label = CastHelper.stringCast(options.label);
        _this.handler = options.handler;
        _this.elementId = _this.window.elementId + "-" + "action-button" + "-" + _this.id;
        return _this;
    }
    Object.defineProperty(UIActionButton.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    UIActionButton.prototype.present = function () {
        var _this = this;
        var fragment = ElementHelper.createFragment();
        var actionButtonElement = ElementHelper.createElement("div");
        actionButtonElement.setAttribute("data-window-id", this.window.id);
        actionButtonElement.id = this.elementId;
        actionButtonElement.setAttribute("title", this.label);
        ElementHelper.addClasses(actionButtonElement, this.app.prefix, "action-button", "flexbox", "flex-center");
        ElementHelper.addStyles(actionButtonElement, {
            width: UIActionButton.width + "px"
        });
        actionButtonElement.addEventListener("mousedown", function (ev) {
            if (ev.button === 0 && typeof _this.handler === "function") {
                _this.handler(ev, _this.window);
            }
        }, true);
        var icon = new UIIcon_1.default(this.app, this.window, this.id);
        var iconElement = icon.present();
        actionButtonElement.appendChild(iconElement);
        this.setComponent("action-button", icon);
        fragment.appendChild(actionButtonElement);
        return fragment;
    };
    UIActionButton.width = 45;
    UIActionButton.destroy = {
        id: "destroy",
        label: "关闭",
        handler: function (ev, window) {
            window.destroy();
        }
    };
    UIActionButton.max = {
        id: "max",
        label: "最大化",
        handler: function (ev, window) {
            window.max();
        }
    };
    UIActionButton.restore = {
        id: "restore",
        label: "恢复",
        handler: function (ev, window) {
            window.normal();
        }
    };
    UIActionButton.min = {
        id: "min",
        label: "最小化",
        handler: function (ev, window) {
            window.min();
        }
    };
    UIActionButton.info = {
        id: "info",
        label: "关于",
        handler: function (ev, window) {
        }
    };
    UIActionButton.more = {
        id: "more",
        label: "更多操作",
        handler: function (ev, window) {
        }
    };
    return UIActionButton;
}(UIWindowComponent_1.default));
exports.default = UIActionButton;
