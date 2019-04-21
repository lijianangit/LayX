import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIComponent from "../basic/models/UIComponent";
import UISalverButton from "./UISalverButton";
import * as Types from "../../types";
import * as ElementHelper from "../utils/ElementHelper";
import * as Enums from "../basic/enums";

export default class UISalverBar extends UIComponent implements UIControl {
    public readonly elementId: string = `${this.app.prefix + Enums.ComponentType.SALVER_BAR}`;

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
            height: `${UISalverButton.size}px`,
            bottom: `-${UISalverButton.size - UISalverButton.talentHeight}px`
        });

        fragment.appendChild(salverBarElement);

        return fragment;
    }

    addOrUpdateItem(): void {
        const salverElement = this.element;
        if (!this.app.window || !salverElement) return;

        const lastWindow = this.app.lastWindow;
        if (lastWindow) {
            const lastSalverButton = new UISalverButton(this.app, lastWindow.id);
            ElementHelper.removeClasses(lastSalverButton.element, this.app.prefix,
                "salver-button-active"
            );
        }

        const windowId = this.app.window.id;
        const salverButton = new UISalverButton(this.app, windowId);
        if (this.items.indexOf(windowId) === -1) {
            const salverButtonElement = salverButton.present();

            salverElement.appendChild(salverButtonElement);
            this.items.push(windowId);

            this.updateOffset();
        }
        else {
            ElementHelper.addClasses(salverButton.element, this.app.prefix,
                "salver-button-active"
            );
        }
    }

    removeItem() {
        const salverElement = this.element;
        if (!this.app.window || !salverElement) return;

        const windowId = this.app.window.id;
        const salverButton = new UISalverButton(this.app, windowId);

        ElementHelper.removeElement(salverButton.element);

        const index = this.items.indexOf(windowId);
        this.items.splice(index, 1);

        this.updateOffset();
    }

    updateOffset() {
        const salverElement = this.element;
        if (!salverElement) return;

        const itemsWidth = this.items.length * UISalverButton.size;

        ElementHelper.addStyles(salverElement, <Types.CSSStyleObject>{
            left: `${(innerWidth - itemsWidth) / 2}px`
        });
    }

    show(isVisible: boolean = true) {
        if (isVisible) {
            ElementHelper.removeClasses(this.element, this.app.prefix,
                "animate-salver-slide-down"
            );

            ElementHelper.addClasses(this.element, this.app.prefix,
                "animate-salver-slide-up",
                "salver-bar-keep"
            );
        }
        else {
            ElementHelper.removeClasses(this.element, this.app.prefix,
                "animate-salver-slide-up",
                "salver-bar-keep"
            );

            ElementHelper.addClasses(this.element, this.app.prefix,
                "animate-salver-slide-down"
            );
        }
    }
}