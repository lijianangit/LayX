import { getKebabCase } from "../utils/ValueHelper";
import UIWindow from "./base/UIWindow";
import UIComponent from "./base/UIComponent";
import AppProcess from "../core/AppProcess";
import { batchClasses, batchStyles } from "../utils/StyleHelper";

export default class StatuBar extends UIComponent {
    readonly name: string = "statuBar";

    private _height: number = 60;
    get height(): number {
        return this._height;
    }
    set height(newValue: number) {
        this._height = newValue;
        if (typeof this.window.statuBar === "object") {
            this.window.statuBar.height = newValue;
        }
    }

    private _background: string = "#eeeef2";
    get background(): string {
        return this._background;
    }
    set background(newValue: string) {
        this._background = newValue;
        if (typeof this.window.statuBar === "object") {
            this.window.statuBar.background = newValue;
        }
    }

    constructor(window: UIWindow, app: AppProcess) {
        super(window, app);

        if (typeof window.statuBar === "object") {
            this.height = window.statuBar.height || this.height;
            this.background = window.statuBar.background || this.background;
        }
    }

    createView(): DocumentFragment | undefined {
        const fragment = document.createDocumentFragment();

        const statuBarElement = document.createElement("div");

        statuBarElement.classList.add(...batchClasses(this.app.prefix, getKebabCase(this.name)));
        batchStyles(statuBarElement, <CSSStyleDeclaration>{
            height: `${this.height}px`,
            background: this.background
        });

        fragment.appendChild(statuBarElement);
        return fragment;
    }
}