"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isWindowCoord(obj) {
    return obj.length !== undefined
        && obj.length >= 2
        && obj.constructor === Array
        && typeof obj[0] === "number"
        && typeof obj[1] === "number";
}
exports.isWindowCoord = isWindowCoord;
