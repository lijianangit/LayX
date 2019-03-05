"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DragHandler_1 = require("./DragHandler");
var ResizeDragHandler = (function (_super) {
    __extends(ResizeDragHandler, _super);
    function ResizeDragHandler(dragElement) {
        return _super.call(this, dragElement) || this;
    }
    ResizeDragHandler.prototype.dragStart = function (ev, x, y) {
        console.log("drag start....");
    };
    ResizeDragHandler.prototype.dragging = function (ev, x, y, distanceX, distanceY) {
        console.log("dragging...");
    };
    ResizeDragHandler.prototype.dragEnd = function (ev, x, y) {
        console.log("drag end.");
    };
    return ResizeDragHandler;
}(DragHandler_1.default));
exports.default = ResizeDragHandler;
