import App from "./core/App";
import Layx from "./basic/interfaces/Layx";
import * as Types from "../types";

import "./assets/styles";
import "./assets/icons";

export default (function layx(): Layx {
    const layx = <Layx>function (options: any): void { };

    const app = new App(layx);
    layx.v = app.version;
    layx.open = function (options: Types.WindowOption) {
        app.open(options);
    }
    layx.windows = app.windows;
    layx.window = app.window;
    layx.getWindow = function (id: string) {
        return app.getWindow(id);
    }
    layx.destroy = function (id: string) {
        app.destroy(id);
    }

    return layx;
})();