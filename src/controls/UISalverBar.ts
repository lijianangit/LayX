import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIComponent from "../basic/models/UIComponent";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import WindowMoveDragEvent from "../basic/events/WindowMoveDragEvent";
import UIActionBar from "./UIActionBar";
import UITitleBar from "./UITitleBar";
import UITabBar from "./UITabBar";
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
            if (ElementHelper.containClass(this.element, this.app.prefix, "animate-salver-slide-up")) {
                if (ElementHelper.containClass(this.element, this.app.prefix, "salver-bar-delay")) return;

                ElementHelper.removeClasses(this.element, this.app.prefix,
                    "animate-salver-slide-up"
                );

                ElementHelper.addClasses(this.element, this.app.prefix,
                    "animate-salver-slide-down"
                );
            }
            else {
                ElementHelper.removeClasses(this.element, this.app.prefix,
                    "animate-salver-slide-up",
                    "animate-salver-slide-down"
                );
            }
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
                window && window.updateZIndex();
            });

            itemElement.innerText = "Layx";

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

        this.show();
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

            this.show();
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

    show(isDelay: boolean = false) {
        ElementHelper.addClasses(this.element, this.app.prefix,
            "animate-salver-slide-up",
            isDelay ? "salver-bar-delay" : ""
        );
    }

    hide() {
        ElementHelper.removeClasses(this.element, this.app.prefix,
            "animate-salver-slide-up",
            "salver-bar-delay"
        );

        ElementHelper.addClasses(this.element, this.app.prefix,
            "animate-salver-slide-down"
        );
    }
}