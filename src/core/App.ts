import UIWindow from "../controls/UIWindow";
import { WindowOptions } from "../../types";

export default class App {
    readonly prefix: string = "layx-";
    zIndex: number = 10000000;
    aboveZIndex: number = 20000000;

    create(): void {
        const options: WindowOptions = { id: "hello-world" };
        const uiWindow = new UIWindow(this, options);

        document.body.appendChild(uiWindow.present());
    }
}