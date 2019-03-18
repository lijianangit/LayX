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
var StringHelper = require("../utils/StringHelper");
var ElementHelper = require("../utils/ElementHelper");
var UIActionButton = (function (_super) {
    __extends(UIActionButton, _super);
    function UIActionButton(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.kind = "actionButton";
        _this.components = {};
        _this.id = options.id;
        _this.label = options.label;
        _this.handler = options.handler;
        return _this;
    }
    UIActionButton.prototype.present = function () {
        var _this = this;
        var fragment = document.createDocumentFragment();
        var kebabCase = StringHelper.getKebabCase(this.kind);
        var actionButtonElement = document.createElement("div");
        actionButtonElement.id = this.window.elementId + "-" + kebabCase + "-" + this.id;
        actionButtonElement.setAttribute("title", this.label);
        ElementHelper.addClasses(actionButtonElement, this.app.prefix, kebabCase, kebabCase + "-" + this.id, "flexbox", "flex-center");
        ElementHelper.addStyles(actionButtonElement, {
            width: UIActionButton.width + "px"
        });
        var icon = new UIIcon_1.default(this.app, this.window, this.id);
        var iconElement = icon.present();
        iconElement && actionButtonElement.appendChild(iconElement);
        this.components[icon.kind] = icon;
        actionButtonElement.addEventListener("mousedown", function (ev) {
            if (ev.button === 0 && typeof _this.handler === "function") {
                _this.handler(_this.window);
            }
        }, true);
        fragment.appendChild(actionButtonElement);
        return fragment;
    };
    UIActionButton.width = 45;
    UIActionButton.destroyActionButton = {
        id: "destroy",
        label: "关闭",
        handler: function (window) {
            window.destroy();
        }
    };
    UIActionButton.maxActionButton = {
        id: "max",
        label: "最大化",
        handler: function (window) {
            window.max();
        }
    };
    UIActionButton.restoreActionButton = {
        id: "restore",
        label: "恢复",
        handler: function (window) {
            window.normal();
        }
    };
    UIActionButton.minActionButton = {
        id: "min",
        label: "最小化",
        handler: function (window) {
        }
    };
    UIActionButton.infoActionButton = {
        id: "info",
        label: "关于",
        handler: function (window) {
        }
    };
    UIActionButton.moreActionButton = {
        id: "more",
        label: "更多操作",
        handler: function (window) {
        }
    };
    return UIActionButton;
}(UIWindowComponent_1.default));
exports.default = UIActionButton;
