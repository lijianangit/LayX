import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIComponent from "../basic/models/UIComponent";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import WindowMoveDragEvent from "../basic/events/WindowMoveDragEvent";
import UIActionBar from "./UIActionBar";
import UITitleBar from "./UITitleBar";
import UITabBar from "./UITabBar";
import UIIcon from "./UIIcon";
import * as Types from "../../types";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";

export default class UISalverButton extends UIComponent implements UIControl {
    public static size: number = 50;
    public static talentHeight: number = 5;

    public readonly elementId: string;
    public windowId: string;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, windowId: string) {
        super(app);

        this.windowId = CastHelper.stringCast(windowId);
        this.elementId = `${this.app.prefix + windowId}-${Enums.ComponentType.SALVER_BUTTON}`;
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const salverButtonElement = ElementHelper.createElement("div");
        salverButtonElement.id = this.elementId;
        salverButtonElement.setAttribute("data-window-id", this.windowId);

        ElementHelper.addClasses(salverButtonElement, this.app.prefix,
            Enums.ComponentType.SALVER_BUTTON,
            "flexbox",
            "flex-center",
            "salver-button-active"
        );

        ElementHelper.addStyles(salverButtonElement, <Types.CSSStyleObject>{
            width: `${UISalverButton.size}px`,
            height: `${UISalverButton.size}px`
        });

        const window = this.app.getWindow(this.windowId);

        salverButtonElement.addEventListener("mousedown", (ev: MouseEvent) => {
            window!.updateZIndex(true);
        });

        salverButtonElement.addEventListener("dblclick", (ev: MouseEvent) => {
            window!.destroy();
        });

        const titleBar = window!.getComponent<UITitleBar>(`
            ${Enums.ComponentType.TOOL_BAR}
            /${Enums.ComponentType.TITLE_BAR}`);

        let defaultTitle: string | undefined = "未命名标题";
        let defaultIcon: UIIcon | null = new UIIcon(this.app, <UIWindow>window, "icon");

        if (titleBar) {
            defaultTitle = titleBar.title || defaultTitle;

            let windowIcon = titleBar.getComponent<UIIcon>(`${Enums.ComponentType.WINDOW_ICON}`);
            if (windowIcon) defaultIcon = windowIcon;
        }

        salverButtonElement.setAttribute("title", defaultTitle);
        salverButtonElement.appendChild(defaultIcon!.present());

        fragment.appendChild(salverButtonElement);

        return fragment;
    }
}