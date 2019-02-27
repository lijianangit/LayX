import { CSSStyleObject } from "../../types";

export function addStyles(element: HTMLElement, styles: CSSStyleObject): HTMLElement {
    for (const key of Object.keys(styles)) {
        (<CSSStyleObject>element.style)[key] = styles[key];
    }
    return element;
}

export function updateClasses(element: HTMLElement, handler: (currentClasses: string[], index: number, itemClass: string) => void, prefix: string = "layx-", ...classes: string[]): HTMLElement {
    const currentClasses = element.className.split(/\s+/g);
    classes.forEach((item) => {
        const cls = prefix + item,
            index = currentClasses.indexOf(cls);

        handler(currentClasses, index, cls);
    });
    element.className = currentClasses.join(" ");

    return element;
}

export function addClasses(element: HTMLElement, prefix: string = "layx-", ...classes: string[]): HTMLElement {
    return updateClasses(element, function (currentClasses: string[], index: number, itemClass: string): void {
        if (!~index) {
            currentClasses.push(itemClass);
        }
    }, prefix, ...classes);
}

export function removeClasses(element: HTMLElement, prefix: string = "layx-", ...classes: string[]): HTMLElement {
    return updateClasses(element, function (currentClasses: string[], index: number): void {
        if (~index) {
            currentClasses.splice(index, 1);
        }
    }, prefix, ...classes);
}

export function containClass(element: HTMLElement, prefix: string = "layx-", cls: string) {
    const currentClasses = element.className.split(/\s+/g);
    const index = currentClasses.indexOf(cls);
    return !!~index;
}