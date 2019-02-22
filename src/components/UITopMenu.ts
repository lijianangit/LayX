import { getKebabCase } from "../utils/ValueHelper";
import UIWindow from "./base/UIWindow";
import UIComponent from "./base/UIComponent";
import AppProcess from "../core/AppProcess";
import { batchClasses, batchStyles } from "../utils/StyleHelper";

export default class UITopMenu extends UIComponent {
    readonly name: string = "topMenu";

    private _background: string = "#eeeef2";
    get background(): string {
        return this._background;
    }
    set background(newValue: string) {
        this._background = newValue;
        if (typeof this.window.topMenu === "object") {
            this.window.topMenu.background = newValue;
        }
    }

    constructor(window: UIWindow, app: AppProcess) {
        super(window, app);

        if (typeof window.topMenu === "object") {
            this.background = window.topMenu.background || this.background;
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