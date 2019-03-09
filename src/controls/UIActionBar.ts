import UIToolBarComponent from "../basic/models/UIToolBarComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIToolBar from "./UIToolBar";
import * as Types from "../../types";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";

export default class UIActionBar extends UIToolBarComponent implements UIControl {
    readonly kind: string = "actionBar";

    constructor(app: App, window: UIWindow, toolBar: UIToolBar) {
        super(app, window, toolBar);
    }

    present(): DocumentFragment | null {
        const fragment = document.createDocumentFragment();
        const kebabCase = StringHelper.getKebabCase(this.kind);
        const actionBarElement = document.createElement("div");

        ElementHelper.addClasses(actionBarElement, this.app.prefix,
            kebabCase
        );

        fragment.appendChild(actionBarElement);
        return fragment;
    }
}