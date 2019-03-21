import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import * as Types from "../../types";
import * as ElementHelper from "../utils/ElementHelper";
import * as Enums from "../basic/enums";
import * as CastHelper from "../utils/CastHelper";

export default class UIContextMenuButton extends UIWindowComponent implements UIControl {
    public static readonly height: number = 34;
    private verticalPadding: number = 5;

    public readonly elementId: string;
    public readonly type: string;

    public id: string;
    public label: string;
    public handler?: (ev: MouseEvent, window: UIWindow) => void;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, window: UIWindow, type: string, options: Types.ContextMenuButtonOption) {
        super(app, window);

        this.type = CastHelper.stringCast(type);

        this.id = CastHelper.stringCast(options.id);
        this.label = CastHelper.stringCast(options.label);
        this.handler = options.handler;

        this.elementId = `${this.window.elementId}-${this.type}-${Enums.ComponentType.CONTEXT_MENU_BUTTON}-${this.id}`;
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const contextMenuElement = ElementHelper.createElement("div");
        contextMenuElement.id = this.elementId;

        ElementHelper.addClasses(contextMenuElement, this.app.prefix,
            Enums.ComponentType.CONTEXT_MENU_BUTTON
        );

        ElementHelper.addStyles(contextMenuElement, <Types.CSSStyleObject>{
            height: `${UIContextMenuButton.height}px`,
            lineHeight: `${UIContextMenuButton.height - this.verticalPadding * 2}px`
        });

        contextMenuElement.addEventListener("mousedown", (ev: MouseEvent) => {
            if (ev.button === 0 && typeof this.handler === "function") {
                this.handler(ev, this.window);
            }
        });

        const labelElement = ElementHelper.createElement("label");
        ElementHelper.addClasses(labelElement, this.app.prefix,
            `${Enums.ComponentType.CONTEXT_MENU_BUTTON}-label`
        );
        labelElement.innerText = this.label;
        contextMenuElement.appendChild(labelElement);

        fragment.appendChild(contextMenuElement);
        return fragment;
    }
}