import DragHandler from "./DragHandler";

export default class ResizeDragHandler extends DragHandler {
    constructor(dragElement: HTMLElement) {
        super(dragElement);
    }

    dragStart(ev: MouseEvent, x: number, y: number): void {
        console.log("drag start....");
    }

    dragging(ev: MouseEvent, x: number, y: number, distanceX: number, distanceY: number): void {
        console.log("dragging...")
    }

    dragEnd(ev: MouseEvent, x: number, y: number): void {
        console.log("drag end.")
    }
}