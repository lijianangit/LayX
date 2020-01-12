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
var const_1 = require("../../entry/const");
var ui_icon_1 = require("../ui-icon");
var partial_1 = require("./partial");
var UIToolBar = (function (_super) {
    __extends(UIToolBar, _super);
    function UIToolBar(options) {
        var _this = _super.call(this) || this;
        _this.handlerOptions = partial_1.handlerOptions;
        _this.titleBar = _this.evaluateOrReturnDefault("window/toolBar/titleBar", false);
        _this.height = _this.evaluateOrReturnDefault("window/toolBar/height", const_1.DEFAULT_TOOLBAR_HEIGHT);
        _this.backgroundColor = _this.evaluateOrReturnDefault("window/toolBar/backgroundColor", const_1.DEFAULT_TOOLBAR_BACKGROUND_COLOR);
        _this.icon = _this.evaluateOrReturnDefault("window/toolBar/icon", false);
        _this.handlerOptions(options);
        return _this;
    }
    UIToolBar.prototype.present = function () {
        var element = element_helper_1.createDivElement();
        element_helper_1.addCSSClasses(element, "tool-bar", "flex-box", "vertical-middle");
        element_helper_1.addCSSStyles(element, {
            height: this.height + "px",
        });
        this.appendChild(element);
        return element;
    };
    UIToolBar.prototype.appendChild = function (element) {
        if (this.icon !== false) {
            var uiIcon = new ui_icon_1.default(this.icon);
            var uiIconElement = uiIcon.present();
            element_helper_1.addCSSClasses(uiIconElement, "tool-bar-icon");
            element.appendChild(uiIconElement);
        }
        if (this.titleBar !== false) {
            var titleBarElement = element_helper_1.createDivElement();
            element_helper_1.addCSSClasses(titleBarElement, "title-bar", "flex-item");
            element_helper_1.addCSSStyles(titleBarElement, {
                color: "" + this.titleBar.color,
                textAlign: "" + this.titleBar.align,
                fontSize: this.titleBar.fontSize + "px"
            });
            titleBarElement.textContent = this.titleBar.label;
            element.appendChild(titleBarElement);
        }
    };
    __decorate([
        property_decorator_1.combine({
            label: validator_1.checkString,
            color: validator_1.checkColor,
            align: ["left", "center", "right"],
            fontSize: validator_1.checkPstInt
        }, false)
    ], UIToolBar.prototype, "titleBar", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIToolBar.prototype, "height", void 0);
    __decorate([
        property_decorator_1.isColor()
    ], UIToolBar.prototype, "backgroundColor", void 0);
    __decorate([
        property_decorator_1.combine({
            name: validator_1.checkNoEmptyOrNull,
            size: validator_1.checkPstInt,
            color: validator_1.checkColor
        }, false)
    ], UIToolBar.prototype, "icon", void 0);
    return UIToolBar;
}(__1.default));
exports.default = UIToolBar;
//# sourceMappingURL=index.js.map