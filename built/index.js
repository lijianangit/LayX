"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./core/App");
require("./assets/styles");
require("./assets/icons");
exports.default = (function layx() {
    var layx = function (options) { };
    var app = new App_1.default(layx);
    layx.v = app.version;
    layx.open = function (options) {
        app.open(options);
    };
    layx.windows = app.windows;
    layx.window = app.window;
    layx.lastWindow = app.lastWindow;
    layx.getWindow = function (id) {
        return app.getWindow(id);
    };
    layx.destroy = function (id) {
        app.destroy(id);
    };
    layx.notice = function (options) {
        app.notice(options);
    };
    layx.notices = app.notices;
    return layx;
})();
