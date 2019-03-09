import UIWindow from "../../controls/UIWindow";
import DragEvent from "./DragEvent";
import * as Types from "../../../types";
import * as Enums from "../enums";
import * as ElementHelper from "../../utils/ElementHelper";

export default class WindowMoveDragEvent extends DragEvent {
    private readonly emerge: number = 10;
    private _top: number = this.window.top;
    private _left: number = this.window.left;

    constructor(dragElement: HTMLElement, public window: UIWindow, private readonly dragMoveOptions: Types.DragMoveOption) {
        super(dragElement);
    }

    dragStart(ev: MouseEvent, x: number, y: number): void | false {
        if (this.window.status !== Enums.WindowStatus.NORMAL) {
            return false;
        }
    }

    dragging(ev: MouseEvent, x: number, y: number, distanceX: number, distanceY: number): void {
        this.moveHandler(distanceX, distanceY);
    }

    dragEnd(ev: MouseEvent, x: number, y: number): void {
        this.window.top = this._top;
        this.window.left = this._left;
    }

    private moveHandler(distanceX: number, distanceY: number) {
        let top = this.window.top;
        let left = this.window.left;

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

        ElementHelper.addStyles(this.window.element, <Types.CSSStyleObject>{
            top: `${top}px`,
            left: `${left}px`
        });
    }
}