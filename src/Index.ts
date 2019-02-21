import { Layx, WindowOptions } from "./types/Index";
import UIContentWindow from "./components/UIContentWindow";

function layxInstance(): Layx {
    const layx = <Layx>function (options: any): void { };
    layx.v = layx.version = "3.0.0";
    layx.zIndex = 10000000;
    layx.prefix = "layx-";

    layx.create = function (windowOptions: WindowOptions) {
        const window = new UIContentWindow(windowOptions, layx);
        const windowFragment = window.createView();
        document.body.appendChild(windowFragment);
    };
    return layx;
}

export default layxInstance();