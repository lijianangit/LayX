import { ThemeEnum } from "../enums/ThemeEnum";
import Component from "./Componet";
import { ContainerOptions } from "../types/Constraint";
import { convertDimension } from "../utils/ValueTypeHelper";

export default class Container implements Component {
    private prefix: string = "layx-";

    readonly id: string;
    width: number = 800;
    height: number = 600;
    minWidth: number = 200;
    minHeight: number = 200;
    maxWidth: number | null = innerWidth;
    maxHeight: number | null = innerHeight;
    theme: ThemeEnum = ThemeEnum.DEFAULT;

    constructor(options: ContainerOptions) {
        this.id = `${this.prefix}${options.id}`;

        this.width = convertDimension(options.width) || this.width;
        this.height = convertDimension(options.height, "BROWSER_INNER_HEIGHT") || this.height;
        this.minWidth = convertDimension(options.minWidth) || this.minWidth;
        this.minHeight = convertDimension(options.minHeight, "BROWSER_INNER_HEIGHT") || this.minHeight;
        this.maxWidth = convertDimension(options.maxWidth) || this.maxWidth;
        this.maxHeight = convertDimension(options.maxHeight, "BROWSER_INNER_HEIGHT") || this.maxHeight;
        this.theme = options.theme || this.theme;
    }

    createView(container: Container): DocumentFragment {
        const fragment = document.createDocumentFragment();

        const containerElement = document.createElement("div");
        containerElement.id = container.id;
        containerElement.classList.add(`${container.prefix}container`, `${container.prefix + container.theme}`);
        containerElement.style.width = `${container.width}px`;
        containerElement.style.height = `${container.height}px`;
        containerElement.style.minWidth = `${container.minWidth}px`;
        containerElement.style.minHeight = `${container.minHeight}px`;
        containerElement.style.maxWidth = container.maxWidth === innerWidth ? null : `${container.maxWidth}px`;
        containerElement.style.maxHeight = container.maxHeight === innerHeight ? null : `${container.maxHeight}px`;

        fragment.appendChild(containerElement);
        return fragment;
    }
}