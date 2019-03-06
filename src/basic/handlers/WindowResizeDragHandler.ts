import DragHandler from "./DragHandler";
import UIWindow from "../../controls/UIWindow";
import { ResizeDirection } from "../enums/ResizeDirection";
import { addStyles } from "../../utils/ElementHelper";
import { CSSStyleObject } from "../../../types";

export default class WindowResizeDragHandler extends DragHandler {
    private _top: number = this.window.top;
    private _left: number = this.window.left;
    private _width: number = this.window.width;
    private _height: number = this.window.height;

    constructor(dragElement: HTMLElement, public direction: ResizeDirection, public window: UIWindow) {
        super(dragElement);
    }

    dragStart(ev: MouseEvent, x: number, y: number): void {
    }

    dragging(ev: MouseEvent, x: number, y: number, distanceX: number, distanceY: number): void {
        switch (this.direction) {
            case ResizeDirection.LEFT:
                this.resizeHandler(distanceX, distanceY, false, true, false, true);
                break;
            case ResizeDirection.RIGHT:
                this.resizeHandler(distanceX, distanceY, false, false, false, true);
                break;
            case ResizeDirection.TOP:
                this.resizeHandler(distanceX, distanceY, true, false, true, false);
                break;
            case ResizeDirection.BOTTOM:
                this.resizeHandler(distanceX, distanceY, false, false, true, false);
                break;
            case ResizeDirection.LEFT_TOP:
                this.resizeHandler(distanceX, distanceY, true, true, false, false);
                break;
            case ResizeDirection.RIGHT_TOP:
                this.resizeHandler(distanceX, distanceY, true, false, false, false);
                break;
            case ResizeDirection.LEFT_BOTTOM:
                this.resizeHandler(distanceX, distanceY, false, true, false, false);
                break;
            case ResizeDirection.RIGHT_BOTTOM:
                this.resizeHandler(distanceX, distanceY, false, false, false, false);
                break;
        }
    }

    dragEnd(ev: MouseEvent, x: number, y: number): void {
        this.window.top = this._top;
        this.window.left = this._left;
        this.window.width = this._width;
        this.window.height = this._height;
    }

    private resizeHandler(distanceX: number, distanceY: number, isTop: boolean, isLeft: boolean, lockX: boolean, lockY: boolean) {
        let top = this.window.top + distanceY;
        let left = this.window.left + distanceX;
        let width = isLeft ? this.window.width - distanceX : this.window.width + distanceX;
        let height = isTop ? this.window.height - distanceY : this.window.height + distanceY;

        // handler min/max height
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

        // handler min/max height
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

        if (lockY) {
            this._width = width;
            this._left = left;
            addStyles(this.window.element, <CSSStyleObject>{
                width: `${width}px`,
                left: `${left}px`
            });
        }
        if (lockX) {
            this._top = top;
            this._height = height;
            addStyles(this.window.element, <CSSStyleObject>{
                top: `${top}px`,
                height: `${height}px`
            });
        }
        if (lockY === false && lockX === false) {
            this._top = top;
            this._left = left;
            this._width = width;
            this._height = height;
            addStyles(this.window.element, <CSSStyleObject>{
                top: `${top}px`,
                left: `${left}px`,
                height: `${height}px`,
                width: `${width}px`
            });
        }

    }
}