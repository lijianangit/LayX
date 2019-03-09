"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExceptionHelper = require("./ExceptionHelper");
function isWindowCoord(obj) {
    return obj.length !== undefined
        && obj.length >= 2
        && obj.constructor === Array
        && typeof obj[0] === "number"
        && typeof obj[1] === "number";
}
exports.isWindowCoord = isWindowCoord;
function isWindowMode(obj) {
    var isSelf = false;
    switch (obj) {
        case "layer":
        case "embed":
            return true;
        default:
            return ExceptionHelper.assertNever(obj);
    }
    return isSelf;
}
exports.isWindowMode = isWindowMode;
function isWindowAnimate(obj) {
    var isSelf = false;
    switch (obj) {
        case "none":
        case "zoom":
            return true;
        default:
            return ExceptionHelper.assertNever(obj);
    }
    return isSelf;
}
exports.isWindowAnimate = isWindowAnimate;
function isJsonObject(obj) {
    return typeof obj === "object"
        && obj.constructor !== undefined
        && obj.constructor === Object;
}
exports.isJsonObject = isJsonObject;
function isContextMenu(obj) {
    return isJsonObject(obj)
        && obj.id !== undefined
        && obj.label !== undefined;
}
exports.isContextMenu = isContextMenu;
function isContextMenus(obj) {
    var correct = true;
    for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
        var item = obj_1[_i];
        if (!isContextMenu(item)) {
            correct = false;
            break;
        }
    }
    return correct;
}
exports.isContextMenus = isContextMenus;
function isResizeOptions(obj) {
    if (typeof obj === "boolean")
        return true;
    return isJsonObject(obj) &&
        (obj.left !== undefined ||
            obj.right !== undefined ||
            obj.top !== undefined ||
            obj.bottom !== undefined ||
            obj.leftTop !== undefined ||
            obj.rightTop !== undefined ||
            obj.leftBottom !== undefined ||
            obj.rightBottom !== undefined);
}
exports.isResizeOptions = isResizeOptions;
