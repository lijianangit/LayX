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
var UIActionButton_1 = require("./UIActionButton");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var UIActionBar = (function (_super) {
    __extends(UIActionBar, _super);
    function UIActionBar(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.elementId = _this.window.elementId + "-" + "action-bar";
        _this.enable = true;
        _this.items = [
            UIActionButton_1.default.info,
            UIActionButton_1.default.min,
            UIActionButton_1.default.max,
            UIActionButton_1.default.destroy
        ];
        _this._element = null;
        _this.enable = CastHelper.booleanCast(options.enable, _this.enable);
        _this.items = CastHelper.actionButtonsCast(options.actionButtons, _this.items);
        return _this;
    }
    Object.defineProperty(UIActionBar.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    UIActionBar.prototype.present = function () {
        var fragment = ElementHelper.createFragment();
        if (this.enable === true) {
            var actionBarElement = ElementHelper.createElement("div");
            actionBarElement.id = this.elementId;
            ElementHelper.addClasses(actionBarElement, this.app.prefix, "action-bar", "flexbox", "flex-row");
            actionBarElement.addEventListener("mousedown", function (ev) {
                ev.preventDefault();
                ev.stopPropagation();
            });
            actionBarElement.addEventListener("contextmenu", function (ev) {
                ev.preventDefault();
                ev.stopPropagation();
                ev.returnValue = false;
                return false;
            }, true);
            this.createActionButtons(actionBarElement);
            fragment.appendChild(actionBarElement);
        }
        return fragment;
    };
    UIActionBar.prototype.zoomActionButtons = function (windowWidth) {
        if (this.items === false)
            return;
        var isMerge = windowWidth <= UIActionBar.actionButtonZoomWidth ? true : false;
        var actionButtons = this.getComponent("action-buttons");
        if (!actionButtons)
            return;
        var _a = actionButtons.slice().reverse(), lastActionButton = _a[0], frontActionButtons = _a.slice(1);
        var moreContextMenuButtons = Array();
        frontActionButtons = frontActionButtons.reverse();
        for (var _i = 0, frontActionButtons_1 = frontActionButtons; _i < frontActionButtons_1.length; _i++) {
            var item = frontActionButtons_1[_i];
            isMerge
                ? ElementHelper.addClasses(item.element, this.app.prefix, "action-button-hidden")
                : ElementHelper.removeClasses(item.element, this.app.prefix, "action-button-hidden");
            moreContextMenuButtons.push(item);
        }
        var moreActionButton = new UIActionButton_1.default(this.app, this.window, UIActionButton_1.default.more);
        if (isMerge) {
            if (!moreActionButton.element) {
                var moreContextMenuBar_1 = new UIContextMenuBar_1.default(this.app, this.window, "more-action", moreContextMenuButtons);
                var moreContextMenuBarElement = moreContextMenuBar_1.present();
                document.body.appendChild(moreContextMenuBarElement);
                moreActionButton.handler = function (ev, window) {
                    moreContextMenuBar_1.updateOffset(ev, this.window.zIndex);
                };
                var moreActionButtonElement = moreActionButton.present();
                moreActionButtonElement.firstElementChild
                    && lastActionButton.element.insertAdjacentElement('beforebegin', moreActionButtonElement.firstElementChild);
                this.window.setComponent("more-action-context-menu-bar", moreContextMenuBar_1);
            }
        }
        else {
            if (moreActionButton.element) {
                this.window.removeMoreActionContextMenu();
                moreActionButton.element
                    && moreActionButton.element.parentElement.removeChild(moreActionButton.element);
                this.window.removeComponent("more-action-context-menu-bar");
            }
        }
    };
    UIActionBar.prototype.createActionButtons = function (parentActionBarElemnt) {
        if (this.items === false)
            return;
        var actionButtons = Array();
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            var actionButton = new UIActionButton_1.default(this.app, this.window, item);
            var actionButtonElement = actionButton.present();
            parentActionBarElemnt.appendChild(actionButtonElement);
            actionButtons.push(actionButton);
        }
        this.setComponent("action-buttons", actionButtons);
    };
    UIActionBar.actionButtonZoomWidth = 300;
    return UIActionBar;
}(UIWindowComponent_1.default));
exports.default = UIActionBar;
