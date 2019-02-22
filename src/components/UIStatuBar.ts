import { getKebabCase } from "../utils/ValueHelper";
import UIWindow from "./base/UIWindow";
import UIComponent from "./base/UIComponent";
import AppProcess from "../core/AppProcess";
import { batchClasses, batchStyles } from "../utils/StyleHelper";

export default class StatuBar extends UIComponent {
    readonly name: string = "statuBar";

    width: number = 60;
    background: string = "#eeeef2";

    constructor(window: UIWindow, app: AppProcess) {
        super(window, app);

        if (typeof window.sideBar === "object") {
            window.sideBar.width = this.width = window.sideBar.width || this.width;
            window.sideBar.background = this.background = window.sideBar.background || this.background;
        }
    }

    createView(): DocumentFragment | undefined {
        const fragment = document.createDocumentFragment();

        const statuBarElement = document.createElement("div");

        statuBarElement.classList.add(...batchClasses(this.app.prefix, getKebabCase(this.name)));
        batchStyles(statuBarElement, <CSSStyleDeclaration>{
            width: `${this.width}px`,
            background: this.background
        });

        fragment.appendChild(statuBarElement);
        return fragment;
    }
}