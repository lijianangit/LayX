import { Component } from '../';
import { ComponentElement } from './type';

/**
 * UI组件类，所有的组件都必须实现该接口
 * @template TOption 组件参数
 */
export interface UIComponent<TOption> extends Component<TOption> {
    /**
     * 创建组件元素对象
     * @returns ComponentElement 
     */
    present(): ComponentElement;
}