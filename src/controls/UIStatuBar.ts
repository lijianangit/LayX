import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import * as Types from "../../types";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";
import * as EventHelper from "../utils/EventHelper";
import * as TypeHelper from "../utils/TypeHelper";

export default class UIStatuBar extends UIWindowComponent implements UIControl {
    public readonly elementId: string = `${this.window.elementId}-${Enums.ComponentType.STATU_BAR}`;

    public height: number = 30;
    public background: string | null = "#e5e5e5";
    public content: string | Element = "";

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, window: UIWindow, options: Types.StatuBarOption) {
        super(app, window);

        this.height = CastHelper.numberCast(options.height, this.height);
        this.background = CastHelper.stringOrBooleanStyleCast(options.background, this.background);
        this.content = CastHelper.stringOrElementCast(options.content);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const statuBarElement = ElementHelper.createElement("div");
        statuBarElement.setAttribute("data-window-id", this.window.id);
        statuBarElement.id = this.elementId;

        ElementHelper.addClasses(statuBarElement, this.app.prefix,
            Enums.ComponentType.STATU_BAR
        );

        ElementHelper.addStyles(statuBarElement, <Types.CSSStyleObject>{
            height: `${this.height}px`,
            background: `${this.background}`
        });

        if (TypeHelper.isElement(this.content)) {
            const newElement = this.content.cloneNode(true);

            ElementHelper.addStyles(<HTMLElement>newElement, <Types.CSSStyleObject>{
                display: 'inherit'
            });

            statuBarElement.appendChild(newElement);
        }
        else statuBarElement.innerHTML = this.content;

        fragment.appendChild(statuBarElement);
        return fragment;
    }
}