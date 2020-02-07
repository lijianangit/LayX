import { Component } from '../';
import { AlignOptional } from '../../const';
import { UIIconOptionContract } from '../../contract';
import { validator } from '../../core/decorator/property';
import { addCSSClasses, addCSSStyles, createDivElement } from '../../core/helper/element';
import { checkColor, checkIn, checkPstNumber } from '../../core/validator';
import { ComponentElement, UIActionBarOption, UIIconOption } from '../../type';
import { UIComponent } from '../ui-component';
import { UIIcon } from '../ui-icon';

export class UIActionBar extends Component<UIActionBarOption> implements UIComponent<UIActionBarOption> {
    public constructor(options: UIActionBarOption) {
        super(options);

        this.readOptions({
            height: this.height,
            backgroundColor: this.backgroundColor,
            align: this.align,
            minimize: this.minimize,
            maximize: this.maximize,
            destroy: this.destroy
        });
    }

    @validator(checkPstNumber)
    public height: number = 30;

    @validator(checkColor, undefined)
    public backgroundColor?: string;

    @validator([checkIn, AlignOptional.LEFT, AlignOptional.RIGHT])
    public align: AlignOptional = AlignOptional.RIGHT;

    @validator(UIIconOptionContract, false)
    public minimize: false | UIIconOption = <UIIconOption>{
        icon: "minimize",
        disabled: false,
        visible: true,
        width: 45
    };

    @validator(UIIconOptionContract, false)
    public maximize: false | UIIconOption = <UIIconOption>{
        icon: "maximize",
        disabled: false,
        visible: true,
        width: 45,
        switchIcon: "restore"
    };

    @validator(UIIconOptionContract, false)
    public destroy: false | UIIconOption = <UIIconOption>{
        icon: "destroy",
        disabled: false,
        visible: true,
        width: 45
    };

    public createView(): ComponentElement {
        const element = this._element = createDivElement();
        addCSSClasses(element,
            "action-bar",
            "flex-box",
            "row-direction");

        addCSSStyles(element, <CSSStyleDeclaration>{
            height: `${this.height}px`,
            backgroundColor: this.backgroundColor ?? null,
            left: this.align === AlignOptional.LEFT ? '0' : null,
            right: this.align === AlignOptional.RIGHT ? '0' : null,
        });

        this.createInlineIcons(this.minimize, this.maximize, this.destroy);

        return element;
    }

    private createInlineIcons(...iconOptions: Array<UIIconOption | false>): void {
        if (!this.element) return;

        for (const option of iconOptions) {
            if (option !== false) {
                const uiIcon = new UIIcon(option);
                const uiIconElement = uiIcon.createView();
                addCSSClasses(uiIconElement,
                    "action-button",
                    `action-${option.icon}`);
                this.element.appendChild(uiIconElement);
            }
        }
    }
}