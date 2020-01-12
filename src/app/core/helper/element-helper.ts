import { PREFIX } from '../../entry/const';
import { checkOfType } from '../validator';

/**
 * 批量添加元素样式
 * @param element 元素对象
 * @param cssStyles 样式表对象
 * @returns void 
 */
export function addCSSStyles(element: HTMLElement | null, cssStyles: CSSStyleDeclaration): void {
    if (!element) return;

    for (const cssProp in cssStyles) {
        element.style[cssProp] = cssStyles[cssProp] ?? null;
    }
}

/**
 * 添加CSS Class
 * 默认前缀为 __PREFIX__，如果class前面带 ! 则无需添加前缀
 * @param element 元素对象
 * @param classes class列表
 * @returns HTMLElement | null 
 */
export function addCSSClasses(element: HTMLElement | null, ...classes: Array<string | undefined>): HTMLElement | null {
    if (!element) return null;

    return updateCSSClasses(element, function (currentClasses: string[], index: number, itemClass: string): void {
        if (!~index) {
            currentClasses.push(itemClass);
        }
    }, PREFIX, ...classes);
}

/**
 * 移除CSS Class
 * 默认前缀为 __PREFIX__，如果class前面带 ! 则无需添加前缀
 * @param element 元素对象
 * @param classes class列表
 * @returns HTMLElement | null 
 */
export function removeCSSClasses(element: HTMLElement | null, ...classes: string[]): HTMLElement | null {
    if (!element) return null;

    return updateCSSClasses(element, function (currentClasses: string[], index: number): void {
        if (~index) {
            currentClasses.splice(index, 1);
        }
    }, PREFIX, ...classes);
}

/**
 * 判断是否包含CSS Class
 * 默认前缀为 __PREFIX__，如果class前面带 ! 则无需添加前缀
 * @param element 元素对象
 * @param className class列表
 * @returns boolean 
 */
export function hasCSSClass(element: HTMLElement | null, className: string): boolean {
    if (!element) return false;

    const currentClasses = element.className.split(/\s+/g);
    const cls = className.indexOf("!") === 0 ? className.substr(1) : PREFIX + className;
    const index = currentClasses.indexOf(cls);
    return !!~index;
}

/**
 * 更新CSS Class，包括新增、更新、删除
 * 默认前缀为 __PREFIX__，如果class前面带 ! 则无需添加前缀
 * @param element 元素对象
 * @param handler 更新方式
 * @param [prefix] 前缀符
 * @param classes class列表
 * @returns HTMLElement | null 
 */
function updateCSSClasses(element: HTMLElement, handler: (currentClasses: string[], index: number, itemClass: string) => void, prefix: string = PREFIX, ...classes: Array<string | undefined>): HTMLElement | null {
    if (!element) return null;

    const currentClasses = element.className.split(/\s+/g);
    classes.forEach((item) => {
        if (item) {
            const cls = item.indexOf("!") === 0 ? item.substr(1) : prefix + item;
            const index = currentClasses.indexOf(cls);
            handler(currentClasses, index, cls);
        }
    });

    element.className = currentClasses.join(" ").trim();
    return element;
}

/**
 * 创建div标签
 * @param [id] id
 * @returns HTMLDivElement 
 */
export function createDivElement(id?: string): HTMLDivElement {
    const element = document.createElement("div");
    if (checkOfType(id, "string")) {
        element.id = <string>id;
    }
    return element;
}

/**
 * 创建svg标签
 * @param name svg图标名称
 * @returns SVGSVGElement
 */
export function createSvgElement(name: string): SVGSVGElement {
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
    useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `#${name}`);
    svgElement.appendChild(useElement);
    return svgElement;
}