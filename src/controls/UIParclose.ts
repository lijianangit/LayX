import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowRelative from "../basic/models/UIWindowRelative";
import UIWindow from "./UIWindow";
import * as Types from "../../types";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";
import * as ExceptionHelper from "../utils/ExceptionHelper";

export default class UIParclose extends UIWindowRelative implements UIControl {
    public readonly kind: string = "parclose";
    private opacity: number | false = 0;

    constructor(app: App, window: UIWindow, options: Types.ParcloseOptions) {
        super(app, window);
        this.opacity = options.opacity === undefined ? this.opacity : options.opacity;

        if (!(typeof this.opacity === "number" || this.opacity === false)) {
            ExceptionHelper.assertNever(this.opacity);
        }
    }

    present(): DocumentFragment | null {
        if (this.opacity === false) return null;

        const fragment = document.createDocumentFragment();
        const kebabCase = StringHelper.getKebabCase(this.kind);
        const parcloseElement = document.createElement("div");

        parcloseElement.id = `${this.window.elementId}-${kebabCase}`;

        ElementHelper.addClasses(parcloseElement, this.app.prefix,
            kebabCase
        );

        ElementHelper.addStyles(parcloseElement, <Types.CSSStyleObject>{
            backgroundColor: `rgba(0,0,0,${this.opacity})`
        });

        this.bindEvent(parcloseElement);

        fragment.appendChild(parcloseElement);
        return fragment;
    }

    private bindEvent(element: HTMLElement): void {
        element.addEventListener("mousedown", (ev: MouseEvent) => {
            this.window.flicker();
        }, true);

        element.addEventListener("contextmenu", (ev: MouseEvent) => {
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        });
    }
}