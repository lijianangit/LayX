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
    public static readonly offset: number = 4;

    public uniqueId: string;
    public readonly contextMenuButtons: Array<Types.ContextMenuButtonOption> | false = false;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, window: UIWindow, uniqueId: string, contextMenuItems: Array<Types.ContextMenuButtonOption>, private isTopMenu: boolean = true) {
        super(app, window);

        this.contextMenuButtons = CastHelper.contextMenuButtonsCast(contextMenuItems);

        this.uniqueId = CastHelper.stringCast(uniqueId);
        this.elementId = `${this.window.elementId}-${this.uniqueId}-${Enums.ComponentType.CONTEXT_MENU_BAR}`;
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        if (this.contextMenuButtons !== false && this.contextMenuButtons.length > 0) {
            const contextMenuBarElement = ElementHelper.createElement("div");
            if (this.isTopMenu) contextMenuBarElement.id = this.elementId;

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
        if (!this.isTopMenu) return;

        ElementHelper.removeClasses(this.element, this.app.prefix,
            `context-menu-bar-active`
        );
    }

    updateOffset(ev: MouseEvent, zIndex: number, fixLeft?: number, fixTop?: number): void {
        if (!this.isTopMenu
            || !this.element
            || this.contextMenuButtons === false
            || this.contextMenuButtons.length === 0) return;

        const computedStyle = getComputedStyle(this.element);
        const contextMenuBarWidth = Number(computedStyle.width!.replace('px', '')),
            contextMenuBarHeight = this.contextMenuButtons.length * UIContextMenuButton.height,
            x = ev.pageX,
            y = ev.pageY;

        let left = x,
            top = y;
        if (fixLeft !== undefined) left = fixLeft;
        else {
            if (contextMenuBarWidth + x > innerWidth) {
                left = x - contextMenuBarWidth;
            }
        }

        if (fixTop !== undefined) top = fixTop;
        else {
            if (contextMenuBarHeight + y > innerHeight) {
                top = y - contextMenuBarHeight;
            }
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

    updateChildrenOffset(ev: MouseEvent, childrenContextMenuBarElement: HTMLElement | null, index: number): void {
        if (!(!this.isTopMenu
            && childrenContextMenuBarElement
            && childrenContextMenuBarElement.parentElement
            && childrenContextMenuBarElement.parentElement.parentElement)) return;

        const parentContextMenuBarElement = childrenContextMenuBarElement.parentElement.parentElement;

        const parentComputedStyle = getComputedStyle(parentContextMenuBarElement);
        const parentContextMenubarWidth = Number(parentComputedStyle.width!.replace('px', '')),
            x = Number(parentComputedStyle.left!.replace('px', '')),
            y = Number(parentComputedStyle.top!.replace('px', ''));

        const computedStyle = getComputedStyle(childrenContextMenuBarElement);
        const contextMenuBarWidth = Number(computedStyle.width!.replace('px', '')),
            contextMenuBarHeight = childrenContextMenuBarElement.childElementCount * UIContextMenuButton.height,
            contextMenuBarTop = UIContextMenuButton.height * index;

        let left = parentContextMenubarWidth + x - UIContextMenuBar.offset,
            top = y + contextMenuBarTop - UIContextMenuBar.offset;

        if (parentContextMenubarWidth + x + contextMenuBarWidth > innerWidth) left = x - contextMenuBarWidth + UIContextMenuBar.offset;

        if (y + contextMenuBarTop + contextMenuBarHeight > innerHeight) top = innerHeight - contextMenuBarHeight - UIContextMenuBar.offset;

        ElementHelper.addClasses(childrenContextMenuBarElement, this.app.prefix,
            `context-menu-bar-active`
        );

        ElementHelper.addStyles(childrenContextMenuBarElement, <Types.CSSStyleObject>{
            top: `${top}px`,
            left: `${left}px`
        });
    }

    hideChildren(childrenContextMenuBarElement: HTMLElement | null): void {
        if (this.isTopMenu) return;

        ElementHelper.removeClasses(childrenContextMenuBarElement, this.app.prefix,
            `context-menu-bar-active`
        );
    }

    private createContextMenuButtons(parentContextMenuBarElement: HTMLElement): void {
        if (this.contextMenuButtons === false) return;

        const contextMenuButtons = Array<UIContextMenuButton>();
        let index = 0;

        for (const item of this.contextMenuButtons) {
            const contextMenuButton = new UIContextMenuButton(this.app, this.window, item, index);
            const contextMenuButtonElement = contextMenuButton.present();
            parentContextMenuBarElement.appendChild(contextMenuButtonElement);

            contextMenuButtons.push(contextMenuButton);
            index++;
        }

        this.setComponent(Enums.ComponentType.CONTEXT_MENU_BUTTONS, contextMenuButtons);
    }
}