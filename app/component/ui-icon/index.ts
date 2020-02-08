import { Component } from '../';
import { validator } from '../../core/decorator/property';
import {
    addCSSClasses, addCSSStyles, createDivElement, createSvgElement, PREFIX, setHoverClass
} from '../../core/helper/element';
import { MouseAndTouchEvent } from '../../core/type';
import {
    checkBoolean, checkColor, checkFunction, checkMin, checkNoEmptyOrNull, checkPstNumber
} from '../../core/validator';
import { ComponentElement, UIIconOption } from '../../type';
import { UIComponent } from '../ui-component';

export class UIIcon extends Component<UIIconOption> implements UIComponent<UIIconOption> {
    private _isSwitch: boolean = false;
    public get isSwitch(): boolean {
        return this._isSwitch;
    }
    private svgIcons: [SVGSVGElement, SVGSVGElement?];
    public constructor(options: UIIconOption) {
        super(options);

        this.icon = options?.icon;
        this.readOptions({
            color: this.color,
            backgroundColor: this.backgroundColor,
            width: this.width,
            disabled: this.disabled,
            visible: this.visible,
            hoverClass: this.hoverClass,
            handler: this.handler,
            switchIcon: this.switchIcon,
            switchColor: this.switchColor,
            switchBackgroundColor: this.switchBackgroundColor,
            switchHandler: this.switchHandler
        });
        this.svgIcons = [
            this.createSvgIcon(this.icon),
            this.switchIcon ? this.createSvgIcon(this.switchIcon) : undefined
        ];
    }

    @validator(checkNoEmptyOrNull)
    public icon: string;

    @validator(checkColor, undefined)
    public color?: string;

    @validator(checkColor, undefined)
    public backgroundColor?: string;

    @validator(checkBoolean)
    public disabled: boolean = false;

    @validator(checkBoolean)
    public visible: boolean = true;

    @validator(checkPstNumber, [checkMin, 12])
    public size: number = 14;

    @validator(checkPstNumber, undefined)
    public width?: number;

    @validator(checkNoEmptyOrNull, undefined)
    public hoverClass?: string;

    @validator(checkFunction, undefined)
    public handler?: (ev: MouseAndTouchEvent) => void;

    @validator(checkNoEmptyOrNull, undefined)
    public switchIcon?: string;

    @validator(checkColor, undefined)
    public switchColor?: string;

    @validator(checkColor, undefined)
    public switchBackgroundColor?: string;

    @validator(checkFunction, undefined)
    public switchHandler?: (ev: MouseAndTouchEvent) => void;

    public createView(): ComponentElement {
        const element = this._element = createDivElement();

        addCSSClasses(element,
            "icon",
            "flex-box",
            this.visible ? undefined : "box-hidden",
            "center-all",
            this.disabled ? "disable-icon" : undefined);

        addCSSStyles(element, <CSSStyleDeclaration>{
            color: this.color ?? null,
            backgroundColor: this.backgroundColor ?? null,
            fontSize: `${this.size}px`,
            width: this.width ? `${this.width}px` : null
        });

        if (this.hoverClass) {
            setHoverClass(element, this.hoverClass);
        }

        element.appendChild(this.svgIcons[0]);

        element.addEventListener("click", (ev: MouseEvent) => {
            if (!this.isSwitch) this.handler && this.handler(ev);
            else this.switchHandler ? this.switchHandler(ev) : (this.handler && this.handler(ev));

            this.changeStyle();
        });

        return element;
    }

    private createSvgIcon(icon: string): SVGSVGElement {
        const svgElement = createSvgElement(icon);
        svgElement.setAttribute("class", `${PREFIX}svg`);
        return svgElement;
    }

    public changeStyle(): void {
        if (!this.element) return;

        addCSSStyles(this.element, <CSSStyleDeclaration>{
            color: !this.isSwitch ? (this.color ?? null) : (this.switchColor ?? this.color ?? null),
            backgroundColor: !this.isSwitch ? (this.backgroundColor ?? null) : (this.switchBackgroundColor ?? this.backgroundColor ?? null)
        });

        if (this.svgIcons[1]) {
            if (!this.isSwitch) {
                this.element.replaceChild(this.svgIcons[1], this.svgIcons[0]);
            }
            else {
                this.element.replaceChild(this.svgIcons[0], this.svgIcons[1]);
            }
        }

        this._isSwitch = !this._isSwitch;
    }
}