import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIComponent from "../basic/models/UIComponent";
import UIParclose from "./UIParclose";
import UIResizeBar from "./UIResizeBar";
import UIToolBar from "./UIToolBar";
import UIActionButton from "./UIActionButton";
import UIContextMenu from "./UIContextMenu";
import * as Types from "../../types";
import * as Enums from "../basic/enums";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as TypeHelper from "../utils/TypeHelper";
import * as ExceptionHelper from "../utils/ExceptionHelper";

export default class UIWindow extends UIComponent implements UIControl {
    public readonly kind: string = "window";
    public readonly components: Types.Component = <Types.Component>{};
    public status: Enums.WindowStatus = Enums.WindowStatus.NORMAL;
    public readonly elementId: string;
    private flickering: boolean = false;
    private zIndex: number = this.app.zIndex;
    private isNeedAnimation: boolean = false;
    readonly id: string;
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

        if (!options.id) ExceptionHelper.assertId();
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
        this.contextMenu = CastHelper.contextMenusCast(options.contextMenu);
    }

    present(): DocumentFragment {
        const fragment = document.createDocumentFragment();
        const kebabCase = StringHelper.getKebabCase(this.kind);
        const windowElement = document.createElement("div");
        windowElement.id = this.elementId;

        ElementHelper.addClasses(windowElement, this.app.prefix,
            kebabCase,
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
                if (this.element && this.element.parentElement) {
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
                                "noscroll"
                            );
                        }
                        const index = this.app.windows.indexOf(this);
                        this.app.windows.splice(index, 1);
                        this.element.parentElement.removeChild(this.element);
                    }
                }
            });

            windowElement.addEventListener("transitionend", (ev: TransitionEvent) => {
                if (this.element) {
                    ElementHelper.removeClasses(this.element, this.app.prefix,
                        `animate-${this.animate}-to-max`,
                        `animate-${this.animate}-to-normal`
                    );
                }
            });
        }
        windowElement.addEventListener("mousedown", (ev: MouseEvent) => {
            this.updateZIndex(true);
        }, true);

        if (this.toolBar !== false) {
            const toolBar = new UIToolBar(this.app, this, this.toolBar);
            const toolBarElement = toolBar.present();
            toolBarElement != null && windowElement.appendChild(toolBarElement);
            this.components[toolBar.kind] = toolBar;
        }

        if (this.resizeBar !== false) {
            const resizeBar = new UIResizeBar(this.app, this, this.resizeBar);
            const resizeElement = resizeBar.present();
            resizeElement != null && windowElement.appendChild(resizeElement);
            this.components[resizeBar.kind] = resizeBar;
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
            this.components[parclose.kind] = parclose;
        }

        if (this.contextMenu !== false) {
            const contextMenu = new UIContextMenu(this.app, this, this.id, this.contextMenu);
            const contextMenuElement = contextMenu.present();
            contextMenuElement && fragment.appendChild(contextMenuElement);
            this.components[contextMenu.kind] = contextMenu;

            windowElement.addEventListener("contextmenu", (ev: MouseEvent) => {
                ev.preventDefault();
                ev.returnValue = false;

                contextMenu.updateContextMenuOffset(ev, this.zIndex + 1);
                
                return false;
            });
        }

        return fragment;
    }

    destroy(): void {
        if (this.element && this.element.parentElement) {
            ElementHelper.addClasses(this.element, this.app.prefix,
                this.isNeedAnimation ? `animate-${this.animate}-destroy` : ""
            );
        }
    }

    normal(dragToNormal: boolean = false): void {
        if (this.element && this.element.parentElement && this.status !== Enums.WindowStatus.NORMAL) {
            ElementHelper.addClasses(this.element, this.app.prefix,
                this.isNeedAnimation ? (
                    dragToNormal === false ? `animate-${this.animate}-to-normal` : `animate-${this.animate}-drag-to-normal`
                ) : ""
            );
            ElementHelper.addStyles(this.element, <Types.CSSStyleObject>{
                top: `${this.top}px`,
                left: `${this.left}px`,
                width: `${this.width}px`,
                height: `${this.height}px`,
                borderRadius: `${this.borderRadius}px`
            });

            const resizeBarElement = this.element.querySelector(`.${this.app.prefix}resize-bar`);
            if (resizeBarElement) {
                ElementHelper.removeClasses(<HTMLElement>resizeBarElement, this.app.prefix,
                    "resize-disabled"
                );
            }

            ElementHelper.removeClasses(document.body, `z${this.app.prefix}`,
                "noscroll"
            );

            const maxActionButton = new UIActionButton(this.app, this, UIActionButton.maxActionButton);
            const maxElement = maxActionButton.present();
            if (maxElement) {
                const restoreElement = this.element.querySelector(`#${this.elementId}-action-button-restore`);
                if (restoreElement && restoreElement.parentElement) {
                    restoreElement.parentElement.replaceChild(maxElement, restoreElement);
                }
            }

            this.status = Enums.WindowStatus.NORMAL;
        }
    }

    max(): void {
        if (this.element && this.element.parentElement) {
            if (this.status !== Enums.WindowStatus.MAX) {
                ElementHelper.addClasses(this.element, this.app.prefix,
                    this.isNeedAnimation ? `animate-${this.animate}-to-max` : ""
                );

                ElementHelper.addStyles(this.element, <Types.CSSStyleObject>{
                    top: `0px`,
                    left: `0px`,
                    width: `${innerWidth}px`,
                    height: `${innerHeight}px`,
                    borderRadius: `0px`
                });

                if (this.resizeBar !== false) {
                    const resizeBarElement = this.element.querySelector(`.${this.app.prefix}resize-bar`);
                    if (resizeBarElement) {
                        ElementHelper.addClasses(<HTMLElement>resizeBarElement, this.app.prefix,
                            "resize-disabled"
                        );
                    }
                }

                ElementHelper.addClasses(document.body, `z${this.app.prefix}`,
                    "noscroll"
                );

                const restoreActionButton = new UIActionButton(this.app, this, UIActionButton.restoreActionButton);
                const restoreElement = restoreActionButton.present();
                if (restoreElement) {
                    const maxElement = this.element.querySelector(`#${this.elementId}-action-button-max`);
                    if (maxElement && maxElement.parentElement) {
                        maxElement.parentElement.replaceChild(restoreElement, maxElement);
                    }
                }
                this.status = Enums.WindowStatus.MAX;
            }
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
            if (this.element) {
                this.zIndex = this.app.zIndex;
                ElementHelper.addStyles(this.element, <Types.CSSStyleObject>{
                    zIndex: `${this.zIndex}`
                });
                if (disabled === false) {
                    ElementHelper.addClasses(this.element, this.app.prefix,
                        this.isNeedAnimation ? `animate-${this.animate}In` : ""
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

    private getFlickerShadow() {
        if (this.shadow !== null) {
            const shadowArray = this.shadow.split(" ");
            shadowArray[shadowArray.length - 1] = Number(shadowArray[shadowArray.length - 1].replace("px", "")) / 2 + "px";
            return shadowArray.join(" ");
        }
        return this.shadow;
    }
}