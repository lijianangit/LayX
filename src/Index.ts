import Layx from "./Layx";
import StoreState from "./core/store/StoreState";
import UILayer from "./component/UILayer";
import * as Consts from "./core/enum/Consts";

import "./asset/style";

export default (function layx(): Layx {
    const layx = <Layx>function (options: any): void { };

    layx.v = "4.0.0";

    layx.store = StoreState.instance;

    layx.test = function (): Element {
        const layer = new UILayer();
        layer.width = 800;
        layer.height = 600;
        layer.border = "1px solid #3baced";
        layer.shadow = "rgba(0, 0, 0, 0.3) 1px 1px 24px";
        layer.borderRadius = 4;
        layer.animate = Consts.Animate.ZOOM;

        const element = layer.createView();
        console.log(element);
        document.body.appendChild(element);
        return element;
    }
    return layx;
})();