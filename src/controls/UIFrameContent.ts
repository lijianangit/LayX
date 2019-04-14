import App from "../core/App";
import UIControl from "../basic/interfaces/UIControl";
import UIWindowComponent from "../basic/models/UIWindowComponent";
import UIWindow from "./UIWindow";
import * as Types from "../../types";
import * as ElementHelper from "../utils/ElementHelper";
import * as CastHelper from "../utils/CastHelper";
import * as Enums from "../basic/enums";
import * as TypeHelper from "../utils/TypeHelper";
import UIContextMenuBar from "./UIContextMenuBar";

export default class UIFrameContent extends UIWindowComponent implements UIControl {
    public readonly elementId: string = `${this.window.elementId}-${Enums.ComponentType.URL_CONTENT}`;

    private url: string;

    private _element: HTMLElement | null = null;
    get element() {
        return document.getElementById(`${this.elementId}`);
    }

    constructor(app: App, window: UIWindow, url: string) {
        super(app, window);

        this.url = CastHelper.stringCast(url);
    }

    present(): DocumentFragment {
        const fragment = ElementHelper.createFragment();

        const frameContentElement = ElementHelper.createElement("iframe");
        frameContentElement.setAttribute("data-window-id", this.window.id);
        frameContentElement.id = this.elementId;
        frameContentElement.setAttribute("frameborder", "0");
        frameContentElement.setAttribute("scrolling", "no");
        frameContentElement.setAttribute("allowtransparency", "true");
        frameContentElement.src = this.url;

        ElementHelper.addClasses(frameContentElement, this.app.prefix,
            Enums.ComponentType.URL_CONTENT
        );

        this.bindEvent(frameContentElement);

        fragment.appendChild(frameContentElement);

        return fragment;
    }

    private bindEvent(frameContentElement: HTMLIFrameElement) {
        frameContentElement.addEventListener("load", (ev: Event) => {
            const contentWindow = frameContentElement.contentWindow;
            if (!contentWindow) return;

            contentWindow.document.addEventListener("contextmenu", (ev: MouseEvent) => {
                ev.preventDefault();
                ev.returnValue = false;

                const event = document.createEvent('Event');
                event.initEvent("contextmenu", true);
                this.window.element!.dispatchEvent(event);

                const clientRect = this.element!.getBoundingClientRect();
                const contextMenuBar = this.window.getComponent<UIContextMenuBar>(`${Enums.ComponentType.CONTEXT_MENU_BAR}`);
                contextMenuBar && contextMenuBar.updateOffset(ev, this.window.zIndex + 1, ev.pageX + clientRect.left, ev.pageY + clientRect.top);

                return false;
            });

            contentWindow.document.addEventListener("mousedown", (ev: MouseEvent) => {
                const event = document.createEvent('Event');
                event.initEvent("mousedown", true);
                this.window.element!.dispatchEvent(event);
            });
        });
    }
}