import { Component } from '../';
import { AlignOptional, WINDOW_MAXIMIZE, WindowStateOptional, WINDOW_RESTORE, WINDOW_MINIMIZE, WINDOW_DESTROY } from '../../const';
import { UIIconOptionContract } from '../../contract';
import { validator } from '../../core/decorator/property';
import { addCSSClasses, addCSSStyles, createDivElement } from '../../core/helper/element';
import { EventMessage } from '../../core/type';
import { checkColor, checkIn, checkPstNumber } from '../../core/validator';
import { ComponentElement, UIActionBarOption, UIIconOption, WindowEventMessage } from '../../type';
import { UIComponent } from '../ui-component';
import { UIIcon } from '../ui-icon';
import { UIWindow } from '../ui-window';

export class UIActionBar extends Component<UIActionBarOption> implements UIComponent<UIActionBarOption> {
    public constructor(options: UIActionBarOption) {
        super(options);

        this.readOptions({
            height: this.height,
            backgroundColor: this.backgroundColor,
            align: this.align,
            color: this.color,
            minimize: this.minimize,
            maximize: this.maximize,
            destroy: this.destroy
        });

        this.monitorEvent();
    }

    @validator(checkPstNumber)
    public height: number = 30;

    @validator(checkColor, undefined)
    public backgroundColor?: string;

    @validator([checkIn, AlignOptional.LEFT, AlignOptional.RIGHT])
    public align: AlignOptional = AlignOptional.RIGHT;

    @validator(checkColor)
    public color: string = "#000000";

    @validator(UIIconOptionContract, false)
    public minimize: false | UIIconOption = <UIIconOption>{
        icon: "minimize",
        disabled: false,
        visible: true,
        width: 45,
        handler: (ev) => {
            this.eventBus.broadcast([WINDOW_MINIMIZE], {
                target: <UIWindow>this.monitorCenter.window
            });
        },
    };

    @validator(UIIconOptionContract, false)
    public maximize: false | UIIconOption = <UIIconOption>{
        icon: "maximize",
        disabled: false,
        visible: true,
        width: 45,
        switchIcon: "restore",
        handler: (ev) => {
            this.eventBus.broadcast([WINDOW_MAXIMIZE], {
                target: <UIWindow>this.monitorCenter.window
            });
        },
        switchHandler: (ev) => {
            this.eventBus.broadcast([WINDOW_RESTORE], {
                target: <UIWindow>this.monitorCenter.window
            });
        }
    };

    @validator(UIIconOptionContract, false)
    public destroy: false | UIIconOption = <UIIconOption>{
        icon: "destroy",
        disabled: false,
        visible: true,
        width: 45,
        handler: (ev) => {
            this.eventBus.broadcast([WINDOW_DESTROY], {
                target: <UIWindow>this.monitorCenter.window
            });
        }
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
                option.color = option.color ?? this.color;
                const uiIcon = new UIIcon(option);
                const uiIconElement = uiIcon.createView();
                addCSSClasses(uiIconElement,
                    "action-button",
                    `action-${option.icon}`);
                this.element.appendChild(uiIconElement);
                this.components[option.icon] = uiIcon;
            }
        }
    }

    private monitorEvent(): void {
        this.eventBus.on(WINDOW_MAXIMIZE, (message: EventMessage<WindowEventMessage>) => {
            const window = message.dataset.target;
            if (window.status === WindowStateOptional.MAXIMIZE) {
                const maximizeAction = window.readComponent<UIIcon>("actionBar/maximize");
                if (maximizeAction?.isSwitch === false) {
                    maximizeAction?.changeStyle();
                }
            }
        });

        this.eventBus.on(WINDOW_RESTORE, (message: EventMessage<WindowEventMessage>) => {
            const window = message.dataset.target;
            if (window.lastStatus === WindowStateOptional.MAXIMIZE) {
                const maximizeAction = window.readComponent<UIIcon>("actionBar/maximize");
                if (maximizeAction?.isSwitch) {
                    maximizeAction?.changeStyle();
                }
            }
        });
    }
}