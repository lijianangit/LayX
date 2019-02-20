import { Layx } from "../types/Index";
import { getKebabCase } from "../utils/ValueHelper";
import UIWindow from "./base/UIWindow";
import UIComponent from "./base/UIComponent";

export default class UITopMenu extends UIComponent {
    readonly name: string = "topMenu";

    background: string = "#eeeef2";

    constructor(window: UIWindow, layx: Layx) {
        super(window, layx);

        if (typeof window.topMenu === "object") {
            this.background = window.topMenu.background || this.background;
        }
    }

    createView(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const topMenuElement = document.createElement("div");
        topMenuElement.classList.add(`${this.layx.prefix + getKebabCase(this.name)}`);
        topMenuElement.style.background = this.background;

        fragment.appendChild(topMenuElement);
        return fragment;
    }
}