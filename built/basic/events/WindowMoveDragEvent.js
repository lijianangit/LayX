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
var TypeHelper = require("../../utils/TypeHelper");
var WindowMoveDragEvent = (function (_super) {
    __extends(WindowMoveDragEvent, _super);
    function WindowMoveDragEvent(app, window, dragElement, dragMoveOptions) {
        var _this = _super.call(this, dragElement) || this;
        _this.app = app;
        _this.window = window;
        _this.dragMoveOptions = dragMoveOptions;
        _this.emerge = 10;
        _this._top = 0;
        _this._left = 0;
        _this._originTop = 0;
        _this._originLeft = 0;
        _this._lastTime = null;
        return _this;
    }
    WindowMoveDragEvent.prototype.dragStart = function (ev, x, y) {
        this._top = this.window.top;
        this._left = this.window.left;
    };
    WindowMoveDragEvent.prototype.dragging = function (ev, x, y, distanceX, distanceY) {
        this.moveHandler(distanceX, distanceY);
    };
    WindowMoveDragEvent.prototype.dragEnd = function (ev) {
        if (this.isDragging == true && this._top === 0) {
            this.window.max();
            this.window.top = this._originTop;
            this.window.left = this._originLeft;
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
        this._originTop = this.window.top;
        this._originLeft = this.window.left;
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
            this.window.top = distanceY;
            this.window.left = this._left;
            this.window.normal(true);
        }
    };
    WindowMoveDragEvent.prototype.mouseStar = function (ev) {
        if (TypeHelper.isMoveEvent(ev)) {
            ev.preventDefault();
        }
    };
    WindowMoveDragEvent.prototype.mouseMove = function (ev) {
    };
    WindowMoveDragEvent.prototype.mouseEnd = function (ev) {
        if (!this._lastTime)
            this._lastTime = new Date();
        else {
            var currentDate = new Date();
            if (currentDate.getTime() - this._lastTime.getTime() <= 200) {
                if (this.window.status === "max") {
                    this.window.normal();
                    this._lastTime = new Date();
                    return;
                }
                if (this.window.status === "normal") {
                    this.window.max();
                    this._lastTime = new Date();
                    return;
                }
            }
        }
    };
    return WindowMoveDragEvent;
}(DragEvent_1.default));
exports.default = WindowMoveDragEvent;
