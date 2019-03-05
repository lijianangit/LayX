"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DragHandler = (function () {
    function DragHandler(dragElement) {
        var _this = this;
        this.startX = 0;
        this.startY = 0;
        this.mousedown = function (ev) {
            ev.preventDefault();
            _this.startX = ev.pageX;
            _this.startY = ev.pageY;
            _this.dragStart(ev, _this.startX, _this.startY);
            document.addEventListener("mousemove", _this.mousemove);
            document.addEventListener("mouseup", _this.mouseup);
        };
        this.mousemove = function (ev) {
            var currentX = ev.pageX;
            var currentY = ev.pageY;
            var distanceX = currentX - _this.startX;
            var distanceY = currentY - _this.startY;
            DragHandler.isDragging = true;
            if (DragHandler.isFirstDragging === true) {
                DragHandler.isFirstDragging = false;
                _this.draggingFirst(ev);
            }
            _this.dragging(ev, currentX, currentY, distanceX, distanceY);
        };
        this.mouseup = function (ev) {
            DragHandler.isDragging = false;
            DragHandler.isFirstDragging = true;
            document.removeEventListener("mousemove", _this.mousemove);
            document.removeEventListener("mouseup", _this.mouseup);
            _this.dragEnd(ev, ev.pageX, ev.pageY);
        };
        dragElement.addEventListener("mousedown", this.mousedown);
    }
    DragHandler.prototype.draggingFirst = function (ev) { };
    DragHandler.isDragging = false;
    DragHandler.isFirstDragging = true;
    return DragHandler;
}());
exports.default = DragHandler;
