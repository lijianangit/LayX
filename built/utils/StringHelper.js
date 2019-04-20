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
function exchangeValue(first, two) {
    var temp = first;
    first = two;
    two = temp;
    return [first, two];
}
exports.exchangeValue = exchangeValue;
function removeValidSymbol(str) {
    var resultStr = str.trim();
    if (resultStr.length === 0)
        return resultStr;
    resultStr = str.replace(/[\r\n\t\s]/g, "");
    return resultStr;
}
exports.removeValidSymbol = removeValidSymbol;
function mendZero(str, total) {
    if (str.length === total)
        return str;
    if (str.length < total) {
        var zeros = "";
        for (var i = 0; i < total - str.length; i++) {
            zeros += "0";
        }
        return zeros + str;
    }
    return str.substr(0, total);
}
exports.mendZero = mendZero;
