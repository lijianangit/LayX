import { getKebabCase } from "../utils/ValueHelper";
import UIWindow from "./base/UIWindow";
import UIComponent from "./base/UIComponent";
import AppProcess from "../core/AppProcess";
import { batchClasses, batchStyles } from "../utils/StyleHelper";

export default class UIToolBar extends UIComponent {
    readonly name: string = "toolBar";

    height: number = 30;
    background: string = "#ffffff";

    constructor(window: UIWindow, app: AppProcess) {
        super(window, app);
        if (typeof window.toolBar === "object") {
            this.height = window.toolBar.height || this.height;
            this.background = window.toolBar.background || this.background;
        }
    }

    createView(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const toolBarElement = document.createElement("div");

        toolBarElement.classList.add(...batchClasses(this.app.prefix, getKebabCase(this.name)));
        batchStyles(toolBarElement, <CSSStyleDeclaration>{
            height: `${this.height}px`,
            background: this.background
        });

        fragment.appendChild(toolBarElement);
        return fragment;
    }
}