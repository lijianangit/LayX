import * as EventHelper from "../../utils/EventHelper";
import * as TypeHelper from "../../utils/TypeHelper";

export default abstract class DragEvent {
    public isDragging: boolean = false;
    public isFirstDragging: boolean = true;
    private startX: number = 0;
    private startY: number = 0;
    private touchStartTime: Date | null = null;

    constructor(dragElement: HTMLElement) {
        EventHelper.addTouchStartEvent(dragElement, this.mousedown);
    }

    private readonly mousedown: (this: HTMLElement | Document, ev: MouseEvent | TouchEvent) => any = (ev: MouseEvent | TouchEvent) => {
        this.mouseStar(ev);
        this.touchStartTime = new Date();
        if ((TypeHelper.isMoveEvent(ev) && ev.button === 0) || (!TypeHelper.isMoveEvent(ev) && ev.touches.length > 0)) {
            this.startX = TypeHelper.isMoveEvent(ev) ? ev.pageX : ev.touches[0].pageX;
            this.startY = TypeHelper.isMoveEvent(ev) ? ev.pageY : ev.touches[0].pageY;
            if (this.dragStart(ev, this.startX, this.startY) !== false) {
                EventHelper.addTouchMoveEvent(document, this.mousemove);
                EventHelper.addTouchEndEvent(document, this.mouseup);
            };
        }
    };

    private readonly mousemove: (this: HTMLElement | Document, ev: MouseEvent | TouchEvent) => any = (ev: MouseEvent | TouchEvent) => {
        this.mouseMove(ev);

        const currentX = TypeHelper.isMoveEvent(ev) ? ev.pageX : ev.touches[0].pageX;
        const currentY = TypeHelper.isMoveEvent(ev) ? ev.pageY : ev.touches[0].pageY;
        const distanceX = currentX - this.startX;
        const distanceY = currentY - this.startY;
        if ((TypeHelper.isMoveEvent(ev) && (distanceX !== 0 || distanceY !== 0)) || (!TypeHelper.isMoveEvent(ev) && (new Date().getTime() - this.touchStartTime!.getTime() > 100))) {
            this.isDragging = true;

            if (this.isFirstDragging === true) {
                this.isFirstDragging = false;
                this.draggingFirst(ev, currentX, currentY, distanceX, distanceY);
            }

            this.dragging(ev, currentX, currentY, distanceX, distanceY);
        }
    };

    private readonly mouseup: (this: HTMLElement | Document, ev: MouseEvent | TouchEvent) => any = (ev: MouseEvent | TouchEvent) => {
        this.mouseEnd(ev);

        EventHelper.removeTouchMoveEvent(document, this.mousemove);
        EventHelper.removeTouchEndEvent(document, this.mouseup);

        this.dragEnd(ev);
        this.isFirstDragging = true;
        this.isDragging = false;
    };


    abstract dragStart(ev: MouseEvent | TouchEvent, x: number, y: number): void | false;

    abstract dragging(ev: MouseEvent | TouchEvent, x: number, y: number, distanceX: number, distanceY: number): void;

    abstract dragEnd(ev: MouseEvent | TouchEvent): void;

    abstract mouseStar(ev: MouseEvent | TouchEvent): void;
    abstract mouseMove(ev: MouseEvent | TouchEvent): void;
    abstract mouseEnd(ev: MouseEvent | TouchEvent): void;

    draggingFirst(ev: MouseEvent | TouchEvent, x: number, y: number, distanceX: number, distanceY: number): void { }
}