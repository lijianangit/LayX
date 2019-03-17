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
var ExceptionHelper = require("../utils/ExceptionHelper");
var StringHelper = require("../utils/StringHelper");
var UIIcon = (function (_super) {
    __extends(UIIcon, _super);
    function UIIcon(app, window, name) {
        var _this = _super.call(this, app, window) || this;
        _this.kind = "icon";
        if (!name)
            ExceptionHelper.assertName();
        _this.name = name;
        return _this;
    }
    UIIcon.prototype.present = function () {
        var fragment = document.createDocumentFragment();
        var iconElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        var kebabCase = StringHelper.getKebabCase(this.kind);
        iconElement.setAttribute("class", "" + (this.app.prefix + kebabCase));
        var useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
        useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + this.name);
        iconElement.appendChild(useElement);
        fragment.appendChild(iconElement);
        return fragment;
    };
    return UIIcon;
}(UIWindowComponent_1.default));
exports.default = UIIcon;
