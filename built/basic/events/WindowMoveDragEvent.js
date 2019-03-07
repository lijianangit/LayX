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
var DragEvent_1 = require("./DragEvent");
var ElementHelper = require("../../utils/ElementHelper");
var WindowMoveDragEvent = (function (_super) {
    __extends(WindowMoveDragEvent, _super);
    function WindowMoveDragEvent(dragElement, window) {
        var _this = _super.call(this, dragElement) || this;
        _this.window = window;
        _this.emerge = 10;
        _this._top = _this.window.top;
        _this._left = _this.window.left;
        return _this;
    }
    WindowMoveDragEvent.prototype.dragStart = function (ev, x, y) {
    };
    WindowMoveDragEvent.prototype.dragging = function (ev, x, y, distanceX, distanceY) {
        this.moveHandler(distanceX, distanceY);
    };
    WindowMoveDragEvent.prototype.dragEnd = function (ev, x, y) {
        this.window.top = this._top;
        this.window.left = this._left;
    };
    WindowMoveDragEvent.prototype.moveHandler = function (distanceX, distanceY) {
        var top = this.window.top + distanceY;
        var left = this.window.left + distanceX;
        top = Math.max(0, top);
        top = Math.min(innerHeight - this.emerge, top);
        left = Math.max(this.emerge - this.window.width, left);
        left = Math.min(innerWidth - this.emerge, left);
        this._top = top;
        this._left = left;
        ElementHelper.addStyles(this.window.element, {
            top: top + "px",
            left: left + "px"
        });
    };
    return WindowMoveDragEvent;
}(DragEvent_1.default));
exports.default = WindowMoveDragEvent;
