import Component from "../";
import UIComponent from "../ui-component";
import { UIWindowOption, BorderOption } from "./type";
import { isPstNumber, isNoEmptyOrNull, isBoolean, combine } from "../../core/decorator/property-decorator";
import { addCSSStyles, addCSSClasses } from "../../core/helper/element-helper";
import { DEFAULT_MIN_WIDTH, DEFAULT_MIN_HEIGHT, DEFAULT_MAX_WIDTH, DEFAULT_MAX_HEIGHT, DEFAULT_BORDER_WIDTH, DEFAULT_BORDER_COLOR, DEFAULT_BORDER_STYLE, DEFAULT_BORDER_RADIUS, BorderStyle } from "./const";
import { checkPstInt, checkInValueOptions, checkNoEmptyOrNull } from "../../core/validator";

/**
 * 窗口组件类
 */
export default class UIWindow extends Component<UIWindowOption> implements UIComponent<UIWindowOption> {
    /**
     * 构造函数初始化
     */
    public constructor(options: UIWindowOption) {
        super();

        this.id = options?.id;
        this.handlerOptions(options);
    }

    /**
     * 唯一Id
     */
    @isNoEmptyOrNull()
    public readonly id: string;

    /**
     * 宽度
     */
    @isPstNumber()
    public width: number = this.entry.width;

    /**
     * 高度
     */
    @isPstNumber()
    public height: number = this.entry.height;

    /**
     * 最小宽度
     */
    @isPstNumber()
    public minWidth: number = DEFAULT_MIN_WIDTH;

    /**
     * 最小高度
     */
    @isPstNumber()
    public minHeight: number = DEFAULT_MIN_HEIGHT;

    /**
     * 最大宽度
     */
    @isPstNumber()
    public maxWidth: number = DEFAULT_MAX_WIDTH;

    /**
     * 最大高度
     */
    @isPstNumber()
    public maxHeight: number = DEFAULT_MAX_HEIGHT;

    /**
     * 左边边距
     */
    @isPstNumber()
    public left: number = (DEFAULT_MAX_WIDTH - this.width) / 2;

    /**
     * 右边边距
     */
    @isPstNumber()
    public top: number = (DEFAULT_MAX_HEIGHT - this.height) / 2;

    /**
     * 边框样式
     */
    @combine({
        width: checkPstInt, /** 正整数 */
        style: [BorderStyle.SOLID, BorderStyle.DOUBLE, BorderStyle.DOTTED, BorderStyle.DASHED], /** 可选值 */
        color: checkNoEmptyOrNull,  /** 非空字符串 */
        radius: checkPstInt /** 正整数 */
    }, false)
    public border: BorderOption | false = <BorderOption>{
        width: DEFAULT_BORDER_WIDTH,
        style: DEFAULT_BORDER_STYLE,
        color: DEFAULT_BORDER_COLOR,
        radius: DEFAULT_BORDER_RADIUS
    };

    /**
     * 阴影
     */
    @isBoolean()
    public boxShadow: boolean = true;

    /**
     * 创建控件元素对象
     * @returns HTMLElement
     */
    present(): HTMLElement {
        const element = document.createElement("div");
        element.id = `${this.entry.prefix + this.id}`;

        addCSSClasses(element,
            "window",
            this.boxShadow ? "box-shadow" : undefined);

        addCSSStyles(element,
            <CSSStyleDeclaration>{
                zIndex: `${this.entry.zIndex}`,
                width: `${this.width}px`,
                height: `${this.height}px`,
                maxWidth: this.maxWidth !== innerWidth ? `${this.maxWidth}px` : null,
                maxHeight: this.maxHeight !== innerHeight ? `${this.maxHeight}px` : null,
                minWidth: `${this.minWidth}px`,
                minHeight: `${this.minHeight}px`,
                left: `${this.left}px`,
                top: `${this.top}px`,
                border: this.border === false ? null :
                    `${this.border.width}px ${this.border.style} ${this.border.color}`,
                borderRadius: this.border === false ? null :
                    `${this.border.radius}px`,
                webkitBorderRadius: this.border === false ? null :
                    `${this.border.radius}px`,
            });

        return element;
    }

    /**
     * 处理初始传入参数
     * @param options 控件支持传入可选参数
     * @returns void
     */
    handlerOptions(options: UIWindowOption): void {
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
        this.border = <BorderOption | false>options?.border ?? this.border;
        this.boxShadow = options?.boxShadow ?? this.boxShadow;
    }
}