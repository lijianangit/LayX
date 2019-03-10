"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DragEvent = (function () {
    function DragEvent(dragElement) {
        var _this = this;
        this.startX = 0;
        this.startY = 0;
        this.mousedown = function (ev) {
            if (ev.button === 0) {
                ev.preventDefault();
                _this.startX = ev.pageX;
                _this.startY = ev.pageY;
                if (_this.dragStart(ev, _this.startX, _this.startY) !== false) {
                    document.addEventListener("mousemove", _this.mousemove);
                    document.addEventListener("mouseup", _this.mouseup);
                }
                ;
            }
        };
        this.mousemove = function (ev) {
            var currentX = ev.pageX;
            var currentY = ev.pageY;
            var distanceX = currentX - _this.startX;
            var distanceY = currentY - _this.startY;
            if (distanceX !== 0 || distanceY !== 0) {
                DragEvent.isDragging = true;
                if (DragEvent.isFirstDragging === true) {
                    DragEvent.isFirstDragging = false;
                    _this.draggingFirst(ev, currentX, currentY, distanceX, distanceY);
                }
                _this.dragging(ev, currentX, currentY, distanceX, distanceY);
            }
        };
        this.mouseup = function (ev) {
            document.removeEventListener("mousemove", _this.mousemove);
            document.removeEventListener("mouseup", _this.mouseup);
            _this.dragEnd(ev, ev.pageX, ev.pageY);
            DragEvent.isFirstDragging = true;
            DragEvent.isDragging = false;
        };
        dragElement.addEventListener("mousedown", this.mousedown);
    }
    DragEvent.prototype.draggingFirst = function (ev, x, y, distanceX, distanceY) { };
    DragEvent.isDragging = false;
    DragEvent.isFirstDragging = true;
    return DragEvent;
}());
exports.default = DragEvent;
