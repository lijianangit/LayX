"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var property_validator_1 = require("../core/validator/property-validator");
var ui_window_1 = require("../control/window/ui-window");
var Entry = (function () {
    function Entry(options) {
        this.version = "3.0.0";
        this.lang = "ZH_CN";
        this.handlerOptions(options);
    }
    Entry.prototype.open = function (options) {
        var uiWindow = new ui_window_1.default(options);
        return uiWindow.present();
    };
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
        var _a, _b;
        this.lang = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.lang, (_b !== null && _b !== void 0 ? _b : "ZH_CN"));
    };
    __decorate([
        property_validator_1.options("ZH_CN", "EN_US")
    ], Entry.prototype, "lang", void 0);
    return Entry;
}());
exports.default = Entry;
//# sourceMappingURL=entry.js.map