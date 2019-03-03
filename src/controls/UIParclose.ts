import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindowRelative from "../basic/models/UIWindowRelative";
import UIWindow from "./UIWindow";
import { getKebabCase } from "../utils/StringHelper";
import { addClasses, addStyles } from "../utils/ElementHelper";
import { ParcloseOptions, CSSStyleObject } from "../../types";
import { assertNever } from "../utils/ExceptionHelper";

export default class UIParclose extends UIWindowRelative implements UIControl {
    readonly kind: string = "parclose";

    private _opacity: number | false = 0;
    get opacity() {
        return this._opacity;
    }
    set opacity(value: number | false) {
        this._opacity = value;
    }

    constructor(app: App, window: UIWindow, options: ParcloseOptions) {
        super(app, window);
        this._opacity = options.opacity === undefined ? this._opacity : options.opacity;
        if (!(typeof this._opacity === "number" || this._opacity === false)) {
            assertNever(this._opacity);
        }
    }

    present(): DocumentFragment {
        const fragment = document.createDocumentFragment();
        if (this.opacity === false) return fragment;

        const parcloseElement = document.createElement("div");
        parcloseElement.id = `${this.window.elementId}-${getKebabCase(this.kind)}`;

        addClasses(parcloseElement, this.app.prefix,
            getKebabCase(this.kind)
        );

        addStyles(parcloseElement, <CSSStyleObject>{
            backgroundColor: `rgba(0,0,0,${this.opacity})`
        });

        parcloseElement.addEventListener("click", (ev: MouseEvent) => {
            this.window.hideContextMenu();
            this.window.flicker();
        }, false);

        parcloseElement.addEventListener("contextmenu", (ev: MouseEvent) => {
            ev.preventDefault();
            this.window.hideContextMenu();
            ev.returnValue = false;
            return false;
        });

        fragment.appendChild(parcloseElement);
        return fragment;
    }
}