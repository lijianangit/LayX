import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import * as Types from "../../types";
import * as ElementHelper from "../utils/ElementHelper";
import * as Enums from "../basic/enums";
import * as TypeHelper from "../utils/TypeHelper";

export default class UIHtmlContent extends UIWindowComponent implements UIControl {

    constructor(app: App, window: UIWindow, public content: string | Element) {
        super(app, window);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const htmlContentElement = ElementHelper.createElement("div");

        ElementHelper.addClasses(htmlContentElement, this.app.prefix,
            Enums.ComponentType.HTML_CONTENT
        );

        if (TypeHelper.isElement(this.content)) {
            const newElement = this.content.cloneNode(true);

            ElementHelper.addStyles(<HTMLElement>newElement, <Types.CSSStyleObject>{
                display: 'inherit'
            });

            htmlContentElement.appendChild(newElement);
        }
        else htmlContentElement.innerHTML = this.content;

        fragment.appendChild(htmlContentElement);

        return fragment;
    }
}