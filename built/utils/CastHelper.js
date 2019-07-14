"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateHelper = require("./ValidateHelper");
var ExceptionHelper = require("./ExceptionHelper");
var TypeHelper = require("./TypeHelper");
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
function positionCast(obj, width, height) {
    if (!obj)
        return [(innerWidth - width) / 2, (innerHeight - height) / 2];
    if (TypeHelper.isOffsetArray(obj)) {
        var left = obj[0], top_1 = obj[1];
        return [left, top_1];
    }
    var isPosition = TypeHelper.isPositionType(obj);
    if (isPosition) {
        var coordinate = [0, 0];
        switch (obj) {
            case "left-top":
                break;
            case "left-center":
                coordinate[0] = 0;
                coordinate[1] = (innerHeight - height) / 2;
                break;
            case "left-bottom":
                coordinate[0] = 0;
                coordinate[1] = innerHeight - height;
                break;
            case "top-center":
                coordinate[0] = (innerWidth - width) / 2;
                coordinate[1] = 0;
                break;
            case "center":
                coordinate[0] = (innerWidth - width) / 2;
                coordinate[1] = (innerHeight - height) / 2;
                break;
            case "bottom-center":
                coordinate[0] = (innerWidth - width) / 2;
                coordinate[1] = innerHeight - height;
                break;
            case "right-top":
                coordinate[0] = innerWidth - width;
                coordinate[1] = 0;
                break;
            case "right-center":
                coordinate[0] = innerWidth - width;
                coordinate[1] = (innerHeight - height) / 2;
                break;
            case "right-bottom":
                coordinate[0] = innerWidth - width;
                coordinate[1] = innerHeight - height;
                break;
        }
        return coordinate;
    }
    return ExceptionHelper.assertNever(obj);
}
exports.positionCast = positionCast;
