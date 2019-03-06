import App from "../../core/App";
import UIComponent from "./UIComponent";
import UIWindow from "../../controls/UIWindow";

export default class UIWindowRelative extends UIComponent {
    constructor(app: App, readonly window: UIWindow) {
        super(app);
    }
}