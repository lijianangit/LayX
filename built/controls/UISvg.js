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
var UISvg = (function (_super) {
    __extends(UISvg, _super);
    function UISvg(app, window, id) {
        var _this = _super.call(this, app, window) || this;
        _this.kind = "svg";
        if (!id)
            ExceptionHelper.assertId();
        _this.id = id;
        return _this;
    }
    UISvg.prototype.present = function () {
        var fragment = document.createDocumentFragment();
        var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.setAttribute("class", this.app.prefix + "iconfont");
        var useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
        useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + this.id);
        svgElement.appendChild(useElement);
        fragment.appendChild(svgElement);
        return fragment;
    };
    return UISvg;
}(UIWindowComponent_1.default));
exports.default = UISvg;
