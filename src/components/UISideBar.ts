import { getKebabCase } from "../utils/ValueHelper";
import UIWindow from "./base/UIWindow";
import UIComponent from "./base/UIComponent";
import AppProcess from "../core/AppProcess";
import { batchClasses, batchStyles } from "../utils/StyleHelper";

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
        sideBarElement.classList.add(...batchClasses(this.app.prefix, getKebabCase(this.name)));

        batchStyles(sideBarElement, <CSSStyleDeclaration>{
            width: `${this.width}px`,
            background: this.background
        });

        fragment.appendChild(sideBarElement);
        return fragment;
    }
}