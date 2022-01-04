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
var ElementHelper = require("../utils/ElementHelper");
var TypeHelper = require("../utils/TypeHelper");
var UIHtmlContent = (function (_super) {
    __extends(UIHtmlContent, _super);
    function UIHtmlContent(app, window, content) {
        var _this = _super.call(this, app, window) || this;
        _this.content = content;
        return _this;
    }
    UIHtmlContent.prototype.present = function () {
        var fragment = ElementHelper.createFragment();
        var htmlContentElement = ElementHelper.createElement("div");
        ElementHelper.addClasses(htmlContentElement, this.app.prefix, "html-content");
        if (TypeHelper.isElement(this.content)) {
            var newElement = this.content.cloneNode(true);
            ElementHelper.addStyles(newElement, {
                display: 'inherit'
            });
            htmlContentElement.appendChild(newElement);
        }
        else
            htmlContentElement.innerHTML = this.content;
        fragment.appendChild(htmlContentElement);
        return fragment;
    };
    return UIHtmlContent;
}(UIWindowComponent_1.default));
exports.default = UIHtmlContent;
