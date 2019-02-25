import { WindowOptions } from "../typings/Index";
import UIContentWindow from "../components/UIContentWindow";

export default class AppProcess {
    readonly version: string = "3.0.0";
    readonly prefix: string = "layx-";
    private _zIndex: number = 10000000
    get zIndex(): number {
        return this._zIndex++;
    }

    constructor() {
    }

    create(options: WindowOptions): void {
        const window = new UIContentWindow(options, this);
        const windowFragment = window.createView();

        if (windowFragment) {
            document.body.appendChild(windowFragment);
        }
    }
}