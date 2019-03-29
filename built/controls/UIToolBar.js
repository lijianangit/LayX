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
var WindowMoveDragEvent_1 = require("../basic/events/WindowMoveDragEvent");
var UIActionBar_1 = require("./UIActionBar");
var UITitleBar_1 = require("./UITitleBar");
var UITabBar_1 = require("./UITabBar");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var UIToolBar = (function (_super) {
    __extends(UIToolBar, _super);
    function UIToolBar(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.elementId = _this.window.elementId + "-" + "tool-bar";
        _this.height = 30;
        _this.drag = {
            vertical: true,
            horizontal: true,
            breakLeft: true,
            breakRight: true,
            breakTop: true,
            breakBottom: true
        };
        _this.titleBar = {};
        _this.tabBar = {};
        _this.actionBar = {};
        _this._element = null;
        _this.height = CastHelper.numberCast(options.height, _this.height);
        _this.drag = CastHelper.jsonOrBooleanCast(options.drag, _this.drag);
        _this.titleBar = CastHelper.jsonOrBooleanCast(options.titleBar, _this.titleBar);
        _this.tabBar = CastHelper.jsonOrBooleanCast(options.tabBar, _this.tabBar);
        _this.actionBar = CastHelper.jsonOrBooleanCast(options.actionBar, _this.actionBar);
        return _this;
    }
    Object.defineProperty(UIToolBar.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    UIToolBar.prototype.present = function () {
        var _this = this;
        var fragment = ElementHelper.createFragment();
        var toolBarElement = ElementHelper.createElement("div");
        toolBarElement.setAttribute("data-window-id", this.window.id);
        toolBarElement.id = this.elementId;
        ElementHelper.addClasses(toolBarElement, this.app.prefix, "tool-bar", "flexbox", "flex-row");
        ElementHelper.addStyles(toolBarElement, {
            height: this.height + "px"
        });
        toolBarElement.addEventListener("dblclick", function (ev) {
            if (_this.window.status === "max") {
                _this.window.normal();
                return;
            }
            if (_this.window.status === "normal") {
                _this.window.max();
                return;
            }
        }, true);
        if (this.titleBar !== false) {
            var titleBar = new UITitleBar_1.default(this.app, this.window, this.titleBar);
            var titleBarElement = titleBar.present();
            toolBarElement.appendChild(titleBarElement);
            this.setComponent("title-bar", titleBar);
        }
        if (this.tabBar !== false) {
            var tabBar = new UITabBar_1.default(this.app, this.window, this.tabBar);
            var tabBarElement = tabBar.present();
            toolBarElement.appendChild(tabBarElement);
            this.setComponent("tab-bar", tabBar);
        }
        if (this.actionBar !== false) {
            var actionBar = new UIActionBar_1.default(this.app, this.window, this.actionBar);
            var actionBarElement = actionBar.present();
            actionBarElement && toolBarElement.appendChild(actionBarElement);
            this.setComponent("action-bar", actionBar);
        }
        if (this.drag && (this.drag.vertical === true || this.drag.horizontal === true)) {
            new WindowMoveDragEvent_1.default(this.app, this.window, toolBarElement, this.drag);
        }
        fragment.appendChild(toolBarElement);
        return fragment;
    };
    return UIToolBar;
}(UIWindowComponent_1.default));
exports.default = UIToolBar;
