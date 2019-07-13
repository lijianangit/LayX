import UIComponent from "./UIComponent";

/**
 * 组件约束，所有组件必须实现该接口
 */
export default interface UIControl extends UIComponent {
    /**
   * 创建DOM元素
   * @param inject 注入器，支持外部拓展元素
   * @returns DOM元素 
   */
    createView(inject?: (element: Element) => Element): Element;
}