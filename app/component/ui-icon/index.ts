import { Component } from '../';
import { validator } from '../../core/decorator/property';
import {
    addCSSClasses, addCSSStyles, addHoverClasses, createDivElement, createSvgElement, PREFIX
} from '../../core/helper/element';
import { CSSStyleDeclarationExpand, MouseAndTouchEvent } from '../../core/type';
import {
    checkArray, checkBoolean, checkColor, checkFunction, checkNoEmptyOrNull, checkPstNumber
} from '../../core/validator';
import { ComponentElement, UIIconOption } from '../../type';
import { UIComponent } from '../ui-component';

export class UIIcon extends Component<UIIconOption> implements UIComponent<UIIconOption> {
    public constructor(options: UIIconOption) {
        super(options);

        this.icon = options?.icon;
        this.readOptions({
            color: this.color,
            backgroundColor: this.backgroundColor,
            width: this.width,
            disabled: this.disabled,
            visible: this.visible,
            hoverClasses: this.hoverClasses,
            handler: this.handler,
            switchIcon: this.switchIcon,
            switchColor: this.switchColor,
            switchBackgroundColor: this.switchBackgroundColor,
            switchHandler: this.switchHandler
        });
        this.switchIcons = [
            this.createSvgIcon(this.icon),
            this.switchIcon ? this.createSvgIcon(this.switchIcon) : undefined
        ];
    }

    private switchIcons: [SVGSVGElement, SVGSVGElement?];

    private _switched: boolean = false;
    public get switched(): boolean {
        return this._switched;
    }

    @validator(checkNoEmptyOrNull)
    public icon: string;

    @validator(checkColor, undefined)
    public color?: string;

    @validator(checkColor, undefined)
    public backgroundColor?: string;

    @validator(checkPstNumber, undefined)
    public size?: number;

    @validator(checkPstNumber, undefined)
    public width?: number;

    @validator(checkBoolean)
    public disabled: boolean = false;

    @validator(checkBoolean)
    public visible: boolean = true;

    @validator([checkArray, true], undefined)
    public hoverClasses?: string | Array<string>;

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

        addCSSStyles(element, <CSSStyleDeclarationExpand>{
            color: this.color,
            backgroundColor: this.backgroundColor,
            "fontSize:px": this.size,
            "width:px": this.width
        });

        if (this.hoverClasses) {
            addHoverClasses(element,
                ...(checkArray(this.hoverClasses) ? this.hoverClasses : [this.hoverClasses]));
        }

        element.appendChild(this.switchIcons[0]);

        element.addEventListener("click", (ev: MouseEvent) => {
            if (!this.switched) this.handler && this.handler(ev);
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

        addCSSStyles(this.element, <CSSStyleDeclarationExpand>{
            color: this.switched ? this.switchColor : this.color,
            backgroundColor: this.switched ? this.switchBackgroundColor : this.backgroundColor
        });

        if (this.switchIcons[1]) {
            if (this.switched) {
                this.element.replaceChild(this.switchIcons[0], this.switchIcons[1]);
            }
            else {
                this.element.replaceChild(this.switchIcons[1], this.switchIcons[0]);
            }
        }

        this._switched = !this._switched;
    }
}