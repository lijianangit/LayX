import UIWindow from "./UIWindow";
import { Layx } from "../../types/Index";

abstract class UIComponent {
    constructor(public window: UIWindow, public layx: Layx) { }
    abstract name: string;
    abstract createView(): DocumentFragment;
}

export default UIComponent;