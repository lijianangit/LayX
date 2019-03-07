import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import DragResizeEvent from "../basic/events/DragResizeEvent";
import * as Types from "../../types";
import * as Enums from "../basic/enums";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";

export default class UIResizeBar extends UIWindowComponent implements UIControl {
    public readonly kind: string = "resizeBar";
    private left: boolean = true;
    private right: boolean = true;
    private top: boolean = true;
    private bottom: boolean = true;
    private leftTop: boolean = true;
    private rightTop: boolean = true;
    private leftBottom: boolean = true;
    private rightBottom: boolean = true;

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

    constructor(app: App, window: UIWindow, options: Types.ResizeOptions | boolean) {
        super(app, window);
        if (options === true) return;
        if (options === false) {
            this.left = this.right = this.top = this.bottom = this.leftTop = this.rightTop = this.leftBottom = this.rightBottom = false;
            return;
        }
        this.left = options.left === undefined ? this.left : options.left;
        this.right = options.right === undefined ? this.right : options.right;
        this.top = options.top === undefined ? this.top : options.top;
        this.bottom = options.bottom === undefined ? this.bottom : options.bottom;
        this.leftTop = options.leftTop === undefined ? this.leftTop : options.leftTop;
        this.rightTop = options.rightTop === undefined ? this.rightTop : options.rightTop;
        this.leftBottom = options.leftBottom === undefined ? this.leftBottom : options.leftBottom;
        this.rightBottom = options.rightBottom === undefined ? this.rightBottom : options.rightBottom;
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

        new DragResizeEvent(itemElement, key, this.window);

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