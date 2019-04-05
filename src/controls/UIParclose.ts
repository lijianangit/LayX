import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import * as Types from "../../types";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";

export default class UIParclose extends UIWindowComponent implements UIControl {
    public readonly elementId: string = `${this.window.elementId}-${Enums.ComponentType.PARCLOSE}`;

    public opacity: number = 0;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, window: UIWindow, options: Types.ParcloseOption) {
        super(app, window);

        this.opacity = CastHelper.numberCast(options.opacity, this.opacity);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const parcloseElement = ElementHelper.createElement("div");
        parcloseElement.setAttribute("data-window-id", this.window.id);
        parcloseElement.id = this.elementId;

        ElementHelper.addClasses(parcloseElement, this.app.prefix,
            Enums.ComponentType.PARCLOSE
        );

        ElementHelper.addStyles(parcloseElement, <Types.CSSStyleObject>{
            backgroundColor: `rgba(0,0,0,${this.opacity})`,
            zIndex: `${this.window.zIndex - 1}`
        });

        this.bindEvent(parcloseElement);

        fragment.appendChild(parcloseElement);
        return fragment;
    }

    updateZIndex(zIndex: number): void {
        ElementHelper.addStyles(this.element, <Types.CSSStyleObject>{
            zIndex: `${zIndex}`
        });
    }

    private bindEvent(parcloseElement: HTMLElement): void {
        parcloseElement.addEventListener("mousedown", (ev: MouseEvent) => {
            this.window.flicker();
        }, true);

        parcloseElement.addEventListener("contextmenu", (ev: MouseEvent) => {
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        });
    }
}