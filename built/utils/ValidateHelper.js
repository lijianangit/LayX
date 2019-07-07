"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isStringAndNotEmptyOrNull(obj) {
    return obj
        && typeof obj === "string"
        && obj.trim().length > 0;
}
exports.isStringAndNotEmptyOrNull = isStringAndNotEmptyOrNull;
