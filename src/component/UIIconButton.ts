import UIComponent from "../core/ui/UIComponent";
import UIControl from "../core/ui/UIControl";
import * as ElementHelper from "../utils/ElementHelper";
import * as Consts from "../core/enum/Consts";
import StateStore from "../core/store/StateStore";
import * as CastHelper from "../utils/CastHelper";

/**
 * 图标按钮
 */
export default class UIIconButton extends UIComponent implements UIControl {
    /**
     * SVG 图标名称
     */
    private _icon: string;
    get icon(): string {
        return this._icon;
    }
    set icon(value: string) {
        this._icon = CastHelper.stringCast(value);
    }

    /**
     * 构造函数
     * @param icon svg 图标名称
     */
    constructor(icon: string) {
        super();

        this._icon = icon;
    }

    /**
     * 创建页面DOM元素
     * @returns 元素
     */
    createView(): Element {
        const element = ElementHelper.createElement("div");
        element.setAttribute("data-id", this.uniqueId);

        ElementHelper.addClasses(element, StateStore.instance.prefix,
            Consts.Component.ICON_BUTTON
        );

        const svgElement = ElementHelper.createElementNS("svg");
        svgElement.setAttribute("class", StateStore.instance.prefix + Consts.Component.SVG);

        const useElement = ElementHelper.createElementNS("use");
        useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `#${this.icon}`);
        svgElement.appendChild(useElement);

        element.appendChild(svgElement);
        return element;
    }
}