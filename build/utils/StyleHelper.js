"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function batchClasses(prefix) {
    if (prefix === void 0) { prefix = "layx-"; }
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    var correctClasses = [];
    for (var _a = 0, classes_1 = classes; _a < classes_1.length; _a++) {
        var cls = classes_1[_a];
        correctClasses.push("" + (prefix + cls));
    }
    return correctClasses;
}
exports.batchClasses = batchClasses;
function batchStyles(element, styles) {
    for (var _i = 0, _a = Object.keys(styles); _i < _a.length; _i++) {
        var key = _a[_i];
        element.style[key] = styles[key];
    }
    return element;
}
exports.batchStyles = batchStyles;
