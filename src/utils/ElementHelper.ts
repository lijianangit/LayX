import * as Types from "../../types";

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

export function borderCast(border: string | Types.BorderOptions): [string | null, string | null] {
    if (typeof border === "string") return [border, null];

    let borderStyle: [string | null, string | null] = [null, null];
    if (typeof border.width === "number"
        && typeof border.color === "string"
        && (typeof border.style === "string" && ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "inherit"].indexOf(border.style) > -1)) {
        borderStyle[0] = `${border.width}px ${border.style} ${border.color}`;
    }
    if (typeof border.radius === "number") {
        borderStyle[1] = `${border.radius}px`;
    }

    return borderStyle;
}