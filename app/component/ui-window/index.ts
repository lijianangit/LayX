import { Component } from '../';
import {
    ANIMATE_DESTROY, ANIMATE_SHOW, AnimationOptional, WINDOW_CREATE, WINDOW_DESTROY, WINDOW_FOCUS,
    WINDOW_SHOW
} from '../../const';
import { BorderOptionContract, BoxShadowOptionContract } from '../../contract';
import { validator } from '../../core/decorator/property';
import {
    addCSSClasses, addCSSStyles, createDivElement, hasCSSClass, removeCSSClasses, removeHTMLElement
} from '../../core/helper/element';
import { stringFormat } from '../../core/helper/string';
import {
    checkColor, checkIn, checkNoEmptyOrNull, checkPstInt, checkPstNumber
} from '../../core/validator';
import { convertDirection } from '../../helper';
import {
    BorderOption, BoxShadowOption, ComponentElement, UIWindowOption, WindowEventMessage
} from '../../type';
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
            animate: this.animate
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

    @validator(checkColor)
    public backgroundColor: string = this.readGlobalValue("windowOption/backgroundColor");

    @validator(checkPstInt)
    public zIndex: number = this.entry.zIndex;

    private _element: HTMLDivElement | null = null;
    public get element(): HTMLDivElement | null {
        return this._element;
    }

    private readonly eventMessage: WindowEventMessage = {
        id: this.id,
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
            backgroundColor: `${this.backgroundColor}`,
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

        this.monitorEvent();

        this.sendEvents([WINDOW_CREATE, WINDOW_FOCUS], this.eventMessage);

        return element;
    }

    private monitorEvent(): void {
        if (!this.element) return;

        this.element.addEventListener("mousedown", (ev) => {
            this.updateZIndex();
        }, true);

        if (this.animate !== false) {
            this.element.addEventListener("animationend", (ev) => {
                const animateShowName = stringFormat(ANIMATE_SHOW, this.animate);
                if (hasCSSClass(this.element, animateShowName)) {
                    removeCSSClasses(this.element, animateShowName);
                    this.sendEvents([WINDOW_SHOW], this.eventMessage);
                }

                const animateDestroyName = stringFormat(ANIMATE_DESTROY, this.animate);
                if (hasCSSClass(this.element, animateDestroyName)) {
                    this.remove();
                }
            });
        }
    }

    public updateZIndex(): void {
        if (this.entry.window === this) return;
        if (!this.element) return;

        this.zIndex = this.entry.zIndex;
        addCSSStyles(this.element, <CSSStyleDeclaration>{
            zIndex: `${this.zIndex}`
        });

        this.sendEvents([WINDOW_FOCUS], this.eventMessage);
    }

    public destroy(): void {
        if (!this.element) return;

        if (this.animate !== false) {
            addCSSClasses(this.element,
                stringFormat(ANIMATE_DESTROY, this.animate));
        }
        else this.remove();
    }

    private remove(): void {
        if (!this.element) return;

        removeHTMLElement(this.element);
        this.sendEvents([WINDOW_DESTROY], this.eventMessage);
    }
}