import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIIcon from "./UIIcon";
import * as ElementHelper from "../utils/ElementHelper";
import * as Types from "../../types";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";
import UIContextMenuBar from "./UIContextMenuBar";
import UIToolBar from "./UIToolBar";

export default class UITitleBar extends UIWindowComponent implements UIControl {
    public readonly elementId: string = `${this.window.elementId}-${Enums.ComponentType.TITLE_BAR}`;

    public icon: string | false = "icon";
    public title: string | undefined = undefined;
    public useSubTitle: boolean = false;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, window: UIWindow, options: Types.TitleBarOption) {
        super(app, window);

        this.icon = CastHelper.typeOrBooleanCast(options.icon, this.icon);
        this.title = options.title;
        this.useSubTitle = CastHelper.booleanCast(options.useSubTitle, this.useSubTitle);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const titleBarElement = ElementHelper.createElement("div");
        titleBarElement.setAttribute("data-window-id", this.window.id);
        titleBarElement.id = this.elementId;

        ElementHelper.addClasses(titleBarElement, this.app.prefix,
            Enums.ComponentType.TITLE_BAR,
            "flexbox",
            "flex-row",
            "flex-vertical-center"
        );

        if (this.icon) {
            const windowIconElement = ElementHelper.createElement("div");
            windowIconElement.setAttribute("data-window-id", this.window.id);

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

            const icon = new UIIcon(this.app, this.icon);
            const iconElement = icon.present();
            windowIconElement.appendChild(iconElement);

            this.setComponent(Enums.ComponentType.WINDOW_ICON, icon);
        }

        if (this.title || this.useSubTitle) {
            const titleElement = ElementHelper.createElement("div");
            titleElement.setAttribute("data-window-id", this.window.id);

            ElementHelper.addClasses(titleElement, this.app.prefix,
                "window-title"
            );

            const labelElement = document.createElement("label");
            labelElement.setAttribute("data-window-id", this.window.id);

            ElementHelper.addClasses(labelElement, this.app.prefix,
                "window-title-label"
            );
            if (this.title) {
                labelElement.innerText = this.title;
                labelElement.setAttribute("title", this.title);
            }

            titleElement.appendChild(labelElement);
            titleBarElement.appendChild(titleElement);
        }

        fragment.appendChild(titleBarElement);
        return fragment;
    }

    public updateTitle(title: string): void {
        const element = this.element;
        if (!element) return;

        const titleElement = element.querySelector<HTMLElement>(`.${this.app.prefix}window-title-label`);
        if (!titleElement) return;
        titleElement.innerText = title;
        titleElement.setAttribute("title", title);

        if (this.app.salver && this.app.salver.element) {
            const salverButtonElement = this.app.salver.element.querySelector<HTMLElement>(`.${this.app.prefix}salver-button[data-window-id='${this.window.id}']`);
            if (salverButtonElement) {
                salverButtonElement.setAttribute("title", title);
            }
        }

        this.title = title;
    }
}