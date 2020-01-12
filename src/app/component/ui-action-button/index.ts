import { Component } from '../';
import {
    admix, isBoolean, isNoEmptyOrNull, isPstInt
} from '../../core/decorator/property-decorator';
import {
    addCSSClasses, addCSSStyles, createDivElement, createSvgElement
} from '../../core/helper/element-helper';
import { checkFunction } from '../../core/validator';
import { UIComponent } from '../ui-component';
import { ComponentElement } from '../ui-component/type';
import { handlerOptions } from './partial';
import { UIActionButtonOption } from './type';
import { UIICon } from '../ui-icon';
import { UIIconOption } from '../ui-icon/type';

/**
 * 操作按钮
 */
export class UIActionButton extends Component<UIActionButtonOption> implements UIComponent<UIActionButtonOption>{
    /**
     * 构造函数
     * @param options 可选参数
     */
    public constructor(options: UIActionButtonOption) {
        super();
        this.name = options.name;
        this.handlerOptions(options);
    }

    /**
     * 处理初始传入参数
     * @param options 可选参数
     * @returns void
     */
    handlerOptions: (options: UIActionButtonOption) => void = handlerOptions;

    /**
     * 名称
     */
    @isNoEmptyOrNull()
    public name: string;

    /**
     * 是否禁用
     */
    @isBoolean()
    public disabled: boolean = false;

    /**
     * 响应处理函数
     */
    @admix(checkFunction, undefined)
    public handler?: (ev: MouseEvent) => void;

    /**
     * 宽度
     */
    @isPstInt()
    public readonly width: number = 45;

    /**
     * 创建组件元素对象
     * @returns ComponentElement
     */
    present(): ComponentElement {
        const element = createDivElement();

        addCSSClasses(element,
            "action-button",
            `action-${this.name}`,
            "flex-box",
            "center-all",
            this.disabled ? "action-button-disabled" : undefined);

        addCSSStyles(element, <CSSStyleDeclaration>{
            width: `${this.width}px`
        })

        if (this.handler) {
            element.addEventListener("click", (ev: MouseEvent) => (<any>this.handler)(ev), true);
        }

        const uiIcon = new UIICon(<UIIconOption>{
            name: this.name
        });
        const svgElement = uiIcon.present();
        element.appendChild(svgElement);
        return element;
    }
}