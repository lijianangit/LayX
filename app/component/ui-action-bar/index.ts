import { Component } from '../';
import {
    AlignOptional, WINDOW_DESTROY, WINDOW_MAXIMIZE, WINDOW_MINIMIZE, WINDOW_RESTORE,
    WindowStateOptional
} from '../../const';
import { UIIconOptionContract } from '../../contract';
import { validator } from '../../core/decorator/property';
import { addCSSClasses, addCSSStyles, createDivElement } from '../../core/helper/element';
import { CSSStyleDeclarationExpand, EventMessage } from '../../core/type';
import { checkArray, checkColor, checkIn, checkPstNumber } from '../../core/validator';
import { ComponentElement, UIActionBarOption, UIIconOption, WindowEventMessage } from '../../type';
import { UIComponent } from '../ui-component';
import { UIIcon } from '../ui-icon';
import { UIWindow } from '../ui-window';

export class UIActionBar extends Component<UIActionBarOption> implements UIComponent<UIActionBarOption> {
    private actionButtonWidth: number = 45;

    public constructor(options: UIActionBarOption) {
        super(options);

        this.readOptions({
            height: this.height,
            backgroundColor: this.backgroundColor,
            align: this.align,
            color: this.color,
            actionHoverClasses: this.actionHoverClasses,
            minimize: this.minimize,
            maximize: this.maximize,
            destroy: this.destroy
        });

        this.monitorEvent();
    }

    @validator(checkPstNumber)
    public height: number = this.readGlobalValue("windowOption/actionBar/height");

    @validator(checkColor, undefined)
    public backgroundColor?: string = this.readGlobalValue("windowOption/actionBar/backgroundColor");

    @validator([checkIn, AlignOptional.LEFT, AlignOptional.RIGHT])
    public align: AlignOptional = this.readGlobalValue("windowOption/actionBar/align");

    @validator(checkColor, undefined)
    public color?: string = this.readGlobalValue("windowOption/actionBar/color");

    @validator([checkArray, true], undefined)
    public actionHoverClasses?: string | Array<string>;

    @validator(UIIconOptionContract, false)
    public minimize: false | UIIconOption = <UIIconOption>{
        icon: "minimize",
        disabled: false,
        visible: true,
        width: this.actionButtonWidth,
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
        width: this.actionButtonWidth,
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
        width: this.actionButtonWidth,
        hoverClasses: "action-destroy-hover",
        handler: (ev) => {
            this.eventBus.broadcast([WINDOW_DESTROY], {
                target: <UIWindow>this.monitorCenter.window
            });
        }
    };

    @validator(UIIconOptionContract, false)
    public extra: false | UIIconOption = <UIIconOption>{
        icon: "extra",
        disabled: false,
        visible: false,
        width: this.actionButtonWidth,
        handler: (ev) => {
        }
    };

    public createView(): ComponentElement {
        const element = this._element = createDivElement();
        addCSSClasses(element,
            "action-bar",
            "flex-box",
            "row-direction");

        addCSSStyles(element, <CSSStyleDeclarationExpand>{
            color: this.color,
            "height:px": this.height,
            backgroundColor: this.backgroundColor,
            left: this.align === AlignOptional.LEFT ? 0 : undefined,
            right: this.align === AlignOptional.RIGHT ? 0 : undefined,
        });

        this.createInlineIcons(this.extra, this.minimize, this.maximize, this.destroy);

        return element;
    }

    private createInlineIcons(...iconOptions: Array<UIIconOption | false>): void {
        if (!this.element) return;
        if (this.align === AlignOptional.LEFT) iconOptions = iconOptions.reverse();

        for (const option of iconOptions) {
            if (option !== false) {
                option.hoverClasses = option.hoverClasses ?? this.actionHoverClasses;
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
                if (maximizeAction?.switched === false) {
                    maximizeAction?.changeStyle();
                }
            }
        });

        this.eventBus.on(WINDOW_RESTORE, (message: EventMessage<WindowEventMessage>) => {
            const window = message.dataset.target;
            if (window.lastStatus === WindowStateOptional.MAXIMIZE) {
                const maximizeAction = window.readComponent<UIIcon>("actionBar/maximize");
                if (maximizeAction?.switched) {
                    maximizeAction?.changeStyle();
                }
            }
        });
    }
}