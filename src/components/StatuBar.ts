import Component from "./Componet";
import Container from "./Container";

export default class StatuBar implements Component {
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
        statuBarElement.style.background = this.background;
        statuBarElement.style.height = `${this.height}px`;

        fragment.appendChild(statuBarElement);
        return fragment;
    }
}