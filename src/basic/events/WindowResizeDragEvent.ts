import App from "../../core/App";
import UIWindow from "../../controls/UIWindow";
import UIToolBar from "../../controls/UIToolBar";
import UIActionBar from "../../controls/UIActionBar";
import UIActionButton from "../../controls/UIActionButton";
import DragEvent from "./DragEvent";
import * as Enums from "../enums";
import * as Types from "../../../types";
import * as ElementHelper from "../../utils/ElementHelper";

export default class WindowResizeDragEvent extends DragEvent {
    private isShowMoreActionButton: boolean = false;
    private _top: number = 0;
    private _left: number = 0;
    private _width: number = 0;
    private _height: number = 0;

    constructor(public app: App, public window: UIWindow, dragElement: HTMLElement, public direction: Enums.ResizeDirection) {
        super(dragElement);
    }

    dragStart(ev: MouseEvent, x: number, y: number): void | false {
        if (this.window.status !== Enums.WindowStatus.NORMAL) {
            return false;
        }
        this._top = this.window.top;
        this._left = this.window.left;
        this._width = this.window.width;
        this._height = this.window.height;
    }

    dragging(ev: MouseEvent, x: number, y: number, distanceX: number, distanceY: number): void {
        switch (this.direction) {
            case Enums.ResizeDirection.LEFT:
                this.resizeHandler(distanceX, distanceY, false, true, false, true);
                break;
            case Enums.ResizeDirection.RIGHT:
                this.resizeHandler(distanceX, distanceY, false, false, false, true);
                break;
            case Enums.ResizeDirection.TOP:
                this.resizeHandler(distanceX, distanceY, true, false, true, false);
                break;
            case Enums.ResizeDirection.BOTTOM:
                this.resizeHandler(distanceX, distanceY, false, false, true, false);
                break;
            case Enums.ResizeDirection.LEFT_TOP:
                this.resizeHandler(distanceX, distanceY, true, true, false, false);
                break;
            case Enums.ResizeDirection.RIGHT_TOP:
                this.resizeHandler(distanceX, distanceY, true, false, false, false);
                break;
            case Enums.ResizeDirection.LEFT_BOTTOM:
                this.resizeHandler(distanceX, distanceY, false, true, false, false);
                break;
            case Enums.ResizeDirection.RIGHT_BOTTOM:
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
            ElementHelper.addStyles(this.window.element, <Types.CSSStyleObject>{
                top: `${top}px`,
                height: `${height}px`
            });
        }
        if (lockY) {
            this._width = width;
            this._left = left;
            ElementHelper.addStyles(this.window.element, <Types.CSSStyleObject>{
                width: `${width}px`,
                left: `${left}px`
            });
        }
        if (lockY === false && lockX === false) {
            this._top = top;
            this._left = left;
            this._width = width;
            this._height = height;
            ElementHelper.addStyles(this.window.element, <Types.CSSStyleObject>{
                top: `${top}px`,
                left: `${left}px`,
                height: `${height}px`,
                width: `${width}px`
            });
        }

        this.updateActionButton(width);
    }

    private updateActionButton(width: number): void {
        if (width <= 300) {
            if (this.isShowMoreActionButton !== false) return;
            this.isShowMoreActionButton = true;
            this.reizeActionButtons(width);
        }
        else {
            if (this.isShowMoreActionButton !== true) return;
            this.isShowMoreActionButton = false;
            this.reizeActionButtons(width);
        }
    }

    private reizeActionButtons(width: number): void {
        if (!this.window.components["toolBar"]) return;
        if (!(<UIToolBar>this.window.components["toolBar"]).components["actionBar"]) return;

        const actionBar = (<UIToolBar>this.window.components["toolBar"]).components["actionBar"] as UIActionBar;
        actionBar.reizeActionButtons(width);
    }
}