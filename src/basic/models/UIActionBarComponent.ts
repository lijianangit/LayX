import App from "../../core/App";
import UIWindow from "../../controls/UIWindow";
import UIToolBar from "../../controls/UIToolBar";
import UIToolBarComponent from "./UIToolBarComponent";
import UIActionBar from "../../controls/UIActionBar";

export default class UIActionBarComponent extends UIToolBarComponent {
    constructor(app: App, window: UIWindow, toolBar: UIToolBar, public readonly actionBar: UIActionBar) {
        super(app, window, toolBar);
    }
}