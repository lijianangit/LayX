import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIComponent from "../basic/models/UIComponent";
import UIWindow from "./UIWindow";
import * as Types from "../../types";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";
import * as EventHelper from "../utils/EventHelper";

export default class UIDragLayer extends UIComponent implements UIControl {
    public readonly elementId: string = `${this.app.prefix + Enums.ComponentType.DRAG_LAYER}`;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App) {
        super(app);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const dragLayerElement = ElementHelper.createElement("div");
        dragLayerElement.id = this.elementId;

        ElementHelper.addClasses(dragLayerElement, this.app.prefix,
            Enums.ComponentType.DRAG_LAYER
        );

        fragment.appendChild(dragLayerElement);
        return fragment;
    }

    updateZIndex(zIndex: number): void {
        const element = this.element;

        ElementHelper.addClasses(element, this.app.prefix,
            `${Enums.ComponentType.DRAG_LAYER}-active`
        );

        ElementHelper.addStyles(element, <Types.CSSStyleObject>{
            zIndex: `${zIndex}`
        });
    }

    hide(): void {
        const element = this.element;
        ElementHelper.removeClasses(element, this.app.prefix,
            `${Enums.ComponentType.DRAG_LAYER}-active`
        );
    }
}