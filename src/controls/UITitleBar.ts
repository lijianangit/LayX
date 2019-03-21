import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIIcon from "./UIIcon";
import * as ElementHelper from "../utils/ElementHelper";
import * as Types from "../../types";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";

export default class UITitleBar extends UIWindowComponent implements UIControl {
    public readonly elementId: string = `${this.window.elementId}-${Enums.ComponentType.TITLE_BAR}`;

    public icon: string | false = "icon";
    public title?: string;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, window: UIWindow, options: Types.TitleBarOption) {
        super(app, window);

        this.icon = CastHelper.typeOrBooleanCast(options.icon, this.icon);
        this.title = options.title;
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const titleBarElement = ElementHelper.createElement("div");
        titleBarElement.id = this.elementId;

        ElementHelper.addClasses(titleBarElement, this.app.prefix,
            Enums.ComponentType.TITLE_BAR,
            "flexbox",
            "flex-row",
            "flex-vertical-center"
        );

        if (this.icon) {
            const windowIconElement = ElementHelper.createElement("div");
            ElementHelper.addClasses(windowIconElement, this.app.prefix,
                "window-icon",
                "flexbox",
                "flex-center"
            );

            windowIconElement.addEventListener("dblclick", (ev: MouseEvent) => {
                ev.stopPropagation();

                this.window.destroy();
            });

            titleBarElement.appendChild(windowIconElement);

            const icon = new UIIcon(this.app, this.window, this.icon);
            const iconElement = icon.present();
            windowIconElement.appendChild(iconElement);
        }

        if (this.title) {
            const titleElement = ElementHelper.createElement("div");
            ElementHelper.addClasses(titleElement, this.app.prefix,
                "window-title"
            );

            const labelElement = document.createElement("label");
            ElementHelper.addClasses(labelElement, this.app.prefix,
                "window-title-label"
            );
            labelElement.innerText = this.title;

            titleElement.appendChild(labelElement);
            titleBarElement.appendChild(titleElement);
        }

        fragment.appendChild(titleBarElement);
        return fragment;
    }
}