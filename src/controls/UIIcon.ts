import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIControl from "../basic/interfaces/UIControl";
import UIWindow from "./UIWindow";
import App from "../core/App";
import * as ExceptionHelper from "../utils/ExceptionHelper";
import * as StringHelper from "../utils/StringHelper";

export default class UIIcon extends UIWindowComponent implements UIControl {
    public readonly kind: string = "icon";
    public readonly id: string;

    constructor(app: App, window: UIWindow, id: string) {
        super(app, window);

        if (!id) ExceptionHelper.assertId();
        this.id = id;
    }

    present(): DocumentFragment | null {
        const fragment = document.createDocumentFragment();
        const iconElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const kebabCase = StringHelper.getKebabCase(this.kind);

        iconElement.setAttribute("class", `${this.app.prefix + kebabCase}`);

        const useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
        useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `#${this.id}`);
        iconElement.appendChild(useElement);

        fragment.appendChild(iconElement);
        return fragment;
    }
}