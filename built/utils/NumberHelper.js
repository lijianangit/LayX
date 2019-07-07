"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomNumber(min, max) {
    var rand = Math.random() * (max - min + 1) + min;
    return parseInt(rand.toString(), 10);
}
exports.randomNumber = randomNumber;
