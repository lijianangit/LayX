"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./core/App");
require("./assets/app.css");
exports.default = (function layx() {
    var layx = function (options) { };
    var app = new App_1.default(layx);
    layx.v = app.version;
    layx.create = function (options) {
        app.create(options);
    };
    layx.windows = app.windows;
    layx.window = app.window;
    layx.getWindow = function (id) {
        return app.getWindow(id);
    };
    return layx;
})();
