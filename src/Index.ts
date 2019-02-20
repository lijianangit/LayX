import { Layx, WindowOptions } from "./types/Index";
import UIDefaultWindow from "./components/UIDefaultWindow";

function layxInstance(): Layx {
    const layx = <Layx>function (options: any): void { };
    layx.zIndex = 10000000;
    layx.prefix = "layx-";

    layx.create = function (options: any) {
        const windowOptions: WindowOptions = { id: "hello", background: "#dedede" };
        const window = new UIDefaultWindow(windowOptions, layx);
        const windowFragment = window.createView();
        document.body.appendChild(windowFragment);
    };
    return layx;
}

export default layxInstance();