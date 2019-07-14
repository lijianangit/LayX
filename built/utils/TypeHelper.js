"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAnimateType(obj) {
    switch (obj) {
        case "zoom":
            return true;
        default:
            return false;
    }
}
exports.isAnimateType = isAnimateType;
function isPresentMode(obj) {
    switch (obj) {
        case "embed":
        case "float":
            return true;
        default:
            return false;
    }
}
exports.isPresentMode = isPresentMode;
function isPositionType(obj) {
    switch (obj) {
        case "left-top":
        case "left-center":
        case "left-bottom":
        case "top-center":
        case "bottom-center":
        case "center":
        case "right-top":
        case "right-center":
        case "right-bottom":
            return true;
        default:
            return false;
    }
}
exports.isPositionType = isPositionType;
function isOffsetArray(obj) {
    return obj.length !== undefined
        && obj.length >= 2
        && obj.constructor === Array
        && typeof obj[0] === "number"
        && typeof obj[1] === "number";
}
exports.isOffsetArray = isOffsetArray;
