import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIIcon from "./UIIcon";
import * as Types from "../../types";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";
import * as EventHelper from "../utils/EventHelper";
import * as TypeHelper from "../utils/TypeHelper";

export default class UIActionButton extends UIWindowComponent implements UIControl {
    public static readonly width: number = 45;

    public readonly elementId: string;

    public id: string;
    public label: string;
    public handler?: (ev: MouseEvent, window: UIWindow) => void;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, window: UIWindow, options: Types.ActionButtonOption) {
        super(app, window);

        this.id = CastHelper.stringCast(options.id);
        this.label = CastHelper.stringCast(options.label);
        this.handler = options.handler;

        this.elementId = `${this.window.elementId}-${Enums.ComponentType.ACTION_BUTTON}-${this.id}`;
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const actionButtonElement = ElementHelper.createElement("div");
        actionButtonElement.setAttribute("data-window-id", this.window.id);
        actionButtonElement.id = this.elementId;
        actionButtonElement.setAttribute("title", this.label);

        ElementHelper.addClasses(actionButtonElement, this.app.prefix,
            Enums.ComponentType.ACTION_BUTTON,
            "flexbox",
            "flex-center"
        );

        ElementHelper.addStyles(actionButtonElement, <Types.CSSStyleObject>{
            width: `${UIActionButton.width}px`
        });

        actionButtonElement.addEventListener("mousedown", (ev: MouseEvent) => {
            if (ev.button === 0 && typeof this.handler === "function") {
                this.handler(ev, this.window);
            }
        }, true);

        const icon = new UIIcon(this.app, this.id);
        const iconElement = icon.present();
        actionButtonElement.appendChild(iconElement);

        this.setComponent(Enums.ComponentType.ACTION_BUTTON, icon);

        fragment.appendChild(actionButtonElement);
        return fragment;
    }


    public static readonly destroy: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "destroy",
        label: "关闭",
        handler: function (ev: MouseEvent, window: UIWindow) {
            window.destroy();
        }
    };

    public static readonly max: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "max",
        label: "最大化",
        handler: function (ev: MouseEvent, window: UIWindow) {
            window.max();
        }
    };

    public static readonly restore: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "restore",
        label: "恢复",
        handler: function (ev: MouseEvent, window: UIWindow) {
            window.normal();
        }
    };

    public static readonly min: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "min",
        label: "最小化",
        handler: function (ev: MouseEvent, window: UIWindow) {
            window.min();
        }
    };

    public static readonly info: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "info",
        label: "关于",
        handler: function (ev: MouseEvent, window: UIWindow) {
        }
    };

    public static readonly more: Types.ActionButtonOption = <Types.ActionButtonOption>{
        id: "more",
        label: "更多操作",
        handler: function (ev: MouseEvent, window: UIWindow) {
        }
    };
}