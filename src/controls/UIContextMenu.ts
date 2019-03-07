import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import * as Types from "../../types";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";

export default class UIContextMenu extends UIWindowComponent implements UIControl {
    public readonly kind: string = "contextMenu";
    private id: string;
    private label: string;
    private handler?: (window: UIWindow) => void;

    constructor(app: App, window: UIWindow, options: Types.ContextMenuOptions) {
        super(app, window);
        this.id = options.id;
        this.label = options.label;
        this.handler = options.handler;
    }

    present(): DocumentFragment | null {
        const fragment = document.createDocumentFragment();
        const kebabCase = StringHelper.getKebabCase(this.kind);
        const contextMenuElement = document.createElement("div");

        contextMenuElement.id = `${this.window.elementId}-${kebabCase}-${this.id}`;

        ElementHelper.addClasses(contextMenuElement, this.app.prefix,
            `${kebabCase}-item`
        );

        const labelElement = document.createElement("label");
        ElementHelper.addClasses(labelElement, this.app.prefix,
            `${kebabCase}-label`
        );
        labelElement.innerText = this.label;
        contextMenuElement.appendChild(labelElement);

        contextMenuElement.addEventListener("mousedown", (ev: MouseEvent) => {
            if (typeof this.handler === "function") {
                this.handler(this.window);
            }
        });

        fragment.appendChild(contextMenuElement);
        return fragment;
    }
}