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
    public readonly elementId: string = `${this.window.elementId}-${Enums.ComponentType.RESIZE_BAR}`;

    public left: boolean = true;
    public right: boolean = true;
    public top: boolean = true;
    public bottom: boolean = true;
    public leftTop: boolean = true;
    public rightTop: boolean = true;
    public leftBottom: boolean = true;
    public rightBottom: boolean = true;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

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

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        if (this.leastOneTrue()) {
            const resizeElement = ElementHelper.createElement("div");
            resizeElement.setAttribute("data-window-id", this.window.id);
            resizeElement.id = this.elementId;

            ElementHelper.addClasses(resizeElement, this.app.prefix,
                Enums.ComponentType.RESIZE_BAR
            );

            resizeElement.addEventListener("contextmenu", (ev: MouseEvent) => {
                ev.preventDefault();
                ev.stopPropagation();
                ev.returnValue = false;
                return false;
            });

            for (const key of this.directions) {
                if ((<any>this)[StringHelper.getCamelCase(key)] === true) {
                    resizeElement.appendChild(this.presentItem(key));
                }
            }

            fragment.appendChild(resizeElement);
        }

        return fragment;
    }

    private presentItem(key: Enums.Direction): HTMLElement {
        const itemElement = document.createElement("div");
        itemElement.setAttribute("data-window-id", this.window.id);

        ElementHelper.addClasses(itemElement, this.app.prefix,
            `resize-item-${key}`
        );

        new WindowResizeDragEvent(this.app, this.window, itemElement, key);

        return itemElement;
    }

    private readonly directions = [
        Enums.Direction.LEFT,
        Enums.Direction.RIGHT,
        Enums.Direction.TOP,
        Enums.Direction.BOTTOM,
        Enums.Direction.LEFT_TOP,
        Enums.Direction.RIGHT_TOP,
        Enums.Direction.LEFT_BOTTOM,
        Enums.Direction.RIGHT_BOTTOM
    ];

    private leastOneTrue(): boolean {
        let isExist: boolean = false;
        for (const key of this.directions) {
            if ((<any>this)[StringHelper.getCamelCase(key)] === true) {
                isExist = true;
                break;
            }
        }
        return isExist;
    }
}