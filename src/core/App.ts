import UIWindow from "../controls/UIWindow";
import { WindowOptions } from "../../types";

export default class App {
    readonly version: string = "3.0.0";
    readonly prefix: string = "layx-";

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
        const uiWindow = new UIWindow(this, options);
        if (this.addWindow(uiWindow)) {
            const windowPresent = uiWindow.present();
            document.body.appendChild(windowPresent);
        }
    }

    getWindow(id: string): UIWindow | null {
        for (const item of this.windows) {
            if (item.id === id) {
                if (document.getElementById(this.prefix + id)) {
                    return item;
                }
                else {
                    return null;
                }
            }
        }
        return null;
    }

    private addWindow(window: UIWindow): boolean {
        for (const item of this.windows) {
            if (item.id === window.id) {
                if (document.getElementById(this.prefix + window.id)) {
                    window.updateZIndex();
                }
                else {
                    const index = this.windows.indexOf(item);
                    this.windows.splice(index, 1);
                }
                return false;
            }
        }

        this.windows.push(window);
        return true;
    }
}