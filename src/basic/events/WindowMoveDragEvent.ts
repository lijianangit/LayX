import UIWindow from "../../controls/UIWindow";
import DragEvent from "./DragEvent";
import * as Types from "../../../types";
import * as ElementHelper from "../../utils/ElementHelper";

export default class WindowMoveDragEvent extends DragEvent {
    private readonly emerge: number = 10;
    private _top: number = this.window.top;
    private _left: number = this.window.left;

    constructor(dragElement: HTMLElement, public window: UIWindow) {
        super(dragElement);
    }

    dragStart(ev: MouseEvent, x: number, y: number): void {
    }

    dragging(ev: MouseEvent, x: number, y: number, distanceX: number, distanceY: number): void {
        this.moveHandler(distanceX, distanceY);
    }

    dragEnd(ev: MouseEvent, x: number, y: number): void {
        this.window.top = this._top;
        this.window.left = this._left;
    }

    private moveHandler(distanceX: number, distanceY: number) {
        let top = this.window.top + distanceY;
        let left = this.window.left + distanceX;

        top = Math.max(0, top);
        top = Math.min(innerHeight - this.emerge, top);

        left = Math.max(this.emerge - this.window.width, left);
        left = Math.min(innerWidth - this.emerge, left);

        this._top = top;
        this._left = left;
        ElementHelper.addStyles(this.window.element, <Types.CSSStyleObject>{
            top: `${top}px`,
            left: `${left}px`
        });
    }
}