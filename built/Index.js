"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entry_1 = require("./app/entry/entry");
function overt() {
    var entryOvert = function (options) {
        entry_1.default.getInstance(options);
    };
    var entry = entry_1.default.getInstance();
    entryOvert.version = entry.version;
    return entryOvert;
}
exports.default = overt();
//# sourceMappingURL=index.js.map