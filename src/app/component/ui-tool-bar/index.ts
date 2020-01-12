import { Component } from '../';
import { admix, isColor, isPstNumber } from '../../core/decorator/property-decorator';
import { addCSSClasses, addCSSStyles, createDivElement } from '../../core/helper/element-helper';
import { checkColor, checkNoEmptyOrNull, checkPstInt, checkString } from '../../core/validator';
import { DEFAULT_TOOLBAR_BACKGROUND_COLOR, DEFAULT_TOOLBAR_HEIGHT } from '../../entry/const';
import { UIComponent } from '../ui-component';
import { ComponentElement } from '../ui-component/type';
import { UIICon } from '../ui-icon';
import { UIIconOption } from '../ui-icon/type';
import { Align } from './const';
import { handlerOptions } from './partial';
import { TitleBarOption, UIToolBarOption } from './type';

/**
 * 工具栏类
 */
export class UIToolBar extends Component<UIToolBarOption> implements UIComponent<UIToolBarOption> {
    /**
     * 构造函数
     * @param options 可选参数
     */
    public constructor(options: UIToolBarOption) {
        super();
        this.handlerOptions(options);
    }

    /**
     * 处理初始传入参数
     * @param options 可选参数
     * @returns void
     */
    handlerOptions: (options: UIToolBarOption) => void = handlerOptions;

    /**
     * 标题
     */
    @admix({
        label: checkString,
        color: checkColor,
        align: [Align.LEFT, Align.CENTER, Align.RIGHT],
        fontSize: checkPstInt
    }, false)
    public titleBar: TitleBarOption | false = <TitleBarOption | false>this.fromJSONPath("window/toolBar/titleBar", false);

    /**
     * 默认高度
     */
    @isPstNumber()
    public height: number = this.fromJSONPath("window/toolBar/height", DEFAULT_TOOLBAR_HEIGHT);

    /**
     * 背景颜色
     */
    @isColor()
    public backgroundColor: string = this.fromJSONPath("window/toolBar/backgroundColor", DEFAULT_TOOLBAR_BACKGROUND_COLOR)

    /**
     * 图标
     */
    @admix({
        name: checkNoEmptyOrNull,
        size: checkPstInt,
        color: checkColor
    }, false)
    public icon: UIIconOption | false = <UIIconOption | false>this.fromJSONPath("window/toolBar/icon", false);

    /**
     * 创建组件元素对象
     * @returns ComponentElement
     */
    present(): ComponentElement {
        const element = createDivElement();

        addCSSClasses(element,
            "tool-bar",
            "flex-box",
            "vertical-middle");

        addCSSStyles(element,
            <CSSStyleDeclaration>{
                height: `${this.height}px`,
            });

        this.appendChild(element);

        return element;
    }

    /**
     * 追加子元素
     * @param element 父元素
     * @returns void
     */
    private appendChild(element: HTMLDivElement): void {
        if (this.icon !== false) {
            const uiIcon = new UIICon(this.icon);
            const uiIconElement = uiIcon.present();
            addCSSClasses(uiIconElement, "tool-bar-icon");
            element.appendChild(uiIconElement);
        }

        if (this.titleBar !== false) {
            const titleBarElement = createDivElement();

            addCSSClasses(titleBarElement,
                "title-bar",
                "flex-item");

            addCSSStyles(titleBarElement,
                <CSSStyleDeclaration>{
                    color: `${this.titleBar.color}`,
                    textAlign: `${this.titleBar.align}`,
                    fontSize: `${this.titleBar.fontSize}px`
                });

            titleBarElement.textContent = <string>this.titleBar.label;

            element.appendChild(titleBarElement);

        }
    }
}