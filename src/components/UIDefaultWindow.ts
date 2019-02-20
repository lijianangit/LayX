import { WindowOptions, Layx } from "../types/Index";
import UIToolBar from "./UIToolBar";
import UITopMenu from "./UITopMenu";
import UISideBar from "./UISideBar";
import UIWindow from "./base/UIWindow";

export default class UIDefaultWindow extends UIWindow {
    constructor(options: WindowOptions, layx: Layx) {
        super(options, layx);
    }

    createView(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const windowElement = document.createElement("div");
        windowElement.id = this.id;
        windowElement.classList.add(`${this.layx.prefix}window`, `${this.layx.prefix}theme-${this.theme}`);
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