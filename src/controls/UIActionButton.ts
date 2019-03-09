import UIToolBarComponent from "../basic/models/UIToolBarComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIToolBar from "./UIToolBar";
import UIActionBarComponent from "../basic/models/UIActionBarComponent";
import UIActionBar from "./UIActionBar";
import * as Types from "../../types";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";

export default class UIActionButton extends UIActionBarComponent implements UIControl {
    public readonly kind: string = "actionButton";
    public id: string;
    public handler?: (window: UIWindow) => void;

    constructor(app: App, window: UIWindow, toolBar: UIToolBar, actionBar: UIActionBar, options: Types.ActionButtonOption) {
        super(app, window, toolBar, actionBar);
        this.id = options.id;
        this.handler = options.handler;
    }

    present(): DocumentFragment | null {
        const fragment = document.createDocumentFragment();
        const kebabCase = StringHelper.getKebabCase(this.kind);
        const actionButtonElement = document.createElement("div");

        actionButtonElement.id = `${this.window.elementId}-${kebabCase}-${this.id}`;

        ElementHelper.addClasses(actionButtonElement, this.app.prefix,
            kebabCase,
            `${kebabCase}-${this.id}`,
            "flexbox",
            "flex-center"
        );

        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.setAttribute("class", `${this.app.prefix}iconfont`);

        const useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
        useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `#${this.id}`);
        svgElement.appendChild(useElement);

        actionButtonElement.appendChild(svgElement);

        actionButtonElement.addEventListener("mousedown", (ev: MouseEvent) => {
            if (typeof this.handler === "function") {
                this.handler(this.window);
            }
        }, true);

        fragment.appendChild(actionButtonElement);
        return fragment;
    }
}