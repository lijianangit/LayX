"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getKebabCase(str) {
    return str.replace(/[A-Z]/g, function (i) {
        return '-' + i.toLowerCase();
    });
}
exports.getKebabCase = getKebabCase;
function getCamelCase(str) {
    return str.replace(/-([a-z])/g, function (all, i) {
        return i.toUpperCase();
    });
}
exports.getCamelCase = getCamelCase;
