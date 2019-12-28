import Control from "../control";
import UIControl from "../ui-control";
import { UIWindowOption } from "./constraint";
import { isNumber, noEmptyOrNull } from "../../core/validator/property-validator";

/**
 * 窗口控件类，也就是整个控件的核心窗口类
 */
export default class UIWindow extends Control<UIWindowOption> implements UIControl<UIWindowOption> {
    /**
     * 唯一Id
     */
    @noEmptyOrNull()
    public readonly id: string;
    /**
     * 宽度
     */
    @isNumber(false)
    public width: number = 800;

    /**
     * 高度
     */
    @isNumber(false)
    public height: number = 600;

    /**
     * 构造函数初始化
     */
    constructor(options: UIWindowOption) {
        super(options);

        this.id = options?.id ?? "";
    }

    /**
     * 创建控件元素对象
     */
    present(): HTMLElement {
        const element = document.createElement("div");
        element.id = this.id;

        return element;
    }

    /**
     * 处理初始传入参数
     * @param options 控件支持传入可选参数
     */
    handlerOptions(options: UIWindowOption) {
    }
}