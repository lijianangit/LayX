import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIContextMenuBar from "./UIContextMenuBar";
import UITopMenuButton from "./UITopMenuButton";
import * as ElementHelper from "../utils/ElementHelper";
import * as Types from "../../types";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";

export default class UITopMenuBar extends UIWindowComponent implements UIControl {
    public readonly elementId: string = `${this.window.elementId}-${Enums.ComponentType.TOP_MENU_BAR}`;

    public isActive: boolean = false;
    public currentTopMenuContextBar: UIContextMenuBar | null = null;
    public currentTopMenuButtonElement: HTMLElement | null = null;

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
            topMenuBarElement.setAttribute("data-window-id", this.window.id);
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

    hide(ev: MouseEvent | TouchEvent): void {
        if (this.currentTopMenuButtonElement) {
            ElementHelper.removeClasses(this.currentTopMenuButtonElement, this.app.prefix,
                Enums.ComponentType.TOP_MENU_BUTTON + "-active"
            );
        }
        if (this.currentTopMenuContextBar) this.currentTopMenuContextBar.hide();

        const target = (<HTMLElement>ev.target);
        this.isActive = target.className.indexOf(`${this.app.prefix + Enums.ComponentType.TOP_MENU_BUTTON}`) > -1 && target.getAttribute("data-window-id") === this.window.id
            ? !this.isActive
            : false;

        this.currentTopMenuContextBar = null;
        this.currentTopMenuButtonElement = null;
    }

    private createTopMenuButtons(parentTopMenuBarElement: HTMLElement): void {
        if (this.contextMenuButtons === false) return;

        const topMenuButtons = Array<UITopMenuButton>();

        for (const item of this.contextMenuButtons) {
            const topMenuButton = new UITopMenuButton(this.app, this.window, this, item);
            const topMenuButtonElement = topMenuButton.present();
            parentTopMenuBarElement.appendChild(topMenuButtonElement);

            topMenuButtons.push(topMenuButton);
        }

        this.setComponent(Enums.ComponentType.TOP_MENU_BUTTONS, topMenuButtons);
    }
}