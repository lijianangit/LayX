import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import WindowMoveDragEvent from "../basic/events/WindowMoveDragEvent";
import UIActionBar from "./UIActionBar";
import UITitleBar from "./UITitleBar";
import UITabBar from "./UITabBar";
import * as Types from "../../types";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";

export default class UIToolBar extends UIWindowComponent implements UIControl {
    public readonly elementId: string = `${this.window.elementId}-${Enums.ComponentType.TOOL_BAR}`;

    public height: number = 30;
    public drag: Types.DragMoveOption | false = {
        vertical: true,
        horizontal: true,
        breakLeft: true,
        breakRight: true,
        breakTop: true,
        breakBottom: true
    };
    public titleBar: Types.TitleBarOption | false = {};
    public tabBar: Types.TabBarOption | false = {};
    public actionBar: Types.ActionBarOption | false = {};

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, window: UIWindow, options: Types.ToolBarOption) {
        super(app, window);

        this.height = CastHelper.numberCast(options.height, this.height);
        this.drag = CastHelper.jsonOrBooleanCast(options.drag, this.drag);
        this.titleBar = CastHelper.jsonOrBooleanCast(options.titleBar, this.titleBar);
        this.tabBar = CastHelper.jsonOrBooleanCast(options.tabBar, this.tabBar);
        this.actionBar = CastHelper.jsonOrBooleanCast(options.actionBar, this.actionBar);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const toolBarElement = ElementHelper.createElement("div");
        toolBarElement.id = this.elementId;

        ElementHelper.addClasses(toolBarElement, this.app.prefix,
            Enums.ComponentType.TOOL_BAR,
            "flexbox",
            "flex-row"
        );

        ElementHelper.addStyles(toolBarElement, <Types.CSSStyleObject>{
            height: `${this.height}px`
        });

        toolBarElement.addEventListener("dblclick", (ev: MouseEvent) => {
            if (this.window.status === Enums.WindowStatus.MAX) {
                this.window.normal();
                return;
            }
            if (this.window.status === Enums.WindowStatus.NORMAL) {
                this.window.max();
                return;
            }
        }, true);

        if (this.titleBar !== false) {
            const titleBar = new UITitleBar(this.app, this.window, this.titleBar);
            const titleBarElement = titleBar.present();

            toolBarElement.appendChild(titleBarElement);
            this.setComponent(Enums.ComponentType.TITLE_BAR, titleBar);
        }

        if (this.tabBar !== false) {
            const tabBar = new UITabBar(this.app, this.window, this.tabBar);
            const tabBarElement = tabBar.present();

            toolBarElement.appendChild(tabBarElement);
            this.setComponent(Enums.ComponentType.TAB_BAR, tabBar);
        }

        if (this.actionBar !== false) {
            const actionBar = new UIActionBar(this.app, this.window, this.actionBar);
            const actionBarElement = actionBar.present();

            actionBarElement && toolBarElement.appendChild(actionBarElement);
            this.setComponent(Enums.ComponentType.ACTION_BAR, actionBar);
        }

        if (this.drag && (this.drag.vertical === true || this.drag.horizontal === true)) {
            new WindowMoveDragEvent(this.app, this.window, toolBarElement, this.drag);
        }

        fragment.appendChild(toolBarElement);
        return fragment;
    }
}