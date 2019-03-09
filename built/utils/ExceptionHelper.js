"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
exports.assertNever = assertNever;
function assertId() {
    throw new Error("`id` is required.");
}
exports.assertId = assertId;
