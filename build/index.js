"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./core/App");
function layx() {
    var app = new App_1.default();
    var layx = function (options) { };
    layx.create = function (options) {
        app.create();
    };
    return layx;
}
exports.default = layx();
