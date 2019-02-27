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

    create(options: WindowOptions): void {
        const uiWindow = new UIWindow(this, options);
        const windowPresent = uiWindow.present();

        document.body.appendChild(windowPresent);
    }
}