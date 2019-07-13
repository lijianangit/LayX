import UIComponent from "../ui/UIComponent";

/**
 * 组件信息类型
 */
export default interface ComponentProfile extends Object {
    /**
     * 组件唯一Id
     */
    Id: string;

    /**
     * 组件对象
     */
    component: UIComponent;
}