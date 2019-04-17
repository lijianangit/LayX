export default abstract class DragEvent {
    public isDragging: boolean = false;
    public isFirstDragging: boolean = true;
    private startX: number = 0;
    private startY: number = 0;

    constructor(dragElement: HTMLElement) {
        dragElement.addEventListener("mousedown", this.mousedown);
    }

    private readonly mousedown: (this: HTMLElement, ev: MouseEvent) => any = (ev: MouseEvent) => {
        this.mouseStar(ev);

        if (ev.button === 0) {
            this.startX = ev.pageX;
            this.startY = ev.pageY;
            if (this.dragStart(ev, this.startX, this.startY) !== false) {
                document.addEventListener("mousemove", this.mousemove);
                document.addEventListener("mouseup", this.mouseup);
            };
        }
    };

    private readonly mousemove: (this: Document, ev: MouseEvent) => any = (ev: MouseEvent) => {
        this.mouseMove(ev);

        const currentX = ev.pageX;
        const currentY = ev.pageY;
        const distanceX = currentX - this.startX;
        const distanceY = currentY - this.startY;
        if (distanceX !== 0 || distanceY !== 0) {
            this.isDragging = true;

            if (this.isFirstDragging === true) {
                this.isFirstDragging = false;
                this.draggingFirst(ev, currentX, currentY, distanceX, distanceY);
            }

            this.dragging(ev, currentX, currentY, distanceX, distanceY);
        }
    };

    private readonly mouseup: (this: Document, ev: MouseEvent) => any = (ev: MouseEvent) => {
        this.mouseEnd(ev);
        document.removeEventListener("mousemove", this.mousemove);
        document.removeEventListener("mouseup", this.mouseup);
        this.dragEnd(ev, ev.pageX, ev.pageY);
        this.isFirstDragging = true;
        this.isDragging = false;
    };


    abstract dragStart(ev: MouseEvent, x: number, y: number): void | false;

    abstract dragging(ev: MouseEvent, x: number, y: number, distanceX: number, distanceY: number): void;

    abstract dragEnd(ev: MouseEvent, x: number, y: number): void;

    abstract mouseStar(ev: MouseEvent): void;
    abstract mouseMove(ev: MouseEvent): void;
    abstract mouseEnd(ev: MouseEvent): void;

    draggingFirst(ev: MouseEvent, x: number, y: number, distanceX: number, distanceY: number): void { }
}