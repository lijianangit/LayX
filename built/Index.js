"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StoreState_1 = require("./core/store/StoreState");
require("./asset/style");
exports.default = (function layx() {
    var layx = function (options) { };
    layx.v = "4.0.0";
    layx.store = StoreState_1.default.instance;
    return layx;
})();
