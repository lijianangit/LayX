import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIActionButton from "./UIActionButton";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";
import * as Types from "../../types";
import * as CastHelper from "../utils/CastHelper";

export default class UITabBar extends UIWindowComponent implements UIControl {
    public readonly kind: string = "tabBar";

    constructor(app: App, window: UIWindow, options: Types.TabBarOption) {
        super(app, window);
    }

    present(): DocumentFragment | null {
        const fragment = document.createDocumentFragment();
        const kebabCase = StringHelper.getKebabCase(this.kind);
        const tabBarElement = document.createElement("div");

        ElementHelper.addClasses(tabBarElement, this.app.prefix,
            kebabCase,
            "flexbox",
            "flex-item",
            "flex-row"
        );

        fragment.appendChild(tabBarElement);

        return fragment;
    }
}