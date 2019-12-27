"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ValidatorDecorator_1 = require("./app/core/validator/ValidatorDecorator");
var Control = (function () {
    function Control(theName) {
        this.name = theName;
    }
    __decorate([
        ValidatorDecorator_1.length(3, 10)
    ], Control.prototype, "name", void 0);
    return Control;
}());
exports.default = Control;
//# sourceMappingURL=Control.js.map