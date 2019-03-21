import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import * as ElementHelper from "../utils/ElementHelper";
import * as Types from "../../types";
import * as Enums from "../basic/enums";

export default class UITabBar extends UIWindowComponent implements UIControl {
    public readonly elementId: string = `${this.window.elementId}-${Enums.ComponentType.TAB_BAR}`;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, window: UIWindow, options: Types.TabBarOption) {
        super(app, window);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const tabBarElement = ElementHelper.createElement("div");
        tabBarElement.id = this.elementId;

        ElementHelper.addClasses(tabBarElement, this.app.prefix,
            Enums.ComponentType.TAB_BAR,
            "flexbox",
            "flex-item",
            "flex-row"
        );

        fragment.appendChild(tabBarElement);
        return fragment;
    }
}