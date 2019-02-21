import { WindowOptions } from "../typings/Index";
import UIContentWindow from "../components/UIContentWindow";

export default class AppProcess {
    readonly version: string = "3.0.0";
    readonly prefix: string = "layx-";
    readonly zIndex: number = 10000000;

    constructor() {
    }

    create(options: WindowOptions): void {
        const window = new UIContentWindow(options, this);
        const windowFragment = window.createView();
        document.body.appendChild(windowFragment);
    }
}