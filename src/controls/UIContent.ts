import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import UIHtmlContent from "./UIHtmlContent";
import * as Types from "../../types";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";
import * as TypeHelper from "../utils/TypeHelper";

export default class UIContent extends UIWindowComponent implements UIControl {
    public readonly elementId: string = `${this.window.elementId}-${Enums.ComponentType.CONTENT_CONTAINER}`;

    public type: Enums.WindowContentType = Enums.WindowContentType.HTML;
    public value: string | Element = "";

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, window: UIWindow, options: Types.ContentOption) {
        super(app, window);

        this.type = CastHelper.contentTypeCast(options.type, this.type);
        this.value = CastHelper.stringOrElementCast(options.value);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const contentElement = ElementHelper.createElement("div");
        contentElement.setAttribute("data-window-id", this.window.id);
        contentElement.id = this.elementId;

        ElementHelper.addClasses(contentElement, this.app.prefix,
            Enums.ComponentType.CONTENT_CONTAINER,
            `${Enums.ComponentType.CONTENT_CONTAINER}-fade-out`,
            "flex-item"
        );

        ElementHelper.addClasses(contentElement, this.app.prefix,
            Enums.ComponentType.CONTENT_CONTAINER
        );

        switch (this.type) {
            case Enums.WindowContentType.HTML:
                const htmlContent = new UIHtmlContent(this.app, this.window, this.value);
                const htmlElement = htmlContent.present();
                contentElement.appendChild(htmlElement);
                break;
        }

        fragment.appendChild(contentElement);
        return fragment;
    }
}