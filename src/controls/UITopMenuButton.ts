import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIContextMenuBar from "./UIContextMenuBar";
import UITopMenuBar from "./UITopMenuBar";
import * as ElementHelper from "../utils/ElementHelper";
import * as Types from "../../types";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";

export default class UITopMenuButton extends UIWindowComponent implements UIControl {
    public id: string;
    public label: string;
    public handler?: (ev: MouseEvent, window: UIWindow) => void;
    public items: Array<Types.ContextMenuButtonOption> | false;

    constructor(app: App, window: UIWindow, public readonly topMenuBar: UITopMenuBar, options: Types.ContextMenuButtonOption) {
        super(app, window);

        this.id = CastHelper.stringCast(options.id);
        this.label = CastHelper.stringCast(options.label);
        this.handler = options.handler;
        this.items = CastHelper.contextMenuButtonsCast(options.items);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const topMenuButtonElement = ElementHelper.createElement("div");

        ElementHelper.addClasses(topMenuButtonElement, this.app.prefix,
            Enums.ComponentType.TOP_MENU_BUTTON
        );

        const labelElement = ElementHelper.createElement("label");
        labelElement.innerText = this.label;

        ElementHelper.addClasses(labelElement, this.app.prefix,
            Enums.ComponentType.TOP_MENU_BUTTON + "-label"
        );

        topMenuButtonElement.appendChild(labelElement);

        if (this.items !== false) {
            const contextMenuBar = new UIContextMenuBar(this.app, this.window, `top-menu-${this.id}`, this.items);
            const contextMenuBarElement = contextMenuBar.present();
            document.body.appendChild(contextMenuBarElement);

            this.setComponent(Enums.ComponentType.CONTEXT_MENU_BAR, contextMenuBar);
        }

        this.bindEvent(topMenuButtonElement);

        fragment.appendChild(topMenuButtonElement);

        return fragment;
    }

    private bindEvent(element: HTMLElement): void {
        element.addEventListener("mousedown", (ev: MouseEvent) => {
            this.topMenuBar.isActive = !this.topMenuBar.isActive;

            if (this.topMenuBar.prevTopMenuContextBar
                && this.topMenuBar.prevTopMenuButtonElement
                && element !== this.topMenuBar.prevTopMenuButtonElement) {
                this.topMenuBar.prevTopMenuContextBar.hide();

                ElementHelper.removeClasses(this.topMenuBar.prevTopMenuButtonElement, this.app.prefix,
                    Enums.ComponentType.TOP_MENU_BUTTON + "-active"
                );
            }

            const contextMenuBar = this.getComponent<UIContextMenuBar>(Enums.ComponentType.CONTEXT_MENU_BAR);
            if (contextMenuBar && contextMenuBar.element) {
                this.topMenuBar.prevTopMenuButtonElement = element;

                if (this.topMenuBar.isActive) {
                    const clientRect = element.getBoundingClientRect();
                    contextMenuBar.updateOffset(ev, this.window.zIndex + 1, clientRect.left, clientRect.top + 25);

                    ElementHelper.addClasses(element, this.app.prefix,
                        Enums.ComponentType.TOP_MENU_BUTTON + "-active"
                    );

                    this.topMenuBar.prevTopMenuContextBar = contextMenuBar;
                }
                else {
                    contextMenuBar.hide();

                    ElementHelper.removeClasses(element, this.app.prefix,
                        Enums.ComponentType.TOP_MENU_BUTTON + "-active"
                    );
                }
            }
        });

        element.addEventListener("mouseenter", (ev) => {
            if (this.topMenuBar.isActive) {
                if (this.topMenuBar.prevTopMenuContextBar
                    && this.topMenuBar.prevTopMenuButtonElement
                    && element !== this.topMenuBar.prevTopMenuButtonElement) {

                    this.topMenuBar.prevTopMenuContextBar.hide();

                    ElementHelper.removeClasses(this.topMenuBar.prevTopMenuButtonElement, this.app.prefix,
                        Enums.ComponentType.TOP_MENU_BUTTON + "-active"
                    );
                }

                ElementHelper.addClasses(element, this.app.prefix,
                    Enums.ComponentType.TOP_MENU_BUTTON + "-active"
                );

                const contextMenuBar = this.getComponent<UIContextMenuBar>(Enums.ComponentType.CONTEXT_MENU_BAR);
                if (contextMenuBar && contextMenuBar.element) {
                    const clientRect = element.getBoundingClientRect();
                    contextMenuBar.updateOffset(ev, this.window.zIndex + 1, clientRect.left, clientRect.top + 25);

                    this.topMenuBar.prevTopMenuContextBar = contextMenuBar;
                }

                this.topMenuBar.prevTopMenuButtonElement = element;
            }
        });
    }
}