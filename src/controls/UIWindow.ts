import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIComponent from "../basic/models/UIComponent";
import UIParclose from "./UIParclose";
import UIResizeBar from "./UIResizeBar";
import UIContextMenu from "./UIContextMenu";
import UIToolBar from "./UIToolBar";
import * as Types from "../../types";
import * as Enums from "../basic/enums";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as TypeHelper from "../utils/TypeHelper";

export default class UIWindow extends UIComponent implements UIControl {
    public readonly kind: string = "window";
    public readonly elementId: string;
    private flickering: boolean = false;
    private zIndex: number = this.app.zIndex;
    readonly id: string;
    public width: number = 800;
    public height: number = 600;
    public maxWidth: number = innerWidth;
    public maxHeight: number = innerHeight;
    public minWidth: number = 100;
    public minHeight: number = 100;
    public left: number;
    public top: number;
    public background: string | null = "#ffffff";
    public shadow: string | null = "rgba(0, 0, 0, 0.3) 1px 1px 24px";
    public parclose: number | false = false;
    public mode: Enums.WindowMode = Enums.WindowMode.LAYER;
    public border: string | null = null;
    public borderRadius: string | null = null;
    public animate: Enums.WindowAnimate = Enums.WindowAnimate.ZOOM;
    public resizeBar: Types.ResizeOption | false = {};
    public toolBar: Types.ToolBarOption | false = {};
    public contextMenu: Array<Types.ContextMenuOption> | false = false;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(this.elementId);
    }

    private _flickerShadow: string | null = null;
    get flickerShadow() {
        return this.getFlickerShadow();
    }

    constructor(app: App, options: Types.WindowOption) {
        super(app);

        if (!options.id) throw new Error("`id` is required.");
        this.id = options.id;
        this.elementId = this.app.prefix + this.id;

        this.mode = CastHelper.windowModeCast(options.mode, this.mode);

        this.width = CastHelper.numberCast(options.width, this.width);
        this.height = CastHelper.numberCast(options.height, this.height);
        this.maxWidth = Math.min(CastHelper.numberCast(options.maxWidth, this.maxWidth), this.maxWidth);
        this.maxHeight = Math.min(CastHelper.numberCast(options.maxHeight, this.maxHeight), this.maxHeight);
        this.minWidth = Math.max(CastHelper.numberCast(options.minWidth, this.minWidth), this.minWidth);
        this.minHeight = Math.max(CastHelper.numberCast(options.minHeight, this.minHeight), this.minHeight);
        this.width = Math.max(this.minWidth, this.width);
        this.width = Math.min(this.maxWidth, this.width);
        this.height = Math.max(this.minHeight, this.height);
        this.height = Math.min(this.maxHeight, this.height);
        [this.left, this.top] = CastHelper.offsetCast(options.offset, this.width, this.height);

        this.background = CastHelper.stringOrBooleanStyleCast(options.background, this.background);
        this.shadow = CastHelper.stringOrBooleanStyleCast(options.shadow, this.shadow);
        this.parclose = CastHelper.numberOrBooleanCast(options.parclose, this.parclose, 0);

        [this.border, this.borderRadius] = CastHelper.borderCast(options.border, {
            width: 1,
            style: "solid",
            color: "#3baced",
            radius: 4
        });

        this.animate = CastHelper.windowAnimateCast(options.animate, this.animate);

        this.resizeBar = CastHelper.jsonOrBooleanCast(options.resizeBar, this.resizeBar);
        this.toolBar = CastHelper.jsonOrBooleanCast(options.toolBar, this.toolBar);
        this.contextMenu = CastHelper.contextMenusCast(options.contextMenu);
    }

    present(): DocumentFragment {
        const fragment = document.createDocumentFragment();
        const kebabCase = StringHelper.getKebabCase(this.kind);
        const windowElement = document.createElement("div");
        windowElement.id = this.elementId;

        const isNeedAnimation = this.animate !== Enums.WindowAnimate.NONE;
        ElementHelper.addClasses(windowElement, this.app.prefix,
            kebabCase,
            `window-${this.mode}`,
            "flexbox",
            "flex-column",
            isNeedAnimation ? "animate" : "",
            isNeedAnimation ? `animate-${this.animate}In` : ""
        );

        ElementHelper.addStyles(windowElement, <Types.CSSStyleObject>{
            zIndex: this.mode === Enums.WindowMode.LAYER ? `${this.zIndex}` : null,
            maxWidth: `${this.maxWidth}px`,
            maxHeight: `${this.maxHeight}px`,
            minWidth: `${this.minWidth}px`,
            minHeight: `${this.minHeight}px`,
            width: `${this.width}px`,
            height: `${this.height}px`,
            top: this.mode === Enums.WindowMode.LAYER ? `${this.top}px` : null,
            left: this.mode === Enums.WindowMode.LAYER ? `${this.left}px` : null,
            background: this.background,
            border: this.border,
            borderRadius: this.borderRadius,
            webkitBorderRadius: this.borderRadius,
            boxShadow: this.shadow,
            webkitBoxShadow: this.shadow
        });

        isNeedAnimation && (windowElement.addEventListener("animationend", (ev: AnimationEvent) => {
            ElementHelper.removeClasses(windowElement, this.app.prefix, `animate-${this.animate}In`);
        }));
        windowElement.addEventListener("mousedown", (ev: MouseEvent) => {
            this.updateZIndex(true);
        }, true);

        if (this.toolBar !== false) {
            const toolBar = new UIToolBar(this.app, this, this.toolBar);
            const toolBarElement = toolBar.present();
            toolBarElement != null && windowElement.appendChild(toolBarElement);
        }

        if (this.resizeBar !== false) {
            const resizeBar = new UIResizeBar(this.app, this, this.resizeBar);
            const resizeElement = resizeBar.present();
            resizeElement != null && windowElement.appendChild(resizeElement);
        }

        fragment.appendChild(windowElement);

        if (this.parclose !== false) {
            const parclose = new UIParclose(this.app, this, { opacity: this.parclose });
            const parcloseElement = parclose.present();

            if (parcloseElement != null && parcloseElement.hasChildNodes) {
                ElementHelper.addStyles(<HTMLElement>(parcloseElement.firstElementChild), <Types.CSSStyleObject>{
                    zIndex: `${this.zIndex - 1}`
                });
                fragment.appendChild(parcloseElement);
            }
        }

        if (this.contextMenu !== false) {
            let contextMenuElements = document.getElementById(`${this.elementId}-context-menu`);
            if (!contextMenuElements) {
                contextMenuElements = this.createContextMenu();
                fragment.appendChild(contextMenuElements);
            }

            windowElement.addEventListener("contextmenu", (ev: MouseEvent) => {
                ev.preventDefault();
                ev.returnValue = false;

                if (contextMenuElements != null) {
                    ElementHelper.addClasses(contextMenuElements, this.app.prefix,
                        `context-menu-active`
                    );
                    ElementHelper.addStyles(contextMenuElements, <Types.CSSStyleObject>{
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

        ElementHelper.addClasses(contextMenuElements, this.app.prefix,
            `context-menu`
        );

        contextMenuElements.addEventListener("contextmenu", (ev: MouseEvent) => {
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        }, true);

        if (this.contextMenu instanceof Array && TypeHelper.isContextMenus(this.contextMenu)) {
            for (const item of this.contextMenu) {
                const contextMenu = new UIContextMenu(this.app, this, item);
                const contextMenuElement = contextMenu.present();
                contextMenuElement && contextMenuElements.appendChild(contextMenuElement);
            }
        }
        return contextMenuElements;
    }

    flicker() {
        if (this.element && this.mode === Enums.WindowMode.LAYER && this.flickering === false) {
            let flickerTimes: number = 0;
            const duration: number = 60;
            const flickerTotals = 12;

            this.flickering = true;
            for (let i = 0; i < flickerTotals; i++) {
                if (i % 2 == 0) {
                    setTimeout(() => {
                        ElementHelper.addStyles(this.element, <Types.CSSStyleObject>{
                            boxShadow: this.flickerShadow,
                            webkitBoxShadow: this.flickerShadow
                        });
                        flickerTimes++;
                    }, i * duration);
                }
                else {
                    setTimeout(() => {
                        ElementHelper.addStyles(this.element, <Types.CSSStyleObject>{
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
        if (uiWindow && uiWindow.mode === Enums.WindowMode.LAYER) {
            if (this.element) {
                const isNeedAnimation = this.animate !== Enums.WindowAnimate.NONE;

                this.zIndex = this.app.zIndex;
                ElementHelper.addStyles(this.element, <Types.CSSStyleObject>{
                    zIndex: `${this.zIndex}`
                });
                if (disabled === false) {
                    ElementHelper.addClasses(this.element, this.app.prefix,
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
            ElementHelper.addStyles(<HTMLElement>(parcloseElement), <Types.CSSStyleObject>{
                zIndex: `${this.zIndex - 1}`
            });
        }
    }

    hideContextMenu(): void {
        const contextMenuElements = document.getElementById(`${this.elementId}-context-menu`);
        if (contextMenuElements) {
            ElementHelper.removeClasses(contextMenuElements, this.app.prefix,
                `context-menu-active`
            );
        }
    }

    private getFlickerShadow() {
        if (this.shadow !== null) {
            const shadowArray = this.shadow.split(" ");
            shadowArray[shadowArray.length - 1] = Number(shadowArray[shadowArray.length - 1].replace("px", "")) / 2 + "px";
            return shadowArray.join(" ");
        }
        return this.shadow;
    }
}