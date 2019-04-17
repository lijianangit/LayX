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
var UIHtmlContent_1 = require("./UIHtmlContent");
var UIFrameContent_1 = require("./UIFrameContent");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var UIContent = (function (_super) {
    __extends(UIContent, _super);
    function UIContent(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.elementId = _this.window.elementId + "-" + "content-container";
        _this.type = "html";
        _this.value = "";
        _this._element = null;
        _this._penetrateElement = null;
        _this.type = CastHelper.contentTypeCast(options.type, _this.type);
        _this.value = CastHelper.stringOrElementCast(options.value);
        return _this;
    }
    Object.defineProperty(UIContent.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIContent.prototype, "penetrateElement", {
        get: function () {
            var element = this.element;
            if (!element)
                return null;
            return element.querySelector("." + (this.app.prefix + "content-penetrate"));
        },
        enumerable: true,
        configurable: true
    });
    UIContent.prototype.present = function () {
        var fragment = ElementHelper.createFragment();
        var contentElement = ElementHelper.createElement("div");
        contentElement.setAttribute("data-window-id", this.window.id);
        contentElement.id = this.elementId;
        ElementHelper.addClasses(contentElement, this.app.prefix, "content-container", "content-container" + "-fade-out", "flex-item");
        ElementHelper.addClasses(contentElement, this.app.prefix, "content-container");
        var penetrateElement = ElementHelper.createElement("div");
        ElementHelper.addClasses(penetrateElement, this.app.prefix, "content-penetrate");
        contentElement.appendChild(penetrateElement);
        switch (this.type) {
            case "html":
                var htmlContent = new UIHtmlContent_1.default(this.app, this.window, this.value);
                var htmlElement = htmlContent.present();
                contentElement.appendChild(htmlElement);
                this.setComponent("content", htmlContent);
                break;
            case "local-url":
                var frameContent = new UIFrameContent_1.default(this.app, this.window, this.value);
                var frameContentElement = frameContent.present();
                contentElement.appendChild(frameContentElement);
                this.setComponent("content", frameContent);
                break;
        }
        fragment.appendChild(contentElement);
        return fragment;
    };
    UIContent.prototype.showPenetrate = function (isShow) {
        if (isShow === void 0) { isShow = true; }
        if (isShow) {
            ElementHelper.addClasses(this.penetrateElement, this.app.prefix, "content-penetrate" + "-active");
        }
        else {
            ElementHelper.removeClasses(this.penetrateElement, this.app.prefix, "content-penetrate" + "-active");
        }
    };
    return UIContent;
}(UIWindowComponent_1.default));
exports.default = UIContent;
