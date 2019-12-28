"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var property_validator_1 = require("../core/validator/property-validator");
var Entry = (function () {
    function Entry(options) {
        this.version = "3.0.0";
        this.lang = "ZH_CN";
        this.handlerOptions(options);
    }
    Entry.getInstance = function (options) {
        if (options === void 0) { options = {}; }
        if (!this.instance) {
            this.instance = new Entry(options);
        }
        else {
            this.instance.handlerOptions(options);
        }
        return this.instance;
    };
    Entry.prototype.handlerOptions = function (options) {
        this.lang = options.lang || "ZH_CN";
    };
    __decorate([
        property_validator_1.options("ZH_CN", "EN_US")
    ], Entry.prototype, "lang", void 0);
    return Entry;
}());
exports.default = Entry;
//# sourceMappingURL=entry.js.map