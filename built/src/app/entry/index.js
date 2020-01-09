"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = require("./const");
var property_decorator_1 = require("../core/decorator/property-decorator");
var ui_window_1 = require("../component/ui-window");
require("../asset/style");
var Entry = (function () {
    function Entry(options) {
        this.version = const_1.VERSION;
        this.zIndex = const_1.ZINDEX;
        this.prefix = const_1.PREFIX;
        this.lang = const_1.SupportLanguage.ZH_CN;
        this.width = const_1.DEFAULT_WINDOW_WIDTH;
        this.height = const_1.DEFAULT_WINDOW_HEIGHT;
        this.handlerOptions(options);
    }
    Entry.prototype.open = function (options) {
        var uiWindow = new ui_window_1.default(options);
        var uiWindowElement = uiWindow.present();
        var fragment = document.createDocumentFragment();
        fragment.appendChild(uiWindowElement);
        document.body.appendChild(uiWindowElement);
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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.lang = (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.lang, (_b !== null && _b !== void 0 ? _b : const_1.SupportLanguage.ZH_CN));
        this.width = (_d = (_c = options) === null || _c === void 0 ? void 0 : _c.width, (_d !== null && _d !== void 0 ? _d : this.width));
        this.height = (_f = (_e = options) === null || _e === void 0 ? void 0 : _e.height, (_f !== null && _f !== void 0 ? _f : this.height));
        this.zIndex = (_h = (_g = options) === null || _g === void 0 ? void 0 : _g.zIndex, (_h !== null && _h !== void 0 ? _h : this.zIndex));
    };
    __decorate([
        property_decorator_1.isPstInt(),
        property_decorator_1.min(1000)
    ], Entry.prototype, "zIndex", void 0);
    __decorate([
        property_decorator_1.inValueOptions(const_1.SupportLanguage.ZH_CN, const_1.SupportLanguage.EN_US)
    ], Entry.prototype, "lang", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], Entry.prototype, "width", void 0);
    __decorate([
        property_decorator_1.isPstNumber()
    ], Entry.prototype, "height", void 0);
    return Entry;
}());
exports.default = Entry;
//# sourceMappingURL=index.js.map