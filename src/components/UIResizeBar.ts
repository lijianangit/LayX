import UIComponent from "./base/UIComponent";
import UIWindow from "./base/UIWindow";
import AppProcess from "../core/AppProcess";
import { batchClasses } from "../utils/StyleHelper";
import { getKebabCase } from "../utils/ValueHelper";
import { leastOneTrue } from "../utils/ObjectHelper";
import { ResizeBarOptions } from "../typings/Index";

export default class UIResizeBar extends UIComponent {
    readonly name: string = "resizeBar";

    top?: boolean = true;
    left?: boolean = true;
    right?: boolean = true;
    bottom?: boolean = true;
    leftTop?: boolean = true;
    rightTop?: boolean = true;
    leftBottom?: boolean = true;
    rightBottom?: boolean = true;

    [key: string]: any;

    constructor(window: UIWindow, app: AppProcess) {
        super(window, app);

        if (typeof window.resizeBar === "object") {
            window.resizeBar.top = this.top = typeof window.resizeBar.top === "boolean" ? window.resizeBar.top : this.top;
            window.resizeBar.left = this.left = typeof window.resizeBar.left === "boolean" ? window.resizeBar.left : this.left;
            window.resizeBar.right = this.right = typeof window.resizeBar.right === "boolean" ? window.resizeBar.right : this.right;
            window.resizeBar.bottom = this.bottom = typeof window.resizeBar.bottom === "boolean" ? window.resizeBar.bottom : this.bottom;
            window.resizeBar.leftTop = this.leftTop = typeof window.resizeBar.leftTop === "boolean" ? window.resizeBar.leftTop : this.leftTop;
            window.resizeBar.rightTop = this.rightTop = typeof window.resizeBar.rightTop === "boolean" ? window.resizeBar.rightTop : this.rightTop;
            window.resizeBar.leftBottom = this.leftBottom = typeof window.resizeBar.leftBottom === "boolean" ? window.resizeBar.leftBottom : this.leftBottom;
            window.resizeBar.rightBottom = this.rightBottom = typeof window.resizeBar.rightBottom === "boolean" ? window.resizeBar.rightBottom : this.rightBottom;
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