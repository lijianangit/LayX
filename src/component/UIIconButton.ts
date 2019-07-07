import UIComponent from "../core/ui/UIComponent";
import UIControl from "../core/ui/UIControl";
import * as ElementHelper from "../utils/ElementHelper";
import * as Const from "../core/enum/Const";
import StoreState from "../core/store/StoreState";
import * as CastHelper from "../utils/CastHelper";

/**
 * 图标按钮
 */
export default class UIIconButton extends UIComponent implements UIControl {
    /**
     * svg 图标名称
     */
    public readonly icon: string;

    /**
     * 构造函数
     * @param icon svg 图标名称
     */
    constructor(icon: string) {
        super();

        this.icon = CastHelper.stringCast(icon);
    }

    /**
     * 创建页面DOM元素
     * @returns 元素
     */
    createView(): Element {
        const element = ElementHelper.createElement("div");
        element.setAttribute("data-id", this.uniqueId);

        ElementHelper.addClasses(element, StoreState.instance.prefix,
            Const.Component.ICON_BUTTON
        );

        const svgElement = ElementHelper.createElementNS("svg");
        svgElement.setAttribute("class", StoreState.instance.prefix + Const.Component.SVG);

        const useElement = ElementHelper.createElementNS("use");
        useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `#${this.icon}`);
        svgElement.appendChild(useElement);

        element.appendChild(svgElement);
        return element;
    }
}