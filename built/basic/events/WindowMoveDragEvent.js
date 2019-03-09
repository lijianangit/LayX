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
    function WindowMoveDragEvent(dragElement, window, dragMoveOptions) {
        var _this = _super.call(this, dragElement) || this;
        _this.window = window;
        _this.dragMoveOptions = dragMoveOptions;
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
        if (this._top === 0 && DragEvent_1.default.isDragging == true) {
            this.window.max();
            this._top = this.window.top;
            this._left = this.window.left;
            return;
        }
        this.window.top = this._top;
        this.window.left = this._left;
    };
    WindowMoveDragEvent.prototype.moveHandler = function (distanceX, distanceY) {
        var top = this.window.top;
        var left = this.window.left;
        if (this.dragMoveOptions.vertical) {
            top = top + distanceY;
            top = Math.max(0, top);
            top = this.dragMoveOptions.breakBottom ? Math.min(innerHeight - this.emerge, top) : Math.min(innerHeight - this.window.height, top);
            this._top = top;
        }
        if (this.dragMoveOptions.horizontal) {
            left = left + distanceX;
            left = this.dragMoveOptions.breakLeft ? Math.max(this.emerge - this.window.width, left) : Math.max(0, left);
            left = this.dragMoveOptions.breakRight ? Math.min(innerWidth - this.emerge, left) : Math.min(innerWidth - this.window.width, left);
            this._left = left;
        }
        ElementHelper.addStyles(this.window.element, {
            top: top + "px",
            left: left + "px"
        });
    };
    WindowMoveDragEvent.prototype.draggingFirst = function (ev, x, y, distanceX, distanceY) {
        if (this.window.status === "max") {
            if (x < this.window.width / 2) {
                this._left = 0;
            }
            else if (x > this.window.width / 2 && x < innerWidth - this.window.width) {
                this._left = x - this.window.width / 2;
            }
            else if (innerWidth - x < this.window.width / 2) {
                this._left = innerWidth - this.window.width;
            }
            else if (innerWidth - x > this.window.width / 2 && x >= innerWidth - this.window.width) {
                this._left = x - this.window.width / 2;
            }
            this.window.top = this._top = 0;
            this.window.normal();
            this.window.left = this._left;
        }
    };
    return WindowMoveDragEvent;
}(DragEvent_1.default));
exports.default = WindowMoveDragEvent;
