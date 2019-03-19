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
var UIActionButton_1 = require("./UIActionButton");
var StringHelper = require("../utils/StringHelper");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var UIActionBar = (function (_super) {
    __extends(UIActionBar, _super);
    function UIActionBar(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.kind = "actionBar";
        _this.components = {};
        _this.enable = true;
        _this.actionButtons = [
            UIActionButton_1.default.infoActionButton,
            UIActionButton_1.default.minActionButton,
            UIActionButton_1.default.maxActionButton,
            UIActionButton_1.default.destroyActionButton
        ];
        _this.enable = CastHelper.booleanCast(options.enable, _this.enable);
        _this.actionButtons = CastHelper.actionButtonsCast(options.actionButtons, _this.actionButtons);
        return _this;
    }
    UIActionBar.prototype.present = function () {
        if (this.enable === false)
            return null;
        var fragment = document.createDocumentFragment();
        var kebabCase = StringHelper.getKebabCase(this.kind);
        var actionBarElement = document.createElement("div");
        ElementHelper.addClasses(actionBarElement, this.app.prefix, kebabCase, "flexbox", "flex-row");
        actionBarElement.addEventListener("mousedown", function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
        });
        actionBarElement.addEventListener("contextmenu", function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        }, true);
        this.createActionButtons(actionBarElement);
        fragment.appendChild(actionBarElement);
        return fragment;
    };
    UIActionBar.prototype.createActionButtons = function (actionBarElement) {
        if (this.actionButtons !== false) {
            var actionButtons = Array();
            for (var _i = 0, _a = this.actionButtons; _i < _a.length; _i++) {
                var item = _a[_i];
                var actionButton = new UIActionButton_1.default(this.app, this.window, item);
                var actionButtonElement = actionButton.present();
                actionButtonElement && actionBarElement.appendChild(actionButtonElement);
                actionButtons.push(actionButton);
            }
            this.components["actionButtons"] = actionButtons;
        }
    };
    UIActionBar.prototype.reizeActionButtons = function (width) {
        var isMerge = width <= 300 ? true : false;
        if (this.actionButtons === false)
            return;
        var actionButtons = this.components["actionButtons"];
        var _a = actionButtons.slice().reverse(), last = _a[0], front = _a.slice(1);
        for (var _i = 0, front_1 = front; _i < front_1.length; _i++) {
            var item = front_1[_i];
            if (item.element) {
                isMerge
                    ? ElementHelper.addClasses(item.element, this.app.prefix, "action-button-hidden")
                    : ElementHelper.removeClasses(item.element, this.app.prefix, "action-button-hidden");
            }
        }
        var moreActionButton = new UIActionButton_1.default(this.app, this.window, UIActionButton_1.default.moreActionButton);
        if (isMerge) {
            var moreActionButtonElement = moreActionButton.present();
            moreActionButtonElement
                && moreActionButtonElement.firstElementChild
                && last.element.insertAdjacentElement('beforebegin', moreActionButtonElement.firstElementChild);
        }
        else {
            moreActionButton.element
                && moreActionButton.element.parentElement.removeChild(moreActionButton.element);
        }
    };
    return UIActionBar;
}(UIWindowComponent_1.default));
exports.default = UIActionBar;
