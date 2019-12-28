import Control from "../control";
import UIControl from "../ui-control";
import { UIWindowOption } from "./constraint";
import { isNumber, noEmptyOrNull } from "../../core/validator/property-validator";
import { addStyles } from "../../core/util/element-helper";

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
    public width: number = this.entry.width;

    /**
     * 高度
     */
    @isNumber(false)
    public height: number = this.entry.height;

    /**
     * 构造函数初始化
     */
    constructor(options: UIWindowOption) {
        super();
        this.id = options?.id ?? "";
        this.handlerOptions(options);
    }

    /**
     * 创建控件元素对象
     */
    present(): HTMLElement {
        const element = document.createElement("div");
        element.id = `${this.entry.prefix + this.id}`;

        addStyles(element, <CSSStyleDeclaration>{
            width: `${this.width}px`,
            height: `${this.height}px`
        });

        return element;
    }

    /**
     * 处理初始传入参数
     * @param options 控件支持传入可选参数
     */
    handlerOptions(options: UIWindowOption) {
        this.width = options?.width ?? this.width;
        this.height = options?.height ?? this.height;
    }
}