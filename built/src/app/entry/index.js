"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../asset/icon");
require("../asset/style");
var const_1 = require("../component/ui-icon/const");
var ui_window_1 = require("../component/ui-window");
var property_decorator_1 = require("../core/decorator/property-decorator");
var event_bus_1 = require("../core/event-bus");
var validator_1 = require("../core/validator");
var const_2 = require("./const");
var partial_1 = require("./partial");
var Entry = (function () {
    function Entry(options) {
        this.handlerOptions = partial_1.handlerOptions;
        this.version = const_2.VERSION;
        this.startZIndex = const_2.START_ZINDEX;
        this.prefix = const_2.PREFIX;
        this.lang = "ZH_CN";
        this.window = {
            width: const_2.DEFAULT_WINDOW_WIDTH,
            height: const_2.DEFAULT_WINDOW_HEIGHT,
            backgroundColor: const_2.DEFAULT_WINDOW_BACKGROUND_COLOR,
            toolBar: {
                height: const_2.DEFAULT_TOOLBAR_HEIGHT,
                backgroundColor: const_2.DEFAULT_TOOLBAR_BACKGROUND_COLOR,
                titleBar: {
                    label: const_2.DEFAULT_TITLEBAR_LABEL,
                    color: const_2.DEFAULT_TITLEBAR_COLOR,
                    align: const_2.DEFAULT_TITLEBAR_ALIGN,
                    fontSize: const_2.DEFAULT_TITLEBAR_FONTSIZE
                },
                icon: {
                    name: const_1.DEFAULT_ICON,
                    size: const_1.DEFAULT_ICON_SIZE,
                    color: const_1.DEFAULT_ICON_COLOR
                }
            }
        };
        this._zIndex = this.startZIndex;
        this.handlerOptions(options);
    }
    Object.defineProperty(Entry.prototype, "zIndex", {
        get: function () {
            return this._zIndex = this._zIndex + 2;
        },
        enumerable: true,
        configurable: true
    });
    Entry.prototype.on = function (queues) {
        if (queues === void 0) { queues = {}; }
        for (var eventKey in queues) {
            var handler = queues[eventKey];
            if (validator_1.checkOfType(handler, "function")) {
                event_bus_1.default.getInstance().on(eventKey, handler);
            }
        }
    };
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
    __decorate([
        property_decorator_1.isPstInt(),
        property_decorator_1.min(1000)
    ], Entry.prototype, "startZIndex", void 0);
    __decorate([
        property_decorator_1.isNoEmptyOrNull()
    ], Entry.prototype, "prefix", void 0);
    __decorate([
        property_decorator_1.inValueOptions("ZH_CN", "EN_US")
    ], Entry.prototype, "lang", void 0);
    __decorate([
        property_decorator_1.combine({
            width: validator_1.checkPstNumber,
            height: validator_1.checkPstNumber,
            backgroundColor: validator_1.checkColor,
            toolBar: {
                decorator: {
                    height: validator_1.checkPstNumber,
                    backgroundColor: validator_1.checkColor,
                    titleBar: {
                        decorator: {
                            label: validator_1.checkString,
                            color: validator_1.checkColor,
                            align: ["left", "center", "right"],
                            fontSize: validator_1.checkPstInt
                        },
                        options: [false]
                    },
                    icon: {
                        decorator: {
                            name: validator_1.checkNoEmptyOrNull,
                            size: validator_1.checkPstInt,
                            color: validator_1.checkColor
                        },
                        options: [false]
                    }
                },
                options: [false]
            }
        })
    ], Entry.prototype, "window", void 0);
    return Entry;
}());
exports.default = Entry;
//# sourceMappingURL=index.js.map