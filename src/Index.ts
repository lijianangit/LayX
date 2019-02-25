import AppProcess from "./core/AppProcess";
import { Layx, WindowOptions } from "./typings/Index";

import "./assets/app.css";

function layxInstance(): Layx {
    const layx = <Layx>function (options: any): void { };
    const appProcess = new AppProcess();

    layx.v = appProcess.version;

    layx.create = function (options: WindowOptions) {
        appProcess.create(options);
    };

    layx.destroy = function (id: string) {
        appProcess.destroy(id);
    }
    return layx;
}

export default layxInstance();