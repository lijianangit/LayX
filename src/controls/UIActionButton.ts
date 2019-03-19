import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIIcon from "./UIIcon";
import * as Types from "../../types";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";

export default class UIActionButton extends UIWindowComponent implements UIControl {
    public readonly kind: string = "actionButton";
    public readonly components: Types.Component = <Types.Component>{};
    private kebabCase: string = StringHelper.getKebabCase(this.kind);

    public static readonly width: number = 45;

    public id: string;
    public label: string;
    public handler?: (ev: MouseEvent, window: UIWindow) => void;

    public readonly elementId: string;
    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    public static readonly destroyActionButton: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "destroy",
        label: "关闭",
        handler: function (ev: MouseEvent, window: UIWindow) {
            window.destroy();
        }
    };

    public static readonly maxActionButton: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "max",
        label: "最大化",
        handler: function (ev: MouseEvent, window: UIWindow) {
            window.max();
        }
    };

    public static readonly restoreActionButton: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "restore",
        label: "恢复",
        handler: function (ev: MouseEvent, window: UIWindow) {
            window.normal();
        }
    };

    public static readonly minActionButton: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "min",
        label: "最小化",
        handler: function (ev: MouseEvent, window: UIWindow) {
        }
    };

    public static readonly infoActionButton: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "info",
        label: "关于",
        handler: function (ev: MouseEvent, window: UIWindow) {
        }
    };

    public static readonly moreActionButton: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "more",
        label: "更多操作",
        handler: function (ev: MouseEvent, window: UIWindow) {
        }
    };

    constructor(app: App, window: UIWindow, options: Types.ActionButtonOption) {
        super(app, window);

        this.id = options.id;
        this.label = options.label;
        this.handler = options.handler;

        this.elementId = `${this.window.elementId}-${this.kebabCase}-${this.id}`;
    }

    present(): DocumentFragment | null {
        const fragment = document.createDocumentFragment();
        const actionButtonElement = document.createElement("div");

        actionButtonElement.id = this.elementId;
        actionButtonElement.setAttribute("title", this.label);

        ElementHelper.addClasses(actionButtonElement, this.app.prefix,
            this.kebabCase,
            `${this.kebabCase}-${this.id}`,
            "flexbox",
            "flex-center"
        );

        ElementHelper.addStyles(actionButtonElement, <Types.CSSStyleObject>{
            width: `${UIActionButton.width}px`
        });

        const icon = new UIIcon(this.app, this.window, this.id);
        const iconElement = icon.present();
        iconElement && actionButtonElement.appendChild(iconElement);
        this.components[icon.kind] = icon;

        actionButtonElement.addEventListener("mousedown", (ev: MouseEvent) => {
            if (ev.button === 0 && typeof this.handler === "function") {
                this.handler(ev, this.window);
            }
        }, true);

        fragment.appendChild(actionButtonElement);
        return fragment;
    }
}