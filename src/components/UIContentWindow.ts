import { WindowOptions, Layx } from "../typings/Index";
import UIToolBar from "./UIToolBar";
import UITopMenu from "./UITopMenu";
import UISideBar from "./UISideBar";
import UIWindow from "./base/UIWindow";
import AppProcess from "../core/AppProcess";

export default class UIContentWindow extends UIWindow {
    constructor(options: WindowOptions, app: AppProcess) {
        super(options, app);
    }

    createView(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const windowElement = document.createElement("div");
        windowElement.id = this.id;
        windowElement.classList.add(`${this.app.prefix}window`, `${this.app.prefix}theme-${this.theme}`);
        windowElement.style.width = `${this.width}px`;
        windowElement.style.height = `${this.height}px`;
        windowElement.style.minWidth = `${this.minWidth}px`;
        windowElement.style.minHeight = `${this.minHeight}px`;
        windowElement.style.maxWidth = this.maxWidth === innerWidth ? null : `${this.maxWidth}px`;
        windowElement.style.maxHeight = this.maxHeight === innerHeight ? null : `${this.maxHeight}px`;
        windowElement.style.background = this.background;

        const parcloseElement = this.createParcloseView();
        if (parcloseElement) {
            fragment.appendChild(parcloseElement);
        }

        for (const component of [UIToolBar, UITopMenu, UISideBar, UISideBar]) {
            this.initComponet(windowElement, component);
        }

        const resizeElements = this.createResizeView();
        if (resizeElements) {
            windowElement.appendChild(resizeElements);
        }

        fragment.appendChild(windowElement);
        return fragment;
    }
}