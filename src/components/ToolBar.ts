import Component from "./Componet";
import Container from "./Container";

export default class ToolBar implements Component {
    height: number = 30;
    background: string = "#ffffff";

    constructor(public container: Container) {
        if (typeof container.toolBar === "object") {
            this.background = container.toolBar.background || this.background;
            this.height = container.toolBar.height || this.height;
        }
    }

    createView(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const toolBarElement = document.createElement("div");
        toolBarElement.classList.add(`${this.container.prefix}toolbar`);
        toolBarElement.style.background = this.background;
        toolBarElement.style.height = `${this.height}px`;

        fragment.appendChild(toolBarElement);
        return fragment;
    }
}