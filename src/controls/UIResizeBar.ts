import UIWindowRelative from "../basic/models/UIWindowRelative";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import { ResizeOptions } from "../../types";
import { addClasses } from "../utils/ElementHelper";
import { getKebabCase } from "../utils/StringHelper";
import { ResizeDirection } from "../basic/enums/ResizeDirection";
import WindowResizeDragHandler from "../basic/handlers/WindowResizeDragHandler";

export default class UIResizeBar extends UIWindowRelative implements UIControl {
    readonly kind: string = "resizeBar";
    private readonly directions = [
        ResizeDirection.LEFT,
        ResizeDirection.RIGHT,
        ResizeDirection.TOP,
        ResizeDirection.BOTTOM,
        ResizeDirection.LEFT_TOP,
        ResizeDirection.RIGHT_TOP,
        ResizeDirection.LEFT_BOTTOM,
        ResizeDirection.RIGHT_BOTTOM
    ];

    private _left: boolean = true;
    get left() {
        return this._left;
    }
    set left(value: boolean) {
        this._left = value;
    }

    private _right: boolean = true;
    get right() {
        return this._right;
    }
    set right(value: boolean) {
        this._right = value;
    }

    private _top: boolean = true;
    get top() {
        return this._top;
    }
    set top(value: boolean) {
        this._top = value;
    }

    private _bottom: boolean = true;
    get bottom() {
        return this._bottom;
    }
    set bottom(value: boolean) {
        this._bottom = value;
    }

    private _leftTop: boolean = true;
    get leftTop() {
        return this._leftTop;
    }
    set leftTop(value: boolean) {
        this._leftTop = value;
    }

    private _rightTop: boolean = true;
    get rightTop() {
        return this._rightTop;
    }
    set rightTop(value: boolean) {
        this._rightTop = value;
    }

    private _leftBottom: boolean = true;
    get leftBottom() {
        return this._leftBottom;
    }
    set leftBottom(value: boolean) {
        this._leftBottom = value;
    }

    private _rightBottom: boolean = true;
    get rightBottom() {
        return this._rightBottom;
    }
    set rightBottom(value: boolean) {
        this._rightBottom = value;
    }

    constructor(app: App, window: UIWindow, options: ResizeOptions) {
        super(app, window);

        this._left = options.left === undefined ? this._left : options.left;
        this._right = options.right === undefined ? this._right : options.right;
        this._top = options.top === undefined ? this._top : options.top;
        this._bottom = options.bottom === undefined ? this._bottom : options.bottom;
        this._leftTop = options.leftTop === undefined ? this._leftTop : options.leftTop;
        this._rightTop = options.rightTop === undefined ? this._rightTop : options.rightTop;
        this._leftBottom = options.leftBottom === undefined ? this._leftBottom : options.leftBottom;
        this._rightBottom = options.rightBottom === undefined ? this._rightBottom : options.rightBottom;
    }

    present(): DocumentFragment {
        const fragment = document.createDocumentFragment();
        if (this.leastOneTrue()) {
            const resizeElement = document.createElement("div");

            addClasses(resizeElement, this.app.prefix,
                getKebabCase(this.kind)
            );

            for (const key of this.directions) {
                if ((<ResizeOptions>this)[key] === true) {
                    resizeElement.appendChild(this.presentItem(key));
                }
            }

            fragment.appendChild(resizeElement);
        }
        return fragment;
    }

    private presentItem(key: ResizeDirection): HTMLElement {
        const itemElement = document.createElement("div");

        addClasses(itemElement, this.app.prefix,
            `resize-${getKebabCase(key)}`
        );

        new WindowResizeDragHandler(itemElement, key, this.window);

        return itemElement;
    }

    private leastOneTrue(): boolean {
        let isExist = false;
        for (const key of this.directions) {
            if ((<ResizeOptions>this)[key] === true) {
                isExist = true;
                break;
            }
        }
        return isExist;
    }
}