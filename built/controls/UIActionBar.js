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
var UIToolBarComponent_1 = require("../basic/models/UIToolBarComponent");
var StringHelper = require("../utils/StringHelper");
var ElementHelper = require("../utils/ElementHelper");
var TypeHelper = require("../utils/TypeHelper");
var UIActionButton_1 = require("./UIActionButton");
var UIActionBar = (function (_super) {
    __extends(UIActionBar, _super);
    function UIActionBar(app, window, toolBar) {
        var _this = _super.call(this, app, window, toolBar) || this;
        _this.kind = "actionBar";
        return _this;
    }
    UIActionBar.prototype.present = function () {
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
        });
        this.createActionButton(actionBarElement);
        fragment.appendChild(actionBarElement);
        return fragment;
    };
    UIActionBar.prototype.createActionButton = function (actionBarElement) {
        if (this.toolBar.actionBar instanceof Array && TypeHelper.isActionButtons(this.toolBar.actionBar)) {
            for (var _i = 0, _a = this.toolBar.actionBar; _i < _a.length; _i++) {
                var item = _a[_i];
                var actionButton = new UIActionButton_1.default(this.app, this.window, this.toolBar, this, item);
                var actionButtonElement = actionButton.present();
                actionButtonElement && actionBarElement.appendChild(actionButtonElement);
            }
        }
    };
    return UIActionBar;
}(UIToolBarComponent_1.default));
exports.default = UIActionBar;
