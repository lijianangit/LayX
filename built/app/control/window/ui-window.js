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
var control_1 = require("../control");
var property_validator_1 = require("../../core/validator/property-validator");
var element_helper_1 = require("../../core/util/element-helper");
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(options) {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this.width = _this.entry.width;
        _this.height = _this.entry.height;
        _this.minWidth = 200;
        _this.minHeight = 200;
        _this.maxWidth = innerWidth;
        _this.maxHeight = innerHeight;
        _this.border = {
            width: 1,
            style: "solid",
            color: "#3baced",
            radius: 4
        };
        _this.boxShadow = true;
        _this.shadowStyle = "rgba(0, 0, 0, 0.3) 1px 1px 24px";
        _this.id = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.id, (_b !== null && _b !== void 0 ? _b : ""));
        _this.handlerOptions(options);
        return _this;
    }
    UIWindow.prototype.present = function () {
        var element = document.createElement("div");
        element.id = "" + (this.entry.prefix + this.id);
        element_helper_1.addStyles(element, {
            maxWidth: this.maxWidth + "px",
            maxHeight: this.maxHeight + "px",
            minWidth: this.minWidth + "px",
            minHeight: this.minHeight + "px",
            width: this.width + "px",
            height: this.height + "px",
            border: this.border == false ? undefined :
                this.border.width + "px " + this.border.style + " " + this.border.color,
            borderRadius: this.border == false ? undefined :
                this.border.radius + "px",
            boxShadow: this.boxShadow ? this.shadowStyle : undefined
        });
        return element;
    };
    UIWindow.prototype.handlerOptions = function (options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        this.width = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.width, (_b !== null && _b !== void 0 ? _b : this.width));
        this.height = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.height, (_d !== null && _d !== void 0 ? _d : this.height));
        this.maxWidth = (_f = (_e = options) === null || _e === void 0 ? void 0 : _e.maxWidth, (_f !== null && _f !== void 0 ? _f : this.maxWidth));
        this.maxHeight = (_h = (_g = options) === null || _g === void 0 ? void 0 : _g.maxHeight, (_h !== null && _h !== void 0 ? _h : this.maxHeight));
        this.minWidth = (_k = (_j = options) === null || _j === void 0 ? void 0 : _j.minWidth, (_k !== null && _k !== void 0 ? _k : this.minWidth));
        this.minHeight = (_m = (_l = options) === null || _l === void 0 ? void 0 : _l.minHeight, (_m !== null && _m !== void 0 ? _m : this.minHeight));
        this.width = Math.max(this.minWidth, this.width);
        this.width = Math.min(this.maxWidth, this.width);
        this.height = Math.max(this.minHeight, this.height);
        this.height = Math.min(this.maxHeight, this.height);
        this.border = (_p = (_o = options) === null || _o === void 0 ? void 0 : _o.border, (_p !== null && _p !== void 0 ? _p : this.border));
        this.boxShadow = (_r = (_q = options) === null || _q === void 0 ? void 0 : _q.boxShadow, (_r !== null && _r !== void 0 ? _r : this.boxShadow));
    };
    __decorate([
        property_validator_1.noEmptyOrNull()
    ], UIWindow.prototype, "id", void 0);
    __decorate([
        property_validator_1.isNumber(false)
    ], UIWindow.prototype, "width", void 0);
    __decorate([
        property_validator_1.isNumber(false)
    ], UIWindow.prototype, "height", void 0);
    __decorate([
        property_validator_1.isNumber(false)
    ], UIWindow.prototype, "minWidth", void 0);
    __decorate([
        property_validator_1.isNumber(false)
    ], UIWindow.prototype, "minHeight", void 0);
    __decorate([
        property_validator_1.isNumber(false)
    ], UIWindow.prototype, "maxWidth", void 0);
    __decorate([
        property_validator_1.isNumber(false)
    ], UIWindow.prototype, "maxHeight", void 0);
    __decorate([
        property_validator_1.jsonObjectOrBooleanMerge({
            width: property_validator_1.isNumber,
            style: ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "inherit"],
            color: property_validator_1.noEmptyOrNull,
            radius: property_validator_1.isNumber
        })
    ], UIWindow.prototype, "border", void 0);
    return UIWindow;
}(control_1.default));
exports.default = UIWindow;
//# sourceMappingURL=ui-window.js.map