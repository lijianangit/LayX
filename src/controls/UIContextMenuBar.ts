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

    public type: string;
    public readonly contextMenuButtons: Array<Types.ContextMenuButtonOption> | false = false;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, window: UIWindow, type: string, contextMenuItems: Array<Types.ContextMenuButtonOption>, private isTopMenu: boolean = true) {
        super(app, window);

        this.contextMenuButtons = CastHelper.contextMenuButtonsCast(contextMenuItems);

        this.type = CastHelper.stringCast(type);
        this.elementId = `${this.window.elementId}-${this.type}-${Enums.ComponentType.CONTEXT_MENU_BAR}`;
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
        if (!this.isTopMenu) return;
        if (!this.element) return;
        if (this.contextMenuButtons === false || this.contextMenuButtons.length === 0) return;

        const computedStyle = getComputedStyle(this.element);
        const
            contextMenuWidth = Number(computedStyle.width!.replace('px', '')),
            contextMenuHeight = this.contextMenuButtons.length * UIContextMenuButton.height,
            x = ev.pageX,
            y = ev.pageY;

        let left = x, top = y;
        if (fixLeft !== undefined) {
            left = fixLeft;
        }
        else {
            if (contextMenuWidth + x > innerWidth) {
                left = x - contextMenuWidth;
            }
        }

        if (fixTop !== undefined) {
            top = fixTop;
        }
        else {
            if (contextMenuHeight + y > innerHeight) {
                top = y - contextMenuHeight;
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

    updateChildrensOffset(ev: MouseEvent, childrenContextMenuBarElement: HTMLElement | null, index: number): void {
        if (this.isTopMenu) return;
        if (!(childrenContextMenuBarElement
            && childrenContextMenuBarElement.parentElement
            && childrenContextMenuBarElement.parentElement.parentElement)) return;

        const parentContextMenuBarElement = childrenContextMenuBarElement.parentElement.parentElement;
        const parentComputedStyle = getComputedStyle(parentContextMenuBarElement);
        const parentContextMenuWidth = Number(parentComputedStyle.width!.replace('px', '')),
            x = Number(parentComputedStyle.left!.replace('px', '')),
            y = Number(parentComputedStyle.top!.replace('px', ''));

        const computedStyle = getComputedStyle(childrenContextMenuBarElement);
        const contextMenuWidth = Number(computedStyle.width!.replace('px', '')),
            contextMenuHeight = childrenContextMenuBarElement.childElementCount * UIContextMenuButton.height,
            contextMenuTop = UIContextMenuButton.height * index;

        let left = parentContextMenuWidth + x - UIContextMenuBar.offset,
            top = y + contextMenuTop - UIContextMenuBar.offset;

        if (parentContextMenuWidth + x + contextMenuWidth > innerWidth) {
            left = x - contextMenuWidth + UIContextMenuBar.offset;
        }

        if (y + contextMenuTop + contextMenuHeight > innerHeight) {
            top = innerHeight - contextMenuHeight - UIContextMenuBar.offset;
        }

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
            const contextMenu = new UIContextMenuButton(this.app, this.window, item, index);
            const contextMenuElement = contextMenu.present();

            parentContextMenuBarElement.appendChild(contextMenuElement);
            contextMenuButtons.push(contextMenu);
            index++;
        }

        this.setComponent(Enums.ComponentType.CONTEXT_MENU_BUTTONS, contextMenuButtons);
    }
}