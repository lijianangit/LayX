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
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow(options) {
        var _a, _b;
        var _this = _super.call(this, options) || this;
        _this.width = 800;
        _this.height = 600;
        _this.id = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.id, (_b !== null && _b !== void 0 ? _b : ""));
        return _this;
    }
    UIWindow.prototype.present = function () {
        var element = document.createElement("div");
        element.id = this.id;
        return element;
    };
    UIWindow.prototype.handlerOptions = function (options) {
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
    return UIWindow;
}(control_1.default));
exports.default = UIWindow;
//# sourceMappingURL=ui-window.js.map