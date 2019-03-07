import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import WindowMoveDragEvent from "../basic/events/WindowMoveDragEvent";
import * as Types from "../../types";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";
import * as ExceptionHelper from "../utils/ExceptionHelper";
import * as ValueHelper from "../utils/ValueHelper";
import * as JsonHelper from "../utils/JsonHelper";

export default class UIToolBar extends UIWindowComponent implements UIControl {
    public readonly kind: string = "toolBar";
    private height: number = 30;
    private drag: Types.DragMoveOptions = {
        vertical: true,
        horizontal: true,
        breakLeft: true,
        breakRight: true,
        breakTop: true,
        breakBottom: true
    };

    constructor(app: App, window: UIWindow, options: Types.ToolBarOptions) {
        super(app, window);

        this.height = ValueHelper.numberCast(options.height) || this.height;
        this.drag = options.drag === undefined ? this.drag : JsonHelper.merge(this.drag, options.drag);
    }

    present(): DocumentFragment | null {
        const fragment = document.createDocumentFragment();
        const kebabCase = StringHelper.getKebabCase(this.kind);
        const toolBarElement = document.createElement("div");

        ElementHelper.addClasses(toolBarElement, this.app.prefix,
            kebabCase,
            "flexbox",
            "flex-row",
        );

        ElementHelper.addStyles(toolBarElement, <Types.CSSStyleObject>{
            height: `${this.height}px`
        });

        if (this.drag.vertical === true || this.drag.horizontal === true) {
            new WindowMoveDragEvent(toolBarElement, this.window, this.drag);
        }

        fragment.appendChild(toolBarElement);
        return fragment;
    }
}