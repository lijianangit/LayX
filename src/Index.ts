import Layx from "./Layx";
import StoreState from "./core/store/StateStore";
import UIBlock from "./component/UIBlock";
import * as Consts from "./core/enum/Consts";

import "./asset/style";

export default (function layx(): Layx {
    const layx = <Layx>function (options: any): void { };

    layx.v = "4.0.0";

    layx.stateStore = StoreState.instance;

    layx.test = function (): Element {
        const block = new UIBlock();
        block.width = 800;
        block.height = 600;
        block.position = Consts.Position.CENTER;
        block.border = "1px solid #3baced";
        block.shadow = "rgba(0, 0, 0, 0.3) 1px 1px 24px";
        block.borderRadius = 4;
        block.animate = Consts.Animate.ZOOM;

        const element = block.createView();
        document.body.appendChild(element);
        return element;
    }

    return layx;
})();