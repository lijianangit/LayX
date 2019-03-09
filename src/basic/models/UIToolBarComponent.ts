import UIComponent from "./UIComponent";
import App from "../../core/App";
import UIWindow from "../../controls/UIWindow";
import UIToolBar from "../../controls/UIToolBar";

export default class UIToolBarComponent extends UIComponent {
    constructor(app: App, readonly window: UIWindow, readonly toolBar: UIToolBar) {
        super(app);
    }
}