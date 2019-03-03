"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExceptionHelper_1 = require("./ExceptionHelper");
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
            return ExceptionHelper_1.assertNever(obj);
    }
    return isSelf;
}
exports.isWindowMode = isWindowMode;
function isJsonObject(obj) {
    return typeof obj === "object"
        && obj.constructor !== undefined
        && obj.constructor === Object;
}
exports.isJsonObject = isJsonObject;
function isContextMenu(obj) {
    return isJsonObject(obj)
        && obj.id !== undefined
        && obj.label !== undefined
        && obj.handler !== undefined
        && typeof obj.handler === "function";
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
