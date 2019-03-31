import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIComponent from "../basic/models/UIComponent";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import WindowMoveDragEvent from "../basic/events/WindowMoveDragEvent";
import UIActionBar from "./UIActionBar";
import UITitleBar from "./UITitleBar";
import UITabBar from "./UITabBar";
import UIIcon from "./UIIcon";
import * as Types from "../../types";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";

export default class UISalverBar extends UIComponent implements UIControl {
    public readonly elementId: string = `${this.app.prefix + Enums.ComponentType.SALVER_BAR}`;

    public static size: number = 50;
    public static talentHeight: number = 5;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    private _items: string[] = [];
    get items(): string[] {
        return this._items;
    }
    set items(value: string[]) {
        this._items = value;
    }

    constructor(app: App) {
        super(app);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const salverBarElement = ElementHelper.createElement("div");
        salverBarElement.id = this.elementId;

        ElementHelper.addClasses(salverBarElement, this.app.prefix,
            Enums.ComponentType.SALVER_BAR,
            "animate-d3s",
            "flexbox",
            "flex-row"
        );

        ElementHelper.addStyles(salverBarElement, <Types.CSSStyleObject>{
            zIndex: `${this.app.salverZIndex}`,
            height: `${UISalverBar.size}px`,
            bottom: `-${UISalverBar.size - UISalverBar.talentHeight}px`
        });

        salverBarElement.addEventListener("animationend", (ev: AnimationEvent) => {
        });

        fragment.appendChild(salverBarElement);

        return fragment;
    }

    addOrUpdateItem(): void {
        if (!this.app.window || !this.element) return;

        if (this.app.lastWindow) {
            const lastSelectItemElement = this.element.querySelector(`.${this.app.prefix + Enums.ComponentType.SALVER_ITEM}[data-window-id='${this.app.lastWindow.id}']`);
            ElementHelper.removeClasses(<HTMLElement>lastSelectItemElement, this.app.prefix,
                "salver-item-active"
            );
        }

        if (this.items.indexOf(this.app.window.id) === -1) {
            const fragment = ElementHelper.createFragment();

            const itemElement = ElementHelper.createElement("div");
            itemElement.setAttribute("data-window-id", this.app.window.id);

            ElementHelper.addClasses(itemElement, this.app.prefix,
                Enums.ComponentType.SALVER_ITEM,
                "flexbox",
                "flex-center",
                "salver-item-active"
            );

            ElementHelper.addStyles(itemElement, <Types.CSSStyleObject>{
                width: `${UISalverBar.size}px`,
                height: `${UISalverBar.size}px`
            });

            itemElement.addEventListener("mousedown", (ev: MouseEvent) => {
                const windowId = itemElement.getAttribute("data-window-id");
                if (!windowId) return;

                const window = this.app.getWindow(windowId);
                if (window) {
                    window.updateZIndex();
                    if (window.status === Enums.WindowStatus.MIN) {
                        ElementHelper.removeClasses(window.element, this.app.prefix,
                            "window-min"
                        );
                        ElementHelper.addClasses(window.element, this.app.prefix,
                            window.isNeedAnimation ? "animate" : "",
                            window.isNeedAnimation ? `animate-${window.animate}-create` : ""
                        );
                        if (!ElementHelper.containClass(itemElement, this.app.prefix, "salver-item-active")) {
                            ElementHelper.addClasses(itemElement, this.app.prefix,
                                "salver-item-active"
                            );
                        }

                        window.status = window.lastStatus;
                    }
                }
            });

            itemElement.addEventListener("dblclick", (ev: MouseEvent) => {
                const windowId = itemElement.getAttribute("data-window-id");
                if (!windowId) return;

                const window = this.app.getWindow(windowId);
                window && window.destroy();
            });

            if (this.app.window) {
                const titleBar = this.app.window.getComponent<UITitleBar>(`${Enums.ComponentType.TOOL_BAR}->${Enums.ComponentType.TITLE_BAR}`);
                if (titleBar) {
                    const windowIcon = titleBar.getComponent<UIIcon>(`${Enums.ComponentType.WINDOW_ICON}`);
                    if (windowIcon) {
                        itemElement.setAttribute("title", titleBar.title || "");
                        itemElement.appendChild(windowIcon.present());
                    }
                }
            }
            else itemElement.innerText = "Layx";

            fragment.appendChild(itemElement);
            this.element.appendChild(fragment);

            this.items.push(this.app.window.id);
            this.updateOffset();
        }
        else {
            const currentItemElement = this.element.querySelector(`.${this.app.prefix + Enums.ComponentType.SALVER_ITEM}[data-window-id='${this.app.window.id}']`);
            ElementHelper.addClasses(<HTMLElement>currentItemElement, this.app.prefix,
                "salver-item-active"
            );
        }
    }

    removeItem() {
        if (!this.app.window || !this.element) return;

        if (this.items.indexOf(this.app.window.id) > -1) {
            const currentSelectItemElement = this.element.querySelector(`.${this.app.prefix + Enums.ComponentType.SALVER_ITEM}[data-window-id='${this.app.window.id}']`);
            if (currentSelectItemElement && currentSelectItemElement.parentElement) {
                currentSelectItemElement.parentElement.removeChild(currentSelectItemElement);
            }

            const index = this.items.indexOf(this.app.window.id);
            this.items.splice(index, 1);
        }
    }

    updateOffset() {
        if (this.element) {
            const itemsWidth = this.items.length * UISalverBar.size;

            ElementHelper.addStyles(this.element, <Types.CSSStyleObject>{
                left: `${(innerWidth - itemsWidth) / 2}px`
            });
        }
    }

    show() {
        ElementHelper.removeClasses(this.element, this.app.prefix,
            "animate-salver-slide-down"
        );

        ElementHelper.addClasses(this.element, this.app.prefix,
            "animate-salver-slide-up",
            "salver-bar-keep"
        );
    }

    hide() {
        ElementHelper.removeClasses(this.element, this.app.prefix,
            "animate-salver-slide-up",
            "salver-bar-keep"
        );

        ElementHelper.addClasses(this.element, this.app.prefix,
            "animate-salver-slide-down"
        );
    }
}