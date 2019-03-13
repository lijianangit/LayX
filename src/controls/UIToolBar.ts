import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import WindowMoveDragEvent from "../basic/events/WindowMoveDragEvent";
import UIActionBar from "./UIActionBar";
import UIActionButton from "./UIActionButton";
import * as Types from "../../types";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";

export default class UIToolBar extends UIWindowComponent implements UIControl {
    public readonly kind: string = "toolBar";
    public height: number = 30;
    public drag: Types.DragMoveOption | false = {};
    public actionBar: Array<Types.ActionButtonOption> | false = [
        UIActionButton.infoActionButton,
        UIActionButton.minActionButton,
        UIActionButton.maxActionButton,
        UIActionButton.destroyActionButton
    ];

    constructor(app: App, window: UIWindow, options: Types.ToolBarOption) {
        super(app, window);

        this.height = CastHelper.numberCast(options.height, this.height);
        this.drag = CastHelper.jsonOrBooleanCast(options.drag, {
            vertical: true,
            horizontal: true,
            breakLeft: true,
            breakRight: true,
            breakTop: true,
            breakBottom: true
        });
        this.actionBar = CastHelper.actionButtonsCast(this.actionBar);
    }

    present(): DocumentFragment | null {
        const fragment = document.createDocumentFragment();
        const kebabCase = StringHelper.getKebabCase(this.kind);
        const toolBarElement = document.createElement("div");

        ElementHelper.addClasses(toolBarElement, this.app.prefix,
            kebabCase,
            "flexbox",
            "flex-row-reverse"
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

        if (this.actionBar !== false) {
            const actionBar = new UIActionBar(this.app, this.window, this);
            const actionBarElement = actionBar.present();
            
            actionBarElement != null && toolBarElement.appendChild(actionBarElement);
        }
        if (this.drag !== false && (this.drag.vertical === true || this.drag.horizontal === true)) {
            new WindowMoveDragEvent(toolBarElement, this.window, this.drag);
        }

        fragment.appendChild(toolBarElement);
        return fragment;
    }
}