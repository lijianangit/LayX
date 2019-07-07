"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberHelper = require("./NumberHelper");
var CastHelper = require("./CastHelper");
function generateUniqueId(length) {
    if (length === void 0) { length = 5; }
    var characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var uniqueId = "#";
    for (var i = 0; i < length; i++) {
        uniqueId += characters[NumberHelper.randomNumber(0, characters.length)];
    }
    return uniqueId;
}
exports.generateUniqueId = generateUniqueId;
function removeInvalidCharacter(str) {
    var strCast = CastHelper.stringCast(str).replace(/[\r\n\t\s]/g, "");
    return strCast;
}
exports.removeInvalidCharacter = removeInvalidCharacter;
