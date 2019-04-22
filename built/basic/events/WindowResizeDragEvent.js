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
var WindowResizeDragEvent = (function (_super) {
    __extends(WindowResizeDragEvent, _super);
    function WindowResizeDragEvent(app, window, dragElement, direction) {
        var _this = _super.call(this, dragElement) || this;
        _this.app = app;
        _this.window = window;
        _this.direction = direction;
        _this.isShowMoreActionButton = false;
        _this._top = 0;
        _this._left = 0;
        _this._width = 0;
        _this._height = 0;
        _this.content = null;
        return _this;
    }
    WindowResizeDragEvent.prototype.dragStart = function (ev, x, y) {
        if (this.window.status !== "normal") {
            return false;
        }
        this._top = this.window.top;
        this._left = this.window.left;
        this._width = this.window.width;
        this._height = this.window.height;
    };
    WindowResizeDragEvent.prototype.dragging = function (ev, x, y, distanceX, distanceY) {
        switch (this.direction) {
            case "left":
                this.resizeHandler(distanceX, distanceY, false, true, false, true);
                break;
            case "right":
                this.resizeHandler(distanceX, distanceY, false, false, false, true);
                break;
            case "top":
                this.resizeHandler(distanceX, distanceY, true, false, true, false);
                break;
            case "bottom":
                this.resizeHandler(distanceX, distanceY, false, false, true, false);
                break;
            case "left-top":
                this.resizeHandler(distanceX, distanceY, true, true, false, false);
                break;
            case "right-top":
                this.resizeHandler(distanceX, distanceY, true, false, false, false);
                break;
            case "left-bottom":
                this.resizeHandler(distanceX, distanceY, false, true, false, false);
                break;
            case "right-bottom":
                this.resizeHandler(distanceX, distanceY, false, false, false, false);
                break;
        }
    };
    WindowResizeDragEvent.prototype.dragEnd = function (ev) {
        this.window.top = this._top;
        this.window.left = this._left;
        this.window.width = this._width;
        this.window.height = this._height;
    };
    WindowResizeDragEvent.prototype.resizeHandler = function (distanceX, distanceY, isTop, isLeft, lockX, lockY) {
        var top = this.window.top + distanceY;
        var left = this.window.left + distanceX;
        var width = isLeft ? this.window.width - distanceX : this.window.width + distanceX;
        var height = isTop ? this.window.height - distanceY : this.window.height + distanceY;
        width = Math.max(width, this.window.minWidth);
        if (isLeft) {
            left = Math.min(left, this.window.left + this.window.width - this.window.minWidth);
            left = Math.max(0, left);
            width = Math.min(width, this.window.left + this.window.width);
        }
        else {
            left = Math.min(left, this.window.left);
            left = Math.max(this.window.left, left);
            width = Math.min(width, innerWidth - this.window.left);
        }
        width = Math.min(width, this.window.maxWidth);
        height = Math.max(height, this.window.minHeight);
        if (isTop) {
            top = Math.min(top, this.window.top + this.window.height - this.window.minHeight);
            top = Math.max(0, top);
            height = Math.min(height, this.window.top + this.window.height);
        }
        else {
            top = Math.min(top, this.window.top);
            top = Math.max(this.window.top, top);
            height = Math.min(height, innerHeight - this.window.top);
        }
        height = Math.min(height, this.window.maxHeight);
        if (lockX) {
            this._top = top;
            this._height = height;
            ElementHelper.addStyles(this.window.element, {
                top: top + "px",
                height: height + "px"
            });
        }
        if (lockY) {
            this._width = width;
            this._left = left;
            ElementHelper.addStyles(this.window.element, {
                width: width + "px",
                left: left + "px"
            });
            this.updateActionButton(width);
        }
        if (lockY === false && lockX === false) {
            this._top = top;
            this._left = left;
            this._width = width;
            this._height = height;
            ElementHelper.addStyles(this.window.element, {
                top: top + "px",
                left: left + "px",
                height: height + "px",
                width: width + "px"
            });
        }
        this.updateActionButton(lockX ? this.window.width : width);
    };
    WindowResizeDragEvent.prototype.updateActionButton = function (width) {
        if (width <= 300) {
            if (this.isShowMoreActionButton !== false)
                return;
            this.isShowMoreActionButton = true;
            this.window.zoomActionButtons(width);
        }
        else {
            if (this.isShowMoreActionButton !== true)
                return;
            this.isShowMoreActionButton = false;
            this.window.zoomActionButtons(width);
        }
    };
    WindowResizeDragEvent.prototype.mouseStar = function (ev) {
        if (TypeHelper.isMoveEvent(ev)) {
            ev.preventDefault();
        }
        this.app.drayLayer.updateZIndex(this.window.zIndex - 1);
        this.content = this.window.getComponent("content-container");
        if (this.content)
            this.content.showPenetrate();
    };
    WindowResizeDragEvent.prototype.mouseMove = function (ev) {
    };
    WindowResizeDragEvent.prototype.mouseEnd = function (ev) {
        this.app.drayLayer.hide();
        if (this.content)
            this.content.showPenetrate(false);
    };
    return WindowResizeDragEvent;
}(DragEvent_1.default));
exports.default = WindowResizeDragEvent;
