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
var partial_1 = require("./partial");
var ui_icon_1 = require("../ui-icon");
var UIActionButton = (function (_super) {
    __extends(UIActionButton, _super);
    function UIActionButton(options) {
        var _this = _super.call(this) || this;
        _this.handlerOptions = partial_1.handlerOptions;
        _this.disabled = false;
        _this.width = 45;
        _this.name = options.name;
        _this.handlerOptions(options);
        return _this;
    }
    UIActionButton.prototype.present = function () {
        var _this = this;
        var element = element_helper_1.createDivElement();
        element_helper_1.addCSSClasses(element, "action-button", "action-" + this.name, "flex-box", "center-all", this.disabled ? "action-button-disabled" : undefined);
        element_helper_1.addCSSStyles(element, {
            width: this.width + "px"
        });
        if (this.handler) {
            element.addEventListener("click", function (ev) { return _this.handler(ev); }, true);
        }
        var uiIcon = new ui_icon_1.UIICon({
            name: this.name
        });
        var svgElement = uiIcon.present();
        element.appendChild(svgElement);
        return element;
    };
    __decorate([
        property_decorator_1.isNoEmptyOrNull()
    ], UIActionButton.prototype, "name", void 0);
    __decorate([
        property_decorator_1.isBoolean()
    ], UIActionButton.prototype, "disabled", void 0);
    __decorate([
        property_decorator_1.admix(validator_1.checkFunction, undefined)
    ], UIActionButton.prototype, "handler", void 0);
    __decorate([
        property_decorator_1.isPstInt()
    ], UIActionButton.prototype, "width", void 0);
    return UIActionButton;
}(__1.Component));
exports.UIActionButton = UIActionButton;
//# sourceMappingURL=index.js.map