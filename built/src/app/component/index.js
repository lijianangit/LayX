"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var event_bus_1 = require("../core/event-bus");
var entry_1 = require("../entry");
var Component = (function () {
    function Component() {
        this.entry = entry_1.Entry.getInstance();
        this.eventBus = event_bus_1.EventBus.getInstance();
        this.symbol = Symbol("monksoul");
    }
    Component.prototype.sendEvent = function (eventName, message) {
        if (message === void 0) { message = {}; }
        this.eventBus.emit(eventName, {
            dataset: message,
            eventTarget: {
                name: eventName,
                timestamp: new Date().valueOf()
            }
        });
    };
    Component.prototype.fromJSONPath = function (key, defaultValue, starObject) {
        if (starObject === void 0) { starObject = this.entry; }
        var _a;
        if (key.indexOf("/") > -1) {
            var keys = key.split("/");
            var tier = this.fromJSONPath(keys[0], defaultValue);
            if (!tier)
                return defaultValue;
            for (var i = 0; i < keys.length; i++) {
                if (i + 1 < keys.length) {
                    tier = this.fromJSONPath(keys[i + 1], defaultValue, tier);
                }
                else
                    return tier;
            }
            return tier;
        }
        else
            return _a = starObject[key], (_a !== null && _a !== void 0 ? _a : defaultValue);
    };
    return Component;
}());
exports.Component = Component;
//# sourceMappingURL=index.js.map