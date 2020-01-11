import Component from '../';
import { isPstNumber, isColor } from '../../core/decorator/property-decorator';
import { addCSSClasses, addCSSStyles, createDivElement } from '../../core/helper/element-helper';
import UIComponent from '../ui-component';
import { handlerOptions } from './partial';
import { UIToolBarOption } from './type';

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
     * 默认高度
     */
    @isPstNumber()
    public height: number = <number>this.entry.window.toolBar?.height;

    /**
     * 背景颜色
     */
    @isColor()
    public backgroundColor: string = <string>this.entry.window.toolBar?.backgroundColor;

    /**
     * 创建组件元素对象
     * @returns HTMLElement
     */
    present(): HTMLElement {
        const element = createDivElement();

        addCSSClasses(element,
            "tool-bar");

        addCSSStyles(element,
            <CSSStyleDeclaration>{
                height: `${this.height}px`,
            });

        return element;
    }
}