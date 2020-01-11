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
var ui_tool_bar_1 = require("../ui-tool-bar");
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(options) {
        var _a, _b, _c;
        var _this = _super.call(this) || this;
        _this.handlerOptions = partial_1.handlerOptions;
        _this.width = _this.entry.window.width;
        _this.height = _this.entry.window.height;
        _this.minWidth = const_1.DEFAULT_MIN_WIDTH;
        _this.minHeight = const_1.DEFAULT_MIN_HEIGHT;
        _this.maxWidth = const_1.DEFAULT_MAX_WIDTH;
        _this.maxHeight = const_1.DEFAULT_MAX_HEIGHT;
        _this.left = (const_1.DEFAULT_MAX_WIDTH - _this.width) / 2;
        _this.top = (const_1.DEFAULT_MAX_HEIGHT - _this.height) / 2;
        _this.border = {
            width: const_1.DEFAULT_BORDER_WIDTH,
            style: const_1.DEFAULT_BORDER_STYLE,
            color: const_1.DEFAULT_BORDER_COLOR,
            radius: const_1.DEFAULT_BORDER_RADIUS
        };
        _this.boxShadow = true;
        _this.animate = "zoom";
        _this.backgroundColor = _this.entry.window.backgroundColor;
        _this.toolBar = {
            height: (_a = _this.entry.window.toolBar) === null || _a === void 0 ? void 0 : _a.height,
            backgroundColor: (_b = _this.entry.window.toolBar) === null || _b === void 0 ? void 0 : _b.backgroundColor
        };
        _this.windowElement = null;
        _this.id = (_c = options) === null || _c === void 0 ? void 0 : _c.id;
        _this.handlerOptions(options);
        return _this;
    }
    UIWindow.prototype.present = function () {
        var element = element_helper_1.createDivElement("" + (this.entry.prefix + this.id));
        this.windowElement = element;
        element_helper_1.addCSSClasses(element, "window", "flex-box", "col-direction", this.boxShadow ? "box-shadow" : undefined, this.animate !== false ? "animate" : undefined, this.animate !== false ? "animate-" + this.animate + "-show" : undefined);
        element_helper_1.addCSSStyles(element, {
            backgroundColor: "" + this.backgroundColor,
            zIndex: "" + this.entry.zIndex,
            width: this.width + "px",
            height: this.height + "px",
            maxWidth: this.maxWidth !== innerWidth ? this.maxWidth + "px" : null,
            maxHeight: this.maxHeight !== innerHeight ? this.maxHeight + "px" : null,
            minWidth: this.minWidth + "px",
            minHeight: this.minHeight + "px",
            left: this.left + "px",
            top: this.top + "px",
            border: this.border === false ? null :
                this.border.width + "px " + this.border.style + " " + this.border.color,
            borderRadius: this.border === false ? null :
                this.border.radius + "px",
            webkitBorderRadius: this.border === false ? null :
                this.border.radius + "px",
        });
        if (this.toolBar !== false) {
            var uiToolBar = new ui_tool_bar_1.default(this.toolBar);
            var uiToolBarElement = uiToolBar.present();
            element.appendChild(uiToolBarElement);
        }
        this.monitorEvent();
        this.sendEvent("window:create", { id: this.id });
        return element;
    };
    UIWindow.prototype.monitorEvent = function () {
        var _this = this;
        if (!this.windowElement)
            return;
        if (this.animate !== false) {
            this.windowElement.addEventListener("animationend", function (ev) {
                var animateShowName = "animate-" + _this.animate + "-show";
                if (element_helper_1.hasCSSClass(_this.windowElement, animateShowName)) {
                    element_helper_1.removeCSSClasses(_this.windowElement, animateShowName);
                    _this.sendEvent("window:show", { id: _this.id });
                }
            });
        }
    };
    __decorate([
        property_decorator_1.isNoEmptyOrNull()
    ], UIWindow.prototype, "id", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "width", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "height", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "minWidth", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "minHeight", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "maxWidth", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "maxHeight", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "left", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], UIWindow.prototype, "top", void 0);
    __decorate([
        property_decorator_1.combine({
            width: validator_1.checkPstInt,
            style: ["solid", "double", "dotted", "dashed"],
            color: validator_1.checkColor,
            radius: validator_1.checkPstInt
        }, false)
    ], UIWindow.prototype, "border", void 0);
    __decorate([
        property_decorator_1.isBoolean()
    ], UIWindow.prototype, "boxShadow", void 0);
    __decorate([
        property_decorator_1.inValueOptions("zoom", false)
    ], UIWindow.prototype, "animate", void 0);
    __decorate([
        property_decorator_1.isColor()
    ], UIWindow.prototype, "backgroundColor", void 0);
    __decorate([
        property_decorator_1.combine({
            height: validator_1.checkPstNumber,
            backgroundColor: validator_1.checkColor
        }, false)
    ], UIWindow.prototype, "toolBar", void 0);
    return UIWindow;
}(__1.default));
exports.default = UIWindow;
//# sourceMappingURL=index.js.map