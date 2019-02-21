import UIWindow from "./UIWindow";
import AppProcess from "../../core/AppProcess";

abstract class UIComponent {
    constructor(public window: UIWindow, public app: AppProcess) { }
    abstract name: string;
    abstract createView(): DocumentFragment;
}

export default UIComponent;