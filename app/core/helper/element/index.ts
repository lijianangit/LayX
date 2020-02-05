import { parameterInvalid } from '../../exception';
import { CSSClassOrUndefined, CSSClassSetter, HTMLElementOrNull } from '../../type';
import { checkNoEmptyOrNull, checkString } from '../../validator';

export const PREFIX: string = "layx-";

export function addCSSStyles(element: HTMLElementOrNull, cssStyles: CSSStyleDeclaration): void {
    if (!element) return;

    for (const cssProp in cssStyles) {
        element.style[cssProp] = cssStyles[cssProp] ?? null;
    }
}

function updateCSSClasses(element: HTMLElementOrNull, handler: CSSClassSetter, ...cssClasses: Array<CSSClassOrUndefined>): HTMLElementOrNull {
    if (!element) return null;

    const elementCSSClasses = element.className.split(/\s+/g);
    cssClasses.forEach((cssClass) => {
        if (cssClass) {
            const cssClassName = cssClass.indexOf("!") === 0 ? cssClass.substr(1) : PREFIX + cssClass;
            const cssClassIndex = elementCSSClasses.indexOf(cssClassName);
            handler(elementCSSClasses, cssClassIndex, cssClassName);
        }
    });
    element.className = elementCSSClasses.join(" ").trim();
    return element;
}

export function addCSSClasses(element: HTMLElementOrNull, ...cssClasses: Array<CSSClassOrUndefined>): HTMLElementOrNull {
    return updateCSSClasses(element, (elementCSSClasses, cssClassIndex, cssClass) => {
        if (!~cssClassIndex) {
            elementCSSClasses.push(cssClass);
        }
    }, ...cssClasses);
}

export function removeCSSClasses(element: HTMLElementOrNull, ...cssClasses: string[]): HTMLElementOrNull {
    if (cssClasses.length === 1 && !hasCSSClass(element, cssClasses[0])) return element;

    return updateCSSClasses(element, (elementCSSClasses, cssClassIndex) => {
        if (~cssClassIndex) {
            elementCSSClasses.splice(cssClassIndex, 1);
        }
    }, ...cssClasses);
}

export function hasCSSClass(element: HTMLElementOrNull, cssClass: string): boolean {
    if (!element) return false;

    const elementCSSClasses = element.className.split(/\s+/g);
    const cssClassName = cssClass.indexOf("!") === 0 ? cssClass.substr(1) : PREFIX + cssClass;
    const index = elementCSSClasses.indexOf(cssClassName);
    return !!~index;
}

export function createDivElement(id?: string): HTMLDivElement {
    const element = document.createElement("div");
    if (checkString(id)) {
        element.id = PREFIX + id;
    }
    return element;
}

export function createSvgElement(name: string): SVGSVGElement {
    if (!checkNoEmptyOrNull(name)) parameterInvalid();

    const svgNamespace = "http://www.w3.org/2000/svg";
    const nsNamespace = "http://www.w3.org/1999/xlink";

    const svgElement = document.createElementNS(svgNamespace, "svg");
    const useElement = document.createElementNS(svgNamespace, "use");
    useElement.setAttributeNS(nsNamespace, "xlink:href", `#${name}`);
    svgElement.appendChild(useElement);
    return svgElement;
}

export function removeHTMLElement(element: HTMLElementOrNull): void {
    if (!element) return;
    if (!element.parentElement) return;

    element.parentElement.removeChild(element);
}