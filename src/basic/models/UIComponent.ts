import App from "../../core/App";

export default abstract class UIComponent {
    private state: any;
    constructor(protected readonly app: App) {
    }
}