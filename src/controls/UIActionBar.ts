import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIActionButton from "./UIActionButton";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";
import * as Types from "../../types";
import * as CastHelper from "../utils/CastHelper";

export default class UIActionBar extends UIWindowComponent implements UIControl {
    readonly kind: string = "actionBar";
    public readonly components: Types.Component = <Types.Component>{};

    public enable: boolean = true;
    public actionButtons: Array<Types.ActionButtonOption> | false = [
        UIActionButton.infoActionButton,
        UIActionButton.minActionButton,
        UIActionButton.maxActionButton,
        UIActionButton.destroyActionButton
    ];

    constructor(app: App, window: UIWindow, options: Types.ActionBarOption) {
        super(app, window);

        this.enable = CastHelper.booleanCast(options.enable, this.enable);
        this.actionButtons = CastHelper.actionButtonsCast(options.actionButtons, this.actionButtons);
    }

    present(): DocumentFragment | null {
        if (this.enable === false) return null;

        const fragment = document.createDocumentFragment();
        const kebabCase = StringHelper.getKebabCase(this.kind);
        const actionBarElement = document.createElement("div");

        ElementHelper.addClasses(actionBarElement, this.app.prefix,
            kebabCase,
            "flexbox",
            "flex-row"
        );

        actionBarElement.addEventListener("mousedown", (ev: MouseEvent) => {
            ev.stopPropagation();
            ev.preventDefault();
        });

        actionBarElement.addEventListener("contextmenu", (ev: MouseEvent) => {
            ev.stopPropagation();
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        }, true);

        this.createActionButtons(actionBarElement);

        fragment.appendChild(actionBarElement);
        return fragment;
    }

    private createActionButtons(actionBarElement: HTMLElement) {
        if (this.actionButtons !== false) {
            const actionButtons = Array<UIActionButton>();
            for (const item of this.actionButtons) {
                const actionButton = new UIActionButton(this.app, this.window, item);
                const actionButtonElement = actionButton.present();

                actionButtonElement && actionBarElement.appendChild(actionButtonElement);
                actionButtons.push(actionButton);
            }
            this.components["actionButtons"] = actionButtons;
        }
    }

    reizeActionButtons(width: number): void {
        let isMerge: boolean = width <= 300 ? true : false;

        if (this.actionButtons === false) return;
        const actionButtons = this.components["actionButtons"] as Array<UIActionButton>;

        let [last, ...front] = [...actionButtons].reverse();
        for (const item of front) {
            if (item.element) {
                isMerge
                    ? ElementHelper.addClasses(item.element, this.app.prefix,
                        "action-button-hidden"
                    )
                    : ElementHelper.removeClasses(item.element, this.app.prefix,
                        "action-button-hidden"
                    );
            }
        }

        const moreActionButton = new UIActionButton(this.app, this.window, UIActionButton.moreActionButton);

        if (isMerge) {
            const moreActionButtonElement = moreActionButton.present();
            moreActionButtonElement
                && moreActionButtonElement.firstElementChild
                && last.element!.insertAdjacentElement('beforebegin', moreActionButtonElement.firstElementChild);
        }
        else {
            moreActionButton.element
                && moreActionButton.element.parentElement!.removeChild(moreActionButton.element);
        }
    }
}