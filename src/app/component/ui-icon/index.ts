import { Component } from '../';
import { isColor, isNoEmptyOrNull, isPstInt } from '../../core/decorator/property-decorator';
import { addCSSClasses, createDivElement, createSvgElement } from '../../core/helper/element-helper';
import { UIComponent } from '../ui-component';
import { ComponentElement } from '../ui-component/type';
import { DEFAULT_ICON, DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from './const';
import { handlerOptions } from './partial';
import { UIIconOption } from './type';

export class UIICon extends Component<UIIconOption> implements UIComponent<UIIconOption> {
    /**
    * 构造函数
    * @param options 可选参数
    */
    public constructor(options: UIIconOption) {
        super();
        this.handlerOptions(options);
    }

    /**
     * 处理初始传入参数
     * @param options 可选参数
     * @returns void
     */
    handlerOptions: (options: UIIconOption) => void = handlerOptions;

    /**
     * 图标名称
     */
    @isNoEmptyOrNull()
    public name: string = DEFAULT_ICON;

    /**
     * 图标颜色
     */
    @isColor()
    public color: string = DEFAULT_ICON_COLOR;

    /**
     * 图标大小
     */
    @isPstInt()
    public size: number = DEFAULT_ICON_SIZE;

    /**
     * 创建组件元素对象
     * @returns ComponentElement
     */
    present(): ComponentElement {
        const element = createDivElement();

        addCSSClasses(element,
            "icon");

        const svgElement = createSvgElement(this.name);
        svgElement.setAttribute("class", `${this.entry.prefix}svg`);
        svgElement.style.fontSize = `${this.size}px`;
        svgElement.style.color = `${this.color}`;
        element.appendChild(svgElement);

        return element;
    }
}