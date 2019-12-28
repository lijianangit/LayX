"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_validator_1 = require("../validator/base-validator");
function clone(source) {
    var newObject = {};
    for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        newObject[key] = base_validator_1.isJsonObject(source[key]) ? clone(source[key]) : source[key];
    }
    return newObject;
}
exports.clone = clone;
function merge(source, dest) {
    var newObject = clone(source);
    for (var _i = 0, _a = Object.keys(dest); _i < _a.length; _i++) {
        var key = _a[_i];
        if (newObject[key] === undefined || !base_validator_1.isJsonObject(dest[key])) {
            newObject[key] = dest[key];
            continue;
        }
        newObject[key] = merge(newObject[key], dest[key]);
    }
    return newObject;
}
exports.merge = merge;
//# sourceMappingURL=object-helper.js.map