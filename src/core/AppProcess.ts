import { WindowOptions } from "../typings/Index";
import UIContentWindow from "../components/UIContentWindow";
import { batchClasses } from "../utils/StyleHelper";

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

    destroy(id: string): void {
        const currentWindow = document.getElementById(`${this.prefix + id}`);
        if (currentWindow != null) {
            currentWindow.classList.add(...batchClasses(this.prefix, "animated-zoomOut"));
            currentWindow.addEventListener("animationend", () => {
                currentWindow.classList.remove(`${this.prefix}animated-zoomOut`)
                if (currentWindow.parentNode != null) {
                    currentWindow.parentNode.removeChild(currentWindow);
                }
            });

        }
    }
}