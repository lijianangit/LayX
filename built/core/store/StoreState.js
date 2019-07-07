"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StoreState = (function () {
    function StoreState() {
        this.prefix = "layx-";
    }
    Object.defineProperty(StoreState, "instance", {
        get: function () {
            var globalTop = top;
            if (!globalTop["LayxStoreState"]) {
                globalTop["LayxStoreState"] = new StoreState();
            }
            return globalTop["LayxStoreState"];
        },
        enumerable: true,
        configurable: true
    });
    return StoreState;
}());
exports.default = StoreState;
