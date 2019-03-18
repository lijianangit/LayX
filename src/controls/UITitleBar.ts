import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIActionButton from "./UIActionButton";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";
import * as Types from "../../types";
import * as CastHelper from "../utils/CastHelper";
import UIIcon from "./UIIcon";

export default class UITitleBar extends UIWindowComponent implements UIControl {
    public readonly kind: string = "titleBar";
    public readonly components: Types.Component = <Types.Component>{};

    public icon: string | false = "icon";
    public title?: string;

    constructor(app: App, window: UIWindow, options: Types.TitleBarOption) {
        super(app, window);

        this.icon = CastHelper.typeOrBooleanCast(options.icon, this.icon);
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

        if (this.icon) {
            const windowIconElement = document.createElement("div");
            ElementHelper.addClasses(windowIconElement, this.app.prefix,
                "window-icon",
                "flexbox",
                "flex-center"
            );

            windowIconElement.addEventListener("dblclick", (ev: MouseEvent) => {
                ev.stopPropagation();

                this.window.destroy();
            });

            titleBarElement.appendChild(windowIconElement);

            const icon = new UIIcon(this.app, this.window, this.icon);
            const iconElement = icon.present();
            iconElement && windowIconElement.appendChild(iconElement);
            this.components[icon.kind] = icon;
        }

        if (this.title) {
            const titleElement = document.createElement("div");
            ElementHelper.addClasses(titleElement, this.app.prefix,
                "window-title"
            );

            const labelElement = document.createElement("label");
            ElementHelper.addClasses(labelElement, this.app.prefix,
                "label"
            );
            labelElement.innerText = this.title;

            titleElement.appendChild(labelElement);

            titleBarElement.appendChild(titleElement);
        }

        fragment.appendChild(titleBarElement);

        return fragment;
    }
}