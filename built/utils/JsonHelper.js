"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeHelper_1 = require("./TypeHelper");
function clone(source) {
    var newObject = {};
    for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        newObject[key] = TypeHelper_1.isJsonObject(source[key]) ? clone(source[key]) : source[key];
    }
    return newObject;
}
exports.clone = clone;
function merge(source, dest) {
    var newObject = clone(source);
    for (var _i = 0, _a = Object.keys(dest); _i < _a.length; _i++) {
        var key = _a[_i];
        if (newObject[key] === undefined || !TypeHelper_1.isJsonObject(dest[key])) {
            newObject[key] = dest[key];
            continue;
        }
        newObject[key] = merge(newObject[key], dest[key]);
    }
    return newObject;
}
exports.merge = merge;
