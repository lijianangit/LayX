"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addStyles(element, styles) {
    if (element === null)
        return element;
    for (var _i = 0, _a = Object.keys(styles); _i < _a.length; _i++) {
        var key = _a[_i];
        element.style[key] = styles[key];
    }
    return element;
}
exports.addStyles = addStyles;
function updateClasses(element, handler, prefix) {
    if (prefix === void 0) { prefix = "layx-"; }
    var classes = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        classes[_i - 3] = arguments[_i];
    }
    var currentClasses = element.className.split(/\s+/g);
    classes.forEach(function (item) {
        var cls = prefix + item, index = currentClasses.indexOf(cls);
        handler(currentClasses, index, cls);
    });
    element.className = currentClasses.join(" ").trim();
    return element;
}
exports.updateClasses = updateClasses;
function addClasses(element, prefix) {
    if (prefix === void 0) { prefix = "layx-"; }
    var classes = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        classes[_i - 2] = arguments[_i];
    }
    return updateClasses.apply(void 0, [element, function (currentClasses, index, itemClass) {
            if (!~index) {
                currentClasses.push(itemClass);
            }
        }, prefix].concat(classes));
}
exports.addClasses = addClasses;
function removeClasses(element, prefix) {
    if (prefix === void 0) { prefix = "layx-"; }
    var classes = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        classes[_i - 2] = arguments[_i];
    }
    return updateClasses.apply(void 0, [element, function (currentClasses, index) {
            if (~index) {
                currentClasses.splice(index, 1);
            }
        }, prefix].concat(classes));
}
exports.removeClasses = removeClasses;
function containClass(element, prefix, cls) {
    if (prefix === void 0) { prefix = "layx-"; }
    var currentClasses = element.className.split(/\s+/g);
    var index = currentClasses.indexOf(cls);
    return !!~index;
}
exports.containClass = containClass;
