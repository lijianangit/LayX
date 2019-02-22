"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isJsonObject(target) {
    return typeof target === "object" && target.constructor === Object;
}
exports.isJsonObject = isJsonObject;
function clone(source) {
    var newT = {};
    for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        newT[key] = isJsonObject(source[key]) ? clone(source[key]) : source[key];
    }
    return newT;
}
exports.clone = clone;
function merge(source, dest) {
    var target = clone(source);
    for (var _i = 0, _a = Object.keys(dest); _i < _a.length; _i++) {
        var key = _a[_i];
        if (target[key] === undefined || !isJsonObject(dest[key])) {
            target[key] = dest[key];
            continue;
        }
        target[key] = merge(target[key], dest[key]);
    }
    return target;
}
exports.merge = merge;
function leastOneTrue(obj) {
    if (obj === undefined)
        return false;
    if (typeof obj === "boolean")
        return obj;
    var flag = false;
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        if (obj[key] === true) {
            flag = true;
            break;
        }
    }
    return flag;
}
exports.leastOneTrue = leastOneTrue;
function reverseBooleanObject(source) {
    var target = {};
    for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
        var key = _a[_i];
        target[key] = !source[key];
    }
    return target;
}
exports.reverseBooleanObject = reverseBooleanObject;
function getProperty(obj, key) {
    return obj[key];
}
exports.getProperty = getProperty;
