import Component from "./Componet";
import Container from "./Container";

export default class StatuBar implements Component {
    readonly  name: string = "statuBar";

    height: number = 30;
    background: string = "#eeeef2";

    constructor(public container: Container) {
        if (typeof container.statuBar === "object") {
            this.background = container.statuBar.background || this.background;
            this.height = container.statuBar.height || this.height;
        }
    }

    createView(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const statuBarElement = document.createElement("div");
        statuBarElement.classList.add(`${this.container.prefix}statu-bar`);
        statuBarElement.style.height = `${this.height}px`;
        statuBarElement.style.background = this.background;

        fragment.appendChild(statuBarElement);
        return fragment;
    }
}