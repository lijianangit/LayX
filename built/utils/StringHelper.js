"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getKebabCase(str) {
    return str.replace(/[A-Z]/g, function (item) {
        return "-" + item.toLowerCase();
    });
}
exports.getKebabCase = getKebabCase;
