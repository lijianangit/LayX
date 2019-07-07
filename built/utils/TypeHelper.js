"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExceptionHelper = require("./ExceptionHelper");
function isAnimateType(obj) {
    switch (obj) {
        case "zoom":
            return true;
        default:
            return ExceptionHelper.assertNever(obj);
    }
}
exports.isAnimateType = isAnimateType;
function isPresentMode(obj) {
    switch (obj) {
        case "embed":
        case "float":
            return true;
        default:
            return ExceptionHelper.assertNever(obj);
    }
}
exports.isPresentMode = isPresentMode;
