import UIComponent from "../basic/models/UIComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import { WindowOptions, CSSStyleObject, WindowCoord, BorderOptions, ContextMenuOptions } from "../../types";
import { addStyles, addClasses, removeClasses, borderCast } from "../utils/ElementHelper";
import { WindowMode } from "../basic/enums/WindowMode";
import { WindowAnimate } from "../basic/enums/WindowAnimate";
import { numberCast, offsetCast, animateCast } from "../utils/ValueHelper";
import { isWindowMode, isJsonObject, isContextMenus } from "../utils/TypeHelper";
import { merge } from "../utils/JsonHelper";
import { getKebabCase } from "../utils/StringHelper";
import UIParclose from "./UIParclose";
import { assertNever } from "../utils/ExceptionHelper";
import UIContextMenu from "./UIContextMenu";


export default class UIWindow extends UIComponent implements UIControl {
    readonly kind: string = "window";
    private flickering: boolean = false;
    private zIndex: number;

    private _id: string;
    get id() {
        return this._id;
    }

    readonly elementId: string;
    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(this.elementId);
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

    private _shadow: string | null = "rgba(0, 0, 0, 0.3) 1px 1px 24px";
    get shadow() {
        return this._shadow;
    }
    set shadow(value: string | null) {
        this._shadow = value;
    }
    private _flickerShadow: string | null = null;
    get flickerShadow() {
        if (this.shadow !== null) {
            const shadowArray = this.shadow.split(" ");
            shadowArray[shadowArray.length - 1] = Number(shadowArray[shadowArray.length - 1].replace("px", "")) / 2 + "px";
            return shadowArray.join(" ");
        }
        return this._shadow;
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

    private _animate: WindowAnimate = WindowAnimate.ZOOM;
    get animate() {
        return this._animate;
    }
    set animate(value: WindowAnimate) {
        this._animate = value;
    }

    private _maxWidth: number = innerWidth;
    get maxWidth() {
        return this._maxWidth;
    }
    set maxWidth(value: number) {
        this._maxWidth = value;
    }

    private _maxHeight: number = innerHeight;
    get maxHeight() {
        return this._maxHeight;
    }
    set maxHeight(value: number) {
        this._maxHeight = value;
    }

    private _minWidth: number = 100;
    get minWidth() {
        return this._minWidth;
    }
    set minWidth(value: number) {
        this._minWidth = value;
    }

    private _minHeight: number = 100;
    get minHeight() {
        return this._minHeight;
    }
    set minHeight(value: number) {
        this._minHeight = value;
    }

    private _parclose: number | false = false;
    get parclose() {
        return this._parclose;
    }
    set parclose(value: number | false) {
        this.parclose = value;
    }

    private _contextMenu: Array<ContextMenuOptions> | false = false;
    get contextMenu() {
        return this._contextMenu;
    }
    set contextMenu(value: Array<ContextMenuOptions> | false) {
        this._contextMenu = value;
    }

    constructor(app: App, options: WindowOptions) {
        super(app);

        if (!options.id) throw new Error("`id` is required.");
        this._id = options.id;
        this.elementId = this.app.prefix + this.id;

        this.zIndex = this.app.zIndex;

        this._width = numberCast(options.width) || this._width;
        this._height = numberCast(options.height) || this._height;

        const coord: WindowCoord = offsetCast(options.offset, this._width, this._height) || [(innerWidth - this._width) / 2, (innerHeight - this._height) / 2];
        this._left = coord[0];
        this._top = coord[1];

        (this._mode = options.mode || this._mode) && isWindowMode(this._mode);

        this._background = options.background || this._background;

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

        this._shadow = (options.shadow === undefined ? true : options.shadow) === false ?
            null :
            typeof options.shadow === "string" ? options.shadow : this._shadow;

        this._animate = animateCast(options.animate === undefined ? this._animate : options.animate);

        this._maxWidth = Math.min(options.maxWidth || this._maxWidth, this._maxWidth);
        this._maxHeight = Math.min(options.maxHeight || this._maxHeight, this._maxHeight);

        this._minWidth = Math.max(options.minWidth || this._minWidth, this._minWidth);
        this._minHeight = Math.max(options.minHeight || this._minHeight, this._minHeight);

        this._parclose = options.parclose === undefined ? this._parclose : (options.parclose === true ? 0 : this._parclose);

        this._contextMenu = options.contextMenu === undefined ? this._contextMenu : options.contextMenu;
        if (this._contextMenu !== false && !isContextMenus(this._contextMenu)) {
            assertNever(this._contextMenu);
        }
    }

    present(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const windowElement = document.createElement("div");
        windowElement.id = this.elementId;

        const isNeedAnimation = this.animate !== WindowAnimate.NONE;
        addClasses(windowElement, this.app.prefix,
            getKebabCase(this.kind),
            `window-${this.mode}`,
            "flexbox",
            isNeedAnimation ? "animate" : "",
            isNeedAnimation ? `animate-${this.animate}In` : ""
        );

        addStyles(windowElement, <CSSStyleObject>{
            zIndex: this.mode === WindowMode.LAYER ? `${this.zIndex}` : null,
            maxWidth: `${this.maxWidth}px`,
            maxHeight: `${this.maxHeight}px`,
            minWidth: `${this.minWidth}px`,
            minHeight: `${this.minHeight}px`,
            width: `${this.width}px`,
            height: `${this.height}px`,
            top: this.mode === WindowMode.LAYER ? `${this.top}px` : null,
            left: this.mode === WindowMode.LAYER ? `${this.left}px` : null,
            background: this.background,
            border: this.border,
            borderRadius: this.borderRadius,
            webkitBorderRadius: this.borderRadius,
            boxShadow: this.shadow,
            webkitBoxShadow: this.shadow
        });

        isNeedAnimation && (windowElement.addEventListener("animationend", (ev: AnimationEvent) => {
            removeClasses(windowElement, this.app.prefix, `animate-${this.animate}In`);
        }));

        windowElement.addEventListener("click", (ev: MouseEvent) => {
            this.hideContextMenu();
            this.updateZIndex();
        }, false);

        fragment.appendChild(windowElement);

        // parclose element
        if (this.parclose !== false) {
            const parclose = new UIParclose(this.app, this, { opacity: this.parclose });
            const parcloseElement = parclose.present();
            if (parcloseElement.hasChildNodes) {
                addStyles(<HTMLElement>(parcloseElement.firstElementChild), <CSSStyleObject>{
                    zIndex: `${this.zIndex - 1}`
                });
                fragment.appendChild(parcloseElement);
            }
        }

        // contextMenu element
        if (this.contextMenu !== false) {
            let contextMenuElements = document.getElementById(`${this.elementId}-context-menu`);
            if (!contextMenuElements) {
                contextMenuElements = this.createContextMenu();
                fragment.appendChild(contextMenuElements);
            }

            windowElement.addEventListener("contextmenu", (ev: MouseEvent) => {
                ev.preventDefault();
                ev.returnValue = false;

                this.updateZIndex();

                if (contextMenuElements != null) {
                    addClasses(contextMenuElements, this.app.prefix,
                        `context-menu-active`
                    );
                    addStyles(contextMenuElements, <CSSStyleObject>{
                        zIndex: `${this.zIndex + 1}`,
                        top: `${ev.pageY}px`,
                        left: `${ev.pageX}px`,
                    });
                }

                return false;
            });
        }

        return fragment;
    }


    createContextMenu(): HTMLElement {
        const contextMenuElements = document.createElement("div");
        contextMenuElements.id = `${this.elementId}-context-menu`;

        addClasses(contextMenuElements, this.app.prefix,
            `context-menu`
        );

        contextMenuElements.addEventListener("contextmenu", (ev: MouseEvent) => {
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        });

        if (this.contextMenu instanceof Array && isContextMenus(this.contextMenu)) {
            for (const item of this.contextMenu) {
                const contextMenu = new UIContextMenu(this.app, this, item);
                contextMenuElements.appendChild(contextMenu.present());
            }
        }
        return contextMenuElements;
    }

    flicker() {
        if (this.element && this.mode === WindowMode.LAYER && this.flickering === false) {
            let flickerTimes: number = 0;
            const duration: number = 60;
            const flickerTotals = 12;

            this.flickering = true;
            for (let i = 0; i < flickerTotals; i++) {
                if (i % 2 == 0) {
                    setTimeout(() => {
                        addStyles(this.element, <CSSStyleObject>{
                            boxShadow: this.flickerShadow,
                            webkitBoxShadow: this.flickerShadow
                        });
                        flickerTimes++;
                    }, i * duration);
                }
                else {
                    setTimeout(() => {
                        addStyles(this.element, <CSSStyleObject>{
                            boxShadow: this.shadow,
                            webkitBoxShadow: this.shadow
                        });
                        flickerTimes++;
                    }, i * duration);
                }
            }
            const checkFlickering = setInterval(() => {
                if (flickerTimes >= flickerTotals) {
                    clearInterval(checkFlickering);
                    this.flickering = false;
                }
            }, duration);
        }
    }

    updateZIndex(disabled: boolean = false): void {
        if (this === this.app.window) return;

        const uiWindow = this.app.getWindow(this.id);
        if (uiWindow && uiWindow.mode === WindowMode.LAYER) {
            if (this.element) {
                const isNeedAnimation = this.animate !== WindowAnimate.NONE;

                this.zIndex = this.app.zIndex;
                addStyles(this.element, <CSSStyleObject>{
                    zIndex: `${this.zIndex}`
                });
                if (disabled === false) {
                    addClasses(this.element, this.app.prefix,
                        isNeedAnimation ? `animate-${this.animate}In` : ""
                    );
                }
                this.updateParcloseZIndex();
                this.app.window = this;
            }
        }
    }

    updateParcloseZIndex(): void {
        const parcloseElement = document.getElementById(`${this.elementId}-parclose`);
        if (parcloseElement) {
            addStyles(<HTMLElement>(parcloseElement), <CSSStyleObject>{
                zIndex: `${this.zIndex - 1}`
            });
        }
    }

    hideContextMenu(): void {
        const contextMenuElements = document.getElementById(`${this.elementId}-context-menu`);
        if (contextMenuElements) {
            removeClasses(contextMenuElements, this.app.prefix,
                `context-menu-active`
            );
        }
    }
}