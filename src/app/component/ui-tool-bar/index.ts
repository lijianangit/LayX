import Component from '../';
import { combine, isColor, isPstNumber } from '../../core/decorator/property-decorator';
import { addCSSClasses, addCSSStyles, createDivElement } from '../../core/helper/element-helper';
import { checkColor, checkPstInt, checkString } from '../../core/validator';
import UIComponent from '../ui-component';
import { Align } from './const';
import { handlerOptions } from './partial';
import { TitleBarOption, UIToolBarOption } from './type';

/**
 * 工具栏类
 */
export default class UIToolBar extends Component<UIToolBarOption> implements UIComponent<UIToolBarOption> {
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
    @combine({
        label: checkString,
        color: checkColor,
        align: [Align.LEFT, Align.CENTER, Align.RIGHT],
        fontSize: checkPstInt
    }, false)
    public titleBar: TitleBarOption | false = this.entry.window.toolBar === false ? false : <TitleBarOption>this.entry.window.toolBar?.titleBar;

    /**
     * 默认高度
     */
    @isPstNumber()
    public height: number = this.entry.window.toolBar === false ? 0 : <number>this.entry.window.toolBar?.height;

    /**
     * 背景颜色
     */
    @isColor()
    public backgroundColor: string = this.entry.window.toolBar === false ? "rgba(0,0,0,0)" : <string>this.entry.window.toolBar?.backgroundColor;

    /**
     * 创建组件元素对象
     * @returns HTMLElement
     */
    present(): HTMLElement {
        const element = createDivElement();

        addCSSClasses(element,
            "tool-bar",
            "flex-box",
            "vertical-middle");

        addCSSStyles(element,
            <CSSStyleDeclaration>{
                height: `${this.height}px`,
            });

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

        return element;
    }
}