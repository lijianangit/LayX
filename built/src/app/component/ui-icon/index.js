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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
var property_decorator_1 = require("../../core/decorator/property-decorator");
var element_helper_1 = require("../../core/helper/element-helper");
var validator_1 = require("../../core/validator");
var const_1 = require("./const");
var partial_1 = require("./partial");
var UIICon = (function (_super) {
    __extends(UIICon, _super);
    function UIICon(options) {
        var _a;
        var _this = _super.call(this) || this;
        _this.handlerOptions = partial_1.handlerOptions;
        _this.color = null;
        _this.size = const_1.DEFAULT_ICON_SIZE;
        _this.name = (_a = options) === null || _a === void 0 ? void 0 : _a.name;
        _this.handlerOptions(options);
        return _this;
    }
    UIICon.prototype.present = function () {
        var element = element_helper_1.createDivElement();
        element_helper_1.addCSSClasses(element, "icon");
        var svgElement = element_helper_1.createSvgElement(this.name);
        svgElement.setAttribute("class", this.entry.prefix + "svg");
        svgElement.style.fontSize = this.size + "px";
        svgElement.style.color = this.color;
        element.appendChild(svgElement);
        return element;
    };
    __decorate([
        property_decorator_1.isNoEmptyOrNull()
    ], UIICon.prototype, "name", void 0);
    __decorate([
        property_decorator_1.admix(validator_1.checkColor, null)
    ], UIICon.prototype, "color", void 0);
    __decorate([
        property_decorator_1.isPstInt()
    ], UIICon.prototype, "size", void 0);
    return UIICon;
}(__1.Component));
exports.UIICon = UIICon;
//# sourceMappingURL=index.js.map