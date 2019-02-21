export function batchClasses(prefix: string = "layx-", ...classes: string[]): string[] {
    const correctClasses: string[] = [];
    for (const cls of classes) {
        correctClasses.push(`${prefix + cls}`);
    }

    return correctClasses;
}

export function batchStyles(element: HTMLElement, styles: CSSStyleDeclaration): HTMLElement {
    for (const key of Object.keys(styles)) {
        (<any>element.style)[key] = (<any>styles)[key];
    }
    return element;
}