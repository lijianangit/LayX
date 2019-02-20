import { Layx } from "../types/Index";
import { getKebabCase } from "../utils/ValueHelper";
import UIWindow from "./base/UIWindow";
import UIComponent from "./base/UIComponent";

export default class StatuBar extends UIComponent {
    readonly name: string = "statuBar";

    width: number = 60;
    background: string = "#eeeef2";

    constructor(window: UIWindow, layx: Layx) {
        super(window, layx);

        if (typeof window.sideBar === "object") {
            this.width = window.sideBar.width || this.width;
            this.background = window.sideBar.background || this.background;
        }
    }

    createView(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const sideBarElement = document.createElement("div");
        sideBarElement.classList.add(`${this.layx.prefix + getKebabCase(this.name)}`);
        sideBarElement.style.width = `${this.width}px`;
        sideBarElement.style.background = this.background;

        fragment.appendChild(sideBarElement);
        return fragment;
    }
}