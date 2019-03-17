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
var StringHelper = require("../utils/StringHelper");
var ElementHelper = require("../utils/ElementHelper");
var UITitleBar = (function (_super) {
    __extends(UITitleBar, _super);
    function UITitleBar(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.kind = "titleBar";
        _this.title = options.title;
        return _this;
    }
    UITitleBar.prototype.present = function () {
        var fragment = document.createDocumentFragment();
        var kebabCase = StringHelper.getKebabCase(this.kind);
        var titleBarElement = document.createElement("div");
        ElementHelper.addClasses(titleBarElement, this.app.prefix, kebabCase, "flexbox", "flex-row", "flex-vertical-center");
        if (this.title) {
            var titleElement = document.createElement("div");
            ElementHelper.addClasses(titleElement, this.app.prefix, "title");
            titleElement.innerText = this.title;
            titleBarElement.appendChild(titleElement);
        }
        fragment.appendChild(titleBarElement);
        return fragment;
    };
    return UITitleBar;
}(UIWindowComponent_1.default));
exports.default = UITitleBar;
