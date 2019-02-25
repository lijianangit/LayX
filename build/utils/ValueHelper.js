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
function calcCoord(width, height, coordEnum) {
    var coord = [0, 0];
    switch (coordEnum) {
        case "center":
            coord[0] = (innerWidth - width) / 2;
            coord[1] = (innerHeight - height) / 2;
            break;
        case "left_center":
            coord[0] = 0;
            coord[1] = (innerHeight - height) / 2;
            break;
        case "right_center":
            coord[0] = innerWidth - width;
            coord[1] = (innerHeight - height) / 2;
            break;
        case "top_center":
            coord[0] = (innerWidth - width) / 2;
            coord[1] = 0;
            break;
        case "bottom_center":
            coord[0] = (innerWidth - width) / 2;
            coord[1] = innerHeight - height;
            break;
        case "left_top":
            coord[0] = 0;
            coord[1] = 0;
            break;
        case "right_top":
            coord[0] = innerWidth - width;
            coord[1] = 0;
            break;
        case "left_bottom":
            coord[0] = 0;
            coord[1] = innerHeight - height;
            break;
        case "right_bottom":
            coord[0] = innerWidth - width;
            coord[1] = innerHeight - height;
            break;
        default:
            coord[0] = (innerWidth - width) / 2;
            coord[1] = (innerHeight - height) / 2;
            break;
    }
    return coord;
}
exports.calcCoord = calcCoord;
