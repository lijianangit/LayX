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
    switch (obj) {
        case "layer":
        case "embed":
            return true;
        default:
            return ExceptionHelper.assertNever(obj);
    }
}
exports.isWindowMode = isWindowMode;
function isWindowAnimate(obj) {
    switch (obj) {
        case "none":
        case "zoom":
            return true;
        default:
            return ExceptionHelper.assertNever(obj);
    }
}
exports.isWindowAnimate = isWindowAnimate;
function isJsonObject(obj) {
    return typeof obj === "object"
        && obj.constructor !== undefined
        && obj.constructor === Object;
}
exports.isJsonObject = isJsonObject;
function isContextMenuButton(obj) {
    return isJsonObject(obj)
        && obj.id !== undefined
        && obj.label !== undefined;
}
exports.isContextMenuButton = isContextMenuButton;
function isContextMenuButtons(obj) {
    var correct = true;
    for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
        var item = obj_1[_i];
        if (!isContextMenuButton(item)) {
            correct = false;
            break;
        }
    }
    return correct;
}
exports.isContextMenuButtons = isContextMenuButtons;
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
function isActionButton(obj) {
    return isJsonObject(obj)
        && obj.label !== undefined
        && obj.id !== undefined;
}
exports.isActionButton = isActionButton;
function isActionButtons(obj) {
    var correct = true;
    for (var _i = 0, obj_2 = obj; _i < obj_2.length; _i++) {
        var item = obj_2[_i];
        if (!isActionButton(item)) {
            correct = false;
            break;
        }
    }
    return correct;
}
exports.isActionButtons = isActionButtons;
function isStringWithNotEmpty(obj) {
    return typeof obj === "string"
        && obj.trim().length > 0;
}
exports.isStringWithNotEmpty = isStringWithNotEmpty;
function isElement(obj) {
    return typeof obj === "object"
        && obj instanceof Element;
}
exports.isElement = isElement;
function isContentType(obj) {
    switch (obj) {
        case "html":
        case "local-url":
        case "non-local-url":
            return true;
        default:
            return ExceptionHelper.assertNever(obj);
    }
}
exports.isContentType = isContentType;
function isStringOrElement(obj) {
    return typeof obj === "string" || isElement(obj);
}
exports.isStringOrElement = isStringOrElement;
function isNoticeType(obj) {
    switch (obj) {
        case "info":
        case "success":
        case "warning":
        case "error":
            return true;
        default:
            return ExceptionHelper.assertNever(obj);
    }
}
exports.isNoticeType = isNoticeType;
