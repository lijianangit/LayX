import { ThemeEnum } from "../enums/ThemeEnum";
import Component from "./Componet";

export default class Container implements Component {
    private prefix: string = "layx-";

    id: string;
    width?: number | string = 800;
    height?: number | string = 600;
    minWidth?: number | string = 200;
    minHeight?: number | string = 200;
    maxWidth?: number | string = "100%";
    maxHeight: number | string = "100%";
    theme?: ThemeEnum.DEFAULT

    constructor(options: ContainerOptions) {
        this.id = `${this.prefix}${options.id}`;
    }

    createView(container: Container): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const containerElement = document.createElement("div");
        containerElement.id = container.id;
        containerElement.classList.add(`${container.prefix}container`);
        containerElement.style.width = "800px";

        fragment.appendChild(containerElement);
        return fragment;
    }
}