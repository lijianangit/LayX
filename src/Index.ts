import { Layx, WindowOptions } from "./typings/Index";

import "./assets/styles/common.css";
import AppProcess from "./core/AppProcess";

function layxInstance(): Layx {
    const layx = <Layx>function (options: any): void { };
    const appProcess = new AppProcess();

    layx.v = appProcess.version;

    layx.create = function (options: WindowOptions) {
        appProcess.create(options);
    };
    return layx;
}

export default layxInstance();