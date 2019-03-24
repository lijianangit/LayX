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
    private isActive: boolean = false;
    public readonly elementId: string = `${this.window.elementId}-${Enums.ComponentType.TOP_MENU_BAR}`;
    public prevTopMenuButtonElement: HTMLElement | null = null;
    public prevTopMenuContextBar: UIContextMenuBar | null = null;

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

            item.items = CastHelper.contextMenuButtonsCast(item.items);
            if (item.items) {

                const topContextMenuBar = new UIContextMenuBar(this.app, this.window, `top-menu-${item.id}`, item.items);
                const topContextMenuBarElement = topContextMenuBar.present();
                document.body.appendChild(topContextMenuBarElement);

                topMenuButtonElement.addEventListener("mousedown", (ev: MouseEvent) => {
                    this.isActive = !this.isActive;
                    if (this.isActive) {
                        const rect = topMenuButtonElement.getBoundingClientRect();
                        topContextMenuBar.updateOffset(ev, this.window.zIndex + 1, rect.left, rect.top + 25);

                        ElementHelper.addClasses(topMenuButtonElement, this.app.prefix,
                            Enums.ComponentType.TOP_MENU_BUTTON + "-active"
                        );

                        this.prevTopMenuButtonElement = topMenuButtonElement;
                        this.prevTopMenuContextBar = topContextMenuBar;
                    }
                    else {
                        topContextMenuBar.hide();

                        ElementHelper.removeClasses(topMenuButtonElement, this.app.prefix,
                            Enums.ComponentType.TOP_MENU_BUTTON + "-active"
                        );
                    }
                });

                topMenuButtonElement.addEventListener("mouseenter", (ev) => {
                    if (this.isActive) {
                        if (this.prevTopMenuContextBar && this.prevTopMenuButtonElement && this.prevTopMenuContextBar !== topContextMenuBar) {
                            this.prevTopMenuContextBar.hide();

                            ElementHelper.removeClasses(this.prevTopMenuButtonElement, this.app.prefix,
                                Enums.ComponentType.TOP_MENU_BUTTON + "-active"
                            );
                        }

                        ElementHelper.addClasses(topMenuButtonElement, this.app.prefix,
                            Enums.ComponentType.TOP_MENU_BUTTON + "-active"
                        );

                        const rect = topMenuButtonElement.getBoundingClientRect();
                        topContextMenuBar.updateOffset(ev, this.window.zIndex + 1, rect.left, rect.top + 25);

                        this.prevTopMenuButtonElement = topMenuButtonElement;
                        this.prevTopMenuContextBar = topContextMenuBar;
                    }
                });
            }
            else {
                topMenuButtonElement.addEventListener("mousedown", (ev: MouseEvent) => {
                    this.isActive = !this.isActive;
                    if (this.prevTopMenuContextBar && this.prevTopMenuButtonElement) {
                        this.prevTopMenuContextBar.hide();

                        ElementHelper.removeClasses(this.prevTopMenuButtonElement, this.app.prefix,
                            Enums.ComponentType.TOP_MENU_BUTTON + "-active"
                        );
                    }
                });

                topMenuButtonElement.addEventListener("mouseenter", (ev) => {
                    if (this.isActive) {
                        if (this.prevTopMenuContextBar && this.prevTopMenuButtonElement && topMenuButtonElement !== this.prevTopMenuButtonElement) {
                            this.prevTopMenuContextBar.hide();

                            ElementHelper.removeClasses(this.prevTopMenuButtonElement, this.app.prefix,
                                Enums.ComponentType.TOP_MENU_BUTTON + "-active"
                            );
                        }
                    }
                });
            }

            index++;
        }
    }
}