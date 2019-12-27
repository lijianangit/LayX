"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Control_1 = require("./Control");
function app(name) {
    var control = new Control_1.default(name);
    return control.name;
}
exports.default = app;
//# sourceMappingURL=Index.js.map