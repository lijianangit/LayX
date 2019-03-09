import App from "../../core/App";
import UIWindow from "../../controls/UIWindow";
import UIToolBar from "../../controls/UIToolBar";
import UIWindowComponent from "./UIWindowComponent";

export default class UIToolBarComponent extends UIWindowComponent {
    constructor(app: App, window: UIWindow, public readonly toolBar: UIToolBar) {
        super(app, window);
    }
}