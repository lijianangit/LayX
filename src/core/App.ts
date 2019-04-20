import Layx from "../basic/interfaces/Layx";
import UIWindow from "../controls/UIWindow";
import UIContextMenuBar from "../controls/UIContextMenuBar";
import UITopMenuBar from "../controls/UITopMenuBar";
import UISalverBar from "../controls/UISalverBar";
import UINotice from "../controls/UINotice";
import * as Types from "../../types";
import * as ExceptionHelper from "../utils/ExceptionHelper";
import * as Enums from "../basic/enums";
import * as TypeHelper from "../utils/TypeHelper";
import * as ElementHelper from "../utils/ElementHelper";

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

    public readonly noticeZIndex: number = 40000000;

    private _windows: Array<UIWindow> = [];
    get windows() {
        return this._windows;
    }

    private _notices: Array<UINotice> = [];
    get notices() {
        return this._notices;
    }

    constructor(private readonly layx: Layx) {
        this.init();
    }

    open(options: Types.WindowOption): void {
        const window = this.getWindow(options.id);
        if (window) window.updateZIndex();
        else {
            const uiWindow = new UIWindow(this, options);
            const windowPresent = uiWindow.present();
            document.body.appendChild(windowPresent);

            this.lastWindow = this.window;
            this.window = uiWindow;
            this.windows.push(uiWindow);

            if (this.salver) this.salver.addOrUpdateItem();
        }
    }

    destroy(id: string): void {
        if (!TypeHelper.isStringWithNotEmpty(id)) ExceptionHelper.assertId();

        const window = this.getWindow(id);
        if (window) window.destroy();
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

    notice(options: Types.NoticeOption): void {
        const notice = new UINotice(this, options);
        const noticeElement = notice.present();
        document.body.append(noticeElement);
        this.notices.push(notice);
        const index = this.notices.indexOf(notice);
        notice.updateOffset(index, true);
    }

    private init(): void {
        this.bindEvent();
    }

    private bindEvent(): void {
        document.addEventListener("DOMContentLoaded", () => {
            if (!document.body.id) document.body.id = `${this.prefix}body`;
        });

        document.addEventListener("mousedown", (ev: MouseEvent) => {
            if (this.window) {
                const contextMenuBar = this.window.getComponent<UIContextMenuBar>(Enums.ComponentType.CONTEXT_MENU_BAR)
                contextMenuBar && contextMenuBar.hide();

                this.window.hideMoreActionContextMenu();

                const topMenuBar = this.window.getComponent<UITopMenuBar>(Enums.ComponentType.TOP_MENU_BAR);
                topMenuBar && topMenuBar.hide(ev);

                const windowIconContextMenuBar = this.window.getComponent<UIContextMenuBar>(`
                ${Enums.ComponentType.TOOL_BAR}
                /${Enums.ComponentType.TITLE_BAR}
                /${Enums.ComponentType.WINDOW_ICON_CONTEXT_MENU_BAR}`);

                windowIconContextMenuBar && windowIconContextMenuBar.hide();
            }

            if (this.lastWindow) {
                const topMenuBar = this.lastWindow.getComponent<UITopMenuBar>(Enums.ComponentType.TOP_MENU_BAR);
                topMenuBar && topMenuBar.hide(ev);
            }
        }, true);

        document.addEventListener("mousemove", (ev: MouseEvent) => {
            if (this.salver && this.salver.element) {
                if (ev.pageY >= innerHeight - 50) {
                    if (ElementHelper.containClass(this.salver.element, this.prefix, "salver-bar-keep")) return;
                    this.salver.show();
                }
                else {
                    if (!ElementHelper.containClass(this.salver.element, this.prefix, "salver-bar-keep")) return;
                    this.salver.show(false);
                }
            }
        }, true);
    }
}