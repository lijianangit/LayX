"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTouchStartEvent(element, handler, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    if (element instanceof Document) {
        element.addEventListener("mousedown", handler, useCapture);
        element.addEventListener("touchstart", handler, useCapture);
    }
    else {
        element.addEventListener("mousedown", handler, useCapture);
        element.addEventListener("touchstart", handler, useCapture);
    }
}
exports.addTouchStartEvent = addTouchStartEvent;
function addTouchMoveEvent(element, handler, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    if (element instanceof Document) {
        element.addEventListener("mousemove", handler, useCapture);
        element.addEventListener("touchmove", handler, useCapture);
    }
    else {
        element.addEventListener("mousemove", handler, useCapture);
        element.addEventListener("touchmove", handler, useCapture);
    }
}
exports.addTouchMoveEvent = addTouchMoveEvent;
function addTouchEndEvent(element, handler, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    if (element instanceof Document) {
        element.addEventListener("mouseup", handler, useCapture);
        element.addEventListener("touchend", handler, useCapture);
    }
    else {
        element.addEventListener("mouseup", handler, useCapture);
        element.addEventListener("touchend", handler, useCapture);
    }
}
exports.addTouchEndEvent = addTouchEndEvent;
function removeTouchStartEvent(element, handler) {
    if (element instanceof Document) {
        element.removeEventListener("mousedown", handler);
        element.removeEventListener("touchstart", handler);
    }
    else {
        element.removeEventListener("mousedown", handler);
        element.removeEventListener("touchstart", handler);
    }
}
exports.removeTouchStartEvent = removeTouchStartEvent;
function removeTouchMoveEvent(element, handler) {
    if (element instanceof Document) {
        element.removeEventListener("mousemove", handler);
        element.removeEventListener("touchmove", handler);
    }
    else {
        element.removeEventListener("mousemove", handler);
        element.removeEventListener("touchmove", handler);
    }
}
exports.removeTouchMoveEvent = removeTouchMoveEvent;
function removeTouchEndEvent(element, handler) {
    if (element instanceof Document) {
        element.removeEventListener("mouseup", handler);
        element.removeEventListener("touchend", handler);
    }
    else {
        element.removeEventListener("mouseup", handler);
        element.removeEventListener("touchend", handler);
    }
}
exports.removeTouchEndEvent = removeTouchEndEvent;
