"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StateStore = (function () {
    function StateStore() {
        this.prefix = "layx-";
        this.components = {};
    }
    Object.defineProperty(StateStore, "instance", {
        get: function () {
            var globalTop = top;
            var globalKey = "_stateStore_";
            if (!globalTop[globalKey]) {
                globalTop[globalKey] = new StateStore();
            }
            return globalTop[globalKey];
        },
        enumerable: true,
        configurable: true
    });
    return StateStore;
}());
exports.default = StateStore;
