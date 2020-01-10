"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entry_1 = require("./app/entry");
function overt() {
    var entry = entry_1.default.getInstance();
    var entryOvert = function (options) {
        entry_1.default.getInstance(options);
    };
    entryOvert.on = entry.on;
    entryOvert.version = entry.version;
    entryOvert.open = entry.open;
    return entryOvert;
}
exports.default = overt();
//# sourceMappingURL=index.js.map