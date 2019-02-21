import { getKebabCase } from "../utils/ValueHelper";
import UIWindow from "./base/UIWindow";
import UIComponent from "./base/UIComponent";
import AppProcess from "../core/AppProcess";

export default class UISideBar extends UIComponent {
    readonly name: string = "sideBar";

    width: number = 60;
    background: string = "#eeeef2";

    constructor(window: UIWindow, app: AppProcess) {
        super(window, app);

        if (typeof window.sideBar === "object") {
            this.width = window.sideBar.width || this.width;
            this.background = window.sideBar.background || this.background;
        }
    }

    createView(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const sideBarElement = document.createElement("div");
        sideBarElement.classList.add(`${this.app.prefix + getKebabCase(this.name)}`);
        sideBarElement.style.width = `${this.width}px`;
        sideBarElement.style.background = this.background;

        fragment.appendChild(sideBarElement);
        return fragment;
    }
}