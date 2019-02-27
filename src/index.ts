import App from "./core/App";
import { Layx } from "../types";

function layx(): Layx {
    const app = new App();
    const layx = <Layx>function (options: any): void { };

    layx.create = function (options: any) {
        app.create();
    }

    return layx;
}

export default layx();