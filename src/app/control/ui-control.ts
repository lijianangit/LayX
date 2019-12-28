import Control from "./control";

/**
 * UI控件类，所有的控件都必须实现该接口
 * @template TOption 控件支持传入可选参数
 */
export default interface UIControl<TOption> extends Control<TOption> {
    /**
     * 创建控件元素对象
     */
    present(): HTMLElement;
}