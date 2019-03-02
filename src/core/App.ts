import UIWindow from "../controls/UIWindow";
import { WindowOptions } from "../../types";

export default class App {
    readonly version: string = "3.0.0";
    readonly prefix: string = "layx-";

    window: UIWindow | null = null;

    private _zIndex: number = 10000000;
    get zIndex() {
        return this._zIndex++;
    }

    private _aboveZIndex: number = 20000000;
    get aboveZIndex() {
        return this._aboveZIndex++;
    }

    private _windows: Array<UIWindow> = [];
    get windows() {
        return this._windows;
    }

    create(options: WindowOptions): void {
        const window = this.getWindow(options.id);
        if (window) {
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
                if (document.getElementById(this.prefix + id)) {
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
}