import { WindowOptions } from "../typings/Index";
import UIToolBar from "./UIToolBar";
import UITopMenu from "./UITopMenu";
import UISideBar from "./UISideBar";
import UIWindow from "./base/UIWindow";
import AppProcess from "../core/AppProcess";
import { batchClasses, batchStyles } from "../utils/StyleHelper";
import UIResizeBar from "./UIResizeBar";

export default class UIContentWindow extends UIWindow {
    constructor(options: WindowOptions, app: AppProcess) {
        super(options, app);
    }

    createView(): DocumentFragment | undefined {
        const fragment = document.createDocumentFragment();

        const windowElement = document.createElement("div");
        windowElement.id = this.id;

        windowElement.classList.add(...batchClasses(this.app.prefix, "window", "flexbox", `theme-${this.theme}`));
        batchStyles(windowElement, <CSSStyleDeclaration>{
            width: `${this.width}px`,
            height: `${this.height}px`,
            minWidth: `${this.minWidth}px`,
            minHeight: `${this.minHeight}px`,
            maxWidth: this.maxWidth === innerWidth ? null : `${this.maxWidth}px`,
            maxHeight: this.maxHeight === innerHeight ? null : `${this.maxHeight}px`,
            background: this.background
        });

        const parcloseElement = this.createParcloseView();
        if (parcloseElement) {
            fragment.appendChild(parcloseElement);
        }

        for (const component of [UIResizeBar, UIToolBar, UITopMenu, UISideBar, UISideBar]) {
            this.initComponet(windowElement, component);
        }

        fragment.appendChild(windowElement);
        return fragment;
    }
}