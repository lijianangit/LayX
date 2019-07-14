"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomNumber(min, max) {
    var rand = Math.random() * (max - min + 1) + min;
    return parseInt(rand.toString(), 10);
}
exports.randomNumber = randomNumber;
function handlerMaxAndMinValue(type, value, maxValue, minValue) {
    var newValue = undefined;
    if ((type === "all" || type === "min") && minValue && value)
        newValue = Math.max(minValue, value);
    if ((type === "all" || type === "max") && maxValue && value)
        newValue = Math.min(maxValue, value);
    return newValue;
}
exports.handlerMaxAndMinValue = handlerMaxAndMinValue;
function compareValue(value, value2) {
    if (value && value2 && value > value2)
        return true;
    else
        return false;
}
exports.compareValue = compareValue;
