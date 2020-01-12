import Component from '../';
import {
    combine,
    inValueOptions,
    isBoolean,
    isColor,
    isNoEmptyOrNull,
    isPstNumber,
} from '../../core/decorator/property-decorator';
import {
    addCSSClasses,
    addCSSStyles,
    createDivElement,
    hasCSSClass,
    removeCSSClasses,
} from '../../core/helper/element-helper';
import { checkColor, checkNoEmptyOrNull, checkPstInt, checkPstNumber, checkString } from '../../core/validator';
import { DEFAULT_WINDOW_BACKGROUND_COLOR, DEFAULT_WINDOW_HEIGHT, DEFAULT_WINDOW_WIDTH } from '../../entry/const';
import UIComponent from '../ui-component';
import { ComponentElement } from '../ui-component/type';
import UIToolBar from '../ui-tool-bar';
import { Align } from '../ui-tool-bar/const';
import { UIToolBarOption } from '../ui-tool-bar/type';
import {
    Animation,
    BorderStyle,
    DEFAULT_BORDER_COLOR,
    DEFAULT_BORDER_RADIUS,
    DEFAULT_BORDER_STYLE,
    DEFAULT_BORDER_WIDTH,
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MAX_WIDTH,
    DEFAULT_MIN_HEIGHT,
    DEFAULT_MIN_WIDTH,
} from './const';
import { handlerOptions } from './partial';
import { BorderOption, UIWindowOption } from './type';

/**
 * 窗口组件类
 */
export default class UIWindow extends Component<UIWindowOption> implements UIComponent<UIWindowOption> {
    /**
     * 构造函数
     * @param options 可选参数
     */
    public constructor(options: UIWindowOption) {
        super();

        this.id = options?.id;
        this.handlerOptions(options);
    }

    /**
     * 处理初始传入参数
     * @param options 可选参数
     * @returns void
     */
    handlerOptions: (options: UIWindowOption) => void = handlerOptions;

    /**
     * 唯一Id
     */
    @isNoEmptyOrNull()
    public readonly id: string;

    /**
     * 宽度
     */
    @isPstNumber()
    public width: number = <number>this.evaluateOrReturnDefault("window/width", DEFAULT_WINDOW_WIDTH);

    /**
     * 高度
     */
    @isPstNumber()
    public height: number = <number>this.evaluateOrReturnDefault("window/height", DEFAULT_WINDOW_HEIGHT);

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
        color: checkColor,  /** 非空字符串 */
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
     * 动画
     */
    @inValueOptions(Animation.ZOOM, false)
    public animate: false | Animation = Animation.ZOOM;

    /**
     * 背景颜色
     */
    @isColor()
    public backgroundColor: string = <string>this.evaluateOrReturnDefault("window/backgroundColor", DEFAULT_WINDOW_BACKGROUND_COLOR);

    /**
     * 工具栏
     */
    @combine({
        height: checkPstNumber,
        backgroundColor: checkColor,
        titleBar: {
            decorator: {
                label: checkString,
                color: checkColor,
                align: [Align.LEFT, Align.CENTER, Align.RIGHT],
                fontSize: checkPstInt
            },
            options: [false]
        },
        icon: {
            decorator: {
                name: checkNoEmptyOrNull,
                size: checkPstInt,
                color: checkColor
            },
            options: [false]
        }
    }, false)
    public toolBar: UIToolBarOption | false = <UIToolBarOption | false>this.evaluateOrReturnDefault("window/toolBar", false);

    /**
     * 窗口元素对象
     */
    public windowElement: HTMLDivElement | null = null;

    /**
     * 创建组件元素对象
     * @returns ComponentElement
     */
    present(): ComponentElement {
        const element = createDivElement(`${this.entry.prefix + this.id}`);
        this.windowElement = element;

        addCSSClasses(element,
            "window",
            "flex-box",
            "col-direction",
            this.boxShadow ? "box-shadow" : undefined,
            this.animate !== false ? "animate" : undefined,
            this.animate !== false ? `animate-${this.animate}-show` : undefined);

        addCSSStyles(element,
            <CSSStyleDeclaration>{
                backgroundColor: `${this.backgroundColor}`,
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

        this.appendChild(element);

        this.monitorEvent();

        this.sendEvent("window:create", { id: this.id });
        return element;
    }

    /**
     * 追加子元素
     * @param element 父元素
     * @returns void
     */
    private appendChild(element: HTMLDivElement): void {
        if (this.toolBar !== false) {
            const uiToolBar = new UIToolBar(this.toolBar);
            const uiToolBarElement = uiToolBar.present();
            element.appendChild(uiToolBarElement);
        }
    }

    /**
     * 监听事件
     * @returns void 
     */
    private monitorEvent(): void {
        if (!this.windowElement) return;

        if (this.animate !== false) {
            this.windowElement.addEventListener("animationend", (ev: AnimationEvent) => {

                // 新建或显示窗口
                const animateShowName = `animate-${this.animate}-show`;
                if (hasCSSClass(this.windowElement, animateShowName)) {
                    removeCSSClasses(this.windowElement, animateShowName);
                    this.sendEvent("window:show", { id: this.id });
                }

            });
        }
    }
}