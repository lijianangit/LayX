"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assertId() {
    throw new Error("`id` is required.");
}
exports.assertId = assertId;
function assertString(x) {
    throw new Error("Unexpected string: " + x);
}
exports.assertString = assertString;
function assertNumber(x) {
    throw new Error("Unexpected number: " + x);
}
exports.assertNumber = assertNumber;
function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
exports.assertNever = assertNever;
