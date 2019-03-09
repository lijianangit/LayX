import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import WindowResizeDragEvent from "../basic/events/WindowResizeDragEvent";
import * as Types from "../../types";
import * as Enums from "../basic/enums";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";

export default class UIResizeBar extends UIWindowComponent implements UIControl {
    public readonly kind: string = "resizeBar";
    public left: boolean = true;
    public right: boolean = true;
    public top: boolean = true;
    public bottom: boolean = true;
    public leftTop: boolean = true;
    public rightTop: boolean = true;
    public leftBottom: boolean = true;
    public rightBottom: boolean = true;

    private readonly directions = [
        Enums.ResizeDirection.LEFT,
        Enums.ResizeDirection.RIGHT,
        Enums.ResizeDirection.TOP,
        Enums.ResizeDirection.BOTTOM,
        Enums.ResizeDirection.LEFT_TOP,
        Enums.ResizeDirection.RIGHT_TOP,
        Enums.ResizeDirection.LEFT_BOTTOM,
        Enums.ResizeDirection.RIGHT_BOTTOM
    ];

    constructor(app: App, window: UIWindow, options: Types.ResizeOption) {
        super(app, window);

        this.left = CastHelper.booleanCast(options.left, this.left);
        this.right = CastHelper.booleanCast(options.right, this.right);
        this.top = CastHelper.booleanCast(options.top, this.top);
        this.bottom = CastHelper.booleanCast(options.bottom, this.bottom);
        this.leftTop = CastHelper.booleanCast(options.leftTop, this.leftTop);
        this.rightTop = CastHelper.booleanCast(options.rightTop, this.rightTop);
        this.leftBottom = CastHelper.booleanCast(options.leftBottom, this.leftBottom);
        this.rightBottom = CastHelper.booleanCast(options.rightBottom, this.rightBottom);
    }

    present(): DocumentFragment | null {
        if (!this.leastOneTrue()) return null;

        const fragment = document.createDocumentFragment();
        const kebabCase = StringHelper.getKebabCase(this.kind);
        const resizeElement = document.createElement("div");

        ElementHelper.addClasses(resizeElement, this.app.prefix,
            kebabCase
        );

        for (const key of this.directions) {
            if (this[key] === true) {
                resizeElement.appendChild(this.presentItem(key));
            }
        }

        fragment.appendChild(resizeElement);
        return fragment;
    }

    private presentItem(key: Enums.ResizeDirection): HTMLElement {
        const kebabCase = StringHelper.getKebabCase(key);
        const itemElement = document.createElement("div");

        ElementHelper.addClasses(itemElement, this.app.prefix,
            `resize-${kebabCase}`
        );

        new WindowResizeDragEvent(itemElement, key, this.window);

        return itemElement;
    }

    private leastOneTrue(): boolean {
        let isExist = false;
        for (const key of this.directions) {
            if (this[key] === true) {
                isExist = true;
                break;
            }
        }
        return isExist;
    }
}