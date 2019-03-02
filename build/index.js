"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./core/App");
require("./assets/app.css");
exports.default = (function layx() {
    var app = new App_1.default();
    var layx = function (options) { };
    layx.v = app.version;
    layx.create = function (options) {
        app.create(options);
    };
    return layx;
})();
