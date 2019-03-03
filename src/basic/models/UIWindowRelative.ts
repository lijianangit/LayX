import UIComponent from "./UIComponent";
import UIWindow from "../../controls/UIWindow";
import App from "../../core/App";

export default class UIWindowRelative extends UIComponent {
    constructor(app: App, readonly window: UIWindow) {
        super(app);
    }
}