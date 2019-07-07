"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateHelper = require("./ValidateHelper");
var ExceptionHelper = require("./ExceptionHelper");
function stringCast(obj) {
    if (!ValidateHelper.isStringAndNotEmptyOrNull(obj)) {
        return ExceptionHelper.assertString(obj);
    }
    return obj;
}
exports.stringCast = stringCast;
function stringOrUndefinedCast(obj) {
    if (obj === undefined)
        return obj;
    return stringCast(obj);
}
exports.stringOrUndefinedCast = stringOrUndefinedCast;
function numberOrUndefinedCast(obj) {
    if (obj === undefined)
        return obj;
    if (typeof obj === "number")
        return obj;
    if (/^(([1-9][0-9]*(\.\d{1,2})?)|(0\.\d{1,2}))$/.test(obj)) {
        return Number(obj);
    }
    return ExceptionHelper.assertNumber(obj);
}
exports.numberOrUndefinedCast = numberOrUndefinedCast;
