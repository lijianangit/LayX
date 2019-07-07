import * as Types from "../core/Types";

/**
 * 移除DOM元素
 * @param element 元素对象或null
 * @returns  
 */
export function removeElement(element: Element | null) {
    if (!element || !element.parentElement) return;

    element.parentElement.removeChild(element);
}

/**
 * 创建文档碎片
 * @returns 文档碎片 
 */
export function createFragment(): DocumentFragment {
    return document.createDocumentFragment();
}

/**
 * 创建元素
 * @template K 标签名可选列表
 * @param tagName 标签名
 * @returns 元素 
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(tagName: K): HTMLElementTagNameMap[K] {
    return document.createElement(tagName);
}

/**
 * 创建SVG元素
 * @template K 标签名可选列表
 * @param tagName 标签名
 * @returns 元素
 */
export function createElementNS<K extends keyof SVGElementTagNameMap>(tagName: K): SVGElementTagNameMap[K] {
    return document.createElementNS("http://www.w3.org/2000/svg", tagName);
}

/**
 * 为元素添加样式
 * @param element 元素
 * @param styles 样式JSON对象
 * @returns 当前元素 
 */
export function addStyles(element: HTMLElement | null, styles: Types.CSSStyleObject): HTMLElement | null {
    if (!element) return null;

    for (const key in styles) {
        (<Types.CSSStyleObject>element.style)[key] = styles[key];
    }
    return element;
}

/**
 * 更新class核心方法
 * @param element 元素
 * @param handler 具体更新方式
 * @param [prefix] class前缀，默认 layx-
 * @param classes class数组
 * @returns 当前元素 
 */
export function updateClasses(element: HTMLElement, handler: (currentClasses: string[], index: number, itemClass: string) => void, prefix: string = "layx-", ...classes: string[]): HTMLElement | null {
    if (!element) return null;

    const currentClasses = element.className.split(/\s+/g);
    classes.forEach((item) => {
        if (item) {
            let cls = "";
            // 如果class前面带 ! ,无需添加前缀
            if (item.indexOf("!") === 0) {
                cls = item.substr(1);
            }
            else {
                cls = prefix + item;
            }

            const index = currentClasses.indexOf(cls);

            handler(currentClasses, index, cls);
        }
    });
    element.className = currentClasses.join(" ").trim();

    return element;
}

/**
 * 添加class
 * @param element 元素
 * @param [prefix] class前缀，默认 layx-
 * @param classes class数组
 * @returns 当前元素 
 */
export function addClasses(element: HTMLElement | null, prefix: string = "layx-", ...classes: string[]): HTMLElement | null {
    if (!element) return null;

    return updateClasses(element, function (currentClasses: string[], index: number, itemClass: string): void {
        if (!~index) {
            currentClasses.push(itemClass);
        }
    }, prefix, ...classes);
}

/**
 * 移除Class
 * @param element 元素
 * @param [prefix] class前缀，默认 layx-
 * @param classes class数组
 * @returns 当前元素 
 */
export function removeClasses(element: HTMLElement | null, prefix: string = "layx-", ...classes: string[]): HTMLElement | null {
    if (!element) return null;

    return updateClasses(element, function (currentClasses: string[], index: number): void {
        if (~index) {
            currentClasses.splice(index, 1);
        }
    }, prefix, ...classes);
}

/**
 * 判断是否包含class
 * @param element 元素
 * @param [prefix] class前缀，默认 layx-
 * @param className class名称
 * @returns bool 值 
 */
export function hasClass(element: HTMLElement | null, prefix: string = "layx-", className: string): boolean {
    if (!element) return false;

    const currentClasses = element.className.split(/\s+/g);

    let cls = "";
    // 如果class前面带 ! ,无需添加前缀
    if (className.indexOf("!") === 0) {
        cls = className.substr(1);
    }
    else {
        cls = prefix + className;
    }

    const index = currentClasses.indexOf(cls);

    return !!~index;
}