import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIActionButton from "./UIActionButton";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";
import * as Types from "../../types";
import * as CastHelper from "../utils/CastHelper";

export default class UITitleBar extends UIWindowComponent implements UIControl {
    public readonly kind: string = "titleBar";

    public title?: string;

    constructor(app: App, window: UIWindow, options: Types.TitleBarOption) {
        super(app, window);

        this.title = options.title;
    }

    present(): DocumentFragment | null {
        const fragment = document.createDocumentFragment();
        const kebabCase = StringHelper.getKebabCase(this.kind);
        const titleBarElement = document.createElement("div");

        ElementHelper.addClasses(titleBarElement, this.app.prefix,
            kebabCase,
            "flexbox",
            "flex-row",
            "flex-vertical-center"
        );

        if (this.title) {
            const titleElement = document.createElement("div");
            ElementHelper.addClasses(titleElement, this.app.prefix,
                "title"
            );

            titleElement.innerText = this.title;

            titleBarElement.appendChild(titleElement);
        }

        fragment.appendChild(titleBarElement);

        return fragment;
    }
}