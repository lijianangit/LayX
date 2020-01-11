"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entry_1 = require("../entry");
var event_bus_1 = require("../core/event-bus");
var Component = (function () {
    function Component() {
        this.entry = entry_1.default.getInstance();
        this.eventBus = event_bus_1.default.getInstance();
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
    return Component;
}());
exports.default = Component;
//# sourceMappingURL=index.js.map