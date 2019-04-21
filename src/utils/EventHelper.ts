export function addTouchStartEvent(element: HTMLElement | Document, handler: (this: HTMLElement | Document, ev: MouseEvent | TouchEvent) => any, useCapture: boolean = false) {
    if (element instanceof Document) {
        element.addEventListener("mousedown", handler, useCapture);
        element.addEventListener("touchstart", handler, useCapture);
    }
    else {
        element.addEventListener("mousedown", handler, useCapture);
        element.addEventListener("touchstart", handler, useCapture);
    }
}

export function addTouchMoveEvent(element: HTMLElement | Document, handler: (this: HTMLElement | Document, ev: MouseEvent | TouchEvent) => any, useCapture: boolean = false) {
    if (element instanceof Document) {
        element.addEventListener("mousemove", handler, useCapture);
        element.addEventListener("touchmove", handler, useCapture);
    }
    else {
        element.addEventListener("mousemove", handler, useCapture);
        element.addEventListener("touchmove", handler, useCapture);
    }
}

export function addTouchEndEvent(element: HTMLElement | Document, handler: (this: HTMLElement | Document, ev: MouseEvent | TouchEvent) => any, useCapture: boolean = false) {
    if (element instanceof Document) {
        element.addEventListener("mouseup", handler, useCapture);
        element.addEventListener("touchend", handler, useCapture);
    }
    else {
        element.addEventListener("mouseup", handler, useCapture);
        element.addEventListener("touchend", handler, useCapture);
    }
}

export function removeTouchStartEvent(element: HTMLElement | Document, handler: (this: HTMLElement | Document, ev: MouseEvent | TouchEvent) => any) {
    if (element instanceof Document) {
        element.removeEventListener("mousedown", handler);
        element.removeEventListener("touchstart", handler);
    }
    else {
        element.removeEventListener("mousedown", handler);
        element.removeEventListener("touchstart", handler);
    }
}

export function removeTouchMoveEvent(element: HTMLElement | Document, handler: (this: HTMLElement | Document, ev: MouseEvent | TouchEvent) => any) {
    if (element instanceof Document) {
        element.removeEventListener("mousemove", handler);
        element.removeEventListener("touchmove", handler);
    }
    else {
        element.removeEventListener("mousemove", handler);
        element.removeEventListener("touchmove", handler);
    }
}

export function removeTouchEndEvent(element: HTMLElement | Document, handler: (this: HTMLElement | Document, ev: MouseEvent | TouchEvent) => any) {
    if (element instanceof Document) {
        element.removeEventListener("mouseup", handler);
        element.removeEventListener("touchend", handler);
    }
    else {
        element.removeEventListener("mouseup", handler);
        element.removeEventListener("touchend", handler);
    }
}