import { Component } from '../';
import { AnimationOptional, BorderStyleOptional } from '../../const';
import { BorderOptionContract } from '../../contract';
import { validator } from '../../core/decorator/property';
import { addCSSClasses, addCSSStyles, createDivElement } from '../../core/helper/element';
import {
    checkBoolean, checkColor, checkIn, checkNoEmptyOrNull, checkPstInt, checkPstNumber
} from '../../core/validator';
import { BorderOption, ComponentElement, UIWindowOption } from '../../type';
import { UIComponent } from '../ui-component';

export class UIWindow extends Component<UIWindowOption> implements UIComponent<UIWindowOption> {
    public constructor(options: UIWindowOption) {
        super(options);

        this.id = options?.id;
        this.width = this.readOption("width", this.width);
        this.height = this.readOption("height", this.height);
        this.maxWidth = this.readOption("maxWidth", this.maxWidth);
        this.maxHeight = this.readOption("maxHeight", this.maxHeight);
        this.minWidth = this.readOption("minWidth", this.minWidth);
        this.minHeight = this.readOption("minHeight", this.minHeight);
        this.width = Math.max(this.minWidth, this.width);
        this.width = Math.min(this.maxWidth, this.width);
        this.height = Math.max(this.minHeight, this.height);
        this.height = Math.min(this.maxHeight, this.height);
        // [this.left, this.top] = calcOffset(this.width, this.height, options?.offset);
        this.border = this.readOption("border", this.border);
        this.boxShadow = this.readOption("boxShadow", this.boxShadow);
        this.backgroundColor = this.readOption("backgroundColor", this.backgroundColor);
    }

    @validator(checkNoEmptyOrNull)
    public readonly id: string;

    @validator(checkPstNumber)
    public width: number = this.readGlobalValue("window/width");

    @validator(checkPstNumber)
    public height: number = this.readGlobalValue("window/height");

    @validator(checkPstNumber)
    public minWidth: number = this.readGlobalValue("window/minWidth");

    @validator(checkPstNumber)
    public minHeight: number = this.readGlobalValue("window/minHeight");

    @validator(checkPstNumber)
    public maxWidth: number = this.readGlobalValue("window/maxWidth");

    @validator(checkPstNumber)
    public maxHeight: number = this.readGlobalValue("window/maxHeight");

    @validator(checkPstNumber)
    public left: number = 0;

    @validator(checkPstNumber)
    public top: number = 0;

    @validator(...BorderOptionContract)
    public border: false | BorderOption = this.readGlobalValue("window/border");

    @validator(checkBoolean)
    public boxShadow: boolean = this.readGlobalValue("window/boxShadow");

    @validator([checkIn, AnimationOptional.ZOOM], false)
    public animate: false | AnimationOptional = this.readGlobalValue("window/animate");

    @validator(checkColor)
    public backgroundColor: string = this.readGlobalValue("window/backgroundColor");

    public createView(): ComponentElement {
        const element = createDivElement(this.id);

        addCSSClasses(element,
            "window",
            "flex-box",
            "col-direction",
            this.boxShadow ? "box-shadow" : undefined,
            this.animate !== false ? "animate" : undefined,
            this.animate !== false ? `animate-${this.animate}-show` : undefined);

        addCSSStyles(element, <CSSStyleDeclaration>{
            backgroundColor: `${this.backgroundColor}`,
            zIndex: `${this.entry.zIndex}`,
            width: `${this.width}px`,
            height: `${this.height}px`,
            maxWidth: this.maxWidth !== innerWidth ? `${this.maxWidth}px` : null,
            maxHeight: this.maxHeight !== innerHeight ? `${this.maxHeight}px` : null,
            minWidth: `${this.minWidth}px`,
            minHeight: `${this.minHeight}px`,
            left: `${this.left}px`,
            top: `${this.top}px`,
            border: this.border === false ? null :
                `${this.border.width}px ${this.border.style} ${this.border.color}`,
            borderRadius: this.border === false ? null :
                `${this.border.radius}px`,
            webkitBorderRadius: this.border === false ? null :
                `${this.border.radius}px`,
        });

        this.sendEvent("window:create", { id: this.id });

        return element;
    }
}