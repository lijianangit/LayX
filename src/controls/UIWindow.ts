import UIComponent from "../basic/UIComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import { WindowOptions, CSSStyleObject } from "../../types";
import { addStyles, addClasses } from "../utils/ElementHelper";


export default class UIWindow extends UIComponent implements UIControl {
    readonly kind: string = "window";

    private _id: string;
    get id() {
        return this._id;
    }

    private _width: number = 800;
    get width() {
        return this._width;
    }
    set width(value: number) {
        this._width = value;
    }

    private _height: number = 600;
    get height() {
        return this._height;
    }
    set height(value: number) {
        this._height = value;
    }

    constructor(app: App, options: WindowOptions) {
        super(app);
        this._id = options.id;
    }

    present(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const windowElement = document.createElement("div");
        windowElement.id = this.app.prefix + this.id;

        addClasses(windowElement, this.app.prefix, this.kind, "flexbox");
        addStyles(windowElement, <CSSStyleObject>{
            width: `${this.width}px`,
            height: `${this.height}px`
        });

        fragment.appendChild(windowElement);
        return fragment;
    }
}