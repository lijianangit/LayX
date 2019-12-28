"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entry_1 = require("../entry/entry");
var Control = (function () {
    function Control() {
        this.entry = entry_1.default.getInstance();
        this.symbol = Symbol("monksoul");
    }
    return Control;
}());
exports.default = Control;
//# sourceMappingURL=control.js.map