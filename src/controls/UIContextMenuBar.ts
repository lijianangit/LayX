import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import UIContextMenuButton from "./UIContextMenuButton";
import * as Types from "../../types";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";

export default class UIContextMenuBar extends UIWindowComponent implements UIControl {
    public readonly elementId: string;

    public type: string;
    public readonly contextMenuButtons: Array<Types.ContextMenuButtonOption> | false = false;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, window: UIWindow, type: string, contextMenuItems: Array<Types.ContextMenuButtonOption>) {
        super(app, window);

        this.type = CastHelper.stringCast(type);
        this.contextMenuButtons = CastHelper.contextMenuButtonsCast(contextMenuItems);

        this.elementId = `${this.window.elementId}-${this.type}-${Enums.ComponentType.CONTEXT_MENU_BAR}`;
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        if (this.contextMenuButtons !== false && this.contextMenuButtons.length > 0) {
            const contextMenuBarElement = ElementHelper.createElement("div");
            contextMenuBarElement.id = this.elementId;

            ElementHelper.addClasses(contextMenuBarElement, this.app.prefix,
                Enums.ComponentType.CONTEXT_MENU_BAR
            );

            contextMenuBarElement.addEventListener("contextmenu", (ev: MouseEvent) => {
                ev.preventDefault();
                ev.returnValue = false;
                return false;
            }, true);

            this.createContextMenuButtons(contextMenuBarElement);

            fragment.appendChild(contextMenuBarElement);
        }

        return fragment;
    }

    hide(): void {
        ElementHelper.removeClasses(this.element, this.app.prefix,
            `context-menu-bar-active`
        );
    }

    updateOffset(ev: MouseEvent, zIndex: number): void {
        if (!this.element) return;
        if (this.contextMenuButtons === false || this.contextMenuButtons.length === 0) return;

        const computedStyle = getComputedStyle(this.element);
        const
            contextMenuWidth = Number(computedStyle.width!.replace('px', '')),
            contextMenuHeight = this.contextMenuButtons.length * UIContextMenuButton.height,
            x = ev.pageX,
            y = ev.pageY;

        let left = x, top = y;
        if (contextMenuWidth + x > innerWidth) {
            left = x - contextMenuWidth;
        }
        if (contextMenuHeight + y > innerHeight) {
            top = y - contextMenuHeight;
        }

        ElementHelper.addClasses(this.element, this.app.prefix,
            `context-menu-bar-active`
        );

        ElementHelper.addStyles(this.element, <Types.CSSStyleObject>{
            zIndex: `${zIndex}`,
            top: `${top}px`,
            left: `${left}px`,
        });
    }

    private createContextMenuButtons(parentContextMenuBarElement: HTMLElement): void {
        if (this.contextMenuButtons === false) return;

        const contextMenuButtons = Array<UIContextMenuButton>();
        for (const item of this.contextMenuButtons) {
            const contextMenu = new UIContextMenuButton(this.app, this.window, this.type, item);
            const contextMenuElement = contextMenu.present();

            parentContextMenuBarElement.appendChild(contextMenuElement);
            contextMenuButtons.push(contextMenu);
        }

        this.setComponent(Enums.ComponentType.CONTEXT_MENU_BUTTONS, contextMenuButtons);
    }
}