import App from "../../core/App";

export default abstract class UIComponent {
    private state: any;
    constructor(public readonly app: App) {
    }
}