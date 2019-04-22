import App from "../../core/App";
import UIWindow from "../../controls/UIWindow";
import DragEvent from "./DragEvent";
import UIContent from "../../controls/UIContent";
import * as Types from "../../../types";
import * as Enums from "../enums";
import * as ElementHelper from "../../utils/ElementHelper";
import * as TypeHelper from "../../utils/TypeHelper";

export default class WindowMoveDragEvent extends DragEvent {
    private readonly emerge: number = 10;
    private _top: number = 0;
    private _left: number = 0;
    private _originTop: number = 0;
    private _originLeft: number = 0;
    private _lastTime: Date | null = null;

    private content: UIContent | null = null;

    constructor(public app: App, public window: UIWindow, dragElement: HTMLElement, private readonly dragMoveOptions: Types.DragMoveOption) {
        super(dragElement);
    }

    dragStart(ev: MouseEvent | TouchEvent, x: number, y: number): void | false {
        this._top = this.window.top;
        this._left = this.window.left;
    }

    dragging(ev: MouseEvent | TouchEvent, x: number, y: number, distanceX: number, distanceY: number): void {
        this.moveHandler(distanceX, distanceY);
    }

    dragEnd(ev: MouseEvent | TouchEvent): void {
        if (this.isDragging == true && this._top === 0) {
            this.window.max();
            this.window.top = this._originTop;
            this.window.left = this._originLeft;
            return;
        }

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

    draggingFirst(ev: MouseEvent | TouchEvent, x: number, y: number, distanceX: number, distanceY: number): void {
        this._originTop = this.window.top;
        this._originLeft = this.window.left;

        if (this.window.status === Enums.WindowStatus.MAX) {
            if (x < this.window.width / 2) {
                this._left = 0;
            }
            else if (x > this.window.width / 2 && x < innerWidth - this.window.width) {
                this._left = x - this.window.width / 2;
            } else if (innerWidth - x < this.window.width / 2) {
                this._left = innerWidth - this.window.width;
            } else if (innerWidth - x > this.window.width / 2 && x >= innerWidth - this.window.width) {
                this._left = x - this.window.width / 2;
            }

            this.window.top = distanceY;
            this.window.left = this._left;

            this.window.normal(true);
        }
    }

    mouseStar(ev: MouseEvent | TouchEvent): void {

        this.app.drayLayer!.updateZIndex(this.window.zIndex - 1);

        this.content = this.window.getComponent<UIContent>(Enums.ComponentType.CONTENT_CONTAINER);
        if (this.content) this.content.showPenetrate();
    }
    mouseMove(ev: MouseEvent | TouchEvent): void {
        ev.preventDefault();
    }
    mouseEnd(ev: MouseEvent | TouchEvent): void {
        this.app.drayLayer!.hide();

        if (this.content) this.content.showPenetrate(false);

        if (!this._lastTime) this._lastTime = new Date();
        else {
            const currentDate = new Date();
            if (currentDate.getTime() - this._lastTime.getTime() <= 200) {
                if (this.window.status === Enums.WindowStatus.MAX) {
                    this.window.normal();
                    this._lastTime = new Date();
                    return;
                }
                if (this.window.status === Enums.WindowStatus.NORMAL) {
                    this.window.max();
                    this._lastTime = new Date();
                    return;
                }
            }
        }
    }
}