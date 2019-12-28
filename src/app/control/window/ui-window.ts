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
     * 最小宽度
     */
    @isNumber(false)
    public minWidth: number = 200;

    /**
     * 最小高度
     */
    @isNumber(false)
    public minHeight: number = 200;

    /**
     * 最大宽度
     */
    @isNumber(false)
    public maxWidth: number = innerWidth;

    /**
     * 最大高度
     */
    @isNumber(false)
    public maxHeight: number = innerHeight;

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
            maxWidth: `${this.maxWidth}px`,
            maxHeight: `${this.maxHeight}px`,
            minWidth: `${this.minWidth}px`,
            minHeight: `${this.minHeight}px`,
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
        this.maxWidth = options?.maxWidth ?? this.maxWidth;
        this.maxHeight = options?.maxHeight ?? this.maxHeight;
        this.minWidth = options?.minWidth ?? this.minWidth;
        this.minHeight = options?.minHeight ?? this.minHeight;
        this.width = Math.max(this.minWidth, this.width);
        this.width = Math.min(this.maxWidth, this.width);
        this.height = Math.max(this.minHeight, this.height);
        this.height = Math.min(this.maxHeight, this.height);
    }
}