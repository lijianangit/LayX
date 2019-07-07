"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeElement(element) {
    if (!element || !element.parentElement)
        return;
    element.parentElement.removeChild(element);
}
exports.removeElement = removeElement;
function createFragment() {
    return document.createDocumentFragment();
}
exports.createFragment = createFragment;
function createElement(tagName) {
    return document.createElement(tagName);
}
exports.createElement = createElement;
function createElementNS(tagName) {
    return document.createElementNS("http://www.w3.org/2000/svg", tagName);
}
exports.createElementNS = createElementNS;
function addStyles(element, styles) {
    if (!element)
        return null;
    for (var key in styles) {
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
    if (!element)
        return null;
    var currentClasses = element.className.split(/\s+/g);
    classes.forEach(function (item) {
        if (item) {
            var cls = "";
            if (item.indexOf("!") === 0) {
                cls = item.substr(1);
            }
            else {
                cls = prefix + item;
            }
            var index = currentClasses.indexOf(cls);
            handler(currentClasses, index, cls);
        }
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
    if (!element)
        return null;
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
    if (!element)
        return null;
    return updateClasses.apply(void 0, [element, function (currentClasses, index) {
            if (~index) {
                currentClasses.splice(index, 1);
            }
        }, prefix].concat(classes));
}
exports.removeClasses = removeClasses;
function hasClass(element, prefix, className) {
    if (prefix === void 0) { prefix = "layx-"; }
    if (!element)
        return false;
    var currentClasses = element.className.split(/\s+/g);
    var cls = "";
    if (className.indexOf("!") === 0) {
        cls = className.substr(1);
    }
    else {
        cls = prefix + className;
    }
    var index = currentClasses.indexOf(cls);
    return !!~index;
}
exports.hasClass = hasClass;
