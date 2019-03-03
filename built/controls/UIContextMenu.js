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
var UIWindowRelative_1 = require("../basic/models/UIWindowRelative");
var StringHelper_1 = require("../utils/StringHelper");
var ElementHelper_1 = require("../utils/ElementHelper");
var UIContextMenu = (function (_super) {
    __extends(UIContextMenu, _super);
    function UIContextMenu(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.kind = "contextMenu";
        _this._id = options.id;
        _this._label = options.label;
        _this._handler = options.handler;
        return _this;
    }
    Object.defineProperty(UIContextMenu.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIContextMenu.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIContextMenu.prototype, "handler", {
        get: function () {
            return this._handler;
        },
        set: function (value) {
            this._handler = value;
        },
        enumerable: true,
        configurable: true
    });
    UIContextMenu.prototype.present = function () {
        var _this = this;
        var fragment = document.createDocumentFragment();
        var contextMenuElement = document.createElement("div");
        contextMenuElement.id = this.window.elementId + "-" + StringHelper_1.getKebabCase(this.kind) + "-" + this.id;
        ElementHelper_1.addClasses(contextMenuElement, this.app.prefix, StringHelper_1.getKebabCase(this.kind) + "-item");
        var labelElement = document.createElement("label");
        ElementHelper_1.addClasses(labelElement, this.app.prefix, StringHelper_1.getKebabCase(this.kind) + "-label");
        labelElement.innerText = this.label;
        contextMenuElement.appendChild(labelElement);
        contextMenuElement.addEventListener("contextmenu", function (ev) {
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        });
        contextMenuElement.addEventListener("click", function (ev) {
            if (typeof _this.handler === "function") {
                _this.handler(_this.window);
            }
            _this.window.hideContextMenu();
        }, false);
        fragment.appendChild(contextMenuElement);
        return fragment;
    };
    return UIContextMenu;
}(UIWindowRelative_1.default));
exports.default = UIContextMenu;
