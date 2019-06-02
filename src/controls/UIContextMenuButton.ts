import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import UIContextMenuBar from "./UIContextMenuBar";
import UIIcon from "./UIIcon";
import * as Types from "../../types";
import * as ElementHelper from "../utils/ElementHelper";
import * as Enums from "../basic/enums";
import * as CastHelper from "../utils/CastHelper";
import * as TypeHelper from "../utils/TypeHelper";

export default class UIContextMenuButton extends UIWindowComponent implements UIControl {
    public static readonly height: number = 30;

    public id: string;
    public label: string;
    public handler?: (ev: MouseEvent, window: UIWindow) => void;
    public items: Array<Types.ContextMenuButtonOption> | false;

    constructor(app: App, window: UIWindow, options: Types.ContextMenuButtonOption, private readonly index = 0) {
        super(app, window);

        this.id = CastHelper.stringCast(options.id);
        this.label = CastHelper.stringCast(options.label);
        this.handler = options.handler;
        this.items = CastHelper.contextMenuButtonsCast(options.items);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const contextMenuButtonElement = ElementHelper.createElement("div");
        contextMenuButtonElement.setAttribute("data-window-id", this.window.id);
        contextMenuButtonElement.setAttribute("data-index", `${this.index}`);

        ElementHelper.addClasses(contextMenuButtonElement, this.app.prefix,
            Enums.ComponentType.CONTEXT_MENU_BUTTON,
            "flexbox",
            "flex-row"
        );

        ElementHelper.addStyles(contextMenuButtonElement, <Types.CSSStyleObject>{
            height: `${UIContextMenuButton.height}px`,
            lineHeight: `${UIContextMenuButton.height}px`
        });

        contextMenuButtonElement.addEventListener("mousedown", (ev: MouseEvent) => {
            ev.stopPropagation();
            if (ev.button === 0 && typeof this.handler === "function") {
                this.handler(ev, this.window);
            }
        });

        const labelElement = ElementHelper.createElement("label");
        labelElement.setAttribute("data-window-id", this.window.id);
        labelElement.innerText = this.label;

        ElementHelper.addClasses(labelElement, this.app.prefix,
            `${Enums.ComponentType.CONTEXT_MENU_BUTTON}-label`,
            "flex-item"
        );

        contextMenuButtonElement.appendChild(labelElement);

        if (this.items !== false) {
            const contextMenuBar = new UIContextMenuBar(this.app, this.window, `${this.id}`, this.items, false);
            const contextMenuBarElement = contextMenuBar.present();
            contextMenuButtonElement.appendChild(contextMenuBarElement);

            const childContextMenuBarElement = <HTMLElement | null>labelElement.nextElementSibling;

            let waiting: number;
            contextMenuButtonElement.addEventListener("mouseenter", (ev: MouseEvent) => {
                const handler: TimerHandler = () => {
                    contextMenuBar.updateChildrenOffset(ev, childContextMenuBarElement, this.index);
                };
                waiting = setTimeout(handler, 200);
            });

            contextMenuButtonElement.addEventListener("mouseleave", (ev: MouseEvent) => {
                clearTimeout(waiting);
                contextMenuBar.hideChildren(childContextMenuBarElement);
            });

            this.setComponent(Enums.ComponentType.CONTEXT_MENU_BAR, contextMenuBar);

            const rightIconElement = ElementHelper.createElement("div");
            rightIconElement.setAttribute("data-window-id", this.window.id);

            ElementHelper.addClasses(rightIconElement, this.app.prefix,
                "context-menu-more",
                "flexbox",
                "flex-center"
            );

            const icon = new UIIcon(this.app, "right");
            const iconElement = icon.present();
            rightIconElement.appendChild(iconElement);

            contextMenuButtonElement.appendChild(rightIconElement);
        }

        fragment.appendChild(contextMenuButtonElement);
        return fragment;
    }
}