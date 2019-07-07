"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateHelper = require("./ValidateHelper");
var ExceptionHelper = require("./ExceptionHelper");
function stringCast(obj) {
    if (!ValidateHelper.isStringAndNotEmptyOrNull(obj)) {
        return ExceptionHelper.assertString(obj);
    }
    return obj;
}
exports.stringCast = stringCast;
