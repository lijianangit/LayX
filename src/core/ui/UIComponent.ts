import * as StringHelper from "../../utils/StringHelper";
import * as CastHelper from "../../utils/CastHelper";
import * as Types from "../Types";
import * as ElementHelper from "../../utils/ElementHelper";
import StateStore from "../store/StateStore";

/**
 * 组件基类，所有组件都需继承该组件
 */
export default abstract class UIComponent {
    /**
     * 内置组件类型，主要用于约束组件规范
     */
    private _type_: any;

    /**
     * 唯一Id
     */
    private _uniqueId: string = StringHelper.generateUniqueId();
    public get uniqueId(): string {
        const components = StateStore.instance.components;

        // 将创建的组建Id添加到组件Id集合中
        if (!components.hasOwnProperty(this._uniqueId)) {
            (<any>components)[this._uniqueId] = this;
        }

        return this._uniqueId;
    }

    /**
     * 子组件
     */
    public readonly components: Types.ComponentType = <Types.ComponentType>{};

    /**
     * 组件DOM对象
     */
    public get element(): Element | null {
        return document.querySelector(`[data-id='${this.uniqueId}']`);
    }

    /**
     * 添加子组件
     * @param key 组件名称
     * @param component 组件对象
     */
    addComponent(key: string, component: UIComponent | Array<UIComponent>): void {
        key = CastHelper.stringCast(key);

        if (!this.components[key]) {
            this.components[key] = component;
        }
    }

    /**
     * 支持递归回去组件对象
     * 例子：this.getComponent<UIActionButton>("window/toolbar/actionbutton")
     * @template T 组件对象类型
     * @param path 组件查找路径
     * @param [component] 指定组件查找起始组件
     * @returns 组件对象 
     */
    getComponent<T extends UIComponent | Array<UIComponent>>(path: string, component: UIComponent = this): T | null {
        path = StringHelper.removeInvalidCharacter(
            CastHelper.stringCast(path)
        );

        // 判断是否包含 "/" 字符
        if (path.indexOf("/") > -1) {
            const keys = path.split("/");
            let tier = component.getComponent(keys[0]);

            // 没找到直接返回 null
            if (tier === null) {
                return null;
            }

            // 递归查找
            for (let i = 0; i < keys.length; i++) {
                if (i + 1 < keys.length) {
                    tier = (<UIComponent>tier).getComponent(keys[i + 1], (<UIComponent>tier));
                }
                else {
                    return tier as T;
                }
            }
            return tier as T;
        }
        else {
            if (component.components[path]) {
                return component.components[path] as T;
            }
            return null;
        }
    }

    /**
     * 移除组件
     * 例子：this.removeComponent("window/toolbar/actionbutton")
     * @param path 组件查找路径
     */
    removeComponent(path: string) {
        path = StringHelper.removeInvalidCharacter(
            CastHelper.stringCast(path)
        );

        if (path.indexOf("/") > -1) {
            const lastDiagonalIndex = path.lastIndexOf("/");
            // 获取上一级组件对象
            const parentPath = path.substr(0, lastDiagonalIndex);
            const parentComponent = this.getComponent<UIComponent>(parentPath);

            if (parentComponent) {
                parentComponent.removeComponent(
                    path.substr(lastDiagonalIndex + 1));
            }
        }
        else {
            const component = this.components[path];

            if (component) {
                // 移除页面DOM元素
                ElementHelper.removeElement((<UIComponent>component).element);
                // 移除组件对象
                delete this.components[path];
            }
        }
    }
}