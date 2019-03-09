export default abstract class DragEvent {
    public static isDragging: boolean = false;
    public static isFirstDragging: boolean = true;
    private startX: number = 0;
    private startY: number = 0;

    constructor(dragElement: HTMLElement) {
        dragElement.addEventListener("mousedown", this.mousedown);
    }

    private readonly mousedown: (this: HTMLElement, ev: MouseEvent) => any = (ev: MouseEvent) => {
        if (ev.button === 0) {
            ev.preventDefault();

            this.startX = ev.pageX;
            this.startY = ev.pageY;
            if (this.dragStart(ev, this.startX, this.startY) !== false) {
                document.addEventListener("mousemove", this.mousemove);
                document.addEventListener("mouseup", this.mouseup);
            };
        }
    };

    private readonly mousemove: (this: Document, ev: MouseEvent) => any = (ev: MouseEvent) => {
        const currentX = ev.pageX;
        const currentY = ev.pageY;
        const distanceX = currentX - this.startX;
        const distanceY = currentY - this.startY;
        DragEvent.isDragging = true;

        if (DragEvent.isFirstDragging === true) {
            DragEvent.isFirstDragging = false;
            this.draggingFirst(ev);
        }

        this.dragging(ev, currentX, currentY, distanceX, distanceY);
    };

    private readonly mouseup: (this: Document, ev: MouseEvent) => any = (ev: MouseEvent) => {
        DragEvent.isDragging = false;
        DragEvent.isFirstDragging = true;
        document.removeEventListener("mousemove", this.mousemove);
        document.removeEventListener("mouseup", this.mouseup);
        this.dragEnd(ev, ev.pageX, ev.pageY);
    };

    abstract dragStart(ev: MouseEvent, x: number, y: number): void | false;

    abstract dragging(ev: MouseEvent, x: number, y: number, distanceX: number, distanceY: number): void;

    abstract dragEnd(ev: MouseEvent, x: number, y: number): void;

    draggingFirst(ev: MouseEvent): void { }
}