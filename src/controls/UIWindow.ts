import UIComponent from "../basic/UIComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import { WindowOptions, CSSStyleObject, WindowCoord, BorderOptions } from "../../types";
import { addStyles, addClasses, removeClasses, borderCast } from "../utils/ElementHelper";
import { WindowMode } from "../basic/enums/WindowMode";
import { WindowAnimate } from "../basic/enums/WindowAnimate";
import { numberCast, offsetCast } from "../utils/ValueHelper";
import { isWindowMode, isJsonObject } from "../utils/TypeHelper";
import { merge } from "../utils/JsonHelper";


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

    private _mode: WindowMode = WindowMode.LAYER;
    get mode() {
        return this._mode;
    }
    set mode(value: WindowMode) {
        this._mode = value;
    }

    private _background: string = "#ffffff";
    get background() {
        return this._background;
    }
    set background(value: string) {
        this._background = value;
    }

    private _border: string | null = null;
    get border() {
        return this._border;
    }
    set border(value: string | null) {
        this._border = value;
    }

    private _borderRadius: string | null = null;
    get borderRadius() {
        return this._borderRadius;
    }
    set borderRadius(value: string | null) {
        this._borderRadius = value;
    }

    private _boxShadow: string | null = "rgba(0, 0, 0, 0.3) 1px 1px 24px";
    get boxShadow() {
        return this._boxShadow;
    }
    set boxShadow(value: string | null) {
        this._boxShadow = value;
    }

    private _animate: WindowAnimate = WindowAnimate.ZOOM;
    get animate() {
        return this._animate;
    }
    set animate(value: WindowAnimate) {
        this._animate = value;
    }

    private _left: number;
    get left() {
        return this._left;
    }
    set left(value: number) {
        this._left = value;
    }

    private _top: number;
    get top() {
        return this._top;
    }
    set top(value: number) {
        this._top = value;
    }

    constructor(app: App, options: WindowOptions) {
        super(app);

        if (!options.id) throw new Error("`id` is required.");
        this._id = options.id;

        this._width = numberCast(options.width) || this._width;
        this._height = numberCast(options.height) || this._height;

        const coord: WindowCoord = offsetCast(options.offset, this._width, this._height) || [(innerWidth - this._width) / 2, (innerHeight - this._height) / 2];
        this._left = coord[0];
        this._top = coord[1];

        (this._mode = options.mode || this._mode) && isWindowMode(this._mode);

        this._background = options.background || this.background;

        const defaultBorder: BorderOptions = {
            width: 1,
            style: "solid",
            color: "#3baced",
            radius: 4
        };
        const borderOption = options.border === undefined ?
            defaultBorder :
            (isJsonObject(options.border) ? merge(defaultBorder, options.border) : options.border);
        const borderStyle = borderCast(borderOption);
        this._border = borderStyle[0];
        this._borderRadius = borderStyle[1];
    }

    present(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const windowElement = document.createElement("div");
        windowElement.id = this.app.prefix + this.id;

        const isNeedAnimation = this.animate !== WindowAnimate.NONE;
        addClasses(windowElement, this.app.prefix,
            this.kind,
            `window-${this.mode}`,
            "flexbox",
            isNeedAnimation ? "animate" : "",
            isNeedAnimation ? `animate-${this.animate}In` : ""
        );
        addStyles(windowElement, <CSSStyleObject>{
            zIndex: this.mode === WindowMode.LAYER ? `${this.app.zIndex}` : null,
            width: `${this.width}px`,
            height: `${this.height}px`,
            top: `${this.top}px`,
            left: `${this.left}px`,
            background: this.background,
            border: this.border,
            borderRadius: this.borderRadius,
            webkitBorderRadius: this.borderRadius,
            boxShadow: this.boxShadow,
            webkitBoxShadow: this.boxShadow
        });

        isNeedAnimation && (windowElement.addEventListener("animationend", (ev: AnimationEvent) => {
            removeClasses(windowElement, this.app.prefix, `animate-${this.animate}In`);
        }));

        fragment.appendChild(windowElement);
        return fragment;
    }
}