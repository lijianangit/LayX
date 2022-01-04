import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIComponent from "../basic/models/UIComponent";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";

export default class UIIcon extends UIComponent implements UIControl {
    public readonly name: string;
    public readonly className: string = `${this.app.prefix + Enums.ComponentType.ICON}`;

    constructor(app: App, name: string) {
        super(app);

        this.name = CastHelper.stringCast(name);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const iconElement = ElementHelper.createElementNS("svg");
        iconElement.setAttribute("class", this.className);

        const useElement = ElementHelper.createElementNS("use");
        useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `#${this.name}`);
        iconElement.appendChild(useElement);

        fragment.appendChild(iconElement);
        return fragment;
    }
}