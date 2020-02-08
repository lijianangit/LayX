import { Component } from '../';
import {
    ANIMATE_DESTROY, ANIMATE_MAXIMIZE, ANIMATE_SHOW, AnimationOptional, WINDOW_DESTROY,
    WINDOW_FOCUS, WINDOW_MAXIMIZE, WINDOW_RESTORE, WINDOW_SHOW, WindowStateOptional, ANIMATE_ORIGINAL
} from '../../const';
import {
    BorderOptionContract, BoxShadowOptionContract, UIActionBarOptionContract
} from '../../contract';
import { validator } from '../../core/decorator/property';
import {
    addCSSClasses, addCSSStyles, createDivElement, hasCSSClass, removeCSSClasses, removeHTMLElement
} from '../../core/helper/element';
import { arrayRemove, arraySetToFirst } from '../../core/helper/object';
import { stringFormat } from '../../core/helper/string';
import {
    checkColor, checkIn, checkNoEmptyOrNull, checkPstInt, checkPstNumber
} from '../../core/validator';
import { convertDirection } from '../../helper';
import {
    BorderOption, BoxShadowOption, ComponentElement, UIActionBarOption, UIIconOption,
    UIWindowOption, WindowEventMessage
} from '../../type';
import { UIActionBar } from '../ui-action-bar';
import { UIComponent } from '../ui-component';

export class UIWindow extends Component<UIWindowOption> implements UIComponent<UIWindowOption> {
    public constructor(options: UIWindowOption) {
        super(options);

        this.id = options?.id;
        this.readOptions({
            width: this.width,
            height: this.height,
            maxWidth: this.maxWidth,
            maxHeight: this.maxHeight,
            minWidth: this.minWidth,
            minHeight: this.minHeight,
            border: this.border,
            boxShadow: this.boxShadow,
            backgroundColor: this.backgroundColor,
            animate: this.animate,
            actionBar: this.actionBar
        });

        this.width = Math.max(this.minWidth, this.width);
        this.width = Math.min(this.maxWidth, this.width);
        this.height = Math.max(this.minHeight, this.height);
        this.height = Math.min(this.maxHeight, this.height);
        [this.left, this.top] = convertDirection(this.width, this.height, options?.direction);
    }

    @validator(checkNoEmptyOrNull)
    public readonly id: string;

    @validator(checkPstNumber)
    public width: number = this.readGlobalValue("windowOption/width");

    @validator(checkPstNumber)
    public height: number = this.readGlobalValue("windowOption/height");

    @validator(checkPstNumber)
    public minWidth: number = this.readGlobalValue("windowOption/minWidth");

    @validator(checkPstNumber)
    public minHeight: number = this.readGlobalValue("windowOption/minHeight");

    @validator(checkPstNumber)
    public maxWidth: number = this.readGlobalValue("windowOption/maxWidth");

    @validator(checkPstNumber)
    public maxHeight: number = this.readGlobalValue("windowOption/maxHeight");

    @validator(checkPstNumber)
    public left: number = 0;

    @validator(checkPstNumber)
    public top: number = 0;

    @validator(...BorderOptionContract)
    public border: false | BorderOption = this.readGlobalValue("windowOption/border");

    @validator(...BoxShadowOptionContract)
    public boxShadow: false | BoxShadowOption = this.readGlobalValue("windowOption/boxShadow");

    @validator([checkIn, AnimationOptional.ZOOM], false)
    public animate: false | AnimationOptional = this.readGlobalValue("windowOption/animate");

    @validator(checkColor, undefined)
    public backgroundColor?: string = this.readGlobalValue("windowOption/backgroundColor");

    @validator(checkPstInt)
    public zIndex: number = this.entry.zIndex;

    @validator(...UIActionBarOptionContract)
    public actionBar: false | UIActionBarOption = this.readGlobalValue("windowOption/actionBar");

    private _status: WindowStateOptional = WindowStateOptional.ORIGINAL;
    public get status(): WindowStateOptional {
        return this._status;
    }

    private _lastStatus?: WindowStateOptional;
    public get lastStatus(): WindowStateOptional | undefined {
        return this._lastStatus;
    }

    private readonly eventMessage: WindowEventMessage = {
        target: this
    };

    public createView(): ComponentElement {
        const element = this._element = createDivElement(this.id);

        addCSSClasses(element,
            "window",
            "flex-box",
            "col-direction",
            this.animate !== false ? "animate" : undefined,
            this.animate !== false ? stringFormat(ANIMATE_SHOW, this.animate) : undefined);

        addCSSStyles(element, <CSSStyleDeclaration>{
            backgroundColor: this.backgroundColor ?? null,
            zIndex: `${this.zIndex}`,
            width: `${this.width}px`,
            height: `${this.height}px`,
            maxWidth: this.maxWidth !== innerWidth ? `${this.maxWidth}px` : null,
            maxHeight: this.maxHeight !== innerHeight ? `${this.maxHeight}px` : null,
            minWidth: `${this.minWidth}px`,
            minHeight: `${this.minHeight}px`,
            left: `${this.left}px`,
            top: `${this.top}px`,
            boxShadow: this.boxShadow === false ? null :
                `${this.boxShadow.offsetX}px ${this.boxShadow.offsetY}px ${this.boxShadow.blurRadius}px ${this.boxShadow.spreadRadius}px ${this.boxShadow.color}`,
            border: this.border === false ? null :
                `${this.border.width}px ${this.border.style} ${this.border.color}`,
            borderRadius: this.border === false ? null :
                `${this.border.radius}px`
        });

        if (this.actionBar !== false) {
            const actionBar = new UIActionBar(this.actionBar);
            element.appendChild(actionBar.createView());
            this.components["actionBar"] = actionBar;
        }

        this.monitorEvent();

        this.monitorCenter.windows.unshift(this);
        return element;
    }

    private monitorEvent(): void {
        if (!this.element) return;

        this.element.addEventListener("mousedown", (ev) => {
            if (this.monitorCenter.window === this) return;
            this.eventBus.broadcast([WINDOW_FOCUS], this.eventMessage);
        }, true);

        if (this.animate !== false) {
            this.element.addEventListener("animationend", (ev) => {
                const animateShowName = stringFormat(ANIMATE_SHOW, this.animate);
                if (hasCSSClass(this.element, animateShowName)) {
                    removeCSSClasses(this.element, animateShowName);
                    this.eventBus.broadcast([WINDOW_SHOW], this.eventMessage);
                }

                const animateDestroyName = stringFormat(ANIMATE_DESTROY, this.animate);
                if (hasCSSClass(this.element, animateDestroyName)) {
                    this.remove();
                }
            });

            this.element.addEventListener("transitionend", (ev) => {
                const animateMaximizeName = stringFormat(ANIMATE_MAXIMIZE, this.animate);
                if (hasCSSClass(this.element, animateMaximizeName)) {
                    removeCSSClasses(this.element, animateMaximizeName);
                    addCSSStyles(this.element, <CSSStyleDeclaration>{
                        boxShadow: `none`,
                        border: `none`,
                        borderRadius: `0`
                    });
                }
                const animateOriginalName = stringFormat(ANIMATE_ORIGINAL, this.animate);
                if (hasCSSClass(this.element, animateOriginalName)) {
                    removeCSSClasses(this.element, animateOriginalName);
                }
            });
        }
    }

    public updateZIndex(isCreate: boolean = false): void {
        if (isCreate) {
            this.monitorCenter.setWindow(this);
            return;
        }
        if (this.monitorCenter.window === this) return;
        if (!this.element) return;

        this.zIndex = this.entry.zIndex;
        addCSSStyles(this.element, <CSSStyleDeclaration>{
            zIndex: `${this.zIndex}`
        });
        this.monitorCenter.setWindow(this);
        arraySetToFirst(this.monitorCenter.windows, this);
    }

    public attracting(): void {
        if (!this.element) return;

        let timer = null;
        const frequency: number = 10;
        const duration: number = 60;

        if (this.boxShadow !== false) {
            const boxShadowStr = `${this.boxShadow.offsetX}px ${this.boxShadow.offsetY}px {0}px ${this.boxShadow.spreadRadius}px ${this.boxShadow.color}`;

            [...Array(frequency).keys()].forEach(item => {
                timer = setTimeout(() => {
                    addCSSStyles(this.element, <CSSStyleDeclaration>{
                        boxShadow: item % 2 === 0
                            ? stringFormat(boxShadowStr, (<BoxShadowOption>this.boxShadow).blurRadius)
                            : stringFormat(boxShadowStr, <number>(<BoxShadowOption>this.boxShadow).blurRadius / 2)
                    });
                }, item * duration);
            });
        }
    }

    public destroy(): void {
        if (!this.element) return;

        if (this.animate !== false) {
            addCSSClasses(this.element, stringFormat(ANIMATE_DESTROY, this.animate));
        }
        else this.remove();
    }

    private remove(): void {
        if (!this.element) return;
        removeHTMLElement(this.element);
        arrayRemove(this.monitorCenter.windows, this);

        if (this.monitorCenter.windows.length > 0) {
            const focusWindow = this.monitorCenter.windows[0];
            this.eventBus.broadcast([WINDOW_FOCUS], <WindowEventMessage>{
                target: focusWindow
            });

            const searchs = this.monitorCenter.windows.filter(win => {
                return win.status === WindowStateOptional.MAXIMIZE;
            });
            if (searchs.length === 0) removeCSSClasses(document.body, "disable-scroll");
        }
        else removeCSSClasses(document.body, "disable-scroll");
    }

    public restore(): void {
        if (!this.element) return;
        if (this.lastStatus === undefined) return;

        if (this.lastStatus === WindowStateOptional.MAXIMIZE) {
            this.eventBus.broadcast([WINDOW_MAXIMIZE], this.eventMessage);
        }
        else if (this.lastStatus === WindowStateOptional.ORIGINAL) {
            if (this.animate !== false) {
                addCSSClasses(this.element, stringFormat(ANIMATE_ORIGINAL, this.animate))
            }

            addCSSStyles(this.element, <CSSStyleDeclaration>{
                width: `${this.width}px`,
                height: `${this.height}px`,
                left: `${this.left}px`,
                top: `${this.top}px`,
                boxShadow: this.boxShadow === false ? null :
                    `${this.boxShadow.offsetX}px ${this.boxShadow.offsetY}px ${this.boxShadow.blurRadius}px ${this.boxShadow.spreadRadius}px ${this.boxShadow.color}`,
                border: this.border === false ? null :
                    `${this.border.width}px ${this.border.style} ${this.border.color}`,
                borderRadius: this.border === false ? null :
                    `${this.border.radius}px`
            });

            this._lastStatus = this._status;
            this._status = WindowStateOptional.ORIGINAL;
        }
    }

    public maximize(): void {
        if (!this.element) return;
        if (this._status === WindowStateOptional.MAXIMIZE) return;

        addCSSClasses(document.body, "disable-scroll");

        if (this.animate !== false) {
            addCSSClasses(this.element, stringFormat(ANIMATE_MAXIMIZE, this.animate))
        }

        addCSSStyles(this.element, <CSSStyleDeclaration>{
            top: `0`,
            left: `0`,
            width: `${innerWidth}px`,
            height: `${innerHeight}px`,
            boxShadow: this.animate !== false ? null : `none`,
            border: this.animate !== false ? null : `none`,
            borderRadius: this.animate !== false ? null : `0`
        });

        this._lastStatus = this._status;
        this._status = WindowStateOptional.MAXIMIZE;
    }
}