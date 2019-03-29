import Layx from "../basic/interfaces/Layx";
import UIWindow from "../controls/UIWindow";
import UIContextMenuBar from "../controls/UIContextMenuBar";
import UITopMenuBar from "../controls/UITopMenuBar";
import UISalverBar from "../controls/UISalverBar";
import * as Types from "../../types";
import * as ExceptionHelper from "../utils/ExceptionHelper";
import * as Enums from "../basic/enums";
import * as TypeHelper from "../utils/TypeHelper";

export default class App {
    public readonly version: string = "3.0.0";
    public readonly prefix: string = "layx-";

    private _window: UIWindow | null = null;
    get window() {
        return this._window;
    }
    set window(value: UIWindow | null) {
        this.layx.window = this._window = value;
    }

    private _lastWindow: UIWindow | null = null;
    get lastWindow() {
        return this._lastWindow;
    }
    set lastWindow(value: UIWindow | null) {
        this.layx.lastWindow = this._lastWindow = value;
    }

    private _salver: UISalverBar | null = null;
    get salver() {
        return this._salver;
    }
    set salver(value: UISalverBar | null) {
        this.layx.salver = this._salver = value;
    }

    private _zIndex: number = 10000000;
    get zIndex() {
        return this._zIndex = this._zIndex + 2;
    }

    private _aboveZIndex: number = 20000000;
    get aboveZIndex() {
        return this._aboveZIndex = this._aboveZIndex + 2;
    }

    private _salverZIndex: number = 30000000;
    get salverZIndex() {
        return this._salverZIndex;
    }

    private _windows: Array<UIWindow> = [];
    get windows() {
        return this._windows;
    }

    constructor(private readonly layx: Layx) {
        this.init();
    }

    open(options: Types.WindowOption): void {
        if (!this.salver) {
            const salverBar = new UISalverBar(this);
            const salverBarElement = salverBar.present();
            document.body.append(salverBarElement);

            this.salver = salverBar;
        }

        const window = this.getWindow(options.id);
        if (window) window.updateZIndex();
        else {
            const uiWindow = new UIWindow(this, options);
            const windowPresent = uiWindow.present();
            document.body.appendChild(windowPresent);

            this.lastWindow = this.window;
            this.window = uiWindow;
            this.windows.push(uiWindow);

            this.salver.addOrUpdateItem();
        }
    }

    destroy(id: string): void {
        if (!TypeHelper.isStringWithNotEmpty(id)) ExceptionHelper.assertId();

        const window = this.getWindow(id);
        if (window) {
            window.destroy();
        }
    }

    getWindow(id: string): UIWindow | null {
        if (!TypeHelper.isStringWithNotEmpty(id)) ExceptionHelper.assertId();

        for (const item of this.windows) {
            if (item.id === id) {
                if (item.element) {
                    return item;
                }
                else {
                    const index = this.windows.indexOf(item);
                    this.windows.splice(index, 1);
                    return null;
                }
            }
        }
        return null;
    }

    private init(): void {
        this.bindEvent();
    }

    private bindEvent(): void {
        document.addEventListener("DOMContentLoaded", () => {
            if (!document.body.id) {
                document.body.id = `${this.prefix}body`;
            }
        });

        document.addEventListener("mousedown", (ev: MouseEvent) => {
            if (this.window) {
                const contextMenuBar = this.window.getComponent<UIContextMenuBar>(Enums.ComponentType.CONTEXT_MENU_BAR)
                contextMenuBar && contextMenuBar.hide();

                this.window.hideMoreActionContextMenu();

                const topMenuBar = this.window.getComponent<UITopMenuBar>(Enums.ComponentType.TOP_MENU_BAR);
                topMenuBar && topMenuBar.hide(ev);

                const windowIconContextMenuBar = this.window.getComponent<UIContextMenuBar>(`${Enums.ComponentType.TOOL_BAR}->${Enums.ComponentType.TITLE_BAR}->${Enums.ComponentType.WINDOW_ICON_CONTEXT_MENU_BAR}`);
                windowIconContextMenuBar && windowIconContextMenuBar.hide();
            }

            if (this.lastWindow) {
                const topMenuBar = this.lastWindow.getComponent<UITopMenuBar>(Enums.ComponentType.TOP_MENU_BAR);
                topMenuBar && topMenuBar.hide(ev);
            }
        }, true);
    }
}