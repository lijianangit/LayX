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
var UIActionBarComponent_1 = require("../basic/models/UIActionBarComponent");
var UISvg_1 = require("./UISvg");
var StringHelper = require("../utils/StringHelper");
var ElementHelper = require("../utils/ElementHelper");
var UIActionButton = (function (_super) {
    __extends(UIActionButton, _super);
    function UIActionButton(app, window, toolBar, actionBar, options) {
        var _this = _super.call(this, app, window, toolBar, actionBar) || this;
        _this.kind = "actionButton";
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
        var svg = new UISvg_1.default(this.app, this.window, this.id);
        var svgElement = svg.present();
        svgElement && actionButtonElement.appendChild(svgElement);
        actionButtonElement.addEventListener("mousedown", function (ev) {
            if (typeof _this.handler === "function") {
                _this.handler(_this.window);
            }
        }, true);
        fragment.appendChild(actionButtonElement);
        return fragment;
    };
    return UIActionButton;
}(UIActionBarComponent_1.default));
exports.default = UIActionButton;
