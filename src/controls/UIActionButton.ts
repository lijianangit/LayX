import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIToolBar from "./UIToolBar";
import UIActionBarComponent from "../basic/models/UIActionBarComponent";
import UIActionBar from "./UIActionBar";
import UIIcon from "./UIIcon";
import * as Types from "../../types";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";

export default class UIActionButton extends UIActionBarComponent implements UIControl {
    public readonly kind: string = "actionButton";
    public id: string;
    public label: string;
    public handler?: (window: UIWindow, actionButton: UIActionButton) => void;

    public static readonly destroyActionButton: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "destroy",
        label: "关闭",
        handler: function (window: UIWindow, actionButton: UIActionButton) {
            window.destroy();
        }
    };

    public static readonly maxActionButton: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "max",
        label: "最大化",
        handler: function (window: UIWindow, actionButton: UIActionButton) {
            window.max();
        }
    };

    public static readonly restoreActionButton: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "restore",
        label: "恢复",
        handler: function (window: UIWindow, actionButton: UIActionButton) {
        }
    };

    public static readonly minActionButton: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "min",
        label: "最小化",
        handler: function (window: UIWindow, actionButton: UIActionButton) {
        }
    };

    public static readonly infoActionButton: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "info",
        label: "关于",
        handler: function (window: UIWindow, actionButton: UIActionButton) {
        }
    };

    constructor(app: App, window: UIWindow, toolBar: UIToolBar, actionBar: UIActionBar, options: Types.ActionButtonOption) {
        super(app, window, toolBar, actionBar);
        this.id = options.id;
        this.label = options.label;
        this.handler = options.handler;
    }

    present(): DocumentFragment | null {
        const fragment = document.createDocumentFragment();
        const kebabCase = StringHelper.getKebabCase(this.kind);
        const actionButtonElement = document.createElement("div");

        actionButtonElement.id = `${this.window.elementId}-${kebabCase}-${this.id}`;
        actionButtonElement.setAttribute("title", this.label);

        ElementHelper.addClasses(actionButtonElement, this.app.prefix,
            kebabCase,
            `${kebabCase}-${this.id}`,
            "flexbox",
            "flex-center"
        );

        const icon = new UIIcon(this.app, this.window, this.id);
        const iconElement = icon.present();
        iconElement && actionButtonElement.appendChild(iconElement);

        actionButtonElement.addEventListener("mousedown", (ev: MouseEvent) => {
            if (ev.button === 0 && typeof this.handler === "function") {
                this.handler(this.window, this);
            }
        }, true);

        fragment.appendChild(actionButtonElement);
        return fragment;
    }
}