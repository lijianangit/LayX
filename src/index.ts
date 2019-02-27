import App from "./core/App";
import { Layx, WindowOptions } from "../types";

import "./assets/app.css";

export default (function layx(): Layx {
    const app = new App();
    const layx = <Layx>function (options: any): void { };

    layx.v = app.version;
    layx.create = function (options: WindowOptions) {
        app.create(options);
    }

    return layx;
})();