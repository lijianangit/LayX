import Layx from "../basic/interfaces/Layx";
import UIWindow from "../controls/UIWindow";
import * as Types from "../../types";

export default class App {
    public readonly version: string = "3.0.0";
    public readonly prefix: string = "layx-";

    private _layx: Layx;
    get layx() {
        return this._layx;
    }

    private _window: UIWindow | null = null;
    get window() {
        return this._window;
    }
    set window(value: UIWindow | null) {
        this.layx.window = this._window = value;
    }

    private _zIndex: number = 10000000;
    get zIndex() {
        return this._zIndex = this._zIndex + 2;
    }

    private _aboveZIndex: number = 20000000;
    get aboveZIndex() {
        return this._aboveZIndex = this._aboveZIndex + 2;
    }

    private _windows: Array<UIWindow> = [];
    get windows() {
        return this._windows;
    }

    constructor(layx: Layx) {
        this._layx = layx;
        this.bindEvent();
    }

    create(options: Types.WindowOptions): void {
        const window = this.getWindow(options.id);
        if (window) {
            window.flicker();
            window.updateZIndex();
        }
        else {
            const uiWindow = new UIWindow(this, options);
            const windowPresent = uiWindow.present();
            document.body.appendChild(windowPresent);

            this.window = uiWindow;
            this.windows.push(uiWindow);
        }
    }

    getWindow(id: string): UIWindow | null {
        if (!id) throw new Error("`id` is required.");
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

    private bindEvent(): void {
        document.addEventListener("mousedown", (ev: MouseEvent) => {
            if (this.window) {
                this.window.hideContextMenu();
            }
        }, true);
    }
}