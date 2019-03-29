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
var WindowResizeDragEvent_1 = require("../basic/events/WindowResizeDragEvent");
var StringHelper = require("../utils/StringHelper");
var ElementHelper = require("../utils/ElementHelper");
var CastHelper = require("../utils/CastHelper");
var UIResizeBar = (function (_super) {
    __extends(UIResizeBar, _super);
    function UIResizeBar(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.elementId = _this.window.elementId + "-" + "resize-bar";
        _this.left = true;
        _this.right = true;
        _this.top = true;
        _this.bottom = true;
        _this.leftTop = true;
        _this.rightTop = true;
        _this.leftBottom = true;
        _this.rightBottom = true;
        _this._element = null;
        _this.directions = [
            "left",
            "right",
            "top",
            "bottom",
            "left-top",
            "right-top",
            "left-bottom",
            "right-bottom"
        ];
        _this.left = CastHelper.booleanCast(options.left, _this.left);
        _this.right = CastHelper.booleanCast(options.right, _this.right);
        _this.top = CastHelper.booleanCast(options.top, _this.top);
        _this.bottom = CastHelper.booleanCast(options.bottom, _this.bottom);
        _this.leftTop = CastHelper.booleanCast(options.leftTop, _this.leftTop);
        _this.rightTop = CastHelper.booleanCast(options.rightTop, _this.rightTop);
        _this.leftBottom = CastHelper.booleanCast(options.leftBottom, _this.leftBottom);
        _this.rightBottom = CastHelper.booleanCast(options.rightBottom, _this.rightBottom);
        return _this;
    }
    Object.defineProperty(UIResizeBar.prototype, "element", {
        get: function () {
            return document.getElementById("" + this.elementId);
        },
        enumerable: true,
        configurable: true
    });
    UIResizeBar.prototype.present = function () {
        var fragment = ElementHelper.createFragment();
        if (this.leastOneTrue()) {
            var resizeElement = ElementHelper.createElement("div");
            resizeElement.setAttribute("data-window-id", this.window.id);
            resizeElement.id = this.elementId;
            ElementHelper.addClasses(resizeElement, this.app.prefix, "resize-bar");
            resizeElement.addEventListener("contextmenu", function (ev) {
                ev.preventDefault();
                ev.stopPropagation();
                ev.returnValue = false;
                return false;
            });
            for (var _i = 0, _a = this.directions; _i < _a.length; _i++) {
                var key = _a[_i];
                if (this[StringHelper.getCamelCase(key)] === true) {
                    resizeElement.appendChild(this.presentItem(key));
                }
            }
            fragment.appendChild(resizeElement);
        }
        return fragment;
    };
    UIResizeBar.prototype.presentItem = function (key) {
        var itemElement = document.createElement("div");
        itemElement.setAttribute("data-window-id", this.window.id);
        ElementHelper.addClasses(itemElement, this.app.prefix, "resize-item-" + key);
        new WindowResizeDragEvent_1.default(this.app, this.window, itemElement, key);
        return itemElement;
    };
    UIResizeBar.prototype.leastOneTrue = function () {
        var isExist = false;
        for (var _i = 0, _a = this.directions; _i < _a.length; _i++) {
            var key = _a[_i];
            if (this[StringHelper.getCamelCase(key)] === true) {
                isExist = true;
                break;
            }
        }
        return isExist;
    };
    return UIResizeBar;
}(UIWindowComponent_1.default));
exports.default = UIResizeBar;
