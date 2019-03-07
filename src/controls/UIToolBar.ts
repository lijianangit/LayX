import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import * as Types from "../../types";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";
import * as ExceptionHelper from "../utils/ExceptionHelper";

export default class UIToolBar extends UIWindowComponent implements UIControl {
    public readonly kind: string = "toolBar";

    constructor(app: App, window: UIWindow, options: Types.ToolBarOptions) {
        super(app, window);
    }

    present(): DocumentFragment | null {
        const fragment = document.createDocumentFragment();
        return fragment;
    }
}