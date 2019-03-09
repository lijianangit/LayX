import UIToolBarComponent from "../basic/models/UIToolBarComponent";
import UIControl from "../basic/interfaces/UIControl";
import App from "../core/App";
import UIWindow from "./UIWindow";
import UIToolBar from "./UIToolBar";
import * as StringHelper from "../utils/StringHelper";
import * as ElementHelper from "../utils/ElementHelper";
import * as TypeHelper from "../utils/TypeHelper";
import UIActionButton from "./UIActionButton";

export default class UIActionBar extends UIToolBarComponent implements UIControl {
    readonly kind: string = "actionBar";

    constructor(app: App, window: UIWindow, toolBar: UIToolBar) {
        super(app, window, toolBar);
    }

    present(): DocumentFragment | null {
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
        });

        this.createActionButton(actionBarElement);

        fragment.appendChild(actionBarElement);
        return fragment;
    }

    private createActionButton(actionBarElement: HTMLElement) {
        if (this.toolBar.actionBar instanceof Array && TypeHelper.isActionButtons(this.toolBar.actionBar)) {
            for (const item of this.toolBar.actionBar) {
                const actionButton = new UIActionButton(this.app, this.window, this.toolBar, this, item);
                const actionButtonElement = actionButton.present();
                actionButtonElement && actionBarElement.appendChild(actionButtonElement);
            }
        }
    }
}