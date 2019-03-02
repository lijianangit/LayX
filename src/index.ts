import App from "./core/App";
import Layx from "./basic/interfaces/Layx";
import { WindowOptions } from "../types";

import "./assets/app.css";

export default (function layx(): Layx {
    const app = new App();
    const layx = <Layx>function (options: any): void { };

    layx.v = app.version;
    layx.create = function (options: WindowOptions) {
        app.create(options);
    }
    layx.windows = app.windows;
    layx.window = app.window;
    layx.getWindow = function (id: string) {
        return app.getWindow(id);
    }

    return layx;
})();