import { Layx } from "../typings/Index";
import { getKebabCase } from "../utils/ValueHelper";
import UIWindow from "./base/UIWindow";
import UIComponent from "./base/UIComponent";

export default class UIToolBar extends UIComponent {
    readonly name: string = "toolBar";

    height: number = 30;
    background: string = "#ffffff";

    constructor(window: UIWindow, layx: Layx) {
        super(window, layx);
        if (typeof window.toolBar === "object") {
            this.height = window.toolBar.height || this.height;
            this.background = window.toolBar.background || this.background;
        }
    }

    createView(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const toolBarElement = document.createElement("div");
        toolBarElement.classList.add(`${this.layx.prefix + getKebabCase(this.name)}`);
        toolBarElement.style.height = `${this.height}px`;
        toolBarElement.style.background = this.background;

        fragment.appendChild(toolBarElement);
        return fragment;
    }
}