import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import UIContextMenuItem from "./UIContextMenuItem";
import * as Types from "../../types";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";

export default class UIContextMenu extends UIWindowComponent implements UIControl {
    public readonly kind: string = "contextMenu";
    public readonly components: Types.Component = <Types.Component>{};
    private kebabCase: string = StringHelper.getKebabCase(this.kind);

    public type: string;
    public readonly contextMenuItems: Array<Types.ContextMenuOption>;

    constructor(app: App, window: UIWindow, type: string, contextMenuItems: Array<Types.ContextMenuOption>) {
        super(app, window);
        this.type = type;
        this.contextMenuItems = CastHelper.contextMenusCast(contextMenuItems) as Array<Types.ContextMenuOption>;
    }

    present(): DocumentFragment | null {
        const fragment = document.createDocumentFragment();
        const contextMenuBarElement = document.createElement("div");

        contextMenuBarElement.id = `${this.app.prefix + this.kebabCase}-${this.type}`;

        ElementHelper.addClasses(contextMenuBarElement, this.app.prefix,
            this.kebabCase
        );

        contextMenuBarElement.addEventListener("contextmenu", (ev: MouseEvent) => {
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        }, true);

        this.createContextMenu(contextMenuBarElement);

        fragment.appendChild(contextMenuBarElement);
        return fragment;
    }

    createContextMenu(contextMenuBarElement: HTMLElement): void {
        const contextMenuItems = Array<UIContextMenuItem>();
        for (const item of this.contextMenuItems) {
            const contextMenu = new UIContextMenuItem(this.app, this.window, item);
            const contextMenuElement = contextMenu.present();
            contextMenuElement && contextMenuBarElement.appendChild(contextMenuElement);
            contextMenuItems.push(contextMenu);
        }
        this.components["contextMenuItems"] = contextMenuItems;
    }

    hide(): void {
        const contextMenuElements = document.getElementById(`${this.app.prefix + this.kebabCase}-${this.type}`);
        if (contextMenuElements) {
            ElementHelper.removeClasses(contextMenuElements, this.app.prefix,
                `context-menu-active`
            );
        }
    }

    updateOffset(ev: MouseEvent, zIndex: number): void {
        let contextMenuElements = document.getElementById(`${this.app.prefix + this.kebabCase}-${this.type}`);
        if (contextMenuElements != null) {
            const styles = getComputedStyle(contextMenuElements);
            const contextMenuWidth = Number(styles.width!.replace('px', '')),
                contextMenuHeight = this.contextMenuItems.length * UIContextMenuItem.height,
                x = ev.pageX,
                y = ev.pageY;

            let left = x, top = y;
            if (contextMenuWidth + x > innerWidth) {
                left = x - contextMenuWidth;
            }
            if (contextMenuHeight + y > innerHeight) {
                top = y - contextMenuHeight;
            }

            ElementHelper.addClasses(contextMenuElements, this.app.prefix,
                `context-menu-active`
            );
            ElementHelper.addStyles(contextMenuElements, <Types.CSSStyleObject>{
                zIndex: `${zIndex + 1}`,
                top: `${top}px`,
                left: `${left}px`,
            });
        }
    }
}