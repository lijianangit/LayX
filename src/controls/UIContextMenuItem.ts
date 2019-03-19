import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import * as Types from "../../types";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";

export default class UIContextMenuItem extends UIWindowComponent implements UIControl {
    public readonly kind: string = "contextMenuItem";
    public readonly components: Types.Component = <Types.Component>{};

    public static readonly height: number = 34;

    public id: string;
    public label: string;
    public handler?: (window: UIWindow) => void;

    constructor(app: App, window: UIWindow, options: Types.ContextMenuOption) {
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
            kebabCase
        );

        ElementHelper.addStyles(contextMenuElement, <Types.CSSStyleObject>{
            height: `${UIContextMenuItem.height}px`,
            lineHeight: `${UIContextMenuItem.height - 10}px`
        });

        const labelElement = document.createElement("label");
        ElementHelper.addClasses(labelElement, this.app.prefix,
            `${kebabCase}-label`
        );
        labelElement.innerText = this.label;
        contextMenuElement.appendChild(labelElement);

        contextMenuElement.addEventListener("mousedown", (ev: MouseEvent) => {
            if (ev.button == 0 && typeof this.handler === "function") {
                this.handler(this.window);
            }
        });

        fragment.appendChild(contextMenuElement);
        return fragment;
    }
}