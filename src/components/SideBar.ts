import Container from "./Container";
import Component from "./Componet";

export default class SideBar implements Component {
    width: number = 60;
    background: string = "#eeeef2";

    constructor(public container: Container) {
        if (typeof container.sideBar === "object") {
            this.width = container.sideBar.width || this.width;
            this.background = container.sideBar.background || this.background;
        }
    }

    createView(): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const sideBarElement = document.createElement("div");
        sideBarElement.classList.add(`${this.container.prefix}side-bar`);
        sideBarElement.style.width = `${this.width}px`;
        sideBarElement.style.background = this.background;

        fragment.appendChild(sideBarElement);
        return fragment;
    }
}