"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addStyles(element, styles) {
    if (!element)
        return;
    for (var key in styles) {
        element.style[key] = styles[key];
    }
}
exports.addStyles = addStyles;
//# sourceMappingURL=element-helper.js.map