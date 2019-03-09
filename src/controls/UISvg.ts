import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIControl from "../basic/interfaces/UIControl";
import UIWindow from "./UIWindow";
import App from "../core/App";
import * as ExceptionHelper from "../utils/ExceptionHelper";

export default class UISvg extends UIWindowComponent implements UIControl {
    public readonly kind: string = "svg";
    public readonly id: string;

    constructor(app: App, window: UIWindow, id: string) {
        super(app, window);

        if (!id) ExceptionHelper.assertId();
        this.id = id;
    }

    present(): DocumentFragment | null {
        const fragment = document.createDocumentFragment();
        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.setAttribute("class", `${this.app.prefix}iconfont`);

        const useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
        useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `#${this.id}`);
        svgElement.appendChild(useElement);

        fragment.appendChild(svgElement);
        return fragment;
    }
}