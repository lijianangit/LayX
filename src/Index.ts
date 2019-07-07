import Layx from "./Layx";
import StoreState from "./core/store/StoreState";

import "./asset/style";

export default (function layx(): Layx {
    const layx = <Layx>function (options: any): void { };

    layx.v = "4.0.0";
    layx.store = StoreState.instance;

    return layx;
})();