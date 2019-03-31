import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIComponent from "../basic/models/UIComponent";
import UIParclose from "./UIParclose";
import UIResizeBar from "./UIResizeBar";
import UIToolBar from "./UIToolBar";
import UIActionButton from "./UIActionButton";
import UIContextMenuBar from "./UIContextMenuBar";
import UIActionBar from "./UIActionBar";
import UITopMenuBar from "./UITopMenuBar";
import * as Types from "../../types";
import * as Enums from "../basic/enums";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as TypeHelper from "../utils/TypeHelper";
import * as ExceptionHelper from "../utils/ExceptionHelper";

export default class UIWindow extends UIComponent implements UIControl {
    public app: App = this.app;
    public status: Enums.WindowStatus = Enums.WindowStatus.NORMAL;
    public lastStatus: Enums.WindowStatus = Enums.WindowStatus.NORMAL;
    public readonly elementId: string;
    private flickering: boolean = false;
    public zIndex: number = this.app.zIndex;
    public isNeedAnimation: boolean = false;

    public readonly id: string;
    public width: number = 800;
    public height: number = 600;
    public maxWidth: number = innerWidth;
    public maxHeight: number = innerHeight;
    public minWidth: number = 200;
    public minHeight: number = 200;
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
    public contextMenu: Array<Types.ContextMenuButtonOption> | false = false;
    public topMenu: Array<Types.ContextMenuButtonOption> | false = false;

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

        if (!TypeHelper.isStringWithNotEmpty(options.id)) ExceptionHelper.assertId();
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
        this.parclose = CastHelper.typeOrBooleanCast(options.parclose, this.parclose, 0);

        [this.border, this.borderRadius] = CastHelper.borderCast(options.border, {
            width: 1,
            style: "solid",
            color: "#3baced",
            radius: 4
        });

        this.animate = CastHelper.windowAnimateCast(options.animate, this.animate);
        this.isNeedAnimation = this.animate !== Enums.WindowAnimate.NONE;

        this.resizeBar = CastHelper.jsonOrBooleanCast(options.resizeBar, this.resizeBar);
        this.toolBar = CastHelper.jsonOrBooleanCast(options.toolBar, this.toolBar);
        this.contextMenu = CastHelper.contextMenuButtonsCast(options.contextMenu);
        this.topMenu = CastHelper.contextMenuButtonsCast(options.topMenu);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const windowElement = ElementHelper.createElement("div");
        windowElement.id = this.elementId;
        windowElement.setAttribute("data-window-id", this.id);

        ElementHelper.addClasses(windowElement, this.app.prefix,
            Enums.ComponentType.WINDOW,
            `window-${this.mode}`,
            "flexbox",
            "flex-column",
            this.isNeedAnimation ? "animate" : "",
            this.isNeedAnimation ? `animate-${this.animate}-create` : ""
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

        if (this.isNeedAnimation) {
            windowElement.addEventListener("animationend", (ev: AnimationEvent) => {
                ElementHelper.removeClasses(this.element, this.app.prefix,
                    `animate-${this.animate}-create`,
                    `animate-${this.animate}-drag-to-normal`
                );

                if (ElementHelper.containClass(this.element, this.app.prefix, `animate-${this.animate}-destroy`)) {
                    ElementHelper.removeClasses(this.element, this.app.prefix,
                        `animate-${this.animate}-destroy`
                    );

                    if (this.status === Enums.WindowStatus.MAX) {
                        ElementHelper.removeClasses(document.body, `z${this.app.prefix}`,
                            "body-noscroll"
                        );
                    }

                    if (this.app.salver) {
                        this.app.salver.removeItem();
                        this.app.salver.updateOffset();
                    }

                    const index = this.app.windows.indexOf(this);
                    this.app.windows.splice(index, 1);

                    this.element
                        && this.element.parentElement
                        && this.element.parentElement.removeChild(this.element);
                }

                if (ElementHelper.containClass(this.element, this.app.prefix, `animate-${this.animate}-to-min`)) {
                    if (this.app.salver && this.app.salver.element) {
                        const currentItemElement = this.app.salver.element.querySelector(`.${this.app.prefix + Enums.ComponentType.SALVER_ITEM}[data-window-id='${this.id}']`);
                        ElementHelper.removeClasses(<HTMLElement>currentItemElement, this.app.prefix,
                            "salver-item-active"
                        );
                    }
                    ElementHelper.addClasses(this.element, this.app.prefix,
                        "window-min"
                    );
                    ElementHelper.removeClasses(this.element, this.app.prefix,
                        `animate-${this.animate}-to-min`
                    );

                    this.status = Enums.WindowStatus.MIN;
                }
            });

            windowElement.addEventListener("transitionend", (ev: TransitionEvent) => {
                ElementHelper.removeClasses(this.element, this.app.prefix,
                    `animate-${this.animate}-to-max`,
                    `animate-${this.animate}-to-normal`
                );
            });
        }

        windowElement.addEventListener("mousedown", (ev: MouseEvent) => {
            this.updateZIndex(true);
        }, true);

        if (this.toolBar !== false) {
            const toolBar = new UIToolBar(this.app, this, this.toolBar);
            const toolBarElement = toolBar.present();
            windowElement.appendChild(toolBarElement);
            this.setComponent(Enums.ComponentType.TOOL_BAR, toolBar);
        }

        if (this.topMenu !== false) {
            const topMenuBar = new UITopMenuBar(this.app, this, this.topMenu);
            const topMenuBarElement = topMenuBar.present();
            windowElement.appendChild(topMenuBarElement);
            this.setComponent(Enums.ComponentType.TOP_MENU_BAR, topMenuBar);
        }

        if (this.resizeBar !== false) {
            const resizeBar = new UIResizeBar(this.app, this, this.resizeBar);
            const resizeElement = resizeBar.present();
            windowElement.appendChild(resizeElement);
            this.setComponent(Enums.ComponentType.RESIZE_BAR, resizeBar);
        }

        fragment.appendChild(windowElement);

        if (this.parclose !== false) {
            const parclose = new UIParclose(this.app, this, { opacity: this.parclose });
            const parcloseElement = parclose.present();

            if (parcloseElement.hasChildNodes) {
                ElementHelper.addStyles(<HTMLElement>(parcloseElement.firstElementChild), <Types.CSSStyleObject>{
                    zIndex: `${this.zIndex - 1}`
                });
                fragment.appendChild(parcloseElement);
            }
            this.setComponent(Enums.ComponentType.PARCLOSE, parclose);
        }

        if (this.contextMenu !== false) {
            const contextMenuBar = new UIContextMenuBar(this.app, this, "window", this.contextMenu);
            const contextMenuBarElement = contextMenuBar.present();
            fragment.appendChild(contextMenuBarElement);

            windowElement.addEventListener("contextmenu", (ev: MouseEvent) => {
                ev.preventDefault();
                ev.returnValue = false;

                contextMenuBar.updateOffset(ev, this.zIndex + 1);

                return false;
            });

            this.setComponent(Enums.ComponentType.CONTEXT_MENU_BAR, contextMenuBar);
        }

        return fragment;
    }

    destroy(): void {
        ElementHelper.addClasses(this.element, this.app.prefix,
            this.isNeedAnimation ? `animate-${this.animate}-destroy` : ""
        );
    }

    normal(dragToNormal: boolean = false): void {
        if (this.element && this.element.parentElement && this.status !== Enums.WindowStatus.NORMAL) {
            ElementHelper.addClasses(this.element, this.app.prefix,
                this.isNeedAnimation
                    ? (
                        dragToNormal === false
                            ? `animate-${this.animate}-to-normal`
                            : `animate-${this.animate}-drag-to-normal`
                    )
                    : ""
            );

            ElementHelper.addStyles(this.element, <Types.CSSStyleObject>{
                top: `${this.top}px`,
                left: `${this.left}px`,
                width: `${this.width}px`,
                height: `${this.height}px`,
                borderRadius: `${this.borderRadius}px`
            });

            const resizeBar = this.getComponent<UIResizeBar>(Enums.ComponentType.RESIZE_BAR);
            if (resizeBar) {
                ElementHelper.removeClasses(resizeBar.element, this.app.prefix,
                    "resize-bar-disabled"
                );
            }

            ElementHelper.removeClasses(document.body, `z${this.app.prefix}`,
                "body-noscroll"
            );

            const actionButtons = this.getComponent<Array<UIActionButton>>(`${Enums.ComponentType.TOOL_BAR}->${Enums.ComponentType.ACTION_BAR}->${Enums.ComponentType.ACTION_BUTTONS}`);
            if (actionButtons && actionButtons.length > 0) {
                for (const item of actionButtons) {
                    if (item.id === "max") {
                        const restoreActionButton = new UIActionButton(this.app, this, UIActionButton.restore);
                        const restoreActionButtonElement = restoreActionButton.element;
                        if (!(restoreActionButtonElement && restoreActionButtonElement.parentElement)) return;

                        const maxActionButton = new UIActionButton(this.app, this, item);
                        const maxActionButtonElement = maxActionButton.present();
                        restoreActionButtonElement.parentElement.replaceChild(maxActionButtonElement, restoreActionButtonElement);

                        break;
                    }
                }
            }

            this.status = Enums.WindowStatus.NORMAL;

            this.zoomActionButtons(this.width);
        }
    }

    max(): void {
        if (this.element && this.element.parentElement && this.status !== Enums.WindowStatus.MAX) {
            this.lastStatus = this.status;

            ElementHelper.addClasses(this.element, this.app.prefix,
                this.isNeedAnimation ? `animate-${this.animate}-to-max` : ""
            );

            ElementHelper.addStyles(this.element, <Types.CSSStyleObject>{
                top: `0`,
                left: `0`,
                width: `${innerWidth}px`,
                height: `${innerHeight}px`,
                borderRadius: `0`
            });

            const resizeBar = this.getComponent<UIResizeBar>(Enums.ComponentType.RESIZE_BAR);
            if (resizeBar) {
                ElementHelper.addClasses(resizeBar.element, this.app.prefix,
                    "resize-bar-disabled"
                );
            }

            ElementHelper.addClasses(document.body, `z${this.app.prefix}`,
                "body-noscroll"
            );

            const actionButtons = this.getComponent<Array<UIActionButton>>(`${Enums.ComponentType.TOOL_BAR}->${Enums.ComponentType.ACTION_BAR}->${Enums.ComponentType.ACTION_BUTTONS}`);
            if (actionButtons && actionButtons.length > 0) {
                for (const item of actionButtons) {
                    if (item.id === "max") {
                        const maxActionButtonElement = item.element;
                        if (!(maxActionButtonElement && maxActionButtonElement.parentElement)) return;

                        const restoreActionButton = new UIActionButton(this.app, this, UIActionButton.restore);
                        const restoreActionButtonElement = restoreActionButton.present();
                        maxActionButtonElement.parentElement.replaceChild(restoreActionButtonElement, maxActionButtonElement);

                        break;
                    }
                }
            }

            this.status = Enums.WindowStatus.MAX;

            this.zoomActionButtons(innerWidth);
        }
    }

    min(): void {
        if (this.element) {
            this.lastStatus = this.status;
            ElementHelper.addClasses(this.element, this.app.prefix,
                this.isNeedAnimation ? `animate-${this.animate}-to-min` : ""
            );
        }
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
            this.zIndex = this.app.zIndex;
            ElementHelper.addStyles(this.element, <Types.CSSStyleObject>{
                zIndex: `${this.zIndex}`
            });
            if (disabled === false) {
                ElementHelper.addClasses(this.element, this.app.prefix,
                    this.isNeedAnimation ? `animate-${this.animate}In` : ""
                );
            }

            const parclose = this.getComponent<UIParclose>(Enums.ComponentType.PARCLOSE);
            parclose && parclose.updateZIndex(this.zIndex - 1);

            this.app.lastWindow = this.app.window;
            this.app.window = this;

            this.app.salver && this.app.salver.addOrUpdateItem();
        }
    }

    hideMoreActionContextMenu(): void {
        const moreActionContextMenuBar = this.getComponent<UIContextMenuBar>(Enums.ComponentType.MORE_ACTION_CONTEXT_MENU_BAR);
        if (moreActionContextMenuBar) {
            ElementHelper.removeClasses(moreActionContextMenuBar.element, this.app.prefix,
                "context-menu-bar-active"
            );
        }
    }

    removeMoreActionContextMenu(): void {
        const moreActionButton = new UIActionButton(this.app, this, UIActionButton.more);
        const moreActionButtonElement = moreActionButton.element;

        if (moreActionButtonElement && moreActionButtonElement.parentElement) {
            moreActionButtonElement.parentElement.removeChild(moreActionButtonElement);
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

    zoomActionButtons(windowWidth: number): void {
        const actionBar = this.getComponent<UIActionBar>(`${Enums.ComponentType.TOOL_BAR}->${Enums.ComponentType.ACTION_BAR}`);
        actionBar && actionBar.zoomActionButtons(windowWidth);
    }
}