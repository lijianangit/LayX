"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertDimension(dimension, reference) {
    if (reference === void 0) { reference = "BROWSER_INNER_WIDTH"; }
    if (typeof dimension === "undefined")
        return undefined;
    if (typeof dimension === "number") {
        return dimension;
    }
    if (/^(([1-9][0-9]*(\.\d{1,2})?)|(0\.\d{1,2}))$/.test(dimension)) {
        return Number(dimension);
    }
    if (/^(100|[1-9]?\d(\.\d\d?)?)%$/.test(dimension)) {
        var ratio = Number(dimension.replace("%", ""));
        switch (reference) {
            case "BROWSER_INNER_WIDTH":
                return innerWidth * (ratio / 100);
            case "BROWSER_INNER_HEIGHT":
                return innerHeight * (ratio / 100);
        }
    }
}
exports.convertDimension = convertDimension;
function getKebabCase(str) {
    return str.replace(/[A-Z]/g, function (item) {
        return "-" + item.toLowerCase();
    });
}
exports.getKebabCase = getKebabCase;
//# sourceMappingURL=ValueHelper.js.map