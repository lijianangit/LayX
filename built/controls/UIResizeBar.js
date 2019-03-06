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
var WindowResizeDragHandler_1 = require("../basic/handlers/WindowResizeDragHandler");
var StringHelper = require("../utils/StringHelper");
var ElementHelper = require("../utils/ElementHelper");
var UIResizeBar = (function (_super) {
    __extends(UIResizeBar, _super);
    function UIResizeBar(app, window, options) {
        var _this = _super.call(this, app, window) || this;
        _this.kind = "resizeBar";
        _this.left = true;
        _this.right = true;
        _this.top = true;
        _this.bottom = true;
        _this.leftTop = true;
        _this.rightTop = true;
        _this.leftBottom = true;
        _this.rightBottom = true;
        _this.directions = [
            "left",
            "right",
            "top",
            "bottom",
            "leftTop",
            "rightTop",
            "leftBottom",
            "rightBottom"
        ];
        _this.left = options.left === undefined ? _this.left : options.left;
        _this.right = options.right === undefined ? _this.right : options.right;
        _this.top = options.top === undefined ? _this.top : options.top;
        _this.bottom = options.bottom === undefined ? _this.bottom : options.bottom;
        _this.leftTop = options.leftTop === undefined ? _this.leftTop : options.leftTop;
        _this.rightTop = options.rightTop === undefined ? _this.rightTop : options.rightTop;
        _this.leftBottom = options.leftBottom === undefined ? _this.leftBottom : options.leftBottom;
        _this.rightBottom = options.rightBottom === undefined ? _this.rightBottom : options.rightBottom;
        return _this;
    }
    UIResizeBar.prototype.present = function () {
        if (!this.leastOneTrue())
            return null;
        var fragment = document.createDocumentFragment();
        var kebabCase = StringHelper.getKebabCase(this.kind);
        var resizeElement = document.createElement("div");
        ElementHelper.addClasses(resizeElement, this.app.prefix, kebabCase);
        for (var _i = 0, _a = this.directions; _i < _a.length; _i++) {
            var key = _a[_i];
            if (this[key] === true) {
                resizeElement.appendChild(this.presentItem(key));
            }
        }
        fragment.appendChild(resizeElement);
        return fragment;
    };
    UIResizeBar.prototype.presentItem = function (key) {
        var kebabCase = StringHelper.getKebabCase(key);
        var itemElement = document.createElement("div");
        ElementHelper.addClasses(itemElement, this.app.prefix, "resize-" + kebabCase);
        new WindowResizeDragHandler_1.default(itemElement, key, this.window);
        return itemElement;
    };
    UIResizeBar.prototype.leastOneTrue = function () {
        var isExist = false;
        for (var _i = 0, _a = this.directions; _i < _a.length; _i++) {
            var key = _a[_i];
            if (this[key] === true) {
                isExist = true;
                break;
            }
        }
        return isExist;
    };
    return UIResizeBar;
}(UIWindowRelative_1.default));
exports.default = UIResizeBar;
