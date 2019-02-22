import { getKebabCase } from "../utils/ValueHelper";
import UIWindow from "./base/UIWindow";
import UIComponent from "./base/UIComponent";
import AppProcess from "../core/AppProcess";
import { batchClasses, batchStyles } from "../utils/StyleHelper";

export default class UIToolBar extends UIComponent {
    readonly name: string = "toolBar";

    private _height: number = 30;
    get height(): number {
        return this._height;
    }
    set height(newValue: number) {
        this._height = newValue;
        if (typeof this.window.toolBar === "object") {
            this.window.toolBar.height = newValue;
        }
    }

    private _background: string = "#ffffff";
    get background(): string {
        return this._background;
    }
    set background(newValue: string) {
        this._background = newValue;
        if (typeof this.window.toolBar === "object") {
            this.window.toolBar.background = newValue;
        }
    }

    constructor(window: UIWindow, app: AppProcess) {
        super(window, app);
        if (typeof window.toolBar === "object") {
            this.height = window.toolBar.height || this.height;
            this.background = window.toolBar.background || this.background;
        }
    }

    createView(): DocumentFragment | undefined {
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