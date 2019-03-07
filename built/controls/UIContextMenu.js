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
var UIContextMenu = (function (_super) {
    __extends(UIContextMenu, _super);
    function UIContextMenu(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.kind = "contextMenu";
        _this.id = options.id;
        _this.label = options.label;
        _this.handler = options.handler;
        return _this;
    }
    UIContextMenu.prototype.present = function () {
        var _this = this;
        var fragment = document.createDocumentFragment();
        var kebabCase = StringHelper.getKebabCase(this.kind);
        var contextMenuElement = document.createElement("div");
        contextMenuElement.id = this.window.elementId + "-" + kebabCase + "-" + this.id;
        ElementHelper.addClasses(contextMenuElement, this.app.prefix, kebabCase + "-item");
        var labelElement = document.createElement("label");
        ElementHelper.addClasses(labelElement, this.app.prefix, kebabCase + "-label");
        labelElement.innerText = this.label;
        contextMenuElement.appendChild(labelElement);
        contextMenuElement.addEventListener("mousedown", function (ev) {
            if (typeof _this.handler === "function") {
                _this.handler(_this.window);
            }
        });
        fragment.appendChild(contextMenuElement);
        return fragment;
    };
    return UIContextMenu;
}(UIWindowComponent_1.default));
exports.default = UIContextMenu;
