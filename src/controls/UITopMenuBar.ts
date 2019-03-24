import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIContextMenuBar from "./UIContextMenuBar";
import UIActionButton from "./UIActionButton";
import UIContextMenuButton from "./UIContextMenuButton";
import * as ElementHelper from "../utils/ElementHelper";
import * as Types from "../../types";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";

export default class UITopMenuBar extends UIWindowComponent implements UIControl {
    public readonly elementId: string = `${this.window.elementId}-${Enums.ComponentType.TOP_MENU_BAR}`;

    public readonly contextMenuButtons: Array<Types.ContextMenuButtonOption> | false = false;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, window: UIWindow, contextMenuItems: Array<Types.ContextMenuButtonOption>) {
        super(app, window);

        this.contextMenuButtons = CastHelper.contextMenuButtonsCast(contextMenuItems);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();
        if (this.contextMenuButtons !== false && this.contextMenuButtons.length > 0) {
            const topMenuBarElement = ElementHelper.createElement("div");
            topMenuBarElement.id = this.elementId;

            ElementHelper.addClasses(topMenuBarElement, this.app.prefix,
                Enums.ComponentType.TOP_MENU_BAR,
            );

            topMenuBarElement.addEventListener("contextmenu", (ev: MouseEvent) => {
                ev.preventDefault();
                ev.stopPropagation();
                ev.returnValue = false;
                return false;
            }, true);

            this.createTopMenuButtons(topMenuBarElement);

            fragment.appendChild(topMenuBarElement);
        }
        return fragment;
    }

    private createTopMenuButtons(parentTopMenuBarElement: HTMLElement): void {
        if (this.contextMenuButtons === false) return;

        const contextMenuButtons = Array<UIContextMenuButton>();
        let index = 0;
        for (const item of this.contextMenuButtons) {
            const topMenuButtonElement = ElementHelper.createElement("div");

            ElementHelper.addClasses(topMenuButtonElement, this.app.prefix,
                Enums.ComponentType.TOP_MENU_BUTTON
            );

            const labelElement = ElementHelper.createElement("label");
            ElementHelper.addClasses(labelElement, this.app.prefix,
                Enums.ComponentType.TOP_MENU_BUTTON + "-label"
            );
            labelElement.innerText = item.label;

            topMenuButtonElement.appendChild(labelElement);

            parentTopMenuBarElement.appendChild(topMenuButtonElement);
        }
    }
}