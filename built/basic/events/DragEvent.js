"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventHelper = require("../../utils/EventHelper");
var TypeHelper = require("../../utils/TypeHelper");
var DragEvent = (function () {
    function DragEvent(dragElement) {
        var _this = this;
        this.isDragging = false;
        this.isFirstDragging = true;
        this.startX = 0;
        this.startY = 0;
        this.mousedown = function (ev) {
            _this.mouseStar(ev);
            if ((ev instanceof MouseEvent && ev.button === 0) || (ev instanceof TouchEvent && ev.touches.length > 0)) {
                _this.startX = TypeHelper.isMoveEvent(ev) ? ev.pageX : ev.touches[0].pageX;
                _this.startY = TypeHelper.isMoveEvent(ev) ? ev.pageY : ev.touches[0].pageY;
                if (_this.dragStart(ev, _this.startX, _this.startY) !== false) {
                    EventHelper.addTouchMoveEvent(document, _this.mousemove);
                    EventHelper.addTouchEndEvent(document, _this.mouseup);
                }
                ;
            }
        };
        this.mousemove = function (ev) {
            _this.mouseMove(ev);
            var currentX = TypeHelper.isMoveEvent(ev) ? ev.pageX : ev.touches[0].pageX;
            var currentY = TypeHelper.isMoveEvent(ev) ? ev.pageY : ev.touches[0].pageY;
            var distanceX = currentX - _this.startX;
            var distanceY = currentY - _this.startY;
            if (distanceX !== 0 || distanceY !== 0) {
                _this.isDragging = true;
                if (_this.isFirstDragging === true) {
                    _this.isFirstDragging = false;
                    _this.draggingFirst(ev, currentX, currentY, distanceX, distanceY);
                }
                _this.dragging(ev, currentX, currentY, distanceX, distanceY);
            }
        };
        this.mouseup = function (ev) {
            _this.mouseEnd(ev);
            EventHelper.removeTouchMoveEvent(document, _this.mousemove);
            EventHelper.removeTouchEndEvent(document, _this.mouseup);
            _this.dragEnd(ev);
            _this.isFirstDragging = true;
            _this.isDragging = false;
        };
        EventHelper.addTouchStartEvent(dragElement, this.mousedown);
    }
    DragEvent.prototype.draggingFirst = function (ev, x, y, distanceX, distanceY) { };
    return DragEvent;
}());
exports.default = DragEvent;
