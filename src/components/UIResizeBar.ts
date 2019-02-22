import UIComponent from "./base/UIComponent";
import UIWindow from "./base/UIWindow";
import AppProcess from "../core/AppProcess";
import { batchClasses } from "../utils/StyleHelper";
import { getKebabCase } from "../utils/ValueHelper";
import { leastOneTrue } from "../utils/ObjectHelper";
import { ResizeBarOptions } from "../typings/Index";

export default class UIResizeBar extends UIComponent {
    readonly name: string = "resizeBar";

    private _top: boolean = true;
    get top(): boolean {
        return this._top;
    }
    set top(newValue: boolean) {
        this._top = newValue;
        if (typeof this.window.resizeBar === "object") {
            this.window.resizeBar.top = newValue;
        }
    }

    private _left: boolean = true;
    get left(): boolean {
        return this._left;
    }
    set left(newValue: boolean) {
        this._left = newValue;
        if (typeof this.window.resizeBar === "object") {
            this.window.resizeBar.left = newValue;
        }
    }

    private _right: boolean = true;
    get right(): boolean {
        return this._right;
    }
    set right(newValue: boolean) {
        this._right = newValue;
        if (typeof this.window.resizeBar === "object") {
            this.window.resizeBar.right = newValue;
        }
    }

    private _bottom: boolean = true;
    get bottom(): boolean {
        return this._bottom;
    }
    set bottom(newValue: boolean) {
        this._bottom = newValue;
        if (typeof this.window.resizeBar === "object") {
            this.window.resizeBar.bottom = newValue;
        }
    }

    private _leftTop: boolean = true;
    get leftTop(): boolean {
        return this._leftTop;
    }
    set leftTop(newValue: boolean) {
        this._leftTop = newValue;
        if (typeof this.window.resizeBar === "object") {
            this.window.resizeBar.leftTop = newValue;
        }
    }

    private _rightTop: boolean = true;
    get rightTop(): boolean {
        return this._rightTop;
    }
    set rightTop(newValue: boolean) {
        this._rightTop = newValue;
        if (typeof this.window.resizeBar === "object") {
            this.window.resizeBar.rightTop = newValue;
        }
    }

    private _leftBottom: boolean = true;
    get leftBottom(): boolean {
        return this._leftBottom;
    }
    set leftBottom(newValue: boolean) {
        this._leftBottom = newValue;
        if (typeof this.window.resizeBar === "object") {
            this.window.resizeBar.leftBottom = newValue;
        }
    }

    private _rightBottom: boolean = true;
    get rightBottom(): boolean {
        return this._rightBottom;
    }
    set rightBottom(newValue: boolean) {
        this._rightBottom = newValue;
        if (typeof this.window.resizeBar === "object") {
            this.window.resizeBar.rightBottom = newValue;
        }
    }

    [key: string]: any;

    constructor(window: UIWindow, app: AppProcess) {
        super(window, app);

        if (typeof window.resizeBar === "object") {
            this.top = typeof window.resizeBar.top === "boolean" ? window.resizeBar.top : this.top;
            this.left = typeof window.resizeBar.left === "boolean" ? window.resizeBar.left : this.left;
            this.right = typeof window.resizeBar.right === "boolean" ? window.resizeBar.right : this.right;
            this.bottom = typeof window.resizeBar.bottom === "boolean" ? window.resizeBar.bottom : this.bottom;
            this.leftTop = typeof window.resizeBar.leftTop === "boolean" ? window.resizeBar.leftTop : this.leftTop;
            this.rightTop = typeof window.resizeBar.rightTop === "boolean" ? window.resizeBar.rightTop : this.rightTop;
            this.leftBottom = typeof window.resizeBar.leftBottom === "boolean" ? window.resizeBar.leftBottom : this.leftBottom;
            this.rightBottom = typeof window.resizeBar.rightBottom === "boolean" ? window.resizeBar.rightBottom : this.rightBottom;
        }
    }

    createView(): DocumentFragment | undefined {
        if (leastOneTrue<ResizeBarOptions>(this.window.resizeBar)) {
            const fragment = document.createDocumentFragment();

            const resizeBarElement = document.createElement("div");

            resizeBarElement.classList.add(...batchClasses(this.app.prefix, getKebabCase(this.name)));

            if (typeof this.window.resizeBar === "object") {
                for (const key of Object.keys(this.window.resizeBar)) {
                    this.createItem(resizeBarElement, <boolean>this[key], getKebabCase(key));
                }
            }

            fragment.appendChild(resizeBarElement);
            return fragment;
        }
    }

    createItem(parent: HTMLElement, isCreate: boolean, direction: string): void {
        if (!isCreate) return;

        const itemElement = document.createElement("div");

        itemElement.classList.add(...batchClasses(this.app.prefix, `resize-${direction}`));

        parent.appendChild(itemElement);
    }
}