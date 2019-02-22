import { getKebabCase } from "../utils/ValueHelper";
import UIWindow from "./base/UIWindow";
import UIComponent from "./base/UIComponent";
import AppProcess from "../core/AppProcess";
import { batchClasses, batchStyles } from "../utils/StyleHelper";

export default class UISideBar extends UIComponent {
    readonly name: string = "sideBar";

    private _width: number = 60;
    get width(): number {
        return this._width;
    }
    set width(newValue: number) {
        this._width = newValue;
        if (typeof this.window.sideBar === "object") {
            this.window.sideBar.width = newValue;
        }
    }

    private _background: string = "#eeeef2";
    get background(): string {
        return this._background;
    }
    set background(newValue: string) {
        this._background = newValue;
        if (typeof this.window.sideBar === "object") {
            this.window.sideBar.background = newValue;
        }
    }

    constructor(window: UIWindow, app: AppProcess) {
        super(window, app);

        if (typeof window.sideBar === "object") {
            this.width = window.sideBar.width || this.width;
            this.background = window.sideBar.background || this.background;
        }
    }

    createView(): DocumentFragment | undefined {
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