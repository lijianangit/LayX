import { assertNoEmptyOrNull } from '../verification';
import { isUnitLessCSSProperty } from './css-property';

export const PREFIX: string = "layx-";

export type HTMLElementOrNull = HTMLElement | null;
export type SuperCSSStyleDeclaration = { [key in keyof CSSStyleDeclaration]?: number | string | null; }
export type CSSClassOrUndefined = string | undefined;
export interface CSSClassSetter { (cssClasses: Array<CSSClassOrUndefined>, cssClassIndex: number, cssClass: string): void; }

export function addCSSStyles(element: HTMLElementOrNull, cssStyles: SuperCSSStyleDeclaration): void {
    if (!element) return;

    for (const cssProp in cssStyles) {
        const propValue = cssStyles[cssProp];
        if (propValue === undefined) continue;

        element.style[cssProp] = assertNoEmptyOrNull(propValue) ?
            `${propValue + (isUnitLessCSSProperty(cssProp) ? "" : "px")}` :
            "";
    }
}

function updateCSSClasses(element: HTMLElementOrNull, handler: CSSClassSetter, ...cssClasses: Array<CSSClassOrUndefined>): void {
    if (!element) return;

    const elementCSSClasses = element.className.split(/\s+/g);
    cssClasses.forEach((cssClass) => {
        if (assertNoEmptyOrNull(cssClass)) {
            const cssClassName = cssClass.indexOf("~") === 0 ? cssClass.substr(1) : PREFIX + cssClass;
            const cssClassIndex = elementCSSClasses.indexOf(cssClassName);
            handler(elementCSSClasses, cssClassIndex, cssClassName);
        }
    });
    element.className = elementCSSClasses.join(" ").trim();
}

export function addCSSClasses(element: HTMLElementOrNull, ...cssClasses: Array<CSSClassOrUndefined>): void {
    return updateCSSClasses(element, (elementCSSClasses, cssClassIndex, cssClassName) => {
        if (!~cssClassIndex) {
            elementCSSClasses.push(cssClassName);
        }
    }, ...cssClasses);
}

export function removeCSSClasses(element: HTMLElementOrNull, ...cssClasses: string[]): void {
    if (cssClasses.length === 1 && !hasCSSClass(element, cssClasses[0])) return;

    return updateCSSClasses(element, (elementCSSClasses, cssClassIndex) => {
        if (~cssClassIndex) {
            elementCSSClasses.splice(cssClassIndex, 1);
        }
    }, ...cssClasses);
}

export function hasCSSClass(element: HTMLElementOrNull, cssClass: string): boolean {
    if (!element) return false;

    const elementCSSClasses = element.className.split(/\s+/g);
    const cssClassName = cssClass.indexOf("~") === 0 ? cssClass.substr(1) : PREFIX + cssClass;
    const index = elementCSSClasses.indexOf(cssClassName);
    return !!~index;
}