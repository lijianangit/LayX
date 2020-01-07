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