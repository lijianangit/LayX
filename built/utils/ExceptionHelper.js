"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assertString(obj) {
    throw new Error("Not an empty string.");
}
exports.assertString = assertString;
function assertNumber(obj) {
    throw new Error("Not a valid number.");
}
exports.assertNumber = assertNumber;
function assertNever(obj) {
    throw new Error("Unexpected object: " + obj);
}
exports.assertNever = assertNever;
