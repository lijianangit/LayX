/**
 * 为元素添加样式
 * @param element 元素
 * @param styles 样式列表
 */
export function addStyles(element: HTMLElement, styles: CSSStyleDeclaration) {
    if (!element) return;

    for (const key in styles) {
        element.style[key] = styles[key];
    }
}