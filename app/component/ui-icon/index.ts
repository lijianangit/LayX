import { Component } from '../';
import { validator } from '../../core/decorator/property';
import {
    addCSSClasses, addCSSStyles, createDivElement, createSvgElement, PREFIX
} from '../../core/helper/element';
import { MouseAndTouchEvent } from '../../core/type';
import {
    checkBoolean, checkColor, checkFunction, checkMin, checkNoEmptyOrNull, checkPstNumber
} from '../../core/validator';
import { ComponentElement, UIIconOption } from '../../type';
import { UIComponent } from '../ui-component';

export class UIIcon extends Component<UIIconOption> implements UIComponent<UIIconOption> {
    private isSwitch: boolean = false;
    private svgIcons: [SVGSVGElement, SVGSVGElement?];
    public constructor(options: UIIconOption) {
        super(options);

        this.icon = options?.icon;
        this.readOptions({
            color: this.color,
            backgroundColor: this.backgroundColor,
            disabled: this.disabled,
            visible: this.visible,
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

    @validator(checkColor)
    public color: string = "#000000";

    @validator(checkColor, undefined)
    public backgroundColor?: string;

    @validator(checkBoolean)
    public disabled: boolean = false;

    @validator(checkBoolean)
    public visible: boolean = true;

    @validator(checkPstNumber, [checkMin, 12])
    public size: number = 14;

    @validator(checkPstNumber)
    public width: number = 45;

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
            color: this.color,
            backgroundColor: this.backgroundColor ?? null,
            fontSize: `${this.size}px`,
            width: `${this.width}px`
        });

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

    private changeStyle(): void {
        if (!this.element) return;

        addCSSStyles(this.element, <CSSStyleDeclaration>{
            color: !this.isSwitch ? this.color : (this.switchColor ?? this.color),
            backgroundColor: !this.isSwitch ? this.backgroundColor : (this.switchBackgroundColor ?? this.backgroundColor)
        });

        if (this.svgIcons[1]) {
            if (!this.isSwitch) {
                this.element.replaceChild(this.svgIcons[1], this.svgIcons[0]);
            }
            else {
                this.element.replaceChild(this.svgIcons[0], this.svgIcons[1]);
            }
        }

        this.isSwitch = !this.isSwitch;
    }
}