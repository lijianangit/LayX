import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIContextMenuBar from "./UIContextMenuBar";
import UIActionButton from "./UIActionButton";
import * as ElementHelper from "../utils/ElementHelper";
import * as Types from "../../types";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";

export default class UIActionBar extends UIWindowComponent implements UIControl {
    public static actionButtonZoomWidth: number = 300;

    public readonly elementId: string = `${this.window.elementId}-${Enums.ComponentType.ACTION_BAR}`;

    public enable: boolean = true;
    public items: Array<Types.ActionButtonOption> | false = [
        UIActionButton.info,
        UIActionButton.min,
        UIActionButton.max,
        UIActionButton.destroy
    ];

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, window: UIWindow, options: Types.ActionBarOption) {
        super(app, window);

        this.enable = CastHelper.booleanCast(options.enable, this.enable);
        this.items = CastHelper.actionButtonsCast(options.actionButtons, this.items);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        if (this.enable === true) {
            const actionBarElement = ElementHelper.createElement("div");
            actionBarElement.setAttribute("data-window-id", this.window.id);
            actionBarElement.id = this.elementId;

            ElementHelper.addClasses(actionBarElement, this.app.prefix,
                Enums.ComponentType.ACTION_BAR,
                "flexbox",
                "flex-row"
            );

            actionBarElement.addEventListener("mousedown", (ev: MouseEvent) => {
                ev.preventDefault();
                ev.stopPropagation();
            });

            actionBarElement.addEventListener("contextmenu", (ev: MouseEvent) => {
                ev.preventDefault();
                ev.stopPropagation();
                ev.returnValue = false;
                return false;
            }, true);

            this.createActionButtons(actionBarElement);

            fragment.appendChild(actionBarElement);
        }

        return fragment;
    }

    zoomActionButtons(windowWidth: number): void {
        if (this.items === false) return;

        let isMerge = windowWidth <= UIActionBar.actionButtonZoomWidth ? true : false;
        const actionButtons = this.getComponent<Array<UIActionButton>>(Enums.ComponentType.ACTION_BUTTONS);
        if (!actionButtons) return;

        let [lastActionButton, ...frontActionButtons] = [...actionButtons].reverse();
        let moreContextMenuButtons = Array<Types.ContextMenuButtonOption>();

        frontActionButtons = frontActionButtons.reverse();
        for (const item of frontActionButtons) {
            isMerge
                ? ElementHelper.addClasses(item.element, this.app.prefix,
                    "action-button-hidden"
                )
                : ElementHelper.removeClasses(item.element, this.app.prefix,
                    "action-button-hidden"
                );

            moreContextMenuButtons.push(<Types.ContextMenuButtonOption>item);
        }

        const moreActionButton = new UIActionButton(this.app, this.window, UIActionButton.more);

        if (isMerge) {
            if (!moreActionButton.element) {
                const moreContextMenuBar = new UIContextMenuBar(this.app, this.window, `more-action`, moreContextMenuButtons);
                const moreContextMenuBarElement = moreContextMenuBar.present();
                document.body.appendChild(moreContextMenuBarElement);

                moreActionButton.handler = function (ev: MouseEvent, window: UIWindow) {
                    moreContextMenuBar.updateOffset(ev, this.window.zIndex);
                }

                const moreActionButtonElement = moreActionButton.present();
                moreActionButtonElement.firstElementChild
                    && lastActionButton.element!.insertAdjacentElement('beforebegin', moreActionButtonElement.firstElementChild);

                this.window.setComponent(Enums.ComponentType.MORE_ACTION_CONTEXT_MENU_BAR, moreContextMenuBar);
            }
        }
        else {
            if (moreActionButton.element) {
                this.window.removeMoreActionContextMenu();
                moreActionButton.element
                    && moreActionButton.element.parentElement!.removeChild(moreActionButton.element);

                this.window.removeComponent(Enums.ComponentType.MORE_ACTION_CONTEXT_MENU_BAR);
            }
        }
    }

    private createActionButtons(parentActionBarElemnt: HTMLElement) {
        if (this.items === false) return;

        const actionButtons = Array<UIActionButton>();
        for (const item of this.items) {
            const actionButton = new UIActionButton(this.app, this.window, item);
            const actionButtonElement = actionButton.present();

            parentActionBarElemnt.appendChild(actionButtonElement);
            actionButtons.push(actionButton);
        }
        
        this.setComponent(Enums.ComponentType.ACTION_BUTTONS, actionButtons);
    }
}