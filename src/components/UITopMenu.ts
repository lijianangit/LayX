import { getKebabCase } from "../utils/ValueHelper";
import UIWindow from "./base/UIWindow";
import UIComponent from "./base/UIComponent";
import AppProcess from "../core/AppProcess";
import { batchClasses, batchStyles } from "../utils/StyleHelper";

export default class UITopMenu extends UIComponent {
    readonly name: string = "topMenu";

    background: string = "#eeeef2";

    constructor(window: UIWindow, app: AppProcess) {
        super(window, app);

        if (typeof window.topMenu === "object") {
            window.topMenu.background = this.background = window.topMenu.background || this.background;
        }
    }

    createView(): DocumentFragment | undefined {
        const fragment = document.createDocumentFragment();

        const topMenuElement = document.createElement("div");

        topMenuElement.classList.add(...batchClasses(this.app.prefix, getKebabCase(this.name)));
        batchStyles(topMenuElement, <CSSStyleDeclaration>{
            background: this.background
        });

        fragment.appendChild(topMenuElement);
        return fragment;
    }
}