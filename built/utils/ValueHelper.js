"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeHelper = require("./TypeHelper");
var ExceptionHelper = require("./ExceptionHelper");
function numberCast(value) {
    if (value === undefined || typeof value === "number")
        return value;
    if (/^(([1-9][0-9]*(\.\d{1,2})?)|(0\.\d{1,2}))$/.test(value)) {
        return Number(value);
    }
    throw new Error("`" + value + "` isn't number.");
}
exports.numberCast = numberCast;
function offsetCast(value, width, height) {
    if (value === undefined)
        return value;
    if (TypeHelper.isWindowCoord(value)) {
        var _a = value, left = _a[0], top_1 = _a[1];
        return [left, top_1];
    }
    ;
    var coord = [0, 0];
    switch (value) {
        case "left_top":
            break;
        case "left_center":
            coord[0] = 0;
            coord[1] = (innerHeight - height) / 2;
            break;
        case "left_bottom":
            coord[0] = 0;
            coord[1] = innerHeight - height;
            break;
        case "top_center":
            coord[0] = (innerWidth - width) / 2;
            coord[1] = 0;
        case "center":
            coord[0] = (innerWidth - width) / 2;
            coord[1] = (innerHeight - height) / 2;
            break;
        case "bottom_center":
            coord[0] = (innerWidth - width) / 2;
            coord[1] = innerHeight - height;
            break;
        case "right_top":
            coord[0] = innerWidth - width;
            coord[1] = 0;
            break;
        case "right_center":
            coord[0] = innerWidth - width;
            coord[1] = (innerHeight - height) / 2;
            break;
        case "right_bottom":
            coord[0] = innerWidth - width;
            coord[1] = innerHeight - height;
            break;
        default:
            return ExceptionHelper.assertNever(value);
    }
    return coord;
}
exports.offsetCast = offsetCast;
function animateCast(animate) {
    if (animate === false)
        return "none";
    switch (animate) {
        case "none":
            return "none";
        case "zoom":
            return "zoom";
        default:
            return ExceptionHelper.assertNever(animate);
    }
}
exports.animateCast = animateCast;
