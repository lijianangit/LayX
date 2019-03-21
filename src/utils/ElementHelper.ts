import * as Types from "../../types";

export function createFragment(): DocumentFragment {
    return document.createDocumentFragment();
}

export function createElement<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K] {
    return document.createElement(tagName);
}

export function createElementNS<K extends keyof SVGElementTagNameMap>(tagName: K): SVGElementTagNameMap[K] {
    return document.createElementNS("http://www.w3.org/2000/svg", tagName);
}

export function addStyles(element: HTMLElement | null, styles: Types.CSSStyleObject): HTMLElement | null {
    if (element === null) return element;

    for (const key of Object.keys(styles)) {
        (<Types.CSSStyleObject>element.style)[key] = styles[key];
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
    element.className = currentClasses.join(" ").trim();

    return element;
}

export function addClasses(element: HTMLElement | null, prefix: string = "layx-", ...classes: string[]): HTMLElement | null {
    if (element === null) return element;

    return updateClasses(element, function (currentClasses: string[], index: number, itemClass: string): void {
        if (!~index) {
            currentClasses.push(itemClass);
        }
    }, prefix, ...classes);
}

export function removeClasses(element: HTMLElement | null, prefix: string = "layx-", ...classes: string[]): HTMLElement | null {
    if (element === null) return element;

    return updateClasses(element, function (currentClasses: string[], index: number): void {
        if (~index) {
            currentClasses.splice(index, 1);
        }
    }, prefix, ...classes);
}

export function containClass(element: HTMLElement | null, prefix: string = "layx-", cls: string): boolean {
    if (element === null) return false;

    const currentClasses = element.className.split(/\s+/g);
    const index = currentClasses.indexOf(prefix + cls);
    return !!~index;
}
