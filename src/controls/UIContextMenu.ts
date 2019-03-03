import UIWindowRelative from "../basic/models/UIWindowRelative";
import UIControl from "../basic/interfaces/UIControl";
import UIWindow from "./UIWindow";
import App from "../core/App";
import { ContextMenuOptions } from "../../types";
import { getKebabCase } from "../utils/StringHelper";
import { addClasses } from "../utils/ElementHelper";

export default class UIContextMenu extends UIWindowRelative implements UIControl {
    readonly kind: string = "contextMenu";

    private _id: string;
    get id() {
        return this._id;
    }
    set id(value: string) {
        this._id = value;
    }

    private _label: string;
    get label() {
        return this._label;
    }
    set label(value: string) {
        this._label = value;
    }

    private _handler?: (window: UIWindow) => void;
    get handler() {
        return this._handler;
    }
    set handler(value: ((window: UIWindow) => void) | undefined) {
        this._handler = value;
    }

    constructor(app: App, window: UIWindow, options: ContextMenuOptions) {
        super(app, window);
        this._id = options.id;
        this._label = options.label;
        this._handler = options.handler;
    }

    present(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const contextMenuElement = document.createElement("div");
        contextMenuElement.id = `${this.window.elementId}-${getKebabCase(this.kind)}-${this.id}`;

        addClasses(contextMenuElement, this.app.prefix,
            `${getKebabCase(this.kind)}-item`
        );

        const labelElement = document.createElement("label");
        addClasses(labelElement, this.app.prefix,
            `${getKebabCase(this.kind)}-label`
        );
        labelElement.innerText = this.label;
        contextMenuElement.appendChild(labelElement);

        contextMenuElement.addEventListener("contextmenu", (ev: MouseEvent) => {
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        });

        contextMenuElement.addEventListener("click", (ev: MouseEvent) => {
            if (typeof this.handler === "function") {
                this.handler(this.window);
            }

            this.window.hideContextMenu();
        }, false);

        fragment.appendChild(contextMenuElement);
        return fragment;
    }
}