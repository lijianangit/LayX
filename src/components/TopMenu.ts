import Container from "./Container";
import Component from "./Componet";

export default class TopMenu implements Component {
    readonly name: string = "topMenu";

    background: string = "#eeeef2";

    constructor(public container: Container) {
        if (typeof container.topMenu === "object") {
            this.background = container.topMenu.background || this.background;
        }
    }

    createView(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const topMenuElement = document.createElement("div");
        topMenuElement.classList.add(`${this.container.prefix}top-menu`);
        topMenuElement.style.background = this.background;

        fragment.appendChild(topMenuElement);
        return fragment;
    }
}