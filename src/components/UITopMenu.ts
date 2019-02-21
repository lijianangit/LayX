import { getKebabCase } from "../utils/ValueHelper";
import UIWindow from "./base/UIWindow";
import UIComponent from "./base/UIComponent";
import AppProcess from "../core/AppProcess";

export default class UITopMenu extends UIComponent {
    readonly name: string = "topMenu";

    background: string = "#eeeef2";

    constructor(window: UIWindow, app: AppProcess) {
        super(window, app);

        if (typeof window.topMenu === "object") {
            this.background = window.topMenu.background || this.background;
        }
    }

    createView(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const topMenuElement = document.createElement("div");
        topMenuElement.classList.add(`${this.app.prefix + getKebabCase(this.name)}`);
        topMenuElement.style.background = this.background;

        fragment.appendChild(topMenuElement);
        return fragment;
    }
}